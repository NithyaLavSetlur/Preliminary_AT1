# flashcards_app/urls.py

from django.urls import path
from .views import flashcard_list

app_name = 'flashcards_app'

urlpatterns = [
    path('flashcard-list/', flashcard_list, name='flashcard_list'),
    # Add other URL patterns as needed
]