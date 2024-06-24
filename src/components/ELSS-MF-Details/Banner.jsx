import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import rest from "../../Services/rest";
import noDataimg from '../../assets/images/no-data.webp';
import LazyLoader from '../Common-features/LazyLoader';
import PreSingleArrow from '../../assets/images/amc-details/pre-arrow-single.svg';
import PreDobbleArrow from '../../assets/images/amc-details/pre-arrow-dobble.svg';
import NextSingleArrow from '../../assets/images/amc-details/next-arrow-single.svg';
import NextDobbleArrow from '../../assets/images/amc-details/next-arrow-dobble.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
function Banner() {

    const [name, setName] = useState('hideform');
    const [apiData, setApiData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [filteredCategoryData, setFilteredCategoryData] = useState([])
    const [rendercount, setRenderCount] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const [searchTerm, setSearchTerm] = useState('');
    const [returnsFilter, setReturnsFilter] = useState('');
    const [sortFilter, setSortFilter] = useState('');
    const [isloading, setisloading] = useState(true);
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
    const initializeData = () => {
        let urlIdentity = window.location.pathname.split('/top-funds/')[1];
        getCategoryData(urlIdentity);
    };
    const getCategoryData = (urlIdentity) => {
        rest.getCategoryData(urlIdentity).then(
            res => {
                if (res && res.Response && res.Response.lstSchemeFundExplorer) {
                    setisloading(false);
                    setApiData([res.Response]);
                    setCategoryData(res.Response.lstSchemeFundExplorer)
                    setFilteredCategoryData(res.Response.lstSchemeFundExplorer)
                } else {
                    setisloading(false);
                    navigate(`/404`, { replace: true });
                }
            },
            err => {
                if (err && err.message && (err.message.indexOf('404') > -1)) {
                    navigate(`/404`, { replace: true });
                }
               
            }
        );
    };

    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
            window.addEventListener('scroll', getPosition);
            initializeData()
        }
    }, [rendercount]);
    const schemeReturnsToFixed = (value) => {
        return parseFloat(value).toFixed(2);
    };
    //for pagenation 
    const totalPages = Math.ceil(categoryData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, categoryData.length);
    //for search category name 
    const CategorySearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);
        const filteredResults = categoryData.filter((fund) => {
            return (
                fund.SchemeName.toLowerCase().includes(searchTerm) ||
                fund.ExpenseRatio.toString().includes(searchTerm) ||
                fund.AUM.toLowerCase().includes(searchTerm) ||
                fund.CMSStarRatings.toString().includes(searchTerm)
            );
        });
        setFilteredCategoryData(filteredResults);
    }
    // for filter as per ratings
    const FilterByStars = (e) => {
        const selectedStars = e.target.value;
        let filteredResults = categoryData;
        if (selectedStars) {
            filteredResults = categoryData.filter((fund) => fund.CMSStarRatings.toString() === selectedStars);
        }
        setFilteredCategoryData(filteredResults);
    };
    function addClassNameToTable(htmlContent, classNameToAdd) {
        return htmlContent.replace(/<table/, `<table class="${classNameToAdd}"`);
    }
    const FilterByReturns = (e) => {
        const selectedReturns = e.target.value;
        setReturnsFilter(selectedReturns);
        let filteredResults = filteredCategoryData;
        if (selectedReturns) {
            filteredResults = filteredCategoryData.filter((fund) => {
                switch (selectedReturns) {
                    case '1 Month':
                        return fund.SchemeReturns.OneMonthReturn !== null;
                    case '3 Months':
                        return fund.SchemeReturns.ThreeMonthsReturn !== null;
                    case '6 Months':
                        return fund.SchemeReturns.SixMonthsReturn !== null;
                    case '1 Year':
                        return fund.SchemeReturns.OneYearReturn !== null;
                    case '3 Years':
                        return fund.SchemeReturns.ThreeYearReturn !== null;
                    case '5 Years':
                        return fund.SchemeReturns.FiveYearReturn !== null;
                    default:
                        return true;
                }
            });
        }
        setFilteredCategoryData(filteredResults);
    };


    const handleSortChange = (e) => {
        const selectedSort = e.target.value;
        setSortFilter(selectedSort);
        let sortedResults = [...filteredCategoryData];

        switch (selectedSort) {
            case 'Returns- Low to High':
                sortedResults.sort((a, b) => {
                    const aValue = getReturnForSort(a, returnsFilter);
                    const bValue = getReturnForSort(b, returnsFilter);
                    return aValue - bValue;
                });
                break;
            case 'Returns- High to Low':
                sortedResults.sort((a, b) => {
                    const aValue = getReturnForSort(a, returnsFilter);
                    const bValue = getReturnForSort(b, returnsFilter);
                    return bValue - aValue;
                });
                break;
            case 'Rating- Low to High':
                sortedResults.sort((a, b) => a.CMSStarRatings - b.CMSStarRatings);
                break;
            case 'Rating- High to Low':
                sortedResults.sort((a, b) => b.CMSStarRatings - a.CMSStarRatings);
                break;
            default:
                break;
        }

        setFilteredCategoryData(sortedResults);
    };

    const getReturnForSort = (fund, selectedReturns) => {
        switch (selectedReturns) {
            case '1 Month':
                return parseFloat(fund.SchemeReturns.OneMonthReturn) || 0;
            case '3 Months':
                return parseFloat(fund.SchemeReturns.ThreeMonthsReturn) || 0;
            case '6 Months':
                return parseFloat(fund.SchemeReturns.SixMonthsReturn) || 0;
            case '1 Year':
                return parseFloat(fund.SchemeReturns.OneYearReturn) || 0;
            case '3 Years':
                return parseFloat(fund.SchemeReturns.ThreeYearReturn) || 0;
            case '5 Years':
                return parseFloat(fund.SchemeReturns.FiveYearReturn) || 0;
            default:
                return 0;
        }
    };
    const renderPageNumbers = () => {
        const displayRange = 3;
        const totalPages = Math.ceil(filteredCategoryData.length / itemsPerPage);

        let startPage = Math.max(1, currentPage - displayRange);
        let endPage = Math.min(totalPages, currentPage + displayRange);

        const difference = displayRange * 2 + 1 - (endPage - startPage + 1);
        if (difference > 0) {
            startPage = Math.max(1, startPage - difference);
            endPage = Math.min(totalPages, endPage + difference);
        }

        return (
            <ul className="pagination">
                {Array.from({ length: endPage - startPage + 1 }, (_, index) => (
                    <li
                        key={startPage + index}
                        className={currentPage === startPage + index ? "active" : ""}
                        onClick={() => setCurrentPage(startPage + index)}
                    >
                        {startPage + index}
                    </li>
                ))}
            </ul>
        );
    };
    return (
        <>
            <section className="funds-bannersection">
                <div className="container">
                    {
                        isloading ?
                            <div className="text-center">
                                <div>
                                    <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                </div>
                            </div>
                            :
                            <div className="row align-items-center">
                                {
                                    apiData?.map((res) => {
                                        return (
                                            <div className="col-xl-7 col-md-6 lft-sec">
                                                <h1 className="big-ttl">{res.H1Tag}</h1>
                                                <p className="para">{res.CategoryHeader}</p>
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
                    }
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
                                    <select className='form-select' onChange={FilterByReturns} value={returnsFilter || ''}>
                                        <option value="" disabled hidden defaultValue>Returns</option>
                                        <option value="All">All</option>
                                        <option value="1 Month">1 Month</option>
                                        <option value="3 Months">3 Months</option>
                                        <option value="6 Months">6 Months</option>
                                        <option value="1 Year">1 Year</option>
                                        <option value="3 Years">3 Years</option>
                                        <option value="5 Years">5 Years</option>
                                    </select>
                                </div>
                                <div className='drop-items'>
                                    <select className='form-select' onChange={FilterByStars}>
                                        <option value="value" disabled hidden defaultValue selected>Ratings</option>
                                        <option value="" defaultValue>All</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-5 col-md-7 col-sm-12'>
                            <div className='serch-drp-sec'>
                                <div className='search-bar-items left-sec'>
                                    <input type="text" className="input-control search-icon" placeholder="Search" onChange={CategorySearch} />
                                </div>
                                <div className='search-bar-items right-sec'>
                                    <select className='form-select' onChange={handleSortChange} value={sortFilter || ''}>
                                        <option value="" disabled hidden defaultValue>Sort</option>
                                        <option value="" defaultValue>All</option>
                                        <option value="Returns- Low to High">Returns- Low to High</option>
                                        <option value="Returns- High to Low">Returns- High to Low</option>
                                        <option value="Rating- Low to High">Rating- Low to High</option>
                                        <option value="Rating- High to Low">Rating- High to Low</option>
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
                        {
                            isloading ?
                                <div className="text-center">
                                    <div>
                                        <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                    </div>
                                </div>
                                :
                                filteredCategoryData.length === 0 ? (
                                    <div className="text-center">
                                         <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                    </div>
                                ) : (
                                    <div className='col-md-12'>
                                        {filteredCategoryData.slice(startIndex, endIndex).map((fund, i) => (
                                            <div className='card' key={fund.SchemeName}>
                                                <Link to={`/scheme/${fund.SchemeName.toLowerCase().replace(/ /g, '-')}-${fund.SchemeCode}-${fund.SchemePlanCode}`} >
                                                    <div className="display-flex">
                                                        <div className='flex-i'>
                                                            <h3>{fund.SchemeName}</h3>
                                                            <p className='category'>
                                                                <span>Expense Ratio : {fund.ExpenseRatio}%</span>
                                                                <span className='brder-left'>AUM : {(parseFloat(fund.SchemeReturns.NetAsset).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'Cr.')}</span>
                                                            </p>
                                                        </div>
                                                        <div className='flex-i'>
                                                            <div className='rating-det'>
                                                                {[1, 2, 3, 4, 5].map((rating) => (
                                                                    <FontAwesomeIcon
                                                                        key={rating}
                                                                        icon={faStar}
                                                                        className={`${fund?.CMSStarRatings >= rating ? 'fill' : 'unfill'}`}
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
                                                                    <h5>{schemeReturnsToFixed(fund.SchemeReturns.OneMonthReturn)}%</h5>
                                                                </li>
                                                                <li className='fundlist'>
                                                                    <h5 className='time-period'>3M</h5>
                                                                    <h5>{schemeReturnsToFixed(fund.SchemeReturns.ThreeMonthsReturn)}%</h5>
                                                                </li>
                                                                <li className='fundlist'>
                                                                    <h5 className='time-period'>6M</h5>
                                                                    <h5>{schemeReturnsToFixed(fund.SchemeReturns.SixMonthsReturn)}%</h5>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className='right col-xl-5 col-md-6'>
                                                            <ul className='fundlist-flex border-left'>
                                                                <li className='fundlist text-center'>
                                                                    <h5 className='time-period'>1Y</h5>
                                                                    <h5>{schemeReturnsToFixed(fund.SchemeReturns.OneYearReturn)}%</h5>
                                                                </li>
                                                                <li className='fundlist'>
                                                                    <h5 className='time-period'>3Y</h5>
                                                                    <h5>{schemeReturnsToFixed(fund.SchemeReturns.ThreeYearReturn)}%</h5>
                                                                </li>
                                                                <li className='fundlist'>
                                                                    <h5 className='time-period'>5Y</h5>
                                                                    <h5>{schemeReturnsToFixed(fund.SchemeReturns.FiveYearReturn)}%</h5>
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
                                            <div className='pagination-sec'>
                                                <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
                                                    <LazyLoader src={PreSingleArrow} className="img-fluid" width={20} height={29} />
                                                </button>
                                                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage <= 2}>
                                                    <LazyLoader src={PreDobbleArrow} className="img-fluid" width={25} height={29} />
                                                </button>

                                                <div className="pagenum">
                                                    {renderPageNumbers()}
                                                </div>

                                                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
                                                    <LazyLoader src={NextDobbleArrow} className="img-fluid" width={25} height={29} />
                                                </button>
                                                <button onClick={() => setCurrentPage(currentPage + 2)} disabled={currentPage >= totalPages - 1}>
                                                    <LazyLoader src={NextSingleArrow} className="img-fluid" width={20} height={29} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </section>
            <section className='more-content-sec'>
                <div className='container'>
                    {
                        isloading ?
                            <div className="text-center">
                                <div>
                                    <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                </div>
                            </div>
                            :
                            <div className='row'>
                                {
                                    apiData.length ?
                                        <div className='col-md-12'>
                                            {
                                                apiData.map((fund, i) => {
                                                    const modifiedHtmlContent = addClassNameToTable(fund.CategoryDescriptionWeb, 'table');
                                                    return (
                                                        <div key={fund.SchemeName}>
                                                            <h2 className='title-secnd'>{fund.CategoryFooter}</h2>
                                                            <div className="more-contentseo" dangerouslySetInnerHTML={{ __html: modifiedHtmlContent }} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>

                                        :
                                        <div className="text-center">
                                            <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                        </div>
                                }
                            </div>
                    }
                </div>
            </section>


            {apiData.map((fund, i) => {
                return (
                    <div key={fund.SchemeName}>
                        {fund.H1Tag === "Best ELSS Mutual Funds" ?
                            <section className="Dematfaq">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h2 className="title-first text-center pb-4">Frequently Asked <span>Questions</span></h2>
                                        </div>

                                    </div>
                                    <div className="row justify-content-center">
                                        <div className="col-xl-10 col-md-12">
                                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                                <Accordion.Item eventKey="0" className='faq-item'>
                                                    <Accordion.Header as="h3" className='faq-header'>How do ELSS Funds help you save taxes?</Accordion.Header>
                                                    <Accordion.Body className='open-demat-faq-body'>
                                                        You can claim a tax benefit of up to 1,50,000 under Section 80C of the Income Tax Act. ELSS fund is a popular and fast growing Tax Saving Investment instrument.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1" className='faq-item'>
                                                    <Accordion.Header as="h3" className='faq-header'>Is Investment in ELSS funds risky?</Accordion.Header>
                                                    <Accordion.Body className='open-demat-faq-body'>
                                                        The following documents will be required to open an account for a resident individual with Choice :
                                                        <ul>
                                                            <li>PAN Card</li>
                                                            <li>Cancelled Cheque (that captures the MICR Code)</li>
                                                            <li>Passport Size Photograph</li>
                                                            <li>Address Proof</li>
                                                        </ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2" className='faq-item'>
                                                    <Accordion.Header as="h3" className='faq-header'>What is the investment limit in ELSS Mutual Funds?</Accordion.Header>
                                                    <Accordion.Body className='open-demat-faq-body'>
                                                        The Power of Attorney is a document that gives us the authorization to debit your shares from your Demat Account whenever you sell them. However, till the time you do not submit a POA, you can avail the eDIS facility to sell your holdings. This will require you to authorise your holdings once daily before doing any holding's sell transactions. It is recommended to send a signed copy of your POA since it enables you to sell your holdings seamlessly without the need to authorise online all the time.
                                                        A copy of the POA gets emailed to you on your registered email ID, which needs to be physically signed and couriered to us. You can send us the signed POA to our head-office address mentioned on our website - <a href="https://choiceindia.com">https://choiceindia.com</a>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3" className='faq-item'>
                                                    <Accordion.Header as="h3" className='faq-header'>How long should you stay invested into Tax Saving Funds?</Accordion.Header>
                                                    <Accordion.Body className='open-demat-faq-body'>
                                                        You can courier the signed copy of the POA to our Head Office address mentioned below.<br />
                                                        Choice International Limited,<br />
                                                        Sunil Patodia Tower,<br />
                                                        J B Nagar, Andheri (East), Mumbai 400099.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="4" className='faq-item' id="faqid">
                                                    <Accordion.Header as="h3" className='faq-header'>Can I withdraw my investments from ELSS Fund before 3 years?</Accordion.Header>
                                                    <Accordion.Body className='open-demat-faq-body'>
                                                        You can open a low brokerage Demat Account with Choice at zero account opening charges.
                                                    </Accordion.Body>
                                                </Accordion.Item>

                                                <Accordion.Item eventKey="5" className='faq-item'>
                                                    <Accordion.Header as="h3" className='faq-header' >How much maximum tax you can save under ELSS Funds?</Accordion.Header>
                                                    <Accordion.Body className='open-demat-faq-body'>
                                                        NSE/BSE mandates a Demat with your Trading Account for securities. Currency and Commodities do not require a Demat Account, so if your trading requirements are restricted to that; a Trading Account can be opted for. This will have to be specified in the documentation process with the broker. For more information regarding the same, you can contact our customer care team at care@choiceindia.com
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="6" className='faq-item'>
                                                    <Accordion.Header as="h3" className='faq-header' >An I make Lumpsum investments in Tax Saving Mutual Funds?</Accordion.Header>
                                                    <Accordion.Body className='open-demat-faq-body'>
                                                        You will be required to provide us with the CML (Client Master List) Copy of your earlier DP and open a new Demat Account with us.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            : ""}
                    </div>
                );
            })}


        </>
    )
}

export default Banner