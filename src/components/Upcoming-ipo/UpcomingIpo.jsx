import React from 'react';
import Banner from '../Upcoming-ipo/Banner';
import './upcoming-ipo.scss';
import IpoLists from './IpoLists';
import AboutIpo from './AboutIpo';
import IpoBenifits from './IpoBenifits';
import WhoCanInvest from './WhoCanInvest';
import HowToApplyIpo from './HowToApplyIpo';
import WhyChooseChoice from './WhyChooseChoice';
import IpoBlog from './IpoBlog';
import Faq from './Faq';
import PreApplyIpo from './PreApplyIpo';



function UpcomingIpo() {

  return (
    <div className='upcoming-ipo'>
      <Banner/>
      <IpoLists/>
      <PreApplyIpo/>
      <AboutIpo/>
      <IpoBenifits/>
      <WhoCanInvest/>
      <HowToApplyIpo/>
      <WhyChooseChoice/>
      <IpoBlog/>
      <Faq/>
    </div>
  )
}

export default UpcomingIpo