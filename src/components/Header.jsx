import React from 'react'
import Navbar from './Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <>
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section  mb-5">
        <p className="primary-heading mt-3">
          Modern & upscale laundromat
          </p>
        <h4 className="primary-text mt-2">
          A Better Place to do Your Laundry
          </h4>
          <button className="secondary-button mt-5">
          <FontAwesomeIcon icon={faLocationDot} className='me-3' />View Location 
          </button>   
        </div>
        {/* <div className="home-image-section">
        <img src="https://images.squarespace-cdn.com/content/v1/5acd6b71da02bcf0fc160fce/1530042443340-4JVT1P6F8G2LJCASBEAC/banner-3.jpg?format=2500w" alt=""  width='100%'style={{position:'absolute'}}/>
        </div> */}
      </div>
    </div>

    </>
  )
}

export default Header