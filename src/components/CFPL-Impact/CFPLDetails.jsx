import React from 'react'
import cfplImg from '../../assets/images/cfpl-impact/choice-finserv-private-limited.webp';
import LazyLoader from '../Common-features/LazyLoader';
import NBFCMenu from '../Common-features/NBFCMenu';
function CFPLDetails() {
  return (
    <div>

      <section className='cfpl-details'>
        
        <div className="container">
          <div className='row'>
            <div className='col-md-12'>
              <NBFCMenu />
            </div>
          </div>
          <div className='row'>
            <div className='text-center'>
              <LazyLoader src={cfplImg} alt={"Choice Finserv Private Limited"} className={"img-fluid sm-img"} width={"900"} height={"795"} />
            </div>
          </div>
        </div>

        <span className='cfpl-bg'></span>
      </section>
    </div>
  )
}

export default CFPLDetails