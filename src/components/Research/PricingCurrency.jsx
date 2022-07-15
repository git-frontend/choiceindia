
import React from "react";
import Form from 'react-bootstrap/Form';
import BrokerageCalculator from "../Pricing/BrokerageCalculator";




function PricingEquity() {



  return (
    <div>

      <div className="banner-tab-cont">
        <div className="heading-sec">
          <h3 className="title-secnd">Brokerage Charges</h3>
        </div>
        <div className="pricing-table-tab">
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
                    <h5>Curency <br /> Futures</h5>
                  </td>
                  <td>
                    <h6>0.02%</h6>
                  </td>
                  <td>
                    <h6>No STT</h6>
                  </td>
                  <td>
                    <h6>NSE: Exchange transaction charge: 0.0009% Clearing charge: 0.0005%</h6>
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
                    <h5>Currency <br />Options</h5>
                  </td>
                  <td>
                    <h6>₹ 20 per lot</h6>
                  </td>
                  <td>
                    <h6>No STT</h6>
                  </td>
                  <td>
                    <h6>NSE: Exchange transaction charge: 0.035% Clearing charge: 0.002%</h6>
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

        <div className="brokerage-calculator">
          <div className="heading-sec">
            <h3 className="title-secnd">Brokerage Calculator</h3>
          </div>

         
          <div className="calc-box">
         {/*  <BrokerageCalculator name={'Currency Futures'} id={'currency-futures'}></BrokerageCalculator>
          <BrokerageCalculator name={'Currency Options'} id={'currency-options'}></BrokerageCalculator> */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default PricingEquity;
