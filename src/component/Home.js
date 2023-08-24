import React  from 'react'
import Navbar from './Navbar'
import home_banner_background from '../Assets/home-banner-background.png';
import home_banner_image from '../Assets/home-banner-image.png'
import {FiArrowRight} from 'react-icons/fi'
// import About from './About';
// import Work from './Home'

export default function Home() {
  return (
    <div className='home-container'>
      <Navbar/>
      <div className="home-banner-container">
       <div className='home-bannerImage-container'>
       <img src={home_banner_background} alt="" />
       </div>
       <div className="home-text-section">
        <h1 class='primary-heading'>Your Favourite Food Delivered Hot And Fresh</h1>
        <p className="primary-text">Healthy switcher chefs do all the prep work,like peeding,chopping & marinating, so you con cook a fresh food.</p>
        <button class='secondary-button'>
          open <FiArrowRight/>
        </button>
       </div>
       <div className="home-image-section">
          <img src={home_banner_image} alt="" />
        </div>
      </div>
      {/* <About/>
       <Work/> */}

    </div>

  )
}
