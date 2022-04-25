/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLanContext } from './LanguageProvider';

const Footer = () => {
  const json = useLanContext();
  const { footer } = json;
  return (
    <div className="main-footer" style={{ background: "#8E3C1D" }}>
      <h4 className="nav-jahan">{footer.name}</h4>
      <div className="footer-box d-flex justify-content-evenly">
        { footer.subList.map((list) => {
          return (

            <div className="footer-name" key={list.name}>
              <h5 className="nav-jahan">{list.name}</h5>
              <ul>
                {list.items.map((item) => {
                  return <li key={item.item}><a href={`${item.link}`}>{item.item}</a></li>;
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
