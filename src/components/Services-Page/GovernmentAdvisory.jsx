
import React from "react";
import Bannerimage from '../../assets/images/services/government-advisory-banner.jpg';

function GovernmentAdvisory() {

  return (
    <div>
      
     
    <section className="bannersection service-tab-cont" id="EquityBroking">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="heading-sec">
                        <h3 className="title-first ">Government Advisory</h3>				
                        <p className="nm-text">We collaborate for pioneering frontrunner projects to consult on the most ambitious benchmarks for the development and progress of our nation.</p>
                    </div>
                </div>
            </div>
            <div className="row gx-5 mb-5 align-items-center">
                <div className="col-md-6">
                    <div className="rightsec">
                        <img src={Bannerimage} alt="Banner Images" className="img-fluid "></img>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="benifit-list">
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Research &amp; Survey</h5>
                            <p>Our research team is experienced and capable to deploy research, sampling, surveyn operations.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Bid Process Management</h5>
                            <p>We provide end to end bid process management sevices to governments from bid solicitation to project delivery.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Policy Formation &amp; Advisory</h5>
                            <p>Our experts in the field of public finance and policy have  helped many governments and agencies in policy formulation.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Monitoring &amp; Evaluation</h5>
                            <p>We use effective M&amp;E frameworks to analyse and improve outcomes and impact of policies and projects.</p>
                       </div>
                    </div>
                </div>
            </div>
            <div class="row"><div class="col-md-12 mt-5 d-flex justify-content-center"><a href="/" class="btn-bg">Explore</a></div></div>
        </div>
    </section>
      
    
    </div>
  );
}

export default GovernmentAdvisory;
