
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
                  <a href="https://choiceconnect.in/register" className="btn-bg">Register</a>
                </div>

                {
                  skeleton ?
                    <SingleTemplatePartner /> :
                    <div className="tab-cont-right d-none d-sm-block">
                      <LazyLoader src={partnerBanner[store].image} className={'img-fluid'} width={"521"} height={"453"} alt="Loading" />
                      {/* <img src={StckImage} alt="Become a Stock Market Agent" width={"521"} height={"453"} /> */}
                    </div>
                }

              </div>
            </div>

          </div>

          {/* <div
              className={toggleState === 2 ? "content  active-content" : "content"}
            >
              <div className="banner-tab-cont">
                <div className="tab-cont-left">
                  <div className="heading-sec">
                    <h3 className="title-secnd">Become a Mutual Fund Advisort</h3>
                    <p>Help people to achieve financial freedom by selling mutual funds through us.</p>
                  </div>
                  <a href="https://choiceconnect.in/register" className="btn-bg">Register</a>
                </div>
                <div className="tab-cont-right">
                  <LazyLoader src={MutualFundsImage} className={'img-fluid'} width={"521"} height={"453"} alt="Become a Stock Market Agent" />
               
                </div>
              </div>
            </div>

            <div
              className={toggleState === 3 ? "content  active-content" : "content"}
            >
              <div className="banner-tab-cont">
                <div className="tab-cont-left">
                  <div className="heading-sec">
                    <h3 className="title-secnd">Become an Insurance Agent</h3>
                    <p>Assist customers to buy the best insurance which suits all their needs. </p>
                  </div>
                  <a href="https://choiceconnect.in/register" className="btn-bg">Register</a>
                </div>
                <div className="tab-cont-right">
                  <LazyLoader src={InsuranceImage} className={'img-fluid'} width={"61"} height={"61"} alt="Become a Stock Market Agent" />
               
                </div>
              </div>
            </div>

            <div
              className={toggleState === 4 ? "content  active-content" : "content"}
            >
              <div className="banner-tab-cont">
                <div className="tab-cont-left">
                  <div className="heading-sec">
                    <h3 className="title-secnd">Become a Loan Agent</h3>
                    <p>Disburse the loan of different companies at the lowest interest rate &amp; earn a good commission.</p>
                  </div>
                  <a href="https://choiceconnect.in/register" className="btn-bg">Register</a>
                </div>
                <div className="tab-cont-right">
                  <LazyLoader src={LoansImage} className={'img-fluid'} width={"521"} height={"453"} alt="Become a Stock Market Agent" />
                 
                </div>
              </div>
            </div>
          </div> 
          className={count === 1 ? "tabs active-tabs" : "tabs"}
              onClick={() => setCount(1)}
          */}

          {/* <div className="bloc-tabs"> */}
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
                  let classNameNm = ((index === count) ?  "tabs active-tabs" : "tabs")

                  return (
                    <button key={res.id}  className={classNameNm}
                      onClick={() => { setstore(index) ;setCount(index)}}>
                        <span className="tb-ico">
                          <LazyLoader src={res.icon} className={'img-fluid'} width={"70"} height={"71"} alt="Stocks" />
                          {/* <img src={ImageSub2} alt="Stocks" width={"70"} height={"71"} /> */}
                        </span>
                      
                      <h4>{res.button}</h4>

                    </button>


                  )
                })


              }

              {/* <button
              className={count === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => setCount(2)}
            >
              <LazyLoader src={ImageSub3} className={'img-fluid'} width={"71"} height={"71"} alt={"Mutual Funds"} />
              
              <h4>Mutual Funds</h4>

            </button>
            <button
              className={count === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => setCount(3)}
            >
              <LazyLoader src={ImageSub4} className={'img-fluid'} width={"70"} height={"70"} alt={"Insurance"} />
              
              <h4>Insurance</h4>

            </button>
            <button
              className={count === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => setCount(4)}
            >
              <LazyLoader src={ImageSub5} className={'img-fluid'} width={"70"} height={"71"} alt="Loans" />
              
              <h4>Loans</h4>

            </button> */}
            </Slider>
          {/* </div> */}
        </div>
      </section>





    </div>
  );
}

export default PartnerBannerTab;
