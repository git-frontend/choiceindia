
import React,{useState} from "react";
// import videoBg from '../../assets/images/insurance/insuringShield.mp4'
import icon1 from '../../assets/images/ipo/icon1.svg'
import icon2 from '../../assets/images/ipo/icon2.svg'
import icon3 from '../../assets/images/ipo/icon3.svg'
import LazyLoader from '../Common-features/LazyLoader';
import Equity from "../../Data/Equity";
import DematAccountForm from '../Common-features/DematAccountForm'

function Banner() {
    const [selected, setSelected] = useState(0);

    return (
        <div>
            <section className="equity-bannersection ipo-equity">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-md-6 lft-sec">
                            <h1 className="big-ttl">IPO Investment</h1>
                            <ul className="reset">
                                <li className="">
                                    <span className="">
                                        <LazyLoader src={icon1} alt={" insurance  services"} className={"img-fluid"} width={"126"} height={"126"} />
                                    </span>
                                    <h4>IPO Analysis by Experts</h4>
                                </li>
                                <li className="">
                                    <span className="">
                                        <LazyLoader src={icon2} alt={" insurance  services"} className={"img-fluid"} width={"126"} height={"126"} />
                                    </span>
                                    <h4>IPO Report To Take Decision</h4>
                                </li>
                                <li className="">
                                    <span className="">
                                    <LazyLoader src={icon3} alt={" insurance  services"} className={"img-fluid"} width={"126"} height={"126"} />
                                    </span>
                                    <h4>Free IPO Investmnets Account</h4>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <div className="rightsec d-flex justify-content-end">
                                <DematAccountForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Banner;