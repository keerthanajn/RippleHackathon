from django.db import models

# class AccountType(models.Model):
#      name = models.CharField(max_length=200)

class Login(models.Model):
    username = models.CharField(max_length=15, unique=True)
    password = models.CharField(max_length=15)
    name = models.CharField(max_length=200)

class Account(models.Model):
    account_id = models.IntegerField(unique=True)
    account_name = models.CharField(max_length=200)
    account_type = models.CharField(max_length=200)

class Bills(models.Model):
    sender_name = models.CharField(max_length=200)
    sender_email = models.CharField(max_length=200)
    reciever_name = models.CharField(max_length=200)
    reciever_email = models.CharField(max_length=200) 
    reference = models.CharField(max_length=200) 
    amount = models.IntegerField()
    date = models.DateField(auto_now=True)
    due_date = models.DateField()
    status = models.CharField(max_length=200, default="Pending")

