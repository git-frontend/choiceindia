
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import Kycimage from '../../assets/images/term-loans/personal-documents-for-term-loan-application.svg';
import incomeProof from '../../assets/images/nbfc-indivial-loan/incomeproof.svg';

function DocumentrequiredSolarFinanace() {

  return (
    <div>

      <section className="Doc-rqrd-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-5 col-md-8">
              <div className="Doc-rqrd-heading">
                <h2 className="title-first">Documents Required for Solar Finance</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center h-100">
            <div className="col-xl-5 col-md-6">
              <div className="Doc-rq-card cap-right">
                <div className="">
                  <div className="img-height">
                    <LazyLoader src={Kycimage} className={'img-fluid'} width={"218"} height={"254"} alt={"KYC Documents for Individual Loan"} />
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
                <div className="">
                  <div className="img-height">
                    <LazyLoader src={incomeProof} className={'img-fluid'} width={"255"} height={"254"} alt={"Income Proof Documents for Individual Loan"} />
                  </div>
                  <h3 className="title-doc">Income Proof</h3>
                </div>
                <ul className="list-item">

                  <li>Salary slip of last 6 months</li>
                  <li>Last 2 years ITR</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>






    </div>
  );
}

export default DocumentrequiredSolarFinanace;
