import React from 'react'
import icon1 from '../assets/self-serve-icon.png'
import icon2 from '../assets/folded-shirt-icon.png'
import icon3 from '../assets/loyalty-card-icon.png'

function Services() {
  return (
    <>
    <div className='container-fluid justify-content-center align-items-center mt-5'>
            <div className='row p-5 mt-5'>
                <div className='col-md-4 justify-content-center align-items-center p-5'>
                    <img src={icon1} alt="" />
                    <h5 className='mt-5 fw-bolder text-center'>Coin & coinless machines</h5>
                    <p className='text-center'>Our environmentally friendly Huebsch® machines use less water and dry faster so you are done fast! You can pay with coins, the Upstate Laundromat loyalty card, Visa, or MasterCard. </p>
                </div>
                <div className='col-md-4 justify-content-center p-5'>
                <img src={icon2} alt="" />
                    <h5 className='mt-5 fw-bolder text-center'>Fluff & fold service available</h5>
                <p className='text-center'>Don’t waste valuable time doing your own laundry. Let us handle it for you! Offered 7 days a week, same day or next day available. We will notify you when your laundry is done via text</p>
                </div>
                <div className='col-md-4 justify-content-center p-5'>
                <img src={icon3} alt="" />
                <h5 className='mt-5 fw-bolder text-center'>Loyalty Discounts</h5>
                <p className='text-center'>Use your Upstate Laundromat personal loyalty card to earn special discounts over time. Make sure to register your card by <a target="_blank" href="https://m.fascard.com/#Login" className='text-danger' style={{textDecoration:'none'}}>clicking here</a>&nbsp;or by downloading the Fascard Mobile app.&nbsp;</p>
                </div>
            </div>
     </div>
    </>
  )
}

export default Services