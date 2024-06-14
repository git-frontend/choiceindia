import axios from "axios";
import { API_URLS } from "./API-URLS";
import utils from "./utils";

const rest = {

  getCryptoNACHKey: function () {
    const currentDate = new Date().toISOString().slice(0, 10).replace(/-/g, "");
    const secretKey = "NEESISHKRUTRI";
    const data = currentDate + secretKey;
    var SHA256 = require("crypto-js/sha256");
    const apiKey = SHA256(data);
    return apiKey;
  },

  headerConfig: {
    headers: {
      'Content-Type': 'application/json',
      'accept': 'application/json'
    }
  },

  expertReportData: function (postdata) {

    let api = new API_URLS()
    let url = api.fetchResearchReportURL()
    // console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      // console.log("datas",data)
      return data
    })
  },

   //Common function for generating session ID of research-listing and investors page

   generateSessionId:function(func,setShowLoader){
    if(setShowLoader){
    setShowLoader(true);
    } 
    let api = new API_URLS()
    fetch(api.getSessionUrl())
        .then(response => {
            return response.json();
        })
        .then(res => {
            if (res.Status == 'Success') {
                if(window.location.pathname.includes('/research-listing')){
                func(res.Response)
                return;
                }
                func(res.Response,[{ SegmentId: 1, Token: 8866, key: 'nse' }, { SegmentId: 3, Token: 531358, key: 'bse' }]);
                
            } else {
              if(window.location.pathname.includes('/research-listing')){
                func()
              } 
            }

        }, err => {
          if(window.location.pathname.includes('/research-listing')){
            func()
          } 
        })
  },
  
   //Created common function for generating session ID

  generateSession: function (setData1, setlist, setShowLoader, ...args) {
    let api = new API_URLS();
    fetch(api.getSessionUrl())
      .then((response) => {
        return response.json();
      })
      .then(
        (res) => {
          if (res.Status == "Success") {
            if (args.length > 0) {
              if (args[0] === "intraday") {
                this.IntraStocks(res.Response, setlist, setShowLoader);
              } else if (args[0] == "short-term") {
                args[1]();
              } else if (args[0] == "all-stock") {
                args[2]();
              } else if (args[0] == "long-term") {
                args[3]();
              }
              return;
            }
            this.IntraStocks(res.Response, setlist, setShowLoader);
            setData1(res.Response);
          } else {
            this.IntraStocks([], setlist, setShowLoader);
          }
        },
        (err) => {
          this.IntraStocks([], setlist, setShowLoader);
        }
      );
  },

  //Created common function for fetching Intra Stocks Data

  IntraStocks: function (session, setlist, setShowLoader) {
    setlist([]);
    let tokens = "";
    let tokenList = [];
    let storefile = "";
    setShowLoader(true);
    let request = {
      Count: 10,
      endDate: utils.formatDate(new Date(), "dd-MM-yyyy"),
      SessionId: session,
      Start: 0,
      startDate: utils.formatDate(
        new Date(new Date().setFullYear(new Date().getFullYear() - 1)),
        "dd-MM-yyyy"
      ),
      status: "Book Profit",
      type: "EQ",
      UserId: "guest",
      search: "",
    };

    this.signalReportData(request)
      .then((res) => {
        if (res) {
          storefile = res.Response.Data;
          // console.log("storefile",storefile)

          res.Response.Data.forEach((ele) => {
            setShowLoader(false);
            tokenList.push({ SegmentId: ele.Seg, Token: ele.Tok });
            let dateData = ele.TATime;
            if (dateData) {
              let len = dateData.split(" ");
              if (len.length) {
                ele.date = len[0];
              }
            }
            ele.published_date = utils.formatDate(
              new Date(
                ele.date.split("-")[2],
                ele.date.split("-")[1] - 1,
                ele.date.split("-")[0]
              ),
              "dd MMMM'yy"
            );
            ele.call_type = ele.HLType
              ? ele.HLType == "High"
                ? "BUY"
                : ele.HLType == "sell" || ele.HLType == "Low"
                ? "SELL"
                : ""
              : ele.Side
              ? ["B", "BUY", "Buy"].indexOf(ele.Side) > -1
                ? "BUY"
                : ["S", "SELL", "Sell"].indexOf(ele.Side) > -1
                ? "SELL"
                : ""
              : "";
            ele["LTP"] = ele["LTP"] / 100;
          });
          setlist(res.Response.Data);
          let unique = [];
          for (let i = 0; i < tokenList.length; i++) {
            unique.push(
              tokenList[i].SegmentId + "@" + tokenList[i].Token + ","
            );
          }
          unique.forEach((element) => {
            if (!tokens.includes(element)) {
              tokens += element;
            }
          });
          // console.log("SegmentId",tokens);

          // const tokens = this.utils.generateTokens(this.researchList, 'segment_id', 'token');
          const payload = {
            UserId: "guest",
            SessionId: session,
            MultipleTokens: tokens,
          };

          rest
            .multipleTokensURLData(payload)
            .then((res) => {
              if (
                res &&
                res.Response &&
                res.Response.lMT &&
                res.Response.lMT.length
              ) {
                res.Response.lMT.forEach((ele, index) => {
                  ele["LTP"] = ele["LTP"] / 100;
                  ele.PrevClose = ele.PC / 100;
                  ele.Change = Number(ele.LTP) - Number(ele.PrevClose);
                  ele.ChangePer = (ele.Change * 100) / Number(ele.PrevClose);
                  // storefile.keys(Tok).find(key => Tok[key] === ele.Tok)
                  for (let i = 0; i < storefile.length; i++) {
                    if (
                      storefile[i].Tok == ele.Tok &&
                      storefile[i].Seg == ele.Seg
                    ) {
                      setShowLoader(false);
                      AllFilesValue = Object.assign(storefile[i], ele);
                      multiValue.push(AllFilesValue);
                    }
                  }
                });

                setlist(multiValue);
              } else {
                setShowLoader(false);
              }
            })
            .catch((error) => {
              setShowLoader(false);
            });
        }
      })
      .catch((error) => {
        setShowLoader(false);
      });
  },


  //Created a common function for fetching the report data
  fetchReportData: function (request, setShowLoader, setlist, Data1, session) {
    this.expertReportData(request)
      .then((res) => {
        if (res) {
          const tokenList = [];
          let tokens = "";
          // console.log("checkdd",res.response.research);
          let storefile = res.response.research;
          // setlist(res.response.research);

          res.response.research.forEach((ele) => {
            tokenList.push({ SegmentId: ele.segment_id, Token: ele.token });

            ele["LTP"] = ele["LTP"] / 100;
          });

          setlist(res.response.research);
          let unique = [];
          for (let i = 0; i < tokenList.length; i++) {
            unique.push(
              tokenList[i].SegmentId + "@" + tokenList[i].Token + ","
            );
          }
          unique.forEach((element) => {
            if (!tokens.includes(element)) {
              tokens += element;
            }
          });
          // console.log("SegmentId",tokens);
          // const tokens = this.utils.generateTokens(this.researchList, 'segment_id', 'token');
          const payload = {
            UserId: "guest",
            SessionId: session ? session : Data1,
            MultipleTokens: tokens,
          };

          this.multipleTokensURLData(payload)
            .then((res) => {
              if (
                res &&
                res.Response &&
                res.Response.lMT &&
                res.Response.lMT.length
              ) {
                let multiValue = [];
                let AllFilesValue = {};
                res.Response.lMT.forEach((ele, index) => {
                  // console.log("ele", ele)
                  ele["LTP"] = ele["LTP"] / 100;
                  ele.PrevClose = ele.PC / 100;
                  ele.Change = Number(ele.LTP) - Number(ele.PrevClose);
                  ele.ChangePer = (ele.Change * 100) / Number(ele.PrevClose);
                  // storefile.keys(Tok).find(key => Tok[key] === ele.Tok)
                  for (let i = 0; i < storefile.length; i++) {
                    if (
                      storefile[i].token == ele.Tok &&
                      storefile[i].segment_id == ele.Seg
                    ) {
                      AllFilesValue = Object.assign(storefile[i], ele);
                      multiValue.push(AllFilesValue);
                      setShowLoader(false);
                    }
                  }
                });

                setlist(multiValue);
              } else {
                setShowLoader(false);
              }
            })
            .catch((error) => {
              setShowLoader(false);
            });
        }
      })
      .catch((error) => {
        setShowLoader(false);
        setlist([]);
      });
  },

 
  multipleTokensURLData: function (postdata) {

    let api = new API_URLS()
    let url = api.getMultipletokens()
    //  console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //    console.log("datas",data)
      return data
    })
  },

  getUserId() {
    let userId = this.storage.retrieve('userId');
    if (userId) {
      userId = this.decryptText(userId)
    }
    return userId || '';
  },


  IpAddress: function () {
    let api = new API_URLS()
    let url = api.getIpaddressURL()
    return axios.get(url).then(({ data }) => {
      return data
    })
  },

  NACHCancellation: function (request) {
    let api = new API_URLS()
    let url = api.getNACHCancellationURL()
    let ipAddress = request.ip
    return axios.post(url, request, {
      headers: {
        'x-api-key': 'B62664943BAA286B21C66BA9A614D',
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json',
        'ip': ipAddress

      }
    });
  },
  EventDetails: function (postdata) {

    let api = new API_URLS()
    let url = api.getEventDetails()
    // console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("event details",data)
      return data
    })
  },
  getSearchData: function (postdata) {

    let api = new API_URLS()
    let url = api.getSearchURL()
    //  console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      return data
    })
  },
  getScripDetails: function (postdata) {

    let api = new API_URLS()
    let url = api.getScripDetURL()
    //  console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getScripBrokerageURL: function (postdata) {

    let api = new API_URLS()
    let url = api.getScripBrokerageURL()
    //  console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getOISpurtsData: function (postdata) {

    let api = new API_URLS()
    let url = api.getOISpurtsURL()
    //  console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("getOISpurtsURL",data)
      return data
    })
  },
  getMarginCalculatorData: function (segmentId, token_qty) {
    const api = new API_URLS();
    const url = api.getMarginCalculatorURL(segmentId, token_qty);
    const headers = {
      'x-api-key': 'B62664943BAA286B21C66BA9A614D',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    return axios.get(url, { headers })
      .then(({ data }) => {
        return data;
      })
      .catch((error) => {
        console.error('Error fetching margin calculator data:', error);
        throw error;
      });
  },
  getCategoriesList: function (postdata) {

    let api = new API_URLS()
    let url = api.getCategoriesList()
    //  console.log("getCategoriesList",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getCategoryData: function (postdata) {

    let api = new API_URLS()
    let url = api.getCategoryData()
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getSchemeData: function (postdata) {

    let api = new API_URLS()
    let url = api.getSchemeData()
    //  console.log("getSchemeData",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getFundManagerData: function (postdata) {

    let api = new API_URLS()
    let url = api.getFundManagerData()
    //  console.log("getFundManagerData",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getPerformancePeerComparisonData: function (postdata) {

    let api = new API_URLS()
    let url = api.getPerformancePeerComparisonData()
    // console.log("getPerformancePeerComparisonData", url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getAMCList: function (postdata) {

    let api = new API_URLS()
    let url = api.getAMCList()
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  AMCListDetails: function (postdata) {

    let api = new API_URLS()
    let url = api.AMCListData()
    // console.log("url",url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  sipLumpsumCalc: function (postdata) {

    let api = new API_URLS()
    let url = api.calculatesipLump()
    // console.log("url", url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getSchemeDistributionData: function (postdata) {
    let api = new API_URLS()
    let url = api.getSchemeDistributionurl()
    // console.log("url", url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getsensexReturnGraphdata: function (postdata) {
    let api = new API_URLS()
    let url = api.sensexReturnGraphdata()
    // console.log("sensexReturnGraphdata", url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getbankFDReturnGraphdata: function (postdata) {
    let api = new API_URLS()
    let url = api.bankFDReturnGraphdata()
    // console.log("bankFDReturnGraphdata", url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getNavReturnGraph: function (postdata) {
    let api = new API_URLS()
    let url = api.getNavReturnGraph()
    // console.log("ReturnGraph", url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getschemeTopSectors: function (postdata) {
    let api = new API_URLS()
    let url = api.getschemeTopSectors()
    // console.log("ReturnGraph", url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getschemeMarketCap: function (postdata) {
    let api = new API_URLS()
    let url = api.getschemeMarketCap()
    // console.log("ReturnGraph", url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },
  getschemeTopHoldings: function (postdata) {
    let api = new API_URLS()
    let url = api.getschemeTopHoldings()
    // console.log("ReturnGraph", url)
    return axios.post(url, postdata, this.headerConfig).then(({ data }) => {
      //  console.log("datads",data)
      return data
    })
  },


}
export default rest;