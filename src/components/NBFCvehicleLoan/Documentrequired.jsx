
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import Kyc from '../../assets/images/nbfc-indivial-loan/kyc.webp';
import incomeProof from '../../assets/images/nbfc-indivial-loan/incomeproof.webp';

function Documentrequired() {

  return (
    <div>

      <section className="Doc-rqrd-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="Doc-rqrd-heading">
                <h2 className="title-first">Documents Required for <br/> Vehicle Loan </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="Doc-rq-card">
                <div className="text-center">
                  <div className="img-height">
                    <LazyLoader src={Kyc} className={'img-fluid'} width={"320"} height={"240"} alt={"KYC"} />
                  </div>
                 
                </div>
                
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="Doc-rq-card ">
           
                  <h3 className="title-doc ">KYC</h3>
                
                <ul className="list-item">
                  <li >ID Proof</li>
                  <li>Address Proof</li>
                  <li>Pan Card/Form 60</li>
                  <li>Income Proof</li>
                </ul>
              </div>
            </div>
           
          </div>
        </div>
      </section>






    </div>
  );
}

export default Documentrequired;
