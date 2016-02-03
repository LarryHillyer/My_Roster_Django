# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('my_roster', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Nfl_Positions',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('nfl_positions', jsonfield.fields.JSONField(null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Nfl_Teams',
            fields=[
                ('id', models.AutoField(verbose_name='ID', primary_key=True, serialize=False, auto_created=True)),
                ('nfl_teams', jsonfield.fields.JSONField(null=True)),
            ],
        ),
    ]
