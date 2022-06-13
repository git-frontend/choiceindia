
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
                      <div className="heading-sec text-center">
                        <h3 className="title-first">Why Choice Connect ?</h3>
                      </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                      <div className="connect-work-list">
                        <div className="work-list-itm">
                            <img src={Rating} alt="" />
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry</p>
                        </div>
                        <div className="work-list-itm">
                            <img src={Cogwheel} alt="" />
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry</p>
                        </div>
                        <div className="work-list-itm">
                            <img src={Network} alt="" />
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry</p>
                        </div>
                        <div className="work-list-itm">
                            <img src={Billfold} alt="" />
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry</p>
                        </div>
                        <div className="work-list-itm">
                            <img src={Team} alt="" />
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry</p>
                        </div>
                        <div className="work-list-itm">
                            <img src={Smartphone} alt="" />
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. printing and typesetting industry</p>
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
