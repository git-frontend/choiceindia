
import React from "react";
import { useState, useEffect } from 'react';
import LazyLoader from '../Common-features/LazyLoader';
import NoAmc from '../../assets/images/free-demat-compaign/free-demat-account-with-no-annual-charges.png';
import ResearchCalls from '../../assets/images/free-demat-compaign/free-demat-account-with-expert-research-calls.png';
import ResearchTools from '../../assets/images/free-demat-compaign/open-demat-account-with-free-research-tools.png';
import DematAccountForm from '../Common-features/DematAccountForm';
import NewDematAccountForm from '../Common-features/NewDematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Banner() {
    const [name, setName] = useState('hideform');
    const [isCheck, setIsCheck] = useState(false)
    const getPosition = () => {
        const element = document.getElementById("showForm");
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top.toFixed() < 4450) {
                setName('visibleform');
            } else {
                setName('hideform');
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', getPosition);
    }, []);


    function chapterScroll2(id) {
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
            <section className="free-dematbanner" onMouseOver={() => setIsCheck(true)}>
                <div className="container brd-bottom">
                    <div className="row justify-content-center">
                        <div className="col-md-12">
                            <div className="banner-btn">
                                <span className="all-account">All in One Account</span>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="free-banner-caption">
                                <h1 className="big-ttl">Open Trading Account Online</h1>
                                <div className="campaign-banner-features">
                                    <div className="campaign-features-list">
                                        <span className="campaign-img">
                                            <LazyLoader src={NoAmc} className={'img-fluid mob-i'} height={"93"} width={"106"} alt={"Free Trading Account with No Annual Charges"} />
                                        </span>
                                        <h3>No AMC for <br />First Year</h3>
                                    </div>
                                    <div className="campaign-features-list">
                                        <span className="campaign-img">
                                            <LazyLoader src={ResearchCalls} className={'img-fluid mob-i'} height={"90"} width={"102"} alt={"Free Trading Account with Expert Research Calls"} />
                                        </span>
                                        <h3>Expert <br />Research Calls</h3>
                                    </div>
                                    <div className="campaign-features-list">
                                        <span className="campaign-img">
                                            <LazyLoader src={ResearchTools} className={'img-fluid mob-i'} height={"93"} width={"106"} alt={"Open Trading Account with Free Research Tools"} />
                                        </span>
                                        <h3>Free <br />Research Tools</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {
                            isCheck ?
                                <div className="col-lg-5 col-md-5">
                                    <div className="d-flex justify-content-end" id="campaignForm">
                                        <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                            <NewDematAccountForm />
                                        </GoogleReCaptchaProvider>
                                    </div>
                                </div> :
                                <div className="col-lg-5 col-md-5">
                                    <div className="d-flex justify-content-end" id="campaignForm">
                                        <NewDematAccountForm />
                                    </div>
                                </div>
                        }
                       
                    </div>
                    <div className={name}>
                        <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                            <button className=" primary-orange-btn scroll-top-account openbtn" onClick={() => { chapterScroll2('dematform') }}>Open Free Account</button>
                        </div>
                    </div>
                </div>
            </section>





        </div>
    );
}

export default Banner;
