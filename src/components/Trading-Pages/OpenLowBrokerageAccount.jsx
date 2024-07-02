import React from 'react'
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import LazyLoader from '../Common-features/LazyLoader';
function OpenLowBrokerageAccount({data}) {

    const settings = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 3,
        autoplay: true,
        dots: true,
        autoplaySpeed: 3000,
        slidesToScroll: 3,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots:true,
                },
            },
        ],
    };


  return (
    <>
  <section className="Lowbrokerage" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text-center">
                                <h2 className="secttitle" dangerouslySetInnerHTML={{ __html: data[0].title }}></h2>
                                <p dangerouslySetInnerHTML={{ __html: data[0].titleDetails }}></p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-12">
                                    <Slider {...settings} id="advslider">
                                    {
                                        data.map((response, index) =>{
                                            return(
                                        <div className="col-md-4 item p-md-2" data-toggle="modal" data-target="#myModal1">
                                      
                                            <div className="card adv-card" key={index}>
                                                <div className="icon-wrap">
                                                <LazyLoader src={response.cardIcon} className={'img-fluid'} width={"83"} height={"83"} alt={response.cardAlt} />
                                                </div>
                                                <div className="card-block">
                                                    <h5 className="card-title">{response.cardHeading}</h5>
                                                    <hr></hr>
                                                    <ul className="charge-lists">
                                                        <li dangerouslySetInnerHTML={{ __html: response.cardDetails1 }}></li>
                                                        <li dangerouslySetInnerHTML={{ __html: response.cardDetails2 }}></li>
                                                        <li dangerouslySetInnerHTML={{ __html: response.cardDetails3 }}></li>
                                                        <li dangerouslySetInnerHTML={{ __html: response.cardDetails4 }}></li>
                                                    </ul>
                                                </div>
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
                </div>
            </section>
    </>
  )
}

export default OpenLowBrokerageAccount