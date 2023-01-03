import { useState, useEffect } from 'react';
import DematAccountForm from '../Common-features/DematAccountForm';
import LazyLoader from '../Common-features/LazyLoader';
import Banner from '../Stock-Broker-Mumbai/Banner';
import "./style.scss"

import {useLocation,} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function StockBroker() {


	// const [skeleton, setSkeleton] = useState(() => true);
	const [rendercount, setRenderCount] = useState(() => false);

    const location = useLocation();
	// const myTimeout = setTimeout(myGreeting, 1500);
	// function myGreeting() {
	//   setSkeleton(() => false);
	// }
	// setTimeout(() => {
	// 	setSkeleton(() => false);
	// }, 200)

	useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
          let parser = new DOMParser();
          let doc = parser.parseFromString(meta_tags['https://choiceindia.com/'].faqscript, 'text/html');
          document.body.appendChild(doc.getElementsByTagName('script')[0]? doc.getElementsByTagName('script')[0]: '' );
          document.title = meta_tags["https://choiceindia.com/"] ? meta_tags["https://choiceindia.com/"].title : '';
          // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
          document.getElementById('meta-tags').content = meta_tags["https://choiceindia.com/"] ? meta_tags["https://choiceindia.com/"].content : '';
          document.getElementById('canonical-link').href = meta_tags["https://choiceindia.com/"] ? meta_tags["https://choiceindia.com/"].link : '';
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
		<div className="Home">

			{/* {
				skeleton ? <Template1 /> : */}
					<main className='home-main'>
					
					<Banner />
						
				




					</main>
			{/* } */}




		</div>
	);
}

export default StockBroker;
