import React from 'react'

import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

function MfCalculator() {

  const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [exchangeToggle, setExchangeToggle] = useState(false);

    const onToggleChange = () => {
        setExchangeToggle(!exchangeToggle);
    };

  return (
    <>
       <div className='card-mn box-shadow card-calculator'>
            <div className='row'>
                <div className='col-md-6'>
                    <h3 className='title-secnd'>Lumpsum & SIP Calculator</h3>
                </div>
                <div className='col-md-6'>
                <div className="toggle">
                    <span className={`${!exchangeToggle ? 'selected' : ''}`}>MCX</span>
                    <input
                        type="checkbox"
                        id="exchangeToggle"
                        name="exchangeToggle"
                        checked={exchangeToggle}
                        onChange={onToggleChange}
                    />
                    <label></label>
                    <span className={`${exchangeToggle ? 'selected' : ''}`}>NCDX</span>
                </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <p className='midl-txt'>SIP of ₹500 for 48 Months would have gained 83.16% & its value would have been ₹43,957</p>

                    <div className='accordian-sec'>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" >
                                <Accordion.Header as="h3" className='faq-header'>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className='invst-amt-hirizon'>
                                        <div className='form-lft'>
                                            <Form autoComplete="off">
                                                <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                                                <Form.Label className="formlabel">Enter Amount you Want to Invest </Form.Label>
                                                <div className='amt-enter'>
                                                    <Form.Control type="text" name="firstName" value='500'  className="formcontrol" />
                                                </div>
                                                <span className="text-danger"> </span>
                                                </Form.Group>
                                            </Form>
                                        </div>
                                        <div className='horizon-slider'>
                                            
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MfCalculator