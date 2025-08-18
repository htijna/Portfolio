import React from "react";
import "./Ctools.css";
import { FaPlaneDeparture } from "react-icons/fa";
import Navbar from "./Navbar";
import ctool1 from './img/ctool.png';
import ctool2 from './img/ctool2.jpeg'

import { LiaToolsSolid } from "react-icons/lia";
const ToolCard = ({ image, subtitle, description }) => {
  return (
    <div>
      <Navbar/>
    <div className="fulltool">
      <div className="toolcard">
        <img src={image}  className="toolcard-image" />
        <div className="toolcard-content">
         
          <p className="toolsubtitle">{subtitle}</p>
          <p className="tooldescription">{description}</p>
        
          <button className="toolsearch-btn">Access</button>
        </div>
      </div>
    </div>
    </div>
  );
};

const Ctools = () => {
  return (
    <div>
      {/* 🔹 Hero Heading */}
      <div className="toolhero-heading">
        <h1>
      
          <span>Custom Tools</span>
        </h1>
        <p>custom-built tool purposefully designed for 🌍</p>
      </div>

      {/* 🔹 Cards */}
      <div className="toolcontainer">
        <ToolCard
          image={ctool1}
          subtitle="Infogather"
          description="Professional OSINT-driven tool for effective intelligence gathering and reporting."
         
        />
        <ToolCard
          image={ctool2}
          
          subtitle="ThreatEye"
          description="Scans systems to detect and identify malicious code in real time."
          price="$450"
          airport="MLE"
        />
        <ToolCard
          image="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
         
          subtitle="Premium"
          description="Experience the blend of tradition and technology in Tokyo and Kyoto's cultural wonders."
          price="$600"
          airport="HND"
        />
        <ToolCard
          image="https://images.unsplash.com/photo-1505765050516-f72dcac9c60b"
          
          subtitle="Economy"
          description="Paris, the city of lights, offers iconic landmarks, art, fashion, and timeless romance."
          price="$300"
          airport="CDG"
        />
      </div>
    </div>
  );
};

export default Ctools;
