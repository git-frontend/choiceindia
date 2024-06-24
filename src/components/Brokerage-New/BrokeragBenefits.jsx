
import React from "react";
import advice from '../../assets/images/Brokerage-New/Low-Brokerage-Charges-with-Professional-Advice.svg';
import search from '../../assets/images/Brokerage-New/Low-Brokerage-Charges-with-Expert-Research.svg';
import conveniece from '../../assets/images/Brokerage-New/Invest-Conveniently-at-low-brokerage.svg';
import service from '../../assets/images/Brokerage-New/Best-brokerage-charges-with-superior-service.svg';
import learning from '../../assets/images/Brokerage-New/Learning-resources-at-low-brokerage-charges.svg';
import LazyLoader from '../Common-features/LazyLoader';
import Slider from "react-slick";
function BrokeragBenefits() {
  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 4,
    autoplay: true,
    dots: true,
    autoplaySpeed: 1000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay:true
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

          <section className="brokerag-brokerag">
              <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                          <div className="title-tab">
                              <h2 className="title-secnd">Full-Service Broker Benefits</h2>
                              <p>Unlike discount brokers, Choice offers you more value for your money.</p>
                          </div>
                    </div>
                      <div className="col-md-12">
                              <div className="team-list">
                                  <Slider {...settings} className="team-list-slider">
                                      <div className="team-item ">
                                          <span className="img-itm">
                                              <LazyLoader src={advice} className={"img-fluid"} width={"72"} height={"72"} alt={"Low Brokerage Charges with Professional Advice"} />
                                          </span>
                                          <div className="namedesg">
                                              <h4 className="title">Professional Advice</h4>
                                              <p className="text">Personalized advice based on your financial goals.
</p>
                                          </div>
                                      </div>
                                      <div className="team-item ">
                                          <span className="img-itm">
                                              <LazyLoader src={search} className={"img-fluid"} width={"72"} height={"72"} alt={"Low Brokerage Charges with Expert Research"} />
                                          </span>
                                          <div className="namedesg">
                                              <h4 className="title">Research & Analysis</h4>
                                              <p className="text">Market trend analysis and insights for informed decisions.
</p>
                                          </div>


                                      </div>
                                      <div className="team-item ">
                                          <span className="img-itm">
                                              <LazyLoader src={conveniece} className={"img-fluid"} width={"72"} height={"72"} alt={"Invest Conveniently at low brokerage"} />
                                          </span>
                                          <div className="namedesg">
                                              <h4 className="title">Convenience</h4>
                                              <p className="text">Single point of contact for all financial services.
</p>
                                          </div>
                                      </div>
                                      <div className="team-item ">
                                          <span className="img-itm">
                                              <LazyLoader src={service} className={"img-fluid"} width={"72"} height={"72"} alt={"Best brokerage charges with superior service"} />
                                          </span>
                                          <div className="namedesg">
                                              <h4 className="title">Superior Service</h4>
                                              <p className="text">Dedicated customer service with personal attention.</p>
                                          </div>
                                      </div>
                                      <div className="team-item ">
                                          <span className="img-itm">
                                              <LazyLoader src={learning} className={"img-fluid"} width={"72"} height={"72"} alt={"Learning resources at low brokerage charges"} />
                                          </span>
                                          <div className="namedesg">
                                              <h4 className="title">Financial Learning</h4>
                                              <p className="text">Educational resources for understanding investing.</p>
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

export default BrokeragBenefits;
