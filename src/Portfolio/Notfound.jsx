import React from 'react';

const Notfound = () => {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '50px 20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      {/* 404 Image */}
      <img
        src="/img/404design.png" // change this to your actual image path
        alt="404 Error"
        style={{
          maxWidth: '100%',
          height: 'auto',
        }}
      />

      {/* Message */}
      <h2 style={{ marginTop: '20px', fontSize: '24px' }}>Oops! Page Not Found</h2>
      <p style={{ color: '#555' }}>
        The page you’re looking for doesn’t exist or the link is broken.
      </p>

      {/* Go Home Button */}
      <a
        href="/"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          background: '#000',
          color: '#fff',
          textDecoration: 'none',
          borderRadius: '6px',
          marginTop: '20px',
        }}
        onMouseOver={(e) => (e.target.style.background = '#444')}
        onMouseOut={(e) => (e.target.style.background = '#000')}
      >
        Go Home
      </a>
    </div>
  );
};

export default Notfound;
