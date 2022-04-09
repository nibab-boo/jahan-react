import React from 'react';
import logo from './../../assets/images/logo.png'
// import axios from 'axios';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

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
    <Navbar collapseOnSelect expand="lg" className='main-nav' variant="dark">
      <Container>
      <Navbar.Brand href="#home" className='logo-box'>
        <img 
        src={logo}
        className="d-inline-block align-top" width="80px" height="80px" alt="banner image" />   
      </Navbar.Brand>
        <p className="me-auto jahan">
        Jahan Indo Nepal Restaurant
        </p>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='ms-auto flex-row'>
          <Nav.Link href="#deets">Home</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Menu
          </Nav.Link>
          <Nav.Link href="#deets">Blogs</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;