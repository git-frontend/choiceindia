
import React from "react";
import Kycimage from '../../assets/images/channel-finance/kyc.svg';
import BusinessProofimage from '../../assets/images/channel-finance/business-proof.svg';
import LazyLoader from '../Common-features/LazyLoader';

function ChannelFinanceDocument() {
  return (
    <div>
    
    <section className="Doc-rqrd-sec">
      <div className="container">
          <div className="row">
              <div className="col-md-12">
              <div className="Doc-rqrd-heading">
                  <h2 className="title-first">Documents Required for Channel <br/>Finance </h2>
                </div>
              </div>
          </div>
          <div className="row">
            <div className="col-md-12">
            <div className="Doc-rq-card">
              <div className="card-item-chanFin">
                  <div className="">
                    <h3 className="title-doc">Personal Documents</h3>
                    <h3 className="title-doc-sub">KYC</h3>
                    <ul className="list-item">
                      <li>ID Proof</li>
                      <li>Aadhar Card</li>
                    </ul>
                  </div>
                  <div className="img-height">
                      <LazyLoader src={Kycimage} className={'img-fluid'} width={"411"} height={"333"} alt={"KYC"}/>
                    </div>
              </div>
              </div>
            </div>
        </div>
        <div className="row">
        <div className="col-md-12">
            <div className="Doc-rq-card">
            <div className="card-item-chanFin">
                  <div className="">
                    <h3 className="title-doc">Business Documents</h3>
                    <h3 className="title-doc-sub">Income Proof</h3>
                    <ul className="list-item">
                      <li>ITR of minimum 2 years</li>
                      <li>Turnover of Business</li>
                    </ul>
                    <h3 className="title-doc-sub">Business Proof</h3>
                    <ul className="list-item">
                      <li>Business Address</li>
                      <li>Bank Statement GST Certificate</li>
                    </ul>
                  </div>
                  <div className="img-height">
                  <LazyLoader src={BusinessProofimage} className={'img-fluid'} width={"450"} height={"350"} alt={"Business Proof"}/>
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

export default ChannelFinanceDocument;
