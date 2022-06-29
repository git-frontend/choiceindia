
import React from "react";
import Bannerimage from '../../assets/images/services/tax-advisory-banner.webp';

function TaxAdvisory() {

  return (
    <div>
      
     
    <section className="bannersection service-tab-cont service-tab-lst-itm" id="EquityBroking">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="heading-sec">
                        <h3 className="title-first ">Tax Advisory</h3>				
                        <p className="nm-text">We offer a range of integrated tax consultancy services. Our experienced professionals are committed to help you with all your tax related problems.</p>
                    </div>
                </div>
            </div>
            <div className="row gx-5 mb-5 align-items-center">
                <div className="col-md-4">
                    <div className="rightsec">
                              <img src={Bannerimage} alt="Banner Images" className="img-fluid " width={"410"} height={"417"}></img>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="benifit-list">
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Direct Taxation</h5>
                            <p>Our direct tax services help clients successfully navigate the complicated taxroads.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Indirect Taxation</h5>
                            <p>Our team of professionals guide organisations to optimise business processes to effectively reduce indirect tax incidence.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">International Taxation</h5>
                            <p>We have international tax experts in our team who can provide international tax advisory, transfer pricing advisory, etc.</p>
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

export default TaxAdvisory;
