// import FaqHeader from './FaqHeader';
import FaqBanner from './FaqBanner';
import FaqBody from './FaqBody';
import Template1 from '../Common-features/Template1';
import { useState, useEffect } from 'react';
import "./faq.scss";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function Faq() {

  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

  const location = useLocation();

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      // let parser = new DOMParser();
      // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
      // document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
    }
  }, [rendercount])

  return (
    <div>
      {
        skeleton ? <Template1 /> :
          <div className='faq-skeleton-parent'>
            {/**<FaqBanner />*/}
            <FaqBody />
          </div>
      }
    </div>

  )
}

export default Faq