
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import Kycimage from '../../assets/images/term-loans/personal-documents-for-term-loan-application.svg';
import incomeProof from '../../assets/images/nbfc-indivial-loan/incomeproof.svg';
import businessdocu from '../../assets/images/NBFCPersonalLoan/businessdocu.svg';

function DocumentrequiredPersonalFinanace() {

  return (
    <div>

      <section className="Doc-rqrd-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-md-8">
              <div className="Doc-rqrd-heading">
                <h2 className="title-first">Documents Required for Personal Loan</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center h-100">
            <div className="col-xl-4 col-md-6">
              <div className="Doc-rq-card ">
                <div className="">
                  <div className="img-height">
                    <LazyLoader src={Kycimage} className={'img-fluid'} width={"218"} height={"254"} alt={"KYC Documents for Individual Loan"} />
                  </div>
                  <h3 className="title-doc">For KYC</h3>
                </div>
                <ul className="list-item">
                  <li>ID proof</li>
                  <li>Address proof</li>
                  <li>PAN Card/Form60</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="Doc-rq-card cap-left">
                <div className="">
                  <div className="img-height">
                    <LazyLoader src={incomeProof} className={'img-fluid'} width={"255"} height={"254"} alt={"Income Proof Documents for Individual Loan"} />
                  </div>
                  <h3 className="title-doc">Income Proof</h3>
                </div>
                <ul className="list-item">

                  <li>Latest salary slips</li>
                  <li>Form 16</li>
                  <li>Last income tax return</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-md-6">
              <div className="Doc-rq-card ">
                <div className="">
                  <div className="img-height">
                    <LazyLoader src={businessdocu} className={'img-fluid'} width={"253"} height={"254"} alt={""} />
                  </div>
                  <h3 className="title-doc">Business Documents</h3>
                </div>
                <ul className="list-item">

                  <li>Certificate of Practice</li>
                  <li>GST Registration and Filing Documents</li>
                  <li>MOA & AOA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>






    </div>
  );
}

export default DocumentrequiredPersonalFinanace;
