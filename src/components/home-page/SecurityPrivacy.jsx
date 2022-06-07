import  Image1  from '../../assets/images/icons/auction.svg';
import  Image2  from '../../assets/images/icons/shield2.svg';
import  Image3  from '../../assets/images/icons/padlock.svg';
import LazyLoader from '../Common-features/LazyLoader';

function SecurityPrivacy() {
    return (
        <div>


<section className="security-privacy same-list-bx"> 
				<div className="container">	
					<div className="row d-flex justify-content-center">
						<div className="col-md-8">
							<div className="heading-sec">
								<h3 className="title-first ">Security &amp; Privacy </h3>								
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">
							<div className="same-list-bx-list">
								<div className="same-list-bx-item">
									<div className="bx-item-cont">
									<LazyLoader src={Image1} threshold={[0, 0.5, 1]} className="" alt="Loading"/>
										{/* <img src={Image1} className="" alt="" /> */}
										<h4>Regulated</h4>
										<p>Regulated by SEBI, IRDAI, AMFI, BSE, NSE, MCX, MCDEX.</p>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont">
									<LazyLoader src={Image2} threshold={[0, 0.5, 1]} className="" alt="Loading"/>
                                        <img src={Image2} className="" alt="" />
										<h4>Security</h4>
										<p>We follow Industry leading security protocols.</p>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont">
									<LazyLoader src={Image3} threshold={[0, 0.5, 1]} className="" alt="Loading"/>
                                      {/* <img src={Image3} className="" alt="" /> */}
										<h4>Privacy</h4>
										<p>We will never share your data without your consent.</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>



        </div>

    );
}

export default SecurityPrivacy;