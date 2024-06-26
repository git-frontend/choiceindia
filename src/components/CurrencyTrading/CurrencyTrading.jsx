// import "./CurrencyTrading.scss";
import "../OpenDematAccount/DematPage";
import CurrencyTradingBanner from "./CurrencyTradingBanner";
import WhyOpenCurrencyTrading from "./WhyOpenCurrencyTrading";
import CurrencyTradingOpeningProcess from "./CurrencyTradingOpeningProcess";
import LowBrokerageCurrencyTrading from "./LowBrokerageCurrencyTrading";
import WhyCurrencyTrading from "./WhyCurrencyTrading";
import MoreContent from './MoreContent';
import CurrencyTradingFaq from "./CurrencyTradingFaq";
import { Link } from "react-router-dom";
import { useState,useEffect} from "react";
import meta_tags from "../../Data/MetaTags";

function CurrencyTrading() {
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
            
            <CurrencyTradingBanner />
            <WhyOpenCurrencyTrading />
            <WhyCurrencyTrading />
            <LowBrokerageCurrencyTrading />
            <CurrencyTradingOpeningProcess />
            <MoreContent />
            
          </div>
    
  );
}

export default CurrencyTrading;
