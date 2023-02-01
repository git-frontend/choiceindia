
import React,{useState} from "react";
// import videoBg from '../../assets/images/insurance/insuringShield.mp4'
import icon1 from '../../assets/images/ipo/icon1.svg'
import icon2 from '../../assets/images/ipo/icon2.svg'
import icon3 from '../../assets/images/ipo/icon3.svg'
import LazyLoader from '../Common-features/LazyLoader';
import Equity from "../../Data/Equity";
import DematAccountForm from '../Common-features/DematAccountForm'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useEffect } from "react";

function Banner() {
    const [selected, setSelected] = useState(0);
    // const[showCaptcha, setshowCaptcha ] = useState(false);
	const [ischeck, setIscheck] = useState(false);
    const [view, setView] = useState({
		matches: window.innerWidth < 767 ? false : true,
	});

    // useEffect(() => {
    //     setTimeout(() => {
    //         setshowCaptcha(true);
    //     },3000) 
    // },[])

    // useEffect(() => {
	// 	let mediaQuery = window.matchMedia("(min-width: 767px)");
	// 	mediaQuery.addListener(setView);
	// 	// this is the cleanup function to remove the listener
	// 	return () => mediaQuery.removeListener(setView);
	// }, []);

    // useEffect(() => {
    //     new PerformanceObserver((entryList) => {
    //         for (const entry of entryList.getEntriesByName('first-contentful-paint')) {
    //           console.log('FCP candidate:', entry.startTime, entry);
    //         }
    //       }).observe({type: 'paint', buffered: true});
    // },[])

    return (
        <div onMouseOver={() => setIscheck(true)}>
            <section className="equity-bannersection ipo-equity">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-md-6 lft-sec">
                            <h1 className="big-ttl">IPO Investment</h1>
                            <ul className="reset">
                                <li className="">
                                    <span className="">
                                        <LazyLoader src={icon1} alt={"IPO analysis by experts"} className={"img-fluid"} width={"126"} height={"126"} />
                                    </span>
                                    <h4>IPO Analysis <br/>by Experts</h4>
                                </li>
                                <li className="">
                                    <span className="">
                                        <LazyLoader src={icon2} alt={"IPO report to take decision"} className={"img-fluid"} width={"126"} height={"126"} />
                                    </span>
                                    <h4>IPO Report To <br/>Take Decision</h4>
                                </li>
                                <li className="">
                                    <span className="">
                                    <LazyLoader src={icon3} alt={"Free IPO investment account"} className={"img-fluid"} width={"126"} height={"126"} />
                                    </span>
                                    <h4>Free IPO <br/>Investmnets Account</h4>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="rightsec d-flex justify-content-end" id="ipoForm">
                                {
                                   ischeck ?
                                        <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                            <DematAccountForm />
                                        </GoogleReCaptchaProvider>:
                                        <DematAccountForm />
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Banner;