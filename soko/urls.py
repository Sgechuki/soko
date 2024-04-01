from django.urls import path
from soko import views

app_name = "soko"

urlpatterns = [
    path("", views.index, name="index"),
    path("product/<int:pk>/", views.product, name="product"),
    path("search/<int:fk>/", views.category_list, name="category_list"),
    path("cart/", views.cart, name="cart"),
    path("checkout/", views.checkout, name="checkout"),
]