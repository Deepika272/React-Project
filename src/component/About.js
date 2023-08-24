import React from 'react'
import about_background_image from'../Assets/about-background-image.png'
import about_background from '../Assets/about-background.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

export default function About() {
  return (
    <div class='about-section-container'>
      <div className="about-background-image-container">
          <img src={about_background} alt="" />
      </div>
      <div className="about-section-image-container">
          <img src={about_background_image} alt="" />
      </div>
        <div className="about-section-text-container">
          <p className='primary-subheading'>About</p>
          <h1 className='primary-heading'>About Food Is An Important Part Of A B alanced Diet</h1>
         <p className="primary-text">Lorem ipsum sit amet consectetur.Non tincidunt magna non etelit.Dolor turpis molestie dui magnis facilisis quam.</p>
         <p className="primary-text">Non tincidunt magna non et elit.Dolor turpis molestie dui magnis facilisis at fringilla quam.</p>
        <div className="about-buttons-container">
        <button className='secondary-button'>Learn more</button>
         <button className='watch-video-button'><BsFillPlayCircleFill/>Watch Vedio</button>
        </div>
        </div>
    </div>
  )
}
