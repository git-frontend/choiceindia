import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./basket.scss"
import Image1 from '../../assets/images/basket/choicelogo.webp';
import Image2 from '../../assets/images/basket/banner-image.webp';
import Image3 from '../../assets/images/basket/income-source.svg';
import Image4 from '../../assets/images/basket/portfoio-optimisation.svg';
import Image5 from '../../assets/images/basket/quarterly-rebalanceing.svg';
import Image6 from '../../assets/images/basket/minimum-investment.svg';
import Image7 from '../../assets/images/basket/no-extra-cost.svg';
import Image8 from '../../assets/images/basket/youtube_icon.webp';
import FaqCommon from './FaqCommon';
import BasketLand from './BasketLand';
import Template2 from '../Common-features/Template2';
import LazyLoader from '../Common-features/LazyLoader';
import {
    useLocation,
  } from 'react-router-dom';
  import meta_tags from "../../Data/MetaTags";

function Basket() {

    const [skeleton, setSkeleton] = useState(() => true);
    const [videoVisibility, setVideoVisibility] = useState(false);
    const [checkdevice, setcheckdevice] = useState();
    const [rendercount, setRenderCount] = useState(() => false);

    const location = useLocation();

    setTimeout(() => {
        setSkeleton(() => false);
    }, 200)


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


    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
            if (/Android|webOS|windows|BlackBerry|IEMobile|IEMobile|Opera Mini|CriOS/i.test(navigator.userAgent)) {

                setcheckdevice('https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy')
          
              } else if (/iPod|iPhone|iPad/i.test(navigator.userAgent)) {
            
                setcheckdevice('https://apps.apple.com/us/app/jiffy-mobile-trading-app/id1327801261?ls=1')
                
              }else{
                setcheckdevice('https://play.google.com/store/apps/details?id=com.choiceequitybroking.jiffy')
        
              }
          document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
          document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
          document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
          document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';}
          if(!(document.getElementById('link1')==null)){
            document.getElementById('link1').remove();
          document.getElementById('link2').remove();
          document.getElementById('link3').remove();
          document.getElementById('link4').remove();
          document.getElementById('link5').remove();
          document.getElementById('link6').remove();
          
          }
        }, [rendercount])

    return (
        <>
            {
                skeleton ? <Template2 /> :
                    <div className="Home" id="root">
                        <header className="camp-header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Link to="/" className="camp-logo" id="camp-logo">
                                            <LazyLoader src={Image1} className={'img-fluid basket-banner-img'} width={'193'} height={'48'} alt={'loading'} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </header>
                        <main>
                            <section className="banner">
                                <div className="container">
                                    <div className="row align-items-center justify-content-between">
                                        <div className="col-xl-5 col-md-6">
                                            <div className="banner-caption">
                                                <h1>Basket Investing Simplified for You</h1>
                                                <div><p>Diversify your portfolio by investing in stocks through
                                                    <span> Thematic Baskets</span>
                                                </p></div>
                                                <div className="btn-bg btn-banner cursor-pointer" onClick={() => { chapterScroll('explore') }}>

                                                        <span  >Explore Baskets</span>
                                
                                                </div>

                                                <div><p>Don’t have an account? <span><Link to="/open-free-demat-account">Open Now</Link></span> </p></div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <img fetchpriority="high" src={Image2} className="img-fluid bannerimg" width='555' height='541' alt="loading" />
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="basket-investing">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="heading-sec text-center">
                                                <h2 className="title-first">Why Basket Investing?</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="basket-investing-list">
                                                <div className="investing-list-itm">
                                                    <div className="list-itm-box">
                                                        <LazyLoader src={Image3} className={"img-fluid img-icon"} width={'65'} height={'76'} alt={"Loading"} />
                                                        <h3>Passive Income Source</h3>
                                                        <div><p>To achieve your financial goals, invest in thematic baskets to create a passive income source.
                                                        </p></div>
                                                    </div>
                                                </div>
                                                <div className="investing-list-itm">
                                                    <div className="list-itm-box">
                                                        <LazyLoader src={Image4} className={"img-fluid img-icon"} width={'72'} height={'76'} alt={"Loading"} />
                                                        <h3>Quantitative Portfolio Optimisation</h3>
                                                        <div><p>A quantitative optimised process that has been back-tested for the past 10 years and aims to
                                                            reduce portfolio volatility in contrast to the benchmark.</p></div>
                                                    </div>
                                                </div>
                                                <div className="investing-list-itm">
                                                    <div className="list-itm-box">
                                                        <LazyLoader src={Image5} className={"img-fluid img-icon"} width={'76'} height={'76'} alt={"Loading"} />
                                                        <h3>Quarterly Rebalancing</h3>
                                                        <div><p>Our skilled research team evaluates the performance of the baskets on a quarterly basis in order
                                                            to rebalance your portfolio and achieve the highest CAGR possible.</p></div>
                                                    </div>
                                                </div>
                                                <div className="investing-list-itm">
                                                    <div className="list-itm-box">
                                                        <LazyLoader src={Image6} className={"img-fluid img-icon"} width={'77'} height={'77'} alt={"Loading"} />
                                                        <h3>Minimum Investment</h3>
                                                        <div><p>With a minimum investment of Rs. 6000, you can begin investing in baskets.</p></div>
                                                    </div>
                                                </div>
                                                <div className="investing-list-itm">
                                                    <div className="list-itm-box">
                                                        <LazyLoader src={Image7} className={"img-fluid img-icon"} width={'66'} height={'76'} alt={"Loading"} />
                                                        <h3>No Extra Cost</h3>
                                                        <div><p>Investing in Baskets is absolutely free, with the exception of the brokerage fee charged when the
                                                            order is placed.</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="baskets-features-cont">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="heading-sec">
                                                <h3 className="title-first">Thematic Baskets for Everyone</h3>
                                                <div><p>Our research team has created thematic baskets to make investing easier that could be aligned with
                                                    your financial goals.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="baskets-features-list-cont">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <BasketLand></BasketLand>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                            <div className="exp-btn"> <a  href={checkdevice?checkdevice:[]}><span>Explore more BASKETS!</span></a></div>  
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="start-basket-steps">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="heading-sec text-center">
                                                <h3 className="title-first">How to Start Basket Investing with Choice?</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-md-6">
                                            <div className="imgwrap">
                                                {!videoVisibility && <div className="youtube-container">
                                                    <img className="youtube-container-img" src={Image8} alt="Loading" onClick={() => {

                                                        setVideoVisibility(true)
                                                    }}></img>


                                                    <div className="ytubeBg" title="Click to play" onClick={() => {

                                                        setVideoVisibility(true)
                                                    }}>
                                                        <svg className="play" xmlns="http://www.w3.org/2000/svg" viewBox="-7 0 50 55">
                                                            <path className="path" d="M 12,26 18.5,22 18.5,14 12,10 z M 18.5,22 25,18 25,18 18.5,14 z" />
                                                        </svg>
                                                    </div>
                                                </div>}

                                                {videoVisibility && <iframe width="470" src="https://www.youtube.com/embed/WrL6Ihbg8LU?autoplay=1" height="350" id="my-deferred-iframe" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen de></iframe>}
                                            </div>

                                        </div>
                                        <div className="col-md-5">
                                            <div className="basket-steps-list">
                                                <div className="steps-list-itm">
                                                    <h4>Select the basket</h4>
                                                    <div><p>To begin investing, select one of our specifically crafted thematic baskets.</p></div>
                                                </div>
                                                <div className="steps-list-itm">
                                                    <h4>Place Order</h4>
                                                    <div><p>After you've chosen your basket, you can place your order, which will be completed during market hours.</p></div>
                                                </div>
                                                <div className="steps-list-itm">
                                                    <h4>Basket in Portfolio</h4>
                                                    <div><p>The invested basket would be available in your portfolio.</p></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section className="basket-quick-bar">
                                <div className="container">
                                    <div className="quick-bar-middle">
                                        <h3>Start investing in Baskets with Choice</h3>
                                        <a  href={checkdevice?checkdevice:[]}><span className="btn-bg btn-bg-light" >Invest Now</span></a>
                                        
                                    </div>
                                </div>
                            </section>
                            <FaqCommon></FaqCommon>
                        </main>
                        <footer className="main-footer">
                            <div className="footer-bottom">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="article">
                                                <div className="footer-bottom">
                                                    <div className="container">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="article">
                                                                    <p><span className="bold">SEBI Reg. No. of RA</span>- INH000000222</p>
                                                                    <p>
                                                                        <span className="bold"> Certification:</span> The views expressed in this advertisement accurately reflect the personal views of the analyst(s) about the subject securities or issuers and no part of the compensation of the research analyst(s) was. is, or will be directly or indirectly related to the specific recommendations or views expressed by the research analyst(s). The advertisements are bound by stringent internal regulations and also legal and statutory requirements of the Securities and Exchange Board of India (hereinafter "SEBI").
                                                                    </p>
                                                                    <p><span className="bold">Disclaimer:</span> Investment in the securities market is subject to market risks, read all the related documents carefully before investing.</p>
                                                                    <p><span className="bold">Note:</span> Basket is not an approved product of exchange. Any grievances will not be dealt at the exchange. Choice FinX app users can access the basket feature.</p>
                                                                    <p><span className="bold">Address:</span> Choice International Limited, Sunil Patodia Tower, J B Nagar, Andheri East, Mumbai, Maharashtra 400099.</p>
                                                                    <p>&copy; Choiceinternational. CIN - U65999MH2010PTC198714.        All Rights Reserved.</p>
                                                                </div>

                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer>
                    </div>
            }
        </>
    )
}

export default Basket;