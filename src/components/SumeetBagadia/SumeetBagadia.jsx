import "./sumeetbagadia.scss"
import BannerTop from '../SumeetBagadia/BannerTop';
import Slidersec from './Slidersec';
import PrintMedia from '../SumeetBagadia/PrintMedia';
import SocialConnect from "../SumeetBagadia/SocialConnect";
import { useState } from "react";
import Template2 from '../Common-features/Template2';

function SumeetBagadia() {

  const [skeleton, setSkeleton] = useState(() => true);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

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
                        <input type="checkbox" class="read-more-state" id="post-1" />

                        <p class="read-more-wrap">Mr <strong>Sumeet Bagadia</strong>  is an MBA in Finance with over 15+ years of experience in the Indian Capital Markets. He is sought by print and electronic media as well as wire services on a regular basis for his views on Equities, Commodities as well as the Currencies Market. His sheer determination and hard work, coupled with his innate talent to spot market opportunities; has made the Choice Broking - Technical Research Desk, one of the most sought after in the financial markets. <span class="read-more-target">Expertise that you can leverage. His core expertise lies in identifying support and resistance levels, short-term positional calls, mid-cap momentum and stock as well as sector-specific strategies. The well-rounded strategies shared by him focus on long-term as well as short-term goals and can be leveraged by both investors and traders. He possesses hands-on knowledge on Fibonacci Ratio, Relative Strength Index, Open Interest Analysis, Trend Termination, Continuation Pattern Identification, Hedging Strategies, Price and Candlestick Patterns, Momentum Indicators, Channel, Bands, FII Data Analysis, Moving Averages, Indicator Analysis, Rollover Analysis and Option Strategies; to name a few!</span></p>

                        <label for="post-1" class="read-more-trigger moreless-button"></label>
                      </div>


                      <div>

                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>

            <Slidersec />

            <section class="sumit-bg-acnt">
              <div class="container">
                <div class="row">
                  <div class="col-md-12">
                    <div class="bg-acnt-sub">
                      <h3 class="title-sm-new">
                        Sign up for exclusive trading tips from Sumeet Bagadia?
                      </h3>
                      <a href="#home-bg" class="btn-bg btn-bg-dark acnt-sub-btn">Open My Account</a>
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
                      <h3 className="title-sm-new">
                        Get Sumeet Bagadia's trading tips and recommendations?
                      </h3>
                      <a href="#home-bg" className="btn-bg acnt-sub-btn">Sign up</a>
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
