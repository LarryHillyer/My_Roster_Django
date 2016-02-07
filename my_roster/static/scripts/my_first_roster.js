// app = angular.module("my-roster")

var roster = {players:[]}

var playerListElem = document.getElementById("player-list");

function Player(id, name, position, num, image) {
    this.id = id;
    this.name = name;
    this.position = position;
    this.num = num;
    this.image = image;  
}

/*  event handler for form submission*/
$(".player-form1").submit(function(e) {
    e.preventDefault();
    var playerName = $('#player-name').val();
    var playerPosition = $('#player-position').val();
    var playerNumber = $('#player-number').val();
    var url = "http://s.nflcdn.com/static/content/public/image/fantasy/transparent/200x200/" ;
    var player1;
    var isEntered = false;
    var playerId = roster.players.length;
    if (roster.players.length){
        for (var i = 0; i < roster.players.length; i++) {
            if (roster.players[i].name === playerName) {
                isEntered = true;                       
            }      
        }
        if (!(isEntered)) {
            player1 = new Player(playerId, playerName, playerPosition, playerNumber, url);
            roster.players.push(player1);
            getCurrentPlayers();         
        }         
    } else {
        player1 = new Player(playerId, playerName, playerPosition, playerNumber, url);
        roster.players.push(player1);
        getCurrentPlayers();      
    }
    $(".player-form1")[0].reset();
});

function getCurrentPlayers(){
    $(".player-card").remove();
    for (var player1 in roster.players) {
        var currentPlayer = roster.players[player1];
        drawPlayerCard1(currentPlayer); 
    }    
}


function drawPlayerCard1(currentPlayer) {
    var $card = $('<div class="player-card">');
    $($card).attr("style","background-image: url("+currentPlayer.image+")")

    var $rmvBtn = $('<button class="btn btn-danger inline">Remove</button>');
    var $name = "<p>" + currentPlayer.name + "</p>";
    var $pos = "<p>" + currentPlayer.position + "</p>";
    var $num = "<p>" + currentPlayer.num + "</p>";    
    
    $card.append($rmvBtn);
    $card.append($name);    
    $card.append($pos);
    $card.append($num);
    
    //var $img ="<img src="+ currentPlayer.image + " alt= '...' >";
    //$card.append($img);    
    
    $(".player-roster").append($card);
    
    $rmvBtn.click(function(){
        for (var i =0; i < roster.players.length; i++)
            if (roster.players[i].name === currentPlayer.name) {
                roster.players.splice(i, 1);
            }
        $card.remove()
        
    })
}

