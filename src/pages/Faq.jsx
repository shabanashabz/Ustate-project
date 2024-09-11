import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';

function Faq() {
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);
    const [open5, setOpen5] = useState(false);
    const [open6, setOpen6] = useState(false);
    const [open7, setOpen7] = useState(false);
    const [open8, setOpen8] = useState(false);
    const [open9, setOpen9] = useState(false);
    const [open10, setOpen10] = useState(false);
    const [open11, setOpen11] = useState(false);
    const [open12, setOpen12] = useState(false);

  return (
    <>
     <div className='bg-light p-4' style={{height:'90vh'}}>
            <div className='row m-5' style={{padding:'100px'}}>
            <h2 className='text-center fw-bolder'>Frequently Asked Questions</h2>
                <div className='col-md-6 justify-content-center p-4' >
                    <div>
                        <h4 style={{fontSize:'18px'}}  onClick={() => setOpen1(!open1)}><FontAwesomeIcon icon={faPlus} className='text-danger me-2'
                        />What are your hours?
                           <Collapse in={open1}>
                            <div id="example-collapse-text">
                                <hr />
                                We're open 7 days/week from 8am to 10pm.
                            </div>
                        </Collapse>
                         </h4>
                         
                      
                    </div>
                    <div>
                        <h4 className='mt-4' style={{fontSize:'18px'}}  onClick={() => setOpen2(!open2)}><FontAwesomeIcon icon={faPlus} className='text-danger me-2'
                       />
                        What is the last wash time?
                        {open2 ? "Collapse" : "Expand"}</h4>
                        <Collapse in={open2}>
                            <div id="example-collapse-text">
                            <hr />
                            The posted time for starting the last wash is 9:00 PM. This typically allows enough time for our customers to finish washing, drying and folding their clothes by 10:00 PM.
                            </div>
                        </Collapse>
                    </div>
                    <div>
                    <h4 className='mt-4' style={{fontSize:'18px'}}  onClick={() => setOpen3(!open3)}>
                        <FontAwesomeIcon icon={faPlus} className='text-danger me-2'/>Is coin-less laundry really coin-less?</h4>
                        <Collapse in={open3}>
                            <div id="example-collapse-text">
                                <hr />
                                All the machines work with a laundry card – you don’t need to bring quarters. You can use cash, VISA or MasterCard to add value to a laundry card that may be re-loaded as you use up the balance on your card.
                            </div>
                        </Collapse>
                    </div>
                    <div>
                    <h4 className='mt-4' style={{fontSize:'18px'}} onClick={() => setOpen4(!open4)}><FontAwesomeIcon icon={faPlus} className='text-danger me-2'/>How do I get a new laundry card?</h4>
                        <Collapse in={open4}>
                            <div id="example-collapse-text">
                                <hr />
                                You may get a laundry card by visiting the VTM (Value Transfer Machine) at the back of the store. Follow the simple steps to get a laundry card and add value by inserting cash, VISA or MasterCard. You can add money to the card as needed. Our friendly staff is always available to assist you if you need help with your transaction. There is also an available mobile app, directions can be loacted near the kiosk at the back of the store.
                            </div>
                        </Collapse>
                    </div>
                    <div>
                    <h4 className='mt-4' style={{fontSize:'18px'}} onClick={() => setOpen5(!open5)}><FontAwesomeIcon icon={faPlus} className='text-danger me-2'
                    />How do I add money to the card?</h4>
                        <Collapse in={open5}>
                            <div id="example-collapse-text">
                                <hr />
                                You can add money to your card using cash, VISA or MasterCard at the VTM (Value Transfer Machine) next to the office. Please see the attendant if you need any assistance with your transaction. You can also register your card with Fascard by clicking here or by downloading the Fascard Mobile Apple with Apple & Android)
                            </div>
                        </Collapse>
                    </div>
                    <div>
                    <h4 className='mt-4' style={{fontSize:'18px'}} onClick={() => setOpen6(!open6)}><FontAwesomeIcon icon={faPlus} className='text-danger me-2'/>Is my laundry card reusable/reloadable?</h4>
                        <Collapse in={open6}>
                            <div id="example-collapse-text">
                                <hr />
                                Yes, the card will retain any unused balance for future visits and can be reused and reloaded as often as needed. You can reload your Fascard by clicking here or download their app in your devices app store. Please note that other laudromats use the same system, however our cards only work at our location.
                            </div>
                        </Collapse>
                    </div>   
                </div>
                <div className='col-md-6 justify-content-center p-4'>
                    <div>
                        <h4 style={{fontSize:'18px'}} onClick={() => setOpen7(!open7)}><FontAwesomeIcon icon={faPlus} className='text-danger me-2'/>How do I register my laundry card?</h4>
                        <Collapse in={open7}>
                            <div id="example-collapse-text">
                                <hr />
                                Registration can be completed by downloading the FasCard Mobile App, or by clicking here Registration is very important because it allows you to receive dicounts throughout the year and if you lose your laundry card we can trasnfer the money to a new one.
                            </div>
                        </Collapse>
                    </div>
                <div>
                    <h4 className='mt-4' style={{fontSize:'18px'}} onClick={() => setOpen8(!open8)}><FontAwesomeIcon icon={faPlus} className='text-danger me-2'/>Why is the front load washer often a better choice?</h4>
                        <Collapse in={open8}>
                            <div id="example-collapse-text">
                                <hr />
                                Top load washers are smaller capacity and less efficient. Front washers provide a better wash and are gentler on your garments due to their tumbling action. They need less soap (for example a double load front load washer will need about 1 1/2 load’s worth of soap). Front load washers are better value and more environmentally friendly.
                            </div>
                        </Collapse>
                    </div>
                    <div>
                    <h4 className='mt-4' style={{fontSize:'18px'}} onClick={() => setOpen9(!open9)}><FontAwesomeIcon icon={faPlus} className='text-danger me-2'/>Can I wash my pillows in a front load washer?</h4>
                        <Collapse in={open9}>
                            <div id="example-collapse-text">
                                <hr />
                                You can – but you need to aware of a few things. Pillows can sometimes be damaged during wash and may lose stuffing or lose it’s shape. Please use your best judgment.
                            </div>
                        </Collapse>
                    </div>
                    <div>
                    <h4 className='mt-4' style={{fontSize:'18px'}} onClick={() => setOpen10(!open10)}><FontAwesomeIcon icon={faPlus} className='text-danger me-2'/>Can I wash a down comforter?</h4>
                        <Collapse in={open10}>
                            <div id="example-collapse-text">
                                <hr />
                                Comforters with down fillings take longer to dry. You may need to air dry them at home to get the moisture out. Please take care to dry them completely to prevent mildew.
                            </div>
                        </Collapse>
                    </div>
                    <div>
                    <h4 className='mt-4' style={{fontSize:'18px'}} onClick={() => setOpen11(!open11)}><FontAwesomeIcon icon={faPlus} className='text-danger me-2'/>How do I add time to the dryers?</h4>
                        <Collapse in={open11}>
                            <div id="example-collapse-text">
                                <hr />
                                You can add any amount of time to the dryer by inserting your laundry card into the dryer until the desired drying time is reached. Then press the START button. Please remember to take the card with you when you are done adding time to the dryer.
                            </div>
                        </Collapse>
                    </div>
                    <div>           
                <h4 className='mt-4' style={{fontSize:'18px'}} onClick={() => setOpen12(!open12)}><FontAwesomeIcon icon={faPlus} className='text-danger me-2'/>What items should NOT be put in the dryer?</h4>
                        <Collapse in={open12}>
                            <div id="example-collapse-text">
                                <hr />
                                Anything with rubber should NOT be placed into the dryers on any temperature other than “air dry”. This includes all shoes and rugs with rubber backing, or any other item that is made with any rubber or plastic materials. They may become damaged and misshapen after being placed in the dryer. Items containing rubber or plastic are not permitted in the dryers for this reason.
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Faq