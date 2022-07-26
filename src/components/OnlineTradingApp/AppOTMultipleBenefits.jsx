import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";

import Vector1 from '../../assets/images/online-trading-app/free-demat.svg';
import Vector2 from '../../assets/images/online-trading-app/zero-amc.svg';
import Vector3 from '../../assets/images/online-trading-app/expert-research-advisory.svg';
import Vector4 from '../../assets/images/online-trading-app/dedicated-relationship.svg';

function AppOTMultipleBenefits() {
return (
<div className='App-main'>
   <section className='app-cont-sec'>
      <div className='container'>
         <div className='row'>
            <div className='col-md-12'>
               <div className="heading-sec">
                  <h3 className="title-secnd">Trading App with Multiple Benefits</h3>
               </div>
               <div className="row g-4 py-5 ">
                  <div className="col-md-3">
                     <div className="inline-block">
                        <img src={Vector1} className="img-fluid" alt='Free Demat Account' width="96" height="96" />
                     </div>
                     <h4 className="mt-4"><strong>Free Demat Account</strong></h4>
                  </div>
                  <div className="col-md-3">
                     <div className="inline-block">
                        <img src={Vector2} className="img-fluid" alt='Free Demat Account' width="96" height="96" />
                     </div>
                     <h4 className="mt-4"><strong>Zero AMC for First Year</strong></h4>
                  </div>
                  <div className="col-md-3">
                     <div className="inline-block">
                        <img src={Vector3} className="img-fluid" alt='Free Demat Account' width="96" height="96" />
                     </div>
                     <h4 className="mt-4"><strong>Free Expert Research from TV Panelist</strong></h4>
                  </div>
                  <div className="col-md-3">
                     <div className="inline-block">
                        <img src={Vector4} className="img-fluid" alt='Free Demat Account' width="96" height="96" />
                     </div>
                     <h4 className="mt-4"><strong>Dedicated Relationship Manager</strong></h4>
                  </div>
               </div>
            </div>
            <div className="wrap-app-links d-flex justify-content-center">
               <a href="#" target="_blank" rel="noreferrer" className='btn-bg'>
               <span className='whitecolor'>Open Free Account</span>
               </a>
            </div>
         </div>
      </div>
   </section>
</div>
);
}
export default AppOTMultipleBenefits;