# -*- coding: utf-8 -*-
"""
Created on Sun Jan 31 10:41:06 2016

@author: Larry
"""

from rest_framework import serializers

from my_roster.models import Nfl_Players, Nfl_Teams, Nfl_Positions, \
    Nfl_Jersey_Numbers, My_Players

class Nfl_Players_Serializer(serializers.ModelSerializer):
    
    class Meta:
        model = Nfl_Players
        fields = ['nfl_players']
        
class Nfl_Teams_Serializer(serializers.ModelSerializer):
    
    class Meta:
        model = Nfl_Teams
        fields = ['nfl_teams']
        
class Nfl_Positions_Serializer(serializers.ModelSerializer):
    
    class Meta:
        model = Nfl_Positions
        fields = ['nfl_positions']

class Nfl_Jersey_Numbers_Serializer(serializers.ModelSerializer):
    
    class Meta:
        model = Nfl_Jersey_Numbers
        fields = ['nfl_jersey_numbers']

class My_Players_Serializer(serializers.ModelSerializer):
    
    class Meta:
        model = My_Players
        
        fields = ['player','player_info']        