# flashcards_app/admin.py

from django.contrib import admin
from .models import Flashcard

@admin.register(Flashcard)
class FlashcardAdmin(admin.ModelAdmin):
    list_display = ['question', 'answer']
    search_fields = ['question']