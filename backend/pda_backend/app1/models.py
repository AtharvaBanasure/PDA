from django.db import models
from django.contrib.auth.models import AbstractUser

class AppUser(AbstractUser):
    username = models.EmailField(max_length=50, unique=True)
    # username = models.CharField(max_length=100, unique=True)
    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS=[]
    # pid = models.CharField(max_length=12, unique=True)
    # REQUIRED_FIELDS = ['pid','username']
    def __str__(self):
        return self.username