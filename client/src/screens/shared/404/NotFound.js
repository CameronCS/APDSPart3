import React from 'react';
import './NotFound.css'; // Import your CSS file

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! The page you're looking for does not exist.</p>
      <img src="path/to/your/image.png" alt="Not Found" className="not-found-image" />
      <a href="/" className="not-found-link">Go back to Home</a>
    </div>
  );
}
