app = angular.module("myRoster");

app.controller('nflRosterController', function($scope) {
    $scope.dummy = "NFL Roster";
    $scope.players = $.getJSON("/my_roster/get_nfl_players/", function(nfl_players){
        return nfl_players;    
    });
       
});


