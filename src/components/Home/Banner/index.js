import React from 'react';
import './style.css';
import bannerImg from './banner.png';
import Logo from '../../Common/Logo';


const Banner = ({ handleScrollMenu }) => {
  return (
    <div>
      <header>
        <div className="header-content">
          <Logo />
          <div className="content-main">
            <h1>Delicious Food For Your Cravings</h1>
            <p>We made fresh and hygenic foods with different recipes.</p>
            <button className='btn' onClick={handleScrollMenu}>View Menu <i className="fas fa-long-arrow-alt-right"></i></button>
          </div>

        </div>
        <img src={bannerImg} alt='banner' className='header-img' />
      </header>
    </div>
  )
}

export default Banner
