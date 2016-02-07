# -*- coding: utf-8 -*-
"""
Created on Thu Jan 28 20:14:30 2016

@author: Larry
"""
from django.conf.urls import url
from my_roster.views import index, my_roster, put_nfl_players, \
    get_nfl_players, put_nfl_teams, get_nfl_teams, put_nfl_positions, \
    get_nfl_positions, put_nfl_jersey_numbers, get_nfl_jersey_numbers, \
    get_my_players, put_my_players, admin, delete_my_player

urlpatterns = [ 
    url(r'^$', index.as_view(), name='index'), \
    url(r'^my_roster/$', my_roster.as_view(), name='my_roster'), \
    url(r'^admin/$', admin.as_view(), name='admin'), \
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
    url(r'^put_nfl_jersey_numbers/$', put_nfl_jersey_numbers.as_view(), \
        name='put_nfl_jersey_numbers'),
    url(r'^get_nfl_jersey_numbers/$', get_nfl_jersey_numbers.as_view(), \
        name='get_nfl_jersey_numbers'), 
    url(r'^put_my_players/$', put_my_players.as_view(), \
        name='put_my_players'),
    url(r'^get_my_players/$', get_my_players.as_view(), \
        name='get_my_players'),
    url(r'^delete_my_player/$', delete_my_player.as_view(), \
        name='delete_my_player'),    
    ]

