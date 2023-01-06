
import React from "react";
import Kycimage from '../../assets/images/term-loans/personal-documents-for-term-loan-application.svg';
import IncomeProofimage from '../../assets/images/term-loans/business-documents-for-term-loan-application.svg';
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
          <div className="row justify-content-center h-100">
            <div className="col-xl-5 col-md-6">
            <div className="Doc-rq-card cap-right">
                  <div className="text-center">
                    <div className="img-height">
                      <LazyLoader src={Kycimage} className={'img-fluid'} width={"218"} height={"254"} alt={"Kyc Documents For Flexi Credit"}/>
                    </div>
                    <h3 className="title-doc">For KYC</h3>
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
            <div className="col-xl-5 col-md-6">
            <div className="Doc-rq-card cap-left">
                <div className="text-center">
                  <div className="img-height">
                    <LazyLoader src={IncomeProofimage} className={'img-fluid'} width={"254"} height={"255"} alt={"Business Documents For Flexi Credit"}/>
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
