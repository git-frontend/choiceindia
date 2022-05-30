
import React, { useState } from "react";
import Bannerimage from '../../assets/images/contact/contactbanner.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
function Contactbanner() {
  

  let inputRef = "";
  const [data, setData] = useState("");


  const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/


  const schema = yup.object().shape({
    firstName: yup.string().required("FirstName is required"),
    lastName: yup.string().required("LastName is required"),
    phone: yup.string().required("Phone no is required").matches(phoneRegExp,"Invalid number"),
    email: yup.string().email(" Invalid Email ").required("Email Id is required"),
    purpose:yup.string().required("Need to choose purpose"),
    yquestion: yup.string().max(40).required("Need to fill your question")

  })



  const { register, handleSubmit, formState: { errors, isValid },reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });


  const submitFormData = (FormData) => {
    console.log("data",FormData );
    reset();

  }



  return (
    <div>
      <section className="banner-contact">
        <img src={Bannerimage} className="ban-img" alt="Loading" />
        <div className='banner-caption'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-12'>
                <div className='caption-cont'>
                  <h1 className='big-ttl'>We’re here <br /> Let’s have a talk</h1>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="form">
          <div className="writebtn">
            <span className="writeus">
              Write to Us
            </span>
          </div>
          <Form onSubmit={handleSubmit(submitFormData)}>
            <div className="row d-flex justify-content-between">
              <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                <Form.Label className="formlabel">First Name</Form.Label>
                <Form.Control type="text" name="firstName" placeholder="Enter First Name" className="formcontrol" {...register('firstName',)} />
                <span className="text-danger"> {errors?.firstName?.message} </span>
              </Form.Group>


              <Form.Group className="mb-3 formgrp" controlId="formBasicPassword">
                <Form.Label className="formlabel"> Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last Name" className="formcontrol" {...register('lastName')} />
                <span className="text-danger"> {errors?.lastName?.message} </span>
              </Form.Group>
            </div>

            <div className="row mt-3 d-flex justify-content-between">
              <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                <Form.Label className="formlabel">Email</Form.Label>
                <Form.Control type="text" placeholder="Enter Email Address" className="formcontrol" {...register('email')} />
                <span className="text-danger"> {errors?.email?.message} </span>
              </Form.Group>

              <Form.Group className="mb-3 formgrp" controlId="formBasicPassword">
                <Form.Label className="formlabel"> Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter Phone Number" maxLength={10} className="formcontrol"{...register('phone')} />
                <span className="text-danger"> {errors?.phone?.message} </span>
              </Form.Group>
            </div>

           
            <Form.Group className="mb-3">
              <Form.Label className="formlabel mt-3" >Purpose</Form.Label>
              <div className='cust-dropdown'>
              <div className="downar"></div>
              <Form.Select variant="Info" id="dropdown-basic" className="dropdowntoggle" {...register('purpose')}>
                <option className="option">Feedback</option>
                <option className="option">View</option>
                <option className="option">Review</option>

              </Form.Select>
              </div>
            </Form.Group>
            


            <label className="formlabel mt-5"> Your Question</label>
            <div className=" messagefield">
              <textarea className="messagearea" placeholder="Enter text here..." {...register('yquestion')} />
              <span className="text-danger"> {errors?.yquestion?.message} </span>
            </div>

            <div className="uploadbtn mt-3 d-flex justify-content-between">
              {/**<input  type="file" id="selected" accept="image/*" title="" hidden />
  <label htmlFor="icon-button-file"  className="formlabel mt-3 attach">Attachment</label>*/}

            <div className="">
              <input
                  type="file"
                  accept="image/*"
                  hidden={true}
                  ref={refParam => inputRef = refParam}
                  onChange={(e) => {
                    setData(e.target.value)
                  }}
                />

                <label
                  className="attachement mt-3"
                  style={{ cursor: "pointer" }}
                  onClick={() => inputRef.click()}
                >Attachment <FontAwesomeIcon icon={faLink} /><p class="filename"> {data} </p>
                </label>
            </div>

             


              <Button variant="primary" 
                disabled={!isValid}
                type="submit" className="btn-bg btn-bg-dark sendbtn">
                Send
              </Button>
            </div>
          </Form>
        </div>
      </section>



    </div>
  );
}

export default Contactbanner;
