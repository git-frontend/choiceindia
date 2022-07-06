import "./partner.scss"
import Contactbanner from './PartnerBannerTab';
import PartnerBenifits from './PartnerBenifits';
import HowItWorks from './HowItWorks';
import WhyChoiceConnect from './WhyChoiceConnect';
import Template1 from '../Common-features/Template1';
import {useState} from 'react';

function Partner() {

  const [skeleton, setSkeleton] = useState(() => true);
  const myTimeout = setTimeout(myGreeting, 2000);
  function myGreeting() {
    setSkeleton(() => false);
  }

  return (
    <div>
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
