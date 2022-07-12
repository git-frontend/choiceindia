
import React, { useState } from "react";
import Bannerimage from '../../assets/images/contact/contactbanner.webp';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { CgAsterisk } from 'react-icons/cg';
import contactService from '../../Services/contactService'
import LazyLoader from '../Common-features/LazyLoader';
import Spinner from 'react-bootstrap/Spinner';

function Contactbanner() {

  const [datas, setdatas] = useState()
  let inputRef = "";
  const [data, setData] = useState("");
  const [isloader,setIsloader]=useState(false);


  const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/


  const schema = yup.object().shape({
    firstName: yup.string().required("FirstName is required"),
    lastName: yup.string().required("LastName is required"),
    mobile: yup.string().required("Phone no is required").matches(phoneRegExp, "Invalid number"),
    email: yup.string().email(" Invalid Email ").required("Email Id is required"),
    purpose: yup.string().required("Need to choose purpose"),
    question: yup.string().max(40).required("Need to fill your question")

  })







  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });
  const submitFormData = (FormData) => {
    setdatas(FormData)
    console.log("data", FormData);
    reset();
    setIsloader(true)
    
    contactService.contactForm(FormData).then(res => {
      setIsloader(false)
    
      setData("Mail sent Successfully")
      console.log("check",data)

    })


  }
  

  // const [main, setMain] = useState(true);
  // const [first, setFirst] = useState(true);
  // const [second, setSecond] = useState(true);
  // const [fimg, setImg] = useState(true);

  // const myTimeout = setTimeout(myGreeting, 2000);

  // function myGreeting() {
  // setMain(() => false);
  // setFirst(() => false);
  // setSecond(() => false);
  // setImg(() => false);
  // }

  // useEffect(() => {
  //   myTimeout();
  // },[])


  return (
    <div>
      <div className="banner-parent">
        <section className="banner-contact">
          {/* {
          main ? <img src={""} className="ban-img1" alt="Loading" /> :
            <img src={Bannerimage} className="ban-img" alt="Loading" />
        } */}
          <LazyLoader src={Bannerimage} className='img-fluid ban-img' width={'1519'} height={'915'} alt={'Loading'} />
          {/* <img src={Bannerimage} className="ban-img" alt="Loading" width={"1519"} height={"915"} /> */}
          <div className='banner-caption'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='caption-cont'>

                    {/* {
                    main ? <h1 className='big-ttl' > <br /> </h1> :
                      <h1 className='big-ttl'>We’re here <br /> Let’s have a talk</h1>
                  } */}
                    <h1 className='big-ttl'>We’re here <br /> Let’s have a talk</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="cnt-banner-bottm">
        <div className="container">
          <div className="writebtn">
            <span className="writeus">
              Write to Us
            </span>
          </div>
          <div className="form">

            <Form onSubmit={handleSubmit(submitFormData)} autoComplete="off">
              <div className="row d-flex justify-content-between">
                <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                  <Form.Label className="formlabel">First Name  <span className="warning"><CgAsterisk /></span> </Form.Label>
                  <Form.Control type="text" name="firstName" placeholder="Enter First Name" className="formcontrol" {...register('firstName',)} />
                  <span className="text-danger"> {errors?.firstName?.message} </span>
                </Form.Group>


                <Form.Group className="mb-3 formgrp" controlId="formBasicPassword">
                  <Form.Label className="formlabel"> Last Name <span className="warning"><CgAsterisk /></span> </Form.Label>
                  <Form.Control type="text" placeholder="Enter Last Name" className="formcontrol" {...register('lastName')} />
                  <span className="text-danger"> {errors?.lastName?.message} </span>
                </Form.Group>
              </div>

              <div className="row mt-3 d-flex justify-content-between">
                <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                  <Form.Label className="formlabel">Email  <span className="warning"><CgAsterisk /></span></Form.Label>
                  <Form.Control type="text" placeholder="Enter Email Address" className="formcontrol" {...register('email')} />
                  <span className="text-danger"> {errors?.email?.message} </span>
                </Form.Group>

                <Form.Group className="mb-3 formgrp" controlId="formBasicPassword">
                  <Form.Label className="formlabel"> Phone  <span className="warning"><CgAsterisk /></span> </Form.Label>
                  <Form.Control type="text" placeholder="Enter Phone Number" maxLength={10} className="formcontrol"{...register('mobile')} />
                  <span className="text-danger"> {errors?.mobile?.message} </span>
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



              <label className="formlabel mt-5"> Your Question <span className="warning"><CgAsterisk /></span></label>
              <div className=" messagefield">
                <textarea className="messagearea" placeholder="Enter text here..." {...register('question')} />
                <span className="text-danger"> {errors?.question?.message} </span>
              </div>
              
              <div className="uploadbtn mt-3 d-flex ">
              <div style={{color:"green"}}>{data}</div>
                <Button variant="primary"
                  type="submit" className="btn-bg btn-bg-dark sendbtn">
                  { isloader===false ? 
                  "Send" : <Spinner animation="border" />
                  }
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </section>

    </div>

  );
}

export default Contactbanner;
