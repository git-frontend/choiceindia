
import React, {useState } from "react";
import Rating from '../../assets/images/partner/rating.svg';
import Cogwheel from '../../assets/images/partner/cogwheel.svg';
import Network from '../../assets/images/partner/network.svg';
import Billfold from '../../assets/images/partner/billfold.svg';
import Team from '../../assets/images/partner/team.svg';
import Smartphone from '../../assets/images/partner/smartphone.svg';
import partnerConnect from '../../Data/Partner';





function WhyChoiceConnect() {

  const [data, setData] = useState(() => 0);
  const [defaultOption, setdefaultOption] = useState(() => 'work-list-itm-active');
  // let txt = 'work-list-itm-active';


  return (
    <div>



      <section className="choice-connect-work">
        <div className="container">

          <div className="row">
            <div className="col-md-12">
              <div className="connect-work-list">
                <div className="work-list-itm-cont">
                  <h2 className="title-first">Why Choice Connect ?</h2>
                  <div className="itm-cont-box">
                    <h3>{partnerConnect[data].title}</h3>
                    <p>{partnerConnect[data].content}</p>
                  </div>
                </div>
                {/* work-list-itm-active */}
                <div className={'work-list-itm ' + defaultOption}>
                  <div className="bx-item-cont" onMouseOver={() => { setData(() => 0) }}>
                                      <img src={Rating} alt="" width={"72"} height={"71"} />
                    <h4>Lineage</h4>

                  </div>
                </div>
                <div className="work-list-itm">
                  <div className="bx-item-cont" onMouseOver={() => {
                    setData(() => 1);
                    setdefaultOption(() => '');
                  }}>
                                      <img src={Cogwheel} alt="" width={"70"} height={"71"}/>
                    <h4>Multifaceted</h4>

                  </div>
                </div>
                <div className="work-list-itm">
                  <div className="bx-item-cont" onMouseOver={() => {
                    setData(() => 2);
                    setdefaultOption(() => '');
                  }}>
                                      <img src={Network} alt="" width={"72"} height={"71"} />
                    <h4>Network</h4>

                  </div>
                </div>
                <div className="work-list-itm">
                  <div className="bx-item-cont" onMouseOver={() => {
                    setData(() => 3);
                    setdefaultOption(() => '');
                  }}>
                                      <img src={Billfold} alt="" width={"72"} height={"71"}/>
                    <h4>Security</h4>

                  </div>
                </div>
                <div className="work-list-itm">
                  <div className="bx-item-cont" onMouseOver={() => {
                    setData(() => 4);
                    setdefaultOption(() => '');
                  }}>
                                      <img src={Team} alt="" width={"70"} height={"71"}/>
                    <h4>Infrastructure</h4>

                  </div>
                </div>
                <div className="work-list-itm">
                  <div className="bx-item-cont" onMouseOver={() => {
                    setData(() => 5);
                    setdefaultOption(() => '');
                  }}>
                                      <img src={Smartphone} alt="" width={"70"} height={"71"}/>
                    <h4>Flexibility</h4>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>



    </div>
  );
}

export default WhyChoiceConnect;
