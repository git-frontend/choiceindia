
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
            <h2 className="title-first">Documents Required <br/>for Flexi Loan </h2>
          </div>
        </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-xl-5 col-md-6">
      <div className="Doc-rq-card">
            <div className="text-center">
              <div className="img-height">
                <LazyLoader src={Kyc} className={'img-fluid'} width={"320"} height={"240"} alt={"KYC Documents for Individual Loan"}/>
              </div>
              <h3 className="title-doc">KYC</h3>
            </div>
              <ul className="list-item">
                <li>ID Proof</li>
                <li>Address Proof</li>
                <li>Pan Card/Form 60</li>
              </ul>
          </div>
      </div>
      <div className="col-xl-5 col-md-6">
      <div className="Doc-rq-card">
          <div className="text-center">
            <div className="img-height">
              <LazyLoader src={incomeProof} className={'img-fluid'} width={"267"} height={"267"} alt={"Income Proof Documents for Individual Loan"}/>
            </div>
              <h3 className="title-doc">Income Proof</h3>
          </div>
            <ul className="list-item">
          
              <li>Last Income tax return / Form 16</li>
              <li>Proof of Service Vintage</li>
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
