
import HomePageBanner from './HomePageBanner.jsx'
import EverydayFinance from './EverydayFinance.jsx'
import ChoiceFinx from './ChoiceFinx.jsx'
import MarketInsights from './MarketInsights.jsx'
import HomeFeatures from './HomeFeatures.jsx'
import FablesStories from './FablesStories.jsx'
import HomeTestimonial from './HomeTestimonial.jsx'
import SecurityPrivacy from './SecurityPrivacy.jsx'
// import  HomeHeader from './home-page/HomeHeader.jsx'
import "./style.scss"
import Template4 from "../Common-features/Template4";
import {useState} from 'react';


function Home() {

	const [skeleton, setSkeleton] = useState(() => true);

	setTimeout(myGreeting, 1000);

	function myGreeting() {
		setSkeleton(() => false);
	}

	return (
		<div className="Home">
			{
				skeleton ? <Template4 /> :
					<main>



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
											<h3 className="title-first">We value trust above everything</h3>
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