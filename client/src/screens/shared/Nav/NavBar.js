import React from 'react';
import Default from './Default/Default';
import EmployeeNav from "./EmployeeNav/EmployeeNav"
import UserNav from "./UserNav/UserNav"
import './NavBar.css'; // Import your CSS file

export default function NavBar({ user_type, setUser }) {
  const RenderNav = () => {
    if (user_type === 'employee') {
      return <EmployeeNav setUser={setUser} />;
    } else if (user_type === 'user') {
      return <UserNav setUser={setUser} />;
    } else {
      return <Default />;
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
