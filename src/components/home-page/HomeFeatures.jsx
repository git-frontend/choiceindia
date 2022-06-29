import ImageSub14 from '../../assets/images/icons/collection.svg';
import ImageSub15 from '../../assets/images/icons/basket1.svg';
import ImageSub16 from '../../assets/images/icons/robot.svg';
import ImageSub17 from '../../assets/images/icons/shield.svg';
import ImageSub18 from '../../assets/images/icons/money.svg';
import ImageSub19 from '../../assets/images/icons/recommendation.svg';
import LazyLoader from '../Common-features/LazyLoader';



function MarketInsights() {
    return (
        <div>

            <section className="features-cont">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-sec">
                                <h3 className="title-first">Features</h3>
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
                                <div className="all-features-list">
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub14} threshold={[0, 0.5, 1]} className="img-fluid" alt="Loading" width={"70"} height={"71"} />
                                        {/* <img src={ImageSub14} className="img-fluid" alt='Loading' /> */}
                                        <h4>Unique Collections</h4>
                                        <p>Discover the most interesting and unique categories of Stocks.</p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub15} threshold={[0, 0.5, 1]} className="img-fluid" alt="Loading" width={"70"} height={"71"} />
                                        {/* <img src={ImageSub15} className="img-fluid" alt='Loading' /> */}
                                        <h4>Curated Baskets</h4>
                                        <p>Get hand-picked baskets which are rebalanced &amp; designed by our experts.										</p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub16} threshold={[0, 0.5, 1]} className="img-fluid" alt="Loading" width={"70"} height={"71"} />
                                        {/* <img src={ImageSub16} className="img-fluid" alt='Loading' /> */}
                                        <h4>Robo Planner</h4>
                                        <p>An automated financial planner to handle your financial needs.</p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub17} threshold={[0, 0.5, 1]} className="img-fluid" alt="Loading" width={"70"} height={"71"}/>
                                        {/* <img src={ImageSub17} className="img-fluid" alt='Loading' /> */}
                                        <h4>Insurance IntelliMart</h4>
                                        <p>Helping you navigate the future with precise Insurance </p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub18} threshold={[0, 0.5, 1]} className="img-fluid" alt="Loading" width={"70"} height={"71"} />
                                        {/* <img src={ImageSub18} className="img-fluid" alt='Loading' /> */}
                                        <h4>Swift Loans</h4>
                                        <p>Get hassle-free instant loans with minimum documentations</p>
                                    </div>
                                    <div className="feature-item">
                                        <LazyLoader src={ImageSub19} threshold={[0, 0.5, 1]} className="img-fluid" alt="Loading" width={"70"} height={"71"} />
                                        {/* <img src={ImageSub19} className="img-fluid" alt='Loading' /> */}
                                        <h4>Recommendations</h4>
                                        <p>Providing insights across all market segments to enable better decisions.</p>
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

export default MarketInsights;