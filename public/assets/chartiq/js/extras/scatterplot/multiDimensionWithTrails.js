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


import getScatterplotConfig from "./config.js";
const colorSet = [
	"#8ec648",
	"#00afed",
	"#ee652e",
	"#912a8e",
	"#fff126",
	"#e9088c",
	"#ea1d2c",
	"#00a553",
	"#00a99c",
	"#0056a4",
	"#f4932f",
	"#0073ba",
	"#66308f",
	"#323390"
];
export default function getConfig(resources) {
	const config = getScatterplotConfig(resources, {
		xAxisProps: ["tcv", "touchpoints", "score"],
		yAxisProps: ["touchpoints", "tcv", "score"],
		groupProps: ["name", "portfolio", "_originalKey"],
		filterProps: [
			{ prop: "portfolio", value: "A" },
			{ prop: "portfolio", value: "B" },
			{ prop: "portfolio", value: "C" },
			{ prop: "touchpoints", rangeStep: "1" },
			{ prop: "score", rangeStep: ".1" },
			{ prop: "tcv", rangeStep: "10" }
		],
		propsToLabel: {
			name: "Client",
			score: "Client Score",
			_originalKey: "History"
		},
		decimalPlaces: (field) => (field === "score" ? 5 : 0),
		fieldsToFormatAsPercent: ["score"],
		symbolInputType: "Portfolio",
		centerOn: {
			"tcv|touchpoints": { x: 2800, y: 100 },
			"tcv|score": { x: 0, y: 0 }
		},
		pointAttributesFn: getAttributeFn()
	});
	return config;
}
function getAttributeFn({
	colors = colorSet, // array of color to pick from for assignment
	nameToColor = {} // object containing pre-assigned name to color values
} = {}) {
	// nameToColor allows to pre-assigne names to colors
	let colorIndex = -1;
	function getColor(name) {
		if (!nameToColor[name]) {
			colorIndex = (colorIndex + 1) % (colors.length - 1);
			nameToColor[name] = colors[colorIndex];
		}
		return nameToColor[name];
	}
	return (entry, stx) => {
		const mapPortfolio = { A: "circle", B: "square", C: "diamond" };
		const result = {
			color: entry.isCurrent ? getColor(entry.name) : "#ababab11",
			size: entry.isCurrent
				? Math.max(Math.min(entry.score / 30, 3), 0.8)
				: 0.5,
			shape: mapPortfolio[entry.portfolio],
			text: entry.name
		};
		return result;
	};
}
