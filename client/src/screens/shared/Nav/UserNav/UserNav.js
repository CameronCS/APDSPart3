import React from 'react';
import '../Nav.css'; // Import your CSS file

export default function UserNav({setUser}) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/user/" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/user/submit" className="nav-link">Submit</a></li>
        <li className="nav-item"><a href="/user/view-all" className="nav-link">View All</a></li>
        <li className="nav-item"><a href="/user/faq" className="nav-link">FAQ</a></li>
        <li className="nav-item"><a href="/user/contact" className="nav-link">Contact Us</a></li>
        <li className="nav-item"><a href="/log-out" className="nav-link">Logout</a></li>
      </ul>
    </nav>
  );
}
