import $ from 'jquery';
import {Tournament} from './tournament';

var nRounds = 3;

export function init(players)
{ 
	$('#btnCreateTournament').on('click', function() {
		createTournament(players);
	});
				
};

function createTournament(players)
{
	var myTournament = new Tournament(nRounds);
	
	myTournament.distributePlayers(players);
	
	myTournament.draw();
	
};