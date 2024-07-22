import React, { useState, useEffect } from "react";
import './bug-bounty-program.scss';
import BugBountyBanner from "./BugBountyBanner";
import BugBountyFaqs from "./BugBountyFaqs";
import BugBountyRules from "./BugBountyRules";
import meta_tags from "../../Data/MetaTags";
function BugBountyProgram() {
    const [rendercount, setRenderCount] = useState(() => false);
    useEffect(() => {
      setRenderCount(true)
      if (rendercount === true) {
        document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
        document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
        document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
        document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
        if (!(document.getElementById('link1') == null)) {
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
        <>
           <BugBountyBanner/>
           <BugBountyFaqs/>
           <BugBountyRules/>
        </>
    );
}
export default BugBountyProgram;