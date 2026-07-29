from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('calendario.urls')),
    path('api/', include('contacto.urls')),
]
