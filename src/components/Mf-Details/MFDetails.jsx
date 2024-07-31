import React from 'react';
import NVD3Chart from 'react-nvd3';
import 'nvd3/build/nv.d3.css';
import * as d3 from 'd3';
import { Doughnut, Arc, Tooltip } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js/auto';
import Accordion from 'react-bootstrap/Accordion';
import { useState, useEffect } from "react";
import "./mf-details.scss";
import PortfolioAnalysis from './PortfolioAnalysis';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faArrowUp } from '@fortawesome/free-solid-svg-icons'
import DematAccountForm from '../Common-features/DematAccountForm';
import FixedForm from './FixedForm';
import Fixedstickyfooter from './Fixedstickyfooter.jsx';
import rest from "../../Services/rest";
import noDataimg from '../../assets/images/no-data.webp';
import utils from "../../Services/utils";
import Form from 'react-bootstrap/Form';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
function MFTopFunds() {
    const [name, setName] = useState('hideform');
    const [value, onChange] = useState(0);
    const [name2, setName2] = useState('hideform2');
    const [rendercount, setRenderCount] = useState(false);
    const [schemedata, setSchemedata] = useState([]);
    const [managardata, setManagardata] = useState([]);
    const [performanceResponseObject, setPerformanceResponseObject] = useState([]);
    const [peerComparisonResponseObject, setPeerComparisonResponseObject] = useState([]);
    const disableLumpsum = false;
    const disableSIP = false;
    const [typeOfReturn, setTypeOfReturn] = useState(true);
    const [typeOfCalc, setTypeOfCalc] = useState(true);
    const [noOfMonths, setNoOfMonths] = useState(6);
    const [minInvested, setMinInvested] = useState("500");
    const [sipLumpsumdta, setSipLumpsumdta] = useState([]);
    const [errorMsg, setErrorMsg] = useState('');
    const [monthsLabel, setMonthsLabel] = useState('');
    const [someRange, setSomeRange] = useState(0.5);
    const [toggleState, setToggleState] = useState(1);
    const [duration, setDuration] = useState('Monthly');
    const [sensexOrBankFD, setSensexOrBankFD] = useState('Sensex');
    const [returnsGraphData, setReturnsGraphData] = useState({});
    const [chartData, setChartData] = useState([{ values: [] }, { values: [] }]);
    const [bankFDReturnsData, setBankFDReturnsData] = useState({});
    const [sensexReturnsData, setSensexReturnsData] = useState({});
    const [schemeDistributionResponse, setSchemeDistributionResponse] = useState({})
    const [schemeDistributionAsOnDate, setSchemeDistributionAsOnDate] = useState('');
    const [selectedDistributionValue, setSelectedDistributionValue] = useState('');
    const [showDropdownLoader, setShowDropdownLoader] = useState(true)
    const [isClicked, setIsClicked] = useState(false);
    const [topSectorsResponseObject, setTopSectorsResponseObject] = useState([]);
    const [showHideDropdownValues, setShowHideDropdownValues] = useState({ "marketcap": true, "company": true, "sector": true });
    const [topHoldingsResponseObject, setTopHoldingsResponseObject] = useState([]);
    const [selectedDropDownValue, setSelectedDropDownValue] = useState('Sector');
    const [marketCapResponseObject, setMarketCapResponseObject] = useState([]);
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isActive, setIsActive] = useState();
    const handleClick = (event) => {
        setIsActive(current => !current);
    };
    const toggleTab = (index) => {
        setToggleState(index);
    };

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

    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
            window.addEventListener('scroll', getPosition2);
            initializeschemeData()
            FundManagerDetails();
            getPerformancePeerComparisonData()
            // sipLumpsumCalc()
            reloadGraphData('Sensex', duration, false, true)
            getSchemeDistributionData()
            getSchemeTopSectors("1")
        }
    }, [rendercount]);
    useEffect(() => {
        sipLumpsumCalc(false);
    }, [typeOfCalc]);
    const getPosition2 = () => {
        const element = document.getElementById("showForm");
        if (element) {
            const rect = element.getBoundingClientRect();

            if (rect.top.toFixed() < 259) {
                setName2('visibleform2');
            } else {
                setName2('hideform2');
            }
        }
    };

    const initializeschemeData = () => {
        const urlIdentity = window.location.pathname.split('/scheme/')[1];
        const arr = urlIdentity.split('-').slice(-2)
        const SchemeCode = arr[0]
        const SchemePlanCode = arr[1]

        const request = {
            "SchemeCode": arr[0],
            "SchemePlanCode": arr[1]
        }
        rest.getSchemeData(request).then(
            res => {
                if (res && res.Response) {
                    setSchemedata([res.Response])
                    document.title = res.Response.SchemeBasic.SchemeMainName? res.Response.SchemeBasic.SchemeMainName +" NAV & SIP Returns": '';
                    document.getElementById('meta-tags').content = res.Response.SchemeBasic.SchemeMainName? " Invest in " +res.Response.SchemeBasic.SchemeMainName +" scheme with Choice. Check the " +res.Response.SchemeBasic.SchemeMainName +" NAV, SIP returns & performance" : '';
                    document.getElementById('canonical-link').href = "https://choiceindia.com/scheme/"+urlIdentity;
                    if (SchemePlanCode != 2066) {
                        if (res.Response.SchemeBasic.DRLumpSumAllowed == "N") {
                            disableLumpsum = true;
                        }
                        if (res.Response.SchemeBasic.DRSIPAllowed == "N") {
                            disableSIP = true;
                        }
                        if (res.Response.SchemeBasic.LumpSumAllowed == "Y") {
                            disableLumpsum = false;
                        }
                        if (res.Response.SchemeBasic.SIPAllowed == "Y") {
                            disableSIP = false;
                        }
                    }
                    else {
                        if (res.Response.SchemeBasic.LumpSumAllowed == "N") {
                            disableLumpsum = true;
                        }
                        if (res.Response.SchemeBasic.SIPAllowed == "N") {
                            disableSIP = true;
                        }
                    }
                } else {
                    navigate(`/404`, { replace: true });
                }
            },
            err => {
                if (err && err.message && (err.message.indexOf('404') > -1)) {
                    navigate(`/404`, { replace: true });
                }
                // console.log("ERROR", err);

            }
        );
        getSchemeDistributionData();
    };
    const FundManagerDetails = () => {
        const urlIdentity = window.location.pathname.split('/scheme/')[1];
        const arr = urlIdentity.split('-').slice(-2)
        const request1 = {
            "SchemeCode": arr[0],
            "SchemePlanCode": arr[1]
        }
        rest.getFundManagerData(request1).then(
            res => {
                if (res && res.Response) {
                    setManagardata([res.Response])
                }
            }).catch((error) => {

            });
    }

    const optimezeString = (data) => {
        return data.toLowerCase().replace(/\&|[\-|\s]+/g, '-');
    }

    const getPerformancePeerComparisonData = () => {
        const urlIdentity = window.location.pathname.split('/scheme/')[1];
        const arr = urlIdentity.split('-').slice(-2)
        const request = {
            "AnalysisType": "6",
            "SchemeCode": arr[0],
            "SchemePlanCode": arr[1],
            "SchemeDuration": "Monthly",
            "Count": 5
        }
        rest.getPerformancePeerComparisonData(request).then(
            res => {
                if (res.Response != null && res.Response.PeerComparison) {

                    // Check if Performance data is present
                    if (res.Response.Performance && res.Response.Performance.length > 0) {
                        let performanceResponseObject = [];
                        let list = [
                            { label: "1m", key: "OneMonthReturn" },
                            { label: "6m", key: "SixMonthsReturn" },
                            { label: "1y", key: "OneYearReturn" },
                            { label: "3y", key: "ThreeYearReturn" }
                        ];

                        let a = res.Response.Performance;

                        list.forEach((obj) => {
                            let result = { label: obj.label };

                            if (a[0]) {
                                result["FundReturn"] = Number(a[0][obj.key]) || 0;
                            }
                            if (a[1]) {
                                result["CategoryAvg"] = Number(a[1][obj.key]) || 0;
                            }
                            if (a[2]) {
                                result["CategoryBest"] = Number(a[2][obj.key]) || 0;
                            }

                            performanceResponseObject.push(result);
                        });


                        setPerformanceResponseObject([...performanceResponseObject]);
                    }



                    let peerComparisonResponseObjectCopy = [...res.Response.PeerComparison.lstListPeers];
                    peerComparisonResponseObjectCopy.forEach((e, i) => {
                        let paramSplit = e["Scheme"].split("-");
                        e["SchemeCode"] = paramSplit[0];
                        e["SchemePlanCode"] = paramSplit[1];
                        e["OneYearReturn"] = (e["OneYearReturn"] && Number(e["OneYearReturn"] != 0)) ?
                            parseFloat(e["OneYearReturn"]).toFixed(2) + '%' : "N/A";
                        e["ThreeYearReturn"] = (e["OneYearReturn"] && Number(e["ThreeYearReturn"] != 0)) ?
                            parseFloat(e["ThreeYearReturn"]).toFixed(2) + '%' : "N/A";
                        e["Size"] = Math.floor(e["Size"]);
                        e["Size"] = (e["Size"]) ? e["Size"].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : e["Size"];
                    });

                    let positiveK = []; let negativeK = [], zeroK = [];
                    peerComparisonResponseObjectCopy.forEach((e, i) => {
                        if (e.nDistance < 0) negativeK.push(e);
                        else if (e.nDistance > 0) positiveK.push(e);
                        else zeroK = [e];
                    });

                    positiveK.sort((a, b) => a.nDistance <= b.nDistance);
                    negativeK.sort((a, b) => a.nDistance <= b.nDistance);

                    let finalR = [];
                    finalR = finalR.concat(positiveK).concat(zeroK).concat(negativeK);
                    setPeerComparisonResponseObject(finalR);
                }
                

            }).catch((error) => {
                // Handle errors
                console.error("Error fetching performance data:", error);
            });
    }

    const sipLumpsumCalc = (event, switchChange, updatedNoOfMonths) => {
        let tempstore;
        const urlIdentity = window.location.pathname.split('/scheme/')[1];
        const arr = urlIdentity.split('-').slice(-2);
        if (minInvested < 1) {
            setErrorMsg('Enter a valid amount');
            return false;
        } else {
            setErrorMsg('');
        }

        const effectiveNoOfMonths = updatedNoOfMonths !== undefined ? updatedNoOfMonths : noOfMonths;
        if (effectiveNoOfMonths === 6) {
            tempstore = effectiveNoOfMonths;
            setMonthsLabel(`${tempstore} Month${tempstore > 1 ? 's' : ''}`);
        } else if (effectiveNoOfMonths > 6 && effectiveNoOfMonths < 12) {
            tempstore = effectiveNoOfMonths;
            setMonthsLabel(`${tempstore} Months`);
        } else {
            tempstore = effectiveNoOfMonths / 12;
            setMonthsLabel(`${tempstore} Year${tempstore > 1 ? 's' : ''}`);
        }
        

        let request = {
            SchemeCode: arr[0],
            SchemePlanCode: arr[1],
            NoOfMonths: effectiveNoOfMonths.toString(),
            AmtInvested: minInvested,
            TypeOfCalc: typeOfCalc ? 'SIP' : 'Lumpsum',
        };


        rest.sipLumpsumCalc(request)
            .then((res) => {
                if (res.Response) {
                    setSipLumpsumdta([res.Response]);
                } else {
                    setSipLumpsumdta([]);
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    const fillPercentageloan = ((noOfMonths - 6) / (60 - 6)) * 100;
    const fillStyle = {
        background: `linear-gradient(to right, #D9D9D9 ${fillPercentageloan}%, #D9D9D9 ${fillPercentageloan}%)`,
    };
    const chartData1 = [
        {
            key: 'This Fund',
            values: returnsGraphData[duration] ? returnsGraphData[duration].values.map(d => ({ x: d[0], y: d[1] })) : [],
            color: '#ffffff'
        },

        {
            key: typeOfReturn ? 'Bank FD' : 'Sensex',
            values: typeOfReturn ? bankFDReturnsData[duration] ? bankFDReturnsData[duration].values.map(d => ({ x: d[0], y: d[1] })) : [] : sensexReturnsData[duration] ? sensexReturnsData[duration].values.map(d => ({ x: d[0], y: d[1] })) : [],
            color: typeOfReturn ? 'green' : 'yellow'
        }
    ];

    const chartOptions = {
        chart: {
            type: 'lineChart',
            height: window.innerWidth < 400 ? 150 : 250,
            margin: {
                top: 20,
                right: 30,
                bottom: 40,
                left: 55
            },
            showLegend: true,
            visible: true,
            x: (d) => { return d.x },
            y: (d) => { return d.y },
            useInteractiveGuideline: true,
            xAxis: {
                tickFormat: (d) => null,
                tickPadding: 20
            },
            yAxis: {
                showMaxMin: false,
                tickFormat: (d) => d3.format('.02f')(d),
                axisLabelDistance: -10,

            }
        }
    };


    //for graph purpose
    const reloadGraphData = (type, duration, clicked, loadBankFD = false) => {
        if (typeOfReturn) {
            type = "Sensex";
        } else {
            type = "Bank FD";
        }
        setSensexOrBankFD(type);
        setDuration(duration);
        if (!returnsGraphData[duration]) {
            getReturnsData(duration, (count) => {
                if (count === 3) {
                    loadGraph(type, duration, clicked, loadBankFD);
                }
            });
        } else {
            loadGraph(type, duration, clicked, loadBankFD);
        }
    };
    const getGraphDataFromString = (stringData) => {
        let result = [];
        let data = stringData.split('|');
        for (let i = 0; i < data.length; i++) {
            if (data[i] !== '' && data[i] !== null) {
                let c = data[i].split('@');
                c[0] = new Date(c[0]).getTime();
                c['val'] = parseFloat(c[1]);
                c[1] = parseFloat(parseFloat(c[1]).toFixed(2));
                result.push(c);
            }
        }
        return result;
    };
    const getReturnsData = (duration, callback) => {
        const urlIdentity = window.location.pathname.split('/scheme/')[1];
        const arr = urlIdentity.split('-').slice(-2);
        let count = 0;
        const payload = {
            SchemeCode: arr[0],
            SchemePlanCode: arr[1],
            Duration: duration,
        };
        rest.getNavReturnGraph(payload).then((res) => {
            if (res.Response && res.Status === 'Success') {
                const returnData = getGraphDataFromString(res.Response.GraphData);
                if (returnData) {
                    setReturnsGraphData((prevReturnsGraphData) => ({
                        ...prevReturnsGraphData,
                        [duration]: {
                            values: returnData,
                            lossGainPercent: returnData[returnData.length - 1] ? returnData[returnData.length - 1][1] : 0,
                            startDate: returnData && returnData.length > 0
                                ? returnData[0][0]
                                : '',
                        },
                    }));
    
                    callback(++count);
    
                    if (returnsGraphData['FiveYearly']) {
                        setReturnsGraphData((prevReturnsGraphData) => ({
                            ...prevReturnsGraphData,
                            FiveYearly: {
                                ...prevReturnsGraphData['FiveYearly'],
                                lossGainPercent: prevReturnsGraphData[duration]['lossGainPercent']
                                    ? (Number(prevReturnsGraphData[duration]['lossGainPercent']) / 5).toFixed(2)
                                    : prevReturnsGraphData[duration]['lossGainPercent'],
                            },
                        }));
                    }
    
                    rest.getbankFDReturnGraphdata(duration).then((res) => {
                        if (res.Response && res.Status === 'Success') {
                            let BankData = Number(res.Response).toFixed(2);
                            BankData = duration === 'FiveYearly'
                                ? (Number(BankData) / 5).toFixed(2)
                                : duration === 'ThreeYearly'
                                    ? (Number(BankData) / 3).toFixed(2)
                                    : BankData.toString();
    
                            if (returnData && returnData.length > 0) {
                                setBankFDReturnsData((prevBankFDReturnsData) => ({
                                    ...prevBankFDReturnsData,
                                    [duration]: {
                                        values: [
                                            [returnData[0][0], 0],
                                            [returnData[returnData.length - 1][0], BankData],
                                        ],
                                        lossGainPercent: BankData,
                                    },
                                }));
                                callback(++count);
                            }
                        }
                    });
                    rest.getsensexReturnGraphdata(duration).then((res) => {
                        if (res.Response && res.Status === 'Success') {
                            let sensexData = getGraphDataFromString(res.Response);
                            if (sensexData && sensexData.length > 0) {
                                setSensexReturnsData((prevSensexReturnsData) => ({
                                    ...prevSensexReturnsData,
                                    [duration]: {
                                        values: sensexData,
                                        lossGainPercent: duration === 'FiveYearly'
                                            ? (Number(sensexData[sensexData.length - 1][1]) / 5).toFixed(2)
                                            : duration === 'ThreeYearly'
                                                ? (Number(sensexData[sensexData.length - 1][1]) / 5).toFixed(2)
                                                : sensexData[sensexData.length - 1][1],
                                    },
                                }), console.log("prevSensexReturnsData", duration));
                                callback(++count);
                            }
                        }
                    });
                }
            }
        });
    };
    

    const loadGraph = (type, duration, clicked, loadBankFD) => {
        let updatedChartData = [];

        if (type === 'Sensex') {
            updatedChartData = [
                { key: 'This Fund', values: returnsGraphData[duration] ? returnsGraphData[duration].values : [], color: '#ffffff' },
                { key: 'Sensex', values: sensexReturnsData[duration] ? sensexReturnsData[duration].values : [], color: 'yellow' }
            ];

            if (duration === 'ThreeYearly' && !clicked && sensexReturnsData[duration]) {
                if (sensexReturnsData[duration]["lossGainPercent"]) {
                    sensexReturnsData[duration]["lossGainPercent"] = formatLossGainPercent(sensexReturnsData[duration]["lossGainPercent"]).toString().replace('%', '').replace('p.a.', '');
                    sensexReturnsData[duration]["lossGainPercent"] = (Number(sensexReturnsData[duration]["lossGainPercent"]) / 3).toFixed(2);
                    returnsGraphData[duration]["lossGainPercent"] = (Number(returnsGraphData[duration]["lossGainPercent"]) / 3).toFixed(2);
                }
            }

            if (duration === 'FiveYearly' && !clicked && !sensexReturnsData[duration]) {
                if (sensexReturnsData[duration]["lossGainPercent"]) {
                    sensexReturnsData[duration]["lossGainPercent"] = formatLossGainPercent(sensexReturnsData[duration]["lossGainPercent"]).toString().replace('%', '').replace('p.a.', '');
                    sensexReturnsData[duration]["lossGainPercent"] = (Number(sensexReturnsData[duration]["lossGainPercent"]) / 5).toFixed(2);
                }
            }

            if (sensexReturnsData[duration] && sensexReturnsData[duration]["lossGainPercent"]) {
                sensexReturnsData[duration]["lossGainPercent"] = formatLossGainPercent(sensexReturnsData[duration]["lossGainPercent"]).toString().replace('%', '').replace('p.a.', '');
                sensexReturnsData[duration]["lossGainPercent"] = (duration === "Monthly" || duration === "Quarterly" || duration === "HalfYearly")
                    ? sensexReturnsData[duration].lossGainPercent + '%'
                    : sensexReturnsData[duration].lossGainPercent + '%p.a.';
            }
        }

        if (type === 'Bank FD' || loadBankFD) {
            if (!loadBankFD) {
                updatedChartData = [
                    { key: 'This Fund', values: returnsGraphData[duration] ? returnsGraphData[duration].values : [], color: '#ffffff' },
                    { key: 'Bank FD', values: bankFDReturnsData[duration] ? bankFDReturnsData[duration].values : [], color: 'green' }
                ];
            }

            if (loadBankFD) {
                clicked = false;
            }

            if (duration === 'ThreeYearly' && !clicked && loadBankFD[duration]) {
                if (loadBankFD[duration]["lossGainPercent"]) {
                    loadBankFD[duration]["lossGainPercent"] = formatLossGainPercent(loadBankFD[duration]["lossGainPercent"]).toString().replace('%', '').replace('p.a.', '');
                    loadBankFD[duration]["lossGainPercent"] = (Number(loadBankFD[duration]["lossGainPercent"]) / 3).toFixed(2);
                    loadBankFD[duration]["lossGainPercent"] = (Number(loadBankFD[duration]["lossGainPercent"]) / 3).toFixed(2);
                }
            }

            if (duration === 'FiveYearly' && !clicked && !loadBankFD[duration]) {
                if (loadBankFD[duration]["lossGainPercent"]) {
                    loadBankFD[duration]["lossGainPercent"] = formatLossGainPercent(loadBankFD[duration]["lossGainPercent"]).toString().replace('%', '').replace('p.a.', '');
                    loadBankFD[duration]["lossGainPercent"] = (Number(loadBankFD[duration]["lossGainPercent"]) / 5).toFixed(2);
                }
            }

            if (bankFDReturnsData[duration] && bankFDReturnsData[duration]["lossGainPercent"]) {
                bankFDReturnsData[duration]["lossGainPercent"] = formatLossGainPercent(bankFDReturnsData[duration]["lossGainPercent"]).toString().replace('%', '').replace('p.a.', '');
                bankFDReturnsData[duration]["lossGainPercent"] = (duration === "Monthly" || duration === "Quarterly" || duration === "HalfYearly")
                    ? bankFDReturnsData[duration].lossGainPercent + '%'
                    : bankFDReturnsData[duration].lossGainPercent + '%p.a.';
            }
        }

        if (returnsGraphData[duration] && returnsGraphData[duration]["lossGainPercent"]) {
            returnsGraphData[duration]["lossGainPercent"] = formatLossGainPercent(returnsGraphData[duration]["lossGainPercent"]).toString().replace('%', '').replace('p.a.', '');
            returnsGraphData[duration]["lossGainPercent"] = (duration === "Monthly" || duration === "Quarterly" || duration === "HalfYearly")
                ? returnsGraphData[duration].lossGainPercent + '%'
                : returnsGraphData[duration].lossGainPercent + '%p.a.';
        }

        setChartData(updatedChartData);
    };

    const formatLossGainPercent = (value, factor = 1) => {
        value = value ? value.toString().replace('%', '').replace('p.a.', '') : value;
        return value ? (Number(value) / factor).toFixed(2) : value;
    };


    //scheme  portfolio analysis

    const getSchemeDistributionData = () => {
        const urlIdentity = window.location.pathname.split('/scheme/')[1];
        const arr = urlIdentity.split('-').slice(-2)
        const request = {
            "SchemeCode": arr[0],
            "SchemePlanCode": arr[1]
        }
        rest.getSchemeDistributionData(request)
            .then((res) => {
                if (res.Response !== null) {
                    setSchemeDistributionAsOnDate(res.Response.HoldingDate);
                    const updatedSchemeDistributionResponse = {};
                    res.Response.lstTopSectors.forEach((obj, index) => {
                        updatedSchemeDistributionResponse[obj.Company] = obj;
                    });
                    setSchemeDistributionResponse(updatedSchemeDistributionResponse);
                    if (updatedSchemeDistributionResponse["Equity"] && updatedSchemeDistributionResponse["Equity"]['NetAssetPercent'] !== 0) {
                        setSelectedDistributionValue("1");
                    } else if (updatedSchemeDistributionResponse["Debt"] && updatedSchemeDistributionResponse["Debt"]['NetAssetPercent'] !== 0) {
                        setSelectedDistributionValue("2");
                    } else if (!updatedSchemeDistributionResponse["Others"] && updatedSchemeDistributionResponse["Others"]['NetAssetPercent'] !== 0) {
                        setSelectedDistributionValue("3");
                    }
                    getDistributionData(selectedDistributionValue);
                } else {
                    // setSchemeDistributionAsOnDate("");
                    setShowDropdownLoader(false);
                }
            })
            .catch((error) => {
                console.error('Error fetching scheme distribution data:', error);
            });
    }

    const getDistributionData = (value, isClicked = false) => {
        setShowDropdownLoader(true);

        setSelectedDistributionValue((prevValue) => {
            if (prevValue === value && isClicked) {
                setShowDropdownLoader(false);
                return prevValue;
            }

            if (value === '1') {
                setSelectedDropDownValue("Sector")
                setTopSectorsResponseObject([])
                setShowHideDropdownValues({ marketcap: true })
                getSchemeTopSectors(value)
            }
            else if (value === '2') {
                setSelectedDropDownValue("Sector")
                setShowHideDropdownValues({ marketcap: false });
                setTopSectorsResponseObject([])
                getSchemeTopSectors(value)
            }
            else if (value === '3') {
                setSelectedDropDownValue("Sector")
                setShowHideDropdownValues({ marketcap: false });
                setTopSectorsResponseObject([])
                getSchemeTopSectors(value)
            }

            if (value === '1' && (!schemeDistributionResponse?.Equity || schemeDistributionResponse?.Equity?.NetAssetPercent === 0)) {
                toggleTab(2);
            } else if (value === '2' && (!schemeDistributionResponse?.Debt || schemeDistributionResponse?.Debt?.NetAssetPercent === 0)) {
                toggleTab(3);
            } else if (value === '3' && (!schemeDistributionResponse?.Others || schemeDistributionResponse?.Others?.NetAssetPercent === 0)) {
                toggleTab(1);
            }


            return value;
        });
    };
    const [datas, setDatas] = useState({
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: [],
                hoverBackgroundColor: [],
            },
        ],
    });

    const [datas1, setDatas1] = useState({
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: [],
                hoverBackgroundColor: [],
            },
        ],
    });
    const [datas2, setDatas2] = useState({
        labels: [],
        datasets: [
            {
                data: [],
                backgroundColor: [],
                hoverBackgroundColor: [],
            },
        ],
    });

    const getSchemeTopSectors = (value) => {
        setTopSectorsResponseObject([]);
        const urlIdentity = window.location.pathname.split('/scheme/')[1];
        const arr = urlIdentity.split('-').slice(-2)
        const mrktSectorCompanyRequestObject = {
            "SchemeCode": arr[0],
            "SchemePlanCode": arr[1],
            "Type": value || selectedDistributionValue
        }
        rest.getschemeTopSectors(mrktSectorCompanyRequestObject).then((res) => {
            if (res.Response !== null) {
                let topSectorsResponse = res.Response;
                setTopSectorsResponseObject(res.Response)
                if (topSectorsResponse.Sector === "" || topSectorsResponse.Sector === "Others") {

                }
                const updatedDatas = {
                    labels: topSectorsResponse.map((sector) => sector.Sector),
                    datasets: [
                        {
                            data: topSectorsResponse.map((sector) => sector.NetAssetPercent),
                            backgroundColor: topSectorsResponse.map((sector) => randDarkColor(sector.color)),
                            hoverBackgroundColor: topSectorsResponse.map((sector) => sector.hoverColor),
                        },
                    ],
                };
                setDatas(updatedDatas)

                const updatedOtherDatas = {
                    labels: topSectorsResponse.map((sector) => sector.Sector || "Others"),
                    datasets: [
                        {
                            data: topSectorsResponse.map((sector) => sector.NetAssetPercent),
                            backgroundColor: topSectorsResponse.map((sector) => randDarkColor(sector.color)),
                            hoverBackgroundColor: topSectorsResponse.map((sector) => sector.hoverColor),
                        },
                    ],
                };
                setDatas1(updatedOtherDatas);
                setShowDropdownLoader(false);
            } else {
                setShowDropdownLoader(false);
                setTopSectorsResponseObject([]);
            }
        });
    };


    function randDarkColor() {
        const rgb = `rgb(${Math.floor(Math.random() * 210)}, ${Math.floor(Math.random() * 210)}, ${Math.floor(Math.random() * 210)})`;
        return rgb;
    }
    const charteroption = {
        plugins: {
            legend: {
                display: false,
                position: 'right',
            },
            tooltip: {
                enabled: true,
                backgroundColor: 'rgba(255, 255, 255, 0.49)',
                titleFont: {
                    size: 14,
                    weight: 'normal'
                },
                bodyColor: 'rgba(0, 0, 0, 1)',
                borderColor: 'rgba(255, 255, 255, 0.49)',
                borderWidth: 1,
                titleColor: 'rgba(0, 0, 0, 1)',
                borderColor: '#786c6b',
                bodyFont: {
                    size: 16,
                    weight: 'bold',
                },
            },

        },
    }

    const getSchemeTopHoldings = (value) => {
        setShowDropdownLoader(true);
        const urlIdentity = window.location.pathname.split('/scheme/')[1];
        const arr = urlIdentity.split('-').slice(-2)
        const mrktSectorCompanyRequestObject = {
            "SchemeCode": arr[0],
            "SchemePlanCode": arr[1],
            "Type": value || selectedDistributionValue
        }

        rest.getschemeTopHoldings(mrktSectorCompanyRequestObject)
            .then((res) => {
                if (res.Response !== null) {
                    setTopHoldingsResponseObject(res.Response);
                } else {
                    setTopHoldingsResponseObject([]);
                }
            })
            .catch(() => {
                setShowDropdownLoader(false);
            });
    };

    const showHideDropDown = (value) => {
        setShowDropdownLoader(true);
        setDropdownVisible(!isDropdownVisible);
        if (value === '1') {
            setSelectedDropDownValue('Market Cap');
            setShowHideDropdownValues({ marketcap: true });

            if (!marketCapResponseObject || Object.keys(marketCapResponseObject).length === 0) {
                getSchemeMarketCap()
            } else {
                setShowDropdownLoader(false);

            }

        } else if (value === '2') {
            setSelectedDropDownValue('Company');

            if (topHoldingsResponseObject.length === 0) {
                getSchemeTopHoldings(value)
            } else {
                setShowDropdownLoader(false);
            }
        } else if (value === '3') {
            setSelectedDropDownValue('Sector');

            if (topSectorsResponseObject.length === 0) {
                getSchemeTopSectors()
            } else {
                setShowDropdownLoader(false);

            }
        }

        if (selectedDistributionValue !== '1') {
            setShowHideDropdownValues({ marketcap: false });
        } else {
            setShowHideDropdownValues({ marketcap: true });
        }
    };

    const getSchemeMarketCap = () => {
        const urlIdentity = window.location.pathname.split('/scheme/')[1];
        const arr = urlIdentity.split('-').slice(-2)
        const mrktSectorCompanyRequestObject = {
            "SchemeCode": arr[0],
            "SchemePlanCode": arr[1],
            "Type": value || selectedDistributionValue
        }
        rest.getschemeMarketCap(mrktSectorCompanyRequestObject)
            .then((res) => {
                if (res.Response !== null) {
                    setShowDropdownLoader(false);
                    const updatedMarketCapResponse = {};
                    res.Response.lstTopSectors.forEach((obj, index) => {
                        updatedMarketCapResponse[obj.Company] = obj;
                    });
                    setMarketCapResponseObject(updatedMarketCapResponse);

                    const updatedOtherDatas = {
                        labels: Object.keys(updatedMarketCapResponse).map((company) => company || "Others"),
                        datasets: [
                            {
                                data: Object.values(updatedMarketCapResponse).map((sector) => sector.NetAssetPercent),
                                backgroundColor: Object.values(updatedMarketCapResponse).map((sector) => randDarkColor(sector.color)),
                                hoverBackgroundColor: Object.values(updatedMarketCapResponse).map((sector) => sector.hoverColor),
                            },
                        ],
                    };
                    setDatas2({ ...updatedOtherDatas });
                } else {
                    setShowDropdownLoader(false);
                    setMarketCapResponseObject(null);
                }
            })
            .catch((error) => {

                console.error('Error fetching market cap data:', error);
            });
    };

    return (
        <div>
            <section className="fund-listing-details">
                <div className="container">
                    <div className="row gx-5 align-items-center">
                        <div className="col-xl-12">
                            {/* <ScemeName /> */}
                            <div className='card-mn box-shadow card-top-details'>
                                {
                                    schemedata.length ?
                                        <div >
                                            {
                                                schemedata.map((res, i) => {
                                                    return (
                                                        <div className='row' key={res.SchemeCode}>
                                                            <div className='col-md-7'>
                                                                <h1 className='title-secnd'>{res.SchemeBasic.SchemeMainName}</h1>
                                                                <div className='rating-det'>
                                                                    {[1, 2, 3, 4, 5].map((rating) => (
                                                                        <FontAwesomeIcon
                                                                            key={rating}
                                                                            icon={faStar}
                                                                            className={`${res?.SchemePerformance?.CMSStarRatings >= rating ? 'fill' : 'unfill'}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                                <div className='detaisl-amt-des'>
                                                                    <p className='mar-0'>{res.SchemeBasic.Category} | Inception Date : {utils.formatDate(
                                                                        new Date(res.SchemeBasic.LaunchDate.split('/')[2], (res.SchemeBasic.LaunchDate.split('/')[1] - 1), res.SchemeBasic.LaunchDate.split('/')[0]), "MMM dd,yyyy"
                                                                    )}
                                                                    </p>
                                                                    <p>Min. {(!disableLumpsum ? 'Lumpsum' : (!disableSIP) ? 'SIP' : '')} Investment  <strong>₹ {res?.SchemeBasic?.MinInvestment}</strong></p>
                                                                    <p>Nav <strong>₹ {res?.SchemePerformance?.CurrentNav}</strong> | <strong>{utils.formatDate(
                                                                        new Date(res.SchemePerformance.NAVDate.split('-')[0], (res.SchemePerformance.NAVDate.split('-')[1] - 1), res.SchemePerformance.NAVDate.split('-')[2]), "MMM dd,yyyy"
                                                                    )}</strong></p>
                                                                </div>
                                                            </div>
                                                            <div className='col-md-5 '>
                                                                <div className='holding-value-cont'>
                                                                    <div className='holding-value'>
                                                                        <h4>{parseFloat(res.SchemePerformance.ThreeYrNavper).toFixed(2)} &nbsp;<FontAwesomeIcon icon={faArrowUp} className='fill' /></h4>
                                                                        <p>3 Year Return (%)</p>
                                                                    </div>
                                                                    <div className='inv-btn' onClick={() => setName2(!name2)}>
                                                                        <span className='btn-bg'>Invest Now</span>
                                                                    </div>
                                                                </div>
                                                            </div>

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
                            <div className='card-mn box-shadow graph-show' id='showForm'>
                                <div className='row'>
                                    <div className='col-xl-5 col-md-12'>
                                        <div className='mn-graph'>
                                            <div className='top-mn-graph d-flex justify-content-between align-items-center'>
                                                <button className='mn-graph-btn'>
                                                    <span className="graph-topsection">This Fund</span>
                                                    <h6 className="mt-2">{returnsGraphData[duration]?.lossGainPercent || ''}</h6>
                                                </button>
                                                <p>VS</p>
                                                <div className="toggle">
                                                    <button className='mn-graph-btn'>
                                                        <span className={`graph-topsection ${typeOfReturn ? ' selected' : ''}`}>SENSEX</span>
                                                        <h6 className="mt-2">{sensexReturnsData[duration]?.lossGainPercent || ''}</h6>
                                                    </button>
                                                    <input
                                                        type="checkbox"
                                                        id="exchangeToggle"
                                                        name="exchangeToggle"
                                                        checked={typeOfReturn}
                                                        onChange={(e) => {
                                                            setTypeOfReturn(e.target.checked);
                                                            reloadGraphData(e.target.checked ? 'Sensex' : 'Bank FD', duration, true);
                                                        }}
                                                    />
                                                    <label></label>
                                                    <button className='mn-graph-btn'>
                                                        <span className={`graph-topsection ${!typeOfReturn ? 'selected' : ''}`}>BANKED</span>
                                                        <h6 className="mt-2">{bankFDReturnsData[duration]?.lossGainPercent || ''}</h6>
                                                    </button>
                                                </div>
                                            </div>
                                            <NVD3Chart
                                                type="lineChart"
                                                datum={chartData1}
                                                x="x"
                                                y="y"
                                                options={chartOptions}
                                            />
                                            <div className="mn-graph-footer text-center">
                                                <span className="fund"></span><span>This Fund</span>
                                                <span className="fund" style={{ backgroundColor: !typeOfReturn ? '#FFFF00' : 'green' }}></span>{' '}
                                                <span>{(!typeOfReturn) ? 'Sensex' : 'Bank FD'}</span>
                                            </div>
                                            <div className="duration">
                                                <button className={`dur-button ${duration === 'Monthly' ? 'active' : ''}`} onClick={() => reloadGraphData(sensexOrBankFD, 'Monthly', true)}>1M</button>
                                                <button className={`dur-button ${duration === 'Quarterly' ? 'active' : ''}`} onClick={() => reloadGraphData(sensexOrBankFD, 'Quarterly', true)}>3M</button>
                                                <button className={`dur-button ${duration === 'HalfYearly' ? 'active' : ''}`} onClick={() => reloadGraphData(sensexOrBankFD, 'HalfYearly', true)}>6M</button>
                                                <button className={`dur-button ${duration === 'Yearly' ? 'active' : ''}`} onClick={() => reloadGraphData(sensexOrBankFD, 'Yearly', true)}>1Y</button>
                                                <button className={`dur-button ${duration === 'ThreeYearly' ? 'active' : ''}`} onClick={() => reloadGraphData(sensexOrBankFD, 'ThreeYearly', true)}>3Y</button>
                                                <button className={`dur-button ${duration === 'FiveYearly' ? 'active' : ''}`} onClick={() => reloadGraphData(sensexOrBankFD, 'FiveYearly', true)}>5Y</button>

                                            </div>
                                        </div>
                                        <p className='per-ttl'>Showing Funds Performance since Sep 07, 2020</p>
                                    </div>
                                    {
                                        schemedata.length ?
                                            <div className='col-xl-7 col-md-12'>
                                                {
                                                    schemedata.map((res, i) => {
                                                        return (
                                                            <div key={res.SchemeCode}>
                                                                <div className='holding-details'>
                                                                    <div className="row holding-details-row">
                                                                        <div className="col-lg-4 col-sm-4 col-6 border-right">
                                                                            <div className="holdings-value">
                                                                                <div className="holdings-figure">{parseFloat(res.SchemePerformance.StandardDeviation).toFixed(2)}</div>
                                                                                <div className="details-title">Standard Deviation</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-sm-4 col-6 border-right">
                                                                            <div className="holdings-value">
                                                                                <div className="rupee">₹ <span className="holdings-figure">{(parseFloat(res.SchemePerformance.NetAssets).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ' Cr')}</span>
                                                                                </div>
                                                                                <div className="details-title">AUM</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-sm-4 col-6 border-right">
                                                                            <div className="holdings-value">
                                                                                <div className="rupee">
                                                                                    <span className="holdings-figure">{parseFloat((res?.SchemeBasic?.CAGR && res?.SchemeBasic?.CAGR != 0.00 && rest?.SchemeBasic?.CAGR != 'NA') ? res?.SchemeBasic?.CAGR + '%'
                                                                                        : 'N/A').toFixed(2)}</span>
                                                                                </div>
                                                                                <div className="details-title">CAGR {(res?.SchemeBasic?.CAGRYears && res?.SchemeBasic?.CAGRYears
                                                                                    != '') ? '-' + res?.SchemeBasic?.CAGRYears : ''}</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-sm-4 col-6 border-right">
                                                                            <div className="holdings-value">
                                                                                <div className="holdings-figure">{(res?.SchemeBasic?.LockInPeriod != '' && res?.SchemeBasic?.LockInPeriod
                                                                                    != 'nil') ? res?.SchemeBasic?.LockInPeriod : 'N/A'}</div>
                                                                                <div className="details-title">Lock In Period</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-sm-4  col-6 border-right">
                                                                            <div className="holdings-value">
                                                                                <div className="holdings-figure">{(res?.SchemeBasic?.ExpenseRatio) ? res?.SchemeBasic?.ExpenseRatio
                                                                                    : 'N/A'}</div>
                                                                                <div className="details-title">Expense Ratio</div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-4 col-sm-4  col-6 border-right">
                                                                            <div className="holdings-value">
                                                                                <div className="holdings-figure">{(res?.SchemeBasic?.Benchmark) ? res?.SchemeBasic?.Benchmark
                                                                                    : 'N/A'}</div>
                                                                                <div className="details-title">BenchMark</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='row'>
                                                                        <div className='col-md-12'>
                                                                            <div className='val-exiload'>
                                                                                <h4>Exit Load</h4>
                                                                                <h5>{res.SchemeBasic.ExitLoad}</h5>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
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
                            </div>

                            <div className='card-mn box-shadow analysis-portfolio'>
                                <div className='row align-items-center'>
                                    <div className='col-md-6'>
                                        <h2 className='title-secnd'>Scheme's Portfolio <span>Analysis</span></h2>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='order-wise-sec'>
                                            <p className='firt-par'>As on: {schemeDistributionAsOnDate}</p>
                                            <p className='view-lc'>View allocation % by</p>
                                            <div className='drop-items'>
                                                <div
                                                    className='form-select'
                                                    onClick={() => setDropdownVisible(!isDropdownVisible)}
                                                >
                                                    <span>{selectedDropDownValue}</span>
                                                </div>
                                                {isDropdownVisible && (
                                                    <div className='form-select-btn'>
                                                        <button
                                                            selected
                                                            onClick={() => showHideDropDown('3')}
                                                            value='3'
                                                        >
                                                            Sector
                                                        </button>
                                                        <button onClick={() => showHideDropDown('2')} value='2'>
                                                            Company
                                                        </button>
                                                        <button
                                                            onClick={() => showHideDropDown('1')}
                                                            value='1'
                                                        >
                                                            Market Cap
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div className='cont-all-details'>
                                            <div className='list-tabs-number'>
                                                <button
                                                    className={toggleState === 1 ? "tabs  active-tabs" : "tabs"}
                                                    onClick={() => { getDistributionData('1', true); toggleTab(1); }}
                                                    disabled={!schemeDistributionResponse?.Equity || schemeDistributionResponse?.Equity?.NetAssetPercent === 0}
                                                >
                                                    Equity: {schemeDistributionResponse?.Equity ? `: ${(schemeDistributionResponse.Equity.NetAssetPercent).toFixed(2)}%` : ''}

                                                </button>
                                                <button
                                                    className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                                                    onClick={() => { getDistributionData('2', true); toggleTab(2); }}
                                                    disabled={!schemeDistributionResponse?.Debt || schemeDistributionResponse?.Debt?.NetAssetPercent === 0}
                                                >
                                                    Debt: {schemeDistributionResponse?.Debt ? `: ${(schemeDistributionResponse.Debt.NetAssetPercent).toFixed(2)}%` : ''}

                                                </button>
                                                <button
                                                    className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                                                    onClick={() => { getDistributionData('3', true); toggleTab(3); }}
                                                    disabled={!schemeDistributionResponse?.Others || schemeDistributionResponse?.Others?.NetAssetPercent === 0}
                                                >

                                                    Others

                                                </button>
                                            </div>
                                            <div className="content-tabs-details" style={{ display: selectedDropDownValue !== 'Sector' ? 'none' : 'block' }}>
                                                <div
                                                    className={toggleState === 1 ? "content  active-content" : "content"}
                                                >
                                                    <div className="equity-tab-cont">
                                                        <div className='lft-chart'>
                                                            <Doughnut data={datas} options={charteroption} />
                                                        </div>
                                                        {
                                                            topSectorsResponseObject ?
                                                                <div className="right-cont-details">
                                                                    <Accordion defaultActiveKey="0">
                                                                        {

                                                                            topSectorsResponseObject.map((sectors, index) => {
                                                                                return (
                                                                                    <Accordion.Item eventKey={index + ""} key={index}>
                                                                                        <Accordion.Header as="h3" className='faq-header'>
                                                                                            <span className='cirl' style={{ backgroundColor: randDarkColor(sectors.color) }}>

                                                                                            </span>
                                                                                            <div className='header-flx'>
                                                                                                <h4>{sectors.Sector}</h4>
                                                                                                <h3 style={{ color: randDarkColor(sectors.color) }}> {(sectors.NetAssetPercent)}%</h3>
                                                                                            </div>
                                                                                        </Accordion.Header>
                                                                                        <Accordion.Body>
                                                                                            {sectors.lTopHoldings.map((holding, i) => (
                                                                                                <div key={i} className='acd-list'>
                                                                                                    <h4>{i + 1}. {holding.Company}</h4>
                                                                                                    <h4>{(holding.NetAssetPercent)}%</h4>
                                                                                                </div>
                                                                                            ))}
                                                                                        </Accordion.Body>
                                                                                    </Accordion.Item>
                                                                                )
                                                                            })


                                                                        }

                                                                    </Accordion>
                                                                </div>
                                                                :
                                                                <div className="text-center">
                                                                    <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                                                </div>
                                                        }

                                                    </div>
                                                </div>

                                                <div
                                                    className={toggleState === 2 ? "content  active-content" : "content"}
                                                >
                                                    <div className="equity-tab-cont">
                                                        <div className='lft-chart'>
                                                            <Doughnut data={datas1} options={charteroption} />
                                                        </div>
                                                        {
                                                            topSectorsResponseObject ?
                                                                <div className="right-cont-details">
                                                                    <Accordion defaultActiveKey="0">
                                                                        {

                                                                            topSectorsResponseObject.map((sectors, index) => {
                                                                                return (
                                                                                    <Accordion.Item eventKey={index + ""} key={index} >
                                                                                        <Accordion.Header as="h3" className='faq-header'>
                                                                                            <span className='cirl' style={{ backgroundColor: randDarkColor(sectors.color) }}>

                                                                                            </span>
                                                                                            <div className='header-flx'>
                                                                                                <h4>{sectors.Sector} Others</h4>
                                                                                                <h3 style={{ color: randDarkColor(sectors.color) }}>{(sectors.NetAssetPercent)}%</h3>
                                                                                            </div>
                                                                                        </Accordion.Header>
                                                                                        <Accordion.Body>
                                                                                            {sectors.lTopHoldings.map((holding, i) => (
                                                                                                <div key={i} className='acd-list'>
                                                                                                    <h4>{i + 1}. {holding.Company}</h4>
                                                                                                    <h4>{(holding.NetAssetPercent)}%</h4>
                                                                                                </div>
                                                                                            ))}
                                                                                        </Accordion.Body>
                                                                                    </Accordion.Item>
                                                                                )
                                                                            })


                                                                        }
                                                                    </Accordion>
                                                                </div>
                                                                :
                                                                <div className="text-center">
                                                                    <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                                                </div>
                                                        }
                                                    </div>
                                                </div>

                                                <div
                                                    className={toggleState === 3 ? "content  active-content" : "content"}
                                                >
                                                    <div className="equity-tab-cont">
                                                        <div className='lft-chart'>
                                                            <Doughnut data={datas1} options={charteroption} />
                                                        </div>
                                                        {
                                                            topSectorsResponseObject ?
                                                                <div className="right-cont-details">
                                                                    <Accordion defaultActiveKey="0">
                                                                        {

                                                                            topSectorsResponseObject.map((sectors, index) => {
                                                                                return (
                                                                                    <Accordion.Item eventKey={index + ""} key={index} >
                                                                                        <Accordion.Header as="h3" className='faq-header'>
                                                                                            <span className='cirl' style={{ backgroundColor: randDarkColor(sectors.color) }}>

                                                                                            </span>
                                                                                            <div className='header-flx'>
                                                                                                <h4>{sectors.Sector} Others</h4>
                                                                                                <h3 style={{ color: randDarkColor(sectors.color) }}>{(sectors.NetAssetPercent)}%</h3>
                                                                                            </div>
                                                                                        </Accordion.Header>
                                                                                        <Accordion.Body>
                                                                                            {sectors.lTopHoldings.map((holding, i) => (
                                                                                                <div key={i} className='acd-list'>
                                                                                                    <h4>{i + 1}. {holding.Company}</h4>
                                                                                                    <h4>{(holding.NetAssetPercent)}%</h4>
                                                                                                </div>
                                                                                            ))}
                                                                                        </Accordion.Body>
                                                                                    </Accordion.Item>
                                                                                )
                                                                            })


                                                                        }
                                                                    </Accordion>
                                                                </div>
                                                                :
                                                                <div className="text-center">
                                                                    <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                                                </div>
                                                        }
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="content-tabs-details scrollbar" style={{ display: selectedDropDownValue !== 'Company' ? 'none' : 'block' }}>
                                                {topHoldingsResponseObject.length > 0 ? (
                                                    <div className='content-tabs-details-company'>
                                                        <table>
                                                            {topHoldingsResponseObject.map((company, index) => (
                                                                <tr key={index}>
                                                                    <td>{index + 1}. {company.Company}</td>
                                                                    <td>{(company.NetAssetPercent).toFixed(2)}%</td>
                                                                </tr>
                                                            ))}
                                                        </table>
                                                    </div>
                                                ) : (
                                                    <div className="accordion" style={{ display: topHoldingsResponseObject.length === 0 && !showDropdownLoader ? 'block' : 'none' }}>
                                                        <div className="col-md-4 col-9 m-auto">
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="content-tabs-details" style={{ display: selectedDropDownValue !== 'Market Cap' ? 'none' : 'block' }}>

                                                <div className='equity-tab-cont'>
                                                    <div className='lft-chart'>
                                                        <Doughnut data={datas2} options={charteroption} />
                                                    </div>
                                                    <div className="right-cont-market-details">
                                                        {marketCapResponseObject.Large && (
                                                            <div className="holdings-value large ">
                                                                <div className="holdings-figure">{(marketCapResponseObject.Large.NetAssetPercent).toFixed(2)}%</div>
                                                                <div className="details-title ">Large</div>
                                                            </div>
                                                        )}
                                                        {marketCapResponseObject.Mid && (
                                                            <div className="holdings-value mid">
                                                                <div className="holdings-figure">{(marketCapResponseObject.Mid.NetAssetPercent).toFixed(2)}%</div>
                                                                <div className="details-title ">Mid</div>
                                                            </div>
                                                        )}
                                                        {marketCapResponseObject.Small && (
                                                            <div className="holdings-value small ">
                                                                <div className="holdings-figure">{(marketCapResponseObject.Small.NetAssetPercent).toFixed(2)}%</div>
                                                                <div className="details-title">Small</div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                            </div>
                                            <div className="accordion" style={{ display: !marketCapResponseObject && !showDropdownLoader && schemeDistributionAsOnDate !== '' ? 'block' : 'none' }}>
                                                <div className="col-md-6 col-9 m-auto">
                                                    <p>Data Not Found</p>
                                                    <div className="col-md-4 col-9 m-auto">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='card-mn fund-mang-details'>
                                {
                                    managardata.map((res, i) => {
                                        return (
                                            <div key={res.FundMgrName}>
                                                <h3>Fund Manager Details</h3>
                                                <h4>{res.FundMgrName}</h4>
                                                <p>{(res.FundMgrProfile).replace('<br>', '')}</p>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div className='card-mn box-shadow fund-comparison-details'>
                                <h2 className='title-secnd'><span>Peer</span> Scheme Comparison</h2>
                                {
                                    peerComparisonResponseObject.length ?
                                        <div>
                                            {
                                                peerComparisonResponseObject.map((res, i) => {
                                                    return (
                                                        <div className='scheme-list' key={i}>
                                                            <div className='scheme-list-itm '>
                                                                <div className='list-itm-lft'>
                                                                    <h4><a href={`/scheme/${optimezeString(res.SchemeName)}-${res.SchemeCode}-${res.SchemePlanCode}`}>
                                                                        {res.SchemeName}
                                                                    </a></h4>
                                                                    <h5><span>AUM</span> {res.Size + ' Cr'}</h5>
                                                                    <div className='rating-det'>
                                                                        {[1, 2, 3, 4, 5].map((rating) => (
                                                                            <FontAwesomeIcon
                                                                                key={rating}
                                                                                icon={faStar}
                                                                                className={`${res?.CMSStarRatings >= rating ? 'fill' : 'unfill'}`}
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                                <div className={`list-itm-rght ${res.nDistance === 0 ? 'active-itm' : ''}`} >
                                                                    <ul className='reset'>
                                                                        <li>
                                                                            <h4>{res.OneYearReturn}</h4>
                                                                            <h5>1 Year</h5>
                                                                        </li>
                                                                        <li>
                                                                            <h4>{res.ThreeYearReturn}</h4>
                                                                            <h5>3 Year</h5>
                                                                        </li>
                                                                        <li>
                                                                            <h4>{res.ExpenseRatio || 'N/A'}</h4>
                                                                            <h5>Expense Ratio</h5>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>

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
                            <div className='card-mn box-shadow performance-hist-details'>
                                <h2 className='title-secnd'>Scheme's <span>Performance</span> (Historical)</h2>
                                <div className='table-responsive'>
                                    {
                                        performanceResponseObject.length ?
                                            <table className='table'>

                                                <thead>
                                                    <tr>
                                                        <th>
                                                            Calendar
                                                        </th>
                                                        <th>
                                                            Fund Return(%)
                                                        </th>
                                                        <th>
                                                            Category Average(%)
                                                        </th>
                                                        <th>
                                                            Category Best(%)
                                                        </th>
                                                    </tr>
                                                </thead>

                                                <tbody >
                                                    {
                                                        performanceResponseObject.map((res, i) => {
                                                            return (
                                                                <tr key={i}>
                                                                    <td>{res.label}</td>
                                                                    <td>{(res.FundReturn).toFixed(2)}</td>
                                                                    <td>{(res.CategoryAvg).toFixed(2)}</td>
                                                                    <td>{(res.CategoryBest).toFixed(2)}</td>
                                                                </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>

                                            </table>
                                            :
                                            <div className="text-center">
                                                <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                            </div>
                                    }
                                </div>
                            </div>
                            <div className='card-mn box-shadow card-calculator'>
                                <div className='row'>
                                    <div className='col-md-6'>
                                        <h2 className='title-secnd'>Lumpsum & SIP <span>Calculator</span></h2>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className="toggle">
                                            <span className={`${!typeOfCalc ? 'selected' : ''}`}>Lumpsum</span>
                                            <input
                                                type="checkbox"
                                                id="exchangeToggle"
                                                name="exchangeToggle"
                                                checked={typeOfCalc}
                                                onChange={(e) => { setTypeOfCalc(e.target.checked) }}
                                            />
                                            <label></label>
                                            <span className={`${typeOfCalc ? 'selected' : ''}`}>SIP</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-md-12'>
                                        <div>

                                            {
                                                sipLumpsumdta && sipLumpsumdta.map((res, i) => {
                                                    return (
                                                        <div key={i}>
                                                            <div className='midl-txt'>
                                                                {typeOfCalc ?
                                                                    <p>
                                                                        SIP of <strong>₹{minInvested}</strong> for <strong>{noOfMonths} Months</strong> would have gained <strong>{(res.AbsoluteProfit).toFixed(2)}%</strong> & its value would have been <strong>₹{Math.floor(res.CurrentValue)}</strong>
                                                                    </p>
                                                                    : <p>
                                                                        Investment of <strong>₹{minInvested}</strong> for{' '}
                                                                        <strong>{noOfMonths} Months </strong> would have resulted in gain of{' '}
                                                                        <strong>{(res.AbsoluteProfit).toFixed(2)}%</strong> & its value would have been{' '}
                                                                        <strong>₹{Math.floor(res.CurrentValue)}</strong>
                                                                    </p>
                                                                }
                                                            </div>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </div>
                                        <div className='accordian-sec'>
                                            <Accordion defaultActiveKey='0'>
                                                <Accordion.Item eventKey='0'>
                                                    <Accordion.Header as='h3' className='faq-header'></Accordion.Header>
                                                    <Accordion.Body>
                                                        <div className='invst-amt-hirizon'>
                                                            <div className='form-lft'>
                                                                <Form autoComplete='off'>
                                                                    <Form.Group className='formgrp' controlId='formBasicEmail'>
                                                                        <Form.Label className='formlabel'>
                                                                            Enter Amount you Want to Invest{' '}
                                                                        </Form.Label>
                                                                        <div className='amt-enter'>
                                                                            <Form.Control
                                                                                type='text'
                                                                                name='firstName'
                                                                                value={minInvested}
                                                                                maxLength='12'
                                                                                className='formcontrol'
                                                                                onChange={(e) => { setMinInvested(e.target.value) }}
                                                                            />
                                                                        </div>
                                                                        <span className='text-danger'>{errorMsg} </span>
                                                                    </Form.Group>
                                                                </Form>
                                                            </div>
                                                            <div className='horizon-slider'>
                                                                <div className='row align-items-center'>
                                                                    <div className='col-md-8'>
                                                                        <div className='slidecontainer'>
                                                                            <h6>Investment Horizon</h6>
                                                                            <div className='middle'>
                                                                                <div className='slider-container'>
                                                                                    <span className='bar'>
                                                                                        <span
                                                                                            className='fill'
                                                                                            style={fillStyle}
                                                                                        ></span>
                                                                                    </span>
                                                                                    <input
                                                                                        type='range'
                                                                                        className='slider'
                                                                                        id='myRange'
                                                                                        min='6'
                                                                                        max='60'
                                                                                        step='6'
                                                                                        value={noOfMonths}
                                                                                        onChange={(e) => {
                                                                                            const updatedNoOfMonths = parseInt(e.target.value, 10);
                                                                                            setNoOfMonths(updatedNoOfMonths);
                                                                                            sipLumpsumCalc(e, false, updatedNoOfMonths);

                                                                                        }}
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className='col-md-4'>
                                                                        <div className='float-right'>
                                                                            <span>{monthsLabel}</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            </Accordion>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className='details-more-cont'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-md-10'>
                            {
                                schemedata.map((res, i) => {
                                    return (
                                        <div className='more-cont-dcr' key={res.SchemeCode}>
                                            <h2 className='title-secnd'>Invest in {res.SchemeBasic.SchemeMainName} <span>Online</span></h2>
                                            <p>With Choice, grow your wealth in mutual funds as we enable you to buy {res.SchemeBasic.SchemeMainName} online. We help you understand all the important details to Invest in {res.SchemeBasic.SchemeMainName} Scheme such as its Value, NAV, AUM, Performance, Exit Load, etc. along with its Historical Returns. Also, you can calculate the Expected Future Returns of this scheme using our Lumpsum & SIP Calculator and access its Sector-wise, Company- wise and Category-wise Holdings!</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
            <div className={"right-form-main " + (isActive ? 'shadow' : 'none-shadow')}>
                <div className={"form-mobile " + (isActive ? 'p-hide' : 'p-show')}>
                    <button className="close-arrow-mb" onClick={handleClick}>
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.3164 1.82026e-06C4.63799 -0.00329398 0.0319564 4.46942 0.0285663 9.99011C0.0251763 15.5108 4.62569 19.9889 10.3041 19.9922C13.0322 19.9965 15.6496 18.944 17.5774 17.0674C19.506 15.194 20.5903 12.6526 20.592 10.0021C20.5953 4.48139 15.9948 0.00329772 10.3164 1.82026e-06ZM10.3167 18.9922C5.20633 18.9955 1.06078 14.9706 1.05726 10.0022C1.05381 5.03382 5.19377 1.00336 10.3041 1C12.7594 0.995729 15.1152 1.94287 16.8502 3.63184C18.5859 5.31769 19.5619 7.60468 19.5635 9.98999C19.567 14.9584 15.4271 18.9888 10.3167 18.9922ZM11.0313 9.9961L14.3038 6.81446C14.4998 6.62006 14.4998 6.30896 14.3038 6.11456C14.1051 5.91736 13.7795 5.91419 13.5767 6.10742L10.3041 9.28906L7.03157 6.10748C6.83161 5.91699 6.51163 5.91699 6.31168 6.10748C6.10884 6.30072 6.10558 6.61725 6.30433 6.81446L9.57688 9.9961L6.30433 13.1777C6.2079 13.2715 6.15379 13.3986 6.15373 13.5312C6.15373 13.8073 6.38394 14.0312 6.66795 14.0313C6.80437 14.0314 6.93526 13.9787 7.03157 13.8848L10.3041 10.7031L13.5767 13.8848C13.673 13.9787 13.8039 14.0314 13.9403 14.0313C14.0766 14.0312 14.2073 13.9786 14.3038 13.8849C14.5047 13.6896 14.5047 13.373 14.3038 13.1777L11.0313 9.9961Z" fill="#676767" />
                        </svg>
                    </button>
                    <div className={name}>
                        <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                            <Fixedstickyfooter />
                        </GoogleReCaptchaProvider>
                    </div>

                </div>
                <div className={name}>
                    <div className="d-flex justify-content-center btn-view-more-sticky  mt-5 btn-fixed">
                        <button className=" primary-orange-btn scroll-top-account openbtn" onClick={handleClick}>Open My MF Account</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MFTopFunds