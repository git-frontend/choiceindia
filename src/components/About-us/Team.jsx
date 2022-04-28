
import React from "react";
import "../../assets/css/aboutus.scss";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import image1 from '../../assets/images/about-us/kamal.png';
import image2 from '../../assets/images/about-us/sunilbagadia.png';
import image3 from '../../assets/images/about-us/arunpoddar.png';
// import image1 from '../../assets/images/about-us/banner.png';
// import image1 from '../../assets/images/about-us/banner.png';
import Slider from "react-slick";
function Team() {
    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 3,
        autoplay: false,
        margin:15,
        dots:false,
        autoplaySpeed: 1000,
        slidesToScroll: 3,
    };
  return (
    <div>
      
        <section className="managementteam">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                    <   h3 className="heading">Management Team</h3>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-12">
                  <div className="team-list">
                  <Slider {...settings} className="team-list-slider">
                      <div className="team-item">
                        <span className="img-itm">
                          <img src={image1} className="img-fluid" />
                        </span>
                        <div className="namedesg">
                            <h5>Name</h5>
                            <p className="designation">Designation</p>
                        </div>
                       
                        
                      </div>
                      <div className="team-item">
                        <span className="img-itm">
                          <img src={image2} className="img-fluid" />
                        </span>
                        <div className="namedesg">
                            <h5 className="name">Name</h5>
                            <p className="designation">Designation</p>
                        </div>
                        
                      </div>
                      <div className="team-item">
                        <span className="img-itm">
                          <img src={image3} className="img-fluid" />
                        </span>
                        <div className="namedesg">
                            <h5>Name</h5>
                            <p className="designation">Designation</p>
                        </div>
                        
                      </div>
                      <div className="team-item">
                        <span className="img-itm">
                          <img src={image1} className="img-fluid" />
                        </span>
                        <div className="namedesg">
                            <h5>Name</h5>
                            <p className="designation">Designation</p>
                        </div>
                        
                      </div>
                    
                    </Slider>
                  </div>
                </div>
              </div>
            </div>
        </section>
      
    
    </div>
  );
}

export default Team;
