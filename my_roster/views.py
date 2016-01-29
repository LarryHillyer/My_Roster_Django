from django.shortcuts import render
from rest_framework.decorators import  APIView
# Create your views here.
class index(APIView):
    
    def get(self,request):
        return render(request, "my_roster/index.html")