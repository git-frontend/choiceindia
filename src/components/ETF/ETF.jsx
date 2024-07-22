import React, { useState, useRef, useEffect } from "react";
import "./css/landingpage.scss";
import img_data from './ImgData.js';
import DematAccountForm from "../Common-features/DematAccountForm";
import OpenDemateAccountStickyFooter from "../Common-features/OpenDemateAccountStickyFooter";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Template2 from "../Common-features/Template2";
import { useLocation } from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import etfimage from "../../assets/images/etf-vs-mutual-funds.webp";
import etfindeximage from "../../assets/images/index-fund-vs-etf.webp";
import invesrtetf from "../../assets/images/how-to-invest-in-etf-online.webp";
import Slider from 'react-slick';
function ETF() {
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
  var UTMCampaign = useRef('');
  var UTMMedium = useRef('');
  var UTMSource = useRef('');
  var refercode = useRef('');

  /**to set the skeleton */
  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

  const location = useLocation();

  const [view, setView] = useState({
    matches: window.innerWidth < 768 ? false : true,
  });



  const settings = {
    infinite: true,
    speed: 1500,
    arrows: false,
    slidesToShow: 1,
    autoplay: true,
    dots: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,

  };



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



  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)



  function DelayloadingImages() {
    var imgDiv;
    img_data.forEach((item) => {
      imgDiv = document.getElementById(item.id);
      if (imgDiv)
        imgDiv.innerHTML = item.img
    })
  }

  useEffect(() => {
    setTimeout(DelayloadingImages, 900);
    let mediaQuery = window.matchMedia("(min-width: 770px)");
    mediaQuery.addListener(setView);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setView);


  }, [])


  function fetchQueryParams() {
    const queryParam = window.location.search;
    const params = new URLSearchParams(queryParam);
    UTMCampaign.current = params.get('utm_campaign') || '';
    UTMMedium.current = params.get('utm_medium') || '';
    UTMSource.current = params.get('utm_source') || '';
    refercode.current = (params.get('refercode') && atob(params.get('refercode'))) || '';
  }


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

  return (
    <div className="Home" id="root">
      <div>
        {
          skeleton ?
            <Template2 />
            :
            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
        <main>
        
            <section className="bannersection etf-banner">
                <div className="container">
                  <div className="row  align-items-center">
                    <div className="col-md-7">
                      <h1 className="title text-center">ETF – A Beginner's Guide</h1>

                      <hr />

                      <div className="bannertext">
                        <p>When looking for investment opportunities, you might come across ETFs that are considered passive mutual funds. They offer tremendous advantages, like liquidity, portfolio diversification, and wealth creation.
                        </p>
                        <p>However, to make your investments successful, you need to understand the details. These include its types, selection process, and investment processes.</p>
                        <p>To help you with the same, this article briefs you on the key differences between ETFs from other investment options like mutual funds and stocks. Let's begin!</p>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="rightsec">
                        <div className="popmd">

                          <DematAccountForm></DematAccountForm>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
            </section>
              <section className="tablecontent" id="showForm">
                <div className="container">
                  <div className="row  align-items-center">
                    <div className="col-md-12" id="fablesdetail-title">
                      <h2 className="title">Table of Content</h2>
                    </div>
                    {
                      view && !view.matches ?

                        <Slider {...settings} className="same-bx-list">

                          <a className="same-bx-item" onClick={() => { chapterScroll('ChapterOne') }} >
                            <div className="item-cont">
                              <span id="chapter-one-img">

                              </span>
                              <h4>Chapter 1</h4>
                              <p>What is an ETF?</p>
                            </div>
                          </a>
                          <a className="same-bx-item" onClick={() => { chapterScroll('ChapterTwo') }}>
                            <div className="item-cont">
                              <span id="chapter-two-img">

                              </span>
                              <h4>Chapter 2</h4>
                              <p>Types of ETFs in India</p>
                            </div>
                          </a>
                          <a className="same-bx-item" onClick={() => { chapterScroll('ChapterThree') }}>
                            <div className="item-cont">
                              <span id="chapter-three-img">

                              </span>
                              <h4>Chapter 3</h4>
                              <p>ETF vs Stock</p>
                            </div>
                          </a>
                          <a className="same-bx-item" onClick={() => { chapterScroll('ChapterFour') }}>
                            <div className="item-cont">
                              <span id="chapter-four-img">

                              </span>
                              <h4>Chapter 4</h4>
                              <p>ETF vs Mutual Fund</p>
                            </div>
                          </a>
                          <a className="same-bx-item" onClick={() => { chapterScroll('ChapterFive') }}>
                            <div className="item-cont">
                              <span id="chapter-five-img">

                              </span>
                              <h4>Chapter 5</h4>
                              <p>ETF vs Index Fund</p>
                            </div>
                          </a>
                          <a className="same-bx-item" onClick={() => { chapterScroll('ChapterSix') }}>
                            <div className="item-cont">
                              <span id="chapter-six-img">

                              </span>
                              <h4>Chapter 6</h4>
                              <p>How to Invest in an ETF in India?</p>
                            </div>
                          </a>
                          <a className="same-bx-item" onClick={() => { chapterScroll('ChapterSeven') }}>
                            <div className="item-cont">
                              <span id="chapter-seven-img">

                              </span>
                              <h4>Chapter 7</h4>
                              <p>How to Select an ETF</p>
                            </div>
                          </a>
                          <a className="same-bx-item" onClick={() => { chapterScroll('ChapterEight') }}>
                            <div className="item-cont">
                              <span id="chapter-eight-img">

                              </span>
                              <h4>Chapter 8</h4>
                              <p>Best ETF to Invest in India</p>
                            </div>
                          </a>
                        </Slider> :
                          <div className="same-bx-list">
                            {/* href="#ChapterOne" */}
                            <a className="same-bx-item" onClick={() => { chapterScroll('ChapterOne') }} >
                              <div className="item-cont">
                                <span id="chapter-one-img">

                                </span>
                                <h4>Chapter 1</h4>
                                <p>What is an ETF?</p>
                              </div>
                            </a>
                            <a className="same-bx-item" onClick={() => { chapterScroll('ChapterTwo') }}>
                              <div className="item-cont">
                                <span id="chapter-two-img">

                                </span>
                                <h4>Chapter 2</h4>
                                <p>Types of ETFs in India</p>
                              </div>
                            </a>
                            <a className="same-bx-item" onClick={() => { chapterScroll('ChapterThree') }}>
                              <div className="item-cont">
                                <span id="chapter-three-img">

                                </span>
                                <h4>Chapter 3</h4>
                                <p>ETF vs Stock</p>
                              </div>
                            </a>
                            <a className="same-bx-item" onClick={() => { chapterScroll('ChapterFour') }}>
                              <div className="item-cont">
                                <span id="chapter-four-img">

                                </span>
                                <h4>Chapter 4</h4>
                                <p>ETF vs Mutual Fund</p>
                              </div>
                            </a>
                            <a className="same-bx-item" onClick={() => { chapterScroll('ChapterFive') }}>
                              <div className="item-cont">
                                <span id="chapter-five-img">

                                </span>
                                <h4>Chapter 5</h4>
                                <p>ETF vs Index Fund</p>
                              </div>
                            </a>
                            <a className="same-bx-item" onClick={() => { chapterScroll('ChapterSix') }}>
                              <div className="item-cont">
                                <span id="chapter-six-img">

                                </span>
                                <h4>Chapter 6</h4>
                                <p>How to Invest in an ETF in India?</p>
                              </div>
                            </a>
                            <a className="same-bx-item" onClick={() => { chapterScroll('ChapterSeven') }}>
                              <div className="item-cont">
                                <span id="chapter-seven-img">

                                </span>
                                <h4>Chapter 7</h4>
                                <p>How to Select an ETF</p>
                              </div>
                            </a>
                            <a className="same-bx-item" onClick={() => { chapterScroll('ChapterEight') }}>
                              <div className="item-cont">
                                <span id="chapter-eight-img">

                                </span>
                                <h4>Chapter 8</h4>
                                <p>Best ETF to Invest in India</p>
                              </div>
                            </a>
                          </div>
}

                  </div>
                </div>
              </section>

              <section className='dematacount'>
                <div className='container'>
                  <div className='row' id="ChapterOne">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 1</p>
                      <h2 className="title">What is an ETF?</h2>
                      <div className='row  pb52'>
                        <div className='col-md-6' id="best-demat-img">
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>The first question that pops up in your mind is, "what is ETF in stock market?"</p>
                          <p className='subtext'>
                            Well, ETF meaning, i.e., the ETF full form is exchange traded funds, which is a pool of securities. These ETF funds let you trade these securities on the stock market. Most of the funds are registered and accredited by the Securities and Exchange Board of India (SEBI).
                          </p>

                        </div>
                      </div>
                      <div className="">
                        <p className='subheadtxt'>To elaborate, these funds can track indices like Sensex or Nifty and are different from other investments as you can use them to track a specific index, commodity, or multiple assets. ETF funds might also contain several investments, including commodities, bonds, and stocks. So, the price of the ETF will depend on the underlying assets.</p>
                        <p className='subheadtxt'>Simply put, they're traded on the stock market like mutual funds.</p>
                        <ul class="bullet">
                          <li>
                            <p className="subheadtxt">These funds are listed on all major stock markets, and you can trade them according to your investment appetite.</p>
                          </li>
                          <li>
                            <p className="subheadtxt">You will receive assistance from a fund manager who will trade these shares during the equity trading period.</p>
                          </li>
                          <li>
                            <p className="subheadtxt">The professional can actively manage the ETF according to the market conditions and probable investment risks.</p>
                          </li>
                        </ul>
                        <p className='subheadtxt'>Additionally, if you or your fund manager passively manage the ETF, it's best to follow the market trends of particular indices and invest only in the most profitable companies.</p>
                      </div>
                      <hr className='m52' />
                    </div>

                  </div>

                  <div className='row' id="ChapterTwo">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 2</p>
                      <h2 className="title">Types of ETFs in India</h2>
                      <div className='row pb52'>
                        <div className='col-md-6' id="how-does-img">
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>The types of ETF in India include equity, gold, and ETF Fund of Funds. Let's delve into each!</p>

                        </div>
                      </div>

                      <div>
                        <h3 className='subhead'>Equity ETF</h3>
                        <p className='subheadtxt'>These are similar to company stocks which you can buy or sell according to the current market prices. They are popular as they help you track stock index performances and a collection of stocks from a specific sector.</p>
                        <p className='subheadtxt'>The ultimate goal of this fund is to match its benchmark index's performance. In addition, equity funds are famous for offering maximum transparency and cost-effectiveness during trades.</p>
                        <p className='subheadtxt'>Furthermore, equity funds are suitable for investors looking for diversification and liquidity. They are further divided into factor-based, market cap-based, and sector equity funds.</p>

                      </div>
                      <div>
                        <h3 className='subhead'>Commodity ETF</h3>
                        <p className='subheadtxt'>This is a commodity-based fund that helps you invest in assets like silver and gold. Being passively managed, it can track the underlying index. You must also note that, as the net asset value of any commodity ETF frequently changes throughout the day, the ETF experiences price fluctuations.</p>
                        <p className='subheadtxt'>Additionally, these ETFs invest in multiple commodities, such as natural resources and agricultural products. So, the fund invests in a particular commodity that is physically stored or in commodity futures contracts.</p>
                        <p className='subheadtxt'> So, a commodity ETF will suit you if you're an aggressive investor and preparing a fund for handling inflation. Moreover, you will receive sufficient exposure in communities without buying derivatives contracts or futures.</p>

                      </div>
                      <div>
                        <h3 className='subhead'>ETF Fund of Funds</h3>
                        <p className='subheadtxt'>These funds help users invest in other mutual funds.</p>
                        <p className='subheadtxt'>Instead of holding company bonds or shares, these equity funds comprise units of other mutual funds. So, by utilising these funds, you can invest in other ETFs provided by asset management companies.</p>
                        <p className='subheadtxt'>
                          Additionally, for investing in this type of fund, you need to purchase units of the ETF FoFs, like other mutual fund schemes. But you won't need to open a Demat account for this.
                        </p>
                        <p className='subheadtxt'>So, all in all, the primary reason you might select this type of ETF is portfolio diversification by investing in multiple categories.</p>

                      </div>
                      <div>
                        <h3 className='subhead'>Gold ETF</h3>
                        <p className='subheadtxt'>Gold ETF is an excellent investment option for beginners that lets you invest your money in gold bullion. As you're not investing in real gold, the risks are low in this equity fund.</p>
                        <p className='subheadtxt'>These funds work like stocks, and you can conveniently treat them on the stock exchange. Here, the fund will represent physical gold in paper and dematerialised forms. So, these funds will be ideal if you wish to track gold's price in real-time and improve your income.</p>

                      </div>
                      <hr className='m52' />
                    </div>

                  </div>
                  <div className='row' id="ChapterThree">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 3</p>
                      <h2 className="title">ETF vs Stock</h2>
                      <div className='row pb25'>
                        <div className='col-md-6' id="account-type-img">
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>When investing in ETFs, you might want to understand how it's better than market stocks.</p>
                          <p className='subtext'>
                            To elaborate on the same, the primary difference is ETFs are a collection of investments, whereas stocks are a single financial instrument. Stocks are also called shares that companies issue to improve their funds. So, if you are purchasing a stock, you're investing in a particular company.
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className='subheadtxt'>You can also purchase multiple stocks of the company. When the stock prices and the company's business performance improves, you can sell the stocks to earn profits.</p>
                        <p className='subheadtxt'>However, in an ETF, your fund manager can select stocks of a particular category of companies for your financial benefit. So, ETFs act as a complete investment market, where you don't have to choose stocks on your own.</p>
                        <p className='subheadtxt'>Let's understand the differences between ETF vs Stock.</p>
                        <h3 className='subhead'>Risk</h3>
                        <p className='subheadtxt'>ETFs are less risky as you invest your capital in several securities, which reduces the chances of a huge financial loss. The ratio of investment risk is high in stocks, as these shares belong to a particular company. So, the stock prices rise or fall according to the company's financial situation.</p>

                      </div>
                      <div>
                        <h3 className='subhead'>Fund Selection and Operation</h3>
                        <p className='subheadtxt'>Your dedicated fund manager will select ETFs as per their market prices. It makes the process hassle-free and saves you time. On the other hand, for stocks, you need to analyse the market trajectory and select them yourself. Furthermore, you'll decide when to buy or sell them.</p>

                      </div>
                      <div>
                        <h3 className='subhead'>Liquidity</h3>
                        <p className='subheadtxt'>It's convenient to liquidate ETFs as you can purchase or sell them at will, while you can liquidate stocks according to the company issuing the shares. However, the company must be financially stable for liquidation.</p>

                      </div>

                      <hr className='m52' />
                    </div>

                  </div>
                  <div className='row' id="ChapterFour">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 4</p>
                      <h2 className="title">ETF vs Mutual Fund</h2>
                      <div className='row'>
                        <div className='col-md-6' id="account-benefits-img">
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>The main difference between an ETF and mutual funds is how they are purchased and sold. You can easily buy or sell ETFs on the stock exchange. However, you can only buy a mutual fund unit from an asset management company or a fund house.</p>
                          <p className='subtext'>
                            ETFs and mutual funds involve a fund manager and have a net asset value (NAV). But you can not trade mutual funds on the stock exchange like ETFs. In both cases, the fund manager might make investment decisions on your behalf. This will help you gain better returns if you've just started investing.
                          </p>
                        </div>
                      </div>

                      <div>
                        <p className='subheadtxt'>So, you must place an order with the fund house while buying or selling mutual funds. Its NAV determines the market price of the fund. However, the market price of an ETF can change all day, and you can analyse it in real time.</p>
                        <img src={etfimage} className="img-fluid" alt="Mutual Fund vs ETF" />

                        <p className='subheadtxt'>Let's delve into a few more additional differences between ETFs and mutual funds to understand this better:</p>
                        <h3 className="subhead">Management Fees</h3>
                        <p className='subheadtxt'>You won't require active portfolio management for ETFs as the funds mimic the index's performance. So, the management fees are comparatively low. Your fund manager will take most of the important decisions here.</p>
                        <p className='subheadtxt'>As mutual funds are actively managed, they have operational and management fees higher than ETFs. It might not be cost-effective for many investors. Moreover, these funds have higher expense ratios than ETFs.</p>

                      </div>
                      <div>
                        <h3 className="subhead">Portfolio Transfer</h3>
                        <p className='subheadtxt'>ETFs are considered very portable investments as you can conveniently transfer your portfolio to a different investment firm.</p>
                        <p className='subheadtxt'>For mutual funds, however, transferring your investment portfolio can be a little difficult. Before transferring the portfolio to another investment firm, you need to close the fund positions.</p>

                      </div>
                      <div>
                        <h3 className="subhead">Lock-In Period</h3>
                        <p className='subheadtxt'>ETFs do not have any lock-in period, and you are free to sell the funds whenever you want. However, mutual funds usually have a fixed lock-in period, before which you cannot sell them. </p>
                        <p className='subheadtxt'>For instance, ELSS mutual funds have a lock-in period of 3 years, which is calculated from the date of investment. However, you can liquidate the funds during this period if needed. On the contrary, there are close-ended mutual funds where liquidation is impossible before the lock-in period ends.</p>
                        <p className='subheadtxt'>Most mutual funds charge an exit load fee of around 1% for liquidating funds before 1 year. So, these expenses make mutual funds more expensive than ETFs.</p>

                      </div>

                      <hr className='m52' />
                    </div>

                  </div>
                  <div className='row' id="ChapterFive">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 5</p>
                      <h2 className="title">ETF vs Index Fund</h2>
                      <div className='row pb25'>
                        <div className='col-md-6' id="demat-features-img">
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>ETFs and index funds are investment strategies where your fund manager can make investment decisions on your behalf. But, to understand <strong>ETFs vs index funds</strong>, you need to delve into the details of index funds.</p>
                          <p className='subtext'>You can invest in securities, including bonds, commodities, and shares, with index funds. In addition, most of these funds trade according to indices like the SENSEX 100. You can invest in these funds easily and explore risky shares.</p>
                        </div>
                      </div>

                      <div>
                        <p className='subheadtxt'>As index funds ensure your investment doesn't go below the benchmark, you might receive a better ROI. This will also let you properly analyse your risk appetite and make better investment decisions.</p>
                        <img src={etfindeximage} className="img-fluid" alt="Mutual Fund vs ETF" />
                        <p className='subheadtxt mt-5'>However, the most significant difference between an index fund and an ETF is the times when you can trade them. You can trade index funds at a specific price when the trading day ends. For ETFs, you can only read them during the day.</p>
                        <p className='subheadtxt'>To understand which one is perfectly suitable for you, check out the list of differences below:</p>
                        <h3 className="subhead">Minimum Investment</h3>
                        <p className='subheadtxt'>The minimum investment for purchasing an ETF is relatively low. In most cases, you will only need to spend the amount needed to purchase a share. For index funds, the minimum investment is a bit high and will vary according to the broker you select. That's why they have higher expense ratios than exchange traded funds.</p>
                      </div>
                      <div>
                        <h3 className="subhead">Demat Account</h3>
                        <p className='subheadtxt'>You have to <a href="https://choiceindia.com/open-free-demat-account" className='linking'>open a Demat account</a> to trade ETFs. However, you don't need one for trading index funds.</p>
                      </div>
                      <div>
                        <h3 className="subhead">Liquidity</h3>
                        <p className='subheadtxt'>The liquidity of an exchange traded fund depends on the share market. So, if there aren't any buyers, you can't sell your funds to receive cash. But, in the case of index funds, when you invest, the mutual fund firm adds your investment to their AUM (assets under management). You won't face any hassles in terms of liquidity.</p>
                      </div>

                      <hr className='m52' />
                    </div>

                  </div>
                  <div className='row' id="ChapterSix">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 6</p>
                      <h2 className="title">How to Invest in an ETF in India?</h2>
                      <div className='row pb52'>
                        <div className='col-md-6' id="how-to-open-demat-img">
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>If you're searching online for "<strong>How to Invest In ETF in India?</strong>" The steps are similar to purchasing/selling shares on the stock market. You can either do it yourself online or hire an experienced stockbroker to make the decisions for you.</p>
                          <p className='subtext'>
                            To begin the transactions, you will need a Demat or trading account. Here are the steps to opening a Demat account:
                          </p>
                        </div>
                      </div>

                      <div>
                        <ul className='bullet'>
                          <li>

                            <p className='subheadtxt'>Open an <a href="https://choiceindia.com/open-free-demat-account" className='linking'>online free Demat account with Choice</a>.</p>

                          </li>
                          <li>

                            <p className='subheadtxt'><a
                              href='https://choiceindia.com/blog/demat-account-opening-form/' className='linking'>Open a trading account online</a> with a Choice and link it to the Demat account.</p>

                          </li>
                          <li>
                            <p className='subheadtxt'> After completing the account linking process, you can choose an ETF and start investing.</p>


                          </li>
                        </ul>

                      </div>
                      <img src={invesrtetf} className="img-fluid" alt="Mutual Fund vs ETF" />
                      <div>

                        <p className='subheadtxt mt-4 mb0'>For opening both accounts, you will require the following essential documents: </p>
                        <ul className='bullet'>
                          <li>
                            <p className='subheadtxt'>Your PAN card or Aadhar card is your identity proof.</p>
                          </li>
                          <li>
                            <p className='subheadtxt'>Address proof, such as your passport or electricity bill.</p>
                          </li>
                          <li>
                            <p className='subheadtxt'>Bank account proof like your passbook or a cancelled cheque</p>
                          </li>
                        </ul>
                        <p className='subheadtxt'>Remember that having a Demat and a trading account is compulsory to begin ETF investments. So, make sure you check the quality of the online trading platform before registering. Additionally, check for online reviews, testimonials, or suggestions from other traders.</p>
                        <p className='subheadtxt'>Furthermore, if you are a beginner in the world of investments, starting with a dedicated fund manager is recommended. You can search online for experienced professionals who will help you improve your wealth and limit financial losses.</p>
                        <p className='subheadtxt'>Begin by investing in ETF units through your online brokerage account or by telephonic mode. Moreover, you can contact your stock broker and place your order on your preferred fund. Or you can take the help of Choice's research team before investing in ETFs or any <a href='https://choiceindia.com/blog/how-to-start-stock-market-investment/'
                          className='linking'>stock market investment</a>.</p>
                      </div>


                      <hr className='m52' />
                    </div>

                  </div>


                  <div className='row' id="ChapterSeven">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 7</p>
                      <h2 className="title">How to Select an ETF</h2>
                      <div className='row pb52'>
                        <div className='col-md-6' id="best-demat-img-seven" >
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>By now, you would have understood the initial processes of <a href="https://choiceindia.com/open-brokerage-account" className="linking">opening a brokerage account</a> and making investments. Subsequently, the next most important step you need to understand is how to select an ETF.</p>

                        </div>
                      </div>

                      <div>
                        <p className='subheadtxt'> You need to understand the associated expense ratio, trading volume, fees, and tracking errors. To help you with the same, this section will explain the various factors in detail.</p>

                        <h3 className="subhead">Age of the Funds</h3>

                        <p className='subheadtxt'>Fund houses introduce new ETFs every year to offer better investment options to users. As these ETF options keep piling up, collecting historical data about their financial performance becomes difficult.</p>
                        <p className='subheadtxt'>That's why you need to select recently introduced funds and have historical data available. This way, you can analyse the funds by keeping in mind their past performances. This will help you improve your chances of obtaining better returns in the future.</p>



                      </div>
                      <div>
                        <h3 className="subhead">Expenses</h3>
                        <p className='subheadtxt'>You also have to understand the expenses associated with purchasing and selling the funds you prefer. So, talk to your manager about the expense ratio and <a href="https://choiceindia.com/brokerage-charges" className="linking">brokerage fees</a>.</p>
                        <p className='subheadtxt'>It is also important to consider the expense ratios of two similar ETFs.</p>
                        <p className='subheadtxt'>To do so, you need to check the expense ratios set by the fund house for these funds.</p>
                      </div>
                      <div>
                        <h3 className="subhead">Trading Volumes</h3>
                        <p className='subheadtxt'>To conveniently trade ETF units, you need to check whether they are currently in demand in the market. It will help you improve your returns and build wealth. To do so, you have to understand the trade volume of an ETF before investing in it.</p>
                        <p className='subheadtxt'>ETFs with a good trading volume offer better liquidity and convenience. Moreover, purchasing and selling these funds is easier.</p>
                      </div>
                      <div>
                        <h3 className="subhead">Tracking Error</h3>
                        <p className='subheadtxt'>If the ETF you choose tracks a particular index, your fund manager will try purchasing securities to match the funds returned by the underlying index. During this process, there might be a difference between the returns from the index and the ETF. It is called a tracking error.</p>
                        <p className='subheadtxt'>Hence, you must select funds having a low tracking error to boost your income.</p>
                      </div>


                      <hr className='m52' />
                    </div>

                  </div>
                  <div className='row' id="ChapterEight">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 8</p>
                      <h2 className="title">Best ETF to Invest in India</h2>
                      <div className='row pb52'>
                        <div className='col-md-6' id="how-to-use-demat-img">
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>After understanding the basics of selecting ETFs for investment, you might feel well-prepared. But, hold on, as you still have to check out the best ETF to invest in India. They are as follows:</p>

                        </div>
                      </div>

                      <div>
                        <ul className='bullet'>
                          <li>
                            <p className='subheadtxt'>IDBI Gold ETF (G)</p>
                          </li>
                          <li>
                            <p className='subheadtxt'>Edelweiss ETF Nifty Bank (G) </p>
                          </li>
                          <li>
                            <p className='subheadtxt'>Invesco India Nifty ETF (G)</p>
                          </li>
                          <li>
                            <p className='subheadtxt'>BHARAT Bond ETF April 2030 (G)</p>
                          </li>
                          <li>
                            <p className='subheadtxt'>Nippon India ETF Sensex (G) </p>
                          </li>
                          <li>
                            <p className='subheadtxt'>ICICI Prudential Sensex ETF (G)</p>
                          </li>
                          <li>
                            <p className='subheadtxt'>HDFC Sensex ETF (G) </p>
                          </li>
                          <li>
                            <p className='subheadtxt'>Kotak Sensex Exchange Traded Scheme (G)</p>
                          </li>
                          <li>
                            <p className='subheadtxt'>SBI ETF Sensex Next 50 (G)</p>
                          </li>
                        </ul>
                        <p className='subheadtxt'>Whether you are a seasoned trader or a newbie, you must consult your fund manager or stock broker before selecting these. They will guide you with the latest information on the best ETFs in India and the possible risks. </p>
                      </div>
                      <div>
                        <h3 className="subhead">The Bottom Line</h3>
                        <p className='subheadtxt'>ETFs allow you to gain exposure to investing in multiple investment avenues. You gain a better understanding of the market prices, risk factors, associated expenses, and tracking errors.</p>
                        <p className='subheadtxt'>So, even if you feel the learning curve for ETF investment is high, it's beneficial for you in the long run. That is because you can diversify your portfolio and learn to analyse historical financial data.</p>
                        <p className='subheadtxt'>However, like any other investment option, you need to understand your risk-taking appetite. Try not to invest a substantial amount without backup.</p>
                        <p className='subheadtxt'>To sum it up, do your research properly and invest wisely.</p>
                      </div>

                      <hr className='m52' />
                    </div>

                  </div>


                </div>

              </section>

              <section className="stickybottom">
              
                <OpenDemateAccountStickyFooter></OpenDemateAccountStickyFooter>
                

              </section>
              <div className={name}>
                <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                    <button className="primary-orange-btn scroll-top-account btn-bg btn-bg-dark openbtn"  onClick={()=>{chapterScroll('dematform')}}>Open Free Account</button>
                </div> 
              </div>
            </main>
            </GoogleReCaptchaProvider>
        }
      </div>


    </div>
  )
}




export default ETF;
