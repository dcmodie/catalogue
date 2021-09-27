import React from 'react';

const initialState = [
		{title:"Jaws", year:"1976"},
		{title:"Star Wars",year:"1977"}
	];

const MovieSlice = (state = initialState, action)=>{
	switch(action.type){
		case 'addMovie':
			console.log('add movie called')
			return state.movies.push(action.payload)
			break;
		case 'removeMovie':
			console.log('remove movie called')
			break;
		default:
			return state;

	}

}
export default MovieSlice;