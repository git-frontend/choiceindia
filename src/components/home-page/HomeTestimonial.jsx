import  ImageSub25  from '../../assets/images/testimonial1.png';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTwitter} from '@fortawesome/free-brands-svg-icons'

function HomeTestimonial() {

 const settings2 = {
  infinite: false,
  speed: 1500,
  fade:true,
  arrows: true,
  slidesToShow: 1,
  autoplay: false,
  dots:false,
  autoplaySpeed: 1000,
  slidesToScroll: 1,
};

    return (
        <div>


<section class="home-testimonial">
				<div class="container">
					<div class="row d-flex justify-content-center">
						<div class="col-md-8">
							<div class="heading-sec mb-5">
								<h3 class="title-first ">We are Only as Good as our Clients say WE ARE </h3>								
							</div>
						</div>
					</div>
					<div class="row d-flex justify-content-center">
						<div class="col-md-10">
              <Slider {...settings2} className="testimonial-slider">
								<div class="slider-item">
									<div class="slider-item-img">
                   <img src={ImageSub25} alt="" class="" />
									</div>
									<div class="slider-item-des">
										<div class="item-des-name-value">
                     <FontAwesomeIcon icon={faTwitter} /> 
											<h4>Sachin Chadda</h4>
											<h6>@SachinChadda</h6>
											<h6>21 Aug 2021</h6>
										</div>
										<div class="item-des-cont">
											<p>They will never share your private data without your consent. They are market leader for right reasons. They are the best brokers in town and provide the best services to their clients.</p>
										</div>
										<div class="likes-view">
                    <FontAwesomeIcon icon={faHeart} /> 
											<h5>27</h5>
										</div>
									</div>
								</div>
								<div class="slider-item">
									<div class="slider-item-img">
                  <img src={ImageSub25} alt="" class="" />
									</div>
									<div class="slider-item-des">
										<div class="item-des-name-value">
                    <FontAwesomeIcon icon={faTwitter} /> 
											<h4>Sachin Chadda</h4>
											<h6>@SachinChadda</h6>
											<h6>21 Aug 2021</h6>
										</div>
										<div class="item-des-cont">
											<p>They will never share your private data without your consent. They are market leader for right reasons. They are the best brokers in town and provide the best services to their clients.</p>
										</div>
										<div class="likes-view">
                     <FontAwesomeIcon icon={faHeart} /> 
											<h5>27</h5>
										</div>
									</div>
								</div>
								<div class="slider-item">
									<div class="slider-item-img">
                   <img src={ImageSub25} alt="" class="" />
									</div>
									<div class="slider-item-des">
										<div class="item-des-name-value">
                     <FontAwesomeIcon icon={faTwitter} /> 
											<h4>Sachin Chadda</h4>
											<h6>@SachinChadda</h6>
											<h6>21 Aug 2021</h6>
										</div>
										<div class="item-des-cont">
											<p>They will never share your private data without your consent. They are market leader for right reasons. They are the best brokers in town and provide the best services to their clients.</p>
										</div>
										<div class="likes-view">
                     <FontAwesomeIcon icon={faHeart} /> 
											<h5>27</h5>
										</div>
									</div>
								</div>
							</Slider>
						</div>
					</div>	
				</div>
			</section>



        </div>

    );
}

export default HomeTestimonial;