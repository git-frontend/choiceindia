import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import img1 from '../../assets/images/mutual-funds-investment/hdfc-mutual-fund.webp'
import img2 from '../../assets/images/mutual-funds-investment/icici-prudential-mutual-fund.webp'
import img3 from '../../assets/images/mutual-funds-investment/sbi-mutual-fund.webp'
import img4 from '../../assets/images/mutual-funds-investment/birla-sun-life-mutual-fund.webp'
import img5 from '../../assets/images/mutual-funds-investment/kotak-mutual-fund.webp'
import { Link } from "react-router-dom";
import LazyLoader from '../Common-features/LazyLoader';
import utils from "../../Services/utils";

function MFPartner() {

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: true,
    slidesToShow: 5,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };


  return (
    <div>

      <section className="mf-partner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first">Our Partner mutual fund houses</h2>
              <div className="">
                <Slider {...settings} className="partner-slider">
                  <a className="part-item" href="/amc/hdfc-mutual-fund">
                    <LazyLoader src={img1} alt={"HDFC Mutual Fund"} className={"img-fluid img-hover"} width={"250"} height={"150"} />
                  </a>
                  <a className="part-item" href="/amc/icici-prudential-mutual-fund">
                    <LazyLoader src={img2} alt={"ICICI Prudential Mutual Fund"} className={"img-fluid img-hover"} width={"250"} height={"150"} />
                  </a>
                  <a className="part-item" href="/amc/sbi-mutual-fund">
                    <LazyLoader src={img3} alt={"SBI Mutual Fund"} className={"img-fluid img-hover"} width={"250"} height={"150"} />
                  </a>
                  <a className="part-item" href="/amc/aditya-birla-sun-life-mutual-fund">
                    <LazyLoader src={img4} alt={"Birla Sun Life Mutual Fund"} className={"img-fluid img-hover"} width={"250"} height={"150"} />
                  </a>
                  <a className="part-item" href="/amc/kotak-mahindra-mutual-fund">
                    <LazyLoader src={img5} alt={"Kotak Mutual Fund"} className={"img-fluid img-hover"} width={"250"} height={"150"} />
                  </a>
                </Slider>
              </div>
              <div className="mf-partner-explore-btn">
                <Link to="/amc" onClick={() => {
                utils.pushDataLayerEvent({
                  'event': 'mf_explore_more_amc_btn',
                  'page_path': window.location.pathname,
                  'page_url': window.location.href,
                  'lead_source': 'choiceindia',
                  'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
              })
              }}><span className="btn-bg btn-bg-dark">Explore more</span></Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

export default MFPartner;
