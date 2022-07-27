import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrolltoTop from './components/Common-features/ScrolltoTop';
import ErrorPage from './components/Common-features/ErrorPage';
import Header from './components/Contact/ContactHeader';
import Footer from './components/Common-features/Footer';
import OpentoTop from './components/Common-features/OpentoTop';
import '../src/assets/css/common.scss';
import Home from './components/home-page/Home';
import CampaignHeader from './components/Contact/CampaignHeader';
import CampaignFooter from './components/Common-features/CampaignFooter';


const LazyHome = React.lazy(() => import('./components/home-page/Home'));
// import Home from './components/Home';

const LazyAbout = React.lazy(() => import('./components/About-us/AboutUs'));
// import AboutUs from './components/About-us/AboutUs';

const LazyCareer = React.lazy(() => import('./components/Career/Career'));
// import Career from './components/Career/Career';

const LazyApp = React.lazy(() => import('./components/App/App'));
// import App from './components/App/App';

const LazyTradingApp = React.lazy(() => import('./components/OnlineTradingApp/OnlineTradingApp'));
// import App from './components/App/App';

const LazyFables = React.lazy(() => import('./components/Fables/Fables'));
// import Fables from './components/Fables/Fables';

const LazyContact = React.lazy(() => import('./components/Contact/Contact'));
// import Contact from './components/Contact/Contact';
const LazyServices = React.lazy(() => import('./components/Services-Page/Services'));
const LazyFaq = React.lazy(() => import('./components/Faq/Faq'));
const LazyFableDetail = React.lazy(() => import('./components/Fables-details/FablesDetails'));
const Lazypartner = React.lazy(() => import('./components/Partner-Page/Partner'));
const Lazypricing = React.lazy(() => import('./components/Pricing/Pricing'));
const Lazymarketing = React.lazy(() => import('./components/SumeetBagadia/SumeetBagadia'));
const Lazyrefer = React.lazy(() => import('./components/Refer-and-earn/ReferEarn'));
const LazyInvestorInfo = React.lazy(() => import('./components/Investors-info/InvestorsInfo'));
const LazyCodeConduct = React.lazy(() => import('./components/CodeConduct/CodeConduct'));
const Lazysubbroker = React.lazy(() => import('./components/SubBroker/SubBroker'));
const Lazyopendemat = React.lazy(() => import('./components/OpenDematAccount/DematPage'));
const Lazybasket = React.lazy(() => import('./components/Basket/Basket'));
const Lazyresearch = React.lazy(() => import('./components/Research/Research'));

const Lazyopentradingaccount = React.lazy(() => import('./components/OpenTradingAccount/OpenTradingAccount'));
const Lazyopenbrokerageaccount = React.lazy(() => import('./components/OpenBrokerageAccount/OpenBrokerageAccount'));
const Lazynridemateaccount = React.lazy(() => import('./components/NRIDemateAccount/NRIDemateAccount'));
const Lazycorporatedemateaccount = React.lazy(() => import('./components/CorporateDemateAccount/CorporateDemateAccount'));
const Lazyminordemateaccount = React.lazy(() => import('./components/MinorDemateAccount/MinorDemateAccount'));
const Lazyopentradingaccounthindi = React.lazy(() => import('./components/OpenTradingAccountHindi/OpenTradingAccountHindi'));
const Lazyopentradingaccountmarathi = React.lazy(() => import('./components/OpenTradingAccountMarathi/OpenTradingAccountMarathi'));
const Lazyfreeamc = React.lazy(() => import('./components/FreeAmcAccount/FreeAmcAccount'));
const Lazyhinditrade = React.lazy(() => import('./components/TradingAccountHindi/TradingAccountHindi'));
const Lazyauthorizeperson = React.lazy(() => import('./components/AuthorizedPerson/AuthorizePerson'));
const Lazyremisier = React.lazy(() => import('./components/Remisier/Remisier'));
const Lazyonlinetradingapp = React.lazy(() => import('./components/ShareMarketApp/ShareMarketApp'));
const Lazysharemarketapp = React.lazy(() => import('./components/OnlineTradingApp/OnlineTradingApp'));
const Lazystratezy = React.lazy(() => import('./components/Strategy/Strategy'));
const Lazyresearchdetailed = React.lazy(() => import('./components/Research-Detailed/ResearchDetailed'));

