import React, { useEffect, useState } from "react";
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function Banner() {
    const [name, setName] = useState('hideform');
    const getPosition = () => {
        const element = document.getElementById("showForm");
        if (element) {
            const rect = element.getBoundingClientRect();

            if (rect.top.toFixed() < 259) {
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
    <>
     <section className="funds-bannersection">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-xl-7 col-md-6 lft-sec">
                    <h1 className="big-ttl">Best ELSS Mutual Funds</h1>
                    <p className="para">With Choice, not only can you save tax, but also grow your wealth. Check our recommended Best ELSS mutual funds to invest in 2021.</p>
                </div>
                <div className="col-xl-5 col-md-6">
                    <div className="d-flex justify-content-end" id="campaignForm">
                    <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                        <DematAccountForm />
                    </GoogleReCaptchaProvider>
                    </div>
                </div>
            </div>
            <div className={name}>
                <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                    <button className=" primary-orange-btn scroll-top-account openbtn" onClick={() => { chapterScroll2('dematform') }}>Open Free Account</button>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Banner