import React from "react";
import "./preloader.css";
import logo from "./img/preloader.png"; // your logo

const Preloader = ({ fadeOut }) => {
  return (
    <div className={`preloader ${fadeOut ? "fade-out" : ""}`}>
      <img src={logo} alt="Loading..." className="loader-logo" />
    </div>
  );
};

export default Preloader;
