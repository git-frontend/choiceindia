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


		{/* <section className="home-testimonial home-testimonial-new">

						<div className="container">
							<div className="row d-flex justify-content-center">
								<div className="col-md-8">
									<div className="heading-sec mb-5">
										<h3 className="title-first ">We are Only as Good as our Clients say WE ARE </h3>								
									</div>
								</div>
							</div>
							<div className="row d-flex justify-content-center">
								<div className="col-lg-12">
									<Slider {...settings2} className="testimonial-slider">
										<div className="slider-item">
											<div className="slider-item-img">
												<div className='other-slide-list'>
													<div className='slide-list-itm slide-list-itm1'>
														<img src={ImageSub27} />
													</div>
													<div className='slide-list-itm slide-list-itm2'>
														<img src={ImageSub26} />
													</div>
													<div className='slide-list-itm slide-list-itm3'>
														<img src={ImageSub28} />
													</div>
												</div>
												<img src={ImageSub25} alt="" className="actv-img" />
											</div>
											<div className="slider-item-des">
												<div className="item-des-name-value">
													<FontAwesomeIcon icon={faTwitter} /> 
													<h4>Sachin Chadda</h4>
													<h6>@SachinChadda</h6>
													<h6>21 Aug 2021</h6>
												</div>
												<div className="item-des-cont">
													<p>They will never share your private data without your consent. They are market leader for right reasons. They are the best brokers in town and provide the best services to their clients.</p>
												</div>
												<div className="likes-view">
													<FontAwesomeIcon icon={faHeart} /> 
													<h5>27</h5>
												</div>
											</div>
										</div>
										<div className="slider-item">
											<div className="slider-item-img">
												<img src={ImageSub25} alt="" className="actv-img" />
											</div>
											<div className="slider-item-des">
												<div className="item-des-name-value">
													<FontAwesomeIcon icon={faTwitter} /> 
													<h4>Sachin Chadda</h4>
													<h6>@SachinChadda</h6>
													<h6>21 Aug 2021</h6>
												</div>
												<div className="item-des-cont">
													<p>They will never share your private data without your consent. They are market leader for right reasons. They are the best brokers in town and provide the best services to their clients.</p>
												</div>
												<div className="likes-view">
													<FontAwesomeIcon icon={faHeart} /> 
													<h5>27</h5>
												</div>
											</div>
										</div>
										<div className="slider-item">
											<div className="slider-item-img">
												<img src={ImageSub25} alt="" className="actv-img" />
											</div>
											<div className="slider-item-des">
												<div className="item-des-name-value">
													<FontAwesomeIcon icon={faTwitter} /> 
													<h4>Sachin Chadda</h4>
													<h6>@SachinChadda</h6>
													<h6>21 Aug 2021</h6>
												</div>
												<div className="item-des-cont">
													<p>They will never share your private data without your consent. They are market leader for right reasons. They are the best brokers in town and provide the best services to their clients.</p>
												</div>
												<div className="likes-view">
													<FontAwesomeIcon icon={faHeart} /> 
													<h5>27</h5>
												</div>
											</div>
										</div>
									</Slider>
								</div>
							</div>	
						</div>
		</section> */}

		<section className="home-testimonial">
						<div className="container">
							<div className="row d-flex justify-content-center">
								<div className="col-lg-12">
									<div className="heading-sec mb-5">
										<h3 className="title-first ">We are Only as Good as our Clients say <br/> WE ARE </h3>								
									</div>
								</div>
							</div>
							<div className="row d-flex justify-content-center">
								<div className="col-lg-10">
									<Slider {...settings2} className="testimonial-slider">
										<div className="slider-item">
											<div className="slider-item-img">
												<img src={ImageSub25} alt="" className="actv-img" />
											</div>
											<div className="slider-item-des">
												<div className="item-des-name-value">
													<FontAwesomeIcon icon={faTwitter} /> 
													<h4>Sachin Chadda</h4>
													<h6>@SachinChadda</h6>
													<h6>21 Aug 2021</h6>
												</div>
												<div className="item-des-cont">
													<p>They will never share your private data without your consent. They are market leader for right reasons. They are the best brokers in town and provide the best services to their clients.</p>
												</div>
												<div className="likes-view">
													<FontAwesomeIcon icon={faHeart} /> 
													<h5>27</h5>
												</div>
											</div>
										</div>
										<div className="slider-item">
											<div className="slider-item-img">
												<img src={ImageSub25} alt="" className="actv-img" />
											</div>
											<div className="slider-item-des">
												<div className="item-des-name-value">
												<FontAwesomeIcon icon={faTwitter} /> 
													<h4>Sachin Chadda</h4>
													<h6>@SachinChadda</h6>
													<h6>21 Aug 2021</h6>
												</div>
												<div className="item-des-cont">
													<p>They will never share your private data without your consent. They are market leader for right reasons. They are the best brokers in town and provide the best services to their clients.</p>
												</div>
												<div className="likes-view">
													<FontAwesomeIcon icon={faHeart} /> 
													<h5>27</h5>
												</div>
											</div>
										</div>
										<div className="slider-item">
											<div className="slider-item-img">
												<img src={ImageSub25} alt="" className="actv-img" />
											</div>
											<div className="slider-item-des">
												<div className="item-des-name-value">
													<FontAwesomeIcon icon={faTwitter} /> 
													<h4>Sachin Chadda</h4>
													<h6>@SachinChadda</h6>
													<h6>21 Aug 2021</h6>
												</div>
												<div className="item-des-cont">
													<p>They will never share your private data without your consent. They are market leader for right reasons. They are the best brokers in town and provide the best services to their clients.</p>
												</div>
												<div className="likes-view">
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