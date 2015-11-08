import * as common from '../../utils/common';

export function validateTournament(nPlayers) 
{
	var validationResult = {
		success: false,
		error: null
	};

	if (!common.isPowOf2(nPlayers)) {
		validationResult.error = {
			playersNumber: !common.isPowOf2(nPlayers)
		};
	}
	else
		validationResult.success = true;

	return validationResult;
}

export function getErrorMessage(error) 
{
	var message = "";
	if (error.playersNumber) {
		message = "The number of players must be power of 2";

		return message;
	}
}

