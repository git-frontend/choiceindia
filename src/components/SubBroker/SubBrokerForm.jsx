import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../Common-features/demat-form.scss"



function DematAccountForm() {



    return (
        <div className="demat-account-form">
          
                <h3 className="form-ttl">Become a Sub Broker</h3>
                <Form>
                    <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                        
                        <div className="sub-formgrp">
                            <Form.Control type="text" name="firstName" placeholder="Name" className="formcontrol formpadding" />
                        </div>
                        <div className="sub-formgrp">
                            <Form.Control type="number" name="mobile" placeholder="Mobile Number" className="formcontrol formpadding" />
                        </div>
                        <div className="sub-formgrp">
                            <Form.Control type="text" name="email" placeholder="Email Id" className="formcontrol formpadding" />
                        </div>
                        <div className="sub-formgrp">
                            <Form.Control type="text" name="branch" placeholder="Search Nearest City Branch" className="formcontrol formpadding" />
                        </div>


                        {['checkbox',].map((type) => (
                            <div key={`inline-${type}`} className="sub-formgrp cust-checkbox">
                                <Form.Check
                                    inline
                                    label=""
                                    name="group1"
                                    type={type}
                                    id={`inline-${type}-1`}
                                />
                                <label className="lbl">I agree that I have read &amp; accept the <a href="#" className="link-tc">Terms &amp; Conditions</a></label>
                            </div>
                        ))}

                        <div className="sub-formgrp mt-5 mb-0">
                            <Button variant="primary"
                                type="submit" className="btn-bg btn-bg-dark sendbtn">
                                Send OTP
                            </Button>
                        </div>
                    </Form.Group>
                </Form>

        </div>
    );
}

export default DematAccountForm;
