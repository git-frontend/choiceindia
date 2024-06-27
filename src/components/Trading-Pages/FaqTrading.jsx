import React from 'react'
import { Accordion } from "react-bootstrap";

function FaqTrading({data}) {
  return (
    <>
          <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">FAQ's</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        {
                            data.map((response, index) =>{
                                return(
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion' key={index}>
                                <Accordion.Item eventKey="0" className='faq-item' >
                                    <Accordion.Header as="h3" className='faq-header'>How much time does it take to complete the registration of a commodity trading account?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    It takes about 48 hours for a commodity account in the online process and for the offline process it may take 4 days to 10 days.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>What are the documents required to open a commodity trading account?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    To open a commodity trading account, you need to submit the following documents:
                                        <ul>
                                            <li>Proof of Identity (PAN Card, Aadhar card, ID card, etc)</li>
                                            <li>Proof of Address (Aadhar card, utility bills, etc)</li>
                                            <li>Photographs</li>
                                            <li>Proof of Income (ITR slip, Salary Slip, Bank Statement)</li>
                                            <li>Bank details</li>
                                            <li>Signature</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Is it necessary to provide power of Attorney (POA) while opening a commodity trading account?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Yes. The Power of Attorney is important for executing trades in a commodity account. Hence, one has to provide the same as per the regulators.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>Are any charges applicable while opening a commodity trading account with Choice? </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    No. There are no account opening charges with Choice. However, one should take into account the brokerage charges associated. 
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                <Accordion.Header as="h3" className='faq-header'>Can I use the same commodity trading account for all segments? </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    Yes. Once you open an account with Choice, you have the authority to trade with equity, commodity, currency and derivatives. The procedure for all of them is constant.
                                    </Accordion.Body>
                                </Accordion.Item>
                                        <Accordion.Item eventKey="5" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'> How long will it take for the commodity trading account to be activated?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            A commodity trading account takes 4 hours to be activated through an online process after providing the documents.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Are NRIs able to open a commodity trading account in India?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Yes. An NRI can start a trading account with Choice with the same procedure of any citizen residing in India.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>Can I trade in multiple types of commodities through a commodity account?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            Yes. With choice, you have the privilege to trade in multiple types of commodities.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        </Accordion>
                                    )
                            })
                        }   
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default FaqTrading