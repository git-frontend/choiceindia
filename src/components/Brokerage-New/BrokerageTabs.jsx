
import React from "react";
import { useState } from "react";


function BrokerageTabs() {
   const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) => {
      setToggleState(index);
   };




   return (
      <div>


         <section className="BrokerageTabs">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                  <div className="title-tab">
                      <h2 className="title-secnd">Transparent Brokerage Charges</h2>
                      <p>Here’s a detailed breakdown of our low brokerage charges with no hidden costs.</p>    
                  </div>
                  <div className="info-tabs">

                     <div className="bloc-tabs">
                        <button
                           className={toggleState === 1 ? "tabs  active-tabs" : "tabs"}
                           onClick={() => toggleTab(1)}
                        >
                           
                           <h4>Equity</h4>

                        </button>
                        <button
                           className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                           onClick={() => toggleTab(2)}
                        >
                          
                           <h4>Commodity</h4>

                        </button>
                        <button
                           className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                           onClick={() => toggleTab(3)}
                        >
                          
                           <h4>Currency</h4>

                        </button>
                     </div>


                     <div className="content-tabs">
                        <div
                           className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                           <div className="tab-data-sec">
                              <div className="table-responsive">
                                 <table className="table table-borderless table-striped table-hover">
                                    <thead>
                                       <tr>
                                          <th width="15%" className="tableheading">Our Charges</th>
                                          <th width="20%" className="tableheading">Equity Intraday</th>
                                          <th className="tableheading">Equity Delivery</th>
                                          <th className="tableheading">Equity Futures</th>
                                          <th className="tableheading"> Equity Options</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td className="charges-heads">Brokerage</td>
                                          <td data-label="Equity Intraday">0.02%</td>
                                          <td data-label="Equity Delivery">0.2%</td>
                                          <td data-label="Equity Futures">0.02%</td>
                                          <td data-label="Equity Options">₹25 per lot</td>
                                       </tr>
                                       <tr className="grey-back">
                                          <td className="charges-heads">STT (Securities Transaction Tax)</td>
                                          <td data-label="Equity Intraday">0.025% sell</td>
                                          <td data-label="Equity Delivery">0.1% Buy | Sell</td>
                                          <td data-label="Equity Futures">0.0125% Sell</td>
                                          <td data-label="Equity Options">0.0625% (on premium) Sell In case of Options Exercise 0.125% (on Settlement Price* Quantity) to be paid by the Buyer</td>
                                       </tr>
                                       <tr>
                                          <td className="charges-heads">Transaction charges</td>
                                          <td data-label="Equity Intraday">NSE/BSE: 0.00325%</td>
                                          <td data-label="Equity Delivery">NSE/BSE: 0.00325%</td>
                                          <td data-label="Equity Futures">(NSE)- Exchange transaction charge: 0.0019% - Clearing charge: 0.0005%</td>
                                          <td data-label="Equity Options">(NSE)- Exchange transaction charge: 0.05% - Clearing charge: 0.002%</td>
                                       </tr>
                                       <tr className="grey-back">
                                          <td className="charges-heads">GST</td>
                                          <td data-label="Equity Intraday">18% (on brokerage + transaction charges)</td>
                                          <td data-label="Equity Delivery">18% (on brokerage + transaction charges)</td>
                                          <td data-label="Equity Futures">18% (on brokerage + transaction charges)</td>
                                          <td data-label="Equity Options"> 18% (on brokerage + transaction charges)</td>
                                       </tr>
                                       <tr>
                                          <td className="charges-heads">SEBI Charges</td>
                                          <td data-label="Equity Intraday">₹10/crore</td>
                                          <td data-label="Equity Delivery">₹10/crore</td>
                                          <td data-label="Equity Futures">₹10/crore</td>
                                          <td data-label="Equity Options">₹10/crore</td>
                                       </tr>
                                       <tr>
                                          <td className="charges-heads">N.S.E. IPFT Charges</td>
                                          <td data-label="Equity Intraday">₹10/crore</td>
                                          <td data-label="Equity Delivery">₹10/crore</td>
                                          <td data-label="Equity Futures">₹10/crore</td>
                                          <td data-label="Equity Options">₹50/crore (on premium)</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              <p className="condition"><strong>*Condition Applied: </strong>The above charges are applicable for clients registered online. Charges may vary for offline clients (who can avail of extended facilities like a higher margin and dedicated Relationship Manager/Dealer).</p>
                           </div>

                        </div>

                        <div
                           className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                           <div className="tab-data-sec">
                              <div className="table-responsive">
                                 <table className="table table-borderless table-striped table-hover">
                                    <thead>
                                       <tr>
                                          <th width="15%" className="tableheading">Our Charges</th>
                                          <th className="tableheading">Commodity Futures</th>
                                          <th className="tableheading">Commodity Options</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td className="charges-heads">Brokerage</td>
                                          <td data-label="Commodity Futures">0.02%</td>
                                          <td data-label="Commodity Options">₹50 per lot</td>
                                       </tr>
                                       <tr className="grey-back">
                                          <td className="charges-heads">CTT (Commodities Transaction Tax)</td>
                                          <td data-label="Commodity Futures">0.01% Sell</td>
                                          <td data-label="Commodity Options">0.05% Sell In case of Options Exercise: 0.125% (on Settlement Price* Quantity) to be paid by the Buyer</td>
                                       </tr>
                                       <tr>
                                          <td className="charges-heads">Transaction Charges</td>
                                          <td data-label="Commodity Futures">- Exchange Txn. charge: 0.0026% 
- Clearing charge: 0.003% 
- RMS charge: 0.005% (only NCDEX)
</td>
                                          <td data-label="Commodity Options">- Exchange Txn. charge: 0.05% 
- Clearing charge: 0.002% 
</td>
                                       </tr>
                                       <tr className="grey-back">
                                          <td className="charges-heads">G.S.T.</td>
                                          <td data-label="Commodity Futures">18% 
(on brokerage + transaction charges + clearing charges)
</td>
                                          <td data-label="Commodity Options">18% 
(on brokerage + transaction charges + clearing charges)
</td>
                                       </tr>
                                       <tr>
                                          <td className="charges-heads">SEBI Charges</td>
                                          <td data-label="Commodity Futures">₹10/crore</td>
                                          <td data-label="Commodity Options">₹10/crore</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              <p className="condition"><strong>*Condition Applied:</strong> The above charges are applicable for clients registered online. Charges may vary for offline clients (who can avail of extended facilities like a higher margin and dedicated Relationship Manager/Dealer).</p>
                           </div>
                        </div>

                        <div
                           className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                           <div className="tab-data-sec">
                              <div className="table-responsive">
                                 <table className="table table-borderless table-striped table-hover">
                                    <thead>
                                       <tr>
                                          <th width="15%" className="tableheading">Our Charges</th>
                                          <th className="tableheading">Currency Futures</th>
                                          <th className="tableheading">Currency Options</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td className="charges-heads">Brokerage</td>
                                          <td data-label="Currency Futures">0.02%</td>
                                          <td data-label="Currency Options">₹20 per lot</td>
                                       </tr>
                                       <tr className="grey-back">
                                          <td className="charges-heads">STT (Securities Transaction Tax)</td>
                                          <td data-label="Currency Futures">No STT</td>
                                          <td data-label="Currency Options">No STT</td>
                                          
                                       </tr>
                                       <tr>
                                          <td className="charges-heads">Transaction Charges</td>
                                          <td data-label="Currency Futures">- NSE Txn. charge: 0.0009% 
- Clearing charge: 0.0005%
</td>
                                          <td data-label="Currency Options">- NSE Txn. charge: 0.035% 
- Clearing charge: 0.002%
</td>
                                       </tr>
                                       <tr className="grey-back">
                                          <td className="charges-heads">G.S.T.</td>
                                          <td data-label="Currency Futures">18% 
(on brokerage + transaction charges + clearing charges)
</td>
                                          <td data-label="Currency Options">18% 
(on brokerage + transaction charges + clearing charges)
</td>
                                         
                                       </tr>
                                       <tr>
                                          <td className="charges-heads">SEBI Charges</td>
                                          <td data-label="Currency Futures">₹10/crore</td>
                                          <td data-label="Currency Options">₹10/crore</td>
                                          
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              <p className="condition"><strong>*Condition Applied:</strong> The above charges are applicable for clients registered online. Charges may vary for offline clients (who can avail of extended facilities like a higher margin and dedicated Relationship Manager/Dealer).</p>
                           </div>
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

export default BrokerageTabs;
