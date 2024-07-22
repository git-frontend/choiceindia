
import React from "react";
import { useState } from "react";
import StckImage from '../../assets/images/partner/partners-stock-banner.gif';
import MutualFundsImage from '../../assets/images/partner/partners-mutual-funds-banner.gif';
import InsuranceImage from '../../assets/images/partner/partners-insurance-banner.gif';
import LoansImage from '../../assets/images/partner/partners-loans-banner.gif';

import LazyLoader from "../Common-features/LazyLoader";
import SingleTemplatePartner from "../Common-features/SingleTemplatePartner";
import partnerBanner from "../../Data/partnerbanner";
import Slider from "react-slick";


function PartnerBannerTab() {

  const [toggleState, setToggleState] = useState();
  const [count, setCount] = useState(0);
  const [store, setstore] = useState(0);

  const settings = {
    infinite: true,
    speed: 2500,
    arrows: false,
    slidesToShow: 4,
    autoplay:true,
    dots: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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



  const [skeleton, setSkeleton] = useState(() => true);
  setTimeout(() => {
    setSkeleton(() => false);
  }, 3000)

  return (
    <div>

      <section className="banner-tabs">
        <div className="container">


          <div className="content-tabs">



            <div
              className="content active-content"
            >
              <div className="banner-tab-cont">
                <div className="tab-cont-left">
                  <div className="heading-sec">
                    <h3 className="title-secnd">{partnerBanner[store].title}</h3>
                    <p>{partnerBanner[store].description}</p>
                  </div>
                  <a href={partnerBanner[store].Link} target="_blank" className="btn-bg">Register</a>
                </div>

                {
                  skeleton ?
                    <SingleTemplatePartner /> :
                    <div className="tab-cont-right d-none d-sm-block">
                      <LazyLoader src={partnerBanner[store].image} className={'img-fluid'} width={"521"} height={"453"} alt="Loading" />
                    </div>
                }

              </div>
            </div>

          </div>


            <Slider {...settings}
              className="bloc-tabs d-none d-sm-block"
              afterChange={(ev) => {
                setstore(ev)
                setCount(ev)
                setToggleState(ev)
               

              }}
            >
              {
                partnerBanner?.map((res,index) => {
                  let classNameNm = ((index === count) ?  "tabs active-tabs" : "tabs ")

                  return (
                    <button key={res.id}  className={classNameNm}
                      onClick={() => { setstore(index) ;setCount(index)}}>
                        <span className="tb-ico">
                          <LazyLoader src={res.icon} className={'img-fluid'} width={"70"} height={"71"} alt="Stocks" />
                        </span>
                      
                      <h4>{res.button}</h4>

                    </button>


                  )
                })


              }

            </Slider>
        </div>
      </section>





    </div>
  );
}

export default PartnerBannerTab;
