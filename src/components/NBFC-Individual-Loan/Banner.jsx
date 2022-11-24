
import React from "react";
import bannerimg from '../../assets/images/nbfc-indivial-loan/flexi-credit-banner.webp';
import LazyLoader from '../Common-features/LazyLoader';


function Banner() {

  return (
    <div>
      
     
    <section className="individual-loans-banner">
        <div className="container">
            <div className="row gx-5">
                <div className="col-md-6 lft-sec">
                    <h1 className="big-ttl">Individual Loan</h1>
                    <p className="para">At Choice Finserv we understand the value of personal aspirations and the value of assistance that is often required to fulfil such aspirations. That’s why we offer various individual loans with easy terms.</p>
                </div>
                <div className="col-md-6">
                    <div className="rightsec">
                        <LazyLoader src={bannerimg} alt={"Loans"} className={"img-fluid"} width={"586"} height={"366"} />
                       
                    </div>
                </div>
            </div>
        </div>
    </section>

    

   
    
    </div>
  );
}

export default Banner;
