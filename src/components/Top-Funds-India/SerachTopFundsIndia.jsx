import React, { useState, useEffect } from "react";
import rest from "../../Services/rest";
import LazyLoader from '../Common-features/LazyLoader';
import noDataimg from '../../assets/images/no-data.webp';
import ELSS from '../../assets/images/top-fund-india/best-tax-saving-mutual-funds.svg';
import MidCap from '../../assets/images/top-fund-india/best-mid-cap-mutual-funds.svg';
import LargCap from '../../assets/images/top-fund-india/best-large-cap-mutual-funds.svg';
import SmallCap from '../../assets/images/top-fund-india/best-small-cap-mutual-funds.svg';
import MultiCap from '../../assets/images/top-fund-india/best-multi-cap-mutual-funds.svg';
import LargeMidCap from '../../assets/images/top-fund-india/best-large-mid-cap-mutual-funds.svg';
import LiquidFund from '../../assets/images/top-fund-india/best-liquid-mutual-funds.svg';
import ValueFund from '../../assets/images/top-fund-india/best-value-funds.svg';
import SectorFund from '../../assets/images/top-fund-india/best-sector-mutual-funds.svg';
import focusedFund from '../../assets/images/top-fund-india/best-focused-mutual-funds.svg';

function SerachTopFunds() {
    const [data, setData] = useState([]);
    const [trigger, setTrigger] = useState();
    const goToTopFundsDetail = () => {
        rest.getCategoriesList().then(
            res => {
                setData(res.Response);

                console.log("res", res.Response)
            }
        )
    }
    useEffect(() => {

        setTrigger(true)
        if (trigger === true) {
            goToTopFundsDetail()
        }

    }, [trigger])

    return (
        <>
            <section className='search-funds-sec' id='showForm'>
                <div className='container'>
                    <div className='row justify-content-end'>
                        <div className='col-xl-5 col-md-6 col-sm-12'>
                            <div className='search-bar'>
                                <input type="text" className="input-control search-icon" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='search-items-sec'>
                                {
                                    data.length ?
                                        <div className='search-items'>
                                            {
                                                data.map((res, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <div className='circle'>
                                                                <a onClick={() => goToTopFundsDetail(category)}>
                                                                    <LazyLoader src={ELSS} className={'img-fluid'} height={"130"} width={"130"} alt={""} />
                                                                </a>
                                                            </div>
                                                            <h4 className='mf-com-name'>
                                                                <a onClick={() => goToTopFundsDetail(category)}>Tax Saving (ELSS) Funds</a>
                                                            </h4>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div> :
                                        <div className="text-center">
                                            <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                        </div>


                                }

                                {/* <div className='search-items'>
                                    <div className='circle'>
                                        <a href="/">
                                            <LazyLoader src={MidCap} className={'img-fluid'} height={"130"} width={"130"} alt={""} />
                                        </a>
                                    </div>
                                    <h4 className='mf-com-name'>
                                        <a href="/">Mid Cap Funds</a>
                                    </h4>
                                </div>
                                <div className='search-items'>
                                    <div className='circle'>
                                        <a href="/">
                                            <LazyLoader src={LargCap} className={'img-fluid'} height={"130"} width={"130"} alt={""} />
                                        </a>
                                    </div>
                                    <h4 className='mf-com-name'>
                                        <a href="/">Large Cap Funds</a>
                                    </h4>
                                </div>
                                <div className='search-items'>
                                    <div className='circle'>
                                        <a href="/">
                                            <LazyLoader src={SmallCap} className={'img-fluid'} height={"130"} width={"130"} alt={""} />
                                        </a>
                                    </div>
                                    <h4 className='mf-com-name'>
                                        <a href="/">Small Cap Funds</a>
                                    </h4>
                                </div>
                                <div className='search-items'>
                                    <div className='circle'>
                                        <a href="/">
                                            <LazyLoader src={MultiCap} className={'img-fluid'} height={"130"} width={"130"} alt={""} />
                                        </a>
                                    </div>
                                    <h4 className='mf-com-name'>
                                        <a href="/">Multi Cap Funds</a>
                                    </h4>
                                </div>
                                <div className='search-items'>
                                    <div className='circle'>
                                        <a href="/">
                                            <LazyLoader src={LargeMidCap} className={'img-fluid'} height={"130"} width={"130"} alt={""} />
                                        </a>
                                    </div>
                                    <h4 className='mf-com-name'>
                                        <a href="/">Large & Mid Cap Funds</a>
                                    </h4>
                                </div>
                                <div className='search-items'>
                                    <div className='circle'>
                                        <a href="/">
                                            <LazyLoader src={LiquidFund} className={'img-fluid'} height={"130"} width={"130"} alt={""} />
                                        </a>
                                    </div>
                                    <h4 className='mf-com-name'>
                                        <a href="/">Liquid Funds</a>
                                    </h4>
                                </div>
                                <div className='search-items'>
                                    <div className='circle'>
                                        <a href="/">
                                            <LazyLoader src={ValueFund} className={'img-fluid'} height={"130"} width={"130"} alt={""} />
                                        </a>
                                    </div>
                                    <h4 className='mf-com-name'>
                                        <a href="/">Value Funds</a>
                                    </h4>
                                </div>
                                <div className='search-items'>
                                    <div className='circle'>
                                        <a href="/">
                                            <LazyLoader src={SectorFund} className={'img-fluid'} height={"130"} width={"130"} alt={""} />
                                        </a>
                                    </div>
                                    <h4 className='mf-com-name'>
                                        <a href="/">Sectoral/Thematic Funds</a>
                                    </h4>
                                </div>
                                <div className='search-items'>
                                    <div className='circle'>
                                        <a href="/">
                                            <LazyLoader src={focusedFund} className={'img-fluid'} height={"130"} width={"130"} alt={""} />
                                        </a>
                                    </div>
                                    <h4 className='mf-com-name'>
                                        <a href="/">Focused Funds</a>
                                    </h4>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SerachTopFunds