import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import { Link } from "react-router-dom";

function ValueTrust() {

	return (
		<>
			<section className="app-benefits-section">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 d-flex">
								<div className="benifit-value-list">

									<div className="benifit-value-item">
										<h4>850K+</h4>
										<h6>Clients</h6>
									</div>
									<div className="benifit-value-item">
										<h4>3.4K+</h4>
										<h6>Employees</h6>
									</div>
									<div className="benifit-value-item">
										<h4>104+</h4>
										<h6>Offices</h6>
									</div>
									<div className="benifit-value-item">
										<h4>32K+</h4>
										<h6>Partners</h6>
									</div>

								</div>
							</div>
						<div className="col-lg-4">
							<div className="heading-sec">
								<h2 className="title-secnd">We value trust <br />above everything</h2>
								<p>Discover why Lakhs of customers choose to invest with CHOICE.</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default ValueTrust;
