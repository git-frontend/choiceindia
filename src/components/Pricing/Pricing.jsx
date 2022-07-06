import "./pricing.scss"
import PricingBannerTab from './PricingBannerTab';
import OpenFreeAccount from './OpenFreeAccount';
import Template1 from '../Common-features/Template1';
import {useState} from 'react'

function Pricing() {

  const [skeleton, setSkeleton] = useState(() => true);

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  return (
    <div>
      {
        skeleton ? <Template1 /> :
          <div>
            <PricingBannerTab />
            <OpenFreeAccount />
          </div>
      }

    </div>
  );
}

export default Pricing;
