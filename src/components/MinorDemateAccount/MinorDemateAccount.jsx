import "../OpenDematAccount/DematPage";

import MinorDematAccountBanner from "../MinorDemateAccount/MinorDematAccountBanner";
import WhyOpenFreeMinorAccount from "../MinorDemateAccount/WhyOpenFreeMinorAccount";
import MinorDematOpeningProcess from "./MinorDematOpeningProcess";
import LowBrokerageMinorDematAccount from "../MinorDemateAccount/LowBrokerageMinorDematAccount";
import WhyChoice from "../OpenDematAccount/WhyChoice";
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import {
    useLocation,
  } from 'react-router-dom';
  import meta_tags from "../../Data/MetaTags";
import MinorFaq from "./MinorFaq";
function MinorDemateAccount() {
	const [rendercount, setRenderCount] = useState(() => false);
    const location = useLocation();
    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
          let parser = new DOMParser();
          let doc = parser.parseFromString(meta_tags[location.pathname.replace('/', "")].faqscript, 'text/html');
          document.body.appendChild(doc.getElementsByTagName('script')[0]||[]? doc.getElementsByTagName('script')[0]||[]: '' );
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
           
            <MinorDematAccountBanner />
            <WhyOpenFreeMinorAccount />
            <WhyChoice />
            <LowBrokerageMinorDematAccount />
            <MinorDematOpeningProcess />
            <MinorFaq />
            <section className="readmoresection">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="secttitle">Minor Demat Account </h2>
                        </div>
                        <div className="col-md-12">
                            <div className="para">
                                <input type="checkbox" className="read-more-state" id="post-1" />
                                <span className="read-more-wrap ">Can parents instill the value of investing and economic planning in their children at an early age? Surely they can do so by opening free Demat Account for their Minor children.<br/>
                                    <span className="read-more-target"> 
                                    A  <Link to="/demat-account"><strong>Demat account</strong></Link> for Minors is opened by a Parent or a Legal Guardian in the minor's name (below the age of 18, in India). One can open a Minor Demat account and invest in mutual funds, stocks, and other investment opportunities through this account. In fact, with Choice India, many Parents are rapidly opting for easy Minor Demat Account opening online. <br /><br />
          The <Link to="/blog/demat-account-for-minors/"><strong>Demat Account for minors</strong></Link> can be operated by a Guardian till the Minor attains a legal age of an adult (Above 18). The Guardian has to be the Father. In case of the absence of the Father, the Mother can be a Guardian. In case of the absence of both the Parents, the Guardian can be appointed by the Court of Law.<br /> <br />


            <h2 className="font-bold">How To Open A Minor Demat Account? </h2>
            Many parents are often confused and have little or less knowledge about how to open a Minor Demat Account. But opening a Demat Minor Account is actually easy if you know the step-by-step process and the necessary prerequisites. The Minor Demat Account can be opened even at a low age, there is no minimum age criteria. Below is the step-by-step process of opening a Minor Demat Account:<br /><br />


            <li> To open a Minor Demat Account with us, you can sign up online from the website. </li>
            <li> You can also download our Choice FinX App ( Android &amp; iOS) and Sign Up on it.</li>
            <li> It is advisable to download the app since signing up will require the latest photograph of yourself, which can be easily taken from your phone camera.</li>
           <li>If your documents are ready, it will take you about 5 minutes to Sign Up.</li>
           <li>Once you upload all the necessary documents and they are verified, you are ready with your new Minor Demat Account.</li><br />

        <h2 className="font-bold">What Are The Minor Demat Account Opening Charges? </h2><br />
        <strong>Minor Demat Account Opening Fee</strong><br /><br/>
        The fee structure varies from NSE/BSE broker to broker. Nowadays many brokers offer minimum to no charges as a Minor Demat Account Opening Fee. This means if you chose the right broker, you can <Link to="/open-free-demat-account"><strong>open a Demat Account</strong> </Link> for Minor, absolutely for free.
        <br />
        If you open a Minor Demat Account with <Link to="/"><strong>Choice India</strong></Link>, we charge no money and open your Demat Account for free of cost. <br /><br />
        <strong>Annual Maintenance Fee </strong><br /><br/>
        The Annual Maintenance fee is charged for the general maintenance of the Minor Demat Account and save it from the lapse. <br />
        At Choice India, we give our customers a special discount of a completely free AMC fee account subscription for One Year. <br /><br />
       
        <h2 className="font-bold">Benefits of Opening Minor Demat Account  </h2><br />
        Opening a Minor Demat Account for your child can be the best investment and the most influential financial decision in your child’s life. The benefits of having a Minor Demat Account include: <br /><br />

           <li> <strong>Long-Term Multibagger Gains</strong> By investing for a child when he is younger, his future becomes secure as even the smallest investments in the long-term may lead to hefty investment gains over a period of 15-20 years.</li><br />
        
           <li> <strong>Massive Dividend Income</strong> By the time the child becomes mature, he/she starts gaining a stipulated amount yearly in the form of massive dividends. This would help your child achieve more financial independence.</li><br />
          
           
          <li> <strong>Better Alternative to Many other Financial plans for Children</strong>The returns in the stock market are by far the best as compared to any other form of investment. The Minor Demat Account is the best way to secure a bright and shining future for your child.</li><br />
       
          <li> <strong> Better Financial Planning </strong> A Minor Demat Account allows Parents/Guardians to plan their children`s finances better. Hence, you can use this account to save for your children's Higher Education, Wedding of a Girl Child, and for various other purposes.</li><br />

          <li><strong>Digitally Secure Future</strong>A Minor Demat account is an account that provides the facility to hold shares in an electronic form. Thus the amount invested into it is digitally safe and secure. This is the most modern and secure way to ensure the safety of the funds you want to reserve for your children.</li><br />

          <h2 className="font-bold">Documents Required to Open Minor Demat Account </h2>
          The process of a Minor Demat Account opening online is simple and convenient. The required documents include <br />
          <li>Identification Proof</li>
          <li>Proof of Address</li>
          <li>A Photocopy for Age Verification</li>
          <li>A Photo of the Relevant Depository Member(s)</li>
          Make sure you provide detailed information on documents required for your Minor Demat Account. <br /><br />
          <strong>Checklist of Necessary Documents:</strong><br />
          <li>PAN Card of the Guardian</li>
          <li>PAN Card of the Minor</li>
          <li>Proof of Birth of the Minor (Birth Certificate, School Leaving Certificate) </li>
          <li>Proof of Identity of the Minor (Aadhar Card)</li>
          <li>Proof of Address of the Minor (Electricity Bill, Ration Card) </li><br />
          The Guardian needs to submit the requisite form properly filled with the KYC details for both the Guardian and the Minor. <br /><br />
          After submitting the required documents, the broker will verify the Minor's details. If authentication is successful, then the Minor Demat Account opening becomes successful. <br /><br />
          Once the details are verified the DP will generate the client ID and the Account Number. <br /><br />

          <h2 className="font-bold">Procedure To Open A Minor Demat Account </h2>
          The procedure to open a Minor Demat Account is as given below: <br /><br />
          <strong>Prerequisites</strong><br />
          Only the natural Guardian (Parents) or Court-Appointed Guardians can open a Minor Demat Account name of their minor child. <br /><br />
          <strong>Form</strong><br />
          <li>The Guardian has to fill out the Standard Demat Account Opening forms</li>
          <li>For Minor Demat Account Verification, two KYC forms need to be filled <br />    
          1. One for the guardian <br />
         2. The other KYC form for the Minor (to be filled and signed by the guardian)</li><br />
         <strong>Documents and Particulars</strong><br />
         <li>The Guardian has to upload the required documents via his account.</li>
         <li>The Guardian is required to duly fulfill all KYC norms.</li>
         <li>As proof of Birth Date, providing the correct date of birth of the minor is mandatory.</li>
         <li>The Guardian and the Minor have to submit their PAN cards.</li><br />
         <strong>Account Operation</strong><br />
         <li>A Minor's Account can only be maintained by a guardian until the Minor becomes an Adult.</li>
         <li>Trading is not allowed via a Minor Demat Account.</li>

          <h3 className="font-bold">Expiry</h3>
          The Minor Demat Account expires when the Minor turns 18 years old. Then you need to open a new Demat account for the Minor. Old assets can be transferred to a new account. The same account can still be used, but the minor must enter into a new contract with the depositor.


                                    </span></span> <label htmlFor="post-1" className="read-more-trigger moreless-button"></label>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
}

export default MinorDemateAccount;
