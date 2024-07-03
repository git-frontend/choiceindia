import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import LazyLoader from "../Common-features/LazyLoader";

function WhyOpenTradingAccount({data}) {

    const settings = {
        infinite: false,
        speed: 1500,
        margin:15,
        arrows: false,
        slidesToShow: 3,
        autoplay: false,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 3,
        adaptiveHeight: false,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              adaptiveHeight: false,
            },
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:true,
                loop: true,
                infinite:true,
                autoplaySpeed: 5000,
                autoplay: true,
                },
          },
        ],
      };

  return (
    <>
         <section className="adv-sect" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="sectext" id="showForm">
                                <h2 dangerouslySetInnerHTML={{ __html: data[0].title }}></h2>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="pl-4">
                                <Slider {...settings} id="advslider" className="adv-sect-slider">
                                {data.map((response, index) => (
                                <div className="card adv-card" key={index}>
                                        <div className="icon-wrap">
                                            <LazyLoader src={response.cardIcon} className={"img-fluid"} width={"40"} height={"41"} alt={response.cardIcon}  />
                                        </div>
                                        <div className="card-block">
                                            <h5 className="card-title">{response.cardHeading}</h5>
                                            <p>{response.cardText}</p>
                                        </div>
                                    </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default WhyOpenTradingAccount