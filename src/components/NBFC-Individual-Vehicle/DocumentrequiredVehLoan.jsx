
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import Kycimage from '../../assets/images/term-loans/personal-documents-for-term-loan-application.svg';

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
            <div className="col-md-8">
              <div className="Doc-rq-card vehcard">
                <div className="individiualvehloan">
                  <div className="img-height">
                    <LazyLoader src={Kycimage} className={'img-fluid'} width={"218"} height={"254"} alt={"KYC Documents for Individual Loan"} />
                  </div>
                  <div className=" vehicle-right ">
           
                  <h3 className="title-doc text-left ">For KYC</h3>
                
                <ul className="list-item">
                  <li >Adhar card</li>
                  <li>Pan Card</li>
                  <li>Driving Licence</li>
                  <li>Income Proof</li>
                </ul>
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

export default Documentrequired;
