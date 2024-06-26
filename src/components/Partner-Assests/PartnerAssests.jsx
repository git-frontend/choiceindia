import NewsImage0 from '../../assets/images/choice-emitra/Bike-Kharidne-ka-SIPplan-MFChoice.webp';
import CareerImage2 from '../../assets/images/choice-emitra/crore-kaise-kamayein-MFChoice.webp';
import CareerImage3 from '../../assets/images/choice-emitra/FD-vs-Stock-ChoiceStock.webp';
import CareerImage4 from '../../assets/images/choice-emitra/Mehengai-se-kaise-bachein-StockChoice.webp';
import CareerImage5 from '../../assets/images/choice-emitra/power-of-Investing-early-MFChoice.webp';
import CareerImage6 from '../../assets/images/choice-emitra/Shares-jo-guna-ho-Sakte-hai-StockChoice.webp';
import CareerImage7 from '../../assets/images/choice-emitra/Pdf-Icon-01.webp';
import CareerImage9 from '../../assets/images/choice-emitra/youtube.webp';
import CareerImage8 from '../../assets/images/choice-emitra/Pdf-Icon-01.webp';
import mutual from '../../assets/images/choice-emitra/mutual-fund-new.pdf';
import demat from '../../assets/images/choice-emitra/demat-account-new.pdf';
import accountOpening from '../../assets/images/choice-emitra/Account-Opening.pdf';
import whatsapp from '../../assets/images/choice-emitra/whatsapp.svg';
import instagram from '../../assets/images/choice-emitra/instagram.svg';
import download from '../../assets/images/choice-emitra/download.svg';
import fb from '../../assets/images/choice-emitra/fb.svg';
import { useState, useEffect } from 'react';
import meta_tags from '../../Data/MetaTags';

import '././partner-assests.scss';
import LazyLoader from '../Common-features/LazyLoader';

