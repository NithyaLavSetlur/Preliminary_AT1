# flashcards_app/models.py

from django.db import models

class Flashcard(models.Model):
    question = models.CharField(max_length=255)
    answer = models.TextField()

    def __str__(self):
        return self.question

    class Meta:
        verbose_name = 'Flashcard'
        verbose_name_plural = 'Flashcards'
