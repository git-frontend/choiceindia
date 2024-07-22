// import "./DerivativeTrading.scss";
import "../OpenDematAccount/DematPage";
import TradingBanner from "../Trading-Pages/TradingBanner";
import DerivativeTradingData from "./DerivativeTradingData";
import WhyOpenTradingAccount from "../Trading-Pages/WhyOpenTradingAccount";
import WhyChoiceCommon from "../Trading-Pages/WhyChoiceCommon";
import OpenLowBrokerageAccount from "../Trading-Pages/OpenLowBrokerageAccount";
import AccountOpeningProcess from "../Trading-Pages/AccountOpeningProcess";
import MoreContentCommon from "../Trading-Pages/MoreContentCommon";
import { Link } from "react-router-dom";
import meta_tags from "../../Data/MetaTags";
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
            <TradingBanner data={DerivativeTradingData.BannerData}/>
            <WhyOpenTradingAccount data={DerivativeTradingData.WhyOpenDTAccount}/>
            <WhyChoiceCommon  data={DerivativeTradingData.WhyChoiceCommon}/>
            <OpenLowBrokerageAccount data={DerivativeTradingData.OpenLowBrokerageAccount}/>
            <AccountOpeningProcess data={DerivativeTradingData.AccountOpeningProcess}/>
            <MoreContentCommon data={DerivativeTradingData.MoreContentCommon}/>
            
          </div>
    
  );
}

export default DerivativeTrading;
