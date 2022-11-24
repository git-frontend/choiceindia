
import React, { useState } from "react";
import Bannerimage from '../../assets/images/contact/contact-us-new.webp';
import dotsimage from '../../assets/images/contact/dots.webp';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { CgAsterisk } from 'react-icons/cg';
import contactService from '../../Services/contactService'
import LazyLoader from '../Common-features/LazyLoader';
import Spinner from 'react-bootstrap/Spinner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot, faPhone, faEnvelope, faHeart, } from '@fortawesome/free-solid-svg-icons';

function Contactbanner() {

  const [datas, setdatas] = useState()
  let inputRef = "";
  const [data, setData] = useState("");
  const [isloader, setIsloader] = useState(false);


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
                      <div className="form-data-left"><FontAwesomeIcon icon={faPhone} /> Phone </div>
                      <div className="form-data-right"><a href="tel:02267079999" target="_blank"><p className="form-right-text" >+91-022-6707 9999</p></a> </div>
                    </div>
                    <div className="form-data">
                      <div className="form-data-left"><FontAwesomeIcon icon={faClock} />  Open</div>
                      <div className="form-data-right"> <p className="form-right-text" >Between 9:30 AM to 6:30 PM<br />
                        Monday to Saturday</p></div>
                    </div>
                    <div className="form-data">
                      <div className="form-data-left"><FontAwesomeIcon icon={faEnvelope} /> Email </div>
                      <div className="form-data-right"><a href="mailto:customercare@choiceindia.com" target="_blank"><p className="form-right-text">customercare@choiceindia.com</p></a></div>
                    </div>
                    <div className="form-data">
                      <div className="form-data-left"><FontAwesomeIcon icon={faLocationDot} /> Office</div>
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
            </div>
          </div>
        </section>

      </div>
    </div>

  );
}

export default Contactbanner;
