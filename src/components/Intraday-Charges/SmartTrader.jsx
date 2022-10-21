import React from "react";
import SubBannerimage from '../../assets/images/intraday-charges/save-brokerage-intraday-trades.webp';
import LazyLoader from "../Common-features/LazyLoader";

function SmartTrader() {

    return (
        <div>
            <section className="smart-trader">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6 d-flex justify-content-center">
                            <LazyLoader src={SubBannerimage} alt={"Save Brokerage on Intraday Charges"} className={"img-fluid hide-mob"} />
                        </div>
                        <div className="col-md-6">
                            <div className="sm-trader-des">
                                <h2 className="ttl2-sm">Be a SMART Trader!</h2>
                                <p>Brokerage Saved = Profit Earned</p>
                                <a href="/"><span className="btn-bg btn-bg-dark">SAVE NOW <svg xmlns="http://www.w3.org/2000/svg" id="baseline-arrow_forward-24px" width="24" height="24" viewBox="0 0 24 24">
  <path id="Path_1980" data-name="Path 1980" d="M0,0H24V24H0Z" fill="none"/>
  <path id="Path_1981" data-name="Path 1981" d="M12,4,10.59,5.41,16.17,11H4v2H16.17l-5.58,5.59L12,20l8-8Z" fill="#231f20"/>
</svg> </span></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}

export default SmartTrader;
