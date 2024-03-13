# views.py

from django.shortcuts import render
from .models import Flashcard
from django.http import JsonResponse

def flashcard_list(request):
    flashcards = Flashcard.objects.all().values('question', 'answer')
    return JsonResponse(list(flashcards), safe=True)