/*  Ajax call to get players from cbs server using surrogate server*/
var requestor = function(){
    var url = "http://bcw-getter.herokuapp.com/?url=";
    var url2 = "http://api.cbssports.com/fantasy/players/list?version=3.0&SPORT=football&response_format=json";
    var apiUrl = url + encodeURIComponent(url2);
    $.get(apiUrl).success(function(res){
            var resToObj = JSON.parse(res);
            var players = resToObj.body.players;
            var teams = [];           
            var positions = [];
            var jersey_numbers = [];
            
            for (var i = 0; i < players.length; i++) {
                var teamIsNew = true;
                var positionIsNew = true;
                var jerseyIsNew = true;
                
                if (players[i].pro_status === null || players[i].firstname.length <=0 ) {
                    players.splice(i,1);
                    i--;
                }
                if (i === 0 ) {
                     for (var j = 0; j<teams.length;j++) {                       
                        if (teams[j] == players[0].pro_team) {
                            teamIsNew=false;
                        }                    
                    }
                    
                    if (teamIsNew && players[0].pro_team !== undefined && players[0].position !== "" && players[0].jersey !== undefined) {
                        teams.push(players[0].pro_team);
                        positions.push(players[0].position)
                        jersey_numbers.push(players[0].jersey)
                    }

                } else if (i>0) {
                    
                    for (var j = 1; j<teams.length;j++) {                       
                        if (teams[j] == players[i].pro_team) {
                            teamIsNew=false;
                        }                    
                    }
                    
                    if (teamIsNew && players[i].pro_team !== undefined) {
                        teams.push(players[i].pro_team);
                    }
                    
                    for (var j =1; j<positions.length; j++) {                       
                        if (positions[j] == players[i].position ) {
                            positionIsNew=false;
                        }                       
                    }
                    
                    if (positionIsNew && players[i].position !== undefined && players[i].position!=="") {
                            positions.push(players[i].position);
                    }
                    
                    for (var j =1; j<jersey_numbers.length; j++) {                       
                        if (jersey_numbers[j] == players[i].jersey ) {
                            jerseyIsNew=false;
                        }                       
                    }
                    
                    if (jerseyIsNew && players[i].jersey !== undefined && players[i].jersey!=="") {
                            jersey_numbers.push(players[i].jersey);
                    }
                    
                } else if (i < 0) {
                        i=0
                }                        
            }
            var playersJSON = JSON.stringify(players);
            var teamsJSON = JSON.stringify(teams);
            var positionsJSON = JSON.stringify(positions);
            var jersey_numbersJSON = JSON.stringify(jersey_numbers)
            $.post("/my_roster/put_nfl_players/", {'nfl_players' : playersJSON})
            $.post("/my_roster/put_nfl_teams/", {'nfl_teams' : teamsJSON})            
            $.post("/my_roster/put_nfl_positions/", {'nfl_positions' : positionsJSON}) 
            $.post("/my_roster/put_nfl_jersey_numbers/", {'nfl_jersey_numbers': jersey_numbersJSON})           
        })
}

$('#get-players').click(requestor);



// function PlayerService() {
//     var playerData = [];
    
//     this.getPlayersByTeam(teamName) {
//         playersData.filter(function(player) {
//             if(player.team == teamName) {
//                 return true;
//             }
//         });
//     }
    
//     this.getPlayersByPosition(position) {
//         playersData.filter(function(player) {
//             if(player.position == position) {
//                 return true;
//             }
//         });
//     }
    
//     function loadPlayersData() {
//         $.getJSON(endpointUri, function(data){
//             playersData = data.players.data;
//         });
//     };
    
//     loadPlayersData();   
// }

// var apiUri = "api.cbs.com......";
// var playerService = new PlayerService(apiUri);

// $('some-button').on("click", function(){
//     var teamSF = playerServive.getPlayersByTeam("SF");
// });





/* Draw player-card using javascript
// function drawPlayerOnScreen(currentPlayer) {
//     var playerCardElem = document.createElement("div");
//     playerCardElem.className = "player-card";
//     playerCardElem.attr("id", currentPlayer.id.toString());
//     playerCardElem.innerHTML ="<img src=" + currentPlayer.image + " alt= '...' > <p>" + currentPlayer.name + "</p> <p>" + currentPlayer.position + "</p> <p>" + currentPlayer.num + "</p> </div>";
//     playerListElem.appendChild(playerCardElem);
// }

*/

/* Draw player-card using jquery
// function drawPlayerCard(currentPlayer) {
//     $(".player-roster").append("<div class = 'player-card' id= " + currentPlayer.id.toString() + "> <img src="+ currentPlayer.image + " alt= '...' > <p>" + currentPlayer.name + "</p> <p>" + currentPlayer.position + "</p> <p>" + currentPlayer.num + "</p> <div class = 'btn-group'><button>Remove</button> </div></div>");    
// } 
*/

/* register event handler using jquery
//var buttons = jQuery('button');
// $('.player-roster').on('click', 'button', removePlayerCard)


// function removePlayerCard(e) {
//     var btn = $(e.target);
//     var playerCardId = btn.closest('.player-card').attr('id');
    
//     for (var i =0; i < roster.players.length; i++) {
//         if (playerCardId == roster.players[i].id) {
//             roster.players.splice(i, 1);
//             getCurrentPlayers();
//         }
//     }
// }
*/






