import React from 'react';
// import { Tabs, Tab } from 'react-bootstrap';

// import cheeseNan from "./../../assets/images/cheese_nan.jpeg"

const Curry = ({ curries }) => {
  return (
    <div className="food-box">
      {
        curries.map((curry) => {
          return (
            <div className="food-card" key={curry.name}>
              <div className="set-card">
                <h4 className="food-name">{curry.name}</h4>
                <p className="food-info">{curry.description}</p>
                <p className="food-info price">{curry.price}</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Curry;
