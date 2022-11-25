
import React from "react";
import Kycimage from '../../assets/images/invoice-financing/kyc.svg';
import IncomeProofimage from '../../assets/images/nbfc-flexi-credit-business/businessdocument.svg';
import LazyLoader from '../Common-features/LazyLoader';

function FlexiCreditBusinessDocument() {
  return (
    <div>
    
    <section className="Doc-rqrd-sec">
      <div className="container">
          <div className="row">
              <div className="col-md-12">
              <div className="Doc-rqrd-heading">
                  <h2 className="title-first">Documents Required  <br/>for Flexi Loan </h2>
                </div>
              </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-5 col-md-5">
            <div className="Doc-rq-card">
                  <div className="text-center">
                    <div className="img-height">
                      <LazyLoader src={Kycimage} className={'img-fluid'} width={"320"} height={"240"} alt={"KYC"}/>
                    </div>
                    <h3 className="title-doc">KYC</h3>
                  </div>
                    <ul className="list-item">
                    
                      <li>Individual/Non Individual Identification (ID) Proof</li>
                      <li>Proof of Address</li>
                      <li>PAN Card – Applicant &amp; Promoter</li>
                      <li>Aadhaar Card – Promoter</li>
                      <li>Udyam Aadhaar – Applicant</li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-5 col-md-5">
            <div className="Doc-rq-card">
                <div className="text-center">
                  <div className="img-height">
                    <LazyLoader src={IncomeProofimage} className={'img-fluid'} width={"267"} height={"267"} alt={"Income Proof"}/>
                  </div>
                    <h3 className="title-doc">Business Documents</h3>
                </div>
                  <ul className="list-item">
                 
                    <li> Bank Statement for last 6 months</li>
                    <li>GST Registration Certificate</li>
                    <li>Business Proof</li>
                  </ul>
                </div>
            </div>
           
          </div>
      </div>
    </section>
    </div>
  );
}

export default FlexiCreditBusinessDocument;
