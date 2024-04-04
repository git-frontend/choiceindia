import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Select from 'react-dropdown-select';
import "./lead-form.scss"


function LeadForm() {
  return (
    <>
    <section className='lead-form-main'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className='radio-form-section'>
               <div className='form-card'>
                  <p>You are :</p>
                  <div className='radio-btn-sec'>
                    <Form.Check type="radio" name='group1' label="Customer" aria-label="Customer" id='1'/>
                    <Form.Check type="radio" name='group1' label="EPC" aria-label="EPC" id='2'/>
                    <Form.Check type="radio" name='group1' label="Manufacturer/OEM" aria-label="Manufacturer/OEM" id='3'/>
                  </div>
               </div>
            </div>
            <div className='form-section'>
                <div className='left-form-sec'> 
                    <FloatingLabel controlId="floatingNameofEntity" label="Name of Entity" className='input-label'>
                      <Form.Control type="text" placeholder="Name of Entity" className='input-field'/>
                    </FloatingLabel>
                    <Select placeholder='Entity Type *' className="input-field formselect" searchable={true} options="" labelField="stateName" valueField="stateName"  value="" style={{ 'fontSize': 'large' }} />
                    {/* <Form.Select aria-label="Default select example" className='input-field formselect'>
                      <option>Entity Type <span className='mandate-icon'>*</span></option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select> */}
                    <FloatingLabel controlId="floatingNameofEntity" label="Contact Person" className='input-label'>
                      <Form.Control type="text" placeholder="Contact Person" className='input-field'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingNameofEntity" label="Mobile No/WhatsApp No" className='input-label'>
                      <Form.Control type="text" placeholder="Mobile No/WhatsApp No" className='input-field'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingNameofEntity" label="Mail ID" className='input-label'>
                      <Form.Control type="text" placeholder="Mail ID" className='input-field'/>
                    </FloatingLabel>
                      <div key="inline-checkbox" className="cust-checkbox">
                          <Form.Check inline name="terms_and_conditions" type="checkbox">
                              <Form.Check.Input type="checkbox" />
                              <Form.Check.Label>I agree that I have read &amp; accept <a className="link-tc">
                                <span>Terms & Conditions</span></a>
                              </Form.Check.Label>
                          </Form.Check>
                      </div>
                      <div className='btn-submit-sec'>
                          <button type="submit" class="btn-bg btn-bg-dark btnsubmit">Submit</button>
                      </div>
                </div>
                <div className='right-form-sec'> 
                    <FloatingLabel controlId="floatingNameofEntity" label="Business Address" className='input-label'>
                      <Form.Control type="text" placeholder="Business Address" className='input-field'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingNameofEntity" label="Residence Address" className='input-label mandate-none'>
                      <Form.Control type="text" placeholder="Residence Address" className='input-field'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingNameofEntity" label="Sales Turnover of latest FY (Rs In Lakh)" className='input-label mandate-none'>
                      <Form.Control type="text" placeholder="Sales Turnover of latest FY (Rs In Lakh)" className='input-field'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingNameofEntity" label="Installed capacity of Latest FY (KW/MW)" className='input-label mandate-none'>
                      <Form.Control type="text" placeholder="Installed capacity of Latest FY (KW/MW)" className='input-field'/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Dealing with Manufacturers/Brands" className='textarea-label'>
                      <Form.Control
                      className='input-field textarea'
                        as="textarea"
                        placeholder="Dealing with Manufacturers/Brands"
                        style={{ height: '150px' }}
                      />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Write your message">
                      <Form.Control
                      className='input-field'
                        as="textarea"
                        placeholder="Write your message"
                        style={{ height: '200px' }}
                      />
                    </FloatingLabel>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default LeadForm