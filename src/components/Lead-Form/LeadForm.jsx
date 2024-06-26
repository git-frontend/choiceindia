import React,{useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Select from 'react-dropdown-select';
import {useForm, Controller} from 'react-hook-form';
import leadService from '../../Services/LeadFormService'
import '../Assistedflow/assistedflow.scss';
import "./lead-form.scss"
import thumbsup from '../../assets/images/demat-images/thumbsup.gif';
import LazyLoader from "../Common-features/LazyLoader";
import "../Common-features/newdemat-form.scss"
import {toast} from 'react-toastify';
import rest from '../../Services/rest';
function LeadForm() {

  
  const [options, setOptions] = useState([
    {label: "Individual", value: 1},
    {label: "Proprietorship", value: 2},
    {label: "Partnership", value: 3},
    {label: "LLP", value: 4},
    {label: "HUF", value: 5},
    {label: "Company", value: 6}
  ])


   const [toc,setToc]=useState(false);
   const [showThanku,setShowThanku]=useState(false);
   const [entityType,setEntityType]=useState("Entity Type");
   const [show,setShow]=useState(true);
  
   const btn={
    'cursor':(!toc && "not-allowed")
    }
   const [formType,setFormType]=useState(1);
   const [error,setError]=useState(false);
   const [loading,setLoading]=useState(false);
   const [ip,setip]=useState()
   const [apiKey,setApiKey]=useState()
   const [toggle,setToggle]=useState()
   const [response,setResponse]=useState();
   const {register,reset,handleSubmit, control, getValues,watch,
  formState:{errors}}=useForm({mode:'onChange'});

  const [checkErrors,setCheckErrors]=useState(false);
  //scroll up if there is any error
  if (Object.keys(errors).length > 0 && checkErrors) {
    const firstErrorField = Object.keys(errors)[0];
    // Get the corresponding input element
    const errorFieldElement = document.querySelector(
      `[name=${firstErrorField}]`
    );
    // Scroll to the error field if it exists
    if (errorFieldElement) {
      errorFieldElement.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "nearest",
      });
    }
  }
  useEffect(()=>{
  if(showThanku){
  setTimeout(()=>{
  setShowThanku(false);
  },5000)
  
  }
  },[showThanku])

  useEffect(()=>{
    setToggle(true)
    if(toggle){
      storeIpAddress()
      getCryptoNACHKey()

    }

  },[toggle])
 
 function numberHandler(e){
  e.target.value = e.target.value.replace(/[^0-9]/gi,"");
 }

 const numericHandler=(e)=>{
  if(e.target.value.length === 1 && (e.target.value === '.' || e.target.value==='0')){
    e.target.value="";   
}
  e.target.value=e.target.value.replace(/[^0-9.]/gi,"");
  }

  const capacityHandler=(e)=>{
  if(e.target.value.length===1 && (e.target.value==='.'|| e.target.value==='0' || e.target.value===' ' ||
(e.target.value>='A' && e.target.value<='Z') || (e.target.value>='a' && e.target.value<='z'))){
    e.target.value=""; 
  }
  e.target.value=e.target.value.replace(/[^0-9mwkwMKWK. ]/gi,"");
  }
 
  const turnoverHandler=(e)=>{
  if(e.target.value.length===1 && (e.target.value==='0' || e.target.value===' ' || e.target.value=="." ||
    (e.target.value>='A' && e.target.value<='Z') || (e.target.value>='a' && e.target.value<='z'))){
        e.target.value=""; 
      }
      e.target.value=e.target.value.replace(/[^0-9COREcore. ]/gi,""); 
  }

  const plantCapacityHandler=(e)=>{
    if(e.target.value.length===1 && (e.target.value==='0' || e.target.value===' ' || e.target.value=="." ||
    (e.target.value>='A' && e.target.value<='Z') || (e.target.value>='a' && e.target.value<='z'))){
        e.target.value=""; 
      }
      e.target.value=e.target.value.replace(/[^0-9kwKW. ]/gi,""); 
  }
  const productionHandler=(e)=>{
    if(e.target.value.length===1 && (e.target.value==='.'|| e.target.value==='0' || e.target.value===' ' ||
(e.target.value>='A' && e.target.value<='Z') || (e.target.value>='a' && e.target.value<='z'))){
    e.target.value=""; 
  }
  e.target.value=e.target.value.replace(/[^0-9mwMW. ]/gi,"");
  }

  const lakhHandler=(e)=>{
    if(e.target.value.length===1 && (e.target.value==='.'|| e.target.value==='0' || e.target.value===' ' ||
    (e.target.value>='A' && e.target.value<='Z') || (e.target.value>='a' && e.target.value<='z'))){
        e.target.value=""; 
      }
      e.target.value=e.target.value.replace(/[^0-9lakhLAKH. ]/gi,"");
  }

  const CustomerFormHandler=(data)=>{
  let payload={
  form_type:'regular',
  name:data.name,
  pin_code:Number(data.pincode),
  mo_num:data.mobile_num,
  email:data.mail,
  e_bill:data.bill,
  sqft:data.Roof_Space,
  address:data.address,
  capacity:data.solar_plant_capacity,
  comment:data.message,
  is_terms_accepted:data.terms_and_conditions
  }
  // console.log(payload);
  setLoading(true);
  leadService.CustomerForm(payload,ip,apiKey).then((res)=>{
  setLoading(false);
  reset();
  setToc(false);
  setFormType(1);
  setShowThanku(true);
  setResponse(res);
  }).catch((err)=>{
  setLoading(false);
  //console.log("Error",err);
  if (err && err.response && err.response.data && err.response.data.Message) {
    toast.error(err.response.data.Message,{
      position:"bottom-right"
      })
  } else {
    toast.error("Something went wrong, please try again later!",{
      position:"bottom-right"
    });
  }
  
})
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
  entity_type:data.entityType[0].label.toLowerCase(),
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
  // console.log(payload);
  setLoading(true);
  leadService.EPCForm(payload,ip,apiKey).then(res=>{
  setLoading(false);
  setResponse(res);
  reset();
  setToc(false);
  setFormType(1);
  setShowThanku(true);
  console.log(res);
  }).catch((err)=>{
    setLoading(false);
    if (err && err.response && err.response.data && err.response.data.Message) {
      toast.error(err.response.data.Message,{
        position:"bottom-right"
        })
    } else {
      toast.error("Something went wrong, please try again later!",{
        position:"bottom-right"
      });
    }
    })
  }


  const OEMHandler=(data)=>{
  let payload={
  form_type:'oem',
  name:data.name,
  brand_name:data.brand_name,
  website:data.website,
  c_person:data.contact_person,
  mo_num:data.mo_num,
  capacity:data.capacity,
  turnover:data.turn_over,
  epc:Number(data.epc),
  email:data.email,
  b_address:data.b_address,
  comment:data.comment,
  is_terms_accepted:data.is_terms_accepted
  }
  // console.log("Payload "+payload);
  setLoading(true);
  leadService.OEMForm(payload,ip,apiKey).then(res=>{
  setLoading(false);
  reset();
  setToc(false);
  setFormType(1);
  setShowThanku(true);
  setResponse(res);
  }).catch((err)=>{
    setLoading(false);
    if (err && err.response && err.response.data && err.response.data.Message) {
      toast.error(err.response.data.Message,{
        position:"bottom-right"
        })
    } else {
      toast.error("Something went wrong, please try again later!",{
        position:"bottom-right"
      });
    }
  })
  } 

  function storeIpAddress(){

    rest.IpAddress().then(res=>{
       setip(res.IPv4)
      
    })
  }
  function getCryptoNACHKey () {
    const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const secretKey = "NEESISHKRUTRI";
    const data = currentDate + secretKey;
    var SHA256 = require("crypto-js/sha256");
    const Key = SHA256(data);
    setApiKey(Key)
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
                        <input name="form_type" value="1" id="radio1" type="radio" checked={formType===1} defaultChecked onClick={()=>{setFormType(1)
                        reset()
                        setToc(false)}}/>
                        <label htmlFor="radio1">Customer</label>
                      </div>
                      <div className="rdio"> 
                        <input name="form_type" value="2" id="radio2" type="radio" checked={formType===2} onClick={()=>{setFormType(2)
                        reset()
                        setToc(false)}}/>
                        <label htmlFor="radio2">EPC</label>
                      </div>
                      <div className="rdio">
                        <input name="form_type" value="3" id="radio3" type="radio" checked={formType===3} onClick={()=>{setFormType(3)
                        reset()
                        setToc(false)}} {...register("form_type")}/>
                        <label htmlFor="radio3">Manufacturer/OEM</label>
                      </div>
                    </div>
               </div>
            </div>
            {formType==1?
              <form className='form-section' onSubmit={handleSubmit(CustomerFormHandler)}>
             <div className='dis-flex'>
                 <div className='flex-items'>
                    <FloatingLabel controlId="floatingName" label="Name" className='input-label'>
                       <Form.Control type="text" placeholder="Name" className='input-field' maxLength="100" name="name" {...register("name",{
                      'required':true, minLength: 3, pattern: /^[a-zA-z]+([\s][a-zA-Z]+)*$/
                       })}
                       autoComplete="off"
                       onInput={(e)=>e.target.value=e.target.value.replace(/[^a-zA-Z ]/gi,"")}/>
                      {errors.name?.type=="required" ? <span className="error-msg">This field is required</span>:
                      errors.name?.type=="pattern" ? <span className="error-msg">Please provide valid name</span>:
                      errors.name?.type=="minLength" ? <span className="error-msg">Name must contains at least 3 characters</span>:
                       ""} 
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingpinCode" label="Pin Code" className='input-label'>
                       <Form.Control type="text" placeholder="pin code" name="pincode" maxLength="6" className='input-field'  autoComplete="off"
                        {...register("pincode",
                       {
                        'required':true,maxLength:6,minLength:6,pattern:/[1-9][0-9]{5}/
                       })} onInput={numberHandler}/>
                       {errors.pincode?.type==="required" ? <span className="error-msg">This field is required</span>:
                       errors.pincode?.type==="pattern" ? <span className="error-msg">Please enter correct pincode</span>:
                       errors.pincode?.type==="maxLength"? <span className="error-msg">Invalid Pincode</span>:
                       errors.pincode?.type==="minLength"? <span className="error-msg">Pincode must contains 6 digits</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mobile No/WhatsApp No" className='input-label'>
                       <Form.Control type="text" placeholder="Mobile No/WhatsApp No" className='input-field' name="mobile_num"  autoComplete="off"
                        maxLength="10"
                       {...register("mobile_num",{
                       'required':true,pattern:/[6-9][0-9]{9}/
                       })} onInput={numberHandler}/>
                        {errors.mobile_num?.type==="required" ? <span className="error-msg">This field is required</span>:
                       errors.mobile_num?.type==="pattern" ? <span className="error-msg">Please enter valid mobile number</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
 
                 <FloatingLabel controlId="floatingNameofEntity" label="Monthly Electricity Bill (Rs.)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Monthly Electricity Bill (Rs.)"   autoComplete="off" maxLength="20"
                        className='input-field' name="bill" {...register("bill",
                       {minLength:3,
                        pattern:/^[1-9]{1}\d+(\.\d{1,2})?$/})}
                        onInput={numericHandler}/>
                       {errors.bill?.type==="minLength" ?  <span className="error-msg">Please enter valid electricity bill</span>
                       : errors.bill?.type==="pattern"  ?  <span className="error-msg">Electricity bill must include 1 or 2 digits after precision.</span> :
                       " "}
                     </FloatingLabel>

                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mail ID" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Mail ID" className='input-field'  autoComplete="off" name="mail" {...register("mail",
                       {pattern:/^[a-zA-Z]{1}[A-Za-z0-9._%+-]{1,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/})}/>
                       {errors.mail?.type==="pattern" ?<span className="error-msg">Please enter valid email ID</span> :
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Roof Space Available for Solar Installation (Sqft)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Roof Space Available for Solar Installation (Sqft)" className='input-field'  autoComplete="off"
                       name="Roof_Space" {...register("Roof_Space",{
                        pattern:/^(^[1-9]{1}[0-9]*)+(\.\d{1,2})?$/
                       })}
                       onInput={numericHandler}
                       maxLength={20}/>
                      {errors.Roof_Space?.type==="pattern"? <span className="error-msg">Roof Space Available for Solar Installation must contain 1 or 2 digits after precision</span> :
                      ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Address" className='input-label'>
                       <Form.Control type="text" placeholder="Address" className='input-field' name="address"  autoComplete="off"
                        {...register("address",
                       {"required":true})}/>
                       {errors.address?.type==="required" ? <span className="error-msg">This is field is required</span> :
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Solar Plant Capacity Requirement (KW)" className='input-label'>
                       <Form.Control type="text" placeholder="Solar Plant Capacity Requirement (KW)" className='input-field'  autoComplete="off"
                       name="solar_plant_capacity"
                        {...register("solar_plant_capacity",
                        {required:true,
                        pattern:/^\d+(\.\d+)? ?(?:kw|kW|KW)?$/})}
                        onInput={plantCapacityHandler}
                        maxLength={20}/>
                       {errors.solar_plant_capacity?.type==="required" ? <span className="error-msg">This field is required</span>:errors.solar_plant_capacity?.type==="pattern"? 
                       <span className='error-msg'>Please enter valid Solar Plant Capacity.</span> :
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingTextarea2" label="Write your message" className='textarea-label'>
                       <Form.Control
                       className='input-field textarea'
                         as="textarea"
                         placeholder="Write your message"
                         autoComplete="off"
                         name="message"
                         {...register("message")}
                         maxLength={200}
                       />
                     </FloatingLabel>
                 </div>
                 <div className='flex-items pdt-15' > 
                       <div key="inline-checkbox" className="cust-checkbox">
                           <Form.Check inline name="terms_and_conditions" type="checkbox" >
                               <Form.Check.Input type="checkbox" name="terms_and_conditions" 
                               {...register("terms_and_conditions",{
                               required:"It is mandatory to check terms and conditions"
                               })} onClick={(e)=>setToc(!toc)} checked={toc}/>
                               <Form.Check.Label>I agree that I have read &amp; accept <a href="https://cmsapi.choiceindia.com/assets/656d16e2-f799-406e-911b-b9b2f7e5406f"
                               target="_blank" className="link-tc">
                                 <span>Terms & Conditions</span></a>
                               </Form.Check.Label>
                           </Form.Check>
                           <div>
                           {errors.terms_and_conditions && <span className='error-msg'>{errors.terms_and_conditions.message}</span>}
                           </div>
                           
                       </div>
                       <div className='btn-submit-sec'>
                           <button type="submit" className="btn-bg btn-bg-dark btnsubmit" 
                           onClick={(e)=>{
                            setCheckErrors(true);
                           }} disabled={loading || !toc}
                           style={btn}>{loading ? <div className='loaderB mx-auto'></div>
                            : "Submit"}</button>
                       </div>
                 </div>
             </div>
                
             </form>:
             formType===2?
             <form className='form-section' onSubmit={handleSubmit(submitHandler)}>
             <div className='dis-flex'>
                 <div className='flex-items'>
                    <FloatingLabel controlId="floatingNameofEntity" label="Name of Entity" className='input-label'>
                       <Form.Control type="text" placeholder="Name of Entity" className='input-field' name="entityName" autoComplete="off"
                       {...register("entityName",
                       {"required":true,
                       pattern:/^[a-zA-z]+([\s][a-zA-Z]+)*$/})}
                       onInput={(e)=>e.target.value=e.target.value.replace(/[^a-zA-Z ]/gi,"")}
                       maxLength={100}/>
                       <Form.Control.Feedback type="invalid">Please provide a Name of Entity</Form.Control.Feedback>
                       {errors.entityName?.type==="required" ? <span className="error-msg">This field is required</span>:
                        errors.entityName?.type==="pattern"? <span className="error-msg">Please enter valid entity name</span> :
                        ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Business Address" className='input-label'>
                       <Form.Control type="text" placeholder="Business Address" name="business_address" className='input-field' autoComplete="off"
                       {...register("business_address",
                        {
                        "required":true
                        })}/>
                       {errors.business_address && <span className="error-msg">This field is required</span>}
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
                         {error && !watch('entityType')?.length && <span className="error-msg">Please select entity type</span>}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Residence Address" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Residence Address" className='input-field' name="residence_address" autoComplete="off"
                       {...register("residence_address")}/>
                      
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Contact Person" className='input-label'>
                       <Form.Control type="text" placeholder="Contact Person" className='input-field' name="contact_person" autoComplete="off"
                       {...register("contact_person",
                       {
                       "required":true,
                       minLength:3,
                       pattern:/^[a-zA-z]+([\s][a-zA-Z]+)*$/
                       })}
                       onInput={(e)=>e.target.value=e.target.value.replace(/[^a-zA-Z ]/gi,"")}
                       maxLength={100}/>
                       {errors.contact_person?.type==="required" ?
                       <span className="error-msg">This field is required</span>
                       :
                       errors.contact_person?.type==="minLength" ?
                       <span className="error-msg">Name must contains at least 3 characters</span> :
                       errors.contact_person?.type==="pattern" ?
                       <span className="error-msg">Please enter valid contact person name</span>:
                       " "}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
 
                 <FloatingLabel controlId="floatingNameofEntity" label="Sales Turnover of latest FY (Rs In Lakh)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Sales Turnover of latest FY (Rs In Lakh)" maxLength={9} autoComplete="off"
                       className='input-field' name="sales_turnover"
                       {...register("sales_turnover",
                       {"pattern":/^\d+(\.\d+)? ?(?:lakh|Lakh|LAKH)?$/})}
                        onInput={lakhHandler}/>
                       {errors.sales_turnover?.type==="pattern" ? <span className="error-msg">Please enter valid Sales turnover</span>:
                        ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mobile No/WhatsApp No" className='input-label'>
                       <Form.Control type="text" placeholder="Mobile No/WhatsApp No" className='input-field' autoComplete="off"
                        maxLength={10} name="mobile_number" 
                       {...register("mobile_number",
                       {
                        'required':true,pattern:/[6-9][0-9]{9}/
                        })}
                        onInput={numberHandler}/>
                        {errors.mobile_number?.type==="required" ? <span className="error-msg">This field is required</span>:
                       errors.mobile_number?.type==="pattern" ? <span className="error-msg">Please enter valid mobile number</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Installed capacity of Latest FY (KW/MW)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Installed capacity of Latest FY (KW/MW)" className='input-field' autoComplete="off"
                       name="Installed_capacity"
                       {...register("Installed_capacity",
                       {pattern:/^\d+(\.\d+)? ?(?:mw|kw|MW|KW|mW|kW)?$/})}
                       onInput={capacityHandler}
                       maxLength={40}/>
                      {errors.Installed_capacity?.type==="pattern" ? <span className="error-msg">Please provide valid Installed Capacity</span>:
                        ""} 
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mail ID" className='input-label'>
                       <Form.Control type="text" placeholder="Mail ID" className='input-field' name="mail" autoComplete="off"
                       {...register("mail",
                       {required:true,
                       pattern:/^[a-zA-Z]{1}[A-Za-z0-9._%+-]{1,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/})}/>
                       {errors.mail?.type==="required" ? <span className="error-msg">This field is required</span>:
                       errors.mail?.type==="pattern" ? <span className="error-msg">Please provide valid email ID</span> :
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
                         autoComplete="off"
                         {...register("dealing_with_brands")}
                       />
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingTextarea2" label="Write your message" className='textarea-label'>
                       <Form.Control
                       autoComplete="off"
                       className='input-field textarea'
                         as="textarea"
                         placeholder="Write your message"
                        name="message"
                        {...register("message")}
                        maxLength={200}
                       />
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items  pdt-15'> 
                       <div key="inline-checkbox" className="cust-checkbox">
                       <Form.Check inline type="checkbox">
                               <Form.Check.Input type="checkbox" name="terms_and_conditions" {...register("terms_and_conditions",
                               {required:"It is mandatory to check terms and conditions"})}
                               onClick={(e)=>setToc(!toc)} checked={toc}
                            />
                               <Form.Check.Label>I agree that I have read &amp; accept <a href="https://cmsapi.choiceindia.com/assets/656d16e2-f799-406e-911b-b9b2f7e5406f"
                                target="_blank" className="link-tc">
                                 <span>Terms & Conditions</span></a>
                               </Form.Check.Label>
                           </Form.Check>
                           <div>
                           {errors.terms_and_conditions && <span className='error-msg'>{errors.terms_and_conditions.message}</span>}
                           </div>
                       </div>
                       <div className='btn-submit-sec'>
                       <button type="submit" className="btn-bg btn-bg-dark btnsubmit" disabled={loading || !toc}
                       onClick={(e)=>{
                        setCheckErrors(true);
                        if(!watch("entityType")?.length){
                          setError(true);
                          }
                       }}
                        style={btn}>{loading ? <div className='loaderB mx-auto'></div>
                            : "Submit"}</button>
                       </div>
                 </div>
             </div>
           
             </form>
             :
             formType==3 && 
             <form className='form-section' onSubmit={handleSubmit(OEMHandler)}>
             <div className='dis-flex'>
                 <div className='flex-items'>
                    <FloatingLabel controlId="floatingName" label="Entity Name" className='input-label'>
                       <Form.Control type="text" placeholder="Entity Name" className='input-field' name="name"  autoComplete="off"
                       {...register("name",{"required":true,
                       pattern: /^[a-zA-z]+([\s][a-zA-Z]+)*$/})}/>
                       {errors.name?.type==="required" ? <span className="error-msg">This field is required</span>:
                       errors.name?.type==="pattern" ? <span className="error-msg">Please provide valid entity name</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingpinCode" label="Sales Turnover (Cr)" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Sales Turnover (Cr)" name="turn_over" className='input-field' autoComplete="off"
                       onInput={turnoverHandler}
                       {...register("turn_over",{
                       "pattern":/^\d+(\.\d+)? ?(?:core|Core|CORE|Cr)?$/
                       })}
                       maxLength={12}/>
                       {errors.turn_over ? <span className="error-msg">Please enter valid sales turnover value</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Brand Name" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Brand Name" className='input-field' name="brand_name"  autoComplete="off"
                       {...register("brand_name",
                       {pattern:/^[a-zA-z]+([\s][a-zA-Z]+)*$/})}
                       maxLength={50}
                       onInput={(e)=>{
                       e.target.value=e.target.value.replace(/[^a-zA-Z ]/,"")
                       }}/>
                       {errors.brand_name ? <span className="error-msg">Please provide valid Brand Name</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="No of Dealers/EPC" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="No of Dealers/EPC" className='input-field' name="epc"  autoComplete="off"
                       {...register("epc",
                       {"pattern":/^[1-9]+([0-9]*)$/})}
                       maxLength={5}
                       onInput={numberHandler}/>
                       {errors.epc ? <span className="error-msg">Please provide valid No. of Dealers</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Website" className='input-label mandate-none'>
                       <Form.Control type="text" placeholder="Website" className='input-field' name="website" 
                        autoComplete="off" {...register("website",{
                        pattern:/^([https|http?:\/\/)?([\da-z.-]+)\.([a-z.]{2,})([/\w .-]*)*\/?$/}
                        )}/>
                        {errors.website && <span className="error-msg">Please enter valid url</span>}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mail ID" className='input-label'>
                       <Form.Control type="text" placeholder="Mail ID" className='input-field' name="email" autoComplete="off"
                       {...register("email",
                       {"required":true,
                       pattern:/^[a-zA-Z]{1}[A-Za-z0-9._%+-]{1,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/})}/>
                        {errors.email?.type==="pattern" ?<span className="error-msg">Please enter valid email ID</span> :
                        errors.email?.type==="required" ?<span className="error-msg">This field is required</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Contact Person" className='input-label'>
                       <Form.Control type="text" placeholder="Contact Person" className='input-field' autoComplete="off" name="contact_person" 
                       {...register("contact_person",
                      {"required":true,
                       pattern:/^[a-zA-z]+([\s][a-zA-Z]+)*$/} )}
                       maxLength={100}/>
                      {errors.contact_person?.type==="required" ? <span className="error-msg">This field is required</span>:
                       errors.contact_person?.type==="pattern"? <span className="error-msg">Please enter valid contact person name</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Business Address" className='input-label'>
                       <Form.Control type="text" placeholder="Business Address"  autoComplete="off" className='input-field' name="b_address" 
                       {...register("b_address",
                       {"required":true})}/>
                       {errors.b_address? <span className="error-msg">This field is required</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Mobile No/WhatsApp No" className='input-label'>
                       <Form.Control type="text" placeholder="Mobile No/WhatsApp No"  autoComplete="off" className='input-field' name="mo_num" 
                       maxLength={10}
                       {...register("mo_num",
                       {
                        'required':true,pattern:/[6-9][0-9]{9}/
                        })}
                        onInput={numberHandler}/>
                         {errors.mo_num?.type==="required" ? <span className="error-msg">This field is required</span>:
                       errors.mo_num?.type==="pattern" ? <span className="error-msg">Please enter valid mobile number</span>:
                       ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingNameofEntity" label="Production capacity in MW" className='input-label'>
                       <Form.Control type="text" placeholder="Production capacity in MW"  autoComplete="off" className='input-field' name="capacity" 
                       {...register("capacity",
                       {"required":true,
                       pattern:/^\d+(\.\d+)? ?(?:mw|MW|mW)?$/})}
                       maxLength={40}
                       onInput={productionHandler}
                       />
                       {errors.capacity?.type==="required" ? <span className="error-msg">This field is required</span> :
                        errors.capacity?.type==="pattern"?<span className="error-msg">Please enter valid Production Capacity</span>:
                        ""}
                     </FloatingLabel>
                 </div>
                 <div className='flex-items'>
                 <FloatingLabel controlId="floatingTextarea2" label="Write your message"  autoComplete="off" className='textarea-label'>
                       <Form.Control
                       className='input-field textarea'
                         as="textarea"
                         placeholder="Write your message"
                         name="comment"
                         {...register("comment")}
                         maxLength={200}
                       />
                       <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                     </FloatingLabel>
                 </div>
                 <div className='flex-items  pdt-15'> 
                       <div key="inline-checkbox" className="cust-checkbox">
                           <Form.Check inline type="checkbox">
                               <Form.Check.Input type="checkbox" name="is_terms_accepted" {...register("is_terms_accepted",
                               {required:"It is mandatory to check terms and conditions"})}
                               onClick={(e)=>setToc(!toc)} checked={toc}/>
                               <Form.Check.Label>I agree that I have read &amp; accept <a href="https://cmsapi.choiceindia.com/assets/656d16e2-f799-406e-911b-b9b2f7e5406f"
                               target="_blank" className="link-tc">
                                 <span>Terms & Conditions</span></a>
                               </Form.Check.Label>
                           </Form.Check>
                           <div>
                            {errors.is_terms_accepted && <span className='error-msg'>{errors.is_terms_accepted.message}</span>}
                           </div>
                       </div>
                       <div className='btn-submit-sec'>
                       <button type="submit" className="btn-bg btn-bg-dark btnsubmit" disabled={loading || !toc}
                       onClick={(e)=>{
                        setCheckErrors(true);
                       }}
                       style={btn}>{loading ? <div className='loaderB mx-auto'></div>
                            : "Submit"}</button>
                       </div>
                 </div>
             </div>
             </form>}
   
          </div>
        </div>
      </div>
    </section>

    {showThanku &&
     (<div className={`lead-pop-up-form`}>
     <div className={`demat-account-form demat-account-form-new blog-thanku-popup`}>
          <div className="thank-you-msg">
              <div className="thank-logo">
                  <div className="blog-thnu-circle">
                  <LazyLoader src={thumbsup} className={'img-fluid'} width={"160"} height={"160"} alt="Loading" />
                  </div>
              </div>
             
          <div className="thank-content">
                  <h2><strong>Thank You!</strong></h2>
                  <p className="subheading">{response?.message ? response.message:
                  "Thank you for sharing your details. Our representative shall get in touch with you shortly."}</p>
          </div>
          </div>
          
      </div>       
  </div>
)}


    </>
  )
}

export default LeadForm