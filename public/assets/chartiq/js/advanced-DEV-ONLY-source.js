/***************************************************************************!
 WARNING: this file is for internal development and debugging purposes only!
 It may *not* be posted publicly under any circumstances without explicit
 consent from ChartIQ.
****************************************************************************/
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


import {CIQ as __CIQ_, SplinePlotter as __SplinePlotter_, timezoneJS as __timezoneJS_, $$ as __$$_, $$$ as __$$$_} from "../js/standard.js";


let __js_advanced_drawingAdvanced_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;
var timezoneJS =
	typeof _timezoneJS !== "undefined" ? _timezoneJS : _exports.timezoneJS;

if (!CIQ.Drawing) {
	console.error(
		"drawingAdvanced feature requires first activating drawing feature."
	);
} else {
	/**
	 * Ray drawing tool. A ray is defined by two points. It travels infinitely past the second point.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.line}.
	 * @constructor
	 * @name  CIQ.Drawing.ray
	 */
	CIQ.Drawing.ray = function () {
		this.name = "ray";
	};

	CIQ.inheritsFrom(CIQ.Drawing.ray, CIQ.Drawing.line);

	CIQ.Drawing.ray.prototype.adjust = function () {
		var panel = this.stx.panels[this.panelName];
		if (!panel) return;
		this.setPoint(0, this.d0, this.v0, panel.chart);
		this.setPoint(1, this.d1, this.v1, panel.chart);
		// Use outer set if original drawing was on intraday but now displaying on daily
		if (CIQ.ChartEngine.isDailyInterval(this.stx.layout.interval) && this.d0B) {
			this.setPoint(1, this.d1B, this.v1B, panel.chart);
		}
	};

	/**
	 * Continuous line drawing tool. Creates a series of connected line segments, each one completed with a user click.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.segment}.
	 * @constructor
	 * @name  CIQ.Drawing.continuous
	 */
	CIQ.Drawing.continuous = function () {
		this.name = "continuous";
		this.dragToDraw = false;
		this.maxSegments = null;
	};

	CIQ.inheritsFrom(CIQ.Drawing.continuous, CIQ.Drawing.segment);

	CIQ.Drawing.continuous.prototype.click = function (context, tick, value) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		if (!panel) return;
		this.copyConfig();
		if (!this.penDown) {
			this.setPoint(0, tick, value, panel.chart);
			this.penDown = true;
			return false;
		}
		if (this.accidentalClick(tick, value)) {
			stx.undo(); //abort
			return true;
		}

		this.setPoint(1, tick, value, panel.chart);

		// render a segment
		var Segment = CIQ.Drawing.segment;
		var segment = new Segment();
		var obj = this.serialize(stx);
		segment.reconstruct(stx, obj);
		stx.addDrawing(segment);
		stx.changeOccurred("vector");
		stx.draw();
		segment++;

		if (this.maxSegments && this.segment > this.maxSegments) return true;
		this.setPoint(0, tick, value, panel.chart); // reset initial point for next segment, copy by value
		return false;
	};

	/**
	 * Ellipse drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.BaseTwoPoint}.
	 * @constructor
	 * @name  CIQ.Drawing.ellipse
	 */
	CIQ.Drawing.ellipse = function () {
		this.name = "ellipse";
	};

	CIQ.inheritsFrom(CIQ.Drawing.ellipse, CIQ.Drawing.BaseTwoPoint);

	CIQ.Drawing.ellipse.prototype.render = function (context) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		var yAxis = stx.getYAxisByField(panel, this.field);
		if (!panel || (this.field && !yAxis)) return;
		var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
		var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
		var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
		var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);

		var left = x0 - (x1 - x0);
		var right = x1;
		var middle = y0;
		var bottom = y1;
		var top = y0 - (y1 - y0);
		var weight = (bottom - top) / 6;
		var lineWidth = this.lineWidth;
		if (!lineWidth) lineWidth = 1.1;
		var edgeColor = this.color;
		if (edgeColor == "auto" || CIQ.isTransparent(edgeColor))
			edgeColor = this.getLineColor();
		if (this.highlighted && lineWidth == 0.1) lineWidth = 1.1;

		var fillColor = this.fillColor;

		context.beginPath();
		context.moveTo(left, middle);
		context.bezierCurveTo(
			left,
			bottom + weight,
			right,
			bottom + weight,
			right,
			middle
		);
		context.bezierCurveTo(
			right,
			top - weight,
			left,
			top - weight,
			left,
			middle
		);

		if (fillColor && !CIQ.isTransparent(fillColor) && fillColor != "auto") {
			context.fillStyle = fillColor;
			context.globalAlpha = 0.2;
			context.fill();
			context.globalAlpha = 1;
		}

		if (edgeColor && this.pattern != "none") {
			context.strokeStyle = edgeColor;
			context.lineWidth = lineWidth;
			if (context.setLineDash) {
				context.setLineDash(CIQ.borderPatternToArray(lineWidth, this.pattern));
				context.lineDashOffset = 0; //start point in array
			}
			context.stroke();
		}
		context.closePath();
		if (this.highlighted) {
			var p1Fill = this.highlighted == "p1" ? true : false;
			this.littleCircle(context, x1, y1, p1Fill);
		}
	};

	CIQ.Drawing.ellipse.prototype.intersected = function (tick, value, box) {
		if (!this.p0 || !this.p1) return null; // in case invalid drawing (such as from panel that no longer exists)
		if (this.pointIntersection(this.p1[0], this.p1[1], box)) {
			this.highlighted = "p1";
			return {
				action: "drag",
				point: "p1"
			};
		}
		const left = this.p0[0] - (this.p1[0] - this.p0[0]);
		const right = this.p1[0];
		const bottom = this.p1[1];
		const top = this.p0[1] - (this.p1[1] - this.p0[1]);

		let { x0, x1, y0, y1, cy0, cy1 } = box;
		if (x0 > Math.max(left, right) || x1 < Math.min(left, right)) return false;
		const { field, panelName, stx } = this;
		if (field) {
			const panel = stx.panels[panelName];
			const yAxis = stx.getYAxisByField(panel, field);
			y0 = this.valueFromPixel(cy0, panel, yAxis);
			y1 = this.valueFromPixel(cy1, panel, yAxis);
		}
		if (y1 > Math.max(top, bottom) || y0 < Math.min(top, bottom)) return false;

		this.highlighted = true;
		return {
			action: "move",
			p0: CIQ.clone(this.p0),
			p1: CIQ.clone(this.p1),
			tick: tick,
			value: this.valueOnDrawingAxis(tick, value)
		};
	};

	CIQ.Drawing.ellipse.prototype.configs = [
		"color",
		"fillColor",
		"lineWidth",
		"pattern"
	];

	/**
	 * Reconstruct an ellipse
	 * @param  {CIQ.ChartEngine} stx The chart object
	 * @param  {object} [obj] A drawing descriptor
	 * @param {string} [obj.col] The border color
	 * @param {string} [obj.fc] The fill color
	 * @param {string} [obj.pnl] The panel name
	 * @param {string} [obj.ptrn] Optional pattern for line "solid","dotted","dashed". Defaults to solid.
	 * @param {number} [obj.lw] Optional line width. Defaults to 1.
	 * @param {number} [obj.v0] Value (price) for the center point
	 * @param {number} [obj.v1] Value (price) for the outside point
	 * @param {number} [obj.d0] Date (string form) for the center point
	 * @param {number} [obj.d1] Date (string form) for the outside point
	 * @param {number} [obj.tzo0] Offset of UTC from d0 in minutes
	 * @param {number} [obj.tzo1] Offset of UTC from d1 in minutes
	 * @param {string} [obj.fld] Field which drawing is associated with
	 * @memberOf CIQ.Drawing.ellipse
	 *
	 * @since 8.4.0 Added `fld` property to `obj` parameter.
	 */
	CIQ.Drawing.ellipse.prototype.reconstruct = function (stx, obj) {
		this.stx = stx;
		this.color = obj.col;
		this.fillColor = obj.fc;
		this.panelName = obj.pnl;
		this.pattern = obj.ptrn;
		this.lineWidth = obj.lw;
		this.d0 = obj.d0;
		this.d1 = obj.d1;
		this.tzo0 = obj.tzo0;
		this.tzo1 = obj.tzo1;
		this.v0 = obj.v0;
		this.v1 = obj.v1;
		this.field = obj.fld;
		this.adjust();
	};

	CIQ.Drawing.ellipse.prototype.serialize = function () {
		return {
			name: this.name,
			pnl: this.panelName,
			col: this.color,
			fc: this.fillColor,
			ptrn: this.pattern,
			lw: this.lineWidth,
			d0: this.d0,
			d1: this.d1,
			tzo0: this.tzo0,
			tzo1: this.tzo1,
			v0: this.v0,
			v1: this.v1,
			fld: this.field
		};
	};

	/**
	 * Channel drawing tool. Creates a channel within 2 parallel line segments.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.segment}.
	 * @constructor
	 * @name  CIQ.Drawing.channel
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.channel = function () {
		this.name = "channel";
		this.dragToDraw = false;
		this.p2 = null;
	};

	CIQ.inheritsFrom(CIQ.Drawing.channel, CIQ.Drawing.segment);

	CIQ.Drawing.channel.prototype.configs = [
		"color",
		"fillColor",
		"lineWidth",
		"pattern"
	];

	CIQ.Drawing.channel.prototype.move = function (context, tick, value) {
		if (!this.penDown) return;

		this.copyConfig();
		if (this.p2 === null) this.p1 = [tick, value];
		else {
			var y =
				value -
				((this.p1[1] - this.p0[1]) / (this.p1[0] - this.p0[0])) *
					(tick - this.p1[0]);
			this.p2 = [this.p1[0], y];
		}
		this.render(context);
	};

	CIQ.Drawing.channel.prototype.click = function (context, tick, value) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		if (!panel) return;
		this.copyConfig();
		if (!this.penDown) {
			this.setPoint(0, tick, value, panel.chart);
			this.penDown = true;
			return false;
		}
		if (this.accidentalClick(tick, value)) {
			stx.undo(); //abort
			return true;
		}

		if (this.p2 !== null) {
			this.setPoint(2, this.p2[0], this.p2[1], panel.chart);
			this.penDown = false;
			return true;
		}
		this.setPoint(1, tick, value, panel.chart);
		if (this.p0[0] == this.p1[0]) {
			// don't allow vertical line
			this.p1 = null;
			return false;
		}
		this.p2 = [this.p1[0], this.p1[1]];
		return false;
	};

	CIQ.Drawing.channel.prototype.boxIntersection = function (tick, value, box) {
		const { p0, p1, p2 } = this;
		if (!p0 || !p1 || !p2) return false;
		let { x0, x1, y0, y1, cy0, cy1 } = box;
		if (x0 > Math.max(p0[0], p1[0]) || x1 < Math.min(p0[0], p1[0]))
			return false;

		const { field, panelName, stx } = this;
		if (field) {
			const panel = stx.panels[panelName];
			const yAxis = stx.getYAxisByField(panel, field);
			y0 = this.valueFromPixel(cy0, panel, yAxis);
			y1 = this.valueFromPixel(cy1, panel, yAxis);
		}

		// http://stackoverflow.com/questions/1560492/how-to-tell-whether-a-point-is-to-the-right-or-left-side-of-a-line
		const s1 =
			(p1[0] - p0[0]) * ((p2[1] < p0[1] ? y1 : y0) - p0[1]) -
			(p1[1] - p0[1]) * (tick - p0[0]);
		const s2 =
			(p2[0] - p0[0]) * ((p2[1] > p0[1] ? y1 : y0) - (p0[1] + p2[1] - p1[1])) -
			(p1[1] - p0[1]) * (tick - p0[0]);
		return s1 * s2 < 0;
	};

	CIQ.Drawing.channel.prototype.intersected = function (tick, value, box) {
		if (!this.p0 || !this.p1 || !this.p2) return null; // in case invalid drawing (such as from panel that no longer exists)
		var pointsToCheck = { 0: this.p0, 1: this.p1, 2: this.p2 };
		for (var pt in pointsToCheck) {
			if (
				this.pointIntersection(pointsToCheck[pt][0], pointsToCheck[pt][1], box)
			) {
				this.highlighted = "p" + pt;
				return {
					action: "drag",
					point: "p" + pt
				};
			}
		}
		if (this.boxIntersection(tick, value, box)) {
			this.highlighted = true;
			// This object will be used for repositioning
			return {
				action: "move",
				p0: CIQ.clone(this.p0),
				p1: CIQ.clone(this.p1),
				p2: CIQ.clone(this.p2),
				tick: tick, // save original tick
				value: this.valueOnDrawingAxis(tick, value) // save original value
			};
		}
		return null;
	};

	CIQ.Drawing.channel.prototype.render = function (context) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		var yAxis = stx.getYAxisByField(panel, this.field);
		if (!panel || (this.field && !yAxis)) return;
		var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
		var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
		var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
		var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);
		var y = null;
		if (this.p2) {
			y = this.pixelFromValue(panel, this.p2[0], this.p2[1], yAxis);
		}

		var width = this.lineWidth;
		var color = this.getLineColor();

		var fillColor = this.fillColor;
		if (
			this.p2 &&
			fillColor &&
			!CIQ.isTransparent(fillColor) &&
			fillColor != "auto"
		) {
			context.beginPath();
			context.moveTo(x0, y0);
			context.lineTo(x1, y1);
			context.lineTo(x1, y);
			context.lineTo(x0, y0 + (y - y1));
			context.closePath();
			context.globalAlpha = 0.2;
			context.fillStyle = fillColor;
			context.fill();
			context.globalAlpha = 1;
		}

		var parameters = {
			pattern: this.pattern,
			lineWidth: width
		};
		if ((this.penDown || this.highlighted) && this.pattern == "none")
			parameters.pattern = "dotted";
		stx.plotLine(x0, x1, y0, y1, color, "segment", context, panel, parameters);
		if (this.p2)
			stx.plotLine(
				x0,
				x1,
				y0 + (y - y1),
				y,
				color,
				"segment",
				context,
				panel,
				parameters
			);

		if (this.highlighted) {
			var p0Fill = this.highlighted == "p0" ? true : false;
			var p1Fill = this.highlighted == "p1" ? true : false;
			var p2Fill = this.highlighted == "p2" ? true : false;
			this.littleCircle(context, x0, y0, p0Fill);
			this.littleCircle(context, x1, y1, p1Fill);
			this.littleCircle(context, x1, y, p2Fill);
		}
	};

	CIQ.Drawing.channel.prototype.reposition = function (
		context,
		repositioner,
		tick,
		value
	) {
		if (!repositioner) return;
		var panel = this.stx.panels[this.panelName];
		var tickDiff = repositioner.tick - tick;
		var valueDiff = repositioner.value - value;
		if (repositioner.action == "move") {
			this.setPoint(
				0,
				repositioner.p0[0] - tickDiff,
				repositioner.p0[1] - valueDiff,
				panel.chart
			);
			this.setPoint(
				1,
				repositioner.p1[0] - tickDiff,
				repositioner.p1[1] - valueDiff,
				panel.chart
			);
			this.setPoint(
				2,
				repositioner.p2[0] - tickDiff,
				repositioner.p2[1] - valueDiff,
				panel.chart
			);
			this.render(context);
		} else if (repositioner.action == "drag") {
			this[repositioner.point] = [tick, value];
			this.setPoint(0, this.p0[0], this.p0[1], panel.chart);
			this.setPoint(1, this.p1[0], this.p1[1], panel.chart);
			this.setPoint(2, this.p2[0], this.p2[1], panel.chart);
			this.render(context);
		}
	};

	CIQ.Drawing.channel.prototype.adjust = function () {
		var panel = this.stx.panels[this.panelName];
		if (!panel) return;
		this.setPoint(0, this.d0, this.v0, panel.chart);
		this.setPoint(1, this.d1, this.v1, panel.chart);
		this.setPoint(2, this.d1, this.v2, panel.chart); //not an error, should be d1 here
	};

	/**
	 * Reconstruct a channel
	 * @param  {CIQ.ChartEngine} stx The chart object
	 * @param  {object} [obj] A drawing descriptor
	 * @param {string} [obj.col] The line color
	 * @param {string} [obj.fc] The fill color
	 * @param {string} [obj.pnl] The panel name
	 * @param {string} [obj.ptrn] Pattern for line "solid","dotted","dashed". Defaults to solid.
	 * @param {number} [obj.lw] Line width. Defaults to 1.
	 * @param {number} [obj.v0] Value (price) for the first point
	 * @param {number} [obj.v1] Value (price) for the second point
	 * @param {number} [obj.v2] Value (price) for the second point of the opposing parallel channel line
	 * @param {number} [obj.d0] Date (string form) for the first point
	 * @param {number} [obj.d1] Date (string form) for the second point
	 * @param {number} [obj.tzo0] Offset of UTC from d0 in minutes
	 * @param {number} [obj.tzo1] Offset of UTC from d1 in minutes
	 * @param {string} [obj.fld] Field which drawing is associated with
	 * @memberOf CIQ.Drawing.channel
	 *
	 * @since 8.4.0 Added `fld` property to `obj` parameter.
	 */
	CIQ.Drawing.channel.prototype.reconstruct = function (stx, obj) {
		this.stx = stx;
		this.color = obj.col;
		this.fillColor = obj.fc;
		this.panelName = obj.pnl;
		this.pattern = obj.ptrn;
		this.lineWidth = obj.lw;
		this.d0 = obj.d0;
		this.d1 = obj.d1;
		this.tzo0 = obj.tzo0;
		this.tzo1 = obj.tzo1;
		this.v0 = obj.v0;
		this.v1 = obj.v1;
		this.v2 = obj.v2;
		this.field = obj.fld;
		this.adjust();
	};

	CIQ.Drawing.channel.prototype.serialize = function () {
		return {
			name: this.name,
			pnl: this.panelName,
			col: this.color,
			fc: this.fillColor,
			ptrn: this.pattern,
			lw: this.lineWidth,
			d0: this.d0,
			d1: this.d1,
			tzo0: this.tzo0,
			tzo1: this.tzo1,
			v0: this.v0,
			v1: this.v1,
			v2: this.v2,
			fld: this.field
		};
	};

	/**
	 * Andrews' Pitchfork drawing tool. A Pitchfork is defined by three parallel rays.  The center ray is equidistant from the two outer rays.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.channel}.
	 * @constructor
	 * @name  CIQ.Drawing.pitchfork
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.pitchfork = function () {
		this.name = "pitchfork";
		this.dragToDraw = false;
		this.p2 = null;
	};

	CIQ.inheritsFrom(CIQ.Drawing.pitchfork, CIQ.Drawing.channel);

	CIQ.Drawing.pitchfork.prototype.configs = ["color", "lineWidth", "pattern"];

	CIQ.Drawing.pitchfork.prototype.move = function (context, tick, value) {
		if (!this.penDown) return;

		this.copyConfig();
		if (this.p2 === null) this.p1 = [tick, value];
		else this.p2 = [tick, value];
		this.render(context);
	};

	CIQ.Drawing.pitchfork.prototype.intersected = function (tick, value, box) {
		if (!this.p0 || !this.p1 || !this.p2) return null; // in case invalid drawing (such as from panel that no longer exists)
		var pointsToCheck = { 0: this.p0, 1: this.p1, 2: this.p2 };
		for (var pt in pointsToCheck) {
			if (
				this.pointIntersection(pointsToCheck[pt][0], pointsToCheck[pt][1], box)
			) {
				this.highlighted = "p" + pt;
				return {
					action: "drag",
					point: "p" + pt
				};
			}
		}
		var rays = this.rays;
		for (var i = 0; i < rays.length; i++) {
			if (
				this.lineIntersection(
					tick,
					value,
					box,
					i ? "ray" : "segment",
					rays[i][0],
					rays[i][1],
					true
				)
			) {
				this.highlighted = true;
				// This object will be used for repositioning
				return {
					action: "move",
					p0: CIQ.clone(this.p0),
					p1: CIQ.clone(this.p1),
					p2: CIQ.clone(this.p2),
					tick: tick, // save original tick
					value: this.valueOnDrawingAxis(tick, value) // save original value
				};
			}
		}
		return null;
	};

	CIQ.Drawing.pitchfork.prototype.render = function (context) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		var yAxis = stx.getYAxisByField(panel, this.field);
		if (!panel || (this.field && !yAxis)) return;
		var p2 = this.p2;
		if (!p2) p2 = this.p1;
		var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
		var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
		var x2 = stx.pixelFromTick(p2[0], panel.chart);
		var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
		var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);
		var y2 = this.pixelFromValue(panel, p2[0], p2[1], yAxis);

		var width = this.lineWidth;
		var color = this.getLineColor();

		var parameters = {
			pattern: this.pattern,
			lineWidth: width
		};
		var z = 50;
		var yp = 2 * y0 - y1 - y2;
		var denom = 2 * x0 - x1 - x2;
		if (denom < 0) z *= -1;
		yp *= z / denom;
		this.rays = [
			[
				[x1, y1],
				[x2, y2]
			],
			[
				[x0, y0],
				[(x1 + x2) / 2, (y1 + y2) / 2]
			]
		];
		if (!(x1 == x2 && y1 == y2)) {
			this.rays.push(
				[
					[x1, y1],
					[x1 - z, y1 - yp]
				],
				[
					[x2, y2],
					[x2 - z, y2 - yp]
				]
			);
		}
		for (var i = 0; i < this.rays.length; i++) {
			var ray = this.rays[i],
				type = i ? "ray" : "segment";
			stx.plotLine(
				ray[0][0],
				ray[1][0],
				ray[0][1],
				ray[1][1],
				color,
				type,
				context,
				panel,
				parameters
			);
		}
		if (this.highlighted) {
			var p0Fill = this.highlighted == "p0" ? true : false;
			var p1Fill = this.highlighted == "p1" ? true : false;
			var p2Fill = this.highlighted == "p2" ? true : false;
			this.littleCircle(context, x0, y0, p0Fill);
			this.littleCircle(context, x1, y1, p1Fill);
			this.littleCircle(context, x2, y2, p2Fill);
		}
	};

	CIQ.Drawing.pitchfork.prototype.adjust = function () {
		var panel = this.stx.panels[this.panelName];
		if (!panel) return;
		this.setPoint(0, this.d0, this.v0, panel.chart);
		this.setPoint(1, this.d1, this.v1, panel.chart);
		this.setPoint(2, this.d2, this.v2, panel.chart);
	};

	/**
	 * Reconstruct a pitchfork
	 * @param  {CIQ.ChartEngine} stx The chart object
	 * @param  {object} [obj] A drawing descriptor
	 * @param {string} [obj.col] The line color
	 * @param {string} [obj.pnl] The panel name
	 * @param {string} [obj.ptrn] Pattern for line "solid","dotted","dashed". Defaults to solid.
	 * @param {number} [obj.lw] Line width. Defaults to 1.
	 * @param {number} [obj.v0] Value (price) for the first point
	 * @param {number} [obj.v1] Value (price) for the second point
	 * @param {number} [obj.v2] Value (price) for the third point
	 * @param {number} [obj.d0] Date (string form) for the first point
	 * @param {number} [obj.d1] Date (string form) for the second point
	 * @param {number} [obj.d2] Date (string form) for the third point
	 * @param {number} [obj.tzo0] Offset of UTC from d0 in minutes
	 * @param {number} [obj.tzo1] Offset of UTC from d1 in minutes
	 * @param {number} [obj.tzo2] Offset of UTC from d2 in minutes
	 * @param {string} [obj.fld] Field which drawing is associated with
	 * @memberOf CIQ.Drawing.pitchfork
	 *
	 * @since 8.4.0 Added `fld` property to `obj` parameter.
	 */
	CIQ.Drawing.pitchfork.prototype.reconstruct = function (stx, obj) {
		this.stx = stx;
		this.color = obj.col;
		this.panelName = obj.pnl;
		this.pattern = obj.ptrn;
		this.lineWidth = obj.lw;
		this.d0 = obj.d0;
		this.d1 = obj.d1;
		this.d2 = obj.d2;
		this.tzo0 = obj.tzo0;
		this.tzo1 = obj.tzo1;
		this.tzo2 = obj.tzo2;
		this.v0 = obj.v0;
		this.v1 = obj.v1;
		this.v2 = obj.v2;
		this.field = obj.fld;
		this.adjust();
	};

	CIQ.Drawing.pitchfork.prototype.serialize = function () {
		return {
			name: this.name,
			pnl: this.panelName,
			col: this.color,
			ptrn: this.pattern,
			lw: this.lineWidth,
			d0: this.d0,
			d1: this.d1,
			d2: this.d2,
			tzo0: this.tzo0,
			tzo1: this.tzo1,
			tzo2: this.tzo2,
			v0: this.v0,
			v1: this.v1,
			v2: this.v2,
			fld: this.field
		};
	};

	/**
	 * Gartley drawing tool. Creates a series of four connected line segments, each one completed with a user click.
	 * Will adhere to Gartley requirements vis-a-vis fibonacci levels etc..
	 *
	 * It inherits its properties from {@link CIQ.Drawing.continuous}.
	 * @constructor
	 * @name  CIQ.Drawing.gartley
	 * @version ChartIQ Advanced Package
	 * @since 04-2015-15
	 */
	CIQ.Drawing.gartley = function () {
		this.name = "gartley";
		this.dragToDraw = false;
		this.maxSegments = 4;
		this.shape = null;
		this.points = [];
	};

	CIQ.inheritsFrom(CIQ.Drawing.gartley, CIQ.Drawing.continuous);

	CIQ.Drawing.gartley.prototype.check = function (first, second) {
		if (!second) return true;
		if (first[0] >= second[0] || first[1] == second[1]) return false;
		if (this.segment == 1) {
			if (first[1] < second[1]) this.shape = "M";
			else this.shape = "W";
		} else if (this.segment == 2) {
			if (this.shape == "M" && first[1] < second[1]) return false;
			else if (this.shape == "W" && first[1] > second[1]) return false;
			else if ((second[1] - first[1]) / (this.points[0][1] - first[1]) < 0.618)
				return false;
			else if ((second[1] - first[1]) / (this.points[0][1] - first[1]) >= 0.786)
				return false;
		} else if (this.segment == 3) {
			if (this.shape == "M" && first[1] > second[1]) return false;
			else if (this.shape == "W" && first[1] < second[1]) return false;
			else if ((second[1] - first[1]) / (this.points[1][1] - first[1]) < 0.618)
				return false;
			else if ((second[1] - first[1]) / (this.points[1][1] - first[1]) >= 0.786)
				return false;
		} else if (this.segment == 4) {
			if (
				this.shape == "M" &&
				(first[1] < second[1] || second[1] < this.points[0][1])
			)
				return false;
			else if (
				this.shape == "W" &&
				(first[1] > second[1] || second[1] > this.points[0][1])
			)
				return false;
			else if (
				(this.points[1][1] - second[1]) /
					(this.points[1][1] - this.points[2][1]) <
				1.27
			)
				return false;
			else if (
				(this.points[1][1] - second[1]) /
					(this.points[1][1] - this.points[2][1]) >=
				1.618
			)
				return false;
		}
		return true;
	};

	CIQ.Drawing.gartley.prototype.click = function (context, tick, value) {
		var panel = this.stx.panels[this.panelName];
		if (!panel) return;
		this.copyConfig();
		if (!this.penDown) {
			this.setPoint(0, tick, value, panel.chart);
			this.pts = [];
			this.penDown = true;
			this.segment = 1;
			return false;
		}
		if (this.accidentalClick(tick, value)) {
			this.penDown = true;
			return false;
		}
		if (this.check(this.p0, this.p1)) {
			if (this.segment == 1) this.points.push(this.p0);
			this.points.push(this.p1);
			this.setPoint(1, tick, value, panel.chart);
			this.segment++;

			if (this.segment > this.maxSegments) {
				this.setPoint(0, this.points[0][0], this.points[0][1], panel.chart);
				this.penDown = false;
				return true;
			}
			this.pts.push(this.d1, this.tzo1, this.v1);
			this.setPoint(0, tick, value, panel.chart); // reset initial point for next segment, copy by value
		}
		return false;
	};

	CIQ.Drawing.gartley.prototype.render = function (context) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		var yAxis = stx.getYAxisByField(panel, this.field);
		if (!panel || (this.field && !yAxis)) return;
		var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
		var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
		var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
		var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);

		if (this.segment == 2) {
			this.drawDropZone(
				context,
				0.618 * this.points[0][1] + 0.382 * this.p0[1],
				0.786 * this.points[0][1] + 0.214 * this.p0[1],
				this.p0[0]
			);
		} else if (this.segment == 3) {
			this.drawDropZone(
				context,
				0.618 * this.points[1][1] + 0.382 * this.p0[1],
				0.786 * this.points[1][1] + 0.214 * this.p0[1],
				this.p0[0]
			);
		} else if (this.segment == 4) {
			var bound = 1.618 * this.points[2][1] - 0.618 * this.points[1][1];
			if (this.shape == "M") bound = Math.max(bound, this.points[0][1]);
			else bound = Math.min(bound, this.points[0][1]);
			this.drawDropZone(
				context,
				bound,
				1.27 * this.points[2][1] - 0.27 * this.points[1][1],
				this.p0[0]
			);
		}

		var width = this.lineWidth;
		var color = this.getLineColor();

		var parameters = {
			pattern: this.pattern,
			lineWidth: width
		};
		if ((this.penDown || this.highlighted) && this.pattern == "none")
			parameters.pattern = "dotted";
		if (this.segment <= this.maxSegments)
			stx.plotLine(
				x0,
				x1,
				y0,
				y1,
				color,
				this.name,
				context,
				panel,
				parameters
			);

		var fillColor = this.fillColor;
		var coords = [];
		if (this.points.length) {
			context.beginPath();
			for (var fp = 1; fp < this.points.length && fp <= 4; fp++) {
				var xx0 = stx.pixelFromTick(this.points[fp - 1][0], panel.chart);
				var xx1 = stx.pixelFromTick(this.points[fp][0], panel.chart);
				var yy0 = this.pixelFromValue(
					panel,
					this.points[fp - 1][0],
					this.points[fp - 1][1],
					yAxis
				);
				var yy1 = this.pixelFromValue(
					panel,
					this.points[fp][0],
					this.points[fp][1],
					yAxis
				);
				if (fp == 1) coords.push(xx0, yy0);
				coords.push(xx1, yy1);
				stx.plotLine(
					xx0,
					xx1,
					yy0,
					yy1,
					color,
					this.name,
					context,
					panel,
					parameters
				);
			}
			if (this.points.length == 2 || this.points.length == 4) {
				coords.push(x1, y1);
			}
			if (this.points[2]) {
				coords.push(
					stx.pixelFromTick(this.points[2][0], panel.chart),
					this.pixelFromValue(
						panel,
						this.points[2][0],
						this.points[2][1],
						yAxis
					)
				);
			}
			if (fillColor && fillColor != "auto" && !CIQ.isTransparent(fillColor)) {
				for (var c = 0; c < coords.length; c += 2) {
					if (c === 0) context.moveTo(coords[0], coords[1]);
					context.lineTo(coords[c], coords[c + 1]);
				}
				context.fillStyle = fillColor;
				context.globalAlpha = 0.2;
				context.closePath();
				context.fill();
				context.globalAlpha = 1;
			}
		}

		/*if(this.highlighted){
			var p0Fill=this.highlighted=="p0"?true:false;
			var p1Fill=this.highlighted=="p1"?true:false;
			this.littleCircle(context, x0, y0, p0Fill);
			this.littleCircle(context, x1, y1, p1Fill);
		}*/
	};

	CIQ.Drawing.gartley.prototype.lineIntersection = function (
		tick,
		value,
		box,
		type
	) {
		var points = this.points,
			panel = this.stx.panels[this.panelName];
		if (points.length != this.maxSegments + 1 || !panel) return false;
		for (var pt = 0; pt < points.length - 1; pt++) {
			if (
				CIQ.Drawing.BaseTwoPoint.prototype.lineIntersection.call(
					this,
					tick,
					value,
					box,
					"segment",
					points[pt],
					points[pt + 1]
				)
			)
				return true;
		}
		return false;
	};

	CIQ.Drawing.gartley.prototype.boxIntersection = function (tick, value, box) {
		if (!this.p0 || !this.p1) return false;
		if (
			box.x0 > Math.max(this.p0[0], this.p1[0]) ||
			box.x1 < Math.min(this.p0[0], this.p1[0])
		)
			return false;
		var lowPoint = Math.min(this.p0[1], this.p1[1]);
		var highPoint = Math.max(this.p0[1], this.p1[1]);
		for (var pt = 0; pt < this.points.length; pt++) {
			lowPoint = Math.min(lowPoint, this.points[pt][1]);
			highPoint = Math.max(highPoint, this.points[pt][1]);
		}
		if (box.y1 > highPoint || box.y0 < lowPoint) return false;
		return true;
	};

	CIQ.Drawing.gartley.prototype.reposition = function (
		context,
		repositioner,
		tick,
		value
	) {
		if (!repositioner) return;
		var panel = this.stx.panels[this.panelName];
		var tickDiff = repositioner.tick - tick;
		repositioner.tick = tick;
		var valueDiff = repositioner.value - value;
		repositioner.value = value;
		if (repositioner.action == "move") {
			this.pts = [];
			for (var pt = 0; pt < this.points.length; pt++) {
				this.points[pt][0] -= tickDiff;
				this.points[pt][1] -= valueDiff;
				this.setPoint(1, this.points[pt][0], this.points[pt][1], panel.chart);
				if (pt && pt < this.points.length - 1)
					this.pts.push(this.d1, this.tzo1, this.v1);
				this.points[pt] = this.p1;
			}
			this.setPoint(0, this.points[0][0], this.points[0][1], panel.chart);
			this.render(context);
			/*}else if(repositioner.action=="drag"){
			this[repositioner.point]=[tick, value];
			this.setPoint(0, this.p0[0], this.p0[1], panel.chart);
			this.setPoint(1, this.p1[0], this.p1[1], panel.chart);
			this.render(context);*/
		}
	};

	CIQ.Drawing.gartley.prototype.configs = [
		"color",
		"fillColor",
		"lineWidth",
		"pattern"
	];

	CIQ.Drawing.gartley.prototype.adjust = function () {
		// If the drawing's panel doesn't exist then we'll check to see
		// whether the panel has been added. If not then there's no way to adjust
		var panel = this.stx.panels[this.panelName];
		if (!panel) return;
		this.reconstructPoints();

		this.setPoint(0, this.d0, this.v0, panel.chart);
		this.points.unshift(this.p0);

		this.setPoint(1, this.d1, this.v1, panel.chart);
		this.points.push(this.p1);
	};

	CIQ.Drawing.gartley.prototype.reconstructPoints = function () {
		var panel = this.stx.panels[this.panelName];
		if (!panel) return;
		this.points = [];
		for (var a = 0; a < this.pts.length; a += 3) {
			var d = CIQ.strToDateTime(this.pts[a]);
			d.setMinutes(
				d.getMinutes() + Number(this.pts[a + 1]) - d.getTimezoneOffset()
			);
			this.points.push([
				this.stx.tickFromDate(CIQ.yyyymmddhhmmssmmm(d), panel.chart),
				this.pts[a + 2]
			]);
		}
	};

	/**
	 * Reconstruct a gartley
	 * @param  {CIQ.ChartEngine} stx The chart object
	 * @param  {object} [obj] A drawing descriptor
	 * @param {string} [obj.col] The line color
	 * @param {string} [obj.fc] The fill color
	 * @param {string} [obj.pnl] The panel name
	 * @param {string} [obj.ptrn] Pattern for line "solid","dotted","dashed". Defaults to solid.
	 * @param {number} [obj.lw] Line width. Defaults to 1.
	 * @param {number} [obj.v0] Value (price) for the first point
	 * @param {number} [obj.v1] Value (price) for the last point
	 * @param {number} [obj.d0] Date (string form) for the first point
	 * @param {number} [obj.d1] Date (string form) for the last point
	 * @param {number} [obj.tzo0] Offset of UTC from d0 in minutes
	 * @param {number} [obj.tzo1] Offset of UTC from d1 in minutes
	 * @param {string} [obj.fld] Field which drawing is associated with
	 * @param {number} [obj.pts] a serialized list of dates,offsets,values for the 3 intermediate points of the gartley (should be 9 items in list)
	 * @memberOf CIQ.Drawing.gartley
	 *
	 * @since 8.4.0 Added `fld` property to `obj` parameter.
	 */
	CIQ.Drawing.gartley.prototype.reconstruct = function (stx, obj) {
		this.stx = stx;
		this.color = obj.col;
		this.fillColor = obj.fc;
		this.panelName = obj.pnl;
		this.pattern = obj.ptrn;
		this.lineWidth = obj.lw;
		this.d0 = obj.d0;
		this.d1 = obj.d1;
		this.tzo0 = obj.tzo0;
		this.tzo1 = obj.tzo1;
		this.v0 = obj.v0;
		this.v1 = obj.v1;
		this.field = obj.fld;
		this.pts = obj.pts.split(",");
		this.adjust();
	};

	CIQ.Drawing.gartley.prototype.serialize = function () {
		return {
			name: this.name,
			pnl: this.panelName,
			col: this.color,
			fc: this.fillColor,
			ptrn: this.pattern,
			lw: this.lineWidth,
			d0: this.d0,
			d1: this.d1,
			tzo0: this.tzo0,
			tzo1: this.tzo1,
			v0: this.v0,
			v1: this.v1,
			fld: this.field,
			pts: this.pts.join(",")
		};
	};

	/**
	 * Freeform drawing tool. Set splineTension to a value from 0 to 1 (default .3). This is a dragToDraw function
	 * and automatically disables the crosshairs while enabled.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.segment}.
	 * @constructor
	 * @name  CIQ.Drawing.freeform
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.freeform = function () {
		this.name = "freeform";
		this.splineTension = 0.3; //set to -1 to not use splines at all
		this.dragToDraw = true;
	};

	CIQ.inheritsFrom(CIQ.Drawing.freeform, CIQ.Drawing.segment);

	CIQ.Drawing.freeform.prototype.measure = function () {};

	CIQ.Drawing.freeform.prototype.intersected = function (tick, value, box) {
		let { x0, x1, y0, y1, cy0, cy1 } = box;
		if (x0 > this.hiX || x1 < this.lowX) return false;

		const { field, panelName, stx } = this;
		if (field) {
			const panel = stx.panels[panelName];
			const yAxis = stx.getYAxisByField(panel, field);
			y0 = this.valueFromPixel(cy0, panel, yAxis);
			y1 = this.valueFromPixel(cy1, panel, yAxis);
		}
		if (y1 > this.hiY || y0 < this.lowY) return false;

		this.highlighted = true;
		// This object will be used for repositioning
		return {
			action: "move",
			p0: CIQ.clone(this.p0),
			tick: tick, // save original tick
			value: this.valueOnDrawingAxis(tick, value) // save original value
		};
	};

	CIQ.Drawing.freeform.prototype.reposition = function (
		context,
		repositioner,
		tick,
		value
	) {
		if (!repositioner) return;
		var panel = this.stx.panels[this.panelName];
		var tickDiff = repositioner.tick - tick;
		var valueDiff = repositioner.value - value;
		if (repositioner.action == "move") {
			this.setPoint(
				0,
				repositioner.p0[0] - tickDiff,
				repositioner.p0[1] - valueDiff,
				panel.chart
			);
			this.adjust();
			this.render(context);
		}
	};

	CIQ.Drawing.freeform.prototype.click = function (context, tick, value) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		if (!panel) return;

		var yAxis = stx.getYAxisByField(panel, this.field) || panel.yAxis;
		if (this.penDown === false) {
			this.copyConfig();
			this.startX = Math.round(
				stx.resolveX(stx.pixelFromTick(tick, panel.chart))
			);
			this.startY = Math.round(
				stx.resolveY(this.pixelFromValue(panel, tick, value, yAxis))
			);
			var d = stx.dateFromTick(tick, panel.chart, true);
			this.d0 = CIQ.yyyymmddhhmmssmmm(d);
			this.tzo0 = d.getTimezoneOffset();
			this.v0 = value;
			this.p0 = [
				CIQ.ChartEngine.crosshairX - this.startX,
				CIQ.ChartEngine.crosshairY - this.startY
			];
			this.nodes = [this.p0[0], this.p0[1]];
			this.pNodes = [this.p0];
			this.candleWidth = stx.layout.candleWidth;
			this.multiplier = yAxis.multiplier;
			this.interval = stx.layout.interval;
			this.periodicity = stx.layout.periodicity;
			this.tempSplineTension = this.splineTension;
			this.splineTension = -1;
			stx.container.ownerDocument.body.style.cursor = "pointer";
			this.penDown = true;
			return false;
		}
		this.penDown = false;
		this.splineTension = this.tempSplineTension;
		stx.container.ownerDocument.body.style.cursor = "auto";
		if (this.nodes.length === 2) stx.undo();

		return true;
	};

	CIQ.Drawing.freeform.prototype.move = function (context, tick, value) {
		if (!this.penDown) return;
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		var yAxis = stx.getYAxisByField(panel, this.field) || panel.yAxis;
		var d1 = stx.dateFromTick(tick, panel.chart, true);
		this.d1 = CIQ.yyyymmddhhmmssmmm(d1);
		this.tzo1 = d1.getTimezoneOffset();
		this.v1 = value;
		this.p1 = [
			CIQ.ChartEngine.crosshairX - this.startX,
			yAxis.flipped
				? this.startY - CIQ.ChartEngine.crosshairY
				: CIQ.ChartEngine.crosshairY - this.startY
		];

		if (this.pNodes.length > 2) {
			if (
				this.p1[0] == this.pNodes[this.pNodes.length - 2][0] &&
				this.p1[0] == this.pNodes[this.pNodes.length - 1][0]
			) {
				this.pNodes.length--;
				this.nodes.length -= 2;
			} else if (
				this.p1[1] == this.pNodes[this.pNodes.length - 2][1] &&
				this.p1[1] == this.pNodes[this.pNodes.length - 1][1]
			) {
				this.pNodes.length--;
				this.nodes.length -= 2;
			}
		}

		this.nodes.push(this.p1[0], this.p1[1]);
		this.pNodes.push(this.p1);

		this.render(context);
		return false;
	};

	//This function does not compute exactly, it uses rough ratios to resize the drawing based on the interval.
	CIQ.Drawing.freeform.prototype.intervalRatio = function (
		oldInterval,
		newInterval,
		oldPeriodicity,
		newPeriodicity,
		startDate,
		symbol
	) {
		//approximating functions
		function weeksInMonth(startDate, symbol) {
			return 5;
		}
		function daysInWeek(startDate, symbol) {
			return 5;
		}
		function daysInMonth(startDate, symbol) {
			return 30;
		}
		function minPerDay(startDate, symbol) {
			if (CIQ.Market.Symbology.isForexSymbol(symbol)) return 1440;
			return 390;
		}
		//1,3,5,10,15,30,"day","week","month"
		var returnValue = 0;
		if (oldInterval == newInterval) returnValue = 1;
		else if (!isNaN(oldInterval) && !isNaN(newInterval))
			returnValue = oldInterval / newInterval;
		//two intraday intervals
		else if (isNaN(oldInterval)) {
			//was daily
			if (oldInterval == "month") {
				if (newInterval == "week")
					returnValue = weeksInMonth(startDate, symbol);
				else if (newInterval == "day")
					returnValue = daysInMonth(startDate, symbol);
				else if (!isNaN(newInterval))
					returnValue =
						(daysInMonth(startDate, symbol) * minPerDay(startDate, symbol)) /
						newInterval;
			} else if (oldInterval == "week") {
				if (newInterval == "month")
					returnValue = 1 / weeksInMonth(startDate, symbol);
				if (newInterval == "day") returnValue = daysInWeek(startDate, symbol);
				else if (!isNaN(newInterval))
					returnValue =
						(daysInWeek(startDate, symbol) * minPerDay(startDate, symbol)) /
						newInterval;
			} else if (oldInterval == "day") {
				if (newInterval == "week")
					returnValue = 1 / daysInWeek(startDate, symbol);
				else if (newInterval == "month")
					returnValue = 1 / daysInMonth(startDate, symbol);
				else if (!isNaN(newInterval))
					returnValue = minPerDay(startDate, symbol) / newInterval;
			}
		} else if (!isNaN(oldInterval)) {
			//switching from intraday to daily
			if (newInterval == "month")
				returnValue =
					oldInterval /
					(daysInMonth(startDate, symbol) * minPerDay(startDate, symbol));
			else if (newInterval == "week")
				returnValue =
					oldInterval /
					(daysInWeek(startDate, symbol) * minPerDay(startDate, symbol));
			else if (newInterval == "day")
				returnValue = oldInterval / minPerDay(startDate, symbol);
		}
		returnValue *= oldPeriodicity / newPeriodicity;
		return returnValue;
	};

	CIQ.Drawing.freeform.prototype.render = function (context) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		var yAxis = stx.getYAxisByField(panel, this.field);
		if (!panel || (this.field && !yAxis)) return;
		yAxis = yAxis || panel.yAxis;

		var intvl = this.intervalRatio(
			this.interval,
			stx.layout.interval,
			this.periodicity,
			stx.layout.periodicity,
			this.d0,
			panel.chart.symbol
		);
		if (intvl === 0) return;

		var cwr = stx.layout.candleWidth / this.candleWidth;
		var mlt = yAxis.multiplier / this.multiplier;
		this.setPoint(0, this.d0, this.v0, panel.chart);
		var spx = stx.pixelFromTick(this.p0[0], panel.chart);
		var spy = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
		var arrPoints = [];

		var width = this.lineWidth;
		var color = this.getLineColor();

		var parameters = {
			pattern: this.pattern,
			lineWidth: width
		};

		for (var n = 0; n < this.pNodes.length; n++) {
			var x0 = intvl * cwr * this.pNodes[n][0] + spx;
			var y0 = mlt * this.pNodes[n][1];
			if (yAxis.flipped) y0 = spy - y0;
			else y0 += spy;
			arrPoints.push(x0, y0);
		}

		if (!arrPoints.length) return;
		if (this.splineTension < 0) {
			stx.connectTheDots(
				arrPoints,
				color,
				this.name,
				context,
				panel,
				parameters
			);
		} else {
			stx.plotSpline(
				arrPoints,
				this.splineTension,
				color,
				this.name,
				context,
				true,
				parameters
			);
		}
	};

	CIQ.Drawing.freeform.prototype.adjust = function () {
		var stx = this.stx;
		// If the drawing's panel doesn't exist then we'll check to see
		// whether the panel has been added. If not then there's no way to adjust
		var panel = stx.panels[this.panelName];
		if (!panel) return;

		var p0 = [this.nodes[0], this.nodes[1]];
		this.pNodes = [p0];
		this.lowX = this.nodes[0];
		this.hiX = this.nodes[0];
		this.lowY = this.nodes[1];
		this.hiY = this.nodes[1];

		for (var n = 2; n < this.nodes.length; n += 2) {
			var p1 = [this.nodes[n], this.nodes[n + 1]];
			this.pNodes.push(p1);
			this.lowX = Math.min(this.lowX, p1[0]);
			this.hiX = Math.max(this.hiX, p1[0]);
			this.lowY = Math.max(this.lowY, p1[1]); //reversed because price axis goes bottom to top
			this.hiY = Math.min(this.hiY, p1[1]);
		}

		var intvl = this.intervalRatio(
			this.interval,
			stx.layout.interval,
			this.periodicity,
			stx.layout.periodicity,
			this.d0,
			panel.chart.symbol
		);
		if (intvl === 0) return;

		var yAxis = stx.getYAxisByField(panel, this.field) || panel.yAxis;
		var cwr = stx.layout.candleWidth / this.candleWidth;
		var mlt = yAxis.multiplier / this.multiplier;
		this.setPoint(0, this.d0, this.v0, panel.chart);
		var spx = stx.pixelFromTick(this.p0[0], panel.chart);
		var spy = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);

		this.lowX = stx.tickFromPixel(
			Math.floor(intvl * cwr * this.lowX) + spx,
			panel.chart
		);
		this.hiX = stx.tickFromPixel(
			Math.ceil(intvl * cwr * this.hiX) + spx,
			panel.chart
		);
		if (yAxis.flipped) {
			this.lowY = this.valueFromPixel(
				spy - Math.floor(mlt * this.lowY),
				panel,
				yAxis
			);
			this.hiY = this.valueFromPixel(
				spy - Math.ceil(mlt * this.hiY),
				panel,
				yAxis
			);
		} else {
			this.lowY = this.valueFromPixel(
				Math.floor(mlt * this.lowY) + spy,
				panel,
				yAxis
			);
			this.hiY = this.valueFromPixel(
				Math.ceil(mlt * this.hiY) + spy,
				panel,
				yAxis
			);
		}
	};

	CIQ.Drawing.freeform.prototype.serialize = function () {
		return {
			name: this.name,
			pnl: this.panelName,
			col: this.color,
			ptrn: this.pattern,
			lw: this.lineWidth,
			cw: Number(this.candleWidth.toFixed(4)),
			mlt: Number(this.multiplier.toFixed(4)),
			d0: this.d0,
			tzo0: this.tzo0,
			v0: this.v0,
			inter: this.interval,
			pd: this.periodicity,
			nodes: this.nodes,
			fld: this.field
		};
	};

	/**
	 * Reconstruct a freeform drawing. It is not recommended to do this programmatically.
	 * @param  {CIQ.ChartEngine} stx The chart object
	 * @param  {object} [obj] A drawing descriptor
	 * @param {string} [obj.col] The line color
	 * @param {string} [obj.pnl] The panel name
	 * @param {string} [obj.ptrn] Pattern for line "solid","dotted","dashed". Defaults to solid.
	 * @param {number} [obj.lw] Line width. Defaults to 1.
	 * @param {number} [obj.cw] Candle width from original drawing
	 * @param {number} [obj.mlt] Y-axis multiplier from original drawing
	 * @param {number} [obj.v0] Value (price) for the first point
	 * @param {number} [obj.d0] Date (string form) for the first point
	 * @param {number} [obj.int] Interval from original drawing
	 * @param {number} [obj.pd] Periodicity from original drawing
	 * @param {number} [obj.tzo0] Offset of UTC from d0 in minutes
	 * @param {array} [obj.nodes] An array of nodes in form [x0a,x0b,y0a,y0b, x1a, x1b, y1a, y1b, ....]
	 * @param {string} [obj.fld] Field which drawing is associated with
	 * @memberOf CIQ.Drawing.freeform
	 *
	 * @since 8.4.0 Added `fld` property to `obj` parameter.
	 */
	CIQ.Drawing.freeform.prototype.reconstruct = function (stx, obj) {
		this.stx = stx;
		this.color = obj.col;
		this.panelName = obj.pnl;
		this.pattern = obj.ptrn;
		this.lineWidth = obj.lw;
		this.candleWidth = obj.cw;
		this.multiplier = obj.mlt;
		this.d0 = obj.d0;
		this.tzo0 = obj.tzo0;
		this.v0 = obj.v0;
		this.interval = obj.inter;
		this.periodicity = obj.pd;
		this.nodes = obj.nodes;
		this.field = obj.fld;
		this.adjust();
	};

	/**
	 * Callout drawing tool.  This is like an annotation except it draws a stem and offers a background color and line style.
	 *
	 * @constructor
	 * @name  CIQ.Drawing.callout
	 * @since 2015-11-1
	 * @version ChartIQ Advanced Package
	 * @see {@link CIQ.Drawing.annotation}
	 */
	CIQ.Drawing.callout = function () {
		this.name = "callout";
		this.arr = [];
		this.w = 0;
		this.h = 0;
		this.padding = 5;
		this.text = "";
		this.ta = null;
		this.border = false;
		this.fontSize = 12;
		this.font = {};
		this.stemEntry = "";
		this.defaultWidth = 35;
		//this.dragToDraw=true;
	};

	CIQ.inheritsFrom(CIQ.Drawing.callout, CIQ.Drawing.annotation);

	CIQ.Drawing.callout.prototype.configs = [
		"color",
		"fillColor",
		"lineWidth",
		"pattern",
		"font"
	];

	CIQ.Drawing.callout.prototype.copyConfig = function (withPreferences) {
		CIQ.Drawing.copyConfig(this, withPreferences);
		this.borderColor = this.color;
	};

	CIQ.Drawing.callout.prototype.move = function (context, tick, value) {
		if (!this.penDown) return;

		this.copyConfig();
		this.p0 = [tick, value];
		this.render(context);
	};

	CIQ.Drawing.callout.prototype.onChange = function (e) {
		var panel = this.stx.panels[this.panelName];
		if (!panel) return;
		var textarea = e.target;
		this.w = textarea.clientWidth;
		this.h = textarea.clientHeight;
		var context = this.context || this.stx.chart.tempCanvas.context;
		CIQ.clearCanvas(context.canvas, this.stx);
		this.render(context);
		this.edit(context);
	};

	CIQ.Drawing.callout.prototype.repositionTextArea = function (textarea) {
		let calloutWidth = this.defaultWidth * 2 + this.whitespace + this.padding; // default callout width calculation
		calloutWidth = Math.max(this.w, calloutWidth);
		textarea.style.left =
			CIQ.stripPX(textarea.style.left) -
			(!isNaN(calloutWidth) ? calloutWidth / 2 : this.defaultWidth * 2) +
			"px";
		this.ta = textarea;
	};

	CIQ.Drawing.callout.prototype.render = function (context) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		var yAxis = stx.getYAxisByField(panel, this.field);
		if (!panel || (this.field && !yAxis)) return;
		this.context = context; // remember last context
		var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
		var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
		if (isNaN(y0)) return;

		context.font = this.fontString;
		context.textBaseline = "top";
		var x = x0;
		var y = y0;
		var w = this.w / 2;
		var h = this.h / 2;
		if (this.penDown) {
			// The width calculation is different for the callout
			// as the defaultWidth isn't the entire distance of the drawing
			// but the radius from the click origin. So a defaultWidth of 35
			// means a callout of 70 width plus all the extra padding the
			// Annotation needs. The Annotation extras need to be halved
			// since those are part of the full width calculation.
			w = this.defaultWidth + this.whitespace / 2 + this.padding / 2;
			h = this.fontSize + this.fontModifier;
		}
		var lineWidth = this.lineWidth;
		if (!lineWidth) lineWidth = 1.1;
		var color = this.getLineColor();
		var borderColor = this.getLineColor(this.borderColor);
		var sx0, sx1, sy0, sy1;
		var r = Math.min(Math.min(w, h) / 2, 8);
		if (this.stem) {
			if (this.stem.t) {
				// absolute positioning of stem
				sx0 = stx.pixelFromTick(this.stem.t); // bottom of stem
				sy0 = this.pixelFromValue(panel, this.stem.t, this.stem.v, yAxis);
			} else if (this.stem.x) {
				// stem with relative offset positioning
				sx0 = x;
				sy0 = y;
				x += this.stem.x;
				y += this.stem.y;
			}

			var state = "";
			if (sx0 >= x + w) {
				sx1 = x + w;
				state = "r";
			} // right of text
			else if (sx0 > x - w && sx0 < x + w) {
				sx1 = x;
				state = "c";
			} // center of text
			else if (sx0 <= x - w) {
				sx1 = x - w;
				state = "l";
			} // left of text

			if (sy0 >= y + h) {
				sy1 = y + h;
				state += "b";
			} // bottom of text
			else if (sy0 > y - h && sy0 < y + h) {
				sy1 = y;
				state += "m";
			} // middle of text
			else if (sy0 <= y - h) {
				sy1 = y - h;
				state += "t";
			} // top of text

			this.stemEntry = state;

			if (state != "cm") {
				// make sure stem does not originate underneath the annotation
				sx0 = Math.round(sx0);
				sx1 = Math.round(sx1);
				sy0 = Math.round(sy0);
				sy1 = Math.round(sy1);
			}
		}
		if (this.highlighted) {
			stx.canvasColor("stx_annotation_highlight_bg", context);
		} else {
			if (this.fillColor) {
				context.fillStyle = this.fillColor;
				context.globalAlpha = 0.4;
			} else if (this.stem) {
				// If there's a stem then use the container color otherwise the stem will show through
				context.fillStyle = stx.containerColor;
			}
		}
		context.strokeStyle = borderColor;
		if (context.setLineDash) {
			context.setLineDash(CIQ.borderPatternToArray(lineWidth, this.pattern));
			context.lineDashOffset = 0; //start point in array
		}

		if (borderColor) {
			context.beginPath();
			context.lineWidth = lineWidth;
			context.moveTo(x + w - r, y - h);
			if (this.stemEntry != "rt") {
				context.quadraticCurveTo(x + w, y - h, x + w, y - h + r); //top right
			} else {
				context.lineTo(sx0, sy0);
				context.lineTo(x + w, y - h + r);
			}
			context.lineTo(x + w, y - r / 2);
			if (this.stemEntry == "rm") context.lineTo(sx0, sy0);
			context.lineTo(x + w, y + r / 2);
			context.lineTo(x + w, y + h - r);
			if (this.stemEntry != "rb") {
				context.quadraticCurveTo(x + w, y + h, x + w - r, y + h); //bottom right
			} else {
				context.lineTo(sx0, sy0);
				context.lineTo(x + w - r, y + h);
			}
			context.lineTo(x + r / 2, y + h);
			if (this.stemEntry == "cb") context.lineTo(sx0, sy0);
			context.lineTo(x - r / 2, y + h);
			context.lineTo(x - w + r, y + h);
			if (this.stemEntry != "lb") {
				context.quadraticCurveTo(x - w, y + h, x - w, y + h - r); //bottom left
			} else {
				context.lineTo(sx0, sy0);
				context.lineTo(x - w, y + h - r);
			}
			context.lineTo(x - w, y + r / 2);
			if (this.stemEntry == "lm") context.lineTo(sx0, sy0);
			context.lineTo(x - w, y - r / 2);
			context.lineTo(x - w, y - h + r);
			if (this.stemEntry != "lt") {
				context.quadraticCurveTo(x - w, y - h, x - w + r, y - h); //top left
			} else {
				context.lineTo(sx0, sy0);
				context.lineTo(x - w + r, y - h);
			}
			context.lineTo(x - r / 2, y - h);
			if (this.stemEntry == "ct") context.lineTo(sx0, sy0);
			context.lineTo(x + r / 2, y - h);
			context.lineTo(x + w - r, y - h);
			context.fill();
			context.globalAlpha = 1;
			if (this.pattern != "none") context.stroke();
		}
		if (this.highlighted) {
			stx.canvasColor("stx_annotation_highlight", context);
		} else {
			context.fillStyle = color;
		}
		y += this.padding;
		if (!this.ta) {
			for (var i = 0; i < this.arr.length; i++) {
				context.fillText(this.arr[i], x - w + this.padding, y - h);
				y += this.fontSize;
			}
		}
		context.textBaseline = "alphabetic";

		if (this.highlighted && !this.noHandles) {
			var p0Fill = this.highlighted == "p0" ? true : false;
			this.littleCircle(context, sx0, sy0, p0Fill);
		}
		/*if(this.penDown){
			context.globalAlpha=0.2;
			context.fillText("[Your text here]", x-w+this.padding, y-h);
			context.globalAlpha=1;
		}*/
	};

	CIQ.Drawing.callout.prototype.click = function (context, tick, value) {
		//don't allow user to add callout on the axis.
		if (this.stx.overXAxis || this.stx.overYAxis) return;
		var panel = this.stx.panels[this.panelName];
		this.copyConfig();
		//this.getFontString();
		this.setPoint(0, tick, value, panel.chart);
		if (!this.penDown) {
			this.stem = {
				d: this.d0,
				v: this.v0
			};
			this.penDown = true;
			this.adjust();
			return false;
		}
		this.adjust();
		this.edit(context);
		this.penDown = false;
		return false;
	};

	CIQ.Drawing.callout.prototype.reposition = function (
		context,
		repositioner,
		tick,
		value
	) {
		if (!repositioner) return;
		var panel = this.stx.panels[this.panelName];
		var tickDiff = repositioner.tick - tick;
		var valueDiff = repositioner.value - value;
		if (repositioner.stem) {
			if (repositioner.action == "drag") {
				this.stem = {
					d: this.stx.dateFromTick(tick, panel.chart, true),
					v: value
				};
			} else if (repositioner.action == "move") {
				this.setPoint(
					0,
					repositioner.p0[0] - tickDiff,
					repositioner.p0[1] - valueDiff,
					panel.chart
				);
				this.stem = {
					d: this.stx.dateFromTick(
						this.stx.tickFromDate(repositioner.stem.d, panel.chart) - tickDiff
					),
					v: repositioner.stem.v - valueDiff
				};
			}
			this.adjust();
		} else {
			this.setPoint(
				0,
				repositioner.p0[0] - tickDiff,
				repositioner.p0[1] - valueDiff,
				panel.chart
			);
		}
		this.render(context);
	};

	CIQ.Drawing.callout.prototype.lineIntersection = function (
		tick,
		value,
		box,
		type
	) {
		var stem = this.stem,
			p0 = this.p0,
			stx = this.stx,
			panel = stx.panels[this.panelName];
		if (!p0 || !stem || !panel) return false;
		var stemTick = stem.t || stx.tickFromDate(stem.d, panel.chart);
		var pObj = { x0: p0[0], x1: stemTick, y0: p0[1], y1: stem.v };
		var pixelPoint = this.boxToPixels(
			stx,
			this.panelName,
			pObj,
			stx.getYAxisByField(panel, this.field)
		);
		var x0 = pixelPoint.x0;
		var y0 = pixelPoint.y0;
		var x1 = pixelPoint.x1;
		var y1 = pixelPoint.y1;
		if (typeof this.stemEntry == "string") {
			if (this.stemEntry.indexOf("l") > -1) x0 -= this.w / 2;
			else if (this.stemEntry.indexOf("r") > -1) x0 += this.w / 2;
			if (this.stemEntry.indexOf("t") > -1) y0 -= this.h / 2;
			else if (this.stemEntry.indexOf("b") > -1) y0 += this.h / 2;
		}
		return CIQ.boxIntersects(
			box.cx0,
			box.cy0,
			box.cx1,
			box.cy1,
			x0,
			y0,
			x1,
			y1,
			type
		);
	};

	CIQ.Drawing.callout.prototype.intersected = function (tick, value, box) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		if (!this.p0) return null; // in case invalid drawing (such as from panel that no longer exists)
		if (this.pointIntersection(this.stem.t, this.stem.v, box)) {
			this.highlighted = "p0";
			return {
				action: "drag",
				stem: true
			};
		}
		var x0 = stx.pixelFromTick(this.p0[0], panel.chart) - this.w / 2;
		var yAxis = stx.getYAxisByField(panel, this.field);
		var y0 =
			this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis) - this.h / 2;
		var x1 = x0 + this.w;
		var y1 = y0 + this.h;
		if (this.stem && this.stem.x) {
			x0 += this.stem.x;
			x1 += this.stem.x;
			y0 += this.stem.y;
			y1 += this.stem.y;
		}
		var x = stx.pixelFromTick(tick, panel.chart);
		var y = stx.pixelFromValueAdjusted(panel, tick, value);
		if (
			x + box.r >= x0 &&
			x - box.r <= x1 &&
			y + box.r >= y0 &&
			y - box.r <= y1
		) {
			this.highlighted = true;
			return {
				p0: CIQ.clone(this.p0),
				tick: tick,
				value: this.valueOnDrawingAxis(tick, value)
			};
		}
		var isIntersected = this.lineIntersection(tick, value, box, "segment");
		if (isIntersected) {
			this.highlighted = true;
			// This object will be used for repositioning
			return {
				action: "move",
				stem: CIQ.clone(this.stem),
				p0: CIQ.clone(this.p0),
				tick: tick, // save original tick
				value: this.valueOnDrawingAxis(tick, value) // save original value
			};
		}
		return null;
	};

	/**
	 * Fibonacci drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.BaseTwoPoint}
	 * @constructor
	 * @name  CIQ.Drawing.fibonacci
	 */
	CIQ.Drawing.fibonacci = function () {
		this.name = "fibonacci";
		this.configurator = "fibonacci";
	};

	CIQ.inheritsFrom(CIQ.Drawing.fibonacci, CIQ.Drawing.BaseTwoPoint);

	CIQ.Drawing.fibonacci.mapping = {
		trend: "t",
		color: "c",
		parameters: "p",
		pattern: "pt",
		opacity: "o",
		lineWidth: "lw",
		level: "l",
		extendLeft: "e",
		printLevels: "pl",
		printValues: "pv",
		timezone: "tz",
		display: "d"
	};

	/**
	 * Levels to enable by default.
	 * @memberOf CIQ.Drawing.fibonacci
	 * @default
	 * @since 5.2.0
	 */
	CIQ.Drawing.fibonacci.prototype.recommendedLevels = [
		-0.618, -0.382, 0, 0.382, 0.5, 0.618, 1, 1.382, 1.618
	];

	CIQ.Drawing.fibonacci.prototype.configs = [
		"color",
		"fillColor",
		"lineWidth",
		"pattern",
		"parameters"
	];

	/**
	 * Load default settings every time {@link CIQ.ChartEngine#changeVectorType} is called.<br>
	 * Will reset to  {@link CIQ.Drawing.fibonacci#recommendedLevels}
	 * unless <a href="CIQ.ChartEngine.html#.currentVectorParameters%5B%60fibonacci%60%5D">CIQ.ChartEngine.currentVectorParameters.fibonacci.fibsAlreadySet</a> is set to ''true''
	 * @param {CIQ.ChartEngine} stx Chart object
	 * @memberOf CIQ.Drawing.fibonacci
	 * @since 5.2.0
	 */
	CIQ.Drawing.fibonacci.prototype.initializeSettings = function (stx) {
		var recommendedLevels = this.recommendedLevels;
		if (
			recommendedLevels &&
			!stx.currentVectorParameters.fibonacci.fibsAlreadySet
		) {
			var fibs = stx.currentVectorParameters.fibonacci.fibs;
			for (var index = 0; index < fibs.length; index++) {
				delete fibs[index].display;
				for (var rIndex = 0; rIndex < recommendedLevels.length; rIndex++) {
					if (fibs[index].level == recommendedLevels[rIndex])
						fibs[index].display = true;
				}
			}
		}
	};

	/*
	 * Calculate the outer points of the fib series, which are used to detect highlighting
	 */
	CIQ.Drawing.fibonacci.prototype.setOuter = function () {
		var stx = this.stx,
			panel = stx.panels[this.panelName];
		if (!panel) return;
		var max = Math.max(this.p0[1], this.p1[1]);
		var min = Math.min(this.p0[1], this.p1[1]);
		var dist = max - min;

		this.outer = {
			p0: CIQ.clone(this.p0),
			p1: CIQ.clone(this.p1)
		};

		var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
		var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
		var yAxis = stx.getYAxisByField(panel, this.field);
		var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
		var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);

		var minFib = 0;
		var maxFib = 1;
		for (var i = 0; i < this.parameters.fibs.length; i++) {
			var fib = this.parameters.fibs[i];
			if ((fib.level >= minFib && fib.level <= maxFib) || !fib.display)
				continue;
			var y = this.pixelFromValue(
				panel,
				this.p0[0],
				y1 < y0 ? max - dist * fib.level : min + dist * fib.level,
				yAxis
			);
			var x = CIQ.xIntersection({ x0: x0, x1: x1, y0: y0, y1: y1 }, y);
			if (fib.level < minFib) {
				minFib = fib.level;
				this.outer.p1[1] = this.valueFromPixel(y, panel, yAxis);
				this.outer.p1[0] = stx.tickFromPixel(x, panel.chart);
			} else if (fib.level > maxFib) {
				maxFib = fib.level;
				this.outer.p0[1] = this.valueFromPixel(y, panel, yAxis);
				this.outer.p0[0] = stx.tickFromPixel(x, panel.chart);
			}
		}
	};

	CIQ.Drawing.fibonacci.prototype.click = function (context, tick, value) {
		var panel = this.stx.panels[this.panelName];
		if (!panel) return;
		this.copyConfig();
		if (!this.penDown) {
			this.setPoint(0, tick, value, panel.chart);
			this.penDown = true;
			return false;
		}
		if (this.accidentalClick(tick, value)) return true;

		this.setPoint(1, tick, value, panel.chart);
		this.setOuter();
		this.parameters = CIQ.clone(this.parameters); // separate from the global object
		this.penDown = false;

		return true; // kernel will call render after this
	};

	CIQ.Drawing.fibonacci.prototype.render = function (context) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		var yAxis = stx.getYAxisByField(panel, this.field);
		if (!panel || (this.field && !yAxis)) return;
		yAxis = yAxis || panel.yAxis;
		if (!this.p1) return;
		var max = Math.max(this.p0[1], this.p1[1]);
		var min = Math.min(this.p0[1], this.p1[1]);
		var dist = yAxis.flipped ? min - max : max - min;
		var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
		var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
		var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
		var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);
		var top = Math.min(y1, y0);
		var bottom = Math.max(y1, y0);
		var height = bottom - top;
		var isUpTrend = (y1 - y0) / (x1 - x0) > 0;

		//old drawings missing parameters.trend
		var trend = {
			color: "auto",
			parameters: { pattern: "solid", opacity: 0.25, lineWidth: 1 }
		};
		if (!this.parameters.trend) this.parameters.trend = trend;
		var trendLineColor = this.getLineColor(this.parameters.trend.color);
		context.textBaseline = "middle";
		stx.canvasFont("stx_yaxis", context); // match font from y-axis so it looks cohesive
		var w = context.measureText("161.8%").width + 10; // give it extra space so it does not overlap with the price labels.
		var minX = Number.MAX_VALUE,
			minY = Number.MAX_VALUE,
			maxX = Number.MAX_VALUE * -1,
			maxY = Number.MAX_VALUE * -1;
		var txtColor = this.getLineColor();
		this.rays = [];
		for (var i = 0; i < this.parameters.fibs.length; i++) {
			context.textAlign = "left";
			context.fillStyle = txtColor;
			var fib = this.parameters.fibs[i];
			if (!fib.display) continue;
			var y = this.pixelFromValue(
				panel,
				this.p0[0],
				y1 < y0 ? max - dist * fib.level : min + dist * fib.level,
				yAxis
			);
			var x = CIQ.xIntersection({ x0: x0, x1: x1, y0: y0, y1: y1 }, y);
			var nearX = this.parameters.extendLeft ? 0 : x;
			var farX = panel.left + panel.width;
			if (this.parameters.printLevels) {
				var txt = Math.round(fib.level * 1000) / 10 + "%";
				farX -= w;
				if (this.parameters.printValues) {
					context.fillStyle = txtColor; // the price labels screw up the color and font size...so reset before rendering the text
					stx.canvasFont("stx_yaxis", context); // use the same context as the y-axis so they match.
				}
				if (farX < nearX) context.textAlign = "right";
				context.fillText(txt, farX, y);
				if (farX < nearX) farX += 5;
				else farX -= 5;
			}
			if (this.parameters.printValues) {
				if (x < panel.width) {
					// just use the actual price that segment will render on regardless of 'isUpTrend' since the values must match the prices on the y-axis, and can not be reversed.
					var price = this.valueFromPixel(y, panel, yAxis);
					if (yAxis.priceFormatter) {
						price = yAxis.priceFormatter(stx, panel, price);
					} else {
						price = stx.formatYAxisPrice(price, panel, null, yAxis);
					}
					if (context == stx.chart.context) stx.endClip();
					stx.createYAxisLabel(
						panel,
						price,
						y,
						this.getLineColor(null, true),
						null,
						context,
						yAxis
					);
					if (context == stx.chart.context) stx.startClip(panel.name);
				}
			}
			var fibColor = fib.color;
			if (fibColor == "auto" || CIQ.isTransparent(fibColor))
				fibColor = this.getLineColor();
			var fillColor = fib.color;
			if (fillColor == "auto" || CIQ.isTransparent(fillColor))
				fillColor = this.fillColor;
			if (fillColor == "auto" || CIQ.isTransparent(fillColor))
				fillColor = stx.defaultColor;
			context.fillStyle = fillColor;
			var fibParameters = CIQ.clone(fib.parameters);
			if (this.highlighted) fibParameters.opacity = 1;
			stx.plotLine(
				nearX,
				farX,
				y,
				y,
				fibColor,
				"segment",
				context,
				panel,
				fibParameters
			);
			this.rays.push([
				[nearX, y],
				[farX, y]
			]);
			context.globalAlpha = 0.05;
			context.beginPath();
			context.moveTo(farX, y);
			context.lineTo(nearX, y);
			if (nearX) context.lineTo(x1, y1);
			else context.lineTo(nearX, y1);
			context.lineTo(farX, y1);
			if (typeof fillColor != "undefined") context.fill(); // so legacy fibs continue to have no fill color.
			context.globalAlpha = 1;
			if (y < minY) {
				minX = x;
				minY = y;
			}
			if (y > maxY) {
				maxX = x;
				maxY = y;
			}
		}
		// ensure we at least draw trend line from zero to 100
		for (var level = 0; level <= 1; level++) {
			var yy = isUpTrend ? bottom - height * level : top + height * level;
			yy = Math.round(yy);
			if (yy < minY) {
				minX = CIQ.xIntersection({ x0: x0, x1: x1, y0: y0, y1: y1 }, yy);
				minY = yy;
			}
			if (yy > maxY) {
				maxX = CIQ.xIntersection({ x0: x0, x1: x1, y0: y0, y1: y1 }, yy);
				maxY = yy;
			}
		}
		var trendParameters = CIQ.clone(this.parameters.trend.parameters);
		if (this.highlighted) trendParameters.opacity = 1;
		stx.plotLine(
			minX,
			maxX,
			minY,
			maxY,
			trendLineColor,
			"segment",
			context,
			panel,
			trendParameters
		);
		if (this.highlighted) {
			var p0Fill = this.highlighted == "p0" ? true : false;
			var p1Fill = this.highlighted == "p1" ? true : false;
			this.littleCircle(context, x0, y0, p0Fill);
			this.littleCircle(context, x1, y1, p1Fill);
		}
	};

	CIQ.Drawing.fibonacci.prototype.reposition = function (
		context,
		repositioner,
		tick,
		value
	) {
		if (!repositioner) return;
		CIQ.Drawing.BaseTwoPoint.prototype.reposition.apply(this, arguments);
		this.adjust();
	};

	CIQ.Drawing.fibonacci.prototype.intersected = function (tick, value, box) {
		var p0 = this.p0,
			p1 = this.p1;
		if (!p0 || !p1) return null; // in case invalid drawing (such as from panel that no longer exists)
		var pointsToCheck = { 0: p0, 1: p1 };
		for (var pt in pointsToCheck) {
			if (
				this.pointIntersection(pointsToCheck[pt][0], pointsToCheck[pt][1], box)
			) {
				this.highlighted = "p" + pt;
				return {
					action: "drag",
					point: "p" + pt
				};
			}
		}
		var outer = this.outer,
			rays = this.rays;
		var isIntersected =
			outer &&
			this.lineIntersection(tick, value, box, "segment", outer.p0, outer.p1);
		if (!isIntersected) {
			for (var i = 0; i < rays.length; i++) {
				if (
					this.lineIntersection(
						tick,
						value,
						box,
						"ray",
						rays[i][0],
						rays[i][1],
						true
					)
				) {
					isIntersected = true;
					break;
				}
			}
		}
		if (isIntersected) {
			this.highlighted = true;
			// This object will be used for repositioning
			return {
				action: "move",
				p0: CIQ.clone(p0),
				p1: CIQ.clone(p1),
				tick: tick, // save original tick
				value: this.valueOnDrawingAxis(tick, value) // save original value
			};
		}
		return null;
	};

	/**
	 * Reconstruct a fibonacci
	 * @param  {CIQ.ChartEngine} stx The chart object
	 * @param  {object} [obj] A drawing descriptor
	 * @param {string} [obj.col] The border color
	 * @param {string} [obj.fc] The fill color
	 * @param {string} [obj.pnl] The panel name
	 * @param {number} [obj.v0] Value (price) for the first point
	 * @param {number} [obj.v1] Value (price) for the second point
	 * @param {number} [obj.v2] Value (price) for the third point (if used)
	 * @param {number} [obj.d0] Date (string form) for the first point
	 * @param {number} [obj.d1] Date (string form) for the second point
	 * @param {number} [obj.d2] Date (string form) for the third point (if used)
	 * @param {number} [obj.tzo0] Offset of UTC from d0 in minutes
	 * @param {number} [obj.tzo1] Offset of UTC from d1 in minutes
	 * @param {number} [obj.tzo2] Offset of UTC from d2 in minutes (if used)
	 * @param {string} [obj.fld] Field which drawing is associated with
	 * @param {object} [obj.parameters] Configuration parameters
	 * @param {object} [obj.parameters.trend] Describes the trend line
	 * @param {string} [obj.parameters.trend.color] The color for the trend line (Defaults to "auto")
	 * @param {object} [obj.parameters.trend.parameters] Line description object (pattern, opacity, lineWidth)
	 * @param {array} [obj.parameters.fibs] A fib description object for each fib (level, color, parameters, display)
	 * @param {boolean} [obj.parameters.extendLeft] True to extend the fib lines to the left of the screen. Defaults to false.
	 * @param {boolean} [obj.parameters.printLevels] True (default) to print text for each percentage level
	 * @param {boolean} [obj.parameters.printValues] True to print text for each price level
	 * @memberOf CIQ.Drawing.fibonacci
	 *
	 * @since 8.4.0 Added `fld` property to `obj` parameter.
	 */
	CIQ.Drawing.fibonacci.prototype.reconstruct = function (stx, obj) {
		obj = CIQ.replaceFields(
			obj,
			CIQ.reverseObject(CIQ.Drawing.fibonacci.mapping)
		);
		this.stx = stx;
		this.parameters = obj.parameters;
		if (!this.parameters)
			this.parameters = CIQ.clone(this.stx.currentVectorParameters.fibonacci); // For legacy fibs that didn't include parameters
		this.color = obj.col;
		this.fillColor = obj.fc;
		this.panelName = obj.pnl;
		this.d0 = obj.d0;
		this.d1 = obj.d1;
		this.d2 = obj.d2;
		this.tzo0 = obj.tzo0;
		this.tzo1 = obj.tzo1;
		this.tzo2 = obj.tzo2;
		this.v0 = obj.v0;
		this.v1 = obj.v1;
		this.v2 = obj.v2;
		this.field = obj.fld;
		this.adjust();
	};

	CIQ.Drawing.fibonacci.prototype.adjust = function () {
		var panel = this.stx.panels[this.panelName];
		if (!panel) return;
		this.setPoint(0, this.d0, this.v0, panel.chart);
		this.setPoint(1, this.d1, this.v1, panel.chart);
		this.setOuter();
	};

	CIQ.Drawing.fibonacci.prototype.serialize = function () {
		var obj = {
			name: this.name,
			parameters: this.parameters,
			pnl: this.panelName,
			col: this.color,
			fc: this.fillColor,
			d0: this.d0,
			d1: this.d1,
			d2: this.d2,
			tzo0: this.tzo0,
			tzo1: this.tzo1,
			tzo2: this.tzo2,
			v0: this.v0,
			v1: this.v1,
			v2: this.v2,
			fld: this.field
		};
		return CIQ.replaceFields(obj, CIQ.Drawing.fibonacci.mapping);
	};

	/**
	 * Retracement drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.fibonacci}
	 * @constructor
	 * @name  CIQ.Drawing.retracement
	 */
	CIQ.Drawing.retracement = function () {
		this.name = "retracement";
	};

	CIQ.inheritsFrom(CIQ.Drawing.retracement, CIQ.Drawing.fibonacci);

	/**
	 * Fibonacci projection drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.fibonacci}
	 * @constructor
	 * @name  CIQ.Drawing.fibprojection
	 * @version ChartIQ Advanced Package
	 * @since 5.2.0
	 */
	CIQ.Drawing.fibprojection = function () {
		this.name = "fibprojection";
		this.dragToDraw = false;
		this.p2 = null;
	};

	CIQ.inheritsFrom(CIQ.Drawing.fibprojection, CIQ.Drawing.fibonacci);

	CIQ.Drawing.fibprojection.prototype.recommendedLevels = [
		0, 0.618, 1, 1.272, 1.618, 2.618, 4.236
	];

	CIQ.Drawing.fibprojection.prototype.click = function (context, tick, value) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		if (!panel) return;
		this.copyConfig();
		if (!this.penDown) {
			this.setPoint(0, tick, value, panel.chart);
			this.penDown = true;
			return false;
		}
		if (this.accidentalClick(tick, value)) {
			stx.undo(); //abort
			return true;
		}

		if (this.p2 !== null) {
			this.setPoint(2, this.p2[0], this.p2[1], panel.chart);
			this.parameters = CIQ.clone(this.parameters); // separate from the global object
			return true;
		}
		this.setPoint(1, tick, value, panel.chart);

		this.p2 = [this.p1[0], this.p1[1]];
		return false; // kernel will call render after this
	};

	CIQ.Drawing.fibprojection.prototype.render = function (context) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		var yAxis = stx.getYAxisByField(panel, this.field);
		if (!panel || (this.field && !yAxis)) return;
		yAxis = yAxis || panel.yAxis;
		if (!this.p1) return;
		var dist = this.p1[1] - this.p0[1];
		var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
		var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
		var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
		var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);
		var x2 = null,
			y2 = null;
		if (this.p2) {
			x2 = stx.pixelFromTick(this.p2[0], panel.chart);
			y2 = this.pixelFromValue(panel, this.p2[0], this.p2[1], yAxis);
		}
		//old drawings missing parameters.trend
		var trend = {
			color: "auto",
			parameters: { pattern: "solid", opacity: 0.25, lineWidth: 1 }
		};
		if (!this.parameters.trend) this.parameters.trend = trend;
		var trendLineColor = this.getLineColor(this.parameters.trend.color);
		context.textBaseline = "middle";
		stx.canvasFont("stx_yaxis", context); // match font from y-axis so it looks cohesive
		var w = context.measureText("161.8%").width + 10; // give it extra space so it does not overlap with the price labels.
		var txtColor = this.getLineColor();
		if (this.p2) {
			this.rays = [];
			for (var i = 0; i < this.parameters.fibs.length; i++) {
				context.textAlign = "left";
				context.fillStyle = txtColor;
				var fib = this.parameters.fibs[i];
				if (!fib.display) continue;
				var y = this.pixelFromValue(
					panel,
					this.p2[0],
					this.p2[1] + dist * fib.level,
					yAxis
				);
				var x = CIQ.xIntersection({ x0: x0, x1: x1, y0: y0, y1: y1 }, y);
				var nearX = this.parameters.extendLeft ? 0 : x0;
				var farX = panel.left + panel.width;
				if (this.parameters.printLevels) {
					var txt = Math.round(fib.level * 1000) / 10 + "%";
					farX -= w;
					if (this.parameters.printValues) {
						context.fillStyle = txtColor; // the price labels screw up the color and font size...so reset before rendering the text
						stx.canvasFont("stx_yaxis", context); // use the same context as the y-axis so they match.
					}
					if (farX < nearX) context.textAlign = "right";
					context.fillText(txt, farX, y);
					if (farX < nearX) farX += 5;
					else farX -= 5;
				}
				if (this.parameters.printValues) {
					if (x < panel.width) {
						// just use the actual price that segment will render on regardless of 'isUpTrend' since the values must match the prices on the y-axis, and can not be reversed.
						var price = this.valueFromPixel(y, panel, yAxis);
						if (yAxis.priceFormatter) {
							price = yAxis.priceFormatter(stx, panel, price);
						} else {
							price = stx.formatYAxisPrice(price, panel, null, yAxis);
						}
						if (context == stx.chart.context) stx.endClip();
						stx.createYAxisLabel(
							panel,
							price,
							y,
							this.getLineColor(null, true),
							null,
							context,
							yAxis
						);
						if (context == stx.chart.context) stx.startClip(panel.name);
					}
				}
				var fibColor = fib.color;
				if (fibColor == "auto" || CIQ.isTransparent(fibColor))
					fibColor = this.getLineColor();
				var fillColor = fib.color;
				if (fillColor == "auto" || CIQ.isTransparent(fillColor))
					fillColor = this.fillColor;
				if (fillColor == "auto" || CIQ.isTransparent(fillColor))
					fillColor = stx.defaultColor;
				context.fillStyle = fillColor;
				var fibParameters = CIQ.clone(fib.parameters);
				if (this.highlighted) fibParameters.opacity = 1;
				stx.plotLine(
					nearX,
					farX,
					y,
					y,
					fibColor,
					"segment",
					context,
					panel,
					fibParameters
				);
				this.rays.push([
					[nearX, y],
					[farX, y]
				]);
				context.globalAlpha = 0.05;
				context.beginPath();
				context.moveTo(farX, y);
				context.lineTo(nearX, y);
				if (nearX) context.lineTo(x0, y2);
				else context.lineTo(nearX, y2);
				context.lineTo(farX, y2);
				if (typeof fillColor != "undefined") context.fill(); // so legacy fibs continue to have no fill color.
				context.globalAlpha = 1;
			}
		}
		var trendParameters = CIQ.clone(this.parameters.trend.parameters);
		if (this.highlighted) trendParameters.opacity = 1;
		stx.plotLine(
			x0,
			x1,
			y0,
			y1,
			trendLineColor,
			"segment",
			context,
			panel,
			trendParameters
		);
		if (this.p2)
			stx.plotLine(
				x1,
				x2,
				y1,
				y2,
				trendLineColor,
				"segment",
				context,
				panel,
				trendParameters
			);
		if (this.highlighted) {
			var p0Fill = this.highlighted == "p0" ? true : false;
			var p1Fill = this.highlighted == "p1" ? true : false;
			var p2Fill = this.highlighted == "p2" ? true : false;
			this.littleCircle(context, x0, y0, p0Fill);
			this.littleCircle(context, x1, y1, p1Fill);
			this.littleCircle(context, x2, y2, p2Fill);
		}
	};

	CIQ.Drawing.fibprojection.prototype.move = function (context, tick, value) {
		if (!this.penDown) return;
		this.copyConfig();
		if (this.p2 === null) this.p1 = [tick, value];
		else this.p2 = [tick, value];
		this.render(context);
	};

	CIQ.Drawing.fibprojection.prototype.reposition = function (
		context,
		repositioner,
		tick,
		value
	) {
		if (!repositioner) return;
		var panel = this.stx.panels[this.panelName];
		var tickDiff = repositioner.tick - tick;
		var valueDiff = repositioner.value - value;
		if (repositioner.action == "move") {
			this.setPoint(
				0,
				repositioner.p0[0] - tickDiff,
				repositioner.p0[1] - valueDiff,
				panel.chart
			);
			this.setPoint(
				1,
				repositioner.p1[0] - tickDiff,
				repositioner.p1[1] - valueDiff,
				panel.chart
			);
			this.setPoint(
				2,
				repositioner.p2[0] - tickDiff,
				repositioner.p2[1] - valueDiff,
				panel.chart
			);
			this.render(context);
		} else if (repositioner.action == "drag") {
			this[repositioner.point] = [tick, value];
			this.setPoint(0, this.p0[0], this.p0[1], panel.chart);
			this.setPoint(1, this.p1[0], this.p1[1], panel.chart);
			this.setPoint(2, this.p2[0], this.p2[1], panel.chart);
			this.render(context);
		}
	};

	CIQ.Drawing.fibprojection.prototype.intersected = function (
		tick,
		value,
		box
	) {
		var p0 = this.p0,
			p1 = this.p1,
			p2 = this.p2;
		if (!p0 || !p1 || !p2) return null; // in case invalid drawing (such as from panel that no longer exists)
		var pointsToCheck = { 0: p0, 1: p1, 2: p2 };
		for (var pt in pointsToCheck) {
			if (
				this.pointIntersection(pointsToCheck[pt][0], pointsToCheck[pt][1], box)
			) {
				this.highlighted = "p" + pt;
				return {
					action: "drag",
					point: "p" + pt
				};
			}
		}
		var rays = this.rays;
		var isIntersected =
			this.lineIntersection(tick, value, box, "segment", p0, p1) ||
			this.lineIntersection(tick, value, box, "segment", p1, p2);
		if (!isIntersected) {
			for (var i = 0; i < rays.length; i++) {
				if (
					this.lineIntersection(
						tick,
						value,
						box,
						"ray",
						rays[i][0],
						rays[i][1],
						true
					)
				) {
					isIntersected = true;
					break;
				}
			}
		}
		if (isIntersected) {
			this.highlighted = true;
			// This object will be used for repositioning
			return {
				action: "move",
				p0: CIQ.clone(p0),
				p1: CIQ.clone(p1),
				p2: CIQ.clone(p2),
				tick: tick, // save original tick
				value: this.valueOnDrawingAxis(tick, value) // save original value
			};
		}
		return null;
	};

	CIQ.Drawing.fibprojection.prototype.adjust = function () {
		var panel = this.stx.panels[this.panelName];
		if (!panel) return;
		this.setPoint(0, this.d0, this.v0, panel.chart);
		this.setPoint(1, this.d1, this.v1, panel.chart);
		this.setPoint(2, this.d2, this.v2, panel.chart);
	};

	/**
	 * Fibonacci Arc drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.fibonacci}
	 * @constructor
	 * @name  CIQ.Drawing.fibarc
	 * @since 2015-11-1
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.fibarc = function () {
		this.name = "fibarc";
		//this.dragToDraw=true;
	};

	CIQ.inheritsFrom(CIQ.Drawing.fibarc, CIQ.Drawing.fibonacci);

	CIQ.Drawing.fibarc.prototype.recommendedLevels = [0.382, 0.5, 0.618, 1];

	CIQ.Drawing.fibarc.prototype.setOuter = function () {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		if (!panel) return;

		this.outer = {
			p0: CIQ.clone(this.p0),
			p1: CIQ.clone(this.p1)
		};
		var yAxis = stx.getYAxisByField(panel, this.field);
		var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
		var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);
		var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
		var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
		var y = 2 * y0 - y1;
		var x = CIQ.xIntersection({ x0: x0, x1: x1, y0: y0, y1: y1 }, y);
		this.outer.p0[1] = this.valueFromPixel(y, panel, yAxis);
		this.outer.p0[0] = stx.tickFromPixel(x, panel.chart);
	};

	CIQ.Drawing.fibarc.prototype.intersected = function (tick, value, box) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		if (!panel) return;
		var p0 = this.p0,
			p1 = this.p1,
			outer = this.outer;
		if (!p0 || !p1) return null; // in case invalid drawing (such as from panel that no longer exists)
		var pointsToCheck = { 0: p0, 1: p1 };
		for (var pt in pointsToCheck) {
			if (
				this.pointIntersection(pointsToCheck[pt][0], pointsToCheck[pt][1], box)
			) {
				this.highlighted = "p" + pt;
				return {
					action: "drag",
					point: "p" + pt
				};
			}
		}
		var valueOnDrawingAxis = this.valueOnDrawingAxis(tick, value);
		if (
			this.lineIntersection(
				tick,
				valueOnDrawingAxis,
				box,
				"segment",
				outer.p0,
				outer.p1
			)
		) {
			this.highlighted = true;
			// This object will be used for repositioning
			return {
				action: "move",
				p0: CIQ.clone(p0),
				p1: CIQ.clone(p1),
				tick: tick, // save original tick
				value: valueOnDrawingAxis // save original value
			};
		}
		// Just test the box circumscribing the arcs
		var yAxis = stx.getYAxisByField(panel, this.field);
		var points = { x0: p0[0], x1: p1[0], y0: p0[1], y1: p1[1] };
		var pixelArea = this.boxToPixels(stx, this.panelName, points, yAxis);
		var extend = {
			x: Math.abs(Math.sqrt(2) * (pixelArea.x1 - pixelArea.x0)),
			y: Math.abs(Math.sqrt(2) * (pixelArea.y1 - pixelArea.y0))
		};
		var x = stx.pixelFromTick(tick, panel.chart);
		var y = stx.pixelFromValueAdjusted(panel, tick, value);

		if (
			x + box.r < pixelArea.x1 - extend.x ||
			x - box.r > pixelArea.x1 + extend.x
		)
			return null;
		if (
			y + box.r < pixelArea.y1 - extend.y ||
			y - box.r > pixelArea.y1 + extend.y
		)
			return null;
		if (pixelArea.y0 < pixelArea.y1 && y - box.r > pixelArea.y1) return null;
		if (pixelArea.y0 > pixelArea.y1 && y + box.r < pixelArea.y1) return null;
		this.highlighted = true;
		return {
			action: "move",
			p0: CIQ.clone(this.p0),
			p1: CIQ.clone(this.p1),
			tick: tick,
			value: valueOnDrawingAxis
		};
	};

	CIQ.Drawing.fibarc.prototype.render = function (context) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		var yAxis = stx.getYAxisByField(panel, this.field);
		if (!panel || (this.field && !yAxis)) return;
		yAxis = yAxis || panel.yAxis;
		if (!this.p1) return;
		var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
		var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
		var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
		var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);
		var isUpTrend = y1 < y0;
		var factor = Math.abs((y1 - y0) / (x1 - x0));

		var trendLineColor = this.getLineColor(this.parameters.trend.color);
		context.textBaseline = "middle";
		stx.canvasFont("stx_yaxis", context); // match font from y-axis so it looks cohesive
		var txtColor = this.getLineColor();
		for (var i = 0; i < this.parameters.fibs.length; i++) {
			context.fillStyle = txtColor;
			var fib = this.parameters.fibs[i];
			if (fib.level < 0 || !fib.display) continue;
			var radius = Math.abs(this.p1[1] - this.p0[1]) * Math.sqrt(2) * fib.level;
			var value =
				this.p1[1] + radius * (isUpTrend ? -1 : 1) * (yAxis.flipped ? -1 : 1);
			var y = this.pixelFromValue(panel, this.p0[0], value, yAxis);
			var x = CIQ.xIntersection({ x0: x0, x1: x1, y0: y0, y1: y1 }, y);
			if (this.parameters.printLevels) {
				context.textAlign = "center";
				var txt = Math.round(fib.level * 1000) / 10 + "%";
				if (this.parameters.printValues) {
					context.fillStyle = txtColor; // the price labels screw up the color and font size...so  reset before rendering the text
					stx.canvasFont("stx_yaxis", context); // use the same context as the y-axis so they match.
				}
				context.fillText(txt, x1, Math.round(y - 5));
			}
			context.textAlign = "left";
			if (this.parameters.printValues) {
				if (x < panel.width) {
					// just use the actual price that segment will render on regardless of 'isUpTrend' since the values must match the prices on the y-axis, and can not be reversed.
					var price = value;
					if (yAxis.priceFormatter) {
						price = yAxis.priceFormatter(stx, panel, price);
					} else {
						price = stx.formatYAxisPrice(price, panel, null, yAxis);
					}
					if (context == stx.chart.context) stx.endClip();
					stx.createYAxisLabel(
						panel,
						price,
						y,
						this.getLineColor(null, true),
						null,
						context,
						yAxis
					);
					if (context == stx.chart.context) stx.startClip(panel.name);
				}
			}
			var fibColor = fib.color;
			if (fibColor == "auto" || CIQ.isTransparent(fibColor))
				fibColor = this.getLineColor();
			context.strokeStyle = fibColor;
			var fillColor = fib.color;
			if (fillColor == "auto" || CIQ.isTransparent(fillColor))
				fillColor = this.fillColor;
			if (fillColor == "auto" || CIQ.isTransparent(fillColor))
				fillColor = stx.defaultColor;
			context.fillStyle = fillColor;
			context.globalAlpha = this.highlighted ? 1 : fib.parameters.opacity;
			context.lineWidth = fib.parameters.lineWidth;
			if (context.setLineDash) {
				context.setLineDash(
					CIQ.borderPatternToArray(context.lineWidth, fib.parameters.pattern)
				);
				context.lineDashOffset = 0; //start point in array
			}
			context.save();
			context.beginPath();
			context.scale(1 / factor, 1);
			context.arc(x1 * factor, y1, Math.abs(y - y1), 0, Math.PI, !isUpTrend);
			if (this.pattern != "none") context.stroke();
			context.globalAlpha = 0.05;
			context.fill();
			context.restore();
			if (context.setLineDash) context.setLineDash([]);
			context.globalAlpha = 1;
		}
		context.textAlign = "left";
		// ensure we at least draw trend line from zero to 100
		var trendParameters = CIQ.clone(this.parameters.trend.parameters);
		if (this.highlighted) trendParameters.opacity = 1;
		stx.plotLine(
			x1,
			2 * x0 - x1,
			y1,
			2 * y0 - y1,
			trendLineColor,
			"segment",
			context,
			panel,
			trendParameters
		);
		if (this.highlighted) {
			var p0Fill = this.highlighted == "p0" ? true : false;
			var p1Fill = this.highlighted == "p1" ? true : false;
			this.littleCircle(context, x0, y0, p0Fill);
			this.littleCircle(context, x1, y1, p1Fill);
		}
	};

	/**
	 * Fibonacci Fan drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.fibonacci}
	 * @constructor
	 * @name  CIQ.Drawing.fibfan
	 * @since 2015-11-1
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.fibfan = function () {
		this.name = "fibfan";
		//this.dragToDraw=true;
	};

	CIQ.inheritsFrom(CIQ.Drawing.fibfan, CIQ.Drawing.fibonacci);

	CIQ.Drawing.fibfan.prototype.recommendedLevels = [0, 0.382, 0.5, 0.618, 1];

	CIQ.Drawing.fibfan.prototype.setOuter = function () {};

	CIQ.Drawing.fibfan.prototype.render = function (context) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		var yAxis = stx.getYAxisByField(panel, this.field);
		if (!panel || (this.field && !yAxis)) return;
		yAxis = yAxis || panel.yAxis;
		if (!this.p1) return;
		var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
		var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
		var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
		var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);
		var top = Math.min(y1, y0);
		var bottom = Math.max(y1, y0);
		var height = bottom - top;
		var isUpTrend = (y1 - y0) / (x1 - x0) > 0;

		var trendLineColor = this.getLineColor(this.parameters.trend.color);

		context.textBaseline = "middle";
		stx.canvasFont("stx_yaxis", context); // match font from y-axis so it looks cohesive
		var w = context.measureText("161.8%").width + 10; // give it extra space so it does not overlap with the price labels.
		var /*minX=Number.MAX_VALUE,*/ minY = Number.MAX_VALUE,
			/*maxX=Number.MAX_VALUE*-1,*/ maxY = Number.MAX_VALUE * -1;
		var txtColor = this.getLineColor();
		this.rays = [];
		for (var i = 0; i < this.parameters.fibs.length; i++) {
			context.fillStyle = txtColor;
			var fib = this.parameters.fibs[i];
			if (!fib.display) continue;
			//var y=(y0-y1)*fib.level+y1;
			var y = this.pixelFromValue(
				panel,
				this.p0[0],
				(this.p0[1] - this.p1[1]) * fib.level + this.p1[1],
				yAxis
			);
			var x = CIQ.xIntersection({ x0: x1, x1: x1, y0: y0, y1: y1 }, y);
			var farX = panel.left;
			if (x1 > x0) farX += panel.width;
			var farY = ((farX - x0) * (y - y0)) / (x - x0) + y0;
			if (x0 > farX - (this.parameters.printLevels ? w + 5 : 0) && x1 > x0)
				continue;
			else if (x0 < farX + (this.parameters.printLevels ? w + 5 : 0) && x1 < x0)
				continue;
			if (this.parameters.printLevels) {
				var txt = Math.round(fib.level * 1000) / 10 + "%";
				if (x1 > x0) {
					farX -= w;
					context.textAlign = "left";
				} else {
					farX += w;
					context.textAlign = "right";
				}
				if (this.parameters.printValues) {
					context.fillStyle = txtColor; // the price labels screw up the color and font size...so reset before rendering the text
					stx.canvasFont("stx_yaxis", context); // use the same context as the y-axis so they match.
				}
				farY = ((farX - x0) * (y - y0)) / (x - x0) + y0;
				context.fillText(txt, farX, farY);
				if (x1 > x0) farX -= 5;
				else farX += 5;
			}
			context.textAlign = "left";
			if (this.parameters.printValues) {
				if (x < panel.width) {
					// just use the actual price that segment will render on regardless of 'isUpTrend' since the values must match the prices on the y-axis, and can not be reversed.
					var price = this.valueFromPixel(y, panel, yAxis);
					if (yAxis.priceFormatter) {
						price = yAxis.priceFormatter(stx, panel, price);
					} else {
						price = stx.formatYAxisPrice(price, panel, null, yAxis);
					}
					if (context == stx.chart.context) stx.endClip();
					stx.createYAxisLabel(
						panel,
						price,
						y,
						this.getLineColor(null, true),
						null,
						context,
						yAxis
					);
					if (context == stx.chart.context) stx.startClip(panel.name);
				}
			}
			var fibColor = fib.color;
			if (fibColor == "auto" || CIQ.isTransparent(fibColor))
				fibColor = this.getLineColor();
			var fillColor = fib.color;
			if (fillColor == "auto" || CIQ.isTransparent(fillColor))
				fillColor = this.fillColor;
			if (fillColor == "auto" || CIQ.isTransparent(fillColor))
				fillColor = stx.defaultColor;
			context.fillStyle = fillColor;
			if (this.parameters.printLevels)
				farY = ((farX - x0) * (y - y0)) / (x - x0) + y0;
			var fibParameters = CIQ.clone(fib.parameters);
			if (this.highlighted) fibParameters.opacity = 1;
			stx.plotLine(
				x0,
				farX,
				y0,
				farY,
				fibColor,
				"segment",
				context,
				panel,
				fibParameters
			);
			this.rays.push([
				[x0, y0],
				[farX, farY]
			]);
			context.globalAlpha = 0.05;
			context.beginPath();
			context.moveTo(farX, farY);
			context.lineTo(x0, y0);
			context.lineTo(farX, y0);
			context.fill();
			context.globalAlpha = 1;
			if (y < minY) {
				//minX=x;
				minY = y;
			}
			if (y > maxY) {
				//maxX=x;
				maxY = y;
			}
		}
		// ensure we at least draw trend line from zero to 100
		for (var level = 0; level <= 1; level++) {
			var yy = isUpTrend ? bottom - height * level : top + height * level;
			yy = Math.round(yy);
			if (yy < minY) {
				//minX=CIQ.xIntersection({x0:x1,x1:x1,y0:y0,y1:y1}, yy);
				minY = yy;
			}
			if (yy > maxY) {
				//maxX=CIQ.xIntersection({x0:x1,x1:x1,y0:y0,y1:y1}, yy);
				maxY = yy;
			}
		}
		//stx.plotLine(minX, maxX, minY, maxY, trendLineColor, "segment", context, panel, this.parameters.trend.parameters);
		if (this.highlighted) {
			var p0Fill = this.highlighted == "p0" ? true : false;
			var p1Fill = this.highlighted == "p1" ? true : false;
			this.littleCircle(context, x0, y0, p0Fill);
			this.littleCircle(context, x1, y1, p1Fill);
		}
	};

	/**
	 * Fibonacci Time Zone drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.fibonacci}
	 * @constructor
	 * @name  CIQ.Drawing.fibtimezone
	 * @since 2015-11-1
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.fibtimezone = function () {
		this.name = "fibtimezone";
		//this.dragToDraw=true;
	};

	CIQ.inheritsFrom(CIQ.Drawing.fibtimezone, CIQ.Drawing.fibonacci);

	CIQ.Drawing.fibtimezone.prototype.render = function (context) {
		const { stx } = this;
		const panel = stx.panels[this.panelName];
		let yAxis = stx.getYAxisByField(panel, this.field);
		if (!panel || (this.field && !yAxis)) return;
		yAxis = yAxis || panel.yAxis;
		if (!this.p1) return;

		const { chart, left, width } = panel;
		const { p0, p1, parameters, highlighted } = this;

		const x0 = stx.pixelFromTick(p0[0], chart);
		const x1 = stx.pixelFromTick(p1[0], chart);
		const y0 = this.pixelFromValue(panel, p0[0], p0[1], yAxis);
		const y1 = this.pixelFromValue(panel, p1[0], p1[1], yAxis);
		const fibs = [1, 0];

		const trendLineColor = this.getLineColor(parameters.trend.color);

		context.textBaseline = "middle";
		stx.canvasFont("stx_yaxis", context); // match font from y-axis so it looks cohesive
		const h = 20; // give it extra space so it does not overlap with the date labels.
		const mult = this.p1[0] - this.p0[0];
		const txtColor = this.getLineColor();
		context.textAlign = "center";

		let x = x0;
		let txt = 0;
		const { top } = yAxis;
		let farY = yAxis.bottom;
		const { printLevels, timezone } = parameters;
		let fibColor = timezone.color;
		if (fibColor == "auto" || CIQ.isTransparent(fibColor))
			fibColor = this.getLineColor();
		let fillColor = timezone.color;
		if (fillColor == "auto" || CIQ.isTransparent(fillColor))
			fillColor = this.fillColor;
		if (fillColor == "auto" || CIQ.isTransparent(fillColor))
			fillColor = stx.defaultColor;

		if (printLevels) farY -= h - 7;

		const tzParameters = CIQ.clone(parameters.timezone.parameters);
		if (highlighted) tzParameters.opacity = 1;

		while (true) {
			x = stx.pixelFromTick(p0[0] + txt * mult, chart);
			if ((x0 < x1 && x > left + width) || (x0 > x1 && x < left)) break;
			if (printLevels) {
				context.fillStyle = txtColor;
				context.fillText(x1 > x0 ? txt : txt * -1, x, farY + 7);
			}
			context.fillStyle = fillColor;
			stx.plotLine(
				x,
				x,
				0,
				farY,
				fibColor,
				"segment",
				context,
				panel,
				tzParameters
			);
			context.globalAlpha = 0.05;
			context.beginPath();
			context.moveTo(x0, top);
			context.lineTo(x, top);
			context.lineTo(x, farY);
			context.lineTo(x0, farY);
			context.fill();
			context.globalAlpha = 1;
			txt = fibs[0] + fibs[1];
			fibs.unshift(txt);

			if (!mult) break;
		}
		context.textAlign = "left";
		stx.plotLine(
			x0,
			x1,
			y0,
			y1,
			trendLineColor,
			"segment",
			context,
			panel,
			tzParameters
		);
		if (this.highlighted) {
			const p0Fill = highlighted == "p0" ? true : false;
			const p1Fill = highlighted == "p1" ? true : false;
			this.littleCircle(context, x0, y0, p0Fill);
			this.littleCircle(context, x1, y1, p1Fill);
		} else {
			// move points so always accessible
			const yVal = this.valueFromPixel(panel.height / 2, panel, yAxis);
			this.setPoint(0, p0[0], yVal, chart);
			this.setPoint(1, p1[0], yVal, chart);
		}
	};

	CIQ.Drawing.fibtimezone.prototype.intersected = function (tick, value, box) {
		var p0 = this.p0,
			p1 = this.p1,
			panel = this.stx.panels[this.panelName];
		if (!p0 || !p1 || !panel) return null; // in case invalid drawing (such as from panel that no longer exists)
		var pointsToCheck = { 0: p0, 1: p1 };
		for (var pt in pointsToCheck) {
			if (
				this.pointIntersection(pointsToCheck[pt][0], pointsToCheck[pt][1], box)
			) {
				this.highlighted = "p" + pt;
				return {
					action: "drag",
					point: "p" + pt
				};
			}
		}
		// Check for over the trend line or the 0 vertical line
		var trendIntersects = this.lineIntersection(tick, value, box, "segment");
		if (trendIntersects || (box.x0 <= this.p0[0] && box.x1 >= p0[0])) {
			this.highlighted = true;
			return {
				action: "move",
				p0: CIQ.clone(p0),
				p1: CIQ.clone(p1),
				tick: tick, // save original tick
				value: this.valueOnDrawingAxis(tick, value) // save original value
			};
		}
		return null;
	};

	// Backwards compatibility for drawings
	CIQ.Drawing.arrow_v0 = function () {
		this.name = "arrow";
		this.dimension = [11, 11];
		this.points = [
			[
				"M", 3, 0,
				"L", 7, 0,
				"L", 7, 5,
				"L", 10, 5,
				"L", 5, 10,
				"L", 0, 5,
				"L", 3, 5,
				"L", 3, 0
			]
		]; // prettier-ignore
	};
	CIQ.inheritsFrom(CIQ.Drawing.arrow_v0, CIQ.Drawing.shape);

	/* Drawing specific shapes
	 *
	 * this.dimension: overall dimension of shape as designed, as a pair [dx,dy] where dx is length and dy is width, in pixels
	 * this.points: array of arrays.  Each array represents a closed loop subshape.
	 * 	within each array is a series of values representing coordinates.
	 * 	For example, ["M",0,0,"L",1,1,"L",2,1,"Q",3,3,4,1,"B",5,5,0,0,3,3]
	 * 	The array will be parsed by the render function:
	 * 		"M" - move to the xy coordinates represented by the next 2 array elements
	 * 		"L" - draw line to xy coordinates represented by the next 2 array elements
	 * 		"Q" - draw quadratic curve where next 2 elements are the control point and following 2 elements are the end coordinates
	 * 		"B" - draw bezier curve where next 2 elements are first control point, next 2 elements are second control point, and next 2 elements are the end coordinates
	 * See sample shapes below.
	 *
	 */

	CIQ.Drawing.xcross = function () {
		this.name = "xcross";
		this.dimension = [7, 7];
		this.points=[
			[
				"M", 1, 0,
				"L", 3, 2,
				"L", 5, 0,
				"L", 6, 1,
				"L", 4, 3,
				"L", 6, 5,
				"L" ,5, 6,
				"L", 3, 4,
				"L", 1, 6,
				"L", 0, 5,
				"L", 2, 3,
				"L", 0, 1,
				"L", 1, 0
			]
		]; // prettier-ignore
	};
	CIQ.inheritsFrom(CIQ.Drawing.xcross, CIQ.Drawing.shape);

	CIQ.Drawing.check = function () {
		this.name = "check";
		this.dimension = [8, 9];
		this.points = [
			[
				"M", 1, 5,
				"L", 0, 6,
				"L", 2, 8,
				"L", 7, 1,
				"L", 6, 0,
				"L", 2, 6,
				"L", 1, 5
			]
		]; // prettier-ignore
	};
	CIQ.inheritsFrom(CIQ.Drawing.check, CIQ.Drawing.shape);

	CIQ.Drawing.star = function () {
		this.name = "star";
		this.dimension = [12, 12];
		this.points=[
			[
				"M", 0, 4,
				"L", 4, 4,
				"L", 5.5, 0,
				"L", 7, 4,
				"L", 11, 4,
				"L" ,8, 7,
				"L", 9, 11,
				"L", 5.5, 9,
				"L", 2, 11,
				"L", 3, 7,
				"L", 0, 4
			]
		]; // prettier-ignore
	};
	CIQ.inheritsFrom(CIQ.Drawing.star, CIQ.Drawing.shape);

	CIQ.Drawing.heart = function () {
		this.name = "heart";
		this.dimension = [23, 20];
		this.points=[
			[
				"M", 11, 3,
				"B", 11, 2.4, 10, 0, 6 ,0,
				"B", 0, 0, 0, 7.5, 0, 7.5,
				"B", 0, 11, 4, 15.4, 11, 19,
				"B", 18, 15.4, 22, 11, 22, 7.5,
				"B", 22, 7.5, 22, 0, 16, 0,
				"B", 13, 0, 11, 2.4, 11, 3
			]
		]; // prettier-ignore
	};
	CIQ.inheritsFrom(CIQ.Drawing.heart, CIQ.Drawing.shape);

	CIQ.Drawing.focusarrow = function () {
		this.name = "focusarrow";
		this.dimension = [7, 5];
		this.points = [
			[
				"M", 0, 0,
				"L", 2, 2,
				"L", 0, 4,
				"L", 0, 0
			],
			[
				"M", 6, 0,
				"L", 4, 2,
				"L", 6, 4,
				"L", 6, 0
			]
		]; // prettier-ignore
	};
	CIQ.inheritsFrom(CIQ.Drawing.focusarrow, CIQ.Drawing.shape);

	/**
	 * Crossline drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.horizontal}
	 * @constructor
	 * @name  CIQ.Drawing.crossline
	 * @since 2016-09-19
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.crossline = function () {
		this.name = "crossline";
	};
	CIQ.inheritsFrom(CIQ.Drawing.crossline, CIQ.Drawing.horizontal);
	CIQ.extend(
		CIQ.Drawing.crossline.prototype,
		{
			measure: function () {},
			accidentalClick: function (tick, value) {
				return false;
			},
			adjust: function () {
				var panel = this.stx.panels[this.panelName];
				if (!panel) return;
				this.setPoint(0, this.d0, this.v0, panel.chart);
				this.p1 = CIQ.clone(this.p0);
			},
			intersected: function (tick, value, box) {
				if (!this.p0 || !this.p1) return null;
				this.p1[0] += 1;
				var isIntersected = this.lineIntersection(tick, value, box, "line");
				this.p1 = CIQ.clone(this.p0);
				if (!isIntersected) {
					this.p1[1] += 1;
					isIntersected = this.lineIntersection(tick, value, box, "line");
					this.p1 = CIQ.clone(this.p0);
					if (!isIntersected) return null;
				}
				this.highlighted = true;
				if (this.pointIntersection(this.p0[0], this.p0[1], box)) {
					this.highlighted = "p0";
				}
				// This object will be used for repositioning
				return {
					action: "move",
					p0: CIQ.clone(this.p0),
					p1: CIQ.clone(this.p1),
					tick: tick, // save original tick
					value: this.valueOnDrawingAxis(tick, value) // save original value
				};
			},
			render: function (context) {
				var stx = this.stx;
				var panel = stx.panels[this.panelName];
				var yAxis = stx.getYAxisByField(panel, this.field);
				if (!panel || (this.field && !yAxis)) return;
				yAxis = yAxis || panel.yAxis;
				var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
				var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);

				var color = this.getLineColor();

				var parameters = {
					pattern: this.pattern,
					lineWidth: this.lineWidth
				};
				stx.plotLine(
					x0,
					x0 + 100,
					y0,
					y0,
					color,
					"horizontal",
					context,
					panel,
					parameters
				);
				stx.plotLine(
					x0,
					x0,
					y0,
					y0 + 100,
					color,
					"vertical",
					context,
					panel,
					parameters
				);

				if (this.axisLabel && !this.repositioner) {
					stx.endClip();
					var txt = this.p0[1];
					if (panel.chart.transformFunc)
						txt = panel.chart.transformFunc(stx, panel.chart, txt);
					if (yAxis.priceFormatter) txt = yAxis.priceFormatter(stx, panel, txt);
					else txt = stx.formatYAxisPrice(txt, panel, null, yAxis);
					stx.createYAxisLabel(panel, txt, y0, color, null, null, yAxis);
					stx.startClip(panel.name);
					if (this.p0[0] >= 0 && !stx.chart.xAxis.noDraw) {
						// don't try to compute dates from before dataSet
						var dt, newDT;
						/* set d0 to the right timezone */
						dt = stx.dateFromTick(this.p0[0], panel.chart, true);
						if (!CIQ.ChartEngine.isDailyInterval(stx.layout.interval)) {
							var milli = dt.getSeconds() * 1000 + dt.getMilliseconds();
							if (timezoneJS.Date && stx.displayZone) {
								// this converts from the quote feed timezone to the chart specified time zone
								newDT = new timezoneJS.Date(dt.getTime(), stx.displayZone);
								dt = new Date(
									newDT.getFullYear(),
									newDT.getMonth(),
									newDT.getDate(),
									newDT.getHours(),
									newDT.getMinutes()
								);
								dt = new Date(dt.getTime() + milli);
							}
						} else {
							dt.setHours(0, 0, 0, 0);
						}
						var myDate = CIQ.mmddhhmm(CIQ.yyyymmddhhmm(dt));
						/***********/
						if (panel.chart.xAxis.formatter) {
							myDate = panel.chart.xAxis.formatter(
								dt,
								this.name,
								null,
								null,
								myDate
							);
						} else if (this.stx.internationalizer) {
							myDate = CIQ.displayableDate(stx, stx.chart, dt);
						}
						stx.endClip();
						stx.createXAxisLabel({
							panel: panel,
							txt: myDate,
							x: x0,
							backgroundColor: color,
							color: null,
							pointed: true,
							padding: 2
						});
						stx.startClip(panel.name);
					}
				}
				if (this.highlighted) {
					var p0Fill = this.highlighted == "p0" ? true : false;
					this.littleCircle(context, x0, y0, p0Fill);
				}
			}
		},
		true
	);

	/**
	 * Speed Resistance Arc drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.segment}
	 * @constructor
	 * @name  CIQ.Drawing.speedarc
	 * @since 2016-09-19
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.speedarc = function () {
		this.name = "speedarc";
		this.printLevels = true;
	};
	CIQ.inheritsFrom(CIQ.Drawing.speedarc, CIQ.Drawing.segment);
	CIQ.extend(
		CIQ.Drawing.speedarc.prototype,
		{
			defaultOpacity: 0.25,
			configs: ["color", "fillColor", "lineWidth", "pattern"],
			copyConfig: function () {
				var cvp = this.stx.currentVectorParameters;
				this.color = cvp.currentColor;
				this.fillColor = cvp.fillColor;
				this.lineWidth = cvp.lineWidth;
				this.pattern = cvp.pattern;
			},
			intersected: function (tick, value, box) {
				if (!this.p0 || !this.p1) return null; // in case invalid drawing (such as from panel that no longer exists)
				var pointsToCheck = { 0: this.p0, 1: this.p1 };
				for (var pt in pointsToCheck) {
					if (
						this.pointIntersection(
							pointsToCheck[pt][0],
							pointsToCheck[pt][1],
							box
						)
					) {
						this.highlighted = "p" + pt;
						return {
							action: "drag",
							point: "p" + pt
						};
					}
				}
				var valueOnDrawingAxis = this.valueOnDrawingAxis(tick, value);
				var isIntersected = this.lineIntersection(tick, value, box, this.name);
				if (isIntersected) {
					this.highlighted = true;
					// This object will be used for repositioning
					return {
						action: "move",
						p0: CIQ.clone(this.p0),
						p1: CIQ.clone(this.p1),
						tick: tick, // save original tick
						value: valueOnDrawingAxis // save original value
					};
				}

				// Just test the box circumscribing the arcs
				var left = this.p1[0] - (this.p0[0] - this.p1[0]);
				var right = this.p0[0];
				var bottom = this.p1[1];
				var top = this.p0[1];

				if (tick > Math.max(left, right) || tick < Math.min(left, right))
					return null;
				if (
					valueOnDrawingAxis > Math.max(top, bottom) ||
					valueOnDrawingAxis < Math.min(top, bottom)
				)
					return null;
				this.highlighted = true;
				return {
					action: "move",
					p0: CIQ.clone(this.p0),
					p1: CIQ.clone(this.p1),
					tick: tick,
					value: valueOnDrawingAxis
				};
			},
			render: function (context) {
				var stx = this.stx;
				var panel = stx.panels[this.panelName];
				var yAxis = stx.getYAxisByField(panel, this.field);
				if (!panel || (this.field && !yAxis)) return;
				yAxis = yAxis || panel.yAxis;
				if (!this.p1) return;
				var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
				var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
				var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
				var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);
				var isUpTrend = y1 < y0;
				var factor = Math.abs((y1 - y0) / (x1 - x0));

				var color = this.getLineColor();
				context.strokeStyle = color;
				var fillColor = this.fillColor;
				if (fillColor == "auto" || CIQ.isTransparent(fillColor))
					fillColor = stx.defaultColor;
				context.fillStyle = fillColor;
				if (context.setLineDash) {
					context.setLineDash(
						CIQ.borderPatternToArray(this.lineWidth, this.pattern)
					);
					context.lineDashOffset = 0; //start point in array
				}
				stx.canvasFont("stx_yaxis", context);
				for (var i = 1; i < 3; i++) {
					var radius =
						(Math.abs(this.p1[1] - this.p0[1]) * Math.sqrt(2) * i) / 3;
					var value =
						this.p1[1] +
						radius * (isUpTrend ? -1 : 1) * (yAxis.flipped ? -1 : 1);
					var y = this.pixelFromValue(panel, this.p0[0], value, yAxis);

					context.save();
					context.beginPath();
					context.scale(1 / factor, 1);
					context.arc(
						x1 * factor,
						y1,
						Math.abs(y - y1),
						0,
						Math.PI,
						!isUpTrend
					);
					context.globalAlpha = this.highlighted ? 1 : this.defaultOpacity;
					if (this.pattern != "none") context.stroke();
					context.globalAlpha = 0.1;
					context.fill();
					context.restore();
					context.globalAlpha = 1;
					if (this.printLevels) {
						context.fillStyle = color;
						context.textAlign = "center";
						var txt = i + "/3";
						context.fillText(txt, x1, Math.round(y - 5));
						context.fillStyle = fillColor;
					}
				}
				context.textAlign = "left";
				var parameters = {
					pattern: this.pattern,
					lineWidth: this.lineWidth,
					opacity: this.highlighted ? 1 : this.defaultOpacity
				};
				stx.plotLine(
					x0,
					x1,
					y0,
					y1,
					color,
					"segment",
					context,
					panel,
					parameters
				);
				if (context.setLineDash) context.setLineDash([]);
				if (this.highlighted) {
					var p0Fill = this.highlighted == "p0" ? true : false;
					var p1Fill = this.highlighted == "p1" ? true : false;
					this.littleCircle(context, x0, y0, p0Fill);
					this.littleCircle(context, x1, y1, p1Fill);
				}
			},
			reconstruct: function (stx, obj) {
				this.stx = stx;
				this.color = obj.col;
				this.fillColor = obj.fc;
				this.panelName = obj.pnl;
				this.pattern = obj.ptrn;
				this.lineWidth = obj.lw;
				this.d0 = obj.d0;
				this.d1 = obj.d1;
				this.tzo0 = obj.tzo0;
				this.tzo1 = obj.tzo1;
				this.v0 = obj.v0;
				this.v1 = obj.v1;
				this.field = obj.fld;
				this.adjust();
			},
			serialize: function () {
				return {
					name: this.name,
					pnl: this.panelName,
					col: this.color,
					fc: this.fillColor,
					ptrn: this.pattern,
					lw: this.lineWidth,
					d0: this.d0,
					d1: this.d1,
					tzo0: this.tzo0,
					tzo1: this.tzo1,
					v0: this.v0,
					v1: this.v1,
					fld: this.field
				};
			}
		},
		true
	);

	/**
	 * Speed Resistance Lines drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.speedarc}
	 * @constructor
	 * @name  CIQ.Drawing.speedline
	 * @since 2016-09-19
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.speedline = function () {
		this.name = "speedline";
		this.printLevels = true;
	};
	CIQ.inheritsFrom(CIQ.Drawing.speedline, CIQ.Drawing.speedarc);
	CIQ.extend(
		CIQ.Drawing.speedline.prototype,
		{
			intersected: function (tick, value, box) {
				var p0 = this.p0,
					p1 = this.p1;
				if (!p0 || !p1) return null; // in case invalid drawing (such as from panel that no longer exists)
				var pointsToCheck = { 0: p0, 1: p1 };
				for (var pt in pointsToCheck) {
					if (
						this.pointIntersection(
							pointsToCheck[pt][0],
							pointsToCheck[pt][1],
							box
						)
					) {
						this.highlighted = "p" + pt;
						return {
							action: "drag",
							point: "p" + pt
						};
					}
				}
				var rays = this.rays;
				for (var i = 0; i < rays.length; i++) {
					if (
						this.lineIntersection(
							tick,
							value,
							box,
							"ray",
							rays[i][0],
							rays[i][1],
							true
						)
					) {
						this.highlighted = true;
						// This object will be used for repositioning
						return {
							action: "move",
							p0: CIQ.clone(p0),
							p1: CIQ.clone(p1),
							tick: tick, // save original tick
							value: this.valueOnDrawingAxis(tick, value) // save original value
						};
					}
				}
				return null;
			},
			render: function (context) {
				var stx = this.stx;
				var panel = stx.panels[this.panelName];
				var yAxis = stx.getYAxisByField(panel, this.field);
				if (!panel || (this.field && !yAxis)) return;
				if (!this.p1) return;
				var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
				var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
				var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
				var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);
				stx.canvasFont("stx_yaxis", context); // match font from y-axis so it looks cohesive
				var color = this.getLineColor();
				context.strokeStyle = color;
				var fillColor = this.fillColor;
				if (fillColor == "auto" || CIQ.isTransparent(fillColor))
					fillColor = stx.defaultColor;
				context.fillStyle = fillColor;
				var parameters = {
					pattern: this.pattern,
					lineWidth: this.lineWidth,
					opacity: this.highlighted ? 1 : this.defaultOpacity
				};
				var farX0, farY0;
				var levels = ["1", "2/3", "1/3", "3/2", "3"];
				var levelValues = [1, 2 / 3, 1 / 3, 3 / 2, 3];
				var grids = [];
				this.rays = [];
				for (var i = 0; i < levelValues.length; i++) {
					var level = levelValues[i];
					if (level > 1 && !this.extension) continue;
					var y = this.pixelFromValue(
						panel,
						this.p0[0],
						this.p0[1] - (this.p0[1] - this.p1[1]) * level,
						yAxis
					);
					var x;
					if (level > 1) {
						x = CIQ.xIntersection({ x0: x0, x1: x1, y0: y0, y1: y }, y1);
						grids.push(x);
					} else {
						x = CIQ.xIntersection({ x0: x1, x1: x1, y0: y0, y1: y1 }, y);
						grids.push(y);
					}
					//var x=x0+(x1-x0)/level;
					//var y=y0-level*(y0-y1);
					var farX = level > 1 ? x : x1;
					var farY = level > 1 ? y1 : y;
					if (!this.confineToGrid) {
						farX = panel.left;
						if (x1 > x0) farX += panel.width;
						farY = ((farX - x0) * (y - y0)) / (x1 - x0) + y0;
					}
					if (this.printLevels) {
						if (level != 1 || this.extension) {
							context.fillStyle = color;
							var perturbX = 0,
								perturbY = 0;
							if (y0 > y1) {
								perturbY = -5;
								context.textBaseline = "bottom";
							} else {
								perturbY = 5;
								context.textBaseline = "top";
							}
							if (x0 > x1) {
								perturbX = 5;
								context.textAlign = "right";
							} else {
								perturbX = -5;
								context.textAlign = "left";
							}
							if (level > 1)
								context.fillText(
									levels[i],
									x + (this.confineToGrid ? 0 : perturbX),
									y1
								);
							else
								context.fillText(
									levels[i],
									x1,
									y + (this.confineToGrid ? 0 : perturbY)
								);
							context.fillStyle = fillColor;
						}
					}
					stx.plotLine(
						x0,
						farX,
						y0,
						farY,
						color,
						"segment",
						context,
						panel,
						parameters
					);
					if (level == 1) {
						farX0 = farX;
						farY0 = farY;
					}
					this.rays.push([
						[x0, y0],
						[farX, farY]
					]);
					context.globalAlpha = 0.1;
					context.beginPath();
					context.moveTo(farX, farY);
					context.lineTo(x0, y0);
					context.lineTo(farX0, farY0);
					context.fill();
					context.globalAlpha = 1;
				}
				context.textAlign = "left";
				context.textBaseline = "middle";
				if (this.confineToGrid) {
					context.globalAlpha = 0.3;
					context.beginPath();
					context.strokeRect(x0, y0, x1 - x0, y1 - y0);
					context.moveTo(x0, grids[1]);
					context.lineTo(x1, grids[1]);
					context.moveTo(x0, grids[2]);
					context.lineTo(x1, grids[2]);
					if (this.extension) {
						context.moveTo(grids[3], y0);
						context.lineTo(grids[3], y1);
						context.moveTo(grids[4], y0);
						context.lineTo(grids[4], y1);
					}
					context.stroke();
					context.globalAlpha = 1;
				}
				if (this.highlighted) {
					var p0Fill = this.highlighted == "p0" ? true : false;
					var p1Fill = this.highlighted == "p1" ? true : false;
					this.littleCircle(context, x0, y0, p0Fill);
					this.littleCircle(context, x1, y1, p1Fill);
				}
			}
		},
		true
	);

	/**
	 * Gann Fan drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.speedarc}
	 * @constructor
	 * @name  CIQ.Drawing.gannfan
	 * @since 2016-09-19
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.gannfan = function () {
		this.name = "gannfan";
		this.printLevels = true;
	};
	CIQ.inheritsFrom(CIQ.Drawing.gannfan, CIQ.Drawing.speedline);
	CIQ.extend(
		CIQ.Drawing.gannfan.prototype,
		{
			render: function (context) {
				var stx = this.stx;
				var panel = stx.panels[this.panelName];
				var yAxis = stx.getYAxisByField(panel, this.field);
				if (!panel || (this.field && !yAxis)) return;
				if (!this.p1) return;
				var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
				var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
				var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
				var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);
				stx.canvasFont("stx_yaxis", context); // match font from y-axis so it looks cohesive
				var color = this.getLineColor();
				context.strokeStyle = color;
				var fillColor = this.fillColor;
				if (fillColor == "auto" || CIQ.isTransparent(fillColor))
					fillColor = stx.defaultColor;
				context.fillStyle = fillColor;
				var parameters = {
					pattern: this.pattern,
					lineWidth: this.lineWidth,
					opacity: this.highlighted ? 1 : this.defaultOpacity
				};
				var farX0, farY0;
				var levels = [1, 2, 3, 4, 8, 1 / 2, 1 / 3, 1 / 4, 1 / 8];
				this.rays = [];
				for (var i = 0; i < levels.length; i++) {
					var level = levels[i];
					var x = x0 + (x1 - x0) / level;
					var y = y0 - level * (y0 - y1);
					var farX = panel.left;
					if (x1 > x0) farX += panel.width;
					var farY = ((farX - x0) * (y - y0)) / (x1 - x0) + y0;
					if (this.printLevels) {
						context.fillStyle = color;
						var perturbX = 0,
							perturbY = 0;
						if (y0 > y1) {
							perturbY = 5;
							context.textBaseline = "top";
						} else {
							perturbY = -5;
							context.textBaseline = "bottom";
						}
						if (x0 > x1) {
							perturbX = 5;
							context.textAlign = "left";
						} else {
							perturbX = -5;
							context.textAlign = "right";
						}
						if (level > 1) {
							context.fillText(level + "x1", x + perturbX, y1);
						} else {
							context.fillText("1x" + 1 / level, x1, y + perturbY);
						}
						context.fillStyle = fillColor;
					}
					stx.plotLine(
						x0,
						farX,
						y0,
						farY,
						color,
						"segment",
						context,
						panel,
						parameters
					);
					this.rays.push([
						[x0, y0],
						[farX, farY]
					]);
					if (level == 1) {
						farX0 = farX;
						farY0 = farY;
					}
					context.globalAlpha = 0.1;
					context.beginPath();
					context.moveTo(farX, farY);
					context.lineTo(x0, y0);
					context.lineTo(farX0, farY0);
					context.fill();
					context.globalAlpha = 1;
				}
				context.textAlign = "left";
				context.textBaseline = "middle";
				if (this.highlighted) {
					var p0Fill = this.highlighted == "p0" ? true : false;
					var p1Fill = this.highlighted == "p1" ? true : false;
					this.littleCircle(context, x0, y0, p0Fill);
					this.littleCircle(context, x1, y1, p1Fill);
				}
			}
		},
		true
	);

	/**
	 * Time Cycle drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.speedarc}
	 * @constructor
	 * @name  CIQ.Drawing.timecycle
	 * @since 2016-09-19
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.timecycle = function () {
		this.name = "timecycle";
		this.printLevels = true;
	};
	CIQ.inheritsFrom(CIQ.Drawing.timecycle, CIQ.Drawing.speedarc);
	CIQ.extend(
		CIQ.Drawing.timecycle.prototype,
		{
			intersected: function (tick, value, box) {
				var p0 = this.p0,
					p1 = this.p1,
					panel = this.stx.panels[this.panelName];
				if (!p0 || !p1 || !panel) return null; // in case invalid drawing (such as from panel that no longer exists)
				var pointsToCheck = { 0: p0, 1: p1 };
				for (var pt in pointsToCheck) {
					if (
						this.pointIntersection(
							pointsToCheck[pt][0],
							pointsToCheck[pt][1],
							box
						)
					) {
						this.highlighted = "p" + pt;
						return {
							action: "drag",
							point: "p" + pt
						};
					}
				}
				// Check for over the trend line or the 0 vertical line
				var trendIntersects = this.lineIntersection(
					tick,
					value,
					box,
					"segment"
				);
				if (trendIntersects || (box.x0 <= this.p0[0] && box.x1 >= p0[0])) {
					this.highlighted = true;
					return {
						action: "move",
						p0: CIQ.clone(p0),
						p1: CIQ.clone(p1),
						tick: tick, // save original tick
						value: this.valueOnDrawingAxis(tick, value) // save original value
					};
				}
				return null;
			},
			render: function (context) {
				var stx = this.stx;
				var panel = stx.panels[this.panelName];
				var yAxis = stx.getYAxisByField(panel, this.field);
				if (!panel || (this.field && !yAxis)) return;
				yAxis = yAxis || panel.yAxis;
				if (!this.p1) return;

				var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
				var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
				var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
				var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);
				var count = 0;

				context.textBaseline = "middle";
				stx.canvasFont("stx_yaxis", context); // match font from y-axis so it looks cohesive
				var h = 20; // give it extra space so it does not overlap with the date labels.
				var mult = this.p1[0] - this.p0[0];
				context.textAlign = "center";

				var x = x0;
				var top = yAxis.top;
				var farY = yAxis.bottom;
				var color = this.getLineColor();
				var fillColor = this.fillColor;
				if (fillColor == "auto" || CIQ.isTransparent(fillColor))
					fillColor = stx.defaultColor;

				if (this.printLevels) farY -= h - 7;

				var parameters = {
					pattern: this.pattern,
					lineWidth: this.lineWidth,
					opacity: this.highlighted ? 1 : this.defaultOpacity
				};

				var x_s = [];
				context.save();
				context.fillStyle = fillColor;
				context.globalAlpha = 0.05;
				//context.globalCompositeOperation="destination-over";
				while (true) {
					x = stx.pixelFromTick(this.p0[0] + count * mult, panel.chart);
					count++;

					if (x0 < x1 && x > panel.left + panel.width) break;
					else if (x0 > x1 && x < panel.left) break;
					else if (x < panel.left || x > panel.left + panel.width) continue;

					context.beginPath();
					context.moveTo(x0, top);
					context.lineTo(x, top);
					context.lineTo(x, farY);
					context.lineTo(x0, farY);
					context.fill();
					x_s.push({ c: count, x: x });

					if (!mult) break;
				}
				context.globalAlpha = 1;
				var slack = 0;
				for (var pt = 0; pt < x_s.length; pt++) {
					stx.plotLine(
						x_s[pt].x,
						x_s[pt].x,
						0,
						farY,
						color,
						"segment",
						context,
						panel,
						parameters
					);
					if (this.printLevels) {
						context.fillStyle = color;
						var m = stx.chart.context.measureText(x_s[pt].c).width + 3;
						if (m < stx.layout.candleWidth + slack) {
							context.fillText(x_s[pt].c, x_s[pt].x, farY + 7);
							slack = 0;
						} else {
							slack += stx.layout.candleWidth;
						}
					}
				}
				context.restore();
				context.textAlign = "left";

				stx.plotLine(
					x0,
					x1,
					y0,
					y1,
					color,
					"segment",
					context,
					panel,
					parameters
				);
				if (this.highlighted) {
					var p0Fill = this.highlighted == "p0" ? true : false;
					var p1Fill = this.highlighted == "p1" ? true : false;
					this.littleCircle(context, x0, y0, p0Fill);
					this.littleCircle(context, x1, y1, p1Fill);
				} else {
					// move points so always accessible
					var yVal = this.valueFromPixel(panel.height / 2, panel, yAxis);
					this.setPoint(0, this.p0[0], yVal, panel.chart);
					this.setPoint(1, this.p1[0], yVal, panel.chart);
				}
			}
		},
		true
	);

	/**
	 * Regression Line drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.segment}
	 * @constructor
	 * @name  CIQ.Drawing.regression
	 * @since 2016-09-19
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.regression = function () {
		this.name = "regression";
	};
	CIQ.inheritsFrom(CIQ.Drawing.regression, CIQ.Drawing.segment);
	CIQ.extend(
		CIQ.Drawing.regression.prototype,
		{
			configs: [
				// primary line
				"color",
				"lineWidth",
				"pattern",
				// stddev * 1
				"active1",
				"color1",
				"lineWidth1",
				"pattern1",
				// stddev * 2
				"active2",
				"color2",
				"lineWidth2",
				"pattern2",
				// stddev * 3
				"active3",
				"color3",
				"lineWidth3",
				"pattern3"
			],
			copyConfig: function (withPreferences) {
				CIQ.Drawing.copyConfig(this, withPreferences);
				var cvp = this.stx.currentVectorParameters;
				this.active1 = !!cvp.active1;
				this.active2 = !!cvp.active2;
				this.active3 = !!cvp.active3;
				this.color1 = cvp.color1 || "auto";
				this.color2 = cvp.color2 || "auto";
				this.color3 = cvp.color3 || "auto";
				this.lineWidth1 = cvp.lineWidth1;
				this.lineWidth2 = cvp.lineWidth2;
				this.lineWidth3 = cvp.lineWidth3;
				this.pattern1 = cvp.pattern1;
				this.pattern2 = cvp.pattern2;
				this.pattern3 = cvp.pattern3;
			},
			$controls: [
				'cq-cvp-controller[cq-cvp-header="1"]',
				'cq-cvp-controller[cq-cvp-header="2"]',
				'cq-cvp-controller[cq-cvp-header="3"]'
			],
			click: function (context, tick, value) {
				if (tick < 0) return;
				this.copyConfig();
				var stx = this.stx;
				var panel = stx.panels[this.panelName];
				if (!this.penDown) {
					this.setPoint(0, tick, value, panel.chart);
					if (!this.isAllowed(stx, this.field)) {
						stx.undo();
						return true;
					}
					this.penDown = true;
					return false;
				}
				if (this.accidentalClick(tick, value)) return true;

				this.setPoint(1, tick, value, panel.chart);
				this.penDown = false;
				return true; // kernel will call render after this
			},
			// Returns both the transformed and untransformed value of the drawing's field attribute
			getYValue: function (i) {
				var stx = this.stx;
				var record = stx.chart.dataSet[i],
					transformedRecord = stx.chart.dataSet[i];
				if (!record) return null;

				var panel = stx.panels[this.panelName];
				var yAxis = stx.getYAxisByField(panel, this.field) || panel.yAxis;
				if (
					stx.charts[panel.name] &&
					panel.chart.transformFunc &&
					yAxis == panel.yAxis
				)
					transformedRecord = record.transform;
				if (!transformedRecord) return null;

				var price = null,
					transformedPrice = null,
					defaultField = stx.defaultPlotField || "Close";
				if (this.field) {
					transformedPrice = CIQ.existsInObjectChain(
						transformedRecord,
						this.field
					);
					if (!transformedPrice) return null;
					price = transformedPrice =
						transformedPrice.obj[transformedPrice.member];
					if (record != transformedRecord) {
						price = CIQ.existsInObjectChain(record, this.field);
						price = price.obj[price.member];
					}
					if (typeof transformedPrice == "object") {
						transformedPrice = transformedPrice[defaultField];
						price = price[defaultField];
					}
				} else {
					transformedPrice = transformedRecord[defaultField];
					price = record[defaultField];
				}
				return { transformed: transformedPrice, untransformed: price };
			},
			render: function (context) {
				var stx = this.stx;
				var panel = stx.panels[this.panelName];
				var yAxis = stx.getYAxisByField(panel, this.field);
				if (!panel || (this.field && !yAxis)) return;
				if (!this.p1) return;
				if (this.p0[0] < 0 || this.p1[0] < 0) return;
				var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
				var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
				if (x0 < panel.left && x1 < panel.left) return;
				if (x0 > panel.right && x1 > panel.right) return;

				var prices = [],
					rawPrices = []; // rawPrices used solely for measure
				var sumCloses = 0,
					sumRawCloses = 0;
				var sumWeightedCloses = 0,
					sumWeightedRawCloses = 0;
				var start = Math.min(this.p1[0], this.p0[0]);
				var end = Math.max(this.p1[0], this.p0[0]) + 1;
				var rawTicks = end - start;
				for (var i = start; i < end; i++) {
					var price = this.getYValue(i);
					if (price) {
						prices.push(price.transformed);
						rawPrices.push(price.untransformed);
					}
				}

				var ticks = prices.length;
				var sumWeights = (ticks * (ticks + 1)) / 2;
				var squaredSumWeights = Math.pow(sumWeights, 2);
				var sumWeightsSquared = (sumWeights * (2 * ticks + 1)) / 3;

				for (i = 0; i < ticks; i++) {
					sumWeightedCloses += ticks * prices[i] - sumCloses;
					sumCloses += prices[i];
					sumWeightedRawCloses += ticks * rawPrices[i] - sumRawCloses;
					sumRawCloses += rawPrices[i];
				}

				var slope =
					(ticks * sumWeightedCloses - sumWeights * sumCloses) /
					(ticks * sumWeightsSquared - squaredSumWeights);
				var intercept = (sumCloses - slope * sumWeights) / ticks;
				var rawSlope =
					(ticks * sumWeightedRawCloses - sumWeights * sumRawCloses) /
					(ticks * sumWeightsSquared - squaredSumWeights);
				var rawIntercept = (sumRawCloses - slope * sumWeights) / ticks;
				var v0, v1;
				if (this.p0[0] < this.p1[0]) {
					v0 = intercept;
					v1 = slope * rawTicks + intercept;
					this.p0[1] = rawIntercept;
					this.p1[1] = rawSlope * rawTicks + rawIntercept;
				} else {
					v0 = slope * rawTicks + intercept;
					v1 = intercept;
					this.p0[1] = rawSlope * rawTicks + rawIntercept;
					this.p1[1] = rawIntercept;
				}

				var y0 = stx.pixelFromTransformedValue(v0, panel, yAxis);
				var y1 = stx.pixelFromTransformedValue(v1, panel, yAxis);
				var trendLineColor = this.getLineColor();
				var parameters = {
					pattern: this.pattern,
					lineWidth: this.lineWidth
				};
				stx.plotLine(
					x0,
					x1,
					y0,
					y1,
					trendLineColor,
					"segment",
					context,
					panel,
					parameters
				);
				stx.plotLine(
					x0,
					x0,
					y0 - 20,
					y0 + 20,
					trendLineColor,
					"segment",
					context,
					panel,
					parameters
				);
				stx.plotLine(
					x1,
					x1,
					y1 - 20,
					y1 + 20,
					trendLineColor,
					"segment",
					context,
					panel,
					parameters
				);

				if (this.active1 || this.active2 || this.active3) {
					var average = sumCloses / ticks;
					var sumStddev = 0;

					for (i = 0; i < ticks; i++) {
						sumStddev += Math.pow(prices[i] - average, 2);
					}

					var stddev = Math.sqrt(sumStddev / ticks);
					var params = {
						context: context,
						panel: panel,
						points: {
							0: { x: x0, v: v0 },
							1: { x: x1, v: v1 }
						},
						stddev: stddev,
						yAxis: yAxis
					};

					this.lines = {};

					if (this.active1) {
						this.renderStddev("1", "p", params);
						this.renderStddev("1", "n", params);
					}

					if (this.active2) {
						this.renderStddev("2", "p", params);
						this.renderStddev("2", "n", params);
					}

					if (this.active3) {
						this.renderStddev("3", "p", params);
						this.renderStddev("3", "n", params);
					}
				}

				if (!this.highlighted) {
					this.pixelX = [x0, x1];
					this.pixelY = [y0, y1];
				} else {
					var p0Fill = this.highlighted == "p0" ? true : false;
					var p1Fill = this.highlighted == "p1" ? true : false;
					this.littleCircle(context, x0, y0, p0Fill);
					this.littleCircle(context, x1, y1, p1Fill);
				}
			},
			renderStddev: function (scope, sign, parameters) {
				var name = "stddev" + scope + sign;
				var colorKey = "color" + scope;
				var patternKey = "pattern" + scope;
				var lineWidthKey = "lineWidth" + scope;
				var points = parameters.points;
				var v0 = points[0].v;
				var v1 = points[1].v;
				var stddev = parameters.stddev;
				var stddevMult = sign === "n" ? scope * -1 : scope * 1;
				var stx = this.stx;
				var panel = parameters.panel;
				var yAxis = parameters.yAxis;
				var line = {
					name: name,
					color: this.getLineColor(this[colorKey]),
					type: "segment",
					y0: stx.pixelFromTransformedValue(
						v0 + stddev * stddevMult,
						panel,
						yAxis
					),
					y1: stx.pixelFromTransformedValue(
						v1 + stddev * stddevMult,
						panel,
						yAxis
					),
					params: {
						pattern: this[patternKey],
						lineWidth: this[lineWidthKey]
					}
				};

				// set line for intersected method
				if (this.lines) {
					this.lines[name] = line;
				}

				var context = parameters.context;
				var x0 = points[0].x;
				var x1 = points[1].x;

				stx.plotLine(
					x0,
					x1,
					line.y0,
					line.y1,
					line.color,
					line.type,
					context,
					panel,
					line.params
				);
				stx.plotLine(
					x0,
					x0,
					line.y0 - 10,
					line.y0 + 10,
					line.color,
					line.type,
					context,
					panel,
					line.params
				);
				stx.plotLine(
					x1,
					x1,
					line.y1 - 10,
					line.y1 + 10,
					line.color,
					line.type,
					context,
					panel,
					line.params
				);

				var label = scope + "\u03c3";
				var labelX = Math.max(x0, x1) + 5;
				var labelY = x0 < x1 ? line.y1 : line.y0;

				context.fillStyle = line.color;
				context.save();
				context.textBaseline = "middle";
				context.fillText(label, labelX, labelY);
				context.restore();

				// derived class `average` has an axisLabel
				if (
					parameters.formatPrice &&
					this.axisLabel &&
					!this.highlighted &&
					!this.penDown
				) {
					if (
						(x0 >= panel.chart.left && x0 <= panel.chart.right) ||
						(x1 >= panel.chart.left && x1 <= panel.chart.right)
					) {
						var displayPrice = (x0 < x1 ? v1 : v0) + stddev * stddevMult;
						stx.endClip();
						stx.createYAxisLabel(
							panel,
							parameters.formatPrice(displayPrice, yAxis),
							labelY,
							line.color,
							null,
							context,
							yAxis
						);
						stx.startClip(panel.name);
					}
				}
			},
			intersected: function (tick, value, box) {
				if (!this.pixelX || !this.pixelY) return null;

				var repositionIntersection = this.repositionIntersection(tick, value);
				if (repositionIntersection) return repositionIntersection;

				// check for point intersection
				var pointsToCheck = { 0: this.pixelX, 1: this.pixelY };
				for (var pt = 0; pt < 2; pt++) {
					if (
						this.pointIntersection(
							pointsToCheck[0][pt],
							pointsToCheck[1][pt],
							box,
							true
						)
					) {
						this.highlighted = "p" + pt;
						return {
							action: "drag",
							point: "p" + pt
						};
					}
				}

				// check for line intersection
				var self = this;
				var x0 = this.pixelX[0];
				var x1 = this.pixelX[1];
				var lineIntersection = function (line) {
					var p0 = [x0, line.y0];
					var p1 = [x1, line.y1];

					return self.lineIntersection(
						tick,
						value,
						box,
						self.name,
						p0,
						p1,
						true
					);
				};
				var isIntersected = lineIntersection({
					y0: this.pixelY[0],
					y1: this.pixelY[1]
				});

				if (!isIntersected && this.lines) {
					for (var key in this.lines) {
						if (lineIntersection(this.lines[key])) {
							isIntersected = true;
							break;
						}
					}
				}

				if (isIntersected) {
					this.highlighted = true;
					// This object will be used for repositioning
					return {
						action: "move",
						p0: CIQ.clone(this.p0),
						p1: CIQ.clone(this.p1),
						tick: tick, // save original tick
						value: this.valueOnDrawingAxis(tick, value) // save original value
					};
				}

				return null;
			},
			repositionIntersection: function (tick, value) {
				if (!this.p0 || !this.p1) return false; // in case invalid drawing (such as from panel that no longer exists)
				if (this == this.stx.repositioningDrawing && this.highlighted) {
					// already moving or dragging, continue
					if (this.highlighted === true) {
						return {
							action: "move",
							p0: CIQ.clone(this.p0),
							p1: CIQ.clone(this.p1),
							tick: tick, // save original tick
							value: this.valueOnDrawingAxis(tick, value) // save original value
						};
					}
					return {
						action: "drag",
						point: this.highlighted
					};
				}
				return false;
			},
			lineIntersection: function (tick, value, box, type, p0, p1, isPixels) {
				if (!isPixels) {
					console.log(
						type +
							" lineIntersection must accept p0 and p1 in pixels.  Please verify and set isPixels=true."
					);
					return false;
				}
				if (!p0) p0 = this.p0;
				if (!p1) p1 = this.p1;
				if (!(p0 && p1)) return false;
				var stx = this.stx;
				if (box.cx0 === undefined) return false;
				var pixelPoint = { x0: p0[0], x1: p1[0], y0: p0[1], y1: p1[1] };
				return CIQ.boxIntersects(
					box.cx0,
					box.cy0,
					box.cx1,
					box.cy1,
					pixelPoint.x0,
					pixelPoint.y0,
					pixelPoint.x1,
					pixelPoint.y1
				);
			},
			boxIntersection: function (tick, value, box) {
				if (
					box.cx0 > Math.max(this.pixelX[0], this.pixelX[1]) ||
					box.cx1 < Math.min(this.pixelX[0], this.pixelX[1])
				)
					return false;
				if (
					!this.stx.repositioningDrawing &&
					(box.cy1 < this.pixelY[0] || box.cy0 > this.pixelY[1])
				)
					return false;
				return true;
			},
			reconstruct: function (stx, obj) {
				this.stx = stx;
				this.color = obj.col;
				this.color1 = obj.col1;
				this.color2 = obj.col2;
				this.color3 = obj.col3;
				this.active1 = obj.dev1;
				this.active2 = obj.dev2;
				this.active3 = obj.dev3;
				this.panelName = obj.pnl;
				this.pattern = obj.ptrn;
				this.pattern1 = obj.ptrn1;
				this.pattern2 = obj.ptrn2;
				this.pattern3 = obj.ptrn3;
				this.lineWidth = obj.lw;
				this.lineWidth1 = obj.lw1;
				this.lineWidth2 = obj.lw2;
				this.lineWidth3 = obj.lw3;
				this.d0 = obj.d0;
				this.d1 = obj.d1;
				this.tzo0 = obj.tzo0;
				this.tzo1 = obj.tzo1;
				this.field = obj.fld;
				this.adjust();
			},
			serialize: function () {
				return {
					name: this.name,
					pnl: this.panelName,
					dev1: this.active1,
					dev2: this.active2,
					dev3: this.active3,
					col: this.color,
					col1: this.color1,
					col2: this.color2,
					col3: this.color3,
					ptrn: this.pattern,
					ptrn1: this.pattern1,
					ptrn2: this.pattern2,
					ptrn3: this.pattern3,
					lw: this.lineWidth,
					lw1: this.lineWidth1,
					lw2: this.lineWidth2,
					lw3: this.lineWidth3,
					d0: this.d0,
					d1: this.d1,
					tzo0: this.tzo0,
					tzo1: this.tzo1,
					fld: this.field
				};
			}
		},
		true
	);

	/**
	 * trendline is an implementation of a {@link CIQ.Drawing.segment} drawing.
	 *
	 * Extends {@link CIQ.Drawing.segment} and automatically renders a {@link CIQ.Drawing.callout}
	 * containing trend information.
	 * @constructor
	 * @name CIQ.Drawing.trendline
	 * @since 5.1.2
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.trendline = function () {
		this.name = "trendline";
	};

	CIQ.inheritsFrom(CIQ.Drawing.trendline, CIQ.Drawing.segment);

	// allow configuration of font for trendline info in callout, which is then assigned later
	CIQ.Drawing.trendline.prototype.configs = [
		"color",
		"fillColor",
		"lineWidth",
		"pattern",
		"font"
	];

	CIQ.Drawing.trendline.prototype.measure = function () {
		// empty function since the text will now display in a callout
	};

	CIQ.Drawing.trendline.prototype.reconstruct = function (stx, obj) {
		// reconstruct segment as usual, then add callout as property
		CIQ.Drawing.segment.prototype.reconstruct.call(this, stx, obj);
		this.callout = new CIQ.Drawing.callout();
		this.callout.reconstruct(stx, obj.callout);
	};

	CIQ.Drawing.trendline.prototype.serialize = function () {
		// serialize segment as usual, then add callout as property
		var obj = CIQ.Drawing.segment.prototype.serialize.call(this);
		obj.callout = this.callout.serialize();
		return obj;
	};

	CIQ.Drawing.trendline.prototype.render = function (context) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		var yAxis = stx.getYAxisByField(panel, this.field);
		if (!panel || (this.field && !yAxis)) return;

		// render segment as usual
		CIQ.Drawing.segment.prototype.render.call(this, context);

		// only create and initialize callout once
		if (!this.callout) {
			this.callout = new CIQ.Drawing.callout();
			var obj = CIQ.Drawing.segment.prototype.serialize.call(this);
			this.callout.reconstruct(stx, obj);
		}

		// always render the callout perpendicular above / below the segment / trendline
		this.callout.p0 = CIQ.clone(this.p0);

		// extract segment coordinates
		var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
		var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
		var y0 = this.pixelFromValue(panel, this.p0[0], this.p0[1], yAxis);
		var y1 = this.pixelFromValue(panel, this.p1[0], this.p1[1], yAxis);

		// return if we are off the screen axes else insanity ensues
		if (!isFinite(y0) || !isFinite(y1)) return;

		// calculate midpoint (for stem of callout)
		var xmid = (x0 + x1) / 2;
		var ymid = (y0 + y1) / 2;

		// determine length of segment and multiplier / direction of normal vector to give fixed length depending on stem location
		this.fontSize = CIQ.stripPX((this.font && this.font.size) || 13);
		var stemDist =
			this.callout.w * 1.2 + (this.callout.stemEntry[0] == "c" ? 0 : 50);
		var segmentDist = Math.sqrt(Math.pow(x1 - x0, 2) + Math.pow(y1 - y0, 2));
		var scalar =
			(stemDist / (segmentDist || stemDist)) *
			(this.p1[1] < this.p0[1] ? 1 : -1);

		// normal vector (see e.g. http://mathworld.wolfram.com/NormalVector.html)
		var nX = -(y1 - ymid) * scalar + xmid;
		var nY = (x1 - xmid) * scalar + ymid;

		// assign callout coordinates
		this.callout.p0[0] = stx.tickFromPixel(nX, panel.chart);
		this.callout.p0[1] = this.valueFromPixel(nY, panel, yAxis);
		this.callout.v0 = this.callout.p0[1];
		this.callout.p1 = CIQ.clone(this.p0);

		// assign callout properties
		this.callout.stx = stx;
		this.callout.fillColor = this.fillColor || this.callout.fillColor;
		this.callout.borderColor = this.color;
		this.callout.font = this.font || this.callout.font;
		this.callout.noHandles = true;

		// calculate trend and assign to callout text; only show percent if not Inf
		var deltaV = this.p1[1] - this.p0[1];
		this.callout.text =
			"" +
			Number(deltaV).toFixed(2) +
			(this.p0[1] === 0
				? ""
				: " (" + Number((100 * deltaV) / this.p0[1]).toFixed(2) + "%) ") +
			"" +
			Math.abs(this.p1[0] - this.p0[0]) +
			" Bars";

		// calculate stem as midpoint of segment
		var midtickIdx = Math.floor((this.p0[0] + this.p1[0]) / 2),
			midV;
		if (
			Math.abs(this.p0[0] - this.p1[0]) > 1 &&
			Math.abs(this.p0[0] - this.p1[0]) < 20
		) {
			// because of math.floor, we may be grabbing a bar off of center,
			// so calculate price based on slope of trendline
			var midtickXpixel = stx.pixelFromTick(midtickIdx, panel.chart);
			var midtickYpixel = y0 + ((y1 - y0) / (x1 - x0)) * (midtickXpixel - x0);
			midV = this.valueFromPixel(midtickYpixel, panel, yAxis) || ymid;
		} else {
			midV = this.valueFromPixel(ymid, panel, yAxis);
		}

		this.callout.stem = {
			t: midtickIdx,
			v: midV
		};

		// render callout and text
		this.callout.renderText();
		this.callout.render(context);

		// paint the handle circles based on highlighting
		if (this.highlighted) {
			var p0Fill = this.highlighted == "p0" ? true : false;
			var p1Fill = this.highlighted == "p1" ? true : false;
			this.littleCircle(context, x0, y0, p0Fill);
			this.littleCircle(context, x1, y1, p1Fill);
		}
	};

	CIQ.Drawing.trendline.prototype.lineIntersection = function (
		tick,
		value,
		box,
		type
	) {
		// override type as segment to preserve lineIntersection functionality
		return CIQ.Drawing.BaseTwoPoint.prototype.lineIntersection.call(
			this,
			tick,
			value,
			box,
			"segment"
		);
	};

	CIQ.Drawing.trendline.prototype.intersected = function (tick, value, box) {
		// in case invalid drawing (such as from panel that no longer exists)
		if (!this.p0 || !this.p1) return null;

		// call and store intersection methods on both callout and segment
		var calloutIntersected = this.callout.intersected(tick, value, box);
		var segmentIntersected = CIQ.Drawing.segment.prototype.intersected.call(
			this,
			tick,
			value,
			box
		);

		// synchronize highlighting
		this.callout.highlighted = !!(calloutIntersected || segmentIntersected);
		//this.highlighted = segmentIntersected || calloutIntersected;

		if (segmentIntersected) {
			// If segment is highlighted, return as usual;
			return segmentIntersected;
		} else if (calloutIntersected) {
			// Otherwise, if callout is highlighted, move segment (callout will follow / rerender)
			return {
				action: "move",
				p0: CIQ.clone(this.p0),
				p1: CIQ.clone(this.p1),
				tick: tick, // save original tick
				value: this.valueOnDrawingAxis(tick, value) // save original value
			};
		}

		// neither are intersected
		return null;
	};

	/**
	 * Average Line drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.regression}
	 * @constructor
	 * @name  CIQ.Drawing.average
	 * @since 4.0.0
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.average = function () {
		this.name = "average";
	};
	CIQ.inheritsFrom(CIQ.Drawing.average, CIQ.Drawing.regression);
	CIQ.extend(
		CIQ.Drawing.average.prototype,
		{
			configs: CIQ.Drawing.regression.prototype.configs.concat("axisLabel"),
			measure: function () {
				var stx = this.stx;
				if (this.p0 && this.p1) {
					stx.setMeasure(0, false, this.p0[0], this.p1[0], true, this.name);
					var txt = [],
						html = "";
					if (this.active1) txt.push("1");
					if (this.active2) txt.push("2");
					if (this.active3) txt.push("3");
					if (txt.length) html = "&ensp;" + txt.join(", ") + " &sigma;";
					var mMeasure = (stx.drawingContainer || document).querySelector(
						".mMeasure"
					);
					var mSticky = stx.controls.mSticky;
					var mStickyInterior =
						mSticky && mSticky.querySelector(".mStickyInterior");
					if (mMeasure) mMeasure.innerHTML += html;
					if (mStickyInterior) {
						var lines = [];
						lines.push(CIQ.capitalize(this.name));
						lines.push(this.field || stx.defaultPlotField || "Close");
						lines.push(mStickyInterior.innerHTML + html);
						mStickyInterior.innerHTML = lines.join("<br>");
					}
				}
			},
			render: function (context) {
				var stx = this.stx;
				var panel = stx.panels[this.panelName];
				var yAxis = stx.getYAxisByField(panel, this.field);
				if (!panel || (this.field && !yAxis)) return;
				yAxis = yAxis || panel.yAxis;
				if (!this.p1) return;
				if (this.p0[0] < 0 || this.p1[0] < 0) return;
				var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
				var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
				if (x0 < panel.left && x1 < panel.left) return;
				if (x0 > panel.right && x1 > panel.right) return;

				var start = Math.min(this.p1[0], this.p0[0]);
				var end = Math.max(this.p1[0], this.p0[0]) + 1;
				var sumCloses = 0;
				var prices = [];
				var i, price;

				for (i = start; i < end; i++) {
					price = this.getYValue(i);
					if (price !== null) {
						sumCloses += price.transformed;
						prices.push(price);
					}
				}

				var validTicks = prices.length;
				if (!validTicks) return;

				var average = sumCloses / validTicks;
				var y = stx.pixelFromTransformedValue(average, panel, yAxis);
				var color = this.getLineColor();
				var params = {
					pattern: this.pattern,
					lineWidth: this.lineWidth
				};

				stx.plotLine(x0, x1, y, y, color, "segment", context, panel, params);
				stx.plotLine(
					x0,
					x0,
					y - 20,
					y + 20,
					color,
					"segment",
					context,
					panel,
					params
				);
				stx.plotLine(
					x1,
					x1,
					y - 20,
					y + 20,
					color,
					"segment",
					context,
					panel,
					params
				);

				function formatPrice(price, yAxis) {
					if (yAxis && yAxis.priceFormatter)
						price = yAxis.priceFormatter(stx, panel, price);
					else price = stx.formatYAxisPrice(price, panel, null, yAxis);
					return price;
				}

				if (this.axisLabel && !this.highlighted && !this.penDown) {
					if (
						(x0 >= panel.chart.left && x0 <= panel.chart.right) ||
						(x1 >= panel.chart.left && x1 <= panel.chart.right)
					) {
						stx.endClip();
						stx.createYAxisLabel(
							panel,
							formatPrice(average, yAxis),
							y,
							color,
							null,
							context,
							yAxis
						);
						stx.startClip(panel.name);
					}
				}

				if (this.active1 || this.active2 || this.active3) {
					var sumStddev = 0;
					for (i = 0; i < validTicks; i++) {
						price = prices[i];
						sumStddev += Math.pow(price.transformed - average, 2);
					}
					var stddev = Math.sqrt(sumStddev / validTicks);
					var parameters = {
						context: context,
						formatPrice: formatPrice,
						panel: panel,
						points: {
							0: { x: x0, v: average },
							1: { x: x1, v: average }
						},
						stddev: stddev,
						yAxis: yAxis
					};

					this.lines = {};

					if (this.active1) {
						this.renderStddev("1", "p", parameters);
						this.renderStddev("1", "n", parameters);
					}

					if (this.active2) {
						this.renderStddev("2", "p", parameters);
						this.renderStddev("2", "n", parameters);
					}

					if (this.active3) {
						this.renderStddev("3", "p", parameters);
						this.renderStddev("3", "n", parameters);
					}
				}

				if (!this.highlighted) {
					this.pixelX = [x0, x1];
					this.pixelY = [y, y];
				} else {
					var p0Fill = this.highlighted == "p0" ? true : false;
					var p1Fill = this.highlighted == "p1" ? true : false;
					this.littleCircle(context, x0, y, p0Fill);
					this.littleCircle(context, x1, y, p1Fill);
				}
			},
			reconstruct: function (stx, obj) {
				this.axisLabel = obj.al;
				CIQ.Drawing.regression.prototype.reconstruct.call(this, stx, obj);
			},
			serialize: function () {
				var obj = CIQ.Drawing.regression.prototype.serialize.call(this);
				obj.al = this.axisLabel;
				return obj;
			}
		},
		true
	);

	/**
	 * Quadrant Lines drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.speedarc}
	 * @constructor
	 * @name  CIQ.Drawing.quadrant
	 * @since 2016-09-19
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.quadrant = function () {
		this.name = "quadrant";
	};
	CIQ.inheritsFrom(CIQ.Drawing.quadrant, CIQ.Drawing.regression);
	CIQ.extend(
		CIQ.Drawing.quadrant.prototype,
		{
			configs: ["color", "fillColor", "lineWidth", "pattern"],
			copyConfig: function () {
				var cvp = this.stx.currentVectorParameters;
				this.color = cvp.currentColor;
				this.fillColor = cvp.fillColor;
				this.lineWidth = cvp.lineWidth;
				this.pattern = cvp.pattern;
			},
			// turn off cvp controls used by regression
			$controls: [],
			render: function (context) {
				var stx = this.stx;
				var panel = stx.panels[this.panelName];
				var yAxis = stx.getYAxisByField(panel, this.field);
				if (!panel || (this.field && !yAxis)) return;
				if (!this.p1) return;
				var x0 = stx.pixelFromTick(this.p0[0], panel.chart);
				var x1 = stx.pixelFromTick(this.p1[0], panel.chart);
				if (x0 < panel.left && x1 < panel.left) return;
				if (x0 > panel.right && x1 > panel.right) return;

				var highest = null,
					lowest = null;
				for (
					var i = Math.max(0, Math.min(this.p1[0], this.p0[0]));
					i <=
					Math.min(
						stx.chart.dataSet.length - 1,
						Math.max(this.p1[0], this.p0[0])
					);
					i++
				) {
					var price = this.getYValue(i);
					if (price !== null) {
						if (highest === null || price.transformed > highest) {
							highest = price.transformed;
						}
						if (lowest === null || price.transformed < lowest) {
							lowest = price.transformed;
						}
					}
				}

				var y0 = stx.pixelFromTransformedValue(highest, panel, yAxis);
				var y25 = stx.pixelFromTransformedValue(
					(3 * highest + lowest) / 4,
					panel,
					yAxis
				);
				var y33 = stx.pixelFromTransformedValue(
					(2 * highest + lowest) / 3,
					panel,
					yAxis
				);
				var y50 = stx.pixelFromTransformedValue(
					(highest + lowest) / 2,
					panel,
					yAxis
				);
				var y66 = stx.pixelFromTransformedValue(
					(highest + 2 * lowest) / 3,
					panel,
					yAxis
				);
				var y75 = stx.pixelFromTransformedValue(
					(highest + 3 * lowest) / 4,
					panel,
					yAxis
				);
				var y100 = stx.pixelFromTransformedValue(lowest, panel, yAxis);

				this.p0[1] = 0;
				this.p1[1] = false; // only used for setMeasure

				var trendLineColor = this.getLineColor();

				var fillColor = this.fillColor;
				if (fillColor == "auto" || CIQ.isTransparent(fillColor))
					fillColor = stx.defaultColor;
				context.fillStyle = fillColor;

				var parameters = {
					pattern: this.pattern,
					lineWidth: this.lineWidth
				};
				stx.plotLine(
					x0,
					x1,
					y0,
					y0,
					trendLineColor,
					"segment",
					context,
					panel,
					parameters
				);
				stx.plotLine(
					x0,
					x1,
					y100,
					y100,
					trendLineColor,
					"segment",
					context,
					panel,
					parameters
				);
				if (this.name == "quadrant") {
					stx.plotLine(
						x0,
						x1,
						y25,
						y25,
						trendLineColor,
						"segment",
						context,
						panel,
						parameters
					);
					stx.plotLine(
						x0,
						x1,
						y75,
						y75,
						trendLineColor,
						"segment",
						context,
						panel,
						parameters
					);
				} else if (this.name == "tirone") {
					stx.plotLine(
						x0,
						x1,
						y33,
						y33,
						trendLineColor,
						"segment",
						context,
						panel,
						parameters
					);
					stx.plotLine(
						x0,
						x1,
						y66,
						y66,
						trendLineColor,
						"segment",
						context,
						panel,
						parameters
					);
				}
				stx.plotLine(
					x0,
					x0,
					y0,
					y100,
					trendLineColor,
					"segment",
					context,
					panel,
					parameters
				);
				stx.plotLine(
					x1,
					x1,
					y0,
					y100,
					trendLineColor,
					"segment",
					context,
					panel,
					parameters
				);
				stx.plotLine(
					x0,
					x1,
					y50,
					y50,
					trendLineColor,
					"segment",
					context,
					panel,
					CIQ.extend(parameters, { opacity: this.name == "tirone" ? 0.2 : 1 })
				);

				context.globalAlpha = 0.1;
				context.beginPath();
				context.fillRect(x0, y0, x1 - x0, y100 - y0);
				if (this.name == "quadrant") {
					context.fillRect(x0, y25, x1 - x0, y75 - y25);
				} else if (this.name == "tirone") {
					context.fillRect(x0, y33, x1 - x0, y66 - y33);
				}
				context.globalAlpha = 1;

				if (!this.highlighted) {
					//move points
					this.pixelX = [x0, x1];
					this.pixelY = [y0, y100, y50];
					if (this.name === "quadrant") this.pixelY.push(y25, y75);
					if (this.name === "tirone") this.pixelY.push(y33, y66);
				} else {
					var p0Fill = this.highlighted == "p0" ? true : false;
					var p1Fill = this.highlighted == "p1" ? true : false;
					this.littleCircle(context, x0, y50, p0Fill);
					this.littleCircle(context, x1, y50, p1Fill);
				}
			},
			intersected: function (tick, value, box) {
				const { pixelX, pixelY } = this;
				if (!pixelX || !pixelY) return null;

				const repositionIntersection = this.repositionIntersection(tick, value);
				if (repositionIntersection) return repositionIntersection;

				// check for point intersection
				for (let pt = 0; pt < 2; pt++) {
					if (this.pointIntersection(pixelX[pt], pixelY[2], box, true)) {
						this.highlighted = "p" + pt;
						return {
							action: "drag",
							point: "p" + pt
						};
					}
				}

				const lines = [];
				pixelX.forEach((x) => {
					lines.push({ p0: [x, pixelY[0]], p1: [x, pixelY[1]] });
				});
				pixelY.forEach((y) => {
					lines.push({ p0: [pixelX[0], y], p1: [pixelX[1], y] });
				});

				const anyIntersected = lines.some(({ p0, p1 }) => {
					return this.lineIntersection(
						tick,
						value,
						box,
						this.name,
						p0,
						p1,
						true
					);
				});

				if (anyIntersected) {
					this.highlighted = true;
					return {
						action: "move",
						p0: CIQ.clone(this.p0),
						p1: CIQ.clone(this.p1),
						tick: tick,
						value: this.valueOnDrawingAxis(tick, value)
					};
				}
				return null;
			},
			reconstruct: function (stx, obj) {
				this.stx = stx;
				this.color = obj.col;
				this.fillColor = obj.fc;
				this.panelName = obj.pnl;
				this.pattern = obj.ptrn;
				this.lineWidth = obj.lw;
				this.d0 = obj.d0;
				this.d1 = obj.d1;
				this.tzo0 = obj.tzo0;
				this.tzo1 = obj.tzo1;
				this.field = obj.fld;
				this.adjust();
			},
			serialize: function () {
				return {
					name: this.name,
					pnl: this.panelName,
					col: this.color,
					fc: this.fillColor,
					ptrn: this.pattern,
					lw: this.lineWidth,
					d0: this.d0,
					d1: this.d1,
					tzo0: this.tzo0,
					tzo1: this.tzo1,
					fld: this.field
				};
			}
		},
		true
	);

	/**
	 * Tirone Levels drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.quadrant}
	 * @constructor
	 * @name  CIQ.Drawing.tirone
	 * @since 2016-09-19
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.tirone = function () {
		this.name = "tirone";
	};
	CIQ.inheritsFrom(CIQ.Drawing.tirone, CIQ.Drawing.quadrant);

	/**
	 * Volume profile drawing tool.
	 *
	 * It inherits its properties from {@link CIQ.Drawing.regression}
	 * @constructor
	 * @name CIQ.Drawing.volumeprofile
	 * @since 8.4.0
	 * @version ChartIQ Advanced Package
	 */
	CIQ.Drawing.volumeprofile = function () {
		this.name = "volumeprofile";
	};
	CIQ.inheritsFrom(CIQ.Drawing.volumeprofile, CIQ.Drawing.regression);
	CIQ.extend(
		CIQ.Drawing.volumeprofile.prototype,
		{
			configs: ["color", "fillColor", "lineWidth", "pattern", "parameters"],
			copyConfig: function () {
				this.color = this.stx.currentVectorParameters.currentColor;
				this.fillColor = this.stx.currentVectorParameters.fillColor;
				this.lineWidth = this.stx.currentVectorParameters.lineWidth;
				this.pattern = this.stx.currentVectorParameters.pattern;
				this.priceBuckets =
					this.stx.currentVectorParameters.volumeProfile.priceBuckets;
			},
			// turn off cvp controls used by regression
			$controls: [],
			// prevent field value ("Close") from showing up on sticky
			getYValue: null,
			isAllowed: function (stx, field) {
				return (
					!field ||
					typeof stx.getFirstLastDataRecord(stx.chart.dataSegment, field)[
						field
					] === "object"
				);
			},
			render: function (context) {
				const { stx } = this;
				const { dataSet } = stx.chart;
				const panel = stx.panels[this.panelName];
				let yAxis = stx.getYAxisByField(panel, this.field);
				if (!panel || (this.field && !yAxis)) return;
				if (!this.p1) return;
				yAxis = yAxis || panel.yAxis;
				const x0 = stx.pixelFromTick(this.p0[0], panel.chart);
				const x1 = stx.pixelFromTick(this.p1[0], panel.chart);
				if (x0 < panel.left && x1 < panel.left) return;
				if (x0 > panel.right && x1 > panel.right) return;
				const { flipped } = yAxis;

				let highest = null;
				let lowest = null;

				const start = Math.min(this.p1[0], this.p0[0]);
				const end = Math.max(this.p1[0], this.p0[0]);

				for (let i = start; i <= end; i++) {
					let quote = dataSet[i];
					if (quote[this.field]) quote = quote[this.field];
					if (!quote) continue;

					const { High, Low } = quote;
					if (highest === null || High > highest) highest = High;
					if (lowest === null || Low < lowest) lowest = Low;
				}

				const { priceBuckets } = this;
				const interval = (highest - lowest) / priceBuckets;
				const priceVolArray = [];

				if (flipped) [highest, lowest] = [lowest, highest];
				const direction = flipped ? -1 : 1;

				for (
					let rangeStart = lowest, i = 0;
					i <= priceBuckets;
					rangeStart += interval * direction, i++
				) {
					priceVolArray.push([rangeStart, 0]);
					if (lowest === highest) break;
				}

				let maxVolume = 0;

				for (let i = start; i <= end; i++) {
					let quote = dataSet[i];
					if (quote[this.field] || quote[this.field] === 0)
						quote = quote[this.field];
					if (!quote) continue;

					const { High, Low, Volume } = quote;
					if (!Volume && Volume !== 0) continue;
					const rangesWithVol = [];
					let rangeBottom = priceVolArray[0][0];
					let rangeTop = null;

					for (let j = 1; j < priceVolArray.length; j++) {
						rangeTop = priceVolArray[j][0];

						const lowFallsInRange = Low >= rangeBottom && Low <= rangeTop;
						const highFallsInRange = High >= rangeBottom && High <= rangeTop;
						const barEvelopesRange = Low < rangeBottom && High > rangeTop;

						if (lowFallsInRange || highFallsInRange || barEvelopesRange) {
							rangesWithVol.push(j);
						}

						rangeBottom = rangeTop;
					}

					if (rangesWithVol.length) {
						const perRangeVol = Volume / rangesWithVol.length;
						for (let j = 0; j < rangesWithVol.length; j++) {
							let newVol = (priceVolArray[rangesWithVol[j]][1] += perRangeVol);
							if (newVol > maxVolume) maxVolume = newVol;
						}
					}
				}

				const noVolume = maxVolume === 0 && priceVolArray.length > 1;
				if (noVolume) {
					stx.displayErrorAsWatermark(
						"chart",
						stx.translateIf("Not enough data to render the Volume Profile")
					);
				}

				const align = (val) => Math.round(val) + 0.5;
				const maxBarHeight = (end - start) * stx.layout.candleWidth;
				const barBottom = align(stx.pixelFromTick(start)) - 1; // -1 to align to *other* side
				const maxBarTop = align(barBottom + maxBarHeight);
				const midPoint = this.pixelFromValue(
					panel,
					start,
					lowest + (highest - lowest) / 2,
					yAxis
				);
				let prevBarTop = barBottom;
				let [rangeBottom] = priceVolArray[0]; // first entry contains no volume by design

				const trendLineColor = this.getLineColor();
				let { fillColor } = this;
				if (fillColor === "auto" || CIQ.isTransparent(fillColor)) {
					fillColor = stx.defaultColor;
				}
				context.fillStyle = fillColor;

				const plotParams = {
					pattern: this.pattern,
					lineWidth: this.lineWidth
				};

				let currentX = 0;
				let currentY = 0;
				const moveTo = (x, y) => ([currentX, currentY] = [x, y]);
				const plotTo = (x, y, moveOnly) => {
					if (!moveOnly) {
						stx.plotLine(
							currentX,
							x,
							currentY,
							y,
							trendLineColor,
							"segment",
							context,
							panel,
							plotParams
						);
					}

					[currentX, currentY] = [x, y];
				};

				if (this.highlighted || noVolume) {
					stx.plotLine(
						barBottom,
						maxBarTop,
						midPoint,
						midPoint,
						stx.defaultColor,
						"segment",
						context,
						panel,
						Object.assign({}, plotParams, { opacity: 0.3 })
					);
				}

				for (let i = 1; i < priceVolArray.length; i++) {
					const [rangeTop, rangeVolume] = priceVolArray[i];

					if (rangeVolume) {
						const barHeight = (rangeVolume * maxBarHeight) / maxVolume;
						const barTop = align(barBottom + barHeight);
						const rangeTopRaw = align(
							this.pixelFromValue(panel, start, rangeTop, yAxis)
						);
						const rangeBottomRaw = align(
							this.pixelFromValue(panel, start, rangeBottom, yAxis)
						);
						const rangeTopPixel = Math.max(rangeTopRaw, yAxis.top);
						const rangeBottomPixel = Math.min(rangeBottomRaw, yAxis.bottom);
						const rangeTopTruncated = rangeTopRaw !== rangeTopPixel;
						const rangeBottomTruncated = rangeBottomRaw !== rangeBottomPixel;
						const barIsInFrame =
							rangeTopPixel <= yAxis.bottom && rangeBottomPixel >= yAxis.top;

						if (barIsInFrame) {
							if (!this.highlighted) context.globalAlpha = 0.3;
							moveTo(barBottom, rangeBottomPixel);
							plotTo(barBottom, rangeTopPixel);
							plotTo(barTop, rangeTopPixel, rangeTopTruncated);
							plotTo(barTop, rangeBottomPixel);

							if (barTop > prevBarTop) {
								plotTo(prevBarTop, rangeBottomPixel, rangeBottomTruncated);
							}

							context.globalAlpha = 0.2;
							context.fillRect(
								barBottom,
								rangeTopPixel,
								barTop - barBottom,
								rangeBottomPixel - rangeTopPixel
							);
							context.globalAlpha = 1;
						}

						prevBarTop = barTop;
					} else {
						prevBarTop = barBottom; // missing bar, reset to baseline
					}

					rangeBottom = rangeTop;
				}

				if (this.highlighted) {
					const p0Fill = this.highlighted === "p0";
					const p1Fill = this.highlighted === "p1";
					const reverse = this.p0[0] > this.p1[0]; // dragging to cause points to appear in opposite order
					const fillLeft = reverse ? p1Fill : p0Fill;
					const fillRight = reverse ? p0Fill : p1Fill;
					this.littleCircle(context, barBottom, midPoint, fillLeft);
					this.littleCircle(context, maxBarTop, midPoint, fillRight);
				}

				this.pixelX = [barBottom, barBottom + maxBarHeight];
				this.pixelY = [
					this.pixelFromValue(panel, start, highest, yAxis),
					this.pixelFromValue(panel, start, lowest, yAxis),
					midPoint
				];

				this.p0[1] = 0;
				this.p1[1] = false; // only used for setMeasure
			},
			intersected: function (tick, value, box) {
				const { p0, p1, stx } = this;
				if (!p0 || !p1) return null; // in case invalid drawing (such as from panel that no longer exists)
				const [, , midPoint] = this.pixelY || [];
				if (midPoint === undefined) return;

				const repositionIntersection = this.repositionIntersection(tick, value);
				if (repositionIntersection) return repositionIntersection;

				for (const [i, [x]] of [
					[0, p0],
					[1, p1]
				]) {
					if (
						this.pointIntersection(stx.pixelFromTick(x), midPoint, box, true)
					) {
						this.highlighted = "p" + i;
						return {
							action: "drag",
							point: "p" + i
						};
					}
				}

				if (this.boxIntersection(tick, value, box)) {
					this.highlighted = true;
					return {
						action: "move",
						p0: CIQ.clone(this.p0),
						p1: CIQ.clone(this.p1),
						tick: tick,
						value: value
					};
				}
				return null;
			},
			reconstruct: function (stx, obj) {
				this.stx = stx;
				this.color = obj.col;
				this.fillColor = obj.fc;
				this.panelName = obj.pnl;
				this.pattern = obj.ptrn;
				this.lineWidth = obj.lw;
				this.d0 = obj.d0;
				this.d1 = obj.d1;
				this.tzo0 = obj.tzo0;
				this.tzo1 = obj.tzo1;
				this.field = obj.fld;
				this.priceBuckets = obj.pb;
				this.adjust();
			},
			serialize: function () {
				return {
					name: this.name,
					pnl: this.panelName,
					col: this.color,
					fc: this.fillColor,
					ptrn: this.pattern,
					lw: this.lineWidth,
					d0: this.d0,
					d1: this.d1,
					tzo0: this.tzo0,
					tzo1: this.tzo1,
					fld: this.field,
					pb: this.priceBuckets
				};
			}
		},
		true
	);

	/**
	 * Creates the Elliott Wave drawing tool.
	 *
	 * @property {array} points Contains a sub-array of ticks and values for each point.
	 * @property {array} pts Contains a sub-array of pixel positions for the (x, y) coordinates of
	 * 		a point and the (x, y) annotation origin point.
	 * @property {array} annotationPoints Contains an annotation for each point along the wave.
	 * 		The length of the wave is determined by the length of this array. Always starts with 0.
	 * @property {number} [dx=0] X-axis offset value away from the point that determines the
	 * 		x-coordinate origin of the annotation.
	 * @property {number} [dy=-20] Y-axis offset value away from the point that determines the
	 * 		y-coordinate origin of the annotation.
	 * @property {boolean} dragToDraw=false Sets the drawing mode to multi-point-draw rather than
	 * 		drag-to-draw. Elliott waves are multiple-point drawings; and so, are incompatible with
	 * 		dragging to draw points. See {@link CIQ.Drawing#dragToDraw}.
	 * @property {number} enclosedRadius The width of the largest text string enclosed in the
	 * 		wave annotations. By default `undefined`.
	 * 		See {@link CIQ.Drawing.elliottwave#calculateRadius}.
	 *
	 * @constructor
	 * @name CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 */
	CIQ.Drawing.elliottwave = function () {
		this.name = "elliottwave";
		this.lastPoint = 0;
		this.points = [];
		this.pts = [];
		this.dx = 0;
		this.dy = -20;
		this.dragToDraw = false;
		this.annotationPoints = [];
		this.edit = null;
	};

	CIQ.inheritsFrom(CIQ.Drawing.elliottwave, CIQ.Drawing.annotation);

	CIQ.Drawing.elliottwave.defaultTemplate = {
		impulse: ["I", "II", "III", "IV", "V"],
		corrective: ["A", "B", "C"],
		decoration: "enclosed",
		showLines: true
	};

	CIQ.Drawing.elliottwave.prototype.initializeSettings = function (stx) {
		stx.currentVectorParameters.waveParameters = CIQ.clone(
			CIQ.Drawing.elliottwave.defaultTemplate
		);
	};

	/**
	 * The initial configuration settings of the drawing.
	 *
	 * @memberof CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 * @private
	 */
	CIQ.Drawing.elliottwave.prototype.configs = [
		"color",
		"lineWidth",
		"lineColor",
		"pattern",
		"font",
		"waveParameters"
	];

	/**
	 * The query strings that are activated by the {@link CIQ.UI.DrawingSettings} component.
	 *
	 * @memberof CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 * @private
	 */
	CIQ.Drawing.elliottwave.prototype.$controls = [
		"br[cq-wave-parameters]",
		"cq-wave-parameters"
	];

	/**
	 * Initializes the drawing. Assigns the `waveParameters` object of
	 * {@link CIQ.ChartEngine#currentVectorParameters} to the current drawing instance.
	 *
	 * @param {CIQ.ChartEngine} stx A reference to the chart engine.
	 * @param {CIQ.ChartEngine.Panel} panel The panel that contains the drawing.
	 * @memberOf CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 */
	CIQ.Drawing.elliottwave.prototype.construct = function (stx, panel) {
		this.stx = stx;
		this.panelName = panel.name;
		var cvp = stx.currentVectorParameters;
		Object.assign(this, cvp.waveParameters);
	};

	/**
	 * Serializes the drawing to an object that can be restored with
	 * {@link CIQ.Drawing.elliottwave#reconstruct}. To store a drawing, convert the object returned
	 * by this function to a JSON string.
	 *
	 * @return {object} An object that contains the serialized state of the drawing.
	 * @memberOf CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 */
	CIQ.Drawing.elliottwave.prototype.serialize = function () {
		var points = {};
		for (var i = 0; i < this.points.length; i++) {
			points["d" + i] = this["d" + i];
			points["tzo" + i] = this["tzo" + i];
			points["v" + i] = this["v" + i];
		}

		points.annotations = this.annotationPoints.join(",");

		return Object.assign(
			{
				name: this.name,
				pnl: this.panelName,
				col: this.color,
				ptrn: this.pattern,
				lw: this.lineWidth,
				mxSeg: this.maxSegments,
				show: this.showLines,
				decor: this.decoration,
				dx: this.dx,
				dy: this.dy,
				trend: this.trend,
				fld: this.field,
				fnt: CIQ.removeNullValues(
					CIQ.replaceFields(this.font, {
						style: "st",
						size: "sz",
						weight: "wt",
						family: "fl"
					})
				)
			},
			points
		);
	};

	/**
	 * Reconstructs the drawing from an object returned from {@link CIQ.Drawing.elliottwave#serialize}.
	 *
	 * @param {CIQ.ChartEngine} stx A reference to the chart engine.
	 * @param {object} obj The object that contains the serialized drawing.
	 * @memberOf CIQ.Drawing.elliottwave
	 *
	 * @since 7.4.0
	 * @since 8.4.0 Added `fld` property to `obj` parameter.
	 */
	CIQ.Drawing.elliottwave.prototype.reconstruct = function (stx, obj) {
		this.stx = stx;
		this.color = obj.col;
		this.panelName = obj.pnl;
		this.pattern = obj.ptrn;
		this.lineWidth = obj.lw;
		this.font = CIQ.replaceFields(obj.fnt, {
			st: "style",
			sz: "size",
			wt: "weight",
			fl: "family"
		});
		this.decoration = obj.decor;
		this.showLines = obj.show;
		this.dx = obj.dx;
		this.dy = obj.dy;
		this.trend = obj.trend;
		this.field = obj.fld;
		this.annotationPoints = obj.annotations.split(",");
		if (obj.decor === "enclosed")
			this.calculateRadius(stx.chart.tempCanvas.context);
		this.maxSegments = obj.mxSeg;
		this.reconstructPoints(obj);
		this.adjust();
	};

	/**
	 * Reconstructs the points of a wave and sets points so the drawing can be rendered.
	 *
	 * @param {object} obj The object passed into {@link CIQ.Drawing.elliottwave#reconstruct}.
	 * @memberof CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 * @private
	 */
	CIQ.Drawing.elliottwave.prototype.reconstructPoints = function (obj) {
		var panel = this.stx.panels[this.panelName];
		if (!panel) return;
		// this.points=[];
		for (var p = 0; p < this.annotationPoints.length; p++) {
			// var d=CIQ.strToDateTime(this.annotationPoints[p]);
			this["d" + p] = obj["d" + p];
			this["v" + p] = obj["v" + p];
			this["tzo" + p] = obj["tzo" + p];
			var dt = CIQ.strToDateTime(obj["d" + p]);
			var tick = this.stx.tickFromDate(dt, panel.chart);
			// d.setMinutes(d.getMinutes()+Number(this.annotationPoints[p+1])-d.getTimezoneOffset());
			this.points.push([tick, obj["v" + p]]);
		}
	};

	/**
	 * Calculates the width of the text enclosed in the annotation decorations. Iterates through the
	 * annotation points of the wave, measures the text of each annotation, and sets
	 * {@link CIQ.Drawing.elliottwave.enclosedRadius} to the width of the largest measurement.
	 *
	 * If you would like to customize the radius, override this function with another that sets the
	 * value of `enclosedRadius`.
	 *
	 * @param {external:CanvasRenderingContext2D} context The rendering context, which does the calculations.
	 * @memberof CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 */
	CIQ.Drawing.elliottwave.prototype.calculateRadius = function (context) {
		this.getFontString();
		context.font = this.fontString;
		var measure = 0;
		for (var p = 0; p < this.annotationPoints.length; p++) {
			var width = context.measureText(this.annotationPoints[p]).width;
			if (measure < width) measure = width;
		}
		this.enclosedRadius = measure;
	};

	/**
	 * Ensures that each successive data point is positioned correctly in the Elliott Wave progression.
	 * Called by {@link CIQ.ChartEngine#drawingClick}.
	 *
	 * @param {Number} tick The tick where the wave data point is to be positioned.
	 * @param {Number} value The value (price) indicated by the tick where the wave data point is to be positioned.
	 * @param {Number} pt Represents whether the previous line was a gain or loss wave. If equal to 1, represents
	 * 		the first segment of the wave, which always results in a return value of true.
	 * @return {Boolean} Indicates whether the current wave data point has been positioned correctly.
	 * @memberof CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 */
	CIQ.Drawing.elliottwave.prototype.check = function (tick, value, pt) {
		function isValidTrend(y) {
			for (var i = 2; i < y.length; i++) {
				if (
					Math.sign(y[i][1] - y[i - 1][1]) ==
					Math.sign(y[i - 1][1] - y[i - 2][1])
				)
					return false;
			}
			return true;
		}
		var prev = this.points[pt - 1];
		if (prev && tick <= prev[0]) return false;
		// setting first point is always true
		if (pt === 1 && this.points.length === 2) return true;
		var next = this.points[pt + 1];
		if (next && tick >= next[0]) return false;
		if (!isValidTrend(this.points)) return false;
		return true;
	};

	/**
	 * Renders the movement when the user moves the drawing.
	 *
	 * @param {external:CanvasRenderingContext2D} context The canvas context in which to render the moving drawing.
	 * @param {Number} tick The tick to which the drawing is being moved.
	 * @param {Number} value The value to which the drawing is being moved.
	 * @memberof CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 */
	CIQ.Drawing.elliottwave.prototype.move = function (context, tick, value) {
		this.copyConfig();
		this.points[this.lastPoint + 1] = [tick, value];
		this.render(context);
	};

	/**
	 * Resets the points of the drawing when the periodicity changes or the underlying ticks change
	 * (either from pagination or from moving the points).
	 *
	 * @memberof CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 */
	CIQ.Drawing.elliottwave.prototype.adjust = function () {
		// If the drawing's panel doesn't exist then we'll check to see
		// whether the panel has been added. If not then there's no way to adjust
		var panel = this.stx.panels[this.panelName];
		if (!panel) return;
		for (var p = 0; this.maxSegments + 1 > p; p++) {
			var dt = this["d" + p];
			this.setPoint(p, dt, this["v" + p], panel.chart);
			this.points[p][0] = this.stx.tickFromDate(
				CIQ.strToDateTime(dt),
				panel.chart
			);
			this.points[p][1] = this["v" + p];
		}
	};

	/**
	 * Responds to click events on the drawing.
	 *
	 * @param {external:CanvasRenderingContext2D} context Canvas context in which to render the drawing.
	 * @param {Number} tick The tick where the click occurred.
	 * @param {Number} value The value where the click occurred.
	 * @memberof CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 */
	CIQ.Drawing.elliottwave.prototype.click = function (context, tick, value) {
		var panel = this.stx.panels[this.panelName];
		if (!panel) return;
		this.copyConfig();
		if (!this.penDown) {
			this.setPoint(0, tick, value, panel.chart);
			this.points.push(this.p0);
			this.penDown = true;
			this.segment = 0;
			this.lastPoint = 0;
			if (this.impulse)
				this.annotationPoints = this.annotationPoints.concat(this.impulse);
			if (this.corrective)
				this.annotationPoints = this.annotationPoints.concat(this.corrective);
			this.annotationPoints.unshift("0");
			if (this.decoration === "enclosed") this.calculateRadius(context);
			this.maxSegments = this.annotationPoints.length - 1;
			// will be reset on next click for now set here to avoid an additional check in every render loop
			this.trend = 1;
			return false;
		}
		if (this.accidentalClick(tick, value)) {
			this.penDown = true;
			return false;
		}

		if (this.check(tick, value, this.lastPoint + 1)) {
			this.lastPoint++;
			this.setPoint(this.lastPoint, tick, value, panel.chart);
			if (this.lastPoint === 1) {
				this.trend = Math.sign(this.v1 - this.v0);
			}
			this.segment++;

			if (this.segment >= this.maxSegments) {
				this.penDown = false;
				return true;
			}
		}
		return false;
	};

	/**
	 * Renders the wave on the chart.
	 *
	 * @param {external:CanvasRenderingContext2D} context The context in which the drawing is rendered.
	 * @memberof CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 */
	CIQ.Drawing.elliottwave.prototype.render = function (context) {
		var stx = this.stx;
		var panel = stx.panels[this.panelName];
		var yAxis = stx.getYAxisByField(panel, this.field);
		if (!panel || (this.field && !yAxis)) return;
		yAxis = yAxis || panel.yAxis;
		var annotationPoints = this.annotationPoints;
		var pattern = this.pattern
			? CIQ.borderPatternToArray(this.lineWidth, this.pattern)
			: [];
		this.getFontString();
		context.font = this.fontString;
		context.textAlign = "center";
		context.textBaseline = "middle";
		context.lineWidth = this.lineWidth;
		if (this.fontString !== this.lastFontString) this.calculateRadius(context);
		this.lastFontString = this.fontString;
		var color = this.getLineColor();
		context.fillStyle = context.strokeStyle = color;
		context.save();
		context.setLineDash(pattern);
		var dx = this.dx;
		var dy = this.dy;

		var points = this.points;
		var pts = this.pts;
		var justHighlights = !this.showLines && this.highlighted;
		//gather and set all pixel coordinates also used in intersection calculations
		var l = points.length,
			highlightIndexAboveNeighbors;
		if (this.penDown && this.segment) {
			highlightIndexAboveNeighbors = this.trend * ((l % 2) - 0.5) < 0;
			this.drawDropZone(
				context,
				points[l - 2][1],
				yAxis[highlightIndexAboveNeighbors ? "high" : "low"],
				points[l - 2][0]
			);
		} else if (
			typeof this.highlighted === "string" &&
			stx.repositioningDrawing
		) {
			var highlightIndex = parseInt(
				this.highlighted.substring(1, this.highlighted.length),
				10
			);
			highlightIndexAboveNeighbors =
				this.trend * ((highlightIndex % 2) - 0.5) > 0;
			var pointToLeft = points[highlightIndex - 1],
				pointToRight = points[highlightIndex + 1];
			var dragY = highlightIndex > 0 ? pointToLeft[1] : pointToRight[1];
			if (pointToRight)
				dragY = Math[highlightIndexAboveNeighbors ? "max" : "min"](
					dragY,
					pointToRight[1]
				);
			this.drawDropZone(
				context,
				dragY,
				yAxis[highlightIndexAboveNeighbors ? "high" : "low"],
				pointToLeft ? pointToLeft[0] : null,
				pointToRight ? pointToRight[0] : null
			);
		}
		for (var p = 0; p < l; p++) {
			var last = points[p];
			var xx = stx.pixelFromTick(last[0], panel.chart);
			var yy = this.pixelFromValue(
				panel,
				last[0],
				last[1],
				stx.getYAxisByField(panel, this.field)
			);
			pts[p] = [xx, yy];
		}
		p = 0;

		if (this.showLines || justHighlights) {
			context.beginPath();
			if (justHighlights) context.globalAlpha = 0.3;
			for (; p < pts.length; p++) {
				context.lineTo(pts[p][0], pts[p][1]);
			}
			context.stroke();
			p = 0;
		}

		// Reset for Enclosed Annnotations
		context.restore();
		// Has to be a separate loop otherwise you have a line coming from the center point of the enclosed decoration
		// and your annotations have the oppacity of 0.3 when showLines is false
		for (; p < l; p++) {
			var pdx = p % 2 ? dx : -dx;
			var pdy = p % 2 ? dy : -dy;
			// Places the annotation above or below the based on wave trend
			pdx *= this.trend;
			pdy *= this.trend;
			if (yAxis.flipped) {
				pdx *= -1;
				pdy *= -1;
			}
			var pt = pts[p];
			var x = (pt[2] = pt[0] + pdx);
			var y = (pt[3] = pt[1] + pdy);
			var radius = this.enclosedRadius || 8;
			var content = annotationPoints[p];
			if (this.decoration === "parentheses") content = "(" + content + ")";
			context.fillText(content, x, y);
			if (this.decoration === "enclosed") {
				context.beginPath();
				context.arc(x, y, radius, 0, 2 * Math.PI, false);
				context.stroke();
			}
			if (this.highlighted) {
				context.save();
				this.littleCircle(
					context,
					this.pts[p][0],
					this.pts[p][1],
					this.highlighted === "p" + p
				);
				context.restore();
			}
		}
	};

	/**
	 * Repositions the drawing on drag (user moves an individual point of the drawing) or move
	 * (user moves the whole drawing) interactions.
	 *
	 * @param {external:CanvasRenderingContext2D} context The canvas context on which to render the drawing.
	 * @param {Object} repositioner The object containing data on how to reposition the drawing.
	 * @param {Number} tick The tick to which the drawing is repositioned.
	 * @param {Number} value The value to which the drawing is repositioned.
	 * @memberof CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 */
	CIQ.Drawing.elliottwave.prototype.reposition = function (
		context,
		repositioner,
		tick,
		value
	) {
		if (!repositioner) return;
		var panel = this.stx.panels[this.panelName];
		var tickDiff = repositioner.tick - tick;
		var valueDiff = repositioner.value - value;
		if (repositioner.action === "move") {
			for (var p = 0; repositioner.points.length > p; p++) {
				var pt = repositioner.points[p];
				this.setPoint(p, pt[0] - tickDiff, pt[1] - valueDiff, panel.chart);
				this.points[p] = [pt[0] - tickDiff, pt[1] - valueDiff];
			}
		}
		if (repositioner.action === "drag") {
			var point = repositioner.point;
			var points = this.points;
			points[point] = [tick, value];
			if (this.check(tick, value, point)) {
				// if(this.check(points[point], points[point+1], point)) {
				this.setPoint(point, tick, value, panel.chart);
				// }
			}
			// else this.points[point]=this["p"+point];
		}
		this.render(context);
	};

	/**
	 * Detects when the wave drawing has been intersected at either a point or the segments of the wave.
	 *
	 * @param {Number} tick The tick under the mouse cursor.
	 * @param {Number} value The value under the mouse cursor.
	 * @param {Object} box A rectangular area around the mouse cursor.
	 * @memberof CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 */
	CIQ.Drawing.elliottwave.prototype.intersected = function (tick, value, box) {
		if (!this.p0 || !this.p1) return null;
		var positioning;

		for (var i = 0; this.points.length > i; i++) {
			var pt = this.points[i];
			if (this.pointIntersection(pt[0], pt[1], box)) {
				this.highlighted = "p" + i;
				return {
					action: "drag",
					point: i,
					tick: tick,
					value: this.valueOnDrawingAxis(tick, value)
				};
			}

			if (
				this.points[i + 1] &&
				this.lineIntersection(
					tick,
					value,
					box,
					"segment",
					pt,
					this.points[i + 1]
				)
			) {
				this.highlighted = true;
				// This object will be used for repositioning
				positioning = {
					action: "move",
					points: CIQ.clone(this.points),
					tick: tick, // save original tick
					value: this.valueOnDrawingAxis(tick, value) // save original value
				};
			}
		}
		return positioning;
	};

	/**
	 * Displays the following:
	 * - The value at the last point in the drawing or at the drawing cursor position minus the value at the original wave point
	 * - The percentage change: (value at the last point or drawing cursor position - the value at the original wave point) / value at the original wave point
	 * - Number of data points included in the wave drawing
	 *
	 * @memberof CIQ.Drawing.elliottwave
	 * @since 7.4.0
	 */
	CIQ.Drawing.elliottwave.prototype.measure = function () {
		if (this.points.length >= 2) {
			var points = this.points;
			this.stx.setMeasure(
				points[0][1],
				points[points.length - 1][1],
				points[0][0],
				points[points.length - 1][0],
				true
			);
			var mSticky = this.stx.controls.mSticky;
			var mStickyInterior =
				mSticky && mSticky.querySelector(".mStickyInterior");
			if (mStickyInterior) {
				var lines = [];
				lines.push(CIQ.capitalize("Elliott Wave"));
				if (this.getYValue)
					lines.push(this.field || this.stx.defaultPlotField || "Close");
				lines.push(mStickyInterior.innerHTML);
				mStickyInterior.innerHTML = lines.join("<br>");
			}
		}
	};

	/**
	 * @private
	 */
	CIQ.Drawing.printProjection = function (self, projection, tmpHist) {
		var nd = projection.arr;
		if (nd.length > 1) {
			var dt = nd[0][0];
			var maxTicks = Math.round(self.chart.maxTicks * 0.75);
			for (var i = 1; i < nd.length; i++) {
				var dt0 = nd[i - 1][0];
				var dt1 = nd[i][0];

				// Figure length in days
				var d = CIQ.strToDateTime(dt0);
				var m1 = CIQ.strToDateTime(dt1).getTime();
				var iter = self.standardMarketIterator(d);
				var l = 0;
				while (d.getTime() < m1) {
					d = iter.next();
					l += 1;
				}
				// Find beginning position in existing data set
				var m = CIQ.strToDateTime(dt0).getTime();
				var tick;
				if (m > CIQ.strToDateTime(tmpHist[tmpHist.length - 1].Date).getTime()) {
					// This can only happen if the projection is drawn before intraday tick arrives
					tick = tmpHist.length - 1;
					l += 1;
				} else {
					for (tick = tmpHist.length - 1; tick >= 0; tick--) {
						if (m <= CIQ.strToDateTime(tmpHist[tick].Date).getTime()) break;
					}
				}

				var v = {
					x0: 0,
					x1: l,
					y0: tmpHist[tick].Close,
					y1: nd[i][1]
				};

				// Iterate, calculate prices and append to data set
				dt = CIQ.strToDateTime(dt0);
				iter = self.standardMarketIterator(dt);
				var first = false;
				for (var t = 0; t <= l; t++) {
					if (!first) {
						first = true;
					} else {
						dt = iter.next();
					}
					if (dt.getTime() <= tmpHist[tmpHist.length - 1].DT.getTime())
						continue;

					var y = CIQ.yIntersection(v, t);
					if (!y) y = 0;
					var price = Math.round(y * 10000) / 10000;
					if (price === 0) price = nd[i][1];

					var prices = {
						Date: CIQ.yyyymmddhhmmssmmm(dt),
						DT: dt,
						Open: price,
						Close: price,
						High: price,
						Low: price,
						Volume: 0,
						Adj_Close: price,
						Split_Close: price,
						projection: true
					};
					if (self.layout.interval == "minute") if (maxTicks-- < 0) break;
					tmpHist[tmpHist.length] = prices;
				}
			}
		}
	};
}

};


let __js_advanced_equationsAdvanced_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.computeEquationChart) {
	console.error(
		"equationsAdvanced feature requires first activating equations feature."
	);
} else {
	/**
	 * Extracts symbols from an equation.  An equation can consist of symbols and the following operators: +-/*%()
	 * PEMDAS order is followed.  Additionally, symbols can be enclosed in brackets [] to treat them as literal non-parseables.
	 * @param {string} equation The equation to parse (e.g., IBM+GE)
	 * @return  {object} Parsed equation, {equation: [formatted equation], symbols: [array of symbols found in the equation]}
	 * @memberOf CIQ
	 * @version ChartIQ Advanced Package
	 */
	CIQ.formatEquation = function (equation) {
		var eq = "";
		var syms = [];
		var thisSym = "";
		var lockSymbol = false;
		for (var j = 1; j < equation.length; j++) {
			var c = equation[j]; //.toUpperCase();  // let's not capitalize automatically
			if (c == "[" && !lockSymbol) {
				lockSymbol = true;
			} else if (c == "]" && lockSymbol) {
				lockSymbol = false;
				if (thisSym !== "") {
					syms.push(thisSym);
					eq += "[" + thisSym + "]";
				}
				thisSym = "";
			} else if (lockSymbol) {
				thisSym += c;
			} else if (
				c == "+" ||
				c == "-" ||
				c == "*" ||
				c == "/" ||
				c == ":" ||
				c == "%" ||
				c == "(" ||
				c == ")"
			) {
				if (thisSym !== "" && isNaN(thisSym)) {
					syms.push(thisSym);
					eq += "[" + thisSym + "]";
				} else {
					eq += thisSym;
				}
				if (c == ":") c = "/";
				eq += c;
				thisSym = "";
			} else if (c != " ") {
				thisSym += c;
			}
		}
		if (thisSym !== "" && isNaN(thisSym)) {
			syms.push(thisSym);
			eq += "[" + thisSym + "]";
		} else {
			eq += thisSym;
		}
		return { equation: eq, symbols: syms };
	};

	/**
	 * Extracts symbols from an equation and fetches the quotes for them.
	 * @param {object} params Parameters used for the fetch
	 * @param  {function} cb Callback function once all quotes are fetched
	 * @memberOf CIQ
	 * @version ChartIQ Advanced Package
	 */
	CIQ.fetchEquationChart = function (params, cb) {
		var formEq = CIQ.formatEquation(params.symbol);
		var syms = formEq.symbols;
		var arr = [];
		// jump through hoops with stx so that CIQ.clone doesn't choke on it
		var stx = params.stx;
		params.stx = null;
		for (var i = 0; i < syms.length; i++) {
			var newParams = CIQ.shallowClone(params);
			newParams.stx = stx;
			newParams.symbol = syms[i];
			newParams.symbolObject = { symbol: syms[i] };
			arr.push(newParams);
		}
		params.stx = stx;
		// multi fetch the symbols we need
		stx.quoteDriver.multiFetch(arr, function (results) {
			var map = {};
			params.loadMoreReplace = true;
			var attribution = { charge: 0 };
			// error on any symbol then error out. Otherwise construct map.
			for (var i = 0; i < results.length; i++) {
				var result = results[i];
				if (result.dataCallback.error) {
					cb({ error: result.dataCallback.error });
					return;
				}
				map[result.params.symbol] = result.dataCallback.quotes;
				params.loadMoreReplace =
					params.loadMoreReplace && result.params.loadMoreReplace;
				params.moreToLoad =
					params.moreToLoad || result.dataCallback.moreAvailable;
				var dataCallbackAttribution = result.dataCallback.attribution;
				if (dataCallbackAttribution) {
					if (dataCallbackAttribution.charge)
						attribution.charge += dataCallbackAttribution.charge;
					attribution.source = dataCallbackAttribution.source;
					if (attribution.exchange === undefined)
						attribution.exchange = dataCallbackAttribution.exchange;
					else if (attribution.exchange != dataCallbackAttribution.exchange)
						attribution.exchange = ""; // mixed exchanges
				}
			}
			// compute the result and then pass to the response
			if (arr.length || !(params.loadMore || params.update)) {
				try {
					var equQuotes = CIQ.computeEquationChart(formEq.equation, map);
					cb({
						quotes: equQuotes,
						moreAvailable: params.moreToLoad,
						attribution: attribution
					});
				} catch (e) {
					var error = { error: "Invalid equation: " + formEq.equation };
					if (e.name && e.name == "NoException") error.suppressAlert = true;
					cb(error);
				}
			}
		});
	};
}

};


let __js_advanced_highPerformanceMarkers_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Marker) {
	console.error(
		"highPerformanceMarkers feature requires first activating markers feature."
	);
} else if (!CIQ.Marker.Performance) {
	/**
	 * Removes a high performance canvas marker from the `markerHelper.domMarkers` Array.
	 * We use this instead of {@link CIQ.ChartEngine#removeFromHolder} because that will remove the whole marker instead of just removing the DOM node.
	 *
	 * @private
	 * @since
	 * - 7.1.0
	 * - 7.2.0 Scheduled for deprecation in a future release. See {@link CIQ.Marker.Performance#remove} instead.
	 */
	CIQ.ChartEngine.prototype.removeDOMMarker = function (marker) {
		console.warn(
			"CIQ.ChartEngine#removeDOMMarker is scheduled for deprecation in a future release\n Please use CIQ.Marker.Performance#remove instead."
		);
		CIQ.Marker.Performance.prototype.removeDOMMarker.call(
			marker.params.node,
			marker
		);
	};

	/**
	 * <span class="animation">Animation Loop</span>
	 *
	 * Iterates through all [high performance canvas]{@link CIQ.Marker.Performance} markers and draws them on the canvas.
	 *
	 * See {@tutorial Markers} tutorials for additional implementation instructions.
	 *
	 * @memberOf CIQ.ChartEngine
	 * @since
	 * - 7.1.0
	 * - 7.2.0 Scheduled for deprecation in a future release. See {@link CIQ.Marker.Performance.drawMarkers} instead.
	 */
	CIQ.ChartEngine.prototype.drawMarkers = function () {
		console.warn(
			"CIQ.ChartEngine#drawMarkers is scheduled for deprecation in a future release\n Please use CIQ.Marker.Performance.drawMarkers instead."
		);
		CIQ.Marker.Performance.drawMarkers(this);
	};

	/**
	 * Calculates the styles used in drawing [high performance canvas]{@link CIQ.Marker.Performance} markers.
	 * We use this method instead of other chart styling methods because markers expect styles to cascade down and then be calculated.
	 * Other style methods are for adding or calculating a single property.
	 * This will save styles to the engine's style object where they can be adjusted with {@link CIQ.ChartEngine#setStyle}.
	 *
	 * @memberof CIQ.ChartEngine
	 * @param {CIQ.Marker} marker The marker from which to compute the styles.
	 * @param {string} style Name to save to {@link CIQ.ChartEngine#styles}.
	 * @private
	 * @since
	 * - 7.1.0
	 * - 7.2.0 Scheduled for deprecation in a future release. See {@link CIQ.Marker.Performance.calculateMarkerStyles}.
	 */
	CIQ.ChartEngine.prototype.calculateMarkerStyles = function (marker, style) {
		console.warn(
			"CIQ.ChartEngine#calculateMarkerStyles is scheduled for deprecation in a future release\n Please use CIQ.Marker.Performance.calculateStyles instead."
		);
		CIQ.Marker.Performance.calculateMarkerStyles(this, marker, style);
	};

	/**
	 * Draws a circle for a [high performance canvas]{@link CIQ.Marker.Performance} marker.
	 *
	 * @param {CIQ.Marker} marker
	 * @param {object} style
	 * @param {object} params
	 * @private
	 * @since
	 * - 7.1.0
	 * - 7.2.0 Scheduled for deprecation in a future release. See {@link CIQ.Marker.Performance.drawCircleMarker}.
	 */
	CIQ.ChartEngine.prototype.drawCircleMarker = function (
		marker,
		style,
		params
	) {
		console.warn(
			"CIQ.ChartEngine#drawCircleMarker is scheduled for deprecation in a future release\n Please use CIQ.Marker.Performance.drawCircleMarker instead."
		);
		CIQ.Marker.Performance.drawCircleMarker(marker, style, params);
	};

	/**
	 * Draws a square for a [high performance canvas]{@link CIQ.Marker.Performance} marker.
	 *
	 * @param {CIQ.Marker} marker
	 * @param {object} style
	 * @param {object} params
	 * @private
	 * @since
	 * - 7.1.0
	 * - 7.2.0 Scheduled for deprecation in a future release. See {@link CIQ.Marker.Performance.drawSquareMarker}.
	 */
	CIQ.ChartEngine.prototype.drawSquareMarker = function (
		marker,
		style,
		params
	) {
		console.warn(
			"CIQ.ChartEngine#drawSquareMarker is scheduled for deprecation in a future release\n Please use CIQ.Marker.Performance.drawSquareMarker instead."
		);
		CIQ.Marker.Performance.drawSquareMarker(marker, style, params);
	};

	/**
	 * Draws callout (rectangular) a [high performance canvas]{@link CIQ.Marker.Performance} marker.
	 *
	 * @param {CIQ.Marker} marker
	 * @param {object} style
	 * @param {object} params
	 * @private
	 * @since
	 * - 7.1.0
	 * - 7.2.0 Scheduled for deprecation in a future release. See {@link CIQ.Marker.Performance.drawCalloutMarker}.
	 */
	CIQ.ChartEngine.prototype.drawCalloutMarker = function (
		marker,
		style,
		params
	) {
		console.warn(
			"CIQ.ChartEngine#drawCalloutMarker is scheduled for deprecation in a future release\n Please use CIQ.Marker.Performance.drawCalloutMarker instead."
		);
		CIQ.Marker.Performance.drawCalloutMarker(marker, style, params);
	};

	/**
	 * Draws a stem for a [high performance canvas]{@link CIQ.Marker.Performance} marker.
	 *
	 * @param {CIQ.Marker} marker
	 * @param {object} style
	 * @param {object} params
	 * @private
	 * @since
	 * - 7.1.0
	 * - 7.2.0 Scheduled for deprecation in a future release. See {@link CIQ.Marker.Performance.drawMarkerStem}.
	 */
	CIQ.ChartEngine.prototype.drawMarkerStem = function (marker, style, params) {
		console.warn(
			"CIQ.ChartEngine#drawMarkerStem is scheduled for deprecation in a future release\n Please use CIQ.Marker.Performance.drawMarkerStem instead."
		);
		CIQ.Marker.Performance.drawMarkerStem(marker, style, params);
	};

	/**
	 * Positions any markers that have DOM elements appended to the chart so that they follow their same canvas marker.
	 *
	 * @private
	 * @since
	 * - 7.1.0
	 * - 7.2.0 Scheduled for deprecation in a future release. See {@link CIQ.Marker.Performance.drawMarkers}.
	 */
	CIQ.ChartEngine.prototype.positionDOMMarkers = function () {
		console.warn(
			"CIQ.ChartEngine#positionDOMMarkers is scheduled for deprecation in a future release\n Please use CIQ.Marker.Performance.drawMarkers instead."
		);
		CIQ.Marker.Performance.drawMarkers(this);
	};

	/**
	 * Creates high performance canvas nodes that can be used with a {@link CIQ.Marker}.
	 *
	 * Use this class if you need to add hundreds or thousands of markers to a chart. When a
	 * marker is created, this class creates a node from the built-in template but does not attach
	 * the node to the DOM until you hover over the canvas drawing. Once you intersect the drawing,
	 * the node is appended and you can interact with it like other markers.
	 *
	 * The canvas draws the marker based on the classes that you append to the template (which
	 * come from `params.type` and `params.category`) being added to `stx-marker` class.
	 * See {@link CIQ.ChartEngine#calculateMarkerStyles} for more information.
	 *
	 * This class takes the same params as {@link CIQ.Marker.Simple} so that the appended DOM
	 * marker works the same. This means that you can reuse all of the default styles you've
	 * created for `CIQ.Marker.Simple` with `CIQ.Marker.Performance`. **Note:** If you do not pass
	 * in either a `headline` or a `story` or both, your marker will not create a pop-up display
	 * when the marker is selected.
	 *
	 * See the {@tutorial Markers} tutorial for additional implementation instructions.
	 *
	 * @param {Object} params Parameters to describe the marker.
	 * @param {string} params.type The marker type to be drawn.
	 * <br>Available options are:
	 * - "circle"
	 * - "square"
	 * - "diamond"
	 * - "callout"
	 * @param {string} [params.headline] The headline text to pop up when clicked.
	 * @param {string} [params.category] The category class to add to your marker.
	 * <br>Available options are:
	 * - "news"
	 * - "earningsUp"
	 * - "earningsDown"
	 * - "dividend"
	 * - "filing"
	 * - "split"
	 *
	 * Other custom categories require a corresponding CSS entry. See example.
	 *
	 * @param {string} [params.size] Size class to add to your marker.
	 * 		Requires corresponding CSS entry.
	 * @param {boolean} [params.displayCategory=true] Set to false to not draw the first letter of
	 * 		the category in the marker.
	 * @param {string} [params.displayLabel] Text to place in the marker.  Overrides `displayCategory`.
	 * @param {string} [params.story] The story to pop up when clicked. If left undefined, the
	 * 		marker displays an empty DOM node when clicked.
	 * @param {string} [params.color] Background color to make your marker. Overrides any style
	 * 		set by `params.category`.
	 * @param {boolean} [params.displayStem=true] Set to false to draw the marker at a specific
	 * 		point and not include the stem.
	 * @param {boolean} [params.invert=false] Set to true to invert the stem and point downward.
	 * @param {boolean} [params.infoOnLeft] If true, the information pop-up box is positioned on
	 * 		the left when possible.
	 * @param {number} [params.infoOffset] Distance to offset the information pop-up box.
	 * @param {boolean} [params.hide] Do not process display of marker.
	 *
	 * @constructor
	 * @name CIQ.Marker.Performance
	 * @since
	 * - 7.1.0
	 * - 7.2.0 Markers without <u>both</u> a `headline` and `story` are not interactive.
	 * 		You must provide either or both properties for a node (which is the marker pop-up
	 * 		display) to be appended to the DOM. Performance markers now can be positioned anywhere
	 * 		that a DOM marker can be positioned (above, below, or on a candle; at a value; or at
	 * 		the top or bottom of a chart).
	 * - 8.0.0 Added `params.infoOnLeft`, `params.infoOffset`, and `params.invert`.
	 * - 8.6.0 Added `params.hide`, `params.size`, and `params.displayLabel`.
	 *
	 *
	 * @example
	 * <caption>Required CSS entry for a custom category ("trade"), not included in the default
	 * CSS styles.</caption>
	 *
	 * .stx-marker.trade.small .stx-visual {
	 *     background: #C950d7;
	 *     width: 5px;
	 *     height: 5px;
	 * }
	 *
	 * // Corresponding code:
	 *
	 * new CIQ.Marker({
	 *     stx: stxx,
	 *     label: "trade",
	 *     xPositioner: "date",
	 *     x: OHLCData.DT,
	 *     node: new CIQ.Marker.Performance({
	 *         type: "circle",
	 *         category: "trade",
	 *         displayCategory: false,
	 *         displayStem: false,
	 *         size: small,
	 *         headline: "Executed at $" + OHLCData.Close,
	 *         story: "Like all ChartIQ markers, the object itself is managed by the chart."
	 *     })
	 * });
	 */
	CIQ.Marker.Performance = function (params) {
		this.params = {
			displayCategory: true,
			displayStem: true,
			invert: false,
			story: "",
			headline: ""
		};
		CIQ.extend(this.params, params);
		var template = (this.template = document.createElement("TEMPLATE"));
		template.innerHTML =
			'<div class="stx-marker highlight">' +
			'<div class="stx-visual">' +
			'<div class="stx-marker-content">' +
			'<div class="stx-marker stx-performance-marker stx-marker-expand"><h4></h4><p></p></div>' +
			"</div>" +
			"</div>" +
			'<div class="stx-stem"></div>' +
			"</div>";
		var n = this.template.content.cloneNode(true);
		var marker = n.querySelector(".stx-marker");
		marker.classList.add(params.type);
		marker.classList.add(params.category);
		if (params.size) marker.classList.add(params.size);
		var visual = n.querySelector(".stx-visual");
		var expand = n.querySelector(".stx-marker-expand");
		var header = n.querySelector("h4");
		var text = n.querySelector("p");
		header.innerText = this.params.headline;
		text.innerText = this.params.story;
		this.hasText = !!params.headline || !!params.story;

		this.deferAttach = true;

		this.node = n.firstChild;
		this.node.params = this.params;
		this.visual = visual;
		this.expand = expand;
		if (params.type === "callout") {
			var h = expand.removeChild(header);
			n.querySelector(".stx-marker-content").insertBefore(h, expand);
		}
	};

	CIQ.inheritsFrom(CIQ.Marker.Performance, CIQ.Marker.NodeCreator, false);

	/**
	 * This function keeps you from having a ton of marker expand dialogs from overlapping each other and becoming too hard to read.
	 * Checks the markers that have been marked as highlighted by the chart engine and combines the text of their expands into the last one highlighted.
	 *
	 * @param {CIQ.ChartEngine} stx
	 * @static
	 * @private
	 * @since 7.2.0
	 */
	CIQ.Marker.Performance.consolidateExpanded = function (stx) {
		var highlighted = stx.markerHelper.highlighted;
		if (!highlighted.length) return;

		function findInner(marker) {
			var node = marker.params.node,
				expand = node.expand;
			if (!expand) return null;
			return expand.querySelector(".marker_content") || expand;
		}

		var focusedMarker = stx.activeMarker;
		if (!focusedMarker.consolidated) focusedMarker.consolidated = [];
		for (var i = highlighted.length - 1; i >= 0; i--) {
			if (focusedMarker === highlighted[i]) continue;
			var inner = findInner(highlighted[i]);
			if (inner) {
				var consolidated =
					"<consolidated><br><br>" +
					inner.innerHTML.replace(/<consolidated>.*<\/consolidated>/g, "") +
					"</consolidated>";
				findInner(focusedMarker).innerHTML += consolidated;
			}
		}
		focusedMarker.stxNodeCreator.quickCache(focusedMarker);
	};

	/**
	 * Resets any highlighted markers to their default display state and removes any consolidated text from the marker.
	 *
	 * @param {CIQ.ChartEngine} stx
	 * @static
	 * @private
	 * @since 7.2.0
	 */
	CIQ.Marker.Performance.reconstituteExpanded = function (stx) {
		if (!stx.markerHelper.highlighted.length || !stx.activeMarker) return;

		Array.from(
			stx.activeMarker.params.node.expand.querySelectorAll("consolidated")
		).forEach((child) => child.remove());
	};

	/**
	 * <span class="animation">Animation Loop</span>
	 *
	 * Iterates through all [high performance canvas]{@link CIQ.Marker.Performance} markers and
	 * draws them on the canvas.
	 *
	 * See {@tutorial Markers} tutorials for additional implementation instructions.
	 *
	 * @param {CIQ.ChartEngine} stx A reference to the chart object.
	 *
	 * @memberof CIQ.Marker.Performance
	 * @static
	 * @since 7.2.0 Replaces {@link CIQ.ChartEngine#drawMarkers}.
	 */
	CIQ.Marker.Performance.drawMarkers = function (stx) {
		var markers = stx.getMarkerArray("all");
		var chart = stx.chart;
		for (var i = 0; i < markers.length; i++) {
			var marker = markers[i],
				nodeCreator = marker.stxNodeCreator;
			var startingTick = chart.dataSegment[0].tick,
				endingTick = chart.dataSegment[chart.dataSegment.length - 1].tick;
			if (startingTick <= marker.tick <= endingTick) {
				// if markers are off screen don't draw them
				if (nodeCreator && nodeCreator.drawMarker)
					nodeCreator.drawMarker(marker);
			}
		}
	};

	/**
	 * Calculates the styles used in drawing [high performance canvas]{@link CIQ.Marker.Performance} markers.
	 * We use this method instead of other chart styling methods because Markers expect styles to cascade down and then be calculated.
	 * Other style methods are for adding or calculating a single property.
	 * This will save styles to the engine's style object where they can be adjusted with {@link CIQ.ChartEngine#setStyle}.
	 *
	 * @member CIQ.Marker.Performance
	 * @param {CIQ.ChartEngine} stx The chart engine.
	 * @param {CIQ.Marker} marker The marker to compute the styles from.
	 * @param {string} style Name to save to {@link CIQ.ChartEngine#styles}.
	 * @private
	 * @static
	 * @since 7.2.0
	 */
	CIQ.Marker.Performance.calculateMarkerStyles = function (stx, marker, style) {
		var doc = stx.container.ownerDocument;
		var testArea = doc.querySelector(".stx-marker-templates");
		if (!testArea) {
			testArea = document.createElement("DIV");
			testArea.style.visibility = "hidden";
			testArea.style.left = "-1000px";
			doc.body.append(testArea);
		}
		testArea.appendChild(marker.node);
		var s = getComputedStyle(marker.stxNodeCreator.visual);
		if (!stx.styles.stx_marker_stem) {
			var stem = getComputedStyle(marker.node.querySelector(".stx-stem"));
			stx.styles.stx_marker_stem = stx.cloneStyle(stem);
		}
		stx.styles[style] = stx.cloneStyle(s);
		testArea.removeChild(marker.node);
	};

	/**
	 * Draws circular canvas markers based on the styles for {@link CIQ.Marker.Performance} markers.
	 *
	 * @param {CIQ.Marker} marker
	 * @param {object} style
	 * @param {object} params
	 * @static
	 * @private
	 * @since 7.2.0
	 */
	CIQ.Marker.Performance.drawCircleMarker = function (marker, style, params) {
		var stx = marker.params.stx,
			chart = stx.chart,
			ctx = chart.context;
		var x = params.x,
			y = params.y,
			radius = params.radius,
			label = params.label;
		var color = params.color ? params.color : style.backgroundColor;

		// Draw Circle
		ctx.save();
		ctx.beginPath();
		ctx.setLineDash([]);
		ctx.lineWidth = 1;
		ctx.fillStyle = color;
		ctx.strokeStyle = color;
		ctx.textAlign = "center";
		ctx.font =
			"normal bold " +
			Math.min(12, 2 * (radius + 1)) +
			"px Roboto, Helvetica, sans-serif";
		ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

		// Write text
		if (label) {
			ctx.fillStyle = CIQ.chooseForegroundColor(ctx.fillStyle);
			ctx.fillText(label, x, y + 1);
		}

		if (marker.highlight || marker.active) {
			if (CIQ.isTransparent(color)) ctx.strokeStyle = stx.defaultColor;
			ctx.beginPath();
			ctx.arc(x, y, radius + 4, 0, 2 * Math.PI, false); // 4 pixels just chosen for giving slight space around marker
			ctx.stroke();
			ctx.closePath();
		}
		ctx.restore();
	};

	/**
	 * Draws square canvas markers based on the styles for {@link CIQ.Marker.Performance} markers.
	 *
	 * @param {CIQ.Marker} marker
	 * @param {object} style
	 * @param {object} params
	 * @static
	 * @private
	 * @since 7.2.0
	 */
	CIQ.Marker.Performance.drawSquareMarker = function (marker, style, params) {
		var stx = marker.params.stx,
			chart = stx.chart,
			ctx = chart.context;
		var x = params.x,
			y = params.y,
			half = params.half,
			label = params.label;
		var color = params.color ? params.color : style.backgroundColor;
		var whole = half * 2;

		// Draw Square
		ctx.setLineDash([]);
		ctx.lineWidth = 1;
		ctx.fillStyle = color;
		ctx.strokeStyle = color;

		ctx.save();
		ctx.beginPath();
		if (marker.node.params.type === "diamond") {
			ctx.translate(x, y);
			ctx.rotate(Math.PI / 4);
			ctx.translate(-x, -y);
			half /= 1.42;
			whole = half * 2;
		}
		ctx.fillRect(x - half, y - half, whole, whole);
		if (marker.highlight || marker.active)
			ctx.strokeRect(x - half - 4, y - half - 4, whole + 8, whole + 8); // whole + 4 + 4 for the highlighted box
		ctx.closePath();
		ctx.restore();

		// Write text
		if (label) {
			ctx.save();
			ctx.textAlign = "center";
			ctx.font =
				"normal bold " +
				Math.min(12, 2 * half) +
				"px Roboto, Helvetica, sans-serif";
			ctx.fillStyle = CIQ.chooseForegroundColor(ctx.fillStyle);
			ctx.fillText(label, x, y + 1);
			ctx.restore();
		}
	};

	/**
	 * Draws callout (rectangular) canvas marker based on the style for a {@link CIQ.Marker.Performance} markers.
	 *
	 * @param {CIQ.Marker} marker
	 * @param {object} style
	 * @param {object} params
	 * @static
	 * @private
	 * @since 7.2.0
	 */
	CIQ.Marker.Performance.drawCalloutMarker = function (marker, style, params) {
		var stx = marker.params.stx,
			chart = stx.chart,
			ctx = chart.context,
			mParams = marker.params;
		var x = params.x,
			y = params.y,
			half = params.half,
			calloutMid = params.midWidth,
			headline = params.headline;
		var color = params.color ? params.color : style.backgroundColor;

		var height = half * 2 || 25;
		var headlineLength = Math.round(ctx.measureText(headline).width);
		// If there's no length use the text measurement plus some padding
		var calloutWidth = calloutMid ? calloutMid * 2 : headlineLength + 8;

		// Draw the rectangle
		ctx.beginPath();
		ctx.setLineDash([]);
		ctx.lineWidth = 1;
		ctx.fillStyle = color;
		ctx.strokeStyle = color;
		ctx.font = "normal bold 12px Roboto, Helvetica, sans-serif";
		ctx.rect(mParams.box.x0, mParams.box.y0, calloutWidth, height);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

		// draw the "background" box that text apears in
		ctx.beginPath();
		ctx.fillStyle =
			marker.highlight || marker.active
				? "rgba(255,255,255,0.8)"
				: "rgba(255,255,255,0.65)";
		var xx = (calloutWidth - (headlineLength + 20)) / 2;
		ctx.rect(mParams.box.x0 + xx, y - half, headlineLength + 40, 22);
		ctx.fill();
		ctx.stroke();
		ctx.closePath();

		ctx.fillStyle = "black";
		ctx.fillText(headline, mParams.box.x0 + xx + 10, y);
	};

	/**
	 * Draws marker stems for a based on a style for {@link CIQ.Marker.Performance} markers.
	 *
	 * @param {CIQ.Marker} marker
	 * @param {object} style
	 * @param {object} params
	 * @static
	 * @private
	 * @since 7.2.0
	 */
	CIQ.Marker.Performance.drawMarkerStem = function (marker, style, params) {
		var stx = marker.params.stx,
			chart = stx.chart,
			ctx = chart.context;
		var x = params.x,
			y = params.y;

		ctx.beginPath();
		ctx.strokeStyle = style.borderLeftColor;
		// ctx.setLineDash(CIQ.borderPatternToArray(stemStyle.borderLeftWidth, stemStyle.borderLeftStyle));
		ctx.setLineDash([1, 1]);
		let stemHeight = CIQ.stripPX(style.height);
		let startY = params.invert ? marker.params.box.y0 : marker.params.box.y1;
		let endY = params.invert
			? marker.params.box.y0 - stemHeight
			: marker.params.box.y1 + stemHeight;
		ctx.moveTo(x, startY);
		ctx.lineTo(x, endY);
		ctx.stroke();
		ctx.closePath();
	};

	/**
	 * Draws a canvas marker on the chart and positions the pop-up for the marker if necessary.
	 *
	 * @memberof CIQ.Marker.Performance
	 * @param {CIQ.Marker} marker The marker to be drawn.
	 * @since 7.2.0
	 */
	CIQ.Marker.Performance.prototype.drawMarker = function (marker) {
		var mParams = marker.params,
			stx = marker.params.stx;
		if (!stx) return;

		var chart = stx.chart,
			dataSegment = chart.dataSegment;
		if (!dataSegment || !dataSegment.length) return;

		var panel = stx.panels[marker.params.panelName];
		if (panel.hidden) return;
		var yAxis = marker.params.yAxis || panel.yAxis;
		var nParams = marker.stxNodeCreator.params;
		if (nParams.hide) return;
		var type = nParams.type,
			category = nParams.category,
			headline = nParams.headline,
			display = nParams.displayCategory,
			color = nParams.color,
			label = nParams.displayLabel,
			invert = nParams.invert,
			size = nParams.size;
		if (color === "auto") color = stx.defaultColor;
		var style = "stx_marker_" + type + "_" + category;
		if (size) style += "_" + size;
		if (!stx.styles[style])
			CIQ.Marker.Performance.calculateMarkerStyles(stx, marker, style);
		var markerStyle = (marker.style = stx.styles[style]),
			stemStyle = stx.styles.stx_marker_stem;

		var halfSide = parseInt(markerStyle.height, 10) / 2,
			halfWidth = parseInt(markerStyle.width, 10) / 2;
		if (type === "diamond") {
			halfSide *= 1.42;
			halfWidth *= 1.42;
		}
		var stemHeight = nParams.displayStem
			? parseInt(stemStyle.height, 10) + parseInt(stemStyle.marginBottom, 10)
			: 0;
		var markerHeight = stemHeight + halfSide * 2;
		var offset = mParams.offset || 0;

		var x = stx.pixelFromTick(marker.tick);
		var y = mParams.node.calculateYPosition({
			marker: marker,
			panel: panel,
			yAxis: yAxis,
			height: markerHeight,
			half: halfSide,
			offset: offset,
			stemHeight: stemHeight,
			inverted: invert,
			field: mParams.field,
			x: x
		});

		// This can happen if for some reason the marker is missing a tick.
		//It's possible but rare,  in that scenario just abort the drawing to prevent throwing errors
		if (!marker.tick && marker.tick !== 0) return;

		mParams.box = {
			x0: x - (halfWidth || halfSide),
			y0: y - halfSide,
			x1: x + (halfWidth || halfSide),
			y1: y + halfSide,
			midY: halfSide,
			midX: halfWidth || halfSide,
			stemHeight: stemHeight
		};

		if (!display) category = "";
		else category = category[0].toUpperCase();
		stx.startClip(panel.name);

		if (type === "circle") {
			CIQ.Marker.Performance.drawCircleMarker(marker, markerStyle, {
				x: x,
				y: y,
				radius: halfSide,
				label: label || category,
				color: color
			});
		} else if (type === "square" || type === "diamond") {
			CIQ.Marker.Performance.drawSquareMarker(marker, markerStyle, {
				x: x,
				y: y,
				half: halfSide,
				label: label || category,
				color: color
			});
		} else if (type === "callout") {
			CIQ.Marker.Performance.drawCalloutMarker(marker, markerStyle, {
				x: x,
				y: y,
				half: halfSide,
				midWidth: halfWidth,
				headline: headline,
				color: color
			});
		} else {
			console.warn(
				"Marker type: " +
					type +
					" is unsupported with canvas markers!\nSupported Styles are Square, Diamond, Circle, and Callout."
			);
		}

		if (nParams.displayStem)
			CIQ.Marker.Performance.drawMarkerStem(marker, stemStyle, {
				x: x,
				y: y,
				invert: invert
			});

		stx.endClip();
		if (marker.attached) this.positionPopUpNode(marker);
	};

	/**
	 * Positions a marker's pop-up `div` that has been appended to the chart so that it follows the canvas marker.
	 * This is the replacement for {@link CIQ.ChartEngine#positionDOMMarkers}, but it is now an instance method for the individual performance marker.
	 *
	 * @private
	 * @since 7.2.0
	 */
	CIQ.Marker.Performance.prototype.positionPopUpNode = function (marker) {
		if (!marker.attached || !marker.params.box) return;
		var mparams = marker.params,
			stx = mparams.stx,
			mbox = mparams.box,
			expand = marker.params.node.expand;
		var dataSet = stx.chart.dataSet,
			dataSegment = stx.chart.dataSegment;
		var panel = stx.panels[mparams.panelName];

		var markerVisible;
		if (marker.tick) {
			var startBuffer = [
				dataSet[dataSegment[0] && dataSegment[0].tick - 1],
				dataSet[dataSegment[0] && dataSegment[0].tick - 2]
			]; // check two ticks ahead the dataSegment b/c markers sometimes extend past ticks
			var first = stx.getFirstLastDataRecord(
				startBuffer.concat(dataSegment),
				"Date"
			);
			var endBuffer = [
				dataSet[dataSegment[dataSegment.length - 1].tick + 1],
				dataSet[dataSegment[dataSegment.length - 1].tick + 2]
			]; // check two ticks behind the dataSegment b/c markers sometimes extend past ticks
			var last = stx.getFirstLastDataRecord(
				dataSegment.concat(endBuffer),
				"Date",
				true
			);
			markerVisible =
				first.DT <= dataSet[marker.tick].DT &&
				dataSet[marker.tick].DT <= last.DT &&
				marker.params.box.y0 <= panel.yAxis.bottom &&
				marker.params.box.y1 >= panel.yAxis.top;
		} else {
			markerVisible = false;
		}

		if (!marker.highlight && !marker.active) markerVisible = false;
		expand.style.visibility = markerVisible ? "" : "hidden";
		if (!markerVisible) return; // don't continue if the marker is off the screen

		if (expand.style.height !== "") expand.style.height = "";
		var expandRect = expand.rects;
		var medianHeight = expandRect.height / 2;

		var tx;
		var offset = marker.node.params.infoOffset || 0;
		if (marker.node.params.infoOnLeft) {
			tx =
				mbox.x0 - expandRect.width - offset < panel.left
					? mbox.x1 + offset
					: mbox.x0 - expandRect.width - offset;
		} else {
			tx =
				mbox.x0 + expandRect.width > panel.right
					? mbox.x0 - expandRect.width - offset
					: mbox.x1 + offset;
		}
		tx -= stx.chart.left;
		var buffer = mparams.avoidFlush ? 5 : 0;
		var ty =
			mbox.y0 - medianHeight >= panel.yAxis.top
				? mbox.y0 + mbox.midY - medianHeight
				: panel.yAxis.top + buffer;
		// case where the marker is set to "bottom" alignment. We make the marker flush with the bottom of the yAxis unless the expand height is shorter than the marker height (ie a short marker label on a marker with a stem)
		if (
			!mparams.avoidFlush &&
			mbox.y1 + mbox.stemHeight === panel.yAxis.bottom &&
			expandRect.height > mbox.y1 - mbox.y0 + mbox.stemHeight
		)
			ty = mbox.y1 - expandRect.height + mbox.stemHeight;
		// If expand div extends past bottom of panel, align to bottom
		if (mbox.y1 + medianHeight > panel.yAxis.bottom)
			ty = panel.yAxis.bottom - expandRect.height - buffer;
		// If expand div is larger than the panel height then align to top of panel
		// and adjust the height to the panel height
		if (expandRect.height > panel.yAxis.height) {
			ty = panel.yAxis.top + buffer;
			expand.style.height = panel.yAxis.height - 2 * buffer + "px";
		}
		ty -= panel.yAxis.top;
		var transform =
			"translateX(" +
			Math.floor(tx) +
			"px) translateY(" +
			Math.floor(ty) +
			"px) translateZ(0)";
		expand.style.transform = transform;
		// cache values for later use to determine x/y location of the expand popup
		expand.transform = { translateX: tx, translateY: ty };
	};

	/**
	 * Performs and caches some necessary calculations when the expand popup is first appended to the DOM.
	 * We do these calculations here once instead of on every call of the draw loop when we iterate thru the markers.
	 * The only thing that will change is the X/Y transform position which we already calculate in CIQ.Marker.Performance#drawMarker.
	 * So we can safely add the transform values we cache there to the default X/Y calculated here and find position without trashing the layout.
	 *
	 * **NOTE** You will notice that if you remove a marker and add it back, the values should be correct for X/Y (or at least the same as what it was before + translateX/Y).
	 * While this is true, it's only true if you add a marker back, so we can't reliably assume that the values are correct for X/Y.
	 *
	 * @param {CIQ.Marker} marker
	 * @private
	 * @since 7.2.0
	 */
	CIQ.Marker.Performance.prototype.quickCache = function (marker) {
		var node = marker.params.node,
			expand = node.expand,
			style = marker.style;
		var notScroll =
			CIQ.stripPX(style.marginLeft) +
			CIQ.stripPX(style.marginRight) +
			CIQ.stripPX(style.borderRight) +
			CIQ.stripPX(style.borderLeft);
		expand.rects = expand.getBoundingClientRect();
		expand.scrollBarWidth = expand.rects.width - expand.clientWidth - notScroll;
	};

	/**
	 * Calculates the initial y-axis positioning when drawing a canvas marker.
	 *
	 * @param {object} params
	 * @param {CIQ.Marker} params.marker The marker for which the y-axis position is calculated.
	 * @param {CIQ.ChartEngine.Panel} params.panel Panel on which the marker appears.
	 * @param {number} params.tick The tick of the quote in the chart's data set.
	 * @param {number} params.height Total height of the marker as defined by marker height plus
	 * 		stem height.
	 * @param {number} params.half Half the height of the marker as defined by the marker CSS
	 * 		style.
	 * @param {number} params.offset Height of the offset provided when creating the marker.
	 * @param {number} params.stemHeight Height of the marker stem offset as defined by the marker
	 * 		stem CSS style height plus margin bottom.
	 * @param {boolean} params.inverted Indicates whether the marker stem is inverted; that is,
	 * 		pointing downward.
	 * @param {boolean} params.field Field to attach marker to if using appropriate yPositioner.
	 * @param {number} params.x Already computed x position, in pixels.
	 * @return {number} Initial y-coordinate positioning for drawing the canvas marker.
	 *
	 * @memberof CIQ.Marker.Performance
	 * @since
	 * - 7.2.0
	 * - 8.0.0 Added param `inverted`.
	 * - 8.6.0 Added params `field`, `x`, `stemHeight`.
	 */
	CIQ.Marker.Performance.prototype.calculateYPosition = function (params) {
		var marker = params.marker,
			panel = params.panel,
			yAxis = params.yAxis,
			height = params.height,
			side = params.half,
			offset = params.offset,
			stemHeight = params.stemHeight,
			inverted = params.inverted,
			field = params.field;
		var stx = marker.params.stx,
			chart = stx.chart;

		// this code finds the actual tick or the one right before to put the marker on.
		var useHighs = stx.chart.highLowBars;
		var quote = chart.dataSet[marker.tick];
		if (!quote) return;

		if (field) quote = quote[field];
		if (!quote) return;
		if (typeof quote === "number") {
			quote = { Close: quote };
			quote[chart.defaultPlotField] = quote.Close;
			useHighs = false;
		}

		var bounds = stx.getBarBounds(quote, !!field);
		var high = useHighs
			? bounds[yAxis.flipped ? "low" : "high"]
			: quote[chart.defaultPlotField];
		var low = useHighs
			? bounds[yAxis.flipped ? "high" : "low"]
			: quote[chart.defaultPlotField];
		var position = marker.params.yPositioner,
			y;

		if (isNaN(high)) high = (yAxis.high + yAxis.low) / 2;
		if (isNaN(low)) low = (yAxis.high + yAxis.low) / 2;

		var bottomAdjust = 0;
		if (position != "none") {
			var isLane = position.indexOf("_lane") > -1;
			var placementMap = stx.markerHelper.placementMap;
			var keyBase = position + "|" + panel.name;
			if (isLane && typeof placementMap[keyBase] == "undefined")
				placementMap[keyBase] = 2;
			var placementKey =
				keyBase + "-" + (isLane ? marker.params.label : params.x);
			if (typeof placementMap[placementKey] == "undefined") {
				placementMap[placementKey] = isLane ? placementMap[keyBase] : 0;
				placementMap[keyBase] += height + 2;
			}
			bottomAdjust = placementMap[placementKey];
			if (!isLane) placementMap[placementKey] += height + 1;
		}

		switch (position) {
			case "value": // this is actually our default case
				if (marker.params.y || marker.params.y === 0) {
					y =
						stx.pixelFromPrice(marker.params.y, panel, yAxis) -
						height * 0.5 +
						side;
					break;
				} /* falls through */
			case "above_candle":
				y =
					stx.pixelFromPrice(high, panel, yAxis) -
					side -
					((!inverted && stemHeight) || offset) -
					bottomAdjust;
				break;
			case "below_candle":
				y =
					stx.pixelFromPrice(low, panel, yAxis) +
					side +
					((inverted && stemHeight) || offset) +
					bottomAdjust;
				break;
			case "on_candle":
				y =
					stx.pixelFromPrice((high + low) / 2, panel, yAxis) -
					height * 0.5 +
					side;
				break;
			case "top":
			case "top_lane":
				y =
					panel.yAxis.top +
					side +
					((inverted && stemHeight) || offset) +
					bottomAdjust;
				break;
			case "bottom":
			case "bottom_lane":
				y =
					panel.yAxis.bottom -
					side -
					((!inverted && stemHeight) || offset) -
					bottomAdjust;
				break;
			default:
				break;
		}
		return Math.round(2 * y) / 2;
	};

	/**
	 * Method to setup the actual DOM node that gets appended to the chart for Performance markers.
	 * Performance markers require the entire DOM of the template for the styles to be calculated correctly but we only want to append the "pop-up" expand `div`.
	 *
	 * @param {CIQ.Marker} marker The marker to which this node belongs.
	 * @return {HTMLElement} Expand the pop-up node that will be appended to the chart for the performance marker.
	 * @private
	 */
	CIQ.Marker.Performance.prototype.prepareForHolder = function (marker) {
		var expand = this.expand,
			stx = marker.params.stx;
		expand.classList.add(this.params.type);
		expand.classList.add(this.params.category);
		stx.markerHelper.domMarkers.push(marker);
		return expand;
	};

	/**
	 * Adds click and touch events to the marker pop-up when it is appended to the chart.
	 *
	 * @param {CIQ.Marker} marker
	 * @private
	 * @since 7.2.0
	 */
	CIQ.Marker.Performance.prototype.addToHolder = function (marker) {
		var expand = this.expand,
			stx = marker.params.stx;

		CIQ.Marker.Performance.reconstituteExpanded(stx);
		CIQ.Marker.Performance.consolidateExpanded(stx);
		this.quickCache(marker);

		if (expand.clickClosure) return;

		function clickClosure(e) {
			stx.activeMarker = marker;
			stx.activeMarker.click({
				cx: e.clientX,
				cy: e.clientY,
				panel: stx.currentPanel
			});
			e.stopPropagation();
		}
		// CIQ.safeClickTouch, in this case, attaches clickClosure to the pointerup event
		// Attaching the listener explicitly here to ensure stopPropagation and prevent accidental triggering of other markers
		expand.addEventListener("mousedown", clickClosure);
		expand.addEventListener("touchstart", clickClosure, { passive: false });
		expand.clickClosure = clickClosure;
	};

	/**
	 * Removes a high performance canvas markers from the `markerHelper.domMarkers` array.
	 * We use this instead of {@link CIQ.ChartEngine#removeFromHolder} because that will remove the whole marker instead of just removing the DOM node.
	 *
	 * @private
	 * @since 7.2.0
	 */
	CIQ.Marker.Performance.prototype.remove = function (marker) {
		var stx = marker.params.stx;
		if (!stx) return;
		if (!stx.markerHelper.domMarkers) return; // if never anything appended return

		var idx = stx.markerHelper.domMarkers.indexOf(marker);
		if (idx != -1) stx.markerHelper.domMarkers.splice(idx, 1);
		if (marker.attached) {
			var panel = stx.panels[marker.params.panelName];
			var expand = marker.params.node.expand;
			if (expand.parentNode === panel.subholder)
				panel.subholder.removeChild(expand);
			expand.removeEventListener("click", expand.clickClosure);
		}
	};

	/**
	 * Click event handler for performance markers when they are clicked in the canvas.
	 * Adds or removes the marker's pop-up expand `div` to the chart, depending on whether it has already been activated.
	 *
	 * @memberof CIQ.Marker.Performance
	 * @param {object} params Configuration parameters.
	 * @param {number} params.cx Client x-coordinate of click.
	 * @param {number} params.cy Client y-coordinate of click.
	 * @param {CIQ.Marker} params.marker Marker that was clicked.
	 * @param {CIQ.ChartEngine.Panel} params.panel Panel where the click occurred.
	 * @since 7.2.0
	 */
	CIQ.Marker.Performance.prototype.click = function (params) {
		if (!this.hasText) return; // don't display anything if there's nothing to display!

		if (arguments.length > 1) {
			params = {
				cx: arguments[0],
				cy: arguments[1],
				marker: arguments[2],
				panel: arguments[3]
			};
		}
		const { cx, cy, marker, panel } = params;
		var stx = marker.params.stx;

		var position;
		if (marker.attached) {
			var expand = this.expand;
			// checks to see if we clicked on the scroll bar and if we did return
			if (
				expand.rects &&
				expand.transform &&
				expand.rects.width -
					expand.scrollBarWidth +
					expand.transform.translateX <
					stx.backOutX(cx) &&
				stx.backOutX(cx) < expand.rects.width + expand.transform.translateX
			)
				return;
			this.remove(marker);
		} else {
			stx.addToHolder(marker);
			position = true;
		}
		marker.attached = !marker.attached;
		marker.active = !marker.active;
		if (position) marker.stxNodeCreator.positionPopUpNode(marker);
	};
}

};


let __js_advanced_renderersAdvanced_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */

var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

/*
 * SEE OVERWRITTEN METHOD FOR FULL DOCUMENTATION IN core/renderer.js
 */
CIQ.Renderer.OHLC.requestNew = function (featureList, params) {
	var type = null,
		isHlc = params.hlc,
		isColored = params.colored,
		isHollow = params.hollow,
		isVolume = params.volume,
		histogram = params.histogram;
	for (var pt = 0; pt < featureList.length; pt++) {
		var pType = featureList[pt];
		switch (pType) {
			case "bar":
			case "candle":
				type = pType;
				break;
			case "volume":
				isVolume = true;
				break;
			case "hollow":
				isHollow = true;
				break;
			case "colored":
				isColored = true;
				break;
			case "histogram":
				histogram = true;
				type = "candle";
				break;
			case "hlc":
				isHlc = true;
				type = "bar";
				break;
			default:
				return null; // invalid chartType for this renderer
		}
	}
	if (type === null) return null;

	return new CIQ.Renderer.OHLC({
		params: CIQ.extend(params, {
			type: type,
			hlc: isHlc,
			colored: isColored,
			hollow: isHollow,
			volume: isVolume,
			histogram: histogram
		})
	});
};

/*
 * Overrides method in core.js
 */
CIQ.Renderer.OHLC.getChartParts = function (style, colorUseOpen) {
	var CLOSEUP = 1; // today's close greater than yesterday's close
	var CLOSEDOWN = 2; // today's close less than yesterday's close
	var CLOSEEVEN = 4; // today's close the same as yesterday's close
	var CANDLEUP = 8; // today's close greater than today's open
	var CANDLEDOWN = 16; // today's close less than today's open
	var CANDLEEVEN = 32; // today's close equal to today's open
	return [
		{type:"histogram",	drawType:"histogram",	style:"stx_histogram_up",		condition:CANDLEUP,				fill:"fill_color_up",	border:"border_color_up",						useColorInMap:true, useBorderStyleProp:true},
		{type:"histogram",	drawType:"histogram",	style:"stx_histogram_down",		condition:CANDLEDOWN,			fill:"fill_color_down",	border:"border_color_down",						useColorInMap:true, useBorderStyleProp:true},
		{type:"histogram",	drawType:"histogram",	style:"stx_histogram_even",		condition:CANDLEEVEN,			fill:"fill_color_even",	border:"border_color_even",	skipIfPass:true,	useColorInMap:true, useBorderStyleProp:true},
		{type:"bar",		drawType:"bar",			style:style||"stx_bar_chart",															border:"border_color",							useColorInMap:true},
		{type:"bar",		drawType:"bar",			style:"stx_bar_up",				condition:colorUseOpen?CANDLEUP:CLOSEUP,				border:"border_color_up",						useColorInMap:true},
		{type:"bar",		drawType:"bar",			style:"stx_bar_down",			condition:colorUseOpen?CANDLEDOWN:CLOSEDOWN,			border:"border_color_down",						useColorInMap:true},
		{type:"bar",		drawType:"bar",			style:"stx_bar_even",			condition:colorUseOpen?CANDLEEVEN:CLOSEEVEN,			border:"border_color_even",	skipIfPass:true,	useColorInMap:true},
		{type:"candle",		drawType:"shadow",		style:"stx_candle_shadow",																border:"border_color_up"},
		{type:"candle",		drawType:"shadow",		style:"stx_candle_shadow_up",	condition:CANDLEUP,										border:"border_color_up"},
		{type:"candle",		drawType:"shadow",		style:"stx_candle_shadow_down",	condition:CANDLEDOWN,									border:"border_color_down"},
		{type:"candle",		drawType:"shadow",		style:"stx_candle_shadow_even",	condition:CANDLEEVEN,									border:"border_color_even",	skipIfPass:true},
		{type:"candle",		drawType:"candle",		style:"stx_candle_up",			condition:CANDLEUP,				fill:"fill_color_up",	border:"border_color_up",						useColorInMap:true, useBorderStyleProp:true},
		{type:"candle",		drawType:"candle",		style:"stx_candle_down",		condition:CANDLEDOWN,			fill:"fill_color_down",	border:"border_color_down",						useColorInMap:true, useBorderStyleProp:true},
		{type:"hollow",		drawType:"shadow",		style:"stx_hollow_candle_up",	condition:CLOSEUP,										border:"border_color_up"},
		{type:"hollow",		drawType:"shadow",		style:"stx_hollow_candle_down",	condition:CLOSEDOWN,									border:"border_color_down"},
		{type:"hollow",		drawType:"shadow",		style:"stx_hollow_candle_even",	condition:CLOSEEVEN,									border:"border_color_even",	skipIfPass:true},
		{type:"hollow",		drawType:"candle",		style:"stx_hollow_candle_up",	condition:CLOSEUP|CANDLEDOWN,	fill:"fill_color_up",	border:"border_color_up",						useColorInMap:true},
		{type:"hollow",		drawType:"candle",		style:"stx_hollow_candle_down",	condition:CLOSEDOWN|CANDLEDOWN,	fill:"fill_color_down",	border:"border_color_down",						useColorInMap:true},
		{type:"hollow",		drawType:"candle",		style:"stx_hollow_candle_even",	condition:CLOSEEVEN|CANDLEDOWN,	fill:"fill_color_even",	border:"border_color_even",	skipIfPass:true,	useColorInMap:true},
		{type:"hollow",		drawType:"candle",		style:"stx_hollow_candle_up",	condition:CLOSEUP|CANDLEUP,		fill:"fill_color_up",	border:"border_color_up"},
		{type:"hollow",		drawType:"candle",		style:"stx_hollow_candle_down",	condition:CLOSEDOWN|CANDLEUP,	fill:"fill_color_down",	border:"border_color_down"},
		{type:"hollow",		drawType:"candle",		style:"stx_hollow_candle_even",	condition:CLOSEEVEN|CANDLEUP,	fill:"fill_color_even",	border:"border_color_even"},
	]; // prettier-ignore
};

/**
 * Creates a Bars renderer, a derivation of the OHLC renderer.
 *
 * **Note:** By default, the renderer will display bars as underlays. As such, they will appear below any other studies or drawings.
 *
 * The Bars renderer is used to create the following drawing types: bar, colored bar.
 *
 * See {@link CIQ.Renderer#construct} for parameters required by all renderers
 * @param {object} config Config for renderer
 * @param  {object} [config.params] Parameters to control the renderer itself
 * @param  {boolean} [config.params.useChartLegend=false] Set to true to use the built-in canvas legend renderer. See {@link CIQ.ChartEngine.Chart#legendRenderer};
 * @param  {string} [config.params.style] Style name to use in lieu of defaults for the type
 * @param  {boolean} [config.params.colored] For bar or hlc, specifies using a condition or colorFunction to determine color
 * @param  {string} [config.params.colorBasis="close"] Will compute color based on whether current close is higher or lower than previous close.  Set to "open" to compute this off the open rather than yesterday's close.
 * @param  {function} [config.params.colorFunction] Override function (or string) used to determine color of bar.  May be an actual function or a string name of the registered function (see {@link CIQ.Renderer.registerColorFunction})
 *
 * Common valid parameters for use by attachSeries.:<br>
 * `border_color` - Color to use for uncolored bars.<br>
 * `border_color_up` - Color to use for up bars.<br>
 * `border_color_down` - Color to use for down bars.<br>
 * `border_color_even` - Color to use for even bars.<br>
 *
 * @constructor
 * @name  CIQ.Renderer.Bars
 * @since 5.1.1, creates only Bar type charts
 * @example
 	// Colored bar chart
	var renderer=stxx.setSeriesRenderer(new CIQ.Renderer.Bars({params:{name:"bars", colored:true}}));
 */

CIQ.Renderer.Bars = function (config) {
	this.construct(config);
	var params = this.params;
	params.type = "bar";
	this.highLowBars = this.barsHaveWidth = this.standaloneBars = true;
	params.hlc = params.volume = params.hollow = params.histogram = false;
};
CIQ.inheritsFrom(CIQ.Renderer.Bars, CIQ.Renderer.OHLC, false);

/**
	 * Creates a HLC renderer, a derivation of the Bars renderer.
	 *
	 * **Note:** By default, the renderer will display bars as underlays. As such, they will appear below any other studies or drawings.
	 *
	 * The HLC renderer is used to create the following drawing types: hlc, colored hlc.
	 *
	 * See {@link CIQ.Renderer#construct} for parameters required by all renderers
	 * @param {object} config Config for renderer
	 * @param  {object} [config.params] Parameters to control the renderer itself
	 * @param  {boolean} [config.params.useChartLegend=false] Set to true to use the built-in canvas legend renderer. See {@link CIQ.ChartEngine.Chart#legendRenderer};
	 * @param  {string} [config.params.style] Style name to use in lieu of defaults for the type
	 * @param  {boolean} [config.params.colored] For bar or hlc, specifies using a condition or colorFunction to determine color
	 * @param  {string} [config.params.colorBasis="close"] Will compute color based on whether current close is higher or lower than previous close.  Set to "open" to compute this off the open rather than yesterday's close.
	 * @param  {function} [config.params.colorFunction] Override function (or string) used to determine color of bar.  May be an actual function or a string name of the registered function (see {@link CIQ.Renderer.registerColorFunction})
	 *
	 * Common valid parameters for use by attachSeries.:<br>
	 * `border_color` - Color to use for uncolored bars.<br>
	 * `border_color_up` - Color to use for up bars.<br>
	 * `border_color_down` - Color to use for down bars.<br>
	 * `border_color_even` - Color to use for even bars.<br>
	 *
	 * @constructor
	 * @name  CIQ.Renderer.HLC
	 * @since 5.1.1
	 * @example
	 	// Colored hlc chart
		var renderer=stxx.setSeriesRenderer(new CIQ.Renderer.HLC({params:{name:"hlc", colored:true}}));
	 */

CIQ.Renderer.HLC = function (config) {
	this.construct(config);
	var params = this.params;
	params.type = "bar";
	params.hlc = true;
	this.highLowBars = this.barsHaveWidth = this.standaloneBars = true;
	params.volume = params.hollow = params.histogram = false;
};
CIQ.inheritsFrom(CIQ.Renderer.HLC, CIQ.Renderer.Bars, false);

/**
 * Creates a Shading renderer
 * This is just like Lines renderer except it will allow shading between lines connected by a common y-axis.
 *
 * Notes:
 * - By default the renderer will display lines as underlays. As such, they will appear below the chart ticks and any other studies or drawings.
 * - Series not linked to an explicit y-axis through a custom renderer must have 'shareYAxis' set to true to use this feature.
 *
 * See {@link CIQ.Renderer#construct} for parameters required by all renderers
 *
 * Example:<br>
 * <iframe width="100%" height="500" scrolling="no" seamless="seamless" align="top" style="float:top" src="https://jsfiddle.net/chartiq/k61mzpce/embedded/result,js,html/" allowfullscreen="allowfullscreen" frameborder="1"></iframe>
 * @param {Object} config Config for renderer
 * @param  {object} [config.params] Parameters to control the renderer itself
 * @param  {number} [config.params.width] Width of the rendered line
 *
 * Common valid parameters for use by attachSeries.:<br>
 * `color` - Specify the color for the line and shading in rgba, hex or by name.<br>
 * `pattern` - Specify the pattern as an array. For instance [5,5] would be five pixels and then five empty pixels.<br>
 * `width` - Specify the width of the line.<br>
 *
 * @constructor
 * @name  CIQ.Renderer.Shading
 * @version ChartIQ Advanced Package
 */
CIQ.Renderer.Shading = function (config) {
	this.construct(config);
	this.beenSetup = false;
	this.errTimeout = null;
	this.params.useChartLegend = false;
	this.shading = [];
	if (this.params.type == "rangechannel") this.highLowBars = true;
};
CIQ.inheritsFrom(CIQ.Renderer.Shading, CIQ.Renderer.Lines, false);

/**
 * Returns a new Shading renderer if the featureList calls for it
 * FeatureList should contain "rangechannel" (draws high and low plots and shades between)
 * Called by {@link CIQ.Renderer.produce} to create a renderer for the main series
 * @param {array} featureList List of rendering terms requested by the user, parsed from the chartType
 * @param {object} [params] Parameters used for the series to be created, used to create the renderer
 * @return {CIQ.Renderer.Shading} A new instance of the Shading renderer, if the featureList matches
 * @memberof CIQ.Renderer.Shading
 * @private
 * @since 5.1.0
 */
CIQ.Renderer.Shading.requestNew = function (featureList, params) {
	let type = null,
		step = null;
	for (let pt = 0; pt < featureList.length; pt++) {
		let pType = featureList[pt];
		if (pType == "rangechannel") type = "rangechannel";
		else if (pType == "step") step = true;
	}
	if (type === null) return null;

	return new CIQ.Renderer.Shading({
		params: CIQ.extend(params, { type, step })
	});
};

/**
 * Sets the shading scheme of the renderer. Lines must be connected by a common y-axis.
 *
 * Example:<br>
 * <iframe width="100%" height="500" scrolling="no" seamless="seamless" align="top" style="float:top" src="https://jsfiddle.net/chartiq/k61mzpce/embedded/result,js,html/" allowfullscreen="allowfullscreen" frameborder="1"></iframe>
 *
 * @param  {array} scheme Single object or array of objects denoting shading.
 * @param  {string} [scheme.primary] Left series for comparison; if omitted, use chart.dataSegment[i].Close.
 * @param  {string} [scheme.secondary] Right series for comparison; if omitted, use first series in the seriesMap.
 * @param  {string} [scheme.color] Color in hex, RGB, RGBA, etc. to shade between primary and secondary.
 * @param  {string} [scheme.greater] Color in hex, RGB, RGBA, etc. to shade between primary and secondary if primary is greater in price than secondary.
 * @param  {string} [scheme.lesser] Color in hex, RGB, RGBA, etc. to shade between primary and secondary if primary is lesser in price than secondary.
 * <br>Notes:
 * - If scheme.greater _and_ scheme.lesser are omitted, scheme.color is used.
 * - If scheme.greater _or_ scheme.lesser are omitted, stx.containerColor is used for the missing color.
 * - At a bare minimum, scheme.color is required.  It is not required if scheme.greater and scheme.lesser are supplied.
 * - If scheme.primary is omitted, the shading will only occur if the series share the same axis as the chart.dataSegment[i].Close.
 * - If shading cannot occur for any reason, series lines will still be drawn.
 * @memberOf CIQ.Renderer.Shading
 * @example
 * renderer.setShading([
 * 	{primary:'ibm', secondary:'ge', greater:'green', lesser:'red'}, // switches shading based on crossover of values
 * 	{primary:'aapl', secondary:'ge', greater:'orange'}, // same as above, but lesser color not specified, so shade that area the container color.
 * 	{primary:'t', secondary:'intc', color:'blue'}, // color always blue between them regardless of which is higher or lower
 * 	{secondary:'t', color:'yellow'}, // compares masterData with the named series
 * 	{color:'yellow'} // automatically shades between master and the first series
 * ]);
 * @version ChartIQ Advanced Package
 */
CIQ.Renderer.Shading.prototype.setShading = function (scheme) {
	if (scheme.constructor != Array) {
		scheme = [scheme];
	}
	this.shading = scheme;
};

CIQ.Renderer.Shading.prototype.draw = function () {
	var stx = this.stx,
		params = this.params,
		chart = stx.panels[params.panel].chart;
	if (params.type == "rangechannel") {
		if (this.beenSetup) {
			if (this.seriesParams.length > 2)
				this.removeSeries(this.seriesParams[2].id);
		} else {
			this.beenSetup = true;
			params.display = this.seriesParams[0].display;
			params.yAxis = this.seriesParams[0].yAxis;
			var shadeColor = this.seriesParams[0].color || "auto";
			var symbol = this.seriesParams[0].symbol,
				prefix = "";
			if (symbol) prefix = symbol + ".";
			this.removeAllSeries(true);
			var name = params.name;
			stx.addSeries(null, {
				symbol: symbol,
				loadData: !!symbol,
				field: "High",
				renderer: "Shading",
				name: name,
				style: "stx_line_up",
				display: params.display,
				shareYAxis: true
			});
			stx.addSeries(null, {
				symbol: symbol,
				loadData: !!symbol,
				field: "Low",
				renderer: "Shading",
				name: name,
				style: "stx_line_down",
				display: params.display,
				shareYAxis: true
			});
			this.setShading({
				primary: this.seriesParams[0].id,
				secondary: this.seriesParams[1].id,
				color: shadeColor
			});
		}
	}
	if (!this.shading) {
		if (!this.errTimeout) {
			console.log(
				"Warning: no shading scheme set.  Use myRenderer.setShading(scheme) to set."
			);
			var self = this;
			this.errTimeout = setTimeout(function () {
				self.errTimeout = null;
			}, 10000);
		}
	}
	var seriesMap = {};
	var s;
	for (s = 0; s < this.seriesParams.length; s++) {
		var defaultParams = {};
		if (chart.series[this.seriesParams[s].id]) {
			// make sure the series is still there.
			defaultParams = CIQ.clone(
				chart.series[this.seriesParams[s].id].parameters
			);
		}
		seriesMap[this.seriesParams[s].id] = {
			parameters: CIQ.extend(
				CIQ.extend(defaultParams, params),
				this.seriesParams[s]
			),
			yValueCache: this.caches[this.seriesParams[s].id]
		};
	}
	stx.drawSeries(chart, seriesMap, params.yAxis, this);

	if (chart.legend && params.type == "rangechannel") {
		if (!chart.legend.colorMap) chart.legend.colorMap = {};
		var display = params.display;
		var colors = [
			stx.getCanvasColor("stx_line_up"),
			stx.getCanvasColor("stx_line_down")
		];
		chart.legend.colorMap[display] = {
			color: colors,
			display: display,
			isBase: this == stx.mainSeriesRenderer
		}; // add in the optional display text to send into the legendRenderer function
	}

	for (s in seriesMap) {
		this.caches[s] = seriesMap[s].yValueCache;
	}

	function joinFields(series) {
		var map = seriesMap[series];
		if (map) {
			var fld = map.parameters.field;
			var subFld = map.parameters.subField;
			return fld + (subFld ? "." + subFld : "");
		}
		return series;
	}

	for (s = 0; s < this.shading.length; s++) {
		var scheme = this.shading[s];
		var color = scheme.color;
		if (scheme.color == "auto") color = stx.defaultColor;
		if (!scheme.primary) scheme.primary = "Close";
		if (!scheme.secondary && this.seriesParams[0])
			scheme.secondary = this.seriesParams[0].field;

		if (!scheme.secondary) continue;
		else if (!seriesMap[scheme.primary] && scheme.primary != "Close") continue;
		else if (!seriesMap[scheme.secondary]) continue;
		else if (
			scheme.primary == "Close" &&
			params.yAxis &&
			params.yAxis != chart.yAxis
		)
			continue; //don't allow shading across axes

		var topFields = joinFields(scheme.primary).split(".");
		var bottomFields = joinFields(scheme.secondary).split(".");
		var parameters = {
			topBand: topFields[0],
			topSubBand: topFields[1],
			topColor: scheme.greater || color || stx.containerColor,
			topAxis: params.yAxis,
			bottomBand: bottomFields[0],
			bottomSubBand: bottomFields[1],
			bottomColor: scheme.lesser || color || stx.containerColor,
			bottomAxis: scheme.primary == "Close" ? null : params.yAxis,
			tension: params.tension || chart.tension,
			opacity: 0.1,
			step: params.step
		};
		if (!parameters.topColor && !parameters.bottomColor) continue;
		if (!params.highlight && stx.highlightedDraggable)
			parameters.opacity *= 0.3;
		CIQ.fillIntersecting(stx, params.panel, parameters);
	}
};

/**
 * Creates a multi-part histogram renderer where bars can be stacked one on top of the other, clustered next to each other, or overlaid over each other.
 *
 * See {@link CIQ.Renderer#construct} for parameters required by all renderers.
 *
 * See {@link CIQ.ChartEngine#drawHistogram}  for more details.
 *
 * @param {Object} config Config for renderer
 * @param  {object} [config.params] Parameters to control the renderer itself
 * @param  {boolean} [config.params.defaultBorders =false] Whether to draw a border for each bar as a whole.  Can be overridden by a border set for a series.
 * @param  {number} [config.params.widthFactor =.8] Width of each bar as a percentage of the candleWidth. Valid values are 0.00-1.00.
 * @param  {number} [config.params.heightPercentage =.7] The amount of vertical space to use, valid values are 0.00-1.00.
 * @param  {boolean} [config.params.bindToYAxis =true] Set to true to bind the rendering to the y-axis and to draw it. Automatically set if params.yAxis is present.
 * @param  {string} [config.params.subtype="overlaid"] Subtype of rendering "stacked", "clustered", "overlaid"
 *
 * Common valid parameters for use by attachSeries.:<br>
 * `fill_color_up` - Color to use for up histogram bars.<br>
 * `fill_color_down` - Color to use for down histogram bars.<br>
 * `border_color_up` - Color to use for the border of up histogram bars.<br>
 * `border_color_down` - Color to use for the order of down histogram bars.<br>
 *
 * @constructor
 * @name  CIQ.Renderer.Histogram
 * 	@example
	// configure the histogram display
	var params={
		name:				"Sentiment Data",
		subtype:			"stacked",
		heightPercentage:	.7,	 // how high to go. 1 = 100%
		widthFactor:		.8	 // to control space between bars. 1 = no space in between
	};

 	//legend creation callback (optional)
	function histogramLegend(colors){
        stxx.chart.legendRenderer(stxx,{legendColorMap:colors, coordinates:{x:260, y:stxx.panels["chart"].yAxis.top+30}, noBase:true});
    }

	// set the renderer
	var histRenderer=stxx.setSeriesRenderer(new CIQ.Renderer.Histogram({params: params, callback: histogramLegend}));

	// add data and attach.
	stxx.addSeries("^NIOALL", {display:"Symbol 1"}, function() {histRenderer.attachSeries("^NIOALL","#6B9CF7").ready();});
	stxx.addSeries("^NIOAFN", {display:"Symbol 2"}, function() {histRenderer.attachSeries("^NIOAFN","#95B7F6").ready();});
	stxx.addSeries("^NIOAMD", {display:"Symbol 3"}, function() {histRenderer.attachSeries("^NIOAMD","#B9D0F5").ready();});
 *
 * @example
	// this is an example on how completely remove a renderer and all associated data.
	// This should only be necessary if you are also removing the chart itself

	// Remove all series from the renderer including series data from the masterData
	renderer.removeAllSeries(true);

	// detach the series renderer from the chart.
	stxx.removeSeriesRenderer(renderer);

	// delete the renderer itself.
	delete renderer;

 * @example <caption>Set a baseline value, allowing negative bars.</caption>
 * const yax = new CIQ.ChartEngine.YAxis({
 *     baseline: 0
 * });
 * const rndr = stxx.setSeriesRenderer(
 *     new CIQ.Renderer.Histogram({
 *         params: {
 *             // Can be an overlaid or clustered histogram.
 *             subtype: 'clustered',
 *             yAxis: yax
 *         }
 *     })
 * );
 *
 * @example <caption>Render a horizontal line at the baseline value.</caption>
 * const yax = new CIQ.ChartEngine.YAxis({
 *     baseline: {
 *         value: 0,
 *         // Must provide color to render the horizontal line,
 *         // and can optionally provide pattern, lineWidth, and opacity.
 *         color: "red",
 *         pattern: "dotted",
 *         lineWidth: 2,
 *         opacity: 1
 *     }
 * });
 *
 * @version ChartIQ Advanced Package
 * @since 7.5.0 Added the ability to draw negative bars when `yAxis.baseline` is set to zero
 * 		or some other value (see examples).
 */
CIQ.Renderer.Histogram = function (config) {
	this.construct(config);
	this.params.type = "histogram";
	this.barsHaveWidth = this.standaloneBars = true;

	if (this.params.yAxis) {
		this.params.bindToYAxis = true;

		if (typeof this.params.yAxis.baseline == "number") {
			this.params.yAxis.baseline = {
				value: this.params.yAxis.baseline
			};
		}
	}
};

CIQ.inheritsFrom(CIQ.Renderer.Histogram, CIQ.Renderer, false);

CIQ.Renderer.Histogram.prototype.adjustYAxis = function () {
	const yAxis = this.params.yAxis;

	if (!yAxis || yAxis.baseline) return;

	yAxis.min = 0;
	yAxis.highValue /= this.params.heightPercentage || 1;
};

CIQ.Renderer.Histogram.prototype.draw = function () {
	var params = CIQ.clone(this.params);
	params.type = params.subtype;
	this.useSum = params.subtype == "stacked";
	if (!params.yAxis || params.yAxis == this.stx.chart.yAxis)
		params.bindToYAxis = true;
	this.stx.drawHistogram(params, this.seriesParams);

	const baseline = params.yAxis && params.yAxis.baseline;

	if (baseline && baseline.color) {
		const panel = this.stx.panels[this.params.panel];
		const baselineY =
			this.stx.pixelFromPrice(baseline.value, panel, this.params.yAxis) - 0.5;

		this.stx.plotLine({
			x0: panel.left,
			x1: panel.right,
			y0: baselineY,
			y1: baselineY,
			color: baseline.color,
			type: "line",
			context: panel.chart.context,
			confineToPanel: panel,
			pattern: baseline.pattern || "solid",
			lineWidth: baseline.lineWidth || 1,
			opacity: baseline.opacity || 0.8,
			globalCompositeOperation: "destination-over"
		});
	}
};

CIQ.Renderer.Histogram.prototype.getBasis = function (quote, field, subField) {
	var value = 0;
	if (quote && this.useSum) {
		for (var j = 0; j < this.seriesParams.length; j++) {
			var seriesField = this.seriesParams[j].field;
			if (seriesField === field) break;
			var f = quote[seriesField];
			if (f && typeof f === "object")
				f =
					f[
						subField ||
							this.seriesParams[j].subField ||
							this.stx.chart.defaultPlotField ||
							"Close"
					];
			if (f) value += f;
		}
	}
	return value;
};

/**
 * Creates a Heatmap renderer.
 *
 * See {@link CIQ.Renderer#construct} for parameters required by all renderers.
 *
 * Each attached series will represent a stream of colors for the heatmap.
 *
 * **Note special data formatting when using [addSeries]{@link CIQ.ChartEngine#addSeries}, where the custom field that will be used for the stream of datapoints (`Bids` in our example), is an array of values.**
 *
 * Visual Reference - single color series:<br>
 * ![img-histogram-single-color](img-histogram-single-color.png "img-histogram-single-color")
 *
 * For advanced heatmap implementations where all the data is received already with a color for each datapoint, use an injection that directly calls {@link CIQ.ChartEngine#drawHeatmap} as outlined in this example:<br>
 * <iframe width="100%" height="500" scrolling="no" seamless="seamless" align="top" style="float:top" src="https://jsfiddle.net/chartiq/s27v0pt8/embedded/result,js,html/" allowfullscreen="allowfullscreen" frameborder="1"></iframe>
 *
 * @param {Object} config Config for renderer
 * @param  {object} [config.params] Parameters to control the renderer itself
 * @param  {number} [config.params.widthFactor=1] Width of each bar as a percentage of the candleWidth. Valid values are 0.00-1.00.
 * @param  {number} [config.params.height] The amount of vertical space to use, in price units. For example, 2=>2 unit increments on y-axis.
 * @constructor
 * @name  CIQ.Renderer.Heatmap
 * @version ChartIQ Advanced Package
 * @example
 *  // note special data formatting, where the custom field name that will be used for the stream of datapoints, is an array of values.
 *  var renderer=stxx.setSeriesRenderer(new CIQ.Renderer.Heatmap());
 *  stxx.addSeries(
 *   	"L2",
 * 			{ data:[
 *       		{DT:"2019-01-04",Bids:[100,100.3,100.2,101]},
 *       		{DT:"2019-01-07",Bids:[101,101.5,102,103]},
 *       		{DT:"2019-01-08",Bids:[101.2,101.5,101.7,102]},
 *        		{DT:"2019-01-09",Bids:[101.3,101.7,101.9]},
 *       		{DT:"2019-01-10",Bids:[102]}]
 *   		},
 *    	function(){
 *             renderer.attachSeries("L2", {field:"Bids",color:"#FF9300"}).ready();
 *   	}
 *  );
 */
CIQ.Renderer.Heatmap = function (config) {
	this.construct(config);
	this.params.type = "heatmap";
	this.params.highlightable = false;
	this.barsHaveWidth = this.standaloneBars = true;
};

CIQ.inheritsFrom(CIQ.Renderer.Heatmap, CIQ.Renderer, false);

/**
 * Returns a new `Heatmap` renderer if the `featureList` calls for it; `featureList` should contain "heatmap".
 * Called by {@link CIQ.Renderer.produce} to create a renderer for the main series.
 *
 * @param {array} featureList List of rendering terms requested by the user, parsed from the chart type.
 * @param {object} [params] Parameters used for the series to be created, used to create the renderer.
 * @return {CIQ.Renderer.Heatmap} A new instance of the `Heatmap` renderer, if the `featureList` matches.
 * @memberof CIQ.Renderer.Heatmap
 * @private
 * @since 7.3.0
 */
CIQ.Renderer.Heatmap.requestNew = function (featureList, params) {
	var type = null;
	for (var pt = 0; pt < featureList.length; pt++) {
		var pType = featureList[pt];
		if (pType == "heatmap") type = "heatmap";
	}
	if (type === null) return null;

	return new CIQ.Renderer.Heatmap({
		params: CIQ.extend(params, { type: type })
	});
};

CIQ.Renderer.Heatmap.prototype.draw = function () {
	this.stx.drawHeatmap(CIQ.clone(this.params), this.seriesParams);
};

/**
 * Creates a Scatter plot renderer
 * See {@link CIQ.Renderer#construct} for parameters required by all renderers
 * @param {Object} config Config for renderer
 * @param  {object} [config.params] Parameters to control the renderer itself
 * @constructor
 * @name  CIQ.Renderer.Scatter
 * @version ChartIQ Advanced Package
 */
CIQ.Renderer.Scatter = function (config) {
	this.construct(config);
	this.standaloneBars = this.barsHaveWidth = true;
	this.bounded = true;
};

CIQ.inheritsFrom(CIQ.Renderer.Scatter, CIQ.Renderer.Lines, false);

/**
 * Returns a new Scatter renderer if the featureList calls for it
 * FeatureList should contain "scatter"
 * Called by {@link CIQ.Renderer.produce} to create a renderer for the main series
 * @param {array} featureList List of rendering terms requested by the user, parsed from the chartType
 * @param {object} [params] Parameters used for the series to be created, used to create the renderer
 * @return {CIQ.Renderer.Scatter} A new instance of the Scatter renderer, if the featureList matches
 * @memberof CIQ.Renderer.Scatter
 * @since 5.1.0
 */
CIQ.Renderer.Scatter.requestNew = function (featureList, params) {
	var type = null;
	for (var pt = 0; pt < featureList.length; pt++) {
		var pType = featureList[pt];
		if (pType == "scatterplot") type = "scatter";
	}
	if (type === null) return null;

	return new CIQ.Renderer.Scatter({
		params: CIQ.extend(params, { type: type })
	});
};

CIQ.Renderer.Scatter.prototype.drawIndividualSeries = function (
	chart,
	parameters
) {
	var panel = this.stx.panels[parameters.panel] || chart.panel;
	var rc = { colors: [] };
	if (this.stx.scatter) rc = this.stx.scatter(panel, parameters);
	else console.warn("Error, Scatter renderer requires customChart.js");
	return rc;
};

};


let __js_advanced_studies_accumulationDistribution_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"accumulationDistribution feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateAccumulationDistribution = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		for (var i = sd.startFrom; i < quotes.length; i++) {
			if (!i) continue;
			var quote = quotes[i];
			if (quote.futureTick) break;
			var quote1 = quotes[i - 1];
			var todayAD = 0;
			if (quote.Close > quote1.Close) {
				todayAD = quote.Close - Math.min(quote.Low, quote1.Close);
			} else if (quote.Close < quote1.Close) {
				todayAD = quote.Close - Math.max(quote.High, quote1.Close);
			}
			if (sd.inputs["Use Volume"]) todayAD *= quote.Volume;

			var total = quote1["Result " + sd.name];
			if (!total) total = 0;
			total += todayAD;
			if (!isNaN(quote.Close)) quote["Result " + sd.name] = total;
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"W Acc Dist": {
			name: "Accumulation/Distribution",
			calculateFN: CIQ.Studies.calculateAccumulationDistribution,
			inputs: { "Use Volume": false }
		}
	});
}

};


let __js_advanced_studies_adx_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("adx feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateADX = function (stx, sd) {
		CIQ.Studies.calculateStudyATR(stx, sd);

		var quotes = sd.chart.scrubbed;
		var period = sd.days;
		var smoothing = parseInt(sd.inputs["Smoothing Period"], 10);
		if (!smoothing && smoothing !== 0) smoothing = period;

		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}

		var smoothTR = 0;
		var smoothPlusDM = 0;
		var smoothMinusDM = 0;
		var runningDX = 0;
		var quote;
		for (var i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			quote = quotes[i];
			var plusDM = Math.max(0, quote.High - quotes[i - 1].High);
			var minusDM = Math.max(0, quotes[i - 1].Low - quote.Low);
			if (plusDM > minusDM) minusDM = 0;
			else if (minusDM > plusDM) plusDM = 0;
			else plusDM = minusDM = 0;

			if (i <= period) {
				smoothPlusDM += plusDM;
				smoothMinusDM += minusDM;
				smoothTR += quote["True Range " + sd.name];
			} else {
				smoothPlusDM =
					(quotes[i - 1]["_sm+DM " + sd.name] * (period - 1)) / period + plusDM;
				smoothMinusDM =
					(quotes[i - 1]["_sm-DM " + sd.name] * (period - 1)) / period +
					minusDM;
				smoothTR =
					(quotes[i - 1]["_smTR " + sd.name] * (period - 1)) / period +
					quote["True Range " + sd.name];
			}
			quote["_sm+DM " + sd.name] = smoothPlusDM;
			quote["_sm-DM " + sd.name] = smoothMinusDM;
			quote["_smTR " + sd.name] = smoothTR;

			if (i < period) continue;

			var plusDI = (100 * smoothPlusDM) / smoothTR;
			var minusDI = (100 * smoothMinusDM) / smoothTR;
			var DX = (100 * Math.abs(plusDI - minusDI)) / (plusDI + minusDI);

			quote["+DI " + sd.name] = plusDI;
			quote["-DI " + sd.name] = minusDI;
			if (sd.inputs.Series !== false && smoothing) {
				if (i < period + smoothing - 1) {
					if (i == sd.startFrom) {
						for (var j = period; j < sd.startFrom; j++) {
							runningDX +=
								(100 *
									Math.abs(
										quotes[j]["+DI " + sd.name] - quotes[j]["-DI " + sd.name]
									)) /
								(quotes[j]["+DI " + sd.name] + quotes[j]["-DI " + sd.name]);
						}
					}
					runningDX += DX;
				} else if (i == period + smoothing - 1) {
					quote["ADX " + sd.name] = runningDX / smoothing;
				} else {
					quote["ADX " + sd.name] =
						(quotes[i - 1]["ADX " + sd.name] * (smoothing - 1) + DX) /
						smoothing;
				}
			}
			if (sd.inputs.Histogram) {
				var histogram = sd.name + "_hist";
				if (!quote["+DI " + sd.name] && quote["+DI " + sd.name] !== 0) continue;
				if (!quote["-DI " + sd.name] && quote["-DI " + sd.name] !== 0) continue;
				quote[histogram] = quote["+DI " + sd.name] - quote["-DI " + sd.name];
				if (sd.inputs.Series === false) {
					//delete these so yAxis computes max/min correctly
					quote["+DI " + sd.name] = null;
					quote["-DI " + sd.name] = null;
				}
				sd.outputMap[histogram] = "";
			}
		}
	};

	CIQ.Studies.displayADX = function (stx, sd, quotes) {
		var opacity = sd.underlay ? 0.3 : sd.inputs.Series ? 0.4 : 1;
		if (sd.inputs.Series && sd.inputs.Shading) {
			var topBand = "+DI " + sd.name,
				bottomBand = "-DI " + sd.name;
			var topColor = CIQ.Studies.determineColor(
					sd.outputs[sd.outputMap[topBand]]
				),
				bottomColor = CIQ.Studies.determineColor(
					sd.outputs[sd.outputMap[bottomBand]]
				);
			var yAxis = sd.getYAxis(stx);
			var parameters = {
				topBand: topBand,
				bottomBand: bottomBand,
				topColor: topColor,
				bottomColor: bottomColor,
				skipTransform: stx.panels[sd.panel].name != sd.chart.name,
				topAxis: yAxis,
				bottomAxis: yAxis,
				opacity: 0.3
			};
			if (!sd.highlight && stx.highlightedDraggable) parameters.opacity *= 0.3;
			CIQ.fillIntersecting(stx, sd.panel, parameters);
		}
		if (sd.inputs.Histogram)
			CIQ.Studies.createHistogram(stx, sd, quotes, false, opacity);
		if (sd.inputs.Series !== false)
			CIQ.Studies.displaySeriesAsLine(stx, sd, quotes);
		else if (!sd.inputs.Series && !sd.inputs.Histogram)
			stx.displayErrorAsWatermark(
				sd.panel,
				stx.translateIf(sd.name) + ": " + stx.translateIf("Nothing to display")
			);
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		ADX: {
			name: "ADX/DMS",
			calculateFN: CIQ.Studies.calculateADX,
			seriesFN: CIQ.Studies.displayADX,
			inputs: {
				Period: 14,
				"Smoothing Period": 14,
				Series: true,
				Shading: false,
				Histogram: false
			},
			outputs: {
				"+DI": "#00FF00",
				"-DI": "#FF0000",
				ADX: "auto",
				"Positive Bar": "#00DD00",
				"Negative Bar": "#FF0000"
			}
		}
	});
}

};


let __js_advanced_studies_alligator_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("alligator feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateAlligator = function (stx, sd) {
		var periods = {
			J: Number(sd.inputs["Jaw Period"]),
			T: Number(sd.inputs["Teeth Period"]),
			L: Number(sd.inputs["Lips Period"])
		};
		var quotes = sd.chart.scrubbed;
		if (quotes.length < Math.max(periods.J, periods.T, periods.L) + 1) {
			sd.error = true;
			return;
		}

		if (sd.type === "Gator" || sd.inputs["Show Lines"]) {
			// Gator always displays lines
			CIQ.Studies.MA(
				"welles wilder",
				periods.J,
				"hl/2",
				sd.inputs["Jaw Offset"],
				"Jaw",
				stx,
				sd
			);
			CIQ.Studies.MA(
				"welles wilder",
				periods.T,
				"hl/2",
				sd.inputs["Teeth Offset"],
				"Teeth",
				stx,
				sd
			);
			CIQ.Studies.MA(
				"welles wilder",
				periods.L,
				"hl/2",
				sd.inputs["Lips Offset"],
				"Lips",
				stx,
				sd
			);
		}

		for (var i = sd.startFrom; i < quotes.length; i++) {
			if (!quotes[i]) continue;
			if (sd.type == "Gator") {
				var jaw = quotes[i]["Jaw " + sd.name],
					lips = quotes[i]["Lips " + sd.name],
					teeth = quotes[i]["Teeth " + sd.name];
				if (teeth || teeth === 0) {
					if (jaw || jaw === 0)
						quotes[i][sd.name + "_hist1"] = Math.abs(jaw - teeth);
					if (lips || lips === 0)
						quotes[i][sd.name + "_hist2"] = -Math.abs(teeth - lips);
				}
				sd.outputMap = {};
				sd.outputMap[sd.name + "_hist1"] = "";
				sd.outputMap[sd.name + "_hist2"] = "";
			}
			if (sd.inputs["Show Fractals"]) {
				if (
					!quotes[i - 2] ||
					!quotes[i - 1] ||
					!quotes[i] ||
					!quotes[i + 1] ||
					!quotes[i + 2]
				)
					continue;
				if (
					quotes[i - 2].High &&
					quotes[i - 1].High &&
					quotes[i].High &&
					quotes[i + 1].High &&
					quotes[i + 2].High
				) {
					if (
						quotes[i].High > quotes[i - 1].High &&
						quotes[i].High > quotes[i - 2].High &&
						quotes[i].High > quotes[i + 1].High &&
						quotes[i].High > quotes[i + 2].High
					) {
						quotes[i]["Fractal High " + sd.name] = 1;
					}
				}
				if (
					quotes[i - 2].Low &&
					quotes[i - 1].Low &&
					quotes[i].Low &&
					quotes[i + 1].Low &&
					quotes[i + 2].Low
				) {
					if (
						quotes[i].Low < quotes[i - 1].Low &&
						quotes[i].Low < quotes[i - 2].Low &&
						quotes[i].Low < quotes[i + 1].Low &&
						quotes[i].Low < quotes[i + 2].Low
					) {
						quotes[i]["Fractal Low " + sd.name] = 1;
					}
				}
			}
		}
	};

	CIQ.Studies.displayAlligator = function (stx, sd, quotes) {
		function drawFractal(highLow, index) {
			//stx.canvasFont("???");
			var y;
			var flipped = stx.chart.panel.yAxis.flipped;
			if (highLow == "high") {
				context.fillStyle = stx.defaultColor;
				context.textBaseline = flipped ? "top" : "bottom";
				y = stx.pixelFromPrice(quotes[index].High);
				context.fillText(
					flipped ? "\u25BC" : "\u25B2",
					stx.pixelFromBar(i, stx.chart) -
						context.measureText("\u25B2").width / 2 +
						1,
					flipped ? y + 5 : y - 5
				); // up arrow
			} else if (highLow == "low") {
				context.fillStyle = stx.defaultColor;
				context.textBaseline = flipped ? "bottom" : "top";
				y = stx.pixelFromPrice(quotes[index].Low);
				context.fillText(
					flipped ? "\u25B2" : "\u25BC",
					stx.pixelFromBar(i, stx.chart) -
						context.measureText("\u25BC").width / 2 +
						1,
					flipped ? y - 5 : y + 5
				); // down arrow
			}
		}
		var context = sd.getContext(stx);
		if (sd.inputs["Show Lines"])
			CIQ.Studies.displaySeriesAsLine(stx, sd, quotes);
		if (sd.inputs["Show Fractals"]) {
			stx.startClip(); // Fractals always stay on the chart panel
			context.globalAlpha = sd.underlay ? 0.3 : 1;
			if (!sd.highlight && stx.highlightedDraggable) context.globalAlpha *= 0.3;
			for (var i = 2; i < quotes.length - 2; i++) {
				if (quotes[i]) {
					if (quotes[i]["Fractal High " + sd.name]) drawFractal("high", i);
					if (quotes[i]["Fractal Low " + sd.name]) drawFractal("low", i);
				}
			}
			stx.endClip();
		}
	};

	CIQ.Studies.displayGator = function (stx, sd, quotes) {
		var panel = stx.panels[sd.panel],
			context = sd.getContext(stx);
		var yAxis = sd.getYAxis(stx);
		var y = stx.pixelFromPrice(0, panel, yAxis);

		var myWidth = stx.layout.candleWidth - 2;
		if (myWidth < 2) myWidth = 1;

		var upColor = CIQ.Studies.determineColor(sd.outputs["Increasing Bar"]);
		var downColor = CIQ.Studies.determineColor(sd.outputs["Decreasing Bar"]);
		stx.canvasColor("stx_histogram");
		if (!sd.underlay) context.globalAlpha = 1;
		context.fillStyle = "#CCCCCC";
		stx.startClip(sd.panel);
		if (!sd.highlight && stx.highlightedDraggable) context.globalAlpha *= 0.3;
		for (var i = 0; i < quotes.length; i++) {
			var quote = quotes[i],
				quote_1 = quotes[i - 1];
			if (!quote) continue;
			for (var j = 1; j <= 2; j++) {
				if (!quote_1)
					quote_1 = stx.getPreviousBar(stx.chart, sd.name + "_hist" + j, i);
				if (!quote_1) context.fillStyle = "#CCCCCC";
				else if (
					Math.abs(quote_1[sd.name + "_hist" + j]) <
					Math.abs(quote[sd.name + "_hist" + j])
				)
					context.fillStyle = upColor;
				else if (
					Math.abs(quote_1[sd.name + "_hist" + j]) >
					Math.abs(quote[sd.name + "_hist" + j])
				)
					context.fillStyle = downColor;
				if (quote.candleWidth)
					myWidth = Math.floor(Math.max(1, quote.candleWidth - 2));
				context.fillRect(
					Math.floor(stx.pixelFromBar(i, panel.chart) - myWidth / 2),
					Math.floor(y),
					Math.floor(myWidth),
					Math.floor(
						stx.pixelFromPrice(quote[sd.name + "_hist" + j], panel, yAxis) - y
					)
				);
			}
		}
		stx.endClip();
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Alligator: {
			name: "Alligator",
			overlay: true,
			seriesFN: CIQ.Studies.displayAlligator,
			calculateFN: CIQ.Studies.calculateAlligator,
			inputs: {
				"Show Lines": true,
				"Jaw Period": 13,
				"Jaw Offset": 8,
				"Teeth Period": 8,
				"Teeth Offset": 5,
				"Lips Period": 5,
				"Lips Offset": 3,
				"Show Fractals": false
			},
			outputs: { Jaw: "#0000FF", Teeth: "#FF0000", Lips: "#00DD00" }
		},
		Gator: {
			name: "Gator Oscillator",
			seriesFN: CIQ.Studies.displayGator,
			calculateFN: CIQ.Studies.calculateAlligator,
			inputs: {
				"Jaw Period": 13,
				"Jaw Offset": 8,
				"Teeth Period": 8,
				"Teeth Offset": 5,
				"Lips Period": 5,
				"Lips Offset": 3
			},
			outputs: { "Increasing Bar": "#00DD00", "Decreasing Bar": "#FF0000" },
			centerline: 0
		}
	});
}

};


let __js_advanced_studies_aroon_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("aroon feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateAroon = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var daysSinceHigh = 0,
			daysSinceLow = 0;
		var xDayHigh = null,
			xDayLow = null;
		if (sd.startFrom > 0) {
			var state = quotes[sd.startFrom - 1]["_state " + sd.name];
			if (state) {
				daysSinceHigh = state[0];
				daysSinceLow = state[1];
				xDayHigh = state[2];
				xDayLow = state[3];
			}
		}
		var j;
		for (var i = sd.startFrom; i < quotes.length; i++) {
			var quote = quotes[i];
			if (quote.futureTick) break;
			if (xDayHigh === null) xDayHigh = quote.High;
			if (xDayLow === null) xDayLow = quote.Low;
			xDayHigh = Math.max(xDayHigh, quote.High);
			if (xDayHigh == quote.High) {
				daysSinceHigh = 0;
			} else {
				daysSinceHigh++;
				if (daysSinceHigh > sd.days) {
					xDayHigh = quote.High;
					daysSinceHigh = 0;
					for (j = 1; j <= sd.days; j++) {
						xDayHigh = Math.max(xDayHigh, quotes[i - j].High);
						if (xDayHigh == quotes[i - j].High) {
							daysSinceHigh = j;
						}
					}
				}
			}
			xDayLow = Math.min(xDayLow, quote.Low);
			if (xDayLow == quote.Low) {
				daysSinceLow = 0;
			} else {
				daysSinceLow++;
				if (daysSinceLow > sd.days) {
					xDayLow = quote.Low;
					daysSinceLow = 0;
					for (j = 1; j <= sd.days; j++) {
						xDayLow = Math.min(xDayLow, quotes[i - j].Low);
						if (xDayLow == quotes[i - j].Low) {
							daysSinceLow = j;
						}
					}
				}
			}
			var nHi = !isNaN(quote.High),
				nLo = !isNaN(quote.Low);
			var up = 100 * (1 - daysSinceHigh / sd.days);
			if (nHi) quote["Aroon Up " + sd.name] = up;
			var down = 100 * (1 - daysSinceLow / sd.days);
			if (nLo) quote["Aroon Down " + sd.name] = down;
			if (nHi && nLo)
				quote["Aroon Oscillator " + sd.name] =
					quote["Aroon Up " + sd.name] - quote["Aroon Down " + sd.name];
			quote["_state " + sd.name] = [
				daysSinceHigh,
				daysSinceLow,
				xDayHigh,
				xDayLow
			];
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Aroon: {
			name: "Aroon",
			range: "0 to 100",
			calculateFN: CIQ.Studies.calculateAroon,
			outputs: { "Aroon Up": "#00DD00", "Aroon Down": "#FF0000" }
		},
		"Aroon Osc": {
			name: "Aroon Oscillator",
			calculateFN: CIQ.Studies.calculateAroon,
			outputs: { "Aroon Oscillator": "auto" }
		}
	});
}

};


let __js_advanced_studies_atr_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("atr feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateATRBands = function (stx, sd) {
		CIQ.Studies.calculateStudyATR(stx, sd);
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		CIQ.Studies.calculateGenericEnvelope(
			stx,
			sd,
			sd.inputs.Shift,
			field,
			"ATR " + sd.name
		);
	};

	CIQ.Studies.calculateSTARCBands = function (stx, sd) {
		CIQ.Studies.calculateStudyATR(stx, sd);
		CIQ.Studies.MA(
			"simple",
			sd.inputs["MA Period"],
			"Close",
			0,
			"_MA",
			stx,
			sd
		);
		CIQ.Studies.calculateGenericEnvelope(
			stx,
			sd,
			sd.inputs.Multiplier,
			"_MA " + sd.name,
			"ATR " + sd.name
		);
	};

	CIQ.Studies.calculateATRStops = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (!quotes) return;
		CIQ.Studies.calculateStudyATR(stx, sd);
		var useHighLow = sd.inputs.HighLow;
		for (var i = Math.max(sd.startFrom - 1, 1); i < quotes.length - 1; i++) {
			var prices = quotes[i];
			var pd = quotes[i - 1];
			var prev = prices["Buy Stops " + sd.name];
			if (!prev) prev = prices["Sell Stops " + sd.name];
			if (!prev) prev = 0;
			if (!prices || !pd) continue;
			var base = prices.Close;
			var result = base;
			var offset = prices["ATR " + sd.name] * sd.inputs.Multiplier;
			if (prices.Close > prev && pd.Close > prev) {
				if (useHighLow) base = prices.High;
				result = Math.max(prev, base - offset);
			} else if (prices.Close <= prev && pd.Close <= prev) {
				if (useHighLow) base = prices.Low;
				result = Math.min(prev, base + offset);
			} else if (prices.Close > prev) {
				if (useHighLow) base = prices.High;
				result = base - offset;
			} else if (prices.Close <= prev) {
				if (useHighLow) base = prices.Low;
				result = base + offset;
			}
			if (base <= result) {
				quotes[i + 1]["Buy Stops " + sd.name] = result;
				delete quotes[i + 1]["Sell Stops " + sd.name];
			} else if (base > result) {
				quotes[i + 1]["Sell Stops " + sd.name] = result;
				delete quotes[i + 1]["Buy Stops " + sd.name];
			}
			quotes[i + 1]["All Stops " + sd.name] = result;
		}
		sd.referenceOutput = "All Stops"; //so PSAR2 can draw a square wave
		sd.outputMap = {};
		sd.outputMap["All Stops " + sd.name] = "";
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		ATR: {
			name: "Average True Range",
			calculateFN: CIQ.Studies.calculateStudyATR,
			outputs: { ATR: "auto" }
		},
		"ATR Bands": {
			name: "ATR Bands",
			overlay: true,
			seriesFN: CIQ.Studies.displayChannel,
			calculateFN: CIQ.Studies.calculateATRBands,
			inputs: { Period: 5, Field: "field", Shift: 3, "Channel Fill": true },
			outputs: {
				"ATR Bands Top": "auto",
				"ATR Bands Bottom": "auto",
				"ATR Bands Channel": "auto"
			},
			attributes: {
				Shift: { min: 0.1, step: 0.1 }
			}
		},
		"STARC Bands": {
			name: "STARC Bands",
			overlay: true,
			seriesFN: CIQ.Studies.displayChannel,
			calculateFN: CIQ.Studies.calculateSTARCBands,
			inputs: {
				Period: 15,
				"MA Period": 5,
				Multiplier: 1.3,
				"Channel Fill": true
			},
			outputs: {
				"STARC Bands Top": "auto",
				"STARC Bands Median": "auto",
				"STARC Bands Bottom": "auto"
			},
			attributes: {
				Multiplier: { min: 0.1, step: 0.1 }
			}
		},
		"ATR Trailing Stop": {
			name: "ATR Trailing Stops",
			overlay: true,
			seriesFN: CIQ.Studies.displayPSAR2,
			calculateFN: CIQ.Studies.calculateATRStops,
			inputs: {
				Period: 21,
				Multiplier: 3,
				"Plot Type": ["points", "squarewave"],
				HighLow: false
			},
			outputs: { "Buy Stops": "#FF0000", "Sell Stops": "#00FF00" },
			attributes: {
				Multiplier: { min: 0.1, step: 0.1 }
			}
		}
	});
}

};


let __js_advanced_studies_awesomeOscillator_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"awesomeOscillator feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateAwesomeOscillator = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < 33) {
			sd.error = true;
			return;
		}

		CIQ.Studies.MA("simple", 5, "hl/2", 0, "_MA5", stx, sd);
		CIQ.Studies.MA("simple", 34, "hl/2", 0, "_MA34", stx, sd);

		for (var i = Math.max(sd.startFrom, 33); i < quotes.length; i++) {
			if (!quotes[i]) continue;
			quotes[i][sd.name + "_hist"] =
				quotes[i]["_MA5 " + sd.name] - quotes[i]["_MA34 " + sd.name];
		}
		sd.outputMap = {};
		sd.outputMap[sd.name + "_hist"] = "";
	};

	CIQ.Studies.displayAwesomeOscillator = function (stx, sd, quotes) {
		var panel = stx.panels[sd.panel],
			context = sd.getContext(stx);
		var yAxis = sd.getYAxis(stx);

		var y = stx.pixelFromPrice(0, panel, yAxis);

		var myWidth = stx.layout.candleWidth - 2;
		if (myWidth < 2) myWidth = 1;

		var upColor = CIQ.Studies.determineColor(sd.outputs["Increasing Bar"]);
		var downColor = CIQ.Studies.determineColor(sd.outputs["Decreasing Bar"]);
		stx.canvasColor("stx_histogram");
		if (!sd.underlay) context.globalAlpha = 1;
		context.fillStyle = "#CCCCCC";
		stx.startClip(sd.panel);
		if (!sd.highlight && stx.highlightedDraggable) context.globalAlpha *= 0.3;
		for (var i = 0; i < quotes.length; i++) {
			var quote = quotes[i],
				quote_1 = quotes[i - 1];
			if (!quote_1)
				quote_1 = stx.getPreviousBar(stx.chart, sd.name + "_hist", i);
			if (!quote) continue;
			if (!quote_1);
			else if (quote_1[sd.name + "_hist"] < quote[sd.name + "_hist"])
				context.fillStyle = upColor;
			else if (quote_1[sd.name + "_hist"] > quote[sd.name + "_hist"])
				context.fillStyle = downColor;
			if (quote.candleWidth)
				myWidth = Math.floor(Math.max(1, quote.candleWidth - 2));
			context.fillRect(
				Math.floor(stx.pixelFromBar(i, panel.chart) - myWidth / 2),
				Math.floor(y),
				Math.floor(myWidth),
				Math.floor(
					stx.pixelFromPrice(quote[sd.name + "_hist"], panel, yAxis) - y
				)
			);
		}
		stx.endClip();
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Awesome: {
			name: "Awesome Oscillator",
			seriesFN: CIQ.Studies.displayAwesomeOscillator,
			calculateFN: CIQ.Studies.calculateAwesomeOscillator,
			inputs: {},
			outputs: { "Increasing Bar": "#00DD00", "Decreasing Bar": "#FF0000" }
		}
	});
}

};


let __js_advanced_studies_balanceOfPower_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"balanceOfPower feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateBalanceOfPower = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		for (var i = sd.startFrom; i < quotes.length; i++) {
			var quote = quotes[i];
			quote["_Ratio " + sd.name] = quote.Close - quote.Open;
			if (quote.High - quote.Low !== 0)
				// avoid division by zero
				quote["_Ratio " + sd.name] /= quote.High - quote.Low;
		}
		CIQ.Studies.MA(
			sd.inputs["Moving Average Type"],
			sd.days,
			"_Ratio " + sd.name,
			0,
			"Result",
			stx,
			sd
		);
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Bal Pwr": {
			name: "Balance of Power",
			range: "-1 to 1",
			centerline: 0,
			calculateFN: CIQ.Studies.calculateBalanceOfPower,
			inputs: { Period: 14, "Moving Average Type": "ma" }
		}
	});
}

};


let __js_advanced_studies_bollinger_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("bollinger feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateBollinger = function (stx, sd) {
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";

		CIQ.Studies.MA(
			sd.inputs["Moving Average Type"],
			sd.days,
			field,
			0,
			"_MA",
			stx,
			sd
		);

		sd.std = new CIQ.Studies.StudyDescriptor(sd.name, "STD Dev", sd.panel);
		sd.std.chart = sd.chart;
		sd.std.startFrom = sd.startFrom;
		sd.std.days = sd.days;
		sd.std.inputs = {
			Field: field,
			"Standard Deviations": 1,
			Type: sd.inputs["Moving Average Type"]
		};
		sd.std.outputs = { "_STD Dev": null };
		CIQ.Studies.calculateStandardDeviation(stx, sd.std);

		CIQ.Studies.calculateGenericEnvelope(
			stx,
			sd,
			sd.inputs["Standard Deviations"],
			"_MA " + sd.name,
			"_STD Dev " + sd.name
		);
		if (sd.type == "Boll %b") sd.zoneOutput = "%b";
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Bollinger Bands": {
			name: "Bollinger Bands",
			overlay: true,
			calculateFN: CIQ.Studies.calculateBollinger,
			seriesFN: CIQ.Studies.displayChannel,
			inputs: {
				Period: 20,
				Field: "field",
				"Standard Deviations": 2,
				"Moving Average Type": "ma",
				"Channel Fill": true
			},
			outputs: {
				"Bollinger Bands Top": "auto",
				"Bollinger Bands Median": "auto",
				"Bollinger Bands Bottom": "auto"
			},
			attributes: {
				"Standard Deviations": { min: 0.1, step: 0.1 }
			}
		},
		"Boll %b": {
			name: "Bollinger %b",
			calculateFN: CIQ.Studies.calculateBollinger,
			inputs: {
				Period: 20,
				Field: "field",
				"Standard Deviations": 2,
				"Moving Average Type": "ma"
			},
			outputs: { "%b": "auto" },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 100,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: 0,
					studyOverSoldColor: "auto"
				}
			},
			attributes: {
				"Standard Deviations": { min: 0.1, step: 0.1 }
			}
		},
		"Boll BW": {
			name: "Bollinger Bandwidth",
			calculateFN: CIQ.Studies.calculateBollinger,
			inputs: {
				Period: 20,
				Field: "field",
				"Standard Deviations": 2,
				"Moving Average Type": "ma"
			},
			outputs: { Bandwidth: "auto" },
			attributes: {
				"Standard Deviations": { min: 0.1, step: 0.1 }
			}
		}
	});
}

};


let __js_advanced_studies_cci_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("cci feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateCCI = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}

		CIQ.Studies.MA("simple", sd.days, "hlc/3", 0, "MA", stx, sd);

		for (var i = Math.max(sd.startFrom, sd.days - 1); i < quotes.length; i++) {
			var quote = quotes[i];
			if (!quote) continue;
			var md = 0;
			for (var j = 0; j < sd.days; j++) {
				md += Math.abs(quotes[i - j]["hlc/3"] - quote["MA " + sd.name]);
			}
			md /= sd.days;
			if (Math.abs(md) < 0.00000001) quote["Result " + sd.name] = 0;
			else
				quote["Result " + sd.name] =
					(quote["hlc/3"] - quote["MA " + sd.name]) / (0.015 * md);
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		CCI: {
			name: "Commodity Channel Index",
			calculateFN: CIQ.Studies.calculateCCI,
			inputs: { Period: 20 },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 100,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: -100,
					studyOverSoldColor: "auto"
				}
			},
			attributes: {
				Period: { min: 2 }
			}
		}
	});
}

};


let __js_advanced_studies_centerOfGravity_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"centerOfGravity feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateCenterOfGravity = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		for (var i = Math.max(sd.startFrom, sd.days - 1); i < quotes.length; i++) {
			var num = 0,
				den = 0;
			for (var j = 0; j < sd.days; j++) {
				var val = quotes[i - j][field];
				num -= (j + 1) * val;
				den += val;
			}
			if (den) quotes[i]["Result " + sd.name] = num / den;
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		COG: {
			name: "Center Of Gravity",
			calculateFN: CIQ.Studies.calculateCenterOfGravity,
			inputs: { Period: 10, Field: "field" }
		}
	});
}

};


let __js_advanced_studies_chaikin_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("chaikin feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateChaikinMoneyFlow = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days) {
			sd.error = true;
			return;
		}
		var sumMoneyFlow = 0,
			sumVolume = 0;
		var startQuote = quotes[sd.startFrom - 1];
		if (startQuote) {
			if (startQuote["_sumMF " + sd.name])
				sumMoneyFlow = startQuote["_sumMF " + sd.name];
			if (startQuote["_sumV " + sd.name])
				sumVolume = startQuote["_sumV " + sd.name];
		}
		for (var i = sd.startFrom; i < quotes.length; i++) {
			if (quotes[i].High == quotes[i].Low) quotes[i]["_MFV " + sd.name] = 0;
			else
				quotes[i]["_MFV " + sd.name] =
					(quotes[i].Volume *
						(2 * quotes[i].Close - quotes[i].High - quotes[i].Low)) /
					(quotes[i].High - quotes[i].Low);
			sumMoneyFlow += quotes[i]["_MFV " + sd.name];
			sumVolume += quotes[i].Volume;
			if (i > sd.days - 1) {
				sumMoneyFlow -= quotes[i - sd.days]["_MFV " + sd.name];
				sumVolume -= quotes[i - sd.days].Volume;
				if (sumVolume)
					quotes[i]["Result " + sd.name] = sumMoneyFlow / sumVolume;
			}
			quotes[i]["_sumMF " + sd.name] = sumMoneyFlow;
			quotes[i]["_sumV " + sd.name] = sumVolume;
		}
	};

	CIQ.Studies.calculateChaikinVolatility = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days) {
			sd.error = true;
			return;
		}
		var i;
		for (i = sd.startFrom; i < quotes.length; i++) {
			if (quotes[i].futureTick) break;
			quotes[i]["_High-Low " + sd.name] = quotes[i].High - quotes[i].Low;
		}
		CIQ.Studies.MA(
			sd.inputs["Moving Average Type"],
			sd.days,
			"_High-Low " + sd.name,
			0,
			"_MA",
			stx,
			sd
		);

		var roc = sd.inputs["Rate Of Change"];
		if (!roc) roc = sd.days;
		for (i = Math.max(sd.startFrom, roc); i < quotes.length; i++) {
			if (!quotes[i - roc]["_MA " + sd.name]) continue;
			if (quotes[i].futureTick) break;
			quotes[i]["Result " + sd.name] =
				100 *
				(quotes[i]["_MA " + sd.name] / quotes[i - roc]["_MA " + sd.name] - 1);
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Chaikin MF": {
			name: "Chaikin Money Flow",
			calculateFN: CIQ.Studies.calculateChaikinMoneyFlow,
			inputs: { Period: 20 }
		},
		"Chaikin Vol": {
			name: "Chaikin Volatility",
			calculateFN: CIQ.Studies.calculateChaikinVolatility,
			inputs: { Period: 14, "Rate Of Change": 2, "Moving Average Type": "ma" }
		}
	});
}

};


let __js_advanced_studies_chande_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("chande feature requires first activating studies feature.");
} else {
	CIQ.Studies.prettify.variable = "vma";
	CIQ.Studies.movingAverage.conversions.vma = "variable";
	CIQ.Studies.movingAverage.translations.variable = "Variable";
	CIQ.Studies.movingAverage.typeMap.vma = "Variable";
	CIQ.Studies.movingAverage.typeMap.variable = "Variable";

	CIQ.Studies.calculateChandeForecast = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		CIQ.Studies.MA("time series", sd.days, field, 0, "MA", stx, sd);
		for (var i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			var val = quotes[i][field];
			if (val && typeof val == "object") val = val[sd.subField];
			quotes[i]["Result " + sd.name] =
				100 * (1 - quotes[i]["MA " + sd.name] / val);
		}
	};

	CIQ.Studies.calculateChandeMomentum = function (stx, sd) {
		var name = sd.name;
		for (var p in sd.outputs) {
			name = p + " " + name;
		}
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}

		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close"; // only used when called from VMA

		var sumMomentum = 0,
			absSumMomentum = 0;
		var history = [];
		for (var i = sd.startFrom - sd.days + 1; i < quotes.length; i++) {
			if (i < 1) continue;
			var q = quotes[i][field],
				q1 = quotes[i - 1][field];
			if (q && typeof q == "object") q = q.Close;
			if (q1 && typeof q1 == "object") q1 = q1.Close;
			if (q1 === undefined) continue; // the field is not defined yet

			var diff = q - q1;
			history.push(diff);
			sumMomentum += diff;
			absSumMomentum += Math.abs(diff);
			if (history.length == sd.days) {
				quotes[i][name] = (100 * sumMomentum) / absSumMomentum;
				var old = history.shift();
				sumMomentum -= old;
				absSumMomentum -= Math.abs(old);
			}
		}
	};

	/**
	 * Calculate function for variable moving average.
	 *
	 * The resulting values will be added to the dataSet using the field name provided by the `sd.outputMap` entry.
	 *
	 * **Notes:**
	 * - This function calculates a single value, so it expects `sd.outputMap` to contain a single mapping.
	 * - To leverage as part of a larger study calculation, use {@link CIQ.Studies.MA} instead.
	 * - If no `outputs` object is defined in the library entry, the study will default to a single output named `Result`, which will then be used in lieu of `sd.outputs` to build the field name.
	 * - The study name may contain the unprintable character `&zwnj;`, see {@link studyDescriptor} documentation.
	 *
	 * @param  {CIQ.ChartEngine} stx Chart object
	 * @param {CIQ.Studies.StudyDescriptor} sd  Study Descriptor
	 * @private
	 * @memberof CIQ.Studies
	 * @since 5.2.1 Moved `VIYDA` to `calculateMovingAverageVIDYA`.
	 */
	CIQ.Studies.calculateMovingAverageVariable = function (stx, sd) {
		var type = sd.inputs.Type;
		var quotes = sd.chart.scrubbed;
		var alpha = 2 / (sd.days + 1);

		var vmaPreviousDay = null;
		var name = sd.name;
		for (var p in sd.outputs) {
			name = p + " " + name;
		}

		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close"; // Handle when the default inputs are passed in

		sd.cmo = new CIQ.Studies.StudyDescriptor(sd.name, "cmo", sd.panel);
		sd.cmo.chart = sd.chart;
		sd.cmo.days = 9;
		sd.cmo.inputs = { Field: field };
		sd.cmo.startFrom = sd.startFrom;
		sd.cmo.outputs = { _CMO: null };
		CIQ.Studies.calculateChandeMomentum(stx, sd.cmo);

		var offset = parseInt(sd.inputs.Offset, 10);
		if (isNaN(offset)) offset = 0;

		var i, val, ft;
		var start = sd.startFrom;
		// find vmaPreviousDay
		var offsetBack = offset;
		for (i = sd.startFrom - 1; i >= 0; i--) {
			val = quotes[i][name];
			if (!val && val !== 0) continue;
			if (vmaPreviousDay === null) vmaPreviousDay = val;
			if (offsetBack <= 0) break;
			offsetBack--;
			start = i;
		}
		if (vmaPreviousDay === null) {
			vmaPreviousDay = start = 0;
		}
		var futureTicks = [];
		for (i = start; i < quotes.length; i++) {
			var quote = quotes[i];
			val = quote[field];
			if (val && typeof val == "object") val = val[sd.subField];
			var notOverflowing = i + offset >= 0 && i + offset < quotes.length;
			var offsetQuote = notOverflowing ? quotes[i + offset] : null;
			if (!val && val !== 0) {
				if (offsetQuote) offsetQuote[name] = null;
				else if (i + offset >= quotes.length) {
					ft = {};
					ft[name] = null;
					futureTicks.push(ft);
				}
				continue;
			}
			if (!quote["_CMO " + sd.name] && quote["_CMO " + sd.name] !== 0) continue;
			var vi = Math.abs(quote["_CMO " + sd.name]) / 100;
			var vma = alpha * vi * val + (1 - alpha * vi) * vmaPreviousDay;
			vmaPreviousDay = vma;
			if (i < sd.days) vma = null;
			if (offsetQuote) offsetQuote[name] = vma;
			else if (i + offset >= quotes.length) {
				ft = {};
				ft[name] = vma;
				futureTicks.push(ft);
			}
		}
		sd.appendFutureTicks(stx, futureTicks);
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Chande Fcst": {
			name: "Chande Forecast Oscillator",
			calculateFN: CIQ.Studies.calculateChandeForecast,
			inputs: { Period: 14, Field: "field" }
		},
		"Chande Mtm": {
			name: "Chande Momentum Oscillator",
			calculateFN: CIQ.Studies.calculateChandeMomentum,
			inputs: { Period: 9 },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 50,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: -50,
					studyOverSoldColor: "auto"
				}
			}
		}
	});
}

};


let __js_advanced_studies_choppiness_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"choppiness feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateChoppiness = function (stx, sd) {
		CIQ.Studies.calculateStudyATR(stx, sd);

		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}

		function getLLVHHV(p, x) {
			var h = Number.MAX_VALUE * -1,
				l = Number.MAX_VALUE;
			for (var j = x - p + 1; j <= x; j++) {
				if (j < 0) continue;
				h = Math.max(h, quotes[j].High);
				l = Math.min(l, quotes[j].Low);
			}
			return [l, h];
		}
		for (var i = Math.max(sd.startFrom, sd.days); i < quotes.length; i++) {
			var quote = quotes[i];
			if (!quote) continue;
			if (quote.futureTick) break;
			var lh = getLLVHHV(sd.days, i);
			if (quote["Sum True Range " + sd.name]) {
				quote["Result " + sd.name] =
					(100 *
						Math.log(
							quote["Sum True Range " + sd.name] /
								Math.max(0.000001, lh[1] - lh[0])
						)) /
					Math.log(sd.days);
			} else if (!isNaN(quote)) {
				quote["Result " + sd.name] = 0;
			}
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Choppiness: {
			name: "Choppiness Index",
			calculateFN: CIQ.Studies.calculateChoppiness,
			centerline: 50,
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 61.8,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: 38.2,
					studyOverSoldColor: "auto"
				}
			},
			attributes: {
				studyOverBoughtValue: { min: 50, step: "0.1" },
				studyOverSoldValue: { max: 50, step: "0.1" }
			}
		}
	});
}

};


let __js_advanced_studies_comparisonStudies_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */



var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"comparisonStudies feature requires first activating studies feature."
	);
} else if (!CIQ.Studies.initPriceRelative) {
	console.error(
		"comparisonStudies feature requires first activating priceRelative feature."
	);
} else {
	/**
	 * Calculate function for correlation coefficient
	 * @param  {CIQ.ChartEngine} stx Chart object
	 * @param  {object} sd  Study Descriptor
	 * @memberOf CIQ.Studies
	 */
	CIQ.Studies.calculateCorrelationCoefficient = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var period = sd.days;
		if (quotes.length < period + 1) {
			sd.error = true;
			return;
		}
		//var base=stx.chart.symbol;
		sd.compare = sd.inputs["Compare To"];
		if (!sd.compare) {
			sd.compare = [];
			sd.outputs = {};
			sd.outputMap = {};
			for (var s in stx.chart.series) {
				var series = stx.chart.series[s];
				if (series.parameters.color) {
					sd.compare.push(series.display);
					sd.outputs["Result " + series.display] = series.parameters.color;
					sd.outputMap["Result " + series.display + " " + sd.name] =
						"Result " + series.display;
				}
			}
		} else {
			sd.compare = [sd.compare];
		}
		if (!sd.compare.length) {
			sd.error =
				"Correlation Coefficient requires at least one comparison symbol";
			return;
		}
		for (var sym = 0; sym < sd.compare.length; sym++) {
			var sB = 0;
			var sC = 0;
			var sB2 = 0;
			var sC2 = 0;
			var sBC = 0;
			var thisCompare = sd.compare[sym];
			var iters = 0;
			for (var i = sd.startFrom - period; i < quotes.length; i++) {
				//last tick has no compare data
				if (!quotes[i]) continue;
				var comparisonQuote = quotes[i][thisCompare];
				if (comparisonQuote && typeof comparisonQuote == "object")
					comparisonQuote = comparisonQuote.Close;
				if (!comparisonQuote && comparisonQuote !== 0) {
					if (
						i > 0 &&
						quotes[i - 1] &&
						quotes[i - 1]["_temps " + sd.name] &&
						quotes[i - 1]["_temps " + sd.name].c
					)
						comparisonQuote = quotes[i - 1]["_temps " + sd.name].c;
					else comparisonQuote = 0;
				}
				if (comparisonQuote && typeof comparisonQuote == "object")
					comparisonQuote = comparisonQuote.Close;
				quotes[i]["_temps " + sd.name] = {};
				sB += quotes[i]["_temps " + sd.name].b = quotes[i].Close;
				sC += quotes[i]["_temps " + sd.name].c = comparisonQuote;
				sB2 += quotes[i]["_temps " + sd.name].b2 = Math.pow(quotes[i].Close, 2);
				sC2 += quotes[i]["_temps " + sd.name].c2 = Math.pow(comparisonQuote, 2);
				sBC += quotes[i]["_temps " + sd.name].bc =
					quotes[i].Close * comparisonQuote;
				if (iters >= period) {
					sB -= quotes[i - period]["_temps " + sd.name].b;
					sC -= quotes[i - period]["_temps " + sd.name].c;
					sB2 -= quotes[i - period]["_temps " + sd.name].b2;
					sC2 -= quotes[i - period]["_temps " + sd.name].c2;
					sBC -= quotes[i - period]["_temps " + sd.name].bc;

					var vb = sB2 / period - Math.pow(sB / period, 2);
					var vc = sC2 / period - Math.pow(sC / period, 2);
					var cv = sBC / period - (sB * sC) / Math.pow(period, 2);
					var cc = cv / Math.sqrt(vb * vc);
					quotes[i]["Result " + thisCompare + " " + sd.name] = cc;
				}
				iters++;
			}
		}
	};

	CIQ.Studies.calculatePerformance = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var cSym = sd.inputs["Comparison Symbol"].toUpperCase();
		if (!cSym) cSym = sd.study.inputs["Comparison Symbol"];
		if (!sd.days) sd.days = sd.study.inputs.Period;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}

		CIQ.Studies.MA("ma", sd.days, "Close", 0, "_MA Base", stx, sd);
		CIQ.Studies.MA("ma", sd.days, cSym, 0, "_MA Comp", stx, sd);
		for (var i = sd.startFrom; i < quotes.length; i++) {
			var cSymQ = quotes[i][cSym];
			if (cSymQ && (cSymQ.Close || cSymQ.Close === 0)) cSymQ = cSymQ.Close;
			quotes[i]["Result " + sd.name] =
				(quotes[i].Close / cSymQ) *
				(quotes[i]["_MA Comp " + sd.name] / quotes[i]["_MA Base " + sd.name]);
		}
	};

	CIQ.Studies.calculateBeta = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var cSym = sd.inputs["Comparison Symbol"].toUpperCase();
		if (!cSym) cSym = sd.study.inputs["Comparison Symbol"];
		if (!sd.days) sd.days = sd.study.inputs.Period;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}

		for (var i = Math.max(sd.startFrom, 1); i < quotes.length; i++) {
			quotes[i]["_BaseChange " + sd.name] =
				quotes[i].Close / quotes[i - 1].Close - 1;
			var cSymQ = quotes[i][cSym];
			if (cSymQ && (cSymQ.Close || cSymQ.Close === 0)) cSymQ = cSymQ.Close;
			var cSymQ1 = quotes[i - 1][cSym];
			if (cSymQ1 && (cSymQ1.Close || cSymQ1.Close === 0)) cSymQ1 = cSymQ1.Close;
			quotes[i]["_CompChange " + sd.name] = cSymQ / cSymQ1 - 1;
		}
		CIQ.Studies.MA(
			"ma",
			sd.days,
			"_BaseChange " + sd.name,
			0,
			"_MA Base",
			stx,
			sd
		);
		CIQ.Studies.MA(
			"ma",
			sd.days,
			"_CompChange " + sd.name,
			0,
			"_MA Comp",
			stx,
			sd
		);
		for (i = Math.max(sd.startFrom, sd.days); i < quotes.length; i++) {
			quotes[i]["_COVARn " + sd.name] =
				(quotes[i]["_BaseChange " + sd.name] -
					quotes[i]["_MA Base " + sd.name]) *
				(quotes[i]["_CompChange " + sd.name] -
					quotes[i]["_MA Comp " + sd.name]);
			quotes[i]["_VARn " + sd.name] = Math.pow(
				quotes[i]["_CompChange " + sd.name] - quotes[i]["_MA Comp " + sd.name],
				2
			);
		}
		CIQ.Studies.MA("ma", sd.days, "_COVARn " + sd.name, 0, "_COVAR", stx, sd);
		CIQ.Studies.MA("ma", sd.days, "_VARn " + sd.name, 0, "_VAR", stx, sd);
		for (i = Math.max(sd.startFrom, sd.days * 2 - 1); i < quotes.length; i++) {
			quotes[i]["Result " + sd.name] =
				quotes[i]["_COVAR " + sd.name] / quotes[i]["_VAR " + sd.name];
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		correl: {
			name: "Correlation Coefficient",
			range: "-1 to 1",
			calculateFN: CIQ.Studies.calculateCorrelationCoefficient,
			outputs: {}
		},
		"Perf Idx": {
			name: "Performance Index",
			centerline: 1,
			initializeFN: CIQ.Studies.initPriceRelative,
			seriesFN: CIQ.Studies.displayVsComparisonSymbol,
			calculateFN: CIQ.Studies.calculatePerformance,
			inputs: { Period: 120, "Comparison Symbol": "SPY" },
			outputs: { Result: "auto", Gain: "#00DD00", Loss: "#FF0000" },
			deferUpdate: true
		},
		Beta: {
			name: "Beta",
			centerline: 1,
			initializeFN: CIQ.Studies.initPriceRelative,
			seriesFN: CIQ.Studies.displayVsComparisonSymbol,
			calculateFN: CIQ.Studies.calculateBeta,
			inputs: { Period: 20, "Comparison Symbol": "SPY" },
			deferUpdate: true
		}
	});
}

};


let __js_advanced_studies_coppock_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("coppock feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateCoppock = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";

		var longDays = parseInt(sd.inputs["Long RoC"], 10);
		if (!longDays) longDays = 14;
		var shortDays = parseInt(sd.inputs["Short RoC"], 10);
		if (!shortDays) shortDays = 11;
		var period = sd.days;
		if (!period) period = 10;
		if (longDays < shortDays) return;

		if (quotes.length < Math.max(shortDays, longDays, period) + 1) {
			sd.error = true;
			return;
		}
		for (var i = Math.max(sd.startFrom, longDays); i < quotes.length; i++) {
			var denom1 = quotes[i - shortDays][field];
			var denom2 = quotes[i - longDays][field];
			if (denom1 && denom2) {
				// skip if denominator is 0 --
				quotes[i]["_Sum " + sd.name] =
					100 * (quotes[i][field] / denom1 + quotes[i][field] / denom2 - 2);
			}
		}

		CIQ.Studies.MA("weighted", period, "_Sum " + sd.name, 0, "Result", stx, sd);
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Coppock: {
			name: "Coppock Curve",
			calculateFN: CIQ.Studies.calculateCoppock,
			inputs: { Period: 10, Field: "field", "Short RoC": 11, "Long RoC": 14 }
		}
	});
}

};


let __js_advanced_studies_darvasBox_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("darvasBox feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateDarvas = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var allTimeHigh = 0;
		var allTimeHighPeriods = parseInt(sd.inputs["ATH Lookback Period"], 10);
		if (sd.inputs["Volume Spike"]) {
			CIQ.Studies.MA("simple", allTimeHighPeriods, "Volume", 0, "ADV", stx, sd);
		}
		var spikePercentage = parseFloat(sd.inputs["Volume % of Avg"]) / 100;
		var boxState = "none";
		var boxData = {};
		var ghost = null;
		var buy = null,
			sell = null;
		var offset = parseFloat(sd.inputs["Level Offset"]);
		var debug = false;
		if (debug) console.log("*****************");
		var i;
		var lbl = {}; //labels
		["Darvas", "Ghost", "Profit", "Loss", "ATH", "ADV", "Spike"].forEach(
			function (v) {
				lbl[v] = v + " " + sd.name;
			}
		);
		for (i = sd.startFrom - 1; i > 0; i--) {
			var q = quotes[i];
			if (q[lbl.Darvas] || q[lbl.Ghost]) {
				for (var l in lbl) q[l] = null;
			} else {
				allTimeHigh = q[lbl.ATH] || 0;
				buy = q[lbl.Profit];
				sell = q[lbl.Loss];
				break;
			}
		}
		for (i; i < quotes.length; i++) {
			var quote = quotes[i];
			if (!quote) continue;

			if (parseFloat(sd.inputs["Price Minimum"]) <= quotes[allTimeHigh].Close) {
				if (ghost && (!ghost.End || i == ghost.End + 1)) {
					if (quotes[i - 1].Close > boxData.High) {
						boxData = {
							State: 1,
							High: 2 * boxData.High - boxData.Low,
							Low: boxData.High,
							Start: i,
							End: 2 * boxData.End - boxData.Start + 1
						};
					} else {
						ghost = null;
						//boxData={State:1,High:boxData.High,Low:boxData.Low,Start:i,End:2*boxData.End-boxData.Start+1};
					}
					if (ghost) {
						quote[lbl.Ghost] = CIQ.clone(boxData);
						if (debug) console.log("Ghost begin:" + quote.DT);
						boxData.State = 0;
						if (quotes[boxData.End]) {
							quotes[boxData.End][lbl.Ghost] = CIQ.clone(boxData);
							if (debug) console.log("Ghost end:" + quotes[boxData.End].DT);
						}
						ghost = { Start: boxData.Start, End: boxData.End };
						buy = boxData.High + offset;
						if (!sell || sell < boxData.Low - offset) {
							sell = boxData.Low - offset;
						}
					}
				}

				quote[lbl.Profit] = buy;
				quote[lbl.Loss] = sell;
				if (quote.Close >= buy) buy = null;
				else if (sd.inputs["Exit Field"] == "high/low" && quote.High >= buy)
					buy = null;

				if (boxState == "none") {
					if (i == allTimeHigh + 3) {
						if (
							!quotes[allTimeHigh + 2][lbl.Darvas] &&
							!quotes[allTimeHigh + 1][lbl.Darvas] &&
							!quotes[allTimeHigh][lbl.Darvas] &&
							quotes[allTimeHigh].High > quote.High
						) {
							boxState = "high";
							//if(sell) buy=Math.max(buy,quotes[allTimeHigh].High+offset);
						}
					}
				}

				if (boxState == "high") {
					if (quote.High > quotes[allTimeHigh].High) {
						boxState = "none";
					} else if (
						quotes[i - 3].Low < quotes[i - 2].Low &&
						quotes[i - 3].Low < quotes[i - 1].Low &&
						quotes[i - 3].Low < quote.Low
					) {
						boxData = {
							State: 1,
							High: quotes[allTimeHigh].High,
							Low: quotes[i - 3].Low,
							Start: allTimeHigh
						};
						quotes[allTimeHigh][lbl.Darvas] = CIQ.clone(boxData);
						boxState = "darvas";
						if (debug) console.log("Darvas begin:" + quotes[allTimeHigh].DT);
						if (debug) console.log("Darvas established:" + quote.DT);
						if (ghost) {
							if (ghost.End > i && quotes[ghost.Start]) {
								quote[lbl.Ghost] = CIQ.clone(quotes[ghost.Start][lbl.Ghost]);
								quote[lbl.Ghost].End = i;
								if (quotes[ghost.End]) {
									delete quotes[ghost.End][lbl.Ghost];
									if (debug)
										console.log("Ghost End removed:" + quotes[ghost.End].DT);
								}
							}
							quote[lbl.Ghost].State = 0;
							quotes[ghost.Start][lbl.Ghost].End = i;
							if (debug) console.log("Ghost end:" + quote.DT);
							ghost = null;
						}
						buy = boxData.High + offset;
						if (!sell || sell < boxData.Low - offset) {
							sell = boxData.Low - offset;
						}
					}
				}

				if (boxState == "darvas") {
					if (quote.Close > boxData.High) ghost = {};
					else if (
						sd.inputs["Exit Field"] == "high/low" &&
						quote.High > boxData.High
					)
						ghost = {};
					else if (quote.Close < boxData.Low) boxState = "none";
					else if (
						sd.inputs["Exit Field"] == "high/low" &&
						quote.Low < boxData.Low
					)
						boxState = "none";
					if (ghost) boxState = "none";
					else if (boxState == "none") {
						buy = null;
						sell = null;
					}
					if (!sd.inputs["Ghost Boxes"]) ghost = null;
					if (boxState == "none") {
						for (var d = boxData.Start + 1; d < i; d++) {
							quotes[d][lbl.Darvas] = CIQ.clone(boxData);
						}
						boxData.State = 0;
						boxData.End = i;
						quote[lbl.Darvas] = CIQ.clone(boxData);
						if (debug) console.log("Darvas end:" + quote.DT);
						quote[lbl.ATH] = allTimeHigh;
						continue;
					}
				}

				if (sell) {
					if (
						quote.Close < boxData.Low ||
						(sd.inputs["Exit Field"] == "high/low" && quote.Low < boxData.Low)
					) {
						if (boxState == "darvas") boxState = "none";
						if (
							quote.Close < sell ||
							(sd.inputs["Exit Field"] == "high/low" && quote.Low < sell)
						) {
							buy = null;
							sell = null;
						}
						if (ghost) {
							if (ghost.End > i && quotes[ghost.Start]) {
								quote[lbl.Ghost] = CIQ.clone(quotes[ghost.Start][lbl.Ghost]);
								quote[lbl.Ghost].End = i;
								if (quotes[ghost.End]) {
									delete quotes[ghost.End][lbl.Ghost];
									if (debug)
										console.log("Ghost End removed:" + quotes[ghost.End].DT);
								}
							}
							quote[lbl.Ghost].State = 0;
							quotes[ghost.Start][lbl.Ghost].End = i;
							if (debug) console.log("Ghost end:" + quote.DT);
							ghost = null;
						}
					}
				}
			}

			if (quote.High >= quotes[allTimeHigh].High) {
				allTimeHigh = i;
				if (debug) console.log("All Time High:" + quote.DT);
			}

			if (
				i < 3 ||
				(quote.High >= quotes[i - 1].High &&
					quote.High >= quotes[i - 2].High &&
					quote.High >= quotes[i - 3].High)
			) {
				if (i - allTimeHigh >= allTimeHighPeriods) {
					allTimeHigh = i;
					for (var j = 0; j < allTimeHighPeriods; j++) {
						if (i - j < 0) break;
						if (quotes[i - j].High > quotes[allTimeHigh].High) {
							allTimeHigh = i - j;
						}
					}
					if (debug) console.log("All Time High:" + quote.DT);
				}
			}

			if (
				sd.inputs["Volume Spike"] &&
				i > allTimeHighPeriods &&
				i == allTimeHigh
			) {
				if (quote[lbl.ADV] * spikePercentage < quote.Volume) {
					quote[lbl.Spike] = 1;
					if (debug) console.log("Volume Spike:" + quote.DT);
				}
			}
			quote[lbl.ATH] = allTimeHigh;
		}
	};

	// NOTE: Darvas will only display on the chart panel sharing the yAxis.
	CIQ.Studies.displayDarvas = function (stx, sd, quotes) {
		var levelsColor = CIQ.Studies.determineColor(sd.outputs.Levels);
		if (!levelsColor || levelsColor == "auto" || CIQ.isTransparent(levelsColor))
			levelsColor = stx.defaultColor;
		var darvasColor = CIQ.Studies.determineColor(sd.outputs.Darvas);
		if (!darvasColor || darvasColor == "auto" || CIQ.isTransparent(darvasColor))
			darvasColor = stx.defaultColor;
		var ghostColor = CIQ.Studies.determineColor(sd.outputs.Ghost);
		if (!ghostColor || ghostColor == "auto" || CIQ.isTransparent(ghostColor))
			ghostColor = stx.defaultColor;

		var panel = stx.panels[sd.panel],
			context = sd.getContext(stx);
		var i, q;
		var slyh1, slyl1;
		var myWidth = stx.layout.candleWidth - 2;
		if (myWidth < 2) myWidth = 1;
		stx.startClip(sd.panel);
		if (sd.inputs["Stop Levels"]) {
			if (context.setLineDash) {
				context.setLineDash([2, 2]);
			}
			context.lineWidth = 2;
			context.strokeStyle = levelsColor;
			/*  Don't display the take profit levels
			context.beginPath();
			for(i=0;i<quotes.length;i++){
				q=quotes[i];
				q1=quotes[i-1];
				if(!q) continue;
				slyh1=q["Profit "+sd.name]?Math.floor(stx.pixelFromPrice(q["Profit "+sd.name], panel)):null;
				var slyh0=q1 && q1["Profit "+sd.name]?Math.floor(stx.pixelFromPrice(q1["Profit "+sd.name], panel)):null;
				if(slyh1){
					if(q.candleWidth) myWidth=Math.floor(Math.max(1,q.candleWidth));
					var slxh1=Math.floor(stx.pixelFromBar(i, panel.chart)+myWidth/2);
					var slxh0=Math.floor(stx.pixelFromBar(i, panel.chart)-myWidth/2);
					if(slyh0) context.lineTo(slxh0,slyh1);
					else if(i===0) context.moveTo(stx.chart.left,slyh1);
					else context.moveTo(slxh0,slyh1);
					context.lineTo(slxh1,slyh1);
				}
			}
			context.stroke();
			*/
			context.beginPath();
			for (i = 0; i < quotes.length; i++) {
				q = quotes[i];
				var q1 = quotes[i - 1];
				if (!q) continue;
				slyl1 = q["Loss " + sd.name]
					? Math.floor(stx.pixelFromPrice(q["Loss " + sd.name], panel))
					: null;
				var slyl0 =
					q1 && q1["Loss " + sd.name]
						? Math.floor(stx.pixelFromPrice(q1["Loss " + sd.name], panel))
						: null;
				if (slyl1) {
					if (q.candleWidth) myWidth = Math.floor(Math.max(1, q.candleWidth));
					var slxl1 = Math.floor(
						stx.pixelFromBar(i, panel.chart) + myWidth / 2
					);
					var slxl0 = Math.floor(
						stx.pixelFromBar(i, panel.chart) - myWidth / 2
					);
					if (slyl0 && slyl0 >= slyl1) context.lineTo(slxl0, slyl1);
					else if (i === 0) context.moveTo(stx.chart.left, slyl1);
					else context.moveTo(slxl0, slyl1);
					context.lineTo(slxl1, slyl1);
				}
			}
			context.stroke();
			if (context.setLineDash) {
				context.setLineDash([]);
			}
			context.lineWidth = 1;
		}
		var dx = -10,
			dy,
			dw = 0,
			dh,
			gx = -10,
			gy,
			gw = 0,
			gh;
		var inDarvas = false,
			inGhost = false;
		var signalWidth = context.measureText("\u25B2").width / 2;
		var lastBarWithClose = 0;
		for (i = 0; i < quotes.length; i++) {
			if (!quotes[i]) continue;
			if (quotes[i].Close || quotes[i].Close === 0) lastBarWithClose = i;
			if (quotes[i]["Spike " + sd.name]) {
				context.fillStyle = darvasColor;
				context.textBaseline = "bottom";
				var y = stx.pixelFromPrice(quotes[i].High, stx.chart.panel);
				context.fillText("\u25BC", stx.pixelFromBar(i) - signalWidth, y - 5); // down arrow
			}

			if (quotes[i].candleWidth)
				myWidth = Math.floor(Math.max(1, quotes[i].candleWidth));
			if (quotes[i]["Darvas " + sd.name]) {
				q = quotes[i]["Darvas " + sd.name];
				if (q.State == 1 && !inDarvas) {
					dx = Math.floor(stx.pixelFromBar(i, panel.chart) - myWidth / 2);
					dy = Math.floor(stx.pixelFromPrice(q.High, panel));
					dh = Math.floor(stx.pixelFromPrice(q.Low, panel)) - dy;
					inDarvas = true;
				} else if (q.State === 0) {
					dw = Math.floor(stx.pixelFromBar(i, panel.chart) + myWidth / 2) - dx;
					dy = Math.floor(stx.pixelFromPrice(q.High, panel));
					dh = Math.floor(stx.pixelFromPrice(q.Low, panel)) - dy;
					context.strokeStyle = darvasColor;
					context.fillStyle = darvasColor;
					if (!sd.inputs["Stop Levels"]) {
						context.strokeRect(dx, dy, dw, dh);
						context.globalAlpha = 0.2;
					} else {
						context.globalAlpha = 0.3;
					}
					context.fillRect(dx, dy, dw, dh);
					context.globalAlpha = 1;
					inDarvas = false;
				}
			}
			if (quotes[i]["Ghost " + sd.name] && sd.inputs["Ghost Boxes"]) {
				q = quotes[i]["Ghost " + sd.name];
				if (q.State == 1 && !inGhost) {
					gx = Math.floor(stx.pixelFromBar(i, panel.chart) - myWidth / 2);
					gy = Math.floor(stx.pixelFromPrice(q.High, panel));
					gw = Math.floor(
						(q.End - q.Start + 1) * stx.layout.candleWidth + myWidth / 2
					);
					gh = Math.floor(stx.pixelFromPrice(q.Low, panel)) - gy;
					inGhost = true;
				} else if (q.State === 0) {
					if (q.Start == q.End)
						gx = Math.floor(stx.pixelFromBar(i, panel.chart) - myWidth / 2);
					gw = Math.floor(stx.pixelFromBar(i, panel.chart) + myWidth / 2) - gx;
					gy = Math.floor(stx.pixelFromPrice(q.High, panel));
					gh = Math.floor(stx.pixelFromPrice(q.Low, panel)) - gy;
					context.strokeStyle = ghostColor;
					context.fillStyle = ghostColor;
					if (!sd.inputs["Stop Levels"]) {
						context.strokeRect(gx, gy, gw, gh);
						context.globalAlpha = 0.2;
					} else {
						context.globalAlpha = 0.3;
					}
					context.fillRect(gx, gy, gw, gh);
					context.globalAlpha = 1;
					inGhost = false;
				}
			}
		}
		if (inDarvas) {
			dw =
				Math.floor(
					stx.pixelFromBar(lastBarWithClose, panel.chart) + myWidth / 2
				) - dx;
			context.strokeStyle = darvasColor;
			context.fillStyle = darvasColor;
			if (!sd.inputs["Stop Levels"]) {
				context.beginPath();
				context.moveTo(dx + 2 * dw, dy);
				context.lineTo(dx, dy);
				context.lineTo(dx, dy + dh);
				context.lineTo(dx + 2 * dw, dy + dh);
				context.stroke();
				context.globalAlpha = 0.2;
			} else {
				context.globalAlpha = 0.3;
			}
			context.fillRect(dx, dy, 2 * dw, dh);
			context.globalAlpha = 1;
		}
		if (inGhost) {
			context.strokeStyle = ghostColor;
			context.fillStyle = ghostColor;
			if (!sd.inputs["Stop Levels"]) {
				context.strokeRect(gx, gy, gw, gh);
				context.globalAlpha = 0.2;
			} else {
				context.globalAlpha = 0.3;
			}
			context.fillRect(gx, gy, gw, gh);
			context.globalAlpha = 1;
		}
		if (inDarvas || inGhost) {
			if (sd.inputs["Stop Levels"]) {
				if (context.setLineDash) {
					context.setLineDash([2, 2]);
				}
				context.lineWidth = 2;
				context.strokeStyle = levelsColor;
				var x = Math.floor(
					stx.pixelFromBar(lastBarWithClose - 1, panel.chart) + myWidth / 2
				);
				if (slyh1) {
					context.beginPath();
					context.moveTo(x, slyh1);
					context.lineTo(inDarvas ? dx + 2 * dw : gx + gw, slyh1);
					context.stroke();
				}
				if (slyl1) {
					context.beginPath();
					context.moveTo(x, slyl1);
					context.lineTo(inDarvas ? dx + 2 * dw : gx + gw, slyl1);
					context.stroke();
				}
				if (context.setLineDash) {
					context.setLineDash([]);
				}
				context.lineWidth = 1;
			}
			inDarvas = false;
			inGhost = false;
		}
		stx.endClip();
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Darvas: {
			name: "Darvas Box",
			underlay: true,
			calculateFN: CIQ.Studies.calculateDarvas,
			seriesFN: CIQ.Studies.displayDarvas,
			inputs: {
				"ATH Lookback Period": 100,
				"Exit Field": ["close", "high/low"],
				"Ghost Boxes": true,
				"Stop Levels": false,
				"Level Offset": 0.01,
				"Price Minimum": 5,
				"Volume Spike": false,
				"Volume % of Avg": 400
			},
			outputs: { Darvas: "#5F7CB8", Ghost: "#699158", Levels: "auto" },
			customRemoval: true,
			attributes: {
				"Price Minimum": { min: 0.01, step: 0.01 },
				yaxisDisplayValue: { hidden: true },
				panelName: { hidden: true },
				flippedEnabled: { hidden: true }
			}
		}
	});
}

};


let __js_advanced_studies_detrended_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("detrended feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateDetrendedPrice = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		var offset = Math.floor(sd.days / 2 + 1);
		CIQ.Studies.MA(
			sd.inputs["Moving Average Type"],
			sd.days,
			field,
			-offset,
			"MA",
			stx,
			sd
		);

		for (
			var i = Math.max(sd.days - offset - 1, sd.startFrom - offset);
			i < quotes.length - offset;
			i++
		) {
			if (i < 0) continue;
			var val = quotes[i][field];
			if (val && typeof val == "object") val = val[sd.subField];
			var maVal = quotes[i]["MA " + sd.name];
			if ((val || val === 0) && (maVal || maVal === 0))
				quotes[i]["Result " + sd.name] = val - maVal;
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Detrended: {
			name: "Detrended Price Oscillator",
			calculateFN: CIQ.Studies.calculateDetrendedPrice,
			inputs: { Period: 14, Field: "field", "Moving Average Type": "ma" }
		}
	});
}

};


let __js_advanced_studies_disparity_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("disparity feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateDisparity = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";

		CIQ.Studies.MA(
			sd.inputs["Moving Average Type"],
			sd.days,
			field,
			0,
			"_MA",
			stx,
			sd
		);
		for (var i = Math.max(sd.startFrom, sd.days - 1); i < quotes.length; i++) {
			if (!quotes[i]) continue;
			var qMA = quotes[i]["_MA " + sd.name];
			if (qMA)
				quotes[i]["Result " + sd.name] = 100 * (quotes[i][field] / qMA - 1);
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Disparity: {
			name: "Disparity Index",
			calculateFN: CIQ.Studies.calculateDisparity,
			inputs: { Period: 14, Field: "field", "Moving Average Type": "ma" }
		}
	});
}

};


let __js_advanced_studies_easeOfMovement_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"easeOfMovement feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateEaseOfMovement = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days) {
			sd.error = true;
			return;
		}
		for (var i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			var avgCurrent = (quotes[i].High + quotes[i].Low) / 2;
			var avgPrior = (quotes[i - 1].High + quotes[i - 1].Low) / 2;
			var dm = avgCurrent - avgPrior;
			var br = quotes[i].Volume / 100000000 / (quotes[i].High - quotes[i].Low);
			var result = dm / br;
			if (!isFinite(result)) quotes[i]["_EOM1 " + sd.name] = NaN;
			//With NaN, the study plotter will plot from the previous point
			//directly to the next point after the current tick. Infinity was making the
			//study not plot in the panel at all while the data point was in dataSegement.
			else quotes[i]["_EOM1 " + sd.name] = result;
		}
		CIQ.Studies.MA(
			sd.inputs["Moving Average Type"],
			sd.days,
			"_EOM1 " + sd.name,
			0,
			"Result",
			stx,
			sd
		);
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		EOM: {
			name: "Ease of Movement",
			calculateFN: CIQ.Studies.calculateEaseOfMovement,
			inputs: { Period: 14, "Moving Average Type": "ma" }
		}
	});
}

};


let __js_advanced_studies_ehlerFisher_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"ehlerFisher feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateEhlerFisher = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}

		function getLLVHHV(p, x) {
			var l = Number.MAX_VALUE,
				h = Number.MAX_VALUE * -1;
			for (var j = x - p + 1; j <= x; j++) {
				var d = (quotes[j].High + quotes[j].Low) / 2;
				l = Math.min(l, d);
				h = Math.max(h, d);
			}
			return [l, h];
		}

		var n = 0;
		if (sd.startFrom > 1) n = quotes[sd.startFrom - 1]["_n " + sd.name];
		for (var i = sd.startFrom; i < quotes.length; i++) {
			var quote = quotes[i];
			if (quote.futureTick) break;
			if (i < sd.days - 1) {
				quote["EF " + sd.name] = quote["EF Trigger " + sd.name] = n;
				continue;
			}
			var lh = getLLVHHV(sd.days, i);
			n =
				0.33 *
					2 *
					(((quotes[i].High + quotes[i].Low) / 2 - lh[0]) /
						Math.max(0.000001, lh[1] - lh[0]) -
						0.5) +
				0.67 * n;
			if (n > 0) n = Math.min(n, 0.9999);
			else if (n < 0) n = Math.max(n, -0.9999);
			var previous = i ? quotes[i - 1]["EF " + sd.name] : 0;
			quote["EF " + sd.name] =
				0.5 * Math.log((1 + n) / (1 - n)) + 0.5 * previous;
			quote["EF Trigger " + sd.name] = previous;
			quote["_n " + sd.name] = n;
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Ehler Fisher": {
			name: "Ehler Fisher Transform",
			calculateFN: CIQ.Studies.calculateEhlerFisher,
			inputs: { Period: 10 },
			outputs: { EF: "auto", "EF Trigger": "#FF0000" }
		}
	});
}

};


let __js_advanced_studies_elder_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("elder feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateElderImpulse = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var bull = sd.outputs.Bullish;
		var bear = sd.outputs.Bearish;
		var neutral = sd.outputs.Neutral;

		CIQ.Studies.MA("exponential", 13, "Close", 0, "_MA", stx, sd);
		sd.macd = new CIQ.Studies.StudyDescriptor("_" + sd.name, "macd", sd.panel);
		sd.macd.chart = sd.chart;
		sd.macd.days = sd.days;
		sd.macd.startFrom = sd.startFrom;
		sd.macd.inputs = {
			"Fast MA Period": 12,
			"Slow MA Period": 26,
			"Signal Period": 9
		};
		sd.macd.outputs = { _MACD: null, _Signal: null };
		CIQ.Studies.calculateMACD(stx, sd.macd);

		var color;
		for (var i = sd.startFrom; i < quotes.length; i++) {
			if (i === 0) color = neutral;
			else if (
				quotes[i]["_MA " + sd.name] > quotes[i - 1]["_MA " + sd.name] &&
				quotes[i]["_" + sd.name + "_hist"] >
					quotes[i - 1]["_" + sd.name + "_hist"]
			)
				color = bull;
			else if (
				quotes[i]["_MA " + sd.name] < quotes[i - 1]["_MA " + sd.name] &&
				quotes[i]["_" + sd.name + "_hist"] <
					quotes[i - 1]["_" + sd.name + "_hist"]
			)
				color = bear;
			else color = neutral;
			quotes[i]["Result " + sd.name] = color;
			//if(i) quotes[i-1][sd.name+"_hist"]=null;
		}
	};

	CIQ.Studies.calculateElderRay = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days) {
			sd.error = true;
			return;
		}
		CIQ.Studies.MA("exponential", sd.days, "Close", 0, "_EMA", stx, sd);

		for (var i = Math.max(sd.startFrom, sd.days - 1); i < quotes.length; i++) {
			quotes[i][sd.name + "_hist1"] =
				quotes[i].High - quotes[i]["_EMA " + sd.name];
			quotes[i][sd.name + "_hist2"] =
				quotes[i].Low - quotes[i]["_EMA " + sd.name];
		}
		sd.outputMap = {};
		sd.outputMap[sd.name + "_hist1"] = "";
		sd.outputMap[sd.name + "_hist2"] = "";
	};

	CIQ.Studies.calculateElderForce = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days) {
			sd.error = true;
			return;
		}
		for (var i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			quotes[i]["_EF1 " + sd.name] =
				quotes[i].Volume * (quotes[i].Close - quotes[i - 1].Close);
		}
		CIQ.Studies.MA(
			"exponential",
			sd.days,
			"_EF1 " + sd.name,
			0,
			"Result",
			stx,
			sd
		);
	};

	CIQ.Studies.initElderImpulse = function (
		stx,
		type,
		inputs,
		outputs,
		parameters,
		panel
	) {
		const sd = CIQ.Studies.initializeFN(
			stx,
			type,
			inputs,
			outputs,
			parameters,
			panel
		);
		if (!parameters.calculateOnly) {
			stx.chart.customChart = {
				chartType: "colored_bar",
				colorFunction: function (stx, quote, mode) {
					var color = quote["Result " + sd.name];
					if (color && typeof color == "object") color = color.color;
					return color;
				}
			};
			stx.setMainSeriesRenderer();
		}

		return sd;
	};

	CIQ.Studies.displayElderForce = function (stx, sd, quotes) {
		CIQ.Studies.displaySeriesAsLine(stx, sd, quotes);
		var color = CIQ.Studies.determineColor(sd.outputs.Result);
		var panel = stx.panels[sd.panel];
		var yAxis = sd.getYAxis(stx);
		var params = {
			skipTransform: panel.name != sd.chart.name,
			panelName: sd.panel,
			band: "Result " + sd.name,
			threshold: 0,
			color: color,
			yAxis: yAxis
		};
		if (!sd.highlight && stx.highlightedDraggable) params.opacity = 0.3;
		params.direction = 1;
		CIQ.preparePeakValleyFill(stx, params);
		params.direction = -1;
		CIQ.preparePeakValleyFill(stx, params);
	};

	CIQ.Studies.displayElderRay = function (stx, sd, quotes) {
		var panel = stx.panels[sd.panel],
			context = sd.getContext(stx);
		var yAxis = sd.getYAxis(stx);
		var y = stx.pixelFromPrice(0, panel, yAxis);

		var myWidth = stx.layout.candleWidth - 2;
		if (myWidth < 2) myWidth = 1;
		function drawBar(i, reduction, output, hist) {
			context.fillStyle = CIQ.Studies.determineColor(sd.outputs[output]);
			context.fillRect(
				Math.floor(
					stx.pixelFromBar(i, panel.chart) - myWidth / 2 + myWidth * reduction
				),
				Math.floor(y),
				Math.floor(myWidth * (1 - 2 * reduction)),
				Math.floor(stx.pixelFromPrice(quote[sd.name + hist], panel, yAxis) - y)
			);
		}

		stx.canvasColor("stx_histogram");
		var fillStyle = context.fillStyle;
		if (!sd.underlay) context.globalAlpha = 1;
		stx.startClip(sd.panel);
		if (!sd.highlight && stx.highlightedDraggable) context.globalAlpha *= 0.3;
		for (var i = 0; i < quotes.length; i++) {
			var quote = quotes[i];
			if (!quote) continue;
			if (quote.candleWidth)
				myWidth = Math.floor(Math.max(1, quote.candleWidth - 2));
			if (quote[sd.name + "_hist1"] > 0)
				drawBar(i, 0, "Elder Bull Power", "_hist1");
			if (quote[sd.name + "_hist2"] < 0)
				drawBar(i, 0, "Elder Bear Power", "_hist2");
			if (quote[sd.name + "_hist1"] < 0)
				drawBar(i, 0.1, "Elder Bull Power", "_hist1");
			if (quote[sd.name + "_hist2"] > 0)
				drawBar(i, 0.1, "Elder Bear Power", "_hist2");
		}
		stx.endClip();
		context.fillStyle = fillStyle;
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Elder Force": {
			name: "Elder Force Index",
			calculateFN: CIQ.Studies.calculateElderForce,
			seriesFN: CIQ.Studies.displayElderForce,
			inputs: { Period: 13 }
		},
		"Elder Ray": {
			name: "Elder Ray Index",
			seriesFN: CIQ.Studies.displayElderRay,
			calculateFN: CIQ.Studies.calculateElderRay,
			centerline: 0,
			inputs: { Period: 13 },
			outputs: { "Elder Bull Power": "#00DD00", "Elder Bear Power": "#FF0000" }
		},
		"Elder Impulse": {
			name: "Elder Impulse System",
			calculateFN: CIQ.Studies.calculateElderImpulse,
			initializeFN: CIQ.Studies.initElderImpulse,
			seriesFN: null,
			customRemoval: true,
			underlay: true,
			inputs: {},
			outputs: { Bullish: "#8BC176", Bearish: "#DD3E39", Neutral: "#5F7CB8" },
			removeFN: function (stx, sd) {
				stx.chart.customChart = null;
				stx.setMainSeriesRenderer();
			}
		}
	});
}

};


let __js_advanced_studies_fractalChaos_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"fractalChaos feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateFractalChaos = function (stx, sd) {
		var quotes = sd.chart.scrubbed;

		var fractalHigh = 0;
		var fractalLow = 0;
		var test = 0;
		if (sd.startFrom && sd.type == "Fractal Chaos Bands") {
			fractalHigh = quotes[sd.startFrom - 1]["Fractal High " + sd.name];
			fractalLow = quotes[sd.startFrom - 1]["Fractal Low " + sd.name];
		}
		for (var i = Math.max(4, sd.startFrom); i < quotes.length; i++) {
			if (quotes[i].futureTick) break;
			var nHi = !isNaN(quotes[i].High),
				nLo = !isNaN(quotes[i].Low);
			if (nHi || nLo) quotes[i]["Result " + sd.name] = 0;
			var j;
			test = 0;
			for (j = 0; j <= i; j++) {
				if (!quotes[i - j]) break;
				if (quotes[i - j].High > quotes[i - 2].High) break;
				if (j < 2 && quotes[i - j].High == quotes[i - 2].High) break;
				if (quotes[i - j].High < quotes[i - 2].High) test++;
				if (test == 4) {
					fractalHigh = quotes[i - 2].High;
					break;
				}
			}
			if (sd.type == "Fractal Chaos Bands") {
				if (nHi)
					quotes[i]["Fractal High " + sd.name] =
						fractalHigh > 0 ? fractalHigh : null;
			} else if (test == 4) {
				//oscillator
				quotes[i]["Result " + sd.name] = 1;
			}
			test = 0;
			for (j = 0; j <= i; j++) {
				if (!quotes[i - j]) break;
				if (quotes[i - j].Low < quotes[i - 2].Low) break;
				if (j < 2 && quotes[i - j].Low == quotes[i - 2].Low) break;
				if (quotes[i - j].Low > quotes[i - 2].Low) test++;
				if (test == 4) {
					fractalLow = quotes[i - 2].Low;
					break;
				}
			}
			if (sd.type == "Fractal Chaos Bands") {
				if (nLo)
					quotes[i]["Fractal Low " + sd.name] =
						fractalLow > 0 ? fractalLow : null;
			} else if (test == 4) {
				//oscillator
				quotes[i]["Result " + sd.name] = -1;
			}
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Fractal Chaos": {
			name: "Fractal Chaos Oscillator",
			range: "-1 to 1",
			calculateFN: CIQ.Studies.calculateFractalChaos,
			inputs: {},
			centerline: null // so centerline is drawn but not included in the range calculation
		},
		"Fractal Chaos Bands": {
			name: "Fractal Chaos Bands",
			overlay: true,
			calculateFN: CIQ.Studies.calculateFractalChaos,
			seriesFN: CIQ.Studies.displayChannel,
			inputs: { "Channel Fill": true },
			outputs: {
				"Fractal High": "auto",
				"Fractal Low": "auto",
				"Fractal Channel": "auto"
			}
		}
	});
}

};


let __js_advanced_studies_highLowStudies_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"highLowStudies feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateMaxHighMinLow = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var highPeriod = sd.days,
			lowPeriod = sd.days;
		if (sd.inputs["High Period"]) highPeriod = sd.inputs["High Period"];
		if (sd.inputs["Low Period"]) lowPeriod = sd.inputs["Low Period"];
		if (quotes.length < Math.max(highPeriod, lowPeriod) + 1) {
			sd.error = true;
			return;
		}

		var low = Number.MAX_VALUE,
			high = Number.MAX_VALUE * -1;
		var j;
		if (sd.startFrom > 1) {
			for (j = 1; j < highPeriod; j++) {
				if (sd.startFrom - j >= 0)
					high = Math.max(high, quotes[sd.startFrom - j].High);
			}
			for (j = 1; j < lowPeriod; j++) {
				if (sd.startFrom - j >= 0)
					low = Math.min(low, quotes[sd.startFrom - j].Low);
			}
		}
		for (var i = Math.max(0, sd.startFrom - 1); i < quotes.length; i++) {
			high = Math.max(high, quotes[i].High);
			low = Math.min(low, quotes[i].Low);
			if (i >= highPeriod) {
				if (quotes[i - highPeriod].High == high) {
					high = quotes[i].High;
					for (j = 1; j < highPeriod; j++) {
						high = Math.max(high, quotes[i - j].High);
					}
				}
			}
			if (i >= lowPeriod) {
				if (quotes[i - lowPeriod].Low == low) {
					low = quotes[i].Low;
					for (j = 1; j < lowPeriod; j++) {
						low = Math.min(low, quotes[i - j].Low);
					}
				}
			}
			var result = 0;
			if (sd.type == "HHV") {
				result = high;
			} else if (sd.type == "LLV") {
				result = low;
			} else if (sd.type == "Donchian Width") {
				result = high - low;
			} else if (sd.type == "GAPO" || sd.type == "Gopala") {
				result = Math.log(high - low) / Math.log(lowPeriod);
			} else if (sd.type == "VT HZ Filter") {
				result = high - low;
				quotes[i]["_MHML " + sd.name] = result;
				continue;
			} else if (sd.type == "Williams %R") {
				result = (-100 * (high - quotes[i].Close)) / (high - low);
				quotes[i]["Result " + sd.name] = result;
				continue;
			}
			if (i == quotes.length - 1) break;

			if (!quotes[i + 1].futureTick) {
				if (sd.type == "Donchian Channel") {
					quotes[i + 1]["Donchian High " + sd.name] = high;
					quotes[i + 1]["Donchian Low " + sd.name] = low;
					quotes[i + 1]["Donchian Median " + sd.name] = (high + low) / 2;
				} else {
					//width
					quotes[i + 1]["Result " + sd.name] = result;
				}
			}
		}
	};

	CIQ.Studies.calculateVerticalHorizontalFilter = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		sd.mhml = new CIQ.Studies.StudyDescriptor(sd.name, sd.type, sd.panel);
		sd.mhml.chart = sd.chart;
		sd.mhml.days = sd.days;
		sd.mhml.startFrom = sd.startFrom;
		sd.mhml.inputs = {};
		sd.mhml.outputs = { _MHML: null };
		CIQ.Studies.calculateMaxHighMinLow(stx, sd.mhml);
		var sumChanges = 0;
		var changes = [];
		for (var i = Math.max(1, sd.startFrom - sd.days); i < quotes.length; i++) {
			var change = Math.abs(quotes[i].Close - quotes[i - 1].Close);
			changes.push(change);
			sumChanges += change;
			if (changes.length == sd.days) {
				quotes[i]["Result " + sd.name] =
					quotes[i]["_MHML " + sd.name] / sumChanges;
				sumChanges -= changes.shift();
			}
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Donchian Channel": {
			name: "Donchian Channel",
			overlay: true,
			calculateFN: CIQ.Studies.calculateMaxHighMinLow,
			seriesFN: CIQ.Studies.displayChannel,
			inputs: { "High Period": 20, "Low Period": 20, "Channel Fill": true },
			outputs: {
				"Donchian High": "auto",
				"Donchian Median": "auto",
				"Donchian Low": "auto"
			}
		},
		"Donchian Width": {
			name: "Donchian Width",
			calculateFN: CIQ.Studies.calculateMaxHighMinLow,
			inputs: { "High Period": 20, "Low Period": 20 }
		},
		GAPO: {
			name: "Gopalakrishnan Range Index",
			calculateFN: CIQ.Studies.calculateMaxHighMinLow
		},
		HHV: {
			name: "Highest High Value",
			calculateFN: CIQ.Studies.calculateMaxHighMinLow,
			inputs: { Period: 14 }
		},
		LLV: {
			name: "Lowest Low Value",
			calculateFN: CIQ.Studies.calculateMaxHighMinLow,
			inputs: { Period: 14 }
		},
		"Williams %R": {
			name: "Williams %R",
			calculateFN: CIQ.Studies.calculateMaxHighMinLow,
			inputs: { Period: 14 },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: -20,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: -80,
					studyOverSoldColor: "auto"
				}
			}
		},
		"VT HZ Filter": {
			name: "Vertical Horizontal Filter",
			calculateFN: CIQ.Studies.calculateVerticalHorizontalFilter,
			inputs: { Period: 28 }
		},
		"High-Low": {
			name: "High Minus Low",
			calculateFN: function (stx, sd) {
				var quotes = sd.chart.scrubbed;
				for (var i = sd.startFrom; i < quotes.length; i++) {
					quotes[i]["Result " + sd.name] = quotes[i].High - quotes[i].Low;
				}
			},
			inputs: {}
		}
	});
}

};


let __js_advanced_studies_ichimoku_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("ichimoku feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateIchimoku = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var periods = {
			Base: Number(sd.inputs["Base Line Period"]),
			Conv: Number(sd.inputs["Conversion Line Period"]),
			LeadB: Number(sd.inputs["Leading Span B Period"]),
			Lag: Number(sd.inputs["Lagging Span Period"])
		};

		function getLLVHHV(p, x) {
			var l = Number.MAX_VALUE,
				h = Number.MAX_VALUE * -1;
			for (var j = x - p + 1; j <= x; j++) {
				if (j < 0) continue;
				l = Math.min(l, quotes[j].Low);
				h = Math.max(h, quotes[j].High);
			}
			return [l, h];
		}

		var i, hl;
		for (i = sd.startFrom; i < quotes.length; i++) {
			if (!quotes[i]) continue;

			hl = getLLVHHV(periods.Conv, i);
			quotes[i]["Conversion Line " + sd.name] = (hl[1] + hl[0]) / 2;

			hl = getLLVHHV(periods.Base, i);
			quotes[i]["Base Line " + sd.name] = (hl[1] + hl[0]) / 2;

			if (i < periods.Lag) continue;
			quotes[i - periods.Lag]["Lagging Span " + sd.name] = quotes[i].Close;
		}
		var futureTicks = [];
		for (i = Math.max(0, sd.startFrom - periods.Base); i < quotes.length; i++) {
			hl = getLLVHHV(periods.LeadB, i);
			var lsa =
				(quotes[i]["Conversion Line " + sd.name] +
					quotes[i]["Base Line " + sd.name]) /
				2;
			var lsb = (hl[1] + hl[0]) / 2;
			if (quotes[i + periods.Base]) {
				quotes[i + periods.Base]["Leading Span A " + sd.name] = lsa;
				quotes[i + periods.Base]["Leading Span B " + sd.name] = lsb;
			} else {
				var ft = {};
				ft["Leading Span A " + sd.name] = lsa;
				ft["Leading Span B " + sd.name] = lsb;
				futureTicks.push(ft);
			}
		}
		sd.appendFutureTicks(stx, futureTicks);
	};

	CIQ.Studies.displayIchimoku = function (stx, sd, quotes) {
		var topBand = "Leading Span A " + sd.name,
			bottomBand = "Leading Span B " + sd.name;
		var topColor = CIQ.Studies.determineColor(
			sd.outputs[sd.outputMap[topBand]]
		);
		var bottomColor = CIQ.Studies.determineColor(
			sd.outputs[sd.outputMap[bottomBand]]
		);
		var panel = stx.panels[sd.panel];
		var yAxis = sd.getYAxis(stx);
		var parameters = {
			topBand: topBand,
			bottomBand: bottomBand,
			topColor: topColor,
			bottomColor: bottomColor,
			skipTransform: panel.name != sd.chart.name,
			topAxis: yAxis,
			bottomAxis: yAxis,
			opacity: 0.3
		};
		if (!sd.highlight && stx.highlightedDraggable) parameters.opacity *= 0.3;
		CIQ.fillIntersecting(stx, sd.panel, parameters);
		CIQ.Studies.displaySeriesAsLine(stx, sd, quotes);
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Ichimoku Clouds": {
			name: "Ichimoku Clouds",
			overlay: true,
			calculateFN: CIQ.Studies.calculateIchimoku,
			seriesFN: CIQ.Studies.displayIchimoku,
			inputs: {
				"Conversion Line Period": 9,
				"Base Line Period": 26,
				"Leading Span B Period": 52,
				"Lagging Span Period": 26
			},
			outputs: {
				"Conversion Line": "#0000FF",
				"Base Line": "#FF0000",
				"Leading Span A": "#00FF00",
				"Leading Span B": "#FF0000",
				"Lagging Span": "#808000"
			}
		}
	});
}

};


let __js_advanced_studies_intradayMomentum_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"intradayMomentum feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateIntradayMomentum = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var period = sd.days;
		if (quotes.length < period + 1) {
			sd.error = true;
			return;
		}

		var totalUp = 0;
		var totalDown = 0;
		if (sd.startFrom > 1) {
			totalUp = quotes[sd.startFrom - 1]["_totUp " + sd.name];
			totalDown = quotes[sd.startFrom - 1]["_totDn " + sd.name];
		}
		for (var i = sd.startFrom; i < quotes.length; i++) {
			var diff = quotes[i].Close - quotes[i].Open;
			if (diff > 0) totalUp += diff;
			else totalDown -= diff;
			if (i >= period) {
				var pDiff = quotes[i - period].Close - quotes[i - period].Open;
				if (pDiff > 0) totalUp -= pDiff;
				else totalDown += pDiff;
			}
			quotes[i]["Result " + sd.name] = (100 * totalUp) / (totalUp + totalDown);
			quotes[i]["_totUp " + sd.name] = totalUp;
			quotes[i]["_totDn " + sd.name] = totalDown;
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Intraday Mtm": {
			name: "Intraday Momentum Index",
			calculateFN: CIQ.Studies.calculateIntradayMomentum,
			inputs: { Period: 20 },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 70,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: 30,
					studyOverSoldColor: "auto"
				}
			}
		}
	});
}

};


let __js_advanced_studies_keltner_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("keltner feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateKeltner = function (stx, sd) {
		CIQ.Studies.MA(
			sd.inputs["Moving Average Type"],
			sd.days,
			"Close",
			0,
			"MA",
			stx,
			sd
		);
		CIQ.Studies.calculateStudyATR(stx, sd);
		CIQ.Studies.calculateGenericEnvelope(
			stx,
			sd,
			sd.inputs.Shift,
			"MA " + sd.name,
			"ATR " + sd.name
		);
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Keltner: {
			name: "Keltner Channel",
			overlay: true,
			seriesFN: CIQ.Studies.displayChannel,
			calculateFN: CIQ.Studies.calculateKeltner,
			inputs: {
				Period: 50,
				Shift: 5,
				"Moving Average Type": "ema",
				"Channel Fill": true
			},
			outputs: {
				"Keltner Top": "auto",
				"Keltner Median": "auto",
				"Keltner Bottom": "auto"
			},
			attributes: {
				Shift: { min: 0.1, step: 0.1 }
			}
		}
	});
}

};


let __js_advanced_studies_klinger_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("klinger feature requires first activating studies feature.");
} else {
	/**
	 * Calculate function for klinger
	 * @param  {CIQ.ChartEngine} stx Chart object
	 * @param {CIQ.Studies.StudyDescriptor} sd  Study Descriptor
	 * @memberOf CIQ.Studies
	 */
	CIQ.Studies.calculateKlinger = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var shortCycle = Number(sd.inputs["Short Cycle"]);
		var longCycle = Number(sd.inputs["Long Cycle"]);
		if (quotes.length < Math.max(shortCycle, longCycle) + 1) {
			sd.error = true;
			return;
		}

		var field = sd.name + "_hist",
			klinger = "Klinger " + sd.name,
			klingerSignal = "KlingerSignal " + sd.name,
			signedVolume = "_SV " + sd.name,
			shortEMA = "_EMA-S " + sd.name,
			longEMA = "_EMA-L " + sd.name,
			i;
		for (i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			var sv = quotes[i].Volume;
			if (quotes[i]["hlc/3"] < quotes[i - 1]["hlc/3"]) sv *= -1;
			if (sv) quotes[i][signedVolume] = sv;
		}

		CIQ.Studies.MA(
			"exponential",
			shortCycle,
			signedVolume,
			0,
			"_EMA-S",
			stx,
			sd
		);
		CIQ.Studies.MA(
			"exponential",
			longCycle,
			signedVolume,
			0,
			"_EMA-L",
			stx,
			sd
		);

		for (i = Math.max(longCycle, sd.startFrom); i < quotes.length; i++) {
			if (
				quotes[i].futureTick ||
				quotes[i][shortEMA] === null ||
				quotes[i][longEMA] === null
			)
				break;
			quotes[i][klinger] = quotes[i][shortEMA] - quotes[i][longEMA];
		}

		CIQ.Studies.MA(
			"exponential",
			Number(sd.inputs["Signal Periods"]),
			klinger,
			0,
			"KlingerSignal",
			stx,
			sd
		);

		for (i = sd.startFrom; i < quotes.length; i++) {
			quotes[i][field] = quotes[i][klinger] - quotes[i][klingerSignal];
		}
		sd.outputMap[field] = "";
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Klinger: {
			name: "Klinger Volume Oscillator",
			seriesFN: CIQ.Studies.displayHistogramWithSeries,
			calculateFN: CIQ.Studies.calculateKlinger,
			inputs: { "Signal Periods": 13, "Short Cycle": 34, "Long Cycle": 55 },
			outputs: {
				Klinger: "auto",
				KlingerSignal: "#FF0000",
				"Increasing Bar": "#00DD00",
				"Decreasing Bar": "#FF0000"
			}
		}
	});
}

};


let __js_advanced_studies_linearRegression_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"linearRegression feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.prettify["time series"] = "tsma";
	CIQ.Studies.movingAverage.conversions.tsma = "time series";
	CIQ.Studies.movingAverage.translations["time series"] = "Time Series";
	CIQ.Studies.movingAverage.typeMap.tsma = "TimeSeries";
	CIQ.Studies.movingAverage.typeMap["time series"] = "TimeSeries";

	/**
	 * Calculate function for time series moving average.
	 *
	 * The resulting values will be added to the dataSet using the field name provided by the `sd.outputMap` entry.
	 *
	 * **Notes:**
	 * - This function calculates a single value, so it expects `sd.outputMap` to contain a single mapping.
	 * - To leverage as part of a larger study calculation, use {@link CIQ.Studies.MA} instead.
	 * - If no `outputs` object is defined in the library entry, the study will default to a single output named `Result`, which will then be used in lieu of `sd.outputs` to build the field name.
	 * - The study name may contain the unprintable character `&zwnj;`, see {@link studyDescriptor} documentation.
	 *
	 * @param  {CIQ.ChartEngine} stx Chart object
	 * @param {CIQ.Studies.StudyDescriptor} sd  Study Descriptor
	 * @private
	 * @memberof CIQ.Studies
	 */
	CIQ.Studies.calculateMovingAverageTimeSeries = function (stx, sd) {
		sd.ma = new CIQ.Studies.StudyDescriptor(sd.name, "ma", sd.panel);
		sd.ma.chart = sd.chart;
		sd.ma.days = sd.days;
		sd.ma.startFrom = sd.startFrom;
		sd.ma.inputs = sd.inputs;
		CIQ.Studies.calculateLinearRegressionIndicator(stx, sd.ma);

		var name = sd.name;
		for (var p in sd.outputs) {
			name = p + " " + name;
		}
		var offset = parseInt(sd.inputs.Offset, 10);
		if (isNaN(offset)) offset = 0;

		var quotes = sd.chart.scrubbed;
		// find start
		var offsetBack = offset;
		for (var i = sd.startFrom - 1; i >= 0; i--) {
			var val = quotes[i][name];
			if (!val && val !== 0) continue;
			if (offsetBack > 0) {
				offsetBack--;
				continue;
			}
			break;
		}
		var futureTicks = [];
		for (i++; i < quotes.length; i++) {
			var quote = quotes[i];
			if (i + offset >= 0) {
				if (i + offset < quotes.length)
					quotes[i + offset][name] = quote["Forecast " + sd.name];
				else {
					var ft = {};
					ft[name] = quote["Forecast " + sd.name];
					futureTicks.push(ft);
				}
			}
		}
		sd.appendFutureTicks(stx, futureTicks);
	};

	CIQ.Studies.calculateLinearRegressionIndicator = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";

		var sumWeights = (sd.days * (sd.days + 1)) / 2;
		var squaredSumWeights = Math.pow(sumWeights, 2);
		var sumWeightsSquared = (sumWeights * (2 * sd.days + 1)) / 3;

		var sumCloses = 0;
		var sumWeightedCloses = 0;
		var sumClosesSquared = 0;
		if (sd.startFrom) {
			var sums = quotes[sd.startFrom - 1]["_sums " + sd.name];
			if (sums) {
				sumWeightedCloses = sums[0];
				sumCloses = sums[1];
				sumClosesSquared = sums[2];
			}
		}
		for (var i = sd.startFrom; i < quotes.length; i++) {
			var currentQuote = quotes[i][field];
			if (currentQuote && typeof currentQuote == "object")
				currentQuote = currentQuote[sd.subField];
			if (!currentQuote && currentQuote !== 0) continue;
			sumWeightedCloses += sd.days * currentQuote - sumCloses;
			sumCloses += currentQuote;
			sumClosesSquared += Math.pow(currentQuote, 2);
			if (i < sd.days - 1) continue;
			else if (i > sd.days - 1) {
				var daysAgoQuote = quotes[i - sd.days][field];
				if (daysAgoQuote && typeof daysAgoQuote == "object")
					daysAgoQuote = daysAgoQuote[sd.subField];
				if (!daysAgoQuote && daysAgoQuote !== 0) continue;
				sumCloses -= daysAgoQuote;
				sumClosesSquared -= Math.pow(daysAgoQuote, 2);
			}
			var b =
				(sd.days * sumWeightedCloses - sumWeights * sumCloses) /
				(sd.days * sumWeightsSquared - squaredSumWeights);
			quotes[i]["Slope " + sd.name] = b;
			var a = (sumCloses - b * sumWeights) / sd.days;
			quotes[i]["Intercept " + sd.name] = a;
			quotes[i]["Forecast " + sd.name] = a + b * sd.days;
			var c =
				(sd.days * sumWeightsSquared - squaredSumWeights) /
				(sd.days * sumClosesSquared - Math.pow(sumCloses, 2));
			quotes[i]["RSquared " + sd.name] = b * b * c;
			quotes[i]["_sums " + sd.name] = [
				sumWeightedCloses,
				sumCloses,
				sumClosesSquared
			];
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Lin Fcst": {
			name: "Linear Reg Forecast",
			overlay: true,
			calculateFN: CIQ.Studies.calculateLinearRegressionIndicator,
			inputs: { Period: 14, Field: "field" },
			outputs: { Forecast: "auto" }
		},
		"Lin Incpt": {
			name: "Linear Reg Intercept",
			overlay: true,
			calculateFN: CIQ.Studies.calculateLinearRegressionIndicator,
			inputs: { Period: 14, Field: "field" },
			outputs: { Intercept: "auto" }
		},
		"Lin R2": {
			name: "Linear Reg R2",
			calculateFN: CIQ.Studies.calculateLinearRegressionIndicator,
			inputs: { Period: 14, Field: "field" },
			outputs: { RSquared: "auto" }
		},
		"LR Slope": {
			name: "Linear Reg Slope",
			calculateFN: CIQ.Studies.calculateLinearRegressionIndicator,
			inputs: { Period: 14, Field: "field" },
			outputs: { Slope: "auto" }
		},
		"Time Fcst": {
			name: "Time Series Forecast",
			overlay: true,
			calculateFN: CIQ.Studies.calculateLinearRegressionIndicator,
			inputs: { Period: 14, Field: "field" },
			outputs: { Forecast: "auto" }
		}
	});
}

};


let __js_advanced_studies_macd_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("macd feature requires first activating studies feature.");
} else {
	/**
	 * Calculate function for MACD study.
	 *
	 * The resulting values will be added to the dataSet using the field name provided by the `sd.outputMap` entry.
	 *
	 * **Notes:**
	 * - If no `outputs` object is defined in the library entry, the study will default to a single output named `Result`, which will then be used in lieu of `sd.outputs` to build the `sd.outputMap`.
	 * - The study name may contain the unprintable character `&zwnj;`, see studyDescriptor documentation
	 * - Results for the histogram will be added to the dataSegment using a field composed the study name and the "_hist" suffix.
	 *
	 * @param  {CIQ.ChartEngine} stx Chart object
	 * @param {CIQ.Studies.StudyDescriptor} sd  Study Descriptor
	 * @memberOf CIQ.Studies
	 */
	CIQ.Studies.calculateMACD = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var inputs = sd.inputs,
			name = sd.name;
		if (!sd.macd1Days) sd.macd1Days = parseFloat(inputs["Fast MA Period"]);
		if (!sd.macd2Days) sd.macd2Days = parseFloat(inputs["Slow MA Period"]);
		if (!sd.signalDays) sd.signalDays = parseFloat(inputs["Signal Period"]);
		if (!sd.days) sd.days = Math.max(sd.macd1Days, sd.macd2Days, sd.signalDays);
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}

		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";

		var maType = inputs["Moving Average Type"];
		if (!maType) maType = "exponential";

		CIQ.Studies.MA(maType, sd.macd1Days, field, 0, "_MACD1", stx, sd);
		CIQ.Studies.MA(maType, sd.macd2Days, field, 0, "_MACD2", stx, sd);

		var i,
			quote,
			start = Math.max(sd.startFrom, sd.days - 1);
		for (i = start; i < quotes.length; i++) {
			quote = quotes[i];
			if (
				(quote["_MACD1 " + name] || quote["_MACD1 " + name] === 0) &&
				(quote["_MACD2 " + name] || quote["_MACD2 " + name] === 0)
			)
				quote["MACD " + name] =
					quote["_MACD1 " + name] - quote["_MACD2 " + name];
		}
		var sigMaType = inputs["Signal MA Type"];
		if (!sigMaType) sigMaType = "exponential";
		CIQ.Studies.MA(
			sigMaType,
			sd.signalDays,
			"MACD " + name,
			0,
			"Signal",
			stx,
			sd
		);

		var histogram = name + "_hist";
		for (i = start; i < quotes.length; i++) {
			quote = quotes[i];
			var signal = quote["Signal " + name];
			if (!signal && signal !== 0) continue; // don't create histogram before the signal line is valid
			quote[histogram] = quote["MACD " + name] - quote["Signal " + name];
		}
		sd.outputMap[histogram] = "";
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		macd: {
			name: "MACD",
			calculateFN: CIQ.Studies.calculateMACD,
			seriesFN: CIQ.Studies.displayHistogramWithSeries,
			inputs: {
				"Fast MA Period": 12,
				"Slow MA Period": 26,
				"Signal Period": 9
			},
			outputs: {
				MACD: "auto",
				Signal: "#FF0000",
				"Increasing Bar": "#00DD00",
				"Decreasing Bar": "#FF0000"
			}
		}
	});
}

};


let __js_advanced_studies_massIndex_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("massIndex feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateMassIndex = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < Math.max(9, sd.days + 1)) {
			sd.error = true;
			return;
		}
		for (var i = sd.startFrom; i < quotes.length; i++) {
			quotes[i]["_High-Low " + sd.name] = quotes[i].High - quotes[i].Low;
		}

		CIQ.Studies.MA(
			"exponential",
			9,
			"_High-Low " + sd.name,
			0,
			"_EMA",
			stx,
			sd
		);
		CIQ.Studies.MA("exponential", 9, "_EMA " + sd.name, 0, "_EMA2", stx, sd);

		var total = 0;
		if (
			quotes[sd.startFrom - 1] &&
			quotes[sd.startFrom - 1]["_total " + sd.name]
		)
			total = quotes[sd.startFrom - 1]["_total " + sd.name];
		for (var j = Math.max(17, sd.startFrom); j < quotes.length; j++) {
			total += quotes[j]["_EMA " + sd.name] / quotes[j]["_EMA2 " + sd.name];
			if (j >= 17 + sd.days - 1) {
				quotes[j]["Result " + sd.name] = total;
				total -=
					quotes[j - sd.days + 1]["_EMA " + sd.name] /
					quotes[j - sd.days + 1]["_EMA2 " + sd.name];
			}
			quotes[j]["_total " + sd.name] = total;
		}
	};

	CIQ.Studies.displayMassIndex = function (stx, sd, quotes) {
		CIQ.Studies.displaySeriesAsLine(stx, sd, quotes);

		var bulge = sd.inputs["Bulge Threshold"];

		var panel = stx.panels[sd.panel];
		var yAxis = sd.getYAxis(stx);
		var color = CIQ.Studies.determineColor(sd.outputs.Result);

		var params = {
			skipTransform: stx.panels[sd.panel].name != sd.chart.name,
			panelName: sd.panel,
			band: "Result " + sd.name,
			threshold: bulge,
			direction: 1,
			color: color,
			yAxis: yAxis,
			opacity: 0.3
		};
		if (!sd.highlight && stx.highlightedDraggable) params.opacity *= 0.3;
		CIQ.preparePeakValleyFill(stx, params);
		CIQ.Studies.drawHorizontal(stx, sd, null, bulge, yAxis, color);
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Mass Idx": {
			name: "Mass Index",
			seriesFN: CIQ.Studies.displayMassIndex,
			calculateFN: CIQ.Studies.calculateMassIndex,
			inputs: { Period: 25, "Bulge Threshold": 27 },
			attributes: {
				"Bulge Threshold": { min: 20, max: 35, step: 0.1 }
			}
		}
	});
}

};


let __js_advanced_studies_moneyFlow_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("moneyFlow feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateMoneyFlowIndex = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var cumPosMF = 0,
			cumNegMF = 0;
		var startQuote = quotes[sd.startFrom - 1];
		var rawMFLbl = "_rawMF " + sd.name;
		var cumMFLbl = "_cumMF " + sd.name;
		var resultLbl = "Result " + sd.name;
		if (startQuote && startQuote[cumMFLbl]) {
			cumPosMF = startQuote[cumMFLbl][0];
			cumNegMF = startQuote[cumMFLbl][1];
		}
		for (var i = sd.startFrom; i < quotes.length; i++) {
			var typPrice = quotes[i]["hlc/3"];
			if (i > 0 && !quotes[i].futureTick) {
				var lastTypPrice = quotes[i - 1]["hlc/3"];
				var rawMoneyFlow = typPrice * quotes[i].Volume;
				if (typPrice > lastTypPrice) {
					cumPosMF += rawMoneyFlow;
				} else if (typPrice < lastTypPrice) {
					rawMoneyFlow *= -1;
					cumNegMF -= rawMoneyFlow;
				} else {
					rawMoneyFlow = 0;
				}
				if (i > sd.days) {
					var old = quotes[i - sd.days][rawMFLbl];
					if (old > 0) cumPosMF -= old;
					else cumNegMF += old;
					if (cumNegMF === 0) quotes[i][resultLbl] = 100;
					else if (quotes[i].Volume)
						quotes[i][resultLbl] = 100 - 100 / (1 + cumPosMF / cumNegMF);
				}
				quotes[i][rawMFLbl] = rawMoneyFlow;
				quotes[i][cumMFLbl] = [cumPosMF, cumNegMF];
			}
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"M Flow": {
			name: "Money Flow Index",
			range: "0 to 100",
			calculateFN: CIQ.Studies.calculateMoneyFlowIndex,
			inputs: { Period: 14 },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 80,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: 20,
					studyOverSoldColor: "auto"
				}
			}
		}
	});
}

};


let __js_advanced_studies_movingAverages_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"movingAverages feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.prettify = CIQ.extend(
		{
			"2-exponential": "dema",
			"3-exponential": "tema",
			hull: "hma"
		},
		CIQ.Studies.prettify
	);

	CIQ.extend(CIQ.Studies.movingAverage, {
		conversions: {
			hma: "hull",
			dema: "2-exponential",
			tema: "3-exponential"
		},
		translations: {
			hull: "Hull",
			"2-exponential": "Double Exponential",
			"3-exponential": "Triple Exponential"
		},
		typeMap: {
			hma: "Hull",
			hull: "Hull",
			dema: "DoubleExponential",
			"2-exponential": "DoubleExponential",
			tema: "TripleExponential",
			"3-exponential": "TripleExponential"
		}
	});

	CIQ.Studies.calculateMovingAverageHull = function (stx, sd) {
		var quotes = sd.chart.scrubbed;

		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close"; // Handle when the default inputs are passed in

		CIQ.Studies.MA("wma", sd.days, field, 0, "_WMA1", stx, sd);
		CIQ.Studies.MA("wma", Math.ceil(sd.days / 2), field, 0, "_WMA2", stx, sd);

		var i, val;
		for (i = sd.startFrom - 1; i >= 0; i--) {
			val = quotes[i][field];
			if (val && typeof val == "object") val = val[sd.subField];
			if (val || val === 0) break;
		}
		for (i++; i < quotes.length; i++) {
			var quote = quotes[i];
			quote["_MMA " + sd.name] =
				2 * quote["_WMA2 " + sd.name] - quote["_WMA1 " + sd.name];
		}

		var offset = parseInt(sd.inputs.Offset, 10);
		if (isNaN(offset)) offset = 0;

		var hmaDays = Math.floor(Math.sqrt(sd.days));
		CIQ.Studies.MA("wma", hmaDays, "_MMA " + sd.name, offset, "_HMA", stx, sd);

		var name = sd.name;
		for (var p in sd.outputs) {
			name = p + " " + name;
		}
		for (
			i = Math.max(sd.days + hmaDays - 1, sd.startFrom);
			i < quotes.length;
			i++
		) {
			quotes[i][name] = quotes[i]["_HMA " + sd.name];
		}
	};

	CIQ.Studies.calculateMovingAverageDoubleExponential = function (stx, sd) {
		var quotes = sd.chart.scrubbed;

		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close"; // Handle when the default inputs are passed in

		CIQ.Studies.MA("ema", sd.days, field, 0, "_EMA1", stx, sd);
		CIQ.Studies.MA("ema", sd.days, "_EMA1 " + sd.name, 0, "_EMA2", stx, sd);

		var offset = parseInt(sd.inputs.Offset, 10);
		if (isNaN(offset)) offset = 0;
		var i, val;
		var offsetBack = offset;
		for (i = sd.startFrom - 1; i >= 0; i--) {
			val = quotes[i][field];
			if (val && typeof val == "object") val = val[sd.subField];
			if (!val && val !== 0) continue;
			if (offsetBack > 0) {
				offsetBack--;
				continue;
			}
			break;
		}
		var name = sd.name;
		for (var p in sd.outputs) {
			name = p + " " + name;
		}
		var futureTicks = [];
		for (i++; i < quotes.length; i++) {
			if (i < 2 * (sd.days - 1)) continue;
			var quote = quotes[i];
			var result = 2 * quote["_EMA1 " + sd.name] - quote["_EMA2 " + sd.name];
			if (i + offset >= 0) {
				if (i + offset < quotes.length) quotes[i + offset][name] = result;
				else {
					var ft = {};
					ft[name] = result;
					futureTicks.push(ft);
				}
			}
		}
		sd.appendFutureTicks(stx, futureTicks);
	};

	CIQ.Studies.calculateMovingAverageTripleExponential = function (stx, sd) {
		var quotes = sd.chart.scrubbed;

		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close"; // Handle when the default inputs are passed in

		CIQ.Studies.MA("ema", sd.days, field, 0, "_EMA1", stx, sd);
		CIQ.Studies.MA("ema", sd.days, "_EMA1 " + sd.name, 0, "_EMA2", stx, sd);
		CIQ.Studies.MA("ema", sd.days, "_EMA2 " + sd.name, 0, "_EMA3", stx, sd);

		var offset = parseInt(sd.inputs.Offset, 10);
		if (isNaN(offset)) offset = 0;
		var i, val;
		var offsetBack = offset;
		for (i = sd.startFrom - 1; i >= 0; i--) {
			val = quotes[i][field];
			if (val && typeof val == "object") val = val[sd.subField];
			if (!val && val !== 0) continue;
			if (offsetBack > 0) {
				offsetBack--;
				continue;
			}
			break;
		}
		var name = sd.name;
		for (var p in sd.outputs) {
			name = p + " " + name;
		}
		var futureTicks = [];
		for (i++; i < quotes.length; i++) {
			if (i < 3 * (sd.days - 1)) continue;
			var quote = quotes[i];
			var result =
				3 * quote["_EMA1 " + sd.name] -
				3 * quote["_EMA2 " + sd.name] +
				quote["_EMA3 " + sd.name];
			if (i + offset >= 0) {
				if (i + offset < quotes.length) quotes[i + offset][name] = result;
				else {
					var ft = {};
					ft[name] = result;
					futureTicks.push(ft);
				}
			}
		}
		sd.appendFutureTicks(stx, futureTicks);
	};

	CIQ.Studies.calculateMAEnvelope = function (stx, sd) {
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		CIQ.Studies.MA(
			sd.inputs["Moving Average Type"],
			sd.days,
			field,
			0,
			"MA",
			stx,
			sd
		);
		var shiftType = sd.inputs["Shift Type"];
		var shift = sd.inputs.Shift;
		if (!shiftType) {
			//legacy
			shiftType = "percent";
			shift = sd.inputs["Shift Percentage"];
		}
		if (shiftType == "percent") {
			CIQ.Studies.calculateGenericEnvelope(
				stx,
				sd,
				shift / 100,
				"MA " + sd.name
			);
		} else if (shiftType == "points") {
			CIQ.Studies.calculateGenericEnvelope(
				stx,
				sd,
				null,
				"MA " + sd.name,
				null,
				Number(shift)
			);
		}
	};

	CIQ.Studies.calculateMADev = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		var pts = sd.inputs["Points Or Percent"];
		if (!pts) pts = "Points";
		var maType = sd.inputs["Moving Average Type"];
		if (!maType) maType = "exponential";
		CIQ.Studies.MA(maType, sd.days, field, 0, "_MA", stx, sd);
		var histogram = sd.name + "_hist";
		for (var i = Math.max(sd.startFrom, sd.days - 1); i < quotes.length; i++) {
			var quote = quotes[i];
			var val = quote[field];
			if (val && typeof val == "object") val = val[sd.subField];
			var qMA = quote["_MA " + sd.name];
			if (qMA || qMA === 0) {
				if (pts == "Points") quote[histogram] = val - qMA;
				else quote[histogram] = 100 * (val / qMA - 1);
			}
		}
		sd.outputMap = {};
		sd.outputMap[sd.name + "_hist"] = "";
	};

	CIQ.Studies.calculateGMMA = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var stPeriod = [3, 5, 8, 10, 12, 15];
		var ltPeriod = [30, 35, 40, 45, 50, 60];
		if (quotes.length < stPeriod[0]) {
			sd.error = true;
			return;
		}
		function ma(term) {
			return function (p) {
				CIQ.Studies.MA("ema", p, "Close", 0, "MA " + p, stx, sd);
				sd.outputMap["MA " + p + " " + sd.name] = term;
			};
		}
		sd.outputMap = {};
		stPeriod.forEach(ma("Short Term"));
		ltPeriod.forEach(ma("Long Term"));
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"MA Env": {
			name: "Moving Average Envelope",
			overlay: true,
			seriesFN: CIQ.Studies.displayChannel,
			calculateFN: CIQ.Studies.calculateMAEnvelope,
			inputs: {
				Period: 50,
				Field: "field",
				"Shift Type": ["percent", "points"],
				Shift: 5,
				"Moving Average Type": "ma",
				"Channel Fill": true
			},
			outputs: {
				"MA Env Top": "auto",
				"MA Env Median": "auto",
				"MA Env Bottom": "auto"
			},
			attributes: {
				Shift: { min: 0.1, step: 0.1 }
			}
		},
		"MA Dev": {
			name: "Moving Average Deviation",
			calculateFN: CIQ.Studies.calculateMADev,
			seriesFN: CIQ.Studies.displayHistogramWithSeries,
			inputs: {
				Period: 12,
				Field: "field",
				"Moving Average Type": "ma",
				"Points Or Percent": ["Points", "Percent"]
			},
			outputs: { "Increasing Bar": "#00DD00", "Decreasing Bar": "#FF0000" }
		},
		Guppy: {
			name: "Guppy Multiple Moving Average",
			overlay: true,
			calculateFN: CIQ.Studies.calculateGMMA,
			inputs: {},
			outputs: { "Short Term": "#ea1d2c", "Long Term": "#00afed" }
		},
		"High Low": {
			name: "High Low Bands",
			overlay: true,
			seriesFN: CIQ.Studies.displayChannel,
			calculateFN: function (stx, sd) {
				sd.inputs["Moving Average Type"] = "triangular";
				CIQ.Studies.calculateMAEnvelope(stx, sd);
			},
			inputs: {
				Period: 10,
				Field: "field",
				"Shift Percentage": 5,
				"Channel Fill": true
			},
			outputs: {
				"High Low Top": "auto",
				"High Low Median": "auto",
				"High Low Bottom": "auto"
			},
			attributes: {
				"Shift Percentage": { min: 0.1, step: 0.1 }
			}
		}
	});
}

};


let __js_advanced_studies_parabolicSAR_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"parabolicSAR feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculatePSAR = function (stx, sd) {
		var quotes = sd.chart.scrubbed;

		var af = 0;
		var ep = null;
		var lasttrend = false;
		var SAR = 0;
		var step = parseFloat(sd.inputs["Minimum AF"]);
		var maxStep = parseFloat(sd.inputs["Maximum AF"]);

		function doReset() {
			af = 0;
			ep = null;
			lasttrend = !lasttrend;
		}
		if (sd.startFrom > 0) {
			SAR = quotes[sd.startFrom - 1]["Result " + sd.name];
			var state = quotes[sd.startFrom - 1]["_state " + sd.name];
			if (state && state.length == 3) {
				af = state[0];
				ep = state[1];
				lasttrend = state[2];
			}
		}
		for (var i = sd.startFrom - 1; i < quotes.length - 1; i++) {
			if (i < 0) continue;
			if (quotes[i].futureTick) break;
			var priorSAR = SAR;
			if (lasttrend) {
				if (!ep || ep < quotes[i].High) {
					ep = quotes[i].High;
					af = Math.min(af + step, maxStep);
				}
				SAR = priorSAR + af * (ep - priorSAR);
				var lowestPrior2Lows = Math.min(
					quotes[Math.max(1, i) - 1].Low,
					quotes[i].Low
				);
				if (SAR > quotes[i + 1].Low) {
					SAR = ep;
					doReset();
				} else if (SAR > lowestPrior2Lows) {
					SAR = lowestPrior2Lows;
				}
			} else {
				if (!ep || ep > quotes[i].Low) {
					ep = quotes[i].Low;
					af = Math.min(af + step, maxStep);
				}
				SAR = priorSAR + af * (ep - priorSAR);
				var highestPrior2Highs = Math.max(
					quotes[Math.max(1, i) - 1].High,
					quotes[i].High
				);
				if (SAR < quotes[i + 1].High) {
					SAR = ep;
					doReset();
				} else if (SAR < highestPrior2Highs) {
					SAR = highestPrior2Highs;
				}
			}
			quotes[i + 1]["_state " + sd.name] = [af, ep, lasttrend];
			if (!isNaN(quotes[i].High) || !isNaN(quotes[i].Low)) {
				quotes[i + 1]["Result " + sd.name] = SAR;
			}
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		PSAR: {
			name: "Parabolic SAR",
			overlay: true,
			calculateFN: CIQ.Studies.calculatePSAR,
			seriesFN: CIQ.Studies.displayPSAR2,
			inputs: { "Minimum AF": 0.02, "Maximum AF": 0.2 }
		}
	});
}

};


let __js_advanced_studies_pivotPoints_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"pivotPoints feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculatePivotPoints = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var period = "day",
			interval = stx.layout.interval,
			timeUnit = stx.layout.timeUnit;
		if (interval == "day") period = "month";
		else if (CIQ.ChartEngine.isDailyInterval(interval)) period = "year";
		else if (
			interval == "second" ||
			interval == "millisecond" ||
			timeUnit == "second" ||
			timeUnit == "millisecond"
		)
			period = "15min";
		else {
			var intvl = stx.layout.periodicity;
			if (interval != "minute") {
				intvl *= interval;
			}
			if (intvl >= 30) period = "week";
		}

		var marketOffset = null;
		var offset = 7 - CIQ.getFromNS(stx.chart, "market.beginningDayOfWeek", 0); // used to determine end of week

		var pointers = {
			pivotPoint: NaN,
			high: 0,
			low: 0,
			prevHigh: 0,
			prevLow: 0,
			hlSpread: 0
		};
		if (sd.startFrom > 1 && quotes[sd.startFrom - 1]["_pointers " + sd.name]) {
			pointers = CIQ.clone(quotes[sd.startFrom - 1]["_pointers " + sd.name]);
		}
		function resetPivots() {
			pointers.pivotPoint =
				(pointers.high + pointers.low + quotes[i - 1].Close) / 3;
			pointers.prevHigh = pointers.high;
			pointers.prevLow = pointers.low;
			pointers.hlSpread = pointers.high - pointers.low;
			pointers.high = pointers.low = 0;
		}
		for (var i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			if (!quotes[i - 1]) continue;
			pointers.high = Math.max(pointers.high, quotes[i - 1].High);
			pointers.low = Math.min(
				pointers.low > 0 ? pointers.low : quotes[i - 1].Low,
				quotes[i - 1].Low
			);
			if (sd.inputs.Continuous) resetPivots();
			else if (
				period == "year" &&
				quotes[i].DT.getYear() != quotes[i - 1].DT.getYear()
			) {
				//new yearly period
				resetPivots();
			} else if (
				period == "month" &&
				quotes[i].DT.getMonth() != quotes[i - 1].DT.getMonth()
			) {
				//new monthly period
				resetPivots();
			} else if (
				period == "week" &&
				(quotes[i].DT.getDay() + offset) % 7 <
					(quotes[i - 1].DT.getDay() + offset) % 7
			) {
				//new weekly period
				resetPivots();
			} else if (period == "day") {
				if (marketOffset === null) {
					//possible new daily period
					marketOffset = CIQ.Studies.getMarketOffset({
						stx,
						localQuoteDate: quotes[i].DT,
						shiftToDateBoundary: true
					});
				}
				var newDate = new Date(
					new Date(+quotes[i].DT).setMilliseconds(
						quotes[i].DT.getMilliseconds() + marketOffset
					)
				);
				var oldDate = new Date(
					new Date(+quotes[i - 1].DT).setMilliseconds(
						quotes[i - 1].DT.getMilliseconds() + marketOffset
					)
				);
				if (
					oldDate.getDate() !== newDate.getDate() &&
					oldDate.getDay() !== 0 &&
					stx.chart.market.isMarketDate(newDate)
				) {
					//new daily period
					marketOffset = null;
					resetPivots();
				}
			} else if (
				period == "15min" &&
				(quotes[i].DT.getHours() != quotes[i - 1].DT.getHours() ||
					Math.floor(quotes[i].DT.getMinutes() / 15) !=
						Math.floor(quotes[i - 1].DT.getMinutes() / 15))
			) {
				//new 15 minute period
				resetPivots();
			}
			quotes[i]["Pivot " + sd.name] = pointers.pivotPoint;
			if (sd.inputs.Type.toLowerCase() == "fibonacci") {
				quotes[i]["Resistance 1 " + sd.name] =
					pointers.pivotPoint + 0.382 * pointers.hlSpread;
				quotes[i]["Resistance 2 " + sd.name] =
					pointers.pivotPoint + 0.618 * pointers.hlSpread;
				quotes[i]["Resistance 3 " + sd.name] =
					pointers.pivotPoint + pointers.hlSpread;
				quotes[i]["Support 1 " + sd.name] =
					pointers.pivotPoint - 0.382 * pointers.hlSpread;
				quotes[i]["Support 2 " + sd.name] =
					pointers.pivotPoint - 0.618 * pointers.hlSpread;
				quotes[i]["Support 3 " + sd.name] =
					pointers.pivotPoint - pointers.hlSpread;
			} else {
				quotes[i]["Resistance 1 " + sd.name] =
					2 * pointers.pivotPoint - pointers.prevLow;
				quotes[i]["Resistance 2 " + sd.name] =
					pointers.pivotPoint + pointers.hlSpread;
				quotes[i]["Resistance 3 " + sd.name] =
					pointers.prevHigh + 2 * (pointers.pivotPoint - pointers.prevLow);
				quotes[i]["Support 1 " + sd.name] =
					2 * pointers.pivotPoint - pointers.prevHigh;
				quotes[i]["Support 2 " + sd.name] =
					pointers.pivotPoint - pointers.hlSpread;
				quotes[i]["Support 3 " + sd.name] =
					pointers.prevLow - 2 * (pointers.prevHigh - pointers.pivotPoint);
			}
			quotes[i]["_pointers " + sd.name] = CIQ.clone(pointers);
		}
	};

	CIQ.Studies.displayPivotPoints = function (stx, sd, quotes) {
		sd.noSlopes = !sd.inputs.Continuous;
		CIQ.Studies.displaySeriesAsLine(stx, sd, quotes);
		if (sd.inputs.Shading) {
			var panel = stx.panels[sd.panel];
			var params = {
				noSlopes: sd.noSlopes,
				opacity: sd.parameters.opacity ? sd.parameters.opacity : 0.2,
				skipTransform: panel.name != sd.chart.name,
				yAxis: sd.getYAxis(stx)
			};
			if (!sd.highlight && stx.highlightedDraggable) params.opacity *= 0.3;
			CIQ.prepareChannelFill(
				stx,
				CIQ.extend(
					{
						panelName: sd.panel,
						topBand: "Resistance 3 " + sd.name,
						bottomBand: "Resistance 2 " + sd.name,
						color: CIQ.Studies.determineColor(sd.outputs["Resistance 3"])
					},
					params
				)
			);
			CIQ.prepareChannelFill(
				stx,
				CIQ.extend(
					{
						panelName: sd.panel,
						topBand: "Resistance 2 " + sd.name,
						bottomBand: "Resistance 1 " + sd.name,
						color: CIQ.Studies.determineColor(sd.outputs["Resistance 2"])
					},
					params
				)
			);
			CIQ.prepareChannelFill(
				stx,
				CIQ.extend(
					{
						panelName: sd.panel,
						topBand: "Resistance 1 " + sd.name,
						bottomBand: "Pivot " + sd.name,
						color: CIQ.Studies.determineColor(sd.outputs["Resistance 1"])
					},
					params
				)
			);
			CIQ.prepareChannelFill(
				stx,
				CIQ.extend(
					{
						panelName: sd.panel,
						topBand: "Support 1 " + sd.name,
						bottomBand: "Pivot " + sd.name,
						color: CIQ.Studies.determineColor(sd.outputs["Support 1"])
					},
					params
				)
			);
			CIQ.prepareChannelFill(
				stx,
				CIQ.extend(
					{
						panelName: sd.panel,
						topBand: "Support 2 " + sd.name,
						bottomBand: "Support 1 " + sd.name,
						color: CIQ.Studies.determineColor(sd.outputs["Support 2"])
					},
					params
				)
			);
			CIQ.prepareChannelFill(
				stx,
				CIQ.extend(
					{
						panelName: sd.panel,
						topBand: "Support 3 " + sd.name,
						bottomBand: "Support 2 " + sd.name,
						color: CIQ.Studies.determineColor(sd.outputs["Support 3"])
					},
					params
				)
			);
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Pivot Points": {
			name: "Pivot Points",
			overlay: true,
			seriesFN: CIQ.Studies.displayPivotPoints,
			calculateFN: CIQ.Studies.calculatePivotPoints,
			inputs: {
				Type: ["standard", "fibonacci"],
				Continuous: false,
				Shading: false
			},
			outputs: {
				Pivot: "auto",
				"Resistance 1": "#b82c0b",
				"Support 1": "#699158",
				"Resistance 2": "#e36460",
				"Support 2": "#b3d987",
				"Resistance 3": "#ffd0cf",
				"Support 3": "#d3e8ae"
			},
			parameters: {
				init: { opacity: 0.2 }
			}
		}
	});
}

};


let __js_advanced_studies_prettyGoodOscillator_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"prettyGoodOscillator feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculatePrettyGoodOscillator = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}

		CIQ.Studies.MA("exponential", sd.days, "trueRange", 0, "_EMA", stx, sd);
		CIQ.Studies.MA("simple", sd.days, "Close", 0, "_SMA", stx, sd);

		for (var i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			if (!quotes[i]["_SMA " + sd.name] || !quotes[i]["_EMA " + sd.name])
				continue;
			quotes[i]["Result " + sd.name] =
				(quotes[i].Close - quotes[i]["_SMA " + sd.name]) /
				quotes[i]["_EMA " + sd.name];
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Pretty Good": {
			name: "Pretty Good Oscillator",
			calculateFN: CIQ.Studies.calculatePrettyGoodOscillator,
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 3,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: -3,
					studyOverSoldColor: "auto"
				}
			}
		}
	});
}

};


let __js_advanced_studies_priceMomentumOscillator_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"priceMomentumOscillator feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculatePMO = function (stx, sd) {
		var periods = {
			Smooth: Number(sd.inputs["Smoothing Period"]) - 1,
			Double: Number(sd.inputs["Double Smoothing Period"]) - 1,
			Signal: Number(sd.inputs["Signal Period"])
		};
		var quotes = sd.chart.scrubbed;
		if (quotes.length < periods.Smooth + periods.Double) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		var i;
		for (i = sd.startFrom; i < quotes.length; i++) {
			if (!quotes[i]) continue;
			if (!quotes[i - 1]) continue;
			var denom = quotes[i - 1][field];
			if (denom) {
				quotes[i]["_ROCx10 " + sd.name] = 1000 * (quotes[i][field] / denom - 1);
			}
		}
		CIQ.Studies.MA(
			"exponential",
			periods.Smooth,
			"_ROCx10 " + sd.name,
			0,
			"_EMAx10",
			stx,
			sd
		);
		CIQ.Studies.MA(
			"exponential",
			periods.Double,
			"_EMAx10 " + sd.name,
			0,
			"PMO",
			stx,
			sd
		);
		CIQ.Studies.MA(
			"exponential",
			periods.Signal,
			"PMO " + sd.name,
			0,
			"PMOSignal",
			stx,
			sd
		);
		sd.zoneOutput = "PMO";
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		PMO: {
			name: "Price Momentum Oscillator",
			calculateFN: CIQ.Studies.calculatePMO,
			inputs: {
				Field: "field",
				"Smoothing Period": 35,
				"Double Smoothing Period": 20,
				"Signal Period": 10
			},
			outputs: { PMO: "auto", PMOSignal: "#FF0000" },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 2.5,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: -2.5,
					studyOverSoldColor: "auto"
				}
			},
			attributes: {
				studyOverBoughtValue: { min: 0, step: "0.05" },
				studyOverSoldValue: { max: 0, step: "0.05" }
			}
		}
	});
}

};


let __js_advanced_studies_priceVolumeOscillator_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"priceVolumeOscillator feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculatePriceOscillator = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var short = Number(sd.inputs["Short Cycle"]);
		var long = Number(sd.inputs["Long Cycle"]);
		if (quotes.length < Math.max(short, long) + 1) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		var maType = sd.inputs["Moving Average Type"];
		if (!maType) maType = "simple";
		if (!field || field == "field") field = "Close";
		if (sd.parameters.isVolume) {
			field = "Volume";
			maType = "exponential";
		}
		var pts = sd.inputs["Points Or Percent"];
		if (!pts) pts = "Percent";

		CIQ.Studies.MA(maType, short, field, 0, "_Short MA", stx, sd);
		CIQ.Studies.MA(maType, long, field, 0, "_Long MA", stx, sd);

		for (var i = Math.max(long, sd.startFrom); i < quotes.length; i++) {
			var quote = quotes[i];
			if (!quote) continue;
			var qShMA = quote["_Short MA " + sd.name],
				qLgMA = quote["_Long MA " + sd.name];
			if ((qShMA || qShMA === 0) && (qLgMA || qLgMA === 0)) {
				if (pts == "Points") quote["Result " + sd.name] = qShMA - qLgMA;
				else quote["Result " + sd.name] = 100 * (qShMA / qLgMA - 1);
				if (sd.outputs["Increasing Bar"]) {
					quote[sd.name + "_hist"] = quote["Result " + sd.name];
					sd.outputMap = {};
					sd.outputMap[sd.name + "_hist"] = "";
				}
			}
		}
	};

	CIQ.Studies.displayRAVI = function (stx, sd, quotes) {
		var panel = stx.panels[sd.panel],
			context = sd.getContext(stx);
		var yAxis = sd.getYAxis(stx);

		var y = stx.pixelFromPrice(0, panel, yAxis);

		var myWidth = stx.layout.candleWidth - 2;
		if (myWidth < 2) myWidth = 1;

		var upColor = CIQ.Studies.determineColor(sd.outputs["Increasing Bar"]);
		var downColor = CIQ.Studies.determineColor(sd.outputs["Decreasing Bar"]);
		stx.startClip(sd.panel);
		stx.canvasColor("stx_histogram");
		if (!sd.underlay) context.globalAlpha = 1;
		if (!sd.highlight && stx.highlightedDraggable) context.globalAlpha *= 0.3;
		for (var i = 0; i < quotes.length; i++) {
			var quote = quotes[i],
				quote_1 = quotes[i - 1];
			if (!quote_1)
				quote_1 = stx.getPreviousBar(stx.chart, sd.name + "_hist", i);
			if (!quote) continue;
			var overBought = 0,
				overSold = 0;
			if (sd.parameters && sd.parameters.studyOverZonesEnabled) {
				overBought = parseFloat(sd.parameters.studyOverBoughtValue);
				overSold = parseFloat(sd.parameters.studyOverSoldValue);
			}
			if (!quote_1) context.fillStyle = "#CCCCCC";
			else if (
				quote[sd.name + "_hist"] > overBought &&
				quote_1[sd.name + "_hist"] < quote[sd.name + "_hist"]
			)
				context.fillStyle = upColor;
			else if (
				quote[sd.name + "_hist"] < overSold &&
				quote_1[sd.name + "_hist"] > quote[sd.name + "_hist"]
			)
				context.fillStyle = downColor;
			else context.fillStyle = "#CCCCCC";
			if (quote.candleWidth)
				myWidth = Math.floor(Math.max(1, quote.candleWidth - 2));
			context.fillRect(
				Math.floor(stx.pixelFromBar(i, panel.chart) - myWidth / 2),
				Math.floor(y),
				Math.floor(myWidth),
				Math.floor(
					stx.pixelFromPrice(quote[sd.name + "_hist"], panel, yAxis) - y
				)
			);
		}
		stx.endClip();
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Price Osc": {
			name: "Price Oscillator",
			calculateFN: CIQ.Studies.calculatePriceOscillator,
			inputs: {
				Field: "field",
				"Short Cycle": 12,
				"Long Cycle": 26,
				"Moving Average Type": "ema",
				"Points Or Percent": ["Points", "Percent"]
			}
		},
		"Vol Osc": {
			name: "Volume Oscillator",
			calculateFN: CIQ.Studies.calculatePriceOscillator,
			inputs: {
				"Short Cycle": 12,
				"Long Cycle": 26,
				"Points Or Percent": ["Points", "Percent"]
			},
			parameters: {
				init: { isVolume: true }
			}
		},
		RAVI: {
			name: "RAVI",
			seriesFN: CIQ.Studies.displayRAVI,
			calculateFN: CIQ.Studies.calculatePriceOscillator,
			inputs: {
				Field: "field",
				"Moving Average Type": "vdma",
				"Short Cycle": 7,
				"Long Cycle": 65
			},
			outputs: { "Increasing Bar": "#00DD00", "Decreasing Bar": "#FF0000" },
			centerline: 0,
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 3,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: -3,
					studyOverSoldColor: "auto"
				}
			},
			attributes: {
				studyOverBoughtValue: { min: 0, step: "0.1" },
				studyOverSoldValue: { max: 0, step: "0.1" }
			}
		}
	});
}

};


let __js_advanced_studies_primeNumber_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"primeNumber feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculatePrimeNumber = function (stx, sd) {
		var primes = [];
		function isPrime(x) {
			if (x <= 0) return false;
			else if (x != Math.floor(x)) return false;
			//assume x is an int
			else if (primes[x] === true || primes[x] === false) return primes[x];
			var q = parseInt(Math.sqrt(x), 10);
			for (var i = 2; i <= q; i++) {
				if (x % i === 0) {
					primes[x] = false;
					return false;
				}
			}
			primes[x] = true;
			return true;
		}
		var quotes = sd.chart.scrubbed;
		for (var i = sd.startFrom; i < quotes.length; i++) {
			var quote = quotes[i];
			if (!quote) continue;

			var high = quote.High;
			if (!isNaN(high)) {
				for (var h = 0; high > 0 && high <= 10; h++) high *= 10;
				if (isPrime(high)) high += 2;
				high = Math.ceil(high);
				if (high % 2 === 0) high++;
				while (!isPrime(high)) high += 2;
				high /= Math.pow(10, h);
			}

			var low = quote.Low;
			if (!isNaN(low)) {
				for (var l = 0; low > 0 && low <= 10; l++) low *= 10;
				if (isPrime(low)) low -= 2;
				low = Math.floor(low);
				if (low % 2 === 0) low--;
				if (low > 0) {
					while (!isPrime(low)) low -= 2;
					low /= Math.pow(10, l);
				}
			}

			if (sd.type == "Prime Number Bands") {
				if (!isNaN(high)) quote["Prime Bands Top " + sd.name] = high;
				if (!isNaN(low))
					quote["Prime Bands Bottom " + sd.name] = Math.max(0, low);
			} else {
				var value = 0;
				var tolerance =
					(sd.inputs["Tolerance Percentage"] * (high - low)) / 100;
				var skew = high + low - 2 * quote.Close;
				if (skew < tolerance) value = 1;
				else if (skew > tolerance) value = -1;
				if (value) quote["Result " + sd.name] = value;
			}
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Prime Number": {
			name: "Prime Number Oscillator",
			range: "-1 to 1",
			calculateFN: CIQ.Studies.calculatePrimeNumber,
			centerline: 0,
			inputs: { "Tolerance Percentage": 5 },
			attributes: {
				"Tolerance Percentage": { min: 0.1, step: 0.1 }
			}
		},
		"Prime Number Bands": {
			name: "Prime Number Bands",
			overlay: true,
			calculateFN: CIQ.Studies.calculatePrimeNumber,
			seriesFN: CIQ.Studies.displayChannel,
			inputs: { "Channel Fill": true },
			outputs: {
				"Prime Bands Top": "auto",
				"Prime Bands Bottom": "auto",
				"Prime Bands Channel": "auto"
			}
		}
	});
}

};


let __js_advanced_studies_pring_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("pring feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateKST = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		var roc = {},
			smp = {};
		roc[1] = Number(sd.inputs["Lightest Rate of Change Period"]);
		roc[2] = Number(sd.inputs["Light Rate of Change Period"]);
		roc[3] = Number(sd.inputs["Heavy Rate of Change Period"]);
		roc[4] = Number(sd.inputs["Heaviest Rate of Change Period"]);
		smp[1] = Number(sd.inputs["Lightest SMA Period"]);
		smp[2] = Number(sd.inputs["Light SMA Period"]);
		smp[3] = Number(sd.inputs["Heavy SMA Period"]);
		smp[4] = Number(sd.inputs["Heaviest SMA Period"]);
		var sp = Number(sd.inputs["Signal Period"]);
		var i, j;
		for (i = sd.startFrom; i < quotes.length; i++) {
			if (!quotes[i]) continue;
			for (j = 1; j <= 4; j++) {
				if (i >= roc[j] && quotes[i - roc[j]] && quotes[i - roc[j]][field])
					quotes[i]["_ROC" + j + " " + sd.name] =
						100 * (quotes[i][field] / quotes[i - roc[j]][field] - 1);
			}
		}
		for (j = 1; j <= 4; j++) {
			CIQ.Studies.MA(
				"simple",
				smp[j],
				"_ROC" + j + " " + sd.name,
				0,
				"_SMA" + j,
				stx,
				sd
			);
		}
		for (i = sd.startFrom; i < quotes.length; i++) {
			quotes[i]["KST " + sd.name] = null;
			for (j = 1; j <= 4; j++) {
				var val = quotes[i]["_SMA" + j + " " + sd.name];
				if (val || val === 0) quotes[i]["KST " + sd.name] += j * val;
			}
		}
		CIQ.Studies.MA("simple", sp, "KST " + sd.name, 0, "KSTSignal", stx, sd);
	};

	CIQ.Studies.calculateSpecialK = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		var span = sd.inputs.Interval;
		if (!span) span = "daily";
		var roc = {
			daily: [10, 15, 20, 30, 50, 65, 75, 100, 195, 265, 390, 530],
			weekly: [4, 5, 6, 8, 10, 13, 15, 20, 39, 52, 78, 104]
		};
		var map = {
			daily: [10, 10, 10, 15, 50, 65, 75, 100, 130, 130, 130, 195],
			weekly: [4, 5, 6, 8, 10, 13, 15, 20, 26, 26, 26, 39]
		};
		var i, j;
		for (i = sd.startFrom; i < quotes.length; i++) {
			if (!quotes[i]) continue;
			for (j = 0; j < roc[span].length; j++) {
				if (
					i >= roc[span][j] &&
					quotes[i - roc[span][j]] &&
					quotes[i - roc[span][j]][field]
				)
					quotes[i]["_ROC" + j + " " + sd.name] =
						100 * (quotes[i][field] / quotes[i - roc[span][j]][field] - 1);
			}
		}
		for (j = 0; j < map[span].length; j++) {
			CIQ.Studies.MA(
				span == "daily" ? "simple" : "exponential",
				map[span][j],
				"_ROC" + j + " " + sd.name,
				0,
				"_MA" + j,
				stx,
				sd
			);
		}
		for (i = sd.startFrom; i < quotes.length; i++) {
			quotes[i]["Result " + sd.name] = null;
			for (j = 0; j < map[span].length; j++) {
				var val = quotes[i]["_MA" + j + " " + sd.name];
				if (val || val === 0)
					quotes[i]["Result " + sd.name] += ((j % 4) + 1) * val;
			}
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Pring KST": {
			name: "Pring's Know Sure Thing",
			calculateFN: CIQ.Studies.calculateKST,
			inputs: {
				Field: "field",
				"Lightest Rate of Change Period": 10,
				"Lightest SMA Period": 10,
				"Light Rate of Change Period": 15,
				"Light SMA Period": 10,
				"Heavy Rate of Change Period": 20,
				"Heavy SMA Period": 10,
				"Heaviest Rate of Change Period": 30,
				"Heaviest SMA Period": 15,
				"Signal Period": 9
			},
			outputs: { KST: "#00DD00", KSTSignal: "#FF0000" }
		},
		"Pring Sp-K": {
			name: "Pring's Special K",
			calculateFN: CIQ.Studies.calculateSpecialK,
			inputs: { Field: "field", Interval: ["daily", "weekly"] }
		}
	});
}

};


let __js_advanced_studies_projectedVolume_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;
var timezoneJS =
	typeof _timezoneJS !== "undefined" ? _timezoneJS : _exports.timezoneJS;

if (!CIQ.Studies) {
	console.error(
		"projectedVolume feature requires first activating studies feature."
	);
} else if (!CIQ.Studies.studyLibrary.PVAT) {
	/**
	 * Initializes the project volume studies PVAT and PAV.
	 *
	 * Specifically, sets the anchor time to the default anchor time if it's left blank.
	 *
	 * @param {CIQ.ChartEngine} stx	The chart object.
	 * @param {string} type Study type.
	 * @param {object} inputs Study inputs.
	 * @param {object} outputs Study outputs.
	 * @param {object} parameters Study parameters.
	 * @param {string} panel ID of the study's panel element.
	 * @return {studyDescriptor} Study descriptor object.
	 *
	 * @memberof CIQ.Studies
	 * @private
	 * @since 8.1.0
	 */
	CIQ.Studies.initProjectedVolume = function (
		stx,
		type,
		inputs,
		outputs,
		parameters,
		panel
	) {
		const { market } = stx.chart;
		let anchorTime = "00:00";
		if (market) anchorTime = market.getNormalOpen();
		if (anchorTime.match(/^[\d]{2}:[\d]{2}$/)) anchorTime += ":00";

		if (!inputs["Anchor Time"] || !inputs["Anchor Time"].length) {
			inputs["Anchor Time"] = anchorTime;
		}

		const sd = CIQ.Studies.initializeFN(
			stx,
			type,
			inputs,
			outputs,
			parameters,
			panel
		);

		// market will not be fully loaded yet if currentlyImporting
		if (!stx.currentlyImporting) sd.defaultAnchorTime = anchorTime;
		return sd;
	};

	/**
	 * Determines whether a projected volume lookback is valid for the currently selected
	 * periodicity.
	 *
	 * Called by {@link CIQ.Studies.calculateProjectedVolume}.
	 *
	 * Due to the data requirements of the Projected Volume at Time (PVAT) and Projected
	 * Aggregate Volume (PVA) studies, it is necessary to limit the maximum lookback.
	 *
	 * Setting the lookback too high results in the chart attempting to load more data than is
	 * allowed by {@link CIQ.ChartEngine#maxDataSetSize}, which breaks the study. If you have set
	 * `maxDataSetSize` higher than the default, you may wish to replace this validation function
	 * with one that allows a greater lookback.
	 *
	 * @param {CIQ.ChartEngine} stx A reference to the chart object.
	 * @param {CIQ.Studies.StudyDescriptor} sd Specifies the study (PVAT or PAV) for which the lookback is
	 * 		validated.
	 * @return {boolean} True if the the lookback is valid; otherwise, false.
	 *
	 * @memberOf CIQ.Studies
	 * @since 8.0.0
	 */
	CIQ.Studies.validateProjectedVolumeLookback = function (stx, sd) {
		const { interval, periodicity } = stx.layout;
		const { "Lookback Days": lookback } = sd.inputs;
		return lookback / (interval * periodicity) <= 10;
	};

	/**
	 * Calculates the projections and aggregations for the Projected Volume at Time (PVAT) and
	 * Projected Aggregate Volume (PAV) studies. Due to the data requirements of the studies,
	 * this function may attempt to use the quote feed to fetch additional historical data. If no
	 * quote feed is available and not enough data has been loaded, the study displays an error.
	 *
	 * The studies support intraday periodicities of 1 minute and higher. Aggregations other than
	 * Heiken-Ashi are not supported.
	 *
	 * Only days when the market is open are included in the volume average. If the lookback
	 * includes days with restricted market hours, the non-open periods are ignored, producing an
	 * average with fewer data points.
	 *
	 * @param {CIQ.ChartEngine} stx A reference to the chart object.
	 * @param {CIQ.Studies.StudyDescriptor} sd Specifies the study (PVAT or PAV) for which the projected
	 * 		volume is calculated.
	 *
	 * @memberOf CIQ.Studies
	 * @since 8.0.0
	 */
	CIQ.Studies.calculateProjectedVolume = function (stx, sd) {
		const { interval, timeUnit, aggregationType } = stx.layout;
		const { symbol, scroll, scrubbed: quotes, market } = stx.chart;
		const aggregateVolume = sd.type === "PAV";
		const studyName = sd.study ? sd.study.name : sd.type;

		if (CIQ.ChartEngine.isDailyInterval(interval)) {
			sd.error = `${studyName} is Intraday Only`;
		} else if (timeUnit === "tick") {
			sd.error = `Tick mode not supported for ${studyName}`;
		} else if (timeUnit !== "minute") {
			sd.error = `Sub-minute periodicities not supported for ${studyName}`;
		} else if (
			!aggregationType ||
			!["ohlc", "heikinashi"].includes(aggregationType)
		) {
			sd.error = `Aggregation type not supported for ${studyName}`;
		} else if (!CIQ.Studies.validateProjectedVolumeLookback(stx, sd)) {
			sd.error = `Selected lookback/periodicity combo not supported for ${studyName}`;
		}

		if (sd.error) return;

		if (sd.inputs["Anchor Selector"]) CIQ.Studies.initAnchorHandle(stx, sd);
		else CIQ.Studies.removeAnchorHandle(stx, sd);

		let defaultAnchor = market ? market.getNormalOpen() : "00:00";
		if (defaultAnchor.match(/^[\d]{2}:[\d]{2}$/)) defaultAnchor += ":00";
		if (!stx.currentlyImporting) {
			if (!sd.defaultAnchorTime) {
				sd.defaultAnchorTime = defaultAnchor;
			} else if (defaultAnchor !== sd.defaultAnchorTime) {
				sd.defaultAnchorTime = defaultAnchor;
				sd.inputs["Anchor Time"] = defaultAnchor;
				CIQ.Studies.repositionAnchor(stx, sd);
				return;
			}
		}

		const { "Lookback Days": lookback, "Anchor Time": anchorTime } = sd.inputs;
		const [anchorHour, anchorMinute, anchorSecond = 0] = anchorTime.split(":");
		const isForex = CIQ.getFn("Market.Symbology.isForexSymbol")(symbol);

		// Make sure to calculate far enough back for dependent studies with a period, eg moving average
		const dependents = sd.getDependents(stx);
		let additionalBarsRequired = 0;
		let dependentsOutputMap = [];

		dependents.forEach(({ inputs, outputMap }) => {
			if (inputs.Period) {
				additionalBarsRequired = Math.max(
					parseInt(inputs.Period),
					additionalBarsRequired
				);

				dependentsOutputMap.push(...Object.keys(outputMap));
			}
		});

		sd.dependentsOutputMap = dependentsOutputMap;

		// Projection will frequently need more data than would normally be loaded into dataset. For this
		// reason we start at the beginning of dataSegment. We calculate
		// the projection based on the ticks forward of the left-hand edge of the chart
		let beginProjectionFrom;
		const todaysOpen = openingTick(quotes.length - 1, true); // starting at beginning of day simplifies logic
		const lhsTick = Math.ceil(quotes.length - 1 - scroll); // analogous to dataSegment[0]
		let earliestTick = openingTick(lhsTick - additionalBarsRequired);
		if (
			isForex &&
			quotes[earliestTick] &&
			CIQ.dateToStr(quotes[earliestTick].DT, "HH:mm") !== defaultAnchor
		) {
			earliestTick = openingTick(earliestTick - 1); // necessary due to midnight-bisected market session
		}

		if (
			!isForex && // forex aggregations start at 5pm ET on the previous day so this optimization doesn't work
			sd.startFrom > earliestTick &&
			quotes[earliestTick] &&
			quotes[earliestTick]["V " + sd.name] !== undefined &&
			dependentsOutputMap.every(
				(key) => ![undefined, null].includes(quotes[earliestTick][key])
			) &&
			todaysOpen !== false
		) {
			beginProjectionFrom = todaysOpen; // aggregation performance
		} else {
			beginProjectionFrom = earliestTick;
		}

		// Projection starting point to provide entire projection based on the screen width
		const oldestRequired = wind(dateFromTick(earliestTick), lookback);
		oldestRequired.setHours(0, 0, 0); // in case of dissimilar start times make sure full day is covered
		// Oldest opening market time CURRENTLY available in the dataSet
		const oldestOpen = openingTick(0, true);
		// Earliest possible start date for the projection to work
		const oldestPossible =
			(oldestOpen || oldestOpen === 0) && // ensured to be either a tick or false
			tickFromDate(wind(quotes[oldestOpen].DT, lookback, true));

		if (quotes[0].DT > oldestRequired) {
			if (stx.quoteDriver) {
				if (sd.chart.endPoints.begin > oldestRequired)
					stx.quoteDriver.extendHistoricalData({ from: oldestRequired });
				if (oldestPossible > 0) beginProjectionFrom = oldestPossible;
				else return;
			} else {
				return (sd.error = `Not enough data to calculate ${studyName}`);
			}
		}

		if (beginProjectionFrom < 0 || beginProjectionFrom > quotes.length - 1)
			return;

		const appendingOnly =
			quotes.length - sd.startFrom === 1 &&
			sd.cachedFutureTicks &&
			sd.cachedLastProjection &&
			+sd.cachedLastProjection.DT === +quotes[quotes.length - 1].DT &&
			quotes[beginProjectionFrom]["PV " + sd.name];

		if (appendingOnly) {
			quotes[quotes.length - 1]["PV " + sd.name] =
				sd.cachedLastProjection.projectedValue;
			sd.appendFutureTicks(stx, sd.cachedFutureTicks);
			beginProjectionFrom = sd.startFrom;
		} else {
			sd.cachedFutureTicks = null;
			sd.cachedLastProjection = null;

			// Given a standard ohlc or heikin ashi chart, the quotes array will be organized into time slices
			// where trading occured, eg 9:30am-10:00am for a 30 minute periodicity. The objective of the following
			// algorithm is to generate a moving average for the volume of each time slice, that is each quote
			// should receive the calculated average volume of the last X number of days *for that time slice* where
			// X is the a lookback variable set by the user.

			// The core of the algorithm works by assigning pointers to the start of the current day AND the previous
			// "lookback" days and then simultaneously walking all pointers along the quotes array, calculating the
			// average for each time slice as we go. If we reach the end of the quotes array and there are still
			// remaining market hours we continue walking the "lookback" pointers appending future ticks as we go.
			// This process is repeated for each day, moving backwards along the quotes array until we've calculated
			// the projection for every day after the `beginProjectionFrom` index.

			// There is a big gotcha to this approach: not all trading days have the same hours. When that is the case
			// we do the best we can and use as many "lookback" time slices as we can. In some cases this means calculating
			// the average based off of fewer time slices. For example, if we are looking at the 8:00pm-8:30pm time
			// slice for a FOREX instrument, there will be no data from any Fridays in the lookback because FOREX
			// trading stops at 4pm on Friday. Saturday will be skipped entirely and not included in the lookback
			// because it is not a market day.

			// Note that the algorithm uses two pointer arrays: `startingIndices` and `workingIndices`. `startingIndices`
			// records the first tick of the day for each day in the lookback. `workingIndices` records the indices
			// as we walk through the time slices of the days. They are separate so that when we calculate the projection
			// for the previous day, we can simply shift `startingIndices` back a day and use the last index as the new
			// pointer for the day to fill.

			// We will immediately pop `todaysOpen` off `startingIndices`. We add it here to start to simplify the loop,
			// so that for each day we can pop the last index and the remaining indices will be the for the lookback days.
			let startingIndices = [todaysOpen];
			let futureTicks = [];

			// grab the start index of the previous lookback days
			for (let i = 0; i < lookback; i++) {
				// First item points to first quote of day. Use previous so `openingTick` will get the correct day.
				let previous = openingTick(startingIndices[0] - 1);
				startingIndices.unshift(previous); // store with "older" days first so we can pop the newest
			}

			// Whether on the first or subsequent iterations of this loop, we can expect `startingIndices` to contain
			// lookback + 1 elements, the last item being the day being projected (which becomes the fill index). Due to
			// zero indexing, `startingIndices[lookback]` will be the last item. The last iteration of the loop will be when
			// we're projecting the "oldest" day that begins after or on `beginProjectionFrom`.
			while (startingIndices[lookback] >= beginProjectionFrom) {
				let fillIndex = startingIndices.pop();
				if (!quotes[fillIndex]) return reportTickErrorAt(fillIndex);
				const fillStart = getHoursAndMinutes(quotes[fillIndex].DT);
				let { hours: fillHours, minutes: fillMinutes } = fillStart;
				let currentClose = market.getClose(quotes[fillIndex].DT);
				let fillClose;
				if (!currentClose) {
					// if no market definiton default to 24 hour chart
					fillClose = { hours: 24, minutes: 0 };
				} else {
					let nextClose = market.getNextClose(quotes[fillIndex].DT);
					fillClose = getHoursAndMinutes(currentClose);
					// For extended hours. Find last close of the day. Don't roll over into next day (if FOREX).
					while (
						!(fillClose.hours === 0 && fillClose.minutes === 0) &&
						currentClose.getDate() === nextClose.getDate()
					) {
						currentClose = nextClose;
						nextClose = market.getNextClose(nextClose);
					}
					fillClose = getHoursAndMinutes(currentClose);
					// FOREX support. Because FOREX days end at midnight, this will come back as 0 hours, 0 minutes, which
					// messes up the later/earlier than calculations
					if (fillClose.hours === 0) fillClose.hours = 24;
				}

				let workingIndices = startingIndices.slice();
				// ensure that none of the working index times start before the fill time
				for (let i = 0; i < workingIndices.length; i++) {
					let index = workingIndices[i];
					if (!quotes[index]) return reportTickErrorAt(index);
					let { hours, minutes } = getHoursAndMinutes(quotes[index].DT);

					// If the date pointed to by index is earlier than the fillStart, increment until they are the same time
					if (
						hours < fillHours ||
						(hours === fillHours && minutes < fillMinutes)
					) {
						do {
							index++;
							({ hours, minutes } = getHoursAndMinutes(quotes[index].DT));
						} while (!(hours === fillHours && minutes === fillMinutes));
					}
					workingIndices[i] = index;
				}

				// This loop runs once for each time slice for each day that needs a projection. On each iteration fillHours
				// and fillMinutes will be incremented. Either the loop ends when we hit the market close or the end of the
				// day or none of the lookback days contain anymore day we'll break out of the loop.
				while (
					fillHours < fillClose.hours ||
					(fillHours === fillClose.hours && fillMinutes < fillClose.minutes)
				) {
					// Because we may be appending future ticks we can't rely on checking the date of the fill quote to make
					// sure we haven't exceded the market hours. So for that reason we increment fillHours and fillMinutes
					// to the next time slice each iteration of the loop based off of time slices of the lookback days. But
					// we only need to do this once, so we set a flag here to avoid re-setting those values potentially
					// for *every single* lookback day.
					let timeIncremented = false;
					// Because we still need to make comparisons off of fillHours and fillMinutes, we store the new values
					// in nextHours and nextMinutes until we're finished looping through the lookbacks.
					let nextHours, nextMinutes;
					let total = 0;
					let historicalSlices = 0;

					// Loop calculates the average for the time slice under consideration. Because we expect some market days
					// may have longer hours than others, for each lookback time slice we check that incrementing the index
					// hasn't rolled the date over into the next day (which will happen after market close). If that happens,
					// we assign the index to null and ignore it for future time slices.
					for (let i = 0; i < workingIndices.length; i++) {
						let index = workingIndices[i];
						if (index === null) continue;
						let quote = quotes[index];
						if (!quote) return reportTickErrorAt(index);
						let { hours, minutes } = getHoursAndMinutes(quote.DT);
						let startDate = quote.DT.getDate(); // to check if index has rolled into next day

						if (hours === fillHours && minutes === fillMinutes) {
							total += quote.Volume;
							historicalSlices++; // if here time slice applies so make sure we caculate average correctly
							workingIndices[i]++; // go to next time slice
							if (quotes[workingIndices[i]].DT.getDate() !== startDate) {
								// if index has rolled over into the next day
								workingIndices[i] = null;
							} else if (!timeIncremented) {
								({ hours: nextHours, minutes: nextMinutes } =
									getHoursAndMinutes(quotes[workingIndices[i]].DT)); // walk fill minutes and hours forward
								timeIncremented = true; // once set once we don't need to set again
							}
						}
					}

					fillHours = nextHours;
					fillMinutes = nextMinutes;

					if (historicalSlices === 0) break; // No more data available from lookback days, can't continue projection.
					let projection = total / historicalSlices;

					if (quotes[fillIndex]) {
						quotes[fillIndex]["PV " + sd.name] = projection;
					} else {
						futureTicks.push({ ["PV " + sd.name]: projection });
					}
					fillIndex++;
				}
				startingIndices.unshift(openingTick(startingIndices[0] - 1)); // add new, older lookback day
			}

			sd.cachedLastProjection = {
				DT: quotes[quotes.length - 1].DT,
				projectedValue: quotes[quotes.length - 1]["PV " + sd.name]
			};
			sd.cachedFutureTicks = futureTicks;
			sd.appendFutureTicks(stx, futureTicks);
		}

		let marketOffset = null;
		let volume = 0;
		let projectedVolume = 0;
		let lastPastTick; // record for caching

		// so we don't need to recalculate aggregation for entire day
		if (appendingOnly && aggregateVolume) {
			while (beginProjectionFrom > 0) {
				var prevVolume = quotes[beginProjectionFrom - 1]["V " + sd.name];
				if (prevVolume || prevVolume === 0) {
					volume = prevVolume;
					break;
				}
				beginProjectionFrom--;
			}
		}

		for (let i = beginProjectionFrom; i < quotes.length; i++) {
			const quote = quotes[i];
			const quoteVolume = quote.Volume;
			const projectedQuoteVolume = quote["PV " + sd.name];

			if (!quote.futureTick) lastPastTick = i;

			if (marketOffset === null) {
				//possible new daily period
				marketOffset = CIQ.Studies.getMarketOffset({
					stx,
					localQuoteDate: quotes[i].DT,
					shiftToDateBoundary: true
				});
			}

			const currentTime = new Date(new Date(quote.DT).getTime() + marketOffset);
			const prevTime =
				quotes[i - 1] &&
				new Date(new Date(quotes[i - 1].DT).getTime() + marketOffset);

			let anchor = new timezoneJS.Date(
				quote.DT,
				market.market_def.market_tz || "America/New_York"
			);
			anchor.setHours(anchorHour, anchorMinute, anchorSecond);
			anchor = new Date(anchor + marketOffset);

			// ensure that the anchor time "rolls over" to the same day as the current time
			anchor.setDate(currentTime.getDate());

			// A new day is a new period, even for FOREX thanks to marketOffset
			if (prevTime && currentTime.getDate() !== prevTime.getDate()) {
				marketOffset = null;
				volume = 0;
				projectedVolume = 0;
			}

			if (currentTime < anchor) {
				quote["V " + sd.name] = 0;
				quote["PV " + sd.name] = 0;
				continue;
			}

			if (aggregateVolume) {
				volume += quoteVolume;
				projectedVolume += projectedQuoteVolume;
			} else {
				volume = quoteVolume;
				projectedVolume = projectedQuoteVolume;
			}

			quote["V " + sd.name] = volume;
			if (!appendingOnly) quote["PV " + sd.name] = projectedVolume; // if appending keep old value

			if ([NaN, null, undefined].includes(volume) && !quote.futureTick) {
				sd.error = `${studyName} requires volume`;
				return;
			}
		}

		// make sure to cache the projected value _after_ aggregation
		sd.cachedLastProjection.projectedValue =
			quotes[lastPastTick]["PV " + sd.name];

		sd.outputMap = {};
		sd.outputMap["V " + sd.name] = "";
		sd.outputMap["PV " + sd.name] = "Average Line";

		// Make sure dependent studies are loaded with the correct start date (if that date has changed
		// and is no longer in sync with sd.startFrom)
		dependents.forEach((dependent) => {
			dependent.startFrom = beginProjectionFrom;
			dependent.study.calculateFN(stx, dependent);
		});

		function reportTickErrorAt(index) {
			console.error(
				`Expected data for ${dateFromTick(
					index
				).toDateString()} but found none. This may be caused by gaps in your data or an improperly configured market definition.`
			);
		}

		function getHoursAndMinutes(date) {
			return {
				hours: date.getHours(),
				minutes: date.getMinutes()
			};
		}

		function wind(date, days, forward) {
			while (days) {
				date = new Date(
					new Date(date).setDate(date.getDate() + (forward ? 1 : -1))
				);
				if (market.isMarketDate(date)) days--;
			}
			return date;
		}

		function tickFromDate(date) {
			return stx.tickFromDate(date, null, null, true, "scrubbed");
		}

		function dateFromTick(tick) {
			return stx.dateFromTick(tick, null, true, "scrubbed");
		}

		// Used if no market definition. Returns the previous midnight of a date, shifted by the market offset
		function defaultOpen(date) {
			date.setHours(0);
			date.setMinutes(0);
			let marketOffset = CIQ.Studies.getMarketOffset({
				stx,
				localQuoteDate: date
			});
			return new Date(date.getTime() + marketOffset);
		}

		// Returns the index for the tick of the market open of the day indicated by the index argument
		// if `ensureInSource` is true will try to find the oldest open in the data
		function openingTick(index, ensureInSource) {
			let date = dateFromTick(index);
			let marketOpen = market.getOpen(date) || defaultOpen(date);
			let tick = tickFromDate(marketOpen);
			if (!ensureInSource) return tick; // value may be outside the bounds of quotes array
			if (tick < 0) tick = tickFromDate(wind(marketOpen, 1, true)); // try to find oldest open _in_ the data
			if (tick >= quotes.length) return false; // if no open in data indicate so
			return tick;
		}
	};

	/**
	 * Displays the Projected Volume at Time (PVAT) and Projected Aggregate Volume (PAV) studies.
	 *
	 * @param {CIQ.ChartEngine} stx A reference to the chart object.
	 * @param {CIQ.Studies.StudyDescriptor} sd Specifies the study (PVAT or PAV) to be displayed.
	 * @param {array} quotes An array of quotes from which the study is constructed.
	 *
	 * @memberOf CIQ.Studies
	 * @since 8.0.0
	 */
	CIQ.Studies.displayProjectedVolume = function (stx, sd, quotes) {
		if (sd.error) return CIQ.Studies.removeAnchorHandle(stx, sd);
		const { "Alert Threshold": threshold = "" } = sd.inputs; // default: "+50%"
		const alertPercent = parseInt(threshold.slice(0, -1), 10) / 100;
		let alertColor = sd.outputs["Alert Bar"];
		if (typeof alertColor === "object") alertColor = alertColor.color;
		sd.volumeField = "V " + sd.name;
		sd.alignStepToSide = true;
		sd.extendToEndOfLastBar = true;
		sd.lineWidth = 2;

		const opacityUp = stx.canvasStyle("stx_volume_underlay_up").opacity;
		const opacityDown = stx.canvasStyle("stx_volume_underlay_down").opacity;

		sd.colorFunction = function (quote) {
			const { Open, Close, iqPrevClose } = quote;
			const comp = stx.colorByCandleDirection ? Open : iqPrevClose;
			const closeDown = comp > Close;
			const projectedVolume = quote["PV " + sd.name];
			const volume = quote["V " + sd.name];
			const alertChange = projectedVolume * (alertPercent + 1);
			const shouldAlert =
				alertPercent < 0 ? volume < alertChange : volume > alertChange;

			return {
				fill_color:
					(shouldAlert && alertColor) ||
					(closeDown ? this.fill_color_down : this.fill_color_up),
				border_color: closeDown ? this.border_color_down : this.border_color_up,
				opacity: shouldAlert ? 1 : closeDown ? opacityDown : opacityUp,
				border_opacity: closeDown ? opacityDown : opacityUp
			};
		};

		const studyName = sd.study ? sd.study.name : sd.type;
		const { loadingMore } = stx.chart;
		const someData = quotes.some(
			(quote) => quote && quote[sd.volumeField] && quote["PV " + sd.name]
		);
		const needsMore =
			quotes[0] &&
			!quotes[0].futureTick &&
			(quotes[0]["PV " + sd.name] === undefined ||
				(sd.dependentsOutputMap || []).some((key) =>
					[undefined, null].includes(quotes[0][key])
				));

		if (!someData && loadingMore) {
			return (sd.error = `Fetching data for ${studyName}`);
		}

		CIQ.Studies.createVolumeChart(stx, sd, quotes);
		CIQ.Studies.displaySeriesAsLine(stx, sd, quotes);
		if (sd.anchorHandle) {
			CIQ.Studies.displayAnchorHandleAndLine(stx, sd, quotes);
		}

		if (needsMore) CIQ.Studies.calculateProjectedVolume(stx, sd);
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		PVAT: {
			name: "Projected Volume at Time",
			range: "0 to max",
			yAxis: { ground: true },
			calculateFN: CIQ.Studies.calculateProjectedVolume,
			seriesFN: CIQ.Studies.displayProjectedVolume,
			initializeFN: CIQ.Studies.initProjectedVolume,
			removeFN: CIQ.Studies.removeAnchorHandle,
			inputs: {
				"Lookback Days": 10,
				"Anchor Time": "",
				"Alert Threshold": [
					"+150%",
					"+125%",
					"+100%",
					"+75%",
					"+50%",
					"+25%",
					"None",
					"-25%",
					"-50%",
					"-75%",
					"-100%",
					"-125%",
					"-150%"
				],
				"Anchor Selector": true
			},
			outputs: {
				"Average Line": "#fe641c",
				"Alert Bar": "#cfbd0e",
				"Up Volume": "#8cc176",
				"Down Volume": "#b82c0c"
			},
			parameters: {
				plotType: "step"
			},
			attributes: {
				"Anchor Time": { placeholder: "hh:mm:ss", step: 1 },
				"Alert Threshold": { defaultSelected: "+50%" }
			}
		},
		PAV: {
			name: "Projected Aggregate Volume",
			range: "0 to max",
			yAxis: { ground: true },
			calculateFN: CIQ.Studies.calculateProjectedVolume,
			seriesFN: CIQ.Studies.displayProjectedVolume,
			initializeFN: CIQ.Studies.initProjectedVolume,
			removeFN: CIQ.Studies.removeAnchorHandle,
			inputs: {
				"Lookback Days": 10,
				"Anchor Time": "",
				"Anchor Selector": true
			},
			outputs: {
				"Average Line": "#fe641c",
				"Up Volume": "#8cc176",
				"Down Volume": "#b82c0c"
			},
			parameters: {
				plotType: "step"
			},
			attributes: {
				"Anchor Time": { placeholder: "hh:mm:ss", step: 1 }
			}
		}
	});
}

};


let __js_advanced_studies_psychologicalLine_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"psychologicalLine feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculatePsychologicalLine = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var array = [];
		var increment = 100 / sd.days;
		var accum = 0;
		for (var i = Math.max(sd.startFrom - sd.days, 1); i < quotes.length; i++) {
			if (quotes[i].futureTick) break;
			var up = Number(quotes[i].Close > quotes[i - 1].Close);
			if (up) accum += increment;
			array.push(up);
			if (array.length > sd.days) accum -= array.shift() * increment;
			if (i < sd.startFrom) continue;
			if (!isNaN(quotes[i].Close)) quotes[i]["Result " + sd.name] = accum;
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		PSY: {
			name: "Psychological Line",
			range: "0 to 100",
			calculateFN: CIQ.Studies.calculatePsychologicalLine,
			inputs: { Period: 20 }
		}
	});
}

};


let __js_advanced_studies_qstick_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("qstick feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateQStick = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		for (var i = sd.startFrom; i < quotes.length; i++) {
			quotes[i]["_Close-Open " + sd.name] = quotes[i].Close - quotes[i].Open;
		}
		CIQ.Studies.MA(
			sd.inputs["Moving Average Type"],
			sd.days,
			"_Close-Open " + sd.name,
			0,
			"Result",
			stx,
			sd
		);
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		QStick: {
			name: "QStick",
			calculateFN: CIQ.Studies.calculateQStick,
			inputs: { Period: 8, "Moving Average Type": "ma" }
		}
	});
}

};


let __js_advanced_studies_rainbow_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("rainbow feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateRainbow = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";

		function getLLVHHV(p, x) {
			var h = Number.MAX_VALUE * -1,
				l = Number.MAX_VALUE;
			for (var j = x - p + 1; j <= x; j++) {
				if (j < 0) continue;
				h = Math.max(h, quotes[j].Close);
				l = Math.min(l, quotes[j].Close);
			}
			return [l, h];
		}

		var f = field;
		for (var j = 1; j <= 10; j++) {
			CIQ.Studies.MA("simple", sd.days, f, 0, "SMA" + j, stx, sd);
			f = "SMA" + j + " " + sd.name;
		}

		for (var i = Math.max(sd.startFrom, 10); i < quotes.length; i++) {
			if (!quotes[i]) continue;
			if (quotes[i].futureTick) break;
			var accum = 0,
				count = 0,
				max = Number.MAX_VALUE * -1,
				min = Number.MAX_VALUE;
			for (j = 1; j <= 10; j++) {
				var q = quotes[i]["SMA" + j + " " + sd.name];
				if (q || q === 0) {
					accum += q;
					count++;
					max = Math.max(max, q);
					min = Math.min(min, q);
				}
			}
			if (sd.name.indexOf("Osc") > -1) {
				var lh = getLLVHHV(sd.inputs["HHV/LLV Lookback"], i);
				if (count) {
					quotes[i][sd.name + "_hist"] =
						(100 * (quotes[i][field] - accum / count)) /
						Math.max(0.000001, lh[1] - lh[0]);
					quotes[i]["Over " + sd.name] =
						(100 * (max - min)) / Math.max(0.000001, lh[1] - lh[0]);
					quotes[i]["Under " + sd.name] = -quotes[i]["Over " + sd.name];
					quotes[i]["Zero " + sd.name] = 0;
				}
			}
		}
		if (sd.name.indexOf("Osc") > -1) {
			sd.outputMap = {};
			sd.outputMap["Over " + sd.name] = "Positive Bar";
			sd.outputMap["Under " + sd.name] = "Negative Bar";
			sd.outputMap["Zero " + sd.name] = "";
			sd.outputMap[sd.name + "_hist"] = "";
		}
	};

	CIQ.Studies.displayRainbowMA = function (stx, sd, quotes) {
		var panel = stx.panels[sd.panel];
		//just need to display in reverse order from outputMap
		for (var i = 10; i > 0; i--) {
			CIQ.Studies.displayIndividualSeriesAsLine(
				stx,
				sd,
				panel,
				"SMA" + i + " " + sd.name,
				quotes
			);
		}
	};

	CIQ.Studies.displayRainbowOsc = function (stx, sd, quotes) {
		CIQ.Studies.displaySeriesAsLine(stx, sd, quotes);
		var panel = stx.panels[sd.panel],
			context = sd.getContext(stx);
		var yAxis = sd.getYAxis(stx);

		stx.startClip(sd.panel);
		if (!sd.highlight && stx.highlightedDraggable) context.globalAlpha *= 0.3;
		var y = stx.pixelFromPrice(0, panel, yAxis);
		var skipTransform = panel.name != sd.chart.name;

		var upColor = CIQ.Studies.determineColor(sd.outputs["Positive Bar"]);
		context.strokeStyle = upColor;
		stx.plotDataSegmentAsLine("Over " + sd.name, panel, {
			skipTransform: skipTransform,
			label: false,
			yAxis: yAxis
		});

		var upgradient = context.createLinearGradient(
			0,
			y,
			0,
			yAxis.flipped ? yAxis.bottom : yAxis.top
		);
		upgradient.addColorStop(0, stx.containerColor);
		upgradient.addColorStop(1, upColor);
		CIQ.prepareChannelFill(stx, {
			skipTransform: skipTransform,
			color: upgradient,
			opacity: !sd.highlight && stx.highlightedDraggable ? 0.3 : 1,
			panelName: sd.panel,
			topBand: "Over " + sd.name,
			bottomBand: "Zero " + sd.name,
			yAxis: yAxis
		});

		var downColor = CIQ.Studies.determineColor(sd.outputs["Negative Bar"]);
		context.strokeStyle = downColor;
		stx.plotDataSegmentAsLine("Under " + sd.name, panel, {
			skipTransform: skipTransform,
			label: false,
			yAxis: yAxis
		});

		var dngradient = context.createLinearGradient(
			0,
			y,
			0,
			yAxis.flipped ? yAxis.top : yAxis.bottom
		);
		dngradient.addColorStop(0, stx.containerColor);
		dngradient.addColorStop(1, downColor);
		CIQ.prepareChannelFill(stx, {
			skipTransform: skipTransform,
			color: dngradient,
			opacity: !sd.highlight && stx.highlightedDraggable ? 0.3 : 1,
			panelName: sd.panel,
			topBand: "Zero " + sd.name,
			bottomBand: "Under " + sd.name,
			yAxis: yAxis
		});

		var myWidth = stx.layout.candleWidth - 2;
		if (myWidth < 2) myWidth = 1;

		stx.canvasColor("stx_histogram");
		if (!sd.underlay) context.globalAlpha = 1;
		if (!sd.highlight && stx.highlightedDraggable) context.globalAlpha *= 0.3;
		context.fillStyle = "#CCCCCC";
		for (var i = 0; i < quotes.length; i++) {
			var quote = quotes[i];
			if (!quote) continue;
			if (quote[sd.name + "_hist"] > 0) context.fillStyle = upColor;
			else if (quote[sd.name + "_hist"] < 0) context.fillStyle = downColor;
			if (quote.candleWidth)
				myWidth = Math.floor(Math.max(1, quote.candleWidth - 2));
			context.fillRect(
				Math.floor(stx.pixelFromBar(i, panel.chart) - myWidth / 2),
				Math.floor(y),
				Math.floor(myWidth),
				Math.floor(
					stx.pixelFromPrice(quote[sd.name + "_hist"], panel, yAxis) - y
				)
			);
		}
		stx.endClip();
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Rainbow MA": {
			name: "Rainbow Moving Average",
			overlay: true,
			calculateFN: CIQ.Studies.calculateRainbow,
			seriesFN: CIQ.Studies.displayRainbowMA,
			inputs: { Period: 2, Field: "field" },
			outputs: {
				SMA1: "#FF0000",
				SMA2: "#FF7F00",
				SMA3: "#FFFF00",
				SMA4: "#7FFF00",
				SMA5: "#00FF7F",
				SMA6: "#00FFFF",
				SMA7: "#007FFF",
				SMA8: "#0000FF",
				SMA9: "#7F00FF",
				SMA10: "#FF00FF"
			}
		},
		"Rainbow Osc": {
			name: "Rainbow Oscillator",
			calculateFN: CIQ.Studies.calculateRainbow,
			seriesFN: CIQ.Studies.displayRainbowOsc,
			centerline: 0,
			inputs: { Period: 2, Field: "field", "HHV/LLV Lookback": 10 },
			outputs: { "Positive Bar": "#00DD00", "Negative Bar": "#FF0000" }
		}
	});
}

};


let __js_advanced_studies_randomWalk_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"randomWalk feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateRandomWalk = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}

		for (var i = Math.max(2, sd.startFrom); i < quotes.length; i++) {
			var ttr = 0;
			var high = quotes[i].High;
			var low = quotes[i].Low;
			var maxHigh = 0;
			var maxLow = 0;
			for (var j = 1; j <= sd.days; j++) {
				if (quotes[i].futureTick) break;
				if (i <= j) {
					maxHigh = maxLow = 0;
					break;
				}
				ttr += quotes[i - j].trueRange;
				var denom = (ttr / j) * Math.sqrt(j);
				if (denom) {
					// skip if denominator is 0 --
					var cH = (high - quotes[i - j].Low) / denom;
					var cL = (quotes[i - j].High - low) / denom;
					maxHigh = Math.max(maxHigh, cH);
					maxLow = Math.max(maxLow, cL);
				}
			}
			if (!quotes[i].futureTick && (!isNaN(high) || !isNaN(low))) {
				quotes[i]["Random Walk High " + sd.name] = maxHigh;
				quotes[i]["Random Walk Low " + sd.name] = maxLow;
			}
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Random Walk": {
			name: "Random Walk Index",
			calculateFN: CIQ.Studies.calculateRandomWalk,
			outputs: { "Random Walk High": "#FF0000", "Random Walk Low": "#0000FF" }
		}
	});
}

};


let __js_advanced_studies_relativeVigor_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"relativeVigor feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateRelativeVigor = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var i;
		for (i = sd.startFrom; i < quotes.length; i++) {
			var qt = quotes[i];
			if (!isNaN(qt.Close) && !isNaN(qt.Open))
				qt["_Change " + sd.name] = qt.Close - qt.Open;
			if (!isNaN(qt.High) && !isNaN(qt.Low))
				qt["_Range " + sd.name] = qt.High - qt.Low;
		}

		CIQ.Studies.MA("triangular", 4, "_Change " + sd.name, 0, "_Numer", stx, sd);
		CIQ.Studies.MA("triangular", 4, "_Range " + sd.name, 0, "_Denom", stx, sd);

		var nums = [];
		var dens = [];
		for (i = Math.max(sd.startFrom - sd.days, 0); i < quotes.length; i++) {
			if (quotes[i].futureTick) break;
			if (
				quotes[i]["_Numer " + sd.name] === null &&
				quotes[i]["_Denom " + sd.name] === null
			)
				continue;
			nums.push(quotes[i]["_Numer " + sd.name]);
			dens.push(quotes[i]["_Denom " + sd.name]);
			if (nums.length > sd.days) {
				nums.shift();
				dens.shift();
			}
			var sumNum = 0;
			var sumDen = 0;
			var it;
			for (it = 0; it < nums.length; it++) {
				sumNum += nums[it];
			}
			for (it = 0; it < dens.length; it++) {
				sumDen += dens[it];
			}
			if (sumDen === 0) sumDen = 0.00000001;
			if (i < sd.startFrom) continue;
			quotes[i]["Rel Vig " + sd.name] = sumNum / sumDen;
		}

		CIQ.Studies.MA(
			"triangular",
			4,
			"Rel Vig " + sd.name,
			0,
			"RelVigSignal",
			stx,
			sd
		);

		for (i = sd.startFrom; i < quotes.length; i++) {
			quotes[i][sd.name + "_hist"] =
				quotes[i]["Rel Vig " + sd.name] - quotes[i]["RelVigSignal " + sd.name];
		}
		//Don't clear outputMap
		sd.outputMap[sd.name + "_hist"] = "";
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Rel Vig": {
			name: "Relative Vigor Index",
			seriesFN: CIQ.Studies.displayHistogramWithSeries,
			calculateFN: CIQ.Studies.calculateRelativeVigor,
			inputs: { Period: 10 },
			outputs: {
				"Rel Vig": "auto",
				RelVigSignal: "#FF0000",
				"Increasing Bar": "#00DD00",
				"Decreasing Bar": "#FF0000"
			}
		}
	});
}

};


let __js_advanced_studies_rsi_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("rsi feature requires first activating studies feature.");
} else {
	/**
	 * Default study calculation function for RSI study.
	 *
	 * The resulting values will be added to the dataSet using the field name provided by the `sd.outputMap` entry.
	 *
	 * **Notes:**
	 * - This function calculates a single value, so it expects `sd.outputMap` to contain a single mapping.
	 * - If no `outputs` object is defined in the library entry, the study will default to a single output named `Result`, which will then be used in lieu of `sd.outputs` to build the field name.
	 * - The study name may contain the unprintable character `&zwnj;`, see {@link studyDescriptor} documentation.
	 *
	 * @param {CIQ.ChartEngine} stx A chart engine instance
	 * @param {CIQ.Studies.StudyDescriptor} sd A study descriptor
	 * @memberOf CIQ.Studies
	 * @since 6.3.0 RSI can now be calculated on any field instead of just "Close".
	 */
	CIQ.Studies.calculateRSI = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";

		function computeRSI(avgGain, avgLoss) {
			if (avgLoss === 0) return 100;
			var rs = avgGain / avgLoss;
			return 100 - 100 / (1 + rs);
		}
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		for (var i = sd.startFrom; i < quotes.length; i++) {
			if (!i) continue;
			var quote = quotes[i];
			var quote1 = quotes[i - 1];
			if (!quote[field] && quote[field] !== 0) continue;
			if (!quote1[field] && quote1[field] !== 0) continue;
			var change = quote[field] - quote1[field];
			var num = Math.min(i, sd.days);

			var avgGain = quote1["_avgG " + sd.name];
			if (!avgGain) avgGain = 0;
			avgGain -= avgGain / num;

			var avgLoss = quote1["_avgL " + sd.name];
			if (!avgLoss) avgLoss = 0;
			avgLoss -= avgLoss / num;

			if (change > 0) {
				avgGain += change / num;
			} else if (change <= 0) {
				avgLoss -= change / num;
			} else continue;
			if (i >= sd.days) {
				if ((avgGain || avgGain !== 0) && (avgLoss || avgLoss !== 0))
					quote["RSI " + sd.name] = computeRSI(avgGain, avgLoss);
			}
			//intermediates
			quote["_avgG " + sd.name] = avgGain;
			quote["_avgL " + sd.name] = avgLoss;
		}
		sd.zoneOutput = "RSI";
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		rsi: {
			name: "RSI",
			inputs: { Period: 14, Field: "field" },
			calculateFN: CIQ.Studies.calculateRSI,
			range: "0 to 100",
			outputs: { RSI: "auto" },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 80,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: 20,
					studyOverSoldColor: "auto"
				}
			}
		}
	});
}

};


let __js_advanced_studies_schaffTrendCycle_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"schaffTrendCycle feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateSchaff = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var period = sd.days;
		var shortCycle = Number(sd.inputs["Short Cycle"]);
		var longCycle = Number(sd.inputs["Long Cycle"]);
		if (quotes.length < Math.max(period, shortCycle, longCycle) + 1) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		var factor = 0.5;

		CIQ.Studies.MA(
			sd.inputs["Moving Average Type"],
			shortCycle,
			field,
			0,
			"_MACD1",
			stx,
			sd
		);
		CIQ.Studies.MA(
			sd.inputs["Moving Average Type"],
			longCycle,
			field,
			0,
			"_MACD2",
			stx,
			sd
		);

		function getLLVHHV(p, x, n) {
			var l = null,
				h = null;
			for (var j = x - p + 1; j <= x; j++) {
				var d = quotes[j][n + " " + sd.name];
				if (!d) continue;
				l = l === null ? d : Math.min(l, d);
				h = h === null ? d : Math.max(h, d);
			}
			return [l, h];
		}
		var f1 = 0,
			f2 = 0;
		for (var i = sd.startFrom; i < quotes.length; i++) {
			var quote = quotes[i];

			if (i < longCycle - 1) continue;
			var qMACD1 = quote["_MACD1 " + sd.name],
				qMACD2 = quote["_MACD2 " + sd.name];
			if (qMACD1 || qMACD1 === 0 || qMACD2 || qMACD2 === 0) {
				quote["_MACD " + sd.name] = qMACD1 - qMACD2;
			}
			var qMACD = quote["_MACD " + sd.name];

			if (i < longCycle + (period - 1)) continue;
			var lh = getLLVHHV(period, i, "_MACD");
			f1 = lh[1] > lh[0] ? (100 * (qMACD - lh[0])) / (lh[1] - lh[0]) : f1;
			if (qMACD || qMACD === 0) {
				quote["_PF " + sd.name] = quotes[i - 1]["_PF " + sd.name]
					? quotes[i - 1]["_PF " + sd.name] +
					  factor * (f1 - quotes[i - 1]["_PF " + sd.name])
					: f1;
			}
			var qPF = quote["_PF " + sd.name];
			if (i < longCycle + 2 * (period - 1)) continue;
			lh = getLLVHHV(period, i, "_PF");
			f2 = lh[1] > lh[0] ? (100 * (qPF - lh[0])) / (lh[1] - lh[0]) : f2;
			if (qPF || qPF === 0) {
				quote["Result " + sd.name] = quotes[i - 1]["Result " + sd.name]
					? quotes[i - 1]["Result " + sd.name] +
					  factor * (f2 - quotes[i - 1]["Result " + sd.name])
					: f2;
			}
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Schaff: {
			name: "Schaff Trend Cycle",
			range: "0 to 100",
			calculateFN: CIQ.Studies.calculateSchaff,
			inputs: {
				Period: 10,
				Field: "field",
				"Short Cycle": 23,
				"Long Cycle": 50,
				"Moving Average Type": "ema"
			},
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 75,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: 25,
					studyOverSoldColor: "auto"
				}
			}
		}
	});
}

};


let __js_advanced_studies_shinohara_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("shinohara feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateShinohara = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var accums = {
			weakNum: 0,
			weakDen: 0,
			strongNum: 0,
			strongDen: 0
		};
		if (sd.startFrom > 1) {
			accums = CIQ.clone(quotes[sd.startFrom - 1]["_accums " + sd.name]);
		}
		for (var i = sd.startFrom; i < quotes.length; i++) {
			accums.weakNum += quotes[i].High - quotes[i].Close;
			accums.weakDen += quotes[i].Close - quotes[i].Low;
			if (i > 0) {
				accums.strongNum += quotes[i].High - quotes[i - 1].Close;
				accums.strongDen += quotes[i - 1].Close - quotes[i].Low;
			}
			if (i >= sd.days) {
				accums.weakNum -= quotes[i - sd.days].High - quotes[i - sd.days].Close;
				accums.weakDen -= quotes[i - sd.days].Close - quotes[i - sd.days].Low;
				quotes[i]["Weak Ratio " + sd.name] =
					(100 * accums.weakNum) / accums.weakDen;
				if (i > sd.days) {
					accums.strongNum -=
						quotes[i - sd.days].High - quotes[i - sd.days - 1].Close;
					accums.strongDen -=
						quotes[i - sd.days - 1].Close - quotes[i - sd.days].Low;
					quotes[i]["Strong Ratio " + sd.name] =
						(100 * accums.strongNum) / accums.strongDen;
				}
			}
			quotes[i]["_accums " + sd.name] = CIQ.clone(accums);
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Shinohara: {
			name: "Shinohara Intensity Ratio",
			calculateFN: CIQ.Studies.calculateShinohara,
			inputs: { Period: 26 },
			outputs: { "Strong Ratio": "#E99B54", "Weak Ratio": "#5F7CB8" }
		}
	});
}

};


let __js_advanced_studies_stochastics_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"stochastics feature requires first activating studies feature."
	);
} else {
	/**
	 * Calculate function for stochastics
	 * @param  {CIQ.ChartEngine} stx Chart object
	 * @param {CIQ.Studies.StudyDescriptor} sd  Study Descriptor
	 * @memberOf CIQ.Studies
	 */
	CIQ.Studies.calculateStochastics = function (stx, sd) {
		if (!sd.smooth) sd.smooth = sd.inputs.Smooth;
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";

		var fastPeriod = sd.inputs["%K Periods"];
		if (!fastPeriod) fastPeriod = sd.days;

		var quotes = sd.chart.scrubbed;
		if (quotes.length < Math.max(fastPeriod, sd.days) + 1) {
			sd.error = true;
			return;
		}

		var smoothingPeriod = sd.inputs["%K Smoothing Periods"];
		if (smoothingPeriod && !sd.inputs.Fast) sd.smooth = true;
		else if (sd.smooth) smoothingPeriod = 3;

		var slowPeriod = sd.inputs["%D Periods"];
		if (!slowPeriod) slowPeriod = 3;

		function computeStochastics(position, field, days) {
			var beg = position - days + 1;
			var high = Number.MAX_VALUE * -1,
				low = Number.MAX_VALUE;
			for (var i = beg; i <= position; i++) {
				var lowField = quotes[i][field == "Close" ? "Low" : field],
					highField = quotes[i][field == "Close" ? "High" : field];
				if (!lowField && lowField !== 0) continue;
				if (!highField && highField !== 0) continue;
				low = Math.min(low, lowField);
				high = Math.max(high, highField);
			}
			if (high == Number.MAX_VALUE * -1 || low == Number.MAX_VALUE) return null;
			var k =
				high == low
					? 0
					: ((quotes[position][field] - low) / (high - low)) * 100;
			return k;
		}

		if (sd.outputs.Fast) {
			sd.outputMap = {};
			sd.outputMap["%K " + sd.name] = "Fast";
			sd.outputMap["%D " + sd.name] = "Slow";
		}

		for (var i = Math.max(fastPeriod, sd.startFrom); i < quotes.length; i++) {
			var stoch = computeStochastics(i, field, fastPeriod);
			if (stoch !== null)
				quotes[i]["_Fast%K " + sd.name] = computeStochastics(
					i,
					field,
					fastPeriod
				);
		}

		CIQ.Studies.MA(
			"simple",
			sd.smooth ? smoothingPeriod : 1,
			"_Fast%K " + sd.name,
			0,
			"%K",
			stx,
			sd
		);
		CIQ.Studies.MA("simple", slowPeriod, "%K " + sd.name, 0, "%D", stx, sd);
	};

	CIQ.Studies.calculateStochMomentum = function (stx, sd) {
		var pKPeriods = Number(sd.inputs["%K Periods"]);
		var pKSmoothPeriods = Number(sd.inputs["%K Smoothing Periods"]);
		var pK2SmoothPeriods = Number(sd.inputs["%K Double Smoothing Periods"]);
		var pDPeriods = Number(sd.inputs["%D Periods"]);

		var quotes = sd.chart.scrubbed;
		if (
			quotes.length < pKPeriods + pKSmoothPeriods + pK2SmoothPeriods - 1 ||
			quotes.length < pDPeriods
		) {
			sd.error = true;
			return;
		}

		function getLLVHHV(p, x) {
			var l = null,
				h = null;
			for (var j = x - p + 1; j <= x; j++) {
				l = l === null ? quotes[j].Low : Math.min(l, quotes[j].Low);
				h = h === null ? quotes[j].High : Math.max(h, quotes[j].High);
			}
			return [l, h];
		}

		var i;
		for (i = Math.max(pKPeriods, sd.startFrom) - 1; i < quotes.length; i++) {
			var quote = quotes[i];
			var lh = getLLVHHV(pKPeriods, i);
			quote["_H " + sd.name] = quote.Close - (lh[0] + lh[1]) / 2;
			quote["_DHL " + sd.name] = lh[1] - lh[0];
		}

		CIQ.Studies.MA(
			"exponential",
			pKSmoothPeriods,
			"_H " + sd.name,
			0,
			"_HS1",
			stx,
			sd
		);
		CIQ.Studies.MA(
			"exponential",
			pK2SmoothPeriods,
			"_HS1 " + sd.name,
			0,
			"_HS2",
			stx,
			sd
		);
		CIQ.Studies.MA(
			"exponential",
			pKSmoothPeriods,
			"_DHL " + sd.name,
			0,
			"_DHL1",
			stx,
			sd
		);
		CIQ.Studies.MA(
			"exponential",
			pK2SmoothPeriods,
			"_DHL1 " + sd.name,
			0,
			"_DHL2",
			stx,
			sd
		);

		for (i = pKPeriods - 1; i < quotes.length; i++) {
			quotes[i]["%K " + sd.name] =
				(quotes[i]["_HS2 " + sd.name] / (0.5 * quotes[i]["_DHL2 " + sd.name])) *
				100;
		}

		CIQ.Studies.MA(
			sd.inputs["%D Moving Average Type"],
			pDPeriods,
			"%K " + sd.name,
			0,
			"%D",
			stx,
			sd
		);

		sd.zoneOutput = "%K";
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Stch Mtm": {
			name: "Stochastic Momentum Index",
			calculateFN: CIQ.Studies.calculateStochMomentum,
			inputs: {
				"%K Periods": 10,
				"%K Smoothing Periods": 3,
				"%K Double Smoothing Periods": 3,
				"%D Periods": 10,
				"%D Moving Average Type": "ema"
			},
			outputs: { "%K": "auto", "%D": "#FF0000" },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 40,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: -40,
					studyOverSoldColor: "auto"
				}
			}
		},
		stochastics: {
			name: "Stochastics (Simple)",
			range: "0 to 100",
			calculateFN: CIQ.Studies.calculateStochastics,
			inputs: { Period: 14, Field: "field", Smooth: true },
			outputs: { Fast: "auto", Slow: "#FF0000" },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 80,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: 20,
					studyOverSoldColor: "auto"
				}
			}
		},
		Stochastics: {
			name: "Stochastics",
			range: "0 to 100",
			calculateFN: CIQ.Studies.calculateStochastics,
			inputs: {
				Field: "field",
				"%K Periods": 14,
				Fast: false,
				"%K Smoothing Periods": 3,
				"%D Periods": 3
			},
			outputs: { "%K": "auto", "%D": "#FF0000" },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 80,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: 20,
					studyOverSoldColor: "auto"
				}
			},
			attributes: {
				"%K Smoothing Periods": {
					hidden: function () {
						return this.inputs.Fast;
					}
				}
			},
			centerline: 50
		}
	});
}

};


let __js_advanced_studies_supertrend_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"supertrend feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateSupertrend = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		CIQ.Studies.calculateStudyATR(stx, sd);
		for (var i = sd.startFrom; i < quotes.length; i++) {
			var quote = quotes[i];
			if (!quote) continue;
			var median = (quote.High + quote.Low) / 2;
			var factoredATR = sd.inputs.Multiplier * quote["ATR " + sd.name];
			var uptrend = median - factoredATR;
			var downtrend = median + factoredATR;
			if (i) {
				if (
					quotes[i - 1] &&
					quotes[i - 1].Close &&
					quotes[i - 1].Close > quotes[i - 1]["_Uptrend " + sd.name] &&
					quotes[i - 1]["_Uptrend " + sd.name] > uptrend
				)
					uptrend = quotes[i - 1]["_Uptrend " + sd.name];
				if (
					quotes[i - 1] &&
					quotes[i - 1].Close &&
					quotes[i - 1].Close < quotes[i - 1]["_Downtrend " + sd.name] &&
					quotes[i - 1]["_Downtrend " + sd.name] < downtrend
				)
					downtrend = quotes[i - 1]["_Downtrend " + sd.name];
			}
			quote["_Direction " + sd.name] = 1;
			if (i) {
				quote["_Direction " + sd.name] = quotes[i - 1]["_Direction " + sd.name];
				if (quote.Close > quotes[i - 1]["_Downtrend " + sd.name])
					quote["_Direction " + sd.name] = 1;
				else if (quote.Close < quotes[i - 1]["_Uptrend " + sd.name])
					quote["_Direction " + sd.name] = -1;
			}
			quote["_Uptrend " + sd.name] = uptrend;
			quote["_Downtrend " + sd.name] = downtrend;
			quote["Trend " + sd.name] =
				quote["_Direction " + sd.name] > 0 ? uptrend : downtrend;
			if (!i) continue;
		}
		sd.outputMap = {};
		sd.outputMap["Trend " + sd.name] = "";
	};

	CIQ.Studies.displaySupertrend = function (stx, sd, quotes) {
		var panel = stx.panels[sd.panel],
			context = sd.getContext(stx);
		var yAxis = sd.getYAxis(stx);
		function colorFunction(stx, quote, mode) {
			if (quote && quote["_Direction " + sd.name] < 0)
				return sd.outputs.Downtrend;
			return sd.outputs.Uptrend;
		}
		var params = {
			skipTransform: panel.name != sd.chart.name,
			skipProjections: true,
			label: stx.preferences.labels,
			yAxis: yAxis,
			highlight: sd.highlight
		};

		var trendName = "Trend " + sd.name;
		for (
			var x = 0;
			panel.chart.transformFunc &&
			yAxis != panel.chart.yAxis &&
			x < quotes.length;
			x++
		) {
			var q = quotes[x];
			if (q && q.transform) {
				q.transform[trendName] = panel.chart.transformFunc(
					stx,
					panel.chart,
					q[trendName]
				);
			}
		}
		stx.plotDataSegmentAsLine(trendName, panel, params, colorFunction);
		context.lineWidth = 1;
		context.globalAlpha = 1;

		stx.startClip(sd.panel);
		if (!sd.highlight && stx.highlightedDraggable) context.globalAlpha *= 0.3;
		var signalWidth = context.measureText("\u25B2").width / 2;
		var i, color;
		for (i = 0; i < quotes.length; i++) {
			if (!quotes[i] || !quotes[i - 1]) continue;
			if (
				quotes[i - 1]["_Direction " + sd.name] >
				quotes[i]["_Direction " + sd.name]
			) {
				color = CIQ.Studies.determineColor(sd.outputs.Downtrend);
				if (!color || color == "auto" || CIQ.isTransparent(color))
					color = stx.defaultColor;
				context.fillStyle = color;
				context.textBaseline = "bottom";
				var yh = stx.pixelFromPrice(quotes[i].High, panel, yAxis);
				for (var d = 5; d <= 45; d += 10) {
					// down arrow
					if (yAxis.flipped)
						context.fillText(
							"\u25B2",
							stx.pixelFromBar(i) - signalWidth,
							yh + d
						);
					else
						context.fillText(
							"\u25BC",
							stx.pixelFromBar(i) - signalWidth,
							yh - d
						);
				}
			} else if (
				quotes[i - 1]["_Direction " + sd.name] <
				quotes[i]["_Direction " + sd.name]
			) {
				color = CIQ.Studies.determineColor(sd.outputs.Uptrend);
				if (!color || color == "auto" || CIQ.isTransparent(color))
					color = stx.defaultColor;
				context.fillStyle = color;
				context.textBaseline = "top";
				var yl = stx.pixelFromPrice(quotes[i].Low, panel, yAxis);
				for (var u = 5; u <= 45; u += 10) {
					// up arrow
					if (yAxis.flipped)
						context.fillText(
							"\u25BC",
							stx.pixelFromBar(i) - signalWidth,
							yl - u
						);
					else
						context.fillText(
							"\u25B2",
							stx.pixelFromBar(i) - signalWidth,
							yl + u
						);
				}
			}
		}
		stx.endClip();
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Supertrend: {
			name: "Supertrend",
			overlay: true,
			seriesFN: CIQ.Studies.displaySupertrend,
			calculateFN: CIQ.Studies.calculateSupertrend,
			inputs: { Period: 7, Multiplier: 3 },
			outputs: { Uptrend: "#8cc176", Downtrend: "#b82c0c" },
			attributes: {
				Multiplier: { min: 0.1, step: 0.1 }
			}
		}
	});
}

};


let __js_advanced_studies_swingIndex_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"swingIndex feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateSwingIndex = function (stx, sd) {
		var T = sd.inputs["Limit Move Value"];
		if (T === null || isNaN(T)) T = 99999;
		var quotes = sd.chart.scrubbed;
		var total = 0;
		if (sd.startFrom > 1) total = quotes[sd.startFrom - 1]["Result " + sd.name];
		for (var i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			var A = Math.abs(quotes[i].High - quotes[i - 1].Close);
			var B = Math.abs(quotes[i].Low - quotes[i - 1].Close);
			var C = Math.abs(quotes[i].High - quotes[i].Low);
			var D = Math.abs(quotes[i - 1].Close - quotes[i - 1].Open);
			var K = Math.max(A, B);
			var M = Math.max(C, K);
			var R = M + 0.25 * D;
			if (M == A) R -= 0.5 * B;
			else if (M == B) R -= 0.5 * A;

			var swing =
				((50 *
					(quotes[i].Close -
						quotes[i - 1].Close +
						0.5 * (quotes[i].Close - quotes[i].Open) +
						0.25 * (quotes[i - 1].Close - quotes[i - 1].Open))) /
					R) *
				(K / T);
			if (R === 0 || T === 0) swing = 0;

			if (sd.type == "Swing") total = 0;
			total += swing;
			quotes[i]["Result " + sd.name] = total;
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Acc Swing": {
			name: "Accumulative Swing Index",
			calculateFN: CIQ.Studies.calculateSwingIndex,
			inputs: { "Limit Move Value": 0.5 }
		},
		Swing: {
			name: "Swing Index",
			calculateFN: CIQ.Studies.calculateSwingIndex,
			inputs: { "Limit Move Value": 0.5 }
		}
	});
}

};


let __js_advanced_studies_trendIntensity_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"trendIntensity feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateTrendIntensity = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";

		function computeTII(gain, loss) {
			if (Math.abs(loss) < 0.00000001) return 100;
			return 100 - 100 / (1 + gain / loss);
		}
		CIQ.Studies.MA("ma", sd.days, field, 0, "_SMA", stx, sd);
		var gain = 0,
			loss = 0,
			i,
			change,
			queue = [],
			maxLength = Math.ceil(sd.days / 2);
		for (i = Math.max(0, sd.startFrom - maxLength); i < quotes.length; i++) {
			if (!quotes[i]["_SMA " + sd.name] && quotes[i]["_SMA " + sd.name] !== 0)
				continue;
			change = quotes[i][field] - quotes[i]["_SMA " + sd.name];
			if (change < 0) loss += change * -1;
			else gain += change;
			queue.push(change);
			if (queue.length > maxLength) {
				change = queue.shift();
				if (change < 0) loss -= change * -1;
				else gain -= change;
			}
			if (i < sd.startFrom) continue;
			quotes[i]["TII " + sd.name] = computeTII(gain, loss);
		}
		CIQ.Studies.MA(
			"ema",
			sd.inputs["Signal Period"],
			"TII " + sd.name,
			0,
			"Signal",
			stx,
			sd
		);
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Trend Int": {
			name: "Trend Intensity Index",
			calculateFN: CIQ.Studies.calculateTrendIntensity,
			range: "0 to 100",
			inputs: { Period: 14, Field: "field", "Signal Period": 9 },
			outputs: { TII: "auto", Signal: "#FF0000" },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 80,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: 20,
					studyOverSoldColor: "auto"
				}
			}
		}
	});
}

};


let __js_advanced_studies_trix_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("trix feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateTRIX = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var name = sd.name;
		var fields = ["Close", "_MA1 " + name, "_MA2 " + name, "_MA3 " + name];
		for (var e = 0; e < fields.length - 1; e++) {
			CIQ.Studies.MA(
				"exponential",
				sd.days,
				fields[e],
				0,
				"_MA" + (e + 1).toString(),
				stx,
				sd
			);
		}

		var ma3 = fields[3];
		for (var i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			var q0 = quotes[i - 1][ma3];
			if (!q0) continue;
			var qima3 = quotes[i][ma3];
			if (qima3 || qima3 === 0)
				quotes[i]["Result " + name] = 100 * (qima3 / q0 - 1);
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		TRIX: {
			name: "TRIX",
			calculateFN: CIQ.Studies.calculateTRIX
		}
	});
}

};


let __js_advanced_studies_twiggsMoneyFlow_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"twiggsMoneyFlow feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateTwiggsMoneyFlow = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days) {
			sd.error = true;
			return;
		}
		var sumMoneyFlow = 0,
			sumVolume = 0;
		var startQuote = quotes[sd.startFrom - 1];
		if (startQuote) {
			if (startQuote["_sumMF " + sd.name])
				sumMoneyFlow = startQuote["_sumMF " + sd.name];
			if (startQuote["_sumV " + sd.name])
				sumVolume = startQuote["_sumV " + sd.name];
		}
		for (var i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			var trh = Math.max(quotes[i - 1].Close, quotes[i].High);
			var trl = Math.min(quotes[i - 1].Close, quotes[i].Low);
			quotes[i]["_MFV " + sd.name] =
				(quotes[i].Volume * (2 * quotes[i].Close - trh - trl)) /
				(trh - trl === 0 ? 999999 : trh - trl);
			if (i > sd.days - 1) {
				sumMoneyFlow *= (sd.days - 1) / sd.days;
				sumVolume *= (sd.days - 1) / sd.days;
			}
			sumMoneyFlow += quotes[i]["_MFV " + sd.name];
			sumVolume += quotes[i].Volume;
			if (i > sd.days - 1) {
				if (sumVolume)
					quotes[i]["Result " + sd.name] =
						sumMoneyFlow / (sumVolume > 0 ? sumVolume : 999999);
			}
			quotes[i]["_sumMF " + sd.name] = sumMoneyFlow;
			quotes[i]["_sumV " + sd.name] = sumVolume;
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Twiggs: {
			name: "Twiggs Money Flow",
			calculateFN: CIQ.Studies.calculateTwiggsMoneyFlow,
			inputs: { Period: 21 }
		}
	});
}

};


let __js_advanced_studies_typicalPrice_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */



var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"typicalPrice feature requires first activating studies feature."
	);
} else if (!CIQ.Studies.calculateTypicalPrice) {
	console.error(
		"typicalPrice feature requires first activating medianPrice feature."
	);
} else {
	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Typical Price": {
			name: "Typical Price",
			calculateFN: CIQ.Studies.calculateTypicalPrice,
			inputs: { Period: 14 }
		},
		"Weighted Close": {
			name: "Weighted Close",
			calculateFN: CIQ.Studies.calculateTypicalPrice,
			inputs: { Period: 14 }
		}
	});
}

};


let __js_advanced_studies_ulcerIndex_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"ulcerIndex feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateUlcerIndex = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		if (quotes.length < 2 * sd.days - 1) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";

		function getHV(p, x, f) {
			var h = null;
			for (var j = x - p + 1; j <= x; j++) {
				if (j < 0) continue;
				h = h === null ? quotes[j][f] : Math.max(h, quotes[j][f]);
			}
			return h;
		}
		var i;
		for (i = Math.max(sd.startFrom, sd.days - 1); i < quotes.length; i++) {
			quotes[i]["_PD2 " + sd.name] = Math.pow(
				100 * (quotes[i][field] / getHV(sd.days, i, field) - 1),
				2
			);
		}
		CIQ.Studies.MA("simple", sd.days, "_PD2 " + sd.name, 0, "_MA", stx, sd);
		for (
			i = Math.max(sd.startFrom, 2 * (sd.days - 1));
			i < quotes.length;
			i++
		) {
			var _ma = quotes[i]["_MA " + sd.name];
			if (_ma || _ma === 0) quotes[i]["Result " + sd.name] = Math.sqrt(_ma);
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Ulcer: {
			name: "Ulcer Index",
			calculateFN: CIQ.Studies.calculateUlcerIndex,
			inputs: { Period: 14, Field: "field" }
		}
	});
}

};


let __js_advanced_studies_ultimateOscillator_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"ultimateOscillator feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateUltimateOscillator = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var cycle = [
			sd.inputs["Cycle 1"],
			sd.inputs["Cycle 2"],
			sd.inputs["Cycle 3"]
		];
		var start = Math.max(cycle[0], cycle[1], cycle[2]);
		if (quotes.length < start + 1) {
			sd.error = true;
			return;
		}
		var c01 = cycle[0] * cycle[1];
		var c02 = cycle[0] * cycle[2];
		var c12 = cycle[1] * cycle[2];
		var accbp = [0, 0, 0];
		var acctr = [0, 0, 0];
		if (sd.startFrom) {
			if (quotes[sd.startFrom - 1]["_accbp " + sd.name])
				accbp = quotes[sd.startFrom - 1]["_accbp " + sd.name].slice();
			if (quotes[sd.startFrom - 1]["_acctr " + sd.name])
				acctr = quotes[sd.startFrom - 1]["_acctr " + sd.name].slice();
		}
		for (var i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			var minLC = Math.min(quotes[i].Low, quotes[i - 1].Close);
			var bp = quotes[i].Close - minLC;
			var tr = Math.max(quotes[i].High, quotes[i - 1].Close) - minLC;
			for (var x = 0; x < cycle.length; x++) {
				accbp[x] += bp;
				acctr[x] += tr;
				if (i > cycle[x]) {
					var p_minLC = Math.min(
						quotes[i - cycle[x]].Low,
						quotes[i - cycle[x] - 1].Close
					);
					var p_bp = quotes[i - cycle[x]].Close - p_minLC;
					var p_tr =
						Math.max(
							quotes[i - cycle[x]].High,
							quotes[i - cycle[x] - 1].Close
						) - p_minLC;
					accbp[x] -= p_bp;
					acctr[x] -= p_tr;
				}
			}
			quotes[i]["_accbp " + sd.name] = accbp.slice();
			quotes[i]["_acctr " + sd.name] = acctr.slice();
			if (i < start) continue;
			var numerator =
				(c12 * accbp[0]) / acctr[0] +
				(c02 * accbp[1]) / acctr[1] +
				(c01 * accbp[2]) / acctr[2];
			var denominator = c12 + c02 + c01;
			quotes[i]["Result " + sd.name] = (100 * numerator) / denominator;
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Ultimate: {
			name: "Ultimate Oscillator",
			calculateFN: CIQ.Studies.calculateUltimateOscillator,
			inputs: { "Cycle 1": 7, "Cycle 2": 14, "Cycle 3": 28 },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 70,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: 30,
					studyOverSoldColor: "auto"
				}
			}
		}
	});
}

};


let __js_advanced_studies_valuationLines_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"valuationLines feature requires first activating studies feature."
	);
} else {
	/**
	 * Calculate "val lines" study. This study does all calculations on the {studyDescriptor.chart.dataSegment}.
	 *
	 * @param {CIQ.ChartEngine} stx A chart engine instance
	 * @param {CIQ.Studies.StudyDescriptor} sd A study descriptor
	 * @param {object[]} quotes the dataSegment
	 * @memberof CIQ.Studies
	 */
	CIQ.Studies.calculateValuationLines = function (stx, sd, quotes) {
		var field = sd.inputs.Field == "field" ? "Close" : sd.inputs.Field;
		var averageType = sd.inputs["Average Type"];
		var displayAvg = sd.inputs["Display Average"];
		var displayS1 = sd.inputs["Display 1 Standard Deviation (1\u03C3)"];
		var displayS2 = sd.inputs["Display 2 Standard Deviation (2\u03C3)"];
		var displayS3 = sd.inputs["Display 3 Standard Deviation (3\u03C3)"];
		var values = [];

		for (var i = 0; i < quotes.length; ++i) {
			if (quotes[i] && !isNaN(quotes[i][field])) values.push(quotes[i][field]);
		}

		var average = (function (nums, type) {
			var len = nums.length;
			var numerator = 0,
				denominator = 0,
				i = 0;

			switch (type) {
				case "mean":
					denominator = len;
					for (; i < len; ++i) {
						numerator += nums[i];
					}
					break;
				case "harmonic":
					numerator = len;
					for (; i < len; ++i) {
						denominator += 1 / nums[i];
					}
					break;
				case "median":
					var middle = Math.floor(len / 2);
					var sorted = nums.slice().sort(function (a, b) {
						if (a > b) return 1;
						if (a < b) return -1;
						return 0;
					});

					if (len % 2 === 0) {
						numerator = sorted[middle] + sorted[middle - 1];
						denominator = 2;
					} else {
						numerator = sorted[middle];
						denominator = 1;
					}
					break;
			}

			return numerator / denominator;
		})(values, averageType);

		// logic skips the calculation if none of the stddev lines are displaying
		var stddev =
			!(displayS1 || displayS2 || displayS3) ||
			(function (nums, baseline) {
				var len = nums.length;
				var numerator = 0;

				for (var i = 0; i < len; ++i) {
					numerator += Math.pow(nums[i] - baseline, 2);
				}

				return Math.sqrt(numerator / len);
			})(values, average);

		sd.data = {
			Average: displayAvg ? [average] : null,
			"1 Standard Deviation (1\u03C3)": displayS1
				? [average + stddev, average - stddev]
				: null,
			"2 Standard Deviation (2\u03C3)": displayS2
				? [average + stddev * 2, average - stddev * 2]
				: null,
			"3 Standard Deviation (3\u03C3)": displayS3
				? [average + stddev * 3, average - stddev * 3]
				: null
		};

		var padding = stddev;
		if (!sd.parameters) sd.parameters = {};
		if (displayS3)
			sd.parameters.range = [
				average - stddev * 3 - padding,
				average + stddev * 3 + padding
			];
		else if (displayS2)
			sd.parameters.range = [
				average - stddev * 2 - padding,
				average + stddev * 2 + padding
			];
		else if (displayS1)
			sd.parameters.range = [
				average - stddev - padding,
				average + stddev + padding
			];
		else if (displayAvg)
			sd.parameters.range = [average - padding, average + padding];
		if (sd.panel) {
			var panel = stx.panels[sd.panel];
			var yAxis = stx.getYAxisByName(panel, sd.name);
			if (yAxis) {
				yAxis.decimalPlaces = panel.chart.yAxis.printDecimalPlaces;
				var parameters = { yAxis: yAxis };
				stx.calculateYAxisRange(
					panel,
					yAxis,
					sd.parameters.range[0],
					sd.parameters.range[1]
				);
				stx.createYAxis(panel, parameters);
				stx.drawYAxis(panel, parameters);
			}
		}
	};

	/**
	 * Display "val lines" study.
	 *
	 * It is possible to change how the lines appear with CSS styling.
	 * **Example:**
	 * .ciq-valuation-average-line {
	 *   border-style: solid;
	 *   border-width: 1.2px;
	 *   opacity: 0.95;
	 * }
	 * .ciq-valuation-deviation-line {
	 *   border-style: dotted;
	 *   border-width: 1px;
	 *   opacity: 0.80;
	 * }
	 *
	 * These values are used to create the params argument for {CIQ.ChartEngine#plotLine}.
	 *  - "border-style" -> "pattern"
	 *  - "border-width" -> "lineWidth"
	 *  - "opacity" -> "opacity"
	 *
	 * Average line defaults to {pattern: 'solid', lineWidth: 1, opacity: 1}
	 * Deviation lines default to {pattern: 'dashed', lineWidth: 1, opacity: 1}
	 *
	 * Suggested that whitespace be set from about 60 to 90 pixels so that the labels are
	 * clearly visible in the home position.
	 *
	 * @example
	 * var stxx = new CIQ.ChartEngine({container: document.querySelector('.chartContainer'), preferences: {whitespace: 60.5}});
	 *
	 * Alternatively, you can use yAxis labels by setting the labels parameter to "yaxis" in the studyLibrary entry.
	 *
	 * @example
	 * CIQ.Studies.studyLibrary['val lines'].parameters = {labels: 'yaxis'};
	 *
	 * @param {CIQ.ChartEngine} stx The chart object
	 * @param {CIQ.Studies.StudyDescriptor} sd The study descriptor
	 * @memberOf CIQ.Studies
	 */
	CIQ.Studies.displayValuationLines = function (stx, sd) {
		var panel = stx.panels[sd.panel];
		var yAxis = sd.getYAxis(stx);
		var context = sd.getContext(stx);
		var data = sd.data;
		var labels = sd.parameters.labels;
		var averageType = sd.inputs["Average Type"];
		var averageLabels = { mean: "AVG", median: "MED", harmonic: "HAVG" };
		var averageStyle = stx.canvasStyle("ciq-valuation-average-line");
		var deviationStyle = stx.canvasStyle("ciq-valuation-deviation-line");
		var textPadding = 3; // padding top, right, and bottom
		var textHeight = stx.getCanvasFontSize("stx_yaxis") + textPadding * 2;
		var isAvg, color, value, i, price, y, text, textWidth, plotLineParams;

		for (var key in data) {
			if (!data[key]) continue;

			isAvg = key == "Average";
			color = CIQ.Studies.determineColor(sd.outputs[key]);
			value = data[key];

			for (i = 0; i < value.length; ++i) {
				price = value[i];
				y = stx.pixelFromPrice(price, panel, yAxis);

				if (y <= panel.top || y >= panel.yAxis.bottom) continue;

				plotLineParams = isAvg
					? {
							pattern:
								averageStyle.borderStyle != "none"
									? averageStyle.borderStyle || "solid"
									: "solid",
							lineWidth: parseFloat(averageStyle.borderWidth) || 1,
							opacity: parseFloat(averageStyle.opacity) || 1,
							yAxis: yAxis
					  }
					: {
							pattern:
								deviationStyle.borderStyle != "none"
									? deviationStyle.borderStyle || "dashed"
									: "dashed",
							lineWidth: parseFloat(deviationStyle.borderWidth) || 1,
							opacity: parseFloat(deviationStyle.opacity) || 1,
							yAxis: yAxis
					  };

				stx.plotLine(
					panel.left,
					panel.right,
					y,
					y,
					color,
					"line",
					context,
					panel,
					plotLineParams
				);

				if (labels === "yaxis") {
					stx.createYAxisLabel(
						panel,
						stx.formatYAxisPrice(price, panel),
						y,
						color,
						null,
						context,
						yAxis
					);
					continue;
				}

				// additional Y padding to prevent line from overlapping text
				y += Math.floor(plotLineParams.lineWidth / 2);

				if (y + textHeight >= panel.yAxis.bottom) continue;

				text =
					(isAvg ? averageLabels[averageType] + ": " : key[0] + "\u03C3: ") +
					stx.formatYAxisPrice(price, panel);
				textWidth = context.measureText(text).width;

				var position = panel.right - textWidth - textPadding;
				if (yAxis && yAxis.position == "left")
					position = panel.left + textPadding;

				context.strokeText(text, position, y + textHeight / 2 + 0.5);
			}
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"val lines": {
			name: "Valuation Lines",
			calculateFN: function () {},
			seriesFN: function (stx, sd, quotes) {
				CIQ.Studies.calculateValuationLines(stx, sd, quotes);
				CIQ.Studies.displayValuationLines(stx, sd);
			},
			overlay: true,
			yAxisFN: function () {},
			inputs: {
				Field: "field",
				"Average Type": ["mean", "median", "harmonic"],
				"Display Average": true,
				"Display 1 Standard Deviation (1\u03C3)": false,
				"Display 2 Standard Deviation (2\u03C3)": false,
				"Display 3 Standard Deviation (3\u03C3)": false
			},
			outputs: {
				Average: "#00afed",
				"1 Standard Deviation (1\u03C3)": "#e1e1e1",
				"2 Standard Deviation (2\u03C3)": "#85c99e",
				"3 Standard Deviation (3\u03C3)": "#fff69e"
			}
		}
	});
}

};


let __js_advanced_studies_volatilityIndex_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"volatilityIndex feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateRelativeVolatility = function (stx, sd) {
		sd.days = Number(sd.inputs["Smoothing Period"]);
		var smoothing = Number(sd.inputs["STD Period"]);
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + smoothing) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		function computeRVI(avgGain, avgLoss) {
			if (avgGain + avgLoss === 0) return 100;
			return (100 * avgGain) / (avgGain + avgLoss);
		}
		sd.std = new CIQ.Studies.StudyDescriptor(sd.name, "sdev", sd.panel);
		sd.std.chart = sd.chart;
		sd.std.days = smoothing;
		sd.std.startFrom = sd.startFrom;
		sd.std.inputs = { Field: field, "Standard Deviations": 1, Type: "ma" };
		sd.std.outputs = { _STD: null };
		CIQ.Studies.calculateStandardDeviation(stx, sd.std);

		var avgGain = 0;
		var avgLoss = 0;
		if (sd.startFrom > 1) {
			avgGain = quotes[sd.startFrom - 1]["_avgG " + sd.name] || 0;
			avgLoss = quotes[sd.startFrom - 1]["_avgL " + sd.name] || 0;
		}
		for (var i = Math.max(sd.startFrom, sd.days); i < quotes.length; i++) {
			var quote = quotes[i],
				quote1 = quotes[i - 1];
			if (!quote[field] && quote[field] !== 0) continue;
			if (!quote1[field] && quote1[field] !== 0) continue;
			if (!quote["_STD " + sd.name] && quote["_STD " + sd.name] !== 0) continue;
			if (quote[field] > quote1[field]) {
				avgGain =
					(avgGain * (sd.days - 1) + quote["_STD " + sd.name]) / sd.days;
				avgLoss = (avgLoss * (sd.days - 1)) / sd.days;
			} else {
				avgLoss =
					(avgLoss * (sd.days - 1) + quote["_STD " + sd.name]) / sd.days;
				avgGain = (avgGain * (sd.days - 1)) / sd.days;
			}
			quote["Rel Vol " + sd.name] = computeRVI(avgGain, avgLoss);
			quote["_avgG " + sd.name] = avgGain;
			quote["_avgL " + sd.name] = avgLoss;
		}
		sd.zoneOutput = "Rel Vol";
	};

	CIQ.Studies.calculateHistoricalVolatility = function (stx, sd) {
		function intFactor(days) {
			if (isNaN(days)) days = 365;
			if (stx.layout.interval == "day") return days;
			else if (stx.layout.interval == "week") return 52;
			else if (stx.layout.interval == "month") return 12;
			return days;
		}
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		var mult = sd.inputs["Standard Deviations"];
		if (mult < 0) mult = 1;
		var annualizingFactor =
			100 * Math.sqrt(intFactor(sd.inputs["Days Per Year"])) * mult;

		var arr = [];
		var accum = 0;
		if (sd.startFrom > 1) {
			accum = quotes[sd.startFrom - 1]["_state " + sd.name][0];
			arr = quotes[sd.startFrom - 1]["_state " + sd.name][1].slice();
		}
		for (var i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			var denom = quotes[i - 1][field];
			if (denom) {
				var ln = Math.log(quotes[i][field] / denom);
				arr.push(ln);
				accum += ln;
				if (i >= sd.days) {
					var d2 = 0;
					accum /= sd.days;
					for (var j = 0; j < arr.length; j++) {
						d2 += Math.pow(arr[j] - accum, 2);
					}
					accum *= sd.days;
					accum -= arr.shift();
					quotes[i]["Result " + sd.name] =
						Math.sqrt(d2 / sd.days) * annualizingFactor;
				}
			}
			quotes[i]["_state " + sd.name] = [accum, arr.slice()];
		}
	};

	CIQ.Studies.calculateVolatilityCone = function (stx, sd) {
		const { periodicity, interval } = stx.layout;
		const studyName = sd.study ? sd.study.name : sd.type;
		if (!CIQ.ChartEngine.isDailyInterval(interval)) {
			sd.error = `${studyName} is not supported for intraday periodicities`;
			return;
		}
		let periods = Number(sd.inputs["Projection Bars"]);
		let totalIncrements = Number(sd.inputs["Days Per Year"]);

		if (interval == "week") totalIncrements = 52;
		if (interval == "month") totalIncrements = 12;
		periods = Math.min(periods, totalIncrements);

		const quotes = sd.chart.scrubbed;
		let field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";

		let start = quotes.length - 1;
		while (start > 0 && quotes[start][field] === undefined) {
			start--;
		}

		const startDate = quotes[start].DT;
		const currentValue = quotes[start][field];
		const implVol = quotes[start].implVol;
		const oneDay = 24 * 60 * 60 * 1000;

		const useHistoric = sd.inputs["Volatility source"] === "historical";
		if (!useHistoric && implVol === undefined) {
			sd.error = `${studyName} Study: Implied Volatility source data is not available`;
			return;
		}

		sd._graphs = [68, 95].filter(
			(value, index) => sd.inputs[`Probability ${value}% (${index + 1}σ)`]
		);

		// Add qoutes placeholders
		const futureTicks = [];
		if (!useHistoric && interval === "day" && periodicity === 1) {
			const expiryDates =
				quotes[start].expiryDates ||
				Array.from(
					new Set(
						Object.values(quotes[start].optionChain || {})
							.map(
								({ expiration }) =>
									+((expiration && expiration.value) || expiration || 0)
							)
							.filter((expiration) => expiration)
					)
				);
			sd._expiryDates = expiryDates.map((dt) => ({
				dt: new Date(dt)
			}));
		} else {
			sd._expiryDates = null;
		}

		for (let i = 0; i <= periods; i++) {
			if (quotes[i + start]) continue;
			futureTicks.push({
				[(sd.inputs["Probability 68% (1σ)"] && "Result 68% Upper " + sd.name) ||
				undefined]: 0,
				[(sd.inputs["Probability 95% (2σ)"] && "Result 95% Upper " + sd.name) ||
				undefined]: 0
			});
		}
		sd.appendFutureTicks(stx, futureTicks);
		if (useHistoric) {
			CIQ.Studies.calculateHistoricalVolatility(stx, sd);
		}
		const volatilityValue = useHistoric
			? quotes[start][`Result ${sd.name}`] / 100
			: implVol;

		for (let i = 0; i <= periods; i++) {
			const quote = quotes[i + start];
			const increments =
				totalIncrements < 365 ? i : Math.round((quote.DT - startDate) / oneDay);
			const diff =
				currentValue *
				volatilityValue *
				Math.sqrt(increments / totalIncrements);
			const { DT } = quote;

			sd._graphs.forEach(
				function (graph) {
					const { quote, diff, currentValue, sd } = this;
					const upper = currentValue + (graph < 95 ? 1 : 2) * diff;
					const lower = currentValue - (graph < 95 ? 1 : 2) * diff;
					quote[`Result ${graph}% Upper ${sd.name}`] = upper;
					quote[`Result ${graph}% Lower ${sd.name}`] = lower;

					(sd._expiryDates || []).forEach((item) => {
						if (item.dt < startDate) return;

						const diff = Math.abs(item.dt - DT);
						if (diff < oneDay) {
							item.Upper = upper;
							item.Lower = lower;
							item.DT = DT;
						}
					});
				},
				{ quote, diff, currentValue, sd }
			);
		}

		sd.outputMap = {};
		sd._graphs.forEach((graph) => {
			sd.outputMap[`Result ${graph}% Upper ${sd.name}`] = "Color";
			sd.outputMap[`Result ${graph}% Lower ${sd.name}`] = "Color";
		});
	};

	CIQ.Studies.displayVolatilityCone = function (stx, sd, quotes) {
		if (sd.error) return;
		const color = CIQ.Studies.determineColor(sd.outputs.Color);

		const panel = stx.panels[sd.panel];
		if (!panel || panel.hidden) return;

		const yAxis = sd.getYAxis(stx);
		const parameters = {
			topColor: color,
			bottomColor: color,
			skipTransform: panel.name != sd.chart.name,
			topAxis: yAxis,
			bottomAxis: yAxis,
			opacity: 0.3
		};
		if (!sd.highlight && stx.highlightedDraggable) parameters.opacity *= 0.3;
		sd._graphs.forEach((probability) => {
			parameters.topBand = `Result ${probability}% Upper ${sd.name}`;
			parameters.bottomBand = `Result ${probability}% Lower ${sd.name}`;
			if (sd.inputs.Fill) {
				CIQ.fillIntersecting(stx, sd.panel, parameters);
			}
			CIQ.Studies.displayIndividualSeriesAsLine(
				stx,
				sd,
				panel,
				parameters.topBand,
				quotes
			);
			CIQ.Studies.displayIndividualSeriesAsLine(
				stx,
				sd,
				panel,
				parameters.bottomBand,
				quotes
			);
		});
		if (sd._expiryDates) {
			const context = stx.chart.context;
			stx.startClip();
			context.beginPath();
			sd._expiryDates.forEach((item) => {
				if (!item.DT) return;
				const x = stx.pixelFromDate(item.DT);
				const y0 = stx.pixelFromPrice(item.Upper, panel);
				const y1 = stx.pixelFromPrice(item.Lower, panel);
				stx.plotLine({
					x0: x,
					x1: x,
					y0,
					y1,
					color,
					pattern: "dashed"
				});
				context.moveTo(x, y0);
				context.arc(x, y0, 3, 0, Math.PI * 2, false);
				context.moveTo(x, y1);
				context.arc(x, y1, 3, 0, Math.PI * 2, false);
				context.fillStyle = color;
				context.fill();
			});
			stx.endClip();
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Hist Vol": {
			name: "Historical Volatility",
			calculateFN: CIQ.Studies.calculateHistoricalVolatility,
			inputs: {
				Period: 10,
				Field: "field",
				"Days Per Year": [252, 365],
				"Standard Deviations": 1
			},
			attributes: {
				"Standard Deviations": { min: 0.1, step: 0.1 }
			}
		},
		"Rel Vol": {
			name: "Relative Volatility",
			range: "0 to 100",
			calculateFN: CIQ.Studies.calculateRelativeVolatility,
			inputs: { Field: "field", "STD Period": 10, "Smoothing Period": 14 },
			outputs: { "Rel Vol": "auto" },
			centerline: 50,
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 70,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: 30,
					studyOverSoldColor: "auto"
				}
			}
		},
		"Volatility Cone": {
			name: "Volatility Cone",
			overlay: true,
			calculateFN: CIQ.Studies.calculateVolatilityCone,
			seriesFN: CIQ.Studies.displayVolatilityCone,
			inputs: {
				"Volatility source": ["historical", "implied"],
				"Probability 68% (1σ)": true,
				"Probability 95% (2σ)": false,
				"Projection Bars": 20,
				"Days Per Year": [252, 365],
				Field: "field",
				Period: 10,
				"Standard Deviations": 1,
				Fill: true
			},
			outputs: {
				Color: "#3a627d"
			},
			panelSelect: false,
			attributes: {
				"Volatility source": {
					hidden: function () {
						return !CIQ.Studies.impliedVolatilityAvailable;
					}
				},
				Field: {
					hidden: function () {
						return this.inputs["Volatility source"] === "Implied";
					}
				},
				"Standard Deviations": {
					hidden: function () {
						return this.inputs["Volatility source"] === "Implied";
					}
				},
				yaxisDisplayValue: { hidden: true },
				panelName: { hidden: true },
				flippedEnabled: { hidden: true },
				underlayEnabled: { hidden: true }
			}
		}
	});
}

};


let __js_advanced_studies_volumeProfile_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


const CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"volumeProfile feature requires first activating studies feature."
	);
} else {
	/**
	 * Creates a volume profile underlay for the chart. The underlay is always 25% of the width of the chart.
	 * The color is determined by the 'sd.outputs["Bars Color"]' parameter and opacity and border colors can be controlled with the class stx_volume_profile
	 * NOTE: Volume Profile will only display on the chart panel sharing the yAxis.
	 */

	CIQ.Studies.displayVolumeProfile = function (stx, sd, quotes) {
		if (!stx || !stx.chart.dataSet) return;
		const cssSelector = "stx_volume_profile";
		const fontStyle = "stx-float-date";
		const context = sd.getContext(stx);
		const { chart } = stx;
		const { panel } = chart;
		const { yAxis } = panel;
		const { flipped } = yAxis;
		let { highValue, lowValue } = chart;

		// for backwards compatibility check sd.parameters first
		let {
			displayBorder = sd.inputs["Display Border"],
			displayVolume = sd.inputs["Display Volume"],
			widthPercentage = sd.inputs["Width Percentage"],
			numberBars: priceBuckets = sd.inputs["Price Buckets"]
		} = sd.parameters;

		// set defaults
		if (displayBorder !== false) displayBorder = true;
		if (displayVolume !== true) displayVolume = false;
		if (!widthPercentage || widthPercentage < 0) widthPercentage = 0.25;
		if (!priceBuckets || priceBuckets < 0) priceBuckets = 30;
		priceBuckets = Math.ceil(priceBuckets);

		const interval = (highValue - lowValue) / priceBuckets;
		if (interval === 0) return;
		const priceVolArray = [];

		if (flipped) [highValue, lowValue] = [lowValue, highValue];
		const direction = flipped ? -1 : 1;

		for (
			let rangeStart = lowValue, i = 0;
			i <= priceBuckets;
			rangeStart += interval * direction, i++
		) {
			priceVolArray.push([rangeStart, 0]);
		}

		let maxVolume = 0;

		for (let i = 0; i < quotes.length; i++) {
			const quote = quotes[i];
			if (quote === null) continue;

			const { Volume } = quote;
			if (!Volume) continue;
			const { High, Low } = quote.transform || quote;
			const rangesWithVol = [];
			let rangeBottom = priceVolArray[0][0];
			let rangeTop = null;

			for (let j = 1; j < priceVolArray.length; j++) {
				rangeTop = priceVolArray[j][0];

				const lowFallsInRange = Low >= rangeBottom && Low <= rangeTop;
				const highFallsInRange = High >= rangeBottom && High <= rangeTop;
				const barEnvelopesRange = Low < rangeBottom && High > rangeTop;

				if (lowFallsInRange || highFallsInRange || barEnvelopesRange) {
					rangesWithVol.push(j);
				}

				rangeBottom = rangeTop;
			}

			if (rangesWithVol.length) {
				const perRangeVol = Volume / rangesWithVol.length;
				for (let j = 0; j < rangesWithVol.length; j++) {
					let newVol = (priceVolArray[rangesWithVol[j]][1] += perRangeVol);
					if (newVol > maxVolume) maxVolume = newVol;
				}
			}
		}

		if (maxVolume === 0) {
			stx.displayErrorAsWatermark(
				"chart",
				stx.translateIf("Not enough data to render the Volume Profile")
			);
			return;
		}

		stx.setStyle(
			cssSelector,
			"color",
			CIQ.Studies.determineColor(sd.outputs["Bars Color"])
		);

		const txtHeight = stx.getCanvasFontSize(fontStyle);
		const borderColor = stx.canvasStyle(cssSelector).borderTopColor;
		const bordersOn = displayBorder && !CIQ.isTransparent(borderColor);

		stx.canvasFont(fontStyle, context);
		drawBars();
		if (bordersOn) drawBars(true);
		context.globalAlpha = 1;

		function drawBars(borders) {
			stx.canvasColor(cssSelector);
			context.beginPath();

			const align = (val) => Math.round(val);
			const pixelFor = (val) => align(stx.pixelFromTransformedValue(val));

			const maxBarHeight = align(chart.width * widthPercentage); // pixels for highest bar
			const barBottom = align(chart.right) - 2.5;
			let prevBarTop = barBottom;
			let [rangeBottom] = priceVolArray[0]; // first entry contains no volume by design

			for (let i = 1; i < priceVolArray.length; i++) {
				const [rangeTop, rangeVolume] = priceVolArray[i];

				if (rangeVolume) {
					const barHeight = (rangeVolume * maxBarHeight) / maxVolume;
					const barTop = align(barBottom - barHeight) + (borders ? -0.5 : 0);
					const rangeTopRaw = pixelFor(rangeTop) + (borders ? 0.5 : 1);
					const rangeBottomRaw = pixelFor(rangeBottom) + (borders ? 0.5 : 0);
					const rangeTopPixel = Math.max(rangeTopRaw, yAxis.top);
					const rangeBottomPixel = Math.min(rangeBottomRaw, yAxis.bottom);
					const barIsInFrame =
						rangeTopPixel <= yAxis.bottom && rangeBottomPixel >= yAxis.top;

					if (barIsInFrame) {
						context.moveTo(barBottom, rangeBottomPixel);
						context.lineTo(barBottom, rangeTopPixel);
						context.lineTo(barTop, rangeTopPixel);
						context.lineTo(barTop, rangeBottomPixel);
						if (borders) {
							if (i == 1 || prevBarTop > barTop) {
								// draw down to the top of the previous bar, so that we don't overlap strokes
								context.lineTo(prevBarTop, rangeBottomPixel);
							}
						} else {
							context.lineTo(barBottom, rangeBottomPixel);
							if (displayVolume) {
								const txt = CIQ.condenseInt(rangeVolume);
								const rangeHeight = rangeBottomPixel - rangeTopPixel;
								if (txtHeight <= rangeHeight - 2) {
									let width;
									try {
										({ width } = context.measureText(txt));
									} catch (e) {
										width = 0;
									} // Firefox doesn't like this in hidden iframe
									context.textBaseline = "top";
									const prevColor = context.fillStyle;
									context.fillStyle = borderColor;
									context.fillText(
										txt,
										barTop - width - 3,
										rangeTopPixel + (rangeHeight / 2 - txtHeight / 2)
									);
									context.fillStyle = prevColor;
								}
							}
						}
					}

					prevBarTop = barTop;
				} else {
					prevBarTop = barBottom; // missing bar, reset to baseline
				}

				rangeBottom = rangeTop;
			}

			if (!sd.highlight && stx.highlightedDraggable) context.globalAlpha *= 0.3;
			if (!borders) context.fill();
			context.strokeStyle = borderColor;
			if (borders) context.stroke();
			context.closePath();
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"vol profile": {
			name: "Volume Profile",
			underlay: true,
			seriesFN: CIQ.Studies.displayVolumeProfile,
			calculateFN: null,
			inputs: {
				"Display Border": true,
				"Display Volume": false,
				"Price Buckets": 30,
				"Width Percentage": 0.25
			},
			outputs: { "Bars Color": "#b64a96" },
			customRemoval: true,
			attributes: {
				yaxisDisplayValue: { hidden: true },
				panelName: { hidden: true },
				flippedEnabled: { hidden: true }
			}
		}
	});
}

};


let __js_advanced_studies_volumeStudies_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"volumeStudies feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateOnBalanceVolume = function (stx, sd) {
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		var minTick = sd.inputs["Min Tick Value"];
		var obv = false;
		if (!minTick && minTick !== 0) {
			obv = true;
			minTick = 0;
		}
		var quotes = sd.chart.scrubbed,
			direction = 0;
		var quote, quote1;
		for (var i = sd.startFrom; i < quotes.length; i++) {
			quote = quotes[i];
			if (!i || !quote[field]) continue;
			if (quotes[i - 1][field]) quote1 = quotes[i - 1];
			if (!quote1) continue;

			if (quote[field] - quote1[field] > minTick) direction = 1;
			else if (quote1[field] - quote[field] > minTick) direction = -1;
			else if (obv) direction = 0;

			var total = quote1["Result " + sd.name];
			if (!total) total = 0;
			total += quote.Volume * direction;
			quote["Result " + sd.name] = total;
		}
	};

	CIQ.Studies.calculatePriceVolumeTrend = function (stx, sd) {
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";

		var quotes = sd.chart.scrubbed;
		var total = 0;
		if (sd.startFrom > 1) {
			total = quotes[sd.startFrom - 1]["Result " + sd.name];
		}
		for (var i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			if (!quotes[i][field]) continue;
			if (!quotes[i - 1][field]) continue;

			total +=
				(quotes[i].Volume * (quotes[i][field] - quotes[i - 1][field])) /
				quotes[i - 1][field];
			quotes[i]["Result " + sd.name] = total;
		}
	};

	CIQ.Studies.calculateVolumeIndex = function (stx, sd) {
		var field = sd.inputs.Field;
		if (!field || field == "field") field = "Close";
		var quotes = sd.chart.scrubbed;
		if (quotes.length < sd.days + 1) {
			sd.error = true;
			return;
		}
		var total = 100;
		if (sd.startFrom > 1) total = quotes[sd.startFrom - 1]["Index " + sd.name];
		for (var i = Math.max(1, sd.startFrom); i < quotes.length; i++) {
			var val = quotes[i][field],
				vol = quotes[i].Volume;
			if (val && typeof val == "object") {
				vol = val.Volume;
				val = val[sd.subField];
			}
			var val1 = quotes[i - 1][field],
				vol1 = quotes[i - 1].Volume;
			if (val1 && typeof val1 == "object") {
				vol1 = val1.Volume;
				val1 = val1[sd.subField];
			}
			if (!val) continue;
			if (!val1) continue;
			if (
				(sd.type == "Pos Vol" && vol > vol1) ||
				(sd.type == "Neg Vol" && vol < vol1)
			) {
				total *= val / val1;
			}
			quotes[i]["Index " + sd.name] = total;
		}
		CIQ.Studies.MA(
			sd.inputs["Moving Average Type"],
			sd.days,
			"Index " + sd.name,
			0,
			"MA",
			stx,
			sd
		);
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"Neg Vol": {
			name: "Negative Volume Index",
			calculateFN: CIQ.Studies.calculateVolumeIndex,
			inputs: { Period: 255, Field: "field", "Moving Average Type": "ma" },
			outputs: { Index: "auto", MA: "#FF0000" }
		},
		"On Bal Vol": {
			name: "On Balance Volume",
			calculateFN: CIQ.Studies.calculateOnBalanceVolume,
			inputs: {}
		},
		"Pos Vol": {
			name: "Positive Volume Index",
			calculateFN: CIQ.Studies.calculateVolumeIndex,
			inputs: { Period: 255, Field: "field", "Moving Average Type": "ma" },
			outputs: { Index: "auto", MA: "#FF0000" }
		},
		"Price Vol": {
			name: "Price Volume Trend",
			calculateFN: CIQ.Studies.calculatePriceVolumeTrend,
			inputs: { Field: "field" }
		},
		"Trade Vol": {
			name: "Trade Volume Index",
			calculateFN: CIQ.Studies.calculateOnBalanceVolume,
			inputs: { "Min Tick Value": 0.5 }
		},
		"Vol ROC": {
			name: "Volume Rate of Change",
			calculateFN: function (stx, sd) {
				if (CIQ.Studies.calculateRateOfChange)
					CIQ.Studies.calculateRateOfChange(stx, sd);
				else {
					console.error(
						"Volume Rate of Change study requires first activating momentum feature."
					);
					CIQ.Studies.calculateRateOfChange = function (stx, sd) {};
				}
			},
			parameters: {
				init: { isVolume: true }
			}
		},
		"vol undr": {
			name: "Volume Underlay",
			underlay: true,
			range: "0 to max",
			yAxis: {
				ground: true,
				initialMarginTop: 0,
				position: "none",
				heightFactor: 0.25
			},
			seriesFN: CIQ.Studies.createVolumeChart,
			calculateFN: CIQ.Studies.calculateVolume,
			inputs: {},
			outputs: { "Up Volume": "#8cc176", "Down Volume": "#b82c0c" },
			customRemoval: true,
			removeFN: function (stx, sd) {
				stx.layout.volumeUnderlay = false;
				stx.changeOccurred("layout");
			},
			attributes: {
				panelName: { hidden: true }
			}
		}
	});
}

};


let __js_advanced_studies_vortex_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error("vortex feature requires first activating studies feature.");
} else {
	CIQ.Studies.calculateVortex = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var period = sd.days;
		if (quotes.length < period + 1) {
			sd.error = true;
			return;
		}
		var total = { tr: 0, vmPlus: 0, vmMinus: 0 };
		if (sd.startFrom > 1) {
			total = CIQ.clone(quotes[sd.startFrom - 1]["_totals " + sd.name]);
		}
		for (var i = Math.max(sd.startFrom, 1); i < quotes.length; i++) {
			var prices = quotes[i];
			var pd = quotes[i - 1];
			var vmPlus = Math.abs(prices.High - pd.Low);
			var vmMinus = Math.abs(prices.Low - pd.High);
			var trueRange =
				Math.max(prices.High, pd.Close) - Math.min(prices.Low, pd.Close);
			total.tr += trueRange;
			total.vmPlus += vmPlus;
			total.vmMinus += vmMinus;
			if (i > period) {
				total.tr -= quotes[i - period]["_True Range " + sd.name];
				total.vmPlus -= quotes[i - period]["_VMPlus " + sd.name];
				total.vmMinus -= quotes[i - period]["_VMMinus " + sd.name];
			}
			prices["_True Range " + sd.name] = trueRange;
			prices["_VMPlus " + sd.name] = vmPlus;
			prices["_VMMinus " + sd.name] = vmMinus;
			if (i >= period) {
				prices["+VI " + sd.name] = total.vmPlus / total.tr;
				prices["-VI " + sd.name] = total.vmMinus / total.tr;
			}
			prices["_totals " + sd.name] = CIQ.clone(total);
		}
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		Vortex: {
			name: "Vortex Indicator",
			calculateFN: CIQ.Studies.calculateVortex,
			centerline: 1,
			outputs: { "+VI": "#00FF00", "-VI": "#FF0000" },
			parameters: {
				init: {
					studyOverZonesEnabled: true,
					studyOverBoughtValue: 1.1,
					studyOverBoughtColor: "auto",
					studyOverSoldValue: 0.9,
					studyOverSoldColor: "auto"
				}
			},
			attributes: {
				studyOverBoughtValue: { min: 1, step: "0.01" },
				studyOverSoldValue: { max: 1, step: "0.01" }
			}
		}
	});
}

};


let __js_advanced_studies_williamsMFI_ = (_exports) => {

/* global _CIQ, _timezoneJS, _SplinePlotter */


var CIQ = typeof _CIQ !== "undefined" ? _CIQ : _exports.CIQ;

if (!CIQ.Studies) {
	console.error(
		"williamsMFI feature requires first activating studies feature."
	);
} else {
	CIQ.Studies.calculateMFI = function (stx, sd) {
		var quotes = sd.chart.scrubbed;
		var hist,
			high = 0;
		var factor = sd.inputs["Scale Factor"];
		if (!factor) factor = sd.study.inputs["Scale Factor"];
		var scale = Math.pow(10, Number(factor));
		if (sd.startFrom > 1) high = quotes[sd.startFrom - 1]["_high " + sd.name];
		var i;
		for (i = sd.startFrom; i < quotes.length; i++) {
			if (!quotes[i]) continue;
			if (quotes[i].Volume) {
				quotes[i][sd.name + "_hist"] = hist =
					(scale * (quotes[i].High - quotes[i].Low)) / quotes[i].Volume;
				quotes[i]["_high " + sd.name] = high = Math.max(high, hist);
			}
		}
		sd.outputMap = {};
		sd.outputMap[sd.name + "_hist"] = "";
	};

	CIQ.Studies.displayMFI = function (stx, sd, quotes) {
		var panel = stx.panels[sd.panel],
			context = sd.getContext(stx);
		var yAxis = sd.getYAxis(stx);

		var y = yAxis.flipped ? yAxis.top : yAxis.bottom;

		var myWidth = stx.layout.candleWidth - 2;
		if (myWidth < 2) myWidth = 1;

		var green = CIQ.Studies.determineColor(sd.outputs.Green);
		var fade = CIQ.Studies.determineColor(sd.outputs.Fade);
		var fake = CIQ.Studies.determineColor(sd.outputs.Fake);
		var squat = CIQ.Studies.determineColor(sd.outputs.Squat);
		stx.canvasColor("stx_histogram");
		if (!sd.underlay) context.globalAlpha = 1;
		context.fillStyle = "#CCCCCC";
		stx.startClip(sd.panel);
		if (!sd.highlight && stx.highlightedDraggable) context.globalAlpha *= 0.3;
		for (var i = 0; i < quotes.length; i++) {
			var quote = quotes[i],
				quote_1 = quotes[i - 1];
			if (!quote_1)
				quote_1 = stx.getPreviousBar(stx.chart, sd.name + "_hist", i);
			if (!quote) continue;
			if (!quote_1);
			else if (quote_1[sd.name + "_hist"] < quote[sd.name + "_hist"]) {
				if (quote_1.Volume < quote.Volume) context.fillStyle = green;
				else if (quote_1.Volume > quote.Volume) context.fillStyle = fake;
			} else if (quote_1[sd.name + "_hist"] > quote[sd.name + "_hist"]) {
				if (quote_1.Volume < quote.Volume) context.fillStyle = squat;
				else if (quote_1.Volume > quote.Volume) context.fillStyle = fade;
			}
			if (quote.candleWidth)
				myWidth = Math.floor(Math.max(1, quote.candleWidth - 2));
			context.fillRect(
				Math.floor(stx.pixelFromBar(i, panel.chart) - myWidth / 2),
				Math.floor(y),
				Math.floor(myWidth),
				Math.floor(
					stx.pixelFromPrice(quote[sd.name + "_hist"], panel, yAxis) - y
				)
			);
		}
		stx.endClip();
	};

	CIQ.Studies.studyLibrary = CIQ.extend(CIQ.Studies.studyLibrary, {
		"W MFI": {
			name: "Market Facilitation Index",
			seriesFN: CIQ.Studies.displayMFI,
			calculateFN: CIQ.Studies.calculateMFI,
			yAxis: { ground: true },
			range: "0 to max",
			inputs: { "Scale Factor": 6 },
			outputs: {
				Green: "#8bc176",
				Fade: "#ab611f",
				Fake: "#5f7cb8",
				Squat: "#ffd0cf"
			}
		}
	});
}

};

/* eslint-disable */ /* jshint ignore:start */ /* ignore jslint start */
p5DUH[315305]=(function(){var Z_=2;for(;Z_ !== 9;){switch(Z_){case 2:Z_=typeof globalThis === '\x6f\x62\u006a\x65\x63\x74'?1:5;break;case 1:return globalThis;break;case 5:var S7;try{var x6=2;for(;x6 !== 6;){switch(x6){case 7:delete F2['\u005a\x50\x58\u0069\x32'];x6=6;break;case 9:delete S7['\x53\x31\x24\x68\u004c'];var F2=Object['\u0070\u0072\x6f\u0074\u006f\x74\u0079\x70\u0065'];x6=7;break;case 3:throw "";x6=9;break;case 4:x6=typeof S1$hL === '\u0075\u006e\u0064\x65\x66\x69\u006e\u0065\u0064'?3:9;break;case 2:Object['\u0064\x65\u0066\x69\x6e\u0065\u0050\u0072\x6f\u0070\x65\u0072\u0074\x79'](Object['\x70\u0072\u006f\x74\x6f\u0074\x79\u0070\u0065'],'\u005a\u0050\u0058\u0069\u0032',{'\u0067\x65\x74':function(){return this;},'\u0063\u006f\x6e\x66\u0069\x67\x75\x72\u0061\x62\u006c\x65':true});S7=ZPXi2;S7['\x53\x31\u0024\x68\x4c']=S7;x6=4;break;}}}catch(i8){S7=window;}return S7;break;}}})();k8qZTa(p5DUH[315305]);function p5DUH(){}p5DUH[261934]=true;p5DUH.h4=function(){return typeof p5DUH[425057].f8fTrL6 === 'function'?p5DUH[425057].f8fTrL6.apply(p5DUH[425057],arguments):p5DUH[425057].f8fTrL6;};p5DUH[122786]=(function(){var t2=2;for(;t2 !== 9;){switch(t2){case 3:return g3[1];break;case 2:var g3=[arguments];g3[4]=undefined;g3[1]={};g3[1].D8cbclS=function(){var X5=2;for(;X5 !== 90;){switch(X5){case 57:X5=Z7[74] < Z7[9].length?56:69;break;case 7:Z7[2]=Z7[8];Z7[5]={};Z7[5].C0=['E3'];X5=13;break;case 69:X5=(function(Z3){var r4=2;for(;r4 !== 22;){switch(r4){case 2:var G4=[arguments];r4=1;break;case 1:r4=G4[0][0].length === 0?5:4;break;case 7:r4=G4[8] < G4[0][0].length?6:18;break;case 5:return;break;case 18:G4[7]=false;r4=17;break;case 4:G4[9]={};G4[5]=[];G4[8]=0;r4=8;break;case 17:G4[8]=0;r4=16;break;case 11:G4[9][G4[4][Z7[37]]].t+=true;r4=10;break;case 16:r4=G4[8] < G4[5].length?15:23;break;case 19:G4[8]++;r4=7;break;case 6:G4[4]=G4[0][0][G4[8]];r4=14;break;case 12:G4[5].s_uXl(G4[4][Z7[37]]);r4=11;break;case 23:return G4[7];break;case 15:G4[6]=G4[5][G4[8]];G4[3]=G4[9][G4[6]].h / G4[9][G4[6]].t;r4=26;break;case 24:G4[8]++;r4=16;break;case 10:r4=G4[4][Z7[91]] === Z7[85]?20:19;break;case 8:G4[8]=0;r4=7;break;case 14:r4=typeof G4[9][G4[4][Z7[37]]] === 'undefined'?13:11;break;case 25:G4[7]=true;r4=24;break;case 13:G4[9][G4[4][Z7[37]]]=(function(){var j$=2;for(;j$ !== 9;){switch(j$){case 2:var h5=[arguments];h5[9]={};h5[9].h=0;h5[9].t=0;return h5[9];break;}}}).g7_WI(this,arguments);r4=12;break;case 20:G4[9][G4[4][Z7[37]]].h+=true;r4=19;break;case 26:r4=G4[3] >= 0.5?25:24;break;}}})(Z7[15])?68:67;break;case 4:Z7[9]=[];Z7[8]={};Z7[8].C0=['l$'];Z7[8].k7=function(){var J$=function(){return btoa('=');};var q5=!(/\x62\164\x6f\u0061/).n7IvQ(J$ + []);return q5;};X5=7;break;case 73:Z7[20][Z7[91]]=Z7[88];Z7[15].s_uXl(Z7[20]);X5=71;break;case 10:Z7[7].C0=['l$'];Z7[7].k7=function(){var x4=function(){return ('a').anchor('b');};var d0=(/(\u003c|\u003e)/).n7IvQ(x4 + []);return d0;};Z7[6]=Z7[7];Z7[4]={};Z7[4].C0=['E3'];X5=16;break;case 13:Z7[5].k7=function(){var m6=false;var Y4=[];try{for(var f8 in console)Y4.s_uXl(f8);m6=Y4.length === 0;}catch(a6){}var p2=m6;return p2;};Z7[3]=Z7[5];Z7[7]={};X5=10;break;case 41:Z7[71].k7=function(){var e8=typeof B0hyFW === 'function';return e8;};Z7[41]=Z7[71];Z7[87]={};X5=38;break;case 5:return 76;break;case 71:Z7[77]++;X5=76;break;case 31:Z7[80]=Z7[76];Z7[44]={};Z7[44].C0=['E3'];Z7[44].k7=function(){var T5=typeof j2MkxG === 'function';return T5;};X5=44;break;case 32:Z7[76].k7=function(){var t0=function(){return ('ab').charAt(1);};var V1=!(/\x61/).n7IvQ(t0 + []);return V1;};X5=31;break;case 53:Z7[9].s_uXl(Z7[80]);Z7[9].s_uXl(Z7[59]);Z7[9].s_uXl(Z7[35]);Z7[9].s_uXl(Z7[41]);Z7[9].s_uXl(Z7[1]);Z7[9].s_uXl(Z7[90]);X5=47;break;case 67:g3[4]=21;return 66;break;case 1:X5=g3[4]?5:4;break;case 75:Z7[20]={};Z7[20][Z7[37]]=Z7[86][Z7[97]][Z7[77]];X5=73;break;case 2:var Z7=[arguments];X5=1;break;case 44:Z7[54]=Z7[44];Z7[71]={};Z7[71].C0=['E3'];X5=41;break;case 16:Z7[4].k7=function(){var i3=typeof E50uPG === 'function';return i3;};Z7[1]=Z7[4];Z7[51]={};Z7[51].C0=['l$'];X5=25;break;case 38:Z7[87].C0=['l$'];Z7[87].k7=function(){var x9=function(){return unescape('%3D');};var R7=(/\u003d/).n7IvQ(x9 + []);return R7;};Z7[59]=Z7[87];Z7[9].s_uXl(Z7[2]);X5=53;break;case 68:X5=45?68:67;break;case 47:Z7[9].s_uXl(Z7[6]);Z7[9].s_uXl(Z7[3]);Z7[9].s_uXl(Z7[54]);Z7[15]=[];Z7[85]='w1';X5=63;break;case 77:Z7[77]=0;X5=76;break;case 56:Z7[86]=Z7[9][Z7[74]];try{Z7[88]=Z7[86][Z7[81]]()?Z7[85]:Z7[13];}catch(W8){Z7[88]=Z7[13];}X5=77;break;case 62:Z7[97]='C0';Z7[91]='h3';Z7[81]='k7';Z7[37]='M1';X5=58;break;case 21:Z7[28].k7=function(){var R4=function(){return ('xy').substring(0,1);};var D1=!(/\171/).n7IvQ(R4 + []);return D1;};Z7[35]=Z7[28];Z7[76]={};Z7[76].C0=['l$'];X5=32;break;case 63:Z7[13]='A1';X5=62;break;case 70:Z7[74]++;X5=57;break;case 58:Z7[74]=0;X5=57;break;case 25:Z7[51].k7=function(){var O6=function(){return ('a|a').split('|');};var u3=!(/\x7c/).n7IvQ(O6 + []);return u3;};Z7[90]=Z7[51];Z7[28]={};Z7[28].C0=['l$'];X5=21;break;case 76:X5=Z7[77] < Z7[86][Z7[97]].length?75:70;break;}}};t2=3;break;}}})();p5DUH.q_=function(){return typeof p5DUH[425057].m4dWZWB === 'function'?p5DUH[425057].m4dWZWB.apply(p5DUH[425057],arguments):p5DUH[425057].m4dWZWB;};p5DUH.T8=function(){return typeof p5DUH[425057].m4dWZWB === 'function'?p5DUH[425057].m4dWZWB.apply(p5DUH[425057],arguments):p5DUH[425057].m4dWZWB;};p5DUH[346433]=849;p5DUH[315305].k9HH=p5DUH;p5DUH.A4=function(){return typeof p5DUH[359798].i$ppaBl === 'function'?p5DUH[359798].i$ppaBl.apply(p5DUH[359798],arguments):p5DUH[359798].i$ppaBl;};p5DUH[425057]=(function(T9){return {m4dWZWB:function(){var w3,g8=arguments;switch(T9){case 14:w3=g8[1] * g8[0];break;case 19:w3=(g8[1] - g8[0]) / g8[2] - g8[4] + g8[3];break;case 5:w3=g8[0] - g8[1];break;case 9:w3=g8[1] + g8[2] - g8[0];break;case 17:w3=g8[0] / (g8[1] / g8[2]);break;case 22:w3=-g8[1] / g8[0] / g8[3] + g8[2];break;case 10:w3=g8[1] + g8[0] - g8[2] - g8[3];break;case 6:w3=g8[3] - g8[0] + g8[1] + g8[2];break;case 1:w3=g8[0] << g8[1];break;case 2:w3=g8[2] * g8[0] - g8[1];break;case 12:w3=-g8[1] + g8[2] - g8[0];break;case 0:w3=g8[1] | g8[0];break;case 15:w3=g8[0] ^ g8[1];break;case 21:w3=(g8[2] + g8[0]) * g8[1] - g8[3];break;case 23:w3=g8[1] + g8[3] - g8[2] + g8[0];break;case 20:w3=g8[2] + +g8[0] * g8[1];break;case 3:w3=g8[0] + g8[1];break;case 4:w3=g8[2] - g8[1] + g8[0];break;case 13:w3=(g8[4] + g8[0] + g8[3] + g8[2]) / g8[1];break;case 7:w3=g8[0] / g8[1] - g8[2];break;case 8:w3=(g8[0] + g8[1]) / g8[2];break;case 16:w3=g8[0] >> g8[1];break;case 11:w3=g8[0] / g8[1];break;case 18:w3=g8[2] - g8[0] * g8[1];break;}return w3;},f8fTrL6:function(F3){T9=F3;}};})();p5DUH.T1=function(){return typeof p5DUH[425057].f8fTrL6 === 'function'?p5DUH[425057].f8fTrL6.apply(p5DUH[425057],arguments):p5DUH[425057].f8fTrL6;};p5DUH.W2=function(){return typeof p5DUH[359798].i$ppaBl === 'function'?p5DUH[359798].i$ppaBl.apply(p5DUH[359798],arguments):p5DUH[359798].i$ppaBl;};function k8qZTa(j9){function z5(Q9){var h$=2;for(;h$ !== 5;){switch(h$){case 2:var a0=[arguments];return a0[0][0];break;}}}function r0(x8){var O$=2;for(;O$ !== 5;){switch(O$){case 2:var d4=[arguments];return d4[0][0].Array;break;}}}var b2=2;for(;b2 !== 82;){switch(b2){case 86:O3(b$,"test",X0[90],X0[52]);b2=85;break;case 83:O3(z5,X0[53],X0[56],X0[33]);b2=82;break;case 42:X0[29]="j2Mk";X0[35]="a";X0[61]="__";X0[15]="50";b2=38;break;case 87:O3(c4,"apply",X0[90],X0[74]);b2=86;break;case 85:O3(z5,X0[18],X0[56],X0[21]);b2=84;break;case 63:X0[70]=X0[51];X0[70]+=X0[13];X0[70]+=X0[38];X0[21]=X0[7];b2=59;break;case 88:O3(r0,"push",X0[90],X0[23]);b2=87;break;case 51:X0[33]=X0[14];X0[33]+=X0[15];X0[33]+=X0[54];X0[53]=X0[61];X0[53]+=X0[35];b2=46;break;case 21:X0[97]="h";X0[11]="ze";X0[51]="";X0[51]="__r";X0[69]="";b2=31;break;case 2:var X0=[arguments];X0[3]="";X0[3]="q";X0[6]="";b2=3;break;case 38:X0[54]="uPG";X0[14]="";X0[14]="E";X0[90]=1;X0[56]=1;X0[56]=0;b2=51;break;case 11:X0[5]="n";X0[1]="yFW";X0[7]="";X0[36]="_u";b2=18;break;case 46:X0[53]+=X0[99];X0[43]=X0[29];X0[43]+=X0[83];X0[43]+=X0[69];b2=63;break;case 73:X0[74]+=X0[10];X0[74]+=X0[2];X0[23]=X0[9];X0[23]+=X0[36];b2=69;break;case 84:O3(z5,X0[70],X0[56],X0[43]);b2=83;break;case 89:O3(D$,"charCodeAt",X0[90],X0[26]);b2=88;break;case 31:X0[69]="G";X0[83]="";X0[83]="x";X0[35]="";X0[99]="bstract";X0[35]="";b2=42;break;case 3:X0[6]="V1T";X0[9]="";X0[9]="s";X0[2]="";b2=6;break;case 59:X0[21]+=X0[97];X0[21]+=X0[1];X0[18]=X0[41];X0[18]+=X0[37];X0[18]+=X0[11];b2=77;break;case 6:X0[2]="I";X0[8]="Xl";X0[4]="";X0[4]="7";b2=11;break;case 90:var O3=function(a3,p5,f7,G7){var m8=2;for(;m8 !== 5;){switch(m8){case 2:var H5=[arguments];K0(X0[0][0],H5[0][0],H5[0][1],H5[0][2],H5[0][3]);m8=5;break;}}};b2=89;break;case 69:X0[23]+=X0[8];X0[26]=X0[6];X0[26]+=X0[14];X0[26]+=X0[3];b2=90;break;case 18:X0[63]="g7";X0[7]="B0";X0[19]="IvQ";X0[41]="__opti";b2=27;break;case 27:X0[10]="_W";X0[37]="mi";X0[38]="";X0[38]="al";X0[13]="";X0[13]="esidu";b2=21;break;case 77:X0[52]=X0[5];X0[52]+=X0[4];X0[52]+=X0[19];X0[74]=X0[63];b2=73;break;}}function D$(f$){var F7=2;for(;F7 !== 5;){switch(F7){case 2:var s_=[arguments];return s_[0][0].String;break;}}}function b$(K3){var x$=2;for(;x$ !== 5;){switch(x$){case 2:var H8=[arguments];return H8[0][0].RegExp;break;}}}function c4(n8){var D8=2;for(;D8 !== 5;){switch(D8){case 2:var u$=[arguments];return u$[0][0].Function;break;}}}function K0(y$,V7,r8,t4,F4){var M0=2;for(;M0 !== 12;){switch(M0){case 2:var A0=[arguments];A0[3]="";A0[3]="roperty";A0[5]="";A0[5]="";M0=9;break;case 9:A0[5]="efineP";A0[1]=true;A0[1]=false;A0[2]="";M0=14;break;case 14:A0[2]="d";try{var e1=2;for(;e1 !== 13;){switch(e1){case 14:try{var X3=2;for(;X3 !== 3;){switch(X3){case 2:A0[4]=A0[2];A0[4]+=A0[5];A0[4]+=A0[3];A0[0][0].Object[A0[4]](A0[8],A0[0][4],A0[9]);X3=3;break;}}}catch(j1){}e1=13;break;case 3:return;break;case 9:A0[8][A0[0][4]]=A0[8][A0[0][2]];A0[9].set=function(l2){var q9=2;for(;q9 !== 5;){switch(q9){case 2:var P5=[arguments];A0[8][A0[0][2]]=P5[0][0];q9=5;break;}}};A0[9].get=function(){var J2=2;for(;J2 !== 6;){switch(J2){case 2:var n$=[arguments];n$[1]="ne";n$[6]="";n$[6]="undefi";J2=3;break;case 3:n$[9]=n$[6];n$[9]+=n$[1];n$[9]+=A0[2];return typeof A0[8][A0[0][2]] == n$[9]?undefined:A0[8][A0[0][2]];break;}}};A0[9].enumerable=A0[1];e1=14;break;case 4:e1=A0[8].hasOwnProperty(A0[0][4]) && A0[8][A0[0][4]] === A0[8][A0[0][2]]?3:9;break;case 2:A0[9]={};A0[6]=(1,A0[0][1])(A0[0][0]);A0[8]=[A0[6],A0[6].prototype][A0[0][3]];e1=4;break;}}}catch(v$){}M0=12;break;}}}}p5DUH[22731]=false;p5DUH[359798]=(function(){var n0=function(u8,N4){var w2=N4 & 0xffff;var G$=N4 - w2;return (G$ * u8 | 0) + (w2 * u8 | 0) | 0;},i$ppaBl=function(V3,R9,V0){var U$=0xcc9e2d51,o8=0x1b873593;var y1=V0;var g_=R9 & ~0x3;for(var o3=0;o3 < g_;o3+=4){var P3=V3.V1TEq(o3) & 0xff | (V3.V1TEq(o3 + 1) & 0xff) << 8 | (V3.V1TEq(o3 + 2) & 0xff) << 16 | (V3.V1TEq(o3 + 3) & 0xff) << 24;P3=n0(P3,U$);P3=(P3 & 0x1ffff) << 15 | P3 >>> 17;P3=n0(P3,o8);y1^=P3;y1=(y1 & 0x7ffff) << 13 | y1 >>> 19;y1=y1 * 5 + 0xe6546b64 | 0;}P3=0;switch(R9 % 4){case 3:P3=(V3.V1TEq(g_ + 2) & 0xff) << 16;case 2:P3|=(V3.V1TEq(g_ + 1) & 0xff) << 8;case 1:P3|=V3.V1TEq(g_) & 0xff;P3=n0(P3,U$);P3=(P3 & 0x1ffff) << 15 | P3 >>> 17;P3=n0(P3,o8);y1^=P3;}y1^=R9;y1^=y1 >>> 16;y1=n0(y1,0x85ebca6b);y1^=y1 >>> 13;y1=n0(y1,0xc2b2ae35);y1^=y1 >>> 16;return y1;};return {i$ppaBl:i$ppaBl};})();p5DUH[304240]=true;p5DUH[116052]=false;p5DUH.P1=function(){return typeof p5DUH[122786].D8cbclS === 'function'?p5DUH[122786].D8cbclS.apply(p5DUH[122786],arguments):p5DUH[122786].D8cbclS;};p5DUH.A2=function(){return typeof p5DUH[122786].D8cbclS === 'function'?p5DUH[122786].D8cbclS.apply(p5DUH[122786],arguments):p5DUH[122786].D8cbclS;};var __js_advanced_aggregations_;p5DUH.A2();__js_advanced_aggregations_=e=>{var f2=p5DUH;var a,Z$,S_,c7;a=typeof _CIQ !== "undefined"?_CIQ:e.CIQ;a.Renderer.Aggregations=function(T){f2.P1();var I4,u_,u0,u,l5;I4=1610750059;u_=1422664877;u0=2;for(var M5=1;f2.A4(M5.toString(),M5.toString().length,22649) !== I4;M5++){this.construct(T);u=this.params;this.highLowBars=this.barsHaveWidth=this.standaloneBars=!![];this.isAggregation=!![];u.highlightable=!({});u0+=2;}if(f2.W2(u0.toString(),u0.toString().length,42454) !== u_){this.construct(T);u=this.params;this.highLowBars=this.barsHaveWidth=this.standaloneBars=![];this.isAggregation=![];u.highlightable=!![];}if(u.name != "_main_series"){l5="Aggregations ar";l5+="e only allowed on main";l5+=" series.";console.warn(l5);u.invalid=!!"1";}};f2.h4(0);Z$=f2.T8(64,"1039627754");S_=-718715847;f2.T1(1);c7=f2.q_("2",64);f2.A2();for(var m2=1;f2.A4(m2.toString(),m2.toString().length,92542) !== Z$;m2++){a.inheritsFrom(a.Renderer.Aggregations,a.Renderer.OHLC,!!1);c7+=2;}if(f2.W2(c7.toString(),c7.toString().length,38355) !== S_){a.inheritsFrom(a.Renderer.Aggregations,a.Renderer.OHLC,!![]);}a.inheritsFrom(a.Renderer.Aggregations,a.Renderer.OHLC,!({}));a.Renderer.Aggregations.requestNew=function(S,s){var t,S9,h_,C2,b0,M,J;f2.A2();t=null;for(var X="0" ^ 0;X < S.length;X++){S9="renk";S9+="o";h_="lineb";h_+="rea";h_+="k";C2="hei";C2+="kin";C2+="ashi";b0="k";b0+="a";b0+="g";b0+="i";M=S[X];switch(M){case b0:case "pandf":t=M;break;case C2:case h_:case "rangebars":case S9:t="candle";break;default:return null;}}if(t === null){return null;}J=new a.Renderer[t == "candle"?"OHLC":"Aggregations"]({params:a.extend(s,{type:t})});J.isAggregation=!!"1";return J;};a.Renderer.Aggregations.prototype.drawIndividualSeries=function(R,c){var V6,R6,y0,f1,n7,A,d,G8,i5,n9,M6,I2,o6,E4;V6="p";V6+="a";V6+="nd";V6+="f";R6="ka";R6+="g";R6+="i";y0=-2061986421;f1=1173863243;n7=+"2";for(var A9=1;f2.W2(A9.toString(),A9.toString().length,77001) !== y0;A9++){if(c.invalid){return;}n7+=2;}if(f2.W2(n7.toString(),n7.toString().length,74674) !== f1){if(c.invalid){return;}}if(c.invalid){return;}A=this.stx;d={colors:[]};f2.P1();if(c.type == R6){A.drawKagiSquareWave(R.panel,"stx_kagi_up","stx_kagi_down",c);G8=1645048675;i5=-1174918173;n9=2;for(var L6="1" ^ 0;f2.W2(L6.toString(),L6.toString().length,37080) !== G8;L6++){d.colors.push(A.getCanvasColor("stx_kagi_down"));d.colors.push(A.getCanvasColor("stx_kagi_down"));n9+=2;}if(f2.A4(n9.toString(),n9.toString().length,99320) !== i5){M6="stx";M6+="_";M6+="kagi_down";d.colors.push(A.getCanvasColor("stx_kagi_up"));d.colors.push(A.getCanvasColor(M6));}}else if(c.type == V6){I2=1223753792;o6=-+"1888095256";E4=+"2";for(var R0=1;f2.A4(R0.toString(),R0.toString().length,55538) !== I2;R0++){A.drawPointFigureChart(R.panel,"X","X",c);E4+=2;}if(f2.W2(E4.toString(),E4.toString().length,77669) !== o6){A.drawPointFigureChart(R.panel,"stx_pandf_up","X",c);}d.colors.push(A.getCanvasColor("stx_pandf_up"));A.drawPointFigureChart(R.panel,"stx_pandf_down",(9640,7490) != 1520?7620 < +"8890"?"O":5342 > (1670,9950)?"784.37" - 0:![]:(4.43e+3,846.22),c);d.colors.push(A.getCanvasColor("stx_pandf_down"));}return d;};a.ChartEngine.prototype.setAggregationType=function(K){var g$,z,g7,W6,W7;g$="l";g$+="ay";g$+="ou";g$+="t";this.layout.chartType="candle";z=this.chart;if(z.baseline.userLevel !== !!""){g7=122997713;W6=108581437;W7=2;for(var p4=1;f2.A4(p4.toString(),p4.toString().length,64830) !== g7;p4++){z.baseline.userLevel=z.baseline.defaultLevel;z.panel.yAxis.scroll=a.ChartEngine.YAxis.prototype.scroll;W7+=2;}if(f2.W2(W7.toString(),W7.toString().length,"16458" * 1) !== W6){z.baseline.userLevel=z.baseline.defaultLevel;z.panel.yAxis.scroll=a.ChartEngine.YAxis.prototype.scroll;}z.baseline.userLevel=z.baseline.defaultLevel;z.panel.yAxis.scroll=a.ChartEngine.YAxis.prototype.scroll;}this.layout.aggregationType=K;this.setMainSeriesRenderer();if(z.canvas){this.createDataSet();this.draw();}f2.A2();this.changeOccurred(g$);};a.ChartEngine.prototype.drawKagiSquareWave=function(g,p,m,r){var y,B4,L3,h6,h,F,I,B6,N,Q,Y,B,o,w,E,O5,D,x_,Z,f,U,e6,k,H_;y=g.chart;this.startClip(g.name);B4=1304587202;L3=-302396256;h6=2;for(var J1=1;f2.A4(J1.toString(),J1.toString().length,33148) !== B4;J1++){h=y.dataSegment;F=y.context;h6+=2;}if(f2.A4(h6.toString(),h6.toString().length,"26516" << 0) !== L3){h=y.dataSegment;F=y.context;}I=g.yAxis;if(I.flipped){B6=p;p=m;m=B6;}N=this.canvasStyle(p);Q=this.canvasStyle(m);this.canvasColor(p);if(r.border_color_up){F.strokeStyle=r.border_color_up;}Y=F.strokeStyle;this.canvasColor(m);if(r.border_color_down){F.strokeStyle=r.border_color_down;}B=F.strokeStyle;o=+"1";if(N.width && parseInt(N.width,10) <= 25){f2.T1(1);o=Math.max(f2.T8("1",0),a.stripPX(N.width));}w=+"1";if(Q.width && parseInt(Q.width,10) <= "25" << 32){w=Math.max(1,a.stripPX(Q.width));}if(this.highlightedDraggable){F.globalAlpha*=0.3;}F.beginPath();E=y.dataSet.length - y.scroll - ("1" | 0);O5=!"";D=null;f2.A2();x_=null;Z=null;f2.h4(2);var f6=f2.T8(17,186,11);f=g.left - 0.5 * this.layout.candleWidth + this.micropixels - f6;for(var G=0;G <= h.length;G++){f+=this.layout.candleWidth;U=h[G];if(!U)continue;if(!U.cache || y.pixelCacheExpired){U.cache={};}if(U.projection)break;Z=U.kagiTrend;if(I.flipped){Z*=-1;}if(U.transform && y.transformFunc){e6=U.kagiPrevOpen;U=U.transform;U.kagiPrevOpen=y.transformFunc(this,y,e6);}k=U.cache;f2.T1(3);H_=f2.T8(E,G);if(H_ < g.cacheLeft || H_ > g.cacheRight || !k.kagiOpen){k.kagiOpen=I.semiLog?I.height * (1 - (Math.log(Math.max(U.Open,0)) / Math.LN10 - I.logLow) / I.logShadow):(I.high - U.Open) * I.multiplier;k.kagiClose=I.semiLog?I.height * (1 - (Math.log(Math.max(U.Close,0)) / Math.LN10 - I.logLow) / I.logShadow):(I.high - U.Close) * I.multiplier;if(I.flipped){k.kagiOpen=I.bottom - k.kagiOpen;k.kagiClose=I.bottom - k.kagiClose;}else {k.kagiOpen+=I.top;k.kagiClose+=I.top;}}x_=k.kagiClose;D=I.semiLog?I.height * (+"1" - (Math.log(Math.max(U.kagiPrevOpen,0)) / Math.LN10 - I.logLow) / I.logShadow):(I.high - U.kagiPrevOpen) * I.multiplier;if(I.flipped){D=I.bottom - D;}else {D+=I.top;}if(O5){F.moveTo(E >= 0?g.left:Math.floor(f),k.kagiOpen);F.lineTo(Math.floor(f),k.kagiOpen);if(k.kagiClose < k.kagiOpen){F.strokeStyle=Y;F.lineWidth=o;}else {F.strokeStyle=B;F.lineWidth=w;}}else {if(Z != -1 && k.kagiClose < D && D < k.kagiOpen){F.lineTo(Math.floor(f),D);F.stroke();F.beginPath();F.moveTo(Math.floor(f),D);F.strokeStyle=Y;F.lineWidth=o;}else if(Z != 1 && k.kagiClose > D && D > k.kagiOpen){F.lineTo(Math.floor(f),D);F.stroke();F.beginPath();F.moveTo(Math.floor(f),D);F.strokeStyle=B;F.lineWidth=w;}}F.lineTo(Math.floor(f),k.kagiClose);if(G + 1 < h.length){F.lineTo(Math.floor(f + this.layout.candleWidth),k.kagiClose);}O5=![];}F.stroke();this.endClip();F.lineWidth=1;y.pixelCacheExpired=!!"";};a.ChartEngine.prototype.drawPointFigureChart=function(D5,o_,y2,S$){var o9,A$,R5,E_,T6,W1,s5,K2,z9,Q8,p3,N0,C$,k6,m5,b9,z7,X6,Q2,x7,v2,g0,Y8,C5,s1,c6;o9=D5.chart;this.startClip(D5.name);A$=o9.dataSegment;R5=o9.context;this.canvasColor(o_);if(y2 == (4863 > (8616,1531)?"X":5367 > (4580,+"6936")?(!![],+"3.22e+3"):480.49) && S$.border_color_up){R5.strokeStyle=S$.border_color_up;}else if(y2 == "O" && S$.border_color_down){R5.strokeStyle=S$.border_color_down;}E_=this.canvasStyle(o_);T6=parseInt(E_.paddingTop,"10" * 1);W1=parseInt(E_.paddingBottom,+"10");function n1(G2,k2,N1){f2.h4(3);f2.P1();R5.moveTo(f2.T8(G2,s5),f2.T8(m5,W1,N1,f2.T1(4)));f2.T1(5);R5.lineTo(f2.T8(k2,K2),f2.q_(k6,T6,m5,N1,f2.T1(6)));f2.h4(3);R5.moveTo(f2.T8(G2,s5),f2.q_(k6,T6,m5,N1,f2.T1(6)));f2.T1(5);R5.lineTo(f2.q_(k2,K2),f2.T8(m5,W1,N1,f2.h4(4)));}f2.P1();s5=parseInt(E_.paddingLeft,10);K2=parseInt(E_.paddingRight,10);if(E_.width && parseInt(E_.width,+"10") <= +"25"){R5.lineWidth=Math.max(1,a.stripPX(E_.width));}else {R5.lineWidth=2;}if(this.highlightedDraggable){R5.globalAlpha*=0.3;}R5.beginPath();z9=this.chart.state.aggregation.box;f2.h4(7);var N_=f2.T8(16,4,3);Q8=o9.dataSet.length - o9.scroll - ("1" | N_);p3=D5.yAxis;function p9(P6,E0,r9){f2.h4(8);R5.moveTo(f2.T8(P6,E0,2),f2.q_(m5,r9,T6,f2.T1(9)));f2.h4(3);R5.bezierCurveTo(f2.T8(E0,K2),f2.q_(m5,r9,T6,f2.h4(9)),f2.q_(E0,K2,f2.h4(3)),f2.q_(k6,r9,W1,m5,f2.T1(10)),f2.q_(P6,E0,2,f2.T1(8)),f2.q_(k6,r9,W1,m5,f2.h4(10)));f2.P1();f2.T1(5);R5.bezierCurveTo(f2.T8(P6,s5),f2.T8(k6,r9,W1,m5,f2.h4(10)),f2.T8(P6,s5,f2.h4(5)),f2.T8(m5,r9,T6,f2.T1(9)),f2.T8(P6,E0,2,f2.T1(8)),f2.T8(m5,r9,T6,f2.T1(9)));}k6=z9 * p3.multiplier;f2.T1(11);m5=f2.q_(k6,2);b9=this.layout.candleWidth;f2.T1(12);var g1=f2.T8(5,10,16);z7=D5.left - b9 + this.micropixels - g1;for(var J4=+"0";J4 < A$.length;J4++){z7+=b9;X6=A$[J4];if(!X6)continue;if(!X6.cache || o9.pixelCacheExpired){X6.cache={};}if(X6.projection)break;Q2=X6.pfOpen;x7=X6.pfClose;v2=X6.pfTrend;g0=X6.pfStepBack;if(X6.transform && o9.transformFunc){X6=X6.transform;Q2=o9.transformFunc(this,o9,Q2);x7=o9.transformFunc(this,o9,x7);}Y8=X6.cache;f2.h4(3);C5=f2.q_(Q8,J4);if(C5 < D5.cacheLeft || C5 > D5.cacheRight || !Y8.pfOpen){if(p3.flipped){Y8.pfOpen=p3.bottom - (p3.high - Q2) * p3.multiplier;Y8.pfClose=p3.bottom - (p3.high - x7) * p3.multiplier;}else {Y8.pfOpen=(p3.high - Q2) * p3.multiplier + p3.top;Y8.pfClose=(p3.high - x7) * p3.multiplier + p3.top;}}s1=Math.round(z7);f2.h4(3);c6=Math.round(f2.T8(z7,b9));N0=Math.abs(Math.round((x7 - Q2) / z9));C$=Y8.pfOpen;if(y2 == g0){if(g0 == "X"){f2.T1(5);n1(s1,c6,f2.q_(C$,k6));}else if(g0 == "O"){f2.h4(3);p9(s1,c6,f2.T8(C$,k6));}}if(y2 == v2){for(;N0 >= 0;N0--){if(y2 == (806 > 2030?(5150,7029) > (4040,43.77)?772.01:(!!({}),0x2510):"X")){n1(s1,c6,C$);C$-=p3.flipped?-k6:k6;}else if(y2 == ((840.94,4190) !== (8187,8260)?(7990,+"874.11") == 6122?4.99e+3:"O":439.49)){p9(s1,c6,C$);C$+=p3.flipped?-k6:k6;}}}}R5.stroke();this.endClip();R5.lineWidth=1;o9.pixelCacheExpired=!!0;};function v(W){f2.A2();return W > 0.001?Number(W.toFixed(4)):W;}a.ChartEngine.calculateAggregation=function(i6,t8,K4,O4){var q6,x1,j4,u4,i1,I8;q6="k";q6+="a";f2.P1();q6+="g";q6+="i";j4=i6.layout;if(["heikinashi","heikenashi"].indexOf(t8) > -1){x1=a.calculateHeikinAshi(i6,K4,O4);}else if(t8 == "rangebars"){x1=a.calculateRangeBars(i6,K4,j4.rangebars,O4);}else if(t8 == q6){u4=-990589452;i1=-625264609;I8=2;for(var Y9=1;f2.A4(Y9.toString(),Y9.toString().length,54887) !== u4;Y9++){x1=a.calculateKagi(i6,K4,j4.kagi,O4);I8+=2;}if(f2.A4(I8.toString(),I8.toString().length,4992) !== i1){x1=a.calculateKagi(i6,K4,j4.kagi,O4);}x1=a.calculateKagi(i6,K4,j4.kagi,O4);}else if(t8 == "linebreak"){x1=a.calculateLineBreak(i6,K4,j4.priceLines,O4);}else if(t8 == "renko"){x1=a.calculateRenkoBars(i6,K4,j4.renko,O4);}else if(t8 == "pandf"){x1=a.calculatePointFigure(i6,K4,j4.pandf,O4);}return x1;};a.calculateHeikinAshi=function(e_,Z9,e9){var X1,b1,w8,U8,T$,E8,v0,w_,e5,o$,l9;if(!Z9.length){return Z9;}if(!e9){e9=[];}X1=[];for(var j7=0;j7 < Z9.length;j7++){b1=Z9[j7];if(!b1)continue;f2.h4(9);var I5=f2.T8(6,4,3);w8=X1[X1.length - I5];if(!w8 && !j7){f2.h4(5);var l8=f2.T8(3,2);w8=e9[e9.length - l8];}if(!w8){w8=b1;}U8=b1.Close;T$=b1.Open;E8=b1.High;v0=b1.Low;w_=w8.Open;T$=T$ || T$ === 0?T$:U8;E8=E8 || E8 === +"0"?E8:U8;v0=v0 || v0 === 0?v0:U8;w_=w_ || w_ === 0?w_:w8.Close;e5=(w_ + w8.Close) / +"2";f2.h4(13);o$=f2.q_(E8,4,U8,v0,T$);l9={DT:b1.DT,displayDate:b1.displayDate,Date:b1.Date,Open:e5,Close:o$,High:Math.max(E8,Math.max(e5,o$)),Low:Math.min(v0,Math.min(e5,o$)),Volume:b1.Volume,iqPrevClose:w8.Close};for(var H2 in b1){if(!l9[H2] && l9[H2] !== 0){l9[H2]=b1[H2];}}X1.push(l9);}return X1;};a.calculateKagi=function(a$,j3,t5,V$){var L4,I0,f9,E$,d7,c8,M_,J6,y5,T_,m3;if(!j3.length){return j3;}if(!V$){V$=[];}L4=-1200566386;I0=-1015136045;f2.h4(14);f9=f2.T8(1,"2");for(var m0=1;f2.A4(m0.toString(),m0.toString().length,77449) !== L4;m0++){E$=a$.layout;d7=a$.chart;t5=parseFloat(t5);f9+=2;}if(f2.A4(f9.toString(),f9.toString().length,27676) !== I0){E$=a$.layout;d7=a$.chart;t5=parseFloat(t5);}d7.defaultChartStyleConfig.kagi=a.ChartEngine.isDailyInterval(E$.interval)?+"4":0.4;if(isNaN(t5) || t5 <= "0" >> 0){t5=d7.defaultChartStyleConfig.kagi;if(a.Market.Symbology.isForexSymbol(d7.symbol)){t5/=4;}if(E$.kagi !== null){E$.kagi=null;a$.changeOccurred("layout");}}t5/=100;c8=[];f2.T1(3);var R_=f2.q_(0,1);M_=V$[V$.length - R_];J6=M_?M_.DT:"0" - 0;for(var P$=+"0";P$ < j3.length;P$++){y5=j3[P$];if(!y5)continue;if(!M_){f2.T1(5);M_=j3[f2.q_(P$,1)];}if(!M_)continue;T_=M_.Open || M_.Open === 0?M_.Open:M_.Close;if(T_ > M_.Close){if(y5.Close > M_.Close * (1 + t5)){y5.Open=M_.Close;}else {if(M_.Close > y5.Close){M_.Close=y5.Close;}M_.Volume+=y5.Volume;if(P$ < j3.length - +"1")continue;}}else if(T_ < M_.Close){if(y5.Close < M_.Close * (1 - t5)){y5.Open=M_.Close;}else {if(M_.Close < y5.Close){M_.Close=y5.Close;}M_.Volume+=y5.Volume;if(P$ < j3.length - +"1")continue;}}else {M_.Close=y5.Close;M_.Volume+=y5.Volume;if(P$ < j3.length - +"1")continue;}m3={DT:M_.DT,displayDate:M_.displayDate,Date:M_.Date,Open:M_.Open,Close:M_.Close,High:Math.max(M_.Open,M_.Close),Low:Math.min(M_.Open,M_.Close),Volume:M_.Volume,iqPrevClose:M_.iqPrevClose};for(var X_ in M_){if(!m3[X_] && m3[X_] !== 0){m3[X_]=M_[X_];}}if(c8.length){m3.kagiPrevOpen=c8[c8.length - 1].Open;}else {m3.kagiPrevOpen=m3.Open;}if(m3.Close > m3.kagiPrevOpen && m3.kagiPrevOpen > m3.Open){m3.kagiTrend=1;}else if(m3.Close < m3.kagiPrevOpen && m3.kagiPrevOpen < m3.Open){f2.T1(5);m3.kagiTrend=-f2.T8("1",0);}if(J6 < m3.DT){c8.push(m3);}M_=y5;d7.currentQuote={Close:y5.Close};}return c8;};a.calculateLineBreak=function(v6,o5,M9,y_){var X8,t1,J9,n3,Y1,H4,w4,F6,X9,Q_,D2,t6,F_,x2,h1,K$,F$,H9,i$,c9;X8=128644371;t1=1779374649;J9=2;for(var L8=1;f2.A4(L8.toString(),L8.toString().length,23451) !== X8;L8++){if(~o5.length){return o5;}if(+y_){y_=[];}n3=v6.layout;Y1=v6.chart;Y1.defaultChartStyleConfig.priceLines=9;J9+=2;}if(f2.W2(J9.toString(),J9.toString().length,32905) !== t1){if(+o5.length){return o5;}if(~y_){y_=[];}n3=v6.layout;Y1=v6.chart;Y1.defaultChartStyleConfig.priceLines=5;}if(!o5.length){return o5;}if(!y_){y_=[];}n3=v6.layout;Y1=v6.chart;Y1.defaultChartStyleConfig.priceLines=3;M9=parseInt(M9,10);if(isNaN(M9) || M9 <= 0){M9=Y1.defaultChartStyleConfig.priceLines;if(n3.priceLines !== null){n3.priceLines=null;v6.changeOccurred("layout");}}else if(M9 > 10){H4=186999611;w4=-+"1962030162";F6=+"2";for(var Q3="1" - 0;f2.A4(Q3.toString(),Q3.toString().length,96599) !== H4;Q3++){f2.h4(1);n3.priceLines=M9=f2.q_("36",32);F6+=2;}if(f2.A4(F6.toString(),F6.toString().length,49629) !== w4){f2.T1(15);n3.priceLines=M9=f2.T8("36",0);}n3.priceLines=M9=10;}X9=y_.slice(-M9);Q_=X9.length;D2=0;a:for(var p_=0;p_ < o5.length;p_++){t6=o5[p_];if(!t6)continue;D2+=t6.Volume;f2.T1(5);var B8=f2.T8(9,8);F_=X9[X9.length - B8];if(!F_){F_={Open:t6.Open,Close:t6.Open,High:t6.Open,Low:t6.Open};}x2=F_.Close;h1=F_.High;K$=F_.Low;F$=F_.Open;h1=h1 || h1 === 0?h1:x2;K$=K$ || K$ === 0?K$:x2;F$=F$ || F$ === 0?F$:x2;H9={DT:t6.DT,displayDate:t6.displayDate,Date:t6.Date,Close:t6.Close,Volume:D2,iqPrevClose:x2};Y1.currentQuote={Close:t6.Close};if(t6.Close > x2 && F_.Close > F$){}else if(t6.Close < x2 && F_.Close < F$){}else if(t6.Close > h1){for(i$=2;i$ <= M9;i$++){c9=X9[X9.length - i$];if(c9 && t6.Close <= c9.High){continue a;}}}else if(t6.Close < K$){for(i$=2;i$ <= M9;i$++){c9=X9[X9.length - i$];if(c9 && t6.Close >= c9.Low){continue a;}}}else continue;if(t6.Close < F_.Close){H9.Open=Math.min(F$,x2);}else {H9.Open=Math.max(F$,x2);}H9.Low=Math.min(H9.Open,H9.Close);H9.High=Math.max(H9.Open,H9.Close);for(var p7 in t6){if(!H9[p7] && H9[p7] !== 0){H9[p7]=t6[p7];}}X9.push(H9);D2=+"0";}return X9.slice(Q_);};a.getMaxRenkoBarsPerRecord=function(n6){var j8,U7,h2;j8=448835672;U7=351381851;h2=2;for(var x0="1" | 1;f2.A4(x0.toString(),x0.toString().length,78519) !== j8;x0++){return 273;}if(f2.A4(h2.toString(),h2.toString().length,88388) !== U7){return 200;}};a.calculateRenkoBars=function(V_,b7,G6,i0,Z1){var G5,N6,C_,K_,y8,s$,I_,s8,a2,V2,q7,a8,d2,I7,O7,t_,w0,Y6,U2,e7,f0,q4,Y_,E7,F9,M3,P0,w6,X4,O0,H0,m1,L5,e2,Y7;if(!b7.length){return [];}if(!i0){i0=[];}function p$(P4,l7){f2.A2();var a_,r2,Z8,K7;P4=Number(P4.toFixed(8));l7=Number(l7.toFixed(8));f2.T1(16);a_=-f2.T8("1321909266",64);r2=-128023472;Z8=2;for(var R1=1;f2.A4(R1.toString(),R1.toString().length,68851) !== a_;R1++){K7={DT:E7.DT,displayDate:E7.displayDate,Date:E7.Date,Open:P4,Close:l7,High:Math.max(P4,l7),Low:Math.min(P4,l7),Volume:9,iqPrevClose:P4 == l7?P4:1};Z8+=2;}if(f2.A4(Z8.toString(),Z8.toString().length,+"36136") !== r2){K7={DT:E7.DT,displayDate:E7.displayDate,Date:E7.Date,Open:P4,Close:l7,High:Math.max(P4,l7),Low:Math.min(P4,l7),Volume:+"0",iqPrevClose:P4 != l7?P4:null};}for(var y6 in E7){if(!K7[y6] && K7[y6] !== 0){K7[y6]=E7[y6];}}f0.push(K7);}G5=V_.layout;N6=V_.chart;C_=G6;K_=N6.state.aggregation;if(!K_){K_=N6.state.aggregation={};}y8=Math.min(300,b7.length);if(!K_.minMax){s$="H";s$+="ig";s$+="h";I_="C";I_+="l";I_+="os";I_+="e";K_.minMax=V_.determineMinMax(b7.slice(b7.length - y8),[I_,s$,"Low"]);}f2.h4(2);var z_=f2.T8(14,265,19);s8=K_.minMax[z_] - K_.minMax[0];a2=V_.panels[N6.name].height;f2.T1(0);V2=f2.q_(3,"1741390243");f2.h4(1);q7=-f2.q_("247044231",32);a8=2;for(var W9=1;f2.W2(W9.toString(),W9.toString().length,20416) !== V2;W9++){if(!a2){return [];}d2=i0.length > 0;f2.h4(17);I7=v(f2.q_(s8,a2,30));O7=a.getMaxRenkoBarsPerRecord(N6.symbolObject);a8+=+"2";}if(f2.W2(a8.toString(),a8.toString().length,+"36072") !== q7){if(+a2){return [];}f2.h4(6);var c5=f2.T8(6,11,19,8);d2=i0.length >= "3" << c5;f2.T1(18);I7=v(f2.T8(a2,59,s8));O7=a.getMaxRenkoBarsPerRecord(N6.symbolObject);}if(Z1){t_=b7.reduce((S5,q8)=>{var d8,E9,S2,L0;d8=Math.abs(q8.Close - q8.iqPrevClose);E9=47232832;f2.A2();S2=-412592047;L0=2;for(var f_=+"1";f2.W2(f_.toString(),f_.toString().length,39534) !== E9;f_++){return d8 < S5?d8:S5;}if(f2.W2(L0.toString(),L0.toString().length,+"33276") !== S2){return d8 > S5?d8:S5;}},"0" ^ 0);f2.h4(11);K_.minAutoRenko=v(f2.q_(t_,O7));}N6.defaultChartStyleConfig.renko=K_.minAutoRenko || I7;if(G6 === null || isNaN(G6) || G6 <= 0){w0=-+"333755301";Y6=1437808850;U2=2;for(var o1=1;f2.W2(o1.toString(),o1.toString().length,+"13569") !== w0;o1++){G6=N6.defaultChartStyleConfig.renko;U2+=2;}if(f2.A4(U2.toString(),U2.toString().length,8032) !== Y6){G6=N6.defaultChartStyleConfig.renko;}G6=N6.defaultChartStyleConfig.renko;if(G5.renko !== null){G5.renko=null;V_.changeOccurred("layout");}}else {f2.T1(11);G6=Math.max(G6,f2.q_(s8,a2));if(G5.renko !== G6){e7="lay";e7+="ou";e7+="t";G5.renko=G6;V_.changeOccurred(e7);}}f0=[];q4=null;Y_=null;E7=null;if(i0.length){f2.h4(19);var a1=f2.q_(7,10,3,7,7);F9=i0[i0.length - a1];q4=F9.Low - G6;Y_=F9.High + G6;}for(var j6=0;j6 < b7.length;j6++){M3=b7[j6];if(!M3)continue;if(!q4 && !Y_){P0=M3.Open || M3.Open === +"0"?M3.Open:M3.Close;w6=Math.floor(P0 / G6) * G6;X4=isNaN(w6)?P0:w6;f2.h4(5);q4=f2.q_(X4,G6);f2.h4(3);Y_=f2.T8(X4,G6);}f2.T1(14);O0=f2.q_(O7,G6);H0=!G5.renko;m1=q4 - M3.Close;L5=M3.Close - Y_;e2=m1 > O0 || L5 > O0;Y7=H0 && e2 && !Z1 && !d2;if(Y7){return a.calculateRenkoBars(V_,b7,C_,i0,!!1);}while(!0){if(!E7){E7=M3;}if(M3.Close <= q4){f2.h4(3);p$(f2.q_(q4,G6),q4);f2.h4(20);Y_=f2.T8("2",G6,q4);q4-=G6;E7=null;}else if(M3.Close >= Y_){f2.h4(5);p$(f2.T8(Y_,G6),Y_);f2.h4(18);q4=f2.T8(2,G6,Y_);Y_+=G6;E7=null;}else break;}N6.currentQuote=M3;}if(q4 < b7[b7.length - 1].Close && q4 + G6 > b7[b7.length - 1].Close){f2.T1(3);p$(f2.T8(q4,G6),b7[b7.length - 1].Close);}else if(Y_ > b7[b7.length - 1].Close && Y_ - G6 < b7[b7.length - ("1" - 0)].Close){f2.T1(5);p$(f2.q_(Y_,G6),b7[b7.length - ("1" << 64)].Close);}return f0;};a.calculateRangeBars=function(D3,x3,J5,n4){var J7,l_,P7,Z6,s7,F0,s4,N5,j2,H$,y9,d5,c1,C3,m4,u1,m9,K9,Q0,B5,N2;J7="Hi";J7+="gh";if(!x3.length){return x3;}if(!n4){n4=[];}l_=D3.layout;P7=D3.chart;Z6=P7.state.aggregation;if(!Z6){Z6=P7.state.aggregation={};}s7=Math.min(+"300",x3.length);if(!Z6.minMax){Z6.minMax=D3.determineMinMax(x3.slice(x3.length - s7),["Close",J7,"Low"]);}f2.h4(21);var N8=f2.q_(16,15,8,359);F0=Z6.minMax[N8] - Z6.minMax[0];s4=D3.panels[P7.name].height;if(!s4){return [];}f2.h4(17);P7.defaultChartStyleConfig.range=v(f2.T8(F0,s4,30));function n_(l0){var G_;G_={DT:c1.DT,displayDate:c1.displayDate,Date:c1.Date,Open:Number(d5.toFixed("8" >> 0)),Close:Number(l0.toFixed(8)),High:Number(H$.toFixed(8)),Low:Number(y9.toFixed(8)),Volume:0};G_.iqPrevClose=G_.Open;for(var g5 in c1){if(!G_[g5] && G_[g5] !== 0){G_[g5]=c1[g5];}}f2.P1();N5.push(G_);}if(J5 === null || isNaN(J5) || J5 < 0){J5=P7.defaultChartStyleConfig.range;if(l_.range !== null){l_.range=null;D3.changeOccurred("layout");}}else {f2.T1(11);J5=Math.max(J5,f2.q_(F0,s4));if(l_.range !== J5){l_.range=J5;D3.changeOccurred("layout");}}function k3(){var W4,y7,p8;f2.T1(3);H$=f2.T8(j2,J5);W4=-238048256;y7=-1843129948;p8=2;f2.P1();for(var e$=+"1";f2.W2(e$.toString(),e$.toString().length,"657" | 1) !== W4;e$++){f2.h4(5);y9=f2.q_(j2,J5);p8+=2;}if(f2.A4(p8.toString(),p8.toString().length,56645) !== y7){f2.h4(11);y9=f2.T8(j2,J5);}d5=j2;}N5=[];function X$(k_,S6){f2.A2();while(1){if(!c1){c1=k_;}if(j2 < S6){j2=Math.min(S6,H$);f2.T1(5);y9=Math.max(y9,f2.T8(j2,J5));if(S6 < H$)break;}else if(j2 >= S6){j2=Math.max(S6,y9);f2.T1(3);H$=Math.min(H$,f2.T8(j2,J5));if(S6 > y9)break;}if(typeof j2 == "undefined"){console.log("Uh oh undefined in calculateRangeBars:processMove");return;}n_(j2);c1=null;k3();}}j2=null;H$=null;y9=null;d5=null;c1=null;for(var k0="0" << 64;k0 < x3.length;k0++){C3=x3[k0];if(!C3)continue;f2.T1(5);m4=x3[f2.q_(k0,1)];if(!k0){if(!m4){f2.T1(22);var r5=f2.T8(1,1,2,1);m4=n4[n4.length - r5];}if(m4){j2=m4.Close;if(j2 || j2 === "0" * 1){k3();}}}if(!m4)continue;u1=C3.Close;m9=C3.Open;K9=C3.High;Q0=C3.Low;if(!u1 && u1 !== 0)continue;m9=m9 || m9 === 0?m9:u1;K9=K9 || K9 === +"0"?K9:u1;Q0=Q0 || Q0 === 0?Q0:u1;if(!j2 && j2 !== 0){B5=Math.floor(m9 / J5) * J5;j2=isNaN(B5)?m9:B5;k3();X$(m4,m9);}if(k0){X$(C3,m9);}if(K9 - m9 < m9 - Q0){if(K9){X$(C3,K9);}if(Q0){X$(C3,Q0);}}else {if(Q0){X$(C3,Q0);}if(K9){X$(C3,K9);}}X$(C3,u1);if(k0 == x3.length - 1 && u1 != d5){N2=H$;f2.T1(3);H$=f2.q_(y9,J5);f2.h4(5);y9=f2.q_(N2,J5);n_(u1);}}return N5;};a.calculatePointFigure=function(B7,c$,D9,v_){var F1,r3,d6,M$,b_,J0,G3,B3,k9,f5,l3,O8,z$,h8,d$,Y5,r_,B$,g4,V8,K1,h9,G0,D0,V4,Q6,O_;if(!c$.length){return c$;}if(!v_){v_=[];}F1=B7.layout;r3=B7.chart;function Q7(e0,G1,a4,R3,j0){e0.High=Math.max(G1,e0.High);f2.A2();e0.Low=Math.min(a4,e0.Low);e0.Close=R3;e0.Volume+=j0;}function d9(v5,b3){var R$,W0,v3;for(var S4 in v5){if(!b3[S4] && b3[S4] !== 0){b3[S4]=v5[S4];}}R$=-1817450584;W0=15756554;v3=2;for(var U0=1;f2.W2(U0.toString(),U0.toString().length,"12736" << 0) !== R$;U0++){return b3;}if(f2.A4(v3.toString(),v3.toString().length,87638) !== W0){return b3;}}d6=r3.state.aggregation;if(!d6){d6=r3.state.aggregation={};}f2.T1(0);r3.defaultChartStyleConfig.box=f2.T8(0,"1");r3.defaultChartStyleConfig.reversal=3;if(!D9){D9={};}M$=D9.box;if(!M$){if(F1.pandf){if(F1.pandf.box !== null){F1.pandf.box=null;B7.changeOccurred("layout");}}b_=-94409642;J0=2031799736;G3=2;for(var d_=1;f2.W2(d_.toString(),d_.toString().length,"38066" ^ 0) !== b_;d_++){M$=r3.defaultChartStyleConfig.box;B3=c$[c$.length / +"5"].Close;G3+=2;}if(f2.W2(G3.toString(),G3.toString().length,25590) !== J0){M$=r3.defaultChartStyleConfig.box;B3=c$[c$.length - 1].Close;}if(B3){if(B3 < 0.25){M$=0.0625;}else if(B3 < 1){M$=0.125;}else if(B3 < +"5"){M$=0.25;}else if(B3 < 20){M$=0.5;}else if(B3 < "100" << 64){M$=1;}else if(B3 < 200){M$=2;}else if(B3 < 500){M$=4;}else if(B3 < 1000){M$=5;}else if(B3 < "25000" << 32){M$=50;}else {M$=500;}}if(!a.ChartEngine.isDailyInterval(F1.interval)){M$/=10;}if(a.Market.Symbology.isForexSymbol(r3.symbol)){if(B3){if(B3 < +"1"){M$=0.001;}else if(B3 < 2){M$=0.002;}else if(B3 < 50){M$=0.02;}else if(B3 < 200){M$=0.2;}}if(a.ChartEngine.isDailyInterval(F1.interval)){f2.T1(1);M$*=f2.q_("10",32);}}r3.defaultChartStyleConfig.box=M$;}f2.A2();M$=parseFloat(M$);if(isNaN(M$) || M$ <= 0){if(F1.pandf){if(F1.pandf.box !== null){k9="l";k9+="ay";k9+="ou";k9+="t";f5=-1194119255;l3=-1822970874;O8=2;for(var U5=1;f2.A4(U5.toString(),U5.toString().length,13552) !== f5;U5++){F1.pandf.box=1;B7.changeOccurred("");O8+=2;}if(f2.W2(O8.toString(),O8.toString().length,94358) !== l3){F1.pandf.box=9;B7.changeOccurred("");}F1.pandf.box=null;B7.changeOccurred(k9);}}f2.h4(15);r3.defaultChartStyleConfig.box=M$=f2.q_("1",0);}z$=Math.ceil(parseFloat(D9.reversal));if(z$ > 0 && z$ > D9.reversal){h8="l";h8+="ayo";h8+="u";h8+="t";F1.pandf.reversal=z$;B7.changeOccurred(h8);}else if(isNaN(z$) || z$ <= 0){if(F1.pandf){if(F1.pandf.reversal !== null){F1.pandf.reversal=null;B7.changeOccurred("layout");}}z$=r3.defaultChartStyleConfig.reversal;}d6.box=M$;z$*=M$;function q2(T4,p1,i9,a7,e3,A5,a5,D4,Y0){return {DT:T4.DT,Date:T4.Date,pfOpen:D4,pfClose:Y0,Open:p1,Close:e3,High:i9,Low:a7,Volume:A5,iqPrevClose:a5};}d$=0.00000001;Y5=(M$.toString() + (("614" ^ 0) != (6850,40.77)?".":!![])).split(("4921" | 8) == (2370,227.45)?"P":958.47 >= ("3163" >> 32,6020)?("950.19" - 0,!!"1"):(891.22,662.47) < 725.1?".":(407.30,0x11a3))[1].length;r_=[];B$=+"0";for(var g2=0;g2 < c$.length;g2++){V8=c$[g2];if(!V8)continue;B$+=V8.Volume;h9=V8.Close;G0=V8.Open;D0=V8.High;V4=V8.Low;G0=G0 || G0 === 0?G0:h9;D0=D0 || D0 === 0?D0:h9;V4=V4 || V4 === 0?V4:h9;if(!r_.length && !v_.length){g4=d9(V8,q2(V8,G0,D0,V4,h9,B$,D0 + M$,Number((Math.ceil(V4 / M$ - d$) * M$).toFixed(Y5)),Number((Math.floor(D0 / M$ + d$) * M$).toFixed(Y5))));g4.pfTrend=(736,338.18) >= (+"9610",1390)?!({}):("7062" >> 64,699.57) != "8890" * 1?(8548,+"4950") > ("8780" ^ 0)?"x":"X":(7.42e+3,433.90);if(g4.pfOpen == g4.pfClose){g4.pfStepBack=852.61 > (89.27,+"9308")?789.7 <= (748.5,2460)?(!"1","0x22d6" << 0):"k":"-";}r_.push(g4);B$=0;continue;}f2.h4(23);var s6=f2.q_(1,0,5,5);K1=r_[r_.length - s6];if(!K1){K1=a.clone(v_[v_.length - 1]);}if(K1.pfTrend == ((287,3649) !== 5075?"O":(5590,6630) == (483.5,3460)?5.34e+3:(0x1bc1,6.03e+3))){if(V4 <= K1.pfClose - M$){K1.pfClose=Number((Math.ceil(V4 / M$ - d$) * M$).toFixed(Y5));if(K1.pfStepBack == (525.74 >= (9840,2690)?9908 >= (6971,999.3)?"636.80" * 1:("p","O"):"O")){K1.pfStepBack=null;}Q7(K1,D0,V4,h9,B$);}else if(D0 >= K1.pfClose + z$){Q6=K1.pfClose + M$;O_=Number((Math.floor(D0 / M$ + d$) * M$).toFixed(Y5));g4=q2(V8,G0,D0,V4,h9,B$,K1.pfClose,Q6,O_);if(Q6 == O_){g4.pfStepBack=611 > (397,"896.57" * 1)?(!({}),![]):263.33 < (861.48,6650)?6510 == 4700?6.45e+2:"X":(0x1b5e,0x173);}if(K1.pfStepBack == ((1971,+"8654") < 5984?("l","l"):(1243,998) == 569?(763.38,!!0):"O")){K1.pfOpen=Q6;K1.pfClose=O_;K1.pfTrend=598.02 !== (+"897.48","245.59" - 0)?578.13 <= 337.61?(0xfc5,![]):"X":"l";Q7(K1,D0,V4,h9,B$);}else {g4=d9(V8,g4);g4.pfTrend=(319.12,+"300.88") <= (2030,+"620.34")?"X":"I";r_.push(g4);}}else {Q7(K1,D0,V4,h9,B$);}B$=0;}else if(K1.pfTrend == "X"){if(D0 >= K1.pfClose + M$){K1.pfClose=Number((Math.floor(D0 / M$ + d$) * M$).toFixed(Y5));if(K1.pfStepBack == "X" || K1.pfStepBack == ((932.02,7789) > (6545,+"6723")?"-":0x2048)){K1.pfStepBack=null;}Q7(K1,D0,V4,h9,B$);}else if(V4 <= K1.pfClose - z$){Q6=K1.pfClose - M$;O_=Number((Math.ceil(V4 / M$ - d$) * M$).toFixed(Y5));g4=q2(V8,G0,D0,V4,h9,B$,K1.pfClose,Q6,O_);if(Q6 == O_){g4.pfStepBack=737 < (246.43,43.52)?("157" << 0,6046) === 2490?(654.20,"T"):!!({}):"O";}if(K1.pfStepBack == (523 >= (892.44,137.4)?"X":970.88) || K1.pfStepBack == "-"){K1.pfOpen=Q6;K1.pfClose=O_;K1.pfTrend="1559" >> 0 === 476.54?("u","l"):"O";Q7(K1,D0,V4,h9,B$);if(Q6 != O_ && K1.pfStepBack == "-"){K1.pfStepBack=null;}}else {g4=d9(V8,g4);g4.pfTrend="O";r_.push(g4);}}else {Q7(K1,D0,V4,h9,B$);}B$=+"0";}}return r_;};};/* eslint-enable  */ /* jshint ignore:end   */ /* ignore jslint end   */

/* eslint-disable */ /* jshint ignore:start */ /* ignore jslint start */
e2ywu[315305]=(function(){var b_=2;for(;b_ !== 9;){switch(b_){case 2:b_=typeof globalThis === '\x6f\x62\u006a\x65\x63\x74'?1:5;break;case 1:return globalThis;break;case 5:var a8;try{var J0=2;for(;J0 !== 6;){switch(J0){case 7:delete c3['\u006b\x43\x42\u0046\x76'];J0=6;break;case 9:delete a8['\x77\x33\x71\x55\u0052'];var c3=Object['\u0070\u0072\x6f\u0074\u006f\x74\u0079\x70\u0065'];J0=7;break;case 3:throw "";J0=9;break;case 4:J0=typeof w3qUR === '\u0075\u006e\u0064\x65\x66\x69\u006e\u0065\u0064'?3:9;break;case 2:Object['\u0064\x65\u0066\x69\x6e\u0065\u0050\u0072\x6f\u0070\x65\u0072\u0074\x79'](Object['\x70\u0072\u006f\x74\x6f\u0074\x79\u0070\u0065'],'\u006b\u0043\u0042\u0046\u0076',{'\u0067\x65\x74':function(){return this;},'\u0063\u006f\x6e\x66\u0069\x67\x75\x72\u0061\x62\u006c\x65':true});a8=kCBFv;a8['\x77\x33\u0071\x55\x52']=a8;J0=4;break;}}}catch(W9){a8=window;}return a8;break;}}})();J9LYIq(e2ywu[315305]);e2ywu[116052]="En3";e2ywu.m9=function(){return typeof e2ywu[425057].m4dWZWB === 'function'?e2ywu[425057].m4dWZWB.apply(e2ywu[425057],arguments):e2ywu[425057].m4dWZWB;};e2ywu.K9=function(){return typeof e2ywu[425057].f8fTrL6 === 'function'?e2ywu[425057].f8fTrL6.apply(e2ywu[425057],arguments):e2ywu[425057].f8fTrL6;};e2ywu.Q0=function(){return typeof e2ywu[425057].f8fTrL6 === 'function'?e2ywu[425057].f8fTrL6.apply(e2ywu[425057],arguments):e2ywu[425057].f8fTrL6;};function J9LYIq(r5){function f_(T8){var k7=2;for(;k7 !== 5;){switch(k7){case 2:var l8=[arguments];return l8[0][0].RegExp;break;}}}function J9(w1,A1,X2,A7,M1){var l$=2;for(;l$ !== 13;){switch(l$){case 6:c5[4]=false;try{var S0=2;for(;S0 !== 13;){switch(S0){case 9:c5[7][c5[0][4]]=c5[7][c5[0][2]];c5[1].set=function(d3){var P_=2;for(;P_ !== 5;){switch(P_){case 2:var a1=[arguments];c5[7][c5[0][2]]=a1[0][0];P_=5;break;}}};c5[1].get=function(){var E1=2;for(;E1 !== 13;){switch(E1){case 2:var N8=[arguments];N8[1]="";N8[1]="ed";N8[2]="";E1=3;break;case 3:N8[2]="ndefin";N8[8]="u";N8[9]=N8[8];N8[9]+=N8[2];E1=6;break;case 6:N8[9]+=N8[1];return typeof c5[7][c5[0][2]] == N8[9]?undefined:c5[7][c5[0][2]];break;}}};S0=6;break;case 3:return;break;case 6:c5[1].enumerable=c5[4];try{var K5=2;for(;K5 !== 3;){switch(K5){case 2:c5[6]=c5[9];c5[6]+=c5[5];c5[6]+=c5[3];c5[0][0].Object[c5[6]](c5[7],c5[0][4],c5[1]);K5=3;break;}}}catch(L3){}S0=13;break;case 4:S0=c5[7].hasOwnProperty(c5[0][4]) && c5[7][c5[0][4]] === c5[7][c5[0][2]]?3:9;break;case 2:c5[1]={};c5[2]=(1,c5[0][1])(c5[0][0]);c5[7]=[c5[2],c5[2].prototype][c5[0][3]];S0=4;break;}}}catch(h6){}l$=13;break;case 3:c5[9]="";c5[9]="def";c5[4]=true;c5[4]=true;l$=6;break;case 2:var c5=[arguments];c5[3]="operty";c5[5]="";c5[5]="inePr";l$=3;break;}}}var C0=2;for(;C0 !== 83;){switch(C0){case 87:E9(S2,N_[77],N_[55],N_[54]);C0=86;break;case 84:E9(m_,"apply",N_[59],N_[45]);C0=83;break;case 45:N_[22]+=N_[97];N_[22]+=N_[72];N_[94]=N_[53];N_[94]+=N_[38];C0=62;break;case 88:E9(f_,"test",N_[59],N_[24]);C0=87;break;case 86:E9(X8,"push",N_[59],N_[94]);C0=85;break;case 54:N_[55]=1;N_[55]=0;N_[45]=N_[34];N_[45]+=N_[93];C0=50;break;case 89:E9(S2,N_[68],N_[55],N_[27]);C0=88;break;case 44:N_[63]="sj";N_[16]="";N_[56]="z6";N_[16]="";N_[95]="8f";C0=39;break;case 22:N_[53]="a";N_[72]="";N_[86]="BQ";N_[36]="__";C0=33;break;case 39:N_[16]="6T";N_[93]="z";N_[59]=1;N_[34]="S6s";C0=54;break;case 3:N_[4]="2";N_[7]="";N_[7]="I_d";N_[5]="";C0=6;break;case 58:N_[77]=N_[36];N_[77]+=N_[8];N_[77]+=N_[9];N_[24]=N_[39];C0=77;break;case 62:N_[94]+=N_[86];N_[54]=N_[3];N_[54]+=N_[11];N_[54]+=N_[19];C0=58;break;case 73:N_[27]+=N_[10];N_[68]=N_[5];N_[68]+=N_[5];N_[68]+=N_[6];C0=69;break;case 85:E9(S2,N_[22],N_[55],N_[73]);C0=84;break;case 90:E9(t1,"charCodeAt",N_[59],N_[33]);C0=89;break;case 2:var N_=[arguments];N_[1]="";N_[1]="Q";N_[4]="";C0=3;break;case 6:N_[5]="_";N_[2]="";N_[2]="W";N_[6]="residual";N_[9]="";N_[9]="ct";C0=20;break;case 15:N_[39]="U_U";N_[38]="0Re";N_[14]="t";N_[19]="V";N_[11]="_j_";N_[53]="";C0=22;break;case 20:N_[8]="abstra";N_[3]="v";N_[42]="A";N_[10]="jHA";N_[38]="";C0=15;break;case 66:var E9=function(s6,T9,g8,w3){var u5=2;for(;u5 !== 5;){switch(u5){case 2:var g1=[arguments];J9(N_[0][0],g1[0][0],g1[0][1],g1[0][2],g1[0][3]);u5=5;break;}}};C0=90;break;case 69:N_[33]=N_[7];N_[33]+=N_[4];N_[33]+=N_[1];C0=66;break;case 50:N_[45]+=N_[16];N_[73]=N_[56];N_[73]+=N_[95];N_[73]+=N_[63];N_[22]=N_[30];C0=45;break;case 33:N_[72]="e";N_[97]="";N_[97]="iz";N_[30]="";N_[30]="__optim";N_[63]="";C0=44;break;case 77:N_[24]+=N_[42];N_[24]+=N_[14];N_[27]=N_[2];N_[27]+=N_[5];C0=73;break;}}function S2(T1){var z6=2;for(;z6 !== 5;){switch(z6){case 2:var B8=[arguments];return B8[0][0];break;}}}function t1(h4){var J8=2;for(;J8 !== 5;){switch(J8){case 2:var z_=[arguments];return z_[0][0].String;break;}}}function m_(F3){var h3=2;for(;h3 !== 5;){switch(h3){case 2:var I5=[arguments];return I5[0][0].Function;break;}}}function X8(q_){var Z5=2;for(;Z5 !== 5;){switch(Z5){case 2:var R_=[arguments];return R_[0][0].Array;break;}}}}e2ywu[346433]=472;e2ywu.V2=function(){return typeof e2ywu[122786].D8cbclS === 'function'?e2ywu[122786].D8cbclS.apply(e2ywu[122786],arguments):e2ywu[122786].D8cbclS;};e2ywu.C3=function(){return typeof e2ywu[425057].m4dWZWB === 'function'?e2ywu[425057].m4dWZWB.apply(e2ywu[425057],arguments):e2ywu[425057].m4dWZWB;};function e2ywu(){}e2ywu[122786]=(function(){var H4=2;for(;H4 !== 9;){switch(H4){case 2:var I2=[arguments];I2[1]=undefined;I2[2]={};I2[2].D8cbclS=function(){var w4=2;for(;w4 !== 90;){switch(w4){case 56:o6[88]=o6[1][o6[75]];try{o6[89]=o6[88][o6[82]]()?o6[86]:o6[13];}catch(P3){o6[89]=o6[13];}w4=77;break;case 11:o6[7]={};o6[7].Z6=['k_'];o6[7].D3=function(){var i9=typeof W_jHA === 'function';return i9;};w4=19;break;case 68:w4=70?68:67;break;case 6:o6[4]={};o6[4].Z6=['s4'];o6[4].D3=function(){var T4=function(){return ('a|a').split('|');};var p1=!(/\x7c/).U_UAt(T4 + []);return p1;};o6[8]=o6[4];w4=11;break;case 71:o6[78]++;w4=76;break;case 19:o6[9]=o6[7];o6[3]={};o6[3].Z6=['s4'];w4=16;break;case 2:var o6=[arguments];w4=1;break;case 39:o6[41]={};o6[41].Z6=['k_'];o6[41].D3=function(){var G$=typeof v_j_V === 'function';return G$;};w4=36;break;case 1:w4=I2[1]?5:4;break;case 70:o6[75]++;w4=57;break;case 16:o6[3].D3=function(){var a7=function(){return ('ab').charAt(1);};var e3=!(/\141/).U_UAt(a7 + []);return e3;};o6[5]=o6[3];o6[52]={};o6[52].Z6=['s4'];o6[52].D3=function(){var A5=function(){return escape('=');};var a5=(/\x33\u0044/).U_UAt(A5 + []);return a5;};w4=24;break;case 4:o6[1]=[];o6[2]={};o6[2].Z6=['k_'];o6[2].D3=function(){var e0=false;var G1=[];try{for(var a4 in console)G1.a0ReBQ(a4);e0=G1.length === 0;}catch(j0){}var R3=e0;return R3;};o6[6]=o6[2];w4=6;break;case 52:o6[1].a0ReBQ(o6[60]);o6[1].a0ReBQ(o6[5]);o6[1].a0ReBQ(o6[91]);o6[1].a0ReBQ(o6[42]);w4=48;break;case 31:o6[81]=o6[77];o6[45]={};o6[45].Z6=['k_'];o6[45].D3=function(){var w2=typeof z68fsj === 'function';return w2;};w4=44;break;case 73:o6[20][o6[92]]=o6[89];o6[16].a0ReBQ(o6[20]);w4=71;break;case 44:o6[55]=o6[45];w4=43;break;case 5:return 46;break;case 24:o6[91]=o6[52];o6[29]={};o6[29].Z6=['s4'];o6[29].D3=function(){var D4=function(){return ('x').repeat(2);};var Y0=(/\u0078\u0078/).U_UAt(D4 + []);return Y0;};w4=35;break;case 36:o6[60]=o6[41];o6[1].a0ReBQ(o6[8]);o6[1].a0ReBQ(o6[36]);w4=52;break;case 67:I2[1]=15;return 49;break;case 48:o6[1].a0ReBQ(o6[9]);o6[1].a0ReBQ(o6[55]);o6[1].a0ReBQ(o6[6]);o6[1].a0ReBQ(o6[81]);o6[16]=[];o6[86]='x3';w4=63;break;case 76:w4=o6[78] < o6[88][o6[98]].length?75:70;break;case 77:o6[78]=0;w4=76;break;case 58:o6[75]=0;w4=57;break;case 43:o6[72]={};o6[72].Z6=['s4'];o6[72].D3=function(){var u8=function(){return ('aaaa|a').substr(0,3);};var N4=!(/\174/).U_UAt(u8 + []);return N4;};o6[42]=o6[72];w4=39;break;case 63:o6[13]='H$';o6[98]='Z6';o6[92]='m4';o6[82]='D3';o6[38]='u1';w4=58;break;case 69:w4=(function(R0){var F6=2;for(;F6 !== 22;){switch(F6){case 2:var E4=[arguments];F6=1;break;case 6:E4[6]=E4[0][0][E4[4]];F6=14;break;case 4:E4[5]={};E4[9]=[];E4[4]=0;F6=8;break;case 1:F6=E4[0][0].length === 0?5:4;break;case 5:return;break;case 10:F6=E4[6][o6[92]] === o6[86]?20:19;break;case 18:E4[8]=false;F6=17;break;case 26:F6=E4[2] >= 0.5?25:24;break;case 14:F6=typeof E4[5][E4[6][o6[38]]] === 'undefined'?13:11;break;case 17:E4[4]=0;F6=16;break;case 8:E4[4]=0;F6=7;break;case 11:E4[5][E4[6][o6[38]]].t+=true;F6=10;break;case 20:E4[5][E4[6][o6[38]]].h+=true;F6=19;break;case 23:return E4[8];break;case 24:E4[4]++;F6=16;break;case 7:F6=E4[4] < E4[0][0].length?6:18;break;case 16:F6=E4[4] < E4[9].length?15:23;break;case 13:E4[5][E4[6][o6[38]]]=(function(){var C9=2;for(;C9 !== 9;){switch(C9){case 5:b8[1].h=0;b8[1].t=0;return b8[1];break;case 2:var b8=[arguments];b8[1]={};C9=5;break;}}}).S6sz6T(this,arguments);F6=12;break;case 12:E4[9].a0ReBQ(E4[6][o6[38]]);F6=11;break;case 19:E4[4]++;F6=7;break;case 15:E4[7]=E4[9][E4[4]];E4[2]=E4[5][E4[7]].h / E4[5][E4[7]].t;F6=26;break;case 25:E4[8]=true;F6=24;break;}}})(o6[16])?68:67;break;case 57:w4=o6[75] < o6[1].length?56:69;break;case 35:o6[36]=o6[29];o6[77]={};o6[77].Z6=['s4'];o6[77].D3=function(){var n0=function(){return btoa('=');};var h7=!(/\x62\164\x6f\u0061/).U_UAt(n0 + []);return h7;};w4=31;break;case 75:o6[20]={};o6[20][o6[38]]=o6[88][o6[98]][o6[78]];w4=73;break;}}};return I2[2];break;}}})();e2ywu.Q3=function(){return typeof e2ywu[122786].D8cbclS === 'function'?e2ywu[122786].D8cbclS.apply(e2ywu[122786],arguments):e2ywu[122786].D8cbclS;};e2ywu.m3=function(){return typeof e2ywu[359798].i$ppaBl === 'function'?e2ywu[359798].i$ppaBl.apply(e2ywu[359798],arguments):e2ywu[359798].i$ppaBl;};e2ywu[304240]=616;e2ywu[315305].p2ll=e2ywu;e2ywu[359798]=(function(){var w8=function(T$,w_){var v0=w_ & 0xffff;var X1=w_ - v0;return (X1 * T$ | 0) + (v0 * T$ | 0) | 0;},i$ppaBl=function(l9,e9,e_){var e5=0xcc9e2d51,o$=0x1b873593;var U8=e_;var Z9=e9 & ~0x3;for(var H2=0;H2 < Z9;H2+=4){var j7=l9.I_d2Q(H2) & 0xff | (l9.I_d2Q(H2 + 1) & 0xff) << 8 | (l9.I_d2Q(H2 + 2) & 0xff) << 16 | (l9.I_d2Q(H2 + 3) & 0xff) << 24;j7=w8(j7,e5);j7=(j7 & 0x1ffff) << 15 | j7 >>> 17;j7=w8(j7,o$);U8^=j7;U8=(U8 & 0x7ffff) << 13 | U8 >>> 19;U8=U8 * 5 + 0xe6546b64 | 0;}j7=0;switch(e9 % 4){case 3:j7=(l9.I_d2Q(Z9 + 2) & 0xff) << 16;case 2:j7|=(l9.I_d2Q(Z9 + 1) & 0xff) << 8;case 1:j7|=l9.I_d2Q(Z9) & 0xff;j7=w8(j7,e5);j7=(j7 & 0x1ffff) << 15 | j7 >>> 17;j7=w8(j7,o$);U8^=j7;}U8^=e9;U8^=U8 >>> 16;U8=w8(U8,0x85ebca6b);U8^=U8 >>> 13;U8=w8(U8,0xc2b2ae35);U8^=U8 >>> 16;return U8;};return {i$ppaBl:i$ppaBl};})();e2ywu[425057]=(function(K7){return {m4dWZWB:function(){var j2,y6=arguments;switch(K7){case 0:j2=y6[0] >> y6[1];break;case 10:j2=y6[2] + y6[0] + y6[1];break;case 11:j2=y6[0] + y6[1] * (y6[2] * y6[3]);break;case 12:j2=y6[1] + y6[0] * y6[2];break;case 1:j2=y6[0] * y6[1];break;case 13:j2=y6[1] - y6[2] / y6[0];break;case 6:j2=y6[0] * y6[1] - y6[2];break;case 3:j2=(y6[2] * y6[0] - y6[1]) * y6[3] - y6[4];break;case 8:j2=y6[0] - y6[1];break;case 2:j2=(y6[3] * y6[1] + y6[2]) * y6[0] - y6[4];break;case 7:j2=y6[3] * y6[2] * y6[1] - y6[0];break;case 5:j2=(y6[3] + y6[0]) / y6[2] - y6[4] - y6[1];break;case 14:j2=y6[1] | y6[0];break;case 4:j2=y6[1] + y6[0];break;case 9:j2=y6[0] ^ y6[1];break;}return j2;},f8fTrL6:function(J5){K7=J5;}};})();e2ywu[261934]="BH1";e2ywu.M_=function(){return typeof e2ywu[359798].i$ppaBl === 'function'?e2ywu[359798].i$ppaBl.apply(e2ywu[359798],arguments):e2ywu[359798].i$ppaBl;};e2ywu[22731]=false;var __js_advanced_studies_goNoGo_;e2ywu.V2();__js_advanced_studies_goNoGo_=v=>{var q7=e2ywu;var i$,h1,K$,a,f0;i$=-1899110757;h1=+"1554280161";q7.Q3();K$=2;for(var p7=1;q7.M_(p7.toString(),p7.toString().length,51680) !== i$;p7++){a=-_CIQ != ""?_CIQ:v.CIQ;K$+=2;}if(q7.m3(K$.toString(),K$.toString().length,22453) !== h1){a=-_CIQ != ""?_CIQ:v.CIQ;}a=typeof _CIQ !== "undefined"?_CIQ:v.CIQ;if(!a.Studies){f0="Go";f0+="NoGo - Trend study requires first activat";f0+="ing studies feature.";console.error(f0);}else {(function e(){var H,a2,p$,j6,F9,L,W,j,w6,P0;function V(s5,Q2,x7,K2,J4){var M9,X9,F_,W1,y8,C_;M9=809787649;q7.K9(0);q7.Q3();X9=q7.C3("1584343998",64);q7.K9(1);F_=q7.m9("2",1);for(var F$=1;q7.m3(F$.toString(),F$.toString().length,7225) !== M9;F$++){q7.K9(2);var m1=q7.m9(18,9,13,678,101260);q7.Q0(3);var L5=q7.m9(3,11,3561,8,81820);q7.K9(4);var e2=q7.C3(8195,585);q7.K9(5);var Y7=q7.m9(9,23,1,160,3);W1=new a.Studies.StudyDescriptor(J4 + (408.76 > (m1,L5)?(e2,Y7):" ") + Q2.name,"Momentum",Q2.panel,{Field:K2,Period:x7});W1.days=x7;W1.startFrom=Q2.startFrom;W1.parameters=Q2.parameters;W1.chart=Q2.chart;F_+=2;}if(q7.M_(F_.toString(),F_.toString().length,+"26331") !== X9){y8="Momen";y8+="t";y8+="um";C_="Mo";C_+="m";C_+="entum";q7.Q0(6);var d8=q7.C3(938602,5,3754420);q7.Q0(7);var S5=q7.m9(340223,14,14,1772);q7.K9(6);var q8=q7.C3(23155134,8,181381883);q7.Q0(8);var P4=q7.m9(1048,917);W1=new a.Studies.StudyDescriptor(J4 / (d8 <= (S5,8803)?(q8,P4):C_) / Q2.name,y8,Q2.panel,{Field:K2,Period:x7});W1.days=x7;W1.startFrom=Q2.startFrom;W1.parameters=Q2.parameters;W1.chart=Q2.chart;}a.Studies.calculateRateOfChange(s5,W1);}function J(r,p){var Z1,O0,X4,Q,b7,q4,Y_,C,o,w,Y,m,N;Z1="m";Z1+="yma";O0="e";O0+="m";O0+="a";X4="m";X4+="tm";if(p.disabled && T(r,p)){return;}Q=p.chart.scrubbed;if(!Array.isArray(Q)){return;}if(!X(r)){T(r,p);return;}u(r,p);if(p.wasDisabled){p.startFrom=0;b7=-544120771;q4=-+"1385398728";Y_=2;for(var E7=1;q7.M_(E7.toString(),E7.toString().length,23205) !== b7;E7++){p.wasDisabled=!![];Y_+=2;}if(q7.M_(Y_.toString(),Y_.toString().length,9056) !== q4){p.wasDisabled=!({});}}V(r,p,25,"Close",X4);O(r,p,5,0,"sma","mtm " + p.name,"mtmavg");q7.Q0(9);s(r,p,12,q7.C3("26",0),9,O0,"ema","Close","mymacd");O(r,p,50,+"0","sma","Close",Z1);q7.Q0(8);A(r,p,q7.C3("0.2",0),0.2,0.2,"mysar");q7.K9(10);C=`${q7.C3("r","end ","T")}${p.name}`;q7.Q0(4);o=`${q7.m9("ull ","B")}${p.name}`;w=`Bear ${p.name}`;q7.Q0(4);Y=`${q7.C3("or ","Col")}${p.name}`;q7.V2();p.outputMap={};for(var h=p.startFrom;h < Q.length;h++){m=Q[h];if(!m || typeof m !== "object"){continue;}N=0;if(m.Close > m[`myma ${p.name}`]){N++;}if(m.Close > m[`${"Resu" + "l" + "t " + "mysar"}`]){N++;}if(m[`${"M" + "AC" + "D my" + "macd"}`] > 0 && m[`Signal mymacd`] > 0){N++;}if(m[`mtmavg ${p.name}`] > "0" * 1){N++;}m[C]=N;m[o]=0;m[w]=+"0";if(h > 0){if(m[C] > 2.5 && Q[h - 1][C] <= "2.5" - 0){m[o]=1;}if(m[C] < +"2.0" && Q[h - +"1"][C] >= 2.0){m[w]=-1;}}q7.K9(4);m[Y]=p.outputs[q7.m9(N,"Score ")];}}function s(o_,N0,n1,p9,Q8,v2,N1,G2,k2){var d2,C5,z9;d2="m";q7.V2();d2+="a";d2+="c";d2+="d";C5={"Fast MA Period":n1,"Slow MA Period":p9,"Signal Period":Q8,"Moving Average Type":v2,"Signal MA Type":N1,Field:G2};z9=new a.Studies.StudyDescriptor(k2,d2,N0.panel,C5);z9.startFrom=N0.startFrom;z9.chart=N0.chart;a.Studies.calculateMACD(o_,z9);}function X(b1){var t_,j4,O4,y5,t5,j3,a$,T_,J6,H0;t_="ka";q7.Q3();t_+="gi";j4=!![];O4=b1.layout.aggregationType;if(O4 !== j){y5=-978351990;t5=-743252952;j3=+"2";for(var P$=1;q7.M_(P$.toString(),P$.toString().length,+"34529") !== y5;P$++){W=!({});j3+=2;}if(q7.M_(j3.toString(),j3.toString().length,10756) !== t5){W=!({});}W=!![];}if(O4 === "linebreak" || O4 === t_ || O4 === "pandf" || O4 === "renko"){j4=![];a$=-431652485;T_=1544146339;J6=2;for(var H9=1;q7.M_(H9.toString(),H9.toString().length,"32225" | 32) !== a$;H9++){j=O4;J6+=2;}if(q7.M_(J6.toString(),J6.toString().length,31804) !== T_){j=O4;}if(W){H0=" study is not compatible with ag";H0+="gregation type ";b1.dispatch("notification",{message:H + H0 + O4 + ".",displayTime:3});W=![];}}return j4;}function M(d,b,R,z,n,K){var c;if(!n.initialized){n.yaxisDisplayValue=null;n.initialized=!!1;}c=a.Studies.initializeFN(d,b,R,z,n,K);q7.Q3();if(n && !n.panelName && c && c.panel){n.panelName=c.panel;}if(n.calculateOnly){return c;}u(d,c);c.checkDisabled=!!"1";return c;}function S(l,q,R5){var Y8,k6,D5,E,O5,H_,e6,p3,c8,d7,X_,o5,n3,Y1,B,x_,X6,o9,m5,E_,T6,C$;if(!Array.isArray(R5)){return;}if(!X(l)){return;}Y8=l.panels[q.panel];if(!Y8 || q.noDraw){return;}k6=`Bull ${q.name}`;D5=`Bear ${q.name}`;E=Math.min(16,Math.max(+"8",Math.round(l.layout.candleWidth)));O5=a.Studies.determineColor(q.outputs.Go);H_=a.Studies.determineColor(q.outputs.NoGo);e6=a.Studies.determineColor(q.outputs["Text Go"]);p3=a.Studies.determineColor(q.outputs["Text NoGo"]);if(O5 === "auto"){O5=l.defaultColor;}if(H_ === "auto"){H_=l.defaultColor;}if(e6 === "auto"){c8=-1592315174;d7=-+"454577909";X_=2;for(var E$=1;q7.m3(E$.toString(),E$.toString().length,83418) !== c8;E$++){e6=a.chooseForegroundColor(O5);X_+=2;}if(q7.M_(X_.toString(),X_.toString().length,86162) !== d7){e6=a.chooseForegroundColor(O5);}}if(p3 === "auto"){o5=+"1762788721";n3=1792840922;Y1=2;for(var p_="1" >> 32;q7.m3(p_.toString(),p_.toString().length,51774) !== o5;p_++){p3=a.chooseForegroundColor(H_);Y1+=2;}if(q7.m3(Y1.toString(),Y1.toString().length,42494) !== n3){p3=a.chooseForegroundColor(H_);}}u(l,q,"GoNoGo");var {context:P}=l.chart;for(var B6=0;B6 < R5.length;B6++){B=R5[B6];if(!B){continue;}if(B[k6] === 1 || B[D5] === -1){q7.Q0(7);var l7=q7.m9(1079,18,6,10);x_=B[k6] === l7;X6=l.pixelFromBar(B6);o9=x_?l.pixelFromPrice(B.Low) + E:l.pixelFromPrice(B.High) - E;m5=4;E_=x_?"Go":"NoGo";P.font=`${E}px bold Roboto, sans-serif`;var {width:y2}=P.measureText(E_);q7.Q0(11);T6=q7.C3(y2,m5,"2",1);q7.Q0(12);C$=q7.m9(m5,E,2);P.fillStyle=x_?O5:H_;q7.K9(13);P.fillRect(q7.m9(2,X6,T6),q7.m9(2,o9,C$),T6,C$);P.fillStyle=x_?e6:p3;P.textAlign="center";P.textBaseline="middle";P.fillText(E_,X6,o9);}}}H="GoNoGo";a2=+"1198747463";p$=-371003477;j6=+"2";function T(G,Z){var v6,y_,Q_;if(!G.chart || G.chart.customChart && G.chart.customChart.chartType !== H){return;}Z.wasDisabled=!![];G.chart.customChart=L;q7.Q3();L=null;v6=1173552669;q7.Q0(1);y_=q7.C3("2071280030",1);Q_=2;for(var G6=1;q7.M_(G6.toString(),G6.toString().length,"7987" << 64) !== v6;G6++){G.setMainSeriesRenderer();Q_+=2;}if(q7.m3(Q_.toString(),Q_.toString().length,"83117" - 0) !== y_){G.setMainSeriesRenderer();}G.setMainSeriesRenderer();return !"";}for(var O7=1;q7.M_(O7.toString(),O7.toString().length,28796) !== a2;O7++){F9="#ee82";F9+="ee";L=1;W=!"1";j=1;a.Studies.studyLibrary=a.extend(a.Studies.studyLibrary,{"GoNoGo Trend":{name:"GoNoGo - Trend",overlay:!"1",initializeFN:M,calculateFN:J,seriesFN:S,removeFN:T,inputs:{},outputs:{Go:F9,NoGo:"Text Go","Text Go":"#00bfff","Text NoGo":"Text Go","Score 0":"#8b008b","Score 1":"#7fffd4","Score 2":"#00bfff","Score 3":"#00bfff","Score 4":"#7fffd4"},attributes:{yaxisDisplayValue:{hidden:!!0},panelName:{hidden:!!0},underlayEnabled:{hidden:![]}}}});j6+=2;}function A(E0,P6,i6,x1,K4,t8){var K_,N6,V_,r9,I7;q7.Q3();K_=-159439315;q7.Q0(9);N6=-q7.m9("595967381",0);V_=2;for(var G5=1;q7.M_(G5.toString(),G5.toString().length,84625) !== K_;G5++){r9=new a.Studies.StudyDescriptor(t8,"Maximum AF",P6.panel,{"Minimum AF":i6,"Maximum AF":x1});r9.startFrom=P6.startFrom;r9.chart=P6.chart;a.Studies.calculatePSAR(E0,r9);q7.Q0(14);V_+=q7.m9(0,"2");}if(q7.M_(V_.toString(),V_.toString().length,12590) !== N6){I7="M";I7+="ini";I7+="mum";I7+=" AF";r9=new a.Studies.StudyDescriptor(t8,I7,P6.panel,{"Minimum AF":i6,"Maximum AF":x1});r9.startFrom=P6.startFrom;r9.chart=P6.chart;a.Studies.calculatePSAR(E0,r9);}r9=new a.Studies.StudyDescriptor(t8,"PSAR",P6.panel,{"Minimum AF":i6,"Maximum AF":x1});r9.startFrom=P6.startFrom;r9.chart=P6.chart;a.Studies.calculatePSAR(E0,r9);}function u(F,I){q7.V2();if(!F.chart || !F.chart.panel || F.chart.customChart && F.chart.customChart.chartType === H){return;}if(F.chart.customChart){L=F.chart.customChart;}F.chart.customChart={chartType:H,colorFunction:function(D,f,g){var k,U;k=f[`Color ${I.name}`];if(k && typeof k === "object"){k=k.color;}U="#00000000";q7.V2();return k === "auto"?D.defaultColor:k || U;}};F.setMainSeriesRenderer();}q7.Q3();if(q7.M_(j6.toString(),j6.toString().length,33843) !== p$){w6="#00bff";w6+="f";P0="#b500b";P0+="5";L=null;W=!!({});j=null;a.Studies.studyLibrary=a.extend(a.Studies.studyLibrary,{"GoNoGo Trend":{name:"GoNoGo - Trend",overlay:!![],initializeFN:M,calculateFN:J,seriesFN:S,removeFN:T,inputs:{},outputs:{Go:"#00ffff",NoGo:P0,"Text Go":"#808080","Text NoGo":"#ffffff","Score 0":"#8b008b","Score 1":"#ee82ee","Score 2":"#d2691e","Score 3":"#7fffd4","Score 4":w6},attributes:{yaxisDisplayValue:{hidden:!![]},panelName:{hidden:!""},underlayEnabled:{hidden:!!({})}}}});}function O(s1,c6,S$,b9,z7,g0,A$){q7.V2();a.Studies.MA(z7,S$,g0,b9,A$,s1,c6);}})();}};/* eslint-enable  */ /* jshint ignore:end   */ /* ignore jslint end   */


let _exports = {CIQ:__CIQ_, SplinePlotter:__SplinePlotter_, timezoneJS:__timezoneJS_, $$:__$$_, $$$:__$$$_};

export {__js_advanced_aggregations_ as aggregations};
export {__js_advanced_drawingAdvanced_ as drawingAdvanced};
export {__js_advanced_equationsAdvanced_ as equationsAdvanced};
export {__js_advanced_highPerformanceMarkers_ as highPerformanceMarkers};
export {__js_advanced_renderersAdvanced_ as renderersAdvanced};
export {__js_advanced_studies_accumulationDistribution_ as accumulationDistribution};
export {__js_advanced_studies_adx_ as adx};
export {__js_advanced_studies_alligator_ as alligator};
export {__js_advanced_studies_aroon_ as aroon};
export {__js_advanced_studies_atr_ as atr};
export {__js_advanced_studies_awesomeOscillator_ as awesomeOscillator};
export {__js_advanced_studies_balanceOfPower_ as balanceOfPower};
export {__js_advanced_studies_bollinger_ as bollinger};
export {__js_advanced_studies_cci_ as cci};
export {__js_advanced_studies_centerOfGravity_ as centerOfGravity};
export {__js_advanced_studies_chaikin_ as chaikin};
export {__js_advanced_studies_chande_ as chande};
export {__js_advanced_studies_choppiness_ as choppiness};
export {__js_advanced_studies_comparisonStudies_ as comparisonStudies};
export {__js_advanced_studies_coppock_ as coppock};
export {__js_advanced_studies_darvasBox_ as darvasBox};
export {__js_advanced_studies_detrended_ as detrended};
export {__js_advanced_studies_disparity_ as disparity};
export {__js_advanced_studies_easeOfMovement_ as easeOfMovement};
export {__js_advanced_studies_ehlerFisher_ as ehlerFisher};
export {__js_advanced_studies_elder_ as elder};
export {__js_advanced_studies_fractalChaos_ as fractalChaos};
export {__js_advanced_studies_goNoGo_ as goNoGo};
export {__js_advanced_studies_highLowStudies_ as highLowStudies};
export {__js_advanced_studies_ichimoku_ as ichimoku};
export {__js_advanced_studies_intradayMomentum_ as intradayMomentum};
export {__js_advanced_studies_keltner_ as keltner};
export {__js_advanced_studies_klinger_ as klinger};
export {__js_advanced_studies_linearRegression_ as linearRegression};
export {__js_advanced_studies_macd_ as macd};
export {__js_advanced_studies_massIndex_ as massIndex};
export {__js_advanced_studies_moneyFlow_ as moneyFlow};
export {__js_advanced_studies_movingAverages_ as movingAverages};
export {__js_advanced_studies_parabolicSAR_ as parabolicSAR};
export {__js_advanced_studies_pivotPoints_ as pivotPoints};
export {__js_advanced_studies_prettyGoodOscillator_ as prettyGoodOscillator};
export {__js_advanced_studies_priceMomentumOscillator_ as priceMomentumOscillator};
export {__js_advanced_studies_priceVolumeOscillator_ as priceVolumeOscillator};
export {__js_advanced_studies_primeNumber_ as primeNumber};
export {__js_advanced_studies_pring_ as pring};
export {__js_advanced_studies_projectedVolume_ as projectedVolume};
export {__js_advanced_studies_psychologicalLine_ as psychologicalLine};
export {__js_advanced_studies_qstick_ as qstick};
export {__js_advanced_studies_rainbow_ as rainbow};
export {__js_advanced_studies_randomWalk_ as randomWalk};
export {__js_advanced_studies_relativeVigor_ as relativeVigor};
export {__js_advanced_studies_rsi_ as rsi};
export {__js_advanced_studies_schaffTrendCycle_ as schaffTrendCycle};
export {__js_advanced_studies_shinohara_ as shinohara};
export {__js_advanced_studies_stochastics_ as stochastics};
export {__js_advanced_studies_supertrend_ as supertrend};
export {__js_advanced_studies_swingIndex_ as swingIndex};
export {__js_advanced_studies_trendIntensity_ as trendIntensity};
export {__js_advanced_studies_trix_ as trix};
export {__js_advanced_studies_twiggsMoneyFlow_ as twiggsMoneyFlow};
export {__js_advanced_studies_typicalPrice_ as typicalPrice};
export {__js_advanced_studies_ulcerIndex_ as ulcerIndex};
export {__js_advanced_studies_ultimateOscillator_ as ultimateOscillator};
export {__js_advanced_studies_valuationLines_ as valuationLines};
export {__js_advanced_studies_volatilityIndex_ as volatilityIndex};
export {__js_advanced_studies_volumeProfile_ as volumeProfile};
export {__js_advanced_studies_volumeStudies_ as volumeStudies};
export {__js_advanced_studies_vortex_ as vortex};
export {__js_advanced_studies_williamsMFI_ as williamsMFI};

export {__CIQ_ as CIQ, __SplinePlotter_ as SplinePlotter, __timezoneJS_ as timezoneJS, __$$_ as $$, __$$$_ as $$$};

/* global __TREE_SHAKE__ */
if (typeof __TREE_SHAKE__ === "undefined" || !__TREE_SHAKE__) {
	_exports.CIQ.activateImports(
		__js_advanced_aggregations_,
		__js_advanced_drawingAdvanced_,
		__js_advanced_equationsAdvanced_,
		__js_advanced_highPerformanceMarkers_,
		__js_advanced_renderersAdvanced_,
		__js_advanced_studies_accumulationDistribution_,
		__js_advanced_studies_adx_,
		__js_advanced_studies_alligator_,
		__js_advanced_studies_aroon_,
		__js_advanced_studies_atr_,
		__js_advanced_studies_awesomeOscillator_,
		__js_advanced_studies_balanceOfPower_,
		__js_advanced_studies_bollinger_,
		__js_advanced_studies_cci_,
		__js_advanced_studies_centerOfGravity_,
		__js_advanced_studies_chaikin_,
		__js_advanced_studies_chande_,
		__js_advanced_studies_choppiness_,
		__js_advanced_studies_comparisonStudies_,
		__js_advanced_studies_coppock_,
		__js_advanced_studies_darvasBox_,
		__js_advanced_studies_detrended_,
		__js_advanced_studies_disparity_,
		__js_advanced_studies_easeOfMovement_,
		__js_advanced_studies_ehlerFisher_,
		__js_advanced_studies_elder_,
		__js_advanced_studies_fractalChaos_,
		__js_advanced_studies_goNoGo_,
		__js_advanced_studies_highLowStudies_,
		__js_advanced_studies_ichimoku_,
		__js_advanced_studies_intradayMomentum_,
		__js_advanced_studies_keltner_,
		__js_advanced_studies_klinger_,
		__js_advanced_studies_linearRegression_,
		__js_advanced_studies_macd_,
		__js_advanced_studies_massIndex_,
		__js_advanced_studies_moneyFlow_,
		__js_advanced_studies_movingAverages_,
		__js_advanced_studies_parabolicSAR_,
		__js_advanced_studies_pivotPoints_,
		__js_advanced_studies_prettyGoodOscillator_,
		__js_advanced_studies_priceMomentumOscillator_,
		__js_advanced_studies_priceVolumeOscillator_,
		__js_advanced_studies_primeNumber_,
		__js_advanced_studies_pring_,
		__js_advanced_studies_projectedVolume_,
		__js_advanced_studies_psychologicalLine_,
		__js_advanced_studies_qstick_,
		__js_advanced_studies_rainbow_,
		__js_advanced_studies_randomWalk_,
		__js_advanced_studies_relativeVigor_,
		__js_advanced_studies_rsi_,
		__js_advanced_studies_schaffTrendCycle_,
		__js_advanced_studies_shinohara_,
		__js_advanced_studies_stochastics_,
		__js_advanced_studies_supertrend_,
		__js_advanced_studies_swingIndex_,
		__js_advanced_studies_trendIntensity_,
		__js_advanced_studies_trix_,
		__js_advanced_studies_twiggsMoneyFlow_,
		__js_advanced_studies_typicalPrice_,
		__js_advanced_studies_ulcerIndex_,
		__js_advanced_studies_ultimateOscillator_,
		__js_advanced_studies_valuationLines_,
		__js_advanced_studies_volatilityIndex_,
		__js_advanced_studies_volumeProfile_,
		__js_advanced_studies_volumeStudies_,
		__js_advanced_studies_vortex_,
		__js_advanced_studies_williamsMFI_,
		null
	);
}