import React from 'react'
import { useState, useEffect } from 'react';
import rest from "../../Services/rest";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { API_URLS } from "../../Services/API-URLS";
function Banner() {
    const [Data1, setData1] = useState();
    const [searchInput, setSearchInput] = useState('');
    const [brokerageObj, setBrokerageObj] = useState({
        searchInput: '',
        startPos: 0,
        limit: 10,
        tableValue: [],
        selectedScrip: {
          Token: 532540,
          SegmentId: 3,
          SecDesc: "TATA CONSULTANCY SERVICES",
          SecName: "TCS",
          MarketLot: 1,
          ExchangeSegment: "BSE"
        },
        multiTouchlineData: {},
        buyPrice: '',
        sellPrice: '',
        quantity: 1,
        brokerage: 0,
        turnOver: 0,
        orderType: false,
        stt: 0,
        transactionCharge: 0,
        clearance: 0,
        GST: 0,
        sebi: 0,
        state: 6,
        stateStampDuty: 0
      });
      const [toggleState, setToggleState] = useState(1);
      const [data, setData] = useState(0);
      const [scripDetail, setScripDetail] = useState('');
    
      const toggleTab = (index) => {
        setToggleState(index);
      };
    
      let tokens = "";
    
      useEffect(() => {
        getSessionId();
        setBrokerageObj(prevState => ({
          ...prevState,
          brokerageObj: {},
          newBrokerageObj: {},
        }));
      }, []);
    
      function onKeyChange(event) {
        const input = event.target.value;
        console.log("input", input);
        setSearchInput(input);
        setBrokerageObj((prevState) => ({
          ...prevState,
          tableValue: [],
        }));
        const request = {
          strScripName: input,
          StartPos: brokerageObj.startPos,
          NoOfRecords: brokerageObj.limit,
        };
        rest.getSearchData(request)
          .then((res) => {
            if (res.Status === "Success" && res.Response) {
              console.log("res", res.Response);
              setBrokerageObj((prevState) => ({
                ...prevState,
                datalength: res.Response.length,
                tableValue: res.Response,
              }));
            } else {
              setBrokerageObj((prevState) => ({
                ...prevState,
                tableValue: [],
              }));
            }
          });
      }
    
      function onUlScroll(event) {
        if (brokerageObj.searchInput && brokerageObj.searchInput.length >= 3 && event && event.path) {
          let scrollTop = event.path[0].scrollTop;
          let scrollHeight = event.path[0].scrollHeight;
          let scrollBottom = event.path[0].scrollTop + event.path[0].offsetHeight;
    
          if (scrollHeight <= Math.ceil(scrollBottom) && brokerageObj.datalength === 10) {
            setBrokerageObj(prevState => ({
              ...prevState,
              startPos: prevState.startPos + 10
            }));
    
            let data = {
              strScripName: brokerageObj.searchInput,
              StartPos: brokerageObj.startPos + 10,
             NoOfRecords: 10
            };
    
            rest.getSearchData(data).then((res) => {
              if (res.Status === "Success" && res.Response) {
                console.log("getSearchData", res);
                setBrokerageObj(prevState => ({
                  ...prevState,
                  datalength: res.Response.length,
                  tableValue: [...prevState.tableValue, ...res.Response]
                }));
              } else {
                setBrokerageObj(prevState => ({
                  ...prevState,
                  tableValue: []
                }));
              }
            });
          }
        }
      }
    
      function getScriptDetail(data) {
        console.log("hg");
        let payload = {
          nMarketSegmentId: Number(data.SegmentId),
          nToken: Number(data.Token),
          UserId: 'guest'
        };
    
        rest.getScripDetails(payload).then((res) => {
          if (res.Status === "Success" && res.Response) {
            onSelectionScrip(data);
            setScripDetail(res.Response);
          } else {
            // Handle error
          }
        });
      }
    
      const getDefaultBrokerageRate = (scrip) => {
        let rate = 0;
        if (scrip.isPrice) {
          rate = 20;
        } else if (!scrip.isPrice) {
          rate = (scrip.SegmentId === 1 || scrip.SegmentId === 3) ? (brokerageObj.orderType ? 0.0 : 0.03) : 0.03;
        }
        return rate;
      };
    
      const onSelectionScrip = (item) => {
        setBrokerageObj(prevBrokerageObj => ({
          ...prevBrokerageObj,
          selectedScrip: item,
          searchInput: ((item.SegmentId === 1 || item.SegmentId === 3) ? item.SecDesc : item.SecName) + ' ' + item.ExchangeSegment,
          brokerageRate: getDefaultBrokerageRate(item)
        }));
    
        let payload = {
          UserId: 'guest',
          SessionId: Data1,
          MultipleTokens: item.SegmentId + '@' + item.Token
        };
    
        rest.multipleTokensURLData(payload).then((res) => {
          if (res.Status === "Success" && res.Response && res.Response.lMT && res.Response.lMT.length) {
            console.log("res.Response",res.Response)
            const lmt = res.Response.lMT[0];
    
            setBrokerageObj(prevBrokerageObj => ({
              ...prevBrokerageObj,
              buyPrice: (lmt.BBP || lmt.LTP) / lmt.PriceDivisor,
              sellPrice: (lmt.BSP || lmt.LTP) / lmt.PriceDivisor,
              buyPrice: decimalConversion(item.SegmentId, prevBrokerageObj.buyPrice),
              sellPrice: decimalConversion(item.SegmentId, prevBrokerageObj.sellPrice),
              normalizingFactor: ((scripDetail.PriceNum / scripDetail.PriceDen) || 1) * ((scripDetail.GenNum / scripDetail.GenDen) || 1),
              sellValue: (prevBrokerageObj.quantity * prevBrokerageObj.sellPrice * (lmt.MarketLot || 1)) * prevBrokerageObj.normalizingFactor,
              buyValue: (prevBrokerageObj.quantity * prevBrokerageObj.buyPrice * (lmt.MarketLot || 1)) * prevBrokerageObj.normalizingFactor,
              turnOver: prevBrokerageObj.sellValue + prevBrokerageObj.buyValue,
            //   brokerage: BrokerageCal(item), // Replace with your implementation of BrokerageCal
              GST: (18 * (prevBrokerageObj.brokerage + prevBrokerageObj.transactionCharge + prevBrokerageObj.clearance)) / 100
              
            }));
            
            getBrokerage();
          }
        });
      }
    
      const decimalConversion = (segmentId, data) => {
        if (data) {
          data = segmentId === 13 || segmentId === 14 ? data.toFixed(4) : data.toFixed(2);
        } else {
          data = segmentId === 13 || segmentId === 14 ? 0.0 : 0.0;
        }
        return data;
      };
    
      function getSessionId() {
        let api = new API_URLS();
        fetch(api.getSessionUrl())
          .then(response => {
            return response.json();
          })
          .then(res => {
            if (res.Status === 'Success') {
              setData1(res.Response);
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    
    //   function getBrokerage() {
    //     let payload = {
    //       segment: brokerageObj.selectedScrip.SegmentId,
    //       token: brokerageObj.selectedScrip.Token,
    //       symbol: brokerageObj.selectedScrip.SecName,
    //       product: brokerageObj.orderType ? 'd' : 'm',
    //       isFuture: brokerageObj.selectedScrip.OptionType === 'XX',
    //       clientId: "guest",
    //       isBrokerageCalculator: true
    //     };
    
    //     rest.getScripBrokerageURL(payload).then((res) => {
    //       const newBrokerageObj = JSON.parse(JSON.stringify(brokerageObj));
    //       console.log("getScripBrokerageURL", res);
    //       if (res.Status === "Success" && res.Response) {
    //         let buyBrokerage = res.Response.buyBrokerage;
    //         let sellBrokerage = res.Response.sellBrokerage;
    //         newBrokerageObj.stt = 0;
    //         newBrokerageObj.transactionCharge = 0;
    //         newBrokerageObj.clearance = 0;
    //         newBrokerageObj.GST = 0;
    //         newBrokerageObj.sebi = 0;
    //         newBrokerageObj.stateStampDuty = 0;
    
    //         if (brokerageObj.sellValue) {
    //           newBrokerageObj.stt = brokerageObj.sellValue * sellBrokerage.stt;
    //           newBrokerageObj.transactionCharge = brokerageObj.sellValue * sellBrokerage.transactionCharges;
    //           newBrokerageObj.stateStampDuty = brokerageObj.sellValue * sellBrokerage.stampDuty;
    //           newBrokerageObj.sebi = brokerageObj.sellValue * sellBrokerage.turnoverFees;
    
    //           if (brokerageObj.selectedScrip.SegmentId === 1 || brokerageObj.selectedScrip.SegmentId === 3) {
    //             newBrokerageObj.clearance = (brokerageObj.sellValue * sellBrokerage.clearingCharges) / 100;
    //           }
    
    //           newBrokerageObj.GST = (18 * (newBrokerageObj.brokerage + newBrokerageObj.transactionCharge + newBrokerageObj.clearance)) / 100;
    //         }
    
    //         setBrokerageObj(newBrokerageObj);
    //       }
    //     });
    //   }
    //   const BrokerageCal = (scrip) => {
    //     let brokerage;
    //     let turnover = brokerageObj.turnOver;
    //     let qty = Math.floor(turnover / 10000000);
    //     brokerageObj.sebi = qty * 15;
    //     // let selectedState = stateArray.filter((obj) => obj.value === brokerageObj.state)[0];
    //     let brokerageChargeFactor = (Number(brokerageObj.brokerageRate) || 0) / (brokerageObj.selectedScrip.isPrice ? 1 : 100);
    //     switch (scrip.SegmentId) {
    //       case 1: // NSE
    //         brokerage = brokerageObj.orderType ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
    //         brokerageObj.stt = (brokerageObj.orderType ? (0.1 * turnover) : (0.025 * brokerageObj.sellValue)) / 100;
    //         brokerageObj.transactionCharge = (0.00325 * turnover) / 100;
    //         brokerageObj.clearance = 0.01;
    //         // brokerageObj.stateStampDuty = (brokerageObj.orderType ? (selectedState.cashDelivery * brokerageObj.buyValue) : (selectedState.cashIntraday * brokerageObj.buyValue)) / 100;
    //         break;
    //       case 3: // BSE
    //         brokerage = brokerageObj.orderType ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
    //         brokerageObj.stt = (brokerageObj.orderType ? (0.1 * turnover) : (0.025 * brokerageObj.sellValue)) / 100;
    //         brokerageObj.transactionCharge = (0.00325 * turnover) / 100;
    //         brokerageObj.clearance = 0.01;
    //         // brokerageObj.stateStampDuty = (brokerageObj.orderType ? (selectedState.cashDelivery * brokerageObj.buyValue) : (selectedState.cashIntraday * brokerageObj.buyValue)) / 100;
    //         break;
    //       case 2: // NSEFO
    //         if (scrip.OptionType === 'XX') {
    //           brokerage = brokerageChargeFactor * turnover;
    //           brokerageObj.stt = (0.01 * brokerageObj.sellValue) / 100;
    //           brokerageObj.transactionCharge = (0.0019 * turnover) / 100;
    //           brokerageObj.clearance = (0.0005 * turnover) / 100;
    //         //   brokerageObj.stateStampDuty = (brokerageObj.orderType ? (selectedState.fut * brokerageObj.buyValue) : (selectedState.fut * brokerageObj.buyValue)) / 100;
    //         } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') {
    //           brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);
    //           brokerageObj.stt = (0.05 * brokerageObj.sellValue) / 100;
    //           brokerageObj.transactionCharge = (0.05 * turnover) / 100;
    //           brokerageObj.clearance = (0.002 * turnover) / 100;
    //         //   brokerageObj.stateStampDuty = (brokerageObj.orderType ? (selectedState.opt * brokerageObj.buyValue) : (selectedState.opt * brokerageObj.buyValue)) / 100;
    //         }
    //         break;
    //       case 5: // MCX
    //         if (scrip.OptionType === 'XX') {
    //         //   brokerageObj.stateStampDuty = (selectedState.commodityFut * brokerageObj.buyValue) / 
    //         // 100;
    //           brokerage = brokerageChargeFactor * turnover;
    //           brokerageObj.stt = (0.01 * brokerageObj.sellValue) / 100;
    //           brokerageObj.transactionCharge = ((0.0026 * brokerageObj.buyValue) + (0.0025 * brokerageObj.sellValue)) / 100;
    //           brokerageObj.clearance = (0.0003 * turnover) / 100;
    //         } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') {
    //         //   brokerageObj.stateStampDuty = (selectedState.commodityOpt * brokerageObj.buyValue) / 100;
    //           brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);
    //           brokerageObj.stt = (0.05 * brokerageObj.sellValue) / 100;
    //           brokerageObj.transactionCharge = (0.05 * turnover) / 100;
    //           brokerageObj.clearance = (0.02 * turnover) / 100;
    //         }
    //         break;
    //       case 7: // NCDEX
    //         if (scrip.OptionType === 'XX') { // FUT
    //         //   brokerageObj.stateStampDuty = (selectedState.commodityFut * brokerageObj.buyValue) / 100;
    //           brokerage = brokerageChargeFactor * turnover;
    //           brokerageObj.stt = (0.01 * brokerageObj.sellValue) / 100;
    //           brokerageObj.transactionCharge = (0.0040 * turnover) / 100;
    //           brokerageObj.clearance = (0.0003 * turnover) / 100;
    //         } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') { // Call/PUT
    //         //   brokerageObj.stateStampDuty = (selectedState.commodityOpt * brokerageObj.buyValue) / 100;
    //           brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);
    //           brokerageObj.stt = (0.05 * brokerageObj.sellValue) / 100;
    //           brokerageObj.transactionCharge = (0.05 * turnover) / 100;
    //           brokerageObj.clearance = (0.02 * turnover) / 100;
    //         }
    //         break;
    //       case 13: // NSECDS
    //         // brokerageObj.stateStampDuty = (selectedState.currency * brokerageObj.buyValue) / 100;
    //         if (scrip.OptionType === 'XX') {
    //           brokerage = brokerageChargeFactor * turnover;
    //           brokerageObj.stt = 0;
    //           brokerageObj.transactionCharge = (0.0009 * turnover) / 100;
    //           brokerageObj.clearance = (0.0005 * turnover) / 100;
    //         } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') {
    //           brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);
    //           brokerageObj.stt = 0;
    //           brokerageObj.transactionCharge = (0.035 * turnover) / 100;
    //           brokerageObj.clearance = (0.002 * turnover) / 100;
    //         }
    //         break;
    //       default:
    //         break;
    //     }
    //     return brokerage;
    //   };
      function onQuantityChange (){}
    return (
        <>
            <section className='banner-section'>
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-xl-8 col-md-12'>
                            <div className='banner-ttle text-center'>
                                <h1 className='big-ttl'>Brokerage Calculator</h1>
                                <p>Use the brokerage calculator to calculate exactly how much you will pay in brokerage and your breakeven.</p>
                            </div>
                        </div>
                    </div>
                    <div className='field-sec'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <div className='tabs-btn'>
                                    <div className='row'>
                                        <div className='col-xl-4 col-md-6'>
                                            <ul className='list_group1'>
                                                <li className={toggleState === 1 ? "list-group-item tabs active" : "list-group-item"}
                                                    onClick={() => { toggleTab(1); setData(0) }}>Intraday</li>
                                                <li className={toggleState === 2 ? "list-group-item tabs active" : "list-group-item"}
                                                    onClick={() => { toggleTab(2); setData(1) }}>Delivery</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="content-tabs">
                                    <div className={toggleState === 1 ? "content active-content" : "content"}>
                                        <Form className='form-section'>
                                            <div className='left-sec'>
                                                <div className="row row-sec">
                                                    {/* <div className="col-xl-7 col-md-12">
                                                        <p className='frm-label'>Search for scrips</p>
                                                    </div> */}
                                                    <div className="col-xl-12 col-md-12">
                                                        <div className='brokerage-search'>
                                                            {/* <input className='form-control input-font search-icon' placeholder='TATA CHEMICALS LTD NSE'/> */}
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control input-font search-icon"
                                                                autoComplete="off"
                                                                placeholder="Search for scrips"
                                                                value={searchInput}
                                                                onChange={onKeyChange}
                                                            />
                                                            <ul className="brokerage-search-result" onScroll={onUlScroll}>
                                                                {brokerageObj.tableValue.length === 0 && searchInput && (searchInput.length > 0 || searchInput.length <= 2) && (
                                                                    <li key="no-record" >No Record Found</li>
                                                                )}
                                                                {brokerageObj.tableValue.map((item) => (
                                                                    <li className='brokerage-search-list' key={item.id} onClick={() => getScriptDetail(item)}>
                                                                        <span className="symbol">{item.SecName}</span>
                                                                        <span className="name">{item.SecDesc}</span>
                                                                        <span className="exchange">{item.ExchangeSegment}</span>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='mobile-view'>
                                                    <div className="row row-sec width-resp">
                                                        <div className="col-xl-7 col-md-12">
                                                            <p className='frm-label'>Quantity</p>
                                                        </div>
                                                        <div className="col-xl-5 col-md-12">
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control input-font"
                                                                placeholder="10"
                                                                value={brokerageObj.quantity}
                                                                onChange={onQuantityChange}
                                                                maxLength="6"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row row-sec width-resp">
                                                        <div className="col-xl-7 col-md-12">
                                                            <p className='frm-label'>Buy Price</p>
                                                        </div>
                                                        <div className="col-xl-5 col-md-12">
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control input-font"
                                                                placeholder="₹ 944.40"
                                                                value={brokerageObj.buyPrice}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row row-sec width-resp">
                                                        <div className="col-xl-7 col-md-12">
                                                            <p className='frm-label'>Sell Price</p>
                                                        </div>
                                                        <div className="col-xl-5 col-md-12">
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control input-font"
                                                                placeholder="₹ 944.40"
                                                                value={brokerageObj.sellPrice}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="row row-sec width-resp">
                                                        <div className="col-xl-7 col-md-12">
                                                            <p className='frm-label'>Brokerage Rate</p>
                                                        </div>
                                                        <div className="col-xl-5 col-md-12">
                                                            <Form.Control
                                                                type="text"
                                                                className="form-control input-font percent"
                                                                placeholder="0.03"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='calculate-btn text-center'>
                                                    <Button type="submit" className="btn-bg btn btn-primary" >
                                                        Calculate Brokerage
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className='right-sec'>
                                                <div className='brokerage-card'>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Turnover</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>1,888.80</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>Brokerage</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>0.57</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex brd-bottom'>
                                                        <div className='flex-items'>
                                                            <span className='font-danger'>Net P&L</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='font-danger'>-0.99</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Brokerage</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>0.57</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>STT/CTT</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>0.24</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Transaction Charges</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span> 0.06</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>Clearing Charges</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>0.01</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>GST</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>0.11</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>State Stamp Duty</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span>0.02</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span>SEBI Turnover Fees</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span> 0.00</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>TOTAL TAXES & CHARGES</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>0.99</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>Net Buy Value</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>994.40</span>
                                                        </div>
                                                    </div>
                                                    <div className='card-flex'>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>Net Sell Value</span>
                                                        </div>
                                                        <div className='flex-items'>
                                                            <span className='text-bold'>994.40</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                    {/* <div className={toggleState === 2 ? "content  active-content" : "content"}>
                                    Vehicle Loan
                                </div> */}
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