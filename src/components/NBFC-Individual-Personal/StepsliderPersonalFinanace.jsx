
import React from "react";
import vehicleFirstStep from '../../assets/images/NBFCvehicleLoan/vehicleFirstStep.svg';
import vehicleSecndStep from '../../assets/images/NBFCvehicleLoan/vehicleSecndStep.svg';
import vehicleThirdStep from '../../assets/images/NBFCvehicleLoan/vehicleThirdStep.svg';
import vehicleFourthStep from '../../assets/images/nbfc-indivial-loan/loan-disburse.svg';
import LazyLoader from '../Common-features/LazyLoader';
import { useRef, useState, useEffect } from 'react';

function StepsSlider() {

    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);
    const myRef4 = useRef(null);
    const [name, setName] = useState('');
    const [name2, setName2] = useState('');
    const [name3, setName3] = useState('');
    const [name4, setName4] = useState('');

    const getPosition = () => {



        const element = document.getElementById("howp1");
        const element2 = document.getElementById("howp2");
        const element3 = document.getElementById("howp3");
        const element4 = document.getElementById("howp4");
        if (element && element2 && element3 && element4) {
            const rect = element.getBoundingClientRect();
            const rect2 = element.getBoundingClientRect();
            const rect3 = element.getBoundingClientRect();
            const rect4 = element.getBoundingClientRect();
            if (rect.top.toFixed() > 140 && rect.top.toFixed() < 350) {
                setName('steps-itm-active');
                // console.log('inside name', name);
            } else {
                setName('');
            }
            if (rect2.top.toFixed() < 150 && rect2.top.toFixed() > -200) {
                setName2('steps-itm-active');
            } else {
                setName2('');
            }
            if (rect3.top.toFixed() < -200 && rect3.top.toFixed() > -600) {
                setName3('steps-itm-active');
            } else {
                setName3('');
            }
            if (rect4.top.toFixed() < -600 && rect4.top.toFixed() > -900) {
                setName4('steps-itm-active');
            } else {
                setName4('');
            }
        }

        // setState( rect.top.toFixed());

        // console.log('top',rect2.top.toFixed());

        // console.log('RRR',myRef1.current?.offsetLeft,'RRR2',myRef1.current?.offsetTop);
        // const x = myRef1.current?.offsetLeft;
        // setX(x);

        // const y = myRef1.current?.offsetTop;
        // setY(y);

    };

    // Get the position of the red box in the beginning
    // useEffect(() => {
    //     getPosition();
    // }, []);

    // Re-calculate X and Y of the red box when the window is resized by the user
    useEffect(() => {
        window.addEventListener('scroll', getPosition);
    }, []);

    return (
        <div id='how-it-works'>


            <section className="nbfc-steps-works" onScroll={getPosition}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-sec text-center">
                                <h2 className="title-first">How to Apply for Personal Loan <br/> with Choice Finserv

                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center" onScroll={getPosition}>
                        <div className="col-md-9">
                            <div className="how-works-steps">
                                <div ref={myRef1} className={"works-steps-itm " + name} id="howp1">
                                    <div className="steps-itm-left itm-left-img">
                                        <LazyLoader src={vehicleFirstStep} alt={"Submit the Documents"} className={"img-fluid"} width={"154"} height={"198"} />
                                    </div>
                                  
                                    <div className="steps-itm-right">
                                        <h2>01</h2>
                                        <h3>Check Your Eligibility</h3>
                                        <p>With the help of our eligibility calculator find out your eligibility for the loan to start the process</p>
                                    </div>
                                </div>
                                <div ref={myRef2} className={"works-steps-itm steps-itm-reverse " + name2} id="howp2">
                                    <div className="steps-itm-left itm-left-img">
                                        <LazyLoader src={vehicleSecndStep} alt={"Check Your Eligibility"} className={"img-fluid"} width={"154"} height={"229"} />
                                    </div>
                                    <div className="steps-itm-right">
                                        <h2>02</h2>
                                        <h3>Submit the Dcuments</h3>
                                        <p>By submitting your paperwork digitally and include your KYC, business owner/business documents, and income proof</p>
                                    </div>
                                </div>
                                <div ref={myRef3} className={"works-steps-itm " + name3} id="howp3">
                                    <div className="steps-itm-left itm-left-img">
                                        <LazyLoader src={vehicleThirdStep} alt={"Quick Loan Approval"} className={"img-fluid"} width={"154"} height={"185"} />
                                    </div>
                                    <div className="steps-itm-right">
                                        <h2>03</h2>
                                        <h3>Quick Loan Approval</h3>
                                        <p>A team of professionals will analyse the documents once they have been submitted,
speeding up the process so that an approval can be given within 48 hours.</p>
                                    </div>
                                </div>
                                <div ref={myRef4} className={"works-steps-itm steps-itm-reverse " + name4} id="howp4">
                                    <div className="steps-itm-left itm-left-img">
                                        <LazyLoader src={vehicleFourthStep} alt={"Loan Disbursed"} className={"img-fluid"} width={"154"} height={"185"} />
                                    </div>
                                    <div className="steps-itm-right">
                                        <h2>04</h2>
                                        <h3>Loan Disbursed</h3>
                                        <p>After getting approval, the loan is disbursed within a short period of time.</p>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-12 mt-5 text-center">
                            <h5 className="elg-text">With our eligibility calculator</h5>
                            <a href="#"><span className="btn-bg">Check your Eligibility</span></a>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default StepsSlider;
