import React from 'react'
import './Footer.css'

function Footer () {
  return (
    <footer className="footer">
      <div className="container">
        <p>© 2023 Your Name. All rights reserved.</p>
        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          {/* Add more social icons as needed */}
        </div>
      </div>
    </footer>
  )
}

export default Footer
