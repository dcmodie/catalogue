import React, {useState} from 'react'
import MovieListItem from './MovieListItem'
import {useSelector, useDispatch } from 'react-redux';

const Movies = (props)=>{
	const dispatch = useDispatch();
	const movies = useSelector((state)=>state.movies);
	const [inVal, setInVal] = useState('aaaa');

	const renderList = (movies) => {
		const retList = []
		movies.map( (movie)=>{
			retList.push(<MovieListItem movie={movie} />)
		})
		return retList;

	}

	const onInputChange  = (e)=>{
		setInVal(e.target.value)
	}

	return (
		<div>
			<div><input value={inVal} onChange={onInputChange}/></div>
			{renderList(movies)}

		</div>)
}
export default Movies
