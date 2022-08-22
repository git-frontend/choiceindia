
import React from "react";
import BrokerageCalculator from "./BrokerageCalculator";
import {useRef} from 'react';



function PricingStocks() {

 // console.log('Stocks')
  return (
    <div>

      <div className="banner-tab-cont"  id="scrollstocks">
        <div className="heading-sec">
          <h3 className="title-secnd">Brokerage Charges</h3>
        </div>
        <div className="pricing-table-tab" >
          <div className="table-responsive">
            <table className="pricing-data">
              <thead>
                <th width="150">
                  Charges
                </th>
                <th width="180">
                  Brokerage
                </th>
                <th width="250">
                  STT
                </th>
                <th width="200">
                  Txn Charges
                </th>
                <th width="250">
                  GST
                </th>
                <th>
                  SEBI Charges
                </th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <h5>Equity <br /> Intraday</h5>
                  </td>
                  <td>
                    <h6>0.02%</h6>
                  </td>
                  <td>
                    <h6>0.025% on the sell side</h6>
                  </td>
                  <td>
                    <h6>NSE/BSE: <br />0.00345%</h6>
                  </td>
                  <td>
                    <h6>18% on (Brokerage + Transaction Charges)</h6>
                  </td>
                  <td>
                    <h6>₹ 10 / crore</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Equity <br />Delivery</h5>
                  </td>
                  <td>
                    <h6>0.2%</h6>
                  </td>
                  <td>
                    <h6>0.1% on buy &amp; sell</h6>
                  </td>
                  <td>
                    <h6>NSE/BSE: <br />0.00345%</h6>
                  </td>
                  <td>
                    <h6>18% on (Brokerage + Transaction Charges)</h6>
                  </td>
                  <td>
                    <h6>₹ 10 / crore</h6>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="term-para"><strong>Condition Applied* </strong>:  Above charges are applicable for clients who have registered online. These charges will vary for our offline clients (who can avail extended facilities such as a higher margin and a dedicated RM/Dealer).</p>
        </div>

        {/* <div className="brokerage-calculator">
          <div className="heading-sec">
            <h3 className="title-secnd">Brokerage Calculator</h3>
          </div>
    
      

    <div className="calc-box">
    <BrokerageCalculator name={'Equity Delivery'} id={'equity-delivery'}></BrokerageCalculator>
          <BrokerageCalculator name={'Equity Intraday'} id={'equity-intraday'}></BrokerageCalculator>
          </div>
        </div> */}
      </div>

    </div>
  );
}

export default PricingStocks;
