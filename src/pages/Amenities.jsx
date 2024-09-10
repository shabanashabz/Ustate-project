import React from 'react'
import wifi from '../assets/wifi-icon.png'
import snow from '../assets/snowflake-icon.png'
import chair from '../assets/chair-icon.png'
import cafe from '../assets/cafe-table-icon.png'
import charging from '../assets/charger-icon.png'
import tv from '../assets/hdtv-icon.png'
import wm from '../assets/washing-machine-icon.png'
import ipad from '../assets/ipad-icon.png'
import owner from '../assets/attendant-icon.png'
import camera from '../assets/security-camera-icon.png'

function Amenities() {
  return (
    <>
        <div className='amenities-body mt-5'>
            <div className='text-center justify-content-center align-items-center m-5 p-5'>
                <div className='text-center pt-5'>
                <h2 className='my-5 text-light '>We are on a mission to change the <br />laundromat experience</h2>
                <p className='my-5 text-light '>Here's what we offer:</p>
                </div>
            
            <div className='row justify-content-center align-items-center text-light w-100'>
                <div className='col-md-2 justify-content-center align-items-center p-5'>
                    <img src={wifi} alt="" />
                    <h5 className='mt-5 fw-bolder text-center'>Free wifi</h5>   
                </div>

                <div className='col-md-2 justify-content-center p-5'>
                <img src={snow} alt="" />
                    <h5 className='mt-5 fw-bolder text-center'>Air conditioning</h5>               
                </div>

                <div className='col-md-2 justify-content-center p-5'>
                <img src={chair} alt="" />
                <h5 className='mt-5 fw-bolder text-center'>Comfortable seating</h5>              
                </div>

                <div className='col-md-2 justify-content-center align-items-center p-5'>
                <img src={cafe} alt="" />
                    <h5 className='mt-5 fw-bolder text-center'>Cafe table</h5>              
                </div>

                <div className='col-md-2 justify-content-center p-5'>
                <img src={charging} alt="" />
                    <h5 className='mt-5 fw-bolder text-center'>Charging stations</h5>    
                </div>
            </div>
            <div className='row justify-content-center align-items-center text-light w-100'>

                <div className='col-md-2 justify-content-center p-5'>
                <img src={tv} alt="" />
                <h5 className='mt-5 fw-bolder text-center'>5 HD 55" TVs</h5>
               
                </div>
                <div className='col-md-2 justify-content-center align-items-center p-5'>
                <img src={wm} alt="" />
                    <h5 className='mt-5 fw-bolder text-center'>35 hi tech machines</h5>
                    
                </div>
                <div className='col-md-2 justify-content-center p-5'>
                <img src={ipad} alt="" />
                    <h5 className='mt-5 fw-bolder text-center'>Kid's Zone </h5> 
                </div>
                
                <div className='col-md-2 justify-content-center p-5'>
                <img src={owner} alt="" />
                <h5 className='mt-5 fw-bolder text-center'>On-site attendant</h5>
                </div>
                <div className='col-md-2 justify-content-center p-5'>
                <img src={camera} alt="" />
                <h5 className='mt-5 fw-bolder text-center'>Security cameras</h5>
                </div>
            </div>
     </div>
     </div>
    </>
  )
}

export default Amenities