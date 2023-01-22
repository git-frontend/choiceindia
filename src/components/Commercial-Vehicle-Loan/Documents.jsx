
import React from "react";
import Kycimage from '../../assets/images/term-loans/personal-documents-for-term-loan-application.svg';
import IncomeProofimage from '../../assets/images/com-vehicle-loan/vehicle-document.svg';
import BusinessProofimage from '../../assets/images/invoice-financing/business-proof-documents-for-invoice-financing-application.svg';
import LazyLoader from '../Common-features/LazyLoader';

function Documents() {
  return (
    <div>
    
    <section className="veh-doc-rqrd-sec">
      <div className="container">
          <div className="row">
              <div className="col-md-12">
              <div className="Doc-rqrd-heading">
                  <h2 className="title-first">Documents Required for <br/>Commercial Vehicle Loan</h2>
                </div>
              </div>
          </div>
          <div className="row justify-content-center h-100">
            <div className=" col-md-5">
            <div className="Doc-rq-card cap-right">
                  <div className="text-center">
                    <div className="img-height">
                      <LazyLoader src={Kycimage} className={'img-fluid'} width={"218"} height={"255"} alt={"KYC"}/>
                    </div>
                    <h3 className="title-doc">KYC &amp; Income Proof</h3>
                  </div>
                    <ul className="list-item">
                      <li>ID Proof</li>
                      <li>Aadhar Card</li>
                      <li>Bank Statement</li>
                    </ul>
                </div>
            </div>
            <div className="col-md-5">
            <div className="Doc-rq-card cap-left">
                <div className="text-center">
                  <div className="img-height">
                    <LazyLoader src={IncomeProofimage} className={'img-fluid'} width={"267"} height={"267"} alt={"Vehicle Documents"}/>
                  </div>
                    <h3 className="title-doc">Vehicle Documents</h3>
                </div>
                  <ul className="list-item">
                    <li>Year Of Registration</li>
                    <li>Transfer Papers (in case of used car)</li>
                    <li>Vehicle Registration Certificate</li>
                  </ul>
                </div>
            </div>
           
          </div>
      </div>
    </section>
    </div>
  );
}

export default Documents;