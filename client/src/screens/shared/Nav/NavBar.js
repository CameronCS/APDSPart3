import React from 'react';
import Default from './Default/Default';
import EmployeeNav from "./EmployeeNav/EmployeeNav"
import UserNav from "./UserNav/UserNav"
import './NavBar.css'; // Import your CSS file

export default function NavBar({ user_type }) {
  const RenderNav = () => {
    switch (user_type) {
      case 0 : return <Default />
      case 1 : return <UserNav />
      case 2 : return <EmployeeNav />
      default: return <Default />
    }
  };

  return (
    <header className="navbar-header">
      <div className="logo-container">
        <img src="/images/swift-logo.png" alt="Swift Logo" className="logo" />
      </div>
      <nav className="nav-container">
        {RenderNav()} {/* Render navigation based on user type */}
      </nav>
    </header>
  );
}
