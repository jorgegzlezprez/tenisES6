import * as common from '../../utils/common';

export function validateData(playerData) 
{
	var validationResult = {
		success: false,
		error: null
	};

	if (common.isEmpty(playerData.name) || common.isEmpty(playerData.rank)) {
		validationResult.error = {
			name: common.isEmpty(playerData.name),
			rank: common.isEmpty(playerData.rank)
		};

	} else {
		var validName = isValidName(playerData);
		setValidationResult(validName, validationResult);
	}

	return validationResult;
}

function setValidationResult(validLogin, validationResult) 
{
	if (validLogin) {
		validationResult.success = true;

	} else {
		validationResult.error = {
			invalidName: true
		}
	}
}

function isValidName(playerData) 
{
	for (var i = 0; i < playerData.players.length; i++)
	{ 
		if (playerData.players[i].name === playerData.name)
			return false;
	}
	
	return true;
}

export function getErrorMessage(error) 
{
	var message = "";
	if (error.username && error.password) {
		message = "Name and Rank cannot be empty";

	} else  if (error.name) {
		message = "Name cannot be empty";

	} else if (error.rank) {
		message = "Rank cannot be empty";

	} else if (error.invalidName) {
		message = "Players has been added yet";
	}
	return message;
}

