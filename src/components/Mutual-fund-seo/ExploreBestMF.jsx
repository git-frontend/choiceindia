import React from "react";
import img1 from '../../assets/images/mutual-funds-investment/tax-saving-mutual-funds.svg'
import img2 from '../../assets/images/mutual-funds-investment/debt-mutual-funds.svg'
import img3 from '../../assets/images/mutual-funds-investment/balanced-mutual-funds.svg'
import img4 from '../../assets/images/mutual-funds-investment/large-cap-mutual-funds.svg'
import img5 from '../../assets/images/mutual-funds-investment/mid-cap-mutual-funds.svg'
import img6 from '../../assets/images/mutual-funds-investment/small-cap-mutual-funds.svg'
import img7 from '../../assets/images/mutual-funds-investment/multi-cap-mutual-funds.svg'
import img8 from '../../assets/images/mutual-funds-investment/liquid-mutual-funds.svg'
import img9 from '../../assets/images/mutual-funds-investment/dividend-yield-mutual-funds.svg'
import img10 from '../../assets/images/mutual-funds-investment/sip-investment.svg'

import LazyLoader from '../Common-features/LazyLoader';
import { Link } from "react-router-dom";
import utils from "../../Services/utils";

function ExploreBestMF() {
/** scroll id view */

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
 

  return (
    <div>
      <section className="explore-best-mf">
        <div className="container">
          <div className="row">
            <div className="col-md-4 best-mf-cont">
              <h2 className="title-first">Variety of Mutual Funds to Invest</h2>
              <p className="mb-5">Experience the convenience and ease in investing with a platform that offers funds across all categories at one place </p>
              <Link to="/top-funds" onClick={() => {
                utils.pushDataLayerEvent({
                  'event': 'mf_explore_more_funds_btn',
                  'page_path': window.location.pathname,
                  'page_url': window.location.href,
                  'lead_source': 'choiceindia',
                  'platform': window.innerWidth < 767 ? 'mobileweb' : 'desktopweb'
              })
              }}><span className="btn-bg btn-bg-dark">Explore more</span></Link>
            </div>
            <div className="col-md-8">
                <div className="best-mf-list">
                    <a className="mf-lis-itm" href="/top-funds/best-elss-tax-saving-mutual-funds">
                        <span className="sm-img-itm">
                          <LazyLoader src={img1} alt={"Tax Saving Mutual Funds"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Tax Saving</h4>
                    </a>
                    <a className="mf-lis-itm" href="/top-funds/best-banking-psu-debt-funds"> 
                        <span className="sm-img-itm">
                          <LazyLoader src={img2} alt={"Debt Mutual Funds"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Debt Funds</h4>
                    </a>
                    <a className="mf-lis-itm" href="/top-funds/best-balanced-mutual-funds">
                        <span className="sm-img-itm">
                          <LazyLoader src={img3} alt={"Balanced Mutual Funds"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Balanced Funds</h4>
                    </a>
                    <a className="mf-lis-itm" href="/top-funds/best-large-cap-mutual-funds">
                        <span className="sm-img-itm">
                          <LazyLoader src={img4} alt={"Large Cap Mutual Funds"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Large Caps</h4>
                    </a>
                    <a className="mf-lis-itm" href="/top-funds/best-mid-cap-mutual-funds">
                        <span className="sm-img-itm">
                          <LazyLoader src={img5} alt={"Mid Cap Mutual Funds"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Mid Caps</h4>
                    </a>
                    <a className="mf-lis-itm" href="/top-funds/best-small-cap-mutual-funds">
                        <span className="sm-img-itm">
                          <LazyLoader src={img6} alt={"Small Cap Mutual Funds"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Small Caps</h4>
                    </a>
                    <a className="mf-lis-itm" href="/top-funds/best-multicap-mutual-funds">
                        <span className="sm-img-itm">
                          <LazyLoader src={img7} alt={"Multi Cap Mutual Funds"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Multi Caps</h4>
                    </a>
                    <a className="mf-lis-itm" href="/top-funds/best-liquid-mutual-funds">
                        <span className="sm-img-itm">
                          <LazyLoader src={img8} alt={"Liquid Mutual Funds"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Liquid Funds</h4>
                    </a>
                    <a className="mf-lis-itm" href="/top-funds/best-sector-mutual-funds">
                        <span className="sm-img-itm">
                          <LazyLoader src={img9} alt={"Dividend Yield Mutual Funds"} className={"img-fluid"} width={"60"} height={"60"} />
                        </span>
                        <h4>Sectoral Funds</h4>
                    </a>
                </div>
            </div>
          </div>
          
        </div>  
      </section>

      <section className="explr-all">
          <div className="container">
              <div className="row">
                  <div className="col-md-12">
                      <div className="explr-sub">
                        <LazyLoader src={img10} alt={"SIP Investment"} className={"img-fluid"} width={"60"} height={"60"} />
                        <h3>Let’s Start SIP to enjoy the joy of earning</h3>
                        <Link to="/mutual-funds-investment"><span onClick={() => { chapterScroll('mutualid')}} className="btn-bg">Start Now</span></Link>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      
    </div>
  );
}

export default ExploreBestMF;
