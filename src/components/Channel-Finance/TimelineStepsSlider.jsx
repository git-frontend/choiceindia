
import React from "react";
import FirstStep from '../../assets/images/invoice-financing/documents-for-term-business-loan.webp';
import SecndStep from '../../assets/images/invoice-financing/quick-approval-for-term-business-loan.webp';
import ThirdStep from '../../assets/images/invoice-financing/term-business-loan-disbursed.webp';
import LazyLoader from '../Common-features/LazyLoader';
import { useRef, useState, useEffect } from 'react';


function TimelineStepsSlider() {

    const myRef1 = useRef(null);
    const myRef2 = useRef(null);
    const myRef3 = useRef(null);

    const [name, setName ] = useState('');
    const [name2, setName2 ] = useState('');
    const [name3, setName3 ] = useState('');
  

    const getPosition = () => {



        const element = document.getElementById("how1");
        const element2 = document.getElementById("how2");
        const element3 = document.getElementById("how3");
        
        if(element && element2 && element3){
            const rect = element.getBoundingClientRect();
            const rect2 = element.getBoundingClientRect();
            const rect3 = element.getBoundingClientRect();

            if(rect.top.toFixed() > 140 && rect.top.toFixed() <350){
                setName('steps-itm-active');
            }else{
                setName('');
            }
            if(rect2.top.toFixed() < 150 && rect2.top.toFixed() > -200 ){
                setName2('steps-itm-active');
            }else{
                setName2('');
            }
            if(rect3.top.toFixed() < -200 && rect3.top.toFixed() > -600 ){
                setName3('steps-itm-active');
            }else{
                setName3('');
            }
        }
        
        

    };

   

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
                                <h2 className="title-first">How to Apply for Channel  <br/> Finance Facility</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center" onScroll={getPosition}>
                        <div className="col-md-9">
                            <div className="how-works-steps">
                                <div ref={myRef1} className={"works-steps-itm " + name} id="how1">
                                    <div className="steps-itm-left itm-left-img">
                                        <LazyLoader src={FirstStep} alt={"Process Channel Financing Documents"} className={"img-fluid"} width={"154"} height={"198"} />
                                    </div>
                                    <div className="steps-itm-right">
                                        <h2>01</h2>
                                        <h3>Process Your Documents</h3>
                                        <p>Submit the required documents online i.e. KYC, Business and others to check your eligibility</p>
                                    </div>
                                </div>
                                <div ref={myRef2} className={"works-steps-itm steps-itm-reverse " + name2} id="how2">
                                    <div className="steps-itm-left itm-left-img">
                                        <LazyLoader src={SecndStep} alt={"Channel Financing Loan Approval"} className={"img-fluid"} width={"154"} height={"229"} />
                                    </div>
                                    <div className="steps-itm-right">
                                        <h2>02</h2>
                                        <h3>Get It Approved</h3>
                                        <p>All the documents are under review of the approval team, post which one can get an
approval within 48 hours, if all requirements are met.</p>
                                    </div>
                                </div>
                                <div ref={myRef3} className={"works-steps-itm " + name3} id="how3">
                                    <div className="steps-itm-left itm-left-img">
                                        <LazyLoader src={ThirdStep} alt={"Quick Channel Financing Loan Disbursal"} className={"img-fluid"} width={"154"} height={"185"} />
                                    </div>
                                    <div className="steps-itm-right">
                                        <h2>03</h2>
                                        <h3>Fast &amp; Quick Loan Disbursal</h3>
                                        <p>Within a span of few hours of approval, the loan is disbursed.</p>
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

export default TimelineStepsSlider;
