import React, { useState, useEffect, useRef } from 'react';
import rest from "../../Services/rest";
import NewFormSection from '../Common-features/NewFormSection';
import { Accordion } from "react-bootstrap";
import { Link, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../Common-features/common-demat-suppotive.scss";
import FreeAmc from "../../assets/images/brokerage-calculator/Free_AMC_for_First_Year.svg";
import LowDP from "../../assets/images/brokerage-calculator/Low_DP_charges.svg";
import  NoAutoSquare from "../../assets/images/brokerage-calculator/No-Auto-Square.svg";
import FreeResearch from "../../assets/images/brokerage-calculator/Free_Research_Advisory.svg";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function Banner() {
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index) => {
        setToggleState(index);
    };
    const location = useLocation();
    const [activeTab, setActiveTab] = useState(1);
    const [errorMessages, setErrorMessages] = useState();
    const [marginConfig, setMarginConfig] = useState({
        contracts: [],
        action: false,
        searchInput: 'nifty',
        startPos: 0,
        limit: 10,
        searchedData: [],
        exchangeVisible: false,
        exchange: '',
        activeTab: 1,
        data: { 1: [], 2: [], 3: [], 4: [] },
        searchFocus: false,
        qty: 0,
        loader: false,
        contractData: {},
        totalSpan: 0,
        totalExposure: 0,
        totalMargin: 0,
        marginBenefit: 0,
        premium: 0,
        marketLot: 0,
        isOptionScrip: false,
        apiCount: 0,
        segmentArr: [1, 3, 6, 14, 8],
        spanLoader: false,
        tableLoader: false,
        isShowNA: false,
    });
    useEffect(() => {
        // Extract the tabIndex from the URL pathname
        const pathToTabIndexMap = {
            "/margin-calculator": 1,
            "/futures-and-options-margin-calculator": 2,
            "/commodity-margin-calculator": 3,
            "/forex-margin-calculator": 4,
        };
        const tabIndex = pathToTabIndexMap[location.pathname] || 1;


        setActiveTab(tabIndex);
        updateMarginConfig(tabIndex);
    }, [location.pathname, marginConfig.exchange]);

    const handleTabChange = (tabIndex) => {
        setActiveTab(tabIndex);

    };
    const updateMarginConfig = (tabIndex) => {
        let exchange = '';

        switch (tabIndex) {
            case 1:
                exchange = '';
                break;
            case 2:
                exchange = 'FO';
                break;
            case 3:
                exchange = 'COM';
                break;
            case 4:
                exchange = 'CD';
                break;
            default:
                exchange = '';
                break;
        }

        setMarginConfig((prevState) => ({
            ...prevState,
            activeTab: tabIndex,
            exchange: exchange,
        }));

        // Call getSearchData based on the selected tab and exchange
        if (tabIndex === 1) {
            getSearchData('');
        } else {
            getSearchData(exchange);
        }
    };



    const handleSearchInputChange = (e) => {
        const updatedSearchInput = e.target.value;
        setMarginConfig(prevState => ({ ...prevState, searchInput: updatedSearchInput }));
        setMarginConfig(prevState => ({
            ...prevState,
            searchedData: [],

        }));

        if (marginConfig.searchInput.length === 0) {
            setMarginConfig(prevState => ({
                ...prevState,
                startPos: 0,
                searchedData: [],
            }));
        } else if (marginConfig.searchInput.length === 1 || marginConfig.searchInput.length === 2) {
            setMarginConfig(prevState => ({
                ...prevState,
                startPos: 0,
                searchedData: [],
            }));
        } else if (marginConfig.searchInput.trim().length >= 3) {
            getSearchData(updatedSearchInput);
        }

    };

    const getSearchData = (exchange) => {
        setMarginConfig((prevState) => ({ ...prevState, loader: true }));
        setMarginConfig((prevMarginConfig) => ({
            ...prevMarginConfig,
            exchange: exchange,
        }));
        const data = {
            "strScripName": marginConfig.searchInput,
            "StartPos": marginConfig.startPos,
            "NoOfRecords": marginConfig.limit,
            "strSegment": marginConfig.exchange,
        };

        rest.getSearchData(data)
            .then((res) => {
                if (res.Status === "Success" && res.Response && res.Response.length) {
                    let searchedData = [...marginConfig.searchedData];
                    if (marginConfig.activeTab === 1) {
                        searchedData = res.Response.filter(item => item.SegmentId !== 1 && item.SegmentId !== 3);
                    } else {
                        searchedData = res.Response;
                    }
                    setMarginConfig((prevState) => ({
                        ...prevState,
                        datalength: res.Response.length,
                        searchedData,
                        data: { ...prevState.data, [marginConfig.activeTab]: searchedData },
                    }));
                } else {
                    setMarginConfig((prevState) => ({
                        ...prevState,
                        searchedData: [],
                        searchFocus: true,
                    }));
                }
            })
            .catch((err) => {
                // console.log("err", err);
                setMarginConfig((prevState) => ({
                    ...prevState,
                    searchedData: [],
                    searchFocus: true,
                }));
            })
            .finally(() => {
                setMarginConfig((prevState) => ({ ...prevState, loader: false }));
            });
    };
    const getScrip = (scripData) => {
        const searchInput = marginConfig.segmentArr.indexOf(scripData.SegmentId) > -1
            ? scripData.Symbol
            : scripData.SecName.replace('|', ' ');
        const qty = scripData.MarketLot;
        const marketLot = qty;
        const updatedContractData = {
            symbol: marginConfig.segmentArr.indexOf(scripData.SegmentId) > -1
                ? scripData.Symbol
                : scripData.SecName.replace('|', ' '),
            secDesc: scripData.SecDesc,
            qty: qty,
            action: marginConfig.action,
            Token: scripData.Token,
            SegmentId: scripData.SegmentId,
            IM: 0,
            exposure: 0,
            total: 0,
            strike: ["CE", "PE"].indexOf(scripData.OptionType) > -1
                ? (scripData.StrikePrice / scripData.PriceDivisor >= 0
                    ? scripData.StrikePrice / scripData.PriceDivisor
                    : 0)
                : 'NA',
            optionType: scripData.OptionType,
            marketLot: marketLot
        };

        setMarginConfig((prevState) => ({
            ...prevState,
            searchInput,
            qty,
            marketLot,
            contractData: updatedContractData,
            searchFocus: false,
            searchedData: []
        }));
    };




    const allowOnlyDigits = (value) => {
        const pattern = /^[0-9]*$/;
        return pattern.test(value);
    }

    const addResetContract = (isAdd) => {
        if (!marginConfig.qty || marginConfig.qty === '0') return;

        if (isAdd) {
            let isCheck;
            marginConfig.isOptionScrip =
                ['PE', 'CE'].indexOf(marginConfig.contractData.optionType) > -1 &&
                marginConfig.contractData.action;

            if (marginConfig.searchInput) {
                isCheck = marginConfig.contracts.find(
                    (element) => element.Token === marginConfig.contractData.Token
                );
            }

            if (
                isCheck &&
                (marginConfig.contractData.qty !== marginConfig.qty ||
                    marginConfig.contractData.action !== marginConfig.action)
            ) {
                marginConfig.contractData.qty = marginConfig.qty.toString().replace(/^0+/, '');
                marginConfig.contractData.action = marginConfig.action;
                marginConfig.contracts = marginConfig.contracts.map((element) => {
                    if (element.Token === marginConfig.contractData.Token) {
                        element.qty = marginConfig.qty.toString().replace(/^0+/, '');
                        element.action = marginConfig.action;
                    }
                    return element;
                });
                calculateQty();
                callMargin();
                return;
            } else if (
                !marginConfig.contractData.symbol ||
                isCheck ||
                !marginConfig.searchInput
            ) {
                return false;
            }

            marginConfig.contractData.qty = marginConfig.qty.toString().replace(/^0+/, '');
            marginConfig.contractData.action = marginConfig.action;
            marginConfig.contracts = [...marginConfig.contracts, marginConfig.contractData];
            calculateQty();
            callMargin();

        } else {
            setMarginConfig((prevState) => ({
                ...prevState,
                contracts: [],
                isOptionScrip: false,
                totalSpan: 0,
                totalExposure: 0,
                totalMargin: 0,
                marginBenefit: 0,
                premium: 0,
                qty: marginConfig.marketLot,
                isShowNA: false,
            }));

        }
    };




    const calculateQty = () => {
        let result = parseInt(marginConfig.qty) / marginConfig.marketLot;

        if (Number.isInteger(result)) {
            return;
        } else {
            result = Math.trunc(result) + 1;
            const newQty = result * marginConfig.marketLot;

            setMarginConfig(prevState => ({
                ...prevState,
                qty: newQty,
                contractData: {
                    ...prevState.contractData,
                    qty: newQty.toString().replace(/^0+/, ''),
                },
            }));
        }
    };
    const callMargin = (isFromDelete) => {
        setMarginConfig(prevState => ({
            ...prevState,
            apiCount: 0,
        }));

        const numOfSeg = [...new Set(marginConfig.contracts.map(item => item.SegmentId))];

        for (let i = 0; i < numOfSeg.length; i++) {
            const scripArray = marginConfig.contracts.filter(item => item.SegmentId === numOfSeg[i]);
            getMarginData(scripArray, i, numOfSeg.length, isFromDelete);
        }
    };

    const getMarginData = (scripArray, numOfSegLen, isFromDelete) => {
        const request = {
            segmentId: scripArray[0].SegmentId,
            token_qty: createTokenQtyString(scripArray),
        };

        if (!marginConfig.apiCount && !isFromDelete) {
            setMarginConfig(prevState => ({
                ...prevState,
                spanLoader: true,
                tableLoader: true,
            }));
        }


        rest.getMarginCalculatorData(request.segmentId, request.token_qty)
            .then(res => {
                if (!marginConfig.apiCount) {
                    setMarginConfig(prevState => ({
                        ...prevState,
                        totalSpan: 0,
                        totalExposure: 0,
                        totalMargin: 0,
                        marginBenefit: 0,
                        premium: 0,
                    }));
                }

                setMarginConfig(prevState => ({
                    ...prevState,
                    apiCount: prevState.apiCount + 1,
                }));

                if (res.Status === 'Success' && res.Response && res.Response.margins && res.Response.margins.length) {
                    setData(res.Response.margins);

                    setMarginConfig(prevState => ({
                        ...prevState,
                        
                        totalSpan: res.Response.Span_Summary.Span,
                        totalExposure: res.Response.Span_Summary.ExpMgn,
                        marginBenefit: res.Response.Span_Summary.MgnBenefit,
                        premium: res.Response.Span_Summary.OptionPremium,
                        totalMargin: res.Response.Span_Summary.TotalMgn,
                    }));

                    if (!marginConfig.contracts.length) {
                        setMarginConfig(prevState => ({
                            ...prevState,
                            totalSpan: 0,
                            totalExposure: 0,
                            totalMargin: 0,
                            marginBenefit: 0,
                            premium: 0,
                        }));
                    }
                } else {
                    // Handle the case when the API call is not successful
                    console.error('Error: Something Went Wrong');
                    setMarginConfig(prevState => ({
                        ...prevState,
                        tableLoader: false,
                    }));
                }
            })
            .catch(err => {
                setMarginConfig(prevState => ({
                    ...prevState,
                    tableLoader: false,
                }));
                console.error('Error: Something Went Wrong', err);
            })
            .finally(() => {
                if (numOfSegLen === marginConfig.apiCount) {
                    setMarginConfig(prevState => ({
                        ...prevState,
                        spanLoader: false,
                    }));


                    if (!marginConfig.totalMargin) {
                        setMarginConfig(prevState => ({
                            ...prevState,
                            totalMargin: prevState.totalSpan + prevState.totalExposure,
                        }));
                    }

                    setMarginConfig(prevState => ({
                        ...prevState,
                        isShowNA: !(prevState.totalMargin || prevState.totalSpan || prevState.totalExposure),
                    }));
                }

            });
    };

    // o set span margin, exposure margin, total
    const setData = (contractData) => {
        const updatedContracts = marginConfig.contracts.map((element) => {
            const scrip = contractData.filter((data) => element.Token === data.Token);

            if (scrip.length) {
                element.IM = scrip[0].InitialMargin;
                element.exposure = scrip[0].ExpMgn;
                element.total = element.IM + element.exposure;
                element.qty = element.qty.toString().replace(/^0+/, '');
            }
            return element;
        });
        setMarginConfig((prevState) => ({
            ...prevState,
            contracts: updatedContracts,
            tableLoader: false,
        }));
    };

    
    const createTokenQtyString = (scripArray) => {
        let tokenQty = '';
        scripArray.forEach((element, index) => {
            const action = element.action ? '-' : ''; // Add '-' for 'SELL' action
            tokenQty += `${element.Token}%7C${action}${element.qty}${index < scripArray.length - 1 ? '~' : ''}`;
        });
        return tokenQty;
    };

    const getSellableOptionScrip = () => {
        const optionScrip = marginConfig.contracts.filter((item) => {
            return ['PE', 'CE'].indexOf(item.optionType) > -1 && item.action;
        });
        return optionScrip;
    };
    
    const deleteContract = (index) => {
        let isDeletedDataOption = false;
        if (marginConfig.contracts.length < 2) {
            setMarginConfig((prevState) => ({
                ...prevState,
                totalSpan: 0,
                totalExposure: 0,
                totalMargin: 0,
                marginBenefit: 0,
                premium: 0,
                contracts: [],
                isOptionScrip: false,
                isShowNA: false,
            }));
        } else {
            isDeletedDataOption =
                ['PE', 'CE'].indexOf(marginConfig.contracts[index].optionType) > -1 &&
                marginConfig.contracts[index].action;

            const updatedContracts = [...marginConfig.contracts];
            updatedContracts.splice(index, 1);

            const newTotalExposure = updatedContracts.reduce(
                (total, contract) => total + contract.exposure,
                0
            );
            const newTotalMargin = updatedContracts.reduce(
                (total, contract) => total + contract.total,
                0
            );
            const newTotalSpan = updatedContracts.reduce(
                (total, contract) => total + (contract.IM >= 0 ? contract.IM : 0),
                0
            );
            const newMarginBenefit = updatedContracts.reduce(
                (total, contract) => total + contract.marginBenefit,
                0
            );

            setMarginConfig((prevState) => ({
                ...prevState,
                contracts: updatedContracts,
                totalExposure: newTotalExposure,
                totalMargin: newTotalMargin,
                totalSpan: newTotalSpan,
                marginBenefit: newMarginBenefit,
            }));

            if (isDeletedDataOption) {
                const hasSellableOptionScrip =
                    getSellableOptionScrip(updatedContracts).length > 0;
                setMarginConfig((prevState) => ({
                    ...prevState,
                    isOptionScrip: hasSellableOptionScrip,
                }));
            }
        }
    };

    const sections = [
        {
          title:['Open a',<span className="bold_text"> Free </span>, 'Demat\n Account in', <span className="bold_text"> 5 Mins.</span>],
          images: [FreeAmc,FreeResearch, LowDP, NoAutoSquare,],
          subtitle: ['Free AMC for First Year', 'Free Research', 'Low DP Charges (₹ 10)','No Auto Square Off Charges'],
          alt:['Demat account yearly AMC','open demat account with research','DP Charges after Demat Account Opening','Free Demat Auto square off charges']
        },
       
      ];

    return (
        <>
            <section className='banner-section2'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-9 col-md-12'>
                            {
                                activeTab == 1 ?
                                    <div className='banner-ttle text-center'>
                                        <h1 className='title-first'>Margin Calculator</h1>
                                        <p>Use Choice FinX Margin Calculator to calculate the margin for Future & Option (F&O), Commodity, and Currency segments.</p>
                                    </div> :
                                    activeTab == 2 ?
                                        <div className='banner-ttle text-center'>
                                            <h1 className='title-first'>F&O Margin Calculator</h1>
                                            <p>Calculate the margin for Future & Option (F&O) selling</p>
                                        </div> :
                                        activeTab == 3 ?
                                            <div className='banner-ttle text-center'>
                                                <h1 className='title-first'>Commodity Margin Calculator</h1>
                                                <p>Calculate the margin for commodity.</p>
                                            </div> :
                                            activeTab == 4 ?
                                                <div className='banner-ttle text-center'>
                                                    <h1 className='title-first'>Forex Margin Calculator</h1>
                                                    <p>Calculate the margin for Currency</p>
                                                </div> :
                                                ""
                            }

                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div className='tabs-btn'>
                                <div className='row justify-content-center'>
                                    <div className='col-xl-8 col-md-12'>
                                        
                                        <ul className='list_group1'>
                                            <li className={activeTab === 1 ? "list-group-item tabs active" : "list-group-item"}>
                                                <Link className='urllinks' to="/margin-calculator">All</Link>
                                            </li>
                                            <li className={activeTab === 2 ? "list-group-item tabs active" : "list-group-item"}>
                                                <Link className='urllinks' to="/futures-and-options-margin-calculator">F&O</Link>
                                            </li>
                                            <li className={activeTab === 3 ? "list-group-item tabs active" : "list-group-item"}>
                                                <Link className='urllinks' to="/commodity-margin-calculator">Commodity</Link>
                                            </li>
                                            <li className={activeTab === 4 ? "list-group-item tabs active" : "list-group-item"}>
                                                <Link className='urllinks' to="/forex-margin-calculator">Forex</Link>
                                            </li>
                                        </ul>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='banner-section'>
                <div className='container'>
                    <div className='field-sec'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className="content-tabs">
                                    <div className="content active-content content">
                                        <Form name="marginCalForm">
                                            <div className='form-section'>
                                                <div className='left-sec'>
                                                    <div className="row-sec row-flex">
                                                        <div className="flex-items">
                                                            <p className='frm-label'>Search</p>

                                                            <Form.Control
                                                                className="form-control input-font search-icon"
                                                                autoComplete="off"
                                                                onChange={handleSearchInputChange}
                                                                value={marginConfig.searchInput}
                                                            />
                                                            <ul className="brokerage-search-result margin-brokerage">
                                                                {(!marginConfig.loader && !marginConfig.searchedData?.length && marginConfig.searchInput?.length >= 3 && marginConfig.searchFocus) ||
                                                                    (!marginConfig.loader && marginConfig.searchInput && marginConfig.searchInput?.length > 0 && marginConfig.searchInput?.length <= 2) ? (
                                                                    <li className="text-left d-flex brokerage-search-list">
                                                                        <span>No Record Found</span>
                                                                    </li>
                                                                ) : (
                                                                    marginConfig.searchedData.map((item, index) => (
                                                                        <li className="brokerage-search-list" key={index} onClick={() => getScrip(item)}>
                                                                            <span className="symbol">{marginConfig.segmentArr.indexOf(item?.SegmentId) > -1
                                                                                ? item?.Symbol
                                                                                : item?.SecName.replace('|', ' ')}</span>
                                                                            <span className="exchange">{item.ExchangeSegment}</span>
                                                                        </li>
                                                                    ))
                                                                )}
                                                            </ul>






                                                        </div>
                                                        <div className="flex-items">
                                                            <p className='frm-label'>Quantity</p>
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control input-font"
                                                                maxLength="7"
                                                                value={marginConfig.qty}
                                                                onChange={(e) => {
                                                                    if (allowOnlyDigits(e.target.value)) {
                                                                        setMarginConfig({ ...marginConfig, qty: e.target.value });
                                                                    }
                                                                }}
                                                                required
                                                            />


                                                            {(!marginConfig.qty || marginConfig.qty < 1) ? (
                                                                <p className="animate error marginpara">
                                                                    Please enter a valid quantity.
                                                                </p>
                                                            ) : (
                                                                <p className="marginpara">Lot Size = {marginConfig.marketLot}</p>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="row-flex radio-section">
                                                        <div className="flex-items">
                                                            <div className="custom_radio">
                                                                <div className='radio-flex'>
                                                                    <input
                                                                        type="radio"
                                                                        id="featured-1"
                                                                        name="featured"
                                                                        checked={!marginConfig.action}
                                                                        onChange={() => setMarginConfig(prevState => ({ ...prevState, action: false }))}
                                                                    />
                                                                    <label htmlFor="featured-1">BUY</label>
                                                                </div>
                                                                <div className='radio-flex'>
                                                                    <input
                                                                        type="radio"
                                                                        id="featured-2"
                                                                        name="featured"
                                                                        checked={marginConfig.action}
                                                                        onChange={() => setMarginConfig(prevState => ({ ...prevState, action: true }))}
                                                                    />
                                                                    <label htmlFor="featured-2">SELL</label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-items">
                                                            <div className='button-sec'>
                                                                <div className='btn-items'>
                                                                    <Button className="btn-add btn btn-primary" onClick={() => addResetContract(true)}
                                                                        disabled={marginConfig.marketLot < 1 || marginConfig.qty < 1}
                                                                    >Add</Button>
                                                                </div>
                                                                <div className='btn-items'>
                                                                    <Button className="btn-reset btn btn-primary" onClick={() => addResetContract(false)}>Reset All</Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='right-sec'>
                                                    <div className='brokerage-card'>
                                                        <div className='card-flex'>
                                                            <div className='flex-items'>
                                                                <span>Span Margin</span>
                                                            </div>
                                                            <div className='flex-items'>
                                                                <span>
                                                                    {!marginConfig.isShowNA && <span>₹</span>}
                                                                    {marginConfig.spanLoader
                                                                        ? 'Calculating...'
                                                                        : !marginConfig.isShowNA
                                                                            ? (marginConfig.totalSpan >= 0 ? marginConfig.totalSpan : 0.00).toFixed(2)
                                                                            : 'NA'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='card-flex'>
                                                            <div className='flex-items'>
                                                                <span>Exposure Margin</span>
                                                            </div>
                                                            <div className='flex-items'>
                                                                <span>
                                                                    {!marginConfig.isShowNA && <span>₹</span>}
                                                                    {marginConfig.spanLoader
                                                                        ? 'Calculating...'
                                                                        : !marginConfig.isShowNA
                                                                            ? (marginConfig.totalExposure >= 0 ? marginConfig.totalExposure : 0.00).toFixed(2)
                                                                            : 'NA'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='card-flex brd'></div>
                                                        <div className='card-flex'>
                                                            <div className='flex-items'>
                                                                <span className='text-bold'>Total Margin</span>
                                                            </div>
                                                            <div className='flex-items'>
                                                                <span className='text-bold'>
                                                                    {!marginConfig.isShowNA && <span>₹</span>}
                                                                    {marginConfig.spanLoader
                                                                        ? 'Calculating...'
                                                                        : !marginConfig.isShowNA
                                                                            ? (marginConfig.totalMargin >= 0 ? marginConfig.totalMargin : 0.00).toFixed(2)
                                                                            : 'NA'}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className='card-flex'>
                                                            <div className='flex-items'>

                                                                <span>Margin Benefit</span>

                                                            </div>
                                                            <div className='flex-items'>
                                                                <span className='txt-success'>
                                                                    {!marginConfig.isShowNA ? '₹' : ''}
                                                                    &nbsp;
                                                                    {marginConfig.spanLoader
                                                                        ? 'Calculating...'
                                                                        : (!marginConfig.isShowNA
                                                                            ? (marginConfig.marginBenefit >= 0 ? marginConfig.marginBenefit.toFixed(2) : '0.00')
                                                                            : 'NA')}
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                        <div className='table-margin-cal'>
                                            <div className='table-responsive'>
                                                <table className="table table-striped ">
                                                    <thead>
                                                        <tr>
                                                            <th className='text-start'>Contract</th>
                                                            <th className='text-end'>Qty</th>
                                                            <th className='text-end'>Trade</th>
                                                            <th className='text-end'>Strike</th>
                                                            <th className='text-end'>Span Margin</th>
                                                            <th className='text-end'>Exposure Margin</th>
                                                            <th className='text-end'>Total Margin</th>
                                                            <th className='text-center'>Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {!marginConfig.contracts.length && (
                                                            <tr>
                                                                <td colSpan="8" className="no-data">Search and Add contracts to calculate margin.</td>
                                                            </tr>
                                                        )}
                                                        {marginConfig.contracts.map((item, index) => (
                                                            <tr key={index}>
                                                                <td className='text-start'>{item.symbol}</td>
                                                                <td className='text-end'>{item.qty}</td>
                                                                <td className='text-end'>{item.action ? 'SELL' : 'BUY'}</td>
                                                                <td className='text-end'>{item.strike || 0}</td>
                                                                <td className='text-end'>{(marginConfig.tableLoader ? 'Calculating...' : (item.IM >= 0 ? item.IM : 0.00).toFixed(2))}</td>
                                                                <td className='text-end'>{(marginConfig.tableLoader ? 'Calculating...' : (item.exposure >= 0 ? item.exposure : 0.00).toFixed(2))}</td>
                                                                <td className='text-end'>{(marginConfig.tableLoader ? 'Calculating...' : (item.total >= 0 ? item.total : 0.00).toFixed(2))}</td>
                                                                <td className='text-center'>
                                                                    <div className="tooltip2">
                                                                        <button style={{ border: 'none' }} onClick={() => deleteContract(index)}>
                                                                            <svg className="delete-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                                                <path d="M6 4C6 2.34315 7.3431 1 9 1C10.6569 1 12 2.34315 12 4M6 4H12M6 4H3M12 4H15M3 4H1M3 4V15C3 16.1046 3.89543 17 5 17H13C14.1046 17 15 16.1046 15 15V4M15 4H17" stroke="#221F20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                                            </svg>
                                                                        </button>

                                                                        <span className="tooltiptext">Delete</span>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        ))}
                                                       
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className='note'>
                                            <p>Note: On non-trading hours, margin value displayed may vary with actual margin required for trade.</p>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz" >
            <NewFormSection sections={sections} />
            </GoogleReCaptchaProvider>
            <section className='more-content'>
                <div className='container'>
                    {
                        activeTab == 1 ?
                            <div className="row">
                                <div className='col-md-12'>
                                    <div className='title-content'>
                                        <h2 className='title-secnd'>Calculate Your Trading Margin</h2>
                                    </div>
                                    <div>
                                        <p>Understanding margins is vital whether you're a business owner, an investor, or someone interested in financial trading. But what does this margin refer to?</p>
                                        <p>A margin is a loan that a trader can obtain from their stockbroker to purchase assets they may not be able to afford. You can get a margin by putting up cash or securities as collateral.</p>
                                        <p>A single online margin calculator can calculate margins for all trading, such as Equity, Futures and Options (F&O), Commodity and Currency Exchanges.</p>
                                        <p>Let us go ahead and cover what a  margin calculator is, its types, workings, benefits, and how it has become an indispensable tool in trading.</p>
                                        <h3 className='seo-h3'>What is a Margin Calculator?</h3>
                                        <p>The margin needed for trading or investing can be calculated using a helpful tool called a margin calculator. To determine the amount of money one needs to borrow from a stockbroker to afford an asset, the calculator takes into account many aspects, including:</p>
                                        <ul>
                                            <li>Leverage</li>
                                            <li>Asset Price</li>
                                            <li>Desired Margin Level </li>
                                        </ul>
                                        <p>The calculator instantly calculates the necessary margin after these inputs, enabling traders and investors to make wise judgements about their holdings and appropriately manage their risk.</p>
                                        <h3 className='seo-h3'>What is the SPAN Margin Calculator?</h3>
                                        <p>Standardised Portfolio Analysis of Risk (SPAN), a well-known system that any Options and Futures (F&O) exchanges have adopted globally, determines the SPAN margin. The SPAN Margin uses a variety of parameters, including volatility and underlying price movements, to determine the span margin and exposure margin required by the exchanges. The exposure margin is charged over the SPAN margin to protect against the broker's liability which may arise due to market volatility. Also called the additional margin, the exposure margin is often charged as 2% of the contract value.</p>
                                        <p>Based on a sophisticated collection of algorithms, the SPAN margin calculator evaluates margin needs based on an overall evaluation of the one-day risk for a trader's account. It is determined using a risk array that establishes each contract's gains or losses for many scenarios. These circumstances— risk scenarios and profit or loss measurements —concern changes in price, volatility, and reduced expiration time.</p>
                                        <h3 className='seo-h3'>Types of Margins</h3>
                                        <p>When we talk about margins in the stock market, we talk about both the cash and F&O markets.</p>
                                        <p>Within the cash market, the types of margins are:</p>
                                        <ul>
                                            <li>Value at risk margin</li>
                                            <li>Extreme loss margin</li>
                                            <li>Mark to-market margin</li>
                                        </ul>
                                        <p>Within the F&O market, the types of margins are:</p>
                                        <ul className='mrg-3'>
                                            <li>Initial margin</li>
                                            <li>Exposure margin</li>
                                        </ul>
                                        <h3 className='seo-h3'>How Does the Margin Calculator Work?</h3>
                                        <p>An online margin calculator is a web-based tool that helps stock traders calculate the margin they need.</p>
                                        <p>The calculator requires the trader to enter details based on which it will calculate and give accurate results, such as:</p>
                                        <ul>
                                            <li>Trading instrument</li>
                                            <li>Lot size</li>
                                            <li>Leverage</li>
                                            <li>currency</li>
                                        </ul>
                                        <p>A margin calculator can help you determine how much money you can borrow from a stockbroker to buy financial products such as stocks, futures, options, and more. You can check margins across equity, commodities, options, MIS, NSE, and intraday using an online NSE margin calculator or intraday margin calculator. </p>
                                        <p>The margin on equities for any stock or ETF is calculated as follows:</p>
                                        <p>Value At Risk + Extreme Loss Margin</p>
                                        <p>In the case of calculating the margin on futures and options for equities, commodities, or currencies, the calculation is:</p>
                                        <p>Standard Portfolio Analysis of Risk + Exposure Margin</p>
                                        <h3 className='seo-h3'>How to Use an Online Margin Calculator?</h3>
                                        <p>Follow these steps to use a margin calculator:</p>
                                        <ol className='mrg-3'>
                                            <li>Choose any online stock margin calculator.</li>
                                            <li>Once you have chosen your online margin calculator, enter the necessary details such as trade type, size, leverage used, and account currency.</li>
                                            <li>Calculate the required margin for your trade.</li>
                                            <li>Once the calculation is done evaluate if you have enough margin in your account to pay for the trade.</li>
                                        </ol>
                                        <h3 className='seo-h3'>Benefits of Using an Online Margin Calculator?</h3>
                                        <p>There are several benefits to using an online margin calculator that is beneficial to traders, such as:</p>
                                        <p><strong>Gives traders information before a trade:</strong> Traders can use a margin calculator to figure out how much money they need to deposit at the brokerage to begin a deal. </p>
                                        <p><strong>Correct Calculations:</strong>  Another reason that these calculators have become indispensable tools is because of their accuracy. Trading professionals must take into account many variables when determining complex margin requirements.</p>
                                        <p><strong>Speedy and Practical:</strong> As long as a trader has an online connection, they can use the calculator whenever and wherever they like. </p>
                                        <p><strong>Personalised Settings:</strong> Online margin calculators frequently offer customised options. To suit their trading strategy, traders can adjust the leverage, lot size, and other parameters.</p>
                                        <p>Using an online margin calculator equips traders with accurate numbers within minutes. The calculators have user-friendly interfaces and customisable parameters, making them an easy choice.</p>
                                        <p>It is always a wise choice to remember that then calculators are indicative in nature, and they should not be solely used to take investment decisions. Before you make any drastic investments check with an industry expert. </p>
                                    </div>
                                </div>
                            </div> :
                            activeTab == 2 ?

                                <div className="row">
                                    <div className='col-md-12'>
                                        <div className='title-content'>
                                            <h2 className='title-secnd'>Future & Option Margin Calculator</h2>
                                        </div>
                                        <div>
                                            <p>Trading in derivative products like futures and options (F&O) contracts requires you to keep a margin in your trading account to cover potential losses. These losses may arise due to market volatility, lack of risk management, or adverse price movements of the underlying assets. Thus, it becomes crucial to calculate your F&O margin. </p>
                                            <p>An F&O margin calculator can help you with just that. In this blog, we’ll cover the details of the F&O margin calculator, how it works, and how traders can use it.</p>
                                            <h3 className='seo-h3'>What is F&O Margin Calculator?</h3>
                                            <p>A future and option margin calculator is a valuable tool for trading in F&O. This calculator allows you to determine the amount required to be deposited as collateral.</p>
                                            <p>When you trade in options contracts, the risk is limited to the premium paid. However, with contracts, there might be higher risks. With the introduction of F&O contracts by the Securities and Exchange Board of India, a framework was set to collect an initial margin from traders to manage these risks.</p>
                                            <p>This calculator factors in underlying assets, volatility, strike price, expiry date, and interest rates. Simply put, an F&O margin calculator helps optimize your trading strategies and ensures you have enough funds to cover losses.</p>
                                            <h3 className='seo-h3'>How Does a Future & Option Margin Calculator Work?</h3>
                                            <p>A future & options margin calculator considers certain inputs related to the specific futures or options contracts. Furthermore, it calculates the margin based on the predefined formulas.</p>
                                            <p>Let’s discuss in depth the working of this margin calculator for option selling and future contracts:</p>
                                            <h5 className='seo-h5'>Contract Specifications</h5>
                                            <p>The F&O margin calculator uses the specific details of a contract to define the terms under it. It includes information like the expiration date of the contracts, contract size, and the strike price for options.</p>
                                            <p>You can quickly get the margin amount with an online option selling margin calculator with the Choice F&O calculator.</p>
                                            <h5 className='seo-h5'>Market Data</h5>
                                            <p>This F&O margin calculator considers real-time data or historical market data to provide accurate results. You can also get the margin amount with the online future margin calculator.</p>
                                            <h5 className='seo-h5'>Calculation Models</h5>
                                            <p>The future & option calculator applies mathematical algorithms to determine the margin for traders. Additionally, it considers price volatility and risk factors.</p>
                                            <h5 className='seo-h5'>Risk Parameters</h5>
                                            <p>By inputting different variables into this calculator, you can make informed decisions about trading. Additionally, the future & option calculator includes risk management parameters that allow you to evaluate the risk-reward ratio of the trade.</p>
                                            <h3 className='seo-h3'>How to Use an F&O Margin Calculator?</h3>
                                            <p>The calculation process for future & options contracts is simple. Follow the steps below to use an F&O margin calculator.</p>
                                            <ol>
                                                <li>Choose a future & option margin calculator online.</li>
                                                <li>Next, select an exchange. You can select either of these options- MCX, NFO, CDX, or NCDX.</li>
                                                <li>Now you will have to select the product type.</li>
                                                <li>The ‘symbol’ section lets you select the name of the stock whose margin you want to determine. Enter the details based on your contract type.</li>
                                                <li>Finally, fill in the net quantity you want to add and choose between buy or sell.</li>
                                            </ol>
                                            <p>Once you’ve completed this procedure, you’ll get your initial, exposure, and total margin.</p>
                                            <p>The futures & options calculator is a valuable tool for investors and traders involved in derivative trading. This online tool can calculate your required F&O margin in no time.</p>
                                            <p>Whether you want to evaluate trading strategies or risk-reward ratios, this calculator plays a vital role in trading. You can choose from many online F&O margin calculators and proceed to accomplish your financial goals.</p>
                                        </div>
                                    </div>
                                </div> :
                                activeTab == 3 ?
                                    <div className="row">
                                        <div className='col-md-12'>
                                            <div className='title-content'>
                                                <h2 className='title-secnd'>MCX Commodity Margin Calculator</h2>
                                            </div>
                                            <div>
                                                <p>Commodity trading refers to the buying and selling of commodities like crude oil, gold, or silver. Trading also happens through futures contracts, which are financial tools to buy or sell commodities at a pre-determined price and specified time.</p>
                                                <p>You can invest in various commodity national exchanges like MCX, NCDEX, ICEX, NMCE, and UCX. The Multi Commodity Exchange (MCX) is the first listed exchange in India and the most popular among traders.</p>
                                                <p>Before trading in a commodity market, you must have a minimum margin amount that acts as collateral. But the real question is how to determine this margin. That’s where a commodity margin calculator comes in. Read on to uncover everything about the MCX margin calculator.</p>
                                                <h3 className='seo-h3'>What is a Commodity Margin Calculator?</h3>
                                                <p>A commodity margin calculator is a vital tool for investors while trading in the commodity market by determining the margin amount. The calculator factors in the volatility of the commodity and contract value. By entering accurate values into this calculator, you can instantly get the margin for the commodity.</p>
                                                <p>The commodity market has two main types of margins – the initial and the maintenance margin. The initial margin refers to the minimum capital you must have in your account to begin the process of trading. The maintenance margin is the amount required to maintain the minimum capital in your account.</p>
                                                <p>Apart from these two, there are additional margins, special margins, delivery, and extreme loss margin. These play a crucial role in managing the risks in commodity trading by helping you make informed decisions when buying or selling a commodity. You can use the MCX commodity calculator to determine the margin and manage your funds effectively.</p>
                                                <h3 className='seo-h3'>How Does the MCX Commodity Margin Calculator Work?</h3>
                                                <p>With the online commodity margin calculator, you no longer need to remember complicated calculations. Here is an overview of how the MCX margin calculator typically works:</p>
                                                <h5 className='seo-h5'>Contract Details</h5>
                                                <p>To determine the margin, the commodity margin calculator considers the contract details like the commodity name, lot size, and expiry date.</p>
                                                <p>You can also choose a commodity options contract for trading. Unlike the futures contract, an options contract gives you the right, but not the obligation, to buy or sell the commodity on the specified day.</p>
                                                <h5 className='seo-h5'>Price Data</h5>
                                                <p>The MCX margin calculator uses each commodity's current price and lot size to provide accurate calculations. You can find multiple margin calculators for trading in the commodity market online from brokerages.</p>
                                                <h5 className='seo-h5'>Calculation Methodology </h5>
                                                <p>With this online commodity margin calculator, you can get instant results of the margin required to start trading. It uses a set of formulas and algorithms specific to the brokerage and considers factors you enter into the calculator, such as commodity type.</p>
                                                <h5 className='seo-h5'>Margin</h5>
                                                <p>The calculator generates your margin amount once all the necessary details are accurately entered. Refer to the margin requirements of the chosen brokerage or exchange you’re trading with to access the latest regulations for margin calculations.</p>
                                                <h3 className='seo-h3'>How to Use a Commodity Margin Calculator</h3>
                                                <p>Using a commodity margin calculator does not require much effort. Follow these short steps to get accurate margin results: </p>
                                                <ol>
                                                    <li>Find a reliable online commodity margin calculator. Use calculators from brokerages, financial websites, or dedicated margin calculators.</li>
                                                    <li>Select the exchange you want from the list given on the calculator. The Multi Commodity Exchange (MCX) is one of the most trusted exchanges among traders today.</li>
                                                    <li>Enter details like the commodity, expiry date in case of the futures contract, and quantity.</li>
                                                    <li>Once you enter the details, select the buy or sell option and submit to get the margin to start trading.</li>
                                                    <li>You can also calculate margins for other commodities, exchanges, or contracts by following the above steps with new inputs.</li>
                                                </ol>
                                                <p>The online commodity margin calculator is a useful tool for traders in the commodity market. One can find a reliable MCX calculator online and never have to worry about manual calculations anymore.</p>
                                                <p>This online calculator not only determines your margin required for trading seamlessly but also to helps you manage risk efficiently by making informed decisions.</p>
                                                <p>Whether you’re a new or a seasoned trader trading in the commodity market, the commodity margin calculator can help you achieve your financial goals.</p>
                                            </div>
                                        </div>
                                    </div> :
                                    activeTab == 4 ?
                                        <div className="row">
                                            <div className='col-md-12'>
                                                <div className='title-content'>
                                                    <h2 className='title-secnd'>Forex Margin Calculator</h2>
                                                </div>
                                                <div>
                                                    <p>A forex margin calculator is a tool that supports seamless forex trading worldwide. The consolidated tool alerts you about the margin your account needs to keep a particular trade open.</p>
                                                    <p>But before delving into the essentials of the calculator and how it works, it’s integral to understand the concept of forex trading.</p>
                                                    <p>Simply put, forex trading revolves around buying and selling currencies from several parts of the world. The goal is to leverage the fluctuations of global currencies to execute profitable trades. It is a popular investment avenue, with over 13.9 million active traders worldwide.</p>
                                                    <p>But the specifics of forex trading revolve around a concept called margin, which can be difficult to calculate without a dedicated calculator. Let us understand this concept better with the help of a forex margin calculator.</p>
                                                    <h3 className='seo-h3'>What is a Forex Margin Calculator?</h3>
                                                    <p>The concept of ‘margin’ is well-established in the forex exchange market. It is the minimum amount of funds required to keep a trade open. It acts as insurance whenever you open a new position in the forex market.</p>
                                                    <p>Let’s assume you have decided to purchase GBP 50,000 worth of currency. When you request to acquire this value, you only need to put up a part of the sum (around GBP 1,000) to hold your position and keep the trade open. Only when the trade gets completed or closed is the margin returned to your account.</p>
                                                    <p>But the margin varies for different amounts. So, how can you reliably calculate the amount of funds to maintain in your account?</p>
                                                    <p>This is where a forex margin calculator comes in. It is an accurate tool that tells you about the margin you need to maintain based on the trading value and the margin percentage mentioned. Forex calculators are valuable and help manage trades better while informing you of the position size and leverage level.</p>
                                                    <h3 className='seo-h3'>How Does a Forex Margin Calculator Work?</h3>
                                                    <p>The forex margin calculator uses an in-built formula to calculate the margin levels for your trades. It takes relevant inputs and calculates the margin amount depending on the currency pair chosen.</p>
                                                    <p>The calculations are done using a simple formula:</p>
                                                    <p>Margin Requirement = &#40;&#91;&#123;Base Currency&#125; &#47; &#123;Account Currency &#125; X Units&#93;&#41;&nbsp;&#47; Leverage</p>
                                                    <ul>
                                                        <li>Base currency is the currency you wish to purchase</li>
                                                        <li>Account currency is the currency you use to purchase units in the forex market</li>
                                                        <li>Units are the value of the currency you plan to purchase</li>
                                                        <li>Leverage is the amount you give versus the amount provided by the broker</li>
                                                    </ul>
                                                    <p>It automatically calculates the exchange rates and values of respective currencies and provides the margin value.</p>
                                                    <h3 className='seo-h3'>How to Use a Forex Margin Calculator?</h3>
                                                    <p>Due to the varying nature of asset classes and margin rates, the forex margin calculator takes certain inputs to display accurate results. Here are the details you need to enter:</p>
                                                    <p><strong>Trading Currency:</strong> Your native currency using which you will be executing the trades. If you use INR for all your trades, enter the same in the currency field/</p>
                                                    <p><strong>Currency pair (like USD/JPY):</strong> Choose the currency pair to help the calculator understand the relative value of one currency against the other.</p>
                                                    <p><strong>Enter the amount you require (position size):</strong>  Your margin depends on the total value of your purchase. Input your desired currency value to get accurate results.</p>
                                                    <p>These basic inputs will fetch you the margin size required to open a position for your currency pair. Along with the margin, some calculators also display additional information like the profit or loss potential and the margin level of your account.</p>
                                                    <h3 className='seo-h3'>Benefits of a Forex Margin Calculator</h3>
                                                    <p>Maintaining a position in the forex exchange market can be challenging without an accurate or approximate margin value. Calculating the value using manual formulas can be time-consuming, and a Forex margin calculator is the best alternative.</p>
                                                    <ul>
                                                        <li>Provides insights into potential losses to help you commit to a stop-loss strategy and minimise risks</li>
                                                        <li>Powers informed decisions by giving an accurate value of the margin needed for a particular position</li>
                                                        <li>Simple, accessible and easy-to-use tool that offers immediate value and ensures maximum transparency</li>
                                                        <li>Helps you calculate the margins of different currency pairs in the market at the click of a button</li>
                                                    </ul>
                                                    <p>Overall, a forex margin calculator eases your role and allows you to engage in faster trades to capitalise on fluctuating currency values. It is a high-response tool that offers increased efficiency and speed to power your trading decisions.</p>
                                                </div>
                                            </div>
                                        </div> :
                                        ""
                    }

                </div>



            </section>
            <section className="margin-faq">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="title-first text-center pb-4">Frequently Asked Questions</h2>
                        </div>
                    </div>
                    <div className='container'>

                        {
                            activeTab == 1 ?
                                <div className="row">
                                    <div className="col-md-12">
                                        <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                            <Accordion.Item eventKey="0" className='faq-item'>
                                                <Accordion.Header as="h3" className='faq-header'>What are the two segments of margin classification?</Accordion.Header>
                                                <Accordion.Body className='open-demat-faq-body'>
                                                    In stock trading, the margin is broadly classified into two spectrums they are– cash and derivative.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1" className='faq-item'>
                                                <Accordion.Header as="h3" className='faq-header'>What is the margin for F&O? </Accordion.Header>
                                                <Accordion.Body className='open-demat-faq-body'>
                                                    For the derivative market, the margin is the amount you need to pay to take a position. The margin at the beginning of the trade is known as the initial margin, calculated based on the position you might hold until the expiry date.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="2" className='faq-item'>
                                                <Accordion.Header as="h3" className='faq-header'>How much margin is safe?</Accordion.Header>
                                                <Accordion.Body className='open-demat-faq-body'>
                                                    A 5% margin is considered very low, whereas a 10% margin is considered healthy, and a 20% is a high margin.
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div> :

                                activeTab == 2 ?
                                    <div className='row'>
                                        <div className="col-md-12">
                                            <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                                <Accordion.Item eventKey="0" className='faq-item'>
                                                    <Accordion.Header as="h3" className='faq-header'>What is the margin in F&O?</Accordion.Header>
                                                    <Accordion.Body className='open-demat-faq-body'>
                                                        The margin in F&O is the funds a trader must deposit in the trading account to cover potential losses. When dealing in futures or options contracts, it is a mandate to make an initial margin before initiating a trade.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="1" className='faq-item'>
                                                    <Accordion.Header as="h3" className='faq-header'>What does the F&O margin calculator do?</Accordion.Header>
                                                    <Accordion.Body className='open-demat-faq-body'>
                                                        The F&O margin calculator considers your inputs and provides the total funds required to deposit in your trading account.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="2" className='faq-item'>
                                                    <Accordion.Header as="h3" className='faq-header'>What is derivative trading?</Accordion.Header>
                                                    <Accordion.Body className='open-demat-faq-body'>
                                                        Derivative trading includes the buying and selling of financial products (derivatives). Furthermore, the value of these derivatives depends on the underlying assets.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                                <Accordion.Item eventKey="3" className='faq-item'>
                                                    <Accordion.Header as="h3" className='faq-header'>Why should the margin be calculated when trading in F&O? </Accordion.Header>
                                                    <Accordion.Body className='open-demat-faq-body'>
                                                        Calculating the F&O margin is crucial among traders to get an accurate margin amount and avoid unnecessary losses.
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div> :
                                    activeTab == 3 ?
                                        <div className='row'>
                                            <div className="col-md-12">
                                                <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                                    <Accordion.Item eventKey="0" className='faq-item'>
                                                        <Accordion.Header as="h3" className='faq-header'>What is commodity trading?</Accordion.Header>
                                                        <Accordion.Body className='open-demat-faq-body'>
                                                            Commodity trading allows traders to buy and sell commodities like agricultural products, metals, and other tangible materials. In this market, traders have to speculate on the price movements of the commodities to earn profits.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="1" className='faq-item'>
                                                        <Accordion.Header as="h3" className='faq-header'>What are the commodities in the commodity trading market?</Accordion.Header>
                                                        <Accordion.Body className='open-demat-faq-body'>
                                                            The commodities are divided into two broad types: hard and soft.
                                                            <ul>
                                                                <li>Hard commodities include gold, rubber, and crude oil.</li>
                                                                <li>Soft commodities include corn, wheat, and sugar.</li>
                                                            </ul>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="2" className='faq-item'>
                                                        <Accordion.Header as="h3" className='faq-header'>What is a commodity margin calculator?</Accordion.Header>
                                                        <Accordion.Body className='open-demat-faq-body'>
                                                            The commodity margin calculator determines the margin required to trade in commodity derivatives like futures and options contracts.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="3" className='faq-item'>
                                                        <Accordion.Header as="h3" className='faq-header'>What is the initial margin in the commodity market?</Accordion.Header>
                                                        <Accordion.Body className='open-demat-faq-body'>
                                                            The initial margin is the minimum amount you need to have in your account to start trading in the commodity market.
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                    <Accordion.Item eventKey="4" className='faq-item'>
                                                        <Accordion.Header as="h3" className='faq-header'>What are the national commodity exchanges in India?</Accordion.Header>
                                                        <Accordion.Body className='open-demat-faq-body'>
                                                            Below are the top national commodity exchanges in India:
                                                            <ul>
                                                                <li>Multi Commodity Exchange (MCX)</li>
                                                                <li>National Commodities and Derivatives Exchange of India (NCDEX)</li>
                                                                <li>Indian Commodity Exchange (ICEX)</li>
                                                                <li>National Multi Commodity Exchange (NMCE)</li>
                                                                <li>Universal Commodity Exchange (UCX)</li>
                                                                <li>ACE Derivatives Exchange (ADX)</li>
                                                            </ul>
                                                        </Accordion.Body>
                                                    </Accordion.Item>
                                                </Accordion>
                                            </div>
                                        </div> :
                                        activeTab == 4 ?
                                            <div className='row'>
                                                <div className="col-md-12">
                                                    <Accordion defaultActiveKey="0" flush className='open-demat-faqs-accordion'>
                                                        <Accordion.Item eventKey="0" className='faq-item'>
                                                            <Accordion.Header as="h3" className='faq-header'>How is the forex margin calculated?</Accordion.Header>
                                                            <Accordion.Body className='open-demat-faq-body'>
                                                                There are two ways to calculate the forex margin. You can either use a pre-made forex margin calculator to input relevant values and get the margin or use a dedicated formula to calculate the margin for each currency pair.
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="1" className='faq-item'>
                                                            <Accordion.Header as="h3" className='faq-header'>What is a 2% margin in Forex?</Accordion.Header>
                                                            <Accordion.Body className='open-demat-faq-body'>
                                                                Consider an example where you are in the market to buy USD 100,000 worth of dollars with GBP as your account currency. The 2% margin means you only need to put up 2% of 100,000, i.e., USD 2,000, to maintain your position or hold your trade. Usually, this amount is returned to you after the trade is completed.
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="2" className='faq-item'>
                                                            <Accordion.Header as="h3" className='faq-header'>What is the best leverage for $100?</Accordion.Header>
                                                            <Accordion.Body className='open-demat-faq-body'>
                                                                Leverage is expressed in ratio and refers to the amount the broker provides in a trade. The ideal leverage for USD 100 should be 1:100 so that for every USD 100 deposit, you can trade about USD 10,000 for a given currency pair.
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                        <Accordion.Item eventKey="3" className='faq-item'>
                                                            <Accordion.Header as="h3" className='faq-header'>Can I trade Forex without a margin?</Accordion.Header>
                                                            <Accordion.Body className='open-demat-faq-body'>
                                                                It is possible to trade Forex without margin if you have the required surplus amount to start. The reason several people choose margins or leverage is to commit to a smaller sum when they do not have the necessary capital.
                                                            </Accordion.Body>
                                                        </Accordion.Item>
                                                    </Accordion>
                                                </div>
                                            </div> :
                                            ""
                        }
                    </div>

                </div>

            </section>
        </>
    )
}

export default Banner