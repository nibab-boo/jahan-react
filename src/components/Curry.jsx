import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

// import cheeseNan from "./../../assets/images/cheese_nan.jpeg"


const Curry = () => {
  return (
    <>
      <Tabs defaultActiveKey="Chicken" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="Chicken" title="Chicken">
          <div className="food-box">
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Combination of veggie brought together so you don't have to compromise.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Mutton Curry</h4>
                <p className="food-info">Curry with Lamb meat</p>
                <p className="food-info price">$750</p>
              </div>
            </div>
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Keema Curry</h4>
                <p className="food-info">Curry Made of minced chicken and mutton</p>
                <p className="food-info price">$750</p>
              </div>
            </div>
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Keema Curry</h4>
                <p className="food-info">Curry Made of minced chicken and mutton</p>
                <p className="food-info price">$750</p>
              </div>
            </div>
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Keema Curry</h4>
                <p className="food-info">Curry Made of minced chicken and mutton</p>
                <p className="food-info price">$750</p>
              </div>
            </div>
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Keema Curry</h4>
                <p className="food-info">Curry Made of minced chicken and mutton</p>
                <p className="food-info price">$750</p>
              </div>
            </div>
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Mixed vegetable Curry</h4>
                <p className="food-info">Combination of veggie brought together so you don't have to compromise.</p>
                <p className="food-info price">$750</p>
              </div>
            </div>
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Butter Chicken</h4>
                <p className="food-info">When we say butter chicken, we mean good, old, everyone's favourite.</p>
                <p className="food-info price">$780</p>
              </div>
            </div>
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Panner Makani</h4>
                <p className="food-info">Butter chicken might be tempting, but Panner Makani has its own story.</p>
                <p className="food-info price">$780</p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Kemma" title="Kemma">
          <div className="food-box">
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Typical chicken curry.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Mutton Curry</h4>
                <p className="food-info">Curry with Lamb meat</p>
                <p className="food-info price">$750</p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Mutton" title="Mutton">
          <div className="food-box">
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Typical chicken curry.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Mutton Curry</h4>
                <p className="food-info">Curry with Lamb meat</p>
                <p className="food-info price">$750</p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Seafood" title="Seafood">
          <div className="food-box">
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Typical chicken curry.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Mutton Curry</h4>
                <p className="food-info">Curry with Lamb meat</p>
                <p className="food-info price">$750</p>
              </div>
            </div>
          </div>
        </Tab>
        <Tab eventKey="Veg" title="Veg">
          <div className="food-box">
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Chicken Curry</h4>
                <p className="food-info">Typical chicken curry.</p>
                <p className="food-info price">$650</p>
              </div>
            </div>
            <div className="food-card">
              <div className="set-card">
                <h4 className="food-name">Mutton Curry</h4>
                <p className="food-info">Curry with Lamb meat</p>
                <p className="food-info price">$750</p>
              </div>
            </div>
          </div>
        </Tab>
      </Tabs>
    </>
  );
};

export default Curry;