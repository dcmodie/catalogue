import React from 'react';

const initialState = [];

const MovieSlice = (state = initialState, action)=>{
	switch(action.type){
		case 'addMovie':
			return [...state, action.payload];
		case 'addMovies':
			return [...state, ...action.payload ];
		case 'removeMovie':
			console.log('remove movie called')
			break;
		default:
			return state;
	}
}
export default MovieSlice;