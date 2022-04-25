/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import {
  Navbar, Container, Nav, NavDropdown
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from "./../../assets/images/logo.png";
import { useLanUpdateContext, useLanContext } from './LanguageProvider';

const Header = () => {
  const toggleLan = useLanUpdateContext();
  const json = useLanContext();
  return (
    <Navbar sticky="top" collapseOnSelect expand="lg" className="main-nav" variant="dark">
      <Container>
        <Navbar.Brand href="#home" className="logo-box">
          <img
            src={logo}
            className="d-inline-block align-top"
            width="60px"
            height="60px"
            alt="apple"
          />
        </Navbar.Brand>
        <p className="me-auto nav-jahan">
          {json.name}
        </p>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link className="nav-link" to="/">{json.navBar[0]}</Link>
            <Link className="nav-link" to="/blog">{json.navBar[1]}</Link>
            <Link className="nav-link" to="/menu">
              {json.navBar[2]}
            </Link>
            <a className="nav-link" href="tel:0489155644">{json.navBar[3]}</a>
            <NavDropdown title={`${json.navBar[4]}`} className="text-center" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => toggleLan(true)}>English</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => toggleLan(false)}>日本語</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
