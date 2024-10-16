/**!
 *	8.7.0
 *	Generation date: 2023-08-09T11:09:02.132Z
 *	Client name: choice broking
 *	Package Type: Technical Analysis e98f22c
 *	License type: annual
 *	Expiration date: "2024/08/11"
 *	Domain lock: ["127.0.0.1","localhost","choicebroking.in","choiceindia.com"]
 *	Filesystem lock: "file://*", "file://c/*", "file://d/*", "file://e/*"
 *	iFrame lock: true
 */

/***********************************************************!
 * Copyright © 2023 S&P Global All rights reserved
 * Licensed under the ChartIQ, Inc. Developer License Agreement https://www.chartiq.com/developer-license-agreement
*************************************************************/
/*************************************! DO NOT MAKE CHANGES TO THIS LIBRARY FILE!! !*************************************
* If you wish to overwrite default functionality, create a separate file with a copy of the methods you are overwriting *
* and load that file right after the library has been loaded, but before the chart engine is instantiated.              *
* Directly modifying library files will prevent upgrades and the ability for ChartIQ to support your solution.          *
*************************************************************************************************************************/
/* eslint-disable no-extra-parens */


import { CIQ } from "../../js/chartiq.js";
import "./signaliq.js";
import "./highPerformanceMarkers.js";

const cssReady = new Promise((resolve) => {
	if (
		typeof define === "undefined" &&
		typeof module === "object" &&
		typeof require === "function"
	) {
		// webpack 4
		resolve(require("./signaliq-marker.css"));
	} else if (typeof define === "function" && define.amd) {
		define(["./signaliq-marker.css"], resolve);
	}
}).then((m) => CIQ.addInternalStylesheet(m, "signaliq-marker")); // a framework, such as Angular, may require style addition

/**
 * Specific subclass of markers with a disabled placement function.
 *
 * @constructor
 * @name CIQ.Marker.SignalIQ
 * @private
 * @since 8.6.0
 */
CIQ.Marker.SignalIQ = function (params) {
	if (!this.className) this.className = "CIQ.Marker.SignalIQ";
	CIQ.Marker.call(this, params);
};

CIQ.inheritsFrom(CIQ.Marker.SignalIQ, CIQ.Marker, false);

CIQ.Marker.SignalIQ.placementFunction = () => {};

const markerSelectOptions = [
	{
		optionName: "color",
		optionType: "colorPicker"
	},
	{
		optionName: "shape",
		optionType: "dropdown",
		options: [
			["circle", "Circle"],
			["square", "Square"],
			["diamond", "Diamond"]
		]
	},
	{
		optionName: "label",
		optionType: "text",
		optionLabel: "Enter marker label."
	},
	{
		optionName: "size",
		optionType: "dropdown",
		options: [
			["S", "Small"],
			["M", "Medium"],
			["L", "Large"]
		]
	},
	{
		optionName: "position",
		optionType: "dropdown",
		options: [
			["above_candle", "Above Line"],
			["below_candle", "Below Line"],
			["on_candle", "On Line"]
		]
	}
];
CIQ.SignalIQ.notificationTypes.push([
	"marker",
	"Chart Marker",
	markerSelectOptions
]);

/**
 * Namespace within CIQ.SignalIQ which represents an alert as a marker on the chart.
 *
 * @namespace CIQ.SignalIQ.Marker
 * @since  8.6.0
 */
CIQ.SignalIQ.Marker = {};

/**
 * Creates a signal as a marker. This is called when the `signalData.notificationType` value is "marker".
 *
 * @param {CIQ.SignalIQ~NotificationData} data Parameters used to create marker.
 * @return {CIQ.Marker.SignalIQ} A marker representing a SignalIQ alert.
 *
 * @static
 * @alias create
 * @memberof CIQ.SignalIQ.Marker
 * @since 8.6.0
 */
CIQ.SignalIQ.Marker.create = function ({
	signalData,
	markerSettings,
	conditions,
	field,
	isPlotSpecific,
	sd,
	stx,
	tick
}) {
	const sizeTxt = (sz) => {
		switch (sz) {
			case "L":
				return "large";
			case "M":
				return "medium";
			case "S":
			default:
				return "small";
		}
	};

	let { name, description, reveal, shape, size, label, position } = {
		...signalData,
		...markerSettings
	};

	const qt = stx.chart.dataSet[tick];
	let formattedDate = "";
	if (qt && qt.DT)
		formattedDate = " - " + CIQ.displayableDate(stx, stx.chart, qt.DT);

	const yPositioner = isPlotSpecific ? "on_candle" : position || "above_candle";
	const resolvedShape = !shape || shape === "noshape" ? "circle" : shape;
	const markerSignal = new CIQ.Marker.SignalIQ({
		stx,
		x: tick,
		xPositioner: "tick",
		yPositioner,
		offset: !isPlotSpecific && yPositioner.includes("candle") ? 8 : 0,
		label: "signaliq-" + name,
		panelName: isPlotSpecific ? sd.panel : undefined,
		field,
		avoidFlush: true,
		node: isPlotSpecific
			? new CIQ.Marker.Performance({
					type: "circle",
					category: "signal",
					size: "study",
					displayCategory: false,
					displayStem: false,
					id: name,
					headline: name + formattedDate,
					story:
						(stx.signalIQ.displayCondition
							? "\u000a" + conditions.join("\u000a")
							: "") + (description ? "\u000a" + description : ""),
					hide: !reveal,
					color: markerSettings.color
			  })
			: new CIQ.Marker.Performance({
					type: resolvedShape,
					category: "signal",
					size: sizeTxt(size),
					displayLabel: label,
					displayCategory: false,
					displayStem: false,
					id: name,
					color: shape !== "noshape" ? markerSettings.color : "transparent"
			  })
	});
	if (!isPlotSpecific)
		markerSignal.click = (function (stx, sd) {
			return function () {
				sd.signalData.toggleStudy();
				stx.findHighlights(null, true);
			};
		})(stx, sd);

	markerSignal.uniqueKey = [
		markerSignal.node.params.id,
		markerSignal.tick,
		markerSignal.params.field
	].join("|");

	return markerSignal;
};
