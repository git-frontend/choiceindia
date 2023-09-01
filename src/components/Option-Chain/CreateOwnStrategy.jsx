import React from 'react'
import LazyLoader from '../Common-features/LazyLoader'
import Unlimited from '../../assets/images/option-chain/unlimited-backtests.svg';
import ReadyMade from '../../assets/images/option-chain/ready-made.svg';
import NoCoding from '../../assets/images/option-chain/no-coding-skills.svg';

function CreateOwnStrategy() {
  return (
    <>
        <section className='create-own-strategy'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                      <div className='own-strategy-ttl text-center'>
                        <h2 className='title-first'>Create Your <span>Own Strategy</span> in <span>5 Mins</span>.</h2>
                      </div>
                    </div>
                    <div className='col-md-12'>
                        <div className='own-strategy-benifits'>
                            <div className='own-strategy-items'>
                                <div className='bg-gradiunt'>
                                  <LazyLoader src={Unlimited} height={42} width={40}></LazyLoader>
                                </div>
                                <h5>Unlimited Backtests</h5>
                            </div>
                            <div className='own-strategy-items'>
                                <div className='bg-gradiunt'>
                                  <LazyLoader src={ReadyMade} height={42} width={40}></LazyLoader>
                                </div>
                                  <h5>Ready-Made Strategies</h5>
                            </div>
                            <div className='own-strategy-items'>
                                <div className='bg-gradiunt'>
                                  <LazyLoader src={NoCoding} height={28} width={40}></LazyLoader>
                                </div>
                                <h5>No Coding Skills Required</h5>
                            </div>
                        </div>
                        <div className="text-center">
                          <a className="cursor-pointer"><span className="btn-bg btn-bg-dark">Create Now</span></a>
                          </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default CreateOwnStrategy