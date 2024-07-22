
import React from "react";
import vissionmission from '../../assets/images/about-us/choice-vision-mission.webp';
import LazyLoader from '../Common-features/LazyLoader';

function Vissionmission() {

  return (
    <div>


      <section className="Vissionmissionsection">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-md-5 order2">
              <div className="leftimages" >
              <LazyLoader src={vissionmission} className={"img-fluid"} width={"644"} height={"644"} alt={"Banner"} />               
              </div>

            </div>
            <div className="col-md-7 ">
              <div className="rightsec">
                <h2 className="heading">Vision &amp; Mission</h2>
                <p className="yellow">सर्वश्रेष्ठ </p>
                <p className="para">Our mission is to consistently become better at what we do by serving our clients, shareholders and society with ideas and products to promote financial growth for everyone and contributing to a sustainable future.</p>
                <p className="para">Our vision is to empower our clients financially by delivering innovation and prosperity through our offerings. We aim to keep moving forward with a blend of conventional wisdom and new ideas.</p></div>
            </div>


          </div>
        </div>
      </section>


    </div>
  );
}

export default Vissionmission;
