
import React from "react";
import Innovation from '../../assets/images/about-us/innovation.svg';
import Optimism from '../../assets/images/about-us/Optimism.svg';
import Consistency from '../../assets/images/about-us/Consistency.svg';
import Empowerment from '../../assets/images/about-us/Empowerment.svg';
import Commitment from '../../assets/images/about-us/Commitment.svg';
import Honesty from '../../assets/images/about-us/Honesty.svg';
import LazyLoader from '../Common-features/LazyLoader';
import Slider from "react-slick";
function CoreValues() {
  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 3,
    autoplay: true,
    margin: 15,
    dots: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
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

      <section className="corevalues">
        <div className="container-fluid">
          <div className="row">


            <div className="wrap">
              <div className="col-md-5 col-12">
                <div className="card">
                  <h2 className="cardtile">Our Core Values</h2>
                  <p className="cardsubtext">Who we are is reflected in what we practice. Our values are the guiding light for everything we do at choice.</p>
                </div>
              </div>
              <div className="col-md-7 col-12">
                <div className="team-list">
                  <Slider {...settings} className="team-list-slider">



                    <div className="team-item pr-5">
                      <span className="img-itm">
                        <LazyLoader src={Commitment} className={"img-fluid"} width={"70"} height={"70"} alt={"Commitment"} />                       
                      </span>
                      <div className="namedesg">
                        <h4 className="title">Commitment</h4>
                        <p className="text">We are dedicated to serve you the best</p>
                      </div>


                    </div>
                    <div className="team-item pr-5">
                      <span className="img-itm">
                        <LazyLoader src={Honesty} className={"img-fluid"} width={"70"} height={"70"} alt={"Honesty"} />
                      </span>
                      <div className="namedesg">
                        <h4 className="title">Honesty</h4>
                        <p className="text">Our conduct is guided by integrity &amp; transparency</p>
                      </div>


                    </div>
                    <div className="team-item pr-5">
                      <span className="img-itm">
                        <LazyLoader src={Optimism} className={"img-fluid"} width={"70"} height={"70"} alt={"Optimism"} />
                      </span>
                      <div className="namedesg">
                        <h4 className="title">Optimism</h4>
                        <p className="text">Positivity is a virtue that comes by practice</p>
                      </div>
                    </div>
                    <div className="team-item pr-5">
                      <span className="img-itm">
                        <LazyLoader src={Innovation} className={"img-fluid"} width={"70"} height={"70"} alt={"Innovation"} />
                      </span>
                      <div className="namedesg">
                        <h4 className="title">Innovation</h4>
                        <p className="text">The only way to win is by being creative</p>
                      </div>


                    </div>
                    <div className="team-item pr-5">
                      <span className="img-itm">
                        <LazyLoader src={Consistency} className={"img-fluid"} width={"70"} height={"70"} alt={"Consistency"} />
                      </span>
                      <div className="namedesg">
                        <h4 className="title">Consistency</h4>
                        <p className="text">Only factor which is more important than perfection</p>
                      </div>


                    </div>
                    <div className="team-item pr-5">
                      <span className="img-itm">
                        <LazyLoader src={Empowerment} className={"img-fluid"} width={"70"} height={"70"} alt={"Empowerment"} />
                      </span>
                      <div className="namedesg">
                        <h4 className="title">Empowerment</h4>
                        <p className="text">Hustle today to empower your tomorrow</p>
                      </div>


                    </div>
                  </Slider>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>


    </div>
  );
}

export default CoreValues;
