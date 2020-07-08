import React from 'react';
import AddStudent from './Student/AddStudent';
import StudentList from './Student/StudentList';
import EditStudent from './Student/EditStudent';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navheader">
          <div className="collapse navbar-collapse" >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/AddStudent'} className="nav-link">Addstudent</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Studentlist'} className="nav-link">Student List</Link>
              </li>
            </ul>
          </div>
        </nav> <br />
        <Switch>
          <Route exact path='/AddStudent' component={AddStudent} />
          <Route path='/edit/:id' component={EditStudent} />
          <Route path='/StudentList' component={StudentList} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
