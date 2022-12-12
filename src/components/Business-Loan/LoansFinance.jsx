
import React from "react";
import NBFCMenu from '../Common-features/NBFCMenu';
import termloan from '../../assets/images/business-loan/term-loan.webp';
import flexicredit from '../../assets/images/business-loan/flexi-credit.webp';
import invoicefinancing from '../../assets/images/business-loan/invoice-financing.webp';
import channelfinancing from '../../assets/images/business-loan/channel-financing.webp';
import LazyLoader from "../Common-features/LazyLoader";

function LoansFinance() {
  return (
    <div>

      <section className="other-loans-finance">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="Anchor-heading">
                <NBFCMenu />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="loans-finance-sec">
                <div className="head-sec">
                  <h2 className="title-secnd">MSME Loans</h2>
                  <p>We at Choice Finserv understand that being a business owner has certain challenges if funds are not sufficient for either meeting business requirements or for planning a busi....Read more</p>
                </div>
                <div className="fin-list-itm">
                  <div className="list-itm">
                    <div className="itm-img">
                      <LazyLoader src={termloan} alt={"Business Loan"} className={"img-fluid img-banner"} width={"570"} height={"320"} />
                    </div>
                    <div className="itm-desc">
                      <h4 className="title-secnd">Term Loan</h4>
                      <div className="para">
                        <input type="checkbox" className="read-more-state" id="post-1" />
                        <span className="read-more-wrap "> Our Term Loans are designed to suit your various financial business
                           <span className="read-more-target">
                           Our Term Loans are designed to suit your various financial business 
                          </span></span> <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                      </div>
                    </div>
                  </div>
                  <div className="list-itm">
                    <div className="itm-img">
                      <LazyLoader src={flexicredit} alt={"Flexi Credit"} className={"img-fluid img-banner"} width={"570"} height={"320"} />
                    </div>
                    <div className="itm-desc">
                      <h4>Flexi Credit</h4>
                      <div className="para">
                        <input type="checkbox" className="read-more-state" id="post-2" />
                        <span className="read-more-wrap "> Our Flexi-Credit has the freedom to withdraw or deposit money a  
                           <span className="read-more-target">
                           Our Flexi-Credit has the freedom to withdraw or deposit money a 
                          </span></span> <label htmlFor="post-2" className="read-more-trigger moreless-button"></label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="loans-finance-sec">
                <div className="head-sec">
                  <h2 className="title-secnd">Supply Chain Finance</h2>
                  <p>We understand the process of taking a loan is very long and too much paperwork makes this process  more difficult. The biggest problem is inappropriate requisitions by the unorganized lending channels. Business owners fail to ach....Read more </p>
                </div>
                <div className="fin-list-itm">
                  <div className="list-itm">
                    <div className="itm-img">
                      <LazyLoader src={invoicefinancing} alt={"Invoice Financing"} className={"img-fluid img-banner"} width={"570"} height={"320"} />
                    </div>
                    <div className="itm-desc">
                      <h4 className="title-secnd">Invoice Financing</h4>
                      <div className="para">
                        <input type="checkbox" className="read-more-state" id="post-3" />
                        <span className="read-more-wrap "> It is a short-term loan against receivables of unp 
                           <span className="read-more-target">
                           It is a short-term loan against receivables of unp
                          </span></span> <label htmlFor="post-3" className="read-more-trigger moreless-button"></label>
                      </div>
                    </div>
                  </div>
                  <div className="list-itm">
                    <div className="itm-img">
                      <LazyLoader src={channelfinancing} alt={"Channel Financing"} className={"img-fluid img-banner"} width={"570"} height={"320"} />
                    </div>
                    <div className="itm-desc">
                      <h4>Channel Financing</h4>
                      <div className="para">
                        <input type="checkbox" className="read-more-state" id="post-4" />
                        <span className="read-more-wrap "> Working capital finance i.e. Cash Credit/ Term
                           <span className="read-more-target">
                           Working capital finance i.e. Cash Credit/ Term
                          </span></span> <label htmlFor="post-4" className="read-more-trigger moreless-button"></label>
                      </div>
                    </div>
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

export default LoansFinance;
