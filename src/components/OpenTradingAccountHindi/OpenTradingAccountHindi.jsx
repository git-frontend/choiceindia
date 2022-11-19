// import "./opentradingaccounthindi.scss";
// import DematAccountForm from '../Common-features/DematAccountForm';
import "../OpenDematAccount/DematPage"
import HindiOpenFreeAccountBanner from "./HindiOpentradingAccountBanner";
import HindiWhyOpenFreeDematAccount from "./HindiWhyOpenTradingAccount";
import HindiDematAccountOpeningProcess from "./HindiTradingAccountOpeningProcess";
import HindiLowBrokerageDematAccount from "./HindiLowBrokerageTradingAccount";
import HindiWhyChoice from "./HindiTradingWhyChoice";
import HindiTradingFaq from "./HindiTradingFaq";
import { useState, useEffect } from 'react';
import {
    useLocation,
  } from 'react-router-dom';
  import meta_tags from "../../Data/MetaTags";
  import { Link } from "react-router-dom";
function OpenTradingAccountHindi() {
    const [rendercount, setRenderCount] = useState(() => false);

    const location = useLocation();

    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
        //   let parser = new DOMParser();
        //   let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
        //   document.body.appendChild(doc.getElementsByTagName('script')[0]||[]? doc.getElementsByTagName('script')[0]||[]: '' );
          document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
          // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
          document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
          document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
          document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
          if((document.getElementById('link1')==null)){
            let sitemap = document.createElement('link');
            sitemap.rel = 'alternate';
            sitemap.id = 'link1';
           sitemap.href = meta_tags[location.pathname.replace('/', "")].link1||'';
           sitemap.hreflang = meta_tags[location.pathname.replace('/', "")].href1||'';
            document.head.appendChild(sitemap);
      
            let sitemap1 = document.createElement('link');
            sitemap1.rel = 'alternate';
            sitemap1.id = 'link2';
            sitemap1.href = meta_tags[location.pathname.replace('/', "")].link2||'';
            sitemap1.hreflang = meta_tags[location.pathname.replace('/', "")].href2||'';
            document.head.appendChild(sitemap1);
      
            let sitemap2 = document.createElement('link');
            sitemap2.rel = 'alternate';
            sitemap2.id = 'link3';
           sitemap2.href = meta_tags[location.pathname.replace('/', "")].link3||'';
           sitemap2.hreflang = meta_tags[location.pathname.replace('/', "")].href3||'';
            document.head.appendChild(sitemap2);
            let sitemap3 = document.createElement('link');
            sitemap3.rel = 'alternate';
            sitemap3.id = 'link4';
           sitemap3.href = meta_tags[location.pathname.replace('/', "")].link4||'';
           sitemap3.hreflang = meta_tags[location.pathname.replace('/', "")].href4||'';
            document.head.appendChild(sitemap3);
            let sitemap4 = document.createElement('link');
            sitemap4.rel = 'alternate';
            sitemap4.id = 'link5';
           sitemap4.href = meta_tags[location.pathname.replace('/', "")].link5||'';
           sitemap4.hreflang = meta_tags[location.pathname.replace('/', "")].href5||'';
            document.head.appendChild(sitemap4);
            let sitemap5 = document.createElement('link');
            sitemap5.rel = 'alternate';
            sitemap5.id = 'link6';
           sitemap5.href = meta_tags[location.pathname.replace('/', "")].link6||'';
           sitemap5.hreflang = meta_tags[location.pathname.replace('/', "")].href6||'';
            document.head.appendChild(sitemap5);
            }

        }
      }, [rendercount])


    return (
        <>
            {/* <p>Open Trading Account Hindi</p>
            <DematAccountForm></DematAccountForm> */}
            <HindiOpenFreeAccountBanner />
            <HindiWhyOpenFreeDematAccount />
            <HindiWhyChoice />
            <HindiLowBrokerageDematAccount />
            <HindiDematAccountOpeningProcess />
            <HindiTradingFaq />
            <section className="readmoresection">

                <div className="container">
                    <div className="row">
                        <div className="col-md-11 col-md-offset-1">
                            <h2 className="secttitle">चॉइस के साथ डीमैट खाता खोलें</h2>
                        </div>
                        <div className="col-md-11 col-md-offset-1">
                            <div className="para">
                                <input type="checkbox" className="read-more-state" id="post-1" />
                                <span className="read-more-wrap "> शेयर बाजार एक पुराना प्रतिष्ठान है जो 1875 से अस्तित्व में है जब बीएसई एशिया में स्थापित होने वाला पहला स्टॉक मार्केट था, यह स्पष्ट है कि इन 147 वर्षों के इतिहास में बहुत कुछ बदल गया है और उन परिवर्तनों में से एक था एक ऑनलाइन प्लेटफॉर्म पर कारोबार किए जा रहे शेयरों के लिए भौतिक कागज प्रमाणपत्र शेयरों का संक्रमण

                                    <span className="read-more-target"> यह तभी संभव था जब 1996 में इलेक्ट्रॉनिक ट्रेडिंग को बाजार में पेश किया गया था और तब से डीमैट अकाउंट किसी की भी निवेश यात्रा का अनिवार्य हिस्सा रहा है। तो चलिए अब इस पर गहराई से विचार करते हैं और समझते हैं |
                                        <br /><br /><br />
                                        <h2 className="font-bold">डीमैट खाता क्या है?</h2>
                                        यदि हम इसे सरल शब्दों में कहें तो हम कह सकते हैं कि डीमैट खाता एक डिपॉजिटरी है जहां आप अपने निवेश को विभिन्न रूपों में सुरक्षित रूप से स्टोर कर सकते हैं। एक डीमैट अकाउंट न केवल आपके स्टॉक को होल्ड कर सकता है बल्कि आपके म्यूचुअल फंड, बॉन्ड और ईटीएफ को भी होल्ड कर सकता है।<br /><br />

                                        <h2 className="font-bold">डीमैट खाता क्यों जरूरी है?</h2>
                                        जैसा कि पहले उल्लेख किया गया है, 1996 में इलेक्ट्रॉनिक ट्रेडिंग को शेयर बाजार में पेश किए जाने से पहले लोग अपने शेयरों को प्रमाण पत्र के रूप में रखते थे जो भौतिक कागज के रूप में थे और मानवीय त्रुटियों के कारण, यह आश्वासन मुश्किल था कि भौतिक रूप से रखे गए शेयर सुरक्षित हाथों में हैं |<br /><br />

                                        इसलिए सुविधा को ध्यान में रखते हुए, ट्रेडिंग की पूरी प्रक्रिया ने इलेक्ट्रॉनिक मार्ग लिया और तब से यह चलन चल रहा है और किसी भी निवेशक के लिए शेयर बाजार में भाग लेने के लिए डीमैट खाता खोलना अनिवार्य कर दिया गया है।<br /><br /><br />

                                        <h2 className="font-bold">डीमैट और ट्रेडिंग अकाउंट के बीच अंतर </h2>
                                        अब जब हमने यह पता लगा लिया है कि डीमैट खाता क्या है और यह हमारी मदद कैसे करता है, तो आइए आगे देखें और समझें कि यहां ट्रेडिंग खाता कैसे भूमिका निभाता है?<br /><br />

                                        उस प्रश्न का उत्तर देने के लिए लोगों को यह समझने की जरूरत है कि डीमैट खाता सिर्फ एक भंडार है जहां आपके स्टॉक जमा होते हैं, शेयर बाजार में लेन-देन के उद्देश्यों के लिए आपको एक ट्रेडिंग खाते की आवश्यकता होती है।<br /><br />

                                        अब जब हम समझ गए हैं कि डीमैट खाता और ट्रेडिंग खाता एक दूसरे से कैसे भिन्न हैं  <Link to="/blog/difference-between-demat-and-trading-account-in-hindi/">difference between demat and trading account in hindi</Link> , तो आइए विवरण देखें |<br /><br />


                                        <div >
                                            <h3 className="font-bold"> 1. डिलीवरी</h3>
                                            एक डीमैट खाता आपके स्टॉक को तभी स्टोर करता है जब आप इसके लिए डिलीवरी लेते हैं, आप भविष्य में आगे खरीद या बेच सकते हैं, जबकि आपका ट्रेडिंग अकाउंट आपको आपकी इंट्राडे गतिविधियों के लिए सुविधा प्रदान करता है, इंट्राडे ट्रेडिंग में, आपको अपनी पोजीशन को अंत तक बेचने की आवश्यकता होती है। दिन का, इसलिए आपके द्वारा लिए गए इंट्राडे ट्रेडो को आपके डीमैट खाते में    डिलीवर नहीं किया जाता है।<br /><br />
                                            <h3 className="font-bold"> 2.  बैंक लिंक</h3>जैसा कि पहले उल्लेख किया गया है कि एक ट्रेडिंग खाता आपको लेन-देन में मदद करता है, इसलिए यह समझ में आता है कि आपका ट्रेडिंग खाता और आपका बैंक खाता दोनों एक दूसरे से जुड़े हुए हैं ताकि आप लेनदेन को निर्बाध रूप से कर सकें।<br />

                                            जब आप अपने ट्रेडिंग खाते में पैसा जोड़ते हैं तो आप आगे बढ़ सकते हैं और स्टॉक खरीद सकते हैं जो आपके डीमैट खाते में संग्रहीत होंगे और यदि आप अपने स्टॉक बेचते हैं, तो आपके डीमैट खाते से उन शेयरों से छुटकारा मिल जाएगा और पैसा आपके ट्रेडिंग खाते में जमा हो जाएगा और वहां से यह आपकी सुविधा के अनुसार आपके बैंक खाते में ट्रांसफर कर दिया जाएगा।
                                        </div><br /><br />

                                        <h3 className="font-bold">डीमैट अकाउंट खोलने के लाभ  </h3>
                                        उपर्युक्त अनुभागों में हमने आपको बताया है कि डीमैट खाता क्यों आवश्यक है लेकिन डीमैट खाता वास्तव में आपके लिए फायदेमंद क्यों है <Link to="/blog/demat-account-benefits-in-hindi/"> (demat account benefits in hindi)</Link> इस बारे में बहुत कम बताया गया है,<br />
                                        <div >
                                            <h3 className="font-bold"> 1. कॉर्पोरेट लाभ </h3>
                                            स्टॉक ट्रेडिंग से जुड़े होते हैं, जब आप कोई स्टॉक खरीदते हैं तो आप स्टॉक स्प्लिट, बोनस, लाभांश भुगतान आदि जैसे कई कॉर्पोरेट लाभों के योग्य होते हैं।<br /><br />

                                            इन सभी लाभों को प्रबंधित करने का मतलब है कि आपके स्टॉक गतिशील हैं, जब आप बोनस या स्टॉक स्प्लिट प्राप्त करते हैं तो वे संख्या में बदल सकते हैं। जब आप लाभांश भुगतान के लिए पात्र होते हैं, तो लाभांश सीधे आपके बैंक खाते में स्थानांतरित कर दिए जाते हैं। ये सब सहज रूप से होता है, लेकिन बिना देमत खाते के ऐसा होना संभव नहीं | <br />
                                            All these happen seamlessly, but that wouldn’t be the case if it weren't for the Demat account.<br />
                                            <h3 className="font-bold"> 2. नामांकन सुविधाएं</h3>
                                            जब आप अपने लिए एक डीमैट खाता खोलते हैं तो आपको एहतियाती उपायों के लिए एक नामांकित व्यक्ति को जोड़ने की आवश्यकता होती है, आपके और आपके नामांकित व्यक्ति के बीच संपत्ति का हस्तांतरण बिना किसी परेशानी के होता है, जिसके लिए आपको बहुत कम या बिना किसी कागजी कार्रवाई की आवश्यकता होती है।<br />

                                            <h3 className="font-bold"> 3. बहुमुखी विकल्प</h3>
                                            वित्त के संदर्भ में हम आमतौर पर देखते हैं कि इसमें शामिल अधिकांश उपकरण कुछ लोगों तक सीमित हैं जो प्रमाणीकरण और सुरक्षा की कठोर संरचना की जांच करते हैं, लेकिन उस समस्या को डीमैट खातों द्वारा सुरक्षा या प्रमाणीकरण से समझौता किए बिना निपटाया जाता है। <br /><br />
                                            डीमैट खाता खोलते समय आपको बहुत सारे विकल्प प्रदान किए जाते हैं जिनसे आप अपना डीमैट खाता खोल सकते हैं;

                                            <ul>
                                                <li className="font-bold">इंडिविजुअल डीमैट अकाउंट</li>
                                                इंडिविजुअल डीमैट खाता काफी सरल है और नाम ही व्याख्यात्मक है। यह एक ऐसे व्यक्ति को समर्पित एक डीमैट खाता है जो इसे स्वयं संचालित करता है।<br />
                                                <li className="font-bold"> माइनर डीमैट खाता</li>

                                                अधिकांश भाग के लिए, आमतौर पर, नाबालिगों या 18 वर्ष से कम आयु के लोगों को वित्तीय समझौते में शामिल होने की अनुमति नहीं है, लेकिन, हमारे पास कुछ प्रावधान हैं जो नाबालिग को डीमैट खाता रखने की अनुमति देंगे।
                                                <br /><br />
                                                हालाँकि, इस नाबालिग डीमैट खाते को नाबालिग के माता-पिता या अभिभावक के मार्गदर्शन में संचालित करने की आवश्यकता है, जिसका अर्थ है कि नाबालिग स्वयं शेयर खरीद या बेच नहीं सकता है। <br /><br />

                                                एक बार जब खाताधारक की आयु 18 वर्ष से अधिक हो जाती है और वह अपने डीमैट खाते को नियंत्रित करना चाहता है, तो वे कानूनी रूप से ऐसा कर सकते हैं।<br /><br />
                                                <li className="font-bold">एनआरआई डीमैट खाता</li>
                                                हम समझते हैं और हम जानते हैं कि कोई भी कानूनी भारतीय अपनी मर्जी से खरीदने और बेचने के लिए इक्विटी रख सकता है, लेकिन, एनआरआई के बारे में क्या?<br />
                                                एनआरआई या अनिवासी भारतीय, क्या उनके पास भारतीय बाजारों द्वारा दिखाई गई जबरदस्त वृद्धि का आनंद लेने के प्रावधान हैं?<br />
                                                पता चला, उनके पास भारतीय बाजारों में भाग लेने के प्रावधान हैं। अनिवासी भारतीयों को डीमैट खाते रखने की अनुमति है लेकिन फेमा (विदेशी मुद्रा प्रबंधन अधिनियम) के नियमों का पालन करते हुए<br />
                                                <li className="font-bold">कॉर्पोरेट डीमैट खाता</li>
                                                डीमैट खाते केवल व्यक्तिगत उपयोग तक ही सीमित नहीं हैं, कॉर्पोरेट कंपनियों के लिए एकल इकाई के रूप में निवेश करने के प्रावधान हैं। कॉर्पोरेट डीमैट खाते विशेष रूप से विशेष होते हैं क्योंकि जब आप शेयरों की खरीद, बिक्री, व्यापार और हस्तांतरण करते हैं तो यह कागजी कार्रवाई को काफी कम कर देता है।
                                                <br />
                                            </ul>
                                        </div><br />
                                        अब जब हमने कवर कर लिया है और यह भी समझ लिया है कि भारत में शेयरों में निवेश करने के लिए डीमैट क्या है और डीमैट हमारे लिए कैसे आवश्यक है, तो अब देखते हैं कि हम ऑनलाइन डीमैट खाता कैसे खोलते हैं या कैसे खोलते हैं।<br /><br /><br />

                                        <h3 className="font-bold">डीमैट अकाउंट खोलने के लिए आवश्यकताएँ </h3>
                                        यदि आप अपना डीमैट अकाउंट ऑफ़लाइन खोलना चाहते हैं, तो आप शायद एक ऑफ़लाइन साधन का विकल्प चुनेंगे और एक डीमैट खाता ऑफ़लाइन खोलने के लिए आपको दस्तावेजों के साथ तैयार रहना होगा और हम इसमें आपकी सहायता करेंगे;<br /><br />
                                        सबसे पहले, आपको अपने डीपी या डिपॉजिटरी पार्टिसिपेंट पर फैसला करना होगा, डीपी आपके और आपके निवेश के बीच एक मध्यवर्ती है और डीपी आमतौर पर बैंक, वित्तीय संस्थान और दलाल होते हैं।<br />
                                        उपयुक्त डीपी चुनने के लिए आपको ब्रोकरेज शुल्क और वार्षिक रखरखाव शुल्क पर निर्णय लेना होगा। आपके पास एक बैंक खाता होना चाहिए और अपना केवाईसी पूरा करना चाहिए<br />
                                        अपना केवाईसी पूरा करते समय आपको अपनी प्रतियां संलग्न करनी होंगी;<br /><br />

                                        1. पैन कार्ड<br />
                                        2.  आईडी प्रूफ (जैसे; आधार)<br />
                                        3.स्थायी निवास का प्रमाण<br />
                                        4. पासपोर्ट आकार के फोटो<br /><br />

                                        डीमैट अकाउंट खुलने के बाद के बाद सुनिश्चित करें कि आपका डीपी आपको लाभार्थी आईडी और पीओए नंबर या आपकी क्लाइंट आईडी के साथ पावर ऑफ अटॉर्नी नंबर प्रदान करे, यह जानकारी आपको आईपीओ के लिए आवेदन करने में मदद करेगी। <br /><br />
                                        <h2 className="font-bold">ऑनलाइन डीमैट खाता खोलना</h2>
                                        ऑफलाइन खाता खोलने की तुलना में <Link to="/blog/demat-account-online-kaise-khole/"> ऑनलाइन डीमैट खाता खोलना </Link> आसान है। यह आपको अपने घर बैठे खाता खोलने की सुविधा देता है। हालाँकि ऑनलाइन डीमैट खाता खोलने की आवश्यकताओं के लिए आपके पास वही दस्तावेज़ होने चाहिए जो आपको ऑफ़लाइन डीमैट खाता खोलते समय चाहिए होते हैं, कुछ अतिरिक्त आवश्यकताएं हैं जिनके साथ आपको तैयार रहने की आवश्यकता है;<br />
                                        <div >
                                            <ul>
                                                <li>अपने पसंदीदा डीपी की वेबसाइट पर जाएं, लगभग हर दूसरे वित्तीय संस्थान या बैंक की आजकल ऑनलाइन उपस्थिति है, इसलिए आपको अपने पसंदीदा डीपी की वेबसाइट खोजने में कोई समस्या नहीं होगी।</li><br />
                                                <li>जब आप वेबसाइट पर हों तो आपको प्राप्तकर्ता का नाम, ईमेल आईडी, संपर्क नंबर और शहर जैसे कुछ बुनियादी विवरण भरने होंगे।.</li><br />
                                                <li>एक बार जब आप आवश्यक विवरण भर देते हैं, तो आपको सत्यापन के लिए एक ओटीपी प्राप्त होगा और जब आप ओटीपी भरेंगे तो आपकी प्रक्रिया शुरू हो जाएगी।</li><br />
                                                <li>आपका डीपी सभी उल्लिखित औपचारिकताओं को पूरा करने के लिए आपसे संपर्क करेगा और फिर एक डीमैट खाता खोलेगा।</li>
                                            </ul>
                                        </div><br /><br />
                                        <h3 className="font-bold">डीमैट खाता खोलने का शुल्क</h3>

                                        <h3 className="font-bold">प्रत्यावर्तनीय डीमैट अकाउंट </h3>
                                        डीमैट अकाउंट खोलते समय आप शायद विभिन्न शुल्कों से जुड़े होंगे, ये हैं खाता खोलने का शुल्क, सुरक्षा शुल्क, वार्षिक रखरखाव शुल्क, लेनदेन शुल्क और डीमैट शुल्क।<br />

                                        इससे पहले कि आप अपना डीमैट अकाउंट खोलने के लिए डीपी का निर्णय लें, आपको सलाह दी जाती है कि आप इस सारी जानकारी की जांच करें और उसके बाद ही अपने पसंदीदा डीपी पर डीमैट खाता खोलने का निर्णय लें।<br />
                                        <div >
                                            <h3 className="font-bold">डीमैट शुल्क </h3>
                                            अधिकांश मौजूदा वित्तीय संस्थान और बैंक आमतौर पर अब डीमैट शुल्क नहीं लेते हैं, लेकिन एक समय ऐसा हुआ करता था जब बैंक सिर्फ डीमैट खाता खोलने के लिए 600-900 रुपये के बीच कहीं भी शुल्क लेते थे।<br />
                                            अब आपको यह सामान्य लग सकता है कि संस्थान आपके लिए मुफ्त में या बहुत मामूली कीमत पर डीमैट अकाउंट खोलते हैं। <br />
                                            <h3 className="font-bold">सुरक्षा शुल्क</h3>
                                            आपके सभी शेयरों को सुरक्षित रखने और डीमैट खाता बनाए रखने के बदले में सुरक्षा शुल्क लगाया जाता है।
                                            सुरक्षा शुल्क या खाता संरक्षक शुल्क आमतौर पर डीपी पर डिपॉजिटरी द्वारा लगाया जाता है, ये डीपी पर एकमुश्त शुल्क होते हैं। डीपी अपने ग्राहकों से मासिक आधार पर सुरक्षा शुल्क लेते हैं।
                                            <br />

                                            <h3 className="font-bold">वार्षिक रखरखाव शुल्क (एएमसी)</h3>
                                            निवेशक द्वारा प्रदान की जाने वाली सेवाओं के लिए डीपी द्वारा वार्षिक रखरखाव शुल्क लगाया जाता है। वार्षिक रखरखाव शुल्क को फोलियो रखरखाव शुल्क भी कहा जाता है, ये शुल्क 200 - 1000 रुपये प्रति वर्ष के बीच होते हैं। कुछ डीपी अपने निवेशकों से त्रैमासिक शुल्क लेते हैं और कुछ आजीवन शुल्क भी लेते हैं, लेकिन निवेशकों से सालाना शुल्क लेना एएमसी एकत्र करने का सबसे आम तरीका है।.<br />
                                            <h3 className="font-bold">लेन-देन शुल्क</h3>
                                            डीमैट अकाउंट रखने का मुख्य उद्देश्य भारतीय बाजारों में भाग लेना है और ऐसा करते समय यह स्पष्ट है कि डीमैट खाते पर आप जो भी लेन-देन करते हैं वह आपके भविष्य की ओर एक कदम है।<br />
                                            डीपी क्रेडिट और डेबिट दोनों पर लेन-देन शुल्क लेते हैं, जहां हर बार जब आप किसी व्यापार में शामिल होते हैं तो आपके डीमैट खाते और बाजार के बीच सुचारू लेनदेन की सुविधा के लिए आपकी ओर से एक मामूली राशि का शुल्क लिया जाता है।<br />
                                        </div><br /><br />
                                        <h3 className="font-bold">चॉइस के साथ डीमैट खाता क्यों खोलना चाहिए? </h3>
                                        आपने डीमैट के बारे में सभी जानकारी को पढ़ लिया है और आपने यह समझने के लिए पर्याप्त ज्ञान हासिल कर लिया है कि डीपी चुनना कोई आसान काम नहीं है,<br />
                                        आपको शुल्क और उनके द्वारा प्रदान की जाने वाली सेवाओं जैसे कई कारकों पर विचार करना होगा और यदि यह आपकी अंतरात्मा से मेल खाता है, तो आप उन्हें चुनते हैं।<br />
                                        लेकिन आइए हम खुद को पेश करें और आपको बताएं कि आपको चॉइस के साथ डीमैट खाता खोलने की आवश्यकता क्यों है;<br />
                                    </span></span> <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    );
}

export default OpenTradingAccountHindi;
