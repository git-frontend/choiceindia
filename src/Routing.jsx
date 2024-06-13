import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from 'react-router-dom';
import ScrolltoTop from './components/Common-features/ScrolltoTop';
import ErrorPage from './components/Common-features/ErrorPage';
import Header from './components/Contact/ContactHeader';
import Footer from './components/Common-features/Footer';
import OpentoTop from './components/Common-features/OpentoTop';
import '../src/assets/css/common.scss';
import Home from './components/home-page/Home';
import CampaignHeader from './components/Contact/CampaignHeader';
import Under25Header from './components/Under-25/Under25Header';
import CampaignFooter from './components/Common-features/CampaignFooter';
import AboutUs from './components/About-us/AboutUs';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Remo=()=>{
    const location = useLocation();
  
    return (
      <>
        {(location.pathname.match(/.*\/$/) && location.pathname.length > 1 && location.pathname.indexOf('blog') < 0)  ? (
          <Navigate
        to={{
          pathname: location.pathname.replace(/\/+$/, ""),
          search: location.search,
        }}
      />
        ) : 
    //     <Navigate
    //     to={{
    //       pathname: location.pathname.replace(/\/+$/, "/"),
    //       search: location.search,
    //     }}
    //   />
        null}
      </>
    );
}
const LazyHome = React.lazy(() => import('./components/home-page/Home'));
// import Home from './components/Home';

const LazyAbout = React.lazy(() => import('./components/About-us/AboutUs'));
// import AboutUs from './components/About-us/AboutUs';

const LazyCareer = React.lazy(() => import('./components/Career/Career'));
// import Career from './components/Career/Career';

const LazyApp = React.lazy(() => import('./components/App/App'));
// import App from './components/App/App';

const LazyTradingApp = React.lazy(() => import('./components/OnlineTradingApp/OnlineTradingApp'));

const LazyTradingAppHindi = React.lazy(() => import('./components/OnlineTradingAppHindi/OnlineTradingAppHindi'));
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
const LazyShareHoldingPattern = React.lazy(() => import('./components/Share-Holding/ShareHolding'));
const LazyFinancialInfo = React.lazy(() => import('./components/Financial-Info/FinancialInfo'));
const LazyVotingResults = React.lazy(() => import('./components/Voting-Results/VotingResults'));
const LazyNotices = React.lazy(() => import('./components/Notices/Notices'));
const Lazynewsmedia = React.lazy(() => import('./components/News-Media/News-Media'));
const LazyNewsAnnouncement = React.lazy(() => import('./components/News-Announcement/NewsAnnouncement'));
const LazyFactSheet = React.lazy(() => import('./components/Fact-Sheet/FactSheet'));
const LazyAnnualReport = React.lazy(() => import('./components/Annual-Report/AnnualReport'));
const LazyCorporateGovernance = React.lazy(() => import('./components/Corporate-Governance/corporate-governance'));
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
const Lazysharemarketapp = React.lazy(() => import('./components/ShareMarketApp/ShareMarketApp'));
const Lazyonlinetradingapp = React.lazy(() => import('./components/OnlineTradingApp/OnlineTradingApp'));
const Lazystratezy = React.lazy(() => import('./components/Strategy/Strategy'));
const Lazyresearchdetailed = React.lazy(() => import('./components/Research-Detailed/ResearchDetailed'));

// const LazyOpenDemat = React.lazy(() => import('./components/OpenDemat/Opendemat'));
const LazyOpenDemat = React.lazy(() => import('./components/Demat-new-page/OpenDematNew'));
const LazyETF = React.lazy(() => import('./components/ETF/ETF'));
const LazyAddLead = React.lazy(() => import('./components/Add-lead/AddLead'));
const LazyPrivacyPolicy = React.lazy(() => import('./components/Privacy-policy/PrivacyPolicy'));
const Lazycebplpolicies = React.lazy(() => import('./components/CEBPLPolicies/CEBPL-Policies'));
const LazyInvestorcharter = React.lazy(() => import('./components/InvestorCharter/Investor-Charter'));
const LazyInvestorcomplaints = React.lazy(() => import('./components/Investorcomplaints/Investor-Complaints'));
const Lazyinvestorawareness = React.lazy(() => import('./components/InvestorAwareness/Investor-Awareness'));
const LazyDisclaimer = React.lazy(() => import('./components/Disclaimer/Disclaimer'));
const LazyTermsConditions = React.lazy(() => import('./components/Terms-Conditions/TermsConditions'));
const Lazysubbrokerhindi = React.lazy(() => import('./components/SubBroker/SubBrokerHindi'));
const Lazysubbrokercampaign = React.lazy(() => import('./components/SubBroker/SubBrokerCampaign'));
const LazyBrokerageCharges = React.lazy(() => import('./components/Brokerage/BrokerageCharges'));
// const LazyInsurance = React.lazy(() => import('./components/Insurance/Insurance'));
const LazyFileDownload = React.lazy(() => import('./components/FilesDownload/FileDownload'));
const LazyEquityBroking = React.lazy(() => import('./components/Equity-Broking/EquityBrokingMain'));
const LazyBoardOfDirectors = React.lazy(() => import('./components/BoardOfDirector/BoardOfInvestor'));

