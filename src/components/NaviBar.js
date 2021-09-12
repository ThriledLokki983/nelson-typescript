import React from "react";
import  Navbar  from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Container } from "react-bootstrap";
import { FaLinkedin, 
          FaFacebookSquare, 
          FaTwitterSquare
      } from 'react-icons/fa'





function Navibar () {
    return (
   <Navbar bg="primary" variant="dark" expand="lg" className="nav-container">
    <Container fluid>
      <Navbar.Brand href="#home">
        <img
          alt="global icon"
          src="/global-icon.png"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      React Bootstrap
      </Navbar.Brand>
      <Nav className="nav-links">
        <Nav.Link  href="#home">Home</Nav.Link>
        <Nav.Link  href="#contact">Let's Connect</Nav.Link>
        <Nav.Link  href="#"><FaTwitterSquare size={25} className="fa-icons"/></Nav.Link>
        <Nav.Link  href="#"><FaFacebookSquare size={25} className="fa-icons"/></Nav.Link>
        <Nav.Link  href='#'><FaLinkedin size={25} className="fa-icons"/></Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    )
}

export default Navibar