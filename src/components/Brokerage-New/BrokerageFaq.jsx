import React from "react";
import { Accordion } from "react-bootstrap";
function BrokerageFaq() {
   return (
      <div>
        <section className="brokeragefaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-secnd">Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is brokerage?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Brokerage is a fee or commission charged by a broker for executing transactions or providing specialized services on behalf of clients. Choice charges the lowest brokerage fees for services such as purchases, sales, consultations, negotiations, and delivery from our regular clients.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are STT charges?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Securities Transaction Tax (STT) is a type of financial transaction tax, akin to tax collected at source (TCS). It’s a direct tax imposed on each buying and selling transaction of securities listed on the recognized stock exchanges in India.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are auto square-off charges?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Auto square-off charges are levied when intraday positions are not closed before the square-off time and the broker has closed the position. Choice doesn’t charge auto square-off charges.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is a brokerage account? </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    A brokerage account is an investment account held at a licensed brokerage firm such as Choice. An investor places funds into their brokerage account, and the brokerage firm carries out orders for investments like stocks, bonds, mutual funds, and exchange-traded funds (ETFs) for them.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Which trading app has the lowest brokerage?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Choice FinX is among the few apps known for its comparatively lower brokerage charges in India, which appeals to traders and investors seeking cost-effective options for trading in the stock market.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What factors influence brokerage calculation?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Brokerage depends on:
                                    Buy/Sale Price: The price of a single unit of stocks/securities.
                                    Volume: The volume of transactions. Higher volumes often mean lower commission percentages.
                                    Types of Brokers: Full-service brokers, like Choice, provide value-added services (research advisory, market advisory, customer support, real-time market updates) that attract different charges than discount brokers.

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How is Brokerage calculated?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Brokerage is calculated using the formula: Brokerage = Number of shares sold/bought x Price of one unit of stock x brokerage percentage. It’s a fee paid to brokers when a trade is initiated. At Choice, brokerage for Delivery, Intraday, and Futures is calculated based on a percentage, while for Options, it's a flat fee.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are Intraday Brokerage charges and how are they calculated?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Intraday Brokerage is a fee paid to brokers for trades executed on the same day. At Choice, these charges are calculated at 0.02%.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are Delivery Brokerage charges and how are they calculated?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Delivery Brokerage Charges apply to trades where an investor buys on one day and sells on another. At Choice, these are calculated at 0.2%.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="9" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are the Brokerage charges for Equities Trading?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    At Choice, the brokerage charges for Equities Trading are 0.02% for Delivery and Intraday, 0.02% for Futures, and ₹25 per lot for Options.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="10" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are the Brokerage charges for Futures and Options Trading?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    For Futures and Options Trading at Choice, the charges are 0.2% for Delivery and Intraday, 0.02% for Futures, and ₹25 per lot for Options.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="11" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are Depository Participant charges?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Once stocks are purchased, they are digitally held by the Depository (NSDL and CDSL in India). The Depository charges a fee to the Depository Participant (broker) for holding these securities (only for delivery), which is then charged to the investor.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="12" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is a Brokerage Calculator?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    A Brokerage Calculator is a digital tool provided by most brokers, including Choice, that allows traders to calculate their brokerage charges in advance. It can also calculate GST, STT, transaction fees, and stamp duty charges.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="13" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How to use a Brokerage Calculator</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    To use it, one needs to input the buy/sell price of a stock, number of shares, state (to calculate stamp duty), and lot size (for trading in Options). It's a great tool for intraday traders to analyze the cost of their trade before buying and selling stocks.
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </div>
   );
}

export default BrokerageFaq;
