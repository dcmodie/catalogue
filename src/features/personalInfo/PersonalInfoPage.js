import React from 'react'
import { useSelector, useDispatch} from 'react-redux';
import{ useState, useEffect } from 'react';
import axios from 'axios';

const PersonalInfoPage = () => {
	const pInfo = useSelector((state) => state.personalInfo );// pass into hook the function to get this data from the store
	const dispatch = useDispatch();//write to reducer


 	//	useState returns a pair of values: the current state and a function that updates it. This is why we write const [count, setCount]
	const [data, setData] = useState(null);

	const handleNameChange = (e)=>{
		dispatch({ type: 'nameChanged', payload: e.target.value });
	}

	const handleStreetChange = (e)=>{
		dispatch({ type: 'streetChanged', payload: e.target.value });
	}

	useEffect(() => {
	  async function fetchData() {
	    // You can await here
	    const response = await axios('https://httpbin.org/anything');
	    setData(response.url)

	    // ...
	  }
	  fetchData();
	}, []); // Or [] if effe



	return (
		<div>
			<input value={pInfo.name} placeholder="name" onChange={ handleNameChange }/>
			<input value={pInfo.street} placeholder="street" onChange={ handleStreetChange }/>
			<div>{data}</div>
		</div>)
}

export default PersonalInfoPage;


 