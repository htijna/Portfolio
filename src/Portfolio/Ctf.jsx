import React from "react";
import "./ctf.css";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import ctf1 from "./img/ctfp7.jpeg";
import ctf2 from "./img/ctfp6.jpeg";
import ctf3 from "./img/ctfp3.jpeg";
import ctf4 from "./img/ctfp4.jpeg";
import soon from "./img/dropping soon.jpeg";

const ToolCard = ({ image, subtitle, description }) => {
  const navigate = useNavigate();

  const handleAccess = () => {
    // Pass the section to ProtectedProject
    navigate("/protectedproject", { state: { section: subtitle.toLowerCase() } });
  };

  return (
    <div className="fullctf">
      <div className="ctfcard">
        <img src={image} className="ctfcard-image" alt={subtitle} />
        <div className="ctfcard-content">
          <p className="ctfsubtitle">{subtitle}</p>
          <p className="ctfdescription">{description}</p>
          <button className="ctfsearch-btn" onClick={handleAccess}>
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

      <div className="ctfhero-heading">
        <h1><span>Capture The Flag</span></h1>
        <p>Push your limits beyond boundaries and master the art of cybersecurity</p>
      </div>

      <div className="ctfcontainer">
        <ToolCard
          image={ctf1}
          subtitle="CyberQuest"
          description="Conquer challenges, discover knowledge."
        />
        <ToolCard
          image={ctf2}
          subtitle="Web Exploitation"
          description="Uncovering and exploiting vulnerabilities."
        />
        <ToolCard
          image={ctf3}
          subtitle="Steganography "
          description=" Finding hidden data in files."
        />
        <ToolCard
          image={ctf4}
          subtitle="Cryptography"
          description="Breaking and analyzing ciphers."
        />
         <ToolCard
          image={soon}
          subtitle="Cryptography"
          description="Breaking and analyzing ciphers."
        />
         <ToolCard
          image={soon}
          subtitle="Cryptography"
          description="Breaking and analyzing ciphers."
        />
      </div>
    </div>
  );
};

export default Ctf;
