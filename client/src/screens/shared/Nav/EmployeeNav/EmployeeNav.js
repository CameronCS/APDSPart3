import React from 'react';
import '../Nav.css'; // Import your CSS file

export default function EmployeeNav({setUser}) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/employee/" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/employee/view-all" className="nav-link">View All Claims</a></li>
        <li className="nav-item"><a href="/employee/view-pending" className="nav-link">View Pending</a></li>
        <li className="nav-item"><a href="/employee/view-verified" className="nav-link">View Verified</a></li>
        <li className="nav-item"><a href="/employee/view-submitted" className="nav-link">View Submitted</a></li>
        <li className="nav-item"><a href='/log-out' className="nav-link">Log Out</a></li>
      </ul>
    </nav>
  );
}
