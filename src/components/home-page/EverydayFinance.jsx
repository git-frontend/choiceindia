import ImageSub5 from '../../assets/images/icons/arrow-left-circle-fill.svg';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import EveryFinance from "../../Data/EverydayFinance"
import LazyLoader from '../Common-features/LazyLoader';

function EverydayFinance() {

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 4,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // adaptiveHeight: true,
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
      <section className="main-services" >
        <div className="container">
          <div className="row">
            <div className="col-md-12" id='everydayfin'>
              <h2 className="title-first">Everyday Finance in one Place</h2>
            </div>
          </div>
          <div className="row" >
            <div className="col-md-12">
              <div className="main-services-list">
                <Slider {...settings} className="services-list-slider">
                  {
                    EveryFinance.map((response) => {


                      return (
                        <div key={response.id} className='service-item-list'>
                        <div className="service-item">
                          <span className="img-itm">
                            <LazyLoader src={response.image} className={"img-fluid sl-img"} alt={response.alt} width={"70"} height={"70"} />
                          </span>
                          <h3 className="ss-ttl">{response.title || '-'}</h3>
                          <p>{response.description || '-'}</p>
                        </div>
                        </div>
                       

                      )
                    })
                  }

                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>



    </div>

  );
}

export default EverydayFinance;
