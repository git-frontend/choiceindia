import "./partner.scss"
import Contactbanner from './PartnerBannerTab';
import PartnerBenifits from './PartnerBenifits';
import HowItWorks from './HowItWorks';
import WhyChoiceConnect from './WhyChoiceConnect';
import Template1 from '../Common-features/Template1';
import {useState, useEffect} from 'react';
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function Partner() {

  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

  const location = useLocation();

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

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
    <div className="partner-main-pg">
      {
        skeleton ? <Template1 /> :
          <div className="partner-skeleton-parent">
            <Contactbanner />
            <PartnerBenifits />
            <HowItWorks />
            <WhyChoiceConnect />

          </div>
      }


    </div>
  );
}

export default Partner;
