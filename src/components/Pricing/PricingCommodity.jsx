
import React from "react";
import Form from 'react-bootstrap/Form';




function PricingEquity() {



  return (
    <div>

      <div className="banner-tab-cont">
        <div className="heading-sec">
          <h3 className="title-secnd">Commodity Futures</h3>
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
                <th width="220">
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
                    <h6>0.01% on sell side</h6>
                  </td>
                  <td>
                    <h6>Exchange transaction charge: 0.0026% Clearing charge: 0.0003%, RMS Charge 0.005% ( Only NCDEX )</h6>
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
                    <h5>Equity <br />Delivery</h5>
                  </td>
                  <td>
                    <h6>₹ 50 per lot</h6>
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

        <div className="brokerage-calculator">
          <div className="heading-sec">
            <h3 className="title-secnd">Brokerage Calculator</h3>
          </div>
          <div className="calc-box">
            <div className="box-sub">
              <h3 className="box-sub-head">Equity Delivery</h3>
              <div className="calc-input-list">
                <div className="input-itm">
                  <h5>Buy Price</h5>
                  <Form>
                    <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                      <Form.Control type="text" name="firstName" placeholder="10000" className="formcontrol" />
                    </Form.Group>
                  </Form>
                </div>
                <div className="input-itm">
                  <h5>Buy Price</h5>
                  <Form>
                    <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                      <Form.Control type="text" name="firstName" placeholder="10000" className="formcontrol" />
                    </Form.Group>
                  </Form>
                </div>
                <div className="input-itm">
                  <h5>Buy Price</h5>
                  <Form>
                    <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                      <Form.Control type="text" name="firstName" placeholder="10000" className="formcontrol" />
                    </Form.Group>
                  </Form>
                </div>
              </div>
              <div className="calc-data-des">
                <ul className="reset">
                  <li>
                    <span>Turnover</span>
                    <span>880000</span>
                  </li>
                  <li>
                    <span>Brokerage</span>
                    <span>40</span>
                  </li>
                  <li>
                    <span>STT Total</span>
                    <span>120</span>
                  </li>
                  <li>
                    <span>Exchange Txn. Charge</span>
                    <span>30.36</span>
                  </li>
                  <li>
                    <span>Clearing Charge</span>
                    <span>0</span>
                  </li>
                  <li>
                    <span>GST</span>
                    <span>12.66</span>
                  </li>
                  <li>
                    <span>SEBI Charges</span>
                    <span>0.88</span>
                  </li>
                  <li>
                    <span>Stamp Duty</span>
                    <span>12</span>
                  </li>
                  <li>
                    <span>Total Tax &amp; Charges</span>
                    <span>250.9</span>
                  </li>
                  <li>
                    <span className="ttl-amt">Total Brokerage</span>
                    <span className="ttl-amt">0.54</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box-sub">
              <h3 className="box-sub-head">Commodity Options</h3>
              <div className="calc-input-list">
                <div className="input-itm">
                  <h5>Buy Price</h5>
                  <Form>
                    <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                      <Form.Control type="text" name="firstName" placeholder="10000" className="formcontrol" />
                    </Form.Group>
                  </Form>
                </div>
                <div className="input-itm">
                  <h5>Buy Price</h5>
                  <Form>
                    <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                      <Form.Control type="text" name="firstName" placeholder="10000" className="formcontrol" />
                    </Form.Group>
                  </Form>
                </div>
                <div className="input-itm">
                  <h5>Buy Price</h5>
                  <Form>
                    <Form.Group className="mb-3 formgrp" controlId="formBasicEmail">
                      <Form.Control type="text" name="firstName" placeholder="10000" className="formcontrol" />
                    </Form.Group>
                  </Form>
                </div>
              </div>
              <div className="calc-data-des">
                <ul className="reset">
                  <li>
                    <span>Turnover</span>
                    <span>880000</span>
                  </li>
                  <li>
                    <span>Brokerage</span>
                    <span>40</span>
                  </li>
                  <li>
                    <span>STT Total</span>
                    <span>120</span>
                  </li>
                  <li>
                    <span>Exchange Txn. Charge</span>
                    <span>30.36</span>
                  </li>
                  <li>
                    <span>Clearing Charge</span>
                    <span>0</span>
                  </li>
                  <li>
                    <span>GST</span>
                    <span>12.66</span>
                  </li>
                  <li>
                    <span>SEBI Charges</span>
                    <span>0.88</span>
                  </li>
                  <li>
                    <span>Stamp Duty</span>
                    <span>12</span>
                  </li>
                  <li>
                    <span>Total Tax &amp; Charges</span>
                    <span>250.9</span>
                  </li>
                  <li>
                    <span className="ttl-amt">Total Brokerage</span>
                    <span className="ttl-amt">0.54</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default PricingEquity;