const LazyIPOInvestment = React.lazy(() => import('./components/IPO-Investment/IPOInvestment'));

const LazyClientdetail = React.lazy(() => import('./components/ClientDetails/ClientDetail'));

const LazyCommodityTrading = React.lazy(() => import('./components/CommoditytTrading/Commodity'));
const LazyEquityStockTrading = React.lazy(() => import('./components/EquityStockTrading/EquityStockTrading'));
const LazyDerivativeTrading = React.lazy(() => import('./components/DerivativeTrading/DerivativeTrading'));
const LazyCurrencyTrading = React.lazy(() => import('./components/CurrencyTrading/CurrencyTrading'));
const LazyNoDataFound = React.lazy(() => import('./components/Common-features/NoDataFound'));
const LazyMutualFundsInvestment = React.lazy(() => import('./components/Mutual-fund-seo/MutualFundsSEO'));
const LazyCampaignDematAccount = React.lazy(() => import('./components/Open-demat-account-campaign/OpenDematAccount'));
const LazyTranscation = React.lazy(() => import('./components/Related-Party-Transaction/Transaction'));
const LazyInvestorPresentation = React.lazy(() => import('./components/Investor-Presentation/InvestorPresentation'));
const LazyClosureTrading = React.lazy(() => import('./components/ClosureTradingWindow/ClosureTrading'));
const LazyMutualFundDistributor = React.lazy(() => import('./components/Mutual-Fund-Distributor/MutualFundDistributor'));
const LazyPartnerAssests = React.lazy(() => import('./components/Partner-Assests/PartnerAssests'));
const LazyInvestorAdvidory = React.lazy(() => import('./components/Investor-advisory/investor-advisory'));
const LazyIntradayCharges = React.lazy(() => import('./components/Intraday-Charges/IntradayCharges'));
const Lazysubbrokermarathi = React.lazy(() => import('./components/SubBroker/SubBrokerMarathi'));
const Lazysubbrokergujarati = React.lazy(() => import('./components/SubBroker/SubBrokerGujarati'));
const LazyHindiMutualFundDistributor = React.lazy(() => import('./components/Mutual-Fund-Distributor-Hindi/MutualFundDistributorHindi'));
const Lazysubbrokertelagu = React.lazy(() => import('./components/SubBroker/SubBrokerTelagu'));
const LazyBestStocks = React.lazy(() => import('./components/Best-Stocks/BestStock'));
const LazyMutualFundsInvestmentHindi = React.lazy(() => import('./components/Mutual-fund-seo-hindi/MutualFundsSEO'));
const LazyNBFCLanding = React.lazy(() => import('./components/NBFC/NBFCLanding'));
const LazyIndivialLoan = React.lazy(() => import('./components/NBFC-Individual/NBFCIndividualLoan'));
const LazyInvoiceFinancing = React.lazy(() => import('./components/Invoice-Financing/InvoiceFinancing'));
const LazyChannelFinance = React.lazy(() => import('./components/Channel-Finance/ChannelFinance'));
const LazyCommercialVehicleLoan = React.lazy(() => import('./components/Commercial-Vehicle-Loan/CommercialVehicleLoan'));
const LazyTermLoans = React.lazy(() => import('./components/Term-Loans/TermLoans'));
const LazyFlexiCreditBusiness = React.lazy(() => import('./components/Flexi-Credit-Business/FlexiCreditBusiness'));
const LazySolarFinance = React.lazy(() => import('./components/Solar-Finance/SolarFinance'));
const LazyBusinessLoan = React.lazy(() => import('./components/Business-Loan/BusinessLoan'));
const LazyCfplPolicies = React.lazy(() => import('./components/CFPL-Policies/CFPL-Policies'));
const LazySupplyChainFinance = React.lazy(() => import('./components/Supply-Chain-Finance/SupplyChainFin'));
const LazySolarFinanceSub = React.lazy(() => import('./components/Solar-Finance-Sub/SolarFinanceSub'));



