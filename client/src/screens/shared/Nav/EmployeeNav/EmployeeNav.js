import React from 'react';
import '../Nav.css'; // Import your CSS file

export default function Default() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/emp/" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/emp/view-all" className="nav-link">View All Claims</a></li>
        <li className="nav-item"><a href="/emp/logout" className="nav-link">FAQ</a></li>
      </ul>
    </nav>
  );
}
