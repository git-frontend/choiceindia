import React,{useState,useEffect} from "react";
import fableServices from '../../Services/fableServices';
import LazyLoader from '../Common-features/LazyLoader';

function BannerSection() {

	const[data,setData] = useState([]);
	const [trigger, setTrigger] = useState();

	function loadFableList(){
		fableServices.fabalTrending().then (
			res=>{
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

								{
									data.slice(0,4).map((response, index) => {

										return(
                                       <div key={response.id}>
									   <a href="/" className="trending-itm">
									   <div className="trending-itm-img">
														<LazyLoader src={response.feature_image} className="img-blog" alt="Loading" width={"138"} height={"100"} />
										   {/* <img src={response.feature_image} alt="loading" className="img-blog"/> */}
									   </div>
									   <div className="trending-itm-des">
										   <p>{response.meta_description}</p>
									   </div>
								   </a>


									   </div>
											
										)

									})
								}

						
									{/**<a href="/" className="trending-itm">
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
							</a>*/}
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