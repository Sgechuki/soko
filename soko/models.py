from django.db import models
from django.urls import reverse

# Create your models here.

class Category(models.Model):
    id = models.IntegerField(primary_key=True)
    name = models.CharField(max_length=100)
    image = models.URLField()
    creationAt = models.DateTimeField()
    updatedAt = models.DateTimeField()
    slug = models.SlugField(max_length=255, unique=True)

    class Meta:
        verbose_name_plural = 'categories'

    def get_absolute_url(self):
        return reverse('soko:category_list', args=[self.id])
    
    def __str__(self):
        return self.name
    
class Product(models.Model):
    id = models.IntegerField(primary_key=True)
    title = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()
    images = models.TextField()  # Store JSON data as string
    creationAt = models.DateTimeField()
    updatedAt = models.DateTimeField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='product')
    slug = models.SlugField(max_length=255)

    class Meta:
        verbose_name_plural = 'Products'
        ordering = ('-creationAt',)

    def get_absolute_url(self):
        return reverse('soko:product', args=[self.id])

    def __str__(self):
        return self.title
