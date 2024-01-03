from django.shortcuts import render
from rest_framework import viewsets
from api.models import Goals
from api.serializers import GoalsSerializer

# Create your views here.
class GoalsViewSet(viewsets.ModelViewSet):
    queryset = Goals.objects.all()
    serializer_class = GoalsSerializer
