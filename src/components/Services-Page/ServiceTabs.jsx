import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import TaxAdvisory from '../../assets/images/services/tax-advisory.svg';
import EquityBroking from '../../assets/images/services/equity-broking.svg';
import WealthManagement from '../../assets/images/services/wealth-management.svg';
import Insurance from '../../assets/images/services/insurance.svg';
import Loans from '../../assets/images/services/loan.svg';
import CapitalAdvisory from '../../assets/images/services/capital-advisory.svg';
import ManagementConsultancy from '../../assets/images/services/management-consultancy.svg';
import GovernmentAdvisory from '../../assets/images/services/government-advisory.svg';
import EquityBroking1 from './EquityBroking';
import WealthManagement1 from './WealthManagement';
import Insurance1 from './Insurance';
import Loans1 from './Loans';
import CapitalAdvisory1 from './CapitalAdvisory';
import ManagementConsultancy1 from './ManagementConsultancy';
import GovernmentAdvisory1 from './GovernmentAdvisory';
import TaxAdvisory1 from './TaxAdvisory';
import React,{useRef} from 'react';
import LazyLoader from "../Common-features/LazyLoader";
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)





function ServiceTabs() {
	

	function chapterScroll(id) {
		var element = document.getElementById(id);
		var headerOffset = 140;
		var elementPosition = element.getBoundingClientRect().top;
		var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
		window.scrollTo({
		  top: offsetPosition,
		  behavior: "smooth"
		});
	  }

const settings = {
	infinite: false,
	speed: 1500,
	arrows: false,
	slidesToShow: 4,
	autoplay: false,
	margin:15,
	dots:true,
	autoplaySpeed: 1000,
	slidesToScroll: 4,
	responsive: [
	  {
		breakpoint: 992,
		settings: {
		  slidesToShow: 3,
		  slidesToScroll: 3,
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


			<section className="security-privacy same-list-bx services-same-list-bx"> 
				<div className="container">	
					
					<div className="row">
						<div className="col-md-12">
							{/* <div className="same-list-bx-list"> */}
							<Slider {...settings} className="same-list-bx-list">
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={() => { chapterScroll('equitybroking') }}>
										<span className="cont-img">
										<LazyLoader src={EquityBroking} className={"mn-img"} alt={"Equity Broking"} width={"65"} height={"65"} />
										{/* <img src={EquityBroking} className="" alt="Equity Broking" width={"65"} height={"65"} /> */}
										</span>
										
										<h4 className='title-fourth'>Equity Broking</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div  className="bx-item-cont" onClick={() => { chapterScroll('wealth') }}>
										<span className="cont-img">
											<LazyLoader src={WealthManagement} className={"mn-img"} alt={"Wealth Management"} width={"65"} height={"65"} />
											{/* <img src={WealthManagement} className="" alt="Wealth Management" width={"65"} height={"65"} /> */}
										</span>
										<h4 className='title-fourth'>Wealth Management</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={() => { chapterScroll('insurance') }}>
										<span className="cont-img">
											<LazyLoader src={Insurance} className={"mn-img"} alt={"Insurance"} width={"65"} height={"65"} />
											{/* <img src={Insurance} className="" alt="Insurance" width={"65"} height={"65"} /> */}
										</span>
										<h4 className='title-fourth'>Insurance</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={() => { chapterScroll('loan') }}>
									<span className="cont-img">
									<LazyLoader src={Loans} className={"mn-img"} alt={"Loans"} width={"65"} height={"65"} />
										{/* <img src={Loans} className="" alt="Loans" width={"65"} height={"65"} /> */}
									</span>
										
										<h4 className='title-fourth'>Loans</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={() => { chapterScroll('capital') }}>
									<span className="cont-img">
									<LazyLoader src={CapitalAdvisory} className={"mn-img"} alt={"capital advisory"} width={"65"} height={"65"} />
										{/* <img src={CapitalAdvisory} className="" alt="Capital Advisory" width={"65"} height={"65"} /> */}
									</span>
										
										<h4 className='title-fourth'>Capital Advisory</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={() => { chapterScroll('management') }}>
										<span c-lassName="cont-img">
										<LazyLoader src={ManagementConsultancy} className={"mn-img"} alt={"management-consultancy"} width={"65"} height={"65"} />
										{/* <img src={ManagementConsultancy} className="" alt="Management Consultancy" width={"65"} height={"65"} /> */}
										</span>
										<h4 className='title-fourth'>Management Consultancy</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={() => { chapterScroll('goverment') }}>
										<span className="cont-img">
											<LazyLoader src={GovernmentAdvisory} className={"mn-img"} alt={"government advisory"} width={"65"} height={"65"} />
											{/* <img src={GovernmentAdvisory} className="" alt="Government Advisory" width={"65"} height={"65"} /> */}
										</span>
										<h4 className='title-fourth'>Government Advisory</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={() => { chapterScroll('tax') }}>
										<span className="cont-img">
											<LazyLoader src={TaxAdvisory} className={"mn-img"} alt={"Tax Advisory"} width={"65"} height={"65"} />
											{/* <img src={TaxAdvisory} className="" alt="Tax Advisory" width={"65"} height={"65"} /> */}
										</span>
										<h4 className='title-fourth'>Tax Advisory</h4>
									</div>
								</div>
							</Slider>
						</div>
					</div>
				</div>
			</section>

			<div id="equitybroking">
			<EquityBroking1 />
			</div>

			<div id="wealth">
			<WealthManagement1 />
			</div>
			<div id="insurance">
			<Insurance1/>
			</div>
			<div id="loan">
			<Loans1 />
			</div>
			<div id="capital">
			<CapitalAdvisory1 />
			</div>
			<div id="management">
			<ManagementConsultancy1 />
			</div>
			<div id="goverment">
			<GovernmentAdvisory1 />
			</div>
			<div id="tax">
			<TaxAdvisory1 />
			</div>
			




        </div>

    );
}

export default ServiceTabs;