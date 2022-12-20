
import React from "react";
import Kycimage from '../../assets/images/term-loans/personal-documents-for-term-loan-application.svg';
import BusinessProofimage from '../../assets/images/term-loans/business-documents-for-term-loan-application.svg';
import LazyLoader from '../Common-features/LazyLoader';

function TermLoansDocument() {
  return (
    <div>
    
    <section className="terms-loan-doc-req">
      <div className="container">
          <div className="row">
              <div className="col-md-12">
              <div className="Doc-rqrd-heading">
                  <h2 className="title-first">Documents Required <br/>for Flexi Loan </h2>
                </div>
              </div>
          </div>
          <div className="row justify-content-center h-100">
            <div className="col-xl-5 col-md-6">
            <div className="Doc-rq-card cap-right">
                  <div>
                    <div className="img-height">
                      <LazyLoader src={Kycimage} className={'img-fluid'} width={"218"} height={"254"} alt={"Personal Documents for Term Loan Application"}/>
                    </div>
                    <h3 className="title-doc">Personal Documents</h3>
                  </div>
                    <ul className="list-item">
                      <li>Aadhar Card</li>
                      <li>Pan Card</li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-5 col-md-6">
            <div className="Doc-rq-card cap-left">
                  <div>
                    <div className="img-height">
                      <LazyLoader src={BusinessProofimage} className={'img-fluid'} width={"253"} height={"255"} alt={"Business Documents for Term Loan Application"}/>
                    </div>
                    <h3 className="title-doc">Business Documents</h3>
                  </div>
                  <ul className="list-item">
                    <li>Current A/c Bank Statement</li>
                    <li>GST Certificate</li>
                    <li>Registration Address</li>
                    <li>Tenure of Business</li>
                  </ul>
                </div>
            </div>
          </div>
      </div>
    </section>
    </div>
  );
}

export default TermLoansDocument;
