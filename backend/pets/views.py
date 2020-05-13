from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.contrib.auth.models import User


def index(request):
    return HttpResponse("Welcome to Pet Search Web Site!")


def signup(request):
    name = request.GET.get('name')
    email = request.GET.get('email')
    password = request.GET.get('password')
    return HttpResponse(User.objects.create_user(name, email, password))
    # Создайте пользователя и сохраните его в базе данных
    # user = User.objects.create_user('test2', 'myemail@crazymail.com', 'mypasswordee')
    # return HttpResponse("new user {user} added")
    # Обновите поля и сохраните их снова
    # user.first_name = 'John'
    # user.last_name = 'Citizen'
    # user.save()

