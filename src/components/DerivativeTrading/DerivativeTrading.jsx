// import "./DerivativeTrading.scss";
import "../OpenDematAccount/DematPage";
import DerivativeTradingBanner from "./DerivativeTradingBanner";
import WhyOpenDerivativeTrading from "./WhyOpenDerivativeTrading";
import DerivativeTradingOpeningProcess from "./DerivativeTradingOpeningProcess";
import LowBrokerageDerivativeTrading from "./LowBrokerageDerivativeTrading";
import WhyDerivativeTrading from "./WhyDerivativeTrading";
import DerivativeTradingFaq from "./DerivativeTradingFaq";
import { Link } from "react-router-dom";
import meta_tags from "../../Data/MetaTags";
import MoreContent from './MoreContent';
import { useState,useEffect} from "react";

function DerivativeTrading() {
  const [rendercount, setRenderCount] = useState(() => false);
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
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
            <DerivativeTradingBanner />
            <WhyOpenDerivativeTrading />
            <WhyDerivativeTrading />
            <LowBrokerageDerivativeTrading />
            <DerivativeTradingOpeningProcess />
            <MoreContent />
            
          </div>
    
  );
}

export default DerivativeTrading;
