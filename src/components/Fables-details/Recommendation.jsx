
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LazyLoader from "../Common-features/LazyLoader";
function Recommendation(props) {

	let navigate = useNavigate();
	const [disp, setDisp] = useState(() => false);
	const [data, setData] = useState(() => null);



	function Demo(slug) {
		navigate(`/blog/${slug}`, { replace: true });

	}

	useEffect(() => {
		setDisp(true);
		setData(props);
	}, [data, props])

	return (
		<>
			{
				disp ?
					<div className='recommended'>
						<section className="recommendation">
							<div className="container">
								<div className="row">
									<div className="col-md-12">
										<h2>Recommended for you</h2>
									</div>
									<div className="col-md-12">
										<div className="blog-list">
											<div className="blog-item" style={{ cursor: 'pointer' }} onClick={() => Demo(data.name ? data.name[0].slug : 'NA')}>
												<div className="blog-item-img">
													<LazyLoader src={data.name? data.name[0].feature_image : 'NA'} className={''} alt={'loading'} />
												</div>
												<div className="item-des">
													<h4>{data.name ? data.name[0].title : 'NA'}</h4>
													<p>{data.name ? data.name[0].twitter_description : 'NA'}</p>
												</div>
											</div>

											<div className="blog-item" style={{ cursor: 'pointer' }} onClick={() => Demo(data.name ? data.name[1].slug : 'NA')}>
												<div className="blog-item-img">
													<LazyLoader src={data.name ? data.name[1].feature_image : 'NA'} className={''} alt={'loading'} />
												</div>
												<div className="item-des">
													<h4>{data.name ? data.name[1].title : 'NA'}</h4>
													<p>{data.name ? data.name[1].twitter_description : 'NA'}</p>
												</div>
											</div>

											<div className="blog-item" style={{ cursor: 'pointer' }} onClick={() => Demo(data.name ? data.name[2].slug : 'NA')}>
												<div className="blog-item-img">
													<LazyLoader src={data.name ? data.name[2].feature_image : 'NA'} className={''} alt={'loading'} />
												</div>
												<div className="item-des">
													<h4>{data.name ? data.name[2].title : 'NA'}</h4>
													<p>{data.name ? data.name[2].twitter_description : 'NA'}</p>
												</div>
											</div>

											<div className="blog-item" style={{ cursor: 'pointer' }} onClick={() => Demo(data.name ? data.name[3].slug : 'NA')}>
												<div className="blog-item-img">
													<LazyLoader src={data.name ? data.name[3].feature_image : 'NA'} className={''} alt={'loading'} />
												</div>
												<div className="item-des">
													<h4>{data.name ? data.name[3].title : 'NA'}</h4>
													<p>{data.name ? data.name[3].twitter_description : 'NA'}</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>




					</div> :
					'No Data Found'
			}
		</>

	);
}

export default Recommendation;
