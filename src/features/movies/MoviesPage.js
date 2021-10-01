import React, {useState} from 'react'
import MovieListItem from './MovieListItem'
import {useSelector, useDispatch } from 'react-redux';
import Modal from "react-modal";
import './movies.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Movies = (props)=>{
	const dispatch = useDispatch();
	const movies = useSelector((state)=>state.movies);
	const [titleVal, setTitleVal] = useState('');
	const [dirVal, setDirVal] = useState('');
	const [yearVal, setYearVal] = useState('');
	const [addMovieModalOpen, setAddMovieModalOpen] = useState(false);

	// const renderList = (movies) => {
	// 	const retList = []
	// 	movies.map( (movie)=>{
	// 		retList.push(<MovieListItem movie={movie} />)
	// 	})
	// 	return retList;
	// }

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
		dispatch( {type:"addMovie", payload:{title:titleVal, year:yearVal, director:dirVal} } )
		setAddMovieModalOpen(false)
		dispatch({ type: 'streetChanged', payload: e.target.value });

	}


	return (
		<div>
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

			<TableContainer component={Paper}>
			  <Table sx={{ minWidth: 650 }} aria-label="simple table">
			    <TableHead>
			      <TableRow>
			        <TableCell>Title</TableCell>
			        <TableCell align="right">Year</TableCell>
			        <TableCell align="right">Director</TableCell>
			      </TableRow>
			    </TableHead>
			    <TableBody>
			      {movies.map((row) => (
			        <TableRow
			          key={row.title}
			          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
			        >
			          <TableCell component="th" scope="row">
			            {row.title}
			          </TableCell>
			          <TableCell align="right">{row.year}</TableCell>
			          <TableCell align="right">{row.director}</TableCell>
			        </TableRow>
			      ))}
			    </TableBody>
			  </Table>
			</TableContainer>
			<button onClick={(e)=>{setAddMovieModalOpen(true)}}>Add Movie</button>

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
