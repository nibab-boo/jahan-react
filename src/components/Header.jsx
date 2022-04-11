import React from 'react';
import logo from './../../assets/images/logo.png'
// import axios from 'axios';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {

  // const cheerio = require('cheerio');
  
  // const getPostTitles = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       'https://corsproxy.github.iohttps://photos.app.goo.gl/ji7CqqSXMhHFrKML7'
  //     );
  //     const $ = cheerio.load(data);
  //     const postTitles = [];

  //     $('div > p.title > a').each((_idx, el) => {
  //       const postTitle = $(el).text()
  //       postTitles.push(postTitle)
  //     });
  //     console.log(postTitles);
  //     return postTitles;
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  // getPostTitles()
  // .then((postTitles) => console.log(postTitles));

  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" className='main-nav' variant="dark">
      <Container>
      <Navbar.Brand href="#home" className='logo-box'>
        <img 
        src={logo}
        className="d-inline-block align-top" width="60px" height="60px" alt="banner image" />   
      </Navbar.Brand>
      <p className="me-auto nav-jahan">
      Jahan Indo Nepal Restaurant
      </p>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ms-auto'>
          <Link className='nav-link' to="/">Home</Link>
          <Link className='nav-link' to="/menu">
            Menu
          </Link>
          <Link className='nav-link' to="/blogs">Blogs</Link>
          <Link className='nav-link' to="/reservation">Reservation</Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;