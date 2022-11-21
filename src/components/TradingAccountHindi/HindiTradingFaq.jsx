
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function HindiTradingFaq() {
    const [view, setview] = useState(false);
    const [show, setshow] = useState(false);
    return (
        <div>

            <section className="Dematfaq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">ट्रेडिंग अकाउंट पर अक्सर पूछे जाने वाले प्रश्न</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'> ऑनलाइन ट्रेडिंग खाता खोलने के लिए कितना समय लगता है?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        ऑनलाइन अकाउंट खोलना काफी सुविधाजनक हो गया है। यदि आपके पास सभी आवश्यक दस्तावेज उपलब्ध हैं, और केवाईसी हो गया है, तो खाता 15 मिनट में खोला जा सकता है। अगर केवाईसी नहीं किया गया तो इसमें कुछ समय लग सकता है |
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header> <h4 className='faq-header'>क्या ऑनलाइन ट्रेडिंग अकाउंट खोलते समय स्टॉक ब्रोकरों द्वारा कोई शुल्क लगाया जाता है?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        अन्य ब्रोकरों के बारे में कहना मुश्किल है, लेकिन चॉइस के साथ ऑनलाइन ट्रेडिंग अकाउंट खोलना बिल्कुल मुफ्त है। चॉइस ट्रेडिंग अकाउंट खोलने के लिए कोई शुल्क नहीं लेता है।
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header><h4 className='faq-header'>चॉइस ट्रेडिंग अकाउंट के लिए एएमसी शुल्क क्या हैं</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        प्रथम वर्ष एएमसी निःशुल्क है, अगले वर्ष से जब भी आप चाहें, चॉइस आपके ट्रेडिंग अकाउंट को उपयोग के लिए तैयार रखने और बनाए रखने के लिए न्यूनतम शुल्क लेता है।<br />
                                        प्रथम वर्ष की एएमसी नि:शुल्क है और फिर इसमें से चुनने के लिए *3 योजनाएं हैं:<br />
                                        <ul>
                                            <li>
                                                रु.200/- + जीएसटी वार्षिक योजना
                                            </li>
                                            <li>
                                                रु.1500/- + जीएसटी - लाइफटाइम एएमसी कवर
                                            </li>
                                            <li>
                                            रु.3000/- पूर्ण वापसी योग्य एएमसी (चॉइस के साथ खाता बंद करने पर पूरी राशि वापस कर दी जाएगी)
                                            </li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header><h4 className='faq-header'>ऑनलाइन ट्रेडिंग अकाउंट खोलने के लिए किन दस्तावेजों की आवश्यकता होती है?</h4> </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        ऑनलाइन ट्रेडिंग अकाउंट खोलने के लिए आवश्यक दस्तावेज नीचे दिए गए हैं, जब आप ऑनलाइन ट्रेडिंग खाता खोलने का प्रयास करते हैं तो उन्हें संभाल कर रखना आवश्यक है।<br />
                                        <ul>
                                            <li>निवास प्रमाण पत्र</li>
                                            <li>पैन कार्ड</li>
                                            <li>रद्द चेक</li>
                                            <li>फोटो</li>
                                            <li>श्वेत पत्र पर हस्ताक्षर</li>
                                            <li>आय प्रमाण</li>
                                        </ul>
                                        <br />
                                        <strong>Note</strong> ये अलग-अलग दस्तावेज होने चाहिए और अपलोड करने से पहले उन्हें स्व-सत्यापित किया जाना चाहिए।
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                    <Accordion.Header > <h4 className='faq-header'> क्या ट्रेडिंग खाता खोलते समय पावर ऑफ अटॉर्नी (पीओए) प्रदान करना आवश्यक है?</h4></Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        हां, अपने ब्रोकर को पावर ऑफ अटॉर्नी प्रदान करना आवश्यक है। यह खाता खोलने की प्रक्रिया का हिस्सा है और इसे सीधे साइट से डाउनलोड किया जा सकता है। पीओए एक महत्वपूर्ण दस्तावेज है इसलिए इसे भरना होगा और सत्यापित हार्ड कॉपी को चॉइस के मुख्यालय को मेल करना होगा। नीचे पता है,<br />

                                        कूरियर पता: चॉइस इंटरनेशनल लिमिटेड,<br />
                                        सुनील पटोदिया टॉवर, जे बी नगर,<br />
                                        अंधेरी (पूर्व), मुंबई 400099।, महाराष्ट्र<br />
                                    </Accordion.Body>
                                </Accordion.Item>


                          
                                   
                                        <Accordion.Item eventKey="5" className='faq-item'>
                                            <Accordion.Header> <h4 className='faq-header'>क्या ऑनलाइन ट्रेडिंग अकाउंट खोलना सुरक्षित है?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            जब पैसे की बात आती है तो सुरक्षा के बारे में चिंतित होना ठीक है, लेकिन बाजार को नियंत्रित करने वाले नियामकों के पास ट्रेडिंग अकाउंट को सुरक्षित बनाए रखने और संचालित करने के बारे में बहुत सख्त दिशानिर्देश हैं। नियोजित तकनीक सुरक्षित है और इस तरह से विकसित की गई है कि ट्रेडिंग खातों को हैक करना संभव नहीं है ऑनलाइन ट्रेडिंग खाता खोलना पूरी तरह से सुरक्षित है।
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header> <h4 className='faq-header'>मैं अपने ट्रेडिंग खाते में कितना पैसा रख सकता हूं?</h4></Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            आपके खाते में जोड़ी जा सकने वाली अधिकतम राशि की सीमाएँ हैं। ट्रेडिंग खातों में स्थानांतरण के संबंध में आपको अपने ब्रोकर से संपर्क करना होगा।
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

export default HindiTradingFaq;

