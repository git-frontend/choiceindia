import "../assets/css/style.scss"
import  HomePageBanner from './home-page/HomePageBanner.jsx'
import  EverydayFinance from './home-page/EverydayFinance.jsx'
import  ChoiceFinx from './home-page/ChoiceFinx.jsx'
import  MarketInsights from './home-page/MarketInsights.jsx'
import  HomeFeatures from './home-page/HomeFeatures.jsx'
import  FablesStories from './home-page/FablesStories.jsx'
import  HomeTestimonial from './home-page/HomeTestimonial.jsx'
import  SecurityPrivacy from './home-page/SecurityPrivacy.jsx'
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"






function Home() {





  return (
    <div className="Home">

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

    </div>
  );
}

export default Home;
