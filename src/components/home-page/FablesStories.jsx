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
	const [fslider, setfslider] = useState([]);
	const [blog, setblog] = useState();
	const [trigger, setTrigger] = useState();
	const [sliderimag, setSliderImag] = useState(5);
	

	/** get list of fabal */

	function loadFabalList() {

		homeServices.fabalStory().then(
			res => {
				if (res && res.status === 200 && res.data && res.data.posts) {
					setfslider(res.data.posts);

				} else {
					setfslider([]);
				}
				
			}
		).catch((error) => {
            setfslider([]);
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
					<div className="row">
						<div className="col-md-12">
							<div className="stories-sec-main">
								<div className="stories-sec-left d-none d-sm-block">
									<div>
										{
											fslider && fslider.length && fslider[sliderimag] ?

											
                                              
												<div id="stories-timeout">
													<LazyLoader src={fslider[sliderimag]?.feature_image} width={"521"} height={"450"} alt={fslider[sliderimag]?.meta_title} />
													{/* <img src={fslider[sliderimag].feature_image} alt="Loading" /> */}
												</div>
												:
												<div>
													<LazyLoader src={fableData[0].feature_image} alt={fslider[sliderimag]?.meta_title} />
													{/* <img src={fableData[0].feature_image} alt="Loading" /> */}
												</div>
										}

									</div>
								</div>

								<div className="stories-sec-right">
									<div className="">
										{
											fslider && fslider.length && fslider[sliderimag] ?
												<div className="stories-sec-right-des">
													<Link to={`/blog/${fslider[sliderimag].slug}`}>
														<h4>{fslider[sliderimag].meta_title}</h4>
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
									<div className="sec-slider-cont">
										<Slider {...settings1}
											slidesToShow={3}
											// swipeToSlide={true}
											// focusOnSelect={true}
											

												beforeChange={(ev1,ev2) => {
													setTimeout(() => {
													setSliderImag(ev1)	
												}, 2000)	
												
											}}
												
												    
											


											className='stories-sec-slider'>
											{
												(fslider && fslider.length && fslider[sliderimag] ? fslider:[]).map((response,i) => {
													
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

							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 mt-5 d-flex justify-content-center">
							<Link to="/blog" className="btn-bg">
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
