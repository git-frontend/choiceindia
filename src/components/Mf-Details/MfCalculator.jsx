import React from 'react'

import { useState,useEffect } from "react";
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


    const [value,onChange]=useState(0);
    useEffect(()=>{
        const ele = document.querySelector('.buble');
    //   if (ele) {
    //     ele.style.left = `${Number(value / 4)}px`;
    //   }
    })

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
                                                <Form.Group className="formgrp" controlId="formBasicEmail">
                                                <Form.Label className="formlabel">Enter Amount you Want to Invest </Form.Label>
                                                <div className='amt-enter'>
                                                    <Form.Control type="text" name="firstName" value='500'  className="formcontrol" />
                                                </div>
                                                <span className="text-danger"> </span>
                                                </Form.Group>
                                            </Form>
                                        </div>
                                        <div className='horizon-slider'>
                                            <div className='row align-items-center'>
                                                <div className='col-md-8'>
                                                <div className="slidecontainer">
                                                    <h6>Investment Horizon</h6>
                                                    <div className="middle">
                                                        <div className="slider-container">
                                                            <span className="bar">
                                                                <span className="fill" style={{width : `${value}%`}}></span>
                                                            </span>
                                                            <input type="range" className="slider" id="myRange" min="0" max="100" value={value}
                                                                onChange={({ target: { value: radius } }) => {
                                                                    onChange(radius);
                                                                }}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                                <div className='col-md-4'>
                                                    <div className='float-right'>
                                                            <span>4Yr</span>
                                                    </div>
                                                </div>
                                            </div>
                                           
                                            
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