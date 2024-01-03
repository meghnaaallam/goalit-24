from rest_framework import serializers
from api.models import Goals

#create serializers

class GoalsSerializer(serializers.HyperlinkedModelSerializer):
    id=serializers.ReadOnlyField()
    class Meta:
            model=Goals
            fields="__all__"