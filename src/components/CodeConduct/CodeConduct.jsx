
import React from "react";
import Banner from '../Investors-info/Banner';
import CodeConductMenu from './CodeConductMenu';
import Yeardetail from '../Investors-info/Yeardetail';

import { AiFillCaretUp } from "react-icons/ai";
import "../Investors-info/investorsinfo.scss";
import "../Investors-info/navbar.scss";
import Template1 from "../Common-features/Template1";
import { useState, useEffect } from 'react';
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function CodeConduct() {

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
          <div className="code-conduct-parent">
            <div className="mainwrapper">

              <Banner />

              <section className="countsect">
                <div className="container">
                  <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                      <h2 className="counttext">Choice International Limited</h2>
                    </div>
                    <div className="col-md-6">
                      <div className="count">

                        <div className="number"><span className="green"> 316.00</span> <div className="result"><AiFillCaretUp className="green" /> <div className="percentage"><span className="green">14.75</span> (4.90%)</div></div></div>


                      </div>
                      <div className="subtextwrap d-flex">
                        <div className="nse">
                          <p className="subtext">NSE</p>
                        </div>
                        <div className="time">
                          <p className="subtext">As on 11 Apr, 2022 | 14:12</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </section>

              <CodeConductMenu />


            </div>
          </div>
      }

    </div>
  );
}

export default CodeConduct;
