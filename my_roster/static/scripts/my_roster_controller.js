// app = angular.module("myRoster");

app.controller("myRosterController", function ($rootScope, $scope, GetMyPlayers, RemovePlayerFromMyRoster) {
    
    activate();

    function activate() {
        $rootScope.my_players_list = [];
        $scope.loadRoster = loadRoster;
        $scope.loadRoster();
    }
    
    function loadRoster(){
      //  $http.get("/my_roster/get_my_players/").then(function (response) {
          GetMyPlayers.all().then( function(response) {
            var my_players = response;
            var my_players_list = [];
            for (var i = 0; i < my_players.length; i++) {
                var player = my_players[i]['player_info']
                my_players_list.push(player)
            }
            $rootScope.my_players_list = my_players_list;
        });
    }
    
    $scope.removeFromRoster = function (player) {
        for (var i = 0; i < $rootScope.my_players_list.length; i++) {
            if (player === $rootScope.my_players_list[i]) {
                $rootScope.my_players_list.splice(i, 1)             
                for (var j = 0; j < $rootScope.players.length; j++) {
                     if ($rootScope.players[j]['selected'] && player.id === $rootScope.players[j].id) {
                        $rootScope.players[j]['selected'] = undefined;
                        $rootScope.displayed_players.push(player)
                        break
                    }
                }
                
                RemovePlayerFromMyRoster.all({ 'playerId': player.id })           
                break;
            }
        }
    }
});   
    
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
                        
    // $scope.dummy = 'dummy';
    
    
 


