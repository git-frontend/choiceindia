import { useState,useEffect } from 'react';
import DematAccountForm from '../Common-features/DematAccountForm';
import Image1 from '../../assets/images/open-demat-account/zigzagline.webp';
import Image2 from '../../assets/images/open-demat-account/lowest-dp-charges.svg';
import Image3 from '../../assets/images/open-demat-account/low-charges.svg';
import Image4 from '../../assets/images/open-demat-account/free-research-advisory.svg';
import Image5 from '../../assets/images/open-demat-account/demat-account-without-annual-charges.svg';
import Image6 from '../../assets/images/open-demat-account/form-bg.webp';
import LazyLoader from '../Common-features/LazyLoader';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const OpenFreeAccountBanner = () => {
    function chapterScroll(id) {
        console.log("check",id);
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
      const [name, setName ] = useState('hideform');
      const getPosition = () => {
        const element = document.getElementById("showForm");
        if(element){
            const rect = element.getBoundingClientRect();
            
            if(rect.top.toFixed() < 259){
                setName('visibleform');
            }else{
                setName('hideform');
            }   
        }
    };

      useEffect(() => {
        window.addEventListener('scroll', getPosition);
    }, []);
    return (
        <div>
             <section className="banner-sect" >
                <div className="container">
                    <div className="row colreverse">
                        <div className="col-md-7 col-sm-6">
                            <h1 className="banner-title" >
                                <div className="desktop"><span> मोफत डीमॅट खाते उघडा</span></div>
                                
                            </h1>
                            {/* <img src={Image1} alt="zigzagline" className="img-fluid zigzagline" /> */}
                            {/* <LazyLoader src={Image1} className={'img-fluid zigzagline'} width={'146'} height={'20'} alt={'zigzagline'} /> */}
                            <div className="banner-txt">
                                <div className="row mbrespflex">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image2} width={"30"} height={"30"} alt={"सर्वात कमी डीपी शुल्कासह डीमॅट खाते उघडा"} className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p>कमी डिपी चार्जेस<span className="subtxt"> (१० रुपये मात्र)</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox mt-sm2">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image3} width={"28"} height={"28"} alt={"कमी ब्रोकरेज डिमॅट खाते उघडा"} className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p>कमी ब्रोक्रेज चार्जेस</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4 mt-sm-5  mbrespflex">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image4} width={"24"} height={"24"} alt={"मोफत संशोधन आणि सल्लामसलत असलेले डीमॅट खाते उघडा"} className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p>मोफत संशोधन सल्लागार</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox mt-sm2 ">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image5} width={"32"} height={"20"} alt={"वार्षिक शुल्काशिवाय मोफत डीमॅट खाते उघडा"} className="img-fluid   " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p>पहिल्या वर्षी एएमसी चार्जेस मोफत</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-6" id="open-account-wrap">
                        <h1 className="banner-title mbtitle" >
                        <div className="mobile"><span> मोफत डीमॅट खाते उघडा</span></div>
                                
                            </h1>
                            <div className="formwrap d-flex justify-content-end ">
                                {/* <img src={Image6} className="formbgtop img-fluid" draggable="false" alt="Background Image" /> */}
                                <LazyLoader src={Image6} className={'formbgtop img-fluid'} draggable="false" width={'531'} height={'573'} alt={'Background Image'} />
                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                    <DematAccountForm language="marathi"/>
                                </GoogleReCaptchaProvider>
                            </div>

                        </div>

                    </div>
                    <div className={name}>
                    <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                        <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{chapterScroll('dematform')}}>Open Free Account</button>
                    </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default OpenFreeAccountBanner;