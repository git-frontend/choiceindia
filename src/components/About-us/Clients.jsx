
import React from "react";
import nitiaayog from '../../assets/images/about-us/nitiaayog.svg';
import libertyinsurance from '../../assets/images/about-us/libertyinsurance.svg';
import aadhar from '../../assets/images/about-us/aadhar.svg';
import navkar from '../../assets/images/about-us/navkar.svg';
import idea from '../../assets/images/about-us/idea.svg';

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
                <div class="Marquee">
                  <div class="Marquee-content">
                    <div class="Marquee-tag"> <img src={nitiaayog} className="img-fluid" alt='Loading' /></div>
                    <div class="Marquee-tag"> <img src={libertyinsurance} className="img-fluid" alt='Loading' /></div>
                    <div class="Marquee-tag"> <img src={aadhar} className="img-fluid" alt='Loading' /></div>
                    <div class="Marquee-tag"> <img src={navkar} className="img-fluid" alt='Loading' /></div>
                    <div class="Marquee-tag"> <img src={idea} className="img-fluid" alt='Loading' /></div>
                    <div class="Marquee-tag"> <img src={nitiaayog} className="img-fluid" alt='Loading' /></div>
                    <div class="Marquee-tag"> <img src={libertyinsurance} className="img-fluid" alt='Loading' /></div>
                    <div class="Marquee-tag"> <img src={navkar} className="img-fluid" alt='Loading' /></div>

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

export default Clients;
