from django.http import JsonResponse
from django.shortcuts import get_object_or_404, render

from cart.cart import Cart
from soko.models import Product

# Create your views here.

def cart_summary(request):
    cart = Cart(request)
    context = {
        'cart': cart
    }
    return render(request, "soko/cart_summary.html", context)

def cart_add(request):
    cart = Cart(request)
    if request.POST.get('action') == 'post':
        product_id = int(request.POST.get('productId'))
        product_qty = int(request.POST.get('productQty'))
        product = get_object_or_404(Product, id=product_id)
        cart.add(product=product, qty=product_qty)

        cart_qty = cart.__len__()
        print(cart_qty)
        response = JsonResponse({'qty':cart_qty})
        return response
        
def cart_delete(request):
    cart = Cart(request)
    if request.POST.get('action') == 'post':
        product_id = int(request.POST.get('productId'))
        cart.delete(product=product_id)
        cart_qty = cart.__len__()
        cart_total = cart.get_total_price()
        response = JsonResponse({'qty': cart_qty, 'subtotal': cart_total})
        return response

def cart_update(request):
    cart = Cart(request)
    if request.POST.get('action') == 'post':
        product_id = int(request.POST.get('productId'))
        product_qty = int(request.POST.get('productQty'))
        cart.update(product=product_id, qty=product_qty)

        cart_qty = cart.__len__()
        cart_total = cart.get_total_price()

        response = JsonResponse({'qty': cart_qty, 'subtotal': cart_total})
        return response

