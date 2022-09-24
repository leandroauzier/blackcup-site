from django.shortcuts import render, HttpResponse


def Home(request):
    return render(request, "index.html")

def Sobre(request):
    return render(request, "sobre.html")

def Games(request):
    return render(request, "games.html")

def Developers(request):
    return render(request, "developers.html")