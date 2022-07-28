
import React from "react";
import bike from '../../assets/images/insurance/bike.svg';
import car from '../../assets/images/insurance/car.svg';
import health from '../../assets/images/insurance/health.svg';
import term from '../../assets/images/insurance/term.svg';

import LazyLoader from '../Common-features/LazyLoader';


function InsuranceList() {

  return (
    <div>
      
     
    <section className="insurance-list">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                  <h2 className="title-secnd text-center">Need Insurance ? We got you Covered</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ul className="reset">
                        <li className="ins-list-item">
                            <a href="/" className="list-item-link">
                                <LazyLoader src={car} alt={"Banner Images"} className={"img-fluid sm-img"} width={"50"} height={"40"} />
                                <h3 className="ins-ttl">Car Insurance</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                            </a>
                        </li>
                        <li className="ins-list-item">
                            <a href="/" className="list-item-link">
                                <LazyLoader src={health} alt={"Banner Images"} className={"img-fluid sm-img"} width={"50"} height={"40"} />
                                <h3 className="ins-ttl">Health Insurance</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                            </a>
                        </li>
                        <li className="ins-list-item">
                            <a href="/" className="list-item-link">
                                <LazyLoader src={bike} alt={"Banner Images"} className={"img-fluid sm-img"} width={"50"} height={"40"} />
                                <h3 className="ins-ttl">Bike Insurance</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                            </a>
                        </li>
                        <li className="ins-list-item">
                            <a href="/" className="list-item-link">
                                <LazyLoader src={term} alt={"Banner Images"} className={"img-fluid sm-img"} width={"50"} height={"40"} />
                                <h3 className="ins-ttl">Term Insurance</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section className="get-start">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="get-start-sub">
                        <h3>Get Insured with Minimal Documentation</h3>
                        <a href="#" className="btn-bg">Get Started</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

   
    
    </div>
  );
}

export default InsuranceList;
