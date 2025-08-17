import React from "react";
import "./Ctools.css";
import { FaPlaneDeparture } from "react-icons/fa";
import Navbar from "./Navbar";

const ToolCard = ({ image, title, subtitle, description, price, airport }) => {
  return (
    <div>
      <Navbar/>
    <div className="fulltool">
      <div className="toolcard">
        <img src={image} alt={title} className="toolcard-image" />
        <div className="toolcard-content">
          <h2>{title}</h2>
          <p className="toolsubtitle">{subtitle}</p>
          <p className="tooldescription">{description}</p>
          <div className="toolcard-footer">
            <span>from <strong>{price}</strong></span>
            <span>✈️ {airport}</span>
          </div>
          <button className="toolsearch-btn">Search flights</button>
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
          <FaPlaneDeparture className="toolplane-icon" />
          <span>Custom Tools</span>
        </h1>
        <p>Book your dream trip with unbeatable flight deals 🌍</p>
      </div>

      {/* 🔹 Cards */}
      <div className="toolcontainer">
        <ToolCard
          image="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9"
          title="Malaysia"
          subtitle="Economy"
          description="Kuala Lumpur, Malaysia, is a vibrant metropolis blending modern skyscrapers, diverse cultures, and rich historical landmarks."
          price="$120"
          airport="KUL"
        />
        <ToolCard
          image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          title="Maldives"
          subtitle="Luxury"
          description="Crystal clear waters, overwater villas, and serene beaches make Maldives a dream destination."
          price="$450"
          airport="MLE"
        />
        <ToolCard
          image="https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba"
          title="Japan"
          subtitle="Premium"
          description="Experience the blend of tradition and technology in Tokyo and Kyoto's cultural wonders."
          price="$600"
          airport="HND"
        />
        <ToolCard
          image="https://images.unsplash.com/photo-1505765050516-f72dcac9c60b"
          title="Paris"
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
