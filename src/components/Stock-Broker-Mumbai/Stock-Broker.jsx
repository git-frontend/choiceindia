import { useState, useEffect } from 'react';
import DematAccountForm from '../Common-features/DematAccountForm';
import LazyLoader from '../Common-features/LazyLoader';
import Banner from '../Stock-Broker-Mumbai/Banner';
import FinancialServices from '../Stock-Broker-Mumbai/FinancialServices';
import Openaccount from '../Stock-Broker-Mumbai/Openaccount';
import Branches from '../Stock-Broker-Mumbai/Branches';
import BestInMumbai from '../Stock-Broker-Mumbai/BestInMumbai';

import "./stock-broker-mumbai.scss"

import { useLocation, } from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import Navigation from '../../assets/images/stock-broker-mumbai/stock-broker-google-map-location.svg';
import Call from '../../assets/images/stock-broker-mumbai/stock-broker-contact-number.gif';
import stockBrokerCityService from '../../Services/StockBrokerCityContent';
function StockBroker() {


	// const [skeleton, setSkeleton] = useState(() => true);
	const [rendercount, setRenderCount] = useState(() => false);
	const [showterm, setshowterm] = useState(false);
	const location = useLocation();
	const [isloading, setisloading] = useState(true);
	const [content, setcontent] = useState();
	
	// const myTimeout = setTimeout(myGreeting, 1500);
	// function myGreeting() {
	//   setSkeleton(() => false);
	// }
	// setTimeout(() => {
	// 	setSkeleton(() => false);
	// }, 200)
	
	function stockBrokerContent(type) {
		stockBrokerCityService.stockContent(type).
			then(
				res => {
					if (res && res.data && res.data.data) {
						setisloading(false)
						setcontent(res.data.data) ;
						
					} else {
						setisloading(false)
						setcontent([]);

					}

				}
			).catch((error) => {
				setisloading(false)
				setcontent([]);
			});

	}



	useEffect(() => {
		setRenderCount(true)
		if (rendercount === true) {
			let pageLocation =(window.location.pathname.indexOf('/stock-broker-in-mumbai') > -1) ? "Mumbai":(window.location.pathname.indexOf('/stock-broker-in-bangalore') > -1)? "Bangalore": ""
			stockBrokerContent(pageLocation)
			// let parser = new DOMParser();
			// let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
			// document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
			document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
			// document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
			document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
			document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
			document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
			if (!(document.getElementById('link1') == null)) {
				document.getElementById('link1').remove();
				document.getElementById('link2').remove();
				document.getElementById('link3').remove();
				document.getElementById('link4').remove();
				document.getElementById('link5').remove();
				document.getElementById('link6').remove();
			}
		}
	}, [rendercount])

	return (
		<div className="Home">

			{/* {
				skeleton ? <Template1 /> : */}
			<main className='home-main'>

				<section className="stockbanner">
					{
						content?.map((res, i) => {
							return (
								<div className="container" >
									<div className="row align-items-start">
										<div className="col-xl-8 col-md-6">
											<div className="wrap-banner">
												<div className="heading-sec" key={i}>
													<h1 className="big-ttl"><span className='highlightblue'>{res.bannerheading}</span>  {res.bannerheadingright}</h1>
													<p className="text">{res.banner_view_less}{!showterm ? <span onClick={() => { setshowterm(true) }}>... <em className="btn-read">View more</em></span> : ""}{showterm ? <span>&nbsp;{res.banner_view_more}
														<span onClick={() => { setshowterm(false) }}>&nbsp;<em className="btn-read">View less</em></span></span> : ""}</p>
												</div>
												<div className="details">
													<div className="navigation">
														<a href={res.direction} target="_blank"> <LazyLoader src={Navigation} alt={"Google Map Location for Stock Broker in Mumbai"} className={"img-fluid"} width={"28"} height={"28"} /></a>
													</div>
													<a href={`tel:${res.contact_no}`} target="_blank" class="calldetail2">
														<span className="callwrap">
															<LazyLoader src={Call} alt={"Contact Number for Stock Broker in Mumbai"} className={"img-fluid"} width={"34"} height={"34"} />
														</span>
														<span class="text">{res.contact_no}</span>
													</a>
												</div>
												<div className="companydetail">
													<div className="address">
														<p className="heading">{res.address}</p>
														<p className="text">{res.address_detail}</p>
													</div>
													<div className="timing">
														<p className="heading">{res.hours}</p>
														<p className="text"><span className="day">{res.day}</span> <span className="time">{res.working_time}</span></p>
														<p className="text"><span className="day">{res.extra_day}</span> <span className="time">{res.extra_hour}</span></p>
													</div>
												</div>


											</div>
										</div>
										<div className="col-xl-4 col-md-6 d-flex justify-content-end mt-5" id="DematAccountForm">

											<DematAccountForm />
										</div>
									</div>
									<div className="row">
										<div className="col-xl-8 col-md-12">
											<div className="companydetail companydetail-tab">
												<div className="address">
													<p className="heading">{res.address}</p>
													<p className="text">{res.address_detail}</p>
												</div>
												<div className="timing">
													<p className="heading">{res.hours}</p>
													<p className="text"><span className="day">{res.day}</span> <span className="time">{res.working_time}</span></p>
													<p className="text"><span className="day">{res.extra_day}</span> <span className="time">{res.extra_hour}</span></p>
												</div>
											</div>
										</div>
									</div>
								</div>

							)
						})
					}

				</section>
				<FinancialServices />
				<Openaccount />
				<Branches />
				<section className="best-in-mumbai">
					{
						content?.map((res, i) => {
							return (
								<div className="container">
									<div className="row">

										<div className="col-md-12">
											<div className="left-sec heading-sec">
												<h2 className="title-secnd mb-4">{res.bottom_heading}</h2>





												<p className="">
													<p className="">
														{res.bottom_view_less_text}
													</p>
													<p className="mb-0">
														{res.bottom_view_less_text2}
													</p>

													{!showterm ? <span onClick={() => { setshowterm(true) }}> <em className="btn-read">Read more</em></span> : ""}
													{showterm ? <span>&nbsp;
														<p className="">
															{res.bottom_view_more_text}
														</p>
														<p className="mb-0">
															{res.bottom_view_more_text2}

														</p>
														<span onClick={() => { setshowterm(false) }}>&nbsp;<em className="btn-read">Read less</em></span></span> : ""}</p>


											</div>

										</div>
										{/* <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="right-sec  best-mumbai-img">
              <LazyLoader src={BestMumbai} alt={"Best Stock Broker in Mumbai"} className={"img img-fluid"} width={"258"} height={"238"}/>
              </div>
            </div> */}

									</div>
								</div>

							)
						})
					}

				</section>


			</main>
			{/* } */}




		</div>
	);
}

export default StockBroker;
