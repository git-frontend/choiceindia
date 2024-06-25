
import React from "react";
import BannerSBrokerCampaign from './BannerSBrokerCampaign';
import SubBrokerBenifits from './SubBrokerBenifits';
import SubBrokerSellMore from './SubBrokerSellMore';
import WhyBecomeSubBrokerC from './WhyBecomeSubBrokerC';
import WhoEligibleToSubBroker from './WhoEligibleToSubBroker';
import MoreContent from './MoreContent';
import SubBrokerOffersC from './SubBrokerOffersC';
import StepsToSubBroker from './StepsToSubBroker';
import Template5 from '../Common-features/Template5';
import "./subbroker.scss";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect,useState} from "react";

function SubBrokerCampaign() {
  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  const location = useLocation();


  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
    }
  }, [rendercount])

  return (
    <div>

      {
        skeleton ? <Template5 /> :

          <div className="sub-broker-skeleton-parent">
            <BannerSBrokerCampaign />
            <SubBrokerBenifits />
            <SubBrokerSellMore />
            <WhyBecomeSubBrokerC />
            <WhoEligibleToSubBroker />
            <StepsToSubBroker />
            <SubBrokerOffersC />
            {/* <MoreContent /> */}
          </div>
      }

    </div>
  );
}

export default SubBrokerCampaign;
