
import React from "react";
import Kycimage from '../../assets/images/invoice-financing/kyc-documents-invoice-financing.svg';
import IncomeProofimage from '../../assets/images/invoice-financing/income-proof-documents-for-invoice-financing-application.svg';
import BusinessProofimage from '../../assets/images/invoice-financing/business-proof-documents-for-invoice-financing-application.svg';
import LazyLoader from '../Common-features/LazyLoader';

function InvoiceFinancingDocument() {
  return (
    <div>
    
    <section className="inv-fin-doc-req">
      <div className="container">
          <div className="row">
              <div className="col-md-12">
              <div className="Doc-rqrd-heading">
                  <h2 className="title-first">Documents Required for Invoice <br/>Financing </h2>
                </div>
              </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-xl-3 col-md-4">
            <div className="Doc-rq-card">
                  <div className="text-center">
                    <div className="img-height">
                      <LazyLoader src={Kycimage} className={'img-fluid'} width={"311"} height={"233"} alt={"KYC Documents for Invoice Financing"}/>
                    </div>
                    <h3 className="title-doc">KYC</h3>
                  </div>
                    <ul className="list-item">
                      <li>ID Proof</li>
                      <li>Aadhar Card</li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-3 col-md-4">
            <div className="Doc-rq-card">
                <div className="text-center">
                  <div className="img-height">
                    <LazyLoader src={IncomeProofimage} className={'img-fluid'} width={"364"} height={"227"} alt={"Income Proof Documents for Invoice Financing Application"}/>
                  </div>
                    <h3 className="title-doc">Income Proof</h3>
                </div>
                  <ul className="list-item">
                    <li>ITR of minimum 2 years</li>
                    <li>Turnover of Business</li>
                  </ul>
                </div>
            </div>
            <div className="col-xl-3 col-md-4">
            <div className="Doc-rq-card">
                  <div className="text-center">
                    <div className="img-height">
                      <LazyLoader src={BusinessProofimage} className={'img-fluid'} width={"250"} height={"250"} alt={"Business Proof Documents for Invoice Financing"}/>
                    </div>
                    <h3 className="title-doc">Business Proof</h3>
                  </div>
                  <ul className="list-item">
                    <li>Residential/Business Address</li>
                    <li>Bank Statement</li>
                    <li>GST Certificate</li>
                  </ul>
                </div>
            </div>
          </div>
      </div>
    </section>
    </div>
  );
}

export default InvoiceFinancingDocument;
