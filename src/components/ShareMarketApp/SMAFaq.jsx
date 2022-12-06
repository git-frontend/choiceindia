import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
function OTAppFaq() {
const [view, setview] = useState(false);
const [show, setshow] = useState(false);
return (
<div>
   <section className="Dematfaq faq-white">
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <h2 className="title-secnd text-center pb-4">Choice FinX Share Market App Related FAQs</h2>
            </div>
         </div>
         <div className="row">
            <div className="col-md-12">
               <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                  <Accordion.Item eventKey="0" className='faq-item'>
                  <Accordion.Header as="h3" className='faq-header'>  How much time is required to open an account with Choice FinX - Share Market App?
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     To open an account online with Choice FinX it takes 5-7 minutes if you have all the documents handy.
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='faq-item'>
                  <Accordion.Header as="h3" className='faq-header'>What are the charges for opening an account in Choice FinX?
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     There are no charges for opening an account in the stock market app - Choice FinX.
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='faq-item'>
                  <Accordion.Header as="h3" className='faq-header'>What are the documents required to open an account in Choice FinX?
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     You will require the following documents to open an account in the Choice FinX share market app:<br/><br/>
                     PAN Card<br/>
                     <strong>– As per the SEBI Regulations, a PAN Card is mandatory for any investment in capital markets.</strong><br/><br/>
                     Aadhaar Card<br/>
                     <strong>– This is required for a fast and paperless account opening.</strong><br/><br/>
                     Cancelled Cheque<br/>
                     <strong>– With clearly printed name of the Account Holder, Account Number, IFSC Code, and MICR Code.</strong><br/><br/>
                     A Photograph<br/>
                    <strong> – KYC requirement as per the SEBI Regulations.</strong><br/><br/>
                     Signature on White Paper<br/>
                     <strong>– It is a regulatory and operational requirement to cross-reference the signature in case of physically opening an account.</strong><br/><br/>
                     Income Proof<br/>
                    <strong> – If you wish to trade in futures and options of all Equity, Commodity, and Currency; then Income Proof is a mandatory requirement.</strong>
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className='faq-item'>
                  <Accordion.Header as="h3" className='faq-header'>Can anyone open a free trading account with Choice FinX?
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     Any individual of 18 years and above can open a free trading account with Choice FinX. However, the individual must hold the required documents to open an account.
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" className='faq-item'>
                  <Accordion.Header as="h3" className='faq-header'>What are the brokerage charges in Choice FinX - Share Market App?
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     Choice offers the lowest brokerage charges in the industry. Check the <Link to="/brokerage-charges">brokerage charges</Link> on our website.
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5" className='faq-item'>
                  <Accordion.Header as="h3" className='faq-header'>Can I trade in all segments using the Choice FinX App?
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     Yes, you can trade in Equity, Currency, Commodity, and F&amp;O using the Choice FinX app.
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
export default OTAppFaq;