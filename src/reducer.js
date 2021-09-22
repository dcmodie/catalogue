import { combineReducers } from 'redux'

import todosReducer from './features/todos/TodosSlice'
import personalInfo from './features/personalInfo/PersonalInfoSlice';
import hooksExample from './features/hooksExample/HooksExampleSlice';

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
  personalInfo: personalInfo,
  hooksExample: hooksExample

})

export default rootReducer