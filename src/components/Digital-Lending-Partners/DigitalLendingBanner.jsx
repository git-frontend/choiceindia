import React from "react";
import { useState } from "react";
import "./digitalpartner.scss";
import choiceconnect from '../../assets/images/Digital-Lending-Partners/choice-connect.svg';
import seedsfincap from '../../assets/images/Digital-Lending-Partners/seeds-fincap.svg';
import cashinvoice from '../../assets/images/Digital-Lending-Partners/cashinvoice.svg';
import carefi from '../../assets/images/Digital-Lending-Partners/care-fi.svg';
import clubdiaries from '../../assets/images/Digital-Lending-Partners/clubdiaries.svg';
import walkfin from '../../assets/images/Digital-Lending-Partners/walkfin.svg';
import LazyLoader from '../Common-features/LazyLoader';

import NBFCMenu from '../Common-features/NBFCMenu';
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import meta_tags from "../../Data/MetaTags";

import {
  Link,
  useLocation,
} from 'react-router-dom';
import Slider from "react-slick";

document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
if (!(document.getElementById('link1') == null)) {
  document.getElementById('link1').remove();
  document.getElementById('link2').remove();
  document.getElementById('link3').remove();
  document.getElementById('link4').remove();
  document.getElementById('link5').remove();
  document.getElementById('link6').remove();

}

function DigitalLendingBanner() {

  const settings = {
    infinite: true,
    speed: 1000,
    arrows: true,
    slidesToShow: 3,
    autoplay: false,
    margin: 15,
    dots: true,
    autoplaySpeed: 800,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          adaptiveHeight: false,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  const location = useLocation();


  return (
    <div>
      <section className="digital-partner-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="digi-products-menu">
                <NBFCMenu />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-ttl mb-4 digi-title">
                Lending Partners
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <div className="carditem-list"> */}
              <Slider {...settings} className="carditem-list">
                <div className="digital-carditem">
                  <span className="digiimg">
                    <LazyLoader src={choiceconnect} alt={"Choice Connect"} className={"img-fluid"} width={"138"} height={"59"} />

                  </span>
                  <h3 className="digi-card-title">
                    Choice International Ltd.
                  </h3>
                  <p className="digi-subtext">
                    Choice Group, incorporated in 1992, is a financial institution which finds its legacy in solving financial problems and bridging gaps for individuals, institutions and governments.
                  </p>
                  <a href="https://choiceconnect.in/" target="_blank"><span className="knw-btn">Know More</span></a>
                </div>
                <div className="digital-carditem">
                  <span className="digiimg">
                    <LazyLoader src={seedsfincap} alt={"Seeds Fincap"} className={"img-fluid"} width={"222"} height={"80"} />
                  </span>
                  <h3 className="digi-card-title">
                    Seeds Fincap Pvt Ltd
                  </h3>
                  <p className="digi-subtext">
                    SEEDS FINCAP PVT. LTD. is a Delhi NCR-based non-deposit-taking NBFC. With its headquarters in Gurugram (erstwhile ‘Gurgaon), its aim to serve a million MSMEs - Micro, Small, and Medium Enterprises in India in this decade!
                  </p>
                  <a href="https://www.seedsfincap.com/" target="_blank"> <span className="knw-btn">Know More</span></a>
                </div>
                <div className="digital-carditem">
                  <span className="digiimg">
                    <LazyLoader src={cashinvoice} alt={"Cashinvoice"} className={"img-fluid"} width={"264"} height={"47"} />
                  </span>
                  <h3 className="digi-card-title">
                    Indinvoice Tech Solutions Pvt Ltd
                  </h3>
                  <p className="digi-subtext">
                    Cashinvoice leverages technology to transform supply chain finance. Their mission is to help corporates of all sizes unlock value locked within the supply chain to optimize their working capital more efficiently.
                  </p>
                  <a href="https://cashinvoice.in/" target="_blank"><span className="knw-btn">Know More</span></a>
                </div>
              </Slider>

              {/* </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* <div className="carditem-list"> */}
              <Slider {...settings} className="carditem-list">
                <div className="digital-carditem digital-carditem2">
                  <span className="digiimg2">
                    <LazyLoader src={carefi} alt={"Choice Connect"} className={"img-fluid"} width={"183"} height={"59"} />

                  </span>
                  <h3 className="digi-card-title">
                  Care.fi Technological Solutions Private Limited
                  </h3>
                  <p className="digi-subtext">
                  Healthcare OS Made smart, ready for the future. Building a full stack credit-to-commerce play solving critical challenges in our entire healthcare ecosystem. They’re a passionate team sprinting to solve the most critical challenges in India’s healthcare sector, with founders armed with deep insights into the confluence of healthcare, finance and commerce.
                  </p>
                  <a href="https://www.carefi.in/" target="_blank"><span className="knw-btn">Know More</span></a>
                </div>
                <div className="digital-carditem digital-carditem2">
                  <span className="digiimg2">
                    <LazyLoader src={clubdiaries} alt={"Seeds Fincap"} className={"img-fluid"} width={"190"} height={"108"} />
                  </span>
                  <h3 className="digi-card-title">
                  Clubdiaries Technologies Private Limited
                  </h3>
                  <p className="digi-subtext">
                  They started NuShala to fill the gap in finances of private schools. Today, they are covering more than 20,000 students across schools to helps school owners run their school smoothly and drive growth through focussed execution. In the past 12 months, they have created a seamless product for schools in partnership with the leading financial institutions in India to solve the working capital and collection issues of schools for good.
                  </p>
                  <a href="https://www.nushala.com/" target="_blank"> <span className="knw-btn">Know More</span></a>
                </div>
                <div className="digital-carditem digital-carditem2">
                  <span className="digiimg2">
                    <LazyLoader src={walkfin} alt={"Cashinvoice"} className={"img-fluid"} width={"263"} height={"80"} />
                  </span>
                  <h3 className="digi-card-title">
                  Walkfin Financing Services Private Limited
                  </h3>
                  <p className="digi-subtext">
                  WALKfin Financing Services Private Limited is a new age fintech company offering quick, hassle-free and safe lending solutions to businesses in the form of Distributor Credit and Retailer Credit. Their efforts are to financing the needs of FMCG distributors and Retailers in the underserved areas of our economy. This way, they hope to address the credit issue plaguing our country and help both FMCG distributors and retailers in securing their future.
                  </p>
                  <a href="https://walkfin.com/" target="_blank"><span className="knw-btn">Know More</span></a>
                </div>
              </Slider>

              {/* </div> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default DigitalLendingBanner;