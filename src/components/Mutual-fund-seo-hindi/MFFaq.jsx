
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
                            <h2 className="title-first pb-4">अधिकतर पूछे जाने वाले सवाल</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header> <h3 className='faq-header'>म्यूचुअल फंड में निवेश शुरू करने में कितना समय लगता है?</h3></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    खाता खोलने की प्रक्रिया को पूरा करने में 5 मिनट का समय लगता है और एक बार प्रक्रिया पूरी करने के बाद आप म्यूचुअल फंड में निवेश शुरू कर सकते हैं।

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header> <h3 className='faq-header'>म्यूचुअल फंड निवेश कैसे काम करता है?</h3></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    एक म्यूचुअल फंड उन निवेशकों से निवेश आकर्षित करता है जिन्होंने निवेश लक्ष्यों को साझा किया है। उत्पन्न धन का उपयोग म्यूचुअल फंड निवेश प्रबंधकों द्वारा प्रतिभूतियों, बांडों और शेयरों को खरीदने के लिए किया जाता है। जोखिम विविधीकरण है क्योंकि पैसा एक साथ कई कंपनियों में निवेश किया जाता है।
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header> <h3 className='faq-header'>मुझे म्यूचुअल फंड में निवेश कब शुरू करना चाहिए?</h3></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    म्युचुअल फंड में निवेश करने का सबसे अच्छा समय जितनी जल्दी हो सके निवेश करना है। जब आप समय के साथ निवेश करते हैं और नियमित योगदान करते हैं, तो आप चक्रवृद्धि ब्याज के कारण अपने लक्ष्यों को पूरा करने के लिए बचाने के लिए आवश्यक धनराशि को भी कम कर सकते हैं।

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header> <h3 className='faq-header'>क्या म्यूचुअल फंड में निवेश करने के लिए किसी बैंक में खाते की आवश्यकता होती है?</h3></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    हां, म्यूचुअल फंड में निवेश करने के लिए आपके पास एक बैंक खाता होना चाहिए। नियम सेबी म्यूचुअल फंड विनियमों के अनुसार है। आपको म्युचुअल फंड के लिए अपने आवेदन में बैंक विवरण प्रदान करने की आवश्यकता होगी।

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header> <h3 className='faq-header'>लंबी अवधि में निवेशित रहने का क्या फायदा है?</h3></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    लंबी अवधि में निवेशित रहने का लाभ यह है कि आप बाजार के उतार-चढ़ाव से बाहर निकलने में सक्षम होंगे। आप उन कीमतों पर खरीद और बेच सकते हैं जो आपके लिए अधिक फायदेमंद हैं। चक्रवृद्धि प्रभाव आपको समय के साथ अपने धन को बढ़ाने में भी मदद करता है।

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='faq-item'>
                                    <Accordion.Header> <h3 className='faq-header'>मैं म्यूचुअल फंड में अपना रिटर्न कैसे प्राप्त करूं?</h3></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    म्यूचुअल फंड पर रिटर्न की गणना आपके शुरुआती निवेश की तुलना में आपके निवेश के सराहना मूल्य के आधार पर की जाती है। नेट एसेट वैल्यू म्यूचुअल फंड निवेश पर रिटर्न की गणना करती है।

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="6" className='faq-item'>
                                    <Accordion.Header> <h3 className='faq-header'>क्या म्यूचुअल फंड में निवेश के लिए कोई शुल्क लागू है?</h3></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    म्यूचुअल फंड आपकी निवेश अवधि के आधार पर आपसे 0.5 से 3% के बीच शुल्क ले सकता है। यदि आप निर्दिष्ट अवधि के बाद भी अपने निवेश को रोकना जारी रखते हैं, तो कोई एक्जिट लोड शुल्क नहीं लगेगा।
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="7" className='faq-item'>
                                    <Accordion.Header> <h3 className='faq-header'>म्यूचुअल फंड में यूनिट क्या हैं?</h3></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    एक यूनिट म्यूचुअल फंड स्कीम में आपकी होल्डिंग का प्रतिनिधित्व करती है। आप उन्हें शेयरों के रूप में भी संदर्भित कर सकते हैं। म्यूचुअल फंड कंपनी आपके कुल निवेश के आधार पर यूनिट जारी करेगी।
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="8" className='faq-item'>
                                    <Accordion.Header> <h3 className='faq-header'>किसी योजना का शुद्ध संपत्ति मूल्य (NAV) क्या है?</h3></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    म्यूचुअल फंड स्कीम का प्रदर्शन नेट एसेट वैल्यू (एनएवी) से पता चलता है। यह कुछ और नहीं बल्कि योजना का मौजूदा बाजार मूल्य है।


                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="9" className='faq-item'>
                                    <Accordion.Header> <h3 className='faq-header'>म्यूचुअल फंड योजनाओं पर व्यय अनुपात क्या है?</h3></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    म्युचुअल फंड खर्चों के लिए वार्षिक रखरखाव शुल्क के रूप में व्यय अनुपात का उपयोग करते हैं। प्रबंधन शुल्क के अलावा, इसमें परिचालन लागत, विज्ञापन लागत और आवंटन शुल्क भी शामिल हैं। म्यूचुअल फंड का आकार व्यय अनुपात मूल्य निर्धारित करता है।

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="10" className='faq-item'>
                                    <Accordion.Header> <h3 className='faq-header'>भारत में म्यूचुअल फंड निवेश पर क्या कर है?</h3></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    तीन साल के भीतर अल्पकालिक पूंजीगत लाभ निवेशक की लागू कर दर से वसूला जाता है। लॉन्ग टर्म कैपिटल गेन्स में इंडेक्सेशन के साथ 20% टैक्स स्कीम है।
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="11" className='faq-item'>
                                    <Accordion.Header> <h3 className='faq-header'>म्यूचुअल फंड निवेश को कैसे भुनाएं?</h3></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    आपको अपने म्यूचुअल फंड सेवा प्रदाता के पोर्टल पर लॉग इन करना होगा। वांछित म्यूचुअल फंड योजना पर जाएं और लेनदेन अनुभाग की जांच करें। फिर आप प्रासंगिक विवरण प्रदान करके अपनी इच्छित इकाइयों की संख्या को भुना सकते हैं।


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

