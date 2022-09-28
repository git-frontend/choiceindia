
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Accordion } from "react-bootstrap";

function MFDistributorFaqs() {
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

            <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">अक्सर पूछे जाने वाले प्रश्न </h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>क्या भारत में म्यूचुअल फंड सलाहकार बनने के लिए NISM परीक्षा पास करना जरूरी है?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    म्यूचुअल फंड एडवाइजर बनने के लिए, म्यूचुअल फंड के उत्पादों और बारीकियों के बारे में जानकारी हासिल करनी होगी। इसलिए, आपको AMFI प्रमाणन प्राप्त करना होगा।

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>म्यूचुअल फंड एडवाइजर बनने के लिए करियर की क्या संभावनाएं हैं?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    करियर चुनने के कई फायदे हैं जैसे कि आपका खुद का बॉस होना, असीमित आय अर्जित करना आदि। साथ ही, किसी के पास अपने लक्ष्यों के अनुसार आय अर्जित करने का फ्लेक्सिबिलिटी होता है क्योंकि भुगतान अधिकतम योजनाओं को बेचने के आधार पर होता है।
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header><h4 className='faq-header'>वरिष्ठ नागरिकों के लिए म्यूचुअल फंड वितरक बनने की प्रक्रिया क्या है?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    म्युचुअल फंड वरिष्ठ नागरिकों को आय का स्रोत बनाने का अवसर देता है। वरिष्ठ नागरिक वे व्यक्ति हैं जो सेबी द्वारा इसके परिपत्र संख्या के तहत निर्धारित मानदंडों के तहत अर्हता प्राप्त करते हैं। CIR/MFD/DF/5/2010 दिनांक 24 जून 2010 अर्थात 31 मई 2010 को 50 वर्ष की आयु प्राप्त करने वाला व्यक्ति या 31 मई 2010 को सिक्योरिटीज बाजार में कम से कम 10 वर्ष का अनुभव रखने वाला व्यक्ति।
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header><h4 className='faq-header'>म्यूचुअल फंड वितरक कैसे बनें?</h4> </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    AMFI प्रमाणपत्र रखने वाला कोई भी व्यक्ति म्यूचुअल फंड वितरक बनने के योग्य है। चॉइस इंडिया के साथ म्यूचुअल फंड वितरक बनने के लिए, कोई भी पंजीकरण विवरण भर सकता है। एक बार विवरण सत्यापित और स्वीकृत हो जाने के बाद, एक विशेषज्ञ टीम Customercare@investica.com या +91 8080808875 के माध्यम से उनकी सहायता करेगी।
                                    <br />
                                    नोट: इन्वेस्टिका च्वाइस वेल्थ प्राइवेट लिमिटेड का एक हिस्सा है और एआरएन कोड: 78908 के तहत पंजीकृत है।

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item' id="Faqid">
                                    <Accordion.Header > <h4 className='faq-header'>म्यूचुअल फंड एजेंट पंजीकरण की प्रक्रिया क्या है?
</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>

                                    एक बार, AMFI प्रमाणन पूरा करने के बाद आप<a href="https://choiceindia.com/">www.choiceindia.com</a> पर लॉग इन कर सकते हैं और वहां बताए गए चरणों का पालन करके काम शुरू कर सकते है।

                                    </Accordion.Body>
                                </Accordion.Item>



                            </Accordion>
                            {
                                view ?
                                    <Accordion defaultActiveKey="5" flush className='open-demat-faqs-accordion'>
                                        <Accordion.Item eventKey="5" className='faq-item'>
                                            <Accordion.Header> <h4 className='faq-header'>म्यूचुअल फंड वितरक कितना कमाता है?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            यह पूरी तरह से व्यक्ति पर निर्भर करता है। कमाई का कोई लिमिट नहीं है। जितना अधिक आप बेचते हैं, उतना अधिक आप कमा सकते हैं।

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header> <h4 className='faq-header'>मुझे निवेश का कमीशन कब मिलेगा?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            चॉइस के द्वारा पेआउट मासिक आधार पर जारी किए जाते हैं। एक बार जब आप चॉइस के साथ पंजीकृत हो जाते हैं तो आपको प्रदान की गई CRM पहुंच के साथ आपके ग्राहकों के भुगतान की स्थिति को ट्रैक किया जा सकता है।
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>ARN के लिए आवेदन करने की न्यूनतम और अधिकतम आयु क्या है?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            म्यूचुअल फंड वितरक होने की न्यूनतम आयु 18 वर्ष है, जबकि इसके लिए कोई अधिकतम आयु सीमा नहीं है।

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8" className='faq-item'>
                                            <Accordion.Header><h4 className='faq-header'>ARN कोड क्यों जरूरी है?
</h4> </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            जैसा कि हम रेगुलेटर्स द्वारा निर्धारित नियमों का पालन करते हैं, ARN कोड प्रत्येक वितरक के लिए अनिवार्य है।

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

export default MFDistributorFaqs;

