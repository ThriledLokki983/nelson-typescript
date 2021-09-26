import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";
import { Container } from "react-bootstrap";
import { FaLinkedin, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";
import { BsBookmarkPlus } from "react-icons/bs";
import { useState } from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useContext } from "react";
import Switch from "react-switch";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";

function NavigationBar({ themeChecked, checked }) {
  //These are props that we will use for calling these behaviour in another component.
  const cart = useSelector((state) => {
    return state.cart;
  });
  return (
    <Navbar
      fixed="top"
      bg="primary"
      variant="dark"
      expand="lg"
      className="nav-container"
      activeKey="/"
    >
      <Container>
        <Navbar.Brand className="mx-4" href="#home">
          <img
            alt="global icon"
            src="/global-icon.png"
            width="30"
            height="30"
            className="d-inline-block align-top mx-3"
          />{" "}
          Country API Project
        </Navbar.Brand>
        <Nav className="nav-links">
          <Nav.Link href="/">Home</Nav.Link>

          <Nav.Link href="#contact">Let's Connect</Nav.Link>

          <Button href="/cart" className="fav-counter">
            <BsBookmarkPlus size={25} /> favList{" "}
            <Badge bg="secondary">{cart.length}</Badge>
            <span className="visually-hidden">unread messages</span>
          </Button>

          <ToggleButton
            className="toggle-button"
            id="toggle-check"
            type="checkbox"
            checked={themeChecked} // a value
            onChange={checked} // onChange is a function that manipulates what is checked
          >
            Change Theme
          </ToggleButton>

          <Button href="!#">
            <FaTwitterSquare size={25} className="fa-icons" />
          </Button>
          <Button href="!#">
            <FaLinkedin size={25} className="fa-icons" />
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}
export default NavigationBar;

{
  /* <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked}
        value="1"
        onChange={(e) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>*/
}
