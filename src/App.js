import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Ctools from "./Portfolio/Ctools";
import Portfolio from "./Portfolio/Portfolio";
import Webprojects from "./Portfolio/Webprojects";
import Protectedproject from "./Portfolio/Protectedproject";
import Ctf from "./Portfolio/Ctf";
import Preloader from "./Portfolio/Preloader";



function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    let maxTimeout;

    const handleLoad = () => {
      // Trigger fade out immediately if page loaded
      setFadeOut(true);
      // Remove loader after fade out animation (0.8s)
      setTimeout(() => setLoading(false), 800);
      clearTimeout(maxTimeout);
    };

    window.addEventListener("load", handleLoad);

    // Maximum 5 seconds loading fallback
    maxTimeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 800);
    }, 5000); // 5 seconds

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(maxTimeout);
    };
  }, []);

  if (loading) return <Preloader fadeOut={fadeOut} />;

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
