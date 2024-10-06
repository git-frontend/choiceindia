import React, { useState, useEffect } from 'react';
import rest from "../../Services/rest";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { API_URLS } from "../../Services/API-URLS";

function Banner() {
  const [Data1, setData1] = useState();
  const [brokerageObj, setBrokerageObj] = useState({
    searchInput: 'TATA CONSULTANCY SERVICES BSE',
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
  const [stateArray, setStateArray] = useState([{ 'name': 'Maharashtra', 'value': 6, 'cashIntraday': 0.002, 'cashDelivery': 0.01, 'fut': 0.002, 'opt': 0.002, 'currency': 0.002, 'commodity': 0.001, 'commodityFut': 0.002, 'commodityOpt': 0.003, 'max': '' }])
  const [scripDetail, setScripDetail] = useState({});
  console.log("scripDetail", scripDetail)
  const [newBrokerageObj, setNewBrokerageObj] = useState('');

  useEffect(() => {
    getSessionId();
    if (brokerageObj.selectedScrip) {
      getScriptDetail(brokerageObj.selectedScrip);
    }
  }, [])


  
  const onKeyChange = () => {
  
    setBrokerageObj(prevState => ({
      ...prevState,
      tableValue: [],
    
    }));

    if (brokerageObj.searchInput.length === 0) {
      setBrokerageObj(prevState => ({
        ...prevState,
        startPos: 0,
        tableValue: [],
      }));
    } else if (brokerageObj.searchInput.length === 1 || brokerageObj.searchInput.length === 2) {
      setBrokerageObj(prevState => ({
        ...prevState,
        startPos: 0,
        tableValue: [],
      }));
    } else if (brokerageObj.searchInput.trim().length >= 3) {
      const request = {
      strScripName: brokerageObj.searchInput,
      StartPos: brokerageObj.startPos,
      NoOfRecords: brokerageObj.limit,
    };

    rest.getSearchData(request)
      .then(res => {
        if (res.Status === "Success" && res.Response) {
          setBrokerageObj(prevState => ({
            ...prevState,
            datalength: res.Response.length,
            tableValue: res.Response,
          }));
        } else {
          setBrokerageObj(prevState => ({
            ...prevState,
            tableValue: [],
          }));
        }
      });


    }
  };

  function getScriptDetail(data) {
    if (data) {
      let payload = {
        nMarketSegmentId: Number(data.SegmentId),
        nToken: Number(data.Token),
        UserId: 'guest'
      };
      rest.getScripDetails(payload).then(res => {
        if (res.Status === "Success" && res.Response) {
          setScripDetail(res.Response);
          onSelectionScrip(data, res.Response)
        } else {
          // Handle error
        }
      });
    }
  }

  function closeList() {
    setBrokerageObj(prevState => ({
      ...prevState,
      tableValue: []
    }));
  }

  //for default brokerage rate 
  const getDefaultBrokerageRate = scrip => {
    let rate = 0;
    if (scrip.isPrice) {
      rate = 20;
    } else if (!scrip.isPrice) {
      rate = (scrip.SegmentId === 1 || scrip.SegmentId === 3) ? (brokerageObj.orderType ? 0.0 : 0.03) : 0.03;
    }
    return rate;
  };

  //On selection Scrip 
  function onSelectionScrip(item, scripDetail) {
    setBrokerageObj((prevState) => ({
      ...prevState,
      selectedScrip: item,
      searchInput: ((item.SegmentId === 1 || item.SegmentId === 3) ? item.SecDesc : item.SecName) + ' ' + item.ExchangeSegment,
      brokerageRate: getDefaultBrokerageRate(item),
    }));

    let payload = {
      UserId: 'guest',
      SessionId: Data1,
      MultipleTokens: item.SegmentId + '@' + item.Token
    };

    rest.multipleTokensURLData(payload).then((res) => {
      if (res.Status === "Success" && res.Response && res.Response.lMT && res.Response.lMT.length) {

        let data = {
          buyPrice: decimalConversion(item.SegmentId, (res.Response.lMT[0].BBP || res.Response.lMT[0].LTP) / 100),
          sellPrice: decimalConversion(item.SegmentId, (res.Response.lMT[0].BSP || res.Response.lMT[0].LTP) / 100),

          searchInput: item.SecDesc + ' ' + item.ExchangeSegment,
          normalizingFactor: ((scripDetail.PriceNum / scripDetail.PriceDen) || 1) * ((scripDetail.GenNum / scripDetail.GenDen) || 1)

        }
        data.sellValue = (brokerageObj.quantity * Number(data.sellPrice) * (res.Response.lMT[0].ML || 1)) * data.normalizingFactor,
          data.buyValue = (brokerageObj.quantity * Number(data.buyPrice) * (res.Response.lMT[0].ML || 1)) * data.normalizingFactor,
          data.turnOver = data.sellValue + data.buyValue
        data.brokerage = data.turnOver * getDefaultBrokerageRate(item) / 100
        data = Object.assign(brokerageObj, data)
        setBrokerageObj(data)
        setTimeout(() => {
          getBrokerage()
        }, 1000);
        closeList()
      }
    });
  }
  const decimalConversion = (segmentId, data) => {
    if (data) {
      data =
        segmentId === 13 || segmentId === 14 ? data.toFixed(4) : data.toFixed(2);
    } else {
      data = segmentId === 13 || segmentId === 14 ? 0.0 : 0.0;
    }
    return data;
  };

  //for session Id
  function getSessionId() {
    let api = new API_URLS();
    fetch(api.getSessionUrl())
      .then(response => response.json())
      .then(res => {
        if (res.Status === 'Success') {
          setData1(res.Response);
        }
      })
      .catch(error => {
        // console.log(error);
      });
  }



  const BrokerageCal = (scrip) => {
    let brokerage;
    let turnover = brokerageObj.turnOver;
    // console.log("tur", turnover)
    let qty = Math.floor(turnover / 10000000);
    // console.log("qty", qty)
    brokerageObj.sebi = qty * 15;
    let brokerageChargeFactor = (Number(brokerageObj.brokerageRate) || 0) / (brokerageObj.selectedScrip.isPrice ? 1 : 100);
    switch (scrip.SegmentId) {
      case 1: // NSE
        brokerage = brokerageObj.orderType ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
        brokerageObj.stt = (brokerageObj.orderType ? (0.1 * turnover) : (0.025 * brokerageObj.sellValue)) / 100;
        brokerageObj.transactionCharge = (0.00297 * turnover) / 100;
        brokerageObj.clearance = 0.01;
        // brokerageObj.stateStampDuty = (brokerageObj.orderType ? (selectedState.cashDelivery * brokerageObj.buyValue) : (selectedState.cashIntraday * brokerageObj.buyValue)) / 100;
        break;
      case 3: // BSE
        brokerage = brokerageObj.orderType ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
        brokerageObj.stt = (brokerageObj.orderType ? (0.1 * turnover) : (0.025 * brokerageObj.sellValue)) / 100;
        brokerageObj.transactionCharge = (0.00297 * turnover) / 100;
        brokerageObj.clearance = 0.01;
        // brokerageObj.stateStampDuty = (brokerageObj.orderType ? (selectedState.cashDelivery * brokerageObj.buyValue) : (selectedState.cashIntraday * brokerageObj.buyValue)) / 100;
        break;
      case 2: // NSEFO
        if (scrip.OptionType === 'XX') {
          brokerage = brokerageChargeFactor * turnover;
          brokerageObj.stt = (0.01 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = (0.00173 * turnover) / 100;
          brokerageObj.clearance = (0.0005 * turnover) / 100;
          //   brokerageObj.stateStampDuty = (brokerageObj.orderType ? (selectedState.fut * brokerageObj.buyValue) : (selectedState.fut * brokerageObj.buyValue)) / 100;
        } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') {
          brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);
          brokerageObj.stt = (0.05 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = (0.05 * turnover) / 100;
          brokerageObj.clearance = (0.002 * turnover) / 100;
          //   brokerageObj.stateStampDuty = (brokerageObj.orderType ? (selectedState.opt * brokerageObj.buyValue) : (selectedState.opt * brokerageObj.buyValue)) / 100;
        }
        break;
      case 5: // MCX
        if (scrip.OptionType === 'XX') {
          //   brokerageObj.stateStampDuty = (selectedState.commodityFut * brokerageObj.buyValue) / 
          // 100;
          brokerage = brokerageChargeFactor * turnover;
          brokerageObj.stt = (0.01 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = ((0.0026 * brokerageObj.buyValue) + (0.0025 * brokerageObj.sellValue)) / 100;
          brokerageObj.clearance = (0.0003 * turnover) / 100;
        } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') {
          //   brokerageObj.stateStampDuty = (selectedState.commodityOpt * brokerageObj.buyValue) / 100;
          brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);
          brokerageObj.stt = (0.05 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = (0.05 * turnover) / 100;
          brokerageObj.clearance = (0.02 * turnover) / 100;
        }
        break;
      case 7: // NCDEX
        if (scrip.OptionType === 'XX') { // FUT
          //   brokerageObj.stateStampDuty = (selectedState.commodityFut * brokerageObj.buyValue) / 100;
          brokerage = brokerageChargeFactor * turnover;
          brokerageObj.stt = (0.01 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = (0.0040 * turnover) / 100;
          brokerageObj.clearance = (0.0003 * turnover) / 100;
        } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') { // Call/PUT
          //   brokerageObj.stateStampDuty = (selectedState.commodityOpt * brokerageObj.buyValue) / 100;
          brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);
          brokerageObj.stt = (0.05 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = (0.05 * turnover) / 100;
          brokerageObj.clearance = (0.02 * turnover) / 100;
        }
        break;
      case 13: // NSECDS
        // brokerageObj.stateStampDuty = (selectedState.currency * brokerageObj.buyValue) / 100;
        if (scrip.OptionType === 'XX') {
          brokerage = brokerageChargeFactor * turnover;
          brokerageObj.stt = 0;
          brokerageObj.transactionCharge = (0.0009 * turnover) / 100;
          brokerageObj.clearance = (0.0005 * turnover) / 100;
        } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') {
          brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);
          brokerageObj.stt = 0;
          brokerageObj.transactionCharge = (0.035 * turnover) / 100;
          brokerageObj.clearance = (0.002 * turnover) / 100;
        }
        break;
      default:
        break;
    }
    return brokerage;
  };

  function getBrokerage() {
    let payload = {
      "segment": brokerageObj.selectedScrip.SegmentId,
      "token": brokerageObj.selectedScrip.Token,
      "symbol": brokerageObj.selectedScrip.SecName,
      "product": brokerageObj.orderType ? 'd' : "m",
      "isFuture": brokerageObj.selectedScrip.OptionType == 'XX',
      "clientId": "guest",
      "isBrokerageCalculator": true
    }
    rest.getScripBrokerageURL(payload).then(res => {
      const newBrokerageObj = JSON.parse(JSON.stringify(brokerageObj));
      if (res.Status === 'Success' && res.Response) {
        let buyBrokerage = res.Response.buyBrokerage;
        let sellBrokerage = res.Response.sellBrokerage;
        newBrokerageObj.stt = 0;
        newBrokerageObj.transactionCharge = 0;
        newBrokerageObj.clearance = 0;
        newBrokerageObj.GST = 0;
        newBrokerageObj.sebi = 0;
        newBrokerageObj.stateStampDuty = 0;

        if (brokerageObj.sellValue) {
          newBrokerageObj.stt = brokerageObj.sellValue * sellBrokerage.stt;
          newBrokerageObj.transactionCharge =
            brokerageObj.sellValue * sellBrokerage.transactionCharges;
          newBrokerageObj.stateStampDuty =
            brokerageObj.sellValue * sellBrokerage.stampDuty;
          newBrokerageObj.sebi =
            brokerageObj.sellValue * sellBrokerage.turnoverFees;

          if (
            brokerageObj.selectedScrip.SegmentId === 1 ||
            brokerageObj.selectedScrip.SegmentId === 3
          ) {
            newBrokerageObj.clearance = 0.01;
          } else {
            newBrokerageObj.clearance =
              brokerageObj.sellValue * sellBrokerage.clearingCharges;
          }

          newBrokerageObj.GST =
            (newBrokerageObj.brokerage +
              newBrokerageObj.transactionCharge +
              newBrokerageObj.clearance) *
            sellBrokerage.gst;
        }

        if (brokerageObj.buyValue) {
          newBrokerageObj.stt +=
            brokerageObj.buyValue * buyBrokerage.stt;
          newBrokerageObj.transactionCharge +=
            brokerageObj.buyValue * buyBrokerage.transactionCharges;
          newBrokerageObj.stateStampDuty +=
            brokerageObj.buyValue * buyBrokerage.stampDuty;
          newBrokerageObj.sebi +=
            brokerageObj.buyValue * buyBrokerage.turnoverFees;

          if (
            brokerageObj.selectedScrip.SegmentId === 1 ||
            brokerageObj.selectedScrip.SegmentId === 3
          ) {
            newBrokerageObj.clearance += 0.01;
          } else {
            newBrokerageObj.clearance +=
              brokerageObj.buyValue * buyBrokerage.clearingCharges;
          }

          newBrokerageObj.GST =
            (newBrokerageObj.brokerage +
              newBrokerageObj.transactionCharge +
              newBrokerageObj.clearance) *
            buyBrokerage.gst;

          // console.log("brokerageObj.buyValue", brokerageObj.buyValue)
        }

        //  Object.assign(newBrokerageObj, brokerageObj);
        setNewBrokerageObj(newBrokerageObj);
        // console.log("newBrokerageObj", newBrokerageObj)
        // console.log("brokerageObj", brokerageObj)
      } else {

      }
    },
      (err) => {

      })
  }

  function onOrderTypeChange() {
    setBrokerageObj((prevState) => ({
      ...prevState,
      orderType: !prevState.orderType,
      // brokerage: BrokerageCal(prevState.selectedScrip),
      GST: (18 * (prevState.brokerage + prevState.transactionCharge + prevState.clearance)) / 100,
    }));
  }

  
  function onBrokerageRateChange(e) {
    const inputValue = e.target.value;
    // Check if the input is a valid number with decimal point using a regular expression
    const isValidInput = /^-?\d*\.?\d*$/.test(inputValue);

    // If the input is a valid number with decimal point, update the state
    if (isValidInput) {
      setBrokerageObj((prevState) => ({
        ...prevState,
        brokerageRate: inputValue,
      }));
      brokerageObj.brokerage = brokerageObj.turnOver * parseFloat(inputValue) / 100;
      brokerageObj.GST = (18 * (brokerageObj.brokerage + brokerageObj.transactionCharge + brokerageObj.clearance)) / 100;
    }
  }
  // Calculate and update the necessary state values
  const onQuantityChange = (e) => {
    const input = e.target.value;
    if (/^[0-9]*(\.[0-9]*)?$/.test(input) || input === '') {
      const normalizingFactor = ((scripDetail.PriceNum / scripDetail.PriceDen) || 1) * ((scripDetail.GenNum / scripDetail.GenDen) || 1);
      const sellValue = input * brokerageObj.sellPrice * (brokerageObj.selectedScrip?.MarketLot || 1) * normalizingFactor;
      const buyValue = input * brokerageObj.buyPrice * (brokerageObj.selectedScrip?.MarketLot || 1) * normalizingFactor;
      const turnOver = sellValue + buyValue;
      const brokerageRate = getDefaultBrokerageRate(brokerageObj.selectedScrip);
      const brokerage = turnOver * brokerageRate / 100;
      const GST = (18 * (brokerage + brokerageObj.transactionCharge + brokerageObj.clearance)) / 100;

      setBrokerageObj(prevState => ({
        ...prevState,
        quantity: input,
        normalizingFactor,
        sellValue,
        buyValue,
        turnOver,
        brokerage,
        GST,
      }));
    }

  };


  const onSellPriceChange = (e) => {
    const input = e.target.value;
    // Calculate and update the necessary state values
    if (/^[0-9]*(\.[0-9]*)?$/.test(input) || input === '') {
      const normalizingFactor = ((scripDetail.PriceNum / scripDetail.PriceDen) || 1) * ((scripDetail.GenNum / scripDetail.GenDen) || 1);
      const sellValue = brokerageObj.quantity * input * (brokerageObj.selectedScrip?.MarketLot || 1) * normalizingFactor;
      const turnOver = sellValue + brokerageObj.buyValue;
      const brokerageRate = getDefaultBrokerageRate(brokerageObj.selectedScrip);
      const brokerage = turnOver * brokerageRate / 100;
      const GST = (18 * (brokerage + brokerageObj.transactionCharge + brokerageObj.clearance)) / 100;

      setBrokerageObj(prevState => ({
        ...prevState,
        sellPrice: input,
        normalizingFactor,
        sellValue,
        turnOver,
        brokerage,
        GST,
      }));
    }
  };


  const onBuyPriceChange = (e) => {
    const input = e.target.value;
    if (/^[0-9]*(\.[0-9]*)?$/.test(input) || input === '') {
      const normalizingFactor = ((scripDetail.PriceNum / scripDetail.PriceDen) || 1) * ((scripDetail.GenNum / scripDetail.GenDen) || 1);
      const buyValue = brokerageObj.quantity * input * (brokerageObj.selectedScrip?.MarketLot || 1) * normalizingFactor;
      const turnOver = buyValue + brokerageObj.sellValue;
      const brokerageRate = getDefaultBrokerageRate(brokerageObj.selectedScrip);
      const brokerage = turnOver * brokerageRate / 100;
      const GST = (18 * (brokerage + brokerageObj.transactionCharge + brokerageObj.clearance)) / 100;

      setBrokerageObj(prevState => ({
        ...prevState,
        buyPrice: input,
        normalizingFactor,
        buyValue,
        turnOver,
        brokerage,
        GST,
      }));
    }
  };

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
                        <li
                          className={`list-group-item ${brokerageObj.orderType ? '' : 'active'}`}
                          onClick={onOrderTypeChange}
                        >
                          Intraday
                        </li>
                        <li
                          className={`list-group-item ${brokerageObj.orderType ? 'active' : ''}`}
                          onClick={onOrderTypeChange}
                        >
                          Delivery
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="content-tabs">
                  <div className="content active-content content">
                    <Form className='form-section'>
                      <div className='left-sec'>
                        <div className="row row-sec">
                          <div className="col-xl-12 col-md-12">
                            <div className='brokerage-search'>
                              <Form.Control
                                type="text"
                                className="form-control input-font search-icon"
                                autoComplete="off"
                                placeholder="Search for scrips"
                                value={brokerageObj.searchInput}
                                onInput={onKeyChange}
                                onChange={(e) => setBrokerageObj({ ...brokerageObj, searchInput: e.target.value })}
                              />
                              <ul className="brokerage-search-result" >
                                {brokerageObj.tableValue.length === 0 &&
                                  brokerageObj.searchInput &&
                                  brokerageObj.searchInput.length > 0 &&
                                  brokerageObj.searchInput.length <= 2 ? (
                                  <li className='brokerage-search-list' key="no-record">No Record Found</li>
                                ) : null}
                                {brokerageObj.tableValue.map(item => (
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
                              {brokerageObj.selectedScrip.SegmentId === 2 || brokerageObj.selectedScrip.SegmentId === 5 || brokerageObj.selectedScrip.SegmentId === 7 ||
                                brokerageObj.selectedScrip.SegmentId === 13 || brokerageObj.selectedScrip?.MarketLot > 1 ? 'Lot(s)' : 'Quantity'}
                            </div>
                            <div className="col-xl-5 col-md-12">
                              <div className='form-control2'>
                                <Form.Control
                                  name="quantity"
                                  type="text"
                                  className="form-control input-form input-1"
                                  placeholder="10"
                                  value={brokerageObj.quantity}
                                  onChange={onQuantityChange}
                                  maxLength="6"
                                />
                              </div>
                              {brokerageObj.selectedScrip.SegmentId === 2 || brokerageObj.selectedScrip.SegmentId === 5 || brokerageObj.selectedScrip.SegmentId === 7 ||
                                brokerageObj.selectedScrip.SegmentId === 13 || brokerageObj.selectedScrip?.MarketLot > 1 ? (
                                <p>1 lot = {brokerageObj.selectedScrip.MarketLot}</p>
                              ) : null}
                            </div>
                          </div>
                          <div className="row row-sec width-resp">
                            <div className="col-xl-7 col-md-12">
                              <p className='frm-label'>Buy Price</p>
                            </div>
                            <div className="col-xl-5 col-md-12">
                              <div className='form-control2'>
                                <span className="rupees-symble">₹</span>
                                <Form.Control
                                  name="buyPrice"
                                  type="text"
                                  className="form-control input-form input-1"
                                  placeholder="₹ 944.40"
                                  value={brokerageObj.buyPrice}
                                  onChange={onBuyPriceChange}
                                  maxLength={10}
                                />
                              </div>

                            </div>
                          </div>
                          <div className="row row-sec width-resp">
                            <div className="col-xl-7 col-md-12">
                              <p className='frm-label'>Sell Price</p>
                            </div>
                            <div className="col-xl-5 col-md-12">
                              <div className='form-control2'>
                                <span className="rupees-symble">₹</span>
                                <Form.Control
                                  name="sellPrice"
                                  type="text"
                                  className="form-control input-form input-1"
                                  placeholder="₹ 944.40"
                                  value={brokerageObj.sellPrice}
                                  onChange={onSellPriceChange}
                                  maxLength={10}
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row row-sec width-resp">
                            <div className="col-xl-7 col-md-12">
                              <p className='frm-label'>Brokerage Rate</p>
                            </div>
                            <div className="col-xl-5 col-md-12">
                              <div className='form-control2'>
                                <Form.Control
                                  name="brokerageRate"
                                  type="text"
                                  className="form-control input-form input-3"
                                  placeholder="0.03"
                                  value={brokerageObj.brokerageRate}
                                  onChange={onBrokerageRateChange}
                                  maxLength={10}
                                />
                                <span className="percent-symble">%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='calculate-btn text-center'>
                          <Button className="btn-bg btn btn-primary" onClick={getBrokerage}>
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
                              <span>{newBrokerageObj?.turnOver? (parseFloat(newBrokerageObj ?.turnOver).toFixed(2)):0.00.toFixed(2)}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span className='text-bold'>Brokerage</span>
                            </div>
                            <div className='flex-items'>
                              <span className='text-bold'>{newBrokerageObj?.brokerage? (parseFloat(newBrokerageObj ?.brokerage).toFixed(2)):0.00.toFixed(2)}</span>
                            </div>
                          </div>
                          <div className='card-flex brd-bottom'>
                            <div className='flex-items'>
                              <span className='font-danger'>Net P&L</span>
                            </div>
                            <div className='flex-items'>
                              <span className='font-danger'>
                                {parseFloat(
                                  (newBrokerageObj && newBrokerageObj.sellValue) -
                                  (newBrokerageObj && newBrokerageObj.buyValue) -
                                  (
                                    (newBrokerageObj && newBrokerageObj.brokerage) +
                                    (newBrokerageObj && newBrokerageObj.stt) +
                                    (newBrokerageObj && newBrokerageObj.transactionCharge) +
                                    (newBrokerageObj && newBrokerageObj.clearance) +
                                    (newBrokerageObj && newBrokerageObj.GST) +
                                    (newBrokerageObj && newBrokerageObj.sebi)
                                  )
                                ).toFixed(2) !== 'NaN' ?
                                  parseFloat(
                                    (newBrokerageObj && newBrokerageObj.sellValue) -
                                    (newBrokerageObj && newBrokerageObj.buyValue) -
                                    (
                                      (newBrokerageObj && newBrokerageObj.brokerage) +
                                      (newBrokerageObj && newBrokerageObj.stt) +
                                      (newBrokerageObj && newBrokerageObj.transactionCharge) +
                                      (newBrokerageObj && newBrokerageObj.clearance) +
                                      (newBrokerageObj && newBrokerageObj.GST) +
                                      (newBrokerageObj && newBrokerageObj.sebi)
                                    )
                                  ).toFixed(2) : '0.00'}
                              </span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>Brokerage</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.brokerage? (parseFloat(newBrokerageObj ?.brokerage).toFixed(2)):0.00.toFixed(2)}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>STT/CTT</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.stt? (parseFloat(newBrokerageObj ?.stt).toFixed(2)):0.00.toFixed(2)}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>Transaction Charges</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.transactionCharge? (parseFloat(newBrokerageObj ?.transactionCharge).toFixed(2)):0.00.toFixed(2)}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>Clearing Charges</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.clearance? (parseFloat(newBrokerageObj ?.clearance).toFixed(2)):0.00.toFixed(2)}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>GST</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.GST? (parseFloat(newBrokerageObj ?.GST).toFixed(2)):0.00.toFixed(2)}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>State Stamp Duty</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.stateStampDuty? (parseFloat(newBrokerageObj ?.stateStampDuty).toFixed(2)):0.00.toFixed(2)}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>SEBI Turnover Fees</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.sebi? (parseFloat(newBrokerageObj ?.sebi).toFixed(2)):0.00.toFixed(2)}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span className='text-bold'>TOTAL TAXES & CHARGES</span>
                            </div>
                            <div className='flex-items'>
                              <span className='text-bold'>
                                {parseFloat(
                                  (newBrokerageObj && newBrokerageObj.brokerage) +
                                  (newBrokerageObj && newBrokerageObj.stt) +
                                  (newBrokerageObj && newBrokerageObj.transactionCharge) +
                                  (newBrokerageObj && newBrokerageObj.clearance) +
                                  (newBrokerageObj && newBrokerageObj.GST) +
                                  (newBrokerageObj && newBrokerageObj.sebi)
                                ).toFixed(2) !== "NaN" ?
                                  parseFloat(
                                    (newBrokerageObj && newBrokerageObj.brokerage) +
                                    (newBrokerageObj && newBrokerageObj.stt) +
                                    (newBrokerageObj && newBrokerageObj.transactionCharge) +
                                    (newBrokerageObj && newBrokerageObj.clearance) +
                                    (newBrokerageObj && newBrokerageObj.GST) +
                                    (newBrokerageObj && newBrokerageObj.sebi)
                                  ).toFixed(2) :
                                  "0.00"}
                              </span>
                              
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span className='text-bold'>Net Buy Value</span>
                            </div>
                            <div className='flex-items'>
                              <span className='text-bold'>{newBrokerageObj?.buyValue? (parseFloat(newBrokerageObj ?.buyValue).toFixed(2)):0.00.toFixed(2)}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span className='text-bold'>Net Sell Value</span>
                            </div>
                            <div className='flex-items'>
                              <span className='text-bold'>{newBrokerageObj?.sellValue? (parseFloat(newBrokerageObj ?.sellValue).toFixed(2)):0.00.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Form>
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

export default Banner;
