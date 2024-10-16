// -------------------------------------------------------------------------------------------
// Copyright 2012-2019 by ChartIQ, Inc
// -------------------------------------------------------------------------------------------
// SAMPLE SYMBOL LOOKUP IMPLEMENTATION -- Connects to ChartIQ Lookup Server
///////////////////////////////////////////////////////////////////////////////////////////////////////////
import { CIQ, quoteFeed, symbolLookupBase } from "../../js/standard.js";
CIQ.activateImports(quoteFeed, symbolLookupBase); // so we can use CIQ.inheritsFrom
/**
 * An example of an asynchronous Lookup.Driver that uses ChartIQ's suggestive search as its source for symbol search
 * @name CIQ.ChartEngine.Driver.Lookup.ChartIQ
 * @constructor
 * @param {string[]} exchanges An array of exchanges that can be searched against
 * @private
 * @since 6.0.0
 */
CIQ.ChartEngine.Driver.Lookup.ChartIQ = function (exchanges) {
	this.exchanges = exchanges;
	if (!this.exchanges)
		this.exchanges = [
			"ALL", "EQUITY", "DERIVATIVES", "COMMODITIES", "CURRENCIES"
		];
	this.url =
		"https://finx.choiceindia.com/api/cm/ScripContract/Search/";
		this.filterMapper = {
			'EQUITY': 'EQ',
			'DERIVATIVES': 'FO',
			'COMMODITIES': 'COM',
			'CURRENCIES': 'CD',
			'ALL': ''
		  }
	this.requestCounter = 0; //used to invalidate old requests
	//t=ibm&m=10&x=[]&e=STOCKS
};
CIQ.inheritsFrom(
	CIQ.ChartEngine.Driver.Lookup.ChartIQ,
	CIQ.ChartEngine.Driver.Lookup
);
/**
 * @memberof CIQ.ChartEngine.Driver.Lookup.ChartIQ
 * @param {string} text Text to search for
 * @param {string} filter Any filter to be applied to the search results
 * @param {number} maxResults Max number of results to return from the server
 * @param {function} cb Callback upon results
 * @private
 * @since 6.0.0
 */
CIQ.ChartEngine.Driver.Lookup.ChartIQ.prototype.acceptText = function (
	text,
	filter,
	maxResults,
	cb
) {
	var searchValue = (text || "").trim();

	if (searchValue.length >= 3) {
		var payload = {
		  "strScripName": searchValue,
		  "StartPos": 0,
		  "NoOfRecords": maxResults || 50,
		  "strSegment": this.filterMapper[filter || 'ALL']
		}
		CIQ.postAjax({
		  url: this.url,
		  method: 'POST',
		  noEpoch: true,
		  contentType: 'application/json',
		  payload: JSON.stringify(payload),
		  cb: handleResponse
		});
	  }
	// if (filter == "FX") filter = "FOREX";
	// if (isNaN(parseInt(maxResults, 10))) maxResults = 100;
	// var url =
	// 	this.url + "?t=" + encodeURIComponent(text) + "&m=" + maxResults + "&x=[";
	// if (this.exchanges) {
	// 	url += this.exchanges.join(",");
	// }
	// url += "]";
	// if (filter && filter.toUpperCase() != "ALL") {
	// 	url += "&e=" + filter;
	// }
	// var counter = ++this.requestCounter;
	// var self = this;
	// function handleResponse(status, response) {
	// 	if (counter < self.requestCounter) return;
	// 	if (status != 200) return;
	// 	try {
	// 		response = JSON.parse(response);
	// 		var symbols = response.payload.symbols;
	// 		var results = [];
	// 		for (var i = 0; i < symbols.length; i++) {
	// 			var fields = symbols[i].split("|");
	// 			var item = {
	// 				symbol: fields[0],
	// 				name: fields[1],
	// 				exchDisp: fields[2]
	// 			};
	// 			results.push({
	// 				display: [item.symbol, item.name, item.exchDisp],
	// 				data: item
	// 			});
	// 		}
	// 		cb(results);
	// 	} catch (e) {}
	// }
	// CIQ.postAjax({ url: url, cb: handleResponse });
	function handleResponse(status, response) {
		var results = [];
		if (status == 200) {
		  response = JSON.parse(response);
		  try {
			if (response.Status == 'Success' && response.Response && response.Response.length) {

				//console.log("Symbol lookup response",response)
			  for (var i = 0; i < response.Response.length; i++) {
				var fields = response.Response[i];
				fields.symbol = fields.SecName + ([1, 3].indexOf(fields.SegmentId) > -1 ? (fields.Series?('-' + fields.Series):'') : '');
				fields.name = fields.SecDesc;
				fields.exchDisp = fields.ExchangeSegment;
				results.push({
				  display: [fields.symbol, fields.name, fields.exchDisp],
				  data: fields
				});
			  }
			}
			cb(results);
		  } catch (e) {}
		}
	  }
};

    /**
     * Callback handler for processing the search Results
     * @param {*} status HTTP Status Code
     * @param {*} response response from API
     */

export { CIQ };
