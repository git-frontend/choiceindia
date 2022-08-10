
import React from "react";
import Navbar from './Navbar';
import image1 from '../../assets/images/about-us/vinita-patodia.webp';
import image2 from '../../assets/images/about-us/kamal-sir.webp';
import image3 from '../../assets/images/about-us/suyash-patodia.webp';
import image4 from '../../assets/images/about-us/arun-sir.webp';
import image5 from '../../assets/images/about-us/ajay-sir.webp';
import image6 from '../../assets/images/about-us/subodh-kumar-agarwal.webp';
import image7 from '../../assets/images/about-us/person-img2.webp';
import image8 from '../../assets/images/about-us/sudha-bhushan.webp';
import image9 from '../../assets/images/about-us/sandeep-singh.webp';
import image10 from '../../assets/images/about-us/kanhaiyalal-beriwal.webp';

import Slider from "react-slick";
import LazyLoader from '../Common-features/LazyLoader';
function InvestorInfoMenu() {
    const settings = {
        infinite: true,
        speed: 2000,
        arrows: false,
        slidesToShow: 4,
        autoplay: true,
        margin: 15,
        dots: false,
        autoplaySpeed: 800,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              adaptiveHeight: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
    
            },
          },
        ],
      };
  return (
    <div>
      
     
    <section className="Investormenu mt5">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h2 className="title">Board Of Directors</h2>
                    <Navbar />
                </div>
              
            </div>
            <div className="row">
                <div className="col-md-12">
                <div className="team-list">
                    <Slider {...settings} className="team-list-slider">
                    <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image1} className={"img-fluid"} width={"224"} height={"349"} alt={"Loading"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                        <h5>Mrs. Vinita Patodia</h5>
                        <p className="designation">Non-Executive Chairperson</p>
                        </div>


                    </div>
                    <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image2} className={"img-fluid"} width={"224"} height={"349"} alt={"Loading"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                        <h5>Mr. Kamal Poddar</h5>
                        <p className="designation">Managing Director</p>
                        </div>


                    </div>
                    <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image3} className={"img-fluid"} width={"224"} height={"349"} alt={"Loading"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                        <h5>Mr. Suyash Patodia</h5>
                        <p className="designation">Joint Managing Director</p>
                        </div>


                    </div>
                    <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image4} className={"img-fluid"} width={"224"} height={"349"} alt={"Loading"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                        <h5 className="name">Mr. Arun Poddar</h5>
                        <p className="designation">Executive Director &amp; CEO</p>
                        </div>

                    </div>
                    
                    <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image5} className={"img-fluid"} width={"224"} height={"349"} alt={"Loading"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                        <h5>Mr. Ajay Kejriwal</h5>
                        <p className="designation">Executive Director</p>
                        </div>

                    </div>

                    <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image6} className={"img-fluid"} width={"224"} height={"349"} alt={"Loading"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                        <h5>Mr. Subodh Kumar Agarwal</h5>
                        <p className="designation">Independent Director</p>
                        </div>


                    </div>
                    <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image7} className={"img-fluid"} width={"224"} height={"349"} alt={"Loading"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                        <h5>Mr. A. K. Thakur</h5>
                        <p className="designation">Independent Director</p>
                        </div>


                    </div>
                    <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image8} className={"img-fluid"} width={"224"} height={"349"} alt={"Loading"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                        <h5>Mrs. Sudha Bhushan</h5>
                        <p className="designation">Independent Director</p>
                        </div>


                    </div>
                    <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image9} className={"img-fluid"} width={"224"} height={"349"} alt={"Loading"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                        <h5 className="name">Mr. Sandeep Singh</h5>
                        <p className="designation">Independent Director</p>
                        </div>

                    </div>
                    
                    <div className="team-item">
                        <span className="img-itm">
                        <LazyLoader src={image10} className={"img-fluid"} width={"224"} height={"349"} alt={"Loading"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                        </span>
                        <div className="namedesg">
                        <h5>Mr. Kanhaiya Lal Berwal</h5>
                        <p className="designation">Independent Director</p>
                        </div>

                    </div>
                    </Slider>
                
                </div>
                <div class="mt5 d-flex justify-content-center cursor-pointer"><a class="btn-bg">Explore All</a></div>
                </div>
          </div>
           
        </div>
    </section>
      
    
    </div>
  );
}

export default InvestorInfoMenu;
