
import React from "react";
import Bannerimage from '../../assets/images/brokerage-charges/banner-img.webp';
import Quote from '../../assets/images/insurance/quote.svg';
import Claim from '../../assets/images/insurance/claim.svg';
import Renewal from '../../assets/images/insurance/renewal.svg';
import LazyLoader from '../Common-features/LazyLoader';


function Banner() {

  return (
    <div>
      
     
    <section className="insurance-bannersection">
        <div className="container">
            <div className="row gx-5">
                <div className="col-md-6 lft-sec">
                    <h1 className="big-ttl">Insuring India</h1>
                    <p className="para">Helping you Navigate the Future <br/>
                        With precise Insurance</p>
                    <p className="para p-yl">Not More, Not Less - Just Right</p>
                </div>
                <div className="col-md-6">
                    <div className="rightsec">
                        <LazyLoader src={Bannerimage} alt={"Banner Images"} className={"img-fluid"} width={"609"} height={"476"} />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="direct-links">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <ul className="reset">
                            <li>
                                <a href="#" className="link-itm">
                                    <span className="link-itm-img">
                                        <LazyLoader src={Quote} alt={"Banner Images"} className={"img-fluid sm-img"} width={"50"} height={"40"} />
                                    </span>
                                    <h4>Get Quote</h4>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-itm">
                                    <span className="link-itm-img">
                                        <LazyLoader src={Claim} alt={"Banner Images"} className={"img-fluid sm-img"} width={"50"} height={"40"} />
                                    </span>
                                    <h4>Claim</h4>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="link-itm">
                                    <span className="link-itm-img">
                                        <LazyLoader src={Renewal} alt={"Banner Images"} className={"img-fluid sm-img"} width={"50"} height={"40"} />
                                    </span>
                                    <h4>Renewal</h4>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    </section>

   
    
    </div>
  );
}

export default Banner;
