import React from 'react';

import { Tabs, Tab } from 'react-bootstrap';

const Sets = ({ sets }) => {
  const tabList = ["Lunch", "Dinner"];
  return (
    <Tabs defaultActiveKey="Lunch" id="menu-sub-tab" className="mb-3">
      {sets.map((setType, index) => (
        <Tab eventKey={tabList[index]} title={setType.name} key={index}>
          <div className="choice-curry">
            <h5>Choice Curries</h5>
            {setType.choices}
          </div>
          <div className={`sets-section ${setType.name}`}>
            { setType.items.map((set, i) => (
              <div className="set-card shadow" key={i}>
                <h4 className="food-name">{set.name}</h4>
                <p className="food-info">{set.description}</p>
                <p className="food-info price">{set.price}</p>
              </div>
            ))}
          </div>
        </Tab>
      ))}
    </Tabs>
  );
};

export default Sets;
