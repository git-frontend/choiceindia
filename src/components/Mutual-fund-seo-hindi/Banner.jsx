
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
            <section className="mfi-bannersection">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-md-6 lft-sec">
                            <h1 className="big-ttl"><span>म्यूचुअल फंड</span> में निवेश करें चॉइस के साथ</h1>
                        </div>
                        <div className="col-md-6">
                            <div className="rightsec d-flex justify-content-end" id="mutualid">
                                <DematAccountForm language='hindi'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Banner;