function PartnerAssests() {
  const [rendercount, setRenderCount] = useState(() => false);
  let downloadFile = (fn, file, name) => {
    if (fn) {
      var a = document.createElement('a');
      a.href = fn;
      a.download = name + ((file != 'CareerImage7' && file != 'CareerImage8') ? ".png" : ".pdf");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } else {
      window.open(fn, '_blank')
    }
  }


  let shareLink = (fn, key, file, url) => {
   
    let id = document.getElementById(file)

    if (fn) {
      let mapper = {
        facebook: { url: `https://www.facebook.com/sharer/sharer.php?u=${location.origin + fn}`, isTextEncode: false, isURLEncode: false },
        whatsapp: { url: `whatsapp://send?image=${location.origin + fn}`, isTextEncode: false, isURLEncode: false },
        linkedin: { url: 'https://www.linkedin.com/shareArticle?mini=fals&url=' + location.origin + fn, isTextEncode: true, isURLEncode: true },//+'&summary=$text'
        twitter: { url: 'https://twitter.com/intent/tweet?url=' + fn + '&text=$text', isTextEncode: false, isURLEncode: true }
      }
      let linkObject = mapper[key];
      window.open(linkObject.url)

    }
    //}


    

  }

  function shareLinkV2(share_link,type) {

    if(type === 'whatsapp'){
      let url = `https://api.whatsapp.com/send?text=${share_link}`
      window.open(url)
    }else{
      let url = `https://www.facebook.com/sharer/sharer.php?u=${share_link}`
      window.open(url)
    }

  }

  function redirectTo(redirection_link) {
    window.open(redirection_link);
  }
  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
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
        


        <div className="container p-5">
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
                    <LazyLoader src={CareerImage6} id={'CareerImage6'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                    शेयर जो 10 गुना हो सकते है!

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      <div><img src={download} className="" alt={"Download"} onClick={() => { downloadFile(CareerImage6, 'CareerImage6', 'शेयर जो 10 गुना हो सकते है!') }} width="22" height="22" /></div>
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLink(CareerImage6, 'whatsapp', 'CareerImage6', 'शेयर जो 10 गुना हो सकते है!') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLink(CareerImage6, 'facebook', 'CareerImage6', 'शेयर जो 10 गुना हो सकते है!') }} width="22" height="22" /></div>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb3">
                <div className="card">
                  <div >
                    <LazyLoader src={CareerImage5} id={'CareerImage5'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                    जल्दी निवेश करने के फायदे

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      <div><img src={download} className="" alt={"Download"} onClick={() => { downloadFile(CareerImage5, 'CareerImage5', ' जल्दी निवेश करने के फायदे') }} width="22" height="22" /></div>
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLink(CareerImage5, 'whatsapp', 'CareerImage5', ' जल्दी निवेश करने के फायदे') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLink(CareerImage5, 'facebook', 'CareerImage5', ' जल्दी निवेश करने के फायदे') }} width="22" height="22" /></div>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb3">
                <div className="card">
                  <div >
                    <LazyLoader src={CareerImage4} id={'CareerImage4'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                    मेहंगाई से कैसे बचे?

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      <div><img src={download} className="" alt={"Download"} onClick={() => { downloadFile(CareerImage4, 'CareerImage4', 'मेहंगाई से कैसे बचे?') }} width="22" height="22" /></div>
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLink(CareerImage4, 'whatsapp', 'CareerImage4', 'मेहंगाई से कैसे बचे?') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLink(CareerImage4, 'facebook', 'CareerImage4', 'मेहंगाई से कैसे बचे?') }} width="22" height="22" /></div>
                      
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="row mt-7">
              <div className="col-md-4 mb3">
                <div className="card">
                  <div >
                    <LazyLoader src={CareerImage3} id={'CareerImage3'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                    फिक्स्ड डिपॉजिट Vs स्टॉक इन्व्हेस्टमेंट

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      <div><img src={download} className="" alt={"Download"} onClick={() => { downloadFile(CareerImage3, 'CareerImage3', 'फिक्स्ड डिपॉजिट Vs स्टॉक इन्व्हेस्टमेंट') }} width="22" height="22" /></div>
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLink(CareerImage3, 'whatsapp', 'CareerImage3', 'फिक्स्ड डिपॉजिट Vs स्टॉक इन्व्हेस्टमेंट') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLink(CareerImage3, 'facebook', 'CareerImage3', 'फिक्स्ड डिपॉजिट Vs स्टॉक इन्व्हेस्टमेंट') }} width="22" height="22" /></div>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb3">
                <div className="card">
                  <div>
                    <LazyLoader src={CareerImage7} id={'CareerImage7'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                    चॉइस के साथ म्यूचुअल फंड खाता कैसे खोले?

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      <div><img src={download} className="" alt={"Download"} onClick={() => { downloadFile(mutual, 'CareerImage7', ' चॉइस के साथ म्यूचुअल फंड खाता कैसे खोले?') }} width="22" height="22" /></div>
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLink(mutual, 'whatsapp', 'CareerImage7', ' चॉइस के साथ म्यूचुअल फंड खाता कैसे खोले?') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLink(mutual, 'facebook', 'CareerImage7', ' चॉइस के साथ म्यूचुअल फंड खाता कैसे खोले?') }} width="22" height="22" /></div>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb3">
                <div className="card">
                  <div >
                    <LazyLoader src={CareerImage8} id={'CareerImage8'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                    चॉइस के साथ डीमैट खाता कैसे खोले?

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      <div><img src={download} className="" alt={"Download"} onClick={() => { downloadFile(demat, 'CareerImage8', 'चॉइस के साथ डीमैट खाता कैसे खोले?') }} width="22" height="22" /></div>
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLink(demat, 'whatsapp', 'CareerImage8', 'चॉइस के साथ डीमैट खाता कैसे खोले?') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLink(demat, 'facebook', 'CareerImage8', 'चॉइस के साथ डीमैट खाता कैसे खोले?') }} width="22" height="22" /></div>
                        </div>
                  </div>
                </div>
              </div>




            </div>
            <div className="row mt-7">
              <div className="col-md-4 mb3">
                <div className="card">
                  <div >
                    <LazyLoader src={NewsImage0} id={'NewsImage0'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                    बाइक ख़रीदने का एसआईपी प्लान

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      <div><img src={download} className="" alt={"Download"} onClick={() => { downloadFile(NewsImage0, 'NewsImage0', 'बाइक ख़रीदने का एसआईपी प्लान') }} width="22" height="22" /></div>
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLink(NewsImage0, 'whatsapp', 'NewsImage0', 'बाइक ख़रीदने का एसआईपी प्लान') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLink(NewsImage0, 'facebook', 'NewsImage0', 'बाइक ख़रीदने का एसआईपी प्लान') }} width="22" height="22" /></div>
                                 </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb3">
                <div className="card">
                  <div >
                    <LazyLoader src={CareerImage2} id={'CareerImage2'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                    1 करोड़ कैसे कमाए?

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      <div><img src={download} className="" alt={"Download"} onClick={() => { downloadFile(CareerImage2, 'CareerImage2', '1 करोड़ कैसे कमाए?') }} width="22" height="22" /></div>
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLink(CareerImage2, 'whatsapp', 'CareerImage2', '1 करोड़ कैसे कमाए?') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLink(CareerImage2, 'facebook', 'CareerImage2', '1 करोड़ कैसे कमाए?') }} width="22" height="22" /></div>
                          </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 mb3" >
                <div className="card">
                  <div className='youtube-card-emitra' onClick={() => redirectTo('https://www.youtube.com/watch?v=BAOW84XZCHQ')}>
                    <LazyLoader src={CareerImage9} id={'CareerImage9'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  केआरए ऑनबोर्डिंग वीडियो

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                     
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLinkV2('https://www.youtube.com/watch?v=BAOW84XZCHQ','whatsapp') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLinkV2('https://www.youtube.com/watch?v=BAOW84XZCHQ','facebook') }} width="22" height="22" /></div>
                      </div>
                  </div>
                </div>
              </div>
              



            </div>
            <div className="row mt-7">
            <div className="col-md-4 mb3">
                <div className="card">
                  <div className='youtube-card-emitra' onClick={() => redirectTo('https://www.youtube.com/watch?v=a3eqTZyayOk')}>
                    <LazyLoader src={CareerImage9} id={'CareerImage9'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  बिना केआरए ऑनबोर्डिंग वीडियो

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLinkV2('https://www.youtube.com/watch?v=a3eqTZyayOk','whatsapp') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLinkV2('https://www.youtube.com/watch?v=a3eqTZyayOk','facebook') }} width="22" height="22" /></div>
                       </div>
                  </div>
                </div>
              </div>
              
             
              <div className="col-md-4 mb3">
                <div className="card">
                  <div className='youtube-card-emitra'  onClick={() => redirectTo('https://www.youtube.com/watch?v=EgT-G-RtqR8&list=PLYR1jiScjAL5Zih3GAwpribEBuQvgII2c')}>
                    <LazyLoader src={CareerImage9} id={'CareerImage9'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  जिफ्फी ट्रेडिंग ऐप वीडियो

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLinkV2('https://www.youtube.com/watch?v=EgT-G-RtqR8&list=PLYR1jiScjAL5Zih3GAwpribEBuQvgII2c','whatsapp') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLinkV2('https://www.youtube.com/watch?v=EgT-G-RtqR8&list=PLYR1jiScjAL5Zih3GAwpribEBuQvgII2c','facebook') }} width="22" height="22" /></div>
                        </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb3">
                <div className="card">
                  <div>
                    <LazyLoader src={CareerImage7} id={'CareerImage7'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  अकाउंट ओपनिंग डॉक्युमेंट्स कि चेकलिस्ट

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      <div><img src={download} className="" alt={"Download"} onClick={() => { downloadFile(accountOpening, 'CareerImage7', ' अकाउंट ओपनिंग डॉक्युमेंट्स कि चेकलिस्ट') }} width="22" height="22" /></div>
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLink(accountOpening, 'whatsapp', 'CareerImage7', ' अकाउंट ओपनिंग डॉक्युमेंट्स कि चेकलिस्ट') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLink(accountOpening, 'facebook', 'CareerImage7', ' अकाउंट ओपनिंग डॉक्युमेंट्स कि चेकलिस्ट') }} width="22" height="22" /></div>
                     
                    </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="row mt-7">
            <div className="col-md-4 mb3">
                <div className="card">
                  <div className='youtube-card-emitra' onClick={() => redirectTo('https://youtu.be/p6qwmXP1aws')}>
                    <LazyLoader src={CareerImage9} id={'CareerImage9'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  म्युच्युअल फंड में SIP इन्व्हेस्टमेंट

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLinkV2('https://youtu.be/p6qwmXP1aws','whatsapp') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLinkV2('https://youtu.be/p6qwmXP1aws','facebook') }} width="22" height="22" /></div>
                        </div>
                  </div>
                </div>
              </div>
              
             
              <div className="col-md-4 mb3">
                <div className="card">
                  <div className='youtube-card-emitra'  onClick={() => redirectTo('https://youtu.be/bJU9UA1EoaE')}>
                    <LazyLoader src={CareerImage9} id={'CareerImage9'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  म्युच्युअल फंड में Lumpsum इन्व्हेस्टमेंट

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLinkV2('https://youtu.be/bJU9UA1EoaE','whatsapp') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLinkV2('https://youtu.be/bJU9UA1EoaE','facebook') }} width="22" height="22" /></div>
                        </div>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb3">
                <div className="card">
                  <div className='youtube-card-emitra'  onClick={() => redirectTo('https://youtu.be/Qbv5FmT0TLc')}>
                    <LazyLoader src={CareerImage9} id={'CareerImage9'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  म्युच्युअल फंड बास्केट्स में इन्व्हेस्ट कैसे करें
                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLinkV2('https://youtu.be/Qbv5FmT0TLc','whatsapp') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLinkV2('https://youtu.be/Qbv5FmT0TLc','facebook') }} width="22" height="22" /></div>
                        </div>
                  </div>
                </div>
              </div>

            </div>

            <div className="row mt-7">
            <div className="col-md-4 mb3">
                <div className="card">
                  <div className='youtube-card-emitra' onClick={() => redirectTo('https://youtu.be/2KMRYPZPod0')}>
                    <LazyLoader src={CareerImage9} id={'CareerImage9'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  म्युच्युअल फंड के साथ गोल प्लॅन कैसे करें

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLinkV2('https://youtu.be/2KMRYPZPod0','whatsapp') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLinkV2('https://youtu.be/2KMRYPZPod0','facebook') }} width="22" height="22" /></div>
                        </div>
                  </div>
                </div>
              </div>
              
             
              <div className="col-md-4 mb3">
                <div className="card">
                  <div className='youtube-card-emitra'  onClick={() => redirectTo('https://youtu.be/nl5W7nH66d8')}>
                    <LazyLoader src={CareerImage9} id={'CareerImage9'} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  म्युच्युअल फंड से पैसे कैसे निकाले?

                  </div>
                  <div className='socail-media'>
                    <div className='d-flex justify-content-between'>
                      
                      <div><img src={whatsapp} className="" alt={"Whatsapp"} onClick={() => { shareLinkV2('https://youtu.be/nl5W7nH66d8','whatsapp') }} width="22" height="22" /></div>
                      <div><img src={fb} className="" alt={"Facebook"} onClick={() => { shareLinkV2('https://youtu.be/nl5W7nH66d8','facebook') }} width="22" height="22" /></div>
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