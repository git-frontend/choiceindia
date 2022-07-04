
import React from "react";
import Bannerimage from '../../assets/images/services/management-consult-banner.webp';

function ManagementConsultancy() {

  return (
    <div>
      
     
    <section className="bannersection service-tab-cont" id="EquityBroking">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="heading-sec">
                        <h3 className="title-first ">Management Consultancy</h3>				
                        <p className="nm-text">We focus on creating customized solutions to grow and manage your business and bring you the best advisory, consultation and execution services.</p>
                    </div>
                </div>
            </div>
            <div className="row gx-5 mb-5 align-items-center">
                <div className="col-md-4">
                    <div className="rightsec">
                              <img src={Bannerimage} alt="Banner Images" className="img-fluid " width={"410"} height={"550"}></img>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="benifit-list">
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Business &amp; Transaction Advisory</h5>
                            <p>We offer start to end assistance for corporate transactions and management functions.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Taxation</h5>
                            <p>We provide complete solutions to corporates regarding direct and indirect tax laws, return filling and tax planning.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Governance, Risk &amp; Compliance</h5>
                            <p>Our GRC team offers help in framing organisational strategy for finding balance between the three elements.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Corporate Services</h5>
                            <p>Our team provides organisation-wide services to corporates regarding administration, compliance and corporate filings.</p>
                       </div>
                    </div>
                    <a href="/" className="btn-bg">Explore</a>
                </div>
            </div>
        </div>
    </section>
      
    
    </div>
  );
}

export default ManagementConsultancy;
