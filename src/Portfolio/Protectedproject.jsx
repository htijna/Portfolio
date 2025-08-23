import React, { useState } from "react";
import "./protectedproject.css";
import Navbar from "./Navbar";

export default function ProtectedProject() {
  const [password, setPassword] = useState(""); // password input
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.trim() === "") {
      triggerError("⚠️ Enter the password.");
      return;
    }

    try {
      const res = await fetch("http://localhost:5000/api/unlock", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: password.trim() }), // send password
      });

      const data = await res.json();

      if (data.success) {
        setLoading(true);
        setTimeout(() => {
          window.location.href = data.url; // redirect after success
        }, 1000);
      } else {
        triggerError(data.message); // invalid password
      }
    } catch {
      triggerError("⚠️ Server error. Try again later.");
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
      <Navbar />
      <div className="lock-screen">
        <div className="lock-box">
          <h1 className="title">🔒 Secure Access</h1>
          <p className="subtitle">Enter the project password</p>
          <form onSubmit={handleSubmit} className="form">
            <input
              type="password"
              maxLength="20"
              placeholder="••••••••••"
              value={password} // fixed
              onChange={(e) => setPassword(e.target.value)} // fixed
              className="code-input"
            />
            {error && (
              <p className={`error-toast ${showError ? "show" : ""}`}>
                {error}
              </p>
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
