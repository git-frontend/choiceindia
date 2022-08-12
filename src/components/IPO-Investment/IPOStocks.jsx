import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import brand1 from '../../assets/images/ipo/brand1.webp'
import brand2 from '../../assets/images/ipo/brand2.webp'

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
          slidesToShow: 3,
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

  return (
    <div>
      
      <section className="ipo-stocks">
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
                              <h4>Mrs Bector’s Foods</h4>
                              <LazyLoader src={brand1} alt={" insurance  services"} className={"img-fluid"} width={"126"} height={"56"} />
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
                              <h4>Indigo Paints Limited</h4>
                              <LazyLoader src={brand2} alt={" insurance  services"} className={"img-fluid"} width={"126"} height={"56"} />
                          </div>
                          <div className="stock-itm-btm">
                              <h4>Listing Date 
                                <span>2 Februrary,  2021</span>
                              </h4>
                              <h4>Issued Price
                                <span>Rs. 1490</span>
                              </h4>
                          </div>
                          <h5 className="stck-gn">Profit Gains: 75%</h5>
                      </div>
                      <div className="service-item" >
                          <div className="stock-itm-top d-flex">
                              <h4>Mrs Bector’s Foods</h4>
                              <LazyLoader src={brand1} alt={" insurance  services"} className={"img-fluid"} width={"126"} height={"56"} />
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
                              <h4>Mrs Bector’s Foods</h4>
                              <LazyLoader src={brand1} alt={" insurance  services"} className={"img-fluid"} width={"126"} height={"56"} />
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
                              <h4>Mrs Bector’s Foods</h4>
                              <LazyLoader src={brand1} alt={" insurance  services"} className={"img-fluid"} width={"126"} height={"56"} />
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
