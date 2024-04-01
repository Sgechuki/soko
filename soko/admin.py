from django.contrib import admin
from soko.models import Category, Product

# Register your models here.
@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'name', 'slug', 'image', 'creationAt', 'updatedAt']
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id','title', 'slug', 'price', 'description', 'category', 'images', 
                      'creationAt', 'updatedAt']
    list_editable = ['price', 'description']
    prepopulated_fields = {'slug': ('title',)}