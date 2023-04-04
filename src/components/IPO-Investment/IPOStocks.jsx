import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import brand1 from '../../assets/images/ipo/brand1.webp'
import brand2 from '../../assets/images/ipo/indigo-paints.webp'
import brand3 from '../../assets/images/ipo/happiest-mind.webp'
import brand4 from '../../assets/images/ipo/burger-king.webp'
import brand5 from '../../assets/images/ipo/mtar.webp'

import LazyLoader from '../Common-features/LazyLoader';

function IPOStocks() {

  const settings = {
    infinite: true,
    speed: 1500,
    arrows: true,
    slidesToShow: 3,
    autoplay: false,
    dots: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: '0',
    slidesToScroll: 1,
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
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div>
      
      <section className="ipo-stocks" id="showForm">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first">Stellar Returns from IPO Stocks</h2>
            </div>
          </div>
          <div className="row">
              <div className="col-md-12">
                  <div className="ipo-stock-slider">
                  <Slider {...settings} className="services-list-slider">
                      
                      <div className="service-item" >
                          <div className="stock-itm-top d-flex">
                              <h4>MTAR Technologies</h4>
                              <LazyLoader src={brand5} alt={"Recently listed IPO & it's listing gain - MTAR Technologies"} className={"img-fluid"} width={"126"} height={"56"} />
                          </div>
                          <div className="stock-itm-btm">
                              <h4>Listing Date 
                                <span>15 March 2021</span>
                              </h4>
                              <h4>Issued Price
                                <span>Rs. 1063.9</span>
                              </h4>
                          </div>
                          <h5 className="stck-gn">Profit Gains: 85%</h5>
                      </div>
                      <div className="service-item" >
                          <div className="stock-itm-top d-flex">
                              <h4>Indigo Paints</h4>
                              <LazyLoader src={brand2} alt={"Recently listed IPO & it's listing gain - Indigo Paints"} className={"img-fluid"} width={"126"} height={"56"} />
                          </div>
                          <div className="stock-itm-btm">
                              <h4>Listing Date 
                                <span>2 February 2021</span>
                              </h4>
                              <h4>Issued Price
                                <span>Rs. 1,490</span>
                              </h4>
                          </div>
                          <h5 className="stck-gn">Profit Gains: 75%</h5>
                      </div>
                      <div className="service-item" >
                          <div className="stock-itm-top d-flex">
                              <h4>Burger King</h4>
                              <LazyLoader src={brand4} alt={"Recently listed IPO & it's listing gain - Burger King"} className={"img-fluid"} width={"126"} height={"56"} />
                          </div>
                          <div className="stock-itm-btm">
                              <h4>Listing Date 
                                <span>14 December 2020</span>
                              </h4>
                              <h4>Issued Price
                                <span>Rs. 60</span>
                              </h4>
                          </div>
                          <h5 className="stck-gn">Profit Gains: 92%</h5>
                      </div>
                      <div className="service-item" >
                          <div className="stock-itm-top d-flex">
                              <h4>Mrs Bector’s Foods</h4>
                              <LazyLoader src={brand1} alt={"Recently listed IPO & it's listing gain - Cremica"} className={"img-fluid"} width={"126"} height={"56"} />
                          </div>
                          <div className="stock-itm-btm">
                              <h4>Listing Date 
                                <span>23 December,  2020</span>
                              </h4>
                              <h4>Issued Price
                                <span>Rs. 288</span>
                              </h4>
                          </div>
                          <h5 className="stck-gn">Profit Gains: 74%</h5>
                      </div>
                      <div className="service-item" >
                          <div className="stock-itm-top d-flex">
                              <h4>Happiest Minds Technologies</h4>
                              <LazyLoader src={brand3} alt={"Recently listed IPO & it's listing gain - Happiest Minds"} className={"img-fluid"} width={"126"} height={"56"} />
                          </div>
                          <div className="stock-itm-btm">
                              <h4>Listing Date 
                                <span>17 September 2020</span>
                              </h4>
                              <h4>Issued Price
                                <span>Rs. 166</span>
                              </h4>
                          </div>
                          <h5 className="stck-gn">Profit Gains: 111%</h5>
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

export default IPOStocks;
