
import React from "react";
import Bannerimage from '../../assets/images/investor-info/investor-info-banner.webp';

function Banner() {

  return (
    <div>
      
     
    <section className="bannersection">
        <div className="container-fluid p0">
            <div className="wrap">
                <div className="text">
                    <h1 className="title">Investor's<br/> Info</h1>

                 
                </div>
                <div className="img">
                   
                          <img src={Bannerimage} alt="Banner Images" className="img-fluid" width={'1149'} height={'591'} />
                  
                </div>
            </div>
        </div>
    </section>
      
    
    </div>
  );
}

export default Banner;
