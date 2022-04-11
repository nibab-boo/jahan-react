import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';


const Sides = () => {
  return (
    <>
      <Tabs defaultActiveKey="Tandoori" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="Tandoori" title="Tandoori">
          Ab a iure aspernatur dolores nam aperiam atque quis fugit hic sapiente odit magnam, tenetur quaerat totam iusto nemo maxime, non excepturi harum itaque praesentium! Molestiae minus amet temporibus! Vero?
        </Tab>
        <Tab eventKey="Salad" title="Salad">
          elit. Libero in vitae atque, odit suscipit voluptates autem necessitatibus et nostrum delectus rem qui modi laborum voluptatum nihil perferendis repellat blanditiis voluptatibus.
          Ab a iure aspernatur dolores nam aperiam atque quis fugit hic sapiente odit magnam, tenetur quaerat totam iusto nemo maxime, non excepturi harum itaque praesentium! Molestiae minus amet temporibus! Vero?
        </Tab>
        <Tab eventKey="Appetizer" title="Appetizer">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero in vitae atque, odit suscipit voluptates autem necessitatibus et nostrum delectus rem qui modi laborum voluptatum nihil perferendis repellat blanditiis voluptatibus.
          Ab a iure aspernatur dolores nam aperiam atque quis fugit hic sapiente odit magnam, tenetur quaerat totam iusto nemo maxime, non excepturi harum itaque praesentium! Molestiae minus amet temporibus! Vero?
        </Tab>
      </Tabs>
    </>
  );
};

export default Sides;