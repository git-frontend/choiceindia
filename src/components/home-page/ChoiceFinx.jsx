
import  ImageSub6  from '../../assets/images/icons/shopping-cart.svg';
import  ImageSub7  from '../../assets/images/icons/grid1.svg';
import  ImageSub8  from '../../assets/images/icons/speed.svg';
import  ImageSub9  from '../../assets/images/app-img1.png';
import  ImageSub10  from '../../assets/images/icons/play-store.svg';
import  ImageSub11  from '../../assets/images/icons/Apple.svg';
import React from "react";
import $ from 'jquery';

$(document).ready(function () {

    $(".workList a").hover(function() {
		var s = $(this).data("img");
		$(".workImages img").attr("src", s);
	});

    
  });

function ChoiceFinx() {
    return (
        <div>


<section className="choice-finx">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="finx-section">
                  <div className="finx-left-cont">
                    <div className="heading-sec">
                      <h3 className="title-secnd">Choice FinX</h3>
                      <p>SuperApp - Designed to deliver customized wealth solutions to cater <br/>all financial needs</p>
                    </div>
                    <div className="finx-app-list workList">
                      <div className="app-list-item">
                        <a href="#" data-img={ImageSub9}>
                          <img src={ImageSub6} alt="" className="img-fluid" />
                          <h4>Wealth Store</h4>
                          <p>Nurture your financial freedom with endless possibilities</p>
                        </a>
                      </div>
                      <div className="app-list-item">
                        <a href="#" data-img={ImageSub9}>
                          <img src={ImageSub7} alt="" className="img-fluid" />
                          <h4>Elegant UI &amp; UX</h4>
                          <p>Aiming for an intuitive interface for seamless navigation.</p>
                        </a>
                      </div>
                      <div className="app-list-item">
                        <a href="#" data-img={ImageSub9}>
                          <img src={ImageSub8} alt="" className="img-fluid" />
                          <h4>Speedy Execution</h4>
                          <p>Built to deliver a blazing fast experience without hiccups.</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="finx-app-img workImages">
                    <img src={ImageSub9} className="" alt="" />
                  </div>
                  <div className="expl-app">
                      <a href="#">
                        <span className="btn-bg">Explore App</span>
                      </a>
                      <a href="#">
                        <img src={ImageSub10} className="ico-img" />
                      </a>
                      <a href="#">
                        <img src={ImageSub11} className="ico-img" />
                      </a>
                    </div>
                </div>
              </div>
              
            </div>
          </div>
        </section>



        </div>

    );
}

export default ChoiceFinx;