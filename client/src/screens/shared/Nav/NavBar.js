import React from 'react';
import Default from './Default/Default';
import EmployeeNav from './EmployeeNav/EmployeeNav';
import UserNav from './UserNav/UserNav';
import './NavBar.css'; // Import your CSS file

export default function NavBar({ user_type }) {
  const RenderNav = () => {
    if (user_type === 'employee') {
      return <EmployeeNav />;
    } else if (user_type === 'user') {
      return <UserNav />;
    } else {
      return <Default />;
    }
  };

  return (
    <header className="navbar">
      <div className="logo-container">
        <img src="/images/swift-logo.png" alt="Swift Logo" className="logo" />
      </div>
      <nav className="nav-container">
        {RenderNav()} {/* Render navigation based on user type */}
      </nav>
    </header>
  );
}
