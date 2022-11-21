// import "./corporatedemateaccount.scss";
// import DematAccountForm from '../Common-features/DematAccountForm';
import "../OpenDematAccount/DematPage"
import CorporateDematAccountBanner from "../CorporateDemateAccount/CorporateDematAccountBanner";
import WhyOpenFreeCorporateAccount from "../CorporateDemateAccount/WhyOpenFreeCorporateAccount";
import CorporateDematAccountOpeningProcess from "../CorporateDemateAccount/CorporateDematAccountOpeningProcess";
import LowBrokerageCorporateDematAccount from "../CorporateDemateAccount/LowBrokerageCorporateDematAccount";
import CorporateFaq from "../CorporateDemateAccount/CorporateFaq";
import WhyChoice from "../CorporateDemateAccount/WhyChoice";
import { Link } from "react-router-dom";
import {useState, useEffect} from 'react';
import {
    useLocation,
  } from 'react-router-dom';
  import meta_tags from "../../Data/MetaTags";

function CorporateDemateAccount() {

    const [rendercount, setRenderCount] = useState(() => false);

    const location = useLocation();

    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
        //   let parser = new DOMParser();
        //   let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
        //   document.body.appendChild(doc.getElementsByTagName('script')[0]||[]? doc.getElementsByTagName('script')[0]||[]: '' );
          document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
          // document.getElementById('meta-tags').name= meta_tags[location.pathname.replace('/',"")]? meta_tags[location.pathname.replace('/',"")].title : ''  ;
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
            {/* 
<p>Corporate Demate Account</p>
<DematAccountForm></DematAccountForm>
*/}
            <CorporateDematAccountBanner />
            <WhyOpenFreeCorporateAccount />
            <WhyChoice />
            <LowBrokerageCorporateDematAccount />
            <CorporateDematAccountOpeningProcess />
            <CorporateFaq />
            <section className="readmoresection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="secttitle">Corporate Demat Account </h2>
                        </div>
                        <div className="col-md-12">
                            <div className="para">
                                <input type="checkbox" className="read-more-state" id="post-1" />
                                <span className="read-more-wrap ">
                                    A Corporate Demat Account is a Demat account created in the name of a Private Company or a Corporate House for their investments in the stock markets. Public Limited Companies, Corporate Houses, and Private Firms can open <Link to="/demat-account"><strong>Demat account</strong></Link> registered in their company’s name and invest in mutual funds, stocks, and other investment opportunities through this account.
                                    <span className="read-more-target">
                                        With Choice India, you can <Link to="/open-free-demat-account"><strong>open a Demat account online</strong></Link>  for your company. You can carry on the investments in your company's name and invest in the equity markets. You can easily open a corporate account after the successful uploading of the necessary documents. You can follow our easy and hassle-free process for a smooth hassle-free <strong>corporate Demat Account opening.</strong><br /><br />
                                        <h2 className="font-bold">How To Open A Corporate Demat Account?</h2>
                                        Our Corporate Clients can easily open a <strong>Corporate Demat Account</strong> with us following our simple online process and by easily completing their KYC. There might be a few additional documents required for the fulfillment of the account opening process:<br /><br />
                                        <strong>Below are the easy steps for Corporate Demat Account opening:</strong><br /><br />
                                        <ul>
                                            <li>To open a Corporate Account with us, you can register online on our website.</li>
                                            <li>You can also download our Choice FinX App (Android &amp; iOS) and Sign Up via your smartphone.</li>
                                            <li>It is advisable to download the app since signing up will need the upload of photos, which can be easily clicked via the camera of your phone.</li>
                                            <li>If your documents are up-to-date, it will take you about 5 minutes to Sign Up.</li>
                                            <li>Once you upload all the necessary documents they are up for verification.</li>
                                            <li>Upon the successful verification of the documents, you will have successfully opened a <strong>Corporate Demat Account</strong> online.</li>
                                        </ul>
                                        <br /><br />
                                        <h2 className="font-bold">What The Opening Charges For Corporate Demat Account?</h2>
                                        <div>
                                            <h3 className="font-bold">Corporate Demat Account Opening Fee</h3>
                                            Various brokers have different fee structures for opening a <strong>Demat account for Corporates</strong>. If you choose the right broker, you can open your account, absolutely for free. <Link to="/" >Choice India</Link> offers its corporate clients to open a free Corporate Account. We charge no opening fees for our Corporate clients.<br />
                                            <h3 className="font-bold">Annual Maintenance Fee</h3>
                                            At Choice India, we offer our customers to open <a href="https://choiceindia.com/campaign/free-amc-demat-account">demat account with zero amc</a>.
                                            <br/><br/>(The Annual Maintenance fee is charged for the general maintenance of the <strong>Demat Account for Corporates</strong> and keeping it functional.)
                                        </div>
                                       <br/>
                                        <h2 className="font-bold">Documents Required to Open A Corporate Demat Account</h2> <br />
                                        There is a set of documents required to open demat account for corporates. The identity proofs and address proofs are compulsory for all account holders. Below are the necessary Corporate Demat Account documents:
                                        <br /><br /><ul><li>Aadhar Card of All Account Holders</li><li>Photographs of all account Holders (Self-Attested)</li><li>Pan Card copies of All Account Holder</li>
                                            <li>PAN of the Company</li>
                                            <li>Address Proofs of All account Holders</li>
                                            <li>Address Proof of the Company</li>
                                            <li>Cancelled Bank Cheques of All Account Holders or Bank Statements of Past 3 Years</li>
                                            <li>The Balance sheet of the partnership for the last 2 Financial Years (New Companies must provide IT Returns Declaration)
                                            </li>
                                            <li>Duly Filled Annexures</li>
                                            <li>FATCA Declaration</li></ul>
  
                                      
                                        <h2 className="font-bold">Benefits of Opening A Corporate Demat Account</h2>
                                        Investing in Equity Markets can turn out to be the best wealth management move for the corporates. The corporates who want to grow their money and have a safe and secure store of value can open a Corporate Account and manage their funds well. Opening a Corporate Account with Choice India comes with the benefits like:<br />
                                        <div className="ml-3"><h3 className="font-bold"> 1. Financial Planning</h3>Our financial plans are designed to create and maintain healthy portfolios of our corporate clients. We have expertise in the financial planning of the funds of our corporate clients.<h3 className="font-bold"> 2. Diversity of Disciplines</h3>We use our expertise in diverse areas and coordinate all the factors together to protect our corporate clients' investments and try for good returns.<h3 className="font-bold"> 3. Specialization</h3>Choice India has mastery in portfolio management of Corporate Houses. Over the years, we have developed a healthy relationship with our clients because of our focus on the client-centric approach.<h3 className="font-bold"> 4. Holistic Approach</h3>Our holistic approach includes everything from financial product curation, financial trend forecasting, portfolio management, and tax planning for our corporate clients.<h3 className="font-bold"> 5. Other Benefits</h3>There are several other benefits of having a Corporate Trading Account for your company which include -
                                            <ul><li>Safe and Secure Paperless Digital Storage of Funds
                                            </li>
                                                <li>Corporate Benefits</li>
                                                1. Auto Credit of Stock Split<br/>
                                                    2. Auto Dividends
                                                    <li>Easy Holdings
                                                    </li>
                                                    <li>Safety of Securities</li>
                                                    <li>Reduced Time &amp; Cost</li>

                                            </ul></div>
                                        <h2 className="font-bold">Procedure To Open A Corporate Demat Account</h2>
                                        With Choice India’s advanced digital approach, the process of Corporate Demat Account opening becomes simple and easy.<br /><br />
                                        Follow the easy step-by-step detailed procedure to open a Demat Account for Private Companies -<br /><br />
                                        <ul><li>Duly Fill out Corporate Demat Account Forms</li><li>Complete KYC Forms of Each Account Holder</li><li>Upload Aadhar details of All Account Holders</li><li>Upload Photos of All Account Holders (Self-Attested)</li>
                                            <li>Upload PAN details of All Account Holders</li>
                                            <li>Upload PAN details of the Company</li>
                                            <li>Upload Address Proofs of All Account Holders</li>
                                            <li>Upload Address Proof of the Company</li>
                                            <li>Upload Canceled cheques of All Account Holders or Bank Statement for the past 3 Months</li>
                                            <li>Upload the Balance sheet of the partnership of the last 2 FY (New Companies must provide IT Returns Declaration)</li>
                                            <li>Upload Duly filled annexures</li>
                                            <li>Upload FATCA Declaration</li></ul>
                                    </span>
                                </span>
                                    <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                                    
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CorporateDemateAccount;
