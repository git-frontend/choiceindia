import React from 'react';

import Image19 from '../../assets/images/open-demat-account/register-online.webp';
import Image20 from '../../assets/images/open-demat-account/steparrow.svg';
import Image21 from '../../assets/images/open-demat-account/downarrow.png';
import Image22 from '../../assets/images/open-demat-account/in-person-verification.webp';
import Image23 from '../../assets/images/open-demat-account/registration-complete.webp';
import Image24 from '../../assets/images/open-demat-account/courier-poa.webp';
import LazyLoader from '../Common-features/LazyLoader';
const HindiTradingAccountOpeningProcess = () => {

    
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

            <section className="open-acnt ">
                <div className="container">

                    <div className="row">
                        <div className="col-md-12">
                            <div className="get-started-sect ">


                                <div className="headtext">
                                    <h3 className="mb-0">मुफ्त में  <span>पेपरलेस</span> ट्रेडिंग अकाउंट खोलें</h3>
                                </div>

                                <div className="text-right text-sm-center">
                                    <a onClick={()=>{chapterScroll('dematform')}}  > <div className="btn-bg btn-bg-dark cursor-pointer">ट्रेडिंग अकाउंट खोलें</div></a>
                                </div>

                            </div>
                        </div>

                    </div>
                    <h2 className="sect-title">ट्रेडिंग अकाउंट खोलने की प्रक्रिया</h2>



                    <div className="row">
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap width66">
                                <LazyLoader src={Image19} className={'img-fluid lazyload image'} width={"93"} height={"93"} alt={"नि:शुल्क ट्रेडिंग अकाउंट खोलने के लिए रजिस्टर करें"} />
                                    <LazyLoader src={Image20} className={'img-fluid lazyload image deskimg'} width={"127"} height={"23"} alt={"Step One"} />
                                    <LazyLoader src={Image21} className={'img-fluid lazyload respimag'} width={"17"} height={"93"} alt={"Step One"} />
                                </div>
                                <div className="info respspace">
                                    <h5>ऑनलाइन पंजीकरण करें</h5>
                                    <p>आवश्यक विवरण भरें और पासपोर्ट आकार के फोटो के साथ संबंधित दस्तावेज अपलोड करें।
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-sm-2 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap">
                                <LazyLoader src={Image22} className={'img-fluid lazyload image'} width={"93"} height={"93"} alt={"मुफ़्त ट्रेडिंग अकाउंट खोलने के लिए पूरा आईपीवी करें"} />
                                    <LazyLoader src={Image20} className={'img-fluid lazyload image deskimg'} width={"127"} height={"23"} alt={"Step Two"} />
                                    <LazyLoader src={Image21} className={'img-fluid lazyload respimag'} width={"17"} height={"93"} alt={"Step Two"} />
                                </div>
                                <div className="info">
                                    <h5>व्यक्तिगत सत्यापन</h5>
                                    <p>इन-पर्सन वेरिफिकेशन (आईपीवी) को पूरा करें।
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-sm-2 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap width66">
                                <LazyLoader src={Image23} className={'img-fluid lazyload image'} width={"93"} height={"93"} alt={"निःशुल्क ट्रेडिंग अकाउंट के लिए रजिस्ट्रेशन करें"} />
                                    <LazyLoader src={Image20} className={'img-fluid lazyload image deskimg'} width={"127"} height={"23"} alt={"Step Three"} />
                                    <LazyLoader src={Image21} className={'img-fluid lazyload respimag'} width={"17"} height={"93"} alt={"Step Three"} />
                                </div>
                                <div className="info" >
                                    <h5>पंजीकरण पूर्ण</h5>
                                    <p>चॉइस के साथ आपका ट्रेडिंग अकाउंट सफलापुरवक खुल गया है |

                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-md-3 mt-lg-0 mt-5 mt-sm-2 mt-md-4 ">
                            <div className="demat-steps">
                                <div className="imgwrap width66">
                                <LazyLoader src={Image24} className={'img-fluid lazyload'} width={"93"} height={"93"} alt={"आपके ट्रेडिंग अकाउंट को सक्रिय करने के लिए कूरियर पीओए करें"} />
                                </div>
                                <div className="info" >
                                    <h5>कूरियर पीओए</h5>
                                    <p>आपके पंजीकृत ईमेल आईडी पर भेजे गए पावर ऑफ अटॉर्नी (पीओए) की हस्ताक्षर कर के हमें कुरियर करें।
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default HindiTradingAccountOpeningProcess;

