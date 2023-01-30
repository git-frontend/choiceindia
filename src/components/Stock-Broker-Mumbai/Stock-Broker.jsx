import { useRef, useState, useEffect } from 'react';
import DematAccountForm from '../Common-features/DematAccountForm';
import LazyLoader from '../Common-features/LazyLoader';
import Banner from '../Stock-Broker-Mumbai/Banner';
import FinancialServices from '../Stock-Broker-Mumbai/FinancialServices';
import Openaccount from '../Stock-Broker-Mumbai/Openaccount';

import BestInMumbai from '../Stock-Broker-Mumbai/BestInMumbai';

import "./stock-broker-mumbai.scss"

import { useLocation, } from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import Navigation from '../../assets/images/stock-broker-mumbai/stock-broker-google-map-location.svg';
import Call from '../../assets/images/stock-broker-mumbai/stock-broker-contact-number.gif';
import stockBrokerCityService from '../../Services/StockBrokerCityContent';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Link } from "react-router-dom";
import Slider from 'react-slick';

function StockBroker() {


	// const [skeleton, setSkeleton] = useState(() => true);
	const [rendercount, setRenderCount] = useState(() => false);
	const [showterm, setshowterm] = useState(false);
	const location = useLocation();
	const [isloading, setisloading] = useState(true);
	const [content, setcontent] = useState();
	const [content2, setcontent2] = useState({});
	const[ischeck,setIscheck]=useState(false);
	const [name, setName ] = useState('');
	let values;
	let AllFilesValue = {};
	let pageLocation;
	const myRef1 = useRef(null);




	const getPosition = () => {
	const element = document.getElementById("branch1");
	if(element){
		const rect = element.getBoundingClientRect();
	
		if(rect.top.toFixed() > 140 && rect.top.toFixed() <350){
			setIscheck(true);
			// console.log('inside name', name);
		}
	
	}
}
	
	// const myTimeout = setTimeout(myGreeting, 1500);
	// function myGreeting() {
	//   setSkeleton(() => false);
	// }
	// setTimeout(() => {
	// 	setSkeleton(() => false);
	// }, 200)
	function pageDetect(){
		 pageLocation =(window.location.pathname.indexOf('/stock-broker-in-mumbai') > -1) ? "Mumbai":(window.location.pathname.indexOf('/stock-broker-in-bangalore') > -1)? "Bangalore":(window.location.pathname.indexOf('/stock-broker-in-chennai') > -1) ? "Chennai":(window.location.pathname.indexOf('/stock-broker-in-hyderabad') > -1) ? "Hyderabad":(window.location.pathname.indexOf('/stock-broker-in-delhi') > -1) ? "Delhi": ""

	}
	
	function stockBrokerContent() {
		pageDetect();
		
		stockBrokerCityService.stockContent(pageLocation).
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

	
		
	

	
		
	
	




	
	
  
	function stockBrokerContent2() {
		pageDetect();
	  stockBrokerCityService.stockCityContent().
		then(
		  res => {
			if (res && res.data && res.data.data) {
			  setisloading(false)
			  values = res.data.data;
			  values.forEach(ele => {
				if (!AllFilesValue[ele.city_name]) {
				  if(!(pageLocation == ele.city_name)){
					AllFilesValue[ele.city_name] = [];
					AllFilesValue[ele.city_name].push(ele)
				  }
				}
				 else {
				  AllFilesValue[ele.city_name].push(ele)
				}
			  })
			 
			  setcontent2(AllFilesValue);
			} else {
			  setisloading(false)
			  setcontent2([]);
			}
		  }
		).catch((error) => {
		  setisloading(false)
		  setcontent2([]);
		});
	}

	
	

	  useEffect(() => {
		setRenderCount(true)
		if (rendercount === true) {
			
			// locationDetect();
			stockBrokerContent();
			stockBrokerContent2();
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

			window.addEventListener('scroll', getPosition);
		}
	}, [rendercount])

	
	const settings = {
		infinite: false,
		speed: 1500,
		arrows: false,
		slidesToShow: 4,
		autoplay: Object. keys(content2). length === 6 ? true :false,
		dots: Object. keys(content2). length === 6 ? true :false,
		autoplaySpeed: 5000,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					adaptiveHeight: true,
		  dots:true,
		  autoplay:true
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
		  dots:true,
		  autoplay:true
				},
			},
		],
	};



	return (
		<div className="Home" onMouseOver={()=>setIscheck(true)} >

			{/* {
				skeleton ? <Template1 /> : */}
			<main className='home-main'>

				<section className="stockbanner">
					{
						content?.map((res, i) => {
							return (
								

								<div>
									{
										ischeck?
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
										{
                                ischeck ?
										<div className="col-xl-4 col-md-6 d-flex justify-content-end mt-5" id="DematAccountForm">

										<GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                    <DematAccountForm />
                                </GoogleReCaptchaProvider>
										</div>:
										<div className="col-xl-4 col-md-6 d-flex justify-content-end mt-5" id="DematAccountForm" onMouseOver={()=>setIscheck(true)}>

										
                                    <DematAccountForm />
                               
										</div>
						}

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
								</div>:
								 <div className="container">
								 <div className="row align-items-start">
								   <div className="col-xl-8 col-md-6">
									 <div className="wrap-banner">
									   <div className="heading-sec">
										 <h1 className="big-ttl"><span className='highlightblue'>Stock Broker</span>  in Mumbai</h1>
										 <p className="text">Choice is one of the best stock brokers in Mumbai, offering financial services in addition to investing in stocks, mutual funds, bonds, NPS, PPF, corporate FDs, and other financial instruments.{!showterm ? <span onClick={()=>{setshowterm(true);console.log("hhh")}}>... <em className="btn-read">View more</em></span>:""}{showterm ?<span>&nbsp;Open a free Demat account with us to begin your investment journey with India's leading stock broker, headquartered in Mumbai. If you are looking for a stock broker in your area, we have two branches in Mumbai that can offer you support and assistance with your financial needs.
										 <span onClick={()=>{setshowterm(false);console.log("hhh")}}>&nbsp;<em className="btn-read">View less</em></span></span>:""}</p>
									   </div>
									   <div className="details">
										   <div className="navigation">
										  <a href="https://goo.gl/maps/nVAcmGtwDV5wQVbA9" target="_blank"> <LazyLoader src={Navigation} alt={"Google Map Location for Stock Broker in Mumbai"} className={"img-fluid"} width={"28"} height={"28"}/></a>
										   </div>
										   <a href="tel:02267079999" target="_blank" class="calldetail2">
											 <span className="callwrap">
											   <LazyLoader src={Call} alt={"Contact Number for Stock Broker in Mumbai"} className={"img-fluid"} width={"34"} height={"34"}/>
											   </span>
											   <span class="text">022 6707 9999</span>
										   </a>
									   </div>
									   <div className="companydetail">
										   <div className="address">
											   <p className="heading">Address:</p>
											   <p className="text">Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri East, Mumbai, Maharashtra 400099</p>
										   </div>
										   <div className="timing">
											   <p className="heading">Business Hours:</p>
											   <p className="text"><span className="day">Monday to Friday:</span> <span className="time">8:30 am - 7:00 pm</span></p>
											   <p className="text"><span className="day">Saturday:</span> <span className="time">10:00 am - 4:00 pm</span></p>
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
											   <p className="heading">Address:</p>
											   <p className="text">Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri East, Mumbai, Maharashtra 400099</p>
										   </div>
										   <div className="timing">
											   <p className="heading">Business Hours:</p>
											   <p className="text"><span className="day">Monday to Friday:</span> <span className="time">8:30 am - 7:00 pm</span></p>
											   <p className="text"><span className="day">Saturday:</span> <span className="time">10:00 am - 4:00 pm</span></p>
										   </div>
									   </div>
									 </div>
								 </div> 
							   </div>
									}
									
								</div>

							)
						})
					}

				</section>
				<FinancialServices />
				<Openaccount />
				<section className="branch"  onScroll={getPosition}>
        <div className="container" ref={myRef1} id="branch1">
          <div className="row">
            <div className="col-md-12 ">
              <div className="heading-sec">
                <h2 className="title-first text-center">Our Other Branches Near You</h2>
                <p className="text-center mb-5 branchsubtext">Stock Broker in</p>
              </div>

            </div>
          </div>
          <div className="row" >

            <div className="col-md-12">
			{
                                ischeck ?

            <Slider {...settings} className="branches-list" >
            {
                  Object.keys(content2)?.map((key, i) => {
                    return (

                      <div className="branch-item">
                          {
                          content2[key]?.map((res, index) => {
                            return (
                              <div key={index}  onClick={()=>{stockBrokerContent();stockBrokerContent2();}}>
                                <Link to={`${res.link}`}>
                                <span className="img-itm">
                                  <LazyLoader src={`https://cmsapi.choiceindia.com/assets/${res.file_name}`} alt={res.alt} className={"img-fluid"} width={"144"} height={"144"} />

                                  </span>
                                  <h5>{res.city_name}</h5>
                                  </Link>
                                </div>
                            )}
                          )}   
                    </div>

                    )}
                    )}
              
               
              </Slider>     :
			  ""
							}           
									
                                   
                                    
										
                  

                


             





            </div>

          </div>
        </div>
      </section>
	  {
		ischeck ?
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
														<span onClick={() => { setshowterm(false) }}><em className="btn-read">Read less</em></span></span> : ""}</p>


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

				</section>:""

	  }
				


			</main>
			{/* } */}




		</div>
	);
}

export default StockBroker;
