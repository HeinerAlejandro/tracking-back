# Generated by Django 2.1.4 on 2019-03-20 03:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('devices', '0006_auto_20190319_1314'),
    ]

    operations = [
        migrations.AlterField(
            model_name='device',
            name='date_register',
            field=models.DateTimeField(auto_now=True, verbose_name='Fecha de registro'),
        ),
        migrations.AlterField(
            model_name='position',
            name='date_register',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Fecha de registro'),
        ),
    ]
