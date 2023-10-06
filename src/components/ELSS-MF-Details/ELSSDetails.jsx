import React, {useEffect, useState} from 'react'
import "../AMC-Details/amc-details.scss";
import "./elss-details.scss";
import Banner from './Banner';
import SerachELSSDetails from './SerachELSSDetails';
import MoreContent from './MoreContent';
import Faq from './Faqs';
import FixedSection from './FixedForm';
function ELSSDetails() {

  const [name, setName] = useState('hideform2');
  const getPosition = () => {
      const element = document.getElementById("showForm");
      if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top.toFixed() < 259) {
              setName('visibleform2');
          } else {
              setName('hideform2');
          }
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', getPosition);
  }, []);


  function chapterScroll2(id) {
      var element = document.getElementById(id);
      var headerOffset = 140;
      var elementPosition = element.getBoundingClientRect().top;
      var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
      });
  }
  return (
    <div>
        <Banner/>
        <SerachELSSDetails/>
        <MoreContent/>
        <Faq/>
        <div className={name}>
        <FixedSection/>
        </div>
       
    </div>
  )
}

export default ELSSDetails