import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Select from 'react-dropdown-select';
import {useForm} from 'react-hook-form';
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
  
   const [formType,setFormType]=useState(1);


   const {register,reset,handleSubmit,
  formState:{errors}}=useForm({mode:'onChange'});

 console.log("Error",errors);
 
 function numberHandler(e){
  e.target.value = e.target.value.replace(/[^0-9]/gi,"");
 }

  const CustomerFormHandler=(data)=>{
  console.log(data);
  }

  const submitHandler=(data)=>{
  console.log(data);
  }
  
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
                        <input name="radio" value="1" id="radio1" type="radio" defaultChecked onClick={()=>{setFormType(1)
                        reset()}}/>
                        <label htmlFor="radio1">Customer</label>
                      </div>
                      <div className="rdio"> 
                        <input name="radio" value="2" id="radio2" type="radio" onClick={()=>{setFormType(2)
                        reset()}}/>
                        <label htmlFor="radio2">EPC</label>
                      </div>
                      <div className="rdio">
                        <input name="radio" value="3" id="radio3" type="radio" onClick={()=>{setFormType(3)
                        reset()}}/>
                        <label htmlFor="radio3">Manufacturer/OEM</label>
                      </div>
                    </div>
               </div>
            </div>
            {formType==1?
              <form className='form-section' onSubmit={handleSubmit(CustomerFormHandler)} noValidate>
             <div className='dis-flex'>
                 <div className='flex-items'>
                    <FloatingLabel controlId="floatingName" label="Name" className='input-label'>
                       <Form.Control type="text" placeholder="Name" className='input-field' name="name" {...register("name",{
                      'required':true, minLength: 3, pattern: /^[A-Za-z-\s]*$/
                       })}/>
                      {errors.name?.type=="required" ? <span style={{color:"red"}}>This field is required</span>:
                      errors.name?.type=="pattern" ? <span style={{color:"red"}}>Name cannot contains numbers,special characters</span>:
                      errors.name?.type=="minLength" ? <span style={{color:"red"}}>Name must contains at least 3 characters</span>:
                       ""} 
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingpinCode" label="Pin Code" className='input-label'>
                       <Form.Control type="text" placeholder="pin code" name="pincode" className='input-field' {...register("pincode",
                       {
                        'required':true,maxLength:6,minLength:6,pattern:/[0-9]{6}/
                       })} onInput={numberHandler}/>
                       {errors.pincode?.type==="required" ? <span style={{color:"red"}}>This field is required</span>:
                       errors.pincode?.type==="pattern" ? <span style={{color:"red"}}>Please enter correct pincode</span>:
                       errors.pincode?.type==="maxLength"? <span style={{color:"red"}}>Invalid Pincode</span>:
                       errors.pincode?.type==="minLength"? <span style={{color:"red"}}>Pincode must contains 6 digits</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mobile No/WhatsApp No" className='input-label'>
                       <Form.Control type="text" placeholder="Mobile No/WhatsApp No" className='input-field' name="mobile_num" {...register("mobile_num",{
                       'required':true,pattern:/[6-9][0-9]{9}/
                       })} onInput={numberHandler}/>
                        {errors.mobile_num?.type==="required" ? <span style={{color:"red"}}>This field is required</span>:
                       errors.mobile_num?.type==="pattern" ? <span style={{color:"red"}}>Please enter valid mobile number</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
 
                 <FloatingLabel controlId="floatingNameofEntity" label="Monthly Electricity Bill (Rs.)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Monthly Electricity Bill (Rs.)" className='input-field' name="bill" {...register("bill",
                       {pattern:/^\d+(\.\d{1,2})?$/})}/>
                       {errors.bill?.type==="pattern" ?  <span style={{color:"red"}}>Please enter valid electricity bill</span>
                       :
                       " "}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mail ID" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Mail ID" className='input-field' name="mail" {...register("mail",
                       {pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/})}/>
                       {errors.mail?.type==="pattern" ?<span style={{color:"red"}}>Please enter valid email ID</span> :
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Roof Space Available for Solar Installation (Sqft)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Roof Space Available for Solar Installation (Sqft)" className='input-field' name="Roof_Space" {...register("Roof_Space",{
                        pattern:/^\d+(\.\d{1,2})?$/
                       })}/>
                      {errors.Roof_Space?.type==="pattern"? <span style={{color:"red"}}>Please enter valid Roof Space Available for Solar Installation (Sqft)</span> :
                      ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Address" className='input-label'>
                       <Form.Control type="text" placeholder="Address" className='input-field' name="address" {...register("address",
                       {"required":true})}/>
                       {errors.address?.type==="required" ? <span style={{"color":"red"}}>This is field is required</span> :
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Solar Plant Capacity Requirement (KW)" className='input-label'>
                       <Form.Control type="text" placeholder="Solar Plant Capacity Requirement (KW)" className='input-field' name="solar_plant_capacity"
                        {...register("solar_plant_capacity",
                        {"required":true,pattern:/^\d+(\.\d{1,2})?$/})}/>
                       {errors.solar_plant_capacity?.type==="required" ?
                       <span style={{"color":"red"}}>This is field is required</span>:
                       errors.solar_plant_capacity?.type==="pattern" ? <span style={{"color":"red"}}>Please enter valid solar plant capacity</span> :
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingTextarea2" label="Write your message" className='textarea-label'>
                       <Form.Control
                       className='input-field textarea'
                         as="textarea"
                         placeholder="Write your message"
                         name="message"
                         {...register("message")}
                       />
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
             </div>
                 <div className='col-md-12'> 
                       <div key="inline-checkbox" className="cust-checkbox">
                           <Form.Check inline name="terms_and_conditions" type="checkbox" >
                               <Form.Check.Input type="checkbox" name="terms_and_conditions" {...register("terms_and_conditions",
                            {
                              required: "It is mandatory to check"
                           })}/>
                               <Form.Check.Label>I agree that I have read &amp; accept <a className="link-tc">
                                 <span>Terms & Conditions</span></a>
                               </Form.Check.Label>
                           </Form.Check>
                           {(errors.terms_and_conditions ?  <span style={{color:"red"}}>{errors.terms_and_conditions.message}</span>:
                           "")}
                       </div>
                       <div className='btn-submit-sec'>
                           <button type="submit" className="btn-bg btn-bg-dark btnsubmit">Submit</button>
                       </div>
                 </div>
             </form>:
             formType===2?
             <form className='form-section' onSubmit={handleSubmit(submitHandler)}>
             <div className='dis-flex'>
                 <div className='flex-items'>
                    <FloatingLabel controlId="floatingNameofEntity" label="Name of Entity" className='input-label'>
                       <Form.Control type="text" placeholder="Name of Entity" className='input-field' name="entityName" {...register("entityName",
                       {type:"required"})}/>
                       <Form.Control.Feedback type="invalid">Please provide a Name of Entity</Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Business Address" className='input-label'>
                       <Form.Control type="text" placeholder="Business Address" name="business-address" className='input-field' {...register("business-address")}/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Entity Type" className='input-label'>
                       <Select placeholder={false} className="input-field formselect" searchable={false} options={options} value="Proprietorship" style={{ 'fontSize': 'large' }} name="entityType" {...register("entityType")}/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Residence Address" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Residence Address" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Contact Person" className='input-label'>
                       <Form.Control type="text" placeholder="Contact Person" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
 
                 <FloatingLabel controlId="floatingNameofEntity" label="Sales Turnover of latest FY (Rs In Lakh)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Sales Turnover of latest FY (Rs In Lakh)" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mobile No/WhatsApp No" className='input-label'>
                       <Form.Control type="text" placeholder="Mobile No/WhatsApp No" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Installed capacity of Latest FY (KW/MW)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Installed capacity of Latest FY (KW/MW)" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mail ID" className='input-label'>
                       <Form.Control type="text" placeholder="Mail ID" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingTextarea2" label="Dealing with Manufacturers/Brands" className='textarea-label'>
                       <Form.Control
                       className='input-field textarea height-auto'
                         as="textarea"
                         placeholder="Dealing with Manufacturers/Brands"
                       
                       />
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingTextarea2" label="Write your message" className='textarea-label'>
                       <Form.Control
                       className='input-field textarea'
                         as="textarea"
                         placeholder="Write your message"
                       />
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
             </div>
                 <div className='col-md-12'> 
                       <div key="inline-checkbox" className="cust-checkbox">
                           <Form.Check inline name="terms_and_conditions" type="checkbox">
                               <Form.Check.Input type="checkbox" name="terms_conditions" {...register("terms_conditions")} />
                               <Form.Check.Label>I agree that I have read &amp; accept <a className="link-tc">
                                 <span>Terms & Conditions</span></a>
                               </Form.Check.Label>
                           </Form.Check>
                       </div>
                       <div className='btn-submit-sec'>
                           <button type="submit" className="btn-bg btn-bg-dark btnsubmit">Submit</button>
                       </div>
                 </div>
             </form>
             :
             formType==3 && 
             <form className='form-section' onSubmit={handleSubmit(submitHandler)}>
             <div className='dis-flex'>
                 <div className='flex-items'>
                    <FloatingLabel controlId="floatingName" label="Entity Name" className='input-label'>
                       <Form.Control type="text" placeholder="Entity Name" className='input-field' name="Entity-Name" {...register("name")}/>
                       <Form.Control.Feedback type="invalid">Please provide a Name of Entity</Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingpinCode" label="Sales Turnover (Cr)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Sales Turnover (Cr)" name="pin-code" className='input-field' {...register("pin-code")}/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Brand Name" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Brand Name" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="No of Dealers/EPC" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="No of Dealers/EPC" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Website" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Website" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mail ID" className='input-label'>
                       <Form.Control type="text" placeholder="Mail ID" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Contact Person" className='input-label'>
                       <Form.Control type="text" placeholder="Contact Person" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Business Address" className='input-label'>
                       <Form.Control type="text" placeholder="Business Address" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mobile No/WhatsApp No" className='input-label'>
                       <Form.Control type="text" placeholder="Mobile No/WhatsApp No" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Production capacity in MW" className='input-label'>
                       <Form.Control type="text" placeholder="Production capacity in MW" className='input-field'/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingTextarea2" label="Write your message" className='textarea-label'>
                       <Form.Control
                       className='input-field textarea'
                         as="textarea"
                         placeholder="Write your message"
                       />
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
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
             </form>}
   
          </div>
        </div>
      </div>
    </section>


    </>
  )
}

export default LeadForm