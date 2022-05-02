
import  ImageSub20  from '../../assets/images/slide-img1.png';
import  ImageSub21  from '../../assets/images/slide-img2.png';
import  ImageSub22  from '../../assets/images/slide-img3.png';
import  ImageSub23  from '../../assets/images/slide-img4.png';
import  ImageSub24  from '../../assets/images/slide-img5.png';
import React from "react";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import SliderAs from './SliderAs.jsx'

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
								<SliderAs />
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