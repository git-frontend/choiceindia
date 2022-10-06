
import React,{useState} from "react";
// import videoBg from '../../assets/images/insurance/insuringShield.mp4'
import Bannerimage from '../../assets/images/equity-broking/Coingif.gif'
import LazyLoader from '../Common-features/LazyLoader';
import Researchbanner from "../../assets/images/equity-broking/rollingCoin.mp4"
import Equity from "../../Data/Equity";
import { Link } from "react-router-dom";

function Banner() {
    const [selected, setSelected] = useState(0);

    return (
        <div>


            <section className="equity-bannersection">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-md-6 lft-sec">
                            <h1 className="big-ttl">Equity Broking</h1>
                            <p className="para">Capital Markets is one of the ideal
                                platforms to make long term investments.
                                With the value added technology tools &amp; one of the most sought after research team
                                in the media, we make your equity trading
                                predictable and your money grow!</p>
                        </div>
                        <div className="col-md-6 d-none d-sm-block">
                            <div className="rightsec">
                           
                               {/* <LazyLoader src={Bannerimage} alt={"Banner Images"} className={"img-fluid"} width={"609"} height={"476"} />  */}
                               {/* <video src={Researchbanner} autoPlay loop muted className={"img-fluid top-banner-img"} width={"700"} height={"650"}/> */}
                               <video className='img-fluid' autoPlay loop muted width={"609"} height={"476"}>
                      <source src={Researchbanner}  type='video/mp4' />
                    </video>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="trading-mode">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="mn-ttl">Trading <span>Mode</span></h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="trading-mode-list">

                                {
                                    Equity.map((res,index)=>{
                                        let classNameNm = "mode-list-itm " + ((index === selected) ? 'list-itm-active' : '')

                                        return(
                                            <div key={res.id}  className={classNameNm} onMouseOver={() => setSelected(index)} onMouseLeave={() => setSelected(0)} >
                                                <div className="mode-itm-sub">
                                                    <div className="mode-itm-top">
                                                        <h3>{res.title}</h3>
                                                    </div>
                                                    <div className="mode-itm-mn">
                                                        <h3>{res.title2}</h3>
                                                        <p>{res.description}</p>
                                                        <div className="justify-content-end d-flex">
                                                            <Link to={res.path} target="_blank"><span className="btn-bg">Explore</span></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })
                                }
                                {/* <div className="mode-list-itm list-itm-active">
                                    <div className="mode-itm-top">
                                        <h3>Equity Intraday</h3>
                                    </div>
                                    <div className="mode-itm-mn">
                                        <h3>Equity Intraday</h3>
                                        <p>Capital Markets is one of the ideal
                                            platforms to make long term investments. With the value added technology tools &amp; one of the most sought after research team
                                            in the media, we make your equity trading
                                            predictable and your money grow!</p>
                                        <div className="justify-content-end d-flex">
                                            <a href="/" className="btn-bg">Explore</a>
                                        </div>
                                    </div>
                                </div>
                                <div className="mode-list-itm">
                                    <div className="mode-itm-top">
                                         <h3>Currency</h3>
                                    </div>
                                    <div className="mode-itm-mn">
                                        <h3>Currency</h3>
                                        <p>High transaction volumes and the market that is accessible
worldwide; this is the currency trading market. Currency trading
comes with bundled benefits of hedging,
arbitrage and decent margin leverage
and there’s no looking back.</p>
                                    </div>
                                </div>
                                <div className="mode-list-itm">
                                    <div className="mode-itm-top">
                                        <h3>Commodities</h3>
                                    </div>
                                    <div className="mode-itm-mn">
                                        <h3>Commodities</h3>
                                        <p>Commodity trading
stands out and holds no correlation.
Presenting Commodity Trading, the only segment which provides such wide
array of investment avenues which enables
the investor to diversify more.</p>
                                    </div>
                                </div>
                                <div className="mode-list-itm">
                                    <div className="mode-itm-top">
                                        <h3>Future &amp; Options</h3>
                                    </div>
                                    <div className="mode-itm-mn">
                                        <h3>Future &amp; Options</h3>
                                        <p>Trade in the futures and options segment with choice on our cutting edge trading platform to find all the right tools in your dogo at competitive brokerage plans. Enjoy higher leverage, volatility and better payouts in F&amp;O segment.</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            
        </div>
    );
}

export default Banner;