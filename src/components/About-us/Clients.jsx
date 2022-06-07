
import React from "react";
import Marquee from 'react-fast-marquee';
import nitiaayog from '../../assets/images/about-us/nitiaayog.svg';
import libertyinsurance from '../../assets/images/about-us/libertyinsurance.svg';
import aadhar from '../../assets/images/about-us/aadhar.svg';
import navkar from '../../assets/images/about-us/navkar.svg';
import idea from '../../assets/images/about-us/idea.svg';
import LazyLoader from '../Common-features/LazyLoader';

function Clients() {
  return (
    <div>

      <section className="Clients">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Our Marquee Clients</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="client-list">
                
                  <Marquee direction="left" speed={150} delay={1} pauseOnHover={true} pauseOnClick={true} className="client-list-slider">
                   <div className="image_wrapper">
                   <LazyLoader src={nitiaayog} alt="" />
                     {/* <img src={nitiaayog} alt="" /> */}
                   </div>
                   <div className="image_wrapper">
                   <LazyLoader src={libertyinsurance} alt="" />
                     {/* <img src={libertyinsurance} alt="" /> */}
                   </div>
                   <div className="image_wrapper">
                   <LazyLoader src={aadhar} alt="" />
                     {/* <img src={aadhar} alt="" /> */}
                   </div>
                   <div className="image_wrapper">
                   <LazyLoader src={navkar} alt="" />
                     {/* <img src={navkar} alt="" /> */}
                   </div>
                   <div className="image_wrapper">
                   <LazyLoader src={idea} alt="" />
                     {/* <img src={idea} alt="" /> */}
                   </div>
                   <div className="image_wrapper">
                   <LazyLoader src={nitiaayog} alt="" />
                     {/* <img src={nitiaayog} alt="" /> */}
                   </div>
                   <div className="image_wrapper">
                   <LazyLoader src={libertyinsurance} alt="" />
                     {/* <img src={libertyinsurance} alt="" /> */}
                   </div>
                   <div className="image_wrapper">
                   <LazyLoader src={aadhar} alt="" />
                     {/* <img src={aadhar} alt="" /> */}
                   </div>
                   <div className="image_wrapper">
                   <LazyLoader src={navkar} alt="" />
                     {/* <img src={navkar} alt="" /> */}
                   </div>
                   <div className="image_wrapper">
                   <LazyLoader src={idea} alt="" />
                     {/* <img src={idea} alt="" /> */}
                   </div>
                 </Marquee>

                  </div>
                </div>
              </div>
            </div>
      </section>


    </div>
  );
}

export default Clients;
