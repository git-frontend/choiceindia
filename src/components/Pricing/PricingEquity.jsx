
import React from "react";
import Form from 'react-bootstrap/Form';
import BrokerageCalculator from "./BrokerageCalculator";




function PricingEquity() {


  return (
    <div>

      <div className="banner-tab-cont" id="scrollequity">
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
                    <h5>Equity <br /> Futures</h5>
                  </td>
                  <td>
                    <h6>0.02%</h6>
                  </td>
                  <td>
                    <h6>0.01% on sell side</h6>
                  </td>
                  <td>
                    <h6>NSE: Exchange transaction charge: 0.002% Clearing charge: 0.0005%</h6>
                  </td>
                  <td>
                    <h6>18% on (Brokerage + Transaction Charges + Clearing Charges)</h6>
                  </td>
                  <td>
                    <h6>₹ 10 / crore</h6>
                  </td>
                </tr>
                <tr>
                  <td>
                    <h5>Equity <br />Options</h5>
                  </td>
                  <td>
                    <h6>₹ 25 per lot</h6>
                  </td>
                  <td>
                    <h6>0.053% on sell side (on premium). In case of Options Exercise 0.125% on ( Settlement Price * Quantity) to be paid by Buyer</h6>
                  </td>
                  <td>
                    <h6>NSE: Exchange transaction charge: 0.05% Clearing charge: 0.002%</h6>
                  </td>
                  <td>
                    <h6>18% on (Brokerage + Transaction Charges + Clearing Charges)</h6>
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
        
        
          <BrokerageCalculator name={'Equity Futures'} id={'equity-futures'}></BrokerageCalculator>
          <BrokerageCalculator name={'Equity Options'} id={'equity-options'}></BrokerageCalculator>
      </div>

    </div>
  );
}

export default PricingEquity;
