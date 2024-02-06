from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import *
from django.contrib.auth import get_user_model, authenticate
from django.core.exceptions import ValidationError
UserModel = get_user_model()

class UserSerializer(ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = AppUser
        fields = [
            'username',
            'password',
            # 'email',
            # 'pid',
        ]

    def create(self, data):
        pid = data.get('pid', '')
        user = AppUser.objects.create(
            username=data['username'],
            # email=data['email'],
            # pid=pid,
        )
        user.set_password(data['password'])
        user.save()
        return user