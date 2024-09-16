import React from 'react'
import { Accordion } from 'react-bootstrap';
import { Link } from "react-router-dom";

const BrokerageFaq = () => {
  return (
    <div>

    <section className="Dematfaq">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="title-first text-center pb-4">Frequently asked Questions</h2>
                            </div>
    
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                    <Accordion.Item eventKey="0" className='faq-item'>
                                        <Accordion.Header as="h3" className='faq-header'>What is a Brokerage calculator</Accordion.Header>
                                        <Accordion.Body className='open-demat-faq-body'>
                                        A Brokerage Calculator is a handy tool that helps traders and investors accurately estimate the brokerage charges they will incur when trading in various market segments.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1" className='faq-item'>
                                        <Accordion.Header as="h3" className='faq-header'>What are the benefits of a Brokerage Calculator?</Accordion.Header>
                                        <Accordion.Body className='open-demat-faq-body'>
                                        By entering relevant details like trade type, order quantity, and instrument, you get a precise calculation of the fees involved. This transparency enables better planning, strategy optimization, and money management. 
                                        Additionally, comparing brokerage across different brokers becomes easier, empowering you to make an informed choice.<br/><br/>
                                        Using the brokerage calculator you get a precise calculation of the fees involved just by entering basic trade details. This enables better planning, strategy optimization, and money management. Additionally, comparing brokerage across different brokers becomes easier, empowering you to make an informed choice.
                                        </Accordion.Body>
                                    </Accordion.Item>
    
                                    <Accordion.Item eventKey="2" className='faq-item'>
                                        <Accordion.Header as="h3" className='faq-header'>How are brokerage fees calculated?</Accordion.Header>
                                        <Accordion.Body className='open-demat-faq-body'>
                                        Brokerage fees are typically calculated as a percentage of the trade value or a flat fee per executed order. The exact calculation depends on many factors including:
                                        <ul>
                                        <br/>
                                        <li>Market segment (equity, derivatives, etc.) </li>
                                        <li>Trade type (intraday, delivery) </li>
                                        <li>Order value, and </li>
                                        <li>Broker's pricing plans</li>
                                        </ul>
                                        Generally, equity delivery trades attract lower charges compared to intraday and derivatives trades. Choice offers discounted brokerage slabs for higher trade volumes.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                   
                                    <Accordion.Item eventKey="3" className='faq-item' id="faqid">
                                        <Accordion.Header as="h3" className='faq-header'>How are Intraday trading charges calculated?</Accordion.Header>
                                        <Accordion.Body className='open-demat-faq-body'>
                                        For intraday trades, brokerage is usually levied on the total turnover (buy value + sell value) rather than the net profit/loss. The charges comprise a percentage of the turnover value and other statutory fees like transaction charges, stamp duty, and GST. 
                                        <br/><br/>
                                        Choice offers different brokerage slabs for the cash and derivatives segments. Intraday brokerage tends to be higher than delivery due to the higher transaction volumes and risk involved.
                                        </Accordion.Body>
                                    </Accordion.Item>
    
                                    <Accordion.Item eventKey="4" className='faq-item'>
                                                <Accordion.Header as="h3" className='faq-header' >How is brokerage calculated on Options?</Accordion.Header>
                                                <Accordion.Body className='open-demat-faq-body'>
                                                Option trading brokerage is calculated based on the premium value (option price multiplied by lot size). Both buy and sell legs of an options 
                                                trade attract charges as a percentage of the traded premium value. In addition, there are other statutory levies like transaction 
                                                charges and GST. The brokerage percentage varies for different brokers and premium value slabs.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="5" className='faq-item'>
                                                <Accordion.Header as="h3" className='faq-header' >How is brokerage calculated in Mutual Funds?</Accordion.Header>
                                                <Accordion.Body className='open-demat-faq-body'>
                                                For mutual fund investments, an entry load is charged by the AMC at the time of investment, while an exit load may be 
                                                applicable on redemptions within a specified period. These loads are disclosed in the scheme documents. <br/><br/>
                                                Apart from these, there could be transaction charges levied by the broker for executing the mutual fund order. These are
                                                 usually flat fees depending on the transaction type (purchase, redemption, switch, etc.).
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                        </div>
                    </div>
                </section>
            </div>
  )
}

export default BrokerageFaq;