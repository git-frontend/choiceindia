
import React from "react";
import ImageSub0 from '../../assets/images/choice-logo.svg';
import "./nach-cancellation.scss";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import LazyLoader from '../Common-features/LazyLoader';
function NachCancellation() {
  return (
    <div className="Nach-Cancellation">

      <section className="nach-cancellation-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="nach-flex">
                <div className="nach-caption">
                  <LazyLoader src={ImageSub0} width="65" height="37" className="img-fluid logo-dark" alt="Choice - Best Stock Broker in India" />
                  <h1 className="title-first">Online NACH Mandate Cancellation</h1>
                  <p>NACH Mandate is an instruction of a customer to us to honour recurring EMI payment towards loan through National Automated Clearing House, managed by NPCI. In order to facilitate online submission of customer request for NACH mandate cancellation, please fill in the details below to initiate the request for NACH mandate cancellation.</p>
                </div>

                <div className="nach-form-sec">
                  <Form autoComplete="off" className="form-prnt">
                    <Form.Group className="formgrp formgrp-txt" controlId="formBasicEmail">
                      <Form.Label className="formlabel">Full Name<span className="warning">*</span> </Form.Label>
                      <Form.Control type="text" name="firstName"  className="formcontrol" placeholder="Jake paul" />
                    </Form.Group>
                    <Form.Group className="formgrp formgrp-txt" controlId="formBasicEmail">
                      <Form.Label className="formlabel">Loan Account Number<span className="warning">*</span> </Form.Label>
                      <Form.Control type="text" name="firstName"  className="formcontrol" placeholder="356323568923" />
                    </Form.Group>
                    <Form.Group className="formgrp formgrp-txt" controlId="formBasicEmail">
                      <Form.Label className="formlabel">Registered Mobile Number<span className="warning">*</span> </Form.Label>
                      <Form.Control type="text" name="firstName"  className="formcontrol" placeholder="8462950637" />
                    </Form.Group>
                    <Form.Group className="formgrp formgrp-txt" controlId="formBasicEmail">
                      <Form.Label className="formlabel">Email</Form.Label>
                      <Form.Control type="text" name="firstName"  className="formcontrol" placeholder="vjkrstamio@gmail.com" />
                    </Form.Group>
                    <div className="formgrp messagefield">
                      <textarea className="formcontrol messagearea" placeholder="Remarks" />
                    </div>
                    <div className="button-filed">
                        <Button className="btn-bg">Submit</Button>
                        <Button className="btn-bg btn-back">Back</Button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default NachCancellation;
