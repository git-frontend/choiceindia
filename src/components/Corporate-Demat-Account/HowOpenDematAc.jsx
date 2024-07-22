import React, { useState, useEffect } from "react";
import FillOut from '../../assets/images/Corporate-Demat-Account/fill-contact-form-to-open-corporate-account.svg';
import OurRM from '../../assets/images/Corporate-Demat-Account/rm-guide-on-corporate-demat-account-opening-process.svg';
import RequiredDoc from '../../assets/images/Corporate-Demat-Account/share-required-documents-to-open-corporate-account.svg';
import VeriProcess from '../../assets/images/Corporate-Demat-Account/corporate-demat-account-verification.svg';
import StartTrading from '../../assets/images/Corporate-Demat-Account/start-trading-using-your-corporate-demat-account.svg';
import AcChecklist from '../../assets/images/Corporate-Demat-Account/account-checklist.svg';
import { Accordion } from "react-bootstrap";
import LazyLoader from '../Common-features/LazyLoader';
import utils from "../../Services/utils";
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
   
      function chapterScroll(id) {
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
        <>
            <section className="how-open-demat">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="caption">
                                <h2 className="title-secnd">Corporate Demat Account Opening Process</h2>
                                <p>Opening a Corporate Demat account with us is a straightforward process.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="flex-mobile">
                            <div className="process-list-section">
                                <div className="list-itm">
                                    <span>
                                    <LazyLoader src={FillOut} className={'img-fluid'} width={"100"} height={"100"} alt={"Fill contact form to open corporate account"} />
                                    </span>
                                </div>
                                <div className="list-itm">
                                    <span>
                                    <LazyLoader src={OurRM} className={'img-fluid'} width={"100"} height={"100"} alt={"RM guide on corporate demat account opening process"} />
                                    </span>
                                </div>
                                <div className="list-itm">
                                    <span>
                                    <LazyLoader src={RequiredDoc} className={'img-fluid'} width={"100"} height={"100"} alt={"Share Required documents to open corporate account"} />
                                    </span>
                                </div>
                                <div className="list-itm">
                                    <span>
                                    <LazyLoader src={VeriProcess} className={'img-fluid'} width={"100"} height={"100"} alt={"Corporate demat account verification"} />
                                    </span>
                                </div>
                                <div className="list-itm">
                                    <span>
                                    <LazyLoader src={StartTrading} className={'img-fluid'} width={"100"} height={"100"} alt={"Start trading using your corporate demat account"} />
                                    </span>
                                </div>
                            </div>
                            <div className="partner-work-steps">
                                <div className="work-steps-itm">
                                  <span>1</span>
                                  <h6>Fill out the<br/> contact form</h6>
                                </div>
                                <div className="work-steps-itm">
                                  <span>2</span>
                                  <h6>Our relationship manager will reach out to guide you</h6>
                                </div>
                                <div className="work-steps-itm">
                                  <span>3</span>
                                  <h6>Submit the required documents</h6>
                                </div>
                                <div className="work-steps-itm">
                                  <span>4</span>
                                  <h6>Undergo the verification process (takes 48-72 hours)</h6>
                                </div>
                                <div className="work-steps-itm">
                                  <span>5</span>
                                  <h6>Start trading and managing your corporate securities</h6>
                                </div>
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
                                                                <span className="img-check">
                                                                    <img src={AcChecklist} />
                                                                </span>
                                                                <div className="checklist-details">
                                                                    <h6>Company PAN</h6>
                                                                    <span>Copy of the Company's PAN.</span>
                                                                </div>
                                                            </div>
                                                            <div className="checklist">
                                                                <span className="img-check">
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
                                                                <span className="img-check">
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Director Details</h6>
                                                                        <span>Copy of PAN and residential proof of all Directors or Authorised officials.</span>
                                                                    </div>
                                                                </div>
                                                                <div className="checklist">
                                                                    <span className="img-check">
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Net Worth Certificate</h6>
                                                                        <span>Net Worth Certificate by a Chartered Account (for a new company only).</span>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                        <div className="checklist-items">
                                                            <div className="checklist">
                                                                    <span className="img-check">
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Promoter Details</h6>
                                                                        <span>Photographs, POI, POA, PAN of individual promoters holding control, and UBA (Ultimate Beneficiary Owner) form.</span>
                                                                    </div>
                                                                </div>
                                                                <div className="checklist">
                                                                    <span className="img-check">
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Incorporation Certificate & Memorandum</h6>
                                                                        <span>Certified true copy of Certificate of Incorporation and Memorandum and Articles of Association.</span>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                        <div className="checklist-items">
                                                            <div className="checklist">
                                                                    <span className="img-check">
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Bank Account Proof</h6>
                                                                        <span>Proof of the Company's Bank Account.</span>
                                                                    </div>
                                                                </div>
                                                                <div className="checklist">
                                                                    <span className="img-check">
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Annual Report</h6>
                                                                        <span>Certified true copy of the Annual Report for  the last two years.</span>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                        <div className="checklist-items">
                                                            <div className="checklist">
                                                                    <span className="img-check">
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Director Photos</h6>
                                                                        <span>
                                                                            Passport-size photographs of the Director/Authorized officials
                                                                            with a seal as per KYC kit/KRA requirements.</span>
                                                                    </div>
                                                                </div>
                                                                <div className="checklist">
                                                                    <span className="img-check">
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Form DIR-12</h6>
                                                                        <span>Required if the directors have changed.</span>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                        <div className="checklist-items">
                                                            <div className="checklist">
                                                                    <span className="img-check">
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Shareholding Pattern</h6>
                                                                        <span>Shareholding pattern (as of date) of the company certified by the Auditor.</span>
                                                                    </div>
                                                                </div>
                                                                <div className="checklist">
                                                                <span className="img-check">
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Form INC-22 </h6>
                                                                        <span>Required if the company address has been changed.</span>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                        <div className="checklist-items">
                                                            <div className="checklist">
                                                            <span className="img-check">
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Declaration/Resolution</h6>
                                                                        <span>A declaration/Board resolution on the company’s letterhead as per format.</span>
                                                                    </div>
                                                                </div>
                                                                <div className="checklist">
                                                                <span className="img-check">
                                                                        <img src={AcChecklist} />
                                                                    </span>
                                                                    <div className="checklist-details">
                                                                        <h6>Form INC-1</h6>
                                                                        <span>Required if applicable.</span>
                                                                    </div>
                                                                </div>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                    </Accordion>
                                </div>
                           </div>
                           <div className="col-md-12 d-flex justify-content-center">
                                <a href="javascript:void(0)" className="btn-bg btn-new" onClick={() => {chapterScroll('dematformsticky');
                                     utils.pushDataLayerEvent({
                                        'event': 'open_free_account_btn',
                                        'page_path': window.location.pathname,
                                        'page_url': window.location.href,
                                        'lead_source': 'choiceindia',
                                        'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
                                    })
                                }}>Open Free Account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default HowOpenDematAc;