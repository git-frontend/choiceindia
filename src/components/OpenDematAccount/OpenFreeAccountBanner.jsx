import React, { useEffect, useState, useRef } from "react";
import DematAccountForm from '../Common-features/DematAccountForm';
import Image1 from '../../assets/images/open-demat-account/zigzagline.webp';
import Image2 from '../../assets/images/open-demat-account/lowest-dp-charges.svg';
import Image3 from '../../assets/images/open-demat-account/low-charges.svg';
import Image4 from '../../assets/images/open-demat-account/free-research-advisory.svg';
import Image5 from '../../assets/images/open-demat-account/demat-account-without-annual-charges.svg';
import Image6 from '../../assets/images/open-demat-account/form-bg.webp';
import LazyLoader from '../Common-features/LazyLoader';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { useSearchParams } from "react-router-dom";

const OpenFreeAccountBanner = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    var refercodecheck = useRef('');
    var scrollCheck = useRef('');

    const[toggle,settoggle] = useState(false);
    const[check,setcheck] = useState(false);
    const [view,setView]=useState({
		matches: window.innerWidth < 768 ? false : true ,
	  });
    const[ischeck,setIscheck]=useState(false);


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
     
     
      
    function fetchQueryParams() {
        refercodecheck.current = searchParams.get('refercode') || '';
        scrollCheck.current = searchParams.get('scroll') || '';
        if (refercodecheck.current && (scrollCheck.current =='true') && view && !view.matches) {
            
            setTimeout(()=>{
                chapterScroll("dematform");
              },1000)    
        }
    }

      useEffect(() => {
        settoggle(true)
        if(toggle==true)
        {
            fetchQueryParams();
            let mediaQuery = window.matchMedia("(min-width: 770px)");
			mediaQuery.addListener(setView);
			// this is the cleanup function to remove the listener
			return () => mediaQuery.removeListener(setView); 
        }
        
        
    }, [toggle]);

    // useEffect(() => {
    //     console.log('')
    // },[])    
    return (
        <div>
             <section className="banner-sect" onMouseOver={()=>setIscheck(true)}>
                <div className="container">
                    <div className="row colreverse">
                        <div className="col-md-7 col-sm-6">

                        {
                                view && !view.matches ?
                                <div>
                           
                            </div>
                            :
                            <div>
                                 <span className="banner-title2">All in 1 Account</span>
                                <h1 className="banner-title" >
                                    <div className="desktop">
                                        <span className="free">Free</span> Demat Account <br />Opening in 5 Minutes
                                    </div>
                                    
                                </h1>
                            </div>

                        }

                             
                         
                            <div className="banner-txt">
                                <div className="row mbrespflex">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                <LazyLoader src={Image2} className={'img-fluid'} width={"30"} height={"30"} alt={"Open Free Demat Account with Low DP Charges"} />
                                                    {/* <img src={Image2} width={"30"} height={"30"} alt="Zero Account Opening Fee" className="img-fluid " /> */}
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >One</span> Account for Everything
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox mt-sm2">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <LazyLoader src={Image3} className={'img-fluid'} width={"28"} height={"24"} alt={"Open Low Brokerage Demat Account"} />
                                                    {/* <img src={Image3} width={"28"} height={"24"} alt="No Square Off Charges" className="img-fluid " /> */}
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Low </span> Brokerage Charges</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-4 mt-sm-5 mbrespflex">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image4} width={"24"} height={"24"} alt={"Free demat account with expert research advisory"} className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Free </span>  Research Advisory</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox mt-sm2 ">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                <LazyLoader src={Image5} className={'img-fluid'} width={"32"} height={"20"} alt={"Free demat account with no annual charges"} />
                                                    {/* <img src={Image5} width={"32"} height={"20"} alt="Free Call For Trade Facility" className="img-fluid" /> */}
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Free </span> AMC for First Year</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-5 col-sm-6" id="open-account-wrap">
                        {
                                view && !view.matches ?
                                <div>
                            <span className="banner-title2 mobile">All in 1 Account</span>
                            <h1 className="banner-title mbtitle" >
                                
                                <div className="mobile">
                                <span className="free">Free</span> Demat Account <br />Opening in 5 Minutes
                                </div>
                                
                            </h1>
                            </div>
                            :
                            <div>
                            </div>

                        }
                            {
                                ischeck ?
                                <div className="formwrap d-flex justify-content-end ">
                                {/* <LazyLoader src={Image2} className={'img-fluid'} width={"30"} height={"30"} alt="Background Image" /> */}
                                {/* <img src={Image6} className="formbgtop img-fluid" draggable="false" alt="Background Image" /> */}
                                {/* <LazyLoader src={Image6} className={'formbgtop img-fluid'} draggable="false" width={'531'} height={'573'} alt={'Background Image'} /> */}
                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                    <DematAccountForm />
                                </GoogleReCaptchaProvider>
                            </div>:
                            <div className="formwrap d-flex justify-content-end " onMouseOver={()=>setIscheck(true)}>
                                {/* <LazyLoader src={Image2} className={'img-fluid'} width={"30"} height={"30"} alt="Background Image" /> */}
                                {/* <img src={Image6} className="formbgtop img-fluid" draggable="false" alt="Background Image" /> */}
                                {/* <LazyLoader src={Image6} className={'formbgtop img-fluid'} draggable="false" width={'531'} height={'573'} alt={'Background Image'} /> */}
                                
                                    <DematAccountForm />
                                
                            </div>

                            }
                          

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
