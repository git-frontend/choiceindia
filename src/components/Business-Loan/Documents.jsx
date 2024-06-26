
import React from "react";
import Kycimage from '../../assets/images/invoice-financing/kyc-documents-invoice-financing.svg';
import IncomeProofimage from '../../assets/images/invoice-financing/income-proof-documents-for-invoice-financing-application.svg';
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
          <div className="row justify-content-around">
            <div className="col-xl-4 col-md-5">
            <div className="Doc-rq-card">
                  <div className="text-center">
                    <div className="img-height">
                      <LazyLoader src={Kycimage} className={'img-fluid'} width={"311"} height={"233"} alt={"KYC"}/>
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
            <div className="col-xl-4 col-md-5">
            <div className="Doc-rq-card">
                <div className="text-center">
                  <div className="img-height">
                    <LazyLoader src={IncomeProofimage} className={'img-fluid'} width={"364"} height={"227"} alt={"Vehicle Documents"}/>
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
