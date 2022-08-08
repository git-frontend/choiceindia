
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import { FaRupeeSign } from 'react-icons/fa';
import { IoMdSearch } from 'react-icons/io';
import Vector1 from '../../assets/images/online-trading-app/free-demat.svg';
import Vector2 from '../../assets/images/online-trading-app/zero-amc.svg';
import Vector3 from '../../assets/images/online-trading-app/expert-research-advisory.svg';
import Vector4 from '../../assets/images/online-trading-app/dedicated-relationship.svg';
import appstorelight from '../../assets/images/icons/app-store-light.svg';
import LazyLoader from '../Common-features/LazyLoader';

function AppOTMultipleBenefits() {

  return (
    <div className='App-main'>



      <section className='app-cont-sec benefits-app'>
        <div className='container'>
          <div className="row">
            <div className="col-md-12">
              <div className="heading-sec">
                <h2 className="title-secnd text-center"> ट्रेडिंग ऐप विभिन्न फ़ायदे के साथ </h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className="g-4 py-5 benefits-app-des-list">
                <div className="benefits-app-des">
                  <div className="d-block">
                    <img src={Vector1} width={"96"} height={"96"} alt="Free Demat Account" className="img-fluid " />
                  </div>
                  <h4 className="pt-4"><strong>मुफ़्त डीमैट <br/> खाता</strong></h4>

                </div>
                <div className="benefits-app-des">
                  <div className="d-block">
                    <img src={Vector2} width={"96"} height={"96"} alt="Zero AMC for First Year" className="img-fluid " />
                  </div>
                  <h4 className="pt-4"><strong>प्रथम वर्ष के लिए <br/> शून्य AMC</strong></h4>

                </div>
                <div className="benefits-app-des">
                  <div className="d-block">
                    <img src={Vector3} width={"96"} height={"96"} alt="Free Expert Research from TV Panelist" className="img-fluid " />
                  </div>
                  <h4 className="pt-4"><strong>टीवी पैनलिस्ट <br/>एक्स्पर्ट के द्वारा <br/>मुफ्त रिसर्च</strong></h4>

                </div>
                <div className="benefits-app-des">
                  <div className="d-block">
                    <img src={Vector4} width={"96"} height={"96"} alt="Free Expert Research from TV Panelist" className="img-fluid " />
                  </div>
                  <h4 className="pt-4"><strong>डेडिकेटेड <br/>रिलेशनशिप <br/>मैनेजर</strong></h4>

                </div>

              </div>

            </div>
            <div className="wrap-app-links d-flex justify-content-center">
              <a href="/open-free-demat-account" className='get-btn'>


                <span className='btn-bg'>मुफ्त खाता खोलें</span>
              </a>

            </div>
          </div>
        </div>
      </section>







    </div>
  );
}

export default AppOTMultipleBenefits;
