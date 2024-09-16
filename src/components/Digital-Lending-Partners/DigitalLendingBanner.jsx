import React from "react";
import { useState, useEffect } from "react";
import "./digitalpartner.scss";
import choiceconnect from '../../assets/images/Digital-Lending-Partners/choice-connect.svg';
import seedsfincap from '../../assets/images/Digital-Lending-Partners/seeds-fincap.svg';
import cashinvoice from '../../assets/images/Digital-Lending-Partners/cashinvoice.svg';
import carefi from '../../assets/images/Digital-Lending-Partners/care-fi.svg';
import clubdiaries from '../../assets/images/Digital-Lending-Partners/clubdiaries.svg';
import walkfin from '../../assets/images/Digital-Lending-Partners/walkfin.svg';
import rapipay from '../../assets/images/Digital-Lending-Partners/rapipay.svg';
import LazyLoader from '../Common-features/LazyLoader';
import RapipayPdf from "../../assets/images/Digital-Lending-Partners/pdf/Rapipay_Doc.pdf";
import GrievancesRedressalPolicy from "../../assets/images/Digital-Lending-Partners/pdf/grievances-redressal-policy.pdf";
import PrivacyPolicy from "../../assets/images/Digital-Lending-Partners/pdf/cfpl-privacy-policy.pdf";
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
  const [view, setView] = useState({
    matches: window.innerWidth < 767 ? false : true,
  });
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
          adaptiveHeight: true,
        },
      },
    ],
  };
  const location = useLocation();
  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 767px)");
    mediaQuery.addListener(setView);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setView);
  }, []);

  return (
    <>
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
              {
                view && !view.matches ?
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
                    <div className="digital-carditem ">
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
                  :
                  <div className="carditem-list">
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
                  </div>
              }
            </div>

          </div>
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-ttl mb-4 digi-title">
              Digital Lending Partners
              </h1>
            </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                    <div className="carditem-list">
                      <div className="digital-carditem digital-carditem2">
                        <span className="digiimg2">
                          <a href="https://in.rapipay.com/" target="_blank">
                          <LazyLoader src={rapipay} alt={"rapipay"} className={"img-fluid"} width={"263"} height={"80"} />
                          </a>
                        </span>
                        <h3 className="digi-card-title">
                        RapiPay Fintech Private Limited
                        </h3>
                        <p className="digi-subtext">
                          RapiPay is driven by a vision to grow and lead digital banking as a service in the country with its financial super App NYE. Whether you’re a consumer, a retailer, or an MSME, you can bank upon us. For consumers, they offer a wide suite of banking & financial services, and for businesses, they have assisted payment services, POS solutions, and MSME loans.
                        </p>
                        <div><span className="knw-btn cursor-pointer" onClick={() => { window.open(RapipayPdf) }}>Know More</span></div>
                      </div>
                    </div>
              </div>

          </div>
          <div className="row">
            <div className="col-md-12">
              <h1 className="big-ttl mb-4 digi-title">
              Other Information
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
                  <div className="carditem-list other-information">
                    <div className="digital-carditem">
                      <h3 className="digi-card-title">Sachet Portal</h3>
                      <a href="https://sachet.rbi.org.in/" target="_blank">
                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.8346 41.2057H7.16797C5.74243 41.2057 4.37528 40.6394 3.36727 39.6314C2.35926 38.6234 1.79297 37.2563 1.79297 35.8307V7.16406C1.79297 5.73852 2.35926 4.37137 3.36727 3.36336C4.37528 2.35536 5.74243 1.78906 7.16797 1.78906H17.918C18.3931 1.78906 18.8489 1.97783 19.1849 2.31383C19.5209 2.64983 19.7096 3.10555 19.7096 3.58073C19.7096 4.05591 19.5209 4.51163 19.1849 4.84763C18.8489 5.18363 18.3931 5.3724 17.918 5.3724H7.16797C6.69279 5.3724 6.23707 5.56116 5.90107 5.89716C5.56507 6.23317 5.3763 6.68888 5.3763 7.16406V35.8307C5.3763 36.3059 5.56507 36.7616 5.90107 37.0976C6.23707 37.4336 6.69279 37.6224 7.16797 37.6224H35.8346C36.3098 37.6224 36.7655 37.4336 37.1015 37.0976C37.4375 36.7616 37.6263 36.3059 37.6263 35.8307V25.0807C37.6263 24.6056 37.8151 24.1498 38.1511 23.8138C38.4871 23.4778 38.9428 23.2891 39.418 23.2891C39.8932 23.2891 40.3489 23.4778 40.6849 23.8138C41.0209 24.1498 41.2096 24.6056 41.2096 25.0807V35.8307C41.2096 37.2563 40.6433 38.6234 39.6353 39.6314C38.6273 40.6394 37.2602 41.2057 35.8346 41.2057ZM17.918 26.8724C17.6822 26.8738 17.4484 26.8286 17.2301 26.7394C17.0118 26.6502 16.8133 26.5189 16.6459 26.3528C16.478 26.1863 16.3447 25.9881 16.2537 25.7698C16.1627 25.5514 16.1159 25.3173 16.1159 25.0807C16.1159 24.8442 16.1627 24.61 16.2537 24.3917C16.3447 24.1734 16.478 23.9752 16.6459 23.8086L35.1001 5.3724H28.668C28.1928 5.3724 27.7371 5.18363 27.4011 4.84763C27.0651 4.51163 26.8763 4.05591 26.8763 3.58073C26.8763 3.10555 27.0651 2.64983 27.4011 2.31383C27.7371 1.97783 28.1928 1.78906 28.668 1.78906H39.418C39.8932 1.78906 40.3489 1.97783 40.6849 2.31383C41.0209 2.64983 41.2096 3.10555 41.2096 3.58073V14.3307C41.2096 14.8059 41.0209 15.2616 40.6849 15.5976C40.3489 15.9336 39.8932 16.1224 39.418 16.1224C38.9428 16.1224 38.4871 15.9336 38.1511 15.5976C37.8151 15.2616 37.6263 14.8059 37.6263 14.3307V7.89865L19.1901 26.3528C19.0226 26.5189 18.8241 26.6502 18.6058 26.7394C18.3875 26.8286 18.1538 26.8738 17.918 26.8724Z" fill="#0C71B9"/>
                        </svg>
                      </a>
                    </div>
                    <div className="digital-carditem">
                      <h3 className="digi-card-title">CFPL Grievances <br/>Redressal Policy</h3>
                        <a onClick={() => { window.open(GrievancesRedressalPolicy) }} className="cursor-pointer">
                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.8346 41.2057H7.16797C5.74243 41.2057 4.37528 40.6394 3.36727 39.6314C2.35926 38.6234 1.79297 37.2563 1.79297 35.8307V7.16406C1.79297 5.73852 2.35926 4.37137 3.36727 3.36336C4.37528 2.35536 5.74243 1.78906 7.16797 1.78906H17.918C18.3931 1.78906 18.8489 1.97783 19.1849 2.31383C19.5209 2.64983 19.7096 3.10555 19.7096 3.58073C19.7096 4.05591 19.5209 4.51163 19.1849 4.84763C18.8489 5.18363 18.3931 5.3724 17.918 5.3724H7.16797C6.69279 5.3724 6.23707 5.56116 5.90107 5.89716C5.56507 6.23317 5.3763 6.68888 5.3763 7.16406V35.8307C5.3763 36.3059 5.56507 36.7616 5.90107 37.0976C6.23707 37.4336 6.69279 37.6224 7.16797 37.6224H35.8346C36.3098 37.6224 36.7655 37.4336 37.1015 37.0976C37.4375 36.7616 37.6263 36.3059 37.6263 35.8307V25.0807C37.6263 24.6056 37.8151 24.1498 38.1511 23.8138C38.4871 23.4778 38.9428 23.2891 39.418 23.2891C39.8932 23.2891 40.3489 23.4778 40.6849 23.8138C41.0209 24.1498 41.2096 24.6056 41.2096 25.0807V35.8307C41.2096 37.2563 40.6433 38.6234 39.6353 39.6314C38.6273 40.6394 37.2602 41.2057 35.8346 41.2057ZM17.918 26.8724C17.6822 26.8738 17.4484 26.8286 17.2301 26.7394C17.0118 26.6502 16.8133 26.5189 16.6459 26.3528C16.478 26.1863 16.3447 25.9881 16.2537 25.7698C16.1627 25.5514 16.1159 25.3173 16.1159 25.0807C16.1159 24.8442 16.1627 24.61 16.2537 24.3917C16.3447 24.1734 16.478 23.9752 16.6459 23.8086L35.1001 5.3724H28.668C28.1928 5.3724 27.7371 5.18363 27.4011 4.84763C27.0651 4.51163 26.8763 4.05591 26.8763 3.58073C26.8763 3.10555 27.0651 2.64983 27.4011 2.31383C27.7371 1.97783 28.1928 1.78906 28.668 1.78906H39.418C39.8932 1.78906 40.3489 1.97783 40.6849 2.31383C41.0209 2.64983 41.2096 3.10555 41.2096 3.58073V14.3307C41.2096 14.8059 41.0209 15.2616 40.6849 15.5976C40.3489 15.9336 39.8932 16.1224 39.418 16.1224C38.9428 16.1224 38.4871 15.9336 38.1511 15.5976C37.8151 15.2616 37.6263 14.8059 37.6263 14.3307V7.89865L19.1901 26.3528C19.0226 26.5189 18.8241 26.6502 18.6058 26.7394C18.3875 26.8286 18.1538 26.8738 17.918 26.8724Z" fill="#0C71B9"/>
                        </svg>
                        </a>
                    </div>
                    <div className="digital-carditem">
                      <h3 className="digi-card-title">CFPL Privacy <br/>Policy</h3>
                        <a onClick={() => { window.open(PrivacyPolicy) }} className="cursor-pointer">
                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.8346 41.2057H7.16797C5.74243 41.2057 4.37528 40.6394 3.36727 39.6314C2.35926 38.6234 1.79297 37.2563 1.79297 35.8307V7.16406C1.79297 5.73852 2.35926 4.37137 3.36727 3.36336C4.37528 2.35536 5.74243 1.78906 7.16797 1.78906H17.918C18.3931 1.78906 18.8489 1.97783 19.1849 2.31383C19.5209 2.64983 19.7096 3.10555 19.7096 3.58073C19.7096 4.05591 19.5209 4.51163 19.1849 4.84763C18.8489 5.18363 18.3931 5.3724 17.918 5.3724H7.16797C6.69279 5.3724 6.23707 5.56116 5.90107 5.89716C5.56507 6.23317 5.3763 6.68888 5.3763 7.16406V35.8307C5.3763 36.3059 5.56507 36.7616 5.90107 37.0976C6.23707 37.4336 6.69279 37.6224 7.16797 37.6224H35.8346C36.3098 37.6224 36.7655 37.4336 37.1015 37.0976C37.4375 36.7616 37.6263 36.3059 37.6263 35.8307V25.0807C37.6263 24.6056 37.8151 24.1498 38.1511 23.8138C38.4871 23.4778 38.9428 23.2891 39.418 23.2891C39.8932 23.2891 40.3489 23.4778 40.6849 23.8138C41.0209 24.1498 41.2096 24.6056 41.2096 25.0807V35.8307C41.2096 37.2563 40.6433 38.6234 39.6353 39.6314C38.6273 40.6394 37.2602 41.2057 35.8346 41.2057ZM17.918 26.8724C17.6822 26.8738 17.4484 26.8286 17.2301 26.7394C17.0118 26.6502 16.8133 26.5189 16.6459 26.3528C16.478 26.1863 16.3447 25.9881 16.2537 25.7698C16.1627 25.5514 16.1159 25.3173 16.1159 25.0807C16.1159 24.8442 16.1627 24.61 16.2537 24.3917C16.3447 24.1734 16.478 23.9752 16.6459 23.8086L35.1001 5.3724H28.668C28.1928 5.3724 27.7371 5.18363 27.4011 4.84763C27.0651 4.51163 26.8763 4.05591 26.8763 3.58073C26.8763 3.10555 27.0651 2.64983 27.4011 2.31383C27.7371 1.97783 28.1928 1.78906 28.668 1.78906H39.418C39.8932 1.78906 40.3489 1.97783 40.6849 2.31383C41.0209 2.64983 41.2096 3.10555 41.2096 3.58073V14.3307C41.2096 14.8059 41.0209 15.2616 40.6849 15.5976C40.3489 15.9336 39.8932 16.1224 39.418 16.1224C38.9428 16.1224 38.4871 15.9336 38.1511 15.5976C37.8151 15.2616 37.6263 14.8059 37.6263 14.3307V7.89865L19.1901 26.3528C19.0226 26.5189 18.8241 26.6502 18.6058 26.7394C18.3875 26.8286 18.1538 26.8738 17.918 26.8724Z" fill="#0C71B9"/>
                        </svg>
                        </a>
                    </div>
                    <div className="digital-carditem">
                      <h3 className="digi-card-title">CFPL Loan <br/>Product</h3>
                        <a href="/loan" target="_blank">
                        <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.8346 41.2057H7.16797C5.74243 41.2057 4.37528 40.6394 3.36727 39.6314C2.35926 38.6234 1.79297 37.2563 1.79297 35.8307V7.16406C1.79297 5.73852 2.35926 4.37137 3.36727 3.36336C4.37528 2.35536 5.74243 1.78906 7.16797 1.78906H17.918C18.3931 1.78906 18.8489 1.97783 19.1849 2.31383C19.5209 2.64983 19.7096 3.10555 19.7096 3.58073C19.7096 4.05591 19.5209 4.51163 19.1849 4.84763C18.8489 5.18363 18.3931 5.3724 17.918 5.3724H7.16797C6.69279 5.3724 6.23707 5.56116 5.90107 5.89716C5.56507 6.23317 5.3763 6.68888 5.3763 7.16406V35.8307C5.3763 36.3059 5.56507 36.7616 5.90107 37.0976C6.23707 37.4336 6.69279 37.6224 7.16797 37.6224H35.8346C36.3098 37.6224 36.7655 37.4336 37.1015 37.0976C37.4375 36.7616 37.6263 36.3059 37.6263 35.8307V25.0807C37.6263 24.6056 37.8151 24.1498 38.1511 23.8138C38.4871 23.4778 38.9428 23.2891 39.418 23.2891C39.8932 23.2891 40.3489 23.4778 40.6849 23.8138C41.0209 24.1498 41.2096 24.6056 41.2096 25.0807V35.8307C41.2096 37.2563 40.6433 38.6234 39.6353 39.6314C38.6273 40.6394 37.2602 41.2057 35.8346 41.2057ZM17.918 26.8724C17.6822 26.8738 17.4484 26.8286 17.2301 26.7394C17.0118 26.6502 16.8133 26.5189 16.6459 26.3528C16.478 26.1863 16.3447 25.9881 16.2537 25.7698C16.1627 25.5514 16.1159 25.3173 16.1159 25.0807C16.1159 24.8442 16.1627 24.61 16.2537 24.3917C16.3447 24.1734 16.478 23.9752 16.6459 23.8086L35.1001 5.3724H28.668C28.1928 5.3724 27.7371 5.18363 27.4011 4.84763C27.0651 4.51163 26.8763 4.05591 26.8763 3.58073C26.8763 3.10555 27.0651 2.64983 27.4011 2.31383C27.7371 1.97783 28.1928 1.78906 28.668 1.78906H39.418C39.8932 1.78906 40.3489 1.97783 40.6849 2.31383C41.0209 2.64983 41.2096 3.10555 41.2096 3.58073V14.3307C41.2096 14.8059 41.0209 15.2616 40.6849 15.5976C40.3489 15.9336 39.8932 16.1224 39.418 16.1224C38.9428 16.1224 38.4871 15.9336 38.1511 15.5976C37.8151 15.2616 37.6263 14.8059 37.6263 14.3307V7.89865L19.1901 26.3528C19.0226 26.5189 18.8241 26.6502 18.6058 26.7394C18.3875 26.8286 18.1538 26.8738 17.918 26.8724Z" fill="#0C71B9"/>
                        </svg>
                        </a>
                    </div>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DigitalLendingBanner;