
import React, { useState } from "react";
import NBFCMenu from '../Common-features/NBFCMenu';
import termloan from '../../assets/images/business-loan/term-loan.webp';
import flexicredit from '../../assets/images/business-loan/flexi-credit.webp';
import invoicefinancing from '../../assets/images/business-loan/invoice-financing.webp';
import channelfinancing from '../../assets/images/business-loan/channel-financing.webp';
import LazyLoader from "../Common-features/LazyLoader";



function LoansFinance() {
  const [show, setshow]=useState(false);
  const [showterm, setshowterm]=useState(false);
  const [showflexi, setshowflexi]=useState(false);
  const [showinvoicefin, setshowinvoicefin]=useState(false);
  const [showchannelfin, setshowchannelfin]=useState(false);
  const [showchainfin, setshowchainfin]=useState(false);
  
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
                  <p>We at Choice Finserv understand that being a business owner has certain challenges if funds are not sufficient for either meeting business requirements or for planning a{!show ? <span onClick={()=>{setshow(true);console.log("hhh")}}>... <em className="btn-read">Read more</em></span>:""}{show ?<span>&nbsp; business expansion. Business loans could be of great help in meeting capital requirements to ensure the smooth operations of business activities and help scale new heights of the growth opportunities. <br/>You require sufficient funds for your business to keep the operations alive and thus, require loans or credit facilities to help meet your capital demands. We are here to ensure that the lack of financing never stops your businesses from growing and expanding by giving you the financial push to make your business vision come true. <br/>We can help offer finances for your business in the form of a Term-Loan and Flexi-Credit.<span onClick={()=>{setshow(false);console.log("hhh")}}>&nbsp;<em className="btn-read">Read less</em></span></span>:""}</p>
                </div>
                <div className="fin-list-itm">
                  <div className="list-itm">
                    <div className="itm-img">
                      <LazyLoader src={termloan} alt={"Business Loan"} className={"img-fluid img-banner"} width={"570"} height={"320"} />
                    </div>
                    <div className="itm-desc">
                      <h4 className="title-secnd">Term Loan</h4>
                      <div className="para">
                      <p>Our Term Loans are designed to suit your various financial business{!showterm ? <span onClick={()=>{setshowterm(true);console.log("hhh")}}>... <em className="btn-read">Read more</em></span>:""}{showterm ?<span>&nbsp; needs and help offer capital expenditure and expansion. Term loans are most suitable for your pre-defined expenditures and take the decisions on your own as per the agreed loan value for you.<br/>
You will also have the ease to plan your future finances (starting a new sector, buying new machinery, planning to expand) as the Payables of your loan will be fixed. Your gradual and timely repayment will automatically turn your debt to zero.<span onClick={()=>{setshowterm(false);console.log("hhh")}}>&nbsp;<em className="btn-read">Read less</em></span></span>:""}</p>
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
                       
                     
                      <p>Our Flexi-Credit has the freedom to withdraw or deposit money at{!showflexi ? <span onClick={()=>{setshowflexi(true);console.log("hhh")}}>... <em className="btn-read">Read more</em></span>:""}{showflexi ?<span>&nbsp; the same or multiple times from your loan accounts as desired with our efficient business loan facility. We at Choice Finserv understand the management of finances and value money and thus, only charge the interest on the utilized amount. You will have the flexibility of reducing or increasing the repayment amount and tenure period.<span onClick={()=>{setshowflexi(false);console.log("hhh")}}>&nbsp;<em className="btn-read">Read less</em></span></span>:""}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="loans-finance-sec">
                <div className="head-sec">
                  <h2 className="title-secnd">Supply Chain Finance</h2>
                  <p>We understand the process of taking a loan is very long and too much paperwork makes this process  more difficult. The biggest problem is inappropriate requisitions by the unorganized lending channels. Business owners fail to ach....<a href="/"><span className="btn-read">Read more</span></a></p>
                </div>
                <div className="fin-list-itm">
                  <div className="list-itm">
                    <div className="itm-img">
                      <LazyLoader src={invoicefinancing} alt={"Invoice Financing"} className={"img-fluid img-banner"} width={"570"} height={"320"} />
                    </div>
                    <div className="itm-desc">
                      <h4 className="title-secnd">Invoice Financing</h4>
                      <div className="para">
                      <p>It is a short-term loan against receivables of unpaid bills or invoices{!showinvoicefin ? <span onClick={()=>{setshowinvoicefin(true);console.log("hhh")}}>... <em className="btn-read">Read more</em></span>:""}{showinvoicefin ?<span>&nbsp; to anchor or spoke. When the seller supplies goods on credit and needs working capital for continuous production for fulfilling his future orders, at the same time buyers generally get more time to pay.
Choice is offering loans to the anchor's ecosystem against selling or purchasing invoices. Borrower as Anchor "or" spoke may be decided as per the deal structure and mutual agreement with one another.<span onClick={()=>{setshowinvoicefin(false);console.log("hhh")}}>&nbsp;<em className="btn-read">Read less</em></span></span>:""}</p>
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
                       <p>Working capital finance limit is generally extended to{!showchannelfin ? <span onClick={()=>{setshowchannelfin(true);console.log("hhh")}}>... <em className="btn-read">Read more</em></span>:""}{showchannelfin ?<span>&nbsp; selected “Spoke” on the recommendation of anchor, for the purpose of selling or buying of any goods, commodity, inventory or rendering of services for easy and smooth growth of their business.<span onClick={()=>{setshowchannelfin(false);console.log("hhh")}}>&nbsp;<em className="btn-read">Read less</em></span></span>:""}</p>
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
