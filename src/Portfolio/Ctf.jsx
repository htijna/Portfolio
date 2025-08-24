import React from "react";
import "./Ctools.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import ctf1 from "./img/ctfp1.jpg";
import ctf2 from "./img/ctfp2.jpeg";
import ctf3 from "./img/ctfp3.jpeg";
import ctf4 from "./img/ctfp4.jpeg";

const ToolCard = ({ image, subtitle, description }) => {
  const navigate = useNavigate();

  const handleAccess = () => {
    // Pass the section to ProtectedProject
    navigate("/protectedproject", { state: { section: subtitle.toLowerCase() } });
  };

  return (
    <div className="fulltool">
      <div className="toolcard">
        <img src={image} className="toolcard-image" alt={subtitle} />
        <div className="toolcard-content">
          <p className="toolsubtitle">{subtitle}</p>
          <p className="tooldescription">{description}</p>
          <button className="toolsearch-btn" onClick={handleAccess}>
            Access
          </button>
        </div>
      </div>
    </div>
  );
};

const Ctf = () => {
  return (
    <div>
      <Navbar />

      <div className="toolhero-heading">
        <h1><span>Custom Tools</span></h1>
        <p>A custom-built tool purposefully designed to meet users' needs</p>
      </div>

      <div className="toolcontainer">
        <ToolCard
          image={ctf1}
          subtitle="Infogather"
          description="Professional OSINT-driven tool for effective intelligence gathering and reporting."
        />
        <ToolCard
          image={ctf2}
          subtitle="ThreatEye"
          description="Scans systems to detect and identify malicious code in real time."
        />
        <ToolCard
          image={ctf3}
          subtitle="Premium"
          description="Coming soon..."
        />
        <ToolCard
          image={ctf4}
          subtitle="Economy"
          description="Coming soon..."
        />
      </div>
    </div>
  );
};

export default Ctf;
