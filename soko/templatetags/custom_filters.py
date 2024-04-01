
# store/templatetags/custom_filters.py
from django import template

register = template.Library()

@register.filter(name='split_by_comma')
def split_by_comma(value):
    return value.split(',')