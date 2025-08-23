import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // ✅ needs react-router
import "./protectedproject.css";
import Navbar from "./Navbar";

export default function ProtectedProject() {
  const [searchParams] = useSearchParams();
  const projectUrl = searchParams.get("url"); // project URL
  const correctCode = searchParams.get("code"); // project-specific code

  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (code.trim() === "") {
      triggerError("⚠️ Enter the code.");
      return;
    }

    if (code === correctCode) {
      setLoading(true);
      setTimeout(() => setFadeOut(true), 1200);
      setTimeout(() => {
        window.location.assign(projectUrl);
      }, 2000);
    } else {
      triggerError("❌ Invalid Code. Please try again.");
    }
  };

  const triggerError = (message) => {
    setError(message);
    setShowError(true);
    setTimeout(() => setShowError(false), 2500);
  };

  if (loading) {
    return (
      <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
        <div className="spinner"></div>
        <p className="loading-text">Loading .....</p>
      </div>
    );
  }

  return (
    <div>
        <Navbar/>
    <div className="lock-screen">
      <div className="lock-box">
        <h1 className="title">🔒 Secure Access</h1>
        <p className="subtitle">Enter the project code</p>
        <form onSubmit={handleSubmit} className="form">
          <input
            type="password"
            maxLength="10"
            placeholder="••••••••••"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="code-input"
          />
          {error && (
            <p className={`error-toast ${showError ? "show" : ""}`}>{error}</p>
          )}
          <button type="submit" className="unlock-btn">
            Unlock
          </button>
        </form>
      </div>
    </div>
    </div>
  );
}
