import React from 'react'
import { useState, useEffect } from 'react';
import rest from "../../Services/rest";
import NoData from "../../assets/images/brokerage-calculator/no-data.webp";
import LazyLoader from '../Common-features/LazyLoader';
function Banner() {
    const [toggleState, setToggleState] = useState(1);
    const [data, setData] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
    const [oiSpurtsData, setOiSpurtsData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 10
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = Math.min(startIndex + rowsPerPage, oiSpurtsData.length)
    const displayedData = oiSpurtsData.slice(startIndex, endIndex);
    const totalPages = Math.ceil(oiSpurtsData.length / rowsPerPage);
    const [exchangeToggle, setExchangeToggle] = useState(false);
    const [selectedConfig, setSelectedConfig] = useState({
        filter: 1,
        OISpurtsType: 1,
        segmentId: 2,
        DerivativeDataType: 1,
        DerivativeType: 1,
        ProductType: 2,
    });
    const [dropDownData] = useState({
        "2": [{ IndexName: 'Index Futures', Token: 1, DerivativeType: 1, DerivativeDataType: 2 }, { IndexName: 'Index Options', Token: 2, DerivativeType: 2, DerivativeDataType: 2 },
        { IndexName: 'Stock Futures', Token: 3, DerivativeType: 1, DerivativeDataType: 1 }, { IndexName: 'Stock Options', Token: 4, DerivativeType: 2, DerivativeDataType: 1 }],
        "5": [{ IndexName: 'Stock Options', Token: 4, DerivativeType: 2, DerivativeDataType: 1 }, { IndexName: 'Stock Futures', Token: 3, DerivativeType: 1, DerivativeDataType: 1 }],
        "7": [{ IndexName: 'Stock Futures', Token: 3, DerivativeType: 1, DerivativeDataType: 1 }],
        "13": [{ IndexName: 'Stock Options', Token: 4, DerivativeType: 2, DerivativeDataType: 1 }, { IndexName: 'Stock Futures', Token: 3, DerivativeType: 1, DerivativeDataType: 1 }]

    });
    const [isPreviousDisabled, setIsPreviousDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(false);
    const updateCurrentPage = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setIsPreviousDisabled(newPage === 1);
            setIsNextDisabled(newPage === totalPages);
            setCurrentPage(newPage);
        }
    };
    const activateFilter = (tabIndex) => {
        const segmentId = tabIndex === 1 ? 2 : tabIndex === 2 ? (exchangeToggle ? 7 : 5) : 13;
        const segmentData = dropDownData[segmentId];

        if (segmentData && segmentData.length > 0) {
            setSelectedConfig((prevConfig) => ({
                ...prevConfig,
                filter: tabIndex,
                segmentId: segmentId,
                ProductType: 0,
                DerivativeDataType: segmentData[0].DerivativeDataType,
                DerivativeType: segmentData[0].DerivativeType,
            }));

        } else {
            console.error(`Dropdown data for segmentId ${segmentId} is not defined or empty.`);
        }
    }
    const onDropDownChange = (event) => {
        const newIndex = parseInt(event.target.value);
        setSelectedConfig((prevConfig) => ({
            ...prevConfig,
            ProductType: newIndex,
            DerivativeDataType: dropDownData[prevConfig.segmentId][newIndex].DerivativeDataType,
            DerivativeType: dropDownData[prevConfig.segmentId][newIndex].DerivativeType,
        }));

    };

    const onToggleChange = () => {
        setExchangeToggle(!exchangeToggle);
        setSelectedConfig((prevConfig) => ({
            ...prevConfig,
            segmentId: exchangeToggle ? 5 : 7,
            ProductType: 0,
            
            DerivativeDataType: dropDownData[exchangeToggle ? 5 : 7][0].DerivativeDataType, 
            DerivativeType: dropDownData[exchangeToggle ? 5 : 7][0].DerivativeType,
        }));

    };

    const fetchOISpurts = () => {
        const request = {
            DerivativeDataType: selectedConfig.DerivativeDataType,
            DerivativeType: selectedConfig.DerivativeType,
            OISpurtsType: selectedConfig.OISpurtsType,
            SegmentId: selectedConfig.segmentId,
        };
        
        rest.getOISpurtsData(request).then(
            res => {
                if (res.Status === 'Success' && res.Response) {
                    const updatedData = res.Response.MostActiveList.map((element) => {
                        const LTP = element.LTP;
                        const percent = element.PerChange;
                        const change = (LTP * percent) / (100 + percent);
                        const priceDivisor = element.PriceDivisor;
                        return {
                            ...element,
                            LTP: LTP / priceDivisor,
                            Change: change / priceDivisor,
                            percent: percent,
                            textColor: percent > 0 ? 'profit' : percent === 0 ? '' : 'loss',
                            oiColor: element.OIPerChange > 0 ? 'profit' : element.OIPerChange < 0 ? 'loss' : '',

                        };
                    });
                    setOiSpurtsData(updatedData);
                } else {
                    setOiSpurtsData([]);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }
    useEffect(() => {
        fetchOISpurts();
        setCurrentPage(1)
    }, [selectedConfig]);

    const onSpurtsTypeChange = (spurtsType) => {
        setSelectedConfig((prevConfig) => ({
            ...prevConfig,
            OISpurtsType: spurtsType,
        }));
    };

    //for convert currency
    function formatNumber(number) {
        if (number >= 10000000) {
            return `${(number / 10000000).toFixed(2)} CR`;
        } else if (number >= 100000) {
            return `${(number / 100000).toFixed(2)} L`;
        } else {
            return number.toLocaleString();
        }
    }
    return (
        <>
            <section className='tab-section'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-8 col-md-12'>
                            <div className='banner-ttle text-center'>
                                <h1 className='title-first'>Open Interest <br />(OI Spurts)</h1>
                                <p>Get Live Open Interest (OI Spurts) Data for Futures & Options</p>
                            </div>
                        </div>
                    </div>
                    <div className='tabs-btn'>
                        <div className='row justify-content-center'>
                            <div className='col-xl-8 col-md-12'>
                                <ul className='list_group1'>
                                    <li className={selectedConfig?.filter === 1 ? 'list-group-item tabs active' : ' list-group-item '} onClick={() => activateFilter(1)}>Derivatives</li>
                                    <li className={selectedConfig?.filter === 2 ? 'list-group-item tabs active' : ' list-group-item '} onClick={() => activateFilter(2)}>Commodities</li>
                                    <li className={selectedConfig?.filter === 3 ? 'list-group-item tabs active' : ' list-group-item '} onClick={() => activateFilter(3)}>Currencies</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className='banner-section2'>
                <div className='container'>
                    <div className='main-sec'>
                        <div className='row'>
                            <div className='col-md-12'>


                                <div className="content-tabs">
                                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                                        <div className='table-section'>
                                            <div className='row'>
                                                <div className='col-xl-6 col-md-12'>
                                                    <div className='row align-items-center'>
                                                        <div className='col-md-6'>
                                                            <div className='list-drpdwn'>
                                                                <select
                                                                    id="spurtsType"
                                                                    name="spurtsType"
                                                                    className="btn-drp dropdown-toggle form-control"
                                                                    value={selectedConfig.OISpurtsType}
                                                                    onChange={(event) => onSpurtsTypeChange(parseInt(event.target.value))}
                                                                    aria-label="spurts type"
                                                                >
                                                                    <option value={1}>Long Built Up</option>
                                                                    <option value={2}>Short Built Up</option>
                                                                    <option value={3}>Short Covering</option>
                                                                    <option value={4}>Long Liquidation</option>
                                                                </select>

                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='list-drpdwn'>
                                                                <select
                                                                    id='basic2'
                                                                    name='productType'
                                                                    className='btn-drp dropdown-toggle form-control'
                                                                    value={selectedConfig.ProductType}
                                                                    onChange={onDropDownChange}
                                                                    aria-label='product type'
                                                                >
                                                                    {dropDownData[selectedConfig.segmentId]?.map((item, index) => (
                                                                        <option key={index} value={index}>
                                                                            {item.IndexName}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-xl-6 col-md-12'>
                                                    <div className='toggle-refresh'>
                                                        <div className=''>
                                                            {selectedConfig?.filter === 2 && (
                                                                <div className="toggle">
                                                                    <span className={`${!exchangeToggle ? 'selected' : ''}`}>MCX</span>
                                                                    <input
                                                                        type="checkbox"
                                                                        id="exchangeToggle"
                                                                        name="exchangeToggle"
                                                                        checked={exchangeToggle}
                                                                        onChange={onToggleChange}
                                                                    />
                                                                    <label></label>
                                                                    <span className={`${exchangeToggle ? 'selected' : ''}`}>NCDX</span>
                                                                </div>
                                                            )}
                                                        </div>
                                                        <div className='refresh-boxs'>
                                                            <button className='btn-refresh' onClick={() => fetchOISpurts()}>
                                                                <svg className='svg-icon' xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                                                    <path d="M25.866 15.8C24.9974 21.5736 20.0156 26 14 26C7.37258 26 2 20.6274 2 14C2 7.37258 7.37258 2 14 2C18.9207 2 23.1498 4.96183 25.0015 9.2" stroke="#004393" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                                                    <path d="M20 9.19995H25.28C25.6777 9.19995 26 8.8776 26 8.47995V3.19995" stroke="#004393" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div className='table-margin-cal'>
                                                <div className='table-responsive'>
                                                    {oiSpurtsData.length > 0 ? (
                                                        <table className="table table-striped ">
                                                            <thead>
                                                                <tr>
                                                                    <th className='text-start'>{selectedConfig.filter === 3 || selectedConfig.filter === 4 ? 'Name' : 'SecDesc'}</th>
                                                                    <th className='text-end'>LTP</th>
                                                                    <th className='text-end'>Change(%)</th>
                                                                    <th className='text-end'>OI</th>
                                                                    <th className='text-end'>OI Change(%)</th>
                                                                    <th className='text-end'>Volume</th>
                                                                    <th className='text-end'>Traded Value</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                {displayedData.map(row => (

                                                                    <tr key={row.id}>
                                                                        <td className='text-start'>{row.Name}</td>
                                                                        <td className='text-end'>{row.LTP}</td>
                                                                        <td className={`text-end ${row.textColor}`}>{Math.abs(row.percent)}</td>
                                                                        <td className='text-end'>{formatNumber(row.OI)}</td>
                                                                        <td className={`text-end ${row.oiColor}`}>{Math.abs(row.OIPerChange)}</td>
                                                                        <td className='text-end'>{formatNumber(row.Volume)}</td>
                                                                        <td className='text-end'>{formatNumber(row.TurnOver)}</td>
                                                                    </tr>
                                                                ))}
                                                                
                                                            </tbody>
                                                        </table>
                                                    ) : (
                                                        <div className="no-data-section">
                                                            <LazyLoader src={NoData} alt ="No Data Availble" height={200} width={260} className="img-fluid"></LazyLoader>
                                                            <p>No Data Available</p>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className='pagination-sec'>
                                                    <div className='paginations'>
                                                        
                                                        <div className='entries'>
                                                            <span>{`${startIndex + 1}-${endIndex} of ${oiSpurtsData.length}`}</span>
                                                        </div>
                                                        <div className='arrows'>
                                                            <div className='arrow-icons'>
                                                                <div className={`arro-pre ${isPreviousDisabled ? 'disabled' : ''}`} onClick={() => updateCurrentPage(currentPage - 1)} disabled={isPreviousDisabled}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='arrow-fill'>
                                                                        <path d="M15.705 7.41L14.295 6L8.29504 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z" fill="black" fillOpacity="0.56" />
                                                                    </svg>
                                                                </div>
                                                                <div className={`arrow-next ${isNextDisabled ? 'disabled' : ''}`} onClick={() => updateCurrentPage(currentPage + 1)} disabled={isNextDisabled}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='arrow-fill'>
                                                                        <path d="M9.70504 6L8.29504 7.41L12.875 12L8.29504 16.59L9.70504 18L15.705 12L9.70504 6Z" fill="black" fillOpacity="0.56" />
                                                                    </svg>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className={toggleState === 2 ? "content  active-content" : "content"}>
                                        Commodities
                                    </div>
                                    <div className={toggleState === 3 ? "content  active-content" : "content"}>
                                        Currencies
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner