from django.db import models

import jsonfield

class Nfl_Players(models.Model):
    nfl_players = jsonfield.JSONField(null = True)
    
class Nfl_Teams(models.Model):
    nfl_teams = jsonfield.JSONField(null = True)
    
class Nfl_Positions(models.Model):
    nfl_positions = jsonfield.JSONField(null = True)

class Nfl_Jersey_Numbers(models.Model):
    nfl_jersey_numbers = jsonfield.JSONField(null = True)

class My_Players(models.Model):
    player = models.CharField(max_length = 30)
    player_info = jsonfield.JSONField(null = True)

