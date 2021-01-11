
from django.urls import path, include
from . import views

urlpatterns = [
    path('send/', views.send_messange, name='send_messange')
]
