
import "../OpenDematAccount/DematPage"
import NriDematAccountBanner from "../NRIDemateAccount/NriDematAccountBanner";
import WhyOpenFreeNriAccount from "../NRIDemateAccount/WhyOpenFreeNriAccount";
import DematAccountNriOpeningProcess from "../NRIDemateAccount/DematAccountNriOpeningProcess";
import LowBrokerageNRIDematAccount from "../NRIDemateAccount/LowBrokerageNRIDematAccount";
import WhyChoice from "../OpenDematAccount/WhyChoice";
import { useState, useEffect} from 'react';
import { Link } from "react-router-dom";
import {useLocation, } from 'react-router-dom';
import meta_tags from "../../Data/MetaTags";

function NRIDemateAccount() {
    const [rendercount, setRenderCount] = useState(() => false);
    const location = useLocation();
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
           
            <NriDematAccountBanner />
            <WhyOpenFreeNriAccount />
            <WhyChoice />
            <LowBrokerageNRIDematAccount />
            <DematAccountNriOpeningProcess />
            <section className="readmoresection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="secttitle">NRI Demat Account</h2>
                        </div>
                        <div className="col-md-12">
                            <div className="para">
                                <span className="read-more-wrap "> Simply put, NRIs are the Indians who are currently residing abroad (outside of India). With Choice India, NRIs (Non Resident Indians) who want to invest in Indian Equity Markets can open a <Link to="/demat-account"><strong>Demat Account</strong></Link> for NRI. By following our simple account opening procedure the NRIs can venture into shares, bonds, debentures of various Indian companies.

                                     The most accurate definition of NRI is given by FEMA (Foreign Exchange Management Act): NRI is referred to as an individual who is -<br/><br />
                                        <ul>
                                            <li>An Indian citizen or a person of Indian Origin who lives in a foreign country for employment, business, or other reasons.</li>
                                            <li>An Indian Citizen who has lived in India for less than 182 days during the preceding financial year is also referred to as an NRI.</li><br />
                                        </ul>
                                        The procedure of <Link to="/open-free-demat-account"><strong>opening a Demat Account</strong></Link> for NRIs is quite similar to that of opening the regular Demat Accounts. The only difference is that an NRI needs to declare his/her NRI residence status and then choose the appropriate subtype of the NRI Demat Account.
                                        <br /><br />
                                        <h2 className="font-bold">How To Open A NRI Demat Account Online?</h2>
                                        Many of the NRI investors are confused about how to open an NRI Demat account online. With Choice India, NRIs can now open an account online with KYC documents. There are additional documents that are necessary for the fulfillment of the account opening process:
<br /><br />
                                        <strong>Below are the easy steps to open NRI Demat account:</strong><br /><br />
                                        <ul>
                                            <li>To open an NRI Account with us, you can register online on our website.<br />
                                            Individual Demat account is a fairly simple one and the name itself is explanatory. It is a Demat account dedicated to an individual who operates it themselves.
                                            </li><br />
                                            <li>You can also download our Choice FinX App ( Android &amp; iOS) and Sign Up via your smartphone.</li><br />
                                            <li>It is advisable to download the app since signing up will need the upload of your latest photo, which can be easily clicked from the camera of your phone.</li><br />
                                            <li>If your documents are up-to-date, it will take you about 5 minutes to Sign Up.</li><br />
                                            <li>Once you upload all the necessary documents they are up for verification.</li><br />
                                            <li>Upon the successful verification of the documents, you will have successfully opened an NRI Demat Account online.</li>
                                           
                                        </ul>
                                        <br /><br />
                                        <h2 className="font-bold">What Are the NRI Demat Account Opening Charges?</h2>
                                        <div>
                                            <h3 className="font-bold"> NRI Account Opening Fee</h3>
                                            Various brokers have different fee structures for opening a Demat account for NRIs. If you choose the right broker, you can open your account. Choice India offers its NRI clients to open a NRI account. We charge no opening charges for our NRI clients.
<br />
                                            <h3 className="font-bold">Annual Maintenance Fee</h3>
                                            The Annual Maintenance fee is charged for the general maintenance of the Demat Account for NRIs and keeping it functional. At Choice India, we offer our customers a One Year free AMC on demat account.
                                        </div><br />

                                        <h2 className="font-bold">Benefits Of Opening NRI Demat Account</h2>
                                        Investing in the Indian Stock Markets while you are abroad is advantageous. Demat account opening online for an NRI with us comes with the benefits like:<br />
                                        <div className="ml-3">
                                            <h3 className="font-bold"> 1. Financial Planning</h3>
                                            We have expertise in the financial planning of the funds of our NRI clients. Our financial plans are designed to create and maintain healthy portfolios of our NRI clients.

                                           
                                            <h3 className="font-bold"> 2. Client Specific</h3>
                                            Every NRI individual has a specific financial goal. We work closely with them and provide them with our client-specific, customized services.
                                            <h3 className="font-bold"> 3. Holistic Approach</h3>
                                            Our holistic approach includes everything from financial product curation, financial trend forecasting, portfolio management, and tax planning for our NRI clients.
                                            <h3 className="font-bold"> 4. Diversity of Disciplines</h3>
                                            We use our expertise in diverse areas and coordinate all the factors together to protect our NRI clients' investments and try for high returns.
                                            <h3 className="font-bold"> 5. Specialization</h3>
                                            <Link to="/"><strong>Choice India</strong></Link> has mastery in portfolio management of NRI accounts. Over the years, we have garnered a loyal customer base because of our client-centric approach.
                                        </div><br/>

                                        <h2 className="font-bold">Documents Required to Open A NRI Demat Account</h2>
                                        Below is the comprehensive list of documents required to open the Demat Account for NRIs:<br />
                                        <h4 className="font-bold mrg-y"> 1. Current Residential Status</h4>
                                        <h4 className="font-bold mrg-y"> 2. For Indian Passport Holders</h4>
                                        <ul>
                                            <li>Valid Passport</li>
                                            <li>Valid Visa - Work/Student/Employment/Resident Permit</li>
                                            <li>Document Proof showing Place of Birth as India</li>
                                           
                                            
                                           
                                        </ul>
                                        <h4 className="font-bold mrg-y"> 3. For Foreign Passport Holders</h4>
                                        <ul>
                                            <li>Valid Passport</li>
                                            <li>'India’ as a Place of Birth in the Foreign Passport</li>
                                          OR
                                            <li>PIO / OCI Card , Proof of Identity (POI) [Driving license]</li>
                                            <li>Proof of Address (POA) [Passport]</li>
                                            <li>Overseas Address Proof</li>
                                            <li>PAN Card</li>
                                            <li>The PIS Permission Letter from the RBI</li>
                                            <li>Proof of Bank Account [Canceled Cheque]</li>
                                            <li>Proof of Income (For trading in derivatives) [Copy of ITR Acknowledgement]</li>
                                            <li>Proof of Bank Accounts & Depository Accounts</li>
                                            <li>Passport size photographs of the NRI Investor</li>



                                        </ul><br />
                                        <h2 className="font-bold">Procedure To Open A NRI Demat Account</h2>
                                        With us, Individuals can open an NRI Demat Account online. Before beginning the account opening process you must have the necessary documents with you. Then one can take the following simple steps -
                                        <br /><br />
                                            <ul>
                                            <li>An NRI needs to sign up for an account opening request with us.</li>
                                            <li>An NRI is required to provide KYC Documentation according to the Ministry of Home Affairs list.</li>
                                            <li>We then verify the opening form and KYC Documents.</li>
                                            <li>The request is then processed and then you get to hold your NRI Demat account online.
</li>
                                            </ul>
                                      
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default NRIDemateAccount;
