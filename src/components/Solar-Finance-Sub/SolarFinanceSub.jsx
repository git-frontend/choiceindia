
import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import NBFCMenu from '../Common-features/NBFCMenu';
import "../Invoice-Financing/nbfc-common.scss";
import "../Solar-Finance-Sub/solar-fin-sub.scss";
import { Link, useNavigate, NavLink } from "react-router-dom";
import utils from "../../Services/utils";
function SolarFinanceSub() {
  useEffect(() => {
    utils.scrollToId('supply-chain')
}, []);
  return (
    <div>
      <section className="solar-finance-sub" id='supply-chain'>
        <div className="container">
          <div className="row">
              <div className="col-md-12">
              <div className="solar-finance-sub-menu">
                <Link to="/business-loan">
                      <FontAwesomeIcon icon={faArrowLeft} />
                      <span className='back'>Back</span>
                 </Link>
                  <NBFCMenu />
                </div>
              </div>
          </div>
          <div className="row"> 
            <div className="col-md-12">
                <div class="heading-sec text-center">
                  <h2 class="title-first">Solar Finance</h2>
                </div>
                <div className="solar-fin-para">
                  <p>Now is the time for action, <br/> Now is the time for a change! <br/> So, Get Set Solar! <br/> As you all know the production of renewable electricity from biomass has the potential to generate a wide range of emissions related to global warming. In this way, we can not only contribute to the greater good, but we can also make a step towards a changing world. Solar energy has become the main source of energy for more and more families these days. Let’s discuss how it works Solar systems produce energy from the sun, so they help you use renewable energy as opposed to fossil fuels. Once installed, the solar panel system will produce clean power for years to come at no additional cost, with the exception of maintenance and repairs required from time to time. <br/> We agree that with greater good comes a great price. Dont worry we have got you covered. You might have heard about Solar Loans. A solar loan is a financing option that allows you to purchase your solar power system and pay for the installation costs upfront and then repay the loan over time. Solar loans are designed to make going solar more affordable for Individuals, SSIs &amp; MSMEs. </p>
                  <ul>
                    <li>This collateral-free solar loan comes with a one-time investment for lifetime returns.</li>
                    <li>You can enjoy its various government perks in the form of various subsidies, other tax benefits, and Lower Utility Bills.</li>
                    <li>You can easily get maximized funding for your environmental investment.</li>
                    <li>Solar Panels are manufactured with high-quality materials and have to comply with strict health and safety standards, making them safer than other sources of electricity.</li>
                    <li>Keeping up with our green responsibility towards our planet, we make it a point to keep your loan process paperless and minimal.</li>
                    <li>We help offer the best quality material &amp; lowest pricing on Quotation verification by CFPL engineers.</li>
                    <li>Get convenient and fastening installation and subsidy approval with the expertise of impaneled EPCs</li>
                    <li>You can now obtain assistance and services to far-flung places with our wide branch reach.</li>
                    <li>Get hands-on experience with self/ Assistance Onboarding through our app.</li>
                    <li>You can keep your mind at ease as we help offer the availability of long repayment tenures.</li>
                    <li>With this hassle-free loan comes a hassle-free process. Here, we will help you to connect with the best EPCs for faster installation, subsidy approval, DISCOM-related approvals, and maintenance.</li>
                    <li>Some of the Advantages of having an Enabler:-</li>
                    <li>Arranging multiple purchase options with the lowest possible cost with the best quality material.</li>
                    <li>Arranging Solar Panels, Meters, Wires, and Inverters for faster installation.</li>
                    <li>Arranging/Handling various approvals with DISCOM.</li>
                    <li>Helping in getting applicable subsidy.</li>
                    <li>Providing Maintenance &amp; Repair Services at a minimal cost.</li>
                </ul>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SolarFinanceSub;
