import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Ctools from "./Portfolio/Ctools";
import Portfolio from "./Portfolio/Portfolio";
import Webprojects from "./Portfolio/Webprojects";
import Protectedproject from "./Portfolio/Protectedproject";
import Ctf from "./Portfolio/Ctf";

import Preloader from "./Portfolio/Preloader.jsx";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Start fade-out
      setFadeOut(true);

      // Remove loader after animation (0.8s matches CSS)
      setTimeout(() => {
        setLoading(false);
      }, 800);
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return <Preloader fadeOut={fadeOut} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/ctools" element={<Ctools />} />
          <Route path="/webprojects" element={<Webprojects />} />
          <Route path="/ctf" element={<Ctf />} />
          <Route path="/protectedproject" element={<Protectedproject />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
