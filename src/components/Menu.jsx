import React from 'react';
import {Container, Nav, Col, Row, Tab} from 'react-bootstrap'


// Importing components
import Curry from './Curry';
import Nan from './Nan';
import Drink from './Drink';
import Sides from './Sides';
import Sets from './Sets';

const Menu = () => {
  const demoStyle = {
  
  }
  return (
    <Container className='mt-5 py-5 position-relative'>
      <Tab.Container id="left-tabs-example" defaultActiveKey="Sets">
        <Row>
          <Col  style={demoStyle} className="menu-col menu-page" xs={12} sm={3} md={2}>
            <Nav variant="pills">
              <Nav.Item>
                <Nav.Link eventKey="Curry">Curry</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Nan">Nan</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Sides">Sides</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Sets">Sets</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="Drink">Drinks</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col style={demoStyle} className="menu-col menu-content" xs={12} sm={9} md={10}>
            <Tab.Content>
              <Tab.Pane eventKey="Curry">
                < Curry />
              </Tab.Pane>
              <Tab.Pane eventKey="Nan">
                < Nan />
              </Tab.Pane>
              <Tab.Pane eventKey="Sides">
                < Sides />
              </Tab.Pane>
              
              <Tab.Pane eventKey="Sets">
                < Sets />
              </Tab.Pane>
              <Tab.Pane eventKey="Drink">
                < Drink />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Menu;