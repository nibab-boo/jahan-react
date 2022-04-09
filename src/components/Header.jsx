import React from 'react';
import logo from './../../assets/images/logo.png'
// import axios from 'axios';
import { Navbar } from 'react-bootstrap';

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
    // <div className='main-nav'>
    //   <div className="logo-box">
    //     <img src={logo} style={{ width: "80px", height: "80px"}} alt="banner image" />   
    //   </div>
    //   <p>Jahan Indo Nepali Restaurant</p>
    // </div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;