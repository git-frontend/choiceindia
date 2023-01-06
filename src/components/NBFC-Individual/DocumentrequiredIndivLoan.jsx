
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import Kycimage from '../../assets/images/term-loans/personal-documents-for-term-loan-application.svg';
import incomeProof from '../../assets/images/nbfc-indivial-loan/incomeproof.svg';

function Documentrequired() {

  return (
    <div>
      
      <section className="Doc-rqrd-sec">
<div className="container">
    <div className="row">
        <div className="col-md-12">
        <div className="Doc-rqrd-heading">
            <h2 className="title-first">Documents Required <br/>for Flexi Credit </h2>
          </div>
        </div>
    </div>
    <div className="row justify-content-center h-100">
      <div className="col-xl-5 col-md-6">
      <div className="Doc-rq-card cap-right">
            <div className="text-center">
              <div className="img-height">
                <LazyLoader src={Kycimage} className={'img-fluid'} width={"218"} height={"254"} alt={"KYC Documents for Individual Loan"}/>
              </div>
              <h3 className="title-doc">For KYC</h3>
            </div>
              <ul className="list-item">
                <li>ID Proof</li>
                <li>Address Proof</li>
                <li>Pan Card/Form 60</li>
              </ul>
          </div>
      </div>
      <div className="col-xl-5 col-md-6">
      <div className="Doc-rq-card cap-left">
          <div className="text-center">
            <div className="img-height">
              <LazyLoader src={incomeProof} className={'img-fluid'} width={"305"} height={"255"} alt={"Income Proof Documents for Individual Loan"}/>
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
