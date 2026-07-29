from django.urls import path
from . import views

urlpatterns = [
    path('auth/google/', views.GoogleAuthView.as_view(), name='google-auth'),
    path('auth/google/callback/', views.GoogleAuthCallbackView.as_view(), name='google-auth-callback'),
    path('agendar/', views.AgendarReunionView.as_view(), name='agendar-reunion'),
]
