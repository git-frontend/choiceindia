
import React from "react";
import Kycimage from '../../assets/images/term-loans/personal-documents-for-term-loan-application.svg';
import BusinessProofimage from '../../assets/images/solar-finance/business-proof.svg';
import LazyLoader from '../Common-features/LazyLoader';

function SolarFinanceDocument() {
  return (
    <div>
    
    <section className="solar-fin-doc-req">
      <div className="container">
          <div className="row">
              <div className="col-md-12">
              <div className="Doc-rqrd-heading">
                  <h2 className="title-first">Documents Required <br/>for Solar Finance </h2>
                </div>
              </div>
          </div>
          <div className="row  justify-content-center h-100">
            <div className="col-xl-5 col-md-6">
            <div className="Doc-rq-card cap-right">
                  <div className="text-center">
                    <div className="img-height">
                      <LazyLoader src={Kycimage} className={'img-fluid'} width={"218"} height={"255"} alt={"KYC Documents for Solar Financing"}/>
                    </div>
                    <h3 className="title-doc">For KYC</h3>
                  </div>
                    <ul className="list-item">
                      <li>ID proof</li>
                      <li>Address proof</li>
                      <li>Pan Card</li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-5 col-md-6">
            <div className="Doc-rq-card cap-left">
                  <div className="text-center">
                    <div className="img-height">
                      <LazyLoader src={BusinessProofimage} className={'img-fluid'} width={"250"} height={"250"} alt={"Business Doucments for Solar Financing"}/>
                    </div>
                    <h3 className="title-doc">Business Documents</h3>
                  </div>
                  <ul className="list-item">
                    <li>Business registration certificate</li>
                    <li>Business vintage proof</li>
                    <li>GST/ITR returns</li>
                    <li>Bank statement of last 1 year</li>
                  </ul>
                </div>
            </div>
          </div>
      </div>
    </section>
    </div>
  );
}

export default SolarFinanceDocument;
