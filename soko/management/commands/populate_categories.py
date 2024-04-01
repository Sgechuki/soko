# myapp/management/commands/populate_categories.py
from django.core.management.base import BaseCommand
import requests
from django.utils.text import slugify
from soko.models import Category

class Command(BaseCommand):
    help = 'Populate the Category table with data from the API'

    def handle(self, *args, **kwargs):
        url = 'https://api.escuelajs.co/api/v1/categories'
        response = requests.get(url)
        data = response.json()

        for item in data:
            name = item['name']
            image = item['image']
            creationAt = item['creationAt']
            updatedAt = item['updatedAt']

            slug = slugify(name)  # Generate slug from category name

            category = Category.objects.create(
                name=name,
                image=image,
                creationAt=creationAt,
                updatedAt=updatedAt,
                slug=slug
            )

            self.stdout.write(self.style.SUCCESS(f'Category "{name}" created with slug "{slug}"'))
