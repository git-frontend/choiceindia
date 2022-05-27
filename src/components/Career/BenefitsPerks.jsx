import  CareerImage5 from '../../assets/images/career/money.svg';
import  CareerImage6 from '../../assets/images/career/pie-chart-2.svg';
import  CareerImage7 from '../../assets/images/career/bus.svg';
import  CareerImage8 from '../../assets/images/career/shield.svg';
import  CareerImage9 from '../../assets/images/career/license.svg';
import  CareerImage10 from '../../assets/images/career/wifi.svg';
import  CareerImage11 from '../../assets/images/career/headset.svg';
import  CareerImage12 from '../../assets/images/career/yoga-mat.svg';
import React from "react";


function BenefitsPerks() {

    

  return (
    <div className='career-main'>
      
     
    

    <section className='benefits-perks'>
      <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
              <div className="heading-sec">
                 <h3 className="title-first">Benefits &amp; Perks</h3>
              </div>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className='col-xl-7 col-md-10'>
                <div className='perks-list'>
                    <div className='perks-list-itm'>
                        <img src={CareerImage5} alt='Loading'/>
                        <h4>Advance Stipend </h4>
                    </div>
                    <div className='perks-list-itm'>
                        <img src={CareerImage6} alt='Loading'/>  
                        <h4>Profit Sharing </h4>
                    </div>
                    <div className='perks-list-itm'>
                        <img src={CareerImage7} alt='Loading' />
                        <h4>Team Outings  </h4>
                    </div>
                    <div className='perks-list-itm'>
                        <img src={CareerImage8} alt='Loading' />
                        <h4>Health Insurance </h4>
                    </div>
                    <div className='perks-list-itm'>
                        <img src={CareerImage9} alt='Loading' />
                        <h4>Skill Upgradation </h4>
                    </div>
                    <div className='perks-list-itm'>
                        <img src={CareerImage10} alt='Loading' />
                        <h4>Free Internet  </h4>
                    </div>
                    <div className='perks-list-itm'>
                        <img src={CareerImage11} alt='Loading' />
                        <h4>1:1 sessions with Ankur</h4>
                    </div>
                    <div className='perks-list-itm'>
                        <img src={CareerImage12} alt='Loading' />
                        <h4>Free Therapy sessions </h4>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
      
    
    </div>
  );
}

export default BenefitsPerks;
