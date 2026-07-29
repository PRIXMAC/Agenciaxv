from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .google_calendar import (
    get_flow,
    get_authorization_url,
    fetch_token,
    create_calendar_event,
)


class GoogleAuthView(APIView):
    def get(self, request):
        redirect_uri = request.build_absolute_uri('/api/auth/google/callback/')
        flow = get_flow(redirect_uri)
        auth_url = get_authorization_url(flow)
        return Response({'auth_url': auth_url})


class GoogleAuthCallbackView(APIView):
    def get(self, request):
        redirect_uri = request.build_absolute_uri('/api/auth/google/callback/')
        flow = get_flow(redirect_uri)
        authorization_response = request.build_absolute_uri()
        fetch_token(flow, authorization_response)
        return Response({'message': 'Autenticación exitosa. Ya puedes agendar reuniones.'})


class AgendarReunionView(APIView):
    def post(self, request):
        fecha = request.data.get('fecha')
        hora = request.data.get('hora')
        nombre = request.data.get('nombre')
        email = request.data.get('email')
        duracion = request.data.get('duracion', 60)

        if not all([fecha, hora, nombre, email]):
            return Response(
                {'error': 'Faltan campos requeridos: fecha, hora, nombre, email'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            event = create_calendar_event(fecha, hora, nombre, email, duracion)
            return Response({
                'message': 'Reunión agendada exitosamente',
                'evento_id': event.get('id'),
                'link': event.get('htmlLink'),
            })
        except PermissionError as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_401_UNAUTHORIZED,
            )
        except Exception as e:
            return Response(
                {'error': str(e)},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
