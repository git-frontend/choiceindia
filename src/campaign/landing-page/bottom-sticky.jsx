
import React from "react";

function Stickybottom() {

  return (
    <div>
      <section className="stickybottom">
          <div className="container mx-auto">
          <div className="d-flex justify-content-around">
            <div><h2 className="text"><span>Open Free</span> Demat Account</h2></div>
           
            <form className="d-flex justify-content-around">
                <div className="form-group ">
                   
                    <input type="tel" className="form-control numberonly mobile write mobilewrite" id="mobile_no" name="mobile_no" placeholder="Mobile Number "  required  aria-describedby="Mobile Number*" autoComplete="off" /> 
                   
                    <div>
                    <span id="mobile_no_error" className="errormsg"></span>
                    </div>
                </div>
                <div className="form-group tnc d-flex align-items-top align-items-top-check">
                        <label>
                            <input type="checkbox"  className="checkbox termcon" id="terms_and_conditions"  disabled required value="1" />
                        </label> 
                    <div className="termcon termcon1 ">
                        <div> I agree that I have read &amp; accept the<a href="<?php echo TERM_USE; ?>" target="_blank" className="tc"> Terms &amp; Conditions</a>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <button type="button" className="form-btn sendotp"><span>Send OTP</span></button>
                </div>
            </form>
           
          </div>
          </div>
         
      </section>
    
      
    
    </div>
  );
}

export default Stickybottom;
