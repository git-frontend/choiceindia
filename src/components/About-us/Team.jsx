import React, { useState, useEffect } from "react";


import image1 from '../../assets/images/about-us/vinita-patodia.webp';
import image2 from '../../assets/images/about-us/kamal-poddar.webp';
import image3 from '../../assets/images/about-us/suyash-patodia.webp';
import image4 from '../../assets/images/about-us/arun-poddar.webp';
import image5 from '../../assets/images/about-us/ajay-kejriwal.webp';
import image6 from '../../assets/images/about-us/subodh-kumar-agarwal.webp';
import image7 from '../../assets/images/about-us/akthakur.webp';
import image8 from '../../assets/images/about-us/sudha-bhushan.webp';
import image9 from '../../assets/images/about-us/sandeep-singh.webp';
import image10 from '../../assets/images/about-us/kanhaiyalal-beriwal.webp';

import Slider from "react-slick";
import LazyLoader from '../Common-features/LazyLoader';

function Team() {
  const [check, setcheck] = useState(false);
  const settings = {
    infinite: true,
    speed: 2000,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    margin: 15,
    dots: true,
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

      <section className="managementteam">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="heading">Board of Directors</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="team-list">
                <Slider {...settings} className="team-list-slider">
                  <div className="">
                    <div onClick={() => { setcheck(true) }} className="team-item">
                      <span className="img-itm">
                        <LazyLoader src={image1} className={"img-fluid"} width={"224"} height={"349"} alt={"Vinita Patodia"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                      </span>
                      <div className="namedesg">
                        <h5>Mrs. Vinita Patodia</h5>
                        <p className="designation">Non-Executive Chairperson</p>
                      </div>


                    </div>
                    {
                    check ?
                    <div className="content-extra">
                      <span className="icon-table cursor-pointer" onClick={() => { setcheck(false) }}>close</span>
                        <p>loream</p>
                    </div>:
                    ""
                    }
                  </div>
                  <div className="">
                    <div className="team-item">
                      <span className="img-itm">
                        <LazyLoader src={image1} className={"img-fluid"} width={"224"} height={"349"} alt={"Vinita Patodia"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                      </span>
                      <div className="namedesg">
                        <h5>Mrs. Vinita Patodia</h5>
                        <p className="designation">Non-Executive Chairperson</p>
                      </div>


                    </div>
                  </div>
                  <div className="">
                    <div className="team-item">
                      <span className="img-itm">
                        <LazyLoader src={image1} className={"img-fluid"} width={"224"} height={"349"} alt={"Vinita Patodia"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                      </span>
                      <div className="namedesg">
                        <h5>Mrs. Vinita Patodia</h5>
                        <p className="designation">Non-Executive Chairperson</p>
                      </div>


                    </div>
                  </div>
                  <div className="">
                    <div className="team-item">
                      <span className="img-itm">
                        <LazyLoader src={image1} className={"img-fluid"} width={"224"} height={"349"} alt={"Vinita Patodia"} />
                        {/* <img src={imageP} width="224" height="349" className="img-fluid" alt="loading" /> */}
                      </span>
                      <div className="namedesg">
                        <h5>Mrs. Vinita Patodia</h5>
                        <p className="designation">Non-Executive Chairperson</p>
                      </div>


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
