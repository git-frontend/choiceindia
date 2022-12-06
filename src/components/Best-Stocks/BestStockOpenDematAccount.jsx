import React from "react";
import { useState } from "react";
import "./best-stock.scss";
import Template5 from '../Common-features/Template5';
import { Link } from "react-router-dom";
import "../Remisier/Remisier.scss";


function BestStockOpenDematAccount() {
  

  return (
    <div>
      {
        <section className="sendopt">
          <div className="container">
            <div className="form_main">
              <div className=" demat_text"><span className="form-ttl">Open a Free <span className="reshide"> Demat</span> Account <span className="reshide"><br />+ Free 1st Year AMC</span></span></div>
              <div className="  Mobile_text">
                <input type="text" id="form-email" className="form-textbox" required />
                <label htmlFor="form-email" className="form-label">Mobile Number</label>
              </div>
              <div className="  cust_check">
                <input type="checkbox" className="form_check" />
                <label className="form_check_text">I agree that I have read and  accept<br /> the <a href="/"><span className="link_tc">Terms and Conditions</span></a></label>
              </div>
              <button type="submit" className=" OPt_item sub_group btnsub"><span className="send_OPT_btn" >Send OTP</span></button>
            </div>
          </div>
        </section>

      }
    </div>
  );
}

export default BestStockOpenDematAccount;