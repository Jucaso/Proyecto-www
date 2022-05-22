from rest_framework import viewsets
from .serializers import BecaSerializer, UserSerializer
from .models import Beca
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User

# Create your views here.
class BecaViewSet(viewsets.ModelViewSet):
    queryset = Beca.objects.all()
    serializer_class = BecaSerializer
    permission_classes = [IsAuthenticated]
    authentication_classes = (TokenAuthentication,)
    
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer