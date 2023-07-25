import React,{useState,useRef, useEffect}from "react";
import "./css/landingpage.scss";
import img_data from './ImgData.js';
import DematAccountForm from "../Common-features/DematAccountForm";
import OpenDemateAccountStickyFooter from "../Common-features/OpenDemateAccountStickyFooter";
import Template2 from "../Common-features/Template2";
import{ useLocation} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Slider from "react-slick";
function Opendemat(){
  var UTMCampaign = useRef('');
  var UTMMedium = useRef('');
  var UTMSource = useRef('');
  var refercode = useRef('');

  /**to set the skeleton */
  const [skeleton, setSkeleton] =useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);
  const[ischeck,setIscheck]=useState(false);
  const location = useLocation();
  const [view, setView] = useState({
    matches: window.innerWidth < 768 ? false : true,
  });

  

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
      document.body.appendChild(doc.getElementsByTagName('script')[0]||[]? doc.getElementsByTagName('script')[0]||[]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
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

  }, [])
  


  function fetchQueryParams() {
    const queryParam = window.location.search;
    const params = new URLSearchParams(queryParam);
    UTMCampaign.current = params.get('utm_campaign') || '';
    UTMMedium.current = params.get('utm_medium') || '';
    UTMSource.current = params.get('utm_source') || '';
    refercode.current = (params.get('refercode') && atob(params.get('refercode'))) || '';
  }


  function chapterScrolln(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
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
  useEffect(() => {
    setTimeout(DelayloadingImages, 900);
    let mediaQuery = window.matchMedia("(min-width: 770px)");
    mediaQuery.addListener(setView);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setView);


  }, [])
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

  return (
    <div className="Home" id="root">
      <div>
        {
          skeleton ?
        <Template2 />
         :
            <main>
              <section className="bannersection" onMouseOver={()=>setIscheck(true)}>
                <div className="container">
                  <div className="row  align-items-center">
                    <div className="col-md-7">
                      <h1 className="title text-center">Demat Account</h1>

                      <p className="para">A Perfect Guide for Beginners</p>
                      <hr />

                      <div className="bannertext">
                        <p>In India, any person who wants to invest or trade securities like stocks, mutual funds and bonds must&nbsp;
                           <a href="https://choiceindia.com/open-free-demat-account" className="linking">open a Demat account</a>.
                        </p>
                        <p>Demat account is necessary to start your investment journey into the stock market.</p>
                        <p>Get a comprehensive understanding of Demat accounts with our guide. Explore topics like What is a Demat account, How it works, Types of Demat accounts, and more. Start learning now!</p>
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="rightsec">
                        <div className="popmd">
                        {
                          ischeck ?
                          <div>
                            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                              <DematAccountForm />
                            </GoogleReCaptchaProvider>
                          </div>:
                          <div>
                            <DematAccountForm />
                          </div>
                            }
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={name}>
                    <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                        <button className=" primary-orange-btn scroll-top-account btn-bg btn-bg-dark openbtn"  onClick={()=>{chapterScrolln('dematform')}}>Open Free Account</button>
                    </div>
                    </div>
                </div>
              </section>
              <section className="tablecontent" id="showForm">
                <div className="container">
                  <div className="row  align-items-center">
                    <div className="col-md-12">
                      <h2 className="title">Table of Content</h2>
                    </div>

                    <div className="col-md-12">
                    {
                      view && !view.matches ?
                      <Slider className="same-bx-list" {...settings}>
                         <a className="same-bx-item" onClick={() => { chapterScroll('ChapterOne') }} >
                          <div className="item-cont">
                            <span id="chapter-one-img">

                            </span>
                            {/* <img src='./images/demat-account-meaning.svg' className="" alt="Meaning of Demat Account" /> */}
                            <h4>Chapter 1</h4>
                            <p>What is Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterTwo') }}>
                          <div className="item-cont">
                            <span id="chapter-two-img">

                            </span>
                            {/* <img src='./images/how-does-demat-account-works.svg' className="" alt="How Demat Account Works" /> */}
                            <h4>Chapter 2</h4>
                            <p>How Demat Account Works</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterThree') }}>
                          <div className="item-cont">
                            <span id="chapter-three-img">

                            </span>
                            {/* <img src='./images/demat-account-types.svg' className="" alt="Types of Demat Account" /> */}
                            <h4>Chapter 3</h4>
                            <p>Types of Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterFour') }}>
                          <div className="item-cont">
                            <span id="chapter-four-img">

                            </span>
                            {/* <img src='./images/demat-account-benefits.svg' className="" alt="Advantages of Demat Account" /> */}
                            <h4>Chapter 4</h4>
                            <p>Advantages of Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterFive') }}>
                          <div className="item-cont">
                            <span id="chapter-five-img">

                            </span>
                            {/* <img src='./images/features-of-demat-account.svg' className="" alt="Demat Account Featues" /> */}
                            <h4>Chapter 5</h4>
                            <p>Demat Account Features</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterSix') }}>
                          <div className="item-cont">
                            <span id="chapter-six-img">

                            </span>
                            {/* <img src='./images/how-to-open-a-demat-account.svg' className="" alt="How to Open Demat Account" /> */}
                            <h4>Chapter 6</h4>
                            <p>How to Open Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterSeven') }}>
                          <div className="item-cont">
                            <span id="chapter-seven-img">

                            </span>
                            {/* <img src='./images/best-demat-account.svg' className="" alt="How to Choose Best Demat Account" /> */}
                            <h4>Chapter 7</h4>
                            <p>How to Choose Best Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterEight') }}>
                          <div className="item-cont">
                            <span id="chapter-eight-img">

                            </span>
                            {/* <img src='./images/demat-account-uses.svg' className="" alt="Uses of Demat Account" /> */}
                            <h4>Chapter 8</h4>
                            <p>Uses of Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterNine') }}>
                          <div className="item-cont">
                            <span id="chapter-nine-img">

                            </span>
                            {/* <img src='./images/difference-between-demat-account-and-trading-account.svg' className=""
                                    alt="Demat Account vs Trading Account" /> */}
                            <h4>Chapter 9</h4>
                            <p>Difference Between Demat Account and Trading Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterTen') }}>
                          <div className="item-cont">
                            <span id="chapter-ten-img">

                            </span>
                            {/* <img src='./images/how-to-deactivate-demat-account.svg' className="" alt="How to Close Demat Account" /> */}
                            <h4>Chapter 10</h4>
                            <p>How To Close Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterEleven') }}>
                          <div className="item-cont">
                            <span id="chapter-eleven-img">

                            </span>
                            {/* <img src='./images/demat-account-faq.svg' className="" alt="Demat Account FAQs" /> */}
                            <h4>Chapter 11</h4>
                            <p>Demat Account FAQs</p>
                          </div>
                        </a>
                      </Slider>:
                      <div className="same-bx-list">
                        {/* href="#ChapterOne" */}
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterOne') }} >
                          <div className="item-cont">
                            <span id="chapter-one-img">

                            </span>
                            {/* <img src='./images/demat-account-meaning.svg' className="" alt="Meaning of Demat Account" /> */}
                            <h4>Chapter 1</h4>
                            <p>What is Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterTwo') }}>
                          <div className="item-cont">
                            <span id="chapter-two-img">

                            </span>
                            {/* <img src='./images/how-does-demat-account-works.svg' className="" alt="How Demat Account Works" /> */}
                            <h4>Chapter 2</h4>
                            <p>How Demat Account Works</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterThree') }}>
                          <div className="item-cont">
                            <span id="chapter-three-img">

                            </span>
                            {/* <img src='./images/demat-account-types.svg' className="" alt="Types of Demat Account" /> */}
                            <h4>Chapter 3</h4>
                            <p>Types of Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterFour') }}>
                          <div className="item-cont">
                            <span id="chapter-four-img">

                            </span>
                            {/* <img src='./images/demat-account-benefits.svg' className="" alt="Advantages of Demat Account" /> */}
                            <h4>Chapter 4</h4>
                            <p>Advantages of Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterFive') }}>
                          <div className="item-cont">
                            <span id="chapter-five-img">

                            </span>
                            {/* <img src='./images/features-of-demat-account.svg' className="" alt="Demat Account Featues" /> */}
                            <h4>Chapter 5</h4>
                            <p>Demat Account Features</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterSix') }}>
                          <div className="item-cont">
                            <span id="chapter-six-img">

                            </span>
                            {/* <img src='./images/how-to-open-a-demat-account.svg' className="" alt="How to Open Demat Account" /> */}
                            <h4>Chapter 6</h4>
                            <p>How to Open Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterSeven') }}>
                          <div className="item-cont">
                            <span id="chapter-seven-img">

                            </span>
                            {/* <img src='./images/best-demat-account.svg' className="" alt="How to Choose Best Demat Account" /> */}
                            <h4>Chapter 7</h4>
                            <p>How to Choose Best Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterEight') }}>
                          <div className="item-cont">
                            <span id="chapter-eight-img">

                            </span>
                            {/* <img src='./images/demat-account-uses.svg' className="" alt="Uses of Demat Account" /> */}
                            <h4>Chapter 8</h4>
                            <p>Uses of Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterNine') }}>
                          <div className="item-cont">
                            <span id="chapter-nine-img">

                            </span>
                            {/* <img src='./images/difference-between-demat-account-and-trading-account.svg' className=""
                                    alt="Demat Account vs Trading Account" /> */}
                            <h4>Chapter 9</h4>
                            <p>Difference Between Demat Account and Trading Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterTen') }}>
                          <div className="item-cont">
                            <span id="chapter-ten-img">

                            </span>
                            {/* <img src='./images/how-to-deactivate-demat-account.svg' className="" alt="How to Close Demat Account" /> */}
                            <h4>Chapter 10</h4>
                            <p>How To Close Demat Account</p>
                          </div>
                        </a>
                        <a className="same-bx-item" onClick={() => { chapterScroll('ChapterEleven') }}>
                          <div className="item-cont">
                            <span id="chapter-eleven-img">

                            </span>
                            {/* <img src='./images/demat-account-faq.svg' className="" alt="Demat Account FAQs" /> */}
                            <h4>Chapter 11</h4>
                            <p>Demat Account FAQs</p>
                          </div>
                        </a>
                      </div>
}
                    </div>

                  </div>
                </div>
              </section>
              <section className='dematacount'>
                <div className='container'>
                  <div className='row' id="ChapterOne">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 1</p>
                      <h2 className="title">What is Demat Account?</h2>
                      <div className='row  pb52'>
                        <div className='col-md-6' id="best-demat-img">
                          {/*   <img src='./images/best-demat-account.webp' className="img-fluid" alt="Demat Account Meaning" /> */}
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>In the first chapter, you are going to understand Demat account meaning and what
                            Dematerialisation is.</p>
                          <p className='subtext'>
                            Let’s understand it.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="subhead">Meaning of Demat Account</h3>
                        <p className='subheadtxt'>Let's start with the Demat account in full form; Dematerialised Account, yes!
                          That's the <a href='https://choiceindia.com/blog/demat-account-full-form/' className='linking'> full form
                            of Demat account</a></p>
                        <p className='subheadtxt'>If you are looking to open a Demat account, you first need to understand what a
                          Demat account is? A Demat account allows holding shares and securities in electronic form. </p>
                          <h3 className="subhead">What is Demat Account?</h3>
                        <p className='subheadtxt'>A Demat account allows the investors to buy and hold shares in it; not only this,
                          a Demat account holds all investments made by an individual in shares, ETFs, government securities and
                          mutual funds in one place.
                          The Indian Stock market went through a digitisation process through Demat and enforced better and
                          enhanced governance by SEBI. Moreover, the Demat Account reduces the risk of storing, damage, theft,
                          and malpractices by storing securities in electronic format. </p>
                        <p className='subheadtxt'> Earlier, the account opening process was manual, and it took ages to get the
                          account activated, but now anyone can open a Demat Account within 5 minutes. Even the pandemic worked
                          as a catalyst, and many people got involved in share trading. </p>
                        <p className='subheadtxt'> Let's understand this better.</p>
                      </div>
                      <div>
                        <h3 className="subhead">What is Dematerialisation?</h3>
                        <p className='subheadtxt'>Converting physical share certificates into an electronic form is the process
                          known as <a href='https://choiceindia.com/blog/dematerialisation/' className='linking'>
                            Dematerialisation</a>. Dematerialisation makes shares accessible anywhere throughout the world. </p>
                        <p className='subheadtxt'>Any person who wants to invest in trade online must open a Demat account with a
                          Depository Participant (DP). The whole concept of Dematerialisation is to eliminate physical share
                          certificates and facilitate a seamless tracking and monitoring of holdings.</p>
                        <p className='subheadtxt'> Long back, the share certificate issuance process was cumbersome and
                          time-consuming. Still, Demat has transformed and sped up the entire process and helped store security
                          certificates digitally. </p>
                        <p className='subheadtxt'>Post your <a href='https://choiceindia.com/blog/demat-account-activation-time/'
                          className='linking'> Demat account activation</a> and your paper certificates digitally by submitting
                          all your physical securities through a Dematerialisation Request Form (DRF). Also, deface each
                          physical certificate by mentioning "Surrendered for Dematerialisation" on it. Post that, you will get
                          an acknowledgement slip when you surrender your share certificates.
                        </p>
                      </div>
                      <hr className='m52' />
                    </div>

                  </div>

                  <div className='row' id="ChapterTwo">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 2</p>
                      <h2 className="title">How Demat Account Works?</h2>
                      <div className='row pb52'>
                        <div className='col-md-6' id="how-does-img">
                          {/* <img src='./images/how-does-demat-account-works.webp' className="img-fluid"
                      alt="How Does Demat Account Works" /> */}
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>The Demat account in India works in a straightforward process where the account
                            holds the shares electronically.</p>
                          <p className='subtext'>
                            Demat accounts let the investors invest in shares and securities in electronic form that is
                            accessible anywhere around the world.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className='subhead'>How Does a Demat Account Work?</h3>
                        <p className='subheadtxt'>Every stock broker charges a Demat Account opening charges for the services
                          rendered and the maintenance of the account throughout life. </p>
                        <p className='subheadtxt'><a href='https://choiceindia.com/blog/how-demat-account-works/' className='linking'>
                          Demat accounts work</a> just like a bank account. For a Demat account to work to its fullest
                          potential, you need to link it with a trading account. Your DP (Depository Participant) puts the
                          investors' buy order forwards to the stock exchange whenever you buy a company's shares through any
                          trading platform.</p>
                        <p className='subheadtxt'> After that, the exchange matches the investor's 'buy' request with another
                          investor or trader's corresponding 'sell' request. Once the order matches, an order from the stock
                          exchange is sent to a clearance house, settling the trade.</p>
                        <p className='subheadtxt'> After the transaction is settled, the number of shares investors have bought is
                          credited to their Demat Account by the trading day's end. Likewise, the Demat account of the seller is
                          debited for the number of shares that were sold.</p>
                      </div>
                      <div>
                        <h3 className='subhead'>Trading and Savings Account: The Integrated Approach!</h3>
                        <p className='subheadtxt'>Without a trading account, you can't do anything with your Demat account. You'll
                          have to <a href='https://choiceindia.com/open-trading-account' className='linking'>open a trading account
                          </a> to invest. A trading account helps complete the monetary transactions involved in buying and
                          selling the shares. </p>
                        <p className='subheadtxt'>Demat, Trading and Savings accounts are interlinked but work separately for a
                          smooth trading process. The foremost step for opening a Demat account is to have a savings bank
                          account. Moreover, the Demat account holds the security bought while the savings account funds the
                          transaction.</p>
                        <p className='note'> Note: A trading account is imperative if you want to invest or trade. Presently, most
                          brokers open a trading account along with a Demat account.</p>

                      </div>
                      <hr className='m52' />
                    </div>

                  </div>
                  <div className='row' id="ChapterThree">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 3</p>
                      <h2 className="title">Types of Demat Account</h2>
                      <div className='row pb52'>
                        <div className='col-md-6' id="account-type-img">
                          {/* <img src='./images/demat-account-types.webp' className="img-fluid" alt="Demat Account Types" /> */}
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>If you want to earn money in the stock market, then you need to have an activated
                            Demat account. </p>
                          <p className='subtext'>
                            There are various <a href='https://choiceindia.com/blog/demat-account-types/' className='linking'>types
                              of Demat accounts</a> in India which help a wide variety of individuals to enter the stock market
                            and earn good profits from it.
                          </p>
                          <p className='subtext'>Let us now have a look at its types.</p>
                        </div>
                      </div>

                      <div>
                        <h3 className='subhead'>What are the Types of Demat Accounts?</h3>
                        <p className='subheadtxt'>Majorly, there are three types of Demat accounts:</p>
                        <ul className='numberlist'>
                          <li className="subheadtxt">
                            <p className='subheadtxt'>
                              <h4 className="inline">1. Regular Demat account: </h4> A regular Demat account is used by those residing
                              in India. A regular Demat account is opened by the various depository participants in the stock
                              market, which in turn is regulated and managed by the two depositories.
                            </p>
                            <p className='subheadtxt'> And the best part about owning it is that you don’t have to wait for days or
                              weeks to buy or sell your shares. It happens within minutes and therefore you get the chance to
                              earn profits as well.</p>
                            <p className='subheadtxt'> You can open a regular Demat account with the stockbroker of your choice and
                              also switch and transfer the shares depending on your requirements.</p>
                          </li>
                          <li className="subheadtxt">
                            <p className='subheadtxt'>
                            <h4 className="inline">2. Repatriable Demat Account (<a href='https://choiceindia.com/nri-demat-account'
                                className='linking'>NRI Demat Account</a>): </h4> A Demat account used by NRIs allows transferring
                              funds abroad. Moreover, this type of Demat account needs an NRE bank account.</p>

                          </li>
                          <li className="subheadtxt">
                            <p className='subheadtxt'>
                              <h4 className="inline">3. Non-Repatriable Demat Account:</h4> Like a Repatriable Demat Account, the
                              funds cannot be transferred abroad in this type of Demat account. Also, an investor would require an
                              NRO bank account associated with it.</p>

                          </li>
                        </ul>
                      </div>

                      <hr className='m52' />
                    </div>

                  </div>
                  <div className='row' id="ChapterFour">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 4</p>
                      <h2 className="title">Advantages of Demat Account</h2>
                      <div className='row'>
                        <div className='col-md-6' id="account-benefits-img">
                          {/* <img src='./images/demat-account-benefits.webp' className="img-fluid" alt="Demat Account Benefits" /> */}
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>Since the introduction of Dematerialization, there have been a lot of changes in
                            the stock market. Wondering if the <a href='https://choiceindia.com/blog/is-demat-account-safe/'
                              className='linking'>Demat account is safe</a>, then let's tell you that the introduction of
                            materialised accounts has reduced the scams in the stock market, and rightly it has managed to do
                            so.</p>
                          <p className='subtext'>
                            But apart from this, there are various other <a
                              href='https://choiceindia.com/blog/benefits-of-a-demat-account/' className='linking'>benefits of Demat
                              accounts</a> as well.
                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="subhead">Advantages of Demat Account</h3>
                        <ul className='bullet'>
                          <li>
                            <h4 className='listhead'>Safety and security</h4>
                            <p className='subheadtxt'>The safety offered by a Demat account is the greatest advantage. When
                              financial assets used to be held in physical form, it was at risk of getting lost or stolen.</p>
                            <p className='subheadtxt'> The investor would then have to go through paperwork and operational
                              challenges to recover those assets, and still, there would never be any guarantee of recovery.</p>
                          </li>
                          <li>
                            <h4 className='listhead'>Faster and smoother settlements</h4>
                            <p className='subheadtxt'>Before the Demat account, it used to take around 14 days because of the
                              physical movement of physical shares from the seller and then to the RTA and finally to the buyer.
                            </p>
                            <p className='subheadtxt'> Now, with the help of the Demat account, the settlement cycle has come down
                              to T+2 days, saving the investors time, effort, and energy</p>
                          </li>
                          <li>
                            <h4 className='listhead'>Reduction in errors</h4>
                            <p className='subheadtxt'>Earlier, due to a lot of manual processes, there were a lot of errors as well.
                              These are often called 'Vanda' trades or error trades. With everything being digital now, these
                              erroneous trades have reduced significantly.</p>

                          </li>
                          <li>
                            <h4 className='listhead'>Easy transmission</h4>
                            <p className='subheadtxt'>Since the shares are in electronic form, in case of the death of a Demat
                              account holder, the ownership of the assets held in the Demat account can be easily transferred to
                              the next of kin.</p>
                            <p className='subheadtxt'> However, this is only possible by opening a joint Demat account or adding the
                              next of kin as a nominee. Also, this is not possible when shares are held physically, and the
                              legal heir had to go through too many procedures to claim rights on the financial assets of the
                              deceased Demat account holder.</p>

                          </li>
                          <li>
                            <h4 className='listhead'>Better liquidity</h4>
                            <p className='subheadtxt'>Easy transfer is one of the Demat account's greatest advantages because it
                              facilitates easy liquidation of assets. You can easily, i.e., sell or take a loan against shares,
                              mutual funds, etc., if you are holding these financial assets in a Demat account.</p>

                          </li>
                          <li>
                            <h4 className='listhead'>Elimination of Odd-lot problems</h4>
                            <p className='subheadtxt'>Demat account has solved the odd-lot problem. Earlier, physical shares were
                              sold in lots, but you can buy and sell even just one share with Demat accounts.</p>

                          </li>
                          <li>
                            <h4 className='listhead'>One storage for all assets</h4>
                            <p className='subheadtxt'>A Demat account stores all your financial assets, including bonds, debentures,
                              ETFs, unit-linked insurance policies etc. Therefore, the Demat account holds assets under one roof
                              making maintenance and tracking easy.</p>
                            <p className='subheadtxt'> It also helps when it comes to filing taxes as you have all your records
                              maintained in one place.</p>

                          </li>

                        </ul>
                      </div>

                      <hr className='m52' />
                    </div>

                  </div>
                  <div className='row' id="ChapterFive">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 5</p>
                      <h2 className="title">Demat account Features</h2>
                      <div className='row pb52'>
                        <div className='col-md-6' id="demat-features-img">
                          {/* <img src="./images/features-of-dematr-account.webp" className="img-fluid" alt=" Featues of Demat Account" /> */}
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>Now that we know that there are certain types of Demat accounts and it is a
                            necessity when you want to invest in the share market. There are different features associated with
                            a Demat account and now let us have a look at that.</p>

                        </div>
                      </div>

                      <div>
                        <h3 className="subhead">List of Demat Account Features</h3>
                        <ul className='bullet'>
                          <li className="subheadtxt">

                            <p className='subheadtxt'>
                              <h4 className='listhead inline'>Easily buy and sell </h4> - With the introduction of Demat accounts, you
                              can easily buy and sell shares sitting at the comfort of your home. Earlier this used to take from a
                              few days to even weeks because of the physical form of shares.</p>
                            <p className='subheadtxt'> Further, it has made it very convenient for investors to transfer their
                              shares. They can take the help of Delivery Instruction Slip (DIS) and very smoothly carry on this
                              process.</p>
                            <p className='subheadtxt'> So all the work that used to happen physically before now happens
                              electronically. The entire journey of a user in the stock market has now become easier.</p>
                          </li>
                          <li className="subheadtxt">
                            <p className='subheadtxt'>
                              <h4 className='listhead inline'> Loan Against your Securities </h4> - Another service that the Demat
                              account offers is that you can pledge your securities. It works as collateral against your loan and
                              you can effectively trade even if you are running short on capital.</p>

                          </li>
                          <li className="subheadtxt">
                            <p className='subheadtxt'>
                              <h4 className='listhead inline'> Receive Bonus </h4> - Whenever you invest in a share of a company, you
                              get the part ownership that also makes you eligible to receive any bonus shares that the company
                              provides. </p>
                            <p className='subheadtxt'> With the introduction of the Demat account, it is now easier to receive the
                              stock split shares as they directly reflect on your Demat account.</p>
                          </li>

                          <li className="subheadtxt">
                            <p className='subheadtxt'>
                              <h4 className='listhead inline'> Easy to access</h4> - Gone are the days when you had to rely on
                              different stockbrokers to keep an eye on your investments. Now you can access your holdings, your
                              portfolio, and the status of your account from anywhere and at your own ease. </p>
                            <p className='subheadtxt'> Gone are the days when you had to rely on different stockbrokers to keep an
                              eye on your investments. Now you can access your holdings, your portfolio, and the status of your
                              account from anywhere and at your own ease. </p>
                            <p className='subheadtxt'> Let us answer this question in the next segment.</p>

                          </li>

                        </ul>
                      </div>

                      <hr className='m52' />
                    </div>

                  </div>
                  <div className='row' id="ChapterSix">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 6</p>
                      <h2 className="title">How to Open a Demat Account?</h2>
                      <div className='row pb52'>
                        <div className='col-md-6' id="how-to-open-demat-img">
                          {/* <img src='./images/how-to-open-a-demat-account.webp' className="img-fluid"
                      alt=" How to Open a Demat Account" /> */}
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>Various stockbrokers are available in India, including full service, discount and
                            hybrid brokers. You can always choose to open your Demat account with any one of them, depending on
                            the services you want. These days everything has gone digital; even the stockbroking world has
                            transformed entirely. </p>
                          <p className='subtext'>
                            Now, many people prefer to open their Demat account online, but still, some people go for the
                            offline process. Let’s understand <a href='https://choiceindia.com/blog/how-to-open-demat-account/'
                              className='linking'>how to open a demat account</a> online and offline.

                          </p>
                        </div>
                      </div>

                      <div>
                        <h3 className="subhead">Demat Account Opening Process offline</h3>
                        <ul className='bullet'>
                          <li>

                            <p className='subheadtxt'>Visit the nearest branch of your stockbroker. (With Choice India, you can also
                              open your Demat account online for free) </p>

                          </li>
                          <li>

                            <p className='subheadtxt'>Fill out the <a
                              href='https://choiceindia.com/blog/demat-account-opening-form/' className='linking'> Demat account
                              opening form</a> (it is available on any official broker's website)</p>

                          </li>
                          <li>
                            <p className='subheadtxt'> Submit the form with KYC documents</p>


                          </li>
                          <li>

                            <p className='subheadtxt'> After successfully verifying your documents, your Demat account will be
                              opened and activated.</p>

                          </li>


                        </ul>
                      </div>
                      <div>
                        <h3 className="subhead">Demat Account Opening Process online</h3>
                        <p className='subheadtxt'>Choice India lets you open a Demat account online; the process is easy and
                          seamless. If you want to open your Demat account online, follow these steps: </p>
                        <ul className='bullet'>
                          <li>
                            <p className='subheadtxt'>Open Choice India's official website </p>
                          </li>
                          <li>
                            <p className='subheadtxt'> Click on the '<a href='https://choiceindia.com/open-free-demat-account'
                              className='linking'>open Demat account</a>.'</p>
                          </li>
                          <li>
                            <p className='subheadtxt'> Then enter your primary details such as name, phone number, and the name of
                              your city.</p>
                          </li>
                          <li>
                            <p className='subheadtxt'> Next, enter your DOB and PAN card details. </p>
                          </li>
                          <li>
                            <p className='subheadtxt'> Next, enter your phone number and email ID. You will then receive OTPs,
                              verify your account with that OTP, and you will be redirected to a new window.</p>
                          </li>
                          <li>
                            <p className='subheadtxt'> Again enter your basic details, then choose an AMC plan. (Choice India offers
                              you the option to choose your own Demat account AMC charges) </p>
                          </li>
                          <li>
                            <p className='subheadtxt'> Upload all the necessary documents, and then you will be directed to the NSDL
                              website for e-sign. </p>
                          </li>
                          <li>
                            <p className='subheadtxt'> Enter your Aadhar details (make sure your phone number is linked with your
                              Aadhar card), and you will get an OTP.</p>
                          </li>
                          <li>
                            <p className='subheadtxt'> After successfully verifying, your Demat account will be opened and
                              activated.</p>
                          </li>
                        </ul>
                        <p className='subheadtxt'>Choice India takes less than or up to 4 hours for verification. If there's an
                          issue that you are facing with the <a
                            href='https://choiceindia.com/blog/demat-account-opening-process/' className='linking'>Demat account
                            opening process</a>, the Choice India team will call you and help you with the process.</p>
                      </div>

                      <div>
                        <h3 className="subhead">Documents Required for Demat Account Opening:</h3>
                        <p className='subheadtxt'>For opening a Demat account, you must have certain documents with you. Here's the
                          list of <a href='https://choiceindia.com/blog/documents-required-for-demat-account-opening/'
                            className='linking'> documents required for Demat account opening</a></p>
                        <ul className='bullet'>
                          <li>
                            <p className='subheadtxt'>Identity Proof ( Aadhar card, PAN card, any other identity proof issued by the
                              government of India) </p>
                          </li>
                          <li>
                            <p className='subheadtxt'> Proof of Address (Aadhar card, utility bills, rent agreement, registry of
                              house, etc.) </p>
                          </li>
                          <li>
                            <p className='subheadtxt'> Proof of Income (ITR statements, bank statements of the last 6 months, salary
                              slip, etc.) </p>
                          </li>
                          <li>
                            <p className='subheadtxt'> Bank details </p>
                          </li>
                          <li>
                            <p className='subheadtxt'> Photographs</p>
                          </li>
                          <li>
                            <p className='subheadtxt'> Signature</p>
                          </li>

                        </ul>
                        <p className='note pb52'>Note- For activating certain segments like the derivatives segment, income proofs
                          are required.</p>
                      </div>

                      <div>
                        <h3 className="subhead">Demat Account Charges</h3>
                        <p className='subheadtxt'>If you want to avail a service, you need to pay for it, right?</p>
                        <p className='subheadtxt'>Similarly, you need to pay some basic charges when opening a Demat account with a
                          stockbroker. </p>
                        <p className='subheadtxt'>Mostly the below-mentioned two charges are levied on clients by stockbrokers:</p>
                        <ul className='numberlist'>
                          <li className='subheadtxt'>
                            <p className='subheadtxt'>
                              <h4 className='inline'> 1. Demat account opening charges: </h4> Earlier, <a
                                href='https://choiceindia.com/blog/demat-account-opening-charges/' className='linking'>Demat account
                                opening charges</a> levied by the stockbrokers were very high. Most stockbrokers are now offering
                              free Demat accounts; however, any stock broker may charge upto INR 500. Open a free Demat Account
                              with Choice India.
                            </p>

                          </li>
                          <li className='subheadtxt'>
                            <p className='subheadtxt'>
                              <h4 className='inline'> 2. AMC charges: </h4> The annual charges that an investor pays to their brokers
                              are AMC charges. Most stockbrokers charge it annually, while some charge it quarterly or monthly.
                              The <a href='https://choiceindia.com/blog/demat-account-amc-charges/' className='linking'>AMC
                                charges</a> may vary from one stock broker to another. However, if you open a Demat account with
                              Choice India, you get to select from the following plans:</p>
                            <ul className='nestedbullet'>
                              <li>
                                <p className='subheadtxt'>
                                  Regular plan in which you need to pay ₹200+ GST from the second year onwards. </p>
                              </li>
                              <li>
                                <p className='subheadtxt'> ₹1500+GST- Choosing this plan means you don't have to pay AMC charges for
                                  a lifetime. </p>
                              </li>
                              <li>
                                <p className='subheadtxt'> ₹3000+GST- You will get the entire amount back when you close your
                                  account in the refundable AMC plan.</p>
                              </li>

                            </ul>
                          </li>

                        </ul>
                        <p className='subheadtxt'>These charges are levied when you open a Demat Account.</p>
                      </div>
                      <hr className='m52' />
                    </div>

                  </div>


                  <div className='row' id="ChapterSeven">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 7</p>
                      <h2 className="title">How Can You Choose the Best Demat Account in India?</h2>
                      <div className='row pb52'>
                        <div className='col-md-6' id="best-demat-img-seven" >
                          {/* <img src='./images/best-demat-account.webp' className="img-fluid" alt="Best Demat Account" /> */}
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>When you start trading, you need to open a Demat and Trading Account with the help
                            of the stockbroker. A Demat account is necessary for online trading, so you must open the best Demat
                            account for beginners.</p>

                        </div>
                      </div>

                      <div>
                        <p className='subheadtxt'> Don't you want the best Demat account in India? You will have to choose a
                          depository that would suit trading and share exchange needs. Consequently, you must select the Demat
                          account that best suits your needs.</p>
                        <p className='subheadtxt'> Want to know how to choose the best Demat account? After all, it's nothing other
                          than just an account to hold your shares, but you must research a lot before choosing the best Demat
                          account in India.</p>
                        <p className='subheadtxt'> Don't you want the best Demat account in India? You will have to choose a
                          depository that would suit trading and share exchange needs. Consequently, you must select the Demat
                          account that best suits your needs. Want to know how to choose the best Demat account? After all, it's
                          nothing other than just an account to hold your shares, but you must research a lot before choosing
                          the best Demat account in India.</p>
                        <p className='subheadtxt paraspace'> Here are a few things you can look for before opening a Demat account:
                        </p>
                        <h3 className="subhead">Ease of Opening:</h3>
                        <ul className='bullet'>
                          <li>

                            <p className='subheadtxt'> SEBI has mandated a complete process of opening a Demat Account that the
                              service provider must follow. However, service providers have the liberty to a certain extent. For
                              instance, anyone can open a Demat Account through the e-KYC account opening by authenticating
                              their Aadhar data. </p>
                            <p className='subheadtxt paraspace'> In e-KYC, the time to trade must be less than 2 days, whereas, in a
                              physical account opening, the trading time should be less than 5 days.</p>

                          </li>

                        </ul>
                        <h3 className="subhead">User Interface:</h3>
                        <ul className='bullet'>
                          <li>
                            <p className='subheadtxt paraspace'>This is one crucial point that you need to look for. All brokers
                              have their inbuilt software, which the investor can download. Not only this, the user needs to
                              check out the web app as well. Choice FinX by Choice India offers a simple and clean user interface,
                              where traders can search and navigate their orders and a seamless trading experience with just a
                              few single clicks.</p>

                          </li>

                        </ul>
                        <h3 className="subhead">Trading Cost and Brokerage:</h3>
                        <ul className='bullet'>
                          <li>
                            <p className='subheadtxt paraspace'>There's fierce competition; many brokers are offering low broking
                              costs. You need to figure out which trading company or broker you want to open your Demat account
                              with. You need to bargain with a broker for trading, whereas if you are an investor, it is highly
                              unlikely your broker will reduce brokerage. Moreover, brokers earn from frequency (the number of
                              times an investor trades).</p>

                          </li>

                        </ul>
                        <h3 className="subhead">Minimum AMC:</h3>
                        <ul className='bullet'>
                          <li>
                            <p className='subheadtxt'>Demat Account has some charges, even if you keep your account idle. Presently,
                              there's no fee for opening a Demat Account. Still, when you calculate the cost of Demat, you must
                              look at the overall costs. There is a yearly maintenance charge billed every year. </p>
                          </li>
                          <li>
                            <p className='subheadtxt'>An amount is charged when a debit from the investor's Demat account. Also,
                              there are costs charged if you request a physical transaction copy or a physical copy of the Demat
                              holdings.</p>

                          </li>

                        </ul>
                        <h3 className="subhead">Day Trading Square off Timing:</h3>
                        <ul className='bullet'>
                          <li>
                            <p className='subheadtxt'>If you are into intraday trading, you have to square off the position. If not,
                              the broker initiates it himself; you must figure out the timing of such initiation (Usually
                              sometime before the market closure).</p>

                          </li>

                        </ul>
                      </div>

                      <hr className='m52' />
                    </div>

                  </div>
                  <div className='row' id="ChapterEight">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 8</p>
                      <h2 className="title">How to Use a Demat Account?</h2>
                      <div className='row pb52'>
                        <div className='col-md-6' id="how-to-use-demat-img">
                          {/* <img src='./images/demat-account-uses.webp' className="img-fluid" alt="Uses of Demat Account" /> */}
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>Using a Demat Account is quite straightforward. An individual can open a Demat
                            account by registering with an investment broker or a sub-broker. You need an active internet
                            connection, user Id &amp; Password to access your Demat Account.</p>

                        </div>
                      </div>

                      <div>
                        <p className='subheadtxt'> The very first step you need to take while opening a Demat account is figuring
                          out a DP (Depository Participant) who acts as an agent to the depository.</p>
                        <p className='subheadtxt'>You will have to fill out the account opening form and submit the identity proof,
                          PAN card, proof of address and a photograph (passport-size). A detailed description of all the
                          acceptable </p>
                        <p className='subheadtxt'>Once you agree to the terms and agreement and the charges, an in-person
                          verification is initiated. Post successful processing and verification of the application, a client ID
                          or an account number is given out along with a transaction password. You can then access your Demat
                          account online, which stores your shares, stocks, bonds, equities, mutual funds and other derivatives.
                        </p>
                        <p className='subheadtxt paraspace'>Besides some debt instruments like bank and company fixed deposits, a
                          single Demat account can hold most instruments. To better use your Demat account, you will need a
                          trading account and a Depository Participant (DP) who connects you to a depository.</p>

                        <p className='notehead'>Presently, India has two depositories:</p>
                        <p className='subheadtxt mb-0 pb-0'> National Securities Depository Limited (NSDL) </p>
                        <p className='subheadtxt mt-0  paraspace'> Central Depository Services (India) Limited (CDSL) </p>
                        <p className='subheadtxt'> There are multiple <a
                          href='https://choiceindia.com/blog/what-is-the-use-of-demat-account/' className='linking'>uses of a
                          Demat account</a>. With a Demat account, you can access beneficial information, check live share
                          market updates and monitor and analyse your different investments. You are updated and receive share
                          market news related to your investments. </p>
                        <p className='subheadtxt'> The Depository Participant will send regular messages related to the merger,
                          buyback, dividend declaration, results, etc. You also have access to analyst reports based on company
                          performance, historical information, and financial projection to help make informed investment
                          decisions. Track your performance across your portfolio of different investment products and make
                          necessary modifications to suit your risk profile and return expectations.</p>
                      </div>

                      <hr className='m52' />
                    </div>

                  </div>
                  <div className='row' id="ChapterNine">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 9</p>
                      <h2 className="title">Difference Between Demat Account and Trading Account</h2>
                      <div className='row pb52'>
                        <div className='col-md-6' id="demat-vs-trading-img">
                          {/* <img src='./images/difference-between-demat-account-and-trading-account.webp' className="img-fluid"
                      alt="Difference Between Demat Account and Trading Account" /> */}
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>For an investor to trade or invest, both Demat and Trading account is required;
                            however, there are certain <a
                              href='https://choiceindia.com/blog/difference-between-demat-and-trading-account/'
                              className='linking'>differences between Demat account and trading account</a>.</p>

                        </div>
                      </div>

                      <div>
                        <h3 className="subhead">Difference Between Demat Account and Trading Account?</h3>

                        <ul className='bullet mt10'>
                          <li className='subheadtxt '>

                            <p className='subheadtxt '>
                              <h4 className='listhead inline'>Key role: </h4>- A Demat account ensures safety, whereas a trading
                              account is used to purchase/sell shares.</p>

                          </li>
                          <li className='subheadtxt '>


                            <p className='subheadtxt'>
                              <h4 className='listhead inline'> Nature: </h4> - A Demat account works just like a savings account, but
                              just like a savings account holds money, a Demat account allows investors to store financial
                              instruments in electronic form, debited or credited accordingly. </p>
                            <p className='subheadtxt'> On the other hand, a trading account functions more like a current bank
                              account that funds the trade transactions. Eventually, you will need a Demat and Trading Account
                              to trade in the stock market.</p>
                          </li>
                          <li className='subheadtxt '>

                            <p className='subheadtxt'>
                              <h4 className='listhead inline'> Function difference: </h4> - A Demat account is used to hold securities
                              in an electronic format, whereas a trading account facilitates buying/selling of shares in the stock
                              market.</p>

                          </li>

                          <li className='subheadtxt '>

                            <p className='subheadtxt'>
                              <h4 className='listhead inline'> Measurement of time:</h4> - A Demat account holds your shares; it is
                              measured as a stock at a specific point in time, that is, by the end of each financial year.
                              However, a trading account is a flow statement reflecting your trading transactions measured over
                              time.</p>


                          </li>

                        </ul>


                      </div>

                      <hr className='m52' />
                    </div>

                  </div>
                  <div className='row' id="ChapterTen">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 10</p>
                      <h2 className="title">How to Close Demat Account?</h2>
                      <div className='row pb52'>
                        <div className='col-md-6' id="how-to-close-demat-img">
                          {/* <img src='./images/how-to-deactivate-demat-account.webp' className="img-fluid"
                      alt="How to Deactivate Demat Account" /> */}
                        </div>
                        <div className='col-md-6'>
                          <p className='subtext'>If you’re decided to close your existing Demat account with any stock broker you
                            need to understand how to close it, types and the entire process. </p>
                          <p className='subtext'>Let’s understand it…</p>

                        </div>
                      </div>

                      <div>

                        <h3 className="subhead">How to Deactivate or Close Your Demat Account?</h3>

                        <p className='subheadtxt'> Any Demat account that is inactive and does not see any transactions for several
                          months becomes dormant. However, the stockbroker or DP is legally liable to manage the Demat account
                          for the investor's safety and keep track of whether the investor purchases or sells any share. </p>
                        <p className='subheadtxt'>Therefore, for the services rendered to maintain the Demat account, the
                          stockbroker charges the investors. The maintenance charges are called Annual Maintenance Charges, and
                          the investor has to pay even in the case of no trading. </p>
                        <p className='subheadtxt'>Moreover, dormant Demat accounts are like a jackpot for scammers who engage in the
                          process of front running. They illegally gain access to inactive or dormant Demat accounts to buy and
                          sell securities based on insider trading to make sure their Demat account is not visible in the scam.
                        </p>
                        <p className='subheadtxt'> Therefore, you need to know <a
                          href='https://choiceindia.com/blog/how-to-close-a-demat-account/' className='linking'>how to close your
                          Demat account</a> to stop incurring unnecessary charges and save yourself from being a part of a
                          front-running scam.</p>

                        <h3 className="subhead">What are the Types of Demat Account Closure?</h3>
                        <ul className='bullet'>
                          <li className='subheadtxt'>
                            <p className='subheadtxt'>
                              <h4 className='listhead inline'>Transfer and account closure: </h4>- Suppose your Demat account has some
                              holdings, and you haven't made full payment for the pending payments to the Depository Participant.
                              You will then have first to transfer the holdings to a different Demat account; as soon as the
                              holdings and charges are transferred, you can raise a request to your DP to close the Demat account.
                            </p>

                          </li>

                          <li className='subheadtxt'>
                            <p className=' subheadtxt paraspace'>
                              <h4 className='listhead inline'> Full account closure: </h4> - If you have no holdings in your Demat
                              account and have cleared all your pending payments to the DP, you can raise a request to your DP for
                              your Demat Account closure.</p>

                          </li>

                        </ul>


                        <h3 className="subhead">Close Demat Account: The Process</h3>
                        <ul className='bullet'>
                          <li>
                            <p className='subheadtxt'>
                              Suppose you want to close your Demat account. In that case, you need to physically visit the
                              Depository Participant's office and submit a Demat account closure form and the required document.
                            </p>

                          </li>

                          <li>
                            <p className='subheadtxt'> You can always download this form from the DP's website.</p>

                          </li>
                          <li>
                            <p className='subheadtxt'> You will have to fill in the form with the required details and sign it. All
                              the holders must sign the closure request form if it is a joint account.</p>

                          </li>
                          <li>
                            <p className='subheadtxt'> Most importantly, the Power of Attorney (POA) holder does not have to sign
                              the closure request form. </p>
                          </li>
                          <li>
                            <p className='subheadtxt'> The entire closure process takes at least 7-10 business days after submitting
                              the account closure form. </p>
                          </li>
                          <li>
                            <p className='subheadtxt paraspace'> There aren't any charges for account closure; however, you must
                              remember that the account should not have any dues remaining for the account.</p>
                          </li>
                        </ul>

                        <h3 className="subhead">Details You Will Need to Close a Demat account:</h3>
                        <p className='subheadtxt'> If you are closing your Demat account, you must furnish some legal documents to
                          prove your ownership of the Demat account and its holdings.</p>

                        <h4 className='subhead'>What Do You Need?</h4>
                        <ul className='numberlist'>
                          <li className='number'>
                            <p className='subheadtxt'>Your Demat account's ID and your DP ID </p>

                          </li>
                          <li className='number'>
                            <p className='subheadtxt'>Your KYC details, including your name and address, must be the same as
                              mentioned in your Demat account. </p>
                          </li>
                          <li className='number'>
                            <p className='subheadtxt'>Application with the reason for closing your account. </p>
                          </li>
                          <li className='number'>
                            <p className='subheadtxt'>Self-attested Identity proof</p>
                          </li>
                        </ul>
                      </div>

                      <hr className='m52' />
                    </div>

                  </div>
                  <div className='row' id="ChapterEleven">
                    <div className='col-md-12 col-sm-12 col-lg-8'>
                      <p className='chapter'>Chapter 11</p>
                      <h2 className="title">Demat Account FAQs</h2>
                      <div className='row pb52'>
                        <div className='col-md-6' id="demat-account-faq-img">
                          {/* <img src='./images/demat-account-faq.webp' className="img-fluid" alt="Demat Account Related FAQs" /> */}
                        </div>
                        <div className='col-md-6'>

                        </div>
                      </div>

                      <div>

                        <h4 className="subhead">Who Can Open A Demat Account?</h4>

                        <p className='subheadtxt'>SEBI has laid out certain guidelines as to who is eligible to open a Demat account
                          in India. Anyone who falls under the following criteria can open a Demat account. Let us quickly have
                          a look at the same.</p>


                        <ul className='bullet'>
                          <li>
                            <p className='subheadtxt'>Anyone who is a resident of India.</p>
                          </li>
                          <li>
                            <p className='subheadtxt'> The member of any HUF family</p>
                          </li>
                          <li>
                            <p className='subheadtxt'> NRIs can also open an NRI Demat account in India.</p>
                          </li>
                          <li>
                            <p className='subheadtxt'> Even if you are a minor (below the age of 18), you can <a
                              href='https://choiceindia.com/minor-demat-account' className='linking'>open a Demat account for
                              minors</a>. There is no <a href='https://choiceindia.com/blog/age-limit-for-demat-account/'
                                className='linking'>age limit for Demat account</a>. </p>
                          </li>
                          <li>
                            <p className='subheadtxt'> A company that is taxed under the taxation policy of India is also eligible
                              to open a Demat account.</p>
                          </li>


                        </ul>
                        <p className='subheadtxt paraspace'> Now that we have talked about the criteria of opening a Demat account,
                          let us have a look at how you can complete the entire process.</p>



                        <h4 className="subhead">How many Demat accounts can one have?</h4>
                        <p className='subheadtxt paraspace'> Any individual investor can have 4 Demat accounts, but each has to be
                          with a different Depository Participant. SEBI has set no limits, yet you should know that holding
                          Demat accounts are not free.</p>


                        <h4 className="subhead">How to check my Demat account?</h4>
                        <p className='subheadtxt paraspace'>To check your Demat account, you will have to visit the CDSL website and
                          log in. Then Enter your 10 digit PAN card number and 16 digits Demat account number. After that, enter
                          your DOB, complete the captcha process, and generate OTP; once it's all done, you can check your Demat
                          account through CDSL.</p>


                        <h4 className="subhead ">How can I transfer shares from one Demat account to another?</h4>
                        <p className='subheadtxt paraspace'>The investor will have to fill the DIS and submit it to the current
                          broker; then, the broker will forward the DIS request to the depository.The depository will
                          share the existing holdings with your preferred Demat account.</p>

                        <h4 className="subhead ">How can I find the Demat account number from PAN?</h4>
                        <p className='subheadtxt paraspace'>The simplest way to find your Demat account number from your PAN card is
                          to search your mailbox. Search the PAN card number in your mailbox, and you will find mails from CDSL
                          &amp; NSDL; there, you will see the Demat account number. </p>

                        <h4 className="subhead">When is the iex bonus share credited to the Demat account?</h4>
                        <p className='subheadtxt paraspace'>It generally takes 15 business days to reflect bonus shares in your
                          account, but it depends on the RTA.</p>

                        <h4 className="subhead">How to log in to a Demat account?</h4>
                        <p className='subheadtxt paraspace'>Login depends on your <a href='https://finx.choiceindia.com/'
                          className='linking'>trading platform</a>; every stockbroker has a different app with a different user
                          interface. So, it depends on which app or stockbroker you are using.</p>

                        <h4 className="subhead">How to change the nominee into a Demat account?</h4>
                        <p className='subheadtxt paraspace'>Firstly, you need to download the nominee modification form from the
                          DP's website, fill out the form, update the nominee's information, and get it signed. Later, send the
                          nominee modification form and the hard copy of your Demat account information to your stockbrokers'
                          headquarter.</p>

                        <h4 className="subhead">Who can open a Demat Account?</h4>
                        <p className='subheadtxt paraspace'>Any resident of India who has a PAN card is eligible to open a Demat
                          account.</p>

                        <h4 className="subhead">What is the Age limit for Demat Account?</h4>
                        <p className='subheadtxt paraspace'>There is no age restriction for Demat account holders; even a minor can
                          open a Demat account.</p>

                        <h4 className="subhead">How much time is required for Demat account activation?</h4>
                        <p className='subheadtxt paraspace'>Presently, opening a Demat account does not take more than 5 minutes.
                          However, <a href='https://choiceindia.com/blog/demat-account-activation-time/' className='linking'>Demat
                            account activation time</a> may take up to 4 hours if you open a Demat account with Choice India.
                        </p>

                        <h4 className="subhead">Can I Open a Demat Account Without an Aadhar Card?</h4>
                        <p className='subheadtxt'>A Demat account with an Aadhar card is possible! </p>
                        <p className='subheadtxt paraspace'>Currently, the Government is planning to revisit the e-KYC process and
                          linking Aadhaar to Demat, trading, or bank accounts is not mandatory. Therefore, opening a <a
                            href='https://choiceindia.com/blog/can-i-open-demat-account-without-aadhar-card/'
                            className='linking'>Demat account without an Aadhar card</a> is possible.</p>

                        <h4 className="subhead">Can I Open a Demat Account Without a PAN Card?</h4>
                        <p className='subheadtxt'>Unfortunately, a <a
                          href='https://choiceindia.com/blog/can-i-open-demat-account-without-pan-card/' className='linking'>Demat
                          account without a PAN card</a> is not possible. SEBI has mandated a PAN card for opening a Demat
                          account. The investor/trader needs to show the original PAN Card while opening the Demat account.</p>




                      </div>
                    </div>

                  </div>
                  
                </div>

              </section>
              <section className="demat-cam-page-new">
                <OpenDemateAccountStickyFooter></OpenDemateAccountStickyFooter>
              </section>
            </main>
        }
      </div>


    </div>
  )
}




 export default Opendemat;
