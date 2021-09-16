import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { BsBookmarkPlus } from "react-icons/bs";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg" className="nav-container">
      <Container>
        <Navbar.Brand className="mx-4" href="#home">
          <img
            alt="global icon"
            src="/global-icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top mx-3"
          />{" "}
          React Bootstrap
        </Navbar.Brand>
        <Nav className="nav-links">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <Nav.Link href="#contact">Let's Connect</Nav.Link>
          <Nav.Link href="#">
            <FaTwitterSquare size={25} className="fa-icons" />
          </Nav.Link>
          <Nav.Link href="#">
            <FaFacebookSquare size={25} className="fa-icons" />
          </Nav.Link>
          <Nav.Link href="#">
            <FaLinkedin size={25} className="fa-icons" />
          </Nav.Link>
          <Nav.Link href="#">
            <Button variant="primary" className="fav-counter">
              <BsBookmarkPlus size={25} /> favList{" "}
              <Badge bg="secondary">0</Badge>
              <span className="visually-hidden">unread messages</span>
            </Button>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;
