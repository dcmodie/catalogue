import React , {useState } from 'react';
import {useDispatch} from 'react-redux';
import "./header.css";

const Header = ()=>{
	const [text, setText] = useState('');
	const dispatch = useDispatch();

	const changeHandler = (e)=>{
		console.log('change in input');
		setText(e.target.value)
	}


  const handleKeyDown = e => {
    const trimmedText = e.target.value.trim()
    // If the user pressed the Enter key:
    if (e.key === 'Enter' && trimmedText) {
      // Dispatch the "todo added" action with this text
      dispatch({ type: 'todos/todoAdded', payload: trimmedText })
      // And clear out the text input
      setText('')
    }
  }	

	return (

		<div onKeyDown={handleKeyDown} >
			<input id="header" onChange={changeHandler} value={text} placeholder="add item" style={{margin:"0 0 1.5rem 0"}}/>
		</div>
		)
}

export default Header;
