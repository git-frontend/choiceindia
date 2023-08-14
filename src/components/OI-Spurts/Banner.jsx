import React from 'react'
import { useState, useEffect } from 'react';
import rest from "../../Services/rest";
import Dropdown from 'react-bootstrap/Dropdown';
function Banner() {
    const [toggleState, setToggleState] = useState(1);
    const [data, setData] = useState(0);
    const toggleTab = (index) => {
        setToggleState(index);
    }
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
    useEffect(() => {
        fetchOISpurts();
    }, []);

    const activateFilter = (tabIndex) => {
        setSelectedConfig((prevConfig) => ({
            ...prevConfig,
            filter: tabIndex,
            segmentId: tabIndex === 1 ? 2 : tabIndex === 2 ? (exchangeToggle ? 7 : 5) : 13,
            ProductType: 0,
            DerivativeDataType: dropDownData[tabIndex][0].DerivativeDataType,
            DerivativeType: dropDownData[tabIndex][0].DerivativeType,
        }));
        fetchOISpurts();
    }
    const onDropDownChange = () => {
        const segmentData = dropDownData[selectedConfig.segmentId];
        if (segmentData && segmentData.length > 0) {
            const item = segmentData[selectedConfig.ProductType];
            setSelectedConfig((prevConfig) => ({
                ...prevConfig,
                DerivativeDataType: item.DerivativeDataType,
                DerivativeType: item.DerivativeType,
            }));
        } else {
            console.error(`Dropdown data for segmentId ${selectedConfig.segmentId} is not defined or empty.`);
        }
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
                if (res.Status == "Success" && res.Response) {
                    console.log("d", res.Response.MostActiveList)
                }
            })
            // )
            .catch((error) => {

            });
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
                                    <li className={selectedConfig?.filter === 1 ? 'list-group-item tabs ' : ' list-group-item '} onClick={() => activateFilter(1)}>Commodities</li>
                                    <li className={selectedConfig?.filter === 1 ? 'list-group-item tabs  ' : ' list-group-item '} onClick={() => activateFilter(1)}>Currencies</li>
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
                                                                <select className="btn-drp dropdown-toggle form-control">
                                                                    <option
                                                                        value={1}
                                                                        className={selectedConfig.OISpurtsType === 1 ? "active" : ""}
                                                                        onClick={() => onSpurtsTypeChange(1)}
                                                                    >
                                                                        Long Built Up
                                                                    </option>
                                                                    <option
                                                                        value={2}
                                                                        className={selectedConfig.OISpurtsType === 2 ? "active" : ""}
                                                                        onClick={() => onSpurtsTypeChange(2)}
                                                                    >
                                                                        Short Built Up
                                                                    </option>
                                                                    <option
                                                                        value={3}
                                                                        className={selectedConfig.OISpurtsType === 3 ? "active" : ""}
                                                                        onClick={() => onSpurtsTypeChange(3)}
                                                                    >
                                                                        Short Covering
                                                                    </option>
                                                                    <option
                                                                        value={4}
                                                                        className={selectedConfig.OISpurtsType === 4 ? "active" : ""}
                                                                        onClick={() => onSpurtsTypeChange(4)}
                                                                    >
                                                                        Long Liquidation
                                                                    </option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className='col-md-6'>
                                                            <div className='list-drpdwn'>
                                                                <select
                                                                    id="basic2"
                                                                    name="productType"
                                                                    className="btn-drp dropdown-toggle form-control"
                                                                    value={selectedConfig.ProductType}
                                                                    onChange={onDropDownChange}
                                                                    aria-label="product type"
                                                                >
                                                                    {dropDownData[selectedConfig?.segmentId]?.map((item, index) => (
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
                                                            <div className="toggle">
                                                                <span>MCX</span>
                                                                <input type="checkbox" />
                                                                <label></label>
                                                                <span>NCDX</span>
                                                            </div>
                                                        </div>
                                                        <div className='refresh-boxs'>
                                                            <button className='btn-refresh'>
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
                                                    <table className="table table-striped ">
                                                        <thead>
                                                            <tr>
                                                                <th className='text-start'>Sec Desc</th>
                                                                <th className='text-end'>LTP</th>
                                                                <th className='text-end'>Change(%)</th>
                                                                <th className='text-end'>OI</th>
                                                                <th className='text-end'>OI Change(%)</th>
                                                                <th className='text-end'>Volume</th>
                                                                <th className='text-end'>Traded Value</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                                <td className='text-end'>9.10</td>
                                                                <td className='text-end profit'>8.38</td>
                                                                <td className='text-end'>4,082.00</td>
                                                                <td className='text-end profit'>37.12</td>
                                                                <td className='text-end'>8,703.00</td>
                                                                <td className='text-end'>78,567.91</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                                <td className='text-end'>9.10</td>
                                                                <td className='text-end profit'>8.38</td>
                                                                <td className='text-end'>4,082.00</td>
                                                                <td className='text-end profit'>37.12</td>
                                                                <td className='text-end'>8,703.00</td>
                                                                <td className='text-end'>78,567.91</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                                <td className='text-end'>9.10</td>
                                                                <td className='text-end profit'>8.38</td>
                                                                <td className='text-end'>4,082.00</td>
                                                                <td className='text-end profit'>37.12</td>
                                                                <td className='text-end'>8,703.00</td>
                                                                <td className='text-end'>78,567.91</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                                <td className='text-end'>9.10</td>
                                                                <td className='text-end profit'>8.38</td>
                                                                <td className='text-end'>4,082.00</td>
                                                                <td className='text-end profit'>37.12</td>
                                                                <td className='text-end'>8,703.00</td>
                                                                <td className='text-end'>78,567.91</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                                <td className='text-end'>9.10</td>
                                                                <td className='text-end loss'>-8.38</td>
                                                                <td className='text-end'>4,082.00</td>
                                                                <td className='text-end loss'>-37.12</td>
                                                                <td className='text-end'>8,703.00</td>
                                                                <td className='text-end'>78,567.91</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                                <td className='text-end'>9.10</td>
                                                                <td className='text-end profit'>8.38</td>
                                                                <td className='text-end'>4,082.00</td>
                                                                <td className='text-end profit'>37.12</td>
                                                                <td className='text-end'>8,703.00</td>
                                                                <td className='text-end'>78,567.91</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                                <td className='text-end'>9.10</td>
                                                                <td className='text-end profit'>8.38</td>
                                                                <td className='text-end'>4,082.00</td>
                                                                <td className='text-end profit'>37.12</td>
                                                                <td className='text-end'>8,703.00</td>
                                                                <td className='text-end'>78,567.91</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                                <td className='text-end'>9.10</td>
                                                                <td className='text-end loss'>-8.38</td>
                                                                <td className='text-end'>4,082.00</td>
                                                                <td className='text-end loss'>-37.12</td>
                                                                <td className='text-end'>8,703.00</td>
                                                                <td className='text-end'>78,567.91</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                                <td className='text-end'>9.10</td>
                                                                <td className='text-end profit'>8.38</td>
                                                                <td className='text-end'>4,082.00</td>
                                                                <td className='text-end profit'>37.12</td>
                                                                <td className='text-end'>8,703.00</td>
                                                                <td className='text-end'>78,567.91</td>
                                                            </tr>
                                                            <tr>
                                                                <td className='text-start'>NATURALGAS|23MAY23 PE 170.00</td>
                                                                <td className='text-end'>9.10</td>
                                                                <td className='text-end'>8.38</td>
                                                                <td className='text-end'>4,082.00</td>
                                                                <td className='text-end'>37.12</td>
                                                                <td className='text-end'>8,703.00</td>
                                                                <td className='text-end'>78,567.91</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div className='pagination-sec'>
                                                    <div className='paginations'>
                                                        <div className='rows-page'>
                                                            <span className='text-rows'>Rows per page:</span>
                                                            <Dropdown>
                                                                <Dropdown.Toggle variant="success" id="dropdown-basic" className='pagination-dropdwn'>
                                                                    01
                                                                </Dropdown.Toggle>
                                                                <Dropdown.Menu>
                                                                    <Dropdown.Item href="#" className='drop-items'>01</Dropdown.Item>
                                                                    <Dropdown.Item href="#" className='drop-items'>02</Dropdown.Item>
                                                                    <Dropdown.Item href="#" className='drop-items'>03</Dropdown.Item>
                                                                </Dropdown.Menu>
                                                            </Dropdown>
                                                        </div>
                                                        <div className='entries'>
                                                            <span>1-10 of 20</span>
                                                        </div>
                                                        <div className='arrows'>
                                                            <div className='arrow-icons'>
                                                                <div className='arro-pre'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className='arrow-fill'>
                                                                        <path d="M15.705 7.41L14.295 6L8.29504 12L14.295 18L15.705 16.59L11.125 12L15.705 7.41Z" fill="black" fillOpacity="0.56" />
                                                                    </svg>
                                                                </div>
                                                                <div className='arrow-next'>
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