import React, { useEffect, useState } from "react";
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import homeServices from '../../Services/homeServices';
import fableData from '../../Data/homeFable'
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import { Button } from "react-bootstrap";

function FablesStories() {
	let Id;
	const [fslider, setfslider] = useState([]);
	const [blog, setblog] = useState();
	const [trigger, setTrigger] = useState();
	const [sliderimag, setSliderImag] = useState(5);
	const [isloading, setisloading] = useState(true);

	const [numButtons, setNumButtons] = useState(0);
	/** get list of fabal */

	function loadFabalList() {

		homeServices.fabalStory().then(
			res => {
				if (res && res.status === 200 && res.data && res.data.posts) {
					setfslider(res.data.posts);
					setisloading(false)

				} else {
					setfslider([]);
					setisloading(false)
				}

			}
		).catch((error) => {
			setfslider([]);
			setisloading(false)
		});

	}


	/** get fables Blog */

	function loadFableBlog(Id) {
		homeServices.fablesBlog(Id).then(
			res => {

				if (res && res.status === 200 && res.data && res.data.posts) {
					setblog(res.data.posts)


				} else {
					setblog([]);

				}

			}
		).catch((error) => {
			setblog([]);

		});
	}


	useEffect(() => {

		setTrigger(true)
		if (trigger === true) {

			loadFabalList()
		}

	}, [trigger])
	useEffect(() => {
		if (fslider.length > 0) {
			setNumButtons(fslider.length);
		}
	}, [fslider]);
	const settings1 = {
		infinite: true,
		speed: 2500,
		arrows: false,
		slidesToShow: 3,
		autoplay: true,
		dots: true,
		autoplaySpeed: 5000,
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
			<section className="fables-stories">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="heading-sec">
								<h2 className="title-first" >Fables - Stories that Matter </h2>
							</div>
						</div>
					</div>
					<div>
						{
							isloading ?
								<div className="text-center">
									<video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
								</div>
								:
								<div>
									<div className="row">
										{
											fslider.length ?
												<div className="col-md-12">
													<div className="stories-sec-main">
														<div className="stories-sec-left d-sm-block">
															<div>
																{
																	fslider && fslider.length && fslider[sliderimag] ?



																		<div id="stories-timeout">
																			<Link to={`/blog/${fslider[sliderimag].slug}/`}>
																				<LazyLoader src={fslider[sliderimag]?.feature_image} width={"521"} height={"450"} alt={fslider[sliderimag]?.meta_title} />
																			</Link>																			
																		</div>
																		:
																		<div>
																			<LazyLoader src={fableData[0].feature_image} alt={fslider[sliderimag]?.meta_title} />													
																		</div>
																}

															</div>
														</div>

														<div className="stories-sec-right">
															<div className="">
																{
																	fslider && fslider.length && fslider[sliderimag] ?
																		<div className="stories-sec-right-des">
																			<Link to={`/blog/${fslider[sliderimag].slug}/`}>
																				<h4>{fslider[sliderimag].meta_title}</h4>
																				<p>{fslider[sliderimag].excerpt} <span className="read-btn"><em>...</em>Read More</span></p>
																			</Link>
																		</div>
																		:
																		<div className="stories-sec-right-des">
																			<h4>{fableData[0].title}</h4>
																			<p>{fableData[0].excerpt}</p>
																		</div>

																}
															</div>

															<div className="sec-slider-cont">
																<Slider {...settings1}
																	slidesToShow={3}														


																	beforeChange={(ev1, ev2) => {
																		setTimeout(() => {
																			setSliderImag(ev1)
																		}, 2000)

																	}}





																	className='stories-sec-slider'>
																	{
																		(fslider && fslider.length && fslider[sliderimag] ? fslider : []).map((response, i) => {

																			Id = fslider[sliderimag].slug;

																			return (

																				<div className="itm-img" key={response.id} onClick={() => {
																					loadFableBlog(Id);
																					setSliderImag(i);



																				}} >

																					<LazyLoader src={response.feature_image} alt={fslider[sliderimag]?.meta_title} width={"312"} height={"200"} />

																				</div>

																			)
																		})
																	}
																</Slider>
															</div>
														</div>
														<div className="stories-botton-dots">
															{Array.from({ length: numButtons }, (_, index) => (
																<Button key={index} className={`cust-slider-docts ${index === sliderimag ? 'active' : ''}`} onClick={() => {
																	setSliderImag(index)
																}}>

																</Button>
															))}
														</div>
													</div>
												</div> :
												<div className="text-center">
													<img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
												</div>
										}

									</div>
									{
										fslider.length ?
											<div className="row">
												<div className="col-md-12 mt-5 d-flex justify-content-center">
													<Link to="/blog" className="btn-bg generic-id-footer" >
														View All
													</Link>
												</div>
											</div> : ''
									}
								</div>
						}

					</div>
				</div>
			</section>


		</div>

	);
}

export default FablesStories;
