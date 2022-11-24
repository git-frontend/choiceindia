
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
      <div className="col-md-5">
      <div className="Doc-rq-card">
            <div className="text-center">
              <div className="img-height">
                <LazyLoader src={Kyc} className={'img-fluid'} width={"311"} height={"212"} alt={"KYC"}/>
              </div>
              <h3 className="title-doc">KYC</h3>
            </div>
              <ul className="list-item">
                <li>ID Proof</li>
                <li>Aadhar Card</li>
              </ul>
          </div>
      </div>
      <div className=" col-md-5">
      <div className="Doc-rq-card">
          <div className="text-center">
            <div className="img-height">
              <LazyLoader src={incomeProof} className={'img-fluid'} width={"311"} height={"209"} alt={"Income Proof"}/>
            </div>
              <h3 className="title-doc">Income Proof</h3>
          </div>
            <ul className="list-item">
              <li>ITR of minimum 2 years</li>
              <li>Turnover of Business</li>
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
