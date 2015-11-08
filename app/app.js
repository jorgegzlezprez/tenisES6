import * as listPlayer from './player/listPlayer'
import * as tournamentCreation from './tournament/tournamentCreation'

import $ from 'jquery';

$(document).ready(init());

function init()
{ 

	listPlayer.init();
	listPlayer.pruebaPlayer();
	tournamentCreation.init(listPlayer.getPlayers());
	
};

