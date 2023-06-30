import "./blogcms.scss";
import sipimg from '../../assets/images/fabledetails/img-sip.webp';
import appimg from '../../assets/images/fabledetails/app-login.webp';
import author from '../../assets/images/fabledetails/auth.png';
import logoBanner from '../../assets/images/fabledetails/finx-banner.png';

function BlogCms(){

    return(
        <div>

            <section className="blg-cms-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="ban-caption text-center">
                                <h4>Trading</h4>
                                <h1 className="title-secnd">Commodity Trading Time</h1>
                                <ul className="tag-date">
                                    <li className="ttl-name">Arun Poddar</li>
                                    <li>June 07, 2022</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="blg-cms-description">
                <div className="container">
                    <div className="d-flex justify-content-center">
                    <div className="sub-description">
                                <div className="pr-sec">
                                    <p>The following article will discuss the commodities market and how it started in India. It will highlight the types of commodities markets and the various commodities trading by classifying them into different categories.</p>
                                    <p>It will also inform the readers about the commodity exchanges and some reputed brokers in India. This article will break down the complex terms related to <a href="/commodity-trading">commodity trading</a> in simple and layman's words.</p>
                                </div>
                                <div className="pr-sec">
                                    <h2><a href="/blog/what-is-commodity-trading/" className="link-sub">What is Commodity Trading?</a></h2>
                                    <p>Stocks are not the only thing people invest in, trade, and earn money from. If done carefully, commodity markets can give some very promising returns. Commodities, being the building blocks of any economy, are widely traded across the globe.</p>
                                    <p>The <a href="/blog/commodity-trading-meaning/">meaning of commodity trading</a> is the buying and selling of various commodities and their derivative products. Let us break this definition and understand every part of it in detail to make it more lucid.
                                    First, the commodities are traded in bulk. Unlike shares, you cannot buy as many units as you want. Instead, you have to buy the commodities in many multiples of that lot. The prices of these commodities are set according to the market forces of demand and supply.</p>
                                </div>
                                <div className="pr-sec pr-sec-data">
                                    <table class="table table-hover table-striped ">
                                        <thead>
                                            <tr>
                                                <th>Financial <br/> Ratios</th>
                                                <th>Numbers</th>
                                                <th>Financial <br/> Ratios</th>
                                                <th>Numbers</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Market <br/>Capitalisation</td>
                                                <td>36,896 Cr</td>
                                                <td>Market <br/>Capitalisation</td>
                                                <td>36,896 Cr</td>
                                            </tr>
                                            <tr class="grey-back">
                                                <td>ROCE</td>
                                                <td>34.32%</td>
                                                <td>ROCE</td>
                                                <td>34.32%</td>
                                            </tr>
                                            <tr>
                                                <td>Return on Equity <br/> (ROE)</td>
                                                <td>28.90%</td>
                                                <td>Return on Equity <br/>(ROE)</td>
                                                <td>28.90%</td>
                                            </tr>
                                            <tr>
                                                <td>Net Profit Margin</td>
                                                <td>35.26%</td>
                                                <td>Net Profit Margin</td>
                                                <td>35.26%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="pr-sec">
                                    <h2>Commodity Trading Time in India</h2>
                                    <p>In India, the commodity market trading times are different for different types of commodities. The commodity exchange takes place every weekday, from Monday to Friday. Declared holidays by the exchange are notified to the traders in advance.</p>
                                </div>
                                <div className="pr-sec high-note">
                                    <h5>IMPORTANT NOTE</h5>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed convallis elit. Cras et convallis felis, sit amet vehicula sapien. Fusce auctor auctor odio id porttitor. Fusce in justo et augu. <a href="#" className="link-sub sublink1">Visit Now</a> </p>
                                </div>
                                <div className="pr-sec">
                                    <h2>Commodity Market Opening Time</h2>
                                    <p>All the commodity markets open at the same time, i.e. 9:00 am. So from 9 am onwards, you can start trading in all commodities.</p>
                                    <img src={sipimg} className="img-fluid radius-img" />
                                </div>
                                <div className="pr-sec">
                                    <h2>Commodity Market Closing Time</h2>
                                    <p>The commodity market has different closing times for different commodities.</p>
                                    <ul>
                                        <li>Non-Agri commodities trades end time is 11:30 pm.</li>
                                        <li>For Agri commodities such as cotton & Kapas, the market closes at 9:00 pm.</li>
                                        <li>And for all other commodities, the market closes at 5:00 pm.</li>
                                        <li>All the Intraday position square-off time is 25 minutes before the market closes, and the trade modification can be done 15 minutes after the market closes, i.e. 11:45 pm.</li>
                                    </ul>
                                    <p>Traditional banks such as HDFC Securities and ICIC Direct also provide commodity trading facilities.</p>
                                </div>
                                <div className="pr-sec">
                                    <h2>History of Commodity Trading?</h2>
                                    <p>Organized commodity trading began in India with the setting up of the Bombay Cotton Trade Association in 1875. However, the foundation of the commodities market was laid way before that—way before any other country. </p>

<p>The Bombay Cotton Exchange was established in 1893, which eventually led to establishing futures markets in edible oilseeds, jute, and other jute products.</p>

<p>So, now that we know the remarkable history of the Indian Commodity Markets, let us dive into what commodity trading is and why there's so much buzz about it these days.</p>
                                </div>
                                <div className="pr-sec img-bl">
                                    <img src={appimg} className="img-fluid" />
                                </div>
                                <div className="link-tag">
                                    <h4>Our New Super App Choice FinX Is Here! </h4>
                                    <a href="#" className="btn-bg btn-bg-dark">Download Now</a>
                                </div>
                                <div className="pr-sec">
                                    <h2><a href="/blog/what-are-traded-in-the-commodity-market/" className="link-sub">What is Traded in the Commodity Market?</a></h2>
                                    <p>The commodities traded in the Indian Commodities Market can be classified as agricultural and non-agricultural commodities. The non-agricultural commodities are sub-classified into three categories: bullion, energy, and base metals. Different commodities that are regularly bought and sold on the exchanges are:</p>
                                    <ul>
                                        <li><strong>Agriculture:</strong> Black pepper, cardamom, castor seed, cotton, palm oil, kapas, wheat, paddy, chana, bajra, barley, sugar, and many more</li>
                                        <li><strong>Bullion:</strong> Gold and silver</li>
                                        <li><strong>Energy:</strong> Crude oil and natural gas</li>
                                        <li><strong>Base Metals:</strong> Aluminum, copper, lead, nickel, and zinc</li>
                                        <li>The top traded commodities in India are gold, silver, copper, and cotton.</li>
                                    </ul>
                                </div>
                                <div className="app-promo-banner">
                                    <img src={logoBanner} alt="" />
                                    <h2 className="ttlm">Searching Trading App? Check Out Now
                                    <a href="#" className="link-sub">Our New Super App Choice FinX Is Here!</a></h2>
                                </div>  
                                <div className="pr-sec">
                                    <h2>Types of Commodities Markets</h2>
                                    <p>There are two <a href="/blog/types-of-commodity-market/">types of commodity market</a> which are as follow -</p>
                                    <ul>
                                        <li><strong>Spot Market:</strong> These are also called physical markets, or cash markets, where traders exchange commodities for instant delivery.</li>
                                        <li><strong>Derivatives Market:</strong> It includes futures and forwards. It allows users to trade the commodities at a predetermined price on a fixed date. The traded commodity is delivered physically upon the expiry of the contract.</li>
                                    </ul>
                                </div>
                                <div className="pr-sec">
                                    <h2>Commodity Exchanges in India</h2>
                                    <p>Commodities are exchanged through MCX, NCDEX, etc. MCX and NCDEX are the most commonly used commodity trading platforms in India.</p>
                                    <ul>
                                        <li><strong>Multi Commodity Exchange:</strong> Established in 2003, MCX is widely used for non-agriculture commodities trading.</li>
                                        <li><strong>National Commodity and Derivatives Exchange:</strong> Founded in 2003, it is mainly used for trading agricultural commodities.</li>
                                    </ul>
                                </div>
                                <div className="author-details">
                                    <div className="auth-left">
                                        <img src={author} alt="" className="img-fluid" />
                                    </div>
                                    <div className="auth-right">
                                        <p>Written by</p>
                                        <h4>Team Choice</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed convallis elit. Cras et convallis felis, sit amet vehicula sapien.</p>
                                    </div>
                                </div>
                            </div>
                            
                    </div>
                </div>
            </section>

            <section className="nav-process">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="navigation-cms">
                                <div className="nav-sr">
                                    <div className="cont-l lft-sc">
                                        <a href="#" className="btn-nvg">Previous Article</a>
                                        <p>Mutual Fund Distributor Commission</p>
                                    </div>
                                    <div className="cont-l rght-sc">
                                        <a href="#" className="btn-nvg">Next Article</a>
                                        <p>Total Number of Demat Accounts in India</p>
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

export default BlogCms;