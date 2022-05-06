
import  ImageSub12  from '../../assets/images/market-img1.png';
import  ImageSub13  from '../../assets/images/market-img2.png';
import React from "react";
import $ from 'jquery';

$(document).ready(function () {

    $('.insights-list-item').hover(
      function(){ 
        $(".insights-list-item.insights-list-active").addClass('inactive').removeClass('insights-list-active');
      },
      function(){ 
        $(".insights-list-item.inactive").addClass('insights-list-active').removeClass('inactive'); 
      }
    );
    
  });

function MarketInsights() {
    return (
        <div>

            <section className="market-insights-sec">
                <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-md-8">
                    <div className="heading-sec">
                        <h3 className="title-first">Market Insights</h3>
                        <p>Get insightful market updates &amp; company analysis directly from our experts.</p>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <div className="market-insights-list">
                        <div className="insights-list-item insights-list-active">
                        <div className="insights-item-cont">
                            <img src={ImageSub12} alt="" />
                            <span className="ttl-sm">#US-Mexico</span>	
                        </div>	
                        <div className="item-cont-descr">
                            <p>Some Americans are going to Mexico for cheaper petrol Bitcoin entrepreneur Bitcoin entrepreneur</p>
                        </div>
                        </div>
                        <div className="insights-list-item">
                        <div className="insights-item-cont">
                        <img src={ImageSub13} alt="" />
                            <span className="ttl-sm">#Bitcoin</span>	
                        </div>	
                        <div className="item-cont-descr">
                            <p>Bitcoin entrepreneur Bitcoin entrepreneur Bitcoin entrepreneur Bitcoin entrepreneur Bitcoin entrepreneur Bitcoin entrepreneur</p>
                        </div>
                        </div>
                        <div className="insights-list-item">
                        <div className="insights-item-cont">
                        <img src={ImageSub12} alt="" />
                            <span className="ttl-sm">#Metaverse </span>	
                        </div>
                        <div className="item-cont-descr">
                            <p>Bitcoin entrepreneur Bitcoin entrepreneur Bitcoin entrepreneur Bitcoin entrepreneur Bitcoin entrepreneur Bitcoin entrepreneur</p>
                        </div>	
                        </div>
                        <div className="insights-list-item">
                        <div className="insights-item-cont">
                        <img src={ImageSub13} alt="" />
                            <span className="ttl-sm">#Budget2022</span>	
                        </div>	
                        <div className="item-cont-descr">
                            <p>Bitcoin entrepreneur Bitcoin entrepreneur Bitcoin entrepreneur Bitcoin entrepreneur Bitcoin entrepreneur Bitcoin entrepreneur</p>
                        </div>
                        </div>
                    </div>	
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mt-5 d-flex justify-content-center">
                    <a href="#" className="btn-bg">
                        Read More
                    </a>
                    </div>
                </div>
                </div>
            </section>


        </div>

    );
}

export default MarketInsights;