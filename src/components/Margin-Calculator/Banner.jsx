import React from 'react'
import { useState } from 'react';
import OpenFreeDematAccount from "./OpenFreeDematAccount";
import { Accordion } from "react-bootstrap";
function Banner() {


    const [toggleState, setToggleState] = useState(1);
  const [data, setData] = useState(0);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  function chapterScroll(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
  return (
    <>
    <section className='banner-section2'>
        <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-9 col-md-12'>
                    {
                      toggleState==1?
                      <div className='banner-ttle text-center'>
                            <h1 className='big-ttl'>Margin Calculator</h1>
                            <p>Use Choice FinX Margin Calculator to calculate the margin for Future & Option (F&O), Commodity, and Currency segments.</p>
                    </div>:
                    toggleState==2?
                    <div className='banner-ttle text-center'>
                            <h1 className='big-ttl'>F&O Margin Calculator</h1>
                            <p>Calculate the margin for Future & Option (F&O) selling</p>
                    </div>:
                    toggleState==3?
                    <div className='banner-ttle text-center'>
                        <h1 className='big-ttl'>Commodity Margin Calculator</h1>
                        <p>Calculate the margin for commodity.</p>
                    </div>:
                    toggleState==4?
                    <div className='banner-ttle text-center'>
                            <h1 className='big-ttl'>Forex Margin Calculator</h1>
                            <p>Calculate the margin for Currency</p>
                    </div>:
                    ""
                    }
                       
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='tabs-btn'>
                            <div className='row justify-content-center'>
                                <div className='col-xl-6 col-md-12'>
                                    <ul className='list_group1'>
                                            <li  className={toggleState === 1 ? "list-group-item tabs active" : "list-group-item"}
                                                onClick={() => { toggleTab(1); setData(0) }}>All</li>
                                            <li  className={toggleState === 2 ? "list-group-item tabs active" : "list-group-item"}
                                                onClick={() => { toggleTab(2); setData(1) }}>F&O</li>
                                            <li  className={toggleState === 3 ? "list-group-item tabs active" : "list-group-item"}
                                                onClick={() => { toggleTab(3); setData(2) }}>Commodity</li>
                                            <li  className={toggleState === 4 ? "list-group-item tabs active" : "list-group-item"}
                                                onClick={() => { toggleTab(4); setData(3) }}>Forex</li>
                                    </ul>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
        </div>
    </section>
    <section className='banner-section'>
            <div className='container'>
                <div className='field-sec'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="content-tabs">
                                <div className="content active-content content">
                                        <div className='form-section'>
                                            <div className='left-sec'>
                                                <div className="row-sec row-flex">
                                                    <div className="flex-items">
                                                        <p className='frm-label'>Search</p>
                                                        <input className='form-control input-font search-icon' placeholder='NIFTY 29JUN23'/>
                                                    </div>
                                                    <div className="flex-items">
                                                        <p className='frm-label'>Quantity</p>
                                                        <input type="text" className='form-control input-font'placeholder='50'/>
                                                        <span className='val-qty'>Lot Size = 50</span>
                                                    </div>
                                                </div>
                                                <div className="row-flex radio-section">
                                                    <div className="flex-items">
                                                        <div class="custom_radio">
                                                           <div className='radio-flex'>
                                                                <input type="radio" id="featured-1" name="featured" checked/>
                                                                <label for="featured-1">BUY</label>
                                                           </div>
                                                           <div className='radio-flex'>
                                                                <input type="radio" id="featured-2" name="featured"/>
                                                                <label for="featured-2">SELL</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex-items">
                                                        <div className='button-sec'>
                                                            <div className='btn-items'>
                                                                <button type="submit" className="btn-add btn btn-primary">Add</button>
                                                            </div>
                                                            <div className='btn-items'>
                                                                <button type="submit" className="btn-reset btn btn-primary">Resset All</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                            <div className='right-sec'>
                                                <div className='brokerage-card'>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Span Margin</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>₹ 86,423.00</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Exposure Margin</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>₹ 18,420.25</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex brd'></div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>Total Margin</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>₹ 104,843.25</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Margin Benefit</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='font-success'>₹ 279,571.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      <div className='table-margin-cal'>
                                      <div className='table-responsive'>
                                        <table class="table table-striped ">
                                        <thead>
                                            <tr>
                                                <th className='text-start'>Contract</th>
                                                <th className='text-end'>Qty</th>
                                                <th className='text-end'>Trade</th>
                                                <th className='text-end'>Strike</th>
                                                <th className='text-end'>Span Margin</th>
                                                <th className='text-end'>Exposure Margin</th>
                                                <th className='text-end'>Total Margin</th>
                                                <th className='text-center'>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                    <td className='text-start'>NIFTY 29JUN23</td>
                                                    <td className='text-end'>50</td>
                                                    <td className='text-end'>BUY</td>
                                                    <td className='text-end'>NA</td>
                                                    <td className='text-end'>86,602.00</td>
                                                    <td className='text-end'>18,420.25</td>
                                                    <td className='text-end'>105,022.25</td>
                                                    <td className='text-center'>
                                                        <div class="tooltip2">
                                                            <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                            <path d="M6 4C6 2.34315 7.3431 1 9 1C10.6569 1 12 2.34315 12 4M6 4H12M6 4H3M12 4H15M3 4H1M3 4V15C3 16.1046 3.89543 17 5 17H13C14.1046 17 15 16.1046 15 15V4M15 4H17" stroke="#221F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                            </svg>
                                                            <span class="tooltiptext">Delete</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            <tr>
                                                <td className='text-start'>MRF 27JUL23</td>
                                                <td className='text-end'>10</td>
                                                <td className='text-end'>SELL</td>
                                                <td className='text-end'>NA</td>
                                                <td className='text-end'>139,298.00</td>
                                                <td className='text-end'>34,181.86</td>
                                                <td className='text-end'>173,479.86</td>
                                                <td className='text-center'>
                                                    <div class="tooltip2">
                                                        <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <path d="M6 4C6 2.34315 7.3431 1 9 1C10.6569 1 12 2.34315 12 4M6 4H12M6 4H3M12 4H15M3 4H1M3 4V15C3 16.1046 3.89543 17 5 17H13C14.1046 17 15 16.1046 15 15V4M15 4H17" stroke="#221F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                        <span class="tooltiptext">Delete</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='text-start'>TATAMOTORS 29JUN23</td>
                                                <td className='text-end'>1425</td>
                                                <td className='text-end'>BUY</td>
                                                <td className='text-end'>NA</td>
                                                <td className='text-end'>140,990.00</td>
                                                <td className='text-end'>25,855.20</td>
                                                <td className='text-end'>166,845.20</td>
                                                <td className='text-center'>
                                                    <div class="tooltip2">
                                                        <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <path d="M6 4C6 2.34315 7.3431 1 9 1C10.6569 1 12 2.34315 12 4M6 4H12M6 4H3M12 4H15M3 4H1M3 4V15C3 16.1046 3.89543 17 5 17H13C14.1046 17 15 16.1046 15 15V4M15 4H17" stroke="#221F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                        <span class="tooltiptext">Delete</span>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className='text-start'>TATAMOTORS 29JUN23 CE 245.00</td>
                                                <td className='text-end'>1425</td>
                                                <td className='text-end'>SELL</td>
                                                <td className='text-end'>245</td>
                                                <td className='text-end'>546,202.50</td>
                                                <td className='text-end'>25,855.20</td>
                                                <td className='text-end'>572,032.77</td>
                                                <td className='text-center'>
                                                    <div class="tooltip2">
                                                        <svg class="delete-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <path d="M6 4C6 2.34315 7.3431 1 9 1C10.6569 1 12 2.34315 12 4M6 4H12M6 4H3M12 4H15M3 4H1M3 4V15C3 16.1046 3.89543 17 5 17H13C14.1046 17 15 16.1046 15 15V4M15 4H17" stroke="#221F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                                        </svg>
                                                        <span class="tooltiptext">Delete</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                        </div>
                                      </div>
                                      <div className='note'>
                                        <p>Note: On non-trading hours, margin value displayed may vary with actual margin required for trade.</p>
                                      </div>
                                </div>
                                {/* <div className={toggleState === 2 ? "content  active-content" : "content"}>
                                    2
                                </div> */}
                                  {/* <div className={toggleState === 3 ? "content  active-content" : "content"}>
                                    3
                                </div> */}
                                  {/* <div className={toggleState === 4 ? "content  active-content" : "content"}>
                                   4
                                </div> */}
                            </div>
                        </div>
                      
                    </div>
                </div>
            </div>
    </section>
    <OpenFreeDematAccount/>
    <section className='more-content'>
            <div className='container'>
                {
             toggleState==1?
                     <div className="row">
                        <div className='col-md-12'>
                            <div className='title-content'>
                                <h2 className='title-secnd'>Margin Calculator - <br/> Calculate Your Trading Margin</h2>
                            </div>
                            <div>
                                <p>Understanding margins is vital whether you're a business owner, an investor, or someone interested in financial trading. But what does this margin refer to?</p>
                                <p>A margin is a loan that a trader can obtain from their stockbroker to purchase assets they may not be able to afford. You can get a margin by putting up cash or securities as collateral.</p>
                                <p>A single online margin calculator can calculate margins for all trading, such as Equity, Futures and Options (F&O), Commodity and Currency Exchanges.</p>
                                <p>Let us go ahead and cover what a  margin calculator is, its types, workings, benefits, and how it has become an indispensable tool in trading.</p>
                                <h3 className='seo-h3'>What is a Margin Calculator?</h3>
                                <p>The margin needed for trading or investing can be calculated using a helpful tool called a margin calculator. To determine the amount of money one needs to borrow from a stockbroker to afford an asset, the calculator takes into account many aspects, including:</p>
                                <ul>
                                    <li>Leverage</li>
                                    <li>Asset Price</li>
                                    <li>Desired Margin Level </li>
                                </ul>
                                <p>The calculator instantly calculates the necessary margin after these inputs, enabling traders and investors to make wise judgements about their holdings and appropriately manage their risk.</p>
                                <h3 className='seo-h3'>What is the SPAN Margin Calculator?</h3>
                                <p>Standardised Portfolio Analysis of Risk (SPAN), a well-known system that any Options and Futures (F&O) exchanges have adopted globally, determines the SPAN margin. The SPAN Margin uses a variety of parameters, including volatility and underlying price movements, to determine the span margin and exposure margin required by the exchanges. The exposure margin is charged over the SPAN margin to protect against the broker's liability which may arise due to market volatility. Also called the additional margin, the exposure margin is often charged as 2% of the contract value.</p>
                                <p>Based on a sophisticated collection of algorithms, the SPAN margin calculator evaluates margin needs based on an overall evaluation of the one-day risk for a trader's account. It is determined using a risk array that establishes each contract's gains or losses for many scenarios. These circumstances— risk scenarios and profit or loss measurements —concern changes in price, volatility, and reduced expiration time.</p>
                                <h3 className='seo-h3'>Types of Margins</h3>    
                                <p>When we talk about margins in the stock market, we talk about both the cash and F&O markets.</p>
                                <p>Within the cash market, the types of margins are:</p>
                                <ul>
                                    <li>Value at risk margin</li>
                                    <li>Extreme loss margin</li>
                                    <li>Mark to-market margin</li>
                                </ul>
                                <p>Within the F&O market, the types of margins are:</p>
                                <ul>
                                    <li>Initial margin</li>
                                    <li>Exposure margin</li>
                                </ul>
                                <h3 className='seo-h3'>How Does the Margin Calculator Work?</h3>    
                                <p>An online margin calculator is a web-based tool that helps stock traders calculate the margin they need.</p>
                                <p>The calculator requires the trader to enter details based on which it will calculate and give accurate results, such as:</p>
                                <ul>
                                    <li>Trading instrument</li>
                                    <li>Lot size</li>
                                    <li>Leverage</li>
                                    <li>currency</li>
                                </ul>
                                <p>A margin calculator can help you determine how much money you can borrow from a stockbroker to buy financial products such as stocks, futures, options, and more. You can check margins across equity, commodities, options, MIS, NSE, and intraday using an online NSE margin calculator or intraday margin calculator. </p>
                                <p>The margin on equities for any stock or ETF is calculated as follows:</p>
                                <p>Value At Risk + Extreme Loss Margin</p>
                                <p>In the case of calculating the margin on futures and options for equities, commodities, or currencies, the calculation is:</p>
                                <p>Standard Portfolio Analysis of Risk + Exposure Margin</p>
                                <h3 className='seo-h3'>How to Use an Online Margin Calculator?</h3>
                                <p>Follow these steps to use a margin calculator:</p>
                                <ol>
                                    <li>Choose any online stock margin calculator.</li>
                                    <li>Once you have chosen your online margin calculator, enter the necessary details such as trade type, size, leverage used, and account currency.</li>
                                    <li>Calculate the required margin for your trade.</li>
                                    <li>Once the calculation is done evaluate if you have enough margin in your account to pay for the trade.</li>
                                </ol>
                                <h3 className='seo-h3'>Benefits of Using an Online Margin Calculator?</h3>
                                <p>There are several benefits to using an online margin calculator that is beneficial to traders, such as:</p>
                                <p><strong>Gives traders information before a trade:</strong> Traders can use a margin calculator to figure out how much money they need to deposit at the brokerage to begin a deal. </p>
                                <p><strong>Correct Calculations:</strong>  Another reason that these calculators have become indispensable tools is because of their accuracy. Trading professionals must take into account many variables when determining complex margin requirements.</p>
                                <p><strong>Speedy and Practical:</strong> As long as a trader has an online connection, they can use the calculator whenever and wherever they like. </p>
                                <p><strong>Personalised Settings:</strong> Online margin calculators frequently offer customised options. To suit their trading strategy, traders can adjust the leverage, lot size, and other parameters.</p>
                                <p>Using an online margin calculator equips traders with accurate numbers within minutes. The calculators have user-friendly interfaces and customisable parameters, making them an easy choice.</p>
                                <p>It is always a wise choice to remember that then calculators are indicative in nature, and they should not be solely used to take investment decisions. Before you make any drastic investments check with an industry expert. </p>
                            </div>
                    </div>
                     </div> :
                     toggleState==2?

                     <div className="row">
                    <div className='col-md-12'>
                            <div className='title-content'>
                                <h2 className='title-secnd'>Future & Option Margin Calculator</h2>
                            </div>
                            <div>
                                <p>Trading in derivative products like futures and options (F&O) contracts requires you to keep a margin in your trading account to cover potential losses. These losses may arise due to market volatility, lack of risk management, or adverse price movements of the underlying assets. Thus, it becomes crucial to calculate your F&O margin. </p>
                                <p>A margin is a loan that a trader can obtain from their stockbroker to purchase assets they may not be able to afford. You can get a margin by putting up cash or securities as collateral.</p>
                                <p>A single online margin calculator can calculate margins for all trading, such as Equity, Futures and Options (F&O), Commodity and Currency Exchanges.</p>
                                <p>Let us go ahead and cover what a  margin calculator is, its types, workings, benefits, and how it has become an indispensable tool in trading.</p>
                                <h3 className='seo-h3'>What is a Margin Calculator?</h3>
                                <p>The margin needed for trading or investing can be calculated using a helpful tool called a margin calculator. To determine the amount of money one needs to borrow from a stockbroker to afford an asset, the calculator takes into account many aspects, including:</p>
                                <ul>
                                    <li>Leverage</li>
                                    <li>Asset Price</li>
                                    <li>Desired Margin Level </li>
                                </ul>
                                <p>The calculator instantly calculates the necessary margin after these inputs, enabling traders and investors to make wise judgements about their holdings and appropriately manage their risk.</p>
                                <h3 className='seo-h3'>What is the SPAN Margin Calculator?</h3>
                                <p>Standardised Portfolio Analysis of Risk (SPAN), a well-known system that any Options and Futures (F&O) exchanges have adopted globally, determines the SPAN margin. The SPAN Margin uses a variety of parameters, including volatility and underlying price movements, to determine the span margin and exposure margin required by the exchanges. The exposure margin is charged over the SPAN margin to protect against the broker's liability which may arise due to market volatility. Also called the additional margin, the exposure margin is often charged as 2% of the contract value.</p>
                                <p>Based on a sophisticated collection of algorithms, the SPAN margin calculator evaluates margin needs based on an overall evaluation of the one-day risk for a trader's account. It is determined using a risk array that establishes each contract's gains or losses for many scenarios. These circumstances— risk scenarios and profit or loss measurements —concern changes in price, volatility, and reduced expiration time.</p>
                                <h3 className='seo-h3'>Types of Margins</h3>    
                                <p>When we talk about margins in the stock market, we talk about both the cash and F&O markets.</p>
                                <p>Within the cash market, the types of margins are:</p>
                                <ul>
                                    <li>Value at risk margin</li>
                                    <li>Extreme loss margin</li>
                                    <li>Mark to-market margin</li>
                                </ul>
                                <p>Within the F&O market, the types of margins are:</p>
                                <ul>
                                    <li>Initial margin</li>
                                    <li>Exposure margin</li>
                                </ul>
                                <h3 className='seo-h3'>How Does the Margin Calculator Work?</h3>    
                                <p>An online margin calculator is a web-based tool that helps stock traders calculate the margin they need.</p>
                                <p>The calculator requires the trader to enter details based on which it will calculate and give accurate results, such as:</p>
                                <ul>
                                    <li>Trading instrument</li>
                                    <li>Lot size</li>
                                    <li>Leverage</li>
                                    <li>currency</li>
                                </ul>
                                <p>A margin calculator can help you determine how much money you can borrow from a stockbroker to buy financial products such as stocks, futures, options, and more. You can check margins across equity, commodities, options, MIS, NSE, and intraday using an online NSE margin calculator or intraday margin calculator. </p>
                                <p>The margin on equities for any stock or ETF is calculated as follows:</p>
                                <p>Value At Risk + Extreme Loss Margin</p>
                                <p>In the case of calculating the margin on futures and options for equities, commodities, or currencies, the calculation is:</p>
                                <p>Standard Portfolio Analysis of Risk + Exposure Margin</p>
                                <h3 className='seo-h3'>How to Use an Online Margin Calculator?</h3>
                                <p>Follow these steps to use a margin calculator:</p>
                                <ol>
                                    <li>Choose any online stock margin calculator.</li>
                                    <li>Once you have chosen your online margin calculator, enter the necessary details such as trade type, size, leverage used, and account currency.</li>
                                    <li>Calculate the required margin for your trade.</li>
                                    <li>Once the calculation is done evaluate if you have enough margin in your account to pay for the trade.</li>
                                </ol>
                                <h3 className='seo-h3'>Benefits of Using an Online Margin Calculator?</h3>
                                <p>There are several benefits to using an online margin calculator that is beneficial to traders, such as:</p>
                                <p><strong>Gives traders information before a trade:</strong> Traders can use a margin calculator to figure out how much money they need to deposit at the brokerage to begin a deal. </p>
                                <p><strong>Correct Calculations:</strong>  Another reason that these calculators have become indispensable tools is because of their accuracy. Trading professionals must take into account many variables when determining complex margin requirements.</p>
                                <p><strong>Speedy and Practical:</strong> As long as a trader has an online connection, they can use the calculator whenever and wherever they like. </p>
                                <p><strong>Personalised Settings:</strong> Online margin calculators frequently offer customised options. To suit their trading strategy, traders can adjust the leverage, lot size, and other parameters.</p>
                                <p>Using an online margin calculator equips traders with accurate numbers within minutes. The calculators have user-friendly interfaces and customisable parameters, making them an easy choice.</p>
                                <p>It is always a wise choice to remember that then calculators are indicative in nature, and they should not be solely used to take investment decisions. Before you make any drastic investments check with an industry expert. </p>
                            </div>
                    </div>
                   </div>:
                       toggleState==3?
                         <div className="row">
                           hello 3
                         </div> :
                         toggleState==0?
                          <div className="row">
                          hello 4
                        </div>:
                        ""
                       }
               
             </div>

                   
            
    </section>
    <section className="margin-faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div className="row">
                    {
                      toggleState==1?
                      <div className="col-md-12">
                      <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                          <Accordion.Item eventKey="0" className='faq-item'>
                              <Accordion.Header as="h3" className='faq-header'>What are the two segments of margin classification?</Accordion.Header>
                              <Accordion.Body className='open-demat-faq-body'>
                                  In stock trading, the margin is broadly classified into two spectrums they are– cash and derivative.
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="1" className='faq-item'>
                              <Accordion.Header as="h3" className='faq-header'>What is the margin for F&O? </Accordion.Header>
                              <Accordion.Body className='open-demat-faq-body'>
                               For the derivative market, the margin is the amount you need to pay to take a position. The margin at the beginning of the trade is known as the initial margin, calculated based on the position you might hold until the expiry date. 
                              </Accordion.Body>
                          </Accordion.Item>
                          <Accordion.Item eventKey="2" className='faq-item'>
                              <Accordion.Header as="h3" className='faq-header'>How much margin is safe?</Accordion.Header>
                              <Accordion.Body className='open-demat-faq-body'>
                              A 5% margin is considered very low, whereas a 10% margin is considered healthy, and a 20% is a high margin.
                              </Accordion.Body>
                          </Accordion.Item>
                  </Accordion>
                  </div>:
                   
                    toggleState==2?
                    <div className="col-md-12">
                    <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                        <Accordion.Item eventKey="0" className='faq-item'>
                            <Accordion.Header as="h3" className='faq-header'>What are the two segments of margin classification?</Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                                In stock trading, the margin is broadly classified into two spectrums they are– cash and derivative.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1" className='faq-item'>
                            <Accordion.Header as="h3" className='faq-header'>What is the margin for F&O? </Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                             For the derivative market, the margin is the amount you need to pay to take a position. The margin at the beginning of the trade is known as the initial margin, calculated based on the position you might hold until the expiry date. 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2" className='faq-item'>
                            <Accordion.Header as="h3" className='faq-header'>How much margin is safe?</Accordion.Header>
                            <Accordion.Body className='open-demat-faq-body'>
                            A 5% margin is considered very low, whereas a 10% margin is considered healthy, and a 20% is a high margin.
                            </Accordion.Body>
                        </Accordion.Item>
                </Accordion>
                </div>:
                toggleState==3?
                <div className="col-md-12">
                <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                    <Accordion.Item eventKey="0" className='faq-item'>
                        <Accordion.Header as="h3" className='faq-header'>What are the two segments of margin classification?</Accordion.Header>
                        <Accordion.Body className='open-demat-faq-body'>
                            In stock trading, the margin is broadly classified into two spectrums they are– cash and derivative.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='faq-item'>
                        <Accordion.Header as="h3" className='faq-header'>What is the margin for F&O? </Accordion.Header>
                        <Accordion.Body className='open-demat-faq-body'>
                         For the derivative market, the margin is the amount you need to pay to take a position. The margin at the beginning of the trade is known as the initial margin, calculated based on the position you might hold until the expiry date. 
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='faq-item'>
                        <Accordion.Header as="h3" className='faq-header'>How much margin is safe?</Accordion.Header>
                        <Accordion.Body className='open-demat-faq-body'>
                        A 5% margin is considered very low, whereas a 10% margin is considered healthy, and a 20% is a high margin.
                        </Accordion.Body>
                    </Accordion.Item>
            </Accordion>
            </div>:
            toggleState==4?
            <div className="col-md-12">
            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                <Accordion.Item eventKey="0" className='faq-item'>
                    <Accordion.Header as="h3" className='faq-header'>What are the two segments of margin classification?</Accordion.Header>
                    <Accordion.Body className='open-demat-faq-body'>
                        In stock trading, the margin is broadly classified into two spectrums they are– cash and derivative.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className='faq-item'>
                    <Accordion.Header as="h3" className='faq-header'>What is the margin for F&O? </Accordion.Header>
                    <Accordion.Body className='open-demat-faq-body'>
                     For the derivative market, the margin is the amount you need to pay to take a position. The margin at the beginning of the trade is known as the initial margin, calculated based on the position you might hold until the expiry date. 
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className='faq-item'>
                    <Accordion.Header as="h3" className='faq-header'>How much margin is safe?</Accordion.Header>
                    <Accordion.Body className='open-demat-faq-body'>
                    A 5% margin is considered very low, whereas a 10% margin is considered healthy, and a 20% is a high margin.
                    </Accordion.Body>
                </Accordion.Item>
        </Accordion>
        </div>:
                        ""
                    }
                    </div>
                </div>
            </section>
    </>
  )
}

export default Banner