import React from "react";
import "./preloader.css"; // CSS file for animations
import logo from "./img/preloader.png"; // your rotating logo

const Preloader = ({ fadeOut }) => {
  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <img src={logo} alt="Loading..." className="loader-logo" />
    </div>
  );
};

export default Preloader;
