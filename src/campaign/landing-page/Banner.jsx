
import React from "react";
import Form from 'react-bootstrap/Form';

function Banner() {

  return (
    <div>
      
     
    <section className="bannersection">
        <div className="container">
            <div className="row  align-items-center">
                <div className="col-md-7">
                    <h1 className="title">Demat Account</h1>

                    <p className="para">A Perfect Guide for Beginners</p>
                     <hr />       
                    
                    <div className="bannertext">
                        <p>In India, any person who wants to invest or trade securities like stocks, mutual funds and bonds must <a href="https://choiceindia.com/open-free-demat-account" className="linking"> open a Demat account.</a></p>
                        <p> Demat account is necessary to start your investment journey into the stock market.</p>
                        <p>Let’s get started to understand everything about the Demat account through this guide.</p>
                    </div>
                </div>
                <div className="col-md-5">
                    <div className="rightsec">
                        <div className="signal-form" id="form-banner" >
                        <form id="enq_form" className="mt-4 enq-form">
                                <fieldset>
                           
                                    <div className="title-form">
                                        <h3 className="formtitle">Open Free Account</h3>
                                    </div>
                            
                                    <div className="form-group">
                                        <label htmlFor="mobile-number" hidden>Mobile Number</label>
                                        <input type="tel" className="form-control numberonly mobile write mobilewrite" id="mobile_no" name="mobile_no" placeholder=" "  required  aria-describedby="Mobile Number*" autoComplete="off" /> 
                                        <label className="hello">Mobile Number</label>
                                        <div>
                                            <span id="mobile_no_error" className="errormsg"></span>
                                        </div>
                                    </div>
                              
                                    <div className="form-group tnc d-flex align-items-top align-items-top-check">
                                        <label><input type="checkbox"  className="checkbox termcon" id="terms_and_conditions"  disabled required value="1" />
                                        </label> 
                                    <div className="termcon termcon1">
                                        <div> I agree that I have read &amp; accept the<a href="<?php echo TERM_USE; ?>" target="_blank" className="tc"> Terms &amp; Conditions</a>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="button" className="form-btn"><span>Send OTP</span></button>
                                    </div>
                                </fieldset>
                                    <div><span id="formError" className="errormsg"></span></div>
                                    <div><span id="error-msg" className="errormsg"></span></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
      
    
    </div>
  );
}

export default Banner;
