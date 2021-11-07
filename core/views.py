from django.shortcuts import render


def index(request):
    return render(request, 'index.html')


def login(request):
    return render(request, 'login.html')


def sobre(request):
    return render(request, 'sobre.html')


def games(request):
    return render(request, 'games.html')
