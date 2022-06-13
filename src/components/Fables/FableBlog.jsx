import React from "react";

import  Blog2  from '../../assets/images/fable/blog-big.png';
import  BlogThumbnail1  from '../../assets/images/fable/thumnail1.jpg';
import  BlogThumbnail2  from '../../assets/images/fable/thumnail2.jpg';
import  BlogThumbnail3  from '../../assets/images/fable/thumnail3.jpg';
import  BlogThumbnail4  from '../../assets/images/fable/thumnail4.jpg';

function FableBlog() {

    return (
        <div>

            <section className="blog-middle-cont">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="blog-middle-left">
								<div className="heading-sec">
									<h3 className="title-secnd">Maybe You’re Interested Check Our Blog </h3>
								</div>
								<div className="single-blog-con">
									<div className="single-blog-img">
										<img src={Blog2} alt="loading" />
									</div>
									<div className="single-blog-des">
										<h3>What are NFTs?</h3>
										<p className="des-cont mt-3">Mike Winkelmann who makes digital arts by the name of “Beeple” sold a collage of his first 5000 artwork at $69 million... 
										<a href="/" className="fw-bold">Read More</a></p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-7">
							<div className="blog-middle-right">
								
								<div className="all-latest-blog-list">
									<div className="latest-blog-itm">
										<a href="/" className="blog-itm">
											<div className="blog-itm-des">
												<p className="itm-des-cont">Amazon-Reliance Territorial Fight In The Indian Retail Jungle</p>
												<h6 className="tag-act">@SachinChadda</h6>
											</div>
											<div className="blog-itm-img">
												<img src={BlogThumbnail3} alt="loading" className="img-blog"/>
											</div>
										</a>
									</div>
									<div className="latest-blog-itm">
										<a href="/" className="blog-itm">
											<div className="blog-itm-des">
												<p className="itm-des-cont">RBL Bank Management Upheaval &amp; The Chaos Around It</p>
												<h6 className="tag-act">@SachinChadda</h6>
											</div>
											<div className="blog-itm-img">
												<img src={BlogThumbnail4} alt="loading" className="img-blog"/>
											</div>
										</a>
									</div>
									<div className="latest-blog-itm">
										<a href="/" className="blog-itm">
											<div className="blog-itm-des">
												<p className="itm-des-cont">What will be the future of Cryptocurrencies in India?</p>
												<h6 className="tag-act">@SachinChadda</h6>
											</div>
											<div className="blog-itm-img">
												<img src={BlogThumbnail2} alt="loading" className="img-blog"/>
											</div>
										</a>
									</div>
									<div className="latest-blog-itm">
										<a href="/" className="blog-itm">
											<div className="blog-itm-des">
												<p className="itm-des-cont">Russia &amp; Ukraine conflict sparking Inflation in India!!</p>
												<h6 className="tag-act">@SachinChadda</h6>
											</div>
											<div className="blog-itm-img">
												<img src={BlogThumbnail1} alt="loading" className="img-blog"/>
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
