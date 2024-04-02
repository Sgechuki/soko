from django.shortcuts import render

# Create your views here.

def cart_summary(request):
    context = {}
    return render(request, "soko/cart_summary.html", context)
