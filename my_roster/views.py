from django.shortcuts import render
from rest_framework.decorators import  APIView
from rest_framework.response import Response
from my_roster.serializers import Nfl_Players_Serializer, Nfl_Teams_Serializer, \
    Nfl_Positions_Serializer
from my_roster.models import Nfl_Players, Nfl_Teams, Nfl_Positions

# Create your views here.
class index(APIView):
    def get(self,request):
        return render(request, "my_roster/index.html")
        
class my_roster(APIView):
    def get(self,request):
        return render(request, "my_roster/my_roster.html")
        
class put_nfl_players(APIView):
    
    def post(self,request):
        Nfl_Players.objects.all().delete()
        nfl_playersJSON = request.POST['nfl_players']
        print(nfl_playersJSON)
        nfl_players = Nfl_Players(nfl_players = nfl_playersJSON)
        nfl_players.save()
        
        return render(request, "my_roster/index.html")
        
class get_nfl_players(APIView):
    
    def get(self, request):
        nfl_playersJSON = Nfl_Players.objects.all()[0]
        serializer = Nfl_Players_Serializer(nfl_playersJSON)
        return Response(serializer.data)
        
class put_nfl_teams(APIView):
    
    def post(self,request):
        Nfl_Teams.objects.all().delete()
        nfl_teamsJSON = request.POST['nfl_teams']
        print(nfl_teamsJSON)
        nfl_teams = Nfl_Teams(nfl_teams = nfl_teamsJSON)
        nfl_teams.save()
        return render(request, "my_roster/index.html")
        
class get_nfl_teams(APIView):
    
    def get(self, request):
        nfl_teamsJSON = Nfl_Teams.objects.all()[0]
        serializer = Nfl_Teams_Serializer(nfl_teamsJSON)
        return Response(serializer.data)

class put_nfl_positions(APIView):
    
    def post(self,request):
        Nfl_Positions.objects.all().delete()
        nfl_positionsJSON = request.POST['nfl_positions']
        print(nfl_positionsJSON)
        nfl_positions = Nfl_Positions(nfl_positions = nfl_positionsJSON)
        nfl_positions.save()
        return render(request, "my_roster/index.html")
        
class get_nfl_positions(APIView):
    
    def get(self, request):
        nfl_positionsJSON = Nfl_Positions.objects.all()[0]
        serializer = Nfl_Positions_Serializer(nfl_positionsJSON)
        return Response(serializer.data)



        