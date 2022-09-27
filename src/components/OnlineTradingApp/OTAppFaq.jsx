import React, { useState, useEffect } from "react";
import { Accordion } from "react-bootstrap";
function OTAppFaq() {
const [view, setview] = useState(false);
const [show, setshow] = useState(false);
   /** scroll id view */

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
<div>
   <section className="Dematfaq faq-white">
      <div className="container">
         <div className="row">
            <div className="col-md-12">
               <h2 className="title-secnd text-center pb-4">Jiffy Trading App Related FAQs</h2>
            </div>
         </div>
         <div className="row">
            <div className="col-md-12">
               <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                  <Accordion.Item eventKey="0" className='faq-item'>
                     <Accordion.Header>
                        <h4 className='faq-header'>  Can I do trading in all segments with the Jiffy Trading App?</h4>
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                        Yes, Jiffy supports trading in all segments i.e. Equity, Derivatives, Commodity and Currency
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='faq-item'>
                     <Accordion.Header>
                        <h4 className='faq-header'>Is the Jiffy Trading app safe for trading?</h4>
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                        We use comprehensive and proven world-class safety measures to ensure optimum security.
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='faq-item'>
                     <Accordion.Header>
                        <h4 className='faq-header'>Can I open a Demat Account from Jiffy Trading App?</h4>
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                        Sure, the entire process takes just 10 minutes and is completely paperless!
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className='faq-item'>
                     <Accordion.Header>
                        <h4 className='faq-header'>Can I Trade in Future &amp; Options Through a Trading App?</h4>
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                        Sure, you can trade in F&amp;0 and we also provide intraday research/calls for Futures &amp; Options.
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" className='faq-item'>
                     <Accordion.Header >
                        <h4 className='faq-header'>How to apply for an IPO in Jiffy Trading App?</h4>
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                        Below are the steps to apply for IPOs via Jiffy,<br/>
                        Go to the IPO Section &#8658; IPO Listing &#8658; Open IPO<br/>
                        Tap IPO you want, and directly click on ‘Subscribe’ to apply or view the IPO details<br/>
                        On the Subscribe Screen/Page, you will be required to enter the number of lots, cut-off price, UPI ID and tap Verify<br/>
                        Once you select ‘Subscribe’. Your bid will be executed<br/>
                        You can check the status of your IPO bid in the IPO Transactions section
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5" className='faq-item' id="Faqid">
                     <Accordion.Header>
                        <h4 className='faq-header'>Is Jiffy Trading App Available in Other Regional Languages?</h4>
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                        Yes, Jiffy has options for Hindi, Gujarati, Marathi and Malayalam as of now.
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
               {
               view ?
               <Accordion defaultActiveKey="" flush className='open-demat-faqs-accordion'>
                  <Accordion.Item eventKey="6" className='faq-item'>
                     <Accordion.Header>
                        <h4 className='faq-header'>Can I get research reports in the Jiffy Trading App?</h4>
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                        Our research team enjoys a 78% consistent success ratio, and provides detailed Fundamental and Technical Research for investments/Trading. We also provide intra-day trade calls.
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="7" className='faq-item'>
                     <Accordion.Header>
                        <h4 className='faq-header'>How can I get Ledger, Cash Deposit, Cash Withdrawal, Profit &amp; Loss statements in Jiffy?</h4>
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                        All of the above reports and more are available in the ‘Reports’ section of Jiffy for the current year. For reports of previous years, you can login to the ‘Back office’ section from Jiffy itself.
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="8" className='faq-item'>
                     <Accordion.Header>
                        <h4 className='faq-header'>Is Jiffy Trading App Available on Android &amp; iOS platform?</h4>
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                        Yes, Jiffy is available on both Android &amp; iOS.
                     </Accordion.Body>
                  </Accordion.Item>
                  <button className="btn-bg btn-banner justify-content-center d-flex mx-auto mt-6" onClick={() => {setview(false);chapterScroll('Faqid')}} >&nbsp;View less</button>
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
export default OTAppFaq;