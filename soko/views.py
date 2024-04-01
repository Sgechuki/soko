from django.http import HttpResponse, JsonResponse
from django.shortcuts import get_object_or_404, render
from soko.models import Product, Category
import requests

# Create your views here.
def index(request):
    products = Product.objects.all()
    response = requests.get('https://api.escuelajs.co/api/v1/products').json()
    context = {
        'response': response,
        'products': products
    }
    
    return render(request, 'soko/index.html', context)

def categories(request):
    categories = Category.objects.all()
    context = {
        'categories': categories
    }
    return context

def cart(request):
    return render(request, 'soko/cart_summary.html')

def checkout(request):
    return render(request, 'soko/checkout.html')

def product(request, pk):
    url = "https://api.escuelajs.co/api/v1/products/{}".format(pk)
    response = requests.get(url).json()
    context = {
        'response': response    
    }
    return render(request, 'soko/product.html', context)

def category_list(request, fk):
    category = get_object_or_404(Category, id=fk)
    products = Product.objects.filter(category=category)
    context = {
        'category': category,
        'products': products
    }
    return render(request, 'soko/category.html', context)

def updateCart(request):
    return JsonResponse('Cart Updated', safe=False)