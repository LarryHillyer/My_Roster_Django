from django.shortcuts import render
from rest_framework.decorators import  APIView
from rest_framework.response import Response
import json

from my_roster.serializers import Nfl_Players_Serializer, Nfl_Teams_Serializer, \
    Nfl_Positions_Serializer, Nfl_Jersey_Numbers_Serializer, \
    My_Players_Serializer
    
from my_roster.models import Nfl_Players, Nfl_Teams, Nfl_Positions, \
    Nfl_Jersey_Numbers, My_Players

class index(APIView):
    def get(self,request):
        return render(request, "my_roster/index.html")
        
class my_roster(APIView):
    def get(self,request):
        return render(request, "my_roster/my_roster.html")
        
class admin(APIView):
    def get(self,request):
        return render(request, "my_roster/admin.html")
        
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
        print(nfl_teamsJSON)
        serializer = Nfl_Teams_Serializer(nfl_teamsJSON)
        print(serializer.data)
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

class put_nfl_jersey_numbers(APIView):
    
    def post(self,request):
        Nfl_Jersey_Numbers.objects.all().delete()
        nfl_jersey_numbersJSON = request.POST['nfl_jersey_numbers']
        print(nfl_jersey_numbersJSON)
        nfl_jersey_numbers = Nfl_Jersey_Numbers(nfl_jersey_numbers = \
            nfl_jersey_numbersJSON)
        nfl_jersey_numbers.save()
        return render(request, "my_roster/index.html")
        
class get_nfl_jersey_numbers(APIView):
    
    def get(self, request):
        nfl_jersey_numbersJSON = Nfl_Jersey_Numbers.objects.all()[0]
        serializer = Nfl_Jersey_Numbers_Serializer(nfl_jersey_numbersJSON)
        return Response(serializer.data)

class put_my_players(APIView):
    
    def post(self,request):
        player1 = request.POST['my_player']
        
        
        player = json.loads(player1)
        print(player['playerId'])
        print(player['player_info'])
        my_player = My_Players(player = player['playerId'], player_info = player['player_info'])
        my_player.save()
        
        return render(request, "my_roster/index.html")
        
class get_my_players(APIView):
    
    def get(self, request):
        my_players = My_Players.objects.all()
        serializer = My_Players_Serializer(my_players, many = True)
        print(serializer.data)
        return Response(serializer.data)

class delete_my_player(APIView):
    def post(self,request):
        print(request.POST)
        playerId = request.POST['playerId']
        print(playerId)
        removedPlayer = My_Players.objects.get(player=playerId)
        removedPlayer.delete()
        return render(request, "my_roster/index.html")