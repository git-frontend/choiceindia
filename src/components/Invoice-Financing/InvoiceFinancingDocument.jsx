
import React from "react";
import Kycimage from '../../assets/images/term-loans/personal-documents-for-term-loan-application.svg';
import IncomeProofimage from '../../assets/images/invoice-financing/income-proof-documents-for-invoice-financing-application.svg';
import BusinessProofimage from '../../assets/images/term-loans/business-documents-for-term-loan-application.svg';
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
          <div className="row h-100">
            <div className="col-xl-4 col-md-6 mb-5">
            <div className="Doc-rq-card">
                  <div className="text-center">
                    <div className="img-height">
                      <LazyLoader src={Kycimage} className={'img-fluid'} width={"218"} height={"254"} alt={"KYC Documents for Invoice Financing"}/>
                    </div>
                    <h3 className="title-doc">For KYC</h3>
                  </div>
                    <ul className="list-item">
                      <li>ID Proof</li>
                      <li>Aadhar Card</li>
                    </ul>
                </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-5">
            <div className="Doc-rq-card">
                <div className="text-center">
                  <div className="img-height">
                    <LazyLoader src={IncomeProofimage} className={'img-fluid'} width={"304"} height={"255"} alt={"Income Proof Documents for Invoice Financing Application"}/>
                  </div>
                    <h3 className="title-doc">Income Proof</h3>
                </div>
                  <ul className="list-item">
                    <li>ITR of minimum 2 years</li>
                    <li>Business turnover</li>
                  </ul>
                </div>
            </div>
            <div className="col-xl-4 col-md-6 mb-5">
            <div className="Doc-rq-card">
                  <div className="text-center">
                    <div className="img-height">
                      <LazyLoader src={BusinessProofimage} className={'img-fluid'} width={"254"} height={"255"} alt={"Business Proof Documents for Invoice Financing"}/>
                    </div>
                    <h3 className="title-doc">Business Documents</h3>
                  </div>
                  <ul className="list-item">
                    <li>Business Address</li>
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
