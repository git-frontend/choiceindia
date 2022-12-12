
import React, { useState } from "react";
import Bannerimage from '../../assets/images/contact/contact-us-new.webp';
import dotsimage from '../../assets/images/contact/dots.webp';
import phoneicon from '../../assets/images/contact/phone-icon.svg';
import openicon from '../../assets/images/contact/open-icon.svg';
import emailicon from '../../assets/images/contact/email-icon.svg';
import officeicon from '../../assets/images/contact/office-icon.svg';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { faClock, faLocationDot, faPhone, faEnvelope, faHeart, faClose, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { CgAsterisk } from 'react-icons/cg';
import contactService from '../../Services/contactService'
import LazyLoader from '../Common-features/LazyLoader';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from 'react-bootstrap/Modal';
import { Form, ModalFooter, ModalHeader } from "react-bootstrap";

function Contactbanner() {

  const [datas, setdatas] = useState()
  let inputRef = "";
  const [data, setData] = useState("");
  const [isloader, setIsloader] = useState(false);
  
  const [nbfc, setNbfc] = useState(false);
  
  const phoneRegExp = /^(6|7|8|9)([0-9]{9})$/


  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    lastName: yup.string().required("Last Name is required").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
    mobile: yup.string().required("Phone Number is required").matches(phoneRegExp, "Invalid number").matches(/^\d+$/, 'The field should have digits only'),
    email: yup.string().email(" Invalid Email ").required("Email Id is required"),
    // purpose: yup.string().required("Need to choose purpose"),
    question: yup.string().max(40).required("Need to fill your question")

  })







  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });
  const submitFormData = (FormData) => {
    setdatas(FormData)
    // console.log("data", FormData);

    setIsloader(true)

    contactService.contactForm(FormData).then(res => {
      setIsloader(false)
      reset();
      setData("Mail sent Successfully")
      // console.log("check",data)

    })


  }






  return (
    <div>
      <div className="banner-parent">
        <section className="banner-contact">
          {/* <img src={Bannerimage} className="ban-img" alt="Loading" width={"1519"} height={"915"} /> */}
          <div className='banner-caption'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-7'>
                  <div className='caption-cont'>
                    <h1 className='big-ttl'>We’re here! <br /> Let’s have a talk</h1>
                  </div>
                 <div className="row">
                  <div className="col-md-5">
                  <div className='dipar-dropdown'>
                      <p className="depart-text">Department *</p>
                      <Form.Select variant="Info" id="dropdown-basic"  className=" department" {...register('purpose')}>
                        <option value="Select here" selected>Select here</option>
                        <option className="option">Feedback</option>
                        <option className="option">Compliance & Complaint.</option>
                        <option className="option">Partner related</option>
                        <option className="option">Broking & Distribution</option>
                        <option className="option">Wealth planning</option>
                        <option className="option">Insurance related query</option>
                        <option className="option">NBFC related query</option>
                        <option className="option">Government Advisory</option>
                        <option className="option">Enquiry</option>
                        <option className="option">Others</option>
                      </Form.Select>
                    </div>
                  </div>
                  <div className="col-md-5">
                  <div className='dipar-dropdown request-dropdown'>
                      <p className="depart-text">Request type *</p>
                      <Form.Select variant="Info" id="dropdown-basic"  className=" department" {...register('purpose')}>
                        <option value="Select here" selected>Select here</option>
                        <option className="option">Feedback</option>
                        <option className="option">Compliance & Complaint.</option>
                        <option className="option">Partner related</option>
                        <option className="option">Broking & Distribution</option>
                        <option className="option">Wealth planning</option>
                        <option className="option">Insurance related query</option>
                        <option className="option">NBFC related query</option>
                        <option className="option">Government Advisory</option>
                        <option className="option">Enquiry</option>
                        <option className="option">Others</option>
                      </Form.Select>
                    </div>
                  </div>
                 </div>
                  
                </div>

                <div className="col-md-4">
                  <div className="bannerbg">
                    <LazyLoader src={Bannerimage} className='img-fluid' width={'387'} height={'609'} alt={'contact us'} />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </section>


        <section className="cnt-banner-bottm">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="cnt-form-details">
                  <div className="left-from">
                    <p className="whiteus-text colorchange">Contact information</p>
                    <div className="form-data">
                      <div className="form-data-left"><LazyLoader src={phoneicon} className={"img-fluid "}  width={'18'} height={'18'} /> <span className="svgpadding">Phone</span> </div>
                      <div className="form-data-right"><a href="tel:02267079999" target="_blank"><p className="form-right-text" >+91-022-6707 9999</p></a> </div>
                    </div>
                    <div className="form-data">
                      <div className="form-data-left"><LazyLoader src={openicon} className={"img-fluid "}  width={'18'} height={'18'} /> <span className="svgpadding"> Open</span></div>
                      <div className="form-data-right"> <p className="form-right-text" >Between 9:30 AM to 6:30 PM<br />
                        Monday to Saturday</p></div>
                    </div>
                    <div className="form-data">
                      <div className="form-data-left"><LazyLoader src={emailicon} className={"img-fluid "}  width={'18'} height={'18'} /><span className="svgpadding"> Email</span> </div>
                      <div className="form-data-right"><a href="mailto:customercare@choiceindia.com" target="_blank"><p className="form-right-text">customercare@choiceindia.com</p></a></div>
                    </div>
                    <div className="form-data">
                      <div className="form-data-left"><LazyLoader src={officeicon} className={"img-fluid "}  width={'18'} height={'18'} /> <span className="svgpadding">Office</span></div>
                      <div className="form-data-right"><p className="form-right-text" >Choice International Limited, Sunil Patodia Tower,
                        J.B. Nagar, Andheri (East),
                        Mumbai 400099</p> </div>
                    </div>
                  </div>
                  <div className="right-form form">
                    <p className="whiteus-text">Write to Us</p>

                    <Form onSubmit={handleSubmit(submitFormData)} autoComplete="off">
                      <div>
                        <Form.Group className="mb-3 formgrp formgrp1" controlId="formBasicEmail">
                          <Form.Label className="formlabel" >Your name <span className="warning">*</span> </Form.Label>
                          <Form.Control type="text" name="firstName" placeholder="Pushkar" className="formcontrol" {...register('firstName',)} />
                          <span className="text-danger"> {errors?.firstName?.message} </span>
                        </Form.Group>
                      </div>

                      <div className="row mt-3 d-flex justify-content-between">
                        <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                          <Form.Label className="formlabel mt-5">Email  <span className="warning">*</span></Form.Label>
                          <Form.Control type="text" placeholder="design@choiceindia.com" className="formcontrol"  {...register('email')} />
                          <span className="text-danger"> {errors?.email?.message} </span>
                        </Form.Group>

                        <Form.Group className="mb-3 formgrp" controlId="formBasicPassword">
                          <Form.Label className="formlabel mt-5"> Mobile number <span className="warning">*</span> </Form.Label>
                          <Form.Control type="tel" placeholder="1234 567 890" pattern="\d*" maxLength={10} className="formcontrol" {...register('mobile')} />
                          <span className="text-danger"> {errors?.mobile?.message} </span>
                        </Form.Group>
                      </div>
                      <div>
                        <Form.Group className="mb-3  formgrp formgrp1" controlId="formBasicEmail">
                          <Form.Label className="formlabel mt-5" >Add a description <span className="warning">*</span> </Form.Label>
                          <Form.Control type="text" name="firstName" placeholder="Your message" className="formcontrol" {...register('firstName',)} />
                          <span className="text-danger"> {errors?.firstName?.message} </span>
                        </Form.Group>
                      </div>


                      {/* <Form.Group className="mb-3">
    <Form.Label className="formlabel mt-3" >Purpose</Form.Label>
    <div className='cust-dropdown'>
      <div className="downar"></div>
      <Form.Select variant="Info" id="dropdown-basic" className="dropdowntoggle" {...register('purpose')}>
        <option className="option">Feedback</option>
        <option className="option">View</option>
        <option className="option">Review</option>

      </Form.Select>
    </div>
  </Form.Group> */}



                      {/* <label className="formlabel mt-5"> Add a description <span className="warning">*</span></label>
                    <div className=" messagefield">
                      <textarea className="messagearea" placeholder="Your message" {...register('question')} />
                      <span className="text-danger"> {errors?.question?.message} </span>
                    </div> */}

                      <div className="uploadbtn mt-5 d-flex align-items-center">
                        <div className="feel-msg">{data}</div>
                        <Button variant="primary"
                          type="submit" className="btn-bg btn-bg-dark ">
                          {isloader === false ?
                            "Submit" : <Spinner animation="border" />
                          }
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>

              </div>
              <div className="col-md-12">
                  <p className="text-center esctext ">For any NBFC related grievances reach out to our <a variant="primary" onClick={() => { setNbfc(true) }} className="cursor-pointer">
                     Escalation Matrix
                     </a></p>
              </div>
            </div>
          </div>
          <Modal show={nbfc} onHide={()=>{setNbfc(false)}} size="xl"  aria-labelledby="contained-modal-title-vcenter" className="contact-modal" centered>
            
            <div className="container mainwrapquick-table">
            <div className="row ">
                     <div className="col-md-12">
                     
                        <div className="quicklinkswrap mt-5 mb-5">
                        <ModalHeader>
                       
                           <FontAwesomeIcon icon={faClose} className="icon-table cursor-pointer" onClick={()=>{setNbfc(false)}} />
                           <div className="clearfix"></div>
                           <h4 className="text-center text-uppercase mt-5 mb-5"><strong>CUSTOMER GRIEVANCE REDRESSAL MECHANISM</strong></h4>
                           {/* <h4 className="text-left text-uppercase mt-5 mb-5"><strong>Escalation Matrix:</strong></h4> */}
                           
                        </ModalHeader>
                          
                          
                           <Modal.Body>
                           <div className="table-responsive">
                              <table className="table table-striped">
                                 <tbody>
                                    <tr>
                                       <th>Level 1 - Customer Care</th>
                                    </tr>
                                    <tr>
                                       <td className="pb-5">Write in to <strong>customercare.finserv@choiceindia.com</strong> or call us on our customer care number <strong>1800 203 5193</strong></td>
                                    </tr>
                                    <tr>
                                       <th>Level 2 - Grievance & Redressal Officer</th>
                                    </tr>
                                    <tr>
                                       <td className="pb-5">If you are not satisfied with the resolution provided to you, you may please reach to Customer Grievances Redressal Officer on <strong>Grievances@choiceindia.com</strong></td>
                                    </tr>
                                    <tr>
                                       <th>Level 3 - Customer Principal Nodal Officer</th>
                                    </tr>
                                    <tr>
                                       <td className="pb-5">If you are still not satisfied with the resolution provided by the Officials on above mentioned Levels, we request you to kindly reach to our Principal Nodal Officer on <strong>principalnodalofficer@choiceindia.com</strong></td>
                                    </tr>
                                    <tr>
                                       <th>Level 4 - Centralised Receipt and Processing Centre </th>
                                    </tr>
                                    <tr>
                                       <td className="pb-5">In case your complaint has not been addressed to your satisfaction within 30 days at all Levels, you can approach the regulatory authority at the address given below:</td>
                                    </tr>
                                    <tr>
                                      <td>
                                      Centralised Receipt and Processing Centre (CRPC)<br/>
                                      Reserve Bank of India<br/>
                                      Central Vista, Sector 17<br/>
                                      Chandigarh – 160017<br/>
                                      Email id: crpc@rbi.org.in
                                      </td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                           </Modal.Body>
                        </div>
                     </div>
                     </div>
                  
            


            
         </div>
         
         </Modal>
        </section>

      </div>
    </div>

  );
}

export default Contactbanner;
