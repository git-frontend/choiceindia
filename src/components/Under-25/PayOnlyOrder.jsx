import React from 'react';
import  PayOrder  from '../../assets/images/under-25/pay-order-banner.png';

function PayOnlyOrder() {
  return (
    <>
        <section className='pay-only-order'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='pay-order-img'>
                            <img src={PayOrder} alt="under 25" height={591} width={549} className="img-fluid"/>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default PayOnlyOrder