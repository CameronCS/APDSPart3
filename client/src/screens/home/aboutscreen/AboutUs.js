import React, {useEffect} from 'react'
import './AboutUs.css'

export default function AboutUs() {
  useEffect(() => {
    document.title = 'Swift Portal - About Us';
  }, []);

  return (
    <div className="about-us-page">
      <div className="navspace">
        {/* This space is for the fixed header */}
      </div>
      <h1 className="site-title">About Us</h1>
      <section className="welcome-section">
        <h1>Welcome to SWIFT: A platform for secure payemnts!</h1>
        <p>Here at SWIFT, we prize ourselves on 20 years of hard work, to allow our customers only the best when it comes to secure payment!  </p>
        <p>Come and see who we are, and join the journey with us!</p>    
      </section>
      <section className="content-section">
        <div className="team-info">
         <h2>Our Team</h2>
          <p>We bring together creativity, experience, and innovation to craft the future.</p>
        </div>
        <div className="mission-info">
          <h2>Our Mission</h2>
          <p>We aim to revolutionize the industry with cutting-edge solutions that empower businesses.</p>
        </div>
      </section>
</div>
  )
}
