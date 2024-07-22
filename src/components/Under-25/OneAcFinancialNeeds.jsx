import React, { useState, useEffect } from 'react';
import  Avtar  from '../../assets/images/under-25/avtar.svg';
import  stocks  from '../../assets/images/under-25/stocks.webp';
import  DLF  from '../../assets/images/under-25/dlf.svg';
import  Reliance  from '../../assets/images/under-25/reliance.svg';
import  AdaniPower  from '../../assets/images/under-25/adani-power.svg';
import  Voltas  from '../../assets/images/under-25/voltas.svg';
import  Sonata  from '../../assets/images/under-25/sonata.svg';
import  eicher  from '../../assets/images/under-25/eicher-moters.svg';
import  mf  from '../../assets/images/under-25/mutual-fund.webp';
import  zeropercent  from '../../assets/images/under-25/zero-percent.webp';
function OneAcFinancialNeeds() {

    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('your-section-id'); 
      if (!section) return;

      const sectionTop = section.offsetTop;
      const currentScrollPos = window.pageYOffset;
      const isScrolledIntoView = currentScrollPos > sectionTop;

      setIsVisible(isScrolledIntoView);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
    <section className='financial-needs-sec' id='your-section-id'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='heading-sec'>
                        <div className='avtar-sec'>
                            <img src={Avtar} alt='Avtar' width={141} height={59} className='img-fluid' />
                        </div>
                        <h2>One account for all your <br/>financial needs.</h2>
                    </div>
                    <div className='name-stocks'>
                        <div className='banner-caption'>
                            <h3>You name the stocks</h3>
                            <p>With over 5000+ stocks & 100+ ETFs, from established names like Reliance and Tata to the next big thing, own shares of some of the most popular companies.</p>
                        </div>
                        <div className='im-sec'>
                            <img src={stocks} alt='You name the stocks' height={621} width={1301} className='img-fluid stocks-banner' />
                        </div>
                        <div className={`scroll-div ${isVisible ? 'show' : 'hide'}`}>
                            <div className='icons icon-1'>
                                <img src={eicher} alt="Eicher Moter" height={107} width={107} className="img-fluid"/>
                            </div>
                            <div className='icons icon-2'>
                                <img src={DLF} alt="DLF" height={107} width={107} className="img-fluid"/>
                            </div>
                            <div className='icons icon-3'>
                                <img src={Reliance} alt="Reliance" height={107} width={107} className="img-fluid"/>
                            </div>
                            <div className='icons icon-4'>
                                <img src={AdaniPower} alt="Adani Power" height={107} width={107} className="img-fluid"/>
                            </div>
                            <div className='icons icon-5'>
                                <img src={Voltas} alt="Voltas" height={107} width={107} className="img-fluid"/>
                            </div>
                            <div className='icons icon-6'>
                                <img src={Sonata} alt="Sonata" height={107} width={107} className="img-fluid"/>
                            </div>
                        </div>
                        
                    </div>
                    <div className='mutual-funds-order'>
                        <div className='left-sec'>
                            <div className='mf-funds'>
                                <img alt='Mutual funds' src={mf} width={587} height={503} className="img-fluid ban-mf"/>
                                <div className='mf-caption'>
                                    <h3>Mutual funds ain't your grandpa's thing anymore.</h3>
                                    <p>Build your future with compounding <br /> power, right from your phone.</p>
                                </div>
                            </div>
                        </div>
                        <div className='right-sec'>
                            <div className='orders'>
                                <img alt='zero Percent' src={zeropercent} className="img-fluid" width={587} height={503}/>
                            </div>
                        </div>
                    </div>
                    <div className='invest-trends'>
                        <div className='invest-caption'>
                            <h3>Invest in trends, not tickers.</h3>
                            <p>Curated eqiuty and mutual fund baskets that capture the next big thing, before it blows up.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OneAcFinancialNeeds