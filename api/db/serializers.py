from rest_framework import serializers
from db.models import *
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ["username", "password", "name"]
    