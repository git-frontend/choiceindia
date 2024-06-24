// import "./EquityStockTrading.scss";
import "../OpenDematAccount/DematPage";
import EquityStockTradingBanner from "./EquityStockTradingBanner";
import WhyOpenEquityStockTrading from "./WhyOpenEquityStockTrading";
import EquityStockTradingOpeningProcess from "./EquityStockTradingOpeningProcess";
import LowBrokerageEquityStockTrading from "./LowBrokerageEquityStockTrading";
import WhyEquityStockTrading from "./WhyEquityStockTrading";
import MoreContent from './MoreContent';
import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import meta_tags from "../../Data/MetaTags";

function EquityStockTrading() {
  const [rendercount, setRenderCount] = useState(() => false);

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : 
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if(!(document.getElementById('link1')==null)){
        document.getElementById('link1').remove();
      document.getElementById('link2').remove();
      document.getElementById('link3').remove();
      document.getElementById('link4').remove();
      document.getElementById('link5').remove();
      document.getElementById('link6').remove();
      
      }
    }
  }, [rendercount])
  return (
  
    
          <div className="demat-page-parent">
            <EquityStockTradingBanner />
            <WhyOpenEquityStockTrading />
            <WhyEquityStockTrading />
            <LowBrokerageEquityStockTrading />
            <EquityStockTradingOpeningProcess />
            <MoreContent />
            
          </div>
    
  );
}

export default EquityStockTrading;
