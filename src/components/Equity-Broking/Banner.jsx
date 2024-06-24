
import React,{useState} from "react";;
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
                                
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            
        </div>
    );
}

export default Banner;