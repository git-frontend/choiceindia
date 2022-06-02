import TaxAdvisory from '../../assets/images/services/tax-advisory.svg';
import EquityBroking from '../../assets/images/services/equity-broking.svg';
import WealthManagement from '../../assets/images/services/wealth-management.svg';
import Insurance from '../../assets/images/services/insurance.svg';
import Loans from '../../assets/images/services/loans.svg';
import CapitalAdvisory from '../../assets/images/services/capital-advisory.svg';
import ManagementConsult from '../../assets/images/services/management-consult.svg';
import GovernmentAdvisory from '../../assets/images/services/government-advisory.svg';


function ServiceTabs() {
    return (
        <div>


			<section className="security-privacy same-list-bx services-same-list-bx"> 
				<div className="container">	
					
					<div className="row">
						<div className="col-md-12">
							<div className="same-list-bx-list">
								<div className="same-list-bx-item">
									<a href='\' className="bx-item-cont">
										<img src={EquityBroking} className="" alt="Equity Broking" />
										<h4 className='title-fourth'>Equity Broking</h4>
									</a>
								</div>
								<div className="same-list-bx-item">
									<a href='\' className="bx-item-cont">
                                        <img src={WealthManagement} className="" alt="Wealth Management" />
										<h4 className='title-fourth'>Wealth Management</h4>
									</a>
								</div>
								<div className="same-list-bx-item">
									<a href='\' className="bx-item-cont">
                                      <img src={Insurance} className="" alt="Insurance" />
										<h4 className='title-fourth'>Insurance</h4>
									</a>
								</div>
								<div className="same-list-bx-item">
									<a href='\' className="bx-item-cont">
                                      <img src={Loans} className="" alt="Loans" />
										<h4 className='title-fourth'>Loans</h4>
									</a>
								</div>
								<div className="same-list-bx-item">
									<a href='\' className="bx-item-cont">
                                      <img src={CapitalAdvisory} className="" alt="Capital Advisory" />
										<h4 className='title-fourth'>Capital Advisory</h4>
									</a>
								</div>
								<div className="same-list-bx-item">
									<a href='\' className="bx-item-cont">
                                      <img src={ManagementConsult} className="" alt="Management Consult..." />
										<h4 className='title-fourth'>Management Consult...</h4>
									</a>
								</div>
								<div className="same-list-bx-item">
									<a href='\' className="bx-item-cont">
                                      <img src={GovernmentAdvisory} className="" alt="Government Advisory" />
										<h4 className='title-fourth'>Government Advisory</h4>
									</a>
								</div>
								<div className="same-list-bx-item">
									<a href='\' className="bx-item-cont">
                                      <img src={TaxAdvisory} className="" alt="Tax Advisory" />
										<h4 className='title-fourth'>Tax Advisory</h4>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>



        </div>

    );
}

export default ServiceTabs;