import React from "react";
import "./css/stratezy-landing-page.scss";
import FaqAccordion from "./StartegyFaq";
import WhyStrategy from "./Whystrategy";
import LazyLoader from "../Common-features/LazyLoader";
import Template2 from "../Common-features/Template2";
import StrategyBanner from "./strategyBanner";
import StrategyBody from "./StrategyBody";

function Strategy() {
  const [skeleton, setSkeleton] = React.useState(() => true);
  const myTimeout = setTimeout(myGreeting, 700);
  function myGreeting() {
    setSkeleton(() => false);
  }

  return (

    skeleton ?

      <Template2 />

      :

      <div>

        <header className="camp-header">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <a href="https://choiceindia.com/" className="camp-logo">
                  {/* <img src="images/stratezy-page/logo.webp" className="img-fluid" alt="Choice-India" /> */}
                  <LazyLoader src={"images/stratezy-page/logo.webp"} alt={"Banner Images"} width={"125"} height={"48"} className={"img-fluid"} />
                  {/* <img src={"images/stratezy-page/logo.webp"} alt={"Banner Images"} width={"125"} height={"48"} className={"img-fluid"} /> */}
                </a>
              </div>
            </div>
          </div>
        </header>
        <main>
          <StrategyBanner></StrategyBanner>
          <WhyStrategy></WhyStrategy>
          <StrategyBody></StrategyBody>
          <FaqAccordion></FaqAccordion>


        </main>
      </div>
  )

}
export default Strategy;