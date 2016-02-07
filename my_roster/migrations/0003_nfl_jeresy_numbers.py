# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('my_roster', '0002_nfl_positions_nfl_teams'),
    ]

    operations = [
        migrations.CreateModel(
            name='Nfl_Jeresy_Numbers',
            fields=[
                ('id', models.AutoField(verbose_name='ID', auto_created=True, primary_key=True, serialize=False)),
                ('nfl_positions', jsonfield.fields.JSONField(null=True)),
            ],
        ),
    ]
