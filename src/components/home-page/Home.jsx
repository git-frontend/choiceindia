import { useState, useEffect } from 'react';
import HomePageBanner from './HomePageBanner.jsx'
import EverydayFinance from './EverydayFinance.jsx'
import ChoiceFinx from './ChoiceFinx.jsx'
import MarketInsights from './MarketInsights.jsx'
import HomeFeatures from './HomeFeatures.jsx'
import FablesStories from './FablesStories.jsx'
import HomeTestimonial from './HomeTestimonial.jsx'
import SecurityPrivacy from './SecurityPrivacy.jsx'
import "./style.scss"
import videoBg from '../../assets/vedio/videoBg.webm'
import Template1 from '../Common-features/Template1';
import {
	useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
function Home() {


	const [rendercount, setRenderCount] = useState(() => false);
	const [showTermsCondition, setShowTermsCondition] = useState(false);
	const [trigger, setTrigger] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setRenderCount(true)
		if (rendercount === true) {
			let parser = new DOMParser();
			let doc = parser.parseFromString(meta_tags['https://choiceindia.com/'].faqscript, 'text/html');
			document.body.appendChild(doc.getElementsByTagName('script')[0] ? doc.getElementsByTagName('script')[0] : '');
			document.title = meta_tags["https://choiceindia.com/"] ? meta_tags["https://choiceindia.com/"].title : '';
			document.getElementById('meta-tags').content = meta_tags["https://choiceindia.com/"] ? meta_tags["https://choiceindia.com/"].content : '';
			document.getElementById('canonical-link').href = meta_tags["https://choiceindia.com/"] ? meta_tags["https://choiceindia.com/"].link : '';
			document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : 'en';
			if (!(document.getElementById('link1') == null)) {
				document.getElementById('link1').remove();
				document.getElementById('link2').remove();
				document.getElementById('link3').remove();
				document.getElementById('link4').remove();
				document.getElementById('link5').remove();
				document.getElementById('link6').remove();

			}
		}
	}, [rendercount])

	function handleTermsConditionShow() {
        setShowTermsCondition(true);
    }

    function handleTermsConditionClose() {
        setShowTermsCondition(false);
    }
	useEffect(() => {
			handleTermsConditionShow()
  
	 }, [])
	return (
		<div className="Home">

			<main className='home-main'>


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
										<h4>850K+</h4>
										<h5>Clients</h5>
									</div>
									<div className="count-value-item">
										<h4>3.4K+</h4>
										<h5>Employees</h5>
									</div>
									<div className="count-value-item">
										<h4>104+</h4>
										<h5>Offices</h5>
									</div>
									<div className="count-value-item">
										<h4>32K+</h4>
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


				<Modal show={showTermsCondition} size="lg" onHide={handleTermsConditionClose} backdrop="static"
					keyboard={false} centered  className="investor-popup-model">
					<Modal.Header closeButton>
						<Modal.Title></Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>Dear Investor,</p>

						<p>Important Announcement: Beware of Fraudulent Entities Claiming to be Choice or its associates</p>

						<p><strong>This is to inform you all that our official website is <a href="/">www.choiceindia.com</a>.</strong></p>

						<p>Please be advised that any person or business claiming to be "Choice" or using a similar name/logo without our official website domain is not associated with us.</p>

						<p>Do not make payment to any third person bank account. <strong> Payments for our services should be made only if bank account is in the name of Choice Equity Broking Private Limited </strong>and you can verify the bank details from our official website as above.</p>

						<p>We are committed to maintain the highest standards of integrity and transparency, and we urge our customers and the public at large to exercise caution and verify the authenticity of any entity claiming to be associated with Choice and do not fall prey to such fraudulent entities.</p></Modal.Body>
						<Modal.Footer>
                    <Button variant="warning" className='btn-bg-popup btn-bg-dark' onClick={handleTermsConditionClose}>Okay</Button>
                </Modal.Footer>
				</Modal>

			</main>




		</div>
	);
}

export default Home;
