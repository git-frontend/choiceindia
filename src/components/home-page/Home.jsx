import { useState, useEffect } from 'react';
import  HomePageBanner from './HomePageBanner.jsx'
import EverydayFinance from './EverydayFinance.jsx'
import ChoiceFinx from './ChoiceFinx.jsx'
import MarketInsights from './MarketInsights.jsx'
import HomeFeatures from './HomeFeatures.jsx'
import FablesStories from './FablesStories.jsx'
import HomeTestimonial from './HomeTestimonial.jsx'
import SecurityPrivacy from './SecurityPrivacy.jsx'
// import  HomeHeader from './home-page/HomeHeader.jsx'
import "./style.scss"
import videoBg from '../../assets/vedio/videoBg.webm'
import Template1 from '../Common-features/Template1';
import {
    useLocation,
  } from 'react-router-dom';
  import meta_tags from "../../Data/MetaTags";

function Home() {


	const [skeleton, setSkeleton] = useState(() => false);
	const [rendercount, setRenderCount] = useState(() => false);

    const location = useLocation();
	// const myTimeout = setTimeout(myGreeting, 1500);
	// function myGreeting() {
	//   setSkeleton(() => false);
	// }
/* 	setTimeout(() => {
		setSkeleton(() => false);
	}, 200) */

	useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
          // let parser = new DOMParser();
          // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
          // document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
          document.title = meta_tags["https://dev.choiceindia.com/"] ? meta_tags["https://dev.choiceindia.com/"].title : '';
          // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
          document.getElementById('meta-tags').content = meta_tags["https://dev.choiceindia.com/"] ? meta_tags["https://dev.choiceindia.com/"].content : '';
          document.getElementById('canonical-link').href = meta_tags["https://dev.choiceindia.com/"] ? meta_tags["https://dev.choiceindia.com/"].link : '';
        }
      }, [rendercount])


	return (
		<div className="Home">

			{
				skeleton ? <Template1 /> :
					<main className='home-main'>

						{/* <div className='home-banner-ved'>
							<div className="overlay"></div>
							<video src={videoBg} autoPlay loop muted className='banner-ved' />
							<div className='banner-ved-des'>
								<div className='container'>
									<div className='banner-caption' >
										<h1>Experience<br />
										The Joy of<br />
										Earning</h1>
									</div>
								</div>
							</div>
						</div> */}

						<HomePageBanner />


						<EverydayFinance />

						<ChoiceFinx />

						<MarketInsights />



						<HomeFeatures />

						<FablesStories />

						<section className="count-value-section">
							<div className="container">
								<div className="row">
									<div className="col-lg-7">
										<div className="count-value-list">
											<div className="count-value-item">
												<h4>2 Lakh+</h4>
												<h5>Clients</h5>
											</div>
											<div className="count-value-item">
												<h4>2,200+</h4>
												<h5>Employees</h5>
											</div>
											<div className="count-value-item">
												<h4>55+</h4>
												<h5>Offices</h5>
											</div>
											<div className="count-value-item">
												<h4>13,000+</h4>
												<h5>Partners</h5>
											</div>
										</div>
									</div>
									<div className="col-lg-5">
										<div className="heading-sec">
											<h2 className="title-first">We value trust above everything</h2>
											<p>Discover why Lakhs of customers choose to invest with CHOICE</p>
										</div>
									</div>
								</div>
							</div>
						</section>

						<HomeTestimonial />

						<SecurityPrivacy />




					</main>
			}




		</div>
	);
}

export default Home;
