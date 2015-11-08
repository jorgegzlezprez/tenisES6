import $ from 'jquery';
import {Player} from './player';

var players = [];

export function init(){
	
	$('#btnAddPlayer').on('click', function() {
		addPlayer();
	});
}

function addPlayer()
{ 
	var playerName = getPlayerNameFromForm();
	var playerRank = getPlayerRankFromForm();
	
	var newPlayer = new Player(playerName,playerRank);		

	addPlayerToList(newPlayer);
	
	drawPlayerInList(newPlayer);
}

function getPlayerNameFromForm()
{ 
	return $('#name').val();
}

function getPlayerRankFromForm()
{ 
	return $('#rank').val();
}

function addPlayerToList(player)
{ 
	players.push(player);	
}

function drawPlayerInList()
{ 
	var htmlString = '';
	
	$.each(players, function (i, player) {
		htmlString += '<li class="list-group-item">';
		htmlString += player.name + ' - ' + player.rank;
		htmlString += '</li>';
	});
	
	$("#players").html(htmlString);
}

export function getPlayers()
{ 
	return players;
}

export function pruebaPlayer()
{ 
	for (var i = 1; i <= 8; i++)
	{
		var newPlayer = new Player("Player"+i,i);		

		addPlayerToList(newPlayer);
	
		drawPlayerInList(newPlayer);
	}
}