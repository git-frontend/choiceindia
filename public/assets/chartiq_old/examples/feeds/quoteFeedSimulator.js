// -------------------------------------------------------------------------------------------
// Copyright 2012-2021 by ChartIQ, Inc
// -------------------------------------------------------------------------------------------
// SAMPLE QUOTEFEED IMPLEMENTATION -- Connects charts to ChartIQ Simulator
///////////////////////////////////////////////////////////////////////////////////////////////////////////
var quoteFeedSimulator = {}; // the quotefeed object
// local, non-dependent implementation of XmlHttpRequest
quoteFeedSimulator.getAjax = function (url, cb) {
	var server = new XMLHttpRequest();
	url += (url.indexOf("?") === -1 ? "?" : "&") + new Date().getTime();
	server.open("GET", url);
	server.onload = function () {
		cb(this.status, this.responseText);
	};
	server.onerror = function () {
		cb(500);
	};
	server.send();
};

/**
 * API Call for fetching data of charts
 * @param {*} url url to be used
 * @param {*} payload payload to be post
 * @param {*} cb callback function to be called on success
 */
quoteFeedSimulator.postAjax = function (url, payload, cb) {
	var server = new XMLHttpRequest();
	server.open("POST", url);
	server.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
	server.onload = function () {
		cb(this.status, this.responseText ? JSON.parse(this.responseText) : this.responseText);
	};
	server.onerror = function () {
		cb(500);
	};
	server.send(JSON.stringify(payload));
};
quoteFeedSimulator.maxTicks = 20000;
quoteFeedSimulator.url = window.parent.jiffyAPI ? window.parent.jiffyAPI.getChartsURL() : 'https://api.jiffy.in/api/cm/Graph/GetChartHistory';
// called by chart to fetch initial data
quoteFeedSimulator.fetchInitialData = function (
	symbol,
	suggestedStartDate,
	suggestedEndDate,
	params,
	cb
) {

	//console.log(arguments, "fetchInitialData")
	var urlData = this.getURLData(suggestedStartDate, suggestedEndDate, params);
	var self = this;
	var queryUrl = urlData.url; // using filter:true for after hours
	self.postAjax(queryUrl, urlData.payload, function (statusCode, response) {
		if (statusCode == 200 && response && response.Status == 'Success') {
			var quotes = quoteFeedSimulator.formatChartData(response.Response, symbol);

			//console.log("quotesquotes", quotes)
			cb({
				quotes: quotes,
				moreAvailable: quotes.length > 0,
				attribution: {
					source: "jiffy",
					exchange: params.symbolObject.ExchangeSegment
				}
			})
		} else {
			cb({
				quotes: [],
				moreAvailable: false
			});
		}
	});
};
// called by chart to fetch update data
// quoteFeedSimulator.fetchUpdateData = function (symbol, startDate, params, cb) {
// 	var self = this;
// 	var queryUrl =
// 		self.url +
// 		"?session=" +
// 		params.quoteDriverID + // add on unique sessionID required by ChartIQ simulator;
// 		"&identifier=" +
// 		symbol +
// 		"&startdate=" +
// 		startDate.toISOString() +
// 		"&interval=" +
// 		params.interval +
// 		"&period=" +
// 		params.period +
// 		"&extended=" +
// 		(params.extended ? 1 : 0); // using filter:true for after hours
// 	self.postAjax(queryUrl, function (status, response) {
// 		// process the HTTP response from the datafeed
// 		if (status === 200) {
// 			// if successful response from datafeed
// 			var newQuotes = self.formatChartData(response, symbol);
// 			cb({
// 				quotes: newQuotes,
// 				attribution: { source: "simulator", exchange: "RANDOM" }
// 			}); // return the fetched data
// 		} else {
// 			// else error response from datafeed
// 			cb({ error: response ? response : status }); // specify error in callback
// 		}
// 	});
// };


/**
 * called upon given refresh Interval parameter for updating the candle on right side
 * @param {*} symbol Symbol Object from chart
 * @param {*} startDate start Date
 * @param {*} params params of Chart Layout
 * @param {*} cb Callback to be called on success
 * Note: getTicks function to  be used to get the socket data from Bridging api.
 */
