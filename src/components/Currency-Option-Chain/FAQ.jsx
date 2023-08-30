import React from "react";
import { Accordion } from "react-bootstrap";

function FAQ() {
  return (
    <>
       <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">Frequently Asked Questions</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are calls and puts?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Calls and puts are two categories of option chains. You can buy 100 shares of the stock at a specific price until a specific date if you have a call option. You can sell 100 shares at a specific price until a precise date if you have a put option.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are the benefits of currency options?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        There are several benefits to currency options:
                                        <ul>
                                            <li>A comprehensive overview of available option contracts</li>
                                            <li>Identification of trading opportunities based on strike prices and premiums</li>
                                            <li>Analysis of implied volatility levels for market sentiment</li>
                                            <li>Comparison of option premiums across strike prices and expiration dates</li>
                                            <li>Monitoring of open interest levels for liquidity</li>
                                            <li>Real-time market data for staying informed</li>
                                            <li>Informed decision-making through option chain insights</li>
                                            <li>Calculation of theoretical option values</li>
                                            <li>Enhanced risk management capabilities</li>
                                            <li>A valuable resource for forex options trading</li>
                                            <li>Are currency options allowed in our country?</li>
                                            <li>Trading forex currencies is allowed in India, and the derivatives are available on Indian exchanges like the NSE or BSE.</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Why is it a good idea to do currency trading?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    There are a few reasons why people choose Forex trading instead of stock trading. Due to its reduced fees, flexible hours, and higher transaction volumes as compared to equities, forex trading is advantageous.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Can one buy US options from India?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Yes – from India, you can invest in NASDAQ via different investment routes. You can open an overseas trading account to trade directly. Alternatively, you can choose mutual funds or ETFs if you want to trade indirectly.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default FAQ