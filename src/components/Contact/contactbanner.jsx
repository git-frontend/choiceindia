
import React,{useState} from "react";
import Bannerimage from '../../assets/images/contact/contactbanner.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import {Dropdown} from 'react-bootstrap';
function Contactbanner() {
     
  let inputRef="";
  const[data,setData]=useState("");



  return (
    <div>
      
     
      <section className="banner-contact">
         <img src={Bannerimage} className="ban-img"/>
         <div className='banner-caption'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='caption-cont'>
                            <h1 className='big-ttl'>We’re here <br/> Let’s have a talk</h1>
                           
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
          <Form>

            <div className="row d-flex justify-content-between">
            <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
              <Form.Label className="formlabel">First Name</Form.Label>
              <Form.Control type="name" placeholder="Enter First Name" className="formcontrol" />
             
            </Form.Group>

            <Form.Group className="mb-3 formgrp" controlId="formBasicPassword">
              <Form.Label className="formlabel"> Last Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Last Name" className="formcontrol" />
            </Form.Group>
            </div>

            <div className="row mt-3 d-flex justify-content-between">
            <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
              <Form.Label className="formlabel">Email</Form.Label>
              <Form.Control type="name" placeholder="Enter Email Address" className="formcontrol" />
             
            </Form.Group>

            <Form.Group className="mb-3 formgrp" controlId="formBasicPassword">
              <Form.Label className="formlabel"> Phone</Form.Label>
              <Form.Control type="name" placeholder="Enter Phone Number" className="formcontrol" />
            </Form.Group>
            </div>
            <label className="formlabel mt-3"> Purpose</label>
            <div className='cust-dropdown'>
           
                     <Dropdown >
                   
                        <Dropdown.Toggle variant="Info" id="dropdown-basic" className="formcontrol" >
                        Feedback
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                           <Dropdown.Item href="#/action-1">Review</Dropdown.Item>
                           <Dropdown.Item href="#/action-2">View</Dropdown.Item>
                           <Dropdown.Item href="#/action-3">feedbacl</Dropdown.Item>
                        </Dropdown.Menu>
                     </Dropdown>
            </div>
            <label className="formlabel mt-5"> Your Question</label>
           <div className=" messagefield">
              <textarea className="messagearea" name="comment" form="usrform">Enter text here...</textarea>
             
           </div>

            <div className="uploadbtn mt-3 d-flex justify-content-between">
            {/**<input  type="file" id="selected" accept="image/*" title="" hidden />
  <label htmlFor="icon-button-file"  className="formlabel mt-3 attach">Attachment</label>*/}
  
            <input
          type="file"
          accept="image/*"
          hidden={true}
          ref={refParam => inputRef = refParam}
          onChange={(e)=>{
            setData(e.target.value)
          }}
        />
        
        <label
        className="formlabel mt-3"
          style={{ cursor:"pointer" }}
          onClick={() => inputRef.click()}
        >
        Attachment <p> {data} </p>
        </label>
       
            
              <Button variant="primary" type="submit" className="sendbtn">
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
