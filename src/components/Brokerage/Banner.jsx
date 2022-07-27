
import React from "react";
import Bannerimage from '../../assets/images/brokerage-charges/banner-img.webp';
import glossary from '../../assets/images/brokerage-charges/money.svg';
import LazyLoader from '../Common-features/LazyLoader';


import { Accordion } from "react-bootstrap";

function Banner() {

  return (
    <div>
      
     
    <section className="bannersection">
        <div className="container">
            <div className="row gx-5 align-items-center">
                <div className="col-md-6">
                    <h1 className="title">Brokerage Charges</h1>
                    <p className="para">Trade with low* brokerage charges and avail a host of facilities with one of the best broking companies in India.</p>
                    <a href="/" className="btn-bg mt-4">Open A Free Demat Account</a>
                </div>
                <div className="col-md-6">
                    <div className="rightsec">
                        <LazyLoader src={Bannerimage} alt={"Banner Images"} className={"img-fluid"} width={"609"} height={"476"} />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="glossary-charges">
            <div className="container">
                <div className="glossary-sub-cont">
                    <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                        <Accordion.Item eventKey="0" className='faq-item'>
                            <Accordion.Header> <h4 className='faq-header'>
                            <LazyLoader src={glossary} alt={"Banner Images"} className={"img-fluid"} width={""} height={""} />
                                    Glossary of Charges</h4>
                                
                                </Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                            Brokerage is a small fee that is paid to the brokers when an investor initiates a trade. For Delivery, Intraday and Futures, Choice Broking calculates brokerage based on percentage; whereas for Options, it is calculated on the basis of a flat fee. Choice Broking levies one of the lowest brokerage charges for share trading in India.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
    </section>
      
    
    </div>
  );
}

export default Banner;
