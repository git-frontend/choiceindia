import React from 'react'
import cfplImg from '../../assets/images/cfpl-impact/choice-finserv-private-limited.webp';
import LazyLoader from '../Common-features/LazyLoader';

function CFPLDetails() {
  return (
    <div>
        <section className='cfpl-details'>
            <div className='text-center'>
                <LazyLoader src={cfplImg} alt={"Choice Finserv Private Limited"} className={"img-fluid sm-img"} width={"900"} height={"795"} />
            </div>
            <span className='cfpl-bg'></span>
        </section>
    </div>
  )
}

export default CFPLDetails