import './Subbrokerpopupform.scss';
import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select from 'react-dropdown-select';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";


function SubbrokerpopupForm(hideComponent) {

   
    return (
        <>
        
        <div class="exit-intent-sleekbox-overlay sleekbox-popup-active subbrokerpopup">
            <div class="exit-intent-sleekbox-popup">
            
                <div class="popup-sub-row-box">
                    <div className="close">
                        <a  onClick={hideComponent} class="closebtn" >&times;</a>
                        </div> 
                    <div class="popup-sub-right">
                       
                        <div class="signal-form" id="form-banner">
                        <h4>Start <span>Sub Broker Franchise</span> without Deposit</h4>
                        <Form>
                            <Form.Group className="mb-3 formgrp">

                        <div className="sub-formgrp">
                            
                            <Form.Control type="text" name="brokerName" id="brokerName" placeholder="Name" />
                           
                        </div>
                        <div className="sub-formgrp">
                           
                            <Form.Control type="tel" pattern="\d*" name="brokerMobileNumber" id="brokerMobileNumber" placeholder="Mobile Number" />
                          
                        </div>
                        <div className="sub-formgrp">
                           
                            <Form.Control type="text" name="brokerEmail" id="brokerEmail" placeholder="Email" />
                            
                        </div>
                        
                           
                                <div className="sub-formgrp">
                                    
                                    <Select className="form-control" placeholder="Search Nearest City Branch" />
                                  
                                </div>
                        
                        <div className="sub-formgrp cust-checkbox">
                            <Form.Check
                                inline
                                name="terms_and_conditions"
                                type="checkbox"
                                id="terms_and_conditions"
                            >
                                <Form.Check.Input type="checkbox" checked readOnly />
                                <Form.Check.Label> I agree &amp; accept
                                    <a className="link-tc"> T&amp;C</a>
                            </Form.Check.Label>
                            </Form.Check>
                        </div>


                        <div className="sub-formgrp  mb-0">
                            <Button variant="primary"
                                type="button" className="btn-bg btn-bg-dark sendbtn"> Send OTP
                                 {/* <div className="loaderB mx-auto"></div>  */}
                            </Button>
                            <p className="sleekbox-link remindMeLater"><a className="sleekbox-a" onClick={hideComponent}>Remind Me Later</a></p>
                        </div>

                        
                    </Form.Group>
                </Form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        
      

            
        
        </>
    );
}

export default SubbrokerpopupForm