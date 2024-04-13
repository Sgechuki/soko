# myapp/management/commands/populate_products.py
from django.core.management.base import BaseCommand
import requests
from django.utils.text import slugify
from soko.models import Product, Category

class Command(BaseCommand):
    help = 'Populate the Product table with data from the API'

    def handle(self, *args, **kwargs):
        url = 'https://api.escuelajs.co/api/v1/products'
        response = requests.get(url)
        data = response.json()

        for item in data:
            title = item['title']
            price = item['price']
            description = item['description']
            images = item['images']
            creationAt = item['creationAt']
            updatedAt = item['updatedAt']
            category_data = item['category']
            category_id = category_data['id']
            category = Category.objects.get(pk=category_id)

            slug = slugify(title)  # Generate slug from product title

            product = Product.objects.create(
                title=title,
                price=price,
                description=description,
                images=images,
                creationAt=creationAt,
                updatedAt=updatedAt,
                category=category,
                slug=slug
            )

            self.stdout.write(self.style.SUCCESS(f'Product "{title}" created with slug "{slug}"'))
    def images_urls(self, lst_str):
        urls = self.images()
        self.images = urls.replace("[']", "")
