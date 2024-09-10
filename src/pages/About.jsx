import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


function About() {
  return (
    <>
    <div className='row mt-5 mb-5 w-100'>
        <div className='col-md-2 '>
        </div>
        <div className='col-md-2 mb-5 mt-5'>
            <h2 className='mt-4 mb-5'>Contact</h2>
            <h5 className='mb-3'><FontAwesomeIcon icon={faLocationDot} className='me-2' />Location</h5>
            <p>2600 Anderson Rd <br />
            Greenville, SC 29611</p>
            <h5 className='mt-5 mb-3'><FontAwesomeIcon icon={faClock} className='me-2' />Hours</h5>
            <p>Open every day from 8am-10pm
            (Last wash at 8pm)</p>
            <h5 className='mt-5 mb-3'><FontAwesomeIcon icon={faEnvelope} className='me-2'/>Email</h5>
            <Link className='text-danger' style={{textDecoration:'none'}}>info@upstatelaundromat.com</Link>

        </div>
        <div className='col-md-8 text-center'>
        <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="450"
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
                   
            </div>
    </div>
    </>
  )
}

export default About