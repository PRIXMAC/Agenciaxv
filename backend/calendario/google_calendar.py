import os
import pickle
from datetime import datetime, timedelta
from pathlib import Path

from google.auth.transport.requests import Request
from google_auth_oauthlib.flow import Flow
from googleapiclient.discovery import build
from googleapiclient.errors import HttpError

from django.conf import settings


def get_flow(redirect_uri: str) -> Flow:
    flow = Flow.from_client_secrets_file(
        str(settings.GOOGLE_CREDENTIALS_PATH),
        scopes=[
            'https://www.googleapis.com/auth/calendar.events',
            'https://www.googleapis.com/auth/gmail.send',
        ],
        redirect_uri=redirect_uri,
    )
    return flow


def get_authorization_url(flow: Flow) -> str:
    auth_url, _ = flow.authorization_url(
        access_type='offline',
        include_granted_scopes='true',
        prompt='consent',
    )
    return auth_url


def fetch_token(flow: Flow, authorization_response: str):
    flow.fetch_token(authorization_response=authorization_response)
    creds = flow.credentials
    _save_token(creds)
    return creds


def get_credentials():
    creds = None
    token_path = Path(settings.GOOGLE_TOKEN_PATH)

    if token_path.exists():
        with open(token_path, 'rb') as token:
            creds = pickle.load(token)

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            creds.refresh(Request())
            _save_token(creds)
        else:
            return None

    return creds


def _save_token(creds):
    token_path = Path(settings.GOOGLE_TOKEN_PATH)
    token_path.parent.mkdir(parents=True, exist_ok=True)
    with open(token_path, 'wb') as token:
        pickle.dump(creds, token)


def create_calendar_event(fecha: str, hora: str, cliente_nombre: str, cliente_email: str, duracion_minutos: int = 60):
    creds = get_credentials()
    if not creds:
        raise PermissionError('No hay credenciales válidas. Debe autenticarse primero.')

    start_dt = datetime.fromisoformat(f'{fecha}T{hora}')
    end_dt = start_dt + timedelta(minutes=duracion_minutos)

    event = {
        'summary': f'Reunión con {cliente_nombre} - Agencia XV',
        'description': f'Cliente: {cliente_nombre}\nEmail: {cliente_email}',
        'start': {
            'dateTime': start_dt.isoformat(),
            'timeZone': 'America/Santiago',
        },
        'end': {
            'dateTime': end_dt.isoformat(),
            'timeZone': 'America/Santiago',
        },
        'attendees': [{'email': cliente_email}],
        'reminders': {
            'useDefault': False,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 30},
            ],
        },
    }

    try:
        service = build('calendar', 'v3', credentials=creds)
        event_result = service.events().insert(
            calendarId=settings.GOOGLE_CALENDAR_ID,
            body=event,
            sendUpdates='all',
        ).execute()
        return event_result
    except HttpError as e:
        raise RuntimeError(f'Error al crear evento en Google Calendar: {e}')
