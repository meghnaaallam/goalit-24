from django.db import models

# Create your models here.
#Creating a model for Goals App

class Goals(models.Model):
     id=models.AutoField(primary_key = True)
     name = models.CharField(max_length=150, null=False,blank=False)
     description = models.TextField()
     category = models.CharField(max_length=50, choices=((('Travel','Travel'),
     ('Adventure','Adventure'),('Fun','Fun'),('Creative','Creative'),
     ('Skills','Skills'),('Fitness','Fitness'),('Personal','Personal'),
     ('Finance','Finance'))))
     created_date=models.DateTimeField(auto_now=True)
     updated_date = models.DateTimeField(auto_now=True)