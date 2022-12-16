
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import NBFCMenu from '../Common-features/NBFCMenu';
import "../Invoice-Financing/nbfc-common.scss";
import "../Supply-Chain-Finance/supply-chain-fin.scss";
import SupplyChainBan from '../../assets/images/supply-chain-finance/supply-chain-ban.webp';
import LazyLoader from "../Common-features/LazyLoader";
function SupplyChainFin() {
  return (
    <div>
      <section className="supply-chain-finance">
        <div className="container">
          <div className="row">
              <div className="col-md-12">
              <div className="supply-chain-menu">
                  <a href="/">
                      <FontAwesomeIcon icon={faArrowLeft} />
                      <span className='back'>Back</span>
                  </a>
                  <NBFCMenu />
                </div>
              </div>
          </div>
          <div className="row"> 
            <div className="col-md-12">
                <div class="heading-sec text-center">
                  <h2 class="title-first">Supply Chain Finance</h2>
                </div>
                <div className="supply-chain-p">
                  <p className="supply-p">We understand the process of taking a loan is very long and too much paperwork makes this process more difficult. The biggest problem is inappropriate requisitions by the unorganized lending channels. Business owners fail to achieve the desired business goals. <br/>
                  We at Choice Finserv have changed the traditional methods of buyer & seller payments for small, medium and large enterprises to offer better fund management and affordable credit access by bringing the alternative working capital funds on the same platform through invoice funding & Channel Finance. Now all enterprises can get their organized and complex funds financed by Choice conveniently as we have one of the transparent and collateral-free processes known as Supply Chain Finance. <br/> Supply chain finance (SCF) of Choice is a set of technology-based business and financing process that links the various parties in a transaction—buyer, seller, 
                   and financing institution as Choice Finserv Pvt. Ltd. to lower financing costs and improve business efficiency. Supply chain finance provides Anchor led loan that optimizes working capital for both the buyer and the seller. <br/> With Choice Supply Chain Finance offerings both recourse and non-recourse are available. Choice Offerings: - <br/> </p>
                </div>
                <div className="supply-chain-img">
                  <LazyLoader src={SupplyChainBan} alt={"supply chain finance"} className={"img-fluid img-banner"} width={"1197"} height={"929"} />
                </div>
                <div className="supply-chain-p">
                  <p className="supply-p">We understand the process of taking a loan is very long and too much paperwork makes this process more difficult. The biggest problem is inappropriate requisitions by the unorganized lending channels. Business owners fail to achieve the desired business goals. <br/>
                   We at Choice Finserv have changed the traditional methods of buyer & seller payments for small, medium and large enterprises to offer better fund management and affordable credit access by bringing the alternative working capital funds on the same platform through invoice funding & Channel Finance. Now all enterprises can get their organized and complex funds financed by Choice conveniently as we have one of the transparent and collateral-free processes known as Supply Chain Finance. <br/> 
                   Supply chain finance (SCF) of Choice is a set of technology-based business and financing processes that link the various parties in a transaction—buyer, seller, and financing institution as Choice Finserv Pvt. Ltd. to lower financing costs and improve business efficiency. Supply chain finance provides Anchor led loan that optimizes working capital for both the buyer and the seller. <br/> 
                   With Choice Supply Chain Finance offerings both recourse and non-recourse are available. Choice Offerings: - <br/> 
                   Anchor <br/> 
                   The enterprises that is either a manufacturer or a supplier and has entered into an agreement with the lenders to leverage the opportunity of finance to self and to its channel partners/ vendors/ buyers/ dealers/distributor/franchise in place of maintaining regular cash flows. <br/> 
                   Spoke <br/>
                   Spoke is the important stakeholder of supply chain i.e. Buyer/Supplier/ Dealer/Distributor/Franchise/Manufacturer without them financial transaction can’t be fulfilled which has been recommended by the Anchor and approved by the lender.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SupplyChainFin;
