from django.urls import path
from . import views

urlpatterns = [
    path('contacto/', views.ContactoView.as_view(), name='contacto'),
]
