
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
                <h2 className="title-secnd">Trading App with Multiple Benefits</h2>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
              <div className="row g-4 py-5">
                <div className="col-md-3 benefits-app-des">
                  <div className="d-block">
                    <img src={Vector1} width={"96"} height={"96"} alt="Free Demat Account" className="img-fluid " />
                  </div>
                  <h4 className="pt-4"><strong>Free Demat <br/> Account</strong></h4>

                </div>
                <div className="col-md-3 benefits-app-des">
                  <div className="d-block">
                    <img src={Vector2} width={"96"} height={"96"} alt="Zero AMC for First Year" className="img-fluid " />
                  </div>
                  <h4 className="pt-4"><strong>Zero AMC for <br/> First Year</strong></h4>

                </div>
                <div className="col-md-3 benefits-app-des">
                  <div className="d-block">
                    <img src={Vector3} width={"96"} height={"96"} alt="Free Expert Research from TV Panelist" className="img-fluid " />
                  </div>
                  <h4 className="pt-4"><strong>Free Expert <br/>Research from TV <br/>Panelist</strong></h4>

                </div>
                <div className="col-md-3 benefits-app-des">
                  <div className="d-block">
                    <img src={Vector4} width={"96"} height={"96"} alt="Free Expert Research from TV Panelist" className="img-fluid " />
                  </div>
                  <h4 className="pt-4"><strong>Dedicated <br/>Relationship <br/>Manager</strong></h4>

                </div>

              </div>

            </div>
            <div className="wrap-app-links d-flex justify-content-center">
              <a href="/open-free-demat-account" className='get-btn'>


                <span className='btn-bg'>Open Free Account</span>
              </a>

            </div>
          </div>
        </div>
      </section>







    </div>
  );
}

export default AppOTMultipleBenefits;
