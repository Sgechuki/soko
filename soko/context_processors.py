


from soko.models import Category
"""
    Make Category class available to template contexts
"""

def categories(request):
    categories = Category.objects.all()
    context = {
        'categories': categories
    }
    return context