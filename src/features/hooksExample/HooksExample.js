import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import './hooksExample.css'

const HooksExample = ()=>{
	const [user, setUser] = useState(' ');
	const [user2, setUser2] = useState(' ');
	const [color, setColor] = useState(0);
	const [count, setCount] = useState(0);
	const userAtMount = useSelector((state)=>state.hooksExample.userAtMount)//read from reducer
	const dispatch = useDispatch();//write to reducer

	useEffect(() => {//run on mount
		async function myFetch() {
			const result = await axios("https://randomuser.me/api/");
			dispatch({type:"updateUserAtMount", payload: result.data.results[0].name.first})
		}
		myFetch();
    }, [])

    useEffect(() => {//run when user2 change
		setColor("#" + Math.floor(Math.random()*16777215).toString(16));
    }, [user2])

	const onGetUserClick = ()=>{
		async function myFetch() {
			const result = await axios("https://randomuser.me/api/");
			setUser(result.data.results[0].name.first)
		}
		myFetch();
	}
	const onGetUser2Click = ()=>{
		async function myFetch() {
			const result = await axios("https://randomuser.me/api/");
			setUser2(result.data.results[0].name.first)
		}
		myFetch();
	}

	const onIncrementClicked = (e) =>{
		setCount(count+1 );
	}

	return (
		<div className="hooks-example-flex-container">
			<div>useEffect run once, get user from server, 
			write to reducer, read from reducer:
			{userAtMount}</div>
			<div><button onClick={onGetUserClick}>Get User</button>
			User:{user}</div>
			<div><button onClick={onGetUser2Click}>Get User2</button>
			User2:{user2}</div>
			<div>useEffect, run every time user2 updated:<div style={{'background':color, 'height':"40px", "width":"100px"}}></div></div>
			<div><button onClick={onIncrementClicked}>Increment</button>
			{count}</div>
		</div>)
}

export default HooksExample;