from rest_framework import serializers
from db.models import *

#module serializers
class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Login
        fields = ["username", "password", "name"]
    