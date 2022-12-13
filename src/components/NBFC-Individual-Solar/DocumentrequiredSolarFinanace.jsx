
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import Kyc from '../../assets/images/nbfc-indivial-loan/kyc.webp';
import incomeProof from '../../assets/images/nbfc-indivial-loan/incomeproof.webp';

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
          <div className="row justify-content-center">
            <div className="col-xl-5 col-md-6">
              <div className="Doc-rq-card">
                <div className="text-center">
                  <div className="img-height">
                    <LazyLoader src={Kyc} className={'img-fluid'} width={"320"} height={"240"} alt={"KYC Documents for Individual Loan"} />
                  </div>
                  <h3 className="title-doc">KYC</h3>
                </div>
                <ul className="list-item">
                  <li>KYC</li>
                  <li>ID proof</li>
                  <li>Address proof</li>
                  <li>PAN Card</li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-md-6">
              <div className="Doc-rq-card">
                <div className="text-center">
                  <div className="img-height">
                    <LazyLoader src={incomeProof} className={'img-fluid'} width={"267"} height={"267"} alt={"Income Proof Documents for Individual Loan"} />
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
