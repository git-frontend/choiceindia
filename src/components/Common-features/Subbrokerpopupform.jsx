import './Subbrokerpopupform.scss';
import React, { useEffect, useState, useRef } from "react";
import { useSearchParams } from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
import { Link } from "react-router-dom";


function SubbrokerpopupForm() {

   
    return (
        <>
        
            <div className="exit-intent-sleekbox-overlay sleekbox-popup-active otp-main-modal demat-modal-sleekbox-overlay">
                <div className="exit-intent-sleekbox-popup">
                
                    <div className="popup-sub-row">
                        
                                <h4 >Becomesubbrin  </h4>
                           
                     
                            <div className="signal-form" id="form-banner">
                         
                           
                                <form id="sso_form-pop" name="sso_form" className="mt-4 enq-form dmt_form" method="post">
                                  
                                  
                                    <div className="form-group">
                                        {/* <label htmlFor="mobile-number" hidden="">Mobile Number<span style={{ 'color': 'red' }}>*</span></label> */}
                                        <input type="text" pattern='\d*' autoComplete="off" maxLength="10" className="write numberonly input-type dmt" id="mobile_no" name="mobile_no" placeholder="Mobile Number" value={mobileNumber} onChange={handleMobile}/>
                                        <div>
                                            <small id="pop_mobile_no_error" className="errormsg pop_mobile_no_error text-danger">{errors.invalidMobile ? 'Invalid Mobile Number' : ''}</small>
                                            <small id="pop_mobile_no_error" className="errormsg pop_mobile_no_error text-danger">{errors.required ? 'Mobile Number is Required' : ''}</small>
                                        </div>
                                    </div>
                                    <div className="form-check">
                                        <input type="checkbox" className="tick_by_def" data="JFP" id="terms_and_conditions" name="terms_and_conditions" checked readOnly />
                                        <label className="tc" target="_blank" htmlFor="exampleCheck1">I agree that I have read
                                            &amp; accept the <a className="termsPopup" onClick={handleTermsConditionShow}>Terms
                                                &amp; Conditions</a></label>
                                    </div>
                                    <button type="submit" id="dem_btn_submit" className="btn btn-primary w-100 btn-f-sm signal-same-btn" disabled={loaders.sendOTPLoader} onClick={handleSendOTP}>{loaders.sendOTPLoader ? <div className="loaderB mx-auto"></div> : 'Send OTP'}</button>
                                    <div style={{ textAlign: 'center' }}>
                                        <small id="pop_mobile_no_error" className="errormsg pop_mobile_no_error text-danger">{APIError || ''}</small>
                                    </div>
                                </form>
                            </div>
                       
                    </div>
                </div>
            </div>  
        
      

            
        
        </>
    );
}

export default SubbrokerpopupForm