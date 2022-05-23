import React from "react";
import  Blog1  from '../../assets/images/fable/blog1.png';
import  Blog2  from '../../assets/images/fable/blog2.png';

function BannerSection() {

    return (
        <div>

            <section className="fables-banner">
				<div className="container">
					<div className="row">
						<div className="col-md-12 d-flex justify-content-between flex-wrap">
							<div className="fables-caption-left">
								<h2 className="big-ttl">
									Fables
									<span>Stories that Matter</span> 
								</h2>
							</div>
							<div className="fables-caption-right">
								<div className="heading-sec">
									<h3 className="title-secnd">Trending </h3>
								</div>
								<div className="fable-trending-list">
									<a href="/" className="trending-itm">
										<div className="trending-itm-img">
											<img src={Blog1} alt="loading" className="img-blog"/>
										</div>
										<div className="trending-itm-des">
											<p>Russia &amp; Ukraine conflict sparking Inflation in India!!</p>
										</div>
									</a>
									<a href="/" className="trending-itm">
										<div className="trending-itm-img">
											<img src={Blog1} alt="loading" className="img-blog"/>
										</div>
										<div className="trending-itm-des">
											<p>RBL Bank Management Upheaval &amp; The Chaos Around It</p>
										</div>
									</a>
									<a href="/" className="trending-itm">
										<div className="trending-itm-img">
											<img src={Blog1} alt="loading" className="img-blog"/>
										</div>
										<div className="trending-itm-des">
											<p>Amazon-Reliance Territorial Fight In The Indian Retail Jungle</p>
										</div>
									</a>
									<a href="/" className="trending-itm">
										<div className="trending-itm-img">
											<img src={Blog1} alt="loading" className="img-blog"/>
										</div>
										<div className="trending-itm-des">
											<p>What will be the future of Cryptocurrencies in India?</p>
										</div>
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

export default BannerSection;