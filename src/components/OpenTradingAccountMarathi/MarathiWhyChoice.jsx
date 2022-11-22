import React from 'react';
import Image13 from '../../assets/images/open-demat-account/web.svg';
import Image14 from '../../assets/images/open-demat-account/android.svg';
import Image15 from '../../assets/images/open-demat-account/ios.svg';
import Image16 from '../../assets/images/open-demat-account/choice-free-demat-account-opening.webp';
const WhyChoice = () => {
    return (
        <div>

            <section className="why-choice-section">
                <div className="container">

                    <div className="row">
                        <div className='col-md-12'>
                            <div className="wrap">
                                <div className="leftsect">
                                    <h2 className="secttile">चॉईसच का?</h2>
                                    <div className="img">
                                        <img src={Image16} alt={"चॉइस मोफत डिमॅट खाते उघडणे"} width={"365"} height={"788"} className="img-fluid" />
                                    </div>
                                </div>
                                <div className="rightsect">
                                    <div className="rightsect-sub">
                                        <p className="headtxt">संशोधन आधारित  &amp; <br /> सल्ला</p>
                                        <p className="subtxt">आमची विशेष रिसर्च टीम तुम्हाला तांत्रिक आणि मूलभूत संशोधनाआधारित मार्गदर्शन करते. त्यासाठी कोणतेही शुल्क आकारले जात नाही.</p>
                                    </div>
                                    <hr></hr>
                                    <div className="rightsect-sub">
                                        <p className="headtxt">ग्राहक सेवा </p>
                                        <p className="subtxt">आमची तज्ज्ञांची टीम तुम्हाला फोन, ईमेल, किंवा आमच्या ब्रँच ऑफिसच्या माध्यमातून वेळोवेळी योग्य मार्गदर्शन करेल.</p>
                                    </div>
                                    <hr></hr>
                                    <div className="rightsect-sub">
                                        <p className="headtxt">स्थानिक कार्यालय</p>
                                        <p className="subtxt">तुमच्या सेवेसाठी आमचे देशभरात एकूण ४८ कार्यालये कार्यरत आहेत.</p>
                                    </div>
                                    <hr></hr>
                                    <div className="rightsect-sub">
                                        <p className="headtxt">2५ वर्षांचा प्रदीर्घ अनुभव</p>
                                        <p className="subtxt">शेअर ब्रोकिंग क्षेत्रात चॉईस हे अतिशय विश्वसनीय नाव असून, गेल्या २५ वर्षांपेक्षा जास्त काळ आम्ही फायनान्स क्षेत्रात कार्यरत आहोत</p>
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
                                    <h2 className="wraptitle">आम्ही उपलब्ध <br /> आहोत...</h2>
                                </div>
                                <div className="col-xl-8 col-md-6">
                                    <div className="iconwrap">
                                        <a href="https://finx.choiceindia.com/" target="_blank">
                                            <div className="icon">
                                                <img src={Image13} alt="Web" width={"45"} height={"46"} className="img-fluid " />
                                                <p>वेब</p>
                                            </div>
                                        </a>
                                        <a href="https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy" target="_blank">
                                            <div className="icon">
                                                <img src={Image14} alt="Android" width={"35"} height={"36"} className="img-fluid " />
                                                <p>अँड्रॉईड</p>
                                            </div>
                                        </a>
                                        <a href="https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261" target="_blank">
                                            <div className="icon">
                                                <img src={Image15} width={"45"} height={"46"} alt="IOS" className="img-fluid " />
                                                <p>आयओएस</p>
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

export default WhyChoice;

