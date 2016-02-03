var app = angular.module("myRoster", []);

app.controller('mainController', function($scope) {
    $scope.my_roster = true;
    
    $scope.setView = function(roster) {
        if (roster === 'my') {
            this.my_roster = true;
        } else {
            this.my_roster = false;
        }
    }
});
