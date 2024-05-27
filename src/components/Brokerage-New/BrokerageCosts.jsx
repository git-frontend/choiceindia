import LazyLoader from '../Common-features/LazyLoader';
import React from "react";
import brokeragecalculator from '../../assets/images/Brokerage-New/know-applicable-brokerage-charges.svg';
function BrokerageCosts() {
   return (
      <div>
         <section className="BrokerageCosts">
            <div className="container">
               <div className="row">
                  <div className="title">
                      <h2 className="title-secnd">Know Your Exact Costs</h2>
                      <p>Calculate your overall costs, including our lowest brokerage charges.</p>    
                  </div>
               </div>
               <div className="row">
                  <div className="col-md-12">
                     <div className="calculator-list-section">
                        <div className="list-itm">
                           <h3>Brokerage Calculator</h3>
                           <p>Know how much you will pay in <br/>
                              brokerage with every trade.</p>
                           <div className="list-itm-btn">
                              <a className='nav-link' href="/brokerage-calculator">Calculate now</a>
                              <LazyLoader src={brokeragecalculator} alt={"know applicable brokerage charges"} className={"img-fluid"} width={"168"} height={"146"} />
                           </div>
                        </div>
                        <div className="list-itm">
                           <h3>Margin Calculator</h3>
                           <p>Check the margin required for<br/>
                           F&O, Commodity, & Currency trade.</p>
                              <div className="list-itm-btn">
                              <a className='nav-link' href="/margin-calculator">Calculate now</a>
                              <LazyLoader src={brokeragecalculator} alt={"know applicable margin charges"} className={"img-fluid"} width={"168"} height={"146"} />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>


      </div>
   );
}

export default BrokerageCosts;
