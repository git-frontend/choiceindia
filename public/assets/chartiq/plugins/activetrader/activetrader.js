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


import { CIQ } from "../../js/chartiq.js";
import "../../js/extras/svgcharts/piechart.js";
import "../../plugins/activetrader/cryptoiq.js";
import "../../plugins/tfc/tfc-loader.js";
import "./addons/animation.js";

const startActiveTrader = function (stx) {
	const { channelWrite } = CIQ.UI.BaseComponent.prototype;
	const { config = {} } = stx.uiContext;

	// take into account -15 margin on the flex container
	Array.from(
		stx.container.ownerDocument.querySelectorAll(
			"cq-tradehistory-table cq-scroll"
		)
	).forEach(function (table) {
		var top = stx.container.ownerDocument.querySelector("#flexContainer");
		table.reduceMenuHeight =
			45 - (top ? parseFloat(getComputedStyle(top).top) : 0);
	});

	if (CIQ.MarketDepth) {
		CIQ.MarketDepth({
			stx: stx,
			volume: true,
			mountain: true,
			step: true,
			record: true,
			height: "40%",
			precedingContainer: "#marketDepthBookmark",
			interaction: true
		});
		if (CIQ.UI) CIQ.UI.activatePluginUI(stx, "MarketDepth");
	}

	function overrideLayoutSettings() {
		if (stx.currentlyImporting) return;
		stx.setChartType("line");
		CIQ.extend(stx.layout, {
			crosshair: true,
			l2heatmap: true,
			rangeSlider: true,
			marketDepth: true,
			extended: false
		});
		stx.layout.headsUp = { static: true }; // set separately to trigger channel subscriber

		channelWrite((config.channels || {}).tfc || "channel.tfc", true, stx);

		stx.changeOccurred("layout");
		stx.removeEventListener("newChart", overrideLayoutSettings);
	}

	stx.addEventListener("newChart", overrideLayoutSettings);

	function moneyFlowChart(stx) {
		var initialPieData = {
			Up: { index: 1 },
			Down: { index: 2 },
			Even: { index: 3 }
		};

		var pieChart = new CIQ.Visualization({
			container: "cq-tradehistory-table div[pie-chart] div",
			renderFunction: CIQ.SVGChart.renderPieChart,
			colorRange: ["#8cc176", "#b82c0c", "#7c7c7c"],
			className: "pie",
			valueFormatter: CIQ.condenseInt,
			document: stx.container.ownerDocument
		}).updateData(CIQ.clone(initialPieData));
		var last = 0;
		stx.append(
			"updateCurrentMarketData",
			function (data, chart, symbol, params = {}) {
				if (symbol || params.animationEntry) return;
				var items = document.querySelectorAll("cq-tradehistory-body cq-item");
				var d = {};
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					if (item == last) break;
					var dir = item.getAttribute("dir");
					if (!dir) dir = "even";
					dir = CIQ.capitalize(dir);
					if (!d[dir]) d[dir] = 0;
					d[dir] += parseFloat(
						item.querySelector("[col=amount]").getAttribute("rawval")
					);
				}
				if (i) pieChart.updateData(d, "add");
				last = items[0];
			}
		);
		stx.addEventListener("symbolChange", function (obj) {
			pieChart.updateData(CIQ.clone(initialPieData));
		});
		return pieChart;
	}
	stx.moneyFlowChart = moneyFlowChart(stx);

	return stx;
};

export default startActiveTrader;
