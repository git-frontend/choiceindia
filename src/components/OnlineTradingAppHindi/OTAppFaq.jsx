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
               <h2 className="title-secnd text-center pb-4">फिनएक्स ट्रेडिंग ऐप संबंधित अक्सर पूछे जाने वाले प्रश्न</h2>
            </div>
         </div>
         <div className="row">
            <div className="col-md-12">
               <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                  <Accordion.Item eventKey="0" className='faq-item'>
                  <Accordion.Header as="h3" className='faq-header'>  क्या मैं फिनएक्स ट्रेडिंग ऐप के साथ सभी सेगमेंट में ट्रेडिंग कर सकता हूं?

                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     हां, फिनएक्स सभी सेगमेंट में ट्रेडिंग का समर्थन करता है जो कि इक्विटी, डेरिवेटिव्स, कमोडिटी और करेंसी है|
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1" className='faq-item'>
                  <Accordion.Header as="h3" className='faq-header'>क्या फिनएक्स ट्रेडिंग ऐप ट्रेडिंग के लिए सुरक्षित है?
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     हम सुरक्षा सुनिश्चित करने के लिए व्यापक और विश्व स्तरीय टेक्नोलॉजी का उपयोग करते हैं|
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='faq-item'>
                  <Accordion.Header as="h3" className='faq-header'>क्या मैं फिनएक्स ट्रेडिंग ऐप से डीमैट खाता खोल सकता हूं?
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     हां, पूरी प्रक्रिया में सिर्फ 10 मिनट लगते हैं और यह पूरी तरह से पेपरलेस है!
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className='faq-item'>
                  <Accordion.Header as="h3" className='faq-header'>क्या मैं ट्रेडिंग ऐप के माध्यम से फ्यूचर और ऑप्शंस में ट्रेड कर सकता हूं?

                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     हाँ, आप F&amp;0 में ट्रेड कर सकते हैं और हम फ्यूचर्स और ऑप्शंस के लिए इंट्राडे रिसर्च/कॉल भी प्रदान करते हैं।
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4" className='faq-item'>
                  <Accordion.Header as="h3" className='faq-header'> फिनएक्स ट्रेडिंग ऐप में आईपीओ के लिए आवेदन कैसे करें?
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     फिनएक्स के माध्यम से आईपीओ के लिए आवेदन करने के चरण नीचे दिए गए हैं-<br/>
                     आईपीओ अनुभाग पर जाएं &#8658; आईपीओ लिस्टिंग &#8658; ओपन आईपीओ<br/>
                     IPO पर टैप करें, और IPO विवरण लागू करने या देखने के लिए सीधे 'सदस्यता लें' पर क्लिक करें|<br/>
                     सब्स्क्राइब स्क्रीन/पेज पर, आपको लॉट की संख्या, कट-ऑफ मूल्य, यूपीआई आईडी दर्ज करनी होगी और सत्यापित करें पर टैप करना होगा।
<br/>
                        एक बार जब आप 'सदस्यता लें' का चयन करें। आपकी बोली क्रियान्वित की जाएगी<br/>
                        आप आईपीओ लेनदेन अनुभाग में अपनी आईपीओ बोली की स्थिति की जांच कर सकते हैं|
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="5" className='faq-item'id="faqid">
                  <Accordion.Header as="h3" className='faq-header'>क्या फिनएक्स ट्रेडिंग ऐप अन्य भाषाओं में उपलब्ध है?
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     हां, फिनएक्स के पास फिलहाल हिंदी, गुजराती, मराठी और मलयालम के विकल्प हैं।
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
               {
               view ?
               <Accordion defaultActiveKey="" flush className='open-demat-faqs-accordion'>
                  <Accordion.Item eventKey="6" className='faq-item'>
                  <Accordion.Header as="h3" className='faq-header'>क्या मुझे जिफ़ी ट्रेडिंग ऐप में शोध रिपोर्ट मिल सकती है?
                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     हमारी शोध टीम को 78% लगातार सफलता अनुपात प्राप्त है, और ऐप निवेश / व्यापार के लिए विस्तृत मौलिक और तकनीकी अनुसंधान प्रदान करता है। हम इंट्रा-डे ट्रेड कॉल भी प्रदान करते हैं।

                     </Accordion.Body>
                  </Accordion.Item>
               
                  <Accordion.Item eventKey="8" className='faq-item'>
                     <Accordion.Header as="h3" className='faq-header'>क्या फिनएक्स ट्रेडिंग ऐप एंड्रॉइड और आईओएस प्लेटफॉर्म पर उपलब्ध है?

                     </Accordion.Header>
                     <Accordion.Body className='open-demat-faq-body'>
                     हां, फिनएक्स एंड्रॉयड और आईओएस दोनों पर उपलब्ध है।
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