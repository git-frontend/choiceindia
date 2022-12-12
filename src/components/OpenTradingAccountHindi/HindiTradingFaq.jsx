
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function HindiTradingFaq() {
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
                            <h2 className="title-first text-center pb-4" >डीमैट अकाउंट पर अक्सर पूछे जाने वाले प्रश्न</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'  >
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'> डीमैट खाते को सक्रिय होने में कितना समय लगेगा?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        दस्तावेज़ जमा करने के 4 घंटे के भीतर आपका डीमैट अकाउंट सक्रिय हो जाएगा। यदि दस्तावेज़ीकरण में कोई कमी है, तो चॉइस की सहायता टीम आपसे संपर्क करेगी। एक बार आपका खाता सक्रिय हो जाने पर आपको चॉइस की ओर से एक ईमेल प्राप्त होगा जिसमें आपको इसके बारे में सूचित किया जाएगा।
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>डीमैट खाता खोलने के लिए किन दस्तावेजों की आवश्यकता होती है?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        चॉइस के साथ डीमैट खाता खोलने के लिए निम्नलिखित दस्तावेजों की आवश्यकता होगी:
                                        <ul>
                                            <li>पैन कार्ड</li>
                                            <li>रद्द किया गया चेक (जो MICR कोड को कैप्चर करता है)</li>
                                            <li>पासपोर्ट के आकार की तस्वीर</li>
                                            <li>आधार कार्ड</li>
                                            <li>आय प्रमाण</li>
                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>पावर ऑफ अटॉर्नी (पीओए) क्या है और इसकी आवश्यकता क्यों है?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        पावर ऑफ अटॉर्नी एक दस्तावेज है जो हमें आपके शेयरों को बेचने पर आपके डीमैट खाते से डेबिट करने का अधिकार देता है। हालांकि, जब तक आप पीओए जमा नहीं करते, तब तक आप अपनी होल्डिंग बेचने के लिए ईडीआईएस सुविधा का लाभ उठा सकते हैं। इसके लिए आपको किसी भी होल्डिंग के विक्रय लेनदेन को करने से पहले प्रतिदिन एक बार अपनी होल्डिंग्स को अधिकृत करने की आवश्यकता होगी। हम अनुशंसा करते हैं कि आप हमें अपने पीओए की एक हस्ताक्षरित कॉपी भेजें चूंकि यह आपको हर समय ऑनलाइन अधिकृत करने की आवश्यकता के बिना अपने शेयरों को बेचने अनुमति देता है | पीओए की एक कॉपी आपको आपके पंजीकृत ईमेल आईडी पर ईमेल की जाती है, जिस पर आपको हस्ताक्षर करने और हमें कोरियर करने की आवश्यकता होती है। आप हमें हस्ताक्षरित पीओए हमारी वेबसाइट पर दिए गए हमारे मुख्यालय के पते पर भेज सकते हैं |<a href="https://choiceindia.com"> https://choiceindia.com</a>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>मुझे पावर ऑफ अटॉर्नी कहां कुरियर करना चाहिए? </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        आप पीओए की हस्ताक्षरित कॉपी को नीचे दिए गए हमारे प्रधान कार्यालय के पते पर कुरियर से भेज सकते हैं।<br />
                                        चॉइस इंटरनेशनल लिमिटेड,<br />
                                        सुनील पटोदिया टावर,<br />
                                        जे बी नगर, अंधेरी (पूर्व), मुंबई 400099।
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'  id="Faqid">
                                <Accordion.Header as="h3" className='faq-header'>मैं अपने डीमैट को दूसरे ब्रोकर से चॉइस में कैसे बदलूं?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        आपको हमें अपने पहले के डीपी की सीएमएल (क्लाइंट मास्टर लिस्ट) कि कॉपी प्रदान करनी होगी और हमारे साथ एक नया डीमैट खाता खोलना होगा।
                                    </Accordion.Body>
                                </Accordion.Item>


                           
                                   
                                        <Accordion.Item eventKey="5" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>क्या मैं अपने ट्रेडिंग खाते में कई डीमैट खातों को मैप कर सकता हूं?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                हां, आप अलग-अलग डीपी के साथ भी कई डीमैट खातों को अपने ट्रेडिंग खाते से लिंक कर सकते हैं, लेकिन वे सभी आपके नाम पर होने चाहिए। हालांकि, ध्यान देने वाली एक महत्वपूर्ण बात यह है कि सभी लिंक किए गए डीमैट खातों से आप पे इन/प्लेज आदि के लिए शेयर दे सकते हैं; लेकिन ट्रेडिंग खाते से भुगतान केवल प्राथमिक डीमैट खाते में जमा किया जाएगा।
                                            </Accordion.Body>
                                        </Accordion.Item>

                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>मैं दूसरे डीमैट खाते से शेयर अपने चॉइस डीमैट खाते में कैसे भेज सकता हूं?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                                आपको अपने पिछले डीपी को ऑफ मार्केट डिलीवरी इंस्ट्रक्शन स्लिप (डीआईएस) प्रदान करने की आवश्यकता होगी, जिसमें चॉइस इक्विटी ब्रोकिंग प्राइवेट लिमिटेड में आपके द्वारा रखे गए डीमैट खाते के लक्ष्य डीपी आईडी का उल्लेख होगा।
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>क्या शेयर बाजार में निवेश के लिए डीमैट अकाउंट खोलना आवश्यक है?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                              
                                                यदि आप इक्विटी में निवेश करने जा रहे हैं तो डीमैट अकाउंट अनिवार्य है। डीमैट खाते आपके शेयरों को इलेक्ट्रॉनिक रूप में रखते हैं। यदि आप केवल वायदा और विकल्प में निवेश करने जा रहे हैं तो डीमैट अकाउंट की आवश्यकता नहीं है।
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>क्या मैं चॉइस के साथ अपने पिछले डीमैट खाते का उपयोग कर सकता हूं?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            2 विकल्प हैं, या तो आप चॉइस के साथ एक नया डीमैट अकाउंट खोलें और पुराने डीमैट से सभी शेयरों को स्थानांतरित करें, या पुराने डीमैट को नए में मर्ज करें।<br/>
                                            आप शेयरों के मैन्युअल या ऑनलाइन हस्तांतरण का विकल्प चुन सकते हैं।<br /><br />
                                            <strong>मैनुअल ट्रांसफर</strong>
                                            <ol>
                                                <li>पता लगाएं कि कौनसा डीपी (डिपॉजिटरी पार्टिसिपेंट) शेयर धारण कर रहा है, भारत में 2 डिपॉजिटरी हैं, नेशनल सिक्योरिटीज डिपॉजिटरी लिमिटेड (एनएसडीएल) और सेंट्रल डिपॉजिटरी सर्विसेज लिमिटेड (सीडीएसएल) |</li>
                                                <li>यदि आपका नया डीमैट उसी डीपी के पास है तो यह इंटर-डिपॉजिटरी ट्रांसफर होगा, और यदि यह अलग है; यह एक इंट्रा-डिपॉजिटरी ट्रांसफर होगा |</li>
                                                <li>इसके बाद, अपने पुराने डीमैट अकाउंट की डीपी द्वारा प्रदान की गई डिलीवरी इंस्ट्रक्शन स्लिप (डीआईएस) भरें। 'मोड ऑफ ट्रांसफर' फील्ड में, कृपया चुनें कि ट्रांसफर इंटर-डिपॉजिटरी है या इंट्रा-डिपॉजिटरी। यह महत्वपूर्ण है |</li>
                                                <li>सभी आवश्यक विवरण भरें जैसे शेयरों के नाम, मात्रा और उनके आईएसआईएन नंबर</li>
                                                <li>नए खाते की 16-वर्ण आईडी दर्ज करें</li>
                                                <li>पुराने ब्रोकर को हस्ताक्षरित डीआईएस जमा करें और पावती पर्ची लें</li>
                                                <li>शेयरों को 3-5 कार्य दिवसों में नए खाते में स्थानांतरित कर दिया जाएगा</li>

                                            </ol><br/>
                                            <strong>ऑनलाइन स्थानांतरण</strong><br /><br />
                                            यह विकल्प बहुत आसान है, बस सीडीएसएल वेबसाइट पर जाएं और सभी आवश्यक विवरणों के साथ पंजीकरण करें आपको एक फॉर्म भरना होगा और 'प्रिंट फॉर्म' विकल्प का उपयोग करना होगा; यह सत्यापन प्रक्रिया शुरू करने के लिए सीडीएसएल को सूचित करता है |<br/><br/>
                                           सत्यापन पूरा होने के बाद, आपके खाते में लॉगिन विवरण आपकी ईमेल आईडी पर भेजा जाएगा सीडीएसएल वेबसाइट से अपने खाते में लॉगिन करें और शेयरों को नए खाते में स्थानांतरित करना शुरू करें
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>क्या मैं डीमैट खाते में पैसा रख सकता हूँ?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            बिल्कुल, आप डीमैट/ट्रेडिंग खाते में पैसा रख सकते हैं। हालांकि, ट्रेडिंग/निवेश के लिए केवल उतनी ही राशि रखने की सलाह दी जाती है जितनी की आवश्यकता होगी।
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="10" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>क्या ऑनलाइन डीमैट अकाउंट खोलना सुरक्षित है?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                              
                                            डीमैट अकाउंट ऑनलाइन खोलना बिल्कुल सुरक्षित है लेकिन इसके लिए सही ब्रोकर चुनना आवश्यक है।
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="11" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>क्या मैं स्टॉक, मुद्रा, डेरिवेटिव और कमोडिटी ट्रेडिंग के लिए उसी डीमैट या ट्रेडिंग खाते का उपयोग कर सकता हूं?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            हां, आप डीमैट खाते का उपयोग किसी भी परिसंपत्ति वर्ग में निवेश के लिए कर सकते हैं।
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="12" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>डीमैट खाते को सक्रिय होने में कितना समय लगेगा?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            यदि दस्तावेज़ क्रम में हैं, तो डीमैट खाता 24-48 कार्य घंटों में सक्रिय हो जाएगा।
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="13" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>पेपरलेस डीमैट अकाउंट क्या है?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            डीमैट अकाउंट खोलने के इस विकल्प में किसी भी दस्तावेज को भौतिक रूप से जमा करने की आवश्यकता नहीं है। सभी दस्तावेज़ ऑनलाइन जमा किए जाते हैं और इन्हें पूरा करने में केवल 10 मिनट लगते हैं!
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

