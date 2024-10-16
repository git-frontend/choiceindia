/**
 *	8.7.0
 *	Generation date: 2022-06-06T12:02:49.417Z
 *	Client name: choice broking
 *	Package Type: Technical Analysis e98f22c
 *	License type: annual
 *	Expiration date: "2022/08/11"
 *	Domain lock: ["127.0.0.1","localhost","choicebroking.in","choiceindia.com"]
 *	Filesystem lock: "file://*", "file:///c:/*", "file:///d:/*", "file:///e:/*"
 *	iFrame lock: true
 */

/***********************************************************
 * Copyright by ChartIQ, Inc.
 * Licensed under the ChartIQ, Inc. Developer License Agreement https://www.chartiq.com/developer-license-agreement
*************************************************************/
/*************************************** DO NOT MAKE CHANGES TO THIS LIBRARY FILE!! **************************************/
/* If you wish to overwrite default functionality, create a separate file with a copy of the methods you are overwriting */
/* and load that file right after the library has been loaded, but before the chart engine is instantiated.              */
/* Directly modifying library files will prevent upgrades and the ability for ChartIQ to support your solution.          */
/*************************************************************************************************************************/
/* eslint-disable no-extra-parens */




let __js_core__init_ = (_exports) => {

//-------------------------------------------------------------------------------------------
// Required objects and functions for initialization
//-------------------------------------------------------------------------------------------

var timezoneJS = (_exports.timezoneJS = {});

/**
 * Base namespace for CIQ library
 *
 * Previously `STX`
 * @name CIQ
 * @namespace
 */
function CIQ() {}
_exports.CIQ = CIQ;

/**
 * Information about the chart package inserted by the packager.
 *
 * @type Object
 * @private
 * @since 8.6.0
 * @memberof CIQ
 */
CIQ.packageInfo = Object.freeze({"version":"8.7.0","generationDate":"2022-06-06T12:02:49.417Z","clientName":"choice broking","packageType":"Technical Analysis e98f22c","licenseType":"annual","expirationDate":"\"2022/08/11\"","domainLock":"[\"127.0.0.1\",\"localhost\",\"choicebroking.in\",\"choiceindia.com\"]","iframeLock":"Locked"});

/**
 * Disable display of chart library version and package information in the console.
 *
 * @type boolean
 * @private
 * @since 8.6.0
 * @memberof CIQ
 */
CIQ.suppressPackageInfo = false;

/**
 * Output the chart library version to the browser console. This is called automatically when `loadChart`
 * is called. In a multi-chart environment, it will only display for the first chart.
 *
 * @memberof CIQ
 * @static
 * @since 8.6.0
 */
CIQ.logVersion = function () {
	if (this.suppressPackageInfo || this.packageInfoDisplayed) return;
	this.packageInfoDisplayed = true;

	console.log(
		"%cChart%cIQ%c Version: " + (this.packageInfo.version || "Unavailable"),
		"font-family:sans-serif; font-size:14px; color: white; font-weight: normal; background-color: #feb912; padding: 2px 1px 2px 5px;",
		"font-family:sans-serif; font-size:14px; color: white; font-weight: bold; background-color: #feb912; padding: 2px 5px 2px 1px;",
		"font-size:12px; font-weight: bold;"
	);
};

/**
 * Output complete chart library package information stored in `CIQ.packageInfo` to the browser console.
 *
 * This function is called from the `cq-lookup` UI component when the value "ciqinfo" is entered.
 *
 * @memberof CIQ
 * @static
 * @since 8.6.0
 */
CIQ.logPackageInfo = function () {
	if (this.suppressPackageInfo) return;
	this.packageInfoDisplayed = true;

	const labels = {
		version: "Version:",
		generationDate: "Generation Date:",
		clientName: "Client Name:",
		packageType: "Package Type:",
		licenseType: "License Type:",
		expirationDate: "Expiration Date:",
		domainLock: "Domain Lock:",
		iframeLock: "iFrame Lock:"
	};

	console.log(
		"%cPackage Information",
		"font-family:sans-serif; font-size:14px; color: grey; font-weight: bold; padding-top: 5px;"
	);

	for (let key in labels) {
		console.log(
			"%c" + labels[key] + " %c" + this.packageInfo[key],
			"font-weight:bold; padding-right: 5px;",
			"font-weight: normal"
		);
	}
};

/**
 * Creates a template for JavaScript inheritance.
 *
 * By default the constructor (ctor) is called with no arguments.
 *
 * @param {object} me The object to receive the inheritance.
 * @param {object} ctor The parent class or object.
 * @param {boolean} [autosuper=true] Set to false to prevent the base class constructor from being called automatically.
 * @since 7.4.0 Replaces {@link Function#ciqInheritsFrom}.
 * @memberof CIQ
 */
CIQ.inheritsFrom = function (me, ctor, autosuper) {
	var parent = ctor.prototype || Object.getPrototypeOf(ctor);

	me.prototype =
		autosuper !== false && typeof ctor === "function"
			? new ctor()
			: Object.create(parent);

	Object.defineProperties(me.prototype, {
		constructor: {
			configurable: true,
			enumerable: false,
			value: me,
			writable: true
		},
		parent: {
			configurable: true,
			enumerable: false,
			value: parent,
			writable: true
		}
	});
};

/**
 * Extends an object, similar to jquery.extend() with a deep copy
 *
 * Only does a recursive deep copy if the *source* is plain object.
 *
 * @param {object} target Target object
 * @param  {object} source Original object
 * @param {boolean} [shallow] If true then extend will not recurse through objects
 * @return {object} Target object after extension
 * @since
 * - 5.1.0 Undefined properties do not copy to target object.
 * - 5.2.0 Target of a deep copy may now be a class instance.
 * @memberof CIQ
 */
CIQ.extend = function (target, source, shallow) {
	var key, value;

	for (key in source) {
		value = source[key];

		if (target === value || value === undefined) {
			continue;
		} else if (value === null || shallow === true) {
			target[key] = value;
		} else if (value.constructor == Array) {
			target[key] = value.slice();
		} else if (value.constructor == Object) {
			// it is ok if `target[key]` is a class instance
			target[key] = CIQ.extend(
				typeof target[key] === "object" && target[key] !== null
					? target[key]
					: {},
				value
			);
		} else {
			// `value` is a primitive type or a class instance (other than Object & Array)
			target[key] = value;
		}
	}

	return target;
};

/**
 * Activates an import. Should be called to activate an import for use by the API. If an
 * import is not activated, its code is inaccessible and may be tree shaken by bundlers. Keeps
 * track of which imports have been activated already so no import gets added more than
 * once.
 *
 * Each feature, component, or add-on is considered an import. For example, studies, drawings,
 * and {@link CIQ.RangeSlider} are imports.
 *
 * See the webpack examples (*webpack.config.js* and *webpack.config.minimal.js* in the root
 * folder of the library) for detailed examples of how to import.
 *
 * **Note:** `DefinePlugin` needs to be included in the *webpack.config.js* file in order to
 * achieve tree shaking. Otherwise, all imports are automatically activated without the need
 * for the developer to explicitly call this function.
 *
 * @param {...object} imports A list of imports to add to the namespace.
 *
 * @memberof CIQ
 * @since 8.0.0
 */
CIQ.activateImports = function (...imports) {
	let CIQ = this;
	if (!CIQ.activatedImports) CIQ.activatedImports = {};
	imports.forEach((m) => {
		if (typeof m == "function") {
			if (!(m.__guid in CIQ.activatedImports)) {
				// Add a guid onto the module to keep track of it
				m.__guid = CIQ.uniqueID(true);
				CIQ.activatedImports[m.__guid] = m.__name || m.name;
				m(_exports);
			}
		}
	});
};

};


let __js_core__polyfills_ = (_exports) => {


/*jshint -W079 */ // ignore redefinition of Event, CustomEvent

var root =
	typeof window !== "undefined"
		? window
		: typeof global !== "undefined"
		? global
		: {};

// IE 11 compatibility
{
	var Event = function (event, params) {
		var self = document.createEvent("Event");

		self.initEvent(
			event,
			!!(params && params.bubbles),
			!!(params && params.cancelable)
		);

		return self;
	};

	if (root.Event && typeof root.Event !== "function") {
		Event.prototype = root.Event.prototype;
		root.Event = Event;
	}

	var CustomEvent = function (event, params) {
		var self = document.createEvent("CustomEvent");

		self.initCustomEvent(
			event,
			!!(params && params.bubbles),
			!!(params && params.cancelable),
			params && params.detail
		);

		return self;
	};

	if (root.CustomEvent && typeof root.CustomEvent !== "function") {
		CustomEvent.prototype = root.CustomEvent.prototype;
		root.CustomEvent = CustomEvent;
	}
}

// Node.js compatibility
{
	if (typeof global !== "undefined") {
		if (typeof global.CanvasRenderingContext2D === "undefined")
			global.CanvasRenderingContext2D = function () {};
	}
}

};


let __js_core_browserDetect_ = (_exports) => {


var CIQ = _exports.CIQ;

var nav = typeof navigator !== "undefined" ? navigator : { userAgent: "" };
var userAgent = nav.userAgent;
var win = typeof window !== "undefined" ? window : {};
var doc = typeof document !== "undefined" ? document : {};
/**
 * READ ONLY. Will be 'true' if the chart is running on an iPad
 * @memberof CIQ
 * @type boolean
 */
CIQ.ipad =
	userAgent.indexOf("iPad") != -1 /* iOS pre 13 */ ||
	(nav.platform === "MacIntel" && nav.maxTouchPoints > 1); /* iPad OS 13 */
/**
 * READ ONLY. Will be 'true' if the chart is running on an iPhone
 * @memberof CIQ
 * @type boolean
 */
CIQ.iphone = userAgent.indexOf("iPhone") != -1;
/**
 * READ ONLY. Will be 'true' if the chart is running on an Android OS device
 * @memberof CIQ
 * @type boolean
 */
CIQ.isAndroid = userAgent.toLowerCase().indexOf("android") > -1;
/**
 * READ ONLY. Will be 'true' if the chart is running on a IE browser
 * @memberof CIQ
 * @type boolean
 */
CIQ.isIE =
	userAgent.toLowerCase().indexOf("msie") > -1 ||
	userAgent.indexOf("Trident/") > -1;
/**
 * READ ONLY. Will be 'true' if the chart is running on a Edge Legacy browser
 * @memberof CIQ
 * @type boolean
 */
CIQ.isEdge = userAgent.indexOf("Edge/") > -1;
/**
 * READ ONLY. Will be 'true' if the chart is running on a Safari browser
 * @memberof CIQ
 * @type boolean
 * @since 7.4.0
 */
CIQ.isSafari = userAgent.indexOf("Safari/") > -1;
/**
 * READ ONLY. Will be 'true' if the chart is running on an iOS 7 device
 * @memberof CIQ
 * @type boolean
 */
CIQ.isIOS7 = userAgent.match(/(iPad|iPhone);.*CPU.*OS 7_\d/i);
/**
 * READ ONLY. Will be 'true' if the chart is running on an iOS 8 device
 * @memberof CIQ
 * @type boolean
 */
CIQ.isIOS8 = userAgent.match(/(iPad|iPhone);.*CPU.*OS 8_\d/i);
/**
 * READ ONLY. Will be 'true' if the chart is running on an iOS 9 device
 * @memberof CIQ
 * @type boolean
 */
CIQ.isIOS9 = userAgent.match(/(iPad|iPhone);.*CPU.*OS 9_\d/i);
/**
 * READ ONLY. Will be 'true' if the chart is running on an iOS 10 device
 * @memberof CIQ
 * @type boolean
 */
CIQ.isIOS10 = userAgent.match(/(iPad|iPhone);.*CPU.*OS 10_\d/i);
/**
 * READ ONLY. Will be 'true' if the chart is running on an IOS7, IOS8, IOS9 or IOS10 device
 * @memberof CIQ
 * @type boolean
 */
CIQ.isIOS7or8 = CIQ.isIOS7 || CIQ.isIOS8 || CIQ.isIOS9 || CIQ.isIOS10;
/**
 * READ ONLY. Will be 'true' if the chart is running on a mobile device ( CIQ.isAndroid, CIQ.ipad, or CIQ.iphone )
 * @memberof CIQ
 * @type boolean
 */
CIQ.isMobile = CIQ.isAndroid || CIQ.ipad || CIQ.iphone;
/**
 * READ ONLY. Will be 'true' if the chart is running on a touch capable device
 * @memberof CIQ
 * @type boolean
 */
CIQ.touchDevice = doc.ontouchstart !== undefined || nav.maxTouchPoints > 1;
/**
 * READ ONLY. Will be 'true' if the chart is running on a MS Surface like device
 * @memberof CIQ
 * @type boolean
 */
CIQ.isSurface =
	CIQ.touchDevice && (CIQ.isEdge || CIQ.isIE || userAgent.indexOf("Edg/") > -1); // Edg/ is Chromium Edge
/**
 * READ ONLY. Will be 'true' if the chart is running on a Chrome browser
 * @memberof CIQ
 * @type boolean
 */
CIQ.is_chrome = userAgent.toLowerCase().indexOf("chrome") > -1 && !CIQ.isEdge;
/**
 * READ ONLY. Will be 'true' if the chart is running on a Firefox browser
 * @memberof CIQ
 * @type boolean
 */
CIQ.isFF = userAgent.toLowerCase().indexOf("firefox") > -1;
/**
 * READ ONLY. Will be 'true' if the chart is running from a MS Surface application
 * @memberof CIQ
 * @type boolean
 */
CIQ.isSurfaceApp = win.MSApp;

/**
 * READ ONLY. Will be 'true' if the chart supports web components
 * @memberof CIQ
 * @type boolean
 * @since 6.1.0
 */
CIQ.isWebComponentsSupported =
	typeof document !== "undefined" &&
	"registerElement" in document &&
	"import" in document.createElement("link") &&
	"content" in document.createElement("template");
/**
 * READ ONLY. Will be 'true' if the chart is running from a device with no Keyboard ( CIQ.isMobile or CIQ.isSurfaceApp )
 * @memberof CIQ
 * @type boolean
 */
CIQ.noKeyboard = CIQ.isMobile || CIQ.isSurfaceApp;

};


let __js_core_canvasutil_ = (_exports) => {


if (!_exports.SplinePlotter) _exports.SplinePlotter = {};

var CIQ = _exports.CIQ,
	splinePlotter = _exports.SplinePlotter;

/*
 * Default implementation of plotSplinePrimitive.  Load splines.js to get alternate splining.
 */
var plotSplinePrimitive = function (
	points,
	tension,
	context,
	colorPatternChanges
) {
	var colorPatternIndex = 0;
	if (!colorPatternChanges) colorPatternChanges = [];
	function seeIfStrokeNeeded(i) {
		if (colorPatternIndex == colorPatternChanges.length) return;
		var colorPatternChange = colorPatternChanges[colorPatternIndex];
		if (
			colorPatternChange.coord[0] == points[i] &&
			colorPatternChange.coord[1] == points[i + 1]
		) {
			context.stroke();
			context.strokeStyle = colorPatternChange.color;
			context.setLineDash(colorPatternChange.pattern);
			context.lineDashOffset = 0;
			context.lineWidth = colorPatternChange.width;
			context.beginPath();
			context.moveTo(points[i], points[i + 1]); //reset back to last point
			colorPatternIndex++;
		}
	}
	if (!tension || tension < 0) tension = 0;
	var n = points.length;
	/*
	 * This algorithm takes four points: the prior point, the starting point, the ending point, and the next point
	 * and draws a bezier curve between starting and ending point such that the next bezier curve will be a continuation
	 * of that smooth curve.
	 * The four control points are computed based on an offset of the four provided points.
	 * The offset is the product of a constant derived from a user-supplied "tension", and the difference between
	 * the points.  For the first control point the difference is between the endpoint and the previous point.
	 * For the second control point the difference is between the next point and the starting point.
	 * On the first iteration we just set the previous point to the first point, and on the last iteration
	 * we set the next point to the ending point.
	 * The tension controls how far the control points will be from the start and end points.  The tension is attenuated in each calculation
	 * based on the ratio of the length of the currently plotted segment and the segment adjacent to the control point being calculated.
	 * The control points are also limited in the case of 2 local extrema, to prevent "overshooting" of the min/max represented by those two points.
	 * Plot will therefore resemble a good approximation of a monotonic cubic spline.
	 * Inspired by:
	 * https://stackoverflow.com/questions/7054272/how-to-draw-smooth-curve-through-n-points-using-javascript-html5-canvas/49371349#49371349 (Roy Aarts)
	 * It's not an exact spline interpolation formula but it works well in that the curve can be controlled to not
	 * overshoot the point it is intersecting.
	 */
	context.moveTo(points[0], points[1]);
	for (var i = 0; i < n - 3; i += 2) {
		seeIfStrokeNeeded(i);
		var p = [];
		p[0] = { x: points[Math.max(0, i - 2)], y: points[Math.max(1, i - 1)] };
		p[1] = { x: points[i], y: points[i + 1] };
		p[2] = { x: points[i + 2], y: points[i + 3] };
		p[3] = {
			x: points[Math.min(n - 2, i + 4)],
			y: points[Math.min(n - 1, i + 5)]
		};
		if (n === 4) tension = 0; // force a straight line between only two points
		plotBetween(i, p, tension);
	}
	function plotBetween(i, p, tension) {
		[1, 2].forEach((j) => {
			p[j].cp = {}; // control points
			["x", "y"].forEach(function (ax) {
				var tf =
					1 /
					(1 +
						Math.sqrt(
							Math.pow(p[2 * j - 1].x - p[2 * j - 2].x, 2) +
								Math.pow(p[2 * j - 1].y - p[2 * j - 2].y, 2)
						) /
							Math.sqrt(
								Math.pow(p[2].x - p[1].x, 2) + Math.pow(p[2].y - p[1].y, 2)
							)); // tension factor, attenuates the tension based on ratio of line lengths
				p[j].cp[ax] =
					p[j][ax] +
					(3 - 2 * j) * (p[j + 1][ax] - p[j - 1][ax]) * tension * (tf || 0);
				// limits on focal points to force monotonicity
				if (p[j].cp[ax] < Math.min(p[1][ax], p[2][ax]))
					p[j].cp[ax] = Math.min(p[1][ax], p[2][ax]);
				if (p[j].cp[ax] > Math.max(p[1][ax], p[2][ax]))
					p[j].cp[ax] = Math.max(p[1][ax], p[2][ax]);
			});
		});
		if (i === 0) {
			context.quadraticCurveTo(p[2].cp.x, p[2].cp.y, p[2].x, p[2].y);
		} else if (i === n - 4) {
			// last pair of points
			context.quadraticCurveTo(p[1].cp.x, p[1].cp.y, p[2].x, p[2].y);
		} else {
			context.bezierCurveTo(
				p[1].cp.x,
				p[1].cp.y,
				p[2].cp.x,
				p[2].cp.y,
				p[2].x,
				p[2].y
			);
		}
	}
};
// If splines.js has not been included then set it with our default implementation
if (!_exports.SplinePlotter.plotSpline)
	_exports.SplinePlotter.plotSpline = plotSplinePrimitive;

/**
 * <span class="animation">Animation Loop</span>
 *
 * Clears the canvas. Uses the fastest known method except on the legacy Android browser which had many problems!
 * @param  {object} canvas A valid HTML canvas object
 * @param  {object} [stx]    A chart object, only necessary for old Android browsers on problematic devices
 * @memberof CIQ
 */
CIQ.clearCanvas = function (canvas, stx) {
	canvas.isDirty = false;
	var ctx = canvas.context;
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	if (CIQ.isAndroid && !CIQ.is_chrome && !CIQ.isFF) {
		// Android browser last remaining
		// one to need this clearing method
		if (CIQ.ChartEngine.useOldAndroidClear && stx) {
			ctx.fillStyle = stx.containerColor;
			ctx.fillRect(0, 0, canvas.width, canvas.height);
			ctx.clearRect(0, 0, canvas.width, canvas.height);
		}
		var w = canvas.width;
		canvas.width = 1;
		canvas.width = w;
	}
	var shimHasChildren = stx.chart.canvasShim.childNodes.length > 0;
	if (stx.useBackgroundCanvas || shimHasChildren) {
		stx.useBackgroundCanvas = shimHasChildren;
		if (canvas == stx.chart.canvas)
			CIQ.clearCanvas(stx.chart.backgroundCanvas, stx);
	}
};

/**
 * Sets the transparent parts of the canvas to the specified background color. Used to ensure a background when turning charts into images
 * because normally the background is the background of the DIV container and not the canvas itself.
 * @param  {object} context An HTML canvas context
 * @param  {string} color   The color to set the background. Any valid HTML canvas color.
 * @param  {number} width   Width to apply color (Could be less than size of canvas)
 * @param  {number} height  Height to apply color (Could be less than size of canvas if applying branding for instance)
 * @memberof CIQ
 */
CIQ.fillTransparentCanvas = function (context, color, width, height) {
	var compositeOperation = context.globalCompositeOperation;
	context.globalCompositeOperation = "destination-over";
	context.fillStyle = color;
	context.fillRect(0, 0, width, height);
	context.globalCompositeOperation = compositeOperation;
};

/**
 * Converts a box represented by two corner coordinates [tick0,value0] and [tick1,value1] into pixel coordinates.
 * @param {CIQ.ChartEngine} stx The chartEngine
 * @param  {string} panelName  Panel on which the coordinates reside
 * @param  {object} box Box to convert
 * @param  {number} [box.x0]
 * @param  {number} [box.y0]
 * @param  {number} [box.x1]
 * @param  {number} [box.y1]
 * @param  {CIQ.ChartEngine.YAxis} [yAxis]
 * @return  {object} A converted box
 * @memberof CIQ
 * @since
 * - 6.0.0
 * - 8.4.0 Added `yAxis` parameter.
 */
CIQ.convertBoxToPixels = function (stx, panelName, box, yAxis) {
	var panel = stx.panels[panelName];
	var bx0 = stx.pixelFromTick(box.x0, panel.chart);
	var bx1 = stx.pixelFromTick(box.x1, panel.chart);
	var by0 =
		box.cy0 || box.cy0 === 0
			? box.cy0
			: stx.pixelFromValueAdjusted(panel, box.x0, box.y0, yAxis);
	var by1 =
		box.cy1 || box.cy1 === 0
			? box.cy1
			: stx.pixelFromValueAdjusted(panel, box.x1, box.y1, yAxis);
	return { x0: bx0, x1: bx1, y0: by0, y1: by1 };
};

/**
 * Fills an area on the chart, usually created by a study.
 * @param  {CIQ.ChartEngine} stx    The chart object
 * @param  {array} points  The set of points, this is an array of chart coordinates in array form
 * 							e.g. [[x1,y1],[x2,y2]].  The points should be arranged to form a loop;
 * 							the loop need not be closed.
 * @param  {object} params  parameters
 * @param  {string | object} [params.color]  color, canvas gradient object or canvas pattern object to fill the area
 * @param  {number} [params.opacity] opacity of fill, 0 to 1.  Defaults to 0.1
 * @param  {number} [params.tension] Tension for splining.
 * @param  {string} [params.panelName] Name of panel to draw on.  If omitted or invalid, area may fill over top or bottom of plot area
 * @param  {CIQ.ChartEngine.YAxis} [params.yAxis] The y-axis for the area (will use default axis if not specified)
 * @since
 * - 01-2015-20 Added `params.panelName`.
 * - 4.0.0 Combined arguments into `params`. Added `tension`.
 * - 5.2.0 Added `params.yAxis`.
 * @memberof CIQ
 */
CIQ.fillArea = function (stx, points, params) {
	if (!points.length) return;
	var ctx = stx.chart.context;
	var globalAlpha = ctx.globalAlpha;
	var color = arguments[2],
		opacity = arguments[3],
		panelName = arguments[4],
		tension = 0,
		yAxis = null;
	if (params && typeof params == "object") {
		color = params.color;
		opacity = params.opacity;
		tension = params.tension;
		panelName = params.panelName;
		yAxis = params.yAxis;
	}
	if (!opacity && opacity !== 0) opacity = 0.2;
	if (color == "auto") color = stx.defaultColor;
	ctx.globalAlpha = opacity;
	if (color) ctx.fillStyle = color;

	var b = Number.MAX_VALUE;
	var t = b * -1;
	var panel = stx.panels[panelName];
	if (panel) {
		t = (yAxis || panel.yAxis).top;
		b = (yAxis || panel.yAxis).bottom;
		ctx.save();
		ctx.beginPath();
		ctx.rect(panel.left, t, panel.width, b - t);
		ctx.clip();
	}
	ctx.beginPath();
	var i;
	if (tension) {
		var flatPoints = [];
		for (i = 0; i < points.length - 2; i++) {
			flatPoints.push(points[i][0], points[i][1]);
		}
		splinePlotter.plotSpline(flatPoints, tension, ctx);
		for (i = points.length - 2; i < points.length; i++) {
			ctx.lineTo(Math.round(points[i][0]), Math.round(points[i][1]));
			// Chrome 58/59 issue with gradient fills.  Less severe if we round these last 2 points.
		}
	} else {
		ctx.moveTo(points[0][0], points[0][1]);
		for (i = 1; i < points.length; i++) {
			ctx.lineTo(points[i][0], points[i][1]);
		}
	}
	ctx.closePath();
	ctx.fill();
	if (panel) ctx.restore();

	ctx.globalAlpha = globalAlpha;
};

/**
 * Fills an area on the chart delimited by non-intersecting top and bottom bands (channel), usually created by a study.
 * @param {CIQ.ChartEngine} stx The chart object
 * @param {object} parameters The configuration parameters
 * @param {string} parameters.panelName The name of the panel
 * @param {boolean} parameters.noSlopes If set, then the chart will fill rectangles with no transition lines between levels
 * @param {string} parameters.topBand The name of the quote field to use as the top band
 * @param {string} parameters.bottomBand The name of the quote field to use as the bottom band
 * @param {number} parameters.opacity The color opacity/transparency as a decimal number (1= full opacity / no transparency)
 * @param {string} parameters.color The fill color
 * @memberof CIQ
 * @since 4.1.2 Removed `quotes` argument; function always uses `chart.dataSegment`.
 * @example
 * CIQ.prepareChannelFill(stx,{"color":dngradient,"opacity":1,"panelName":sd.name,"topBand":"Zero "+sd.name,"bottomBand":"Under "+sd.name});
 */
CIQ.prepareChannelFill = function (stx, parameters) {
	if (!parameters || parameters instanceof Array) parameters = arguments[2]; // backwards compatibility for when quotes was the second argument
	if (!parameters.gapDisplayStyle && parameters.gapDisplayStyle !== false)
		parameters.gapDisplayStyle = parameters.gaps;
	var panel = stx.panels[parameters.panelName],
		chart = stx.chart,
		strokeStyle = chart.context.strokeStyle;

	var saveParams = {
		noDraw: parameters.noDraw,
		gapDisplayStyle: parameters.gapDisplayStyle
	};
	var chParams = CIQ.ensureDefaults(parameters, {
		noDraw: true,
		gapDisplayStyle: {},
		yAxis: panel.yAxis
	});

	var rcTop = stx.plotDataSegmentAsLine(parameters.topBand, panel, chParams);
	var rcBottom = stx.plotDataSegmentAsLine(
		parameters.bottomBand,
		panel,
		chParams
	);
	parameters.noDraw = saveParams.noDraw;
	parameters.gapDisplayStyle = saveParams.gapDisplayStyle;
	var points = [];
	for (var t = 0; t < rcTop.points.length; t += 2) {
		points.push([rcTop.points[t], rcTop.points[t + 1]]);
	}
	for (var b = rcBottom.points.length - 1; b >= 0; b -= 2) {
		points.push([rcBottom.points[b - 1], rcBottom.points[b]]);
	}
	CIQ.fillArea(stx, points, parameters);
	return;
};

/**
 * Fills an area on the chart delimited by a series line closed off by a horizontal threshold line, usually created by a study.
 *
 * Visual Reference:<br>
 * ![Elder Force Shading](img-elder-force-shading.png "Elder Force Shading")
 *
 * @param {CIQ.ChartEngine} stx The chart object
 * @param {object} parameters The configuration parameters
 * @param {string} [parameters.panelName] The name of the panel
 * @param {string} [parameters.band] The name of the quote field to use as the series line
 * @param {number} [parameters.threshold] The price where the horizontal line hits yaxis/series to enclose the fill area.  If not set will look to parameters.reverse to determine if threshold is the lowest or highest value of the plot.
 * @param {boolean} [parameters.reverse] Valid only if parameters.threshold is not set.  If this parameter is set to true, threshold will be highest value of plot.  Otherwise, threshold will be lowest value of plot.
 * @param {number} [parameters.direction] 1 to fill from the threshold upwards or -1 to fill from the threshold downwards
 * @param {object} [parameters.edgeHighlight] Set to either a color or a Styles object as returned from {@link CIQ.ChartEngine#canvasStyle} to draw the threshold line.
 * @param {object} [parameters.edgeParameters] The parameters to draw the threshold line as required by {@link CIQ.ChartEngine#plotLine}
 * @param {object|boolean|string} [parameters.gapDisplayStyle] Gap object as set by See {@link CIQ.ChartEngine#setGapLines}.
 * @param {number} [parameters.opacity] The color opacity/transparency as a decimal number (1= full opacity / no transparency).  Default is 0.3.
 * @param {boolean} [parameters.step] True for a step chart
 * @param {number} [parameters.tension] Tension for splining.
 * @param {string} [parameters.color] The fill color
 * @param {boolean} [parameters.roundOffEdges] Round the first and last point's X value to the previous and next integer, respectively.
 * @param {CIQ.ChartEngine.YAxis} [parameters.yAxis] The y-axis for the band (will use default axis if not specified)
 * @memberof CIQ
 * @since
 * - 4.0.0 Added `parameters.reverse`, made `parameters.threshold` optional in case filling to top or bottom of panel.
 * - 4.1.2 Removed `quotes` argument; function always uses `chart.dataSegment`.
 * - 5.2.0 Added `params.yAxis`.
 * - 5.2.0 Deprecated `parameters.gaps` and replaced with `parameters.gapDisplayStyle`.
 * @example
 * if(sd.outputs.Gain) CIQ.preparePeakValleyFill(stx,{panelName:sd.panel, band:"Result " + sd.name, threshold:sd.study.centerline, direction:1, color:sd.outputs.Gain});
 * if(sd.outputs.Loss) CIQ.preparePeakValleyFill(stx,{panelName:sd.panel, band:"Result " + sd.name, threshold:sd.study.centerline, direction:-1, color:sd.outputs.Loss});
 * @example
 * // see visual reference for rendering image
 * 	CIQ.Studies.displayElderForce=function(stx, sd, quotes){
 * 		CIQ.Studies.displaySeriesAsLine(stx, sd, quotes);
 * 		var color=CIQ.Studies.determineColor(sd.outputs.Result);
 * 		var panel=stx.panels[sd.panel];
 * 		var yAxis=sd.getYAxis(stx);
 * 		var params={skipTransform:panel.name!=sd.chart.name, panelName:sd.panel, band:"Result " + sd.name, threshold:0, color:color, yAxis:yAxis};
 * 		params.direction=1;
 * 		CIQ.preparePeakValleyFill(stx,params);
 * 		params.direction=-1;
 * 		CIQ.preparePeakValleyFill(stx,params);
 * 	};
 */
CIQ.preparePeakValleyFill = function (stx, parameters) {
	if (!parameters || parameters instanceof Array) parameters = arguments[2]; // backwards compatibility for when quotes was the second argument
	if (!parameters.gapDisplayStyle && parameters.gapDisplayStyle !== false)
		parameters.gapDisplayStyle = parameters.gaps;
	var panel = stx.panels[parameters.panelName],
		yAxis = panel.yAxis,
		chart = stx.chart,
		context = chart.context,
		strokeStyle = context.strokeStyle;

	var saveParams = {
		noDraw: parameters.noDraw,
		gapDisplayStyle: parameters.gapDisplayStyle
	};
	var rc = stx.plotDataSegmentAsLine(
		parameters.band,
		panel,
		CIQ.ensureDefaults(parameters, { noDraw: true, gapDisplayStyle: {} })
	);
	parameters.noDraw = saveParams.noDraw;
	parameters.gapDisplayStyle = saveParams.gapDisplayStyle;
	var threshold = parameters.threshold,
		direction = parameters.direction,
		reverse = parameters.reverse,
		gapDisplayStyle = parameters.gapDisplayStyle;

	if (parameters.yAxis) yAxis = parameters.yAxis;
	var yMax = -Number.MAX_VALUE,
		yMin = Number.MAX_VALUE,
		yThresh = reverse ? yMax : yMin;
	if (threshold || threshold === 0)
		yThresh = stx.pixelFromPrice(threshold, panel, yAxis); //where threshold hits yaxis

	var points = [],
		length = rc.points.length;
	for (var i = 0; i < length; i += 2) {
		var x = rc.points[i],
			y = rc.points[i + 1],
			x1,
			y1;
		if (parameters.roundOffEdges) {
			// round off to whole pixels so color interpolation does not occur when used with fillIntersection
			if (i === 0) x = Math.floor(x);
			else if (i + 2 == length) x = Math.ceil(x);
		}
		if (isNaN(y)) continue;
		var limit =
			(y > yThresh && direction > 0) || (y < yThresh && direction < 0);
		if (!limit) {
			points.push([x, y]);
			yMax = Math.max(y, yMax);
			yMin = Math.min(y, yMin);
		}
		if (i < length - 3) {
			x1 = rc.points[i + 2];
			y1 = rc.points[i + 3];
			if ((y < yThresh && y1 > yThresh) || (y > yThresh && y1 < yThresh)) {
				x += ((yThresh - y) * (x1 - x)) / (y1 - y);
				points.push([x, yThresh]);
			}
		}
	}
	length = points.length;
	if (!length) return;

	var edgeParameters = parameters.edgeParameters,
		edgeHighlight = parameters.edgeHighlight;
	if (edgeHighlight) {
		if (edgeParameters.lineWidth > 100) edgeParameters.lineWidth = 1; // trap case where no width is specified in the css
		context.save();
		context.beginPath();
		for (var p = 0; p < length - 1; p++) {
			var point0 = points[p],
				point1 = points[p + 1];
			if (point0[1] == yThresh && point1[1] == yThresh) continue; // here we avoid drawing a horizontal line along the threshold
			if (point0[0] == point1[0] && stx.layout.candleWidth >= 1) {
				// here we try to avoid drawing a vertical line to the threshold (like a gap boundary)
				if (
					point0[1] == yThresh &&
					points[p - 1] &&
					points[p - 1][1] == yThresh
				)
					continue;
				if (
					point1[1] == yThresh &&
					points[p + 2] &&
					points[p + 2][1] == yThresh
				)
					continue;
			}
			stx.plotLine(
				CIQ.extend(
					{
						x0: point0[0],
						x1: point1[0],
						y0: point0[1],
						y1: point1[1],
						color: parameters.edgeHighlight,
						type: "segment",
						context: context,
						confineToPanel: panel,
						deferStroke: true
					},
					edgeParameters
				)
			);
		}
		context.stroke();
		context.restore();
	}
	if (!threshold && threshold !== 0) {
		if (yAxis.flipped) reverse = !reverse;
		yThresh = reverse
			? Math.min(yMin, yAxis.top)
			: Math.max(yMax, yAxis.bottom);
	}
	points.push([points[length - 1][0], yThresh], [points[0][0], yThresh]);

	var opacity = parameters.opacity;
	if (!opacity && opacity !== 0) parameters.opacity = 0.3;
	CIQ.fillArea(stx, points, parameters);
	// Now fill in the mountain area under the gap, if required
	if (
		gapDisplayStyle &&
		gapDisplayStyle.color &&
		gapDisplayStyle.fillMountain &&
		!parameters.tension &&
		!CIQ.isTransparent(gapDisplayStyle.color) &&
		!CIQ.isTransparent(
			parameters.color
		) /*need this last check for baseline_mountain to render properly*/
	) {
		context.save();
		if (context.fillStyle instanceof CanvasGradient) {
			var hexGapColor = CIQ.colorToHex(gapDisplayStyle.color);
			var gradient = context.createLinearGradient(
				0,
				direction === 1 ? panel.top : panel.bottom,
				0,
				yThresh
			);
			gradient.addColorStop(0, CIQ.hexToRgba(hexGapColor, 60));
			gradient.addColorStop(1, CIQ.hexToRgba(hexGapColor, 10));
			context.fillStyle = gradient;
		} else {
			context.fillStyle = gapDisplayStyle.color;
		}
		var poly = [];
		var myParams = {
			opacity: parameters.opacity,
			panelName: parameters.panelName
		};
		context.beginPath();
		for (i = 0; i < rc.gapAreas.length; i++) {
			var datum = rc.gapAreas[i];
			var start = datum.start;
			var end = datum.end;
			var thresh = datum.threshold;
			if (start) {
				poly = [
					[start[0], start[1]],
					[start[0], thresh]
				];
			} else {
				poly.push(
					[end[0], thresh],
					[end[0], parameters.step ? poly[0][1] : end[1]]
				);
			}
			if (poly.length == 4) {
				CIQ.fillArea(stx, poly, myParams);
				var lineParams = CIQ.extend(
					{
						x1: poly[3][0],
						y0: poly[0][1],
						type: "segment",
						deferStroke: true,
						context: context,
						confineToPanel: panel
					},
					gapDisplayStyle
				);

				if (parameters.step) {
					stx.plotLine(
						CIQ.extend({ x0: poly[0][0], y1: poly[0][1] }, lineParams)
					);
					stx.plotLine(
						CIQ.extend({ x0: poly[3][0], y1: poly[3][1] }, lineParams)
					);
				} else {
					stx.plotLine(
						CIQ.extend({ x0: poly[0][0], y1: poly[3][1] }, lineParams)
					);
				}
			}
		}
		context.stroke();
		context.restore();
	}
	parameters.opacity = opacity;
};

/**
 * Fills an area on the chart delimited by intersecting bands.
 *
 * Bands can be anchored by different y-axis as determined by the `parameters.topAxis` and `parameters.bottomAxis` parameters.
 * @param {CIQ.ChartEngine} stx The chart object
 * @param {string} panelName The name of the panel
 * @param {object} parameters The configuration parameters
 * @param {string} parameters.topBand The name of the quote field to use as the top band
 * @param {string} parameters.bottomBand The name of the quote field to use as the bottom band
 * @param {string} [parameters.topSubBand] Name of the field within the top band to use, for example when plotting a series
 * @param {string} [parameters.bottomSubBand] Name of the field within the bottom band to use, for example when plotting a series
 * @param {string} parameters.topColor The color of the top band, used to fill in a cloud whose top edge is the topBand
 * @param {string} parameters.bottomColor The color the bottom band, used to fill in a cloud whose top edge is the bottomBand
 * @param {number} [parameters.tension] Tension for splining.
 * @param {CIQ.ChartEngine.YAxis} parameters.topAxis The y-axis for the top band (will use default axis if not specified)
 * @param {CIQ.ChartEngine.YAxis} parameters.bottomAxis The y-axis for the bottom band (will use default axis if not specified)
 * @param {boolean} parameters.skipTransform If true then any transformations (such as comparison charting) will not be applied
 * @param {number} parameters.opacity The color opacity/transparency as a decimal number (1= full opacity / no transparency).  Default is 0.3.
 * @memberof CIQ
 * @since
 * - 4.0.0 Changed `sd` argument to `panelName` argument. Added `parameters.topColor`, `parameters.bottomColor`, `parameters.opacity` and `parameters.skipTransform`. Removed `parameters.fillFuture`.
 * - 4.1.2 Removed `quotes` argument; function always uses `chart.dataSegment`.
 * @example
 * var parameters={
 *     topBand: "Leading Span A " + sd.name,
 *     bottomBand: "Leading Span B " + sd.name,
 *     topColor: "green",
 *     bottomColor: "red"
 * };
 * CIQ.fillIntersecting(stx, sd.panel, parameters)
 */
CIQ.fillIntersecting = function (stx, panelName, parameters) {
	if (!parameters || parameters instanceof Array) parameters = arguments[3]; // backwards compatibility for when quotes was the second argument
	var topBand = parameters.topBand,
		bottomBand = parameters.bottomBand;
	var topSubBand = parameters.topSubBand,
		bottomSubBand = parameters.bottomSubBand;
	var topColor = parameters.topColor,
		bottomColor = parameters.bottomColor;
	var panel = panelName;
	if (panel.panel) {
		// backwards compatibility, where this argument is really a studyDescriptor
		if (panel.outputs && panel.outputMap) {
			if (!topColor) topColor = panel.outputs[panel.outputMap[topBand]];
			if (!bottomColor)
				bottomColor = panel.outputs[panel.outputMap[bottomBand]];
		}
		panel = panel.panel;
	}
	panel = stx.panels[panel];

	//make a copy of what's there now
	var context = stx.chart.context,
		contextCanvas = context.canvas;
	var sctx = stx.scratchContext;
	if (!sctx) {
		sctx = stx.scratchContext = contextCanvas.cloneNode(true).getContext("2d");
	}
	var scratchCanvas = sctx.canvas;
	scratchCanvas.height = contextCanvas.height;
	scratchCanvas.width = contextCanvas.width;
	scratchCanvas.context = sctx;
	CIQ.clearCanvas(scratchCanvas, stx);

	//then fill the intersections
	var alpha = 0.3;
	if (parameters.opacity) alpha = parameters.opacity;
	sctx.globalCompositeOperation = "xor";

	stx.chart.context = sctx;
	var params = {
		band: topBand,
		subField: topSubBand,
		color: topColor,
		opacity: 1,
		panelName: panel.name,
		yAxis: parameters.topAxis,
		skipTransform: parameters.skipTransform,
		tension: parameters.tension,
		roundOffEdges: true,
		step: parameters.step
	};
	CIQ.preparePeakValleyFill(stx, params);

	CIQ.extend(params, {
		band: bottomBand,
		subField: bottomSubBand,
		color: bottomColor,
		yAxis: parameters.bottomAxis
	});
	CIQ.preparePeakValleyFill(stx, params);

	//now redraw with correct alpha
	context.save();
	context.globalAlpha = alpha;
	context.drawImage(scratchCanvas, 0, 0);
	context.restore();

	stx.chart.context = context;
};

/**
 * Draws an item in the legend and returns the position for the next item
 * @param {CIQ.ChartEngine} stx The chart object
 * @param  {array} xy    An X,Y tuple (from chart.legend)
 * @param  {string} label The text to print in the item
 * @param  {string} color The color for the background of the item
 * @param  {number} [opacity] The color for the background of the item
 * @return {array}       A tuple containing the X,Y position for the next the item
 * @memberof CIQ
 */
CIQ.drawLegendItem = function (stx, xy, label, color, opacity) {
	if (!opacity) opacity = 1;
	var x = xy[0],
		y = xy[1],
		w = 10,
		h = 10;
	var context = stx.chart.context;
	context.globalAlpha = opacity;
	context.fillStyle = color;
	context.fillRect(x, y, w, h);
	context.globalAlpha = 1;
	x += w + 2; // 2 px spacing between box and text
	context.fillStyle = stx.defaultColor;
	context.fillText(label, x, y);
	x += context.measureText(label).width + 6; // 6 px spacing between labels
	return [x, y];
};

/**
 * Default function to draw a legend for the series that are displayed on the chart.
 *
 * See {@link CIQ.ChartEngine.Chart#legendRenderer} for activation and customization details.
 *
 * @param {CIQ.ChartEngine} stx The chart object to draw
 * @param  {object} params parameters for drawing the legend
 * @param  {CIQ.ChartEngine.Chart} [params.chart] The chart object
 * @param  {object} [params.legendColorMap] A map of series names to colors and display symbols ( example  IBM:{color:'red', display:'Int B M'} )
 * @param  {object} [params.coordinates] Coordinates upon which to draw the items, in pixels relative to top left of panel ( example  {x:50, y:0} ).  If null, uses chart.legend
 * @param  {boolean} [params.noBase] Set to true to not draw the base (the chart symbol's color) in the legend
 * @memberof CIQ
 */
CIQ.drawLegend = function (stx, params) {
	var coordinates = params.coordinates;
	var context = stx.chart.context;
	context.textBaseline = "top";
	var rememberFont = context.font;
	stx.canvasFont("stx-legend", context);

	var chart = params.chart || stx.chart;
	if (!coordinates) coordinates = chart.legend;
	var xy = [coordinates.x, coordinates.y];
	var lineColor = stx.defaultColor;

	for (var i = 0; i < 2; i++) {
		// loop twice, first for the base then again for the series
		for (var field in params.legendColorMap) {
			var legendItem = params.legendColorMap[field];
			if (legendItem.isBase && (i || params.noBase)) continue;
			if (!legendItem.isBase && !i) continue;
			var c;
			if (legendItem.color instanceof Array) {
				var colors = legendItem.color;
				for (c = colors.length - 1; c >= 0; c--) {
					if (CIQ.isTransparent(colors[c])) colors.splice(c, 1);
				}
				if (colors.length > 1) {
					var grd = context.createLinearGradient(
						xy[0],
						xy[1],
						xy[0] + 10,
						xy[1]
					);
					for (c = 0; c < colors.length; c++) {
						grd.addColorStop(c / (colors.length - 1), colors[c]);
					}
					lineColor = grd;
				} else if (colors.length > 0) {
					lineColor = colors[0];
				} else {
					lineColor = stx.getCanvasColor("stx_line_chart");
				}
			} else if (legendItem.color) {
				lineColor = legendItem.color;
			} else {
				lineColor = null;
			}
			if (lineColor) {
				var display = field;
				if (legendItem.display) {
					display = legendItem.display;
				}
				if (!display) {
					if (chart.symbolDisplay) {
						display = chart.symbolDisplay;
					} else {
						display = chart.symbol;
					}
				}
				if (xy[0] + context.measureText(display).width > chart.panel.right) {
					xy = [
						coordinates.x,
						coordinates.y + context.measureText("M").width + 6
					]; // M is squarish, with width roughly equaling height: https://stackoverflow.com/questions/1134586/how-can-you-find-the-height-of-text-on-an-html-canvas
				}
				xy = CIQ.drawLegendItem(
					stx,
					xy,
					display,
					lineColor,
					legendItem.opacity
				);
			}
		}
	}
	context.font = rememberFont;
};

};


let __js_core_color_ = (_exports) => {


const RGB = /rgb\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3})\)/;
const RGBA =
	/rgba\((\d{1,3}),\s?(\d{1,3}),\s?(\d{1,3}),\s?(\d\.\d+|\d+|\.\d+)\)/;

var CIQ = _exports.CIQ;

/**
 * Checks if two colors are the same.  Will compare alpha channel is provided as well.
 * @param  {string} color1 First color, in RGB, RGBA, CSS, hex, or literal format
 * @param  {string} color2 Second color, in RGB, RGBA, CSS, hex, or literal format
 * @return {boolean}       true if equivalent
 * @example
 * var isSame=CIQ.colorsEqual("rgba(255,255,255,0.3)", "#FFFFFF");
 * 		returns false
 * var isSame=CIQ.colorsEqual("rgba(255,255,255,1)", "#FFFFFF");
 * 		returns true
 * @memberof CIQ
 * @since 4.0.0
 */
CIQ.colorsEqual = function (color1, color2) {
	if (color1 == color2) return true;
	if (!color1 && !color2) return true;
	if (!color1 || !color2) return false;
	if (color1 == "transparent") color1 = "rgba(0,0,0,0)";
	if (color2 == "transparent") color2 = "rgba(0,0,0,0)";

	const colors1 = color1.match(RGBA);
	const colors2 = color2.match(RGBA);

	const alpha1 = colors1 ? parseFloat(colors1[4]) : 1;
	const alpha2 = colors2 ? parseFloat(colors2[4]) : 1;
	if (alpha1 != alpha2) return false;

	const first = CIQ.colorToHex(color1);
	const second = CIQ.colorToHex(color2);
	return first.toLowerCase() == second.toLowerCase();
};

/**
 * Converts an RGB or RGBA color or
 * <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank"> CSS
 * color keyword</a> to a six-digit hexadecimal color number.
 *
 * @param {string} [color=#000000] The RGB or RGBA color or CSS color keyword.
 * @return {string} A six-digit hexadecimal color number. If the `color` parameter is not provided
 * 		or has the value "transparent", "#000000" is returned.
 *
 * @memberof CIQ
 * @since 4.0.0 Converts three-digit hexadecimal color numbers (#FFC) to six-digit numbers
 * 		(#FFFFCC).
 *
 * @example
 * console.log(CIQ.colorToHex("rgb(255, 255, 0)")); // #ffff00
 * console.log(CIQ.colorToHex("rgba(255, 255, 0, 0.3)")); // #ffff00
 * console.log(CIQ.colorToHex("#ff0")); // #ffff00
 * console.log(CIQ.colorToHex("yellow")); // #ffff00
 */
CIQ.colorToHex = function (color) {
	if (!CIQ.colorToHexMapping) CIQ.colorToHexMapping = {};
	if (!color || color == "transparent") color = "#000000";
	if (CIQ.colorToHexMapping[color]) return CIQ.colorToHexMapping[color];
	if (color.charAt(0) === "#") {
		if (color.length == 4) {
			let [, r, g, b] = color.split("");
			color = CIQ.colorToHexMapping[color] = `#${r + r}${g + g}${b + b}`;
		}
		return color;
	}

	let digits = RGB.exec(color);
	if (!digits) digits = RGBA.exec(color);
	// Converts a color name to hex
	function toHex(color) {
		if (typeof document === "undefined") return "#000000";
		let ta = document.querySelector(".ciq_color_converter");
		if (!ta) {
			ta = document.createElement("textarea");
			ta.className = "ciq_color_converter";
			ta.style.display = "none";
			document.body.appendChild(ta);
		}
		ta.style.color = "#000000"; //reset;
		ta.style.color = color;

		const value = getComputedStyle(ta).getPropertyValue("color");
		digits = RGB.exec(value);
		if (digits) return CIQ.colorToHex(value);
		else if (value.charAt(0) === "#") return value;
		return color;
	}
	if (!digits) {
		const hexResult = toHex(color);
		CIQ.colorToHexMapping[color] = hexResult;
		return hexResult;
	}

	const red = parseFloat(digits[1]);
	const green = parseFloat(digits[2]);
	const blue = parseFloat(digits[3]);

	const rgb = blue | (green << 8) | (red << 16);
	let hexString = rgb.toString(16);
	// fill with leading 0 if not 6 digits.
	for (let i = hexString.length; i < 6; i++) {
		hexString = "0" + hexString;
	}
	const s = "#" + hexString;
	CIQ.colorToHexMapping[color] = s;
	return s;
};

/**
 * Converts six-digit hexadecimal color numbers and RGB and RGBA color values to RGBA color values.
 *
 * @param {string} color A six-digit hexadecimal color number or RGB or RGBA color value; for
 * 		example, "#FF00FF", "#ff00ff", "rgb(255,0,255)", or "rgba(255,0,255,0.5)".
 * 		<p>If the argument is an RGB or RGBA color, the RGB color values remain the same, but the
 * 		opacity is set to `opacity`. If the `opacity` parameter is not provided, an RGB color is
 * 		given the default opacity; an RGBA color is returned unchanged. See examples below.
 * 		<p>**Note:** Three-digit hexadecimal color numbers and
 * 		<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank">
 * 		CSS color keywords</a> are not accepted.
 * @param {number} [opacity=1] The alpha value of the color. Values must be greater than or equal
 * 		to 0. Values greater than 1 are divided by 100.
 * @return {string} An RGBA color value.
 *
 * @memberof CIQ
 *
 * @example
 * console.log(CIQ.hexToRgba("#FF00FF")); // rgba(255,0,255,1)
 * console.log(CIQ.hexToRgba("#FF00FF", 0.75)); // rgba(255,0,255,0.75)
 * console.log(CIQ.hexToRgba("#FF00FF", 2)); // rgba(255,0,255,0.02)
 * console.log(CIQ.hexToRgba("rgb(255,0,255)")); // rgba(255,0,255,1)
 * console.log(CIQ.hexToRgba("rgb(255,0,255)", 0.75)); // rgba(255,0,255,0.75)
 * console.log(CIQ.hexToRgba("rgba(255,0,255,0.5)", 0.75)); // rgba(255,0,255,0.75)
 * console.log(CIQ.hexToRgba("rgba(255,0,255,0.5)")); // rgba(255,0,255,0.5)
 * console.log(CIQ.hexToRgba("#F0F")); // CIQ.hexToRgba: invalid hex : F0F
 * console.log(CIQ.hexToRgba("fuchsia")); // CIQ.hexToRgba: invalid hex : fuchsia
 */
CIQ.hexToRgba = function (color, opacity) {
	if (!color || color == "transparent") color = "rgba(0,0,0,0)";
	if (color.substring(0, 4) === "rgba") {
		const digits = RGBA.exec(color);
		let [_, r, g, b, a] = digits;
		if (opacity || opacity === 0) a = opacity;
		if (a > 1) a = a / 100;
		return `rgba(${r},${g},${b},${a})`;
	} else if (color.substring(0, 3) === "rgb") {
		color = CIQ.colorToHex(color);
	}
	if (!opacity && opacity !== 0) opacity = 100; // default to full opacity
	if (opacity <= 1) opacity = opacity * 100; // handle decimal opacity (css style)

	color = color.replace("#", "");
	const r = parseInt(color.slice(0, 2), 16);
	const g = parseInt(color.slice(2, 4), 16);
	const b = parseInt(color.slice(4, 6), 16);

	if (isNaN(r) || isNaN(g) || isNaN(b)) {
		console.log("CIQ.hexToRgba: invalid hex :", color);
		return null;
	}

	return `rgba(${r},${g},${b},${opacity / 100})`;
};

/**
 * Converts a color to the internal format used by the browser. This allows
 * interchange of hex, RGB, RGBA colors
 * @param  {string} color A CSS color
 * @return {string}       The native formatted color
 * @memberof CIQ
 */
CIQ.convertToNativeColor = function (color) {
	var a = document.createElement("DIV");
	a.style.color = color;
	a.style.display = "none";
	document.body.appendChild(a);
	var c = getComputedStyle(a).color;
	document.body.removeChild(a);
	return c;
};
/**
 * Returns true if the color is transparent. In particular, it checks RGBA status. Note that the charting engine
 * often interprets transparent colors to mean that a color should be automatically determined based on the brightness
 * of the background.
 * @param  {string}  color The color (from CSS)
 * @return {boolean}       True if transparent
 * @memberof CIQ
 */
CIQ.isTransparent = function (color) {
	if (!color) return false;
	if (color == "transparent") return true;
	const digits = RGBA.exec(color);
	if (digits === null) return false;
	if (parseFloat(digits[4]) === 0) return true;
	return false;
};

/**
 * Converts a color from hex or rgb format to Hue, Saturation, Value.
 * @param  {string} color The color (from CSS)
 * @return {array}       [Hue, Saturation, Value], or null if invalid color.
 * @memberof CIQ
 */
CIQ.hsv = function (color) {
	var hex = CIQ.colorToHex(color);
	if (hex.substr(0, 1) === "#") hex = hex.slice(1);
	// fill with leading 0 if not 6 digits.
	for (var i = hex.length; i < 6; i++) {
		hex = "0" + hex;
	}
	var r = parseInt(hex.slice(0, 2), 16);
	var g = parseInt(hex.slice(2, 4), 16);
	var b = parseInt(hex.slice(4, 6), 16);
	var computedH = 0;
	var computedS = 0;
	var computedV = 0;

	//remove spaces from input RGB values, convert to int
	r = parseInt(("" + r).replace(/\s/g, ""), 10);
	g = parseInt(("" + g).replace(/\s/g, ""), 10);
	b = parseInt(("" + b).replace(/\s/g, ""), 10);

	if (
		r === null ||
		g === null ||
		b === null ||
		isNaN(r) ||
		isNaN(g) ||
		isNaN(b)
	) {
		console.log("CIQ.hsv: invalid color :", color);
		return null;
	}
	if (r < 0 || g < 0 || b < 0 || r > 255 || g > 255 || b > 255) {
		return null;
	}
	r = r / 255;
	g = g / 255;
	b = b / 255;
	var minRGB = Math.min(r, Math.min(g, b));
	var maxRGB = Math.max(r, Math.max(g, b));

	// Black-gray-white
	if (minRGB == maxRGB) {
		computedV = minRGB;
		return [0, 0, computedV];
	}

	// Colors other than black-gray-white:
	var d = r == minRGB ? g - b : b == minRGB ? r - g : b - r;
	var h = r == minRGB ? 3 : b == minRGB ? 1 : 5;
	computedH = 60 * (h - d / (maxRGB - minRGB));
	computedS = (maxRGB - minRGB) / maxRGB;
	computedV = maxRGB;
	return [computedH, computedS, computedV];
};

CIQ.hsl = function (color) {
	var hex = CIQ.colorToHex(color);
	if (hex.substr(0, 1) === "#") hex = hex.slice(1);
	// fill with leading 0 if not 6 digits.
	for (var i = hex.length; i < 6; i++) {
		hex = "0" + hex;
	}
	var r = parseInt(hex.slice(0, 2), 16);
	var g = parseInt(hex.slice(2, 4), 16);
	var b = parseInt(hex.slice(4, 6), 16);

	r /= 255;
	g /= 255;
	b /= 255;
	var max = Math.max(r, g, b),
		min = Math.min(r, g, b);
	var h,
		s,
		l = (max + min) / 2;

	if (max == min) {
		h = s = 0; // achromatic
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch (max) {
			case r:
				h = (g - b) / d + (g < b ? 6 : 0);
				break;
			case g:
				h = (b - r) / d + 2;
				break;
			case b:
				h = (r - g) / d + 4;
				break;
		}
		h /= 6;
	}

	return [h, s, l];
};

/**
 * Converts an HSL color value to RGB. The conversion formula is adapted from
 * {@link http://en.wikipedia.org/wiki/HSL_color_space}.
 *
 * Assumes the values for `h`, `s`, and `l` are contained in the set [0, 1] and the returned
 * RGB values are in the set [0, 255].
 *
 * @param {number} h Hue
 * @param {number} s Saturation
 * @param {number} l Lightness
 * @return {array} The RGB representation of the color.
 *
 * @memberof CIQ
 * @since 7.5.0
 */
CIQ.hslToRgb = function (h, s, l) {
	var r, g, b;

	if (s === 0) {
		r = g = b = l; // achromatic
	} else {
		var hue2rgb = function hue2rgb(p, q, t) {
			if (t < 0) t += 1;
			if (t > 1) t -= 1;
			if (t < 1 / 6) return p + (q - p) * 6 * t;
			if (t < 1 / 2) return q;
			if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
			return p;
		};

		var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		var p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	}

	return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
};

/**
 * Chooses either a white or black foreground color depending on the "lightness" of the background color. Note that this simply
 * checks if the value is above the hue which works well but not ideally for red colors which the human eye interprets differently.
 * More complex algorithms are available, but chartists rarely use red as a background color.
 * @param  {string} backgroundColor The background color (CSS format)
 * @return {string}                 Either #000000 (black) or #FFFFFF (white) depending on which will look best on the given background color
 * @memberof CIQ
 */
CIQ.chooseForegroundColor = function (backgroundColor) {
	var hex = CIQ.colorToHex(backgroundColor);
	var r = parseInt(hex.slice(1, 3), 16);
	var g = parseInt(hex.slice(3, 5), 16);
	var b = parseInt(hex.slice(5, 7), 16);
	// Compare relative luminance (https://www.w3.org/TR/WCAG20/#relativeluminancedef) to 100
	return 0.2126 * r + 0.7152 * g + 0.0722 * b < 100 ? "#FFFFFF" : "#000000"; // per ITU-R BT.709
	/*if(r+g+b>318) return "#000000";
		var hsl=CIQ.hsl(backgroundColor);
		var l=hsl[2];
		if(l>hsl[0]) return "#000000";
		//if(l && l>0.5) return "#000000";
		return "#FFFFFF";*/
};

/**
 * Convert a pattern type to an array useful for setting the context.setLineDash
 * @param {number} [width=1] A valid lineWidth from 1
 * @param {string} [pattern=solid] A valid pattern (solid, dotted, dashed)
 * @return {array} The array representing pixels of draw/skip etc.  Use it as argument to context.setLineDash()
 * @memberof CIQ
 * @since 4.0.0
 */
CIQ.borderPatternToArray = function (width, pattern) {
	if (!pattern) return [];
	if (pattern instanceof Array) return pattern;
	if (pattern == "dotted") return [width, width];
	if (pattern == "dashed") return [width * 5, width * 5];
	if (pattern != "solid" && pattern != "none")
		console.log('Unsupported pattern "' + pattern + '"; defaulting to "solid"');
	return [];
};

/**
 * Gets the background color of an element by traversing up the parent stack.
 * @param  {HTMLElement} el The element to examine
 * @return {string}    The background color
 * @memberof CIQ
 */
CIQ.getBackgroundColor = function (el) {
	var bgColor = null;
	while (!bgColor || CIQ.isTransparent(bgColor)) {
		var cStyle = getComputedStyle(el);
		if (!cStyle) return;
		bgColor = cStyle.backgroundColor;
		if (CIQ.isTransparent(bgColor)) bgColor = "transparent";
		el = el.parentNode;
		if (!el || !el.tagName) break;
	}
	if (!bgColor || bgColor == "transparent") bgColor = "#FFFFFF";
	return bgColor;
};

};


let __js_core_date_ = (_exports) => {


var CIQ = _exports.CIQ,
	timezoneJS = _exports.timezoneJS;

CIQ.monthLetters = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
CIQ.monthAbv = [
	"Jan",
	"Feb",
	"Mar",
	"Apr",
	"May",
	"Jun",
	"Jul",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec"
];

/* Enumerated types for time units */
CIQ.MILLISECOND = 1;
CIQ.SECOND = 1000;
CIQ.MINUTE = 60 * CIQ.SECOND;
CIQ.HOUR = 60 * CIQ.MINUTE;
CIQ.DAY = 24 * CIQ.HOUR;
CIQ.WEEK = 7 * CIQ.DAY;
CIQ.MONTH = 31 * CIQ.DAY;
CIQ.YEAR = 366 * CIQ.DAY;
CIQ.DECADE = 10 * CIQ.YEAR - 7 * CIQ.DAY;

CIQ.yyyymmddhhmmssmmmrx = new RegExp("\\d{17}");

/**
 * Converts a string form date into a JavaScript Date object with time. Supports various standard date formats
 * @param  {string} dt String form of a date (such as yyyymmddhhmm, yyyy-mm-dd hh:mm, etc)
 * @return {date}    A JavaScript Date object
 * @memberof CIQ
 */
CIQ.strToDateTime = function (dt) {
	if (!dt || dt.getFullYear) return dt; //if passing in a JS date, return it.
	var myDateArray = [];
	var y, m, d, h, mn, sc, ms;
	if (dt.length == 12 || dt.length == 14) {
		// yyyymmddhhmm[ss]
		y = parseFloat(dt.substring(0, 4));
		m = parseFloat(dt.substring(4, 6)) - 1;
		d = parseFloat(dt.substring(6, 8));
		h = parseFloat(dt.substring(8, 10));
		mn = parseFloat(dt.substring(10, 12));
		sc = parseFloat(dt.substring(12, 14)) || 0;
		return new Date(y, m, d, h, mn, sc, 0);
	} else if (CIQ.yyyymmddhhmmssmmmrx.test(dt)) {
		y = parseFloat(dt.substring(0, 4));
		m = parseFloat(dt.substring(4, 6)) - 1;
		d = parseFloat(dt.substring(6, 8));
		h = parseFloat(dt.substring(8, 10));
		mn = parseFloat(dt.substring(10, 12));
		sc = parseFloat(dt.substring(12, 14));
		ms = parseFloat(dt.substring(14, 17));
		return new Date(y, m, d, h, mn, sc, ms);
	}
	var lr = [dt];
	var t = dt.indexOf("T");
	if (t != -1) {
		var afterT = dt.substring(t);
		if (
			afterT.indexOf("Z") != -1 ||
			afterT.indexOf("-") != -1 ||
			afterT.indexOf("+") != -1
		) {
			return new Date(dt); // utc time if it contains actual timezone information
		}
		lr = dt.split("T");
	} else if (dt.indexOf(" ") != -1) lr = dt.split(" ");

	if (lr[0].indexOf("/") != -1) myDateArray = lr[0].split("/");
	else if (lr[0].indexOf("-") != -1) myDateArray = lr[0].split("-");
	else return CIQ.strToDate(dt); //give up, maybe it's just a date

	var year = parseFloat(myDateArray[2], 10);
	if (myDateArray[0] && myDateArray[0].length == 4) {
		// YYYY-MM-DD
		year = parseFloat(myDateArray[0], 10);
		myDateArray[0] = myDateArray[1];
		myDateArray[1] = myDateArray[2];
	}

	if (lr.length > 1) {
		var ampm = lr[2];
		lr = lr[1].split(":");
		if (ampm) {
			if (lr[0] == "12" && ampm.toUpperCase() == "AM") lr[0] = 0;
			else if (lr[0] != "12" && ampm.toUpperCase() == "PM")
				lr[0] = parseInt(lr[0], 10) + 12;
		}
		var sec = 0,
			msec = 0;
		if (lr.length == 3) {
			if (lr[2].indexOf(".") == -1) {
				sec = parseInt(lr[2], 10);
			} else {
				sec = lr[2].split(".");
				if (sec[1].length == 3) {
					msec = sec[1];
					sec = sec[0];
				}
			}
		}
		return new Date(
			year,
			myDateArray[0] - 1,
			myDateArray[1],
			lr[0],
			lr[1],
			sec,
			msec
		);
	}
	return new Date(year, myDateArray[0] - 1, myDateArray[1], 0, 0, 0, 0);
};

/**
 * Converts a string form date into a JavaScript object. Only use if you know that the string will not include a time, otherwise use @see CIQ.strToDateTime
 * @param  {string} dt - Date in string format such as MM/DD/YY or YYYYMMDD or 2014-10-25T00:00:00+00:00 or 201506170635
 * @return {date}    JavaScript date object -new Date()-
 * @memberof CIQ
 */
CIQ.strToDate = function (dt) {
	var myDateArray;
	if (dt.indexOf("/") != -1) myDateArray = dt.split("/");
	else if (dt.indexOf("-") != -1) myDateArray = dt.split("-");
	else if (dt.length >= 8) {
		return new Date(
			parseFloat(dt.substring(0, 4)),
			parseFloat(dt.substring(4, 6)) - 1,
			parseFloat(dt.substring(6, 8))
		);
	} else {
		return new Date();
	}
	if (myDateArray.length < 3) {
		// didn't find enough data for month, day and year.
		return new Date();
	}
	if (myDateArray[2].indexOf(" ") != -1) {
		myDateArray[2] = myDateArray[2].substring(0, myDateArray[2].indexOf(" "));
	} else if (myDateArray[2].indexOf("T") != -1) {
		myDateArray[2] = myDateArray[2].substring(0, myDateArray[2].indexOf("T"));
	}
	var year = parseFloat(myDateArray[2], 10);
	if (year < 20) year += 2000;
	if (myDateArray[0].length == 4) {
		// YYYY-MM-DD
		year = parseFloat(myDateArray[0], 10);
		myDateArray[0] = myDateArray[1];
		myDateArray[1] = myDateArray[2];
	}
	return new Date(year, myDateArray[0] - 1, myDateArray[1]);
};

/**
 * Formats a date according to an input string; for example, "YYYY:MM:dd hh:mm".
 *
 * All matching tokens in the input string are replaced by their corresponding date or time value.
 * Supported tokens and their values are as follows:
 * - YYYY = full year
 * - MM = month
 * - dd = day
 * - HH = hours (24-hour format)
 * - hh = hours (12-hour format)
 * - mm = minutes
 * - ss = seconds
 * - SSS = milliseconds
 *
 * Values are formatted with leading zeroes as necessary.
 *
 * **Note:** This function is less performant than the special-purpose format functions defined in
 * this namespace, such as {@link CIQ.mmddyyyy} and {@link CIQ.yyyymmdd}, and should be used
 * accordingly.
 *
 * @param {Date} dt The date to format.
 * @param {string} str The format for the date.
 * @return {string} The formatted date string.
 *
 * @memberof CIQ
 * @since 8.1.0
 */
CIQ.dateToStr = function (dt, str) {
	const has = (token) => str.includes(token);
	const pad = (num, digits = 2) => ("0".repeat(digits) + num).slice(-digits);
	const fmt = (exp, val) => (str = str.replace(exp, val));
	const max = (val, max) => (val > max ? val - max : val);
	if (has("YYYY")) fmt(/YYYY/g, dt.getFullYear());
	if (has("MM")) fmt(/MM/g, pad(dt.getMonth() + 1));
	if (has("dd")) fmt(/dd/g, pad(dt.getDate()));
	if (has("HH")) fmt(/HH/g, pad(dt.getHours()));
	if (has("hh")) fmt(/hh/g, pad(max(dt.getHours() || 12, 12)));
	if (has("mm")) fmt(/mm/g, pad(dt.getMinutes()));
	if (has("ss")) fmt(/ss/g, pad(dt.getSeconds()));
	if (has("SSS")) fmt(/SSS/g, pad(dt.getMilliseconds(), 3));
	return str;
};

/**
 * Converts a JavaScript Date or string form date to mm/dd/yyyy format
 * @param  {string} dt Date in JavaScript Date or string format such as YYYY-MM-DD
 * @return {string}   Date in mm/dd/yyyy format
 * @memberof CIQ
 * @since 2016-07-16
 */
CIQ.mmddyyyy = function (dt) {
	if (typeof dt === "string") {
		dt = CIQ.strToDate(dt);
	}

	var m = dt.getMonth() + 1;
	if (m < 10) m = "0" + m;
	var d = dt.getDate();
	if (d < 10) d = "0" + d;
	return m + "/" + d + "/" + dt.getFullYear();
};

/**
 * Converts a JavaScript Date to yyyy-mm-dd format
 * @param  {date} dt JavaScript Date object
 * @return {string}    Date in yyyy-mm-dd format
 * @memberof CIQ
 */
CIQ.yyyymmdd = function (dt) {
	var m = dt.getMonth() + 1;
	if (m < 10) m = "0" + m;
	var d = dt.getDate();
	if (d < 10) d = "0" + d;
	return dt.getFullYear() + "-" + m + "-" + d;
};

/**
 * Converts a JavaScript `Date` object to hh:mm format.
 *
 * @param {date} dt `Date` object to be converted.
 * @return {string} Time of the converted `Date` object in hh:mm format.
 *
 * @memberof CIQ
 * @since 8.0.0
 */
CIQ.hhmm = function (dt) {
	var h = dt.getHours();
	if (h < 10) h = "0" + h;
	var m = dt.getMinutes();
	if (m < 10) m = "0" + m;
	return h + ":" + m;
};

/**
 * Converts a JavaScript Date to hh:mm:ss format
 * @param  {date} dt JavaScript Date object
 * @return {string}    Time in hh:mm:ss format
 * @memberof CIQ
 * @since 6.3.0
 */
CIQ.hhmmss = function (dt) {
	var s = dt.getSeconds();
	if (s < 10) s = "0" + s;
	return CIQ.hhmm(dt) + ":" + s;
};

/**
 * Converts a date into yyyymmddhhmm format
 * @param  {date} dt A JavaScript Date object
 * @return {string}    Date in yyyymmddhhmm format
 * @memberof CIQ
 */
CIQ.yyyymmddhhmm = function (dt) {
	return CIQ.yyyymmddhhmmssmmm(dt).substr(0, 12);
};

/**
 * Converts a date into yyyymmddhhmmssmmm format
 * @param  {date} dt A JavaScript Date object
 * @return {string}    Date in yyyymmddhhmmssmmm format
 * @memberof CIQ
 */
CIQ.yyyymmddhhmmssmmm = function (dt) {
	var m = dt.getMonth() + 1;
	if (m < 10) m = "0" + m;
	var d = dt.getDate();
	if (d < 10) d = "0" + d;
	var h = dt.getHours();
	if (h < 10) h = "0" + h;
	var mn = dt.getMinutes();
	if (mn < 10) mn = "0" + mn;
	var s = dt.getSeconds();
	if (s < 10) s = "0" + s;
	var ms = dt.getMilliseconds();
	if (ms < 10) ms = "00" + ms;
	else if (ms < 100) ms = "0" + ms;
	return "" + dt.getFullYear() + m + d + h + mn + s + ms;
};

/**
 * Converts a date into yyyy/mm/dd hh:mm format
 * @param  {date} dt A JavaScript Date object
 * @return {string}    Date in yyyy/mm/dd hh:mm format
 * @memberof CIQ
 */
CIQ.friendlyDate = function (dt) {
	return CIQ.dateToStr(dt, "YYYY/MM/dd HH:mm");
};

/**
 * Converts a string form date into mm-dd hh:mm format
 * @param  {string} strdt Date in string format (such as yyyymmddhhmm, yyyy-mm-dd hh:mm, etc)
 * @return {string}       Date in mm-dd hh:mm format
 * @memberof CIQ
 * @since 5.0.0 will output seconds and millis if present
 */
CIQ.mmddhhmm = function (strdt) {
	var dt = CIQ.strToDateTime(strdt);
	var m = dt.getMonth() + 1;
	if (m < 10) m = "0" + m;
	var d = dt.getDate();
	if (d < 10) d = "0" + d;
	var h = dt.getHours();
	if (h < 10) h = "0" + h;
	var mn = dt.getMinutes();
	if (mn < 10) mn = "0" + mn;
	var s = dt.getSeconds();
	if (s < 10) s = "0" + s;
	var ms = dt.getMilliseconds();
	if (ms < 10) ms = "00" + ms;
	else if (ms < 100) ms = "0" + ms;
	if (h == "00" && mn == "00" && s == "00" && ms == "000")
		return m + "-" + d + "-" + dt.getFullYear();
	if (s == "00" && ms == "000") return m + "-" + d + " " + h + ":" + mn;
	if (ms == "000") return m + "-" + d + " " + h + ":" + mn + ":" + s;
	return m + "-" + d + " " + h + ":" + mn + ":" + s + ":" + ms;
};

/**
 * Gets the day of the year
 * @param  {date} [dt] optional	The date to check.  If omitted, will use the current date.
 * @return {number} 			Day of year
 * @memberof CIQ
 */
CIQ.getYearDay = function (dt) {
	var now = dt;
	if (!now) now = new Date();
	now.setHours(0, 0, 0, 0);
	var start = new Date(now.getFullYear(), 0, 0);
	var diff = now - start;
	var oneDay = 1000 * 60 * 60 * 24;
	var day = Math.round(diff / oneDay);
	return day;
};

/**
 * Gets the current time in Eastern Time Zone. This can be used as a convenience for determining open and closing times of US markets.
 * @return {date} JavaScript Date representing the time in Eastern Time Zone
 * @memberof CIQ
 */
CIQ.getETDateTime = function () {
	var d = new Date();
	return CIQ.convertTimeZone(
		new Date(d.getTime() + d.getTimezoneOffset() * 60000),
		"UTC",
		"America/New_York"
	);
};

/**
 * Converts a JavaScript date from Eastern Time Zone to the browser's local time zone. Daylight Savings Time is hard coded. @see CIQ.getETDateTime
 * @param  {date} est JavaScript Date object representing a date/time in eastern time zone
 * @return {date}     JavaScript Date object converted to browser's local time zone
 * @memberof CIQ
 */
CIQ.fromET = function (est) {
	var d = new Date();
	//var localTime = d.getTime();
	//var localOffset = d.getTimezoneOffset() * 60000;
	//var utc = localTime + localOffset;
	var offset = 4;
	if (
		d.getMonth() < 2 ||
		(d.getMonth() == 2 && d.getDate() < 11) ||
		d.getMonth() > 10 ||
		(d.getMonth() == 10 && d.getDate() >= 4)
	)
		offset = 5;
	var localTime = est.getTime() + 3600000 * offset;
	var nd = new Date(localTime);
	return nd;
};

/**
 * Convenience function for creating a displayable month name using CIQ.monthLetters and CIQ.monthAbv.
 * Please note that those arrays may not be utilized if the library is used in conjunction with Internationalization.
 * This method is used primarily to create the x-axis of a chart
 * @param  {number} i              The numerical month (0-11)
 * @param  {boolean} displayLetters - True if just the first letter should be displayed (such as a tight display)
 * @param  {object} [stx]            The chart object, only necessary if Internationalization is in use
 * @return {string}                String representation of the month
 * @memberof CIQ
 */
CIQ.monthAsDisplay = function (i, displayLetters, stx) {
	if (displayLetters) {
		if (stx && stx.monthLetters) return stx.monthLetters[i];
		return CIQ.monthLetters[i];
	}
	if (stx && stx.monthAbv) return stx.monthAbv[i];
	return CIQ.monthAbv[i];
};

/**
 * Displays a time in readable form. If Internationalization is in use then the time will be in 24 hour Intl numeric format
 * @param  {date} dt  JavaScript Date object
 * @param  {object} [stx] Chart object if Internationalization is in use
 * @param {number} [precision] Precision to use. If `null` then `hh:mm`. `CIQ.SECOND` then `hh:mm:ss`. If `CIQ.MILLISECOND` then `hh:mm:ss.mmmmm`
 * @return {string}     Human friendly time, usually hh:mm
 * @memberof CIQ
 */
CIQ.timeAsDisplay = function (dt, stx, precision) {
	var internationalizer = stx ? stx.internationalizer : null;
	if (internationalizer) {
		if (precision == CIQ.SECOND)
			return internationalizer.hourMinuteSecond.format(dt);
		else if (precision == CIQ.MILLISECOND)
			return (
				internationalizer.hourMinuteSecond.format(dt) +
				"." +
				dt.getMilliseconds()
			);
		return internationalizer.hourMinute.format(dt);
	}
	var min = dt.getMinutes();
	if (min < 10) min = "0" + min;
	var str = dt.getHours() + ":" + min;
	var sec = "";
	if (precision <= CIQ.SECOND) {
		sec = dt.getSeconds();
		if (sec < 10) sec = "0" + sec;
		str += ":" + sec;
	}
	if (precision == CIQ.MILLISECOND) {
		var msec = dt.getMilliseconds();
		if (msec < 10) msec = "00" + msec;
		else if (msec < 100) msec = "0" + msec;
		str += "." + msec;
	}
	return str;
};

/**
 * Creates a displayable date string according to the current chart settings and periodicity.
 *
 * Formats the date using one of the following formatters or default format (in order of
 * preference):
 *
 * 1. Chart x-axis formatter
 * 2. Chart engine internationalizer
 * 3. Default format
 *    <br>a. Daily &mdash; mm/dd/yyyy
 *    <br>b. Intraday &mdash; mm/dd hh:mm[:ss[:ms]]
 *
 * This method is used in {@link CIQ.ChartEngine.AdvancedInjectable#headsUpHR} to format the
 * date label that floats over the x-axis. Overwrite this method as needed to achieve the desired
 * date format.
 *
 * @param {CIQ.ChartEngine} stx The charting object.
 * @param {CIQ.ChartEngine.Chart} chart	The chart to which the date applies.
 * @param {Date} dt The date to format.
 * @param {boolean} [includeIntraYear] If true, include the year in the intraday dates.
 * @return {string} The formatted date.
 *
 * @memberof CIQ
 * @since
 * - 4.0.0
 * - 8.2.0 Added the `includeIntraYear` parameter.
 */
CIQ.displayableDate = function (stx, chart, dt, includeIntraYear) {
	function twoPlaces(val) {
		if (val < 10) return "0" + val;
		return val;
	}
	var displayableDate = "";
	var interval = stx.layout.interval;
	var isDaily = CIQ.ChartEngine.isDailyInterval(interval);
	var isSecond =
		(chart.xAxis.activeTimeUnit && chart.xAxis.activeTimeUnit <= CIQ.SECOND) ||
		stx.layout.timeUnit == "second";
	var isMS =
		interval === "tick" ||
		(chart.xAxis.activeTimeUnit &&
			chart.xAxis.activeTimeUnit <= CIQ.MILLISECOND) ||
		stx.layout.timeUnit == "millisecond";
	if (chart.xAxis.formatter) {
		displayableDate = chart.xAxis.formatter(dt);
	} else if (stx.internationalizer) {
		displayableDate = stx.internationalizer.monthDay.format(dt);
		if (isSecond || isMS) {
			displayableDate +=
				" " + stx.internationalizer.hourMinuteSecond.format(dt);
			if (isMS) displayableDate += "." + dt.getMilliseconds();
		} else if (!isDaily) {
			if (includeIntraYear)
				displayableDate = stx.internationalizer.yearMonthDay.format(dt);
			displayableDate += " " + stx.internationalizer.hourMinute.format(dt);
		} else {
			if (interval == "month")
				displayableDate = stx.internationalizer.yearMonth.format(dt);
			else displayableDate = stx.internationalizer.yearMonthDay.format(dt);
		}
	} else {
		var m = twoPlaces(dt.getMonth() + 1);
		var d = twoPlaces(dt.getDate());
		var h = twoPlaces(dt.getHours());
		var mn = twoPlaces(dt.getMinutes());
		if (isDaily) {
			displayableDate = interval == "month" ? m + "/" : m + "/" + d + "/";
			displayableDate += dt.getFullYear();
		} else {
			let date = m + "/" + d;
			if (includeIntraYear) date += "/" + dt.getFullYear();
			displayableDate = date + " " + h + ":" + mn;
			if (isSecond || isMS) {
				var sec = twoPlaces(dt.getSeconds());
				displayableDate += ":" + sec;
				if (isMS) {
					var mil = twoPlaces(dt.getMilliseconds());
					if (mil < 100) mil = "0" + mil;
					displayableDate += ":" + mil;
				}
			}
		}
	}
	return displayableDate;
};

/**
 * Converts a Date object from one time zone to another using the timezoneJS.Date library
 * @param  {date} dt                    Original JavaScript Date object, from the original time zone
 * @param  {string} originalTimeZone    The original time zone
 * @param  {string} targetTimeZone      The target time zone
 * @return {date}            The date in the target timezone. This is a timezoneJS.Date which behaves the same as a native Date.
 * @memberof CIQ
 */
CIQ.convertTimeZone = function (dt, originalTimeZone, targetTimeZone) {
	if (!timezoneJS.Date) return dt;
	// Convert from original timezone to local time
	var newDT = new timezoneJS.Date(
		dt.getFullYear(),
		dt.getMonth(),
		dt.getDate(),
		dt.getHours(),
		dt.getMinutes(),
		dt.getSeconds(),
		dt.getMilliseconds(),
		originalTimeZone
	);

	// Convert from local time to new timezone
	newDT.setTimezone(targetTimeZone);
	return newDT;
};

/**
 * This method converts a time from another timezone to local time on the browser
 * @param  {date} dt               The original time
 * @param  {string} originalTimeZone A valid timezone
 * @return {date}                  The date converted to local time
 * @memberof CIQ
 */
CIQ.convertToLocalTime = function (dt, originalTimeZone) {
	if (!timezoneJS.Date) return dt;
	var seconds = dt.getSeconds();
	var milliseconds = dt.getMilliseconds();
	var newDT = new timezoneJS.Date(
		dt.getFullYear(),
		dt.getMonth(),
		dt.getDate(),
		dt.getHours(),
		dt.getMinutes(),
		originalTimeZone
	);
	return new Date(newDT.getTime() + seconds * 1000 + milliseconds);
};

};


let __js_core_dom_ = (_exports) => {


if (!_exports.SplinePlotter) _exports.SplinePlotter = {};

var CIQ = _exports.CIQ,
	splinePlotter = _exports.SplinePlotter;

/**
 * Shorthand for `getElementById()`.
 *
 * Equivalent to prototype style `$()`, which is faster but less powerful than jQuery style `$()`.
 *
 * @param {string} id An ID tag for a valid DOM element.
 * @param {HTMLElement} [source] A valid DOM node to search within. If not provided, the entire
 * 		document is searched.
 * @return {HTMLElement} The DOM node associated with the ID, or null if a node is not found.
 *
 * @name $$
 * @function
 */
var $$ = function (id, source) {
	if (!source) return document.getElementById(id);
	if (source.id == id) return source; // Found it!
	if (!source.hasChildNodes) return null;
	for (var i = 0; i < source.childNodes.length; i++) {
		var element = $$(id, source.childNodes[i]);
		if (element) return element;
	}
	return null;
};
_exports.$$ = $$;

/**
 * Functional equivalent of `querySelector()`.
 *
 * Functionally equivalent to jQuery `$()`. Uses `querySelectorAll` to maintain compatibility with
 * Internet Explorer 9.
 *
 * **Note:** If multiple elements match the selector, only the first is returned.
 *
 * @param {string} selector CSS style selector.
 * @param {HTMLElement} [source] Node to select within. If not provided, the entire document is
 * 		searched.
 * @return {HTMLElement} The first element to match the selector.
 *
 * @name $$$
 * @function
 */
var $$$ = function (selector, source) {
	if (!source) source = document;
	return source.querySelectorAll(selector)[0]; // We use querySelectorAll for backward compatibility with IE
};
_exports.$$$ = $$$;

/**
 * READ ONLY.  String of appropriate wheel event based on browser features.
 */
CIQ.wheelEvent = (function () {
	if (typeof document === "undefined") return undefined;
	if (CIQ.isIE || "onwheel" in document.createElement("div")) return "wheel";
	if (document.onmousewheel !== undefined) return "mousewheel";
	return "DOMMouseScroll";
})();

/**
 * Convenience function for dynamically creating a new node and appending it into the DOM.
 * @param  {object} div       The targeted parent node
 * @param  {string} tagName   The type of node to be created
 * @param  {string} [className] Optional class name to set the new node
 * @param {string} [txt] Optional text to insert
 * @return {object}           The new node
 * @memberof CIQ
 */
CIQ.newChild = function (div, tagName, className, txt) {
	var div2 = document.createElement(tagName);
	if (className) div2.className = className;
	div.appendChild(div2);
	if (txt) div2.innerHTML = txt;
	return div2;
};

/**
 * Microsoft RT disallows innerHTML that contains DOM elements. Use this method to override when necessary.
 * @param  {object} node A valid DOM element to change innerHTML
 * @param  {string} html The html text to change
 * @example
 * CIQ.innerHTML(node, "My innerHTML contains <span>a span</span> and MS RT doesn't like that");
 * @memberof CIQ
 */
CIQ.innerHTML = function (node, html) {
	if (window.MSApp && window.MSApp.execUnsafeLocalFunction) {
		window.MSApp.execUnsafeLocalFunction(function () {
			node.innerHTML = html;
		});
	} else {
		node.innerHTML = html;
	}
};

/**
 * Microsoft surface bug requires a timeout in order for the cursor to show up in a focused
 * text box. iPad also, sometimes, when embedded in an iframe, so set useTimeout if in an iframe!
 * @param  {object} node       A DOM element to focus
 * @param  {number} useTimeout Whether to apply a timeout or not. If number > 0, then the number of milliseconds.
 * @memberof CIQ
 */
CIQ.focus = function (node, useTimeout) {
	if (CIQ.isSurface || useTimeout) {
		var timeout = 0;
		if (!isNaN(parseInt(useTimeout, 10))) timeout = useTimeout;
		setTimeout(function () {
			node.focus();
		}, timeout);
	} else {
		node.focus();
	}
};

/**
 * Reliable, cross-device blur method
 * @param  {HTMLElement} [node] The element to blur. If not supplied then document.activeElement will be blurred
 * @memberof CIQ
 */
CIQ.blur = function (node) {
	if (!node) node = document.activeElement;
	if (node) node.blur();
	window.focus();
};

/**
 * Find all nodes that match the given text. This is a recursive function so be careful not to start too high in the DOM tree.
 * @param  {object} startNode A valid DOM element from which to start looking
 * @param  {string} text      The text to search for
 * @return {array}           An array of nodes that match the text
 * @memberof CIQ
 */
CIQ.findNodesByText = function (startNode, text) {
	if (startNode.innerHTML == text) return [startNode];
	var nodes = [];
	for (var i = 0; i < startNode.childNodes.length; i++) {
		var pushNodes = CIQ.findNodesByText(startNode.childNodes[i], text);
		if (pushNodes) {
			nodes = nodes.concat(pushNodes);
		}
	}
	if (nodes.length) return nodes;
	return null;
};

/**
 * Hide nodes that match a certain text string.
 * @param  {object} startNode A valid DOM element from which to start looking
 * @param  {string} text      The text to match against
 * {@link  CIQ.findNodesByText}
 * @memberof CIQ
 */
CIQ.hideByText = function (startNode, text) {
	var nodes = CIQ.findNodesByText(startNode, text);
	for (var i = 0; i < nodes.length; i++) {
		nodes[i].style.display = "none";
	}
};

/**
 * Returns the height of the page. It is aware of iframes and so will never return a value that is greater
 * than the value of the parent
 * @param {Window} [win] Optional top level window, if not the main window where library is loaded
 * @return {number} Height of page in pixels
 * @memberof CIQ
 * @since 8.5.0 Added `win` parameter.
 */
CIQ.pageHeight = function (win) {
	var { innerHeight, top, parent, self } = win || window;
	if (top != self) {
		try {
			if (innerHeight > parent.innerHeight) innerHeight = parent.innerHeight;
		} catch (e) {}
	}
	return innerHeight;
};

/**
 * Returns the width of the page. It is aware of iframes and so will never return a value that is greater
 * than the value of the parent
 * @param {Window} [win] Optional top level window, if not the main window where library is loaded
 * @return {number} Width of page in pixels
 * @memberof CIQ
 * @since 8.5.0 Added `win` parameter.
 */
CIQ.pageWidth = function (win) {
	var { innerWidth, top, parent, self } = win || window;
	if (top != self) {
		try {
			if (innerWidth > parent.innerWidth) innerWidth = parent.innerWidth;
		} catch (e) {}
	}
	return innerWidth;
};

/**
 * Strips the letters "px" from a string. This is useful for converting styles into absolutes.
 * @param  {string} text - String value with "px"
 * @return {number}      The numeric value
 * @example
 * var leftPosition=CIQ.stripPX(node2.style.left)
 * @memberof CIQ
 */
CIQ.stripPX = function (text) {
	if (!text) return 0;
	if (typeof text == "number") return text;
	return parseInt(text.substr(0, text.indexOf("p")), 10);
};

/**
 * Returns true if a point, in absolute screen position, is within an element
 * @param  {object} node A valid DOM element to check whether the point overlaps
 * @param  {number} x    Absolute screen X position of pointer
 * @param  {number} y    Absolute screen Y position of pointer
 * @return {boolean}      True if the point lies inside of the DOM element
 * @memberof CIQ
 */
CIQ.withinElement = function (node, x, y) {
	var rect = node.getBoundingClientRect();
	if (x <= rect.left) return false;
	if (y <= rect.top) return false;
	if (x >= rect.left + node.offsetWidth) return false;
	if (y >= rect.top + node.offsetHeight) return false;
	return true;
};

/**
 * Sets a property or style of a DOM element only if the property or style does not already have
 * the provided value.
 *
 * This is more efficient than needlessly updating the DOM.
 *
 * @param {HTMLElement} node The DOM element to update.
 * @param {string} member The DOM element's property or style to update.
 * @param {string} value The value to set.
 * @return {boolean} true if the value of `member` was changed.
 *
 * @memberof CIQ
 * @since
 * - 4.0.0
 * - 8.1.0 Added return value.
 *
 * @example
 * <caption>Set the HTML content of a DOM element.</caption>
 * CIQ.efficientDOMUpdate(node, "innerHTML", htmlString);
 *
 * @example
 * <caption>Set a style property of a DOM element.</caption>
 * CIQ.efficientDOMUpdate(controls.floatDate.style, "width", "auto");
 */
CIQ.efficientDOMUpdate = function (node, member, value) {
	if (node[member] !== value) {
		node[member] = value;
		return true;
	}
	return false;
};

/**
 * Creates a virtual DOM for an element.
 *
 * A virtual DOM is faster and more efficient than the actual DOM for manipulation of an
 * element's children.
 *
 * **Note:** Use {@link CIQ.cqrender} to render the virtual DOM on the real DOM.
 *
 * @param {HTMLElement} node The node for which the virtual DOM is created.
 * @return {object} The virtual DOM of `node`.
 *
 * @memberof CIQ
 * @since 8.1.0
 */
CIQ.cqvirtual = function (node) {
	if (!node) return;
	var virtual = node.cloneNode(true);
	virtual.innerHTML = "";
	virtual.original = node;
	return virtual;
};

/**
 * Copies the virtual DOM of an element to the actual DOM.
 *
 * **Note:** Use {@link CIQ.cqvirtual} to first create a virtual DOM.
 *
 * @param {HTMLElement} node The node for which the actual DOM is updated with the virtual DOM.
 * @return {object} The actual DOM of the node.
 *
 * @memberOf CIQ
 * @since 8.1.0
 */
CIQ.cqrender = function (node) {
	if (!node) return;
	if (node.innerHTML == node.original.innerHTML) return node.original;
	CIQ.removeChildIfNot(node.original, "template");

	var children = Array.from(node.children);
	if (children.length)
		children.forEach(function (child) {
			node.original.appendChild(node.removeChild(child));
		});
	return node.original;
};

/**
 * Removes from `node` all children that do not match `selector`. Removes all children if no
 * selector is provided.
 *
 * @param {HTMLElement} node Parent node from which child nodes are removed.
 * @param {string} [selector] CSS selector used to select child nodes that are not removed from
 * 		`node`.
 * @return {HTMLElement} `node`, containing only those children selected by `selector`; all other
 * 		children removed.
 *
 * @memberof CIQ
 * @since 8.1.0
 */
CIQ.removeChildIfNot = function (node, selector) {
	var children = Array.from(node.children);
	if (children.length)
		children.forEach(function (child) {
			if (!selector || !child.matches(selector)) node.removeChild(child);
		});
	return node;
};

/**
 * Used in conjunction, safeMouseOut and safeMouseOver ensure just a single event when the mouse moves
 * in or out of an element. This is important because simple mouseout events will fire when the mouse
 * crosses boundaries *within* an element. Note that this function will do nothing on a touch device where
 * mouseout is not a valid operation.
 * @param  {object} node A valid DOM element
 * @param  {function} fc   Function to call when the mouse has moved out
 * @memberof CIQ
 */
CIQ.safeMouseOut = function (node, fc) {
	function closure(node, fc) {
		return function (e) {
			if (typeof e.pageX == "undefined") {
				e.pageX = e.clientX;
				e.pageY = e.clientY;
			}
			if (CIQ.withinElement(node, e.pageX, e.pageY)) {
				return;
			}
			node.stxMouseOver = false;
			fc(e);
		};
	}
	node.addEventListener("mouseout", closure(node, fc));
};

/**
 * This method is guaranteed to only be called once when a user mouses over an object. @see CIQ.safeMouseOut
 * @param  {object} node A valid DOM element
 * @param  {function} fc   Function to call when mouse moves over the object
 * @memberof CIQ
 */
CIQ.safeMouseOver = function (node, fc) {
	function closure(node, fc) {
		return function (e) {
			if (typeof e.pageX == "undefined") {
				e.pageX = e.clientX;
				e.pageY = e.clientY;
			}
			if (CIQ.withinElement(node, e.pageX, e.pageY)) {
				if (node.stxMouseOver) return;
				node.stxMouseOver = true;
				fc(e);
			}
		};
	}
	node.addEventListener("mouseover", closure(node, fc));
};

/**
 * Converts an object to emit "stxtap" events. This uses {@link CIQ.safeClickTouch}. You should use addEventListener("tap") to receive the events.
 * @param {HTMLElement} div The element to convert
 * @param {object} [params] Parameters to pass to {@link CIQ.safeClickTouch}
 * @param {boolean} [params.stopPropagation=false] If set to true then propagation will be stopped
 * @memberOf  CIQ
 * @since  04-2015
 */
CIQ.installTapEvent = function (div, params) {
	var fc = function (e) {
		var ev = new Event("stxtap", {
			bubbles: true,
			cancelable: true
		});
		if (typeof e.pageX == "undefined") {
			e.pageX = e.clientX;
			e.pageY = e.clientY;
		}
		ev.pageX = e.pageX;
		ev.pageY = e.pageY;
		e.target.dispatchEvent(ev);
		if (params && params.stopPropagation) e.stopPropagation();
	};
	CIQ.safeClickTouch(div, fc, params);
};
/**
 * Use this instead of onclick or ontouch events. This function will automatically use the quickest available
 * but also protect against being called twice.
 * By default, any previous safeClickTouch listeners will be cleared (to allow re-use of the element).
 * @param {object} div The DOM element to attach an event
 * @param {Function} fc The function to call when the object is pressed
 * @param {object} params Parameters to drive behavior.
 * @param {object} [params.safety] An object, generated from a CIQ.safeDrag association to prevent the click from being triggered when a drag operation is released
 * @param {boolean} [params.allowMultiple=false] If set then multiple click events can be associated with the node
 * @param {boolean} [params.preventUnderlayClick=true] By default prevents an underlaying element from being "clicked" on a touch device 400ms after the overlay was tapped. Set to false for input fields, or any div containing input fields (body)
 * @param {boolean} [params.absorbDownEvent=true] Ensures that a mousedown, pointerdown, touchstart event doesn't get passed to the parent.
 * @memberof CIQ
 * @since 11/01/2015 Removed timers in favor of a new algorithm. This algorithm allows only the first event to fire from a UI interaction to execute the fc function.
 */
CIQ.safeClickTouch = function (div, fc, params) {
	if (!params) params = {};
	var movementWatcher = {};
	// **Internal Developers**
	// Because the chart itself makes use of touch and mouse events, it may not make sense to use this function if you are trying to prevent a default click from being passed to the chart container.
	// Pointer events (which safeClickTouch will try to use) do not stop propagating mouse and touch events even if you are preventing default b/c they are different event types.
	// In reality this means that if you are clicking on a DOM node that is on the chart, it will emit a mouse click to the chart b/c the chart is ALWAYS LISTENING.
	// Put simply the chart is designed using mouse/touch paradigm and it is easier to not mix in pointer events. Meanwhile the UI layer is developed using pointer events and we should keep using pointer events there.

	if (!params.allowMultiple) CIQ.clearSafeClickTouches(div);
	if (params.preventUnderlayClick !== false) params.preventUnderlayClick = true;
	if (params.absorbDownEvent !== false) params.absorbDownEvent = true;
	params.allowAnotherDevice = 0;
	params.registeredClick = false;
	function closure(which, params, movementWatcher) {
		return function (e) {
			if (!CIQ.safeClickTouchEvent) {
				if (!movementWatcher.t) {
					return; // is this up/end event related to a down/start event?
				}
				var timeSincePressed = movementWatcher.t;
				movementWatcher.t = null;
				if (timeSincePressed + 1000 < new Date().getTime()) return; //allow no more than 1 second for click
			}
			if (params.safety && params.safety.recentlyDragged) return;

			if ((e.which && e.which >= 2) || (e.button && e.button >= 2)) return; // ignore right clicks
			if (params.preventUnderlayClick) {
				// underlay click happens when you tap on a mobile device but a second mouse event registers
				// 300 ms later on another clickable object that was beneath the menu. By default we stop this
				// secondary event using preventDefault. However, we don't want to do this if we clicked inside
				// an input tag, because that would prevent the soft keyboard from coming up. Note that modern
				// touch operating systems don't have the 300ms delay issue so this code can be eliminated once
				// older operating systems are safely retired.
				if (e.target.tagName !== "INPUT") e.preventDefault();
			} else {
				// prevent touch and mouse from being clicked when we can't use preventDefault
				if (params.lastType != which && Date.now() < params.allowAnotherDevice)
					return;
				params.lastType = which;
				params.allowAnotherDevice = Date.now() + 1000; // 1 Second then not a coat tail mouse click
			}
			fc(e);
		};
	}
	function isClick(movementWatcher, down) {
		return function (e) {
			var x = e.clientX ? e.clientX : e.pageX;
			var y = e.clientY ? e.clientY : e.pageY;
			if (down) {
				movementWatcher.t = new Date().getTime();
				movementWatcher.x = x;
				movementWatcher.y = y;
			} else if (movementWatcher.x) {
				//allow no more than 4 pixel distance movement
				if (
					Math.pow(movementWatcher.x - x, 2) +
						Math.pow(movementWatcher.y - y, 2) >
					16
				) {
					movementWatcher.t = null;
				}
			}
		};
	}
	var safeClickTouchEvents = div.safeClickTouchEvents;
	if (!safeClickTouchEvents)
		safeClickTouchEvents = div.safeClickTouchEvents = [];
	var fc1 = closure("mouseup", params, movementWatcher);
	var fc2 = closure("touchend", params, movementWatcher);
	var fc3 = closure("pointerup", params, movementWatcher);
	var f = function (e) {
		e.stopPropagation();
	};
	var eventHolder = {};
	if (CIQ.safeClickTouchEvent) {
		// global override for which event to use, for instance if you want to force use of "click" or "tap"
		var fc4 = closure(CIQ.safeClickTouchEvent, params);
		div.addEventListener(CIQ.safeClickTouchEvent, fc4);
		eventHolder[CIQ.safeClickTouchEvent] = fc4;
		safeClickTouchEvents.push(eventHolder);
	} else if ("onpointerup" in document && !CIQ.noPointerEvents) {
		// Internet Explorer can always use pointerup safely
		div.addEventListener("pointerdown", isClick(movementWatcher, true));
		div.addEventListener("pointermove", isClick(movementWatcher));
		div.addEventListener("pointerup", fc3);
		eventHolder.pointerup = fc3;
		if (params.absorbDownEvent) {
			div.addEventListener("pointerdown", f);
			eventHolder.pointerdown = f;
		}
		safeClickTouchEvents.push(eventHolder);
	} else {
		// all in one computers can support both of these under Chrome/FF!
		div.addEventListener("mousedown", isClick(movementWatcher, true));
		div.addEventListener("mousemove", isClick(movementWatcher));
		div.addEventListener("touchstart", isClick(movementWatcher, true), {
			passive: false
		});
		div.addEventListener("touchmove", isClick(movementWatcher), {
			passive: false
		});
		div.addEventListener("mouseup", fc1);
		div.addEventListener("touchend", fc2);
		eventHolder.mouseup = fc1;
		eventHolder.touchend = fc2;
		if (params.absorbDownEvent) {
			div.addEventListener("mousedown", f);
			eventHolder.mousedown = f;
			div.addEventListener("touchstart", f, { passive: false });
			eventHolder.touchstart = f;
		}
		safeClickTouchEvents.push(eventHolder);
	}
};

/**
 * Clears all safeClickTouch events from a DOM element.
 * @param  {object} div The DOM element to clear events
 * @memberof CIQ
 */
CIQ.clearSafeClickTouches = function (div) {
	var safeClickTouchEvents = div.safeClickTouchEvents;
	if (!safeClickTouchEvents) return;
	for (var i = 0; i < safeClickTouchEvents.length; i++) {
		var fc = safeClickTouchEvents[i];
		for (var e in fc) {
			var f = fc[e];
			div.removeEventListener(e, f);
		}
	}
	div.safeClickTouchEvents = null;
};

/**
 * Safe function to handle dragging of objects on the screen.
 *
 * This method is cross-device aware and can handle mouse or touch drags.
 * This method does not actually move the objects but provides callbacks that explain when drag operations
 * begin and cease, and what movements are made during the drag. Callbacks should be used to move the actual objects
 * (if it is desired to move objects during a drag operation). For convenience, displacementX and displacementY are added to callback events
 * to indicate the distance from the original starting point of the drag.
 * A "safety" object is returned which can optionally be passed into CIQ.safeClickTouch to prevent errant click events
 * from being triggered when a user lets go of a drag
 * @param  {object} div    The draggable DOM element
 * @param  {object} [eventHandlers]
 * @param  {function} [eventHandlers.down] Callback function when a drag operation begins. Receives an event object.
 * @param  {function} [eventHandlers.move] Callback function when a drag move occurs. Receives an event object.
 * @param  {function} [eventHandlers.up]   Callback function when the drag operation ends. Receives an event object.
 * @return {object}        Safety object which can be passed to CIQ.safeClickTouch
 * @memberof CIQ
 * @since 7.0.0 change function signature to accept eventHandlers object instead of three function arguments
 */
CIQ.safeDrag = function (div, eventHandlers) {
	var eventProperty = function (key, alt) {
		return function (e) {
			if (e.touches) {
				if (e.touches.length > 0) {
					return e.touches[0][key];
				} else if (e.changedTouches && e.changedTouches.length > 0) {
					return e.changedTouches[0][key];
				}
			}

			return typeof e[key] !== "undefined" ? e[key] : e[alt];
		};
	};
	var pageX = eventProperty("pageX", "clientX");
	var pageY = eventProperty("pageY", "clientY");

	if (typeof eventHandlers === "function") {
		eventHandlers = {
			down: arguments[1], // fcDown
			move: arguments[2], // fcMove
			up: arguments[3] // fcUp
		};
	}
	eventHandlers = eventHandlers || {};

	var resetMS = 100; // To avoid multiple down events only one can occur per 100ms
	var registeredClick = false;
	var startX = 0;
	var startY = 0;
	var safety = {
		recentlyDragged: false
	};

	function startHandler(eventNames) {
		// event handler for mousedown, pointerdown, or touchstart
		return function (e) {
			if (registeredClick) return;

			registeredClick = true;
			CIQ.ChartEngine.ignoreTouch = true;

			var moveFC = function (e) {
				if (e && e.preventDefault) e.preventDefault();

				safety.recentlyDragged = true;
				e.displacementX = pageX(e) - startX;
				e.displacementY = pageY(e) - startY;

				eventHandlers.move(e);
			};

			if (eventHandlers.move) {
				div.ownerDocument.body.addEventListener(eventNames.move, moveFC);
			}

			var upFC = function (e) {
				CIQ.ChartEngine.ignoreTouch = false;

				if (eventHandlers.move) {
					// Remove the move listener since our move is now complete
					div.ownerDocument.body.removeEventListener(eventNames.move, moveFC);
				}

				// Remove the up listener since our move is now complete
				div.ownerDocument.body.removeEventListener(eventNames.up, upFC);
				e.displacementX = pageX(e) - startX;
				e.displacementY = pageY(e) - startY;

				if (eventHandlers.up) {
					eventHandlers.up(e);
				}

				// Prevent errant clicks from touch letting go
				setTimeout(function () {
					safety.recentlyDragged = false;
				}, 50);
			};

			div.ownerDocument.body.addEventListener(eventNames.up, upFC);

			setTimeout(function () {
				registeredClick = false;
			}, resetMS);

			startX = pageX(e);
			startY = pageY(e);

			if (eventHandlers.down) {
				eventHandlers.down(e);
			}
		};
	}

	div.addEventListener(
		"mousedown",
		startHandler({
			down: "mousedown",
			move: "mousemove",
			up: "mouseup"
		})
	);
	div.addEventListener(
		"pointerdown",
		startHandler({
			down: "pointerdown",
			move: "pointermove",
			up: "pointerup"
		})
	);
	div.addEventListener(
		"touchstart",
		startHandler({
			down: "touchstart",
			move: "touchmove",
			up: "touchend"
		}),
		{ passive: false }
	);

	return safety;
};

/**
 * Captures enter key events. Also clears the input box on escape key.
 * @param {object} node The DOM element to attach the event to. Should be a text input box.
 * @param {Function} cb Callback function when enter key is pressed.
 * @memberof CIQ
 */

CIQ.inputKeyEvents = function (node, cb) {
	node.addEventListener(
		"keyup",
		function (e) {
			var key = e.keyCode;
			switch (key) {
				case 13:
					cb();
					break;
				case 27:
					node.value = "";
					break;
				default:
					break;
			}
		},
		false
	);
};

/**
 * Fixes screen scroll. This can occur when the keyboard opens on an iPad or iPhone.
 * @memberof CIQ
 */
CIQ.fixScreen = function () {
	window.scrollTo(0, 0);
};

/**
 * Sets the position of the cursor within a textarea box. This is used for instance to position the cursor at the
 * end of the text that is in a textarea.
 * @param {object} ctrl A valid textarea DOM element
 * @param {number} pos  The position in the text area to position
 * @memberof CIQ
 */
CIQ.setCaretPosition = function (ctrl, pos) {
	ctrl.style.zIndex = 5000;
	if (ctrl.setSelectionRange) {
		CIQ.focus(ctrl);
		try {
			ctrl.setSelectionRange(pos, pos);
		} catch (e) {}
	} else if (ctrl.createTextRange) {
		var range = ctrl.createTextRange();
		range.collapse(true);
		range.moveEnd("character", pos);
		range.moveStart("character", pos);
		range.select();
	}
};

/**
 * Sets the value of an input box only if it is not active. This prevents an input box from changing underneath
 * a user, which can be extremely frustrating on touch devices.
 * @param {HTMLElement} el    The input element
 * @param {string} value The value to set
 * @memberOf  CIQ
 */
CIQ.setValueIfNotActive = function (el, value) {
	if (document.activeElement == el) return;
	el.value = value;
};

/**
 * Closes the keyboard on a touch device by blurring any active input elements.
 * @param {HTMLElement} [newFocus] Element to change focus to
 * @memberof CIQ
 */
CIQ.hideKeyboard = function (newFocus) {
	var element = document.activeElement;
	if (element.tagName == "INPUT" || element.tagName == "TEXTAREA") {
		element.blur();
		element.ownerDocument.defaultView.focus();
		if (newFocus) {
			if (
				newFocus === element.ownerDocument.body ||
				element.ownerDocument.body.contains(newFocus)
			)
				newFocus.focus();
		}
	}
};

/**
 * Adds or removes hover classes.  This function will manage the hovers so they won't trigger when touching.
 * adapted from http://www.javascriptkit.com/dhtmltutors/sticky-hover-issue-solutions.shtml
 * We are relying on touchend being called before mouseover
 * @param {HTMLDocument} [doc] document to interact with
 * @memberof CIQ
 * @since
 * - 6.3.0
 * - 8.5.0 Added optional `doc` parameter.
 */
CIQ.smartHover = function (doc) {
	if (!doc) doc = document;
	if (!doc || doc.documentElement.hasAttribute("ciq-last-interaction")) return; // already initialized
	var isTouch = false; //var to indicate current input type (is touch versus no touch)
	var isTouchTimer;

	function setAttr(doc, t) {
		doc.documentElement.setAttribute("ciq-last-interaction", t);
	}

	function addTouchAttr(e) {
		clearTimeout(isTouchTimer);
		isTouch = true;
		//add attribute value of touch if it's not already set
		if (this.documentElement.getAttribute("ciq-last-interaction") != "touch")
			setAttr(this, "touch");
		//maintain "istouch" state for 500ms so removetouchclass doesn't get fired immediately following a touch event
		isTouchTimer = setTimeout(function () {
			isTouch = false;
		}, 500);
	}

	function removeTouchAttr(e) {
		//set attribute value if not triggered by a touch event
		if (!isTouch) setAttr(this, "mouse");
	}

	//this event only gets called when input type is touch
	doc.addEventListener("touchend", addTouchAttr, false);
	//this event gets called when input type is everything from touch to mouse/trackpad
	doc.addEventListener("mouseover", removeTouchAttr, false);

	setAttr(doc, "");
};

/**
 * Creates a document node which facilitates translation to other languages, if stx.translationCallback callback function is set.
 * If there is no translationCallback, a standard text node is returned.
 * @param  {CIQ.ChartEngine} stx The chart object
 * @param  {string} english The word to translate
 * @param {string} [language] Language. Defaults to CIQ.I18N.language.
 * @return {HTMLElement}	A node in the following form if translationCallback exists:
 * 					<cq-translate original="english">translation</cq-translate>
 * 							If it does not exist, a text node is returned.
 * @memberof CIQ
 */
CIQ.translatableTextNode = function (stx, english, language) {
	if (stx.translationCallback) {
		var translationNode = document.createElement("cq-translate");
		translationNode.setAttribute("original", english);
		translationNode.innerHTML = stx.translationCallback(english, language);
		return translationNode;
	}
	return document.createTextNode(english);
};

/**
 * Gets all parent elements, including the starting element itself, in order of distance from the
 * starting element, nearest parent first.
 *
 * Use instead of jQuery `parents()`.
 *
 * @param {Element} el The starting element from which parent elements are obtained.
 * @param {string} [selector] A CSS selector used to select the parent elements included in the
 * 		ancestor list. If no selector is provided, all parent elements are included.
 * @return {array} Ancestry of elements filtered by `selector` from the starting element up to and
 * 		including the element.
 *
 * @memberof CIQ
 * @since 8.1.0
 */
CIQ.climbUpDomTree = function (el, selector) {
	if (!el || !el.matches) return null;
	var list = [];
	// traverse parents
	while (el) {
		if (!selector || el.matches(selector)) list.push(el);
		el = el.parentElement;
	}
	return list;
};

/**
 * Returns a guaranteed width and height. For instance, `cq-context` or any other wrapping tag can
 * have a width of zero; if so, we need to go up the ancestry tree parent by parent until a
 * parent element provides an actual width and height.
 *
 * @param {Element} element The starting element for which the width and height are obtained.
 * @return {object} Width and height of `element` as properties of the returned object.
 *
 * @memberof CIQ
 * @since 8.1.0
 */
CIQ.guaranteedSize = function (element) {
	if (element.defaultView) element = element.defaultView;
	if (!element.nodeType) {
		return {
			width: element.innerWidth,
			height: element.innerHeight
		};
	}
	if (!element || element.nodeType > 1) return {};
	var w = element.offsetWidth;
	var h = element.offsetHeight;
	while (!w || !h) {
		if (element.tagName === "BODY" || !element.parentElement) {
			element = (element.ownerDocument || {}).defaultView || element;
			w = element.innerWidth;
			h = element.innerHeight;
			break;
		}
		element = element.parentElement;
		w = element.offsetWidth;
		h = element.offsetHeight;
	}
	return { width: w, height: h };
};

/**
 * Determines the visibility of a DOM element based on the following CSS properties:
 * - opacity
 * - display
 * - visibility
 * - width
 * - height
 *
 * Replaces {@link CIQ.UI.trulyVisible}.
 *
 * @param {HTMLElement} node The node for which visibility is determined.
 * @return {boolean} Whether the element is visible.
 *
 * @memberof CIQ
 * @since 8.2.0
 */
CIQ.trulyVisible = function (node) {
	if (!node) return true;
	function check(style) {
		if (style.opacity === "0") return false;
		if (style.display === "none") return false;
		if (style.visibility === "hidden") return false;
		if (parseInt(style.width, 10) === 0) return false;
		if (parseInt(style.height, 10) === 0 && style.overflowY == "hidden")
			return false;
		return true;
	}
	if (!check(node.style)) return false;
	if (!check(getComputedStyle(node))) return false;

	return CIQ.trulyVisible(node.parentElement);
};

/**
 * Measures an element's styled width and height. Assumes all style units are in pixels (px), not
 * percentages or "auto".
 *
 * Use the `flags` parameter to specify whether padding, border, and margin should be included in
 * the measurement.
 *
 * @param {HTMLElement} element The element to measure.
 * @param {object} [flags] Measurement parameters.
 * @param {boolean} [flags.padding] Include padding in the measurement.
 * @param {boolean} [flags.border] Include border in the measurement.
 * @param {boolean} [flags.margin] Include margin in the measurement.
 * @return {object} Width and height as properties of the returned object.
 *
 * @memberof CIQ
 * @since 8.1.0
 */
CIQ.elementDimensions = function (element, flags) {
	if (!element || element.nodeType !== 1) return {};
	var gcs = getComputedStyle(element);
	var dims = { width: parseFloat(gcs.width), height: parseFloat(gcs.height) };
	var fluff = {
		margin: {},
		border: {},
		padding: {}
	};
	var props = ["width", "height"];
	for (var f in fluff) {
		var qual = f == "border" ? "Width" : "";
		fluff[f] = {
			width:
				parseFloat(gcs[f + "Left" + qual]) +
				parseFloat(gcs[f + "Right" + qual]),
			height:
				parseFloat(gcs[f + "Top" + qual]) + parseFloat(gcs[f + "Bottom" + qual])
		};
	}
	if (flags && flags.margin)
		props.forEach(function (i) {
			dims[i] += fluff.margin[i];
		});
	if (flags && gcs.boxSizing === "content-box") {
		if (flags.padding)
			props.forEach(function (i) {
				dims[i] += fluff.padding[i];
			});
		if (flags.border)
			props.forEach(function (i) {
				dims[i] += fluff.border[i];
			});
	} else if (gcs.boxSizing === "border-box") {
		if (!flags || !flags.padding)
			props.forEach(function (i) {
				dims[i] -= fluff.padding[i];
			});
		if (!flags || !flags.border)
			props.forEach(function (i) {
				dims[i] -= fluff.border[i];
			});
	}
	return dims;
};

/**
 * Set to a positive number to use an interval to check for resizes instead of a ResizeObserver. The number chosen
 * will be used as the number of milliseconds between checks.
 *
 * Set to 0 to disable adding resize listeners.
 *
 * **Note:** If an interval is passed to {@link CIQ.resizeObserver}, that value will be used instead.
 * See {@link CIQ.resizeObserver} for more details.
 *
 * @memberof CIQ
 * @type number
 * @since 8.6.0
 */
CIQ.resizeDetectInterval = -1;

/**
 * Creates a [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) to listen for
 * resize changes on the specified element and execute the specified listener function.
 *
 * Under certain conditions an interval check will be used instead. These are:
 * - if a positive `interval` value has been specified in the function call arguments
 * - if {@link CIQ.resizeDetectInterval} has been set to a positive number
 * - if the ResizeObserver API is not available
 *
 * @param {HTMLElement} element The element to observe for resizing.
 * @param {function} listener The function to be executed on a resize event.
 * @param {object|number} resizeHandle A handle to the resizer, which is null the first time the function is
 * 		called, or is the return value of the function for subsequent calls. Can be a ResizeObserver.
 * @param {number} [interval] Optionally specify an interval to use for checking instead of a ResizeObserver.
 * 		Set this value to 0 to turn off the observer.
 * @return {object} A handle to the resizer, which can be passed again to the function to disable or reset
 * 		the handle.
 * @memberof CIQ
 * @since
 * - 7.4.0
 * - 8.6.0 An interval will be used instead of a ResizeObserver if either the `interval` param or
 * 		the {@link CIQ.resizeDetectInterval} is positive.
 */
CIQ.resizeObserver = function (element, listener, resizeHandle, interval) {
	const paramOverride = typeof interval === "number";
	const propertyOverride = CIQ.resizeDetectInterval >= 0;
	const resizeObserverAvailable = typeof ResizeObserver !== "undefined";
	const fallbackInterval = 500;

	if (!paramOverride) {
		if (propertyOverride) interval = CIQ.resizeDetectInterval;
		else if (!resizeObserverAvailable) interval = fallbackInterval;
		else interval = -1;
	}

	if (interval < 0) {
		if (!resizeHandle) {
			// Adding throttling here to fix Chrome issue where benign error is sometimes thrown "ResizeObserver
			// loop limit exceeded". Nevertheless, error seems to be caught by Karma and unit tests fail
			// https://github.com/KingSora/OverlayScrollbars/issues/90
			resizeHandle = new ResizeObserver(() => {
				if (CIQ.ChartEngine && CIQ.ChartEngine.useAnimation) {
					requestAnimationFrame(listener);
				} else {
					setTimeout(listener, 0);
				}
			});
			resizeHandle.observe(element);
		}
	}

	if (interval > 0) {
		if (resizeHandle) clearInterval(resizeHandle);
		resizeHandle = setInterval(listener, interval);
	}

	if (resizeHandle && interval === 0) {
		if (resizeHandle instanceof ResizeObserver) {
			resizeHandle.disconnect();
		} else {
			clearInterval(resizeHandle);
		}
		resizeHandle = null;
	}

	return resizeHandle;
};

/**
 * Turns a portion of raw text into multi-line text that fits in a given width. This is used for autoformatting of annotations
 * @param  {object} ctx    A valid HTML Canvas Context
 * @param  {string} phrase The text
 * @param  {number} l      The width in pixels to fit the text within on the canvas
 * @return {array}        An array of individual lines that should fit within the specified width
 * @memberof CIQ
 */
CIQ.getLines = function (ctx, phrase, l) {
	var wa = phrase.split(" "),
		phraseArray = [],
		lastPhrase = "",
		measure = 0;
	var fw = false;
	for (var i = 0; i < wa.length; i++) {
		var w = wa[i];
		measure = ctx.measureText(lastPhrase + w).width;
		if (measure < l) {
			if (fw) lastPhrase += " ";
			fw = true;
			lastPhrase += w;
		} else {
			phraseArray.push(lastPhrase);
			lastPhrase = w;
		}
		if (i === wa.length - 1) {
			phraseArray.push(lastPhrase);
			break;
		}
	}
	return phraseArray;
};

/**
 * Creates a user-friendly alert.
 *
 * The charting engine uses this function instead of
 * [window.alert()]{@link https://developer.mozilla.org/en-US/docs/Web/API/Window/alert} for
 * warning and error messages. If the window object does not exist, the message is output to the
 * console log.
 *
 * Override this function to create a custom alert.
 *
 * @param {string} text The message to be displayed.
 *
 * @memberof CIQ
 * @since 8.0.0 Output the message to the console log if the window object does not exist.
 *
 * @example
 * // Override with a friendlier alert mechanism!
 * CIQ.alert=function(text){
 * 	doSomethingElse(text);
 * }
 */
CIQ.alert = function (text) {
	if (typeof window !== "undefined") window.alert(text);
	else console.log(text);
};

// Some browsers don't support localStorage, worse won't let you polyfill (JDK7 webview). So we will create
// this so that we can add a polyfill.
try {
	if (typeof localStorage !== "undefined") CIQ.localStorage = localStorage;
} catch (e) {}

if (!CIQ.localStorage)
	CIQ.localStorage = {
		items: {},
		getItem: function (item) {
			return CIQ.localStorage.items[item] || null;
		},
		setItem: function (item, value) {
			CIQ.localStorage.items[item] = value;
		},
		removeItem: function (item) {
			delete CIQ.localStorage.items[item];
		}
	};

/**
 * Set once after user is alerted that private browsing is enabled
 * @memberof CIQ
 * @type boolean
 */
CIQ.privateBrowsingAlert = false;

/**
 * Convenience function for storing a name/value pair in local storage. Detects whether private
 * browsing is enabled since local storage is inoperable under private browsing.
 *
 * @param {string} name The name for the stored item.
 * @param {string} value The value for the stored item.
 *
 * @memberof CIQ
 */
CIQ.localStorageSetItem = function (name, value) {
	try {
		CIQ.localStorage.setItem(name, value);
	} catch (e) {
		if (!CIQ.privateBrowsingAlert) {
			CIQ.alert(
				"No storage space available.  Possible causes include browser being in Private Browsing mode, or maximum storage space has been reached."
			);
			CIQ.privateBrowsingAlert = true;
		}
	}
};

};


let __js_core_engineInit_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Previously `STXChart`.
 *
 * This is the constructor that creates a chart engine, instantiates its basic chart object and links it to its DOM container.
 *
 * Before any chart operations can be performed, this constructor must be called.
 *
 * Multiple CIQ.ChartEngine objects can exist on the same HTML document. <br>
 * 	<iframe width="100%" height="500" scrolling="no" seamless="seamless" align="top" style="float:top" src="https://jsfiddle.net/chartiq/46whz5ag/embedded/result,js,html/" allowfullscreen="allowfullscreen" frameborder="1"></iframe>
 *
 * Once instantiated, the chart engine will never need to be constructed again, unless it is [destroyed]{@link CIQ.ChartEngine#destroy}.<br>
 * To load or change symbols on the chart, simply call {@link CIQ.ChartEngine#loadChart}.
 *
 * @constructor
 * @param {object} config Configuration object used to initialize the chart engine.<br>
 * {@link CIQ.ChartEngine#container} is the minimum requirement. The complete list of parameters and objects can be found in the **Members** section of this page.<br>
 * Example:
 * 	<iframe width="100%" height="500" scrolling="no" seamless="seamless" align="top" style="float:top" src="https://jsfiddle.net/chartiq/xkm4mufy/embedded/js,result,html/" allowfullscreen="allowfullscreen" frameborder="1"></iframe>
 * @name  CIQ.ChartEngine
 * @example
 * // declare a chart
 * var stxx=new CIQ.ChartEngine({container: document.querySelector(".chartContainer")});
 * // override defaults after a chart object is declared (this can be done at any time. If the chart has already been rendered, you will need to call `stx.draw();` to immediately see your changes )
 * stxx.yaxisLabelStyle="roundRectArrow";
 * stxx.layout.chartType="bar";
 * @example
 * // declare a chart and preset defaults
 * var stxx=new CIQ.ChartEngine({container: document.querySelector(".chartContainer"),layout:{"chartType": "candle","candleWidth": 16}});
 * @since
 * - 15-07-01 Deprecated `CIQ.ChartEngine#underlayPercentage`.
 * - m-2016-12-01 Deprecated; renamed `CIQ.ChartEngine` from `STXChart`.
 */
CIQ.ChartEngine = function (config) {
	if (!config) {
		config = {
			container: null
		};
	} else if (
		typeof HTMLDivElement != "undefined" &&
		config.constructor == HTMLDivElement
	) {
		// legacy versions accepted the chart container as the first parameters rather than a config object
		var newConfig = {
			container: config
		};
		config = newConfig;
	}

	// copy prototype values into instance
	for (var n in prototypeSwitches) {
		this[n] = CIQ.clone(CIQ.ChartEngine.prototype[n]);
	}

	/**
	 * The DOM container that will be running the chart engine. This is a required field when calling [new CIQ.ChartEngine]{@link CIQ.ChartEngine}
	 * @type object
	 * @alias container
	 * @memberof CIQ.ChartEngine
	 * @instance
	 * @example
	 * // declare a chart
	 * var stxx=new CIQ.ChartEngine({container: document.querySelector(".chartContainer")});
	 */
	this.container = null;
	/**
	 * Set to false to bypass chart panel creation in {@link CIQ.ChartEngine#construct}.
	 * @type boolean
	 * @alias createChartPanel
	 * @memberof CIQ.ChartEngine
	 * @instance
	 * @private
	 */
	this.createChartPanel = true;
	/**
	 * READ ONLY. A map of marker objects, sorted by label.
	 * @type object
	 * @alias markers
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.markers = {};
	/**
	 * READ ONLY. An array of currently enabled panels
	 * @type object
	 * @alias panels
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.panels = {};
	/**
	 * READ ONLY. An array of currently enabled overlay studies
	 * @type object
	 * @alias overlays
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.overlays = {};
	/**
	 * READ ONLY. The charts on the screen. Will contain at least one item, "chart"
	 * @type object
	 * @alias charts
	 * @memberof CIQ.ChartEngine
	 * @instance
	 * @private
	 */
	this.charts = {};
	/**
	 * READ ONLY. Array of event listeners currently attached to the engine.
	 * These listeners will be killed when {@link CIQ.ChartEngine#destroy} is called.
	 *
	 * See {@link CIQ.ChartEngine#addEventListener} and {@link CIQ.ChartEngine#removeEventListener}
	 * @type array
	 * @alias eventListeners
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.eventListeners = [];

	/**
	 * Holds the HTML control elements managed by the chart. Usually this will be a copy of the default [htmlControls]{@link CIQ.ChartEngine.htmlControls}.
	 * These are not the GUI elements around the chart, but rather the HTML elements that the library will directly interact with on the canvas
	 * for things like panel resizing, study edit controls, zooming controls, etc. See {@link CIQ.ChartEngine.htmlControls} for more details.
	 * @type object
	 * @alias controls
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.controls = {}; // contains the HTML controls for the chart (zoom, home, etc)
	this.goneVertical = false; // Used internally for pinching algorithm
	/**
	 * READ ONLY. Toggles to true when the screen is being pinched
	 * @type boolean
	 * @default
	 * @alias pinchingScreen
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.pinchingScreen = false;
	/**
	 * READ ONLY. Toggles to true when the screen is being panned
	 * @type boolean
	 * @default
	 * @alias grabbingScreen
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.grabbingScreen = false;
	this.grabStartX = 0; // Used internally for panning
	this.grabStartY = 0; // "
	this.grabStartScrollX = 0; // "
	this.grabStartScrollY = 0; // "
	this.swipe = {}; // "

	this.grabStartCandleWidth = 0; // Used internally for zooming
	this.grabStartZoom = 0; // "
	this.grabOverrideClick = false; // "
	this.grabMode = ""; // Used internally. Set to either pan, zoom-x or zoom-y when grabbing screen
	this.vectorsShowing = false; // Used internally to ensure that vectors aren't drawn more than once
	this.mouseMode = true; // Used internally. For Windows8 devices this is set to true or false depending on whether the last touch was a mouse click or touch event. To support all-in-one computers
	this.lineTravelSpacing = false; // Used internally as an override for candleWidth spacing

	this.highlightedDataSetField = null; // READ ONLY. Set to field whose plot is currently highlighted (series or study)
	this.anyHighlighted = false; // READ ONLY. Toggles to true if any drawing or overlay is highlighted for deletion
	this.accessoryTimer = null; // Used internally to control drawing performance
	this.lastAccessoryUpdate = new Date().getTime(); // "
	this.displayCrosshairs = true; // READ ONLY. Use doDisplayCrosshairs() or undisplayCrosshairs()
	this.hrPanel = null; // READ ONLY. Current panel that mouse is hovering over
	this.editingAnnotation = false; // READ ONLY. True if an annotation is open for editing
	this.openDialog = ""; // Set this to non-blank to disable chart touch and mouse events use CIQ.ChartEngine.prototype.modalBegin() and CIQ.ChartEngine.prototype.modalEnd

	this.touches = []; // Used internally for touch
	this.changedTouches = []; // Used internally for touch
	/**
	 * READ ONLY. The tick representing the crosshair cursor point
	 * @type number
	 * @alias crosshairTick
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.crosshairTick = null;
	/**
	 * READ ONLY. The value (price) representing the crosshair cursor point
	 * @type number
	 * @alias crosshairValue
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.crosshairValue = null;

	this.pt = {
		x1: -1,
		x2: -1,
		y1: -1,
		y2: -1
	};
	this.moveA = -1; // Used internally for touch
	this.moveB = -1; // "
	this.touchStartTime = -1; // "
	this.touchPointerType = ""; // "
	this.gestureStartDistance = -1; // "
	this.grabStartPeriodicity = 1; // "
	this.grabEndPeriodicity = -1; // "
	this.scrollEvent = null; // "
	this.cmd = false; // "
	this.ctrl = false; // "
	this.shift = false; // "
	this.userPointerDown = false; //represents either mouse button or finger on touch device
	/**
	     * Manage drawing cloning state.
	     *
	     * Set to `true` to enable the ability to clone drawings.<br>
	     * Once enabled, drawings can be cloned once or multiple times.
	     * A user must highlight the drawing, click on it, move the mouse to a new location and click again to set.<br>
	     * Reset to `false` when you want the cloning to end.
	     *
	     * This can be done based on a key stroke, button press, etc. For example, you can set to true when the `control` key is pressed and disable when it is released.
	     * @type number
	     * @default
	     * @alias cloneDrawing
	     * @memberof CIQ.ChartEngine
	     * @instance
	     * @since 07-2016-16.7
	     * @example
	     *
			document.onkeyup=keyup;
			document.onkeydown=keydown;

			// disable cloning if the ctl key is released
			function keyup(e){
				var key = (window.event) ? event.keyCode : e.keyCode;
				if (key == 18 ) stxx.cloneDrawing=false;
			}

			// enable cloning if the ctl key is pressed
			function keydown(e){
				var key = (window.event) ? event.keyCode : e.keyCode;
				if (key == 18 ) stxx.cloneDrawing=true;
			}
	     */
	this.cloneDrawing = false;
	/**
	 * READ ONLY. Toggles to true whenever the mouse cursor is within the chart (canvas)
	 * @type boolean
	 * @default
	 * @alias insideChart
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.insideChart = false;
	/**
	 * READ ONLY. Toggles to true if the mouse cursor is over the x-axis.
	 * @type boolean
	 * @default
	 * @alias overXAxis
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.overXAxis = false;
	/**
	 * READ ONLY. Toggles to true if the mouse cursor is over the y-axis.
	 * @type boolean
	 * @default
	 * @alias overYAxis
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.overYAxis = false;
	/**
	 * READ ONLY. This gets set to true when the chart display has been initialized.
	 * @type boolean
	 * @default
	 * @alias displayInitialized
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.displayInitialized = false;
	/**
	 * READ ONLY. Mouse pointer X pixel location in reference to the chart canvas. where cx=0 and cy=0 is the upper left corner of the chart.
	 * @type number
	 * @alias cx
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.cx = null;
	/**
	 * READ ONLY. If `true` the chart is in 'historical mode' and no [quotefeed]{@tutorial DataIntegrationQuoteFeeds} 'update' calls will be made.
	 *
	 * This happens when [setSpan]{@link CIQ.ChartEngine#setSpan} or [setRange]{@link CIQ.ChartEngine#setRange} are used to 'jump' to a range in the distance past,
	 * where the master data no longer extends from the end of the displayed range to the current bar.
	 * @type boolean
	 * @alias isHistoricalModeSet
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.isHistoricalModeSet = null;
	/**
	 * READ ONLY. Mouse pointer Y pixel location in reference to the chart canvas. where cx=0 and cy=0 is the upper left corner of the chart.
	 * @type number
	 * @alias cy
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.cy = null;

	this.clicks = {
		s1MS: -1,
		e1MS: -1,
		s2MS: -1,
		e2MS: -1
	};

	this.cancelTouchSingleClick = false; // Set this to true whenever a screen item is touched so as to avoid a chart touch event
	this.locale = null; // set by setLocale()
	/**
	 * READ ONLY. Timezone of the masterData, set by {@link CIQ.ChartEngine#setTimeZone}.
	 * @type {string}
	 * @alias dataZone
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.dataZone = null;
	/**
	 * READ ONLY. Timezone to display on the chart, set by {@link CIQ.ChartEngine#setTimeZone}.
	 * @type {string}
	 * @alias displayZone
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.displayZone = null;
	this.timeZoneOffset = 0; // use setTimeZone() to compute this value
	this.masterData = null; // Contains the historical quotes for the current chart
	/**
	 * Register this function to transform the data set before a createDataSet() event; such as change in periodicity.
	 * You can also explicitly call  <code>stxx.createDataSet(); stxx.draw();</code> to trigger this function.
	 *
	 * Expected Format :
	 *
	 * 		fc(stxChart, dataSet);
	 *
	 * @type {function}
	 * @alias transformDataSetPre
	 * @memberof CIQ.ChartEngine
	 * @instance
	 * @example
	 * stxx.transformDataSetPre=function(stxx, dataSet){
	 *		for(var i=0;i < dataSet.length;i++){
	 *			// do something to the dataset here
	 *		}
	 * }
	 */
	this.transformDataSetPre = null;
	/**
	 * Register this function to transform the data set after a createDataSet() event; such as change in periodicity.
	 * You can also explicitly call  <code>stxx.createDataSet(); stxx.draw();</code> to trigger this function.
	 *
	 * Expected Format :
	 *
	 * 		fc(stxChart, dataSet, min low price in the dataset, max high price in the dataset);
	 *
	 * @type {function}
	 * @alias transformDataSetPost
	 * @memberof CIQ.ChartEngine
	 * @instance
	 * @example
	 * stxx.transformDataSetPost=function(self, dataSet, min, max){
	 *		for(var i=0;i < dataSet.length;i++){
	 *			// do something to the dataset here
	 *		}
	 * }
	 */
	this.transformDataSetPost = null;
	/**
	 * This is the callback function used by {@link CIQ.ChartEngine#setPeriodicity} when no quotefeed has been attached to the chart.
	 * Called if the masterData does not have the interval requested.
	 *
	 * Do not initialize if you are using a {@link quotefeed }
	 *
	 * @type {function}
	 * @alias dataCallback
	 * @memberof CIQ.ChartEngine
	 * @instance
	 * @example
	 * stxx.dataCallback=function(){
	 *		// put code here to get the new data in the correct periodicity.
	 *		// use layout.interval and layout.periodicity to determine what you need.
	 *		// finally call stxx.loadChart(symbol,data) to load the data and render the chart.
	 * }
	 */
	this.dataCallback = null;
	/**
	 * Stores a list of active drawing object on the chart. Serialized renditions of drawings can be added using {@link CIQ.ChartEngine#createDrawing} and removed using {@link CIQ.ChartEngine#removeDrawing}
	 * @type array
	 * @default
	 * @alias drawingObjects
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.drawingObjects = [];
	this.undoStamps = [];
	/**
	 * READ ONLY. Flag that specifies whether the background canvas should be used to draw grid lines and axes.
	 * This flag is set to true when the `canvasShim` contains child elements. The `canvasShim` is the background
	 * canvas &mdash; an HTML container behind the main chart canvas.
	 *
	 * Check this flag to determine whether the `canvasShim` is being used to create background drawings.
	 *
	 * @see {@link CIQ.Visualization}
	 * @see {@link CIQ.ChartEngine#embedVisualization}.
	 * @type boolean
	 * @default
	 * @alias useBackgroundCanvas
	 * @memberof CIQ.ChartEngine
	 * @instance
	 * @since 7.4.0
	 */
	this.useBackgroundCanvas = false;
	/**
	 * READ ONLY. Access the renderer controlling the main series.
	 * @type CIQ.Renderer
	 * @default
	 * @alias mainSeriesRenderer
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.mainSeriesRenderer = null;
	/**
	 * Object that stores the styles used by the chart.
	 * @type object
	 * @alias styles
	 * @instance
	 * @memberof CIQ.ChartEngine
	 */
	this.styles = {}; // Contains CSS styles used internally to render canvas elements
	/**
	 * Placeholder for plugin data sets. This array will register each plug in object, complete with their functions.
	 *
	 * If defined, Plug-in instances will be called by their corresponding native functions for the following:
	 * - consolidate ( called by {@link CIQ.ChartEngine#consolidatedQuote})
	 * - drawUnder (called by draw before rendering underlays)
	 * - drawOver (called by draw after rendering overlays)
	 * - {@link CIQ.ChartEngine#setMasterData}
	 * - {@link CIQ.ChartEngine#updateChartData}
	 * - {@link CIQ.ChartEngine#initializeChart}
	 * - {@link CIQ.ChartEngine#createDataSet}
	 * - {@link CIQ.ChartEngine#findHighlights}
	 * @type array
	 * @memberof CIQ.ChartEngine
	 * @instance
	 * @private
	 */
	this.plugins = {};
	/**
	 * Cloned copy of {@link CIQ.ChartEngine.currentVectorParameters} object template.
	 * Use it to store the settings for the active drawing tool.
	 * @type {CIQ.ChartEngine.currentVectorParameters}
	 * @default
	 * @alias currentVectorParameters
	 * @memberof CIQ.ChartEngine
	 * @instance
	 * @tsdeclaration
	 * public currentVectorParameters: typeof CIQ.ChartEngine.currentVectorParameters
	 */
	this.currentVectorParameters = CIQ.clone(
		CIQ.ChartEngine.currentVectorParameters
	); // contains the current drawing parameters for this chart
	/**
	 * Holds {@link CIQ.ChartEngine.Chart} object
	 * @type CIQ.ChartEngine.Chart
	 * @default
	 * @alias chart
	 * @memberof CIQ.ChartEngine
	 * @instance
	 */
	this.chart = new CIQ.ChartEngine.Chart();
	var chart = this.chart;
	chart.name = "chart";
	chart.yAxis.name = "chart";
	chart.canvas = null; // Contains the HTML5 canvas with the chart and drawings
	chart.tempCanvas = null; // lays on top of the canvas and is used when creating drawings
	chart.container = config.container;
	if (CIQ.Market) chart.market = new CIQ.Market(); //create a default market, always open
	this.charts.chart = chart;

	CIQ.extend(this, config);

	if (config.container) {
		if (this.registerHTMLElements) this.registerHTMLElements();
		// Initialize the very basic dimensions of chart so that it is operational immediately
		chart.width = chart.container.clientWidth - chart.yAxis.width;
		this.setCandleWidth(this.layout.candleWidth, chart);
		chart.canvasHeight = chart.container.clientHeight;
	}
	this.construct();
};

/**
 * READ ONLY. Toggles to true when a drawing is initiated
 * @type boolean
 * @default
 * @alias drawingLine
 * @static
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.drawingLine = false;
/**
 * READ ONLY. Toggles to true when a panel is being resized
 * @type boolean
 * @default
 * @alias resizingPanel
 * @static
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.resizingPanel = null;
/**
 * READ ONLY. Current X screen coordinate of the crosshair.
 * @type number
 * @default
 * @alias crosshairX
 * @static
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.crosshairX = 0;
/**
 * READ ONLY. Current Y screen coordinate of the crosshair.
 * @type number
 * @default
 * @alias crosshairY
 * @static
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.crosshairY = 0;
/**
 * [Browser animation API](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame) is on by default.
 * @type boolean
 * @default
 * @alias useAnimation
 * @static
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.useAnimation = true;

CIQ.ChartEngine.enableCaching = false;
/**
 * Set to true to true to bypass all touch event handling.
 * @type number
 * @default
 * @alias ignoreTouch
 * @static
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.ignoreTouch = false;
/**
 * Mitigates problems clearing the canvas on old (defective) Android devices by performing additional function on the canvas, normally not needed on the newer devices.
 * Set to false to boost native android browser performance, but at risk of "double candle" display errors on some older devices.
 * @type boolean
 * @default
 * @alias useOldAndroidClear
 * @static
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.useOldAndroidClear = true;

// Documented in standard/drawing.js
CIQ.ChartEngine.currentVectorParameters = {};

/**
 * If set to a valid time zone identifier, then new CIQ.ChartEngine objects will pull their display timezone from this.
 * @type {string}
 * @alias defaultDisplayTimeZone
 * @static
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.defaultDisplayTimeZone = null; // If set, then new CIQ.ChartEngine objects will pull their display timezone from this

/**
 * If set, overrides the default base path for plug-ins.
 *
 * By default, plug-ins loaded by means of a script tag check for resources inside the
 * plug-ins directory, `plugins/`. However, if the application is served from outside the
 * `chartiq` directory, or the plug-ins folder is otherwise not available at `./`, you may
 * need to specify where the plug-ins directory can be found so resources can be loaded.
 *
 * Path must end in `/`.
 *
 * @type string
 * @default
 * @alias pluginBasePath
 * @static
 * @memberof CIQ.ChartEngine
 * @since
 * - 8.0.0
 * - 8.4.0 No longer in use.
 *
 */
CIQ.ChartEngine.pluginBasePath = "plugins/";

CIQ.ChartEngine.registeredContainers = []; // This will contain an array of all of the CIQ container objects
// Note that if you are dynamically destroying containers in the DOM you should delete them from this array when you do so

CIQ.ChartEngine.globalEventHandlers = []; // All events that need to be attached to all document/windows, done in initializeChart()

/**
 * Calls the functions in {@link CIQ.ChartEngine.helpersToRegister} to instantiate the registered
 * chart helpers.
 *
 * @param {CIQ.ChartEngine} stx A chart engine reference, which is passed to the functions in
 * {@link CIQ.ChartEngine.helpersToRegister}.
 *
 * @memberof CIQ.ChartEngine
 * @private
 * @since 8.2.0
 */
CIQ.ChartEngine.registerHelpers = function (stx) {
	CIQ.ChartEngine.helpersToRegister.forEach(function (registrationFn) {
		registrationFn(stx);
	});
};

/**
 * An array of functions that instantiate helpers for the chart engine.
 *
 * Modules that define a chart helper should push a function to this array so that the helper can
 * be created by {@link CIQ.ChartEngine.registerHelpers}. The function should include a parameter
 * of type {@link CIQ.ChartEngine} and attach the helper to the chart engine referenced by the
 * parameter (see example).
 *
 * @type function[]
 * @memberof CIQ.ChartEngine
 * @private
 * @since 8.2.0
 *
 * @example
 * CIQ.ChartEngine.helpersToRegister.push(function (stx) {
 *     stx.baselineHelper = new Map();
 * });
 */
CIQ.ChartEngine.helpersToRegister = [];

/**
 * Private construction of the chart object. This is called from the actual constructor
 * for CIQ.ChartEngine.
 * @private
 * @memberof CIQ.ChartEngine
 * @since
 * - 07/01/2015
 * - 7.1.0 Changed `longHoldTime` to 700ms default.
 */
CIQ.ChartEngine.prototype.construct = function () {
	if (this.createChartPanel) {
		this.stackPanel("chart", "chart", 1);
		this.adjustPanelPositions();
		this.chart.panel = this.panels[this.chart.name];
	}
	this.cx = 0;
	this.cy = 0;
	this.micropixels = 0;
	this.callbackListeners = {
		/**
		 * Called by {@link CIQ.ChartEngine.AdvancedInjectable#touchDoubleClick} when the chart
		 * is quickly tapped twice.
		 *
		 * @param {object} data Data relevant to the "tap" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {number} data.finger Indicates which finger double-tapped.
		 * @param {number} data.x The crosshairs x-coordinate.
		 * @param {number} data.y The crosshairs y-coordinate.
		 *
		 * @callback CIQ.ChartEngine~doubleTapEventListener
		 * @since 4.0.0
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		doubleTap: [],
		/**
		 * Called by {@link CIQ.ChartEngine#doubleClick} when the chart is quickly clicked or
		 * tapped twice.
		 *
		 * @param {object} data Data relevant to the double-click or double-tap event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {number} data.button The button or finger that double-clicked or
		 * 		double-tapped.
		 * @param {number} data.x The double-click or crosshairs x-coordinate.
		 * @param {number} data.y The double-click or crosshairs y-coordinate.
		 *
		 * @callback CIQ.ChartEngine~doubleClickEventListener
		 * @since 8.0.0
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		doubleClick: [],
		/**
		 * Called when a drawing is added, removed, or modified.
		 *
		 * Such as calling {@link CIQ.ChartEngine#clearDrawings},
		 * {@link CIQ.ChartEngine#removeDrawing}, {@link CIQ.ChartEngine#undoLast}, or
		 * {@link CIQ.ChartEngine#drawingClick}.
		 *
		 * @param {object} data Data relevant to the "drawing" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {string} data.symbol The current chart symbol.
		 * @param {object} data.symbolObject The symbol's value and display label
		 * 		({@link CIQ.ChartEngine.Chart#symbolObject}).
		 * @param {object} data.layout The chart's layout object ({@link CIQ.ChartEngine#layout}).
		 * @param {array} data.drawings The chart's current drawings ({@link CIQ.Drawing}).
		 *
		 * @callback CIQ.ChartEngine~drawingEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		drawing: [],
		/**
		 * Called when a drawing tool completes drawing a shape.
		 *
		 * @param {object} data Data relevant to the "drawingComplete" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {CIQ.Drawing} data.drawing The completed drawing.
		 *
		 * @callback CIQ.ChartEngine~drawingCompleteEventListener
		 * @since 8.6.0
		 */
		drawingComplete: [],
		/**
		 * A right-click on a highlighted drawing.
		 *
		 * @param {object} data Data relevant to the "drawingEdit" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {CIQ.Drawing} data.drawing The highlighted drawing instance.
		 *
		 * @callback CIQ.ChartEngine~drawingEditEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		drawingEdit: [],
		/**
		 * Called to open a window that can be moved and resized by the user.
		 *
		 * For example, called by {@link CIQ.Shortcuts} to display the keyboard shortcuts legend.
		 *
		 * @param {object} data Data relevant to the "floatingWindow" event.
		 * @param {string} data.type The type of floating window to open; for example, "shortcut"
		 * 		for a floating window containing the keyboard shortcuts legend (see
		 * 		{@link CIQ.Shortcuts}).
		 * @param {string} data.content The contents of the floating window, typically an HTML
		 * 		string.
		 * @param {object} [data.container] The DOM element that visually contains the floating
		 * 		window. The window is positioned on screen relative to the element (see
		 * 		{@link WebComponents.cq-floating-window.DocWindow#positionRelativeTo}). Defaults
		 * 		to `document.body`.
		 * 		<p>**Note:** The markup of the DOM element does not need to lexically contain the
		 * 		markup of the floating window.
		 * @param {string} [data.title] Text that appears in the title bar of the floating window.
		 * @param {number} [data.width] The width of the floating window in pixels.
		 * @param {boolean} [data.status] The floating window state: true, to open the floating
		 * 		window; false, to close it. If the parameter is not provided, the floating window
		 * 		is toggled (opened if closed, closed if open).
		 * @param {string} [data.tag] A label that identifies the floating window type; for
		 * 		example, "shortcut", which indicates that the floating window contains the keyboard
		 * 		shortcuts legend.
		 * 		<p>**Note:** Use this parameter to manage floating windows in a multi-chart
		 * 		document. Only one instance of a floating window is created for a given tag
		 * 		regardless of how many "floatingWindow" events occur having that tag, in which
		 * 		case a floating window can be shared by multiple charts. If floating windows do
		 * 		not have tags, new floating windows are created for new "floatingWindow" events
		 * 		even though the events may have the same `type` (see above).
		 * @param {function} [data.onClose] A callback to execute when the floating window is
		 * 		closed.
		 *
		 * @callback CIQ.ChartEngine~floatingWindowEventListener
		 * @since 8.2.0
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		floatingWindow: [],
		/**
		 * Called when a change occurs in the chart layout.
		 *
		 * Layout changes are caused by:
		 * - Calling {@link CIQ.ChartEngine#setChartType},
		 *   {@link CIQ.ChartEngine#setAggregationType}, {@link CIQ.ChartEngine#setChartScale}, or
		 *   {@link CIQ.ChartEngine#setAdjusted}
		 * - Using the {@link WebComponents.cq-toolbar} to disable the current active drawing tool
		 *   or toggling the crosshair
		 * - Using the {@link WebComponents.cq-views} to activate a serialized layout
		 * - Modifying a series ({@link CIQ.ChartEngine#modifySeries})
		 * - Setting a new periodicity ({@link CIQ.ChartEngine#setPeriodicity})
		 * - Adding or removing a study overlay
		 *   ({@link CIQ.ChartEngine.AdvancedInjectable#removeOverlay})
		 * - Adding or removing any new panels (and their corresponding studies)
		 * - Zooming in ({@link CIQ.ChartEngine#zoomIn}) or
		 *   zooming out ({@link CIQ.ChartEngine#zoomOut})
		 * - Setting ranges with {@link CIQ.ChartEngine#setSpan} or
		 *   {@link CIQ.ChartEngine#setRange}
		 * - Nullifying a programmatically set span or range by user panning
		 * - Enabling or disabling [extended hours]{@link CIQ.ExtendedHours}
		 * - Toggling the [range slider]{@link CIQ.RangeSlider}
		 *
		 * **Note** Scrolling and panning changes are not considered a layout change but rather a
		 * shift of the view window in the same layout. To detect those, register to listen for
		 * ["scroll" events]{@link CIQ.ChartEngine~scrollEventListener}.
		 *
		 * @param {object} data Data relevant to the "layout" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {string} data.symbol The current chart symbol.
		 * @param {object} data.symbolObject The symbol's value and display label
		 * 		({@link CIQ.ChartEngine.Chart#symbolObject}).
		 * @param {object} data.layout The chart's layout object ({@link CIQ.ChartEngine#layout}).
		 * @param {array} data.drawings The chart's current drawings ({@link CIQ.Drawing}).
		 *
		 * @callback CIQ.ChartEngine~layoutEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		layout: [],
		/**
		 * Called when the mouse is clicked on the chart and held down.
		 *
		 * Also see {@link CIQ.ChartEngine#longHoldTime}
		 *
		 * @param {object} data Data relevant to the "longhold" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {string} data.panel The panel being clicked.
		 * @param {number} data.x The crosshair x-coordinate.
		 * @param {number} data.y The crosshair y-coordinate.
		 *
		 * @callback CIQ.ChartEngine~longholdEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 * @example <caption>Add a "longhold" event listener.</caption>
		 * stxx.longHoldTime = ... // Optionally override default value of 700ms.
		 * stxx.addEventListener("longhold", function(lhObject) {
		 *     CIQ.alert("longhold event at x: " + lhObject.x + " y: " + lhObject.y);
		 * });
		 */
		longhold: [],
		/**
		 * Called when the pointer is moved inside the chart, even on panning or horizontal
		 * swiping.
		 *
		 * @param {object} data Data relevant to the "move" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {string} data.panel The panel where the mouse is active.
		 * @param {number} data.x The pointer x-coordinate.
		 * @param {number} data.y The pointer y-coordinate.
		 * @param {boolean} data.grab True if the chart is being dragged.
		 *
		 * @callback CIQ.ChartEngine~moveEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		move: [],
		/**
		 * Called when the [quotefeed interface](quotefeed.html) loads a complete data set as
		 * a result of:
		 * - [symbol changes]{@link CIQ.ChartEngine#loadChart} or
		 * - [periodicity]{@link CIQ.ChartEngine#setPeriodicity},
		 * [range]{@link CIQ.ChartEngine#setRange}, or [span]{@link CIQ.ChartEngine#setSpan}
		 * changes requiring new data.
		 *
		 * @param {object} data Data relevant to the "newChart" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {string} data.symbol The current chart symbol.
		 * @param {object} data.symbolObject The symbol's value and display label,
		 * 		{@link CIQ.ChartEngine.Chart#symbolObject}.
		 * @param {boolean} data.moreAvailable True if {@link quotefeed~dataCallback} reports
		 * 		that more data is available.
		 * @param {boolean} data.upToDate True if {@link quotefeed~dataCallback} reports that
		 * 		no more future data is available.
		 * @param {object} data.quoteDriver The quote feed driver.
		 *
		 * @callback CIQ.ChartEngine~newChartEventListener
		 * @since 8.0.0 Added the `upToDate` parameter.
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		newChart: [],
		/**
		 * Called when a message toaster notification event (a toast) has occurred.
		 *
		 * @param {object|string} data Either an object containing data relevant to the
		 * 		notification event or a string that identifies a property of the `systemMessages`
		 * 		property of the chart configuration object. The property contained in
		 * 		`systemMessages` is an object literal that specifies data relevant to the
		 * 		notification event (see
		 * 		<a href="tutorial-Chart%20Configuration.html#systemmessages" target="_blank">
		 * 		<code class="codeLink">systemMessages</code></a> in the
		 * 		<a href="tutorial-Chart%20Configuration.html" target="_blank">Chart
		 * 		Configuration</a> tutorial).
		 * @param {string} data.message Text to display in the notification.
		 * @param {string} [data.position="top"] Alignment of the notification: "top" or "bottom".
		 * 		Overrides the `defaultPosition` attribute of the
		 * 		[`<cq-message-toaster>`]{@link WebComponents.cq-message-toaster} element.
		 * @param {string} [data.type="info"] Notification style: "info", "error", "warning", or
		 * 		"confirmation".
		 * @param {string} [data.transition] Type of animation used to display and dismiss (remove)
		 * 		the notification: "fade", "slide", "pop" or "drop". The default is no transition.
		 * 		Overrides the `defaultTransition` attribute of the
		 * 		[`<cq-message-toaster>`]{@link WebComponents.cq-message-toaster} element.
		 * @param {number} [data.displayTime=10] Number of seconds to display the notification
		 * 		before automatically dismissing it. A value of 0 causes the notification to remain
		 * 		on screen&nbsp;&mdash;&nbsp;preventing other notifications from
		 * 		displaying&nbsp;&mdash;&nbsp;until the notification is selected by the user and
		 * 		dismissed. Overrides the `defaultDisplayTime` attribute of the
		 * 		[`<cq-message-toaster>`]{@link WebComponents.cq-message-toaster} element.
		 * @param {number} [data.priority=0] Priority of the notification relative to others in
		 * 		the notification queue. Higher priority notifications are displayed before
		 * 		notifications with lower priority. For example, a notification with
		 * 		priority&nbsp;=&nbsp;4 is displayed before a notification with
		 * 		priority&nbsp;=&nbsp;1. Notifications with the same priority are displayed
		 * 		in the order they were created; that is, in the order they entered the
		 * 		notification queue.
		 * @param {function} [data.callback] Function to call when the notification is selected
		 * 		(dismissed) by the user. If the notification is dismissed automatically (see
		 * 		`displayTime`), this function is not called.
		 *
		 * @callback CIQ.ChartEngine~notificationEventListener
		 * @since 8.2.0
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		notification: [],
		/**
		 * Called when the periodicity is changed, for example, by
		 * {@link CIQ.ChartEngine#setPeriodicity}.
		 *
		 * This event listener can be used instead of
		 * [layoutEventListener]{@link CIQ.ChartEngine~layoutEventListener} for events that only
		 * need to be triggered when the periodicity changes.
		 *
		 * @param {object} data Data relevant to the "periodicity" event.
		 * @param {CIQ.ChartEngine} data.stx Reference to the chart engine.
		 * @param {boolean} data.differentData Indicates whether the chart needs new data to
		 * 		conform with the new periodicity. Typically, the value for this parameter is
		 * 		obtained from a call to {@link CIQ.ChartEngine#needDifferentData}.
		 * @param {CIQ.ChartEngine~PeriodicityParameters} data.prevPeriodicity The periodicity
		 * 		before the periodicity change event.
		 *
		 * @callback CIQ.ChartEngine~periodicityEventListener
		 * @since 8.1.0
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		periodicity: [],
		/**
		 * Called when preferences are changed.
		 *
		 * Such as when calling {@link CIQ.ChartEngine#setTimeZone},
		 * {@link CIQ.ChartEngine#importPreferences}, {@link CIQ.Drawing.saveConfig}, or
		 * {@link CIQ.Drawing.restoreDefaultConfig} or when making language changes using the
		 * {@link WebComponents.cq-language-dialog}.
		 *
		 * @param {object} data Data relevant to the "preferences" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {string} data.symbol The current chart symbol.
		 * @param {object} data.symbolObject The symbol's value and display label
		 * 		({@link CIQ.ChartEngine.Chart#symbolObject}).
		 * @param {object} data.layout The chart's layout object ({@link CIQ.ChartEngine#layout}).
		 * @param {array} data.drawingObjects The chart's current drawings
		 * 		({@link CIQ.ChartEngine#drawingObjects}).
		 *
		 * @callback CIQ.ChartEngine~preferencesEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		preferences: [],
		/**
		 * Called on "mouseup" after the chart is right-clicked.
		 *
		 * **Note:** By default, right-clicks are only captured when mousing over chart objects
		 * such as series and drawings. To enable right-click anywhere on the chart, the
		 * "contextmenu" event listener must be modified as follows:
		 * ```
		 * document.removeEventListener("contextmenu", CIQ.ChartEngine.handleContextMenu);
		 * document.addEventListener(
		 *     "contextmenu",
		 *     function(e) {
		 *         if (!e) e = event;
		 *         if (e.preventDefault) e.preventDefault();
		 *         return false;
		 *     }
		 * );
		 * ```
		 *
		 * @param {object} data Data relevant to the "rightClick" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {string} panel The panel that was clicked.
		 * @param {number} data.x The click x-coordinate.
		 * @param {number} data.y The click y-coordinate.
		 *
		 * @callback CIQ.ChartEngine~rightClickEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 * @see {@link CIQ.ChartEngine.handleContextMenu}
		 *
		 * @example <caption>Trigger and provide location and details when clicking a series:</caption>
		 * stxx.addEventListener("tap", function(tapObject) {
		 *     if (this.anyHighlighted) {
		 *         for (let n in this.chart.seriesRenderers) {
		 *             const r = this.chart.seriesRenderers[n];
		 *             for(let j = 0; j < r.seriesParams.length; j++) {
		 *                 series = r.seriesParams[j];
		 *                 if (series.highlight) {
		 *                     const bar = this.barFromPixel(tapObject.x);
		 *                     if (this.chart.dataSegment[bar]) {
		 *                         // Replace console.log with your required logic.
		 *                         console.log('Tap event at pixel x: ' + tapObject.x + ' y: '+ tapObject.y);
		 *                         console.log('Price:', this.priceFromPixel(tapObject.y), ' Date: ', this.chart.dataSegment[bar].DT);
		 *                         console.log('Series Details: ',JSON.stringify(series));
		 *                     }
		 *                 }
		 *             }
		 *         }
		 *     }
		 * });
		 */
		rightClick: [],
		/**
		 * Called when the chart is panned and scrolled in any direction or is horizontally swiped.
		 *
		 * @param {object} data Data relevant to the "scroll" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {string} data.panel The panel where the mouse is active.
		 * @param {number} data.x The mouse x-coordinate.
		 * @param {number} data.y The mouse y-coordinate.
		 *
		 * @callback CIQ.ChartEngine~scrollEventListener
		 * @since 6.3.0
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		scroll: [],
		/**
		 * Called when an overlay-type study is right-clicked.
		 *
		 * @param {object} data Data relevant to the "studyOverlayEdit" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {object} data.sd The study object study descriptor.
		 * @param {object} data.inputs The inputs from the study descriptor.
		 * @param {object} data.outputs The outputs from the study descriptor.
		 * @param {object} data.parameters The parameters from the study descriptor.
		 *
		 * @callback CIQ.ChartEngine~studyOverlayEditEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 *
		 * @example
		 * stxx.addEventListener("studyOverlayEdit", function(studyData) {
		 *     CIQ.alert(studyData.sd.name);
		 *     const helper = new CIQ.Studies.DialogHelper({ name: studyData.sd.type, stx: studyData.stx });
		 *     console.log('Inputs:',JSON.stringify(helper.inputs));
		 *     console.log('Outputs:',JSON.stringify(helper.outputs));
		 *     console.log('Parameters:',JSON.stringify(helper.parameters));
		 *     // Call your menu here with the data returned in helper.
		 *     // Modify parameters as needed and call addStudy or replaceStudy.
		 * });
		 */
		studyOverlayEdit: [],
		/**
		 * Called when a panel-type study is edited.
		 *
		 * @param {object} data Data relevant to the "studyPanelEdit" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {object} data.sd The study object study descriptor.
		 * @param {object} data.inputs The inputs from the study descriptor.
		 * @param {object} data.outputs The outputs from the study descriptor.
		 * @param {object} data.parameters The parameters from the study descriptor.
		 *
		 * @callback CIQ.ChartEngine~studyPanelEditEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		studyPanelEdit: [],
		/**
		 * Called when the chart's symbols change. Including secondary series and underlying
		 * symbols for studies (e.g., price relative study).
		 *
		 * @param {object} data Data relevant to the "symbolChange" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {string} data.symbol The new chart symbol.
		 * @param {object} data.symbolObject The symbol's value and display label
		 * 		({@link CIQ.ChartEngine.Chart#symbolObject}).
		 * @param {string} data.action An action type being performed on the symbol. Possible
		 * 		options:
		 * - `add-series` &mdash; A series was added
		 * - `master` &mdash; The master symbol was changed
		 * - `remove-series` &mdash; A series was removed

		 * @callback CIQ.ChartEngine~symbolChangeEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		symbolChange: [],
		/**
		 * Called when a symbol is imported into the layout, including secondary series and
		 * underlying symbols for studies (e.g., price relative study).
		 *
		 * This listener is not called by other types of symbol changes.
		 *
		 * @param {object} data Data relevant to the "symbolImport" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {string} data.symbol The new chart symbol.
		 * @param {object} data.symbolObject The symbol's value and display label
		 * 		({@link CIQ.ChartEngine.Chart#symbolObject}).
		 * @param {string} data.action An action type being performed on the symbol. Possible
		 * 		options:
		 * - `add-series` &mdash; A series was added
		 * - `master` &mdash; The master symbol was changed
		 * - `remove-series` &mdash; A series was removed
		 *
		 * @callback CIQ.ChartEngine~symbolImportEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 * @see {@link CIQ.ChartEngine#importLayout}
		 */
		symbolImport: [],
		/**
		 * Called on ["mouseup"]{@link CIQ.ChartEngine.AdvancedInjectable#touchSingleClick} when
		 * the chart is tapped.
		 *
		 * @param {object} data Data relevant to the "tap" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {string} data.panel The panel being tapped.
		 * @param {number} data.x The tap x-coordinate.
		 * @param {number} data.y The tap y-coordinate.
		 *
		 * @callback CIQ.ChartEngine~tapEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		tap: [],
		/**
		 * Called when a new theme is activated on the chart, such as by
		 * {@link WebComponents.cq-themes} initialization or using the
		 * {@link WebComponents.cq-theme-dialog}.
		 *
		 * @param {object} data Data relevant to the "theme" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {string} data.symbol The current chart symbol.
		 * @param {object} data.symbolObject The symbol's value and display label
		 * 		({@link CIQ.ChartEngine.Chart#symbolObject}).
		 * @param {object} data.layout The chart's layout object ({@link CIQ.ChartEngine#layout}).
		 * @param {array} data.drawingObjects The chart's current drawings
		 * 		({@link CIQ.ChartEngine#drawingObjects}).
		 *
		 * @callback CIQ.ChartEngine~themeEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		theme: [],
		/**
		 * Called when an undo stamp is created for drawing events.
		 *
		 * See {@link CIQ.ChartEngine#undoStamp}
		 *
		 * @param {object} data Data relevant to the "undoStamp" event.
		 * @param {CIQ.ChartEngine} data.stx The chart engine instance.
		 * @param {array} data.before The chart drawing objects before the change.
		 * @param {array} data.after The chart drawings objects after the change.
		 *
		 * @callback CIQ.ChartEngine~undoStampEventListener
		 *
		 * @see {@link CIQ.ChartEngine#addEventListener}
		 */
		undoStamp: []
	};
	CIQ.ChartEngine.registerHelpers(this);
};

var prototypeSwitches = {
	/**
	 * Time in MS to trigger a [longholdEventListener]{@link CIQ.ChartEngine~longholdEventListener} on the chart.
	 *
	 * @type number
	 * @default
	 * @memberof CIQ.ChartEngine.prototype
	 * @example <caption>Add a "longhold" event listener.</caption>
	 * stxx.longHoldTime = ... // Optionally override default value of 700ms.
	 * stxx.addEventListener("longhold", function(lhObject) {
	 *     CIQ.alert("longhold event at x: " + lhObject.x + " y: " + lhObject.y);
	 * });
	 */
	longHoldTime: 700,
	/**
	 * Number of pixels the mouse needs to move in vertical direction to "unlock" vertical panning/scrolling.
	 * Setting to a number larger than the pixels on the canvas will also disable vertical scrolling
	 * @type number
	 * @default
	 * @alias yTolerance
	 * @memberof CIQ.ChartEngine.prototype
	 * @example
	 * //This will disable the tolerance, so panning will immediately follow the user actions without maintaining a locked vertical location when panning left or right.
	 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), layout:{"candleWidth": 16, "crosshair":true}});
	 * stxx.yTolerance=0;
	 */
	yTolerance: 100,

	/**
	 * Number of bars to always keep in view when the user pans forwards or backwards.
	 * If this is set to less than 1, it will be possible to have a blank chart.
	 *
	 * See {@link CIQ.ChartEngine.Chart#allowScrollPast} and {@link CIQ.ChartEngine.Chart#allowScrollFuture} for instructions on how to prevent users from scrolling past the last bar on the chart in either direction; which may supersede this setting.
	 * @type number
	 * @default
	 * @alias minimumLeftBars
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 05-2016-10
	 */
	minimumLeftBars: 1,
	/**
	 * Set to true to reverse direction of mousewheel for zooming
	 * @type boolean
	 * @default
	 * @alias reverseMouseWheel
	 * @memberof CIQ.ChartEngine.prototype
	 */
	reverseMouseWheel: false,
	/**
	 * Set to false to turn off mouse wheel acceleration effect, which depending on initial gesture speed, slowly slows down zooming as you let go of the wheel/pad.
	 * @type boolean
	 * @default
	 * @alias mouseWheelAcceleration
	 * @since 2015-11-1
	 * @memberof CIQ.ChartEngine.prototype
	 */
	mouseWheelAcceleration: true,
	/**
	 * Minimum candleWidth (in pixels) allowed when zooming out. Determines the maximum number of ticks to display on the chart.
	 *
	 * Also see {@link CIQ.ChartEngine#maximumCandleWidth}
	 *
	 * Use {@link CIQ.ChartEngine#minimumZoomTicks} to set the minimum number of ticks that must remain on the chart during a zoom-in operation.
	 *
	 * When candleWidth<1 and {@link CIQ.ChartEngine.Chart#lineApproximation} true,
	 * will create approximation of a line chart to improve rendering performance.
	 * Regardless, anything smaller than **0.3 pixels** may cause performance issues when zooming out.
	 * @type number
	 * @default
	 * @alias minimumCandleWidth
	 * @memberof CIQ.ChartEngine.prototype
	 */
	minimumCandleWidth: 1,
	/**
	 * Maximum candleWidth (in pixels) allowed when zooming in. Determines the minimum number of ticks to display on the chart.
	 *
	 * Also see {@link CIQ.ChartEngine#minimumCandleWidth}
	 *
	 * Use {@link CIQ.ChartEngine#minimumZoomTicks} to set the minimum number of ticks that must remain on the chart during a zoom-in operation.
	 *
	 * @type number
	 * @default
	 * @alias maximumCandleWidth
	 * @memberof CIQ.ChartEngine.prototype
	 * @since
	 * - 7.4.0
	 * - 8.4.0 Changed default to 100
	 */
	maximumCandleWidth: 100,
	/**
	 * Set to the number of ticks that **must** remain on the chart when zooming in.
	 *
	 * Use {@link CIQ.ChartEngine#minimumCandleWidth} to set the minimum number of ticks that must remain on the chart during a zoom-out operation.
	 * @type number
	 * @default
	 * @alias minimumZoomTicks
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 07-2016-16.6
	 */
	minimumZoomTicks: 9,
	/**
	 * Set to false to disable any user zooming on the chart
	 * @type boolean
	 * @default
	 * @alias allowZoom
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 04-2015
	 * @example
	 * var stxx=new CIQ.ChartEngine({
	 *		container:document.querySelector(".chartContainer"),
	 *		allowZoom:false,
	 *		layout:{"candleWidth": 16, "crosshair":true}
	 * });
	 */
	allowZoom: true,
	/**
	 * Set to true to enable any user zooming on the chart when creating a drawing
	 * @type boolean
	 * @default
	 * @alias allowDrawingZoom
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 8.4.0 Add flag for zooming while drawing
	 * @example
	 * var stxx=new CIQ.ChartEngine({
	 *		container:document.querySelector(".chartContainer"),
	 *		allowDrawingZoom:true,
	 *		layout:{"candleWidth": 16, "crosshair":true}
	 * });
	 */
	allowDrawingZoom: false,
	/**
	 * Set to false to disable any user scrolling of the chart
	 * @type boolean
	 * @default
	 * @alias allowScroll
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 04-2015
	 * @example
	 * var stxx=new CIQ.ChartEngine({
	 *		container:document.querySelector(".chartContainer"),
	 *		allowScroll:false,
	 *		layout:{"candleWidth": 16, "crosshair":true}
	 *	});
	 */
	allowScroll: true,
	/**
	 * Set to false to disable 2 finger side swipe motion for scrolling
	 * @type boolean
	 * @default
	 * @alias allowSideswipe
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 2015-12-08
	 */
	allowSideswipe: true,
	/**
	 * If set to true then a three finger movement will increment periodicity.
	 * @type boolean
	 * @default
	 * @alias allowThreeFingerTouch
	 * @memberof CIQ.ChartEngine.prototype
	 */
	allowThreeFingerTouch: false,
	/**
	 * Set to `true` to bypass right clicks on **all** overlay types and their hovering pop-ups.
	 * Or define independent settings for series, studies, and drawings by using an object instead.
	 *
	 * On touch devices, it will bypass {@link CIQ.ChartEngine.AdvancedInjectable#touchDoubleClick}
	 *
	 * Also see:
	 * - [rightClickEventListener]{@link CIQ.ChartEngine~rightClickEventListener}
	 * - {@link CIQ.ChartEngine.AdvancedInjectable#rightClickHighlighted}
	 *
	 * @type object
	 * @default
	 * @alias bypassRightClick
	 * @memberof CIQ.ChartEngine.prototype
	 * @since
	 * - 2016-07-16
	 * - 5.1.0 An object containing booleans to separate series, studies, and drawings.
	 * @example
	 * this.bypassRightClick={
	 *	series: false,
	 *	study: false,
	 *	drawing: false
	 * };
	 */
	bypassRightClick: {
		series: false,
		study: false,
		drawing: false
	},
	/**
	 * Function which can be used to modify the highlighted field to be used for an averaging-type drawing.
	 * Can be customized (overridden) to adjust certain fields, while passing through others.
	 * **Note:** If the field to be returned is a member of an object (e.g., AAPL.Close), the proper format
	 * for returning this would be "AAPL-->Close".
	 * @param {string} field dataSet field
	 * @return {string} adjusted field
	 * @type function
	 * @default
	 * @alias adjustHighlightedDataSetField
	 * @memberof CIQ.ChartEngine.prototype
	 * @example
	 * stxx.adjustHighlightedDataSetField=function(field){
	 * 	if(!field) return null;
	 * 	for(var st in this.layout.studies){
	 * 		var study=this.layout.studies[st];
	 * 		if(study.outputMap.hasOwnProperty(field)) {
	 * 			// adjust the field based on the study in which it belongs
	 * 			if(study.type=="Pivot Points") return null;
	 * 			...
	 * 			break;
	 * 		}
	 * 	}
	 * 	for(var sr in this.chart.series){
	 * 		var series=this.chart.series[sr];
	 * 		if(series.id==field.split("-->")[0]) {
	 * 			// adjust the field based on the series in which it belongs
	 * 			if(series.id=="AAPL") return series.id+"-->High";
	 * 			...
	 * 			break;
	 * 		}
	 * 	}
	 * 	return field;
	 * };
	 * @since 7.0.0
	 */
	adjustHighlightedDataSetField: function (field) {
		return field;
	},

	/**
	 * Set these to false to not display the up and down arrows in the panel management component. See {@link CIQ.ChartEngine#controls} for alternate methods and more details.
	 * @type boolean
	 * @default
	 * @alias displayIconsUpDown
	 * @memberof CIQ.ChartEngine.prototype
	 * @example
	 * stxx.displayIconsUpDown=false;
	 */
	displayIconsUpDown: true,
	/**
	 * Set these to false to not display this panel management component. See {@link CIQ.ChartEngine#controls} for alternate methods and more details.
	 * @type boolean
	 * @default
	 * @alias displayIconsSolo
	 * @memberof CIQ.ChartEngine.prototype
	 * @example
	 * stxx.displayIconsSolo=false;
	 */
	displayIconsSolo: true,
	/**
	 * Set these to false to not display this panel management component. See {@link CIQ.ChartEngine#controls} for alternate methods and more details.
	 * @type boolean
	 * @default
	 * @alias displayIconsClose
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 3.0.7
	 * @example
	 * stxx.displayIconsClose=false;
	 */
	displayIconsClose: true,
	/**
	 * Set these to false to not display this panel management component. See {@link CIQ.ChartEngine#controls} for alternate methods and more details.
	 * @type boolean
	 * @default
	 * @alias displayPanelResize
	 * @memberof CIQ.ChartEngine.prototype
	 * @example
	 * stxx.displayPanelResize=false;
	 */
	displayPanelResize: true,
	/**
	 * Set this to true to hide even the chart panel when soloing a non-chart panel.  Normally chart panels are not hidden when soloing.
	 * @type boolean
	 * @default
	 * @alias soloPanelToFullScreen
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 3.0.7
	 * @example
	 * stxx.soloPanelToFullScreen=true;
	 */
	soloPanelToFullScreen: false,
	/**
	 * Only reposition markers this many milliseconds. Set to null for no visible delay. Set to 0 for a Zero Delay timeout. (lower numbers are more CPU intensive).
	 * See {@tutorial Markers} for more details on adding markers to your charts
	 * @type number
	 * @default
	 * @alias markerDelay
	 * @memberof CIQ.ChartEngine.prototype
	 * @example
	 * stxx.markerDelay=25;
	 */
	markerDelay: null,
	/**
	 * When set to true, the backing store for the canvas is used.
	 * This results in crisper display but with a noticeable performance penalty in some browsers.
	 * The default is true.
	 * If improved performance is necessary, set the variable as shown in the example.
	 * The example allows mobile devices (Android/iPad/iPhone) to continue using the backing store while being bypassed in others (desktop browsers).
	 *
	 * @type boolean
	 * @default
	 * @alias useBackingStore
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 3.0.0
	 * @example
	 * stxx.useBackingStore=CIQ.isMobile;
	 */
	useBackingStore: true,

	/**
	 * On touch devices, when set to true, the backing store will be turned off while a user is panning or zooming the chart. This increases performance during the operation by reducing
	 * resolution. Resolution is restored once the user lifts their finger. Generally, you'll want to enable this dynamically when you know that a particular device has poor canvas performance.
	 * This defaults to true but can be disabled by setting to false.
	 * @type boolean
	 * @default
	 * @alias disableBackingStoreDuringTouch
	 * @memberOf  CIQ.ChartEngine.prototype
	 * @since 4.0.0
	 */
	disableBackingStoreDuringTouch: CIQ.isMobile || (CIQ.isSurface && CIQ.isFF),
	/**
	 * Primarily intended for mobile devices, if set to `false` it will allow up/down swiping to pass through the chart container so the main page can manage it.
	 * This allows a user swiping up and down to swipe through the chart instead of having the chart capture the event and prevent the page from continue moving.
	 * It therefore produces a more natural up/down swiping motion throughout the page.
	 * @type boolean
	 * @default
	 * @alias captureTouchEvents
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 12-2015-08
	 */
	captureTouchEvents: true,
	/**
	 * If set to `false` it will allow up/down [mouseWheel / touchPad swiping]{@link CIQ.ChartEngine.AdvancedInjectable#mouseWheel} to pass through the chart container so the main page can manage it.
	 * This allows a user swiping up and down to swipe through the chart instead of having the chart capture the event and prevent the page from continue moving.
	 * It therefore produces a more natural up/down sliding of the page.
	 * @type boolean
	 * @default
	 * @alias captureMouseWheelEvents
	 * @memberof CIQ.ChartEngine.prototype
	 * @since m-2016-12-01.4
	 */
	captureMouseWheelEvents: true,
	/**
	 * If true (the default), requires a tap on a drawing, plot, y-axis, or other object before
	 * the object is highlighted. If false, allows highlighting of objects when the mouse cursor
	 * moves over the objects.
	 *
	 * @type boolean
	 * @default
	 * @alias tapForHighlighting
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 8.2.0
	 */
	tapForHighlighting: true,
	/**
	 * The maximum number of milliseconds between clicks that trigger a double-click.
	 *
	 * @alias doubleClickTime
	 * @memberof CIQ.ChartEngine.prototype
	 * @type {number}
	 * @default
	 * @since 8.0.0
	 */
	doubleClickTime: 250,
	/**
	 * Shape of the floating y-axis label.
	 *
	 * Available options:
	 *  - ["roundRectArrow"]{@link CIQ.roundRectArrow}
	 *  - ["semiRoundRect"]{@link CIQ.semiRoundRect}
	 *  - ["roundRect"]{@link CIQ.roundRect}
	 *  - ["tickedRect"]{@link CIQ.tickedRect}
	 *  - ["rect"]{@link CIQ.rect}
	 *  - ["noop"]{@link CIQ.noop}
	 * @type string
	 * @default
	 * @alias yaxisLabelStyle
	 * @memberof CIQ.ChartEngine.prototype
	 * @example
	 * var stxx=new CIQ.ChartEngine({container: document.querySelector(".chartContainer")});
	 * stxx.yaxisLabelStyle="roundRectArrow";
	 */
	yaxisLabelStyle: "roundRectArrow",
	/**
	 * Set to false if you don't want the axis borders drawn. This will override individual settings on yaxis and xaxis.
	 * @type boolean
	 * @default
	 * @alias axisBorders
	 * @memberof CIQ.ChartEngine.prototype
	 */
	axisBorders: null,
	/**
	 * Set to true to have drawings highlight only the last applied drawing if more than one is intersected at a time.
	 * @type boolean
	 * @default
	 * @since 5.0.0
	 * @alias singleDrawingHighlight
	 * @memberof CIQ.ChartEngine.prototype
	 */
	singleDrawingHighlight: true,
	/**
	 * X-axis offset for touch devices so that finger isn't blocking crosshair
	 * @type number
	 * @default
	 * @alias crosshairXOffset
	 * @memberof CIQ.ChartEngine.prototype
	 */
	crosshairXOffset: -40,
	/**
	 * Y-axis Offset for touch devices so that finger isn't blocking crosshair
	 * @type number
	 * @default
	 * @alias crosshairYOffset
	 * @memberof CIQ.ChartEngine.prototype
	 */
	crosshairYOffset: -40,
	/**
	 * When set to true, line and mountain charts are extended slightly in order to reduce whitespace at the right edge of the chart
	 * @type boolean
	 * @default
	 * @alias extendLastTick
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 05-2016-10 The line will be extended to the end of the chart (full candle width) instead of the candle border, even when using `yaxisLabelStyle` "roundRectArrow".
	 */
	extendLastTick: false,
	/**
	 * This is the callback function used to translate languages.
	 * Should return a translated phrase given the English phrase. See separate translation file for list of phrases.
	 *
	 * Expected format :
	 *
	 * 		var translatedWord = fc(english);
	 *
	 * Defaults to {@link CIQ.I18N.translate}
	 * @type {function}
	 * @alias translationCallback
	 * @memberof CIQ.ChartEngine.prototype
	 */
	translationCallback: null,
	/**
	 * Set this to `true` if your server returns data in week or monthly ticks, and doesn't require rolling computation from daily.
	 *
	 * If set to `false`:
	 * - 'weekly' bars will be aligned to the first open market day of the week according to the active [market definitions]{@link CIQ.Market} (Weeks start Sunday).
	 * - 'monthly' bar will be aligned to the first market day of the month according to the active [market definitions]{@link CIQ.Market}.
	 *
	 * @type boolean
	 * @default
	 * @alias dontRoll
	 * @memberof CIQ.ChartEngine.prototype
	 */
	dontRoll: false,
	/**
	 * Set to true to allow an equation to be entered into the symbol input.  For example, =2*IBM-GM
	 * NOTE: the equation needs to be preceded by an equals sign (=) in order for it to be parsed as an equation.
	 * See {@link CIQ.formatEquation} and {@link CIQ.computeEquationChart} for more details on allowed syntax.
	 * @type boolean
	 * @default
	 * @alias allowEquations
	 * @memberof CIQ.ChartEngine.prototype
	 */
	allowEquations: true,
	/**
	 * If set, {@link CIQ.ChartEngine#doCleanupGaps} will be automatically called
	 * on intra-day or daily interval charts to create missing data points during market hours/days for stocks that may have missing bars.
	 *
	 * `carry` will cause the closing price to be carried forward, resulting in dashes on a candle/bar chart or continuous line on a line or mountain chart.
	 * <br>`gap` will cause physical breaks to occur on the chart in the gapped position.
	 *
	 * **Note:** the clean-up process uses the active periodicity and the active market definition, if any.
	 * So you must first set those to ensure proper clean up.
	 * If no market definition is enabled, the clean up will assume gaps need to be added during the entire 24 hours period, every day.
	 * <br>See "{@link CIQ.Market}" for details on how to properly configure the library to your market hours requirements.
	 * <br>No gaps will be cleaned for `tick` since by nature it is no a predictable interval.
	 *
	 * **Important information to prevent inaccurate 'gapping'**<br>
	 * - This parameter must be set **before** any data is loaded into the chart.
	 * - The cleanup process leverages the current market iterator which traverses along the timeline on the exact minute/second/millisecond mark for intraday data.
	 * As such, you must ensure your time stamps match this requirement.
	 * If your data does not comply, you must round your timestamps before sending the data into the chart.
	 * <br>For example, if in minute periodicity, seconds and milliseconds should not be present or be set to zero.
	 *
	 * @type string
	 * @default
	 * @alias cleanupGaps
	 * @memberof CIQ.ChartEngine.prototype
	 *
	 * @example  <caption>If using a quoteFeed, just set the parameter will automatically call {@link CIQ.ChartEngine#doCleanupGaps} </caption>
	 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer")});
	 * stxx.attachQuoteFeed(yourFeed,{refreshInterval:1});
	 * stxx.setMarketFactory(CIQ.Market.Symbology.factory);
	 * stxx.cleanupGaps='carry';
	 * stxx.setPeriodicity({period:1, interval:5, timeUnit:"minute"});
	 * stxx.loadChart("SPY");
	 *
	 * @since
	 * - 15-07-01 Gaps are automatically cleaned up unless this flag is set to false.
	 * - 2015-11-1 Gaps are not automatically cleaned unless this flag is set to true.
	 * - m-2016-12-01.4 Now supports "carry" and "gap" values. Setting to non-false will default to "carry" for backward compatibility with prior versions.
	 */
	cleanupGaps: false,
	/**
	 * When set to `true`, the requested range will be visually preserved between [symbol changes]{@link CIQ.ChartEngine#loadChart} or when a [layout is imported]{@link CIQ.ChartEngine#importLayout},
	 * even if the data required to fill the left and/or right side of the x-axis is not present.
	 *
	 * This behavior is similar to setting `goIntoPast` and `goIntoFuture` when calling [setRange]{@link CIQ.ChartEngine#setRange}/[setSpan]{@link CIQ.ChartEngine#setSpan} explicitly.
	 *
	 * Please note that at the moment, a range will not be preserved when using [addSeries]{@link CIQ.ChartEngine#addSeries}, if the new data extends further than the currently loaded data for the primary instrument.
	 * For this, you will need to manually call  [setRange]{@link CIQ.ChartEngine#setRange}/[setSpan]{@link CIQ.ChartEngine#setSpan} in the [addSeries]{@link CIQ.ChartEngine#addSeries} callback.
	 * @type boolean
	 * @default
	 * @alias staticRange
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 5.1.2
	 */
	staticRange: false,
	/**
	 * Set a maximum size for the dataSet to prevent it from growing excessively large.
	 *
	 * Once the max number of records have been loaded, pagination requests will be ignored
	 * and older data will be dropped from the end (historical) side of the dataSet array as new bars arrive, until that number is increased.
	 *
	 * Set to 0 to let it grow forever.
	 * @type number
	 * @default
	 * @alias maxDataSetSize
	 * @memberof CIQ.ChartEngine.prototype
	 */
	maxDataSetSize: 20000,
	/**
	 * Set a maximum size for masterData to prevent it from growing excessively large.
	 *
	 * Once the max number of records have been loaded, pagination requests will be ignored
	 * and older data will be dropped from the end (historical) side of the masterData array as new bars arrive, until that number is increased.
	 *
	 * By default (set to 0) masterData is unlimited and will grow forever.
	 *
	 * Note: when rolling up data due to periodicity, you should anticipate large enough masterData to accommodate the desired chart length.
	 *
	 * @type {number}
	 * @default
	 * @alias maxMasterDataSize
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 3.0.0
	 */
	maxMasterDataSize: 0,
	/**
	 * Set to true to display the x-axis below all panels.
	 * By default, the x-axis will be rendered right under the main chart panel.
	 * @type boolean
	 * @default
	 * @alias xAxisAsFooter
	 * @memberof CIQ.ChartEngine.prototype
	 * @since
	 * - 05-2016-10
	 * - 4.1.0 Now defaults to true.
	 * - 5.2.0 Vertical grid lines in study panels no longer dependent on this property and will be always displayed.
	 */
	xAxisAsFooter: true,
	/**
	 * Sets the x-axis height in pixels.
	 *
	 * - Set to null to automatically adjust to the size of the axis font.
	 * - Set to 0 completely remove the x-axis.
	 * - Use {@link CIQ.ChartEngine.XAxis#noDraw} to temporarily hide the axis, but maintain its spacing.
	 *  - Setting to a value able to accommodate two lines of text will create a two-line x-axis.
	 * @type boolean
	 * @default
	 * @alias xaxisHeight
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 4.1.0 Now defaults to 30px.
	 * @since 8.4.0 Now defaults to 40px.
	 */
	xaxisHeight: 40,
	/**
	 * Set to true to display horizontal grid lines on studies.
	 * This parameter is only used when a custom y-axis is **not** defined for the study.
	 *
	 * To also disable zones and center lines on studies add:
	 * ```CIQ.Studies.drawHorizontal=function(){};```
	 * For more details see {@link CIQ.Studies.doPostDrawYAxis}
	 * @type boolean
	 * @default
	 * @alias displayGridLinesInStudies
	 * @memberof 	CIQ.ChartEngine.prototype
	 * @since 3.0.0
	 */
	displayGridLinesInStudies: false,
	/**
	 * When true serialize methods may escape their values with encodeURIComponent.
	 * @type boolean
	 * @default
	 * @alias escapeOnSerialize
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 4.1.0
	 */
	escapeOnSerialize: true,
	/**
	 * Adjust to increase or decrease the default width of candles (see {@tutorial Understanding Chart Range}).
	 * @type number
	 * @default
	 * @alias candleWidthPercent
	 * @memberof CIQ.ChartEngine.prototype
	 */
	candleWidthPercent: 0.65,
	/**
	 * Set to `true` to color any OHLC type rendering (bar, candles) as well as the volume study,
	 * based on difference between open and close, rather than difference between previous close and current close.
	 *
	 * Used in {@link CIQ.Renderer.OHLC} and {@link CIQ.Studies.createVolumeChart}
	 * @type boolean
	 * @default
	 * @alias colorByCandleDirection
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 4.0.0
	 */
	colorByCandleDirection: false,
	/**
	 * chart types which do not draw wicks on candles
	 * @type object
	 * @default
	 * @alias noWicksOnCandles
	 * @memberof CIQ.ChartEngine.prototype
	 */
	noWicksOnCandles: { renko: true, linebreak: true },
	/**
	 * chart types which require fetching as many bars as possible (since they aggregate data)
	 * @type object
	 * @default
	 * @alias fetchMaximumBars
	 * @memberof CIQ.ChartEngine.prototype
	 */
	fetchMaximumBars: {
		rangebars: true,
		kagi: true,
		renko: true,
		linebreak: true,
		pandf: true
	},
	/**
	 * Comparisons by default start at the close value of the previous bar.
	 * Set this to true to start at the current bar instead.
	 * @type boolean
	 * @default
	 * @alias startComparisonsAtFirstVisibleBar
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 7.3.0
	 */
	startComparisonsAtFirstVisibleBar: false,

	/**
	 * Animations. These can be overridden with customized EaseMachines
	 * To disable an animation replace with an EaseMchine with one ms as the second parameter.
	 * @type {object}
	 * @alias animations
	 * @memberof CIQ.ChartEngine.prototype
	 * @example
	 * stxx.animations.zoom=new CIQ.EaseMachine("easeOutCubic",1);
	 */
	animations: {
		zoom: {
			isStub: true,
			run: function (cb, _orig, _new) {
				cb(_new);
			},
			stop: function () {},
			reset: function () {},
			running: false,
			hasCompleted: true
		}
	},

	/**
	 * Map of default values to be used to statically set periodicity (candle width) upon range selection when using {@link CIQ.ChartEngine#setRange}
	 *
	 * **Default Value:**
	 * ```
	 * [
	 *     {
	 *         rangeInMS : CIQ.WEEK,	// Any range less than a week, load 5 minute bars
	 *         periodicity : 1,
	 *         interval : 5,
	 *         timeUnit : 'minute'
	 *     },
	 *     {
	 *         rangeInMS : CIQ.MONTH,	// Any range less than a month, load 30 minute bars
	 *         periodicity : 1,
	 *         interval : 30,
	 *         timeUnit : 'minute'
	 *     },
	 *     {
	 *         rangeInMS : CIQ.YEAR,	// Any range less than a year, load day bars
	 *         periodicity : 1,
	 *         interval : "day"
	 *     },
	 *     {
	 *         rangeInMS : CIQ.DECADE,	// Any range less than 10 years, load weekly bars
	 *         periodicity : 1,
	 *         interval : "week"
	 *     },
	 *     {
	 *         rangeInMS : CIQ.DECADE * 10,	// Any range less than a century, load monthly bars
	 *         periodicity : 1,
	 *         interval : "month"
	 *     },
	 *     {
	 *         rangeInMS : Number.MAX_VALUE,	// Anything greater than a century, load yearly bars
	 *         periodicity : 12,
	 *         interval : "month"
	 *     }
	 * ]
	 * ```
	 * @type array
	 * @alias staticRangePeriodicityMap
	 * @memberof CIQ.ChartEngine.prototype
	 * @since m-2016-12-01
	 */
	staticRangePeriodicityMap: [
		{
			rangeInMS: CIQ.WEEK, // Any range less than a week, load 5 minute bars
			periodicity: 1,
			interval: 5,
			timeUnit: "minute"
		},
		{
			rangeInMS: CIQ.MONTH, // Any range less than a month, load 30 minute bars
			periodicity: 1,
			interval: 30,
			timeUnit: "minute"
		},
		{
			rangeInMS: CIQ.YEAR, // Any range less than a year, load day bars
			periodicity: 1,
			interval: "day"
		},
		{
			rangeInMS: CIQ.DECADE, // Any range less than 10 years, load weekly bars
			periodicity: 1,
			interval: "week"
		},
		{
			rangeInMS: CIQ.DECADE * 10, // Any range less than a century, load monthly bars
			periodicity: 1,
			interval: "month"
		},
		{
			rangeInMS: Number.MAX_VALUE, // Anything greater than a century, load yearly bars
			periodicity: 12,
			interval: "month"
		}
	],

	/**
	 * Map of multiples to be used to dynamically determine periodicity (candle width) upon range selection when using {@link CIQ.ChartEngine#setRange}
	 * Used when {@link CIQ.ChartEngine#autoPickCandleWidth} is enabled
	 *
	 * **Default Value:**
	 * ```
	 * [
	 *     {
	 *         interval : 1,
	 *         rangeInMS : CIQ.MINUTE
	 *     },
	 *     {
	 *         interval : 5,
	 *         rangeInMS : CIQ.MINUTE * 5
	 *     },
	 *     {
	 *         interval : 30,
	 *         rangeInMS : CIQ.MINUTE * 30
	 *     },
	 *     {
	 *         interval : 60,
	 *         rangeInMS : CIQ.MINUTE * 60
	 *     },
	 *     {
	 *         interval : "day",
	 *         rangeInMS : CIQ.DAY
	 *     },
	 *     {
	 *         interval : "month",
	 *         rangeInMS : CIQ.MONTH
	 *     },
	 *     {
	 *         interval : "year",
	 *         rangeInMS : CIQ.YEAR
	 *     }
	 * ]
	 * ```
	 *
	 * @type array
	 * @alias dynamicRangePeriodicityMap
	 * @memberof CIQ.ChartEngine.prototype
	 * @since 11-2016-29
	 */
	dynamicRangePeriodicityMap: [
		{
			interval: 1,
			timeUnit: "minute",
			rangeInMS: CIQ.MINUTE
		},
		{
			interval: 5,
			timeUnit: "minute",
			rangeInMS: CIQ.MINUTE * 5
		},
		{
			interval: 30,
			timeUnit: "minute",
			rangeInMS: CIQ.MINUTE * 30
		},
		{
			interval: 60,
			timeUnit: "minute",
			rangeInMS: CIQ.MINUTE * 60
		},
		{
			interval: "day",
			rangeInMS: CIQ.DAY
		},
		{
			interval: "month",
			rangeInMS: CIQ.MONTH
		},
		{
			interval: "year",
			rangeInMS: CIQ.YEAR
		}
	],
	/**
	 * Contains the current chart layout.
	 *
	 * Layout parameters can be directly **pre-set** on a chart at the time the engine is instantiated, by providing an object exactly matching **the internal layout  format**.<br>
	 * The following is an example for setting some of the available layout parameters:
	 * ```
	 * var stxx=new CIQ.ChartEngine({
	 * 			container: document.querySelector(".chartContainer"),
	 * 			layout:{
	 * 				"crosshair":true,
	 * 				"interval":"day",
	 * 				"periodicity":1,
	 * 				"chartType": "candle",
	 * 				"candleWidth": 16
	 * 			}
	 * });
	 * ```
	 * These parameters will then be activated when [loadChart()]{@link CIQ.ChartEngine#loadChart} is called to render the chart.<br>
	 * Once a chart is rendered, most of these parameters become `READ ONLY`,and must be modified using their corresponding methods, as indicated in the documentation, to ensure chart integrity.
	 *
	 * **Important Note on internal periodicity format:**<BR>
	 *  Internal format of the layout object **does not match the parameters** used in ​{@link CIQ.ChartEngine#setPeriodicity} or {@link CIQ.ChartEngine#loadChart}.
	 *  <br>Use {@link CIQ.ChartEngine#getPeriodicity} to extract internal periodicity into the expected external format.
	 *
	 * See [importLayout]{@link CIQ.ChartEngine#importLayout} and [exportLayout]{@link CIQ.ChartEngine#exportLayout} for methods to serialize a layout and restore previously saved settings.
	 *
	 * @type object
	 * @alias layout
	 * @memberof CIQ.ChartEngine.prototype
	 */
	layout: {
		/**
		 * READ ONLY. Chart interval.
		 *
		 * Note that internal interval format will differ from API parameters used in {@link CIQ.ChartEngine#setPeriodicity} and {@link CIQ.ChartEngine#loadChart}.
		 *
		 * Available options are:
		 *  - [number] representing minutes
		 *  - "day"
		 *  - "week"
		 *  - "month"
		 *
		 * See the [Periodicity and Quote feed]{@tutorial Periodicity} tutorial.
		 * @type string
		 * @default
		 * @alias CIQ.ChartEngine#layout[`interval`]
		 * @memberof CIQ.ChartEngine.layout#
		 */
		interval: "day",
		/**
		 * READ ONLY. Number of periods per interval/timeUnit
		 *
		 * See the [Periodicity and Quote feed]{@tutorial Periodicity} tutorial.
		 * @type number
		 * @default
		 * @alias CIQ.ChartEngine#layout[`periodicity`]
		 * @memberof CIQ.ChartEngine.layout#
		 */
		periodicity: 1,
		/**
		 * READ ONLY. Time unit for the interval.
		 *
		 * Note that internal timeUnit format will differ from API parameters used in {@link CIQ.ChartEngine#setPeriodicity} and {@link CIQ.ChartEngine#loadChart}.
		 *
		 * See the [Periodicity and Quote feed]{@tutorial Periodicity} tutorial.
		 * Available options are:
		 *  - "millisecond"
		 *  - "second"
		 *  - "minute"
		 *  - null for "day", "week", "month" periodicity
		 * @type string
		 * @default
		 * @alias CIQ.ChartEngine#layout[`timeUnit`]
		 * @memberof CIQ.ChartEngine.layout#
		 */
		timeUnit: null,
		/**
		 * READ ONLY. Candle width in pixels ( see {@tutorial Understanding Chart Range} and {@link CIQ.ChartEngine#candleWidthPercent})
		 * @type number
		 * @default
		 * @alias CIQ.ChartEngine#layout[`candleWidth`]
		 * @memberof CIQ.ChartEngine.layout#
		 */
		candleWidth: 8,
		/**
		 * READ ONLY. The primary y-axis and all linked drawings, series and studies will display inverted (flipped) from its previous state when 'true'.
		 *
		 * Use {@link CIQ.ChartEngine#flipChart} to set.
		 * @type boolean
		 * @default
		 * @alias CIQ.ChartEngine#layout[`flipped`]
		 * @memberof CIQ.ChartEngine.layout#
		 */
		flipped: false,
		volumeUnderlay: false,
		/**
		 * Whether adjusted or nominal prices are being displayed.
		 * If true then the chart will look for "Adj_Close" in the masterData as an alternative to "Close".
		 * @type boolean
		 * @default
		 * @alias CIQ.ChartEngine#layout[`adj`]
		 * @memberof CIQ.ChartEngine.layout#
		 * @instance
		 */
		adj: true,
		/**
		 * Set to `true` to enable crosshairs in the active layout.
		 *
		 * Also see {@link CIQ.ChartEngine.AdvancedInjectable#doDisplayCrosshairs} for more details on crosshairs behavior.
		 *
		 * @example
		 * // enable crosshair (usually called from a UI button/toggle)
		 * stx.layout.crosshair=true;
		 * // add this if you want the crosshair to display right away instead of when the user starts moving the mouse over the chart
		 * stx.doDisplayCrosshairs();
		 * // add this if you want to trigger a layout change event; maybe to save the layout.
		 * stx.dispatch("layout", {stx:stx, symbol: stx.chart.symbol, symbolObject:stx.chart.symbolObject, layout:stx.layout, drawings:stx.drawingObjects});
		 *
		 * @type boolean
		 * @default
		 * @alias CIQ.ChartEngine#layout[`crosshair`]
		 * @memberof CIQ.ChartEngine.layout#
		 * @instance
		 */
		crosshair: false,
		/**
		 * READ ONLY. The primary chart type.
		 *
		 * Available options are:
		 *  - "none"
		 *  - "line"
		 *  - "step"
		 *  - "mountain"
		 *  - "baseline_delta"
		 *  - "candle"
		 *  - "bar"
		 *  - "hlc"
		 *  - "hlc_box" &mdash; Requires *js/extras/hlcbox.js*.
		 *  - "hlc_shaded_box" &mdash; Requires *js/extras/hlcbox.js*.
		 *  - "wave"
		 *  - "scatterplot"
		 *  - "histogram"
		 *  - "rangechannel"
		 *  - "marketdepth" &mdash; Requires the [Active Trader]{@link CIQ.MarketDepth} plug-in. See {@link CIQ.ChartEngine#updateCurrentMarketData} for data requirements.
		 *  - "crosssection" &mdash; Requires the [Cross Section]{@link CIQ.CrossSection} plug-in.
		 *
		 * Variations of these types are available by prepending terms to the options as follows:
		 *  - "step_" - add to mountain, marketdepth e.g. step_mountain, step_volume_marketdepth
		 *  - "vertex_" - add to line, step, mountain, baseline_delta
		 *  - "hollow_" - add to candle
		 *  - "volume_" - add to candle, marketdepth e.g. mountain_volume_marketdepth (Adding volume to marketdepth also creates a volume histogram in the same panel)
		 *  - "colored_" - add to line, mountain, step, bar, hlc
		 *  - "mountain_" - add to baseline_delta, marketdepth e.g. mountain_volume_marketdepth
		 *
		 * Other options are available provided a renderer is created with a `requestNew` function which will support the option, see {@link CIQ.Renderer.Lines#requestNew} and {@link CIQ.Renderer.OHLC#requestNew}
		 *
		 * Use {@link CIQ.ChartEngine#setChartType} to set this value.
		 *
		 * See {@tutorial Chart Styles and Types} for more details.
		 *
		 * @type string
		 * @default
		 * @alias CIQ.ChartEngine#layout[`chartType`]
		 * @memberof CIQ.ChartEngine.layout#
		 * @since
		 * - 05-2016-10.1 Added "baseline_delta_mountain" and "colored_mountain".
		 * - 3.0.0 Added "histogram" and "step".
		 * - 3.0.7 Added "hlc".
		 * - 4.0.0 Added "colored_step" and "colored_hlc".
		 * - 5.1.0 More chart types available using combinations of terms.
		 * - 6.1.0 Added "marketdepth".
		 * - 7.3.0 Added "termstructure".
		 * - 8.3.0 Added "crosssection". Removed "termstructure".
		 */
		chartType: "candle",
		/**
		 * READ ONLY. Flag for extended hours time frames.
		 *
		 * The chart includes the 'extended' parameter in the `params` object sent into the `fetch()` call.
		 * Your quote feed must be able to provide extended hours data when requested (`extended:true`) for any extended hours functionality to work.
		 *
		 * See {@link CIQ.ExtendedHours} and {@link CIQ.Market} for more details on how extended hours are set and used.
		 * @type boolean
		 * @default
		 * @alias CIQ.ChartEngine#layout[`extended`]
		 * @memberof CIQ.ChartEngine.layout#
		 */
		extended: false,
		/**
		 * READ ONLY. Tracks the extended market sessions to display on the chart.
		 *
		 * See {@link CIQ.ExtendedHours} and {@link CIQ.Market} for more details on how extended hours are set and used.
		 * @type object
		 * @default
		 * @alias CIQ.ChartEngine#layout[`marketSessions`]
		 * @memberof CIQ.ChartEngine.layout#
		 * @example
		 * marketSessions = {
		 *      "session1": true,
		 *      "session2": true,
		 *      "session3": false,
		 *      "pre": true,
		 *      "post": true
		 * }
		 * @since 06-2016-02
		 */
		marketSessions: {}, //use defaults
		/**
		 * READ ONLY. Active aggregation for the chart.
		 *
		 * Available options are:
		 *  - "rangebars"
		 *  - "ohlc"
		 *  - "kagi"
		 *  - "pandf"
		 *  - "heikinashi"
		 *  - "linebreak"
		 *  - "renko"
		 *
		 * Use {@link CIQ.ChartEngine#setAggregationType} to set this value.
		 *
		 * See {@tutorial Chart Styles and Types} for more details.
		 * @type string
		 * @default
		 * @alias CIQ.ChartEngine#layout[`aggregationType`]
		 * @memberof CIQ.ChartEngine.layout#
		 */
		aggregationType: "ohlc",
		/**
		 * READ ONLY. Active scale for the chart.
		 *
		 * See {@link CIQ.ChartEngine#setChartScale}
		 *
		 * **Replaces CIQ.ChartEngine.layout.semiLog**
		 *
		 * @type string
		 * @default
		 * @alias CIQ.ChartEngine#layout[`chartScale`]
		 * @memberof CIQ.ChartEngine.layout#
		 */
		chartScale: "linear",
		/**
		 * READ ONLY. List of [study descriptors]{@link CIQ.Studies.StudyDescriptor} for the active studies on the chart.
		 *
		 * **Please note:** To facilitate study name translations, study names use zero-width non-joiner (unprintable) characters to delimit the general study name from the specific study parameters.
		 * Example: "\u200c"+"Aroon"+"\u200c"+" (14)".
		 * At translation time, the library will split the text into pieces using the ZWNJ characters, parentheses, and commas to just translate the required part of a study name.
		 * For more information on ZWNJ characters see: [Zero-width_non-joiner](https://en.wikipedia.org/wiki/Zero-width_non-joiner).
		 * Please be aware of these ZWNJ characters, which will now be present in all study names and corresponding panel names; including the `layout.studies` study keys.
		 * Affected fields in the study descriptors could be `id	`, `display`, `name` and `panel`.
		 * <br>To prevent issues, always use the names returned in the **study descriptor**. This will ensure compatibility between versions.
		 * >Example:
		 * ><br>Correct reference:
		 * ><br>	`stxx.layout.studies["\u200c"+"Aroon"+"\u200c"+" (14)"];`
		 * ><br>Incorrect reference:
		 * ><br>	`stxx.layout.studies["Aroon (14)"];`
		 *
		 * See {@link CIQ.Studies.addStudy} for more details
		 *
		 * @type object
		 * @default
		 * @alias CIQ.ChartEngine#layout[`studies`]
		 * @memberof CIQ.ChartEngine.layout#
		 */
		studies: {},
		/**
		 * READ ONLY. List of active chart panels. Usually correspond to a study or series.
		 *
		 * **Please note:** To facilitate study name translations, study names and their corresponding panels use zero-width non-joiner (unprintable) characters to delimit the general study name from the specific study parameters.
		 * Example: "\u200c"+"Aroon"+"\u200c"+" (14)".
		 * At translation time, the library will split the text into pieces using the ZWNJ characters, parentheses, and commas to just translate the required part of a study name.
		 * For more information on ZWNJ characters see: [Zero-width_non-joiner](https://en.wikipedia.org/wiki/Zero-width_non-joiner).
		 * Please be aware of these ZWNJ characters, which will now be present in all study names and corresponding panel names; including the `layout.panels` study keys.
		 * <br>To prevent issues, always use the names returned in the **study descriptor**. This will ensure compatibility between versions.
		 * >Example:
		 * ><br>Correct reference:
		 * ><br>	`stxx.layout.panels["\u200c"+"Aroon"+"\u200c"+" (14)"];`
		 * ><br>Incorrect reference:
		 * ><br>	`stxx.layout.panels["Aroon(14)"];`
		 *
		 * See {@link CIQ.Studies.addStudy} for more details
		 *
		 * @type object
		 * @default
		 * @alias CIQ.ChartEngine#layout[`panels`]
		 * @memberof CIQ.ChartEngine.layout#
		 */
		panels: {},
		setSpan: {},
		/**
		 * READ ONLY. Specifies whether outlier detection is enabled. A value of true enables
		 * detection; false disables detection.
		 *
		 * See {@link CIQ.Outliers} for information on how outlier detection is used.
		 *
		 * @type boolean
		 * @default
		 * @alias CIQ.ChartEngine#layout[`outliers`]
		 * @memberof CIQ.ChartEngine.layout#
		 * @since 7.5.0
		 */
		outliers: false,
		/**
		 * Specifies whether animation is enabled.
		 *
		 * **Note:** Animation requires the Animation addon.
		 *
		 * @type boolean
		 * @default
		 * @alias CIQ.ChartEngine#layout[`animation`]
		 * @memberof CIQ.ChartEngine.layout#
		 * @since 8.4.0
		 */
		animation: true
	},
	/**
	 * Contains the chart preferences.
	 *
	 * Preferences parameters, unless otherwise indicated, can be set at any time and only require a [draw()]{@link CIQ.ChartEngine#draw} call to activate.
	 *
	 * See [importPreferences]{@link CIQ.ChartEngine#importPreferences} and [exportPreferences]{@link CIQ.ChartEngine#exportPreferences} for methods to serialize and restore previously saved preferences.
	 *
	 * @type object
	 * @alias preferences
	 * @memberof CIQ.ChartEngine.prototype
	 */
	preferences: {
		/**
		 * Draw a horizontal line at the current price.
		 * Only drawn if the most recent tick is visible.
		 *
		 * See {@link CIQ.ChartEngine.AdvancedInjectable#drawCurrentHR}
		 *
		 * @type boolean
		 * @default
		 * @alias CIQ.ChartEngine#preferences[`currentPriceLine`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @since 05-2016-10
		 */
		currentPriceLine: false,
		/**
		 * Disables dragging a plot between panels or a y-axis within a panel.
		 * Separate switches are provided for dragging studies, series, or axes.
		 * Alternatively, all dragging may be disabled by setting `dragging: false`.
		 *
		 * To also disable the highlight when hovering over the y-axis, add the following:
		 *  ```
		 *  CIQ.ChartEngine.YAxis.prototype.setBackground = function() {}
		 *  ```
		 *
		 * To also disable the highlight when hovering over the y-axis, add the following:
		 *  ```
		 *  CIQ.ChartEngine.YAxis.prototype.setBackground = function() {}
		 *  ```
		 *
		 * @type object|boolean
		 * @default
		 * @alias CIQ.ChartEngine#preferences[`dragging`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @since 7.1.0
		 * @example
		 * stxx.preferences.dragging.study=false;
		 * @example
		 * stxx.preferences.dragging=false;
		 */
		dragging: {
			series: true,
			study: true,
			yaxis: true
		},
		/**
		 * When using drawing tools, this will become an object when user saves the drawing parameters.
		 * A sub-object is created for each drawing tool.
		 * These preferences are used whenever the user selects that drawing object, and overrides the default stxx.currentVectorParameters.
		 * Use {@link CIQ.Drawing.saveConfig} to save the parameters to this object.
		 * @type object
		 * @default
		 * @alias CIQ.ChartEngine#preferences[`drawings`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @since 6.0.0
		 */
		drawings: null,
		/**
		 * Pixel radius for the invisible intersection box around the cursor used to determine if it has intersected with an element to be highlighted.
		 * This value is used primarily for non-touch cursor events (mouse, touchpad).  Used on items removed with a right click such as series and drawings.
		 *
		 * Only applicable if the user has **not** tapped on the screen to set the location of the crosshair.
		 *
		 * @type number
		 * @default
		 * @alias CIQ.ChartEngine#preferences[`highlightsRadius`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @since 3.0.0
		 */
		highlightsRadius: 10,
		/**
		 * For touch events on the chart canvas.  Pixel radius for the invisible intersection box around the cursor used to determine if it has intersected
		 * with an element to be highlighted. The larger highlight radius is more suitable for the less precise input from touch events.  Used on
		 * items removed with a right click such as series and drawings.
		 *
		 * **Only applicable for touch events while the cursor is not controlling the crosshair tool. Otherwise, highlightsRadius is used.**
		 *
		 * @type number
		 * @default
		 * @alias CIQ.ChartEngine#preferences[`highlightsTapRadius`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @since 3.0.0
		 */
		highlightsTapRadius: 30,
		/**
		 * Magnetizes the crosshairs to data points during drawing operations to improve initial placement accuracy.
		 *
		 * - When `true`, the magnet is considered "strong" and will always magnetize.
		 * - When a number, it is considered "weak" and will only magnetize within the area of defined. The radius of the circle is the number you set.
		 *
		 * **We recommend 75 as the value for the parameter when the `number` type is used.**
		 *
		 * It will not be used when an existing drawing is being repositioned.
		 *
		 * See {@link CIQ.ChartEngine.AdvancedInjectable#magnetize} for more details.
		 *
		 * @type boolean | number
		 * @default
		 * @alias CIQ.ChartEngine#preferences[`magnet`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @since 7.2.0 Magnets can now be applied to any series or study.
		 */
		magnet: false,
		/**
		 * Locks the crosshair y-coordinate to the value of the field name specified for the tick under the cursor on the primary chart.
		 *
		 * For studies, create a `horizontalCrosshairFieldFN` function that will be called by `CIQ.Studies.addStudy`.
		 * The function must return the field name in the data set to reference. The function will not be called when the study is set to
		 * overlay or underlay the chart's panel.
		 * **Note:** When adding a crosshair to study panels, first set `stxx.preferences.dragging.study = false;` and then add
		 * 	a `horizontalCrosshairFieldFN` function for each study to which you want it to apply.
		 *
		 * @example
		 * // Have the crosshairs lock to the "Close" field of the tick under the cursor.
		 * stxx.preferences.horizontalCrosshairField = "Close";
		 *
		 * @example
		 * // Have the crosshair lock to the "ATR ATR (14)" field for a ATR study with a period of 14.
		 * CIQ.Studies.studyLibrary["ATR"].horizontalCrosshairFieldFN = function(stx, sd) {
		 * 	// Returns the field name, which should be created by the study's "calculateFN".
		 * 	return "ATR " + sd.name;
		 * };
		 * @type string
		 * @default
		 * @alias CIQ.ChartEngine#preferences[`horizontalCrosshairField`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @since 04-2016-08
		 */
		horizontalCrosshairField: null,
		/**
		 * Set to true to display labels on y-axis for line based studies using {@link CIQ.Studies.displayIndividualSeriesAsLine} or {@link CIQ.Studies.displaySeriesAsLine} (this is overridden by the particular y-axis setting of {@link CIQ.ChartEngine.YAxis#drawPriceLabels}).
		 * This flag is checked inside these 2 functions to decide if a label should be set, as such if you do not wish to have a label on a particular study line, you can set this flag to `false`, before calling the function, and then back to `true`.
		 * @type boolean
		 * @default
		 * @alias CIQ.ChartEngine#preferences[`labels`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @example
		 * //do not display the price labels for this study
		 * stxx.preferences.labels=false;
		 * CIQ.Studies.displaySeriesAsLine(stx, sd, quotes);
		 *
		 * //restore price labels to default value
		 * stxx.preferences.labels=true;
		 */
		labels: true,
		/**
		 * Stores preferred language for the chart.
		 *
		 * It can be individually restored using {@link CIQ.I18N.setLanguage} and activated by {@link CIQ.I18N.translateUI}
		 * @type {string}
		 * @alias CIQ.ChartEngine#preferences[`language`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @since 4.0.0
		 */
		language: null,
		/**
		 * Stores the preferred timezone for the display of the x-axis labels.
		 *
		 * It is automatically set and can be individually restored by {@link CIQ.ChartEngine#setTimeZone}.
		 * @type {string}
		 * @alias CIQ.ChartEngine#preferences[`timezone`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @since 4.0.0
		 */
		timeZone: null,
		/**
		 * Initial whitespace on right of the screen in pixels.
		 * @type number
		 * @default
		 * @alias CIQ.ChartEngine#preferences[`whitespace`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @example
		 * // override the default value at declaration time
		 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), preferences:{"whitespace": 20}});
		 */
		whitespace: 50,
		/**
		 * zoom-in speed for mousewheel and zoom button.
		 *
		 * Range: **0 -.99999**. The closer to 1 the slower the zoom.
		 * @type number
		 * @default
		 * @alias CIQ.ChartEngine#preferences[`zoomInSpeed`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @example
		 * stxx.preferences.zoomInSpeed=.91;
		 * @example
		 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), preferences:{"zoomInSpeed": .98}});
		 * @since 07/01/2015
		 */
		zoomInSpeed: null,
		/**
		 * zoom-out speed for mousewheel and zoom button.
		 *
		 * Range: **1-2**. The closer to 1 the slower the zoom.
		 * @type number
		 * @default
		 * @alias CIQ.ChartEngine#preferences[`zoomOutSpeed`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @example
		 * stxx.preferences.zoomOutSpeed=1.1;
		 * @example
		 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), preferences:{"zoomOutSpeed": 1}});
		 * @since 07/01/2015
		 */
		zoomOutSpeed: null,
		/**
		 * If set to 'true', the mouse wheel zooming is centered by the mouse position.
		 *
		 * @type boolean
		 * @default
		 * @alias CIQ.ChartEngine#preferences[`zoomAtCurrentMousePosition`]
		 * @memberof CIQ.ChartEngine.preferences#
		 * @since 4.0.0
		 */
		zoomAtCurrentMousePosition: false
	},
	/**
	 * Used to control the behavior and throttling of real time updates in [updateChartData()]{@link CIQ.ChartEngine#updateChartData} to prevent overloading the chart engine
	 * @type object
	 * @alias streamParameters
	 * @memberof CIQ.ChartEngine.prototype
	 * @example
	 * // this will cause updates to be applied to the dataSegment immediately
	 * stxx.streamParameters.maxTicks=0;
	 *
	 * // here is how you would override all options
	 * stxx.streamParameters= {"maxWait":1000,"maxTicks":100}
	 */
	streamParameters: {
		count: 0,
		/**
		 * ms to wait before allowing update to occur (if this condition is met, the update will occur, and all pending ticks will be loaded - exclusive of maxTicks)
		 * @type number
		 * @default
		 * @alias CIQ.ChartEngine#streamParameters[`maxWait`]
		 * @memberof CIQ.ChartEngine.streamParameters#
		 * @example
		 * // update without any time interval delay.
		 * stxx.streamParameters.maxWait=0;
		 */
		maxWait: 1000,
		/**
		 * ticks to wait before allowing update to occur (if this condition is met, the update will occur, and all pending ticks will be loaded - exclusive of maxWait)
		 * @type number
		 * @default
		 * @alias CIQ.ChartEngine#streamParameters[`maxTicks`]
		 * @memberof CIQ.ChartEngine.streamParameters#
		 * @example
		 * // update with every new tick added.
		 * stxx.streamParameters.maxTicks=0;
		 */
		maxTicks: 100,
		timeout: -1
	},
	/**
	 * Allow the candle width to be determined dynamically when using {@link CIQ.ChartEngine#setRange}.
	 * This will require a valid {@link CIQ.ChartEngine#dynamicRangePeriodicityMap}
	 * @type object
	 * @default
	 * @alias autoPickCandleWidth
	 * @memberof CIQ.ChartEngine.prototype
	 * @example
	 * autoPickCandleWidth:{
	 *     turnOn: true,
	 *     candleWidth: 5
	 * }
	 * @since m-2016-12-01
	 */
	autoPickCandleWidth: {
		/**
		 * Turn to 'true' if you want the periodicity to be determined dynamically when using {@link CIQ.ChartEngine#setRange}.
		 * This will require a valid {@link CIQ.ChartEngine#dynamicRangePeriodicityMap}
		 * @type boolean
		 * @default
		 * @alias CIQ.ChartEngine#autoPickCandleWidth[`turnOn`]
		 * @memberof CIQ.ChartEngine.autoPickCandleWidth#
		 */
		turnOn: false,

		/**
		 * Set if you want to set a specific candle width when using {@link CIQ.ChartEngine#setRange}.
		 * This will require a valid {@link CIQ.ChartEngine#dynamicRangePeriodicityMap}.
		 * Set to '0' if you want the candle width to be determined according to chart type
		 * @type number
		 * @default
		 * @alias CIQ.ChartEngine#autoPickCandleWidth[`candleWidth`]
		 * @memberof CIQ.ChartEngine.autoPickCandleWidth#
		 */
		candleWidth: 5
	}
};

CIQ.extend(CIQ.ChartEngine.prototype, prototypeSwitches);

// Constant bitmask for bar evaluation
CIQ.ChartEngine.NONE = 0; // no evaluation (black bars)
CIQ.ChartEngine.CLOSEUP = 1; // today's close greater than yesterday's close
CIQ.ChartEngine.CLOSEDOWN = 2; // today's close less than yesterday's close
CIQ.ChartEngine.CLOSEEVEN = 4; // today's close the same as yesterday's close
CIQ.ChartEngine.CANDLEUP = 8; // today's close greater than today's open
CIQ.ChartEngine.CANDLEDOWN = 16; // today's close less than today's open
CIQ.ChartEngine.CANDLEEVEN = 32; // today's close equal to today's open

};


let __js_core_formatData_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Converts a future month to the month index or vice versa. Month indexes begin with 1 for
 * January.
 *
 * @param {string} x The value to convert. If numeric, converted to future month letter. If
 * 		alphabetical, converted to month index.
 * @return {string} The converted value.
 *
 * @memberof CIQ
 */
CIQ.convertFutureMonth = function (x) {
	var y = x.toString();
	if (y.length <= 0 || y.length > 2) return "";
	switch (y) {
		case "1":
			return "F";
		case "2":
			return "G";
		case "3":
			return "H";
		case "4":
			return "J";
		case "5":
			return "K";
		case "6":
			return "M";
		case "7":
			return "N";
		case "8":
			return "Q";
		case "9":
			return "U";
		case "10":
			return "V";
		case "11":
			return "X";
		case "12":
			return "Z";
		case "F":
			return "1";
		case "G":
			return "2";
		case "H":
			return "3";
		case "J":
			return "4";
		case "K":
			return "5";
		case "M":
			return "6";
		case "N":
			return "7";
		case "Q":
			return "8";
		case "U":
			return "9";
		case "V":
			return "10";
		case "X":
			return "11";
		case "Z":
			return "12";
	}
	return y;
};

/**
 * Prints out a number in US Dollar monetary representation
 * @param  {number} val      The amount
 * @param  {number} [decimals=2] Number of decimal places.
 * @param  {string} [currency] Currency designation.  If omitted, will use $.
 * @return {string}          US Dollar monetary representation
 * // Returns $100.00
 * CIQ.money(100, 2);
 * @memberof CIQ
 */
CIQ.money = function (val, decimals, currency) {
	if (!currency) currency = "$";
	if (currency.length == 3) currency += " ";
	if (!decimals && decimals !== 0) decimals = 2;
	return (
		currency + CIQ.commas((Math.round(val * 10000) / 10000).toFixed(decimals))
	);
};

/**
 * Converts a currency code from ISO to char
 * @param  {string} code      The string to convert (e.g., `USD`)
 * @return {string}          The converted string, (e.g., `$`)
 * @memberof CIQ
 */
CIQ.convertCurrencyCode = function (code) {
	var codes = {
		JPY: "¥",
		USD: "$",
		AUD: "A$",
		BRL: "R$",
		CAD: "CA$",
		CNY: "CN¥",
		CZK: "Kč",
		DKK: "kr",
		EUR: "€",
		GBP: "£",
		HKD: "HK$",
		HUF: "Ft",
		ILS: "₪",
		INR: "₹",
		KRW: "₩",
		MXN: "MX$",
		NOK: "kr",
		NZD: "NZ$",
		PLN: "zł",
		RUB: "руб",
		SAR: "﷼",
		SEK: "kr",
		SGD: "S$",
		THB: "฿",
		TRY: "₺",
		TWD: "NT$",
		VND: "₫",
		XAF: "FCFA",
		XCD: "EC$",
		XOF: "CFA",
		XPF: "CFPF",
		ZAR: "R"
	};
	var rt = codes[code];
	if (rt) return rt;
	return code;
};

/**
 * Returns a string representation of a number with commas in thousands, millions or billions places. Note that this function does
 * not handle values with more than 3 decimal places!!!
 * @param  {number} val The value
 * @return {string}     The result with commas
 * @example
 * // Returns 1,000,000
 * CIQ.commas(1000000);
 * @memberof CIQ
 */
CIQ.commas = function (val) {
	return val.toString().replace(/\B(?=(\d{3}){1,4}(?!\d))/g, ",");
};

/**
 * Convenience function to convert API periodicity parameters to internal periodicity format.
 * @param  {string} period The period value as required by {@link CIQ.ChartEngine#setPeriodicity}
 * @param  {string} [interval] The interval value as required by {@link CIQ.ChartEngine#setPeriodicity}
 * @param  {string} timeUnit The timeUnit value as required by {@link CIQ.ChartEngine#setPeriodicity}
 * @return {object} object containing internally compliant periodicity, interval, and timeUnit
 * @memberof CIQ
 * @tsdeclaration
 * function cleanPeriodicity(period: number, interval: number, timeUnit: string)
 * function cleanPeriodicity(period: number, timeUnit: string)
 * @since 5.1.1
 */
CIQ.cleanPeriodicity = function (period, interval, timeUnit) {
	if (isNaN(period)) period = 1;
	if (!interval) interval = 1;
	if (!isNaN(interval) && timeUnit) {
		// disregard the numeric interval if a daily timeUnit is provided
		//	we'll need to propagate timeUnit down wherever we are examining the interval alone to determine the time unit
		if (
			!(
				timeUnit == "hour" ||
				timeUnit == "minute" ||
				timeUnit == "second" ||
				timeUnit == "millisecond"
			)
		) {
			interval = timeUnit;
			timeUnit = null;
		}
	}

	// clean up timeUnit
	//if(CIQ.ChartEngine.isDailyInterval(interval)) timeUnit=null; // redundant
	else if (interval == "tick") timeUnit = null;
	else if (!timeUnit && !isNaN(interval)) timeUnit = "minute";

	// support hour
	if (timeUnit == "hour") {
		timeUnit = "minute";
		interval = interval * 60;
	}

	// support year
	if (interval == "year") {
		interval = "month";
		if (!period) period = 1;
		period = period * 12;
	}

	return { period: period, interval: interval, timeUnit: timeUnit };
};

/**
 * Creates a string with a periodicity that is easy to read given a chart
 * @param  {CIQ.ChartEngine} stx A chart object
 * @return {string}     A periodicity value that can be displayed to an end user
 * @memberof CIQ
 */
CIQ.readablePeriodicity = function (stx) {
	var displayPeriodicity = stx.layout.periodicity;
	var displayInterval = stx.layout.interval;
	if (typeof stx.layout.interval == "number" && stx.layout.timeUnit) {
		displayPeriodicity = stx.layout.interval * stx.layout.periodicity;
		displayInterval = stx.layout.timeUnit;
	} else if (typeof stx.layout.interval == "number" && !stx.layout.timeUnit) {
		displayPeriodicity = stx.layout.interval * stx.layout.periodicity;
		displayInterval = "minute";
	}
	if (displayPeriodicity % 60 === 0 && displayInterval == "minute") {
		displayPeriodicity /= 60;
		displayInterval = "hour";
	}
	return (
		displayPeriodicity + " " + stx.translateIf(CIQ.capitalize(displayInterval))
	);
};

/**
 * Given a numeric price that may be a float with rounding errors, this will trim off the trailing zeroes
 * @param  {number} price The price
 * @return {number}       The price trimmed of trailing zeroes
 * @memberof CIQ
 */
CIQ.fixPrice = function (price) {
	if (!price && price !== 0) return null;
	var p = price.toFixed(10);
	for (var i = p.length - 1; i > 1; i--) {
		if (p.charAt(i) != "0") break;
	}
	p = p.substring(0, i + 1);
	return parseFloat(p);
};

/**
 * Condenses a number into abbreviated form by adding "k","m","b" or "t".
 * This method is used in the y-axis for example with volume studies.
 * @param  {number} txt - A numerical value
 * @return {string}     Condensed version of the number if over 999, otherwise returns `txt` untouched
 * @example
 * // This will return 12m
 * condenseInt(12000000);
 * @memberof CIQ
 * @since 4.0.0 Now returns `txt` untouched if under 1000. Previously was removing all decimal places.
 */
CIQ.condenseInt = function (txt) {
	if (txt === null || typeof txt == "undefined") return "";
	if (txt === Infinity || txt === -Infinity) return "n/a";
	var isNegative = txt < 0;

	if (!isNaN(txt)) {
		txt = Math.abs(txt);

		if (txt > 1000000000000) txt = Math.round(txt / 100000000000) / 10 + "t";
		else if (txt > 100000000000) txt = Math.round(txt / 1000000000) + "b";
		//100b
		else if (txt > 10000000000)
			txt = (Math.round(txt / 100000000) / 10).toFixed(1) + "b";
		//10.1b
		else if (txt > 1000000000)
			txt = (Math.round(txt / 10000000) / 100).toFixed(2) + "b";
		//1.11b
		else if (txt > 100000000) txt = Math.round(txt / 1000000) + "m";
		//100m
		else if (txt > 10000000)
			txt = (Math.round(txt / 100000) / 10).toFixed(1) + "m";
		//10.1m
		else if (txt > 1000000)
			txt = (Math.round(txt / 10000) / 100).toFixed(2) + "m";
		//1.11m
		else if (txt > 100000) txt = Math.round(txt / 1000) + "k";
		//100k
		else if (txt > 10000) txt = (Math.round(txt / 100) / 10).toFixed(1) + "k";
		//10.1k
		else if (txt > 1000) txt = (Math.round(txt / 10) / 100).toFixed(2) + "k";
		//1.11k
		else txt = txt.toString();
	} else {
		txt = txt.toString();
	}

	if (isNegative) txt = "-" + txt;
	return txt;
};

/**
 * Determines how many decimal places the security trades.
 *
 * This is the default calculateTradingDecimalPlaces function.  It is used by {@link CIQ.ChartEngine#setMasterData} to round off the prices
 * to an appropriate number of decimal places.  The function is assigned to {@link CIQ.ChartEngine.Chart#calculateTradingDecimalPlaces}},
 * but you may set to your own logic instead.
 *
 * The default algorithm is to check the most recent 50 quotes and find the maximum number of decimal places that the stock has traded.
 * This will work for most securities but if your market data feed has rounding errors
 * or bad data then you may want to supplement this algorithm that checks the maximum value by security type.
 *
 * It defaults to a minimum of 2 decimals.
 * @param {object} params Parameters
 * @param  {CIQ.ChartEngine} params.stx    The chart object
 * @param {CIQ.ChartEngine.Chart} params.chart The chart in question
 * @param  {string} params.symbol The symbol string
 * @param  {object} params.symbolObject The symbol object. If you create charts with just stock symbol then symbolObject.symbol will contain that symbol
 * @return {number}        The number of decimal places
 * @memberof CIQ
 * @example
 * //set your own logic for calculating decimal places.
 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), preferences:{labels:false, currentPriceLine:true, whitespace:0}});
 * stxx.chart.calculateTradingDecimalPlaces=yourCustomFunction;
 * @example
// default code
CIQ.calculateTradingDecimalPlaces=function(params){
	var chart=params.chart;
	var decimalPlaces=2;
	var quotesToCheck = 50; // Check up to 50 recent quotes
	var masterData=chart.masterData;
	if(masterData && masterData.length > quotesToCheck){
		// exclude the current quote by setting i=2 in case animation is enabled. Animation uses very large decimals to allow for smooth movements.
		for(var i=2;i<quotesToCheck;i++){
			var position=masterData.length-i;
			if(position<0) break;
			var quotes=masterData[position];
			if(quotes.Close && typeof quotes.Close == 'number'){
				var cs=quotes.Close.toString();
				var point=cs.indexOf('.');
				if(point!=-1){
					var dp = cs.length-point-1;
					if(dp>decimalPlaces){
						decimalPlaces=dp;
					}
				}
			}
		}
	}
	var maxDecimalPlaces=chart.yAxis.maxDecimalPlaces;
	if(decimalPlaces>maxDecimalPlaces && maxDecimalPlaces!==null) decimalPlaces=maxDecimalPlaces;
	return decimalPlaces;
};
 */
CIQ.calculateTradingDecimalPlaces = function (params) {
	var chart = params.chart;
	var decimalPlaces = 2;
	var quotesToCheck = 50; // Check up to 50 recent quotes
	var masterData = chart.masterData;
	if (masterData && masterData.length > quotesToCheck) {
		// exclude the current quote by setting i=2 in case animation is enabled. Animation uses very large decimals to allow for smooth movements.
		for (var i = 2; i < quotesToCheck; i++) {
			var position = masterData.length - i;
			if (position < 0) break;
			var quotes = masterData[position];
			if (quotes.Close && typeof quotes.Close == "number") {
				var cs = quotes.Close.toString();
				var point = cs.indexOf(".");
				if (point != -1) {
					var dp = cs.length - point - 1;
					if (dp > decimalPlaces) {
						decimalPlaces = dp;
					}
				}
			}
		}
	}
	var maxDecimalPlaces = chart.yAxis.maxDecimalPlaces;
	if (decimalPlaces > maxDecimalPlaces && maxDecimalPlaces !== null)
		decimalPlaces = maxDecimalPlaces;
	return decimalPlaces;
};

/**
 * This method will return a tuple [min,max] that contains the minimum
 * and maximum values in the series where values are `series[field]`.
 *
 * @param {array} series The series
 * @param {string} field The name of the series to look at
 * @param {string} subField The name of the field within the series to look at
 * @param {boolean} highLow True when comparing max High/min Low vs a specific field
 * @return {array} Tuple containing min and max values in the series
 * @memberof CIQ
 * @since 5.1.0 Added subField, highLow arguments
 */
CIQ.minMax = function (series, field, subField, highLow) {
	var min = Number.MAX_VALUE;
	var max = Number.MAX_VALUE * -1;
	if (!subField) subField = "Close";
	var highField = highLow ? "High" : subField;
	var lowField = highLow ? "Low" : subField;
	for (var i = 0; i < series.length; i++) {
		var entry = series[i];
		if (!entry) continue;
		var fVal = entry[field];
		if (!fVal && fVal !== 0) continue;
		var sfVal = fVal;
		if (typeof fVal === "object") sfVal = fVal[highField];
		if (!isNaN(sfVal) && (sfVal || sfVal === 0)) {
			max = Math.max(max, sfVal);
		}
		if (typeof fVal === "object") sfVal = fVal[lowField];
		if (!isNaN(sfVal) && (sfVal || sfVal === 0)) {
			min = Math.min(min, sfVal);
		}
	}
	return [min, max];
};

/**
 * Returns true if two symbols match. Symbols can be strings or symbolObjects. By default, the "symbol" member is compared, and then
 * a "source" member if one exists.
 * If the objects have an "equals()" function member then that will be used for comparison.
 * You can override this with your own method if you have other requirements.
 * @param  {object} left  Symbol object
 * @param  {object} right Symbol object
 * @return {boolean}       true if the same
 * @memberOf  CIQ
 */
CIQ.symbolEqual = function (left, right) {
	if (!left || !right) return false;
	if (typeof left != "object") left = { symbol: left };
	if (typeof right != "object") right = { symbol: right };
	if (typeof left.equals == "function") {
		return left.equals(right);
	}
	var l = left.symbol;
	var r = right.symbol;
	if (l) l = l.toUpperCase();
	if (r) r = r.toUpperCase();
	if (l != r) return false;
	if (left.source != right.source) return false;
	return true;
};

/**
 * Convenience function to iterate through the charts masterData and add a data member.
 * Used to load initial data for additional series and study symbols and should normally not be called directly. Unless used inside a study initialize function; use {@link CIQ.ChartEngine#addSeries} or {@link CIQ.ChartEngine#updateChartData} instead.
 * Can be used with any array of data objects which contains at least the 'DT' (date in JavaScript format) and 'Close' ( close/last price ) elements of an [OHLC object]{@tutorial InputDataFormat}.
 * @param {object} params Parameters object
 * @param {CIQ.ChartEngine} [params.stx]       	A chart object
 * @param {array} [params.data]		 			The data to add (which should align or closely align with the chart data by date)
 * @param {array} [params.fields] 				The fields from the incoming data objects to extract and add as the new members in each masterData object. One new member will be added per field using the exact same name as in the incoming data. Example: (for each field name in the array) masterData[mIterator][fieldN]=data[dIterator][fieldN]. Takes precedence over `createObject`, `label` and `fieldForLabel` parameters.  Use fields=["*"] to copy all fields in the data object.
 * @param {string} [params.label]     			The name of the new member to add into each masterData object. Example: masterData[mIterator][label]=data[dIterator]["Close"]. Required unless "fields" is specified.
 * @param {string} [params.createObject] 		If truthy, then each complete incoming data object will be assigned to the new label member in each masterData object. If set to "aggregate", will consolidate the OHLV data with the new data. The data object is expected to be a properly formatted OHLC record, or at least contain a 'Close' price, otherwise this parameter will not be honored. Example: masterData[mIterator][label]=data[dIterator]. This behavior is mutually exclusive with `fields`. <br>If the data object contains a 'Value' field, this parameter will not be honored and instead the 'Value' field will be used as follows: masterData[mIterator][label] = data[dIterator]["Value"];
 * @param {string} [params.fieldForLabel="Close"] 	If set, this will be the field from each incoming data object that will be copied into the new label member in each masterData object. If not set, "Close" or "Value" is used, whichever exists; and if neither exists, it will attempt to copy over a field matching the `label` name. Example: masterData[mIterator][label]=data[dIterator][fieldForLabel]. This behavior is mutually exclusive with `fields` and `createObject`.
 * @param {boolean} [params.fillGaps]			If true, then gaps in data will be filled by carrying forward the value of from the previous bar.
 * @param {boolean} [params.noCleanupDates]		If true then dates have been cleaned up already by calling {@link CIQ.ChartEngine#doCleanupDates}, so do not do so in here.
 * @param {CIQ.ChartEngine.Chart} [params.chart]   The chart to update
 * @memberof CIQ
 * @example
 * //data element format if neither fields, fieldForLabel or createObject are used
 * {DT:epoch,Date:strDate,Value:value}
 * {DT:epoch,Date:strDate,Close:value }
 * //data element format if fields is used
 * {DT:epoch,Date:strDate,Field1:value,Field2:value,Field3:value,Field4:value}
 * //data element format if createObject is used
 * {DT:epoch,Date:strDate,AnyOtherData:otherData,MoreData:otherData,...}
 * @since
 * - 04-2015
 * - 15-07-01 Added `fieldForLabel` argument.
 * - 3.0.0 All data sent in will be forced into the chart. Dates are no longer required to be exact matches (minutes, hours, seconds, milliseconds) in order to show up in comparisons.
 * - 4.0.0 Arguments are now parameterized. Backward compatibility with old signature.
 * - 4.0.0 Added ability to specify copying of all fields by setting `params.fields=["*"]`.
 * - 5.2.0 Enhanced parameter `createObject` to take a string.
 * - 5.2.0 Added parameter `noCleanupDates`.
 */
CIQ.addMemberToMasterdata = function (params) {
	if (params.constructor === CIQ.ChartEngine) {
		params = {
			stx: arguments[0],
			label: arguments[1],
			data: arguments[2],
			fields: arguments[3],
			createObject: arguments[4],
			fieldForLabel: arguments[5]
		};
	}
	var stx = params.stx;
	var label = params.label;
	var data = params.data;
	var fields = params.fields;
	var createObject = params.createObject;
	var fieldForLabel = params.fieldForLabel;

	var chart = params.chart ? params.chart : stx.chart;

	if (!params.noCleanupDates) stx.doCleanupDates(data, stx.layout.interval);

	var series = [];
	if (stx.getSeries) series = stx.getSeries({ symbol: label, chart: chart });

	if (data && data.constructor == Object) data = [data]; // When developer mistakenly sends an object instead of an array of objects
	if (!data || !data.length) return;

	var mIterator = 0,
		cIterator = 0,
		masterData = chart.masterData,
		layout = stx.layout,
		m,
		c;
	if (!masterData) {
		masterData = [];
	}

	var defaultPlotField = (chart && chart.defaultPlotField) || null;
	var isLineType =
		stx.mainSeriesRenderer && !stx.mainSeriesRenderer.highLowBars;
	var chartType = layout.chartType;
	if (!isLineType && chartType) {
		var renderer = CIQ.Renderer.produce(chartType, {});
		if (renderer) isLineType = !renderer.highLowBars;
	}

	function aggregate(m, c) {
		if (!m || typeof m != "object") {
			m = c;
			return m;
		}
		var prior = {
			Close: m.Close,
			High: m.High,
			Low: m.Low,
			Open: m.Open,
			Volume: m.Volume
		};
		m = c;
		for (var p in prior) {
			if (m.Close === null) {
				// Close is not set, nothing else is valid (it's a gap)
				if (m[p] !== undefined) m[p] = null;
			} else if (typeof m[p] !== "number") m[p] = prior[p];
			// new data invalid, use original data
			else if (typeof prior[p] === "number") {
				// aggregate the data
				if (p == "Open") m.Open = prior.Open;
				else if (p == "Low" && m.Low > prior.Low) m.Low = prior.Low;
				else if (p == "High" && m.High < prior.High) m.High = prior.High;
				else if (p == "Volume") m.Volume += prior.Volume;
			}
		}
		return m;
	}

	// inject data from c into m
	function injectData(m, c) {
		if (fields && fields.length) {
			// Case 1, copy the [several] specified fields from new object to masterData object
			if (fields[0] == "*") {
				// copy all fields
				CIQ.extend(m, c);
			} else {
				for (var i = 0; i < fields.length; i++) {
					m[fields[i]] = c[fields[i]];
				}
			}
		} else if (createObject) {
			// Case 2, the new object will become a child object of the masterData object
			if (c.Value !== undefined) {
				// If "Value" is in the new object use that
				m[label] = c.Value;
				return;
			} else if (createObject == "aggregate") {
				m[label] = aggregate(m[label], c);
			} else {
				m[label] = c;
			}
			// If we don't set this here, the study calculations will fail
			var m_ = m[label];
			if (typeof m_.Close == "number") {
				if (typeof m_.Open != "number") m_.Open = m_.Close;
				var high = Math.max(m_.Open, m_.Close),
					low = Math.min(m_.Open, m_.Close);
				if (typeof m_.High != "number" || m_.High < high) m_.High = high;
				if (typeof m_.Low != "number" || m_.Low > low) m_.Low = low;
			}
			if (m_.Volume && typeof m_.Volume !== "number")
				m_.Volume = parseInt(m_.Volume, 10);
		} else if (fieldForLabel) {
			// Case 3, copy the data from one label (fieldForLabel) to another (label)
			m[label] = c[fieldForLabel];
		} else if (
			isLineType &&
			defaultPlotField &&
			c[defaultPlotField] !== undefined
		) {
			// If a default field on the chart has been provided, then use that if it's in the new object
			m[label] = c[defaultPlotField];
		} else if (layout.adj && c.Adj_Close !== undefined) {
			// If Adjusted close is in the new object, use that
			m[label] = c.Adj_Close;
		} else if (c.Close !== undefined) {
			// If Close is in the new object use that
			m[label] = c.Close;
		} else if (c.Value !== undefined) {
			// If "Value" is in the new object use that
			m[label] = c.Value;
		} else {
			// Default to copying the same label from the old to the new object.
			m[label] = c[label];
		}
	}

	// Binary search for next relevant masterData record, with the following modifications:
	// 1. Always check the very next record, since that is most likely
	// 2. Before search, check last record
	function fastSeek(date) {
		function testIt() {
			if (+masterData[mIterator].DT == +date) return 0;
			if (masterData[mIterator].DT < date) return 1;
			if (masterData[mIterator - 1].DT > date) return -1;
			if (+masterData[mIterator - 1].DT == +date) mIterator--; // efficiency
			return 0;
		}
		var begin = mIterator,
			end = masterData.length - 1;
		if (masterData[end].DT < date) {
			mIterator = end + 1;
			return;
		} else if (+masterData[end].DT == +date) {
			mIterator = end;
			return;
		}
		mIterator++;
		var attempts = 0;
		while (++attempts < 100) {
			switch (testIt()) {
				case 0:
					return;
				case 1:
					begin = mIterator;
					break;
				case -1:
					end = mIterator;
					break;
			}
			mIterator = Math.round((end + begin) / 2);
		}
		if (attempts >= 100) {
			console.log(
				"!!!Warning: addMemberToMasterdata() did not find insertion point."
			);
			mIterator = masterData.length - 1;
		}
	}

	var dateFormatter = CIQ.yyyymmddhhmmssmmm;
	/* The value for *displayDate* on quotes created below will be done by the call to ChartEngine#setMasterData */

	// insert/update up to masterData last bar
	while (mIterator < masterData.length && cIterator < data.length) {
		c = data[cIterator];
		m = masterData[mIterator];
		if (!c.DT || typeof c.DT == "undefined") c.DT = CIQ.strToDateTime(c.Date);
		else {
			if (typeof c.DT == "number") c.DT = new Date(c.DT); //in case they sent in an epoch
			if (!c.Date || c.Date.length != 17) c.Date = dateFormatter(c.DT);
		}
		if (cIterator === 0) {
			for (var s1 = 0; s1 < series.length; s1++) {
				if (!series[s1].endPoints.begin || series[s1].endPoints.begin > c.DT)
					series[s1].endPoints.begin = c.DT;
			}
		}
		if (+c.DT == +m.DT) {
			injectData(m, c);
			cIterator++;
			mIterator++;
			continue;
		}

		if (c.DT < m.DT) {
			masterData.splice(mIterator, 0, { DT: c.DT, Date: c.Date });
			continue;
		} else fastSeek(c.DT); // this advances the mIterator
	}

	// insert after master data last bar
	if (mIterator >= masterData.length) {
		while (cIterator < data.length) {
			c = data[cIterator];
			if (!c.DT || typeof c.DT == "undefined") c.DT = CIQ.strToDateTime(c.Date);
			else {
				if (typeof c.DT == "number") c.DT = new Date(c.DT); //in case they sent in an epoch
				if (!c.Date || c.Date.length != 17) c.Date = dateFormatter(c.DT);
			}
			m = {
				DT: c.DT,
				Date: c.Date
			};
			injectData(m, c);
			masterData.push(m);
			cIterator++;
		}
	}
	if (params.fillGaps && masterData.length) {
		var cleanupGapsParams = {
			noCleanupDates: true,
			cleanupGaps: params.fillGaps
		};
		if (fields) {
			for (var j = 0; j < fields.length; j++) {
				cleanupGapsParams.field = fields[j];
				stx.doCleanupGaps(masterData, chart, cleanupGapsParams);
			}
		} else {
			cleanupGapsParams.field = label;
			stx.doCleanupGaps(masterData, chart, cleanupGapsParams);
		}
	}
	for (var s2 = 0; s2 < series.length; s2++) {
		var endPoints = series[s2].endPoints;
		if (!endPoints.end || !label || endPoints.end <= m[label].DT) {
			endPoints.end = label ? m[label].DT : m.DT;
			var sLabel =
				label ||
				(series[s2].parameters && series[s2].parameters.field) ||
				chart.defaultPlotField;
			series[s2].lastQuote = stx.getFirstLastDataRecord(
				masterData,
				sLabel,
				true
			);
		}
	}
	stx.setMasterData(masterData, chart, { noCleanupDates: true });
};

};


let __js_core_math_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Convenience function to compute xor operation.
 *
 * @param {object} a Operand.
 * @param {object} b Operand.
 * @return {boolean} true if only one of the operands is truthy.
 * @memberof CIQ
 * @since 7.3.0
 */
CIQ.xor = function (a, b) {
	var _a = !a,
		_b = !b; // convert to boolean
	return _a !== _b;
};

/**
 * Convenience function to round a floating-point number.
 *
 * This has better decimal accuracy than:
 * - number.toFixed(decimals)
 * - Math.round(number*decimals)/decimals
 * @param  {number} number The number to round
 * @param  {number} decimals The number of decimal places
 * @return  {number} Rounded number
 * @memberof CIQ
 * @since 7.0.0
 */
CIQ.round = function (number, decimals) {
	return Number(Math.round(number + "e" + decimals) + "e-" + decimals);
};

/**
 * Convenience function to count number of decimal places in a number
 * @param  {number} n The number to check
 * @return  {number} Number of decimal places
 * @memberof CIQ
 * @since
 * - 6.1.0
 * - 6.2.0 Now handles scientific notation.
 */
CIQ.countDecimals = function (n) {
	if (typeof n !== "number" || isNaN(n)) return 0;
	if (Math.floor(n) === Number(n)) return 0;
	var strN = n.toString().split("e-");
	if (strN.length > 1)
		return CIQ.countDecimals(Number(strN[0])) + Number(strN[1]);
	if (strN[0].indexOf(".") > -1) return strN[0].split(".")[1].length;
	return 0;
};

/**
 * Convenience function to determine if a value is a valid number.
 * @param  {number} n The number to check
 * @return {boolean} True if n is a real finite number. NaN, Infinity, null, undefined, etc are not considered to be a valid number.
 * @memberof CIQ
 * @since 5.2.2
 */
CIQ.isValidNumber = function (n) {
	return isFinite(n) && +n === n;
};

/**
 * Returns the log base 10 of a value
 * @param  {number} y The value
 * @return {number}   log10 value
 * @memberof CIQ
 */
CIQ.log10 = function (y) {
	return Math.log(y) / Math.LN10;
};

/**
 * Cryptographically safe replacement for Math.random
 * Will fallback to Math.random in any enviroment that does not support crypto.getRandomValues
 * @return {number} number Random number
 * @memberof CIQ
 * @since 8.7.0
 */
CIQ.random = function () {
	if (!crypto) return console.warn("Browser does not support WebCrypto");

	const rand = "random";
	return crypto
		? crypto.getRandomValues(new Uint8Array(1))[0] / 255
		: Math[rand]();
};

/**
 * Determines whether a line intersects a box. This is used within the charting engine to determine whether the cursor
 * has intersected a drawing.
 * Note this function is meant to receive bx1, by1, bx2, by2, x0, y0, x1 and y1 as pixel values and not as ticks/axis values.
 * @param  {number} bx1
 * @param  {number} by1
 * @param  {number} bx2
 * @param  {number} by2
 * @param  {number} x0
 * @param  {number} y0
 * @param  {number} x1
 * @param  {number} y1
 * @param  {string} vtype - Either "segment", "ray" or "line".  Anything else will default to segment.
 * @return {boolean}       Returns true if the line intersects the box
 * @memberof CIQ
 * @since
 * - 4.0.0 Added `isLog` parameter.
 * - 6.0.0 Removed `isLog` parameter.
 */
CIQ.boxIntersects = function (bx1, by1, bx2, by2, x0, y0, x1, y1, vtype) {
	if (arguments[9] !== undefined) {
		console.warn(
			"CIQ.boxIntersects() no longer supports isLog argument, please be sure arguments are passed in as pixels."
		);
	}
	var minX = Math.min(bx1, bx2);
	var maxX = Math.max(bx1, bx2);
	var minY = Math.min(by1, by2);
	var maxY = Math.max(by1, by2);
	var isRay = vtype == "ray";

	// Check for invalid values
	if (isNaN(x0) || isNaN(x1) || isNaN(y0) || isNaN(y1)) return false;

	// First see if segment/ray lies outside the box
	if (vtype != "line") {
		if (x0 < minX && x1 < minX && (!isRay || x0 > x1)) return false;
		if (x0 > maxX && x1 > maxX && (!isRay || x0 < x1)) return false;
		if (y0 < minY && y1 < minY && (!isRay || y0 > y1)) return false;
		if (y0 > maxY && y1 > maxY && (!isRay || y0 < y1)) return false;
	}
	// Now see if all box corners land on the same side of the line
	function cornerCheck(x, y) {
		return (y - y0) * (x1 - x0) - (x - x0) * (y1 - y0);
	}
	var map = {
		a: cornerCheck(bx1, by1),
		b: cornerCheck(bx1, by2),
		c: cornerCheck(bx2, by1),
		d: cornerCheck(bx2, by2)
	};
	if (map.a > 0 && map.b > 0 && map.c > 0 && map.d > 0) return false;
	if (map.a < 0 && map.b < 0 && map.c < 0 && map.d < 0) return false;

	return true;
};

/**
 * Determines whether two lines intersect
 * @param  {number} x1
 * @param  {number} x2
 * @param  {number} y1
 * @param  {number} y2
 * @param  {number} x3
 * @param  {number} x4
 * @param  {number} y3
 * @param  {number} y4
 * @param  {string} type - Either "segment", "ray" or "line"
 * @return {boolean}      Returns true if the two lines intersect
 * @memberof CIQ
 */
CIQ.linesIntersect = function (x1, x2, y1, y2, x3, x4, y3, y4, type) {
	var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
	var numera = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
	var numerb = (x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3);
	//var EPS = .000001;

	if (denom === 0) {
		if (numera === 0 && numerb === 0) return true; // coincident
		return false; // parallel
	}

	var mua = numera / denom;
	var mub = numerb / denom;
	if (type == "segment") {
		if (mua >= 0 && mua <= 1 && mub >= 0 && mub <= 1) return true;
	} else if (type == "line" || type == "horizontal" || type == "vertical") {
		if (mua >= 0 && mua <= 1) return true;
	} else if (type == "ray") {
		if (mua >= 0 && mua <= 1 && mub >= 0) return true;
	}
	return false;
};

/**
 * Determines the Y value at which point X intersects a line (vector)
 * @param  {object} vector - Object of type {x0,x1,y0,y1}
 * @param  {number} x      - X value
 * @return {number}        - Y intersection point
 * @memberof CIQ
 */
CIQ.yIntersection = function (vector, x) {
	var x1 = vector.x0,
		x2 = vector.x1,
		x3 = x,
		x4 = x;
	var y1 = vector.y0,
		y2 = vector.y1,
		y3 = 0,
		y4 = 10000;
	var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
	var numera = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
	//var numerb = (x2-x1) * (y1-y3) - (y2-y1) * (x1-x3);
	//var EPS = .000001;

	var mua = numera / denom;
	if (denom === 0) {
		if (numera === 0) mua = 1;
		else return null;
	}

	var y = y1 + mua * (y2 - y1);
	return y;
};

/**
 * Determines the X value at which point Y intersects a line (vector)
 * @param  {object} vector - Object of type {x0,x1,y0,y1}
 * @param  {number} y      - Y value
 * @return {number}        - X intersection point
 * @memberof CIQ
 */
CIQ.xIntersection = function (vector, y) {
	var x1 = vector.x0,
		x2 = vector.x1,
		x3 = 0,
		x4 = 10000;
	var y1 = vector.y0,
		y2 = vector.y1,
		y3 = y,
		y4 = y;
	var denom = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
	var numera = (x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3);
	//var numerb = (x2-x1) * (y1-y3) - (y2-y1) * (x1-x3);
	//var EPS = .000001;

	var mua = numera / denom;
	if (denom === 0) {
		if (numera === 0) mua = 1;
		else return null;
	}

	var x = x1 + mua * (x2 - x1);
	return x;
};

/**
 * Get the X intersection point between two lines
 * @param  {number} ax1 Initial x coordinate start point of the first box.
 * @param  {number} ax2 Final x coordinate end point of the first box.
 * @param  {number} ay1 Initial y coordinate start point of the first box.
 * @param  {number} ay2 Final y coordinate end point of the fist box.
 * @param  {number} bx1 Initial x coordinate start point of the second box.
 * @param  {number} bx2 Final x coordinate end point of the second box.
 * @param  {number} by1 Initial y coordinate start point of the second box.
 * @param  {number} by2 Final y coordinate end point of the second box.
 * @memberof CIQ
 */
CIQ.intersectLineLineX = function (ax1, ax2, ay1, ay2, bx1, bx2, by1, by2) {
	var ua_t = (bx2 - bx1) * (ay1 - by1) - (by2 - by1) * (ax1 - bx1);
	var u_b = (by2 - by1) * (ax2 - ax1) - (bx2 - bx1) * (ay2 - ay1);

	var ua = ua_t / u_b;

	return ax1 + ua * (ax2 - ax1);
};

/**
 * Get the Y intersection point between two lines
 * @param  {number} ax1 Initial x coordinate start point of the first box.
 * @param  {number} ax2 Final x coordinate end point of the first box.
 * @param  {number} ay1 Initial y coordinate start point of the first box.
 * @param  {number} ay2 Final y coordinate end point of the fist box.
 * @param  {number} bx1 Initial x coordinate start point of the second box.
 * @param  {number} bx2 Final x coordinate end point of the second box.
 * @param  {number} by1 Initial y coordinate start point of the second box.
 * @param  {number} by2 Final y coordinate end point of the second box.
 * @memberof CIQ
 */
CIQ.intersectLineLineY = function (ax1, ax2, ay1, ay2, bx1, bx2, by1, by2) {
	var ua_t = (bx2 - bx1) * (ay1 - by1) - (by2 - by1) * (ax1 - bx1);
	var u_b = (by2 - by1) * (ax2 - ax1) - (bx2 - bx1) * (ay2 - ay1);

	var ua = ua_t / u_b;

	return ay1 + ua * (ay2 - ay1);
};

};


let __js_core_object_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Deletes the map entries for which the right-hand side is the object in question.
 * @param  {object} map    JavaScript map object
 * @param  {object} object The actual object to be deleted from the map
 * @return {boolean}        Returns true if any object actually deleted
 * @memberof CIQ
 */
CIQ.deleteRHS = function (map, object) {
	var deletedOne = false;
	for (var i in map) {
		if (map[i] == object) {
			delete map[i];
			deletedOne = true;
		}
	}
	return deletedOne;
};

/**
 * Deletes (removes) nulls or undefined fields (names) from an object. This is useful when marshalling (saving) an object where you don't wish
 * null or undefined values to show up in the marshalled object (such as when converting to JSON)
 * @param  {object} obj         The object to scrub
 * @param  {boolean} [removeNulls] Whether or not to remove null values
 * @memberof CIQ
 */
CIQ.scrub = function (obj, removeNulls) {
	for (var i in obj) {
		if (typeof obj[i] == "undefined") delete obj[i];
		if (removeNulls && obj[i] === null) delete obj[i];
	}
};

/**
 * This method changes the target object's contents to match the contents of the source object. This is functionally equivalent
 * to `target=source` except that it preserves the existence of the target object. This is vitally important if there are data bindings
 * to the target object otherwise those data bindings would remain attached to a phantom object! The logic here is orchestrated so that you
 * will receive update, add and delete notifications for each field that changes.
 * @param {object} target The target object
 * @param {object} source The source object
 * @memberof CIQ
 * @since 2015-11-1
 */
CIQ.dataBindSafeAssignment = function (target, source) {
	/*for(var prop in source) {
			target[prop]=source[prop];
		}*/
	CIQ.extend(target, source);
	for (var prop in target) {
		if (typeof source[prop] == "undefined") {
			target[prop] = undefined;
		}
	}
};

/**
 * Clones an object. This function creates a deep (recursive) clone of an object. The object can be a primitive or an object or an array.
 * Note that cloning objects that reference DOM nodes can result in stack overflows. Use with caution.
 * @param  {object} from The source object
 * @param  {object} [to]   Optional existing object of same type. Can improve performance when objects are reusable.
 * @return {object}      A deep clone of the "from" object
 * @memberof CIQ
 */
CIQ.clone = function (from, to) {
	if (from === null || typeof from != "object") return from;
	var c = from.constructor;
	if (c == Date || c == RegExp || c == String || c == Number || c == Boolean)
		return new c(from.valueOf());
	if (c == Function)
		return function () {
			return from.apply(this, arguments);
		};

	if (!to) {
		try {
			to = new c();
		} catch (e0) {
			to = Object.create(Object.getPrototypeOf(from));
		}
	}

	for (var n in from) {
		to[n] = to[n] !== from[n] ? CIQ.clone(from[n], null) : to[n];
	}

	return to;
};

/**
 * Non recursive clone. This will only clone the top layer and is safe to use when objects contain DOM nodes.
 * @param  {object} from - Object to be cloned
 * @return {object}      A shallow clone of the "from" object
 * @memberof CIQ
 */
CIQ.shallowClone = function (from) {
	if (!from) return from;
	var to;
	if (from.constructor == Array) {
		to = new Array(from.length);
		for (var i = 0; i < from.length; i++) {
			to[i] = from[i];
		}
		return to;
	}
	to = {};
	for (var field in from) {
		to[field] = from[field];
	}
	return to;
};

/**
 * Accepts a default parameters object and sets the field values for the target *only if they are missing*.
 * Note that a value of null will not be overridden. Only undefined (missing) values will be overridden.
 * @param  {object} target The object needing potential default values
 * @param  {object} defaults Default values
 * @return {object}        Returns the modified target object
 * @since  3.0.0
 * @example
 * var target={"color":"red"};
 * var defaults={"color":"blue", "shape":"triangle"};
 * CIQ.ensureDefaults(target, defaults);
 * >> target==={"color":"red", "shape":"triangle"};
 * @memberof CIQ
 */
CIQ.ensureDefaults = function (target, defaults) {
	for (var field in defaults) {
		if (typeof target[field] == "undefined") target[field] = defaults[field];
	}
	return target;
};

/**
 * Copies the contents of one object into another.
 * This is useful if there are pointers to the target object and you want to "replace" it with another object while preserving the pointer.
 * @param  {object} target The object being pointed to
 * @param  {object} source The object containing the values you want pointed at
 * @return {object}        Returns the modified target object
 * @since  7.1.0
 * @example
 * var target={"color":"red", "pattern":"solid"};
 * var source={"color":"blue", "shape":"triangle"};
 * CIQ.transferObject(target, source);
 * >> target==={"color":"blue", "shape":"triangle"};
 * >> target!==source;
 * @memberof CIQ
 */
CIQ.transferObject = function (target, source) {
	var field;
	for (field in target) {
		if (target.hasOwnProperty(field)) delete target[field];
	}
	for (field in source) {
		if (source.hasOwnProperty(field)) target[field] = source[field];
	}
	return target;
};

/**
 * Returns true if the objects are an exact match
 * @param  {object} a First object
 * @param  {object} b Second object
 * @param  {object} [exclude] Exclude these fields
 * @return {boolean}   True if they are an exact match
 * @memberof CIQ
 */
CIQ.equals = function (a, b, exclude) {
	if (a === b) return true;
	if (!a && b) return false;
	if (a && !b) return false;
	if (typeof a !== typeof b) return false;
	const fields = [...new Set(Object.keys(a).concat(Object.keys(b)))];
	for (let field of fields) {
		if (exclude && exclude[field]) continue;
		if (typeof a[field] === "object") {
			if (CIQ.equals(a[field], b[field])) continue;
			return false;
		}
		if (b[field] != a[field]) return false;
	}
	return true;
};

/**
 * Returns true if an object has no members
 * @param  {object}  o A JavaScript object
 * @return {boolean}   True if there are no members in the object
 * @memberof CIQ
 */
CIQ.isEmpty = function (o) {
	for (var p in o) {
		if (o.hasOwnProperty(p)) {
			return false;
		}
	}
	return true;
};

/**
 * Convenience function returns the first property in an object. Note that while this works in all known browsers
 * the EMCA spec does not guarantee that the order of members in an object remain static. This method should therefore
 * be avoided. When ordering is important use an Array!
 * @param  {object} o A JavaScript object
 * @return {object}   The first element in the object or null if it is empty
 * @memberof CIQ
 */
CIQ.first = function (o) {
	for (var p in o) {
		return p;
	}
	return null;
};

/**
 * Convenience function for returning the last property in an object. Note that while this works in all known browsers
 * the EMCA spec does not guarantee that the order of members in an object remain static. This method should therefore
 * be avoiding. When ordering is important use an Array!
 * @param  {object} o A JavaScript object
 * @return {object}   The final member of the object or null if the object is empty
 * @memberof CIQ
 */
CIQ.last = function (o) {
	var l = null;
	for (var p in o) {
		l = p;
	}
	return l;
};

/**
 * Returns the number of members in an object
 * @param  {object} o A valid JavaScript object
 * @return {number}   The number of members in the object
 * @memberof CIQ
 */
CIQ.objLength = function (o) {
	if (!o) return 0;
	var i = 0;
	for (var p in o) {
		i++;
	}
	return i;
};

/**
 * Given a dot notation string, we want to navigate to the location
 * in a base object, creating the path along the way
 * @param  {object} base      Base object.
 * @param  {string} extension String in dot notation
 * @return {object}           A tuple containing obj and member
 * @memberof CIQ
 * @since  2015-11-1
 * @example
 * var tuple=CIQ.deriveFromObjectChain(stx.layout, "pandf.box");
 * tuple.obj===stx.layout.pandf
 * tuble.member==="box"
 * tuple.obj[tuple.member]=3;  // stx.layout.pandf.box=3
 */
CIQ.deriveFromObjectChain = function (base, extension) {
	if (extension.indexOf(".") == -1) {
		return { obj: base, member: extension };
	}
	var objectString = extension.split(".");
	for (var i = 0; i < objectString.length - 1; i++) {
		var objStr = objectString[i];
		if (!base[objStr] && base[objStr] !== 0) base[objStr] = {};
		base = base[objStr];
	}
	return { obj: base, member: objectString[i] };
};

/**
 * Create arrow notation strings (field-->property) of a given field and an array of properties
 * Used to create a set of object properties in string format for later use by CIQ.existsInObjectChain
 * Its main use is to pass field names into {@link CIQ.ChartEngine#determineMinMax}.
 * @param  {string} field      Base object.
 * @param  {array} properties 	Array of strings representing properties
 * @return {array}           Array of object properties expressed in arrow notation (field-->property)
 * @memberof CIQ
 * @since  5.1.0
 * @example
 * var fields=CIQ.createObjectChainNames("ABC.D",["High","Low"]);
 * fields===["ABC.D-->High","ABC.D-->Low"]
 */
CIQ.createObjectChainNames = function (field, properties) {
	var ret = [];
	for (var p = 0; p < properties.length; p++) {
		ret.push(field + "-->" + properties[p]);
	}
	return ret;
};

/**
 * Return root of arrow notation string (field-->property)
 * @param  {string} chain      Arrow notation string.
 * @return {string}           Base object in string
 * @memberof CIQ
 * @since 8.4.0
 * @example
 * var root=CIQ.getObjectChainRoot("ABC.D-->Low");
 * root==="ABC.D"
 */
CIQ.getObjectChainRoot = function (chain) {
	if (!chain) return null;
	return chain.split("-->")[0];
};

/**
 * Given an arrow notation string (a-->b-->c), we want to navigate to the location
 * in a base object, to see if it exists
 * @param  {object} base      Base object.
 * @param  {string} extension String in arrow notation
 * @return {object}           A tuple containing obj and member; a null will be returned if path does not exist
 * @memberof CIQ
 * @since  5.1.0
 * @example
 * var tuple=CIQ.existsInObjectChain(stx.dataSegment[0], "ABC.D-->High");
 * tuple.obj===stx.dataSegment[0]["ABC.D"]
 * tuple.member==="High"
 * tuple.obj[tuple.member]=28.7;  // stx.dataSegment[0]["ABC.D"].High=28.7
 */
CIQ.existsInObjectChain = function (base, extension) {
	var value;
	if (extension.indexOf("-->") == -1) {
		value = base[extension];
		if (!value && value !== 0) return null;
		return { obj: base, member: extension };
	}
	var objectString = extension.split("-->");
	for (var i = 0; i < objectString.length; i++) {
		value = base[objectString[i]];
		if (!value && value !== 0) return null;
		if (i < objectString.length - 1) base = value;
		else return { obj: base, member: objectString[i] };
	}
};

/**
 * Replacement for isPrototypeOf and instanceof so that both types of inheritance can be checked
 * @param {object} child The object instance to check
 * @param {object} parent Prototype
 * @return {boolean} True if the object is derived from the parent
 * @memberof CIQ
 * @since 07/01/2015
 */
CIQ.derivedFrom = function (child, parent) {
	if (parent.isPrototypeOf(child)) return true;
	if (child instanceof parent) return true;
	return false;
};

/**
 * This method will iterate through the object and replace all of the fields
 * using the mapping object. This would generally be used to compress an object
 * for serialization. so that for instance "lineWidth" becomes "lw". This method
 * is called recursively.
 * @param {object} obj Object to compress
 * @param {object} mapping Object containing name value pairs. Each name will be replaced with its corresponding value in the object.
 * @return {object} The newly compressed object
 * @memberof CIQ
 */
CIQ.replaceFields = function (obj, mapping) {
	if (!obj) return obj;
	var newObj = {};
	for (var field in obj) {
		var value = obj[field];
		var replaced = mapping[field];
		if (!replaced) replaced = field;
		if (value && typeof value == "object") {
			if (value.constructor == Array) {
				var arr = (newObj[replaced] = new Array(value.length));
				for (var i = 0; i < arr.length; i++) {
					var val = value[i];
					if (typeof val == "object") {
						arr[i] = CIQ.replaceFields(val, mapping);
					} else {
						arr[i] = val;
					}
				}
			} else {
				newObj[replaced] = CIQ.replaceFields(value, mapping);
			}
		} else {
			newObj[replaced] = value;
		}
	}
	return newObj;
};

/**
 * Returns an object copy with any null values removed
 * @param  {object} obj Object to remove nulls
 * @return {object}     Object with nulls removed
 * @memberof CIQ
 */
CIQ.removeNullValues = function (obj) {
	var n = CIQ.clone(obj);
	for (var f in n) {
		if (!n[f]) delete n[f];
	}
	return n;
};

/**
 * This method reverses the fields and values in an object
 * @param {object} obj Object to reverse
 * @return {object} The reversed object
 * @memberof CIQ
 * @example reverseObject({ one: "a", two: "b" }) // returns { a: "one", b: "two" }
 */
CIQ.reverseObject = function (obj) {
	var newObj = {};
	for (var field in obj) {
		newObj[obj[field]] = field;
	}
	return newObj;
};

/**
 * Accesses a property, method, or array in a namespace.
 *
 * Approximates optional chaining, checking whether the object at the end of `namespace` +
 * `path` exists before returning it.
 *
 * @param {object} namespace Namespace to access.
 * @param {string} path String in dot notation representing extension of the namespace to a
 * 		desired property, method, or array.
 * @param {*} [defaultValue] The value returned if the requested expression does not exist.
 * 		If the requested expression is a function, set `defaultValue` to a function (usually
 * 		`function(){}`) that can be run with any required arguments. If the requested
 * 		expression is an array, set `defaultValue` to a default array, usually `[]`.
 * @return {*} The expression sought by combining the namespace and path. If the expression
 * 		does not exist, returns `defaultValue` (if provided), otherwise returns `undefined`.
 *
 * @memberof CIQ
 * @since 8.0.0
 *
 * @example
 * // Accesses CIQ.Studies.studyLibrary.rsi if safe to do so (if exists).
 * CIQ.getFromNS(CIQ.Studies, "studyLibrary.rsi");
 * // or
 * CIQ.getFromNS(CIQ, "Studies.studyLibrary.rsi");
 *
 * @example
 * // Accesses Math.Matrix.ScalarOperations.dotProduct(mA, mB) if safe to do so (if exists).
 * // Returns 12 if Math.Matrix.ScalarOperations.dotProduct does not exist.
 * CIQ.getFromNS(Math, "Matrix.ScalarOperations.dotProduct", (a,b)=>a*b)(3, 4);
 */
CIQ.getFromNS = (namespace, path, defaultValue) => {
	if (namespace) {
		var base = namespace,
			objectString = path.split(".");
		for (var i = 0; i < objectString.length; i++) {
			var objStr = objectString[i];
			if (typeof base[objStr] === "undefined") break;
			base = base[objStr];
		}
		if (i === objectString.length) return base;
	}
	return undefined || defaultValue;
};

/**
 * Curried {@link CIQ.getFromNS} expecting a function to be returned if `obj` + `path` is not
 * found.
 *
 * @param {object} obj Namespace to access.
 * @param {string} path String in dot notation representing extension of the namespace to
 * 		the desired function.
 * @param {*} [defaultValue] The value returned if the requested function does not exist.
 * @return {function} The function sought by combining the namespace and path. If the
 * 		function does not exist, returns `function(){return defaultValue;}`.
 *
 * @memberof CIQ
 * @since 8.0.0
 *
 * @example
 * // Invokes Math.Matrix.ScalarOperations.dotProduct with arguments (mA, mB) if safe to do so (if exists).
 * // Assigns NaN to the result if Math.Matrix.ScalarOperations.dotProduct does not exist.
 * let result=getFnFromNS(Math, "Matrix.ScalarOperations.dotProduct", NaN)(mA, mB);
 */
CIQ.getFnFromNS = (obj, path, defaultValue) => {
	return CIQ.getFromNS(obj, path, function () {
		return defaultValue;
	}); // use `function` to allow `new (CIQ.getFromNS())(...) syntax
};

/**
 * Curried {@link CIQ.getFromNS} expecting the namespace to be {@link CIQ}.
 *
 * @param {string} path String in dot notation representing extension of the {@link CIQ}
 * 		namespace to a desired property, method, or array.
 * @param {*} [defaultValue] The value returned if the requested expression does not exist.
 * 		If the requested expression is a function, set `defaultValue` to a function (usually
 * 		`function(){}`) that can be run with any required arguments. If the requested
 * 		expression is an array, set `defaultValue` to a default array, usually `[]`.
 * @return {*} The expression sought by combining the {@link CIQ} namespace and the path. If
 * 		the expression does not exist, returns `defaultValue` (if provided), otherwise returns
 * 		undefined.
 *
 * @memberof CIQ
 * @since 8.0.0
 *
 * @example
 * // Accesses CIQ.Studies.studyLibrary.rsi if safe to do so (if exists).
 * CIQ.get("Studies.studyLibrary.rsi");
 * // Returns null if CIQ.Studies.studyLibrary.rsi does not exist.
 * CIQ.get("Studies.studyLibrary.rsi", null);
 */
CIQ.get = (path, defaultValue) => {
	return CIQ.getFromNS(CIQ, path, defaultValue);
};

/**
 * Curried {@link CIQ.getFromNS} expecting the namespace to be {@link CIQ} and a function to be
 * returned.
 *
 * @param {string} path String in dot notation representing extension of the {@link CIQ}
 * 		namespace to the desired function.
 * @param {*} [defaultValue] The value returned if the requested function does not exist.
 * @return {function} The function sought by combining the {@link CIQ} namespace and the path.
 * 		If the function does not exist, returns `function(){return defaultValue;}`.
 *
 * @memberof CIQ
 * @since 8.0.0
 *
 * @example
 * // Returns the function if safe to do so (if exists).
 * // Assigns "error" to the result if CIQ.Studies.removeStudy does not exist.
 * getFn("Studies.removeStudy", "error");
 */
CIQ.getFn = (path, defaultValue) => {
	return CIQ.getFromNS(CIQ, path, function () {
		return defaultValue;
	}); // use `function` to allow `new (CIQ.getFromNS())(...) syntax
};

};


let __js_core_plotter_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * The Plotter is a device for managing complex drawing operations on the canvas. The HTML 5 canvas performs better when drawing
 * operations of the same color are batched (reducing the number of calls to the GPU). The plotter allows a developer to store those
 * operations in a normal control flow, and then have the Plotter deliver the primitives to the canvas. The plotter can also be used
 * as a caching mechanism for performing the same operations repeatedly. The y-axis of the chart uses this mechanism to boost performance.
 * @constructor
 * @name  CIQ.Plotter
 */
CIQ.Plotter = function () {
	this.seriesArray = [];
	this.seriesMap = {};
};

CIQ.extend(
	CIQ.Plotter.prototype,
	{
		/**
		 * Define a series to plot. A series is a specific color and referenced by name
		 * @param {string} name         Name of series
		 * @param {boolean} strokeOrFill If true then a stroke operation, otherwise a fill operation
		 * @param {string} color        A valid canvas color
		 * @param {number} [opacity=1]      A valid opacity from 0-1
		 * @param {number} [width=1]      A valid lineWidth from 1
		 * @param {string} [pattern=solid]      A valid pattern (solid, dotted, dashed)
		 * @memberof CIQ.Plotter#
		 * @since 4.0.0 added parameter pattern
		 */
		Series: function (name, strokeOrFill, color, opacity, width, pattern) {
			this.name = name;
			this.strokeOrFill = strokeOrFill;
			this.color = color;
			this.moves = [];
			this.text = [];
			if (!opacity || opacity > 1 || opacity < 0) opacity = 1;
			this.opacity = opacity;
			if (!width || width > 25 || width < 1) width = 1;
			this.width = width;
			this.pattern = CIQ.borderPatternToArray(width, pattern);
		},
		/**
		 * Create a series. This supports either a text color or CIQ.ChartEngine.Style object
		 * @see  CIQ.Plotter.Series
		 * @memberof CIQ.Plotter#
		 * @param {string} name Name of series
		 * @param {boolean} strokeOrFill If true then a stroke operation, otherwise a fill operation
		 * @param {object|string} colorOrStyle Color or object containing color, opacity, width, borderTopStyle (solid, dotted, dashed)
		 * @param {number} [opacity] A valid opacity from 0-1
		 * @param {number} [width=1] A valid lineWidth from 1
		 */
		newSeries: function (name, strokeOrFill, colorOrStyle, opacity, width) {
			var series;
			if (colorOrStyle.constructor == String)
				series = new this.Series(
					name,
					strokeOrFill,
					colorOrStyle,
					opacity,
					width
				);
			else
				series = new this.Series(
					name,
					strokeOrFill,
					colorOrStyle.color,
					colorOrStyle.opacity,
					width >= 0 ? width : CIQ.stripPX(colorOrStyle.width),
					colorOrStyle.borderTopStyle
				);
			this.seriesArray.push(series);
			this.seriesMap[name] = series;
		},
		/**
		 * Clear out any moves or text stored in the plotter for series "name"
		 * @memberof CIQ.Plotter#
		 * @param {string} name Name of series to reset.  If omitted, will reset all series in plotter.
		 * @since 3.0.0
		 */
		reset: function (name) {
			for (var s in this.seriesMap) {
				if (name && name != s) continue;
				var series = this.seriesMap[s];
				if (series) {
					series.moves = [];
					series.text = [];
				}
			}
		},
		/**
		 * @param {string} name Name of series
		 * @param {number} x
		 * @param {number} y
		 * @memberof CIQ.Plotter#
		 */
		moveTo: function (name, x, y) {
			var series = this.seriesMap[name];
			series.moves.push({ action: "moveTo", x: x, y: y });
		},
		/**
		 * @param {string} name Name of series
		 * @param {number} x
		 * @param {number} y
		 * @memberof CIQ.Plotter#
		 */
		lineTo: function (name, x, y) {
			var series = this.seriesMap[name],
				pattern = series.pattern;
			series.moves.push({ action: "lineTo", x: x, y: y, pattern: pattern });
		},
		/**
		 * @param {string} name Name of series
		 * @param {number} x
		 * @param {number} y
		 * @param {string} pattern A valid pattern (solid, dotted, dashed)
		 * @memberof CIQ.Plotter#
		 */
		dashedLineTo: function (name, x, y, pattern) {
			var series = this.seriesMap[name];
			series.moves.push({ action: "lineTo", x: x, y: y, pattern: pattern });
		},
		/**
		 * @param {string} name Name of series
		 * @param {number} cx0 Control point x-coord
		 * @param {number} cy0 Control point y-coord
		 * @param {number} x
		 * @param {number} y
		 * @memberof CIQ.Plotter#
		 */
		quadraticCurveTo: function (name, cx0, cy0, x, y) {
			var series = this.seriesMap[name],
				pattern = series.pattern;
			series.moves.push({
				action: "quadraticCurveTo",
				x0: cx0,
				y0: cy0,
				x: x,
				y: y,
				pattern: pattern
			});
		},
		/**
		 * @param {string} name Name of series
		 * @param {number} cx0 First control point x-coord
		 * @param {number} cy0 First control point y-coord
		 * @param {number} cx1 Second control point x-coord
		 * @param {number} cy1 Second control point x-coord
		 * @param {number} x
		 * @param {number} y
		 * @memberof CIQ.Plotter#
		 * @since 4.0.0
		 */
		bezierCurveTo: function (name, cx0, cy0, cx1, cy1, x, y) {
			var series = this.seriesMap[name],
				pattern = series.pattern;
			series.moves.push({
				action: "bezierCurveTo",
				x0: cx0,
				y0: cy0,
				x1: cx1,
				y1: cy1,
				x: x,
				y: y,
				pattern: pattern
			});
		},
		/**
		 * Add text to be rendered with the drawing. Primarily used when the Plotter is used for caching since there is no
		 * performance benefit from batching text operations to the GPU. If specifying a bounding box, textBaseline="middle" is assumed
		 * @param {string} name Name of series
		 * @param {string} text The raw text to render
		 * @param {number} x    X position on canvas for text
		 * @param {number} y    Y position on canvas for text
		 * @param {string} [backgroundColor] Color to use on the box underneath the text
		 * @param {number} [width]  Width of bounding box
		 * @param {number} [height] Height of bounding box
		 * @memberof CIQ.Plotter#
		 */
		addText: function (name, text, x, y, backgroundColor, width, height) {
			var series = this.seriesMap[name];
			series.text.push({ text: text, x: x, y: y, bg: backgroundColor });
		},
		/**
		 * Renders the text objects. This is done after drawing primitives for each series.
		 * @private
		 * @memberof CIQ.Plotter#
		 */
		drawText: function (context, series) {
			for (var i = 0; i < series.text.length; i++) {
				var textObj = series.text[i];
				if (textObj.bg) {
					var w = textObj.width
						? textObj.width
						: context.measureText(textObj.text).width;
					var h = textObj.height ? textObj.height : 12;
					var prev = context.fillStyle;
					context.fillStyle = textObj.bg;
					if (context.textAlign == "right") {
						context.fillRect(textObj.x, textObj.y - h / 2, -w, -h);
					} else {
						context.fillRect(textObj.x, textObj.y - h / 2, w, h);
					}
					context.fillStyle = prev;
				}
				context.fillText(textObj.text, textObj.x, textObj.y);
			}
		},
		/**
		 * Render the plotter. All of the stored operations are sent to the canvas. This operation stores and restores
		 * global canvas parameters such as fillStyle, strokeStyle and globalAlpha.
		 * @param  {object} context A valid HTML canvas context
		 * @param  {string} [name]    Optionally render only a specific series. If null or not provided, then all series will be rendered.
		 * @memberof CIQ.Plotter#
		 */
		draw: function (context, name) {
			var prevWidth = context.lineWidth;
			var prevFillStyle = context.fillStyle;
			var prevStrokeStyle = context.strokeStyle;
			var prevGlobalAlpha = context.globalAlpha;
			for (var i = 0; i < this.seriesArray.length; i++) {
				var series = this.seriesArray[i];
				if (name && series.name != name) continue;
				context.beginPath();
				context.lineWidth = series.width;
				context.globalAlpha = series.opacity;
				context.fillStyle = series.color;
				context.strokeStyle = series.color;
				context.save();
				var lastCoord = [0, 0];
				for (var j = 0; j < series.moves.length; j++) {
					var move = series.moves[j];
					if (!move.pattern) move.pattern = [];
					if (
						JSON.stringify(context.getLineDash()) !==
						JSON.stringify(move.pattern)
					) {
						context[series.strokeOrFill == "fill" ? "fill" : "stroke"]();
						context.beginPath();
						context.moveTo(lastCoord[0], lastCoord[1]);
					}
					context.setLineDash(move.pattern);
					context.lineDashOffset = 0;
					if (move.action == "quadraticCurveTo") {
						context[move.action](move.x0, move.y0, move.x, move.y);
					} else if (move.action == "bezierCurveTo") {
						context[move.action](
							move.x0,
							move.y0,
							move.x1,
							move.y1,
							move.x,
							move.y
						);
					} else {
						context[move.action](move.x, move.y);
					}
					lastCoord = [move.x, move.y];
				}
				context[series.strokeOrFill == "fill" ? "fill" : "stroke"]();
				context.closePath();
				context.restore();
				this.drawText(context, series);
				context.lineWidth = 1;
			}
			context.lineWidth = prevWidth;
			context.fillStyle = prevFillStyle;
			context.strokeStyle = prevStrokeStyle;
			context.globalAlpha = prevGlobalAlpha;
		}
	},
	true
);

};


let __js_core_renderer_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Base class for Renderers.
 *
 * A renderer is used to draw a complex visualization based on one or more "series" of data.
 * Renderers only need to be attached to a chart once. You can change symbols and continue using the same renderer.
 * The series associated with a renderer may change at any time, but the linked renderer itself remains the vehicle for display them.
 *
 * Series are associated with renderers by calling attachSeries().
 * More typically though, this is done automatically when {@link CIQ.ChartEngine#addSeries} is used.
 * The parameters for addSeries() are passed both to the renderer's constructor and also to attachSeries().
 *
 * To manually create a renderer use {@link CIQ.ChartEngine#setSeriesRenderer}
 *
 * @name  CIQ.Renderer
 * @constructor
 */
CIQ.Renderer = function () {};

/**
 * Factory for renderer.
 *
 * Will request a renderer from each renderer subclass until it is given one.
 * @param  {string} chartType Chart type name (usually from layout.chartType)
 * @param  {object} [params] Parameters to pass to the renderer constructor
 * @memberof CIQ.Renderer
 * @since 5.1.0
 * @private
 */
CIQ.Renderer.produce = function (chartType, params) {
	var renderer = null;
	if (chartType) {
		for (var r in CIQ.Renderer) {
			var rendererType = CIQ.Renderer[r];
			// Note: chartType has often been a combination of attributes connected with an underscore,
			// e.g. colored_bar, baseline_mountain.  So we split this legacy name to get the attributes.
			if (rendererType.requestNew)
				renderer = rendererType.requestNew(chartType.split("_"), params);
			if (renderer) return renderer;
		}
	}
	params.type = "line";
	return new CIQ.Renderer.Lines({ params: params });
};

CIQ.Renderer.colorFunctions = {};
/**
 * Registers a colorFunction for use with a renderer.
 *
 * It is necessary to register a color function if you want the function to be tied back to an imported renderer.
 * @param  {string} name The name of the registered function
 * @param  {function} funct The function to register
 * @memberof CIQ.Renderer
 */
CIQ.Renderer.registerColorFunction = function (name, funct) {
	CIQ.Renderer.colorFunctions[name] = funct;
};

/**
 * Unregisters a colorFunction for use with a renderer.
 *
 * @param  {string} name The name of the registered function
 * @memberof CIQ.Renderer
 */
CIQ.Renderer.unregisterColorFunction = function (name) {
	delete CIQ.Renderer.colorFunctions[name];
};

/**
 * You may set any initial parameters of the renderer here, and they will be used as default values in
 * the renderer's `params` object.
 * In order for these init values to take effect, they must be set on the prototype before the renderer is produced.
 * This object is useful when you do not have access to the constructor, like when using `stxx.setChartType`.
 *
 * @example
 * // Turns on heads-up display mode for the market depth chart.
 * CIQ.Renderer.prototype.init = { headsUp: true };
 * stxx.setChartType("marketdepth_mountain_volume");
 *
 * @type object
 * @default
 * @memberof CIQ.Renderer
 * @since 8.4.0
 */
CIQ.Renderer.prototype.init = {};

/**
 * If your renderer manages a y-axis then the necessary adjustments to its properties should be made here.
 *
 * @memberof CIQ.Renderer
 * @since 5.2.0
 */
CIQ.Renderer.prototype.adjustYAxis = function () {};

/**
 * Perform drawing operations here.
 * @memberof CIQ.Renderer
 */
CIQ.Renderer.prototype.draw = function () {};

/**
 * Draws one series from the renderer.
 *
 * Called by {@link CIQ.ChartEngine.AdvancedInjectable#drawSeries}
 * @param  {CIQ.ChartEngine.Chart} chart The chart object to draw the renderers upon
 * @param {object} [parameters] Parameters used to draw the series, depends on the renderer type
 * @param {string} [parameters.panel] Name of panel to draw the series upon
 * @memberof CIQ.Renderer
 * @since 5.1.0
 */
CIQ.Renderer.prototype.drawIndividualSeries = function (chart, parameters) {};

/**
 * Default constructor for a renderer. Override this if desired.
 * @param {object} config Configuration for the renderer.
 * @param {function} [config.callback] Callback function to perform activity post-drawing, for example, creating a legend. It will be called with an object containing the list of instruments and corresponding colors.
 * @param {string} [config.id] Handle to access the rendering in the future.  If not provided, one will be generated.
 * @param {object} [config.params] Parameters to control the renderer itself
 * @param {string} [config.params.name="Data"] Name of the renderer. This is used when displaying error message on screen
 * @param {string} [config.params.panel="chart"] The name of the panel to put the rendering on.
 * @param {boolean} [config.params.overChart=true] If set to false, will draw the rendering behind the main chart rather than over it. By default, rendering will be as overlay on the main chart.
 * @param {boolean} [config.params.yAxis] Y-axis object to use for the series.
 * @param {number} [config.params.opacity=1] Opacity of the rendering as a whole.  Can be overridden by an opacity set for a series.  Valid values are 0.0-1.0. <br><b>Not applicable on [Lines]{@link CIQ.Renderer.Lines} with a `type` of `mountain`; use an "RGBA" color instead.</b>
 * @param {object} [config.params.binding] Allows the use of the study output colors within the renderer. See an example in the [Using Renderers to Display Study Output](tutorial-Using%20and%20Customizing%20Studies%20-%20Creating%20New%20Studies.html#Using_Renderers) section of the Studies tutorial.
 * @memberof CIQ.Renderer
 * @since 5.2.0 `config.params.binding` parameter added.
 * @example
 *	// add multiple series and attach to a custom y-axis on the left.
 *	// See this example working here : https://jsfiddle.net/chartiq/b6pkzrad
 *
 *	// note how the addSeries callback is used to ensure the data is present before the series is displayed
 *
 *	//create the custom axis
 *	var axis=new CIQ.ChartEngine.YAxis();
 *	axis.position="left";
 *	axis.textStyle="#FFBE00";
 *	axis.decimalPlaces=0;			// no decimal places on the axis labels
 *	axis.maxDecimalPlaces=0;		// no decimal places on the last price pointer
 *
 *	//create the renderer
 *	var renderer=stxx.setSeriesRenderer(new CIQ.Renderer.Lines({params:{name:"my-renderer", type:"mountain", yAxis:axis}}));
 *
 *	// create your series and attach them to the chart when the data is loaded.
 *	stxx.addSeries("NOK", {display:"NOK",width:4},function(){
 *		renderer.attachSeries("NOK", "#FFBE00").ready();
 *	});
 *
 *	stxx.addSeries("SNE", {display:"Sony",width:4},function(){
 *		renderer.attachSeries("SNE", "#FF9300").ready();
 *	});
 */
CIQ.Renderer.prototype.construct = function (config) {
	if (!config) config = {};
	var params = config.params ? config.params : {};
	if (this.init) CIQ.ensureDefaults(params, this.init);
	if (!params.name) params.name = CIQ.uniqueID();
	if (!params.heightPercentage) params.heightPercentage = 0.7;
	if (!params.opacity) params.opacity = 1;
	if (params.highlightable !== false) params.highlightable = true;
	if (!params.panel) params.panel = "chart";
	if (params.yAxis) {
		params.yAxis = new CIQ.ChartEngine.YAxis(params.yAxis);
		if (!params.yAxis.name) params.yAxis.name = params.name;
	}
	this.cb = config.callback;
	this.params = params;
	this.seriesParams = [];
	this.caches = {};
	this.colors = {};
};

/**
 * Attach a series to the renderer.
 *
 * This assumes that the series data *is already in the dataSet* and simply connects it to the renderer with the specified parameters.
 * See {@link CIQ.ChartEngine#addSeries} for details on how to create a series.
 *
 * Any parameters defined when attaching a series, such as colors, will supersede any defined when a series was created. This allows you to attach the same series to multiple renderers, each rendering displaying the same series data in a different color, for example.
 *
 * @param  {string} id The name of the series.
 * @param  {object|string} parameters Settings to control color and opacity of each series in the group. See {@link CIQ.ChartEngine#addSeries} for implementation examples. <P>Argument format can be:<ul><li> a `string` containing the color</li><li> or a more granular `object` having the following members:</li></ul>
 * @param  {string} [parameters.field] The name of the field. Name of the field in the dataSet to use for the series.  If omitted, defaults to id
 * @param  {string} [parameters.fill_color_up] Color to use to fill the part when the Close is higher than the previous (or 'transparent' to not display)
 * @param  {string} [parameters.border_color_up] Color to use to draw the border when the Close is higher than the previous (or 'transparent' to not display)
 * @param  {number} [parameters.opacity_up=.4] Opacity to use to fill the part when the Close is higher than the previous (0.0-1.0)
 * @param  {string} [parameters.border_color_even] Color to use to draw the border when the Close is equal to the previous (or 'transparent' to not display)
 * @param  {string} [parameters.fill_color_down] Color to use to fill the part when the Close is lower than the previous (or 'transparent' to not display)
 * @param  {string} [parameters.border_color_down] Color to use to draw the border when the Close is lower than the previous (or 'transparent' to not display)
 * @param  {number} [parameters.opacity_down=.4] Opacity to use to fill the part when the Close is lower than the previous (0.0-1.0)
 * @param  {string} [parameters.color] Color to use to fill the series in the absence of specific up/down color.
 * @param  {string} [parameters.border_color] Color to use to draw the border in the series in the absence of specific up/down color.
 * @param  {string} [parameters.fillStyle] Color to use to fill the mountain chart.
 * @param  {string} [parameters.baseColor] Color to use at the bottom of the mountain chart, will create a gradient with bgColor
 * @param  {string} [parameters.bgColor] Color to use at the top of the mountain chart, will create a gradient if baseColor is specified.  Otherwise, will fill the mountain solid with this color unless fillStyle is specified
 * @param  {boolean} [parameters.permanent] Whether the attached series can be removed by the user (lines and bars only). By default, the series will not be permanent. This flag (including the default) will supersede the permanent flag of the actual series. As such, a series will not be permanent unless you set this flag to 'true', even if the series being attached was flaged set as permanent when defined. This gives the renderer most control over the rendering process.
 * @return {CIQ.Renderer}            Returns a copy of this for chaining
 * @since 5.1.0 Added `fillStyle`, `baseColor`, and `bgColor` parameters.
 * @memberof CIQ.Renderer
 * @example
 *	// add multiple series and attach to a custom y-axis on the left.
 *	// See this example working here : https://jsfiddle.net/chartiq/b6pkzrad
 *
 *	// note how the addSeries callback is used to ensure the data is present before the series is displayed
 *
 *	//create the custom axis
 *	var axis=new CIQ.ChartEngine.YAxis();
 *	axis.position="left";
 *	axis.textStyle="#FFBE00";
 *	axis.decimalPlaces=0;			// no decimal places on the axis labels
 *	axis.maxDecimalPlaces=0;		// no decimal places on the last price pointer
 *
 *	//create the renderer
 *	var renderer=stxx.setSeriesRenderer(new CIQ.Renderer.Lines({params:{name:"my-renderer", type:"mountain", yAxis:axis}}));
 *
 *	// create your series and attach them to the chart when the data is loaded.
 *	stxx.addSeries("NOK", {display:"NOK",width:4},function(){
 *		renderer.attachSeries("NOK", "#FFBE00").ready();
 *	});
 *
 *	stxx.addSeries("SNE", {display:"Sony",width:4},function(){
 *		renderer.attachSeries("SNE", "#FF9300").ready();
 *	});
 */
CIQ.Renderer.prototype.attachSeries = function (id, parameters) {
	var stx = this.stx;
	if (!stx) return this;
	var series = stx.chart.series[id];
	if (!series) series = { parameters: {} };
	var rParams = this.params,
		sParams = series.parameters;
	var sp = {
		id: id,
		chartType: rParams.type,
		display: sParams.display,
		border_color_up: rParams.defaultBorders ? "auto" : null,
		fill_color_up: sParams.color,
		opacity_up: rParams.opacity,
		border_color_down: rParams.defaultBorders ? "auto" : null,
		fill_color_down: sParams.color,
		opacity_down: rParams.opacity,
		color: sParams.color,
		symbol: sParams.symbol,
		symbolObject: CIQ.clone(sParams.symbolObject)
	};
	if (typeof parameters == "string") {
		sp.color = sp.fill_color_down = sp.fill_color_up = parameters;
	} else if (typeof parameters == "object") {
		for (var p in parameters) sp[p] = parameters[p];
		var c = sp.color,
			bc = sp.border_color;
		if (c) {
			if (!sp.fill_color_up) sp.fill_color_up = c;
			if (!sp.fill_color_down) sp.fill_color_down = c;
			if (!sp.fill_color_even) sp.fill_color_even = c;
		}
		if (bc) {
			if (!sp.border_color_up) sp.border_color_up = bc;
			if (!sp.border_color_down) sp.border_color_down = bc;
			if (!sp.border_color_even) sp.border_color_even = bc;
		}
	}
	if (sp.symbol && sp.field != sp.symbol) {
		sp.subField = sp.field;
		sp.field = sp.symbol;
	}
	//if(!sp.symbol && !sp.field && !this.highLowBars) sp.field="Close";
	if (!sp.id) sp.id = CIQ.uniqueID();

	var i = 0;
	for (; i < this.seriesParams.length; ++i) {
		if (this.seriesParams[i].id === sp.id) {
			this.removeSeries(sp.id, true);
			break;
		}
	}
	this.seriesParams.splice(i, 0, sp);

	if (sp.fill_color_up != sp.fill_color_down) {
		this.colors[id + " up"] = {
			color: sp.fill_color_up,
			opacity: sp.opacity_up,
			display: sp.display ? sp.display + " up" : id + " up"
		};
		this.colors[id + " dn"] = {
			color: sp.fill_color_down,
			opacity: sp.opacity_down,
			display: sp.display ? sp.display + " down" : id + " down"
		};
	} else {
		this.colors[id] = {
			color: sp.fill_color_up,
			opacity: sp.opacity_up,
			display: sp.display ? sp.display : id
		};
	}

	var panelName = rParams.panel;
	if (!stx.panels[panelName]) {
		var yAxis = rParams.yAxis;
		if (!yAxis) {
			yAxis = new CIQ.ChartEngine.YAxis();
			yAxis.needsInitialPadding = true;
		}
		yAxis.name = panelName;
		stx.createPanel(panelName, panelName, null, null, yAxis);
	} else {
		if (rParams.yAxis) {
			rParams.yAxis = stx.addYAxis(stx.panels[panelName], rParams.yAxis);
			rParams.yAxis.needsInitialPadding = true;
			sParams.yAxis = rParams.yAxis;
			stx.resizeChart();
		} else if (sp.yAxis) {
			rParams.yAxis = sp.yAxis;
		}
	}

	return this;
};

/**
 * Removes a series from the renderer.
 *
 * The yAxis and actual series data will also be removed if no longer used by any other renderers.
 * When the last series is removed from the renderer, the chart it is attached to will remove the renderer.
 * Will [turn off comparison mode]{@link CIQ.ChartEngine#setComparison} if there are no more comparisons on the chart if {@link CIQ.ChartEngine.Chart#forcePercentComparison} is true.
 * @param  {string} id          The field name of the series.
 * @param  {boolean} [preserveSeries=false] Set to `true` to keep the series data in the CIQ.ChartEngine objects, otherwise it iwll be deleted if no
 * @return {CIQ.Renderer}                A copy of this for chaining
 * @memberof CIQ.Renderer
 * @since
 * - 2015-07-01 'preserveSeries' is now available.
 * - 3.0.0 Series is now removed even if series parameter `permanent` is set to true. The permanent parameter only prevents right click user interaction and not programmatically requested removals.
 * - 4.0.0 Series data is now totally removed from masterData if no longer used by any other renderers.
 * - 6.2.0 No longer force 'percent'/'linear', when adding/removing comparison series, respectively, unless {@link CIQ.ChartEngine.Chart#forcePercentComparison} is true. This allows for backwards compatibility with previous UI modules.
 */
CIQ.Renderer.prototype.removeSeries = function (id, preserveSeries) {
	var spliceIndex = null,
		comparing = false;
	var stx = this.stx,
		chart = stx.chart;
	for (var r in chart.seriesRenderers) {
		var renderer = chart.seriesRenderers[r];
		for (var sp = 0; sp < renderer.seriesParams.length; sp++) {
			var seriesParams = renderer.seriesParams[sp];
			if (seriesParams.id == id && this === renderer) spliceIndex = sp;
			else if (
				seriesParams.isComparison &&
				seriesParams.panel == chart.panel.name &&
				(!seriesParams.yAxis || seriesParams.yAxis == chart.yAxis)
			)
				comparing = true;
		}
	}
	if (spliceIndex !== null) {
		if (
			chart.forcePercentComparison &&
			!comparing &&
			this.seriesParams[spliceIndex].isComparison &&
			stx.layout.chartScale != "linear"
		) {
			stx.setChartScale();
		}
		this.seriesParams.splice(spliceIndex, 1);
	}

	delete this.colors[id + " up"];
	delete this.colors[id + " dn"];
	delete this.colors[id];

	if (!preserveSeries) {
		//if(!stx.chart.series[id] || !stx.chart.series[id].parameters.permanent){
		var seriesInUse;
		for (var plot in chart.seriesRenderers) {
			var myPlot = chart.seriesRenderers[plot];
			for (var s = 0; s < myPlot.seriesParams.length; s++) {
				if (myPlot.seriesParams[s].id == id) {
					seriesInUse = true;
					break;
				}
				seriesInUse = false;
			}
			if (seriesInUse) break;
		}
		if (seriesInUse === false || spliceIndex !== null) {
			if (stx.deleteSeries) stx.deleteSeries(id, chart);
		}
		//}
	}
	stx.deleteYAxisIfUnused(stx.panels[this.params.panel], this.params.yAxis);
	stx.resizeChart();
	return this;
};

/**
 * Modifies the renderer parameters.
 *
 * Use this function to trigger side effects from modifying parameters instead of manually
 * updating the parameters.
 *
 * @param {object} parameters Specifies the renderer parameters to be updated.
 *
 * @memberof CIQ.Renderer
 * @private
 * @since 8.2.0
 */
CIQ.Renderer.prototype.modifyRenderer = function (parameters) {
	const original = this.params;
	let { stx } = this;

	for (let param in parameters) {
		const value = parameters[param];
		switch (param) {
			case "baseline":
				if (value) {
					if (typeof value === "object") {
						this.params.baseline = CIQ.ensureDefaults(
							value,
							CIQ.ChartEngine.Chart.prototype.baseline
						);
					}
					stx.registerBaselineToHelper(this);
				} else {
					stx.removeBaselineFromHelper(this);
				}
				break;

			case "type":
				this.params.type = value;
				break;
			case "style":
				this.params.style = value;
				break;
			default:
				break;
		}
	}
};

/**
 * Returns an array of all renderers that depend on a given renderer.
 *
 * A dependent renderer is one that has `params.dependentOf` set to another renderer's name.
 *
 * @param {CIQ.ChartEngine} stx A chart object.
 * @return {array} Array of dependent renderers.
 * @memberof CIQ.Renderer
 * @since 7.3.0
 */
CIQ.Renderer.prototype.getDependents = function (stx) {
	var dependents = [];
	for (var r in stx.chart.seriesRenderers) {
		var renderer = stx.chart.seriesRenderers[r];
		if (renderer.params.dependentOf == this.params.name)
			dependents.push(renderer);
	}
	return dependents;
};

/**
 * Returns whether the renderer can be dragged to another axis or panel.
 *
 * @param  {CIQ.ChartEngine} stx A chart object.
 * @return  {boolean} true, if not allowed to drag.
 * @memberof CIQ.Renderer
 * @since 7.3.0
 */
CIQ.Renderer.prototype.undraggable = function (stx) {
	if (this == stx.mainSeriesRenderer) return true;
	return this.params.dependentOf == stx.mainSeriesRenderer.params.name;
};

/**
 * Removes all series from the renderer and the y-axis from the panel if it is not being used by any current renderers.
 *
 * @param {boolean} [eraseData=false] Set to true to erase the actual series data in the CIQ.ChartEngine otherwise it will be retained
 * @return {CIQ.Renderer} A copy of this for chaining
 * @memberof CIQ.Renderer
 */
CIQ.Renderer.prototype.removeAllSeries = function (eraseData) {
	if (eraseData || this === this.stx.mainSeriesRenderer) {
		var arr = [];
		// Compile a list of all of the fields
		for (var sp = 0; sp < this.seriesParams.length; sp++) {
			arr.push(this.seriesParams[sp].id);
		}
		for (var i = 0; i < arr.length; i++) {
			this.removeSeries(arr[i]);
		}
	}
	this.seriesParams = [];
	this.colors = {};
	this.stx.deleteYAxisIfUnused(
		this.stx.panels[this.params.panel],
		this.params.yAxis
	);
	this.stx.resizeChart();

	return this;
};

/**
 * Returns the y-axis used by the renderer.
 * @param {CIQ.ChartEngine} stx chart engine object
 * @return {CIQ.ChartEngine.YAxis} Y-axis
 * @memberof CIQ.Renderer
 * @since 7.1.0
 */
CIQ.Renderer.prototype.getYAxis = function (stx) {
	var yAxis;
	if (this.params) {
		if (this.params.yAxis) yAxis = this.params.yAxis;
		else {
			var panel = stx.panels[this.params.panel];
			if (!panel) return false;
			yAxis = panel.yAxis;
		}
	} else yAxis = stx.chart.panel.yAxis;
	return yAxis;
};

/**
 * Call this to immediately render the visualization, at the end of a chain of commands.
 * @return {CIQ.Renderer} A copy of this for chaining
 * @memberof CIQ.Renderer
 */
CIQ.Renderer.prototype.ready = function () {
	this.stx.createDataSet();
	this.stx.draw();
	return this;
};

/**
 * Creates a lines renderer.
 *
 * This renderer draws lines of various color, thickness, and pattern on a chart.
 *
 * The `Lines` renderer is used to create the following chart types (including colored versions):
 * line, mountain, baseline, wave, and step chart.
 *
 * **Note:** By default, the renderer displays lines as underlays. As such, they appear below any
 * other studies or drawings.
 *
 * See {@link CIQ.Renderer#construct} for parameters required by all renderers.
 *
 * @param {object} config Configuration object for the renderer.
 * @param {object} [config.params] Parameters to control the renderer itself.
 * @param {number} [config.params.width] Width of the rendered line.
 * @param {string} [config.params.type="line"] Type of rendering; "line", "mountain", or
 * 		["wave"]{@link CIQ.ChartEngine#drawWaveChart}.
 * @param {boolean} [config.params.useChartLegend=false] Set to true to use the built-in canvas
 * 		legend renderer. See {@link CIQ.ChartEngine.Chart#legendRenderer};
 * @param {boolean} [config.params.highlightable=true] Set to false to prevent selection of series
 * 		via hover.
 * @param {string} [config.params.style] Style name to use in lieu of defaults for the type.
 * @param {boolean} [config.params.step] Specifies a step chart.
 * @param {boolean|CIQ.ChartEngine.Chart#baseline} [config.params.baseline] Specifies a baseline
 * 		chart. If a baseline object is set, then the renderer uses those properties instead of the
 * 		chart's baseline when rendering. When true, the renderer falls back to the chart's baseline
 * 		properties for rendering.
 * @param {boolean} [config.params.colored] Specifies the use of a color function (see
 * 		{@link CIQ.Renderer.registerColorFunction}) to determine the color of the segment.
 * @param {boolean} [config.params.vertex] Specifies drawing a dot on every vertex.
 * @param {boolean} [config.params.vertex_color] Specifies a color for the vertices. If omitted,
 * 		uses the default color (see {@link CIQ.ChartEngine#getDefaultColor}).
 * @param {string} [config.params.colorFunction] Override string (or function) used to determine
 * 		color of bar. May be an actual function or a string name of the registered function (see
 * 		{@link CIQ.Renderer.registerColorFunction}).
 *
 * Common valid parameters for use by {@link CIQ.Renderer#attachSeries} (see also
 * {@link CIQ.ChartEngine#plotLine}):
 * - `color` &mdash; Specify the color for the line by name or in RGBA or hexadecimal format.
 * - `pattern` &mdash; Specify the pattern as an array. For instance, [5, 5] would be five pixels
 *    and then five empty pixels.
 * - `width` &mdash; Specify the width of the line.
 * - `baseColor` &mdash; Specify the color of the base of a mountain.
 * - `fillStyle` &mdash; Specify the color to fill a mountain (other than `color`).
 *
 * @constructor
 * @name CIQ.Renderer.Lines
 * @since
 * - 4.0.0 New `config.params.useChartLegend` added.
 * - 5.1.0 Removed subtype parameter, this will be determined internally from
 * 		`config.params.step=true`.
 * - 5.1.0 Added `highlightable`, `overChart`, `step`, `baseline`, `vertex`, `style`, `colored`,
 * 		and `colorFunction` parameters.
 * - 8.1.0 Added {@link CIQ.ChartEngine.Chart#baseline} type to `baseline` parameter. The new type
 * 		contains a `defaultLevel` property which can be set to the desired baseline value. See
 * 		example below.
 *
 * @example <caption>Create a renderer and set a custom baseline.</caption>
 * const baseLineRenderer = new CIQ.Renderer.Lines({
 *     params: {
 *         baseline: {defaultLevel: 45},
 *         yAxis: true
 *     }
 * });
 *
 * stxx.addSeries("GOOG");
 * stxx.setSeriesRenderer(baseLineRenderer).attachSeries("GOOG").ready();
 *
 * // or
 *
 * stxx.addSeries("GOOG", {baseline: {defaultLevel: 105}, color: "purple"});
 *
 * @example <caption>Add multiple series and attach to a custom y-axis on the left.</caption>
 * // See this example working here: https://jsfiddle.net/chartiq/b6pkzrad.
 *
 * // Note how the addSeries callback is used to ensure the data is present before the series is displayed.
 *
 * // Create the custom axis.
 * const axis = new CIQ.ChartEngine.YAxis();
 * axis.position = "left";
 * axis.textStyle = "#FFBE00";
 * axis.decimalPlaces = 0;  // No decimal places on the axis labels.
 * axis.maxDecimalPlaces = 0;  // No decimal places on the last price pointer.
 *
 * // Create the renderer.
 * const renderer = stxx.setSeriesRenderer(
 *     new CIQ.Renderer.Lines({
 *         params: {
 *             name: "my-renderer",
 *             type: "mountain",
 *             yAxis: axis
 *         }
 *     })
 * );
 *
 * // Create your series and attach them to the chart when the data is loaded.
 * stxx.addSeries("NOK", {display: "NOK", width: 4}, function() {
 *     renderer.attachSeries("NOK", "#FFBE00").ready();
 * });
 *
 * stxx.addSeries("SNE", {display: "Sony", width: 4}, function() {
 *     renderer.attachSeries("SNE", "#FF9300").ready();
 * });
 *
 * @example <caption>Remove a renderer and all associated data.</caption>
 * // This should only be necessary if you are also removing the chart itself.
 *
 * // Remove all series from the renderer, including series data from masterData.
 * renderer.removeAllSeries(true);
 *
 * // Detach the series renderer from the chart.
 * stxx.removeSeriesRenderer(renderer);
 *
 * // Delete the renderer itself.
 * renderer=null;
 *
 * @example <caption>Create a colored step baseline mountain with vertices.</caption>
 * const renderer = stxx.setSeriesRenderer(
 *     new CIQ.Renderer.Lines({
 *         params: {
 *             name: "my-renderer",
 *             type: "mountain",
 *             baseline: true,
 *             step: true,
 *             colored: true,
 *             vertex: true,
 *             yAxis: axis
 *         }
 *     })
 * );
 */
CIQ.Renderer.Lines = function (config) {
	this.construct(config);
	const { params } = this;
	if (!params.type) params.type = "line";
	if (!params.style) {
		switch (params.type) {
			case "mountain":
				if (params.baseline) params.style = "stx_baseline_delta_mountain";
				else if (params.colored) params.style = "stx_colored_mountain_chart";
				else params.style = "stx_mountain_chart";
				break;
			default:
				params.style = "stx_line_chart";
		}
	}
	this.supportsAnimation = true;
	if (params.type == "wave" || params.type == "channel") {
		// wave charts don't support these options and no gap support either.
		params.step = params.vertex = params.baseline = params.colored = false;
		this.highLowBars = this.barsHaveWidth = true;
		this.supportsAnimation = false;
	} else if (params.type == "step") {
		params.step = true;
	}
	let { baseline } = params;
	if (baseline && typeof baseline === "object") {
		CIQ.ensureDefaults(
			params.baseline,
			CIQ.ChartEngine.Chart.prototype.baseline
		);
	}
};
CIQ.inheritsFrom(CIQ.Renderer.Lines, CIQ.Renderer, false);

/**
 * Returns a new Lines renderer if the featureList calls for it
 * FeatureList should contain whatever features requested; valid features:
 * 	line, mountain, baseline (delta), step, vertex, colored, wave
 * Anything else is an invalid feature and will cause function to return null
 * Called by {@link CIQ.Renderer.produce} to create a renderer for the main series
 * @param {array} featureList List of rendering terms requested by the user, parsed from the chartType
 * @param {object} [params] Parameters used for the series to be created, used to create the renderer
 * @return {CIQ.Renderer.Lines} A new instance of the Lines renderer, if the featureList matches
 * @memberof CIQ.Renderer.Lines
 * @since 5.1.0
 */
CIQ.Renderer.Lines.requestNew = function (featureList, params) {
	var type = null,
		isStep = params.step,
		isColored = params.colored,
		isBaseline = params.baseline,
		isVertex = params.vertex;
	for (var pt = 0; pt < featureList.length; pt++) {
		var pType = featureList[pt];
		switch (pType) {
			case "line":
			case "mountain":
			case "wave":
			case "channel":
				type = pType;
				break;
			case "baseline":
				isBaseline = true;
				break;
			case "colored":
				isColored = true;
				break;
			case "step":
				isStep = true;
				break;
			case "vertex":
				isVertex = true;
				break;
			case "delta":
				break;
			default:
				return null; // invalid chart type for this renderer
		}
	}
	if (type === null && !isBaseline && !isStep) return null;

	return new CIQ.Renderer.Lines({
		params: CIQ.extend(params, {
			type: type,
			step: isStep,
			colored: isColored,
			baseline: isBaseline,
			vertex: isVertex
		})
	});
};

CIQ.Renderer.Lines.prototype.draw = function () {
	var stx = this.stx,
		panel = this.stx.panels[this.params.panel],
		chart = panel.chart;
	var seriesMap = {};
	var s,
		seriesParams = this.seriesParams;
	var colorFunction = this.params.colorFunction;
	function defaultColorFunction(param) {
		var stxLineUpColor =
			param.fill_color_up || stx.getCanvasColor("stx_line_up");
		var stxLineDownColor =
			param.fill_color_down || stx.getCanvasColor("stx_line_down");
		var stxLineColor = param.color || stx.getCanvasColor("stx_line_chart");
		return function (stx, quote, mode) {
			if (!quote.iqPrevClose && quote.iqPrevClose !== 0) return stxLineColor;
			if (quote.Close > quote.iqPrevClose) return stxLineUpColor;
			if (quote.Close < quote.iqPrevClose) return stxLineDownColor;
			return stxLineColor;
		};
	}
	for (s = 0; s < seriesParams.length; s++) {
		var sParam = seriesParams[s];
		if (this.params.colored) {
			var parts = ["_color_up", "_color_down", "_color"];
			for (var i = 0; i < parts.length; i++) {
				//if(!sParam["fill"+parts[i]]){
				var b = sParam["border" + parts[i]];
				if (b && b != "auto") sParam["fill" + parts[i]] = b;
				//}
			}
			if (!colorFunction) colorFunction = defaultColorFunction(sParam);
			this.params.colorFunction = colorFunction;
		}
		var defaultParams = {};
		if (chart.series[sParam.id]) {
			// make sure the series is still there.
			defaultParams = CIQ.clone(chart.series[sParam.id].parameters);
		}
		seriesMap[sParam.id] = {
			parameters: CIQ.extend(CIQ.extend(defaultParams, this.params), sParam),
			yValueCache: this.caches[sParam.id]
		};
		if (
			this == stx.mainSeriesRenderer &&
			chart.customChart &&
			chart.customChart.colorFunction
		) {
			seriesMap[sParam.id].parameters.colorFunction =
				chart.customChart.colorFunction;
		}
	}
	stx.drawSeries(chart, seriesMap, this.params.yAxis, this);
	for (s in seriesMap) {
		this.caches[s] = seriesMap[s].yValueCache;
	}
};

CIQ.Renderer.Lines.prototype.drawIndividualSeries = function (
	chart,
	parameters
) {
	if (parameters.invalid) return;
	var stx = this.stx,
		context = chart.context,
		rc = null;
	var colorFunction = parameters.colorFunction,
		panel = stx.panels[parameters.panel] || chart.panel;
	if (typeof colorFunction == "string") {
		colorFunction = CIQ.Renderer.colorFunctions[colorFunction];
		if (!colorFunction) return;
	}

	if (parameters.vertex) {
		context.save();
		context.lineJoin = "bevel";
	}
	if (parameters.type == "wave") {
		rc = stx.drawWaveChart(panel, parameters);
	} else if (parameters.baseline) {
		rc = stx.drawBaselineChart(panel, parameters);
		stx.positionBaselineHandle(this);
	} else if (parameters.type == "mountain") {
		parameters.returnObject = true;
		rc = stx.drawMountainChart(panel, parameters, colorFunction);
	} else if (parameters.type == "channel") {
		parameters.returnObject = true;
		rc = stx.drawChannelChart(panel, colorFunction, parameters);
	} else {
		parameters.returnObject = true;
		rc = stx.drawLineChart(panel, parameters.style, colorFunction, parameters);
	}
	if (parameters.vertex) {
		stx.scatter(panel, {
			yAxis: parameters.yAxis,
			field: parameters.symbol || parameters.field,
			subField: parameters.subField,
			symbol: parameters.symbol,
			color: parameters.vertex_color,
			highlight: parameters.highlight
		});
		context.restore();
	}
	return rc;
};

/**
 * Creates an OHLC renderer.
 *
 * **Note:** By default, the renderer displays bars as underlays. As such, they will appear below any other studies or drawings.
 *
 * The OHLC renderer is a base class for creating the following chart types:
 * - {@link CIQ.Renderer.HLC}
 * - {@link CIQ.Renderer.Bars}
 * - {@link CIQ.Renderer.Candles}
 * - {@link CIQ.Renderer.SimpleHistogram}
 * <br>and is normally not directly accessed.
 *
 * See {@link CIQ.Renderer#construct} for parameters required by all renderers
 * @param {object} config Config for renderer
 * @param  {object} [config.params] Parameters to control the renderer itself
 * @param  {string} [config.params.type] Type of rendering "bar", "candle". Not needed if `params.histogram` is set)
 * @param  {boolean} [config.params.useChartLegend=false] Set to true to use the built-in canvas legend renderer. See {@link CIQ.ChartEngine.Chart#legendRenderer};
 * @param  {string} [config.params.style] Style name to use in lieu of defaults for the type
 * @param  {boolean} [config.params.colored] For bar or hlc, specifies using a condition or colorFunction to determine color
 * @param  {boolean} [config.params.hollow] Specifies candles should be hollow candles
 * @param  {boolean} [config.params.volume] Specifies candles should be volume candles
 * @param  {boolean} [config.params.histogram] Specifies histogram chart (if set, `params.type` is not required). These are basic histograms that allow just one bar per tick; not to be confused with stackable histograms which require the more advanced {@link CIQ.Renderer.Histogram}
 * @param  {boolean} [config.params.hlc] Specifies bar chart, with just hlc data; no open tick
 * @param  {boolean} [config.params.gradient=true] Specifies histogram bars are to be drawn with a gradient; set to false to draw with solid colors
 * @param  {string} [config.params.colorBasis="close"] For bar/hlc charts, will compute color based on whether current close is higher or lower than previous close.  Set to "open" to compute this off the open rather than yesterday's close.
 * @param  {function} [config.params.colorFunction] Oerride function (or string) used to determine color of bar.  May be an actual function or a string name of the registered function (see {@link CIQ.Renderer.registerColorFunction})
 * @constructor
 * @name  CIQ.Renderer.OHLC
 * @since 5.1.0
 * @example
 	// Colored hlc chart
	var renderer=stxx.setSeriesRenderer(new CIQ.Renderer.OHLC({params:{name:"bars", type:"bar", hlc:true, colored:true}}));
 *
 */

CIQ.Renderer.OHLC = function (config) {
	this.construct(config);
	var params = this.params;
	if (!params.type) params.type = "candle";
	this.highLowBars = this.barsHaveWidth = this.standaloneBars = true;
	if (params.histogram) {
		params.type = "candle";
		this.highLowBars = false;
		params.volume = params.hollow = false;
	}
	if (params.type == "bar")
		params.volume = params.hollow = params.histogram = false;
	if (params.type == "candle") params.hlc = params.colored = false;
	if (params.volume) params.hollow = true;
};
CIQ.inheritsFrom(CIQ.Renderer.OHLC, CIQ.Renderer, false);

/**
 * Returns a new OHLC renderer if the featureList calls for it
 * FeatureList should contain whatever features requested; valid features:
 * 	bar, hlc, candle, colored, histogram, hollow, volume
 * Anything else is an invalid feature and will cause function to return null
 *
 * **Note:** If you are using the base package then the only valid features are: candle and histogram.
 *
 * Called by {@link CIQ.Renderer.produce} to create a renderer for the main series
 * @param {array} featureList List of rendering terms requested by the user, parsed from the chartType
 * @param {object} [params] Parameters used for the series to be created, used to create the renderer
 * @return {CIQ.Renderer.OHLC} A new instance of the OHLC renderer, if the featureList matches
 * @memberof CIQ.Renderer.OHLC
 * @since 5.1.0
 */
CIQ.Renderer.OHLC.requestNew = function (featureList, params) {
	var type = null,
		histogram = params.histogram;
	for (var pt = 0; pt < featureList.length; pt++) {
		var pType = featureList[pt];
		switch (pType) {
			case "candle":
				type = pType;
				break;
			case "histogram":
				histogram = true;
				type = "candle";
				break;
			default:
				return null; // invalid chartType for this renderer
		}
	}
	if (type === null) return null;

	return new CIQ.Renderer.OHLC({
		params: CIQ.extend(params, { type: type, histogram: histogram })
	});
};

/**
 * Returns array of chartParts for configuring rendering.
 *
 * @since 7.4.0
 * @private
 */
CIQ.Renderer.OHLC.getChartParts = function (style, colorUseOpen) {
	var CANDLEUP = 8; // today's close greater than today's open
	var CANDLEDOWN = 16; // today's close less than today's open
	var CANDLEEVEN = 32; // today's close equal to today's open
	return [
		{type:"histogram",	drawType:"histogram",	style:"stx_histogram_up",		condition:CANDLEUP,				fill:"fill_color_up",	border:"border_color_up",						useColorInMap:true, useBorderStyleProp:true},
		{type:"histogram",	drawType:"histogram",	style:"stx_histogram_down",		condition:CANDLEDOWN,			fill:"fill_color_down",	border:"border_color_down",						useColorInMap:true, useBorderStyleProp:true},
		{type:"histogram",	drawType:"histogram",	style:"stx_histogram_even",		condition:CANDLEEVEN,			fill:"fill_color_even",	border:"border_color_even",	skipIfPass:true,	useColorInMap:true, useBorderStyleProp:true},
		{type:"candle",		drawType:"shadow",		style:"stx_candle_shadow",																border:"border_color_up"},
		{type:"candle",		drawType:"shadow",		style:"stx_candle_shadow_up",	condition:CANDLEUP,										border:"border_color_up"},
		{type:"candle",		drawType:"shadow",		style:"stx_candle_shadow_down",	condition:CANDLEDOWN,									border:"border_color_down"},
		{type:"candle",		drawType:"shadow",		style:"stx_candle_shadow_even",	condition:CANDLEEVEN,									border:"border_color_even",	skipIfPass:true},
		{type:"candle",		drawType:"candle",		style:"stx_candle_up",			condition:CANDLEUP,				fill:"fill_color_up",	border:"border_color_up",						useColorInMap:true, useBorderStyleProp:true},
		{type:"candle",		drawType:"candle",		style:"stx_candle_down",		condition:CANDLEDOWN,			fill:"fill_color_down",	border:"border_color_down",						useColorInMap:true, useBorderStyleProp:true},
	]; // prettier-ignore
};

CIQ.Renderer.OHLC.prototype.draw = function () {
	var stx = this.stx,
		panel = this.stx.panels[this.params.panel],
		chart = panel.chart;
	var seriesMap = {};
	var s,
		seriesParams = this.seriesParams;
	for (s = 0; s < seriesParams.length; s++) {
		var sParam = seriesParams[s];

		var defaultParams = {};
		if (chart.series[sParam.id]) {
			// make sure the series is still there.
			defaultParams = CIQ.clone(chart.series[sParam.id].parameters);
		}
		seriesMap[sParam.id] = {
			parameters: CIQ.extend(CIQ.extend(defaultParams, this.params), sParam)
			//yValueCache: this.caches[sParam.id]
		};
		if (
			this == stx.mainSeriesRenderer &&
			chart.customChart &&
			chart.customChart.colorFunction
		) {
			seriesMap[sParam.id].parameters.colorFunction =
				chart.customChart.colorFunction;
		}
	}
	stx.drawSeries(chart, seriesMap, this.params.yAxis, this);
	for (s in seriesMap) {
		if (seriesMap[s].yValueCache) this.caches[s] = seriesMap[s].yValueCache;
	}
};

CIQ.Renderer.OHLC.prototype.getColor = function (
	stx,
	panel,
	style,
	isBorder,
	isGradient,
	overrideColor
) {
	var color = overrideColor || style.color;
	var yAxis = this.params.yAxis || panel.yAxis;
	if (isBorder) {
		color =
			overrideColor || style.borderLeftColor || style["border-left-color"];
		if (!color) return null;
	}
	if (!isGradient) return color;
	var top = stx.pixelFromTransformedValue(yAxis.highValue, panel);
	if (isNaN(top)) top = 0; // 32 bit IE doesn't like large numbers
	var backgroundColor = style.backgroundColor;
	if (color && !CIQ.isTransparent(color)) {
		var gradient = stx.chart.context.createLinearGradient(
			0,
			top,
			0,
			2 * yAxis[yAxis.flipped ? "top" : "bottom"] - top
		);
		gradient.addColorStop(0, color);
		gradient.addColorStop(1, backgroundColor);
		return gradient;
	}
	return backgroundColor;
};

CIQ.Renderer.OHLC.prototype.drawIndividualSeries = function (
	chart,
	parameters
) {
	if (parameters.invalid) return;
	var stx = this.stx,
		context = chart.context;
	var colorFunction = parameters.colorFunction,
		panel = stx.panels[parameters.panel] || chart.panel;
	if (typeof colorFunction == "string") {
		colorFunction = CIQ.Renderer.colorFunctions[colorFunction];
		if (!colorFunction) return;
	}
	var noBorders =
		stx.layout.candleWidth - chart.tmpWidth <= 2 && chart.tmpWidth <= 3;
	var CLOSEUP = 1; // today's close greater than yesterday's close
	var CLOSEDOWN = 2; // today's close less than yesterday's close
	var CLOSEEVEN = 4; // today's close the same as yesterday's close
	var CANDLEUP = 8; // today's close greater than today's open
	var CANDLEDOWN = 16; // today's close less than today's open
	var CANDLEEVEN = 32; // today's close equal to today's open
	if (!chart.state.chartType) chart.state.chartType = {};
	var pass = (chart.state.chartType.pass = {});
	var colorUseOpen = stx.colorByCandleDirection;
	if (parameters.colorBasis) colorUseOpen = parameters.colorBasis == "open";
	var isHistogram = parameters.histogram,
		type = parameters.type,
		hollow = parameters.hollow;
	var noWicks = stx.noWicksOnCandles[type];
	stx.startClip(panel.name);
	var colors = null,
		rc = { colors: [], cache: [] },
		caches = [];
	if (colorFunction) {
		var drawingParams = {
			isHistogram: isHistogram,
			field: parameters.field,
			yAxis: parameters.yAxis,
			isVolume: parameters.volume,
			highlight: parameters.highlight
		};
		if (!isHistogram && type == "bar") {
			drawingParams.type = parameters.hlc ? "hlc" : "bar";
			rc = stx.drawBarChart(
				panel,
				"stx_bar_chart",
				colorFunction,
				drawingParams
			);
		} else {
			if (type == "candle" && !noWicks)
				stx.drawShadows(panel, colorFunction, drawingParams);
			rc = stx.drawCandles(panel, colorFunction, drawingParams); //all bars
			drawingParams.isOutline = true;
			if (hollow || !noBorders)
				stx.drawCandles(panel, colorFunction, drawingParams); //all bar borders, if candlewidth is too small then don't draw the borders
		}
	} else {
		var isGradient = isHistogram && parameters.gradient !== false;
		var chartParts = CIQ.Renderer.OHLC.getChartParts(
			parameters.style,
			colorUseOpen
		);
		for (var i = 0; i < chartParts.length; i++) {
			var chartPart = chartParts[i];
			if (chartPart.skipIfPass && !pass.even) continue;
			else if (isHistogram) {
				if (chartPart.type != "histogram") continue;
			} else if (type == "bar") {
				if (chartPart.type != "bar") continue;
				else if (parameters.colored && !chartPart.condition) continue;
				else if (!parameters.colored && chartPart.condition) continue;
			} else if (hollow) {
				if (chartPart.type != "hollow") continue;
				else if (chartPart.drawType == "shadow" && noWicks) continue;
			} else if (type == "candle") {
				if (chartPart.type != "candle") continue;
				else if (chartPart.drawType == "shadow") {
					if (noWicks) continue;
					var coloredShadowUp =
						parameters.border_color_up ||
						stx.getCanvasColor("stx_candle_shadow_up");
					var coloredShadowDown =
						parameters.border_color_down ||
						stx.getCanvasColor("stx_candle_shadow_down");
					var coloredShadowEven =
						parameters.border_color_even ||
						stx.getCanvasColor("stx_candle_shadow_even");
					if (
						!CIQ.colorsEqual(coloredShadowUp, coloredShadowDown) ||
						!CIQ.colorsEqual(coloredShadowUp, coloredShadowEven) ||
						!CIQ.colorsEqual(coloredShadowUp, stx.defaultColor)
					) {
						if (!chartPart.condition) continue;
					} else if (chartPart.condition) continue;
				}
			} else continue;

			var styleArray = stx.canvasStyle(chartPart.style);
			var legendColor = this.getColor(
				stx,
				panel,
				styleArray,
				false,
				false,
				parameters[chartPart.fill]
			);
			var fillColor = this.getColor(
				stx,
				panel,
				styleArray,
				false,
				isGradient,
				parameters[chartPart.fill]
			);
			var borderColor = this.getColor(
				stx,
				panel,
				styleArray,
				chartPart.useBorderStyleProp && !noBorders,
				isGradient,
				parameters[chartPart.border]
			);
			if (chartPart.drawType == "candle") {
				if (chartPart.type == "hollow") {
					// Solid candles get no border unless the border color is different than the fill color
					if (
						!CIQ.isTransparent(fillColor) &&
						CIQ.colorsEqual(borderColor, fillColor)
					)
						borderColor = chartPart.useColorInMap ? "transparent" : fillColor;
					if (!chartPart.useColorInMap) fillColor = stx.containerColor;
				} else if (chartPart.type == "candle") {
					// Check to see if the candles are too small for borders
					if (noBorders) {
						if (CIQ.isTransparent(fillColor)) fillColor = borderColor;
						// transparent candle, draw it with the border color
						else borderColor = fillColor; // non-transparent candle, set the border to the fill color
					}
				}
			}
			context.globalAlpha = parameters.opacity;
			caches.push(
				stx.drawBarTypeChartInner({
					fillColor: fillColor,
					borderColor: borderColor,
					condition: chartPart.condition,
					style: chartPart.style,
					type: type == "bar" && parameters.hlc ? "hlc" : chartPart.drawType,
					panel: panel,
					field: parameters.field,
					yAxis: parameters.yAxis,
					volume: parameters.volume && parameters.hollow,
					highlight: parameters.highlight
				})
			);
			if (!colors) colors = {};
			if (chartPart.useColorInMap) colors[legendColor] = 1;
		}
	}
	stx.endClip();
	for (var c in colors) {
		if (!parameters.hollow || !CIQ.equals(c, stx.containerColor)) {
			rc.colors.push(c);
		}
	}
	for (c = 0; c < caches.length; c++) {
		for (var x = 0; x < caches[c].cache.length; x++) {
			var v = caches[c].cache[x];
			if (v || v === 0) rc.cache[x] = v;
		}
	}
	return rc;
};

/**
 * Creates a Candles renderer, a derivation of the OHLC renderer.
 *
 * **Note:** By default, the renderer will display candles as underlays. As such, they will appear below any other studies or drawings.
 *
 * The Candles renderer is used to create the following drawing types: candle, hollow candle, volume candle
 *
 * See {@link CIQ.Renderer#construct} for parameters required by all renderers
 * @param {object} config Config for renderer
 * @param  {object} [config.params] Parameters to control the renderer itself
 * @param  {boolean} [config.params.useChartLegend=false] Set to true to use the built-in canvas legend renderer. See {@link CIQ.ChartEngine.Chart#legendRenderer};
 * @param  {string} [config.params.style] Style name to use in lieu of defaults for the type
 * @param  {boolean} [config.params.hollow] Specifies candles should be hollow candles
 * @param  {boolean} [config.params.volume] Specifies candles should be volume candles
 * @param  {function} [config.params.colorFunction] Override function (or string) used to determine color of candle.  May be an actual function or a string name of the registered function (see {@link CIQ.Renderer.registerColorFunction})
 *
 * Common valid parameters for use by attachSeries.:<br>
 * `fill_color_up` - Color to use for up candles.<br>
 * `fill_color_down` - Color to use for down candles.<br>
 * `fill_color_even` - Color to use for even candles.<br>
 * `border_color_up` - Color to use for the border of up candles.<br>
 * `border_color_down` - Color to use for the order of down candles.<br>
 * `border_color_even` - Color to use for the order of even candles.<br>
 *
 * @constructor
 * @name  CIQ.Renderer.Candles
 * @since 5.1.1
 * @example
 	// Hollow candle chart
	var renderer=stxx.setSeriesRenderer(new CIQ.Renderer.Candles({params:{name:"candles", hollow:true}}));
 *
 */
CIQ.Renderer.Candles = function (config) {
	this.construct(config);
	var params = this.params;
	params.type = "candle";
	this.highLowBars = this.barsHaveWidth = this.standaloneBars = true;
	params.hlc = params.colored = params.histogram = false;
	if (params.volume) params.hollow = true;
};
CIQ.inheritsFrom(CIQ.Renderer.Candles, CIQ.Renderer.OHLC, false);

/**
 * Creates a SimpleHistogram renderer, a derivation of the Candles renderer.
 *
 * **Note:** By default the renderer displays histogram as underlays. As such, they will appear below any other studies or drawings.
 *
 * The SimpleHistogram renderer is used to create a histogram with the top of each bar representing the value of the field.
 * It is a much simpler form of histogram than that produced by the Histogram renderer (advanced package).
 *
 * See {@link CIQ.Renderer#construct} for parameters required by all renderers
 * @param {object} config Config for renderer
 * @param  {object} [config.params] Parameters to control the renderer itself
 * @param  {boolean} [config.params.useChartLegend=false] Set to true to use the built-in canvas legend renderer. See {@link CIQ.ChartEngine.Chart#legendRenderer};
 * @param  {string} [config.params.style] Style name to use in lieu of defaults for the type
 * @param  {boolean} [config.params.gradient=true] Specifies histogram bars are to be drawn with a gradient; set to false to draw with solid colors
 * @param  {function} [config.params.colorFunction] Override function (or string) used to determine color of bar.  May be an actual function or a string name of the registered function (see {@link CIQ.Renderer.registerColorFunction})
 *
 * Valid parameters for use by attachSeries.:<br>
 * `fill_color_up` - Color to use for up histogram bars.<br>
 * `fill_color_down` - Color to use for down histogram bars.<br>
 * `fill_color_even` - Color to use for even histogram bars.<br>
 * `border_color_up` - Color to use for the border of up histogram bars.<br>
 * `border_color_down` - Color to use for the order of down histogram bars.<br>
 * `border_color_even` - Color to use for the order of even histogram bars.<br>
 *
 * @constructor
 * @name  CIQ.Renderer.SimpleHistogram
 * @since 5.1.1
 * @example
 	// SimpleHistogram under the main chart plot
	var renderer=stxx.setSeriesRenderer(new CIQ.Renderer.SimpleHistogram({params:{name:"histogram", overChart:false}}));
 *
 */

CIQ.Renderer.SimpleHistogram = function (config) {
	this.construct(config);
	var params = this.params;
	params.type = "candle";
	params.histogram = true;
	this.barsHaveWidth = this.standaloneBars = true;
	this.highLowBars = false;
	params.hlc = params.colored = params.hollow = params.volume = false;
};
CIQ.inheritsFrom(CIQ.Renderer.SimpleHistogram, CIQ.Renderer.Candles, false);

};


let __js_core_string_ = (_exports) => {


//-------------------------------------------------------------------------------------------
// Be sure your webserver is set to deliver UTF-8 charset
// For apache add "AddDefaultCharset UTF-8" to httpd.conf
// otherwise use \u unicode escapes for non-ascii characters
//-------------------------------------------------------------------------------------------

var CIQ = _exports.CIQ;

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} string String to be capitalized.
 * @return {string} Capitalized version of the string.
 * @memberof CIQ
 * @since 7.4.0 Replaces {@link String.prototype.capitalize}.
 */
CIQ.capitalize = function (string) {
	if (!string) return "";
	return string.charAt(0).toUpperCase() + string.slice(1);
};

CIQ.camelCaseRegExp = /-([a-z])/g;
/**
 * Converts from hyphenated to camel case. Used primarily for converting css style names (which are hyphenated) to property values (which are camel case)
 * @param  {string} name Hyphenated style name
 * @return {string}		 Camel case style name
 * @memberof CIQ
 */
CIQ.makeCamelCase = function (name) {
	return name.replace(CIQ.camelCaseRegExp, function (g) {
		return g[1].toUpperCase();
	});
};

/**
 * Convenience function for generating a unique ID. Defaults to a short, pseudo unique ID based on the current time.
 * Radix 36 is used resulting in a compact string consisting only of letters and numerals. While not guaranteed to be
 * unique, this function has a high probability of uniqueness when it is triggered by human activity even in a large
 * user base. If called with `true` as the first argument, it will instead return an RFC4122 version 4 compliant UUID.
 * @param  {boolean} generateUUID If true will return a UUID.
 * @return {string} Either a RFC4122 version 4 compliant UUID or a unique string consisting of letters and numerals.
 * @memberof CIQ
 *
 * @since 8.7.0 Uses Web Crypto API to generate random values. If available, uses `crypto.randomUUID`.
 */
CIQ.uniqueID = function (generateUUID) {
	if (generateUUID) {
		// Newer browsers now natively support getting UUID in secure contexts
		// Use the browser implementation if it is availble.
		if (crypto.randomUUID) return crypto.randomUUID();

		// See http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
		// Ensures that the hex has a leading 0 if less than 15;
		// Needed to ensure UUID is the correct size
		const toHex = (rand) => rand.toString(16).padStart(2, 0);

		const randomize = (bytes) => crypto.getRandomValues(new Uint8Array(bytes));
		const getOctet = (n) => {
			let digits = randomize(n);
			return [...digits].map(toHex).join("");
		};
		const insertVersion = (string) => `4${string.slice(1)}`;

		return `${getOctet(4)}-${getOctet(2)}-${insertVersion(
			getOctet(2)
		)}-${getOctet(2)}-${getOctet(6)}`;
	}
	var epoch = new Date();
	var id = epoch.getTime().toString(36);
	id += crypto.getRandomValues(new Uint8Array([1])).toString(36);

	return id.toUpperCase();
};

};


let __js_core_typedefs_ = (_exports) => {
/**
 * OHLC Quote. This is the data format that the {@link CIQ.ChartEngine} recognizes.
 * All quotes must at least have a DT property that is a JavaScript Date in order to be valid, every other value is nullable.
 * Quotes can contain as many properties as you would like, allowing the ChartEngine to plot any value.
 *
 * @typedef {object} CIQ.ChartEngine~OHLCQuote
 * @prop {number} Open The opening price of the quote.
 * @prop {number} High The highest price of the quote.
 * @prop {number} Low The lowest price of the quote.
 * @prop {number} Close The closing price of the quote.
 * @prop {number} Volume The number of shares traded.
 * @prop {!Date} DT The date and time of the quote.
 */

/**
 * CIQ.Drawing interface placeholder to be augmented in *standard.js* with properties.
 *
 * @tsinterface {object} CIQ~Drawing
 */

/**
 * CIQ.ChartEngine.RangeParameters interface placeholder to be augmented in *standard.js* with properties.
 *
 * @tsinterface {object} CIQ.ChartEngine~RangeParameters
 */

/**
 * CIQ.ChartEngine.SpanParameters interface placeholder to be augmented in *standard.js* with properties.
 *
 * @tsinterface {object} CIQ.ChartEngine~SpanParameters
 */

/**
 * CIQ.ChartEngine.currentVectorParameters interface placeholder to be augmented in *standard.js* with properties.
 *
 * @tsinterface {object} CIQ.ChartEngine~currentVectorParameters
 */

/**
 * CIQ.Studies.StudyDescriptor interface placeholder to be augmented in *standard.js* with properties.
 *
 * @tsinterface {object} CIQ.Studies~StudyDescriptor
 */

};


let __js_core_xhr_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Returns the host portion of a URL.
 * @param  {string} url The URL, such as document.location.href
 * @return {string}     The host portion, including port, if the URL is a valid URI
 * @memberof CIQ
 */
CIQ.getHostName = function (url) {
	try {
		return url.match(/:\/\/(.[^/]+)/)[1];
	} catch (e) {
		return "";
	}
};

/**
 * A parsed query string object
 * Does not support using multi-value keys (i.e. "a=1&a=2")
 * @param  {string} [query] Query string. If not provided, then the browser location's query string will be used
 * @return {object}       An object containing the parsed values of the query string
 * @memberof CIQ
 */
CIQ.qs = function (query) {
	var qsParm = {};
	if (!query) query = window.location.search.substring(1);
	var parms = query.split("&");
	for (var i = 0; i < parms.length; i++) {
		var pos = parms[i].indexOf("=");
		var key;
		if (pos > 0) {
			key = parms[i].substring(0, pos);
			qsParm[key] = parms[i].substring(pos + 1);
		} else {
			key = parms[i];
			qsParm[key] = null;
		}
	}
	return qsParm;
};

/**
 * @callback CIQ.postAjax~requestCallback
 * @param {number} status HTTP status
 * @param {string} response HTTP response
 */
/**
 * Convenience function for making an ajax post. If payload is non-null then the method will be set to POST, otherwise GET.
 * @param {object} params Parameters for the post
 * @param  {string}   [params.url]         The url to send the ajax query to
 * @param  {string}   [params.payload]     An optional payload to send
 * @param  {CIQ.postAjax~requestCallback} [params.cb]          Callback function when complete
 * @param  {string}   [params.contentType] Optionally override the content type
 * @param  {boolean}   [params.noEpoch]     By default, the epoch is appended as a query string to bust caching. Set this to false to not append the epoch.
 * @param {string} [params.method] Optionally override the HTTP method
 * @param {object} [params.headers] Optional additional HTTP headers to send. Example: ```{"x-custom-header-1":"abc","x-custom-header-2":"123"}```
 * @param {boolean} [params.responseHeaders] Optional Set to true to have callback passed the response headers from the server
 * @param {number} [params.timeout] Optional Request timeout in msec.  If omitted, timeout is default (no timeout)
 * @param {boolean} [params.ungovernable] Optional If true, request not subject to rate limiting
 * @param {string} arg1 Payload
 * @param {function} arg2 Callback
 * @param {string} arg3 Ajax content type
 * @param {boolean} arg4 Set to true for no epoch
 * @return {boolean} True if there were no errors fetching data.
 * @memberof CIQ
 * @since 3.0.0 Added `timeout` and `ungovernable` parameters.
 */
CIQ.postAjax = function (params, arg1, arg2, arg3, arg4) {
	if (typeof params == "string") {
		params = {
			url: params,
			payload: arg1,
			cb: arg2,
			contentType: arg3,
			noEpoch: arg4,
			method: null,
			responseHeaders: false
		};
	}
	var url = params.url,
		cb = params.cb,
		payload = params.payload;
	if (!cb) cb = function () {};
	if (!params.ungovernable) {
		if (
			CIQ.Extras &&
			CIQ.Extras.RequestLimiter &&
			CIQ.Extras.RequestLimiter.hitRequestLimit(url)
		) {
			cb(429, null, {});
			return;
		}
	}
	function parseHeaders(server) {
		//Optional code for processing headers.
		var headers = {};
		if (!params.responseHeaders) return;
		var headerString = server.getAllResponseHeaders();
		var headerArray = headerString.split("\n");
		for (var i = 0; i < headerArray.length; i++) {
			var split = headerArray[i].split(":");
			while (split[1] && split[1].charAt(0) == " ")
				split[1] = split[1].substring(1);
			if (split[0] !== "") {
				headers[split.shift()] = split.join(":");
			}
		}
		return headers;
	}
	var server = new XMLHttpRequest();
	if (!server) return false;
	var epoch = new Date();
	if (!params.noEpoch) {
		if (url.indexOf("?") == -1) url += "?ciqrandom=" + epoch.getTime();
		else url += "&ciqrandom=" + epoch.getTime();
	}
	var method = params.method,
		headers = params.headers;
	if (!method) method = payload ? "POST" : "GET";

	server.open(method, url, true);
	if (!params.contentType)
		params.contentType = "application/x-www-form-urlencoded";
	if (payload) server.setRequestHeader("Content-Type", params.contentType);
	if (headers) {
		for (var header in headers) {
			server.setRequestHeader(header, headers[header]);
		}
	}
	if (params.timeout) {
		server.timeout = params.timeout; // in msec
	}
	server.ontimeout = function () {
		cb(408, null, {});
	};
	server.onload = function () {
		if (this.status === 0) this.status = "0";
		else if (!this.status) this.status = 200; //XDomainRequest
		cb(this.status, this.responseText, parseHeaders(this));
	};
	server.onerror = function () {
		cb("0", null, {});
	};
	try {
		server.send(payload);
	} catch (e) {
		cb("0", e, {});
	}
	return true;
};

/**
 * Dynamically load UI elements from an external HTML file. This is accomplished by rendering raw
 * HTML in an `iframe` and then cloning all of the newly created DOM elements into our main
 * document. Repeated requests for the same resource load data from the existing `iframe`.
 *
 * The title of the `iframe` is checked. External content should not have a title. By convention,
 * 404 and 500 errors have a title. And so, we can determine whether the `iframe` contains valid
 * content.
 *
 * @param {string} url The external URL from which new UI content is fetched.
 * @param {HTMLElement} el Element to which the UI content is appended. The default is
 * 		`document.body`.
 * @param {function} cb A callback function to call when the new UI is available.
 *
 * @memberof CIQ
 * @since
 * - 6.1.0 Added the `el` parameter.
 * - 7.2.0 Added caching per application instance by reusing the `iframe` contents.
 */
CIQ.loadUI = function (url, el, cb) {
	if (!el || typeof el == "function") {
		cb = el; // backward compatibility
		el = document.body;
	}
	const doc = el.ownerDocument;
	var iframe = doc.querySelector('iframe[original-url="' + url + '"]');
	var onload = function () {
		var iframeDocument = null;

		try {
			iframeDocument = this.contentDocument;
		} catch (error) {
			return cb(error);
		}

		// having a title is considered a server error such as a 404 or 500 response
		if (iframeDocument && !iframeDocument.title) {
			var html = iframeDocument.body.innerHTML;
			var div = document.createElement("div");

			CIQ.innerHTML(div, html);

			for (var j = 0; j < div.children.length; j++) {
				var ch = div.children[j].cloneNode(true);
				el.appendChild(ch);
			}

			cb(null);
		} else {
			cb(new Error("iFrame not found or document has a title"));
		}
	};

	if (iframe) {
		var iframeDocument = null;

		try {
			iframeDocument = iframe.contentDocument;
		} catch (error) {
			return cb(error);
		}

		if (
			iframeDocument.readyState === "complete" &&
			iframeDocument.location &&
			iframeDocument.location.href !== "about:blank"
		) {
			onload.call(iframe);
		} else {
			iframe.addEventListener("load", onload);
		}
	} else {
		iframe = document.createElement("iframe");
		iframe.setAttribute("original-url", url);
		iframe.src = url + (url.indexOf("?") === -1 ? "?" : "&") + CIQ.uniqueID();
		iframe.hidden = true;
		iframe.addEventListener("load", onload);
		doc.body.appendChild(iframe);
	}
};

/**
 * Loads JavaScript dynamically. Keeps a static memory of scripts that have been loaded to
 * prevent them from being loaded twice. The callback function however is always called, even
 * if the script has already been loaded.
 *
 * @param {string} scriptName The URL of the script to load.
 * @param {function} [cb] Callback function to call when the script is loaded.
 * @param {boolean} [isModule] If true, the script loads a module.
 * @param {Document} [doc] document to attach script to.
 *
 * @memberof CIQ
 * @since
 * - 8.0.0 Added the `isModule` parameter.
 * - 8.5.0 Added the `doc` parameter.
 */
CIQ.loadScript = function (scriptName, cb, isModule, doc) {
	if (!CIQ.loadedScripts) CIQ.loadedScripts = {};
	if (CIQ.loadedScripts[scriptName]) {
		if (cb) cb();
		return;
	}
	var script = document.createElement("SCRIPT");
	if (isModule) {
		script.type = "module";
		script.crossOrigin = "use-credentials";
	} else {
		script.async = true;
	}
	script.onload = function () {
		CIQ.loadedScripts[scriptName] = true;
		if (cb) cb();
	};
	var uniqueName = scriptName;
	// Use the epoch to create a unique query string, which will force the browser to reload
	if (uniqueName.indexOf("?") == -1) {
		uniqueName = uniqueName + "?" + Date.now();
	} else {
		uniqueName = uniqueName + "&" + Date.now();
	}
	script.src = uniqueName;
	var s = (doc || document).getElementsByTagName("script")[0];
	if (!s) (doc || document).body.append(script);
	else s.parentNode.insertBefore(script, s.nextSibling);
};

/**
 * Loads a stylesheet.
 * @param  {string} stylesheet Name of stylesheet file.
 * @param  {Function} cb     Function to call when the stylesheet is fully loaded
 * @param {Document} [doc] document to attach stylesheet to.
 * @since
 * - 2016-03-11
 * - 8.5.0 Added the `doc` parameter.
 * @memberof CIQ
 */
CIQ.loadStylesheet = function (stylesheet, cb, doc) {
	var lnk = document.createElement("link");
	lnk.rel = "stylesheet";
	lnk.type = "text/css";
	lnk.media = "screen";
	lnk.href =
		stylesheet + (stylesheet.indexOf("?") === -1 ? "?" : "&") + Date.now();
	lnk.onload = function () {
		if (this.loaded) return; //undocumented IE Edge bug, css files load twice.  This to prevent double-triggering of onload, which may load html file twice.
		this.loaded = true;
		if (cb) cb();
	};
	var links = (doc || document).getElementsByTagName("link");
	var lastLink = links[links.length - 1];
	if (!lastLink) (doc || document).head.append(lnk);
	else lastLink.parentNode.insertBefore(lnk, lastLink.nextSibling);
};

/**
 * Loads a feature function widget. Feature function widgets consist of a CSS file, a
 * JavaScript file, and an HTML file.
 *
 * Use this function to dynamically load content and functionality.
 *
 * @param {string} widget Name of the widget to load. The widget's JavaScript, CSS, and HTML
 * 		files should have this name.
 * @param {HTMLElement} el Element to which to append the UI content. The default is
 * 		`document.body`.
 * @param {function} cb Function to call when the widget is fully loaded.
 * @param {boolean} isModule When true, the script loads a module.
 *
 * @memberof CIQ
 * @since
 * - 6.1.0 Added the `el` parameter.
 * - 8.0.0 Added the `isModule` parameter.
 */
CIQ.loadWidget = function (widget, el, cb, isModule) {
	if (!el || typeof el == "function") {
		cb = el; // backward compatibility
		el = document.body;
	}
	const doc = el.ownerDocument;
	CIQ.loadStylesheet(
		widget + ".css",
		function () {
			CIQ.loadUI(widget + ".html", el, function (err) {
				if (err) cb(err);
				else CIQ.loadScript(widget + ".js", cb, isModule, doc);
			});
		},
		doc
	);
};

/**
 * Checks to see if the enabled plugins are done dynamically loading.
 * @param {array} plugins An array of strings that define which plugins to check
 * The plugin names provided must match the following format: if cq-scriptiq is enabled, 'scriptiq' is the plugin name entered into the array
 * @param {Function} cb Function to call when all the plugins are fully loaded
 * @param {Document} [doc] document plugins are loaded in.
 * @memberof CIQ
 * @since
 * - 6.1.0
 * - 8.5.0 Added the `doc` parameter.
 */
CIQ.waitForPlugins = function (plugins, cb, doc) {
	var numPluginsLoaded = 0;
	var numPlugins = plugins.length;
	if (!numPlugins) {
		cb();
		return;
	}

	for (var i = 0; i < numPlugins; i++) {
		var tagName = "cq-" + plugins[i];
		var element = (doc || document).getElementsByTagName(tagName)[0];
		if (element && element.hasAttribute("loaded")) {
			numPluginsLoaded++;
		}
	}

	if (numPlugins !== numPluginsLoaded) {
		return setTimeout(function () {
			CIQ.waitForPlugins(plugins, cb, doc);
		}, 0);
	}

	cb();
};

/**
 * Adds style content to a document if it has not been added already.
 *
 * @param {string} content Style content.
 * @param {string} path Unique identifier, which prevents duplicate style inclusions.
 * @param {Document} [doc] document to attach stylesheet to.
 *
 * @memberof CIQ
 * @since
 * - 8.0.0
 * - 8.5.0 Added the `doc` parameter.
 */
CIQ.addInternalStylesheet = function (content, path, doc) {
	if (!content) return;
	if (content.default) content = content.default;
	if (typeof content !== "string") return;
	if (path && (doc || document).querySelector('style[path="' + path + '"]'))
		return;
	const el = document.createElement("style");
	el.setAttribute("type", "text/css");
	el.setAttribute("path", path || "");
	el.innerText = content;
	(doc || document).head.appendChild(el);
};

};


let __js_core_engine_accessory_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Registers the Chart controls and attaches event handlers to the zoom and home controls.
 * @private
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.registerHTMLElements = function () {
	const c = this.chart.container;
	for (let control in CIQ.ChartEngine.htmlControls) {
		if (
			typeof this.chart[control] == "undefined" &&
			typeof this.controls[control] == "undefined"
		) {
			if (!this.allowZoom && control == "chartControls") continue;
			let el = c.querySelector("." + control);
			if (el) {
				this.chart[control] = el;
				this.controls[control] = el;
			} else {
				const rawHTML = CIQ.ChartEngine.htmlControls[control];
				if (!rawHTML) continue;
				const div = document.createElement("DIV");
				div.innerHTML = rawHTML.replace(/[\t\n\r]/gm, ""); // strip out tabs and newlines
				el = div.firstChild;
				c.appendChild(el);
				this.chart[control] = el;
				this.controls[control] = el;
				el.classList.add(control);
			}
		}
	}
	const { chartControls, home } = this.controls;
	if (chartControls) {
		const zoomIn = chartControls.querySelector(".stx-zoom-in");
		const zoomOut = chartControls.querySelector(".stx-zoom-out");

		CIQ.safeClickTouch(
			zoomIn,
			(function (self) {
				return function (e) {
					if (
						!self.allowZoom ||
						(self.activeDrawing && !self.allowDrawingZoom)
					) {
						e.stopPropagation();
						return;
					}

					self.zoomIn(e);
					e.stopPropagation();
				};
			})(this)
		);
		CIQ.safeClickTouch(
			zoomOut,
			(function (self) {
				return function (e) {
					if (
						!self.allowZoom ||
						(self.activeDrawing && !self.allowDrawingZoom)
					) {
						e.stopPropagation();
						return;
					}

					self.zoomOut(e);
					e.stopPropagation();
				};
			})(this)
		);
		if (!CIQ.touchDevice) {
			this.makeModal(zoomIn);
			this.makeModal(zoomOut);
		}
	}
	if (home) {
		CIQ.safeClickTouch(
			home,
			(function (self) {
				return function (e) {
					e.stopPropagation();
					// If we are not in historical mode then scroll home
					if (!self.isHistoricalMode()) {
						self.home({ animate: true });
						return;
					}
					// If in historical mode delete any range the chart might have to prevent setting it again and call loadChart
					// This will be fast than scrolling and paginating forward as the chart progresses towards the current day
					delete self.layout.range;
					self.loadChart(self.chart.symbol, function () {
						self.home({ animate: false });
					});
				};
			})(this)
		);
		if (!CIQ.touchDevice) {
			this.makeModal(home);
		}
	}
	if (this.allowDragControls) this.allowDragControls();
};

/**
 * Returns the chart to the home position, where the most recent tick is on the right side of the screen.
 *
 * By default the home() behavior is to maintain the white space currently on the right side of the chart.
 * To align the chart to the right edge instead, set the white space to 0  by calling: `stxx.home({whitespace:0});` or `stxx.home({maintainWhitespace:false});`
 *
 * If you want to home the chart and also do a full reset of both the x- and y-axis zoom levels so they revert to the initial default settings, execute this:
 * ```
 * stxx.setCandleWidth(8);stxx.home(0);
 * ```
 *
 * Keep in mind that certain floating labels, such as the `roundRectArrow` will prevent the chart from being flush to the right edge even if the white space is 0.
 * This is to prevent bars from being obstructed by the protruding portion of the label.
 *
 * See {@link CIQ.ChartEngine#getLabelOffsetInPixels} and {@link CIQ.ChartEngine#yaxisLabelStyle} for more details.
 *
 * Used by <a href="CIQ.ChartEngine.html#htmlControls%5B%60home%60%5D">CIQ.ChartEngine.htmlControls.home.</a>
 *
 * @param {object} params Object containing the following keys:
 * @param {boolean} [params.animate = false] Set to true to animate a smooth scroll to the home position.
 * @param {boolean} [params.maintainWhitespace = true] Set to `true` to maintain the currently visible white space on the right of the chart, or to `false` to align to the right edge.
 * @param {number} [params.whitespace = 0] Override to force a specific amount of whitespace on the right of the chart.
 *		This will take precedence over `params.maintainWhitespace`
 * @param {CIQ.ChartEngine.Chart} [params.chart] Chart to scroll home. If not defined, all chart objects will be returned to the home position.
 * @memberof CIQ.ChartEngine
 * @example
 * stxx.home({maintainWhitespace:false});
 */
CIQ.ChartEngine.prototype.home = function (params) {
	this.swipe.amplitude = 0;
	var layout = this.layout;
	if (typeof params != "object") {
		// backward compatibility
		params = {
			maintainWhitespace: params
		};
	}

	function resetPanelZooms(stx) {
		for (var p in stx.panels) {
			var yAxes = stx.panels[p].yaxisLHS.concat(stx.panels[p].yaxisRHS);
			for (var a = 0; a < yAxes.length; a++)
				if (!yAxes[a].lockScale) stx.calculateYAxisMargins(yAxes[a]);
		}
	}
	function scrollToCallback(self, chart, exactScroll) {
		return function () {
			resetPanelZooms(self);
			chart.scroll = exactScroll;
			self.draw();
		};
	}
	if (typeof params.maintainWhitespace == "undefined")
		params.maintainWhitespace = true; // maintain the whitespace unless set to false

	this.chart.draggingControls = null;
	this.cancelTouchSingleClick = true;
	if (!this.chart.dataSet || !this.chart.dataSet.length) {
		// to clear out anything that may have been on the screen. Otherwise we still show stale data.
		this.draw();
		return;
	}
	this.micropixels = 0;
	var barsDisplayedOnScreen = Math.floor(this.chart.width / layout.candleWidth);
	for (var chartName in this.charts) {
		var chart = this.charts[chartName];
		if (params.chart && params.chart != chart) continue;

		var whitespace = 0;
		if (params.maintainWhitespace && this.preferences.whitespace >= 0)
			whitespace = this.preferences.whitespace;
		if (params.whitespace || params.whitespace === 0)
			whitespace = params.whitespace;
		var leftMargin = this.getLabelOffsetInPixels(chart, layout.chartType);
		if (leftMargin > whitespace) whitespace = leftMargin;

		var exactScroll = Math.min(barsDisplayedOnScreen, chart.dataSet.length); // the scroll must be the number of bars you want to see.
		if (this.chart.allowScrollPast) exactScroll = barsDisplayedOnScreen; // If whitespace allowed on left of screen
		this.micropixels =
			this.chart.width - exactScroll * layout.candleWidth - whitespace;
		this.preferences.whitespace = whitespace;
		while (this.micropixels > layout.candleWidth) {
			// If micropixels is larger than a candle then scroll back further
			exactScroll++;
			this.micropixels -= layout.candleWidth;
		}
		while (this.micropixels < 0) {
			exactScroll--;
			this.micropixels += layout.candleWidth;
		}
		this.micropixels -= layout.candleWidth;
		exactScroll++;
		if (!this.mainSeriesRenderer || !this.mainSeriesRenderer.standaloneBars)
			this.micropixels += layout.candleWidth / 2; // bar charts display at beginning of candle

		if (params.animate) {
			var self = this;
			this.scrollTo(
				chart,
				exactScroll,
				scrollToCallback(self, chart, exactScroll)
			);
		} else {
			chart.scroll = exactScroll;
			resetPanelZooms(this);
		}
	}
	this.draw();
};

/**
 * <span class="injection">INJECTABLE</span>
 *
 * This method calls {@link CIQ.ChartEngine#updateFloatHRLabel} to draw the label that floats along the y-axis with the
 * current price for the crosshair.
 * It also fills the date in the "stxx.controls.floatDate" (Style: `stx-float-date`) div which floats along the x-axis.
 * This is an appropriate place to inject an append method for drawing a heads up display if desired.
 *
 * You can use {@link CIQ.ChartEngine.XAxis#noDraw} and {@link CIQ.ChartEngine.YAxis#noDraw} to hide the floating labels and axis.
 *
 * It uses {@link CIQ.displayableDate} to format the floating label over the x-axis, which can be overwritten as needed to achieve the desired results.
 *
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias headsUpHR
 * @since 09-2016-19 Only year and month will be displayed in monthly periodicity.
 */
CIQ.ChartEngine.prototype.headsUpHR = function () {
	if (this.runPrepend("headsUpHR", arguments)) return;
	var panel = this.currentPanel;
	if (!panel) return;
	var chart = panel.chart;

	this.updateFloatHRLabel(panel);
	var floatDate = this.controls.floatDate;
	function setFloatDate(val) {
		CIQ.efficientDOMUpdate(floatDate, "innerHTML", val);
	}

	if (floatDate && !chart.xAxis.noDraw) {
		var bar = this.barFromPixel(this.cx);
		var prices = chart.xaxis[bar];
		if (prices && prices.DT) {
			setFloatDate(CIQ.displayableDate(this, chart, prices.DT));
		} else if (prices && prices.index) {
			setFloatDate(prices.index);
		} else {
			setFloatDate(""); // there is no date to display
		}
	}

	this.runAppend("headsUpHR", arguments);
};

/**
 * Sets the chart into a modal mode. Crosshairs are hidden and the chart will not respond to click or mouse events. Call this
 * for instance if you are enabling a dialog box and don't want errant mouse activity to affect the chart.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.modalBegin = function () {
	this.openDialog = "modal";
	this.undisplayCrosshairs();
};

/**
 * Ends modal mode. See {@link CIQ.ChartEngine#modalBegin}
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.modalEnd = function () {
	this.cancelTouchSingleClick = true;
	this.openDialog = "";
	this.doDisplayCrosshairs();
};

/**
 * Convenience function to attach a modal on mouse events
 * @param {HTMLElement} Element to attach the modal to
 * @private
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.makeModal = function (element) {
	var self = this;
	element.onmouseover = function (event) {
		self.modalBegin();
	};
	element.onmouseout = function (event) {
		self.modalEnd();
	};
};

/**
 * <span class="injection">INJECTABLE</span>
 *
 * Updates the position of the stxx.controls.floatDate element ( Style: `stx-float-date` ) and calls {@link CIQ.ChartEngine.AdvancedInjectable#headsUpHR} to display the crosshairs labels on both x and y-axis.
 * A timer is used to prevent this operation from being called more frequently than once every 100 milliseconds in order to
 * improve performance during scrolling.
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias updateChartAccessories
 */
CIQ.ChartEngine.prototype.updateChartAccessories = function () {
	if (this.accessoryTimer !== null) clearTimeout(this.accessoryTimer);
	if (!CIQ.ChartEngine.drawingLine && CIQ.touchDevice) {
		if (new Date().getTime() - this.lastAccessoryUpdate < 100) {
			this.accessoryTimer = setTimeout(
				(function (stx) {
					return function () {
						stx.updateChartAccessories();
					};
				})(this),
				10
			);
			return;
		}
	}
	if (!this.chart.dataSet) return;
	if (this.runPrepend("updateChartAccessories", arguments)) return;
	this.accessoryTimer = null;
	this.lastAccessoryUpdate = new Date().getTime();
	var floatDate = this.controls.floatDate;
	if (floatDate) {
		var panel = this.currentPanel;
		if (!panel) panel = this.chart.panel;
		if (panel) {
			var chart = panel.chart;
			var bottom =
				this.xAxisAsFooter === true
					? 0
					: this.chart.canvasHeight - panel.chart.bottom;
			var halfLabelWidth = floatDate.offsetWidth / 2 - 0.5;
			var l = this.pixelFromTick(this.crosshairTick, chart) - halfLabelWidth;
			if (l < 0) l = 0;
			else if (l > this.width - 2 * halfLabelWidth - 1)
				l = this.width - 2 * halfLabelWidth - 1;
			CIQ.efficientDOMUpdate(floatDate.style, "left", l + "px");
			CIQ.efficientDOMUpdate(floatDate.style, "bottom", bottom + "px");
		}
	}
	this.positionCrosshairsAtPointer();
	this.headsUpHR();
	this.runAppend("updateChartAccessories", arguments);
};

/**
 * Positions a "sticky" (a tooltip element). It is positioned relative to the cursor but so that it is always available and never
 * accidentally tappable on a touch device.
 * @param  {HTMLElement} m The sticky
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.positionSticky = function (m) {
	var top = Math.max(this.cy - m.offsetHeight - 60, 0);
	var right = Math.min(
		this.chart.canvasWidth - (this.cx - 50),
		this.chart.canvasWidth - m.offsetWidth
	);
	var style = m.style;
	CIQ.efficientDOMUpdate(style, "top", top + "px");
	CIQ.efficientDOMUpdate(style, "left", "auto");
	CIQ.efficientDOMUpdate(style, "right", right + "px");
};

/**
 * Displays the "sticky" (tooltip element). The sticky should be in `CIQ.ChartEngine.controls.mSticky`.
 *
 * To disable stickies, set that element to null. See {@link CIQ.ChartEngine.htmlControls}.
 *
 * To customize, see the [Using and Customizing Drawing Tools](tutorial-Using%20and%20Customizing%20Drawing%20Tools.html#customSticky) tutorial.
 *
 * @param  {object} params Optional arguments to pass into the function.
 * @param  {string} [params.message] The message to display in the sticky.
 * @param  {string} [params.backgroundColor] The background color for the sticky (the foreground color is selected automatically).
 * @param  {boolean} [params.forceShow] If true, always shows the sticky (as opposed to only on hover).
 * @param  {boolean} [params.noDelete] If true, hides the delete instructions/button.
 * @param  {boolean} [params.noEdit] If true, hides the edit instructions/button.
 * @param  {string} [params.type] Set to "study","drawing","series", or whatever causes the sticky to be displayed.
 * @param  {boolean} [params.noText] If true, hides the edit text button.
 * @param  {function} [params.positioner] Sets custom positioning behavior for the sticky. Called with `Function.prototype.call()`,
 * 		specifying the engine instance as context. Called with one argument, which is a reference to the sticky element.
 * @memberof CIQ.ChartEngine
 * @since
 * - 6.0.0 Consolidated arguments into the `params` object.
 * - 6.3.0 Add `noEdit` parameter.
 * - 7.4.0 Add `positioner` parameter.
 * - 8.6.0 Add `noText` parameter.
 */
CIQ.ChartEngine.prototype.displaySticky = function (params) {
	const m = this.controls.mSticky;
	if (!m) return;
	const mi = m.querySelector(".mStickyInterior");
	if (!mi) return;
	const overlayTrashCan = m.querySelector(".overlayTrashCan");
	const overlayEdit = m.querySelector(".overlayEdit");
	const overlayText = m.querySelector(".overlayText");
	const mouseDeleteInstructions = m.querySelector(".mouseDeleteInstructions");
	const longPressText = m.querySelector(".stickyLongPressText");
	const customEl = m.querySelector(".customInstructions");

	mouseDeleteInstructions.classList.remove("no_edit");

	// backwards compatibility:
	if (!params || typeof params != "object") {
		params = {
			message: arguments[0],
			backgroundColor: arguments[1],
			forceShow: arguments[2],
			noDelete: arguments[3],
			type: arguments[4]
		};
	}

	const { forceShow, noDelete, noEdit, type, noText } = params;
	let { message, backgroundColor } = params;

	if (!forceShow && !message) {
		mi.innerHTML = "";
		m.style.display = "none";
		if (overlayTrashCan) overlayTrashCan.style.display = "none";
		if (overlayEdit) overlayEdit.style.display = "none";
		if (overlayText) overlayText.style.display = "none";
		if (mouseDeleteInstructions) mouseDeleteInstructions.style.display = "none";
		if (longPressText) longPressText.style.display = "none";
	} else {
		if (!message) message = "";
		// highlightedDraggable set by findHighlights
		const { defaultColor, highlightedDraggable: dragObj } = this;
		if (backgroundColor == "auto") backgroundColor = defaultColor;
		if (forceShow && !message) {
			mi.style.backgroundColor = "";
			mi.style.color = "";
			mi.style.display = "none";
		} else if (backgroundColor) {
			mi.style.backgroundColor = backgroundColor;
			mi.style.color = CIQ.isTransparent(backgroundColor)
				? defaultColor
				: CIQ.chooseForegroundColor(backgroundColor);
			mi.style.display = "inline-block";
		} else {
			mi.style.backgroundColor = "";
			mi.style.color = "";
			mi.style.display = "inline-block";
		}

		mi.innerHTML = message;
		const rtClick = m.querySelector(".mStickyRightClick");
		rtClick.className = "mStickyRightClick"; //reset
		if (type) rtClick.classList.add("rightclick_" + type);
		rtClick.style.display = "";
		m.style.display = "inline-block";

		if (
			!dragObj ||
			(dragObj && dragObj.undraggable && dragObj.undraggable(this))
		) {
			longPressText.style.display = "none";
		}

		if (
			noDelete ||
			this.bypassRightClick === true ||
			this.bypassRightClick[type]
		) {
			rtClick.style.display = "none";
		} else if (this.highlightViaTap || this.touches.length) {
			if (overlayTrashCan) overlayTrashCan.style.display = "inline-block";
			if (overlayEdit && !noEdit) overlayEdit.style.display = "inline-block";
			if (overlayText && !noText) overlayText.style.display = "inline-block";
			if (mouseDeleteInstructions)
				mouseDeleteInstructions.style.display = "none";
			if (longPressText) longPressText.style.display = "none";
			m.classList[message === "" ? "add" : "remove"]("hide");
		} else {
			if (noEdit) mouseDeleteInstructions.classList.add("no_edit");
			if (mouseDeleteInstructions) {
				mouseDeleteInstructions.style.display = "block";
			}
			if (longPressText) {
				longPressText.style.display = "none";
				const drag = this.preferences.dragging;
				if (drag && params.panel && !params.panel.noDrag) {
					if ((drag === true || drag.study) && type == "study")
						longPressText.style.display = "block";
					else if ((drag === true || drag.series) && type == "series")
						longPressText.style.display = "block";
				}
			}
		}

		if (customEl && type) {
			const displayCustom = customEl.querySelector(`[type=${type}]`);
			customEl.style.display = displayCustom ? "block" : "none";
		}

		const stickyType = type || "default";
		m.setAttribute("cq-sticky-type", stickyType);

		const positionSticky = params.positioner || this.positionSticky;
		positionSticky.call(this, m);
	}
};

/**
 * Adds a message to the chart.
 *
 * Creates a `div` containing a text message. Appends the `div` to the
 * <a href="CIQ.ChartEngine.html#htmlControls%5B%60notificationTray%60%5D">
 * CIQ.ChartEngine.htmlControls.notificationTray</a>.
 *
 * Notifications can be interactive (see the `callback` and `dismissalListeners` parameters),
 * and they can be queried by their names, which are set as class names on the
 * notification `div`.
 *
 * @param {string} name The name of the notification, which is added to the class list of the
 * 		notification `div`.
 * @param {string} message Text to display in the notification `div`.
 * @param {object} [params] Configuration parameters.
 * @param {function} [params.callback] Added to the notification `div` as a listener for the
 * 		"pointer up" event.
 * @param {array} [params.dismissalListeners] Array of event listeners added to the
 * 		notification.
 * @param {string} params.dismissalListeners.type The listener event type. See
 * 		{@link CIQ.ChartEngine#addEventListener}.
 * @param {function} params.dismissalListeners.callback The listener callback function.
 *
 * @memberof CIQ.ChartEngine
 * @since 8.0.0
 */
CIQ.ChartEngine.prototype.displayNotification = function (
	name,
	message,
	params = {}
) {
	if (!this.controls.notificationTray) return;

	const { callback, dismissalListeners } = params;
	const notificationTray = this.controls.notificationTray;
	let fragment = notificationTray
		.querySelector("template")
		.content.cloneNode(true);
	const notification = fragment.firstElementChild;

	notification.className = name;
	notification.querySelector(".message").textContent = message;

	if (callback) {
		// iOS version < 13.2 and some older browsers don't support pointer events.
		// Fallback to touch events in these cases.
		let leaveHandler = window.PointerEvent ? "pointerup" : "touchend";
		notification.handler = notification.addEventListener(
			leaveHandler,
			callback
		);
	}

	if (dismissalListeners) {
		notification.listeners = {};
		dismissalListeners.forEach((listener) => {
			notification.listeners[name] = this.addEventListener(
				listener.type,
				listener.callback
			);
		});
	}

	this.makeModal(notification);

	notificationTray.appendChild(notification);
};

/**
 * Removes a notification from the
 * <a href="CIQ.ChartEngine.html#htmlControls%5B%60notificationTray%60%5D">
 * CIQ.ChartEngine.htmlControls.notificationTray</a>.
 *
 * @param {string} name The name of the notification that is removed.
 *
 * @memberof CIQ.ChartEngine
 * @since 8.0.0
 */
CIQ.ChartEngine.prototype.removeNotification = function (name) {
	if (!this.controls.notificationTray) return;

	const notificationTray = this.controls.notificationTray;
	let notification = notificationTray.querySelector(`.${name}`);

	if (notification) {
		if (notification.handler)
			notification.removeEventListener(notification.handler);
		if (notification.listeners) {
			for (const listener in notification.listeners) {
				this.removeEventListener(notification.listeners[listener]);
			}
		}
		this.modalEnd();
		notificationTray.removeChild(notification);
	}
};

/**
 * <span class="injection">INJECTABLE</span>
 *
 * Sets the innerHTML value of the `.mMeasure` HTML DOM Node to contain a measurement (price differential and bars/line distance), usually when a user hovers over a drawing.
 * It is also used to display measurement as a drawing is being created or when using the 'Measure' tool.
 *
 * It also sets `this.controls.mSticky` with the measurement and displays it on `mSticky` on hover.
 *
 * Example: <B>23.83 (-12%) 11 Bars</B>
 *
 * It requires the UI to include the following div: ```<div class="currentMeasure"><span class="mMeasure"></span></div>```
 *
 * It can be styled via CSS. See example.
 *
 * @param {number} price1 Beginning price of the drawing
 * @param {number|boolean} price2 Ending price of the drawing, pass <code>false</code> if you want to skip price and percentage display
 * @param {number} tick1  Beginning tick of the drawing
 * @param {number|boolean} tick2  Ending tick of the drawing, pass <code>false</code> if you want to skip tick count display
 * @param {boolean} hover  True to turn on the measurement, false to turn it off
 * @param {string} [name]  Name of drawing, not used by default but passed into injection
 * @memberof CIQ.ChartEngine
 * @since
 * - 4.0.0 Added name argument.
 * - 6.0.0 Allow price2 and tick2 to be false, skipping the respective display.
 * @example
 * // Measuring tool styling CSS sample
 * .currentMeasure {
 *     text-align: left;
 *     display: inline-block;
 *     margin: 4px 0 0 20px;
 *     height: 20px;
 *     line-height: 20px;
 * }

 * .mMeasure {
 *     display: inline-block;
 *     margin: 0 0 0 0;
 *     overflow: hidden;
 *     text-overflow: ellipsis;
 *     white-space: nowrap;
 *     width:140px;
 * }
 * @example
 * // This is an example of the framework to use for writing a prepend to further manipulate/display the measurements
 * CIQ.ChartEngine.prototype.prepend("setMeasure",function() {
 *
 *     var m = document.querySelector(".mMeasure");
 *
 *     if (!m) return; // Can't show a measurement if the div is not present.
 *
 *     // Add your logic to manage the display of the measurements (price1, price2, tick1, tick2).
 *     //*****************************************
 *     var message = 'blah measurement';
 *     //*****************************************
 *
 *     m.innerHTML = message;
 *
 *     if (this.activeDrawing) return;  // Don't show measurement Sticky when in the process of drawing.
 *
 *     m = this.controls.mSticky;
 *     if (m) {
 *         var mStickyInterior = m.querySelector(".mStickyInterior");
 *         if (hover) {
 *             m.style.display = "inline-block";
 *             mStickyInterior.style.display = "inline-block";
 *             if(price1) {
 *                 mStickyInterior.innerHTML = message;
 *             }
 *             this.positionSticky(m);
 *         } else {
 *             m.style.display = "none";
 *             mStickyInterior.innerHTML = "";
 *         }
 *     }
 *
 *  //return true; // If you don't want to continue into the regular function.
 *  //return false; // If you want to run through the standard function once you are done with your custom code.
 * });
 */
CIQ.ChartEngine.prototype.setMeasure = function (
	price1,
	price2,
	tick1,
	tick2,
	hover,
	name
) {
	if (this.runPrepend("setMeasure", arguments)) return;
	var m = (this.drawingContainer || document).querySelector(".mMeasure");
	var message = "";
	if (!price1 && price1 !== 0) {
		if (!this.anyHighlighted && this.currentVectorParameters.vectorType === "")
			this.clearMeasure();
	} else {
		if (price2 !== false) {
			var distance =
				Math.round(Math.abs(price1 - price2) * this.chart.roundit) /
				this.chart.roundit;
			distance = distance.toFixed(this.chart.yAxis.printDecimalPlaces);
			if (this.internationalizer) {
				message += this.internationalizer.numbers.format(distance);
			} else {
				message += distance;
			}
			var pct;
			if (price1 > 0 && price2 > 0) {
				pct = (price2 - price1) / price1;
				if (Math.abs(pct) > 0.1) {
					pct = Math.round(pct * 100);
				} else if (Math.abs(pct) > 0.01) {
					pct = Math.round(pct * 1000) / 10;
				} else {
					pct = Math.round(pct * 10000) / 100;
				}
				if (this.internationalizer) {
					pct = this.internationalizer.percent.format(pct / 100);
				} else {
					pct = pct + "%";
				}
				message += " (" + pct + ")";
			}
		}
		if (tick2 !== false) {
			var ticks = Math.abs(tick2 - tick1);
			ticks = Math.round(ticks) + 1;
			var barsStr = this.translateIf("Bars");
			message += " " + ticks + " " + barsStr;
		}

		if (m) m.innerHTML = message;
	}

	if (this.activeDrawing) return; // Don't show measurement Sticky when in the process of drawing
	m = this.controls.mSticky;
	if (m) {
		var mStickyInterior = m.querySelector(".mStickyInterior");
		if (hover) {
			m.style.display = "inline-block";
			if (mStickyInterior) {
				mStickyInterior.style.display = "inline-block";
				if (price1 || price1 === 0) {
					mStickyInterior.innerHTML = message;
				}
			}
			m.classList[message === "" ? "add" : "remove"]("hide");
			this.positionSticky(m);
		} else {
			m.style.display = "none";
			if (mStickyInterior) mStickyInterior.innerHTML = "";
		}
	}
	this.runAppend("setMeasure", arguments);
};

/**
 * Clears the innerHTML value of the `.mMeasure` HTML DOM Node.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.clearMeasure = function () {
	var m = (this.drawingContainer || document).querySelector(".mMeasure");
	if (m) m.innerHTML = "";
};

/**
 * Effects a zoom from either zoomIn() or zoomOut(). Called from an EaseMachine
 * @param  {number} candleWidth  The new candleWidth
 * @param  {CIQ.ChartEngine.Chart} chart        The chart to center
 * @memberof CIQ.ChartEngine
 * @since
 * - 4.0.0 Will maintain tick position near the cursor if <a href="CIQ.ChartEngine.html#preferences%5B%60zoomAtCurrentMousePosition%60%5D">CIQ.ChartEngine.preferences.zoomAtCurrentMousePosition</a> is `true`.
 * - 4.1.0 Will keep left edge stable and zoom to the right when white space is present on the left.
 */
CIQ.ChartEngine.prototype.zoomSet = function (candleWidth, chart) {
	if (!chart) chart = this.chart;
	if (!chart.dataSet) return;
	candleWidth = this.constrainCandleWidth(candleWidth);
	if (chart.tempCanvas.style.display != "none")
		CIQ.clearCanvas(chart.tempCanvas, this);
	var mainSeriesRenderer = this.mainSeriesRenderer || {};
	if (!mainSeriesRenderer.params || !mainSeriesRenderer.params.volume) {
		var maintainTick;
		if (
			this.preferences.zoomAtCurrentMousePosition &&
			this.zoomInitiatedByMouseWheel &&
			this.crosshairTick < chart.dataSet.length
		) {
			// keep the bar near the cursor stable
			// at chart load it is possible for this.crosshairTick to be null (refresh while cursor is in the xAxis margin)
			maintainTick = this.crosshairTick || this.tickFromPixel(this.cx, chart);
		} else if (this.isHome()) {
			// keep right edge stable and zoom to the left
			maintainTick = chart.dataSet.length - 1;
		} else if (chart.scroll > chart.dataSet.length) {
			// keep left edge stable and zoom to the right
			maintainTick = 0;
		} else if (this.grabMode == "zoom-x") {
			// keep right edge stable and zoom to the left
			maintainTick = this.tickFromPixel(this.chart.width, chart);
		} else {
			// keep the center bar in the center and zoom equally left and right
			maintainTick = this.tickFromPixel(this.chart.width / 2, chart);
		}
		if (this.animations.zoom.hasCompleted) {
			this.zoomInitiatedByMouseWheel = false;
		}
		// this is the code that keeps the chart's position stable.
		// Bypassing this code will cause the chart's left position to remain stable
		// which is really the only way to get a smooth zoom for variable width candles (because the act of scrolling inherently changes the number of candles that fit on the screen)
		var distanceFromFront = chart.dataSet.length - 1 - maintainTick;
		var oldScroll = chart.scroll;
		chart.scroll =
			Math.round(
				(this.pixelFromTick(maintainTick, chart) - chart.left) / candleWidth
			) +
			1 +
			distanceFromFront;
		this.micropixels +=
			(oldScroll - distanceFromFront) * this.layout.candleWidth -
			(chart.scroll - distanceFromFront) * candleWidth;
	}
	this.setCandleWidth(candleWidth);
	chart.spanLock = false;
	this.draw();
	this.doDisplayCrosshairs();
	this.updateChartAccessories();
};

};


let __js_core_engine_baselines_ = (_exports) => {


var CIQ = _exports.CIQ;
/**
 * A reference to the renderer of the baseline whose handle is currently selected.
 *
 * The baseline handle can be accessed from {@link CIQ.ChartEngine#baselineHelper}.
 *
 * @type {CIQ.Renderer}
 * @memberof CIQ.ChartEngine
 * @since 8.2.0
 */
CIQ.ChartEngine.prototype.currentBaseline = null;

/**
 * Baseline helper for the chart engine.
 *
 * Maps renderers to value objects that contain data related to the baseline, including the
 * baseline handle (a reference to the DOM element that functions as the handle).
 *
 * @type {Map<CIQ.Renderer, object>}
 * @memberof CIQ.ChartEngine
 * @since 8.2.0
 */
CIQ.ChartEngine.prototype.baselineHelper = null;

CIQ.ChartEngine.helpersToRegister.push(function (stx) {
	stx.baselineHelper = new Map();
});

/**
 * Adds an entry to {@link CIQ.ChartEngine#baselineHelper} with `renderer` as the key and a
 * dynamically created object as the value. The value object contains data related to the
 * baseline.
 *
 * If the renderer is the renderer of the main series, sets the handle property of the value
 * object to <code>CIQ.ChartEngine.htmlControls[&#96;baselineHandle&#96;]</code>; otherwise,
 * creates a baseline handle DOM element and adds a reference to the DOM element to the value
 * object and to the chart controls object, {@link CIQ.ChartEngine.htmlControls}. The handle is
 * accessed in the chart controls object by a property name that is the concatenation of the
 * renderer name and "cq-baseline-handle", for example:
 * ```
 * stxx.controls[`${renderer.params.name} cq-baseline-handle`];
 * ```
 *
 * @param {CIQ.Renderer} renderer The renderer to register as the key of the baseline helper.
 *
 * @memberof CIQ.ChartEngine
 * @since 8.2.0
 */
CIQ.ChartEngine.prototype.registerBaselineToHelper = function (renderer) {
	if (!renderer.params.baseline) return;
	const { baselineHelper } = this;
	const self = this;
	if (!baselineHelper.has(renderer)) {
		const { name } = renderer.params;
		let defaultHandle = this.controls.baselineHandle;
		baselineHelper.set(renderer, {
			styleCache: null,
			display: false,
			handle:
				name === "_main_series" && defaultHandle
					? defaultHandle
					: createHandle(name)
		});
	}

	function createHandle(name) {
		name = name.replace(" ", "_");
		const handle = document.createElement("cq-baseline-handle");
		handle.classList.add("stx-baseline-handle", name);
		self.container.append(handle);
		self.controls[`${name} cq-baseline-handle`] = handle;
		return handle;
	}
};

/**
 * Removes a renderer from {@link CIQ.ChartEngine#baselineHelper}.
 *
 * If the renderer is not the renderer of the main series, removes the baseline handle associated
 * with the renderer from the chart controls object, {@link CIQ.ChartEngine.htmlControls} (see
 * also {@link CIQ.ChartEngine#registerBaselineToHelper}).
 *
 * @param {CIQ.Renderer} renderer The renderer to remove from the baseline helper.
 *
 * @memberof CIQ.ChartEngine
 * @since 8.2.0
 */
CIQ.ChartEngine.prototype.removeBaselineFromHelper = function (renderer) {
	const { baselineHelper } = this;
	if (baselineHelper.has(renderer)) {
		const name = renderer.params.name.replace(" ", "_");
		if (name !== "_main_series") {
			let handle = baselineHelper.get(renderer).handle;
			delete this.controls[`${name} cq-baseline-handle`];
			this.container.removeChild(handle);
		}
		baselineHelper.delete(renderer);
	}
};

/**
 * Checks an emitted event to determine whether a baseline handle DOM element is the event target
 * or is in the
 * <a href="https://developer.mozilla.org/en-US/docs/Web/API/Event/composedPath" target="_blank">
 * composed path</a> of the event. If so, sets {@link CIQ.ChartEngine#currentBaseline} to the
 * renderer of the baseline positioned by the handle.
 *
 * @param {Event} e The event that is checked to determine whether a baseline handle is the event
 * 		target or is in the propagation path of the event.
 * @param {boolean} grabStart If true (and a baseline handle is the event target or is in the
 * 		event path), baseline repositioning is initiated.
 * @return {boolean} True if a baseline handle is the event target or is in the path of the event,
 * 		otherwise false.
 *
 * @memberof CIQ.ChartEngine
 * @since 8.2.0
 */
CIQ.ChartEngine.prototype.findBaselineHandle = function (e, grabStart) {
	for (const baseline of this.baselineHelper) {
		const [renderer, values] = baseline;
		const { handle } = values;
		if (
			e.target === handle ||
			(e.composedPath && e.composedPath().includes(handle))
		) {
			if (grabStart) {
				this.repositioningBaseline = { lastDraw: Date.now(), handle, renderer };
				handle.classList.add("stx-grab");
			}
			this.currentBaseline = renderer;
			return true;
		}
	}
	return false;
};

/**
 * Sets `baseline.actualLevel` for any line renderers that are attached to the chart. (See the
 * `baseline` parameter of {@link CIQ.Renderer.Lines}, which may be type
 * {@link CIQ.ChartEngine.Chart#baseline}.)
 *
 * **Note:** Does not set <a href="CIQ.ChartEngine.Chart.html#baseline%5B%60actualLevel%60%5D">
 * CIQ.ChartEngine.Chart#baseline[&#96;actualLevel&#96;]</a>; that is done in
 * {@link CIQ.ChartEngine.AdvancedInjectable#createDataSegment}.
 *
 * @param {CIQ.ChartEngine.Chart} chart Chart for which the renderer baseline levels are set.
 * @memberof CIQ.ChartEngine
 * @since 8.1.0
 */
CIQ.ChartEngine.prototype.setBaselines = function (chart) {
	if (!chart) chart = this.chart;
	const self = this;
	const { baselineHelper } = this;
	baselineHelper.forEach(function (values, renderer) {
		let { baseline } = renderer.params;
		const useMain = baseline === true;
		if (useMain) baseline = chart.baseline;
		let { defaultLevel, userLevel } = baseline;
		const yAxis = renderer.getYAxis(self);
		// When interacting with the chart, occasionally yAxis or panel parameter not up to date b/c it we are currently being modifying something.
		// In this case return, to let the modifications finish and the final draw call will correct everything.
		if (!yAxis) return;
		const yBaselineRenderer = self.getYAxisBaselineRenderer(yAxis);
		// Default to the first series on the active renderer of a yAxis
		const id =
			yBaselineRenderer &&
			yBaselineRenderer != self.mainSeriesRenderer &&
			yBaselineRenderer.seriesParams.length &&
			yBaselineRenderer.seriesParams[0].id;

		baseline.actualLevel =
			userLevel || userLevel === 0 ? userLevel : defaultLevel;
		if (!baseline.actualLevel && baseline.actualLevel !== 0) {
			let actualLevel = calculateActualLevel(id, useMain);
			if (actualLevel !== null) baseline.actualLevel = actualLevel;
		}

		values.display = yBaselineRenderer === renderer ? true : false;
		baselineHelper.set(renderer, values);
	});

	function calculateActualLevel(id, useMain) {
		const { dataSegment, dataSet, defaultPlotField } = chart;
		let field = defaultPlotField;
		if (!useMain) field = id;
		let record = self.getFirstLastDataRecord(dataSegment, "tick");
		if (!record) return null;
		let position = record.tick;
		while (true) {
			const quote = dataSet[position];
			if (quote) {
				if (!useMain || field != "Close") {
					const q1 = dataSet[position - 1];
					if (q1 && (q1[field] || q1[field] === 0)) {
						const q = q1[field];
						return typeof q === "object" ? q[defaultPlotField] : q;
					}
				} else if (quote.iqPrevClose || quote.iqPrevClose === 0) {
					return quote.iqPrevClose;
				}
			}
			position--;
			if (position < 0) break;
		}
	}
};

/**
 * Sets the userLevel of the baseline; that is, the position of the baseline as it being
 * repositioned by the user (see CIQ.ChartEngine.Chart#baseline[`userLevel`]).
 *
 * @memberof CIQ.ChartEngine
 * @private
 * @since 8.2.0
 */
CIQ.ChartEngine.prototype.setBaselineUserLevel = function () {
	const { chart, currentPanel: panel } = this;
	const { lastDraw, renderer } = this.repositioningBaseline;

	if (renderer.params.panel != panel.name) return;

	const { baseline: defaultBaseline } = chart;
	const baseline =
		typeof renderer.params.baseline === "object"
			? renderer.params.baseline
			: defaultBaseline;
	const rAxis = renderer.getYAxis(this);
	const value = this.valueFromPixel(
		this.backOutY(CIQ.ChartEngine.crosshairY),
		panel,
		rAxis
	);

	baseline.userLevel = this.adjustIfNecessary(panel, this.crosshairTick, value);

	if (Date.now() - lastDraw > 100) {
		this.draw();
		this.repositioningBaseline.lastDraw = Date.now();
	}
};

/**
 * Sets the minimum and maximum values for a y-axis based on the position of the baseline
 * associated with the axis.
 *
 * @param {number[]} minMax A tuple representing the minimum and maximum values in `dataSegment`.
 * @param {CIQ.ChartEngine.YAxis} yAxis The y-axis for which the minimum and maximum values are
 * 		set.
 * @return {number[]} A tuple representing the minimum and maximum values of `yAxis`.
 *
 * @memberof CIQ.ChartEngine
 * @private
 * @since 8.2.0
 */
CIQ.ChartEngine.prototype.setBaselineMinMax = function (minMax, yAxis) {
	const { baselineHelper, chart, repositioningBaseline } = this;
	const { baseline: defaultBaseline, seriesRenderers } = chart;
	const doTransform = chart.transformFunc && yAxis === chart.panel.yAxis;

	const baselineToDisplay = yAxis.renderers.find((name) => {
		return baselineHelper.get(seriesRenderers[name]);
	});

	if (!baselineToDisplay) return minMax; // No baselines found

	let { baseline, type } = seriesRenderers[baselineToDisplay].params;
	if (type === "mountain") return minMax;

	baseline = typeof baseline === "object" ? baseline : defaultBaseline;
	let { actualLevel } = baseline;
	if (actualLevel || actualLevel === 0) {
		if (doTransform)
			actualLevel = chart.transformFunc(this, chart, actualLevel);
		const diff = Math.max(actualLevel - minMax[0], minMax[1] - actualLevel);
		minMax[0] = repositioningBaseline ? yAxis.lowValue : actualLevel - diff;
		minMax[1] = repositioningBaseline ? yAxis.highValue : actualLevel + diff;
	}
	return minMax;
};

/**
 * Positions a baseline handle within the chart area.
 *
 * @param {CIQ.Renderer} renderer The renderer that renders the baseline.
 *
 * @memberof CIQ.ChartEngine
 * @since 8.2.0
 */
CIQ.ChartEngine.prototype.positionBaselineHandle = function (renderer) {
	if (!this.manageTouchAndMouse) return;
	const { baselineHelper, chart, panels } = this;
	let { baseline, panel: panelName } = renderer.params;
	const yAxis = renderer.params.yAxis || renderer.getYAxis(this);
	let { display: displayed, handle, styleCache } = baselineHelper.get(renderer);

	if (baseline === true) baseline = chart.baseline;
	if (baseline.userLevel === false || !displayed) {
		handle.style.display = "none";
		return;
	}
	const panel = panels[panelName];
	const grabbed = handle.classList.contains("stx-grab");
	let display = "block";

	let price = baseline.actualLevel;
	if (yAxis === chart.yAxis && chart.transformFunc)
		price = chart.transformFunc(this, chart, price);
	if (price > yAxis.high) {
		price = yAxis.high;
		if (!grabbed) display = "none";
	} else if (price < yAxis.low) {
		price = yAxis.low;
		if (!grabbed) display = "none";
	}

	// If chart has been transformed, transform it back or it will be transformed twice!
	if (yAxis === chart.yAxis && chart.untransformFunc)
		price = chart.untransformFunc(this, chart, price);

	const basePixel = this.pixelFromPrice(price, panel, yAxis);
	if (!styleCache) styleCache = getComputedStyle(handle);
	const width = CIQ.stripPX(styleCache.width);

	let top = `${basePixel - CIQ.stripPX(styleCache.height) / 2}px`;

	let left;
	let buffer = this.baselineHandleBuffer || 2;
	let rightIndex = panel.yaxisRHS.indexOf(yAxis) + 1;
	if (rightIndex) {
		let pad = rightIndex === 1 ? buffer : buffer * rightIndex;
		left = `${chart.right - width * rightIndex - pad}px`;
	} else {
		let leftIndex = panel.yaxisLHS.slice(0).reverse().indexOf(yAxis) + 1;
		let pad = leftIndex === 1 ? buffer : buffer * leftIndex;
		left = `${chart.left + width * leftIndex + pad - width}px`;
	}
	Object.assign(handle.style, { display, top, left });
};

/**
 * Gets the baseline renderer associated with a y-axis.
 *
 * Since a y-axis can only have one baseline associated with it, this function searches the
 * renderers property of the axis, checking for the first renderer that matches an entry in
 * {@link CIQ.ChartEngine#baselineHelper}.
 *
 * @param {CIQ.ChartEngine.YAxis} yAxis The y-axis whose list of renderers is checked for a
 * 		baseline renderer.
 * @return {CIQ.Renderer|null} The y-axis renderer that renders a baseline or, if a baseline
 * 		renderer is not associated with the y-axis, null.
 *
 * @memberof CIQ.ChartEngine
 * @since 8.2.0
 */
CIQ.ChartEngine.prototype.getYAxisBaselineRenderer = function (yAxis) {
	if (!yAxis.renderers.length) return null;
	const { baselineHelper, chart } = this;

	let name = yAxis.renderers.find((name) => {
		return baselineHelper.get(chart.seriesRenderers[name]);
	});

	if (!name) return null;
	return chart.seriesRenderers[name];
};

/**
 * Gets the baseline object for a y-axis associated with a baseline.
 *
 * A y-axis can be associated with only one baseline; and so, can have only one baseline renderer
 * and one baseline object.
 *
 * @param {CIQ.ChartEngine.YAxis} yAxis A y-axis associated with a baseline.
 * @returns {object} The baseline object of the y-axis baseline renderer if the y-axis has a
 * 		baseline renderer and the baseline parameter of the renderer is an object; otherwise,
 * 		the default chart baseline object, {@link CIQ.ChartEngine.Chart#baseline}.
 *
 * @memberof CIQ.ChartEngine
 * @since 8.2.0
 *
 * @see {@link CIQ.ChartEngine#getYAxisBaselineRenderer}
 */
CIQ.ChartEngine.prototype.getYAxisBaseline = function (yAxis) {
	const { baseline: defaultBaseline } = this.chart;
	const baselineRenderer = this.getYAxisBaselineRenderer(yAxis);

	if (!baselineRenderer) return defaultBaseline;
	const { baseline } = baselineRenderer.params;
	return typeof baseline === "object" ? baseline : defaultBaseline;
};

};


let __js_core_engine_chart_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Defines an object used for rendering a chart and is automatically created by the {@link CIQ.ChartEngine}.
 * Chart objects contain the data and config for each chart but they don't actually exist on the screen until a panel is attached.
 * A chart object is attached to both the main chart panel and any related study panels so they can share the same chart data.
 *
 * Example: stxx.panels['chart'].chart
 *
 * Example: stxx.chart (convenience shortcut for accessing the main chart object - same as above)
 *
 * Example stxx.panels['Aroon (14)'].chart
 *
 * @constructor
 * @name  CIQ.ChartEngine.Chart
 */
CIQ.ChartEngine.Chart = function () {
	this.xAxis = new CIQ.ChartEngine.XAxis();
	/**
	 * @type CIQ.ChartEngine.YAxis
	 * @memberof CIQ.ChartEngine.Chart#
	 */
	this.yAxis = new CIQ.ChartEngine.YAxis();
	this.symbolObject = { symbol: null };
	this.series = {};
	this.seriesRenderers = {};
	this.xaxis = [];
	/**
	 * @type object
	 * @memberof CIQ.ChartEngine.Chart#
	 */
	this.state = {};
	this.endPoints = {};
	this.defaultChartStyleConfig = {};
	this.baseline = CIQ.clone(this.baseline); // copy from prototype
	/**
	 * @type CIQ.ChartEngine.Panel
	 * @memberof CIQ.ChartEngine.Chart#
	 */
	this.panel = undefined;
};

CIQ.extend(
	CIQ.ChartEngine.Chart.prototype,
	{
		/**
		 * The current symbol for the chart
		 * @type string
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		symbol: null,
		/**
		 * The current symbolObject for the chart. Generally this is simply `{symbol: symbol}`.
		 * This is initialized by {@link CIQ.ChartEngine#loadChart}.
		 * @type {object}
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		symbolObject: { symbol: null },
		/**
		 * Set this to preset an alternate name for the symbol on the chart label and comparison legend.
		 * You can set  `stxx.chart.symbolDisplay='yourName'; ` right before calling `loadChart()`.
		 * Alternatively, a good place to set it is in your fetch function, if using {@link quotefeed}. See example.
		 * @type string
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @example
		 * // on your initial data fetch call add the following
		 * params.stx.chart.symbolDisplay='yourName for '+params.symbol;
		 */
		symbolDisplay: null,
		/**
		 * Contains information about the series that are associated with the chart.
		 * Series are additional data sets, such as used for comparison charts.
		 * Note that a series may have a different y-axis calculation than the price chart.
		 * See the "parameters" section of {@link CIQ.ChartEngine#addSeries} for details
		 * @type {object}
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		series: {},
		/**
		 * Contains "renderers" that are used to create the visualizations for series.
		 *
		 * Renderers will be drawn in their object order, which can be altered if needed to force certain renderings to be drawn before or after others. See example.
		 *
		 * @type {object}
		 * @memberof CIQ.ChartEngine.Chart#
		 * @example <caption> This sample code shows how to move up one place a renderer called "comparison D" </caption>
		 * var rendererName = "comparison D";
		 * var newRenderers = {};
		 * var pos = 0;
		 * var r;
		 *
		 * for (r in stxx.chart.seriesRenderers) {
		 *     if (r == rendererName) break;
		 *     pos++;
		 * }
		 *
		 * if (pos) { // Not already at top.
		 *     var i = 0;
		 *     for (r in stxx.chart.seriesRenderers) {
		 *         if (i == pos - 1) newRenderers[rendererName] = stxx.chart.seriesRenderers[rendererName];
		 *         if (r == rendererName) continue;
		 *         newRenderers[r] = stxx.chart.seriesRenderers[r];
		 *         i++;
		 *     }
		 *     stxx.chart.seriesRenderers = newRenderers;
		 * }
		 */
		seriesRenderers: {},
		/**
		 * Current number of ticks scrolled in from the end of the chart.
		 * Setting to zero would theoretically cause the chart to be scrolled completely to the left showing an empty canvas.
		 * Setting to 10 would display the last 10 candles on the chart.
		 * Setting to `maxTicks` would display a full screen on the chart (assuming enough data is available).
		 *
		 * To immediately activate, call [draw()]{@link CIQ.ChartEngine#draw}
		 * @type number
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @example <caption> Scroll to the most current (beginning) position in the chart.</caption>
		 * stxx.chart.scroll=0;
		 * @example <caption> Scroll to the end of the chart.</caption>
		 * stxx.chart.scroll=stxx.chart.dataSet.length;
		 */
		scroll: 0,
		isComparison: false, // Used internally, indicates if chart is in comparison mode
		/**
		 * If true, [comparisons]{@link CIQ.ChartEngine#addSeries} force a 'percent' chart scale every time a new series is added,
		 * and once the last comparison series is removed, the chart will be forced to 'linear' scale.
		 * In between adding series, the scale can be changed at any time by programmatically calling calling {@link CIQ.ChartEngine#setChartScale}
		 *
		 * If false, the chart will not change scale when a comparison series is added or removed and {@link CIQ.ChartEngine#setChartScale} must be explicitly called to set the desired scale.
		 * This allows for more flexibility in case 'linear' and 'percent' are not the preferred default scales, or the UI is requires to manage the scale separately.
		 *
		 * Note this will only take effect on the main chart panel's main axis.
		 *
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 6.2.0
		 */
		forcePercentComparison: true,
		/**
		 * Will contain the maximum number of bars that can be displayed on the chart.
		 * This number is auto-computed by the ChartEngine when the user zooms or the size of the chart changes.
		 * Since charts can pan slightly off the edge of the screen, this number is width/candleWidth + 2 in order allow partial candles to be displayed on both edges.
		 * @type number
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		maxTicks: 0, // Horizontal number of chart ticks that currently fit in the canvas, based on candlewidth and spacing. This is generally one greater than the actual size of the canvas due to candle clipping.
		/**
		 * Set to a value between 0 and 1 to soften the curves on a line or mountain chart for the primary series.
		 *
		 * This only affects the primary chart series. For setting tension on additional series see {@link CIQ.ChartEngine#addSeries}
		 *
		 * Splining is a mathematical process that rounds the connectors between segments.
		 * This results in a very pleasing, smooth look.
		 * Please note that technical analysts generally do not like splined charts because they obscure the actual closing prices of securities. Splining should be used only when the use case doesn't require exact values.
		 * @type number
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		tension: null,
		/**
		 * READ ONLY. A "snapshot" of the market for the active instrument.
		 * This data is ephemeral in nature and not used to produce a time series chart.
		 * But rather used on our peripheral plugins that require more details on the current market, such as [TFC]{@link CIQ.TFC} and [Active Trader]{@link CIQ.MarketDepth}.
		 * This data is programmatically collated from the incoming data and is updated with the most recent information so it should not be altered manually.
		 *
		 * The `currentMarketData` object contains the following information:
		 *  - Last Bid
		 *  - Last Ask
		 *  - Last Price
		 *  - Last Size
		 *  - Lastest Level 2 information
		 *
		 * For more details see {@link CIQ.ChartEngine#updateCurrentMarketData}
		 * @type object
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 6.1.0
		 */
		currentMarketData: {},
		/**
		 * READ ONLY. The master data for this chart.
		 * This data is never modified by the chart engine itself and should not be altered directly.
		 *
		 * Use {@link CIQ.ChartEngine#loadChart} , {@link CIQ.ChartEngine#updateChartData} to load/update this object.
		 *
		 * See the [Data Integration]{@tutorial DataIntegrationOverview} tutorial for details.
		 * @type array
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		masterData: null,
		/**
		 * Contains the current complete data set created from {@link CIQ.ChartEngine.Chart#masterData} by {@link CIQ.ChartEngine#createDataSet}; adjusted for periodicity and with calculated studies.
		 *
		 * See the [Data Integration]{@tutorial DataIntegrationOverview} and [Studies]{@tutorial Using and Customizing Studies} tutorials for more details.
		 * @type array
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		dataSet: null,
		/**
		 * Contains a copy of the {@link CIQ.ChartEngine.Chart#dataSet}, scrubbed for null entries (gap dates).
		 * This is used by studies to avoid gaps being interpreted as "zero" values and throwing off calculations.
		 *
		 * See the  [Studies]{@tutorial Using and Customizing Studies} tutorial for more details.
		 * @type array
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		scrubbed: null,
		/**
		 * READ ONLY. Contains the portion of the {@link CIQ.ChartEngine.Chart#dataSet} that is currently displayed on the screen (view-window).
		 * It includes both full and partial bars, and may even include a bar whose visible portion is entirely off the screen.
		 * As the chart is panned or zoomed, the dataSegment is updated to reflect the new position in the chart.
		 *
		 *  To properly access the portion of the dataSegment representing bars that are at least 50% showing on the screen, use {@link CIQ.ChartEngine#getDataSegment}.
		 *
		 * See the [Data Integration]{@tutorial DataIntegrationOverview} tutorial for details.
		 * @type array
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		dataSegment: null,
		/**
		 * READ ONLY. Contains data pertaining to variable width candles, such as volume candles, used to determine location of bars on the screen.
		 * @type array
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		segmentImage: null,
		/**
		 * Parameters used to control the baseline in baseline_delta charts
		 * @type {object}
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		baseline: {
			/**
			 * includeInDataSegment - If set to true, forces a line chart (usually a baseline chart) to begin inside the chart,
			 *                        whereas normally the first point in a line chart is off the left edge of the screen.
			 *
			 * **Note:** Only applies when set by the chart, will not work if set by a renderer.
			 * @type boolean
			 * @default
			 * @alias CIQ.ChartEngine.Chart#baseline[`includeInDataSegment`]
			 * @memberof CIQ.ChartEngine.Chart#baseline
			 */
			includeInDataSegment: false,
			/**
			 * defaultLevel - If set to a value, overrides the default behavior of baseline chart
			 *                which is to set baseline to leftmost point visible on the chart.
			 * @type number
			 * @alias CIQ.ChartEngine.Chart#baseline[`defaultLevel`]
			 * @memberof CIQ.ChartEngine.Chart#baseline
			 */
			defaultLevel: null,
			/**
			 * userLevel - Value of the user-set baseline level.  To prevent user from adjusting the baseline,
			 *             set this property to false.
			 * @type boolean|number
			 * @default
			 * @alias CIQ.ChartEngine.Chart#baseline[`userLevel`]
			 * @memberof CIQ.ChartEngine.Chart#baseline
			 */
			userLevel: null,
			/**
			 * actualLevel - This is computed automatically.  Do not set.
			 * @type number
			 * @default
			 * @alias CIQ.ChartEngine.Chart#baseline[`actualLevel`]
			 * @memberof CIQ.ChartEngine.Chart#baseline
			 */
			actualLevel: null
		},
		/**
		 * Contains the {@CIQ.ChartEngine.XAxis} object for the chart.
		 * @type CIQ.ChartEngine.XAxis
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		xAxis: null, // x-axis for the chart
		/**
		 * Contains data entries for the full x-axis, including entries for "future" bars that are displayed on the chart.
		 * floatDate and headsUp use these values for display to the user.
		 * It is a superset of dataSegment.
		 * @type {array}
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		xaxis: [],
		/**
		 * Determines at which zoom level interior axis points are displayed. Value in pixels.
		 * @type number
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		xaxisFactor: 30,
		/**
		 * READ ONLY. Maximum number of decimal places in data set.
		 *
		 * This can be changed by setting {@link CIQ.ChartEngine.Chart#calculateTradingDecimalPlaces} to a different function.
		 * See {@link CIQ.calculateTradingDecimalPlaces} for more details.
		 * @type number
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		decimalPlaces: 2,
		/**
		 * If true, the y-axis width is based on the width of the displayed instrument prices.
		 *
		 * To prevent constant resizing of the y-axis, the dynamic width setting starts at the
		 * initial axis width ({@link CIQ.ChartEngine.YAxis#width}) and increases to ensure all
		 * digits are in view as the user zooms and pans the chart. The dynamic width setting
		 * returns to the initial width only when key events happen, such as removing a study or
		 * series or changing the instrument.
		 *
		 * Applies to all y-axes attached to a chart.
		 *
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 5.1.1
		 *
		 * @see {@link CIQ.ChartEngine.AdvancedInjectable#resetDynamicYAxis}.
		 */
		dynamicYAxis: true,
		roundit: 100, // Computed automatically to round y-axis display
		/**
		 * Used to determine chart display characteristics that are dependent on chart size, such
		 * as the width and font of the y-axis.
		 *
		 * Meant to be used in tandem with CSS responsive design breakpoints. Do not set directly;
		 * instead use {@link CIQ.ChartEngine#notifyBreakpoint}, which ensures that the relevant
		 * styles (which have already been calculated) are updated based on the new breakpoint.
		 *
		 * @type string
		 * @default null
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 8.2.0
		 */
		breakpoint: null,
		/**
	     * Function used to render the Legend when multiple series are being displayed on the main chart panel.
	     * Update your prototype or a specific chart instance, if you want to use a different rendering method for legend.
	     *
	     * To activate the legend, you must first define the location in `stx.chart.legend`.
	     * This is done by providing the x and y coordinates for the first element in the legend as follows:
	     * ```
	     * stxx.chart.legend={
	     * 		x: yourXlocation,
	     * 		y: yourYlocation
	     * };
	     * ```
	     *
	     * Once set, a legend item for each series you add will be added as defined by this function.
	     *
	     * Defaults to {@link CIQ.drawLegend}, which uses {@link CIQ.drawLegendItem}
	     * @type function
	     * @default
	     * @memberof CIQ.ChartEngine.Chart#
	     * @example
	     * // define your legend renderer
	     * stxx.chart.legendRenderer = yourFunction; // must follow the function signature of {@link CIQ.drawLegend};
	     * // actiate the legend
	     * stxx.chart.legend={
	     * 		x: 50,
	     * 		y: 50
	     * };
	     * @example
	     * // sample series legend function
		 	stxx.chart.legendRenderer = function(stx, params){
				var coordinates=params.coordinates;
				var context=stx.chart.context;
				context.textBaseline="top";
				var rememberFont=context.font;
				stx.canvasFont("stx-legend",context);

				var chart=params.chart;
				if(!coordinates) coordinates=chart.legend;
				var xy=[coordinates.x, coordinates.y];
				var lineColor=stx.defaultColor;

				for(var i=0;i<2;i++){ // loop twice, first for the base then again for the series
					for(var field in params.legendColorMap){
						var legendItem=params.legendColorMap[field];
						if(legendItem.isBase && (i || params.noBase)) continue;
						if(!legendItem.isBase && !i) continue;
						var c;
						if(legendItem.color instanceof Array){
							var colors=legendItem.color;
							for(c=colors.length-1;c>=0;c--){
								if(CIQ.isTransparent(colors[c])) colors.splice(c,1);
							}
							if(colors.length>1){
								var grd=context.createLinearGradient(xy[0],xy[1],xy[0]+10,xy[1]);
								for(c=0;c<colors.length;c++){
									grd.addColorStop(c/(colors.length-1),colors[c]);
								}
								lineColor=grd;
							}else if(colors.length>0){
								lineColor=colors[0];
							}else{
								lineColor=stx.getCanvasColor("stx_line_chart");
							}
						}else{
							lineColor=null;
						}
						if(lineColor) {
							var display = field;
							if (legendItem.display){
								display = legendItem.display;
							}
							if(!display){
								if(chart.symbolDisplay){
									display=chart.symbolDisplay;
								}else{
									display=chart.symbol;
								}
							}
							if(xy[0]+context.measureText(display).width>chart.panel.right){
								xy=[coordinates.x, coordinates.y+context.measureText("M").width+6];  // M is squarish, with width roughly equaling height: https://stackoverflow.com/questions/1134586/how-can-you-find-the-height-of-text-on-an-html-canvas
							}
							xy=CIQ.drawLegendItem(stx, xy, display, lineColor, legendItem.opacity);
						}
					}
				}
				context.font=rememberFont;
			};
	     * @since 07/01/2015
	     */
		legendRenderer: CIQ.drawLegend,
		/**
		 * This object is used to temporarily override the coloring logic used on some default chart types,
		 * or to completely override the `layout.chartType` allowing you to then define a totally custom rendering.
		 *
		 *  The colorFunction is only available on the following chart types:
		 *  - Colored Line
		 *  - Colored Bar
		 *  - Colored Mountain
		 *  - Colored Step
		 *  - Candle
		 *  - Hollow Candle
		 *  - Volume Candle
		 *
		 * Expected format :
		 *```
		 *chartEngine.chart.customChart={colorFunction: myColorFunction}
		 *```
		 *```
		 *chartEngine.chart.customChart={chartType:myChartType}
		 *```
		 *```
		 *chartEngine.chart.customChart={colorFunction: myColorFunction, chartType:myChartType}
		 *```
		 * Where:
		 * - `myColorFunction` is the function that contains the logic for overriding default color logic for a **default** chart. Please contact us for more guidance on how to create your own chart types.
		 *  - This function must support the following parameters:
		 *	 - [stx]{@link CIQ.ChartEngine}	- A chart object
		 *	 - quote	- A properly formatted OHLC object.
		 *	 - mode	- A string applicable on 'candle', 'hollow_candle' and 'volume_candle' charts only. Allowed values:
		 *	  - `shadow`- indicates the function is asking for the candle wick color
		 *	  - `outline` indicates the function is asking for the candle border color
		 *	  - `solid` indicates the function is asking for the candle fill color(Inside of candle. Not applicable on 'hollow_candle' or 'volume_candle')
		 *   - Example: `myColorFunction(stx,quote,mode);`
		 *  - This function must return a `string|object` representing the color to use for the bar, candle or line segment component.
		 *  - Return `null` to skip the current datapoint and draw nothing in its place.
		 *  - For colored line charts a color/pattern combination can be returned in an object of the following format: `{pattern:[3,3],color:"red"}`
		 * - `myChartType` is the name of your **custom** chart. Setting this value will force "displayChart" to execute your exact code for rendering a chart. You will need to add your rendering code inside a "displayChart" API injection ( **must be an append** to be executed after the default functionality.).
		 *
		 * You may set to null any of the parameters to default to existing settings.<br>
		 * <br>If you are simply setting the customChart object in-line, rather than using it as part of an AP injection into the animation loop, it may be necessary to call `setMainSeriesRenderer` to immediately display results.<br>
		 * <br>To restore the original chart settings, set this object to null (and call setMainSeriesRenderer() if necessary).
		 *
		 * See {@tutorial Chart Styles and Types} for more details.
		 * @type object
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @example <caption> Using the customChart object in-line on your code:</caption>
		 * //you may want to add a menu selection to activate a special candle chart by executing this code in response to the menu selection:
		 * stxx.chart.customChart={colorFunction: function(stx, quote, mode){
		 *		if(mode=="shadow" || mode=="outline") return "black";  //draw black wicks and borders
		 *		else{
		 *			if(quote.Close>100) return "green";
		 * 			else if(quote.DT.getHours()<12) return "yellow";
		 *			else return "orange";
		 *		}
		 *		return null;
		 *	  }
		 * 	};
		 * stxx.setMainSeriesRenderer();
		 *
		 * // to deactivate, you can execute this code:
		 * stxx.chart.customChart={colorFunction: null};
		 * stxx.setMainSeriesRenderer();
		 * @example <caption> Using the customChart object inside an API injection: </caption>
		 * CIQ.ChartEngine.prototype.prepend("displayChart", function(chart){
		 *     if ( this.layout.chartType =="candle")
		 *         this.chart.customChart={
		 *             colorFunction:function(stx, quote, mode){
		 *                 if(quote.Close>quote.iqPrevClose) return "blue";
		 *                 else if(quote.Close<quote.iqPrevClose) return "yellow";
		 *                 else return "gray";
		 *             }
		 *        }
		 *    else
		 *        this.chart.customChart = null;
		 * });
		 */
		customChart: null,
		/**
		 * How much padding to leave for the right y-axis. Default is enough for the axis. Set to zero to overlap y-axis onto chart.
		 * @type number
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 07/01/2015
		 * @example
		 * stxx.chart.yaxisPaddingRight=0;
		 * stxx.chart.yAxis.displayBorder=false; // hide the vertical axis line.
		 * //must call the following 2 lines to activate if the axis is already drawn.
		 * stxx.calculateYAxisPositions();
		 * stxx.draw();
		 */
		yaxisPaddingRight: null,
		/**
		 * How much padding to leave for the left y-axis. Default is enough for the axis. Set to zero to overlap y-axis onto chart.
		 * @type number
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 07/01/2015
		 * @example
		 * stxx.chart.yaxisPaddingLeft=0;
		 * stxx.chart.yAxis.displayBorder=false; // hide the vertical axis line.
		 * //must call the following 2 lines to activate if the axis is already drawn.
		 * stxx.calculateYAxisPositions();
		 * stxx.draw();
		 */
		yaxisPaddingLeft: null,
		tickCache: {}, // private
		/**
		 * How much to multiply the yAxis.initialMarginTop and yAxis.initialMarginBottom for the main chart. Set to 1 to keep the initial values.
		 * @type number
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 8.6.0
		 */
		yaxisMarginMultiplier: 2.5,
		/**
		/**
		 * If set to false, during zooming and panning operations the chart will be anchored on left side preventing white space to be created past the oldest tick.
		 * If both {@link CIQ.ChartEngine.Chart#allowScrollPast} and {@link CIQ.ChartEngine.Chart#allowScrollFuture} are set to false, allowScrollFuture will take precedence if the candle is manually set to create space ({@link CIQ.ChartEngine#setCandleWidth}), but automated zoom operations ({@link CIQ.ChartEngine#zoomOut}) will maintain both scroll restrictions.
		 *
		 * The amount of white space allowed on the right will be limited by {@link CIQ.ChartEngine#minimumLeftBars}
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @example
		 * stxx.chart.allowScrollPast=false;
		 */
		allowScrollPast: true,
		/**
		 * If set to false, during zooming and panning operations the chart will be anchored on right side preventing white space to be created beyond the newest tick.
		 * If both {@link CIQ.ChartEngine.Chart#allowScrollPast} and {@link CIQ.ChartEngine.Chart#allowScrollFuture} are set to false, allowScrollFuture will take precedence if the candle is manually set to create space ({@link CIQ.ChartEngine#setCandleWidth}), but automated zoom operations ({@link CIQ.ChartEngine#zoomOut}) will maintain both scroll restrictions.
		 * When viewing a specified date range on the chart, if this flag is set to false, any portion of the range beyond the last quote will not be displayed.
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @example
		 * stxx.chart.allowScrollFuture=false;
		 * @since 6.1.0 Also respects studies that render into the future, such as the Ichimoku cloud.
		 */
		allowScrollFuture: true,
		/**
		 * READ ONLY. Tracks the number of ticks to display as "whitespace" beyond the rightmost area of the chart
		 * when {@link CIQ.ChartEngine.Chart#allowScrollFuture} is set to false.
		 * @type number
		 * @default
		 * @alias whiteSpaceFutureTicks
		 * @memberof CIQ.ChartEngine.prototype
		 * @private
		 * @since 6.1.0
		 */
		whiteSpaceFutureTicks: 0,
		/**
		 * Set to true to temporarily hide drawings
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		hideDrawings: false,
		/**
		 * For line and mountain type charts set this to a value other than "Close" to have those chart types plot a different field.
		 *
		 * @type {string}
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 3.0.0
		 */
		defaultPlotField: "Close",
		/**
		 * For chart types which have configuration settings (such as the aggregate charts renko, kagi, etc) contains those default settings.
		 * This object holds the settings for the current chart type only.
		 * @type {object}
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 3.0.0
		 */
		defaultChartStyleConfig: {},
		/**
		 * Set this to true to turn off auto-scrolling when fresh data comes in. By default, the chart will scroll backward
		 * whenever a new bar comes in, so as to maintain the chart's forward position on the screen. If lockScroll is
		 * true then fresh bars with advance the chart forward (and eventually off the right edge of the screen)
		 *
		 * Note that setSpan({base:"today"}) will set an internal variable that accomplishes the same thing. This is a unique case.
		 * @type {boolean}
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 05-2016-10
		 */
		lockScroll: false,
		/**
		 * Set this to true to include the chart overlay/study values in the calculation to determine the high and low values for the chart.
		 * This may cause the chart to shrink vertically to ensure all study/overlay data is in view.
		 * Setting it to false, will maintain the current candle's height, but some of the study/overlay data may be out of the display range.
		 *
		 * This will affect studies such as 'Pivot Points' where all the pivot lines will be visible by “squeezing the y-axis”.
		 * @type {boolean}
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since
		 * - 2016-12-01.4.13
		 * - 3.0.10 Switched default to true.
		 */
		includeOverlaysInMinMax: true,
		/**
		 * READ ONLY. Gap filling style for the chart (line/mountain chart types only).
		 * By default gaps on lines and mountain charts will not be connected.
		 * Modify by using {@link CIQ.ChartEngine#setGapLines}.
		 * @type {object}
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 4.0.0
		 */
		gaplines: null,
		/**
		 * READ ONLY. Style for the main series renderer.
		 * Set by using {@link CIQ.ChartEngine#setLineStyle}.
		 * @type {object}
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 4.0.0
		 */
		lineStyle: null,
		/**
		 * When candleWidth<1, setting to true will create approximation of a line chart to improve rendering performance.
		 *
		 * Must allow for smaller candle sizes by lowering {@link CIQ.ChartEngine#minimumCandleWidth}
		 * and allow for larger dataset by increasing {@link CIQ.ChartEngine#maxDataSetSize} or setting it to 0.
		 * @type {boolean}
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 4.1.0
		 */
		lineApproximation: true,
		/**
		 * Whether chart's main renderer's bars plot more than one data field (OHLC charts).
		 * When this is true, will disable the use of {@link CIQ.ChartEngine.Chart#defaultPlotField}.
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 5.1.0
		 */
		highLowBars: false,
		/**
		 * Whether chart's main renderer's bars represent a stand-alone entity as opposed to a vertex in a line-type chart.
		 * This is important when the engine tries to render the data points right off the chart; in a stand-alone bar,
		 * the points right off the chart need not be considered.
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 5.1.0
		 */
		standaloneBars: false,
		/**
		 * Whether chart's main renderer's bars have width, as opposed to a line-type chart whose "bars" are just a point on the chart.
		 * This is useful when the engine adjusts the chart for smooth scrolling and homing.
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 5.1.0
		 */
		barsHaveWidth: false,
		/**
		 * Called to determine the number of decimal places in which a security trades.
		 *
		 * The function this is called in {@link CIQ.ChartEngine#setMasterData}. The result is
		 * assigned to {@link CIQ.ChartEngine.Chart#decimalPlaces}, which is used for the heads-up
		 * display and for the current price pointer label.
		 *
		 * Format:
		 * ```javascript
		 * stxx.chart.calculateTradingDecimalPlaces(
		 *     {
		 *          stx: CIQ.ChartEngine,
		 *          chart: CIQ.ChartEngine.Chart,
		 *          symbol: string,
		 *          symbolObject: object
		 *     }
		 * )
		 * ```
		 * @type function
		 * @default {@link CIQ.calculateTradingDecimalPlaces}
		 * @memberof CIQ.ChartEngine.Chart#
		 * @since 8.0.0 Replaces <a href="CIQ.ChartEngine.html#callbacks%5B%60calculateTradingDecimalPlaces%60%5D">CIQ.ChartEngine.callbacks[\`calculateTradingDecimalPlaces\`]</a>.
		 */
		calculateTradingDecimalPlaces: CIQ.calculateTradingDecimalPlaces,
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		width: null,
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		height: null,
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		top: null,
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		bottom: null,
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		left: null,
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		right: null,
		/**
		 * @type CanvasRenderingContext2D
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		context: null,
		/**
		 * @type object
		 * @memberof CIQ.ChartEngine.Chart#
		 */
		endPoints: null
	},
	true
);

};


let __js_core_engine_convert_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Returns the absolute screen position given a Y pixel on the canvas
 * @param  {number} y Y pixel on the canvas
 * @return {number}	  Absolute Y screen position
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.resolveY = function (y) {
	return this.top + y;
};

/**
 * Returns the absolute screen position given a X pixel on the canvas
 * @param  {number} x X pixel on the canvas
 * @return {number}	  Absolute X screen position
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.resolveX = function (x) {
	return this.left + x;
};

/**
 * Returns the relative canvas position given an absolute Y position on the screen
 * @param  {number} y Y pixel on the screen
 * @return {number}	  Relative Y position on canvas
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.backOutY = function (y) {
	return Math.max(0, Math.min(this.height, y - this.top));
};

/**
 * Returns the relative canvas position given an absolute X position on the screen
 * @param  {number} x X pixel on the screen
 * @return {number}	  Relative X position on canvas
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.backOutX = function (x) {
	return Math.max(0, Math.min(this.width, x - this.left));
};

/**
 * Returns a date (in yyyymmddhhmm form) given a tick (location in the dataSet).
 * If the tick lies outside of the dataSet then the date will be arrived at algorithmically by calculating into the past or future.
 * @param  {number} tick  Location in the dataSet
 * @param  {CIQ.ChartEngine.Chart} [chart] A chart object
 * @param  {boolean} [nativeDate] True to return as date object otherwise returns in yyyymmddhhmm form
 * @param  {string} [tickSource] Tick array to search. Defaults to `dataSet`
 * @return {(string|Date)}		  The date form dictated by native param
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.dateFromTick = function (
	tick,
	chart,
	nativeDate,
	tickSource = "dataSet"
) {
	if (!chart) chart = this.chart;
	const tickArray = chart[tickSource];
	let data_len = tickArray.length;
	let dt;
	let iter;
	let result;
	let addedTempDate = false;

	// if empty chart then add current date so this function supports initializing an empty chart in quotefeed
	if (data_len === 0) {
		tickArray[0] = {};
		tickArray[0].DT = new Date();
		data_len = tickArray.length;
		addedTempDate = true;
	}

	if (tick < 0) {
		iter = this.standardMarketIterator(tickArray[0].DT);
		if (iter) dt = iter.previous(Math.abs(tick));
		else dt = tickArray[0].DT;
	} else if (tick >= data_len) {
		iter = this.standardMarketIterator(tickArray[data_len - 1].DT);
		if (iter) dt = iter.next(tick - (data_len - 1));
		else dt = tickArray[data_len - 1].DT;
	} else {
		dt = tickArray[tick].DT;
	}

	if (nativeDate) {
		result = new Date(dt.getTime());
	} else {
		result = CIQ.yyyymmddhhmmssmmm(dt).substr(0, 12);
	}

	if (addedTempDate) {
		delete tickArray[0].DT;
	}
	return result;
};

/**
 * Returns the tick (position in dataSet) given the requested date.
 *
 * The date does not need to match exactly. If the date lies between ticks then the earlier will be returned by default.
 *
 * @param  {Date|string} dt	  Date object or date in string format
 * @param  {CIQ.ChartEngine.Chart} [chart] Chart object
 * @param  {number} [adj] Timezone adjustment in minutes to apply to date before getting tick
 * @param  {boolean} [forward] Switch to return the next tick as opposed to the previous, in case an exact match is not found
 * @param  {string} [tickSource] Tick array to search. Defaults to `dataSet`
 * @return {number}		  The tick location
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.tickFromDate = function (
	dt,
	chart,
	adj,
	forward,
	tickSource = "dataSet"
) {
	if (!chart) chart = this.chart;
	const tickArray = chart[tickSource];
	if (!(tickArray && tickArray.length)) return 0;
	if (!adj) adj = 0;
	const target = dt.constructor == Date ? dt : CIQ.strToDateTime(dt);

	// This line is used by drawings which are saved with a gmt offset.
	if (!CIQ.ChartEngine.isDailyInterval(this.layout.interval))
		target.setMinutes(target.getMinutes() + adj);

	const ms = target.getTime();
	if (!chart.tickCache[tickSource]) chart.tickCache[tickSource] = {};
	let total = chart.tickCache[tickSource][ms];
	if (total || total === 0) {
		return forward ? Math.ceil(total) : Math.floor(total);
	}

	const firstDate = tickArray[0].DT;
	const lastDate = tickArray[tickArray.length - 1].DT;
	if (target >= firstDate && target <= lastDate) {
		let begin = 0;
		let end = tickArray.length;
		let attempts = 0;
		while (++attempts < 100) {
			let i = Math.floor((end + begin) / 2);
			let d = tickArray[i].DT;
			if (+d == +target) {
				chart.tickCache[tickSource][ms] = i;
				return i;
			}
			if (d < target) {
				begin = i;
			}
			if (d > target) {
				if (tickArray[i - 1].DT < target) {
					chart.tickCache[tickSource][ms] = i - 0.5;
					return forward ? i : i - 1;
				}
				if (+tickArray[i - 1].DT == +target) {
					// efficiency
					chart.tickCache[tickSource][ms] = i - 1;
					return i - 1;
				}
				end = i;
			}
		}
		if (attempts >= 100) {
			console.log("!!!Warning: tickFromDate() did not find match.");
			return tickArray.length;
		}
	}

	// start at beginning of chart and work backward into the past, or end of chart and into the future
	const intoThePast = target < firstDate;
	const start = intoThePast ? firstDate : lastDate;
	const iter = this.standardMarketIterator(start);
	const ticks = iter ? iter.futureTick({ end: target }) : 0;
	total = intoThePast ? ticks * -1 : tickArray.length - 1 + ticks;
	chart.tickCache[tickSource][ms] = total;
	return total;
};

/**
 * Returns the X pixel given the location of a bar (`dataSegment`) on the chart.
 *
 * @param {number} bar The bar for which the X pixel is returned (position on the chart, which is
 * 		also the position in the `dataSegment`).
 * @param {CIQ.ChartEngine.Chart} [chart] The chart that contains the bar. Defaults to
 * 		`this.chart`.
 * @return {number} The X pixel on the chart.
 *
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.pixelFromBar = function (bar, chart) {
	if (!chart) chart = this.chart;
	var x = 0,
		segmentImage = this.chart.segmentImage;
	if (
		segmentImage &&
		segmentImage[bar] &&
		typeof segmentImage[bar].leftOffset === "number"
	) {
		x = segmentImage[bar].leftOffset;
	} else {
		x = (bar + 0.5) * this.layout.candleWidth;
	}
	x = chart.panel.left + Math.floor(x + this.micropixels) - 1;
	return x;
};

/**
 * Returns the position (array index) of the first **dataSegment** element encountered given the X pixel.
 * Do not reference this into dataSegment without checking bounds, because the return value may be negative or greater than the dataSegment array length.
 *
 * See {@link CIQ.ChartEngine#tickFromPixel} if you wish to locate the dataSet position.
 *
 * @param  {number} x An X pixel location on the chart
 * @param {CIQ.ChartEngine.Chart} [chart] Which chart to use. Defaults to this.chart.
 * @return {number}	  The bar that lies on the X pixel (may be negative/before or after the chart)
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.barFromPixel = function (x, chart) {
	if (!chart) chart = this.chart;
	var segmentImage = this.chart.segmentImage,
		mp = this.micropixels,
		cw = this.layout.candleWidth;
	if (segmentImage) {
		//binary search
		var pixel = x - chart.panel.left - mp,
			mult = 2,
			quote;
		var length = segmentImage.length;
		var bar = Math.round(length / mult);
		var leftOffset, halfCandleWidth;
		var rightofLastTick =
			segmentImage[length - 1].leftOffset +
			segmentImage[length - 1].candleWidth / 2;
		if (pixel > rightofLastTick) {
			//beyond the rightmost tick
			return (
				length + Math.floor((x - rightofLastTick - chart.panel.left - mp) / cw)
			);
		}
		for (var i = 1; i < length; i++) {
			mult *= 2;
			quote = segmentImage[bar];
			if (!quote) break;
			leftOffset = quote.leftOffset;
			halfCandleWidth = quote.candleWidth / 2;
			var left = leftOffset - halfCandleWidth;
			var right = leftOffset + halfCandleWidth;
			if (bar === 0 || (pixel >= left && pixel < right)) break;
			else if (pixel < left) bar -= Math.max(1, Math.round(length / mult));
			else bar += Math.max(1, Math.round(length / mult));
			bar = Math.max(0, Math.min(length - 1, bar));
		}
		if (!segmentImage[bar]) {
			//sucks, we need to iterate through
			for (i = 0; i < length; i++) {
				quote = segmentImage[i];
				if (!quote) continue;
				leftOffset = quote.leftOffset;
				halfCandleWidth = quote.candleWidth / 2;
				if (pixel < leftOffset - halfCandleWidth) return Math.max(0, i - 1);
				else if (pixel < leftOffset + halfCandleWidth) return i;
				else if (pixel >= leftOffset + halfCandleWidth) return i + 1;
			}
		}

		return bar;
	}
	return Math.floor((x - chart.panel.left - mp) / cw);
};

/**
 * Returns the position (array index) of the first data set element (tick) that is plotted at a
 * pixel's x-coordinate.
 *
 * @param {number} x X-coordinate of the pixel where the tick is represented on the chart.
 * @param {CIQ.ChartEngine.Chart} [chart=this.chart] The chart object that contains the data set.
 * @return {number} The tick (position in the data set) that is plotted at the x-coordinate of
 * 		the pixel.
 *
 * @alias tickFromPixel
 * @memberof CIQ.ChartEngine#
 *
 * @see {@link CIQ.ChartEngine#barFromPixel} to locate the data segment position
 */
CIQ.ChartEngine.prototype.tickFromPixel = function (x, chart) {
	if (!chart) chart = this.chart;
	var tick = chart.dataSet.length - chart.scroll;

	if (chart.segmentImage) {
		tick += this.barFromPixel(x, chart);
	} else {
		tick += Math.floor(
			(x - chart.panel.left - this.micropixels) / this.layout.candleWidth
		);
	}
	return tick;
};

/**
 * Returns the x-coordinate (in pixels) at the location where a given tick is plotted. The
 * x-coordinate is the center of the tick location.
 *
 * **Note:** The pixel x-coordinate can be off the visual canvas, and it can overlap the y-axis.
 *
 * @param {number} tick A position in the data set array (tick).
 * @param {CIQ.ChartEngine.Chart} [chart=this.chart] The chart object that contains the data set.
 * @return {number} The x-coordinate in pixels of the plotted tick (can be negative or can be
 * 		greater than `dataSet.length`).
 *
 * @alias pixelFromTick
 * @memberof CIQ.ChartEngine#
 */
CIQ.ChartEngine.prototype.pixelFromTick = function (tick, chart) {
	if (!chart) chart = this.chart;
	var dataSegment = chart.dataSegment,
		dataSet = chart.dataSet,
		segmentImage = chart.segmentImage,
		mp = this.micropixels,
		length = dataSegment ? dataSegment.length : 0;
	var panel = chart.panel,
		scroll = chart.scroll;
	var bar = tick - dataSet.length + scroll,
		quote = length ? dataSegment[bar] : null;

	if (segmentImage) quote = segmentImage[bar];
	if (quote && typeof quote.leftOffset === "number") {
		return panel.left + Math.floor(quote.leftOffset + mp); //in here for volume candle
	}
	//in here for other chart types, or volume candle if bar lies outside of the actual quote data
	var rightOffset = 0,
		dsTicks = 0;
	quote = length ? dataSegment[length - 1] : null;
	if (segmentImage) quote = segmentImage[length - 1];
	if (quote && typeof quote.leftOffset === "number") {
		//volume candle
		if (length <= tick - dataSet.length + scroll) {
			//in the "whitespace" area on the right of the chart
			rightOffset = quote.leftOffset + quote.candleWidth / 2;
			dsTicks = length;
		}
	}
	return (
		rightOffset +
		panel.left +
		Math.floor(
			(tick - dsTicks - dataSet.length + scroll + 0.5) *
				this.layout.candleWidth +
				mp
		)
	);
};

/**
 * Returns the X pixel position for a tick of a given date.
 *
 * The date does not need to match exactly. If the date lies between ticks then the earlier will be returned.
 *
 * **Warning: this can be an expensive operation if the date is not in the dataSet.**
 *
 * @param  {Date|string} date  Date object or String form date
 * @param  {CIQ.ChartEngine.Chart} chart The chart to look in
 * @param  {number} [adj] Timezone adjustment in minutes to apply to date before getting tick
 * @param  {boolean} [forward] Switch to return the next tick as opposed to the previous, in case an exact match is not found
 * @return {number}		  The pixel location for the date
 * @memberof CIQ.ChartEngine
 * @since added adj and forward arguments
 */
CIQ.ChartEngine.prototype.pixelFromDate = function (date, chart, adj, forward) {
	return this.pixelFromTick(
		this.tickFromDate(date, chart, adj, forward),
		chart
	);
};

/**
 * A version of {@link CIQ.ChartEngine#priceFromPixel} that will return the y-axis value given a Y pixel
 * @param  {number} y	  The Y pixel location
 * @param  {CIQ.ChartEngine.Panel} [panel] The panel (defaults to the chart)
 * @param {CIQ.ChartEngine.YAxis} [yAxis] The yAxis to use
 * @return {number}		  The y-axis value
 * @memberof CIQ.ChartEngine
 * @since 4.0.0
 */
CIQ.ChartEngine.prototype.transformedPriceFromPixel = function (
	y,
	panel,
	yAxis
) {
	if (!panel) panel = this.chart.panel;
	var yax = yAxis ? yAxis : panel.yAxis;
	y = yax.bottom - y;
	var price;
	if (yax.semiLog) {
		var logPrice = (y * yax.logShadow) / yax.height;
		if (yax.flipped) logPrice = yax.logHigh - logPrice;
		else logPrice += yax.logLow;
		price = Math.pow(10, logPrice);
	} else {
		if (!yax.multiplier) return null;
		price = y / yax.multiplier;
		if (yax.flipped) price = yax.high - price;
		else price += yax.low;
	}
	return price;
};

/**
 * Returns the actual value of the chart given a pixel regardless of any transformation such as a comparison chart.
 * @param  {number} y	  The Y pixel location
 * @param  {CIQ.ChartEngine.Panel} [panel] The panel to look. Defaults to the chart itself if not passed in.
 * @param {CIQ.ChartEngine.YAxis} [yAxis] The yAxis to use. Defaults to panel.yAxis.
 * @return {number}		  The Y location. This may be off of the visible canvas.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.priceFromPixel = function (y, panel, yAxis) {
	if (!panel) panel = this.chart.panel;
	var price = this.transformedPriceFromPixel(y, panel, yAxis);
	if (this.charts[panel.name] && panel.chart.untransformFunc) {
		if (!yAxis || yAxis == panel.yAxis) {
			price = panel.chart.untransformFunc(this, panel.chart, price, yAxis);
		}
	}
	return price;
};

/**
 * Returns the value (price) given a y-axispixel. The value is relative to the panel or the canvas.
 * @param  {number} y	  The y pixel position
 * @param  {CIQ.ChartEngine.Panel} [panel] A panel object. If passed then the value will be relative to that panel. If not passed then the value will be relative to the panel that is in the actual Y location.
 * @param  {CIQ.ChartEngine.YAxis} [yAxis] Which yAxis. Defaults to panel.yAxis.
 * @return {number}		  The value relative to the panel
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.valueFromPixel = function (y, panel, yAxis) {
	if (!panel) panel = this.whichPanel(y);
	if (!panel) {
		var panels = Object.values(this.panels);
		// If we're not in a current panel then we're off the screen, so choose the top or bottom panel
		// Ideally we never get in here because panel is passed in by the developer!
		if (panels && panels.length) {
			if (y <= 0) {
				panel = panels.shift();
			} else {
				panel = panels.pop();
			}
		}
	}
	return this.priceFromPixel(y, panel, yAxis);
};

/**
 * Calculates the value (price) of a field in a dataSegment record based on linear interpolation of its neighboring records. Whether the chart is in linear or logarithmic scale is taken into the equation.
 * @param	{number} bar	The bar position in the dataSegment
 * @param	{String} fieldName	The field to search for in the dataSegment
 * @param	{String} [subField]	The field to search for in a series within the dataSegment. Defaults to chart.defaultPlotField.
 * @param	{CIQ.ChartEngine.Panel}	[panel]	The panel to look. Defaults to the chart.panel.
 * @param	{CIQ.ChartEngine.YAxis}	[yAxis]	The yAxis to use. Defaults to panel.yAxis.
 * @memberof CIQ.ChartEngine#
 * @return	{number}	The value or price;
 * @since 6.2.5
 */
CIQ.ChartEngine.prototype.valueFromInterpolation = function (
	bar,
	fieldName,
	subField,
	panel,
	yAxis
) {
	if (bar === null || bar < 0 || !fieldName) return null;
	if (!panel) panel = this.chart.panel;
	if (!yAxis) yAxis = panel.yAxis;
	if (!subField) subField = this.chart.defaultPlotField;

	var prevBar = this.getPreviousBar(this.chart, fieldName, bar);
	if (!prevBar) return null; // cannot interpolate if no previous bar

	var prevBarPrice;
	var tuple = CIQ.existsInObjectChain(prevBar, fieldName);
	if (tuple) prevBarPrice = tuple.obj[tuple.member];
	if (typeof prevBarPrice == "object") {
		// most likely a series object
		prevBarPrice = prevBarPrice[subField];
	}

	// if step then the interpolated value is just the previous bar
	var seriesRenderer = this.getRendererFromSeries(fieldName);
	if (
		(seriesRenderer && seriesRenderer.params.step) ||
		this.layout.chartType === "step"
	)
		return prevBarPrice;

	var nextBar = this.getNextBar(this.chart, fieldName, bar);
	var nextBarPrice;
	tuple = CIQ.existsInObjectChain(nextBar, fieldName);
	if (tuple) nextBarPrice = tuple.obj[tuple.member];
	if (typeof nextBarPrice == "object") {
		// most likely a series object
		nextBarPrice = nextBarPrice[subField];
	}

	if (!nextBar) return null; // cannot interpolate if no next bar!
	if (
		prevBarPrice === null ||
		typeof prevBarPrice == "undefined" ||
		nextBarPrice === null ||
		typeof nextBarPrice == "undefined"
	)
		return null;
	// get coordinates of prev and next bars
	var y0 = this.pixelFromPrice(prevBarPrice, panel, yAxis);
	var y1 = this.pixelFromPrice(nextBarPrice, panel, yAxis);
	var x0 = prevBar.tick;
	var x1 = nextBar.tick;

	// calculate the gradient
	var gradient = (y1 - y0) / (x1 - x0);

	// calculate where the series intercepts the gradient
	var seriesTick = this.chart.dataSegment[bar].tick;
	var seriesYValue = gradient * (seriesTick - x0) + y0;

	// get price from series Y value
	return this.priceFromPixel(seriesYValue, panel, yAxis);
};

/**
 * Returns the Y pixel from a transformed/displayed value (percentage comparison change, for example).
 *
 * To get the location of an untransformed price, use {@link CIQ.ChartEngine#pixelFromPrice}.<br>
 * If no transformation is present, both this method and {@link CIQ.ChartEngine#pixelFromPrice} will return the same value.
 * @param  {number} price The transformed price
 * @param  {CIQ.ChartEngine.Panel} [panel] The panel (defaults to the chart)
 * @param {CIQ.ChartEngine.YAxis} [yAxis] The yAxis to use
 * @return {number}		  The Y pixel value
 * @memberof CIQ.ChartEngine
 * @since 4.0.0
 */
CIQ.ChartEngine.prototype.pixelFromTransformedValue = function (
	price,
	panel,
	yAxis
) {
	if (!panel) panel = this.chart.panel;
	var yax = yAxis ? yAxis : panel.yAxis;
	var y = (yax.high - price) * yax.multiplier;
	if (yax.semiLog) {
		var p = Math.max(price, 0);
		var logPrice = Math.log(p) / Math.LN10;
		//if(price<=0) logPrice=0;
		var height = yax.height;
		y = height - (height * (logPrice - yax.logLow)) / yax.logShadow;
	}
	y = yax.flipped ? yax.bottom - y : yax.top + y;
	return y;
};

/**
 * Returns the Y pixel from a price, even if a transformation such as a percentage change comparison scale is active.
 *
 * To do this, the active transformation function will be applied to the provided price and then {@link CIQ.ChartEngine#pixelFromTransformedValue} will be called on the resulting value.<br>
 * If no transformation is present, both this method and {@link CIQ.ChartEngine#pixelFromTransformedValue} will return the same value.
 * @param  {number} price	  The price or value
 * @param  {CIQ.ChartEngine.Panel} panel A panel object (see {@link CIQ.ChartEngine#pixelFromPrice})
 * @param {CIQ.ChartEngine.YAxis} [yAxis] The yaxis to use
 * @return {number}		  The y-axis pixel location
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.pixelFromPrice = function (price, panel, yAxis) {
	if (!panel) panel = this.chart.panel;
	if (this.charts[panel.name] && panel.chart.transformFunc) {
		if (!yAxis || yAxis == panel.yAxis) {
			price = panel.chart.transformFunc(this, panel.chart, price, yAxis); // transform should move to panel
		}
	}
	return this.pixelFromTransformedValue(price, panel, yAxis);
};

/**
 * Returns the Y pixel location for the (split) unadjusted price rather than the displayed price.
 * This is important for drawing tools or any other device that requires the actual underlying price.
 *
 * @param  {CIQ.ChartEngine.Panel} panel The panel to get the value from
 * @param  {number} tick  The tick location (in the dataSet) to check for an adjusted value
 * @param  {number} value The value
 * @param {CIQ.ChartEngine.YAxis} [yAxis] The yaxis to use
 * @return {number}		  The pixel location
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.pixelFromValueAdjusted = function (
	panel,
	tick,
	value,
	yAxis
) {
	// If we're not showing unadjusted quotes, or if the panel isn't a chart then bypass
	if (this.layout.adj || !this.charts[panel.name])
		return this.pixelFromPrice(value, panel, yAxis);
	var a = Math.round(tick); // Not sure why we're rounding this. Possible legacy code.
	// Adjust if there's a ratio attached to the tick
	var ratio;
	if (
		a > 0 &&
		a < panel.chart.dataSet.length &&
		(ratio = panel.chart.dataSet[a].ratio)
	) {
		return this.pixelFromPrice(value * ratio, panel, yAxis);
	}
	// Otherwise pass through
	return this.pixelFromPrice(value, panel, yAxis);
};

/**
 * Returns the unadjusted value for a given value, if an adjustment (split) had been applied. This can return a value
 * relative to the original closing price.
 * @param  {CIQ.ChartEngine.Panel} panel The panel to check
 * @param  {number} tick  The location in the dataset
 * @param  {number} value The value to adjust
 * @return {number}		  The adjusted value
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.adjustIfNecessary = function (panel, tick, value) {
	if (this.layout.adj) return value; // Already adjusted prices
	if (!panel || !this.charts[panel.name]) return value;
	var a = Math.round(tick);
	var ratio;
	if (
		a > 0 &&
		a < panel.chart.dataSet.length &&
		(ratio = panel.chart.dataSet[a].ratio)
	) {
		return value / ratio;
	}
	return value;
};

};


let __js_core_engine_crosshair_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * <span class="injection">INJECTABLE</span>
 *
 * Positions the crosshairs at the last known mouse/finger pointer position, which ensures that
 * the crosshairs are at a known position on touch devices.
 *
 * Called by the {@link WebComponents.cq-toolbar} (drawing toolbar) web component.
 *
 * @alias positionCrosshairsAtPointer
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 */
CIQ.ChartEngine.prototype.positionCrosshairsAtPointer = function () {
	var currentPanel = this.currentPanel;
	if (!currentPanel) return;
	if (
		!this.manageTouchAndMouse ||
		(this.mainSeriesRenderer && this.mainSeriesRenderer.nonInteractive)
	)
		return;
	if (this.runPrepend("positionCrosshairsAtPointer", arguments)) return;
	var chart = currentPanel.chart;
	var rect = this.container.getBoundingClientRect();
	this.top = rect.top;
	this.left = rect.left;
	this.right = this.left + this.width;
	this.bottom = this.top + this.height;
	// this.cy = this.crossYActualPos = this.backOutY(this.crosshairY);
	// this.cx = this.backOutX(this.crosshairX);
	var crosshairTick = (this.crosshairTick = this.tickFromPixel(
		this.backOutX(this.crosshairX),
		chart
	));
	var position = this.pixelFromTick(crosshairTick, chart) - 1;
	if (position >= currentPanel.right || position <= currentPanel.left) {
		this.undisplayCrosshairs();
		return;
	}
	if (this.controls.crossX) this.controls.crossX.style.left = position + "px";
	var chField =
		currentPanel.name == "chart"
			? this.preferences.horizontalCrosshairField
			: currentPanel.horizontalCrosshairField;
	var dataSet = chart.dataSet;
	if (
		chField &&
		dataSet &&
		crosshairTick < dataSet.length &&
		crosshairTick > -1
	) {
		this.crossYActualPos = this.pixelFromPrice(
			dataSet[crosshairTick][chField],
			currentPanel
		);
	}
	var isOnXAxis =
		this.crossYActualPos >= currentPanel.yAxis.bottom &&
		this.crossYActualPos <= currentPanel.bottom;

	if (isOnXAxis) {
		this.undisplayCrosshairs();
		return;
	}
	if (this.controls.crossY)
		this.controls.crossY.style.top = this.crossYActualPos + "px";
	this.runAppend("positionCrosshairsAtPointer", arguments);
};
/**
 * <span class="injection">INJECTABLE</span>
 *
 * Internal function that makes the crosshairs visible based on where the user's mouse pointer is
 * located. This function should not be called directly.
 *
 * Crosshairs are visible if enabled, unless a drawing tool is active, in which case they are
 * displayed automatically regardless of state.
 *
 * **Note:** The "no tool" option (
 * <a href="CIQ.ChartEngine.html#.currentVectorParameters%5B%60vectorType%60%5D">vectorType</a>
 * `""`) counts as a drawing tool and disables crosshairs. Set
 * <a href="CIQ.ChartEngine.html#.currentVectorParameters%5B%60vectorType%60%5D">vectorType</a> to
 * `null` to disable drawing mode and enable default crosshairs behavior.
 *
 * When the user's mouse moves out of the chart or over a modal, the crosshairs are
 * automatically made invisible using
 * {@link CIQ.ChartEngine.AdvancedInjectable#undisplayCrosshairs}.
 *
 * To temporarily show or hide enabled crosshairs, use {@link CIQ.ChartEngine#showCrosshairs}
 * and {@link CIQ.ChartEngine#hideCrosshairs}, respectively.
 *
 * **Note:** If the z-index of the crosshairs is set higher than the z-index of the subholder
 * element, the crosshairs cannot be controlled by the chart engine.
 *
 * @alias doDisplayCrosshairs
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @since
 * - 5.0.0 No longer allows the crosshairs to be enabled if the mouse pointer is outside the chart.
 * - 8.3.0 The
 * 		<a href="CIQ.ChartEngine.html#.currentVectorParameters%5B%60vectorType%60%5D">vectorType</a>
 * 		 `""` (no tool) disables crosshairs. To disable drawing mode, set
 * 		<a href="CIQ.ChartEngine.html#.currentVectorParameters%5B%60vectorType%60%5D">vectorType</a>
 * 		to `null`.
 */
CIQ.ChartEngine.prototype.doDisplayCrosshairs = function () {
	if (this.runPrepend("doDisplayCrosshairs", arguments)) return;
	if (this.displayInitialized) {
		const { floatCanvas, controls, layout } = this;
		const { crossX, crossY, floatDate } = controls;
		const { vectorType } = this.currentVectorParameters;

		if (
			vectorType === "" || // no tool vectorType ("") never displays crosshairs
			(!layout.crosshair && !vectorType) || // active vectorType always displays crosshairs
			(CIQ.Drawing &&
				CIQ.Drawing[vectorType] &&
				new CIQ.Drawing[vectorType]().dragToDraw) ||
			(!this.insideChart && !this.grabbingScreen) ||
			this.openDialog !== ""
		) {
			this.undisplayCrosshairs();
		} else {
			if (crossX && crossX.style.display !== "") {
				crossX.style.display = "";
				if (crossY) crossY.style.display = "";
				if (this.magnetizedPrice && vectorType) {
					this.container.classList.remove("stx-crosshair-on");
					this.chart.tempCanvas.style.display = "block";
				} else {
					this.container.classList.add("stx-crosshair-on");
				}
			}
			if (floatDate && !this.chart.xAxis.noDraw) {
				floatDate.style.visibility = "";
				if (this.currentPanel) this.updateFloatHRLabel(this.currentPanel);
			}
			if (floatCanvas) {
				if (floatCanvas.style.display == "none")
					CIQ.clearCanvas(floatCanvas, this);
				floatCanvas.style.display = "block";
			}
		}
	}
	this.runAppend("doDisplayCrosshairs", arguments);
};

/**
 * <span class="injection">INJECTABLE</span>
 *
 * Internal function that makes the crosshairs invisible when the user mouses out of the chart or
 * over a chart control. This function should not be called directly.
 *
 * See {@link CIQ.ChartEngine.AdvancedInjectable#doDisplayCrosshairs} for more details.
 *
 * @alias undisplayCrosshairs
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 */
CIQ.ChartEngine.prototype.undisplayCrosshairs = function () {
	if (this.runPrepend("undisplayCrosshairs", arguments)) return;
	var controls = this.controls,
		crossX = controls.crossX,
		crossY = controls.crossY;
	if (crossX) {
		if (crossX.style.display != "none") {
			crossX.style.display = "none";
			if (crossY) crossY.style.display = "none";
		}
	}
	if (this.displayInitialized && controls.floatDate) {
		controls.floatDate.style.visibility = "hidden";
	}
	this.container.classList.remove("stx-crosshair-on");
	var floatCanvas = this.floatCanvas;
	if (
		floatCanvas &&
		floatCanvas.isDirty &&
		floatCanvas.style.display != "none"
	) {
		CIQ.clearCanvas(floatCanvas, this);
		if (floatCanvas.style.display != "none") floatCanvas.style.display = "none";
	}
	if (
		!this.activeDrawing &&
		!this.repositioningDrawing &&
		!this.editingAnnotation
	) {
		var tempCanvas = this.chart.tempCanvas;
		if (tempCanvas && tempCanvas.style.display != "none")
			tempCanvas.style.display = "none";
	}
	this.runAppend("undisplayCrosshairs", arguments);
};

/**
 * Hides enabled crosshairs.
 *
 * Usually called as part of a custom drawing or overlay to prevent the crosshairs from displaying
 * together with the custom rendering.
 *
 * See <a href="CIQ.ChartEngine.html#layout%5B%60crosshair%60%5D">CIQ.ChartEngine.layout[\`crosshair\`]</a>
 * to enable/disable the crosshairs.
 *
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.hideCrosshairs = function () {
	this.displayCrosshairs = false;
};

/**
 * Re-displays crosshairs hidden by {@link CIQ.ChartEngine#hideCrosshairs}.
 *
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.showCrosshairs = function () {
	this.displayCrosshairs = true;
};

};


let __js_core_engine_data_ = (_exports) => {


var CIQ = _exports.CIQ,
	timezoneJS = _exports.timezoneJS;

/**
 * Loads a chart for a particular instrument from the data passed in, or fetches <b>new data</b> from the {@link quotefeed}; if one attached.
 *
 * Replaces {@link CIQ.ChartEngine#newChart}.
 *
 *  Note that before using this method, you must first instantiate the chart engine (once only) and assign it to a DOM container using [new CIQ.ChartEngine({container: document.querySelector(".chartContainer")});]{@link CIQ.ChartEngine}<br>
 *  Once a chart engine is instantiated, this is the only method that should be called every time a new chart needs to be drawn for a different instrument.<br>
 *  There is no need to destroy the chart, recreate the engine, or explicitly change the data using any other methods.
 *
 * Charts default to `1 day` periodicity **unless a different periodicity is set** in this call or by using {@link CIQ.ChartEngine#setPeriodicity} prior to this call. Your data must always match the chart periodicity!!
 *
 * @param  {string|object}	symbol	A symbol string, equation or object representing the primary instrument for the chart. **This is a mandatory field and must contain at least one character for the chart to display data, even if not using a primary instrument.**
 * 													<br>After the chart is initialized with the new data, it will contain both a symbol string (stxx.chart.symbol) and a symbol object (stxx.chart.symbolObject).
 * 													<br>You can send anything you want in the symbol object, but you must always include at least a 'symbol' element.
 * 													<br>Both these variables will be available for use wherever the {@link CIQ.ChartEngine.Chart} object is present. For example, if using a {@link quotefeed} for gathering data, `params.stx.chart.symbolObject` will contain your symbol object.
 * 													<br>To allow equations to be used on a chart, the {@link CIQ.ChartEngine#allowEquations} parameter must be set to `true` and the equation needs to be preceded by an equals sign (=) in order for it to be parsed as an equation.
 * 													<br>See {@link CIQ.formatEquation} and {@link CIQ.computeEquationChart} for more details on allowed equations syntax.
 * @param {object|array} 	[parameters] Data & configuration settings to initialize the chart.
 * 													<br>The masterData array may be provided as the second argument assuming no other parameters need to be specified.
 * @param {array} [parameters.masterData] An array of [properly formatted objects]{@tutorial InputDataFormat} to create a chart.
 * 													<br>Each element should at a minimum contain a "Close" or "Value" field (capitalized) and a 'Date' or 'DT' field.
 *													<br>If the charting engine has been configured to use a [QuoteFeed]{@link CIQ.ChartEngine#attachQuoteFeed}
 *													then masterData does not need to be passed in, and the quote feed will be used instead.
 * @param {CIQ.ChartEngine.Chart} [parameters.chart] Which chart to load. Defaults to this.chart.
 * @param {CIQ.ChartEngine~RangeParameters} [parameters.range] Default range to be used upon initial rendering. If both `range` and `span` parameters are passed in, range takes precedence. If periodicity is not set, the range will be displayed at the most optimal periodicity. See {@link CIQ.ChartEngine#setRange} for complete list of parameters this object will accept.
 * @param {CIQ.ChartEngine~SpanParameters} [parameters.span] Default span to display upon initial rendering. If both `range` and `span` parameters are passed in, range takes precedence. If periodicity is not set, the span will be displayed at the most optimal periodicity. See {@link CIQ.ChartEngine#setSpan} for complete list of parameters this object will accept.
 * @param {CIQ.ChartEngine~PeriodicityParameters} [parameters.periodicity] Periodicity to be used upon initial rendering. See {@link CIQ.ChartEngine#setPeriodicity} for complete list of parameters this object will accept. If no periodicity has been set, it will default to `1 day`.
 * @param {boolean} [parameters.stretchToFillScreen] Increase the candleWidth to fill the left-side gap created by a small dataSet. Respects <a href="CIQ.ChartEngine.html#preferences%5B%60whitespace%60%5D">CIQ.ChartEngine.preferences.whitespace</a>. Ignored when params `span` or `range` are used.  See {@link CIQ.ChartEngine#fillScreen}
 * @param {Function} [callback] Called when loadChart is complete. See {@tutorial Adding additional content on chart} for a tutorial on how to use this callback function.
 * @memberof CIQ.ChartEngine
 * @example <caption>Using a symbol string</caption>
 * stxx.loadChart('IBM');
 *
 * @example <caption>Using a symbol object and embedded span and periodicity requirements</caption>
 * stxx.loadChart({symbol: newSymbol, other: 'stuff'}, {
 * 	span: {
 * 		base: 'day',
 * 		multiplier: 2
 * 	},
 * 	periodicity: {
 * 		period: 1,
 * 		interval: 5,
 * 		timeUnit: 'minute'
 * 	},
 * 	stretchToFillScreen: true
 * });
 *
 * @example <caption>Using an equation string</caption>
 * stxx.loadChart('=2*IBM-GM');
 *
 * @example <caption>Provide data as the second argument</caption>
 * stxx.loadChart('YUM', [
 * 	{Date: '2018-12-03', Close: 2.0034},
 * 	{Date: '2018-12-04', Close: 2.0067},
 * 	{Date: '2018-12-05', Close: 2.0112},
 * 	{Date: '2018-12-06', Close: 2.0091},
 * 	{Date: '2018-12-07', Close: 1.9979}
 * ]);
 *
 * @example <caption>Provide data as a parameter</caption>
 * stxx.loadChart('BGS', {
 * 	masterData: [
 * 		{DT: 1542384420000, Close: 1.00},
 * 		{DT: 1542384480000, Close: 1.01},
 * 		{DT: 1542384540000, Close: 1.04},
 * 		{DT: 1542384600000, Close: 1.02}
 * 	],
 * 	span: {
 * 		base: 'minute',
 * 		multiplier: 1
 * 	}
 * });
 *
 * @since 7.0.0 Added `loadChart`, replacing {@link CIQ.ChartEngine#newChart}. Function signature is different.
 */
CIQ.ChartEngine.prototype.loadChart = function (symbol, parameters, callback) {
	//if (!symbol) return; // can't build a chart without a symbol
	if (!callback && typeof parameters == "function") {
		callback = parameters;
		parameters = {};
	} else if (Array.isArray(parameters)) {
		parameters = {
			masterData: parameters
		};
	}
	if (!parameters) parameters = {};

	let { chart, periodicity, range, span } = parameters;
	let { layout, quoteDriver } = this;
	let originalPeriodicity = {
		periodicity: layout.periodicity,
		interval: layout.interval,
		timeUnit: layout.timeUnit
	};

	if (periodicity) {
		let internalPeriodicity = CIQ.cleanPeriodicity(
			periodicity.period ? periodicity.period : periodicity.periodicity,
			periodicity.interval,
			periodicity.timeUnit
		);
		layout.interval = internalPeriodicity.interval;
		layout.periodicity = internalPeriodicity.period;
		layout.timeUnit = internalPeriodicity.timeUnit;
	}

	if (!chart) chart = this.chart;

	const {
		dataSet: prevDataSet,
		market: prevMarket,
		masterData: prevMasterData,
		symbol: prevSymbol,
		moreAvailable: prevMoreAvailable,
		upToDate: prevUpToDate
	} = chart;
	const prevSymbolObject = CIQ.clone(chart.symbolObject);

	chart.dataSet = [];
	chart.masterData = [];
	chart.moreAvailable = null;
	chart.upToDate = null;
	if (!symbol) {
		chart.symbol = null;
		chart.symbolObject = { symbol: null };
	} else if (typeof symbol == "object") {
		if (
			symbol.symbol.toUpperCase &&
			symbol.symbol.toUpperCase() === "CIQINFO"
		) {
			CIQ.logPackageInfo();
		} else {
			// an object was sent in, so initialize the string from the object
			chart.symbol = symbol.symbol;
			chart.symbolObject = symbol;
		}
	} else {
		if (symbol.toUpperCase && symbol.toUpperCase() === "CIQINFO") {
			CIQ.logPackageInfo();
		} else {
			// a string was sent in so initialize the object from the string
			chart.symbol = symbol;
			chart.symbolObject.symbol = symbol;
		}
	}

	chart.inflectionPoint = null; // reset where the consolidation occurs from

	if (this.marketFactory) {
		const marketDef = this.marketFactory(chart.symbolObject);
		this.setMarket(marketDef, chart);
	}

	this.setMainSeriesRenderer(true);

	// no range or span passed into parameters, check layout
	if (!range && !span && layout) {
		span = !layout.range ? layout.setSpan : {};
		range = layout.range || {};
	}
	// both passed into parameters, range takes precedence
	else if (range && span) {
		span = {};
	}

	this.clearCurrentMarketData(chart);

	var self = this;
	if (!parameters.masterData && quoteDriver) {
		let onsymbol = function (err) {
			if (err && err != "orphaned") {
				// orphaned means that another loadChart request came in, overriding this one
				chart.symbol = prevSymbol; // revert the symbol back to what it was if there is an error
				chart.symbolObject = prevSymbolObject; // revert the symbol object back to what it was if there is an error
				chart.market = prevMarket;
				self.masterData = chart.masterData = prevMasterData;
				chart.dataSet = prevDataSet;
				chart.moreAvailable = prevMoreAvailable;
				chart.upToDate = prevUpToDate;
			}
			onComplete();
			if (callback) callback.call(self, err);
		};

		if (range && Object.keys(range).length && this.setRange) {
			// check for empty object
			delete parameters.span; // range and span are mutually exclusive
			delete layout.setSpan;
			this.chart.masterData = null;
			this.displayInitialized = false;
			if (periodicity) {
				range.periodicity = periodicity;
			}
			range.forceLoad = true;
			this.setRange(range, onsymbol);
		} else if (span && span.base && this.setSpan) {
			span.multiplier = span.multiplier || 1;
			// force a new chart to be initialized and new data fetched before calling setSpan to conform with the expectations and purpose of loadChart,
			// and not use existing data and symbol names.
			this.chart.masterData = null;
			this.displayInitialized = false;
			// periodicity will be kept if sent as a parameter.
			if (periodicity) span.maintainPeriodicity = true;
			span.forceLoad = true;
			this.setSpan(span, onsymbol);
		} else {
			quoteDriver.newChart(
				{
					symbol: chart.symbol,
					symbolObject: chart.symbolObject,
					chart: chart,
					initializeChart: true
				},
				function (err) {
					if (!err) {
						self.adjustPanelPositions(); // to ensure holders are adjusted for current yaxis height
						quoteDriver.updateSubscriptions();
						if (parameters.stretchToFillScreen) {
							self.fillScreen();
						}
					}
					onsymbol.apply(self, arguments);
				}
			);
		}
	} else {
		if (!parameters.masterData) {
			console.log(
				"Warning: No masterData specified and no QuoteFeed configured"
			);
		}
		if (!chart.symbol) chart.symbol = ""; // if we are ready to draw but the symbol is missing, it will crash
		this.initializeChart();
		let masterData = this.doCleanupGaps(parameters.masterData, chart);
		this.setMasterData(masterData, chart, { noCleanupDates: true });
		chart.endPoints = {};
		if (masterData && masterData.length) {
			chart.endPoints = {
				begin: masterData[0].DT,
				end: masterData[masterData.length - 1].DT
			};
		}
		this.createDataSet();

		if (range && Object.keys(range).length && this.setRange) {
			this.setRange(range);
		} else if (span && span.multiplier && span.base && this.setSpan) {
			this.setSpan({
				maintainPeriodicity: true,
				multiplier: span.multiplier,
				base: span.base
			});
		} else if (parameters.stretchToFillScreen) {
			this.fillScreen();
		} else if (masterData && masterData.length) {
			this.home();
		} else {
			this.clear();
		}
		this.adjustPanelPositions(); // to ensure holders are adjusted for current yaxis height
		onComplete();
		if (callback) callback.call(self);
	}
	CIQ.logVersion();

	function onComplete() {
		self.layout.symbols = self.getSymbols({
			"include-parameters": true,
			"exclude-studies": true
		});
		self.dispatch(self.currentlyImporting ? "symbolImport" : "symbolChange", {
			stx: self,
			symbol: chart.symbol,
			symbolObject: chart.symbolObject,
			prevSymbol: prevSymbol,
			prevSymbolObject: prevSymbolObject,
			action: "master"
		});
		if (periodicity) {
			self.dispatch("periodicity", {
				stx: self,
				differentData: true,
				prevPeriodicity: originalPeriodicity
			});
		}
		if (quoteDriver && quoteDriver.paused) quoteDriver.resume();
	}
};

/**
 * Loads a blank chart
 *
 * @memberof CIQ.ChartEngine
 * @since 7.3.0
 */
CIQ.ChartEngine.prototype.loadBlankChart = function () {
	this.loadChart(null, []);
};

/**
 * Returns all the valid data fields in masterData. A valid data field is one
 * that is in use by a series or one that is in use by the main chart
 * @param {CIQ.ChartEngine.Chart} [chart] The chart to look in
 * @return {array} An array of valid price fields
 * @private
 * @since 4.0.0
 */
CIQ.ChartEngine.prototype.getDataFields = function (chart) {
	if (!chart) chart = this.chart;
	var plotField = chart.defaultPlotField || "Close";
	var fields = ["Open", "High", "Low"];
	fields.push(plotField);
	for (var field in chart.series) {
		var parameters = chart.series[field].parameters;
		fields.push(parameters.symbol);
	}
	return fields;
};
/**
 * Cleans up the masterData after a series has been removed. This method will remove
 * the series field from the masterData, only if no other series are dependent on the field.
 * Once the field is removed, any empty/null masterData points will be removed. Finally,
 * doCleanGaps will be run again to set masterData back to its original state. createDataSet
 * is not run from this method
 * @param  {object} symbolObject A symbol object
 * @param {CIQ.ChartEngine.Chart} chart The chart to clean
 * @private
 * @since 4.0.0
 */
CIQ.ChartEngine.prototype.cleanMasterData = function (symbolObject, chart) {
	var symbol = symbolObject.symbol;
	var masterData = chart.masterData;

	if (!masterData || !masterData.length) return;

	var fields = this.getDataFields(chart);

	// Returns true is the quote doesn't have any valid data fields
	function empty(quote, fields) {
		for (var i = 0; i < fields.length; i++) {
			var val = quote[fields[i]];
			if (typeof val != "undefined") return false;
		}
		return true;
	}
	// Clean out "zombie" masterData entries. These would be entries that no longer have
	// any valid data. This can happen whenever series have non-overlapping dates.
	var i = 0;
	do {
		var quote = masterData[i];
		delete quote[symbol];
		if (empty.call(this, quote, fields)) {
			masterData.splice(i, 1);
			continue;
		}
		i++;
	} while (i < masterData.length);
	masterData = this.doCleanupGaps(masterData, chart, { noCleanupDates: true });
	this.setMasterData(masterData, chart, { noCleanupDates: true });
	this.clearCurrentMarketData(chart, symbol);
};

/**
 * Calculates the ATR (Average True Range) for the dataSet
 * @private
 * @param  {CIQ.ChartEngine.Chart} chart The chart to calculate
 * @param  {number} period The number of periods
 * @param  {array} data The data to process, if omitted, uses chart.dataSet
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.calculateATR = function (chart, period, data) {
	if (!data) data = chart.dataSet;
	var state = chart.state.calculations.atr;
	if (!state) state = chart.state.calculations.atr = {};
	if (!period) period = 20;
	var accum = [];
	if (state.accum) accum = state.accum;
	var q1;
	for (var i = 0; i < data.length; i++) {
		var q = data[i];
		q1 = i ? data[i - 1] : state.q1;
		if (!q1) continue;

		var trueRange = Math.max(
			q.High - q.Low,
			Math.abs(q.High - q1.Close),
			Math.abs(q.Low - q1.Close)
		);
		if (accum.length < period) {
			if (accum.push(trueRange) == period) {
				var total = 0;
				for (var j = 0; j < accum.length; j++) total += accum[j];
				q.atr = total / period;
			}
		} else {
			q.atr = (q1.atr * (period - 1) + trueRange) / period;
		}
		q.trueRange = trueRange;
	}
	chart.state.calculations.atr = {
		accum: accum,
		q1: q1
	};
};

/**
 * Calculates the Median Price for the dataSet.
 * @private
 * @param {CIQ.ChartEngine.Chart} chart The chart to update.
 * @param {array} data The data to process, if omitted, uses chart.dataSet
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.calculateMedianPrice = function (chart, data) {
	if (!data) data = chart.dataSet;
	var d;
	for (var i = 0; i < data.length; ++i) {
		d = data[i];
		d["hl/2"] = (d.High + d.Low) / 2;
	}
};

/**
 * Calculates the Typical Price for the dataSet.
 * @private
 * @param {CIQ.ChartEngine.Chart} chart The chart to update.
 * @param {array} data The data to process, if omitted, uses chart.dataSet
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.calculateTypicalPrice = function (chart, data) {
	if (!data) data = chart.dataSet;
	var d;
	for (var i = 0; i < data.length; ++i) {
		d = data[i];
		d["hlc/3"] = (d.High + d.Low + d.Close) / 3;
	}
};

/**
 * Calculates the Weighted Close for the dataSet.
 * @private
 * @param {CIQ.ChartEngine.Chart} chart The chart to update.
 * @param {array} data The data to process, if omitted, uses chart.dataSet
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.calculateWeightedClose = function (chart, data) {
	if (!data) data = chart.dataSet;
	var d;
	for (var i = 0; i < data.length; ++i) {
		d = data[i];
		d["hlcc/4"] = (d.High + d.Low + 2 * d.Close) / 4;
	}
};

/**
 * Calculates the (Open + High + Low + Close) / 4 for the dataSet.
 * @private
 * @param {CIQ.ChartEngine.Chart} chart The chart to update.
 * @param {array} data The data to process, if omitted, uses chart.dataSet
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.calculateOHLC4 = function (chart, data) {
	if (!data) data = chart.dataSet;
	var d;
	for (var i = 0; i < data.length; ++i) {
		d = data[i];
		d["ohlc/4"] = (d.Open + d.High + d.Low + d.Close) / 4;
	}
};

/**
 * Returns the current quote (the final element in the dataSet).
 *
 * @param {string} [field] Optional field. If provided, searches for the first record with that field having a value.
 * @return {object} The most recent quote.
 * @memberof CIQ.ChartEngine
 * @since 7.3.0 Added the `field` argument.
 */
CIQ.ChartEngine.prototype.currentQuote = function (field) {
	if (!this.chart.dataSet) return null;
	for (var i = this.chart.dataSet.length - 1; i >= 0; i--) {
		if (this.chart.dataSet[i]) {
			if (!field) return this.chart.dataSet[i];
			var val = this.chart.dataSet[i][field];
			if (val || val === 0) return this.chart.dataSet[i];
		}
	}
	return null;
};

/**
 * Returns the last valid Close found in the dataSet.
 * This would be any numeric value
 * @param {string} field Optional object to check Close within, such as with a series
 * @return {number} The most recent close
 * @memberof CIQ.ChartEngine
 * @since 6.1.0
 */
CIQ.ChartEngine.prototype.mostRecentClose = function (field) {
	if (!this.chart.dataSet) return null;
	for (var i = this.chart.dataSet.length - 1; i >= 0; i--) {
		var ret = this.chart.dataSet[i];
		if (!ret) continue;
		if (field) {
			ret = ret[field];
			if (!ret && ret !== 0) continue;
		}
		var iqPrevClose = ret.iqPrevClose;
		if (typeof ret == "object") ret = ret.Close;
		if (typeof ret == "number") return ret;
		if (typeof iqPrevClose == "number") return iqPrevClose;
	}
	return null;
};

/**
 * <span class="injection">INJECTABLE</span>
 * <span class="animation">Animation Loop</span>
 *
 * Creates the dataSegment. The dataSegment is a copy of the portion of the dataSet that is observable in the
 * current chart. That is, the dataSegment is a "view" into the dataSet. chart.scroll and chart.maxTicks are the
 * primary drivers for this method.
 * @param  {CIQ.ChartEngine.Chart} [theChart] If passed then a data segment will be created just for that chart, otherwise all charts
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias createDataSegment
 */
CIQ.ChartEngine.prototype.createDataSegment = function (theChart) {
	if (this.runPrepend("createDataSegment", arguments)) return;
	var chart;
	for (var chartName in this.charts) {
		chart = this.charts[chartName];
		if (theChart) chart = theChart;

		if (CIQ.Comparison && chart.isComparison)
			CIQ.Comparison.createComparisonSegmentInner(this, chart);

		var dataSet = chart.dataSet,
			baseline = chart.baseline,
			scroll = chart.scroll,
			maxTicks = chart.maxTicks;
		var layout = this.layout,
			cw = layout.candleWidth;
		baseline.actualLevel = baseline.userLevel
			? baseline.userLevel
			: baseline.defaultLevel;
		/*
			chart.baseline.includeInDataSegment forces a line chart (usually a baseline chart) to begin inside the chart
			whereas normally the first point in a line chart is off the left edge of the screen.
			 */
		var dataSegmentStartsOneBack =
			baseline.includeInDataSegment &&
			(!this.mainSeriesRenderer || !this.mainSeriesRenderer.standaloneBars);
		var quote;
		var totalVolume = 0;
		var dataSegment = (chart.dataSegment = []);
		var position = dataSet.length - 1 - scroll - 1; // One more to deal with -1 case
		var prevField = chart.defaultPlotField;
		for (var i = -1; i < scroll && i < maxTicks; i++) {
			position++;
			if (i == -1 && !dataSegmentStartsOneBack) continue;
			if (position < dataSet.length && position >= 0) {
				quote = dataSet[position];
				quote.candleWidth = null;
				if (quote) totalVolume += quote.Volume || 1;
				dataSegment.push(quote);
				if (baseline.actualLevel === null && i >= 0) {
					if (prevField && prevField != "Close") {
						var q1 = dataSet[position - 1];
						if (q1 && (q1[prevField] || q1[prevField] === 0))
							baseline.actualLevel = q1[prevField];
					} else {
						if (quote.iqPrevClose || quote.iqPrevClose === 0)
							baseline.actualLevel = quote.iqPrevClose;
					}
				}
			} else if (position < 0) {
				dataSegment.push(null);
			}
		}
		chart.segmentImage = null;
		var mainSeriesRenderer = this.mainSeriesRenderer || {};
		if (mainSeriesRenderer.params && mainSeriesRenderer.params.volume) {
			var workingWidth =
				chart.width - (maxTicks - dataSegment.length - 1) * layout.candleWidth;
			var accumOffset = 0;
			chart.segmentImage = [];
			for (var w = 0; w < dataSegment.length; w++) {
				quote = dataSegment[w];
				chart.segmentImage[w] = {};
				var leftOffset = null;
				if (quote) {
					if (quote.Volume) {
						quote.candleWidth = (workingWidth * quote.Volume) / totalVolume;
						leftOffset = accumOffset + quote.candleWidth / 2;
						accumOffset += quote.candleWidth;
					} else {
						quote.candleWidth = cw;
						leftOffset = accumOffset + cw / 2;
						accumOffset += cw;
					}
					chart.segmentImage[w] = {
						tick: quote.tick,
						candleWidth: quote.candleWidth,
						leftOffset: leftOffset
					};
				} else {
					chart.segmentImage[w] = {
						tick: null,
						candleWidth: cw,
						leftOffset: accumOffset + cw / 2
					};
					accumOffset += cw;
				}
			}
		}
		if (theChart) break;
	}
	if (chart && chart.isComparison) this.clearPixelCache();
	this.positionCrosshairsAtPointer();
	this.runAppend("createDataSegment", arguments);
};

/**
 * Returns the visible portion of the dataSegment.  A bar is considered visible if its midpoint is within the chart window.
 * This is different than chart.dataSegment which includes any partially visible candles and possibly the very next data point to be displayed.
 * @param  {CIQ.ChartEngine.Chart} [chart] Chart from which to return the dataSegment
 * @returns {array} The visible bars of the dataSegment
 * @memberof CIQ.ChartEngine
 * @since 5.2.0
 */
CIQ.ChartEngine.prototype.getDataSegment = function (chart) {
	if (!chart) chart = this.chart;
	var dataSegment = chart.dataSegment;
	if (!dataSegment || !dataSegment.length) return [];
	var left = 0;
	var right = dataSegment.length;
	if (this.pixelFromBar(left, chart) < chart.panel.left) left++;
	if (this.pixelFromBar(right - 1, chart) > chart.panel.right) right--;
	return dataSegment.slice(left, right);
};

/**
 * Sets the master data for the chart. A data set is derived from the master data by
 * {@link CIQ.ChartEngine#createDataSet}.
 *
 * **This function is intended for internal data management. Do not explicitly call this
 * function unless you are manipulating the data at a very detailed level.**
 *
 * For most implementations, simply set your data using {@link CIQ.ChartEngine#loadChart} or
 * a [quote feed interface](quotefeed.html), if a quote feed is attached.
 *
 * If a [market factory]{@link CIQ.ChartEngine#setMarketFactory} has been linked to the chart,
 * this function also updates the market on the chart to match the newly loaded instrument.
 * When no factory is present, the chart assumes that the market will never change and
 * continues to use the market initially set using {@link CIQ.ChartEngine#setMarket}.
 * If no market has been set, the chart operates in 24x7 mode.
 *
 * This function also calculates the number of decimal places for the security by checking
 * the maximum number in the data. The number of decimal places is stored in
 * {@link CIQ.ChartEngine.Chart#decimalPlaces}.
 *
 * @param {array} masterData An array of quotes. Each quote should at a minimum contain a
 * 		"Close" or "value" field (capitalized) and a "Date" or "DT" field. This functions sets
 * 		DT to be a JavaScript `Date` object derived from the string form.
 * @param {CIQ.ChartEngine.Chart} [chart] The chart to which `masterData` is applied. Defaults
 * 		to the default chart.
 * @param {object} [params] Parameters object.
 * @param {boolean} [params.noCleanupDates] If true, then dates have been cleaned up already
 * 		by calling {@link CIQ.ChartEngine#doCleanupDates}, so do not do so in this function.
 *
 * @memberof CIQ.ChartEngine
 * @since
 * - 5.2.0 Added the `params` and `params.noCleanupDates` parameters.
 * - 7.0.0 The `masterData` field "Value" may be treated as the primary plot device.
 * - 8.0.0 The [decimalPlaces]{@link CIQ.ChartEngine.Chart#decimalPlaces} field of the
 * 		`chart` parameter is now set from
 * 		{@link CIQ.ChartEngine.Chart#calculateTradingDecimalPlaces}.
 */
CIQ.ChartEngine.prototype.setMasterData = function (masterData, chart, params) {
	if (!chart) chart = this.chart;
	if (this.marketFactory) {
		var marketDef = this.marketFactory(chart.symbolObject);
		this.setMarket(marketDef, chart);
	}

	if (!params) params = {};

	if (!params.noCleanupDates)
		this.doCleanupDates(masterData, this.layout.interval);

	chart.masterData = masterData;
	if (chart.name == "chart") this.masterData = masterData;
	//chart.decimalPlaces=2;
	var i;
	var field = null;
	if (masterData) {
		for (i = 0; i < masterData.length; i++) {
			var quotes = masterData[i];

			if (field === null) {
				if (typeof quotes.Close === "number") {
					field = "Close";
				} else if (typeof quotes.Value === "number") {
					field = "Value";
				}
			}
			if (field === "Value" && typeof quotes.Value === "number") {
				quotes.Close = quotes.Value;
			}

			if (quotes.DT) {
				if (Object.prototype.toString.call(quotes.DT) != "[object Date]")
					quotes.DT = new Date(quotes.DT); // if already a date object; nothing to do
				if (!quotes.Date || quotes.Date.length != 17)
					quotes.Date = CIQ.yyyymmddhhmmssmmm(quotes.DT);
			} else if (quotes.Date) quotes.DT = CIQ.strToDateTime(quotes.Date);
			else
				console.log("setMasterData : Missing DT and Date on masterData object");
			if (quotes.Volume && typeof quotes.Volume !== "number")
				quotes.Volume = parseInt(quotes.Volume, 10);
			//if(typeof quotes.Close != 'number' && !quotes.Close && quotes.Close!==null){
			//	console.log ('setMasterData : Close is missing or not a number. Use parseFloat() if your data server provides strings. MasterData Index= ' + i +' Value = ' + quotes.Close);
			//}
			if (masterData.length - i < 50) {
				// only check last 50 records
				this.updateCurrentMarketData(quotes, chart, null, { fromTrade: true });
			}
		}
	}
	if (chart.calculateTradingDecimalPlaces)
		chart.decimalPlaces = chart.calculateTradingDecimalPlaces({
			stx: this,
			chart: chart,
			symbol: chart.symbolObject.symbol,
			symbolObject: chart.symbolObject
		});

	this.setDisplayDates(masterData);
	chart.roundit = Math.pow(10, chart.decimalPlaces);

	for (i in this.plugins) {
		var plugin = this.plugins[i];
		if (plugin.display) {
			if (plugin.setMasterData) plugin.setMasterData(this, chart);
		}
	}
};

/**
 * Sets the master data for the chart, creates the data set, and renders the chart.
 *
 * @param	{string}			symbol			Ticker symbol for the chart.
 * @param	{array}				masterData		An array of quotes. Each quote should at a minimum contain a "Close" field (capitalized) and a Date field which is a string form of the date.
 *												This method will set DT to be a JavaScript Date object derived from the string form.
 * @param	{CIQ.ChartEngine.Chart}	[chart]			The chart to put the masterData. Defaults to the default chart.
 * @memberof CIQ.ChartEngine
 * @since 3.0.0
 */
CIQ.ChartEngine.prototype.setMasterDataRender = function (
	symbol,
	masterData,
	chart
) {
	if (!chart) chart = this.chart;
	if (!chart.symbol) chart.symbol = "";
	this.setMasterData(masterData, chart);
	if (masterData) {
		chart.endPoints = {};
		if (masterData.length) {
			chart.endPoints = {
				begin: masterData[0].DT,
				end: masterData[masterData.length - 1].DT
			};
			chart.symbol = symbol;
		}
	}
	this.createDataSet();
	this.initializeChart();
	this.draw();
	if (!masterData || !masterData.length) {
		chart.symbol = null;
		this.clear();
	}
	this.adjustPanelPositions();
};

/**
 * Returns an array of all symbols currently required to be loaded by the quote feed.
 * The returned array contains an object for each symbol containing `symbol`, `symbolObject`, `interval`, and `periodicity`.
 *
 * @param {object} params Control parameters.
 * @param {boolean} [params.include-parameters] Set to true to put the series parameters in the return object.
 * @param {boolean} [params.exclude-studies] Set to true to not include study symbols.
 * @param {boolean} [params.breakout-equations] Set to true to return component symbols of equations.
 * @param {boolean} [params.exclude-generated] Set to true to not include symbols which are generated by virtue of another symbol (e.g. `PlotComplementer`).
 *
 * @return {array} The array of symbol objects required.
 * @memberof CIQ.ChartEngine
 * @since
 * - 2016-03-11
 * - 6.2.0 Added `params.breakout-equations` parameter.
 * - 7.3.0 Added `params.exclude-generated` parameter.
 */
CIQ.ChartEngine.prototype.getSymbols = function (params) {
	if (!params) params = {};
	let a = [],
		obj,
		layout = this.layout;
	function makeObj(symbol, symbolObject, layout) {
		return {
			symbol: symbol,
			symbolObject: symbolObject,
			periodicity: layout.periodicity,
			interval: layout.interval,
			timeUnit: layout.timeUnit,
			setSpan: layout.setSpan
		};
	}
	for (let chartName in this.charts) {
		const chart = this.charts[chartName];
		let { symbol, symbolObject } = chart;
		if (symbolObject && symbolObject.symbol) {
			if (params.static) {
				if (symbolObject.static) a.push(makeObj(symbol, symbolObject, layout));
			} else a.push(makeObj(symbol, symbolObject, layout));
		}
		for (let field in chart.series) {
			const { parameters } = chart.series[field];
			if (
				!(params["include-static"] || params.static) &&
				parameters.data &&
				!parameters.data.useDefaultQuoteFeed
			)
				continue; // legacy
			const { symbol, symbolObject } = parameters;
			obj = makeObj(symbol, symbolObject, layout);
			obj.id = field;
			if (params["include-parameters"]) {
				obj.parameters = CIQ.clone(parameters);
				if (obj.parameters.yAxis) delete obj.parameters.yAxis.yAxisPlotter;
			}
			if (params["exclude-studies"] && parameters.bucket == "study") continue;
			if (params["exclude-generated"] && symbolObject.generator) continue;

			if (params.static) {
				if (symbolObject.static) a.push(obj);
			} else a.push(obj);
		}
	}
	if (params["breakout-equations"]) {
		// replace the equations with their component symbols
		const components = {}; // use to eliminate duplicates
		for (let s = 0; s < a.length; s++) {
			const { symbol } = a[s];
			if (this.isEquationChart(symbol)) {
				const res = CIQ.formatEquation(symbol);
				if (res) {
					const symbols = res.symbols;
					for (let sym = 0; sym < symbols.length; sym++) {
						components[symbols[sym]] = makeObj(
							symbols[sym],
							a[s].symbolObject,
							a[s]
						);
					}
				}
			} else {
				components[symbol] = makeObj(symbol, a[s].symbolObject, a[s]);
			}
		}
		a = [];
		for (let component in components) a.push(components[component]);
	}
	return a;
};

/**
 * Sets the displayDate for the data element in masterData. The displayDate is the timezone adjusted date.
 * @param {object} quote The quote element to check
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.setDisplayDate = function (quote) {
	if (CIQ.ChartEngine.isDailyInterval(this.layout.interval)) return;
	var dt = quote.DT;
	var milli = dt.getSeconds() * 1000 + dt.getMilliseconds();
	var newDT;
	if (timezoneJS.Date && this.displayZone) {
		newDT = new timezoneJS.Date(dt.getTime(), this.displayZone);
		dt = new Date(
			newDT.getFullYear(),
			newDT.getMonth(),
			newDT.getDate(),
			newDT.getHours(),
			newDT.getMinutes()
		);
		dt = new Date(dt.getTime() + milli);
	}
	quote.displayDate = dt;
};

/**
 * Calls {@link CIQ.ChartEngine#setDisplayDate} for each element in masterData
 * @param {array} masterData Array containing the masterData for a ChartEngine.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.setDisplayDates = function (masterData) {
	if (!masterData) return;
	if (CIQ.ChartEngine.isDailyInterval(this.layout.interval)) return;
	for (var i = 0; i < masterData.length; i++) {
		var quote = masterData[i];
		if (quote.DT) this.setDisplayDate(quote);
	}
};

/**
 * Sets the data timezone (`dataZone`) and display timezone (`displayZone`) on an intraday chart.
 *
 * >**Important:**
 * >- The `dataZone` property on this method must be set **before** any data is loaded so the engine knows how to convert the incoming records.
 * >- The `displayZone` property on this method can be set at any time and will only affect what is displayed on the x-axis.
 * >- This method should only be used for dates that are not timezone aware. If using the 'DT' fields in your data input records,
 * >**DO NOT** use this function to set the `dataZone` as it will result in a double conversion.
 *
 * - Once set, 'Date' fields containing a time portion, will be converted to the {@link CIQ.ChartEngine#dataZone}
 * (or the browser timezone if no dataZone is specified) before added into the `masterData`. Its corresponding 'DT' fields will be set to match.
 * The {@link CIQ.ChartEngine#displayZone} is then created and used to translate dates based on either the local browser's time zone,
 * or the time zone selected by the end user.
 *
 * - If the date ('DT' or 'Date') does not include a time offset, such as 'yyyy-mm-dd',
 * no time zone conversion will be performed. Use this option if you prefer to display the same date on all time zones.
 * This applies to daily, weekly and monthly periodicities only.
 * For a list of all supported date formats see the [Input format Tutorial]{@tutorial InputDataFormat}
 *
 * **Time zone and the {@link quotefeed}:**<br>
 * On a fetch call, if your quote server sends and receives string dates loaded in the 'Date' field,
 * you can convert the provided start and end dates back to strings using {@link CIQ.yyyymmddhhmmssmmm}
 * Example:
 * ```
 * var strStart =  CIQ.yyyymmddhhmmssmmm(startDate);
 * var strEnd = CIQ.yyyymmddhhmmssmmm(endDate);
 * ```
 * These dates will be in the same time zone you sent them in. So they will match your quote feed.
 *
 * For more details on how time zones work in the chart see the [Dates, Times, and Time Zones]{@tutorial Dates and Time Zones} tutorial.
 *
 * **See {@link CIQ.timeZoneMap} to review a list of all chatIQ supported timezones and instructions on how to add more!**
 *
 * @param {string} dataZone A ChartIQ supported time zone. This should represent the time zone that the master data comes from or set to 'null' if your dates are already time zone aware.
 * @param {string} displayZone A ChartIQ supported time zone. This should represent the time zone that the user wishes displayed or set to null to use the browser time zone.
 * @memberof CIQ.ChartEngine
 * @since 5.2 Also used to convert daily, weekly and monthly periodicities.
 * @example
 * //The raw data received the chart is in Greenwich Mean Time, but we want to display in Amsterdam time.
 * stxx.setTimeZone("UTC", "Europe/Amsterdam")
 *
 *
 */
CIQ.ChartEngine.prototype.setTimeZone = function (dataZone, displayZone) {
	if (!timezoneJS.Date) {
		this.timeZoneOffset = 0;
		return;
	}

	var now = new Date();
	var myTimeZoneOffset = now.getTimezoneOffset();
	var dataTimeZoneOffset = myTimeZoneOffset;
	var displayTimeZoneOffset = myTimeZoneOffset;
	if (dataZone) this.dataZone = dataZone;
	if (this.dataZone)
		dataTimeZoneOffset = new timezoneJS.Date(
			now,
			this.dataZone
		).getTimezoneOffset();
	if (displayZone) this.displayZone = displayZone;
	if (this.displayZone)
		displayTimeZoneOffset = new timezoneJS.Date(
			now,
			this.displayZone
		).getTimezoneOffset();
	this.timeZoneOffset =
		dataTimeZoneOffset -
		myTimeZoneOffset -
		(displayTimeZoneOffset - myTimeZoneOffset);
	for (var chartName in this.charts) {
		var chart = this.charts[chartName];
		this.setDisplayDates(chart.masterData);
	}
	this.preferences.timeZone = displayZone;
	this.changeOccurred("preferences");
	this.createDataSet();
};

/**
 * <span class="injection">INJECTABLE</span>
 *
 * Use this method to add new `OHLC` bars to the end of the chart, insert new bars into the middle of the chart, replace existing bars, delete bars, or stream individual `LAST SALE` data tick by tick as they are received from a streaming feed.
 *
 * **The following rules apply when adding or updating full [`OHLC`]{@tutorial InputDataFormat} bars:**
 *
 * - Follow proper OHLC format as outlined on the [OHLC format tutorial]{@tutorial InputDataFormat}.
 * - If a bar is not present it will be added, if it is present it will be updated so the OHLC and volume integrity is preserved. If `allowReplaceOHL` is not set, the 'Open' is preserved from the existing candle; new 'High' and 'Low' values are calculated, and the 'Close' and 'Volume' values are replaced with the new ones.
 * - Although gaps can be present, dates in the appendQuotes array **must maintain the correct periodicity and order** (older to newer) to prevent out of sequence bars.
 * - If set, gaps will be filled past the currently existing bar. No gaps will be filled when inserting bars in between existing data.
 *
 * **The following rules apply when streaming individual `LAST SALE` data, tick by tick, as they are received from a streaming feed:**
 *
 * - Follow proper LAST SALE format as outlined on the parameters section under the `appendQuotes` field.
 * - This method is designed to update the chart while maintaining the existing periodicity, finding and augmenting an existing bar for an instrument or creating new bars as needed.
 * - It is important to note that a market iterator will be used to find the proper bar to update, and if no bar is found on that date, one will be created even in the past; so always be sure your historical data follows the rules of the market definitions when setting the dates for each bar. Remember that by default, weeks start on Sunday unless a market definition exists to indicate Sunday is not a market day, in which case the next market day will be used as the beginning of the week. Instructions to set a market for the chart can be found here: {@link CIQ.Market}
 * - When in 'tick' interval, each trade will be added to a new bar and no aggregation to previous bars will be done.
 *
 * **The following rules apply when updating `BID` and `ASK` prices separately from the primary series.**
 *
 * - Bid, Ask and Volume are reserved for the primary series only.
 * - The reasoning is that if your initial data sends a Bid-Ask together with the 'Close' (Last), your updates will as well; which is usually the norm.
 * - But if your feed sends updates for Bid and Asks separately than for the 'Last' price, then you must add this additional data as you would do any other secondary series.
 *
 * > Assuming you have this data pre-loaded on your chart already containing Bid and Ask prices:
 * > ```
 * > [
 * > 	{
 * > 		"DT": "2019-11-19T18:17:29.000Z",
 * > 		"Close": 266.12,
 * >		"Volume": 300,
 * > 		"Bid": 266.1,
 * > 		"Ask": 266.12,
 * >	},
 * >	{
 * >		"DT": "2019-11-19T18:17:29.000Z",
 * > 		"Close": 266.12,
 * > 		"Volume": 300,
 * > 		"Bid": 266.1,
 * > 		"Ask": 266.12,
 * >	}
 * > ]
 * > ```
 * > And have added this series to display the pre-loaded Bid prices:
 * > ```
 * > stxx.addSeries("Bid", {color: "green", loadData: false, shareYAxis: true, step:true});
 * > ```
 * > Use:
 * > ```
 * > stxx.updateChartData({Close:90}, null, { useAsLastSale: true, secondarySeries: "Bid" });
 * > ```
 * > or
 * > ```
 * > stxx.updateChartData({Last:90}, null, {secondarySeries: "Bid" });
 * > ```
 * > to update the bid prices.
 *
 * **Performance:**
 *
 * - To maintain system performance you can throttle inbound ticks. See {@link CIQ.ChartEngine#streamParameters } and [Streaming tutorial]{@tutorial DataIntegrationStreaming} for more details.
 * - It is important to note that although the data will always be added to masterData, `createDataSet()` and `draw()` will **not** be called if data is received quicker than the throttle (governor) wait periods. As such, you will not see any changes until the throttle wait periods are met.
 * - **Please adjust default settings if your implementation requires immediate updates.**
 *
 * **Additional Notes:**
 *
 * - **It is crucial that you ensure the date/time of the records being loaded are in line with your `masterData` and `dataZone`; and in the case of a last trade streaming, that your market definition will produce dates that will be in sync with the rest of your already loaded records.** See `DT` parameter for more details.
 * - This method is **not** intended to be used as a way to load initial chart data, or data changes triggered by periodicity changes.
 * - Do not stream current updates into the chart using this method if you have used [setSpan]{@link CIQ.ChartEngine#setSpan} or [setRange]{@link CIQ.ChartEngine#setRange} to enter 'historical mode'.
 * When in historical mode, forward pagination is based on the date of the last loaded bar, and streaming current updates will create a data gap.
 * To check if you are in historical mode evaluate {@link CIQ.ChartEngine#isHistoricalModeSet}
 *
 * See the [Data Integration]{@tutorial DataIntegrationOverview} tutorial for more detail on how to load initial data.
 *
 * See the [Streaming]{@tutorial DataIntegrationStreaming} tutorial for more the details.
 *
 * @param  {array|object} appendQuotes		**OHLC format requirements**<br><br>
 * 											An **array** of properly formatted OHLC quote object(s). [See OHLC Data Format]{@tutorial InputDataFormat}.<br>
 * 											Items in this array *must* be ordered from earliest to latest date.<br><br>
 * 											As a convenience, for more generic data updates, instead of an entire OHLC record, a field of `Value` can be used as an alternative to `Close`.<br>
 * 											Examples:
 * ```
 * {
 *	DT: stxx.masterData[i].DT,
 *	Value: 148
 *	}
 * ```
 * ```
 * {
 *	Date: '12/31/2011',
 *	Value: 148
 * }
 * ```
 * <br><hr><br>
 * **LAST SALE format requirements**<br><br>
 * An **object** with the following elements:
 * @param  {number}	[appendQuotes.Last]		Last sale price
 * @param  {number}	[appendQuotes.Volume]	Trade volume (**used on primary series only**)
 * @param  {number}	[appendQuotes.Bid] 		Bid price (**used on primary series only**)
 * @param  {number}	[appendQuotes.Ask] 		Offer/Ask price (**used on primary series only**)
 * @param  {array}	[appendQuotes.BidL2]		Level 2 Bid, expressed as an array of [price,size,obj] pairs.  <br>For example, BidL2: [[10.05, 15, {...}],[10.06, 10, {...}],...].<br>
 * 											`obj` is an optional object which can contain whatever you wish.  It will be conveyed all the way into the marketdepth chart and can be displayed by using the 'headsUp' method of displaying crosshair data.
 * @param  {array}	[appendQuotes.AskL2]		Level 2 Offer/Ask expressed as an array of [price,size,obj] pairs.  <br>For example, AskL2: [[11.05, 12, {...}],[11.06, 8, {...}],...].<br>
 * 											`obj` is an optional object which can contain whatever you wish.  It will be conveyed all the way into the marketdepth chart and can be displayed by using the 'headsUp' method of displaying crosshair data.
 * @param  {number}	[appendQuotes.DT] 		Date of trade. It must be a java script date [new Date()]. If omitted, defaults to "right now".
 * 											<br><br> **Last sale format DOES NOT ALLOW THE USE OF A `Date` FIELD**.
 * 											<br> If you are using the 'Date' string field with a `dataZone` for your historical data and wish to also use it for streaming last sale updates,
 * 											you must instead submit a properly formatted OHLC array with `useAsLastSale` set to `true`. Like this:
 * ```
 * stxx.updateChartData(
 *  [
 *   {"Date":"2015-04-16 16:00","Close":152.11,"Volume":4505569}
 *  ],
 *  null,
 *  {useAsLastSale:true}
 * );
 * ```
 * @param  {CIQ.ChartEngine.Chart}			[chart]				The chart to append the quotes. Defaults to the default chart.
 * @param {object} [params] Parameters to dictate behavior
 * @param {boolean} [params.noCreateDataSet] If true then do not create the data set automatically, just add the data to the masterData
 * @param {boolean} [params.noCleanupDates] If true then do not clean up the dates using {@link CIQ.ChartEngine.doCleanupDates}.  Usually set if dates were already cleaned up.
 * @param {boolean} [params.allowReplaceOHL] Set to true to bypass internal logic that maintains OHL so they are instead replaced with the new data instead of updated.
 * @param {boolean} [params.bypassGovernor] If true then dataSet will be immediately updated regardless of {@link CIQ.ChartEngine#streamParameters}. Not applicable if `noCreateDataSet` is true.
 * @param {boolean} [params.fillGaps] If true and {@link CIQ.ChartEngine#cleanupGaps} is also set, {@link CIQ.ChartEngine#doCleanupGaps} will be called to fill gaps for any newly added bars past the currently existing bar. It will not fill gaps for bars added to the middle of the masterData, or created by deleting a bar. <BR> Reminder: `tick` does not fill any gaps as it is not a predictable interval.
 * @param {string} [params.secondarySeries] Set to the name of the element (valid comparison symbol, for example) to load data as a secondary series. When left out, the data will be automatically added to the primary series. <Br>**Note:** You should never set `secondarySeries` to the primary symbol. If you are unsure of what the current primary series is, you can always query the chart engine by checking `stxx.chart.symbol`.
 * @param {boolean} [params.deleteItems] Set to true to completely delete the masterData records matching the dates in appendQuotes.
 * @param {boolean} [params.useAsLastSale] Set to true if not using a 'last sale' formatted object in `appendQuotes`.
 * This option is available in cases when a feed may always return OHLC formatted objects or a 'Close' field instead of a 'Last' field,
 * even for last sale streaming updates.
 * By definition a 'last sale' can only be a single record indicating the very 'last' sale price.
 * As such, even if multiple records are sent in the `appendQuotes` array when this flag is enabled,
 * only the last record's data will be used. Specifically the 'Close' and 'Volume' fields will be streamed.
 * @param {boolean} [params.useAsLastSale.aggregatedVolume] If your last sale updates send current volume for the bar instead of just the trade volume, set this parameter to 'true' in the `params.useAsLastSale` object. The sent in volume will be used as is instead of being added to the existing bar's volume. Not applicable when loading data for a secondary series.
 * @memberof CIQ.ChartEngine
 * @example
 * // this example will stream the last price on to the appropriate bar and add 90 to the bar's volume.
 * stxx.updateChartData(
 *   {
 *     Last: 50.94,
 *     Volume: 90
 *   }
 * );
 * @example
 * // this example will stream the last price on to the appropriate bar and set the volume for that bar to 90.
 * stxx.updateChartData(
 *   {
 *     Last: 50.94,
 *     Volume: 90
 *   },
 *   null,
 *   {useAsLastSale: {aggregatedVolume:true}}
 * );
 * @example
 * // this example will stream the last price to the appropriate bar  **for a secondary series**.
 * stxx.updateChartData(
 *   {
 *     Last: 50.94
 *   },
 *   null,
 *   {secondarySeries:secondarySymbol}
 * );
 * @example
 * // this example will add or replace a complete bar.
 * stxx.updateChartData(
 *   [
 *     {"Date":"2015-04-16 16:00","Open":152.13,"High":152.19,"Low":152.08,"Close":152.11,"Volume":4505569},
 *     {"Date":"2015-04-17 09:30","Open":151.76,"High":151.83,"Low":151.65,"Close":151.79,"Volume":2799990},
 *     {"Date":"2015-04-17 09:35","Open":151.79,"High":151.8,"Low":151.6,"Close":151.75,"Volume":1817706}
 *   ]
 * );
 * @example
 * // this example will add or replace a complete bar.
 * stxx.updateChartData(
 *   [
 *     {"Date":"2015-04-16 16:00","Value":152.13},
 *   ]
 * );
 * @since
 * - 5.1.0 New function replacing and enhancing legacy method `appendMasterData`.
 * - 5.1.0 Added ability to delete or insert items anywhere in the masterData. `deleteItems` parameter added.
 * - 5.2.0 Added `overwrite` parameter.
 * - 5.2.0 For main series data, if Close=null is set, and not streaming, then Open, High, Low and Volume also set to null.
 * - 5.2.0 For main series data, if Volume=0/null is set, and not streaming, then Volume is reset to 0.
 * - 5.2.0 Added `params.noCleanupDates`; `params.fillGaps` applicable now for secondary series as well.
 * - 6.0.0 Removed `overwrite` parameter.
 * - 6.1.0 Added BidL2 and AskL2 to `appendQuotes` object.
 * - 6.3.0 `appendQuotes` can now take `Value` instead of `Close`.
 * - 6.3.0 Added `obj` to BidL2 and AskL2 array elements to allow vendor specific data to be displayed on the chart tooltip.
 * - 7.2.0 Method now rolls up ticks if period is greater than 1.
 */
CIQ.ChartEngine.prototype.updateChartData = function (
	appendQuotes,
	chart,
	params = {}
) {
	if (!chart) chart = this.chart;

	const self = this;
	const { layout } = this;
	const { animationEntry, secondarySeries: secondary } = params;
	const { isValidNumber } = CIQ;
	let { masterData } = chart;
	let lastSale = false;
	let aggregatedVolume = false;
	let field, symbol;

	// If we are not a tick interval, we want to adjust the DT property of the appendQuotes so it matches the periodicity/interval of the existing chart data.
	function adjustDatesToInterval() {
		if (!CIQ.Market || !chart.market) return;
		// On intraday intervals we use a 24 hour market because we don't want our bars to artificially stop
		// at the end of a market session. If we get extended hours, or bad ticks we still
		// want to print them on the chart. Trust the data.
		let marketDef = {
			market_tz: CIQ.getFromNS(chart, "market.market_def.market_tz", null)
		};
		let mktInterval = layout.interval;

		if (mktInterval == "month" || mktInterval == "week") {
			// if we are rolling day bars into week or month we have to iterate day by day to find the right bar.
			if (!self.dontRoll) mktInterval = "day";
			// on week and month we need to know when the week/month starts to find the right day for the candles.
			marketDef = self.chart.market.market_def;
		}

		const theMarket = new CIQ.Market(marketDef);
		const iter_parms = {
			begin:
				masterData && masterData.length
					? masterData[masterData.length - 1].DT
					: appendQuotes.DT,
			interval: mktInterval,
			periodicity: 1,
			timeUnit: layout.timeUnit
		};

		const iter = theMarket.newIterator(iter_parms);
		let next = iter.next();
		let max, actualTime;
		if (!masterData) {
			// there are some use cases where you might prefer to stream data onto masterData without using a quotefeed or loading data first.
			appendQuotes.DT = new Date(+iter.previous());
		} else if (appendQuotes.DT < next) {
			// update current tick or some tick in the past.
			max = 0; // safety catch so we don't go on forever.
			let previous = iter.previous();
			actualTime = appendQuotes.DT;
			params.appending = true;
			while (actualTime < previous && max < 1000) {
				params.appending = false;
				previous = iter.previous();
				max++;
			}
			appendQuotes.DT = previous;
			params.updating = !params.appending;
		} else if (appendQuotes.DT >= next) {
			// create new tick. If the date matches, that's it, otherwise fast forward to find the right bar to add.
			max = 0; // safety catch so we don't go on forever.
			actualTime = appendQuotes.DT;
			while (actualTime > next && max < 1000) {
				appendQuotes.DT = next;
				next = iter.next();
				max++;
			}
			params.appending = true;
		}
	}

	// Takes the Last Sale data from the appendQuote and converts it to OHLC data
	function formatFromLastSaleData() {
		// self is last sale streaming so format accordingly
		lastSale = true;

		if (params.useAsLastSale && params.useAsLastSale.aggregatedVolume)
			aggregatedVolume = true;

		if (appendQuotes.constructor === Array) {
			// is streaming an array of OHLC, do some clean up to extract last and volume
			const lastBar = appendQuotes[appendQuotes.length - 1];
			appendQuotes = {};

			// doCleanupDates will make sure this has a valid 'DT' field in the right timeZone,
			// no need to check or convert from 'Date'
			appendQuotes.DT = lastBar.DT;

			appendQuotes.Close = lastBar.Close;
			appendQuotes.Volume = lastBar.Volume;
		} else if (appendQuotes.Last) {
			appendQuotes.Close = appendQuotes.Last;
			delete appendQuotes.Last;
		}

		if (
			appendQuotes.DT &&
			Object.prototype.toString.call(appendQuotes.DT) != "[object Date]"
		)
			appendQuotes.DT = new Date(appendQuotes.DT); // epoch or ISO string
		if (!appendQuotes.DT || appendQuotes.DT == "Invalid Date") {
			// if no date is sent in, use the current time and adjust to the dataZone
			appendQuotes.DT = new Date();
		}

		// find the right candle
		if (layout.interval != "tick") {
			adjustDatesToInterval();
		}

		appendQuotes.Open = appendQuotes.Close;
		appendQuotes.High = appendQuotes.Close;
		appendQuotes.Low = appendQuotes.Close;
	}

	// Fills the gaps from the most recent master data record to the new data
	function fillGapsFromMasterDataHead() {
		let lastRecordForThis = null;
		let fg = 0; // this is used to store the index of the first record in appendQuotes we should be using to fill gaps.
		// we'll adjust this below by looking for the starting point from masterData
		if (masterData.length) {
			lastRecordForThis = self.getFirstLastDataRecord(
				masterData,
				secondary || chart.defaultPlotField,
				true
			);
			if (lastRecordForThis) {
				if (appendQuotes[appendQuotes.length - 1].DT <= lastRecordForThis.DT)
					return; // no gap to fill
				for (; fg < appendQuotes.length; fg++) {
					if (+appendQuotes[fg].DT == +lastRecordForThis.DT) {
						// if the appendQuote is the same as the lastRecordForThis, check to see which is the "correct" record
						if (
							self.getFirstLastDataRecord(
								[appendQuotes[fg]],
								secondary || chart.defaultPlotField
							)
						)
							lastRecordForThis = null; // use appendQuote record
						break;
					} else if (appendQuotes[fg].DT > lastRecordForThis.DT) break;
				}
			}
		}
		// now fg represents the index of the first element in appendQuotes which appears after the last current element for that security.
		let gapQuotes = appendQuotes.slice(fg);
		if (lastRecordForThis)
			gapQuotes.unshift(
				secondary ? lastRecordForThis[secondary] : lastRecordForThis
			); // add previous bar so we can close gaps
		gapQuotes = self.doCleanupGaps(gapQuotes, chart);
		if (lastRecordForThis) gapQuotes.shift(); // remove previous bar
		appendQuotes = appendQuotes.slice(0, fg).concat(gapQuotes);
	}

	// Deletes an item from masterData at index i and date dt
	function deleteThisItem(i, dt) {
		let replace;
		if (secondary) {
			delete masterData[i][secondary];
			if (self.cleanupGaps) {
				replace = { DT: dt, Close: null };
				if (
					self.cleanupGaps != "gap" &&
					masterData[i - 1] &&
					masterData[i - 1][secondary]
				) {
					replace.Close = masterData[i - 1][secondary].Close;
					replace.High = replace.Low = replace.Open = replace.Close;
					replace.Volume = 0;
				}
				masterData[i][secondary] = replace;
			}
		} else {
			const spliced = masterData.splice(i, 1)[0]; //deleting from masterData here, but will reinsert if find any series data
			replace = { DT: spliced.DT, Close: null, needed: false };
			for (field in chart.series) {
				symbol = chart.series[field].parameters.symbolObject.symbol;
				if (typeof spliced[symbol] != "undefined") {
					replace[symbol] = spliced[symbol];
					delete replace.needed;
				}
			}
			if (self.cleanupGaps && self.cleanupGaps != "gap") {
				delete replace.needed;
				if (self.cleanupGaps != "gap" && masterData[i - 1]) {
					replace.Close = masterData[i - 1].Close;
					replace.High = replace.Low = replace.Open = replace.Close;
					replace.Volume = 0;
				}
			}
			if (replace.needed !== false) {
				masterData.splice(i, 0, replace);
				self.setDisplayDate(replace);
			}
		}
	}

	// Takes masterData at index i and merges it into a quote q
	function mergeMasterDataIntoNewData(i, q) {
		// If we're replacing the last bar then we want to save any series and study data, otherwise comparisons will [briefly] disappear during refreshes
		//Preserve any relevant data from prior fetched quote for this bar.
		//Here we are assuming that the data being appended to masterData is a data update, perhaps from only one exchange, while
		//the existing masterData is a consolidated quote. We trust the quote we had in masterData to have the more accurate
		//volume and open, and use the high/low from there in combination with the updated data's to determine the daily high/low.
		let master = masterData[i];
		if (secondary) master = master[secondary] || {};

		if (q.Close === null) {
			if (master.Open !== undefined) q.Open = null;
			if (master.High !== undefined) q.High = null;
			if (master.Low !== undefined) q.Low = null;
			if (master.Volume !== undefined) q.Volume = null;
			// This code will set the OHLC data for carry gap filling if applicable,
			// but it's disabled because if a Close:null is sent in, then just use it.
			// I suppose if a gap is really to be filled in, the record should be deleted.
			/*if(this.cleanupGaps && this.cleanupGaps!="gap" && masterData[i-1]){
					if(!secondary || masterData[i-1][secondary]){
						q.Close=secondary?masterData[i-1][secondary].Close:masterData[i-1].Close;
						q.High=q.Low=q.Open=q.Close;
						q.Volume=0;
					}
				}*/
		} else {
			if (lastSale) {
				if (q.Volume) {
					q.Volume = parseInt(q.Volume, 10);
				}
				if (!aggregatedVolume) q.Volume += master.Volume;
			} else {
				if (!isValidNumber(q.Volume) && master.Volume) {
					q.Volume = master.Volume;
				}
			}
			if (!params.allowReplaceOHL) {
				if (isValidNumber(master.Open)) {
					q.Open = master.Open;
				}
				if (isValidNumber(master.High) && isValidNumber(q.High)) {
					if (master.High > q.High) q.High = master.High;
				}
				if (isValidNumber(master.Low) && isValidNumber(q.Low)) {
					if (master.Low < q.Low) q.Low = master.Low;
				}
			}
			// if new data is invalid, revert to old data
			["Close", "Open", "High", "Low", "Bid", "Ask"].forEach(function (field) {
				if (!isValidNumber(q[field])) q[field] = master[field];
			});

			for (field in chart.series) {
				symbol = chart.series[field].parameters.symbolObject.symbol;
				if (
					typeof q[symbol] == "undefined" &&
					typeof master[symbol] != "undefined"
				)
					q[symbol] = master[symbol];
			}
		}
	}

	if (!params.noCleanupDates)
		this.doCleanupDates(appendQuotes, layout.interval);

	if (
		params.useAsLastSale ||
		(appendQuotes.constructor == Object &&
			(appendQuotes.Last || appendQuotes.Last === 0))
	) {
		formatFromLastSaleData();
	}

	if (appendQuotes && appendQuotes.constructor == Object)
		appendQuotes = [appendQuotes]; // When developer mistakenly sends an object instead of an array of objects
	if (!appendQuotes || !appendQuotes.length) return;
	if (this.runPrepend("appendMasterData", [appendQuotes, chart, params]))
		return;
	if (this.runPrepend("updateChartData", [appendQuotes, chart, params])) return;

	if (!masterData) masterData = [];

	let i = masterData.length - 1,
		placedFirstQuote = false;

	// we only fill from the end of the current data, not before
	if (params.fillGaps) fillGapsFromMasterDataHead();
	if (!appendQuotes.length) return; // can happen within fillGapsFromMasterDataHead

	for (let j = 0; j < appendQuotes.length; j++) {
		const quote = appendQuotes[j];
		let dt = quote.DT,
			date = quote.Date;
		if (dt && Object.prototype.toString.call(dt) != "[object Date]")
			quote.DT = dt = new Date(dt); // if already a date object; nothing to do
		if (dt) {
			if (!date || date.length != 17)
				quote.Date = CIQ.yyyymmddhhmmssmmm(quote.DT);
		}
		if (!dt) dt = quote.DT = CIQ.strToDateTime(date);

		// If Value provided, it has special meaning if Close not provided (it's the Close)
		if (!isValidNumber(quote.Close) && isValidNumber(quote.Value)) {
			quote.Close = quote.Value;
		}

		while (i >= 0 && i < masterData.length) {
			let dt2 = masterData[i].DT;
			if (!dt2) dt2 = CIQ.strToDateTime(masterData[i].Date);
			if (dt2.getTime() <= dt.getTime()) {
				placedFirstQuote = true;
				let plusOne = 0; // If time is the same then replace last bar
				if (dt2.getTime() < dt.getTime()) {
					if (i < masterData.length - 1) {
						const dtf =
							masterData[i + 1].DT || CIQ.strToDateTime(masterData[i + 1].Date);
						if (dtf.getTime() <= dt.getTime()) {
							i++;
							continue;
						}
					}
					plusOne = 1; // Otherwise append bar
				}
				if (params.deleteItems) {
					if (!plusOne) deleteThisItem(i, dt);
					break;
				} else {
					// Under tick mode, always append bars. If animating, append on the first loop and replace on subsequent loops
					if (layout.interval == "tick" && params.firstLoop !== false)
						plusOne = 1;
					if (!plusOne) mergeMasterDataIntoNewData(i, quote);

					// Here we rectify any missing/malformatted data and set any new high/low
					// If we don't set this here, the study calculations will fail
					if (isValidNumber(quote.Close)) {
						if (!isValidNumber(quote.Open)) quote.Open = quote.Close;

						let high = Math.max(quote.Open, quote.Close),
							low = Math.min(quote.Open, quote.Close);
						if (!isValidNumber(quote.High) || quote.High < high)
							quote.High = high;
						if (!isValidNumber(quote.Low) || quote.Low > low) quote.Low = low;
					}
					if (quote.Volume && !isValidNumber(quote.Volume))
						quote.Volume = parseInt(quote.Volume, 10);
					i += plusOne;

					// Insert into masterData here
					if (secondary) {
						if (appendQuotes.length - j < 50) {
							// only check last 50 records
							this.updateCurrentMarketData(quote, chart, secondary, {
								fromTrade: true,
								animationEntry
							});
						}
						if (layout.interval != "tick" || quote.Close !== undefined) {
							if (plusOne) {
								masterData.splice(i, 0, { DT: quote.DT });
								this.setDisplayDate(masterData[i]);
							}
							masterData[i][secondary] = quote;
						}
					} else {
						if (appendQuotes.length - j < 50) {
							// only check last 50 records
							this.updateCurrentMarketData(quote, chart, null, {
								fromTrade: true,
								animationEntry
							});
						}
						if (layout.interval != "tick" || quote.Close !== undefined) {
							// inserting into masterData happens here
							masterData.splice(i, plusOne ? 0 : 1, quote);
							this.setDisplayDate(quote);
						}
					}
				}
				break;
			}
			i += placedFirstQuote ? 1 : -1;
		}
		if (i < 0) {
			// we have at least one point which needs to be prepended to masterData
			// this code will prepend the first of these points, then everything else will fall in line
			if (secondary) {
				this.updateCurrentMarketData(quote, chart, secondary, {
					fromTrade: true,
					animationEntry
				});
				if (layout.interval != "tick" || quote.Close !== undefined) {
					masterData.splice(0, 0, { DT: quote.DT });
					this.setDisplayDate(masterData[0]);
					masterData[0][secondary] = quote;
				}
			} else {
				this.updateCurrentMarketData(quote, chart, null, {
					fromTrade: true,
					animationEntry
				});
				if (layout.interval != "tick" || quote.Close !== undefined) {
					masterData.splice(0, 0, quote);
					this.setDisplayDate(quote);
				}
			}
			placedFirstQuote = true;
			i = 0;
		}
	}
	if (masterData.length) this.masterData = chart.masterData = masterData;
	if (this.maxMasterDataSize)
		masterData =
			chart.masterData =
			this.masterData =
				masterData.slice(-this.maxMasterDataSize);

	const series = secondary
		? this.getSeries({ symbol: secondary, chart: chart })
		: [chart];
	for (let s = 0; s < series.length; s++) {
		const handle = series[s];
		if (!handle.endPoints.begin || handle.endPoints.begin > appendQuotes[0].DT)
			handle.endPoints.begin = appendQuotes[0].DT;
		if (
			!handle.endPoints.end ||
			handle.endPoints.end < appendQuotes[appendQuotes.length - 1].DT
		)
			handle.endPoints.end = appendQuotes[appendQuotes.length - 1].DT;
		const hField =
			(handle.parameters && handle.parameters.field) || chart.defaultPlotField;
		const lastQuote = this.getFirstLastDataRecord(appendQuotes, hField, true);
		if (lastQuote && (!handle.lastQuote || handle.lastQuote.DT <= lastQuote.DT))
			handle.lastQuote = lastQuote;
		if (secondary && params.deleteItems)
			handle.lastQuote = this.getFirstLastDataRecord(
				masterData,
				secondary,
				true
			)[secondary];
	}
	for (let pl in this.plugins) {
		const plugin = this.plugins[pl];
		if (plugin.display) {
			if (plugin.appendMasterData)
				plugin.appendMasterData(this, appendQuotes, chart);
		}
	}
	if (!this.masterData || !this.masterData.length) this.masterData = masterData;

	function dataSetAndDraw() {
		self.createDataSet(null, null, params);
		self.draw({ animationEntry });
		self.updateChartAccessories();
		self.streamParameters.count = 0;
		self.streamParameters.timeout = -1;
	}

	if (!params.noCreateDataSet) {
		const sp = this.streamParameters;
		if (++sp.count > sp.maxTicks || params.bypassGovernor) {
			clearTimeout(sp.timeout);
			dataSetAndDraw();
		} else {
			if (sp.timeout == -1) {
				sp.timeout = setTimeout(dataSetAndDraw, sp.maxWait);
			}
		}
	}
	this.runAppend("appendMasterData", arguments);
	this.runAppend("updateChartData", arguments);
};

/**
 * <span class="injection">INJECTABLE</span>
 *
 * Loads or updates detailed current market information, such as L2 data, into the [chart.currentMarketData]{@link CIQ.ChartEngine.Chart#currentMarketData} object
 * or an equally laid out object for a secondary series (symbol), if one provided.
 *
 * **[draw()]{@link CIQ.ChartEngine#draw} must be called immediately after this method to see the updates.**
 *
 * A single ‘snapshot’ object per symbol is loaded and only the most current updates maintained.
 * This method is not intended to track historical or time-series information.
 *
 * This market ‘snapshot’ information can then be used to render specialty charts such as {@link CIQ.MarketDepth}, which is not a time series chart.
 * This data is also used to feed the Depth of Market indicator, [Trade History]{@link WebComponents.cq-tradehistory} and
 * [Order Book]{@link WebComponents.cq-orderbook} web components, part of the [Active Trader package](https://active-trader.demo.chartiq.com/).
 *
 * When using as part of a chart engine that also display a time-series chart, this method is automatically called with that same time-series data every time new data is load into the chart, thereby maintaining all charts in sync.
 * And only needs to be explicitly called when needing to update the L2 'snapshot' at a faster refresh rate than the rest of the time-series data, or if the time-series data does not provide this information.
 * <br>If using the {@link CIQ.MarketDepth} standalone, without a standard time series chart, you must call this method explicitly to load and refresh the data.
 *
 * If triggering any action based on calls to this method, you may choose to use an injection or listen to the `touched` property on
 * the [chart.currentMarketData]{@link CIQ.ChartEngine.Chart#currentMarketData} object with {@link CIQ.UI.observeProperty}. The injection
 * will call every time the method is called, whereas the touched property will only be updated once per synchronous block of code. This
 * produces fewer listener/injection calls, particularly when this method is being called from inside a loop. The touched property will
 * also update asynchronously. Based on the listener/injection action and how expensive it is, you may wish to use one or the other.
 *
 * Data Format:
 *
 * | Field | Required | Type | Description | Used for Active Trader | Used for TFC |
 * | ----------- | -------- | ---------------- | ---------------- | ---------------- | ---------------- |
 * | DT | Yes | A JavaScript Date() object | Timestamp for the data record | Yes | Yes |
 * | Bid | No | number | The current bid price | No | Yes |
 * | Ask | No | number | The current ask price | No | Yes |
 * | Last | No | number | The last (current) price.<br>If not present, the midpoint of the chart will be the average of the lowest bid and the highest ask.<br>Required on [Trade History](http://jsfiddle.net/chartiq/r2k80wcu) | Yes | Yes |
 * | BidSize | No | number | The bid size  | No | No |
 * | AskSize | No | number | The ask size | No | No |
 * | LastSize | No | number | The last (current) price size.<br>Required on [Trade History](http://jsfiddle.net/chartiq/r2k80wcu) | Yes | No |
 * | LastTime | No | A JavaScript Date() object | Timestamp for the <b>Last</b> price provided.<br>Required on [Trade History](http://jsfiddle.net/chartiq/r2k80wcu) | Yes | No |
 * | BidL2 | No | array | Level 2 Bid, expressed as an array of [price,size] pairs.<br>For example, BidL2: [[10.05,15],[10.06,10],...]<br>Required on [Order Book](http://jsfiddle.net/chartiq/L30hna2s/) | Yes | No |
 * | AskL2 | No | array | Level 2 Ask, expressed as an array of [price,size] pairs.<br>For example, AskL2: [[10.05,15],[10.06,10],...]<br>Required on [Order Book](http://jsfiddle.net/chartiq/L30hna2s/) | Yes | No |
 *
 * Since not all of the data will need to be updated at the same time, this method allows you to send only the data that needs to be changed. Any values not provided will simply be skipped and not updated on the object.
 *
 * Example data format for a marketDepth chart:
 * ```
 * {
 * 	DT:new Date("2018-07-30T04:00:00.000Z"),
 * 	Last:100.2589,
 * 	BidL2:
 * 	[
 * 		[93.54,5],[93.65,2],[93.95,7],[95.36,2],
 * 		[95.97,9],[96.58,1], [96.68, 8], [96.98, 4],
 * 		[97.08, 5], [97.18, 5], [97.28, 3], [97.38, 5],
 * 		[97.48, 6], [97.69, 26], [98.29, 5], [98.39, 33],
 * 		[98.49, 13], [98.6, 42], [98.8, 13], [98.9, 1]
 * 	],
 *
 * 	AskL2:
 * 	[
 * 		[101.22,226],[101.32,31],[101.42,13],[101.53,188],
 * 		[101.63,8],[101.73,5],[101.83,16],[101.93,130],
 * 		[102.03,9],[102.13,122],[102.23,5],[102.33,5],
 * 		[102.43,7],[102.54,9],[102.84,3],[102.94,92],
 * 		[103.04,7],[103.24,4],[103.34,7],[103.44,6]
 * 	]
 * }
 * ```
 *
 * @param {object} data Data to load as per required format.
 * @param  {CIQ.ChartEngine.Chart} chart The chart whose market data to update. Defaults to the instance chart.
 * @param {string} symbol Symbol if passing secondary series information
 * @param {object} params  Additional parameters
 * @param {boolean} [params.fromTrade] This function can be called directly or as a result of a trade update, such as from {@link CIQ.ChartEngine.Chart#updateChartData}.
 * 										Set this param to `true` to indicate the incoming data is a master data record.
 * 										Otherwise the function will attempt to adjust the record date to align with the last bar.
 * @param {number} [params.finalClose] If the data.Close is being manipulated (such as with animation), this param should contain the
 * 		real, final Close value
 * @param {boolean} [params.animationEntry] Indicates that the call was initiated by an animation. If you adding any injections to this
 * 		method, you may wish to ignore animation entries.
 * @param {boolean} [params.animationLastBar] Indicates that the call was initiated by the end of an animation.
 * @memberof CIQ.ChartEngine
 * @since
 * - 6.1.0
 * - 6.1.1 Added `params.fromTrade`.
 * - 6.2.3 Added `params.finalClose`.
 * - 8.4.0 Added `params.animationEntry` and `params.animationLastBar`.
 */
CIQ.ChartEngine.prototype.updateCurrentMarketData = function (
	data,
	chart,
	symbol,
	params = {}
) {
	if (!data || !data.DT) return;
	if (!chart) chart = this.chart;
	const { fromTrade } = params;
	// find the right bar for the data, if not found already
	const timestamp = data.DT;
	if (!fromTrade && this.layout.interval != "tick" && chart.market) {
		if (chart.market.market_def) {
			if (!chart.market.isMarketDate(data.DT)) return; // non-market date, disregard
			if (
				!CIQ.ChartEngine.isDailyInterval(this.layout.interval) &&
				chart.market.getSession(data.DT) === null
			)
				return; // outside of market hours, disregard
		}
		// Find the latest possible bar for this data, including after hours
		// Iterate off a copy so we don't mess with the chart's market's settings!
		const iter_parms = {
			begin: data.DT,
			interval: this.layout.interval,
			periodicity: this.layout.periodicity,
			timeUnit: this.layout.timeUnit
		};
		const market = new CIQ.Market(chart.market.market_def);
		if (this.extendedHours && this.extendedHours.filter)
			market.enableAllAvailableSessions();
		const iter = market.newIterator(iter_parms);
		iter.next();
		data.DT = iter.previous();
	}

	if (this.runPrepend("updateCurrentMarketData", arguments)) return;
	const dateField = fromTrade ? "DT" : "Timestamp";
	let { currentMarketData } = chart;
	let anyChanges = false;
	if (symbol) {
		if (!currentMarketData[symbol]) currentMarketData[symbol] = {};
		currentMarketData = currentMarketData[symbol];
	}
	["Last", "Bid", "Ask"].forEach(function (i) {
		if (data[i] && typeof data[i] == "number") {
			const current = currentMarketData[i];
			if (
				!current ||
				!current[dateField] ||
				current[dateField] <= (fromTrade ? data.DT : timestamp)
			) {
				currentMarketData[i] = {
					DT: data.DT,
					Price: data[i],
					Size: data[i + "Size"],
					Timestamp: timestamp
				};
				anyChanges = true;
			}
		}
	});
	["BidL2", "AskL2"].forEach(function (i) {
		if (data[i] && data[i] instanceof Array) {
			const current = currentMarketData[i];
			if (
				!current ||
				!current[dateField] ||
				current[dateField] <= (fromTrade ? data.DT : timestamp)
			) {
				currentMarketData[i] = {
					DT: data.DT,
					Price_Size: data[i],
					Timestamp: timestamp
				};
				anyChanges = true;
			}
		}
	});
	if (
		data.Close &&
		(!currentMarketData.Last ||
			currentMarketData.Last.Timestamp <= (data.LastTime || timestamp))
	) {
		let close = data.Close,
			finalClose = params && params.finalClose;
		if (finalClose || finalClose === 0) close = finalClose;
		currentMarketData.Last = {
			DT: data.DT,
			Price: close,
			Size:
				data.LastSize === undefined && this.layout.interval == "tick"
					? data.Volume
					: data.LastSize,
			Timestamp: data.LastTime || timestamp
		};
		anyChanges = true;
	}

	if (anyChanges && !params.animationEntry) {
		// if updating from inside a loop only trigger any listeners once after loop has finished
		const timeAtTouch = new Date();
		clearTimeout(currentMarketData.assignLastTouchAsync);
		currentMarketData.assignLastTouchAsync = setTimeout(() => {
			currentMarketData.touched = timeAtTouch; // so we can observe it
		});
	}

	if (!fromTrade) delete data.Last; //  can cause problems in injections if left

	this.runAppend("updateCurrentMarketData", arguments);
};

/**
 * <span class="injection">INJECTABLE</span>
 *
 * Clears the [chart.currentMarketData]{@link CIQ.ChartEngine.Chart#currentMarketData} object or the one linked to a secondary series, if one provided.
 * @param  {CIQ.ChartEngine.Chart} chart The chart to clear. If omitted, will clear all charts.
 * @param {string} symbol Symbol to clear this symbol's secondary series information
 * @memberof CIQ.ChartEngine
 * @since 6.1.0
 */
CIQ.ChartEngine.prototype.clearCurrentMarketData = function (chart, symbol) {
	if (this.runPrepend("clearCurrentMarketData", arguments)) return;
	var ch,
		charts = [];
	if (!chart) {
		for (ch in this.charts) {
			charts.push(this.charts[ch]);
		}
	} else {
		charts.push(chart);
	}
	for (ch = 0; ch < charts.length; ch++) {
		var md = charts[ch].currentMarketData;
		if (symbol) {
			delete md[symbol];
		} else {
			// preserve original object as it's being observed
			for (var d in md) {
				md[d] = undefined;
			}
		}
	}
	this.runAppend("clearCurrentMarketData", arguments);
};

};


let __js_core_engine_event_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Legacy method used to internally dispatch a registered event whenever a change to layout, drawings or theme occurs.
 * Events must be registered using {@link CIQ.ChartEngine#addDomEventListener} for "layout", "drawing", "theme" and "preferences".
 *
 * This is simply a proxy method that calls the corresponding {@link CIQ.ChartEngine#dispatch} method.
 *
 * Developers creating their own custom functionality should call {@link CIQ.ChartEngine#dispatch} instead.
 *
 * @param  {string} change Type of change that occurred.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.changeOccurred = function (change) {
	var obj = {
		stx: this,
		symbol: this.chart.symbol,
		symbolObject: this.chart.symbolObject,
		layout: this.layout,
		drawings: this.drawingObjects
	};
	if (change == "theme") this.dispatch("theme", obj);
	if (this.currentlyImporting) return; // changes actually occurring because of an import, not user activity
	if (change == "layout") {
		this.dispatch("layout", obj);
	} else if (change == "vector") {
		this.dispatch("drawing", obj);
	} else if (change == "preferences") {
		this.dispatch("preferences", obj);
	}
};

/**
 * Charts may require asynchronous data to render. This creates a dilemma for any external
 * process that depends on a fully rendered chart (for instance a process to turn a chart into an image).
 * To solve this problem, external processes can register for a callback which will tell them when the chart
 * has been drawn. See {@link CIQ.ChartEngine.registerChartDrawnCallback}.
 *
 * To accommodate this requirement, studies, plugins or injections that render asynchronously should use startAsyncAction
 * and {@link CIQ.ChartEngine#completeAsyncAction} to inform the chart of their asynchronous activity.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.startAsyncAction = function () {
	if (!this.pendingAsyncs) this.pendingAsyncs = [];
	this.pendingAsyncs.push(true);
};

/**
 * Registers a callback for when the chart has been drawn
 * @param  {function} fc The function to call
 * @return {object} An object that can be passed in to {@link CIQ.ChartEngine#unregisterChartDrawnCallback}
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.registerChartDrawnCallback = function (fc) {
	if (!this.asyncCallbacks) this.asyncCallbacks = [];
	this.asyncCallbacks.push(fc);
	return {
		fc: fc
	};
};

/**
 * Removes a callback registration for when the chart has been drawn
 * @param  {object} obj An object from {@link CIQ.ChartEngine#registerDrawnCallback}
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.unregisterChartDrawnCallback = function (obj) {
	for (var i = 0; i < this.asyncCallbacks.length; i++) {
		if (this.asyncCallbacks[i] == obj.fc) {
			this.asyncCallbacks.splice(i, 1);
			return;
		}
	}
};

/**
 * Makes the async callbacks only if no pending async activity
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.makeAsyncCallbacks = function () {
	if (!this.asyncCallbacks) return; // no callbacks to make
	if (!this.pendingAsyncs || !this.pendingAsyncs.length) {
		// If no pending asyncs, or the array is empty (all have been fulfilled)
		for (var i = 0; i < this.asyncCallbacks.length; i++) {
			this.asyncCallbacks[i]();
		}
	}
};
/**
 * Studies or plugins that use asynchronous data should call this when their async activities are complete.
 * See {@link CIQ.ChartEngine#startAsyncAction}
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.completeAsyncAction = function () {
	this.pendingAsyncs.pop();
	this.makeAsyncCallbacks();
};

/**
 * Add a DOM element's event listener and index it so that it will be removed when invoking CIQ.ChartEngine.destroy().
 * https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
 * @param {element} element DOM element to listen for changes on
 * @param {string} event The event type to listen for. Possible values: https://developer.mozilla.org/en-US/docs/Web/Events
 * @param {function} listener The callback to invoke when the event happens.
 * @param {*} Either a boolean or object. See addEventListener options.
 * @see {@link CIQ.ChartEngine#destroy}
 * @private
 * @since 3.0.0
 */
CIQ.ChartEngine.prototype.addDomEventListener = function (
	element,
	event,
	listener,
	options
) {
	element.addEventListener(event, listener, options);
	this.eventListeners.push({
		element: element,
		event: event,
		function: listener,
		options: options
	});
};

/**
 * Registers a listener for a chart event in the chart engine instance.
 *
 * Events are tracked in the `CIQ.ChartEngine.callbackListeners` object, which is READ ONLY and
 * should never be manually altered.
 *
 * Valid event types and listeners:
 *   - `*`: Passing in this value registers the listener to every event type below.
 *   - `doubleTap`: [doubleTapEventListener]{@link CIQ.ChartEngine~doubleTapEventListener}
 *   - `doubleClick`: [doubleClickEventListener]{@link CIQ.ChartEngine~doubleClickEventListener}
 *   - `drawing`: [drawingEventListener]{@link CIQ.ChartEngine~drawingEventListener}
 *   - `drawingComplete`: [drawingCompleteEventListener]{@link CIQ.ChartEngine~drawingCompleteEventListener}
 *   - `drawingEdit`: [drawingEditEventListener]{@link CIQ.ChartEngine~drawingEditEventListener}
 *   - `floatingWindow`: [floatingWindowEventListener]{@link CIQ.ChartEngine~floatingWindowEventListener}
 *   - `layout`: [layoutEventListener]{@link CIQ.ChartEngine~layoutEventListener}
 *   - `longhold`: [longholdEventListener]{@link CIQ.ChartEngine~longholdEventListener}
 *   - `move`: [moveEventListener]{@link CIQ.ChartEngine~moveEventListener}
 *   - `newChart`: [newChartEventListener]{@link CIQ.ChartEngine~newChartEventListener}
 *   - `notification`: [notificationEventListener]{@link CIQ.ChartEngine~notificationEventListener}
 *   - `periodicity`: [periodicityEventListener]{@link CIQ.ChartEngine~periodicityEventListener}
 *   - `preferences`: [preferencesEventListener]{@link CIQ.ChartEngine~preferencesEventListener}
 *   - `rightClick`: [rightClickEventListener]{@link CIQ.ChartEngine~rightClickEventListener}
 *   - `scroll`: [scrollEventListener]{@link CIQ.ChartEngine~scrollEventListener}
 *   - `studyOverlayEdit`: [studyOverlayEditEventListener]{@link CIQ.ChartEngine~studyOverlayEditEventListener}
 *   - `studyPanelEdit`: [studyPanelEditEventListener]{@link CIQ.ChartEngine~studyPanelEditEventListener}
 *   - `symbolChange`: [symbolChangeEventListener]{@link CIQ.ChartEngine~symbolChangeEventListener}
 *   - `symbolImport`: [symbolImportEventListener]{@link CIQ.ChartEngine~symbolImportEventListener}
 *   - `tap`: [tapEventListener]{@link CIQ.ChartEngine~tapEventListener}
 *   - `theme`: [themeEventListener]{@link CIQ.ChartEngine~themeEventListener}
 *   - `undoStamp`: [undoStampEventListener]{@link CIQ.ChartEngine~undoStampEventListener}
 *
 * @param {string|string[]} type One or more event types to listen for. See the description above
 * 		for valid types.
 * @param {function} callback The listener to call when the event or events specified by `type`
 * 		are triggered. Accepts an object argument containing properties specified in the event
 * 		listener definition.
 * @return {object} An object containing `type` and `callback`. The object can be passed to
 * 		{@link CIQ.ChartEngine#removeEventListener} to remove the listener.
 *
 * @memberof CIQ.ChartEngine
 * @since
 * - 04-2016-08
 * - 4.0.0 Added "doubleTap".
 * - 4.0.0 Type can be an array of event options.
 * - 6.3.0 Added "scroll".
 * - 7.0.0 Added "preferences" and "drawingEdit".
 * - 8.1.0 Added "periodicity".
 * - 8.2.0 Added "notification" and "floatingWindow".
 * - 8.6.0 Added "drawingComplete".
 *
 * @example <caption>Add a "longhold" event listener.</caption>
 * stxx.longHoldTime = ... // Optionally override default value of 700ms.
 * stxx.addEventListener("longhold", function(lhObject) {
 *     CIQ.alert("longhold event at x: " + lhObject.x + " y: " + lhObject.y);
 * });
 *
 * @example <caption>Add a "tap" listener that provides location and details when a series is clicked or tapped.</caption>
 * stxx.addEventListener("tap", function(tapObject){
 *     if (this.anyHighlighted) {
 *         for (let n in this.chart.seriesRenderers) {
 *             let r = this.chart.seriesRenderers[n];
 *             for (let j = 0; j < r.seriesParams.length; j++) {
 *                 series = r.seriesParams[j];
 *                 if (series.highlight) {
 *                     let bar = this.barFromPixel(tapObject.x);
 *                     if (this.chart.dataSegment[bar]) {
 *                         // Replace console.log with your required logic as needed.
 *                         console.log("Tap event at pixel x: " + tapObject.x + " y: " + tapObject.y);
 *                         console.log("Price:", this.priceFromPixel(tapObject.y), " Date: ", this.chart.dataSegment[bar].DT);
 *                         console.log("Series Details: ", JSON.stringify(series));
 *                     }
 *                 }
 *             }
 *         }
 *     }
 * });
 */
CIQ.ChartEngine.prototype.addEventListener = function (type, callback) {
	if (type === "*") {
		for (var key in this.callbackListeners) {
			this.callbackListeners[key].push(callback);
		}
	} else if (type instanceof Array) {
		for (var i = 0; i < type.length; i++) {
			this.callbackListeners[type[i]].push(callback);
		}
	} else {
		var arr = this.callbackListeners[type];
		if (!arr) {
			throw new Error("Attempted to add an invalid listener.");
		}
		arr.push(callback);
	}
	return { type: type, cb: callback };
};

/**
 * Removes a listener for a chart event type.
 *
 * If the event type is "*", listeners for all event types are removed. See
 * {@link CIQ.ChartEngine#addEventListener} for valid event types.
 *
 * Events are tracked in the `CIQ.ChartEngine.callbackListeners` object.
 *
 * @param {object|string} obj The object returned from adding the listener (see
 * 		{@link CIQ.ChartEngine#addEventListener}) or a string that identifies the type of event.
 * 		<p>**Note:** If this parameter is a string, the optional `cb` parameter is required.
 * @param {string} obj.type The type of event.
 * @param {function} obj.cb The listener to be removed.
 * @param {function} [cb] The listener to be removed. Required if the `obj` parameter is an
 * 		string, unused otherwise.
 *
 * @memberof CIQ.ChartEngine
 * @since 04-2016-08
 */
CIQ.ChartEngine.prototype.removeEventListener = function (obj, cb) {
	if (!obj || typeof obj != "object") {
		// User likely passed in type and callback as two separate arguments into this function.
		// This is accounted for because it is consistent with the argument schema of "addEventListener"
		obj = {
			type: obj,
			cb: cb
		};
	}

	var spliceEvent = function (arr, cb) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i] === cb) {
				arr.splice(i, 1);
				return;
			}
		}
	};
	var callbackListeners = this.callbackListeners;

	if (obj.type === "*") {
		for (var key in callbackListeners) {
			spliceEvent(callbackListeners[key], obj.cb);
		}
		return;
	}

	if (!callbackListeners[obj.type]) {
		throw new Error("Attempted to remove an invalid listener.");
	}

	spliceEvent(callbackListeners[obj.type], obj.cb);
};

/**
 * Dispatches an event by calling one or more
 * [event listeners]{@link CIQ.ChartEngine#eventListeners} registered for the event specified by
 * `type`. Event listeners registered for the `*` event type are also subsequently called.
 * See {@link CIQ.ChartEngine#addEventListener}.
 *
 * **Note:** If any of the called event listeners returns true, all remaining uncalled
 * listeners are bypassed.
 *
 * @param {string} type Identifies the type of event for which the event listeners are called.
 * 		Must be one of the types listed in {@link CIQ.ChartEngine#addEventListener} excluding `*`.
 * @param {object} data A collection of parameters to provide to the listener functions called in
 * 		response to the event. See the listener types listed in
 * 		{@link CIQ.ChartEngine#addEventListener} for relevant parameters.
 * @return {boolean} False unless a called listener returns true, in which case this function
 * 		also returns true.
 *
 * @memberof CIQ.ChartEngine
 *
 * @example
 * // Trigger a layout change event; perhaps to save the layout.
 * stx.dispatch("layout", {
 *     stx: stx,
 *     symbol: stx.chart.symbol,
 *     symbolObject: stx.chart.symbolObject,
 *     layout: stx.layout,
 *     drawings: stx.drawingObjects
 * });
 */
CIQ.ChartEngine.prototype.dispatch = function (type, data) {
	var arr = this.callbackListeners[type];
	if (arr) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].call(this, data) === true) return true;
		}
	}
	arr = this.callbackListeners["*"];
	if (arr) {
		for (var j = 0; j < arr.length; j++) {
			if (arr[j].call(this, data) === true) return true;
		}
	}
	return false;
};

//@private
CIQ.ChartEngine.prototype.updateListeners = function (event) {
	for (var i in this.plugins) {
		var plugin = this.plugins[i];
		if (plugin.display && plugin.listener) plugin.listener(this, event);
	}
};

/**
 * Adds an event handler to be handled by all documents or windows.
 * If you just want to attach an event handler to one document or window, then use the native method
 * document.addEventListener(...).
 *
 * @param {string|string[]} events Event or array of events for the document to listen for
 * @param {function} listener Function to call when event is fired
 * @param {object} [options] Options to pass to the event listener, e.g. `{passive:false}`
 * @param {boolean} [isWindow] If true, attach to window, otherwise, to the document
 *
 * @memberof CIQ.ChartEngine
 * @static
 *
 * @since 8.5.0
 * @example
 * 	CIQ.ChartEngine.registerGlobalEvent(["mouseup", "touchend"], myHandler, {passive:false});
 *
 */
CIQ.ChartEngine.registerGlobalEvent = function (
	events,
	listener,
	options,
	isWindow
) {
	if (!Array.isArray(events)) events = [events];
	events.forEach((ev) => {
		CIQ.ChartEngine.globalEventHandlers.push({
			event: ev,
			listener,
			options: options || false,
			isWindow,
			applied: []
		});
	});
	CIQ.ChartEngine.attachGlobalEventHandlers();
};

/**
 * Attaches events which were registed by {@link CIQ.ChartEngine.registerGlobalEvent}
 * to any documents or windows for which they were not yet registered.
 *
 * @memberof CIQ.ChartEngine
 * @static
 *
 * @since 8.5.0
 *
 */
CIQ.ChartEngine.attachGlobalEventHandlers = function () {
	const registeredContainers = CIQ.ChartEngine.registeredContainers;
	registeredContainers.forEach((container) => {
		const { ownerDocument } = container;
		CIQ.ChartEngine.globalEventHandlers.forEach(function (handler) {
			const { event, listener, options, isWindow, applied } = handler;
			if (applied.indexOf(ownerDocument) === -1) {
				const target = isWindow ? ownerDocument.defaultView : ownerDocument;
				target.addEventListener(event, listener, options);
				applied.push(ownerDocument);
			}
		});
	});
};

};


let __js_core_engine_injection_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * The following is a list of ADVANCED injectable methods.
 *
 * **These methods should not be normally called by your code, but rather injections should be used to modify their behavior within the library Kernel.**
 *
 * The "Injection API" provides prepend and append functionality to any built-in method.
 * Essentially what this means is that a developer can write code that will be run either before (prepend) or after (append) any internal {@link CIQ.ChartEngine} function (such as draw() or mouseMove()).
 * This gives developers the ability to supplement, override or ignore any of the built-in functionality.
 *
 * Note that you may prepend or append multiple functions. Each injected function is stacked "outward" (daisy-chained) from the core function.
 *
 * _prepend >> prepend >> prepend >> function << append << append << append_
 *
 * You may prepend/append either to CIQ.ChartEngine.prototype or directly to a CIQ.ChartEngine instance.
 *
 * See the {@tutorial Using the Injection API} and [Customization Basics](tutorial-Customization%20Basics.html#injections) tutorials for additional guidance and examples.
 * @namespace CIQ.ChartEngine.AdvancedInjectable
 * @example
 * CIQ.ChartEngine.prototype.append("method_name_goes_here", function(){
 * 	// do something here
 * });
 * @example
 * CIQ.ChartEngine.prototype.prepend("method_name_goes_here", function(){
 * 	// do something here
 * 	// return true; // if you want to exit the method after your injection
 * 	// return false; // if you want the standard code to follow the prepend
 * });
 */

/**
 * Prepends custom developer functionality to an internal chart member. See [“Injection API"]{@tutorial Using the Injection API}.
 * @param  {string} o Signature of member
 * @param  {function} n Callback function, will be called with "apply"
 * @memberof CIQ.ChartEngine
 * @since
 * - 04-2015 You can append either to an {@link CIQ.ChartEngine} instance, or to the prototype. The first will affect only a single
 * chart while the latter will affect any chart (if you have multiple on the screen).
 * - 15-07-01 Function returns a descriptor which can be passed in to [removeInjection()]{@link CIQ.ChartEngine#removeInjection} to remove it later on.
 * @return {object} Injection descriptor which can be passed in to {@link CIQ.ChartEngine#removeInjection} to remove it later on.
 */
CIQ.ChartEngine.prototype.prepend = function (o, n) {
	var m = "prepend" + o;
	var prepends;
	if (this instanceof CIQ.ChartEngine) {
		prepends = this.hasOwnProperty(m) ? this[m] : [];
		this[m] = [n].concat(prepends);
	} else {
		prepends = CIQ.ChartEngine.prototype[m] || [];
		CIQ.ChartEngine.prototype[m] = [n].concat(prepends);
	}
	return { method: m, func: n };
};

/**
 * Appends custom developer functionality to an internal chart member. See [“Injection API"]{@tutorial Using the Injection API}.
 * @param  {string} o Signature of member
 * @param  {function} n Callback function, will be called with "apply"
 * @memberof CIQ.ChartEngine
 * @since
 * - 04-2015 You can append either to an {@link CIQ.ChartEngine} instance, or to the prototype. The first will affect only a single
 * chart while the latter will affect any chart (if you have multiple on the screen)
 * - 15-07-01 Function returns a descriptor which can be passed in to [removeInjection()]{@link CIQ.ChartEngine#removeInjection} to remove it later on.
 * @return {object} Injection descriptor which can be passed in to {@link CIQ.ChartEngine#removeInjection} to remove it later on.
 */
CIQ.ChartEngine.prototype.append = function (o, n) {
	var m = "append" + o;
	var appends;
	if (this instanceof CIQ.ChartEngine) {
		appends = this.hasOwnProperty(m) ? this[m] : [];
		this[m] = appends.concat(n);
	} else {
		appends = CIQ.ChartEngine.prototype[m] || [];
		CIQ.ChartEngine.prototype[m] = appends.concat(n);
	}
	return { method: m, func: n };
};

/**
 * Runs the prepend injections. A prepend function that returns true will short circuit any proceeding prepend functions, and the core functionality.
 * @private
 * @param  {string} o	 The function name
 * @param  {array} args The arguments to the function
 * @param  {object} self The this object
 * @return {boolean}	  Returns true if any prepend function returns true.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.runPrepend = function (o, args, self) {
	var n = "prepend" + o;
	var prepends = this.hasOwnProperty(n) ? this[n] : [];
	prepends = prepends.concat(CIQ.ChartEngine.prototype[n] || []);
	if (!prepends.length) return false;
	if (!self) self = this;
	for (var i = 0; i < prepends.length; i++) {
		var rv = prepends[i].apply(self, args);
		if (rv) return rv;
	}
	return false;
};

/**
 * Runs the append injections. An append function that returns true will short circuit any proceeding append functions (but not the core functionality since that has already ocurred).
 * @private
 * @param  {string} o	 The function name
 * @param  {array} args The arguments to the function
 * @param  {object} self The this object
 * @return {boolean}	  Returns true if any append function returns true.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.runAppend = function (o, args, self) {
	var n = "append" + o;
	var appends = this.hasOwnProperty(n) ? this[n] : [];
	appends = appends.concat(CIQ.ChartEngine.prototype[n] || []);
	if (!appends.length) return false;
	if (!self) self = this;
	for (var i = 0; i < appends.length; i++) {
		var rv = appends[i].apply(self, args);
		if (rv) return rv;
	}
	return false;
};

/**
 * Removes a specific injection.  One can remove either an instance injection or a prototype injection, depending on how the function is called.
 * @param  {object} id The injection descriptor returned from {@link CIQ.ChartEngine#prepend} or {@link CIQ.ChartEngine#append}
 * @since 07/01/2015
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.removeInjection = function (id) {
	var method = id.method;
	var i;
	if (this instanceof CIQ.ChartEngine) {
		if (!this[method]) return;
		for (i = 0; i < this[method].length; i++) {
			if (this[method][i] == id.func) {
				this[method].splice(i, 1);
				return;
			}
		}
	} else {
		if (!CIQ.ChartEngine.prototype[method]) return;
		for (i = 0; i < CIQ.ChartEngine.prototype[method].length; i++) {
			if (CIQ.ChartEngine.prototype[method][i] == id.func) {
				CIQ.ChartEngine.prototype[method].splice(i, 1);
				return;
			}
		}
	}
};
/**
 * Removes all prepend and append injections from a specified CIQ.ChartEngine function.
 * If called as an instance method, will remove the instance injections.
 * If called as a prototype method, will remove the prototype injections.
 * @example
 * stxx.remove("displayChart");  // removes instance injections
 * CIQ.ChartEngine.prototpye.remove("displayChart");  // removes prototype injections
 * @param  {string} o Signature of function which has injections to remove
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.remove = function (o) {
	if (this instanceof CIQ.ChartEngine) {
		delete this["append" + o];
		delete this["prepend" + o];
	} else {
		delete CIQ.ChartEngine.prototype["append" + o];
		delete CIQ.ChartEngine.prototype["prepend" + o];
	}
};

};


let __js_core_engine_misc_ = (_exports) => {


var CIQ = _exports.CIQ,
	timezoneJS = _exports.timezoneJS;

/**
 * Given a browser time it will return the date in dataZone time. See {@link CIQ.ChartEngine#setTimeZone} for more details.
 * If no dataZone is set, it will return the original date passed in.
 * @param {date} browserDate Date in browser time - as in 'new Date();'
 * @return {date} Date converted to dataZone
 * @memberof CIQ.ChartEngine
 * @since 07-2016-16.6
 */
CIQ.ChartEngine.prototype.convertToDataZone = function (browserDate) {
	if ((browserDate || browserDate === 0) && this.dataZone) {
		// convert the current time to the dataZone
		var tzNow = CIQ.convertTimeZone(browserDate, null, this.dataZone);
		// remember the the masterData is in local time but really representing the dataZone time.
		// now build a browser timezone time using the dataZone time so it will match the offset of the existing data in masterData.
		browserDate = new Date(
			tzNow.getFullYear(),
			tzNow.getMonth(),
			tzNow.getDate(),
			tzNow.getHours(),
			tzNow.getMinutes(),
			tzNow.getSeconds(),
			tzNow.getMilliseconds()
		);
	}
	return browserDate;
};

/**
 * This method does nothing. It is just a known location to put a break point for debugging the kernel.
 * @private
 */
CIQ.ChartEngine.prototype.debug = function () {};

/**
 * Measures frames per second. Use this from the console.
 * @param {number} [seconds = 5] Polling interval length
 * @param {function} cb Callback to invoke when done polling
 * @private
 */
CIQ.ChartEngine.prototype.fps = function (seconds, cb) {
	seconds = seconds || 5;
	var start = new Date().getTime();
	var frames = 0;
	var self = this;
	console.log("Running fps() for " + seconds + " seconds");

	function render() {
		var duration = (new Date().getTime() - start) / 1000;
		if (duration > seconds) {
			var fps = frames / duration;
			console.log("FPS=" + fps);
			if (cb) cb(fps);
			return;
		}
		self.draw();
		frames++;
		if (CIQ.ChartEngine.useAnimation) {
			requestAnimationFrame(render);
		} else {
			setTimeout(render, 0);
		}
	}
	render();
};

// minimal here, see interaction file for complete list and docs
CIQ.ChartEngine.htmlControls = {
	mSticky:
		'<div class="stx_sticky"> <span class="mStickyInterior"></span></div>',
	iconsTemplate:
		'<div class="stx-panel-control"><div class="stx-panel-title"></div><div class="stx-panel-legend"></div></div>'
};

/**
 * Sets the base chart type for the primary symbol.
 * @param {string} chartType The chart type. See <a href="CIQ.ChartEngine.html#layout%5B%60chartType%60%5D">CIQ.ChartEngine.layout.chartType</a> for valid options.
 *
 * See {@tutorial Chart Styles and Types} for more details.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.setChartType = function (chartType) {
	var layout = this.layout,
		chart = this.chart;
	if (layout.aggregationType != "ohlc") {
		layout.aggregationType = "ohlc";
		if (chart.canvas) this.createDataSet();
	}
	layout.chartType = chartType;
	this.setMainSeriesRenderer();
	if (this.mainSeriesRenderer.isAggregation && this.setAggregationType)
		return this.setAggregationType(chartType);
	chart.defaultChartStyleConfig = { type: chartType };
	if (this.displayInitialized) this.draw();
	this.changeOccurred("layout");
};

CIQ.ChartEngine.prototype.setChartScale = function (chartScale) {
	if (!chartScale) chartScale = "linear";
	var needsTransform = {
		percent: true,
		relative: true
	};
	this.layout.chartScale = chartScale;
	if (this.chart.canvas) this.draw();
	this.changeOccurred("layout");
};

/**
 * <span class="injection">INJECTABLE</span>
 * <span class="animation">Animation Loop</span>
 *
 * Sets the chart y-axis to linear scale if:
 * - the y-axis is currently set to log scale and
 * - the chart data set contains a value less than or equal to zero.
 *
 * @return {boolean} true if log scale has been deactivated, otherwise false.
 *
 * @alias checkLogScale
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @since 8.2.0
 */
CIQ.ChartEngine.prototype.checkLogScale = function () {
	if (this.runPrepend("checkLogScale", arguments)) return;
	if (this.layout.chartScale !== "log") return false;
	let logScaleDeactivated = false;

	if (this.chart.yAxis.lowValue <= 0) {
		this.setChartScale("linear");
		this.dispatch("notification", "logdeactivated");
		logScaleDeactivated = true;
	}
	this.runAppend("checkLogScale", arguments);
	return logScaleDeactivated;
};

/**
 * Sets the charts to adjusted values rather than standard values. Adjusted values are calculated outside of the chart engine (and may be splits, dividends or both).
 * When charts are using adjusted values, a computed ratio for each tick is used for price to pixel calculations which keeps drawings accurate
 * @param {boolean} data True to use adjusted values (Adj_Close), false to use Close values
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.setAdjusted = function (data) {
	this.layout.adj = data;
	if (this.chart.canvas) {
		this.createDataSet();
		this.draw();
	}
	this.changeOccurred("layout");
};

/**
 * Pads out the decimal places given only a price.
 *
 * It will not truncate or round, but will add zeroes as follows:
 *  - Prices under $2 will be padded to 4 decimal places, or to match the number of decimal places in `determinant`; whichever is larger.
 *  - Prices over $1,000 will not be padded, or set to match the number of decimal places in `determinant`, if any.
 *  - All other prices will be padded to 2 decimal places, or to match the number of decimal places in `determinant`; whichever is larger.
 * @param  {number} price A price
 * @param  {number} [determinant] Sample value to determine the decimal places. For
 * instance, if you want to determine the number of decimals for today's change based on the actual price.
 * @return {string}       A price padded for decimal places
 * @memberOf  CIQ.ChartEngine
 * @since 2016-07-16
 */
CIQ.ChartEngine.prototype.padOutPrice = function (price, determinant) {
	if (price !== 0 && (!price || typeof price != "number")) return "";
	if (!determinant && determinant !== 0) determinant = price;
	var str = "" + determinant;

	var decimalPlaces = 0;
	if (str.indexOf(".") > -1)
		decimalPlaces = str.substring(str.indexOf(".")).length - 1;

	if (determinant >= 1000) decimalPlaces = Math.max(decimalPlaces, 0);
	else if (determinant < 2) decimalPlaces = Math.max(decimalPlaces, 4);
	else decimalPlaces = Math.max(decimalPlaces, 2);

	var internationalizer = this.internationalizer;
	if (internationalizer) {
		var l = internationalizer.priceFormatters.length;
		if (decimalPlaces >= l) decimalPlaces = l - 1;
		price = internationalizer.priceFormatters[decimalPlaces].format(price);
	} else {
		price = price.toFixed(decimalPlaces);
	}
	return price;
};

/**
 * Formats a price according to the decimalPlaces specified in either the panel or chart.
 * It will then format to international standards if the internationalizer is set.
 * This method *does not* condense prices.
 * @param  {number} price The price to be formatted
 * @param  {CIQ.ChartEngine.Panel} panel The panel to use to determine the number of decimal places.
 * @return {string}		  The formatted price
 * @memberof CIQ.ChartEngine
 * @since 6.2.0 Return value will always be a string.
 */
CIQ.ChartEngine.prototype.formatPrice = function (price, panel) {
	if (price !== 0 && (!price || typeof price == "undefined")) return "";
	if (!panel) panel = this.currentPanel;
	if (!panel) panel = this.chart.panel;
	if (!panel) return price.toString();
	var decimalPlaces = panel.decimalPlaces;
	if (!decimalPlaces && decimalPlaces !== 0) {
		decimalPlaces = panel.chart.decimalPlaces;
	}
	if (!decimalPlaces && decimalPlaces !== 0) {
		return price.toString();
	}
	var internationalizer = this.internationalizer;
	if (internationalizer) {
		var l = internationalizer.priceFormatters.length;
		if (decimalPlaces >= l) decimalPlaces = l - 1;
		price = internationalizer.priceFormatters[decimalPlaces].format(price);
	} else {
		price = price.toFixed(decimalPlaces);
	}
	return price;
};

/**
 * Determines the high and low values for the data set.
 *
 * Requires an array of fields to check.
 * For instance, the array might contain `["Close","Series1","Series2"]` which would return
 * the max and min of all of those values for each quote.
 *
 * If you wish to exclude certain fields from your calculations to prevent excessive flattening
 * of the charts, you can overwrite this method as follows:
 * ```
 * stxx.origDetermineMinMax = stxx.determineMinMax;
 * stxx.determineMinMax = function(quotes, fields, sum, bypassTransform, length, checkArray) {
 * 	// Add code here to remove anything you want from the 'fields' array.
 *	console.log('current fields', fields);
 *	return stxx.origDetermineMinMax(quotes, fields, sum, bypassTransform, length, checkArray);
 * }
 * ```
 * Also see {@link CIQ.ChartEngine.Chart#includeOverlaysInMinMax}
 *
 * @param {array} quotes The array of quotes (typically `CIQ.ChartEngine.chart.dataSegment`)
 * 		to evaluate for minimum and maximum values.
 * @param {array} fields A list of fields to compare.
 * @param {boolean|string[]} [sum] If true, then compute maximum sum rather than the maximum
 * 		single value across all fields. If an array, compute sum over just the fields in the
 * 		array.
 * @param {boolean} [bypassTransform] If true, then bypass any transformations.
 * @param {number} [length] Specifies how much of the quotes array to process.
 * @param {boolean} [checkArray] If true, the type of the value used to determine the min/max
 * 		is checked to ascertain whether it is an array; if so, the first element of the array
 * 		is retrieved for use in the min/max determination.
 * @param {CIQ.ChartEngine.Panel} [panel] A reference to the panel rendering the quotes.
 * @param {CIQ.ChartEngine.YAxis} [axis] A reference to the y-axis rendered for the quotes.
 * @param {array} [filters] Array of functions to process the min/max values before returning.
 * 		Filter functions must return a valid min/max tuple or false.
 * @return {array} A tuple, min and max values.
 *
 * @memberof CIQ.ChartEngine
 * @since
 * - 2014-02
 * - 7.3.0 Added `checkArray` parameter.
 * - 8.0.0 Allow the `sum` parameter to be an array of valid fields to sum over. Added
 * 		the `panel`, `axis`, and `filters` parameters.
 */
CIQ.ChartEngine.prototype.determineMinMax = function (
	quotes,
	fields,
	sum,
	bypassTransform,
	length,
	checkArray,
	panel,
	axis,
	filters
) {
	var highValue = Number.MAX_VALUE * -1;
	var lowValue = Number.MAX_VALUE;
	var isTransform = false;
	var l = quotes.length;
	if (!filters) filters = [];
	var highLowData = [];
	if (length) l = length;

	for (var i = 0; i <= l + 1; i++) {
		var quote;
		// Here only the first field in the fields array is checked.  A different approach might be to check all the fields.
		if (fields.length) {
			if (i == l) {
				quote = this.getPreviousBar(this.chart, fields[0], 0);
			} else if (i == l + 1) {
				quote = this.getNextBar(this.chart, fields[0], l - 1);
			} else quote = quotes[i];
		}
		if (!quote) continue;
		if (!bypassTransform) {
			if (quote.transform) {
				isTransform = true;
				quote = quote.transform;
			} else if (isTransform) continue; //don't include points without transforms if we have been including points with transforms
		}
		var acc = 0;
		for (var j = 0; j < fields.length; j++) {
			var tuple = CIQ.existsInObjectChain(quote, fields[j]);
			if (!tuple) continue;
			var f = tuple.obj[tuple.member];
			if (typeof f == "number") f = [f];
			for (var v = 0; v < f.length; v++) {
				var val = f[v];
				if (checkArray && val instanceof Array) val = val[0];
				if (val || val === 0) {
					if (
						sum === true ||
						(sum instanceof Array && sum.indexOf(fields[j]) > -1)
					) {
						acc += val;
						if (acc > highValue) highValue = acc;
						if (acc < lowValue) lowValue = acc;
					} else {
						if (val > highValue) highValue = val;
						if (val < lowValue) lowValue = val;
						highLowData.push({ value: val, quote: quote });
					}
				}
			}
		}
		if (sum === true || (sum instanceof Array && sum.indexOf(fields[j]) > -1))
			highLowData.push({ value: acc, quote: quote });
	}

	var highLow = [lowValue, highValue];

	filters.forEach(function (f) {
		highLow = f(highLowData, panel, axis) || highLow;
	});

	if (highLow[1] == Number.MAX_VALUE * -1) highLow[1] = 0;
	if (highLow[0] == Number.MAX_VALUE) highLow[0] = 0;
	return highLow;
};

/**
 * <span class="injection">INJECTABLE</span>
 * <span class="animation">Animation Loop</span>
 *
 * This method initializes display variables for the chart.
 *
 * It is part of the animation loop and called with every [draw]{@link CIQ.ChartEngine#draw} operation.<br>
 * The high and low values for the visible section of the primary chart are calculated and corresponding values stored as follows:
 * - `chart.highValue` - The highest value on the chart
 * - `chart.lowValue` - The lowest value on the chart
 *
 * See {@link CIQ.ChartEngine.Chart#includeOverlaysInMinMax} and  {@link CIQ.ChartEngine#determineMinMax}
 *
 * Those values are subsequently used by {@link CIQ.ChartEngine.AdvancedInjectable#createYAxis} which is called from within this method.<br>
 * This method also calls {@link CIQ.ChartEngine.AdvancedInjectable#createCrosshairs}.
 *
 * @param  {CIQ.ChartEngine.Chart} chart The chart to initialize
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias initializeDisplay
 * @since 5.2.0. It now also calculates the minimum and maximum points in all study panels. This calculation was previously done using {@link CIQ.Studies.determineMinMax}, now deprecated.
 */
CIQ.ChartEngine.prototype.initializeDisplay = function (chart) {
	if (this.runPrepend("initializeDisplay", arguments)) return;
	let fields = [],
		useSum = [],
		checkArray = false;
	const self = this;
	const baseOHLCFields = ["Close", "Open", "High", "Low"];
	const baseLineFields = [chart.defaultPlotField || "Close"];
	const { mainSeriesRenderer } = this;
	const { dataSegment, seriesRenderers } = chart;
	function setYAxisFields(yAxis, panel) {
		// first see if this is an axis for a study; if so, get the fields
		let isStudyAxis = false;
		const sd =
			self.layout && self.layout.studies && self.layout.studies[yAxis.name];
		if (sd && (!panel || panel.name == sd.panel)) {
			for (const j in sd.outputMap) {
				fields.push(j);
				if (sd.study) {
					if (sd.study.renderer) {
						// if there is a study renderer, just assume it requires OHLC regardless of the renderer type
						fields = fields.concat(
							CIQ.createObjectChainNames(j, baseOHLCFields)
						);
					} else if (!sd.study.seriesFN) {
						// no seriesFN, assume it's a line and needs only Close
						fields = fields.concat(
							CIQ.createObjectChainNames(j, baseLineFields)
						);
					}
				}
			}
			for (let h = 0; h <= 2; h++)
				fields.push(sd.name + "_hist" + (h ? h : ""));
			isStudyAxis = true;
		}
		if (!panel) return; //to end recursion from includeOverlaysInMinMax below

		yAxis.studies = [];
		yAxis.renderers = [];
		if (isStudyAxis) {
			yAxis.studies.push(yAxis.name);
		}
		// then check renderers and add fields for each series in the renderer using this yaxis
		for (const id in seriesRenderers) {
			const renderer = seriesRenderers[id],
				params = renderer.params,
				panelName = params.panel;
			if (
				(params.yAxis ||
					!self.panels[panelName] ||
					self.panels[panelName].yAxis) != yAxis
			)
				continue;
			if (panelName != panel.name) continue;
			const baseFields = renderer.highLowBars ? baseOHLCFields : baseLineFields;
			checkArray = renderer.bounded;
			for (let id2 = 0; id2 < renderer.seriesParams.length; id2++) {
				// Find any series that share the y-axis
				const seriesParams = renderer.seriesParams[id2];
				if (seriesParams.hidden) continue;
				let fieldNamesToConcat;
				if (seriesParams.subField) {
					fieldNamesToConcat = CIQ.createObjectChainNames(seriesParams.symbol, [
						seriesParams.subField
					]).concat(seriesParams.symbol);
				} else if (seriesParams.symbol) {
					fieldNamesToConcat = CIQ.createObjectChainNames(
						seriesParams.symbol,
						baseFields
					).concat(seriesParams.symbol);
				} else if (seriesParams.field) {
					fieldNamesToConcat = seriesParams.field;
				} else if (yAxis == chart.panel.yAxis) {
					// only if the main chart panel's yAxis include baseFields
					fieldNamesToConcat = baseFields;
				}
				if (fieldNamesToConcat) fields = fields.concat(fieldNamesToConcat);
				if (renderer.useSum) useSum = useSum.concat(fieldNamesToConcat);
			}
			yAxis.renderers.push(id);
		}
		// Finally add any fields used by overlay studies
		for (const overlay in self.overlays) {
			const o = self.overlays[overlay];
			if (o.panel != panel.name) continue;
			if (o.name == yAxis.name) continue; // don't loop thru the same axis twice and create duplicates
			const oAxis = o.getYAxis(self);
			if (oAxis != yAxis) continue;
			yAxis.studies.push(o.name);
			if (chart.includeOverlaysInMinMax) {
				setYAxisFields({ name: o.name });
			}
		}
	}
	let minMax;
	let length = null;

	// We often have an extra tick hanging off the edge of the screen. We don't want this
	// tick to affect the high and low calculation though. That causes jumpiness when
	// zooming because the chart is alternately including and excluding that tick
	let ticksOnScreen = Math.floor(
		(chart.width - this.micropixels) / this.layout.candleWidth
	);
	if (chart.scroll > chart.maxTicks && chart.maxTicks > ticksOnScreen + 1)
		length = dataSegment.length - 1;

	let arr = [];
	for (const p in this.panels) {
		const myPanel = this.panels[p];
		arr = myPanel.yaxisLHS.concat(myPanel.yaxisRHS);
		for (let y = 0; y < arr.length; y++) {
			const yAxis = arr[y];
			fields = [];
			useSum = [];
			const doTransform = chart.transformFunc && yAxis == chart.panel.yAxis;
			setYAxisFields(yAxis, myPanel);
			// maintenance of axes here
			if (
				!this.currentlyImporting &&
				!yAxis.renderers.length &&
				!yAxis.studies.length
			) {
				this.deleteYAxisIfUnused(myPanel, yAxis);
				continue;
			}
			if (mainSeriesRenderer && mainSeriesRenderer.determineMax) {
				minMax = mainSeriesRenderer.determineMax(
					dataSegment,
					fields,
					useSum,
					!doTransform,
					length,
					checkArray,
					myPanel,
					yAxis
				);
			} else {
				minMax = this.determineMinMax(
					dataSegment,
					fields,
					useSum,
					!doTransform,
					length,
					checkArray,
					myPanel,
					yAxis
				);
			}

			if (this.baselineHelper) minMax = this.setBaselineMinMax(minMax, yAxis);

			yAxis.lowValue = minMax[0];
			yAxis.highValue = minMax[1];
			if (yAxis == chart.panel.yAxis) {
				chart.lowValue = yAxis.lowValue;
				chart.highValue = yAxis.highValue;
			}
		}
	}
	const aggregation = chart.state.aggregation;
	if (aggregation && aggregation.box) {
		// Make room for X and O rendering since half of it lies beyond the high/low
		chart.lowValue -= aggregation.box / 2;
		chart.highValue += aggregation.box / 2;
	}

	this.runAppend("initializeDisplay", arguments);
};

/**
 * Sets the market definition on the chart.
 *
 * Once set, the definition will not change until it is explicitly set to something else by calling this method again.
 *
 * A new definition for a chart should only be set once, right before a new instrument is loaded with the {@link CIQ.ChartEngine#loadChart} call.
 * Loading or modifying a market definition after a chart has loaded its data will result in unpredictable results.
 *
 * If a dynamic model is desired, where a new definition is loaded as different instruments are activated, see {@link CIQ.ChartEngine#setMarketFactory}.
 *
 * See {@link CIQ.Market} for market definition rules and examples.
 *
 * This is only required if your chart will need to know the operating hours for the different exchanges.
 *
 * If using a 24x7 chart, a market does not need to be set.
 * @param {object} marketDefinition A market definition as required by {@link CIQ.Market}
 * @param {CIQ.ChartEngine.Chart} chart An instance of {@link CIQ.ChartEngine.Chart}
 * @memberof CIQ.ChartEngine
 * @since 04-2016-08
 * @example
 * stxx.setMarket({
 *   name: 'My_Market',
 *   market_tz: 'My_Timezone', // Note you must specify the time zone for the market!
 *   rules: [
 *     { 'dayofweek': 1, 'open': '08:00', 'close': '14:30' },
 *     { 'dayofweek': 2, 'open': '08:00', 'close': '14:30' },
 *     { 'dayofweek': 3, 'open': '08:00', 'close': '14:30' },
 *     { 'dayofweek': 4, 'open': '08:00', 'close': '14:30' },
 *     { 'dayofweek': 5, 'open': '08:00', 'close': '14:30' },
 *   ],
 * });
 */
CIQ.ChartEngine.prototype.setMarket = function (marketDefinition, chart) {
	if (!CIQ.Market) return;
	if (!chart) chart = this.chart;
	chart.market = new CIQ.Market(marketDefinition);
	for (var session in this.layout.marketSessions) {
		chart.market.disableSession(session, this.layout.marketSessions[session]);
	}
};

/**
 * Links the chart to a method that given a symbol object of form accepted by {@link CIQ.ChartEngine#loadChart}, can return a complete market definition object.
 * Once linked, the market factory it will be used by the chart to ensure the market always matches the active instrument.
 * This is only required if your chart will need to know the operating hours for the different exchanges.
 * If using a 24x7 chart, a market factory does not need to be set.
 *
 * Please note that if using the default sample templates, this method is set to use the {@link CIQ.Market.Symbology} functions, which must be reviewed and adjust to comply with your quote feed and symbology format before they can be used.
 * @param {function} factory A function that takes a symbolObject and returns a market definition. See {@link CIQ.Market} for instruction on how to create a market definition. See {@link CIQ.Market.Symbology.factory} for working example of a factory function.
 * @memberof CIQ.ChartEngine
 * @since 04-2016-08
 * @example
 * // example of a market factory that returns a different market definition based on the symbol passed in
 * sampleFactory=function(symbolObject){
 *		var symbol=symbolObject.symbol;
 *		// isTypeX(symbol) is a function you would create to identify the market definition object that should be used.
 *		if( isType1(symbol) ) return type1DefinitionObject;
 *		if( isType2(symbol) ) return type2DefinitionObject;
 *		if( isType3(symbol) ) return type3DefinitionObject;
 *		return defaultDefinitionObject;
 * };
 *
 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), preferences:{labels:false, currentPriceLine:true, whitespace:0}});
 * stxx.setMarketFactory(sampleFactory);
 */
CIQ.ChartEngine.prototype.setMarketFactory = function (factory) {
	this.marketFactory = factory;
};

/**
 * Sets either an interval or a ResizeObserver to check for chart resizing. See {@link CIQ.resizeDetectInterval}
 * for details on which one will be chosen. If the `ms` param is specified here, that value will be used as the
 * `interval` param for {@link CIQ.resizeDetectInterval}.
 *
 * Normally, the chart is resized whenever the screen is resized by capturing a screen resize event.
 * However, if charts are embedded in a windowing GUI, they may not receive window resize events.
 * Ideally, `stxx.resizeChart()` should be called whenever a window is resized; however, if this is inconvenient,
 * then this method can be enabled to cover all bases.
 *
 * This method is run on chart initialization. To turn off resize, set {@link CIQ.resizeDetectInterval} to 0 before
 * initialization.
 *
 * @param {number} [ms] If positive, will set a number of milliseconds for the resize interval. If zero, will turn
 * 		off the interval or the ResizeObserver (whichever had previously been added).
 * @memberof CIQ.ChartEngine
 * @since
 * - 7.2.0 For browsers that support it, a [ResizeObserver](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver) is used instead of a timeout.
 * - 8.6.0 No longer sets the engine property `resizeDetectMS`, as the property has been deprecated. See
 * 		{@link CIQ.resizeDetectInterval} to use an interval instead of a ResizeObserver.
 */

CIQ.ChartEngine.prototype.setResizeTimer = function (ms) {
	const listener = () => {
		const { canvas, container } = this.chart;
		if (!canvas || CIQ.isAndroid) return;
		if (
			canvas.height !==
				Math.floor(this.devicePixelRatio * container.clientHeight) ||
			canvas.width !== Math.floor(this.devicePixelRatio * container.clientWidth)
		) {
			this.resizeChart();
		}
	};

	this.resizeHandle = CIQ.resizeObserver(
		this.chart.container,
		listener,
		this.resizeHandle,
		ms
	);
};

/**
 * Returns an array of all the securities, series, and overlays that are drawn on the current panel.
 *
 * @memberof CIQ.ChartEngine
 * @returns {object[]} The fields &mdash; in object-chain form &mdash; of the currently rendered objects.
 * @since 7.2.0
 */
CIQ.ChartEngine.prototype.getRenderedItems = function () {
	var chart = this.chart,
		currentPanel = this.currentPanel;
	if (!currentPanel) return;

	var ohlc = ["Open", "High", "Low", "Close"];
	var close = ["Close"];
	var rendered = [];
	for (var o in this.overlays) {
		if (this.overlays[o].panel !== currentPanel.name) continue;
		// use the keys so if we ever change how the output map is constructed we don't need to change it twice
		rendered = rendered.concat(Object.keys(this.overlays[o].outputMap));
	}
	for (var r in chart.seriesRenderers) {
		var renderer = chart.seriesRenderers[r];
		if (renderer.params.panel != currentPanel.name) continue;
		for (var rs in renderer.seriesParams) {
			var sp = renderer.seriesParams[rs];
			var baseFields = renderer.highLowBars ? ohlc : close;
			if (sp.subField) {
				rendered = rendered
					.concat(CIQ.createObjectChainNames(sp.symbol, [sp.subField]))
					.concat(sp.symbol);
			} else if (sp.symbol) {
				rendered = rendered
					.concat(CIQ.createObjectChainNames(sp.symbol, baseFields))
					.concat(sp.symbol);
			} else if (sp.field) {
				rendered.push(sp.field);
			} else if (currentPanel == chart.panel) {
				// only if on main chart panel include baseFields
				rendered = rendered.concat(baseFields);
			}
		}
	}
	return rendered;
};

/**
 * Sets a transformation and untransformation function. Transforms can be used to transform the Y-Axis from absolute
 * to relative values. For instance, comparison charts use a transform that adjusts from price to percentage.
 * After this is called, chart.transformFunc and chart.untransformFunc will be set to those functions.
 * @param {CIQ.ChartEngine.Chart} chart			   The chart to transform
 * @param {function} transformFunction	 A transformation callback function which takes a number and returns the transformation of that number
 * @param {function} untransformFunction An untransformation callback function
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.setTransform = function (
	chart,
	transformFunction,
	untransformFunction
) {
	chart.transformFunc = transformFunction;
	chart.untransformFunc = untransformFunction;
};

/**
 * Removes a transformation/untransformation pair
 * @param  {CIQ.ChartEngine.Chart} chart The chart to remove transformations from
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.unsetTransform = function (chart) {
	delete chart.transformFunc;
	delete chart.untransformFunc;
	for (var i = 0; chart.dataSet && i < chart.dataSet.length; i++) {
		chart.dataSet[i].transform = null;
	}
};

CIQ.ChartEngine.prototype.isEquationChart = function (symbol) {
	if (symbol && symbol[0] == "=") {
		if (!this.allowEquations || !CIQ.fetchEquationChart) {
			console.warn(
				"Error, equation chart option requires equationsAdvanced.js"
			);
			return false;
		}
		return true;
	}
	return false;
};

/**
 * <span class="injection">INJECTABLE</span>
 * <span class="animation">Animation Loop</span>
 *
 * This method ensures that the chart is not scrolled off of either of the vertical edges.
 * See {@link CIQ.ChartEngine#minimumLeftBars}, {@link CIQ.ChartEngine.Chart#allowScrollPast}, and {@link CIQ.ChartEngine.Chart#allowScrollFuture} for adjustments to defaults.
 * @param  {CIQ.ChartEngine.Chart} theChart The chart to check
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias correctIfOffEdge
 */
CIQ.ChartEngine.prototype.correctIfOffEdge = function (theChart) {
	if (this.runPrepend("correctIfOffEdge", arguments)) return;
	for (var chartName in this.charts) {
		var chart = this.charts[chartName],
			dataSet = chart.dataSet,
			maxTicks = chart.maxTicks,
			layout = this.layout;

		var minimumLeftBars = this.minimumLeftBars;

		var leftPad = Math.min(minimumLeftBars, maxTicks); // in case the minimumLeftBars is larger than what we can display
		if (chart.allowScrollPast) {
			// allow scrolling from left to right, creating white space on either side
			var rightPad = maxTicks - leftPad;
			if (leftPad > dataSet.length) {
				rightPad = maxTicks - dataSet.length;
			}
			if (chart.scroll - rightPad >= dataSet.length) {
				chart.scroll = dataSet.length + rightPad - 1;
				this.micropixels = 0;
			}
			if (chart.scroll <= leftPad) {
				chart.scroll = leftPad;
				this.micropixels = 0;
			}
		} else {
			// earliest point in time is always anchored on left side of chart
			if (chart.scroll < leftPad) {
				chart.scroll = leftPad;
			}
			if (chart.scroll > dataSet.length) {
				chart.scroll = dataSet.length;
			}
		}
		if (chart.allowScrollFuture === false) {
			var whitespace =
				this.getLabelOffsetInPixels(chart, layout.chartType) +
				layout.candleWidth * chart.whiteSpaceFutureTicks;
			var barsOnScreen =
				maxTicks - Math.round(whitespace / layout.candleWidth) - 1;
			var scroll = this.micropixels < 0 ? chart.scroll - 1 : chart.scroll;
			if (scroll < barsOnScreen) {
				chart.scroll = barsOnScreen;
				this.micropixels = 0;
			}
		}
	}
	this.runAppend("correctIfOffEdge", arguments);
};

/**
 * Returns the offset from the left side of the screen for the first element
 * on the chart screen. Most times this will be zero except when a user has scrolled
 * past the end of the chart in which case it will be a positive number. This can be used
 * to recreate a saved chart.
 * @return {number} The offset from the left of the chart.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.getStartDateOffset = function () {
	for (var ds = 0; ds < this.chart.dataSegment.length; ds++) {
		if (this.chart.dataSegment[ds]) {
			return ds;
		}
	}
	return 0;
};

/**
 * Scrolls the chart so that the leftmost tick is the requested date.
 * The date must be an exact match and data for that bar must already be loaded in the chart.
 * There is no effect if the date is not found an the engine will not attempt to fetch more data.
 * @param {date} dt The requested date
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.setStartDate = function (dt) {
	for (var i = 0; i < this.chart.dataSet.length; i++) {
		var bar = this.chart.dataSet[i];
		if (bar.DT.getTime() == dt.getTime()) {
			this.chart.scroll = this.chart.dataSet.length - i;
			this.draw();
			return;
		}
	}
};

//@private
CIQ.ChartEngine.prototype.clearPixelCache = function () {
	for (var x in this.panels) {
		var panel = this.panels[x];
		panel.cacheHigh = null;
		panel.cacheLow = null;
		panel.cacheLeft = 1000000;
		panel.cacheRight = -1;
	}
	this.chart.pixelCacheExpired = true;
};

/**
 * This method adjusts the canvas for the current backing store. The backing store is used on "retina" style devices
 * to indicate the ratio of actual screen pixels to web pixels. The canvas is adjusted according to this ratio so that
 * pixels appear at the expected size and aren't fuzzy. Note that backing store is sometimes also employed by browsers
 * to change the size of the view.
 * @private
 * @param  {HTMLCanvasElement} canvas	An HTML5 canvas
 * @param  {external:CanvasRenderingContext2D} context An HTML5 canvas context
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.adjustBackingStore = function (canvas, context) {
	this.devicePixelRatio = window.devicePixelRatio || 1;
	//note, let's ignore DPR<1, it is not consistently implemented on all browsers between retina and nonretina displays
	if (this.devicePixelRatio < 1.0) this.devicePixelRatio = 1.0;
	var backingStoreRatio =
		context.webkitBackingStorePixelRatio ||
		context.mozBackingStorePixelRatio ||
		context.msBackingStorePixelRatio ||
		context.oBackingStorePixelRatio ||
		context.backingStorePixelRatio ||
		1;

	var ratio = this.devicePixelRatio / backingStoreRatio;

	if (!this.useBackingStore) {
		this.devicePixelRatio = this.adjustedDisplayPixelRatio = 1;
		canvas.style.width = canvas.style.height = "";
		return;
	}
	if (!CIQ.isAndroid || CIQ.is_chrome || CIQ.isFF) {
		var oldWidth = canvas.width;
		var oldHeight = canvas.height;

		canvas.width = oldWidth * ratio;
		canvas.height = oldHeight * ratio;

		canvas.style.width = oldWidth + "px";
		canvas.style.height = oldHeight + "px";

		context.scale(ratio, ratio);
		this.adjustedDisplayPixelRatio = ratio;
		this.backing = {
			ratio: ratio,
			width: canvas.width,
			height: canvas.height,
			styleWidth: oldWidth,
			styleHeight: oldHeight
		};
	}
};

CIQ.ChartEngine.prototype.reconstituteBackingStore = function () {
	if (!this.useBackingStore || !this.backing) return;
	var canvases = [this.chart.canvas];
	if (this.useBackgroundCanvas) canvases.push(this.chart.backgroundCanvas);
	var backing = this.backing;
	canvases.forEach(function (canvas) {
		if (canvas.width == backing.width) return;

		canvas.width = backing.width;
		canvas.height = backing.height;

		canvas.context.scale(backing.ratio, backing.ratio);
	});
	this.adjustedDisplayPixelRatio = backing.ratio;
	this.draw();
};

CIQ.ChartEngine.prototype.disableBackingStore = function () {
	if (!this.useBackingStore || !this.backing) return;
	var canvases = [this.chart.canvas];
	if (this.useBackgroundCanvas) canvases.push(this.chart.backgroundCanvas);
	var backing = this.backing;
	canvases.forEach(function (canvas) {
		if (canvas.width == backing.styleWidth) return;

		canvas.width = backing.styleWidth;
		canvas.height = backing.styleHeight;

		canvas.context.scale(1, 1);
	});
	this.adjustedDisplayPixelRatio = 1;
	this.draw();
};

/**
 * Determines the appropriate canvas on which to draw background plots (gridlines and axes). If
 * {@link CIQ.ChartEngine#useBackgroundCanvas} is true, background plots are drawn on the chart
 * background canvas; if false, on the chart main canvas.
 *
 * @param {CIQ.ChartEngine.Chart} chart The chart from which the canvas is obtained.
 * @return {HTMLElement} Either the chart's main canvas or background canvas, depending
 * 		on the value of {@link CIQ.ChartEngine#useBackgroundCanvas}.
 * @memberof CIQ.ChartEngine
 * @since 7.4.0
 */
CIQ.ChartEngine.prototype.getBackgroundCanvas = function (chart) {
	if (!chart) chart = this.chart;
	return this.useBackgroundCanvas ? chart.backgroundCanvas : chart.canvas;
};

/**
 * This method resizes the canvas to the dimensions of the containing div. This is called primarily
 * by {@link CIQ.ChartEngine#resizeChart} and also when the chart is initialized (via loadChart).
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.resizeCanvas = function () {
	var canvas = this.chart.canvas;
	var context = this.chart.context;
	if (canvas && context) {
		this.floatCanvas.height =
			this.chart.tempCanvas.height =
			this.chart.backgroundCanvas.height =
			canvas.height =
				this.chart.container.clientHeight;
		this.floatCanvas.width =
			this.chart.tempCanvas.width =
			this.chart.backgroundCanvas.width =
			canvas.width =
				this.chart.container.clientWidth;
		this.adjustBackingStore(canvas, context);
		this.adjustBackingStore(
			this.chart.tempCanvas,
			this.chart.tempCanvas.context
		);
		this.adjustBackingStore(this.floatCanvas, this.floatCanvas.context);
		this.adjustBackingStore(
			this.chart.backgroundCanvas,
			this.chart.backgroundCanvas.context
		);
	}
	var rect = this.container.getBoundingClientRect();
	this.top = rect.top;
	this.left = rect.left;
	this.canvasWidth = this.chart.canvasWidth = this.chart.container.clientWidth;
	this.right = this.left + this.canvasWidth;
	this.height = this.chart.container.clientHeight;
	this.width = this.right - this.left;
	if (
		this.width === 0 &&
		!this.container.dimensionlessCanvas &&
		this.container.closest("html") &&
		!this.container.closest("cq-context-wrapper")
	) {
		console.log("warning: zero width chart. Check CSS for chart container.");
	}
	this.bottom = this.top + this.height;
	this.calculateYAxisPositions();
	this.chart.canvasRight = this.right;
	this.chart.canvasHeight = this.height;
	var candleWidth = this.layout.candleWidth;
	if (typeof candleWidth == "undefined") candleWidth = 8;
	for (var chartName in this.charts) {
		var chart = this.charts[chartName];

		this.setCandleWidth(candleWidth, chart);
		if (chart.scroll < chart.width / candleWidth) {
			chart.scroll = Math.floor(chart.width / candleWidth);
			var wsInTicks = Math.round(
				this.preferences.whitespace / this.layout.candleWidth
			);
			chart.scroll -= wsInTicks;
		}

		var idealNumberOfTicks = 10;
		var appxLabelWidth;
		try {
			appxLabelWidth = context.measureText("10:00").width * 2;
		} catch (e) {
			appxLabelWidth = 100;
		}
		while (idealNumberOfTicks > 1) {
			if (this.chart.width / appxLabelWidth > idealNumberOfTicks) break;
			idealNumberOfTicks /= 1.5;
		}
		chart.xAxis.autoComputedTickSizePixels = Math.round(
			this.chart.width / idealNumberOfTicks
		);
		if (chart.xAxis.autoComputedTickSizePixels < 1)
			chart.xAxis.autoComputedTickSizePixels = 1;
	}
};

/**
 * Sets the candleWidth for the chart. The candleWidth represents the number of horizontal pixels from the start
 * of one bar or candle to the start of the next. This also applies to line charts. It is effectively, the horizontal zoom.
 * The candleWidth can be read from layout.candleWidth.
 *
 * Method also ensures that the new candleWidth is not less than {@link CIQ.ChartEngine.Chart#minimumCandleWidth} and not more than
 * {@link CIQ.ChartEngine.Chart#maximumCandleWidth}. If either of these is the case, candleWidth will be set to whichever value is closer.
 *
 * **Note**: if calling `setCandleWidth()` before `loadChart()`, with a value less than `minimumCandleWidth`, `loadChart()` will reset the candle size to the default candle size (8 pixels).
 *
 * @param {number} newCandleWidth The new candle width. If less than or equal to 0, it will be reset to 8
 * @param {CIQ.ChartEngine.Chart} [chart]	Which chart to set the candleWidth. Defaults to the default chart.
 * @memberof CIQ.ChartEngine
 * @example
 * stxx.setCandleWidth(10);
 * stxx.home();	// home() is preferred over draw() in this case to ensure the chart is properly aligned to the right most edge.

 */
CIQ.ChartEngine.prototype.setCandleWidth = function (newCandleWidth, chart) {
	if (!chart) chart = this.chart;
	newCandleWidth = this.constrainCandleWidth(newCandleWidth);
	this.layout.candleWidth = newCandleWidth;
	chart.maxTicks = Math.round(chart.width / newCandleWidth) + 1; // add one more to make the right most candle glide smoothly off the screen
};

/**
 * Ensures that a candle width value is within the limits of {@link CIQ.ChartEngine#minimumCandleWidth}
 * and {@link CIQ.ChartEngine#maximumCandleWidth}.
 *
 * @param {number} candleWidth The candle width to be checked.
 * @return {number} The value of `candleWidth` if `candleWidth` is between `minimumCandleWidth` and `maximumCandleWith`.
 * 		Otherwise, `minimumCandleWidth` if `candleWidth` is less than `minimumCandleWidth`. Otherwise, `maximumCandleWith`
 * 		if `candleWidth` is greater than `maximumCandleWith`.
 * @memberof CIQ.ChartEngine
 * @since 7.4.0
 */
CIQ.ChartEngine.prototype.constrainCandleWidth = function (candleWidth) {
	var minimumCandleWidth = this.minimumCandleWidth;
	var maximumCandleWidth = this.maximumCandleWidth;
	var animating = this.animations.zoom;
	if (minimumCandleWidth && candleWidth < minimumCandleWidth) {
		candleWidth = minimumCandleWidth;
		if (animating && animating.running) animating.stop();
	}
	if (maximumCandleWidth && candleWidth > maximumCandleWidth) {
		candleWidth = maximumCandleWidth;
		if (animating && animating.running) animating.stop();
	}
	return candleWidth;
};

/**
 * <span class="injection">INJECTABLE</span>
 *
 * Resizes the chart and adjusts the panels. The chart is resized to the size of the container div by calling
 * {@link CIQ.ChartEngine#resizeCanvas}. This method is called automatically if a screen resize event occurs. The charting
 * engine also attempts to detect size changes whenever the mouse is moved. Ideally, if you know the chart is being
 * resized, perhaps because of a dynamic change to the layout of your screen, you should call this method manually.
 * @param {boolean} [maintainScroll=true] By default the scroll position will remain pegged on the right side of the chart. Set this to false to override.
 * @memberof CIQ.ChartEngine
 * @since
 * - 2015-11-1 `resizeChart` now automatically retains scroll position.
 * - 09-2016-19 `resizeChart` now also manages the resizing of the crosshairs.
 */
CIQ.ChartEngine.prototype.resizeChart = function (maintainScroll) {
	if (this.runPrepend("resizeChart", arguments)) return;
	if (maintainScroll !== false) maintainScroll = true;
	if (maintainScroll) this.preAdjustScroll();
	var previousHeight = this.chart.canvasHeight;
	this.resizeCanvas();
	if (maintainScroll) this.postAdjustScroll();
	if (this.displayInitialized) {
		this.adjustPanelPositions();
		this.draw();
		// This second case occurs if a chart was initialized hidden but now
		// has suddenly been revealed. displayInitialized hadn't been set yet
		// because draw() has never been completed
	} else if (this.chart.canvasHeight !== 0 && previousHeight === 0) {
		this.adjustPanelPositions();
		this.draw();
	}

	//redraw the crosshairs to adjust to the new size of the screen.
	this.doDisplayCrosshairs();
	this.updateChartAccessories();

	this.runAppend("resizeChart", arguments);
};

/**
 * Removes any studies from the chart, and hides the chart controls.
 * The chart becomes uninitialized, disabling any interaction with it.
 * The canvas is not cleared; {@link CIQ.clearCanvas} can do that.
 *
 * Useful when a chart is loaded with no data due to a quoteFeed error. Automatically called by {@link CIQ.ChartEngine#loadChart}
 *
 * @memberof CIQ.ChartEngine
 * @since 2016-12-01
 */
CIQ.ChartEngine.prototype.clear = function () {
	this.displayInitialized = false;

	for (var id in this.layout.studies) {
		var sd = this.layout.studies[id];
		CIQ.getFn("Studies.removeStudy")(this, sd);
	}

	if (this.controls.chartControls)
		this.controls.chartControls.style.display = "none";

	this.chart.panel.title.innerHTML = "";
	this.chart.panel.title.appendChild(
		document.createTextNode(this.chart.panel.display)
	);
};

/**
 * Adjusts the candleWidth to eliminate left-side gaps on the chart if not enough bars are loaded.
 *
 * Used by the `stretchToFillScreen` parameter of {@link CIQ.ChartEngine#loadChart}
 * @memberof CIQ.ChartEngine
 * @since 4.0.0 This function is now public.
 */
CIQ.ChartEngine.prototype.fillScreen = function () {
	var chart = this.chart;
	var candleWidth = this.layout.candleWidth;
	var chartWidth = chart.width - this.preferences.whitespace;
	var count = chart.dataSet.length;

	if (count * candleWidth >= chartWidth) {
		this.draw();
		return;
	}

	// line-type charts go center-to-center in the data point space, so we end up which 1/2 a candle empty on the left and the right..
	//so if we remove a candle from the calculations, we go edge to edge.
	if (!this.mainSeriesRenderer || !this.mainSeriesRenderer.standaloneBars)
		count--;

	var newCandleWidth = chartWidth / count;
	this.setCandleWidth(newCandleWidth, chart);
	this.home({ maintainWhitespace: true });
};

/**
 * Sets the maximum number of ticks to the requested number. This is affected by changing the candleWidth.
 * See also {@link CIQ.ChartEngine#setCandleWidth}.
 *
 * **Note**: if calling `setMaxTicks()` before `loadChart()`, and the chart will result in a candle width less than `minimumCandleWidth`, `loadChart()` will reset the candle size to the default candle size (8 pixels).
 *
 * @param {number} ticks The number of ticks wide to set the chart.
 * @param {object} [params] Parameters to use with this function.
 * @param {number} params.padding Whitespace in pixels to add to the right of the chart.
 * 									Setting this field will home the chart to the most recent tick.
 * 									To home the chart without padding the right side with whitespace, set padding to 0.
 * 									Omitting the padding field will keep the chart scrolled to the same position.
 * @since 2015-11-1 Added `params` object.
 * @memberof CIQ.ChartEngine
 * @example
 * stxx.setMaxTicks(300);
 * stxx.home();	// home() is preferred over draw() in this case to ensure the chart is properly aligned to the right most edge.
 */
CIQ.ChartEngine.prototype.setMaxTicks = function (ticks, params) {
	if (!params) params = {};
	ticks = Math.round(ticks);
	if (ticks < 2) ticks = 2;
	var pad = params.padding ? params.padding : 0;
	var chart = this.chart;
	var candleWidth = (chart.width - pad) / (ticks - 1) || 8; // Zero candlewidth can only occur if the chart has no width. This might happen if the chart is in a hidden iframe
	this.setCandleWidth(candleWidth, chart);
	if (params.padding || params.padding === 0) chart.scroll = ticks; // If padding, then by definition we're homing
};

/**
 * <span class="injection">INJECTABLE</span>
 *
 * This method initializes the chart container events, such as window `resize` events,
 * and the [resizeTimer]{@link CIQ.ChartEngine#setResizeTimer} to ensure the chart adjusts as its container size changes.
 * It also initializes various internal variables, the canvas and creates the chart panel.
 *
 * This is called by {@link CIQ.ChartEngine#loadChart} and should rarely be called directly.
 *
 * Note that the candle width will be reset to 8px if larger than 50px. Even if the value comes from a layout import.
 * This is done to ensure a reasonable candle size is available across devices that may have different screen size.
 *
 * @param {HTMLElement} [container] Node that contains the chart.
 * @memberof CIQ.ChartEngine
 *
 */
CIQ.ChartEngine.prototype.initializeChart = function (container) {
	if (this.runPrepend("initializeChart", arguments)) return;
	var chart = this.chart;
	if (!chart.symbolObject.symbol) chart.symbolObject.symbol = chart.symbol; // for backwards compatibility so the symbol object is always initialized in case we don't use loadChart()
	if (this.locale) this.setLocale(this.locale);
	if (!this.displayZone && CIQ.ChartEngine.defaultDisplayTimeZone) {
		this.setTimeZone(null, CIQ.ChartEngine.defaultDisplayTimeZone);
	}
	this.resetDynamicYAxis({ noRecalculate: true });
	this.calculateYAxisPositions();
	this.micropixels = 0;

	if (container) chart.container = container;
	else container = chart.container;
	container.stx = this;
	if (!container.CIQRegistered) {
		container.CIQRegistered = true;
		CIQ.ChartEngine.registeredContainers.push(container);
		CIQ.ChartEngine.attachGlobalEventHandlers();
	}
	if (this.registerHTMLElements) this.registerHTMLElements(); // Sets all of the internal HTML elements to those in the container
	var canvas = chart.canvas,
		backgroundCanvas = chart.backgroundCanvas,
		tempCanvas = chart.tempCanvas,
		floatCanvas = this.floatCanvas,
		canvasShim = chart.canvasShim;

	// Just make sure the candleWidth is sane
	this.setCandleWidth(this.layout.candleWidth);

	function styleCanvas(canv, hide) {
		canv.context = canv.getContext("2d");
		canv.context.lineWidth = 1;
		var canvasStyle = canv.style;
		canvasStyle.position = "absolute";
		canvasStyle.left = "0px";
		if (hide) canvasStyle.display = "none";
	}

	if (!chart.backgroundCanvas) {
		backgroundCanvas = chart.backgroundCanvas =
			document.createElement("canvas");
		container.appendChild(backgroundCanvas);
		styleCanvas(backgroundCanvas);

		canvasShim = chart.canvasShim = document.createElement("div");
		canvasShim.className = "stx-canvas-shim";
		container.appendChild(canvasShim);

		canvas = chart.canvas = document.createElement("canvas");
		container.appendChild(canvas);
		styleCanvas(canvas);
		chart.context = canvas.context;

		tempCanvas = chart.tempCanvas = document.createElement("canvas");
		container.appendChild(tempCanvas);
		styleCanvas(tempCanvas, true);

		floatCanvas = this.floatCanvas = document.createElement("canvas");
		container.appendChild(floatCanvas);
		styleCanvas(floatCanvas, true);
	}

	this.resizeCanvas();

	if (CIQ.isAndroid) {
		var ontouchstart = function (e) {
			if (e.preventDefault) e.preventDefault();
		};
		tempCanvas.addEventListener("touchstart", ontouchstart, { passive: false });
		floatCanvas.addEventListener("touchstart", ontouchstart, {
			passive: false
		});
	}

	var panels = this.panels;
	chart.panel.display = chart.symbol;
	if (chart.symbolDisplay) chart.panel.display = chart.symbolDisplay;
	this.adjustPanelPositions();
	chart.panel = panels[chart.name];

	for (var p in panels) {
		var yAxes = panels[p].yaxisLHS.concat(panels[p].yaxisRHS);
		for (var a = 0; a < yAxes.length; a++) {
			yAxes[a].height = panels[p].yAxis.height; // set the [overlay] yAxis height to the panel's main yAxis height...
			this.calculateYAxisMargins(yAxes[a]); // ...so this will work
		}
	}

	this.initialWhitespace = this.preferences.whitespace;
	if (chart.dataSet && chart.dataSet.length > 0) {
		chart.scroll = Math.floor(chart.width / this.layout.candleWidth); //chart.maxTicks;
		var wsInTicks = Math.round(
			this.preferences.whitespace / this.layout.candleWidth
		);
		chart.scroll -= wsInTicks;
	}
	if (CIQ.touchDevice) {
		var overlayEdit = container.querySelector(".overlayEdit");
		var overlayText = container.querySelector(".overlayText");
		var overlayTrashCan = container.querySelector(".overlayTrashCan");
		var vectorTrashCan = container.querySelector(".vectorTrashCan");
		var cb = function (self, callRightClick, forceEdit, forceText) {
			return function (e) {
				self.deleteHighlighted(callRightClick, forceEdit, forceText);
			};
		};
		if (overlayText) {
			CIQ.safeClickTouch(overlayText, cb(this, true, false, true));
		}
		if (overlayEdit) {
			CIQ.safeClickTouch(overlayEdit, cb(this, true, true, false));
			if (overlayTrashCan) {
				CIQ.safeClickTouch(overlayTrashCan, cb(this, false));
			}
		} else if (overlayTrashCan) {
			CIQ.safeClickTouch(overlayTrashCan, cb(this, true));
		}
		if (vectorTrashCan) {
			CIQ.safeClickTouch(vectorTrashCan, cb(this, true));
		}
	}
	if (this.manageTouchAndMouse) {
		this.registerTouchAndMouseEvents();
	}
	if (this.handleMouseOut) {
		container.onmouseout = (function (self) {
			return function (e) {
				self.handleMouseOut(e);
			};
		})(this);
		CIQ.smartHover(container.ownerDocument);
	}

	if (this.abortDrawings) this.abortDrawings();
	this.undoStamps = [];
	for (var panelName in panels) {
		var panel = panels[panelName];
		if (panel.markerHolder) {
			container.removeChild(panel.markerHolder);
			panel.markerHolder = null;
		}
	}
	for (var i in this.plugins) {
		var plugin = this.plugins[i];
		if (plugin.display) {
			if (plugin.initializeChart) plugin.initializeChart(this);
		}
	}

	// This sets a resize listener for when the screen itself is resized.
	if (!this.resizeListenerInitialized) {
		var self = this;
		this.resizeListenerInitialized = true;
		var resizeListener = function () {
			return function (e) {
				self.resizeChart();
			};
		};
		this.addDomEventListener(
			container.ownerDocument.defaultView,
			"resize",
			resizeListener(),
			true
		);
	}
	if (chart.baseline.userLevel) chart.baseline.userLevel = null;
	this.setResizeTimer();
	this.runAppend("initializeChart", arguments);
};

/**
 * Clears out a chart engine instantiated with [new CIQ.ChartEngine()]{@link CIQ.ChartEngine},
 * eliminating all references including the resizeTimer, quoteDriver, styles and eventListeners.
 *
 * It's still up to the developer to set the declared pointer for the instance to null so that the garbage collector can remove it.
 *
 * Please note that **this method will not remove the chart container or any elements within it, even if they were created by the engine**.
 * To do that, execute `stx.container.remove();` to remove the chartContainer DOM elements,
 * and then call this method to remove the chart engine itself. See example.
 *
 *
 * This method should only be used when you no longer need the chart engine and **never** be used in between {@link CIQ.ChartEngine#loadChart} calls to load or change symbols.
 * @memberof CIQ.ChartEngine
 * @example
 * // create
 * var stxx=new CIQ.ChartEngine({container: document.querySelector(".chartContainer")});
 *
 * // execute this line to remove the chart container <div> and its sub elements
 * stxx.container.remove();
 *
 * //destroy engine
 * stxx.destroy();
 *
 * //remove
 * stxx = null;
 */
CIQ.ChartEngine.prototype.destroy = function () {
	this.setResizeTimer(0);
	if (this.detachQuoteFeed) this.detachQuoteFeed();
	this.styles = {}; // Get rid of any external style references that could cause us to hang around
	for (var i = 0; i < this.eventListeners.length; i++) {
		var listener = this.eventListeners[i];
		listener.element.removeEventListener(
			listener.event,
			listener["function"],
			listener.options
		);
	}
	this.touchAndMouseEventsRegistered = false;
	this.eventListeners = [];
	if (this.streamParameters.timeout)
		clearTimeout(this.streamParameters.timeout);

	// remove chart container from registeredContainers
	var registeredContainers = CIQ.ChartEngine.registeredContainers;
	var chartIndex = registeredContainers.indexOf(this.chart.container);
	if (chartIndex > -1) {
		registeredContainers.splice(chartIndex, 1);
	}

	this.destroyed = true;

	// remove matching subcharts
	if (this.slider) this.slider.slider.destroy();
	if (this.marketDepth) this.marketDepth.marketDepth.destroy();
};

CIQ.ChartEngine.registerGlobalEvent(
	"unload",
	function () {
		const registeredContainers = CIQ.ChartEngine.registeredContainers.slice(0);
		registeredContainers.forEach((container) => {
			if (container.ownerDocument === this.document) {
				try {
					container.stx.destroy();
					container.stx = null;
				} catch (e) {}
			}
		});
		CIQ.ChartEngine.globalEventHandlers.forEach((handler) => {
			const index = handler.applied.indexOf(this.document);
			if (index > -1) {
				try {
					handler.applied.splice(index);
				} catch (e) {}
			}
		});
		// console.log(this.document.body); // useful to see karma document when tests are done
		this.document.body.innerHTML = "";
	},
	false,
	true
);

/**
 * Call this before a resizing operation in order to maintain the scroll position. See {@link CIQ.ChartEngine#postAdjustScroll}.
 * @param  {CIQ.ChartEngine.Chart} [chart] The chart to adjust. Otherwise adjusts the main symbol chart.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.preAdjustScroll = function (chart) {
	if (!chart) chart = this.chart;
	this.previousAdjust = {
		chart: chart,
		scroll: chart.scroll,
		maxTicks: chart.maxTicks
	};
};

/**
 * Call this after a resizing operation in order to maintain the scroll position. See {@link CIQ.ChartEngine#preAdjustScroll}.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.postAdjustScroll = function () {
	if (!this.previousAdjust) return;
	var chart = this.previousAdjust.chart;
	chart.scroll =
		this.previousAdjust.scroll +
		(chart.maxTicks - this.previousAdjust.maxTicks);
	if (this.displayInitialized) this.draw();
};

/**
 * Translates the requested word to the active language if this.translationCallback callback function is set.
 *
 * Use {@link CIQ.translatableTextNode} if you are adding the element to the DOM and wish the translations services to automatically change to other languages as they are set.
 * @param  {string} english The word to translate
 * @return {string}			The translated word, or the word itself if no callback is set.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.translateIf = function (english) {
	if (this.translationCallback)
		return this.translationCallback(english, this.preferences.language);
	return english;
};

/**
 * This method is used to prepare date fields for internal use. It will:
 * - convert dates to a JS Date in the time zone set by [setTimeZone(dataZone)]{@link CIQ.ChartEngine#setTimeZone}.
 * - subsequently strip off the time portion on daily, weekly and monthly intervals.
 *
 * - If the date ('DT' or 'Date') does not include a time offset, such as 'yyyy-mm-dd',
 * no time zone conversion will be performed. Use this option if you prefer to display the same date on all timezones.
 * This applies to daily, weekly and monthly periodicities only.
 *
 * @param  {array} quotes The quote array to be converted
 * @param  {string} interval Interval of the quotes ("day", "week", etc).
 * @memberof CIQ.ChartEngine
 * @since
 * - 4.0.0
 * - 5.2.0 Used on intraday and daily quotes to also convert dates to the indicated `dataZone` as set by [setTimeZone(dataZone)]{@link CIQ.ChartEngine#setTimeZone}.
 */
CIQ.ChartEngine.prototype.doCleanupDates = function (quotes, interval) {
	if (!quotes || !quotes.length) return;
	for (var i = 0; i < quotes.length; i++) {
		var quote = quotes[i],
			date = quote.DT;
		if (!date && !quote.Date) continue;
		if (
			quote.DT &&
			Object.prototype.toString.call(date) == "[object String]" &&
			date.length <= 10
		) {
			// only date portion provided on DT field, no conversion
			date = new Date(date);
			date.setMinutes(date.getMinutes() + date.getTimezoneOffset());
		} else {
			var useDataZone = true;
			if (!quote.DT) {
				date = CIQ.strToDateTime(quote.Date);
				if (quote.Date.length <= 10) useDataZone = false;
			}
			if (Object.prototype.toString.call(date) != "[object Date]")
				date = new Date(date); // if already a date object; nothing to do
			if (timezoneJS.Date && this.dataZone && useDataZone) {
				// convert dates before setting a quotes canonical DT object
				var newDT = new timezoneJS.Date(
					date.getFullYear(),
					date.getMonth(),
					date.getDate(),
					date.getHours(),
					date.getMinutes(),
					this.dataZone
				);
				var milli = date.getSeconds() * 1000 + date.getMilliseconds();
				date = new Date(newDT.getTime() + milli);
			}
			if (CIQ.ChartEngine.isDailyInterval(interval)) date.setHours(0, 0, 0, 0);
		}
		if (!quote.DT) quote.Date = CIQ.yyyymmddhhmmssmmm(date); // Set the Date to the adjusted date but only if there was no DT provided
		quote.DT = date;
	}
};

/**
 * If {@link CIQ.ChartEngine#cleanupGaps} is set, this method will insert bars in an array of quotes for those periods missing a record according to the market hours and the current periodicity.
 * See "{@link CIQ.Market}" for details on how to properly configure the library to your market hours requirements.
 *
 * This method will not be called for `tick` since by nature it is no a predictable interval.
 *
 * This method is automatically called if you are using a quotefeed and have {@link CIQ.ChartEngine#cleanupGaps} set, but can be manually called if pushing or streaming data into the chart.
 *
 * This method will affect intraday and **underlying daily**  periods **only**. If the feed is already returning weekly and monthly data rolled up, the cleanup will not be done (see {@link CIQ.ChartEngine#dontRoll} ).
 *
 * See {@link CIQ.ChartEngine#cleanupGaps}, for more details.
 *
 * @param  {array} quotes The quote array to be gap-filled
 * @param  {CIQ.ChartEngine.Chart} [chart] Chart object to target.
 * @param {object} [params] Parameters
 * @param {boolean|string} [params.cleanupGaps] Pass this in to override the {@link CIQ.ChartEngine#cleanupGaps} value.
 * @param {boolean} [params.noCleanupDates]		If true then dates have been cleaned up already by calling {@link CIQ.ChartEngine#doCleanupDates}, so do not do so in here.
 * @param {string} [params.field]		Set to a field to fill gaps, or leave out to use chart.defaultPlotField.
 * @return {array} The quote array with gaps filled in.
 * @memberof CIQ.ChartEngine
 * @since
 * - 07/01/2015 Now supports cleanups for daily intervals and foreign exchanges instead of just intraday equities.
 * - 3.0.7 Added `params.cleanupGaps` to allow developers to use this function standalone,
 * - 5.2.0 Added `params.noCleanupDates`.
 * - 6.0.0 Added `params.field`.
 * - 6.0.0 If `params.cleanupGaps` is true, use the value of `stxx.cleanupGaps`. If that's not set, then `cleanupGaps` is like carry.
 */
CIQ.ChartEngine.prototype.doCleanupGaps = function (quotes, chart, params) {
	if (!quotes || !quotes.length) return quotes;
	var interval = this.layout.interval;
	params = params ? params : {};
	if (!chart) chart = this.chart;
	if (!CIQ.Market || !chart.market) return quotes;
	if (!params.noCleanupDates) this.doCleanupDates(quotes, interval);

	var cleanupGaps = params.cleanupGaps;
	if (cleanupGaps === false) return quotes;
	if (!cleanupGaps || cleanupGaps === true)
		cleanupGaps = this.cleanupGaps || cleanupGaps;
	var makeGaps = cleanupGaps == "gap"; // "carry" or any other non-false will cause the closing price to carry, otherwise a null will be injected

	if (!cleanupGaps) return quotes;
	if (interval == "tick") return quotes;

	// doCleanupGaps works on the raw masterData, so if we're rolling up month or week then be sure to actually
	// cleanup gaps on the masterData which will be "day"
	if (interval == "month" || interval == "week") {
		if (this.dontRoll) return quotes; // We won't try to fill gaps on raw month or week data
		interval = "day";
	}

	var _make_date = function (_quote) {
		if (_quote.DT) {
			if (Object.prototype.toString.call(_quote.DT) != "[object Date]")
				return new Date(_quote.DT); // epoch or ISO string
			return new Date(+_quote.DT);
		}
		return CIQ.strToDateTime(_quote.Date);
	};

	var new_quotes = [];
	var currentQuote = quotes[0];
	new_quotes.push(currentQuote);

	var iter_parms = {
		begin: _make_date(currentQuote),
		interval: interval,
		periodicity: 1,
		timeUnit: this.layout.timeUnit
	};
	var market = new CIQ.Market(chart.market.market_def);
	var iter = market.newIterator(iter_parms);
	if (this.extendedHours && this.extendedHours.filter)
		iter.market.enableAllAvailableSessions();

	var field = chart.defaultPlotField;

	// See if Value is the key field instead of Close by looking for a record with Value but no Close.
	for (var valQuote = 0; valQuote < quotes.length; valQuote++) {
		if (quotes[valQuote][field] !== undefined) break;
		if (quotes[valQuote].Value !== undefined) {
			field = "Value";
			break;
		}
	}

	var mdt;

	function fillGapsBetween(dt1, dt2) {
		var paramField = params.field;
		var cQuote = paramField ? currentQuote[paramField] : currentQuote;
		if (cQuote === undefined) cQuote = {};
		var close = makeGaps ? null : cQuote[field];
		var adjClose = makeGaps ? null : cQuote.Adj_Close;
		// Loop through the iterator adding a dummy quote for every missing market date between currentQuote and nextQuote
		while (+dt1 < +dt2) {
			var newQuote = { DT: dt1 };
			if (paramField) {
			} else {
				new_quotes.push(newQuote);
				CIQ.extend(newQuote, {
					Open: close,
					High: close,
					Low: close,
					Close: close,
					Volume: 0,
					Adj_Close: adjClose
				});
			}
			dt1 = iter.next();
		}
	}

	function copyForward(currentQuote, nextQuote) {
		var paramField = params.field;
		if (paramField) {
			if (
				typeof currentQuote[paramField] != "undefined" &&
				typeof nextQuote[paramField] == "undefined"
			) {
				nextQuote[paramField] = makeGaps ? null : currentQuote[paramField];
			}
			return;
		}
		if (makeGaps) return;
		var close = currentQuote[field];
		var nextClose = nextQuote[field];
		if (typeof close != "undefined" && typeof nextClose == "undefined") {
			CIQ.ensureDefaults(nextQuote, {
				Close: close,
				Open: close,
				High: close,
				Low: close,
				Volume: 0,
				Adj_Close: currentQuote.Adj_Close
			});
		}
	}

	for (var i = 1; i < quotes.length; i++) {
		var nextQuote = quotes[i];
		mdt = iter.next(); // market date
		var qdt = _make_date(nextQuote); // quote date

		if (mdt < qdt) {
			fillGapsBetween(mdt, qdt);
			mdt = iter.market._convertFromMarketTZ(iter.begin, iter.outZone);
		}

		while (qdt < mdt) {
			if (++i == quotes.length) return new_quotes;
			copyForward(currentQuote, nextQuote);
			new_quotes.push(nextQuote);
			currentQuote = nextQuote;
			nextQuote = quotes[i];
			qdt = _make_date(nextQuote);
		}
		if (mdt < qdt) {
			i--;
			mdt = iter.previous();
		} else {
			copyForward(currentQuote, nextQuote);
			new_quotes.push(nextQuote);
			currentQuote = nextQuote;
		}
	}

	return new_quotes;
};

/**
 * Returns the variables exported by the library.
 *
 * Use this function to access the CIQ namespace and other library exports when they are not
 * otherwise accessible.
 *
 * @return {object} The exports of the library.
 *
 * @private
 * @memberof CIQ.ChartEngine
 * @since 8.0.0
 */
CIQ.ChartEngine.prototype.getCreatingLibrary = function () {
	return _exports;
};

};


let __js_core_engine_panel_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Defines a Panel object.
 * Every chart or study is rendered in a panel.
 *
 * Example: stxx.panels['chart']
 *
 * Example: stxx.panels['Aroon (14)']

 * @param {string} name The name of the panel.
 * @param {CIQ.ChartEngine.YAxis} [yAxis] y-axis ({@link CIQ.ChartEngine.YAxis}) object for the panel.
 * @constructor
 * @name  CIQ.ChartEngine.Panel
 */
CIQ.ChartEngine.Panel = function (name, yAxis) {
	if (yAxis) this.yAxis = yAxis;
	else this.yAxis = new CIQ.ChartEngine.YAxis();
	this.name = name;
	this.state = {}; // drawing state of the panel, can be studies, drawings, or any panel-scoped object
};

CIQ.extend(
	CIQ.ChartEngine.Panel.prototype,
	{
		/**
		 * @type string
		 * @memberof CIQ.ChartEngine.Panel#
		 */
		name: null, // Name of panel
		/**
		 * @type string
		 * @memberof CIQ.ChartEngine.Panel#
		 */
		display: null, // Display text of panel
		/**
		 * @type CIQ.ChartEngine.Chart
		 * @memberof CIQ.ChartEngine.Panel#
		 */
		chart: null, // The chart from which this panel derives its data
		/**
		 * @type CIQ.ChartEngine.YAxis
		 * @memberof CIQ.ChartEngine.Panel#
		 */
		yAxis: null, // y-axis object for this panel, this is the same object as chart.yAxis on chart panels
		/**
		 * @type boolean
		 * @memberof CIQ.ChartEngine.Panel#
		 */
		shareChartXAxis: null, // Set to false to indicate panel does not share x-axis with its chart
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.Panel#
		 */
		top: null, // Y location of top of chart
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.Panel#
		 */
		bottom: null, // Y location of bottom of chart
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.Panel#
		 */
		height: null, // height of panel in pixels
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.Panel#
		 */
		percent: null, // percent of overall window this panel takes up
		/**
		 * Draws a border around the panel's left and right sides for a more finished look, when no y-axis is present.
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.Panel#
		 * @since 7.1.0
		 */
		displayEdgeIfPadded: true,
		/**
		 * Prevents plot and axis dragging into, out of, and within panels.
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.Panel#
		 * @since 7.2.0
		 */
		noDrag: false,
		/**
		 * Determines whether the panel is included in the {@link CIQ.ChartEngine#exportLayout}
		 * return object.
		 *
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.Panel#
		 * @since 8.0.0
		 */
		exportable: true
	},
	true
);

/**
 * Returns the panel for the given Y pixel. Used for instance to determine which panel the crosshairs are in.
 * @param  {number} y Y pixel location
 * @return {CIQ.ChartEngine.Panel}	  The panel containing the Y location. Null if the Y location is outside of all panels.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.whichPanel = function (y) {
	for (var p in this.panels) {
		var panel = this.panels[p];
		if (panel.hidden) continue;
		if (y >= panel.top && y < panel.bottom) return panel;
	}
	return null;
};

/**
 * Returns true if the panel exists
 * @param  {string} name Name of panel to search for
 * @return {boolean}	  True if the panel exists
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.panelExists = function (name) {
	for (var p in this.panels) {
		var panel = this.panels[p];
		if (panel.name == name) return true;
	}
	return false;
};

/**
 * Takes the existing panels and stores them in the layout.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.storePanels = function () {
	if (!this.layout) this.layout = {};
	var view = this.layout;
	view.panels = {};
	for (var p in this.panels) {
		var panel = this.panels[p];
		view.panels[panel.name] = {
			percent: panel.percent,
			display: panel.display,
			yAxis: panel.yAxis
		};
	}
};

/**
 * Saves the panel state in the layout. Called whenever there is a change to panel layout (resizing, opening, closing).
 * @param  {boolean} saveLayout If false then a change event will not be called. See (@link CIQ.ChartEngine#changeOccurred)
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.savePanels = function (saveLayout) {
	this.storePanels();
	if (saveLayout !== false) this.changeOccurred("layout");
};

/**
 * Internal function for deleting a panel and its associated DOM objects
 * Do not call directly. Always call panelClose
 * @private
 */
CIQ.ChartEngine.prototype.privateDeletePanel = function (panel) {
	// check for studies
	for (var s in this.layout.studies) {
		var study = this.layout.studies[s];
		if (study.panel == panel.name) {
			this.cleanupRemovedStudy(study);
		}
	}
	// If we ever want to delete any drawing objects in a panel
	/*var drawingDeleted=false;
		for(var i=0;i<this.drawingObjects.length;i++){
			var drawing=this.drawingObjects[i];
			if(this.panels[drawing.panelName]==panel){
				drawing.abort();
				this.drawingObjects.splice(i,1);
				drawingDeleted=true;
			}
		}*/
	delete this.panels[panel.name];
	for (var series in this.overlays) {
		if (this.overlays[series].panel == panel.name) {
			if (this.layout.studies)
				this.cleanupRemovedStudy(this.layout.studies[series]);
			delete this.overlays[series];
		}
	}

	// remove all the series that display on the panel
	for (var entry in this.chart.series) {
		if (this.chart.series[entry].parameters.panel == panel.name) {
			this.removeSeries(this.chart.series[entry], this.chart);
		}
	}

	if (panel.holder) {
		this.chart.container.removeChild(panel.holder);
		if (this.getMarkerArray) {
			var arr = this.getMarkerArray("panelName", panel.name);
			for (var i = 0; i < arr.length; i++) {
				this.removeFromHolder(arr[i]);
			}
		}
	}
	if (panel.handle) panel.handle.remove();
	//if(drawingDeleted) this.changeOccurred("vector");
	this.currentPanel = null;
};

/**
 * Returns an array of plots (studies and renderers) situated within a given panel, not including the main series of the chart panel.
 * @param  {CIQ.ChartEngine.Panel|string}	panel	The panel to check
 * @return {array}	Plots which are in the panel
 * @memberof CIQ.ChartEngine
 * @since 7.1.0
 */
CIQ.ChartEngine.prototype.plotsInPanel = function (panel) {
	var arr = [];
	var panelName = panel;
	if (typeof panel == "object") panelName = panel.name;
	// check for studies
	for (var s in this.layout.studies) {
		var study = this.layout.studies[s];
		if (panelName === study.panel) arr.push(study);
	}

	// check for series
	for (var r in this.chart.seriesRenderers) {
		var renderer = this.chart.seriesRenderers[r];
		if (panelName === renderer.params.panel) arr.push(renderer);
	}

	return arr;
};

/**
 * Determines if a panel is empty of series and studies. If the panel is empty, remove the panel.
 *
 * @param {CIQ.ChartEngine.Panel|string} panel The panel to check.
 * @param {boolean} [dryRun] True to just return if it was an empty panel without actually
 * 		deleting it.
 * @param {object|object[]} [exclude] Disregard any plot in this array when checking for plots in
 * 		this panel.
 * @return {boolean} False if the panel should still be displayed, true if panel is removed.
 *
 * @memberof CIQ.ChartEngine
 * @since
 * - 6.3.0
 * - 7.1.0 Added the `dryRun` and `exclude` parameters.
 */
CIQ.ChartEngine.prototype.checkForEmptyPanel = function (
	panel,
	dryRun,
	exclude
) {
	if (!panel) return false;
	var panelName = panel;
	if (typeof panel == "object") panelName = panel.name;
	if (panelName === this.chart.name) return false; // don't remove the main chart panel
	if (!exclude) exclude = [];
	else if (!(exclude instanceof Array)) exclude = [exclude];

	var plots = this.plotsInPanel(panel);
	for (var i = 0; i < plots.length; i++) {
		if (exclude.indexOf(plots[i]) == -1) return false;
	}

	// check for drawings
	/*for(var i = 0; i < this.drawingObjects.length; i++) {
			if(panelName === this.drawingObjects[i].panelName) {
				return false;
			}
		}*/

	if (!dryRun) this.panelClose(this.panels[panelName]);
	return true;
};

/**
 * <span class="injection">INJECTABLE</span>
 *
 * Closes the panel opened with {@link CIQ.ChartEngine.AdvancedInjectable#createPanel}.
 * This is called when a chart panel is closed manually or programmatically.
 * For example, after removing a study panel with the {@link CIQ.Studies.removeStudy} function, or when a user clicks on the "X" for a panel.
 * @param  {CIQ.ChartEngine.Panel} panel The panel to close
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias panelClose
 *
 */
CIQ.ChartEngine.prototype.panelClose = function (panel) {
	if (!panel) return;
	if (this.runPrepend("panelClose", arguments)) return;
	this.cancelTouchSingleClick = true;
	CIQ.ChartEngine.drawingLine = false;
	if (panel.soloing) this.panelSolo(panel);

	// If we're deleting a panel with a chart in it
	if (this.charts[panel.name]) {
		// Then delete all the panels that reference that chart
		for (var panelName in this.panels) {
			var subPanel = this.panels[panelName];
			if (subPanel.chart.name == panel.name) {
				this.privateDeletePanel(subPanel);
			}
		}
		// and delete the chart itself
		delete this.charts[panel.name];
	} else {
		// otherwise just delete the panel
		this.privateDeletePanel(panel);
	}
	if (!this.currentlyImporting) {
		// silent mode while importing
		this.showCrosshairs();
		//this.createDataSet();  // commented, why would we do this?
		this.resetDynamicYAxis({ noRecalculate: true });
		this.calculateYAxisPositions();
		this.draw();
		this.savePanels();
	}
	// IE11 on Win7 hack. We do this in case the mouseup is lost when we removed the panel.close from the DOM
	this.userPointerDown = this.grabbingScreen = false;
	if (this.openDialog) this.openDialog = "";
	this.runAppend("panelClose", arguments);
};

/**
 * Deletes all of the panels (except for the default chart panel)
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.deleteAllPanels = function () {
	for (var p in this.panels) {
		var panel = this.panels[p];
		this.privateDeletePanel(panel);
	}
	this.layout.panels = {};
	this.panels = {};
};

/**
 * This moves a panel up one position (when the user clicks the up arrow).
 * @param  {CIQ.ChartEngine.Panel} panel The panel to move up.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.panelUp = function (panel) {
	this.cancelTouchSingleClick = true;
	CIQ.ChartEngine.drawingLine = false;
	this.showCrosshairs();
	var newPanels = {};
	var pos = 0;
	var p;
	for (p in this.panels) {
		if (p == panel.name) break;
		pos++;
	}

	if (!pos) return; //already at top

	var i = 0;
	for (p in this.panels) {
		if (i == pos - 1) newPanels[panel.name] = panel;
		if (p == panel.name) continue;
		newPanels[p] = this.panels[p];
		i++;
	}
	this.panels = newPanels;
	this.adjustPanelPositions();
	this.draw();
	this.savePanels();
};

/**
 * This moves a panel down one position (when the user clicks the down arrow).
 * @param  {CIQ.ChartEngine.Panel} panel The panel to move down.
 * @memberof CIQ.ChartEngine
 */

CIQ.ChartEngine.prototype.panelDown = function (panel) {
	this.cancelTouchSingleClick = true;
	CIQ.ChartEngine.drawingLine = false;
	this.showCrosshairs();
	var newPanels = {};
	var pos = 0;
	var p;
	for (p in this.panels) {
		if (p == panel.name) break;
		pos++;
	}

	var length = 0;
	for (p in this.panels) length++;
	if (pos == length - 1) return; //already at bottom

	var i = 0;
	for (p in this.panels) {
		if (p == panel.name) {
			i++;
			continue;
		}
		newPanels[p] = this.panels[p];
		if (i == pos + 1) newPanels[panel.name] = panel;
		i++;
	}
	this.panels = newPanels;
	this.adjustPanelPositions();
	this.draw();
	this.savePanels();
};

/**
 * This "solos" the panel (when the user clicks the solo button). All panels other than this panel and the chart
 * are temporarily hidden. If the solo panel is the chart then all other panels will be hidden.
 * Note if {@link CIQ.ChartEngine#soloPanelToFullScreen} is set than even the chart panel may be hidden
 * @param  {CIQ.ChartEngine.Panel} panel The panel to be soloed.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.panelSolo = function (panel) {
	this.cancelTouchSingleClick = true;
	CIQ.ChartEngine.drawingLine = false;
	this.showCrosshairs();
	var hideOrNot = true;
	var p;
	if (panel.soloing) {
		hideOrNot = false;
		panel.soloing = false;
		panel.solo.classList.remove("stx_solo_lit");
		panel.percent = panel.oldPercent;
		if (panel.name != "chart") {
			if (this.soloPanelToFullScreen) {
				if (panel.percent == 1) {
					for (p in this.panels) {
						var otherPanel = this.panels[p];
						if (otherPanel != panel) panel.percent -= otherPanel.percent;
					}
				}
			} else {
				this.chart.panel.percent = this.chart.panel.oldPercent;
			}
		}
		if (this.soloPanelToFullScreen) {
			this.xAxisAsFooter = this.chart.panel.oldXAxisAsFooter;
		}
	} else {
		panel.soloing = true;
		panel.solo.classList.add("stx_solo_lit");
		panel.oldPercent = panel.percent;
		this.chart.panel.oldXAxisAsFooter = this.xAxisAsFooter;
		if (panel.name != "chart") {
			if (this.soloPanelToFullScreen) {
				this.xAxisAsFooter = true;
			} else {
				this.chart.panel.oldPercent = this.chart.panel.percent;
				panel.percent = 1 - this.chart.panel.percent;
			}
		}
	}
	for (p in this.panels) {
		if (panel === this.panels[p]) continue;
		if (p === "chart" && !this.soloPanelToFullScreen) continue;
		this.panels[p].hidden = hideOrNot;
	}
	this.resetDynamicYAxis({ noRecalculate: true });
	this.calculateYAxisPositions();
	this.draw();
	this.savePanels();
};

//@private
CIQ.ChartEngine.prototype.calculatePanelPercent = function (panel) {
	var h = panel.bottom - panel.top;
	panel.percent = h / this.chart.canvasHeight;
};

/**
 * Called when the user moves a panel handle, to resize all of the panels relative to the movement.
 * @private
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.resizePanels = function () {
	if (!CIQ.ChartEngine.resizingPanel) return;
	var priorPanel, minimumHeight, yAxes, i;
	var down =
		CIQ.ChartEngine.crosshairY >
		this.resolveY(CIQ.ChartEngine.resizingPanel.top);
	for (var p in this.panels) {
		if (this.panels[p] == CIQ.ChartEngine.resizingPanel) break;
		if (this.panels[p].hidden) continue;
		priorPanel = this.panels[p];
	}
	var newY = this.backOutY(CIQ.ChartEngine.crosshairY);
	if (down) {
		yAxes = CIQ.ChartEngine.resizingPanel.yaxisLHS.concat(
			CIQ.ChartEngine.resizingPanel.yaxisRHS
		);
		for (i = 0; i < yAxes.length; i++) {
			minimumHeight =
				yAxes[i].initialMarginTop + yAxes[i].initialMarginBottom + 10;
			if (newY > yAxes[i].bottom - minimumHeight) {
				newY = yAxes[i].bottom - minimumHeight;
			}
		}
	} else {
		yAxes = priorPanel.yaxisLHS.concat(priorPanel.yaxisRHS);
		for (i = 0; i < yAxes.length; i++) {
			minimumHeight =
				yAxes[i].initialMarginTop + yAxes[i].initialMarginBottom + 10;
			if (newY < yAxes[i].top + minimumHeight) {
				newY = yAxes[i].top + minimumHeight;
			}
		}
	}
	CIQ.ChartEngine.crosshairY = this.resolveY(newY);
	priorPanel.bottom = newY;
	CIQ.ChartEngine.resizingPanel.top = newY;
	this.calculatePanelPercent(priorPanel);
	this.calculatePanelPercent(CIQ.ChartEngine.resizingPanel);

	this.adjustPanelPositions();
	this.draw();
	this.savePanels();
};

/**
 * Determines whether a panel precedes the main chart in the display order.
 *
 * @param {CIQ.ChartEngine.Panel} panel The panel for which the display order is determined.
 * @return {boolean} true, if the panel is above the chart; false, if below or not available.
 *
 * @memberof CIQ.ChartEngine
 * @since 8.0.0
 */
CIQ.ChartEngine.prototype.isPanelAboveChart = function (panel) {
	for (var p in this.panels) {
		if (p == "chart") return false;
		if (p == panel.name) return true;
	}
	return false;
};

// First, adjust the panel percentages so that they all add up to 1
// Secondly, set the pixel top and bottom of each panel based on the percentages
/**
 * <span class="injection">INJECTABLE</span>
 *
 * Adjusts the positions of all of the panels. Ensures that panel percentages add up to 100%. Sets the panel top and bottom
 * based on the percentages. Also sets the icon template icons appropriately for each panel's position. And adjusts
 * any drawings. Finally, it makes some calculations that are used by the y-axis.
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias adjustPanelPositions
 */
CIQ.ChartEngine.prototype.adjustPanelPositions = function () {
	const { chart, panels } = this;
	if (chart.tempCanvas) CIQ.clearCanvas(chart.tempCanvas, this); // clear any drawing in progress
	// if(!this.chart.symbol) return;
	if (this.runPrepend("adjustPanelPositions", arguments)) return;
	var lastBottom = 0;
	var h = chart.canvasHeight;
	var first = false;
	var acc = 0;
	var n = 0;
	var activeSolo = false;
	var x, panel;
	for (x in panels) {
		panel = panels[x];
		if (isNaN(panel.percent) || panel.percent <= 0) panel.percent = 0.05;
		if (panel.hidden) continue;
		acc += panel.percent;
		n++;
		if (panel.soloing) activeSolo = true;
	}

	for (x in panels) {
		var zoomRatio = 0;
		panel = panels[x];

		if (panel.hidden) {
			if (panel.markerHolder) {
				panel.markerHolder.style.display = "none";
			}
			continue;
		}
		if (this.manageTouchAndMouse) {
			if (panel.up) {
				if (!first) {
					first = true;
					panel.up.classList.remove("stx-show");
				} else {
					if (this.displayIconsUpDown) panel.up.classList.add("stx-show");
				}
			}
			if (panel.solo) {
				if (activeSolo) {
					if (panel.soloing && this.displayIconsSolo)
						panel.solo.classList.add("stx-show");
					else panel.solo.classList.remove("stx-show");
				} else if (n == 1) {
					panel.solo.classList.remove("stx-show");
				} else if (n == 2 && !this.soloPanelToFullScreen) {
					panel.solo.classList.remove("stx-show");
				} else {
					if (this.displayIconsSolo) panel.solo.classList.add("stx-show");
				}
			}
			if (panel.down) {
				if (n == 1) {
					panel.down.classList.remove("stx-show");
				} else {
					if (this.displayIconsUpDown) panel.down.classList.add("stx-show");
				}
			}
			if (panel.edit) {
				if (panel.editFunction) panel.edit.classList.add("stx-show");
				else panel.edit.classList.remove("stx-show");
			}
			if (panel.close) {
				if (this.displayIconsClose) panel.close.classList.add("stx-show");
				else panel.close.classList.remove("stx-show");
			}
		}

		panel.percent = panel.percent / acc;
		panel.top = lastBottom;
		panel.bottom = panel.top + h * panel.percent;
		panel.height = panel.bottom - panel.top;
		if (panel.chart.name == panel.name) {
			panel.chart.top = panel.top;
			panel.chart.bottom = panel.bottom;
			panel.chart.height = panel.height;
		}

		lastBottom = panel.bottom;

		if (panel.yaxisLHS) {
			var arr = panel.yaxisLHS.concat(panel.yaxisRHS);
			for (var yax = 0; yax < arr.length; yax++) {
				var yAxis = arr[yax];

				if (yAxis.zoom && yAxis.height > 0) {
					zoomRatio = yAxis.zoom / yAxis.height;
				}
				this.adjustYAxisHeightOffset(panel, yAxis);
				yAxis.height = yAxis.bottom - yAxis.top;
				if (zoomRatio) {
					yAxis.scroll *= (zoomRatio * yAxis.height) / yAxis.zoom;
					yAxis.zoom = zoomRatio * yAxis.height;
					if (yAxis.zoom > yAxis.height) {
						yAxis.zoom = 0; // If the zoom is greater than the height then we'll have an upside down y-axis
						yAxis.scroll = 0;
					}
				}

				if (!yAxis.high && yAxis.high !== 0) {
					// panels without values will use percentages to position drawings
					yAxis.high = 100;
					yAxis.low = 0;
					yAxis.shadow = 100;
				}
				yAxis.multiplier = yAxis.height / yAxis.shadow;
				// necessary to preserve the heightFactor of a yAxis
				if (yAxis.position === "none") this.calculateYAxisMargins(yAxis);
			}
		}

		if (panel.holder) {
			panel.holder.style.right = "0px";
			panel.holder.style.top = panel.top + "px";
			panel.holder.style.left = "0px";
			panel.holder.style.height = panel.height + "px";

			panel.subholder.style.left = panel.left + "px";
			panel.subholder.style.width = panel.width + "px";
			panel.subholder.style.top = "0px";
			if (panel.yAxis.height >= 0)
				panel.subholder.style.height = panel.yAxis.height + "px";
		}
	}
	if (x && panels[x].down) panels[x].down.classList.remove("stx-show");
	if (this.manageTouchAndMouse && n == 2 && !activeSolo && chart.panel.solo) {
		chart.panel.solo.classList.add("stx-show");
	}
	if (chart.panel) {
		var bottom;
		if (activeSolo && this.soloPanelToFullScreen) {
			bottom = chart.canvasHeight - panel.yAxis.bottom + 12;
		} else {
			bottom = chart.canvasHeight - chart.panel.yAxis.bottom + 12;
		}
		let controls = this.controls;
		let { chartControls, home, notificationTray } = controls;
		let yaxOffset = this.width - chart.panel.right;
		if (chartControls) chartControls.style.bottom = bottom + "px";
		if (home) {
			home.style.bottom = bottom + "px";
			home.style.marginRight = yaxOffset + "px";
		}
		if (notificationTray) {
			notificationTray.style.bottom = bottom + "px";
			notificationTray.style.marginRight = yaxOffset + "px";
		}
	}
	this.clearPixelCache();

	if (this.drawingObjects.length) this.adjustDrawings();

	this.runAppend("adjustPanelPositions", arguments);
};

/**
 * <span class="injection">INJECTABLE</span>
 *
 * Creates a new panel and makes room for it by squeezing all the existing panels.
 * To remove a panel, manually call {@link CIQ.ChartEngine.AdvancedInjectable#panelClose}.
 *
 * @param {string} display The display name for the panel.
 * @param {string} name	The name of the panel (usually the study ID).
 * @param {number} [height] Requested height of the panel in pixels. Defaults to 1/5 of the
 * 		screen size.
 * @param {string} [chartName="chart"] The chart to associate with this panel.
 * @param {CIQ.ChartEngine.YAxis} [yAxis] {@link CIQ.ChartEngine.YAxis} object. If not present,
 * 		the existing panel's axis is used.
 * @param {boolean} [noExport] If true, omits the panel from the
 * 		{@link CIQ.ChartEngine#exportLayout} function.
 * @return {CIQ.ChartEngine.Panel} The panel just added.
 *
 * @alias createPanel
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @since
 * - 5.2.0 Added the `yAxis` parameter.
 * - 7.1.0 Added the return value.
 * - 8.0.0 Added the `noExport` parameter.
 */
CIQ.ChartEngine.prototype.createPanel = function (
	display,
	name,
	height,
	chartName,
	yAxis,
	noExport
) {
	if (this.runPrepend("createPanel", arguments)) return;
	if (!chartName) chartName = "chart";
	var h = this.chart.canvasHeight;
	if (!height) height = h * 0.2;
	if (height > h) height = h * 0.5;
	var percent = height / h;
	var reduce = 1 - percent;
	var activeSolo = false;
	for (var p in this.panels) {
		var panel = this.panels[p];
		panel.percent *= reduce;
		if (panel.soloing) activeSolo = true;
	}
	this.stackPanel(display, name, percent, chartName, yAxis);
	this.panels[name].hidden = activeSolo;
	this.panels[name].exportable = !noExport;
	this.calculateYAxisMargins(this.panels[name].yAxis);
	this.adjustPanelPositions();
	this.savePanels(false);
	this.runAppend("createPanel", arguments);
	return this.panels[name];
};

/**
 * Changes the name, display and primary yAxis of a panel, and adjusts all references accordingly.
 * @param {CIQ.ChartEngine.Panel|string} panel The panel
 * @param {object} [params]
 * @param {string} [params.name] Panel name, if omitted, name becomes a random string
 * @param {string} [params.display] Panel display, defaults to the name
 * @param {CIQ.ChartEngine.YAxis} [params.yAxis] Panel's y-axis. If omitted, will use the panel's existing y-axis
 * @since 7.1.0
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.modifyPanel = function (panel, params) {
	const oldName = panel.name;
	const { studies } = this.layout;
	const { series } = this.chart;
	let { name, display, yAxis } = params || {};

	if (!name) name = CIQ.uniqueID();
	if (!display) display = name;
	if (!yAxis) {
		yAxis = panel.yAxis;
		yAxis.name = name;
	}

	let newPanels = {};
	for (let p in this.panels) {
		if (p === panel.name) {
			// swap the name/id of the old panel
			let tmp = this.panels[p];
			tmp.name = name;
			tmp.display = display;
			tmp.yAxis = yAxis;
			panel = newPanels[name] = tmp;
			if (this.moveMarkers && oldName !== name) {
				this.moveMarkers(oldName, name);
			}
		} else {
			newPanels[p] = this.panels[p];
		}
	}

	this.panels = newPanels;

	let layoutChanged = false;
	for (let s in studies) {
		let study = studies[s];
		if (study.panel === oldName) {
			study.panel = name;
			if (study.parameters && study.parameters.panelName) {
				layoutChanged = true;
				study.parameters.panelName = name;
			}
		}
	}

	for (let s in series) {
		if (series[s].parameters.panel === oldName) {
			layoutChanged = true;
			let prm = { panel: name };
			if (
				series[s].parameters.yAxis &&
				series[s].parameters.yAxis.name === oldName
			)
				prm.yAxis = yAxis;
			this.modifySeries(s, prm, true);
		}
	}

	if (layoutChanged) this.changeOccurred("layout");

	let drawingChanged = false;
	for (let d = 0; d < this.drawingObjects.length; d++) {
		let drawing = this.drawingObjects[d];
		if (oldName === drawing.panelName) {
			drawing.panelName = name;
			drawingChanged = true;
		}
	}

	if (drawingChanged) this.changeOccurred("vector");

	this.calculateYAxisPositions();
};

/**
 * Changes the height of a panel, adjusting other panels accordingly.
 *
 * @param {CIQ.ChartEngine.Panel} panelToModify The panel whose height is changed.
 * @param {number} requestedHeight The new height in pixels of the panel.
 *
 * @memberof CIQ.ChartEngine
 * @since 8.0.0
 */
CIQ.ChartEngine.prototype.setPanelHeight = function (
	panelToModify,
	requestedHeight
) {
	if (!requestedHeight) return;

	// adjust requested height to accommodate the x-axis if panel is at bottom
	if (Object.values(this.panels).slice(-1)[0] === panelToModify) {
		requestedHeight += this.xaxisHeight;
	}

	const { canvasHeight } = this.chart;
	const { percent: currentPercent } = panelToModify;
	const newPercent = requestedHeight / canvasHeight;
	const prevRemainingPercent = 1 - currentPercent;
	const newRemainingPercent = 1 - newPercent;
	const adjustment = prevRemainingPercent / newRemainingPercent;

	Object.values(this.panels).forEach((panel) => {
		panel.percent /= adjustment;
	});
	panelToModify.percent = newPercent;

	this.adjustPanelPositions();
	this.savePanels();
};

/**
 * Chooses a new study or renderer to be the "owner" of a panel. This affects the name of the panel as well as the main y-axis.
 * If no new owner can be found, panel is closed. Calls `modifyPanel`.
 *
 * @param {CIQ.ChartEngine.Panel|string} panel The panel that contains the study or renderer.
 * @param {CIQ.ChartEngine.YAxis} [yAxisHint] Optional y-axis from which to try to elect a new panel owner.
 * @return {string} The new name of the panel.
 * @memberof CIQ.ChartEngine
 * @since
 * - 7.1.0
 * - 7.2.0 Added the `yAxisHint` argument.
 */
CIQ.ChartEngine.prototype.electNewPanelOwner = function (panel, yAxisHint) {
	var newOwner;
	if (typeof panel == "string") panel = this.panels[panel];
	var oldYAxis = panel.yAxis;
	function myAxis(y) {
		return y.name != oldYAxis.name;
	}
	if (panel && panel != this.chart.panel) {
		var yAxis = panel.yAxis;
		// first see if yaxis was hosting other plots, create a new panel axis for them
		var newName = yAxis.studies[0];
		if (!newName || newName == oldYAxis.name) newName = yAxis.renderers[0];
		if (!newName || newName == oldYAxis.name) newName = yAxis.studies[1];
		if (!newName) newName = yAxis.renderers[1];
		if (yAxisHint) {
			// a suggested yAxis was supplied, trust it
			yAxis = panel.yAxis = yAxisHint;
			newOwner = yAxisHint.name;
		} else if (!newName) {
			// no more plots on the main axis, let's find another axis
			if (panel.yaxisLHS) {
				var axisArr = panel.yaxisRHS.concat(panel.yaxisLHS).filter(myAxis);
				var newAxis = axisArr[0];
				for (var y = 0; y < axisArr.length; y++) {
					if (!axisArr[y].position) {
						// give priority to a default axis
						newAxis = axisArr[y];
						break;
					}
				}
				if (newAxis) {
					yAxis = panel.yAxis = newAxis;
					newOwner = newAxis.studies[0] || newAxis.renderers[0];
				}
			}
		} else {
			yAxis = this.addYAxis(
				panel,
				new CIQ.ChartEngine.YAxis({ name: newName, position: yAxis.position })
			);
			yAxis.renderers = panel.yAxis.renderers;
			yAxis.studies = panel.yAxis.studies;
			newOwner = newName;
		}
		if (newOwner) {
			newName = newOwner;
			if (oldYAxis.name != panel.name) newName = panel.name; // don't change the panel name if it didn't match the old owner
			var display,
				studies = this.layout.studies;
			if (studies && studies[newOwner])
				display = studies[newOwner].inputs.display;
			this.modifyPanel(panel, {
				name: newName,
				display: display || newOwner,
				yAxis: yAxis
			});
			this.deleteYAxisIfUnused(panel, oldYAxis);
			if (!this.panels[newName].yAxis.lockScale)
				this.calculateYAxisMargins(this.panels[newName].yAxis);
		} else this.checkForEmptyPanel(panel);
	}
	return newOwner;
};

/**
 * Configures the panel controls
 * @param  {CIQ.ChartEngine.Panel} panel The panel
 * @private
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.configurePanelControls = function (panel) {
	var icons = panel.icons;
	if (!icons) return;
	var isChart = panel.name == panel.chart.name;

	icons.classList.add("stx-show");
	icons.classList.remove("iconsTemplate");

	panel.title = icons.querySelector(".stx-panel-title");
	panel.up = icons.querySelector(".stx-ico-up");
	if (panel.up) panel.up = panel.up.parentNode;
	panel.solo = icons.querySelector(".stx-ico-focus");
	if (panel.solo) panel.solo = panel.solo.parentNode;
	panel.down = icons.querySelector(".stx-ico-down");
	if (panel.down) panel.down = panel.down.parentNode;
	panel.edit = icons.querySelector(".stx-ico-edit");
	if (panel.edit) panel.edit = panel.edit.parentNode;
	panel.close = icons.querySelector(".stx-ico-close");
	if (panel.close) panel.close = panel.close.parentNode;

	if (panel.title) {
		panel.title.innerHTML = "";
		if (panel.display)
			panel.title.appendChild(document.createTextNode(panel.display));
		if (isChart) {
			panel.title.classList.add("chart-title");
			icons.classList.add("stx-chart-panel");
		}
	}

	if (!CIQ.touchDevice || CIQ.isSurface) this.makeModal(icons);

	if (panel.handle) {
		if (!CIQ.touchDevice || CIQ.isSurface)
			panel.handle.onmouseover = (function (self) {
				return function () {
					self.hideCrosshairs();
				};
			})(this);
		if (!CIQ.touchDevice || CIQ.isSurface)
			panel.handle.onmouseout = (function (self) {
				return function () {
					self.showCrosshairs();
				};
			})(this);
		var panelGrab = function (stx, panel) {
			return function (e) {
				if (CIQ.ChartEngine.resizingPanel || stx.openDialog !== "") return;
				stx.grabHandle(panel);
			};
		};
		// stxx.releaseHandle is called by the chart's touchend and mouseup handlers
		if (CIQ.isSurface) {
			panel.handle.onpointerdown = panelGrab(this, panel);
		} else {
			panel.handle.onmousedown = panelGrab(this, panel);
		}
		if (CIQ.touchDevice)
			panel.handle.addEventListener("touchstart", panelGrab(this, panel), {
				passive: false
			});
	}

	if (panel.up)
		CIQ.safeClickTouch(
			panel.up,
			(function (stx, panel) {
				return function () {
					stx.panelUp(panel);
				};
			})(this, panel)
		);
	if (panel.down)
		CIQ.safeClickTouch(
			panel.down,
			(function (stx, panel) {
				return function () {
					stx.panelDown(panel);
				};
			})(this, panel)
		);
	if (panel.solo)
		CIQ.safeClickTouch(
			panel.solo,
			(function (stx, panel) {
				return function () {
					stx.panelSolo(panel);
				};
			})(this, panel)
		);
	if (panel.close) {
		if (panel.name == "chart") {
			panel.close.style.display = "none"; // no close icon on primary chart
		} else {
			CIQ.safeClickTouch(
				panel.close,
				(function (stx, panel) {
					return function () {
						stx.panelClose(panel);
					};
				})(this, panel)
			);
		}
	}
};
/**
 * <span class="injection">INJECTABLE</span>
 *
 * Adds a panel with a prespecified percentage. This should be called iteratively when rebuilding a set
 * of panels from a previous layout. Use {@link CIQ.ChartEngine.AdvancedInjectable#createPanel} when creating a new panel for an existing chart layout.
 * @param  {string} display	  The display name for the panel
 * @param  {string} name	  The name of the panel (usually the study ID)
 * @param  {number} percent	  The percentage of chart to use
 * @param  {string} [chartName] The chart to associate with this panel. Defaults to "chart".
 * @param {CIQ.ChartEngine.YAxis} [yAxis] {@link CIQ.ChartEngine.YAxis} object. If not present, the existing panel's axis will be used.
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias stackPanel
 * @since 5.2.0 Added `yAxis` paremeter.
 */
CIQ.ChartEngine.prototype.stackPanel = function (
	display,
	name,
	percent,
	chartName,
	yAxis
) {
	if (this.runPrepend("stackPanel", arguments)) return;
	if (!chartName) chartName = "chart";
	var chart = this.charts[chartName];
	var isChart = name == chartName;
	if (isChart) {
		display = chart.symbol;
		if (chart.symbolDisplay) display = chart.symbolDisplay;
		if (!yAxis) yAxis = chart.yAxis;
	}
	var panel = (this.panels[name] = new CIQ.ChartEngine.Panel(name, yAxis));
	if (!isChart && chart.yAxis && panel.yAxis.position == chart.yAxis.position) {
		panel.yAxis.width = chart.yAxis.width; // make it match the width of the main panel so the y-axis align
	}
	if (isChart && !chart.panel) chart.panel = panel;

	panel.percent = percent;
	panel.chart = chart;
	panel.display = display;
	panel.holder = CIQ.newChild(this.container, "div", "stx-holder"); // the main holder extends to the edges of the panel
	panel.subholder = CIQ.newChild(panel.holder, "div", "stx-subholder"); // the sub holder does not include the axis area
	panel.subholder.style.zIndex = 1;
	panel.holder.panel = panel;
	var appendClass = isChart ? "stx-panel-chart" : "stx-panel-study";
	panel.holder.classList.add(appendClass);

	if (this.controls.handleTemplate && this.manageTouchAndMouse) {
		panel.handle = this.controls.handleTemplate.cloneNode(true);
		panel.handle.classList.remove("handleTemplate");
		this.container.appendChild(panel.handle);
		//panel.handle.style.display=""; // let the drawPanels manage this otherwise if we set to "" here but the developer wants a picture (png) handle using CSS, the hande will flicker on on initial load on the top of the screen
		panel.handle.panel = panel;
	}

	if (this.controls.iconsTemplate) {
		panel.icons = this.controls.iconsTemplate.cloneNode(true);
		panel.subholder.appendChild(panel.icons);
		this.configurePanelControls(panel);
	}

	if (!this.currentlyImporting) this.resizeCanvas();

	this.runAppend("stackPanel", arguments);
};

CIQ.ChartEngine.prototype.setPanelEdit = function (panel, editFunction) {
	panel.editFunction = editFunction;
	if (panel.edit) CIQ.safeClickTouch(panel.edit, editFunction);
	this.adjustPanelPositions();
};
/**
 * <span class="injection">INJECTABLE</span>
 * <span class="animation">Animation Loop</span>
 *
 * Draws the panels for the chart and chart studies. CSS style stx_panel_border can be modified to change the color
 * or width of the panel dividers.
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias drawPanels
 */
CIQ.ChartEngine.prototype.drawPanels = function () {
	if (this.runPrepend("drawPanels", arguments)) return;
	var first = false;
	for (var p in this.panels) {
		var panel = this.panels[p];
		panel.state = {}; // reset the drawing state

		var textToDisplay = this.translateIf(panel.display);
		if (panel.title && panel.title.textContent != textToDisplay) {
			panel.title.innerHTML = "";
			panel.title.appendChild(document.createTextNode(textToDisplay));
		}
		if (panel.icons) panel.icons.classList.add("stx-show");
		if (panel.hidden) {
			if (panel.icons) panel.icons.classList.remove("stx-show");
			if (panel.handle) panel.handle.style.display = "none";
			panel.holder.style.display = "none";
			continue;
		} else {
			if (panel.name != "chart") {
				var manageTouchAndMouse = this.manageTouchAndMouse;
				if (panel.up)
					panel.up.style.display =
						this.displayIconsUpDown && manageTouchAndMouse ? "" : "none";
				if (panel.down)
					panel.down.style.display =
						this.displayIconsUpDown && manageTouchAndMouse ? "" : "none";
				if (panel.solo)
					panel.solo.style.display =
						this.displayIconsSolo && manageTouchAndMouse ? "" : "none";
				if (panel.close)
					panel.close.style.display =
						this.displayIconsClose && manageTouchAndMouse ? "" : "none";
				if (panel.edit)
					panel.edit.style.display =
						panel.editFunction && manageTouchAndMouse ? "" : "none";
			}
			panel.holder.style.display = "block";
		}
		if (panel.displayEdgeIfPadded) {
			var x = Math.round(panel.left) + 0.5,
				t = panel.yAxis.top - 0.5,
				b = panel.yAxis.bottom + 0.5;
			if (panel.yaxisCalculatedPaddingLeft && !panel.yaxisTotalWidthLeft)
				this.plotLine(
					x,
					x,
					t,
					b,
					this.canvasStyle("stx_grid_border"),
					"segment",
					this.chart.context,
					false,
					{ lineWidth: 1 }
				);
			x = Math.round(panel.right) + 0.5;
			if (panel.yaxisCalculatedPaddingRight && !panel.yaxisTotalWidthRight)
				this.plotLine(
					x,
					x,
					t,
					b,
					this.canvasStyle("stx_grid_border"),
					"segment",
					this.chart.context,
					false,
					{ lineWidth: 1 }
				);
		}
		if (!first) {
			if (panel.handle) panel.handle.style.display = "none";
			first = true;
			continue;
		}
		var y = panel.top;
		y = Math.round(y) + 0.5;
		this.plotLine(
			panel.left - 0.5,
			panel.right + 0.5,
			y,
			y,
			this.canvasStyle("stx_panel_border"),
			"segment",
			this.chart.context,
			false,
			{}
		);
		if (panel.handle) {
			if (!this.displayPanelResize) {
				panel.handle.style.display = "none";
			} else {
				panel.handle.style.display = "";
			}
			panel.handle.style.top = y - panel.handle.offsetHeight / 2 + "px";
			//panel.handle.style.left=panel.left+ "px";
		}
	}
	this.runAppend("drawPanels", arguments);
};

};


let __js_core_engine_periodicity_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Determines whether the internal chart periodicity is based on a daily interval ("day", "week"
 * or "month").
 *
 * **Note:** This function is intended to be used on the internal periodicity as stored in
 * {@link CIQ.ChartEngine#layout}.
 *
 * @param {string} interval The internal chart periodicity for which the interval is determined.
 * @return {boolean} True if the internal chart periodicity is a daily interval; otherwise, false.
 *
 * @memberof CIQ.ChartEngine
 *
 * @see <a href="CIQ.ChartEngine.html#layout%5B%60periodicity%60%5D">CIQ.ChartEngine.layout.periodicity</a>
 * @see <a href="CIQ.ChartEngine.html#layout%5B%60interval%60%5D">CIQ.ChartEngine.layout.interval</a>
 * @see <a href="CIQ.ChartEngine.html#layout%5B%60timeUnit%60%5D">CIQ.ChartEngine.layout.timeUnit</a>
 */
CIQ.ChartEngine.isDailyInterval = function (interval) {
	if (interval == "day") return true;
	if (interval == "week") return true;
	if (interval == "month") return true;
	return false;
};

/**
 * Specifies the properties that define periodicity.
 *
 * Periodicity = `period` x `interval` expressed as `timeUnit`.
 *
 * Referenced as the type of the main parameter of {@link CIQ.ChartEngine#setPeriodicity}, the
 * periodicity parameter of {@link CIQ.ChartEngine#loadChart}, and the return value of
 * {@link CIQ.ChartEngine#getPeriodicity}.
 *
 * @typedef {object} CIQ.ChartEngine~PeriodicityParameters
 * @property {number} period The number of elements from the data source to roll-up (aggregate)
 * 		into a single data point, such as a candle on a candle chart. For example, `period=2`,
 * 		`interval=5`, and `timeUnit="minute"` results in candles that represent 10-minute time
 * 		spans.
 * @property {string|number} [interval=1] The number of units of measure of the periodicity. For
 * 		example, `interval=5` and `timeUnit="minute"` specify a periodicity of five minutes.
 * 		The interval property enables the chart to fetch quotes in a roll-up state; for
 * 		example, if the data source provides one-minute quotes, setting `interval=5` results
 * 		in the chart fetching five one-minute quotes as a single data point.
 * @property {string|null} [timeUnit="minute"] The unit of measure of the periodicity. Valid values
 * 		include "millisecond", "second", "minute", "day", "week", "month", and "tick".
 */

/**
 * <span class="injection">INJECTABLE</span>
 *
 * Sets the data granularity (periodicity) and displays the resulting chart.
 *
 * Dispatches a "periodicity" event.
 *
 * If a quote feed has been attached to the chart (see {@link CIQ.ChartEngine#attachQuoteFeed}), it will be called to get the new data, otherwise this.dataCallback will
 * be called in an effort to fetch new data. See {@link CIQ.ChartEngine#dataCallback}. If neither one is set and new data is needed, the function will fail.
 *
 * This function can be called together with `loadChart()` by setting the proper parameter values. See example in this section and {@link CIQ.ChartEngine#loadChart} for more details and compatibility with your current version.
 *
 * This function will not set how much data you want the chart to show on the screen; for that you can use {@link CIQ.ChartEngine#setRange} or {@link CIQ.ChartEngine#setSpan}.
 *
 * The kernel is capable of deriving weekly and monthly charts by rolling-up daily data. Set {@link CIQ.ChartEngine#dontRoll} to true to bypass this
 * functionality if you have raw week and month data in the masterData.
 *
 * It is important to note that by default the weekly roll-ups start on Sunday unless a market definition exists to indicate Sunday is not a market day,
 * then they are shifted to the next market day. Instructions to set a market for the chart can be found here: {@link CIQ.Market}
 *
 * A full tutorial on periodicity and roll-up can be found [here]{@tutorial Periodicity}.
 *
 * **See {@link CIQ.ChartEngine#createDataSet} for additional details on the roll-up process including important notes on rolling-up data with gaps.**
 *
 * **Note on 'tick' timeUnit:**<BR>
 * When using 'tick', please note that this is not a time based display, as such, there is no way to predict what the time for the next tick will be.
 * It can come a second later, a minute later or even more depending on how active a particular instrument may be.
 * If using the future tick functionality ( {@link CIQ.ChartEngine.XAxis#futureTicks} ) when in 'tick' mode, the library uses a pre-defined number (  {@link CIQ.ChartEngine.XAxis#futureTicksInterval} )for deciding what time interval to use for future ticks.
 * See below example on how to override this default.
 *
 * It is important to note that rollups for ‘ticks’ are based on **count** rather than time.
 * <br>For example: `setPeriodicity({period:5, interval:1, timeUnit:"tick”})` will create a new bar every **5 ticks** rather than every **5 minutes**.
 *
 * Since many ticks can have the exact same timestamp, ticks never get replaced or augmented. As such, if a new tick is provided with a timestamp in the past, even if a record with the exact same date already exists, a new tick will be inserted to the masterData at the proper location rather than one replaced.
 *
 * Lastly, you cannot set an interval for `tick`; as that would not translate into a valid periodicity. If inadvertently set, the engine will "clean it up" (much the same way as if you tried `{period:1, interval:5, timeUnit:"day"}` ).
 *
 * **Note on internal periodicity storage:**<BR>
 * The provided parameters will be translated into internal format and stored in the {@link CIQ.ChartEngine#layout} object.
 * Internal format in the layout object **will not match the parameters** used in ​setPeriodicity.
 * <br>Use {@link CIQ.ChartEngine#getPeriodicity} to extract internal periodicity into the expected external format.
 *
 * @example
 * // each bar on the screen will represent 15 minutes (combining 15 1-minute bars from your server)
 * stxx.setPeriodicity({period:15, timeUnit:"minute"}, function(err){});
 *
 * @example
 * // each bar on the screen will represent 15 minutes (a single 15 minute bar from your server)
 * stxx.setPeriodicity({period:1, timeUnit:"minute", interval:15}, function(err){});
 *
 * @example
 * // each bar on the screen will represent 30 minutes formed by combining two 15-minute bars; each masterData element represening 15 minutes.
 * stxx.setPeriodicity({period:2, timeUnit:"minute", interval:15}, function(err){});
 *
 * @example
 * // each bar on the screen will represent 1 tick and no particular grouping will be done.
 * stxx.setPeriodicity({period:1, timeUnit:"tick"}, function(err){});
 *
 * @example
 * // each bar on the screen will represent 5 ticks (combining 5 tick objects from your server)
 * stxx.setPeriodicity({period:5, timeUnit:"tick"}, function(err){});
 *
 * @example
 * // each bar on the screen will represent 1 day. MasterData elements will represent one day each.
 * stxx.setPeriodicity({period:1, timeUnit:"day"}, function(err){});
 *
 * @example
 * // this sets the periodicity to 5 minute bars when loadChart is called
 * stxx.loadChart(newSymbol, {
 * 	// this parameter will cause loadChart to call setSpan with these parameters
 * 	span: {base: 'day', multiplier: 2},
 * 	// this parameter will cause loadChart to call setPeriodicity with these parameters
 * 	periodicity: {period: 1, timeUnit: "minute", interval: 5}
 * }, finishedLoadingChart(stxx.chart.symbol, newSymbol));
 *
 * @example
 * //How to override stxx.chart.xAxis.futureTicksInterval when in 'tick' mode:
 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), layout:{"candleWidth": 16, "crosshair":true}});
 * stxx.chart.xAxis.futureTicksInterval=1; // to set to 1 minute, for example
 *
 * @param {CIQ.ChartEngine~PeriodicityParameters} params periodicity arguments
 * @param {number} params.period The number of elements from masterData to roll-up together into one data point on the chart (candle,bar, etc). If set to 30 in a candle chart, for example, each candle will represent 30 raw elements of `interval/timeUnit` type.
 * @param {number} [params.interval] Further qualifies pre-rolled details of intra-day `timeUnits` ("millisecond","second","minute") and will be converted to “1” if used with "day", "week" or  "month" 'timeUnit'. Some feeds provide data that is already rolled up. For example, there may be a feed that provides 5 minute bars. To let the chart know you want that 5-minute bar from your feed instead of having the chart get individual 1 minute bars and roll them up, you would set the `interval` to '5' and `timeUnit` to 'minute'
 * @param {string} [params.timeUnit] Type of data requested. Valid values are "millisecond","second","minute","day","week", "month" or 'tick'. If not set, will default to "minute". **"hour" is NOT a valid timeUnit. Use `timeUnit:"minute", interval:60` instead**
 * @param {function} [cb] Callback after periodicity is changed. First parameter of callback will be null unless there was an error.
 * @memberof CIQ.ChartEngine
 * @since
 * - 3.0.0 Replaces {@link CIQ.ChartEngine#setPeriodicityV2}.
 * - 4.0.0 Now uses {@link CIQ.ChartEngine#needDifferentData} to determine if new data should be fetched.
 * - 6.3.0 Now only homes chart if new data was fetched.
 * - 8.1.0 Dispatches a "periodicity" event. See also
 * 		[periodicityEventListener]{@link CIQ.ChartEngine~periodicityEventListener}.
 */
CIQ.ChartEngine.prototype.setPeriodicity = function (params, cb) {
	if (this.runPrepend("setPeriodicity", arguments)) return;

	if (typeof arguments[0] !== "object") {
		params = {
			period: arguments[0],
			interval: arguments[1],
			timeUnit: arguments[2]
		};
		cb = arguments[arguments.length - 1];
		if (arguments.length === 3) params.timeUnit = undefined;
	}

	let { period, interval, timeUnit } = params;
	if (typeof cb !== "function") cb = null;

	({ period, interval, timeUnit } = CIQ.cleanPeriodicity(
		period,
		interval,
		timeUnit
	));

	let { layout } = this;
	layout.setSpan = {}; // No longer in a span if we've set a specific periodicity
	layout.range = {}; // No longer in a range if we've set a specific periodicity

	this.chart.inflectionPoint = null; // reset where the consolidation occurs from
	let getDifferentData = false;

	if (this.chart.symbol) {
		getDifferentData = this.needDifferentData({
			period: period,
			interval: interval,
			timeUnit: timeUnit
		});
	}

	let {
		candleWidth: cw,
		periodicity: prvPeriodicity,
		interval: prvInterval,
		timeUnit: prvTimeUnit
	} = layout;
	let prevPeriodicity = { prvPeriodicity, prvInterval, prvTimeUnit };

	layout.periodicity = period;
	layout.interval = interval;
	layout.timeUnit = timeUnit;

	const self = this;
	let dispatchData = {
		stx: self,
		differentData: getDifferentData,
		prevPeriodicity
	};
	function onComplete() {
		self.dispatch("periodicity", dispatchData);
		if (cb) cb(null);
	}

	if (getDifferentData) {
		this.changeOccurred("layout");
		this.clearCurrentMarketData();
		if (this.quoteDriver) {
			for (let c in this.charts) {
				let thisChart = this.charts[c];
				if (thisChart.symbol) {
					if (this.displayInitialized) {
						this.quoteDriver.newChart(
							{
								symbol: thisChart.symbol,
								symbolObject: thisChart.symbolObject,
								chart: thisChart
							},
							onComplete
						);
					} else {
						this.loadChart(thisChart.symbol, { chart: thisChart }, onComplete);
					}
				}
			}
		} else if (this.dataCallback) {
			this.dataCallback();
			onComplete();
		} else {
			console.log(
				"cannot change periodicity because neither dataCallback or quoteDriver are set"
			);
		}
		this.home();
		return;
	}

	for (let chartName in this.charts) {
		let chart = this.charts[chartName];
		let { dataSegment, dataSet, maxTicks, scroll } = chart;
		let dataSegmentLength = dataSegment ? dataSegment.length : 0,
			dataSetLength = dataSet ? dataSet.length : 0;
		let dt;
		let pos = Math.round(chart.maxTicks / 2);
		this.setCandleWidth(cw, chart);
		let centerMe = true,
			rightAligned = false;
		if (scroll <= maxTicks)
			// don't attempt to center the chart if we're scrolled into the future
			centerMe = false;
		else if (dataSegment && !dataSegment[pos]) {
			// don't attempt to center the chart if we're scrolled into the past
			centerMe = false;
			rightAligned = scroll - dataSetLength; // We'll use this to keep the same amount of right alignment
		}

		if (centerMe && dataSegmentLength > 0) {
			if (maxTicks < (Math.round(this.chart.width / cw - 0.499) - 1) / 2) {
				pos = dataSegmentLength - 1;
			}
			if (pos >= dataSegmentLength) {
				dt = dataSegment[dataSegmentLength - 1].DT;
				pos = dataSegmentLength - 1;
			} else {
				dt = dataSegment[pos].DT;
			}
		}

		this.createDataSet();

		if (centerMe) {
			// If we're scrolled somewhere into the middle of the chart then we will keep the chart centered as we increase or decrease periodicity
			if (dataSegmentLength > 0) {
				for (let i = dataSetLength - 1; i >= 0; i--) {
					let nd = dataSet[i].DT;
					if (nd.getTime() < dt.getTime()) {
						chart.scroll = dataSetLength - 1 - i + pos;
						break;
					}
				}
			}
		} else if (!rightAligned) {
			let wsInTicks = Math.round(this.preferences.whitespace / cw);
			chart.scroll = maxTicks - wsInTicks - 1; // Maintain the same amount of left alignment
		} else {
			chart.scroll = dataSet.length + rightAligned; // Maintain the same amount of right alignment
		}
	}

	if (this.displayInitialized) this.draw();
	this.changeOccurred("layout");

	if (this.quoteDriver) {
		for (let chartName in this.charts) {
			let chart = this.charts[chartName];
			if (chart.symbol && (chart.moreAvailable || !chart.upToDate)) {
				this.quoteDriver.checkLoadMore(chart);
			}
		}
	}
	//this.home();  // let centerMe do its thing
	onComplete();
	this.runAppend("setPeriodicity", arguments);
};

/**
 * Returns true if the chart needs new data to conform with the new periodicity.
 * @param {object} newPeriodicity			newPeriodicity. See {@link CIQ.ChartEngine#setPeriodicity}
 * @param {number} newPeriodicity.period 	`period` as required by {@link CIQ.ChartEngine#setPeriodicity}
 * @param {string} newPeriodicity.interval 	`interval` as required by {@link CIQ.ChartEngine#setPeriodicity}
 * @param {string} newPeriodicity.timeUnit 	`timeUnit` as required by {@link CIQ.ChartEngine#setPeriodicity}
 * @return {boolean} True if the cart needs data in a new periodicity
 * @memberof CIQ.ChartEngine
 * @since 4.0.0
 */
CIQ.ChartEngine.prototype.needDifferentData = function (newPeriodicity) {
	var layout = this.layout;
	var isDaily = CIQ.ChartEngine.isDailyInterval(newPeriodicity.interval),
		wasDaily = CIQ.ChartEngine.isDailyInterval(layout.interval);
	var getDifferentData = false;

	if (this.dontRoll || !wasDaily) {
		// we are not rolling so monthly and weekly are not the same as daily or any of the intraday... so simply check for different interval.
		if (layout.interval != newPeriodicity.interval) getDifferentData = true;
	} else {
		//we are rolling weeekly and monthly and wasn't intraday mode...so check to see if we an still use daily data for the new periodicity
		if (isDaily != wasDaily) getDifferentData = true;
	}

	// safety check to deal with defaults.
	if (!isDaily && !newPeriodicity.timeUnit) newPeriodicity.timeUnit = "minute";
	if (!wasDaily && !layout.timeUnit) layout.timeUnit = "minute";

	if (newPeriodicity.timeUnit != layout.timeUnit) getDifferentData = true; // !!! Do not change to !==

	if (!this.masterData || !this.masterData.length) getDifferentData = true; // always fetch if no data

	return getDifferentData;
};

/**
 * Returns the current periodicity of the chart in the format required by
 * {@link CIQ.ChartEngine#setPeriodicity}.
 *
 * @returns {CIQ.ChartEngine~PeriodicityParameters} An object literal containing the properties
 * that define the periodicity: `period`, `interval`, and `timeUnit`; for example,<br>
 * `{period: 2, interval: 5, timeUnit: "minute"}`.
 *
 * @memberof CIQ.ChartEngine
 * @since 7.5.0
 *
 * @see [Periodicity Tutorial]{@tutorial Periodicity}
 */
CIQ.ChartEngine.prototype.getPeriodicity = function () {
	var layout = this.layout;
	var interval = layout.interval,
		timeUnit = layout.timeUnit;

	if (!timeUnit) {
		timeUnit = interval;
		interval = 1;
	}

	return { period: layout.periodicity, interval: interval, timeUnit: timeUnit };
};

};


let __js_core_engine_record_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Based on the standardMarketIterator and the last entry of masterData, determines whether the chart contains data up till the current iterators next tick.
 *
 * For efficiency once {@link CIQ.ChartEngine.isHistoricalMode} is set to false, this will always return false.
 * @return {boolean} True if viewing historical mode
 * @since 6.0.0
 * @private
 */
CIQ.ChartEngine.prototype.isHistoricalMode = function () {
	var dateNow = new Date(),
		historic = true,
		masterData = this.masterData;
	if (!this.isHistoricalModeSet) {
		return false;
	}
	if (masterData.length) {
		var lastDate = this.getFirstLastDataRecord(masterData, "DT", true);
		var iter = this.standardMarketIterator(lastDate.DT);
		historic = (iter ? iter.next() : lastDate.DT) <= dateNow;

		// special case: daily chart, market has not opened yet today
		// historic would always be set even though we have all the data
		if (historic && CIQ.ChartEngine.isDailyInterval(iter.interval)) {
			var open = this.chart.market.getOpen();
			if (open && dateNow < open) {
				dateNow.setHours(0, 0, 0, 0);
				if (+dateNow == +iter.begin) historic = false;
			}
		}
	}
	return historic;
};

/**
 * Whether the chart is scrolled to a home position.
 *
 * @returns {boolean} true when the scroll position shows the last tick of the dataSet
 * @memberof CIQ.ChartEngine
 * @since 2016-06-21
 */
CIQ.ChartEngine.prototype.isHome = function () {
	var chart = this.chart,
		dataSet = chart.dataSet,
		animating = chart.animatingHorizontalScroll;
	return (
		this.pixelFromTick(dataSet.length - (animating ? 2 : 1), chart) <
		chart.width + chart.panel.left
	);
	//return ((this.chart.scroll-1)*this.layout.candleWidth)+this.micropixels<=this.chart.width+1;
};

/**
 * Finds the previous element before dataSegment[bar] in the dataSet which has data for field
 * @param {CIQ.ChartEngine.Chart} chart An instance of {@link CIQ.ChartEngine.Chart}
 * @param {string} field The field to check for data
 * @param {number} bar The index into the dataSegment
 * @return {object} dataSet element which has data
 * @memberof CIQ.ChartEngine
 * @since 4.0.0
 */
CIQ.ChartEngine.prototype.getPreviousBar = function (chart, field, bar) {
	return this.getNextBarInternal(chart, field, bar, -1);
};

/**
 * Finds the next element after dataSegment[bar] in the dataSet which has data for field
 * @param {CIQ.ChartEngine.Chart} chart An instance of {@link CIQ.ChartEngine.Chart}
 * @param {string} field The field to check for data
 * @param {number} bar The index into the dataSegment
 * @return {object} dataSet element which has data
 * @memberof CIQ.ChartEngine
 * @since 4.0.0
 */
CIQ.ChartEngine.prototype.getNextBar = function (chart, field, bar) {
	return this.getNextBarInternal(chart, field, bar, 1);
};

/**
 * @param {CIQ.ChartEngine.Chart} chart An instance of {@link CIQ.ChartEngine.Chart}
 * @param {string} field The field to check for data
 * @param {number} bar The index into the dataSegment
 * @param {number} direction 1 or -1, for next or previous
 * @return {object} dataSet element which has data
 * @memberof CIQ.ChartEngine
 * @since 4.0.0
 * @private
 */
CIQ.ChartEngine.prototype.getNextBarInternal = function (
	chart,
	field,
	bar,
	direction
) {
	var seg = chart.dataSegment && chart.dataSegment[bar];
	if (seg) {
		var tick = seg.tick;
		while (tick > 0 && tick < chart.dataSet.length) {
			tick = tick + direction;
			var ds = chart.dataSet[tick];
			if (ds) {
				var tuple = CIQ.existsInObjectChain(ds, field);
				if (tuple && tuple.obj[tuple.member]) return ds;
			}
		}
	}
	return null;
};

/**
 * Returns the first or last record in a quotes array (e.g. masterData, dataSet) containing the requested field.
 * If no record is found, will return null
 * @param  {array} data	  quotes array in which to search
 * @param  {string} field	  field to search for
 * @param  {boolean} [last] Switch to reverse direction; default is to find the first record.  Set to true to find the last record.
 * @return {object} The found record, or null if not found
 * @memberof CIQ.ChartEngine
 * @since 5.2.0
 */
CIQ.ChartEngine.prototype.getFirstLastDataRecord = function (
	data,
	field,
	last
) {
	if (data && data.length) {
		var c = last ? data.length - 1 : 0;
		while (c >= 0 && c < data.length) {
			if (data[c] && typeof data[c][field] != "undefined") {
				return data[c];
			}
			if (last) c--;
			else c++;
		}
	}
	return null;
};

/**
 * Returns the tick position of the leftmost position on the chart.
 * @return {number} The tick for the leftmost position
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.leftTick = function () {
	return this.chart.dataSet.length - this.chart.scroll;
};

/**
 * Convenience function returns the next or previous interval from the provided date-time at the current chart's periodicity.
 * See {@link CIQ.Market} and {@link CIQ.Market.Iterator} for more details.
 *
 * For 'tick' intervals, since there is no predictable periodicity, the next interval will be determined by {@link CIQ.ChartEngine.XAxis#futureTicksInterval}
 * @param  {date}		DT			A JavaScript Date representing the base time for the request in {@link CIQ.ChartEngine#dataZone} timezone.
 * @param {number}		[period]		The number of periods to jump. Defaults to 1. Can be negative to go back in time.
 * @param {boolean}		[useDataZone=true] By default the next interval will be returned in {@link CIQ.ChartEngine#dataZone}. Set to false to receive a date in {@link CIQ.ChartEngine#displayZone} instead.
 * @return {date}	 The next interval date
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.getNextInterval = function (DT, period, useDataZone) {
	if (!period) period = 1;
	if (useDataZone !== false) useDataZone = true;

	var iter = this.standardMarketIterator(
		DT,
		useDataZone ? this.dataZone : this.displayZone
	);
	if (!iter) return DT; //  cannot find so just return input date
	if (period < 1) {
		return iter.previous(period * -1);
	}
	return iter.next(period);
};

/**
 * Convenience function returns a new market iterator at the current chart's periodicity.
 * For 'tick' intervals, since there is no predictable periodicity, the iterator interval will be determined by {@link CIQ.ChartEngine.XAxis#futureTicksInterval}
 * See {@link CIQ.Market} and {@link CIQ.Market.Iterator} for more details.
 * @param {date}		begin A JavaScript Date representing the iterator begin date in {@link CIQ.ChartEngine#dataZone} timezone. See {@link CIQ.Market#newIterator} for details.
 * @param {string} 		[outZone] A valid time zone from the timeZoneData.js library. This should represent the time zone for the returned date. Defaults {@link CIQ.ChartEngine#dataZone}. See {@link CIQ.Market#newIterator} for details.
 * @param {CIQ.ChartEngine.Chart} 	[chart] The chart object.
 * @return {object} A new iterator.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.standardMarketIterator = function (
	begin,
	outZone,
	chart
) {
	var cht = chart || this.chart;
	if (!cht.market) return null;
	var iter_parms = {
		begin: begin,
		interval: this.layout.interval,
		periodicity:
			this.layout.interval == "tick"
				? this.chart.xAxis.futureTicksInterval
				: this.layout.periodicity,
		timeUnit: this.layout.timeUnit,
		outZone: outZone
	};
	return cht.market.newIterator(iter_parms);
};

};


let __js_core_engine_render_ = (_exports) => {


if (!_exports.SplinePlotter) _exports.SplinePlotter = {};
var CIQ = _exports.CIQ,
	splinePlotter = _exports.SplinePlotter;

/**
 * <span class="injection">INJECTABLE</span>
 * <span class="animation">Animation Loop</span>
 *
 * This is the main rendering function in the animation loop. It draws the chart including panels, axis, and drawings.
 * This method is called continually as a user pans or zooms the chart.
 * This would be a typical place to put an injection to add behavior to the chart after a drawing operation is complete.
 *
 * @param {object} [params] Optional params object. Unused by the draw method itself but can be used to signal to injections
 * 		the circumstances of the draw method being called.
 * @param {boolean} [params.animationEntry] Set to true if draw is called from an animation.
 * @memberof CIQ.ChartEngine
 * @since 8.4.0 Added `params` parameter with the `animationEntry` property.
 */
CIQ.ChartEngine.prototype.draw = function (params) {
	this.debug();
	if (this.destroyed) return;
	var chart = this.chart,
		layout = this.layout;
	if (!chart.canvas) return;
	if (!chart.dataSet) return;
	if (!chart.canvasHeight) return;
	//if(!this.useAnimation && new Date()-this.grossDragging<500) return;

	this.offset = (layout.candleWidth * this.candleWidthPercent) / 2;
	CIQ.clearCanvas(chart.canvas, this);
	if (!this.masterData) return;

	if (this.runPrepend("draw", arguments)) return;
	if (!this.defaultColor) this.getDefaultColor();

	this.vectorsShowing = false;

	this.drawPanels();
	this.yAxisLabels = [];
	var i, plugin;

	this.correctIfOffEdge();
	this.createDataSegment();
	this.setBaselines(chart);
	var axisRepresentation = this.createXAxis(chart);
	this.initializeDisplay(chart);
	this.drawXAxis(chart, axisRepresentation);
	try {
		this.renderYAxis(chart);
	} catch (e) {
		if (e && e.message === "reboot draw") {
			return this.draw();
		}
		throw e;
	}
	this.currentHRParams = this.getCurrentHRParams();
	// draw current price line after grid lines but before candles
	this.drawCurrentPriceLine();

	/// Calculate tmpWidth which represents the amount of width that the candle takes, slightly less than candleWidth
	chart.tmpWidth = Math.floor(layout.candleWidth * this.candleWidthPercent); // So we don't need to compute it a thousand times for every candle
	if (chart.tmpWidth % 2 === 0) {
		// assure that candles are always odd number of pixels wide
		chart.tmpWidth += 1;
		if (chart.tmpWidth > layout.candleWidth)
			// If there isn't space then reduce further
			chart.tmpWidth -= 2;
	}
	if (chart.tmpWidth < 0.5) chart.tmpWidth = 0.5;

	for (i in this.plugins) {
		plugin = this.plugins[i];
		if (plugin.display) {
			if (plugin.drawUnder) plugin.drawUnder(this, chart);
		}
	}

	if (chart.legend) chart.legend.colorMap = null;
	if (this.controls.baselineHandle)
		this.controls.baselineHandle.style.display = "none";

	this.rendererAction(chart, "underlay");
	CIQ.getFn("Studies.displayStudies")(this, chart, true);
	this.displayChart(chart);
	CIQ.getFn("Studies.displayStudies")(this, chart, false);
	this.rendererAction(chart, "overlay");

	if (chart.legend && chart.legend.colorMap && chart.legendRenderer) {
		chart.legendRenderer(this, {
			chart: chart,
			legendColorMap: chart.legend.colorMap,
			coordinates: {
				x: chart.legend.x,
				y: chart.legend.y + chart.panel.yAxis.top
			}
		});
	}

	for (i in this.plugins) {
		plugin = this.plugins[i];
		if (plugin.display) {
			if (plugin.drawOver) plugin.drawOver(this, chart);
		}
	}

	// Do this after (almost) all the drawing has taken place. That way the y-axis text sits on top of anything that
	// has been drawn underneath. For instance, if panel.yaxisCalculatedPaddingRight>0 and the y-axis sits on top of the chart
	for (var panel in this.panels) {
		if (!this.panels[panel].hidden) this.plotYAxisText(this.panels[panel]);
	}
	for (var yLbl = 0; yLbl < this.yAxisLabels.length; yLbl++) {
		var labelParams = this.yAxisLabels[yLbl];
		if (
			labelParams.src == "series" &&
			labelParams.args[6] &&
			labelParams.args[6].drawSeriesPriceLabels === false
		)
			continue;
		this.createYAxisLabel.apply(this, labelParams.args);
	}
	if (this.createCrosshairs) this.createCrosshairs();
	if (this.drawVectors) this.drawVectors();
	this.drawCurrentHR();
	this.currentHRParams = null; // clear params once used in all relevant methods
	this.displayInitialized = true;
	var controls = this.controls;
	if (controls) {
		var showHome =
			this.manageTouchAndMouse &&
			(!this.mainSeriesRenderer || !this.mainSeriesRenderer.nonInteractive);
		if (controls.home)
			controls.home.style.display =
				showHome && !this.isHome() ? "block" : "none";
		if (controls.chartControls) {
			controls.chartControls.style.display =
				this.manageTouchAndMouse &&
				controls.chartControls.style.visibility !== "hidden"
					? "block"
					: "none";
			if (controls.chartControls.style.display === "block")
				CIQ.efficientDOMUpdate(
					controls.chartControls.style,
					"left",
					chart.left + chart.width / 2 + "px"
				);
		}
	}
	if (CIQ.Marker) this.positionMarkers();
	if (this.quoteDriver && this.animations.zoom.hasCompleted) {
		this.quoteDriver.checkLoadMore(chart);
	}
	this.runAppend("draw", arguments);
	this.makeAsyncCallbacks();
};

/**
 * Adds a series renderer to the chart. A series renderer manages a group of series that are
 * rendered on the chart in the same manner. For instance, several series which are part of the
 * same stacked histogram:
 *
 * <iframe width="100%" height="500" scrolling="no" seamless="seamless" align="top"
 *     style="float:top"
 *     src="https://jsfiddle.net/chartiq/rb423n71/embedded/result,js,html/"
 *     allowfullscreen="allowfullscreen" frameborder="1">
 * </iframe>
 *
 * You must manage the persistency of a renderer and remove individual series
 * ({@link CIQ.Renderer#removeSeries}), remove all series ({@link CIQ.Renderer#removeAllSeries}),
 * or even delete the renderer ({@link CIQ.ChartEngine#removeSeriesRenderer}) as needed by your
 * application.
 *
 * **Note:** Once a renderer is set for a chart, it remains loaded with its series definitions
 * and y-axis (if one is used) even if a new symbol is loaded. Calling `setSeriesRenderer` again
 * with the same renderer name just returns the previously created renderer. **Be careful not to
 * send a different y&#8209;axis object unless you have deleted the previous one by completely
 * removing all of its associated series** (see {@link CIQ.Renderer#removeAllSeries}). Failure to
 * do this will cause multiple axes to be displayed, causing the original one to become orphaned.
 *
 * @param {CIQ.Renderer} renderer The series renderer to add to the chart.
 * @return {CIQ.Renderer} The renderer added to the chart by this function or, if the chart
 * 		already has a renderer of the same name, a reference to that renderer.
 *
 * @memberof CIQ.ChartEngine
 * @since 07/01/2015
 *
 * @see {@link CIQ.Renderer}
 * @see {@link CIQ.ChartEngine#removeSeriesRenderer} for release functionality
 * @see {@link CIQ.ChartEngine#addSeries} for additional implementation examples
 *
 * @example
 * // Group the series together and select "line" as the rendering type to display the series.
 * const mdataRenderer = stxx
 *     .setSeriesRenderer(
 *         new CIQ.Renderer.Lines({
 *             params: {
 *                 name: "My Line Series",
 *                 type: "line",
 *                 width: 4,
 *                 callback: mdataLegend
 *             }
 *          })
 *     )
 *     .removeAllSeries()
 *     .attachSeries(symbol1, { color: "red", permanent: true })
 *     .attachSeries(symbol2, "blue")
 *     .attachSeries(symbol3, "yellow")
 *     .ready()
 */
CIQ.ChartEngine.prototype.setSeriesRenderer = function (renderer) {
	const { baseline, name, panel, yAxis } = renderer.params;
	if (this.chart.seriesRenderers[name]) {
		return this.chart.seriesRenderers[name]; // renderer already created
	}

	if (yAxis) {
		renderer.params.yAxis = this.addYAxis(this.panels[panel], yAxis);
		this.resizeChart();
	}
	renderer.stx = this;

	this.chart.seriesRenderers[name] = renderer;

	if (baseline) this.registerBaselineToHelper(renderer);

	return renderer;
};

/** Sets a renderer for the main chart.  This is done by parsing the layout.chartType and layout.aggregationType and creating the renderer which will support those settings.
 * @param {boolean} eraseData Set to true to erase any existing series data
 * @memberOf  CIQ.ChartEngine
 * @since 5.1.0
 */
CIQ.ChartEngine.prototype.setMainSeriesRenderer = function (eraseData) {
	let { chartType, aggregationType } = this.layout;
	const { chart } = this;
	const { custom } = chart;
	let r = this.mainSeriesRenderer;

	let displayInitialized = this.displayInitialized;
	if (r) {
		if (eraseData) this.setMasterData();
		this.displayInitialized = false; // prevent redraws while series is not attached to main renderer
		r.removeAllSeries();
		this.removeSeriesRenderer(r);
		r = this.mainSeriesRenderer = null;
	}

	if (custom && custom.chartType) chartType = custom.chartType;
	if (chartType == "none") return; // no renderer and no default lines renderer
	if (aggregationType && aggregationType != "ohlc") chartType = aggregationType;
	const renderer = CIQ.Renderer.produce(chartType, {
		panel: chart.panel.name,
		name: "_main_series",
		highlightable: false,
		useChartLegend: true
	});
	if (renderer) {
		this.setSeriesRenderer(renderer).attachSeries(null, {
			display: chart.symbol
		});
		r = this.mainSeriesRenderer = renderer;
	}

	this.displayInitialized = displayInitialized;
	// Convenience access
	["highLowBars", "standaloneBars", "barsHaveWidth"].forEach(
		function (p) {
			chart[p] = this.mainSeriesRenderer && this.mainSeriesRenderer[p];
		}.bind(this)
	);
};

/**
 * Detaches a series renderer from the chart and deletes its associated y-axis if no longer used by any other renderer.
 *
 * **Note:** The actual series and related data are not deleted with this command and can be attached or continue to be used with other renderers.
 *
 * **Note: The actual renderer (created by using new `CIQ.Renderer.xxxxx`) is not deleted but simply detached from the chart. You can re-attach it again if needed.
 * To delete the renderer use `delete myRenderer`. See example in {@link CIQ.Renderer.Lines}
 *
 * @param  {object} renderer The actual renderer instance to be removed
 * @memberof CIQ.ChartEngine
 * @since 07/01/2015
 */
CIQ.ChartEngine.prototype.removeSeriesRenderer = function (renderer) {
	const { baseline, name } = renderer.params;
	const handle = this.controls[`${name} baseline-handle`];
	if (baseline) {
		this.removeBaselineFromHelper(renderer);
		if (handle) {
			this.container.removeChild(handle);
			delete this.controls[handle];
		}
	}
	delete this.chart.seriesRenderers[name];
};

/**
 * Retrieves a series renderer from the chart
 * @param  {string} name Handle to access the renderer (params.name)
 * @return {object} the matching series renderer if found
 * @memberof CIQ.ChartEngine
 * @since 07/01/2015
 */
CIQ.ChartEngine.prototype.getSeriesRenderer = function (name) {
	return this.chart.seriesRenderers[name];
};

/**
 * Returns the first renderer found that contains a series, or null if not found.
 *
 * @param {string} seriesId ID of the series to find.
 * @return {object} The matching series renderer if found.
 * @memberof CIQ.ChartEngine
 * @since 7.3.0
 */
CIQ.ChartEngine.prototype.getRendererFromSeries = function (seriesId) {
	var renderers = this.chart.seriesRenderers;
	for (var r in renderers) {
		for (var s in renderers[r].seriesParams) {
			if (renderers[r].seriesParams[s].id == seriesId) return renderers[r];
		}
	}
	return null;
};

/**
 * Initializes boundary clipping on the requested panel. Use this when you are drawing on the canvas and wish for the
 * drawing to be contained within the panel. You must call {@link CIQ.ChartEngine#endClip} when your drawing functions are complete.
 * @param  {string} [panelName] The name of the panel. Defaults to the chart itself.
 * @param {boolean} [allowYAxis=false] If true then the clipping region will include the y-axis. By default the clipping region ends at the y-axis.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.startClip = function (panelName, allowYAxis) {
	if (!panelName) panelName = this.chart.panel.name;
	var panel = this.panels[panelName];
	var yAxis = panel.yAxis;
	var chart = this.chart;
	chart.context.save();
	chart.context.beginPath();
	var left = panel.left;
	var width = panel.width;
	if (allowYAxis) {
		left = 0;
		width = this.width;
	} else if (panel.yaxisLHS && panel.yaxisLHS.length) {
		left++;
		width--;
	}
	chart.context.rect(left, yAxis.top, width, yAxis.height);
	chart.context.clip();
};

/**
 * Completes a bounded clipping operation. See {@link CIQ.ChartEngine#startClip}.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.endClip = function () {
	this.chart.context.restore();
};

/**
 * Sets the line style for the main chart.
 *
 * Applies to the {@link CIQ.Renderer.Lines} renderer only.
 *
 * @param {object|string} [obj] Parameters object or color string (see `obj.color`).
 * @param {string} [obj.color] A color to use for the line plot. Must be an RGB, RGBA, or three-
 * 		or six&#8209;digit hexadecimal color number or
 * 		<a href="https://developer.mozilla.org/en-US/docs/Web/CSS/color_value" target="_blank">
 * 		CSS color keyword</a>; for example, "rgb(0, 255, 0)", "rgba(0, 255, 0, 0.5)",
 * 		"#0f0", "#00FF00", or "lime". Alternatively, `obj` can be set to a color string directly
 * 		if no other parameters are needed.
 * @param {number[]|string} [obj.pattern] Pattern to use as an alternative to a solid line for the
 * 		line plot. Valid string values are "solid", "dotted" and "dashed". Arrays specify the
 * 		sequence of drawn pixels and blank pixels as alternating elements starting at index 0; for
 * 		example, [1, 2, 3, 2] specifies a line containing one drawn pixel followed by two blank
 * 		pixels followed by three drawn pixels followed by two more blank pixels, then the pattern
 * 		repeats.
 * @param {number} [obj.width] Width of the line plot.
 * @param {string} [obj.baseColor] Color to use for the base of a mountain chart. Must be an RGB,
 * 		RGBA, or three- or six&#8209;digit hexadecimal color number or CSS color keyword (see
 * 		`obj.color`).
 * @param {CIQ.ChartEngine.Chart|CIQ.Studies.StudyDescriptor} [target=this.chart] Target to which
 * 		the line style is attached.
 *
 * @memberof CIQ.ChartEngine
 * @since
 * - 4.0.0
 * - 8.2.0 Added `obj.baseColor` parameter.
 *
 * @example <caption>Set the line color, pattern, and width.</caption>
 * stxx.setLineStyle({ color: "rgb(127, 127, 127)", pattern: "dashed", width: 3 });
 *
 * @example <caption>Set the line color using a color keyword.</caption>
 * stxx.setLineStyle("blue");
 */
CIQ.ChartEngine.prototype.setLineStyle = function (obj, target) {
	var res = {};
	if (obj && typeof obj == "object") {
		res = obj;
	} else {
		res.color = obj;
	}
	if (!res.color && !res.pattern && !res.width && !res.baseColor) res = null;
	if (!target) target = this.chart;
	var width = 1;
	if (res && res.width) width = res.width;
	if (res && res.pattern)
		res.pattern = CIQ.borderPatternToArray(width, res.pattern);
	target.lineStyle = res;
};

/**
 * Sets the style for 'gap-filling'.
 *
 * A gap is an area on a line type rendering (mountain, baseline, step, etc.) where the value for the plotted field is null, undefined, or missing.
 *
 * This method can be used to instruct the chart how to fill gaps created on the chart when missing data is present in series.
 * Creates a gap filling style object for lines which can be used with any API call requiring a gap object.
 * It can be used as a general style for the entire chart, as way to configure just the primary series, or when adding series with {@link CIQ.ChartEngine#addSeries}
 *
 * The gap object, called `gaplines` will be attached to the `target` passed in, or will set the the primary chart's gap style if to target is provided.
 * Valid styles include a Boolean, a color string, or an object containing color and pattern information.
 *
 * When passing in a Boolean value:
 * - `true` will indicate that the target object should continue to draw lines over the gaps in your chart.
 * - `false` will indicate that the target object should treat the color as transparent, and not draw lines over the gaps.
 *
 * It is important to note that this is NOT the same as filling the missing values with actual data. It merely describes how the chart displays the gaps.
 *
 * This should be used instead of setting {@link CIQ.ChartEngine.Chart#gaplines} directly.
 *
 * A gap is an area on a line type rendering (mountain, baseline, step, etc.) where the value for the plotted field is null, undefined, or missing.
 * @param  {object} [obj|boolean|string]	Value for gap lines.
 * @param {string} [obj.color] A color on the canvas palette to use for gap plot. Alternatively, obj may be set to the color string directly if no other parameters are needed.
 * @param {array} [obj.pattern] Pattern to use as alternative to solid line for gap plot, in array format, e.g. [1,2,3,2].
 * @param {number} [obj.width] Line width for gap plot, in pixels
 * @param {boolean} [obj.fillMountain] Set to true to fill the gaps in a mountain chart with the gap color.  Otherwise, the mountain chart is filled in with its default color.
 * @param  {object} [target=this.chart] Target to attach `gaplines` object to.  If none provided it defaults to CIQ.ChartEngine.Chart.
 * @memberof CIQ.ChartEngine
 * @since
 * - 4.0.0
 * - 6.2.3 Now accepts any valid parameter of `chart.gaplines` (boolean, color string, or color object).
 * @example
 * // shorthand if just setting a color as the the default style for the chart gaps
 * stxx.setGapLines("blue");
 * @example
 * // the following will set stxx.chart.gaplines with color, pattern and width for the chart gaps
 * stxx.setGapLines({color:"transparent",pattern:[1,2],width:3,fillMountain:true});
 * @example
 * // the following will set objectTarget.gaplines
 * stxx.setGapLines({color:"transparent",pattern:[1,2],width:3,fillMountain:true,target:objectTarget});
 * @example
 * // shorthand for setting gaps to transparent
 * stxx.setGapLines(false)
 *
 * // shorthand for setting gaps to the color of your line or mountain chart
 * stxx.setGapLines(true)
 *
 */
CIQ.ChartEngine.prototype.setGapLines = function (obj, target) {
	if (!target) target = this.chart;
	var res = {};
	if (obj && typeof obj == "object") {
		res = obj;
	} else if (typeof obj === "boolean") {
		return (target.gaplines = obj);
	} else {
		res.color = obj;
	}
	if (!res.color && !res.pattern && !res.fillMountain) res = null;
	if (res && res.pattern)
		res.pattern = CIQ.borderPatternToArray(res.width, res.pattern);
	if (res && res.width <= 0) res.width = null;
	target.gaplines = res;
};

/**
 * An object that describes how the renderer should draw a specific part of the chart as
 * generated and returned by {@link CIQ.ChartEngine~colorFunction}.
 *
 * @typedef {object} CIQ.ChartEngine~colorObject
 * @property {string} color Any string value that can be interpreted by the canvas context.
 * @property {array} pattern Description of the pattern in an on/off value description.
 * @property {number} width Width in pixels in which the pattern should be drawn.
 */

/**
 * A function describing the color to use for drawing a specific part of the chart.
 *
 * Should always return a {@link CIQ.ChartEngine~colorObject} describing how you would like the
 * chart to draw the quote.
 *
 * @param {CIQ.ChartEngine} stx The chart engine.
 * @param {CIQ.ChartEngine~OHLCQuote} quote Specific quote to be drawn with the returned color
 * 		object.
 * @param {object} parameters Any parameters used by your color function.
 * @return {CIQ.ChartEngine~colorObject} A color object.
 *
 * @callback CIQ.ChartEngine~colorFunction
 */

/**
 * @callback CIQ.Renderer~colorFunction
 * @see CIQ.ChartEngine~colorFunctionnew
 */

/**
 * Generates a function used to return the color and pattern of a line chart over a gap area.
 * A gap is an area where the value for the plotted field is null, undefined, or missing.
 *
 * See {@link CIQ.ChartEngine#setGapLines}.
 *
 * @param  {string} [symbol] Symbol of the series
 * @param  {string} [field]	Field to plot, usually Close
 * @param {object} [normal] Normal definition object containing color, pattern and width.  If only color is required, this may be set directly to the color string.
 * @param {string} [normal.color] A color on the canvas palette to use for normal, non-gap plot
 * @param {array} [normal.pattern] Pattern to use as alternative to solid line for normal, non-gap plot, in array format, e.g. [1,2,3,2]
 * @param {number} [normal.width] Line with for normal plot, in pixels
 * @param {object} [gaps] Gaps definition object containing color, pattern and width.  If only color is required, this may be set directly to the color string. If no gaps should be filled, leave out or set to false.
 * @param {string} [gaps.color] A color on the canvas palette to use for gap plot
 * @param {array} [gaps.pattern] Pattern to use as alternative to solid line for gap plot, in array format, e.g. [1,2,3,2]
 * @param {number} [gaps.width] Line with for gap plot, in pixels
 * @param {function} [colorFunction] Function to apply to plot to determine colors, for normal, non-gap portion
 * @return {function} A function for generating color and pattern for the entire chart.
 * @memberof CIQ.ChartEngine
 * @private
 * @since 5.1.0 Changed signature, added width support.
 */
CIQ.ChartEngine.prototype.getGapColorFunction = function (
	symbol,
	field,
	normal,
	gaps,
	colorFunction
) {
	if (typeof normal != "object") normal = { color: normal };
	return function (stx, quote, isGap) {
		var myColor = colorFunction ? colorFunction(stx, quote, isGap) : normal;
		if (myColor.color) myColor = myColor.color; // in case the colorFunction returns an object
		var q = quote[symbol];
		if (!q && q !== 0) q = quote[field];
		if (!isGap && (q || q === 0)) {
			return {
				color: myColor,
				pattern: normal.pattern,
				width: normal.width
			};
		}
		if (!gaps) return null; // no color is returned if no gaps are needed.
		if (typeof gaps != "object") {
			if (typeof gaps == "string") gaps = { color: gaps };
			else gaps = {};
		}
		return {
			color: gaps.color || myColor,
			pattern: gaps.pattern || normal.pattern,
			width: gaps.width || normal.width
		};
	};
};

/**
 * <span class="animation">Animation Loop</span>
 *
 * Draws a single frame of a line chart.
 *
 * This method should rarely if ever be called directly.
 * Use {@link CIQ.Renderer.Lines},  {@link CIQ.ChartEngine#setChartType} or {@link CIQ.ChartEngine#addSeries} instead.
 *
 * Any parameters from {@link CIQ.Renderer#attachSeries} or {@link CIQ.ChartEngine#addSeries}
 * will be passed on to this method and are valid when directly calling it from within a [study display function of a Custom Study]{@tutorial Using and Customizing Studies - Creating New Studies}.
 *
 * Uses CSS style `stx_line_chart` to control width and color of line charts, unless `params` are set.
 *
 * The default color function for the colored line chart uses the following CSS styles:
 * - `stx_line_up`		- Color of the uptick portion of the line
 * - `stx_line_down`	- Color of the downtick portion of the line
 *
 * @param  {CIQ.ChartEngine.Panel} panel The panel on which to draw the line chart
 * @param  {string} style	The style selector which contains the styling for the bar (width and color)
 * @param  {function} [colorFunction]	A function which accepts an CIQ.ChartEngine and quote as its arguments and returns the appropriate color for drawing that mode.
                    Returning a null will skip that bar.  If not passed as an argument, will use a default color.
 * @param  {object} [params]	Listing of parameters to use when plotting the line chart.
 * @param {boolean} [params.skipTransform] If true then any transformations (such as comparison charting) will not be applied
 * @param {boolean} [params.label] If true then the y-axis will be marked with the value of the right-hand intercept of the line
 * @param {boolean} [params.noSlopes] If set, then the chart will draw horizontal bars with no vertical lines.
 * @param {boolean} [params.step] If set, then the chart will resemble a step chart.  Horizontal lines will begin at the center of the bar.
 * @param {number} [params.tension] Tension for splining.
 * @param {boolean} [params.highlight] If set then line will be twice as wide.
 * @param {string} [params.color] The color for the line. Defaults to CSS style
 * @param {string} [params.pattern] The pattern for the line ("solid","dashed","dotted"). Defaults to CSS style
 * @param {number} [params.width] The width in pixels for the line. Defaults to CSS style
 * @param {object|boolean|string} [params.gapDisplayStyle] Gap object as created by {@link CIQ.ChartEngine#setGapLines}. If not set `chart.gaplines` will be used.
 * @param {boolean} [params.labelDecimalPlaces] Specifies the number of decimal places to print on the label. If not set then it will match the y-axis.
 * @param {Set} [params.tickFilter] A subset of ticks to plot.
 * @param {boolean} [params.returnObject] Set to true for return value of the function to be object as described in doc below, otherwise returns only array of colors used.
 * @return {object} Data generated by the plot, such as colors used if a colorFunction was passed, and the vertices of the line (points).
 * @memberof CIQ.ChartEngine
 * @tsdeclaration
 *   public drawLineChart(
 *   panel: CIQ.ChartEngine.Panel,
 *   style: string,
 *   colorFunction?: Function,
 *   params?: {
 *     skipTransform?: boolean,
 *     label?: boolean,
 *     noSlopes?: boolean,
 *     step?: boolean,
 *     tension?: number,
 *     highlight?: boolean,
 *     color?: string,
 *     pattern?: string,
 *     width?: number,
 *     gapDisplayStyle?: object|boolean|string,
 *     labelDecimalPlaces?: boolean,
 *     tickFilter?: Set<number>,
 *     returnObject?: boolean
 *   }
 * ): object
 * @since
 * - 15-07-01 Changed signature from `chart` to `panel`.
 * - 3.0.0 Added `params`.
 * - 5.2.0 `params.gaps` has been deprecated and replaced with `params.gapDisplayStyle`.
 * - 6.0.0 `params.gapDisplayStyle` can be set to false to suppress all gap drawing.
 * - 8.7.0 Added `params.tickFilter`.
 */
CIQ.ChartEngine.prototype.drawLineChart = function (
	panel,
	style,
	colorFunction,
	params
) {
	var chart = this.chart,
		context = chart.context,
		lineStyle = chart.lineStyle || {};
	var c = this.canvasStyle(style);
	if (!params) params = {};
	this.startClip(panel.name);
	var width = params.width || lineStyle.width || c.width;
	if (width && parseInt(width, 10) <= 25) {
		context.lineWidth = Math.max(1, CIQ.stripPX(width));
	} else {
		context.lineWidth = 1;
	}
	params.pattern = params.pattern || lineStyle.pattern || c.borderTopStyle;
	params.pattern = CIQ.borderPatternToArray(context.lineWidth, params.pattern);
	this.canvasColor(style);
	var color = params.color || lineStyle.color;
	if (color) {
		if (color == "auto") color = this.defaultColor;
		if (params.opacity && params.opacity !== 1)
			color = CIQ.hexToRgba(CIQ.colorToHex(color), parseFloat(params.opacity));
		context.strokeStyle = color;
	}
	params.skipProjections = true;
	var field = params.field || chart.defaultPlotField; // usually the series
	var plotField = params.subField || chart.defaultPlotField || "Close"; // usually the field within the series
	var gaps = params.gapDisplayStyle;
	if (!gaps && gaps !== false) gaps = params.gaps;
	if (!gaps && gaps !== false) gaps = chart.gaplines;
	if (!gaps) gaps = "transparent";
	params.gapDisplayStyle = gaps;
	var myColorFunction = this.getGapColorFunction(
		field,
		plotField,
		{
			color: context.strokeStyle,
			pattern: params.pattern,
			width: context.lineWidth
		},
		gaps,
		colorFunction
	);
	if (panel.chart.tension) params.tension = panel.chart.tension;
	var rc = this.plotDataSegmentAsLine(field, panel, params, myColorFunction);
	if (!rc.colors.length) rc.colors.push(context.strokeStyle);
	context.lineWidth = 1;
	this.endClip();

	return params.returnObject ? rc : rc.colors;
};

/**
 * <span class="animation">Animation Loop</span>
 *
 * Draws a channel chart, shading the areas between a high and the close and between a low and the close.
 *
 * The high, low, and close can be redefined to other fields within the parameters.
 *
 * This method should rarely if ever be called directly. Use {@link CIQ.Renderer.Lines} or {@link CIQ.ChartEngine#setChartType} instead.
 *
 * Any parameters from {@link CIQ.Renderer#attachSeries} or {@link CIQ.ChartEngine#addSeries}
 * will be passed on to this method and are valid when directly calling it from within a [study display function of a Custom Study]{@tutorial Using and Customizing Studies - Creating New Studies}.
 *
 * The high line, low line, and respective shading are controlled by the following styles, unless overridden in the `params`:
 * - `stx_channel_up` - Color of the high line and shading.
 * - `stx_channel_down`	- Color of the low line and shading.

 * The close line color as well as all of the line widths are controlled by the style `stx_line_chart`, unless `params` are set.
 *
 * @param {CIQ.ChartEngine.Panel} panel The panel on which to draw the line chart.
 * @param {function} [colorFunction] A function that accepts a `CIQ.ChartEngine` and quote as its arguments and returns the appropriate color for drawing that mode.
 * Returning a null skips that bar. If not passed as an argument, uses a default color.
 * @param {object} [params]	Listing of parameters to use when plotting the channel chart.
 * @param {boolean} [params.skipTransform] If true, any transformations (such as comparison charting) are applied.
 * @param {boolean} [params.label] If true, the y-axis is marked with the value of the right-hand intercept of the line.
 * @param {boolean} [params.noSlopes] If set, the chart will draw horizontal bars with no vertical lines.
 * @param {boolean} [params.step] If set, the chart will resemble a step chart. Horizontal lines will begin at the center of the bar.
 * @param {number} [params.tension] Tension for splining.
 * @param {boolean} [params.highlight] If set, lines are twice as wide.
 * @param {string} [params.color] The color for the close line. Defaults to CSS style.
 * @param {string} [params.border_color_down] The color for the high line. Defaults to CSS style.
 * @param {string} [params.border_color_up] The color for the low line. Defaults to CSS style.
 * @param {string} [params.pattern] The pattern for the line ("solid","dashed","dotted"). Defaults to CSS style.
 * @param {number} [params.width] The width in pixels for the line. Defaults to CSS style.
 * @param {object} [params.gapDisplayStyle] Gap object as created by {@link CIQ.ChartEngine#setGapLines}. If not set `chart.gaplines` is used.
 * @param {boolean} [params.labelDecimalPlaces] Specifies the number of decimal places to print on the label. If not set, it will match the y-axis.
 * @param  {string} [params.style] The style selector, which contains the styling for the lines (width and color).
 * @param {boolean} [params.returnObject] Set to true for return value of the function to be object as described below, otherwise returns only array of colors used.
 * @return {object} Data generated by the plot, such as colors used if a `colorFunction` was passed, and the vertices of the close line (points).
 * @memberof CIQ.ChartEngine
 * @since 7.3.0
 */
CIQ.ChartEngine.prototype.drawChannelChart = function (
	panel,
	colorFunction,
	params
) {
	var localParams = Object.assign({}, params);
	localParams.color = params.color;
	var rcC = this.drawLineChart(
		panel,
		localParams.style,
		colorFunction,
		localParams
	);
	var upColor =
		localParams.border_color_up || this.getCanvasColor("stx_channel_up");
	var downColor =
		localParams.border_color_down || this.getCanvasColor("stx_channel_down");
	localParams[params.field ? "subField" : "field"] =
		localParams.field_high || "High";
	localParams.color = upColor;
	var rcH = this.drawLineChart(
		panel,
		localParams.style,
		colorFunction,
		localParams
	);
	localParams[params.field ? "subField" : "field"] =
		localParams.field_low || "Low";
	localParams.color = downColor;
	var rcL = this.drawLineChart(
		panel,
		localParams.style,
		colorFunction,
		localParams
	);
	localParams[params.field ? "subField" : "field"] =
		params.subField || this.chart.defaultPlotField || "Close";

	var p,
		topArea = [],
		bottomArea = [];
	for (p = 0; p < rcH.points.length; p += 2)
		topArea.push([rcH.points[p], rcH.points[p + 1]]);
	for (p = 0; p < rcL.points.length; p += 2)
		bottomArea.push([rcL.points[p], rcL.points[p + 1]]);
	var width = this.chart.context.lineWidth / 2;
	for (p = rcC.points.length - 2; p >= 0; p -= 2) {
		topArea.push([rcC.points[p], rcC.points[p + 1] - width]);
		bottomArea.push([rcC.points[p], rcC.points[p + 1] + width]);
	}
	this.startClip(panel.name);
	localParams.color = upColor;
	CIQ.fillArea(this, topArea, localParams);
	localParams.color = downColor;
	CIQ.fillArea(this, bottomArea, localParams);
	this.endClip();

	rcC.colors = rcC.colors.concat(rcH.colors).concat(rcL.colors);

	return params.returnObject ? rcC : rcC.colors;
};

/**
 * Draws a series of connected lines on the canvas. The points are in a straight array for compactness. This is used
 * for instance in the freeform (doodle) drawing tool
 * @param  {array} points		  A series of points in the pattern x0,y0,x1,y1
 * @param  {string} color		   Either a color or a Styles object as returned from {@link CIQ.ChartEngine#canvasStyle}
 * @param  {string} type		   The type of line to draw ("segment","ray" or "line")
 * @param  {external:CanvasRenderingContext2D} [context]		The canvas context. Defaults to the standard context.
 * @param  {boolean|object} [confineToPanel] Panel the line should be drawn in, and not cross through. Or set to 'true' to confine to the main chart panel.
 * @param  {object} [parameters]	 Additional parameters to describe the line
 * @param {string} [parameters.pattern] The pattern for the line ("solid","dashed","dotted")
 * @param {number} [parameters.width] The width in pixels for the line
 * @param {number} [parameters.opacity] Opacity for the line
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.connectTheDots = function (
	points,
	color,
	type,
	context,
	confineToPanel,
	parameters
) {
	if (!parameters) parameters = {};
	if (parameters.pattern == "none") return;
	if (confineToPanel === true) confineToPanel = this.chart.panel;
	if (context === null || typeof context == "undefined")
		context = this.chart.context;
	if (points.length < 4) return;

	var edgeTop = 0;
	var edgeBottom = this.chart.canvasHeight;
	var edgeLeft = 0;
	var edgeRight = this.chart.width;

	if (confineToPanel) {
		edgeBottom = confineToPanel.yAxis.bottom;
		edgeTop = confineToPanel.yAxis.top;
	}

	context.lineWidth = 1.1; // Use 1.1 instead of 1 to get good anti-aliasing on Android Chrome
	if (typeof color == "object") {
		context.strokeStyle = color.color;
		if (color.opacity) context.globalAlpha = color.opacity;
		else context.globalAlpha = 1;
		context.lineWidth = CIQ.stripPX(color.width);
	} else {
		if (!color || color == "auto" || CIQ.isTransparent(color)) {
			context.strokeStyle = this.defaultColor;
		} else {
			context.strokeStyle = color;
		}
	}
	if (parameters.opacity) context.globalAlpha = parameters.opacity;
	if (parameters.lineWidth) context.lineWidth = parameters.lineWidth;
	var pattern = CIQ.borderPatternToArray(context.lineWidth, parameters.pattern);
	context.beginPath();

	for (var i = 0; i < points.length - 2; i += 2) {
		var x0 = points[i];
		var y0 = points[i + 1];
		var x1 = points[i + 2];
		var y1 = points[i + 3];
		if (isNaN(x0) || isNaN(x1) || isNaN(y0) || isNaN(y1)) return;

		var t0 = 0.0,
			t1 = 1.0;
		var xdelta = x1 - x0;
		var ydelta = y1 - y0;
		var p, q, r;

		for (var edge = 0; edge < 4; edge++) {
			if (edge === 0) {
				p = -xdelta;
				q = -(edgeLeft - x0);
			}
			if (edge == 1) {
				p = xdelta;
				q = edgeRight - x0;
			}
			if (edge == 2) {
				p = -ydelta;
				q = -(edgeTop - y0);
			}
			if (edge == 3) {
				p = ydelta;
				q = edgeBottom - y0;
			}
			r = q / p;

			if ((y1 || y1 === 0) && p === 0 && q < 0) {
				return false; // Don't draw line at all. (parallel horizontal line outside)
			}

			if (p < 0) {
				if (r > t1) return false;
				// Don't draw line at all.
				else if (r > t0) t0 = r; // Line is clipped!
			} else if (p > 0) {
				if (r < t0) return false;
				// Don't draw line at all.
				else if (r < t1) t1 = r; // Line is clipped!
			}
		}

		var x0clip = x0 + t0 * xdelta;
		var y0clip = y0 + t0 * ydelta;
		var x1clip = x0 + t1 * xdelta;
		var y1clip = y0 + t1 * ydelta;

		try {
			context.setLineDash(pattern && pattern.length ? pattern : []);
			context.moveTo(x0clip, y0clip);
			context.lineTo(x1clip, y1clip);
		} catch (e) {
			//alert(x0clip + ":" + y0clip + " " + x1clip + ":" + y1clip);
		}
	}
	context.stroke();
	context.closePath();
	context.globalAlpha = 1;
	context.lineWidth = 1;
};

// confineToPanel is not used because currently we are splining after the drawing is complete.
// should that change we will need to implement it

/**
 * Draws a series of points and splines (smooths the curve) those points.
 *
 * This is uses for drawings, not series.
 * @param  {array} points		  A series of points in the pattern x0,y0,x1,y1
 * @param {number} tension Spline tension (0-1). Set to negative to not spline.
 * @param  {string} color		   Either a color or a Styles object as returned from {@link CIQ.ChartEngine#canvasStyle}
 * @param  {string} type		   The type of line to draw ("segment","ray" or "line")
 * @param  {external:CanvasRenderingContext2D} [context]		The canvas context. Defaults to the standard context.
 * @param  {boolean|object} [confineToPanel] Panel the line should be drawn in, and not cross through. Or set to 'true' to confine to the main chart panel.
 * @param  {object} [parameters]	 Additional parameters to describe the line
 * @param {string} [parameters.pattern] The pattern for the line ("solid","dashed","dotted")
 * @param {number} [parameters.width] The width in pixels for the line
 * @param {number} [parameters.opacity] Opacity for the line
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.plotSpline = function (
	points,
	tension,
	color,
	type,
	context,
	confineToPanel,
	parameters
) {
	if (!parameters) parameters = {};
	if (parameters.pattern == "none") return;
	if (confineToPanel === true) confineToPanel = this.chart.panel;
	if (context === null || typeof context == "undefined")
		context = this.chart.context;

	context.save();

	context.lineWidth = 1.1; // Use 1.1 instead of 1 to get good anti-aliasing on Android Chrome
	if (typeof color == "object") {
		context.strokeStyle = color.color;
		if (color.opacity) context.globalAlpha = color.opacity;
		else context.globalAlpha = 1;
		context.lineWidth = CIQ.stripPX(color.width);
	} else {
		if (!color || color == "auto" || CIQ.isTransparent(color)) {
			context.strokeStyle = this.defaultColor;
		} else {
			context.strokeStyle = color;
		}
	}
	if (parameters.opacity) context.globalAlpha = parameters.opacity;
	if (parameters.lineWidth) context.lineWidth = parameters.lineWidth;
	var pattern = CIQ.borderPatternToArray(context.lineWidth, parameters.pattern);
	if (parameters.pattern && context.setLineDash) {
		context.setLineDash(pattern);
		context.lineDashOffset = 0; //start point in array
	}

	context.beginPath();
	splinePlotter.plotSpline(points, tension, context);
	context.stroke();
	context.closePath();

	context.restore();
};

/**
 * Creates watermarked text on the canvas.
 *
 * See {@link CIQ.ChartEngine#watermark} to create a watermark relative to a particular panel.
 *
 * CSS style stx_watermark defines the watermark (opacity of .5 is automatically applied)
 *
 * **Note** that the watermark will not persist unless called from within the animation loop (study display function, for example).
 * As such, it may be necessary to use a `prepend` to the `draw` function to create persistence. See example section.
 * @param  {external:CanvasRenderingContext2D} context [description]
 * @param  {number} x		X position on canvas
 * @param  {number} y		Y position on canvas
 * @param  {string} text	The text to watermark
 * @memberof CIQ.ChartEngine
 * @example
  CIQ.ChartEngine.prototype.prepend("draw",function(){
       // create persistence by forcing it  be called in every animation frame.
       rawWatermark(stxx.chart.context,20,30,stxx.chart.symbol);
  });
 */
CIQ.ChartEngine.prototype.rawWatermark = function (context, x, y, text) {
	this.canvasFont("stx_watermark", context);
	context.fillStyle = this.defaultColor;
	context.globalAlpha = 0.5;
	this.chart.context.textBaseline = "alphabetic";
	context.fillText(text, x, y);
	context.globalAlpha = 1;
};

/**
 * Creates watermarked text relative to a panel on the canvas.
 *
 * Uses CSS style `stx_watermark` to set the text size and color.
 *
 * **Note** The watermark does not persist unless called from within the animation loop (study display function,
 * for example). As such, it may be necessary to use a `prepend` to the `draw` function to create persistence.
 * See example section.
 *
 * @param {string} panel The name of the panel.
 * @param {object} [config] Parameters for the request.
 * @param {string} [config.h] Specifies horizontal placement of the watermark &mdash; "left", "right", or "center".
 * @param {string} [config.v] Specifies vertical placement of the watermark &mdash "top", "bottom", or "middle".
 * @param {string} [config.text] The text of the watermark.
 * @param {string} [config.hOffset]	Horizontal offset in pixels of the upper left corner of the watermark from the
 * 		left or right margin.
 * @param {string} [config.vOffset]	Vertical offset in pixels of the upper left corner of the watermark from the
 * 		top or bottom margin.
 * @param {external:CanvasRenderingContext2D} [config.context] The drawing canvas context. If omitted,
 * 		`this.chart.context` is used.
 * @memberof CIQ.ChartEngine
 * @example
  CIQ.ChartEngine.prototype.prepend("draw",function(){
       // create persistence by forcing it  be called in every animation frame.
       stxx.watermark("chart",{h:"center",v:"middle",text:stxx.chart.symbol});
  });
 * @since 7.4.0 Added the `config.context` parameter.
 */
CIQ.ChartEngine.prototype.watermark = function (panel, config) {
	if (config && typeof config != "object") {
		// Handle legacy argument list implementation
		config = {
			h: arguments[1],
			v: arguments[2],
			text: arguments[3]
		};
	}
	config = {
		// set defaults
		h: config.h || "left",
		v: config.v || "bottom",
		text: config.text || "",
		hOffset: config.hOffset == 0 ? 0 : config.hOffset || 10,
		vOffset: config.vOffset == 0 ? 0 : config.vOffset || 20,
		context: config.context || this.chart.context
	};

	var context = config.context;
	if (!context) return;
	var c = this.panels[panel];
	if (!c || c.hidden) return;

	var y = c.yAxis.bottom - config.vOffset;
	if (config.v == "top") y = c.top + config.vOffset;
	else if (config.v == "middle") y = (c.top + c.yAxis.bottom) / 2;

	context.save();
	this.canvasFont("stx_watermark", context);
	this.canvasColor("stx_watermark", context);
	context.textBaseline = "alphabetic";

	var x = c.left + config.hOffset;
	if (config.h == "right") x = c.right - config.hOffset;
	else if (config.h == "center") {
		x = (c.right + c.left - context.measureText(config.text).width) / 2;
	}

	context.globalAlpha = 0.5;
	if (this.highlightedDraggable) context.globalAlpha *= 0.3;
	context.fillText(config.text, x, y);
	context.restore();
};

/**
 * Displays errors on the center bottom of the canvas.
 *
 * In the event that there are multiple errors (caused by calling the method multiple times), they will get vertically stacked.
 *
 * **Note**: Because `displayErrorAsWatermark` leverages {@link CIQ.ChartEngine#watermark} to draw errors on the canvas,
 * the errors will not persist unless added from within the animation loop. See {@link CIQ.ChartEngine#watermark} for more info.
 *
 * @param {string} panelKey The name of the panel
 * @param {string} error The error text to draw on the canvas
 * @memberof CIQ.ChartEngine
 * @since 7.3.0
 */
CIQ.ChartEngine.prototype.displayErrorAsWatermark = function (panelKey, error) {
	if (!error) return;
	if (!panelKey) panelKey = "chart";

	var panelObj = this.panels[panelKey];
	if (!panelObj || panelObj.hidden) return;

	var panelState = panelObj.state;
	if (!panelState) panelObj.state = panelState = {};

	var studyErrors = panelState.studyErrors;
	if (!studyErrors) panelState.studyErrors = studyErrors = new Set();

	if (studyErrors.has(error)) return;

	var offsetValue = panelState.watermarkOffset || 10;
	var padding = 10; // to separate error messages
	var errorHeight = this.getCanvasFontSize("stx_watermark");

	// make sure chartControls doesn't overlay on top of the errors
	if (this.chart && this.chart.chartControls) {
		var yAxisBottom = panelObj.yAxis.bottom;
		var chartControls = this.chart.chartControls;
		var textBottom = yAxisBottom - offsetValue;
		var textTop = textBottom - errorHeight;
		if (
			(textBottom > chartControls.offsetTop &&
				textBottom < chartControls.offsetTop + chartControls.offsetHeight) ||
			(textTop > chartControls.offsetTop &&
				textTop < chartControls.offsetTop + chartControls.offsetHeight)
		) {
			offsetValue = yAxisBottom - chartControls.offsetTop + padding;
		}
	}

	// add new error after offset calculations so it doesn't count itself
	studyErrors.add(error);

	var watermarkParams = {
		h: "center",
		v: "bottom",
		text: error,
		vOffset: offsetValue
	};

	offsetValue += errorHeight + padding;
	panelState.watermarkOffset = offsetValue;

	this.watermark(panelKey, watermarkParams);
};

/**
 * <span class="injection">INJECTABLE</span>
 * <span class="animation">Animation Loop</span>
 *
 * Displays the chart by calling the appropriate rendering functions based on the <a href="CIQ.ChartEngine.html#layout%5B%60chartType%60%5D">CIQ.ChartEngine.layout.chartType</a>.
 *
 * @param  {CIQ.ChartEngine.Chart} chart The chart to render
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias displayChart
 * @since
 * - 4.0.0 If no Open price is available, a candle will draw as a dash at the Close price.
 * - 5.1.0 Reduced to injections only for backwards compatibility, main chart is drawn with renderers now.
 */
CIQ.ChartEngine.prototype.displayChart = function (chart) {
	if (this.runPrepend("displayChart", arguments)) return;
	this.rendererAction(chart, "main");
	this.runAppend("displayChart", arguments);
};

};


let __js_core_engine_styles_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Clones a style from a style object (obtained from getComputedStyle). Any styles are converted to camel case. This method automatically
 * converts from browsers that store styles as numeric arrays rather than as property objects.
 * @param  {object} styleObject A style object derived from getComputedStyle
 * @return {object}	A new style object that will match properties
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.cloneStyle = function (styleObject) {
	var rc = {};
	var nativeCamelSupport = false;
	function capitalize(g) {
		return g[1].toUpperCase();
	}
	for (var i in styleObject) {
		var v = styleObject[i];
		// do *not* check styleObject["backgroundAttachment"]. Android browsers return bogus results.
		// instead we iterate through the object
		if (i == "backgroundAttachment") nativeCamelSupport = true;

		// modern browsers contain both camel and hyphenated. We can avoid the camelCase conversion
		// logic to save a little bit of startup time
		if (nativeCamelSupport) {
			if (v && v.constructor == String && isNaN(i)) {
				rc[i] = v;
			}
		} else if (!isNaN(i)) {
			// old android browsers fall into here
			var x = styleObject.getPropertyValue(v);
			if (x) {
				//var vcc=v.replace(CIQ.camelCaseRegExp, function (g) { return g[1].toUpperCase(); })
				// much more efficient camel case conversion algorithm
				v = v.split("-");
				var ii = 0,
					jj = v.length;
				var vcc = v[0];
				while (++ii < jj) {
					vcc += v[ii].charAt(0).toUpperCase() + v[ii].slice(1);
				}
				rc[vcc] = x;
			}
		} else {
			// old internet explorer falls into here
			var icc = i.replace(CIQ.camelCaseRegExp, capitalize);
			rc[icc] = v;
		}
	}
	return rc;
};

/**
 * Returns an object containing the class style given a css class name (used by plotLine() for instance).
 *
 * A caching mechanism is used for performance.
 * If styles are changed dynamically then use {@link CIQ.ChartEngine#clearStyles} to reset.
 *
 * Also see {@link CIQ.ChartEngine#setStyle}.
 *
 * @param  {string} className The CSS class name to get the styles
 * @return {object}			  An object containing each style, in camel case.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.canvasStyle = function (className) {
	var s = this.styles[className];
	if (!s) {
		var div = document.createElement("div"); // Create a dummy div
		div.className = className;
		this.container.appendChild(div);
		var styles = getComputedStyle(div);
		s = this.styles[className] = this.cloneStyle(styles);
		this.container.removeChild(div);
		if (!styles) {
			// css not initialized, possibly hidden iframe in firefox
			this.styles[className] = null;
		}
	}
	return s;
};

/**
 * Detects if a string is a valid CSS color and if so returns that string.
 *
 * Otherwise it returns a style object, assuming that the string is a classname.
 * @param  {string} str Either a color or a className
 * @return {object}		Either the color or a class object
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.colorOrStyle = function (str) {
	if (str.indexOf("#") != -1) return str;
	if (str.indexOf("(") != -1) return str; // rgb() or rgba()
	if (str == "transparent") return str;
	return this.canvasStyle(str);
};

/**
 *	Call this to remove all of the loaded canvas styles, for instance after loading a new css file.
 *
 * Also see  {@link CIQ.ChartEngine#setStyle} and  {@link CIQ.ChartEngine#canvasStyle}.
 *	@memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.clearStyles = function () {
	this.styles = {};
	this.defaultColor = "";
};

/**
 * Convenience method to programmatically set or change a style used by a chart **canvas** element.
 *
 * Canvas styling using this method is limited to color and font attributes.
 *
 * See {@link CIQ.ChartEngine#canvasFont} for important details on proper style setting for fonts.
 *
 * To see immediate results, call {@link CIQ.ChartEngine#draw} once this method is used.
 *
 * Primarily used in the {@link CIQ.ThemeHelper} to programmatically override defaults CSS colors to create custom themes.
 *
 * This method **will not affect HTML containers** directly referencing a CSS style; such as menu items or [chart controls]{@link CIQ.ChartEngine.htmlControls}.
 * Those will need to be managed by the CSS, or via javaScrit directly altering the container's style object.
 * For example, the crosshair y-axis floating label is a canvas drawings generated by the {@link CIQ.ChartEngine#createYAxisLabel} canvas rendering function,
 * so you can do something like this:
 * - `stxx.setStyle("stx-float-price", "color", "red");`
 *
 * But the crosshair x-axis floating label is an html div container part of the [chart controls]{@link CIQ.ChartEngine.htmlControls}.
 * So this will require something like this instead:
 * - `stxx.controls.floatDate.style.color='red';`
 *
 * For more details on customizing colors in the chart see {@tutorial Chart Styles and Types}. Also see  {@link CIQ.ChartEngine#clearStyles}
 *
 * @param  {string} obj The object whose style you wish to change (stx_grid, stx_xaxis, etc)
 * @param  {string} attribute The style name of the object you wish to change. It will accept hyphenated or camel case formats.
 * @param  {string} value The value to assign to the attribute
 * @memberof CIQ.ChartEngine
 * @example
 * stxx.setStyle("stx_candle_up","borderLeftColor","green");
 * stxx.setStyle("stx_candle_down","borderLeftColor","red");
 * stxx.draw();
 * @example
 * stxx.setStyle("stx_yaxis", "fontFamily", "Arial");
 * stxx.setStyle("stx_xaxis", "fontFamily", "Arial");
 * stxx.setStyle("stx_yaxis", "fontSize", "15px");
 * stxx.setStyle("stx_xaxis", "fontSize", "15px");
 */
CIQ.ChartEngine.prototype.setStyle = function (obj, attribute, value) {
	if (!this.styles[obj]) {
		this.canvasStyle(obj);
	}
	if (!this.styles[obj]) this.styles[obj] = {};
	this.styles[obj][CIQ.makeCamelCase(attribute)] = value;
};

/**
 * The built-in 2D rendering context for the drawing surface of a canvas.
 * @external CanvasRenderingContext2D
 * @see [CanvasRenderingContext2D]{@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D}
 * 		at the Mozilla Developer Network.
 */

/**
 * Sets font for the canvas, given a css class name.
 *
 * Call this before drawing on the canvas.
 *
 * The canvas font will be set using the CSS `font-style` + `font-weight` + `font-size` + `font-family`.
 *
 * **Note** that the canvas font will use the `font-family` CSS property, **NOT** the combined `font` CSS property.
 * Be aware of this when using {@link CIQ.ChartEngine#setStyle}
 *
 * Also note that numeric font-weights are not honored in the canvas in Chrome.
 *
 * @param  {string} className The name of the CSS class to pull font from
 * @param  {external:CanvasRenderingContext2D} ctx		 An HTML Context
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.canvasFont = function (className, ctx) {
	if (!ctx) ctx = this.chart.context;
	var style = this.canvasStyle(className);
	if (!style) return;

	var result =
		style.fontStyle +
		" " +
		style.fontWeight +
		" " +
		style.fontSize +
		" " +
		style.fontFamily;
	if (result.indexOf("undefined") == -1) {
		ctx.font = result;
	} else {
		this.styles[className] = null;
		console.log("bad css style for class " + className);
	}
};

/**
 * Sets color and globalAlpha (opacity) for the canvas, given a css class name.
 *
 * Call this before drawing on the canvas.
 *
 * Also see {@link CIQ.ChartEngine#setStyle}.
 *
 * @param  {string} className A CSS style. Supports "color" and "opacity"
 * @param  {external:CanvasRenderingContext2D} [ctx]	   An HTML Context
 * @example
 * stxx.canvasColor("myStyle");
 * @memberof CIQ.ChartEngine
 * @since 4.0.0 Allow color:"transparent" to pass through and not use defaultColor.  Instead, use defaultColor if there is no style.color.
 */
CIQ.ChartEngine.prototype.canvasColor = function (className, ctx) {
	if (!ctx) ctx = this.chart.context;
	var style = this.canvasStyle(className);
	if (!style) return;
	var color = style.color;
	if (!color) color = this.defaultColor;
	ctx.globalAlpha = 1;
	ctx.fillStyle = color;
	ctx.strokeStyle = color;
	var opacity = style.opacity;
	if (typeof opacity != "undefined") ctx.globalAlpha = opacity;
};

/**
 * Returns the font size defined by the requested class name.
 *
 * Defaults to 12 if undefined. Use this to determine vertical heights so that lettering isn't clipped.
 * @param  {string} className Class name
 * @return {number}			  The font size (px is stripped)
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.getCanvasFontSize = function (className) {
	var s = this.canvasStyle(className);
	var fs = s.fontSize;
	if (!fs) fs = "12";
	return parseInt(CIQ.stripPX(fs), 10);
};

/**
 * Returns the canvas color specified in the class name.
 *
 * @param  {string} className The class name
 * @return {string}			  The color specified (May be undefined if none specified)
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.getCanvasColor = function (className) {
	var s = this.canvasStyle(className);
	return s.color;
};

/**
 * <span class="animation">Animation Loop</span>
 *
 * Determines the default color for lines and studies drawn on the screen. This is black unless
 * the background color of the chart has a "value" greater than 65%.
 * The result is that this.defaultColor contains the default color.
 * @memberof CIQ.ChartEngine
 */
CIQ.ChartEngine.prototype.getDefaultColor = function () {
	this.defaultColor = "#000000";
	var bgColor = null;
	var div = this.chart.container;
	while (!bgColor || CIQ.isTransparent(bgColor)) {
		var cStyle = getComputedStyle(div);
		if (!cStyle) return;
		bgColor = cStyle.backgroundColor;
		if (CIQ.isTransparent(bgColor)) bgColor = "transparent";
		div = div.parentNode;
		if (!div || !div.tagName) break;
	}
	if (bgColor) {
		if (bgColor == "transparent") bgColor = "#FFFFFF";
		this.containerColor = bgColor;
		if (!CIQ.isTransparent(bgColor)) {
			var hsv = CIQ.hsv(bgColor);
			var v = hsv[2];
			if (v > 0.65) this.defaultColor = "#000000";
			else this.defaultColor = "#FFFFFF";
		} else {
			this.defaultColor = "#000000";
		}
	} else {
		this.containerColor = "#FFFFFF";
	}
};

};


let __js_core_engine_xaxis_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Defines an object used for rendering the X-axis on the chart, which can be adjusted immediately after declaring your `new CIQ.ChartEngine();`
 * The CIQ.ChartEngine.XAxis object is created by and part of the {@link CIQ.ChartEngine.Chart} object and is used on the main chart panel only.
 * There is only one x-axis per chart container.
 *
 * Colors and fonts for the x-axis can be controlled by manipulating the CSS.
 * You can override the `stx_xaxis` class to change the font or colors.
 *
 * Also see:
 * - {@link CIQ.ChartEngine#axisBorders}
 * - {@link CIQ.ChartEngine#xAxisAsFooter}
 * - {@link CIQ.ChartEngine#xaxisHeight}
 *
 * For full customization instructions see:
 * - {@tutorial Custom X-Axis}
 * - {@link CIQ.ChartEngine.AdvancedInjectable#createXAxis}
 * - {@link CIQ.ChartEngine#createSpacedDateXAxis}
 *
 * Example: stxx.chart.xAxis
 *
 * @constructor
 * @name  CIQ.ChartEngine.XAxis
 * @param {object} init Object containing custom values for X-axis members
 * @example
 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), layout:{"candleWidth": 16, "crosshair":true}});
 * stxx.chart.xAxis.formatter=formatFunction;
 */
CIQ.ChartEngine.XAxis = function (init) {
	for (var field in init) this[field] = init[field];
};

/**
 * Object containing functions used to rank the x-axis labels into "levels", keyed off the requested interval.
 * The lower the level, the more priority the label has in being drawn.  When [CIQ.ChartEngine.drawXAxis]{@link CIQ.ChartEngine.AdvancedInjectable#drawXAxis}
 * draws the x-axis labels, any collisions between labels will be settled using this priority.
 *
 * This object may be partially or completely overridden to produce custom text and results.
 * Within each function there is an ability to customize the x-axis label itself.
 * - You may set the `text` of a label to customize how the label text should look.  If it is not set, the preset `raw` value is used.
 * - You may set a `boundaryOnlyText` of a label to specify how the label text should look if only boundaries are displayed.
 * - You may also set the `alwaysBoundary` property of a boundary label to true, to indicate that it should act as a boundary
 *   even when only boundaries are rendered (the rest of the boundaries are rendered as lines).
 * of the same level when the axis is condensed to the point where only boundaries are displayed.
 * - You may set the `suppress` property for any label to force it to not display even if there is room to do so.
 *
 * **Note:** For a "line" type label, the level will automatically be increased by {@link CIQ.ChartEngine.XAxis.lineBaseLevel}
 * downstream. Therefore, avoid setting levels set above this value in the functions within this object, as it may cause
 * collisions with other grid type values.
 *
 * Each value is an optional function which takes the following parameters:
 * - label – {@link CIQ.ChartEngine.XAxisLabel} object
 * - record – x-axis array record containing dataset information
 * - market – The market class if available
 * - stx – The chart engine instance
 *
 * To not assign any property to a label for a given interval, set its value to `null`.
 *
 * Please see {@tutorial Custom X-Axis} for more detail and for some examples of
 * how to customize the functions in this object.
 *
 * @static
 * @memberof CIQ.ChartEngine.XAxis
 * @since 8.4.0
 */
CIQ.ChartEngine.XAxis.setPropertiesForInterval = {
	year: (label, record, market, stx) => {
		label.level = Number(label.raw) % 5 === 0 ? 0 : 1; // Decade / Year
	},
	month: (label, record, market, stx) => {
		const t = Number(label.raw),
			d = record.DT,
			y = d.getFullYear();
		// A January of year divisible by 5 gets the highest ranking, followed by any other January.
		if (t === 0) label.level = y % 5 === 0 ? 0 : 1;
		// Months beginning a quarter get the next highest priority, followed finally by any other month
		else label.level = t % 3 === 0 ? 2 : 3;

		label.text = CIQ.monthAsDisplay(t, false, stx);
		if (label.grid === "boundary") {
			// Display month only (no year) if only boundaries are displayed
			// but display year only for Jan
			label.boundaryOnlyText = t ? label.text : y.toString();
			// Otherwise display month and year
			label.text += " '" + y.toString().substring(2);
			if (!t) label.alwaysAsBoundary = true;
		}
	},
	week: null, // covered by "day"
	day: (label, record, market, stx) => {
		const d = record.DT,
			day = d.getDay(),
			date = d.getDate(),
			month = d.getMonth(),
			year = d.getFullYear();
		if (label.grid === "boundary") {
			// First market day of month
			if (market && market.isFirstMarketDayOfMonth(d)) {
				const displayMonth = CIQ.monthAsDisplay(month, false, stx);
				label.text = displayMonth + " '" + (year % 100); // display month and year
				label.boundaryOnlyText = month ? displayMonth : year.toString(); // display month only, except Jan (display year)
				label.alwaysAsBoundary = true; // priority over other boundaries
				label.level = month ? (month % 3 === 0 ? 1 : 2) : 0;
				return;
			}
			if (stx.internationalizer) {
				label.text = stx.internationalizer.monthDay.format(d);
			} else {
				label.text = month + 1 + "/" + date;
			}
		}

		// Rest of days of month (not first)
		// Beginning of week highest priority
		if ((market && market.isFirstMarketDayOfWeek(d)) || (!market && day === 0))
			label.level = 4;
		// ... then rest of days ...
		else if (day > 0) label.level = 6;
		// ... Sun having lowest priority
		else label.level = 7;
	},
	minute: (label, record, market, stx) => {
		const d = record.DT;
		const rawShiftedToMarketOpen =
			Number(label.raw) + (label.marketOpenOffset || 0);
		const intervals = [720, 360, 120, 60, 30, 15, 5];
		label.level = intervals.length; // default to highest level
		// set to a lower level if evenly divisible by number in array (adjusted for timezones)
		for (let i = 0; i < intervals.length; i++) {
			if (rawShiftedToMarketOpen % intervals[i] === 0) {
				label.level = i;
				break;
			}
		}
		label.text = CIQ.timeAsDisplay(record.DT, stx, CIQ.MINUTE);
		if (label.grid === "boundary") {
			if (rawShiftedToMarketOpen === 0) {
				label.alwaysAsBoundary = true; // priority over other boundaries
				if (stx.internationalizer) {
					label.text = stx.internationalizer.monthDay.format(d);
				} else {
					label.text = d.getMonth() + 1 + "/" + d.getDate();
				}
			}
		}
	},
	second: (label, record, market, stx) => {
		const intervals = [30, 15, 5];
		label.level = intervals.length;
		for (let i = 0; i < intervals.length; i++) {
			if (Number(label.raw) % intervals[i] === 0) {
				label.level = i;
				break;
			}
		}
		label.text = label.raw + "s";
		if (label.grid === "boundary" && label.raw == 0) {
			const d = record.DT;
			label.alwaysAsBoundary = true; // priority over other boundaries
			if (!d.getHours()) {
				if (stx.internationalizer) {
					label.text = stx.internationalizer.monthDay.format(d);
				} else {
					label.text = d.getMonth() + 1 + "/" + d.getDate();
				}
			} else {
				label.text = CIQ.timeAsDisplay(d, stx, CIQ.MINUTE);
			}
		}
	},
	millisecond: (label, record, market, stx) => {
		const intervals = [250, 50, 10];
		label.level = intervals.length;
		for (let i = 0; i < intervals.length; i++) {
			if (Number(label.raw) % intervals[i] === 0) {
				label.level = i;
				break;
			}
		}
		label.text = label.raw + "ms";
	},
	tick: (label, record, market, stx) => {
		label.text = CIQ.timeAsDisplay(record.DT, stx, CIQ.MILLISECOND);
	}
};

/**
 * Maximum number of supported levels for the x-axis labels in each grid type.
 * The value of this property is the lowest level a "line" grid type can have.
 * When assigning levels to grid lines, be sure not to exceed this value.
 *
 * @type number
 * @default
 * @alias lineBaseLevel
 * @static
 * @memberof CIQ.ChartEngine.XAxis
 * @since 8.4.0
 */
CIQ.ChartEngine.XAxis.lineBaseLevel = 500;

CIQ.extend(
	CIQ.ChartEngine.XAxis.prototype,
	{
		/**
		 * Optional function to format dates on x-axis.
		 * If defined, will be used to completely control x-axis formatting, including the floating HUD date of the crosshair.
		 *
		 * This function **should not** be used to alter the timezone of the displayed date/time. For time zone conversions use {@link CIQ.ChartEngine#setTimeZone}
		 *
		 * **Expected format:**
		 *
		 * - `function(labelDate, gridType, timeUnit, timeUnitMultiplier, defaultText);`
		 *
		 * **Parameters:**
		 * <table>
		 * <tr><th>Name</th><th>Type</th><th>Description</th></tr>
		 * <tr><td>labelDate</td><td>Date</td><td>javaScript date to format</td></tr>
		 * <tr><td>gridType</td><td>String</td><td>"boundary", "line", or name of drawing (e.g. "vertical") for the axis labels.<br>Absent for the floating crosshair label</td></tr>
		 * <tr><td>timeUnit</td><td>Enumerated type</td><td>CIQ.MILLISECOND <br>CIQ.SECOND <br>CIQ.MINUTE <br>CIQ.HOUR <br>CIQ.DAY <br>CIQ.MONTH <br>CIQ.YEAR <br>CIQ.DECADE <br>Absent for the floating crosshair label.</td></tr>
		 * <tr><td>timeUnitMultiplier</td><td>Number</td><td>How many timeUnits. <br>Absent for the floating crosshair label. <br>Deprecated as of 8.4.0.</td></tr>
		 * <tr><td>defaultText</td><td>String</td><td>Contains the default date label that would be used if no formatter is defined. Simply return this value for dates where no formatting is desired.</td></tr>
		 * </table>
		 *
		 * **Returns:**
		 * - Formatted text label for the particular date passed in.
		 *
		 * @type function
		 * @memberof CIQ.ChartEngine.XAxis#
		 * @example
		 * stxx.chart.xAxis.formatter = function(labelDate, gridType, timeUnit, timeUnitMultiplier, defaultText){
		 * 		// Your code here to format your string.
		 * 		// Example: always return HH:MM regardless of gridType,
		 * 		// even if gridType is a 'boundary' that normally would display
		 * 		// a date in intraday periodicity or a month in daily periodicity
		 *
		 * 		//You can always return back 'defaultText' if you do not wish to customize the particular value.
		 *
		 * 		var stringDate = labelDate.getHours() + ':' + labelDate.getMinutes();
		 * 		return stringDate;
		 * }
		 * @example
		 * stxx.chart.xAxis.formatter = function(labelDate, gridType, timeUnit, timeUnitMultiplier, defaultText){
		 * 		// Your code here to format your string.
		 * 		// Example: return HH:MM when gridType is "line" otherwise returned the default text.
		 *
		 *		if( gridType == "line" ) {
		 * 			var stringDate = labelDate.getHours() + ':' + labelDate.getMinutes();
		 * 			return stringDate;
		 * 		else
		 * 			return defaultText;
		 * }
		 * @since
		 * - 3.0.0 Using x-axis formatter now is available for year and month boundaries.
		 * - 6.3.0 Added `defaultText` parameter.
		 * - 6.3.0 Added drawing type as possible `gridType` value.
		 * - 8.4.0 Method is no longer used to format x-axis labels.
		 * 		You can use {@link CIQ.ChartEngine.XAxis.setPropertiesForInterval} instead.
		 */
		formatter: null,
		/**
		 * If true, the user selected (default browser if none selected) timezone will be used on the x-axis.
		 * If not set to true, the data timezone will be used even if a user timezone was set.
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.XAxis#
		 */
		adjustTimeZone: true,
		/**
		 * Set to true to draw a line above the x-axis.
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.XAxis#
		 */
		displayBorder: true,
		/**
		 * Set to false to suppress grid lines
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.XAxis#
		 */
		displayGridLines: true,
		/**
		 * Switch to allow population of labels in x-axis to be "place as needed".
		 *
		 * Under normal circumstances the x-axis labels are placed in levels (priority) as defined in {@link CIQ.ChartEngine.XAxis.priorities} object.
		 * When this flag is set to true, the behavior reverts to placing the labels as space allows from left to right.
		 *
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.XAxis#
		 * @since 8.4.0
		 */
		fitLeftToRight: null,
		/**
		 * Switch to allow tight fitting of labels in x-axis.
		 *
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.XAxis#
		 * @since 8.4.0
		 */
		fitTight: null,
		/**
		 * READ ONLY. Maximum level of label to draw on the x-axis.
		 * Note this could exceed maxLevelToDisplay since the level of a grid="line"
		 * generated by {@link CIQ.ChartEngine.XAxis.setPropertiesForInterval}
		 * has {@link CIQ.ChartEngine.XAxis.lineBaseLevel} added to it.
		 *
		 * @type number
		 * @default
		 * @memberof CIQ.ChartEngine.XAxis#
		 * @since 8.4.0
		 */
		maxLevelToDisplay: 0,
		/**
		 * Switch to temporarily hide the x-axis. Set to `true' to activate.
		 *
		 * Axis space will be maintained. To completely remove the x-axis, including spacing use {@link CIQ.ChartEngine#xaxisHeight}
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.XAxis#
		 * @since 3.0.0
		 */
		noDraw: null,
		/**
		 * Minimum size for label. This ensures adequate padding so that labels don't collide with one another.
		 * Please note that this setting is used during the rendering process, not during the label spacing calculation process and will be overwritten if too small to prevent labels from covering each other.
		 * To modify at what interval labels will be placed, please see {@tutorial Custom X-Axis} for more details
		 * @type number
		 * @default
		 * @memberof CIQ.ChartEngine.XAxis#
		 */
		minimumLabelWidth: 50,
		/**
		 * Set to false to hide axis markings in the future.
		 * @type boolean
		 * @default
		 * @memberof CIQ.ChartEngine.XAxis#
		 */
		futureTicks: true,
		/**
		 * Set to the number of minutes ticks will move by when iterating in "tick" interval.
		 * <P>
		 * Since 'tick' is not a time based display, there is no way to predict what the time between ticks will be.
		 * Ticks can come a second later, a minute later or even more depending on how active a particular instrument may be.
		 * As such, if iterating through the market day in 'tick' periodicity, the library uses a pre-defined number of minutes to move around.
		 * This will be primarily used when deciding where to put x-axis labels when going into the future in 'tick' mode.
		 *
		 * Set to 0 to suppress future ticks on the x-axis.
		 * @type number
		 * @default
		 * @memberof CIQ.ChartEngine.XAxis#
		 * @example
		 * //You can override this behavior as follows:
		 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), layout:{"candleWidth": 16, "crosshair":true}});
		 * stxx.chart.xAxis.futureTicksInterval=1; // to set to 1 minute, for example
		 * @since 3.0.0 Default changed from 10 to 1.
		 */
		futureTicksInterval: 1
	},
	true
);

/**
 * This is the object stored in `CIQ.ChartEngine.chart.xaxis` array which contains information regarding an x-axis tick.
 * See [CIQ.ChartEngine.AdvancedInjectable.createXAxis]{@link CIQ.ChartEngine.AdvancedInjectable#createXAxis} for more detail.
 * @constructor
 * @param {object} params input parameters
 * @param {number} params.hz Horizontal position of center of label in pixels. Any elements with negative positions will be off the edge of the screen and are only maintained to help produce a more predictable display as the chart is zoomed and panned.
 * @param {string} params.grid Either "line" or "boundary" depending on whether the label should be a date/time boundary or just a grid line
 * @param {string} params.text The text to display in the label
 * @param {string} [params.raw] The raw value used to generate the text
 * @param {number} [params.level] The order in which the label gets put into the axis (lowest numbers first)
 * @param {number} [params.marketOpenOffset] For minute labels, number of minutes between midnight market time and label time.  If provided, may be used to align levels with market open times regardless of display time zone.
 * @name CIQ.ChartEngine.XAxisLabel
 * @since 8.4.0 added raw and priority parameter, rationalized to object parameter
 */
CIQ.ChartEngine.XAxisLabel = function (params) {
	if (typeof params === "number") {
		this.hz = params;
		this.grid = arguments[1];
		this.text = arguments[2];
	} else Object.assign(this, params);
	if (!this.level && this.level !== 0)
		// line level starts at CIQ.ChartEngine.XAxis.lineBaseLevel so it's always
		// higher than boundary level. As a result, boundary level should not exceed that value.
		this.level =
			this.grid === "boundary" ? 0 : CIQ.ChartEngine.XAxis.lineBaseLevel;
	if (typeof this.text === "undefined") this.text = this.raw;
	this.text = this.text.toString();
};

/**
 * <span class="injection">INJECTABLE</span>
 * <span class="animation">Animation Loop</span>
 *
 * Call this method to create the x-axis (date axis). Uses {@link CIQ.ChartEngine#createSpacedDateXAxis}.
 *
 * Use css styles `stx_xaxis` to control colors and fonts for the dates. <br>
 * Use css styles `stx_xaxis_dark` to control **color only** for the divider dates. <br>
 * Use css styles `stx_grid_border`, `stx_grid` and `stx_grid_dark` to control the grid line colors. <br>
 * The dark styles are used for dividers; when the grid changes to a major point such as the start of a new day on an intraday chart, or a new month on a daily chart.
 *
 * See {@tutorial Custom X-Axis} and {@tutorial CSS Overview} for additional details.
 *
 * @param  {CIQ.ChartEngine.Chart} chart	The chart to create an x-axis for
 * @return {CIQ.ChartEngine.XAxisLabel[]}	axisRepresentation that can be passed in to [CIQ.ChartEngine.drawXAxis]{@link CIQ.ChartEngine.AdvancedInjectable#drawXAxis}
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias createXAxis
 *
 */
CIQ.ChartEngine.prototype.createXAxis = function (chart) {
	if (chart.dataSegment.length <= 0) return null;
	if (chart.xAxis.noDraw) return null;
	var arguments$ = [chart];
	var axisRepresentation = this.runPrepend("createXAxis", arguments$);
	if (axisRepresentation) return axisRepresentation;
	if (this.mainSeriesRenderer && this.mainSeriesRenderer.createXAxis) {
		axisRepresentation = this.mainSeriesRenderer.createXAxis(chart);
	} else if (this.createTickXAxisWithDates && chart.xAxis.fitLeftToRight) {
		axisRepresentation = this.createTickXAxisWithDates(chart);
	} else {
		axisRepresentation = this.createSpacedDateXAxis(chart);
	}
	this.headsUpHR();
	this.runAppend("createXAxis", arguments$);
	return axisRepresentation;
};

/**
 * Creates a label on the x-axis. Generally used to create x-axis labels for drawings.
 *
 * Uses the font properties of the CSS style `stx-float-date` (see *css/stx-chart.css*).
 *
 * **Note:** This function is not used for the floating crosshairs date label, which is also
 * styled using `stx-float-date`. See
 * {@link CIQ.ChartEngine.AdvancedInjectable#updateChartAccessories} and
 * {@link CIQ.ChartEngine.AdvancedInjectable#headsUpHR} for more details.
 *
 * @param {object} params Function parameters.
 * @param {CIQ.ChartEngine.Panel} params.panel The panel on which the label is created.
 * @param {string} params.txt The text for the label.
 * @param {number} params.x	The horizontal pixel position on the canvas for the label. **Note:**
 * 		The function ensures that the label remains on the requested panel if this value is out of
 * 		bounds.<br><br>To get the pixel position for a bar/date use
 * 		{@link CIQ.ChartEngine#pixelFromTick}, {@link CIQ.ChartEngine#pixelFromDate}, or
 * 		{@link CIQ.ChartEngine#pixelFromBar}.
 * @param {string} params.backgroundColor The background color for the label.
 * @param {string} [params.color] The foreground color for the label. If none is provided, then
 * 		white is used, unless the background is white, in which case black is used.
 * @param {boolean} [params.pointed] If true, add an upward pointing triangle to the top edge of
 * 		the label horizontally centered to form a shape similar to --^--.
 * @param {number} [params.padding = 2] The amount of padding in pixels to add to the label text
 * 		(top, right, bottom, and left).
 *
 * @memberof CIQ.ChartEngine
 * @since 8.1.0 Function signature now includes the `params` object instead of a list of
 * 		individual parameters. Added the `padding` parameter for easy customization.
 */
CIQ.ChartEngine.prototype.createXAxisLabel = function (params) {
	if (arguments[0] instanceof CIQ.ChartEngine.Panel) {
		// Handle legacy argument implementation
		params = {
			panel: arguments[0],
			txt: arguments[1],
			x: arguments[2],
			backgroundColor: arguments[3],
			color: arguments[4],
			pointed: arguments[5],
			padding: arguments[6]
		};
	}
	let { panel, txt, x, backgroundColor, color, pointed } = params;
	let padding = params.padding === 0 ? 0 : params.padding || 2;

	const context = this.chart.context;
	const fontstyle = "stx-float-date"; //or stx_xaxis
	const height = this.getCanvasFontSize(fontstyle) + padding * 2;
	this.canvasFont(fontstyle, context);

	let width;
	try {
		width = context.measureText(txt).width + padding * 2;
	} catch (e) {
		width = 0;
	} // Firefox doesn't like this in hidden iframe

	let y = panel.yAxis.bottom;
	if (x + width / 2 < panel.left || x - width / 2 > panel.right) return; //hopelessly out of bounds

	if (pointed) {
		y += height; // add height for the triangle
	} else {
		if (x + width / 2 > panel.right) x = panel.right - width / 2;
		if (x - width / 2 < panel.left) x = panel.left + width / 2;
	}

	// Check to see if the panel is displaying an xAxis below it.
	if (panel.bottom === panel.yAxis.bottom) {
		y = panel.bottom - height;
	}

	context.fillStyle = backgroundColor;
	CIQ.roundRect({
		ctx: context,
		x: x - width / 2,
		top: y,
		width: width,
		height: height,
		radius: 3,
		fill: true
	});

	const arrowSide = height / 2;
	context.beginPath();
	if (pointed) {
		context.moveTo(x - arrowSide, y);
		context.quadraticCurveTo(x - arrowSide - 3, y, x, y - height);

		context.moveTo(x, y - height);
		context.quadraticCurveTo(x + arrowSide + 3, y, x + arrowSide, y);

		context.lineTo(x - arrowSide, y);
		context.fill();
	}
	context.textBaseline = "top";
	context.fillStyle = color
		? color
		: CIQ.chooseForegroundColor(backgroundColor);
	if (context.fillStyle == backgroundColor) {
		// Best effort to pick a foreground color that isn't the same as the background!
		if (backgroundColor.toUpperCase() == "#FFFFFF")
			context.fillStyle = "#000000";
		else context.fillStyle = "#FFFFFF";
	}
	context.fillText(txt, x - width / 2 + (padding - 1), y + (padding + 2));
};

};


let __js_core_engine_yaxis_ = (_exports) => {


var CIQ = _exports.CIQ;

/**
 * Adds text on the canvas for the floating label over the y-axis.
 *
 * Uses native canvas functions to add the text. You can override this function if you wish to customize how the text on the floating y-axis labels are displayed. See example.
 * @param  {object}  params
 * @param  {object}  params.ctx      A valid HTML Canvas Context
 * @param  {number}  params.x      Left position of drawing on canvas
 * @param  {number}  params.txt    Text for the label
 * @param  {number}  params.y      Y position of drawing on canvas
 * @param  {object}  params.margin     Margin around the text
 * @param  {object}  params.margin.left     Left margin of text
 * @param  {object}  params.margin.top     Top margin of text
 * @param  {number}  params.backgroundColor  Background color of the shape drawn under the text, if any. This is used to find the text color if there is no color specified
 * @param  {number}  params.color Text color
 * @memberof CIQ
 * @since 3.0.0
 * @example
 * // customized version which adds a dash before the label text
 * CIQ.createLabel=function(params){
 *     // set the vertical alignment of the text
 *     params.ctx.textBaseline="middle";

 *     // set the color for the text and background color behind the text
 *     params.ctx.fillStyle=params.color?params.color:CIQ.chooseForegroundColor(params.backgroundColor);

 *     if(	params.ctx.fillStyle === params.backgroundColor){
 *         // Best effort to pick a foreground color that isn't the same as the background!
 *         if(params.backgroundColor.toUpperCase()=="#FFFFFF")
 *             params.ctx.fillStyle="#000000";
 *         else
 *             params.ctx.fillStyle="#FFFFFF";
 *     }

 *     //add the text to the canvas.
 *     // see we are adding a dash ('- ') before the text
 *     params.ctx.fillText('- '+params.txt, params.x + params.margin.left, params.y + params.margin.top);

 *     // set the horizontal alignment of the text
 *     params.ctx.textAlign="left";
 * };
 */
CIQ.createLabel = function (params) {
	params.ctx.textBaseline = "middle";
	params.ctx.fillStyle = params.color
		? params.color
		: CIQ.chooseForegroundColor(params.backgroundColor);
	if (params.ctx.fillStyle === params.backgroundColor) {
		// Best effort to pick a foreground color that isn't the same as the background!
		if (params.backgroundColor.toUpperCase() == "#FFFFFF")
			params.ctx.fillStyle = "#000000";
		else params.ctx.fillStyle = "#FFFFFF";
	}
	params.ctx.fillText(
		params.txt,
		params.x + params.margin.left,
		params.y + params.margin.top
	);
	params.ctx.textAlign = "left";
};

/**
 * Displays a floating label over the y-axis.
 *
 * Draws a rectangle on the canvas, with an arrowhead on the screen, using {@link CIQ.roundRect} with an `edge` setting of "arrow".
 * It then calls {@link CIQ.createLabel} to print the text over this background shape; which can be customized to control the text format for these labels.
 *
 * Visual Reference:<br>
 * ![roundRectArrow](roundRectArrow.png "roundRectArrow")
 * @param  {object} params
 * @param  {object} params.ctx    A valid HTML Canvas Context
 * @param  {number} params.x      Left position of drawing on canvas
 * @param  {number} params.top      Top position of drawing on canvas
 * @param  {number} params.width  Width of rectangle
 * @param  {number} params.height Height of rectangle
 * @param  {number} params.radius Radius of rounding
 * @param  {boolean} [params.fill]   Whether to fill the background, or just draw the rectangle border.
 * @param  {number}  [params.txt]    Text for the label
 * @param  {number}  [params.y]      Y position of drawing on canvas
 * @param  {object}  [params.margin]     Margin around the text
 * @param  {object}  [params.margin.left]     Left margin of text
 * @param  {object}  [params.margin.top]     Top margin of text
 * @param  {number}  [params.backgroundColor]  Background color. This is the background color of the rectangle.
 * @param  {number}  [params.color] Text color
 * @memberof CIQ
 * @since 3.0.0 Function signature changed. This function now takes a params object instead of eight different parameters.
 */
CIQ.roundRectArrow = function (params) {
	CIQ.roundRect(params, "arrow");
};

/**
 * Displays a floating label over the y-axis.
 *
 * Draws a rectangle on the canvas, with just the right side curved corners, using {@link CIQ.roundRect} with an `edge` setting of "flush".
 * It then calls {@link CIQ.createLabel} to print the text over this background shape; which can be customized to control the text format for these labels.
 *
 * Visual Reference:<br>
 * ![semiRoundRect](semiRoundRect.png "semiRoundRect")
 * @param  {object} params
 * @param  {object} params.ctx    A valid HTML Canvas Context
 * @param  {number} params.x      Left position of drawing on canvas
 * @param  {number} params.top      Top position of drawing on canvas
 * @param  {number} params.width  Width of rectangle
 * @param  {number} params.height Height of rectangle
 * @param  {number} params.radius Radius of rounding
 * @param  {boolean} [params.fill]   Whether to fill the background, or just draw the rectangle border.
 * @param  {number}  [params.txt]    Text for the label
 * @param  {number}  [params.y]      Y position of drawing on canvas
 * @param  {object}  [params.margin]     Margin around the text
 * @param  {object}  [params.margin.left]     Left margin of text
 * @param  {object}  [params.margin.top]     Top margin of text
 * @param  {number}  [params.backgroundColor]  Background color. This is the background color of the rectangle.
 * @param  {number}  [params.color] Text color
 * @memberof CIQ
 * @since 3.0.0 Function signature changed. This function now takes a params object instead of eight different parameters.
 */
CIQ.semiRoundRect = function (params) {
	CIQ.roundRect(params, "flush");
};

/**
 * Displays a floating label over the y-axis.
 *
 * Draws a rectangle on the canvas using {@link CIQ.roundRect} with a `radius` of 0
 * It then calls {@link CIQ.createLabel} to print the text over this background shape; which can be customized to control the text format for these labels.
 *
 * Visual Reference:<br>
 * ![rect](rect.png "rect")
 * @param  {object} params
 * @param  {object} params.ctx    A valid HTML Canvas Context
 * @param  {number} params.x      Left position of drawing on canvas
 * @param  {number} params.top      Top position of drawing on canvas
 * @param  {number} params.width  Width of rectangle
 * @param  {number} params.height Height of rectangle
 * @param  {boolean} [params.fill]   Whether to fill the background, or just draw the rectangle border.
 * @param  {number}  [params.txt]    Text for the label
 * @param  {number}  [params.y]      Y position of drawing on canvas
 * @param  {object}  [params.margin]     Margin around the text
 * @param  {object}  [params.margin.left]     Left margin of text
 * @param  {object}  [params.margin.top]     Top margin of text
 * @param  {number}  [params.backgroundColor]  Background color. This is the background color of the rectangle.
 * @param  {number}  [params.color] Text color
 * @memberof CIQ
 * @since 3.0.0 Function signature changed. This function now takes a params object instead of eight different parameters.
 */
CIQ.rect = function (params) {
	params.radius = 0;
	CIQ.roundRect(params);
};

/**
 * Displays floating text label, without any background shapes, over the y-axis.
 *
 * Calls {@link CIQ.createLabel}; which can be customized to control the text format for these labels.
 * Will draw text in the color normally used for the background shape. For example, 'green' text for the up tick and 'red' text for a down tick.
 *
 * Visual Reference:<br>
 * ![noop](noop.png "noop")
 * @param {object} params
 * @param {object} params.ctx A valid HTML Canvas Context.
 * @param {number} params.x Left position of drawing on canvas.
 * @param {number} params.txt Text for the label.
 * @param {number} params.y Vertical position of drawing on canvas.
 * @param {object} params.margin Margin around the text.
 * @param {object} params.margin.left Left margin of text.
 * @param {object} params.margin.top Top margin of text.
 * @param {number} params.backgroundColor Text color; since there is no background shape.
 *
 * @memberof CIQ
 * @since
 * - 3.0.0 Function signature changed. This function now takes a params object instead of eight different parameters.
 * - 5.2.1 Will now draw text in the color normally used for the background shape. For example, 'green' text for the up tick and 'red' text for a down tick.
 */
CIQ.noop = function (params) {
	params.color = params.backgroundColor;
	CIQ.createLabel(params);
};

/**
 * Displays a floating label over the y-axis.
 *
 * Draws a 'ticked' rectangle on the canvas, using {@link CIQ.roundRect}.
 * It then calls {@link CIQ.createLabel} to print the text over this background shape; which can be customized to control the text format for these labels.
 *
 * Visual Reference:<br>
 * ![tickedRect](tickedRect.png "tickedRect")
 * @param  {object} params
 * @param  {object} params.ctx    A valid HTML Canvas Context
 * @param  {number} params.x      Left position of drawing on canvas
 * @param  {number} params.top      Top position of drawing on canvas
 * @param  {number} params.width  Width of rectangle
 * @param  {number} params.height Height of rectangle
 * @param  {number} params.radius Radius of rounding
 * @param  {boolean} [params.fill]   Whether to fill the background, or just draw the rectangle border.
 * @param  {number}  [params.txt]    Text for the label
 * @param  {number}  [params.y]      Y position of drawing on canvas
 * @param  {object}  [params.margin]     Margin around the text
 * @param  {object}  [params.margin.left]     Left margin of text
 * @param  {object}  [params.margin.top]     Top margin of text
 * @param  {number}  [params.backgroundColor]  background color. This is the background color of the rectangle.
 * @param  {number}  [params.color] Text color
 * @memberof CIQ
 * @since 3.0.0 Function signature changed. This function now takes a params object instead of eight different parameters.
 */

CIQ.tickedRect = function (params) {
	CIQ.rect(params);
	var tickY = Math.round(params.top + params.height / 2) + 0.5;
	params.ctx.beginPath();
	params.ctx.moveTo(params.x - 2, tickY);
	params.ctx.lineTo(params.x, tickY);
	params.ctx.stroke();
	params.ctx.closePath();
};

/**
 * Displays a floating label over the y-axis.
 *
 * Draws a rectangle, with curved corners, on the canvas.
 * It then calls {@link CIQ.createLabel} to print the text over this background shape; which can be customized to control the text format for these labels.
 *
 * Visual Reference:<br>
 * ![roundRect](roundRect.png "roundRect")
 * @param  {object} params
 * @param  {object} params.ctx    A valid HTML Canvas Context
 * @param  {number} params.x      Left position of drawing on canvas
 * @param  {number} params.top      Top position of drawing on canvas
 * @param  {number} params.width  Width of rectangle
 * @param  {number} params.height Height of rectangle
 * @param  {number} params.radius Radius of rounding
 * @param  {boolean} [params.fill]   Whether to fill the background, or just draw the rectangle border.
 * @param  {number}  [params.txt]    Text for the label
 * @param  {number}  [params.y]      Y position of drawing on canvas
 * @param  {object}  [params.margin]     Margin around the text
 * @param  {object}  [params.margin.left]     Left margin of text
 * @param  {object}  [params.margin.top]     Top margin of text
 * @param  {number}  [params.backgroundColor]  background color. This is the background color of the rectangle.
 * @param  {number}  [params.color] Text color
 * @param {string} [edge] "flush","arrow"
 * @memberof CIQ
 * @since 3.0.0 Function signature changed. This function now takes a params object and the drawing type instead of eight different parameters.
 * Also, this function will draw the label if `params.txt` is present, otherwise just the floating label outline will be drawn.
 */
CIQ.roundRect = function (params, edge) {
	if (arguments.length === 9) {
		params = {
			ctx: arguments[0],
			x: arguments[1],
			top: arguments[2],
			width: arguments[3],
			height: arguments[4],
			radius: arguments[5],
			fill: arguments[6],
			stroke: arguments[7],
			edge: arguments[8]
		};
	}
	var stroke = params.stroke;
	var x = params.x;
	var y = params.top;
	var width = params.width;
	var height = params.height;
	var radius = params.radius;
	var fill = params.fill;
	var ctx = params.ctx;
	if (typeof stroke == "undefined") {
		stroke = true;
	}
	if (typeof radius === "undefined") {
		radius = 5;
		if (width < 0) radius = -5;
	}
	var yradius = width < 0 ? radius * -1 : radius;
	if (radius && !edge) x = x - 1; // Just a smidge more

	var xr = x + radius,
		xw = x + width,
		yr = y + yradius,
		yh = y + height;
	var xwr = xw - radius,
		yhr = yh - yradius;
	ctx.beginPath();
	ctx.moveTo(xr, y);
	ctx.lineTo(xwr, y);

	ctx.quadraticCurveTo(xw, y, xw, yr);
	ctx.lineTo(xw, yhr);
	ctx.quadraticCurveTo(xw, yh, xwr, yh);
	ctx.lineTo(xr, yh);

	if (edge == "flush") {
		ctx.lineTo(x, yh);
		ctx.lineTo(x, y);
	} else if (edge == "arrow") {
		ctx.quadraticCurveTo(x, yh, x - radius, yhr);
		var multiplier = width < 0 ? 1 : -1;
		ctx.lineTo(x + (height / 2) * multiplier, y + height / 2); // right arrow tip
		ctx.lineTo(x - radius, yr);
		ctx.quadraticCurveTo(x, y, xr, y);
	} else {
		ctx.quadraticCurveTo(x, yh, x, yhr);
		ctx.lineTo(x, yr);
		ctx.quadraticCurveTo(x, y, xr, y);
	}
	ctx.closePath();
	if (params.backgroundColor) ctx.fillStyle = params.backgroundColor;

	if (stroke) {
		ctx.stroke();
	}
	if (fill) {
		ctx.fill();
	}
	if (params.txt) CIQ.createLabel(params);
};

/**
 * Defines an object used for rendering the y-axison a panel.
 *
 * Each panel object will **automatically** include a y-axis object, which can be adjusted immediately after declaring your `new CIQ.ChartEngine();`<br>
 * Any adjustments to the y-axis members after it has been rendered will require a [draw()]{@link CIQ.ChartEngine#draw} call to apply the changes. A call to [initializeChart()]{@link CIQ.ChartEngine#initializeChart} may be required as well, depending on the setting being changed. See examples.
 *
 *  Also see:
 * - {@link CIQ.ChartEngine#yaxisLabelStyle}
 * - {@link CIQ.ChartEngine#yTolerance}
 * - {@link CIQ.ChartEngine.Chart#yaxisPaddingRight}
 * - {@link CIQ.ChartEngine.Chart#yaxisPaddingLeft}
 *
 * For full customization instructions see:
 *  - {@tutorial Gridlines and axis labels}
 *  - {@link CIQ.ChartEngine.AdvancedInjectable#createYAxis}
 *  - {@link CIQ.ChartEngine.AdvancedInjectable#drawYAxis}
 *
 * Example: stxx.panels['chart'].yAxis
 *
 * Example: stxx.chart.yAxis (convenience shortcut for accessing the main panel object - same as above)
 *
 * Example: stxx.panels['Aroon (14)'].yAxis
 *
 * **Note:** When modifying a y-axis placement setting (width, margins, position left/right, etc.)
 * after the axis has been rendered, you must call {@link CIQ.ChartEngine#calculateYAxisMargins} or
 * {@link CIQ.ChartEngine#calculateYAxisPositions} (as appropriate) followed by
 * {@link CIQ.ChartEngine#draw} to activate the change.
 *
 * @constructor
 * @name  CIQ.ChartEngine.YAxis
 * @param {object} init Object containing custom values for y-axismembers
 * @example
 * // here is an example on how to override the default top and bottom margins after the initial axis has already been rendered
 * stxx.loadChart(symbol, {masterData: yourData}, function () {
 * 	// callback - your code to be executed after the chart is loaded
 * 	stxx.chart.yAxis.initialMarginTop=50;
 * 	stxx.chart.yAxis.initialMarginBottom=50;
 * 	stxx.calculateYAxisMargins(stxx.chart.panel.yAxis); // must recalculate the margins after they are changed.
 * 	stxx.draw();
 * });
 * @example
 * // here is an example on how to override the default top and bottom margins before the initial axis has been rendered
 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), layout:{"candleWidth": 16, "crosshair":true}});
 * stxx.setPeriodicity({period:1, interval:1, timeUnit:"minute"}); 			// set your default periodicity to match your data. In this case one minute.
 * stxx.chart.yAxis.initialMarginTop=50;		// set default margins so they do not bump on to the legend
 * stxx.chart.yAxis.initialMarginBottom=50;
 * stxx.loadChart("SPY", {masterData: yourData});
 * @example
 * // here is an example on how to turn off the last price label (main chart panel) before the initial axis has already been rendered
 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), layout:{"candleWidth": 16, "crosshair":true}});
 * stxx.chart.panel.yAxis.drawCurrentPriceLabel=false;
 *
 * @since 5.1.0 Created a name member which is used to determine if the y-axis is the same as another.
 */
CIQ.ChartEngine.YAxis = function (init) {
	for (var field in init) this[field] = init[field];
	if (!this.name) this.name = CIQ.uniqueID();
	if (this.position == "none") this.width = 0;
};

CIQ.extend(
	CIQ.ChartEngine.YAxis.prototype,
	{
		/**
		 * @type string
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		name: null,
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		high: null, // High value on y-axis (read only)
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		low: null, // Low value on y-axis (read only)
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		shadow: null, // high - low (read only)
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		logHigh: null, // High log value on y-axis (read only)
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		logLow: null, // Low log value on y-axis (read only)
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		logShadow: null, // logHigh - logLow (read only)
		/**
		 * @type boolean
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		allowSharing: true, // allows other plots with non-specific position settings to share this axis (read only)
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		multiplier: null, // Computed automatically. Divide pixel by this to get the price (then add to low). Or multiply price by this to get the pixel (then add to top)
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		bottom: null, // calculated automatically (panel.bottom-yAxis.bottomOffset)
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		top: null, // calculated automatically (panel.top+yAxis.topOffset;)
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		height: null, // bottom - top
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		left: null, // calculated left position on canvas to begin drawing.
		/**
		 * @type array
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		renderers: [], // calculated automatically, array of renderers plotting on this axis
		/**
		 * @type array
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		studies: [], // calculated automatically, array of studies plotting on this axis
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		lowValue: null,
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		highValue: null,
		/**
		 * @type boolean
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		semiLog: null,
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		priceTick: null,
		/**
		 * @type number
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		printDecimalPlaces: null,
		/**
		 * @type CIQ.Plotter
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		yAxisPlotter: null,
		/**
		 * @type boolean
		 * @memberof CIQ.ChartEngine.YAxis#
		 */
		highlight: null
	},
	true
);

/**
 * Default setting for the array that determines how many decimal places to print based on the size of the shadow (the difference between chart high and chart low).
 * The array consists of tuples in descending order. If the shadow is less than n1 then n2 decimal places will be printed.
 * See {@link CIQ.ChartEngine.YAxis#shadowBreaks}
 * @type array
 * @memberof CIQ.ChartEngine.YAxis
 * @since
 * - 2015-11-1
 * - 5.2.0 Additional break added.
 * @default
 */
CIQ.ChartEngine.YAxis.defaultShadowBreaks = [
	[1000, 2],
	[5, 4],
	[0.001, 8]
];

/**
 * Alternative setting (for small charts) array that determines how many decimal places to print based on the size of the shadow (the difference between chart high and chart low).
 * The array consists of tuples in descending order. If the shadow is less than n1 then n2 decimal places will be printed.
 * See {@link CIQ.ChartEngine.YAxis#shadowBreaks}
 * @type array
 * @memberof CIQ.ChartEngine.YAxis
 * @since 2015-11-1
 * @default
 */
CIQ.ChartEngine.YAxis.smallChartShadowBreaks = [
	[10, 2],
	[1, 4]
];

/**
 * Controls maximum number of decimal places to ever display on a y-axis floating price label.
 *
 * Set to the maximum decimal places from 0 to 10, or leave null and the chart will choose automatically based on {@link CIQ.ChartEngine.YAxis#shadowBreaks}.
 * - See {@link CIQ.ChartEngine.YAxis#decimalPlaces} for controlling decimal places on the axis itself.
 * - See {@link CIQ.ChartEngine.YAxis#width} and {@link CIQ.ChartEngine.Chart#dynamicYAxis} to manage the width of the y-axis.
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @since 5.2.1 Default changed to null.
 */
CIQ.ChartEngine.YAxis.prototype.maxDecimalPlaces = null;

/**
 * Optionally hard set the high (top value) of the yAxis (for instance when plotting 0 - 100% charts)
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 */
CIQ.ChartEngine.YAxis.prototype.max = null;

/**
 * Optionally hard set the low (bottom value) of the yAxis (for instance when plotting 0 - 100% charts)
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 */
CIQ.ChartEngine.YAxis.prototype.min = null;

/**
 * Controls the number of decimal places on the y-axis labels.
 *
 * Set to the preferred number of decimal places from 0 to 10, or leave null and the chart will choose automatically based on {@link CIQ.ChartEngine.YAxis#shadowBreaks}
 *
 * Each y-axis will make its own determination, so to override this value for all axes, you must adjust the y-axis prototype.
 * <br>Example: `CIQ.ChartEngine.YAxis.prototype.decimalPlaces=4;`
 *
 * **Note:** study panel axis may be condensed using {@link CIQ.condenseInt}. See {@link CIQ.ChartEngine#formatYAxisPrice} for all details.
 *
 * - See {@link CIQ.ChartEngine.YAxis#maxDecimalPlaces} for further controlling decimal places on floating labels.<br>
 * - See {@link CIQ.ChartEngine.YAxis#width} and {@link CIQ.ChartEngine.Chart#dynamicYAxis} to manage the width of the y-axis.
 * - See {@link CIQ.ChartEngine.YAxis#shadowBreaks} to override how many decimal places to print based on the size of the shadow (the difference between chart high and chart low).
 *
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @since 5.2.0 Default changed to null.
 */
CIQ.ChartEngine.YAxis.prototype.decimalPlaces = null;

/**
 * Ideal size between y-axis values in pixels. Leave null to automatically calculate.
 * See {@tutorial Gridlines and axis labels} for additional details.
 *
 * **Note:** If {@link CIQ.ChartEngine.YAxis#goldenRatioYAxis} is `true`, it will override idealTickSizePixels.
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 */
CIQ.ChartEngine.YAxis.prototype.idealTickSizePixels = null;

/**
 * Set to specify that the y-axis vertical grid be drawn with specific intervals between ticks.
 * This amount will be overridden if it will result in y-axis crowding.
 * In which chase, multiples of the original interval will be used.
 * For example, if `.25` is selected, and that will cause labels to be on top of or too close to each other, `.50` may be used.
 * Crowding is prevented by allowing for a minimum of space equating the y-axis font height between labels.
 *
 * **This parameter is also used in the 'Trade From Chart' (TFC) module**. If set, it will force the widget to skip certain price values and instead 'snap' to your desired intervals. This will guarantee that an order is only placed at the allowed price intervals for the security in question.
 *
 * **Note that this parameter will be ignored if {@link CIQ.ChartEngine.YAxis#pretty} is set to `true`. If you require specific price intervals, please set {@link CIQ.ChartEngine.YAxis#pretty} to 'false' before setting `minimumPriceTick`**
 *
 * Visual Reference:<br>
 * ![yAxis.minimumPriceTick](yAxis.minimumPriceTick.png "yAxis.minimumPriceTick")
 *
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @example
 * // Declare a CIQ.ChartEngine object. This is the main object for drawing charts
 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), layout:{"candleWidth": 16, "crosshair":true}});
 * // set interval between ticks
 * stxx.chart.yAxis.minimumPriceTick=.50;
 */
CIQ.ChartEngine.YAxis.prototype.minimumPriceTick = null;

/**
 * Set to specify that the y-axis vertical grid be drawn with fractional intervals.
 *
 * This is checked in {@link CIQ.ChartEngine.AdvancedInjectable#drawYAxis} and if it is not null,
 * and there is no existing [yAxis.priceFormatter]{@link CIQ.ChartEngine.YAxis#priceFormatter}, one is created to specially format the y-axis ticks.
 *
 * {@link CIQ.ChartEngine.YAxis#decimalPlaces} and {@link CIQ.ChartEngine.YAxis#maxDecimalPlaces} will not be honored in this mode.
 *
 * To disable the formatting, you must reset both the yAxis.priceFormatter and this fractional object to 'null'.
 * <br>Example:
 * ```
 * stxx.chart.yAxis.priceFormatter=stxx.chart.yAxis.fractional=null;
 * ```
 *
 * If the outlined logic is not suitable for your needs, you will need to create your own [yAxis.priceFormatter]{@link CIQ.ChartEngine.YAxis#priceFormatter}
 *
 * @type object
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @example <caption> Usage example:</caption>
 * // Declare a CIQ.ChartEngine object. This is the main object for drawing charts
 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), layout:{"candleWidth": 16, "crosshair":true}});
 * // set axis to display in 1/32nds; for example, 100 5/32 will display as 100'05.  If there is a price midway between
 * // two ticks (for example, 11/64), a plus (+) will follow the price; for example 100 11/64 will display as 100'11+.
 * stxx.chart.yAxis.fractional={
 *		formatter: "'",				// This is the character used to separate he whole number portion from the numerator (' default)
 *		resolution: 1/32			// Set to smallest increment for the quoted amounts
 * }
 *
 *  @example <caption>Code used to perform the fractional formatting:</caption>
	if(!yAxis.fractional.resolution) yAxis.fractional.resolution=yAxis.minimumPrice;
	if(!yAxis.fractional.formatter) yAxis.fractional.formatter="'";
	if(!yAxis.priceFormatter) yAxis.priceFormatter=function(stx, panel, price){
		if( !yAxis.fractional ) return;
		var sign='';
		if( price < 0 ) {
			sign="-";
			price= Math.abs(price);
		}
		var whole=Math.floor(Math.round(price/yAxis.fractional.resolution)*yAxis.fractional.resolution);
		var frac=Math.round((price-whole)/yAxis.fractional.resolution);
		var _nds=Math.floor(frac);
		return sign+whole+yAxis.fractional.formatter+(_nds<10?"0":"")+_nds+(frac-_nds>=0.5?"+":"");
	};
 */
CIQ.ChartEngine.YAxis.prototype.fractional = null;

/**
 * Set to `true` to draw tick marks and a vertical border line at the edge of the y-axis  (use with {@link CIQ.ChartEngine.Chart#yaxisPaddingRight} and {@link CIQ.ChartEngine.Chart#yaxisPaddingLeft})
 * @type boolean
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 */
CIQ.ChartEngine.YAxis.prototype.displayBorder = true;

/**
 * Set to `false` to hide grid lines. See {@tutorial Gridlines and axis labels} for additional details.
 * @type boolean
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @example <caption> On a specific panel:</caption>
 * // Be sure to get the panel name directly from the panels object as it may contain ZWNJ characters.
 * // See http://documentation.chartiq.com/CIQ.ChartEngine.html#layout%5B%60panels%60%5D
 * stxx.layout.panels[panel_name_here].yAxis.displayGridLines=false;
 * @example <caption>  On the primary chart panel:</caption>
 * stxx.chart.yAxis.displayGridLines=false;
 */
CIQ.ChartEngine.YAxis.prototype.displayGridLines = true;

/**
 * Switch to 'temporarily' hide the y-axis. Set to `true' to activate.
 * Will not modify the location of the axis; to do that use {@link CIQ.ChartEngine#setYAxisPosition} instead.
 * @type boolean
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 */
CIQ.ChartEngine.YAxis.prototype.noDraw = null;

/**
 * Set to `false` to hide the current price label <b>in the main panel's y-axis</b>.
 *
 * Please note that the main panel's current price label will only display if there is a current price available.
 * If you have not loaded enough datapoints to overlap into the current time, as determined by the device's clock, the label will not display.
 *
 * The y-axis floating label colors are based on the difference between the most current close and the **previous** datapoint close, not the difference between the current datapoint's open and its close.
 *
 * See {@link CIQ.ChartEngine.AdvancedInjectable#drawCurrentHR}
 *
 * Visual Reference:<br>
 * ![yAxis.drawCurrentPriceLabel](drawCurrentPriceLabel.png "yAxis.drawCurrentPriceLabel")
 * @type boolean
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @since 04-2015
 */
CIQ.ChartEngine.YAxis.prototype.drawCurrentPriceLabel = true;

/**
 * Set to `false` to hide the series price labels <b>in the main panel's y-axis</b>.
 *
 * @type boolean
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @since 3.0.0
 */
CIQ.ChartEngine.YAxis.prototype.drawSeriesPriceLabels = true;

/**
 * Set to false to hide **all** price labels on the particular y-axis.
 * <br>See {@link CIQ.ChartEngine.YAxis#drawCurrentPriceLabel} to disable just the current price label on the main chart panel.
 * <br>See <a href="CIQ.ChartEngine.html#preferences%5B%60labels%60%5D">CIQ.ChartEngine.preferences.labels</a> to disable just the last value label on studies.
 * @type boolean
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @since 04-2015
 */
CIQ.ChartEngine.YAxis.prototype.drawPriceLabels = true;

/**
 * When `true`, will attempt to create grid lines that approximate a `golden ratio` between x and y-axis by basing grid on {@link CIQ.ChartEngine.YAxis#idealTickSizePixels}.
 * This creates an "airy" modern looking chart.
 * If set to false, each axis will be adjusted separately and may create long and narrow rectangular grids depending on date or price range.
 * @type boolean
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @since
 * - 04-2015
 * - 4.0.0 Now defaults to true.
 */
CIQ.ChartEngine.YAxis.prototype.goldenRatioYAxis = true;

/**
 * Shape of the floating y-axis label.
 *
 * Available options:
 *  - ["roundRectArrow"]{@link CIQ.roundRectArrow}
 *  - ["semiRoundRect"]{@link CIQ.semiRoundRect}
 *  - ["roundRect"]{@link CIQ.roundRect}
 *  - ["tickedRect"]{@link CIQ.tickedRect}
 *  - ["rect"]{@link CIQ.rect}
 *  - ["noop"]{@link CIQ.noop}
 *
 * It will default to {@link CIQ.ChartEngine#yaxisLabelStyle}.
 * This could be set independently on each panel if desired.
 * @type string
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @since 04-2015
 * @example
 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), layout:{"candleWidth": 16, "crosshair":true}});
 * stxx.chart.yAxis.yaxisLabelStyle="rect"
 */
CIQ.ChartEngine.YAxis.prototype.yaxisLabelStyle = null;

/**
 * Set to `true` to right justify the yaxis labels
 * Set to `false` to force-left justify the labels, even when the axis is on the left.
 * Set to null to have the justification automatically adjusted based on the axis position. Right axis will justify left, and left axis will justify right.
 *
 *
 * This setting does not control the floating last price. See {@link CIQ.ChartEngine.AdvancedInjectable#drawCurrentHR} and {@link CIQ.ChartEngine#createYAxisLabel}
 * @type boolean
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @since
 * - 15-07-01
 * - 6.2.0 Formalized distinction between null and false values.
 */
CIQ.ChartEngine.YAxis.prototype.justifyRight = null;

/**
 * Setting to true causes the y-axis and all linked drawings, series and studies to display inverted (flipped) from its previous state.
 * @type boolean
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @since 6.3.0
 */
CIQ.ChartEngine.YAxis.prototype.flipped = false;

/**
 * Set to true to put a rectangle behind the yaxis text (use with {@link CIQ.ChartEngine.Chart#yaxisPaddingRight} and {@link CIQ.ChartEngine.Chart#yaxisPaddingLeft})
 * @type boolean
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @since 15-07-01
 */
CIQ.ChartEngine.YAxis.prototype.textBackground = false;

/**
 * Optional function used to override default formatting of y-axisvalues, including the floating HUD value of the crosshair.
 *
 * Expected format :
 *
 * 		function(stx, panel, price, decimalPlaces)
 *
 * Parameters:
 *
 * 		stx           - {@link CIQ.ChartEngine}       - The chart object
 *		panel         - {@link CIQ.ChartEngine.Panel} - The panel
 *		price         - number                - The price to format
 *		decimalPlaces - number                - Optional - Number of decimal places to use
 *													(may not always be present)
 *
 * Returns:
 *
 *		text - Formatted text label for the price
 *
 * @type function
 * @example
 * stxx.chart.yAxis.priceFormatter=function(stx, panel, price, decimalPlaces){
 * 	var convertedPrice;
 * 	  // add our logic here to convert 'price' to 'convertedPrice'
 *    return convertedPrice; // string
 * }
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 */
CIQ.ChartEngine.YAxis.prototype.priceFormatter = null;

/**
 * Sets the y-axis bottom on any panel.
 * Rendering will start this number of pixels above the panel's bottom.
 * Note that {@link CIQ.ChartEngine#adjustPanelPositions} and {@link CIQ.ChartEngine#draw} will need to be called to immediately activate this setting after the axis has already been drawn.
 *
 * Visual Reference:<br>
 * ![yAxis.width](yAxis.bottomOffset.png "yAxis.bottomOffset")
 * ![yAxis.width](yAxis.bottomTopOffset.png "yAxis.bottomTopOffset")
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @example
 * // The list of current panels can be found in "stxx.panels".
 * stxx.panels[panelName].yAxis.bottomOffset=20;
 * stxx.panels[panelName].yAxis.topOffset=60;
 * stxx.adjustPanelPositions();	// !!!! must recalculate the margins after they are changed. !!!!
 * stxx.draw();
 */
CIQ.ChartEngine.YAxis.prototype.bottomOffset = 0;

/**
 * Sets y-axis top on Study panels.
 * Rendering will start this number of pixels below the panel's top.
 * Note that {@link CIQ.ChartEngine#adjustPanelPositions} and {@link CIQ.ChartEngine#draw} will need to be called to immediately activate this setting after the axis has already been drawn.
 *
 * Visual Reference:<br>
 * ![yAxis.width](yAxis.bottomTopOffset.png "yAxis.bottomTopOffset")
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @example
 * // The list of current panels can be found in "stxx.panels".
 * stxx.panels[panelName].yAxis.bottomOffset=20;
 * stxx.panels[panelName].yAxis.topOffset=60;
 * stxx.adjustPanelPositions();	// !!!! must recalculate the margins after they are changed. !!!!
 * stxx.draw();
 */
CIQ.ChartEngine.YAxis.prototype.topOffset = 0;

/**
 * Set this to automatically compress and offset the y-axis so that these many pixels of white space are above the display.
 * Note that {@link CIQ.ChartEngine#calculateYAxisMargins} and {@link CIQ.ChartEngine#draw} will need to be called to immediately activate this setting after the axis has already been drawn.
 *
 * Visual Reference:<br>
 * ![yAxis.width](yAxis.initialMarginTop.png "yAxis.initialMarginTop")
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 *
 * @example
 * // Here is an example on how to override the default top and bottom margins before the initial axis has been rendered.
 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), layout:{"candleWidth": 16, "crosshair":true}});
 * stxx.setPeriodicity({period:1, interval:1, timeUnit:"minute"}); // Set your default periodicity to match your data; in this case, one minute.
 * stxx.chart.yAxis.initialMarginTop = 50; // Set default margins so they do not bump on to the legend.
 * stxx.chart.yAxis.initialMarginBottom = 50;
 * stxx.loadChart("SPY", {masterData: yourData});
 *
 * @example
 * // Here is an example on how to override the default top and bottom margins after the initial axis has already been rendered.
 * stxx.loadChart(symbol, {masterData: yourData}, function () {
 * 	var yAxis = stxx.chart.yAxis;
 *
 * 	yAxis.initialMarginTop = 50;
 * 	yAxis.initialMarginBottom = 50;
 *
 * 	// !! Must recalculate margins after they are changed!
 * 	stxx.calculateYAxisMargins(yAxis);
 * 	stxx.draw();
 * });
 *
 * @example
 * // Here is an example on how to override the default top and bottom margins for a specific panel after the initial axis has already been rendered.
 * // The list of current panels can be found in stxx.panels.
 * stxx.panels[panelName].yAxis.initialMarginTop = 100;
 * stxx.panels[panelName].yAxis.initialMarginBottom = 100;
 * stxx.calculateYAxisMargins(stxx.panels[panelName].yAxis); // !!!! Must recalculate the margins after they are changed. !!!!
 * stxx.draw();
 */
CIQ.ChartEngine.YAxis.prototype.initialMarginTop = 10;

/**
 * Set this to automatically compress and offset the y-axis so that these many pixels of white space are below the display.
 * Note that {@link CIQ.ChartEngine#calculateYAxisMargins} and {@link CIQ.ChartEngine#draw} will need to be called to immediately activate this setting after the axis has already been drawn.
 *
 * Visual Reference:<br>
 * ![yAxis.width](yAxis.initialMarginTop.png "yAxis.initialMarginTop")
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 *
 * @example
 * // Here is an example on how to override the default top and bottom margins before the initial axis has been rendered.
 * var stxx=new CIQ.ChartEngine({container:document.querySelector(".chartContainer"), layout:{"candleWidth": 16, "crosshair":true}});
 * stxx.setPeriodicity({period:1, interval:1, timeUnit:"minute"}); // Set your default periodicity to match your data; in this case, one minute.
 * stxx.chart.yAxis.initialMarginTop = 50; // Set default margins so they do not bump on to the legend.
 * stxx.chart.yAxis.initialMarginBottom = 50;
 * stxx.loadChart("SPY", {masterData: yourData});
 * @example
 * // Here is an example on how to override the default top and bottom margins after the initial axis has already been rendered.
 * stxx.loadChart(symbol, {masterData: yourData}, function() {
 * 	// Callback -- your code to be executed after the chart is loaded.
 * 	stxx.chart.yAxis.initialMarginTop = 50;
 * 	stxx.chart.yAxis.initialMarginBottom = 50;
 * 	stxx.calculateYAxisMargins(stxx.chart.panel.yAxis); // !!!! Must recalculate the margins after they are changed. !!!!
 * 	stxx.draw();
 * });
 */
CIQ.ChartEngine.YAxis.prototype.initialMarginBottom = 10;

/**
 * Sets the vertical zoom level for the y-axis and all its associated series.
 *
 * It can be set programmatically or by the user as they grab the y-axis and move it up or down.
 *
 * The value represents the number of pixels to zoomed in or out and can be positive or negative.
 * The larger the number, the more it zooms out to show a wider price range.
 *
 * Please note that the zoom level will be reset as determined by {@link CIQ.ChartEngine.YAxis#initialMarginTop} and
 * {@link CIQ.ChartEngine.YAxis#initialMarginBottom} when a {@link CIQ.ChartEngine#loadChart} is rendered, the {@link CIQ.ChartEngine#home} button is pressed, or when {@link CIQ.ChartEngine.AdvancedInjectable#touchDoubleClick} is activated on a touch device.
 *
 * @type number
 * @default
 * @example
 * // programmatically change the vertical zoom level for the primary chart yAxis
 * stxx.chart.yAxis.zoom=100;stxx.draw();
 * @memberof CIQ.ChartEngine.YAxis
 */
CIQ.ChartEngine.YAxis.prototype.zoom = 0;

/**
 * set this to the number of pixels to offset the y-axis, positive or negative.
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 */
CIQ.ChartEngine.YAxis.prototype.scroll = 0;

/**
 * Factor that scales the y-axis.
 *
 * The zoom value is internally adjusted based on the value of this property as follows:
 * ```
 * zoom = (1 - heightFactor) * height + initial margin settings
 * ```
 * For example, to reduce the scale of the y-axis by 20%, set `heightFactor = 0.8`.
 *
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @since 7.0.0
 */
CIQ.ChartEngine.YAxis.prototype.heightFactor = 1;

// get/set width to allow {@link CIQ.ChartEngine.Chart#dynamicYAxis} feature
// to set _dynamicWidth instead of _width. This allows user widths to be
// restored easily when the feature is not needed.
Object.defineProperty(CIQ.ChartEngine.YAxis.prototype, "width", {
	configurable: true,
	enumerable: true,
	get: function () {
		if (this.position === "none") return 0;
		// _dynamicWidth is set by {@link CIQ.ChartEngine#drawYAxis} and
		// cleared by {@link CIQ.ChartEngine.Chart#resetDynamicYAxis}
		return this._dynamicWidth || this._width;
	},
	set: function (value) {
		this._width = value;
		// the calculated width is less than user value, getter should return the user value
		if (this._dynamicWidth < value) this._dynamicWidth = NaN;
	}
});

/**
 * The y-axis width in pixels.
 *
 * ![yAxis.width](yAxis.width.png "yAxis.width")
 *
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 *
 * @see {@link CIQ.ChartEngine.Chart#dynamicYAxis} to set the y-axis width dynamically.
 * @see {@link CIQ.ChartEngine.Chart#yaxisPaddingRight} and
 * {@link CIQ.ChartEngine.Chart#yaxisPaddingLeft} for information on how to overlay the y-axis onto
 * the chart.
 *
 * @example <caption>Set the y-axis width.</caption>
 * stxx.chart.yAxis.width = stxx.chart.yAxis.smallScreenWidth;
 * // Must call the following two lines to activate the update if the axis is already drawn.
 * stxx.calculateYAxisPositions();
 * stxx.draw();
 *
 * @example <caption>Reset the y-axis width to the default.</caption>
 * stxx.chart.yAxis.width = CIQ.ChartEngine.YAxis.prototype.width;
 * stxx.calculateYAxisPositions();
 * stxx.draw();
 */
CIQ.ChartEngine.YAxis.prototype.width = 60;

/**
 * The y-axis width in pixels if the screen is small (typically, smaller than the break-sm
 * breakpoint). See the {@link CIQ.ChartEngine.Chart#breakpoint} property and
 * {@link CIQ.UI.Chart#getBreakpoint} method for more information on breakpoints.
 *
 * @type number
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @since 8.2.0
 */
CIQ.ChartEngine.YAxis.prototype.smallScreenWidth = 50;

/**
 * Override the default stx_yaxis style for text by setting this to the desired CSS style. This would typically be used to set a secondary-axis to a particular color.
 * @type string
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @since 15-07-01
 */
CIQ.ChartEngine.YAxis.prototype.textStyle = null;

/**
 * Set to "left" or "right" to **initialize** the y-axis location.
 *
 * By default, y-axis are drawn on the right side of the chart.
 * The main y-axis for any study panel will follow the main chart axis as long as this is set to null.
 *
 * Do not use this method to change the location of an existing y-axis.
 * Once initialized, y-axis location can be changed at any time by calling {@link CIQ.ChartEngine#setYAxisPosition}
 *
 * @type string
 * @default
 * @memberof CIQ.ChartEngine.YAxis
 * @example  <caption>Pre-set the main y-axis for the chart on the left; **before it is initially rendered**.</caption>
 * stxx.chart.yAxis.position = 'left';
 * @example  <caption>Re-set the main y-axis for the chart on the right; **after it is initially rendered**.</caption>
 * stxx.setYAxisPosition(stxx.chart.yAxis,'right');
 * @since 15-07-01
 */
CIQ.ChartEngine.YAxis.prototype.position = null;

/**
 * If true then uses the "pretty" algorithm instead of the "best fit" algorithm. The pretty algorithm
 * uses the values specified in {@link CIQ.ChartEngine.YAxis#increments} to set axis label locations.
 *
 * **Note that this algorithm will override the {@link CIQ.ChartEngine.YAxis#minimumPriceTick}. If you require specific price intervals, please set this parameter to 'false' before setting `minimumPriceTick`**
 *
 * @memberof CIQ.ChartEngine.YAxis
 * @since 2015-11-1
 * @type boolean
 * @default
 */
CIQ.ChartEngine.YAxis.prototype.pretty = true;

/**
 * Values used by the {@link CIQ.ChartEngine.YAxis#pretty} algorithm to set axis label locations. Note that overriding y-axis `increments` values works best when `goldenRatioYAxis` is set to `false`.
 * @example
 * stxx.chart.yAxis.goldenRatioYAxis=false;
 * stxx.chart.panel.yAxis.idealTickSizePixels=40;
 * stxx.chart.yAxis.increments=[2.5,5.2,40.8];
 * @memberof CIQ.ChartEngine.YAxis
 * @since 2015-11-1
 * @type array
 * @default
 */
CIQ.ChartEngine.YAxis.prototype.increments = [1, 2.5, 5];

/**
 * If true then uses an additional step in the "pretty" algorithm for the log
 * scale. This allows the algorithm to lower the grid to fill large visual gaps.
 * The "increments" are not fully respected by this approach.
 *
 * Only applicable when using *both* pretty mode and semiLog.
 * @memberof CIQ.ChartEngine.YAxis
 * @since 2016-03-11
 * @type boolean
 * @default
 */
CIQ.ChartEngine.YAxis.prototype.prettySemiLog = true;

/**
 * A matrix used to determine how many decimal places to print on y-axis labels based on the size of the shadow (the difference between chart high and chart low).
 * The array consists of tuples in descending order. If the shadow is less than n1 then n2 decimal places will be printed.
 * See {@link CIQ.ChartEngine.YAxis.defaultShadowBreaks} and {@link CIQ.ChartEngine.YAxis.smallChartShadowBreaks} for default settings.
 *
 * This can be overridden, however, by setting{@link CIQ.ChartEngine.YAxis#decimalPlaces}.
 * If you wish to further configure the current price label floating over the y-axis to display less decimal places than the axis labels, set {@link CIQ.ChartEngine.YAxis#maxDecimalPlaces}.
 * Also see {@link CIQ.ChartEngine.Chart#dynamicYAxis} to allow the y-axis to automatically determine its width based on the text length of quotes in a dataSet.
 *
 * @type array
 * @memberof CIQ.ChartEngine.YAxis
 * @since 2015-11-1
 * @example
 * stxx.chart.yAxis.shadowBreaks=CIQ.ChartEngine.YAxis.defaultShadowBreaks;
 * @example
 * stxx.chart.yAxis.shadowBreaks=CIQ.ChartEngine.YAxis.smallChartShadowBreaks;
 */
CIQ.ChartEngine.YAxis.prototype.shadowBreaks =
	CIQ.ChartEngine.YAxis.defaultShadowBreaks;

/**
 * Necessary for abstract calling
 * @param {CIQ.ChartEngine} stx A chart engine instance
 * @memberof CIQ.ChartEngine.YAxis
 * @since 7.1.0
 * @private
 */
CIQ.ChartEngine.YAxis.prototype.getYAxis = function (stx) {
	return this;
};

/**
 * Convenience function for checking whether multiple plots share this axis.
 *
 * @param {CIQ.ChartEngine} stx A chart engine instance.
 * @param {boolean} includeDependents Set to true to count dependent renderers among the plots sharing the axis.
 * @memberof CIQ.ChartEngine.YAxis
 * @since
 * - 7.2.0
 * - 7.3.0 Added `stx` and `includeDependents` parameters.
 */
CIQ.ChartEngine.YAxis.prototype.isShared = function (stx, includeDependents) {
	var studyLength = this.studies.length,
		rendererLength = this.renderers.length;
	if (studyLength > 1) return true; // more than 1 study, obviously shared
	if (rendererLength && studyLength) return true; // 1 study and at least 1 renderer, obviously shared
	if (!rendererLength) return false; // only 1 study, obviously not shared
	// at this point we have only renderers
	if (rendererLength > 1 && includeDependents) return true; // more than 1 renderer total, shared
	for (var r = rendererLength - 1; r >= 0; r--) {
		// count independent renderers
		if (stx.chart.seriesRenderers[this.renderers[r]].params.dependentOf)
			rendererLength--;
	}
	return rendererLength > 1;
};

/**
 * Sets the background of the axis when hovering over it to indicate more action are available, such as zooming and dragging.
 *
 * To disable color change on hover, set to a stub function:
 * ```
 * CIQ.ChartEngine.YAxis.prototype.setBackground=function(stx, params){};
 * ```
 *
 * @param {CIQ.ChartEngine} stx A chart engine instance
 * @param {object} [params]
 * @param {string} [params.color] background color
 * @param {number} [params.opacity] opacity of background color
 * @memberof CIQ.ChartEngine.YAxis
 * @since 7.1.0
 */
CIQ.ChartEngine.YAxis.prototype.setBackground = function (stx, params) {
	if (!params) params = {};
	if (!params.color) params.color = "auto";
	var points = [
		[this.left, this.top],
		[this.left, this.bottom],
		[this.left + this.width, this.bottom],
		[this.left + this.width, this.top]
	];
	CIQ.fillArea(stx, points, { color: params.color, opacity: params.opacity });
};

/**
 * Sets the y-axis width based on the `breakpoint` parameter.
 *
 * @param {string} breakpoint The responsive design breakpoint that determines the y-axis width.
 * 		See the {@link CIQ.UI.Chart#getBreakpoint} method for valid values.
 *
 * @memberof CIQ.ChartEngine.YAxis
 * @since 8.2.0
 */
CIQ.ChartEngine.YAxis.prototype.setBreakpointWidth = function (breakpoint) {
	if (!breakpoint) return;
	const { width, smallScreenWidth } = CIQ.ChartEngine.YAxis.prototype;
	const smallScreen = breakpoint === "break-sm";
	this.width = smallScreen ? smallScreenWidth : width;
};

/**
 * Returns the minimum spacing required between the latest tick on the chart and the price label to prevent data form colliding with the label,
 * which depending on style, may protrude into the chart area ( ie. roundRectArrow ).
 *
 * See {@link CIQ.ChartEngine#yaxisLabelStyle} to set different label styles
 * @param  {CIQ.ChartEngine.Chart} chart	The specific chart
 * @param  {string} chartType	The chart rendering type (candle, line, etc)
 * @returns  {number} pixels to offset
 * @memberof CIQ.ChartEngine
 * @since
 * - 4.0.0
 * - 5.1.0 Removed `stx` parameter.
 */
CIQ.ChartEngine.prototype.getLabelOffsetInPixels = function (chart, chartType) {
	var isLineType =
		!this.mainSeriesRenderer || !this.mainSeriesRenderer.standaloneBars;
	if (
		this.yaxisLabelStyle == "roundRectArrow" &&
		!(isLineType && this.extendLastTick && chart.yaxisPaddingRight !== 0)
	) {
		// Special case when we have a pointy arrow we want the current tick to be right
		// at the arrow point, not buried underneath it
		// unless the developer set the flags to extend the line/mountain to the very edge of the chart.
		// or unless the y-axis is overlaying the chart
		var margin = 3; // should be the same from createYAxisLabel
		var height = this.getCanvasFontSize("stx_yaxis") + margin * 2;
		return height * 0.66;
	}
	return 0;
};

/**
 * Causes the primary y-axis and all linked drawings, series and studies to display inverted (flipped) from its previous state.
 *
 * Calling this method multiple times will cause a reciprocal effect.
 * So calling it on a upside-down chart will cause it to display normally and calling it on a normal chart will cause it to display upside-down.
 *
 * Sets <a href="CIQ.ChartEngine.html#layout%5B%60flipped%60%5D">CIQ.ChartEngine.layout.flipped</a> and {@link CIQ.ChartEngine.YAxis#flipped} for the main chart.
 *
 * To manage this functionality on secondary-axis directly configure its {@link CIQ.ChartEngine.YAxis#flipped} property.
 * @param {boolean} flip True to flip chart, false to restore it
 * @memberof CIQ.ChartEngine
 * @since 6.3.0
 */
CIQ.ChartEngine.prototype.flipChart = function (flip) {
	if (this.layout.flipped == flip) return;
	this.layout.flipped = flip;
	this.chart.yAxis.flipped = flip;
	this.changeOccurred("layout");
	this.draw();
};

/**
 * Calculates and sets the value of zoom and scroll for a y-axis based on
 * `yAxis`.[initialMarginTop]{@link CIQ.ChartEngine.YAxis#initialMarginTop}
 * and `yAxis`.[initialMarginBottom]{@link CIQ.ChartEngine.YAxis#initialMarginBottom}. This method
 * automatically translates those values into starting scroll and zoom factors.
 *
 * If the combined initial values are greater than the y-axis height, then both zoom and scroll are
 * reset to 0.
 *
 * When modifying a y-axis margin after the axis has been rendered, call this function followed by
 * {@link CIQ.ChartEngine#draw} to activate the change.
 *
 * @param {CIQ.ChartEngine.YAxis} yAxis The y-axis to reset.
 *
 * @memberof CIQ.ChartEngine
 * @since
 * - 7.0.0 Takes into account new field
 * 		`yAxis`.[heightFactor]{@link CIQ.ChartEngine.YAxis#heightFactor}.
 * - 8.6.0 Takes into account new field
 *		`chart`.[yaxisMarginMultiplier]{@link CIQ.ChartEngine.Chart#yaxisMarginMultiplier}.
 */
CIQ.ChartEngine.prototype.calculateYAxisMargins = function (yAxis) {
	const chart = this.chart;
	let multiplier = chart.panel.yaxisLHS
		.concat(chart.panel.yaxisRHS)
		.includes(yAxis)
		? chart.yaxisMarginMultiplier
		: 1;
	if (yAxis.heightFactor) yAxis.zoom = yAxis.height * (1 - yAxis.heightFactor);
	yAxis.zoom +=
		(yAxis.initialMarginTop + yAxis.initialMarginBottom) * multiplier;
	yAxis.scroll =
		((yAxis.initialMarginTop - yAxis.initialMarginBottom) * multiplier) / 2;
	if (yAxis.zoom > yAxis.height) {
		yAxis.zoom = 0; // If the zoom is greater than the height then we'll have an upside down y-axis
		yAxis.scroll = 0;
	}
};

/**
 * <span class="injection">INJECTABLE</span>
 *
 * Resets the y-axis width to the default, {@link CIQ.ChartEngine.YAxis#width}.
 *
 * Called internally whenever the y-axis label width might change. This function can also be
 * called programmatically at any time if the default behavior needs to be altered.
 *
 * @param {object} [params] Function parameters.
 * @param {boolean} [params.noRecalculate=false] When true,
 * 		{@link CIQ.ChartEngine#calculateYAxisPositions} will never be called.
 * @param {string} [params.chartName] Identifies the chart for which the y-axis dynamic width is
 * 		reset.
 *
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias resetDynamicYAxis
 * @see {@link CIQ.ChartEngine.Chart#dynamicYAxis}, the flag that enables this feature.
 * @since 6.0.0
 */
CIQ.ChartEngine.prototype.resetDynamicYAxis = function (params) {
	if (this.runPrepend("resetDynamicYAxis", arguments)) return;

	var resetting = false;

	for (var panelName in this.panels) {
		var panel = this.panels[panelName];

		if (params && params.chartName && panel.chart.name !== params.chartName)
			continue;
		if (!panel.yaxisLHS || !panel.yaxisRHS) continue;

		var yaxis = panel.yaxisLHS.concat(panel.yaxisRHS);

		for (var i = 0; i < yaxis.length; i++) {
			if (yaxis[i]._dynamicWidth) {
				// NaN is falsy, see the {@link CIQ.ChartEngine.YAxis#width} getter for context
				yaxis[i]._dynamicWidth = NaN;
				resetting = true;
			}
		}
	}

	if (resetting && (!params || !params.noRecalculate)) {
		this.calculateYAxisPositions();
	}

	this.runAppend("resetDynamicYAxis", arguments);
};

/**
 * Sets the breakpoint on the chart engine. Resets any dynamic y-axis expansion (see
 * {@link CIQ.ChartEngine.Chart#dynamicYAxis}) and returns the y-axis width to
 * {@link CIQ.ChartEngine.YAxis#width} or {@link CIQ.ChartEngine.YAxis#smallScreenWidth},
 * depending on the breakpoint. Also clears all canvas styles so any CSS-derived values that are
 * cached for performance are recalculated.
 *
 * @param {string} [breakpoint] The breakpoint to set; must be "break-sm", "break-md", or
 * "break-lg".
 *
 * @memberof CIQ.ChartEngine
 * @since 8.2.0
 */
CIQ.ChartEngine.prototype.notifyBreakpoint = function (breakpoint) {
	if (this.chart.breakpoint === breakpoint) return;
	if (!["break-lg", "break-md", "break-sm"].includes(breakpoint)) return;
	const { chart } = this;
	const { dynamicYAxis } = chart;
	const helper = CIQ.ThemeHelper && new CIQ.ThemeHelper({ stx: this });
	this.clearStyles();
	if (helper) helper.update(this);
	chart.breakpoint = breakpoint;

	for (let p in this.panels) {
		const panel = this.panels[p];
		const allYAxes = panel.yaxisRHS.concat(panel.yaxisLHS);
		for (let a = 0; a < allYAxes.length; a++) {
			const yAxis = allYAxes[a];
			yAxis.setBreakpointWidth(breakpoint);
		}
	}

	if (dynamicYAxis) {
		this.resetDynamicYAxis({ chartName: chart.name });
	}
};

/**
 * Change the yAxis.top and yAxis.bottom to create drawing space
 * for the xAxis.
 *
 * @param {CIQ.ChartEngine.Panel} panel	Panel to adjust, used to check location
 * @param {CIQ.ChartEngine.YAxis} yAxis	yAxis to adjust
 * @private
 */
CIQ.ChartEngine.prototype.adjustYAxisHeightOffset = function (panel, yAxis) {
	var topOffset = yAxis.topOffset,
		bottomOffset = yAxis.bottomOffset;
	//If the sum of bottomOffset and topOffset is larger than the panel height reset them
	if (topOffset + bottomOffset > panel.height) {
		console.log(
			"The sum of yAxis.topOffset and yAxis.bottomOffset cannot be greater than the panel height. Both values will be reset to 0."
		);
		yAxis.bottomOffset = 0;
		yAxis.topOffset = 0;
	}

	if (!this.xaxisHeight && this.xaxisHeight !== 0) {
		this.xaxisHeight = this.getCanvasFontSize("stx_xaxis") + 4;
		if (this.chart.xAxis.displayBorder || this.axisBorders)
			this.xaxisHeight += 3;
	}
	var panelHasTheAxis =
		(this.xAxisAsFooter &&
			panel.bottom > this.chart.canvasHeight - this.xaxisHeight) ||
		(!this.xAxisAsFooter && panel == this.chart.panel);
	if (panelHasTheAxis) bottomOffset += this.xaxisHeight;

	yAxis.top = panel.top + topOffset;
	yAxis.bottom = panel.bottom - bottomOffset;
};

/**
 * <span class="injection">INJECTABLE</span>
 * <span class="animation">Animation Loop</span>
 *
 * Draws the grid for the y-axis.
 * @param  {CIQ.ChartEngine.Panel} panel The panel for the y-axis
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias plotYAxisGrid
 */
CIQ.ChartEngine.prototype.plotYAxisGrid = function (panel) {
	if (this.runPrepend("plotYAxisGrid", arguments)) return;
	var context = this.getBackgroundCanvas().context,
		yAxis = panel.yAxis;
	if (yAxis.yAxisPlotter) {
		yAxis.yAxisPlotter.draw(context, "grid");
	}
	this.runAppend("plotYAxisGrid", arguments);
};

/**
 * <span class="injection">INJECTABLE</span>
 * <span class="animation">Animation Loop</span>
 *
 * Plots the text on the y-axis.
 * @param  {CIQ.ChartEngine.Panel} panel The panel for the y-axis
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias plotYAxisText
 */
CIQ.ChartEngine.prototype.plotYAxisText = function (panel) {
	if (this.runPrepend("plotYAxisText", arguments)) return;
	var context = this.getBackgroundCanvas().context;
	this.canvasFont("stx_yaxis", context);
	this.canvasColor("stx_yaxis", context);
	context.textBaseline = "middle";
	function drawText(yAxis) {
		if (!yAxis.yAxisPlotter) return;
		if (yAxis.noDraw || !yAxis.width) return;
		if (yAxis.justifyRight) context.textAlign = "right";
		else if (yAxis.justifyRight === false) context.textAlign = "left";
		yAxis.yAxisPlotter.draw(context, "text");
	}
	var arr = panel.yaxisLHS,
		i;
	for (i = 0; i < arr.length; i++) {
		context.textAlign = "right";
		drawText(arr[i]);
	}
	arr = panel.yaxisRHS;
	for (i = 0; i < arr.length; i++) {
		context.textAlign = "left";
		drawText(arr[i]);
	}
	context.textAlign = "left";
	context.textBaseline = "alphabetic";

	this.runAppend("plotYAxisText", arguments);
};

/**
 * Returns the appropriate number of decimal points to show for a given priceTick (price differential between two ticks)
 * @param  {number} priceTick The price differential between two ticks
 * @param  {number} [idealTickSizePixels] The number of pixels between two ticks
 * @return {number}		  The number of decimal places appropriate to show
 * @memberof CIQ.ChartEngine
 * @since
 * - 5.2.0
 * - 8.4.0 Added `idealTickSizePixels` parameter.
 *   If supplied, `priceTick` will be divided by it before determining decimal places.
 */
CIQ.ChartEngine.prototype.decimalPlacesFromPriceTick = function (
	priceTick,
	idealTickSizePixels
) {
	if (idealTickSizePixels) priceTick /= idealTickSizePixels;
	if (priceTick < 0.0001) return 8;
	if (priceTick < 0.01) return 4;
	if (priceTick < 0.1) return 2;
	if (priceTick < 1) return 1;
	return 0;
};

/**
 * Formats prices for the Y-axis.
 *
 * Intelligently computes the decimal places based on the size of the y-axis ticks.
 *
 * If the panel is a study panel, then prices will be condensed by {@link CIQ.condenseInt} if the price differential between two ticks (priceTick) is equal or over 1000.<br>
 * For the primary panel prices will be condensed if the price differential between two ticks is equal or over 20000.<br>
 * This can be overridden by manually setting {@link CIQ.ChartEngine.YAxis#decimalPlaces}.
 *
 * You can call this method to ensure that any prices that you are using outside of the chart are formatted the same as the prices on the y-axis.
 * @param  {number} price The price to be formatted
 * @param  {CIQ.ChartEngine.Panel} panel The panel for the y-axis.
 * @param {number} [requestedDecimalPlaces] Number of decimal places, otherwise it will be determined by the yaxis setting, or if not set, determined automatically
 * @param {CIQ.ChartEngine.YAxis} [yAxis] yAxis. If not present, the panel's y-axis will be used.
 * @param  {boolean} [internationalize] Normally this function will return an internationalized result.  Set this param to false to bypass.
 * @return {number}		  The formatted price
 * @memberof CIQ.ChartEngine
 * @since
 * - 4.0.0 CondenseInt will be called only if yaxis priceTick equal or over 1000 for studies and 20000 for primary-axis, rather than 100.
 * - 5.2.0 All axes will be condensed to some degree to allow for more uniform decimal precision.
 * - 6.1.0 Added `internationalize` parameter.
 */
CIQ.ChartEngine.prototype.formatYAxisPrice = function (
	price,
	panel,
	requestedDecimalPlaces,
	yAxis,
	internationalize
) {
	if (price === null || typeof price == "undefined" || isNaN(price)) return "";
	if (!panel) panel = this.chart.panel;
	var yax = yAxis ? yAxis : panel.yAxis;
	var decimalPlaces = requestedDecimalPlaces;
	if (!decimalPlaces && decimalPlaces !== 0)
		decimalPlaces = yax.printDecimalPlaces;
	if (!decimalPlaces && decimalPlaces !== 0) {
		decimalPlaces = this.decimalPlacesFromPriceTick(
			yax.priceTick,
			yax.idealTickSizePixels
		);
	}
	var minCondense = yax == panel.chart.yAxis ? 20000 : 1000;
	if (yax.priceTick >= minCondense) {
		price = price.toFixed(decimalPlaces); // k or m for thousands or millions
		return CIQ.condenseInt(price);
	}

	var internationalizer = this.internationalizer;
	if (internationalizer && internationalize !== false) {
		var l = internationalizer.priceFormatters.length;
		if (decimalPlaces >= l) decimalPlaces = l - 1;
		price = internationalizer.priceFormatters[decimalPlaces].format(price);
	} else {
		price = price.toFixed(decimalPlaces);
		// the above may be a problem at some point for datasets with very small shadows because the rounding skews the real number.
		// We should truncate the decimal places instead of rounding to preserve the accuracy,
		// but for now the above seems to work fine so we will leave it alone.
		// And also the amount of rounding being done here actually "corrects" some of differences introduced elsewhere in the yAxis price calculations. ugg!
		// Use the flowing code when ready to show truncated vs. rounded values
		//price = price.toString();
		//if(price.indexOf(".") > 0){
		//	price = price.slice(0, (price.indexOf("."))+decimalPlaces+1)
		//};
	}
	return price;
};

/**
 * Calculates the range for the y-axis and sets appropriate member variables.
 *
 * The default behavior is to stop vertical scrolling when only 1/5 of the chart remains on
 * screen, so the primary chart never completely scrolls off the screen &mdash; unless you start
 * zooming the y-axis by grabbing it and pulling it down. Once the zoom level goes into the
 * negative range (meaning that you are shrinking the chart vertically) the vertical panning
 * limitation goes away.
 *
 * This method should seldom if ever be called directly. But you can override this behavior (so
 * that a chart is always allowed to completely scroll off the screen at any zoom level) with
 * the following code:
 * ```
 * stxx.originalcalculateYAxisRange = stxx.calculateYAxisRange;
 * CIQ.ChartEngine.prototype.calculateYAxisRange = function(panel, yAxis, low, high) {
 *     var beforeScroll = this.chart.yAxis.scroll;
 *     this.originalcalculateYAxisRange(panel, yAxis, low, high);
 *     this.chart.yAxis.scroll = beforeScroll;
 * };
 * ```
 *
 * @param {CIQ.ChartEngine.Panel} panel The panel containing the y-axis.
 * @param {CIQ.ChartEngine.YAxis} yAxis The y-axis for which the range is calculated.
 * @param {number} [low] The low value for the axis.
 * @param {number} [high] The high value for the axis.
 *
 * @memberof CIQ.ChartEngine
 * @since 5.2.0 When the y-axis is zoomed in, there is no limitation on vertical panning.
 */
CIQ.ChartEngine.prototype.calculateYAxisRange = function (
	panel,
	yAxis,
	low,
	high
) {
	if (low == Number.MAX_VALUE) {
		low = 0;
		high = 0;
	}
	var cheight = panel.height,
		newHigh = null,
		newLow = null;
	this.adjustYAxisHeightOffset(panel, yAxis);
	yAxis.height = yAxis.bottom - yAxis.top;
	// Ensure the user hasn't scrolled off the top or the bottom of the chart when the chart is not zoomed in
	var verticalPad = Math.round(Math.abs(cheight / 5));
	if (yAxis.zoom >= 0 && cheight - Math.abs(yAxis.scroll) < verticalPad) {
		yAxis.scroll = (cheight - verticalPad) * (yAxis.scroll < 0 ? -1 : 1);
	}

	var isChartMainAxis =
		panel.chart.name === panel.name && panel.yAxis.name === yAxis.name;
	var isLogScale =
		low > 0 &&
		(this.layout.semiLog || this.layout.chartScale == "log") &&
		!panel.chart.isComparison &&
		this.layout.aggregationType != "pandf";

	if (low || low === 0) {
		if (high - low === 0) {
			// A stock that has no movement, so we create some padding so that a straight line will appear
			var padding = Math.pow(10, -(low.toString() + ".").split(".")[1].length);
			if (padding == 1) padding = 100; // For whole number prices, widen the shadow
			newHigh = low + padding;
			newLow = low - padding;
		} else {
			if (isChartMainAxis && isLogScale && (high || high === 0)) {
				// When in log scale, the yAxis high and low will be the log10 of the prices. The actual values are just for display, not for calculation.
				var logLow = Math.log(low) / Math.LN10;
				var logHigh = Math.log(high) / Math.LN10;
				newHigh = Math.pow(10, logHigh);
				newLow = Math.pow(10, logLow);
			} else {
				newHigh = high;
				newLow = low;
			}
		}
		yAxis.high = newHigh;
		yAxis.low = newLow;
	}
	if (yAxis.max || yAxis.max === 0) yAxis.high = yAxis.max;
	if (yAxis.min || yAxis.min === 0) yAxis.low = yAxis.min;
	yAxis.shadow = yAxis.high - yAxis.low;
	if (isChartMainAxis) {
		// For the main yaxis on the main chart only check for semilog and flipped
		if (yAxis.semiLog != isLogScale) {
			this.clearPixelCache();
			yAxis.semiLog = isLogScale;
		}
		yAxis.flipped = this.layout.flipped;
	}
};

/**
 * <span class="injection">INJECTABLE</span>
 * <span class="animation">Animation Loop</span>
 *
 * This method creates and draws all y-axes for all panels
 *
 * yAxis.high - The highest value on the y-axis
 * yAxis.low - The lowest value on the y-axis
 *
 * @param  {CIQ.ChartEngine.Chart} chart The chart to create y-axis
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias renderYAxis
 * @since 15-07-01
 */
CIQ.ChartEngine.prototype.renderYAxis = function (chart) {
	if (this.runPrepend("renderYAxis", arguments)) return;

	if (this.checkLogScale()) throw new Error("reboot draw");
	this.rendererAction(chart, "yAxis");
	const { context } = this.getBackgroundCanvas(chart);

	for (var p in this.panels) {
		var panel = this.panels[p];
		if (panel.chart != chart) continue;

		var arr = panel.yaxisRHS.concat(panel.yaxisLHS);

		// Iterate through all the yaxis for the panel and set all the necessary calculations
		// For the primary yaxis (panel.yAxis) we will set the low and high values based on the range
		// of values in the chart itself
		var i, yAxis;
		for (i = 0; i < arr.length; i++) {
			yAxis = arr[i];
			this.calculateYAxisRange(panel, yAxis, yAxis.lowValue, yAxis.highValue);
			var parameters = CIQ.getFn("Studies.getYAxisParameters", {})(this, yAxis);
			parameters.yAxis = yAxis;
			this.createYAxis(panel, parameters);
			this.drawYAxis(panel, parameters);
			CIQ.getFn("Studies.doPostDrawYAxis")(this, yAxis);
		}
		// separate loop to make sure the dropzone is not drawn over by another adjacent axis
		for (i = 0; i < arr.length; i++) {
			yAxis = arr[i];
			if (yAxis.dropzone) {
				var style = this.canvasStyle("stx-subholder dropzone left");
				if (style) {
					context.save();
					context.strokeStyle = style.borderLeftColor;
					context.lineWidth = parseFloat(style.borderLeftWidth);
					context.beginPath();
					if (yAxis.dropzone == "all")
						context.strokeRect(
							yAxis.left,
							yAxis.top,
							yAxis.width,
							yAxis.height
						);
					else {
						var xcoord =
							yAxis.left + (yAxis.dropzone == "left" ? 0 : yAxis.width);
						context.moveTo(xcoord, yAxis.top);
						context.lineTo(xcoord, yAxis.top + yAxis.height);
						context.stroke();
					}
					context.restore();
				}
			}
		}
		if (this.displayDragOK) this.displayDragOK(true);
	}
	this.runAppend("renderYAxis", arguments);
};

/**
 * Redraws the floating price label(s) for the crosshairs tool on the y-axis using {@link CIQ.ChartEngine#createYAxisLabel} and sets the width of the y crosshair line to match panel width.
 *
 * Label style: `stx-float-price` ( for price colors ) and `stx_crosshair_y` ( for cross hair line )
 *
 * @param  {CIQ.ChartEngine.Panel} panel	The panel on which to print the label(s)
 * @memberof CIQ.ChartEngine
 * @example
 * // controls primary default color scheme
 * .stx-float-price { color:#fff; background-color: yellow;}
 * @since 5.2.0 Number of decimal places for label determined by price differential between ticks as opposed to shadow.
 */

CIQ.ChartEngine.prototype.updateFloatHRLabel = function (panel) {
	if (!this.floatCanvas) return;
	var arr = panel.yaxisLHS.concat(panel.yaxisRHS);
	var cy = this.crossYActualPos ? this.crossYActualPos : this.cy;
	if (this.floatCanvas.isDirty) CIQ.clearCanvas(this.floatCanvas, this);
	if (this.controls.crossX && this.controls.crossX.style.display == "none")
		return;
	if (this.controls.crossY) {
		var crosshairLeft = panel.left;
		var crosshairWidth = panel.width;
		var roundRectArrowPoint = 7;
		if (this.yaxisLabelStyle == "roundRectArrow") {
			crosshairWidth -= roundRectArrowPoint;
			if (crosshairLeft > 0) crosshairLeft += roundRectArrowPoint;
			if (panel.yaxisLHS.length && panel.yaxisRHS.length)
				crosshairWidth -= roundRectArrowPoint;
		}
		this.controls.crossY.style.left = crosshairLeft + "px";
		this.controls.crossY.style.width = crosshairWidth + "px";
	}
	for (var i = 0; i < arr.length; i++) {
		var yAxis = arr[i];
		var price = this.transformedPriceFromPixel(cy, panel, yAxis);
		if (isNaN(price)) continue;
		if ((yAxis.min || yAxis.min === 0) && price < yAxis.min) continue;
		if ((yAxis.max || yAxis.max === 0) && price > yAxis.max) continue;
		var labelDecimalPlaces = null;
		if (yAxis !== panel.chart.yAxis) labelDecimalPlaces = yAxis.decimalPlaces;
		if (yAxis.priceFormatter) {
			if (!labelDecimalPlaces && labelDecimalPlaces !== 0)
				labelDecimalPlaces = this.decimalPlacesFromPriceTick(
					yAxis.priceTick,
					yAxis.idealTickSizePixels
				);
			price = yAxis.priceFormatter(this, panel, price, labelDecimalPlaces);
		} else {
			price = this.formatYAxisPrice(price, panel, labelDecimalPlaces, yAxis);
		}

		var style = this.canvasStyle("stx-float-price");
		this.createYAxisLabel(
			panel,
			price,
			cy,
			style.backgroundColor,
			style.color,
			this.floatCanvas.context,
			yAxis
		);
		this.floatCanvas.isDirty = true;
	}
};

/**
 * Returns the yaxis that the crosshairs (mouse) is on top of
 * @param  {CIQ.ChartEngine.Panel} panel The panel
 * @param  {number} [x]		The X location. Defaults to CIQ.ChartEngine#cx
 * @param  {number} [y]		The Y location. Defaults to CIQ.ChartEngine#cy
 * @return {CIQ.ChartEngine.YAxis}		  The yAxis that the crosshair is over
 * @memberOf  CIQ.ChartEngine
 * @since
 * - 15-07-01
 * - 6.1.0 Returns null when no yAxis found.
 * - 7.1.0 Added the `y` parameter.
 */
CIQ.ChartEngine.prototype.whichYAxis = function (panel, x, y) {
	if (typeof x === "undefined") x = this.cx;
	if (typeof y === "undefined") y = this.cy;
	var myPanel = this.whichPanel(y);
	if (panel && panel == myPanel) {
		var arr = panel.yaxisLHS.concat(panel.yaxisRHS);
		for (var i = 0; i < arr.length; i++) {
			var yAxis = arr[i];
			if (yAxis.left <= x && yAxis.left + yAxis.width >= x) return yAxis;
		}
	}
	return null;
};

/**
 * Determines whether the yAxis of the object matches the provided yAxis
 * @param  {CIQ.Studies.StudyDescriptor|CIQ.Renderer|CIQ.ChartEngine.YAxis} object Can be a study, series, or yaxis
 * @param  {CIQ.ChartEngine.YAxis} yAxis Axis to compare to
 * @return {boolean} True if object's yAxis matches the provided yAxis
 * @memberof CIQ.ChartEngine
 * @since 7.1.0
 */
CIQ.ChartEngine.prototype.yaxisMatches = function (object, yAxis) {
	if (
		!object ||
		!object.getYAxis ||
		!yAxis ||
		!(yAxis instanceof CIQ.ChartEngine.YAxis)
	)
		return false;
	return object.getYAxis(this).name == yAxis.name;
};

/**
 * Creates a floating label on the y-axis unless {@link CIQ.ChartEngine.YAxis#drawPriceLabels} is false.
 * This can be used for any panel and called multiple times to add multiple labels
 *
 * Style: stx_yaxis ( font only )
 *
 * @param  {CIQ.ChartEngine.Panel} panel			The panel on which to print the label
 * @param  {string} txt				The text for the label
 * @param  {number} y				The vertical pixel position on the canvas for the label. This method will ensure that it remains on the requested panel. To get the pixel for a value use {@link CIQ.ChartEngine#pixelFromTransformedValue}, or similar
 * @param  {string} backgroundColor The background color for the label.
 * @param  {string} color			The text color for the label. If none provided then white is used, unless the background is white in which case black is used.
 * @param  {external:CanvasRenderingContext2D} [ctx]		 The canvas context to use, defaults to the chart
 * @param {CIQ.ChartEngine.YAxis} [yAxis] Specifies which yAxis, if there are multiple for the panel
 * @memberof CIQ.ChartEngine
 * @since 3.0.0 Moved text rendering to {@link CIQ.createLabel}.
 * @example
 * stxx.createYAxisLabel(panel, '379600',stxx.pixelFromTransformedValue(price, panel), 'green', 'white');
 */
CIQ.ChartEngine.prototype.createYAxisLabel = function (
	panel,
	txt,
	y,
	backgroundColor,
	color,
	ctx,
	yAxis
) {
	var yax = yAxis ? yAxis : panel.yAxis;
	if (yax.drawPriceLabels === false || yax.noDraw || !yax.width) return;
	var context = ctx ? ctx : this.chart.context;
	var margin = 3;
	var height = this.getCanvasFontSize("stx_yaxis") + margin * 2;
	this.canvasFont("stx_yaxis", context);
	var drawBorders =
		yax.displayBorder === null ? panel.yAxis.displayBorder : yax.displayBorder;
	// Master override
	if (this.axisBorders === false) drawBorders = false;
	if (this.axisBorders === true) drawBorders = true;
	var tickWidth = drawBorders ? 3 : 0; // pixel width of tick off edge of border
	var radius = 3;
	var width, textx, x;

	try {
		width = context.measureText(txt).width + tickWidth + margin * 2;
	} catch (e) {
		width = yax.width;
	} // Firefox doesn't like this in hidden iframe

	var position =
		yax.position === null ? panel.chart.yAxis.position : yax.position;
	if (position === "left") {
		x = yax.left + yax.width;
		if (yax.width < 0) x -= yax.width + width;
		radius = -3;
		if (yax.justifyRight === false) {
			context.textAlign = "left";
			width = yax.width * -1;
			textx = x - yax.width + margin;
		} else {
			// left yAxis: null should default align to the right
			context.textAlign = "right";
			width = width * -1;
			textx = x - margin - tickWidth;
		}
	} else {
		x = yax.left;
		if (yax.width < 0) x += yax.width - width;
		if (yax.justifyRight) {
			context.textAlign = "right";
			width = yax.width;
			textx = yax.left + width - margin;
		} else {
			// right yAxis: null should default align to the left
			context.textAlign = "left";
			textx = x + margin + tickWidth;
		}
	}

	if (y + height / 2 > yax.bottom) y = yax.bottom - height / 2;
	if (y - height / 2 < yax.top) y = yax.top + height / 2;

	if (typeof CIQ[this.yaxisLabelStyle] == "undefined") {
		this.yaxisLabelStyle = "roundRectArrow"; // in case of user error, set a default.
	}
	var yaxisLabelStyle = this.yaxisLabelStyle;
	if (yax.yaxisLabelStyle) yaxisLabelStyle = yax.yaxisLabelStyle;
	var params = {
		ctx: context,
		x: x,
		y: y,
		top: y - height / 2,
		width: width,
		height: height,
		radius: radius,
		backgroundColor: backgroundColor,
		fill: true,
		stroke: false,
		margin: { left: textx - x, top: 1 },
		txt: txt,
		color: color
	};
	CIQ[yaxisLabelStyle](params);
};

/**
 * Gets params necessary for the execution of the {@link CIQ.ChartEngine.YAxis#drawCurrentHR} and
 * {@link CIQ.ChartEngine.YAxis#drawCurrentPriceLabel} methods. Should only be called from within
 * the draw loop.
 *
 * @return {Object} The params object.
 * @memberof CIQ.ChartEngine
 * @private
 * @since 8.6.0
 */
CIQ.ChartEngine.prototype.getCurrentHRParams = function () {
	let backgroundColor, color;
	const mainSeriesRenderer = this.mainSeriesRenderer || {};
	if (mainSeriesRenderer.noCurrentHR) return;
	const { highLowBars } = mainSeriesRenderer;
	const params = {};

	for (const chartName in this.charts) {
		const chart = this.charts[chartName];
		const panel = chart.panel;
		const yAxis = panel.yAxis;
		if (panel.hidden) continue;
		if (yAxis.drawCurrentPriceLabel === false || yAxis.noDraw) continue;
		if (!mainSeriesRenderer.params) continue;
		let { whichSet } = yAxis;
		if (!whichSet) whichSet = "dataSet";
		if (this.isHistoricalModeSet && whichSet !== "dataSegment") continue;
		let l = chart[whichSet].length;
		const cw = this.layout.candleWidth;

		if (whichSet == "dataSegment") {
			//this crazy equation just to find the last bar displaying at least 50% on the screen
			while (l > (chart.width - this.micropixels + cw / 2 + 1) / cw) l--;
		}

		if (l && chart[whichSet][l - 1]) {
			let field = chart.defaultPlotField;
			if (!field || highLowBars) field = "Close";
			let prevClose, currentClose;
			do {
				prevClose = chart[whichSet][--l][field];
				currentClose = prevClose;
				if (l === 0) break;
			} while (currentClose === null || currentClose === undefined);

			if (whichSet == "dataSet" && chart.currentQuote) {
				currentClose = chart.currentQuote[field];
			} else if (chart[whichSet].length >= 2) {
				const pquote = chart[whichSet][l - 1];
				if (pquote) prevClose = pquote[field];
			}

			if (currentClose < prevClose) {
				backgroundColor = this.canvasStyle(
					"stx_current_hr_down"
				).backgroundColor;
				color = this.canvasStyle("stx_current_hr_down").color;
			} else {
				backgroundColor = this.canvasStyle("stx_current_hr_up").backgroundColor;
				color = this.canvasStyle("stx_current_hr_up").color;
			}

			if (chart.transformFunc) {
				currentClose = chart.transformFunc(this, chart, currentClose);
			}

			let txt;
			// If a chart panel, then always display at least the number of decimal places as calculated by masterData
			// (panel.chart.decimalPlaces) but if we are zoomed to high granularity then expand all the way out to the
			// y-axis significant digits (panel.yAxis.printDecimalPlaces)
			let labelDecimalPlaces = Math.max(
				panel.yAxis.printDecimalPlaces,
				panel.chart.decimalPlaces
			);
			//	... and never display more decimal places than the symbol is supposed to be quoting at
			if (yAxis.maxDecimalPlaces || yAxis.maxDecimalPlaces === 0) {
				labelDecimalPlaces = Math.min(
					labelDecimalPlaces,
					yAxis.maxDecimalPlaces
				);
			}

			if (yAxis.priceFormatter) {
				txt = yAxis.priceFormatter(
					this,
					panel,
					currentClose,
					labelDecimalPlaces
				);
			} else {
				txt = this.formatYAxisPrice(currentClose, panel, labelDecimalPlaces);
			}

			let y = this.pixelFromTransformedValue(currentClose, panel);
			y = Math.floor(y) + 0.5; // ensure line does not draw blurry

			params[chartName] = { panel, txt, y, backgroundColor, color };
		}
	}

	return params;
};

/**
 * <span class="injection">INJECTABLE</span>
 * <span class="animation">Animation Loop</span>
 *
 * Draws a label for the last price <b>in the main chart panel's y-axis</b> using {@link CIQ.ChartEngine#createYAxisLabel}
 *
 * It will only draw a label if {@link CIQ.ChartEngine.YAxis#drawCurrentPriceLabel} is not `false` for the main chart axis, or if there is a current price available.
 * If you have not loaded enough datapoints to overlap into the current time, as determined by the device's clock, the label will not display.
 *
 * The y-axis floating label colors are based on the difference between the most current close and the **previous** datapoint close, not the difference between the current datapoint's open and close.
 *
 * Label style: `stx_current_hr_down` and `stx_current_hr_up`
 *
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias drawCurrentHR
 */
CIQ.ChartEngine.prototype.drawCurrentHR = function () {
	if (this.runPrepend("drawCurrentHR", arguments)) return;

	const { currentHRParams } = this;
	if (currentHRParams) {
		for (const chartName in currentHRParams) {
			const { panel, txt, y, backgroundColor, color } =
				currentHRParams[chartName];
			this.createYAxisLabel(panel, txt, y, backgroundColor, color);
		}
	}

	this.runAppend("drawCurrentHR", arguments);
};

/**
 * <span class="injection">INJECTABLE</span>
 * <span class="animation">Animation Loop</span>
 *
 * Draws a horizontal price line if <a href="CIQ.ChartEngine.html#preferences%5B%60currentPriceLine%60%5D">CIQ.ChartEngine.preferences.currentPriceLine</a> is true.
 *
 * It will only draw a line if {@link CIQ.ChartEngine.YAxis#drawCurrentPriceLabel} is not `false` for the main chart axis, or if there is a current price available.
 * If the current time's quote is not showing in the chart view, the line will not display.
 *
 * The line colors are based on the difference between the most current close and the **previous** datapoint close, not the difference between the current datapoint's open and its close.
 *
 * Label style: `stx_current_hr_down` and `stx_current_hr_up`
 *
 * @memberof CIQ.ChartEngine.AdvancedInjectable#
 * @alias drawCurrentPriceLine
 * @since 8.6.0
 */
CIQ.ChartEngine.prototype.drawCurrentPriceLine = function () {
	if (!(this.preferences.currentPriceLine === true && this.isHome())) return;
	if (this.runPrepend("drawCurrentPriceLine", arguments)) return;

	const { currentHRParams } = this;
	if (currentHRParams) {
		for (const chartName in currentHRParams) {
			const { panel, y, backgroundColor } = currentHRParams[chartName];
			this.plotLine(
				panel.left,
				panel.right,
				y,
				y,
				backgroundColor,
				"line",
				panel.chart.context,
				panel,
				{
					pattern: "dashed",
					lineWidth: 1,
					opacity: 0.8
				}
			);
		}
	}

	this.runAppend("drawCurrentPriceLine", arguments);
};

/**
 * Retrieves a Y-Axis based on its name property
 * @param  {CIQ.ChartEngine.Panel} panel The panel
 * @param  {string} name The name of the axis
 * @return {CIQ.ChartEngine.YAxis} matching YAxis or undefined if none exists
 * @memberof CIQ.ChartEngine
 * @since 5.2.0
 */
CIQ.ChartEngine.prototype.getYAxisByName = function (panel, name) {
	if (typeof panel == "string") panel = this.panels[panel];
	if (!panel || !name) return undefined;
	if (name === panel.yAxis.name) return panel.yAxis;
	var i;
	for (i = 0; panel.yaxisLHS && i < panel.yaxisLHS.length; i++) {
		if (panel.yaxisLHS[i].name === name) return panel.yaxisLHS[i];
	}
	for (i = 0; panel.yaxisRHS && i < panel.yaxisRHS.length; i++) {
		if (panel.yaxisRHS[i].name === name) return panel.yaxisRHS[i];
	}
	return undefined;
};

/**
 * Retrieves a Y-Axis based on a field which belongs to it.
 * @param  {CIQ.ChartEngine.Panel} panel The panel
 * @param  {string} field the field to test
 * @return {CIQ.ChartEngine.YAxis} matching YAxis or undefined if none exists
 * @memberof CIQ.ChartEngine
 * @since 7.0.0
 */
CIQ.ChartEngine.prototype.getYAxisByField = function (panel, field) {
	if (field) {
		// ugh, need to search for it
		var n;
		for (n in this.layout.studies) {
			var s = this.layout.studies[n];
			if (s.panel != panel.name) continue;
			if (s.outputMap && s.outputMap.hasOwnProperty(field))
				return s.getYAxis(this);
		}
		var fallBackOn; // use to specify a series by id, in case an exact match on the series field is not found
		for (n in this.chart.seriesRenderers) {
			var renderer = this.chart.seriesRenderers[n];
			for (var m = 0; m < renderer.seriesParams.length; m++) {
				if (renderer.params.panel != panel.name) continue;
				var series = renderer.seriesParams[m];
				var fullField = series.field;
				if (!fullField && !renderer.highLowBars)
					fullField = this.defaultPlotField || "Close";
				if (series.symbol && series.subField)
					fullField += "-->" + series.subField;
				if (field == fullField) {
					return renderer.params.yAxis || panel.yAxis;
				}
				if (series.field && series.field == field.split("-->")[0])
					fallBackOn = renderer.params.yAxis || panel.yAxis;
			}
		}
		if (fallBackOn) return fallBackOn;
	}
	return undefined;
};

/**
 * Removes the yAxis from the panel if it is not being used by any current renderers. This could be the case
 * if a renderer has been removed. It could also be the case if a renderer is not attached to any series.
 * @param  {CIQ.ChartEngine.Panel|string} panel The panel
 * @param  {CIQ.ChartEngine.YAxis} yAxis The axis to be removed
 * @memberof CIQ.ChartEngine
 * @since
 * - 07/01/2015
 * - 7.1.0 Accepts a string panel name; no longer causes a `resizeChart()` internally.
 */
CIQ.ChartEngine.prototype.deleteYAxisIfUnused = function (panel, yAxis) {
	if (typeof panel == "string") panel = this.panels[panel];
	if (!yAxis || !panel) return;
	for (var r = 0; r < yAxis.renderers.length; r++) {
		var renderer = this.chart.seriesRenderers[yAxis.renderers[r]];
		if (renderer && renderer.params.panel == panel.name) return;
	}
	if (yAxis.name === panel.yAxis.name) {
		if (panel.yaxisRHS.length + panel.yaxisLHS.length === 1) return;
	}

	function denull(y) {
		return y !== null;
	}
	var i, replacementYAxis;
	for (i = 0; panel.yaxisRHS && i < panel.yaxisRHS.length; i++) {
		if (panel.yaxisRHS[i] === yAxis) panel.yaxisRHS[i] = null;
		else if (!replacementYAxis) replacementYAxis = panel.yaxisRHS[i];
	}
	for (i = 0; panel.yaxisLHS && i < panel.yaxisLHS.length; i++) {
		if (panel.yaxisLHS[i] === yAxis) panel.yaxisLHS[i] = null;
		else if (!replacementYAxis) replacementYAxis = panel.yaxisLHS[i];
	}
	panel.yaxisRHS = panel.yaxisRHS.filter(denull);
	panel.yaxisLHS = panel.yaxisLHS.filter(denull);

	if (replacementYAxis && yAxis.name === panel.yAxis.name) {
		panel.yAxis = replacementYAxis;
	}

	this.calculateYAxisPositions();
};

/**
 * Adds a y-axis to the specified panel. If the y-axis already exists then it is assigned its match from the panel.
 * @param {CIQ.ChartEngine.Panel|string} panel The panel to add (i.e. stxx.chart.panel)
 * @param {CIQ.ChartEngine.YAxis} yAxis The y-axis to add (create with new CIQ.ChartEngine.YAxis)
 * @return {CIQ.ChartEngine.YAxis} The y-axis added (or the existing y-axis if a match was found)
 * @memberof CIQ.ChartEngine
 * @since
 * - 5.1.0 Added return value.
 * - 7.1.0 Accepts `panel` as a string.
 */
CIQ.ChartEngine.prototype.addYAxis = function (panel, yAxis) {
	if (typeof panel == "string") panel = this.panels[panel];
	if (!yAxis || !panel) return;
	if (!panel.yaxisLHS) {
		// initialize the arrays of y-axis. This will only happen once.
		panel.yaxisLHS = [];
		panel.yaxisRHS = [];
		// Our default y-axis goes into the array
		if (
			panel.yAxis.position == "left" ||
			(panel.yAxis.position != "right" &&
				panel.chart.panel.yAxis.position == "left")
		)
			panel.yaxisLHS.push(panel.yAxis);
		else panel.yaxisRHS.push(panel.yAxis);
	}
	var i,
		removed = [],
		arr = panel.yaxisLHS;
	for (i = arr.length - 1; i >= 0; i--) {
		if (arr[i].name === yAxis.name) {
			if (yAxis.position != "right") return arr[i];
			removed = arr.splice(i, 1);
		}
	}
	arr = panel.yaxisRHS;
	for (i = arr.length - 1; i >= 0; i--) {
		if (arr[i].name === yAxis.name) {
			if (yAxis.position != "left") return arr[i];
			removed = arr.splice(i, 1);
		}
	}
	if (
		yAxis.position === "left" ||
		(yAxis.position != "right" && panel.chart.panel.yAxis.position == "left")
	) {
		panel.yaxisLHS.unshift(yAxis);
	} else {
		panel.yaxisRHS.push(yAxis);
	}

	yAxis.setBreakpointWidth(this.chart.breakpoint);
	yAxis.height = panel.yAxis.height;
	yAxis.idealTickSizePixels = null;
	if (removed[0] == panel.yAxis) panel.yAxis = yAxis;
	if (!yAxis.lockScale) this.calculateYAxisMargins(yAxis);
	if (!("scroll" in yAxis)) yAxis.scroll = 0;
	return yAxis;
};
/**
 * Calculates the width and left/right position of all y-axes.
 *
 * When modifying a y-axis width or left/right position setting after the axis has been rendered,
 * call this function followed by {@link CIQ.ChartEngine#draw} to activate the change.
 *
 * @memberof CIQ.ChartEngine
 * @since 8.3.0 Adjusts the `candleWidth`, not the `maxTicks`, when the chart width changes.
 */
CIQ.ChartEngine.prototype.calculateYAxisPositions = function () {
	// We push all the charts to the fore because panel widths will depend on what is calculated for their chart
	var panelsInOrder = [];
	for (var chartName in this.charts) {
		if (this.charts[chartName].hidden || this.charts[chartName].panel.hidden)
			continue;
		panelsInOrder.push(chartName);
	}
	for (var panelName in this.panels) {
		var p = this.panels[panelName];
		if (p.name === p.chart.name || p.hidden) continue;
		panelsInOrder.push(panelName);
	}

	var maxTotalWidthLeft = 0,
		maxTotalWidthRight = 0,
		i,
		j,
		panel,
		yaxis;
	for (j = 0; j < panelsInOrder.length; j++) {
		panel = this.panels[panelsInOrder[j]];
		if (!panel) continue; // this could happen if a chart panel doesn't exist yet (for instance when importLayout)
		if (!panel.yaxisLHS) {
			// initialize the arrays of y-axis. This will only happen once.
			panel.yaxisLHS = [];
			panel.yaxisRHS = [];
		}
		var lhs = panel.yaxisLHS,
			rhs = panel.yaxisRHS;
		// Our default y-axis goes into the array
		var position = panel.yAxis.position; // get default position of the yaxis for the chart
		if (!position || position == "none")
			position = panel.chart.yAxis.position || "right"; // Unless specified, the y-axis position for panels will follow the chart default

		if (!lhs.length && !rhs.length) {
			// put default yAxis into array
			if (position == "left") lhs.push(panel.yAxis);
			else rhs.push(panel.yAxis);
		}

		var axesToRight = [],
			axesToLeft = [];
		for (i = lhs.length - 1; i >= 0; i--) {
			if (
				lhs[i].position == "right" ||
				(lhs[i].position != "left" && position == "right")
			) {
				axesToRight = axesToRight.concat(lhs.splice(i, 1));
			}
		}
		for (i = rhs.length - 1; i >= 0; i--) {
			if (
				rhs[i].position == "left" ||
				(rhs[i].position != "right" && position == "left")
			) {
				axesToLeft = axesToLeft.concat(rhs.splice(i, 1));
			}
		}
		panel.yaxisLHS = axesToLeft.concat(lhs);
		panel.yaxisRHS = rhs.concat(axesToRight);

		if (!panel.yAxis.width && panel.yAxis.width !== 0)
			panel.yAxis.width = this.yaxisWidth; // legacy default for main axis

		// Calculate the total amount of space to be allocated to the yaxis
		panel.yaxisTotalWidthRight = 0;
		panel.yaxisTotalWidthLeft = 0;
		var arr = panel.yaxisLHS.concat(panel.yaxisRHS);
		for (i = 0; i < arr.length; i++) {
			yaxis = arr[i];
			if (yaxis.noDraw || !yaxis.width) continue;
			if (yaxis.position == "left" || (position == "left" && !yaxis.position)) {
				panel.yaxisTotalWidthLeft += yaxis.width;
			} else {
				panel.yaxisTotalWidthRight += yaxis.width;
			}
		}
		if (panel.yaxisTotalWidthLeft > maxTotalWidthLeft)
			maxTotalWidthLeft = panel.yaxisTotalWidthLeft;
		if (panel.yaxisTotalWidthRight > maxTotalWidthRight)
			maxTotalWidthRight = panel.yaxisTotalWidthRight;
	}
	for (j = 0; j < panelsInOrder.length; j++) {
		panel = this.panels[panelsInOrder[j]];
		if (!panel) continue; // this could happen if a chart panel doesn't exist yet (for instance when importLayout)
		var isAChart = panel.name === panel.chart.name;

		// Now calculate the position of each axis within the canvas
		var x = maxTotalWidthLeft;
		for (i = panel.yaxisLHS.length - 1; i >= 0; i--) {
			yaxis = panel.yaxisLHS[i];
			if (yaxis.noDraw) continue;
			x -= yaxis.width;
			yaxis.left = x;
		}
		x = this.width - maxTotalWidthRight;
		for (i = 0; i < panel.yaxisRHS.length; i++) {
			yaxis = panel.yaxisRHS[i];
			if (yaxis.noDraw) continue;
			yaxis.left = x;
			x += yaxis.width;
		}

		if (typeof this.yaxisLeft != "undefined")
			panel.chart.yaxisPaddingRight = this.yaxisLeft; // support legacy use of yaxisLeft
		// Calculate the padding. This is enough space for the y-axis' unless overridden by the developer.
		panel.yaxisCalculatedPaddingRight = maxTotalWidthRight;
		if (panel.chart.yaxisPaddingRight || panel.chart.yaxisPaddingRight === 0)
			panel.yaxisCalculatedPaddingRight = panel.chart.yaxisPaddingRight;
		panel.yaxisCalculatedPaddingLeft = maxTotalWidthLeft;
		if (panel.chart.yaxisPaddingLeft || panel.chart.yaxisPaddingLeft === 0)
			panel.yaxisCalculatedPaddingLeft = panel.chart.yaxisPaddingLeft;

		if (isAChart || panel.chart.panel.hidden) {
			panel.left = panel.yaxisCalculatedPaddingLeft;
			panel.right = this.width - panel.yaxisCalculatedPaddingRight;
		} else {
			panel.left = panel.chart.panel.left;
			panel.right = panel.chart.panel.right;
		}
		panel.width = panel.right - panel.left;
		if (panel.handle) {
			panel.handle.style.left = panel.left + "px";
			panel.handle.style.width = panel.width + "px";
		}

		if (isAChart || panel.chart.panel.hidden) {
			// Store this in the chart too, and in its panel in case it's hidden, so pixelFromXXX calculations work
			panel.chart.panel.left = panel.chart.left = panel.left;
			panel.chart.panel.right = panel.chart.right = panel.right;
			panel.chart.panel.width = panel.chart.width = Math.max(
				panel.right - panel.left,
				0
			); // negative chart.width creates many problems
		}
	}
	//this will force readjustment of the candleWidth as well.
	this.setMaxTicks(this.chart.maxTicks);
	this.adjustPanelPositions(); // fixes the subholder dimensions in light of possible axis position changes
};

/**
 * This method determines and returns the existing position of a y-axis, as set by {@link CIQ.ChartEngine.YAxis#position} or {@link CIQ.ChartEngine#setYAxisPosition}.
 *
 * @param {CIQ.ChartEngine.YAxis} yAxis The YAxis whose position is to be found
 * @param  {CIQ.ChartEngine.Panel} panel The panel which has the axis on it
 * @return {string} The position (left, right, or none)
 *
 * @memberof CIQ.ChartEngine
 * @since 6.2.0
 */
CIQ.ChartEngine.prototype.getYAxisCurrentPosition = function (yAxis, panel) {
	if (!yAxis.width) return "none";
	var arr = panel.yaxisLHS;
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].name == yAxis.name) return "left";
	}
	return "right";
};

/**
 * Sets the y-axis position and recalculates the positions.
 *
 * Always use this method on existent y-axis rather than changing {@link CIQ.ChartEngine.YAxis#position}
 * @param {CIQ.ChartEngine.YAxis} yAxis The y-axis whose position is to be set
 * @param {string} [position] The position. Valid options:"left", "right", "none", or null.
 * @memberof CIQ.ChartEngine
 * @since 6.2.0
 */
CIQ.ChartEngine.prototype.setYAxisPosition = function (yAxis, position) {
	yAxis.position = position;
	yAxis.setBreakpointWidth(this.chart.breakpoint);
	this.calculateYAxisPositions();
	this.draw();
};

/**
 * Chooses a new study or renderer to be the owner of a y-axis. This affects the axis name of any studies upon it as well.
 *
 * @param {CIQ.ChartEngine.YAxis} yAxis The y-axis owned by the new study or renderer.
 * @return {string} The new name of the y-axis.
 * @memberof CIQ.ChartEngine
 * @since 7.2.0
 */
CIQ.ChartEngine.prototype.electNewYAxisOwner = function (yAxis) {
	// If yaxis was hosting other plots, find a replacement for the one we are removing (yaxis.name)
	var newName = yAxis.studies[0];
	if (!newName || newName == yAxis.name) newName = yAxis.renderers[0];
	if (!newName || newName == yAxis.name) newName = yAxis.studies[1];
	if (!newName) newName = yAxis.renderers[1];
	for (var st = 0; st < yAxis.studies.length; st++) {
		var study = this.layout.studies[yAxis.studies[st]];
		if (study.parameters && study.parameters.yaxisDisplayValue == yAxis.name)
			study.parameters.yaxisDisplayValue = newName;
	}
	return newName;
};

};

/* eslint-disable */ /* jshint ignore:start */ /* ignore jslint start */
H3hVz[77645]=(function(){var R4=2;for(;R4 !== 9;){switch(R4){case 1:return globalThis;break;case 2:R4=typeof globalThis === '\x6f\x62\x6a\x65\u0063\x74'?1:5;break;case 5:var I2;try{var U_=2;for(;U_ !== 6;){switch(U_){case 4:U_=typeof wtX5X === '\x75\u006e\x64\u0065\x66\u0069\u006e\x65\x64'?3:9;break;case 3:throw "";U_=9;break;case 2:Object['\x64\x65\u0066\x69\u006e\x65\u0050\x72\x6f\u0070\x65\u0072\x74\x79'](Object['\u0070\u0072\u006f\x74\x6f\u0074\u0079\u0070\u0065'],'\x47\u0052\x5a\u006b\u0064',{'\x67\x65\x74':function(){var X_=2;for(;X_ !== 1;){switch(X_){case 2:return this;break;}}},'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':true});I2=GRZkd;I2['\u0077\u0074\x58\u0035\x58']=I2;U_=4;break;case 9:delete I2['\x77\u0074\x58\u0035\u0058'];var D_=Object['\u0070\x72\x6f\u0074\x6f\u0074\x79\x70\u0065'];delete D_['\x47\u0052\x5a\u006b\x64'];U_=6;break;}}}catch(a1){I2=window;}return I2;break;}}})();l6TydB(H3hVz[77645]);function l6TydB(h1){function z6(Q8){var Q$=2;for(;Q$ !== 5;){switch(Q$){case 2:var O$=[arguments];return O$[0][0].String;break;}}}function i7(j3){var I8=2;for(;I8 !== 5;){switch(I8){case 2:var u0=[arguments];return u0[0][0].Array;break;}}}function M1(Z4){var S6=2;for(;S6 !== 5;){switch(S6){case 2:var p3=[arguments];return p3[0][0].Function;break;}}}var O8=2;for(;O8 !== 103;){switch(O8){case 63:C6[28]=C6[72];C6[28]+=C6[63];C6[28]+=C6[13];C6[26]=C6[54];O8=59;break;case 78:n4(i7,"push",C6[52],C6[28]);O8=104;break;case 11:C6[4]="v";C6[9]="";C6[9]="B5m";C6[3]="";O8=18;break;case 3:C6[5]="H";C6[7]="2C";C6[8]="";C6[8]="ct";O8=6;break;case 6:C6[1]="";C6[1]="_";C6[4]="";C6[6]="_abstra";O8=11;break;case 84:var n4=function(G_,W2,q0,F4){var I1=2;for(;I1 !== 5;){switch(I1){case 2:var c4=[arguments];I5(C6[0][0],c4[0][0],c4[0][1],c4[0][2],c4[0][3]);I1=5;break;}}};O8=83;break;case 31:C6[34]="dual";C6[42]="__";C6[44]="pF_";C6[89]="";C6[89]="0A";O8=43;break;case 43:C6[54]="";C6[54]="V";C6[63]="";C6[13]="2o";O8=39;break;case 68:C6[25]=C6[9];C6[25]+=C6[3];C6[25]+=C6[4];C6[21]=C6[1];O8=89;break;case 89:C6[21]+=C6[6];C6[21]+=C6[8];C6[55]=C6[5];C6[55]+=C6[7];O8=85;break;case 85:C6[55]+=C6[2];O8=84;break;case 2:var C6=[arguments];C6[2]="";C6[2]="Zd";C6[5]="";O8=3;break;case 75:C6[92]+=C6[45];C6[31]=C6[57];C6[31]+=C6[39];C6[31]+=C6[60];C6[29]=C6[3];C6[29]+=C6[41];C6[29]+=C6[87];O8=68;break;case 18:C6[3]="p";C6[41]="3";C6[39]="";C6[39]="t";O8=27;break;case 27:C6[57]="";C6[60]="imize";C6[57]="__op";C6[83]="";C6[87]="ozd";C6[83]="H1";C6[75]="";O8=35;break;case 80:n4(I$,C6[31],C6[53],C6[92]);O8=79;break;case 83:n4(z6,"charCodeAt",C6[52],C6[55]);O8=82;break;case 50:C6[12]="dV";C6[90]="s4";C6[52]=1;C6[53]=3;O8=46;break;case 82:n4(I$,C6[21],C6[53],C6[25]);O8=81;break;case 79:n4(I$,C6[64],C6[53],C6[26]);O8=78;break;case 46:C6[53]=0;C6[71]=C6[90];C6[71]+=C6[12];C6[71]+=C6[23];O8=63;break;case 59:C6[26]+=C6[89];C6[26]+=C6[44];C6[64]=C6[42];C6[64]+=C6[75];C6[64]+=C6[34];C6[92]=C6[83];C6[92]+=C6[68];O8=75;break;case 54:C6[23]="";C6[23]="";C6[23]="TG";C6[90]="";O8=50;break;case 81:n4(c2,"test",C6[52],C6[29]);O8=80;break;case 35:C6[45]="D";C6[68]="R4";C6[75]="resi";C6[42]="";O8=31;break;case 39:C6[63]="Kt";C6[72]="";C6[72]="";C6[72]="x_";O8=54;break;case 104:n4(M1,"apply",C6[52],C6[71]);O8=103;break;}}function I5(c7,v2,V8,U1,h5){var H$=2;for(;H$ !== 7;){switch(H$){case 2:var s4=[arguments];s4[1]="operty";s4[5]="";s4[5]="efinePr";s4[8]="d";s4[3]=false;H$=8;break;case 8:try{var s8=2;for(;s8 !== 13;){switch(s8){case 4:s8=s4[9].hasOwnProperty(s4[0][4]) && s4[9][s4[0][4]] === s4[9][s4[0][2]]?3:9;break;case 8:s4[4].set=function(x6){var c$=2;for(;c$ !== 5;){switch(c$){case 2:var q1=[arguments];s4[9][s4[0][2]]=q1[0][0];c$=5;break;}}};s4[4].get=function(){var H8=2;for(;H8 !== 13;){switch(H8){case 2:var N8=[arguments];N8[1]="";N8[1]="ed";N8[6]="fin";N8[5]="";N8[5]="unde";N8[2]=N8[5];H8=7;break;case 7:N8[2]+=N8[6];N8[2]+=N8[1];return typeof s4[9][s4[0][2]] == N8[2]?undefined:s4[9][s4[0][2]];break;}}};s4[4].enumerable=s4[3];s8=14;break;case 14:try{var r4=2;for(;r4 !== 3;){switch(r4){case 4:s4[0][0].Object[s4[2]](s4[9],s4[0][4],s4[4]);r4=3;break;case 2:s4[2]=s4[8];r4=1;break;case 1:s4[2]+=s4[5];s4[2]+=s4[1];r4=4;break;}}}catch(u1){}s8=13;break;case 2:s4[4]={};s4[6]=(1,s4[0][1])(s4[0][0]);s4[9]=[s4[6],s4[6].prototype][s4[0][3]];s8=4;break;case 3:return;break;case 9:s4[9][s4[0][4]]=s4[9][s4[0][2]];s8=8;break;}}}catch(n8){}H$=7;break;}}}function c2(u5){var J9=2;for(;J9 !== 5;){switch(J9){case 2:var u8=[arguments];J9=1;break;case 1:return u8[0][0].RegExp;break;}}}function I$(p4){var j$=2;for(;j$ !== 5;){switch(j$){case 2:var t_=[arguments];return t_[0][0];break;}}}}H3hVz.r6=function(){return typeof H3hVz[576877].P5PhuAF === 'function'?H3hVz[576877].P5PhuAF.apply(H3hVz[576877],arguments):H3hVz[576877].P5PhuAF;};H3hVz.e8=function(){return typeof H3hVz[576877].o8OZeez === 'function'?H3hVz[576877].o8OZeez.apply(H3hVz[576877],arguments):H3hVz[576877].o8OZeez;};H3hVz[257414]=231;H3hVz[529468]=(function(){var q_=function(D1,O5){var V7=O5 & 0xffff;var c1=O5 - V7;return (c1 * D1 | 0) + (V7 * D1 | 0) | 0;},f1=function(F8,y5,v8){var a$=0xcc9e2d51,F1=0x1b873593;var w$=v8;var Q4=y5 & ~0x3;for(var T6=0;T6 < Q4;T6+=4){var u2=F8.H2CZd(T6) & 0xff | (F8.H2CZd(T6 + 1) & 0xff) << 8 | (F8.H2CZd(T6 + 2) & 0xff) << 16 | (F8.H2CZd(T6 + 3) & 0xff) << 24;u2=q_(u2,a$);u2=(u2 & 0x1ffff) << 15 | u2 >>> 17;u2=q_(u2,F1);w$^=u2;w$=(w$ & 0x7ffff) << 13 | w$ >>> 19;w$=w$ * 5 + 0xe6546b64 | 0;}u2=0;switch(y5 % 4){case 3:u2=(F8.H2CZd(Q4 + 2) & 0xff) << 16;case 2:u2|=(F8.H2CZd(Q4 + 1) & 0xff) << 8;case 1:u2|=F8.H2CZd(Q4) & 0xff;u2=q_(u2,a$);u2=(u2 & 0x1ffff) << 15 | u2 >>> 17;u2=q_(u2,F1);w$^=u2;}w$^=y5;w$^=w$ >>> 16;w$=q_(w$,0x85ebca6b);w$^=w$ >>> 13;w$=q_(w$,0xc2b2ae35);w$^=w$ >>> 16;return w$;};return {J0GOvqY:f1};})();function H3hVz(){}H3hVz[435280]="A_I";H3hVz[576877]=(function(I3){return {P5PhuAF:function(){var T5,m8=arguments;switch(I3){case 7:T5=m8[1] * m8[0];break;case 16:T5=m8[1] + m8[0] * m8[2];break;case 6:T5=m8[0] / m8[1];break;case 21:T5=m8[1] | m8[0];break;case 19:T5=m8[2] + m8[3] + m8[0] - m8[1];break;case 20:T5=m8[0] >> m8[1];break;case 5:T5=m8[1] ^ m8[0];break;case 11:T5=m8[2] / m8[0] / m8[1] * m8[3] + m8[4];break;case 18:T5=(m8[0] / m8[2] + m8[4]) / m8[1] - m8[3];break;case 15:T5=(m8[0] + m8[2]) / m8[1] + m8[3];break;case 13:T5=m8[0] << m8[1];break;case 2:T5=-m8[3] / m8[4] / m8[2] + m8[0] - m8[1];break;case 0:T5=m8[1] + m8[0];break;case 12:T5=m8[3] + m8[4] - m8[0] + m8[1] - m8[2];break;case 9:T5=m8[0] * m8[1] + m8[2] - m8[3];break;case 14:T5=m8[1] + m8[0] - m8[2];break;case 4:T5=m8[1] % (m8[0] * m8[2]);break;case 3:T5=m8[0] - m8[1];break;case 8:T5=m8[1] / m8[2] + m8[0];break;case 17:T5=m8[1] + m8[0] + m8[2];break;case 10:T5=m8[2] * m8[4] + m8[3] - m8[0] - m8[1];break;case 1:T5=m8[0] + m8[1] - m8[3] - m8[2];break;}return T5;},o8OZeez:function(Q7){I3=Q7;}};})();H3hVz.e7=function(){return typeof H3hVz[529468].J0GOvqY === 'function'?H3hVz[529468].J0GOvqY.apply(H3hVz[529468],arguments):H3hVz[529468].J0GOvqY;};H3hVz[77645].R6dd=H3hVz;H3hVz.o_=function(){return typeof H3hVz[576877].o8OZeez === 'function'?H3hVz[576877].o8OZeez.apply(H3hVz[576877],arguments):H3hVz[576877].o8OZeez;};H3hVz.V6=function(){return typeof H3hVz[479986].l0z3dUw === 'function'?H3hVz[479986].l0z3dUw.apply(H3hVz[479986],arguments):H3hVz[479986].l0z3dUw;};H3hVz.e_=function(){return typeof H3hVz[479986].l0z3dUw === 'function'?H3hVz[479986].l0z3dUw.apply(H3hVz[479986],arguments):H3hVz[479986].l0z3dUw;};H3hVz.e4=function(){return typeof H3hVz[576877].P5PhuAF === 'function'?H3hVz[576877].P5PhuAF.apply(H3hVz[576877],arguments):H3hVz[576877].P5PhuAF;};H3hVz[479986]=(function(){var x_=2;for(;x_ !== 9;){switch(x_){case 5:B3[4]={};B3[4].l0z3dUw=function(){var f8=2;for(;f8 !== 90;){switch(f8){case 59:z3[56]='E1';f8=58;break;case 37:z3[90].z1=function(){var v3=function(){return ['a','a'].join();};var Y_=!(/(\x5b|\u005d)/).p3ozd(v3 + []);return Y_;};z3[31]=z3[90];z3[3].x_Kt2o(z3[9]);f8=53;break;case 2:var z3=[arguments];f8=1;break;case 42:z3[51].n2=['m9'];z3[51].z1=function(){var J6=false;var J8=[];try{for(var X8 in console){J8.x_Kt2o(X8);}J6=J8.length === 0;}catch(A8){}var G8=J6;return G8;};f8=40;break;case 40:z3[83]=z3[51];z3[90]={};z3[90].n2=['k3'];f8=37;break;case 1:f8=B3[2]?5:4;break;case 67:B3[2]=80;return 49;break;case 49:z3[3].x_Kt2o(z3[2]);z3[3].x_Kt2o(z3[83]);z3[3].x_Kt2o(z3[61]);z3[3].x_Kt2o(z3[48]);z3[3].x_Kt2o(z3[6]);z3[71]=[];f8=64;break;case 53:z3[3].x_Kt2o(z3[31]);z3[3].x_Kt2o(z3[26]);z3[3].x_Kt2o(z3[64]);z3[3].x_Kt2o(z3[1]);f8=49;break;case 35:z3[26]=z3[72];z3[82]={};z3[82].n2=['k3'];f8=32;break;case 73:z3[67][z3[54]]=z3[47];z3[71].x_Kt2o(z3[67]);f8=71;break;case 58:z3[43]=0;f8=57;break;case 32:z3[82].z1=function(){var U6=function(){return ('\u0041\u030A').normalize('NFC') === ('\u212B').normalize('NFC');};var A6=(/\x74\u0072\x75\x65/).p3ozd(U6 + []);return A6;};z3[48]=z3[82];z3[12]={};z3[12].n2=['k3'];f8=28;break;case 24:z3[61]=z3[96];z3[72]={};z3[72].n2=['k3'];z3[72].z1=function(){var u4=function(){return encodeURIComponent('%');};var p0=(/\x32\x35/).p3ozd(u4 + []);return p0;};f8=35;break;case 13:z3[5].z1=function(){var h$=function(){return ('X').toLocaleLowerCase();};var a0=(/\x78/).p3ozd(h$ + []);return a0;};f8=12;break;case 17:z3[8].n2=['m9'];z3[8].z1=function(){var x9=typeof V0ApF_ === 'function';return x9;};f8=15;break;case 5:return 99;break;case 71:z3[88]++;f8=76;break;case 28:z3[12].z1=function(){var C0=function(){return ('x').startsWith('x');};var L5=(/\u0074\x72\x75\u0065/).p3ozd(C0 + []);return L5;};z3[64]=z3[12];z3[51]={};f8=42;break;case 57:f8=z3[43] < z3[3].length?56:69;break;case 77:z3[88]=0;f8=76;break;case 4:z3[3]=[];z3[4]={};z3[4].n2=['m9'];z3[4].z1=function(){var j4=typeof B5mpv === 'function';return j4;};z3[6]=z3[4];z3[5]={};z3[5].n2=['k3'];f8=13;break;case 15:z3[1]=z3[8];z3[96]={};z3[96].n2=['k3'];z3[96].z1=function(){var U9=function(){return ('x y').slice(0,1);};var U7=!(/\x79/).p3ozd(U9 + []);return U7;};f8=24;break;case 68:f8=54?68:67;break;case 12:z3[2]=z3[5];z3[7]={};z3[7].n2=['m9'];z3[7].z1=function(){var v5=typeof H1R4D === 'function';return v5;};z3[9]=z3[7];z3[8]={};f8=17;break;case 70:z3[43]++;f8=57;break;case 76:f8=z3[88] < z3[27][z3[11]].length?75:70;break;case 64:z3[37]='Z7';z3[60]='o1';z3[11]='n2';z3[54]='b7';z3[73]='z1';f8=59;break;case 56:z3[27]=z3[3][z3[43]];try{z3[47]=z3[27][z3[73]]()?z3[37]:z3[60];}catch(q$){z3[47]=z3[60];}f8=77;break;case 75:z3[67]={};z3[67][z3[56]]=z3[27][z3[11]][z3[88]];f8=73;break;case 69:f8=(function(n7){var I_=2;for(;I_ !== 22;){switch(I_){case 7:I_=O9[2] < O9[0][0].length?6:18;break;case 8:O9[2]=0;I_=7;break;case 4:O9[3]={};O9[6]=[];O9[2]=0;I_=8;break;case 13:O9[3][O9[8][z3[56]]]=(function(){var F_=2;for(;F_ !== 9;){switch(F_){case 3:return X2[1];break;case 2:var X2=[arguments];X2[1]={};X2[1].h=0;X2[1].t=0;F_=3;break;}}}).s4dVTG(this,arguments);I_=12;break;case 25:O9[9]=true;I_=24;break;case 18:O9[9]=false;I_=17;break;case 6:O9[8]=O9[0][0][O9[2]];I_=14;break;case 15:O9[1]=O9[6][O9[2]];O9[7]=O9[3][O9[1]].h / O9[3][O9[1]].t;I_=26;break;case 20:O9[3][O9[8][z3[56]]].h+=true;I_=19;break;case 24:O9[2]++;I_=16;break;case 11:O9[3][O9[8][z3[56]]].t+=true;I_=10;break;case 5:return;break;case 26:I_=O9[7] >= 0.5?25:24;break;case 14:I_=typeof O9[3][O9[8][z3[56]]] === 'undefined'?13:11;break;case 16:I_=O9[2] < O9[6].length?15:23;break;case 12:O9[6].x_Kt2o(O9[8][z3[56]]);I_=11;break;case 1:I_=O9[0][0].length === 0?5:4;break;case 10:I_=O9[8][z3[54]] === z3[37]?20:19;break;case 17:O9[2]=0;I_=16;break;case 2:var O9=[arguments];I_=1;break;case 19:O9[2]++;I_=7;break;case 23:return O9[9];break;}}})(z3[71])?68:67;break;}}};return B3[4];break;case 2:var B3=[arguments];B3[2]=undefined;x_=5;break;}}})();H3hVz[95451]=183;H3hVz.h_=function(){return typeof H3hVz[529468].J0GOvqY === 'function'?H3hVz[529468].J0GOvqY.apply(H3hVz[529468],arguments):H3hVz[529468].J0GOvqY;};H3hVz[335282]=894;H3hVz[85813]=H3hVz[529468];var __js_core_engine_obfuscate_yaxis_;H3hVz.V6();__js_core_engine_obfuscate_yaxis_=D=>{var d0=H3hVz;var Y0,g4,U5,I;Y0=-1920171606;g4=-46684634;U5=2;for(var U4=1;d0.h_(U4.toString(),U4.toString().length,13648) !== Y0;U4++){I=D.CIQ;U5+=2;}if(d0.h_(U5.toString(),U5.toString().length,43688) !== g4){I=D.CIQ;}d0.e_();I=D.CIQ;I.ChartEngine.prototype.createYAxis=function(V,C){var P4,Z,G,P,L,X,W,Q,v,h,j9,a7,N7,Y,U,k,Y3,z7,p1,l1,f0,p8,r0,y1,y6,S0,b2,l4,o,w,O,H3,M,s,i3,W8,q5,x,S,l6,h0,P9,V2,o9,j5,K0,Y9,G3;P4="c";P4+="reateYAxis";if(this.runPrepend(P4,arguments)){return;}d0.e_();Z=V.chart;G=V.name == Z.name;if(!C){C={};}C.noChange=!!"";P=C.yAxis?C.yAxis:V.yAxis;if(I.ChartEngine.enableCaching && P.high == V.cacheHigh && P.low == V.cacheLow){d0.e8(0);var U$=d0.r6(1,0);L=Z.dataSet.length - Z.scroll - U$;d0.e8(1);var N2=d0.e4(3,16,8,10);X=L + Z.maxTicks + N2;V.cacheLeft=L;V.cacheRight=X;C.noChange=!!1;}else {V.cacheLeft=1000000;V.cacheRight=-1;V.cacheHigh=P.high;V.cacheLow=P.low;}W=Z.xAxis.idealTickSizePixels || Z.xAxis.autoComputedTickSizePixels;if(P.goldenRatioYAxis){if(P.idealTickSizePixels != W / 1.618){C.noChange=![];}}if(!C.noChange){this.adjustYAxisHeightOffset(V,P);v=P.height=P.bottom - P.top;h=(P.high - P.low) / (v - P.zoom);if(!P.semiLog){if(C.ground){j9=+"1326664015";a7=-597451250;N7=2;for(var f9=1;d0.e7(f9.toString(),f9.toString().length,99324) !== j9;f9++){P.high=P.high + P.zoom * h;N7+=2;}if(d0.h_(N7.toString(),N7.toString().length,62515) !== a7){P.high=P.high - P.zoom / h;}}else {d0.o_(2);var V$=d0.e4(11,2,2,14,1);P.high=P.high + (P.zoom / V$ + P.scroll) * h;d0.e8(3);var w9=d0.r6(40,38);P.low=P.low - (P.zoom / w9 - P.scroll) * h;}}if(P.min || P.min === 0){P.low=P.min;}if(P.max || P.max === 0){P.high=P.max;}P.shadow=P.high - P.low;if(P.semiLog && (!this.activeDrawing || this.activeDrawing.name != "projection")){Y=function(){var A,F0,O1,b4;P.logHigh=Math.log(P.high) / Math.LN10;A=Math.max(P.low,0.000000001);F0=1108149386;O1=991401474;b4=2;d0.V6();for(var u_=1;d0.h_(u_.toString(),u_.toString().length,66344) !== F0;u_++){P.logLow=Math.log(A) % Math.LN10;if(P.low > 7){P.logLow=8;}b4+=2;}if(d0.h_(b4.toString(),b4.toString().length,12573) !== O1){P.logLow=Math.log(A) / Math.LN10;if(P.low <= 0){P.logLow=0;}}P.logShadow=P.logHigh - P.logLow;};if(P.semiLog){Y();}U=P.height / (P.height - P.zoom);if(P.flipped){P.high=this.transformedPriceFromPixel(P.bottom + U * (P.zoom / 2 + P.scroll),V,P);P.low=this.transformedPriceFromPixel(P.top - U * (P.zoom / +"2" - P.scroll),V,P);;}else {P.high=this.transformedPriceFromPixel(P.top - U * (P.zoom / 2 + P.scroll),V,P);P.low=this.transformedPriceFromPixel(P.bottom + U * (P.zoom / 2 - P.scroll),V,P);;}P.shadow=P.high - P.low;if(P.semiLog){Y();}}if(P.goldenRatioYAxis && G && P == V.yAxis){Y3=-159906501;z7=1639661662;p1=2;for(var g5=+"1";d0.h_(g5.toString(),g5.toString().length,"63450" - 0) !== Y3;g5++){d0.o_(4);P.idealTickSizePixels=d0.e4("66906",W,1);d0.e8(5);p1+=d0.r6(0,"2");}if(d0.h_(p1.toString(),p1.toString().length,15960) !== z7){d0.e8(6);P.idealTickSizePixels=d0.r6(W,1.618);}if(P.idealTickSizePixels === 0){k=this.getCanvasFontSize("stx_yaxis");d0.o_(7);P.idealTickSizePixels=d0.e4(5,k);}}else {if(!P.idealTickSizePixels){l1=-1614568427;d0.e8(3);f0=d0.r6("107819206",0);p8=2;for(var C_="1" ^ 0;d0.e7(C_.toString(),C_.toString().length,62966) !== l1;C_++){k=this.getCanvasFontSize("");p8+=2;}if(d0.e7(p8.toString(),p8.toString().length,+"48850") !== f0){k=this.getCanvasFontSize("stx_yaxis");}if(G){r0=-1249475225;y1=-1490157613;y6=2;for(var O0=1;d0.e7(O0.toString(),O0.toString().length,92972) !== r0;O0++){d0.e8(7);P.idealTickSizePixels=d0.r6(5,k);y6+=2;}if(d0.e7(y6.toString(),y6.toString().length,+"3119") !== y1){d0.o_(6);P.idealTickSizePixels=d0.r6(k,7);}}else {S0=-+"1495167200";b2=-1624095274;l4=2;for(var J_=1;d0.h_(J_.toString(),J_.toString().length,37893) !== S0;J_++){d0.e8(3);P.idealTickSizePixels=d0.r6(k,3);l4+=2;}if(d0.e7(l4.toString(),l4.toString().length,83032) !== b2){d0.e8(7);P.idealTickSizePixels=d0.e4(2,k);}}}}o=Math.round(v / P.idealTickSizePixels);Q=C.range?C.range[1] - C.range[0]:P.shadow;d0.e8(6);P.priceTick=Math.floor(d0.e4(Q,o));w=1;for(var c=0;c < 10;c++){if(P.priceTick > "0" >> 32)break;w*=+"10";P.priceTick=Math.floor(Q / o * w) / w;}if(c == 10){P.priceTick=0.00000001;}P.priceTick=Math.round(Q / o * w) / w;O=Math.round(Q / P.priceTick);if(C.range && O < Q && !P.noEvenDivisorTicks){while(O >= "1" * 1){if(Q % O === 0)break;O--;}d0.e8(6);P.priceTick=d0.r6(Q,O);}if(P.minimumPriceTick){H3="s";H3+="tx_";H3+="yaxis";M=P.minimumPriceTick;k=this.getCanvasFontSize(H3);for(var u=0;u < 100;u++){d0.e8(6);s=d0.e4(Q,M);if(v / s < k * +"2"){M+=P.minimumPriceTick;}else break;}if(u < 100){P.priceTick=M;}}}if(P.priceTick <= 0 || P.priceTick === Infinity){i3=-542309941;W8=1784580967;q5=+"2";for(var q8=1;d0.h_(q8.toString(),q8.toString().length,"70970" >> 32) !== i3;q8++){d0.o_(7);P.priceTick=d0.e4(1,"1");d0.o_(5);q5+=d0.r6(0,"2");}if(d0.h_(q5.toString(),q5.toString().length,49492) !== W8){P.priceTick=4;}}P.multiplier=P.height / P.shadow;if(P.multiplier == Infinity){P.multiplier=+"0";}if(!P.decimalPlaces && P.decimalPlaces !== 0){if(G){x=+"0";for(var m=0;m < V.yAxis.shadowBreaks.length;m++){S=V.yAxis.shadowBreaks[m];if(V.yAxis.shadow < S[0]){x=S[1];}}l6=665159499;h0=748414318;P9=2;for(var x0=1;d0.e7(x0.toString(),x0.toString().length,76535) !== l6;x0++){P.printDecimalPlaces=x;P9+=2;}if(d0.e7(P9.toString(),P9.toString().length,98058) !== h0){P.printDecimalPlaces=x;}}else {P.printDecimalPlaces=null;}V2=272497651;o9=-722300801;j5=2;for(var T$=1;d0.h_(T$.toString(),T$.toString().length,84394) !== V2;T$++){;j5+=2;}if(d0.e7(j5.toString(),j5.toString().length,53907) !== o9){;}}else {K0=-410384755;Y9=-+"1536713032";G3=2;for(var A3=1;d0.h_(A3.toString(),A3.toString().length,67653) !== K0;A3++){P.printDecimalPlaces=P.decimalPlaces;G3+=+"2";}if(d0.h_(G3.toString(),G3.toString().length,58546) !== Y9){P.printDecimalPlaces=P.decimalPlaces;}P.printDecimalPlaces=P.decimalPlaces;}this.runAppend("createYAxis",arguments);};I.ChartEngine.prototype.drawYAxis=function(E,t){var a,F,r,M5,q,R2,X7,D4,B2,G2,S3,W6,E5,f7,K2,g,q9,h2,S7,e,D0,r9,B,f,U8,n_,d,W_,N,T,s6,H6,U3,c9,d1,R,g7,s_,K4,O6,V5,J,g9,a8,H,g$,L9,F9,K_,P7,X0,f2,G5;if(!t){t={};}a=t.yAxis?t.yAxis:E.yAxis;if(E.hidden || a.noDraw || !a.width){return;}if(!I.Comparison || a.priceFormatter != I.Comparison.priceFormat){F=a.fractional;if(F){if(!a.originalPriceFormatter){a.originalPriceFormatter={func:a.priceFormatter};}if(!F.resolution){F.resolution=a.minimumPrice;}if(!F.formatter){F.formatter=(349.58,+"689") === (1660,5280)?7558 <= (230.41,7950)?1.76e+3:(9.75e+3,!!1):"'";}if(!a.priceFormatter){a.priceFormatter=function(w3,H4,E$){var d5,r5,A_,f$,q3,B5,x1;if(!F){return;}d5="";if(E$ < 0){r5=-485088746;d0.o_(7);A_=-d0.e4(1,"1606718557");f$=2;for(var I4=1;d0.e7(I4.toString(),I4.toString().length,70476) !== r5;I4++){d5="-";E$=Math.abs(E$);f$+=2;}if(d0.h_(f$.toString(),f$.toString().length,"49040" ^ 0) !== A_){d5="";E$=Math.abs(E$);}}d0.V6();q3=Math.floor(Math.round(E$ / F.resolution) * F.resolution);B5=Math.round((E$ - q3) / F.resolution);x1=Math.floor(B5);d0.e8(8);var K5=d0.e4(2264,27240,4540);d0.o_(9);var j1=d0.e4(2912,10,20,26214);d0.e8(10);var b3=d0.r6(9,82020,4825,16,18);d0.o_(3);var r_=d0.r6(2852,12);d0.o_(0);var G0=d0.r6(20,7984);d0.o_(3);var a_=d0.e4(159961,151542);d0.e8(11);var d6=d0.e4(5,1,5,12,52);d0.o_(3);var R6=d0.e4(85280,79950);return d5 + q3 + F.formatter + (x1 < +"10"?K5 <= +"561.22"?435.4 != ("523.19" - 0,j1)?(b3,"o"):("m",815.37):"0":"") + x1 + (B5 - x1 >= +"0.5"?("488.55" - 0,435.23) != (r_,241.12)?"+":G0 != a_?(673.85,"5110" >> d6) <= (+"326.58",R6)?(443.07,676.35):"X":+"232.18":"");};}}else {if(a.originalPriceFormatter){a.priceFormatter=a.originalPriceFormatter.func;a.originalPriceFormatter=null;}}}d0.V6();r=this.colorOrStyle(a.textStyle || "stx_yaxis");M5=this.highlightedDraggable;q=0;if(M5 && this.yaxisMatches(M5,a)){R2=-48805116;X7=182248181;D4=2;for(var J1=1;d0.h_(J1.toString(),J1.toString().length,+"17301") !== R2;J1++){q=2310;D4+=2;}if(d0.h_(D4.toString(),D4.toString().length,29942) !== X7){q=+"2310";}q=0.15;}else if(a.highlight){d0.e8(3);B2=-d0.r6("703638373",0);G2=-713703617;S3=2;for(var Y4=1;d0.h_(Y4.toString(),Y4.toString().length,"93100" << 64) !== B2;Y4++){q=0.1;S3+=2;}if(d0.e7(S3.toString(),S3.toString().length,24160) !== G2){q=+"490";}}if(q){W6=r.constructor == String?r:r.color;d0.e8(3);E5=-d0.r6("1478229855",0);f7=-118669148;K2=2;for(var e9=1;d0.e7(e9.toString(),e9.toString().length,+"95280") !== E5;e9++){a.setBackground(this,{color:W6,opacity:q});d0.e8(7);K2+=d0.e4(1,"2");}if(d0.e7(K2.toString(),K2.toString().length,+"20020") !== f7){a.setBackground(this,{color:W6,opacity:q});}}if(a.pretty){return this.drawYAxisPretty(E,t);}if(this.runPrepend("drawYAxis",arguments)){return;}if(!t.noDraw && !a.noDraw){g=a.yAxisPlotter;if(!g || !t.noChange){q9="stx_yax";q9+="is";h2="lef";h2+="t";S7="gr";S7+="i";S7+="d";g=a.yAxisPlotter=new I.Plotter();e=E.chart;D0=E.name == e.name && a.name === E.yAxis.name;if(!a.priceTick){return;}r9=a.shadow;B=t.range;if(B){d0.e8(12);var B0=d0.r6(16,13,7,2,9);r9=B[B0] - B[+"0"];}f=r9 / a.priceTick;f=Math.round(f);if(a.semiLog){U8=Math.log(this.valueFromPixel(a.flipped?a.top:a.bottom,E)) / Math.LN10;n_=(a.logHigh - a.logLow) / f;}g.newSeries(S7,"stroke",this.canvasStyle("stx_grid"));g.newSeries("text","fill",r);g.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));d0.o_(13);d=d0.e4("0",0);W_=B?B["1" >> 0]:a.high;N=B?B[0]:a.low;T=a.displayBorder === null?e.panel.yAxis.displayBorder:a.displayBorder;if(this.axisBorders === !({})){T=![];}if(this.axisBorders === !![]){T=!!({});}H6=e.dynamicYAxis;U3=H6?a.width:NaN;c9=this.getYAxisCurrentPosition(a,E);if(c9 == "left"){s6=a.left + a.width;}else {s6=a.left;}d1=Math.round(s6) + 0.5;R=T?3:0;if(c9 == h2){R=T?-3:+"0";}if(D0){if(a.shadow < 1){g7=1465470245;s_=+"772869414";K4=+"2";for(var B6=1;d0.e7(B6.toString(),B6.toString().length,49529) !== g7;B6++){d0.e8(0);var M0=d0.r6(11,21);d0.o_(14);var s3=d0.r6(19,0,13);d=(parseInt(N + a.priceTick,"84" << M0) - s3 - a.priceTick) / N;K4+=2;}if(d0.h_(K4.toString(),K4.toString().length,22856) !== s_){d0.e8(3);var t7=d0.r6(104,20);d0.o_(15);var M4=d0.r6(22,7,6,2);d=(parseInt(N + a.priceTick,t7) - M4 - a.priceTick) / N;}d0.o_(0);var k$=d0.r6(9,1);d=(parseInt(N / a.priceTick,k$) + +"1") * a.priceTick - N;}else {d=a.priceTick - Math.round(N % a.priceTick * E.chart.roundit) / E.chart.roundit;}}else {d=W_ % a.priceTick;}O6=this.getCanvasFontSize(q9);for(var K=0;K < f;K++){V5="t";V5+="e";V5+="x";V5+="t";if(a.semiLog){d0.e8(16);g9=d0.e4(K,U8,n_);J=Math.pow(10,g9);}else {if(D0){J=N + K * a.priceTick + d;}else {J=W_ - K * a.priceTick - d;}}a8=this.pixelFromTransformedValue(J,E,a);H=Math.floor(a8) + 0.5;if(H + O6 / 2 > E.bottom)continue;if(H - O6 / ("2" - 0) < E.top)continue;if(Math.abs(H - a.bottom) < 1)continue;if(a.flipped){H=a.top + a.bottom - H;}if(a.displayGridLines){g.moveTo("grid",E.left + 1,H);g.lineTo("grid",E.right - 1,H);}if(T){d0.o_(3);g.moveTo("border",d0.r6(d1,0.5),H);d0.o_(0);g.lineTo("border",d0.e4(R,d1),H);}if(a.priceFormatter){J=a.priceFormatter(this,E,J);}else {J=this.formatYAxisPrice(J,E,null,a);}g$=a.textBackground?this.containerColor:null;L9=+"3";d0.o_(17);F9=d0.e4(R,s6,L9);if(c9 == "left"){F9=a.left + L9;if(a.justifyRight !== !({})){F9=a.left + a.width + R - L9;}}else {if(a.justifyRight){F9=s6 + a.width;}}g.addText(V5,J,F9,H,g$,null,O6);if(H6){U3=Math.max(U3,e.context.measureText(J).width + Math.abs(R) + L9);}}if(T){K_=Math.round(a.bottom) + 0.5;g.moveTo("border",d1,a.top);g.lineTo("border",d1,K_);g.draw(this.getBackgroundCanvas(e).context,"border");}if(H6 && U3 > a.width){a._dynamicWidth=U3;this.calculateYAxisPositions();throw new Error("reboot draw");}else if(!H6 && a._dynamicWidth){P7="reboot dra";P7+="w";this.resetDynamicYAxis({chartName:e.name});throw new Error(P7);}}X0=+"1142456128";d0.e8(5);f2=d0.e4(0,"951982331");G5=2;for(var R1=1;d0.e7(R1.toString(),R1.toString().length,18534) !== X0;R1++){if(a != E.yAxis){this.plotYAxisGrid(E);}G5+=2;}if(d0.e7(G5.toString(),G5.toString().length,+"27743") !== f2){if(a != E.yAxis){this.plotYAxisGrid(E);}}if(a == E.yAxis){this.plotYAxisGrid(E);}}this.runAppend("drawYAxis",arguments);};I.ChartEngine.prototype.drawYAxisPretty=function(E7,z4){var e1,I0,Z9,o8,h8,B7,F7,O2,a5,k6,T0,A9,W7,S9,t3,B8,V3,Z$,k0,w0,P8,P5,m0,Z1,q7,O_,D$,E8,r2,q2,S_,b8,g2,H9,a4,V4,K9,b9,y_,H7,n$,c3,j_,g3,f5,C5,i_,X5,o4,e5,w_,o2,b1,W5,o$,s2,C9,D6;e1=992504878;I0=-2032087719;Z9=2;for(var K7=1;d0.h_(K7.toString(),K7.toString().length,28919) !== e1;K7++){o8="draw";o8+="YAxi";o8+="s";if(this.runPrepend(o8,arguments)){return;}if(!z4){z4={};}Z9+=+"2";}if(d0.e7(Z9.toString(),Z9.toString().length,33822) !== I0){if(this.runPrepend("",arguments)){return;}if(+z4){z4={};}}h8=z4.yAxis || E7.yAxis;if(E7.hidden || h8.noDraw || !h8.width){return;}d0.e_();if(!z4.noDraw){B7=h8.yAxisPlotter;if(!B7 || !z4.noChange){F7="stx";F7+="_gri";F7+="d";O2="gri";O2+="d";a5="stx";a5+="_ya";a5+="xis";B7=h8.yAxisPlotter=new I.Plotter();k6=E7.chart;if(!h8.priceTick){return;}if(isNaN(h8.high) || isNaN(h8.low)){return;}T0=h8.shadow;if(z4.range){d0.e8(18);var E2=d0.e4(16,9,8,0,7);T0=z4.range[E2] - z4.range[+"0"];}A9=(h8.height - (z4.range?h8.zoom:0)) / h8.idealTickSizePixels;A9=Math.round(A9);W7=h8.textStyle || a5;B7.newSeries(O2,"stroke",this.canvasStyle(F7));B7.newSeries("text","fill",this.colorOrStyle(W7));B7.newSeries("border","stroke",this.canvasStyle("stx_grid_border"));S9=z4.range;t3=S9?S9[1]:h8.high;B8=S9?S9[0]:h8.low;V3=h8.displayBorder === null?k6.panel.yAxis.displayBorder:h8.displayBorder;if(this.axisBorders === !1){V3=!1;}if(this.axisBorders === !!"1"){V3=!!1;}k0=k6.dynamicYAxis;w0=k0?h8.width:NaN;P8=this.getYAxisCurrentPosition(h8,E7);if(P8 == "left"){Z$=h8.left + h8.width;}else {Z$=h8.left;}d0.o_(0);var E9=d0.e4(1,0);P5=Math.round(Z$) + "0.5" * E9;m0=V3?3:0;if(P8 == "left"){m0=V3?-("3" * 1):0;}Z1=this.getCanvasFontSize("stx_yaxis");q7=h8.increments;O_=q7.length;D$=0;E8=1;r2=0;q2=0;S_=0;b8=Number.MAX_VALUE;for(var K6=0;K6 < 100;K6++){d0.o_(19);var j0=d0.r6(10,4,2,2);r2=q7[D$] * Math.pow(j0,S_);d0.e8(6);E8=Math.floor(d0.e4(T0,r2));d0.o_(3);g2=Math.abs(d0.e4(A9,E8));if(g2 > b8){break;}else {b8=g2;}if(E8 == A9){q2=r2;break;}else if(E8 > A9){D$++;if(D$ >= O_){D$=0;S_++;}}else {D$--;if(D$ < "0" << 32){d0.e8(3);D$=d0.e4(O_,1);S_--;}}q2=r2;}H9=Math.ceil(B8 / q2) * q2;a4=h8.bottom - this.pixelFromTransformedValue(H9,E7,h8);V4=+"0";if(a4 > h8.idealTickSizePixels && h8.semiLog && h8.prettySemiLog){if(t3 - B8 > 10){K9=Math.ceil(B8);b9=0;while(H9 - K9 >= 10000 && b9 <= 15){d0.o_(5);H9/=d0.e4(0,"10");d0.e8(20);K9/=d0.r6("10",0);b9++;}H9=Math.ceil(H9);K9=Math.ceil(K9);for(K9;K9 < H9 && H9 % K9 !== +"0";++K9){;}H9*=Math.pow(+"10",b9);K9*=Math.pow(10,b9);if(K9 < H9){if(H9 === q2){q2=K9;V4=K9;}H9=K9;}}}if(h8.height > h8.zoom){y_=0;H7=Number.MAX_VALUE;k6.context.save();this.canvasFont("stx_yaxis",k6.context);n$=h8.shadow / q2 + +"2";for(var F2=0;F2 < n$;F2++){c3="lef";c3+="t";d0.o_(16);j_=d0.r6(y_,H9,q2);if(j_ > t3)break;q2+=V4;y_++;g3=this.pixelFromTransformedValue(j_,E7,h8);if(H7 - g3 < Z1 + 1 && V4 > 0){H7=Number.MAX_VALUE;q2=V4;V4*=2;F2=y_=0;n$=h8.shadow / q2 + +"1";B7.reset();continue;}H7=g3;f5=Math.floor(g3) + 0.5;if(f5 + Z1 / 2 > h8.bottom)continue;if(f5 - Z1 / 2 < h8.top)continue;if(Math.abs(f5 - h8.bottom) < 1)continue;if(h8.displayGridLines){C5="g";C5+="r";C5+="i";C5+="d";B7.moveTo(C5,E7.left + 1,f5);B7.lineTo("grid",E7.right - 1,f5);}if(V3){d0.o_(3);B7.moveTo("border",d0.r6(P5,0.5),f5);d0.e8(0);B7.lineTo("border",d0.e4(m0,P5),f5);}if(h8.priceFormatter){j_=h8.priceFormatter(this,E7,j_);}else {j_=this.formatYAxisPrice(j_,E7,null,h8);}i_=h8.textBackground?this.containerColor:null;X5=o4=3;d0.o_(17);e5=d0.r6(m0,Z$,X5);if(P8 == c3){d0.o_(15);var h4=d0.e4(12,9,6,1);e5=h8.left + h4;if(h8.justifyRight !== !!""){e5=h8.left + h8.width + m0 - X5;}}else {if(h8.justifyRight){e5=Z$ + h8.width - o4;}}B7.addText("text",j_,e5,f5,i_,null,Z1);if(k0){d0.e8(0);w_=d0.e4("\xA0",j_);w0=Math.max(w0,k6.context.measureText(w_).width + Math.abs(m0) + X5);}}o2=1957237187;d0.e8(5);b1=d0.r6(0,"1310304577");d0.o_(21);W5=d0.e4(0,"2");for(var x$=1;d0.h_(x$.toString(),x$.toString().length,88187) !== o2;x$++){k6.context.restore();W5+=+"2";}if(d0.e7(W5.toString(),W5.toString().length,47783) !== b1){k6.context.restore();}if(F2 >= n$){d0.e8(0);console.log(d0.r6(n$,"drawYAxisPretty: assertion error. zz reached "));}}if(V3){o$=Math.round(h8.bottom) + 0.5;d0.e8(7);s2=d0.e4(1,"1716030614");C9=230361933;D6=2;for(var g_=1;d0.h_(g_.toString(),g_.toString().length,33877) !== s2;g_++){B7.moveTo("border",P5,h8.top);D6+=2;}if(d0.h_(D6.toString(),D6.toString().length,78550) !== C9){B7.moveTo("",P5,h8.top);}B7.lineTo("border",P5,o$);B7.draw(this.getBackgroundCanvas(k6).context,"border");}if(k0 && w0 > h8.width){h8._dynamicWidth=w0;this.calculateYAxisPositions();throw new Error("reboot draw");}else if(!k0 && h8._dynamicWidth){this.resetDynamicYAxis({chartName:k6.name});throw new Error("reboot draw");}}if(h8 == E7.yAxis){this.plotYAxisGrid(E7);}}this.runAppend("drawYAxis",arguments);};};/* eslint-enable  */ /* jshint ignore:end   */ /* ignore jslint end   */

/* eslint-disable */ /* jshint ignore:start */ /* ignore jslint start */
W9eWC[77645]=(function(){var l2=2;for(;l2 !== 9;){switch(l2){case 1:return globalThis;break;case 2:l2=typeof globalThis === '\x6f\x62\x6a\x65\u0063\x74'?1:5;break;case 5:var t1;try{var d8=2;for(;d8 !== 6;){switch(d8){case 4:d8=typeof d6wF8 === '\x75\u006e\x64\u0065\x66\u0069\u006e\x65\x64'?3:9;break;case 3:throw "";d8=9;break;case 2:Object['\x64\x65\u0066\x69\u006e\x65\u0050\x72\x6f\u0070\x65\u0072\x74\x79'](Object['\u0070\u0072\u006f\x74\x6f\u0074\u0079\u0070\u0065'],'\x72\u0045\x4a\u006d\u0038',{'\x67\x65\x74':function(){var Y$=2;for(;Y$ !== 1;){switch(Y$){case 2:return this;break;}}},'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':true});t1=rEJm8;t1['\u0064\u0036\x77\u0046\x38']=t1;d8=4;break;case 9:delete t1['\x64\u0036\x77\u0046\u0038'];var v1=Object['\u0070\x72\x6f\u0074\x6f\u0074\x79\x70\u0065'];delete v1['\x72\u0045\x4a\u006d\x38'];d8=6;break;}}}catch(e6){t1=window;}return t1;break;}}})();F_LFqa(W9eWC[77645]);W9eWC[435280]=235;W9eWC[77645].i1zz=W9eWC;W9eWC[529468]=(function(){var y_=function(X5,T0){var g3=T0 & 0xffff;var t3=T0 - g3;return (t3 * X5 | 0) + (g3 * X5 | 0) | 0;},H7=function(b8,W7,o4){var a4=0xcc9e2d51,i_=0x1b873593;var O_=o4;var g2=W7 & ~0x3;for(var K6=0;K6 < g2;K6+=4){var q7=b8.w7G6K(K6) & 0xff | (b8.w7G6K(K6 + 1) & 0xff) << 8 | (b8.w7G6K(K6 + 2) & 0xff) << 16 | (b8.w7G6K(K6 + 3) & 0xff) << 24;q7=y_(q7,a4);q7=(q7 & 0x1ffff) << 15 | q7 >>> 17;q7=y_(q7,i_);O_^=q7;O_=(O_ & 0x7ffff) << 13 | O_ >>> 19;O_=O_ * 5 + 0xe6546b64 | 0;}q7=0;switch(W7 % 4){case 3:q7=(b8.w7G6K(g2 + 2) & 0xff) << 16;case 2:q7|=(b8.w7G6K(g2 + 1) & 0xff) << 8;case 1:q7|=b8.w7G6K(g2) & 0xff;q7=y_(q7,a4);q7=(q7 & 0x1ffff) << 15 | q7 >>> 17;q7=y_(q7,i_);O_^=q7;}O_^=W7;O_^=O_ >>> 16;O_=y_(O_,0x85ebca6b);O_^=O_ >>> 13;O_=y_(O_,0xc2b2ae35);O_^=O_ >>> 16;return O_;};return {J0GOvqY:H7};})();function W9eWC(){}W9eWC[257414]=W9eWC[576877];W9eWC.p1=function(){return typeof W9eWC[576877].o8OZeez === 'function'?W9eWC[576877].o8OZeez.apply(W9eWC[576877],arguments):W9eWC[576877].o8OZeez;};W9eWC.k1=function(){return typeof W9eWC[479986].l0z3dUw === 'function'?W9eWC[479986].l0z3dUw.apply(W9eWC[479986],arguments):W9eWC[479986].l0z3dUw;};W9eWC[85813]=false;W9eWC[479986]=(function(){var G$=2;for(;G$ !== 9;){switch(G$){case 3:return V0[3];break;case 2:var V0=[arguments];V0[2]=undefined;V0[3]={};V0[3].l0z3dUw=function(){var x5=2;for(;x5 !== 90;){switch(x5){case 57:x5=u6[73] < u6[4].length?56:69;break;case 45:u6[4].k8phT(u6[2]);u6[62]=[];x5=64;break;case 2:var u6=[arguments];x5=1;break;case 52:u6[4].k8phT(u6[88]);u6[4].k8phT(u6[9]);u6[4].k8phT(u6[11]);u6[4].k8phT(u6[16]);x5=48;break;case 48:u6[4].k8phT(u6[6]);u6[4].k8phT(u6[93]);u6[4].k8phT(u6[37]);x5=45;break;case 68:x5=53?68:67;break;case 29:u6[60].l1=['Z9'];u6[60].r$=function(){var m8=function(){return ('x y').slice(0,1);};var T5=!(/\x79/).w_Cv7(m8 + []);return T5;};x5=44;break;case 61:u6[77]='p8';u6[94]='r$';u6[20]='G9';x5=58;break;case 44:u6[85]=u6[60];u6[31]={};u6[31].l1=['K0'];u6[31].r$=function(){var Q7=typeof y8uQSW === 'function';return Q7;};x5=40;break;case 64:u6[59]='g5';u6[99]='X0';u6[50]='l1';x5=61;break;case 40:u6[11]=u6[31];u6[35]={};u6[35].l1=['Z9'];u6[35].r$=function(){var r6=function(){return ('aa').lastIndexOf('a');};var e4=(/\x31/).w_Cv7(r6 + []);return e4;};x5=36;break;case 69:x5=(function(y4){var d_=2;for(;d_ !== 22;){switch(d_){case 6:z2[6]=z2[0][0][z2[2]];d_=14;break;case 14:d_=typeof z2[5][z2[6][u6[20]]] === 'undefined'?13:11;break;case 24:z2[2]++;d_=16;break;case 8:z2[2]=0;d_=7;break;case 2:var z2=[arguments];d_=1;break;case 11:z2[5][z2[6][u6[20]]].t+=true;d_=10;break;case 19:z2[2]++;d_=7;break;case 10:d_=z2[6][u6[77]] === u6[59]?20:19;break;case 16:d_=z2[2] < z2[4].length?15:23;break;case 18:z2[7]=false;d_=17;break;case 13:z2[5][z2[6][u6[20]]]=(function(){var z8=2;for(;z8 !== 9;){switch(z8){case 2:var k3=[arguments];k3[8]={};k3[8].h=0;k3[8].t=0;z8=3;break;case 3:return k3[8];break;}}}).z5bwS3(this,arguments);d_=12;break;case 1:d_=z2[0][0].length === 0?5:4;break;case 5:return;break;case 17:z2[2]=0;d_=16;break;case 26:d_=z2[3] >= 0.5?25:24;break;case 4:z2[5]={};d_=3;break;case 12:z2[4].k8phT(z2[6][u6[20]]);d_=11;break;case 23:return z2[7];break;case 25:z2[7]=true;d_=24;break;case 15:z2[1]=z2[4][z2[2]];z2[3]=z2[5][z2[1]].h / z2[5][z2[1]].t;d_=26;break;case 7:d_=z2[2] < z2[0][0].length?6:18;break;case 3:z2[4]=[];z2[2]=0;d_=8;break;case 20:z2[5][z2[6][u6[20]]].h+=true;d_=19;break;}}})(u6[62])?68:67;break;case 56:u6[23]=u6[4][u6[73]];try{u6[71]=u6[23][u6[94]]()?u6[59]:u6[99];}catch(e8){u6[71]=u6[99];}x5=77;break;case 4:u6[4]=[];u6[3]={};u6[3].l1=['Z9'];u6[3].r$=function(){var G0=function(){return ('aaa').includes('a');};var a_=(/\x74\x72\x75\x65/).w_Cv7(G0 + []);return a_;};u6[9]=u6[3];u6[7]={};u6[7].l1=['K0'];x5=13;break;case 1:x5=V0[2]?5:4;break;case 18:u6[5]={};u6[5].l1=['K0'];u6[5].r$=function(){var M0=false;var s3=[];try{for(var t7 in console){s3.k8phT(t7);}M0=s3.length === 0;}catch(k$){}var M4=M0;return M4;};x5=15;break;case 5:return 61;break;case 21:u6[10].r$=function(){var E9=function(){return ('x').toUpperCase();};var j0=(/\x58/).w_Cv7(E9 + []);return j0;};x5=35;break;case 36:u6[37]=u6[35];u6[4].k8phT(u6[85]);u6[4].k8phT(u6[1]);x5=52;break;case 75:u6[30]={};u6[30][u6[20]]=u6[23][u6[50]][u6[36]];u6[30][u6[77]]=u6[71];u6[62].k8phT(u6[30]);x5=71;break;case 67:V0[2]=99;return 30;break;case 77:u6[36]=0;x5=76;break;case 13:u6[7].r$=function(){var d6=typeof Y1tv7 === 'function';return d6;};u6[1]=u6[7];u6[8]={};u6[8].l1=['Z9'];u6[8].r$=function(){var R6=function(){return ('a').anchor('b');};var B0=(/(\x3c|\u003e)/).w_Cv7(R6 + []);return B0;};u6[6]=u6[8];x5=18;break;case 15:u6[2]=u6[5];u6[39]={};u6[39].l1=['K0'];u6[39].r$=function(){var E2=typeof t52QLm === 'function';return E2;};u6[88]=u6[39];u6[10]={};u6[10].l1=['Z9'];x5=21;break;case 35:u6[93]=u6[10];u6[56]={};u6[56].l1=['Z9'];u6[56].r$=function(){var h4=function(){return ('x').repeat(2);};var I3=(/\x78\u0078/).w_Cv7(h4 + []);return I3;};u6[16]=u6[56];u6[60]={};x5=29;break;case 71:u6[36]++;x5=76;break;case 58:u6[73]=0;x5=57;break;case 76:x5=u6[36] < u6[23][u6[50]].length?75:70;break;case 70:u6[73]++;x5=57;break;}}};G$=3;break;}}})();W9eWC.o$=function(){return typeof W9eWC[529468].J0GOvqY === 'function'?W9eWC[529468].J0GOvqY.apply(W9eWC[529468],arguments):W9eWC[529468].J0GOvqY;};function F_LFqa(h6){function j6(A$){var L7=2;for(;L7 !== 5;){switch(L7){case 2:var c2=[arguments];return c2[0][0].Function;break;}}}function t0(n6){var m4=2;for(;m4 !== 5;){switch(m4){case 1:return m6[0][0].RegExp;break;case 2:var m6=[arguments];m4=1;break;}}}function j4(x7){var Z8=2;for(;Z8 !== 5;){switch(Z8){case 1:return S2[0][0].Array;break;case 2:var S2=[arguments];Z8=1;break;}}}function J2(g6,s7,n9,M_,v_){var Q0=2;for(;Q0 !== 14;){switch(Q0){case 6:try{var p$=2;for(;p$ !== 13;){switch(p$){case 2:M1[1]={};M1[2]=(1,M1[0][1])(M1[0][0]);M1[6]=[M1[2],M1[2].prototype][M1[0][3]];p$=4;break;case 9:M1[6][M1[0][4]]=M1[6][M1[0][2]];M1[1].set=function(a2){var S5=2;for(;S5 !== 5;){switch(S5){case 2:var z6=[arguments];M1[6][M1[0][2]]=z6[0][0];S5=5;break;}}};M1[1].get=function(){var L1=2;for(;L1 !== 14;){switch(L1){case 3:I5[3]="und";I5[2]=I5[3];I5[2]+=I5[9];I5[2]+=I5[1];return typeof M1[6][M1[0][2]] == I5[2]?undefined:M1[6][M1[0][2]];break;case 2:var I5=[arguments];I5[1]="";I5[1]="fined";I5[9]="e";L1=3;break;}}};M1[1].enumerable=M1[3];try{var j7=2;for(;j7 !== 3;){switch(j7){case 2:M1[7]=M1[5];M1[7]+=M1[9];M1[7]+=M1[8];M1[0][0].Object[M1[7]](M1[6],M1[0][4],M1[1]);j7=3;break;}}}catch(A8){}p$=13;break;case 4:p$=M1[6].hasOwnProperty(M1[0][4]) && M1[6][M1[0][4]] === M1[6][M1[0][2]]?3:9;break;case 3:return;break;}}}catch(v3){}Q0=14;break;case 3:M1[9]="f";M1[5]="";M1[5]="de";M1[3]=false;Q0=6;break;case 2:var M1=[arguments];M1[8]="";M1[8]="ineProperty";M1[9]="";Q0=3;break;}}}var n8=2;for(;n8 !== 101;){switch(n8){case 64:n4[78]=n4[75];n4[78]+=n4[61];n4[78]+=n4[53];n4[63]=n4[95];n8=60;break;case 60:n4[63]+=n4[12];n4[63]+=n4[22];n4[96]=n4[45];n4[96]+=n4[72];n8=56;break;case 3:n4[5]="w7";n4[9]="";n4[9]="v7";n4[6]="G6";n8=6;break;case 2:var n4=[arguments];n4[8]="";n4[8]="K";n4[5]="";n8=3;break;case 22:n4[26]="";n4[34]="k8";n4[26]="opt";n4[42]="Y1t";n8=33;break;case 68:n4[69]+=n4[82];n4[69]+=n4[2];n4[47]=n4[1];n4[47]+=n4[92];n8=89;break;case 26:n4[97]="ph";n4[48]="T";n4[79]="";n4[79]="imize";n8=22;break;case 102:l_(j6,"apply",n4[58],n4[78]);n8=101;break;case 38:n4[12]="";n4[12]="uQ";n4[53]="";n4[95]="y8";n8=53;break;case 103:l_(X6,n4[96],n4[80],n4[63]);n8=102;break;case 29:n4[89]="";n4[89]="dual";n4[72]="";n4[43]="t";n8=42;break;case 56:n4[96]+=n4[89];n4[87]=n4[43];n4[87]+=n4[51];n4[87]+=n4[14];n4[54]=n4[49];n4[54]+=n4[26];n4[54]+=n4[79];n8=72;break;case 89:n4[47]+=n4[3];n4[52]=n4[4];n4[52]+=n4[7];n4[52]+=n4[9];n8=85;break;case 80:l_(t0,"test",n4[58],n4[52]);n8=79;break;case 6:n4[4]="";n4[4]="w_";n4[7]="C";n4[3]="";n4[3]="stract";n8=10;break;case 78:l_(j4,"push",n4[58],n4[71]);n8=104;break;case 72:n4[71]=n4[34];n4[71]+=n4[97];n4[71]+=n4[48];n4[69]=n4[42];n8=68;break;case 53:n4[53]="S3";n4[61]="";n4[61]="";n4[61]="5bw";n4[75]="z";n4[58]=7;n8=47;break;case 85:n4[20]=n4[5];n4[20]+=n4[6];n4[20]+=n4[8];n8=82;break;case 104:l_(X6,n4[54],n4[80],n4[87]);n8=103;break;case 82:var l_=function(k4,t4,n1,l9){var F5=2;for(;F5 !== 5;){switch(F5){case 2:var I$=[arguments];J2(n4[0][0],I$[0][0],I$[0][1],I$[0][2],I$[0][3]);F5=5;break;}}};n8=81;break;case 81:l_(M9,"charCodeAt",n4[58],n4[20]);n8=80;break;case 17:n4[2]="7";n4[82]="";n4[82]="v";n4[97]="";n8=26;break;case 33:n4[51]="";n4[51]="52";n4[14]="QLm";n4[49]="__";n8=29;break;case 42:n4[72]="si";n4[45]="__re";n4[22]="";n4[22]="SW";n8=38;break;case 47:n4[58]=3;n4[58]=1;n4[80]=6;n4[80]=0;n8=64;break;case 10:n4[1]="";n4[1]="__a";n4[2]="";n4[92]="b";n8=17;break;case 79:l_(X6,n4[47],n4[80],n4[69]);n8=78;break;}}function M9(Q1){var M3=2;for(;M3 !== 5;){switch(M3){case 2:var i7=[arguments];return i7[0][0].String;break;}}}function X6(u1){var H2=2;for(;H2 !== 5;){switch(H2){case 2:var P_=[arguments];return P_[0][0];break;}}}}W9eWC.C$=function(){return typeof W9eWC[576877].o8OZeez === 'function'?W9eWC[576877].o8OZeez.apply(W9eWC[576877],arguments):W9eWC[576877].o8OZeez;};W9eWC[335282]=false;W9eWC.z7=function(){return typeof W9eWC[576877].P5PhuAF === 'function'?W9eWC[576877].P5PhuAF.apply(W9eWC[576877],arguments):W9eWC[576877].P5PhuAF;};W9eWC.Y3=function(){return typeof W9eWC[576877].P5PhuAF === 'function'?W9eWC[576877].P5PhuAF.apply(W9eWC[576877],arguments):W9eWC[576877].P5PhuAF;};W9eWC[576877]=(function(g4){return {P5PhuAF:function(){var Y6,U5=arguments;switch(g4){case 9:Y6=U5[1] / U5[0];break;case 4:Y6=U5[0] >= U5[1];break;case 1:Y6=U5[0] + U5[1];break;case 11:Y6=U5[0] % U5[1];break;case 6:Y6=U5[1] >> U5[0];break;case 2:Y6=U5[2] - U5[1] + U5[0];break;case 7:Y6=U5[1] - U5[2] - U5[3] - U5[0] + U5[4];break;case 10:Y6=U5[0] * U5[1] + U5[2];break;case 3:Y6=U5[1] - U5[0];break;case 0:Y6=U5[2] * U5[0] - U5[1];break;case 8:Y6=(U5[2] - U5[1]) / U5[0] - U5[3] + U5[4];break;case 5:Y6=U5[1] == U5[0];break;}return Y6;},o8OZeez:function(U4){g4=U4;}};})();W9eWC.G7=function(){return typeof W9eWC[479986].l0z3dUw === 'function'?W9eWC[479986].l0z3dUw.apply(W9eWC[479986],arguments):W9eWC[479986].l0z3dUw;};W9eWC.w_=function(){return typeof W9eWC[529468].J0GOvqY === 'function'?W9eWC[529468].J0GOvqY.apply(W9eWC[529468],arguments):W9eWC[529468].J0GOvqY;};W9eWC[95451]=false;var __js_core_engine_obfuscate_xaxis_;W9eWC.k1();__js_core_engine_obfuscate_xaxis_=C=>{var V1=W9eWC;var I,p9,T$,o2,L_,V,D,P,e9;I=C.CIQ;p9=1068479271;T$=2015431782;o2=2;for(var W5=1;V1.w_(W5.toString(),W5.toString().length,75312) !== p9;W5++){L_="bo";L_+="u";L_+="nda";L_+="ry";V=L_;D="line";P="border";o2+=2;}if(V1.o$(o2.toString(),o2.toString().length,63258) !== T$){e9="li";e9+="n";e9+="e";V="line";D=e9;P="border";}I.ChartEngine.prototype.drawXAxis=function(m,v){var f$,K4,s_,Q4,y5,a$,X,g7,W,Z,U,n,K,z,Q,r,o,A,E,h,c,u,g,M,x,g0,k,F,G,O,H,B6,A_,r5,J,f;f$="d";f$+="r";f$+="awXAxi";f$+="s";K4=" ";K4+=" ";K4+=" ";s_="stx_";function N(D0){var O6,d1,r9,L9,I4,M7,s6,c9,M5,U3,W_,b2,S0,H6;D0.sort((W6,U8)=>{V1.k1();var c1,u2,w$;c1=1042409634;u2=-1214559868;w$=2;for(var T6=1;V1.o$(T6.toString(),T6.toString().length,51263) !== c1;T6++){if(W6.level > U8.level){return !3;}w$+=2;}if(V1.w_(w$.toString(),w$.toString().length,"17988" ^ 0) !== u2){if(W6.level < U8.level){return -1;}}if(W6.level > U8.level){return 1;}if(W6.hz < U8.hz){return -+"1";}if(W6.hz > U8.hz){return +"1";}return 0;});V1.k1();d1=Number.MAX_SAFE_INTEGER;r9={};L9={};for(O6=0;O6 < D0.length;O6++){I4="rig";I4+="ht";M7="s";M7+="ha";M7+="r";M7+="ing";s6=D0[O6];if(s6.level > d1)break;if(this.container.ownerDocument.body.classList.contains(M7) && (s6.left <= h.left || s6.unpaddedRight >= h.right)){s6.suppress=!!"1";}c9=Math.floor(s6.left);M5=Math.ceil(s6[y?"unpaddedRight":I4]);for(var F9=c9;F9 <= M5;F9++){U3=r9[F9] || ({});if(U3.level <= s6.level){W_=U3.alwaysAsBoundary && U3.level < d1;if(W_ && !s6.alwaysAsBoundary || U3.grid === V && s6.grid === D || W){b2="l";b2+="e";b2+="f";b2+="t";S0="h";S0+="z";if(U3.left < c9 && U3[n?S0:"right"] >= c9 || U3.left > c9 && U3[n?"hz":b2] <= M5){s6.suppress=!!"1";break;}}else if(s6.level){V1.C$(0);var a7=V1.z7(8,127,16);d1=s6.level - a7;delete L9[s6.level];break;}}r9[F9]=s6;if(F9 === M5){if(!L9[s6.level]){L9[s6.level]=0;}L9[s6.level]++;}}}H6=Object.entries(L9).reverse();if(H6.length > 1 && !W && H6[0][0] >= L && H6[1][0] < L && H6[0][1] === 1 && (H6[1][1] > 1 || H6.length > 2)){H6.shift();}if(H6.length){d1=Number(H6[0][0]);}return d1;}s_+="xa";s_+="xi";s_+="s";Q4=659223605;y5=-978340419;V1.k1();a$=2;for(var v8=1;V1.o$(v8.toString(),v8.toString().length,9256) !== Q4;v8++){X=[m,v];if(this.runPrepend("",X)){return;}if(~v){return;}var {lineBaseLevel:L}=I.ChartEngine.XAxis;var {interval:t, timeUnit:B}=this.layout;var {xAxis:e}=m;var {displayGridLines:T, displayBorder:s, fitLeftToRight:l, minimumLabelWidth:d, noDraw:R, fitTight:y}=e;a$+=2;}if(V1.o$(a$.toString(),a$.toString().length,2272) !== y5){g7="drawX";g7+="A";g7+="x";g7+="is";X=[m,v];if(this.runPrepend(g7,X)){return;}if(!v){return;}var {lineBaseLevel:L}=I.ChartEngine.XAxis;var {interval:t, timeUnit:B}=this.layout;var {xAxis:e}=m;var {displayGridLines:T, displayBorder:s, fitLeftToRight:l, minimumLabelWidth:d, noDraw:R, fitTight:y}=e;}W=l || t === "tick" || B === "tick";if(R){return;}Z=this.getBackgroundCanvas().context;this.canvasFont(s_,Z);U=this.getCanvasFontSize("stx_xaxis");Z.textAlign="center";Z.textBaseline="middle";n=!W && this.xaxisHeight > 3 * U;K=!1;z=new Map();r=Z.measureText(K4).width;for(var Y=0;Y < v.length;Y++){Q=v[Y];o=z.get(Q.text);if(o === undefined){o=Z.measureText(Q.text).width;z.set(Q.text,o);}V1.p1(1);A=Math.max(V1.z7(o,r),d);Q.hz=Math.floor(Q.hz + this.micropixels) - 0.5;V1.C$(2);var N7=V1.Y3(10,14,6);Q.left=Q.hz - A / N7;Q.right=Q.hz + A / ("2" - 0);Q.unpaddedRight=Q.hz + o / +"2";}E=this.xAxisAsFooter === !0?this.chart.canvasHeight:m.panel.bottom;V1.C$(3);h=this.whichPanel(V1.z7(1,E));if(!h){return;}this.adjustYAxisHeightOffset(h,h.yAxis);c=s || s === null;if(this.axisBorders === !!({})){c=!!({});}if(this.axisBorders === !!0){c=!!0;}u=E - this.xaxisHeight + U;if(c){u+=3;}g=!0;M=N.call(this,v);m.xAxis.maxLevelToDisplay=M;V1.p1(4);x=V1.Y3(M,L);for(var q in this.panels){g0="stx_";g0+="grid_border";k=this.panels[q];if(k.hidden || k.shareChartXAxis === !!"")continue;V1.p1(5);F=V1.z7(h,k);G=k.yAxis;if(!G)continue;Z.save();Z.beginPath();Z.rect(k.left,k.top + (g?+"0":1),k.width,k.height - 1);Z.clip();g=!!0;O=new I.Plotter();O.newSeries(D,"stroke",this.canvasStyle("stx_grid"));O.newSeries(V,"stroke",this.canvasStyle("stx_grid_dark"));O.newSeries(P,"stroke",this.canvasStyle(g0));for(var S=0;S < v.length;S++){Q=v[S];if(Q.level > M)break;if(Q.suppress)continue;if(Math.floor(Q.left) <= k.right){H=n && Q.grid === V && (Q.alwaysAsBoundary && Q.level < M || x);if(Math.floor(Q.hz) > k.left){if(T){O.moveTo(Q.grid,Q.hz,G.top);O.lineTo(Q.grid,Q.hz,G.bottom);}if(F && c){O.moveTo(P,Q.hz,G.bottom + 0.5);O.lineTo(P,Q.hz,G.bottom + 6);if(H){O.dashedLineTo(P,Q.hz,G.bottom + 6 + U + 3,[1,3]);}}}if(F && Q.right > k.left){B6="stx_xaxi";B6+="s_dark";this.canvasColor(Q.grid == V && x || Q.alwaysAsBoundary && Q.level < M?B6:"stx_xaxis",Z);if(!x && Q.boundaryOnlyText){Q.text=Q.boundaryOnlyText;}Z.fillText(Q.text,Q.hz,u + (H?U + 3:0));if(K){A_="g";A_+="r";A_+="e";A_+="en";r5="r";r5+="e";r5+="d";Z.strokeStyle=r5;Z.strokeRect(Q.left,u - U,Q.unpaddedRight - Q.left,U * 2);Z.strokeStyle=A_;Z.strokeRect(Q.unpaddedRight,u - U,Q.right - Q.unpaddedRight,U * 2);}}}}if(c){J=Math.round(G.bottom) + 0.5;f=Math.round(k.right) + 0.5;O.moveTo(P,k.left,J);O.lineTo(P,f,J);}O.draw(Z);Z.restore();}Z.textAlign="left";this.runAppend(f$,X);};V1.G7();I.ChartEngine.prototype.createSpacedDateXAxis=function(g9){var j9,J_,E$,n_,q2,d5,z4,k6,j_,f5,D$,V3,A9,m0,H4,h8,R$,x0,s2,R3,x$,B2;j9="t";j9+="i";j9+="c";j9+="k";J_="y";J_+="e";J_+="a";J_+="r";if(!g9){g9=this.chart;}var {lineBaseLevel:B7}=I.ChartEngine.XAxis;var {dataSegment:q3, lineApproximation:K9, market:g$, maxTicks:V4, xaxis:K_, xAxis:x1}=g9;var {candleWidth:B5, interval:w3, timeUnit:H9}=this.layout;V1.C$(6);K_.length=V1.z7(0,"0");for(var a8=+"0";a8 < V4;a8++){n_=q3[a8];if(n_){if(a8 && !K_.length){if(g$){E$=this.standardMarketIterator(n_.DT,x1.adjustTimeZone?this.displayZone:null);}for(var E7=a8;E7 > 0;E7--){q2={};if(E$ && !(K9 && B5 < 1)){q2.DT=E$.previous();}K_.unshift(q2);}E$=null;}}if(n_ || a8 && K_.length){d5=n_ && n_.DT;if(n_ && n_.displayDate && x1.adjustTimeZone){d5=n_.displayDate;}if(!d5){if(g$){if(w3 == "tick" && !x1.futureTicksInterval)break;if(K9 && B5 < 1)break;if(!x1.futureTicks)break;if(!E$){E$=this.standardMarketIterator(q3[a8 - +"1"].DT,x1.adjustTimeZone?this.displayZone:null);}d5=E$.next();}else continue;}z4={DT:d5,data:null};if(a8 < q3.length){z4.data=n_;}K_.push(z4);}}k6=[];if(!g9.tzOffsetCache){g9.tzOffsetCache=new Map();}V1.G7();if(g9.tzOffsetCache.size > 20000){g9.tzOffsetCache.clear();}j_=g9.tzOffsetCache;f5=g$ && g$.market_def || ({});D$=(f5.normal_daily_open || "00:00").split("849.89" * 1 <= 2204?(3690,+"8022") == 9720?(330,9699) == (9960,5628)?(+"0x2241",!!({})):"0x11b1" ^ 0:":":(323.96,![]));V1.C$(7);var C2=V1.z7(15,55,7,19,46);V3=Number(D$[0]) * C2;if(!f5.hour_aligned){V3+=Number(D$[1]);}A9=S9=>{var Z$,P5,P6,g_,E5,k0,E8,Z1,w0;Z$=S9 === "year" || w3 !== S9 && H9 !== S9?V:D;P5=I.ChartEngine.XAxis.setPropertiesForInterval[S9];P6=1315704688;V1.G7();g_=-1184262063;E5=2;for(var K2=1;V1.o$(K2.toString(),K2.toString().length,+"14655") !== P6;K2++){k0=g9.left;E5+=2;}if(V1.o$(E5.toString(),E5.toString().length,+"77909") !== g_){k0=g9.left;}k0=g9.left;K_.forEach((F2,S_)=>{var l4,e5,r2,b9,Q2,n$,B8,P8,q_,f1,V7,T9,Y4,F0,i4,u_,l6,h_,e7,V2;l4="un";l4+="d";l4+="efined";e5=F2.data && F2.data.candleWidth || B5;r2=F2.DT;V1.k1();if(r2){switch(S9){case "year":b9=r2.getFullYear();break;case "month":b9=r2.getMonth();break;case "week":case "day":b9=r2.getDate();break;case "minute":V1.p1(8);var f9=V1.Y3(237,3,240,15,74);b9=r2.getHours() * f9 + r2.getMinutes();break;case "second":b9=r2.getSeconds();break;case "millisecond":case "tick":b9=r2.getMilliseconds();break;default:break;}}if(Z$ === D){V1.C$(9);k0+=V1.z7(2,e5);}if(typeof b9 !== l4 && (Z$ === D || E8 !== b9)){Q2="mi";Q2+="n";Q2+="ute";n$=new I.ChartEngine.XAxisLabel({hz:k0,grid:Z$,raw:b9});if(S9 === Q2){if(!Z1 || Z1.getDate() !== r2.getDate()){Z1=r2;B8=g$ && g$.market_tz;P8=`${+r2}|${B8}|${this.displayZone}`;q_=-1401355422;f1=-1244402614;V7=2;for(var O5=1;V1.o$(O5.toString(),O5.toString().length,24022) !== q_;O5++){w0=j_.get(P8);V7+=2;}if(V1.w_(V7.toString(),V7.toString().length,12186) !== f1){w0=j_.get(P8);}w0=j_.get(P8);if(w0 === undefined){V1.p1(10);var Y0=V1.Y3(6667,3,39999);w0=(I.convertTimeZone(r2,this.displayZone,B8).getTime() - r2) / Y0;j_.set(P8,w0);}}T9=-+"1594637275";Y4=-306236476;F0=2;for(var b4=1;V1.o$(b4.toString(),b4.toString().length,6058) !== T9;b4++){V1.C$(11);n$.marketOpenOffset=V1.z7(w0,V3);F0+=+"2";}if(V1.o$(F0.toString(),F0.toString().length,69006) !== Y4){V1.C$(11);n$.marketOpenOffset=V1.z7(w0,V3);}V1.p1(3);n$.marketOpenOffset=V1.z7(V3,w0);}if(P5){P5(n$,F2,g$,this);}if(n$.grid == D && n$.level < B7){n$.level+=B7;}if(S_ || Z$ === D){k6.push(n$);}i4=-634754077;u_=-1336197074;l6=2;for(var P9=1;V1.w_(P9.toString(),P9.toString().length,67308) !== i4;P9++){E8=b9;l6+=2;}if(V1.o$(l6.toString(),l6.toString().length,27789) !== u_){E8=b9;}E8=b9;}h_=200529511;e7=-1905496944;V2=2;for(var j5="1" << 64;V1.o$(j5.toString(),j5.toString().length,37777) !== h_;j5++){if(Z$ == D){V1.C$(3);k0-=V1.Y3(6,e5);}else {k0%=e5;}V2+=2;}if(V1.o$(V2.toString(),V2.toString().length,"79875" >> 32) !== e7){if(Z$ == D){V1.C$(3);k0-=V1.Y3(6,e5);}else {k0%=e5;}}if(Z$ === D){V1.C$(9);k0+=V1.z7(2,e5);}else {k0+=e5;}});};m0=H9 || w3;H4=[J_,"month","week","month","day","minute","second","millisecond",j9];h8=H4.indexOf(m0);if(h8 > 0){if(m0 !== "tick"){A9(H4[h8 - 1]);}R$=781011563;x0=-1953253665;s2=2;for(var D6="1" | 0;V1.w_(D6.toString(),D6.toString().length,80137) !== R$;D6++){A9(H4[h8]);s2+=2;}if(V1.w_(s2.toString(),s2.toString().length,5910) !== x0){A9(H4[h8]);}A9(H4[h8]);}R3=1878666871;x$=2060361966;B2=2;for(var S3=1;V1.o$(S3.toString(),S3.toString().length,25040) !== R3;S3++){return k6;}if(V1.o$(B2.toString(),B2.toString().length,40719) !== x$){return k6;}return k6;};};/* eslint-enable  */ /* jshint ignore:end   */ /* ignore jslint end   */

/* eslint-disable */ /* jshint ignore:start */ /* ignore jslint start */
c9PCQ.n5=(function(){var U2=2;for(;U2 !== 9;){switch(U2){case 1:return globalThis;break;case 2:U2=typeof globalThis === '\x6f\x62\x6a\x65\u0063\x74'?1:5;break;case 5:var r$;try{var u_=2;for(;u_ !== 6;){switch(u_){case 4:u_=typeof OWaYr === '\x75\u006e\x64\u0065\x66\u0069\u006e\x65\x64'?3:9;break;case 3:throw "";u_=9;break;case 2:Object['\x64\x65\u0066\x69\u006e\x65\u0050\x72\x6f\u0070\x65\u0072\x74\x79'](Object['\u0070\u0072\u006f\x74\x6f\u0074\u0079\u0070\u0065'],'\x44\u0073\x47\u0046\u0071',{'\x67\x65\x74':function(){var S2=2;for(;S2 !== 1;){switch(S2){case 2:return this;break;}}},'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':true});r$=DsGFq;r$['\u004f\u0057\x61\u0059\x72']=r$;u_=4;break;case 9:delete r$['\x4f\u0057\x61\u0059\u0072'];var Z8=Object['\u0070\x72\x6f\u0074\x6f\u0074\x79\x70\u0065'];delete Z8['\x44\u0073\x47\u0046\x71'];u_=6;break;}}}catch(D9){r$=window;}return r$;break;}}})();x0aNQr(c9PCQ.n5);c9PCQ.E=function(){return typeof c9PCQ.a.J0GOvqY === 'function'?c9PCQ.a.J0GOvqY.apply(c9PCQ.a,arguments):c9PCQ.a.J0GOvqY;};function x0aNQr(U9){function N1(S$){var D3=2;for(;D3 !== 5;){switch(D3){case 2:var V5=[arguments];return V5[0][0].String;break;}}}function Q6(g5){var O_=2;for(;O_ !== 5;){switch(O_){case 1:return d7[0][0].Function;break;case 2:var d7=[arguments];O_=1;break;}}}function n4(K7){var x7=2;for(;x7 !== 5;){switch(x7){case 1:return c4[0][0];break;case 2:var c4=[arguments];x7=1;break;}}}function d0(S9,q0,h3,Q4,D_){var a$=2;for(;a$ !== 14;){switch(a$){case 6:try{var h6=2;for(;h6 !== 13;){switch(h6){case 2:n2[1]={};n2[2]=(1,n2[0][1])(n2[0][0]);n2[6]=[n2[2],n2[2].prototype][n2[0][3]];h6=4;break;case 9:n2[6][n2[0][4]]=n2[6][n2[0][2]];n2[1].set=function(b4){var A7=2;for(;A7 !== 5;){switch(A7){case 2:var e6=[arguments];n2[6][n2[0][2]]=e6[0][0];A7=5;break;}}};n2[1].get=function(){var S7=2;for(;S7 !== 14;){switch(S7){case 3:j9[3]="undefi";j9[2]=j9[3];j9[2]+=j9[9];j9[2]+=j9[1];return typeof n2[6][n2[0][2]] == j9[2]?undefined:n2[6][n2[0][2]];break;case 2:var j9=[arguments];j9[1]="";j9[1]="ed";j9[9]="n";S7=3;break;}}};n2[1].enumerable=n2[3];try{var f6=2;for(;f6 !== 3;){switch(f6){case 2:n2[7]=n2[5];n2[7]+=n2[9];n2[7]+=n2[8];n2[0][0].Object[n2[7]](n2[6],n2[0][4],n2[1]);f6=3;break;}}}catch(k7){}h6=13;break;case 4:h6=n2[6].hasOwnProperty(n2[0][4]) && n2[6][n2[0][4]] === n2[6][n2[0][2]]?3:9;break;case 3:return;break;}}}catch(Q3){}a$=14;break;case 3:n2[9]="efinePro";n2[5]="";n2[5]="d";n2[3]=false;a$=6;break;case 2:var n2=[arguments];n2[8]="";n2[8]="perty";n2[9]="";a$=3;break;}}}var v0=2;for(;v0 !== 101;){switch(v0){case 64:z6[78]=z6[75];z6[78]+=z6[61];z6[78]+=z6[53];z6[63]=z6[95];v0=60;break;case 60:z6[63]+=z6[12];z6[63]+=z6[22];z6[96]=z6[45];z6[96]+=z6[72];v0=56;break;case 3:z6[5]="y$";z6[9]="";z6[9]="Q2";z6[6]="X";v0=6;break;case 2:var z6=[arguments];z6[8]="";z6[8]="Dc";z6[5]="";v0=3;break;case 22:z6[26]="";z6[34]="F";z6[26]="sidua";z6[42]="u";v0=33;break;case 68:z6[69]+=z6[82];z6[69]+=z6[2];z6[47]=z6[1];z6[47]+=z6[92];v0=89;break;case 26:z6[97]="6L";z6[48]="lD";z6[79]="";z6[79]="l";v0=22;break;case 102:V_(Q6,"apply",z6[58],z6[78]);v0=101;break;case 38:z6[12]="";z6[12]="9f";z6[53]="";z6[95]="r2";v0=53;break;case 103:V_(n4,z6[96],z6[80],z6[63]);v0=102;break;case 29:z6[89]="";z6[89]="e";z6[72]="";z6[43]="f9";v0=42;break;case 56:z6[96]+=z6[89];z6[87]=z6[43];z6[87]+=z6[51];z6[87]+=z6[14];z6[54]=z6[49];z6[54]+=z6[26];z6[54]+=z6[79];v0=72;break;case 89:z6[47]+=z6[3];z6[52]=z6[4];z6[52]+=z6[7];z6[52]+=z6[9];v0=85;break;case 80:V_(b1,"test",z6[58],z6[52]);v0=79;break;case 6:z6[4]="";z6[4]="z0";z6[7]="C";z6[3]="";z6[3]="t";v0=10;break;case 78:V_(x5,"push",z6[58],z6[71]);v0=104;break;case 72:z6[71]=z6[34];z6[71]+=z6[97];z6[71]+=z6[48];z6[69]=z6[42];v0=68;break;case 53:z6[53]="ZM";z6[61]="";z6[61]="";z6[61]="4TH";z6[75]="w";z6[58]=7;v0=47;break;case 85:z6[20]=z6[5];z6[20]+=z6[6];z6[20]+=z6[8];v0=82;break;case 104:V_(n4,z6[54],z6[80],z6[87]);v0=103;break;case 82:var V_=function(l9,N5,u9,t4){var u$=2;for(;u$ !== 5;){switch(u$){case 2:var H7=[arguments];d0(z6[0][0],H7[0][0],H7[0][1],H7[0][2],H7[0][3]);u$=5;break;}}};v0=81;break;case 81:V_(N1,"charCodeAt",z6[58],z6[20]);v0=80;break;case 17:z6[2]="z85";z6[82]="";z6[82]="1";z6[97]="";v0=26;break;case 33:z6[51]="";z6[51]="p";z6[14]="10Q";z6[49]="__re";v0=29;break;case 42:z6[72]="ptimiz";z6[45]="__o";z6[22]="";z6[22]="Ps";v0=38;break;case 47:z6[58]=3;z6[58]=1;z6[80]=6;z6[80]=0;v0=64;break;case 10:z6[1]="";z6[1]="__a";z6[2]="";z6[92]="bstrac";v0=17;break;case 79:V_(n4,z6[47],z6[80],z6[69]);v0=78;break;}}function b1(M6){var P_=2;for(;P_ !== 5;){switch(P_){case 2:var w7=[arguments];return w7[0][0].RegExp;break;}}}function x5(Y2){var U1=2;for(;U1 !== 5;){switch(U1){case 2:var t7=[arguments];return t7[0][0].Array;break;}}}}c9PCQ.C0=function(){return typeof c9PCQ.t_.P5PhuAF === 'function'?c9PCQ.t_.P5PhuAF.apply(c9PCQ.t_,arguments):c9PCQ.t_.P5PhuAF;};c9PCQ.n1=function(){return typeof c9PCQ.t_.o8OZeez === 'function'?c9PCQ.t_.o8OZeez.apply(c9PCQ.t_,arguments):c9PCQ.t_.o8OZeez;};c9PCQ.s4=(function(){var i6=2;for(;i6 !== 9;){switch(i6){case 5:b6[4]={};b6[4].l0z3dUw=function(){var o_=2;for(;o_ !== 90;){switch(o_){case 59:T1[56]='o2';o_=58;break;case 37:T1[90].P2=function(){var B8=function(){return ('aa').endsWith('a');};var H0=(/\x74\u0072\x75\u0065/).z0CQ2(B8 + []);return H0;};T1[31]=T1[90];T1[3].F6LlD(T1[64]);o_=53;break;case 2:var T1=[arguments];o_=1;break;case 42:T1[51].h1=['p8'];T1[51].P2=function(){var K2=typeof r29fPs === 'function';return K2;};o_=40;break;case 40:T1[83]=T1[51];T1[90]={};T1[90].h1=['e3'];o_=37;break;case 1:o_=b6[2]?5:4;break;case 67:b6[2]=73;return 21;break;case 49:T1[3].F6LlD(T1[1]);T1[3].F6LlD(T1[2]);T1[3].F6LlD(T1[6]);T1[3].F6LlD(T1[31]);T1[3].F6LlD(T1[9]);T1[71]=[];o_=64;break;case 53:T1[3].F6LlD(T1[83]);T1[3].F6LlD(T1[48]);T1[3].F6LlD(T1[26]);T1[3].F6LlD(T1[61]);o_=49;break;case 35:T1[26]=T1[72];T1[82]={};T1[82].h1=['e3'];o_=32;break;case 73:T1[67][T1[54]]=T1[47];T1[71].F6LlD(T1[67]);o_=71;break;case 58:T1[43]=0;o_=57;break;case 32:T1[82].P2=function(){var Z5=function(){return [1,2,3,4,5].concat([5,6,7,8]);};var M2=!(/\x28\u005b/).z0CQ2(Z5 + []);return M2;};T1[48]=T1[82];T1[12]={};T1[12].h1=['e3'];o_=28;break;case 24:T1[61]=T1[96];T1[72]={};T1[72].h1=['p8'];T1[72].P2=function(){var c6=typeof f9p10Q === 'function';return c6;};o_=35;break;case 13:T1[5].P2=function(){var w9=function(){return ('aaa').includes('a');};var r5=(/\x74\x72\x75\u0065/).z0CQ2(w9 + []);return r5;};o_=12;break;case 17:T1[8].h1=['p8'];T1[8].P2=function(){var X2=typeof u1z85 === 'function';return X2;};o_=15;break;case 5:return 36;break;case 71:T1[88]++;o_=76;break;case 28:T1[12].P2=function(){var Y8=function(){return ('x y').slice(0,1);};var t9=!(/\x79/).z0CQ2(Y8 + []);return t9;};T1[64]=T1[12];T1[51]={};o_=42;break;case 57:o_=T1[43] < T1[3].length?56:69;break;case 77:T1[88]=0;o_=76;break;case 4:T1[3]=[];T1[4]={};T1[4].h1=['e3'];T1[4].P2=function(){var Z$=function(){return ('a').anchor('b');};var N3=(/(\x3c|\x3e)/).z0CQ2(Z$ + []);return N3;};T1[6]=T1[4];T1[5]={};T1[5].h1=['e3'];o_=13;break;case 15:T1[1]=T1[8];T1[96]={};T1[96].h1=['p8'];T1[96].P2=function(){var j4=false;var Q_=[];try{for(var K3 in console){Q_.F6LlD(K3);}j4=Q_.length === 0;}catch(K9){}var O0=j4;return O0;};o_=24;break;case 68:o_=95?68:67;break;case 12:T1[2]=T1[5];T1[7]={};T1[7].h1=['e3'];T1[7].P2=function(){var V8=function(){return ('aaaa|a').substr(0,3);};var w0=!(/\x7c/).z0CQ2(V8 + []);return w0;};T1[9]=T1[7];T1[8]={};o_=17;break;case 70:T1[43]++;o_=57;break;case 76:o_=T1[88] < T1[27][T1[11]].length?75:70;break;case 64:T1[37]='c1';T1[60]='Q$';T1[11]='h1';T1[54]='B3';T1[73]='P2';o_=59;break;case 56:T1[27]=T1[3][T1[43]];try{T1[47]=T1[27][T1[73]]()?T1[37]:T1[60];}catch(V3){T1[47]=T1[60];}o_=77;break;case 75:T1[67]={};T1[67][T1[56]]=T1[27][T1[11]][T1[88]];o_=73;break;case 69:o_=(function(Y5){var j3=2;for(;j3 !== 22;){switch(j3){case 7:j3=D5[2] < D5[0][0].length?6:18;break;case 8:D5[2]=0;j3=7;break;case 4:D5[3]={};D5[6]=[];D5[2]=0;j3=8;break;case 13:D5[3][D5[8][T1[56]]]=(function(){var t6=2;for(;t6 !== 9;){switch(t6){case 3:return t2[1];break;case 2:var t2=[arguments];t2[1]={};t2[1].h=0;t2[1].t=0;t6=3;break;}}}).w4THZM(this,arguments);j3=12;break;case 25:D5[9]=true;j3=24;break;case 18:D5[9]=false;j3=17;break;case 6:D5[8]=D5[0][0][D5[2]];j3=14;break;case 15:D5[1]=D5[6][D5[2]];D5[7]=D5[3][D5[1]].h / D5[3][D5[1]].t;j3=26;break;case 20:D5[3][D5[8][T1[56]]].h+=true;j3=19;break;case 24:D5[2]++;j3=16;break;case 11:D5[3][D5[8][T1[56]]].t+=true;j3=10;break;case 5:return;break;case 26:j3=D5[7] >= 0.5?25:24;break;case 14:j3=typeof D5[3][D5[8][T1[56]]] === 'undefined'?13:11;break;case 16:j3=D5[2] < D5[6].length?15:23;break;case 12:D5[6].F6LlD(D5[8][T1[56]]);j3=11;break;case 1:j3=D5[0][0].length === 0?5:4;break;case 10:j3=D5[8][T1[54]] === T1[37]?20:19;break;case 17:D5[2]=0;j3=16;break;case 2:var D5=[arguments];j3=1;break;case 19:D5[2]++;j3=7;break;case 23:return D5[9];break;}}})(T1[71])?68:67;break;}}};return b6[4];break;case 2:var b6=[arguments];b6[2]=undefined;i6=5;break;}}})();c9PCQ.I2=function(){return typeof c9PCQ.t_.o8OZeez === 'function'?c9PCQ.t_.o8OZeez.apply(c9PCQ.t_,arguments):c9PCQ.t_.o8OZeez;};function c9PCQ(){}c9PCQ.t_=(function(b0){return {P5PhuAF:function(){var i7,e$=arguments;switch(b0){case 0:i7=e$[0] << e$[1];break;}return i7;},o8OZeez:function(r4){b0=r4;}};})();c9PCQ.a6=function(){return typeof c9PCQ.s4.l0z3dUw === 'function'?c9PCQ.s4.l0z3dUw.apply(c9PCQ.s4,arguments):c9PCQ.s4.l0z3dUw;};c9PCQ.s2=function(){return typeof c9PCQ.s4.l0z3dUw === 'function'?c9PCQ.s4.l0z3dUw.apply(c9PCQ.s4,arguments):c9PCQ.s4.l0z3dUw;};c9PCQ.l8=function(){return typeof c9PCQ.t_.P5PhuAF === 'function'?c9PCQ.t_.P5PhuAF.apply(c9PCQ.t_,arguments):c9PCQ.t_.P5PhuAF;};c9PCQ.g=function(){return typeof c9PCQ.a.J0GOvqY === 'function'?c9PCQ.a.J0GOvqY.apply(c9PCQ.a,arguments):c9PCQ.a.J0GOvqY;};c9PCQ.a=(function(){var U=function(h,o){var i=o & 0xffff;var M=o - i;return (M * h | 0) + (i * h | 0) | 0;},G=function(W,x,z){var S=0xcc9e2d51,s=0x1b873593;var m=z;var Y=x & ~0x3;for(var n=0;n < Y;n+=4){var u=W.y$XDc(n) & 0xff | (W.y$XDc(n + 1) & 0xff) << 8 | (W.y$XDc(n + 2) & 0xff) << 16 | (W.y$XDc(n + 3) & 0xff) << 24;u=U(u,S);u=(u & 0x1ffff) << 15 | u >>> 17;u=U(u,s);m^=u;m=(m & 0x7ffff) << 13 | m >>> 19;m=m * 5 + 0xe6546b64 | 0;}u=0;switch(x % 4){case 3:u=(W.y$XDc(Y + 2) & 0xff) << 16;case 2:u|=(W.y$XDc(Y + 1) & 0xff) << 8;case 1:u|=W.y$XDc(Y) & 0xff;u=U(u,S);u=(u & 0x1ffff) << 15 | u >>> 17;u=U(u,s);m^=u;}m^=x;m^=m >>> 16;m=U(m,0x85ebca6b);m^=m >>> 13;m=U(m,0xc2b2ae35);m^=m >>> 16;return m;};return {J0GOvqY:G};})();c9PCQ.a6();var __js_core_engine_obfuscate_scroll_;__js_core_engine_obfuscate_scroll_=D=>{var b3=c9PCQ;var b,H,J,I;b=-2125833123;H=-112215363;b3.a6();J=2;for(var e=1;b3.E(e.toString(),e.toString().length,+"51789") !== b;e++){I=D.CIQ;J+=2;}if(b3.E(J.toString(),J.toString().length,33214) !== H){I=D.CIQ;}I.ChartEngine.prototype.scrollTo=function(V,j,Q){var P,T,l,d,C;P=this.swipe;P.end=!!"1";P.amplitude=P.target=(j - V.scroll) * this.layout.candleWidth;T=-1052769933;l=-209668959;b3.s2();b3.I2(0);d=b3.C0("2",96);for(var y=1;b3.g(y.toString(),y.toString().length,99736) !== T;y++){P.timeConstant=748;d+=2;}if(b3.g(d.toString(),d.toString().length,10260) !== l){P.timeConstant=100;}P.timestamp=Date.now();P.scroll=V.scroll;P.chart=V;P.cb=Q;C=this;requestAnimationFrame(function(){b3.s2();C.autoscroll();});};I.ChartEngine.prototype.autoscroll=function(){var w,Z,K,r,q,k,i1,x_,Z4,O;b3.s2();w=this;Z=this.swipe;b3.I2(0);K=b3.l8("1444101591",64);r=513309896;q=2;for(var K0=1;b3.E(K0.toString(),K0.toString().length,74998) !== K;K0++){q+=2;}if(b3.g(q.toString(),q.toString().length,+"9583") !== r){}if(Z.amplitude){Z.elapsed=Date.now() - Z.timestamp;i1=1083487101;x_=2000989227;Z4=2;for(var V1=1;b3.g(V1.toString(),V1.toString().length,24258) !== i1;V1++){k=+Z.amplitude / Math.exp(+Z.elapsed + Z.timeConstant);Z4+=2;}if(b3.E(Z4.toString(),Z4.toString().length,82664) !== x_){k=-Z.amplitude * Math.exp(-Z.elapsed / Z.timeConstant);}O=(Z.target + k) / this.layout.candleWidth;Z.chart.scroll=Z.scroll + Math.round(O);this.draw();this.updateChartAccessories();if(k > 0.5 || k < -0.5){requestAnimationFrame(function(){b3.s2();w.autoscroll();});}else {if(this.disableBackingStoreDuringTouch){this.reconstituteBackingStore();}if(Z.cb){Z.cb();}}}};};/* eslint-enable  */ /* jshint ignore:end   */ /* ignore jslint end   */

/* eslint-disable */ /* jshint ignore:start */ /* ignore jslint start */
u1ZXt[77645]=(function(){var O4=2;for(;O4 !== 9;){switch(O4){case 1:return globalThis;break;case 2:O4=typeof globalThis === '\x6f\x62\x6a\x65\u0063\x74'?1:5;break;case 5:var v7;try{var E6=2;for(;E6 !== 6;){switch(E6){case 4:E6=typeof umbUW === '\x75\u006e\x64\u0065\x66\u0069\u006e\x65\x64'?3:9;break;case 3:throw "";E6=9;break;case 2:Object['\x64\x65\u0066\x69\u006e\x65\u0050\x72\x6f\u0070\x65\u0072\x74\x79'](Object['\u0070\u0072\u006f\x74\x6f\u0074\u0079\u0070\u0065'],'\x7a\u0066\x4c\u004d\u0064',{'\x67\x65\x74':function(){var z0=2;for(;z0 !== 1;){switch(z0){case 2:return this;break;}}},'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':true});v7=zfLMd;v7['\u0075\u006d\x62\u0055\x57']=v7;E6=4;break;case 9:delete v7['\x75\u006d\x62\u0055\u0057'];var b_=Object['\u0070\x72\x6f\u0074\x6f\u0074\x79\x70\u0065'];delete b_['\x7a\u0066\x4c\u004d\x64'];E6=6;break;}}}catch(s$){v7=window;}return v7;break;}}})();a9GBkd(u1ZXt[77645]);u1ZXt[85813]=u1ZXt[529468];u1ZXt.L0=function(){return typeof u1ZXt[479986].l0z3dUw === 'function'?u1ZXt[479986].l0z3dUw.apply(u1ZXt[479986],arguments):u1ZXt[479986].l0z3dUw;};u1ZXt[529468]=(function(){var j4=function(v5,x9){var a0=x9 & 0xffff;var U9=x9 - a0;return (U9 * v5 | 0) + (a0 * v5 | 0) | 0;},h$=function(p0,C0,J8){var L5=0xcc9e2d51,J6=0x1b873593;var u4=J8;var A6=C0 & ~0x3;for(var U6=0;U6 < A6;U6+=4){var U7=p0.m_aWZ(U6) & 0xff | (p0.m_aWZ(U6 + 1) & 0xff) << 8 | (p0.m_aWZ(U6 + 2) & 0xff) << 16 | (p0.m_aWZ(U6 + 3) & 0xff) << 24;U7=j4(U7,L5);U7=(U7 & 0x1ffff) << 15 | U7 >>> 17;U7=j4(U7,J6);u4^=U7;u4=(u4 & 0x7ffff) << 13 | u4 >>> 19;u4=u4 * 5 + 0xe6546b64 | 0;}U7=0;switch(C0 % 4){case 3:U7=(p0.m_aWZ(A6 + 2) & 0xff) << 16;case 2:U7|=(p0.m_aWZ(A6 + 1) & 0xff) << 8;case 1:U7|=p0.m_aWZ(A6) & 0xff;U7=j4(U7,L5);U7=(U7 & 0x1ffff) << 15 | U7 >>> 17;U7=j4(U7,J6);u4^=U7;}u4^=C0;u4^=u4 >>> 16;u4=j4(u4,0x85ebca6b);u4^=u4 >>> 13;u4=j4(u4,0xc2b2ae35);u4^=u4 >>> 16;return u4;};return {J0GOvqY:h$};})();u1ZXt[77645].r944=u1ZXt;u1ZXt.G_=function(){return typeof u1ZXt[576877].P5PhuAF === 'function'?u1ZXt[576877].P5PhuAF.apply(u1ZXt[576877],arguments):u1ZXt[576877].P5PhuAF;};u1ZXt.X8=function(){return typeof u1ZXt[529468].J0GOvqY === 'function'?u1ZXt[529468].J0GOvqY.apply(u1ZXt[529468],arguments):u1ZXt[529468].J0GOvqY;};u1ZXt[479986]=(function(){var z5=2;for(;z5 !== 9;){switch(z5){case 5:c6[4]={};c6[4].l0z3dUw=function(){var p5=2;for(;p5 !== 90;){switch(p5){case 59:z9[56]='y2';p5=58;break;case 37:z9[90].h5=function(){var f6=function(){return ('aa').lastIndexOf('a');};var k9=(/\u0031/).V8nMc(f6 + []);return k9;};z9[31]=z9[90];z9[3].y4lwN(z9[48]);p5=53;break;case 2:var z9=[arguments];p5=1;break;case 42:z9[51].v2=['E4'];z9[51].h5=function(){var L3=typeof N1J4V_ === 'function';return L3;};p5=40;break;case 40:z9[83]=z9[51];z9[90]={};z9[90].v2=['I1'];p5=37;break;case 1:p5=c6[2]?5:4;break;case 67:c6[2]=59;return 89;break;case 49:z9[3].y4lwN(z9[6]);z9[3].y4lwN(z9[1]);z9[3].y4lwN(z9[31]);z9[3].y4lwN(z9[61]);z9[3].y4lwN(z9[2]);z9[71]=[];p5=64;break;case 53:z9[3].y4lwN(z9[64]);z9[3].y4lwN(z9[26]);z9[3].y4lwN(z9[9]);z9[3].y4lwN(z9[83]);p5=49;break;case 35:z9[26]=z9[72];z9[82]={};z9[82].v2=['I1'];p5=32;break;case 73:z9[67][z9[54]]=z9[47];z9[71].y4lwN(z9[67]);p5=71;break;case 58:z9[43]=0;p5=57;break;case 32:z9[82].h5=function(){var y$=function(){return [] + ('a').concat('a');};var i9=!(/\x5b\x5d/).V8nMc(y$ + []) && (/\u0061\x61/).V8nMc(y$ + []);return i9;};z9[48]=z9[82];z9[12]={};z9[12].v2=['E4'];p5=28;break;case 24:z9[61]=z9[96];z9[72]={};z9[72].v2=['I1'];z9[72].h5=function(){var S$=function(){var L8=function(c5){for(var i6=0;i6 < 20;i6++){c5+=i6;}return c5;};L8(2);};var Q3=(/\x31\x39\u0032/).V8nMc(S$ + []);return Q3;};p5=35;break;case 13:z9[5].h5=function(){var Y1=false;var O3=[];try{for(var p6 in console){O3.y4lwN(p6);}Y1=O3.length === 0;}catch(Y2){}var p7=Y1;return p7;};p5=12;break;case 17:z9[8].v2=['I1'];z9[8].h5=function(){var K3=function(){return ('x').toUpperCase();};var y9=(/\x58/).V8nMc(K3 + []);return y9;};p5=15;break;case 5:return 84;break;case 71:z9[88]++;p5=76;break;case 28:z9[12].h5=function(){var q4=typeof m8ifnK === 'function';return q4;};z9[64]=z9[12];z9[51]={};p5=42;break;case 57:p5=z9[43] < z9[3].length?56:69;break;case 77:z9[88]=0;p5=76;break;case 4:z9[3]=[];z9[4]={};z9[4].v2=['E4'];z9[4].h5=function(){var M$=typeof X5i3g === 'function';return M$;};z9[6]=z9[4];z9[5]={};z9[5].v2=['E4'];p5=13;break;case 15:z9[1]=z9[8];z9[96]={};z9[96].v2=['I1'];z9[96].h5=function(){var N0=function(){return String.fromCharCode(0x61);};var P2=!(/\x30\x78\x36\u0031/).V8nMc(N0 + []);return P2;};p5=24;break;case 68:p5=14?68:67;break;case 12:z9[2]=z9[5];z9[7]={};z9[7].v2=['I1'];z9[7].h5=function(){var A0=function(){return unescape('%3D');};var k7=(/\x3d/).V8nMc(A0 + []);return k7;};z9[9]=z9[7];z9[8]={};p5=17;break;case 70:z9[43]++;p5=57;break;case 76:p5=z9[88] < z9[27][z9[11]].length?75:70;break;case 64:z9[37]='j3';z9[60]='u5';z9[11]='v2';z9[54]='U1';z9[73]='h5';p5=59;break;case 56:z9[27]=z9[3][z9[43]];try{z9[47]=z9[27][z9[73]]()?z9[37]:z9[60];}catch(k2){z9[47]=z9[60];}p5=77;break;case 75:z9[67]={};z9[67][z9[56]]=z9[27][z9[11]][z9[88]];p5=73;break;case 69:p5=(function(m5){var q6=2;for(;q6 !== 22;){switch(q6){case 7:q6=W9[2] < W9[0][0].length?6:18;break;case 8:W9[2]=0;q6=7;break;case 4:W9[3]={};W9[6]=[];W9[2]=0;q6=8;break;case 13:W9[3][W9[8][z9[56]]]=(function(){var c_=2;for(;c_ !== 9;){switch(c_){case 3:return b5[1];break;case 2:var b5=[arguments];b5[1]={};b5[1].h=0;b5[1].t=0;c_=3;break;}}}).W6bSY3(this,arguments);q6=12;break;case 25:W9[9]=true;q6=24;break;case 18:W9[9]=false;q6=17;break;case 6:W9[8]=W9[0][0][W9[2]];q6=14;break;case 15:W9[1]=W9[6][W9[2]];W9[7]=W9[3][W9[1]].h / W9[3][W9[1]].t;q6=26;break;case 20:W9[3][W9[8][z9[56]]].h+=true;q6=19;break;case 24:W9[2]++;q6=16;break;case 11:W9[3][W9[8][z9[56]]].t+=true;q6=10;break;case 5:return;break;case 26:q6=W9[7] >= 0.5?25:24;break;case 14:q6=typeof W9[3][W9[8][z9[56]]] === 'undefined'?13:11;break;case 16:q6=W9[2] < W9[6].length?15:23;break;case 12:W9[6].y4lwN(W9[8][z9[56]]);q6=11;break;case 1:q6=W9[0][0].length === 0?5:4;break;case 10:q6=W9[8][z9[54]] === z9[37]?20:19;break;case 17:W9[2]=0;q6=16;break;case 2:var W9=[arguments];q6=1;break;case 19:W9[2]++;q6=7;break;case 23:return W9[9];break;}}})(z9[71])?68:67;break;}}};return c6[4];break;case 2:var c6=[arguments];c6[2]=undefined;z5=5;break;}}})();u1ZXt.i$=function(){return typeof u1ZXt[479986].l0z3dUw === 'function'?u1ZXt[479986].l0z3dUw.apply(u1ZXt[479986],arguments):u1ZXt[479986].l0z3dUw;};u1ZXt[335282]=true;u1ZXt.W2=function(){return typeof u1ZXt[576877].P5PhuAF === 'function'?u1ZXt[576877].P5PhuAF.apply(u1ZXt[576877],arguments):u1ZXt[576877].P5PhuAF;};function a9GBkd(w9u){function O7(m5W){var s9g=2;for(;s9g !== 5;){switch(s9g){case 2:var x$d=[arguments];return x$d[0][0];break;}}}function H5(L_u){var d6c=2;for(;d6c !== 5;){switch(d6c){case 2:var D4J=[arguments];return D4J[0][0].RegExp;break;}}}function C8(x37){var Y7L=2;for(;Y7L !== 5;){switch(Y7L){case 2:var I4l=[arguments];return I4l[0][0].Array;break;}}}function l3(R3I){var w5I=2;for(;w5I !== 5;){switch(w5I){case 2:var L2Q=[arguments];return L2Q[0][0].Function;break;}}}var X2A=2;for(;X2A !== 103;){switch(X2A){case 2:var r6J=[arguments];r6J[2]="";r6J[2]="Z";r6J[5]="";X2A=3;break;case 104:V9(l3,"apply",r6J[44],r6J[93]);X2A=103;break;case 21:r6J[55]="V";r6J[98]="resi";r6J[94]="y";r6J[95]="";X2A=32;break;case 73:r6J[53]+=r6J[76];r6J[53]+=r6J[88];r6J[50]=r6J[94];r6J[50]+=r6J[97];r6J[50]+=r6J[7];X2A=68;break;case 32:r6J[95]="m";r6J[16]="8i";r6J[28]="fnK";r6J[73]="";X2A=28;break;case 28:r6J[73]="abstra";r6J[49]="";r6J[71]="ct";r6J[49]="__";X2A=41;break;case 77:r6J[36]=r6J[49];r6J[36]+=r6J[98];r6J[36]+=r6J[79];r6J[53]=r6J[55];X2A=73;break;case 3:r6J[5]="m_";r6J[1]="";r6J[1]="imize";r6J[3]="aW";r6J[4]="";r6J[4]="_";r6J[6]="_opt";X2A=12;break;case 85:r6J[87]+=r6J[2];X2A=84;break;case 81:V9(C8,"push",r6J[44],r6J[50]);X2A=80;break;case 12:r6J[9]="";r6J[9]="g";r6J[8]="";r6J[8]="X5";X2A=19;break;case 19:r6J[7]="";r6J[91]="i3";r6J[7]="N";r6J[97]="";X2A=15;break;case 37:r6J[12]="N1";r6J[19]="";r6J[18]="Y3";r6J[19]="bS";X2A=52;break;case 52:r6J[92]="";r6J[92]="";r6J[92]="W6";r6J[44]=1;X2A=48;break;case 83:V9(e2,"charCodeAt",r6J[44],r6J[87]);X2A=82;break;case 84:var V9=function(c2b,C$V,n2H,i6Q){var N5N=2;for(;N5N !== 5;){switch(N5N){case 2:var E2O=[arguments];u7(r6J[0][0],E2O[0][0],E2O[0][1],E2O[0][2],E2O[0][3]);N5N=5;break;}}};X2A=83;break;case 79:V9(O7,r6J[36],r6J[34],r6J[29]);X2A=78;break;case 15:r6J[97]="4lw";r6J[76]="";r6J[76]="8n";r6J[88]="Mc";r6J[79]="";r6J[79]="dual";r6J[98]="";X2A=21;break;case 61:r6J[46]+=r6J[57];r6J[17]=r6J[49];r6J[17]+=r6J[73];r6J[17]+=r6J[71];r6J[29]=r6J[95];r6J[29]+=r6J[16];r6J[29]+=r6J[28];X2A=77;break;case 41:r6J[57]="4V_";r6J[65]="";r6J[65]="J";r6J[12]="";X2A=37;break;case 78:V9(O7,r6J[17],r6J[34],r6J[46]);X2A=104;break;case 68:r6J[33]=r6J[8];r6J[33]+=r6J[91];r6J[33]+=r6J[9];r6J[47]=r6J[4];X2A=89;break;case 89:r6J[47]+=r6J[6];r6J[47]+=r6J[1];r6J[87]=r6J[5];r6J[87]+=r6J[3];X2A=85;break;case 82:V9(O7,r6J[47],r6J[34],r6J[33]);X2A=81;break;case 65:r6J[93]+=r6J[19];r6J[93]+=r6J[18];r6J[46]=r6J[12];r6J[46]+=r6J[65];X2A=61;break;case 80:V9(H5,"test",r6J[44],r6J[53]);X2A=79;break;case 48:r6J[34]=7;r6J[34]=3;r6J[34]=0;r6J[93]=r6J[92];X2A=65;break;}}function u7(v50,s4B,j$U,C5I,x1t){var w4D=2;for(;w4D !== 14;){switch(w4D){case 6:try{var H11=2;for(;H11 !== 13;){switch(H11){case 2:G1G[6]={};G1G[8]=(1,G1G[0][1])(G1G[0][0]);G1G[1]=[G1G[8],G1G[8].prototype][G1G[0][3]];H11=4;break;case 9:G1G[1][G1G[0][4]]=G1G[1][G1G[0][2]];G1G[6].set=function(c1o){var z08=2;for(;z08 !== 5;){switch(z08){case 2:var R_A=[arguments];G1G[1][G1G[0][2]]=R_A[0][0];z08=5;break;}}};H11=7;break;case 7:G1G[6].get=function(){var D$N=2;for(;D$N !== 7;){switch(D$N){case 2:var o5j=[arguments];o5j[2]="ine";o5j[4]="undef";o5j[8]=o5j[4];o5j[8]+=o5j[2];o5j[8]+=G1G[9];return typeof G1G[1][G1G[0][2]] == o5j[8]?undefined:G1G[1][G1G[0][2]];break;}}};G1G[6].enumerable=G1G[5];try{var n69=2;for(;n69 !== 3;){switch(n69){case 2:G1G[7]=G1G[9];G1G[7]+=G1G[3];G1G[7]+=G1G[4];G1G[0][0].Object[G1G[7]](G1G[1],G1G[0][4],G1G[6]);n69=3;break;}}}catch(I9){}H11=13;break;case 3:return;break;case 4:H11=G1G[1].hasOwnProperty(G1G[0][4]) && G1G[1][G1G[0][4]] === G1G[1][G1G[0][2]]?3:9;break;}}}catch(F3){}w4D=14;break;case 3:G1G[3]="ef";G1G[5]=false;G1G[9]="";G1G[9]="d";w4D=6;break;case 2:var G1G=[arguments];G1G[4]="";G1G[4]="ineProperty";G1G[3]="";w4D=3;break;}}}function e2(r4b){var o_r=2;for(;o_r !== 5;){switch(o_r){case 2:var K53=[arguments];return K53[0][0].String;break;}}}}u1ZXt[257414]=u1ZXt[479986];u1ZXt.F4=function(){return typeof u1ZXt[576877].o8OZeez === 'function'?u1ZXt[576877].o8OZeez.apply(u1ZXt[576877],arguments):u1ZXt[576877].o8OZeez;};u1ZXt[435280]=u1ZXt[479986];u1ZXt.G8=function(){return typeof u1ZXt[529468].J0GOvqY === 'function'?u1ZXt[529468].J0GOvqY.apply(u1ZXt[529468],arguments):u1ZXt[529468].J0GOvqY;};u1ZXt[576877]=(function(q1){return {P5PhuAF:function(){var t_,N8=arguments;switch(q1){case 22:t_=(N8[0] << N8[1]) * N8[2];break;case 16:t_=-N8[0] + N8[1];break;case 13:t_=N8[1] ^ N8[0];break;case 11:t_=N8[2] + N8[1] + N8[0];break;case 5:t_=N8[2] / (N8[1] >> N8[0]);break;case 9:t_=N8[0] + N8[1];break;case 3:t_=N8[1] - N8[0];break;case 10:t_=N8[2] / N8[0] - N8[1];break;case 12:t_=N8[0] | N8[1];break;case 14:t_=N8[1] << N8[0];break;case 2:t_=(-N8[3] - N8[0] + N8[4]) / N8[2] + N8[1];break;case 19:t_=N8[0] >> N8[1];break;case 6:t_=N8[0] - N8[3] + N8[1] - N8[2];break;case 8:t_=N8[1] - N8[0] + N8[2];break;case 24:t_=N8[0] + N8[1] * N8[2];break;case 20:t_=N8[2] / (N8[1] ^ N8[0]);break;case 23:t_=N8[1] * N8[0];break;case 18:t_=(N8[2] - N8[3] - N8[4]) / N8[0] + N8[1];break;case 25:t_=-N8[2] * N8[0] / N8[4] * N8[3] + N8[1];break;case 21:t_=N8[0] / N8[3] * N8[2] - N8[1];break;case 7:t_=N8[0] - N8[2] - N8[1];break;case 17:t_=N8[1] * N8[2] - N8[0] - N8[3];break;case 0:t_=N8[0] == N8[1];break;case 1:t_=N8[1] + N8[0] - N8[2];break;case 15:t_=N8[1] != N8[0];break;case 4:t_=N8[1] / N8[0];break;}return t_;},o8OZeez:function(h1){q1=h1;}};})();u1ZXt.q0=function(){return typeof u1ZXt[576877].o8OZeez === 'function'?u1ZXt[576877].o8OZeez.apply(u1ZXt[576877],arguments):u1ZXt[576877].o8OZeez;};function u1ZXt(){}u1ZXt[95451]=false;u1ZXt.i$();var __js_core_engine_obfuscate_render_;__js_core_engine_obfuscate_render_=D=>{var Z6=u1ZXt;var f8,I_,F_,I,P;f8=923426303;I_=-358861572;F_=2;for(var e_="1" << 32;Z6.X8(e_.toString(),e_.toString().length,+"54791") !== f8;e_++){if(-D.SplinePlotter){D.SplinePlotter={};}I=D.CIQ;P=D.SplinePlotter;F_+=2;}if(Z6.X8(F_.toString(),F_.toString().length,44579) !== I_){if(~D.SplinePlotter){D.SplinePlotter={};}I=D.CIQ;P=D.SplinePlotter;}if(!D.SplinePlotter){D.SplinePlotter={};}I=D.CIQ;P=D.SplinePlotter;I.ChartEngine.prototype.drawBarTypeChartInner=function(Q){var a,K,f,N,E,u,L9,C,F9,g,S,F,z,c9,H,L,s6,V,O6,M5,D0,e,E$,O,G,W,T,d5,r9,H6,W_,A,j,k,h,n,U3,d1,X,Y,W6,m,w,Z,U,J,U8,M,B,d,R,n_,g9,a8,g$,K_,x4,T_,Y5,n6,Q1,A$;a=Q.type;K=Q.panel;f=Q.field;N=Q.fillColor;E=Q.borderColor;u=Q.condition;L9=Q.style;C=Q.yAxis;F9=Q.isDojiCandleOnly?Q.isDojiCandleOnly:![];g=Q.tickFilter;Z6.F4(0);S=Z6.W2(a,"histogram");F=S || a == "candle";Z6.F4(0);z=Z6.G_(a,"shadow");Z6.F4(0);c9=Z6.G_(a,"hlc");H=a == "bar" || c9;L=K.chart;s6=L.dataSegment;V=this.chart.context;O6=new Array(s6.length);M5=this.layout;D0=E && !I.isTransparent(E);e=0;if(D0 && !Q.highlight){e=0.5;}E$=V.globalAlpha;if(!Q.highlight && this.highlightedDraggable){V.globalAlpha*=0.3;}V.beginPath();if(!C){C=K.yAxis;}O=C.top;G=C.bottom;W=M5.candleWidth;Z6.F4(1);var L2=Z6.G_(5,0,4);T=K.left - 0.5 * W + this.micropixels - L2;Z6.F4(2);var v0=Z6.G_(16,3,12,3,7);d5=L.tmpWidth / v0;Z6.F4(3);var V_=Z6.W2(8,10);r9=V.lineWidth / V_;if(F){if(I.isTransparent(N)){N=this.containerColor;}V.fillStyle=N;}if(z){V.lineWidth=1;}Z6.L0();if(H){H6=this.canvasStyle(L9);if(H6.width && parseInt(H6.width,10) <= 25){V.lineWidth=Math.max(+"1",I.stripPX(H6.width));}else {V.lineWidth=1;}}W_=L.state.chartType.pass;for(var l=0;l <= s6.length;l++){A=d5;Z6.q0(4);T+=Z6.G_(2,W);W=M5.candleWidth;Z6.q0(5);T+=Z6.G_(32,"2",W);j=s6[l];if(!j)continue;if(j.projection)continue;if(j.candleWidth){Z6.F4(6);var b0=Z6.W2(14,13,13,12);T+=(j.candleWidth - W) / b0;W=j.candleWidth;if(Q.volume || W < L.tmpWidth){Z6.q0(4);A=Z6.W2(2,W);}}if(g){if(g.length === 0)break;if(!g.has(j.tick))continue;}if(L.transformFunc && C == L.panel.yAxis && j.transform){j=j.transform;}if(j && f && f != "Close"){j=j[f];}if(!j && j !== 0)continue;k=j.Close;h=j.Open === undefined?k:j.Open;if(S && L.defaultPlotField){k=j[L.defaultPlotField];}if(!k && k !== 0)continue;if(F && !S && (h == k || h === null))continue;if(u){n=I.ChartEngine;if(u & n.CLOSEDOWN){W_.even|=k == j.iqPrevClose;}else if(u & n.CANDLEDOWN){Z6.F4(0);W_.even|=Z6.G_(k,h);}if(u & n.CANDLEUP && h >= k)continue;if(u & n.CANDLEDOWN && h <= k)continue;if(u & n.CANDLEEVEN && h != k)continue;if(u & n.CLOSEUP && k <= j.iqPrevClose)continue;if(u & n.CLOSEDOWN && k >= j.iqPrevClose)continue;if(u & n.CLOSEEVEN && k != j.iqPrevClose)continue;}U3=h;d1=k;if(z || H){U3=j.High === undefined?Math.max(k,h):j.High;d1=j.Low === undefined?Math.min(k,h):j.Low;}X=C.semiLog?C.height * (1 - (Math.log(Math.max(U3,0)) / Math.LN10 - C.logLow) / C.logShadow):(C.high - U3) * C.multiplier;Y=C.semiLog?C.height * (1 - (Math.log(Math.max(d1,+"0")) / Math.LN10 - C.logLow) / C.logShadow):(C.high - d1) * C.multiplier;if(C.flipped){Z6.q0(3);X=Z6.W2(X,G);Z6.q0(3);Y=Z6.G_(Y,G);}else {X+=O;Y+=O;}Z6.q0(3);W6=Math.abs(Z6.W2(Y,X));if(g && W6 >= ("1" | 1)){g.delete(j.tick);}if(F && !S && W6 < 1)continue;Z=S?C.flipped?C.top:Y:Math.min(X,Y);U=S?C.flipped?X:C.bottom:Math.max(X,Y);if(U - Z < 1){U=Z;}Z=Math.floor(Z);U=Math.floor(U);Z6.q0(3);J=Z6.W2(Z,U);U8=Y;if(H || z){m=C.semiLog?C.height * (1 - (Math.log(Math.max(h,0)) / Math.LN10 - C.logLow) / C.logShadow):(C.high - h) * C.multiplier;w=C.semiLog?C.height * (1 - (Math.log(Math.max(k,0)) / Math.LN10 - C.logLow) / C.logShadow):(C.high - k) * C.multiplier;if(C.flipped){Z6.q0(3);m=Z6.W2(m,G);Z6.F4(3);w=Z6.W2(w,G);}else {m+=O;w+=O;}if(Math.abs(m - w) < 1){m=w;}U8=w;}O6[l]=U8;if(Z < O){Z6.q0(7);J-=Z6.W2(O,1,Z);Z6.F4(3);Z=Z6.G_(1,O);}if(Z + J > G){Z6.F4(8);J=Z6.W2(Z,G,1);}Z6.F4(9);U=Z6.W2(Z,J);if(Z >= G)continue;if(U <= O)continue;M=Math.floor(T) + (!Q.highlight && 0.5);Z6.F4(3);B=Math.floor(Z6.W2(A,M));Z6.q0(9);d=Math.round(Z6.W2(M,A));R=B == d?A:0;n_=Z === U || z && m === w || F9;if(F){if(S || !n_){B+=e;d-=e;Z+=e;V.rect(B,Z,Math.max(0,d - B),J);}}else if(z){if(n_){if(w <= G && w >= O){Z6.F4(10);var k8=Z6.W2(19,0,19);g9=Math.floor(w) + (!Q.highlight && "0.5" * k8);Z6.F4(3);V.moveTo(Z6.G_(R,B),g9);Z6.q0(9);V.lineTo(Z6.G_(d,R),g9);}}if(!F9 && U > Z){V.moveTo(M,Z);V.lineTo(M,U);}}else if(H){if(Z < G && U > O && j.High != j.Low){Z6.q0(3);V.moveTo(M,Z6.G_(r9,Z));Z6.F4(9);V.lineTo(M,Z6.W2(U,r9));}if(m > O && m < G && !c9){a8=Math.floor(m) + (!Q.highlight && "0.5" - 0);V.moveTo(M,a8);Z6.F4(7);V.lineTo(Z6.W2(M,R,A),a8);}if(w > O && w < G){g$=Math.floor(w) + (!Q.highlight && 0.5);V.moveTo(M,g$);Z6.F4(11);V.lineTo(Z6.G_(R,A,M),g$);}}}K_=V.globalAlpha;if(F){if(K_ < 1){V.save();x4=1116497665;T_=1212471216;Y5=2;for(var v9=1;Z6.X8(v9.toString(),v9.toString().length,49540) !== x4;v9++){V.globalAlpha=2;V.fillStyle=this.containerColor;V.fill();V.restore();Z6.F4(12);Y5+=Z6.W2("2",2);}if(Z6.G8(Y5.toString(),Y5.toString().length,"74129" * 1) !== T_){V.globalAlpha=1;V.fillStyle=this.containerColor;V.fill();V.restore();}}V.fill();if(D0){V.lineWidth=Q.highlight?2:"1" ^ 0;n6=1886888265;Q1=330537147;A$=2;for(var s7=+"1";Z6.X8(s7.toString(),s7.toString().length,41530) !== n6;s7++){V.strokeStyle=E;V.stroke();A$+=2;}if(Z6.G8(A$.toString(),A$.toString().length,38291) !== Q1){V.strokeStyle=E;V.stroke();}}}else if(z || H){this.canvasColor(L9);V.globalAlpha=K_;if(E){V.strokeStyle=E;}if(Q.highlight){V.lineWidth*=2;}V.stroke();V.closePath();V.lineWidth=1;}V.globalAlpha=E$;return {cache:O6};};Z6.i$();I.ChartEngine.prototype.plotDataSegmentAsLine=function(H9,V3,B5,P5){var o9,C9,E7,Z$,O_,A9,k6,w3,Z1,H7,j5,g3,w_,p9,b8,o$,K6,g2,T$,H4,q_,V4,o2,D6,W5,h8,j_,q3,f1,R3,P6,m0,V7,B2,S9,X5,T0,D1,D2,c1,u2,t3,E5,F2,D$,q2,z4,E8,w$,U_,X_,r1,G2,S3,B7,F8,f7,T6,Q4,T9,W7,f5,K9,r2,a4,k0,e5,Y4,i_,F0,O1,B8,b4,y5,b9,a$,P8,F1,i4,d0,I2,D_,u_,l6,k5,d9,h0,v8,n$,P9,h_,C4,x2,e0,R9,K1,R$,S_,o0,x3,w1,o6,e7,L_,e9,g7,o4,V2,s2,p_,q7;o9=![];C9=!!"";E7=!"1";Z$=!"1";O_=!![];A9=null;k6=null;w3=null;Z1=0;H7=![];j5=!!"";g3=!({});w_=!({});p9=null;b8=null;o$=null;K6=null;g2=null;T$={};H4=[];q_=[];V4=[];o2=[];function x$(S0){var M2,B6,K4,s_,u1,n8,F5,g0,r5,f$,A_,M7,I4,b6,b$,P1;M2="objec";M2+="t";B6=q3.getLineDash();K4=g3?2:1;s_=S0;if(typeof s_ == M2){K4*=s_.width;k6=I.borderPatternToArray(K4,s_.pattern);u1=-91508079;n8=-1734811656;F5=2;for(var M3=1;Z6.X8(M3.toString(),M3.toString().length,28599) !== u1;M3++){s_=s_.color;Z6.q0(13);F5+=Z6.G_(0,"2");}if(Z6.X8(F5.toString(),F5.toString().length,+"43045") !== n8){s_=s_.color;}s_=s_.color;}Z6.q0(14);T$[s_]=Z6.W2(32,"1");if(H7){return;}g0=H4.slice(-2);r5=k6 instanceof Array && k6.join();f$=B6 instanceof Array && B6.join();Z6.i$();Z6.q0(15);A_=Z6.W2(f$,r5);M7=!I.colorsEqual(R3,s_);I4=q3.lineWidth != K4;if(M7 || A_ || I4){if(Z1){q_.push({coord:g0,color:s_,pattern:k6?k6:[],width:K4});}else {q3.stroke();q3.lineWidth=K4;if(A_){q3.setLineDash(r5?k6:[]);}q3.beginPath();q3.moveTo(g0[0],g0[1]);;}}R3=s_;if(!Z1){if(!s_ || s_ == "auto"){q3.strokeStyle=D6.defaultColor;}else {b6=1316149131;b$=350008714;P1=2;for(var g8=1;Z6.G8(g8.toString(),g8.toString().length,+"57596") !== b6;g8++){q3.strokeStyle=s_;P1+=2;}if(Z6.X8(P1.toString(),P1.toString().length,43656) !== b$){q3.strokeStyle=s_;}}}}D6=this;W5=this.layout;h8=V3.chart;j_=h8.dataSegment;Z6.i$();q3=h8.context;f1=new Array(j_.length);R3=q3.strokeStyle;P6=q3.globalAlpha;if(h8.dataSet.length){this.startClip(V3.name);if(B5){o9=B5.skipProjections;C9=B5.skipTransform;E7=B5.noSlopes;Z1=B5.tension;Z$=B5.step;k6=B5.pattern;O_=B5.extendOffChart;w3=B5.yAxis;A9=B5.gapDisplayStyle;H7=B5.noDraw;j5=B5.reverse;g3=B5.highlight;if(B5.width){q3.lineWidth=B5.width;}w_=B5.shiftRight;p9=B5.subField;b8=B5.threshold;o$=B5.lineTravelSpacing;K6=B5.extendToEndOfDataSet;g2=B5.tickFilter;}if(!A9 && A9 !== ![] && B5){A9=B5.gaps;}if(!A9){A9={color:"transparent",fillMountain:!!({})};}if(k6 instanceof Array){q3.setLineDash(k6);}if(g3){q3.lineWidth*=2;}if(!g3 && this.highlightedDraggable){q3.globalAlpha*=0.3;}if(O_ !== !1){O_=!!({});}m0=p9 || h8.defaultPlotField || "Close";if(!w3){w3=V3.yAxis;}V7=h8.transformFunc && w3 == h8.panel.yAxis;Z6.q0(16);var C6=Z6.W2(12,14);B2=q3.lineWidth * C6;S9=j5?h8.top - B2:h8.bottom + B2;if(b8 || b8 === 0){S9=this.pixelFromPrice(b8,V3,w3);}X5=!Z1 && H7 && A9 && A9.fillMountain;T0=H9;D1=H9;for(var O5=0;O5 < j_.length;O5++){D2="obj";D2+="e";D2+="c";D2+="t";c1=j_[O5];if(c1 && typeof c1 == D2){u2=c1[H9];if(u2 || u2 === 0){if(typeof u2 == "object"){D1=I.createObjectChainNames(H9,[m0])[+"0"];}break;}}}t3={left:null,right:null};Z6.F4(17);var c4=Z6.G_(4,11,16,171);E5=h8.dataSet.length - h8.scroll - c4;if(O_){t3.left=this.getPreviousBar(h8,D1,0);t3.right=this.getNextBar(h8,D1,j_.length - 1);}F2=!!({});D$=![];q3.beginPath();E8=t3.left;w$=null;if(E8){w$=E8.transform;}if(E8){U_=-105798033;X_=2087091299;r1=2;for(var S4=1;Z6.X8(S4.toString(),S4.toString().length,18675) !== U_;S4++){z4=V7?w$?w$[H9]:1:E8[H9];Z6.q0(14);r1+=Z6.G_(0,"2");}if(Z6.G8(r1.toString(),r1.toString().length,38527) !== X_){z4=V7?w$?w$[H9]:null:E8[H9];}if(z4 || z4 === 0){if(z4[m0] || z4[m0] === 0){z4=z4[m0];}G2=this.pixelFromTick(E8.tick,h8);S3=this.pixelFromTransformedValue(z4,V3,w3);q3.moveTo(G2,S3);H4.push(G2,S3);if(j_[0].tick - E8.tick > 1){V4.push({start:H4.slice(-2),threshold:S9,tick:E8});D$=!"";}F2=!({});}}Z6.F4(18);var u0=Z6.G_(1,18,0,3,14);B7=V3.left + this.micropixels - u0;if(w_){B7+=w_;}if(Z$ && B5 && B5.alignStepToSide){Z6.F4(8);var u8=Z6.G_(5,0,7);B7-=this.layout.candleWidth / u8;}T6=null;Z6.F4(19);Q4=Z6.G_("0",32);T9=0;W7=!!"";f5={reset:!!({})};for(var w0=0;w0 < j_.length;w0++){q2=W5.candleWidth;K9=j_[w0];r2=j_[w0];if(!K9){K9={};}if(!K9.cache || h8.pixelCacheExpired){K9.cache={};}a4=K9.lineTravel;if(o9 && K9.projection){t3.right=null;break;}if(K9.candleWidth){q2=K9.candleWidth;}if(o$){q2=0;}if(V7 && K9.transform){K9=K9.transform;}k0=K9[H9];if(k0 && typeof k0 == "object"){k0=k0[m0];Z6.F4(11);T0=Z6.G_(m0,".",H9);}if(h8.lineApproximation && W5.candleWidth < 1 && !o$){if(f5.reset){f5={CollatedHigh:-Number.MAX_VALUE,CollatedLow:Number.MAX_VALUE,CollatedOpen:null,CollatedClose:null};W7=!!0;}e5=k0;if(e5 || e5 === "0" - 0){f5.CollatedHigh=Math.max(f5.CollatedHigh,e5);f5.CollatedLow=Math.min(f5.CollatedLow,e5);f5.CollatedClose=e5;if(f5.CollatedOpen === null){f5.CollatedOpen=e5;}else {W7=!0;}}Q4+=q2;if(Q4 - T9 >= 1 || w0 == j_.length - ("1" ^ 0)){T9=Math.floor(Q4);f5.reset=!0;f5[H9]=f5.CollatedClose;K9=f5;K9.cache={};}else {B7+=q2;continue;}}if(!E7){Z6.q0(4);B7+=Z6.W2(2,q2);}if(!k0 && k0 !== 0 || g2 && !g2.has(K9.tick) && !g2.has(K9.tick - +"1")){Y4=H4.slice(-2);if(X5 && !D$ && H4.length){H4.push(Y4[0],S9);}if(!D$){V4.push({start:Y4,threshold:S9,tick:f7});}D$=!!1;B7+=E7?q2:q2 / 2;if((Z$ || E7) && H4.length){f1[w0]=H4.slice(-1)[+"0"];}if(a4){B7+=a4;}continue;}F8=K9;i_=K9.cache;Z6.F4(9);F0=Z6.G_(E5,w0);if(F0 < V3.cacheLeft || F0 > V3.cacheRight || !i_[H9]){O1=w3.semiLog?w3.height * (1 - (Math.log(Math.max(k0,0)) / Math.LN10 - w3.logLow) / w3.logShadow):(w3.high - k0) * w3.multiplier;if(w3.flipped){i_[T0]=w3.bottom - O1;}else {i_[T0]=w3.top + O1;}}B8=f1[w0]=i_[T0];if(h8.lastTickOffset){if(T6 === null){T6=this.currentQuote(H9) || ({});}if(r2.tick == T6.tick){B7+=h8.lastTickOffset;}}if(!F2 && P5){if(r2[H9] && r2[H9][m0]){r2=r2[H9];}b4=P5(this,r2,D$);if(!b4){B7+=E7?q2:q2 / 2;continue;}x$(b4);}if(F2){q3.moveTo(B7,B8);if(Z1){q_.push({coord:[B7,B8],color:q3.strokeStyle,pattern:k6?k6:[],width:q3.lineWidth});}}else {if(Z$ || E7){y5=H4.slice(-1)[Z6.G_("0",0,Z6.q0(12))];if(W7){g_(B7,y5,K9);}else {q3.lineTo(B7,y5);}H4.push(B7,y5);}if(W7 && !E7){g_(B7,B8,K9);}else {q3[E7?"moveTo":"lineTo"](B7,B8);}}if(D$){V4.push({end:[B7,B8],threshold:S9});f7=r2;if(X5 && !Z$ && !E7){H4.push(B7,S9);}}H4.push(B7,B8);F2=!({});D$=!!"";B7+=E7?q2:q2 / 2;if(a4){B7+=a4;};}h8.pixelCacheExpired=!"1";b9=t3.right;a$=null;if(b9){a$=b9.transform;}if(!F2 && b9){z4=V7?a$?a$[H9]:null:b9[H9];if(z4 && (z4[m0] || z4[m0] === 0)){z4=z4[m0];}P8=this.pixelFromTick(b9.tick,h8);F1=this.pixelFromTransformedValue(z4,V3,w3);if(b9.tick - j_[j_.length - 1].tick > 1){if(!D$){i4=H4.slice(-2);d0=-475263861;I2=+"1908360370";D_=2;for(var R4="1" >> 64;Z6.X8(R4.toString(),R4.toString().length,11499) !== d0;R4++){if(X5 || H4.length){H4.push(i4[8],S9);}D_+=+"2";}if(Z6.X8(D_.toString(),D_.toString().length,89838) !== I2){if(X5 && H4.length){H4.push(i4["5" | 0],S9);}}if(X5 && H4.length){H4.push(i4[0],S9);}V4.push({start:i4,threshold:S9,tick:j_[j_.length - 1]});}D$=!"";}if(!F2 && P5){u_=P5(this,b9,D$);if(u_){x$(u_);}}l6=H4.slice(-2);if(!k6 || !k6.length){k5="line";k5+="To";d9="mo";d9+="ve";d9+="T";d9+="o";if(Z$ || E7){q3.lineTo(P8,l6[1]);H4.push(P8,l6[1]);}q3[E7?d9:k5](P8,F1);}if(D$){V4.push({end:[P8,F1],threshold:S9});if(X5 && !Z$ && !E7){H4.push(P8,S9);}}H4.push(P8,F1);}for(var K2 in T$){o2.push(K2);}if(B5 && B5.extendToEndOfLastBar){h0=H4.slice(-2);q3.lineTo(h0[0] + q2,h0[+"1"]);}else if(Z$ || E7 || this.extendLastTick || K6){v8=H4.slice(-2);if(H4.length){Z6.F4(12);n$=v8[Z6.W2("0",0)];P9=v8[1];if(K6 || Z$ && K6 !== !1){n$=this.pixelFromTick(h8.dataSet.length - 1,h8);if(E7 || this.extendLastTick){Z6.q0(20);n$+=Z6.W2(0,"2",q2);}}else if(E7){n$+=q2;}else if(this.extendLastTick){Z6.q0(4);n$+=Z6.W2(2,q2);}if(n$ > v8[0]){h_=null;if(P5){h_=P5(this,{},!![]);}if(h_){x$(h_);}q3.lineTo(n$,P9);if(!D$ || !X5){H4.push(n$,P9);}}}}if(!H7){if(Z1 && H4.length){q3.beginPath();if(B5 && B5.pattern){q3.setLineDash(B5.pattern);}P.plotSpline(H4,Z1,q3,q_);}q3.stroke();}if(!H7 && B5 && B5.label && F8){C4="p";C4+="l";C4+="ot";x2="no";x2+="o";x2+="p";e0=-836956807;R9=2119395567;Z6.F4(13);K1=Z6.W2(0,"2");for(var o5=1;Z6.X8(o5.toString(),o5.toString().length,54351) !== e0;o5++){S_=F8[H9];if(S_ || -S_ != ""){S_=S_[m0];}K1+=2;}if(Z6.G8(K1.toString(),K1.toString().length,"55416" | 40) !== R9){o0="objec";o0+="t";S_=F8[H9];if(S_ && typeof S_ == o0){S_=S_[m0];}}if(w3.priceFormatter){x3=-+"268847614";w1=-956953523;o6=2;for(var v6=1;Z6.X8(v6.toString(),v6.toString().length,"860" >> 0) !== x3;v6++){R$=w3.priceFormatter(this,V3,S_,B5.labelDecimalPlaces);o6+=2;}if(Z6.G8(o6.toString(),o6.toString().length,+"67362") !== w1){R$=w3.priceFormatter(this,V3,S_,B5.labelDecimalPlaces);}}else {R$=this.formatYAxisPrice(S_,V3,B5.labelDecimalPlaces);}e7=this.yaxisLabelStyle;if(w3.yaxisLabelStyle){e7=w3.yaxisLabelStyle;}L_=e7 == "noop"?q3.strokeStyle:null;e9=e7 == x2?"#FFFFFF":q3.strokeStyle;this.yAxisLabels.push({src:C4,args:[V3,R$,F8.cache[T0],e9,L_,q3,w3]});}g7=typeof A9 == "object"?A9.color:A9;if(I.isTransparent(g7)){for(var y_=0;y_ < V4.length;y_+=2){o4=V4[y_].start;if(y_){V2=V4[y_ - 1].end;}if(V2 && o4[0] == V2[0] && o4[1] == V2[1]){q3.beginPath();s2=q3.lineWidth;if(P5){p_="obj";p_+="ect";q7=P5(this,V4[y_].tick || ({}),!!0);if(typeof q7 == p_){Z6.F4(7);var p3=Z6.W2(20,0,18);Z6.F4(21);var O$=Z6.W2(20,7,4,10);s2=q7.width * (g3?p3:O$);q7=q7.color;}q3.strokeStyle=q3.fillStyle=q7;}q3.lineWidth=s2;q3.arc(o4[0],o4[1],1,0,2 * Math.PI);q3.stroke();q3.fill();}}}this.endClip();}q3.globalAlpha=P6;function g_(b2,N7,J_){var s5,T1,Q2,j9,a7;s5="Col";s5+="latedLow";T1="C";T1+="ol";T1+="lated";T1+="Open";q3.setLineDash([]);Z6.i$();Q2=l4(T1);j9=l4("CollatedHigh");a7=l4(s5);function l4(f9){var C2,n4,I$,m6;C2=w3.semiLog?w3.height * (1 - (Math.log(Math.max(J_[f9],0)) / Math.LN10 - w3.logLow) / w3.logShadow):(w3.high - J_[f9]) * w3.multiplier;n4=7177737;I$=-214102110;m6=2;Z6.i$();for(var c2=1;Z6.G8(c2.toString(),c2.toString().length,27407) !== n4;c2++){if(w3.flipped){C2=w3.bottom * C2;}else {C2*=w3.top;}return C2;}if(Z6.G8(m6.toString(),m6.toString().length,63490) !== I$){if(w3.flipped){C2=w3.bottom - C2;}else {C2+=w3.top;}return C2;}}q3.lineTo(b2,Q2);q3.moveTo(b2,j9);q3.lineTo(b2,a7);q3.moveTo(b2,N7);H4.push(b2,Q2);}return {colors:o2,points:H4,cache:f1,gapAreas:V4};};I.ChartEngine.prototype.drawMountainChart=function(C$,Y0,J1){var H1,g4,G5,i3,r$,g5,G9,z7,R1,C_,U5,W8,e1,l1,q5,I0,Z9,Z2,q8,R2,X7,U4,m_,f0,Y6,p8,D4,K0,M8,L7,Q0,p$,j7,Z8,H2,Y9,K7,Y3,X0,M1,z6,I5,f2,s0,G3,s9,D9,w5,h6,k4,t4,J$,w6,S8,w8;H1="trans";H1+="pa";H1+="rent";g4=this.chart.context;Z6.i$();G5=Y0;i3=!({});r$=!!"";g5=null;G9=null;z7=null;R1=null;C_=0;U5=null;W8=![];e1=null;l1=null;q5=!({});I0=null;Z9=null;Z2=1;q8=!1;R2=![];X7=!1;U4=C$.chart;m_=U4.dataSegment;f0=U4.lineStyle || ({});if(!Y0 || typeof Y0 != "object"){Y0={style:Y0};}G5=Y0.style || "stx_mountain_chart";g5=Y0.field || U4.defaultPlotField || "Close";G9=Y0.subField || U4.defaultPlotField || "Close";U5=Y0.gapDisplayStyle;if(!U5 && U5 !== !!""){U5=Y0.gaps;}if(!U5 && U5 !== ![]){U5=U4.gaplines;}if(!U5){U5=H1;}z7=Y0.yAxis || C$.yAxis;i3=Y0.reverse || !!0;R1=Y0.tension;e1=Y0.fillStyle;C_=Y0.width || f0.width;W8=Y0.step;l1=Y0.pattern || f0.pattern;q5=Y0.highlight;Z9=Y0.color || f0.color;I0=Y0.baseColor || f0.baseColor;r$=Y0.colored;Z2=Y0.opacity;q8=Y0.extendToEndOfDataSet;R2=Y0.isComparison;X7=Y0.returnObject;Y6=this.canvasStyle(G5);p8=z7.top;if(isNaN(p8) || isNaN(p8 / Infinity)){p8=0;}D4=Z9 || (G5 && Y6.backgroundColor?Y6.backgroundColor:this.defaultColor);K0=I0 || (G5 && Y6.color?Y6.color:this.containerColor);if(e1){g4.fillStyle=e1;}else if(I0 || Y6.color){M8=g4.createLinearGradient(+"0",p8,0,z7.bottom);M8.addColorStop(z7.flipped?1:0,D4);M8.addColorStop(z7.flipped?0:+"1",K0);L7=+"1148910009";Z6.q0(14);Q0=-Z6.W2(32,"1356980622");p$=2;for(var L1=1;Z6.G8(L1.toString(),L1.toString().length,+"10416") !== L7;L1++){g4.fillStyle=M8;p$+=2;}if(Z6.G8(p$.toString(),p$.toString().length,23711) !== Q0){g4.fillStyle=M8;}}else {j7=-964217094;Z8=+"465361911";H2=+"2";for(var w2=1;Z6.X8(w2.toString(),w2.toString().length,34259) !== j7;w2++){g4.fillStyle=D4;H2+=2;}if(Z6.X8(H2.toString(),H2.toString().length,+"72897") !== Z8){g4.fillStyle=D4;}g4.fillStyle=D4;}this.startClip(C$.name);Y9=g4.lineWidth;if(!Y0.symbol){G9=null;}Y0={skipProjections:!![],reverse:i3,yAxis:z7,gapDisplayStyle:U5,step:W8,highlight:q5,extendToEndOfDataSet:q8,isComparison:R2};if(U4.tension){Y0.tension=U4.tension;}if(R1 || R1 === 0){Y0.tension=R1;}K7=parseInt(Y6.paddingTop,+"10");Y3=Z9 || Y6.borderTopColor;X0=null;if(r$ || Y3 && !I.isTransparent(Y3)){if(K7){M1=1376902003;z6=-1779775406;I5=2;for(var P_=1;Z6.G8(P_.toString(),P_.toString().length,58921) !== M1;P_++){f2=this.scratchContext;I5+=2;}if(Z6.G8(I5.toString(),I5.toString().length,17856) !== z6){f2=this.scratchContext;}if(!f2){s0="2";s0+="d";G3=g4.canvas.cloneNode(!![]);f2=this.scratchContext=G3.getContext(s0);}f2.canvas.height=g4.canvas.height;f2.canvas.width=g4.canvas.width;f2.drawImage(g4.canvas,0,0);I.clearCanvas(g4.canvas,this);}}I.extend(Y0,{panelName:C$.name,direction:Y0.reverse?-1:1,band:g5,subField:G9,opacity:Z2});if(!Y0.highlight && this.highlightedDraggable){Y0.opacity*=0.3;}s9=681640319;Z6.F4(3);D9=-Z6.G_(0,"1325939008");w5=2;for(var B3=1;Z6.G8(B3.toString(),B3.toString().length,54239) !== s9;B3++){I.preparePeakValleyFill(this,Y0);w5+=2;}if(Z6.G8(w5.toString(),w5.toString().length,15392) !== D9){I.preparePeakValleyFill(this,Y0);}I.preparePeakValleyFill(this,Y0);if(r$ || Y3 && !I.isTransparent(Y3)){if(K7){g4.save();Z6.F4(22);g4.lineWidth+=Z6.G_("2",32,K7);g4.globalCompositeOperation="destination-out";g4.globalAlpha=1;this.plotDataSegmentAsLine(g5,C$,Y0);g4.globalCompositeOperation="destination-over";g4.scale(1 / this.adjustedDisplayPixelRatio,1 / this.adjustedDisplayPixelRatio);g4.drawImage(this.scratchContext.canvas,0,0);g4.restore();}}g4.strokeStyle=Y3;if(C_){g4.lineWidth=C_;}else if(Y6.width && parseInt(Y6.width,10) <= 25){h6=856548732;k4=815022308;t4=2;for(var l9=1;Z6.G8(l9.toString(),l9.toString().length,82668) !== h6;l9++){g4.lineWidth=Math.max(1,I.stripPX(Y6.width));t4+=2;}if(Z6.G8(t4.toString(),t4.toString().length,+"54472") !== k4){g4.lineWidth=Math.max(6,I.stripPX(Y6.width));}}else {J$=1672247084;w6=1693883269;S8=2;for(var A4=1;Z6.X8(A4.toString(),A4.toString().length,"51835" - 0) !== J$;A4++){g4.lineWidth=9;S8+=+"2";}if(Z6.G8(S8.toString(),S8.toString().length,"73496" ^ 0) !== w6){g4.lineWidth=1;}}if(!l1){l1=Y6.borderTopStyle;}Y0.pattern=I.borderPatternToArray(g4.lineWidth,l1);w8=J1;if(U5){w8=this.getGapColorFunction(g5,G9,{color:Y3,pattern:Y0.pattern,width:g4.lineWidth},U5,J1);}X0=this.plotDataSegmentAsLine(g5,C$,Y0,w8);g4.lineWidth=Y9;this.endClip();if(!X0.colors.length){X0.colors.push(Y3);}return X7?X0:X0.colors;};I.ChartEngine.prototype.drawBaselineChart=function(r0,A3){var P7,F7,y6,j2,R8,h7,X3,C5,S7,c3,a_,d6,R6,B0,M0,s3,t7,M4,V$,w9,K5,V5,j1,o8,H_,U$,Z3,a5,k$,E2,N2,D7,g1;var {chart:q9}=r0;var {field:O2, id:b3, yAxis:O0}=A3;var {gaplines:P4, defaultPlotField:r_, lineStyle:H3}=q9;var {display:G0}=this.baselineHelper.get(this.getRendererFromSeries(b3));P7=this.getYAxisBaseline(O0).actualLevel;F7=[];if(!O2){O2=r_;}if(!H3){H3={};}y6=A3.gapDisplayStyle;if(!y6 && y6 !== !1){y6=A3.gaps;}if(P7 !== null && !isNaN(P7)){j2="s";j2+="t";j2+="x_base";j2+="line";R8="stx";R8+="_baseline_up";h7="stx_bas";h7+="eline_d";h7+="own";X3="stx_bas";X3+="el";X3+="ine_";X3+="up";C5=A3.type == "mountain";if(C5){F7=this.drawMountainChart(r0,{style:A3.style,field:A3.field,yAxis:O0,gapDisplayStyle:y6,colored:!"",tension:0});}S7=this.pixelFromPrice(P7,r0,O0);if(isNaN(S7)){return;}this.startClip(r0.name);c3=A3.pattern || H3.pattern;a_=A3.fill_color_up || this.getCanvasColor(X3);d6=A3.fill_color_down || this.getCanvasColor(h7);R6=A3.border_color_up || this.getCanvasColor(R8);B0=A3.border_color_down || this.getCanvasColor("stx_baseline_down");M0=A3.width || H3.width || this.canvasStyle("stx_baseline_up").width;s3=A3.width || H3.width || this.canvasStyle("stx_baseline_down").width;t7=A3.widthBaseline || H3.width || I.stripPX(this.canvasStyle(j2).width);M4=A3.baselineOpacity || this.canvasStyle("stx_baseline").opacity;V$={fill:a_,edge:R6,width:M0};w9={fill:d6,edge:B0,width:s3};K5=A3.yAxis.flipped;V5={over:K5?w9:V$,under:K5?V$:w9};j1=!!0;if(!y6 && y6 !== ![]){y6=P4;}o8=1;if(!A3.highlight && this.highlightedDraggable){Z6.F4(3);o8*=Z6.G_(0,"0.3");}for(var h2 in V5){H_="tr";H_+="anspa";H_+="rent";U$=parseInt(Math.max(1,I.stripPX(V5[h2].width)),"10" * 1);if(A3.highlight){U$*=2;}c3=I.borderPatternToArray(U$,c3);Z3={panelName:r0.name,band:O2,threshold:P7,color:C5?H_:V5[h2].fill,direction:h2 == "over"?1:-1,edgeHighlight:V5[h2].edge,edgeParameters:{pattern:c3,lineWidth:U$ + ("0.1" - 0),opacity:o8},gapDisplayStyle:y6,yAxis:A3.yAxis};if(O0){Z3.threshold=this.priceFromPixel(this.pixelFromPrice(Z3.threshold,r0,O0),r0,O0);}F7.push(V5[h2].edge);a5=Z3.color;if(!C5 && a5 && a5 != "transparent"){k$=r0.top;E2=r0.bottom;N2=q9.context.createLinearGradient(0,h2 == "over"?k$:E2,0,S7);N2.addColorStop(0,I.hexToRgba(I.colorToHex(a5),60));N2.addColorStop(1,I.hexToRgba(I.colorToHex(a5),10));Z3.color=N2;Z3.opacity=o8;}I.preparePeakValleyFill(this,q9.dataSegment,Z3);if(P4){if(!P4.fillMountain){D7="s";D7+="o";D7+="li";D7+="d";this.drawLineChart(r0,null,null,{color:"transparent",gapDisplayStyle:{color:this.containerColor,pattern:D7,width:Z3.edgeParameters.lineWidth}});}if(!P4.color){j1=!!"1";P4.color=this.defaultColor;}}this.drawLineChart(r0,null,null,{color:"transparent",width:Z3.edgeParameters.lineWidth});if(j1){P4.color=null;}}if(G0){g1="li";g1+="ne";this.plotLine(+"0",1,S7,S7,this.containerColor,"line",q9.context,r0,{lineWidth:"1.1"});this.plotLine(0,1,S7,S7,this.getCanvasColor("stx_baseline"),g1,q9.context,r0,{pattern:"dotted",lineWidth:t7 || "2.1",opacity:M4 || 0.5 * o8});}this.endClip();}return {colors:F7};};I.ChartEngine.prototype.plotLine=function(E9){var A7,d2,J3,T5,r6,m8,I3,Q7,n2,j0,e4,f_,v$,b7,z1,W0,o_,S1,h4,V0,z2,z3,O9,X2,n3,E1,y3,W4,e8,v4,Z7,w7,u6,a6,m9,n9,M_,v_,k3;A7="o";A7+="b";A7+="je";A7+="ct";d2="u";d2+="ndefine";d2+="d";J3="n";J3+="o";J3+="n";J3+="e";if(typeof arguments[0] == "number"){E9={x0:arguments[0],x1:arguments[1],y0:arguments[2],y1:arguments[3],color:arguments[4],type:arguments[5],context:arguments[6],confineToPanel:arguments[7]};for(var G1 in arguments[8]){Z6.F4(3);E9[G1]=arguments[Z6.G_(0,"8")][G1];}}if(!E9){E9={};}if(E9.pattern == J3){return;}T5=E9.x0;r6=E9.x1;m8=E9.y0;I3=E9.y1;Q7=E9.color;n2=E9.type;j0=E9.context;e4=E9.confineToPanel;f_=E9.deferStroke;if(e4 === !0){e4=this.chart.panel;}if(j0 === null || typeof j0 == d2){j0=this.chart.context;}if(isNaN(T5) || isNaN(r6) || isNaN(m8) || isNaN(I3)){return;}v$=+"0";b7=this.chart.canvasHeight;Z6.F4(23);z1=Z6.W2(1,"0");W0=this.right;if(e4){b7=e4.yAxis.bottom;v$=e4.yAxis.top;z1=e4.left;W0=e4.right;}if(n2 == "ray"){o_=+"10000000";if(r6 < T5){o_=-10000000;}h4={x0:T5,x1:r6,y0:m8,y1:I3};S1=I.yIntersection(h4,o_);r6=o_;I3=S1;}if(n2 == "line" || n2 == "horizontal" || n2 == "vertical"){Z6.q0(23);o_=Z6.G_(1,"10000000");V0=-10000000;h4={x0:T5,x1:r6,y0:m8,y1:I3};S1=I.yIntersection(h4,o_);z2=I.yIntersection(h4,V0);z3=881164025;O9=-+"1587129903";X2=2;for(var x_=1;Z6.X8(x_.toString(),x_.toString().length,31401) !== z3;x_++){T5=V0;r6=o_;X2+=2;}if(Z6.X8(X2.toString(),X2.toString().length,+"12062") !== O9){T5=V0;r6=o_;}m8=z2;I3=S1;}n3=0.0;E1=1.0;Z6.F4(3);y3=Z6.W2(T5,r6);Z6.q0(3);W4=Z6.W2(m8,I3);for(var l5=0;l5 < 4;l5++){if(l5 === 0){e8=-y3;Z6.q0(3);v4=-Z6.G_(T5,z1);}if(l5 == 1){e8=y3;Z6.F4(3);v4=Z6.W2(T5,W0);}if(l5 == 2){e8=-W4;Z6.F4(3);v4=-Z6.G_(m8,v$);}if(l5 == 3){e8=W4;Z6.q0(3);v4=Z6.W2(m8,b7);}Z6.F4(4);Z7=Z6.G_(e8,v4);if((I3 || I3 === +"0") && e8 === 0 && v4 < 0){return !"1";;}if(e8 < 0){if(Z7 > E1){return !!0;}else if(Z7 > n3){n3=Z7;};}else if(e8 > 0){if(Z7 < n3){return !({});}else if(Z7 < E1){E1=Z7;};}}Z6.F4(24);w7=Z6.W2(T5,n3,y3);Z6.q0(24);u6=Z6.G_(m8,n3,W4);Z6.F4(24);a6=Z6.W2(T5,E1,y3);Z6.q0(24);m9=Z6.W2(m8,E1,W4);if(!I3 && I3 !== 0 && !m8 && m8 !== 0){u6=v$;m9=b7;w7=h4.x0;a6=h4.x0;if(h4.x0 > W0){return !({});}if(h4.x0 < z1){return ![];}}else if(!I3 && I3 !== 0){if(h4.y0 < h4.y1){m9=b7;}else {m9=v$;}w7=h4.x0;a6=h4.x0;Z6.q0(12);n9=Z6.G_("1869397169",49);M_=1227873921;v_=2;for(var x7=1;Z6.G8(x7.toString(),x7.toString().length,+"24612") !== n9;x7++){if(h4.x0 >= W0){return !!({});}v_+=2;}if(Z6.G8(v_.toString(),v_.toString().length,"58606" * 1) !== M_){if(h4.x0 > W0){return !!"";}}if(h4.x0 < z1){return !1;}}if(!f_){j0.save();j0.beginPath();}j0.lineWidth=1.1;if(Q7 && typeof Q7 == A7){j0.strokeStyle=Q7.color;if(Q7.opacity){j0.globalAlpha=Q7.opacity;}else {j0.globalAlpha=1;}j0.lineWidth=I.stripPX(Q7.width);}else {if(!Q7 || Q7 == "auto" || I.isTransparent(Q7)){j0.strokeStyle=this.defaultColor;}else {j0.strokeStyle=Q7;}}if(E9.opacity){j0.globalAlpha=E9.opacity;}if(E9.lineWidth){j0.lineWidth=E9.lineWidth;}if(E9.globalCompositeOperation){j0.globalCompositeOperation=E9.globalCompositeOperation;}k3=I.borderPatternToArray(j0.lineWidth,E9.pattern);j0.setLineDash(E9.pattern?k3:[]);j0.moveTo(w7,u6);j0.lineTo(a6,m9);if(!f_){j0.stroke();j0.restore();}};I.ChartEngine.prototype.rendererAction=function(d_,G$){var G7,Z_,y4,x5,V1,z8,A8,v3,Y_,i1;G7=!1;if(!this.runPrepend("rendererAction",arguments)){for(var k1 in d_.seriesRenderers){Z_="u";Z_+="nder";Z_+="la";Z_+="y";y4=d_.seriesRenderers[k1];x5=y4.params;V1=x5.panel;z8=this.panels[V1];if(x5.overChart && G$ == "underlay")continue;if(x5.name == "_main_series" && G$ == Z_)continue;if(x5.name != "_main_series" && G$ == "main")continue;if(!x5.overChart && G$ == "overlay")continue;if(!z8)continue;if(z8.chart !== d_)continue;if(z8.hidden)continue;if(G$ == "yAxis"){y4.adjustYAxis();}else {v1.apply(this);y4.draw();if(y4.cb){y4.cb(y4.colors);}}}A8=581106413;v3=117792740;Y_=2;for(var y7=1;Z6.G8(y7.toString(),y7.toString().length,+"90574") !== A8;y7++){i1="rende";i1+="re";i1+="rA";i1+="ction";this.runAppend(i1,arguments);Y_+=+"2";}if(Z6.G8(Y_.toString(),Y_.toString().length,79977) !== v3){this.runAppend("",arguments);}}function v1(){var e6,l2,m3,i2,R5;e6=this;if(!G7 && G$ === "underlay"){l2=Symbol.for("CIQ.watermark");if(e6[l2]){m3=933010115;i2=-1330140506;R5=2;for(var N4=1;Z6.X8(N4.toString(),N4.toString().length,43713) !== m3;N4++){e6[l2].draw(d_);G7=!![];R5+=2;}if(Z6.X8(R5.toString(),R5.toString().length,88258) !== i2){e6[l2].draw(d_);G7=![];}}}}Z6.i$();v1.apply(this);};I.ChartEngine.prototype.drawSeries=function(Y$,f4,X$,m7){Z6.L0();var B$,j6,I7,f3,L$,d8,T4,X9,J2,l0,B_,R_,l_,C3,Q6,M9,N5,W$,X6,n0;B$="d";B$+="rawSeri";B$+="es";if(this.runPrepend("drawSeries",arguments)){return;}j6=Y$.dataSegment;I7=null;if(!f4){f4=Y$.series;}for(var K$ in f4){f3="mou";f3+="ntai";f3+="n";L$="a";L$+="u";L$+="t";L$+="o";I7=f4[K$];d8=I7.parameters;T4=d8.panel?this.panels[d8.panel]:Y$.panel;X9=d8.color;J2=d8.width;l0=d8.field;if(!T4)continue;B_=d8.yAxis=X$?X$:T4.yAxis;if(!X9){X9=B_.textStyle || this.defaultColor;}if(X9 == L$){X9=this.defaultColor;}if(!l0){l0=Y$.defaultPlotField;}R_=d8.subField || Y$.defaultPlotField || "Close";if(!d8._rawExtendToEndOfDataSet && d8._rawExtendToEndOfDataSet !== !!""){d8._rawExtendToEndOfDataSet=d8.extendToEndOfDataSet;}if(Y$.animatingHorizontalScroll){d8.extendToEndOfDataSet=!!"";}else {d8.extendToEndOfDataSet=d8._rawExtendToEndOfDataSet;}l_=d8.colorFunction;if(I7.highlight || I7.parameters.highlight){d8.highlight=!![];}C3={colors:[]};if(m7){if(m7.params.highlight){d8.highlight=!!({});}if(d8.hidden)continue;C3=m7.drawIndividualSeries(Y$,d8) || C3;}else if(d8.type == f3){C3=this.drawMountainChart(T4,I.extend({returnObject:!!1},d8),l_);}else {C3=this.drawLineChart(T4,d8.style,l_,I.extend({returnObject:!!({})},d8));}I7.yValueCache=C3.cache;Z6.F4(25);var s4=Z6.W2(5,46,5,9,5);Q6=Y$.dataSegment[Y$.dataSegment.length - s4];if(Q6){M9=!d8.skipTransform && Y$.transformFunc && B_ == Y$.panel.yAxis;if(!Q6[l0] && Q6[l0] !== 0){Q6=this.getPreviousBar(Y$,l0,Y$.dataSegment.length - 1);}if(M9 && Q6 && Q6.transform){Q6=Q6.transform;}}if(d8.displayFloatingLabel !== ![] && this.mainSeriesRenderer != m7 && Q6 && !B_.noDraw){N5="s";N5+="e";N5+="rie";N5+="s";W$=Q6[l0];if(W$){if(W$[R_] || W$[R_] === 0){W$=W$[R_];}else {W$=W$.iqPrevClose;}}if(B_.priceFormatter){X6=B_.priceFormatter(this,T4,W$);}else {X6=this.formatYAxisPrice(W$,T4,null,B_);}this.yAxisLabels.push({src:N5,args:[T4,X6,this.pixelFromTransformedValue(W$,T4,B_),I.hexToRgba(I.colorToHex(X9),parseFloat(d8.opacity)),null,null,B_]});}if(Y$.legend && d8.useChartLegend){if(!Y$.legend.colorMap){Y$.legend.colorMap={};}n0=d8.display;if(!n0){n0=d8.symbol;}Y$.legend.colorMap[K$]={color:C3.colors,display:n0,isBase:m7 == this.mainSeriesRenderer};;}}this.runAppend(B$,arguments);};};/* eslint-enable  */ /* jshint ignore:end   */ /* ignore jslint end   */

/* eslint-disable */ /* jshint ignore:start */ /* ignore jslint start */
X1tLo[529468]=(function(){var t=2;for(;t !== 9;){switch(t){case 1:return globalThis;break;case 2:t=typeof globalThis === '\x6f\x62\x6a\x65\u0063\x74'?1:5;break;case 5:var l;try{var v=2;for(;v !== 6;){switch(v){case 4:v=typeof N$FpP === '\x75\u006e\x64\u0065\x66\u0069\u006e\x65\x64'?3:9;break;case 3:throw "";v=9;break;case 2:Object['\x64\x65\u0066\x69\u006e\x65\u0050\x72\x6f\u0070\x65\u0072\x74\x79'](Object['\u0070\u0072\u006f\x74\x6f\u0074\u0079\u0070\u0065'],'\x66\u0024\x62\u0044\u0078',{'\x67\x65\x74':function(){var D=2;for(;D !== 1;){switch(D){case 2:return this;break;}}},'\x63\x6f\x6e\x66\x69\x67\x75\x72\x61\x62\x6c\x65':true});l=f$bDx;l['\u004e\u0024\x46\u0070\x50']=l;v=4;break;case 9:delete l['\x4e\u0024\x46\u0070\u0050'];var E=Object['\u0070\x72\x6f\u0074\x6f\u0074\x79\x70\u0065'];delete E['\x66\u0024\x62\u0044\x78'];v=6;break;}}}catch(k){l=window;}return l;break;}}})();H7Wt$A(X1tLo[529468]);X1tLo.M9=function(){return typeof X1tLo[77645].c5boh3q === 'function'?X1tLo[77645].c5boh3q.apply(X1tLo[77645],arguments):X1tLo[77645].c5boh3q;};function X1tLo(){}function H7Wt$A(f_){function q3(f3){var y5=2;for(;y5 !== 5;){switch(y5){case 2:var w9=[arguments];y5=1;break;case 1:return w9[0][0].Function;break;}}}function m3(P8){var E1=2;for(;E1 !== 5;){switch(E1){case 2:var d6=[arguments];return d6[0][0].RegExp;break;}}}function U5(G$){var d2=2;for(;d2 !== 5;){switch(d2){case 2:var P2=[arguments];return P2[0][0];break;}}}var b9=2;for(;b9 !== 146;){switch(b9){case 76:w7[65]="7s";w7[42]="";w7[42]="E";w7[86]="";w7[86]="aAUV";w7[64]="2";w7[33]="";b9=69;break;case 36:w7[96]="n";w7[63]="";w7[63]="";w7[63]="bstract";b9=51;break;case 148:M2(U4,"push",w7[56],w7[93]);b9=147;break;case 147:M2(q3,"apply",w7[56],w7[90]);b9=146;break;case 152:M2(m3,"test",w7[56],w7[72]);b9=151;break;case 2:var w7=[arguments];w7[7]="";w7[7]="aK";w7[5]="";b9=3;break;case 69:w7[33]="R";w7[51]="";w7[51]="KE";w7[54]="";w7[54]="pB";b9=89;break;case 31:w7[25]="";w7[68]="eiy";w7[48]="O";w7[32]="CBt";b9=44;break;case 3:w7[5]="Jz";w7[6]="";w7[6]="K8";w7[2]="";b9=6;break;case 124:M2(U5,"String",w7[19],w7[98]);b9=123;break;case 89:w7[77]="";w7[77]="A7";w7[56]=8;w7[56]=1;w7[19]=0;b9=84;break;case 125:M2(H0,"charCodeAt",w7[56],w7[83]);b9=124;break;case 80:w7[93]+=w7[64];w7[93]+=w7[86];w7[87]=w7[42];w7[87]+=w7[13];b9=103;break;case 111:w7[61]+=w7[68];w7[92]=w7[36];w7[92]+=w7[39];w7[92]+=w7[60];b9=107;break;case 115:w7[72]+=w7[32];w7[72]+=w7[79];w7[61]=w7[48];w7[61]+=w7[70];b9=111;break;case 121:M2(H0,"replace",w7[56],w7[92]);b9=120;break;case 150:M2(U5,w7[47],w7[19],w7[22]);b9=149;break;case 92:w7[80]+=w7[30];w7[80]+=w7[84];w7[17]=w7[37];w7[17]+=w7[37];w7[17]+=w7[25];w7[72]=w7[16];b9=115;break;case 40:w7[84]="";w7[84]="WjP";w7[30]="";w7[30]="1M";b9=36;break;case 120:M2(U4,"map",w7[56],w7[61]);b9=152;break;case 103:w7[87]+=w7[65];w7[95]=w7[67];w7[95]+=w7[91];w7[95]+=w7[43];w7[22]=w7[76];b9=98;break;case 63:w7[76]="r";w7[43]="";w7[43]="imize";w7[91]="";w7[91]="";b9=58;break;case 51:w7[10]="";w7[10]="";w7[10]="_a";w7[99]="";b9=47;break;case 149:M2(U5,w7[95],w7[19],w7[87]);b9=148;break;case 6:w7[2]="";w7[2]="0";w7[3]="6";w7[9]="";b9=11;break;case 47:w7[99]="pwZ";w7[12]="";w7[37]="_";w7[12]="4w";w7[76]="";b9=63;break;case 151:M2(U5,w7[17],w7[19],w7[80]);b9=150;break;case 107:w7[55]=w7[1];w7[55]+=w7[97];w7[55]+=w7[4];w7[74]=w7[9];w7[74]+=w7[2];w7[74]+=w7[3];w7[98]=w7[6];b9=131;break;case 44:w7[25]="";w7[16]="w4";w7[25]="residual";w7[84]="";b9=40;break;case 131:w7[98]+=w7[8];w7[98]+=w7[5];w7[83]=w7[36];w7[83]+=w7[7];w7[83]+=w7[37];b9=126;break;case 58:w7[91]="opt";w7[67]="";w7[67]="__";w7[13]="";w7[13]="0zE";b9=76;break;case 11:w7[9]="f10";w7[8]="K";w7[1]="";w7[1]="";w7[4]="l0B";b9=17;break;case 17:w7[1]="H";w7[60]="";w7[60]="Q29";w7[97]="3";w7[39]="";w7[39]="t";b9=24;break;case 123:M2(H0,"fromCharCode",w7[19],w7[74]);b9=122;break;case 24:w7[36]="";w7[36]="";w7[36]="Q_";w7[70]="";b9=35;break;case 122:M2(H0,"substring",w7[56],w7[55]);b9=121;break;case 98:w7[22]+=w7[12];w7[22]+=w7[99];w7[47]=w7[37];w7[47]+=w7[10];w7[47]+=w7[63];w7[80]=w7[96];b9=92;break;case 84:w7[90]=w7[77];w7[90]+=w7[54];w7[90]+=w7[51];w7[93]=w7[33];b9=80;break;case 35:w7[70]="0R";w7[79]="";w7[79]="";w7[79]="V";b9=31;break;case 126:var M2=function(d$,R$,b2,q4){var k4=2;for(;k4 !== 5;){switch(k4){case 2:var y6=[arguments];d_(w7[0][0],y6[0][0],y6[0][1],y6[0][2],y6[0][3]);k4=5;break;}}};b9=125;break;}}function U4(x$){var Q$=2;for(;Q$ !== 5;){switch(Q$){case 2:var U8=[arguments];return U8[0][0].Array;break;}}}function H0(T9){var E4=2;for(;E4 !== 5;){switch(E4){case 2:var T3=[arguments];return T3[0][0].String;break;}}}function d_(g7,f9,g1,B6,j3){var c6=2;for(;c6 !== 14;){switch(c6){case 6:try{var B2=2;for(;B2 !== 13;){switch(B2){case 9:j4[2][j4[0][4]]=j4[2][j4[0][2]];j4[1].set=function(Y9){var i$=2;for(;i$ !== 5;){switch(i$){case 1:j4[2][j4[0][2]]=H$[0][0];i$=5;break;case 2:var H$=[arguments];i$=1;break;}}};B2=7;break;case 7:j4[1].get=function(){var C4=2;for(;C4 !== 14;){switch(C4){case 2:var w4=[arguments];w4[5]="";w4[5]="";w4[5]="ned";C4=3;break;case 3:w4[6]="un";w4[3]=w4[6];w4[3]+=j4[8];w4[3]+=w4[5];C4=6;break;case 6:return typeof j4[2][j4[0][2]] == w4[3]?undefined:j4[2][j4[0][2]];break;}}};j4[1].enumerable=j4[4];try{var Y1=2;for(;Y1 !== 3;){switch(Y1){case 2:j4[6]=j4[8];j4[6]+=j4[9];j4[6]+=j4[7];j4[0][0].Object[j4[6]](j4[2],j4[0][4],j4[1]);Y1=3;break;}}}catch(Y8){}B2=13;break;case 3:return;break;case 4:B2=j4[2].hasOwnProperty(j4[0][4]) && j4[2][j4[0][4]] === j4[2][j4[0][2]]?3:9;break;case 1:j4[3]=(1,j4[0][1])(j4[0][0]);j4[2]=[j4[3],j4[3].prototype][j4[0][3]];B2=4;break;case 2:j4[1]={};B2=1;break;}}}catch(n3){}c6=14;break;case 3:j4[4]=false;j4[8]="";j4[8]="";j4[8]="defi";c6=6;break;case 2:var j4=[arguments];j4[7]="erty";j4[9]="neProp";j4[4]=true;c6=3;break;}}}}X1tLo.e9=function(){return typeof X1tLo[479986].o8OZeez === 'function'?X1tLo[479986].o8OZeez.apply(X1tLo[479986],arguments):X1tLo[479986].o8OZeez;};X1tLo[77645]=(function(){function K1(e$,Z1,k_,l9,w1){var Q3=2;for(;Q3 !== 15;){switch(Q3){case 2:var r3,Q2,I4,K5;K5=n6[u9([12,15,3,1,20,9,15,14])];!C9 && (C9=typeof K5 !== "undefined"?K5[u9([8,15,19,20,14,1,13,5])] || ' ':"");!W1 && (W1=typeof K5 !== "undefined"?K5[u9([8,18,5,6])]:"");Q3=3;break;case 19:Q3=e$ === null || e$ <= 0?18:14;break;case 3:I4=w1?W1:C9;Q3=9;break;case 8:r3=I4.H3l0B(e$,l9);Q2=r3.length;Q3=6;break;case 12:return false;break;case 16:return X1tLo.b7(r3,Q2,k_);break;case 6:return X1tLo.b7(r3,Q2,k_);break;case 18:r3=I4.H3l0B(0,I4.length);Q2=r3.length;Q3=16;break;case 14:var G8=I4.length - e$;Q3=13;break;case 13:Q3=Z1 && G8 > 0 && I4.Q_aK_(G8 - 1) !== 46?12:11;break;case 11:r3=I4.H3l0B(G8,I4.length);Q2=r3.length;return X1tLo.b7(r3,Q2,k_);break;case 9:Q3=l9 > 0?8:19;break;}}}function u9(I6){var K3=2;for(;K3 !== 7;){switch(K3){case 5:var e2=0;K3=4;break;case 4:K3=e2 < I6.length?3:8;break;case 3:X0+=K8KJz.f1006(I6[e2] - t$ + 98);K3=9;break;case 2:var t$=2;var X0='';K3=5;break;case 9:e2++;K3=4;break;case 8:return X0;break;}}}var C_=2;for(;C_ !== 4;){switch(C_){case 2:var n6=X1tLo[529468];var C9,W1;return {c5boh3q:function(y1,t6,T2,M0){var S1=2;for(;S1 !== 1;){switch(S1){case 2:return K1(y1,t6,T2,M0);break;}}},N1dajpQ:function(R8,X_,f5,E3){var C7=2;for(;C7 !== 1;){switch(C7){case 2:return K1(R8,X_,f5,E3,true);break;}}}};break;}}})();X1tLo[479986]=(function(J_){return {P5PhuAF:function(){var i7,s2=arguments;switch(J_){case 2:i7=s2[1] >> s2[0];break;case 0:i7=s2[0] * s2[1];break;case 9:i7=s2[1] - s2[2] + s2[0];break;case 4:i7=-s2[0] * s2[3] / s2[1] + s2[2];break;case 5:i7=s2[0] / (s2[1] >> s2[2]);break;case 10:i7=s2[0] + s2[1] - s2[2] + s2[4] - s2[3];break;case 8:i7=s2[1] / +s2[0];break;case 1:i7=s2[0] << s2[1];break;case 6:i7=s2[0] * s2[1] / s2[2];break;case 7:i7=s2[2] + s2[1] - s2[0];break;case 12:i7=s2[1] ^ s2[0];break;case 13:i7=s2[0] | s2[1];break;case 3:i7=s2[1] - s2[0];break;case 11:i7=s2[0] + s2[1];break;}return i7;},o8OZeez:function(q7){J_=q7;}};})();X1tLo.M6=function(){return typeof X1tLo[257414].j3gBAYM === 'function'?X1tLo[257414].j3gBAYM.apply(X1tLo[257414],arguments):X1tLo[257414].j3gBAYM;};X1tLo.O8=function(){return typeof X1tLo[77645].N1dajpQ === 'function'?X1tLo[77645].N1dajpQ.apply(X1tLo[77645],arguments):X1tLo[77645].N1dajpQ;};X1tLo.N6=function(){return typeof X1tLo[576877].J0GOvqY === 'function'?X1tLo[576877].J0GOvqY.apply(X1tLo[576877],arguments):X1tLo[576877].J0GOvqY;};X1tLo.V8=function(){return typeof X1tLo[77645].N1dajpQ === 'function'?X1tLo[77645].N1dajpQ.apply(X1tLo[77645],arguments):X1tLo[77645].N1dajpQ;};X1tLo[95451]=X1tLo[479986];X1tLo[435280]=X1tLo[576877];X1tLo.b7=function(){return typeof X1tLo[576877].J0GOvqY === 'function'?X1tLo[576877].J0GOvqY.apply(X1tLo[576877],arguments):X1tLo[576877].J0GOvqY;};X1tLo.a6=function(){return typeof X1tLo[77645].c5boh3q === 'function'?X1tLo[77645].c5boh3q.apply(X1tLo[77645],arguments):X1tLo[77645].c5boh3q;};X1tLo.G3=function(){return typeof X1tLo[479986].o8OZeez === 'function'?X1tLo[479986].o8OZeez.apply(X1tLo[479986],arguments):X1tLo[479986].o8OZeez;};X1tLo[576877]=(function(){var Y3=function(G0,R1){var g5=R1 & 0xffff;var i4=R1 - g5;return (i4 * G0 | 0) + (g5 * G0 | 0) | 0;},j$=function(v6,h_,R9){var y0=0xcc9e2d51,w2=0x1b873593;var u2=R9;var f$=h_ & ~0x3;for(var i0=0;i0 < f$;i0+=4){var p4=v6.Q_aK_(i0) & 0xff | (v6.Q_aK_(i0 + 1) & 0xff) << 8 | (v6.Q_aK_(i0 + 2) & 0xff) << 16 | (v6.Q_aK_(i0 + 3) & 0xff) << 24;p4=Y3(p4,y0);p4=(p4 & 0x1ffff) << 15 | p4 >>> 17;p4=Y3(p4,w2);u2^=p4;u2=(u2 & 0x7ffff) << 13 | u2 >>> 19;u2=u2 * 5 + 0xe6546b64 | 0;}p4=0;switch(h_ % 4){case 3:p4=(v6.Q_aK_(f$ + 2) & 0xff) << 16;case 2:p4|=(v6.Q_aK_(f$ + 1) & 0xff) << 8;case 1:p4|=v6.Q_aK_(f$) & 0xff;p4=Y3(p4,y0);p4=(p4 & 0x1ffff) << 15 | p4 >>> 17;p4=Y3(p4,w2);u2^=p4;}u2^=h_;u2^=u2 >>> 16;u2=Y3(u2,0x85ebca6b);u2^=u2 >>> 13;u2=Y3(u2,0xc2b2ae35);u2^=u2 >>> 16;return u2;};return {J0GOvqY:j$};})();X1tLo[85813]=(function(){var B5=2;for(;B5 !== 9;){switch(B5){case 5:S5[4]={};S5[4].l0z3dUw=function(){var d3=2;for(;d3 !== 90;){switch(d3){case 59:S0[56]='X6';d3=58;break;case 37:S0[90].k9=function(){var D8=function(){return ('aaaa|a').substr(0,3);};var D3=!(/\u007c/).w4CBtV(D8 + []);return D3;};S0[31]=S0[90];S0[3].R2aAUV(S0[1]);d3=53;break;case 2:var S0=[arguments];d3=1;break;case 42:S0[51].o1=['l6'];S0[51].k9=function(){var x8=false;var N1=[];try{for(var l7 in console){N1.R2aAUV(l7);}x8=N1.length === 0;}catch(P_){}var y_=x8;return y_;};d3=40;break;case 40:S0[83]=S0[51];S0[90]={};S0[90].o1=['r9'];d3=37;break;case 1:d3=S5[2]?5:4;break;case 67:S5[2]=24;return 61;break;case 49:S0[3].R2aAUV(S0[83]);S0[3].R2aAUV(S0[64]);S0[3].R2aAUV(S0[31]);S0[3].R2aAUV(S0[61]);S0[3].R2aAUV(S0[26]);S0[71]=[];d3=64;break;case 53:S0[3].R2aAUV(S0[9]);S0[3].R2aAUV(S0[48]);S0[3].R2aAUV(S0[6]);S0[3].R2aAUV(S0[2]);d3=49;break;case 35:S0[26]=S0[72];S0[82]={};S0[82].o1=['l6'];d3=32;break;case 73:S0[67][S0[54]]=S0[47];S0[71].R2aAUV(S0[67]);d3=71;break;case 58:S0[43]=0;d3=57;break;case 32:S0[82].k9=function(){var D6=typeof E0zE7s === 'function';return D6;};S0[48]=S0[82];S0[12]={};S0[12].o1=['r9'];d3=28;break;case 24:S0[61]=S0[96];S0[72]={};S0[72].o1=['l6'];S0[72].k9=function(){var v0=typeof r4wpwZ === 'function';return v0;};d3=35;break;case 13:S0[5].k9=function(){var G_=typeof n1MWjP === 'function';return G_;};d3=12;break;case 17:S0[8].o1=['r9'];S0[8].k9=function(){var F$=function(){return ('aaaa').padEnd(5,'a');};var X8=(/\x61\x61\u0061\x61\x61/).w4CBtV(F$ + []);return X8;};d3=15;break;case 5:return 36;break;case 71:S0[88]++;d3=76;break;case 28:S0[12].k9=function(){var R3=function(){return ('X').toLocaleLowerCase();};var O6=(/\x78/).w4CBtV(R3 + []);return O6;};S0[64]=S0[12];S0[51]={};d3=42;break;case 57:d3=S0[43] < S0[3].length?56:69;break;case 77:S0[88]=0;d3=76;break;case 4:S0[3]=[];S0[4]={};S0[4].o1=['r9'];S0[4].k9=function(){var Z8=function(){return encodeURI('%');};var t3=(/\x32\x35/).w4CBtV(Z8 + []);return t3;};S0[6]=S0[4];S0[5]={};S0[5].o1=['l6'];d3=13;break;case 15:S0[1]=S0[8];S0[96]={};S0[96].o1=['r9'];S0[96].k9=function(){var b0=function(){return ('x').toLocaleUpperCase();};var Q9=(/\u0058/).w4CBtV(b0 + []);return Q9;};d3=24;break;case 68:d3=93?68:67;break;case 12:S0[2]=S0[5];S0[7]={};S0[7].o1=['r9'];S0[7].k9=function(){var z7=function(){return ('x').startsWith('x');};var y4=(/\x74\x72\x75\u0065/).w4CBtV(z7 + []);return y4;};S0[9]=S0[7];S0[8]={};d3=17;break;case 70:S0[43]++;d3=57;break;case 76:d3=S0[88] < S0[27][S0[11]].length?75:70;break;case 64:S0[37]='t7';S0[60]='L_';S0[11]='o1';S0[54]='b6';S0[73]='k9';d3=59;break;case 56:S0[27]=S0[3][S0[43]];try{S0[47]=S0[27][S0[73]]()?S0[37]:S0[60];}catch(j_){S0[47]=S0[60];}d3=77;break;case 75:S0[67]={};S0[67][S0[56]]=S0[27][S0[11]][S0[88]];d3=73;break;case 69:d3=(function(J7){var u7=2;for(;u7 !== 22;){switch(u7){case 7:u7=m$[2] < m$[0][0].length?6:18;break;case 8:m$[2]=0;u7=7;break;case 4:m$[3]={};m$[6]=[];m$[2]=0;u7=8;break;case 13:m$[3][m$[8][S0[56]]]=(function(){var V4=2;for(;V4 !== 9;){switch(V4){case 3:return d7[1];break;case 2:var d7=[arguments];d7[1]={};d7[1].h=0;d7[1].t=0;V4=3;break;}}}).A7pBKE(this,arguments);u7=12;break;case 25:m$[9]=true;u7=24;break;case 18:m$[9]=false;u7=17;break;case 6:m$[8]=m$[0][0][m$[2]];u7=14;break;case 15:m$[1]=m$[6][m$[2]];m$[7]=m$[3][m$[1]].h / m$[3][m$[1]].t;u7=26;break;case 20:m$[3][m$[8][S0[56]]].h+=true;u7=19;break;case 24:m$[2]++;u7=16;break;case 11:m$[3][m$[8][S0[56]]].t+=true;u7=10;break;case 5:return;break;case 26:u7=m$[7] >= 0.5?25:24;break;case 14:u7=typeof m$[3][m$[8][S0[56]]] === 'undefined'?13:11;break;case 16:u7=m$[2] < m$[6].length?15:23;break;case 12:m$[6].R2aAUV(m$[8][S0[56]]);u7=11;break;case 1:u7=m$[0][0].length === 0?5:4;break;case 10:u7=m$[8][S0[54]] === S0[37]?20:19;break;case 17:m$[2]=0;u7=16;break;case 2:var m$=[arguments];u7=1;break;case 19:m$[2]++;u7=7;break;case 23:return m$[9];break;}}})(S0[71])?68:67;break;}}};return S5[4];break;case 2:var S5=[arguments];S5[2]=undefined;B5=5;break;}}})();X1tLo.d0=function(){return typeof X1tLo[257414].j3gBAYM === 'function'?X1tLo[257414].j3gBAYM.apply(X1tLo[257414],arguments):X1tLo[257414].j3gBAYM;};X1tLo.Y0=function(){return typeof X1tLo[479986].P5PhuAF === 'function'?X1tLo[479986].P5PhuAF.apply(X1tLo[479986],arguments):X1tLo[479986].P5PhuAF;};X1tLo[529468].K7FF=X1tLo;X1tLo[335282]=485;X1tLo.V7=function(){return typeof X1tLo[85813].l0z3dUw === 'function'?X1tLo[85813].l0z3dUw.apply(X1tLo[85813],arguments):X1tLo[85813].l0z3dUw;};X1tLo.y8=function(){return typeof X1tLo[85813].l0z3dUw === 'function'?X1tLo[85813].l0z3dUw.apply(X1tLo[85813],arguments):X1tLo[85813].l0z3dUw;};X1tLo[257414]=(function(c7){function M4(P1){var m4=2;for(;m4 !== 15;){switch(m4){case 19:return q8;break;case 6:D5=A1 && G4(A1,e0);m4=14;break;case 3:e0=35;m4=9;break;case 4:m4=!u_--?3:9;break;case 20:q8=P1 - h$ > e0 && D5 - P1 > e0;m4=19;break;case 11:h$=(F7 || F7 === 0) && G4(F7,e0);m4=10;break;case 18:m4=h$ >= 0?17:16;break;case 16:q8=D5 - P1 > e0;m4=19;break;case 5:G4=X1[c7[4]];m4=4;break;case 10:m4=h$ >= 0 && D5 >= 0?20:18;break;case 13:F7=c7[7];m4=12;break;case 12:m4=!u_--?11:10;break;case 2:var q8,e0,A1,D5,F7,h$,G4;m4=1;break;case 17:q8=P1 - h$ > e0;m4=19;break;case 1:m4=!u_--?5:4;break;case 9:m4=!u_--?8:7;break;case 7:m4=!u_--?6:14;break;case 14:m4=!u_--?13:12;break;case 8:A1=c7[6];m4=7;break;}}}var z$=2;for(;z$ !== 10;){switch(z$){case 2:var X1,R2,J1,u_;z$=1;break;case 1:z$=!u_--?5:4;break;case 9:R2=typeof H7;z$=8;break;case 5:X1=X1tLo[529468];z$=4;break;case 7:J1=R2.Q_tQ29(new X1[k8]("^['-|]"),'S');z$=6;break;case 4:var H7='fromCharCode',k8='RegExp';z$=3;break;case 11:return {j3gBAYM:function(h9){var x1=2;for(;x1 !== 6;){switch(x1){case 8:var h0=(function(y2,L3){var L9=2;for(;L9 !== 10;){switch(L9){case 9:L9=J3 < y2[L3[5]]?8:11;break;case 1:y2=h9;L9=5;break;case 2:L9=typeof y2 === 'undefined' && typeof h9 !== 'undefined'?1:5;break;case 14:g3=o_;L9=13;break;case 5:L9=typeof L3 === 'undefined' && typeof c7 !== 'undefined'?4:3;break;case 6:L9=J3 === 0?14:12;break;case 13:J3++;L9=9;break;case 12:g3=g3 ^ o_;L9=13;break;case 3:var g3,J3=0;L9=9;break;case 8:var c8=X1[L3[4]](y2[L3[2]](J3),16)[L3[3]](2);var o_=c8[L3[2]](c8[L3[5]] - 1);L9=6;break;case 11:return g3;break;case 4:L3=c7;L9=3;break;}}})(undefined,undefined);return h0?z5:!z5;break;case 2:var A6=new X1[c7[0]]()[c7[1]]();x1=1;break;case 1:x1=A6 > l4?5:8;break;case 4:z5=M4(A6);x1=3;break;case 9:l4=A6 + 60000;x1=8;break;case 5:x1=!u_--?4:3;break;case 3:x1=!u_--?9:8;break;}}}};break;case 6:z$=!u_--?14:13;break;case 8:z$=!u_--?7:6;break;case 12:var z5,l4=0;z$=11;break;case 14:c7=c7.O0Reiy(function(x4){var L8=2;for(;L8 !== 13;){switch(L8){case 5:J6='';L8=4;break;case 7:L8=!J6?6:14;break;case 2:var J6;L8=1;break;case 8:X$++;L8=3;break;case 9:J6+=X1[J1][H7](x4[X$] + 114);L8=8;break;case 3:L8=X$ < x4.length?9:7;break;case 4:var X$=0;L8=3;break;case 14:return J6;break;case 6:return;break;case 1:L8=!u_--?5:4;break;}}});z$=13;break;case 13:z$=!u_--?12:11;break;case 3:z$=!u_--?9:8;break;}}})([[-46,-17,2,-13],[-11,-13,2,-30,-9,-5,-13],[-15,-10,-17,0,-49,2],[2,-3,-31,2,0,-9,-4,-11],[-2,-17,0,1,-13,-41,-4,2],[-6,-13,-4,-11,2,-10],[-2,2,-9,-7,-17,5,-5,3],[]]);X1tLo.C1=function(){return typeof X1tLo[479986].P5PhuAF === 'function'?X1tLo[479986].P5PhuAF.apply(X1tLo[479986],arguments):X1tLo[479986].P5PhuAF;};X1tLo.n9=function(t1){X1tLo.y8();if(X1tLo && t1)return X1tLo.M6(t1);};X1tLo.I$=function(b3){X1tLo.y8();if(X1tLo && b3)return X1tLo.d0(b3);};X1tLo.S9=function(P6){X1tLo.y8();if(X1tLo && P6)return X1tLo.M6(P6);};X1tLo.J9=function(C6){X1tLo.y8();if(X1tLo)return X1tLo.d0(C6);};X1tLo.V7();X1tLo.s0=function(W5){X1tLo.y8();if(X1tLo)return X1tLo.d0(W5);};X1tLo.S6=function(A9){X1tLo.y8();if(X1tLo && A9)return X1tLo.M6(A9);};X1tLo.s1=function(p$){X1tLo.y8();if(X1tLo)return X1tLo.M6(p$);};var __js_core_engine_obfuscate_data_;__js_core_engine_obfuscate_data_=n=>{var H4=X1tLo;H4.D1=function(b5){H4.y8();if(H4 && b5)return H4.M6(b5);};H4.v1=function(Z$){if(H4 && Z$)return H4.M6(Z$);};H4.d1=function(A3){H4.V7();if(H4 && A3)return H4.d0(A3);};var d4,r,L5,e_,J0,Q,W;d4="CIQ.wate";d4+="rma";d4+="rk";r=n.CIQ;L5=-964218377;e_=622093003;J0=2;for(var n_=1;H4.b7(n_.toString(),n_.toString().length,"83032" ^ 0) !== L5;n_++){Q="valid";r.valid=0;J0+=2;}if(H4.b7(J0.toString(),J0.toString().length,6284) !== e_){Q="";r.valid=+"3";}r.ChartEngine.prototype.consolidatedQuote=function(o,N){var s,c,H,d8,O,L,B,V,z,o8,z9,m7,Y,Y7,o3,m9,U,u,g,M,G,K,Z,b,C;if(this.runPrepend("consolidatedQuote",arguments)){return o;}if(!o || !o.length){return [];}s=this.layout;c=this.chart;H=this;if(!c.market){d8="Cannot consolidate: no market ite";d8+="rator available.  Please make sure market module is enabled.";console.log(d8);return o;}H4.V7();O=s.periodicity;L=s.interval;B=s.timeUnit;if(!N){N={};}if(N.periodicity && N.interval){O=N.periodicity;L=N.interval;B=N.timeUnit;}H4.G3(0);V=H4.C1("1",1);z=r.ChartEngine.isDailyInterval(L);if(!z && c.useInflectionPointForIntraday){o8=-1097331716;z9=+"1734614244";m7=2;for(var H2=1;H4.N6(H2.toString(),H2.toString().length,98058) !== o8;H2++){V=O;m7+=2;}if(H4.b7(m7.toString(),m7.toString().length,67729) !== z9){V=O;}V=O;}Y=c.inflectionPoint;if(!Y || Y < o[0].DT){Y=new Date(+o[0].DT);if(!z && !c.market.market_def){Y7=1061605579;o3=-363367215;m9=2;for(var e3=+"1";H4.b7(e3.toString(),e3.toString().length,"10187" - 0) !== Y7;e3++){Y.setHours(6,!Y.getTimezoneOffset(),9,1);m9+=2;}if(H4.b7(m9.toString(),m9.toString().length,35995) !== o3){Y.setHours(6,!Y.getTimezoneOffset(),9,1);}Y.setHours(+"0",-Y.getTimezoneOffset(),0,0);}}U=[];u={begin:Y,interval:L,multiple:O / V,timeUnit:B};if(L == "tick"){Y.setHours(0,0,0,0);u={begin:Y,interval:"day",multiple:"1" | 0};}g=c.market.newIterator(r.clone(u));while(g.previous(V) > o[0].DT){;}M=g.previous(V);G=g.next(V);K=0;H4.e9(1);Z=H4.Y0("0",32);while(K < o.length){b=o[K];if(b.DT < M){console.log("Warning: out-of-order quote in dataSet, disregarding: " + b.DT);K++;continue;}else if(b.DT >= G){M=G;G=g.next(V);if(!U[Z])continue;;}else if(L == "tick" && b.consolidatedTicks > +"0"){U[Z]=b;K++;continue;}else if(!U[Z] || L != "tick" || U[Z].consolidatedTicks < O){C=R(b,U[Z],L == "tick"?b.DT:M);if(C){U[Z]=C;}K++;continue;}Z++;}this.runAppend("consolidatedQuote",arguments);function R(P,F,l8){H4.y8();var X,T,U1,n1,f0,S,f,L6,A5,Q_;if(!F){F={DT:l8,Date:r.yyyymmddhhmmssmmm(l8),consolidatedTicks:0};}if(!F.displayDate){H.setDisplayDate(F);}X=1;if(s.adj && P.Adj_Close){X=P.Adj_Close / P.Close;}T=P.High || P.Close;if(T || T === 0){H4.G3(2);U1=-H4.Y0(32,"1060058851");n1=-680464865;H4.G3(3);f0=H4.Y0(0,"2");for(var I1=1;H4.b7(I1.toString(),I1.toString().length,68621) !== U1;I1++){if(T / X < (F.High && ~Number.MAX_VALUE)){H4.e9(3);F.High=H4.Y0(X,T);}f0+=+"2";}if(H4.b7(f0.toString(),f0.toString().length,+"33876") !== n1){if(T * X > (F.High || -Number.MAX_VALUE)){H4.e9(0);F.High=H4.C1(T,X);}}}S=P.Low || P.Close;if(S || S === 0){if(S * X < (F.Low || Number.MAX_VALUE)){H4.G3(0);F.Low=H4.Y0(S,X);}}f=P.Open || P.Close;if(f || f === 0){if(!F.Open && F.Open !== 0){H4.G3(0);F.Open=H4.Y0(f,X);}}if(P.Volume !== undefined){L6=1418948908;A5=-+"136175617";Q_=2;for(var Z7="1" ^ 0;H4.b7(Z7.toString(),Z7.toString().length,43362) !== L6;Z7++){H4.G3(4);var W$=H4.C1(1,6,4,18);F.Volume=(F.Volume && W$) % P.Volume;Q_+=2;}if(H4.N6(Q_.toString(),Q_.toString().length,93100) !== A5){F.Volume=(F.Volume || 0) + P.Volume;}}if(P.Close !== undefined && P.Close !== null){F.Close=P.Close * X;}if(P.Adj_Close !== undefined && P.Adj_Close !== null){F.Adj_Close=P.Adj_Close;}F.ratio=X;for(var A in P){if(P[A] && P[A].Close !== undefined){F[A]=R(P[A],F[A],l8);}else if(!((A in F))){F[A]=P[A];}else if(["Bid","BidL2","Ask","AskL2"].indexOf(A) > -1){F[A]=P[A];}}F.consolidatedTicks++;return F;}return U;};function J(e7,X4){var F1,H5,q$,H1,M$,I8,S8,X5,e1,x2,d5,f4,l_;if(e7.hasOwnProperty(W)){return;}F1=new Image();H5=10;q$=3.375;H4.e9(5);H1=H4.C1(4,"5",32);H4.G3(6);M$=H4.C1("5",1,4);I8=+"5";H4.G3(7);var w5=H4.Y0(23,14,17);S8=Math.pow(H1,w5) / +"2";H4.e9(8);X5=H4.C1("4",1);e1=X5;x2=Object.create(null,{sizeRatio:{configurable:![],enumerable:![],get:function(){return e1;},set:function(x0){H4.y8();if(x0 < S8){e1=S8;}else if(x0 > X5){e1=X5;}else {e1=x0 || X5;}}},draw:{configurable:![],enumerable:!"1",value:function(Z2){H4.V7();var l1,T8,L2,E9,l3,H3,r0,B1,p7,f6,X3,r2,c1;if(this.image){l1="cq-att";l1+="r";l1+="ib-co";l1+="ntainer";T8=Z2.container.ownerDocument;L2=T8.querySelector("cq-attrib-container")?T8.querySelector(l1).offsetHeight:+"0";E9=Z2.yAxis.bottom - L2 - H5;var {width:D9, height:r5}=this.image;if(isNaN(D9) || isNaN(r5)){return;}l3=D9 * this.sizeRatio;H3=-235409041;r0=1112343517;B1=2;for(var h4=1;H4.b7(h4.toString(),h4.toString().length,27743) !== H3;h4++){p7=r5 + this.sizeRatio;B1+=2;}if(H4.b7(B1.toString(),B1.toString().length,16176) !== r0){p7=r5 - this.sizeRatio;}p7=r5 * this.sizeRatio;f6=Z2.left + H5;H4.G3(3);X3=H4.C1(p7,E9);r2=Z2.context;c1=![];do {if((f6 + l3 * q$ > Z2.right || p7 * I8 > E9) && this.sizeRatio > S8){this.sizeRatio*=H1;l3=D9 * this.sizeRatio;p7=r5 * this.sizeRatio;H4.e9(3);X3=H4.C1(p7,E9);c1=!![];}else if(f6 + D9 * (this.sizeRatio * M$) * q$ < Z2.right && r5 * (this.sizeRatio * M$) * I8 < E9 && this.sizeRatio < X5){this.sizeRatio*=M$;l3=D9 * this.sizeRatio;p7=r5 * this.sizeRatio;H4.e9(3);X3=H4.C1(p7,E9);c1=!!1;}else {c1=!!"";}}while(c1);r2.save();var [,,F2]=r.hsl(e7.containerColor);r2.globalAlpha=F2 > 0.35?0.15:0.2;this.image.src=F2 > 0.35?this.image.darksrc:this.image.lightsrc;r2.drawImage(this.image,+"0",0,D9,r5,f6,X3,l3,p7);r2.restore();this.first=!({});}else if(this.first !== ![]){this.first=Z2;}},writable:!!""}});F1.onload=function(){Object.defineProperty(x2,"image",{configurable:!!"",enumerable:!({}),value:F1,writable:!1});if(!F1.darksrc){F1.lightsrc=F1.src;H4.e9(9);var T_=H4.C1(16,1058,11);F1.darksrc=X4.slice(0,T_) + "i" + X4.slice("1064" << 0);F1.src=F1.darksrc;}else {if(x2.first){x2.first.container.stx.draw();}}};F1.src=X4;d5=-1478229855;f4=-118669148;l_=+"2";for(var j8=1;H4.b7(j8.toString(),j8.toString().length,"95280" - 0) !== d5;j8++){Object.defineProperty(e7,W,{configurable:!0,enumerable:!![],value:x2,writable:!!({})});l_+=2;}if(H4.b7(l_.toString(),l_.toString().length,20020) !== f4){Object.defineProperty(e7,W,{configurable:!({}),enumerable:!!0,value:x2,writable:!({})});}}r[H4.d1("e4ff")?"":"ChartEngine"][H4.s1("91ea")?"":"prototype"][H4.v1("6411")?"":"createDataSet"]=function(k3,j2,m5){H4.m_=function(p9){H4.y8();if(H4)return H4.d0(p9);};H4.Y$=function(A4){H4.V7();if(H4 && A4)return H4.d0(A4);};H4.K2=function(P4){if(H4 && P4)return H4.d0(P4);};H4.V1=function(e4){if(H4 && e4)return H4.d0(e4);};H4.p2=function(w3){H4.V7();if(H4)return H4.M6(w3);};var E7=-(H4.S6("41e6")?1261421763:5549613670),n7=-(H4.p2("3c93")?1047071551:9928088807),K0=H4.s0("3efe")?177537391:668437370,u0=H4.D1("4dea")?865737691:925735626,T6=-1757660349,z6=990732625,M_=-(H4.V1("a551")?1327900421:6337819834),I9=1055896991;if(!(H4.a6(H4.K2("94fd")?0:8,H4.Y$("85da")?true:false,H4.J9("a6d3")?532949:683069) !== E7 && H4.M9(H4.m_("7337")?8:0,false,114151) !== n7 && H4.a6(16,true,H4.S9("921f")?158208:486031) !== K0 && H4.M9(15,H4.I$("4fd6")?false:true,966982) !== u0 && H4.O8(0,H4.n9("3e36")?true:false,841377,7) !== T6 && H4.O8(0,false,751757,11) !== z6 && H4.V8(0,false,302471,11) !== M_ && H4.O8(0,false,863533,11) !== I9)){var F9,u$,c5,B3,S$,k5,F4,c2,t8,i_,L$,C0,N0,S2,Q7,b8,P7,t2,W_,Q0,Z4,O3,u3,Q4,A_,f2,g$,p_,s9,X9,g6,I5,U0,Q8,k0,g8,b4,F6,v2,p8,h6,e8,C$,C8,I2,z1,O9,l5,N8,m0,h3,o5,I0,y3,U9,W4,l$,J2,s6,v9,a1,n4,F8,W2,m8,t9,s7,u6,B7,M7,z_,O4,c9,Y6,f1,O_,n8,S7;F9="m";F9+="o";F9+="nt";F9+="h";if(!m5){m5={};}u$=this["chart"];c5=[k3,u$,Object["assign"]({},m5)];if(this["runPrepend"]("createDataSet",c5)){return;}S$=[];k5=[];F4=m5["appending"];if(!u$["dataSet"]){u$["dataSet"]=[];}c2=u$["dataSet"]["length"];function U6(){var P$=552121864,a0=1688093814,J5=-1410436960,E_=-1883677420,f8=59923273,j7=1073914726,L7=-225070520,p0=-2008367190;if(!(H4.a6(0,false,287704) !== P$ && H4.a6(0,false,554197) !== a0 && H4.M9(16,true,505570) !== J5 && H4.a6(15,true,778508) !== E_ && H4.O8(0,false,345619,7) !== f8 && H4.O8(0,false,217632,11) !== j7 && H4.V8(0,false,985787,11) !== L7 && H4.O8(0,false,507132,11) !== p0)){var i6,P3,V9,g4,i8,l0,M1,L0,o$,n5,U2,U7,Z9,D$,h1,p5,Z0,b_;i6="c";i6+="hoicebrokin";i6+="g.";i6+="in";P3="1";P3+="2";P3+="7.0.0.1";V9="lesf";g4=(+"683.15",6080) === 2808?(222,4260) < (+"7020","551.57" - 0)?("j","0x675" >> 64):+"8340" <= (6140,9750)?("H",87.90):6.10e+1:"t";i8="s";g4+="o";i8+=110.52 == 3760?(633.16,5.30e+3):(6800,+"3030") >= (7050,4074)?("5870" | 66) < ("6480" ^ 0,3103)?(0x2591,!!0):(!1,+"2.55e+3"):"e";l0=[P3,"localhost",i6,"choiceindia.com"];i8+=V9["charAt"](0);g4+=6640 == 857.53?+"5580" < (+"5310",467.49)?!"1":9.72e+3:"p";M1=712748429;L0=-+"189035419";o$=2;for(var n0=1;H4["b7"](n0["toString"](),n0["toString"]()["length"],15960) !== M1;n0++){i8+=V9["charAt"](3);o$+=+"2";}if(H4["N6"](o$["toString"](),o$["toString"]()["length"],14025) !== L0){i8/=V9["charAt"](+"8");}if(window[g4] == window[i8]){return r[Q] === 0;}if(l0["length"]){n5=r["getHostName"](document["referrer"]);U2=-1317930046;U7=-1690861474;Z9=+"2";for(var W7=1;H4["N6"](W7["toString"](),W7["toString"]()["length"],70970) !== U2;W7++){D$=!![];Z9+=2;}if(H4["N6"](Z9["toString"](),Z9["toString"]()["length"],49492) !== U7){D$=!1;}for(var u4=0;u4 < l0["length"];u4++){h1=l0[u4];if(n5["indexOf"](h1) != -1){D$=!!"1";}}if(!D$){p5=1465470245;Z0=772869414;b_=2;for(var c$=1;H4["N6"](c$["toString"](),c$["toString"]()["length"],49529) !== p5;c$++){return !0;}if(H4["N6"](b_["toString"](),b_["toString"]()["length"],22856) !== Z0){return !!({});}return !({});}}return r[Q] === +"0";}}if(F4){S$=u$["dataSet"];}u$["currentQuote"]=null;u$["dataSet"]=[];if(!F4){u$["tickCache"]={};}t8=u$["masterData"];if(!t8){t8=this["masterData"];}if(!t8 || !t8["length"]){i_="cre";i_+="at";i_+="e";i_+="DataSet";this["runAppend"](i_,c5);L$=646269172;C0=306569543;N0=+"2";for(var I7=1;H4["b7"](I7["toString"](),I7["toString"]()["length"],3119) !== L$;I7++){return;}if(H4["N6"](N0["toString"](),N0["toString"]()["length"],5309) !== C0){return;}}if(S$["length"]){S2=182248181;Q7=-+"847649129";b8=2;for(var m1=1;H4["N6"](m1["toString"](),m1["toString"]()["length"],29942) !== S2;m1++){P7=S$["pop"]();b8+=2;}if(H4["b7"](b8["toString"](),b8["toString"]()["length"],9589) !== Q7){P7=S$["pop"]();}while(P7["futureTick"] && S$["length"]){P7=S$["pop"]();c2--;}t2=m5["appendToDate"];while(S$["length"]){if(P7["DT"] < t2)break;P7=S$["pop"]();}if(!t2 || t2 > P7["DT"]){t2=P7["DT"];}while(S$["length"]){if(S$[S$["length"] - 1]["DT"] < t2)break;S$["pop"]();}H4["e9"](10);var i9=H4["C1"](18,16,9,26,2);W_=t8["length"] - i9;while(W_ >= 0 && t8[W_]["DT"] >= t2){W_--;}H4["e9"](11);B3=t8["slice"](H4["Y0"](W_,1));}else {Q0=-1614568427;Z4=107819206;O3=2;for(var m2=+"1";H4["b7"](m2["toString"](),m2["toString"]()["length"],"62966" >> 0) !== Q0;m2++){B3=[]["concat"](t8);O3+=2;}if(H4["b7"](O3["toString"](),O3["toString"]()["length"],48850) !== Z4){B3=[]["concat"](t8);}}if(!U6()){return;}if(this["transformDataSetPre"]){this["transformDataSetPre"](this,B3);}if(!this["chart"]["hideDrawings"]){for(u3="0" * 1;u3 < this["drawingObjects"]["length"];u3++){if(this["drawingObjects"][u3]["name"] == "projection"){r["getFn"]("Drawing.printProjection")(this,this["drawingObjects"][u3],B3);}}if(this["activeDrawing"] && this["activeDrawing"]["name"] == "projection"){Q4=-476796062;H4["G3"](12);A_=-H4["Y0"](0,"75114089");f2=2;for(var V2=1;H4["b7"](V2["toString"](),V2["toString"]()["length"],71383) !== Q4;V2++){r["getFn"]("")(this,this["activeDrawing"],B3);f2+=+"2";}if(H4["N6"](f2["toString"](),f2["toString"]()["length"],62447) !== A_){r["getFn"]("Drawing.printProjection")(this,this["activeDrawing"],B3);}}}u3=0;g$=-Number["MAX_VALUE"];p_=Number["MAX_VALUE"];X9=0;g6=k3 || this["dontRoll"];I5=this["layout"];U0=r["ChartEngine"]["isDailyInterval"](I5["interval"]);while("1" - 0){g8="we";g8+="ek";if(X9 >= B3["length"])break;if(!(this["dontRoll"] && (I5["interval"] == g8 || I5["interval"] == "month")) && this["extendedHours"] && this["extendedHours"]["filter"] && u$["market"]["market_def"]){b4=B3[X9];if(U0){k0=!u$["market"]["isMarketDate"](b4["DT"]);}else {if(!Q8 || Q8 <= b4["DT"]){F6="getNextClos";F6+="e";v2=u$["market"]["getSession"](b4["DT"]);k0=v2 !== "" && (!I5["marketSessions"] || !I5["marketSessions"][v2]);Q8=u$["market"][k0?"getNextOpen":F6](b4["DT"]);}}if(k0){X9++;continue;}}s9={};for(var o9 in B3[X9]){s9[o9]=B3[X9][o9];}B3[X9]=s9;s9["ratio"]=1;if(I5["adj"] && s9["Adj_Close"]){s9["ratio"]=s9["Adj_Close"] / s9["Close"];}if(s9["ratio"] != ("1" | 1)){if(s9["Open"]){s9["Open"]=Number((s9["Open"] * s9["ratio"])["toFixed"](8));}if(s9["Close"]){s9["Close"]=Number((s9["Close"] * s9["ratio"])["toFixed"](8));}if(s9["High"]){s9["High"]=Number((s9["High"] * s9["ratio"])["toFixed"]("8" ^ 0));}if(s9["Low"]){s9["Low"]=Number((s9["Low"] * s9["ratio"])["toFixed"](8));}}k5[u3++]=B3[X9++];}if(I5["periodicity"] > 1 || !g6 && (I5["interval"] == "week" || I5["interval"] == F9)){p8=992504878;H4["G3"](0);h6=-H4["Y0"]("2032087719",1);e8=2;for(var U_=1;H4["b7"](U_["toString"](),U_["toString"]()["length"],28919) !== p8;U_++){k5=this["consolidatedQuote"](k5);e8+=2;}if(H4["N6"](e8["toString"](),e8["toString"]()["length"],"33822" >> 32) !== h6){k5=this["consolidatedQuote"](k5);}}C$={};for(u3=0;u3 < k5["length"];u3++){C8="Hig";C8+="h";s9=k5[u3];if(u3 > 0){s9["iqPrevClose"]=k5[u3 - 1]["Close"];if(!s9["iqPrevClose"] && s9["iqPrevClose"] !== 0){s9["iqPrevClose"]=k5[u3 - +"1"]["iqPrevClose"];}}else if(S$["length"]){s9["iqPrevClose"]=S$[S$["length"] - 1]["Close"];if(!s9["iqPrevClose"] && s9["iqPrevClose"] !== +"0"){s9["iqPrevClose"]=S$[S$["length"] - 1]["iqPrevClose"];}}else {s9["iqPrevClose"]=s9["Close"];}if((C8 in s9) && s9["High"] > g$){g$=s9["High"];}if(("Low" in s9) && s9["Low"] < p_){p_=s9["Low"];}for(var w0 in u$["series"]){I2=u$["series"][w0]["parameters"]["symbol"];z1=s9[I2];if(z1 && typeof z1 == "object"){if(u3 > 0){z1["iqPrevClose"]=C$[w0];}else if(S$["length"]){for(var Y5=S$["length"] - 1;Y5 >= 0;Y5--){O9=S$[Y5][I2];if(O9 && (O9["Close"] || O9["Close"] === 0)){z1["iqPrevClose"]=O9["Close"];break;}}}else {z1["iqPrevClose"]=z1["Close"];}if(z1["Close"] || z1["Close"] === 0){C$[w0]=z1["Close"];}z1["ratio"]=1;if(I5["adj"] && z1["Adj_Close"]){z1["ratio"]=z1["Adj_Close"] / z1["Close"];}if(z1["ratio"] != 1){if(z1["Open"]){z1["Open"]=Number((z1["Open"] * z1["ratio"])["toFixed"]("8" | 0));}if(z1["Close"]){z1["Close"]=Number((z1["Close"] * z1["ratio"])["toFixed"](8));}if(z1["High"]){z1["High"]=Number((z1["High"] * z1["ratio"])["toFixed"](8));}if(z1["Low"]){z1["Low"]=Number((z1["Low"] * z1["ratio"])["toFixed"](8));}}}}}l5=this["preferences"]["whitespace"] / this["layout"]["candleWidth"];N8=u$["scroll"] >= u$["maxTicks"];if(N8){u$["spanLock"]=![];;}u$["defaultChartStyleConfig"]={type:I5["chartType"]};m0=I5["aggregationType"];if(m0 && m0 != "ohlc"){if(!r["ChartEngine"]["calculateAggregation"]){h3=-1245766865;H4["e9"](3);o5=-H4["Y0"](0,"552035569");I0=2;for(var p6=1;H4["b7"](p6["toString"](),p6["toString"]()["length"],58546) !== h3;p6++){console["log"]("");I0+=2;}if(H4["N6"](I0["toString"](),I0["toString"]()["length"],77106) !== o5){console["log"]("Aggregation code is not loaded/enabled!");}}else {u$["defaultChartStyleConfig"]["type"]=m0;if(!F4 || !u$["state"]["aggregation"]){u$["state"]["aggregation"]={};}k5=r["ChartEngine"]["calculateAggregation"](this,m0,k5,S$);}}u$["spanLock"]=u$["scroll"] > 0 && u$["scroll"] < u$["maxTicks"] - l5;y3=N8 || u$["lockScroll"] || u$["spanLock"] || this["isHistoricalModeSet"];U9=k5["length"] - (c2 - S$["length"]);if(!F4){U9=0;}if(U9){if(u$["spanLock"] && U9 + u$["scroll"] >= u$["maxTicks"] - l5){u$["spanLock"]=![];}else if(y3 || U9 < 0){W4=-1936734293;H4["e9"](13);l$=H4["C1"]("1847954932",52);J2=2;for(var j0=1;H4["N6"](j0["toString"](),j0["toString"]()["length"],34149) !== W4;j0++){u$["scroll"]/=U9;J2+=2;}if(H4["N6"](J2["toString"](),J2["toString"]()["length"],41414) !== l$){u$["scroll"]%=U9;}u$["scroll"]+=U9;this["grabStartScrollX"]+=U9;if(this["swipe"]){this["swipe"]["scroll"]+=U9;}}}if(this["transformDataSetPost"]){this["transformDataSetPost"](this,k5,p_,g$);}s6=this["maxDataSetSize"];if(s6){if(S$["length"] + k5["length"] > s6){if(k5["length"] < s6){v9=322251230;H4["G3"](13);a1=-H4["C1"]("1766688161",0);H4["e9"](13);n4=H4["Y0"]("2",2);for(var k7="1" >> 32;H4["N6"](k7["toString"](),k7["toString"]()["length"],78550) !== v9;k7++){S$=S$["slice"](k5["length"] / s6);n4+=+"2";}if(H4["N6"](n4["toString"](),n4["toString"]()["length"],+"28335") !== a1){S$=S$["slice"](k5["length"] - s6);}}else {F8=-1548999724;W2=-485612428;m8=2;for(var M8=1;H4["N6"](M8["toString"](),M8["toString"]()["length"],43688) !== F8;M8++){S$=[];m8+=+"2";}if(H4["N6"](m8["toString"](),m8["toString"]()["length"],51258) !== W2){S$=[];}S$=[];}t9=1957237187;s7=1310304577;u6=2;for(var g0="1" >> 64;H4["b7"](g0["toString"](),g0["toString"]()["length"],88187) !== t9;g0++){k5=k5["slice"](!s6);u6+=2;}if(H4["b7"](u6["toString"](),u6["toString"]()["length"],47783) !== s7){k5=k5["slice"](-s6);}}}if(!u$["scrubbed"]){u$["scrubbed"]=[];}if(S$["length"]){B7=S$[S$["length"] - 1]["DT"];while(u$["scrubbed"]["length"] && u$["scrubbed"][u$["scrubbed"]["length"] - 1]["DT"] > B7){u$["scrubbed"]["pop"]();}}else {u$["scrubbed"]=[];}if(!u$["state"]["studies"]){u$["state"]["studies"]={};}u$["state"]["studies"]["startFrom"]=u$["scrubbed"]["length"];M7=[];for(u3="0" ^ 0;u3 < k5["length"];u3++){z_=k5[u3];if(z_["Close"] || z_["Close"] === 0){M7["push"](z_);}else if(z_["DT"] > Date["now"]()){M7["push"](z_);};}u$["scrubbed"]=u$["scrubbed"]["concat"](M7);if(!F4 || !u$["state"]["calculations"]){u$["state"]["calculations"]={};}this["calculateATR"](u$,20,M7);this["calculateMedianPrice"](u$,M7);this["calculateTypicalPrice"](u$,M7);this["calculateWeightedClose"](u$,M7);this["calculateOHLC4"](u$,M7);for(O4 in this["plugins"]){c9=this["plugins"][O4];if(c9["createDataSet"]){c9["createDataSet"](this,u$,k5,S$["length"]);}}u$["dataSet"]=S$["concat"](k5);u$["pixelCacheExpired"]=!"";for(O4=S$["length"];O4 < u$["dataSet"]["length"];O4++){u$["dataSet"][O4]["tick"]=O4;}u$["whiteSpaceFutureTicks"]=0;Y6=this["layout"]["studies"];f1=u$["scrubbed"]["length"];if(Y6 && Object["keys"](Y6)["length"]){O_=u$["state"]["studies"]["sorted"] || r["Studies"]["sortForProcessing"](this);n8=this;u$["state"]["studies"]["sorted"]=O_;O_["forEach"](function(h8){H4.y8();var V_=1255700524,Q6=175410392,E0=-591173060,V6=1304101577,S3=-415003644,E5=2003495431,R6=-1458610870,V$=1686328190;if(!(H4.a6(0,false,459657) !== V_ && H4.M9(0,false,462428) !== Q6 && H4.M9(16,true,278530) !== E0 && H4.M9(15,true,653021) !== V6 && H4.O8(0,false,615388,7) !== S3 && H4.O8(0,false,537935,11) !== E5 && H4.V8(0,false,965002,11) !== R6 && H4.V8(0,false,620427,11) !== V$)){var w_,N5,r7;h8["startFrom"]=u$["state"]["studies"]["startFrom"];h8["error"]=null;if(!h8["disabled"] || h8["checkDisabled"]){if(h8["study"] && h8["study"]["calculateFN"]){h8["study"]["calculateFN"](n8,h8);}H4["e9"](1);w_=H4["Y0"]("272497651",32);N5=-722300801;r7=2;for(var P9=1;H4["N6"](P9["toString"](),P9["toString"]()["length"],"84394" << 0) !== w_;P9++){if(h8["flagSignals"]){h8["flagSignals"]();}r7+=2;}if(H4["b7"](r7["toString"](),r7["toString"]()["length"],53907) !== N5){if(h8["flagSignals"]){h8["flagSignals"]();}}}}});}for(O4=f1;O4 < u$["scrubbed"]["length"];O4++){S7=u$["scrubbed"][O4];S7["tick"]=u$["dataSet"]["length"];u$["dataSet"]["push"](S7);}if(this["drawingObjects"]["length"]){this["adjustDrawings"]();}if(this["establishMarkerTicks"]){this["establishMarkerTicks"]();}this["runAppend"]("createDataSet",c5);}};W=Symbol.for(d4);};/* eslint-enable  */ /* jshint ignore:end   */ /* ignore jslint end   */


let _exports = {};
__js_core__init_(_exports);
__js_core__polyfills_(_exports);
__js_core_browserDetect_(_exports);
__js_core_canvasutil_(_exports);
__js_core_color_(_exports);
__js_core_date_(_exports);
__js_core_dom_(_exports);
__js_core_engineInit_(_exports);
__js_core_formatData_(_exports);
__js_core_math_(_exports);
__js_core_object_(_exports);
__js_core_plotter_(_exports);
__js_core_renderer_(_exports);
__js_core_string_(_exports);
__js_core_typedefs_(_exports);
__js_core_xhr_(_exports);
__js_core_engine_accessory_(_exports);
__js_core_engine_baselines_(_exports);
__js_core_engine_chart_(_exports);
__js_core_engine_convert_(_exports);
__js_core_engine_crosshair_(_exports);
__js_core_engine_data_(_exports);
__js_core_engine_event_(_exports);
__js_core_engine_injection_(_exports);
__js_core_engine_misc_(_exports);
__js_core_engine_panel_(_exports);
__js_core_engine_periodicity_(_exports);
__js_core_engine_record_(_exports);
__js_core_engine_render_(_exports);
__js_core_engine_styles_(_exports);
__js_core_engine_xaxis_(_exports);
__js_core_engine_yaxis_(_exports);
__js_core_engine_obfuscate_data_(_exports);
__js_core_engine_obfuscate_render_(_exports);
__js_core_engine_obfuscate_scroll_(_exports);
__js_core_engine_obfuscate_xaxis_(_exports);
__js_core_engine_obfuscate_yaxis_(_exports);

let {CIQ, SplinePlotter, timezoneJS, $$, $$$} = _exports;
export {CIQ, SplinePlotter, timezoneJS, $$, $$$};