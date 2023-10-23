import React from 'react';
import Image1 from '../../assets/images/sub-broker/icons/step1.svg';
import Image2 from '../../assets/images/sub-broker/icons/step2.svg';
import Image3 from '../../assets/images/sub-broker/icons/step3.svg';
import Image4 from '../../assets/images/sub-broker/icons/step4.svg';
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from 'react-router-dom';

function StepsToSubBroker() {

    function scrollToId(id) {
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }
    return (
        <div>
            <section className="become-broker-steps">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <div className="headn-sec">
                                <h2 className="titl3">Steps to Become a Choice Sub Broker</h2>
                                <p className="sml-para-dv">Follow these fundamental steps to get started:</p>
                            </div>

                            <div className='steps-broker-list'>
                                <div className='num-itm'>
                                    <span className='icom-im'>
                                        <LazyLoader src={Image1} alt={"Contact Choice"} className={"img-fluid franchise-img"} width={"64"} height={"64"} />
                                    </span>
                                    <div className='num-itm-des'>
                                        <h3>Step 01</h3>
                                        <p>Contact Choice</p>
                                    </div>
                                </div>
                                <div className='num-itm'>
                                    <span className='icom-im'>
                                        <LazyLoader src={Image2} alt={"Compete the eligibility and documentation requirements"} className={"img-fluid franchise-img"} width={"64"} height={"64"} />
                                    </span>
                                    <div className='num-itm-des'>
                                        <h3>Step 02</h3>
                                        <p>Compete the eligibility and documentation requirements</p>
                                    </div>
                                </div>
                                <div className='num-itm'>
                                    <span className='icom-im'>
                                        <LazyLoader src={Image3} alt={"Apply for verification and approval"} className={"img-fluid franchise-img"} width={"64"} height={"64"} />
                                    </span>
                                    <div className='num-itm-des'>
                                        <h3>Step 03</h3>
                                        <p>Apply for verification and approval</p>
                                    </div>
                                </div>
                                <div className='num-itm'>
                                    <span className='icom-im'>
                                        <LazyLoader src={Image4} alt={"Register with SEBI"} className={"img-fluid franchise-img"} width={"64"} height={"64"} />
                                    </span>
                                    <div className='num-itm-des'>
                                        <h3>Step 04</h3>
                                        <p>Register with SEBI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12 d-flex justify-content-center'>
                            <Link to={(window.location.pathname =="/campaign/sub-broker-franchise")? "/campaign/sub-broker-franchise":(window.location.pathname =="/sub-broker-franchise")? "/sub-broker-franchise":""} className="btn-bg btn-bg-dark" onClick={()=>scrollToId('sub-broker-form')}><span>Get Started</span> </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default StepsToSubBroker;