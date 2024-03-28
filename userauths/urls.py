from django.urls import path
from userauths import views

app_nane = "userauths"

urlpatterns = [
    path("sign-up/", views.register_view, name="sign-up")
]