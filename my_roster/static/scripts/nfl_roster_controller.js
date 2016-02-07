// app = angular.module("myRoster").config(function($httpProvider) {
//     $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
// });

app.controller('nflRosterController', function ($rootScope, $scope, NflPlayers, NflTeams, NflPositions, NflJerseyNumbers, PutMyPlayer) {

    $rootScope.displayed_players = [];

    $rootScope.players = [];
    $rootScope.teams = [];
    $rootScope.positions = [];
    $rootScope.jersey_numbers =[];

    NflPlayers.all().then(function (data) {
        $rootScope.players = data;
    });
    
    NflTeams.all().then(function (data) {
        $rootScope.teams = data;
    });
    
    NflPositions.all().then(function (data) {
        $rootScope.positions = data;
    }); 
    
    NflJerseyNumbers.all().then(function (data) {
        $rootScope.jersey_numbers = data;
    });   

    $scope.getByTeam = function (team) {
        $rootScope.displayed_players = [];
        for (var i = 0; i < $rootScope.players.length; i++) {
            if (!($rootScope.players[i].selected) && team === $rootScope.players[i].pro_team) {
                $rootScope.displayed_players.push($rootScope.players[i])
            }
        }
        return $rootScope.displayed_players;
    }

    $scope.getByPosition = function (position) {
        $rootScope.displayed_players = [];
        for (var i = 0; i < $rootScope.players.length; i++) {
            if (!($rootScope.players[i].selected) && position === $rootScope.players[i].position) {
                $rootScope.displayed_players.push($rootScope.players[i])
            }
        }
        return $rootScope.displayed_players;
    }

    $scope.getByJersey = function (jersey) {
        $rootScope.displayed_players = [];
        for (var i = 0; i < $rootScope.players.length; i++) {
            if (!($rootScope.players[i].selected) && jersey === $rootScope.players[i].jersey) {
                $rootScope.displayed_players.push($rootScope.players[i])
            }
        }
        return $rootScope.displayed_players;
    }

    $scope.addToRoster = function (player) {
        var myPlayer = {};
        myPlayer['playerId'] = player.id;
        myPlayer['player_info'] = player;
 
        for (var i = 0; i < $rootScope.displayed_players.length; i++) {
            if (player.id === $rootScope.displayed_players[i].id) {
                $rootScope.displayed_players.splice(i, 1);
                break;
            }
        }        
            
        for (var i=0; i < $rootScope.my_players_list.length; i++) {
            if (player.id === $rootScope.my_players_list[i].id) {
                alert("Player Is already in Roster");
                return;
            }
        }
        
        for (var i=0;i<$rootScope.players.length;i++) {
            if (!($rootScope.players[i]['selected']) && player.id === $rootScope.players[i].id){
                $rootScope.players[i]['selected']=true;
                break
            }
        }        

        var myPlayerJSON = JSON.stringify(myPlayer);
        PutMyPlayer.all({ 'my_player': myPlayerJSON }).then(function () {
                $rootScope.my_players_list.push(player)
        });
        

        
        
            
        // $.post("/my_roster/put_my_players/", { 'my_player': myPlayerJSON })
        //     .then(function () {
        //         $rootScope.my_players_list.push(player)
        //     })
        }
});   

    // $scope.teams = $.getJSON("/my_roster/get_nfl_teams/", function (nfl_teams) {
    //     $scope.teams = nfl_teams['nfl_teams'];
    //     return $scope.teams;
    // });
    // $scope.positions = $.getJSON("/my_roster/get_nfl_positions/", function (nfl_positions) {
    //     $scope.positions = nfl_positions['nfl_positions'];
    //     return $scope.positions;
    // });
    // $scope.jersey_numbers = $.getJSON("/my_roster/get_nfl_jersey_numbers/", function (nfl_jersey_numbers) {
    //     $scope.jersey_numbers = nfl_jersey_numbers['nfl_jersey_numbers'];
    //     return $scope.jersey_numbers;
    // });
       
    // $scope.players = [{ 
    //                     'photo': "https://auth.cbssports.com/images/football/nfl/players/170x170/1700530.png",
    //                     'position': "WR",
    //                     'lastname': "Abbrederis",
    //                     'jeresy': "84",
    //                     'pro_team':"GB"
    //                     },{
    //                     'photo': "https://auth.cbssports.com/images/football/nfl/players/170x170/1891893.png",
    //                     'position': 'DB',
    //                     'pro_team': 'Det',
    //                     'lastname': 'Abdul-Quddus',
    //                     'jeresy':'42'}];    
    
       



