import React, { useEffect, useState } from "react";
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
function Banner() {
    const [name, setName] = useState('hideform');
    const [apiData, setApiData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [filteredCategoryData, setFilteredCategoryData] = useState([])
    const [rendercount, setRenderCount] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState("");
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
    const initializeData = () => {
        let urlIdentity = window.location.pathname.split('/top-funds/')[1];
        console.log("urlIdentity", urlIdentity);
        getCategoryData(urlIdentity);
    };
    const getCategoryData = (urlIdentity) => {
        rest.getCategoryData(urlIdentity).then(
            res => {
                if (res && res.Response && res.Response.lstSchemeFundExplorer) {
                    setApiData([res.Response]);
                    setCategoryData(res.Response.lstSchemeFundExplorer)
                    setFilteredCategoryData(res.Response.lstSchemeFundExplorer)
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


    const totalPages = Math.ceil(categoryData.length / itemsPerPage);

    // Calculate the starting and ending indexes for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = Math.min(startIndex + itemsPerPage, categoryData.length);

    const CategorySearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm); 
        const filteredResults = categoryData?.filter((res) =>
          res?.Response?.lstSchemeFundExplorer.toLowerCase().includes(searchTerm)
        );
        setFilteredCategoryData(filteredResults || []); 
      };
    return (
        <>
            <section className="funds-bannersection">
                <div className="container">
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
                                    <input type="text" className="input-control search-icon" placeholder="Search" onChange={CategorySearch} />
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
                            {filteredCategoryData.slice(startIndex, endIndex).map((fund, i) => (
                                <div className='card' key={fund.SchemeCode}>
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
                                </div>
                            )
                            )
                            }
                            {filteredCategoryData.length === 0 && (
                                <div className="text-center">
                                <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                            </div>
                            )}
                            <span className='bg-before'></span>
                            <div className='wrapper'>
                                <ul className='pagination-sec'>
                                    <li onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                                        <LazyLoader src={PreSingleArrow} className="img-fluid" width={20} height={29} />
                                    </li>
                                    <li onClick={() => setCurrentPage(currentPage - 2)} disabled={currentPage <= 2}>
                                        <LazyLoader src={PreDobbleArrow} className="img-fluid" width={25} height={29} />
                                    </li>
                                    <li>
                                        <ul className="pagination">
                                            {Array.from({ length: totalPages }, (_, index) => (
                                                <li key={index} className={currentPage === index + 1 ? "active" : ""} onClick={() => setCurrentPage(index + 1)}>
                                                    {index + 1}
                                                </li>
                                            ))}
                                        </ul>
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
        </>
    )
}

export default Banner