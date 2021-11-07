from django.urls import path, include
from .views import index, login, sobre, games

app_name = "core"

urlpatterns = [
    path('', index, name='index'),
    path('login', login, name='login'),
    path('sobre', sobre, name='sobre'),
    path('games', games, name='games'),
]
