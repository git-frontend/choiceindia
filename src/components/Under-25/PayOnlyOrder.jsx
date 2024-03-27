import React from 'react';
import  PayOrder  from '../../assets/images/under-25/pay-order-banner.png';

function PayOnlyOrder() {
  return (
    <>
        <section className='pay-only-order' id="showForm">
            <div className='container'>
                <div className='pay-order'>
                    <div className='img-sec'>
                        <div className='pay-order-img'>
                            <img src={PayOrder} alt="under 25" height={591} width={549} className="img-fluid"/>
                        </div>
                    </div>
                    <div className='content-sec'>
                        <div className='caption'>
                            <h3>Pay only ₹7/order.</h3>
                            <p>Compared to ₹20/order elsewhere, save a flat 65% on brokerage with Choice FinX.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PayOnlyOrder