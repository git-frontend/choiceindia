import React from 'react'
import Form from 'react-bootstrap/Form';
function FixedForm() {

  return (
    <>
    <section className='fixed-form'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
                <div className='form-section'>
                  <div className='form-items'>
                    <div className='shape-yellow'>
                      <div className='cross-border'></div>
                        <h6>Open a Free Demat Account with <br/> Free 1st Year AMC</h6>
                    </div>
                  </div>
                  <div className='form-items check-text-box'>
                      <div className='form-grp'>
                        <input type="text" className='form-control' placeholder='Enter Mobile Number'/>
                      </div>
                      <div className='form-grp2'>
                        <input type="text" className='form-control' placeholder='Referral Code (Optional)'/>
                      </div>
                      <div key="inline-checkbox" className="sub-formgrp cust-checkbox">
                          <Form.Check
                              inline
                              name="terms_and_conditions"
                              type="checkbox"
                              id="terms_and_conditions"
                          >
                            <Form.Check.Input type="checkbox" checked readOnly />
                              <Form.Check.Label>I agree &amp; <br/> accept <a><span className="link-tc">T&C</span></a></Form.Check.Label>
                          </Form.Check>
                      </div>
                  </div>
                  <div className='form-items'>
                    <a href="" className='btn-bg'>Open Free Account</a>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>
    </>
  )
}

export default FixedForm