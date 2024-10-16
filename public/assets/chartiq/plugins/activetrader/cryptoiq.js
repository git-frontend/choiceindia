/**!
 *	8.7.0
 *	Generation date: 2024-07-29T17:58:45.965Z
 *	Client name: choice broking
 *	Package Type: Technical Analysis e98f22c
 *	License type: annual
 *	Expiration date: "2025/08/11"
 *	Domain lock: ["127.0.0.1","localhost","choicebroking.in","choiceindia.com"]
 *	Filesystem lock: "file://*", "file://c/*", "file://d/*", "file://e/*"
 *	iFrame lock: true
 *	Features: Active Trader,SignalIQ,TFC
 */

/***********************************************************!
 * Copyright © 2024 S&P Global All rights reserved
*************************************************************/
/*************************************! DO NOT MAKE CHANGES TO THIS LIBRARY FILE!! !*************************************
* If you wish to overwrite default functionality, create a separate file with a copy of the methods you are overwriting *
* and load that file right after the library has been loaded, but before the chart engine is instantiated.              *
* Directly modifying library files will prevent upgrades and the ability for ChartIQ to support your solution.          *
*************************************************************************************************************************/
/* eslint-disable no-extra-parens */


/*
 *
 * Active Trader package.  This loads up the market depth and orderbook modules.
 *
 */

import { CIQ } from "../../js/chartiq.js";
import "./marketdepth.js";
import "./orderbook.js";
import "./tradehistory.js";

const cssReady = new Promise((resolve) => {
	if (
		typeof define === "undefined" &&
		typeof module === "object" &&
		typeof require === "function"
	) {
		// webpack 4
		resolve(require("./cryptoiq.css"));
	} else if (typeof define === "function" && define.amd) {
		define(["./cryptoiq.css"], resolve);
	} else if (import.meta.webpack) {
		// webpack 5
		import(/* webpackMode: "eager" */ "./cryptoiq.css").then(resolve);
	} else if (typeof window !== "undefined") {
		// no webpack
		CIQ.loadStylesheet(
			new URL("./cryptoiq.css", import.meta.url).href,
			resolve
		);
	} else resolve();
}).then((m) => CIQ.addInternalStylesheet(m, "cryptoiq")); // a framework, such as Angular, may require style addition

const styleSheetsLoaded = () => {
	if (CIQ.MarketDepth) {
		CIQ.MarketDepth.mdStyleSheetLoaded = true;
		CIQ.MarketDepth.hmStyleSheetLoaded = true;
	}
};

cssReady.then(styleSheetsLoaded);

if (CIQ.UI && CIQ.UI.Layout) {
	/**
	 * @memberof CIQ.UI.Layout
	 * @param {HTMLElement} node The `cq-item` user interface element that enables users to enable the Market-Depth chart panel.
	 * @private
	 */
	CIQ.UI.Layout.prototype.getMarketDepth = function (node) {
		var stx = this.context.stx,
			className = this.params.activeClassName;
		var listener = function (obj) {
			if (obj.value) node.classList.add(className);
			else node.classList.remove(className);
		};
		CIQ.UI.observeProperty("marketDepth", stx.layout, listener);
	};

	/**
	 * @memberof CIQ.UI.Layout
	 * @param {CIQ.UI~Setter|null} obj Either null or an object containing the user interface element,
	 *		trigger event, and additional param object.
	 * 	 */
	CIQ.UI.Layout.prototype.setMarketDepth = function (obj) {
		var stx = this.context.stx;
		stx.layout.marketDepth = !stx.layout.marketDepth;
		if (stx.marketDepth) stx.marketDepth.display(stx.layout.marketDepth);
		stx.changeOccurred("layout");
	};

	/**
	 * @memberof CIQ.UI.Layout
	 * @param {HTMLElement} node The `cq-item` user interface element that enables users to enable the L2 Heat Map.
	 * @private
	 */
	CIQ.UI.Layout.prototype.getL2Heatmap = function (node) {
		var stx = this.context.stx,
			className = this.params.activeClassName;
		var listener = function (obj) {
			if (obj.value) node.classList.add(className);
			else node.classList.remove(className);
		};
		CIQ.UI.observeProperty("l2heatmap", stx.layout, listener);
	};

	/**
	 * @memberof CIQ.UI.Layout
	 * @param {CIQ.UI~Setter|null} obj Either null or an object containing the user interface element,
	 *		trigger event, and additional param object.
	 * */
	CIQ.UI.Layout.prototype.setL2Heatmap = function (obj) {
		var stx = this.context.stx;
		stx.layout.l2heatmap = !stx.layout.l2heatmap;
		stx.changeOccurred("layout");
		stx.draw();
	};
}

// Depth of Market underlay for the chart.
// NOTE: Depth of Market will only display on the chart panel sharing the yAxis.
CIQ.Studies = CIQ.Studies || function () {};
if (!CIQ.Studies.studyLibrary) CIQ.Studies.studyLibrary = {};
CIQ.extend(CIQ.Studies.studyLibrary, {
	DoM: {
		name: "Depth of Market",
		underlay: true,
		seriesFN: function (stx, sd, quotes) {
			if (CIQ.Studies.displayDepthOfMarket)
				CIQ.Studies.displayDepthOfMarket(stx, sd, quotes);
		},
		calculateFN: null,
		inputs: { "Bar Count": 20, "Width Percentage": 100 },
		outputs: { Bid: "#8cc176", Ask: "#b82c0c" },
		parameters: {
			init: { displayBorder: false, displaySize: true }
		},
		attributes: {
			yaxisDisplayValue: { hidden: true },
			panelName: { hidden: true },
			flippedEnabled: { hidden: true }
		}
	}
});
