import React from 'react'
import Header from './features/header/Header'
import TodoList from './features/todos/todosList'
import PersonalInfoPage from './features/personalInfo/PersonalInfoPage'
import HooksExample from './features/hooksExample/HooksExample'
import { BrowserRouter as Router, Route, Switch , Link} from 'react-router-dom';
import './index.css'


function App() {
  return (
    <Router>
      <div className="App">
          <div className="title-container">
            <div className="title">
              <h1>My Boilerplate</h1>
              <h5>CRA, react-router-dom, redux/hooks, hooks</h5>

            </div>
          </div>
        <nav>

          <section>
            <Link to="/personal-info">Personal Info</Link>
            <Link to="/todo-list">Todo List</Link>
            <Link to="/hooks-example">Hooks Example w/ useEffect</Link>
          </section>
        </nav>
        <section>
          <Switch>
            <Route exact path="/">  
              <PersonalInfoPage />
            </Route>
            <Route path="/todo-list">  
              <TodoList />
            </Route>
            <Route path="/hooks-example">  
              <HooksExample />
            </Route>
            <Route path="/personal-info">  
              <PersonalInfoPage />
            </Route>
          </Switch>

        </section>
      </div>
    </Router>
  )
}

export default App
