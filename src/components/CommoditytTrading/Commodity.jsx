import "./Commodity.scss";
import "../OpenDematAccount/DematPage";
import CommodityFaq from "./CommodityFaq";
import { Link } from "react-router-dom";
import meta_tags from "../../Data/MetaTags";
import { useState,useEffect} from "react";
import TradingBanner from "../Trading-Pages/TradingBanner";
import CommodityTradingData from "./CommodityTradingData";
import WhyOpenTradingAccount from "../Trading-Pages/WhyOpenTradingAccount";
import WhyChoiceCommon from "../Trading-Pages/WhyChoiceCommon";
import OpenLowBrokerageAccount from "../Trading-Pages/OpenLowBrokerageAccount";
import AccountOpeningProcess from "../Trading-Pages/AccountOpeningProcess";
import MoreContentCommon from "../Trading-Pages/MoreContentCommon";
import CommonFaq from "../Trading-Pages/CommonFaq";

function Commodity() {
  const [rendercount, setRenderCount] = useState(() => false);

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
      document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
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
            <TradingBanner data={CommodityTradingData.BannerData}/>
            <WhyOpenTradingAccount data={CommodityTradingData.WhyOpenCommodityTAccount}/>
            <WhyChoiceCommon  data={CommodityTradingData.WhyChoiceCommon}/>
            <OpenLowBrokerageAccount data={CommodityTradingData.OpenLowBrokerageAccount}/>
            <AccountOpeningProcess data={CommodityTradingData.AccountOpeningProcess}/>
            <CommonFaq data={CommodityTradingData.CommonFaq}/>
            <MoreContentCommon data={CommodityTradingData.MoreContentCommon}/>
          </div>
    
  );
}

export default Commodity;
