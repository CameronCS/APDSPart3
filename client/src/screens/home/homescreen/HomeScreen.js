import React, { useEffect } from 'react';
import './HomeScreen.css';

export default function HomeScreen() {
  useEffect(() => {
    document.title = 'Swift Portal - Home';
  }, []);

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="site-title">Swift Payment</h1>
          <p className="hero-subtext">Experience seamless payments with cutting-edge technology.</p>
          <a href="/login" className="cta-button">Get Started</a>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Swift Payment?</h2>
        <div className="features-container">
          <div className="feature-card">
            <h3>Fast Transactions</h3>
            <p>Make payments in real-time, anywhere, anytime with our optimized system.</p>
          </div>
          <div className="feature-card">
            <h3>Secure & Reliable</h3>
            <p>Our system is built with the latest security protocols to ensure safe transactions.</p>
          </div>
          <div className="feature-card">
            <h3>24/7 Support</h3>
            <p>Our dedicated team is available around the clock to assist with any queries.</p>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links-section">
        <h3 className="section-title">Quick Links</h3>
        <ul className="quick-links">
          <li><a href='/about-us' className="link-item">About Us</a></li>
          <li><a href='/faq' className="link-item">Frequently Asked Questions</a></li>
          <li><a href='/contact' className="link-item">Contact Us</a></li>
          <li><a href='/login' className="link-item">Login</a></li>
        </ul>
      </section>
    </div>
  );
}
