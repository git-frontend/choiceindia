import React from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Select from 'react-dropdown-select';
import "./lead-form.scss"


function LeadForm() {

  const options = [
    {label: "Individual", value: 1},
    {label: "Proprietorship", value: 2},
    {label: "Partnership", value: 3},
    {label: "LLP", value: 4},
    {label: "HUF", value: 5},
    {label: "Company", value: 6}
  ]


  
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
                      <div className="rdio"> 
                        <input name="radio" value="1" id="radio1" type="radio" defaultChecked/>
                        <label htmlFor="radio1">Customer</label>
                      </div>
                      <div className="rdio"> 
                        <input name="radio" value="2" id="radio2" type="radio" defaultChecked/>
                        <label htmlFor="radio2">EPC</label>
                      </div>
                      <div className="rdio">
                        <input name="radio" value="3" id="radio3" type="radio"/>
                        <label htmlFor="radio3">Manufacturer/OEM</label>
                      </div>
                    </div>
               </div>
            </div>
            <div className='form-section'>
            <div className='dis-flex'>
                <div className='flex-items'>
                   <FloatingLabel controlId="floatingNameofEntity" label="Name of Entity" className='input-label'>
                      <Form.Control type="text" placeholder="Name of Entity" className='input-field'/>
                    </FloatingLabel>
                </div>
                <div className='flex-items'>
                <FloatingLabel controlId="floatingNameofEntity" label="Business Address" className='input-label'>
                      <Form.Control type="text" placeholder="Business Address" className='input-field'/>
                    </FloatingLabel>
                </div>
                <div className='flex-items'>
                <FloatingLabel controlId="floatingNameofEntity" label="Entity Type" className='input-label'>
                      <Select placeholder={false} className="input-field formselect" searchable={false} options={options} value="Proprietorship" style={{ 'fontSize': 'large' }} />
                      
                    </FloatingLabel>
                </div>
                <div className='flex-items'>
                <FloatingLabel controlId="floatingNameofEntity" label="Residence Address" className='input-label mandate-none'>
                      <Form.Control type="text" placeholder="Residence Address" className='input-field'/>
                    </FloatingLabel>
                </div>
                <div className='flex-items'>
                <FloatingLabel controlId="floatingNameofEntity" label="Contact Person" className='input-label'>
                      <Form.Control type="text" placeholder="Contact Person" className='input-field'/>
                    </FloatingLabel>
                </div>
                <div className='flex-items'>

                <FloatingLabel controlId="floatingNameofEntity" label="Sales Turnover of latest FY (Rs In Lakh)" className='input-label mandate-none'>
                      <Form.Control type="text" placeholder="Sales Turnover of latest FY (Rs In Lakh)" className='input-field'/>
                    </FloatingLabel>
                </div>
                <div className='flex-items'>
                <FloatingLabel controlId="floatingNameofEntity" label="Mobile No/WhatsApp No" className='input-label'>
                      <Form.Control type="text" placeholder="Mobile No/WhatsApp No" className='input-field'/>
                    </FloatingLabel>
                </div>
                <div className='flex-items'>
                <FloatingLabel controlId="floatingNameofEntity" label="Installed capacity of Latest FY (KW/MW)" className='input-label mandate-none'>
                      <Form.Control type="text" placeholder="Installed capacity of Latest FY (KW/MW)" className='input-field'/>
                    </FloatingLabel>
                </div>
                <div className='flex-items'>
                <FloatingLabel controlId="floatingNameofEntity" label="Mail ID" className='input-label'>
                      <Form.Control type="text" placeholder="Mail ID" className='input-field'/>
                    </FloatingLabel>
                </div>
                <div className='flex-items'>
                <FloatingLabel controlId="floatingTextarea2" label="Dealing with Manufacturers/Brands" className='textarea-label'>
                      <Form.Control
                      className='input-field textarea'
                        as="textarea"
                        placeholder="Dealing with Manufacturers/Brands"
                        // style={{ height: '150px' }}
                      />
                    </FloatingLabel>
                </div>
                <div className='flex-items'>
                <FloatingLabel controlId="floatingTextarea2" label="Write your message" className='textarea-label'>
                      <Form.Control
                      className='input-field'
                        as="textarea"
                        placeholder="Write your message"
                        style={{ height: '150px' }}
                      />
                    </FloatingLabel>
                </div>
            </div>
                <div className='col-md-12'> 
                      <div key="inline-checkbox" className="cust-checkbox">
                          <Form.Check inline name="terms_and_conditions" type="checkbox">
                              <Form.Check.Input type="checkbox" />
                              <Form.Check.Label>I agree that I have read &amp; accept <a className="link-tc">
                                <span>Terms & Conditions</span></a>
                              </Form.Check.Label>
                          </Form.Check>
                      </div>
                      <div className='btn-submit-sec'>
                          <button type="submit" className="btn-bg btn-bg-dark btnsubmit">Submit</button>
                      </div>
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