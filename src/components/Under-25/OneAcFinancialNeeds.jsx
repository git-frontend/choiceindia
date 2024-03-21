import React from 'react';
import  Avtar  from '../../assets/images/under-25/avtar.png';
import  stocks  from '../../assets/images/under-25/stocks.png';
import  DLF  from '../../assets/images/under-25/dlf.png';
import  Reliance  from '../../assets/images/under-25/reliance.png';
import  AdaniPower  from '../../assets/images/under-25/adani-power.png';
import  Voltas  from '../../assets/images/under-25/voltas.png';
import  Sonata  from '../../assets/images/under-25/sonata.png';
import  eicher  from '../../assets/images/under-25/eicher-moters.png';
import  mf  from '../../assets/images/under-25/mutual-fund.png';
function OneAcFinancialNeeds() {
  return (
    <>
    <section className='financial-needs-sec'>
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
                        <img src={stocks} alt='You name the stocks' height={621} width={1301} className='img-fluid stocks-banner' />
                        <div className='banner-caption'>
                            <h3>You name the stocks</h3>
                            <p>With over 5000+ stocks & 100+ ETFs, from established names like Reliance and Tata to the next big thing, own shares of some of the most popular companies.</p>
                        </div>
                        <div className='icons icon-1'>
                            <img src={eicher} alt="Eicher Moter" height={121} width={122} className="img-fluid"/>
                        </div>
                        <div className='icons icon-2'>
                            <img src={DLF} alt="DLF" height={121} width={122} className="img-fluid"/>
                        </div>
                        <div className='icons icon-3'>
                            <img src={Reliance} alt="Reliance" height={121} width={122} className="img-fluid"/>
                        </div>
                        <div className='icons icon-4'>
                            <img src={AdaniPower} alt="Adani Power" height={121} width={122} className="img-fluid"/>
                        </div>
                        <div className='icons icon-5'>
                            <img src={Voltas} alt="Voltas" height={121} width={122} className="img-fluid"/>
                        </div>
                        <div className='icons icon-6'>
                            <img src={Sonata} alt="Sonata" height={121} width={122} className="img-fluid"/>
                        </div>
                    </div>
                    <div className='mutual-funds-order'>
                        <div className='left-sec'>
                            <div className='mf-funds'>
                                <img src={mf} width={587} height={503} className="img-fluid ban-mf"/>
                                <div className='mf-caption'>
                                    <h3>Mutual funds ain't your grandpa's thing anymore.</h3>
                                    <p>Build your future with compounding power, right from your phone.</p>
                                </div>
                            </div>
                        </div>
                        <div className='right-sec'>
                            <div className='orders'></div>
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