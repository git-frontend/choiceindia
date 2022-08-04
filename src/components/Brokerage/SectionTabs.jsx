
import React from "react";
import { useState } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Equity from '../../assets/images/brokerage-charges/equity.svg';
import Currency from '../../assets/images/brokerage-charges/currency.svg';
import Commodity from '../../assets/images/brokerage-charges/commodity.svg';
import LazyLoader from "../Common-features/LazyLoader";

function SectionTabs() {
   const [toggleState, setToggleState] = useState(1);

   const toggleTab = (index) => {
      setToggleState(index);
   };




   return (
      <div>


         <section className="SectionTabs">
            <div className="container">
               <div className="row">
                  <div className="info-tabs">

                     <div className="bloc-tabs">
                        <button
                           className={toggleState === 1 ? "tabs  active-tabs" : "tabs"}
                           onClick={() => toggleTab(1)}
                        >
                           <span className="tb-ico">
                              <LazyLoader src={Equity} alt={"Banner Images"} className={"img-fluid ico-sm"} width={"55"} height={"56"} />
                           </span>
                           <h4>Equity</h4>

                        </button>
                        <button
                           className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                           onClick={() => toggleTab(2)}
                        >
                           <span className="tb-ico">
                              <LazyLoader src={Currency} alt={"Banner Images"} className={"img-fluid ico-sm"} width={"55"} height={"56"} />
                           </span>
                           <h4>Currency</h4>

                        </button>
                        <button
                           className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                           onClick={() => toggleTab(3)}
                        >
                           <span className="tb-ico">
                              <LazyLoader src={Commodity} alt={"Banner Images"} className={"img-fluid ico-sm"} width={"55"} height={"56"} />
                           </span>
                           <h4>Commodity</h4>

                        </button>
                     </div>


                     <div className="content-tabs">
                        <div
                           className={toggleState === 1 ? "content  active-content" : "content"}
                        >
                           <div class="tab-data-sec">
                              <div class="table-responsive">
                                 <table class="table table-borderless table-striped table-hover">
                                    <thead>
                                       <tr>
                                          <th width="15%">Charges</th>
                                          <th width="20%">Equity Intraday</th>
                                          <th>Equity Delivery</th>
                                          <th>Equity Futures</th>
                                          <th>Equity Options</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td class="charges-heads">Brokerage</td>
                                          <td>0.02%</td>
                                          <td>0.2%</td>
                                          <td>0.02%</td>
                                          <td>₹ 25 per Lot.</td>
                                       </tr>
                                       <tr class="grey-back">
                                          <td class="charges-heads">STT</td>
                                          <td>0.025% on the sell side</td>
                                          <td>0.1% on buy &amp; sell</td>
                                          <td>0.01% on sell side</td>
                                          <td>0.053% on sell side (on premium). In case of Options Exercise 0.125% on (Settlement Price * Quantity) to be paid by Buyer</td>
                                       </tr>
                                       <tr>
                                          <td class="charges-heads">Transaction charges</td>
                                          <td>NSE/BSE: 0.00345%</td>
                                          <td>NSE/BSE: 0.00345%</td>
                                          <td>NSE: Exchange transaction charge: 0.002% Clearing charge: 0.0005%</td>
                                          <td>NSE: Exchange transaction charge: 0.05% Clearing charge: 0.002%</td>
                                       </tr>
                                       <tr class="grey-back">
                                          <td class="charges-heads">GST</td>
                                          <td>18% on (Brokerage + Transaction Charges)</td>
                                          <td>18% on (Brokerage + Transaction Charges)</td>
                                          <td>18% on (Brokerage + Transaction Charges + Clearing Charges)</td>
                                          <td>18% on (Brokerage + Transaction Charges + Clearing Charges)</td>
                                       </tr>
                                       <tr>
                                          <td class="charges-heads">SEBI charges</td>
                                          <td>₹ 10 / crore</td>
                                          <td>₹ 10 / crore</td>
                                          <td>₹ 10 / crore</td>
                                          <td>₹ 10 / crore</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              <p class="condition">Condition Applied* : Above charges are applicable for clients who have registered online. These charges will vary for our offline clients (who can avail extended facilities such as a higher margin and a dedicated RM/Dealer).</p>
                           </div>

                        </div>

                        <div
                           className={toggleState === 2 ? "content  active-content" : "content"}
                        >
                           <div class="tab-data-sec">
                              <div class="table-responsive">
                                 <table class="table table-borderless table-striped table-hover">
                                    <thead>
                                       <tr>
                                          <th width="15%">Charges</th>
                                          <th>Currency Futures</th>
                                          <th>Currency Options</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td class="charges-heads">Brokerage</td>
                                          <td>0.02%</td>
                                          <td>₹ 20 per Lot</td>
                                       </tr>
                                       <tr class="grey-back">
                                          <td class="charges-heads">STT</td>
                                          <td>No STT</td>
                                          <td>No STT</td>
                                       </tr>
                                       <tr>
                                          <td class="charges-heads">Transaction charges</td>
                                          <td>NSE Trans. Chgs.: 0.0009% Clearing charge: 0.0005%</td>
                                          <td>NSE Trans. Chgs.: 0.035% Clearing charge: 0.002%</td>
                                       </tr>
                                       <tr class="grey-back">
                                          <td class="charges-heads">GST</td>
                                          <td>18% on (Brokerage + Transaction Charges + Clearing Charges)</td>
                                          <td>18% on (Brokerage + Transaction Charges + Clearing Charges)</td>
                                       </tr>
                                       <tr>
                                          <td class="charges-heads">SEBI charges</td>
                                          <td>₹ 10 / crore</td>
                                          <td>₹ 10 / crore</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              <p class="condition"><strong>Condition Applied* :</strong> Above charges are applicable for clients who have registered online. These charges will vary for our offline clients (who can avail extended facilities such as a higher margin and a dedicated RM/Dealer).</p>
                           </div>
                        </div>

                        <div
                           className={toggleState === 3 ? "content  active-content" : "content"}
                        >
                           <div class="tab-data-sec">
                              <div class="table-responsive">
                                 <table class="table table-borderless table-striped table-hover">
                                    <thead>
                                       <tr>
                                          <th width="15%"> Charges</th>
                                          <th>Commodity Futures</th>
                                          <th>Commodity Options</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td class="charges-heads">Brokerage</td>
                                          <td>0.02%</td>
                                          <td>₹ 50 per Lot.</td>
                                       </tr>
                                       <tr class="grey-back">
                                          <td class="charges-heads">CTT</td>
                                          <td>0.01% on sell side</td>
                                          <td>0.05% on sell side. In case of Options Exercise 0.125% on (Settlement Price * Quantity) to be paid by Buyer</td>
                                       </tr>
                                       <tr>
                                          <td class="charges-heads">Transaction charges</td>
                                          <td>Exchange txn charge: 0.0026% <br /> Clearing charge: 0.0003% ,<br />RMS Charge 0.005% (Only NCDEX)</td>
                                          <td>Exchange txn charge: 0.05%  Clearing charge : 0.002%</td>
                                       </tr>
                                       <tr class="grey-back">
                                          <td class="charges-heads">GST</td>
                                          <td>18% on (Brokerage + Transaction Charges + Clearing Charges)</td>
                                          <td>18% on (Brokerage + Transaction Charges + Clearing Charges)</td>
                                       </tr>
                                       <tr>
                                          <td class="charges-heads">SEBI charges</td>
                                          <td>₹ 10 / crore</td>
                                          <td>₹ 10 / crore</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                              <p class="condition"><strong>Condition Applied* :</strong> Above charges are applicable for clients who have registered online. These charges will vary for our offline clients (who can avail extended facilities such as a higher margin and a dedicated RM/Dealer).</p>
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

export default SectionTabs;
