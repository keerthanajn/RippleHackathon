from django.shortcuts import render

# Create your views here.
# views.py
from rest_framework.views import APIView
from django.http import JsonResponse
from db.models import *
from .serializers import *
from django.views.decorators.csrf import csrf_exempt
import json
from rest_framework.response import Response




class getallusers(APIView):
    @csrf_exempt  # This decorator is used to allow POST requests without CSRF token
    def user_login(request):
        objs = Login.objects.all()
        mains = []
        for i in objs:
            js = {}
            js["username"]=i.username
            js["password"]=i.password
            js["name"] = i.name
            mains.append(js)
        return JsonResponse(mains,safe=False)

class GetAccount(APIView):
    @csrf_exempt
    def get(request):
            account = Account.objects.all()
            mains = []
            for i in account:
                js = {}
                js['account_id']=i.account_id
                js['account_name']=i.account_name
                js['account_type'] = i.account_type
                mains.append(js)
            return JsonResponse(mains, safe=False)
    
class GetBills(APIView):
    @csrf_exempt
    def get(request):
            account = Account.objects.all()
            mains = []
            for i in account:
                js = {}
                js['account_id']=i.account_id
                js['account_name']=i.account_name
                js['account_type'] = i.account_type
                mains.append(js)
            return JsonResponse(mains, safe=False)
    

class getbills(APIView):
    @csrf_exempt
    def get_bills(request):
            bills = Bills.objects.all()
            bill_list = []
            for bill in bills:
                bill_data = {}
                bill_data['sender_name']= bill.sender_name,
                bill_data['sender_email']= bill.sender_email,
                bill_data['reciever_name']= bill.reciever_name,
                bill_data['reciever_email']= bill.reciever_email,
                bill_data['reference']= bill.reference,
                bill_data['amount']=bill.amount,
                bill_data['date']= bill.date,  # Convert to string format
                bill_data['due_date']= bill.due_date,  # Convert to string format
                bill_data['status']= bill.status
                
                bill_list.append(bill_data)
            return JsonResponse(bill_list, safe=False)
    
class PostAccount(APIView):
    @csrf_exempt
    def post(request):
        data = json.loads(request.body)
        account_id = data.get('account_id', None)
        account_name = data.get('account_name', None)
        account_type = data.get('account_type', None)
        
        if account_id and account_name and account_type:
            # Assuming Account model has these fields
            Account.objects.create(
                account_id=account_id,
                account_name=account_name,
                account_type=account_type
            )
            return JsonResponse({'message': 'Account created successfully'}, status=201)
        else:
            return JsonResponse({'error': 'Incomplete data provided'}, status=400)

# class PostAccount(APIView):
#     def post(self, request):
#         if request.method == 'POST':
#             try:
#                 data = json.loads(request.body)
#                 account_id = data.get('account_id')
#                 account_name = data.get('account_name')
#                 account_type = data.get('account_type')

#                 # Perform any necessary validation on the data
#                 if not all([account_id, account_name, account_type]):
#                     return JsonResponse({'error': 'Missing required field(s)'}, status=400)

#                 # Check if the account_id is unique
#                 if Account.objects.filter(account_id=account_id).exists():
#                     return JsonResponse({'error': 'Account ID already exists'}, status=400)

#                 # Create the new account instance
#                 Account.objects.create(
#                     account_id=account_id,
#                     account_name=account_name,
#                     account_type=account_type
#                 )

#                 # Optionally, return a success message
#                 return JsonResponse({'message': 'Account created successfully'}, status=201)

#             except json.JSONDecodeError:
#                 return JsonResponse({'error': 'Invalid JSON format'}, status=400)

#             except Exception as e:
#                 return JsonResponse({'error': str(e)}, status=500)

#         else:
#             return JsonResponse({'error': 'Method not allowed'}, status=405)

    

# class LoginView(APIView):
#     def get(self,request):
#         output= [{"username":output.username,
#                   "password":output.password,
#                   "name":output.name
#                   }
#                   for output in Login.objects.all()]
#         return Response(output)
#     def post(self,request):
#         serializer = ItemSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)
# class AccountView(APIView):
#     def get(self,request):
#         output= [{"account_id":output.account_id,
#                   "account_name":output.account_name,
#                   "account_type":output.account_type,
#                   }
#                   for output in Account.objects.all()]
#         return Response(output)
#     def post(self,request):
#         serializer = ItemSerializer(data=request.data)
#         if serializer.is_valid(raise_exception=True):
#             serializer.save()
#             return Response(serializer.data)

# class getallusers(APIView):
#     @csrf_exempt  # This decorator is used to allow POST requests without CSRF token
#     def user_login(request):
#         objs = Login.objects.all()
#         mains = []
#         for i in objs:
#             js = {}
#             js["username"]=i.username
#             js["password"]=i.password
#             js["name"] = i.name
#             mains.append(js)
#         return JsonResponse(mains,safe=False)