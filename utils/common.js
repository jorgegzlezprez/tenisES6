export function isEmpty(text)
{
	return !text;
}

export function checkNumber(value)
{
	return (!isFinite(value));
		
}

export function isPowOf2(value)
{ 
	return ((value !== 0) && ((value & (value - 1)) === 0));
}