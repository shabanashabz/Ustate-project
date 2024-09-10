import React from 'react'
import google from '../assets/google_sm.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
function Testimonials() {
  return (
    <>
    <div className='text-center mt-5'>
    <h3 style={{fontSize:'35px'}}>What People Are Saying</h3>
    <div className='row mt-4'>
                <div className='col-md-3'>
                </div>
                <div className='col-md-6'>
                <div className=' ms-5 w-100'> 
                        <div className='text-start mt-4'>
                            <div className='d-flex' >
                                <h3 style={{fontSize:'20px'}}>Agness Mutoni <span className='ms-2'>
                                    <FontAwesomeIcon icon={faStar} className='text-danger' />
                                    <FontAwesomeIcon icon={faStar} className='text-danger' />
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    </span>
                                </h3>  
                                <p className='text-end' style={{marginLeft:'250px'}}><img src={google} alt="" width={'25px'}/></p>        
                            </div>
                            <p>Aug 18, 2024</p>
                            <p className='mb-4'>Great service🤗</p>
                        </div>
                        <div className='text-start'>
                            <div className='d-flex'>
                                <h3 style={{fontSize:'20px'}} >Estrellita Rosales <span className='ms-2'>
                                     <FontAwesomeIcon icon={faStar}  className='text-danger'/>
                                    <FontAwesomeIcon icon={faStar} className='text-danger' />
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    </span></h3>
                                <p className='text-end' style={{marginLeft:'230px'}}><img src={google} alt="" width={'25px'}/></p>        
                            </div>
                            <p className='mb-5'>Aug 5, 2024</p>
                        </div>
                        <div className='text-start'>
                            <div className='d-flex'>
                                <h3 style={{fontSize:'20px'}}>jose david ospina barrera <span className='ms-2'>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    </span></h3>
                                <p className='text-end' style={{marginLeft:'160px'}}><img src={google} alt="" width={'25px'}/></p>        
                            </div> 
                            <p>Aug 3, 2024</p>
                            <p className='mb-4'>Excelente atención</p>
                        </div>
                        <div className='text-start'>
                            <div className='d-flex'>
                                <h3 style={{fontSize:'20px'}}>Ashley Ammons <span className='ms-2'>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    <FontAwesomeIcon icon={faStar} className='text-danger'/>
                                    </span>
                                </h3>
                                <p className='text-end' style={{marginLeft:'240px'}}><img src={google} alt="" width={'25px'}/></p>        
                            </div>
                            <p>Jun 23, 2024</p>
                            <p className='mb-4'>Clean facility, fair prices, and Andrew was friendly and helpful.</p>
                            <p className='mt-5' style={{marginBottom:'150px'}}>Powered by <span className='text-danger'>ReviewsOnMyWebsite</span></p>  
                        </div>
                    </div>
                </div>
                <div className='col-md-3'></div>
            </div>     
    </div>
    </>
  )
}

export default Testimonials