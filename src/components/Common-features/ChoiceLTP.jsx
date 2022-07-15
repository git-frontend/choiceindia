import "../Investors-info/investorsinfo.scss";
import { AiFillCaretUp,AiFillCaretDown } from "react-icons/ai";
import { subscribeOnStream , unsubscribeFromStream} from './../../Services/socketData.js';
import React, { useEffect,useState } from "react";
import { API_URLS } from "../../Services/API-URLS";
 function ChoiceLTP() {

    const [ b5Data, setB5Data] = useState({});
    const [ companyData, setCompanyData] = useState({change:0, changePercent:0,color:'green',LTP_DATA:0});
/**To Execute one timeonly */
const [trigger, setTrigger] = useState(false)
  let new6={}



      useEffect(() => {
        setTrigger(true)
        if (trigger === true) {
          console.log("use effect called")
            generateSessionId()
        }
        return () => {
          unsubscribeFromStream({})
        }
    }, [trigger])


    /*   useEffect(()=>{

      },[companyData]) */
      let onRealtimeCallback=(data)=>{
        console.log("onRealtimeCallback: ",data)
        processB5String(data.responseString,null)
      }

  /**
   * Generate Session Id
   */
  function generateSessionId() {
    let api=new API_URLS()
    fetch(api.getSessionUrl())
      .then(response => {
        return response.json();
      })
      .then(res => {
        console.log("res",res)
        if(res.Status=='Success'){
            getKeyInfo(res.Response)
        }
        
      })

  }


    /**
   * Generate Session Id
   */
     function getKeyInfo(session) {
        let keyInfoPayload = { "UserId": 'guest', "SessionId": session || '', "Token": 8866, "SegmentId": 1 };
        fetch('https://api.jiffy.in/api/cm/ProfileMkt/KeyInfo/',{
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

                    let keyInfo = res.Response;
                    let newB5 = {};
                    newB5['MarketLot'] = keyInfo.MarketLot;
                    newB5['PrevClose'] = keyInfo.PrevClose;
                     newB5["MktCap"] = keyInfo.MktCap;
                    newB5['LTP'] = (keyInfo.LTP == 0) ? (newB5['PrevClose']) : keyInfo.LTP; // if LTP == 0 then show prevClose (10/05/2021)
                 let string = '|1=' + 1 + '|74=' + 0 + '|73=' + 0 + '|7=' + 8866 + '|8=' + keyInfo.LTP + '|9=' + keyInfo.LTQ + '|399=' + keyInfo.PriceDivisor + '|75=' + keyInfo.OpenPrice + '|76=' + keyInfo.ClosePrice + '|77=' + keyInfo.HighPrice + '|78=' + keyInfo.LowPrice + '|93=' + keyInfo.LifeTimeHigh + '|94=' + keyInfo.LifeTimeLow + '|88=' + keyInfo.OpenInterest + '|80=' + keyInfo.ATP + '|79=' + keyInfo.Volume + '|';
                 setB5Data(newB5)
                 new6=newB5
                 setTimeout(()=>{
                  processB5String(string,newB5)
                    subscribeOnStream(1,8866,onRealtimeCallback,'guest',session,false,)
                },1000)
                    
           
            
          })
    
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

  let processB5String=(b5String,newB5)=>{
	b5String = b5String.replace(/\$/g, "|");
	let splitData = pipeToObject(b5String);
if((splitData[0]["7"])=='8866'){
  
  console.log(newB5," datata ",b5Data)
  let bestData=newB5||new6
	let indicesData={}
		indicesData['PrevClose'] = bestData.PrevClose||0;
    
    indicesData["LTP"] = (splitData[0]["8"] == 0) ? (bestData.PrevClose) : (splitData[0]["8"] / splitData[0]["399"]) || 0; // if LTP == 0 then show prevClose (10/05/2021)
    indicesData["LTP_DATA"] = ((splitData[0]["8"] == 0) ? (bestData.PrevClose) : (splitData[0]["8"] / splitData[0]["399"]) || 0).toFixed(2); // if LTP == 0 then show prevClose (10/05/2021)
	indicesData["diff"] = indicesData["LTP"] - (indicesData['PrevClose'] / splitData[0]["399"]);
	indicesData["percentage"] = (((indicesData["diff"]) / ((indicesData["LTP"]) - indicesData["diff"])) * 100) || 0;
	indicesData["change"] = indicesData['PrevClose']==0?0:Math.abs(indicesData["diff"]).toFixed(2);
	indicesData["changePercent"] = indicesData['PrevClose']==0?0:Math.abs(indicesData["percentage"]).toFixed(2);
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
    setCompanyData(indicesData)

    console.log("onRealtimeCallback processed",indicesData)}
}

  
    return (
        <section className="countsect">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <h2 className="counttext">Choice International Limited</h2>
            </div>
            <div className="col-md-6">
              <div className="count">

                <div className="number"><span className={companyData?.color}>{companyData?.LTP_DATA}</span> <div className="result">  {companyData?.color=='red'?<AiFillCaretDown className={companyData?.color} />:<AiFillCaretUp className={companyData?.color} />} <div className="percentage"><span className={companyData?.color}>{companyData?.change}</span> ({companyData?.changePercent}%)</div></div></div>


              </div>
              {/* <div className="subtextwrap d-flex">
      <div className="nse">
        <p className="subtext">NSE</p>
      </div>
      <div className="time">
        <p className="subtext">As on 11 Apr, 2022 | 14:12</p>
      </div>
    </div> */}
            </div>
          </div>
          {/* style="width: 100%; height: 1200px; margin-top:50px;" */}
        </div>
      </section>
    );
  }


  export default  React.memo(ChoiceLTP);