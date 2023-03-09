
import React from "react";
import vehicleFirstStep from '../../assets/images/NBFCvehicleLoan/vehicleFirstStep.svg';
import vehicleSecndStep from '../../assets/images/NBFCvehicleLoan/vehicleSecndStep.svg';
import vehicleThirdStep from '../../assets/images/NBFCvehicleLoan/vehicleThirdStep.svg';
import LazyLoader from '../Common-features/LazyLoader';
import { useRef, useState, useEffect } from 'react';

function StepsliderSolarFinanace() {

    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);
    const myRef4 = useRef(null);
    const [name, setName] = useState('');
    const [name2, setName2] = useState('');
    const [name3, setName3] = useState('');
    const [name4, setName4] = useState('');

    const getPositionsolar = () => {



        const element = document.getElementById("how11");
        const element2 = document.getElementById("how12");
        const element3 = document.getElementById("how13");
    
        if (element && element2 && element3) {
            const rect = element.getBoundingClientRect();
            const rect2 = element.getBoundingClientRect();
            const rect3 = element.getBoundingClientRect();
            if (rect.top.toFixed() > 140 && rect.top.toFixed() < 350) {
                setName('steps-itm-active');
              
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
        window.addEventListener('scroll', getPositionsolar);
    }, []);

    return (
        <div id='how-it-works'>


            <section className="nbfc-steps-works" >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-md-12">
                            <div className="heading-sec text-center">
                                <h2 className="title-first">How to Apply for Personal Loan with Choice Finserv</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center" >
                        <div className="col-md-9">
                            <div className="how-works-steps">
                                <div ref={myRef1} className={"works-steps-itm " + name} id="how11">
                                    <div className="steps-itm-left itm-left-img">
                                        <LazyLoader src={vehicleFirstStep} alt={"Submit the Documents"} className={"img-fluid"} width={"154"} height={"198"} />
                                    </div>
                                    <div className="steps-itm-right">
                                        <h2>01</h2>
                                        <h3>Submit the Documents</h3>
                                        <p>Submit required documents online to check your eligibility</p>
                                    </div>
                                </div>
                                <div ref={myRef2} className={"works-steps-itm steps-itm-reverse " + name2} id="how12">
                                    <div className="steps-itm-left itm-left-img">
                                        <LazyLoader src={vehicleSecndStep} alt={"Check Your Eligibility"} className={"img-fluid"} width={"154"} height={"229"} />
                                    </div>
                                    <div className="steps-itm-right">
                                        <h2>02</h2>
                                        <h3>Application review</h3>
                                        <p>Your documents along with application is reviewed by our experts post which one can get an
approval within 48 hours if all requirements are met</p>
                                    </div>
                                </div>
                                <div ref={myRef3} className={"works-steps-itm " + name3} id="how13">
                                    <div className="steps-itm-left itm-left-img">
                                        <LazyLoader src={vehicleThirdStep} alt={"Quick Loan Approval"} className={"img-fluid"} width={"154"} height={"185"} />
                                    </div>
                                    <div className="steps-itm-right">
                                        <h2>03</h2>
                                        <h3>Quick Loan Disbursal</h3>
                                        <p>Within a span of few hours of approval, the loan is disbursed</p>
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

export default StepsliderSolarFinanace;
