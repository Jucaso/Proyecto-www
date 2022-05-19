from .models import Beca
from rest_framework import serializers

class BecaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Beca
        fields = '__all__'