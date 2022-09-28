import React from "react";
import { useState } from "react";
import "./best-stock.scss";
import Template5 from '../Common-features/Template5';
import { Link } from "react-router-dom";
import "../Remisier/Remisier.scss";







import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";
import { useEffect } from "react";
function BestStockreadMore() {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) => {
    setToggleState(index);
  };

  const [skeleton, setSkeleton] = useState(() => true);
  // const myTimeout = setTimeout(myGreeting, 900);
  // function myGreeting() {
  //   setSkeleton(() => false);
  // }




  const [rendercount, setRenderCount] = useState(() => false);
  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)
  const location = useLocation();
  // let parser = new DOMParser();
  // let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
  // useEffect(() => {
  //   let parser = new DOMParser();
  //   let doc = parser.parseFromString(meta_tags['sub-broker'].faqscript, 'text/html');
  //   document.body.appendChild(doc.getElementsByTagName('script')[0]);
  // }, [])
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
  // console.log('HHHHHHH',meta_tags['sub-broker'].faqscript)
  // console.log('TTTT',doc.getElementsByTagName('script')[0]);
  // document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
  // // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
  // document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
  // document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
  // // document.body.appendChild(doc.getElementsByTagName('script')[0]);



  return (
    <div>
      {
       

            <section className="readmoresection">

              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <h2 className="secttitle text-center">Best Stocks to Buy Today in India</h2>
                  </div>
                  <div className="col-md-12">
                    <div className="para">
                      <input type="checkbox" className="read-more-state" id="post-1" />
                      <span className="read-more-wrap content"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                      eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et 
                      justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit 
                      amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                       labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea 
                       rebum. Stet clita kasd gubergren, no se....

                        <span className="read-more-target t">
                          <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, perspiciatis quia nihil asperiores deserunt suscipit et doloremque aperiam iusto quam in similique, culpa fuga soluta maiores placeat architecto nisi.</p>
                          <p className="content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit repellat, perspiciatis quia nihil asperiores deserunt suscipit et doloremque aperiam iusto quam in similique, culpa fuga soluta maiores placeat architecto nisi.</p>
                        </span></span> <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                    </div>
                  </div>
                </div>
              </div>

            </section>

    
      }
    </div>
  );
}

export default BestStockreadMore;