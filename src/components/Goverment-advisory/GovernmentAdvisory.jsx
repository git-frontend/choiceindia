
import React from "react";
import Banner from './Banner';
import Whatwethink from './Whatwethink';
import { useState } from "react";

import Template2 from '../Common-features/Template2';

import "./GovernmentAdvisory.scss";
import {useLocation,} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function Services() {

  const [skeleton, setSkeleton] = useState(() => true);
  // const myTimeout = setTimeout(myGreeting, 2000);
  // function myGreeting() {
  //   setSkeleton(() => false);
  // }
  const [rendercount, setRenderCount] = useState(() => false);
  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  const location = useLocation();
  // document.getElementsByTagName("META")[2].name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
  // document.getElementsByTagName("META")[2].content=meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].content : '';

  document.title = meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : '' ;
  // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
  document.getElementById('meta-tags').content= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].content : ''  ;
  document.getElementById('canonical-link').href= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].link : ''  ;
  return (
    <div>

      {
        skeleton ? <Template2 /> :
          <div className="mainwrapper services-parent">
            <Banner />
           <Whatwethink/>
          </div>
      }


    </div>
  );
}

export default Services;
