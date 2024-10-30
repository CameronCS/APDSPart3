import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-section'>
        <p>Website Developed by</p>
        <ul className='developer-list'>
          <li>
            Cameron Stocks <span className='st-num'>ST10042763</span>
          </li>
          <li>
            Widkse Posthumus <span className='st-num'>ST10056046</span>
          </li>
        </ul>
      </div>

      <div className='footer-section'>
        Swift Payment Portal is a subject of CopyRight &copy; All Rights Reserved
      </div>

      <div className='footer-section'>
        <ul className='footer-links'>
          <li>
            <a href='/privacy' className='footer-link'>Privacy Policy</a>
          </li>
          <li>
            <a href='/terms-of-use' className='footer-link'>Terms of Use</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
