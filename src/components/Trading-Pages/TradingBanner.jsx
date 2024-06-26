import {useEffect,useState} from 'react';
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import LazyLoader from '../Common-features/LazyLoader';

function TradingBanner({data}) {
    const[ischeck,setIscheck]=useState(false);
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
    <>
        <section className="banner-sect" onMouseOver={()=>setIscheck(true)}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-6">
                        <div>
                            <span className="banner-title2">All in 1 Account</span>
                            <h1 className="banner-title" >
                            <div className="desktop" dangerouslySetInnerHTML={{ __html: data[0].title }}></div>
                            </h1>
                        </div>
                        <div className="banner-txt">
                            <div className="row mbrespflex">
                                {
                                        data.map((response, index) =>{
                                            return(
                                                        <div className="col-xl-5 col-md-6">
                                                        <div className="bannerbox" key={index}>
                                                <div className="respgrid">
                                                    <div className="iconwrap">
                                                    <LazyLoader src={response.bannerIcon} className={'img-fluid'} width={"30"} height={"30"} alt={response.bannerAlt} />
                                                    </div>
                                                </div>
                                                <div className="resptext">
                                                    <p>{response.iconText}</p>
                                                </div>
                                            </div>
                                                        </div>
                                                    )
                                        })
                                    }
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
                    <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                        <button className=" primary-orange-btn scroll-top-account openbtn"  onClick={()=>{chapterScroll('dematform')}}>{data[0].bannerIconText}</button>
                    </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default TradingBanner
