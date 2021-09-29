import React, {useState} from 'react'
import MovieListItem from './MovieListItem'
import {useSelector, useDispatch } from 'react-redux';
import Modal from "react-modal";
import './movies.css'

const Movies = (props)=>{
	const dispatch = useDispatch();
	const movies = useSelector((state)=>state.movies);
	const [inVal, setInVal] = useState('');
	const [addMovieModalOpen, setAddMovieModalOpen] = useState(false);

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
			<div><input value={inVal} onChange={onInputChange} /></div>
			<button onClick={(e)=>{setAddMovieModalOpen(true)}}>Add Movie</button>
			<Modal
				isOpen={addMovieModalOpen}
				onRequestClose={(e)=>{setAddMovieModalOpen(false)}}
				contentLabel="Add Movies"
				className="addMoviesModal">
				<div>my title</div>
				<label>Title<input value={inVal} onChange={onInputChange} /></label>
				<button onClick={(e)=>{ setAddMovieModalOpen(false) }}>Close modal</button>
			</Modal>
			{renderList(movies)}

		</div>)
}
export default Movies


// import React, { useState } from "react";
// import "./styles.css";

// import Modal from "react-modal";

// //Modal.setAppElement("#root");

// export default function App() {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleModal() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <div className="App">
//       <button onClick={toggleModal}>Open modal</button>

//       <Modal
//         isOpen={isOpen}
//         onRequestClose={toggleModal}
//         contentLabel="My dialog"
//       >
//         <div>My modal dialog.</div>
//         <button onClick={toggleModal}>Close modal</button>
//       </Modal>
//     </div>
//   );
// }
