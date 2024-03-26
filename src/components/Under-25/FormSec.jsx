import React from 'react'

function FormSec() {
  return (
    <>
      <section className='form-section'>
        <div className='container'>
          <div className='form-ban'>
              <div className='form-card'>
                  <div className='card-heading'>
                    <h5>Open your free trading account</h5>
                    <p>Take Control of Your Finances</p>
                  </div>
                  <div className='input-field'>
                      <input className='form-control' placeholder='Mobile Number'/>
                  </div>
                  <div className='input-checkbox'>
                      <input type="checkbox"/>
                      <div className='form-label'>
                          <label>I agree that I have read & accept the</label>
                          <a href='/'>Terms & Conditions</a>
                      </div>
                  </div>
                  <div class="sub-formgrp">
                    <button type="submit" class="btn-bg btn btn-primary btn-otp">Recieve OTP</button>
                  </div>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FormSec