quoteFeedSimulator.fetchUpdateData = function (symbol, startDate, params, cb) {
	//console.log("fetchUpdateData called",params)
	// var id = $(params.chart.container).parents('cq-instant-chart').attr('id');
	// var chartObject = window.stxx[id];
	var masterData = params.stx.chart.masterData;
	var prevQuote = masterData && masterData.length ? masterData[masterData.length - 1] : {};

	
//	console.log("window.parent",window.parent)
	//console.log("window.parent params.stx.chart.market",params.stx.chart.market)

	if (params.stx.chart.market.isOpen() && masterData && window.parent.jiffyAPI) {

	
		var quotes = window.parent.jiffyAPI.getTicks(params.symbolObject);
		//console.log(params.symbolObject,"quotes getTicks",quotes)
		//console.log("fetchUpdateData called inside",quotes)
		if (!quotes) {
			cb({
				quotes: [],
				moreAvailable: true
			});
		} else {
			var newQuote = JSON.parse(JSON.stringify(quotes));
			newQuote.DT = new Date(newQuote.DT);
			let isEqual=quoteFeedSimulator.isEqual(prevQuote, newQuote, params)
			//console.log(prevQuote,"isEqual called: ",isEqual," new DATA: ",newQuote)
			if(prevQuote&&newQuote){
				if (isEqual) {
					newQuote.DT = prevQuote.DT;
					newQuote.High = Math.max(newQuote.LTP, prevQuote.High);
					newQuote.Low = Math.min(newQuote.LTP, prevQuote.Low);
					newQuote.Volume = (prevQuote.Volume || 0) + newQuote.LTQ;
					newQuote.Close = newQuote.LTP;
				} else {
					if (params.interval != "day") {
						newQuote.Open = newQuote.High = newQuote.Low = newQuote.Close = newQuote.LTP;
						newQuote.Volume = newQuote.LTQ;
					}
				}
			}
			cb({
				quotes: [newQuote],
				moreAvailable: true
			})
		}
	}
};


/**
 * get URL and Payload based on given arguments
 * @param {*} startDate start Date
 * @param {*} endDate end Date
 * @param {*} params params fo layout
 * Note: Date values to be converted OLE Automation date(seconds since Jan 1, 1980) for payload
 */
quoteFeedSimulator.getURLData = function (startDate, endDate, params) {

	//console.log("getURLData params",params)
	//console.log("getURLData startDate, endDate",startDate, endDate)
///	console.log("getURLData",params)
	var url = window.parent.jiffyAPI ? window.parent.jiffyAPI.getChartsURL() : 'https://finx.choiceindia.com/api/cm/Graph/GetChartHistory';
	var interval = "day" == params.interval ? (params.period == 1 ? 'D' : params.period == 5 ? 'W' : 'M') : ("minute" == params.interval ? params.period : params.period);
	endDate = endDate ? endDate : new Date();
	var payload = {
		UserId: window.parent.jiffyAPI ? window.parent.jiffyAPI.getUserId() : 'guest',
		SessionId: window.parent.jiffyAPI ? window.parent.jiffyAPI.getSessionId() : '96A3E034FC',
		SegmentId: params.symbolObject.SegmentId,
		Token: params.symbolObject.Token,
		FromDate: parseInt((new Date(startDate).valueOf() - new Date("1980-01-01").valueOf()) / 1000),
		ToDate: parseInt((new Date(endDate).valueOf() - new Date("1980-01-01").valueOf()) / 1000),
		Interval: interval,
		suggestedStartDate: startDate.toString(),
		suggestedEndDate: endDate.toString()
	};
	return {
		url: url,
		payload: payload
	}
};
quoteFeedSimulator.isPayloadEqual = function (lastPayload, payload) {
	return payload && lastPayload && payload.SegmentId == lastPayload.SegmentId && payload.Token == lastPayload.Token && payload.FromDate == lastPayload.FromDate && payload.ToDate == lastPayload.ToDate && payload.Interval == lastPayload.Interval
}

/**
 * Call back event for scrolling the chart towards Left
 * @param {*} symbol symbol Object rendered in chart
 * @param {*} suggestedStartDate start Date
 * @param {*} endDate end Date
 * @param {*} params parameters for Layout
 * @param {*} cb call back to be called on success
 */
quoteFeedSimulator.fetchPaginationData = function (symbol, suggestedStartDate, endDate, params, cb) {
	//console.log("fetchPaginationData",suggestedStartDate, endDate, params)
	var urlData = this.getURLData(suggestedStartDate, endDate, params);
	//else {
	

		this.postAjax(urlData.url, urlData.payload, function (statusCode, response) {
			
			if (statusCode == 200 && response && response.Status == 'Success') {
				var quotes = quoteFeedSimulator.formatChartData(response.Response, symbol);

				//console.log("suggestedStartDate",new Date(suggestedStartDate).valueOf())

				//console.log("suggestedStartDate (quotes[0].DT).getDate()",(new Date(quotes[0].DT)).valueOf())
			
				//if (this.isPayloadEqual(this.lastPayload, urlData.payload)) {
					if(urlData.payload && quoteFeedSimulator.lastPayload && urlData.payload.SegmentId == quoteFeedSimulator.lastPayload.SegmentId && urlData.payload.Token == quoteFeedSimulator.lastPayload.Token && urlData.payload.FromDate == quoteFeedSimulator.lastPayload.FromDate && urlData.payload.ToDate == quoteFeedSimulator.lastPayload.ToDate && urlData.payload.Interval == quoteFeedSimulator.lastPayload.Interval){
					cb({
						quotes: quotes,
						moreAvailable: false,//new Date(startDate).getTime() > Date.now() - 86400000 * 5,//(new Date(suggestedStartDate).valueOf() )>(new Date(quotes[0].DT)).valueOf() ,//quotes.length >= 1 && ((quotes[0].DT).getDate() == suggestedStartDate.getDate()),
						upToDate: true,
						attribution: {
							source: "jiffy",
							exchange: params.symbolObject.ExchangeSegment
						}
					});
				}else{
					cb({
						quotes: quotes,
						moreAvailable: !(!quotes || quotes.length==0 ),//new Date(startDate).getTime() > Date.now() - 86400000 * 5,//(new Date(suggestedStartDate).valueOf() )>(new Date(quotes[0].DT)).valueOf() ,//quotes.length >= 1 && ((quotes[0].DT).getDate() == suggestedStartDate.getDate()),
						upToDate: true,
						attribution: {
							source: "jiffy",
							exchange: params.symbolObject.ExchangeSegment
						}
					})

					quoteFeedSimulator.lastPayload =  urlData.payload;
				} 
			
			
			
			} else {
				cb({
					quotes: [],
					moreAvailable: false
				});
			}
		})
	//}
};
// utility function to format data for chart input; given simulator was designed to work with library, very little formatting is needed
// symbol argument can be used to further refine simulated data
// quoteFeedSimulator.formatChartData = function (response, symbol) {
// 	var feeddata = JSON.parse(response);
// 	var newQuotes = [];
// 	for (var i = 0; i < feeddata.length; i++) {
// 		var newQuote = {};
// 		newQuote.DT = new Date(feeddata[i].DT); // DT is a string in ISO format, make it a Date instance
// 		newQuote.Open = feeddata[i].Open;
// 		newQuote.High = feeddata[i].High;
// 		newQuote.Low = feeddata[i].Low;
// 		newQuote.Close = feeddata[i].Close;
// 		newQuote.Volume = feeddata[i].Volume;
// 		newQuotes.push(newQuote);
// 	}
// 	return newQuotes;
// };

