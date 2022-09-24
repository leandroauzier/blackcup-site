from django.urls import path
from .views import Home, Sobre, Games, Developers

urlpatterns = [
    path('', Home, name='home'),
    path('sobre', Sobre, name='sobre'),
    path('games', Games, name='games'),
    path('developers', Developers, name='developers'),
]