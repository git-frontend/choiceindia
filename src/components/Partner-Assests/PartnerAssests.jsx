import NewsImage0 from '../../assets/images/choice-emitra/Bike-Kharidne-ka-SIPplan-MFChoice.jpg';
import CareerImage2 from '../../assets/images/choice-emitra/crore-kaise-kamayein-MFChoice.jpg';
import CareerImage3 from '../../assets/images/choice-emitra/FD-vs-Stock-ChoiceStock.jpg';
import CareerImage4 from '../../assets/images/choice-emitra/Mehengai-se-kaise-bachein-StockChoice.jpg';
import CareerImage5 from '../../assets/images/choice-emitra/power-of-Investing-early-MFChoice.jpg';
import CareerImage6 from '../../assets/images/choice-emitra/Shares-jo-guna-ho-Sakte-hai-StockChoice.jpg';
import CareerImage7 from '../../assets/images/choice-emitra/Pdf-Icon-01.png';


import whatsapp from '../../assets/images/choice-emitra/whatsapp.svg';
import instagram from '../../assets/images/choice-emitra/instagram.svg';
import download from '../../assets/images/choice-emitra/download.svg';
import fb from '../../assets/images/choice-emitra/fb.svg';
import { useState,useEffect } from 'react';
import meta_tags from '../../Data/MetaTags';

import '././partner-assests.scss';
import LazyLoader from '../Common-features/LazyLoader';

function PartnerAssests() {
  const [rendercount, setRenderCount] = useState(() => false);

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
    <>
      <div>
      {/* <section className="bannersec">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="imgwrap">
							<img src={bannerimg} className={"img-fluid"} alt={"Loading"} width={"500"} height={"370"}/>
							</div>
							
						</div>
					</div>
					
				</div>
			</section> */}


      
			<div className="container">
			<div className="row">
						<div className="col-md-12">
            <h1 className='text-center mt-5 mb-5 title-first'>ई-मित्र की प्रचार सामग्री</h1>
						</div>
					</div>
			</div>
		

        <div className='media-banner'>
          <div className="container">
            <div className="row mt-5">
            <div className="col-md-4 mb3">
                <div className="card">
                  <div >
                    <LazyLoader src={CareerImage6} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  शेयर जो 10 गुना हो सकते है!

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                  <div><img src={download} className="" alt={"Download"} width="22" height="22" /></div>
                  <div><img src={whatsapp} className="" alt={"Whatsapp"} width="22" height="22" /></div>
                  <div><img src={fb} className="" alt={"Facebook"} width="22" height="22" /></div>
                  <div><img src={instagram} className="" alt={"Instagram"} width="22" height="22" /></div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb3">
                <div className="card">
                  <div >
                    <LazyLoader src={CareerImage5} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  जल्दी निवेश करने के फायदे

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                  <div><img src={download} className="" alt={"Download"} width="22" height="22" /></div>
                  <div><img src={whatsapp} className="" alt={"Whatsapp"} width="22" height="22" /></div>
                  <div><img src={fb} className="" alt={"Facebook"} width="22" height="22" /></div>
                  <div><img src={instagram} className="" alt={"Instagram"} width="22" height="22" /></div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb3">
                <div className="card">
                  <div >
                    <LazyLoader src={CareerImage4} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  मेहंगाई से कैसे बचे?

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                  <div><img src={download} className="" alt={"Download"} width="22" height="22" /></div>
                  <div><img src={whatsapp} className="" alt={"Whatsapp"} width="22" height="22" /></div>
                  <div><img src={fb} className="" alt={"Facebook"} width="22" height="22" /></div>
                  <div><img src={instagram} className="" alt={"Instagram"} width="22" height="22" /></div>
                  </div>
                  </div>
                </div>
              </div>
           
            </div>
            <div className="row mt-7">
            <div className="col-md-4 mb3">
                <div className="card">
                  <div >
                    <LazyLoader src={CareerImage3} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  फिक्स्ड डिपॉजिट Vs स्टॉक इन्व्हेस्टमेंट

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                  <div><img src={download} className="" alt={"Download"} width="22" height="22" /></div>
                  <div><img src={whatsapp} className="" alt={"Whatsapp"} width="22" height="22" /></div>
                  <div><img src={fb} className="" alt={"Facebook"} width="22" height="22" /></div>
                  <div><img src={instagram} className="" alt={"Instagram"} width="22" height="22" /></div>
                  </div>
                  </div>
                </div>
              </div>
            <div className="col-md-4 mb3">
                <div className="card">
                  <div>
                    <LazyLoader src={CareerImage7} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  चॉइस के साथ म्यूचुअल फंड खाता कैसे खोले?

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                  <div><img src={download} className="" alt={"Download"} width="22" height="22" /></div>
                  <div><img src={whatsapp} className="" alt={"Whatsapp"} width="22" height="22" /></div>
                  <div><img src={fb} className="" alt={"Facebook"} width="22" height="22" /></div>
                  <div><img src={instagram} className="" alt={"Instagram"} width="22" height="22" /></div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb3">
                <div className="card">
                  <div >
                  <LazyLoader src={CareerImage7} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  चॉइस के साथ डीमैट खाता कैसे खोले?

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                  <div><img src={download} className="" alt={"Download"} width="22" height="22" /></div>
                  <div><img src={whatsapp} className="" alt={"Whatsapp"} width="22" height="22" /></div>
                  <div><img src={fb} className="" alt={"Facebook"} width="22" height="22" /></div>
                  <div><img src={instagram} className="" alt={"Instagram"} width="22" height="22" /></div>
                  </div>
                  </div>
                </div>
              </div>
             
           
              
              
            </div>
            <div className="row mt-7">
            <div className="col-md-4 mb3">
                <div className="card">
                  <div >
                    <LazyLoader src={NewsImage0} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  बाइक ख़रीदने का एसआईपी प्लान

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                  <div><img src={download} className="" alt={"Download"} width="22" height="22" /></div>
                  <div><img src={whatsapp} className="" alt={"Whatsapp"} width="22" height="22" /></div>
                  <div><img src={fb} className="" alt={"Facebook"} width="22" height="22" /></div>
                  <div><img src={instagram} className="" alt={"Instagram"} width="22" height="22" /></div>
                  </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb3">
                <div className="card">
                  <div >
                    <LazyLoader src={CareerImage2} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  1 करोड़ कैसे कमाए?

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                  <div><img src={download} className="" alt={"Download"} width="22" height="22" /></div>
                  <div><img src={whatsapp} className="" alt={"Whatsapp"} width="22" height="22" /></div>
                  <div><img src={fb} className="" alt={"Facebook"} width="22" height="22" /></div>
                  <div><img src={instagram} className="" alt={"Instagram"} width="22" height="22" /></div>
                  </div>
                  </div>
                </div>
              </div>
             
             
            
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PartnerAssests;