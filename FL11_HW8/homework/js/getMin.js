function getMin(){
	let minElem = arguments[0];
	for(let i = 0; i < arguments.length; i++){
	if( minElem > arguments[i] ){
		minElem = arguments[i];
    }
	}
return minElem;
}
getMin(5, 45,-9, 4);