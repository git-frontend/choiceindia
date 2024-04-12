import React,{useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Select from 'react-dropdown-select';
import {useForm, Controller} from 'react-hook-form';
import "./lead-form.scss"
import '../Assistedflow/assistedflow.scss';

function LeadForm() {

  // const options = [
  //   {label: "Individual", value: 1},
  //   {label: "Proprietorship", value: 2},
  //   {label: "Partnership", value: 3},
  //   {label: "LLP", value: 4},
  //   {label: "HUF", value: 5},
  //   {label: "Company", value: 6}
  // ]

  const [options, setOptions] = useState([
    {label: "Individual", value: 1},
    {label: "Proprietorship", value: 2},
    {label: "Partnership", value: 3},
    {label: "LLP", value: 4},
    {label: "HUF", value: 5},
    {label: "Company", value: 6}
  ])
 
   const [entityType,setEntityType]=useState("Entity Type");
   const [show,setShow]=useState(true);
  
   const [formType,setFormType]=useState(1);
   const [error,setError]=useState(false);
   const [loading,setLoading]=useState(false);

   const {register,reset,handleSubmit, control, getValues,watch,
  formState:{errors}}=useForm({mode:'onChange'});
 
 function numberHandler(e){
  e.target.value = e.target.value.replace(/[^0-9]/gi,"");
 }

 const numericHandler=(e)=>{
  e.target.value=e.target.value.replace(/[^0-9.]/gi,"");
  }

  const CustomerFormHandler=(data)=>{
  let payload={
  form_type:'regular',
  name:data.name,
  pincode:data.pincode,
  mo_num:data.mobile_num,
  email:data.mail,
  e_bill:data.bill,
  sqft:data.Roof_Space,
  address:data.address,
  capacity:data.solar_plant_capacity,
  comment:data.message,
  is_terms_accepted:data.terms_and_conditions
  }
  reset();
  setLoading(true);
  console.log(data);
  console.log("Payload",payload);
  }

  const submitHandler=(data)=>{
  if(!watch("entityType")?.length){
  setError(true);
  return;
  }
  setError(false);
  setShow(true);
  setEntityType("Entity Type");
  let payload={
  form_type:'epc',
  name:data.entityName,
  entityType:data.entityType[0].value,
  c_person:data.contact_person,
  email:data.mail,
  b_address:data.business_address,
  r_address:data.residence_address,
  turnover:data.sales_turnover,
  capacity:data.Installed_capacity,
  mo_num:data.mobile_number,
  dealings:data.dealing_with_brands,
  comment:data.message,
  is_terms_accepted:data.terms_and_conditions
  }
  setLoading(true);
  console.log(payload);
  reset();
  }


  const OEMHandler=(data)=>{
  reset();
  setLoading(true);
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
                        <input name="form_type" value="1" id="radio1" type="radio" defaultChecked onClick={()=>{setFormType(1)
                        reset()}}/>
                        <label htmlFor="radio1">Customer</label>
                      </div>
                      <div className="rdio"> 
                        <input name="form_type" value="2" id="radio2" type="radio" onClick={()=>{setFormType(2)
                        reset()}}/>
                        <label htmlFor="radio2">EPC</label>
                      </div>
                      <div className="rdio">
                        <input name="form_type" value="oem" id="radio3" type="radio" onClick={()=>{setFormType(3)
                        reset()}} {...register("form_type")}/>
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
                       <Form.Control type="text" placeholder="Name" className='input-field' maxLength="100" name="name" {...register("name",{
                      'required':true, minLength: 3, pattern: /^[a-zA-z]+([\s][a-zA-Z]+)*$/
                       })}
                       onInput={(e)=>e.target.value=e.target.value.replace(/[^a-zA-Z ]/gi,"")}/>
                      {errors.name?.type=="required" ? <span style={{color:"red"}}>This field is required</span>:
                      errors.name?.type=="pattern" ? <span style={{color:"red"}}>Please provide valid name</span>:
                      errors.name?.type=="minLength" ? <span style={{color:"red"}}>Name must contains at least 3 characters</span>:
                       ""} 
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingpinCode" label="Pin Code" className='input-label'>
                       <Form.Control type="text" placeholder="pin code" name="pincode" maxLength="6" className='input-field' {...register("pincode",
                       {
                        'required':true,maxLength:6,minLength:6,pattern:/[1-9][0-9]{5}/
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
                       <Form.Control type="text" placeholder="Mobile No/WhatsApp No" className='input-field' name="mobile_num" maxLength="10"
                       {...register("mobile_num",{
                       'required':true,pattern:/[6-9][0-9]{9}/
                       })} onInput={numberHandler}/>
                        {errors.mobile_num?.type==="required" ? <span style={{color:"red"}}>This field is required</span>:
                       errors.mobile_num?.type==="pattern" ? <span style={{color:"red"}}>Please enter valid mobile number</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
 
                 <FloatingLabel controlId="floatingNameofEntity" label="Monthly Electricity Bill (Rs.)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Monthly Electricity Bill (Rs.)" maxLength="20"
                        className='input-field' name="bill" {...register("bill",
                       {pattern:/^[1-9]{1}\d+(\.\d{1,2})?$/})}
                        onInput={numericHandler}/>
                       {errors.bill?.type==="pattern" ?  <span style={{color:"red"}}>Please enter valid electricity bill</span>
                       :
                       " "}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mail ID" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Mail ID" className='input-field' name="mail" {...register("mail",
                       {pattern:/^[a-zA-Z]{1}[A-Za-z0-9._%+-]{1,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/})}/>
                       {errors.mail?.type==="pattern" ?<span style={{color:"red"}}>Please enter valid email ID</span> :
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Roof Space Available for Solar Installation (Sqft)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Roof Space Available for Solar Installation (Sqft)" className='input-field' name="Roof_Space" {...register("Roof_Space",{
                        pattern:/^(^[1-9]{1}[0-9]*)+(\.\d{1,2})?$/
                       })}
                       onInput={numericHandler}
                       maxLength={20}/>
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
                        {pattern:/^(^[1-9]{1}[0-9]*)+(\.\d{1,2})?$/})}
                        onInput={numericHandler}
                        maxLength={20}/>
                       {errors.solar_plant_capacity?.type==="pattern" ? 
                       <span style={{"color":"red"}}>Please enter valid solar plant capacity</span> :
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
                           <button type="submit" className="btn-bg btn-bg-dark btnsubmit" disabled={loading}>{loading ? <div className='loaderB mx-auto'></div>
                            : "Submit"}</button>
                       </div>
                 </div>
             </form>:
             formType===2?
             <form className='form-section' onSubmit={handleSubmit(submitHandler)}>
             <div className='dis-flex'>
                 <div className='flex-items'>
                    <FloatingLabel controlId="floatingNameofEntity" label="Name of Entity" className='input-label'>
                       <Form.Control type="text" placeholder="Name of Entity" className='input-field' name="entityName" 
                       {...register("entityName",
                       {"required":true,
                       pattern:/^[a-zA-z]+([\s][a-zA-Z]+)*$/})}
                       onInput={(e)=>e.target.value=e.target.value.replace(/[^a-zA-Z ]/gi,"")}
                       maxLength={100}/>
                       <Form.Control.Feedback type="invalid">Please provide a Name of Entity</Form.Control.Feedback>
                       {errors.entityName?.type==="required" ? <span style={{color:"red"}}>Please provide a Name of Entity</span>:
                        errors.entityName?.type==="pattern"? <span style={{color:"red"}}>Please enter valid entity name</span> :
                        ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Business Address" className='input-label'>
                       <Form.Control type="text" placeholder="Business Address" name="business_address" className='input-field' 
                       {...register("business_address",
                        {
                        "required":true
                        })}/>
                       {errors.business_address && <span style={{color:"red"}}>Please enter the business address</span>}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel  controlId="floatingNameofEntity" label={!watch('entityType')?.length && entityType} className={!watch('entityType')?.length ? 'input-label selectdropdown':'selectdropdown'}>
                         <Controller name="entityType"  control={control} render={({ field: {onChange, value}}) => {
                          return (
                           <Select placeholder={false} className="input-field formselect" searchable={false} options={options}  style={{ 'fontSize': 'large' }} 
                              onChange={(v) =>{
                              onChange(v)
                              // setEntityType("")
                              // setShow(false)
                              // setValue(v[0].value)
                            }
                            }
                            values={watch('entityType')}
                              />
  )}}></Controller>
                         {error && !watch('entityType')?.length && <span style={{color:"red"}}>Please select entity type</span>}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Residence Address" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Residence Address" className='input-field' name="residence_address"
                       {...register("residence_address")}/>
                      
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Contact Person" className='input-label'>
                       <Form.Control type="text" placeholder="Contact Person" className='input-field' name="contact_person"
                       {...register("contact_person",
                       {
                       "required":true,
                       minLength:3,
                       pattern:/^[a-zA-z]+([\s][a-zA-Z]+)*$/
                       })}
                       onInput={(e)=>e.target.value=e.target.value.replace(/[^a-zA-Z ]/gi,"")}
                       maxLength={100}/>
                       {errors.contact_person?.type==="required" ?
                       <span style={{color:"red"}}>Please provide contact person name</span>
                       :
                       errors.contact_person?.type==="minLength" ?
                       <span style={{color:"red"}}>Name must contains at least 3 characters</span> :
                       errors.contact_person?.type==="pattern" ?
                       <span style={{color:"red"}}>Please enter valid contact person name</span>:
                       " "}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
 
                 <FloatingLabel controlId="floatingNameofEntity" label="Sales Turnover of latest FY (Rs In Lakh)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Sales Turnover of latest FY (Rs In Lakh)" maxLength={7}
                       className='input-field' name="sales_turnover"
                       {...register("sales_turnover",
                       {"pattern":/^(^[1-9]{1}[0-9]*)+(\.\d{1,2})?$/})}
                        onInput={numericHandler}/>
                       {errors.sales_turnover?.type==="pattern" ? <span style={{color:"red"}}>Please provide correct Sales Turover
                         value</span>:
                        ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mobile No/WhatsApp No" className='input-label'>
                       <Form.Control type="text" placeholder="Mobile No/WhatsApp No" className='input-field'
                        maxLength={10} name="mobile_number" 
                       {...register("mobile_number",
                       {
                        'required':true,pattern:/[6-9][0-9]{9}/
                        })}
                        onInput={numberHandler}/>
                        {errors.mobile_number?.type==="required" ? <span style={{color:"red"}}>This field is required</span>:
                       errors.mobile_number?.type==="pattern" ? <span style={{color:"red"}}>Please enter valid mobile number</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Installed capacity of Latest FY (KW/MW)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Installed capacity of Latest FY (KW/MW)" className='input-field'
                       name="Installed_capacity"
                       {...register("Installed_capacity",
                       {pattern:/(^[1-9]{1}[0-9]*)+(\.\d{1,2})?$/})}
                       onInput={numericHandler}
                       maxLength={70}/>
                      {errors.Installed_capacity?.type==="pattern" ? <span style={{"color":"red"}}>Please provide valid Installed 
                      Capacity</span>:
                        ""} 
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mail ID" className='input-label'>
                       <Form.Control type="text" placeholder="Mail ID" className='input-field' name="mail"
                       {...register("mail",
                       {required:true,
                       pattern:/^[a-zA-Z]{1}[A-Za-z0-9._%+-]{1,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/})}/>
                       {errors.mail?.type==="required" ? <span style={{color:"red"}}>This field is required</span>:
                       errors.mail?.type==="pattern" ? <span style={{color:"red"}}>Please provide valid email ID</span> :
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingTextarea2" label="Dealing with Manufacturers/Brands" className='textarea-label'>
                       <Form.Control
                       className='input-field textarea height-auto'
                         as="textarea"
                         placeholder="Dealing with Manufacturers/Brands"
                         name="dealing_with_brands"
                         {...register("dealing_with_brands",
                        {pattern:/^[a-zA-z]+([\,][a-zA-Z]+)*$/})}
                        onInput={(e)=>e.target.value=e.target.value.replace(/[^a-zA-Z,]/gi,"")}
                       />
                       {errors.dealing_with_brands?.type==="pattern" && 
                       <span style={{color:"red"}}>Please provide valid brand names</span>}
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
                       <Form.Check inline type="checkbox">
                               <Form.Check.Input type="checkbox" name="terms_and_conditions" {...register("terms_and_conditions",
                              {
                                required: "It is mandatory to check"
                             })}/>
                               <Form.Check.Label>I agree that I have read &amp; accept <a className="link-tc">
                                 <span>Terms & Conditions</span></a>
                               </Form.Check.Label>
                           </Form.Check>
                           {<span style={{"color":"red"}}>{errors.terms_and_conditions && errors.terms_and_conditions.message}</span>}
                       </div>
                       <div className='btn-submit-sec'>
                       <button type="submit" className="btn-bg btn-bg-dark btnsubmit" disabled={loading}>{loading ? <div className='loaderB mx-auto'></div>
                            : "Submit"}</button>
                       </div>
                 </div>
             </form>
             :
             formType==3 && 
             <form className='form-section' onSubmit={handleSubmit(OEMHandler)}>
             <div className='dis-flex'>
                 <div className='flex-items'>
                    <FloatingLabel controlId="floatingName" label="Entity Name" className='input-label'>
                       <Form.Control type="text" placeholder="Entity Name" className='input-field' name="name" 
                       {...register("name",{"required":true,
                       pattern: /^[a-zA-z]+([\s][a-zA-Z]+)*$/})}/>
                       {errors.name?.type==="required" ? <span style={{color:"red"}}>Please provide the entity name</span>:
                       errors.name?.type==="pattern" ? <span style={{color:"red"}}>Please provide valid entity name</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingpinCode" label="Sales Turnover (Cr)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Sales Turnover (Cr)" name="turn_over" className='input-field' 
                       onInput={numericHandler}
                       {...register("turn_over",{
                       "pattern":/^(^[1-9]{1}[0-9]*)+(\.\d{1,2})?$/
                       })}
                       maxLength={8}/>
                       {errors.turn_over ? <span style={{color:"red"}}>Please provide valid Sales Turnover</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Brand Name" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Brand Name" className='input-field' name="brand_name" 
                       {...register("brand_name",
                       {pattern:/^[a-zA-z]*$/})}/>
                       {errors.brandName ? <span style={{color:"red"}}>Please provide valid Brand Name</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="No of Dealers/EPC" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="No of Dealers/EPC" className='input-field' name="epc" 
                       {...register("epc",
                       {"pattern":/^[1-9]+([0-9]*)$/})}
                       maxLength={5}
                       onInput={numberHandler}/>
                       {errors.epc ? <span style={{color:"red"}}>Please provide valid No. of Dealers</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Website" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Website" className='input-field' name="website" {...register("website")}/>
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mail ID" className='input-label'>
                       <Form.Control type="text" placeholder="Mail ID" className='input-field' name="email" 
                       {...register("email",
                       {"required":true,
                       pattern:/^[a-zA-Z]{1}[A-Za-z0-9._%+-]{1,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/})}/>
                        {errors.email?.type==="pattern" ?<span style={{color:"red"}}>Please enter valid email ID</span> :
                        errors.email?.type==="required" ?<span style={{color:"red"}}>Please provide the email ID</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Contact Person" className='input-label'>
                       <Form.Control type="text" placeholder="Contact Person" className='input-field' name="contact_person" 
                       {...register("contact_person",
                      {"required":true,
                       pattern:/^[a-zA-z]+([\s][a-zA-Z]+)*$/} )}
                       maxLength={100}/>
                      {errors.contact_person?.type==="required" ? <span style={{color:"red"}}>Please provide the contact person name</span>:
                       errors.contact_person?.type==="pattern"? <span style={{color:"red"}}>Please enter valid contact person name</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Business Address" className='input-label'>
                       <Form.Control type="text" placeholder="Business Address" className='input-field' name="b_address" 
                       {...register("b_address",
                       {"required":true})}/>
                       {errors.b_address? <span style={{color:"red"}}>Please provide the business address</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mobile No/WhatsApp No" className='input-label'>
                       <Form.Control type="text" placeholder="Mobile No/WhatsApp No" className='input-field' name="mo_num" 
                       maxLength={10}
                       {...register("mo_num",
                       {
                        'required':true,pattern:/[6-9][0-9]{9}/
                        })}
                        onInput={numberHandler}/>
                         {errors.mo_num?.type==="required" ? <span style={{color:"red"}}>This field is required</span>:
                       errors.mo_num?.type==="pattern" ? <span style={{color:"red"}}>Please enter valid mobile number</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Production capacity in MW" className='input-label'>
                       <Form.Control type="text" placeholder="Production capacity in MW" className='input-field' name="capacity" 
                       {...register("capacity",
                       {"required":true,
                       pattern:/^(^[1-9]{1}[0-9]*)+(\.\d{1,2})?$/})}
                       maxLength={20}
                       onInput={numericHandler}
                       />
                       {errors.capacity?.type==="required" ? <span style={{"color":"red"}}>Please enter Production Capacity</span> :
                        errors.capacity?.type==="pattern"?<span style={{"color":"red"}}>Please provide valid Production Capacity</span>:
                        ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingTextarea2" label="Write your message" className='textarea-label'>
                       <Form.Control
                       className='input-field textarea'
                         as="textarea"
                         placeholder="Write your message"
                         name="comment"
                         {...register("comment")}
                       />
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
             </div>
                 <div className='col-md-12'> 
                       <div key="inline-checkbox" className="cust-checkbox">
                           <Form.Check inline type="checkbox">
                               <Form.Check.Input type="checkbox" name="is_terms_accepted" {...register("is_terms_accepted",
                              {
                                required: "It is mandatory to check"
                             })}/>
                               <Form.Check.Label>I agree that I have read &amp; accept <a className="link-tc">
                                 <span>Terms & Conditions</span></a>
                               </Form.Check.Label>
                           </Form.Check>
                           {<span style={{"color":"red"}}>{errors.is_terms_accepted && errors.is_terms_accepted.message}</span>}
                       </div>
                       <div className='btn-submit-sec'>
                       <button type="submit" className="btn-bg btn-bg-dark btnsubmit" disabled={loading}>{loading ? <div className='loaderB mx-auto'></div>
                            : "Submit"}</button>
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