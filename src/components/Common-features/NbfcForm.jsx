import OpenAccountLanguageContent from '../../Services/OpenAccountLanguageContent';
import Bannerimage from '../../assets/images/contact/contact-us.webp';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import { CgAsterisk } from 'react-icons/cg';
import contactService from '../../Services/contactService'
import LazyLoader from '../Common-features/LazyLoader';
import Spinner from 'react-bootstrap/Spinner';
import React, { useEffect, useState, useRef } from "react";

import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';
import openAccountService from '../../Services/openAccountService';
import { useSearchParams } from "react-router-dom";
import "./demat-form.scss"
import OpenAccountOTPModal from './OpenAccountOTPModal.jsx';
import OpenDemateAccountPopup from './OpenDemateAccountPopup.jsx';
import OpenDemateAccountStickyFooter from './OpenDemateAccountStickyFooter.jsx';


import './Thankyoupopup.scss';

function NbfcForm(props) {
    const [datas, setdatas] = useState()
    let inputRef = "";
    const [data, setData] = useState("");
    const [isloader,setIsloader]=useState(false);
    const [loaders, setLoaders] = useState({});
    const [showTermsCondition, setShowTermsCondition] = useState(false);
  
  
    const phoneRegExp = /^(6|7|8|9)([0-9]{9})$/
  
  
    const schema = yup.object().shape({
      userName: yup.string().required("User Name is required").matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed"),
      
      mobile: yup.string().required("Phone Number is required").matches(phoneRegExp, "Invalid number").matches(/^\d+$/, 'The field should have digits only'),
     
  
    })
  
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
      mode: 'onChange',
      resolver: yupResolver(schema)
    });
   
    

    if(document.getElementById('mobileNo') && document.getElementById('mobileNo').value && document.getElementById('mobileNo').value.length==10)
    {
        console.log("kkk",document.getElementById('mobileNo').value);
    }
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

    function handleTermsConditionShow() {
        setShowTermsCondition(true);
    }

    function handleTermsConditionClose() {
        setShowTermsCondition(false);
    }
  




    return (
        <>
            <div className="demat-account-form" id="nbfcform">

                <h2 className="form-ttl">{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'title')}</h2>
                <Form onSubmit={handleSubmit(submitFormData)} autoComplete="off">                    
                <Form.Group className="mb-3 formgrp">
                        <div className="sub-formgrp">
                            <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                                
                                <Form.Control type="text" name="firstName" placeholder='UserName' className="formcontrol" {...register('userName')} />
                                <span className="text-danger"> {errors?.userName?.message} </span>
                            </Form.Group>
                        </div>

                        <div className="sub-formgrp">
                            <Form.Group className="mb-3 formgrp" controlId="formBasicPassword">
                               
                                <Form.Control type="tel" pattern="\d*" id='mobileNo' maxLength={10} placeholder='Mobile Number' className="formcontrol" {...register('mobile')} />
                                <span className="text-danger"> {errors?.mobile?.message} </span>
                            </Form.Group>
                        </div>

                        <div key="inline-checkbox" className="sub-formgrp cust-checkbox">
                            <Form.Check
                                inline
                                name="terms_and_conditions"
                                type="checkbox"
                                id="terms_and_conditions"
                            >
                                <Form.Check.Input type="checkbox" checked readOnly />
                                {
                                    props.language === 'hindi' || props.language === 'hindimutualfund' ? <Form.Check.Label>मैं सहमत हूं कि मैंने <a  onClick={handleTermsConditionShow}><span className="link-tc">नियम और शर्तों</span></a> को पढ़ और स्वीकार कर लिया है</Form.Check.Label> : props.language === 'marathi' ? <Form.Check.Label>आपल्या <a  onClick={handleTermsConditionShow}><span className="link-tc">नियम आणि अटी </span></a>मी काळजीपूर्वक वाचल्या असून, त्या मला मान्य आहेत.</Form.Check.Label> : <Form.Check.Label>I agree that I have read &amp; accept the <a  onClick={handleTermsConditionShow}><span className="link-tc">Terms &amp; Conditions</span></a></Form.Check.Label>
                                }

                            </Form.Check>
                            
                        </div>

                        <div className="sub-formgrp mt-5 mb-0">
                            {
                                <Button variant="primary"
                                    type="submit" className="btn-bg btn-bg-dark sendbtn" >
                                    Send OTP</Button>
                            }
                        </div>
                    </Form.Group>
                </Form>

            </div>

            <Modal show={showTermsCondition} onHide={handleTermsConditionClose} backdrop="static"
                keyboard={false} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'termsheader')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{OpenAccountLanguageContent.getContent(props.language ? props.language : 'en', 'terms')}</Modal.Body>
            </Modal>

     

        </>

    );
}

export default NbfcForm