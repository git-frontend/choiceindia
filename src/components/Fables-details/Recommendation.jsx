
import React from "react";
import  blogone  from '../../assets/images/fabledetails/blogone.png';
import  blogtwo  from '../../assets/images/fabledetails/blogtwo.png';
import  blogthree  from '../../assets/images/fabledetails/blogthree.png';
import  blogfour  from '../../assets/images/fabledetails/blogfour.png';
function Recommendation() {

  return (
    <div className='recommended'>
        <section className="recommendation">
            <div className="container">
            <div className="row">
						<div className="col-md-12">
							<div className="blog-list">
								<a href="/" className="blog-item">
									<div className="blog-item-img">
										<img src={blogone} className="" alt="loading" />
									</div>
									<div className="item-des">
										<h4>Shein setting a trend again for fashionistas – It’s a comeback</h4>
										
										<div className="d-flex justify-content-between">
											<span className="sm-text">21 Aug 2021</span>
											<span className="sm-text">@SachinChadda</span>
										</div>
									</div>
								</a>
								<a href="/" className="blog-item">
									<div className="blog-item-img">
										<img src={blogtwo} className="" alt="loading" />
									</div>
									<div className="item-des">
										<h4>How Indian Telcos are gearing up for 5G?</h4>
										
										<div className="d-flex justify-content-between">
											<span className="sm-text">21 Aug 2021</span>
											<span className="sm-text">@SachinChadda</span>
										</div>
									</div>
								</a>
								<a href="/" className="blog-item">
									<div className="blog-item-img">
										<img src={blogthree} className="" alt="loading" />
									</div>
									<div className="item-des">
										<h4>The journey of Idea cellular from idea to VI</h4>
										
										<div className="d-flex justify-content-between">
											<span className="sm-text">21 Aug 2021</span>
											<span className="sm-text">@SachinChadda</span>
										</div>
									</div>
								</a>
                                <a href="/" className="blog-item">
									<div className="blog-item-img">
										<img src={blogfour} className="" alt="loading" />
									</div>
									<div className="item-des">
										<h4>The journey of Idea cellular from idea to VI</h4>
										
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

export default Recommendation;
