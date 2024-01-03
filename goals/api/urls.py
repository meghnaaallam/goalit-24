from django.contrib import admin
from django.urls import path, include
from api.views import GoalsViewSet
from rest_framework import routers


router = routers.DefaultRouter()
router.register('dashboard',GoalsViewSet)

urlpatterns = [
    path('', include(router.urls))
]