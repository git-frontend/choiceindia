
import React from "react";
import Bannerimage from '../../assets/images/services/loans-banner.jpg';

function Loans() {

  return (
    <div>
      
     
    <section className="bannersection service-tab-cont" id="EquityBroking">
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="heading-sec">
                        <h3 className="title-first ">Loans</h3>				
                        <p className="nm-text">Choice loans team covers ambit of loan requirements under one single umbrella to provide a complete and cohesive solution to every loan requisite.</p>
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
                            <h5 className="title-fourth">Personal Loans</h5>
                            <p>We provide personal loans for your urgent financial needs through hassle free process.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Home Loan</h5>
                            <p>Choice provides home loans to help you fulfill your dream of owning a house with ease.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Loan Against Securities</h5>
                            <p>We offer our clients the chance to raise quick funds by pledging their investments.</p>
                       </div>
                       <div className="benifit-list-itm">
                            <h5 className="title-fourth">Business Loans</h5>
                            <p>We help businesses  to cover thier financing needs through our easy business loans with competitive interest rates.</p>
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

export default Loans;
