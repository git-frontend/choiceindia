import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import intraday from '../../assets/images/Brokerage-New/Low-intraday-brokerage-charges.svg';
import commodity from '../../assets/images/Brokerage-New/Low-commodity-brokerage-charges.svg';
import MutualFunds from '../../assets/images/Brokerage-New/Low-mutual-funds-brokerage-charges.svg';
import FO from '../../assets/images/Brokerage-New/Low-F&O-brokerage-charges.svg';
import currency from '../../assets/images/Brokerage-New/Low-currency-brokerage-charges.svg';
import IPO from '../../assets/images/Brokerage-New/IPO-investments-with-low-brokerage-charges.svg';
function BrokeragSegments() {
   return (
      <div>
        <section className="all-In-one-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-md-12">
                            <div className="caption">
                                <h2 className="title-secnd">Access all Market Segments with<span className="caption-dark"> Our All-in-One Account</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                       <div className="col-md-12">
                           <div className="benifits-list-section">
                               <div className="list-itm">
                                   <span><LazyLoader src={intraday} alt={"Low intraday brokerage charges"} className={"img-fluid ico-sm"} width={"72"} height={"72"} /></span>
                                   <h5>Intraday</h5>
                               </div>
                               <div className="list-itm">
                                   <span><LazyLoader src={commodity} alt={"Low commodity brokerage charges"} className={"img-fluid ico-sm"} width={"72"} height={"72"}  /></span>
                                   <h5>Commodity</h5>
                               </div>
                               <div className="list-itm">
                                   <span><LazyLoader src={MutualFunds} alt={"Low mutual funds brokerage charges"} className={"img-fluid ico-sm"} width={"72"} height={"72"} /></span>
                                   <h5>Mutual Funds</h5>
                               </div>
                               <div className="list-itm">
                                   <span><LazyLoader src={FO} alt={"Low F&O brokerage charges"} className={"img-fluid ico-sm"} width={"72"} height={"72"}  /></span>
                                   <h5>F&O</h5>
                               </div>
                               <div className="list-itm">
                                   <span><LazyLoader src={currency} alt={"Low currency brokerage charges"} className={"img-fluid ico-sm"} width={"72"} height={"72"}  /></span>
                                   <h5>Currency</h5>
                               </div>
                               <div className="list-itm">
                                   <span><LazyLoader src={IPO} alt={"IPO investments with low brokerage charges"} className={"img-fluid ico-sm"} width={"72"} height={"72"}  /></span>
                                   <h5>IPO</h5>
                               </div>
                           </div>
                       </div>
                    </div>
                </div>
            </section>
      </div>
   );
}

export default BrokeragSegments;