const Lazygovernementadvisory = React.lazy(() => import('./components/Goverment-advisory/GovernmentAdvisory'));
const LazyOfferDocument = React.lazy(() => import('./components/offer-Document/offerDocument'));
const LazyNachCancellation = React.lazy(() => import('./components/NACH-Cancellation/nach-cancellation-main'));
const LazyStockBroker =React.lazy(()=> import('./components/Stock-Broker-Mumbai/Stock-Broker'))
const LazySharemarketholidays =React.lazy(()=> import('./components/Share-Market-Holidays/Sharemarketholidays'));
const LazyDigitalLendingBanner =React.lazy(()=> import('./components/Digital-Lending-Partners/DigitalLendingBanner'));
const LazyCfplImpact =React.lazy(()=> import('./components/CFPL-Impact/CFPLImpact'));
const LazyLoanPrivacyPolicy =React.lazy(()=> import('./components/Loan-privacypolicy/LoanPrivacyPolicy'));
const LazyEmiCalculator =React.lazy(()=> import('./components/Emi-Calculator/EmiCalculator'));
const LazyInvestmentBanking =React.lazy(()=> import('./components/Investment-Banking/InvestmentBanking'));
const LazyFreeDematCompaign = React.lazy(() => import('./components/Free-Demat-Campaign/FreeDematCompaign'));
const LazyTradingStrategies = React.lazy(() => import('./components/Trading-Strategies/TradingStrategies'));
const LazyTradingStrategiesHindi = React.lazy(() => import('./components/Trading-Strategies-Hindi/TradingStrategiesHindi'));
const LazyCommodityTradingCampaign = React.lazy(() => import('./components/Commodity-Trading-Campaign/CommodityTradingCampaign'));
const LazyCurrencyTradingCampaign = React.lazy(() => import('./components/Currency-Trading-Campaign/CurrencyTradingCampaign'));
const LazyTechnicalAnalysis = React.lazy(() => import('./components/Technical-Analysis-Campaign/TechnicalAnalysis'));


