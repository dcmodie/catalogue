import React from 'react';

const initialState = [
		{title:"Jaws", year:"1976", director:"Steven Spielberg"},
		{title:"Star Wars",year:"1977", director:"George Lucas"}
	];

const MovieSlice = (state = initialState, action)=>{
	switch(action.type){
		case 'addMovie':
			return [...state, action.payload];
		case 'removeMovie':
			console.log('remove movie called')
			break;
		default:
			return state;

	}

}
export default MovieSlice;