const LazyOpenDemat = React.lazy(()=> import('./components/OpenDemat/Opendemat'));
const LazyAddLead = React.lazy(() => import('./components/Add-lead/AddLead'));
const LazyPrivacyPolicy = React.lazy(() => import('./components/Privacy-policy/PrivacyPolicy'));
const Lazysubbrokerhindi = React.lazy(() => import('./components/SubBroker/SubBrokerHindi'));
const Lazysubbrokercampaign = React.lazy(() => import('./components/SubBroker/SubBrokerCampaign'));
const LazyBrokerageCharges = React.lazy(() => import('./components/Brokerage/BrokerageCharges'));


function Routing() {
    


    return (
        <>
            <Router>
                <ScrolltoTop />
                <OpentoTop />
                {window.location.pathname.indexOf("/campaign/sub-broker") === -1 ? <Header /> : <CampaignHeader />}
                {/* <Header /> */}
                <div className='App-Body'>
                    <Routes>
                        <Route exact path='/' element={
                          <Home></Home>} />
                        {/* <Route exact path='/' element={< Home />} /> */}

                        <Route exact path='/about-us' element={
                            <React.Suspense>
                                < LazyAbout />
                            </React.Suspense>
                        } />

                        <Route exact path='/career' element={
                            <React.Suspense>
                                < LazyCareer />
                            </React.Suspense>} />

                        <Route exact path='/investment-app' element={
                            <React.Suspense>
                                < LazyApp />
                            </React.Suspense>
                        } />

                        <Route exact path='/online-trading-app' element={
                            <React.Suspense>
                                < LazyTradingApp />
                            </React.Suspense>
                        } />

                        <Route exact path='/blog' element={
                            <React.Suspense>
                                < LazyFables />
                            </React.Suspense>
                        } />

                        <Route exact path='/contact-us' element={
                            <React.Suspense>
                                < LazyContact />
                            </React.Suspense>
                        } />

                        <Route exact path='/services' element={
                            <React.Suspense>
                                < LazyServices />
                            </React.Suspense>
                        } />


                        <Route exact path='/faq' element={
                            <React.Suspense>
                                < LazyFaq />
                            </React.Suspense>
                        } />

                        <Route exact path='/blog/:id' element={
                            <React.Suspense>
                                < LazyFableDetail />
                            </React.Suspense>
                        } />

                        <Route exact path='/partner' element={
                            <React.Suspense>
                                < Lazypartner />
                            </React.Suspense>
                        } />

                        <Route exact path='/investors' element={
                            <React.Suspense>
                              {  console.log("called LazyInvestorInfo" )}
                                < LazyInvestorInfo />
                            </React.Suspense>
                        } />
                        <Route exact path='/code-of-conduct' element={
                            <React.Suspense>
                                < LazyCodeConduct />
                            </React.Suspense>
                        } />

                        <Route exact path='/brokerage-charges' element={
                            <React.Suspense>
                                < Lazypricing />
                            </React.Suspense>
                        } />
                        <Route exact path='/sumeet-bagadia' element={
                            <React.Suspense>
                                < Lazymarketing />
                            </React.Suspense>
                        } />
                        <Route exact path='/sub-broker-franchise' element={
                            <React.Suspense>
                                < Lazysubbroker />
                            </React.Suspense>
                        } />
                        <Route exact path='/refer-and-earn' element={
                            <React.Suspense>
                                < Lazyrefer />
                            </React.Suspense>
                        } />
                        <Route exact path='/open-free-demat-account' element={
                            <React.Suspense>
                                < Lazyopendemat />
                            </React.Suspense>
                        } />
                         <Route exact path='/hindi/trading-account' element={
                            <React.Suspense>
                                < Lazyhinditrade />
                            </React.Suspense>
                        } />
                        <Route exact path='/campaign/free-amc-demat-account' element={
                            <React.Suspense>
                                < Lazyfreeamc />
                            </React.Suspense>
                        } />
                        <Route exact path='/open-trading-account' element={
                            <React.Suspense>
                                < Lazyopentradingaccount />
                            </React.Suspense>
                        } />
                        <Route exact path='/open-brokerage-account' element={
                            <React.Suspense>
                                < Lazyopenbrokerageaccount />
                            </React.Suspense>
                        } />
                        <Route exact path='/nri-demat-account' element={
                            <React.Suspense>
                                < Lazynridemateaccount />
                            </React.Suspense>
                        } />
                        <Route exact path='/corporate-demat-account' element={
                            <React.Suspense>
                                < Lazycorporatedemateaccount />
                            </React.Suspense>
                        } />
                        <Route exact path='/minor-demat-account' element={
                            <React.Suspense>
                                < Lazyminordemateaccount />
                            </React.Suspense>
                        } />
                        <Route exact path='/hindi/open-demat-trading-account' element={
                            <React.Suspense>
                                < Lazyopentradingaccounthindi />
                            </React.Suspense>
                        } />
                        <Route exact path='/marathi/open-demat-account' element={
                            <React.Suspense>
                                < Lazyopentradingaccountmarathi />
                            </React.Suspense>
                        } />

                        <Route exact path='/research-listing-new' element={
                            <React.Suspense>
                                < Lazyresearch />
                            </React.Suspense>
                        } />

                        <Route exact path='/authorised-person' element={
                            <React.Suspense>
                                < Lazyauthorizeperson />
                            </React.Suspense>
                        } />

                        <Route exact path='/remisier' element={
                            <React.Suspense>
                                < Lazyremisier />
                            </React.Suspense>
                        } />


                        <Route exact path='/onlinetradingapp' element={
                            <React.Suspense>
                                < Lazyonlinetradingapp />
                            </React.Suspense>
                        } />
                        <Route exact path='/share-market-app' element={
                            <React.Suspense>
                                < Lazysharemarketapp />
                            </React.Suspense>
                        } />

                        <Route exact path='/info/stratezy' element={
                            <React.Suspense>
                                < Lazystratezy />
                            </React.Suspense>
                        } />
                        <Route exact path='/baskets' element={
                            <React.Suspense>
                                < Lazybasket />
                            </React.Suspense>
                        } />

                    <Route exact path='/research-new/:id/:catid' element={
                            <React.Suspense>
                                < Lazyresearchdetailed />
                            </React.Suspense>
                        } />

                        <Route exact path='/campaigns/open-account/' element={
                            <React.Suspense>
                                < LazyOpenDemat />
                            </React.Suspense>
                        } />

                        <Route exact path='/Add-lead' element={
                            <React.Suspense>
                                < LazyAddLead />
                            </React.Suspense>
                        } />
                        <Route exact path='/hindi/sub-broker-franchise' element={
                            <React.Suspense>
                                < Lazysubbrokerhindi />
                            </React.Suspense>
                        } />
                        <Route exact path='/campaign/sub-broker-franchise' element={
                            <React.Suspense>
                                < Lazysubbrokercampaign />
                            </React.Suspense>
                        } />

                        <Route exact path='/privacy-policy' element={
                            <React.Suspense>
                                < LazyPrivacyPolicy />
                            </React.Suspense>
                        } />

                        <Route exact path='/brokerage' element={
                            <React.Suspense>
                                < LazyBrokerageCharges />
                            </React.Suspense>
                        } />

                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
                {window.location.pathname.indexOf("/campaign/sub-broker") === -1 ? <Footer /> : <CampaignFooter />}
            </Router>
        </>
    )
}

export default Routing;
