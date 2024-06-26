import '../Privacy-policy/privacypolicy.scss';
import { Link } from 'react-router-dom';
import meta_tags from '../../Data/MetaTags';
import { useState,useEffect } from 'react';

function disclaimer() {
    const [rendercount, setRenderCount] = useState(() => false);

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if(!(document.getElementById('link1')==null)){
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
      <div>
          <div className='seo-privacy-policy-div'>
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                        <h1 className='title-first'>Disclaimer</h1>
                      </div>
                  </div>
              </div>
          </div>

          <div className="privacy-policy-content-div">
              <div className="container">
              <div className="privacy-policy-content">
                  <p>
                  You agree and understand that the information and material contained in this website implies and constitutes your consent to the terms and conditions mentioned below. You also agree that Choice International Limited can modify or alter the terms and conditions of the use of this service without any liability. Choice International Limited has launched e-broking services. It reserves the right to decide the criteria based on which customers would be allowed to avail of these services. The content of the site and the interpretation of data are solely the personal views of the contributors.
                  </p>

                  <p>
                  Choice International Limited reserves the right to make modifications and alterations to the content of the website. Users are advised to use the data for the purpose of information only and rely on their own judgments while making investment decisions. The investments discussed or recommended may not be suitable for all investors.
                  </p>

                  <p>
                  Choice International Limited does not guarantee the timeliness, accuracy or quality of the electronic content. The content of the website cannot be copied, reproduced, republished, uploaded, posted, transmitted or distributed for any non-personal use without obtaining prior permission from Choice International Limited. We reserve the right to terminate the accounts of subscribers/customers, who violate the proprietary rights, in addition to necessary legal action.
                  </p>
                  <p>Choice International Limited and its owners/affiliates are not liable for damages (monetary or otherwise) caused by any performance, failure of performance, error, omission, interruption, deletion, defect, delay in transmission or operations, computer virus, communications line failure, and unauthorized access to the personal accounts.</p>
                  <p>Choice International Limited is not responsible for any technical failure or malfunctioning of the software or delays of any kind. We are also not responsible for non-receipt of registration details or e-mails. Users shall bear all responsibility of keeping the password secure.</p>
              <p>Choice International Limited is not responsible for the loss or misuse of the password. Choice International Limited is not responsible for the content of any of the linked sites. By providing access to other web-sites Choice International Limited is neither recommending nor endorsing the content available in the linked websites. You agree that the information gathered from your profile will be used to enhance your experience on the website. We will not rent or sell the profile/contents to any third party. In case of a contest or a promotion scheme, we reserve the right to share the users profile with the sponsors. In the event of necessary credit checks and collection of payments, Choice International Limited can disclose such information to other authorities in good faith.</p>
              <p>Choice International Limited will use all or any part of the service and change terms without any obligation Choice International Limited is not in any manner answerable, responsible or liable to any person or persons for any acts of omissions or commission, errors, mistakes and/or partners, agents associates etc., of any of the Rules, regulations, bye-laws of the Bombay Stock Exchange Limited, National Stock Exchange of India Limited or SEBI Act or any other laws in force from time to time.</p>
              <p>Choice International Limited is not answerable, responsible or liable for any information on this website or for any services rendered by our employees, our servants and us. This website is for the exclusive purpose of transactions to be carried out within the territorial jurisdiction of India and all such transactions shall be governed by the laws in India. Notice is hereby given that Non Resident Indians (NRI's) and Foreign Nationals accessing this web site and opting to transact thereon shall do so after due verification at their end of their eligibility to do so.</p>
              <p>Choice International Limited, Limited undertakes no responsibility for such pre-eligibility of qualification on part of Non-Resident Indians (NRI's) or Foreign Nationals to transact on this website. If you do not agree to any of the terms mentioned in this agreement, you should exit the site.</p>
              <p>BSE Disclaimer "The Stock Exchange, Mumbai is not in any manner answerable, responsible or liable to any person or persons for any acts of omission or commission, errors, mistakes and/or violation, actual or perceived, by us or our partners, agents, associates etc., of any of the Rules, Regulations, Bye-laws of the Stock Exchange, Mumbai, SEBI Act or any other laws in force from time to time. The Stock Exchange, Mumbai is not answerable, responsible or liable for any information on this Website or for any services rendered by our employees, our servants, and us" <a href="https://www.nseindia.com/" target="_blank">http://www.nseindia.com</a></p>
              </div>
              </div>
          </div>
        </div>
      </>
  )
}

export default disclaimer;