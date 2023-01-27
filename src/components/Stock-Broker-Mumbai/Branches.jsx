
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import stockBrokerCityService from '../../Services/StockBrokerCityContent'
import Bangalore from '../../assets/images/stock-broker-mumbai/stock-broker-in-bangalore.svg';
import Chennai from '../../assets/images/stock-broker-mumbai/stock-broker-in-chennai.svg';
import Hydrabad from '../../assets/images/stock-broker-mumbai/stock-broker-in-hyderabad.svg';
import Jaipur from '../../assets/images/stock-broker-mumbai/stock-broker-in-jaipur.svg';
import Delhi from '../../assets/images/stock-broker-mumbai/stock-broker-in-delhi.svg';
import Pune from '../../assets/images/stock-broker-mumbai/stock-broker-in-pune.svg';

function Branches() {

  const [rendercount, setRenderCount] = useState(() => false);
  const [isloading, setisloading] = useState(true);
  const [content, setcontent] = useState({});
  let values;
  let AllFilesValue = {};
  let pageLocation =(window.location.pathname.indexOf('/stock-broker-in-mumbai') > -1) ? "Mumbai":(window.location.pathname.indexOf('/stock-broker-in-bangalore') > -1)? "Bangalore":(window.location.pathname.indexOf('/stock-broker-in-chennai') > -1) ? "Chennai":(window.location.pathname.indexOf('/stock-broker-in-hyderabad') > -1) ? "Hyderabad":(window.location.pathname.indexOf('/stock-broker-in-delhi') > -1) ? "Delhi": ""

  function stockBrokerContent() {
    stockBrokerCityService.stockCityContent().
      then(
        res => {
          if (res && res.data && res.data.data) {
            setisloading(false)
            values = res.data.data;
            values.forEach(ele => {
              if (!AllFilesValue[ele.city_name]) {
                if(!(pageLocation == ele.city_name)){
                  AllFilesValue[ele.city_name] = [];
                  AllFilesValue[ele.city_name].push(ele)
                }
              }
               else {
                AllFilesValue[ele.city_name].push(ele)
              }
            })
            setcontent(AllFilesValue);
          } else {
            setisloading(false)
            setcontent([]);
          }
        }
      ).catch((error) => {
        setisloading(false)
        setcontent([]);
      });
  }
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      stockBrokerContent();
    }
  }, [rendercount])

  
 


  const settings = {
		infinite: false,
		speed: 1500,
		arrows: false,
		slidesToShow: 3,
		autoplay: false,
		dots: true,
		autoplaySpeed: 5000,
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
      <section className="branch" >
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <div className="heading-sec">
                <h2 className="title-first text-center">Our Other Branches Near You</h2>
                <p className="text-center mb-5 branchsubtext">Stock Broker in</p>
              </div>

            </div>
          </div>
          <div className="row" >

            <div className="col-md-12">

            <Slider {...settings} className="branches-list" >
            {
                  Object.keys(content)?.map((key, i) => {
                    return (

                      <div className="branch-item">
                          {
                          content[key]?.map((res, index) => {
                            return (
                              <div key={index}>
                                <span className="img-itm">
                                  <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${res.file_name}`} alt={res.alt} className={"img-fluid"} width={"144"} height={"144"} />

                                  </span>
                                  <h5>{res.city_name}</h5>

                                </div>
                            )}
                          )}   
                    </div>

                    )}
                    )}
              
               
              </Slider>                
									
                                   
                                    
										
                  

                


             





            </div>

          </div>
        </div>
      </section>



    </div>

  );
}

export default Branches;
