
import React, { useState, useEffect } from "react";

import { Accordion } from "react-bootstrap";

function DematFaq() {
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
                            <h2 className="title-first text-center pb-4">डिमॅट खाते ओपन करताना वारंवार विचारले जाणारे प्रश्न</h2>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                <Accordion.Item eventKey="0" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>डिमॅट खाते सक्रिय होण्यासाठी किती वेळ लागेल?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        तुम्ही कागदपत्रे सादर केल्यानंतर चार तासांच्या आत तुमचे डिमॅट खाते सक्रिय होते. तुम्ही सादर केलेल्या कागदपत्रांमध्ये काही तफावत किंवा त्रूटी आढळल्यास आमचे चॉईस ब्रोकिंगचे प्रतिनिधी तुमच्याशी संपर्क साधून त्याची पूर्तता करेल. तसेच, तुमचे खाते सक्रिय झाल्यानंतर, तुम्हाला चॉईस ब्रोकिंगकडून एक ईमेल येईल, त्यामध्ये तुम्हाला खाते सक्रिय झाल्याबद्दलची माहिती दिली जाईल.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="1" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>डिमॅट खाते उघडण्यासाठी कोणती कागदपत्रे आवश्यक आहेत?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        चॉईस ब्रोकिंगसह तुमचे डिमॅट खाते उघडण्यासाठी खालील कागदपत्रांची आवश्यकता असेल;
                                        <ul>
                                            <li>पॅन कार्ड</li>
                                            <li>कॅन्सल चेक (MIRC कोडसाठी)</li>
                                            <li>पासपोर्ट साईज फोटो</li>
                                            <li>आधार कार्ड</li>
                                            <li>उत्पन्नाचा दाखला</li>

                                        </ul>
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'> पॉवर ऑफ अँटर्नी म्हणजे काय आणि त्याची गरज का आहे?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                        पॉवर ऑफ अँटर्नी हा एक असा दस्ताऐवज आहे, ज्याद्वारे तुम्हाला तुमच्या शेअर्सची विक्री झाल्यावर डिमॅट खात्यातून डेबिट करण्याचे अधिकार दिले जातात. त्यामुळे जोपर्यंत तुम्ही तुमची पॉवर ऑफ अँटर्नी सादर करत नाही, तोपर्यंत तुम्हाला तुमची होल्डिंग विक्री करण्यासाठी eDIS सुविधेचा लाभ घेता येतो. यासाठी कोणतेही होल्डिंग्सची विक्री करण्यापूर्वी तुम्ही तुमचे होल्डिंग अधिकृत करणे गरजेचे असते. म्हणजेच एकप्रकारे तुमच्या POA ची स्वाक्षरी केलेली प्रत ही तुम्हाला तुमचे होल्डिंग कोणत्याही अडचणींशिवाय विकण्यास सक्षम करते.
                                        <br /><br />
                                        प्POA साठी त्याची एक प्रत तुम्हाला तुमच्या ईमेल आयडीवर पाठवली जाईल. त्यावर तुम्ही तुमची स्वाक्षरी करुन आम्हाला कुरिअर करणे गरजेचे आहे. तुम्ही स्वाक्षरी केलेली POA ची प्रत आमच्या संकेतस्थळावर -https://choiceindia.com/ नमूद केलेल्या मुख्य कार्यालयाच्या पत्त्यावर पाठवावी.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3" className='faq-item'>
                                    <Accordion.Header as="h3" className='faq-header'>मी पॉवर ऑफ अँटर्नी कोठे कुरिअर करावी? </Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    मी पॉवर ऑफ अँटर्नी कोठे कुरिअर करावी?<br />
                                    चॉईस इंटरनॅशनल लिमिटेड,<br />
                                    सुनील पतोडिया टॉवर,<br />
                                    जे.बी. नगर, अंधेरी (पूर्व) मुंबई ४०००९९
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="4" className='faq-item'>
                                <Accordion.Header as="h3" className='faq-header'>चॉईस ब्रोकिंगसह डिमॅट खाते उघडण्यासाठी काही शुल्क आकारले जाते का?</Accordion.Header>
                                    <Accordion.Body className='open-demat-faq-body'>
                                    तुम्ही चॉईस ब्रोकिंगसह किमान शून्य शुल्कातही डिमॅट खाते सुरु करु शकता.
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="5" className='faq-item' id="Faqid">
                                            <Accordion.Header as="h3" className='faq-header'> डिमॅट खाते न उघडता मी ऑनलाईन ट्रेडिंग खाते कसे ओपन करु शकतो?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            एनएसई/ बीएसई सेक्यूरिटीजसाठी तुमच्या ट्रेडिंग खात्यासह डिमॅट खाते असणे आवश्यक असते. चलन (Currency) आणि कमोडिटीसाठी डिमॅट खात्याची आवश्यकता नसते. त्यामुळे जर तुमच्या ट्रेडिंगच्या गरजा मर्यादित असतील, तर तुम्हाला ट्रेडिंग खाते निवडणे सोईचे राहिल. तसेच ब्रोकरसोबतच्या कागदपत्रांमध्ये त्याचा स्पष्ट उल्लेख करणे अनिवार्य असते. यासंबंधी आधिक माहितीसाठी care@choiceindia.com ला एकदा आवश्य भेट द्या. किंवा आमच्या ग्राहक सेवा टीमशी संपर्क साधू शकता. आमचे प्रतिनिधी तुम्हाला योग्य ते मार्गदर्शन करुन तुमच्या सर्व शंकांचे निरसन करतील.
                                            </Accordion.Body>
                                        </Accordion.Item>


                            </Accordion>
                            {
                                view ?
                                    <Accordion defaultActiveKey="" flush className='open-demat-faqs-accordion'>
                                      
                                        <Accordion.Item eventKey="6" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>मी माझे जुने डिमॅट दुसऱ्या ब्रोकरकडून चॉईस ब्रोकिंगमध्ये कसे बदलू शकतो?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            तुम्हाला तुमच्या जुन्या डीपीची CML (क्लायंट मास्टर लिस्ट) देऊन, आमच्याकडे नवीन डिमॅट खाते ओपन करणे आवश्यक आहे.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'> मी माझ्या ट्रेडिंग खात्यावर एकपेक्षा जास्त डिमॅट खाती मॅप करु शकतो का?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            हो. तुम्ही तुमच्या ट्रेडिंग खात्याशी एकपेक्षा जास्त डिमॅट खाती लिंक करु शकता. तेही वेगवेगळ्या डीपीसह. पण ती सर्व खाती तुमच्या नावावर असणे आवश्यक आहे. पण महत्त्वाची गोष्ट म्हणजे, सर्व लिंक केलेल्या डिमॅट खात्यांमधून तुम्ही पे इन किंवा प्लेज आदींसाठी शेअर देऊ शकता. पण ट्रेडिंग खात्यातील पेआउट केवळ
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>मी दुसऱ्या एखाद्या डिमॅट खात्यातून माझ्या चॉईस ब्रोकिंगच्या डिमॅट खात्यात शेअर्स कसे हस्तांतरित करु शकतो? </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            चॉईस इक्विटी ब्रोकिंग प्रायव्हेट लिमिटेडमध्ये तुम्ही घेत असलेल्या डिमॅट खात्याच्या टार्गेट डीपी आयडीचा उल्लेख करावा लागेल. त्यानंतर तुम्हाला तुमच्या आधीच्या डीपीला ऑफ मार्केट डिलिव्हरी इन्स्ट्रक्शन स्पिल (DIS) प्रदान करणे आवश्यक असते.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'> शेअर बाजारातील गुंतवणुकीसाठी डिमॅट खाते उघडणे आवश्यक आहे का?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            जर तुम्ही इक्विटीमध्ये ट्रेडिंग/ गुंतवणूक करणार असाल, तर डिमॅट खाते अनिवार्य आहे. डिमॅट खात्यांमध्ये तुमचे शेअर इलेक्ट्रॉनिक स्वरुपात सुरक्षित ठेवले जातात. जर तुम्ही फक्त फ्युचर्स आणि ऑप्शन्समध्ये ट्रेडिंग करणा असाल, तर डिमॅटची आवश्यकता नाही.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="10" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>मी माझे जुने डिमॅट खाते चॉईससह वापरू शकतो का?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            यासाठी दोन पर्याय आहेत. एकतर तुम्ही चॉईस ब्रोकिंगमध्ये नवीन डिमॅट खाते ओपन करा. आणि जुन्या डिमॅटमधून सर्व शेअर हस्तांतरित करा किंवा ते चॉईसच्या खात्यात विलीन करा. यासाठी तुम्ही शेअर हस्तांतरणासाठी मॅन्यूअल किंवा ऑनलाईन पर्यांयाची निवड करु शकता.<br />
                                                <strong>मॅन्यूअल केल्यास</strong>
                                                <ul>
                                                    <li>कोणता डीपी (डिपॉझिटरी पार्टिसिपंट) समभाग घेत आहे. ते तपासा. कारण आपल्याकडे दोनप्रकारचे डिपॉझिटर्स आहेत. पहिले म्हणजे नॅशनल सेक्युरिटीज डिपॉझिटरी लिमिटेड (NSDL) आणि दुसरे म्हणजे सेंट्रल डिपॉझिटरी सर्व्हिसेस लिमिटेड (CDSL)</li>
                                                    <li>जर तुमचे नवीन डिमॅट त्याचप्रकारच्या डीपीकडे असेल, तर ते इंटर डिपॉझिटरी असेल. जर ते दोन्हीही वेगवेगळे असतील, तर इंट्रा डिपॉझिटरी हस्तांतरण असेल.</li>
                                                    <li>तुमच्या जुन्या खात्याच्या DP द्वारे प्रदान केलेली डिलिव्हरी इंस्ट्रक्शन स्लिप (DIS) भरा. त्यानंतर मोड ऑफ ट्रान्सफरमध्ये जाऊन हस्तांतरण इंटर डिपॉझिटरी कि इंट्रा डिपॉझिटरी आहे हे तपासून तो पर्याय निवडा.</li>
                                                    <li>समभागांची नावे, प्रमाण आणि त्यांचे ISIN क्रमांक आदी आवश्यक तपशील भरा.</li>
                                                    <li>नवीन खात्याचा १६ डिजीट आयडी भरा.</li>
                                                    <li> जुन्या ब्रोकरकडे स्वाक्षरी केलेली डीआयएस सादर करुन पोचपावती घ्या.</li>
                                                    <li>तीन-पाच दिवसांत शेअर्स नवीन खात्यात हस्तांतरित होतील.</li>
                                                </ul>
                                                <strong>ऑनलाईन ट्रान्सफर</strong><br/> <br />
                                                हा अतिशय सोपा पर्याय आहे. केवळ CDSL च्या वेबसाईटला भेट द्या, आणि आवश्यक सर्व तपशीलांसह नोंदणी करा. त्यासाठी तुम्हाला दिलेला एक फॉर्म भरावा लागेल. आणि प्रिंट फॉर्म हा पर्याय निवडा. हे CDSL ला हस्तांतरणाची प्रक्रिया सुरु करण्यासाठी सुचित करते. यासाठीची पडताळणी पूर्ण झाल्यानंतर तुमच्या खात्याचा लॉगइन तपशील तुमच्या ईमेल आयडीवर पाठवला जाईल. त्यानंतर CDSL वेबसाईटवरुन तुमच्या खात्यात लॉगइन करा. आणि नवीन खात्यात शेअर हस्तांतरित करण्यास सुरुवात करा.
                                                
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="11" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>मी डिमॅट खात्यात पैसे ठेवू शकतो का?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            नक्कीच, तुम्ही तुमच्या डिमॅट/ ट्रेडिंग खात्यात आवश्य पैसे ठेवू शकता. पण आम्ही तुम्हाला ट्रेडिंग/ गुंतवणुकीसाठी आवश्यक तेवढीच रक्कम तुमच्या डिमॅट खात्यात ठेवण्याचा सल्ला देऊ.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="12" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>ऑनलाईन डिमॅट खाते उघडणे सुरक्षित आहे का? </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            ऑनलाईन डिमॅट खाते ओपन करणे पूर्णपणे सुरक्षित आहे. मात्र यासाठी योग्य ब्रोकर निवडणे आवश्यक आहे.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="13" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>ट्रेडिंग खात्यातून पैसे जमा करणे आणि काढणे यासाठी मर्यादा आहेत का?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            पैसे जमा करणे किंवा काढणे, यासाठी कोणतीही मर्यादा नाही. मात्र जेव्हा एकपेक्षा जास्त व्यवहारांची आवश्यकता असेल, तेव्हा MPS/NEFT/RTGS साठी एका व्यवहारासाठी कमाल रक्कम बँकेद्वारे ठरवली जाते. UPI द्वारे ट्रान्सफरची मर्यादा एक लाख इतकी आहे. अनेक ब्रोकरच्या बाबतीत पैसे काढण्याची मर्यादा नसते. पण त्या ब्रोकरची संपूर्ण माहिती घेऊन ती पडताळून घ्या.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="14" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>मी स्टॉक, चलन, डेरिव्हेटिव्ह आणि कमोडिटी ट्रेडिंगसाठी समान डिमॅट किंवा ट्रेडिंग खाते वापरु शकतो का?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            नक्कीच, तुम्ही तुमचे खाते कोणत्याही मालमत्ता वर्गाता (assets) ट्रेडिंग/ गुंतवणुकीसाठी वापरु शकता.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="15" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>चॉईसद्वारे डिमॅट खाते उघडण्याचे किती शूल्क आकारले जाते?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            ते पूर्णपणे मोफत असून, चॉईसद्वारे डिमॅट खाते ओपन करण्याचे कोणतेही शुल्क आकारले जात नाही.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="16" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>ऑनलाईन डिमॅट आणि ट्रेडिंग खाते उघडण्यासाठी पात्रता आणि निकष काय आहेत? </Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            वास्तविक, वयाचा असा कोणताही निकष नाही. म्हणजे १८ वर्षांखालील व्यक्तीदेखील डिमॅट आणि ट्रेडिंग खाते ओपन करु शकतात. पण अल्पवयीन असल्याने त्याच्या पालकांकडेच त्याचे पालकत्व असते. पण तरीही डिमॅट खाते ओपन करण्यासाठी काही महत्त्वाचे निकष आहेत.
<br />
                                                <ul>
                                                    <li>
                                                    भारतीय नागरीक असावा.
                                                    </li>
                                                    <li>वयोमर्यादा १८</li>
                                                    <li>पॅन कार्ड</li>
                                                    <li>वैध पत्त्याचा पुरावा (आधार कार्ड, मतदान ओळखपत्र, पासपोर्ट, ड्रायव्हिंग लायसन्स, युटिलिटी बिल)</li>
                                                </ul>
                                                भारतात डिमॅट खाते ओपन करण्यासाठी तुम्हाला ओळखपत्र, पत्ता आणि उत्पन्न ITR पुराव्यासह फोटो देणे आवश्यक असते.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="17" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>डिमॅट खाते सक्रिय होण्यासाठी किती वेळ लागेल?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            कागदपत्रे व्यवस्थित असल्यास, डिमॅट खाते २४ ते ४८ तासांत सक्रिय होते.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="18" className='faq-item'>
                                            <Accordion.Header as="h3" className='faq-header'>पेपरलेस डिमॅट खाते उघडणे म्हणजे काय?</Accordion.Header>
                                            <Accordion.Body className='open-demat-faq-body'>
                                            डिमॅट खाते उघडण्याच्या पेपरलेस पर्यायामध्ये कोणतीही कागदपत्रांचे भौतिक (physical) सादरीकरण नसते. सर्व कागदपत्रे ऑनलाईन सादर करावी लागतात. तसेच ही प्रक्रिया पूर्ण होण्यासाठी १० मिनिटांचा वेळ लागतो.
                                            </Accordion.Body>
                                        </Accordion.Item>


                                        <button className="btn-bg btn-banner justify-content-center d-flex mx-auto mt-6" onClick={() => {setview(false);chapterScroll('Faqid')}} >&nbsp;कमी पहा</button>

                                    </Accordion>


                                    :
                                    <div className="accordion-view-more">
                                        <button className="btn-bg btn-banner  justify-content-center d-flex mx-auto mt-6" onClick={() => setview(!show)}>आणखी पहा</button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default DematFaq;

