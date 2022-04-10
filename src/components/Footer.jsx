import React from 'react';

const Footer = () => {
  return (
    <div className='main-footer' style={{background: "#8E3C1D"}}>
      <h4 className='nav-jahan'>Reach out to</h4>
      <div className="footer-box d-flex justify-content-evenly">
        <div className="footer-connect">
          <h5 className='nav-jahan'>Connect</h5>
          <ul>
            <li><a href="">Instagram</a></li>
            <li><a href="">Twitter</a></li>
            <li><a href="">Facebook</a></li>
          </ul>
        </div>
        <div className="footer-order">
          <h5 className='nav-jahan'>Order</h5>
          <ul>
            <li><a href="tel:0489155644">Phone</a></li>
            <li><a href="">Uber!</a></li>
            <li><a href="">Demaekan</a></li>
          </ul>
        </div>
        <div className="footer-reserve">
          <h5 className='nav-jahan'>Reservations</h5>
          <ul>
            <li><a href="tel:0489155644">Phone</a></li>
            <li><a href="">Hotpepper!</a></li>
            <li><a href="">Yahooooo!</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;