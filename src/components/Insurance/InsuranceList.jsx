
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
                            <a href= "https://choiceinsurance.in/buy-online/motor-insurance/car/Q0JBMjQwOTU5OA==?lead_source=choiceindia" target="_blank" className="list-item-link">


                            <div >
                            <span className="img-txt">
                                    <LazyLoader src={car} alt={"Banner Images"} className={"img-fluid sm-img"} width={"165"} height={"102"} /> 
                                 </span>
                                <h3 className="ins-ttl">Car Insurance</h3>
                                <p>Get quotes for all your car insurance needs</p>
                            </div>
                            </a>
                        </li>
                        <li className="ins-list-item">
                            <a href=" https://choiceinsurance.in/buy-online/motor-insurance/bike/Q0JBMjQwOTU5OA==?lead_source=choiceindia" target="_blank" className="list-item-link">
                            <div >
                                <span className="img-txt">
                                    <LazyLoader src={bike} alt={"Banner Images"} className={"img-fluid sm-img"} width={"203"} height={"116"} />
                                </span>
                                <h3 className="ins-ttl">Bike Insurance</h3>
                                <p>The most diverse range of policies for your bike</p>
                            </div>
                            </a>
                        </li>
                        <li className="ins-list-item">
                            <a href="https://choiceinsurance.in/buy-online/health-insurance/Q0JBMjQwOTU5OA==?lead_source=choiceindia" target="_blank" className="list-item-link">
                            <div >
                             <span className="img-txt">
                                    <LazyLoader src={health} alt={"Banner Images"} className={"img-fluid sm-img"} width={"108"} height={"152"} />
                                </span>
                                <h3 className="ins-ttl">Health Insurance</h3>
                                <p>Your most important asset deserves the best</p>
                            </div>
                            </a>
                        </li>
                      
                        <li className="ins-list-item">
                            <a href="https://choiceinsurance.in/buy-online/term-insurance/Q0JBMjQwOTU5OA==?lead_source=choiceindia" target="_blank" className="list-item-link">
                            <div >
                            <span className="img-txt">
                                    <LazyLoader src={term} alt={"Banner Images"} className={"img-fluid sm-img"} width={"100"} height={"130"} />
                                </span>
                                <h3 className="ins-ttl">Term Insurance</h3>
                                <p>Find the best plan for yourself among many</p>
                            </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    

   
    
    </div>
  );
}

export default InsuranceList;
