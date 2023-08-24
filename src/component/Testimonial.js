import React from 'react'
import Profile from'../Assets/john-doe-image.png'
import {AiFillStar} from 'react-icons/ai'

export default function Testimonial() {
  return (
    <div className='work-section-wrapper'>
       <div className="work-section-top">
         <p className="primary-subheading">Testimonial</p>
         <h1 className='primary-heading'>What They Are Saying</h1>
         <p className='primary-text'>
         Lorem ipsum dolor sit amet anosectetur.Non tincidunt magna non et elit .Dolor turpis molestie dui magnis facilisi at fringilla quam.
         </p>
       </div>
       <div className="testimonial-section-bottom">
        <img src={Profile} alt="" />
        <p> Lorem ipsum dolor sit amet anosectetur.Non tincidunt magna non et elit .Dolor turpis molestie dui magnis facilisi at fringilla quam.</p>
        <div className="testimonials-stars-container">
                <AiFillStar/>
                <AiFillStar/>
                <AiFillStar/>
        </div>
        <h1>John Doe</h1>
       </div>
    </div>
  )
}
