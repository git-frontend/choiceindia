
import ImageSub20 from '../../assets/images/slide-img1.png';
import ImageSub21 from '../../assets/images/slide-img2.png';
import ImageSub22 from '../../assets/images/slide-img3.png';
import ImageSub23 from '../../assets/images/slide-img4.png';
import ImageSub24 from '../../assets/images/slide-img5.png';
import React, { useEffect, useState } from "react";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
// import SliderAs from './SliderAs.jsx'
import homeServices from '../../Services/homeServices';
import fableData from '../../Data/homeFable'

function FablesStories() {

	const [fslider, setfslider] = useState();
	const [trigger, setTrigger] = useState();
	const [sliderimag, setSliderImag] = useState(0);

/** get list of fabal */

	function loadFabalList() {

		homeServices.marketInsiteFabal().then(
			res => {
				setfslider(res.data.posts);
			}
		)

	}

	useEffect(() => {

		setTrigger(true)
		if (trigger == true) {
			loadFabalList()
		}

	}, [trigger])

	const settings1 = {
		infinite: true,
		speed: 1500,
		arrows: false,
		slidesToShow: 3,
		autoplay: false,
		dots: true,
		autoplaySpeed: 1000,
		slidesToScroll: 1,
		swipeToSlide: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
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
			<section class="fables-stories">
				<div class="container">
					<div class="row">
						<div class="col-md-12">
							<div class="heading-sec">
								<h3 class="title-first" >Fables - Stories that Matter </h3>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="stories-sec-main">
								<div class="stories-sec-left">
									<div>
										{
											fslider?

												<div>
													<img src={fslider[sliderimag].feature_image} alt="Loading" />
												</div>
												:
												<div>
													<img src={fableData[0].feature_image} alt="Loading" />
												</div>
										}

									</div>
								</div>

								<div className="stories-sec-right">
									<div class="">
										{
											fslider?

												<div class="stories-sec-right-des">
													<h4>{fslider[sliderimag].title}</h4>
													<p>{fslider[sliderimag].excerpt}</p>
												</div> :
												<div class="stories-sec-right-des">
													<h4>{fableData[0].title}</h4>
													<p>{fableData[0].excerpt}</p>
												</div>
												
										}
									</div>
									<div class="sec-slider-cont fables-parent">
										<Slider {...settings1}
											slidesToShow={3}
											swipeToSlide={true}
											focusOnSelect={true}
											afterChange={(ev) => {
												setSliderImag(ev)
											}}
											className='stories-sec-slider'>
											{
												fslider?.map((response, i) => {

													return (

														<div class="itm-img" key={response.id} >
															<img src={response.feature_image} alt="Loading" />
														</div>

													)
												})
											}
										</Slider>
									</div>
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
