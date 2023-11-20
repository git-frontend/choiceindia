import React, { useEffect, useState } from "react";
import rest from "../../Services/rest";
import LazyLoader from '../Common-features/LazyLoader';
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import PreSingleArrow from '../../assets/images/amc-details/pre-arrow-single.svg';
import PreDobbleArrow from '../../assets/images/amc-details/pre-arrow-dobble.svg';
import NextSingleArrow from '../../assets/images/amc-details/next-arrow-single.svg';
import NextDobbleArrow from '../../assets/images/amc-details/next-arrow-dobble.svg';
import { Link } from "react-router-dom";
function Banner() {
    const [name, setName] = useState('hideform');
    const [amcWiseData, setAmcWiseData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [filteredCategoryData, setFilteredCategoryData] = useState([])
    const [rendercount, setRenderCount] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const getPosition = () => {
        const element = document.getElementById("showForm");
        if (element) {
            const rect = element.getBoundingClientRect();

            if (rect.top.toFixed() < 259) {
                setName('visibleform');
            } else {
                setName('hideform');
            }
        }
    };
    function chapterScroll2(id) {
        var element = document.getElementById(id);
        var headerOffset = 140;
        var elementPosition = element.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', getPosition);
        initializeData()
    }, []);
    const initializeData = () => {
        let urlIdentity = window.location.pathname.split('/amc/')[1];
        let newurl = urlIdentity.split('-').join(' ');
        getAMCData(newurl);
    };
    //for pagenation 
    const totalPages = Math.ceil(categoryData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, categoryData.length);
    const getAMCData = (newurl) => {
        rest.AMCListDetails(newurl).then(
            res => {
                if (res && res.Response) {
                    setAmcWiseData([res]);
                    setCategoryData(res.Response)
                    setFilteredCategoryData(res.Response)
                } else {
                    navigate(`/404`, { replace: true });
                }
            },
            err => {
                if (err && err.message && (err.message.indexOf('404') > -1)) {
                    navigate(`/404`, { replace: true });
                }
                console.log("ERROR", err);
            }
        );
    };
    const renderPageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;

        for (let i = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2)); i <= Math.min(totalPages, currentPage + Math.floor(maxPagesToShow / 2)); i++) {
            pageNumbers.push(
                <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={currentPage === i ? "pagenum active" : " pagenum"}
                    disabled={currentPage === i}
                >
                    {i}
                </button>
            );
        }

        return pageNumbers;
    };
    const schemeReturnsToFixed = (value) => {
        return parseFloat(value).toFixed(2);
    };
    return (
        <>
            <section className="funds-bannersection">
                <div className="container">
                    <div className="row align-items-center">
                        {
                            amcWiseData?.map((res) => {
                                return (
                                    <div className="col-xl-7 col-md-6 lft-sec">
                                        <h1 className="big-ttl">{res.AMCName}</h1>
                                        <p className="para">Experience ‘The Joy of Earning’ by investing in {res.AMCName} Online and see your Wealth Grow over time!</p>
                                    </div>
                                )
                            })
                        }
                        <div className="col-xl-5 col-md-6">
                            <div className="d-flex justify-content-end" id="campaignForm">
                                <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                                    <DematAccountForm />
                                </GoogleReCaptchaProvider>
                            </div>
                        </div>
                    </div>
                    <div className={name}>
                        <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                            <button className=" primary-orange-btn scroll-top-account openbtn" onClick={() => { chapterScroll2('dematform') }}>Open Free Account</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className='search-amc-sec' id='showForm'>
                <div className='container'>
                    <div className='row justify-content-between'>
                        <div className='col-xl-4 col-md-5 col-sm-12'>
                            <div className='drop-sec'>
                                <div className='drop-items'>
                                    <select className='form-select'>
                                        <option value="" defaultValue>Returns</option>
                                        <option value="">High Returns</option>
                                        <option value="">Low Returns</option>
                                    </select>
                                </div>
                                <div className='drop-items'>
                                    <select className='form-select'>
                                        <option value="" defaultValue>Stars</option>
                                        <option value="">5 Star</option>
                                        <option value="">3 Star</option>
                                        <option value="">4 Star</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-5 col-md-7 col-sm-12'>
                            <div className='serch-drp-sec'>
                                <div className='search-bar-items left-sec'>
                                    <input type="text" className="input-control search-icon" placeholder="Search" />
                                </div>
                                <div className='search-bar-items right-sec'>
                                    <select className='form-select'>
                                        <option value="" defaultValue>Sort</option>
                                        <option value="">10</option>
                                        <option value="">20</option>
                                        <option value="">50</option>
                                    </select>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <section className='listing-details'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            {filteredCategoryData.slice(startIndex, endIndex).map((amc, i) => (
                                <div className='card' key={amc.AMCName}>
                                    <Link to={`/scheme/${amc.AMCName.toLowerCase().replace(/ /g, '-')}-${amc.SchemeCode}-${amc.SchemePlanCode}`} >
                                        <div className="display-flex">
                                            <div className='flex-i'>
                                                <h3>{amc.SchemeName}</h3>
                                                <p className='category'>
                                                    <span>Category : {amc.CategoryName}</span>
                                                    <span className='brder-left'>NAV : ₹{parseFloat(amc.Returns.CurrentNav).toFixed(2)}</span>
                                                    <span className='brder-left'>AUM: ₹{(parseFloat(amc.Returns.NetAsset).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'Cr.')}</span>
                                                </p>
                                            </div>
                                            <div className='flex-i'>
                                                <div className='rating-det'>
                                                    {[1, 2, 3, 4, 5].map((rating) => (
                                                        <FontAwesomeIcon
                                                            key={rating}
                                                            icon={faStar}
                                                            className={`${amc?.Ratings >= rating ? 'fill' : 'unfill'}`}
                                                        />
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-xl-5 col-md-6 left'>
                                                <ul className='fundlist-flex'>
                                                    <li className='fundlist'>
                                                        <h5 className='time-period'>1M</h5>
                                                        <h5>{schemeReturnsToFixed(amc.Returns.OneMonthReturn)}%</h5>
                                                    </li>
                                                    <li className='fundlist'>
                                                        <h5 className='time-period'>3M</h5>
                                                        <h5>{schemeReturnsToFixed(amc.Returns.ThreeMonthsReturn)}%</h5>
                                                    </li>
                                                    <li className='fundlist'>
                                                        <h5 className='time-period'>6M</h5>
                                                        <h5>{schemeReturnsToFixed(amc.Returns.SixMonthsReturn)}%</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='right col-xl-5 col-md-6'>
                                                <ul className='fundlist-flex border-left'>
                                                    <li className='fundlist text-center'>
                                                        <h5 className='time-period'>1Y</h5>
                                                        <h5>{schemeReturnsToFixed(amc.Returns.OneYearReturn)}%</h5>
                                                    </li>
                                                    <li className='fundlist'>
                                                        <h5 className='time-period'>3Y</h5>
                                                        <h5>{schemeReturnsToFixed(amc.Returns.ThreeYearReturn)}%</h5>
                                                    </li>
                                                    <li className='fundlist'>
                                                        <h5 className='time-period'>5Y</h5>
                                                        <h5>{schemeReturnsToFixed(amc.Returns.FiveYearReturn)}%</h5>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className='col-xl-2 col-md-12'>
                                                <button type='button' className='btn-bg'>View Details</button>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                            )
                            }

                            <span className='bg-before'></span>
                            <div className='wrapper'>
                                <ul className='pagination-sec'>
                                    <li onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                                        <LazyLoader src={PreSingleArrow} className="img-fluid" width={20} height={29} />
                                    </li>
                                    <li onClick={() => setCurrentPage(currentPage - 2)} disabled={currentPage <= 2}>
                                        <LazyLoader src={PreDobbleArrow} className="img-fluid" width={25} height={29} />
                                    </li>
                                    <li>
                                        <div className="pagination">
                                            {renderPageNumbers()}
                                        </div>
                                    </li>
                                    <li onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                                        <LazyLoader src={NextDobbleArrow} className="img-fluid" width={25} height={29} />
                                    </li>
                                    <li onClick={() => setCurrentPage(currentPage + 2)} disabled={currentPage >= totalPages - 1}>
                                        <LazyLoader src={NextSingleArrow} className="img-fluid" width={20} height={29} />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='more-content-sec'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='title-first'><span>Invest</span> in HDFC Mutual Fund Schemes Online</h2>
                            <p className='seo-para'>HDFC Mutual Fund often referred to as HDFC MF is among the largest Asset Management Companies in India. The HDFC Mutual Fund manages an AUM of over Rs. 3,35,515 Crores spread in 100+ Schemes as of December 31, 2018.</p>
                            <p className='seo-para'>HDFC AMC’s central business is Mutual Fund schemes across various asset classes, portfolio management and advisory services. The AMC has more than 140+ HDFC Mutual Fund Investor Services and 36+ branches as Points of Acceptance for transactions of its schemes.</p>
                            <p className='seo-para'>You can view the entire HDFC Mutual Fund Online and begin your investment journey in one of the leading fond houses. Browse through all HDFC Mutual Fund Schemes and see the latest HDFC Mutual Fund NAV and its current AUM as well as check the historical HDFC Mutual Fund Returns displayed for the past 1-month, 3-months, 6-months, 1-year, 3-years and 5 years. For each HDFC Scheme, we share the details of its Holdings segregated into Market Cap, Sectors and Companies. Rated by our in-house experts, start your HDFC SIP transactions or make a Lump sum Investments to create wealth.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner