from django.urls import path, include
from .views import index, login

urlpatterns = [
    path('', index),
    path('login', login),
]
