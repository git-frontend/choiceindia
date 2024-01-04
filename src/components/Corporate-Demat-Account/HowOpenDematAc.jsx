import React, { useState, useEffect } from "react";
import FillOut from '../../assets/images/Corporate-Demat-Account/fill-out.svg';
import OurRM from '../../assets/images/Corporate-Demat-Account/our-rm.svg';
import RequiredDoc from '../../assets/images/Corporate-Demat-Account/required-document.svg';
import VeriProcess from '../../assets/images/Corporate-Demat-Account/verification-process.svg';
import StartTrading from '../../assets/images/Corporate-Demat-Account/start-trading.svg';
import AcChecklist from '../../assets/images/Corporate-Demat-Account/account-checklist.svg';
import { Accordion } from "react-bootstrap";
import LazyLoader from '../Common-features/LazyLoader';
function HowOpenDematAc() {
    const [view, setView] = useState({
        matches: window.innerWidth < 767 ? false : true,
    });

    useEffect(() => {
        let mediaQuery = window.matchMedia("(min-width: 767px)");
        mediaQuery.addListener(setView);
        // this is the cleanup function to remove the listener
        return () => mediaQuery.removeListener(setView);
    }, []);

    const settings2 = {
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 8,
        autoplay: false,
        margin: 15,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    adaptiveHeight: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 1000,
                },
            },
        ],
    };


    return (
        <>
            <section className="how-open-demat">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h2 className="title-secnd">How to Open a Demat Account?</h2>
                                <p>Opening a Corporate Demat account with us is a straightforward process.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="process-list-section">
                                <div className="list-itm">
                                    <span>
                                    <LazyLoader src={FillOut} className={'img-fluid'} width={"100"} height={"100"} alt={""} />
                                    </span>
                                </div>
                                <div className="list-itm">
                                    <span>
                                    <LazyLoader src={OurRM} className={'img-fluid'} width={"100"} height={"100"} alt={""} />
                                    </span>
                                </div>
                                <div className="list-itm">
                                    <span>
                                    <LazyLoader src={RequiredDoc} className={'img-fluid'} width={"100"} height={"100"} alt={""} />
                                    </span>
                                </div>
                                <div className="list-itm">
                                    <span>
                                    <LazyLoader src={VeriProcess} className={'img-fluid'} width={"100"} height={"100"} alt={""} />
                                    </span>
                                </div>
                                <div className="list-itm">
                                    <span>
                                    <LazyLoader src={StartTrading} className={'img-fluid'} width={"100"} height={"100"} alt={""} />
                                    </span>
                                </div>
                            </div>
                            <div className="partner-work-steps">
                                <div className="work-steps-itm">
                                  <span>1</span>
                                  <h6>Fill out the <br/> contact form</h6>
                                </div>
                                <div className="work-steps-itm">
                                  <span>2</span>
                                  <h6>Our relationship manager will reach out to guide you</h6>
                                </div>
                                <div className="work-steps-itm">
                                  <span>3</span>
                                  <h6>Share the required documents</h6>
                                </div>
                                <div className="work-steps-itm">
                                  <span>4</span>
                                  <h6>Verification process (takes 48-72 hours)</h6>
                                </div>
                                <div className="work-steps-itm">
                                  <span>5</span>
                                  <h6>Start trading and managing your corporate securities</h6>
                                </div>
                            </div>
                           <div className="accordian-sec">
                                <div className="accor-ttl">
                                    <h3>Documents Required to Open Corporate Demat Account</h3>
                                </div>
                                <div>
                                    <Accordion flush className='open-demat-accordion'>
                                            <Accordion.Item eventKey="0" className='faq-item'>
                                                <Accordion.Header as="h3" className='faq-header'>Corporate Demat Account Checklist</Accordion.Header>
                                                <Accordion.Body className='open-demat-faq-body'>
                                                    <div className="account-checklist">
                                                        <div className="checklist-items">
                                                            <div className="checklist">
                                                                <span>
                                                                    <img src={AcChecklist} />
                                                                </span>
                                                                <div className="checklist-details">
                                                                    <h6>Company PAN</h6>
                                                                    <span>Copy of the Company's PAN.</span>
                                                                </div>
                                                            </div>
                                                            <div className="checklist">
                                                                <span>
                                                                    <img src={AcChecklist} />
                                                                </span>
                                                                <div className="checklist-details">
                                                                    <h6>Director List</h6>
                                                                    <span>List of Directors with their residential addresses, designation, and contact numbers.</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="checklist-items">
                                                            <div className="checklist">
                                                                    <span>
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Director Details</h6>
                                                                        <span>Copy of PAN and residential proof of all Directors or Authorised officials.</span>
                                                                    </div>
                                                                </div>
                                                                <div className="checklist">
                                                                    <span>
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Net Worth Certificate</h6>
                                                                        <span>Net Worth Certificate by a Chartered Account (for a new company only).</span>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                    </Accordion>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default HowOpenDematAc;