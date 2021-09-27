import React from 'react'

const MovieListItem = (props)=>{

	const {movie} = props;

	return (
		<div>
			<div>

			 {movie.title}

			</div>
			<div>

			 {movie.year}

			</div>
		</div>
	)
}

export default MovieListItem;