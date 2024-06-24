
import React from "react";
import bannerimg from '../../assets/images/nbfc-loans/apply-for-instant-loan-online.webp'
import LazyLoader from '../Common-features/LazyLoader';


function Banner() {

  return (
    <div>
      
     
    <section className="loans-bannersection">
        <div className="container">
            <div className="row gx-5 align-items-center">
                <div className="col-xl-6 col-md-6 lft-sec">
                    <h1 className="big-ttl">Loans</h1>
                    <p className="para">Choice Finserv, our tech enabled platform dedicated for providing loans, with special focus on the under-served and unserved parts of the MSME sector is bridging the credit gap by facilitating efficient service delivery, better risk management and seamless lending operations.</p>
                </div>
                <div className="col-md-6">
                    <div className="rightsec d-none d-sm-block">
                        <LazyLoader src={bannerimg} alt={"Apply for Instant Loan Online"} className={"img-fluid"} width={"586"} height={"366"} />
                        
                    </div>
                </div>
            </div>
        </div>
    </section>

    

   
    
    </div>
  );
}

export default Banner;
