from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name='index'),
    path("games", views.game, name='game'),
    path("gamedatas", views.retrieveGameData, name='gamedata')
   
]