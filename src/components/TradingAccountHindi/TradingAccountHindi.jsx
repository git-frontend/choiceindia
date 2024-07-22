import "../OpenDematAccount/DematPage"
import HindiOpenFreeAccountBanner from "./HindiOpentradingAccountBanner";
import HindiWhyOpenFreeDematAccount from "./HindiWhyOpenTradingAccount";
import HindiDematAccountOpeningProcess from "./HindiTradingAccountOpeningProcess";
import HindiLowBrokerageDematAccount from "./HindiLowBrokerageTradingAccount";
import HindiWhyChoice from "./HindiTradingWhyChoice";
import HindiTradingFaq from "./HindiTradingFaq";
import meta_tags from "../../Data/MetaTags";
import { useState,useEffect} from "react";
function TradingAccountHindi() {
    const [rendercount, setRenderCount] = useState(() => false);

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
      document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
        
        if (document.getElementById('link1') == null) {
        let sitemap1 = document.createElement('link');
        sitemap1.rel = "alternate";
        sitemap1.id = "link1";
        sitemap1.href = meta_tags[window.location.pathname.replace("/", "")].link1 || "";
        sitemap1.hreflang = meta_tags[window.location.pathname.replace("/", "")].href1|| "";
        document.head.appendChild(sitemap1);

        let sitemap2 = document.createElement('link');
        sitemap2.rel = "alternate";
        sitemap2.id = "link2";
        sitemap2.href = meta_tags[window.location.pathname.replace("/", "")].link2 || "";
        sitemap2.hreflang = meta_tags[window.location.pathname.replace("/", "")].href2|| "";
        document.head.appendChild(sitemap2);

        let sitemap3 = document.createElement('link');
        sitemap3.rel = "alternate";
        sitemap3.id = "link3";
        sitemap3.href = meta_tags[window.location.pathname.replace("/", "")].link3 || "";
        sitemap3.hreflang = meta_tags[window.location.pathname.replace("/", "")].href3|| "";
        document.head.appendChild(sitemap3);
     }
    }
  }, [rendercount])
 
    return (
        <>
            <HindiOpenFreeAccountBanner />
            <HindiWhyOpenFreeDematAccount />
            <HindiWhyChoice />
            <HindiLowBrokerageDematAccount />
            <HindiDematAccountOpeningProcess />
            <HindiTradingFaq />
            <section className="readmoresection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="secttitle">ऑनलाइन ट्रेडिंग अकाउंट कैसे खोलें?</h2>
                        </div>
                        <div className="col-md-12">
                            <div className="para">
                                <input type="checkbox" className="read-more-state" id="post-1" />
                                <span className="read-more-wrap "> प्रौद्योगिकी के साथ सब कुछ आसान और तेज हो गया है, और आज एक ट्रेडिंग अकाउंट कुछ ही मिनटों में खोला जा सकता है। केवल एक ट्रेडिंग खाता खोलना वास्तव में काफी बोझिल है क्योंकि आप किसी बिंदु पर शेयर खरीदना और रखना चाहते हैं। ....

                                    <span className="read-more-target"> 
                                <br />
                                चॉइस के साथ या तो दोनों खाते (ट्रेडिंग+ डीमैट खाता) एक साथ खोल सकते हैं, या आप चॉइस के साथ एक <span className="font-bold">  ट्रेडिंग अकाउंट  </span> खोल सकते हैं और साइन अप करते समय अपने मौजूदा डीपी को एक रेफरल कोड से जोड़ सकते हैं।<br /> <br />
                                नोट: यदि पंजीकरण करते समय रेफरल कोड का उल्लेख नहीं किया गया है; दोनों खाते खुलेंगे
                                <br /><br />
                                चॉइस के साथ ऑनलाइन <span className="font-bold">  ट्रेडिंग खाता </span> खोलने में केवल 15 मिनट लगते हैं, यदि सभी आवश्यक दस्तावेज तैयार हैं।

                                <br /><br />
                                नीचे चरण हैं,<br /><br />
                                ट्रेडिंग खाता खोलने के लिंक पर क्लिक करें<br /><br />

                                या
                                <br /><br />
                                Playstore या Appstore से Choice FinX ऐप डाउनलोड करें और रजिस्टर करें
                                <br /><br />
                                <ul>
                                    <li>आवश्यक विवरण भरें</li>
                                    <li>फोटो के साथ आवश्यक दस्तावेज अपलोड करें</li>
                                    <li>इन-पर्सन वेरिफिकेशन (आईपीवी) पूरा करें</li>
                                    <li>पंजीकरण पूर्ण</li>
                                    <li>चॉइस से आपके पंजीकृत मेल आईडी पर भेजे गए हस्ताक्षरित पीओए (पावर ऑफ अटॉर्नी) को कूरियर करें</li>                           
                                </ul> <br />
                                <h2 className="font-bold"><a href="https://choiceindia.com/blog/trading-account-kya-hota-hai/"> ट्रेडिंग अकाउंट क्या है?</a> </h2><br />
                                एक ट्रेडिंग अकाउंट  को बैंक के चालू खाते की तरह समझें, जबकि डीमैट खाता एक बचत खाते की तरह है। ट्रेडिंग खाता डीमैट और बैंक खाते के बीच की एक कड़ी है। ट्रेडिंग अकाउंट वह जगह है जहां शेयरों की खरीद और बिक्री वास्तव में होती है।<br />

                                <h2 className="font-bold"><a href="https://choiceindia.com/blog/difference-between-demat-and-trading-account-in-hindi/">ट्रेडिंग अकाउंट और डीमैट अकाउंट में क्या अंतर है?</a> </h2><br />
                                नीचे दी गई तालिका अंतर को संक्षेप में बताएगी, <br /> <br />
                               
                                <span className="font-bold">भूमिका:</span><br />
                                <br />
                                <span className="font-bold">डीमैट खाता -</span>
                              
                                डीमैट खाते का उपयोग शेयरों को रखने के लिए किया जाता है। लेनदेन डीमैट खाते का हिस्सा नहीं हैं। <br />
                                <br />
                                <span className="font-bold">ट्रेडिंग अकाउंट -</span>
                               
                                ट्रेडिंग खाते का उपयोग शेयरों को खरीदने और बेचने के लिए किया जाता है।  <br />
                                <br />
                                <div className="content-sp"></div>
                                <span className="font-bold">कार्यक्षमता:</span><br /><br />

                                <span className="font-bold">डीमैट खाता -</span>

                                डिमटेरियलाइज्ड सिक्योरिटीज के लिए डीमैट शॉर्ट निवेशकों को अपने भौतिक शेयरों को इलेक्ट्रॉनिक रूप में रखने की अनुमति देता है। <br /><br />
                                <span className="font-bold">ट्रेडिंग अकाउंट -</span>

                                ट्रेडिंग खाता शेयरों में  ट्रेड के लिए आदेश देने की अनुमति देता है <br /><br />
                                <div className="content-sp"></div>
                                <span className="font-bold">प्रकृति:</span><br /><br />

                                <span className="font-bold">डीमैट खाता -</span>

                                डीमैट खाता एक बचत बैंक खाते की तरह है और शेयरों को रखने के उद्देश्य से है <br /><br />
                                <span className="font-bold">ट्रेडिंग अकाउंट -</span>

                                ट्रेडिंग खाता एक चालू बैंक खाते की तरह है और डीमैट खाते से पैसे निकालकर शेयरों की बिक्री करता है। <br /><br />
                                <div className="content-sp"></div>
                                <span className="font-bold">के लिए उपयुक्त:</span><br /><br />

                                <span className="font-bold">डीमैट खाता -</span>

                                डीमैट खाता उन निवेशकों के लिए उपयुक्त है जो अपने शेयरों की डिलीवरी लेना चाहते हैं और उन्हें लंबे समय तक रखना चाहते हैं। <br /><br />
                                <span className="font-bold">ट्रेडिंग अकाउंट -</span>
                                ट्रेडिंग अकाउंट   ट्रेडर के लिए इंट्राडे ट्रेडिंग या कम समय में लेनदेन के लिए उपयुक्त है। <br /><br />

                                <span className="font-bold">सेबी और एनएसडीएल की मंजूरी:</span><br /><br />
                                <span className="font-bold">डीमैट खाता - अनिवार्य</span><br /><br />
                                <span className="font-bold">ट्रेडिंग अकाउंट  - आवश्यक नहीं</span><br /><br />
                                <span className="font-bold">वार्षिक रखरखाव शुल्क (एएमसी):</span><br /><br />
                                <span className="font-bold">डीमैट खाता - हाँ</span><br /><br />
                                <span className="font-bold">ट्रेडिंग अकाउंट -</span>

                                एएमसी शुल्क लागू नहीं होते हैं लेकिन निवेशक को ब्रोकरेज और वैधानिक शुल्क जैसे जीएसटी, एसटीटी, टर्नओवर टैक्स, स्टांप ड्यूटी और एक्सचेंज शुल्क का भुगतान करना पड़ता है। <br />

                                <h3 className="font-bold"> चॉइस के साथ ट्रेडिंग खाता खोलने का लाभ</h3><br />
                                चॉइस के साथ ट्रेडिंग खाता खोलने से जुड़े कई फायदे हैं, यहां कुछ हैं,<br /><br />
                               
                                <ul>
                                    <li>कम ब्रोकरेज शुल्क</li>
                                    <li>फ्री अकाउंट ओपनिंग और फ्री फर्स्ट ईयर एएमसी</li>
                                    <li>व्यापार और निवेश कॉल के लिए नि:शुल्क अनुसंधान परामर्श</li>
                                    <li>कम डीपी शुल्क (रु.10)</li>
                                    <li>व्यापार सुविधा के लिए मुफ्त कॉल</li>   
                                    <li>प्रभावी रेफरल कार्यक्रम</li>
                                    <li>उन्नत ट्रेडिंग प्लेटफॉर्म</li>
                                    <li>भारत भर में स्थानीय कार्यालय</li>
                                </ul> 
                                <h3 className="font-bold"> चॉइस के ट्रेडिंग खाता का शुल्क</h3><br />
                                चॉइस के साथ ट्रेडिंग खाता खोलना नि:शुल्क है।<br />
                               
                                <br />
                                चॉइस पहले साल की मुफ्त एएमसी प्रदान करता है और फिर कोई भी नीचे दिए गए 3 विकल्पों में  से किसी एक का 
                                चयन कर सकते हैं,<br /> <br />
                                प्रथम वर्ष की एएमसी नि:शुल्क है और फिर इसमें से चुनने के लिए *3 योजनाएं हैं:<br /> <br />
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
                               
   
                                    </span></span> <label for="post-1" className="read-more-trigger moreless-button"></label>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default TradingAccountHindi;