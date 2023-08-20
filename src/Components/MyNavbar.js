import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch
} from 'react-router-dom';




function MyNavbar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" ><img src='https://cdn-1.webcatalog.io/catalog/power-planner/power-planner-icon-filled-256.png?v=1684745349383' height={75} className='px-4' />Personal Organizer Beta</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;