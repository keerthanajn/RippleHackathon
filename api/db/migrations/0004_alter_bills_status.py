# Generated by Django 5.0.4 on 2024-04-13 19:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('db', '0003_alter_bills_date_alter_bills_due_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bills',
            name='status',
            field=models.CharField(default='Pending', max_length=200),
        ),
    ]
