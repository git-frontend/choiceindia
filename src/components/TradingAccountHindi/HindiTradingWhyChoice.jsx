import React from 'react';
import Image13 from '../../assets/images/open-demat-account/web.svg';
import Image14 from '../../assets/images/open-demat-account/android.svg';
import Image15 from '../../assets/images/open-demat-account/ios.svg';
import Image16 from '../../assets/images/open-demat-account/choice-free-demat-account-opening.webp';
const HindiTradingWhyChoice = () => {
    return (
        <div>

            <section className="why-choice-section">
                <div className="container">

                    <div className="row">
                        <div className='col-md-12'>
                            <div className="wrap">
                                <div className="leftsect">
                                    <h2 className="secttile">चॉइस के साथ ट्रेडिंग अकाउंट क्यों खोलें?</h2>
                                    <div className="img">
                                        <img src={Image16} alt={"चॉइस फ्री डीमैट खाता खोलना"} width={"365"} height={"788"} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="rightsect">
                                    <div className="rightsect-sub">
                                        <p className="headtxt">रिसर्च और  &amp; <br /> सलाहकार सेवाएं</p>
                                        <p className="subtxt">एक समर्पित रिसर्च टीम जो बिना किसी अतिरिक्त लागत के तकनीकी और मौलिक अनुसंधान प्रदान करता है। </p>
                                    </div>
                                    <hr></hr>
                                    <div className="rightsect-sub">
                                        <p className="headtxt">ग्राहक  <br />सहायता</p>
                                        <p className="subtxt">एक उत्कृष्ट सहायता टीम जो फोन और ईमेल के माध्यम से हर कदम पर आपकी सहायता के लिए उपलब्ध रहती है।</p>
                                    </div>
                                    <hr></hr>
                                    <div className="rightsect-sub">
                                        <p className="headtxt">स्थानीय <br />कार्यालय</p>
                                        <p className="subtxt">आपकी सेवा के लिए देश भर में हमारे पास 48 स्थानीय कार्यालय उपलब्ध हैं।</p>
                                    </div>
                                    <hr></hr>
                                    <div className="rightsect-sub">
                                        <p className="headtxt">25+ वर्षो का <br />अनुभव</p>
                                        <p className="subtxt">वित्तीय क्षेत्र में 25+ वर्षों के अनुभव के साथ ब्रोकिंग इंडस्ट्री  में एक विश्वसनीय नाम।</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row  d-flex justify-content-center">
                        <div className="col-md-10 col-lg-10">

                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className="availablewrap ">
                                <div className='row align-items-center'>
                                <div className="col-xl-4 col-md-6">
                                    <h2 className="wraptitle"> हम इन प्लैटफ़ॉर्म पर उपलब्ध हैं</h2>
                                </div>
                                <div className="col-xl-8 col-md-6">
                                    <div className="iconwrap">
                                        <a href="https://jiffy.choiceindia.com/" target="_blank">
                                            <div className="icon">
                                                <img src={Image13} alt="Web" width={"45"} height={"46"} className="img-fluid " />
                                                <p>वेब</p>
                                            </div>
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy" target="_blank">
                                            <div className="icon">
                                                <img src={Image14} alt="Android" width={"35"} height={"36"} className="img-fluid " />
                                                <p>एंड्रॉइड</p>
                                            </div>
                                        </a>
                                        <a href="https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261" target="_blank">
                                            <div className="icon">
                                                <img src={Image15} width={"45"} height={"46"} alt="IOS" className="img-fluid " />
                                                <p>आईओएस</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default HindiTradingWhyChoice;

