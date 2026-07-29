from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from django.conf import settings

from .gmail import send_email


class ContactoView(APIView):
    def post(self, request):
        nombre = request.data.get('nombre')
        email = request.data.get('email')
        telefono = request.data.get('telefono', '')
        mensaje = request.data.get('mensaje')

        if not all([nombre, email, mensaje]):
            return Response(
                {'error': 'Faltan campos requeridos: nombre, email, mensaje'},
                status=status.HTTP_400_BAD_REQUEST,
            )

        asunto = f'Nuevo contacto de {nombre} - Agencia XV'
        html = f"""
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> {nombre}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Teléfono:</strong> {telefono or 'No especificado'}</p>
        <hr>
        <p><strong>Mensaje:</strong></p>
        <p>{mensaje}</p>
        """

        try:
            send_email(
                destinatario=settings.GOOGLE_CALENDAR_ID,
                asunto=asunto,
                mensaje=html,
            )
            return Response({'message': 'Mensaje enviado correctamente'})
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
