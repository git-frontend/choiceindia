import React from "react";
import  Blog1  from '../../assets/images/fable/blog1.png';
import  Blog2  from '../../assets/images/fable/blog-big.png';
import  Blog3  from '../../assets/images/fable/blog2.png';

function FableBlog() {

    return (
        <div>

            <section className="blog-middle-cont">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<div className="blog-middle-left">
								<div className="heading-sec">
									<h3 className="title-secnd">Maybe You’re Interested Check Our Blog </h3>
								</div>
								<div className="single-blog-con">
									<div className="single-blog-img">
										<img src={Blog2} />
									</div>
									<div className="single-blog-des">
										<h3>What are NFTs?</h3>
										<p className="des-cont">Mike Winkelmann who makes digital arts by the name of “Beeple” sold a collage of his first 5000 artwork at $69 million... 
										<a href="#">Read More</a></p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-6">
							<div className="blog-middle-right">
								<div className="heading-sec">
									<p>Mike Winkelmann who makes digital arts by the name of “Beeple” sold a collage of his first 5000 artwork at $69 million 5000 artwork at $69...</p>
								</div>
								<div className="all-latest-blog-list">
									<div className="latest-blog-itm">
										<a href="#" className="blog-itm">
											<div className="blog-itm-des">
												<p className="itm-des-cont">Amazon-Reliance Territorial Fight In The Indian Retail Jungle</p>
												<h6 className="tag-act">@SachinChadda</h6>
											</div>
											<div className="blog-itm-img">
												<img src={Blog3} alt="" className="img-blog"/>
											</div>
										</a>
									</div>
									<div className="latest-blog-itm">
										<a href="#" className="blog-itm">
											<div className="blog-itm-des">
												<p className="itm-des-cont">RBL Bank Management Upheaval &amp; The Chaos Around It</p>
												<h6 className="tag-act">@SachinChadda</h6>
											</div>
											<div className="blog-itm-img">
												<img src={Blog3} alt="" className="img-blog"/>
											</div>
										</a>
									</div>
									<div className="latest-blog-itm">
										<a href="#" className="blog-itm">
											<div className="blog-itm-des">
												<p className="itm-des-cont">What will be the future of Cryptocurrencies in India?</p>
												<h6 className="tag-act">@SachinChadda</h6>
											</div>
											<div className="blog-itm-img">
												<img src={Blog3} alt="" className="img-blog"/>
											</div>
										</a>
									</div>
									<div className="latest-blog-itm">
										<a href="#" className="blog-itm">
											<div className="blog-itm-des">
												<p className="itm-des-cont">Russia &amp; Ukraine conflict sparking Inflation in India!!</p>
												<h6 className="tag-act">@SachinChadda</h6>
											</div>
											<div className="blog-itm-img">
												<img src={Blog3} alt="" className="img-blog"/>
											</div>
										</a>
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

export default FableBlog;