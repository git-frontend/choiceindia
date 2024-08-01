import React, { useEffect, useState } from "react";
import rest from "../../Services/rest";
import LazyLoader from '../Common-features/LazyLoader';
import noDataimg from '../../assets/images/no-data.webp';
import DematAccountForm from '../Common-features/DematAccountForm';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUp } from '@fortawesome/free-solid-svg-icons';
import PreSingleArrow from '../../assets/images/amc-details/pre-arrow-single.svg';
import PreDobbleArrow from '../../assets/images/amc-details/pre-arrow-dobble.svg';
import NextSingleArrow from '../../assets/images/amc-details/next-arrow-single.svg';
import NextDobbleArrow from '../../assets/images/amc-details/next-arrow-dobble.svg';
import loaderimg2 from '../../assets/vedio/loader2.mp4';
import { Link, useNavigate } from "react-router-dom";
function Banner() {
    const navigate = useNavigate();
    const [name, setName] = useState('hideform');
    const [amcWiseData, setAmcWiseData] = useState([]);
    const [categoryData, setCategoryData] = useState([]);
    const [filteredCategoryData, setFilteredCategoryData] = useState([])
    const [rendercount, setRenderCount] = useState(false);
    const [returnsFilter, setReturnsFilter] = useState('');
    const [sortFilter, setSortFilter] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [isloading, setisloading] = useState(true);
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
        initializeData();
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
        rest.AMCListDetails(newurl)
            .then(res => {
                if (res && res.Response) {
                    setisloading(false);
                    setAmcWiseData([res]);
                    setCategoryData(res.Response);
                    setFilteredCategoryData(res.Response);
                } else {
                    setisloading(false);
                    navigate(`/404`, { replace: true });
                }
            })
            .catch(err => {
                console.error(err);
                setisloading(false);
                navigate(`/404`, { replace: true });
            });
    };

    const schemeReturnsToFixed = (value) => {
        return parseFloat(value).toFixed(2);
    };
    const FilterByReturns = (e) => {
        const selectedReturns = e.target.value;
        setReturnsFilter(selectedReturns);
        let filteredResults = filteredCategoryData;
        if (selectedReturns) {
            filteredResults = filteredCategoryData.filter((amc) => {
                switch (selectedReturns) {
                    case '1 Month':
                        return amc.Returns.OneMonthReturn !== null;
                    case '3 Months':
                        return amc.Returns.ThreeMonthsReturn !== null;
                    case '6 Months':
                        return amc.Returns.SixMonthsReturn !== null;
                    case '1 Year':
                        return amc.Returns.OneYearReturn !== null;
                    case '3 Years':
                        return amc.Returns.ThreeYearReturn !== null;
                    case '5 Years':
                        return amc.Returns.FiveYearReturn !== null;
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
                sortedResults.sort((a, b) => a.Ratings - b.Ratings);
                break;
            case 'Rating- High to Low':
                sortedResults.sort((a, b) => b.Ratings - a.Ratings);
                break;
            default:
                break;
        }

        setFilteredCategoryData(sortedResults);
    };

    const getReturnForSort = (amc, selectedReturns) => {
        switch (selectedReturns) {
            case '1 Month':
                return parseFloat(amc.Returns.OneMonthReturn) || 0;
            case '3 Months':
                return parseFloat(amc.Returns.ThreeMonthsReturn) || 0;
            case '6 Months':
                return parseFloat(amc.Returns.SixMonthsReturn) || 0;
            case '1 Year':
                return parseFloat(amc.Returns.OneYearReturn) || 0;
            case '3 Years':
                return parseFloat(amc.Returns.ThreeYearReturn) || 0;
            case '5 Years':
                return parseFloat(amc.Returns.FiveYearReturn) || 0;
            default:
                return 0;
        }
    };
    const FilterByStars = (e) => {
        const selectedStars = e.target.value;
        let filteredResults = categoryData;
        if (selectedStars) {
            filteredResults = categoryData.filter((amc) => amc.Ratings.toString() === selectedStars);
        }
        setFilteredCategoryData(filteredResults);
    };
    const AMISearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);
        const filteredResults = categoryData.filter((amc) => {
            return (
                amc.SchemeName.toLowerCase().includes(searchTerm)
            );
        });
        setFilteredCategoryData(filteredResults);
    }
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
                                        <option value="" disabled hidden defaultValue selected>Ratings</option>
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
                                    <input type="text" className="input-control search-icon" placeholder="Search" onChange={AMISearch} />
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
                                        {filteredCategoryData.slice(startIndex, endIndex).map((amc, i) => (
                                            <div className='card' key={amc.AMCName}>
                                                <Link to={`/scheme/${amc.AMCName.toLowerCase().replace(/ /g, '-')}-${amc.SchemeCode}-${amc.SchemePlanCode}`} >
                                                    <div className="display-flex">
                                                        <div className='flex-i'>
                                                            <h3>{amc.SchemeName}</h3>
                                                            <p className='category'>
                                                                <span>Category : {amc.CategoryName}</span>
                                                                <span className='brder-left'>NAV : ₹{parseFloat(amc?.Returns?.CurrentNav).toFixed(2)}</span>
                                                                <span className='brder-left'>AUM: ₹{(parseFloat(amc?.Returns?.NetAsset).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + 'Cr.')}</span>
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
                                                                    <h5>{schemeReturnsToFixed(amc?.Returns?.OneMonthReturn)}%</h5>
                                                                </li>
                                                                <li className='fundlist'>
                                                                    <h5 className='time-period'>3M</h5>
                                                                    <h5>{schemeReturnsToFixed(amc?.Returns?.ThreeMonthsReturn)}%</h5>
                                                                </li>
                                                                <li className='fundlist'>
                                                                    <h5 className='time-period'>6M</h5>
                                                                    <h5>{schemeReturnsToFixed(amc?.Returns?.SixMonthsReturn)}%</h5>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className='right col-xl-5 col-md-6'>
                                                            <ul className='fundlist-flex border-left'>
                                                                <li className='fundlist text-center'>
                                                                    <h5 className='time-period'>1Y</h5>
                                                                    <h5>{schemeReturnsToFixed(amc?.Returns?.OneYearReturn)}%</h5>
                                                                </li>
                                                                <li className='fundlist'>
                                                                    <h5 className='time-period'>3Y</h5>
                                                                    <h5>{schemeReturnsToFixed(amc?.Returns?.ThreeYearReturn)}%</h5>
                                                                </li>
                                                                <li className='fundlist'>
                                                                    <h5 className='time-period'>5Y</h5>
                                                                    <h5>{schemeReturnsToFixed(amc?.Returns?.FiveYearReturn)}%</h5>
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
                    <div className='row'>
                        {
                            amcWiseData?.map((res) => {
                                return (
                                    <div className='col-md-12'>
                                        <h2 className='title-first'><span>Invest</span> in {res.AMCName ? res.AMCName + ' Schemes' : 'Mutual Fund Houses'} Online</h2>
                                        <div className="more-contentamc" dangerouslySetInnerHTML={{ __html: res.AMCDescription }} />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner