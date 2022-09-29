import React from "react";
import latest_vidoes_img_1 from '../../assets/images/broker-media/latest_vidoes_img_1.png';
import latest_vidoes_img_2 from '../../assets/images/broker-media/latest_vidoes_img_2.png';
import latest_vidoes_img_3 from '../../assets/images/broker-media/latest_vidoes_img_3.png';

import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

function BrokingMediaLatestVideos() {
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
          adaptiveHeight: true,
          dots:false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots:false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots:false,
        },
      },
    ],
  };

  return (
    <div>
    
            {/*latest_vidoes  */}
            <section className="latest_vidoes">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="title-first" >latest videos</h2>
                  </div>
                </div>
                <Slider {...settings} className="videos-list-slider">
                  <div className="videos-list-itm">
                    <div className="video_img"> <img src={latest_vidoes_img_1} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des">
                      <p className="body_date">August 24, 2022</p>
                      <h3 className="latest_vidoes_head">Everyday finance in one place</h3>
                      </div>
                  </div>
                  <div className="videos-list-itm">
                    <div className="video_img"><img src={latest_vidoes_img_2} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des"><p className="body_date">August 24, 2022</p>
                      <h3 className="latest_vidoes_head">wealth creation ideas to increase your assets</h3></div>
                  </div>
                  <div className="videos-list-itm">
                    <div className="video_img"><img src={latest_vidoes_img_3} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des"><p className="body_date">August 24, 2022</p>
                      <h3 className="latest_vidoes_head">Everyday finance in one place</h3></div>
                  </div>
                  <div className="videos-list-itm">
                    <div className="video_img"> <img src={latest_vidoes_img_1} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des">
                      <p className="body_date">August 24, 2022</p>
                      <h3 className="latest_vidoes_head">Everyday finance in one place</h3></div>
                  </div>
                  <div className="videos-list-itm">
                    <div className="video_img"><img src={latest_vidoes_img_2} alt="Banner Images" className="img-fluid "></img></div>
                    <div className="video_img_des"><p className="body_date">August 24, 2022</p>
                      <h3 className="latest_vidoes_head">wealth creation ideas to increase your assets</h3></div>
                  </div>
                </Slider>
              </div>
            </section>
            </div>
 
  );
}

export default BrokingMediaLatestVideos;