
import React from "react";
import { useState } from "react";
import  StckImage  from '../../assets/images/partner/partners-stock-banner.gif';
import  MutualFundsImage  from '../../assets/images/partner/partners-mutual-funds-banner.gif';
import  InsuranceImage  from '../../assets/images/partner/partners-insurance-banner.gif';
import  LoansImage  from '../../assets/images/partner/partners-loans-banner.gif';
import  ImageSub2  from '../../assets/images/icons/stock.svg';
import  ImageSub3  from '../../assets/images/icons/money-bag.svg';
import  ImageSub4  from '../../assets/images/icons/insurance.svg';
import  ImageSub5  from '../../assets/images/icons/loan.svg';




function PartnerBannerTab() {

  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>

        <section className="banner-tabs">
        <div className="container">
            

            <div className="content-tabs">
              <div
                className={toggleState === 1 ? "content  active-content" : "content"}
              >
                  <div className="banner-tab-cont">
                      <div className="tab-cont-left">
                        <div className="heading-sec">
                            <h3 className="title-secnd">Become a Stock Market Agent</h3>
                            <p>Build a great portfolio for the clients through stock market investments.</p>
                        </div>
                        <a href="/" className="btn-bg">Register</a>
                      </div>
                      <div className="tab-cont-right">
                                  <img src={StckImage} alt="Become a Stock Market Agent" width={"521"} height={"453"} />
                      </div>
                  </div>    
              </div>

              <div
                className={toggleState === 2 ? "content  active-content" : "content"}
              >
                <div className="banner-tab-cont">
                      <div className="tab-cont-left">
                        <div className="heading-sec">
                            <h3 className="title-secnd">Become a Mutual Fund Advisort</h3>
                            <p>Help people to achieve financial freedom by selling mutual funds through us.</p>
                        </div>
                        <a href="/" className="btn-bg">Register</a>
                      </div>
                      <div className="tab-cont-right">
                                  <img src={MutualFundsImage} alt="Become a Stock Market Agent" width={"521"} height={"453"}/>
                      </div>
                  </div>
              </div>

              <div
                className={toggleState === 3 ? "content  active-content" : "content"}
              >
                <div className="banner-tab-cont">
                      <div className="tab-cont-left">
                        <div className="heading-sec">
                            <h3 className="title-secnd">Become an Insurance Agent</h3>
                            <p>Assist customers to buy the best insurance which suits all their needs. </p>
                        </div>
                        <a href="/" className="btn-bg">Register</a>
                      </div>
                      <div className="tab-cont-right">
                                  <img src={InsuranceImage} alt="Become a Stock Market Agent" width={"521"} height={"453"}/>
                      </div>
                  </div>
              </div>

              <div
                className={toggleState === 4 ? "content  active-content" : "content"}
              >
                <div className="banner-tab-cont">
                      <div className="tab-cont-left">
                        <div className="heading-sec">
                            <h3 className="title-secnd">Become a Loan Agent</h3>
                            <p>Disburse the loan of different companies at the lowest interest rate & earn a good commission.</p>
                        </div>
                        <a href="/" className="btn-bg">Register</a>
                      </div>
                      <div className="tab-cont-right">
                                  <img src={LoansImage} alt="Become a Stock Market Agent" width={"521"} height={"453"} />
                      </div>
                  </div>
              </div>
            </div>

            <div className="bloc-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                          <img src={ImageSub2} alt="Stocks" width={"70"} height={"71"} />
                <h4>Stocks</h4>
                
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                          <img src={ImageSub3} alt="Mutual Funds" width={"71"} height={"71"} />
                <h4>Mutual Funds</h4>
                
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >

                          <img src={ImageSub4} alt="Insurance" width={"70"} height={"70"}/>
                <h4>Insurance</h4>
                
              </button>
              <button
                className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(4)}
              >
                          <img src={ImageSub5} alt="Loans" width={"70"} height={"71"}/>
                <h4>Loans</h4>
                
              </button>
            </div>
          </div>
        </section>

        

        
    
    </div>
  );
}

export default  PartnerBannerTab;
