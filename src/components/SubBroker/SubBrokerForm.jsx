import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "../Common-features/demat-form.scss"
import subBrokerService from '../../Services/subBrokerService';


function DematAccountForm() {

    /**Regex for Name*/
    const nameRegex = /^(?!.*[\s]{2,})(?!.*[\.]{2,})(?!.*[\']{2,})(?!.*[\-]{2,})(?=.{2,}$)(([A-Za-z\.\'\- ])\2?(?!\2))+$/;
    const mobileRegex = /^(6|9|8|7)([0-9]{9})$/i;
    const emailRegex = /^[A-Za-z0-9._%+-]{1,}@[a-zA-Z-]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})$/;
    // words: /^([A-z-\s\'\.]*)*$/g,
    // email: /^[A-Za-z0-9._%+-@.]*$/g,
    const [brokerName, setBrokerName] = useState('');
    const [brokerMobileNumber, setBrokerMobileNumber] = useState('');
    const [brokerEmail, setBrokerEmail] = useState('');
    const [brokerCityBranch, setBrokerCityBranch] = useState('');
    const [errors, setErrors] = useState({ 'brokerName': {}, 'brokerMobileNumber': {}, 'brokerEmail': {}, 'brokerCityBranch': {} });
    const [showTermsCondition, setShowTermsCondition] = useState(false);
    const [loaders, setLoaders] = useState({});
    const [citiesDropdown, setCitiesDropdown] = useState([]);;

    function handleName(e) {
        let value = e.target.value.replace(/([^A-z-\s\'\.]*)*/g, "");
        setBrokerName(value);
        setErrors((prevError) => ({
            ...prevError,
            'brokerName': {}
        }));
    }

    function handleMobileNumber(e) {
        let value = e.target.value.replace(/\D/g, "");
        setBrokerMobileNumber(value);
        setErrors((prevError) => ({
            ...prevError,
            'brokerMobileNumber': {}
        }));
    }

    function handleEmail(e) {
        let value = e.target.value.replace(/[^A-Za-z0-9._%+-@.]*/g, "");
        setBrokerEmail(value);
        setErrors((prevError) => ({
            ...prevError,
            'brokerEmail': {}
        }));
    }

    function handleBrokerCityBranch(e) {
        let value = e.target.value;
        setBrokerCityBranch(value);
        setErrors((prevError) => ({
            ...prevError,
            'brokerCityBranch': {}
        }));
    }

    function handleSendOTP(e) {
        e.preventDefault();
        let isBrokerNameValid, isBrokerMobileNumberValid, isBrokerEmailValid, isBrokerCityBranchValid = false;
        //brokerName Validation
        isBrokerNameValid = validateBrokerName(brokerName, false);
        //brokerMobileNumber Validation
        isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, false);
        //brokerEmail Validation
        isBrokerEmailValid = validateBrokerEmail(brokerEmail, false);
        //brokerCityBranch Validation
        if (!brokerCityBranch.length) {
            setErrors((prevError) => ({
                ...prevError,
                'brokerCityBranch': { 'required': true }
            }));
        } else if (brokerCityBranch.length) {
            isBrokerCityBranchValid = true;
        }
        if (isBrokerNameValid && isBrokerMobileNumberValid && isBrokerEmailValid && isBrokerCityBranchValid) {
            sendOTP();
        }
    }

    function validateBrokerName(brokerName, fromUseEffect) {
        let isBrokerNameValid = false;
        if (!brokerName.length) {
            if (!fromUseEffect) {
                setErrors((prevError) => ({
                    ...prevError,
                    'brokerName': { 'required': true }
                }));
            }
        } else if (brokerName.length && !nameRegex.test(brokerName)) {
            if (!fromUseEffect) {
                setErrors((prevError) => ({
                    ...prevError,
                    'brokerName': { 'invalid': true }
                }));
            }
        } else if (brokerName.length && nameRegex.test(brokerName)) {
            isBrokerNameValid = true;
        }
        return isBrokerNameValid;
    }

    function validateBrokerMobileNumber(brokerMobileNumber, fromUseEffect) {
        let isBrokerMobileNumberValid = false;
        if (!brokerMobileNumber.length) {
            if (!fromUseEffect) {
                setErrors((prevError) => ({
                    ...prevError,
                    'brokerMobileNumber': { 'required': true }
                }));
            }
        } else if (brokerMobileNumber.length < 10) {
            if (!fromUseEffect) {
                setErrors((prevError) => ({
                    ...prevError,
                    'brokerMobileNumber': { 'invalid': true }
                }));
            }
        } else if (brokerMobileNumber.length === 10 && !mobileRegex.test(brokerMobileNumber)) {
            if (!fromUseEffect) {
                setErrors((prevError) => ({
                    ...prevError,
                    'brokerMobileNumber': { 'invalid': true }
                }));
            }
        } else if (brokerMobileNumber.length === 10 && mobileRegex.test(brokerMobileNumber)) {
            isBrokerMobileNumberValid = true;
        }
        return isBrokerMobileNumberValid;
    }

    function validateBrokerEmail(brokerEmail, fromUseEffect) {
        let isBrokerEmailValid = false;
        if (!brokerEmail.length) {
            if (!fromUseEffect) {
                setErrors((prevError) => ({
                    ...prevError,
                    'brokerEmail': { 'required': true }
                }));
            }
        } else if (brokerEmail.length && !emailRegex.test(brokerEmail)) {
            if (!fromUseEffect) {
                setErrors((prevError) => ({
                    ...prevError,
                    'brokerEmail': { 'invalid': true }
                }));
            }
        } else if (brokerEmail.length && emailRegex.test(brokerEmail)) {
            isBrokerEmailValid = true;
        }
        return isBrokerEmailValid;
    }

    function sendOTP() {

    }

    function handleTermsConditionShow() {
        setShowTermsCondition(true);
    }

    function handleTermsConditionClose() {
        setShowTermsCondition(false);
    }

    function showLoader(type) {
        setLoaders((prevLoaders) => ({
            ...prevLoaders,
            [type]: true
        }));
    }

    function hideLoader(type) {
        setLoaders((prevLoaders) => ({
            ...prevLoaders,
            [type]: false
        }));
    }

    function fetchCities() {
        subBrokerService.getCities().then((res) => {
            console.log(res, "res cities");
            if (res && res.status === 200 && res.data && res.data.StatusCode === 200 && res.data.Body && res.data.Body.CityMasterList) {
                setCitiesDropdown(res.data.Body.CityMasterList);
            } else {
                setCitiesDropdown([]);
            }
        }).catch((error) => {
            console.log(error, "error cities");
            setCitiesDropdown([]);
        });
    }

    useEffect(() => {
        fetchCities();
    }, []);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            let isBrokerNameValid = validateBrokerName(brokerName, true);
            let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
            let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
            if (isBrokerNameValid && (isBrokerMobileNumberValid || isBrokerEmailValid)) {
                console.log(brokerName, "brokerName");
                checkExistence();
                // Send Axios request here
            }
        }, 700)
        return () => clearTimeout(delayDebounceFn)
    }, [brokerName]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            let isBrokerNameValid = validateBrokerName(brokerName, true);
            let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
            let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
            if (isBrokerNameValid && (isBrokerMobileNumberValid || isBrokerEmailValid)) {
                console.log(brokerMobileNumber, "brokerMobileNumber");
                checkExistence();
                // Send Axios request here
            }
        }, 700)
        return () => clearTimeout(delayDebounceFn)
    }, [brokerMobileNumber]);

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            let isBrokerNameValid = validateBrokerName(brokerName, true);
            let isBrokerMobileNumberValid = validateBrokerMobileNumber(brokerMobileNumber, true);
            let isBrokerEmailValid = validateBrokerEmail(brokerEmail, true);
            if (isBrokerNameValid && (isBrokerMobileNumberValid || isBrokerEmailValid)) {
                console.log(brokerEmail, "brokerEmail");
                checkExistence();
                // Send Axios request here
            }
        }, 700);
        return () => clearTimeout(delayDebounceFn)
    }, [brokerEmail]);

    function checkExistence() {
        let request = {
            "email": brokerEmail,
            "name": brokerName,
            "mobile": brokerMobileNumber
        };
        subBrokerService.checkExistence(request).then((res) => {
            console.log(res, "checkExistence");
        }).catch((error) => {
            console.log(error, "checkExistence error");
        });
    }
    return (
        <>
            <div className="demat-account-form">

                <h3 className="form-ttl">Become a Sub Broker</h3>
                <Form>
                    <Form.Group className="mb-3 formgrp">

                        <div className="sub-formgrp">
                            {/* <Form.Control type="text" name="brokerName" placeholder="Name" className="formcontrol formpadding" /> */}
                            <Form.Control type="text" name="brokerName" id="brokerName" placeholder="Name" className="formcontrol formpadding" autoComplete="off" isInvalid={errors.brokerName.invalid || errors.brokerName.required} value={brokerName} onChange={handleName} />
                            {
                                errors.brokerName.invalid ? <Form.Control.Feedback type="invalid">Invalid Name</Form.Control.Feedback> : ''
                            }
                            {
                                errors.brokerName.required ? <Form.Control.Feedback type="invalid">Name is Required</Form.Control.Feedback> : ''
                            }
                        </div>
                        <div className="sub-formgrp">
                            {/* <Form.Control type="number" name="brokerMobileNumber" placeholder="Mobile Number" className="formcontrol formpadding" /> */}
                            <Form.Control type="text" pattern="\d*" name="brokerMobileNumber" id="brokerMobileNumber" placeholder="Mobile Number" className="formcontrol formpadding" autoComplete="off" maxLength="10" isInvalid={errors.brokerMobileNumber.invalid || errors.brokerMobileNumber.required} value={brokerMobileNumber} onChange={handleMobileNumber} />
                            {
                                errors.brokerMobileNumber.invalid ? <Form.Control.Feedback type="invalid">Invalid Mobile Number</Form.Control.Feedback> : ''
                            }
                            {
                                errors.brokerMobileNumber.required ? <Form.Control.Feedback type="invalid">Mobile Number is Required</Form.Control.Feedback> : ''
                            }
                        </div>
                        <div className="sub-formgrp">
                            {/* <Form.Control type="text" name="brokerEmail" placeholder="Email Id" className="formcontrol formpadding" /> */}
                            <Form.Control type="text" name="brokerEmail" id="brokerEmail" placeholder="Email" className="formcontrol formpadding" autoComplete="off" isInvalid={errors.brokerEmail.invalid || errors.brokerEmail.required} value={brokerEmail} onChange={handleEmail} />
                            {
                                errors.brokerEmail.invalid ? <Form.Control.Feedback type="invalid">Invalid Email</Form.Control.Feedback> : ''
                            }
                            {
                                errors.brokerEmail.required ? <Form.Control.Feedback type="invalid">Email is Required</Form.Control.Feedback> : ''
                            }
                        </div>
                        <div className="sub-formgrp">
                            {/* <Form.Control type="text" name="brokerCityBranch" placeholder="Search Nearest City Branch" className="formcontrol formpadding" /> */}
                            <Form.Select placeholder="Search Nearest City Branch" className="formcontrol formpadding" isInvalid={errors.brokerCityBranch.required} value={brokerCityBranch} onChange={handleBrokerCityBranch}>
                                <option value="">Select Nearest City Branch</option>
                                {
                                    citiesDropdown.map((item) => {
                                        return <option key={item.id} value={item.leadCity}>{item.leadCity}</option>;
                                    })
                                }
                            </Form.Select>
                            {
                                errors.brokerCityBranch.required ? <Form.Control.Feedback type="invalid">Nearest City Branch is required</Form.Control.Feedback> : ''
                            }

                        </div>
                        <div className="sub-formgrp cust-checkbox">
                            <Form.Check
                                inline
                                name="terms_and_conditions"
                                type="checkbox"
                                id="terms_and_conditions"
                            >
                                <Form.Check.Input type="checkbox" checked readOnly />
                                <Form.Check.Label>I agree that I have read &amp; accept the <a className="link-tc" onClick={handleTermsConditionShow}>Terms &amp; Conditions</a></Form.Check.Label>

                            </Form.Check>
                        </div>


                        <div className="sub-formgrp mt-5 mb-0">
                            <Button variant="primary"
                                type="button" className="btn-bg btn-bg-dark sendbtn" onClick={handleSendOTP}>
                                Send OTP
                            </Button>
                        </div>
                    </Form.Group>
                </Form>

            </div>
            <Modal show={showTermsCondition} onHide={handleTermsConditionClose} backdrop="static"
                keyboard={false} centered>
                <Modal.Header>
                    <Modal.Title>Attention</Modal.Title>
                </Modal.Header>
                <Modal.Body>We are capturing this data for communication purpose only and it's stored securely. We protect your privacy like it's ours! By agreeing you are allowing us to send updates via SMS/WhatsApp/Email/Call which will also override & will not be termed as violation of DND.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleTermsConditionClose}>
                        Okay
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default DematAccountForm;
