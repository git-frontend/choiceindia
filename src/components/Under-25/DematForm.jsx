import React from 'react'

function Form() {
  return (
    <>
         <div className='form-card'>
                  <div className='card-heading'>
                    <h5>Open your free trading account</h5>
                    <p>Take Control of Your Finances</p>
                  </div>
                  <div className='input-field'>
                      <input className='form-control' placeholder='Mobile Number'/>
                  </div>
                  <div className='input-checkbox'>
                      <label className="container-checkbox">
                        <input type="checkbox"/>
                        <span className="checkmark"></span>
                      </label>
                      <div className='form-label'>
                          <label>I agree that I have read & accept the</label>
                          <a href='/'>Terms & Conditions</a>
                      </div>
                  </div>
                  <div className="sub-formgrp">
                    <button type="submit" className="btn-bg btn btn-primary btn-otp">Recieve OTP</button>
                  </div>
              </div> 
   
    </>
  )
}

export default Form