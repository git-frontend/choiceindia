
import  ImageSub20  from '../../assets/images/slide-img1.png';
import  ImageSub21  from '../../assets/images/slide-img2.png';
import  ImageSub22  from '../../assets/images/slide-img3.png';
import  ImageSub23  from '../../assets/images/slide-img4.png';
import  ImageSub24  from '../../assets/images/slide-img5.png';
import React from "react";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";


function FablesStories() {

    const settings1 = {
        infinite: true,
        speed: 1500,
        arrows: false,
        slidesToShow: 3,
        autoplay: false,
        dots:true,
        autoplaySpeed: 1000,
        slidesToScroll: 1,
      };

    return (
        <div>

            <section class="fables-stories">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="heading-sec">
								<h3 class="title-first">Fables - Stories that Matter </h3>								
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="stories-sec-main">
								<div class="stories-sec-left">
                <img src={ImageSub20} alt="" />
								</div>
								<div class="stories-sec-right">
									<h4>What are NFTs?</h4>
									<p>Mike Winkelmann who makes digital arts by the name of “Beeple” sold a collage of his first 5000 artwork at $69 million through an NFT Auction...</p>
								</div>
								<div class="sec-slider-cont">
                <Slider {...settings1} className="stories-sec-slider">
										<div class="itm-img">
                    <img src={ImageSub21} alt="" />
										</div>
										<div class="itm-img">
                    <img src={ImageSub22} alt="" />
										</div>
										<div class="itm-img">
                    <img src={ImageSub23} alt="" />
										</div>
										<div class="itm-img">
                    <img src={ImageSub24} alt="" />
										</div>
									</Slider>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12 mt-5 d-flex justify-content-center">
							<a href="#" class="btn-bg">
								View All
							</a>
						</div>
					</div>
				</div>
			</section>


        </div>

    );
}

export default FablesStories;