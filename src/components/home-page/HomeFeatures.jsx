
import  ImageSub14  from '../../assets/images/icons/collection.svg';
import  ImageSub15  from '../../assets/images/icons/basket1.svg';
import  ImageSub16  from '../../assets/images/icons/robot.svg';
import  ImageSub17  from '../../assets/images/icons/shield.svg';
import  ImageSub18  from '../../assets/images/icons/money.svg';
import  ImageSub19  from '../../assets/images/icons/recommendation.svg';




function MarketInsights() {
    return (
        <div>

        <section class="features-cont">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="heading-sec">
                            <h3 class="title-first">Features</h3>
                            <p>Our effort is to offer a host of financial services with an objective to <br/>enhance the way our users manage their finances.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="features-list-cont">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="all-features-list">
                                <div class="feature-item">
                                    <img src={ImageSub14} class="img-fluid" />
                                    <h4>Unique Collections</h4>
                                    <p>Discover the most interesting and unique categories of Stocks.</p>
                                </div>
                                <div class="feature-item">
                <img src={ImageSub15} class="img-fluid" />
                                    <h4>Curated Baskets</h4>
                                    <p>Get hand-picked baskets which are rebalanced & designed by our experts.										</p>
                                </div>
                                <div class="feature-item">
                                <img src={ImageSub16} class="img-fluid" />
                                    <h4>Robo Planner</h4>
                                    <p>An automated financial planner to handle your financial needs.</p>
                                </div>
                                <div class="feature-item">
                                <img src={ImageSub17} class="img-fluid" />
                                    <h4>Insurance IntelliMart</h4>
                                    <p>Helping you navigate the future with precise Insurance </p>
                                </div>
                                <div class="feature-item">
                <img src={ImageSub18} class="img-fluid" />
                                    <h4>Swift Loans</h4>
                                    <p>Get hassle-free instant loans with minimum documentations</p>
                                </div>
                                <div class="feature-item">
                <img src={ImageSub19} class="img-fluid" />
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