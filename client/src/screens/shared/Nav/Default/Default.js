import React from 'react';
import '../Nav.css'; // Import your CSS file

export default function Default() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/about" className="nav-link">About Us</a></li>
        <li className="nav-item"><a href="/faq" className="nav-link">FAQ</a></li>
        <li className="nav-item"><a href="/contact" className="nav-link">Contact Us</a></li>
        <li className="nav-item"><a href="/login" className="nav-link">Login</a></li>
      </ul>
    </nav>
  );
}
