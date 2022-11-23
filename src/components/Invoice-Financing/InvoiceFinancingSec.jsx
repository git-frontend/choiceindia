
import React from "react";
import Kycimage from '../../assets/images/invoice-financing/kyc.webp';
import IncomeProofimage from '../../assets/images/invoice-financing/income-proof.webp';
import BusinessProofimage from '../../assets/images/invoice-financing/business-proof.webp';
import "./inv-financing-sec.scss";
import LazyLoader from '../Common-features/LazyLoader';

function InvoiceFinancingSec() {
  return (
    <div>
      
    <section className="anchor-spoke-sec">
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="Anchor-heading">
                  <h2 className="title-first">Anchor and Spoke</h2>
                </div>
            </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="flex-card">
              <div className="flex-card-item">
                <div className="anchor-spoke-card">
                  <h3 className="title-secnd mb-4">Anchor</h3>
                  <p>An “Anchor” is a manufacturer or supplier and has entered into an agreement with the
                    lenders to leverage the opportunity of finance for itself and its channel partners in place of maintaining regular cash flows.
                  </p>
                </div>
              </div>
              <div className="flex-card-item">
                <div className="anchor-spoke-card">
                  <h3 className="title-secnd mb-4">Spoke</h3>
                  <p>A “Spoke” is a stakeholder of supply chain i.e. buyer, supplier, dealer etc, without whom financial transaction can’t be fulfilled and has been recommended by the Anchor and approved by the lender.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="Doc-rqrd-sec">
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
                      <LazyLoader src={Kycimage} className={'img-fluid'} width={"311"} height={"212"} alt={"KYC"}/>
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
                    <LazyLoader src={IncomeProofimage} className={'img-fluid'} width={"311"} height={"209"} alt={"Income Proof"}/>
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
                      <LazyLoader src={BusinessProofimage} className={'img-fluid'} width={"311"} height={"233"} alt={"Business Proof"}/>
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

export default InvoiceFinancingSec;
