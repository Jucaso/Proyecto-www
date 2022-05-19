from django.db import models

# Create your models here.
class Beca(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    categoria = models.CharField(max_length=20)
    financiacion = models.CharField(max_length=10)
    pais = models.CharField(max_length=50)
    universidad = models.CharField(max_length=100)
    requerimientos = models.CharField(max_length=500)

    def __str__(self) :
        return self.nombre
