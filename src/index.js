import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, useSelector, useDispatch } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import "./index.css"
import App from './App'
import store from './store'

//fetch initial data from b.e.

//set initial data in store
	store.dispatch( {type:"addMovies", payload:[
		{title:"Jaws", year:"1976", director:"Steven Spielberg", review:"great"},
		{title:"Star Wars",year:"1977", director:"George Lucas", review:"good"}
		]} )

ReactDOM.render(
  // Render a `<Provider>` around the entire `<App>`,
  // and pass the Redux store to as a prop
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)