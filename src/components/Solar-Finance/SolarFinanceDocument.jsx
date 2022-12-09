
import React from "react";
import Kycimage from '../../assets/images/channel-finance/personal-dcouments-for-channel-financing.webp';
import BusinessProofimage from '../../assets/images/channel-finance/business-dcouments-for-channel-financing.webp';
import LazyLoader from '../Common-features/LazyLoader';

function SolarFinanceDocument() {
  return (
    <div>
    
    <section className="channel-fin-doc-req">
      <div className="container">
          <div className="row">
              <div className="col-md-12">
              <div className="Doc-rqrd-heading">
                  <h2 className="title-first">Documents Required for Channel <br/>Finance </h2>
                </div>
              </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-11 col-md-12">
            <div className="Doc-rq-card">
              <div className="card-item-chanFin">
                  <div className="chanFin-cont">
                    <h3 className="title-doc">Personal Documents</h3>
                    <h3 className="title-doc-sub">KYC</h3>
                    <ul className="list-item">
                      <li>ID Proof</li>
                      <li>Aadhar Card</li>
                    </ul>
                  </div>
                  <div className="chanFin-img img-height">
                      <LazyLoader src={Kycimage} className={'img-fluid'} width={"550"} height={"362"} alt={"Personal Documents for Channel Financing"}/>
                  </div>
              </div>
              </div>
            </div>
        </div>
        <div className="row mrg-top justify-content-center">
        <div className="col-xl-11 col-md-12">
            <div className="Doc-rq-card">
            <div className="card-item-chanFin">
                  <div className="chanFin-cont">
                    <h3 className="title-doc">Business Documents</h3>
                    <h3 className="title-doc-sub">Income Proof</h3>
                    <ul className="list-item">
                      <li>ITR of minimum 2 years</li>
                      <li>Turnover of Business</li>
                    </ul>
                    <h3 className="title-doc-sub">Business Proof</h3>
                    <ul className="list-item">
                      <li>Business Address</li>
                      <li>Bank Statement</li>
                      <li>GST Certificate</li>
                    </ul>
                  </div>
                  <div className="chanFin-img img-height">
                  <LazyLoader src={BusinessProofimage} className={'img-fluid'} width={"500"} height={"373"} alt={"Business Documents for Channel Financing"}/>
                    </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default SolarFinanceDocument;
