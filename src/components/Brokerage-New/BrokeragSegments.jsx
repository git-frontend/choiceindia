import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import intraday from '../../assets/images/Brokerage-New/intraday.svg';
import commodity from '../../assets/images/Brokerage-New/commodity.svg';
import MutualFunds from '../../assets/images/Brokerage-New/Mutual Funds.svg';
import FO from '../../assets/images/Brokerage-New/F&O.svg';
import currency from '../../assets/images/Brokerage-New/currency.svg';
import IPO from '../../assets/images/Brokerage-New/IPO.svg';
function BrokeragSegments() {
   return (
      <div>
        <section className="all-In-one-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-10 col-md-12">
                            <div className="caption">
                                <h2 className="title-secnd">Access all Market Segments with <span className="caption-dark"> Our All-in-One Account</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                       <div className="col-md-12">
                           <div className="benifits-list-section">
                               <div className="list-itm">
                                   <span><LazyLoader src={intraday} alt={"Banner Images"} className={"img-fluid ico-sm"} width={"72"} height={"72"} /></span>
                                   <h5>Intraday</h5>
                               </div>
                               <div className="list-itm">
                                   <span><LazyLoader src={commodity} alt={"Banner Images"} className={"img-fluid ico-sm"} width={"72"} height={"72"}  /></span>
                                   <h5>Commodity</h5>
                               </div>
                               <div className="list-itm">
                                   <span><LazyLoader src={MutualFunds} alt={"Banner Images"} className={"img-fluid ico-sm"} width={"72"} height={"72"} /></span>
                                   <h5>Mutual Funds</h5>
                               </div>
                               <div className="list-itm">
                                   <span><LazyLoader src={FO} alt={"Banner Images"} className={"img-fluid ico-sm"} width={"72"} height={"72"}  /></span>
                                   <h5>F&O</h5>
                               </div>
                               <div className="list-itm">
                                   <span><LazyLoader src={currency} alt={"Banner Images"} className={"img-fluid ico-sm"} width={"72"} height={"72"}  /></span>
                                   <h5>Currency</h5>
                               </div>
                               <div className="list-itm">
                                   <span><LazyLoader src={IPO} alt={"Banner Images"} className={"img-fluid ico-sm"} width={"72"} height={"72"}  /></span>
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
