import base64

from googleapiclient.discovery import build
from googleapiclient.errors import HttpError
from email.mime.text import MIMEText

from calendario.google_calendar import get_credentials


def send_email(destinatario: str, asunto: str, mensaje: str):
    creds = get_credentials()
    if not creds:
        raise PermissionError('No hay credenciales válidas. Debe autenticarse primero.')

    message = MIMEText(mensaje, 'html')
    message['to'] = destinatario
    message['subject'] = asunto

    raw = base64.urlsafe_b64encode(message.as_bytes()).decode('utf-8')

    try:
        service = build('gmail', 'v1', credentials=creds)
        sent = service.users().messages().send(
            userId='me',
            body={'raw': raw},
        ).execute()
        return sent
    except HttpError as e:
        raise RuntimeError(f'Error al enviar email: {e}')
