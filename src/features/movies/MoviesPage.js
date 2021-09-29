import React, {useState} from 'react'
import MovieListItem from './MovieListItem'
import {useSelector, useDispatch } from 'react-redux';
import Modal from "react-modal";
import './movies.css'

const Movies = (props)=>{
	const dispatch = useDispatch();
	const movies = useSelector((state)=>state.movies);
	const [titleVal, setTitleVal] = useState('');
	const [dirVal, setDirVal] = useState('');
	const [yearVal, setYearVal] = useState('');
	const [addMovieModalOpen, setAddMovieModalOpen] = useState(false);

	const renderList = (movies) => {
		const retList = []
		movies.map( (movie)=>{
			retList.push(<MovieListItem movie={movie} />)
		})
		return retList;
	}

	const onTitleChange  = (e)=>{
		setTitleVal(e.target.value)
	}
	const onDirChange  = (e)=>{
		setDirVal(e.target.value)
	}
	const onYearChange  = (e)=>{
		setYearVal(e.target.value)
	}

	const onSaveClicked =(e)=>{
		//save data
		dispatch( {type:"addMovie", payload:{title:titleVal, year:yearVal} } )
		setAddMovieModalOpen(false)
		dispatch({ type: 'streetChanged', payload: e.target.value });

	}

	return (
		<div>
			<button onClick={(e)=>{setAddMovieModalOpen(true)}}>Add Movie</button>
			<Modal
				isOpen={addMovieModalOpen}
				onRequestClose={(e)=>{setAddMovieModalOpen(false)}}
				contentLabel="Add Movies"
				className="addMoviesModal">
				<div className="modalTitle">Add Movie</div>
				<label >Title<input value={titleVal} onChange={onTitleChange} /></label>
				<label >Director<input value={dirVal} onChange={onDirChange} /></label>
				<label >Year<input value={yearVal} onChange={onYearChange} /></label>
				<button onClick={(e)=>{ setAddMovieModalOpen(false) }}>Cancel</button>
				<button onClick={onSaveClicked}>Save</button>
			</Modal>
			{renderList(movies)}

		</div>)
}
export default Movies

//				<label >Review<input value={reviewVal} onChange={onInputChange} /></label>

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