/**
 * processing of Chart response from pipe data to Object
 * @param {*} response Response from API
 * @param {*} symbol symbol for which the response came.
 */
quoteFeedSimulator.formatChartData = function (response, symbol) {
	console.log("formatChartData",response)
	if(!response){
		return []
	}
	var chartHistory = response.lstChartHistory;
	var priceDivisor = response.PriceDivisor || 100;
	var results = [];
	for (var index = 0; index < chartHistory.length; index++) {
		var quote = {};
		var dataSplit = chartHistory[index].split(",");
		var internDate = new Date("1980-01-01").setSeconds(dataSplit[0]);
		var offset = 1000 * (60 * -330);
		if (Number(dataSplit[1]) && Number(dataSplit[2]) && Number(dataSplit[3]) && Number(dataSplit[4])) {
			quote.DT = new Date(internDate + offset);
			quote.Open = dataSplit[1] / priceDivisor;
			quote.High = dataSplit[2] / priceDivisor;
			quote.Low = dataSplit[3] / priceDivisor;
			quote.Close = dataSplit[4] / priceDivisor;
			quote.Volume = dataSplit[5];
			quote.OI = dataSplit[6];
			results.push(quote);
		}
	}
	console.log("resultsresults",results)
	return results
};

/**
* Check whether the data to be plotted on same candle or render next candle
* @param {*} prevQuote last data point rendered
* @param {*} newQuote new Data point 
* @param {*} params Layout Params of chart
*/
quoteFeedSimulator.isEqual = function (prevQuote, newQuote, params) {

	//var id = $(params.chart.container).parents('cq-instant-chart').attr('id');
	var layout = params.stx.layout;
	var currentMarket = params.chart.market;
	var marketStartHours = (new Date().setHours(currentMarket.zopen_hour, currentMarket.zopen_minute, 0, 0) - new Date().setHours(0, 0, 0, 0)) / 1000;
	var period = "hour" == params.interval ? 3600 * params.period : "minute" == params.interval ? 60 * params.period : params.period;
	
	if ((["minute", "hour"].indexOf(params.interval) > -1)&&prevQuote.DT && newQuote.DT) {
		var prevPeriodIndex = parseInt((prevQuote.DT.getTime() / 1000 - marketStartHours) % 86400 / period);
		var newPeriodIndex = parseInt((newQuote.DT.getTime() / 1000 - marketStartHours) % 86400 / period);
		return prevPeriodIndex == newPeriodIndex
	}
	if ("day" == params.interval) {
		var prevPeriodIndex = null;
		var newPeriodIndex = null;
		switch (layout.interval) {
			case "day":
				prevPeriodIndex = parseInt(prevQuote.DT.setHours(0, 0, 0, 0) / 86400000);
				newPeriodIndex = parseInt(newQuote.DT.setHours(0, 0, 0, 0) / 86400000);
				break;
			case "week":
				prevPeriodIndex = parseInt(prevQuote.DT.setHours(0, 0, 0, 0) / 604800000);
				newPeriodIndex = parseInt(newQuote.DT.setHours(0, 0, 0, 0) / 604800000);
				break;
			case "month":
				prevPeriodIndex = parseInt(12 * prevQuote.DT.getFullYear() + prevQuote.DT.getMonth());
				newPeriodIndex = parseInt(12 * newQuote.DT.getFullYear() + newQuote.DT.getMonth());
		}
		return prevPeriodIndex == newPeriodIndex
	}
}
export default quoteFeedSimulator;
