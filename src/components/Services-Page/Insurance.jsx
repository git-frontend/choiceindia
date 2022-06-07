
import React from "react";
import Bannerimage from '../../assets/images/services/insurance-banner.jpg';

function Insurance() {

  return (
    <div>
      
     
    <section className="bannersection service-tab-cont" id="EquityBroking">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="heading-sec">
                        <h3 className="title-first ">Insurance</h3>				
                        <p className="nm-text">Choice aims to simplify the complex world of insurance for its customers. It has entered into strategic alliances with all the insurance companies, and has access to the best products &amp; solutions in the insurance market. </p>
                    </div>
                </div>
            </div>
            <div className="row gx-5 align-items-center mb-5">
                <div className="col-md-6">
                    <div className="rightsec">
                        <img src={Bannerimage} alt="Banner Images" className="img-fluid "></img>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="benifit-list">
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Health Insurance</h5>
                            <p>Oompare and find policies which will help you cover the rising medical expenses during medical emergencies.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Life Insurance</h5>
                            <p>We provide all kinds of term and life insurance plans from different insurers.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Commercial Insurance</h5>
                            <p>Safeguard your office from all possible risks of damage like theft, fire and other threats.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Vehicle Insurance</h5>
                            <p>Get accidental damage cover, third party car insurance, comprehensive car insurance, as per your needs.</p>
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

export default Insurance;
