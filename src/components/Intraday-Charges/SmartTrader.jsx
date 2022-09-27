import React from "react";
import SubBannerimage from '../../assets/images/intraday-charges/smart-trader.webp';
import LazyLoader from "../Common-features/LazyLoader";

function SmartTrader() {

    return (
        <div>
            <section className="smart-trader">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex justify-content-center">
                            <LazyLoader src={SubBannerimage} alt={"Sub Broker Franchise Without Deposit"} className={"img-fluid"} />
                        </div>
                        <div className="col-md-6">
                            <div className="sm-trader-des">
                                <h2 className="ttl2-sm">Be a SMART Trader!</h2>
                                <p>Brokerage Saved = Profit Earned</p>
                                <a href="/"><span className="btn-bg">SAVE NOW</span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default SmartTrader;
