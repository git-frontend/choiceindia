
import React,{useState,useEffect} from "react";
import icon1 from '../../assets/images/ipo/ipo-account/ipo-analysis-by-experts.svg'
import icon2 from '../../assets/images/ipo/ipo-account/ipo-report-to-take-decision.svg'
import icon3 from '../../assets/images/ipo/ipo-account/free-ipo-investment-account.svg'
import LazyLoader from '../Common-features/LazyLoader';
import Equity from "../../Data/Equity";
import DematAccountForm from '../Common-features/DematAccountForm'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function Banner() {
    const [selected, setSelected] = useState(0);
	const [ischeck, setIscheck] = useState(false);
    const [view, setView] = useState({
		matches: window.innerWidth < 767 ? false : true,
	});

    /** scroll purpose */
    function chapterScroll(id) {
        // console.log("check",id);
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }

      const [name, setName ] = useState('hideform1');
      /** hide and show section */
      const getPosition = () => {
        const element = document.getElementById("showForm");
        // console.log(element,"hgfh")
        if(element){
            const rect = element.getBoundingClientRect();
          
            if(rect.top.toFixed() < 259){
                setName('visibleform1');
            }else{
                setName('hideform1');
            }   
        }
    };
    
    useEffect(() => {
        window.addEventListener('scroll', getPosition);
    }, []);


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
                                    <h4>Free IPO <br/>Investment Account</h4>
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

            <div className={name}>
                    <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                        <button className=" primary-orange-btn scroll-top-account btn-bg btn-bg-dark openbtn"  onClick={()=>{chapterScroll('ipoForm')}}>Open Free Account</button>
                    </div>
                    </div>
        </div>
    );
}

export default Banner;