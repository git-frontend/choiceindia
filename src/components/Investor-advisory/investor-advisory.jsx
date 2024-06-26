import '../Investor-advisory/investor-advisory.scss';
import { Link } from 'react-router-dom';
import meta_tags from '../../Data/MetaTags';
import { useState, useEffect } from 'react';

function InvestorAdvidory() {

    const [rendercount, setRenderCount] = useState(() => false);

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
                <div className='seo-privacy-policy-div'>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className='title-first'>Advisory for investors</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="privacy-policy-content-div">
                    <div className="container">
                        <div className="privacy-policy-content">
                            <h2>
                                <strong>ATTENTION INVESTORS</strong>
                            </h2>
                            <br />

                            <p>
                                Beware of fixed/guaranteed/regular returns/ capital protection schemes. Brokers or their Authorised persons or any of their associates are not authorized to offer fixed/guaranteed/regular returns/ protection on your investment or authorized to enter into any loan agreement with you to pay interest on the funds offered by you. Please note that in case of default of a member claim for funds or securities given to the broker under any arrangement/ agreement of indicative return will not be accepted relevant Committee of the Exchange as per the approved norms. <br />
                            </p>

                            <p>
                                Do not keep funds idle with the Stock Broker. Please note that your stock broker has to return the credit balance lying with them, within three working days in case you have not done any transaction with in last 30 calendar days. Please note that in case of default of a Member, claim for funds and securities, without any transaction on the exchange will not be accepted by the relevant Committee Exchange as per the approved norms.<br />
                            </p>
                            <p>
                                Check the frequency of accounts settlement opted for. If you have opted for running account, ensure that your broker settles your account and, in any case, not later than once in 90 days (or 30 days if you have opted for 30 days settlement). In case of declaration of trading member as defaulter, the claims of clients against such defaulter member would be subject to norms for eligibility of claims for compensation from IPF to the clients of the defaulter member. These norms are available on Exchange website at following link:<br />
                            </p>

                            <a  href='https://www.bseindia.com/static/investors/Claim_against_Defaulter.aspx' target="_blank">BSC india static investors Claim against Defaulter</a><br />
                            <a href='https://www.nseindia.com/invest/about-defaulter-section' target="_blank">NSE india invest about defaulter section</a><br />

                            <p>
                                <br/>
                                Brokers are not permitted to accept transfer of securities as margin. Securities offered as margin/collateral MUST remain in the account of the client and can be pledged to the broker only by way of ‘margin pledge’, created in the Depository system. Clients are not permitted to place any securities with the broker or associate of the broker or authorized person of the broker for any reason. Broker can take securities belonging to clients only for settlement of securities sold by the client.<br />
                            </p>
                            <p>
                                Always keep your contact details viz. Mobile number/Email ID updated with the stock broker. Email and mobile number is mandatory and you must provide the same to your broker for updation in Exchange records. You must immediately take up the matter with Stock Broker/Exchange if you are not receiving the messages from Exchange/Depositories regularly.<br />
                            </p>
                            <p>

                                Don't ignore any emails/SMSs received from the Exchange for trades done by you. Verify the same with the Contract notes/Statement of accounts received from your broker and report discrepancy, if any, to your broker in writing immediately and if the Stock Broker does not respond, please take this up with the Exchange/Depositories forthwith.<br />
                            </p>
                            <p>
                                Check messages sent by Exchanges on a weekly basis regarding funds and securities balances reported by the trading member, compare it with the weekly statement of account sent by broker and immediately raise a concern to the exchange if you notice a discrepancy. Please do not transfer funds, for the purpose of trading to anyone, including an Authorised person or an associate of the broker, other than a SEBI Registered Stock Broker.<br />
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default InvestorAdvidory;