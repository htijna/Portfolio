import React from 'react';
import './logo.css';
import log from "./img/logo4.png";

const Logo = () => {
  return (
    <div>
      <section id="contact" className="section">
        <div className="container">
          <h2>My <span className='h3col'>Skills</span></h2>
          <div className="logocard">
            <div className="logocard-front">
              <img src={log} alt="Logo" className="logocardfront-image" />
            </div>
            <div className="logocard-back">
              <h1 className="logocardback-title">Contact Us</h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Logo;
