from .cart import Cart

"""
Cart class to be available to template contexts
"""

def cart(request):
    return {'cart': Cart(request)}