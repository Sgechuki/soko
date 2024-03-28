from django.shortcuts import redirect, render
from userauths.forms import UserRegisterForm
from django.contrib.auth import login, authenticate
from django.contrib import messages

# Create your views here.

def register_view(request):

    if request.method == "POST":
        form = UserRegisterForm(request.POST or None)
        if form.is_valid():
            new_user = form.save()
            username = form.cleaned_data.get("username")
            messages.success(request, f"Hey {username}, Your account was created successfully")
            new_user = authenticate(username=form.cleaned_data['email'], 
                                    password=form.cleaned_data.get('password1'))
            login(request, new_user)
            return redirect('soko:index')
    else:
        form = UserRegisterForm()
        print("User can not be registered")
    

    context = {
        'form': form,
    }
    return render(request, "userauths/sign-up.html", context)