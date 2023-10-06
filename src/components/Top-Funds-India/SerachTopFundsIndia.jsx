import React from 'react'
import LazyLoader from '../Common-features/LazyLoader';
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
  return (
    <>
    <section className='search-funds-sec' id='showForm'>
        <div className='container'>
            <div className='row justify-content-end'>
                <div className='col-xl-5 col-md-6 col-sm-12'>
                    <div className='search-bar'>
                        <input type="text" className="input-control search-icon"  placeholder="Search"/>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='search-items-sec'>
                        <div className='search-items'>
                            <div className='circle'>
                                <a href="/">
                                <LazyLoader src={ELSS} className={'img-fluid'} height={"130"} width={"130"} alt={""} /> 
                                </a>
                            </div>
                            <h4 className='mf-com-name'>
                                <a href="/">Tax Saving (ELSS) Funds</a>
                            </h4>
                        </div>
                        <div className='search-items'>
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SerachTopFunds