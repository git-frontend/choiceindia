import './Subbrokerpopupform.scss';
import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";


function SubbrokerpopupForm(hideComponent) {

   
    return (
        <>
        
        <div class="exit-intent-sleekbox-overlay sleekbox-popup-active demat-modal-sleekbox-overlay">
            <div class="exit-intent-sleekbox-popup">
            
                <div class="popup-sub-row">
                    <div className="close">
                        <a  onClick={hideComponent} class="closebtn" >&times;</a>
                        </div> 
                    <div class="popup-sub-right">
                       
                        <div class="signal-form" id="form-banner">
                            <h4>Start <span>Sub Broker Franchise</span> without Deposit</h4>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        
      

            
        
        </>
    );
}

export default SubbrokerpopupForm