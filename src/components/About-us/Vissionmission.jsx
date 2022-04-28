
import React from "react";
import "../../assets/css/aboutus.scss";
import Bannerimage from '../../assets/images/about-us/banner.png';

function Vissionmission() {

  return (
    <div>


      <section className="Vissionmissionsection">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-md-5">
              <img src={Bannerimage} alt="Banner Images" className="img-fluid "></img>
            </div>
            <div class="col-md-7 "><h1 class="title">Vision &amp; Mission</h1><p class="para">सर्वश्रेष्ठ </p><p class="para">Our mission is to consistently become better at what we do by serving our clients, shareholders and society with ideas and products to promote financial growth for everyone and contributing to a sustainable future.
</p>
              <p class="para">Our vision is to empower our clients financially by delivering innovation and prosperity through our offerings. We aim to keep moving forward with a blend of conventional wisdom and new ideas.</p></div>

          </div>
        </div>
      </section>


    </div>
  );
}

export default Vissionmission;
