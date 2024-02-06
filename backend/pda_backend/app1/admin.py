from django.contrib import admin

# Register your models here.
from .models import AppUser

# Register your custom user model with the admin site
class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'password')
    fieldsets = (
        (None, {
            "fields": (
                 ('username', 'password',),
            ),
        }),
    )
    

admin.site.register(AppUser, UserAdmin)