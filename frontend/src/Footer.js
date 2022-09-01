import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
        <div className="footerCopy">
      <p className="footerCopyright">Copyright 2022 — The Book Club. All rights reserved.</p>
    </div>
      <div className='footerNavbar'>
      <div className='footerNav'>
      <h2>Categories</h2>
      <ul className="navbar">
        <li><a>Bestsellers</a></li>
        <li><a>Fiction</a></li>
        <li><a>Non Fiction</a></li>
        <li><a>Romance</a></li>
        <li><a>Classics</a></li>
      </ul>
    </div>
    
    <div className='footerNav'>
      <h2>Categories</h2>
      <ul className="navbar">
        <li><a>AutoBiography</a></li>
        <li><a></a>Self Help</li>
        <li><a>Hard Covers</a></li>
        <li><a>Thriller</a></li>
        <li><a>Children's Fiction</a></li>
      </ul>
    </div>

    <div className="footerNav">
      <h2>Section</h2>
      <ul className="navbar">
        <li><a>Home</a></li>
        <li><a>Features</a></li>
        <li><a>Pricing</a></li>
        <li><a>FAQs</a></li>
        <li><a>About</a></li>
      </ul>
    

    </div>
      </div>
   
   

    </div>
  )
}

export default Footer