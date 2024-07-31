import {useRef,useEffect,useState} from 'react';
import DematAccountForm from '../Common-features/DematAccountForm';
import Image1 from '../../assets/images/open-demat-account/zigzagline.webp';
import Image2 from '../../assets/images/open-demat-account/lowest-dp-charges.svg';
import Image3 from '../../assets/images/open-demat-account/low-charges.svg';
import Image4 from '../../assets/images/open-demat-account/free-research-advisory.svg';
import Image5 from '../../assets/images/open-demat-account/demat-account-without-annual-charges.svg';
import Image6 from '../../assets/images/open-demat-account/form-bg.webp';
import LazyLoader from '../Common-features/LazyLoader';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

const MinorDematAccountBanner = () => {
    const[ischeck,setIscheck]=useState(false);
    
    function chapterScroll(id) {
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

    const [view,setView]=useState({
		matches: window.innerWidth < 768 ? false : true ,
	  });

    return (
        <div>
             <section className="banner-sect" onMouseOver={()=>setIscheck(true)}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6">

                        <div>
                            <span className="banner-title2">All in 1 Account</span>
                            <h1 className="banner-title" >
                                <div className="desktop">Open a Minor Demat Account <br /> <span className="yellow">Online For Free</span></div>
                                
                            </h1>
                        </div>
                      
                            <div className="banner-txt">
                                <div className="row mbrespflex">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image2} width={"30"} height={"30"} alt={"Lowest DP Charges"} className="img-fluid " />
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
                                                    <img src={Image3} width={"28"} height={"28"} alt={"Low Brokerage Charges"} className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Low </span> Brokerage Charges</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row  mt-4 mt-sm-5 mbrespflex">
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image4} width={"24"} height={"24"} alt={"Free Research Advisory"} className="img-fluid " />
                                                </div>
                                            </div>
                                            <div className="resptext">
                                                <p><span className="fontbold" >Free </span>  Research</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-5 col-md-6">
                                        <div className="bannerbox mt-sm2 ">
                                            <div className="respgrid">
                                                <div className="iconwrap">
                                                    <img src={Image5} width={"32"} height={"20"} alt="Demat Account without Annual Charges" className="img-fluid   " />
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
                                ischeck ?
                       
                            <div className="formwrap d-flex justify-content-end ">
                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                    <DematAccountForm />
                                </GoogleReCaptchaProvider>
                            </div>:
                                <div className="formwrap d-flex justify-content-end">
                                    <DematAccountForm />
                                </div>
                            }
                        </div>

                    </div>
                    <div  className={name}>
                    <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed ">

                        <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{chapterScroll('dematform')}}>Open Free Account</button>
                    
                    </div>
                    </div>
                    
                </div>
            </section>
        </div>

    )
}

export default MinorDematAccountBanner;