// import FaqHeader from './FaqHeader';
import FaqBanner from './FaqBanner';
import FaqBody from './FaqBody';
import Template1 from '../Common-features/Template1';
import { useState } from 'react';
import "./faq.scss";

function Faq() {

    const [skeleton, setSkeleton] = useState(() => true);
    const myTimeout = setTimeout(myGreeting, 2000);
    function myGreeting() {
      setSkeleton(() => false);
    }

    return (
        <div>
          {
            skeleton? <Template1/>:
            <div className='faq-skeleton-parent'>
            <FaqBanner />
            <FaqBody />
            </div>
          }
        </div>

    )
}

export default Faq