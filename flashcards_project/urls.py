# project_name/urls.py

from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls), # Django Admin site  #Edit to access admin site
    path('flashcards/', include('flashcards_app.urls')),  #Edit to access flashcards_app.urls
    # Add other app URLs as needed
]
