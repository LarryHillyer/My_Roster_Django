# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('my_roster', '0005_auto_20160204_2014'),
    ]

    operations = [
        migrations.CreateModel(
            name='My_Players',
            fields=[
                ('id', models.AutoField(serialize=False, auto_created=True, verbose_name='ID', primary_key=True)),
                ('player', models.CharField(max_length=30)),
                ('player_info', jsonfield.fields.JSONField(null=True)),
            ],
        ),
    ]
