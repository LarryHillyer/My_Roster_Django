# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_roster', '0004_auto_20160204_1954'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Nfl_Jeresy_Numbers',
            new_name='Nfl_Jersey_Numbers',
        ),
        migrations.RenameField(
            model_name='nfl_jersey_numbers',
            old_name='nfl_jeresy_numbers',
            new_name='nfl_jersey_numbers',
        ),
    ]
