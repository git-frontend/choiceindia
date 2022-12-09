import "./DematPage.scss"
import OpenFreeAccountBanner from "./OpenFreeAccountBanner";
import WhyOpenFreeDematAccount from "./WhyOpenFreeDematAccount";
import DematAccountOpeningProcess from "./DematAccountOpeningProcess";
import LowBrokerageDematAccount from "./LowBrokerageDematAccount";
import WhyChoice from "./WhyChoice";
import DematFaq from "./DematFaq";
import Template2 from '../Common-features/Template2';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import {
  useLocation,
} from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function DematPage() {

  const [skeleton, setSkeleton] = useState(() => true);
  const [rendercount, setRenderCount] = useState(() => false);

  const location = useLocation();

  setTimeout(() => {
    setSkeleton(() => false);
  }, 200)

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
      document.body.appendChild(doc.getElementsByTagName('script')[0]||[]? doc.getElementsByTagName('script')[0]||[]: '' );
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if((document.getElementById('link1')==null)){
      let sitemap = document.createElement('link');
      sitemap.rel = 'alternate';
      sitemap.id = 'link1';
     sitemap.href = meta_tags[location.pathname.replace('/', "")].link1||'';
     sitemap.hreflang = meta_tags[location.pathname.replace('/', "")].href1||'';
      document.head.appendChild(sitemap);

      let sitemap1 = document.createElement('link');
      sitemap1.rel = 'alternate';
      sitemap1.id = 'link2';
      sitemap1.href = meta_tags[location.pathname.replace('/', "")].link2||'';
      sitemap1.hreflang = meta_tags[location.pathname.replace('/', "")].href2||'';
      document.head.appendChild(sitemap1);

      let sitemap2 = document.createElement('link');
      sitemap2.rel = 'alternate';
      sitemap2.id = 'link3';
     sitemap2.href = meta_tags[location.pathname.replace('/', "")].link3||'';
     sitemap2.hreflang = meta_tags[location.pathname.replace('/', "")].href3||'';
      document.head.appendChild(sitemap2);
      let sitemap3 = document.createElement('link');
      sitemap3.rel = 'alternate';
      sitemap3.id = 'link4';
     sitemap3.href = meta_tags[location.pathname.replace('/', "")].link4||'';
     sitemap3.hreflang = meta_tags[location.pathname.replace('/', "")].href4||'';
      document.head.appendChild(sitemap3);
      let sitemap4 = document.createElement('link');
      sitemap4.rel = 'alternate';
      sitemap4.id = 'link5';
     sitemap4.href = meta_tags[location.pathname.replace('/', "")].link5||'';
     sitemap4.hreflang = meta_tags[location.pathname.replace('/', "")].href5||'';
      document.head.appendChild(sitemap4);
      let sitemap5 = document.createElement('link');
      sitemap5.rel = 'alternate';
      sitemap5.id = 'link6';
     sitemap5.href = meta_tags[location.pathname.replace('/', "")].link6||'';
     sitemap5.hreflang = meta_tags[location.pathname.replace('/', "")].href6||'';
      document.head.appendChild(sitemap5);
      }
      
      // document.getElementById('link1').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link1 : '';
      // document.getElementById('link2').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link2 : '';
      // document.getElementById('link3').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link3 : '';
      // document.getElementById('link4').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link4 : '';
      // document.getElementById('link5').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link5 : '';
      // document.getElementById('link6').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link6 : '';
      // document.getElementById('link1').hreflang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].href1 : '';
      // document.getElementById('link2').hreflang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].href2 : '';
      // document.getElementById('link3').hreflang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].href3 : '';
      // document.getElementById('link4').hreflang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].href4 : '';
      // document.getElementById('link5').hreflang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].href5 : '';
      // document.getElementById('link6').hreflang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].href6 : '';
    }
  }, [rendercount])

  return (
  
    <div>
      {
        skeleton ? <Template2 /> :
          <div className="demat-page-parent">
            <OpenFreeAccountBanner />
            <WhyOpenFreeDematAccount />
            <WhyChoice />
            <LowBrokerageDematAccount />
            <DematAccountOpeningProcess />
            <DematFaq />


            <section className="dematcontentseo">
              <div className="container">
                  <div className="row">
                      <div className="col-md-12 text-center">
                          <h2 className="title-first">Open a Free Demat Account with Choice</h2>
                     </div>
                          <div className="col-md-12">
                              <div className="terms-cont" id="style-1">
                              <div className="para">
                     
                                  <span className="read-more-wrap "> The stock market is an old establishment that has existed since 1875 when BSE 	was the first the first-ever stock market to be established in Asia, it is evident that in these 147 years of history a lot has changed and one among those changes was the transition of physical paper certificates shares to shares being traded on an online platform

                                    <span className="read-more-target"> This was possible only when in 1996 electronic trading was introduced to the market and since then a Demat account has been the mandatory part of anyone’s investing journey. So let’s now dig deeper into this and understand;<br /><br />

                                      <h2 className="font-bold">What is a Demat Account?</h2>
                                      If we put it into simple terms we can say that the <Link to="/demat-account">Demat account</Link> is a depository where you can safely store your investments in different forms. A Demat account can not only hold your stocks but can also hold your mutual funds, bonds and ETFs.<br /><br />

                                      Demat account is your safe locker as you don’t live in perpetual fear of losing any shares or investments, the whole process is electronic and you’re away from all kinds of triggers that could force you to make irrational decisions.<br /><br />
                                      <h2 className="font-bold">Why Demat Account is Necessary for Investing?</h2>
                                      As mentioned previously, before electronic trading was introduced into the stock market in 1996 people stored their shares as certificates which were in form of physical paper and due to human errors, it is not assured that those physically held shares are in safe hands,<br /><br />

                                      Therefore keeping convenience in mind, the whole process of trading took an electronic route and since then this trend has followed and it was made mandatory for any investor to open a Demat account to participate in the stock market.<br /><br />

                                      <h2 className="font-bold">Difference Between Demat and Trading Account</h2>
                                      Now that we’ve explored what is a Demat account and how it helps us, let's further dive in and understand, how does a <Link to="/open-trading-account">Trading Account</Link> play a role here? <br /><br />

                                      In the Stock Market, it is evident that we’ll have a lot of transactions going around and to make these transactions we need to have a trading account, now many might argue shouldn’t the Demat account itself should do that job?<br /><br />

                                      Well to answer that question people need to understand that a Demat account is just a repository where your stocks are stored, for transactional purposes in the stock market you need a trading account.<br /><br />

                                      Now that we've understood how does a <Link to="/blog/difference-between-demat-and-trading-account/">Demat account and a trading account differ</Link> from each other, let's look into the details; <br />
                                      <div className="ml-3">
                                        <h3 className="font-bold"> 1. Delivery </h3>
                                        A Demat account stores your stocks only when you take the delivery for it, you can further buy or sell in the future whereas your trading account facilitates you for your intraday activities, in intraday trading, you are required to sell off your positions by the end of the day, hence the intraday trades you’ve taken are not delivered to your Demat account.<br />
                                        <h3 className="font-bold"> 2. Bank Link</h3>
                                        As mentioned before a trading account helps you with transactions, so it makes sense that your trading account and your bank account are both linked to each other so that you can make transactions seamlessly.<br />

                                        When you add money into your trading account you can go ahead and buy stocks that will be stored in your Demat account and if you sell your stocks, your Demat account will get rid of those stocks and the money will be deposited into your trading account and from there it will be transferred to your bank account as per your convenience.
                                      </div>
                                      <br />
                                      <h2 className="font-bold"><Link to="/blog/benefits-of-a-demat-account/">Benefits of Opening Demat Account </Link></h2>
                                      In the above-mentioned sections we have told you why is a Demat account necessary but told very less on why exactly is a Demat account beneficial for you,<br />
                                      <div className="ml-3">
                                        <h3 className="font-bold"> 1. Corporate Benefits </h3>
                                        Stocks as a single entity is not only associated with trading, when you buy into a stock you are exposed or eligible to tons of corporate benefits like stock splits, bonuses, dividend payouts etc<br />

                                        Managing all these benefits means your stocks are dynamic, they can change in number when you get a bonus or a stock split. When you are eligible for a dividend payout, the dividends are directly transferred to your bank account.<br />
                                        All these happen seamlessly, but that wouldn’t be the case if it weren't for the Demat account.<br />
                                        <h3 className="font-bold"> 2. Nomination Facilities</h3>
                                        When you open a Demat account for yourself you are required to add a nominee for precautionary measures, the transfer of assets between you and your nominee happens without any hassle, requiring you to have little to no paperwork.<br />
                                        <h3 className="font-bold"> 3. Physical Limitations</h3>
                                        Electronic trading was introduced in 1994, before that we had people trading via physical means using paper certificates. This came with a lot of drawbacks including misplacing stocks, theft, damage to the certificates, etc<br />
                                        With a Demat account, all these problems are tackled altogether, a Demat account provides all the securities that would be required with password authentication.<br />
                                        <h3 className="font-bold"> 4. Versatile Options</h3>
                                        Talking in terms of finance we usually see most of the instruments involved in it are limited to a few folks who check out the rigid structure of authentication and security, but that problem is tackled by Demat accounts without compromising security or authentication. <br /><br />
                                        While opening a Demat account you are provided with plenty options from which you can open your Demat account;<br /><br />
                                        <ul>
                                          <li className="font-bold">Individual Demat Account </li>
                                          Individual Demat account is a fairly simple one and the name itself is explanatory. It is a Demat account dedicated to an individual who operates it themselves.<br />
                                          <li className="font-bold">Minor Demat Account </li>
                                          For the most part, usually, minors or people aged below 18 are not allowed to be engaging in a financial agreement, but, we have certain provisions in place which would allow a minor to have a Demat account.<br />
                                          However, this<Link to="/minor-demat-account"> minor Demat account</Link> needs to be operated under the guidance of the minor’s parent or guardian, meaning the minor himself cannot buy or sell shares.<br />
                                          Once the account holder is aged above 18 and wishes to take control of their Demat account, they can do so legally.<br />
                                          <li className="font-bold"><Link to="/nri-demat-account">NRI Demat Account</Link></li>
                                          We understand and we know that any legal Indian can possess equities to buy and sell according to their free will, but, what about NRIs?<br />
                                          NRI’s or Non-Resident Indians, do they have the provisions to enjoy the tremendous growth shown by the Indian markets?<br />
                                          Turns out, they do have the provisions to participate in the Indian markets. NRIs are allowed to have Demat accounts but while abiding by the rules of FEMA (Foreign Exchange Management Act)<br />
                                          <li className="font-bold">Corporate Demat Account</li>
                                          Demat accounts are not only limited to personal use, there are provisions for the corporate companies to invest as a single entity. <Link to="/corporate-demat-account">Corporate Demat accounts</Link> are especially special because it reduces the paperwork significantly while you are buying, selling, trading and transferring securities.<br />
                                        </ul>
                                      </div><br />
                                      Now that we’ve covered and also understand what is Demat and how Demat is necessary for us to invest in securities in India, now let’s look at how to do we set up or open a Demat account online.<br /><br /><br />

                                      <h2 className="font-bold">Requirements For Opening a Demat Account</h2>
                                      If you’re looking to have a personal touch while opening your Demat account you probably will opt for an offline means and opening a Demat account offline would require you to be prepared with documents and we’ll help you with it;<br /><br />
                                      <ul>
                                        <li>First of all, you’d have to decide on your DP or Depository Participant, DP is an intermediate between you and your investments and DPs are usually banks, financial institutions and brokers.</li><br />
                                        <li>For choosing the appropriate DP you have to decide upon the brokerage charges and annual maintenance charges.</li><br />
                                        <li>You need to have a bank account and complete your KYC</li><br />
                                        <li>While completing your KYC you’ll have to attach copies of your;</li><br />
                                        <div className="ml-3">
                                          1. PAN Card<br />
                                          2. ID Proof (eg; Aadhar)<br />
                                          3. Proof of Permanent Residence<br />
                                          4. Passport-size photographs
                                        </div><br />
                                        <li>While you submit your KYC along with all the copies of your necessary documents, you need to make sure you have the original documents with you as well for verification purposes. </li><br />
                                        <li>After the verification process, you are required to sign an agreement that lists out all the terms and conditions.</li><br />
                                        <li>Once your account is opened, your DP will be providing you with a unique client ID, this client ID will allow you to access your Demat account online.</li><br />
                                      </ul>
                                      After you’ve gained access to your Demat account make sure your DP provides you with Beneficiary ID and POA number or Power of Attorney number along with your client ID, this information will help you apply for IPOs. <br /><br />
                                      <h2 className="font-bold">Opening a Demat Account Online</h2>
                                      Opening a Demat account online is relatively easier than opening an account while actually having to be at the physical location of your preferred DP. You opening a Demat account online will obviously allow you to open an account at the convenience of your house. <br />
                                      Although the requirements of opening a Demat account online will require you to have pretty much the same documents you’d usually want while opening a Demat account physically, there are some extra requirements that you need to know to be prepared;<br /><br />
                                      <div className="ml-3">
                                        <ul>
                                          <li>Visit your preferred DP’s website, almost every other financial institution or bank has an online presence in this day and age, so you’ll not be facing any problems finding your preferred DP’s website.</li><br />
                                          <li>While you’re at the website you’ll be required to fill out a few basic details like Recipient Name, Email ID, Contact Number and City.</li><br />
                                          <li>Once you’ve filled out the necessary details, you’ll receive an OTP for verification and when you punch in the OTP your initiation process starts.</li><br />
                                          <li>Your DP will get in contact with you for completing all the mentioned formalities and then open a Demat account.</li>
                                        </ul>
                                      </div>
                                      <h2 className="font-bold">Demat Account Opening Fee and Charges</h2>
                                      This is the most common type and is available for majority of the Indian citizens residing in India.<br />

                                      <h3 className="font-bold">Repatriable Demat Account</h3>
                                      While opening a Demat account you probably will be associated with various fees and charges, these are namely opening charge, safety charge, annual maintenance charge, transaction charges and Demat charges.<br />

                                      Before you decide upon a DP to open your Demat account you are advised to check about all this information and only then make a decision to open a Demat account at your prefered DP. <br />
                                      <div className="ml-3">
                                        <ul>
                                        <li className="font-bold">Demat Charges</li>
                                        Most of the existing financial institutions and banks don’t usually charge Demat charges anymore but there used to be a time when banks used to charge anywhere in between 600-900 rupees just to open a Demat account.<br />
                                        Now you might find it common that institutions open Demat accounts for you for free or at a very nominal price. <br />
                                        <li className="font-bold">Safety Charges</li>
                                        Safety charges are levied in exchange for keeping all your securities safe and maintaining a Demat account.<br />
                                        Safety charges or account custodian charge fees are usually levied on the DP by the depository, these are one-time charges on the DPs. The DPs who charge safety charges on their customers do it on a monthly basis.<br />
                                        <li className="font-bold">Annual Maintainance Charge (AMC)</li>
                                        Annual Maintainance charges are levied on the investor by the DP for the services they provide. <br />
                                        The annual Maintainance charge is also called the folio maintenance charge, these charges range between 200 - 1000 rupees per annum. The style at which <Link to="/blog/what-are-dp-charges/">DPs charge</Link> AMC differs accordingly, some DPs charge their investors quarterly and some even take a lifetime fee, but charging investors annually is the most common way of collecting AMC.<br />
                                        <li className="font-bold">Transactional Charges</li>
                                        The main aim of having a Demat account is participating in the Indian markets and while doing that it is evident that every transaction you make on the Demat account is a move towards your future.<br />
                                        DPs charge <Link to="/blog/dp-transaction-charges/">transactional charges</Link> on both credit and debits, where every time you engaged in a trade a nominal amount is charged on your behalf for facilitating a smooth transaction between your Demat account and the market.<br />
                                      
                                        </ul>
                                        </div>
                                      <h2 className="font-bold">Why Should You Choose Choice to Open a Demat Account? </h2>
                                      You’ve been through all the information that is out there about Demat and you hone enough knowledge to understand that picking a DP is no easy job, you’ll have to consider a lot of factors like charges and the services they provide and if that aligns with your conscience, you opt for them.<br />
                                      But let us present ourselves and tell you why exactly you need to open a Demat account with Choice;<br /><br />
                                      <ul>
                                        <li>Free AMC for a year and after a year the maintenance charge is at just 200 Rupees + GST, which is significantly lesser than the market standard.</li><br />
                                        <li>Free access to expert research and advisory, these reports provided have proven to have an impeccable accuracy record.</li><br />
                                        <li>Insanely low brokerage charges, choice platform happens to be very trader friendly where call and trade orders have charges on them and squaring off your positions is also absolutely free. The Brokerage charges are as low as 2 paise.</li><br />
                                        <li><a href="/campaign/free-amc-demat-account">Open a Demat account with no amc,</a> Choice opens an account for you, free of cost.</li><br />
                                      </ul>
                                    </span></span> 
                                </div>
                              </div>
                          </div>
                      </div>
                  </div>
            </section>

          
          </div>
      }

    </div>
  );
}

export default DematPage;
