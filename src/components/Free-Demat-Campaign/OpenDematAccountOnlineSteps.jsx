
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import StepsBanner from '../../assets/images/free-demat-compaign/open-demat-account-online-in-four-steps.webp';


function DematAccountOnlineSteps() {
  return (
    <div>
    <section className="open-account-steps">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                   <h2 className="title-secnd text-center">Open Demat Account to Get <br/><span>Free Research Calls</span></h2>
                </div>
                {/* <img src={StepsBanner} alt="" className="img-fluid" height={522} width={796}/> */}
             
            </div>
        </div>
    </section>
    </div>
  );
}

export default DematAccountOnlineSteps;
