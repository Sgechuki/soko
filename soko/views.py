from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return render(request, 'soko/index.html')

def cart(request):
    return render(request, 'soko/cart.html')

def checkout(request):
    return render(request, 'soko/checkout.html')