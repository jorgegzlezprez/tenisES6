import $ from 'jquery';
import {Round} from './round';
import {Match} from './match';

export class Tournament {
    
    constructor(nRounds)
	{ 		
		this.nRounds = nRounds;
		this.rounds = [];
		
		for (var i = 0; i < nRounds; i++)
		{
			var round = new Round(Math.pow(2,i));
			this.rounds.push(round);
		}
			
	}
	
	distributePlayers(players)
	{
		this.rounds[this.nRounds - 1].addPlayers(players);
		
		for (var i = 0; i < this.nRounds - 1; i++) {
			for (var m = 0; m < this.rounds[i].nMatches; m++) {
				this.rounds[i].matches.push(new Match('', ''));
			}
		}
	}
	
	draw()
	{
		var htmlString = '';
		
		for (var i = this.nRounds - 1; i >= 0; i--)
		{
			
			htmlString += '<div class="col-xs-12 col-sm-4 col-md-2 col-lg-2" >';
			htmlString += '<h3>' + this.rounds[i].name + '</h3>';
			$.each(this.rounds[i].matches, function (y, match) {
							
				htmlString += '<ul class="list-group separateTop" >';
				htmlString += '<li class="list-group-item">';
				htmlString += match.player1.name || '';
				htmlString += '<button type="button" class="btn btn-success" id="btnWin'+i+y+'1">Win</button>';
				htmlString += '</li>';
				htmlString += '<li class="list-group-item">';
				htmlString += match.player2.name || '';
				htmlString += '<button type="button" class="btn btn-success" id="btnWin'+i+y+'2">Win</button>';
				htmlString += '</li>'; 									
				htmlString += '</ul>';
				
				$('#btnWin'+i+y+'1').on('click', function() {
					this.setWinner(i,y,1);
				});
				
				$('#btnWin'+i+y+'2').on('click', function() {
					this.setWinner(i,y,2);
				});
				
			});
			htmlString += '</div>';

		}
			
		$("#rounds").html(htmlString);
		var that = this;
		$.each(this.rounds, function (x, round) {
			$.each(round.matches, function (y, match) {
				$('#btnWin' + x + y + 1).on('click', function () {
					setWinner(x, y, 1, that);
					that.draw();					
				});
				$('#btnWin' + x + y + 2).on('click', function () {
					setWinner(x, y, 2, that);
					that.draw();					
				});
			});
		});
		
		
	}
	
}

function setWinner(nRound,nMatch,nPlayer,that)
{ 
	
	if (nRound === 0)
	{ 
		if(nPlayer==1)
			showTournamentWinner(that.rounds[nRound].matches[nMatch].player1.name);
		else
			showTournamentWinner(that.rounds[nRound].matches[nMatch].player2.name);
	}
	else
	{

		var newNRound = nRound - 1;
		var newNMatch = Math.floor(nMatch / 2);

		if (newNRound >= 0) {
			if (nMatch % 2 === 0)
				if (nPlayer === 1)
					that.rounds[newNRound].matches[newNMatch].player1 = that.rounds[nRound].matches[nMatch].player1;
				else
					that.rounds[newNRound].matches[newNMatch].player1 = that.rounds[nRound].matches[nMatch].player2;
			else
				if (nPlayer === 1)
					that.rounds[newNRound].matches[newNMatch].player2 = that.rounds[nRound].matches[nMatch].player1;
				else
					that.rounds[newNRound].matches[newNMatch].player2 = that.rounds[nRound].matches[nMatch].player2;

		}
	}
	
	
}

function showTournamentWinner(name)
{ 
	$("#winner").html('<h1>The winner is '+ name +'!</h1>');
}