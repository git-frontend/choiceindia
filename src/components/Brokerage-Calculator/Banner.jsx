import React, { useState, useEffect } from 'react';
import rest from "../../Services/rest";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { API_URLS } from "../../Services/API-URLS";

function Banner() {
  const [Data1, setData1] = useState();
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
  const [stateArray, setStateArray] = useState([{ 'name': 'Maharashtra', 'value': 6, 'cashIntraday': 0.002, 'cashDelivery': 0.01, 'fut': 0.002, 'opt': 0.002, 'currency': 0.002, 'commodity': 0.001, 'commodityFut': 0.002, 'commodityOpt': 0.003, 'max': '' }])
  const [scripDetail, setScripDetail] = useState('');
  const [newBrokerageObj, setNewBrokerageObj] = useState('');
  
  useEffect(() => {
    getBrokerage();
    getSessionId();
    if (brokerageObj.selectedScrip) {
      getScriptDetail(brokerageObj.selectedScrip);
    }
    // setBrokerageObj((prevState) => ({
    //   ...prevState,
    //   brokerageObj: {},
    // }));
    // setNewBrokerageObj({});
  }, [])


  // For script search
  function onKeyChange(event) {
    const input = event.target.value;
    // console.log("input", input);

    setBrokerageObj(prevState => ({
      ...prevState,
      tableValue: [],
      searchInput: input
    }));

    const request = {
      strScripName: input,
      StartPos: brokerageObj.startPos,
      NoOfRecords: brokerageObj.limit,
    };

    rest.getSearchData(request)
      .then(res => {
        if (res.Status === "Success" && res.Response) {
          // console.log("res", res.Response);
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

  // For script selected
  function onUlScroll(event) {
    const target = event.target;
    if (
      target.scrollTop + target.clientHeight >= target.scrollHeight &&
      brokerageObj.searchInput &&
      brokerageObj.searchInput.length >= 3 &&
      brokerageObj.datalength === 10
    ) {
      setBrokerageObj(prevState => ({
        ...prevState,
        startPos: prevState.startPos + 10,
      }));

      let data = {
        strScripName: brokerageObj.searchInput,
        StartPos: brokerageObj.startPos + 10,
        NoOfRecords: 10,
      };

      rest.getSearchData(data).then(res => {
        if (res.Status === "Success" && res.Response) {
          // console.log("getSearchData", res);
          setBrokerageObj(prevState => ({
            ...prevState,
            datalength: res.Response.length,
            tableValue: [...prevState.tableValue, ...res.Response],
          }));
        } else {
          setBrokerageObj(prevState => ({
            ...prevState,
            tableValue: [],
          }));
        }
      });
    }
  }

  // function getScriptDetail(data) {
  //   // console.log("hg");
  //   let payload = {
  //     nMarketSegmentId: Number(data.SegmentId),
  //     nToken: Number(data.Token),
  //     UserId: 'guest'
  //   };

  //   rest.getScripDetails(payload).then(res => {
  //     if (res.Status === "Success" && res.Response) {
  //       onSelectionScrip(data);
  //       setScripDetail(res.Response);
  //       // console.log("gfg", res.Response)
  //       closeList();
  //     } else {
  //       // Handle error
  //     }
  //   });
  // }
  function getScriptDetail(data) {
    let payload = {
      nMarketSegmentId: Number(data.SegmentId),
      nToken: Number(data.Token),
      UserId: 'guest'
    };
  
    rest.getScripDetails(payload).then(res => {
      if (res.Status === "Success" && res.Response) {
        setScripDetail(res.Response);
        onSelectionScrip(data);
        closeList();
      } else {
        // Handle error
      }
    });
  }
  
  function closeList() {
    setBrokerageObj(prevState => ({
      ...prevState,
      tableValue: []
    }));
  }

  const getDefaultBrokerageRate = scrip => {
    let rate = 0;
    if (scrip.isPrice) {
      rate = 20;
    } else if (!scrip.isPrice) {
      rate = (scrip.SegmentId === 1 || scrip.SegmentId === 3) ? (brokerageObj.orderType ? 0.0 : 0.03) : 0.03;
    }
    return rate;
  };

  function onSelectionScrip(item) {
    setBrokerageObj(prevState => ({
      ...prevState,
      selectedScrip: item,
      searchInput: ((item.SegmentId === 1 || item.SegmentId === 3) ? item.SecDesc : item.SecName) + ' ' + item.ExchangeSegment,
      brokerageRate: getDefaultBrokerageRate(item)
    }));

    let payload = {
      UserId: 'guest',
      SessionId: Data1,
      MultipleTokens: item.SegmentId + '@' + item.Token
    };

    rest.multipleTokensURLData(payload).then(res => {
      if (res.Status === "Success" && res.Response && res.Response.lMT && res.Response.lMT.length) {

        setBrokerageObj(prevState => ({
          ...prevState,
          buyPrice: (res.Response.lMT[0].BBP || res.Response.lMT[0].LTP) / 100,
          sellPrice: (res.Response.lMT[0].BSP || res.Response.lMT[0].LTP) / 100,
          normalizingFactor: ((scripDetail.PriceNum / scripDetail.PriceDen) || 1) * ((scripDetail.GenNum / scripDetail.GenDen) || 1),
          sellValue: (prevState.quantity * prevState.sellPrice * (res.Response.lMT[0].MarketLot || 1)) * prevState.normalizingFactor,
          buyValue: (prevState.quantity * prevState.buyPrice * (res.Response.lMT[0].MarketLot || 1)) * prevState.normalizingFactor,
          turnOver: prevState.sellValue + prevState.buyValue,
          brokerage: BrokerageCal(item),
          GST: (18 * (prevState.brokerage + prevState.transactionCharge + prevState.clearance)) / 100,
        }));
        getBrokerage();
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

  // const onQuantityChange = () => {
  //   setBrokerageObj((prevState) => ({
  //     ...prevState,
  //     normalizingFactor:
  //       ((scripDetail.PriceNum / scripDetail.PriceDen) || 1) *
  //       ((scripDetail.GenNum / scripDetail.GenDen) || 1),
  //     sellValue:
  //       (prevState.quantity * prevState.sellPrice * (prevState.selectedScrip?.MarketLot || 1)) *
  //       prevState.normalizingFactor,
  //     buyValue:
  //       (prevState.quantity * prevState.buyPrice * (prevState.selectedScrip?.MarketLot || 1)) *
  //       prevState.normalizingFactor,
  //     turnOver:
  //       (prevState.quantity * prevState.sellPrice * (prevState.selectedScrip?.MarketLot || 1)) *
  //       prevState.normalizingFactor +
  //       (prevState.quantity * prevState.buyPrice * (prevState.selectedScrip?.MarketLot || 1)) *
  //       prevState.normalizingFactor,
  //     brokerage: BrokerageCal(prevState.selectedScrip),
  //     GST: (18 * (prevState.brokerage + prevState.transactionCharge + prevState.clearance)) / 100,
  //   }));

  //     setBrokerageObj({ ...brokerageObj });
  // }
  // const onQuantityChange = () => {
  //   setBrokerageObj((prevState) => ({
  //     ...prevState,
  //     normalizingFactor:
  //       ((scripDetail.PriceNum / scripDetail.PriceDen) || 1) *
  //       ((scripDetail.GenNum / scripDetail.GenDen) || 1),
  //     sellValue:
  //       (prevState.quantity * prevState.sellPrice * (prevState.selectedScrip?.MarketLot || 1)) *
  //       prevState.normalizingFactor,
  //     buyValue:
  //       (prevState.quantity * prevState.buyPrice * (prevState.selectedScrip?.MarketLot || 1)) *
  //       prevState.normalizingFactor,
  //     turnOver:
  //       (prevState.quantity * prevState.sellPrice * (prevState.selectedScrip?.MarketLot || 1)) *
  //       prevState.normalizingFactor +
  //       (prevState.quantity * prevState.buyPrice * (prevState.selectedScrip?.MarketLot || 1)) *
  //       prevState.normalizingFactor,
  //     brokerage: BrokerageCal(prevState.selectedScrip),
  //     GST: (18 * (prevState.brokerage + prevState.transactionCharge + prevState.clearance)) / 100,
  //   }));

  //   setNewBrokerageObj((prevState) => ({ ...prevState }));
  // }
  const onQuantityChange = () => {
    // Calculate and update the necessary state values
    const normalizingFactor = ((scripDetail.PriceNum / scripDetail.PriceDen) || 1) * ((scripDetail.GenNum / scripDetail.GenDen) || 1);
    const sellValue = brokerageObj.quantity * brokerageObj.sellPrice * (brokerageObj.selectedScrip?.MarketLot || 1) * normalizingFactor;
    const buyValue = brokerageObj.quantity * brokerageObj.buyPrice * (brokerageObj.selectedScrip?.MarketLot || 1) * normalizingFactor;
    const turnOver = sellValue + buyValue;
    const brokerage = BrokerageCal(brokerageObj.selectedScrip);
    const GST = (18 * (brokerage + brokerageObj.transactionCharge + brokerageObj.clearance)) / 100;
  
    setBrokerageObj(prevState => ({
      ...prevState,
      normalizingFactor,
      sellValue,
      buyValue,
      turnOver,
      brokerage,
      GST,
    }));
  };
  
  const BrokerageCal = (scrip) => {
    let brokerage;
    let turnover = brokerageObj.turnOver;
    let qty = Math.floor(turnover / 10000000);
    brokerageObj.sebi = qty * 15;
    let selectedState = stateArray.filter((obj) => obj.value === brokerageObj.state)[0];
    let brokerageChargeFactor = (Number(brokerageObj.brokerageRate) || 0) / (brokerageObj.selectedScrip.isPrice ? 1 : 100);

    switch (scrip.SegmentId) {
      case 1: // NSE
        brokerage = brokerageObj.orderType ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
        brokerageObj.stt = (brokerageObj.orderType ? (0.1 * turnover) : 0.025 * brokerageObj.sellValue) / 100;
        brokerageObj.transactionCharge = (0.00325 * turnover) / 100;
        brokerageObj.clearance = 0.01;
        brokerageObj.stateStampDuty = (brokerageObj.orderType ? (selectedState.cashDelivery * brokerageObj.buyValue) : (selectedState.cashIntraday * brokerageObj.buyValue)) / 100;
        break;
      case 3: // BSE
        brokerage = brokerageObj.orderType ? brokerageChargeFactor * turnover : brokerageChargeFactor * turnover;
        brokerageObj.stt = (brokerageObj.orderType ? 0.1 * turnover : 0.025 * brokerageObj.sellValue) / 100;
        brokerageObj.transactionCharge = (0.00325 * turnover) / 100;
        brokerageObj.clearance = 0.01;
        brokerageObj.stateStampDuty = (brokerageObj.orderType
          ? selectedState.cashDelivery * brokerageObj.buyValue
          : selectedState.cashIntraday * brokerageObj.buyValue) / 100;
        break;
      case 2: // NSEFO
        if (scrip.OptionType === 'XX') {
          brokerage = brokerageChargeFactor * turnover;
          brokerageObj.stt = (0.01 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = (0.0019 * turnover) / 100;
          brokerageObj.clearance = (0.0005 * turnover) / 100;
          brokerageObj.stateStampDuty = (brokerageObj.orderType ? selectedState.fut * brokerageObj.buyValue : selectedState.fut * brokerageObj.buyValue) / 100;
        } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') {
          brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);
          brokerageObj.stt = (0.05 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = (0.05 * turnover) / 100;
          brokerageObj.clearance = (0.002 * turnover) / 100;
          brokerageObj.stateStampDuty = (brokerageObj.orderType ? selectedState.opt * brokerageObj.buyValue : selectedState.opt * brokerageObj.buyValue) / 100;
        }
        break;
      case 5: // MCX
        if (scrip.OptionType === 'XX') {
          brokerageObj.stateStampDuty = (selectedState.commodityFut * brokerageObj.buyValue) / 100;
          brokerage = brokerageChargeFactor * turnover;
          brokerageObj.stt = (0.01 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = ((0.0026 * brokerageObj.buyValue) + (0.0025 * brokerageObj.sellValue)) / 100;
          brokerageObj.clearance = (0.0003 * turnover) / 100;
        } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') {
          brokerageObj.stateStampDuty = (selectedState.commodityOpt * brokerageObj.buyValue) / 100;
          brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);
          brokerageObj.stt = (0.05 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = (0.05 * turnover) / 100;
          brokerageObj.clearance = (0.02 * turnover) / 100;
        }
        break;
      case 7: // NCDEX
        if (scrip.OptionType === 'XX') { // FUT
          brokerageObj.stateStampDuty = (selectedState.commodityFut * brokerageObj.buyValue) / 100;
          brokerage = brokerageChargeFactor * turnover;
          brokerageObj.stt = (0.01 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = (0.0040 * turnover) / 100;
          brokerageObj.clearance = (0.0003 * turnover) / 100;
        } else if (scrip.OptionType === 'CE' || scrip.OptionType === 'PE') { // Call/PUT
          brokerageObj.stateStampDuty = (selectedState.commodityOpt * brokerageObj.buyValue) / 100;
          brokerage = brokerageChargeFactor * brokerageObj.quantity * (brokerageObj.sellValue && brokerageObj.buyValue ? 2 : 1);
          brokerageObj.stt = (0.05 * brokerageObj.sellValue) / 100;
          brokerageObj.transactionCharge = (0.05 * turnover) / 100;
          brokerageObj.clearance = (0.02 * turnover) / 100;
        }
        break;
      case 13: // NSECDS
        brokerageObj.stateStampDuty = (selectedState.currency * brokerageObj.buyValue) / 100;
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

  const toggleTab = index => {
    setToggleState(index);
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
      console.log('newBrokerageObj', newBrokerageObj);

      if (res.Status === 'Success' && res.Response) {
        let buyBrokerage = res.Response.buyBrokerage;
        let sellBrokerage = res.Response.sellBrokerage;
        // console.log("buyBrokerage", buyBrokerage)
        // console.log("sellBrokerage", sellBrokerage)
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

          console.log("brokerageObj.buyValue", brokerageObj.buyValue)
        }

        // Object.assign(newBrokerageObj, brokerageObj);
        setNewBrokerageObj(newBrokerageObj);
      } else {

      }
    },
      (err) => {

      })
  }
  // function getBrokerage() {
  //   let payload = {
  //     "segment": brokerageObj.selectedScrip.SegmentId,
  //     "token": brokerageObj.selectedScrip.Token,
  //     "symbol": brokerageObj.selectedScrip.SecName,
  //     "product": brokerageObj.orderType ? 'd' : "m",
  //     "isFuture": brokerageObj.selectedScrip.OptionType == 'XX',
  //     "clientId": "guest",
  //     "isBrokerageCalculator": true
  //   }
  //   rest.getScripBrokerageURL(payload).then(res => {
  //     const newBrokerageObj = JSON.parse(JSON.stringify(brokerageObj));
  //     console.log('newBrokerageObj', newBrokerageObj);

  //     if (res.Status === 'Success' && res.Response) {
  //       let buyBrokerage = res.Response.buyBrokerage;
  //       let sellBrokerage = res.Response.sellBrokerage;
  //       // console.log("buyBrokerage", buyBrokerage)
  //       // console.log("sellBrokerage", sellBrokerage)
  //       newBrokerageObj.stt = 0;
  //       newBrokerageObj.transactionCharge = 0;
  //       newBrokerageObj.clearance = 0;
  //       newBrokerageObj.GST = 0;
  //       newBrokerageObj.sebi = 0;
  //       newBrokerageObj.stateStampDuty = 0;

  //       if (brokerageObj.sellValue) {
  //         newBrokerageObj.stt = brokerageObj.sellValue * sellBrokerage.stt;
  //         newBrokerageObj.transactionCharge =
  //           brokerageObj.sellValue * sellBrokerage.transactionCharges;
  //         newBrokerageObj.stateStampDuty =
  //           brokerageObj.sellValue * sellBrokerage.stampDuty;
  //         newBrokerageObj.sebi =
  //           brokerageObj.sellValue * sellBrokerage.turnoverFees;

  //         if (
  //           brokerageObj.selectedScrip.SegmentId === 1 ||
  //           brokerageObj.selectedScrip.SegmentId === 3
  //         ) {
  //           newBrokerageObj.clearance = 0.01;
  //         } else {
  //           newBrokerageObj.clearance =
  //             brokerageObj.sellValue * sellBrokerage.clearingCharges;
  //         }

  //         newBrokerageObj.GST =
  //           (newBrokerageObj.brokerage +
  //             newBrokerageObj.transactionCharge +
  //             newBrokerageObj.clearance) *
  //           sellBrokerage.gst;
  //       }

  //       if (brokerageObj.buyValue) {
  //         newBrokerageObj.stt +=
  //           brokerageObj.buyValue * buyBrokerage.stt;
  //         newBrokerageObj.transactionCharge +=
  //           brokerageObj.buyValue * buyBrokerage.transactionCharges;
  //         newBrokerageObj.stateStampDuty +=
  //           brokerageObj.buyValue * buyBrokerage.stampDuty;
  //         newBrokerageObj.sebi +=
  //           brokerageObj.buyValue * buyBrokerage.turnoverFees;

  //         if (
  //           brokerageObj.selectedScrip.SegmentId === 1 ||
  //           brokerageObj.selectedScrip.SegmentId === 3
  //         ) {
  //           newBrokerageObj.clearance += 0.01;
  //         } else {
  //           newBrokerageObj.clearance +=
  //             brokerageObj.buyValue * buyBrokerage.clearingCharges;
  //         }

  //         newBrokerageObj.GST =
  //           (newBrokerageObj.brokerage +
  //             newBrokerageObj.transactionCharge +
  //             newBrokerageObj.clearance) *
  //           buyBrokerage.gst;

  //         console.log("brokerageObj.buyValue", brokerageObj.buyValue)
  //       }

  //       Object.assign(newBrokerageObj, brokerageObj);
  //       setNewBrokerageObj(newBrokerageObj);
  //     } else {

  //     }
  //   },
  //     (err) => {

  //     })
  // }
  function onOrderTypeChange() {
    setBrokerageObj((prevState) => ({
      ...prevState,
      orderType: !prevState.orderType,
      brokerage: BrokerageCal(prevState.selectedScrip),
      GST: (18 * (prevState.brokerage + prevState.transactionCharge + prevState.clearance)) / 100,
    }));
  }

  function onBrokerageRateChange() {
    setBrokerageObj((prevState) => ({
      ...prevState,
      brokerage: BrokerageCal(prevState.selectedScrip),
      GST: (18 * (prevState.brokerage + prevState.transactionCharge + prevState.clearance)) / 100,
    }));
  }
  // const onOrderTypeChange = (prevState) => {
  //   setBrokerageObj({
  //     ...prevState,
  //     orderType: !prevState.orderType,
  //     brokerage: BrokerageCal(prevState.selectedScrip),
  //     GST: (18 * (prevState.brokerage + prevState.transactionCharge + prevState.clearance)) / 100,
  //   });
  // };
  // const onBrokerageRateChange = () => {
  //   setBrokerageObj((prevState) => ({
  //     ...prevState,
  //     orderType: !prevState.orderType,
  //     brokerage: BrokerageCal(prevState.selectedScrip),
  //     GST:
  //       (18 * (prevState.brokerage + prevState.transactionCharge + prevState.clearance)) / 100,
  //   }));
  // }


  
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
                              <ul className="brokerage-search-result" onScroll={onUlScroll}>
                                {brokerageObj.tableValue.length === 0 && brokerageObj.searchInput && (brokerageObj.searchInput.length > 0 || brokerageObj.searchInput.length <= 2) && (
                                  <li key="no-record">No Record Found</li>
                                )}
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
                              <p className='frm-label'>Quantity</p>
                            </div>
                            <div className="col-xl-5 col-md-12">
                              <Form.Control
                                name="quantity"
                                type="text"
                                className="form-control input-font"
                                placeholder="10"
                                value={brokerageObj.quantity}
                                onChange={(e) => setBrokerageObj({ ...brokerageObj, quantity: e.target.value })}
                                onInput={onQuantityChange}
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
                                name="buyPrice"
                                type="text"
                                className="form-control input-font"
                                placeholder="₹ 944.40"
                                value={brokerageObj.buyPrice}
                                onInput={onQuantityChange}
                                onChange={(e) => setBrokerageObj({ ...brokerageObj, buyPrice: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="row row-sec width-resp">
                            <div className="col-xl-7 col-md-12">
                              <p className='frm-label'>Sell Price</p>
                            </div>
                            <div className="col-xl-5 col-md-12">
                              <Form.Control
                                name="sellPrice"
                                type="text"
                                className="form-control input-font"
                                placeholder="₹ 944.40"
                                value={brokerageObj.sellPrice}
                                onInput={onQuantityChange}
                                onChange={(e) => setBrokerageObj({ ...brokerageObj, sellPrice: e.target.value })}
                              />
                            </div>
                          </div>
                          <div className="row row-sec width-resp">
                            <div className="col-xl-7 col-md-12">
                              <p className='frm-label'>Brokerage Rate</p>
                            </div>
                            <div className="col-xl-5 col-md-12">
                              <Form.Control
                                name="brokerageRate"
                                type="text"
                                className="form-control input-font percent"
                                placeholder="0.03"
                                value={brokerageObj.brokerageRate}
                                onChange={(e) => setBrokerageObj({ ...brokerageObj, brokerageRate: e.target.value })}
                                onInput={onBrokerageRateChange}
                              />
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
                              <span>{newBrokerageObj.turnOver}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span className='text-bold'>Brokerage</span>
                            </div>
                            <div className='flex-items'>
                              <span className='text-bold'>{newBrokerageObj?.brokerage}</span>
                            </div>
                          </div>
                          <div className='card-flex brd-bottom'>
                            <div className='flex-items'>
                              <span className='font-danger'>Net P&L</span>
                            </div>
                            <div className='flex-items'>
                              <span className='font-danger'>{(newBrokerageObj && newBrokerageObj.sellValue) - (newBrokerageObj && newBrokerageObj.buyValue) - ((newBrokerageObj && newBrokerageObj.brokerage) + (newBrokerageObj && newBrokerageObj.stt) + (newBrokerageObj && newBrokerageObj.transactionCharge) + (newBrokerageObj && newBrokerageObj.clearance) + (newBrokerageObj && newBrokerageObj.GST) + (newBrokerageObj && newBrokerageObj.sebi))}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>Brokerage</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.brokerage}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>STT/CTT</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.stt}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>Transaction Charges</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.transactionCharge}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>Clearing Charges</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.clearance}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>GST</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.GST}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>State Stamp Duty</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.stateStampDuty}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span>SEBI Turnover Fees</span>
                            </div>
                            <div className='flex-items'>
                              <span>{newBrokerageObj?.sebi}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span className='text-bold'>TOTAL TAXES & CHARGES</span>
                            </div>
                            <div className='flex-items'>
                            <span className='text-bold'>{(newBrokerageObj && newBrokerageObj.brokerage) + (newBrokerageObj && newBrokerageObj.stt) + (newBrokerageObj && newBrokerageObj.transactionCharge) + (newBrokerageObj && newBrokerageObj.clearance) + (newBrokerageObj && newBrokerageObj.GST) + (newBrokerageObj && newBrokerageObj.sebi)}</span>
                              {/* <span className='text-bold'>{(newBrokerageObj?.brokerage) + (newBrokerageObj?.stt) + (newBrokerageObj?.transactionCharge) + (newBrokerageObj?.clearance) + (newBrokerageObj?.GST) + (newBrokerageObj?.sebi)}</span> */}
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span className='text-bold'>Net Buy Value</span>
                            </div>
                            <div className='flex-items'>
                              <span className='text-bold'>{newBrokerageObj?.buyValue}</span>
                            </div>
                          </div>
                          <div className='card-flex'>
                            <div className='flex-items'>
                              <span className='text-bold'>Net Sell Value</span>
                            </div>
                            <div className='flex-items'>
                              <span className='text-bold'>{newBrokerageObj?.sellValue}</span>
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
