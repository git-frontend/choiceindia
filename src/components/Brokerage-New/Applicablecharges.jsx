import React from "react";
function Applicablecharges() {
   return (
      <div>
         <section className="ApplicableCharges">
            <div className="container">
               <div className="row">
                  <div className="applicable-title">
                      <h2 className="title-secnd">Applicable Charges</h2>
                      <p>List of all charges – our commitment to transparent and low brokerage charges.</p>    
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <div className="applicable-Charges-main">
                        <div className="Regulatory-charges">
                           <h3>I. Regulatory & Statutory Charges</h3>
                           <div className="Regulatory-checklist">
                              <div className="checklist-items">
                                 <div className="checklist"><h4>Securities/Commodities Transaction Tax:</h4></div>
                                 <div className="checklist">
                                    <ul className="checklist-ul">
                                       <li>Levied by the government while transacting on the exchanges.</li>
                                       <li>Charged on both buy and sell sides when trading equity delivery.</li>
                                       <li>Charged only on the selling side when trading either intraday or in F&O.</li>
                                    </ul>
                                 </div>
                              </div>
                              <div className="checklist-items">
                                 <div className="checklist"><h4>Transaction/Turnover Charges:</h4></div>
                                 <div className="checklist">
                                     <ul className="checklist-ul">
                                       <li>Comprises of exchange transaction charges and clearing charges</li>
                                       <li>Charged by exchanges (NSE, BSE, MCX) and clearing members.</li>
                                       <li>BSE: Flat Rate per Trade ₹1.50 & Clearing Charges 0.01 paise per Trade.</li>
                                    </ul></div>
                              </div>
                              <div className="checklist-items">
                                 <div className="checklist"><h4>Stamp Duty Charges:</h4></div>
                                 <div className="checklist">
                                     <ul className="checklist-ul">
                                       <li>Charged as per Stamp Duty Act 1899 levied for transacting in Securities on exchanges or depositories</li>
                                    </ul></div>
                              </div>
                              <div className="checklist-items">
                                 <div className="checklist"><h4>Depository Participant (DP) Charges:</h4></div>
                                 <div className="checklist">
                                     <ul className="checklist-ul">
                                       <li>Debit Instruction from Client Demat Account to outside <br/> Demat Account – 0.02% subject to a minimum of ₹10 per instruction + GST.</li>
                                       <li>Debit Instruction from Client Demat Account to Market – ₹10 per instruction + GST.</li>
                                       <li>Beneficiary to Client Charges – ₹10 per ISIN + GST.</li>
                                       <li> Beneficiary to Market Charges – ₹10 per ISIN + GST.</li>
                                       <li> Shifting of Stocks to Client’s Demat Account from CUSA Account (Client Unpaid Security Account to Client Charges) – ₹10 per ISIN + GST.</li>
                                       <li>Failed Instruction – ₹10 per instruction + GST.</li>
                                       <li> Demat Requests – Per Certificate ₹10/- + Postage Charges ₹100/-</li>
                                       <li> Remat Requests – ₹25 per 100 Securities or 0.04% whichever is higher + GST.</li>
                                       <li> Creation of Pledge – ₹50 or 0.02% whichever is higher + GST.</li>
                                       <li> Unpledge – ₹50 or 0.02% whichever is higher + GST.</li>
                                       <li> Pledge/Unpledge for Margin - ₹10 per ISIN + GST.</li>
                                       <li> Invocation of Pledge – ₹100 or 0.05% whichever is higher + GST.</li>
                                       <li> Charges for reissuing a new DIS Booklet in case of loss of the previous one is ₹100 + GST.</li>

                                    </ul></div>
                              </div>
                              <div className="checklist-items">
                                 <div className="checklist"><h4>Minimum Contract Note Charges:</h4></div>
                                 <div className="checklist">
                                     <ul className="checklist-ul">
                                       <li>Choice Equity doesn’t charge any minimum contract note charges.</li>
                                    </ul></div>
                              </div>
                              <div className="checklist-items">
                                 <div className="checklist"><h4>Goods & Services Tax (GST):</h4></div>
                                 <div className="checklist">
                                     <ul className="checklist-ul">
                                       <li>Tax levied by the government on the services rendered.</li>
                                       <li>18% of (brokerage + transaction charges)</li>
                                    </ul></div>
                              </div>
                              <div className="checklist-items">
                                 <div className="checklist"><h4>SEBI Charges:</h4></div>
                                 <div className="checklist">
                                     <ul className="checklist-ul">
                                       <li>SEBI fees ₹5 per cr for Cash & Non Agri-Commodities and ₹1/- per crore for Agri-Commodities.</li>
                                    </ul></div>
                              </div>
                           </div>
                        </div>
                        <div className="Regulatory-charges">
                           <h3 className="new-heading">II. Our Charges</h3>
                           <div className="Regulatory-checklist">
                              <div className="checklist-items">
                                 <div className="checklist"><h4>Annual Maintenance Charges (AMC):</h4></div>
                                 <div className="checklist">
                                    <ul className="checklist-ul">
                                       <li>First-year AMC free*</li>
                                       <li>3 plans to choose from:</li>
                                       <ol>
                                          <li>₹200/- + GST Yearly Plan</li>
                                          <li>₹1,500/- + GST - Lifetime AMC Covered</li>
                                          <li>₹3,000/- Full Refundable AMC (full amount will be refunded on account closure)</li>
                                       </ol>
                                    </ul>
                                     <p className="note-para">
                                     *Note:
                                       <p className="note-para">- In case you don’t select a scheme, a default AMC as per the annual plan will be charged at the end of the first year. </p>
                                       <p className="note-para">- For a Corporate account, the AMC charges applicable from the first year are ₹1,000/- + GST per annum plan. </p>
                                     </p>
                                 </div>
                              </div>
                              <div className="checklist-items">
                                 <div className="checklist"><h4>Buyback, OFS & NFO Order Charges:</h4></div>
                                 <div className="checklist">
                                     <ul className="checklist-ul">
                                       <li>No extra charges for participating in Buyback, OFS, and NFO Orders.</li>
                                    </ul></div>
                              </div>
                              <div className="checklist-items">
                                 <div className="checklist"><h4>Request for physical CMR, Contract note, Ledger, etc.:</h4></div>
                                 <div className="checklist">
                                     <ul className="checklist-ul">
                                       <li>No charges are applicable for physical CMR, Contract notes, Ledger, etc.</li>
                                    </ul></div>
                              </div>
                           </div>
                        </div>
                        <p className="Disclaimer-para"><strong>Disclaimer:</strong><br/>
                        Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. No Brokerage is charged on expired, exercised, and assigned options contracts.</p>
                     </div>
                  </div>
               </div>
            </div>
         </section>


      </div>
   );
}

export default Applicablecharges;
