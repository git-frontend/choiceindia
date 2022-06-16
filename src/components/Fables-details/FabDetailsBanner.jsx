
import React from "react";
import Bannerimage from '../../assets/images/fabledetails/detailbanner.png';
import twitterone from '../../assets/images/fabledetails/twitterone.png';
import twittertwo from '../../assets/images/fabledetails/twittertwo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram, faYoutube, faTelegramPlane} from '@fortawesome/free-brands-svg-icons'
function Fabdetailsbanner() {

  return (
    <div className='banner-main'>
      
      <section className="detailbanner">
          <div className="container">
              <div className="row ">
                    <div className="col-md-12">
                        <p className="text-center date">Published August 21, 2021</p>
                        <h2 className="heading title-secnd text-center"> Shein setting a trend again for fashionistas – It’s a <br />comeback</h2>
                        <ul className="tabs">
                            <li>
                                International
                            </li>
                            <li>
                                Economy
                            </li>
                            <li>
                                Currency
                            </li>
                            <li>
                                Trending
                            </li>
                        </ul>
                        <div >
                              <img src={Bannerimage} className="img-fluid imgblock" alt="Loading" />
                        </div>
                    </div>
                   
              </div>
                <div className="row">
                  <div className="col-md-11">
                  
                    <div className="textwrap">
                    <p>It’s happening!!</p>
                    <p>We have a great news for all the fashionistas and shopaholics out there. You can now buy the latest trends in fashion wear and make your wardrobe infinite through ordering from Shein. Yes, the hottest fast fashion brand is making its entry in the Indian market, but there is a twist. Shein will make a comeback through Amazon.<br />
                        Now, for those of you who doesn’t know about Shein. It is a one of the world's leading fast-fashion stores. Although this $15 billion corporation is based in China, it ships to more than 220 countries and territories worldwide.</p>
                    <p>Shein tends to focus in women's clothing and accessories, but it also sells kids clothes, men's clothing, home decor, and other miscellaneous items. There are even outfits and accessories for dogs and cats on the site.
                        Infact, Shein is particularly popular among Gen Zers and Millennials because of it’s low-cost, latest styles and high-end brands. In addition, Shein's work frequently goes viral on social media after being shared by influencers and content creators.</p>
                    <p>All in all..</p>
                    <p>It was a great success in India until June 2020, when it was banned, along with a slew of other Chinese apps, for evading tax rules. In 2020, as part of India’s clampdown on Chinese apps, the Home Ministry had blocked the site.<br />
                        And then, the Pandora's box gets opened<br />
                        After a probe by Mumbai Customs over suspicions that Chinese shopping sites were paying fewer customs than they were due, the site had to temporarily halt shipping orders and commence client refunds in 2019.<br />
                        Chinese shopping sites shipping to India were investigated for taking advantage of a loophole that permitted Indian citizens to acquire duty-free gifts and samples from outside worth less than $5,000. Numerous businesses were reported to take advantage of this loophole to avoid paying taxes on parcels.</p>
                    <p>Finally, following growing tensions on the Indo-China border, various Chinese apps popular in India were banned in June 2020 as part of a bigger crackdown by the Indian government. The apps included TikTok, Shareit, UC Browser, Weibo, WeChat, AliExpress, Shein, among them. The apps were ordered to be taken down from the Google Play Store and the Apple App Store.
                        But, now Shein is relaunching in India. It has been included to Amazon Fashion's Prime Day 2021 sale, which will take place on July 26 and 27. It will certainly be a seller on Amazon. But, for now, Shein's own Indian e-commerce site is still unavailable.</p>
                    <p>In point of fact, Shein is not the only Chinese site making a comeback in India</p>
                    <p>PUBG Mobile was the first prohibited app to resurface under a new name and with a new owner. In July, PUBG Mobile was renamed Battlegrounds Mobile India by Krafton, a South Korean company. Shein, on the other hand, appears to be following a completely different path to re-enter India.</p>
                    <p>Whatever the case may be, the buzz of Shein’s comeback has got, it’s fans excited, that is evident from the shein memes that have been flooded over twitter’s timeline. Have a look at some of them: -</p>
                    </div>
                  </div>
                

                  <div className="col-md-1">
                      <div className="right-social-links">
                            <ul>
                                <li> <a href="/" target="_blank">
                                    <FontAwesomeIcon icon={faFacebookF} /> 
                                    </a>
                                </li>
                                <li> <a href="/" target="_blank">
                                        <FontAwesomeIcon icon={faTwitter} />
                                    </a>
                                </li>
                                <li> <a href="/" target="_blank">
                                        <FontAwesomeIcon icon={faLinkedinIn} />
                                    </a>
                                </li>
                                <li> <a href="/" target="_blank">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </li>
                                <li> <a href="/" target="_blank">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </li>
                                <li> <a href="/" target="_blank">
                                <FontAwesomeIcon icon={faTelegramPlane} />
                                    </a>
                                </li>
                            </ul>

                            </div>
                                    
                        
                  </div>
                 
              </div>
              <div className="row imgwrap">
                <div className="col-md-6">
                    <div className="">
                    <img src={twittertwo} className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={twitterone} className="img-fluid" />
                </div>
              </div>
              <div className="row">
                  <div className="col-md-12">
                  
                    <div className="textwrap">
                    <p>Okay!</p>
                    <p>Now, it’s time for the bigger question. How Shein is planning to participate in the sale?<br />
                    no longer operate as a stand-alone company and will instead advertise itself as an Amazon vendor.</p>
                    <p>Coming to the flip side,</p>
                    <p>There are some issues with Shein's launching on Amazon Prime Day in India. Selling clothes for dirt-cheap prices has environmental and ethical consequences, which a number of Indians are aware of.<br />
                        Also, several comments on Instagram and Twitter, in general, were critical of the Modi government's Make-in-India push, which favoured Chinese firms.<br />
                        Nevertheless, Shein had grown in popularity among Gen-Z and millennial buyers, who used the site to ship orders due to its inexpensive costs plus trendy clothes and they are eagerly waiting for its launch.</p>




                    </div>
                  </div>
                

            
                 
              </div>
          </div>
      </section>
  
      
    
    </div>
  );
}

export default Fabdetailsbanner;
