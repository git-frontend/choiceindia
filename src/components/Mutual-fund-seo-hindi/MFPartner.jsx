import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import img1 from '../../assets/images/mutual-funds-investment/hdfc-mutual-fund.webp'
import img2 from '../../assets/images/mutual-funds-investment/icici-prudential-mutual-fund.webp'
import img3 from '../../assets/images/mutual-funds-investment/sbi-mutual-fund.webp'
import img4 from '../../assets/images/mutual-funds-investment/birla-sun-life-mutual-fund.webp'
import img5 from '../../assets/images/mutual-funds-investment/kotak-mutual-fund.webp'

import LazyLoader from '../Common-features/LazyLoader';

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
              <h2 className="title-first">हमारे साथी म्युचुअल फंड हाउस</h2>
              <div className="">
                <Slider {...settings} className="partner-slider">
                    <div className="part-item">
                      <LazyLoader src={img1} alt={"एचडीएफसी म्यूचुअल फंड"} className={"img-fluid"} width={"250"} height={"56"} />
                    </div>
                    <div className="part-item">
                      <LazyLoader src={img2} alt={"आईसीआईसीआई प्रूडेंशियल म्यूचुअल फंड"} className={"img-fluid"} width={"250"} height={"56"} />
                    </div>
                    <div className="part-item">
                      <LazyLoader src={img3} alt={"एसबीआई म्यूचुअल फंड"} className={"img-fluid"} width={"250"} height={"56"} />
                    </div>
                    <div className="part-item">
                      <LazyLoader src={img4} alt={"बिरला सन लाइफ म्यूचुअल फंड"} className={"img-fluid"} width={"250"} height={"56"} />
                    </div>
                    <div className="part-item">
                      <LazyLoader src={img5} alt={"कोटक म्यूचुअल फंड"} className={"img-fluid"} width={"250"} height={"56"} />
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

export default MFPartner;