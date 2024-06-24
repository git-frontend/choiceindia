import CareerImage5 from '../../assets/images/career/advanced-stipend.svg';
import CareerImage6 from '../../assets/images/career/profit-sharing.svg';
import CareerImage7 from '../../assets/images/career/team-outing.svg';
import CareerImage8 from '../../assets/images/career/health-insurance.svg';
import CareerImage9 from '../../assets/images/career/skill-upgradation.svg';
import CareerImage10 from '../../assets/images/career/free-internet.svg';
import CareerImage11 from '../../assets/images/career/youtube-premium.svg';
import CareerImage12 from '../../assets/images/career/free-therapy-sessions.svg';
import hiring from '../../assets/images/career/hiring.svg';
import React from "react";
import LazyLoader from '../Common-features/LazyLoader';

function BenefitsPerks() {



    return (
        <div className='career-main' >


            <section className='benefits-perks-main'>
                <div className='container'>
                    <div className='benefits-perks container'>

                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="heading-sec">
                                    <h3 className="title-first">Benefits &amp; Perks</h3>
                                </div>
                            </div>
                        </div>
                        <div className='row justify-content-center'>
                            <div className='col-xl-7 col-md-10'>
                                <div className='perks-list'>
                                    <div className='perks-list-itm'>
                                        <LazyLoader src={CareerImage5} alt={"advanced stipend"} className={'img-fluid'} width={"42"} height={"42"} />                                       
                                        <h4>Advance Stipend </h4>
                                    </div>
                                    <div className='perks-list-itm'>
                                        <LazyLoader src={CareerImage6} alt={"profit sharing"} className={'img-fluid'} width={"42"} height={"42"} />
                                        <h4>Profit Sharing </h4>
                                    </div>
                                    <div className='perks-list-itm'>
                                        <LazyLoader src={CareerImage7} alt={"team outing"} className={'img-fluid'} width={"42"} height={"42"} />
                                        <h4>Team Outings  </h4>
                                    </div>
                                    <div className='perks-list-itm'>
                                        <LazyLoader src={CareerImage8} alt={"health insurance"} className={'img-fluid'} width={"42"} height={"42"} />
                                        <h4>Health Insurance </h4>
                                    </div>
                                    <div className='perks-list-itm'>
                                        <LazyLoader src={CareerImage9} alt={"skill upgradation"} className={'img-fluid'} width={"42"} height={"42"} />
                                        <h4>Skill Upgradation </h4>
                                    </div>
                                    <div className='perks-list-itm'>
                                        <LazyLoader src={CareerImage10} alt={"free internet"} className={'img-fluid'} width={"42"} height={"42"} />
                                        <h4>Free Internet  </h4>
                                    </div>
                                    <div className='perks-list-itm'>
                                        <LazyLoader src={CareerImage11} alt={"Youtube Premium"} className={'img-fluid'} width={"42"} height={"42"} />
                                        <h4>Youtube Premium </h4>
                                    </div>
                                    <div className='perks-list-itm'>
                                        <LazyLoader src={CareerImage12} alt={"Free Therapy Sessions"} className={'img-fluid'} width={"42"} height={"42"} />
                                        <h4>Free Therapy sessions </h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="container">
                <div className="middle-bar-cont">
                    <div className="bar-cont-des">
                    <h3 className="title-fourth">
                    { <img src={hiring} alt='Loading' className={'img-fluid'} width={"42"} height={"37"} />}
                    <span>We’re hiring !</span> To join our team</h3>
                    <a href="https://hrconnect.qandle.com/#/jobs" target="_blank" className="btn-bg btn-light">Click Here</a>
                    </div>
                </div>
                </div>

            </section>
        </div>
    );
}

export default BenefitsPerks;
