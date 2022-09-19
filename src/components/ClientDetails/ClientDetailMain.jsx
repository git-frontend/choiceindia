import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import "./ClientDetail.scss";

function ClientDetailMain() {

    return (
        <div>
            <section className="mainwrapquick">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 ">
                            <h2 className="title">Update Client Details</h2>

                        </div>
                    </div>
                    <div className="row quicklinkswrap">

                        <div className="form">

                            <Form autoComplete="off">
                                <div className="row d-flex justify-content-between">

                                    <Form.Group className="mb-4  formgrp" controlId="formBasicEmail">
                                        <Form.Label className="formlabel">Client ID</Form.Label>
                                        <Form.Control type="text" name="firstName" placeholder="Enter your Client ID" className="formcontrol" />
                                        {/* <span className="text-danger">error message</span> */}
                                    </Form.Group>



                                </div>

                                <div className="row mt-3 mt-3 d-flex justify-content-between">
                                    <div className="col-md-6">
                                        <Form.Group className="mb-4 formgrp width95" controlId="formBasicPassword">
                                            <Form.Label className="formlabel">Old Email ID </Form.Label>
                                            <Form.Control type="text" placeholder="Enter your Old Email Id " className="formcontrol " />
                                            {/* <span className="text-danger">error message</span> */}
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-4 formgrp width95 float-right" controlId="formBasicEmail">
                                            <Form.Label className="formlabel">New Email ID </Form.Label>
                                            <Form.Control type="text" placeholder="Enter your New Email Id " className="formcontrol " />
                                            {/* <span className="text-danger"> error message </span> */}
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row mt-3 mt-3 d-flex justify-content-between">
                                    <div className="col-md-6">
                                        <Form.Group className="mb-4 formgrp width95" controlId="formBasicPassword">
                                            <Form.Label className="formlabel">Old Phone Number  </Form.Label>
                                            <Form.Control type="text" placeholder="Enter your Old Phone Number " maxLength={10} className="formcontrol " />
                                            {/* <span className="text-danger">error message </span> */}
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="mb-4 formgrp width95 float-right" controlId="formBasicPassword">
                                            <Form.Label className="formlabel"> New Phone Number </Form.Label>
                                            <Form.Control type="text" placeholder="Enter your New Phone Number" maxLength={10} className="formcontrol " />
                                            {/* <span className="text-danger">error message </span> */}
                                        </Form.Group>
                                    </div>
                                </div>







                                <div className="uploadbtn mt5 d-flex align-items-center justify-content-center">
                                    {/* <div style={{color:"green"}} className="feel-msg">message</div> */}
                                    <Button variant="primary" type="submit" className="btn-bg btn-bg-dark ">
                                        Submit
                                    </Button>
                                </div>
                            </Form>
                        </div>



                    </div>


                </div>
            </section>
        </div>
    );
}
export default ClientDetailMain;