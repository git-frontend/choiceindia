import { useState,useEffect } from 'react';
import DematAccountForm from '../Common-features/DematAccountForm';
import Image1 from '../../assets/images/open-demat-account/zigzagline.webp';
import Image2 from '../../assets/images/open-demat-account/lowest-dp-charges.svg';
import Image3 from '../../assets/images/open-demat-account/low-charges.svg';
import Image4 from '../../assets/images/open-demat-account/free-research-advisory.svg';
import Image5 from '../../assets/images/open-demat-account/demat-account-without-annual-charges.svg';
import Image6 from '../../assets/images/open-demat-account/form-bg.webp';
import LazyLoader from '../Common-features/LazyLoader';

const FreeAmcAccountBanner = () => {
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
                                <div className="desktop">Open a Zero AMC Demat <br /> <span className="yellow">Account Online For Free</span></div>
                                
                            </h1>
                            {/* <img src={Image1} alt="zigzagline" className="img-fluid zigzagline" /> */}
                            {/* <LazyLoader src={Image1} className={'img-fluid zigzagline'} width={'146'} height={'20'} alt={'zigzagline'} /> */}
                            <div className="banner-txt">
                                <div className="row mbrespflex">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image2} width={"30"} height={"30"} alt={"Open Zero AMC Demat Account with Low DP Charges"} className="img-fluid " />
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
                                                    <img src={Image3} width={"28"} height={"28"} alt={"Open Low Brokerage Zero AMC Demat Account"} className="img-fluid " />
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
                                                    <img src={Image4} width={"24"} height={"24"} alt={"Zero AMC Demat Account with Expert Research Advisory"} className="img-fluid " />
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
                                                    <img src={Image5} width={"32"} height={"20"} alt={"Free AMC Demat Account"} className="img-fluid   " />
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
                        <h1 className="banner-title mbtitle" >
                                <div className="mobile">Open a Zero AMC Demat <br /> <span className="yellow">Account Online For Free</span></div>
                                
                            </h1>
                            <div className="formwrap d-flex justify-content-end ">
                                {/* <img src={Image6} className="formbgtop img-fluid" draggable="false" alt="Background Image" /> */}
                                <LazyLoader src={Image6} className={'formbgtop img-fluid'} draggable="false" width={'531'} height={'573'} alt={'Background Image'} />
                                <DematAccountForm />
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

export default FreeAmcAccountBanner;