
import React, { useState, useEffect } from "react";
import ImageSub0 from '../../assets/images/choice-logo.svg';
import "./nach-cancellation.scss";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LazyLoader from '../Common-features/LazyLoader';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import rest from "../../Services/rest";
import Spinner from 'react-bootstrap/Spinner';
import failureimg from '../../assets/images/failure.svg';

function NachCancellation() {
  const handleClose = () => {
    setShow(false);
  }
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    accountNum: '',
    mobile: '',
    email: '',
    remarks: ''
  });
  const [showloader, setShowLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  /** Regex for Name */
  const nameRegex = /^(?!.*[\s]{2,})(?!.*[\.]{2,})(?!.*[\']{2,})(?!.*[\-]{2,})(?=.{2,}$)(([A-Za-z\.\'\- ])\2?(?!\2))+$/;
  /**Regex for Account Number*/
  const accNoRegex = /^([0-9]){5,18}$/;
  /**Regex for mobile Number*/
  const mobileNumberRegex = /^(6|9|8|7)([0-9]{9})$/;
  /** Regex for remark*/
  const remarkRegex = /^[a-zA-Z0-9 \.\'\-\!\,\;\?\:]*$/;

  const nachSchema = yup.object().shape({
    fullName: yup.string().required("Full Name is required").matches(nameRegex, "Invalid Full Name"),
    accountNum: yup.string().required("Account Number is required").matches(accNoRegex,"Invalid Account Number"),
    mobile: yup.string().required("Mobile Number is required").matches(mobileNumberRegex,"Invalid Mobile Number"),
    email: yup.string().required("Email is required").email("Invalid Email"),
    remarks: yup.string().matches(remarkRegex,"Invalid Remarks").max(300,"Remarks must be within 300 characters")
  });

  const { register, setValue, handleSubmit, formState: { errors }, reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(nachSchema)
  });

  const submitFormData = (data) => {
    setFormData(data);
    const request = {
      "fullName": data.fullName,
      "accountNum": Number(data.accountNum),
      "mobile": Number(data.mobile),
      "email": data.email,
      "remarks": data.remarks
  };
    setShowLoader(true);
    rest.NACHCancellation(request).then(res => {
      setShowLoader(false);
      console.log("check",res)
      if (res && res.status === 200 && res.data && res.data.Message === 'success') {
        reset();
        setIsError(false);
        setShow(true);
      } else {
        setIsError(res && res.status === 200 && res.data && res.data.Message !== 'success' && res.data.message ? res.data.message : 'Something went wrong. Please try again later');
        setShow(true);
      }
    }).catch((error) => {
      setShowLoader(false);
      setIsError('Something went wrong. Please try again later');
      setShow(true);
    });
  }

  function handleNumbers(e, key) {
    let value = e.target.value.replace(/\D/g, "");
    setValue(key, value, { shouldValidate: true });
  }

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
                  <Form onSubmit={handleSubmit(submitFormData)} autoComplete="off" className="form-prnt">
                    <Form.Group className="formgrp formgrp-txt" controlId="fullNameControl">
                      <Form.Label className="formlabel">Full Name<span className="warning">*</span> </Form.Label>
                      <Form.Control type="text" name="fullName" className="formcontrol" placeholder="Enter Full Name" {...register('fullName')} />
                      <span className="text-danger"> {errors?.fullName?.message} </span>
                    </Form.Group>
                    <Form.Group className="formgrp formgrp-txt" controlId="accountNumControl">
                      <Form.Label className="formlabel">Loan Account Number<span className="warning">*</span> </Form.Label>
                      <Form.Control type="text" name="accountNum" className="formcontrol" placeholder="Enter Loan Account Number" {...register('accountNum')} onChange={(e) => handleNumbers(e, 'accountNum')} />
                      <span className="text-danger"> {errors?.accountNum?.message} </span>
                    </Form.Group>
                    <Form.Group className="formgrp formgrp-txt" controlId="mobileControl">
                      <Form.Label className="formlabel">Registered Mobile Number<span className="warning">*</span> </Form.Label>
                      <Form.Control type="text" name="mobile" className="formcontrol" placeholder="Enter Registered Mobile Number" {...register('mobile')} onChange={(e) => handleNumbers(e, 'mobile')} />
                      <span className="text-danger"> {errors?.mobile?.message} </span>
                    </Form.Group>
                    <Form.Group className="formgrp formgrp-txt" controlId="emailControl">
                      <Form.Label className="formlabel">Email<span className="warning">*</span> </Form.Label>
                      <Form.Control type="text" name="email" className="formcontrol" placeholder="Enter Email Id" {...register('email')} />
                      <span className="text-danger"> {errors?.email?.message} </span>
                    </Form.Group>

                    <Form.Group className="formgrp formgrp-txt messagefield" controlId="remarksControl">
                      <Form.Control as="textarea" rows={6} name="remarks" className="formcontrol" placeholder="Remarks" {...register('remarks')} />
                      <span className="text-danger"> {errors?.remarks?.message} </span>
                    </Form.Group>
                    {/* <div className="formgrp messagefield">
                      <textarea className="formcontrol messagearea" placeholder="Remarks" />
                    </div> */}
                    <div className="button-filed">
                    {/* onClick={() => { setShow(true) }} */}
                      <Button type="submit" className="btn-bg">{ showloader ? <Spinner animation="border" /> : "Submit" }</Button>
                      {/* <Button className="btn-bg btn-back">Back</Button> */}
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" className="nach-modal" centered>
        {/* <FontAwesomeIcon icon={faClose} className="icon-table cursor-pointer" onClick={() => { handleClose() }} /> */}
        <div className="nach-modal-cont">
          {
            isError ? 
            <img src={failureimg} height="80" width="80" alt='Failure' /> : 
            <svg width="55" height="60" viewBox="0 0 110 111" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M105.625 34.4058H86.1217L88.6277 13.485C88.8251 11.855 88.6748 10.2016 88.1869 8.63386C87.699 7.06609 86.8844 5.6195 85.7969 4.38938C84.5874 3.01483 83.054 1.96395 81.3357 1.33206C79.6173 0.700163 77.7683 0.507246 75.9566 0.770803C74.1447 1.03436 72.4274 1.74605 70.9603 2.84133C69.4932 3.93661 68.3227 5.38082 67.555 7.04297L54.4516 34.4058H50.7812C50.7812 33.2869 50.3368 32.2138 49.5456 31.4227C48.7544 30.6315 47.6814 30.187 46.5625 30.187H4.375C3.25612 30.187 2.18306 30.6315 1.39189 31.4227C0.600724 32.2138 0.15625 33.2869 0.15625 34.4058V106.125C0.15625 107.243 0.600724 108.316 1.39189 109.108C2.18306 109.899 3.25612 110.343 4.375 110.343H46.5625C47.6814 110.343 48.7544 109.899 49.5456 109.108C50.3368 108.316 50.7812 107.243 50.7812 106.125H88.75C94.5007 105.953 99.9492 103.511 103.903 99.331C107.856 95.1514 109.992 89.5755 109.844 83.8242V38.6245C109.844 37.5056 109.399 36.4326 108.608 35.6414C107.817 34.8503 106.744 34.4058 105.625 34.4058ZM42.3438 101.906H8.59375V38.6245H42.3438V101.906ZM101.406 83.8242C101.554 87.3377 100.306 90.7671 97.9354 93.3642C95.5644 95.9613 92.2624 97.5153 88.75 97.687H50.7812V42.8433H57.1094C57.9036 42.8418 58.6814 42.6161 59.3531 42.1922C60.0247 41.7683 60.5631 41.1634 60.9062 40.447L75.1656 10.688C75.3735 10.2194 75.7113 9.82023 76.1389 9.53762C76.5666 9.25501 77.0662 9.10082 77.5788 9.09328C77.9437 9.0982 78.3036 9.18045 78.6344 9.33462C78.9653 9.48878 79.2597 9.71136 79.4983 9.98766C79.7918 10.327 80.0104 10.7245 80.1398 11.1542C80.2692 11.5838 80.3065 12.0359 80.2492 12.4809L77.178 38.1225C77.107 38.7147 77.1624 39.3152 77.3405 39.8844C77.5186 40.4536 77.8154 40.9786 78.2113 41.4247C78.6071 41.8708 79.0931 42.2279 79.6371 42.4724C80.1811 42.7169 80.7708 42.8433 81.3672 42.8433H101.406V83.8242ZM21.25 89.2495C21.25 88.4151 21.4974 87.5995 21.961 86.9057C22.4246 86.2119 23.0834 85.6712 23.8543 85.3519C24.6252 85.0326 25.4734 84.9491 26.2918 85.1118C27.1101 85.2746 27.8619 85.6764 28.4519 86.2664C29.0419 86.8564 29.4437 87.6081 29.6064 88.4265C29.7692 89.2448 29.6857 90.0931 29.3664 90.864C29.0471 91.6348 28.5063 92.2937 27.8126 92.7573C27.1188 93.2208 26.3031 93.4683 25.4688 93.4683C24.3499 93.4683 23.2768 93.0238 22.4856 92.2326C21.6945 91.4415 21.25 90.3684 21.25 89.2495Z" fill="url(#paint0_linear_1824_3929)" />
            <defs>
              <linearGradient id="paint0_linear_1824_3929" x1="55.0034" y1="-1.79954" x2="55.0034" y2="110.726" gradientUnits="userSpaceOnUse">
                <stop stopColor="#00EFD1" />
                <stop offset="1" stopColor="#00ACEA" />
              </linearGradient>
            </defs>
          </svg>
          }
          {
            isError ? <p>{isError}</p> : <p>Thank you for providing your details. We are in receipt of your request. Our representative will reach to you shortly.</p>
          }
            <Button variant="warning" className='btn-yellow' size="lg" onClick={() => { handleClose() }}>OK</Button>
        </div>
      </Modal>

    </div>
  );
}

export default NachCancellation;
