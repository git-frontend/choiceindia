import "./sumeetbagadia.scss"
import BannerTop from '../SumeetBagadia/BannerTop';
import Slidersec from './Slidersec';
import PrintMedia from '../SumeetBagadia/PrintMedia';
import SocialConnect from "../SumeetBagadia/SocialConnect";
import Template2 from '../Common-features/Template2';
import { Link } from "react-router-dom";
import meta_tags from "../../Data/MetaTags";
import { useState,useEffect} from "react";

function SumeetBagadia() {
  const [skeleton, setSkeleton] = useState(() => true);
  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  function scrollToId(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }

  const [rendercount, setRenderCount] = useState(() => false);

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if(!(document.getElementById('link1')==null)){
        document.getElementById('link1').remove();
      document.getElementById('link2').remove();
      document.getElementById('link3').remove();
      document.getElementById('link4').remove();
      document.getElementById('link5').remove();
      document.getElementById('link6').remove();
      
      }
    }
  }, [rendercount])
  return (
    <div>

      {
        skeleton ? <Template2 /> :
          <div className="sumeet-bagadia-parent">
            <BannerTop />
            <section className="about-cont">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="abt-cont-des">
                      <div className="article">
                        <input type="checkbox" className="read-more-state" id="post-1" />

                        <p className="read-more-wrap">Mr <strong>Sumeet Bagadia</strong>  is an MBA in Finance with over 15+ years of experience in the Indian Capital Markets. He is sought by print and electronic media as well as wire services on a regular basis for his views on Equities, Commodities as well as the Currencies Market. His sheer determination and hard work, coupled with his innate talent to spot market opportunities; has made the Choice - Technical Research Desk, one of the most sought after in the financial markets. <span className="read-more-target">Expertise that you can leverage. His core expertise lies in identifying support and resistance levels, short-term positional calls, mid-cap momentum and stock as well as sector-specific strategies. The well-rounded strategies shared by him focus on long-term as well as short-term goals and can be leveraged by both investors and traders. He possesses hands-on knowledge on Fibonacci Ratio, Relative Strength Index, Open Interest Analysis, Trend Termination, Continuation Pattern Identification, Hedging Strategies, Price and Candlestick Patterns, Momentum Indicators, Channel, Bands, FII Data Analysis, Moving Averages, Indicator Analysis, Rollover Analysis and Option Strategies; to name a few!</span></p>

                        <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                      </div>


                      <div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Slidersec />
            <section className="sumit-bg-acnt">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="bg-acnt-sub">
                      <h2 className="title-sm-new">
                        Sign up for exclusive trading tips from Sumeet Bagadia?
                      </h2>
                      <Link to="/sumeet-bagadia"  onClick={()=>scrollToId('dematform')}><div className="btn-bg btn-bg-dark acnt-sub-btn">Open My Account</div></Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <PrintMedia />
            <SocialConnect />
            <section className="sumit-bg-tips">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="bg-acnt-sub">
                      <h2 className="title-sm-new">
                        Get Sumeet Bagadia's trading tips and recommendations?
                      </h2>
                      <a onClick={()=>scrollToId('dematform')}><div className="btn-bg acnt-sub-btn cursor-pointer">Sign up</div></a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            </div>
      }
    </div>
  );
}

export default SumeetBagadia;
