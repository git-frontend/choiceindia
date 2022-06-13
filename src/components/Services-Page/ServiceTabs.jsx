import TaxAdvisory from '../../assets/images/services/tax-advisory.svg';
import EquityBroking from '../../assets/images/services/equity-broking.svg';
import WealthManagement from '../../assets/images/services/wealth-management.svg';
import Insurance from '../../assets/images/services/insurance.svg';
import Loans from '../../assets/images/services/loans.svg';
import CapitalAdvisory from '../../assets/images/services/capital-advisory.svg';
import ManagementConsultancy from '../../assets/images/services/management-consult.svg';
import GovernmentAdvisory from '../../assets/images/services/government-advisory.svg';
import EquityBroking1 from './EquityBroking';
import WealthManagement1 from './WealthManagement';
import Insurance1 from './Insurance';
import Loans1 from './Loans';
import CapitalAdvisory1 from './CapitalAdvisory';
import ManagementConsultancy1 from './ManagementConsultancy';
import GovernmentAdvisory1 from './GovernmentAdvisory';
import TaxAdvisory1 from './TaxAdvisory';
import React, { useRef } from 'react';
import LazyLoader from '../Common-features/LazyLoader';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)





function ServiceTabs() {
	const event = useRef(null)
	const event1 = useRef(null)
	const event2 = useRef(null)
	const event3 = useRef(null)
	const event4 = useRef(null)
	const event5 = useRef(null)
	const event6 = useRef(null)
	const event7 = useRef(null)




	const handleFocus = () => {
		scrollToRef(event);
	}

	const handleWealth = () => {
		scrollToRef(event1)
	}
	const handleLoan = () => {
		scrollToRef(event3);
	}
	const handleInsurance = () => {
		scrollToRef(event2);
	}
	const handleCapital = () => {
		scrollToRef(event4);
	}
	const handleManagement = () => {
		scrollToRef(event5);
	}
	const handleTax = () => {
		scrollToRef(event6);
	}
	const handleGovt = () => {
		scrollToRef(event7);
	}

	return (
		<div>


			<section className="security-privacy same-list-bx services-same-list-bx">
				<div className="container">

					<div className="row">
						<div className="col-md-12">
							<div className="same-list-bx-list">
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={handleFocus}>
									<LazyLoader src={EquityBroking} className={''} alt={'Equity Broking'}/>
										{/* <img src={EquityBroking} className="" alt="Equity Broking" /> */}
										<h4 className='title-fourth'>Equity Broking</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={handleWealth}>
									<LazyLoader src={WealthManagement} className={''} alt={'Wealth Management'}/>
										{/* <img src={WealthManagement} className="" alt="Wealth Management" /> */}
										<h4 className='title-fourth'>Wealth Management</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={handleInsurance}>
									<LazyLoader src={Insurance} className={''} alt={'Insurance'}/>	
										{/* <img src={Insurance} className="" alt="Insurance" /> */}
										<h4 className='title-fourth'>Insurance</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={handleLoan}>
									<LazyLoader src={Loans} className={''} alt={'Loans'}/>
										{/* <img src={Loans} className="" alt="Loans" /> */}
										<h4 className='title-fourth'>Loans</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={handleCapital}>
									<LazyLoader src={CapitalAdvisory} className={''} alt={'Capital Advisory'}/>
										{/* <img src={CapitalAdvisory} className="" alt="Capital Advisory" /> */}
										<h4 className='title-fourth'>Capital Advisory</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={handleManagement}>
									<LazyLoader src={ManagementConsultancy} className={''} alt={'Management Consultancy'}/>
										{/* <img src={ManagementConsultancy} className="" alt="Management Consultancy" /> */}
										<h4 className='title-fourth'>Management Consultancy</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={handleGovt}>
									<LazyLoader src={GovernmentAdvisory} className={''} alt={'Government Advisory'}/>
										{/* <img src={GovernmentAdvisory} className="" alt="Government Advisory" /> */}
										<h4 className='title-fourth'>Government Advisory</h4>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont" onClick={handleTax}>
									<LazyLoader src={TaxAdvisory} className={''} alt={'Tax Advisory'}/>
										{/* <img src={TaxAdvisory} className="" alt="Tax Advisory" /> */}
										<h4 className='title-fourth'>Tax Advisory</h4>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div ref={event}>
				<EquityBroking1 />
			</div>

			<div ref={event1}>
				<WealthManagement1 />
			</div>
			<div ref={event2}>
				<Insurance1 />
			</div>
			<div ref={event3}>
				<Loans1 />
			</div>
			<div ref={event4}>
				<CapitalAdvisory1 />
			</div>
			<div ref={event5}>
				<ManagementConsultancy1 />
			</div>
			<div ref={event6}>
				<GovernmentAdvisory1 />
			</div>
			<div ref={event7}>
				<TaxAdvisory1 />
			</div>





		</div>

	);
}

export default ServiceTabs;
