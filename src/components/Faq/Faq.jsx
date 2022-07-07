// import FaqHeader from './FaqHeader';
import FaqBanner from './FaqBanner';
import FaqBody from './FaqBody';
import Template1 from '../Common-features/Template1';
import { useState } from 'react';
import "./faq.scss";

function Faq() {

    const [skeleton, setSkeleton] = useState(() => true);

    setTimeout(() => {
        setSkeleton(() => false);
      }, 200)
      
    return (
        <div>
          {
            skeleton? <Template1/>:
            <div className='faq-skeleton-parent'>
            {/**<FaqBanner />*/}
            <FaqBody />
            </div>
          }
        </div>

    )
}

export default Faq