const LazyFuturesOptionsTrading =React.lazy(()=> import('./components/Futures-Options-Trading/futuresOptionsTradingBanner'))
// const LazyInvestmentBanking =React.lazy(()=> import('./components/Investment-Banking/InvestmentBanking'));
const LazyAfpage = React.lazy(() => import('./components/Assistedflow/AssistedFlow'));
const LazyUpcomingAGM =React.lazy(()=> import('./components/Upcoming-AGM/UpcomingAGM'));
const LazyIPOLanding =React.lazy(()=> import('./components/Ipo-landing/IPOLanding'));
const LazyBrokerageCalculator =React.lazy(()=> import('./components/Brokerage-Calculator/BrokerageCalculator'))
const LazyMarginCalculator =React.lazy(()=> import('./components/Margin-Calculator/MarginCalculator'))
const LazySIPCalculator =React.lazy(()=> import('./components/SIP-Calculator/SIPCalculator'))
const LazyOISpurts =React.lazy(()=> import('./components/OI-Spurts/OISpurts'))
const LazyBlogCms =React.lazy(()=> import('./components/Blog-cms/BlogCms'));
const LazyMutualFundCalculator =React.lazy(()=> import('./components/Mutual-Fund-Calculator/MutualFundCalculator'));
// const LazyOptionChain =React.lazy(()=> import('./components/Option-Chain/OptionChain'));
// const LazyCompanyOptionChain =React.lazy(()=> import('./components/Company-Option-Chain/CompanyOptionChain'));
// const LazyNSEOptionChain =React.lazy(()=> import('./components/NSE-Option-Chain/NSEOptionChain'));
// const LazyMCXOptionChain =React.lazy(()=> import('./components/MCX-Option-Chain/MCXOptionChain'));
// const LazyCurrencyOptionChain =React.lazy(()=> import('./components/Currency-Option-Chain/CurrencyOptionChain'));
const Lazytrackrecords =React.lazy(()=> import('./components/Track-Records/trackRecords'))
const LazyFnoTrading =React.lazy(()=> import('./components/Fno-Trading/FnoTradings'))
const LazyIntradayTrading =React.lazy(()=> import('./components/Intraday-Trading/IntradayTradings'))
const LazyMFApp = React.lazy(() => import('./components/MF-App/MFApp'));
const LazyTopFundsAMC =React.lazy(()=> import('./components/Top-Funds-AMC/TopFundsAMC'));
const LazyTopFundsIndia =React.lazy(()=> import('./components/Top-Funds-India/TopFundsIndia'));
const LazyMFDetails =React.lazy(()=> import('./components/Mf-Details/MFDetails'));
const LazyAMCDetails =React.lazy(()=> import('./components/AMC-Details/AMCDetails'));
const LazyELSSDetails =React.lazy(()=> import('./components/ELSS-MF-Details/ELSSDetails'));
const LazyCorporateDematAc =React.lazy(()=> import('./components/Corporate-Demat-Account/CorporateDematAc'));
const LazyLeadForm =React.lazy(()=> import('./components/Lead-Form/LeadForm'));
const LazyBugBountyProgram =React.lazy(()=> import('./components/Bug-bounty-program/BugBountyProgram'));
const LazyUnder25 =React.lazy(()=> import('./components/Under-25/Under25'));
const LazyBrokerageChargesNew = React.lazy(() => import('./components/Brokerage-New/BrokerageChargesNew'));
const LazyInvestorCharterGrievances = React.lazy(() => import('./components/Investor-Charter-Grievances/InvestorCharterGrievances'));
function Routing() {

    

    return (
        <>
            <Router>
                <Remo></Remo>
                <ScrolltoTop />
                <OpentoTop />
                {(window.location.pathname.indexOf("/campaign/sub-broker") === -1 && window.location.pathname.indexOf("/campaign/trading-strategies") ==-1 &&   window.location.pathname.indexOf("/campaign/hindi/trading-strategies") === -1 && window.location.pathname.indexOf("/campaign/commodity-trading") ==-1 && window.location.pathname.indexOf("/campaign/forex-trading") ==-1 && window.location.pathname.indexOf("/campaign/free-demat-account") ==-1 && window.location.pathname.indexOf("/campaign/futures-options-trading") ==-1 && window.location.pathname.indexOf("/campaign/technical-analysis") ==-1 && window.location.pathname.indexOf("/campaign/open-demat-account") ==-1 && window.location.pathname.indexOf("/campaign/free-amc-demat-account") ==-1 && window.location.pathname.indexOf("/partner-assests/emitra") === -1 && window.location.pathname.indexOf("/intraday-charges") && window.location.pathname.indexOf("/campaign/intraday-tradingp") === -1   && window.location.pathname.indexOf("/campaign/fno-trading") === -1 && window.location.pathname.indexOf("/campaign/intraday-trading") === -1) && (window.location.pathname.indexOf('open-free-demat-account') > -1 && window.location.search.indexOf('refercode') > -1 && !isMobile.current) ? <Header /> : <CampaignHeader />}
{/*                
                {window.location.pathname.indexOf("/campaign/sub-broker") === -1 &&
                    window.location.pathname.indexOf("/campaign/trading-strategies") === -1 &&
                    window.location.pathname.indexOf("/campaign/hindi/trading-strategies") === -1 &&
                    window.location.pathname.indexOf("/campaign/commodity-trading") === -1 &&
                    window.location.pathname.indexOf("/campaign/forex-trading") === -1 &&
                    window.location.pathname.indexOf("/campaign/free-demat-account") === -1 &&
                    window.location.pathname.indexOf("/campaign/futures-options-trading") === -1 &&
                    window.location.pathname.indexOf("/campaign/technical-analysis") === -1 &&
                    window.location.pathname.indexOf("/campaign/open-demat-account") === -1 &&
                    window.location.pathname.indexOf("/campaign/free-amc-demat-account") === -1 &&
                    window.location.pathname.indexOf("/partner-assests/emitra") === -1 &&
                    window.location.pathname.indexOf("/intraday-charges") === -1 &&
                    window.location.pathname.indexOf("/campaign/intraday-tradingp") === -1 &&
                    window.location.pathname.indexOf("/campaign/fno-trading") === -1 &&
                    window.location.pathname.indexOf("/campaign/intraday-trading") === -1 ?
                    (window.location.pathname.indexOf("/under25") !== -1 ? <Under25Header /> : <Header />)
                    : <CampaignHeader />} */}

            {/* {(window.location.pathname.indexOf("/under-25") === -1)  ? <Header /> : <Under25Header />} */}
                {/* <Header /> */}
                <div className={(window.location.pathname.indexOf("/assisted-order-flow") !== -1) ? 'assist-body' : 'App-Body' }>

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

                        <Route exact path='/hindi/online-trading-app' element={
                            <React.Suspense>
                                < LazyTradingAppHindi />
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
                                < LazyInvestorInfo />
                            </React.Suspense>
                        } />
                        <Route exact path='/code-of-conduct' element={
                            <React.Suspense>
                                < LazyCodeConduct />
                            </React.Suspense>
                        } />
                        <Route exact path='/share-holding-pattern' element={
                            <React.Suspense>
                                < LazyShareHoldingPattern />
                            </React.Suspense>
                        } />
                        <Route exact path='/financial-info' element={
                            <React.Suspense>
                                < LazyFinancialInfo />
                            </React.Suspense>
                        } />
                        <Route exact path='/voting-results' element={
                            <React.Suspense>
                                < LazyVotingResults />
                            </React.Suspense>
                        } />
                        <Route exact path='/fact-sheet' element={
                            <React.Suspense>
                                < LazyFactSheet />
                            </React.Suspense>
                        } />
                        <Route exact path='/notices' element={
                            <React.Suspense>
                                < LazyNotices />
                            </React.Suspense>
                        } />
                        <Route exact path='/news-announcement' element={
                            <React.Suspense>
                                < LazyNewsAnnouncement />
                            </React.Suspense>
                        } />
                        <Route exact path='/annual-report' element={
                            <React.Suspense>
                                < LazyAnnualReport />
                            </React.Suspense>
                        } />
                        <Route exact path='/corporate-governance' element={
                            <React.Suspense>
                                < LazyCorporateGovernance />
                            </React.Suspense>
                        } />

                        <Route exact path='/brokerage-calculator-old' element={
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
                                {/* < Lazyopendemat /> */}
                                < LazyFreeDematCompaign />
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
                        {/* <Route exact path='/corporate-demat-account' element={
                            <React.Suspense>
                                < Lazycorporatedemateaccount />
                            </React.Suspense>
                        } /> */}
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

                        <Route exact path='/research-listing' element={
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
                        <Route exact path='/news-media' element={
                            <React.Suspense>
                                < Lazynewsmedia />
                            </React.Suspense>
                        } />
                        <Route exact path='/cebpl-policies' element={
                            <React.Suspense>
                                < Lazycebplpolicies />
                            </React.Suspense>
                        } />

                        <Route exact path='/investor-charter' element={
                            <React.Suspense>
                                < LazyInvestorcharter />
                            </React.Suspense>
                        } />
                        <Route exact path='/investor-awareness' element={
                            <React.Suspense>
                                < Lazyinvestorawareness />
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

                        {/* <Route exact path='/research-new/:id/:catid' element={
                            <React.Suspense>
                                < Lazyresearchdetailed />
                            </React.Suspense>
                        } /> */}
                        <Route exact path='/research-report/:id' element={
                            <React.Suspense>
                                < Lazyresearchdetailed />
                            </React.Suspense>
                        } />
                        

                        <Route exact path='/demat-account' element={
                            <React.Suspense>
                                < LazyOpenDemat />
                            </React.Suspense>
                        } />

                        <Route exact path='/etf-exchange-traded-funds' element={
                            <React.Suspense>
                                < LazyETF />
                            </React.Suspense>
                        } />

                        {/* <Route exact path='/add-lead' element={
                            <React.Suspense>
                                < LazyAddLead />
                            </React.Suspense>
                        } /> */}
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
                        <Route exact path='/investor-complaints' element={
                            <React.Suspense>
                                < LazyInvestorcomplaints />
                            </React.Suspense>
                        } />
                        <Route exact path='/disclaimer' element={
                            <React.Suspense>
                                < LazyDisclaimer />
                            </React.Suspense>
                        } />

                        <Route exact path='/terms-conditions' element={
                            <React.Suspense>
                                < LazyTermsConditions />
                            </React.Suspense>
                        } />

                        {/* <Route exact path='/brokerage-charges' element={
                            <React.Suspense>
                                < LazyBrokerageCharges />
                            </React.Suspense>
                        } /> */}

                        {/* <Route exact path='/choice-insurance' element={
                            <React.Suspense>
                                < LazyInsurance />
                            </React.Suspense>
                        } /> */}
                        <Route exact path='/file-download' element={
                            <React.Suspense>
                                < LazyFileDownload />
                            </React.Suspense>
                        } />
                        <Route exact path='/equity-broking' element={
                            <React.Suspense>
                                < LazyEquityBroking />
                            </React.Suspense>
                        } />
                        <Route exact path='/board-of-directors' element={
                            <React.Suspense>
                                < LazyBoardOfDirectors />
                            </React.Suspense>
                        } />

                        <Route exact path='/ipo-investment-account' element={
                            <React.Suspense>
                                < LazyIPOInvestment />
                            </React.Suspense>
                        } />


                        <Route exact path='/client-details-update' element={
                            <React.Suspense>
                                < LazyClientdetail />
                            </React.Suspense>
                        } />

                        <Route exact path='/commodity-trading' element={
                            <React.Suspense>
                                < LazyCommodityTrading />
                            </React.Suspense>
                        } />
                        <Route exact path='/equity-stock-trading' element={
                            <React.Suspense>
                                < LazyEquityStockTrading />
                            </React.Suspense>
                        } />
                        <Route exact path='/derivatives-trading' element={
                            <React.Suspense>
                                < LazyDerivativeTrading />
                            </React.Suspense>
                        } />
                        <Route exact path='/currency-forex-trading' element={
                            <React.Suspense>
                                < LazyCurrencyTrading />
                            </React.Suspense>
                        } />
                        <Route exact path='/no-data-found' element={
                            <React.Suspense>
                                < LazyNoDataFound />
                            </React.Suspense>
                        } />

                        <Route exact path='/mutual-funds-investment' element={
                            <React.Suspense>
                                < LazyMutualFundsInvestment />
                            </React.Suspense>
                        } />

                        <Route exact path='/related-party-transaction' element={
                            <React.Suspense>
                                < LazyTranscation />
                            </React.Suspense>
                        } />
                        <Route exact path='/closure-of-trading-window' element={
                            <React.Suspense>
                                < LazyClosureTrading />
                            </React.Suspense>
                        } />

                        <Route exact path='/investor-presentation' element={
                            <React.Suspense>
                                < LazyInvestorPresentation />
                            </React.Suspense>
                        } />

                        <Route exact path='/campaign/open-demat-account' element={
                            <React.Suspense>
                                < LazyCampaignDematAccount />
                            </React.Suspense>
                        } />
                        <Route exact path='/mutual-fund-distributor' element={
                            <React.Suspense>
                                < LazyMutualFundDistributor />
                            </React.Suspense>
                        } />

                        <Route exact path='/partner-assets/emitra' element={
                            <React.Suspense>
                                < LazyPartnerAssests />
                            </React.Suspense>
                        } />

                        <Route exact path='/advisory-for-investors' element={
                            <React.Suspense>
                                < LazyInvestorAdvidory />
                            </React.Suspense>
                        } />
                         <Route exact path='/best-stocks-to-buy' element={
                            <React.Suspense>
                                < LazyBestStocks />
                            </React.Suspense>
                        } />
                         <Route exact path='/best-intraday-stocks-to-buy' element={
                            <React.Suspense>
                                < LazyBestStocks />
                            </React.Suspense>
                        } />
                          <Route exact path='/best-short-term-stocks-to-buy' element={
                            <React.Suspense>
                                < LazyBestStocks />
                            </React.Suspense>
                        } />
                        <Route exact path='/best-stocks-for-long-term-investment' element={
                            <React.Suspense>
                                < LazyBestStocks />
                            </React.Suspense>
                        } />

                         <Route exact path='/intraday-charges' element={
                            <React.Suspense>
                                < LazyIntradayCharges />
                            </React.Suspense>
                        } />
                         <Route exact path='/marathi/sub-broker-franchise' element={
                            <React.Suspense>
                                < Lazysubbrokermarathi />
                            </React.Suspense>
                        } />
                        <Route exact path='/gujarati/sub-broker-franchise' element={
                            <React.Suspense>
                                < Lazysubbrokergujarati />
                            </React.Suspense>
                        } />
                        
                        <Route exact path='/telugu/sub-broker-franchise' element={
                            <React.Suspense>
                                < Lazysubbrokertelagu />
                            </React.Suspense>
                        } />
                        <Route exact path='/hindi/mutual-fund-distributor' element={
                            <React.Suspense>
                                < LazyHindiMutualFundDistributor />
                            </React.Suspense>
                        } />

                        <Route exact path='/hindi/mutual-funds-investment' element={
                            <React.Suspense>
                                < LazyMutualFundsInvestmentHindi />
                            </React.Suspense>
                        } /> 
                        <Route exact path='/government-advisory' element={
                            <React.Suspense>
                                < Lazygovernementadvisory />
                            </React.Suspense>
                        } />
                         <Route exact path='/cfpl-policies' element={
                            <React.Suspense>
                                < LazyCfplPolicies />
                            </React.Suspense>
                        } />

                        <Route exact path='/loan' element={
                            <React.Suspense>
                                < LazyNBFCLanding />
                            </React.Suspense>
                        } />

                         <Route exact path='/individual-loan' element={
                            <React.Suspense>
                                < LazyIndivialLoan />
                            </React.Suspense>
                        } />


                        <Route exact path='/invoice-financing' element={
                            <React.Suspense>
                                < LazyInvoiceFinancing />
                            </React.Suspense>
                        } />
                         <Route exact path='/channel-financing' element={
                            <React.Suspense>
                                < LazyChannelFinance />
                            </React.Suspense>
                        } />
                        <Route exact path='/commercial-vehicle-loan' element={
                            <React.Suspense>
                                < LazyCommercialVehicleLoan />
                            </React.Suspense>
                        } />
                        <Route exact path='/term-business-loan' element={
                            <React.Suspense>
                                < LazyTermLoans />
                                </React.Suspense>
                        } />
                                
                         <Route exact path='/flexi-credit-loan' element={
                            <React.Suspense>
                                < LazyFlexiCreditBusiness />
                            </React.Suspense>
                        } />

                         <Route exact path='/solar-financing' element={
                            <React.Suspense>
                                < LazySolarFinance />
                            </React.Suspense>
                        } />

                        <Route exact path='/business-loan' element={
                            <React.Suspense>
                                < LazyBusinessLoan />
                            </React.Suspense>
                        } />
                         <Route exact path='/supply-chain-finance' element={
                            <React.Suspense>
                                < LazySupplyChainFinance />
                            </React.Suspense>
                        } />
                         <Route exact path='/solar-finance-sub' element={
                            <React.Suspense>
                                < LazySolarFinanceSub />
                            </React.Suspense>
                        } />
                         <Route exact path='/offer-document' element={
                            <React.Suspense>
                                < LazyOfferDocument />
                            </React.Suspense>
                        } />
                          <Route exact path='/stock-broker-in-mumbai' element={
                            <React.Suspense>
                                < LazyStockBroker />
                            </React.Suspense>
                        } />
                        <Route exact path='/stock-broker-in-bangalore' element={
                            <React.Suspense>
                                < LazyStockBroker />
                            </React.Suspense>
                        } />
                        <Route exact path='/stock-broker-in-chennai' element={
                            <React.Suspense>
                                < LazyStockBroker />
                            </React.Suspense>
                        } />
                        <Route exact path='/stock-broker-in-hyderabad' element={
                            <React.Suspense>
                                < LazyStockBroker />
                            </React.Suspense>
                        } />
                        <Route exact path='/stock-broker-in-delhi' element={
                            <React.Suspense>
                                < LazyStockBroker />
                            </React.Suspense>
                        } />
                        <Route exact path='/nach-cancellation' element={
                            <React.Suspense>
                                < LazyNachCancellation />
                            </React.Suspense>
                        } />
                        <Route exact path='/stock-market-holidays' element={
                            <React.Suspense>
                                < LazySharemarketholidays />
                            </React.Suspense>
                        } />
                         <Route exact path='/nse-holidays' element={
                            <React.Suspense>
                                < LazySharemarketholidays />
                            </React.Suspense>
                        } />
                        <Route exact path='/bse-holidays' element={
                            <React.Suspense>
                                < LazySharemarketholidays />
                            </React.Suspense>
                        } />
                        <Route exact path='/mcx-ncdex-holidays' element={
                            <React.Suspense>
                                < LazySharemarketholidays />
                            </React.Suspense>
                        } />
                        
                         <Route exact path='/lending-partners' element={
                            <React.Suspense>
                                < LazyDigitalLendingBanner />
                            </React.Suspense>
                        } /> 
 
                          <Route exact path='/about-choice-finserv' element={
                            <React.Suspense>
                                < LazyCfplImpact />
                            </React.Suspense>
                        } />
                        <Route exact path='/loan/privacy-policy' element={
                            <React.Suspense>
                                < LazyLoanPrivacyPolicy />
                            </React.Suspense>
                        } />
                        <Route exact path='/emi-calculator' element={
                            <React.Suspense>
                                < LazyEmiCalculator />
                            </React.Suspense>
                        } />
                        <Route exact path='/merchant-investment-banking' element={
                            <React.Suspense>
                                < LazyInvestmentBanking />
                            </React.Suspense>
                        } />
                         <Route exact path='/campaign/free-demat-account' element={
                            <React.Suspense>
                                < LazyFreeDematCompaign />
                            </React.Suspense>
                        } />
                        <Route exact path='/campaign/trading-strategies' element={
                            <React.Suspense>
                                < LazyTradingStrategies />
                            </React.Suspense>
                        } />
                         <Route exact path='/campaign/hindi/trading-strategies' element={
                            <React.Suspense>
                                < LazyTradingStrategiesHindi />
                            </React.Suspense>
                        } />
                         <Route exact path='/campaign/commodity-trading' element={
                            <React.Suspense>
                                < LazyCommodityTradingCampaign />
                            </React.Suspense>
                        } />
                         <Route exact path='/campaign/forex-trading' element={
                            <React.Suspense>
                                < LazyCurrencyTradingCampaign />
                            </React.Suspense>
                        } />
                         <Route exact path='/campaign/technical-analysis' element={
                            <React.Suspense>
                                < LazyTechnicalAnalysis />
                                </React.Suspense>}/>
                        <Route exact path='/campaign/futures-options-trading' element={
                            <React.Suspense>
                                < LazyFuturesOptionsTrading />
                            </React.Suspense>
                        } />
 
                        <Route exact path='/assisted-order-flow' element={
                            <React.Suspense>
                                < LazyAfpage />
                            </React.Suspense>
                        } />
                         <Route exact path='/upcoming-agm' element={
                            <React.Suspense>
                                < LazyUpcomingAGM />
                            </React.Suspense>
                        } />
                         <Route exact path='/upcoming-board-meeting' element={
                            <React.Suspense>
                                < LazyUpcomingAGM />
                            </React.Suspense>
                        } />
                         <Route exact path='/upcoming-bonus-shares' element={
                            <React.Suspense>
                                < LazyUpcomingAGM />
                            </React.Suspense>
                        } />
                         <Route exact path='/upcoming-dividend-paying-stocks' element={
                            <React.Suspense>
                                < LazyUpcomingAGM />
                            </React.Suspense>
                        } />
                         <Route exact path='/upcoming-stock-splits' element={
                            <React.Suspense>
                                < LazyUpcomingAGM />
                            </React.Suspense>
                        } />
                         <Route exact path='/upcoming-rights-issue' element={
                            <React.Suspense>
                                < LazyUpcomingAGM />
                            </React.Suspense>
                        } />
                        
                         <Route exact path='/insights/:id' element={
                            <React.Suspense>
                                < LazyBlogCms />
                            </React.Suspense>
                        } />
                       
                       <Route exact path='/ipo/:id' element={
                            <React.Suspense>
                                < LazyIPOLanding />
                            </React.Suspense>
                        } />
                         <Route exact path='/brokerage-calculator' element={
                            <React.Suspense>
                                < LazyBrokerageCalculator />
                            </React.Suspense>
                        } />
                         <Route exact path='/oi-spurts' element={
                            <React.Suspense>
                                < LazyOISpurts />
                                </React.Suspense>
                        } />
                         <Route exact path='/margin-calculator' element={
                            <React.Suspense>
                                < LazyMarginCalculator />
                            </React.Suspense>
                        } />
                         <Route exact path='/futures-and-options-margin-calculator' element={
                            <React.Suspense>
                                < LazyMarginCalculator />
                            </React.Suspense>
                        } />
                         <Route exact path='/commodity-margin-calculator' element={
                            <React.Suspense>
                                < LazyMarginCalculator />
                            </React.Suspense>
                        } />
                         <Route exact path='/forex-margin-calculator' element={
                            <React.Suspense>
                                < LazyMarginCalculator />
                            </React.Suspense>
                        } />
                         <Route exact path='/sip-calculator' element={
                            <React.Suspense>
                                < LazySIPCalculator />
                            </React.Suspense>
                        } />
                         <Route exact path='/mutual-fund-calculator' element={
                            <React.Suspense>
                                < LazyMutualFundCalculator />
                            </React.Suspense>
                        } />
                         {/* <Route exact path='/option-chain' element={
                            <React.Suspense>
                                < LazyOptionChain />
                            </React.Suspense>
                        } />
                         <Route exact path='/tcs-option-chain' element={
                            <React.Suspense>
                                < LazyCompanyOptionChain />
                            </React.Suspense>
                        } />
                         <Route exact path='/nse-option-chain' element={
                            <React.Suspense>
                                < LazyNSEOptionChain />
                            </React.Suspense>
                        } />
                         <Route exact path='/mcx-option-chain' element={
                            <React.Suspense>
                                < LazyMCXOptionChain />
                            </React.Suspense>
                        } />
                         <Route exact path='/currency-option-chain' element={
                            <React.Suspense>
                                < LazyCurrencyOptionChain />
                            </React.Suspense>
                        } /> */}
                        <Route exact path='/track-record-page' element={
                            <React.Suspense>
                                <Lazytrackrecords />
                            </React.Suspense>
                        } />
                        <Route exact path='/campaign/fno-trading' element={
                            <React.Suspense>
                                < LazyFnoTrading />
                            </React.Suspense>
                        } />
                         <Route exact path='/campaign/intraday-trading' element={
                            <React.Suspense>
                                <LazyIntradayTrading/>
                            </React.Suspense>
                        } />
                         <Route exact path='/mutual-fund-app' element={
                            <React.Suspense>
                                < LazyMFApp />
                                </React.Suspense>
                        } />
                         <Route exact path='/amc' element={
                            <React.Suspense>
                                < LazyTopFundsAMC />
                            </React.Suspense>
                        } />
                         <Route exact path='/top-funds' element={
                            <React.Suspense>
                                < LazyTopFundsIndia />
                            </React.Suspense>
                        } />
                         <Route exact path='scheme/:id' element={
                            <React.Suspense>
                                < LazyMFDetails />
                            </React.Suspense>
                        } />
                         <Route exact path='/amc/:id' element={
                            <React.Suspense>
                                < LazyAMCDetails />
                            </React.Suspense>
                        } />
                        <Route exact path='/top-funds/:id' element={
                            <React.Suspense>
                                 < LazyELSSDetails />
                            </React.Suspense>
                        } />
                         <Route exact path='/corporate-demat-account' element={
                            <React.Suspense>
                                 < LazyCorporateDematAc />
                            </React.Suspense>
                        } />

                         <Route exact path='/bug-bounty-program' element={
                            <React.Suspense>
                                 < LazyBugBountyProgram />
                            </React.Suspense>
                        } />
                         <Route exact path='/solar-loan/lead-form' element={
                            <React.Suspense>
                                 < LazyLeadForm />
                            </React.Suspense>
                        } />
                         <Route exact path='/under25' element={
                            <React.Suspense>
                                 < LazyUnder25 />
                            </React.Suspense>
                        } />
                        <Route exact path='/brokerage-charges' element={
                            <React.Suspense>
                                < LazyBrokerageChargesNew />
                            </React.Suspense>
                        } />
                        <Route exact path='/investor-grievances' element={
                            <React.Suspense>
                                < LazyInvestorCharterGrievances />
                            </React.Suspense>
                        } />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </div>
                {(window.location.pathname.indexOf("/campaign/sub-broker") === -1 && window.location.pathname.indexOf("/campaign/trading-strategies") === -1 && window.location.pathname.indexOf("/campaign/hindi/trading-strategies") === -1 && window.location.pathname.indexOf("/campaign/commodity-trading") ==-1 && window.location.pathname.indexOf("/campaign/forex-trading") ==-1 && window.location.pathname.indexOf("/campaign/free-demat-account") ==-1 && window.location.pathname.indexOf("/campaign/technical-analysis") ==-1 && window.location.pathname.indexOf("/campaign/futures-options-trading") ==-1 && window.location.pathname.indexOf("/campaign/open-demat-account") ==-1 && window.location.pathname.indexOf("/campaign/free-amc-demat-account") ==-1 && window.location.pathname.indexOf("/intraday-charges") === -1 && window.location.pathname.indexOf("/campaign/fno-trading") && window.location.pathname.indexOf("/campaign/intraday-trading") === -1 && window.location.pathname.indexOf("/partner-assests/emitra") === -1 ) ? (window.location.pathname.indexOf("/assisted-order-flow") > -1) || (window.location.pathname.indexOf("/solar-loan/lead-form") > -1) ? '': <Footer /> : <CampaignFooter />}
            </Router>
        </>
    )
}

export default Routing;
