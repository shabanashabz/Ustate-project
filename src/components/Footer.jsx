import React from 'react'
import ulogo from '../assets/u-logo.png'
function Footer() {
  return (
    <div className=' text-center justify-content-center bg-danger' style={{height:'75vh'}}>
      <div className='footer d-flex align-items-center justify-content-evenly '>
          <div className='text-light p-5 mt-4'>
            <h4 className='mt-5' style={{fontSize:'35px'}}>Join our mailing list for 10% off!</h4>
            <div className='d-flex p-3 '>
              <input type="text" className='w-100 form-control p-3' placeholder='Email Address' />
              <button className='btn btn-light w-50  rounded-5 ms-2'>SIGN UP</button>
            </div> 
            </div> 
          </div>
          <p className='text-light mt-2 mb-5' style={{fontSize:'15px'}}>info@upstatelaundromat.com  |  2600 Anderson Rd, Greenville SC 29611 <br />
          © 2018 Upstate Laundromat. All rights reserved. Site by Knapsack.</p>
          <img src={ulogo} alt="" width={'350px'}/>
      </div>

  )
}

export default Footer