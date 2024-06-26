import ImageSub14 from '../../assets/images/icons/stock-collection.svg';
import ImageSub15 from '../../assets/images/icons/basket-investing.svg';
import ImageSub16 from '../../assets/images/icons/financial-planner.svg';
import ImageSub17 from '../../assets/images/icons/insurance-intellimart.svg';
import ImageSub18 from '../../assets/images/icons/swift-loans.svg';
import ImageSub19 from '../../assets/images/icons/financial-advice.svg';
import LazyLoader from '../Common-features/LazyLoader';
import { useState,useEffect } from 'react';
import Slider from 'react-slick';



function MarketInsights() {

    const [view,setView]=useState({
		matches: window.innerWidth < 767 ? false : true ,
	  });

	

		const settings  = {
			infinite: true,
			speed: 1500,
			arrows: false,
			slidesToShow: 1,
			autoplay: true,
			dots: true,
			autoplaySpeed: 3000,
			slidesToScroll: 1,

		};


		useEffect(() => {
			let mediaQuery = window.matchMedia("(min-width: 767px)");
			mediaQuery.addListener(setView);
			// this is the cleanup function to remove the listener
			return () => mediaQuery.removeListener(setView);
		  }, []);


    return (
        <div>

            <section className="features-cont">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-sec">
                                <h2 className="title-first">Features</h2>
                                <p>Our effort is to offer a host of financial services with an objective to <br />enhance the way our users manage their finances.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="features-list-cont">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            
                                

                                {
									view && !view.matches ? 
                                   
										<Slider {...settings} className='all-features-list'>
                                    
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub14} threshold={[0, 0.5, 1]} className={"img-fluid"} alt={"Stock Collection"} width={"70"} height={"71"} />                                        
                                        <h3 className="feature-ttl">Unique Collections</h3>
                                        <p>Discover the most interesting and unique categories of Stocks.</p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub15} threshold={[0, 0.5, 1]} className={"img-fluid"} alt={"Basket Investing "} width={"70"} height={"71"} />                                       
                                        <h3 className="feature-ttl">Curated Baskets</h3>
                                        <p>Get hand-picked baskets which are rebalanced &amp; designed by our experts.</p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub16} threshold={[0, 0.5, 1]} className={"img-fluid"} alt={"Financial Planner"} width={"70"} height={"71"} />                                        
                                        <h3 className="feature-ttl">Robo Planner</h3>
                                        <p>An automated financial planner to handle your financial needs.</p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub17} threshold={[0, 0.5, 1]} className={"img-fluid"} alt={"Insurance IntelliMart"} width={"70"} height={"71"} />                                        
                                        <h3 className="feature-ttl">Insurance IntelliMart</h3>
                                        <p>Helping you navigate the future with precise Insurance </p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub18} threshold={[0, 0.5, 1]} className={"img-fluid"} alt={"Swift Loans"} width={"70"} height={"71"} />                                       
                                        <h3 className="feature-ttl">Swift Loans</h3>
                                        <p>Get hassle-free instant loans with minimum documentations</p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub19} threshold={[0, 0.5, 1]} className={"img-fluid"} alt={"Financial Advice"} width={"70"} height={"71"} />                                       
                                        <h3 className="feature-ttl">Recommendations</h3>
                                        <p>Providing insights across all market segments to enable better decisions.</p>
                                    </div>
                                    </Slider>
                                   
                                    
										 :
                                         <div className="all-features-list">
                                         <div className="feature-item">
                                        <LazyLoader src={ImageSub14} threshold={[0, 0.5, 1]} className={"img-fluid"} alt={"Stock Collection"} width={"70"} height={"71"} />                                      
                                        <h3 className="feature-ttl">Unique Collections</h3>
                                        <p>Discover the most interesting and unique categories of Stocks.</p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub15} threshold={[0, 0.5, 1]} className={"img-fluid"} alt={"Basket Investing "} width={"70"} height={"71"} />                                      
                                        <h3 className="feature-ttl">Curated Baskets</h3>
                                        <p>Get hand-picked baskets which are rebalanced &amp; designed by our experts.</p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub16} threshold={[0, 0.5, 1]} className={"img-fluid"} alt={"Financial Planner"} width={"70"} height={"71"} />                                       
                                        <h3 className="feature-ttl">Robo Planner</h3>
                                        <p>An automated financial planner to handle your financial needs.</p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub17} threshold={[0, 0.5, 1]} className={"img-fluid"} alt={"Insurance IntelliMart"} width={"70"} height={"71"} />                                       
                                        <h3 className="feature-ttl">Insurance IntelliMart</h3>
                                        <p>Helping you navigate the future with precise Insurance </p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub18} threshold={[0, 0.5, 1]} className={"img-fluid"} alt={"Swift Loans"} width={"70"} height={"71"} />                                       
                                        <h3 className="feature-ttl">Swift Loans</h3>
                                        <p>Get hassle-free instant loans with minimum documentations</p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub19} threshold={[0, 0.5, 1]} className={"img-fluid"} alt={"Financial Advice"} width={"70"} height={"71"} />
                                        <h3 className="feature-ttl">Recommendations</h3>
                                        <p>Providing insights across all market segments to enable better decisions.</p>
                                    </div>
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

export default MarketInsights;