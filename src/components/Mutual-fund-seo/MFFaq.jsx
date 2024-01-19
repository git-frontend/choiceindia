
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function MFFaq() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
    return (
        <div>

            <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first pb-4">Frequently Asked Questions</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How much time does it take to start investing in Mutual Funds?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    It takes 5 minutes to complete the account opening process and once you have completed the process you can start investing in mutual funds.

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How does mutual fund investment work?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    A mutual fund attracts investments from investors who have shared investment goals. The money generated gets used by mutual fund investment managers to buy securities, bonds, and stocks. There is risk diversification as the money gets invested in several companies at once.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>When should I start investing in mutual funds?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The best time to invest in mutual funds is as soon as you can. When you invest over time and make regular contributions, you can also reduce the amount of money you need to save to meet your goals because of compounding interest.

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Does one need an account in a bank to invest in mutual funds?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Yes, you must have a bank account for investing in mutual funds. The rule is according to SEBI Mutual Fund Regulations. You will need to provide bank details in your application for mutual funds.

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is the benefit of staying invested in the long term?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The benefit of staying invested in the long term is that you will be able to ride out the ups and downs of the market. You can buy and sell at prices that are more advantageous for you. The compounding effect also helps you multiply your wealth over time.

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How do I get my returns in mutual funds?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    The returns on mutual funds get calculated based on the appreciated value of your investment compared to your initial investment. The net asset value calculates the return on mutual fund investments.

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Are any charges applicable for investing in mutual funds?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    A mutual fund can charge you between 0.5 and 3% based on your investment duration. If you continue to hold onto your investments beyond the specified period, there will be no exit load charges.

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are the units in mutual funds?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    A unit is a representation of your holding in a mutual fund scheme. You can also refer to them as shares. The mutual fund company will issue units based on your total investment.

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is the Net Asset Value (NAV) of a scheme?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    A mutual fund scheme’s performance gets denoted by net asset value (NAV). It is nothing but the current market value of the scheme.


                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="9" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is the expense ratio on mutual fund schemes?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Mutual funds use expense ratios as the annual maintenance charges to fund the expenses. Besides the management fees, it also includes operating costs, advertising costs, and allocation charges. The mutual fund size determines the expense ratio value.


                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="10" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is the tax on mutual funds investment in India?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Short-term capital gains within three years get charged to the investor’s applicable tax rate. Long-term capital gains have a 20% tax scheme with indexation.



                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="11" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How to redeem mutual fund investment?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    You need to log in to the portal of your mutual fund service provider. Visit the desired mutual fund scheme and check the transactions section. You can then redeem the number of units you wish to by providing relevant details.




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

export default MFFaq;

