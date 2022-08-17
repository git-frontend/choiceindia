import React from "react";
import img1 from '../../assets/images/ipo/tag-list.svg'

import LazyLoader from '../Common-features/LazyLoader';

function IPOProcess() {

 

  return (
    <div>
      
      <section className="process-ipo">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2 className="title-first">Hassle Free IPO Investment <br/> Process</h2>
            </div>
          </div>
          <div className="row justify-content-center">
              <div className="col-md-9">
                  
                  <div className="ipo-list-img">
                    <div className="process-ipo-list">
                        <div className="ipo-list-itm">
                            <h3>01</h3>
                            <h4>Open Demat <br/>Account</h4>
                        </div>
                        <div className="ipo-list-itm">
                            <h3>02</h3>
                            <h4>Bid For IPO</h4>
                        </div>
                        <div className="ipo-list-itm">
                            <h3>03</h3>
                            <h4>IPO Allotment</h4>
                        </div>
                        <div className="ipo-list-itm">
                            <h3>04</h3>
                            <h4>Shares Credited in Demat Account</h4>
                        </div>
                    </div>
                     <LazyLoader src={img1} alt={" insurance  services"} className={"img-fluid mn-img-big"} width={"900"} height={"248"} />
                  </div>
              </div>
          </div>
        </div>  
      </section>

    </div>
  );
}

export default IPOProcess;