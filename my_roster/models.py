from django.db import models

import jsonfield

class Nfl_Players(models.Model):
    nfl_players = jsonfield.JSONField(null = True)

# Create your models here.
