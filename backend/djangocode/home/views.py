from django.shortcuts import render
from django.http import HttpRequest
from django.http import JsonResponse


# Create your views here.


def index(request):
    data = {'message': 'Hello from the index view!'}
    return JsonResponse(data)
