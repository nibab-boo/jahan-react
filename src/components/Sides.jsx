import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const Sides = ({ sides }) => {
  const tabList = ["Tandoori", "Salad", "Appetizer"];
  return (
    <>
      <Tabs defaultActiveKey="Tandoori" id="menu-sides-tab" className="mb-3">
        {
          sides.map((sideType, index) => (
            <Tab eventKey={tabList[index]} title={sideType.name} key={sideType.name}>
              <div className="food-box">
                {
                  sideType.items.map((side) => (

                    <div className="food-card" key={side.name}>
                      <img src={side.image} alt={`${side.name}`} />
                      <div className="set-card">
                        <h4 className="food-name">{side.name}</h4>
                        <p className="food-info">{side.description}</p>
                        <p className="food-info price">{side.price}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            </Tab>
          ))
        }
      </Tabs>
    </>
  );
};

export default Sides;
