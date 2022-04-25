import React from 'react';
import {
  Container, Nav, Col, Row, Tab
} from 'react-bootstrap';

// Importing Context custom hooks
import { useLanContext } from './LanguageProvider';

// Importing components
import Curry from './Curry';
import Nan from './Nan';
import Drink from './Drink';
import Sides from './Sides';
import Sets from './Sets';

const Menu = () => {
  const json = useLanContext();
  const { menu } = json;
  const menuList = ["Curry", "Nan", "Side", "Set", "Drink"];
  return (
    <Container className="mt-5 py-5 position-relative">
      <Tab.Container id="left-tabs-example" defaultActiveKey="Curry">
        <Row>
          <Col className="menu-col menu-page" xs={12} sm={3} md={2}>
            <Nav variant="pills">
              { menuList.map((subMenu, index) => (

                <Nav.Item>
                  <Nav.Link eventKey={subMenu}>{menu.tabList[index]}</Nav.Link>
                </Nav.Item>
              ))}
              {/* <Nav.Item>
                <Nav.Link eventKey={menu.menuList[0]}>{menu.menuList[0]}</Nav.Link>
              </Nav.Item>
               <Nav.Item>
                <Nav.Link eventKey={menu.menuList[1]}>{menu.menuList[1]}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={menu.menuList[2]}>{menu.menuList[2]}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={menu.menuList[3]}>{menu.menuList[3]}</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey={menu.menuList[4]}>{menu.menuList[4]}</Nav.Link>
              </Nav.Item>
              */}
            </Nav>
          </Col>
          <Col className="menu-col menu-content" xs={12} sm={9} md={10}>
            <Tab.Content>
              <Tab.Pane eventKey={menuList[0]}>
                <Curry curries={menu.curryList} />
              </Tab.Pane>
              <Tab.Pane eventKey={menuList[1]}>
                <Nan nans={menu.nanList} />
              </Tab.Pane>
              <Tab.Pane eventKey={menuList[2]}>
                <Sides sides={menu.sideList} />
              </Tab.Pane>
              <Tab.Pane eventKey={menuList[3]}>
                <Sets sets={menu.setList} />
              </Tab.Pane>
              <Tab.Pane eventKey={menuList[4]}>
                <Drink drinks={menu.drinkList} />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Menu;
