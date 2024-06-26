import React, { useState, useEffect } from "react";
import fableServices from '../../Services/fableServices';
import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';

function BannerSection() {

	const [data, setData] = useState([]);
	const [trigger, setTrigger] = useState();
	const [isloading,setisloading ] = useState(true);

	function loadFableList() {
		fableServices.fabalTrending().then(
			res => {
				setisloading(false);
				setData(res.data.posts);

			}
		)
	}
	useEffect(() => {

		setTrigger(true)
		if (trigger === true) {
			loadFableList()
		}

	}, [trigger])


	return (
		<div>

			<section className="fables-banner">
				<div className="container">
					<div className="row mt2">
						<div className="col-md-12 d-flex justify-content-between flex-wrap">
							<div className="fables-caption-left">
								<h1 className="big-ttl">
									Fables
									<span>Stories that Matter</span>
								</h1>
							</div>
							<div className="fables-caption-right">
								<div className="heading-sec">
									<h3 className="title-secnd">Trending </h3>
								</div>
								{
									isloading?
									<div>
										<video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
										</div>:
									<div>
								{
									data.length?
									<div className="fable-trending-list">

									
									{
										(data||[]).slice(0, 4).map((response, index) => {

											return (
												<div key={response.id}>
													<Link to={`/blog/${response.slug}`} className="trending-itm">
														<div className="trending-itm-img">
															<img src={response.feature_image} className={"img-blog"} alt={"Loading"} width={"138"} height={"100"} />
														</div>
														<div className="trending-itm-des">
															<p>{response.meta_title}</p>
														</div>
													</Link>


												</div>

											)

										})
									}


								</div>:
								 <div className="text-center">
                                <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250}/>
                            </div>
								}
								</div>

								}
								
								
							</div>
						</div>
					</div>
				</div>
			</section>


		</div>

	);
}

export default BannerSection;