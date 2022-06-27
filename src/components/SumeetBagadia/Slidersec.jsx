
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";

function Slidersec() {

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        infinite:false,
        fade: false,
        autoplay: false,
        centerMode: true,
        Padding: '0 55px 0 30px',
        autoplaySpeed: 7000,
        dots:true,
        responsive: [
        {
          breakpoint: 992,
          settings: {
            centerMode: false,
            Padding: '0',
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 600,
          settings: {
            centerMode: false,
            Padding: '0',
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: false,
            Padding: '0',
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      
      ]
    };
    return (
        <div>
            <section className="sumit-bg-class">
                <div className="container">
                    <div className="row flex-sec-r align-items-center">
                        <div className="col-md-5">
                            <div className="bg-class-left">
                                <h3 className="title-sm-new">Sumeet Bagadia Calls</h3>
                                <p className="sml-para">Adept at analysing various standalone events to predict the market outcome; <br /> Mr Sumeet Bagadia's Research Calls have an excellent success ratio. Have a look at the results of the past research calls by him.</p>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div class="bg-class-right">
                                <Slider {...settings} className="sm-slider-bg services-list-slider">
                                    <div className="service-item">
                                        <div class="item-slider">
                                            <h4>SBILIFE</h4>
                                            <ul>  
                                                <li>
                                                <h4>Entry Price</h4>
                                                <h3>968</h3>
                                                </li>
                                                <li>
                                                <h4>Target Price</h4>
                                                <h3>1,130</h3>
                                                </li>
                                            </ul>
                                            <h4 class="md-profit">
                                                Profit: 17.02 %
                                            </h4>
                                            <h4 class="trg-achv">Target Achieved: 210 Days</h4>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                    <div class="item-slider">
                                            <h4>SBILIFE</h4>
                                            <ul>  
                                                <li>
                                                <h4>Entry Price</h4>
                                                <h3>968</h3>
                                                </li>
                                                <li>
                                                <h4>Target Price</h4>
                                                <h3>1,130</h3>
                                                </li>
                                            </ul>
                                            <h4 class="md-profit">
                                                Profit: 17.02 %
                                            </h4>
                                            <h4 class="trg-achv">Target Achieved: 210 Days</h4>
                                        </div>
                                    </div>
                                    <div className="service-item">
                                        <div class="item-slider">
                                                <h4>SBILIFE</h4>
                                                <ul>  
                                                    <li>
                                                    <h4>Entry Price</h4>
                                                    <h3>968</h3>
                                                    </li>
                                                    <li>
                                                    <h4>Target Price</h4>
                                                    <h3>1,130</h3>
                                                    </li>
                                                </ul>
                                                <h4 class="md-profit">
                                                    Profit: 17.02 %
                                                </h4>
                                                <h4 class="trg-achv">Target Achieved: 210 Days</h4>
                                            </div>
                                    </div>
                                    <div className="service-item">
                                    <div class="item-slider">
                                            <h4>SBILIFE</h4>
                                            <ul>  
                                                <li>
                                                <h4>Entry Price</h4>
                                                <h3>968</h3>
                                                </li>
                                                <li>
                                                <h4>Target Price</h4>
                                                <h3>1,130</h3>
                                                </li>
                                            </ul>
                                            <h4 class="md-profit">
                                                Profit: 17.02 %
                                            </h4>
                                            <h4 class="trg-achv">Target Achieved: 210 Days</h4>
                                        </div>

                                    </div>
                                    
                                </Slider>

                            </div>
                            <div class="sm-slider-thumb">
                                {/* <ul class="reset">
                                    <li class="active" data-slide="1">
                                    </li>
                                    <li class="" data-slide="2">
                                    </li>
                                    <li class="" data-slide="3">
                                    </li>
                                    <li class="" data-slide="4">
                                    </li>
                                </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section >

        </div >

    );
}

export default Slidersec;
