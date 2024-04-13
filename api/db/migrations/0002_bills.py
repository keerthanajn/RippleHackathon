# Generated by Django 5.0.4 on 2024-04-13 18:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('db', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Bills',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sender_name', models.CharField(max_length=200)),
                ('sender_email', models.CharField(max_length=200)),
                ('reciever_name', models.CharField(max_length=200)),
                ('reciever_email', models.CharField(max_length=200)),
                ('reference', models.CharField(max_length=200)),
                ('amount', models.IntegerField()),
                ('date', models.DateTimeField(auto_now=True)),
                ('due_date', models.DateTimeField()),
                ('status', models.BooleanField(default=False)),
            ],
        ),
    ]