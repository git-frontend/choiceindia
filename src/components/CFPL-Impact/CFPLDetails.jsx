import React from 'react'
import cfplImg from '../../assets/images/cfpl-impact/cfpl-img.webp';
import LazyLoader from '../Common-features/LazyLoader';

function CFPLDetails() {
  return (
    <div>
        <section className='cfpl-details'>
            <div className='text-center'>
                <LazyLoader src={cfplImg} alt={"Banner Images"} className={"img-fluid sm-img"} width={"900"} height={"795"} />
            </div>
            <span className='cfpl-bg'></span>
        </section>
    </div>
  )
}

export default CFPLDetails