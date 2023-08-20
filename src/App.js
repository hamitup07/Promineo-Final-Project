import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Home from "./Pages/Home";
import Notes from "./Pages/NotesApp";
import ToDo from "./Pages/ToDo";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from "react-bootstrap/Container";
import MyNavbar from "./Components/MyNavbar";


/* 

Steve Hamilton
Final Assignment Assignment
2023-3-30-fe

Assignment parameters: 
-Create a React app of choice with at least 3 pages, 10 components, and CRUD functionality

This project is a Beta version of a personal organizer, consisting of notes and todos. I find that When I organize my own thoughts
and lists, I tend to have both long-form thoughts and small, action-oriented tasks. This is the sort of app I would love to have, although 
a full version might include an integrated calendar.

*/


export default function App() {

  //Router directory:
  return(
    <>
    <MyNavbar />
    <Container className="p-2">
    <Router>
      <div>
        <ButtonGroup className="my-3 mx-4">
          <Button variant="outline-secondary">
            <Link to="/home">Home</Link>
          </Button>
          <Button variant="outline-secondary">
            <Link to="/notes">Notes</Link>
          </Button>
          <Button variant="outline-secondary">
            <Link to="/todo">To Do</Link>
          </Button>
        </ButtonGroup>

        <Routes>
          <Route path='/todo' element={<ToDo />} />
          <Route path='/notes' element={<Notes />} />
          <Route path='/Home' element={<Home />} />
        </Routes>
      </div>
      
    </Router>
    </Container>
    </>
  )
}
