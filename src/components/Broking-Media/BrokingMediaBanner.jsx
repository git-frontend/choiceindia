import React from "react";
import videoBg from '../../assets/images/insurance/insuringShield.mp4';
function BrokingMediaBanner() {
  
  return (
    <div>
            <section className="freatured_videos">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h1 className="title-first_new">Choice Broking Media</h1>
                  </div>
                </div>
                <div className="row align-items-center">
                  <div className="col-md-7">
                    <div className="leftsec">
                    <video src={videoBg} autoPlay loop muted className='banner-ved img-fluid ' width="100%" height="100%" />
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div className="rightsec">
                      <h2 className="title-secnd">Everyday finance in <br/> one place</h2>
                      <p className="datetitle">August 24, 2022</p>
                      <p className="subhead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, </p>
                      <a href="/"><span className="btn-bg-new">Read More</span></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
  );
}

export default BrokingMediaBanner;