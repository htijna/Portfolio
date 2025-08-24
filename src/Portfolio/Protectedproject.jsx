import React, { useState, useEffect } from "react";
import "./protectedproject.css";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

export default function ProtectedProject() {
  const location = useLocation();
  const section = location.state?.section || "default";
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [timeoutError, setTimeoutError] = useState(false);
const normalizedSection = section.toLowerCase().replace(/[^a-z0-9]/g, "");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.trim() === "") {
      triggerError("⚠️ Enter the password.");
      return;
    }

    setLoading(true);

    // Timeout feature: stop loading if server doesn't respond in 10s
    const timeout = setTimeout(() => {
      setLoading(false);
      setTimeoutError(true);
    }, 10000); // 10 seconds

    try {
const res = await fetch(`${API_URL}/api/unlock`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ section: normalizedSection, password: password.trim() }),
});
      const data = await res.json();
      clearTimeout(timeout); // clear timeout if request succeeds

      if (data.success) {
        setFadeOut(true); 
        setTimeout(() => {
          window.location.href = data.url;
        }, 800);
      } else {
        setLoading(false);
        triggerError(data.message);
      }
    } catch {
      clearTimeout(timeout);
      setLoading(false);
      triggerError("⚠️ Server error. Try again later.");
    }
  };

  const triggerError = (message) => {
    setError(message);
    setShowError(true);
    setTimeout(() => setShowError(false), 2500);
  };

  // Loading screen
  if (loading) {
    return (
      <div className={`loading-screen ${fadeOut ? "fade-out" : ""}`}>
        <div className="spinner"></div>
        <p className="loading-text">Loading .....</p>
      </div>
    );
  }

if (timeoutError) {
  return (
    <div className="error-404-screen">
      <h1>⚠️ Timeout</h1>
      <p>The server took too long to respond. Please try again later.</p>
      <button className="retry-btn" onClick={() => window.location.reload()}>
        Retry
      </button>
    </div>
  );
}

  return (
    <div>
      <Navbar />
      <div className="lock-screen">
        <div className="lock-box">
          <h1 className="title">🔒 Secure Access</h1>
          <p className="subtitle">Enter the project password</p>
          <form onSubmit={handleSubmit} className="proform">
            <input
              type="password"
              maxLength="20"
              placeholder="••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`code-input ${showError ? "error-border" : ""}`}
            />
            {error && <p className={`error-toast ${showError ? "show" : ""}`}>{error}</p>}
            <button type="submit" className="unlock-btn">Unlock</button>
          </form>
        </div>
      </div>
    </div>
  );
}
