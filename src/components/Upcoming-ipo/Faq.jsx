
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

function Faq() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
    return (
        <div>

            <section className="upc-ipo-faqs">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-secnd text-center pb-4">IPO FAQs</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What is an Initial Public Offering (IPO)?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    An IPO is the process by which a private company offers its shares to the public for the first time, becoming a publicly-traded entity on a stock exchange.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>How does an IPO work?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    In an IPO, a company issues new shares and offers them to the public through a prospectus. Investors can apply for these shares during the subscription period, and if the issue is oversubscribed, shares are allotted through a lottery system. After allotment, the shares are listed on a stock exchange for trading.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Why does a company launch an IPO?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Companies launch IPOs for various reasons, such as raising capital for expansion, debt repayment, providing an exit opportunity for early investors, enhancing brand visibility, and facilitating future growth and acquisitions.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Are IPOs risky?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    IPOs can be riskier than investing in established companies due to the lack of a proven track record, market volatility, and potential overvaluation. However, they also offer the potential for high returns if the company performs well.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Why apply for an IPO?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Investors apply for upcoming IPOs to gain early exposure to a company's growth potential, diversify their portfolios, and potentially benefit from listing gains if the stock price rises after the IPO.
                                    </Accordion.Body>
                                </Accordion.Item>

                                 

                            </Accordion>
                            {
                                view ?
                                    <Accordion defaultActiveKey="5" flush className='open-demat-faqs-accordion'>
                                        <Accordion.Item eventKey="5" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'> How to invest in an IPO?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            To invest in an upcoming IPO, you need to open a Demat and trading account with a broker, review the IPO prospectus, and submit an application during the subscription period. The application process involves specifying the number of shares and the bid price.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>How to pre-apply for upcoming IPOs Online?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Many brokers, including Choice, offer online pre-application facilities for upcoming IPOs. You can register your interest and receive updates when the new upcoming IPO opens for subscription, making the application process more convenient.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Can I apply in all IPOs on Choice?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Yes, as a Choice customer, you can apply for any upcoming IPO available on the platform during the subscription period, subject to meeting the eligibility criteria specified in the prospectus.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>How to increase one's chance of IPO allotment? </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            To increase your chances of allotment in an upcoming IPO, consider applying for a higher number of shares, as allotment is often based on a proportional basis. Additionally, applying in the early stages of the subscription period may improve your chances.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>How long does it take for IPOs to list on the exchange?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            After the IPO subscription period closes, it typically takes around 6-8 weeks for the shares to be listed on the stock exchange, subject to regulatory approvals and allotment processes.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="10" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>How to check the allotment status?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            You can check the allotment status of your upcoming IPO application on the registrar's website or through your broker's platform, such as Choice. The allotment status will indicate whether your application was successful and the number of shares allotted to you.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="11" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>How to apply for an IPO on Choice?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            To apply for an upcoming IPO on Choice, log in to your account, navigate to the IPO section, select the desired upcoming IPO from the upcoming IPO list, review the details, enter your bid price and quantity, complete the payment process, and submit your application.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="12" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>What are the advantages of applying for an IPO through Choice? </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Applying for an upcoming IPO through Choice offers several advantages including a user-friendly platform, free expert IPO analysis videos on YouTube, detailed IPO reports, a seamless application process, low cost, and access to a wide range of upcoming IPOs across various sectors.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="13" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>How to get updates on upcoming IPOs?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            You can subscribe to Choice's IPO alerts and notifications to receive timely updates on the latest upcoming IPOs in India, including their prospectus, subscription dates, and other relevant details.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="14" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Can I apply for an IPO without a Demat account?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            No, you cannot apply for an upcoming IPO without a Demat account, as the allotted shares will be credited to your Demat account after the listing. Opening a Demat account is a prerequisite for participating in an IPO.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="15" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>What factors should an investor look for when applying to an IPO?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            When applying for an upcoming IPO, investors should consider factors such as the company's business model, financial performance, management team, growth potential, industry outlook, IPO pricing, use of proceeds, risk factors, and market sentiment.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="16" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>How can I track the performance of an IPO after listing? </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            After an upcoming IPO is listed, you can track its performance through various sources, including financial websites, stock market apps, and your broker's platform. Monitor the stock price movements, trading volumes, and any news or updates related to the company.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="17" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>What is the difference between an IPO and a Follow-on Public Offer (FPO)?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            An IPO is the initial public offering of a company's shares, while an FPO is a subsequent issue of shares by a company that is already listed on a stock exchange. FPOs are used to raise additional capital or dilute promoter holdings.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="18" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Can I sell my IPO shares immediately after listing?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Yes, once the shares from the upcoming IPO are listed and credited to your Demat account, you can sell them on the stock exchange through your broker's trading platform, subject to any applicable lock-in periods or regulatory restrictions.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="19" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>What is the role of a Registrar in an IPO process?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            The Registrar is an entity appointed by the company to handle the upcoming IPO application process, including receiving applications, processing payments, managing the allotment process, and facilitating the transfer of shares to successful applicants' Demat accounts after listing.
                                            </Accordion.Body>
                                        </Accordion.Item>


                                        <button className="btn-bg btn-banner justify-content-center d-flex mx-auto mt-6" onClick={() => setview(false)} >&nbsp;View less</button>

                                    </Accordion>


                                    :
                                    <div className="accordion-view-more">
                                        <button className="btn-bg btn-banner  justify-content-center d-flex mx-auto mt-6" onClick={() => setview(!show)}>View more</button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Faq;

