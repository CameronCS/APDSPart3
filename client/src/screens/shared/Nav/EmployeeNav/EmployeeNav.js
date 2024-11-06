import React from 'react';
import '../Nav.css'; // Import your CSS file

export default function EmployeeNav({setUser}) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/emp/" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/emp/view-all" className="nav-link">View All Claims</a></li>
        <li className="nav-item"><a href="/" className="nav-link" onClick={() => {setUser(undefined)}}>Log Out</a></li>
      </ul>
    </nav>
  );
}
