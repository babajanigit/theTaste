import React from 'react';
import Logo from '../Logo';
import './style.css'

const Footer = () => (
  <footer>
    <div className="socialMedia">
      <p>follow us</p>
      <div className="socialMedia-Wrap">
        <a className="socialMedia-Icons" href="/" target="_blank" aria-label='Facebook'>
          <i class="fa-brands fa-2x fa-facebook-square"></i>
        </a>
        <a className="socialMedia-Icons" href="/" target="_blank" aria-label='Instagram'>
          <i class="fa-brands fa-2x fa-instagram-square"></i>
        </a>
        <a className="socialMedia-Icons" href="/" target="_blank" aria-label='Twitter'>
          <i class="fa-brands fa-2x fa-twitter-square"></i>
        </a>
        <a className="socialMedia-Icons" href="/" target="_blank">
          <i class="fa-brands fa-2x fa-youtube-square"></i>
        </a>
      </div>
    </div>
    <Logo />
  </footer>
);

export default Footer
