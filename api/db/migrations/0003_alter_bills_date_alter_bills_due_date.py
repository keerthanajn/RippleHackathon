# Generated by Django 5.0.4 on 2024-04-13 19:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('db', '0002_bills'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bills',
            name='date',
            field=models.DateField(auto_now=True),
        ),
        migrations.AlterField(
            model_name='bills',
            name='due_date',
            field=models.DateField(),
        ),
    ]
