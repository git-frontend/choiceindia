
import React from "react";
import  Rating  from '../../assets/images/partner/rating.svg';
import  Cogwheel  from '../../assets/images/partner/cogwheel.svg';
import  Network  from '../../assets/images/partner/network.svg';
import  Billfold  from '../../assets/images/partner/billfold.svg';
import  Team  from '../../assets/images/partner/team.svg';
import  Smartphone  from '../../assets/images/partner/smartphone.svg';






function WhyChoiceConnect() {



  return (
    <div>

        

        <section className="choice-connect-work">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                      <div className="heading-sec">
                        <h3 className="title-first">Why Choice Connect ?</h3>
                      </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                      <div className="connect-work-list">
                        <div className="work-list-itm-cont">
                            <h3>Lineage</h3>
                            <p>Backed by the Choice Group - a conglomerate with 25+ years of financial experience.</p>
                        </div>
                        <div className="work-list-itm">
                          <div className="bx-item-cont">
                            <img src={Rating} alt="" />
                            <h4>Lineage</h4>
                           
                          </div>
                        </div>
                        <div className="work-list-itm">
                            <div className="bx-item-cont">
                              <img src={Cogwheel} alt="" />
                              <h4>Multifaceted</h4>
                             
                          </div>
                        </div>
                        <div className="work-list-itm">
                          <div className="bx-item-cont">
                                <img src={Network} alt="" />
                                <h4>Network</h4>
                               
                            </div>
                        </div>
                        <div className="work-list-itm">
                          <div className="bx-item-cont">
                                <img src={Billfold} alt="" />
                                <h4>Security</h4>
                               
                            </div>
                        </div>
                        <div className="work-list-itm">
                          <div className="bx-item-cont">
                                <img src={Team} alt="" />
                                <h4>Infrastructure</h4>
                               
                            </div>
                        </div>
                        <div className="work-list-itm">
                          <div className="bx-item-cont">
                                <img src={Smartphone} alt="" />
                                <h4>Flexibility</h4>
                               
                            </div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="row"><div className="col-md-12 mt-5 d-flex justify-content-center"><a href="/" className="btn-bg">Read More</a></div></div>
            </div>
        </section>

       
    
    </div>
  );
}

export default  WhyChoiceConnect;
