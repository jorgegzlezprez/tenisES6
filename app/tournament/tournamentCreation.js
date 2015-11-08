import $ from 'jquery';
import {Tournament} from './tournament';
import * as tournamentValidation from './tournamentValidation';

export function init(players)
{ 
	$('#btnCreateTournament').on('click', function ()
	{
		var validationResult = tournamentValidation.validateTournament(players.length);
		if(validationResult.success)
			createTournament(players);
		else
			alert(tournamentValidation.getErrorMessage(validationResult.error));
	});
				
};

function createTournament(players)
{
	var nRounds = Math.log2(players.length);
	
	var myTournament = new Tournament(nRounds);
	
	myTournament.distributePlayers(players);
	
	myTournament.draw();
	
};