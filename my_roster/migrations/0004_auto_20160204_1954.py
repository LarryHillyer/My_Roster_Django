# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('my_roster', '0003_nfl_jeresy_numbers'),
    ]

    operations = [
        migrations.RenameField(
            model_name='nfl_jeresy_numbers',
            old_name='nfl_positions',
            new_name='nfl_jeresy_numbers',
        ),
    ]
