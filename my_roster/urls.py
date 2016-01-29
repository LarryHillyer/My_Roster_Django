# -*- coding: utf-8 -*-
"""
Created on Thu Jan 28 20:14:30 2016

@author: Larry
"""
from django.conf.urls import url
from my_roster.views import index

urlpatterns = [ 
    url(r'^$', index.as_view(), name='index'),
    
    ]

