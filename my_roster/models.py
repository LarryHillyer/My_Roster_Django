from django.db import models

import jsonfield

class Nfl_Players(models.Model):
    nfl_players = jsonfield.JSONField(null = True)
    
class Nfl_Teams(models.Model):
    nfl_teams = jsonfield.JSONField(null = True)
    
class Nfl_Positions(models.Model):
    nfl_positions = jsonfield.JSONField(null = True)

# Create your models here.
