import React, { useEffect, useState } from "react";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import homeServices from '../../Services/homeServices';
import fableData from '../../Data/homeFable'
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";

function FablesStories() {
	let Id;
	const [fslider, setfslider] = useState();
	const [blog, setblog] = useState();
	const [trigger, setTrigger] = useState();
	const [sliderimag, setSliderImag] = useState(0);

	/** get list of fabal */

	function loadFabalList() {

		homeServices.fabalStory().then(
			res => {
				setfslider(res.data.posts);
			}
		)

	}

	/** get fables Blog */

	function loadFableBlog(Id) {
		homeServices.fablesBlog(Id).then(

			res => {
				setblog(res.data.posts)

			}
		)
	}

	useEffect(() => {

		setTrigger(true)
		if (trigger === true) {
			loadFabalList()
		}

	}, [trigger])

	const settings1 = {
		infinite: true,
		speed: 2500,
		arrows: false,
		slidesToShow: 3,
		autoplay: true,
		dots: true,
		autoplaySpeed: 3000,
		slidesToScroll: 2,
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
			<section className="fables-stories">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="heading-sec">
								<h3 className="title-first" >Fables - Stories that Matter </h3>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="stories-sec-main">
								<div className="stories-sec-left">
									<div>
										{
											fslider ?

												<div>
													<LazyLoader src={fslider[sliderimag].feature_image} width={"521"} height={"450"} alt="Loading" />
													{/* <img src={fslider[sliderimag].feature_image} alt="Loading" /> */}
												</div>
												:
												<div>
													<LazyLoader src={fableData[0].feature_image} alt="Loading" />
													{/* <img src={fableData[0].feature_image} alt="Loading" /> */}
												</div>
										}

									</div>
								</div>

								<div className="stories-sec-right">
									<div className="">
										{
											fslider ?
												<div className="stories-sec-right-des">
													<Link to={`/fablesdetail/${fslider[sliderimag].slug}`}>
														<h4>{fslider[sliderimag].title}</h4>
														<p>{fslider[sliderimag].excerpt}</p>
													</Link>
												</div>
												:
												<div className="stories-sec-right-des">
													<h4>{fableData[0].title}</h4>
													<p>{fableData[0].excerpt}</p>
												</div>

										}
									</div>
									<div className="sec-slider-cont fables-parent">
										<Slider {...settings1}
											slidesToShow={3}
											swipeToSlide={true}
											focusOnSelect={true}
											afterChange={(ev) => {
												setSliderImag(ev)

											}}


											className='stories-sec-slider'>
											{
												fslider?.map((response) => {
													// console.log("index id",index)

													Id = fslider[sliderimag].slug;

													return (

														<div className="itm-img" key={response.id} onClick={() => {
															loadFableBlog(Id);

														}} >

															<LazyLoader src={response.feature_image} alt="Loading" width={"312"} height={"200"} />
															{/* <img src={response.feature_image} alt="Loading" /> */}
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
					<div className="row">
						<div className="col-md-12 mt-5 d-flex justify-content-center">
							<Link to="/fables" className="btn-bg">
								View All
							</Link>
						</div>
					</div>
				</div>
			</section>


		</div>

	);
}

export default FablesStories;
