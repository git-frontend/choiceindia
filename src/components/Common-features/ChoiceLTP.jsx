import "../Investors-info/investorsinfo.scss";
import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";
import { subscribeOnStream, unsubscribeFromStream,subscribeMultitouchline,unSubscribeMultitouchline } from './../../Services/socketData.js';
import React, { useEffect, useState } from "react";
import { API_URLS } from "../../Services/API-URLS";
import rest from "../../Services/rest.js";
function ChoiceLTP() {

 // const [ b5Data, setB5Data] = useState({});
  const [companyData, setCompanyData] = useState({ 8866: { change: 0, changePercent: 0, color: 'green', LTP_DATA: 0 }, 531358: { change: 0, changePercent: 0, color: 'green', LTP_DATA: 0 } });
  /**To Execute one timeonly */
  const [trigger, setTrigger] = useState(false)
  let new6 = {8866:{},531358:{}}



  useEffect(() => {
    setTrigger(true)
    if (trigger === true) {
      //console.log("use effect called")
      rest.generateSessionId(getKeyInfo);
    }
    return () => {
      unsubscribeFromStream({})
    }
  }, [trigger])


  /*   useEffect(()=>{

    },[companyData]) */
  let onRealtimeCallback = (data) => {
    // console.log("onRealtimeCallback: ",data)
    processB5String(data.responseString, null)
  }

  /**
   * Generate Session Id
   */
  // function generateSessionId() {
  //   let api = new API_URLS()
  //   fetch(api.getSessionUrl())
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(res => {
  //       //  console.log("res",res)
  //       if (res.Status == 'Success') {
  //         getKeyInfo(res.Response, [{ SegmentId: 1, Token: 8866, key: 'nse' }, { SegmentId: 3, Token: 531358, key: 'bse' }])//{ SegmentId: 1, Token: 8866, key: 'nse' }, { SegmentId: 3, Token: 531358, key: 'bse' }
  //       }

  //     })

  // }


  /**
 * Generate Session Id
 */
  function getKeyInfo(session, scrips) {
    scrips.forEach(ele => {
      let keyInfoPayload = { "UserId": 'guest', "SessionId": session || '', "Token": ele.Token, "SegmentId": ele.SegmentId };
      fetch('https://finx.choiceindia.com/api/cm/ProfileMkt/KeyInfo/', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(keyInfoPayload) // body data type must match "Content-Type" header
      })
        .then(response => {
          return response.json();
        })
        .then(res => {

          let keyInfo = res.Response||{};
          let newB5 = {};
          newB5['MarketLot'] = keyInfo.MarketLot||0;
          newB5['PrevClose'] = keyInfo.PrevClose||0;
          newB5["MktCap"] = keyInfo.MktCap||0;
          newB5['LTP'] = (keyInfo.LTP == 0) ? (newB5['PrevClose']) : keyInfo.LTP; // if LTP == 0 then show prevClose (10/05/2021)
          let string = '|1=' + ele.SegmentId + '|74=' + 0 + '|73=' + 0 + '|7=' + ele.Token + '|8=' + keyInfo.LTP + '|9=' + keyInfo.LTQ + '|399=' + keyInfo.PriceDivisor + '|75=' + keyInfo.OpenPrice + '|76=' + keyInfo.ClosePrice + '|77=' + keyInfo.HighPrice + '|78=' + keyInfo.LowPrice + '|93=' + keyInfo.LifeTimeHigh + '|94=' + keyInfo.LifeTimeLow + '|88=' + keyInfo.OpenInterest + '|80=' + keyInfo.ATP + '|79=' + keyInfo.Volume + '|';
         //  setB5Data(newB5)
          new6[ele.Token]=newB5
          setTimeout(() => {
            processB5String(string, newB5, ele.Token)
          
          }, 1000)



        })
    })
    subscribeMultitouchline(scrips, onRealtimeCallback,session)

  }
  /**
   * Convert data to object
   * @param {*} data Data 
   * @returns Converted Object
   */
  let pipeToObject = (data) => {
    let name;
    let object = {};
    data.substring(1, data.length - 1).split(/\||=/).forEach((item, index) => {
      index % 2 ? (object[name] = item) : (name = item);
    });
    return [object];
  };

  let processB5String = (b5String, newB5, key) => {
    b5String = b5String.replace(/\$/g, "|");
    let splitData = pipeToObject(b5String);
    if ((splitData[0]["7"]) == '8866' || (splitData[0]["7"]) == '531358') {

   
      let bestData = newB5 || new6[key||splitData[0]["7"]]  || {}
     // console.log(" datata ",bestData)
      let indicesData = {}
      indicesData['PrevClose'] = bestData.PrevClose || 0;

      indicesData["LTP"] = (splitData[0]["8"] == 0) ? (bestData.PrevClose) : (splitData[0]["8"] / splitData[0]["399"]) || 0; // if LTP == 0 then show prevClose (10/05/2021)
      indicesData["LTP_DATA"] = ((splitData[0]["8"] == 0) ? (bestData.PrevClose) : (splitData[0]["8"] / splitData[0]["399"]) || 0).toFixed(2); // if LTP == 0 then show prevClose (10/05/2021)
      indicesData["diff"] = indicesData["LTP"] - (indicesData['PrevClose'] / splitData[0]["399"]);
      indicesData["percentage"] = (((indicesData["diff"]) / ((indicesData["LTP"]) - indicesData["diff"])) * 100) || 0;
      indicesData["change"] = indicesData['PrevClose'] == 0 ? 0 : Math.abs(indicesData["diff"]).toFixed(2);
      indicesData["changePercent"] = indicesData['PrevClose'] == 0 ? 0 : Math.abs(indicesData["percentage"]).toFixed(2);
      if (indicesData["diff"] < 0) {
        indicesData["color"] = "red";
        indicesData["arrow"] = "icon-long-arrow-down"
      }
      else if (indicesData["diff"] === 0) {
        indicesData["color"] = "";
        indicesData["arrow"] = ""
      }
      else if (indicesData["diff"] > 0) {
        indicesData["color"] = "green";
        indicesData["arrow"] = "icon-long-arrow-up"
      }

      indicesData["open"] = splitData[0]["75"] / splitData[0]["399"];
      indicesData["close"] = (splitData[0]["76"] / splitData[0]["399"]);
      indicesData["wKHigh"] = (splitData[0]["93"] / splitData[0]["399"]);
      indicesData["WkLow"] = (splitData[0]["94"] / splitData[0]["399"]);
      indicesData["volume"] = parseInt(splitData[0]["79"]);
      indicesData["high"] = (splitData[0]["8"] == 0) ? indicesData["close"] : splitData[0]["77"] / splitData[0]["399"]; // if ltp == 0 then show prevClose in high (24/05/2021)
      indicesData["low"] = (splitData[0]["8"] == 0) ? indicesData["close"] : splitData[0]["78"] / splitData[0]["399"]; // if ltp == 0 then show prevClose in low (24/05/2021)

      // if(key=='8866'||(splitData[0]["7"])=='8866'){

      // }

      // if(key=='531358'||(splitData[0]["7"])=='531358'){
      //   setCompanyData(prev=>{
      //     return {...prev,...indicesData}
      //   })
      // }
      let ob = {}
      ob[key || splitData[0]["7"]] = indicesData

      setCompanyData(prev => {
        return { ...prev, ...ob }
      })

      //console.log("onRealtimeCallback processed",indicesData)

    }
  }


  return (
    <section className="countsect">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-md-6">
            <h2 className="counttext">Choice International Limited</h2>
          </div>
      <div className="col-md-6 dflex">
      <div className="m-auto">
            <div className="count float-right">

              <div className="number">
                <span className={companyData[8866]?.color}>{companyData[8866]?.LTP_DATA}</span>

              </div>

              {<div className="subtextwrap d-flex">
                <div className="nse">
                  <p className="subtext">NSE</p>
                </div>
                <div className="time">
                  {companyData[8866]?.color == 'red' ? <AiFillCaretDown className={companyData[8866]?.color} /> : <AiFillCaretUp className={companyData[8866]?.color} />}
                  <div className="result">   <div className="percentage"><span className={companyData[8866]?.color}>{companyData[8866]?.change}</span> ({companyData[8866]?.changePercent}%)</div></div>

                </div>
              </div>}
            </div>

          </div>
          <div className="m-auto-break"></div>

          <div className="m-auto">
            <div className="count float-right">

              <div className="number">
                <span className={companyData[531358]?.color}>{companyData[531358]?.LTP_DATA}</span>

              </div>

              {<div className="subtextwrap d-flex">
                <div className="nse">
                  <p className="subtext">BSE</p>
                </div>
                <div className="time">
                  {companyData[531358]?.color == 'red' ? <AiFillCaretDown className={companyData[531358]?.color} /> : <AiFillCaretUp className={companyData[531358]?.color} />}
                  <div className="result">   <div className="percentage"><span className={companyData[531358]?.color}>{companyData[531358]?.change}</span> ({companyData[531358]?.changePercent}%)</div></div>

                </div>
              </div>}
            </div>

          </div>
      </div>
        </div>
        {/* style="width: 100%; height: 1200px; margin-top:50px;" */}
      </div>
    </section>
  );
}


export default React.memo(ChoiceLTP);