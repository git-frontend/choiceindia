
import React from "react";
import Bannerimage from '../../assets/images/contact/contactbanner.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Contactbanner() {

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
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
             
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
         </div>
    </section>
      
      
    
    </div>
  );
}

export default Contactbanner;
