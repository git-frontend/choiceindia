import React from "react";
import  Blog1  from '../../assets/images/fable/blog-list.png';

function FableBlogList() {

    return (
        <div>

            <section className="fable-blog-List">
				<div className="container">
					<div className="fable-list-menu">
						<ul>
							<li>
								<a href="/" className="link-txt link-active">All</a>
							</li>
							<li>
								<a href="/" className="link-txt">National</a>
							</li>
							<li>
								<a href="/" className="link-txt">International</a>
							</li>
							<li>
								<a href="/" className="link-txt">Economy</a>
							</li>
							<li>
								<a href="/" className="link-txt">Industry</a>
							</li>
							<li>
								<a href="/" className="link-txt">Commodity</a>
							</li>
							<li>
								<a href="/" className="link-txt">IPO</a>
							</li>
							<li>
								<a href="/" className="link-txt">Currency</a>
							</li>
							<li>
								<a href="/" className="link-txt">Policies</a>
							</li>
							<li>
								<a href="/" className="link-txt">M&amp;A</a>
							</li>
							<li>
								<a href="/" className="link-txt">Trades</a>
							</li>
							<li>
								<a href="/" className="link-txt">Banking</a>
							</li>
							<li>
								<a href="/" className="link-txt">Technology</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="tab-blog-list">
								<a href="/" className="tab-blog-item">
									<div className="blog-item-img">
										<img src={Blog1} className="" alt="loading" />
									</div>
									<div className="blog-item-des">
										<h4>Shein setting a trend again for fashionistas – It’s a comeback</h4>
										<p>It’s happening!! We have a great news for all the fashionistas and shopaholics out there</p>
										<div className="d-flex justify-content-between">
											<span className="sm-text">21 Aug 2021</span>
											<span className="sm-text">@SachinChadda</span>
										</div>
									</div>
								</a>
								<a href="/" className="tab-blog-item">
									<div className="blog-item-img">
										<img src={Blog1} className="" alt="loading" />
									</div>
									<div className="blog-item-des">
										<h4>How Indian Telcos are gearing up for 5G?</h4>
										<p>5G is the game-changer in the world of communication and technology that will transform this entire landscape</p>
										<div className="d-flex justify-content-between">
											<span className="sm-text">21 Aug 2021</span>
											<span className="sm-text">@SachinChadda</span>
										</div>
									</div>
								</a>
								<a href="/" className="tab-blog-item">
									<div className="blog-item-img">
										<img src={Blog1} className="" alt="loading" />
									</div>
									<div className="blog-item-des">
										<h4>The journey of Idea cellular from idea to VI</h4>
										<p>Idea cellular has been in the telecom industry for decades as a major mobile phone service operator in India</p>
										<div className="d-flex justify-content-between">
											<span className="sm-text">21 Aug 2021</span>
											<span className="sm-text">@SachinChadda</span>
										</div>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>

			</section>


        </div>

    );
}

export default FableBlogList;