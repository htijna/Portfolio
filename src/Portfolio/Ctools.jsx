import React from "react";
import "./Ctools.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import ctool1 from "./img/ctool.png";
import ctool2 from "./img/ctool2.jpeg";
import ctool3 from "./img/soon.png";
import ctool4 from "./img/soon.png";

const ToolCard = ({ image, subtitle, description }) => {
  const navigate = useNavigate();

  const handleAccess = () => {
    // Navigate to the password entry page
    navigate("/protectedproject");
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

const Ctools = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Heading */}
      <div className="toolhero-heading">
        <h1>
          <span>Custom Tools</span>
        </h1>
        <p>A custom-built tool purposefully designed to meet users' needs</p>
      </div>

      {/* Cards */}
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
        />
        <ToolCard
          image={ctool3}
          subtitle="Premium"
          description="Coming soon..."
        />
        <ToolCard
          image={ctool4}
          subtitle="Economy"
          description="Coming soon..."
        />
      </div>
    </div>
  );
};

export default Ctools;
