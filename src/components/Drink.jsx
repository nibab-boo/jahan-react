import React from 'react';

const Drink = () => {
  return (
    <div className="food-box drink">
      <div className="row w-100">
        <div className="col-md-6 col-12 px-5">
          <h4>
            Beer
          </h4>
          <div className="d-flex justify-content-between border-bottom  border-dark mb-3">
            <span> Nepal Ice (Nepal) </span>
            <span>520</span>
          </div><div className="d-flex justify-content-between border-bottom  border-dark mb-3">
            <span> Everest (Nepal) </span>
            <span>550</span>
          </div><div className="d-flex justify-content-between border-bottom  border-dark mb-3">
            <span> KingFisher (India) </span>
            <span>550</span>
          </div><div className="d-flex justify-content-between border-bottom  border-dark mb-3">
            <span> Asahi Draft Beer (Japan) </span>
            <span>399</span>
          </div>
          <h4>softdrink</h4>
          <div className="d-flex justify-content-between border-bottom  border-dark mb-3">
            <span> Mango Lassi</span>
            <span>300</span>
          </div>
          <div className="d-flex justify-content-between border-bottom  border-dark mb-3">
            <span> Lassi</span>
            <span>300</span>
          </div>
          <div className="d-flex justify-content-between border-bottom  border-dark mb-3">
            <span> Ice Chai</span>
            <span>300</span>
          </div>
          <div className="d-flex justify-content-between border-bottom  border-dark mb-3">
            <span> Hot Chai</span>
            <span>300</span>
          </div>
        </div>
        <div className="col-md-6 col-12 px-5">
          <h4> Hard drinks (Rock/ Water / Soda) </h4>
          <div className="d-flex justify-content-between border-bottom  border-dark mb-3">
            <span> 8848 (Vodka - From Nepal) </span>
            <span>450</span>
          </div>
          <div className="d-flex justify-content-between border-bottom  border-dark mb-3">
            <span> Khukhuri Rum (Rum - From Nepal) </span>
            <span>450</span>
          </div>
          <div className="d-flex justify-content-between border-bottom  border-dark mb-3">
            <span> Old Durbar (Whiskey - From Nepal) </span>
            <span>450</span>
          </div>
          <div className="d-flex justify-content-between border-bottom  border-dark mb-3">
            <span> Mc Dowells' (Rum - From India) </span>
            <span>450</span>
          </div>
          <div className="d-flex justify-content-between border-bottom  border-dark mb-3">
            <span> Mc Dowells' (Whiskey - From India) </span>
            <span>450</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drink;