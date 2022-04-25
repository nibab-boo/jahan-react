import React from 'react';

const Nan = ({ nans }) => {
  return (
    <div className="food-box">
      {
        nans.map((nan) => {
          return (
            <div className="food-card" key={nan.name}>
              <img src={nan.image} alt="cheese Nan" />
              <div className="set-card">
                <h4 className="food-name">
                  { nan.name }
                </h4>
                <p className="food-info">{ nan.description }</p>
                <p className="food-info price">{ nan.price }</p>
              </div>
            </div>
          );
        })
      }
    </div>
  );
};

export default Nan;
