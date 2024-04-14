"""
URL configuration for api project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path,include
# from django.conf.urls import url
from db import views
from db.views import *


urlpatterns = [
    path('admin/', admin.site.urls),
    path('getuser/', views.getallusers.user_login), #link to all users in database for login purposes
    path('getaccount/', views.GetAccount.get), #Link to all the accounts owned by the user
    path('getbills/', views.getbills.get_bills), #link to all the bils payed/pending to pay by user
    path('postaccount/', views.PostAccount.post), #link to add new account to database
    # path('',LoginView.as_view(), name="React" ),
    # path('account/', AccountView.as_view(), name="account" )
]
