
import React from "react";
import Bannerimage from '../../assets/images/brokerage-charges/banner-img.webp';
import glossary from '../../assets/images/brokerage-charges/money.svg';
import LazyLoader from '../Common-features/LazyLoader';


import { Accordion } from "react-bootstrap";

function GlossaryCharges() {

  return (
    <div>
      
     
    

    <section className="glossary-charges">
            <div className="container">
                <div className="glossary-sub-cont">
                    <Accordion flush className='open-demat-faqs-accordion'>
                        <Accordion.Item eventKey="0" className='faq-item'>
                            <Accordion.Header> <h4 className='faq-header'>
                            <LazyLoader src={glossary} alt={"Banner Images"} className={"img-fluid"} width={""} height={""} />
                                    Glossary of Charges</h4>
                                
                                </Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                            <div class="card-block">
                                   <div class="row">
                                        <div class="col-md-6">
                                             <h4 class="mt-0">Securities/Commodities Transaction Tax</h4>
                                             <p>
                                                  Tax levied by the government while transacting on the exchanges. Charged as above on both buy and sell sides when trading equity delivery. Charged only on selling side when trading either
                                                  intraday or in F&amp;O.
                                             </p>
                                             <h4>Transaction/Turnover Charges</h4>
                                             <p>Exchange transaction charges + Clearing charges. Charged by exchanges (NSE,BSE,MCX) and clearing member.</p>
                                             <p>BSE: Flat Rate per Trade Rs 1.50 &amp; Clearing Charges Rs 0.01 per Trade.</p>
                                             <h4>Stamp Charges</h4>
                                             <p>Charged as per Stamp Duty Act 1899 levied for transacting in Securities on exchanges or depositories</p>
                                             <h4>DP (Depository participant) Charges</h4>
                                             <p>Transaction Charges :-</p>
                                             <ol>
                                                  <li>Debit Instruction from Client Demat Account to outside Demat Account – 0.02% subject to minimum of ₹ 10 per instruction + GST.</li>
                                                  <li>Debit Instruction from Client Demat Account to Market – ₹ 10 per instruction + GST.</li>
                                                  <li>Beneficiary to Client Charges – ₹ 10 per ISIN + GST.</li>
                                                  <li>Beneficiary to Market Charges – ₹ 10 per ISIN + GST.</li>
                                                  <li>Shifting of Stocks to Client’s Demat Account from CUSA Account (Clients Unpaid Security Account to Client Charges) – ₹ 10 per ISIN + GST.</li>
                                                  <li>Failed Instruction – ₹ 10 per instruction + GST.</li>

                                                  <li>Demat Requests –  Per Certificate Rs. 10/-  + Postage Charges Rs. 100/-</li>
                                                  <li>Remat Requests – ₹ 25 per 100 Securities or 0.04% whichever is higher + GST.</li>
                                                  <li>Creation of Pledge – ₹ 50 or 0.02% whichever is higher + GST.</li>
                                                  <li>Unpledge – ₹ 50 or 0.02% whichever is higher + GST</li>
                                                  <li>Pledge/Unpledge for Margin - ₹ 10 per ISIN + GST</li>
                                                  <li>Invocation of Pledge – ₹ 100 or 0.05% whichever is higher + GST.</li>
                                                  <li>Charges of reissuing new DIS Booklet in case of Lost of previous one is ₹ 100 + GST.</li>
                                             </ol>
                                             <h4>Minimum Contract Note Charges</h4>
                                             <p>Choice Equity Doesn’t Charge any Minimum Contract Note Charges</p>
                                        </div>
                                        <div class="col-md-6">
                                             <h4 class="mt-0">GST</h4>
                                             <p>Tax levied by the government on the services rendered. 18% of ( brokerage + transaction charges)</p>
                                             <h4>SEBI Charges</h4>
                                             <p>SEBI fees Rs. 5 per cr for cash &amp; Non agri-commodities and Rs. 1/- per crore for Agri-Commodities</p>
                                             <h4>AMC (Annual Maintenance Charges)</h4>
                                             <p>OPEN A FREE DEMAT ACCOUNT ONLINE</p>
                                             <p>Zero Account Opening Fee</p>
                                             <p>Low Brokerage Charges</p>
                                             <p><strong>First Year AMC Free* 3 plans to choose from:</strong></p>
                                             <p>
                                                  </p><li>Rs.200/- + GST Yearly Plan</li>
                                             <p></p>
                                             <p>
                                                  </p><li>Rs.1500/- + GST - Lifetime AMC Covered</li>
                                             <p></p>
                                             <p>
                                                  </p><li>Rs.3000/- Full Refundable AMC (Full amount will be refunded when you close</li>
                                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;the account with us)
                                             <p></p>
                                             <br/>
                                             <p>
                                                  *In case no scheme is selected by you then by default AMC as per annual plan will be charged at the end of the first year. For a Corporate Account, the AMC charges applicable from the 1st
                                                  year are - 1000/- + GST per Annum Plan
                                             </p>
                                             <h4>Buyback, OFS and NFO Order Charges</h4>
                                             <p>No Extra Charges for participating in Buyback, OFS &amp; NFO Orders.</p>
                                             <h4>Request for Physical CMR, Contract Note, Ledger, etc.</h4>
                                             <p>No Charges for Physical CMR, Contract Note or Ledger Etc.</p>
                                        </div>
                                        <div class="col-sm-12">
                                             <h4>Disclaimer</h4>
                                             <p>
                                                  Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. No Brokerage is charged on expired, exercised, and
                                                  assigned options contracts.
                                             </p>
                                        </div>
                                   </div>
                                   
                              </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
    </section>
      
    
    </div>
  );
}

export default GlossaryCharges;
