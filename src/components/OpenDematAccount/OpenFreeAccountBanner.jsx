import React, { useEffect, useState, useRef } from "react";
import DematAccountForm from '../Common-features/DematAccountForm';
import Image1 from '../../assets/images/open-demat-account/zigzagline.webp';
import Image2 from '../../assets/images/open-demat-account/lowest-dp-charges.svg';
import Image3 from '../../assets/images/open-demat-account/low-charges.svg';
import Image4 from '../../assets/images/open-demat-account/free-research-advisory.svg';
import Image5 from '../../assets/images/open-demat-account/demat-account-without-annual-charges.svg';
import Image6 from '../../assets/images/open-demat-account/form-bg.webp';
import LazyLoader from '../Common-features/LazyLoader';
import { useSearchParams } from "react-router-dom";

const OpenFreeAccountBanner = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    var refercodecheck = useRef('');
    var scrollCheck = useRef('');

    const[toggle,settoggle] = useState(false);
    const[check,setcheck] = useState(false);
    const [view,setView]=useState({
		matches: window.innerWidth < 770 ? false : true ,
	  });



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

    
    return (
        <div>
             <section className="banner-sect" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6">
                            <h1 className="banner-title" >
                                <div className="desktop"><span> Open a <span className="free">Free</span></span><br /> Demat Account <br />with <span className="yellow">No Annual Charges*</span></div>
                                
                            </h1>

                             
                         
                            <div className="banner-txt">
                                <div className="row mbrespflex">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                <LazyLoader src={Image2} className={'img-fluid'} width={"30"} height={"30"} alt={"Lowest DP Charges"} />
                                                    {/* <img src={Image2} width={"30"} height={"30"} alt="Zero Account Opening Fee" className="img-fluid " /> */}
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Low</span> DP Charges<span className="subtxt"> (Rs. 10 Only)</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox mt-sm2">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <LazyLoader src={Image3} className={'img-fluid'} width={"28"} height={"24"} alt={"Low Brokerage Charges"} />
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
                                                    <img src={Image4} width={"24"} height={"24"} alt={"Free Research Advisory"} className="img-fluid " />
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
                                                <LazyLoader src={Image5} className={'img-fluid'} width={"32"} height={"20"} alt={"Demat Account without Annual Charges"} />
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
                            <div className="formwrap d-flex justify-content-end ">
                                {/* <LazyLoader src={Image2} className={'img-fluid'} width={"30"} height={"30"} alt="Background Image" /> */}
                                {/* <img src={Image6} className="formbgtop img-fluid" draggable="false" alt="Background Image" /> */}
                                <LazyLoader src={Image6} className={'formbgtop img-fluid'} draggable="false" width={'531'} height={'573'} alt={'Background Image'} />
                                <DematAccountForm />
                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </div>

    )
}

export default OpenFreeAccountBanner;
