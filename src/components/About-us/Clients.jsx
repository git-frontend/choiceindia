
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
                    <LazyLoader src={nitiaayog} className={'img-fluid'} width={"313"} height={"191"} alt="" />
                    {/* <img src={nitiaayog} width="209" height="191" alt="" />  */}
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={libertyinsurance} className={'img-fluid'} width={'313'} height={'111'} alt="" />
                    {/* <img src={libertyinsurance} width="313" height="111" alt="" /> */}
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={aadhar} className={'img-fluid'} width={'183'} height={'118'} alt="" />
                    {/* <img src={aadhar} width="183" height="118" alt="" /> */}
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={navkar} className={'img-fluid'} width={'307'} height={'208'} alt="" />
                    {/* <img src={navkar} width="307" height="208" alt="" /> */}
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={idea} className={'img-fluid'} width={'120'} height={'124'} alt="" />
                    {/* <img src={idea} width="120" height="124" alt="" /> */}
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={nitiaayog} className={'img-fluid'} width={'209'} height={'191'} alt="" />
                    {/* <img src={nitiaayog} width="209" height="191" alt="" /> */}
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={libertyinsurance} className={'img-fluid'} width={'313'} height={'111'} alt="" />
                    {/* <img src={libertyinsurance} width="313" height="111" alt="" /> */}
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={aadhar} className={'img-fluid'} width={'183'} height={'118'} alt="" />
                    {/* <img src={aadhar} width="183" height="118" alt="" /> */}
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={navkar} className={'img-fluid'} width={'307'} height={'208'} alt="" />
                    {/* <img src={navkar} width="307" height="208" alt="" /> */}
                  </div>
                  <div className="image_wrapper">
                    <LazyLoader src={idea} className={'img-fluid'} width={'120'} height={'124'} alt="" />
                    {/* <img src={idea} width="120" height="124" alt="" /> */}
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
