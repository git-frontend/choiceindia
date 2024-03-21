import React from 'react';
import  Avtar  from '../../assets/images/under-25/avtar.png';
import  stocks  from '../../assets/images/under-25/stocks.png';
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
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default OneAcFinancialNeeds