from rest_framework import viewsets
from .serializers import BecaSerializer
from .models import Beca

# Create your views here.
class BecaViewSet(viewsets.ModelViewSet):
    queryset = Beca.objects.all()
    serializer_class = BecaSerializer