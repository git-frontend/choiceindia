import React from "react";
import  Blog1  from '../../assets/images/fable/blog1.png';

function FableBlog() {

    return (
        <div>

            <section className="blog-middle-cont">
				<div className="container">
					<div className="row">
						<div className="col-md-5">
							<div className="heading-sec">
								<h3 className="title-secnd">Maybe You’re Interested Check Our Blog </h3>
							</div>
						</div>
						<div className="col-md-7">
							<div className="heading-sec">
								<p>Mike Winkelmann who makes digital arts by the name of “Beeple” sold a collage of his first 5000 artwork at $69 million 5000 artwork at $69...</p>
							</div>
							<div className="all-latest-blog-list">
								<div className="latest-blog-itm">
									<a href="#" className="blog-itm">
										<div className="blog-itm-des">
											<p>Russia &amp; Ukraine conflict sparking Inflation in India!!</p>
										</div>
										<div className="blog-itm-img">
											<img src={Blog1} alt="" className="img-blog"/>
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

export default FableBlog;