import React from "react";
import "./webproject.css";
import { FaPlaneDeparture } from "react-icons/fa";
import Navbar from "./Navbar";
import web1 from './img/ecog2.png';
import web2 from './img/dresscode.png'
import web3 from './img/flames1.jpeg'
import ctool4 from './img/soon.png'

import { LiawebprojectsSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";
const ToolCard = ({ image, subtitle, description }) => {
   const navigate = useNavigate();

  const handleAccess = () => {
    // Pass the section to ProtectedProject
    navigate("/protectedproject", { state: { section: subtitle.toLowerCase() } });
  };
  return (
    <div>
      <Navbar/>
    <div className="fulltool">
      <div className="toolcard">
        <img src={image}  className="toolcard-image" />
        <div className="toolcard-content">
         
          <p className="webprojectsubtitle">{subtitle}</p>
          <p className="tooldescription">{description}</p>
        
          <button className="webprojectsearch-btn" onClick={handleAccess}>Access</button>
        </div>
      </div>
    </div>
    </div>
  );
};

const Webprojects = () => {
  return (
    <div>
      {/* 🔹 Hero Heading */}
      <div className="toolhero-heading">
        <h1>
      
          <span>Web Projects</span>
        </h1>
        <p> Designed with precision to deliver seamless digital experiences</p>
      </div>

      {/* 🔹 Cards */}
      <div className="toolcontainer">
        <ToolCard
          image={web1}
          subtitle="Eco-G"
          description="Ecog is a direct farmer-to-consumer platform delivering fresh, organic produce while empowering farmers with fair pricing."
         
        />
        <ToolCard
          image={web2}
          
          subtitle="Dresscode"
          description="DressCode is a uniform manufacturing company that also provides high-quality fabrics for diverse needs."
          price="$450"
          airport="MLE"
        />
        <ToolCard
          image={web3}
         
          subtitle="Flames"
          description="FLAMES is the classic name compatibility game that reveals six possible outcomes describing the bond."
          price="$600"
          airport="HND"
        />
        <ToolCard
          image={ctool4}
          
          subtitle="P1"
          description="Website version is v2 , compatibility below android 13 ... "
          price="$300"
          airport="CDG"
        />
      </div>
    </div>
  );
};

export default Webprojects;
