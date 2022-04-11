import React from 'react';

import { Tabs, Tab } from  'react-bootstrap'

const Sets = () => {
  return (
    <>
    <Tabs defaultActiveKey="Lunch" id="sets-tab" className="mb-3">
      <Tab eventKey="Lunch" title="Lunch">
        <div class="sets-section lunch">
          <div class="set-card shadow">
            <h4 class="food-name">A Set</h4>
            <p class="food-info">Salad, dal curry, nan/rice and softdrink</p>
            <p class="food-info price">$680</p>
          </div>
            <div class="set-card shadow">
            <h4 class="food-name">B Set</h4>
            <p class="food-info">Salad, a choice curry, nan/rice and softdrink</p>
            <p class="food-info price">$780</p>
          </div>
          <div class="set-card shadow">
            <h4 class="food-name">C Set</h4>
            <p class="food-info">Salad with chicken Tikka(2p), choice curry, nan/rice and softdrink</p>
            <p class="food-info price">$890</p>
          </div>
          <div class="set-card shadow">
            <h4 class="food-name">D Set</h4>
            <p class="food-info">Salad with a Seekh-Kabab and malai Tikka, dal curry, nan/rice and softdrink</p>
            <p class="food-info price">$1150</p>
          </div>
          <div class="set-card shadow">
            <h4 class="food-name">Jahan Lunch Set</h4>
            <p class="food-info">Salad with malai Tikka(2p), choice curry, nan/rice and softdrink</p>
            <p class="food-info price">$920</p>
          </div>
          <div class="set-card shadow">
            <h4 class="food-name">2 curry Set</h4>
            <p class="food-info">Salad with chicken tikka and Tandori Prawn, today's special curry and choice curry, nan/rice and softdrink</p>
            <p class="food-info price">$980</p>
          </div>
        </div>
      </Tab>
      <Tab eventKey="Dinner" title="Dinner">
        <div class="sets-section dinner">
          <div class="set-card shadow">
            <h4 class="food-name">Dinner Set</h4>
            <p class="food-info">Salad, choice curry, nan/rice and softdrink</p>
            <p class="food-info price">$1130</p>
          </div><div class="set-card shadow">
            <h4 class="food-name">Veg Thali</h4>
            <p class="food-info">Salad,dal and sag panner curry, nan ,and rice and softdrink</p>
            <p class="food-info price">$1250</p>
          </div><div class="set-card shadow">
            <h4 class="food-name">Chicken Thali</h4>
            <p class="food-info">Salad, choice curry and chicken curry, nan and rice and softdrink</p>
            <p class="food-info price">$1450</p>
          </div><div class="set-card shadow">
            <h4 class="food-name">Jahan Set</h4>
            <p class="food-info">Salad with tandori chicken and Seekh-Kabab, choice curry, nan/rice and softdrink</p>
            <p class="food-info price">$1600</p>
          </div><div class="set-card shadow">
            <h4 class="food-name">Jodi Set</h4>
            <p class="food-info">Salad with 2(malai-tikka, Seekh-Kabab and tandori Prawn),2 choice curry, nan/rice/cheese-nan(1) and softdrink</p>
            <p class="food-info price">$3500</p>
          </div><div class="set-card shadow">
            <h4 class="food-name">Beer Set</h4>
            <p class="food-info">Beer with Tandori Chicken and papad</p>
            <p class="food-info price">$730</p>
          </div><div class="set-card shadow">
            <h4 class="food-name">Wine Set</h4>
            <p class="food-info">Glass of wine with chicken tikka, malai-tikka and Seekh-Kabab and papad</p>
            <p class="food-info price">$750</p>
          </div>
        </div>
      </Tab>
    </Tabs>

    {/* <div class="sets menu-item" id="sets">
            <h2 class="menu-section">Lunch Set</h2>
          
          </div>
          <h2 class="menu-section">Dinner Set</h2>
          
        </div> */}
    </>
  );
};

export default Sets;