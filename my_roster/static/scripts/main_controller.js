var app = angular.module("myRoster", [])

app.controller('mainController', function($rootScope, $scope, NflPlayers, NflTeams, NflPositions, NflJerseyNumbers) {
    
    $rootScope.displayed_players = [];
    $rootScope.players1 = [];
    NflPlayers.all().then(function (data) {
        $rootScope.players1 = data;
    });
    
    // NflTeams.all().then(function (data) {
    //     $rootScope.teams = data;
    // });
    
    // NflPositions.all().then(function (data) {
    //     $rootScope.positions = data;
    // }); 
    
    // NflJerseyNumbers.all().then(function (data) {
    //     $rootScope.jersey_numbers = data;
    // });
    
    $scope.my_roster = true;
    
    $scope.setView = function(roster) {
        
        if (roster === 'my') {
            $scope.my_roster = true;
        } else {
            $scope.my_roster = false;
        }
    }
});


