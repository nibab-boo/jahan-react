import React from 'react';

import cheeseNan from "./../../assets/images/cheese_nan.jpeg"


const Nan = () => {
  return (
    <div className='food-box'>
      <div className="food-card">
        <img src={cheeseNan} alt="cheese Nan" />
        <div className="set-card">
          <h4 className="food-name">Chicken Curry</h4>
          <p className="food-info">Typical chicken curry.</p>
          <p className="food-info price">$650</p>
        </div>
      </div>
      <div className="food-card">
        <img src={cheeseNan} alt="cheese Nan" />
        <div className="set-card">
          <h4 className="food-name">Chicken Curry</h4>
          <p className="food-info">Typical chicken curry.</p>
          <p className="food-info price">$650</p>
        </div>
      </div>
      <div className="food-card">
        <img src={cheeseNan} alt="cheese Nan" />
        <div className="set-card">
          <h4 className="food-name">Chicken Curry</h4>
          <p className="food-info">Lorem, od doloremque nesciunt commodi numquam amet nihil. Typical chicken curry.</p>
          <p className="food-info price">$650</p>
        </div>
      </div>
    </div>
  );
};

export default Nan;