import Image1 from '../../assets/images/icons/regulated-by-sebi.svg';
import Image2 from '../../assets/images/icons/security.svg';
import Image3 from '../../assets/images/icons/privacy.svg';
import LazyLoader from '../Common-features/LazyLoader';



function SecurityPrivacy() {

	return (
		<div>
			<section className="security-privacy same-list-bx">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-8">
							<div className="heading-sec">
								<h2 className="title-first ">Security &amp; Privacy </h2>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12">

							<div className="same-list-bx-list">
								<div className="same-list-bx-item">

									<div className="bx-item-cont">
										<span className='cont-img'>
											<LazyLoader src={Image1} threshold={[0, 0.5, 1]} className={"sl-img"} alt={"Regulated by SEBI"} width={"71"} height={"71"} />											
										</span>
										
										<h4>Regulated</h4>
										<p>Regulated by SEBI, IRDAI, AMFI, BSE, NSE, MCX, MCDEX.</p>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont">
									<span className='cont-img'>
										<LazyLoader src={Image2} threshold={[0, 0.5, 1]} className={"sl-img"} width={"71"} height={"71"} alt={"Security"} />								
									</span>
										
										<h4>Security</h4>
										<p>We follow Industry leading security protocols.</p>
									</div>
								</div>
								<div className="same-list-bx-item">
									<div className="bx-item-cont">
									<span className='cont-img'>
										<LazyLoader src={Image3} threshold={[0, 0.5, 1]} className={"sl-img"} width={"71"} height={"71"} alt={"Privacy"} />
									</span>
										
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