# -*- coding: utf-8 -*-
"""
Created on Thu Jan 28 20:14:30 2016

@author: Larry
"""
from django.conf.urls import url
from my_roster.views import index, my_roster, put_nfl_players, \
    get_nfl_players, put_nfl_teams, get_nfl_teams, put_nfl_positions, \
    get_nfl_positions

urlpatterns = [ 
    url(r'^$', index.as_view(), name='index'),
    url(r'^my_roster/$', my_roster.as_view(), name='my_roster'),
    url(r'^put_nfl_players/$', put_nfl_players.as_view(), \
        name='put_nfl_players'),
    url(r'^get_nfl_players/$', get_nfl_players.as_view(), \
        name='get_nfl_roster'),
    url(r'^put_nfl_teams/$', put_nfl_teams.as_view(), \
        name='put_nfl_teams'),
    url(r'^get_nfl_teams/$', get_nfl_teams.as_view(), \
        name='get_nfl_teams'),    
    url(r'^put_nfl_positions/$', put_nfl_positions.as_view(), \
        name='put_nfl_positions'),
    url(r'^get_nfl_positions/$', get_nfl_positions.as_view(), \
        name='get_nfl_positions'),    
    ]

