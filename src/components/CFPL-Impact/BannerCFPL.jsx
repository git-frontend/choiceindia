
import React from 'react';
import choiceFinserv from '../../assets/images/cfpl-impact/about-choice-finserv.webp';
import LazyLoader from '../Common-features/LazyLoader';

function BannerCFPL(){
    return(
        <div>
            <section className="banner-cfpl">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-12">
                            <h1 className="big-ttl">About Choice Finserv</h1>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <div className='banner-image'>
                                <LazyLoader src={choiceFinserv} alt={"About Choice Finserv"} className={"img-fluid sm-img"} width={"400"} height={"262"} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6">
                            <p className='para'>Choice Finserv, a subsidiary of the Mumbai headquartered financial conglomerate, Choice International Limited (BSE: 531358 NSE: CHOICEIN) is a tech enabled platform that facilitates credit for the MSMEs with a special focus on the underserved and unserved community of the country. Choice Group strongly believes that the MSME sector is the backbone of the Indian economy. With technologies like Artificial Intelligence (AI), Machine Learning (ML) and data analytics, Choice Group intends to solve MSMEs’ pain points by providing digital-first service oﬀerings. Our primary goal is to bridge the massive credit gap by facilitating eﬃcient service delivery, better risk management, and seamless lending operations.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
export default BannerCFPL;