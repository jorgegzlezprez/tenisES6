import $ from 'jquery';
import {Match} from './match';

export class Round {
    
    constructor(nMatches)
	{ 
		if (nMatches === 1)
			this.name = "Final"
		else
			this.name = "1/" + nMatches;
			
		this.nMatches = nMatches;
		this.matches=[];
				
	}
	
	addPlayers(players)
	{ 
		
		for (var i = 0; i < this.nMatches; i++)
		{
			var player1 = players[i * 2];
			var player2 = players[(i * 2) + 1];
			this.matches.push(new Match(player1,player2));
		}
	}
}