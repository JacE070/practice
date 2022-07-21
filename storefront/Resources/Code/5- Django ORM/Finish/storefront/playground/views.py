from django.shortcuts import render
from django.db.models import Q, F
from django.db.models.aggregates import Count, Min, Max, Avg
from store.models import Product, OrderItem, Customer


def say_hello(request):
    # queryset = Product.objects.values('id', 'title')
    # queryset = Product.objects.filter(id__in=OrderItem.objects.values(
    #     'product_id').distinct()).order_by('title')
    # queryset = Product.objects.only('id', 'title')
    queryset = Product.objects.values('id', 'title')
    OrderItem.objects.aggregate(count=Count('id'))
    OrderItem.objects.filter(pk='1').aggregate(count=Count('product_id'))

    return render(request, 'hello.html', {'name': 'Mosh', 'products': list(queryset)})
