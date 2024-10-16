(self["webpackChunkjiffy_upgraded"] = self["webpackChunkjiffy_upgraded"] || []).push([[7932],{

/***/ 10955:
/*!*****************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/bootstrap.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bootstrap: () => (/* binding */ bootstrap)
/* harmony export */ });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/utils */ 63158);
/* harmony import */ var _common_patching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/patching */ 20110);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ 49352);



var enabled = false;
function bootstrap() {
  if ((0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.isPlatformSupported)()) {
    (0,_common_patching__WEBPACK_IMPORTED_MODULE_1__.patchAll)();
    _state__WEBPACK_IMPORTED_MODULE_2__.state.bootstrapTime = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.now)();
    enabled = true;
  } else if (_common_utils__WEBPACK_IMPORTED_MODULE_0__.isBrowser) {
    console.log('[Elastic APM] platform is not supported!');
  }
  return enabled;
}

/***/ }),

/***/ 27593:
/*!**************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/after-frame.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ afterFrame)
/* harmony export */ });
var RAF_TIMEOUT = 100;
function afterFrame(callback) {
  var handler = function handler() {
    clearTimeout(timeout);
    cancelAnimationFrame(raf);
    setTimeout(callback);
  };
  var timeout = setTimeout(handler, RAF_TIMEOUT);
  var raf = requestAnimationFrame(handler);
}

/***/ }),

/***/ 21663:
/*!*************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/apm-server.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queue */ 77148);
/* harmony import */ var _throttle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./throttle */ 72531);
/* harmony import */ var _ndjson__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ndjson */ 55747);
/* harmony import */ var _truncate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./truncate */ 95885);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants */ 50894);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 63158);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./polyfills */ 30391);
/* harmony import */ var _compress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./compress */ 43043);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state */ 49352);
/* harmony import */ var _http_fetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./http/fetch */ 5624);
/* harmony import */ var _http_xhr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./http/xhr */ 70966);











var THROTTLE_INTERVAL = 60000;
var ApmServer = function () {
  function ApmServer(configService, loggingService) {
    this._configService = configService;
    this._loggingService = loggingService;
    this.queue = undefined;
    this.throttleEvents = _utils__WEBPACK_IMPORTED_MODULE_0__.noop;
  }
  var _proto = ApmServer.prototype;
  _proto.init = function init() {
    var _this = this;
    var queueLimit = this._configService.get('queueLimit');
    var flushInterval = this._configService.get('flushInterval');
    var limit = this._configService.get('eventsLimit');
    var onFlush = function onFlush(events) {
      var promise = _this.sendEvents(events);
      if (promise) {
        promise.catch(function (reason) {
          _this._loggingService.warn('Failed sending events!', _this._constructError(reason));
        });
      }
    };
    this.queue = new _queue__WEBPACK_IMPORTED_MODULE_1__["default"](onFlush, {
      queueLimit: queueLimit,
      flushInterval: flushInterval
    });
    this.throttleEvents = (0,_throttle__WEBPACK_IMPORTED_MODULE_2__["default"])(this.queue.add.bind(this.queue), function () {
      return _this._loggingService.warn('Dropped events due to throttling!');
    }, {
      limit: limit,
      interval: THROTTLE_INTERVAL
    });
    this._configService.observeEvent(_constants__WEBPACK_IMPORTED_MODULE_3__.QUEUE_FLUSH, function () {
      _this.queue.flush();
    });
  };
  _proto._postJson = function _postJson(endPoint, payload) {
    var _this2 = this;
    var headers = {
      'Content-Type': 'application/x-ndjson'
    };
    var apmRequest = this._configService.get('apmRequest');
    var params = {
      payload: payload,
      headers: headers,
      beforeSend: apmRequest
    };
    return (0,_compress__WEBPACK_IMPORTED_MODULE_4__.compressPayload)(params).catch(function (error) {
      if (_state__WEBPACK_IMPORTED_MODULE_5__.__DEV__) {
        _this2._loggingService.debug('Compressing the payload using CompressionStream API failed', error.message);
      }
      return params;
    }).then(function (result) {
      return _this2._makeHttpRequest('POST', endPoint, result);
    }).then(function (_ref) {
      var responseText = _ref.responseText;
      return responseText;
    });
  };
  _proto._constructError = function _constructError(reason) {
    var url = reason.url,
      status = reason.status,
      responseText = reason.responseText;
    if (typeof status == 'undefined') {
      return reason;
    }
    var message = url + ' HTTP status: ' + status;
    if (_state__WEBPACK_IMPORTED_MODULE_5__.__DEV__ && responseText) {
      try {
        var serverErrors = [];
        var response = JSON.parse(responseText);
        if (response.errors && response.errors.length > 0) {
          response.errors.forEach(function (err) {
            return serverErrors.push(err.message);
          });
          message += ' ' + serverErrors.join(',');
        }
      } catch (e) {
        this._loggingService.debug('Error parsing response from APM server', e);
      }
    }
    return new Error(message);
  };
  _proto._makeHttpRequest = function _makeHttpRequest(method, url, _temp) {
    var _ref2 = _temp === void 0 ? {} : _temp,
      _ref2$timeout = _ref2.timeout,
      timeout = _ref2$timeout === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_3__.HTTP_REQUEST_TIMEOUT : _ref2$timeout,
      payload = _ref2.payload,
      headers = _ref2.headers,
      beforeSend = _ref2.beforeSend;
    var sendCredentials = this._configService.get('sendCredentials');
    if (!beforeSend && (0,_http_fetch__WEBPACK_IMPORTED_MODULE_6__.shouldUseFetchWithKeepAlive)(method, payload)) {
      return (0,_http_fetch__WEBPACK_IMPORTED_MODULE_6__.sendFetchRequest)(method, url, {
        keepalive: true,
        timeout: timeout,
        payload: payload,
        headers: headers,
        sendCredentials: sendCredentials
      }).catch(function (reason) {
        if (reason instanceof TypeError) {
          return (0,_http_xhr__WEBPACK_IMPORTED_MODULE_7__.sendXHR)(method, url, {
            timeout: timeout,
            payload: payload,
            headers: headers,
            beforeSend: beforeSend,
            sendCredentials: sendCredentials
          });
        }
        throw reason;
      });
    }
    return (0,_http_xhr__WEBPACK_IMPORTED_MODULE_7__.sendXHR)(method, url, {
      timeout: timeout,
      payload: payload,
      headers: headers,
      beforeSend: beforeSend,
      sendCredentials: sendCredentials
    });
  };
  _proto.fetchConfig = function fetchConfig(serviceName, environment) {
    var _this3 = this;
    var _this$getEndpoints = this.getEndpoints(),
      configEndpoint = _this$getEndpoints.configEndpoint;
    if (!serviceName) {
      return _polyfills__WEBPACK_IMPORTED_MODULE_8__.Promise.reject('serviceName is required for fetching central config.');
    }
    configEndpoint += "?service.name=" + serviceName;
    if (environment) {
      configEndpoint += "&service.environment=" + environment;
    }
    var localConfig = this._configService.getLocalConfig();
    if (localConfig) {
      configEndpoint += "&ifnonematch=" + localConfig.etag;
    }
    var apmRequest = this._configService.get('apmRequest');
    return this._makeHttpRequest('GET', configEndpoint, {
      timeout: 5000,
      beforeSend: apmRequest
    }).then(function (xhr) {
      var status = xhr.status,
        responseText = xhr.responseText;
      if (status === 304) {
        return localConfig;
      } else {
        var remoteConfig = JSON.parse(responseText);
        var etag = xhr.getResponseHeader('etag');
        if (etag) {
          remoteConfig.etag = etag.replace(/["]/g, '');
          _this3._configService.setLocalConfig(remoteConfig, true);
        }
        return remoteConfig;
      }
    }).catch(function (reason) {
      var error = _this3._constructError(reason);
      return _polyfills__WEBPACK_IMPORTED_MODULE_8__.Promise.reject(error);
    });
  };
  _proto.createMetaData = function createMetaData() {
    var cfg = this._configService;
    var metadata = {
      service: {
        name: cfg.get('serviceName'),
        version: cfg.get('serviceVersion'),
        agent: {
          name: 'rum-js',
          version: cfg.version
        },
        language: {
          name: 'javascript'
        },
        environment: cfg.get('environment')
      },
      labels: cfg.get('context.tags')
    };
    return (0,_truncate__WEBPACK_IMPORTED_MODULE_9__.truncateModel)(_truncate__WEBPACK_IMPORTED_MODULE_9__.METADATA_MODEL, metadata);
  };
  _proto.addError = function addError(error) {
    var _this$throttleEvents;
    this.throttleEvents((_this$throttleEvents = {}, _this$throttleEvents[_constants__WEBPACK_IMPORTED_MODULE_3__.ERRORS] = error, _this$throttleEvents));
  };
  _proto.addTransaction = function addTransaction(transaction) {
    var _this$throttleEvents2;
    this.throttleEvents((_this$throttleEvents2 = {}, _this$throttleEvents2[_constants__WEBPACK_IMPORTED_MODULE_3__.TRANSACTIONS] = transaction, _this$throttleEvents2));
  };
  _proto.ndjsonErrors = function ndjsonErrors(errors, compress) {
    var key = compress ? 'e' : 'error';
    return errors.map(function (error) {
      var _NDJSON$stringify;
      return _ndjson__WEBPACK_IMPORTED_MODULE_10__["default"].stringify((_NDJSON$stringify = {}, _NDJSON$stringify[key] = compress ? (0,_compress__WEBPACK_IMPORTED_MODULE_4__.compressError)(error) : error, _NDJSON$stringify));
    });
  };
  _proto.ndjsonMetricsets = function ndjsonMetricsets(metricsets) {
    return metricsets.map(function (metricset) {
      return _ndjson__WEBPACK_IMPORTED_MODULE_10__["default"].stringify({
        metricset: metricset
      });
    }).join('');
  };
  _proto.ndjsonTransactions = function ndjsonTransactions(transactions, compress) {
    var _this4 = this;
    var key = compress ? 'x' : 'transaction';
    return transactions.map(function (tr) {
      var _NDJSON$stringify2;
      var spans = '',
        breakdowns = '';
      if (!compress) {
        if (tr.spans) {
          spans = tr.spans.map(function (span) {
            return _ndjson__WEBPACK_IMPORTED_MODULE_10__["default"].stringify({
              span: span
            });
          }).join('');
          delete tr.spans;
        }
        if (tr.breakdown) {
          breakdowns = _this4.ndjsonMetricsets(tr.breakdown);
          delete tr.breakdown;
        }
      }
      return _ndjson__WEBPACK_IMPORTED_MODULE_10__["default"].stringify((_NDJSON$stringify2 = {}, _NDJSON$stringify2[key] = compress ? (0,_compress__WEBPACK_IMPORTED_MODULE_4__.compressTransaction)(tr) : tr, _NDJSON$stringify2)) + spans + breakdowns;
    });
  };
  _proto.sendEvents = function sendEvents(events) {
    var _payload, _NDJSON$stringify3;
    if (events.length === 0) {
      return;
    }
    var transactions = [];
    var errors = [];
    for (var i = 0; i < events.length; i++) {
      var event = events[i];
      if (event[_constants__WEBPACK_IMPORTED_MODULE_3__.TRANSACTIONS]) {
        transactions.push(event[_constants__WEBPACK_IMPORTED_MODULE_3__.TRANSACTIONS]);
      }
      if (event[_constants__WEBPACK_IMPORTED_MODULE_3__.ERRORS]) {
        errors.push(event[_constants__WEBPACK_IMPORTED_MODULE_3__.ERRORS]);
      }
    }
    if (transactions.length === 0 && errors.length === 0) {
      return;
    }
    var cfg = this._configService;
    var payload = (_payload = {}, _payload[_constants__WEBPACK_IMPORTED_MODULE_3__.TRANSACTIONS] = transactions, _payload[_constants__WEBPACK_IMPORTED_MODULE_3__.ERRORS] = errors, _payload);
    var filteredPayload = cfg.applyFilters(payload);
    if (!filteredPayload) {
      this._loggingService.warn('Dropped payload due to filtering!');
      return;
    }
    var apiVersion = cfg.get('apiVersion');
    var compress = apiVersion > 2;
    var ndjson = [];
    var metadata = this.createMetaData();
    var metadataKey = compress ? 'm' : 'metadata';
    ndjson.push(_ndjson__WEBPACK_IMPORTED_MODULE_10__["default"].stringify((_NDJSON$stringify3 = {}, _NDJSON$stringify3[metadataKey] = compress ? (0,_compress__WEBPACK_IMPORTED_MODULE_4__.compressMetadata)(metadata) : metadata, _NDJSON$stringify3)));
    ndjson = ndjson.concat(this.ndjsonErrors(filteredPayload[_constants__WEBPACK_IMPORTED_MODULE_3__.ERRORS], compress), this.ndjsonTransactions(filteredPayload[_constants__WEBPACK_IMPORTED_MODULE_3__.TRANSACTIONS], compress));
    var ndjsonPayload = ndjson.join('');
    var _this$getEndpoints2 = this.getEndpoints(),
      intakeEndpoint = _this$getEndpoints2.intakeEndpoint;
    return this._postJson(intakeEndpoint, ndjsonPayload);
  };
  _proto.getEndpoints = function getEndpoints() {
    var serverUrl = this._configService.get('serverUrl');
    var apiVersion = this._configService.get('apiVersion');
    var serverUrlPrefix = this._configService.get('serverUrlPrefix') || "/intake/v" + apiVersion + "/rum/events";
    var intakeEndpoint = serverUrl + serverUrlPrefix;
    var configEndpoint = serverUrl + "/config/v1/rum/agents";
    return {
      intakeEndpoint: intakeEndpoint,
      configEndpoint: configEndpoint
    };
  };
  return ApmServer;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApmServer);

/***/ }),

/***/ 43043:
/*!***********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/compress.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compressError: () => (/* binding */ compressError),
/* harmony export */   compressMetadata: () => (/* binding */ compressMetadata),
/* harmony export */   compressMetricsets: () => (/* binding */ compressMetricsets),
/* harmony export */   compressPayload: () => (/* binding */ compressPayload),
/* harmony export */   compressTransaction: () => (/* binding */ compressTransaction)
/* harmony export */ });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./polyfills */ 30391);
/* harmony import */ var _performance_monitoring_navigation_marks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../performance-monitoring/navigation/marks */ 47026);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ 63158);



function compressStackFrames(frames) {
  return frames.map(function (frame) {
    return {
      ap: frame.abs_path,
      f: frame.filename,
      fn: frame.function,
      li: frame.lineno,
      co: frame.colno
    };
  });
}
function compressResponse(response) {
  return {
    ts: response.transfer_size,
    ebs: response.encoded_body_size,
    dbs: response.decoded_body_size
  };
}
function compressHTTP(http) {
  var compressed = {};
  var method = http.method,
    status_code = http.status_code,
    url = http.url,
    response = http.response;
  compressed.url = url;
  if (method) {
    compressed.mt = method;
  }
  if (status_code) {
    compressed.sc = status_code;
  }
  if (response) {
    compressed.r = compressResponse(response);
  }
  return compressed;
}
function compressContext(context) {
  if (!context) {
    return null;
  }
  var compressed = {};
  var page = context.page,
    http = context.http,
    response = context.response,
    destination = context.destination,
    user = context.user,
    custom = context.custom;
  if (page) {
    compressed.p = {
      rf: page.referer,
      url: page.url
    };
  }
  if (http) {
    compressed.h = compressHTTP(http);
  }
  if (response) {
    compressed.r = compressResponse(response);
  }
  if (destination) {
    var service = destination.service;
    compressed.dt = {
      se: {
        n: service.name,
        t: service.type,
        rc: service.resource
      },
      ad: destination.address,
      po: destination.port
    };
  }
  if (user) {
    compressed.u = {
      id: user.id,
      un: user.username,
      em: user.email
    };
  }
  if (custom) {
    compressed.cu = custom;
  }
  return compressed;
}
function compressMarks(marks) {
  if (!marks) {
    return null;
  }
  var compressedNtMarks = compressNavigationTimingMarks(marks.navigationTiming);
  var compressed = {
    nt: compressedNtMarks,
    a: compressAgentMarks(compressedNtMarks, marks.agent)
  };
  return compressed;
}
function compressNavigationTimingMarks(ntMarks) {
  if (!ntMarks) {
    return null;
  }
  var compressed = {};
  _performance_monitoring_navigation_marks__WEBPACK_IMPORTED_MODULE_0__.COMPRESSED_NAV_TIMING_MARKS.forEach(function (mark, index) {
    var mapping = _performance_monitoring_navigation_marks__WEBPACK_IMPORTED_MODULE_0__.NAVIGATION_TIMING_MARKS[index];
    compressed[mark] = ntMarks[mapping];
  });
  return compressed;
}
function compressAgentMarks(compressedNtMarks, agentMarks) {
  var compressed = {};
  if (compressedNtMarks) {
    compressed = {
      fb: compressedNtMarks.rs,
      di: compressedNtMarks.di,
      dc: compressedNtMarks.dc
    };
  }
  if (agentMarks) {
    var fp = agentMarks.firstContentfulPaint;
    var lp = agentMarks.largestContentfulPaint;
    if (fp) {
      compressed.fp = fp;
    }
    if (lp) {
      compressed.lp = lp;
    }
  }
  if (Object.keys(compressed).length === 0) {
    return null;
  }
  return compressed;
}
function compressMetadata(metadata) {
  var service = metadata.service,
    labels = metadata.labels;
  var agent = service.agent,
    language = service.language;
  return {
    se: {
      n: service.name,
      ve: service.version,
      a: {
        n: agent.name,
        ve: agent.version
      },
      la: {
        n: language.name
      },
      en: service.environment
    },
    l: labels
  };
}
function compressTransaction(transaction) {
  var spans = transaction.spans.map(function (span) {
    var spanData = {
      id: span.id,
      n: span.name,
      t: span.type,
      s: span.start,
      d: span.duration,
      c: compressContext(span.context),
      o: span.outcome,
      sr: span.sample_rate
    };
    if (span.parent_id !== transaction.id) {
      spanData.pid = span.parent_id;
    }
    if (span.sync === true) {
      spanData.sy = true;
    }
    if (span.subtype) {
      spanData.su = span.subtype;
    }
    if (span.action) {
      spanData.ac = span.action;
    }
    return spanData;
  });
  var tr = {
    id: transaction.id,
    tid: transaction.trace_id,
    n: transaction.name,
    t: transaction.type,
    d: transaction.duration,
    c: compressContext(transaction.context),
    k: compressMarks(transaction.marks),
    me: compressMetricsets(transaction.breakdown),
    y: spans,
    yc: {
      sd: spans.length
    },
    sm: transaction.sampled,
    sr: transaction.sample_rate,
    o: transaction.outcome
  };
  if (transaction.experience) {
    var _transaction$experien = transaction.experience,
      cls = _transaction$experien.cls,
      fid = _transaction$experien.fid,
      tbt = _transaction$experien.tbt,
      longtask = _transaction$experien.longtask;
    tr.exp = {
      cls: cls,
      fid: fid,
      tbt: tbt,
      lt: longtask
    };
  }
  if (transaction.session) {
    var _transaction$session = transaction.session,
      id = _transaction$session.id,
      sequence = _transaction$session.sequence;
    tr.ses = {
      id: id,
      seq: sequence
    };
  }
  return tr;
}
function compressError(error) {
  var exception = error.exception;
  var compressed = {
    id: error.id,
    cl: error.culprit,
    ex: {
      mg: exception.message,
      st: compressStackFrames(exception.stacktrace),
      t: error.type
    },
    c: compressContext(error.context)
  };
  var transaction = error.transaction;
  if (transaction) {
    compressed.tid = error.trace_id;
    compressed.pid = error.parent_id;
    compressed.xid = error.transaction_id;
    compressed.x = {
      t: transaction.type,
      sm: transaction.sampled
    };
  }
  return compressed;
}
function compressMetricsets(breakdowns) {
  return breakdowns.map(function (_ref) {
    var span = _ref.span,
      samples = _ref.samples;
    return {
      y: {
        t: span.type
      },
      sa: {
        ysc: {
          v: samples['span.self_time.count'].value
        },
        yss: {
          v: samples['span.self_time.sum.us'].value
        }
      }
    };
  });
}
function compressPayload(params, type) {
  if (type === void 0) {
    type = 'gzip';
  }
  var isCompressionStreamSupported = typeof CompressionStream === 'function';
  return new _polyfills__WEBPACK_IMPORTED_MODULE_1__.Promise(function (resolve) {
    if (!isCompressionStreamSupported) {
      return resolve(params);
    }
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_2__.isBeaconInspectionEnabled)()) {
      return resolve(params);
    }
    var payload = params.payload,
      headers = params.headers,
      beforeSend = params.beforeSend;
    var payloadStream = new Blob([payload]).stream();
    var compressedStream = payloadStream.pipeThrough(new CompressionStream(type));
    return new Response(compressedStream).blob().then(function (payload) {
      headers['Content-Encoding'] = type;
      return resolve({
        payload: payload,
        headers: headers,
        beforeSend: beforeSend
      });
    });
  });
}

/***/ }),

/***/ 58463:
/*!*****************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/config-service.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 63158);
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event-handler */ 97938);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ 50894);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}



function getConfigFromScript() {
  var script = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getCurrentScript)();
  var config = getDataAttributesFromNode(script);
  return config;
}
function getDataAttributesFromNode(node) {
  if (!node) {
    return {};
  }
  var dataAttrs = {};
  var dataRegex = /^data-([\w-]+)$/;
  var attrs = node.attributes;
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (dataRegex.test(attr.nodeName)) {
      var key = attr.nodeName.match(dataRegex)[1];
      var camelCasedkey = key.split('-').map(function (value, index) {
        return index > 0 ? value.charAt(0).toUpperCase() + value.substring(1) : value;
      }).join('');
      dataAttrs[camelCasedkey] = attr.value || attr.nodeValue;
    }
  }
  return dataAttrs;
}
var Config = function () {
  function Config() {
    this.config = {
      serviceName: '',
      serviceVersion: '',
      environment: '',
      serverUrl: 'http://localhost:8200',
      serverUrlPrefix: '',
      active: true,
      instrument: true,
      disableInstrumentations: [],
      logLevel: 'warn',
      breakdownMetrics: false,
      ignoreTransactions: [],
      eventsLimit: 80,
      queueLimit: -1,
      flushInterval: 500,
      distributedTracing: true,
      distributedTracingOrigins: [],
      distributedTracingHeaderName: 'traceparent',
      pageLoadTraceId: '',
      pageLoadSpanId: '',
      pageLoadSampled: false,
      pageLoadTransactionName: '',
      propagateTracestate: false,
      transactionSampleRate: 1.0,
      centralConfig: false,
      monitorLongtasks: true,
      apiVersion: 2,
      context: {},
      session: false,
      apmRequest: null,
      sendCredentials: false
    };
    this.events = new _event_handler__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.filters = [];
    this.version = '';
  }
  var _proto = Config.prototype;
  _proto.init = function init() {
    var scriptData = getConfigFromScript();
    this.setConfig(scriptData);
  };
  _proto.setVersion = function setVersion(version) {
    this.version = version;
  };
  _proto.addFilter = function addFilter(cb) {
    if (typeof cb !== 'function') {
      throw new Error('Argument to must be function');
    }
    this.filters.push(cb);
  };
  _proto.applyFilters = function applyFilters(data) {
    for (var i = 0; i < this.filters.length; i++) {
      data = this.filters[i](data);
      if (!data) {
        return;
      }
    }
    return data;
  };
  _proto.get = function get(key) {
    return key.split('.').reduce(function (obj, objKey) {
      return obj && obj[objKey];
    }, this.config);
  };
  _proto.setUserContext = function setUserContext(userContext) {
    if (userContext === void 0) {
      userContext = {};
    }
    var context = {};
    var _userContext = userContext,
      id = _userContext.id,
      username = _userContext.username,
      email = _userContext.email;
    if (typeof id === 'number' || typeof id === 'string') {
      context.id = id;
    }
    if (typeof username === 'string') {
      context.username = username;
    }
    if (typeof email === 'string') {
      context.email = email;
    }
    this.config.context.user = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(this.config.context.user || {}, context);
  };
  _proto.setCustomContext = function setCustomContext(customContext) {
    if (customContext === void 0) {
      customContext = {};
    }
    this.config.context.custom = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(this.config.context.custom || {}, customContext);
  };
  _proto.addLabels = function addLabels(tags) {
    var _this = this;
    if (!this.config.context.tags) {
      this.config.context.tags = {};
    }
    var keys = Object.keys(tags);
    keys.forEach(function (k) {
      return (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setLabel)(k, tags[k], _this.config.context.tags);
    });
  };
  _proto.setConfig = function setConfig(properties) {
    if (properties === void 0) {
      properties = {};
    }
    var _properties = properties,
      transactionSampleRate = _properties.transactionSampleRate,
      serverUrl = _properties.serverUrl;
    if (serverUrl) {
      properties.serverUrl = serverUrl.replace(/\/+$/, '');
    }
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.isUndefined)(transactionSampleRate)) {
      if (transactionSampleRate < 0.0001 && transactionSampleRate > 0) {
        transactionSampleRate = 0.0001;
      }
      properties.transactionSampleRate = Math.round(transactionSampleRate * 10000) / 10000;
    }
    (0,_utils__WEBPACK_IMPORTED_MODULE_0__.merge)(this.config, properties);
    this.events.send(_constants__WEBPACK_IMPORTED_MODULE_2__.CONFIG_CHANGE, [this.config]);
  };
  _proto.validate = function validate(properties) {
    if (properties === void 0) {
      properties = {};
    }
    var requiredKeys = ['serviceName', 'serverUrl'];
    var allKeys = Object.keys(this.config);
    var errors = {
      missing: [],
      invalid: [],
      unknown: []
    };
    Object.keys(properties).forEach(function (key) {
      if (requiredKeys.indexOf(key) !== -1 && !properties[key]) {
        errors.missing.push(key);
      }
      if (allKeys.indexOf(key) === -1) {
        errors.unknown.push(key);
      }
    });
    if (properties.serviceName && !/^[a-zA-Z0-9 _-]+$/.test(properties.serviceName)) {
      errors.invalid.push({
        key: 'serviceName',
        value: properties.serviceName,
        allowed: 'a-z, A-Z, 0-9, _, -, <space>'
      });
    }
    var sampleRate = properties.transactionSampleRate;
    if (typeof sampleRate !== 'undefined' && (typeof sampleRate !== 'number' || isNaN(sampleRate) || sampleRate < 0 || sampleRate > 1)) {
      errors.invalid.push({
        key: 'transactionSampleRate',
        value: sampleRate,
        allowed: 'Number between 0 and 1'
      });
    }
    return errors;
  };
  _proto.getLocalConfig = function getLocalConfig() {
    var storage = sessionStorage;
    if (this.config.session) {
      storage = localStorage;
    }
    var config = storage.getItem(_constants__WEBPACK_IMPORTED_MODULE_2__.LOCAL_CONFIG_KEY);
    if (config) {
      return JSON.parse(config);
    }
  };
  _proto.setLocalConfig = function setLocalConfig(config, merge) {
    if (config) {
      if (merge) {
        var prevConfig = this.getLocalConfig();
        config = _extends({}, prevConfig, config);
      }
      var storage = sessionStorage;
      if (this.config.session) {
        storage = localStorage;
      }
      storage.setItem(_constants__WEBPACK_IMPORTED_MODULE_2__.LOCAL_CONFIG_KEY, JSON.stringify(config));
    }
  };
  _proto.dispatchEvent = function dispatchEvent(name, args) {
    this.events.send(name, args);
  };
  _proto.observeEvent = function observeEvent(name, fn) {
    return this.events.observe(name, fn);
  };
  return Config;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Config);

/***/ }),

/***/ 50894:
/*!************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/constants.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ADD_EVENT_LISTENER_STR: () => (/* binding */ ADD_EVENT_LISTENER_STR),
/* harmony export */   AFTER_EVENT: () => (/* binding */ AFTER_EVENT),
/* harmony export */   APM_SERVER: () => (/* binding */ APM_SERVER),
/* harmony export */   BEFORE_EVENT: () => (/* binding */ BEFORE_EVENT),
/* harmony export */   CLICK: () => (/* binding */ CLICK),
/* harmony export */   CONFIG_CHANGE: () => (/* binding */ CONFIG_CHANGE),
/* harmony export */   CONFIG_SERVICE: () => (/* binding */ CONFIG_SERVICE),
/* harmony export */   ERROR: () => (/* binding */ ERROR),
/* harmony export */   ERRORS: () => (/* binding */ ERRORS),
/* harmony export */   ERROR_LOGGING: () => (/* binding */ ERROR_LOGGING),
/* harmony export */   EVENT: () => (/* binding */ EVENT),
/* harmony export */   EVENT_TARGET: () => (/* binding */ EVENT_TARGET),
/* harmony export */   FETCH: () => (/* binding */ FETCH),
/* harmony export */   FIRST_CONTENTFUL_PAINT: () => (/* binding */ FIRST_CONTENTFUL_PAINT),
/* harmony export */   FIRST_INPUT: () => (/* binding */ FIRST_INPUT),
/* harmony export */   HISTORY: () => (/* binding */ HISTORY),
/* harmony export */   HTTP_REQUEST_TIMEOUT: () => (/* binding */ HTTP_REQUEST_TIMEOUT),
/* harmony export */   HTTP_REQUEST_TYPE: () => (/* binding */ HTTP_REQUEST_TYPE),
/* harmony export */   INVOKE: () => (/* binding */ INVOKE),
/* harmony export */   KEYWORD_LIMIT: () => (/* binding */ KEYWORD_LIMIT),
/* harmony export */   LARGEST_CONTENTFUL_PAINT: () => (/* binding */ LARGEST_CONTENTFUL_PAINT),
/* harmony export */   LAYOUT_SHIFT: () => (/* binding */ LAYOUT_SHIFT),
/* harmony export */   LOCAL_CONFIG_KEY: () => (/* binding */ LOCAL_CONFIG_KEY),
/* harmony export */   LOGGING_SERVICE: () => (/* binding */ LOGGING_SERVICE),
/* harmony export */   LONG_TASK: () => (/* binding */ LONG_TASK),
/* harmony export */   MAX_SPAN_DURATION: () => (/* binding */ MAX_SPAN_DURATION),
/* harmony export */   MEASURE: () => (/* binding */ MEASURE),
/* harmony export */   NAME_UNKNOWN: () => (/* binding */ NAME_UNKNOWN),
/* harmony export */   NAVIGATION: () => (/* binding */ NAVIGATION),
/* harmony export */   OUTCOME_FAILURE: () => (/* binding */ OUTCOME_FAILURE),
/* harmony export */   OUTCOME_SUCCESS: () => (/* binding */ OUTCOME_SUCCESS),
/* harmony export */   OUTCOME_UNKNOWN: () => (/* binding */ OUTCOME_UNKNOWN),
/* harmony export */   PAGE_EXIT: () => (/* binding */ PAGE_EXIT),
/* harmony export */   PAGE_LOAD: () => (/* binding */ PAGE_LOAD),
/* harmony export */   PAGE_LOAD_DELAY: () => (/* binding */ PAGE_LOAD_DELAY),
/* harmony export */   PAINT: () => (/* binding */ PAINT),
/* harmony export */   PERFORMANCE_MONITORING: () => (/* binding */ PERFORMANCE_MONITORING),
/* harmony export */   QUEUE_ADD_TRANSACTION: () => (/* binding */ QUEUE_ADD_TRANSACTION),
/* harmony export */   QUEUE_FLUSH: () => (/* binding */ QUEUE_FLUSH),
/* harmony export */   REMOVE_EVENT_LISTENER_STR: () => (/* binding */ REMOVE_EVENT_LISTENER_STR),
/* harmony export */   RESOURCE: () => (/* binding */ RESOURCE),
/* harmony export */   RESOURCE_INITIATOR_TYPES: () => (/* binding */ RESOURCE_INITIATOR_TYPES),
/* harmony export */   REUSABILITY_THRESHOLD: () => (/* binding */ REUSABILITY_THRESHOLD),
/* harmony export */   ROUTE_CHANGE: () => (/* binding */ ROUTE_CHANGE),
/* harmony export */   SCHEDULE: () => (/* binding */ SCHEDULE),
/* harmony export */   SESSION_TIMEOUT: () => (/* binding */ SESSION_TIMEOUT),
/* harmony export */   TEMPORARY_TYPE: () => (/* binding */ TEMPORARY_TYPE),
/* harmony export */   TRANSACTIONS: () => (/* binding */ TRANSACTIONS),
/* harmony export */   TRANSACTION_END: () => (/* binding */ TRANSACTION_END),
/* harmony export */   TRANSACTION_IGNORE: () => (/* binding */ TRANSACTION_IGNORE),
/* harmony export */   TRANSACTION_SERVICE: () => (/* binding */ TRANSACTION_SERVICE),
/* harmony export */   TRANSACTION_START: () => (/* binding */ TRANSACTION_START),
/* harmony export */   TRANSACTION_TYPE_ORDER: () => (/* binding */ TRANSACTION_TYPE_ORDER),
/* harmony export */   TRUNCATED_TYPE: () => (/* binding */ TRUNCATED_TYPE),
/* harmony export */   TYPE_CUSTOM: () => (/* binding */ TYPE_CUSTOM),
/* harmony export */   USER_INTERACTION: () => (/* binding */ USER_INTERACTION),
/* harmony export */   USER_TIMING_THRESHOLD: () => (/* binding */ USER_TIMING_THRESHOLD),
/* harmony export */   XMLHTTPREQUEST: () => (/* binding */ XMLHTTPREQUEST)
/* harmony export */ });
var SCHEDULE = 'schedule';
var INVOKE = 'invoke';
var ADD_EVENT_LISTENER_STR = 'addEventListener';
var REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
var RESOURCE_INITIATOR_TYPES = ['link', 'css', 'script', 'img', 'xmlhttprequest', 'fetch', 'beacon', 'iframe'];
var REUSABILITY_THRESHOLD = 5000;
var MAX_SPAN_DURATION = 5 * 60 * 1000;
var PAGE_LOAD_DELAY = 1000;
var PAGE_LOAD = 'page-load';
var ROUTE_CHANGE = 'route-change';
var TYPE_CUSTOM = 'custom';
var USER_INTERACTION = 'user-interaction';
var HTTP_REQUEST_TYPE = 'http-request';
var TEMPORARY_TYPE = 'temporary';
var NAME_UNKNOWN = 'Unknown';
var PAGE_EXIT = 'page-exit';
var TRANSACTION_TYPE_ORDER = [PAGE_LOAD, ROUTE_CHANGE, USER_INTERACTION, HTTP_REQUEST_TYPE, TYPE_CUSTOM, TEMPORARY_TYPE];
var OUTCOME_SUCCESS = 'success';
var OUTCOME_FAILURE = 'failure';
var OUTCOME_UNKNOWN = 'unknown';
var USER_TIMING_THRESHOLD = 60;
var TRANSACTION_START = 'transaction:start';
var TRANSACTION_END = 'transaction:end';
var CONFIG_CHANGE = 'config:change';
var QUEUE_FLUSH = 'queue:flush';
var QUEUE_ADD_TRANSACTION = 'queue:add_transaction';
var TRANSACTION_IGNORE = 'transaction:ignore';
var XMLHTTPREQUEST = 'xmlhttprequest';
var FETCH = 'fetch';
var HISTORY = 'history';
var EVENT_TARGET = 'eventtarget';
var CLICK = 'click';
var ERROR = 'error';
var BEFORE_EVENT = ':before';
var AFTER_EVENT = ':after';
var LOCAL_CONFIG_KEY = 'elastic_apm_config';
var LONG_TASK = 'longtask';
var PAINT = 'paint';
var MEASURE = 'measure';
var NAVIGATION = 'navigation';
var RESOURCE = 'resource';
var FIRST_CONTENTFUL_PAINT = 'first-contentful-paint';
var LARGEST_CONTENTFUL_PAINT = 'largest-contentful-paint';
var FIRST_INPUT = 'first-input';
var LAYOUT_SHIFT = 'layout-shift';
var EVENT = 'event';
var ERRORS = 'errors';
var TRANSACTIONS = 'transactions';
var CONFIG_SERVICE = 'ConfigService';
var LOGGING_SERVICE = 'LoggingService';
var TRANSACTION_SERVICE = 'TransactionService';
var APM_SERVER = 'ApmServer';
var PERFORMANCE_MONITORING = 'PerformanceMonitoring';
var ERROR_LOGGING = 'ErrorLogging';
var TRUNCATED_TYPE = '.truncated';
var KEYWORD_LIMIT = 1024;
var SESSION_TIMEOUT = 30 * 60000;
var HTTP_REQUEST_TIMEOUT = 10000;


/***/ }),

/***/ 30144:
/*!**********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/context.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addSpanContext: () => (/* binding */ addSpanContext),
/* harmony export */   addTransactionContext: () => (/* binding */ addTransactionContext),
/* harmony export */   getPageContext: () => (/* binding */ getPageContext)
/* harmony export */ });
/* harmony import */ var _url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./url */ 77146);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants */ 50894);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 63158);
var _excluded = ["tags"];
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}



var LEFT_SQUARE_BRACKET = 91;
var RIGHT_SQUARE_BRACKET = 93;
var EXTERNAL = 'external';
var RESOURCE = 'resource';
var HARD_NAVIGATION = 'hard-navigation';
function getPortNumber(port, protocol) {
  if (port === '') {
    port = protocol === 'http:' ? '80' : protocol === 'https:' ? '443' : '';
  }
  return port;
}
function getResponseContext(perfTimingEntry) {
  var transferSize = perfTimingEntry.transferSize,
    encodedBodySize = perfTimingEntry.encodedBodySize,
    decodedBodySize = perfTimingEntry.decodedBodySize,
    serverTiming = perfTimingEntry.serverTiming;
  var respContext = {
    transfer_size: transferSize,
    encoded_body_size: encodedBodySize,
    decoded_body_size: decodedBodySize
  };
  var serverTimingStr = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getServerTimingInfo)(serverTiming);
  if (serverTimingStr) {
    respContext.headers = {
      'server-timing': serverTimingStr
    };
  }
  return respContext;
}
function getDestination(parsedUrl) {
  var port = parsedUrl.port,
    protocol = parsedUrl.protocol,
    hostname = parsedUrl.hostname;
  var portNumber = getPortNumber(port, protocol);
  var ipv6Hostname = hostname.charCodeAt(0) === LEFT_SQUARE_BRACKET && hostname.charCodeAt(hostname.length - 1) === RIGHT_SQUARE_BRACKET;
  var address = hostname;
  if (ipv6Hostname) {
    address = hostname.slice(1, -1);
  }
  return {
    service: {
      resource: hostname + ':' + portNumber,
      name: '',
      type: ''
    },
    address: address,
    port: Number(portNumber)
  };
}
function getResourceContext(data) {
  var entry = data.entry,
    url = data.url;
  var parsedUrl = new _url__WEBPACK_IMPORTED_MODULE_1__.Url(url);
  var destination = getDestination(parsedUrl);
  return {
    http: {
      url: url,
      response: getResponseContext(entry)
    },
    destination: destination
  };
}
function getExternalContext(data) {
  var url = data.url,
    method = data.method,
    target = data.target,
    response = data.response;
  var parsedUrl = new _url__WEBPACK_IMPORTED_MODULE_1__.Url(url);
  var destination = getDestination(parsedUrl);
  var context = {
    http: {
      method: method,
      url: parsedUrl.href
    },
    destination: destination
  };
  var statusCode;
  if (target && typeof target.status !== 'undefined') {
    statusCode = target.status;
  } else if (response) {
    statusCode = response.status;
  }
  context.http.status_code = statusCode;
  return context;
}
function getNavigationContext(data) {
  var url = data.url;
  var parsedUrl = new _url__WEBPACK_IMPORTED_MODULE_1__.Url(url);
  var destination = getDestination(parsedUrl);
  return {
    destination: destination
  };
}
function getPageContext() {
  return {
    page: {
      referer: document.referrer,
      url: location.href
    }
  };
}
function addSpanContext(span, data) {
  if (!data) {
    return;
  }
  var type = span.type;
  var context;
  switch (type) {
    case EXTERNAL:
      context = getExternalContext(data);
      break;
    case RESOURCE:
      context = getResourceContext(data);
      break;
    case HARD_NAVIGATION:
      context = getNavigationContext(data);
      break;
  }
  span.addContext(context);
}
function addTransactionContext(transaction, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
    tags = _ref.tags,
    configContext = _objectWithoutPropertiesLoose(_ref, _excluded);
  var pageContext = getPageContext();
  var responseContext = {};
  if (transaction.type === _constants__WEBPACK_IMPORTED_MODULE_2__.PAGE_EXIT) {
    transaction.ensureContext();
    if (transaction.context.page && transaction.context.page.url) {
      pageContext.page.url = transaction.context.page.url;
    }
  } else if (transaction.type === _constants__WEBPACK_IMPORTED_MODULE_2__.PAGE_LOAD && (0,_utils__WEBPACK_IMPORTED_MODULE_0__.isPerfTimelineSupported)()) {
    var entries = _utils__WEBPACK_IMPORTED_MODULE_0__.PERF.getEntriesByType(_constants__WEBPACK_IMPORTED_MODULE_2__.NAVIGATION);
    if (entries && entries.length > 0) {
      responseContext = {
        response: getResponseContext(entries[0])
      };
    }
  }
  transaction.addContext(pageContext, responseContext, configContext);
}

/***/ }),

/***/ 97938:
/*!****************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/event-handler.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ 50894);

var EventHandler = function () {
  function EventHandler() {
    this.observers = {};
  }
  var _proto = EventHandler.prototype;
  _proto.observe = function observe(name, fn) {
    var _this = this;
    if (typeof fn === 'function') {
      if (!this.observers[name]) {
        this.observers[name] = [];
      }
      this.observers[name].push(fn);
      return function () {
        var index = _this.observers[name].indexOf(fn);
        if (index > -1) {
          _this.observers[name].splice(index, 1);
        }
      };
    }
  };
  _proto.sendOnly = function sendOnly(name, args) {
    var obs = this.observers[name];
    if (obs) {
      obs.forEach(function (fn) {
        try {
          fn.apply(undefined, args);
        } catch (error) {
          console.log(error, error.stack);
        }
      });
    }
  };
  _proto.send = function send(name, args) {
    this.sendOnly(name + _constants__WEBPACK_IMPORTED_MODULE_0__.BEFORE_EVENT, args);
    this.sendOnly(name, args);
    this.sendOnly(name + _constants__WEBPACK_IMPORTED_MODULE_0__.AFTER_EVENT, args);
  };
  return EventHandler;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EventHandler);

/***/ }),

/***/ 5624:
/*!*************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/http/fetch.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BYTE_LIMIT: () => (/* binding */ BYTE_LIMIT),
/* harmony export */   isFetchSupported: () => (/* binding */ isFetchSupported),
/* harmony export */   sendFetchRequest: () => (/* binding */ sendFetchRequest),
/* harmony export */   shouldUseFetchWithKeepAlive: () => (/* binding */ shouldUseFetchWithKeepAlive)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ 50894);
/* harmony import */ var _response_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./response-status */ 92072);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}


var BYTE_LIMIT = 60 * 1000;
function shouldUseFetchWithKeepAlive(method, payload) {
  if (!isFetchSupported()) {
    return false;
  }
  var isKeepAliveSupported = 'keepalive' in new Request('');
  if (!isKeepAliveSupported) {
    return false;
  }
  var size = calculateSize(payload);
  return method === 'POST' && size < BYTE_LIMIT;
}
function sendFetchRequest(method, url, _ref) {
  var _ref$keepalive = _ref.keepalive,
    keepalive = _ref$keepalive === void 0 ? false : _ref$keepalive,
    _ref$timeout = _ref.timeout,
    timeout = _ref$timeout === void 0 ? _constants__WEBPACK_IMPORTED_MODULE_0__.HTTP_REQUEST_TIMEOUT : _ref$timeout,
    payload = _ref.payload,
    headers = _ref.headers,
    sendCredentials = _ref.sendCredentials;
  var timeoutConfig = {};
  if (typeof AbortController === 'function') {
    var controller = new AbortController();
    timeoutConfig.signal = controller.signal;
    setTimeout(function () {
      return controller.abort();
    }, timeout);
  }
  var fetchResponse;
  return window.fetch(url, _extends({
    body: payload,
    headers: headers,
    method: method,
    keepalive: keepalive,
    credentials: sendCredentials ? 'include' : 'omit'
  }, timeoutConfig)).then(function (response) {
    fetchResponse = response;
    return fetchResponse.text();
  }).then(function (responseText) {
    var bodyResponse = {
      url: url,
      status: fetchResponse.status,
      responseText: responseText
    };
    if (!(0,_response_status__WEBPACK_IMPORTED_MODULE_1__.isResponseSuccessful)(fetchResponse.status)) {
      throw bodyResponse;
    }
    return bodyResponse;
  });
}
function isFetchSupported() {
  return typeof window.fetch === 'function' && typeof window.Request === 'function';
}
function calculateSize(payload) {
  if (!payload) {
    return 0;
  }
  if (payload instanceof Blob) {
    return payload.size;
  }
  return new Blob([payload]).size;
}

/***/ }),

/***/ 92072:
/*!***********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/http/response-status.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isResponseSuccessful: () => (/* binding */ isResponseSuccessful)
/* harmony export */ });
function isResponseSuccessful(status) {
  if (status === 0 || status > 399 && status < 600) {
    return false;
  }
  return true;
}

/***/ }),

/***/ 70966:
/*!***********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/http/xhr.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sendXHR: () => (/* binding */ sendXHR)
/* harmony export */ });
/* harmony import */ var _patching_patch_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../patching/patch-utils */ 45404);
/* harmony import */ var _response_status__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./response-status */ 92072);
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills */ 30391);



function sendXHR(method, url, _ref) {
  var _ref$timeout = _ref.timeout,
    timeout = _ref$timeout === void 0 ? HTTP_REQUEST_TIMEOUT : _ref$timeout,
    payload = _ref.payload,
    headers = _ref.headers,
    beforeSend = _ref.beforeSend,
    sendCredentials = _ref.sendCredentials;
  return new _polyfills__WEBPACK_IMPORTED_MODULE_0__.Promise(function (resolve, reject) {
    var xhr = new window.XMLHttpRequest();
    xhr[_patching_patch_utils__WEBPACK_IMPORTED_MODULE_1__.XHR_IGNORE] = true;
    xhr.open(method, url, true);
    xhr.timeout = timeout;
    xhr.withCredentials = sendCredentials;
    if (headers) {
      for (var header in headers) {
        if (headers.hasOwnProperty(header)) {
          xhr.setRequestHeader(header, headers[header]);
        }
      }
    }
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        var status = xhr.status,
          responseText = xhr.responseText;
        if ((0,_response_status__WEBPACK_IMPORTED_MODULE_2__.isResponseSuccessful)(status)) {
          resolve(xhr);
        } else {
          reject({
            url: url,
            status: status,
            responseText: responseText
          });
        }
      }
    };
    xhr.onerror = function () {
      var status = xhr.status,
        responseText = xhr.responseText;
      reject({
        url: url,
        status: status,
        responseText: responseText
      });
    };
    var canSend = true;
    if (typeof beforeSend === 'function') {
      canSend = beforeSend({
        url: url,
        method: method,
        headers: headers,
        payload: payload,
        xhr: xhr
      });
    }
    if (canSend) {
      xhr.send(payload);
    } else {
      reject({
        url: url,
        status: 0,
        responseText: 'Request rejected by user configuration.'
      });
    }
  });
}

/***/ }),

/***/ 39130:
/*!*************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/instrument.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getInstrumentationFlags: () => (/* binding */ getInstrumentationFlags)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ 50894);

function getInstrumentationFlags(instrument, disabledInstrumentations) {
  var _flags;
  var flags = (_flags = {}, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__.XMLHTTPREQUEST] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__.FETCH] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__.HISTORY] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__.PAGE_LOAD] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__.EVENT_TARGET] = false, _flags[_constants__WEBPACK_IMPORTED_MODULE_0__.CLICK] = false, _flags);
  if (!instrument) {
    return flags;
  }
  Object.keys(flags).forEach(function (key) {
    if (disabledInstrumentations.indexOf(key) === -1) {
      flags[key] = true;
    }
  });
  return flags;
}

/***/ }),

/***/ 65292:
/*!******************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/logging-service.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 63158);

var LoggingService = function () {
  function LoggingService(spec) {
    if (spec === void 0) {
      spec = {};
    }
    this.levels = ['trace', 'debug', 'info', 'warn', 'error'];
    this.level = spec.level || 'warn';
    this.prefix = spec.prefix || '';
    this.resetLogMethods();
  }
  var _proto = LoggingService.prototype;
  _proto.shouldLog = function shouldLog(level) {
    return this.levels.indexOf(level) >= this.levels.indexOf(this.level);
  };
  _proto.setLevel = function setLevel(level) {
    if (level === this.level) {
      return;
    }
    this.level = level;
    this.resetLogMethods();
  };
  _proto.resetLogMethods = function resetLogMethods() {
    var _this = this;
    this.levels.forEach(function (level) {
      _this[level] = _this.shouldLog(level) ? log : _utils__WEBPACK_IMPORTED_MODULE_0__.noop;
      function log() {
        var normalizedLevel = level;
        if (level === 'trace' || level === 'debug') {
          normalizedLevel = 'info';
        }
        var args = arguments;
        args[0] = this.prefix + args[0];
        if (console) {
          var realMethod = console[normalizedLevel] || console.log;
          if (typeof realMethod === 'function') {
            realMethod.apply(console, args);
          }
        }
      }
    });
  };
  return LoggingService;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoggingService);

/***/ }),

/***/ 55747:
/*!*********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/ndjson.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var NDJSON = function () {
  function NDJSON() {}
  NDJSON.stringify = function stringify(object) {
    return JSON.stringify(object) + '\n';
  };
  return NDJSON;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NDJSON);

/***/ }),

/***/ 92140:
/*!************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/observers/page-clicks.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observePageClicks: () => (/* binding */ observePageClicks)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ 50894);

var INTERACTIVE_SELECTOR = 'a[data-transaction-name], button[data-transaction-name]';
function observePageClicks(transactionService) {
  var clickHandler = function clickHandler(event) {
    if (event.target instanceof Element) {
      createUserInteractionTransaction(transactionService, event.target);
    }
  };
  var eventName = 'click';
  var useCapture = true;
  window.addEventListener(eventName, clickHandler, useCapture);
  return function () {
    window.removeEventListener(eventName, clickHandler, useCapture);
  };
}
function createUserInteractionTransaction(transactionService, target) {
  var _getTransactionMetada = getTransactionMetadata(target),
    transactionName = _getTransactionMetada.transactionName,
    context = _getTransactionMetada.context;
  var tr = transactionService.startTransaction("Click - " + transactionName, _constants__WEBPACK_IMPORTED_MODULE_0__.USER_INTERACTION, {
    managed: true,
    canReuse: true,
    reuseThreshold: 300
  });
  if (tr && context) {
    tr.addContext(context);
  }
}
function getTransactionMetadata(target) {
  var metadata = {
    transactionName: null,
    context: null
  };
  metadata.transactionName = buildTransactionName(target);
  var classes = target.getAttribute('class');
  if (classes) {
    metadata.context = {
      custom: {
        classes: classes
      }
    };
  }
  return metadata;
}
function buildTransactionName(target) {
  var dtName = findCustomTransactionName(target);
  if (dtName) {
    return dtName;
  }
  var tagName = target.tagName.toLowerCase();
  var name = target.getAttribute('name');
  if (!!name) {
    return tagName + "[\"" + name + "\"]";
  }
  return tagName;
}
function findCustomTransactionName(target) {
  var trCustomNameAttribute = 'data-transaction-name';
  var fallbackName = target.getAttribute(trCustomNameAttribute);
  if (target.closest) {
    var element = target.closest(INTERACTIVE_SELECTOR);
    return element ? element.getAttribute(trCustomNameAttribute) : fallbackName;
  }
  return fallbackName;
}

/***/ }),

/***/ 78289:
/*!****************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/observers/page-visibility.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observePageVisibility: () => (/* binding */ observePageVisibility)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ 50894);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../state */ 49352);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ 63158);
/* harmony import */ var _performance_monitoring_metrics_inp_report__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../performance-monitoring/metrics/inp/report */ 29315);




function observePageVisibility(configService, transactionService) {
  if (document.visibilityState === 'hidden') {
    _state__WEBPACK_IMPORTED_MODULE_0__.state.lastHiddenStart = 0;
  }
  var visibilityChangeHandler = function visibilityChangeHandler() {
    if (document.visibilityState === 'hidden') {
      onPageHidden(configService, transactionService);
    }
  };
  var pageHideHandler = function pageHideHandler() {
    return onPageHidden(configService, transactionService);
  };
  var useCapture = true;
  window.addEventListener('visibilitychange', visibilityChangeHandler, useCapture);
  window.addEventListener('pagehide', pageHideHandler, useCapture);
  return function () {
    window.removeEventListener('visibilitychange', visibilityChangeHandler, useCapture);
    window.removeEventListener('pagehide', pageHideHandler, useCapture);
  };
}
function onPageHidden(configService, transactionService) {
  var inpTr = (0,_performance_monitoring_metrics_inp_report__WEBPACK_IMPORTED_MODULE_1__.reportInp)(transactionService);
  if (inpTr) {
    var unobserve = configService.observeEvent(_constants__WEBPACK_IMPORTED_MODULE_2__.QUEUE_ADD_TRANSACTION, function () {
      endManagedTransaction(configService, transactionService);
      unobserve();
    });
  } else {
    endManagedTransaction(configService, transactionService);
  }
}
function endManagedTransaction(configService, transactionService) {
  var tr = transactionService.getCurrentTransaction();
  if (tr) {
    var unobserveDiscard = configService.observeEvent(_constants__WEBPACK_IMPORTED_MODULE_2__.TRANSACTION_IGNORE, function () {
      _state__WEBPACK_IMPORTED_MODULE_0__.state.lastHiddenStart = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.now)();
      unobserveDiscard();
      unobserveQueueAdd();
    });
    var unobserveQueueAdd = configService.observeEvent(_constants__WEBPACK_IMPORTED_MODULE_2__.QUEUE_ADD_TRANSACTION, function () {
      configService.dispatchEvent(_constants__WEBPACK_IMPORTED_MODULE_2__.QUEUE_FLUSH);
      _state__WEBPACK_IMPORTED_MODULE_0__.state.lastHiddenStart = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.now)();
      unobserveQueueAdd();
      unobserveDiscard();
    });
    tr.end();
  } else {
    configService.dispatchEvent(_constants__WEBPACK_IMPORTED_MODULE_2__.QUEUE_FLUSH);
    _state__WEBPACK_IMPORTED_MODULE_0__.state.lastHiddenStart = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.now)();
  }
}

/***/ }),

/***/ 7269:
/*!***********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/fetch-patch.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   patchFetch: () => (/* binding */ patchFetch)
/* harmony export */ });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../polyfills */ 30391);
/* harmony import */ var _patch_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patch-utils */ 45404);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ 50894);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ 63158);
/* harmony import */ var _http_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../http/fetch */ 5624);





function patchFetch(callback) {
  if (!(0,_http_fetch__WEBPACK_IMPORTED_MODULE_0__.isFetchSupported)()) {
    return;
  }
  function scheduleTask(task) {
    task.state = _constants__WEBPACK_IMPORTED_MODULE_1__.SCHEDULE;
    callback(_constants__WEBPACK_IMPORTED_MODULE_1__.SCHEDULE, task);
  }
  function invokeTask(task) {
    task.state = _constants__WEBPACK_IMPORTED_MODULE_1__.INVOKE;
    callback(_constants__WEBPACK_IMPORTED_MODULE_1__.INVOKE, task);
  }
  function handleResponseError(task, error) {
    task.data.aborted = isAbortError(error);
    task.data.error = error;
    invokeTask(task);
  }
  function readStream(stream, task) {
    var reader = stream.getReader();
    var read = function read() {
      reader.read().then(function (_ref) {
        var done = _ref.done;
        if (done) {
          invokeTask(task);
        } else {
          read();
        }
      }, function (error) {
        handleResponseError(task, error);
      });
    };
    read();
  }
  var nativeFetch = window.fetch;
  window.fetch = function (input, init) {
    var fetchSelf = this;
    var args = arguments;
    var request, url;
    var isURL = input instanceof URL;
    if (typeof input === 'string' || isURL) {
      request = new Request(input, init);
      if (isURL) {
        url = request.url;
      } else {
        url = input;
      }
    } else if (input) {
      request = input;
      url = request.url;
    } else {
      return nativeFetch.apply(fetchSelf, args);
    }
    var task = {
      source: _constants__WEBPACK_IMPORTED_MODULE_1__.FETCH,
      state: '',
      type: 'macroTask',
      data: {
        target: request,
        method: request.method,
        url: url,
        aborted: false
      }
    };
    return new _polyfills__WEBPACK_IMPORTED_MODULE_2__.Promise(function (resolve, reject) {
      _patch_utils__WEBPACK_IMPORTED_MODULE_3__.globalState.fetchInProgress = true;
      scheduleTask(task);
      var promise;
      try {
        promise = nativeFetch.apply(fetchSelf, [request]);
      } catch (error) {
        reject(error);
        task.data.error = error;
        invokeTask(task);
        _patch_utils__WEBPACK_IMPORTED_MODULE_3__.globalState.fetchInProgress = false;
        return;
      }
      promise.then(function (response) {
        var clonedResponse = response.clone ? response.clone() : {};
        resolve(response);
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.scheduleMicroTask)(function () {
          task.data.response = response;
          var body = clonedResponse.body;
          if (body) {
            readStream(body, task);
          } else {
            invokeTask(task);
          }
        });
      }, function (error) {
        reject(error);
        (0,_utils__WEBPACK_IMPORTED_MODULE_4__.scheduleMicroTask)(function () {
          handleResponseError(task, error);
        });
      });
      _patch_utils__WEBPACK_IMPORTED_MODULE_3__.globalState.fetchInProgress = false;
    });
  };
}
function isAbortError(error) {
  return error && error.name === 'AbortError';
}

/***/ }),

/***/ 43477:
/*!*************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/history-patch.js ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   patchHistory: () => (/* binding */ patchHistory)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ 50894);

function patchHistory(callback) {
  if (!window.history) {
    return;
  }
  var nativePushState = history.pushState;
  if (typeof nativePushState === 'function') {
    history.pushState = function (state, title, url) {
      var task = {
        source: _constants__WEBPACK_IMPORTED_MODULE_0__.HISTORY,
        data: {
          state: state,
          title: title,
          url: url
        }
      };
      callback(_constants__WEBPACK_IMPORTED_MODULE_0__.INVOKE, task);
      nativePushState.apply(this, arguments);
    };
  }
}

/***/ }),

/***/ 20110:
/*!*****************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   patchAll: () => (/* binding */ patchAll),
/* harmony export */   patchEventHandler: () => (/* binding */ patchEventHandler)
/* harmony export */ });
/* harmony import */ var _xhr_patch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./xhr-patch */ 41299);
/* harmony import */ var _fetch_patch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fetch-patch */ 7269);
/* harmony import */ var _history_patch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history-patch */ 43477);
/* harmony import */ var _event_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../event-handler */ 97938);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants */ 50894);





var patchEventHandler = new _event_handler__WEBPACK_IMPORTED_MODULE_0__["default"]();
var alreadyPatched = false;
function patchAll() {
  if (!alreadyPatched) {
    alreadyPatched = true;
    (0,_xhr_patch__WEBPACK_IMPORTED_MODULE_1__.patchXMLHttpRequest)(function (event, task) {
      patchEventHandler.send(_constants__WEBPACK_IMPORTED_MODULE_2__.XMLHTTPREQUEST, [event, task]);
    });
    (0,_fetch_patch__WEBPACK_IMPORTED_MODULE_3__.patchFetch)(function (event, task) {
      patchEventHandler.send(_constants__WEBPACK_IMPORTED_MODULE_2__.FETCH, [event, task]);
    });
    (0,_history_patch__WEBPACK_IMPORTED_MODULE_4__.patchHistory)(function (event, task) {
      patchEventHandler.send(_constants__WEBPACK_IMPORTED_MODULE_2__.HISTORY, [event, task]);
    });
  }
  return patchEventHandler;
}


/***/ }),

/***/ 45404:
/*!***********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/patch-utils.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XHR_IGNORE: () => (/* binding */ XHR_IGNORE),
/* harmony export */   XHR_METHOD: () => (/* binding */ XHR_METHOD),
/* harmony export */   XHR_SYNC: () => (/* binding */ XHR_SYNC),
/* harmony export */   XHR_URL: () => (/* binding */ XHR_URL),
/* harmony export */   apmSymbol: () => (/* binding */ apmSymbol),
/* harmony export */   globalState: () => (/* binding */ globalState),
/* harmony export */   patchMethod: () => (/* binding */ patchMethod)
/* harmony export */ });
var globalState = {
  fetchInProgress: false
};
function apmSymbol(name) {
  return '__apm_symbol__' + name;
}
function isPropertyWritable(propertyDesc) {
  if (!propertyDesc) {
    return true;
  }
  if (propertyDesc.writable === false) {
    return false;
  }
  return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
function attachOriginToPatched(patched, original) {
  patched[apmSymbol('OriginalDelegate')] = original;
}
function patchMethod(target, name, patchFn) {
  var proto = target;
  while (proto && !proto.hasOwnProperty(name)) {
    proto = Object.getPrototypeOf(proto);
  }
  if (!proto && target[name]) {
    proto = target;
  }
  var delegateName = apmSymbol(name);
  var delegate;
  if (proto && !(delegate = proto[delegateName])) {
    delegate = proto[delegateName] = proto[name];
    var desc = proto && Object.getOwnPropertyDescriptor(proto, name);
    if (isPropertyWritable(desc)) {
      var patchDelegate = patchFn(delegate, delegateName, name);
      proto[name] = function () {
        return patchDelegate(this, arguments);
      };
      attachOriginToPatched(proto[name], delegate);
    }
  }
  return delegate;
}
var XHR_IGNORE = apmSymbol('xhrIgnore');
var XHR_SYNC = apmSymbol('xhrSync');
var XHR_URL = apmSymbol('xhrURL');
var XHR_METHOD = apmSymbol('xhrMethod');

/***/ }),

/***/ 41299:
/*!*********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/patching/xhr-patch.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   patchXMLHttpRequest: () => (/* binding */ patchXMLHttpRequest)
/* harmony export */ });
/* harmony import */ var _patch_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patch-utils */ 45404);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ 50894);


function patchXMLHttpRequest(callback) {
  var XMLHttpRequestPrototype = XMLHttpRequest.prototype;
  if (!XMLHttpRequestPrototype || !XMLHttpRequestPrototype[_constants__WEBPACK_IMPORTED_MODULE_0__.ADD_EVENT_LISTENER_STR]) {
    return;
  }
  var READY_STATE_CHANGE = 'readystatechange';
  var LOAD = 'load';
  var ERROR = 'error';
  var TIMEOUT = 'timeout';
  var ABORT = 'abort';
  function invokeTask(task, status) {
    if (task.state !== _constants__WEBPACK_IMPORTED_MODULE_0__.INVOKE) {
      task.state = _constants__WEBPACK_IMPORTED_MODULE_0__.INVOKE;
      task.data.status = status;
      callback(_constants__WEBPACK_IMPORTED_MODULE_0__.INVOKE, task);
    }
  }
  function scheduleTask(task) {
    if (task.state === _constants__WEBPACK_IMPORTED_MODULE_0__.SCHEDULE) {
      return;
    }
    task.state = _constants__WEBPACK_IMPORTED_MODULE_0__.SCHEDULE;
    callback(_constants__WEBPACK_IMPORTED_MODULE_0__.SCHEDULE, task);
    var target = task.data.target;
    function addListener(name) {
      target[_constants__WEBPACK_IMPORTED_MODULE_0__.ADD_EVENT_LISTENER_STR](name, function (_ref) {
        var type = _ref.type;
        if (type === READY_STATE_CHANGE) {
          if (target.readyState === 4 && target.status !== 0) {
            invokeTask(task, 'success');
          }
        } else {
          var status = type === LOAD ? 'success' : type;
          invokeTask(task, status);
        }
      });
    }
    addListener(READY_STATE_CHANGE);
    addListener(LOAD);
    addListener(TIMEOUT);
    addListener(ERROR);
    addListener(ABORT);
  }
  var openNative = (0,_patch_utils__WEBPACK_IMPORTED_MODULE_1__.patchMethod)(XMLHttpRequestPrototype, 'open', function () {
    return function (self, args) {
      if (!self[_patch_utils__WEBPACK_IMPORTED_MODULE_1__.XHR_IGNORE]) {
        self[_patch_utils__WEBPACK_IMPORTED_MODULE_1__.XHR_METHOD] = args[0];
        self[_patch_utils__WEBPACK_IMPORTED_MODULE_1__.XHR_URL] = args[1];
        self[_patch_utils__WEBPACK_IMPORTED_MODULE_1__.XHR_SYNC] = args[2] === false;
      }
      return openNative.apply(self, args);
    };
  });
  var sendNative = (0,_patch_utils__WEBPACK_IMPORTED_MODULE_1__.patchMethod)(XMLHttpRequestPrototype, 'send', function () {
    return function (self, args) {
      if (self[_patch_utils__WEBPACK_IMPORTED_MODULE_1__.XHR_IGNORE]) {
        return sendNative.apply(self, args);
      }
      var task = {
        source: _constants__WEBPACK_IMPORTED_MODULE_0__.XMLHTTPREQUEST,
        state: '',
        type: 'macroTask',
        data: {
          target: self,
          method: self[_patch_utils__WEBPACK_IMPORTED_MODULE_1__.XHR_METHOD],
          sync: self[_patch_utils__WEBPACK_IMPORTED_MODULE_1__.XHR_SYNC],
          url: self[_patch_utils__WEBPACK_IMPORTED_MODULE_1__.XHR_URL],
          status: ''
        }
      };
      try {
        scheduleTask(task);
        return sendNative.apply(self, args);
      } catch (e) {
        invokeTask(task, ERROR);
        throw e;
      }
    };
  });
}

/***/ }),

/***/ 30391:
/*!************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/polyfills.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Promise: () => (/* binding */ Promise)
/* harmony export */ });
/* harmony import */ var promise_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! promise-polyfill */ 68394);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ 63158);


var local = {};
if (_utils__WEBPACK_IMPORTED_MODULE_1__.isBrowser) {
  local = window;
} else if (typeof self !== 'undefined') {
  local = self;
}
var Promise = 'Promise' in local ? local.Promise : promise_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"];


/***/ }),

/***/ 77148:
/*!********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/queue.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Queue = function () {
  function Queue(onFlush, opts) {
    if (opts === void 0) {
      opts = {};
    }
    this.onFlush = onFlush;
    this.items = [];
    this.queueLimit = opts.queueLimit || -1;
    this.flushInterval = opts.flushInterval || 0;
    this.timeoutId = undefined;
  }
  var _proto = Queue.prototype;
  _proto._setTimer = function _setTimer() {
    var _this = this;
    this.timeoutId = setTimeout(function () {
      return _this.flush();
    }, this.flushInterval);
  };
  _proto._clear = function _clear() {
    if (typeof this.timeoutId !== 'undefined') {
      clearTimeout(this.timeoutId);
      this.timeoutId = undefined;
    }
    this.items = [];
  };
  _proto.flush = function flush() {
    this.onFlush(this.items);
    this._clear();
  };
  _proto.add = function add(item) {
    this.items.push(item);
    if (this.queueLimit !== -1 && this.items.length >= this.queueLimit) {
      this.flush();
    } else {
      if (typeof this.timeoutId === 'undefined') {
        this._setTimer();
      }
    }
  };
  return Queue;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Queue);

/***/ }),

/***/ 41467:
/*!******************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/service-factory.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceFactory: () => (/* binding */ ServiceFactory),
/* harmony export */   serviceCreators: () => (/* binding */ serviceCreators)
/* harmony export */ });
/* harmony import */ var _apm_server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apm-server */ 21663);
/* harmony import */ var _config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config-service */ 58463);
/* harmony import */ var _logging_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logging-service */ 65292);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ 50894);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state */ 49352);
var _serviceCreators;





var serviceCreators = (_serviceCreators = {}, _serviceCreators[_constants__WEBPACK_IMPORTED_MODULE_0__.CONFIG_SERVICE] = function () {
  return new _config_service__WEBPACK_IMPORTED_MODULE_1__["default"]();
}, _serviceCreators[_constants__WEBPACK_IMPORTED_MODULE_0__.LOGGING_SERVICE] = function () {
  return new _logging_service__WEBPACK_IMPORTED_MODULE_2__["default"]({
    prefix: '[Elastic APM] '
  });
}, _serviceCreators[_constants__WEBPACK_IMPORTED_MODULE_0__.APM_SERVER] = function (factory) {
  var _factory$getService = factory.getService([_constants__WEBPACK_IMPORTED_MODULE_0__.CONFIG_SERVICE, _constants__WEBPACK_IMPORTED_MODULE_0__.LOGGING_SERVICE]),
    configService = _factory$getService[0],
    loggingService = _factory$getService[1];
  return new _apm_server__WEBPACK_IMPORTED_MODULE_3__["default"](configService, loggingService);
}, _serviceCreators);
var ServiceFactory = function () {
  function ServiceFactory() {
    this.instances = {};
    this.initialized = false;
  }
  var _proto = ServiceFactory.prototype;
  _proto.init = function init() {
    if (this.initialized) {
      return;
    }
    this.initialized = true;
    var configService = this.getService(_constants__WEBPACK_IMPORTED_MODULE_0__.CONFIG_SERVICE);
    configService.init();
    var _this$getService = this.getService([_constants__WEBPACK_IMPORTED_MODULE_0__.LOGGING_SERVICE, _constants__WEBPACK_IMPORTED_MODULE_0__.APM_SERVER]),
      loggingService = _this$getService[0],
      apmServer = _this$getService[1];
    configService.events.observe(_constants__WEBPACK_IMPORTED_MODULE_0__.CONFIG_CHANGE, function () {
      var logLevel = configService.get('logLevel');
      loggingService.setLevel(logLevel);
    });
    apmServer.init();
  };
  _proto.getService = function getService(name) {
    var _this = this;
    if (typeof name === 'string') {
      if (!this.instances[name]) {
        if (typeof serviceCreators[name] === 'function') {
          this.instances[name] = serviceCreators[name](this);
        } else if (_state__WEBPACK_IMPORTED_MODULE_4__.__DEV__) {
          console.log('Cannot get service, No creator for: ' + name);
        }
      }
      return this.instances[name];
    } else if (Array.isArray(name)) {
      return name.map(function (n) {
        return _this.getService(n);
      });
    }
  };
  return ServiceFactory;
}();


/***/ }),

/***/ 72531:
/*!***********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/throttle.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ throttle)
/* harmony export */ });
function throttle(fn, onThrottle, opts) {
  var context = this;
  var limit = opts.limit;
  var interval = opts.interval;
  var counter = 0;
  var timeoutId;
  return function () {
    counter++;
    if (typeof timeoutId === 'undefined') {
      timeoutId = setTimeout(function () {
        counter = 0;
        timeoutId = undefined;
      }, interval);
    }
    if (counter > limit && typeof onThrottle === 'function') {
      return onThrottle.apply(context, arguments);
    } else {
      return fn.apply(context, arguments);
    }
  };
}

/***/ }),

/***/ 95885:
/*!***********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/truncate.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ERROR_MODEL: () => (/* binding */ ERROR_MODEL),
/* harmony export */   METADATA_MODEL: () => (/* binding */ METADATA_MODEL),
/* harmony export */   RESPONSE_MODEL: () => (/* binding */ RESPONSE_MODEL),
/* harmony export */   SPAN_MODEL: () => (/* binding */ SPAN_MODEL),
/* harmony export */   TRANSACTION_MODEL: () => (/* binding */ TRANSACTION_MODEL),
/* harmony export */   truncate: () => (/* binding */ truncate),
/* harmony export */   truncateModel: () => (/* binding */ truncateModel)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ 50894);

var METADATA_MODEL = {
  service: {
    name: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true],
    version: true,
    agent: {
      version: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true]
    },
    environment: true
  },
  labels: {
    '*': true
  }
};
var RESPONSE_MODEL = {
  '*': true,
  headers: {
    '*': true
  }
};
var DESTINATION_MODEL = {
  address: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT],
  service: {
    '*': [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true]
  }
};
var CONTEXT_MODEL = {
  user: {
    id: true,
    email: true,
    username: true
  },
  tags: {
    '*': true
  },
  http: {
    response: RESPONSE_MODEL
  },
  destination: DESTINATION_MODEL,
  response: RESPONSE_MODEL
};
var SPAN_MODEL = {
  name: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true],
  type: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true],
  id: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true],
  trace_id: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true],
  parent_id: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true],
  transaction_id: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true],
  subtype: true,
  action: true,
  context: CONTEXT_MODEL
};
var TRANSACTION_MODEL = {
  name: true,
  parent_id: true,
  type: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true],
  id: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true],
  trace_id: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true],
  span_count: {
    started: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true]
  },
  context: CONTEXT_MODEL
};
var ERROR_MODEL = {
  id: [_constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT, true],
  trace_id: true,
  transaction_id: true,
  parent_id: true,
  culprit: true,
  exception: {
    type: true
  },
  transaction: {
    type: true
  },
  context: CONTEXT_MODEL
};
function truncate(value, limit, required, placeholder) {
  if (limit === void 0) {
    limit = _constants__WEBPACK_IMPORTED_MODULE_0__.KEYWORD_LIMIT;
  }
  if (required === void 0) {
    required = false;
  }
  if (placeholder === void 0) {
    placeholder = 'N/A';
  }
  if (required && isEmpty(value)) {
    value = placeholder;
  }
  if (typeof value === 'string') {
    return value.substring(0, limit);
  }
  return value;
}
function isEmpty(value) {
  return value == null || value === '' || typeof value === 'undefined';
}
function replaceValue(target, key, currModel) {
  var value = truncate(target[key], currModel[0], currModel[1]);
  if (isEmpty(value)) {
    delete target[key];
    return;
  }
  target[key] = value;
}
function truncateModel(model, target, childTarget) {
  if (model === void 0) {
    model = {};
  }
  if (childTarget === void 0) {
    childTarget = target;
  }
  var keys = Object.keys(model);
  var emptyArr = [];
  var _loop = function _loop(i) {
    var currKey = keys[i];
    var currModel = model[currKey] === true ? emptyArr : model[currKey];
    if (!Array.isArray(currModel)) {
      truncateModel(currModel, target, childTarget[currKey]);
    } else {
      if (currKey === '*') {
        Object.keys(childTarget).forEach(function (key) {
          return replaceValue(childTarget, key, currModel);
        });
      } else {
        replaceValue(childTarget, currKey, currModel);
      }
    }
  };
  for (var i = 0; i < keys.length; i++) {
    _loop(i);
  }
  return target;
}


/***/ }),

/***/ 77146:
/*!******************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/url.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Url: () => (/* binding */ Url),
/* harmony export */   slugifyUrl: () => (/* binding */ slugifyUrl)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 63158);

function isDefaultPort(port, protocol) {
  switch (protocol) {
    case 'http:':
      return port === '80';
    case 'https:':
      return port === '443';
  }
  return true;
}
var RULES = [['#', 'hash'], ['?', 'query'], ['/', 'path'], ['@', 'auth', 1], [NaN, 'host', undefined, 1]];
var PROTOCOL_REGEX = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
var Url = function () {
  function Url(url) {
    var _this$extractProtocol = this.extractProtocol(url || ''),
      protocol = _this$extractProtocol.protocol,
      address = _this$extractProtocol.address,
      slashes = _this$extractProtocol.slashes;
    var relative = !protocol && !slashes;
    var location = this.getLocation();
    var instructions = RULES.slice();
    address = address.replace('\\', '/');
    if (!slashes) {
      instructions[2] = [NaN, 'path'];
    }
    var index;
    for (var i = 0; i < instructions.length; i++) {
      var instruction = instructions[i];
      var parse = instruction[0];
      var key = instruction[1];
      if (typeof parse === 'string') {
        index = address.indexOf(parse);
        if (~index) {
          var instLength = instruction[2];
          if (instLength) {
            var newIndex = address.lastIndexOf(parse);
            index = Math.max(index, newIndex);
            this[key] = address.slice(0, index);
            address = address.slice(index + instLength);
          } else {
            this[key] = address.slice(index);
            address = address.slice(0, index);
          }
        }
      } else {
        this[key] = address;
        address = '';
      }
      this[key] = this[key] || (relative && instruction[3] ? location[key] || '' : '');
      if (instruction[3]) this[key] = this[key].toLowerCase();
    }
    if (relative && this.path.charAt(0) !== '/') {
      this.path = '/' + this.path;
    }
    this.relative = relative;
    this.protocol = protocol || location.protocol;
    this.hostname = this.host;
    this.port = '';
    if (/:\d+$/.test(this.host)) {
      var value = this.host.split(':');
      var port = value.pop();
      var hostname = value.join(':');
      if (isDefaultPort(port, this.protocol)) {
        this.host = hostname;
      } else {
        this.port = port;
      }
      this.hostname = hostname;
    }
    this.origin = this.protocol && this.host && this.protocol !== 'file:' ? this.protocol + '//' + this.host : 'null';
    this.href = this.toString();
  }
  var _proto = Url.prototype;
  _proto.toString = function toString() {
    var result = this.protocol;
    result += '//';
    if (this.auth) {
      var REDACTED = '[REDACTED]';
      var userpass = this.auth.split(':');
      var username = userpass[0] ? REDACTED : '';
      var password = userpass[1] ? ':' + REDACTED : '';
      result += username + password + '@';
    }
    result += this.host;
    result += this.path;
    result += this.query;
    result += this.hash;
    return result;
  };
  _proto.getLocation = function getLocation() {
    var globalVar = {};
    if (_utils__WEBPACK_IMPORTED_MODULE_0__.isBrowser) {
      globalVar = window;
    }
    return globalVar.location;
  };
  _proto.extractProtocol = function extractProtocol(url) {
    var match = PROTOCOL_REGEX.exec(url);
    return {
      protocol: match[1] ? match[1].toLowerCase() : '',
      slashes: !!match[2],
      address: match[3]
    };
  };
  return Url;
}();
function slugifyUrl(urlStr, depth) {
  if (depth === void 0) {
    depth = 2;
  }
  var parsedUrl = new Url(urlStr);
  var query = parsedUrl.query,
    path = parsedUrl.path;
  var pathParts = path.substring(1).split('/');
  var redactString = ':id';
  var wildcard = '*';
  var specialCharsRegex = /\W|_/g;
  var digitsRegex = /[0-9]/g;
  var lowerCaseRegex = /[a-z]/g;
  var upperCaseRegex = /[A-Z]/g;
  var redactedParts = [];
  var redactedBefore = false;
  for (var index = 0; index < pathParts.length; index++) {
    var part = pathParts[index];
    if (redactedBefore || index > depth - 1) {
      if (part) {
        redactedParts.push(wildcard);
      }
      break;
    }
    var numberOfSpecialChars = (part.match(specialCharsRegex) || []).length;
    if (numberOfSpecialChars >= 2) {
      redactedParts.push(redactString);
      redactedBefore = true;
      continue;
    }
    var numberOfDigits = (part.match(digitsRegex) || []).length;
    if (numberOfDigits > 3 || part.length > 3 && numberOfDigits / part.length >= 0.3) {
      redactedParts.push(redactString);
      redactedBefore = true;
      continue;
    }
    var numberofUpperCase = (part.match(upperCaseRegex) || []).length;
    var numberofLowerCase = (part.match(lowerCaseRegex) || []).length;
    var lowerCaseRate = numberofLowerCase / part.length;
    var upperCaseRate = numberofUpperCase / part.length;
    if (part.length > 5 && (upperCaseRate > 0.3 && upperCaseRate < 0.6 || lowerCaseRate > 0.3 && lowerCaseRate < 0.6)) {
      redactedParts.push(redactString);
      redactedBefore = true;
      continue;
    }
    part && redactedParts.push(part);
  }
  var redacted = '/' + (redactedParts.length >= 2 ? redactedParts.join('/') : redactedParts.join('')) + (query ? '?{query}' : '');
  return redacted;
}

/***/ }),

/***/ 63158:
/*!********************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/common/utils.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PERF: () => (/* binding */ PERF),
/* harmony export */   baseExtend: () => (/* binding */ baseExtend),
/* harmony export */   bytesToHex: () => (/* binding */ bytesToHex),
/* harmony export */   checkSameOrigin: () => (/* binding */ checkSameOrigin),
/* harmony export */   extend: () => (/* binding */ extend),
/* harmony export */   find: () => (/* binding */ find),
/* harmony export */   generateRandomId: () => (/* binding */ generateRandomId),
/* harmony export */   getCurrentScript: () => (/* binding */ getCurrentScript),
/* harmony export */   getDtHeaderValue: () => (/* binding */ getDtHeaderValue),
/* harmony export */   getDuration: () => (/* binding */ getDuration),
/* harmony export */   getEarliestSpan: () => (/* binding */ getEarliestSpan),
/* harmony export */   getElasticScript: () => (/* binding */ getElasticScript),
/* harmony export */   getLatestNonXHRSpan: () => (/* binding */ getLatestNonXHRSpan),
/* harmony export */   getLatestXHRSpan: () => (/* binding */ getLatestXHRSpan),
/* harmony export */   getServerTimingInfo: () => (/* binding */ getServerTimingInfo),
/* harmony export */   getTSHeaderValue: () => (/* binding */ getTSHeaderValue),
/* harmony export */   getTime: () => (/* binding */ getTime),
/* harmony export */   getTimeOrigin: () => (/* binding */ getTimeOrigin),
/* harmony export */   isBeaconInspectionEnabled: () => (/* binding */ isBeaconInspectionEnabled),
/* harmony export */   isBrowser: () => (/* binding */ isBrowser),
/* harmony export */   isCORSSupported: () => (/* binding */ isCORSSupported),
/* harmony export */   isDtHeaderValid: () => (/* binding */ isDtHeaderValid),
/* harmony export */   isFunction: () => (/* binding */ isFunction),
/* harmony export */   isObject: () => (/* binding */ isObject),
/* harmony export */   isPerfInteractionCountSupported: () => (/* binding */ isPerfInteractionCountSupported),
/* harmony export */   isPerfTimelineSupported: () => (/* binding */ isPerfTimelineSupported),
/* harmony export */   isPerfTypeSupported: () => (/* binding */ isPerfTypeSupported),
/* harmony export */   isPlatformSupported: () => (/* binding */ isPlatformSupported),
/* harmony export */   isRedirectInfoAvailable: () => (/* binding */ isRedirectInfoAvailable),
/* harmony export */   isUndefined: () => (/* binding */ isUndefined),
/* harmony export */   merge: () => (/* binding */ merge),
/* harmony export */   noop: () => (/* binding */ noop),
/* harmony export */   now: () => (/* binding */ now),
/* harmony export */   parseDtHeaderValue: () => (/* binding */ parseDtHeaderValue),
/* harmony export */   removeInvalidChars: () => (/* binding */ removeInvalidChars),
/* harmony export */   rng: () => (/* binding */ rng),
/* harmony export */   scheduleMacroTask: () => (/* binding */ scheduleMacroTask),
/* harmony export */   scheduleMicroTask: () => (/* binding */ scheduleMicroTask),
/* harmony export */   setLabel: () => (/* binding */ setLabel),
/* harmony export */   setRequestHeader: () => (/* binding */ setRequestHeader),
/* harmony export */   stripQueryStringFromUrl: () => (/* binding */ stripQueryStringFromUrl)
/* harmony export */ });
/* harmony import */ var _polyfills__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills */ 30391);

var slice = [].slice;
var isBrowser = typeof window !== 'undefined';
var PERF = isBrowser && typeof performance !== 'undefined' ? performance : {};
function isCORSSupported() {
  var xhr = new window.XMLHttpRequest();
  return 'withCredentials' in xhr;
}
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}
function bytesToHex(buffer) {
  var hexOctets = [];
  for (var _i = 0; _i < buffer.length; _i++) {
    hexOctets.push(byteToHex[buffer[_i]]);
  }
  return hexOctets.join('');
}
var destination = new Uint8Array(16);
function rng() {
  if (typeof crypto != 'undefined' && typeof crypto.getRandomValues == 'function') {
    return crypto.getRandomValues(destination);
  } else if (typeof msCrypto != 'undefined' && typeof msCrypto.getRandomValues == 'function') {
    return msCrypto.getRandomValues(destination);
  }
  return destination;
}
function generateRandomId(length) {
  var id = bytesToHex(rng());
  return id.substr(0, length);
}
function getDtHeaderValue(span) {
  var dtVersion = '00';
  var dtUnSampledFlags = '00';
  var dtSampledFlags = '01';
  if (span && span.traceId && span.id && span.parentId) {
    var flags = span.sampled ? dtSampledFlags : dtUnSampledFlags;
    var id = span.sampled ? span.id : span.parentId;
    return dtVersion + '-' + span.traceId + '-' + id + '-' + flags;
  }
}
function parseDtHeaderValue(value) {
  var parsed = /^([\da-f]{2})-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/.exec(value);
  if (parsed) {
    var flags = parsed[4];
    var sampled = flags !== '00';
    return {
      traceId: parsed[2],
      id: parsed[3],
      sampled: sampled
    };
  }
}
function isDtHeaderValid(header) {
  return /^[\da-f]{2}-[\da-f]{32}-[\da-f]{16}-[\da-f]{2}$/.test(header) && header.slice(3, 35) !== '00000000000000000000000000000000' && header.slice(36, 52) !== '0000000000000000';
}
function getTSHeaderValue(_ref) {
  var sampleRate = _ref.sampleRate;
  if (typeof sampleRate !== 'number' || String(sampleRate).length > 256) {
    return;
  }
  var NAMESPACE = 'es';
  var SEPARATOR = '=';
  return "" + NAMESPACE + SEPARATOR + "s:" + sampleRate;
}
function setRequestHeader(target, name, value) {
  if (typeof target.setRequestHeader === 'function') {
    target.setRequestHeader(name, value);
  } else if (target.headers && typeof target.headers.append === 'function') {
    target.headers.append(name, value);
  } else {
    target[name] = value;
  }
}
function checkSameOrigin(source, target) {
  var isSame = false;
  if (typeof target === 'string') {
    isSame = source === target;
  } else if (target && typeof target.test === 'function') {
    isSame = target.test(source);
  } else if (Array.isArray(target)) {
    target.forEach(function (t) {
      if (!isSame) {
        isSame = checkSameOrigin(source, t);
      }
    });
  }
  return isSame;
}
function isPlatformSupported() {
  return isBrowser && typeof Set === 'function' && typeof JSON.stringify === 'function' && PERF && typeof PERF.now === 'function' && isCORSSupported();
}
function setLabel(key, value, obj) {
  if (!obj || !key) return;
  var skey = removeInvalidChars(key);
  var valueType = typeof value;
  if (value != undefined && valueType !== 'boolean' && valueType !== 'number') {
    value = String(value);
  }
  obj[skey] = value;
  return obj;
}
function getServerTimingInfo(serverTimingEntries) {
  if (serverTimingEntries === void 0) {
    serverTimingEntries = [];
  }
  var serverTimingInfo = [];
  var entrySeparator = ', ';
  var valueSeparator = ';';
  for (var _i2 = 0; _i2 < serverTimingEntries.length; _i2++) {
    var _serverTimingEntries$ = serverTimingEntries[_i2],
      name = _serverTimingEntries$.name,
      duration = _serverTimingEntries$.duration,
      description = _serverTimingEntries$.description;
    var timingValue = name;
    if (description) {
      timingValue += valueSeparator + 'desc=' + description;
    }
    if (duration) {
      timingValue += valueSeparator + 'dur=' + duration;
    }
    serverTimingInfo.push(timingValue);
  }
  return serverTimingInfo.join(entrySeparator);
}
function getTimeOrigin() {
  return PERF.timing.fetchStart;
}
function stripQueryStringFromUrl(url) {
  return url && url.split('?')[0];
}
function isObject(value) {
  return value !== null && typeof value === 'object';
}
function isFunction(value) {
  return typeof value === 'function';
}
function baseExtend(dst, objs, deep) {
  for (var i = 0, ii = objs.length; i < ii; ++i) {
    var obj = objs[i];
    if (!isObject(obj) && !isFunction(obj)) continue;
    var keys = Object.keys(obj);
    for (var j = 0, jj = keys.length; j < jj; j++) {
      var key = keys[j];
      var src = obj[key];
      if (deep && isObject(src)) {
        if (!isObject(dst[key])) dst[key] = Array.isArray(src) ? [] : {};
        baseExtend(dst[key], [src], false);
      } else {
        dst[key] = src;
      }
    }
  }
  return dst;
}
function getElasticScript() {
  if (typeof document !== 'undefined') {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0, l = scripts.length; i < l; i++) {
      var sc = scripts[i];
      if (sc.src.indexOf('elastic') > 0) {
        return sc;
      }
    }
  }
}
function getCurrentScript() {
  if (typeof document !== 'undefined') {
    var currentScript = document.currentScript;
    if (!currentScript) {
      return getElasticScript();
    }
    return currentScript;
  }
}
function extend(dst) {
  return baseExtend(dst, slice.call(arguments, 1), false);
}
function merge(dst) {
  return baseExtend(dst, slice.call(arguments, 1), true);
}
function isUndefined(obj) {
  return typeof obj === 'undefined';
}
function noop() {}
function find(array, predicate, thisArg) {
  if (array == null) {
    throw new TypeError('array is null or not defined');
  }
  var o = Object(array);
  var len = o.length >>> 0;
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }
  var k = 0;
  while (k < len) {
    var kValue = o[k];
    if (predicate.call(thisArg, kValue, k, o)) {
      return kValue;
    }
    k++;
  }
  return undefined;
}
function removeInvalidChars(key) {
  return key.replace(/[.*"]/g, '_');
}
function getLatestSpan(spans, typeFilter) {
  var latestSpan = null;
  for (var _i3 = 0; _i3 < spans.length; _i3++) {
    var span = spans[_i3];
    if (typeFilter && typeFilter(span.type) && (!latestSpan || latestSpan._end < span._end)) {
      latestSpan = span;
    }
  }
  return latestSpan;
}
function getLatestNonXHRSpan(spans) {
  return getLatestSpan(spans, function (type) {
    return String(type).indexOf('external') === -1;
  });
}
function getLatestXHRSpan(spans) {
  return getLatestSpan(spans, function (type) {
    return String(type).indexOf('external') !== -1;
  });
}
function getEarliestSpan(spans) {
  var earliestSpan = spans[0];
  for (var _i4 = 1; _i4 < spans.length; _i4++) {
    var span = spans[_i4];
    if (earliestSpan._start > span._start) {
      earliestSpan = span;
    }
  }
  return earliestSpan;
}
function now() {
  return PERF.now();
}
function getTime(time) {
  return typeof time === 'number' && time >= 0 ? time : now();
}
function getDuration(start, end) {
  if (isUndefined(end) || isUndefined(start)) {
    return null;
  }
  return parseInt(end - start);
}
function scheduleMacroTask(callback) {
  setTimeout(callback, 0);
}
function scheduleMicroTask(callback) {
  _polyfills__WEBPACK_IMPORTED_MODULE_0__.Promise.resolve().then(callback);
}
function isPerfTimelineSupported() {
  return typeof PERF.getEntriesByType === 'function';
}
function isPerfTypeSupported(type) {
  return typeof PerformanceObserver !== 'undefined' && PerformanceObserver.supportedEntryTypes && PerformanceObserver.supportedEntryTypes.indexOf(type) >= 0;
}
function isPerfInteractionCountSupported() {
  return 'interactionCount' in performance;
}
function isBeaconInspectionEnabled() {
  var flagName = '_elastic_inspect_beacon_';
  if (sessionStorage.getItem(flagName) != null) {
    return true;
  }
  if (!window.URL || !window.URLSearchParams) {
    return false;
  }
  try {
    var parsedUrl = new URL(window.location.href);
    var isFlagSet = parsedUrl.searchParams.has(flagName);
    if (isFlagSet) {
      sessionStorage.setItem(flagName, true);
    }
    return isFlagSet;
  } catch (e) {}
  return false;
}
function isRedirectInfoAvailable(timing) {
  return timing.redirectStart > 0;
}


/***/ }),

/***/ 74225:
/*!***********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/error-logging/error-logging.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _stack_trace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stack-trace */ 57888);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ 63158);
/* harmony import */ var _common_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/context */ 30144);
/* harmony import */ var _common_truncate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/truncate */ 95885);
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! error-stack-parser */ 18416);
/* harmony import */ var error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(error_stack_parser__WEBPACK_IMPORTED_MODULE_0__);
var _excluded = ["tags"];
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }
  return target;
}





var IGNORE_KEYS = ['stack', 'message'];
var PROMISE_REJECTION_PREFIX = 'Unhandled promise rejection: ';
function getErrorProperties(error) {
  var propertyFound = false;
  var properties = {};
  Object.keys(error).forEach(function (key) {
    if (IGNORE_KEYS.indexOf(key) >= 0) {
      return;
    }
    var val = error[key];
    if (val == null || typeof val === 'function') {
      return;
    }
    if (typeof val === 'object') {
      if (typeof val.toISOString !== 'function') return;
      val = val.toISOString();
    }
    properties[key] = val;
    propertyFound = true;
  });
  if (propertyFound) {
    return properties;
  }
}
var ErrorLogging = function () {
  function ErrorLogging(apmServer, configService, transactionService) {
    this._apmServer = apmServer;
    this._configService = configService;
    this._transactionService = transactionService;
  }
  var _proto = ErrorLogging.prototype;
  _proto.createErrorDataModel = function createErrorDataModel(errorEvent) {
    var frames = (0,_stack_trace__WEBPACK_IMPORTED_MODULE_1__.createStackTraces)((error_stack_parser__WEBPACK_IMPORTED_MODULE_0___default()), errorEvent);
    var filteredFrames = (0,_stack_trace__WEBPACK_IMPORTED_MODULE_1__.filterInvalidFrames)(frames);
    var culprit = '(inline script)';
    var lastFrame = filteredFrames[filteredFrames.length - 1];
    if (lastFrame && lastFrame.filename) {
      culprit = lastFrame.filename;
    }
    var message = errorEvent.message,
      error = errorEvent.error;
    var errorMessage = message;
    var errorType = '';
    var errorContext = {};
    if (error && typeof error === 'object') {
      errorMessage = errorMessage || error.message;
      errorType = error.name;
      var customProperties = getErrorProperties(error);
      if (customProperties) {
        errorContext.custom = customProperties;
      }
    }
    if (!errorType) {
      if (errorMessage && errorMessage.indexOf(':') > -1) {
        errorType = errorMessage.split(':')[0];
      }
    }
    var currentTransaction = this._transactionService.getCurrentTransaction();
    var transactionContext = currentTransaction ? currentTransaction.context : {};
    var _this$_configService$ = this._configService.get('context'),
      tags = _this$_configService$.tags,
      configContext = _objectWithoutPropertiesLoose(_this$_configService$, _excluded);
    var pageContext = (0,_common_context__WEBPACK_IMPORTED_MODULE_2__.getPageContext)();
    var context = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.merge)({}, pageContext, transactionContext, configContext, errorContext);
    var errorObject = {
      id: (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.generateRandomId)(),
      culprit: culprit,
      exception: {
        message: errorMessage,
        stacktrace: filteredFrames,
        type: errorType
      },
      context: context
    };
    if (currentTransaction) {
      errorObject = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.extend)(errorObject, {
        trace_id: currentTransaction.traceId,
        parent_id: currentTransaction.id,
        transaction_id: currentTransaction.id,
        transaction: {
          type: currentTransaction.type,
          sampled: currentTransaction.sampled
        }
      });
    }
    return (0,_common_truncate__WEBPACK_IMPORTED_MODULE_4__.truncateModel)(_common_truncate__WEBPACK_IMPORTED_MODULE_4__.ERROR_MODEL, errorObject);
  };
  _proto.logErrorEvent = function logErrorEvent(errorEvent) {
    if (typeof errorEvent === 'undefined') {
      return;
    }
    var errorObject = this.createErrorDataModel(errorEvent);
    if (typeof errorObject.exception.message === 'undefined') {
      return;
    }
    this._apmServer.addError(errorObject);
  };
  _proto.registerListeners = function registerListeners() {
    var _this = this;
    window.addEventListener('error', function (errorEvent) {
      return _this.logErrorEvent(errorEvent);
    });
    window.addEventListener('unhandledrejection', function (promiseRejectionEvent) {
      return _this.logPromiseEvent(promiseRejectionEvent);
    });
  };
  _proto.logPromiseEvent = function logPromiseEvent(promiseRejectionEvent) {
    var reason = promiseRejectionEvent.reason;
    if (reason == null) {
      reason = '<no reason specified>';
    }
    var errorEvent;
    if (typeof reason.message === 'string') {
      var name = reason.name ? reason.name + ': ' : '';
      errorEvent = {
        error: reason,
        message: PROMISE_REJECTION_PREFIX + name + reason.message
      };
    } else {
      errorEvent = this._parseRejectReason(reason);
    }
    this.logErrorEvent(errorEvent);
  };
  _proto.logError = function logError(messageOrError) {
    var errorEvent = {};
    if (typeof messageOrError === 'string') {
      errorEvent.message = messageOrError;
    } else {
      errorEvent.error = messageOrError;
    }
    return this.logErrorEvent(errorEvent);
  };
  _proto._parseRejectReason = function _parseRejectReason(reason) {
    var errorEvent = {
      message: PROMISE_REJECTION_PREFIX
    };
    if (Array.isArray(reason)) {
      errorEvent.message += '<object>';
    } else if (typeof reason === 'object') {
      try {
        errorEvent.message += JSON.stringify(reason);
        errorEvent.error = reason;
      } catch (error) {
        errorEvent.message += '<object>';
      }
    } else if (typeof reason === 'function') {
      errorEvent.message += '<function>';
    } else {
      errorEvent.message += reason;
    }
    return errorEvent;
  };
  return ErrorLogging;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ErrorLogging);

/***/ }),

/***/ 13800:
/*!***************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/error-logging/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   registerServices: () => (/* binding */ registerServices)
/* harmony export */ });
/* harmony import */ var _error_logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-logging */ 74225);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ 50894);
/* harmony import */ var _common_service_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/service-factory */ 41467);



function registerServices() {
  _common_service_factory__WEBPACK_IMPORTED_MODULE_0__.serviceCreators[_common_constants__WEBPACK_IMPORTED_MODULE_1__.ERROR_LOGGING] = function (serviceFactory) {
    var _serviceFactory$getSe = serviceFactory.getService([_common_constants__WEBPACK_IMPORTED_MODULE_1__.APM_SERVER, _common_constants__WEBPACK_IMPORTED_MODULE_1__.CONFIG_SERVICE, _common_constants__WEBPACK_IMPORTED_MODULE_1__.TRANSACTION_SERVICE]),
      apmServer = _serviceFactory$getSe[0],
      configService = _serviceFactory$getSe[1],
      transactionService = _serviceFactory$getSe[2];
    return new _error_logging__WEBPACK_IMPORTED_MODULE_2__["default"](apmServer, configService, transactionService);
  };
}


/***/ }),

/***/ 57888:
/*!*********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/error-logging/stack-trace.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createStackTraces: () => (/* binding */ createStackTraces),
/* harmony export */   filterInvalidFrames: () => (/* binding */ filterInvalidFrames)
/* harmony export */ });
function filePathToFileName(fileUrl) {
  var origin = window.location.origin || window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  if (fileUrl.indexOf(origin) > -1) {
    fileUrl = fileUrl.replace(origin + '/', '');
  }
  return fileUrl;
}
function cleanFilePath(filePath) {
  if (filePath === void 0) {
    filePath = '';
  }
  if (filePath === '<anonymous>') {
    filePath = '';
  }
  return filePath;
}
function isFileInline(fileUrl) {
  if (fileUrl) {
    return window.location.href.indexOf(fileUrl) === 0;
  }
  return false;
}
function normalizeStackFrames(stackFrames) {
  return stackFrames.map(function (frame) {
    if (frame.functionName) {
      frame.functionName = normalizeFunctionName(frame.functionName);
    }
    return frame;
  });
}
function normalizeFunctionName(fnName) {
  var parts = fnName.split('/');
  if (parts.length > 1) {
    fnName = ['Object', parts[parts.length - 1]].join('.');
  } else {
    fnName = parts[0];
  }
  fnName = fnName.replace(/.<$/gi, '.<anonymous>');
  fnName = fnName.replace(/^Anonymous function$/, '<anonymous>');
  parts = fnName.split('.');
  if (parts.length > 1) {
    fnName = parts[parts.length - 1];
  } else {
    fnName = parts[0];
  }
  return fnName;
}
function isValidStackTrace(stackTraces) {
  if (stackTraces.length === 0) {
    return false;
  }
  if (stackTraces.length === 1) {
    var stackTrace = stackTraces[0];
    return 'lineNumber' in stackTrace;
  }
  return true;
}
function createStackTraces(stackParser, errorEvent) {
  var error = errorEvent.error,
    filename = errorEvent.filename,
    lineno = errorEvent.lineno,
    colno = errorEvent.colno;
  var stackTraces = [];
  if (error) {
    try {
      stackTraces = stackParser.parse(error);
    } catch (e) {}
  }
  if (!isValidStackTrace(stackTraces)) {
    stackTraces = [{
      fileName: filename,
      lineNumber: lineno,
      columnNumber: colno
    }];
  }
  var normalizedStackTraces = normalizeStackFrames(stackTraces);
  return normalizedStackTraces.map(function (stack) {
    var fileName = stack.fileName,
      lineNumber = stack.lineNumber,
      columnNumber = stack.columnNumber,
      _stack$functionName = stack.functionName,
      functionName = _stack$functionName === void 0 ? '<anonymous>' : _stack$functionName;
    if (!fileName && !lineNumber) {
      return {};
    }
    if (!columnNumber && !lineNumber) {
      return {};
    }
    var filePath = cleanFilePath(fileName);
    var cleanedFileName = filePathToFileName(filePath);
    if (isFileInline(filePath)) {
      cleanedFileName = '(inline script)';
    }
    return {
      abs_path: fileName,
      filename: cleanedFileName,
      function: functionName,
      lineno: lineNumber,
      colno: columnNumber
    };
  });
}
function filterInvalidFrames(frames) {
  return frames.filter(function (_ref) {
    var filename = _ref.filename,
      lineno = _ref.lineno;
    return typeof filename !== 'undefined' && typeof lineno !== 'undefined';
  });
}

/***/ }),

/***/ 10901:
/*!*************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/index.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   APM_SERVER: () => (/* reexport safe */ _common_constants__WEBPACK_IMPORTED_MODULE_8__.APM_SERVER),
/* harmony export */   CLICK: () => (/* reexport safe */ _common_constants__WEBPACK_IMPORTED_MODULE_8__.CLICK),
/* harmony export */   CONFIG_SERVICE: () => (/* reexport safe */ _common_constants__WEBPACK_IMPORTED_MODULE_8__.CONFIG_SERVICE),
/* harmony export */   ERROR: () => (/* reexport safe */ _common_constants__WEBPACK_IMPORTED_MODULE_8__.ERROR),
/* harmony export */   ERROR_LOGGING: () => (/* reexport safe */ _common_constants__WEBPACK_IMPORTED_MODULE_8__.ERROR_LOGGING),
/* harmony export */   EVENT_TARGET: () => (/* reexport safe */ _common_constants__WEBPACK_IMPORTED_MODULE_8__.EVENT_TARGET),
/* harmony export */   LOGGING_SERVICE: () => (/* reexport safe */ _common_constants__WEBPACK_IMPORTED_MODULE_8__.LOGGING_SERVICE),
/* harmony export */   PAGE_LOAD: () => (/* reexport safe */ _common_constants__WEBPACK_IMPORTED_MODULE_8__.PAGE_LOAD),
/* harmony export */   PAGE_LOAD_DELAY: () => (/* reexport safe */ _common_constants__WEBPACK_IMPORTED_MODULE_8__.PAGE_LOAD_DELAY),
/* harmony export */   PERFORMANCE_MONITORING: () => (/* reexport safe */ _common_constants__WEBPACK_IMPORTED_MODULE_8__.PERFORMANCE_MONITORING),
/* harmony export */   ServiceFactory: () => (/* reexport safe */ _common_service_factory__WEBPACK_IMPORTED_MODULE_2__.ServiceFactory),
/* harmony export */   TRANSACTION_SERVICE: () => (/* reexport safe */ _common_constants__WEBPACK_IMPORTED_MODULE_8__.TRANSACTION_SERVICE),
/* harmony export */   afterFrame: () => (/* reexport safe */ _common_after_frame__WEBPACK_IMPORTED_MODULE_7__["default"]),
/* harmony export */   bootstrap: () => (/* reexport safe */ _bootstrap__WEBPACK_IMPORTED_MODULE_10__.bootstrap),
/* harmony export */   createServiceFactory: () => (/* binding */ createServiceFactory),
/* harmony export */   createTracer: () => (/* reexport safe */ _opentracing__WEBPACK_IMPORTED_MODULE_6__.createTracer),
/* harmony export */   getInstrumentationFlags: () => (/* reexport safe */ _common_instrument__WEBPACK_IMPORTED_MODULE_5__.getInstrumentationFlags),
/* harmony export */   isBrowser: () => (/* reexport safe */ _common_utils__WEBPACK_IMPORTED_MODULE_4__.isBrowser),
/* harmony export */   isPlatformSupported: () => (/* reexport safe */ _common_utils__WEBPACK_IMPORTED_MODULE_4__.isPlatformSupported),
/* harmony export */   observePageClicks: () => (/* reexport safe */ _common_observers__WEBPACK_IMPORTED_MODULE_12__.observePageClicks),
/* harmony export */   observePageVisibility: () => (/* reexport safe */ _common_observers__WEBPACK_IMPORTED_MODULE_11__.observePageVisibility),
/* harmony export */   observeUserInteractions: () => (/* reexport safe */ _performance_monitoring__WEBPACK_IMPORTED_MODULE_9__.observeUserInteractions),
/* harmony export */   patchAll: () => (/* reexport safe */ _common_patching__WEBPACK_IMPORTED_MODULE_3__.patchAll),
/* harmony export */   patchEventHandler: () => (/* reexport safe */ _common_patching__WEBPACK_IMPORTED_MODULE_3__.patchEventHandler),
/* harmony export */   scheduleMacroTask: () => (/* reexport safe */ _common_utils__WEBPACK_IMPORTED_MODULE_4__.scheduleMacroTask),
/* harmony export */   scheduleMicroTask: () => (/* reexport safe */ _common_utils__WEBPACK_IMPORTED_MODULE_4__.scheduleMicroTask)
/* harmony export */ });
/* harmony import */ var _error_logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-logging */ 13800);
/* harmony import */ var _performance_monitoring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./performance-monitoring */ 8497);
/* harmony import */ var _performance_monitoring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./performance-monitoring */ 24552);
/* harmony import */ var _common_service_factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/service-factory */ 41467);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/utils */ 63158);
/* harmony import */ var _common_patching__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/patching */ 20110);
/* harmony import */ var _common_observers__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./common/observers */ 78289);
/* harmony import */ var _common_observers__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/observers */ 92140);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/constants */ 50894);
/* harmony import */ var _common_instrument__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/instrument */ 39130);
/* harmony import */ var _common_after_frame__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/after-frame */ 27593);
/* harmony import */ var _bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bootstrap */ 10955);
/* harmony import */ var _opentracing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./opentracing */ 72092);











function createServiceFactory() {
  (0,_performance_monitoring__WEBPACK_IMPORTED_MODULE_0__.registerServices)();
  (0,_error_logging__WEBPACK_IMPORTED_MODULE_1__.registerServices)();
  var serviceFactory = new _common_service_factory__WEBPACK_IMPORTED_MODULE_2__.ServiceFactory();
  return serviceFactory;
}


/***/ }),

/***/ 72092:
/*!*************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/opentracing/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Span: () => (/* reexport safe */ _span__WEBPACK_IMPORTED_MODULE_2__["default"]),
/* harmony export */   Tracer: () => (/* reexport safe */ _tracer__WEBPACK_IMPORTED_MODULE_1__["default"]),
/* harmony export */   createTracer: () => (/* binding */ createTracer)
/* harmony export */ });
/* harmony import */ var _tracer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tracer */ 91223);
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./span */ 98678);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ 50894);



function createTracer(serviceFactory) {
  var performanceMonitoring = serviceFactory.getService(_common_constants__WEBPACK_IMPORTED_MODULE_0__.PERFORMANCE_MONITORING);
  var transactionService = serviceFactory.getService(_common_constants__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_SERVICE);
  var errorLogging = serviceFactory.getService(_common_constants__WEBPACK_IMPORTED_MODULE_0__.ERROR_LOGGING);
  var loggingService = serviceFactory.getService(_common_constants__WEBPACK_IMPORTED_MODULE_0__.LOGGING_SERVICE);
  return new _tracer__WEBPACK_IMPORTED_MODULE_1__["default"](performanceMonitoring, transactionService, loggingService, errorLogging);
}


/***/ }),

/***/ 98678:
/*!************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/opentracing/span.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var opentracing_lib_span__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! opentracing/lib/span */ 10828);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/utils */ 63158);
/* harmony import */ var _performance_monitoring_transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../performance-monitoring/transaction */ 10457);
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}



var Span = function (_otSpan) {
  _inheritsLoose(Span, _otSpan);
  function Span(tracer, span) {
    var _this;
    _this = _otSpan.call(this) || this;
    _this.__tracer = tracer;
    _this.span = span;
    _this.isTransaction = span instanceof _performance_monitoring_transaction__WEBPACK_IMPORTED_MODULE_1__["default"];
    _this.spanContext = {
      id: span.id,
      traceId: span.traceId,
      sampled: span.sampled
    };
    return _this;
  }
  var _proto = Span.prototype;
  _proto._context = function _context() {
    return this.spanContext;
  };
  _proto._tracer = function _tracer() {
    return this.__tracer;
  };
  _proto._setOperationName = function _setOperationName(name) {
    this.span.name = name;
  };
  _proto._addTags = function _addTags(keyValuePairs) {
    var tags = (0,_common_utils__WEBPACK_IMPORTED_MODULE_2__.extend)({}, keyValuePairs);
    if (tags.type) {
      this.span.type = tags.type;
      delete tags.type;
    }
    if (this.isTransaction) {
      var userId = tags['user.id'];
      var username = tags['user.username'];
      var email = tags['user.email'];
      if (userId || username || email) {
        this.span.addContext({
          user: {
            id: userId,
            username: username,
            email: email
          }
        });
        delete tags['user.id'];
        delete tags['user.username'];
        delete tags['user.email'];
      }
    }
    this.span.addLabels(tags);
  };
  _proto._log = function _log(log, timestamp) {
    if (log.event === 'error') {
      if (log['error.object']) {
        this.__tracer.errorLogging.logError(log['error.object']);
      } else if (log.message) {
        this.__tracer.errorLogging.logError(log.message);
      }
    }
  };
  _proto._finish = function _finish(finishTime) {
    this.span.end();
    if (finishTime) {
      this.span._end = finishTime - (0,_common_utils__WEBPACK_IMPORTED_MODULE_2__.getTimeOrigin)();
    }
  };
  return Span;
}(opentracing_lib_span__WEBPACK_IMPORTED_MODULE_0__.Span);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Span);

/***/ }),

/***/ 91223:
/*!**************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/opentracing/tracer.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var opentracing_lib_tracer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! opentracing/lib/tracer */ 45241);
/* harmony import */ var opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! opentracing/lib/constants */ 55555);
/* harmony import */ var opentracing_lib_span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! opentracing/lib/span */ 10828);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils */ 63158);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ 49352);
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./span */ 98678);
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}






var Tracer = function (_otTracer) {
  _inheritsLoose(Tracer, _otTracer);
  function Tracer(performanceMonitoring, transactionService, loggingService, errorLogging) {
    var _this;
    _this = _otTracer.call(this) || this;
    _this.performanceMonitoring = performanceMonitoring;
    _this.transactionService = transactionService;
    _this.loggingService = loggingService;
    _this.errorLogging = errorLogging;
    return _this;
  }
  var _proto = Tracer.prototype;
  _proto._startSpan = function _startSpan(name, options) {
    var spanOptions = {
      managed: true
    };
    if (options) {
      spanOptions.timestamp = options.startTime;
      if (options.childOf) {
        spanOptions.parentId = options.childOf.id;
      } else if (options.references && options.references.length > 0) {
        if (options.references.length > 1) {
          if (_state__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
            this.loggingService.debug('Elastic APM OpenTracing: Unsupported number of references, only the first childOf reference will be recorded.');
          }
        }
        var childRef = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.find)(options.references, function (ref) {
          return ref.type() === opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__.REFERENCE_CHILD_OF;
        });
        if (childRef) {
          spanOptions.parentId = childRef.referencedContext().id;
        }
      }
    }
    var span;
    var currentTransaction = this.transactionService.getCurrentTransaction();
    if (currentTransaction) {
      span = this.transactionService.startSpan(name, undefined, spanOptions);
    } else {
      span = this.transactionService.startTransaction(name, undefined, spanOptions);
    }
    if (!span) {
      return new opentracing_lib_span__WEBPACK_IMPORTED_MODULE_2__.Span();
    }
    if (spanOptions.timestamp) {
      span._start = spanOptions.timestamp - (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.getTimeOrigin)();
    }
    var otSpan = new _span__WEBPACK_IMPORTED_MODULE_5__["default"](this, span);
    if (options && options.tags) {
      otSpan.addTags(options.tags);
    }
    return otSpan;
  };
  _proto._inject = function _inject(spanContext, format, carrier) {
    switch (format) {
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__.FORMAT_TEXT_MAP:
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__.FORMAT_HTTP_HEADERS:
        this.performanceMonitoring.injectDtHeader(spanContext, carrier);
        break;
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__.FORMAT_BINARY:
        if (_state__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
          this.loggingService.debug('Elastic APM OpenTracing: binary carrier format is not supported.');
        }
        break;
    }
  };
  _proto._extract = function _extract(format, carrier) {
    var ctx;
    switch (format) {
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__.FORMAT_TEXT_MAP:
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__.FORMAT_HTTP_HEADERS:
        ctx = this.performanceMonitoring.extractDtHeader(carrier);
        break;
      case opentracing_lib_constants__WEBPACK_IMPORTED_MODULE_1__.FORMAT_BINARY:
        if (_state__WEBPACK_IMPORTED_MODULE_3__.__DEV__) {
          this.loggingService.debug('Elastic APM OpenTracing: binary carrier format is not supported.');
        }
        break;
    }
    if (!ctx) {
      ctx = null;
    }
    return ctx;
  };
  return Tracer;
}(opentracing_lib_tracer__WEBPACK_IMPORTED_MODULE_0__.Tracer);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tracer);

/***/ }),

/***/ 54578:
/*!****************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/breakdown.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureBreakdown: () => (/* binding */ captureBreakdown)
/* harmony export */ });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ 63158);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ 50894);


var pageLoadBreakdowns = [['domainLookupStart', 'domainLookupEnd', 'DNS'], ['connectStart', 'connectEnd', 'TCP'], ['requestStart', 'responseStart', 'Request'], ['responseStart', 'responseEnd', 'Response'], ['domLoading', 'domComplete', 'Processing'], ['loadEventStart', 'loadEventEnd', 'Load']];
function getValue(value) {
  return {
    value: value
  };
}
function calculateSelfTime(transaction) {
  var spans = transaction.spans,
    _start = transaction._start,
    _end = transaction._end;
  if (spans.length === 0) {
    return transaction.duration();
  }
  spans.sort(function (span1, span2) {
    return span1._start - span2._start;
  });
  var span = spans[0];
  var spanEnd = span._end;
  var spanStart = span._start;
  var lastContinuousEnd = spanEnd;
  var selfTime = spanStart - _start;
  for (var i = 1; i < spans.length; i++) {
    span = spans[i];
    spanStart = span._start;
    spanEnd = span._end;
    if (spanStart > lastContinuousEnd) {
      selfTime += spanStart - lastContinuousEnd;
      lastContinuousEnd = spanEnd;
    } else if (spanEnd > lastContinuousEnd) {
      lastContinuousEnd = spanEnd;
    }
  }
  if (lastContinuousEnd < _end) {
    selfTime += _end - lastContinuousEnd;
  }
  return selfTime;
}
function groupSpans(transaction) {
  var spanMap = {};
  var transactionSelfTime = calculateSelfTime(transaction);
  spanMap['app'] = {
    count: 1,
    duration: transactionSelfTime
  };
  var spans = transaction.spans;
  for (var i = 0; i < spans.length; i++) {
    var span = spans[i];
    var duration = span.duration();
    if (duration === 0 || duration == null) {
      continue;
    }
    var type = span.type,
      subtype = span.subtype;
    var key = type.replace(_common_constants__WEBPACK_IMPORTED_MODULE_0__.TRUNCATED_TYPE, '');
    if (subtype) {
      key += '.' + subtype;
    }
    if (!spanMap[key]) {
      spanMap[key] = {
        duration: 0,
        count: 0
      };
    }
    spanMap[key].count++;
    spanMap[key].duration += duration;
  }
  return spanMap;
}
function getSpanBreakdown(transactionDetails, _ref) {
  var details = _ref.details,
    _ref$count = _ref.count,
    count = _ref$count === void 0 ? 1 : _ref$count,
    duration = _ref.duration;
  return {
    transaction: transactionDetails,
    span: details,
    samples: {
      'span.self_time.count': getValue(count),
      'span.self_time.sum.us': getValue(duration * 1000)
    }
  };
}
function captureBreakdown(transaction, timings) {
  if (timings === void 0) {
    timings = _common_utils__WEBPACK_IMPORTED_MODULE_1__.PERF.timing;
  }
  var breakdowns = [];
  var name = transaction.name,
    type = transaction.type,
    sampled = transaction.sampled;
  var transactionDetails = {
    name: name,
    type: type
  };
  if (!sampled) {
    return breakdowns;
  }
  if (type === _common_constants__WEBPACK_IMPORTED_MODULE_0__.PAGE_LOAD && timings) {
    for (var i = 0; i < pageLoadBreakdowns.length; i++) {
      var current = pageLoadBreakdowns[i];
      var start = timings[current[0]];
      var end = timings[current[1]];
      var duration = (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.getDuration)(start, end);
      if (duration === 0 || duration == null) {
        continue;
      }
      breakdowns.push(getSpanBreakdown(transactionDetails, {
        details: {
          type: current[2]
        },
        duration: duration
      }));
    }
  } else {
    var spanMap = groupSpans(transaction);
    Object.keys(spanMap).forEach(function (key) {
      var _key$split = key.split('.'),
        type = _key$split[0],
        subtype = _key$split[1];
      var _spanMap$key = spanMap[key],
        duration = _spanMap$key.duration,
        count = _spanMap$key.count;
      breakdowns.push(getSpanBreakdown(transactionDetails, {
        details: {
          type: type,
          subtype: subtype
        },
        duration: duration,
        count: count
      }));
    });
  }
  return breakdowns;
}

/***/ }),

/***/ 8497:
/*!************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/index.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   observeUserInteractions: () => (/* reexport safe */ _metrics_inp_process__WEBPACK_IMPORTED_MODULE_4__.observeUserInteractions),
/* harmony export */   registerServices: () => (/* binding */ registerServices),
/* harmony export */   reportInp: () => (/* reexport safe */ _metrics_inp_report__WEBPACK_IMPORTED_MODULE_5__.reportInp)
/* harmony export */ });
/* harmony import */ var _performance_monitoring__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./performance-monitoring */ 24894);
/* harmony import */ var _transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction-service */ 75639);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ 50894);
/* harmony import */ var _common_service_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/service-factory */ 41467);
/* harmony import */ var _metrics_inp_process__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metrics/inp/process */ 24552);
/* harmony import */ var _metrics_inp_report__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metrics/inp/report */ 29315);






function registerServices() {
  _common_service_factory__WEBPACK_IMPORTED_MODULE_0__.serviceCreators[_common_constants__WEBPACK_IMPORTED_MODULE_1__.TRANSACTION_SERVICE] = function (serviceFactory) {
    var _serviceFactory$getSe = serviceFactory.getService([_common_constants__WEBPACK_IMPORTED_MODULE_1__.LOGGING_SERVICE, _common_constants__WEBPACK_IMPORTED_MODULE_1__.CONFIG_SERVICE]),
      loggingService = _serviceFactory$getSe[0],
      configService = _serviceFactory$getSe[1];
    return new _transaction_service__WEBPACK_IMPORTED_MODULE_2__["default"](loggingService, configService);
  };
  _common_service_factory__WEBPACK_IMPORTED_MODULE_0__.serviceCreators[_common_constants__WEBPACK_IMPORTED_MODULE_1__.PERFORMANCE_MONITORING] = function (serviceFactory) {
    var _serviceFactory$getSe2 = serviceFactory.getService([_common_constants__WEBPACK_IMPORTED_MODULE_1__.APM_SERVER, _common_constants__WEBPACK_IMPORTED_MODULE_1__.CONFIG_SERVICE, _common_constants__WEBPACK_IMPORTED_MODULE_1__.LOGGING_SERVICE, _common_constants__WEBPACK_IMPORTED_MODULE_1__.TRANSACTION_SERVICE]),
      apmServer = _serviceFactory$getSe2[0],
      configService = _serviceFactory$getSe2[1],
      loggingService = _serviceFactory$getSe2[2],
      transactionService = _serviceFactory$getSe2[3];
    return new _performance_monitoring__WEBPACK_IMPORTED_MODULE_3__["default"](apmServer, configService, loggingService, transactionService);
  };
}


/***/ }),

/***/ 24552:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/metrics/inp/process.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   calculateInp: () => (/* binding */ calculateInp),
/* harmony export */   inpState: () => (/* binding */ inpState),
/* harmony export */   interactionCount: () => (/* binding */ interactionCount),
/* harmony export */   observeUserInteractions: () => (/* binding */ observeUserInteractions),
/* harmony export */   processUserInteractions: () => (/* binding */ processUserInteractions),
/* harmony export */   restoreINPState: () => (/* binding */ restoreINPState)
/* harmony export */ });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/constants */ 50894);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/utils */ 63158);
/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../metrics */ 95334);



var INP_THRESHOLD = 40;
var MAX_INTERACTIONS_TO_CONSIDER = 10;
var inpState = {
  minInteractionId: Infinity,
  maxInteractionId: 0,
  interactionCount: 0,
  longestInteractions: []
};
function observeUserInteractions(recorder) {
  if (recorder === void 0) {
    recorder = new _metrics__WEBPACK_IMPORTED_MODULE_0__.PerfEntryRecorder(processUserInteractions);
  }
  var isPerfCountSupported = (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.isPerfInteractionCountSupported)();
  var durationThreshold = isPerfCountSupported ? INP_THRESHOLD : 16;
  recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_2__.EVENT, {
    buffered: true,
    durationThreshold: durationThreshold
  });
  if (!isPerfCountSupported) {
    recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_2__.FIRST_INPUT);
  }
}
function processUserInteractions(list) {
  var entries = list.getEntries();
  entries.forEach(function (entry) {
    if (!entry.interactionId) {
      return;
    }
    updateInteractionCount(entry);
    if (entry.duration < INP_THRESHOLD) {
      return;
    }
    storeUserInteraction(entry);
  });
}
function calculateInp() {
  if (inpState.longestInteractions.length === 0) {
    if (interactionCount() > 0) {
      return 0;
    }
    return;
  }
  var interactionIndex = Math.min(inpState.longestInteractions.length - 1, Math.floor(interactionCount() / 50));
  var inp = inpState.longestInteractions[interactionIndex].duration;
  return inp;
}
function interactionCount() {
  return performance.interactionCount || inpState.interactionCount;
}
function restoreINPState() {
  inpState.minInteractionId = Infinity;
  inpState.maxInteractionId = 0;
  inpState.interactionCount = 0;
  inpState.longestInteractions = [];
}
function storeUserInteraction(entry) {
  var leastSlow = inpState.longestInteractions[inpState.longestInteractions.length - 1];
  if (typeof leastSlow !== 'undefined' && entry.duration <= leastSlow.duration && entry.interactionId != leastSlow.id) {
    return;
  }
  var filteredInteraction = inpState.longestInteractions.filter(function (interaction) {
    return interaction.id === entry.interactionId;
  });
  if (filteredInteraction.length > 0) {
    var foundInteraction = filteredInteraction[0];
    foundInteraction.duration = Math.max(foundInteraction.duration, entry.duration);
  } else {
    inpState.longestInteractions.push({
      id: entry.interactionId,
      duration: entry.duration
    });
  }
  inpState.longestInteractions.sort(function (a, b) {
    return b.duration - a.duration;
  });
  inpState.longestInteractions.splice(MAX_INTERACTIONS_TO_CONSIDER);
}
function updateInteractionCount(entry) {
  if ((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.isPerfInteractionCountSupported)()) {
    return;
  }
  inpState.minInteractionId = Math.min(inpState.minInteractionId, entry.interactionId);
  inpState.maxInteractionId = Math.max(inpState.maxInteractionId, entry.interactionId);
  inpState.interactionCount = (inpState.maxInteractionId - inpState.minInteractionId) / 7 + 1;
}

/***/ }),

/***/ 29315:
/*!*************************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/metrics/inp/report.js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   reportInp: () => (/* binding */ reportInp)
/* harmony export */ });
/* harmony import */ var _process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./process */ 24552);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/utils */ 63158);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/constants */ 50894);



function reportInp(transactionService) {
  var inp = (0,_process__WEBPACK_IMPORTED_MODULE_0__.calculateInp)();
  if (inp >= 0) {
    var startTime = (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.now)();
    var inpTr = transactionService.startTransaction(_common_constants__WEBPACK_IMPORTED_MODULE_2__.PAGE_EXIT, _common_constants__WEBPACK_IMPORTED_MODULE_2__.PAGE_EXIT, {
      startTime: startTime
    });
    var navigations = performance.getEntriesByType('navigation');
    if (navigations.length > 0) {
      var hardNavigationUrl = navigations[0].name;
      inpTr.addContext({
        page: {
          url: hardNavigationUrl
        }
      });
    }
    inpTr.addLabels({
      inp_value: inp
    });
    var endTime = startTime + inp + 1;
    inpTr.end(endTime);
    (0,_process__WEBPACK_IMPORTED_MODULE_0__.restoreINPState)();
    return inpTr;
  }
}

/***/ }),

/***/ 95334:
/*!**********************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/metrics/metrics.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfEntryRecorder: () => (/* binding */ PerfEntryRecorder),
/* harmony export */   calculateCumulativeLayoutShift: () => (/* binding */ calculateCumulativeLayoutShift),
/* harmony export */   calculateTotalBlockingTime: () => (/* binding */ calculateTotalBlockingTime),
/* harmony export */   captureObserverEntries: () => (/* binding */ captureObserverEntries),
/* harmony export */   createFirstInputDelaySpan: () => (/* binding */ createFirstInputDelaySpan),
/* harmony export */   createLongTaskSpans: () => (/* binding */ createLongTaskSpans),
/* harmony export */   createTotalBlockingTimeSpan: () => (/* binding */ createTotalBlockingTimeSpan),
/* harmony export */   metrics: () => (/* binding */ metrics)
/* harmony export */ });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/constants */ 50894);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/utils */ 63158);
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../span */ 381);
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}



var metrics = {
  fid: 0,
  fcp: 0,
  tbt: {
    start: Infinity,
    duration: 0
  },
  cls: {
    score: 0,
    firstEntryTime: Number.NEGATIVE_INFINITY,
    prevEntryTime: Number.NEGATIVE_INFINITY,
    currentSessionScore: 0
  },
  longtask: {
    count: 0,
    duration: 0,
    max: 0
  }
};
var LONG_TASK_THRESHOLD = 50;
function createLongTaskSpans(longtasks, agg) {
  var spans = [];
  for (var i = 0; i < longtasks.length; i++) {
    var _longtasks$i = longtasks[i],
      name = _longtasks$i.name,
      startTime = _longtasks$i.startTime,
      duration = _longtasks$i.duration,
      attribution = _longtasks$i.attribution;
    var end = startTime + duration;
    var span = new _span__WEBPACK_IMPORTED_MODULE_0__["default"]("Longtask(" + name + ")", _common_constants__WEBPACK_IMPORTED_MODULE_1__.LONG_TASK, {
      startTime: startTime
    });
    agg.count++;
    agg.duration += duration;
    agg.max = Math.max(duration, agg.max);
    if (attribution.length > 0) {
      var _attribution$ = attribution[0],
        _name = _attribution$.name,
        containerType = _attribution$.containerType,
        containerName = _attribution$.containerName,
        containerId = _attribution$.containerId;
      var customContext = {
        attribution: _name,
        type: containerType
      };
      if (containerName) {
        customContext.name = containerName;
      }
      if (containerId) {
        customContext.id = containerId;
      }
      span.addContext({
        custom: customContext
      });
    }
    span.end(end);
    spans.push(span);
  }
  return spans;
}
function createFirstInputDelaySpan(fidEntries) {
  var firstInput = fidEntries[0];
  if (firstInput) {
    var startTime = firstInput.startTime,
      processingStart = firstInput.processingStart;
    var span = new _span__WEBPACK_IMPORTED_MODULE_0__["default"]('First Input Delay', _common_constants__WEBPACK_IMPORTED_MODULE_1__.FIRST_INPUT, {
      startTime: startTime
    });
    span.end(processingStart);
    return span;
  }
}
function createTotalBlockingTimeSpan(tbtObject) {
  var start = tbtObject.start,
    duration = tbtObject.duration;
  var tbtSpan = new _span__WEBPACK_IMPORTED_MODULE_0__["default"]('Total Blocking Time', _common_constants__WEBPACK_IMPORTED_MODULE_1__.LONG_TASK, {
    startTime: start
  });
  tbtSpan.end(start + duration);
  return tbtSpan;
}
function calculateTotalBlockingTime(longtaskEntries) {
  longtaskEntries.forEach(function (entry) {
    var name = entry.name,
      startTime = entry.startTime,
      duration = entry.duration;
    if (startTime < metrics.fcp) {
      return;
    }
    if (name !== 'self' && name.indexOf('same-origin') === -1) {
      return;
    }
    metrics.tbt.start = Math.min(metrics.tbt.start, startTime);
    var blockingTime = duration - LONG_TASK_THRESHOLD;
    if (blockingTime > 0) {
      metrics.tbt.duration += blockingTime;
    }
  });
}
function calculateCumulativeLayoutShift(clsEntries) {
  clsEntries.forEach(function (entry) {
    if (!entry.hadRecentInput && entry.value) {
      var shouldCreateNewSession = entry.startTime - metrics.cls.firstEntryTime > 5000 || entry.startTime - metrics.cls.prevEntryTime > 1000;
      if (shouldCreateNewSession) {
        metrics.cls.firstEntryTime = entry.startTime;
        metrics.cls.currentSessionScore = 0;
      }
      metrics.cls.prevEntryTime = entry.startTime;
      metrics.cls.currentSessionScore += entry.value;
      metrics.cls.score = Math.max(metrics.cls.score, metrics.cls.currentSessionScore);
    }
  });
}
function captureObserverEntries(list, _ref) {
  var isHardNavigation = _ref.isHardNavigation,
    trStart = _ref.trStart;
  var longtaskEntries = list.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_1__.LONG_TASK).filter(function (entry) {
    return entry.startTime >= trStart;
  });
  var longTaskSpans = createLongTaskSpans(longtaskEntries, metrics.longtask);
  var result = {
    spans: longTaskSpans,
    marks: {}
  };
  if (!isHardNavigation) {
    return result;
  }
  var lcpEntries = list.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_1__.LARGEST_CONTENTFUL_PAINT);
  var lastLcpEntry = lcpEntries[lcpEntries.length - 1];
  if (lastLcpEntry) {
    var lcp = parseInt(lastLcpEntry.startTime);
    metrics.lcp = lcp;
    result.marks.largestContentfulPaint = lcp;
  }
  var timing = _common_utils__WEBPACK_IMPORTED_MODULE_2__.PERF.timing;
  var unloadDiff = timing.fetchStart - timing.navigationStart;
  if ((0,_common_utils__WEBPACK_IMPORTED_MODULE_2__.isRedirectInfoAvailable)(timing)) {
    unloadDiff = 0;
  }
  var fcpEntry = list.getEntriesByName(_common_constants__WEBPACK_IMPORTED_MODULE_1__.FIRST_CONTENTFUL_PAINT)[0];
  if (fcpEntry) {
    var fcp = parseInt(unloadDiff >= 0 ? fcpEntry.startTime - unloadDiff : fcpEntry.startTime);
    metrics.fcp = fcp;
    result.marks.firstContentfulPaint = fcp;
  }
  var fidEntries = list.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_1__.FIRST_INPUT);
  var fidSpan = createFirstInputDelaySpan(fidEntries);
  if (fidSpan) {
    metrics.fid = fidSpan.duration();
    result.spans.push(fidSpan);
  }
  calculateTotalBlockingTime(longtaskEntries);
  var clsEntries = list.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_SHIFT);
  calculateCumulativeLayoutShift(clsEntries);
  return result;
}
var PerfEntryRecorder = function () {
  function PerfEntryRecorder(callback) {
    this.po = {
      observe: _common_utils__WEBPACK_IMPORTED_MODULE_2__.noop,
      disconnect: _common_utils__WEBPACK_IMPORTED_MODULE_2__.noop
    };
    if (window.PerformanceObserver) {
      this.po = new PerformanceObserver(callback);
    }
  }
  var _proto = PerfEntryRecorder.prototype;
  _proto.start = function start(type, options) {
    if (options === void 0) {
      options = {
        buffered: true
      };
    }
    try {
      if (!(0,_common_utils__WEBPACK_IMPORTED_MODULE_2__.isPerfTypeSupported)(type)) {
        return;
      }
      this.po.observe(_extends({
        type: type
      }, options));
    } catch (_) {}
  };
  _proto.stop = function stop() {
    this.po.disconnect();
  };
  return PerfEntryRecorder;
}();

/***/ }),

/***/ 95681:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/navigation/capture-navigation.js ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   captureNavigation: () => (/* binding */ captureNavigation),
/* harmony export */   createNavigationTimingSpans: () => (/* reexport safe */ _navigation_timing__WEBPACK_IMPORTED_MODULE_2__.createNavigationTimingSpans),
/* harmony export */   createResourceTimingSpans: () => (/* reexport safe */ _resource_timing__WEBPACK_IMPORTED_MODULE_4__.createResourceTimingSpans),
/* harmony export */   createUserTimingSpans: () => (/* reexport safe */ _user_timing__WEBPACK_IMPORTED_MODULE_6__.createUserTimingSpans),
/* harmony export */   getPageLoadMarks: () => (/* reexport safe */ _marks__WEBPACK_IMPORTED_MODULE_3__.getPageLoadMarks)
/* harmony export */ });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/utils */ 63158);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/constants */ 50894);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../state */ 49352);
/* harmony import */ var _navigation_timing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation-timing */ 67571);
/* harmony import */ var _user_timing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-timing */ 21260);
/* harmony import */ var _resource_timing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resource-timing */ 77333);
/* harmony import */ var _marks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./marks */ 47026);







function captureNavigation(transaction) {
  if (!transaction.captureTimings) {
    if (transaction.type === _common_constants__WEBPACK_IMPORTED_MODULE_0__.PAGE_LOAD) {
      transaction._start = 0;
    }
    return;
  }
  var trEnd = transaction._end;
  if (transaction.type === _common_constants__WEBPACK_IMPORTED_MODULE_0__.PAGE_LOAD) {
    if (transaction.marks && transaction.marks.custom) {
      var customMarks = transaction.marks.custom;
      Object.keys(customMarks).forEach(function (key) {
        customMarks[key] += transaction._start;
      });
    }
    var trStart = 0;
    transaction._start = trStart;
    var timings = _common_utils__WEBPACK_IMPORTED_MODULE_1__.PERF.timing;
    var baseTime = (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.isRedirectInfoAvailable)(timings) ? timings.redirectStart : timings.fetchStart;
    (0,_navigation_timing__WEBPACK_IMPORTED_MODULE_2__.createNavigationTimingSpans)(timings, baseTime, trStart, trEnd).forEach(function (span) {
      span.traceId = transaction.traceId;
      span.sampled = transaction.sampled;
      if (span.pageResponse && transaction.options.pageLoadSpanId) {
        span.id = transaction.options.pageLoadSpanId;
      }
      transaction.spans.push(span);
    });
    transaction.addMarks((0,_marks__WEBPACK_IMPORTED_MODULE_3__.getPageLoadMarks)(timings));
  }
  if ((0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.isPerfTimelineSupported)()) {
    var _trStart = transaction._start;
    var resourceEntries = _common_utils__WEBPACK_IMPORTED_MODULE_1__.PERF.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_0__.RESOURCE);
    (0,_resource_timing__WEBPACK_IMPORTED_MODULE_4__.createResourceTimingSpans)(resourceEntries, _state__WEBPACK_IMPORTED_MODULE_5__.state.bootstrapTime, _trStart, trEnd).forEach(function (span) {
      return transaction.spans.push(span);
    });
    var userEntries = _common_utils__WEBPACK_IMPORTED_MODULE_1__.PERF.getEntriesByType(_common_constants__WEBPACK_IMPORTED_MODULE_0__.MEASURE);
    (0,_user_timing__WEBPACK_IMPORTED_MODULE_6__.createUserTimingSpans)(userEntries, _trStart, trEnd).forEach(function (span) {
      return transaction.spans.push(span);
    });
  }
}


/***/ }),

/***/ 47026:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/navigation/marks.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COMPRESSED_NAV_TIMING_MARKS: () => (/* binding */ COMPRESSED_NAV_TIMING_MARKS),
/* harmony export */   NAVIGATION_TIMING_MARKS: () => (/* binding */ NAVIGATION_TIMING_MARKS),
/* harmony export */   getPageLoadMarks: () => (/* binding */ getPageLoadMarks)
/* harmony export */ });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/utils */ 63158);

var NAVIGATION_TIMING_MARKS = ['fetchStart', 'domainLookupStart', 'domainLookupEnd', 'connectStart', 'connectEnd', 'requestStart', 'responseStart', 'responseEnd', 'domLoading', 'domInteractive', 'domContentLoadedEventStart', 'domContentLoadedEventEnd', 'domComplete', 'loadEventStart', 'loadEventEnd'];
var COMPRESSED_NAV_TIMING_MARKS = ['fs', 'ls', 'le', 'cs', 'ce', 'qs', 'rs', 're', 'dl', 'di', 'ds', 'de', 'dc', 'es', 'ee'];
function getPageLoadMarks(timing) {
  var marks = getNavigationTimingMarks(timing);
  if (marks == null) {
    return null;
  }
  return {
    navigationTiming: marks,
    agent: {
      timeToFirstByte: marks.responseStart,
      domInteractive: marks.domInteractive,
      domComplete: marks.domComplete
    }
  };
}
function getNavigationTimingMarks(timing) {
  var redirectStart = timing.redirectStart,
    fetchStart = timing.fetchStart,
    navigationStart = timing.navigationStart,
    responseStart = timing.responseStart,
    responseEnd = timing.responseEnd;
  if (fetchStart >= navigationStart && responseStart >= fetchStart && responseEnd >= responseStart) {
    var marks = {};
    NAVIGATION_TIMING_MARKS.forEach(function (timingKey) {
      var m = timing[timingKey];
      if (m && m >= fetchStart) {
        if ((0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.isRedirectInfoAvailable)(timing)) {
          marks[timingKey] = parseInt(m - redirectStart);
        } else {
          marks[timingKey] = parseInt(m - fetchStart);
        }
      }
    });
    return marks;
  }
  return null;
}


/***/ }),

/***/ 67571:
/*!***********************************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/navigation/navigation-timing.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNavigationTimingSpans: () => (/* binding */ createNavigationTimingSpans)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ 87353);
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../span */ 381);


var eventPairs = [['redirectStart', 'redirectEnd', 'Redirect'], ['domainLookupStart', 'domainLookupEnd', 'Domain lookup'], ['connectStart', 'connectEnd', 'Making a connection to the server'], ['requestStart', 'responseEnd', 'Requesting and receiving the document'], ['domLoading', 'domInteractive', 'Parsing the document, executing sync. scripts'], ['domContentLoadedEventStart', 'domContentLoadedEventEnd', 'Fire "DOMContentLoaded" event'], ['loadEventStart', 'loadEventEnd', 'Fire "load" event']];
function createNavigationTimingSpans(timings, baseTime, trStart, trEnd) {
  var spans = [];
  for (var i = 0; i < eventPairs.length; i++) {
    var start = timings[eventPairs[i][0]];
    var end = timings[eventPairs[i][1]];
    if (!(0,_utils__WEBPACK_IMPORTED_MODULE_0__.shouldCreateSpan)(start, end, trStart, trEnd, baseTime)) {
      continue;
    }
    var span = new _span__WEBPACK_IMPORTED_MODULE_1__["default"](eventPairs[i][2], 'hard-navigation.browser-timing');
    var data = null;
    if (eventPairs[i][0] === 'requestStart') {
      span.pageResponse = true;
      data = {
        url: location.origin
      };
    }
    span._start = start - baseTime;
    span.end(end - baseTime, data);
    spans.push(span);
  }
  return spans;
}


/***/ }),

/***/ 77333:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/navigation/resource-timing.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createResourceTimingSpans: () => (/* binding */ createResourceTimingSpans)
/* harmony export */ });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/utils */ 63158);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils */ 87353);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/constants */ 50894);
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../span */ 381);




function createResourceTimingSpan(resourceTimingEntry) {
  var name = resourceTimingEntry.name,
    initiatorType = resourceTimingEntry.initiatorType,
    startTime = resourceTimingEntry.startTime,
    responseEnd = resourceTimingEntry.responseEnd;
  var kind = 'resource';
  if (initiatorType) {
    kind += '.' + initiatorType;
  }
  var spanName = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.stripQueryStringFromUrl)(name);
  var span = new _span__WEBPACK_IMPORTED_MODULE_1__["default"](spanName, kind);
  span._start = startTime;
  span.end(responseEnd, {
    url: name,
    entry: resourceTimingEntry
  });
  return span;
}
function isCapturedByPatching(resourceStartTime, requestPatchTime) {
  return requestPatchTime != null && resourceStartTime > requestPatchTime;
}
function isIntakeAPIEndpoint(url) {
  return /intake\/v\d+\/rum\/events/.test(url);
}
function createResourceTimingSpans(entries, requestPatchTime, trStart, trEnd) {
  var spans = [];
  for (var i = 0; i < entries.length; i++) {
    var _entries$i = entries[i],
      initiatorType = _entries$i.initiatorType,
      name = _entries$i.name,
      startTime = _entries$i.startTime,
      responseEnd = _entries$i.responseEnd;
    if (_common_constants__WEBPACK_IMPORTED_MODULE_2__.RESOURCE_INITIATOR_TYPES.indexOf(initiatorType) === -1 || name == null) {
      continue;
    }
    if ((initiatorType === 'xmlhttprequest' || initiatorType === 'fetch') && (isIntakeAPIEndpoint(name) || isCapturedByPatching(startTime, requestPatchTime))) {
      continue;
    }
    if ((0,_utils__WEBPACK_IMPORTED_MODULE_3__.shouldCreateSpan)(startTime, responseEnd, trStart, trEnd)) {
      spans.push(createResourceTimingSpan(entries[i]));
    }
  }
  return spans;
}


/***/ }),

/***/ 21260:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/navigation/user-timing.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createUserTimingSpans: () => (/* binding */ createUserTimingSpans)
/* harmony export */ });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/constants */ 50894);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ 87353);
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../span */ 381);



function createUserTimingSpans(entries, trStart, trEnd) {
  var userTimingSpans = [];
  for (var i = 0; i < entries.length; i++) {
    var _entries$i = entries[i],
      name = _entries$i.name,
      startTime = _entries$i.startTime,
      duration = _entries$i.duration;
    var end = startTime + duration;
    if (duration <= _common_constants__WEBPACK_IMPORTED_MODULE_0__.USER_TIMING_THRESHOLD || !(0,_utils__WEBPACK_IMPORTED_MODULE_1__.shouldCreateSpan)(startTime, end, trStart, trEnd)) {
      continue;
    }
    var kind = 'app';
    var span = new _span__WEBPACK_IMPORTED_MODULE_2__["default"](name, kind);
    span._start = startTime;
    span.end(end);
    userTimingSpans.push(span);
  }
  return userTimingSpans;
}


/***/ }),

/***/ 87353:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/navigation/utils.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shouldCreateSpan: () => (/* binding */ shouldCreateSpan)
/* harmony export */ });
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/constants */ 50894);

function shouldCreateSpan(start, end, trStart, trEnd, baseTime) {
  if (baseTime === void 0) {
    baseTime = 0;
  }
  return typeof start === 'number' && typeof end === 'number' && start >= baseTime && end > start && start - baseTime >= trStart && end - baseTime <= trEnd && end - start < _common_constants__WEBPACK_IMPORTED_MODULE_0__.MAX_SPAN_DURATION && start - baseTime < _common_constants__WEBPACK_IMPORTED_MODULE_0__.MAX_SPAN_DURATION && end - baseTime < _common_constants__WEBPACK_IMPORTED_MODULE_0__.MAX_SPAN_DURATION;
}


/***/ }),

/***/ 24894:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/performance-monitoring.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   adjustTransaction: () => (/* binding */ adjustTransaction),
/* harmony export */   "default": () => (/* binding */ PerformanceMonitoring),
/* harmony export */   groupSmallContinuouslySimilarSpans: () => (/* binding */ groupSmallContinuouslySimilarSpans)
/* harmony export */ });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/utils */ 63158);
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/url */ 77146);
/* harmony import */ var _common_patching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/patching */ 20110);
/* harmony import */ var _common_patching_patch_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/patching/patch-utils */ 45404);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ 50894);
/* harmony import */ var _common_truncate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/truncate */ 95885);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state */ 49352);







var SIMILAR_SPAN_TO_TRANSACTION_RATIO = 0.05;
var TRANSACTION_DURATION_THRESHOLD = 60000;
function groupSmallContinuouslySimilarSpans(originalSpans, transDuration, threshold) {
  originalSpans.sort(function (spanA, spanB) {
    return spanA._start - spanB._start;
  });
  var spans = [];
  var lastCount = 1;
  originalSpans.forEach(function (span, index) {
    if (spans.length === 0) {
      spans.push(span);
    } else {
      var lastSpan = spans[spans.length - 1];
      var isContinuouslySimilar = lastSpan.type === span.type && lastSpan.subtype === span.subtype && lastSpan.action === span.action && lastSpan.name === span.name && span.duration() / transDuration < threshold && (span._start - lastSpan._end) / transDuration < threshold;
      var isLastSpan = originalSpans.length === index + 1;
      if (isContinuouslySimilar) {
        lastCount++;
        lastSpan._end = span._end;
      }
      if (lastCount > 1 && (!isContinuouslySimilar || isLastSpan)) {
        lastSpan.name = lastCount + 'x ' + lastSpan.name;
        lastCount = 1;
      }
      if (!isContinuouslySimilar) {
        spans.push(span);
      }
    }
  });
  return spans;
}
function adjustTransaction(transaction) {
  if (transaction.sampled) {
    var filterdSpans = transaction.spans.filter(function (span) {
      return span.duration() > 0 && span._start >= transaction._start && span._end <= transaction._end;
    });
    if (transaction.isManaged()) {
      var duration = transaction.duration();
      var similarSpans = groupSmallContinuouslySimilarSpans(filterdSpans, duration, SIMILAR_SPAN_TO_TRANSACTION_RATIO);
      transaction.spans = similarSpans;
    } else {
      transaction.spans = filterdSpans;
    }
  } else {
    transaction.resetFields();
  }
  return transaction;
}
var PerformanceMonitoring = function () {
  function PerformanceMonitoring(apmServer, configService, loggingService, transactionService) {
    this._apmServer = apmServer;
    this._configService = configService;
    this._logginService = loggingService;
    this._transactionService = transactionService;
  }
  var _proto = PerformanceMonitoring.prototype;
  _proto.init = function init(flags) {
    var _this = this;
    if (flags === void 0) {
      flags = {};
    }
    this._configService.events.observe(_common_constants__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_END + _common_constants__WEBPACK_IMPORTED_MODULE_0__.AFTER_EVENT, function (tr) {
      var payload = _this.createTransactionPayload(tr);
      if (payload) {
        _this._apmServer.addTransaction(payload);
        _this._configService.dispatchEvent(_common_constants__WEBPACK_IMPORTED_MODULE_0__.QUEUE_ADD_TRANSACTION);
      }
    });
    if (flags[_common_constants__WEBPACK_IMPORTED_MODULE_0__.HISTORY]) {
      _common_patching__WEBPACK_IMPORTED_MODULE_1__.patchEventHandler.observe(_common_constants__WEBPACK_IMPORTED_MODULE_0__.HISTORY, this.getHistorySub());
    }
    if (flags[_common_constants__WEBPACK_IMPORTED_MODULE_0__.XMLHTTPREQUEST]) {
      _common_patching__WEBPACK_IMPORTED_MODULE_1__.patchEventHandler.observe(_common_constants__WEBPACK_IMPORTED_MODULE_0__.XMLHTTPREQUEST, this.getXHRSub());
    }
    if (flags[_common_constants__WEBPACK_IMPORTED_MODULE_0__.FETCH]) {
      _common_patching__WEBPACK_IMPORTED_MODULE_1__.patchEventHandler.observe(_common_constants__WEBPACK_IMPORTED_MODULE_0__.FETCH, this.getFetchSub());
    }
  };
  _proto.getHistorySub = function getHistorySub() {
    var transactionService = this._transactionService;
    return function (event, task) {
      if (task.source === _common_constants__WEBPACK_IMPORTED_MODULE_0__.HISTORY && event === _common_constants__WEBPACK_IMPORTED_MODULE_0__.INVOKE) {
        transactionService.startTransaction(task.data.title, 'route-change', {
          managed: true,
          canReuse: true
        });
      }
    };
  };
  _proto.getXHRSub = function getXHRSub() {
    var _this2 = this;
    return function (event, task) {
      if (task.source === _common_constants__WEBPACK_IMPORTED_MODULE_0__.XMLHTTPREQUEST && !_common_patching_patch_utils__WEBPACK_IMPORTED_MODULE_2__.globalState.fetchInProgress) {
        _this2.processAPICalls(event, task);
      }
    };
  };
  _proto.getFetchSub = function getFetchSub() {
    var _this3 = this;
    return function (event, task) {
      if (task.source === _common_constants__WEBPACK_IMPORTED_MODULE_0__.FETCH) {
        _this3.processAPICalls(event, task);
      }
    };
  };
  _proto.processAPICalls = function processAPICalls(event, task) {
    var configService = this._configService;
    var transactionService = this._transactionService;
    if (task.data && task.data.url) {
      var endpoints = this._apmServer.getEndpoints();
      var isOwnEndpoint = Object.keys(endpoints).some(function (endpoint) {
        return task.data.url.indexOf(endpoints[endpoint]) !== -1;
      });
      if (isOwnEndpoint) {
        return;
      }
    }
    if (event === _common_constants__WEBPACK_IMPORTED_MODULE_0__.SCHEDULE && task.data) {
      var data = task.data;
      var requestUrl = new _common_url__WEBPACK_IMPORTED_MODULE_3__.Url(data.url);
      var spanName = data.method + ' ' + (requestUrl.relative ? requestUrl.path : (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.stripQueryStringFromUrl)(requestUrl.href));
      if (!transactionService.getCurrentTransaction()) {
        transactionService.startTransaction(spanName, _common_constants__WEBPACK_IMPORTED_MODULE_0__.HTTP_REQUEST_TYPE, {
          managed: true
        });
      }
      var span = transactionService.startSpan(spanName, 'external.http', {
        blocking: true
      });
      if (!span) {
        return;
      }
      var isDtEnabled = configService.get('distributedTracing');
      var dtOrigins = configService.get('distributedTracingOrigins');
      var currentUrl = new _common_url__WEBPACK_IMPORTED_MODULE_3__.Url(window.location.href);
      var isSameOrigin = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.checkSameOrigin)(requestUrl.origin, currentUrl.origin) || (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.checkSameOrigin)(requestUrl.origin, dtOrigins);
      var target = data.target;
      if (isDtEnabled && isSameOrigin && target) {
        this.injectDtHeader(span, target);
        var propagateTracestate = configService.get('propagateTracestate');
        if (propagateTracestate) {
          this.injectTSHeader(span, target);
        }
      } else if (_state__WEBPACK_IMPORTED_MODULE_5__.__DEV__) {
        this._logginService.debug("Could not inject distributed tracing header to the request origin ('" + requestUrl.origin + "') from the current origin ('" + currentUrl.origin + "')");
      }
      if (data.sync) {
        span.sync = data.sync;
      }
      data.span = span;
    } else if (event === _common_constants__WEBPACK_IMPORTED_MODULE_0__.INVOKE) {
      var _data = task.data;
      if (_data && _data.span) {
        var _span = _data.span,
          response = _data.response,
          _target = _data.target;
        var status;
        if (response) {
          status = response.status;
        } else {
          status = _target.status;
        }
        var outcome;
        if (_data.status != 'abort' && !_data.aborted) {
          if (status >= 400 || status == 0) {
            outcome = _common_constants__WEBPACK_IMPORTED_MODULE_0__.OUTCOME_FAILURE;
          } else {
            outcome = _common_constants__WEBPACK_IMPORTED_MODULE_0__.OUTCOME_SUCCESS;
          }
        } else {
          outcome = _common_constants__WEBPACK_IMPORTED_MODULE_0__.OUTCOME_UNKNOWN;
        }
        _span.outcome = outcome;
        var tr = transactionService.getCurrentTransaction();
        if (tr && tr.type === _common_constants__WEBPACK_IMPORTED_MODULE_0__.HTTP_REQUEST_TYPE) {
          tr.outcome = outcome;
        }
        transactionService.endSpan(_span, _data);
      }
    }
  };
  _proto.injectDtHeader = function injectDtHeader(span, target) {
    var headerName = this._configService.get('distributedTracingHeaderName');
    var headerValue = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.getDtHeaderValue)(span);
    var isHeaderValid = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.isDtHeaderValid)(headerValue);
    if (isHeaderValid && headerValue && headerName) {
      (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.setRequestHeader)(target, headerName, headerValue);
    }
  };
  _proto.injectTSHeader = function injectTSHeader(span, target) {
    var headerValue = (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.getTSHeaderValue)(span);
    if (headerValue) {
      (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.setRequestHeader)(target, 'tracestate', headerValue);
    }
  };
  _proto.extractDtHeader = function extractDtHeader(target) {
    var configService = this._configService;
    var headerName = configService.get('distributedTracingHeaderName');
    if (target) {
      return (0,_common_utils__WEBPACK_IMPORTED_MODULE_4__.parseDtHeaderValue)(target[headerName]);
    }
  };
  _proto.filterTransaction = function filterTransaction(tr) {
    var duration = tr.duration();
    if (!duration) {
      if (_state__WEBPACK_IMPORTED_MODULE_5__.__DEV__) {
        var message = "transaction(" + tr.id + ", " + tr.name + ") was discarded! ";
        if (duration === 0) {
          message += "Transaction duration is 0";
        } else {
          message += "Transaction wasn't ended";
        }
        this._logginService.debug(message);
      }
      return false;
    }
    if (tr.isManaged()) {
      if (duration > TRANSACTION_DURATION_THRESHOLD) {
        if (_state__WEBPACK_IMPORTED_MODULE_5__.__DEV__) {
          this._logginService.debug("transaction(" + tr.id + ", " + tr.name + ") was discarded! Transaction duration (" + duration + ") is greater than managed transaction threshold (" + TRANSACTION_DURATION_THRESHOLD + ")");
        }
        return false;
      }
      if (tr.sampled && tr.spans.length === 0) {
        if (_state__WEBPACK_IMPORTED_MODULE_5__.__DEV__) {
          this._logginService.debug("transaction(" + tr.id + ", " + tr.name + ") was discarded! Transaction does not have any spans");
        }
        return false;
      }
    }
    return true;
  };
  _proto.createTransactionDataModel = function createTransactionDataModel(transaction) {
    var transactionStart = transaction._start;
    var spans = transaction.spans.map(function (span) {
      var spanData = {
        id: span.id,
        transaction_id: transaction.id,
        parent_id: span.parentId || transaction.id,
        trace_id: transaction.traceId,
        name: span.name,
        type: span.type,
        subtype: span.subtype,
        action: span.action,
        sync: span.sync,
        start: parseInt(span._start - transactionStart),
        duration: span.duration(),
        context: span.context,
        outcome: span.outcome,
        sample_rate: span.sampleRate
      };
      return (0,_common_truncate__WEBPACK_IMPORTED_MODULE_6__.truncateModel)(_common_truncate__WEBPACK_IMPORTED_MODULE_6__.SPAN_MODEL, spanData);
    });
    var transactionData = {
      id: transaction.id,
      trace_id: transaction.traceId,
      session: transaction.session,
      name: transaction.name,
      type: transaction.type,
      duration: transaction.duration(),
      spans: spans,
      context: transaction.context,
      marks: transaction.marks,
      breakdown: transaction.breakdownTimings,
      span_count: {
        started: spans.length
      },
      sampled: transaction.sampled,
      sample_rate: transaction.sampleRate,
      experience: transaction.experience,
      outcome: transaction.outcome
    };
    return (0,_common_truncate__WEBPACK_IMPORTED_MODULE_6__.truncateModel)(_common_truncate__WEBPACK_IMPORTED_MODULE_6__.TRANSACTION_MODEL, transactionData);
  };
  _proto.createTransactionPayload = function createTransactionPayload(transaction) {
    var adjustedTransaction = adjustTransaction(transaction);
    var filtered = this.filterTransaction(adjustedTransaction);
    if (filtered) {
      return this.createTransactionDataModel(transaction);
    }
    this._configService.dispatchEvent(_common_constants__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_IGNORE);
  };
  return PerformanceMonitoring;
}();


/***/ }),

/***/ 72783:
/*!****************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/span-base.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ 63158);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/constants */ 50894);


var SpanBase = function () {
  function SpanBase(name, type, options) {
    if (options === void 0) {
      options = {};
    }
    if (!name) {
      name = _common_constants__WEBPACK_IMPORTED_MODULE_0__.NAME_UNKNOWN;
    }
    if (!type) {
      type = _common_constants__WEBPACK_IMPORTED_MODULE_0__.TYPE_CUSTOM;
    }
    this.name = name;
    this.type = type;
    this.options = options;
    this.id = options.id || (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.generateRandomId)(16);
    this.traceId = options.traceId;
    this.sampled = options.sampled;
    this.sampleRate = options.sampleRate;
    this.timestamp = options.timestamp;
    this._start = (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.getTime)(options.startTime);
    this._end = undefined;
    this.ended = false;
    this.outcome = undefined;
    this.onEnd = options.onEnd;
  }
  var _proto = SpanBase.prototype;
  _proto.ensureContext = function ensureContext() {
    if (!this.context) {
      this.context = {};
    }
  };
  _proto.addLabels = function addLabels(tags) {
    this.ensureContext();
    var ctx = this.context;
    if (!ctx.tags) {
      ctx.tags = {};
    }
    var keys = Object.keys(tags);
    keys.forEach(function (k) {
      return (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.setLabel)(k, tags[k], ctx.tags);
    });
  };
  _proto.addContext = function addContext() {
    for (var _len = arguments.length, context = new Array(_len), _key = 0; _key < _len; _key++) {
      context[_key] = arguments[_key];
    }
    if (context.length === 0) return;
    this.ensureContext();
    _common_utils__WEBPACK_IMPORTED_MODULE_1__.merge.apply(void 0, [this.context].concat(context));
  };
  _proto.end = function end(endTime) {
    if (this.ended) {
      return;
    }
    this.ended = true;
    this._end = (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.getTime)(endTime);
    this.callOnEnd();
  };
  _proto.callOnEnd = function callOnEnd() {
    if (typeof this.onEnd === 'function') {
      this.onEnd(this);
    }
  };
  _proto.duration = function duration() {
    return (0,_common_utils__WEBPACK_IMPORTED_MODULE_1__.getDuration)(this._start, this._end);
  };
  return SpanBase;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpanBase);

/***/ }),

/***/ 381:
/*!***********************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/span.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _span_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./span-base */ 72783);
/* harmony import */ var _common_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/context */ 30144);
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}


var Span = function (_SpanBase) {
  _inheritsLoose(Span, _SpanBase);
  function Span(name, type, options) {
    var _this;
    _this = _SpanBase.call(this, name, type, options) || this;
    _this.parentId = _this.options.parentId;
    _this.subtype = undefined;
    _this.action = undefined;
    if (_this.type.indexOf('.') !== -1) {
      var fields = _this.type.split('.', 3);
      _this.type = fields[0];
      _this.subtype = fields[1];
      _this.action = fields[2];
    }
    _this.sync = _this.options.sync;
    return _this;
  }
  var _proto = Span.prototype;
  _proto.end = function end(endTime, data) {
    _SpanBase.prototype.end.call(this, endTime);
    (0,_common_context__WEBPACK_IMPORTED_MODULE_0__.addSpanContext)(this, data);
  };
  return Span;
}(_span_base__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Span);

/***/ }),

/***/ 75639:
/*!**************************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/transaction-service.js ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_polyfills__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/polyfills */ 30391);
/* harmony import */ var _transaction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction */ 10457);
/* harmony import */ var _metrics_metrics__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./metrics/metrics */ 95334);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/utils */ 63158);
/* harmony import */ var _navigation_capture_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/capture-navigation */ 95681);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ 50894);
/* harmony import */ var _common_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/context */ 30144);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../state */ 49352);
/* harmony import */ var _common_url__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/url */ 77146);









var TransactionService = function () {
  function TransactionService(logger, config) {
    var _this = this;
    this._config = config;
    this._logger = logger;
    this.currentTransaction = undefined;
    this.respIntervalId = undefined;
    this.recorder = new _metrics_metrics__WEBPACK_IMPORTED_MODULE_0__.PerfEntryRecorder(function (list) {
      var tr = _this.getCurrentTransaction();
      if (tr && tr.captureTimings) {
        var _tr$spans;
        var isHardNavigation = tr.type === _common_constants__WEBPACK_IMPORTED_MODULE_1__.PAGE_LOAD;
        var _captureObserverEntri = (0,_metrics_metrics__WEBPACK_IMPORTED_MODULE_0__.captureObserverEntries)(list, {
            isHardNavigation: isHardNavigation,
            trStart: isHardNavigation ? 0 : tr._start
          }),
          spans = _captureObserverEntri.spans,
          marks = _captureObserverEntri.marks;
        (_tr$spans = tr.spans).push.apply(_tr$spans, spans);
        tr.addMarks({
          agent: marks
        });
      }
    });
  }
  var _proto = TransactionService.prototype;
  _proto.createCurrentTransaction = function createCurrentTransaction(name, type, options) {
    var tr = new _transaction__WEBPACK_IMPORTED_MODULE_2__["default"](name, type, options);
    this.currentTransaction = tr;
    return tr;
  };
  _proto.getCurrentTransaction = function getCurrentTransaction() {
    if (this.currentTransaction && !this.currentTransaction.ended) {
      return this.currentTransaction;
    }
  };
  _proto.createOptions = function createOptions(options) {
    var config = this._config.config;
    var presetOptions = {
      transactionSampleRate: config.transactionSampleRate
    };
    var perfOptions = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.extend)(presetOptions, options);
    if (perfOptions.managed) {
      perfOptions = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.extend)({
        pageLoadTraceId: config.pageLoadTraceId,
        pageLoadSampled: config.pageLoadSampled,
        pageLoadSpanId: config.pageLoadSpanId,
        pageLoadTransactionName: config.pageLoadTransactionName
      }, perfOptions);
    }
    return perfOptions;
  };
  _proto.startManagedTransaction = function startManagedTransaction(name, type, perfOptions) {
    var tr = this.getCurrentTransaction();
    var isRedefined = false;
    if (!tr) {
      tr = this.createCurrentTransaction(name, type, perfOptions);
    } else if (tr.canReuse() && perfOptions.canReuse) {
      var redefineType = tr.type;
      var currentTypeOrder = _common_constants__WEBPACK_IMPORTED_MODULE_1__.TRANSACTION_TYPE_ORDER.indexOf(tr.type);
      var redefineTypeOrder = _common_constants__WEBPACK_IMPORTED_MODULE_1__.TRANSACTION_TYPE_ORDER.indexOf(type);
      if (currentTypeOrder >= 0 && redefineTypeOrder < currentTypeOrder) {
        redefineType = type;
      }
      if (_state__WEBPACK_IMPORTED_MODULE_4__.__DEV__) {
        this._logger.debug("redefining transaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")", 'to', "(" + (name || tr.name) + ", " + redefineType + ")", tr);
      }
      tr.redefine(name, redefineType, perfOptions);
      isRedefined = true;
    } else {
      if (_state__WEBPACK_IMPORTED_MODULE_4__.__DEV__) {
        this._logger.debug("ending previous transaction(" + tr.id + ", " + tr.name + ")", tr);
      }
      tr.end();
      tr = this.createCurrentTransaction(name, type, perfOptions);
    }
    if (tr.type === _common_constants__WEBPACK_IMPORTED_MODULE_1__.PAGE_LOAD) {
      if (!isRedefined) {
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_1__.LARGEST_CONTENTFUL_PAINT);
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_1__.PAINT);
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_1__.FIRST_INPUT);
        this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_SHIFT);
      }
      if (perfOptions.pageLoadTraceId) {
        tr.traceId = perfOptions.pageLoadTraceId;
      }
      if (perfOptions.pageLoadSampled) {
        tr.sampled = perfOptions.pageLoadSampled;
      }
      if (tr.name === _common_constants__WEBPACK_IMPORTED_MODULE_1__.NAME_UNKNOWN && perfOptions.pageLoadTransactionName) {
        tr.name = perfOptions.pageLoadTransactionName;
      }
    }
    if (!isRedefined && this._config.get('monitorLongtasks')) {
      this.recorder.start(_common_constants__WEBPACK_IMPORTED_MODULE_1__.LONG_TASK);
    }
    if (tr.sampled) {
      tr.captureTimings = true;
    }
    return tr;
  };
  _proto.startTransaction = function startTransaction(name, type, options) {
    var _this2 = this;
    var perfOptions = this.createOptions(options);
    var tr;
    var fireOnstartHook = true;
    if (perfOptions.managed) {
      var current = this.currentTransaction;
      tr = this.startManagedTransaction(name, type, perfOptions);
      if (current === tr) {
        fireOnstartHook = false;
      }
    } else {
      tr = new _transaction__WEBPACK_IMPORTED_MODULE_2__["default"](name, type, perfOptions);
    }
    tr.onEnd = function () {
      return _this2.handleTransactionEnd(tr);
    };
    if (fireOnstartHook) {
      if (_state__WEBPACK_IMPORTED_MODULE_4__.__DEV__) {
        this._logger.debug("startTransaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")");
      }
      this._config.events.send(_common_constants__WEBPACK_IMPORTED_MODULE_1__.TRANSACTION_START, [tr]);
    }
    return tr;
  };
  _proto.handleTransactionEnd = function handleTransactionEnd(tr) {
    var _this3 = this;
    this.recorder.stop();
    var currentUrl = window.location.href;
    return _common_polyfills__WEBPACK_IMPORTED_MODULE_5__.Promise.resolve().then(function () {
      var name = tr.name,
        type = tr.type;
      var lastHiddenStart = _state__WEBPACK_IMPORTED_MODULE_4__.state.lastHiddenStart;
      if (lastHiddenStart >= tr._start) {
        if (_state__WEBPACK_IMPORTED_MODULE_4__.__DEV__) {
          _this3._logger.debug("transaction(" + tr.id + ", " + name + ", " + type + ") was discarded! The page was hidden during the transaction!");
        }
        _this3._config.dispatchEvent(_common_constants__WEBPACK_IMPORTED_MODULE_1__.TRANSACTION_IGNORE);
        return;
      }
      if (_this3.shouldIgnoreTransaction(name) || type === _common_constants__WEBPACK_IMPORTED_MODULE_1__.TEMPORARY_TYPE) {
        if (_state__WEBPACK_IMPORTED_MODULE_4__.__DEV__) {
          _this3._logger.debug("transaction(" + tr.id + ", " + name + ", " + type + ") is ignored");
        }
        _this3._config.dispatchEvent(_common_constants__WEBPACK_IMPORTED_MODULE_1__.TRANSACTION_IGNORE);
        return;
      }
      if (type === _common_constants__WEBPACK_IMPORTED_MODULE_1__.PAGE_LOAD) {
        var pageLoadTransactionName = _this3._config.get('pageLoadTransactionName');
        if (name === _common_constants__WEBPACK_IMPORTED_MODULE_1__.NAME_UNKNOWN && pageLoadTransactionName) {
          tr.name = pageLoadTransactionName;
        }
        if (tr.captureTimings) {
          var cls = _metrics_metrics__WEBPACK_IMPORTED_MODULE_0__.metrics.cls,
            fid = _metrics_metrics__WEBPACK_IMPORTED_MODULE_0__.metrics.fid,
            tbt = _metrics_metrics__WEBPACK_IMPORTED_MODULE_0__.metrics.tbt,
            longtask = _metrics_metrics__WEBPACK_IMPORTED_MODULE_0__.metrics.longtask;
          if (tbt.duration > 0) {
            tr.spans.push((0,_metrics_metrics__WEBPACK_IMPORTED_MODULE_0__.createTotalBlockingTimeSpan)(tbt));
          }
          tr.experience = {};
          if ((0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.isPerfTypeSupported)(_common_constants__WEBPACK_IMPORTED_MODULE_1__.LONG_TASK)) {
            tr.experience.tbt = tbt.duration;
          }
          if ((0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.isPerfTypeSupported)(_common_constants__WEBPACK_IMPORTED_MODULE_1__.LAYOUT_SHIFT)) {
            tr.experience.cls = cls.score;
          }
          if (fid > 0) {
            tr.experience.fid = fid;
          }
          if (longtask.count > 0) {
            tr.experience.longtask = {
              count: longtask.count,
              sum: longtask.duration,
              max: longtask.max
            };
          }
        }
        _this3.setSession(tr);
      }
      if (tr.name === _common_constants__WEBPACK_IMPORTED_MODULE_1__.NAME_UNKNOWN) {
        tr.name = (0,_common_url__WEBPACK_IMPORTED_MODULE_6__.slugifyUrl)(currentUrl);
      }
      (0,_navigation_capture_navigation__WEBPACK_IMPORTED_MODULE_7__.captureNavigation)(tr);
      _this3.adjustTransactionTime(tr);
      var breakdownMetrics = _this3._config.get('breakdownMetrics');
      if (breakdownMetrics) {
        tr.captureBreakdown();
      }
      var configContext = _this3._config.get('context');
      (0,_common_context__WEBPACK_IMPORTED_MODULE_8__.addTransactionContext)(tr, configContext);
      _this3._config.events.send(_common_constants__WEBPACK_IMPORTED_MODULE_1__.TRANSACTION_END, [tr]);
      if (_state__WEBPACK_IMPORTED_MODULE_4__.__DEV__) {
        _this3._logger.debug("end transaction(" + tr.id + ", " + tr.name + ", " + tr.type + ")", tr);
      }
    }, function (err) {
      if (_state__WEBPACK_IMPORTED_MODULE_4__.__DEV__) {
        _this3._logger.debug("error ending transaction(" + tr.id + ", " + tr.name + ")", err);
      }
    });
  };
  _proto.setSession = function setSession(tr) {
    var session = this._config.get('session');
    if (session) {
      if (typeof session == 'boolean') {
        tr.session = {
          id: (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.generateRandomId)(16),
          sequence: 1
        };
      } else {
        if (session.timestamp && Date.now() - session.timestamp > _common_constants__WEBPACK_IMPORTED_MODULE_1__.SESSION_TIMEOUT) {
          tr.session = {
            id: (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.generateRandomId)(16),
            sequence: 1
          };
        } else {
          tr.session = {
            id: session.id,
            sequence: session.sequence ? session.sequence + 1 : 1
          };
        }
      }
      var sessionConfig = {
        session: {
          id: tr.session.id,
          sequence: tr.session.sequence,
          timestamp: Date.now()
        }
      };
      this._config.setConfig(sessionConfig);
      this._config.setLocalConfig(sessionConfig, true);
    }
  };
  _proto.adjustTransactionTime = function adjustTransactionTime(transaction) {
    var spans = transaction.spans;
    var earliestSpan = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getEarliestSpan)(spans);
    if (earliestSpan && earliestSpan._start < transaction._start) {
      transaction._start = earliestSpan._start;
    }
    var latestSpan = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getLatestNonXHRSpan)(spans) || {};
    var latestSpanEnd = latestSpan._end || 0;
    if (transaction.type === _common_constants__WEBPACK_IMPORTED_MODULE_1__.PAGE_LOAD) {
      var transactionEndWithoutDelay = transaction._end - _common_constants__WEBPACK_IMPORTED_MODULE_1__.PAGE_LOAD_DELAY;
      var lcp = _metrics_metrics__WEBPACK_IMPORTED_MODULE_0__.metrics.lcp || 0;
      var latestXHRSpan = (0,_common_utils__WEBPACK_IMPORTED_MODULE_3__.getLatestXHRSpan)(spans) || {};
      var latestXHRSpanEnd = latestXHRSpan._end || 0;
      transaction._end = Math.max(latestSpanEnd, latestXHRSpanEnd, lcp, transactionEndWithoutDelay);
    } else if (latestSpanEnd > transaction._end) {
      transaction._end = latestSpanEnd;
    }
    this.truncateSpans(spans, transaction._end);
  };
  _proto.truncateSpans = function truncateSpans(spans, transactionEnd) {
    for (var i = 0; i < spans.length; i++) {
      var span = spans[i];
      if (span._end > transactionEnd) {
        span._end = transactionEnd;
        span.type += _common_constants__WEBPACK_IMPORTED_MODULE_1__.TRUNCATED_TYPE;
      }
      if (span._start > transactionEnd) {
        span._start = transactionEnd;
      }
    }
  };
  _proto.shouldIgnoreTransaction = function shouldIgnoreTransaction(transactionName) {
    var ignoreList = this._config.get('ignoreTransactions');
    if (ignoreList && ignoreList.length) {
      for (var i = 0; i < ignoreList.length; i++) {
        var element = ignoreList[i];
        if (typeof element.test === 'function') {
          if (element.test(transactionName)) {
            return true;
          }
        } else if (element === transactionName) {
          return true;
        }
      }
    }
    return false;
  };
  _proto.startSpan = function startSpan(name, type, options) {
    var tr = this.getCurrentTransaction();
    if (!tr) {
      tr = this.createCurrentTransaction(undefined, _common_constants__WEBPACK_IMPORTED_MODULE_1__.TEMPORARY_TYPE, this.createOptions({
        canReuse: true,
        managed: true
      }));
    }
    var span = tr.startSpan(name, type, options);
    if (_state__WEBPACK_IMPORTED_MODULE_4__.__DEV__) {
      this._logger.debug("startSpan(" + name + ", " + span.type + ")", "on transaction(" + tr.id + ", " + tr.name + ")");
    }
    return span;
  };
  _proto.endSpan = function endSpan(span, context) {
    if (!span) {
      return;
    }
    if (_state__WEBPACK_IMPORTED_MODULE_4__.__DEV__) {
      var tr = this.getCurrentTransaction();
      tr && this._logger.debug("endSpan(" + span.name + ", " + span.type + ")", "on transaction(" + tr.id + ", " + tr.name + ")");
    }
    span.end(null, context);
  };
  return TransactionService;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TransactionService);

/***/ }),

/***/ 10457:
/*!******************************************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/performance-monitoring/transaction.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _span__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./span */ 381);
/* harmony import */ var _span_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./span-base */ 72783);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/utils */ 63158);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ 50894);
/* harmony import */ var _breakdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breakdown */ 54578);
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}





var Transaction = function (_SpanBase) {
  _inheritsLoose(Transaction, _SpanBase);
  function Transaction(name, type, options) {
    var _this;
    _this = _SpanBase.call(this, name, type, options) || this;
    _this.traceId = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.generateRandomId)();
    _this.marks = undefined;
    _this.spans = [];
    _this._activeSpans = {};
    _this._activeTasks = new Set();
    _this.blocked = false;
    _this.captureTimings = false;
    _this.breakdownTimings = [];
    _this.sampleRate = _this.options.transactionSampleRate;
    _this.sampled = Math.random() <= _this.sampleRate;
    return _this;
  }
  var _proto = Transaction.prototype;
  _proto.addMarks = function addMarks(obj) {
    this.marks = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.merge)(this.marks || {}, obj);
  };
  _proto.mark = function mark(key) {
    var skey = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.removeInvalidChars)(key);
    var markTime = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.now)() - this._start;
    var custom = {};
    custom[skey] = markTime;
    this.addMarks({
      custom: custom
    });
  };
  _proto.canReuse = function canReuse() {
    var threshold = this.options.reuseThreshold || _common_constants__WEBPACK_IMPORTED_MODULE_1__.REUSABILITY_THRESHOLD;
    return !!this.options.canReuse && !this.ended && (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.now)() - this._start < threshold;
  };
  _proto.redefine = function redefine(name, type, options) {
    if (name) {
      this.name = name;
    }
    if (type) {
      this.type = type;
    }
    if (options) {
      this.options.reuseThreshold = options.reuseThreshold;
      (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.extend)(this.options, options);
    }
  };
  _proto.startSpan = function startSpan(name, type, options) {
    var _this2 = this;
    if (this.ended) {
      return;
    }
    var opts = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.extend)({}, options);
    opts.onEnd = function (trc) {
      _this2._onSpanEnd(trc);
    };
    opts.traceId = this.traceId;
    opts.sampled = this.sampled;
    opts.sampleRate = this.sampleRate;
    if (!opts.parentId) {
      opts.parentId = this.id;
    }
    var span = new _span__WEBPACK_IMPORTED_MODULE_2__["default"](name, type, opts);
    this._activeSpans[span.id] = span;
    if (opts.blocking) {
      this.addTask(span.id);
    }
    return span;
  };
  _proto.isFinished = function isFinished() {
    return !this.blocked && this._activeTasks.size === 0;
  };
  _proto.detectFinish = function detectFinish() {
    if (this.isFinished()) this.end();
  };
  _proto.end = function end(endTime) {
    if (this.ended) {
      return;
    }
    this.ended = true;
    this._end = (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.getTime)(endTime);
    for (var sid in this._activeSpans) {
      var span = this._activeSpans[sid];
      span.type = span.type + _common_constants__WEBPACK_IMPORTED_MODULE_1__.TRUNCATED_TYPE;
      span.end(endTime);
    }
    this.callOnEnd();
  };
  _proto.captureBreakdown = function captureBreakdown() {
    this.breakdownTimings = (0,_breakdown__WEBPACK_IMPORTED_MODULE_3__.captureBreakdown)(this);
  };
  _proto.block = function block(flag) {
    this.blocked = flag;
    if (!this.blocked) {
      this.detectFinish();
    }
  };
  _proto.addTask = function addTask(taskId) {
    if (!taskId) {
      taskId = 'task-' + (0,_common_utils__WEBPACK_IMPORTED_MODULE_0__.generateRandomId)(16);
    }
    this._activeTasks.add(taskId);
    return taskId;
  };
  _proto.removeTask = function removeTask(taskId) {
    var deleted = this._activeTasks.delete(taskId);
    deleted && this.detectFinish();
  };
  _proto.resetFields = function resetFields() {
    this.spans = [];
    this.sampleRate = 0;
  };
  _proto._onSpanEnd = function _onSpanEnd(span) {
    this.spans.push(span);
    delete this._activeSpans[span.id];
    this.removeTask(span.id);
  };
  _proto.isManaged = function isManaged() {
    return !!this.options.managed;
  };
  return Transaction;
}(_span_base__WEBPACK_IMPORTED_MODULE_4__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Transaction);

/***/ }),

/***/ 49352:
/*!*************************************************************!*\
  !*** ./node_modules/@elastic/apm-rum-core/dist/es/state.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __DEV__: () => (/* binding */ __DEV__),
/* harmony export */   state: () => (/* binding */ state)
/* harmony export */ });
var __DEV__ = "development" !== 'production';
var state = {
  bootstrapTime: null,
  lastHiddenStart: Number.MIN_SAFE_INTEGER
};


/***/ }),

/***/ 22909:
/*!***********************************************************!*\
  !*** ./node_modules/@elastic/apm-rum/dist/es/apm-base.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ApmBase)
/* harmony export */ });
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/apm-rum-core */ 50894);
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/apm-rum-core */ 39130);
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/apm-rum-core */ 78289);
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/apm-rum-core */ 92140);
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @elastic/apm-rum-core */ 24552);

var ApmBase = function () {
  function ApmBase(serviceFactory, disable) {
    this._disable = disable;
    this.serviceFactory = serviceFactory;
    this._initialized = false;
  }
  var _proto = ApmBase.prototype;
  _proto.isEnabled = function isEnabled() {
    return !this._disable;
  };
  _proto.isActive = function isActive() {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.CONFIG_SERVICE);
    return this.isEnabled() && this._initialized && configService.get('active');
  };
  _proto.init = function init(config) {
    var _this = this;
    if (this.isEnabled() && !this._initialized) {
      this._initialized = true;
      var _this$serviceFactory$ = this.serviceFactory.getService([_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.CONFIG_SERVICE, _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.LOGGING_SERVICE, _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_SERVICE]),
        configService = _this$serviceFactory$[0],
        loggingService = _this$serviceFactory$[1],
        transactionService = _this$serviceFactory$[2];
      configService.setVersion('5.16.0');
      this.config(config);
      var logLevel = configService.get('logLevel');
      loggingService.setLevel(logLevel);
      var isConfigActive = configService.get('active');
      if (isConfigActive) {
        this.serviceFactory.init();
        var flags = (0,_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_1__.getInstrumentationFlags)(configService.get('instrument'), configService.get('disableInstrumentations'));
        var performanceMonitoring = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.PERFORMANCE_MONITORING);
        performanceMonitoring.init(flags);
        if (flags[_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.ERROR]) {
          var errorLogging = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.ERROR_LOGGING);
          errorLogging.registerListeners();
        }
        if (configService.get('session')) {
          var localConfig = configService.getLocalConfig();
          if (localConfig && localConfig.session) {
            configService.setConfig({
              session: localConfig.session
            });
          }
        }
        var sendPageLoad = function sendPageLoad() {
          return flags[_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.PAGE_LOAD] && _this._sendPageLoadMetrics();
        };
        if (configService.get('centralConfig')) {
          this.fetchCentralConfig().then(sendPageLoad);
        } else {
          sendPageLoad();
        }
        (0,_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_2__.observePageVisibility)(configService, transactionService);
        if (flags[_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.EVENT_TARGET] && flags[_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.CLICK]) {
          (0,_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_3__.observePageClicks)(transactionService);
        }
        (0,_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_4__.observeUserInteractions)();
      } else {
        this._disable = true;
        loggingService.warn('RUM agent is inactive');
      }
    }
    return this;
  };
  _proto.fetchCentralConfig = function fetchCentralConfig() {
    var _this$serviceFactory$2 = this.serviceFactory.getService([_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.APM_SERVER, _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.LOGGING_SERVICE, _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.CONFIG_SERVICE]),
      apmServer = _this$serviceFactory$2[0],
      loggingService = _this$serviceFactory$2[1],
      configService = _this$serviceFactory$2[2];
    return apmServer.fetchConfig(configService.get('serviceName'), configService.get('environment')).then(function (config) {
      var transactionSampleRate = config['transaction_sample_rate'];
      if (transactionSampleRate) {
        transactionSampleRate = Number(transactionSampleRate);
        var _config2 = {
          transactionSampleRate: transactionSampleRate
        };
        var _configService$valida = configService.validate(_config2),
          invalid = _configService$valida.invalid;
        if (invalid.length === 0) {
          configService.setConfig(_config2);
        } else {
          var _invalid$ = invalid[0],
            key = _invalid$.key,
            value = _invalid$.value,
            allowed = _invalid$.allowed;
          loggingService.warn("invalid value \"" + value + "\" for " + key + ". Allowed: " + allowed + ".");
        }
      }
      return config;
    }).catch(function (error) {
      loggingService.warn('failed fetching config:', error);
    });
  };
  _proto._sendPageLoadMetrics = function _sendPageLoadMetrics() {
    var tr = this.startTransaction(undefined, _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.PAGE_LOAD, {
      managed: true,
      canReuse: true
    });
    if (!tr) {
      return;
    }
    tr.addTask(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.PAGE_LOAD);
    var sendPageLoadMetrics = function sendPageLoadMetrics() {
      setTimeout(function () {
        return tr.removeTask(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.PAGE_LOAD);
      }, _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.PAGE_LOAD_DELAY);
    };
    if (document.readyState === 'complete') {
      sendPageLoadMetrics();
    } else {
      window.addEventListener('load', sendPageLoadMetrics);
    }
  };
  _proto.observe = function observe(name, fn) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.CONFIG_SERVICE);
    configService.events.observe(name, fn);
  };
  _proto.config = function config(_config) {
    var _this$serviceFactory$3 = this.serviceFactory.getService([_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.CONFIG_SERVICE, _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.LOGGING_SERVICE]),
      configService = _this$serviceFactory$3[0],
      loggingService = _this$serviceFactory$3[1];
    var _configService$valida2 = configService.validate(_config),
      missing = _configService$valida2.missing,
      invalid = _configService$valida2.invalid,
      unknown = _configService$valida2.unknown;
    if (unknown.length > 0) {
      var message = 'Unknown config options are specified for RUM agent: ' + unknown.join(', ');
      loggingService.warn(message);
    }
    if (missing.length === 0 && invalid.length === 0) {
      configService.setConfig(_config);
    } else {
      var separator = ', ';
      var _message = "RUM agent isn't correctly configured. ";
      if (missing.length > 0) {
        _message += missing.join(separator) + ' is missing';
        if (invalid.length > 0) {
          _message += separator;
        }
      }
      invalid.forEach(function (_ref, index) {
        var key = _ref.key,
          value = _ref.value,
          allowed = _ref.allowed;
        _message += key + " \"" + value + "\" contains invalid characters! (allowed: " + allowed + ")" + (index !== invalid.length - 1 ? separator : '');
      });
      loggingService.error(_message);
      configService.setConfig({
        active: false
      });
    }
  };
  _proto.setUserContext = function setUserContext(userContext) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.CONFIG_SERVICE);
    configService.setUserContext(userContext);
  };
  _proto.setCustomContext = function setCustomContext(customContext) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.CONFIG_SERVICE);
    configService.setCustomContext(customContext);
  };
  _proto.addLabels = function addLabels(labels) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.CONFIG_SERVICE);
    configService.addLabels(labels);
  };
  _proto.setInitialPageLoadName = function setInitialPageLoadName(name) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.CONFIG_SERVICE);
    configService.setConfig({
      pageLoadTransactionName: name
    });
  };
  _proto.startTransaction = function startTransaction(name, type, options) {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_SERVICE);
      return transactionService.startTransaction(name, type, options);
    }
  };
  _proto.startSpan = function startSpan(name, type, options) {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_SERVICE);
      return transactionService.startSpan(name, type, options);
    }
  };
  _proto.getCurrentTransaction = function getCurrentTransaction() {
    if (this.isEnabled()) {
      var transactionService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.TRANSACTION_SERVICE);
      return transactionService.getCurrentTransaction();
    }
  };
  _proto.captureError = function captureError(error) {
    if (this.isEnabled()) {
      var errorLogging = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.ERROR_LOGGING);
      return errorLogging.logError(error);
    }
  };
  _proto.addFilter = function addFilter(fn) {
    var configService = this.serviceFactory.getService(_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_0__.CONFIG_SERVICE);
    configService.addFilter(fn);
  };
  return ApmBase;
}();


/***/ }),

/***/ 54823:
/*!********************************************************!*\
  !*** ./node_modules/@elastic/apm-rum/dist/es/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApmBase: () => (/* reexport safe */ _apm_base__WEBPACK_IMPORTED_MODULE_0__["default"]),
/* harmony export */   apm: () => (/* binding */ apmBase),
/* harmony export */   apmBase: () => (/* binding */ apmBase),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   init: () => (/* binding */ init)
/* harmony export */ });
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @elastic/apm-rum-core */ 63158);
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @elastic/apm-rum-core */ 10955);
/* harmony import */ var _elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @elastic/apm-rum-core */ 10901);
/* harmony import */ var _apm_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apm-base */ 22909);


function getApmBase() {
  if (_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_1__.isBrowser && window.elasticApm) {
    return window.elasticApm;
  }
  var enabled = (0,_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_2__.bootstrap)();
  var serviceFactory = (0,_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_3__.createServiceFactory)();
  var apmBase = new _apm_base__WEBPACK_IMPORTED_MODULE_0__["default"](serviceFactory, !enabled);
  if (_elastic_apm_rum_core__WEBPACK_IMPORTED_MODULE_1__.isBrowser) {
    window.elasticApm = apmBase;
  }
  return apmBase;
}
var apmBase = getApmBase();
var init = apmBase.init.bind(apmBase);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);


/***/ }),

/***/ 47932:
/*!********************************************!*\
  !*** ./src/app/auth-module/auth.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthModule: () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var _guards_login_guard_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../guards/login-guard.service */ 42617);
/* harmony import */ var _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password/change-password.component */ 77030);
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error/error.component */ 79558);
/* harmony import */ var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forgot-password/forgot-password.component */ 6410);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ 19062);
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logout/logout.component */ 83484);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ 2378);
/* harmony import */ var _two_fa_two_fa_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./two-fa/two-fa.component */ 65828);




// import { LoginService } from "../services/rest/login.service";







// import { ChangePasswordComponent } from './change-password/change-password.component';
// import { ErrorComponent } from './error/error.component';
// import { TwoFaComponent } from './two-fa/two-fa.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { LoginComponent } from './login/login.component';
/** fixed config for login pages */
const routeConfig = {
  header: false,
  footer: false,
  indices: false,
  betaFooter: false,
  ticker: false,
  watchlist: false,
  freshChat: false
};
const AuthRoutes = [{
  path: "login",
  canActivate: [_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_0__.LoginGuard],
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__.LoginComponent,
  data: {
    config: routeConfig
  }
}, {
  path: "twoFA",
  canActivate: [_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_0__.LoginGuard],
  component: _two_fa_two_fa_component__WEBPACK_IMPORTED_MODULE_7__.TwoFaComponent,
  data: {
    config: routeConfig
  }
}, {
  path: "register",
  canActivate: [],
  component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__.RegisterComponent,
  data: {
    config: routeConfig
  }
}, {
  path: "error",
  canActivate: [],
  component: _error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent,
  data: {
    config: routeConfig
  }
}, {
  path: "forgotPassword",
  canActivate: [_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_0__.LoginGuard],
  component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_3__.ForgotPasswordComponent,
  data: {
    config: routeConfig
  }
}, {
  path: "changePassword",
  canActivate: [_guards_login_guard_service__WEBPACK_IMPORTED_MODULE_0__.LoginGuard],
  component: _change_password_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent,
  data: {
    config: routeConfig
  }
},
// { path: 'forgotPin', canActivate: [LoginGuard], component: ForgotAnswerComponent, data: { config: routeConfig } },
{
  path: "logout",
  canActivate: [],
  component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__.LogoutComponent,
  data: {
    config: {
      header: false,
      footer: true,
      indices: false,
      betaFooter: false,
      ticker: true,
      watchlist: false,
      watchlistHidden: true,
      freshChat: false
    },
    fullScreen: true
  }
}, {
  path: "logout/all",
  canActivate: [],
  component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_5__.LogoutComponent,
  data: {
    config: {
      header: false,
      footer: true,
      indices: false,
      betaFooter: false,
      ticker: true,
      watchlist: false,
      watchlistHidden: true,
      freshChat: false
    },
    fullScreen: true
  }
}];
let AuthModule = class AuthModule {};
AuthModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(AuthRoutes)]
  // providers: [LoginService],
  // TwoFaComponent,
})], AuthModule);


/***/ }),

/***/ 77030:
/*!**************************************************************************!*\
  !*** ./src/app/auth-module/change-password/change-password.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangePasswordComponent: () => (/* binding */ ChangePasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.component.html?ngResource */ 11350);
/* harmony import */ var _change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.component.scss?ngResource */ 69120);
/* harmony import */ var _change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var _directives_block_copy_paste_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../directives/block-copy-paste.directive */ 54309);
/* harmony import */ var _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/input-restrict2.directive */ 5833);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/analytics/analytics.service */ 50213);
/* harmony import */ var _services_rest_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/rest/login.service */ 60954);













/**
 * Component for Change Password Form
 */
let ChangePasswordComponent = class ChangePasswordComponent {
  /**
   * Constructor for Object Initialization
   * @param route Router Module Instance
   * @param rest LoginService instance for HTTP Requests
   * @param shared SharedDataService Instance
   * @param utils UtilsService instance
   * @param AnalyticsService for google analytics
   */
  constructor(cryptography, analytics, route, rest, shared, utils) {
    this.cryptography = cryptography;
    this.analytics = analytics;
    this.route = route;
    this.rest = rest;
    this.shared = shared;
    this.utils = utils;
    this.shared.isSSO = localStorage.getItem('isSSO') == 'true';
    this.change = {};
    this.user = {};
    this.timer = 30;
    this.shared.params.clientId = this.shared.params.clientId ? this.shared.params.clientId.toUpperCase() : "";
  }
  /**
   * Life Cycle Hook for Initialization
   */
  ngOnInit() {
    this.setTimer();
    let main = document.getElementById("main-container");
    if (main) {
      main.classList.add("login-main-container");
    }
    let body = document.getElementById("section-body-data");
    if (body) {
      body.classList.add("body-login-page");
    }
  }
  ngOnDestroy() {
    let main = document.getElementById("main-container");
    if (main) {
      main.classList.remove("login-main-container");
    }
    let body = document.getElementById("section-body-data");
    if (body) {
      body.classList.remove("body-login-page");
    }
  }
  /**
   * Life Cycle Hook after Component Views has been rendered
   */
  ngAfterViewInit() {
    if (this.currentPwd) this.currentPwd.nativeElement.focus();
    setTimeout(() => {
      this.isResendVisible = this.shared.params && !this.shared.params.isExpired;
    }, 30000);
  }
  /** Change Password after form Submission */
  changePassword(changePasswordForm) {
    let request;
    if (changePasswordForm.form && changePasswordForm.form.status == "INVALID") {
      return;
    }
    if (!this.shared.params.fromForgotPwd) {
      request = {
        userId: this.utils.getUserId(),
        pwd: !this.shared.params.fromForgotPwd ? this.cryptography.encryptText(this.shared.params.currentPwd.trim()) : this.cryptography.encryptText(this.change.currentPassword.trim()),
        newPwd: this.cryptography.encryptText(this.change.newPassword.trim()),
        isOTPRequired: true,
        deviceType: "W",
        "ip": this.utils.get("address") || "",
        "mode": 11,
        "deviceId": this.utils.get("fingerprint") || ""
      };
    } else {
      request = {
        userId: this.utils.getUserId(),
        newPwd: this.cryptography.encryptText(this.change.newPassword.trim()),
        vTok: this.vToken,
        "ip": this.utils.get("address") || "",
        "mode": 11,
        "deviceId": this.utils.get("fingerprint") || "",
        deviceType: "W"
      };
    }
    if (this.change.newPassword.indexOf(" ") > -1) {
      this.utils.error("Error", "Spaces not allowed in new Password");
      return;
    } else if (this.change.newPassword.length < 6 || this.change.newPassword.length > 12) {
      this.utils.error("Error", "New password should be between 6-12 characters");
      return;
    } else if (this.change.newPassword.toLowerCase().indexOf(request.userId.toLowerCase()) > -1) {
      this.utils.error("Error", "New password cannot contain Client ID.");
      return;
    }
    let apiUrlSlug = this.shared.params.fromForgotPwd ? "setPwd" : "changePwd";
    // this.utils.trackMoeEvent("onChangePasswordRequest", {"UserId": request.UserId, "IP": this.shared.IPAddress});
    this.rest.changePassword(request, apiUrlSlug).subscribe(data => {
      if (data.Status === "Success" && data.Response && !this.shared.params.fromForgotPwd && (data.Response.LogonStatus == "10006" || data.Response.LogonStatus == "1111" || data.Response.LogonStatus == "10000")) {
        // data.Response.Default2FA = "PIN";
        this.shared.params = {
          clientId: this.utils.getUserId(),
          successLogin: data.Response.IsFirstLogin,
          questionId1: data.Response.QuestionID1,
          questionId2: data.Response.QuestionID2,
          pwd: this.change.newPassword.trim(),
          isPin: data.Response.Default2FA == "OTP" ? false : true
        };
        localStorage.setItem("IsFirstLogin", data.Response.IsFirstLogin);
        this.logonStatus = data.Response.LogonStatus;
        this.analytics.loginEvent(data);
        this.analytics.changePasswordEvent(data);
        this.utils.success("Success", "Password Changed Successfully");
        let routeNav = this.logonStatus == "10006" ? "/auth/twoFA" : this.logonStatus == "1111" ? "/auth/forgotPin" : "/auth/twoFA";
        this.route.navigate([routeNav]);
      } else {
        if (data.Status === "Success" && data.Response && this.shared.params.fromForgotPwd) {
          this.logonStatus = data.Response.LogonStatus;
          this.pwdResetSuccess = true;
          // this.utils.success("Success", "Password Changed Successfully");
          // this.route.navigate(["/auth/login"]);
        } else {
          this.utils.error("Error", data.Reason);
        }
      }
    }, err => {
      this.shared.isServiceHit = false;
      this.utils.error("Error", "Something went wrong, Please Try again.");
    });
  }
  /** Resend Forgot Password Mail and Message*/
  resendForgotPassword(startTimer) {
    // this.utils.trackMoeEvent("resendForgotPasswordRequest", {"UserId": this.utils.getUserId(), "IP": this.shared.IPAddress});
    this.shared.params["mode"] = 11;
    let request;
    if (this.shared.params.fromForgotPwd) {
      request = {
        userId: this.utils.getUserId().toUpperCase(),
        //this.shared.params.isPan ? '' : this.utils.getUserId().toUpperCase(),
        groupId: "HO",
        emailId: "",
        clientIP: this.shared.IPAddress,
        clientMAC: "",
        mobile: "",
        pan: "",
        //!this.shared.params.isPan ? '' : this.utils.getUserId().toUpperCase(),
        "ip": this.utils.get("address") || "",
        "mode": 11,
        "deviceId": this.utils.get("fingerprint") || "",
        deviceType: "W"
      };
    } else {
      request = this.shared.params;
      request['ip'] = this.utils.get("address") || "", request['mode'] = 11, request["deviceId"] = this.utils.get("fingerprint") || "";
    }
    this.rest.forgotPassword(request).subscribe(data => {
      this.isResendVisible = false;
      setTimeout(() => {
        this.isResendVisible = true;
      }, 30000);
      if (data.Status === "Success" && data.Response) {
        let msg = data.Response; //.substring(data.Response.indexOf("19=") + 3);
        this.utils.info("Mail Resent", msg);
        if (startTimer) {
          this.setTimer();
        }
      } else {
        this.utils.error("Error", data.Reason);
      }
    }, err => {
      this.isResendVisible = true;
    });
  }
  setTimer() {
    this.resendOTP = false;
    this.resendInterval = setInterval(() => {
      if (this.timer) {
        this.timer--;
      } else {
        this.resendOTP = true;
        this.timer = 30;
        clearInterval(this.resendInterval);
      }
    }, 1000);
  }
  resendOtp(onCall) {
    this.setTimer();
    let request = {
      userId: this.cryptography.encryptText(this.utils.getUserId().trim().toUpperCase()),
      deviceType: "W",
      onCallOTPRequired: onCall,
      "ip": this.utils.get("address") || "",
      "mode": 11,
      "deviceId": this.utils.get("fingerprint") || ""
    };
    this.rest.resendLoginOtp(request).subscribe(data => {
      if (data.Status == "Success") {
        let msg = onCall ? "You will receive call on your registered mobile number shortly for OTP" : data.Response;
        this.utils.info("Attention", msg);
      } else {
        this.utils.error("Error", data.Reason);
      }
    }, err => {
      this.utils.error("Error", "Something went wrong. Please try again later");
    });
  }
  verifyOtp() {
    let request = {
      userId: this.utils.getUserId().toUpperCase(),
      // this.shared.params.isPan
      //   ? ""
      //   : this.utils.getUserId().toUpperCase(),
      // deviceId: this.utils.get("fingerprint") || "",
      // mode: 11,
      otp: this.user.answer1,
      pan: "",
      //!this.shared.params.isPan ? '' : this.utils.getUserId().toUpperCase(),
      "ip": this.utils.get("address") || "",
      "mode": 11,
      "deviceId": this.utils.get("fingerprint") || "",
      deviceType: "W"
    };
    this.rest.validateForgotPwdOtp(request).subscribe(data => {
      if (data.Status == "Success") {
        this.otpVerified = true;
        this.vToken = data.Response;
        this.shared.params.fromForgotPwd = true;
      } else {
        this.utils.error("Failed", data.Reason);
      }
    }, err => {
      this.utils.error("Failed", "Invalid OTP or Expired");
    });
  }
  navigatetoLogin() {
    this.route.navigate(["/auth/login"]);
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__.CryptographyService
    }, {
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_7__.AnalyticsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
    }, {
      type: _services_rest_login_service__WEBPACK_IMPORTED_MODULE_8__.LoginService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService
    }];
  }
  static {
    this.propDecorators = {
      currentPwd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
        args: ["currentPwd", {
          static: false
        }]
      }],
      checkAnswer1: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild,
        args: ["checkAnswer1"]
      }]
    };
  }
};
ChangePasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: "app-change-password",
  template: _change_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_4__.InputRestrict2Directive, _directives_block_copy_paste_directive__WEBPACK_IMPORTED_MODULE_3__.BlockCopyPasteDirective, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink],
  styles: [(_change_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__metadata)("design:paramtypes", [src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__.CryptographyService, _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_7__.AnalyticsService, _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router, _services_rest_login_service__WEBPACK_IMPORTED_MODULE_8__.LoginService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_5__.SharedDataService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_6__.UtilsService])], ChangePasswordComponent);


/***/ }),

/***/ 79558:
/*!******************************************************!*\
  !*** ./src/app/auth-module/error/error.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorComponent: () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.component.html?ngResource */ 28582);
/* harmony import */ var _error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.component.scss?ngResource */ 68136);
/* harmony import */ var _error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 17705);




let ErrorComponent = class ErrorComponent {
  constructor() {}
  ngOnInit() {
    let main = document.getElementById("main-container");
    if (main) {
      main.classList.add("login-main-container");
    }
    let body = document.getElementById("section-body-data");
    if (body) {
      body.classList.add("body-login-page");
    }
  }
  ngOnDestroy() {
    let main = document.getElementById("main-container");
    if (main) {
      main.classList.remove("login-main-container");
    }
    let body = document.getElementById("section-body-data");
    if (body) {
      body.classList.remove("body-login-page");
    }
  }
  static {
    this.ctorParameters = () => [];
  }
};
ErrorComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-error',
  template: _error_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  styles: [(_error_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], ErrorComponent);


/***/ }),

/***/ 6410:
/*!**************************************************************************!*\
  !*** ./src/app/auth-module/forgot-password/forgot-password.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _forgot_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.component.html?ngResource */ 36954);
/* harmony import */ var _forgot_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.component.scss?ngResource */ 84924);
/* harmony import */ var _forgot_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forgot_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/rest/post-login.service */ 4135);
/* harmony import */ var _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../directives/input-restrict2.directive */ 5833);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);
/* harmony import */ var _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../services/analytics/analytics.service */ 50213);
/* harmony import */ var _services_rest_login_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../../services/rest/login.service */ 60954);














/**
 * Component for Forgot Password Form
 */
let ForgotPasswordComponent = class ForgotPasswordComponent {
  /**
   * Constructor for Object Initialization
   * @param route Router Module Instance
   * @param rest LoginService instance for HTTP Requests
   * @param shared SharedDataService Instance
   * @param utils UtilsService instance
   * @param AnalyticsService for google  analytics
   */
  constructor(cryptography, analytics, route, rest, shared, utils, seo, renderer, postLoginService) {
    this.cryptography = cryptography;
    this.analytics = analytics;
    this.route = route;
    this.rest = rest;
    this.shared = shared;
    this.utils = utils;
    this.seo = seo;
    this.renderer = renderer;
    this.postLoginService = postLoginService;
  }
  /**
   * Life Cycle Hook for Initialization
   */
  ngOnInit() {
    this.forgot = {};
    this.seo.setMeta("forgot-password");
    let main = document.getElementById("main-container");
    if (main) {
      main.classList.add("login-main-container");
    }
    let body = document.getElementById("section-body-data");
    if (body) {
      body.classList.add("body-login-page");
    }
    this.customError = {
      inActive: false,
      msg: "",
      title: "",
      isSuspended: false,
      navigateToSupport: false
    };
  }
  ngOnDestroy() {
    let main = document.getElementById("main-container");
    if (main) {
      main.classList.remove("login-main-container");
    }
    let body = document.getElementById("section-body-data");
    if (body) {
      body.classList.remove("body-login-page");
    }
  }
  /** Reset Password after form Submission */
  resetPassword(event) {
    let request = {
      userId: this.forgot.clientId && this.forgot.clientId.trim() ? this.forgot.clientId.toUpperCase().trim() : "",
      groupId: "HO",
      emailId: "",
      clientIP: this.shared.IPAddress,
      clientMAC: "",
      mobile: "",
      pan: this.forgot.pancard ? this.forgot.pancard.toUpperCase().trim() : "",
      "ip": this.utils.get("address") || "",
      "mode": 11,
      "deviceId": this.utils.get("fingerprint") || "",
      deviceType: "W"
    };
    this.shared.params = request;
    this.forgotPwdRequest = true;
    // this.utils.trackMoeEvent("resetPasswordRequest", {"UserId": request.UserId, "IP": this.shared.IPAddress});
    this.rest.forgotPassword(request).subscribe(data => {
      this.forgotPwdRequest = false;
      if (data.Status == "Success" && data.Response && data.Response.LogonStatus == "10016") {
        this.forgot.clientId = data.Response.UserId;
        this.renderer.setStyle(document.body, "overflow", "hidden");
        this.customError.isSuspended = true;
        this.customError.title = "User Suspended";
        this.customError.msg = "Your Account is Suspended!!!";
        this.customError.navigateToSupport = true;
      } else if (data.Status === "Success" && data.Response && data.Response.LogonStatus == "-101" && !data.Response.IsInActive) {
        this.forgot.clientId = data.Response.UserId;
        this.renderer.setStyle(document.body, "overflow", "hidden");
        this.customError.inActive = true;
        this.customError.title = "Attention";
        this.customError.msg = "Sorry, we are unable to map your account at the moment. Please contact our support team for assistance in resolving this issue promptly.";
        this.customError.navigateToSupport = true;
      } else if (data.Status === "Success" && data.Response && !data.Response.IsInActive) {
        this.shared.params.successLogin = false;
        this.utils.info("Mail Sent", data.Response.Message);
        let clientID = data.Response.UserId;
        this.analytics.forgotPasswordEvent(request);
        this.shared.params.fromForgotPwd = true;
        this.shared.params.clientId = clientID;
        this.shared.params.isPan = this.forgot.pancard ? true : false;
        this.utils.storeUserId(clientID);
        this.route.navigate(["/auth/changePassword"]);
        // this.utils.trackMoeEvent("resetPasswordResponse", {"status": data.Status});
      } else if (data.Status === "Success" && data.Response && data.Response.IsInActive) {
        this.renderer.setStyle(document.body, "overflow", "hidden");
        this.customError.inActive = data.Response.IsInActive;
        this.customError.title = 'Attention';
        this.forgot.clientId = data.Response.UserId;
        this.customError.msg = "Your account has been marked inactive due to inactivity in the last 12 months. Please complete your Re-KYC to re-activate your account";
        this.customError.navigateToSupport = false;
      } else {
        this.utils.error("Error", data.Reason);
        // this.utils.trackMoeEvent("resetPasswordResponse", {"reason": data.Reason});
      }
    }, err => {
      this.shared.isServiceHit = false;
      this.forgotPwdRequest = false;
      this.utils.error("Error", "Something went wrong, Please Try again.");
    });
  }
  toggleForm() {
    this.isPan = !this.isPan;
    this.forgot.clientId = null;
    this.forgot.pancard = null;
  }
  navigateToModificationFlow() {
    this.customError.inActive = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
    let userId = this.forgot.clientId && this.forgot.clientId.trim() ? this.forgot.clientId.toUpperCase().trim() : "";
    let url = this.postLoginService.getOnboardingModificationURL(btoa(userId), encodeURIComponent(this.cryptography.encryptText(userId)), "undefined");
    url = url.replace("&sid=undefined", "");
    url = url + "&type=dormant";
    window.open(url, "_blank");
  }
  navigateToSupport() {
    this.customError.inActive = false;
    this.customError.isSuspended = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
    this.route.navigate(["/support"]);
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__.CryptographyService
    }, {
      type: _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_8__.AnalyticsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
    }, {
      type: _services_rest_login_service__WEBPACK_IMPORTED_MODULE_9__.LoginService
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2
    }, {
      type: src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_3__.PostLoginService
    }];
  }
};
ForgotPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: "app-forgot-password",
  template: _forgot_password_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_4__.InputRestrict2Directive, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink],
  styles: [(_forgot_password_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__metadata)("design:paramtypes", [src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_2__.CryptographyService, _services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_8__.AnalyticsService, _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router, _services_rest_login_service__WEBPACK_IMPORTED_MODULE_9__.LoginService, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_5__.SeoService, _angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2, src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_3__.PostLoginService])], ForgotPasswordComponent);


/***/ }),

/***/ 19062:
/*!******************************************************!*\
  !*** ./src/app/auth-module/login/login.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 69334);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.scss?ngResource */ 47720);
/* harmony import */ var _login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-oauth2-oidc */ 1244);
/* harmony import */ var src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/analytics/analytics.service */ 50213);
/* harmony import */ var src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api-urls */ 26702);
/* harmony import */ var src_app_services_apm_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apm.service */ 28010);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/firestore/firestore.service */ 49125);
/* harmony import */ var src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/rest/post-login.service */ 4135);
/* harmony import */ var _directives_input_restrict_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/input-restrict.directive */ 41009);
/* harmony import */ var _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/show-focus.directive */ 57862);
/* harmony import */ var _services_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/constants */ 9430);
/* harmony import */ var _services_rest_login_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/rest/login.service */ 60954);
/* harmony import */ var _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../services/seo/seo.service */ 44897);
/* harmony import */ var _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/shared-data/shared-data.service */ 46013);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/utils/utils.service */ 89893);



// import LogRocket from "logrocket";


















/**



 * Component for Login Form



 */
let LoginComponent = class LoginComponent {
  // isSSO: boolean;
  /**
   
      * Constructor for Object Initialization
   
      * @param route Router Module Instance
   
      * @param rest LoginService instance for HTTP Requests
   
      * @param shared SharedDataService Instance
   
      * @param utils UtilsService instance
   
      * @param renderer Broadcast Socket Instance
   
      */
  constructor(route, cryptography, elementRef, rest, oauthService, cdr, shared, utils, renderer, seo, analytics, activatedRoute, firebaseService, urls, postLoginService, apmService) {
    this.route = route;
    this.cryptography = cryptography;
    this.elementRef = elementRef;
    this.rest = rest;
    this.oauthService = oauthService;
    this.cdr = cdr;
    this.shared = shared;
    this.utils = utils;
    this.renderer = renderer;
    this.seo = seo;
    this.analytics = analytics;
    this.activatedRoute = activatedRoute;
    this.firebaseService = firebaseService;
    this.urls = urls;
    this.postLoginService = postLoginService;
    this.apmService = apmService;
    this.clientIdSwitch = true;
    this.user = {};
    this.questionList = [];
    this.visible = false;
    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.UntypedFormGroup({
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required]),
      clientId: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.UntypedFormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.required])
    });
    this.isBuildDiff = false;
    this.customError = {
      inActive: false,
      msg: "",
      title: "",
      isSuspended: false,
      navigateToSupport: false
    };
    this.userInfo = {};
    /**dynamic css apply to body */
    let main = document.getElementById("main-container");
    if (main) {
      main.classList.add("main-container");
    }
    let body = document.getElementById("section-body-data");
    if (body) {
      body.classList.add("body-login-page");
    }
  }
  /**
   
      * Life Cycle Hook for Initialization
   
      */
  ngOnInit() {
    // setTimeout(() => {
    //   if(document.getElementById('login-loader')){
    //     document.getElementById('login-loader').style.display="none"
    //   }
    //   if(document.getElementById('login-formwrap')){
    //     document.getElementById('login-formwrap').style.opacity="1"
    //   }
    // }, 5000);
    this.hidePage = true; // (localStorage.getItem('loginWithMobileNumber') && localStorage.getItem('loginWithMobileNumber')=='1') && (localStorage.getItem('isSSO')=='true')
    this.shared.loadingRouteConfig = true;
    setTimeout(() => {
      this.shared.loadingRouteConfig = false;
    }, 1000);
    // if(this.hidePage){
    //   if(document.getElementById('login-loader')){
    //     document.getElementById('login-loader').style.display="block"
    //   }
    //   if(document.getElementById('login-formwrap')){
    //     document.getElementById('login-formwrap').style.opacity="0"
    //   }
    //   setTimeout(() => {
    //     // this.hidePage=false
    //     if(document.getElementById('login-loader')){
    //       document.getElementById('login-loader').style.display="none"
    //     }
    //     if(document.getElementById('login-formwrap')){
    //       document.getElementById('login-formwrap').style.opacity="1"
    //     }
    //   }, 2000);
    //   // this.shared.isSSO=true
    //   // localStorage.setItem('isSSO','true')
    // }
    // =true
    this.user = {};
    this.renderer.setStyle(document.body, "overflow", "auto");
    this.renderer.removeClass(document.body, "modal_open");
    //this.getQuestionList();
    this.getVersionList();
    this.shared.isLoginVisited = true;
    this.seo.setMeta("login");
    this.activatedRoute.queryParams.subscribe(params => {
      if (params.vid) {
        localStorage.setItem('vid', 'diet');
      } else {
        localStorage.setItem("vid", "");
      }
      if (params.redirectUrl) {
        this.utils.setFromURL(params.redirectUrl);
      }
      if (params.source && params.source == "lambda") {
        this.utils.setFromURL();
      }
    });
    this.shared.kraStatusDisclaimerVisible = false;
    localStorage.setItem("promoteKraUpdate", this.shared.kraStatusDisclaimerVisible.toString());
    localStorage.setItem("promoteKraUpdateKey", "");
    // let userId = this.utils.getUserId() || '';
    //   this.firebaseService.getRemoteConfig("web_version", (value) => {
    //     
    //     if (value) {
    //       let buildVersion = this.utils.getBuildVersion();
    //       if (value !== buildVersion) {
    //         // this.utils.success('Info', 'Please clear cache to view latest features');
    //         // this.utils.storeWebUpgradePopupConsent();
    //         this.isBuildDiff = true;
    //       }
    //     }
    //   });
    let userName = this.utils.get("finxUserName") ? this.cryptography.decryptText(this.utils.get("finxUserName")) : null;
    let clientId = this.utils.get("finxClientId") ? this.cryptography.decryptText(this.utils.get("finxClientId")) : null;
    let initals = this.utils.get("finxInitial") ? this.cryptography.decryptText(this.utils.get("finxInitial")) : null;
    if (userName || clientId || initals) {
      this.userInfo = null;
      this.userForm.controls.clientId.patchValue(null, {
        emitEvent: false
      });
      // this.userInfo["userName"] = userName;
      // this.userInfo["clientId"] = clientId;
      // this.userInfo["initals"] = initals;
      // this.userForm.controls.clientId.patchValue(clientId, {
      //   emitEvent: false,
      // });
    } else {
      this.userInfo = null;
      this.userForm.controls.clientId.patchValue(null, {
        emitEvent: false
      });
    }
  }
  ngOnDestroy() {
    let main = document.getElementById("main-container");
    if (main) {
      main.classList.remove("main-container");
    }
    let body = document.getElementById("section-body-data");
    if (body) {
      body.classList.remove("body-login-page");
    }
  }
  changedetectorfunc(event) {
    this.cdr.detectChanges();
  }
  ngAfterViewInit() {
    this.firebaseService.getRemoteConfig("chrome_update", value => {
      this.showUpdate = value;
    });
    this.cdr.detectChanges();
    //    setTimeout(() => {
    // /*     let id=document.getElementById('invisible-click')
    //     if(id){
    //       id.click()
    //     } */
    //     let clientId=document.getElementById('clientId')
    //     if(clientId){
    //       clientId.focus()
    //     }
    // //       if(this.userForm && this.userForm.controls && this.userForm.controls.password){
    // //       /*   let clientId=document.getElementById('clientId')
    // //         if(clientId){
    // //           clientId.focus()
    // //         } */
    // //         this.userForm.controls.password.updateValueAndValidity()
    // //         this.userForm.controls.clientId.updateValueAndValidity()
    // //         this.userForm.controls.password.markAsTouched()
    // //         this.userForm.controls.clientId.markAsTouched()
    // //         this.userForm.updateValueAndValidity()
    // //  /*
    // //         id=document.getElementById('invisible-click')
    // //         if(id){
    // //           id.click()
    // //         } */
    // //         this.userForm.valueChanges.subscribe(val=>{
    // //         })
    // //       }
    //   }, 1000);
  }
  /**
   
      * Make Request for Checking Credentials after form Submission
   
      */
  checkLogin() {
    if (this.userForm.invalid) {
      this.userForm.controls.password.markAsDirty();
      this.userForm.controls.clientId.markAsDirty();
      this.userForm.markAsDirty();
      return;
    }
    let password = this.cryptography.encryptText((this.userForm && this.userForm.controls && this.userForm.controls.password && this.userForm.controls.password.value ? this.userForm.controls.password.value : "").trim());
    let request = {
      userId: (this.userForm && this.userForm.controls && this.userForm.controls.clientId ? this.userForm.controls.clientId.value : "").toUpperCase().trim(),
      pwd: password,
      ip: this.shared.IPAddress,
      Mode: 11,
      deviceInfo: navigator.userAgent + ", Web Version : " + this.urls.getBuildVersion(),
      deviceType: "W",
      fcmToken: "",
      isOTPRequired: true,
      deviceId: this.utils.get("fingerprint") || ""
    };
    this.utils.setTrackMoeEvent("loginRequest", {
      UserId: request.userId,
      IP: this.shared.IPAddress
    });
    if (request.userId) {
      // const logRocketId =
      //   location.hostname.indexOf("localhost") > -1 ||
      //     location.hostname.indexOf("devfinx.choiceindia.com") > -1
      //     ? "f79geh/finx_dev"
      //     : location.hostname.indexOf("finx.choiceindia.com") > -1 &&
      //       location.hostname !== "devfinx.choiceindia.com" &&
      //       location.hostname !== "betafinx.choiceindia.com"
      //       ? "finx_web/finx_new"
      //       : "f79geh/finx_beta";
      // LogRocket.init(logRocketId, {
      //   mergeIframes: true,
      //   rootHostname: "mf.choiceindia.com",
      // });
      // LogRocket.identify(request.userId, {
      //   shouldDebugLog: false,
      //   release: this.urls.getBuildVersion(),
      //   webNetworkType: (navigator["connection"] && navigator["connection"]["effectiveType"]) ||
      //     ""
      // });
      if (window.newrelic) {
        window.newrelic.setUserId(request.userId);
        window.newrelic.setCustomAttribute("userId", request.userId);
        window.newrelic.setCustomAttribute("webNetworkType", navigator["connection"] && navigator["connection"]["effectiveType"] || "");
        window.newrelic.setCustomAttribute("release", this.urls.getBuildVersion());
        window.newrelic.setCustomAttribute("webIpAddress", this.utils.get("address") || "");
        var err = new Error("Report caught error to New Relic");
        window.newrelic.noticeError(err);
      }
    }
    this.apmService.apm.addLabels({
      userId: request.userId
    });
    window.Moengage.add_unique_user_id(request.userId);
    this.rest.login(request).subscribe(data => {
      // data.Response.IsInActive = true;
      // data.Response.LogonStatus = '-101'
      if (data.Status == "Success" && data.Response && data.Response.LogonStatus == "10016") {
        this.renderer.setStyle(document.body, "overflow", "hidden");
        this.customError.isSuspended = true;
        this.utils.setUserAccountStatus({
          onboardStatus: 'suspended'
        });
        this.customError.title = "User Suspended";
        this.customError.msg = "Your Account is Suspended!!!";
        this.customError.navigateToSupport = true;
      } else if (data.Status === "Success" && data.Response && data.Response.LogonStatus == "-101" && !data.Response.IsInActive) {
        this.utils.setUserAccountStatus({
          onboardStatus: 'inactive'
        });
        this.renderer.setStyle(document.body, "overflow", "hidden");
        this.customError.inActive = true;
        this.customError.title = "Attention";
        this.customError.msg = "Sorry, we are unable to map your account at the moment. Please contact our support team for assistance in resolving this issue promptly.";
        this.customError.navigateToSupport = true;
      } else if (data.Status === "Success" && data.Response && !data.Response.IsInActive) {
        // data.Response.IsFirstLogin = true;
        // data.Response.Default2FA = "PIN";
        // data.Response.Default2FA = "PIN";
        if (data.Response.LogonStatus == "1112" && !data.Response.IsFirstLogin) {
          data.Response.Default2FA = "PIN";
        }
        this.utils.storeUserId((this.userForm && this.userForm.controls && this.userForm.controls.clientId ? this.userForm.controls.clientId.value : "").toUpperCase().trim());
        let response = data.Response;
        console.log(response, "responseresponseresponse");
        localStorage.setItem("IsFirstLogin", data.Response.IsFirstLogin);
        // response.LogonMessage = codes.PASSWORD_EXPIRE_MSG;
        // response.LogonStatus = 10007;
        let statusIndex = [10007, 10008, 10000, 1111].indexOf(response.LogonStatus);
        if (statusIndex == -1 && response.LogonMessage == _services_constants__WEBPACK_IMPORTED_MODULE_10__.ACCOUNT_LOCKED_MSG) {
          this.utils.setUserAccountStatus({
            onboardStatus: 'locked'
          });
          this.utils.error("Login Failed", "Your account is locked due to repeated failures. Kindly click on Forgot password.");
        } else if (statusIndex > -1 || response.LoginMessage === _services_constants__WEBPACK_IMPORTED_MODULE_10__.PASSWORD_EXPIRE_MSG) {
          if (response.LogonMessage === _services_constants__WEBPACK_IMPORTED_MODULE_10__.PASSWORD_EXPIRE_MSG || response.LogonStatus === 10007) {
            this.shared.params = {
              clientId: (this.userForm && this.userForm.controls && this.userForm.controls.clientId ? this.userForm.controls.clientId.value : "").toUpperCase().trim(),
              successLogin: response.IsFirstLogin,
              isExpired: true,
              isPin: response.Default2FA == "OTP" ? false : true,
              currentPwd: this.userForm.controls.password.value
            };
            this.utils.info("Password Expired", "Please Change your Password.");
            this.route.navigate(["/auth/changePassword"]);
          } else if (response.IsFirstLogin && !data.Response.QuestionID1 && !data.Response.QuestionID2 || statusIndex === 2 && !response.IsFirstLogin) {
            this.shared.params = {
              successLogin: response.IsFirstLogin,
              clientId: (this.userForm && this.userForm.controls && this.userForm.controls.clientId ? this.userForm.controls.clientId.value : "").toUpperCase().trim(),
              questionId1: response.QuestionID1,
              questionId2: response.QuestionID2,
              pwd: (this.userForm && this.userForm.controls && this.userForm.controls.password && this.userForm.controls.password.value ? this.userForm.controls.password.value : "").trim(),
              isPin: response.Default2FA == "OTP" ? false : true
            };
            this.analytics.loginEvent(request);
            this.route.navigate(["/auth/twoFA"]);
          } else if (response.LogonStatus === _services_constants__WEBPACK_IMPORTED_MODULE_10__.FORGOT_ANSWER_STATUS) {
            this.shared.params = {
              clientId: (this.userForm && this.userForm.controls && this.userForm.controls.clientId ? this.userForm.controls.clientId.value : "").toUpperCase().trim(),
              successLogin: this.successLogin,
              questionId1: response.QuestionID1,
              questionId2: response.QuestionID2,
              pwd: (this.userForm && this.userForm.controls && this.userForm.controls.password && this.userForm.controls.password.value ? this.userForm.controls.password.value : "").trim(),
              isForgotAnswer: true,
              logonStatus: response.LogonStatus,
              isPin: response.Default2FA == "OTP" ? false : true
            };
            this.route.navigate(["/auth/forgotPin"]);
          } else {
            this.utils.error("Login Failed", data.Response.LogonMessage);
          }
        } else {
          this.utils.error("Login Failed", data.Response.LogonMessage);
        }
        this.utils.setTrackMoeEvent("loginRequest", {
          status: data.Status
        });
      } else if (data.Status === "Success" && data.Response && data.Response.IsInActive) {
        this.renderer.setStyle(document.body, "overflow", "hidden");
        this.customError.inActive = data.Response.IsInActive;
        this.customError.title = data.Response.LogonMessage;
        this.utils.setUserAccountStatus({
          onboardStatus: 'inactive'
        });
        this.customError.msg = "Your account has been marked inactive due to inactivity in the last 12 months. Please complete your Re-KYC to re-activate your account";
        this.customError.navigateToSupport = false;
      } else {
        this.utils.error("Login Failed", data.Reason);
        this.utils.setTrackMoeEvent("loginRequest", {
          reason: data.Reason
        });
      }
    }, err => {
      this.shared.isServiceHit = false;
      this.utils.error("Error", "Something went wrong, please try again. if the problem persists then please contact us at care@choiceindia.com");
    });
  }
  /**
   
      * Fetch Question List
   
      */
  getQuestionList() {
    if (!this.shared.questionList || this.shared.questionList && this.shared.questionList.length == 0) {
      this.rest.getQuestionList("").subscribe(data => {
        if (data.Status === "Success" && data.Response) {
          this.shared.questionList = data.Response;
        }
      }, err => {});
    }
  }
  /**
   
      * Fetch Question List
   
      */
  getVersionList() {
    // if (!this.shared.questionList || (this.shared.questionList && this.shared.questionList.length == 0)) {
    this.rest.getVersions().subscribe(data => {
      if (data && data.versions && data.versions.length) {
        this.chromeUpdate(data.versions);
      }
    }, err => {});
    // }
  }
  updateChrome() {
    //window.open("chrome://settings/help")
  }
  chromeUpdate(data) {
    let browserAgent = navigator.userAgent;
    let browserName = navigator.appName;
    let browserVersion = "" + parseFloat(navigator.appVersion);
    let Offset, OffsetVersion, ix;
    // For Chrome
    if ((OffsetVersion = browserAgent.indexOf("Chrome")) != -1) {
      browserName = "Chrome";
      browserVersion = browserAgent.substring(OffsetVersion + 7);
      let version = browserVersion.split(" ")[0].split(".");
      let systemVersion = version[0];
      console.log(systemVersion, "CHROME VER" + data[0].version.split(".")[0] + " iiii", version);
      if (!(systemVersion === data[0].version.split(".")[0])) {
        this.showVerionMessage = true;
      }
    }
  }
  /**
   
      * Navigate to Forgot Password
   
      */
  navigateToForgotPassword() {
    this.shared.params = {
      forgotPwd: true
    };
    this.route.navigate(["/auth/forgotPassword"]);
  }
  /** Navigate to Onboarding Flow */
  navigateToSignUp() {
    this.utils.updateOnBoardingData(null);
    // this.route.navigate(['/onboarding/onboardwalkthrough']);
    window.open(`${this.utils.getChoiceindiaBaseURL()}/open-free-demat-account?utm_source=choice-finx-web&utm_medium=sign_up_button&utm_campaign=choice_finx_sign_up_button`, "_self");
  }
  navigateToFreeAccountSignup(type) {
    let url = type == "sign_up" ? `${this.utils.getChoiceindiaBaseURL()}/open-free-demat-account?utm_source=choice-finx-web&utm_medium=sign_up_button&utm_campaign=choice_finx_sign_up_button` : `${this.utils.getChoiceindiaBaseURL()}/open-free-demat-account?utm_source=choice-finx-web&utm_medium=main_menu_button&utm_campaign=choice_finx_open_account_button`;
    window.open(url, "_self");
  }
  refreshPage() {
    this.isBuildDiff = false;
    location.reload();
  }
  navigateToModificationFlow() {
    this.customError.inActive = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
    let userId = this.userForm.controls.clientId.value;
    let url = this.postLoginService.getOnboardingModificationURL(btoa(userId), encodeURIComponent(this.cryptography.encryptText(userId)), "undefined");
    url = url.replace("&sid=undefined", "");
    url = url + "&type=dormant";
    window.open(url, "_blank");
  }
  navigateToLogin() {
    this.utils.resetUser();
    this.userInfo = null;
    this.userForm.controls.clientId.patchValue(null, {
      emitEvent: false
    });
  }
  navigateToSupport() {
    this.customError.inActive = false;
    this.customError.isSuspended = false;
    this.renderer.setStyle(document.body, "overflow", "auto");
    this.route.navigate(["/links/support"]);
  }
  ifameLoad() {
    // setTimeout(() => {
    //   let loginFrame =  document.getElementById('finx-sso')
    //   console.log(loginFrame,"dddddd1")
    //   if(loginFrame){
    //    let ele =   loginFrame['contentDocument'] || loginFrame['contentWindow'].document
    //   if(ele){
    //     ele.getElementById("link-to-sso").click()
    //   }
    //    }
    //   }, 2000);
  }
  switchLoginInterface() {
    this.shared.isSSO = !this.shared.isSSO;
    localStorage.setItem("isSSO", this.shared.isSSO ? "true" : "false");
    if (this.shared.isSSO) {
      // if(document.getElementById('skeleton-div'))
      // document.getElementById('skeleton-div').classList.add("skeleton")
      if (document.getElementById("skeleton-div-loader")) document.getElementById("skeleton-div-loader").remove();
      this.oauthService.loadDiscoveryDocumentAndLogin();
    }
  }
  loginWithMobileNumber() {
    localStorage.setItem("loginWithMobileNumber", "1");
    localStorage.setItem("isSSO", "true");
    localStorage.setItem("isSSOLogin", "true");
  }
  loginWithClientId() {
    localStorage.setItem("loginWithMobileNumber", "0");
    localStorage.setItem("isSSO", "false");
    localStorage.setItem("isSSOLogin", "true");
  }
  registerNow() {
    this.route.navigate(["/auth/register"]);
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.Router
    }, {
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_5__.CryptographyService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ElementRef
    }, {
      type: _services_rest_login_service__WEBPACK_IMPORTED_MODULE_11__.LoginService
    }, {
      type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_18__.OAuthService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef
    }, {
      type: _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_13__.SharedDataService
    }, {
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_14__.UtilsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_17__.Renderer2
    }, {
      type: _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_12__.SeoService
    }, {
      type: src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute
    }, {
      type: src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__.FirestoreService
    }, {
      type: src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_3__.APIURLs
    }, {
      type: src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_7__.PostLoginService
    }, {
      type: src_app_services_apm_service__WEBPACK_IMPORTED_MODULE_4__.ApmService
    }];
  }
};
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_17__.Component)({
  selector: "app-login",
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _directives_input_restrict_directive__WEBPACK_IMPORTED_MODULE_8__.InputRestrictDirective, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLink, _directives_show_focus_directive__WEBPACK_IMPORTED_MODULE_9__.ShowFocusDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.TitleCasePipe],
  styles: [(_login_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_19__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_16__.Router, src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_5__.CryptographyService, _angular_core__WEBPACK_IMPORTED_MODULE_17__.ElementRef, _services_rest_login_service__WEBPACK_IMPORTED_MODULE_11__.LoginService, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_18__.OAuthService, _angular_core__WEBPACK_IMPORTED_MODULE_17__.ChangeDetectorRef, _services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_13__.SharedDataService, _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_14__.UtilsService, _angular_core__WEBPACK_IMPORTED_MODULE_17__.Renderer2, _services_seo_seo_service__WEBPACK_IMPORTED_MODULE_12__.SeoService, src_app_services_analytics_analytics_service__WEBPACK_IMPORTED_MODULE_2__.AnalyticsService, _angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute, src_app_services_firestore_firestore_service__WEBPACK_IMPORTED_MODULE_6__.FirestoreService, src_app_services_api_urls__WEBPACK_IMPORTED_MODULE_3__.APIURLs, src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_7__.PostLoginService, src_app_services_apm_service__WEBPACK_IMPORTED_MODULE_4__.ApmService])], LoginComponent);


/***/ }),

/***/ 83484:
/*!********************************************************!*\
  !*** ./src/app/auth-module/logout/logout.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogoutComponent: () => (/* binding */ LogoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _logout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logout.component.html?ngResource */ 95956);
/* harmony import */ var _logout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logout.component.scss?ngResource */ 47434);
/* harmony import */ var _logout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_logout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-oauth2-oidc */ 1244);
/* harmony import */ var src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/rest/post-login.service */ 4135);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);









let LogoutComponent = class LogoutComponent {
  constructor(route, postLoginService, oauthService, shared, utils) {
    this.route = route;
    this.postLoginService = postLoginService;
    this.oauthService = oauthService;
    this.shared = shared;
    this.utils = utils;
  }
  ngOnInit() {
    const routeConfig = {
      header: false,
      footer: false,
      indices: false,
      betaFooter: false,
      ticker: false,
      watchlist: false,
      freshChat: false
    };
    this.shared.routeConfig = routeConfig;
    let ele = document.getElementById('main-container');
    if (ele) {
      ele.classList.add("full-width-container");
    }
    let tok = this.oauthService.getIdToken();
    this.oauthService.logOut(true);
    let logutURL = this.oauthService.logoutUrl + "?post_logout_redirect_uri=" + this.oauthService.postLogoutRedirectUri + "&id_token_hint=" + tok + (location.pathname.indexOf('logout/all') > -1 ? "&type=all" : "");
    localStorage.removeItem('access_token');
    localStorage.removeItem('onb_url');
    localStorage.removeItem('selectedUser');
    this.utils.clearUserAccountStatus();
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('expires_in');
    localStorage.removeItem('id_token');
    this.utils.clear("fromUrl");
    this.postLoginService.logoutFromSSO(logutURL).subscribe(res => {
      this.route.navigate(["/auth/login"]);
    }, err => {
      this.route.navigate(["/auth/login"]);
    });
    // window.location.href=logutURL
  }
  ngOnDestroy() {
    let ele = document.getElementById('main-container');
    if (ele) {
      ele.classList.remove("full-width-container");
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
    }, {
      type: src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__.PostLoginService
    }, {
      type: angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__.OAuthService
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService
    }];
  }
};
LogoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-logout',
  template: _logout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true,
  styles: [(_logout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__metadata)("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router, src_app_services_rest_post_login_service__WEBPACK_IMPORTED_MODULE_2__.PostLoginService, angular_oauth2_oidc__WEBPACK_IMPORTED_MODULE_6__.OAuthService, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_3__.SharedDataService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_4__.UtilsService])], LogoutComponent);


/***/ }),

/***/ 2378:
/*!************************************************************!*\
  !*** ./src/app/auth-module/register/register.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RegisterComponent: () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var D_a_widget_jiffy_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 10467);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.component.html?ngResource */ 72994);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.scss?ngResource */ 94344);
/* harmony import */ var _register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 7901);
/* harmony import */ var src_app_services_captcha_captcha_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/captcha/captcha.service */ 50981);
/* harmony import */ var src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/cryptography.service */ 67224);
/* harmony import */ var src_app_services_rest_login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/rest/login.service */ 60954);
/* harmony import */ var src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/shared-data/shared-data.service */ 46013);
/* harmony import */ var src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/utils/utils.service */ 89893);
/* harmony import */ var _directives_input_restrict_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/input-restrict.directive */ 41009);
/* harmony import */ var _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../directives/input-restrict2.directive */ 5833);














let RegisterComponent = class RegisterComponent {
  constructor(CaptchaService, cryptography, rest, route, shared, utils, activatedRoute) {
    this.CaptchaService = CaptchaService;
    this.cryptography = cryptography;
    this.rest = rest;
    this.route = route;
    this.shared = shared;
    this.utils = utils;
    this.activatedRoute = activatedRoute;
    this.shared.isSSO = localStorage.getItem('isSSO') == 'true';
    this.utmTags = {};
    this.onboarding = {};
    this.change = {};
    this.user = {};
    this.timer = 30;
    // this.shared.params.clientId = this.shared.params.clientId
    //   ? this.shared.params.clientId.toUpperCase()
    //   : "";
    this.verifyResponse = {};
    this.timer = 30;
    this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
      referralCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(this.onboarding.referredId ? this.onboarding.referredId : "", []),
      whatsapp_consent: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(true, [])
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.utmTags = params || {};
      this.onboarding.referredId = params.refercode ? atob(params.refercode) || '' : params.ref ? atob(params.ref) : '';
      this.onboarding.subReferralCode = params.subref ? atob(params.subref) : '';
      this.userForm.controls.referralCode.patchValue(this.onboarding.referredId);
      this.urlSource = params.source ? atob(params.source) : "";
      // this.onboarding.utm_campaign = params.utm_campaign ? params.utm_campaign : '';
      // this.onboarding.utm_content = params.utm_content ? params.utm_content : '';
      // this.onboarding.utm_custom = params.utm_custom ? params.utm_custom : '';
      // this.onboarding.utm_medium = params.utm_medium ? params.utm_medium : '';
      // this.onboarding.utm_source = params.utm_source ? params.utm_source : '';
      // this.onboarding.utm_term = params.utm_term ? params.utm_term : '';
    });
    this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({
      otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required])
    });
  }
  ngOnInit() {
    // window['fun']={generateCaptcha:this.generateCaptcha.bind(this) }
    // window['fun'].generateCaptcha=
    localStorage.setItem('', '');
    let main = document.getElementById("main-container");
    if (main) {
      main.classList.add("login-main-container");
    }
    let body = document.getElementById("section-body-data");
    if (body) {
      body.classList.add("body-login-page");
    }
  }
  ngOnDestroy() {
    let main = document.getElementById("main-container");
    if (main) {
      main.classList.remove("login-main-container");
    }
    let body = document.getElementById("section-body-data");
    if (body) {
      body.classList.remove("body-login-page");
    }
  }
  generateCaptcha() {
    var _this = this;
    return (0,D_a_widget_jiffy_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = yield _this.CaptchaService.checkCaptcha();
      // console.log(token,"tokentokentoken")
    })();
  }
  /**
   * Add lead and send otp to user
   */
  registerUser(type) {
    var _this2 = this;
    return (0,D_a_widget_jiffy_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = yield _this2.CaptchaService.checkCaptcha();
      _this2.userForm.controls.mobileNumber.markAsDirty();
      if (_this2.userForm.status == 'INVALID') {
        _this2.registeringUser = false;
        return;
      }
      _this2.timer = 30;
      _this2.setTimer();
      let payload = {
        "whatsapp_consent": _this2.userForm.value.whatsapp_consent,
        "mobile_number": btoa(_this2.userForm.value.mobileNumber),
        "user_consent": "1",
        "type": type,
        "referred_id": _this2.userForm.value.referralCode,
        "sub_ref": null,
        "utm_campaign": _this2.utmTags.utm_campaign || null,
        "utm_content": _this2.utmTags.utm_content || null,
        "utm_custom": _this2.utmTags.utm_custom ? _this2.utmTags.utm_custom : "open-free-demat-account",
        "utm_medium": _this2.utmTags.utm_medium || null,
        "utm_source": _this2.utmTags.utm_source || null,
        "utm_term": _this2.utmTags.utm_term || null,
        "account_type": "all",
        "source": _this2.urlSource || 'FINX_WEB'
      };
      _this2.rest.registerSSOUser(payload, token).subscribe(data => {
        if (data && data.StatusCode == 200) {
          _this2.utils.setTrackMoeEvent("Lead created", {
            payload,
            data
          });
          _this2.utils.storeMobile(_this2.userForm.value.mobileNumber);
          _this2.otpSent = true;
          _this2.sessionID = data.Body.otp_session_id;
          _this2.registeringUser = false;
          _this2.utils.success("Success", data.Message);
        } else {
          _this2.registeringUser = false;
          _this2.utils.error("Error", data.Message ? data.Message : "Something went wrong.");
        }
      }, error => {
        _this2.registeringUser = false;
        _this2.utils.error("Error", error.error && error.error.Message ? error.error.Message : "Something went wrong.");
      });
      //if success
    })();
  }
  /**
   * Go back to mobile screen
   */
  backToMobile() {
    this.otpSent = false;
    this.registeringUser = false;
    this.otpForm.reset();
    this.verifyingOTP = false;
  }
  /**
   * Verify OTP
   */
  verifyOtp() {
    var _this3 = this;
    return (0,D_a_widget_jiffy_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const token = yield _this3.CaptchaService.checkCaptcha();
      _this3.otpForm.controls.otp.markAsDirty();
      if (_this3.otpForm.status == 'INVALID') return;
      _this3.verifyingOTP = true;
      let payload = {
        otp: _this3.otpForm.value.otp,
        session_id: _this3.sessionID
      };
      _this3.rest.verifySSOUser(payload, token).subscribe(data => {
        _this3.verifyingOTP = false;
        if (data.StatusCode == 200) {
          _this3.utils.setTrackMoeEvent("Lead verified", {
            payload,
            data
          });
          _this3.verifyResponse = data.Body;
          let statusFlag = _this3.verifyResponse.is_onboard_flag;
          if (data && data.Body && data.Body.action_type && data.Body.action_type === "popup_and_no_update") {
            _this3.checkConsent('open');
            _this3.consentMsg = data.Body.message;
          } else {
            _this3.consentMsg = "";
          }
          if (statusFlag == 'C') {
            _this3.route.navigate(['/auth/login']);
            // if(this.verifyResponse && this.verifyResponse.is_password_set=='Y'){
            //   this.route.navigate(['/auth/login'])
            // }else{
            //   let authCode=  this.verifyResponse.auth_code;
            //   let request={
            //     "grant_type": "authorization_code",
            //     "code": authCode
            // }
            //   this.rest.getSSOToken(request).subscribe((res)=>{
            //     if(res && res.Body && res.StatusCode==200){
            //       // 
            //       localStorage.setItem('access_token',res.Body.access_token)
            //       localStorage.setItem('refresh_token',res.Body.refresh_token)
            //       localStorage.setItem('expires_in',res.Body.expires_in)
            //       localStorage.setItem('id_token',res.Body.id_token)
            //         // this.otpVerified=true
            //         this.onBoardFlow()
            //     }else{
            //       this.utils.error('Error',res.Message)
            //     }
            //     // let url=this.verifyResponse.auth_code.url
            //   },error=>{
            //     // console.log(error)
            //   })            
            // }
          } else {
            let authCode = _this3.verifyResponse.auth_code;
            let request = {
              "grant_type": "authorization_code",
              "code": authCode
            };
            _this3.rest.getSSOToken(request).subscribe(res => {
              if (res && res.Body && res.StatusCode == 200) {
                // 
                localStorage.setItem('access_token', res.Body.access_token);
                localStorage.setItem('refresh_token', res.Body.refresh_token);
                localStorage.setItem('expires_in', res.Body.expires_in);
                localStorage.setItem('id_token', res.Body.id_token);
                // if(this.verifyResponse && this.verifyResponse.is_password_set=='Y'){
                if (data.Body.action_type != "popup_and_no_update") {
                  _this3.onBoardFlow();
                }
                // }else{
                //   this.otpVerified=true
                // }
              } else {
                _this3.utils.error('Error', res.Message);
              }
              // let url=this.verifyResponse.auth_code.url
            }, error => {
              // console.log(error)
            });
            // localStorage.setItem('ssoRegisterAuthCode',data.Body.authCode)
            // localStorage.setItem('ssoRegisterlid',data.Body.lid)
          }
          if (data.Body.action_type != "popup_and_no_update") {
            _this3.utils.success('Success', data.Message);
          }
        } else {
          _this3.utils.error('Error', data.Message);
          _this3.otpVerified = false;
        }
      }, error => {
        _this3.otpVerified = false;
        _this3.verifyingOTP = false;
        _this3.utils.error("Error", error.error && error.error.Message ? error.error.Message : "Something went wrong.");
      });
    })();
  }
  /**
   * Resend OTP
   * @param call True : Call, False : Message
   */
  // getOTP(call){
  //   this.timer = 30;
  //   this.setTimer();
  // }
  /**
   * Set resend OTP timer
   */
  setTimer() {
    this.resendOTP = false;
    this.resendInterval = setInterval(() => {
      if (this.timer) {
        this.timer--;
      } else {
        this.resendOTP = true;
        this.timer = 30;
        clearInterval(this.resendInterval);
      }
    }, 1000);
  }
  /** Change Password after form Submission */
  changePassword(changePasswordForm) {
    let request;
    if (changePasswordForm.form && changePasswordForm.form.status == "INVALID") {
      return;
    }
    if (this.change.newPassword.indexOf(" ") > -1) {
      this.utils.error("Error", "Spaces not allowed in new Password");
      return;
    } else if (this.change.newPassword.length < 6 || this.change.newPassword.length > 12) {
      this.utils.error("Error", "Password should be between 6-12 characters");
      return;
    }
    let payload = {
      password: this.cryptography.ssoEncryption(this.change.newPassword.trim()),
      confirm_password: this.cryptography.ssoEncryption(this.change.confirmNewPassword.trim()),
      user_name: this.cryptography.ssoEncryption(this.utils.getMobId())
    };
    this.rest.setSSOpassword(payload).subscribe(res => {
      if (res && res.StatusCode == 200) {
        this.utils.success("Success", res.Message);
        this.onBoardFlow();
        // this.pwdChangeSuccess = true;
      } else {
        this.utils.error("Error", res.Message);
        this.change = {};
      }
    }, error => {
      // console.log("SET PASSWORD ERROR",error)
    });
  }
  onBoardFlow() {
    // this.route.navigate([(statusFlag=='R'?('/account/account-not-activated'):('/account/complete-account-setup'))],{queryParams:{url:btoa(url)}})
    let statusFlag = this.verifyResponse.is_onboard_flag;
    // console.log(this.verifyResponse,"verifySSOUser4",statusFlag)
    if (statusFlag == 'N' || statusFlag == '' || statusFlag == 'NI') {
      if (this.verifyResponse.url) {
        let url = this.verifyResponse.url + "&accessToken=" + localStorage.getItem('access_token');
        window.open(url, "_self");
      } else {
        this.utils.error("Error", "Unable to redirect.");
      }
      //  localStorage.setItem('onb_url',btoa(url))
      // this.route.navigate(['/account/complete-account-setup'],{queryParams:{url:btoa(url)}})
    } else if (statusFlag == 'Y' && !this.verifyResponse.url) {
      // window.open(url, "_self");
      this.route.navigate(['/account/account-activation-inprogress']);
    } else if (statusFlag == 'Y' && this.verifyResponse.url) {
      let url = this.verifyResponse.url + "&accessToken=" + localStorage.getItem('access_token');
      window.open(url, "_self");
      // localStorage.setItem('onb_url',btoa(url))
      // this.route.navigate(['/account/account-not-activated'],{queryParams:{url:btoa(url)}})             
    } else {
      if (this.verifyResponse.url) {
        let url = this.verifyResponse.url + "&accessToken=" + localStorage.getItem('access_token');
        window.open(url, "_self");
      }
    }
  }
  checkConsent(action) {
    if (action === 'open') {
      this.otpSent = false;
      this.userForm.controls.mobileNumber.reset();
      this.userForm.controls.referralCode.reset();
      this.otpForm.controls.otp.reset();
      this.showConsent = true;
    } else if (action === 'close') {
      this.showConsent = false;
    } else if (action === 'proceed') {
      this.showConsent = false;
      this.onBoardFlow();
    }
  }
  static {
    this.ctorParameters = () => [{
      type: src_app_services_captcha_captcha_service__WEBPACK_IMPORTED_MODULE_3__.CaptchaService
    }, {
      type: src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_4__.CryptographyService
    }, {
      type: src_app_services_rest_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
    }, {
      type: src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService
    }, {
      type: src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
    }];
  }
  static {
    this.propDecorators = {
      currentPwd: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
        args: ["currentPwd", {
          static: false
        }]
      }],
      checkAnswer1: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ViewChild,
        args: ["checkAnswer1"]
      }]
    };
  }
};
RegisterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
  selector: 'app-register',
  template: _register_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  standalone: true,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _directives_input_restrict_directive__WEBPACK_IMPORTED_MODULE_8__.InputRestrictDirective, _directives_input_restrict2_directive__WEBPACK_IMPORTED_MODULE_9__.InputRestrict2Directive, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink],
  styles: [(_register_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
}), (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__metadata)("design:paramtypes", [src_app_services_captcha_captcha_service__WEBPACK_IMPORTED_MODULE_3__.CaptchaService, src_app_services_cryptography_service__WEBPACK_IMPORTED_MODULE_4__.CryptographyService, src_app_services_rest_login_service__WEBPACK_IMPORTED_MODULE_5__.LoginService, _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router, src_app_services_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_6__.SharedDataService, src_app_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_7__.UtilsService, _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute])], RegisterComponent);


/***/ }),

/***/ 41009:
/*!********************************************************!*\
  !*** ./src/app/directives/input-restrict.directive.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputRestrictDirective: () => (/* binding */ InputRestrictDirective)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 89417);
/* harmony import */ var _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/utils/utils.service */ 89893);




/**
 * Directive for preventing input in textbox
 */
let InputRestrictDirective = class InputRestrictDirective {
  /** Object Initialization */
  constructor(utils, _renderer, _elementRef, formcontrole) {
    this.utils = utils;
    this._renderer = _renderer;
    this._elementRef = _elementRef;
    this.formcontrole = formcontrole;
    this.ngModelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    this.regexMap = {
      unsignedInteger: /^[0-9]*$/g,
      signedInteger: /^-?[0-9]+$/g,
      unsignedFloat: /^[0-9\.]*$/g,
      signedFloat: /^[+-]?([0-9]*[.])?[0-9]+$/g,
      alphanumeric: /^[A-Za-z0-9]*$/g,
      words: /^([A-z\s]*)*$/g,
      alphabets: /^[A-z]*$/g,
      email: /^[A-Za-z0-9._%+-@.]*$/g,
      name: /^([A-z\s\.]*)*$/g,
      password: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&^])[A-Za-z\d@$!%*#?&^]{8,12}$/g,
      // /^[A-Za-z0-9!@#$%^&*]*$/g,
      alphanumericSymbols: /^([A-z\s0-9_\.]*)*$/g
    };
  }
  /**
   * Life cycle Hook for listening to changes
   * @param changes Simple Changes Instance
   */
  ngOnChanges(changes) {
    if (changes["inputRestrict"] && changes["inputRestrict"].currentValue) {
      this.regexMatch = this.regexMap[changes["inputRestrict"].currentValue];
    }
  }
  onkeypress(e) {
    let event = e || window.event;
    if (event) {
      let key = event.keyCode || event.charCode;
      if (event && this.regexMatch && key != 13) {
        return new RegExp(this.regexMatch).test(event.key);
        // return String.fromCharCode(key).match(this.regexMatch) != null;
      } else {
        return true;
      }
    } else {
      return true;
    }
  }
  onkeyinput(e) {
    let isMobile = this.utils.isMobileDeviceCheck();
    if (isMobile) {
      if (e && e.target.value !== null) {
        if (e.target.value.match(this.regexMatch)) {
          return true;
        } else {
          let inputValue = e.target.value;
          let newValue = [];
          for (let i in inputValue) {
            if (inputValue[i].match(this.regexMatch)) {
              newValue.push(inputValue[i]);
            }
          }
          e.target.value = newValue.join("");
          this.formcontrole.control.patchValue(newValue.join(""));
          // e.stopPropagation();
          // e.preventDefault();
          return false;
        }
      }
    }
  }
  static {
    this.ctorParameters = () => [{
      type: _services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName
    }];
  }
  static {
    this.propDecorators = {
      ngModelChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output
      }],
      inputRestrict: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Input,
        args: ["inputRestrict"]
      }],
      onkeypress: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["keypress", ["$event"]]
      }],
      onkeyinput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.HostListener,
        args: ["input", ["$event"]]
      }]
    };
  }
};
InputRestrictDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Directive)({
  selector: "[inputRestrict][formControlName]",
  standalone: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__metadata)("design:paramtypes", [_services_utils_utils_service__WEBPACK_IMPORTED_MODULE_0__.UtilsService, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2, _angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName])], InputRestrictDirective);


/***/ }),

/***/ 28010:
/*!*****************************************!*\
  !*** ./src/app/services/apm.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApmService: () => (/* binding */ ApmService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 31635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 17705);
/* harmony import */ var _elastic_apm_rum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @elastic/apm-rum */ 54823);

// apm.service.ts


let ApmService = class ApmService {
  constructor() {
    let apmConfig = {
      serviceName: location.hostname.indexOf("finx.choiceindia.com") > -1 && location.hostname !== "devfinx.choiceindia.com" && location.hostname !== "betafinx.choiceindia.com" ? "Choice_FinX" : location.hostname.indexOf("dev") > -1 ? "JIFFY_WEB_DEV" : location.hostname.indexOf("uat") > -1 || location.hostname.indexOf("beta") > -1 ? "JIFFY_WEB_UAT" : "JIFFY_WEB_LOCALHOST",
      serverUrl: "https://apm.choicetechlab.com/"
    };
    this.apm = (0,_elastic_apm_rum__WEBPACK_IMPORTED_MODULE_0__.init)(apmConfig);
  }
  static {
    this.ctorParameters = () => [];
  }
};
ApmService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: "root"
}), (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__metadata)("design:paramtypes", [])], ApmService);


/***/ }),

/***/ 9430:
/*!***************************************!*\
  !*** ./src/app/services/constants.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ACCOUNT_LOCKED_MSG: () => (/* binding */ ACCOUNT_LOCKED_MSG),
/* harmony export */   ALREADY_LOGGED_STATUS: () => (/* binding */ ALREADY_LOGGED_STATUS),
/* harmony export */   FAILED_LOGIN_STATUS: () => (/* binding */ FAILED_LOGIN_STATUS),
/* harmony export */   FORGOT_ANSWER_STATUS: () => (/* binding */ FORGOT_ANSWER_STATUS),
/* harmony export */   PASSWORD_EXPIRE_MSG: () => (/* binding */ PASSWORD_EXPIRE_MSG),
/* harmony export */   SUCCESS_LOGIN_STATUS: () => (/* binding */ SUCCESS_LOGIN_STATUS),
/* harmony export */   SUCCESS_NOT_FIRST_STATUS: () => (/* binding */ SUCCESS_NOT_FIRST_STATUS)
/* harmony export */ });
/**Status Code for Successful Login */
const SUCCESS_LOGIN_STATUS = 10007;
/**Status Code for First Successful Login */
const SUCCESS_NOT_FIRST_STATUS = 10000;
/**Status Code for Failed Login */
const FAILED_LOGIN_STATUS = 10001;
/**Status Code for Already Logged In */
const ALREADY_LOGGED_STATUS = 10008;
/**Status Code for Forgot Answer Status */
const FORGOT_ANSWER_STATUS = 1111;
/**Status Message for Password Expired */
const PASSWORD_EXPIRE_MSG = "Your password has expired. Please change the password";
const ACCOUNT_LOCKED_MSG = "Your account is locked due to repeated failures. Please contact the Administrator";

/***/ }),

/***/ 18416:
/*!***************************************************************!*\
  !*** ./node_modules/error-stack-parser/error-stack-parser.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  'use strict';

  // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! stackframe */ 13236)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function ErrorStackParser(StackFrame) {
  'use strict';

  var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
  var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
  var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;
  function _map(array, fn, thisArg) {
    if (typeof Array.prototype.map === 'function') {
      return array.map(fn, thisArg);
    } else {
      var output = new Array(array.length);
      for (var i = 0; i < array.length; i++) {
        output[i] = fn.call(thisArg, array[i]);
      }
      return output;
    }
  }
  function _filter(array, fn, thisArg) {
    if (typeof Array.prototype.filter === 'function') {
      return array.filter(fn, thisArg);
    } else {
      var output = [];
      for (var i = 0; i < array.length; i++) {
        if (fn.call(thisArg, array[i])) {
          output.push(array[i]);
        }
      }
      return output;
    }
  }
  function _indexOf(array, target) {
    if (typeof Array.prototype.indexOf === 'function') {
      return array.indexOf(target);
    } else {
      for (var i = 0; i < array.length; i++) {
        if (array[i] === target) {
          return i;
        }
      }
      return -1;
    }
  }
  return {
    /**
     * Given an Error object, extract the most information from it.
     *
     * @param {Error} error object
     * @return {Array} of StackFrames
     */
    parse: function ErrorStackParser$$parse(error) {
      if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
        return this.parseOpera(error);
      } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
        return this.parseV8OrIE(error);
      } else if (error.stack) {
        return this.parseFFOrSafari(error);
      } else {
        throw new Error('Cannot parse given Error object');
      }
    },
    // Separate line and column numbers from a string of the form: (URI:Line:Column)
    extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
      // Fail-fast but return locations like "(native)"
      if (urlLike.indexOf(':') === -1) {
        return [urlLike];
      }
      var regExp = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/;
      var parts = regExp.exec(urlLike.replace(/[\(\)]/g, ''));
      return [parts[1], parts[2] || undefined, parts[3] || undefined];
    },
    parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
      var filtered = _filter(error.stack.split('\n'), function (line) {
        return !!line.match(CHROME_IE_STACK_REGEXP);
      }, this);
      return _map(filtered, function (line) {
        if (line.indexOf('(eval ') > -1) {
          // Throw away eval information until we implement stacktrace.js/stackframe#8
          line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
        }
        var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
        var locationParts = this.extractLocation(tokens.pop());
        var functionName = tokens.join(' ') || undefined;
        var fileName = _indexOf(['eval', '<anonymous>'], locationParts[0]) > -1 ? undefined : locationParts[0];
        return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
      }, this);
    },
    parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
      var filtered = _filter(error.stack.split('\n'), function (line) {
        return !line.match(SAFARI_NATIVE_CODE_REGEXP);
      }, this);
      return _map(filtered, function (line) {
        // Throw away eval information until we implement stacktrace.js/stackframe#8
        if (line.indexOf(' > eval') > -1) {
          line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
        }
        if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
          // Safari eval frames only have function names and nothing else
          return new StackFrame(line);
        } else {
          var tokens = line.split('@');
          var locationParts = this.extractLocation(tokens.pop());
          var functionName = tokens.join('@') || undefined;
          return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
        }
      }, this);
    },
    parseOpera: function ErrorStackParser$$parseOpera(e) {
      if (!e.stacktrace || e.message.indexOf('\n') > -1 && e.message.split('\n').length > e.stacktrace.split('\n').length) {
        return this.parseOpera9(e);
      } else if (!e.stack) {
        return this.parseOpera10(e);
      } else {
        return this.parseOpera11(e);
      }
    },
    parseOpera9: function ErrorStackParser$$parseOpera9(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
      var lines = e.message.split('\n');
      var result = [];
      for (var i = 2, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);
        if (match) {
          result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
        }
      }
      return result;
    },
    parseOpera10: function ErrorStackParser$$parseOpera10(e) {
      var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
      var lines = e.stacktrace.split('\n');
      var result = [];
      for (var i = 0, len = lines.length; i < len; i += 2) {
        var match = lineRE.exec(lines[i]);
        if (match) {
          result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
        }
      }
      return result;
    },
    // Opera 10.65+ Error.stack very similar to FF/Safari
    parseOpera11: function ErrorStackParser$$parseOpera11(error) {
      var filtered = _filter(error.stack.split('\n'), function (line) {
        return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
      }, this);
      return _map(filtered, function (line) {
        var tokens = line.split('@');
        var locationParts = this.extractLocation(tokens.pop());
        var functionCall = tokens.shift() || '';
        var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, '$2').replace(/\([^\)]*\)/g, '') || undefined;
        var argsRaw;
        if (functionCall.match(/\(([^\)]*)\)/)) {
          argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
        }
        var args = argsRaw === undefined || argsRaw === '[arguments not available]' ? undefined : argsRaw.split(',');
        return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
      }, this);
    }
  };
});

/***/ }),

/***/ 55555:
/*!***************************************************!*\
  !*** ./node_modules/opentracing/lib/constants.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/**
 * The FORMAT_BINARY format represents SpanContexts in an opaque binary
 * carrier.
 *
 * Tracer.inject() will set the buffer field to an Array-like (Array,
 * ArrayBuffer, or TypedBuffer) object containing the injected binary data.
 * Any valid Object can be used as long as the buffer field of the object
 * can be set.
 *
 * Tracer.extract() will look for `carrier.buffer`, and that field is
 * expected to be an Array-like object (Array, ArrayBuffer, or
 * TypedBuffer).
 */
exports.FORMAT_BINARY = 'binary';
/**
 * The FORMAT_TEXT_MAP format represents SpanContexts using a
 * string->string map (backed by a Javascript Object) as a carrier.
 *
 * NOTE: Unlike FORMAT_HTTP_HEADERS, FORMAT_TEXT_MAP places no restrictions
 * on the characters used in either the keys or the values of the map
 * entries.
 *
 * The FORMAT_TEXT_MAP carrier map may contain unrelated data (e.g.,
 * arbitrary gRPC metadata); as such, the Tracer implementation should use
 * a prefix or other convention to distinguish Tracer-specific key:value
 * pairs.
 */
exports.FORMAT_TEXT_MAP = 'text_map';
/**
 * The FORMAT_HTTP_HEADERS format represents SpanContexts using a
 * character-restricted string->string map (backed by a Javascript Object)
 * as a carrier.
 *
 * Keys and values in the FORMAT_HTTP_HEADERS carrier must be suitable for
 * use as HTTP headers (without modification or further escaping). That is,
 * the keys have a greatly restricted character set, casing for the keys
 * may not be preserved by various intermediaries, and the values should be
 * URL-escaped.
 *
 * The FORMAT_HTTP_HEADERS carrier map may contain unrelated data (e.g.,
 * arbitrary HTTP headers); as such, the Tracer implementation should use a
 * prefix or other convention to distinguish Tracer-specific key:value
 * pairs.
 */
exports.FORMAT_HTTP_HEADERS = 'http_headers';
/**
 * A Span may be the "child of" a parent Span. In a “child of” reference,
 * the parent Span depends on the child Span in some capacity.
 *
 * See more about reference types at https://github.com/opentracing/specification
 */
exports.REFERENCE_CHILD_OF = 'child_of';
/**
 * Some parent Spans do not depend in any way on the result of their child
 * Spans. In these cases, we say merely that the child Span “follows from”
 * the parent Span in a causal sense.
 *
 * See more about reference types at https://github.com/opentracing/specification
 */
exports.REFERENCE_FOLLOWS_FROM = 'follows_from';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ 47447:
/*!***************************************************!*\
  !*** ./node_modules/opentracing/lib/functions.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Constants = __webpack_require__(/*! ./constants */ 55555);
var reference_1 = __webpack_require__(/*! ./reference */ 20895);
var span_1 = __webpack_require__(/*! ./span */ 10828);
/**
 * Return a new REFERENCE_CHILD_OF reference.
 *
 * @param {SpanContext} spanContext - the parent SpanContext instance to
 *        reference.
 * @return a REFERENCE_CHILD_OF reference pointing to `spanContext`
 */
function childOf(spanContext) {
  // Allow the user to pass a Span instead of a SpanContext
  if (spanContext instanceof span_1.default) {
    spanContext = spanContext.context();
  }
  return new reference_1.default(Constants.REFERENCE_CHILD_OF, spanContext);
}
exports.childOf = childOf;
/**
 * Return a new REFERENCE_FOLLOWS_FROM reference.
 *
 * @param {SpanContext} spanContext - the parent SpanContext instance to
 *        reference.
 * @return a REFERENCE_FOLLOWS_FROM reference pointing to `spanContext`
 */
function followsFrom(spanContext) {
  // Allow the user to pass a Span instead of a SpanContext
  if (spanContext instanceof span_1.default) {
    spanContext = spanContext.context();
  }
  return new reference_1.default(Constants.REFERENCE_FOLLOWS_FROM, spanContext);
}
exports.followsFrom = followsFrom;
//# sourceMappingURL=functions.js.map

/***/ }),

/***/ 61780:
/*!**********************************************!*\
  !*** ./node_modules/opentracing/lib/noop.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var span_1 = __webpack_require__(/*! ./span */ 10828);
var span_context_1 = __webpack_require__(/*! ./span_context */ 34056);
var tracer_1 = __webpack_require__(/*! ./tracer */ 45241);
exports.tracer = null;
exports.spanContext = null;
exports.span = null;
// Deferred initialization to avoid a dependency cycle where Tracer depends on
// Span which depends on the noop tracer.
function initialize() {
  exports.tracer = new tracer_1.default();
  exports.span = new span_1.default();
  exports.spanContext = new span_context_1.default();
}
exports.initialize = initialize;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ 20895:
/*!***************************************************!*\
  !*** ./node_modules/opentracing/lib/reference.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var span_1 = __webpack_require__(/*! ./span */ 10828);
/**
 * Reference pairs a reference type constant (e.g., REFERENCE_CHILD_OF or
 * REFERENCE_FOLLOWS_FROM) with the SpanContext it points to.
 *
 * See the exported childOf() and followsFrom() functions at the package level.
 */
var Reference = /** @class */function () {
  /**
   * Initialize a new Reference instance.
   *
   * @param {string} type - the Reference type constant (e.g.,
   *        REFERENCE_CHILD_OF or REFERENCE_FOLLOWS_FROM).
   * @param {SpanContext} referencedContext - the SpanContext being referred
   *        to. As a convenience, a Span instance may be passed in instead
   *        (in which case its .context() is used here).
   */
  function Reference(type, referencedContext) {
    this._type = type;
    this._referencedContext = referencedContext instanceof span_1.default ? referencedContext.context() : referencedContext;
  }
  /**
   * @return {string} The Reference type (e.g., REFERENCE_CHILD_OF or
   *         REFERENCE_FOLLOWS_FROM).
   */
  Reference.prototype.type = function () {
    return this._type;
  };
  /**
   * @return {SpanContext} The SpanContext being referred to (e.g., the
   *         parent in a REFERENCE_CHILD_OF Reference).
   */
  Reference.prototype.referencedContext = function () {
    return this._referencedContext;
  };
  return Reference;
}();
exports["default"] = Reference;
//# sourceMappingURL=reference.js.map

/***/ }),

/***/ 10828:
/*!**********************************************!*\
  !*** ./node_modules/opentracing/lib/span.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var noop = __webpack_require__(/*! ./noop */ 61780);
/**
 * Span represents a logical unit of work as part of a broader Trace. Examples
 * of span might include remote procedure calls or a in-process function calls
 * to sub-components. A Trace has a single, top-level "root" Span that in turn
 * may have zero or more child Spans, which in turn may have children.
 */
var Span = /** @class */function () {
  function Span() {}
  // ---------------------------------------------------------------------- //
  // OpenTracing API methods
  // ---------------------------------------------------------------------- //
  /**
   * Returns the SpanContext object associated with this Span.
   *
   * @return {SpanContext}
   */
  Span.prototype.context = function () {
    return this._context();
  };
  /**
   * Returns the Tracer object used to create this Span.
   *
   * @return {Tracer}
   */
  Span.prototype.tracer = function () {
    return this._tracer();
  };
  /**
   * Sets the string name for the logical operation this span represents.
   *
   * @param {string} name
   */
  Span.prototype.setOperationName = function (name) {
    this._setOperationName(name);
    return this;
  };
  /**
   * Sets a key:value pair on this Span that also propagates to future
   * children of the associated Span.
   *
   * setBaggageItem() enables powerful functionality given a full-stack
   * opentracing integration (e.g., arbitrary application data from a web
   * client can make it, transparently, all the way into the depths of a
   * storage system), and with it some powerful costs: use this feature with
   * care.
   *
   * IMPORTANT NOTE #1: setBaggageItem() will only propagate baggage items to
   * *future* causal descendants of the associated Span.
   *
   * IMPORTANT NOTE #2: Use this thoughtfully and with care. Every key and
   * value is copied into every local *and remote* child of the associated
   * Span, and that can add up to a lot of network and cpu overhead.
   *
   * @param {string} key
   * @param {string} value
   */
  Span.prototype.setBaggageItem = function (key, value) {
    this._setBaggageItem(key, value);
    return this;
  };
  /**
   * Returns the value for a baggage item given its key.
   *
   * @param  {string} key
   *         The key for the given trace attribute.
   * @return {string}
   *         String value for the given key, or undefined if the key does not
   *         correspond to a set trace attribute.
   */
  Span.prototype.getBaggageItem = function (key) {
    return this._getBaggageItem(key);
  };
  /**
   * Adds a single tag to the span.  See `addTags()` for details.
   *
   * @param {string} key
   * @param {any} value
   */
  Span.prototype.setTag = function (key, value) {
    var _a;
    // NOTE: the call is normalized to a call to _addTags()
    this._addTags((_a = {}, _a[key] = value, _a));
    return this;
  };
  /**
   * Adds the given key value pairs to the set of span tags.
   *
   * Multiple calls to addTags() results in the tags being the superset of
   * all calls.
   *
   * The behavior of setting the same key multiple times on the same span
   * is undefined.
   *
   * The supported type of the values is implementation-dependent.
   * Implementations are expected to safely handle all types of values but
   * may choose to ignore unrecognized / unhandle-able values (e.g. objects
   * with cyclic references, function objects).
   *
   * @return {[type]} [description]
   */
  Span.prototype.addTags = function (keyValueMap) {
    this._addTags(keyValueMap);
    return this;
  };
  /**
   * Add a log record to this Span, optionally at a user-provided timestamp.
   *
   * For example:
   *
   *     span.log({
   *         size: rpc.size(),  // numeric value
   *         URI: rpc.URI(),  // string value
   *         payload: rpc.payload(),  // Object value
   *         "keys can be arbitrary strings": rpc.foo(),
   *     });
   *
   *     span.log({
   *         "error.description": someError.description(),
   *     }, someError.timestampMillis());
   *
   * @param {object} keyValuePairs
   *        An object mapping string keys to arbitrary value types. All
   *        Tracer implementations should support bool, string, and numeric
   *        value types, and some may also support Object values.
   * @param {number} timestamp
   *        An optional parameter specifying the timestamp in milliseconds
   *        since the Unix epoch. Fractional values are allowed so that
   *        timestamps with sub-millisecond accuracy can be represented. If
   *        not specified, the implementation is expected to use its notion
   *        of the current time of the call.
   */
  Span.prototype.log = function (keyValuePairs, timestamp) {
    this._log(keyValuePairs, timestamp);
    return this;
  };
  /**
   * DEPRECATED
   */
  Span.prototype.logEvent = function (eventName, payload) {
    return this._log({
      event: eventName,
      payload: payload
    });
  };
  /**
   * Sets the end timestamp and finalizes Span state.
   *
   * With the exception of calls to Span.context() (which are always allowed),
   * finish() must be the last call made to any span instance, and to do
   * otherwise leads to undefined behavior.
   *
   * @param  {number} finishTime
   *         Optional finish time in milliseconds as a Unix timestamp. Decimal
   *         values are supported for timestamps with sub-millisecond accuracy.
   *         If not specified, the current time (as defined by the
   *         implementation) will be used.
   */
  Span.prototype.finish = function (finishTime) {
    this._finish(finishTime);
    // Do not return `this`. The Span generally should not be used after it
    // is finished so chaining is not desired in this context.
  };
  // ---------------------------------------------------------------------- //
  // Derived classes can choose to implement the below
  // ---------------------------------------------------------------------- //
  // By default returns a no-op SpanContext.
  Span.prototype._context = function () {
    return noop.spanContext;
  };
  // By default returns a no-op tracer.
  //
  // The base class could store the tracer that created it, but it does not
  // in order to ensure the no-op span implementation has zero members,
  // which allows V8 to aggressively optimize calls to such objects.
  Span.prototype._tracer = function () {
    return noop.tracer;
  };
  // By default does nothing
  Span.prototype._setOperationName = function (name) {};
  // By default does nothing
  Span.prototype._setBaggageItem = function (key, value) {};
  // By default does nothing
  Span.prototype._getBaggageItem = function (key) {
    return undefined;
  };
  // By default does nothing
  //
  // NOTE: both setTag() and addTags() map to this function. keyValuePairs
  // will always be an associative array.
  Span.prototype._addTags = function (keyValuePairs) {};
  // By default does nothing
  Span.prototype._log = function (keyValuePairs, timestamp) {};
  // By default does nothing
  //
  // finishTime is expected to be either a number or undefined.
  Span.prototype._finish = function (finishTime) {};
  return Span;
}();
exports.Span = Span;
exports["default"] = Span;
//# sourceMappingURL=span.js.map

/***/ }),

/***/ 34056:
/*!******************************************************!*\
  !*** ./node_modules/opentracing/lib/span_context.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
/**
 * SpanContext represents Span state that must propagate to descendant Spans
 * and across process boundaries.
 *
 * SpanContext is logically divided into two pieces: the user-level "Baggage"
 * (see setBaggageItem and getBaggageItem) that propagates across Span
 * boundaries and any Tracer-implementation-specific fields that are needed to
 * identify or otherwise contextualize the associated Span instance (e.g., a
 * <trace_id, span_id, sampled> tuple).
 */
var SpanContext = /** @class */function () {
  function SpanContext() {}
  // The SpanContext is entirely implementation dependent
  /**
   * Returns a string representation of the implementation internal trace ID.
   *
   * @returns {string}
   */
  SpanContext.prototype.toTraceId = function () {
    return '';
  };
  /**
   * Returns a string representation of the implementation internal span ID.
   *
   * @returns {string}
   */
  SpanContext.prototype.toSpanId = function () {
    return '';
  };
  return SpanContext;
}();
exports.SpanContext = SpanContext;
exports["default"] = SpanContext;
//# sourceMappingURL=span_context.js.map

/***/ }),

/***/ 45241:
/*!************************************************!*\
  !*** ./node_modules/opentracing/lib/tracer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var Functions = __webpack_require__(/*! ./functions */ 47447);
var Noop = __webpack_require__(/*! ./noop */ 61780);
var span_1 = __webpack_require__(/*! ./span */ 10828);
/**
 * Tracer is the entry-point between the instrumentation API and the tracing
 * implementation.
 *
 * The default object acts as a no-op implementation.
 *
 * Note to implementators: derived classes can choose to directly implement the
 * methods in the "OpenTracing API methods" section, or optionally the subset of
 * underscore-prefixed methods to pick up the argument checking and handling
 * automatically from the base class.
 */
var Tracer = /** @class */function () {
  function Tracer() {}
  // ---------------------------------------------------------------------- //
  // OpenTracing API methods
  // ---------------------------------------------------------------------- //
  /**
   * Starts and returns a new Span representing a logical unit of work.
   *
   * For example:
   *
   *     // Start a new (parentless) root Span:
   *     var parent = Tracer.startSpan('DoWork');
   *
   *     // Start a new (child) Span:
   *     var child = Tracer.startSpan('load-from-db', {
   *         childOf: parent.context(),
   *     });
   *
   *     // Start a new async (FollowsFrom) Span:
   *     var child = Tracer.startSpan('async-cache-write', {
   *         references: [
   *             opentracing.followsFrom(parent.context())
   *         ],
   *     });
   *
   * @param {string} name - the name of the operation (REQUIRED).
   * @param {SpanOptions} [options] - options for the newly created span.
   * @return {Span} - a new Span object.
   */
  Tracer.prototype.startSpan = function (name, options) {
    if (options === void 0) {
      options = {};
    }
    // Convert options.childOf to fields.references as needed.
    if (options.childOf) {
      // Convert from a Span or a SpanContext into a Reference.
      var childOf = Functions.childOf(options.childOf);
      if (options.references) {
        options.references.push(childOf);
      } else {
        options.references = [childOf];
      }
      delete options.childOf;
    }
    return this._startSpan(name, options);
  };
  /**
   * Injects the given SpanContext instance for cross-process propagation
   * within `carrier`. The expected type of `carrier` depends on the value of
   * `format.
   *
   * OpenTracing defines a common set of `format` values (see
   * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
   * an expected carrier type.
   *
   * Consider this pseudocode example:
   *
   *     var clientSpan = ...;
   *     ...
   *     // Inject clientSpan into a text carrier.
   *     var headersCarrier = {};
   *     Tracer.inject(clientSpan.context(), Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
   *     // Incorporate the textCarrier into the outbound HTTP request header
   *     // map.
   *     Object.assign(outboundHTTPReq.headers, headersCarrier);
   *     // ... send the httpReq
   *
   * @param  {SpanContext} spanContext - the SpanContext to inject into the
   *         carrier object. As a convenience, a Span instance may be passed
   *         in instead (in which case its .context() is used for the
   *         inject()).
   * @param  {string} format - the format of the carrier.
   * @param  {any} carrier - see the documentation for the chosen `format`
   *         for a description of the carrier object.
   */
  Tracer.prototype.inject = function (spanContext, format, carrier) {
    // Allow the user to pass a Span instead of a SpanContext
    if (spanContext instanceof span_1.default) {
      spanContext = spanContext.context();
    }
    return this._inject(spanContext, format, carrier);
  };
  /**
   * Returns a SpanContext instance extracted from `carrier` in the given
   * `format`.
   *
   * OpenTracing defines a common set of `format` values (see
   * FORMAT_TEXT_MAP, FORMAT_HTTP_HEADERS, and FORMAT_BINARY), and each has
   * an expected carrier type.
   *
   * Consider this pseudocode example:
   *
   *     // Use the inbound HTTP request's headers as a text map carrier.
   *     var headersCarrier = inboundHTTPReq.headers;
   *     var wireCtx = Tracer.extract(Tracer.FORMAT_HTTP_HEADERS, headersCarrier);
   *     var serverSpan = Tracer.startSpan('...', { childOf : wireCtx });
   *
   * @param  {string} format - the format of the carrier.
   * @param  {any} carrier - the type of the carrier object is determined by
   *         the format.
   * @return {SpanContext}
   *         The extracted SpanContext, or null if no such SpanContext could
   *         be found in `carrier`
   */
  Tracer.prototype.extract = function (format, carrier) {
    return this._extract(format, carrier);
  };
  // ---------------------------------------------------------------------- //
  // Derived classes can choose to implement the below
  // ---------------------------------------------------------------------- //
  // NOTE: the input to this method is *always* an associative array. The
  // public-facing startSpan() method normalizes the arguments so that
  // all N implementations do not need to worry about variations in the call
  // signature.
  //
  // The default behavior returns a no-op span.
  Tracer.prototype._startSpan = function (name, fields) {
    return Noop.span;
  };
  // The default behavior is a no-op.
  Tracer.prototype._inject = function (spanContext, format, carrier) {};
  // The default behavior is to return a no-op SpanContext.
  Tracer.prototype._extract = function (format, carrier) {
    return Noop.spanContext;
  };
  return Tracer;
}();
exports.Tracer = Tracer;
exports["default"] = Tracer;
//# sourceMappingURL=tracer.js.map

/***/ }),

/***/ 89532:
/*!*********************************************************!*\
  !*** ./node_modules/promise-polyfill/src/allSettled.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function allSettled(arr) {
  var P = this;
  return new P(function (resolve, reject) {
    if (!(arr && typeof arr.length !== 'undefined')) {
      return reject(new TypeError(typeof arr + ' ' + arr + ' is not iterable(cannot read property Symbol(Symbol.iterator))'));
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      if (val && (typeof val === 'object' || typeof val === 'function')) {
        var then = val.then;
        if (typeof then === 'function') {
          then.call(val, function (val) {
            res(i, val);
          }, function (e) {
            args[i] = {
              status: 'rejected',
              reason: e
            };
            if (--remaining === 0) {
              resolve(args);
            }
          });
          return;
        }
      }
      args[i] = {
        status: 'fulfilled',
        value: val
      };
      if (--remaining === 0) {
        resolve(args);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allSettled);

/***/ }),

/***/ 72336:
/*!**************************************************!*\
  !*** ./node_modules/promise-polyfill/src/any.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @constructor
 */
function AggregateError(errors, message) {
  this.name = 'AggregateError', this.errors = errors;
  this.message = message || '';
}
AggregateError.prototype = Error.prototype;
function any(arr) {
  var P = this;
  return new P(function (resolve, reject) {
    if (!(arr && typeof arr.length !== 'undefined')) {
      return reject(new TypeError('Promise.any accepts an array'));
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return reject();
    var rejectionReasons = [];
    for (var i = 0; i < args.length; i++) {
      try {
        P.resolve(args[i]).then(resolve).catch(function (error) {
          rejectionReasons.push(error);
          if (rejectionReasons.length === args.length) {
            reject(new AggregateError(rejectionReasons, 'All promises were rejected'));
          }
        });
      } catch (ex) {
        reject(ex);
      }
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (any);

/***/ }),

/***/ 89157:
/*!******************************************************!*\
  !*** ./node_modules/promise-polyfill/src/finally.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @this {Promise}
 */
function finallyConstructor(callback) {
  var constructor = this.constructor;
  return this.then(function (value) {
    // @ts-ignore
    return constructor.resolve(callback()).then(function () {
      return value;
    });
  }, function (reason) {
    // @ts-ignore
    return constructor.resolve(callback()).then(function () {
      // @ts-ignore
      return constructor.reject(reason);
    });
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (finallyConstructor);

/***/ }),

/***/ 68394:
/*!****************************************************!*\
  !*** ./node_modules/promise-polyfill/src/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _finally__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finally */ 89157);
/* harmony import */ var _allSettled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allSettled */ 89532);
/* harmony import */ var _any__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./any */ 72336);




// Store setTimeout reference so promise-polyfill will be unaffected by
// other code modifying setTimeout (like sinon.useFakeTimers())
var setTimeoutFunc = setTimeout;
function isArray(x) {
  return Boolean(x && typeof x.length !== 'undefined');
}
function noop() {}

// Polyfill for Function.prototype.bind
function bind(fn, thisArg) {
  return function () {
    fn.apply(thisArg, arguments);
  };
}

/**
 * @constructor
 * @param {Function} fn
 */
function Promise(fn) {
  if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
  if (typeof fn !== 'function') throw new TypeError('not a function');
  /** @type {!number} */
  this._state = 0;
  /** @type {!boolean} */
  this._handled = false;
  /** @type {Promise|undefined} */
  this._value = undefined;
  /** @type {!Array<!Function>} */
  this._deferreds = [];
  doResolve(fn, this);
}
function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value;
  }
  if (self._state === 0) {
    self._deferreds.push(deferred);
    return;
  }
  self._handled = true;
  Promise._immediateFn(function () {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
      return;
    }
    var ret;
    try {
      ret = cb(self._value);
    } catch (e) {
      reject(deferred.promise, e);
      return;
    }
    resolve(deferred.promise, ret);
  });
}
function resolve(self, newValue) {
  try {
    // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
    if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
      var then = newValue.then;
      if (newValue instanceof Promise) {
        self._state = 3;
        self._value = newValue;
        finale(self);
        return;
      } else if (typeof then === 'function') {
        doResolve(bind(then, newValue), self);
        return;
      }
    }
    self._state = 1;
    self._value = newValue;
    finale(self);
  } catch (e) {
    reject(self, e);
  }
}
function reject(self, newValue) {
  self._state = 2;
  self._value = newValue;
  finale(self);
}
function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    Promise._immediateFn(function () {
      if (!self._handled) {
        Promise._unhandledRejectionFn(self._value);
      }
    });
  }
  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i]);
  }
  self._deferreds = null;
}

/**
 * @constructor
 */
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}

/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */
function doResolve(fn, self) {
  var done = false;
  try {
    fn(function (value) {
      if (done) return;
      done = true;
      resolve(self, value);
    }, function (reason) {
      if (done) return;
      done = true;
      reject(self, reason);
    });
  } catch (ex) {
    if (done) return;
    done = true;
    reject(self, ex);
  }
}
Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};
Promise.prototype.then = function (onFulfilled, onRejected) {
  // @ts-ignore
  var prom = new this.constructor(noop);
  handle(this, new Handler(onFulfilled, onRejected, prom));
  return prom;
};
Promise.prototype['finally'] = _finally__WEBPACK_IMPORTED_MODULE_0__["default"];
Promise.all = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.all accepts an array'));
    }
    var args = Array.prototype.slice.call(arr);
    if (args.length === 0) return resolve([]);
    var remaining = args.length;
    function res(i, val) {
      try {
        if (val && (typeof val === 'object' || typeof val === 'function')) {
          var then = val.then;
          if (typeof then === 'function') {
            then.call(val, function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
        args[i] = val;
        if (--remaining === 0) {
          resolve(args);
        }
      } catch (ex) {
        reject(ex);
      }
    }
    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};
Promise.any = _any__WEBPACK_IMPORTED_MODULE_2__["default"];
Promise.allSettled = _allSettled__WEBPACK_IMPORTED_MODULE_1__["default"];
Promise.resolve = function (value) {
  if (value && typeof value === 'object' && value.constructor === Promise) {
    return value;
  }
  return new Promise(function (resolve) {
    resolve(value);
  });
};
Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};
Promise.race = function (arr) {
  return new Promise(function (resolve, reject) {
    if (!isArray(arr)) {
      return reject(new TypeError('Promise.race accepts an array'));
    }
    for (var i = 0, len = arr.length; i < len; i++) {
      Promise.resolve(arr[i]).then(resolve, reject);
    }
  });
};

// Use polyfill for setImmediate for performance gains
Promise._immediateFn =
// @ts-ignore
typeof setImmediate === 'function' && function (fn) {
  // @ts-ignore
  setImmediate(fn);
} || function (fn) {
  setTimeoutFunc(fn, 0);
};
Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
  if (typeof console !== 'undefined' && console) {
    console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Promise);

/***/ }),

/***/ 13236:
/*!***********************************************!*\
  !*** ./node_modules/stackframe/stackframe.js ***!
  \***********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  'use strict';

  // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

  /* istanbul ignore next */
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function () {
  'use strict';

  function _isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }
  function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
    if (functionName !== undefined) {
      this.setFunctionName(functionName);
    }
    if (args !== undefined) {
      this.setArgs(args);
    }
    if (fileName !== undefined) {
      this.setFileName(fileName);
    }
    if (lineNumber !== undefined) {
      this.setLineNumber(lineNumber);
    }
    if (columnNumber !== undefined) {
      this.setColumnNumber(columnNumber);
    }
    if (source !== undefined) {
      this.setSource(source);
    }
  }
  StackFrame.prototype = {
    getFunctionName: function () {
      return this.functionName;
    },
    setFunctionName: function (v) {
      this.functionName = String(v);
    },
    getArgs: function () {
      return this.args;
    },
    setArgs: function (v) {
      if (Object.prototype.toString.call(v) !== '[object Array]') {
        throw new TypeError('Args must be an Array');
      }
      this.args = v;
    },
    // NOTE: Property name may be misleading as it includes the path,
    // but it somewhat mirrors V8's JavaScriptStackTraceApi
    // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
    // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
    getFileName: function () {
      return this.fileName;
    },
    setFileName: function (v) {
      this.fileName = String(v);
    },
    getLineNumber: function () {
      return this.lineNumber;
    },
    setLineNumber: function (v) {
      if (!_isNumber(v)) {
        throw new TypeError('Line Number must be a Number');
      }
      this.lineNumber = Number(v);
    },
    getColumnNumber: function () {
      return this.columnNumber;
    },
    setColumnNumber: function (v) {
      if (!_isNumber(v)) {
        throw new TypeError('Column Number must be a Number');
      }
      this.columnNumber = Number(v);
    },
    getSource: function () {
      return this.source;
    },
    setSource: function (v) {
      this.source = String(v);
    },
    toString: function () {
      var functionName = this.getFunctionName() || '{anonymous}';
      var args = '(' + (this.getArgs() || []).join(',') + ')';
      var fileName = this.getFileName() ? '@' + this.getFileName() : '';
      var lineNumber = _isNumber(this.getLineNumber()) ? ':' + this.getLineNumber() : '';
      var columnNumber = _isNumber(this.getColumnNumber()) ? ':' + this.getColumnNumber() : '';
      return functionName + args + fileName + lineNumber + columnNumber;
    }
  };
  return StackFrame;
});

/***/ }),

/***/ 69120:
/*!***************************************************************************************!*\
  !*** ./src/app/auth-module/change-password/change-password.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
.btn-sign-up {
  margin: 0 0 30px 0;
  display: inline-block;
  vertical-align: top;
}

.alterwrap {
  background-color: #e8f0fe;
  border-radius: 4px;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
}
.alterwrap p {
  margin: 0 !important;
  text-align: justify;
  letter-spacing: 0;
  color: #444444;
  font-size: 12px;
  line-height: 18px;
  font-family: "SF Pro Display";
}
.alterwrap span {
  padding-right: 8px;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 68136:
/*!*******************************************************************!*\
  !*** ./src/app/auth-module/error/error.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
@media (max-width: 767px) {
  .sso-new-header {
    border-bottom: 1px solid #E0E0E0;
  }
}
.sso-new-header .flx-header {
  padding: 50px 0 20px 0;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}
@media (max-width: 1366px) {
  .sso-new-header .flx-header {
    padding-top: 30px;
  }
}
@media (max-width: 767px) {
  .sso-new-header .flx-header {
    padding: 10px 0;
  }
}
.sso-new-header .flx-header .logo-n {
  display: flex;
  align-items: center;
}
.sso-new-header .flx-header .logo-n .logo-img {
  padding-left: 22px;
  margin-left: 22px;
  position: relative;
}
@media (max-width: 767px) {
  .sso-new-header .flx-header .logo-n .logo-img {
    padding-left: 12px;
    margin-left: 12px;
  }
}
.sso-new-header .flx-header .logo-n .logo-img:first-child {
  padding: 0;
  margin: 0;
}
.sso-new-header .flx-header .logo-n .logo-img:nth-child(2n)::before {
  content: "";
  width: 1px;
  height: 100%;
  background: linear-gradient(180deg, rgba(0, 67, 147, 0) 0%, #004393 53.5%, rgba(0, 67, 147, 0) 100%);
  position: absolute;
  left: 0;
  top: 0;
}
.sso-new-header .flx-header .logo-n .logo-img .img-logo {
  max-width: 100%;
  height: 40px;
  width: auto;
}
.sso-new-header .flx-header .logo-n .logo-img .img-logo.logo-blur {
  opacity: 0.4;
}
@media (max-width: 1366px) {
  .sso-new-header .flx-header .logo-n .logo-img .img-logo {
    height: 30px;
  }
}
@media (max-width: 767px) {
  .sso-new-header .flx-header .logo-n .logo-img .img-logo {
    height: 20px;
  }
}
.sso-new-header .flx-header .faq-lnk a {
  font-size: 15px;
  line-height: 15px;
  text-decoration: none;
}
.sso-new-header .flx-header .faq-lnk a span {
  display: flex;
  align-items: flex-end;
  gap: 5px;
}
.sso-new-header .flx-header .faq-lnk a span img {
  width: 16px;
  height: 16px;
}

.sign-in-button {
  width: 100%;
  padding: 12px 0;
  background-color: #004393;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  font-family: "SF Pro Display";
  letter-spacing: 0;
  text-decoration: none;
  outline: none;
}
.sign-in-button:disabled {
  cursor: not-allowed;
}

.wrap-inner {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media (max-width: 767px) {
  .wrap-inner {
    position: relative;
    margin-top: 30px;
  }
}
.wrap-inner.wrap-inner-error {
  padding-top: 120px;
}
@media (max-width: 1366px) {
  .wrap-inner.wrap-inner-error {
    padding-top: 100px;
  }
}
@media (max-width: 767px) {
  .wrap-inner.wrap-inner-error {
    padding-top: 50px;
  }
}
.wrap-inner .cont-lft .login-captions {
  padding-top: 100px;
}
@media (max-width: 1024px) {
  .wrap-inner .cont-lft {
    width: 48%;
  }
}
@media (max-width: 767px) {
  .wrap-inner .cont-lft {
    width: 100%;
    text-align: center;
  }
}
.wrap-inner .cont-lft .logo-mn {
  padding-bottom: 160px;
}
@media (max-width: 1024px) {
  .wrap-inner .cont-lft .logo-mn {
    padding-bottom: 60px;
  }
}
@media (max-width: 767px) {
  .wrap-inner .cont-lft .logo-mn {
    padding-bottom: 40px;
  }
}
@media (max-width: 767px) {
  .wrap-inner .cont-lft .login-captions {
    display: none;
  }
}
.wrap-inner .cont-lft .login-captions .text-slick-slider {
  min-width: 420px;
  height: 90px;
  padding: 0;
  margin-top: 0;
  overflow: hidden;
}
.wrap-inner .cont-lft .login-captions .text-slick-slider .text-slider-items {
  position: relative;
}
.wrap-inner .cont-lft .login-captions .text-slick-slider .text-slider-items .change {
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  animation: changeword 8s linear infinite;
}
.wrap-inner .cont-lft .login-captions .text-slick-slider .text-slider-items .change .slick-items {
  display: inline-flex;
  align-items: center;
  gap: 16px;
}
.wrap-inner .cont-lft .login-captions .text-slick-slider .text-slider-items .change .slick-items h3 {
  color: #004393;
  font-size: 40px;
  font-weight: 700;
}
@media (max-width: 992px) {
  .wrap-inner .cont-lft .login-captions .text-slick-slider .text-slider-items .change .slick-items h3 {
    font-size: 32px;
  }
}
.wrap-inner .cont-lft .login-captions .text-slick-slider .text-slider-items .change:nth-child(1) {
  animation-delay: 0s;
}
.wrap-inner .cont-lft .login-captions .text-slick-slider .text-slider-items .change:nth-child(2) {
  animation-delay: 2s;
}
.wrap-inner .cont-lft .login-captions .text-slick-slider .text-slider-items .change:nth-child(3) {
  animation-delay: 4s;
}
.wrap-inner .cont-lft .login-captions .text-slick-slider .text-slider-items .change:nth-child(4) {
  animation-delay: 6s;
}
@keyframes changeword {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  5% {
    opacity: 1;
    transform: translateY(0);
  }
  20% {
    opacity: 1;
    transform: translateY(0);
  }
  30% {
    opacity: 0;
    transform: translateY(-50px);
  }
  80% {
    opacity: 0;
    transform: translateY(-50px);
  }
}
.wrap-inner .cont-lft .login-captions .title-details {
  color: #333;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 10px;
}
@media (max-width: 992px) {
  .wrap-inner .cont-lft .login-captions .title-details {
    font-size: 32px;
  }
}
.wrap-inner .cont-lft .error-cont h3 {
  color: #004393;
  font-size: 64px;
  font-family: "SF Pro Display";
  font-weight: 900;
  margin: 0;
  position: relative;
  display: inline-block;
}
.wrap-inner .cont-lft .error-cont h3::before {
  content: "404";
  font-size: 64px;
  font-family: "SF Pro Display";
  font-weight: 900;
  margin: 0;
  display: block;
  position: absolute;
  left: 2px;
  top: 1px;
  border: 0;
  color: white;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  z-index: -1;
}
@media (max-width: 992px) {
  .wrap-inner .cont-lft .error-cont h3::before {
    font-size: 50px;
  }
}
@media (max-width: 992px) {
  .wrap-inner .cont-lft .error-cont h3 {
    font-size: 50px;
  }
}
.wrap-inner .cont-lft .error-cont h4 {
  font-size: 40px;
  margin: 0;
  color: #333333;
  font-family: "SF Pro Display";
  display: block;
  margin-bottom: 25px;
}
@media (max-width: 992px) {
  .wrap-inner .cont-lft .error-cont h4 {
    font-size: 24px;
  }
}
.wrap-inner .cont-lft .error-cont .btn-list {
  display: flex;
  gap: 0 40px;
}
.wrap-inner .cont-lft .error-cont .btn-list .btn-bg {
  width: 100%;
  padding: 12px 0;
  background-color: #004393;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  font-family: "SF Pro Display";
  letter-spacing: 0;
  text-decoration: none;
  outline: none;
  padding-left: 56px;
  padding-right: 56px;
  text-align: center;
  margin: 10px 0;
  border: 1px solid #004393;
  white-space: nowrap;
}
.wrap-inner .cont-lft .error-cont .btn-list .btn-bg.bg-none {
  background: #ffffff;
  color: #004393;
}
@media (max-width: 992px) {
  .wrap-inner .cont-lft .error-cont .btn-list .btn-bg {
    padding-left: 30px;
    padding-right: 30px;
  }
}
@media (max-width: 992px) {
  .wrap-inner .cont-lft .error-cont .btn-list {
    flex-wrap: wrap;
  }
}
@media (max-width: 1024px) {
  .wrap-inner .cont-rights {
    width: 48%;
  }
}
@media (max-width: 767px) {
  .wrap-inner .cont-rights {
    width: 100%;
  }
}
@media (max-width: 767px) {
  .wrap-inner .cont-rights.cont-rights-error {
    display: none;
  }
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 84924:
/*!***************************************************************************************!*\
  !*** ./src/app/auth-module/forgot-password/forgot-password.component.scss?ngResource ***!
  \***************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
.alterwrap {
  background-color: #e8f0fe;
  border-radius: 4px;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
}
.alterwrap p {
  margin: 0 !important;
  text-align: justify;
  letter-spacing: 0;
  color: #444444;
  font-size: 12px;
  line-height: 18px;
  font-family: "SF Pro Display";
}
.alterwrap span {
  padding-right: 8px;
}

.error {
  position: absolute;
  top: 4rem;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 47720:
/*!*******************************************************************!*\
  !*** ./src/app/auth-module/login/login.component.scss?ngResource ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.alterwrap {
  color: #004393;
  background: rgba(24, 98, 242, 0.2);
  border-radius: 4px;
  padding: 10px 22px;
  display: flex;
  align-items: center;
  width: 80%;
  margin: auto;
}
.alterwrap p {
  margin: 0 !important;
  text-align: justify;
  letter-spacing: 0;
  color: #004393;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  opacity: 1;
}
.alterwrap span {
  padding-right: 8px;
}

app-root {
  display: none;
}

.loader-wrap {
  position: absolute;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0px;
  bottom: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}

.loader-page {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 30px;
  width: 60px;
  box-sizing: border-box;
}
.loader-page .loader-item {
  position: relative;
  float: left;
  height: 30px;
  width: 3px;
  margin: 0 1.5px;
  background-color: #ababab;
  border-radius: 10px;
}
.loader-page .loader-item:nth-child(1) {
  animation: loader-item-1 2s linear infinite;
}
.loader-page .loader-item:nth-child(2) {
  animation: loader-item-2 2s linear infinite;
}
.loader-page .loader-item:nth-child(3) {
  animation: loader-item-3 2s linear infinite;
}
.loader-page .loader-item:nth-child(4) {
  animation: loader-item-4 2s linear infinite;
}
.loader-page .loader-item:nth-child(5) {
  animation: loader-item-5 2s linear infinite;
}
.loader-page .loader-item:nth-child(6) {
  animation: loader-item-6 2s linear infinite;
}
.loader-page .loader-item:nth-child(7) {
  animation: loader-item-7 2s linear infinite;
}
.loader-page .loader-item:nth-child(8) {
  animation: loader-item-8 2s linear infinite;
}
.loader-page .loader-item:nth-child(9) {
  animation: loader-item-9 2s linear infinite;
}
.loader-page .loader-item:nth-child(10) {
  animation: loader-item-10 2s linear infinite;
}
.loader-page:after {
  content: "";
  font-size: 12px;
  font-family: "Arial";
  color: #ababab;
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -24px;
  margin: auto;
}
@keyframes loader-item-1 {
  1% {
    transform: scaleY(1);
  }
  9% {
    transform: scaleY(1.4);
  }
  17% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}
@keyframes loader-item-2 {
  7% {
    transform: scaleY(1);
  }
  15% {
    transform: scaleY(1.4);
  }
  23% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}
@keyframes loader-item-3 {
  13% {
    transform: scaleY(1);
  }
  21% {
    transform: scaleY(1.4);
  }
  29% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}
@keyframes loader-item-4 {
  19% {
    transform: scaleY(1);
  }
  27% {
    transform: scaleY(1.4);
  }
  35% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}
@keyframes loader-item-5 {
  25% {
    transform: scaleY(1);
  }
  33% {
    transform: scaleY(1.4);
  }
  41% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}
@keyframes loader-item-6 {
  31% {
    transform: scaleY(1);
  }
  39% {
    transform: scaleY(1.4);
  }
  47% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}
@keyframes loader-item-7 {
  37% {
    transform: scaleY(1);
  }
  45% {
    transform: scaleY(1.4);
  }
  53% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}
@keyframes loader-item-8 {
  43% {
    transform: scaleY(1);
  }
  51% {
    transform: scaleY(1.4);
  }
  59% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}
@keyframes loader-item-9 {
  49% {
    transform: scaleY(1);
  }
  57% {
    transform: scaleY(1.4);
  }
  65% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}
@keyframes loader-item-10 {
  55% {
    transform: scaleY(1);
  }
  63% {
    transform: scaleY(1.4);
  }
  71% {
    transform: scaleY(1);
  }
  100% {
    transform: scaleY(1);
  }
}

.login-container a {
  margin-top: 30px;
  font-size: 14px !important;
  font-weight: 500;
}

.btn-bordered {
  font-size: 14px;
  color: #004393;
  background: white;
  border: 1px solid #004393;
}

.btn-bordered:hover {
  background: rgb(243, 243, 243);
}

.dont-have p {
  opacity: 1 !important;
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 47434:
/*!*********************************************************************!*\
  !*** ./src/app/auth-module/logout/logout.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 94344:
/*!*************************************************************************!*\
  !*** ./src/app/auth-module/register/register.component.scss?ngResource ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ 8564);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 98557);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
/*Bootstrap Override*/
/*Custom variables*/
/*Icons Variables*/
/*Responsive screen width*/
.password-policy { /* password-policy */
  margin-bottom: 20px;
  border: 1px solid #d1d1d1;
  border-radius: 5px;
  text-align: initial;
  padding: 13px;
  position: absolute;
  top: 52px;
  left: 0;
  width: 100%;
  background: #ffffff;
  z-index: 9999999;
  margin: 0;
}
.password-policy ul {
  font-size: 11px;
  padding-left: 14px;
  margin: 0;
  letter-spacing: 0;
}
.password-policy ul li {
  margin-bottom: 7px;
  font-size: 12px;
  font-family: "SF Pro Display";
}
.password-policy ul li:last-child {
  margin-bottom: 0;
}
.password-policy ul li.matched::before {
  content: "✓";
  margin-right: 5px;
  color: green;
}

.main-modal {
  text-align: center;
  overflow: hidden;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* z-index: 1050; */
  -webkit-overflow-scrolling: touch;
  outline: 0;
  opacity: 0;
  transition: opacity 0.15s linear, z-index 0.15;
  z-index: -1;
  overflow-x: hidden;
  overflow-y: auto;
}

.model-open {
  z-index: 9999999;
  opacity: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.custom-model-inner {
  transform: translate(0, -25%);
  transition: transform 0.3s ease-out;
  display: inline-block;
  vertical-align: middle;
  width: 520px;
  margin: 0 auto;
  max-width: 97%;
  padding-bottom: 0;
  box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
  background: #ffffff;
  border-radius: 8px;
  overflow: hidden;
  padding: 30px 40px;
  text-align: center;
}
.custom-model-inner .wrap-btn {
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  justify-content: space-between;
  margin-top: 10px;
}
.custom-model-inner .wrap-btn .btn {
  word-wrap: break-word;
  white-space: break-spaces;
  width: 45%;
  margin: 5px;
}
.custom-model-inner .wrap-btn .btn-font {
  font-size: 12px !important;
}

.custom-model-wrap {
  display: block;
  width: 100%;
  position: relative;
  background-color: #fff;
  border-bottom: 0;
  border-radius: 0;
  background-clip: padding-box;
  outline: 0;
  text-align: left;
  padding: 0;
  box-sizing: border-box;
  max-height: calc(100vh - 70px);
  overflow-y: auto;
}
.custom-model-wrap .custom-h1 {
  font-size: 2em;
  margin: 0.67em 6.9px !important;
}

.model-open .custom-model-inner {
  transform: translate(0, 0);
  position: relative;
  z-index: 999;
}

.model-open .bg-overlay {
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
}

.bg-overlay {
  background: rgba(0, 0, 0, 0);
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  transition: background 0.15s linear;
}

.close-btn {
  position: absolute;
  right: 2px;
  top: 5px;
  cursor: pointer;
  z-index: 99;
  padding: 4px 12px;
  font-size: 16px;
  margin-right: 0;
  height: 30px;
  margin-bottom: 0;
  border-radius: 0;
  border: 0;
  color: #1B1464;
}

.bg-overlay {
  background: rgba(0, 0, 0, 0);
  height: 100vh;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  transition: background 0.15s linear;
}

.close-btn {
  position: absolute;
  right: 2px;
  top: 5px;
  cursor: pointer;
  z-index: 99;
  padding: 4px 12px;
  font-size: 16px;
  margin-right: 0;
  height: 30px;
  margin-bottom: 0;
  border-radius: 0;
  border: 0;
  color: #1B1464;
}

@media screen and (min-width: 800px) {
  .custom-model-main:before {
    content: "";
    display: inline-block;
    height: auto;
    vertical-align: middle;
    margin-right: 0px;
    height: 100%;
  }
}
@media screen and (max-width: 799px) {
  .custom-model-inner {
    margin-top: 45px;
  }
}`, ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 11350:
/*!***************************************************************************************!*\
  !*** ./src/app/auth-module/change-password/change-password.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"login-section\">\r\n  <div class=\"sso-new-header\">  <!-- SSO New Header-->\r\n    <div class=\"container\">\r\n      <div class=\"flx-header\">\r\n        <div class=\"logo-n\">\r\n          <div class=\"logo-img\">\r\n            <a\r\n              class=\"finx-logo\"\r\n              title=\"Home\"\r\n\r\n              >\r\n              <img\r\n                src=\"assets/images/finx-icons/logo-choice.svg\"\r\n\r\n                alt=\"Choice\"\r\n                class=\"img-logo\" width=\"167\" height=\"40\"\r\n                />\r\n              </a>\r\n            </div>\r\n            <div class=\"logo-img\">\r\n              <img\r\n                src=\"assets/images/finx-icons/finx-login-logo.svg\"\r\n\r\n                alt=\"Choice FinX - Online Trading Platform\"\r\n                class=\"img-logo logo-blur\" width=\"167\" height=\"40\"\r\n                />\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"faq-lnk\">\r\n              <a\r\n                href=\"https://choicebroking.freshdesk.com/support/home\"\r\n                target=\"_blank\"\r\n                >\r\n                <span\r\n                  >FAQ <img src=\"assets/images/finx-icons/faq-icon.svg\" alt=\"\" width=\"16\" height=\"16\"\r\n                /></span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"login-body\">\r\n          <div class=\"left-sec\">\r\n            <div class=\"login-captions\">\r\n              <div class=\"text-slick-slider\">\r\n                <div class=\"text-slider-items\">\r\n                  <div class=\"change\">\r\n                    <div class=\"slick-items\">\r\n                      <h3>Trading</h3>\r\n                      <img\r\n                        src=\"assets/images/finx-icons/trading.svg\"\r\n                        alt=\"\"\r\n                        class=\"img-responsive\" width=\"61\" height=\"48\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"change\">\r\n                      <div class=\"slick-items\">\r\n                        <h3>Mutual Funds</h3>\r\n                        <img\r\n                          src=\"assets/images/finx-icons/mutual-funds.svg\"\r\n                          alt=\"\"\r\n                          class=\"img-responsive\" width=\"61\" height=\"48\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"change\">\r\n                        <div class=\"slick-items\">\r\n                          <h3>Insurance</h3>\r\n                          <img\r\n                            src=\"assets/images/finx-icons/insurance.svg\"\r\n                            alt=\"Insurance\"\r\n                            class=\"img-responsive\" width=\"61\" height=\"48\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"change\">\r\n                          <div class=\"slick-items\">\r\n                            <h3>Secured Products</h3>\r\n                            <img\r\n                              src=\"assets/images/finx-icons/secured-products.svg\"\r\n                              alt=\"\"\r\n                              class=\"img-responsive\" width=\"61\" height=\"48\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h3 class=\"title-details\">Explore all in one place</h3>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"right-sec\">\r\n                    <div class=\"login-card login-card-sso\" [hidden]=\"pwdResetSuccess\">\r\n                      <div class=\"form-wrap\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-12\">\r\n                            <!-- <div class=\"icon-center\">\r\n                            <img src=\"assets/images/finx-icons/logo-icon.svg\" alt=\"\" />\r\n                          </div> -->\r\n                          <div class=\"card-header-content\">\r\n                            <h5>\r\n                              {{\r\n                              shared?.params?.fromForgotPwd\r\n                              ? !otpVerified\r\n                              ? \"OTP Verification\"\r\n                              : \"Set New Password\"\r\n                              : \"Create New Password\"\r\n                              }}\r\n                            </h5>\r\n                            <p>\r\n                              {{\r\n                              shared?.params?.fromForgotPwd\r\n                              ? !otpVerified\r\n                              ? \"Enter the OTP that we sent to email & mobile associated with \" +\r\n                              shared?.params?.clientId\r\n                              : \"Set a new password that is both memorable and secure\"\r\n                              : \"Create password that is both memorable and secure\"\r\n                              }}\r\n                            </p>\r\n                            <!-- <h5 hidden>OTP Verification</h5>\r\n                            <p hidden></p>\r\n                            <h5 hidden>Set New Password</h5>\r\n                            <p hidden></p> -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      @if (\r\n                        (shared?.params?.fromForgotPwd && otpVerified) ||\r\n                        !shared?.params?.fromForgotPwd\r\n                        ) {\r\n                        <form\r\n                          name=\"changePasswordForm\"\r\n                          (ngSubmit)=\"changePassword(changePasswordForm)\"\r\n                          #changePasswordForm=\"ngForm\"\r\n                          >\r\n                          <div class=\"row\">\r\n                            <!-- <div class=\"col-md-12 mb-48\" [hidden]=\"!shared?.params?.fromForgotPwd\">\r\n                            <div class=\"form-control2\">\r\n                              <span class=\"input-group-addon\">\r\n                                <i aria-hidden=\"true\" class=\"icon-lock\"></i>\r\n                              </span>\r\n                              <input\r\n                                tabindex=\"1\"\r\n                                type=\"{{ change.currentIsText ? 'text' : 'password' }}\"\r\n                                autofocus\r\n                                class=\"form-input\"\r\n                                [(ngModel)]=\"change.currentPassword\"\r\n                                placeholder=\"none\"\r\n                                #currentPwd\r\n                                name=\"currentPassword\"\r\n                                #currentPassword=\"ngModel\"\r\n                                [required]=\"!shared?.params?.successLogin\"\r\n                                inputRestrict=\"password\"\r\n                                maxlength=\"12\"\r\n                                />\r\n                                <label for=\"currentPassword\" class=\"form-label\">Received Password</label>\r\n                                <div class=\"p-viewer\">\r\n                                  <button\r\n                                    type=\"button\"\r\n                                    class=\"btn eye-btn\"\r\n                                    (click)=\"change.currentIsText = !change.currentIsText\"\r\n                                    >\r\n                                    <i *ngIf=\"change.currentIsText\" class=\"icon-eye\"></i>\r\n                                    <i *ngIf=\"!change.currentIsText\" class=\"icon-eye-slash\"></i>\r\n                                  </button>\r\n                                </div>\r\n                              </div>\r\n                              <p\r\n                                class=\"animate error\"\r\n                          *ngIf=\"\r\n                            currentPassword.invalid &&\r\n                            currentPassword.dirty &&\r\n                            currentPassword?.errors.required\r\n                          \"\r\n                                >\r\n                                Field is Required.\r\n                              </p>\r\n                            </div> -->\r\n                            <div class=\"col-md-12 mb-48\">\r\n                              <div class=\"form-control2\">\r\n                                <!-- <span class=\"input-group-addon\">\r\n                                <i aria-hidden=\"true\" class=\"icon-lock\"></i>\r\n                              </span> -->\r\n                              <input\r\n                                tabindex=\"2\"\r\n                                type=\"{{ change.newIsText ? 'text' : 'password' }}\"\r\n                                class=\"form-input\"\r\n                                minlength=\"8\"\r\n                                maxlength=\"12\"\r\n                                [(ngModel)]=\"change.newPassword\"\r\n                                placeholder=\"none\"\r\n                                name=\"newPassword\"\r\n                                pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&^])[A-Za-z\\d@$!%*#?&^]{8,12}$\"\r\n                                #newPassword=\"ngModel\"\r\n                                required\r\n                                maxlength=\"12\"\r\n                                inputRestrict=\"password\"\r\n                                />\r\n                                <label for=\"newPassword\" class=\"form-label\"\r\n                                  >Create New Password</label\r\n                                  >\r\n                                  <div class=\"p-viewer\">\r\n                                    <button\r\n                                      type=\"button\"\r\n                                      class=\"btn eye-btn\"\r\n                                      (click)=\"change.newIsText = !change.newIsText\"\r\n                                      >\r\n                                      @if (change.newIsText) {\r\n                                        <i class=\"icon-eye\"></i>\r\n                                      }\r\n                                      @if (!change.newIsText) {\r\n                                        <i class=\"icon-eye-slash\"></i>\r\n                                      }\r\n                                    </button>\r\n                                  </div>\r\n                                </div>\r\n                                <p class=\"val-new-pwd\">\r\n                                  8+ Characters, 1 Number and 1 Special character\r\n                                </p>\r\n                                @if (\r\n                                  newPassword.invalid &&\r\n                                  newPassword.dirty &&\r\n                                  newPassword?.errors.required\r\n                                  ) {\r\n                                  <p\r\n                                    class=\"animate error\"\r\n                                    >\r\n                                    New Password is Required.\r\n                                  </p>\r\n                                }\r\n                                @if (\r\n                                  newPassword.invalid &&\r\n                                  newPassword.dirty &&\r\n                                  newPassword?.errors?.pattern\r\n                                  ) {\r\n                                  <p\r\n                                    class=\"animate error\"\r\n                                    >\r\n                                    Password must be alphanumeric with atleast one special\r\n                                    symbol from &#64;$!%*#?&^\r\n                                  </p>\r\n                                }\r\n                                @if (\r\n                                  change.currentPassword &&\r\n                                  change.currentPassword &&\r\n                                  change.currentPassword === change.newPassword\r\n                                  ) {\r\n                                  <p\r\n                                    class=\"animate error\"\r\n                                    >\r\n                                    New Password cannot be same as Current Password.\r\n                                  </p>\r\n                                }\r\n                                @if (\r\n                                  (newPassword.dirty &&\r\n                                  newPassword.invalid &&\r\n                                  change.newPassword &&\r\n                                  newPassword?.errors?.minlength) ||\r\n                                  currentPassword?.errors?.maxlength\r\n                                  ) {\r\n                                  <p\r\n                                    class=\"animate error\"\r\n                                    >\r\n                                    Password should be between 8-12 characters.\r\n                                  </p>\r\n                                }\r\n                              </div>\r\n                              <div class=\"col-md-12\">\r\n                                <div class=\"form-control2\">\r\n                                  <!-- <span class=\"input-group-addon\">\r\n                                  <i aria-hidden=\"true\" class=\"icon-lock\"></i>\r\n                                </span> -->\r\n                                <input\r\n                                  tabindex=\"3\"\r\n                                  type=\"{{ change.confirmNewIsText ? 'text' : 'password' }}\"\r\n                                  class=\"form-input\"\r\n                                  minlength=\"8\"\r\n                                  maxlength=\"12\"\r\n                                  [(ngModel)]=\"change.confirmNewPassword\"\r\n                                  placeholder=\"none\"\r\n                                  name=\"confirmNewPassword\"\r\n                                  #confirmNewPassword=\"ngModel\"\r\n                                  pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&^])[A-Za-z\\d@$!%*#?&^]{8,12}$\"\r\n                                  required\r\n                                  maxlength=\"12\"\r\n                                  inputRestrict=\"password\"\r\n                                  />\r\n                                  <label for=\"confirmNewPassword\" class=\"form-label\"\r\n                                    >Confirm New Password</label\r\n                                    >\r\n                                    <div class=\"p-viewer\">\r\n                                      <button\r\n                                        type=\"button\"\r\n                                        class=\"btn eye-btn\"\r\n                        (click)=\"\r\n                          change.confirmNewIsText = !change.confirmNewIsText\r\n                        \"\r\n                                        >\r\n                                        @if (change.confirmNewIsText) {\r\n                                          <i class=\"icon-eye\"></i>\r\n                                        }\r\n                                        @if (!change.confirmNewIsText) {\r\n                                          <i\r\n                                            class=\"icon-eye-slash\"\r\n                                          ></i>\r\n                                        }\r\n                                      </button>\r\n                                    </div>\r\n                                  </div>\r\n                                  <!--  <p\r\n                                  class=\"animate error\"\r\n                    *ngIf=\"\r\n                      confirmNewPassword.invalid &&\r\n                      confirmNewPassword.dirty &&\r\n                      confirmNewPassword?.errors.required\r\n                    \"\r\n                                  >\r\n                                  Confirm New Password is Required.\r\n                                </p> -->\r\n                                <!-- <p\r\n                                class=\"animate error\"\r\n                    *ngIf=\"\r\n                      confirmNewPassword.invalid &&\r\n                      confirmNewPassword.dirty &&\r\n                      confirmNewPassword?.errors?.pattern\r\n                    \"\r\n                                >\r\n                                Password must be alphanumeric with atleast one special\r\n                                symbol from @$!%*#?&^\r\n                              </p> -->\r\n                              @if (\r\n                                change.confirmNewPassword !== change.newPassword &&\r\n                                confirmNewPassword.dirty\r\n                                ) {\r\n                                <p\r\n                                  class=\"animate error\"\r\n                                  >\r\n                                  New and Confirm New Password not matching\r\n                                </p>\r\n                              }\r\n                              <!--   <p\r\n                              class=\"animate error\"\r\n                    *ngIf=\"\r\n                      (confirmNewPassword.dirty &&\r\n                        confirmNewPassword.invalid &&\r\n                        change.confirmNewPassword &&\r\n                        confirmNewPassword?.errors?.minlength) ||\r\n                      confirmNewPassword?.errors?.maxlength\r\n                    \"\r\n                              >\r\n                              Password should be between 8-12 characters.\r\n                            </p> -->\r\n                          </div>\r\n                          <div class=\"clear\"></div>\r\n                          @if (\r\n                            !shared?.params?.isExpired && !shared?.params?.fromForgotPwd\r\n                            ) {\r\n                            <div\r\n                              class=\"col-md-12 mb-10\"\r\n                              [hidden]=\"!isResendVisible\"\r\n                              >\r\n                              Still did'nt receive Password?\r\n                              <span (click)=\"resendForgotPassword(true)\" class=\"btn-sign-up\"\r\n                                >Click Here to resend</span\r\n                                >\r\n                              </div>\r\n                            }\r\n                            <div class=\"col-sm-12 text-center submit-btn-wrapper\">\r\n                              <button\r\n                                type=\"submit\"\r\n                                class=\"btn btn-gradient\"\r\n                    [disabled]=\"\r\n                      !change.newPassword ||\r\n                      change.confirmNewPassword !== change.newPassword\r\n                    \"\r\n                                >\r\n                                Change Password\r\n                              </button>\r\n                            </div>\r\n                          </div>\r\n                        </form>\r\n                      }\r\n                      @if (shared?.params?.fromForgotPwd && !otpVerified) {\r\n                        <form\r\n                          name=\"twoFAForm\"\r\n                          (ngSubmit)=\"verifyOtp()\"\r\n                          #twoFAForm=\"ngForm\"\r\n                          >\r\n                          <div class=\"form-control2\">\r\n                            <!-- <span class=\"input-group-addon\">\r\n                            <i class=\"icon-lock\" aria-hidden=\"true\"></i>\r\n                          </span> -->\r\n                          <input\r\n                            type=\"{{ visible ? 'password' : 'text' }}\"\r\n                            autocomplete=\"off\"\r\n                            maxlength=\"6\"\r\n                            pattern=\"^([0-9]{6,6})$\"\r\n                            placeholder=\"none\"\r\n                            inputRestrict=\"unsignedInteger\"\r\n                            class=\"form-input otp-spc\"\r\n                            #checkAnswer1\r\n                            autocomplete=\"off\"\r\n                            #answer1=\"ngModel\"\r\n                            [(ngModel)]=\"user.answer1\"\r\n                            name=\"answer1\"\r\n                            id=\"answer1\"\r\n                            required\r\n                            appBlockCopyPaste\r\n                            />\r\n                            <label for=\"answer1\" class=\"form-label\"\r\n                              >Enter 6 Digit OTP</label\r\n                              >\r\n                              <div class=\"p-viewer\">\r\n                                <button\r\n                                  type=\"button\"\r\n                                  class=\"btn eye-btn\"\r\n                                  (click)=\"visible = !visible\"\r\n                                  >\r\n                                  @if (visible) {\r\n                                    <i class=\"fa icon-eye\"></i>\r\n                                  }\r\n                                  @if (!visible) {\r\n                                    <i class=\"fa icon-eye-slash\"></i>\r\n                                  }\r\n                                </button>\r\n                              </div>\r\n                              @if (answer1.errors?.required && answer1.dirty) {\r\n                                <p\r\n                                  class=\"animate error\"\r\n                                  >\r\n                                  OTP is required.\r\n                                </p>\r\n                              }\r\n                              @if (\r\n                                answer1.errors?.pattern &&\r\n                                answer1.dirty &&\r\n                                user.answer1 &&\r\n                                user.answer1.trim().length < 6\r\n                                ) {\r\n                                <p\r\n                                  class=\"animate error\"\r\n                                  >\r\n                                  Enter Valid Otp\r\n                                </p>\r\n                              }\r\n                            </div>\r\n                            <div class=\"form-control2 text-center submit-btn-wrapper\">\r\n                              <button\r\n                                type=\"submit\"\r\n                                id=\"validate-submit\"\r\n                                class=\"btn btn-gradient\"\r\n                                [disabled]=\"!twoFAForm.form.valid || shared.isServiceHit\"\r\n                                >\r\n                                Verify\r\n                              </button>\r\n                            </div>\r\n                            <div class=\"dont-have\">\r\n                              @if (!resendOTP) {\r\n                                <p class=\"text-center opt-timer\">\r\n                                  Resend OTP in\r\n                                  <span class=\"timer-sec\">{{ timer }} secs</span>\r\n                                </p>\r\n                              }\r\n                            </div>\r\n                            @if (resendOTP) {\r\n                              <div\r\n                                class=\"dont-have alt-section text-center\"\r\n                                >\r\n                                <p class=\"otp-via-sms\">\r\n                                  Didn’t not received OTP?\r\n                                  <span\r\n                                    type=\"button\"\r\n                                    class=\"btn btn-clear\"\r\n                                    (click)=\"resendForgotPassword(true)\"\r\n                                    >Request again</span\r\n                                    >\r\n                                  </p>\r\n                                </div>\r\n                              }\r\n                              <!-- <div\r\n                              class=\"col-sm-12 padding-0 alt-section text-center\"\r\n                              *ngIf=\"resendOTP\"\r\n                              ><p class=\"otp-via-call\">\r\n                              Or,\r\n                              <span\r\n                                type=\"button\"\r\n                                class=\"btn btn-clear\"\r\n                                (click)=\"resendOtp(true)\"\r\n                                >Get via Call</span\r\n                                >\r\n                              </p>\r\n                            </div> -->\r\n                          </form>\r\n                        }\r\n                        @if (shared?.params?.fromForgotPwd && !otpVerified) {\r\n                          <p\r\n                            class=\"otp-alert\"\r\n                            hidden\r\n                            >\r\n                            OTP is sent to your registered mobile number and email address.\r\n                            This is mandatory as per the latest exchange compliance\r\n                          </p>\r\n                        }\r\n                      </div>\r\n                    </div>\r\n                    @if (shared?.params?.fromForgotPwd && pwdResetSuccess) {\r\n                      <div\r\n                        class=\"login-card login-card-sso\"\r\n                        >\r\n                        <div class=\"form-wrap\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                              <div class=\"password-success\">\r\n                                <img\r\n                                  src=\"assets/images/finx-icons/check-success.gif\"\r\n                                  alt=\"\"\r\n                                  class=\"gif-check\"\r\n                                  />\r\n                                </div>\r\n                                <div class=\"pwd-success-content card-header-content\">\r\n                                  <h5>Password Reset Successfully!</h5>\r\n                                  <p>\r\n                                    Your password has been successfully reset.<br />Click below\r\n                                    to login again.\r\n                                  </p>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"col-md-12\">\r\n                                <button\r\n                                  type=\"button\"\r\n                                  class=\"btn btn-gradient\"\r\n                                  (click)=\"navigatetoLogin()\"\r\n                                  >\r\n                                  Login\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      }\r\n                      <div class=\"login-footer-fixed\">\r\n                        <div class=\"container\">\r\n                          <div class=\"footer-items\">\r\n                            <div class=\"security-sec\">\r\n                              <button type=\"button\" class=\"btn-security\">\r\n                                <svg\r\n                                  width=\"9\"\r\n                                  height=\"10\"\r\n                                  viewBox=\"0 0 9 10\"\r\n                                  fill=\"none\"\r\n                                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                                  >\r\n                                  <path\r\n                                    id=\"Vector\"\r\n                                    fill-rule=\"evenodd\"\r\n                                    clip-rule=\"evenodd\"\r\n                                    d=\"M1.55556 4.22222V2.88889C1.55556 2.12271 1.85992 1.38791 2.40169 0.846138C2.94346 0.304364 3.67827 0 4.44444 0C5.21062 0 5.94542 0.304364 6.4872 0.846138C7.02898 1.38791 7.33333 2.12271 7.33333 2.88889V4.22222H7.55556C8.29196 4.22222 8.88889 4.81916 8.88889 5.55556V8.66667C8.88889 9.40307 8.29196 10 7.55556 10H1.33333C0.596956 10 0 9.40307 0 8.66667V5.55556C0 4.81916 0.596956 4.22222 1.33333 4.22222H1.55556ZM3.3445 1.78895C3.63622 1.49722 4.03187 1.33333 4.44444 1.33333C4.85702 1.33333 5.25267 1.49722 5.5444 1.78895C5.83613 2.08067 6 2.47633 6 2.88889V4.22222H2.88889V2.88889C2.88889 2.47633 3.05278 2.08067 3.3445 1.78895Z\"\r\n                                    fill=\"#666666\"\r\n                                    />\r\n                                  </svg>\r\n                                  <span>Security Tip</span>\r\n                                </button>\r\n                                <p>\r\n                                  Never share your PIN, OTP, or password with anyone. Choice\r\n                                  will never request such details from you.\r\n                                </p>\r\n                              </div>\r\n                              <div class=\"login-footer\">\r\n                                <ul>\r\n                                  <li>\r\n                                    <a routerLink=\"/links/terms-use\" target=\"_blank\">Term of Use</a>\r\n                                  </li>\r\n                                  <li>\r\n                                    <a routerLink=\"/links/privacy-policy\" target=\"_blank\"\r\n                                      >Privacy Policy</a\r\n                                      >\r\n                                    </li>\r\n                                    <li>\r\n                                      <a routerLink=\"/links/disclaimer\" target=\"_blank\">Disclaimer</a>\r\n                                    </li>\r\n                                    <li>\r\n                                      <a routerLink=\"/links/beta-terms-and-conditions\" target=\"_blank\"\r\n                                        >Beta T&C</a\r\n                                        >\r\n                                      </li>\r\n                                      <li><a routerLink=\"/links/support\" target=\"_blank\">Support</a></li>\r\n                                    </ul>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                            <!-- <div class=\"security-sec\">\r\n                            <button type=\"button\" class=\"btn-security\">\r\n                              <svg\r\n                                width=\"9\"\r\n                                height=\"10\"\r\n                                viewBox=\"0 0 9 10\"\r\n                                fill=\"none\"\r\n                                xmlns=\"http://www.w3.org/2000/svg\"\r\n                                >\r\n                                <path\r\n                                  id=\"Vector\"\r\n                                  fill-rule=\"evenodd\"\r\n                                  clip-rule=\"evenodd\"\r\n                                  d=\"M1.55556 4.22222V2.88889C1.55556 2.12271 1.85992 1.38791 2.40169 0.846138C2.94346 0.304364 3.67827 0 4.44444 0C5.21062 0 5.94542 0.304364 6.4872 0.846138C7.02898 1.38791 7.33333 2.12271 7.33333 2.88889V4.22222H7.55556C8.29196 4.22222 8.88889 4.81916 8.88889 5.55556V8.66667C8.88889 9.40307 8.29196 10 7.55556 10H1.33333C0.596956 10 0 9.40307 0 8.66667V5.55556C0 4.81916 0.596956 4.22222 1.33333 4.22222H1.55556ZM3.3445 1.78895C3.63622 1.49722 4.03187 1.33333 4.44444 1.33333C4.85702 1.33333 5.25267 1.49722 5.5444 1.78895C5.83613 2.08067 6 2.47633 6 2.88889V4.22222H2.88889V2.88889C2.88889 2.47633 3.05278 2.08067 3.3445 1.78895Z\"\r\n                                  fill=\"#666666\"\r\n                                  />\r\n                                </svg>\r\n                                <span>Security Tip</span>\r\n                              </button>\r\n                              <p>\r\n                                Never share your PIN, OTP, or password with anyone. Choice will\r\n                                never request such details from you.\r\n                              </p>\r\n                            </div>\r\n                            <div class=\"login-footer\">\r\n                              <ul>\r\n                                <li>Term of Use</li>\r\n                                <li>Privacy Policy</li>\r\n                                <li>Disclaimer</li>\r\n                                <li>Beta T&C</li>\r\n                                <li>Support</li>\r\n                              </ul>\r\n                            </div> -->\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n";

/***/ }),

/***/ 28582:
/*!*******************************************************************!*\
  !*** ./src/app/auth-module/error/error.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"sso-login-wrapper\">\r\n  <div class=\"sso-new-header\"> <!-- New Header-->\r\n    <div class=\"container\">\r\n        <div class=\"flx-header\">\r\n          <div class=\"logo-n\">\r\n              <div class=\"logo-img\">\r\n                <a\r\n                  class=\"finx-logo\"\r\n                  title=\"Home\"\r\n                  \r\n                    >\r\n                    <img\r\n                    src=\"../assets/images/logo-choice.svg\"\r\n                    alt=\"Choice\"\r\n                    class=\"img-logo\" width=\"167\" height=\"40\"\r\n                  />\r\n              </a>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"faq-lnk\">\r\n              <a\r\n                href=\"https://choicebroking.freshdesk.com/support/home\"\r\n                target=\"_blank\"\r\n              >\r\n                <span\r\n                  >FAQ <img src=\"../../assets/images/finx-icons/faq-icon.svg\" alt=\"\"\r\n                /></span>\r\n              </a>\r\n          </div>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container\">\r\n    <div class=\"wrap-inner wrap-inner-error\"> <!-- Error Page Cont-->\r\n      <div class=\"cont-lft\">\r\n          <div class=\"error-cont\">\r\n              <h3>404</h3>\r\n              <h4>Somethings gone missing...</h4>\r\n              <div class=\"btn-list\">\r\n                  <a href=\"#\" class=\"btn-bg\">Go Home</a>\r\n                  <a href=\"#\" class=\"btn-bg bg-none\">Contact Support</a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"cont-rights cont-rights-error\">\r\n        <img\r\n            src=\"../assets/images/error-img.svg\"\r\n            alt\r\n            class=\"img-responsive\" width=\"365\" height=\"325\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }),

/***/ 36954:
/*!***************************************************************************************!*\
  !*** ./src/app/auth-module/forgot-password/forgot-password.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"login-section\">\r\n  <div class=\"sso-new-header\">  <!-- SSO New Header-->\r\n    <div class=\"container\">\r\n      <div class=\"flx-header\">\r\n        <div class=\"logo-n\">\r\n          <div class=\"logo-img\">\r\n            <a\r\n              class=\"finx-logo\"\r\n              title=\"Home\"\r\n\r\n              >\r\n\r\n              <img\r\n                src=\"assets/images/finx-icons/logo-choice.svg\"\r\n                alt=\"Choice FinX - Online Trading Platform\"\r\n                class=\"img-logo logo-blur\" width=\"167\" height=\"40\"\r\n                />\r\n              </a>\r\n            </div>\r\n            <div class=\"logo-img\">\r\n              <img\r\n                src=\"assets/images/finx-icons/finx-login-logo.svg\"\r\n                alt=\"Choice\"\r\n                class=\"img-logo\" width=\"167\" height=\"40\"\r\n                />\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"faq-lnk\">\r\n              <a\r\n                href=\"https://choicebroking.freshdesk.com/support/home\"\r\n                target=\"_blank\"\r\n                >\r\n                <span\r\n                  >FAQ <img src=\"assets/images/finx-icons/faq-icon.svg\" alt=\"\" width=\"16\" height=\"16\"\r\n                /></span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"container\">\r\n        <div class=\"login-body\">\r\n          <div class=\"left-sec\">\r\n            <div class=\"login-captions\">\r\n              <div class=\"text-slick-slider\">\r\n                <div class=\"text-slider-items\">\r\n                  <div class=\"change\">\r\n                    <div class=\"slick-items\">\r\n                      <h3>Trading</h3>\r\n                      <img\r\n                        src=\"assets/images/finx-icons/trading.svg\"\r\n                        alt=\"\"\r\n                        class=\"img-responsive\" width=\"61\" height=\"48\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"change\">\r\n                      <div class=\"slick-items\">\r\n                        <h3>Mutual Funds</h3>\r\n                        <img\r\n                          src=\"assets/images/finx-icons/mutual-funds.svg\"\r\n                          alt=\"\"\r\n                          class=\"img-responsive\" width=\"61\" height=\"48\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"change\">\r\n                        <div class=\"slick-items\">\r\n                          <h3>Insurance</h3>\r\n                          <img\r\n                            src=\"assets/images/finx-icons/insurance.svg\"\r\n                            alt=\"Insurance\"\r\n                            class=\"img-responsive\" width=\"61\" height=\"48\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"change\">\r\n                          <div class=\"slick-items\">\r\n                            <h3>Secured Products</h3>\r\n                            <img\r\n                              src=\"assets/images/finx-icons/secured-products.svg\"\r\n                              alt=\"\"\r\n                              class=\"img-responsive\" width=\"61\" height=\"48\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h3 class=\"title-details\">Explore all in one place</h3>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"right-sec\">\r\n                    <div class=\"login-card login-card-sso\">\r\n                      <div class=\"form-wrap\">\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-12\">\r\n                            <!-- <div class=\"icon-center\">\r\n                            <img src=\"assets/images/finx-icons/logo-icon.svg\" alt=\"\" >\r\n                          </div> -->\r\n                          <div class=\"card-header-content\">\r\n                            <h5>Forgot Password</h5>\r\n                            @if (!isPan) {\r\n                              <p>\r\n                                Enter your Client ID to reset your password\r\n                              </p>\r\n                            }\r\n                            @if (isPan) {\r\n                              <p>Enter your PAN to reset your password</p>\r\n                            }\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <form\r\n                        name=\"forgotForm\"\r\n                        (ngSubmit)=\"resetPassword(forgotForm)\"\r\n                        #forgotForm=\"ngForm\"\r\n                        >\r\n\r\n                        <div class=\"form-control2\">\r\n                          <!-- <span class=\"input-group-addon\">\r\n                          <i class=\"icon-name\" aria-hidden=\"true\"></i>\r\n                        </span> -->\r\n                        @if (!isPan) {\r\n                          <input\r\n                            type=\"text\"\r\n                            autofocus\r\n                            class=\"form-input text-uppercase\"\r\n                            #clientId=\"ngModel\"\r\n                            [(ngModel)]=\"forgot.clientId\"\r\n                            inputRestrict=\"alphanumeric\"\r\n                            maxlength=\"20\"\r\n                            placeholder=\"none\"\r\n                            name=\"clientId\"\r\n                            required\r\n                            />\r\n                        }\r\n                        @if (!isPan) {\r\n                          <label for=\"clientId\" class=\"form-label\"\r\n                            >Client ID</label\r\n                            >\r\n                          }\r\n\r\n                          @if (isPan) {\r\n                            <input\r\n                              type=\"text\"\r\n                              class=\"form-input text-uppercase\"\r\n                              [(ngModel)]=\"forgot.pancard\"\r\n                              placeholder=\"none\"\r\n                              #pancard=\"ngModel\"\r\n                              pattern=\"^[a-zA-Z]{3}[pP]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$\"\r\n                              name=\"pancard\"\r\n                              inputRestrict=\"alphanumeric\"\r\n                              maxlength=\"10\"\r\n                              required\r\n                              />\r\n                          }\r\n                          @if (isPan) {\r\n                            <label for=\"pancard\" class=\"form-label\"\r\n                              >PAN Number</label\r\n                              >\r\n                            }\r\n                            @if (\r\n                              !isPan &&\r\n                              forgotForm?.form?.controls?.clientId?.dirty &&\r\n                              !forgotForm?.form?.controls?.clientId?.value\r\n                              ) {\r\n                              <p\r\n                                class=\"animate error\"\r\n                                >\r\n                                Client Id is required.\r\n                              </p>\r\n                            }\r\n                            @if (\r\n                              isPan &&\r\n                              forgotForm?.form?.controls?.pancard?.dirty &&\r\n                              !forgotForm?.form?.controls?.pancard?.value\r\n                              ) {\r\n                              <p\r\n                                class=\"animate error\"\r\n                                >\r\n                                PAN Card is required.\r\n                              </p>\r\n                            }\r\n                            @if (\r\n                              isPan &&\r\n                              forgotForm?.form?.controls?.pancard?.dirty &&\r\n                              forgotForm?.form?.controls?.pancard?.value &&\r\n                              forgotForm?.form?.controls?.pancard?.invalid\r\n                              ) {\r\n                              <p\r\n                                class=\"animate error\"\r\n                                >\r\n                                PAN Card is not valid.\r\n                              </p>\r\n                            }\r\n                          </div>\r\n                          <div class=\"form-control2 text-center\">\r\n                            <button\r\n                              type=\"submit\"\r\n                              class=\"btn btn-gradient\"\r\n                    [disabled]=\"\r\n                      (!forgot.clientId && !forgot.pancard) ||\r\n                      forgotPwdRequest ||\r\n                      (isPan &&\r\n                        forgotForm?.form?.controls?.pancard?.dirty &&\r\n                        forgotForm?.form?.controls?.pancard?.invalid)\r\n                    \"\r\n                              >\r\n                              Submit\r\n                            </button>\r\n                          </div>\r\n                          <div>\r\n                            <div class=\"dont-have\">\r\n                              <p>\r\n                                @if (!isPan) {\r\n                                  <a\r\n                                    href=\"javascript:void(0)\"\r\n                                    (click)=\"toggleForm()\"\r\n                                    >Don’t remember Client ID?</a\r\n                                    >\r\n                                  }\r\n                                </p>\r\n                                <p>\r\n                                  @if (isPan) {\r\n                                    <a\r\n                                      href=\"javascript:void(0)\"\r\n                                      (click)=\"toggleForm()\"\r\n                                      >Don’t have PAN?</a\r\n                                      >\r\n                                    }\r\n                                  </p>\r\n                                </div>\r\n                              </div>\r\n                            </form>\r\n                          </div>\r\n                        </div>\r\n                        <!-- <div class=\"login-card\" hidden>\r\n                        <div class=\"form-wrap\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                              <div class=\"icon-center\">\r\n                                <img src=\"assets/images/finx-icons/logo-icon.svg\" alt=\"\" />\r\n                              </div>\r\n                              <div class=\"card-header-content\">\r\n                                <h5>Forgot Password</h5>\r\n                                <p>Enter your PAN to reset your password</p>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                          <form>\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-12 mb-48\">\r\n                                <div class=\"form-control2\">\r\n                                  <input\r\n                                    type=\"text\"\r\n                                    class=\"form-input text-uppercase\"\r\n                                    [(ngModel)]=\"forgot.pancard\"\r\n                                    placeholder=\"none\"\r\n                                    #pancard=\"ngModel\"\r\n                                    pattern=\"^[a-zA-Z]{3}[pP]{1}[a-zA-Z]{1}[0-9]{4}[a-zA-Z]{1}$\"\r\n                                    name=\"pancard\"\r\n                                    inputRestrict=\"alphanumeric\"\r\n                                    maxlength=\"10\"\r\n                                    />\r\n                                    <label for=\"pancard\" class=\"form-label\">PAN Number</label>\r\n                                  </div>\r\n                                  <div class=\"mrg-bottom\">\r\n                                    <p class=\"animate error\" *ngIf=\"pancard.invalid\">\r\n                                      PAN Card is not valid.\r\n                                    </p>\r\n                                  </div>\r\n                                </div>\r\n                                <div class=\"col-sm-12 text-center\">\r\n                                  <button\r\n                                    type=\"submit\"\r\n                                    (click)=\"checkLogin()\"\r\n                                    class=\"col-sm-12 btn btn-gradient\"\r\n                    [disabled]=\"\r\n                      (!forgot.clientId && !forgot.pancard) || forgotPwdRequest\r\n                    \"\r\n                                    >\r\n                                    Submit\r\n                                  </button>\r\n                                </div>\r\n                                <div class=\"col-md-12\">\r\n                                  <div class=\"dont-have\">\r\n                                    <p><a href=\"\">Don’t have PAN?</a></p>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </form>\r\n                          </div>\r\n                        </div> -->\r\n                        <div class=\"login-footer-fixed\">\r\n                          <div class=\"container\">\r\n                            <div class=\"footer-items\">\r\n                              <div class=\"security-sec\">\r\n                                <button type=\"button\" class=\"btn-security\">\r\n                                  <svg\r\n                                    width=\"9\"\r\n                                    height=\"10\"\r\n                                    viewBox=\"0 0 9 10\"\r\n                                    fill=\"none\"\r\n                                    xmlns=\"http://www.w3.org/2000/svg\"\r\n                                    >\r\n                                    <path\r\n                                      id=\"Vector\"\r\n                                      fill-rule=\"evenodd\"\r\n                                      clip-rule=\"evenodd\"\r\n                                      d=\"M1.55556 4.22222V2.88889C1.55556 2.12271 1.85992 1.38791 2.40169 0.846138C2.94346 0.304364 3.67827 0 4.44444 0C5.21062 0 5.94542 0.304364 6.4872 0.846138C7.02898 1.38791 7.33333 2.12271 7.33333 2.88889V4.22222H7.55556C8.29196 4.22222 8.88889 4.81916 8.88889 5.55556V8.66667C8.88889 9.40307 8.29196 10 7.55556 10H1.33333C0.596956 10 0 9.40307 0 8.66667V5.55556C0 4.81916 0.596956 4.22222 1.33333 4.22222H1.55556ZM3.3445 1.78895C3.63622 1.49722 4.03187 1.33333 4.44444 1.33333C4.85702 1.33333 5.25267 1.49722 5.5444 1.78895C5.83613 2.08067 6 2.47633 6 2.88889V4.22222H2.88889V2.88889C2.88889 2.47633 3.05278 2.08067 3.3445 1.78895Z\"\r\n                                      fill=\"#666666\"\r\n                                      />\r\n                                    </svg>\r\n                                    <span>Security Tip</span>\r\n                                  </button>\r\n                                  <p>\r\n                                    Never share your PIN, OTP, or password with anyone. Choice\r\n                                    will never request such details from you.\r\n                                  </p>\r\n                                </div>\r\n                                <div class=\"login-footer\">\r\n                                  <ul>\r\n                                    <li>\r\n                                      <a routerLink=\"/links/terms-use\" target=\"_blank\">Term of Use</a>\r\n                                    </li>\r\n                                    <li>\r\n                                      <a routerLink=\"/links/privacy-policy\" target=\"_blank\"\r\n                                        >Privacy Policy</a\r\n                                        >\r\n                                      </li>\r\n                                      <li>\r\n                                        <a routerLink=\"/links/disclaimer\" target=\"_blank\">Disclaimer</a>\r\n                                      </li>\r\n                                      <li>\r\n                                        <a routerLink=\"/links/beta-terms-and-conditions\" target=\"_blank\"\r\n                                          >Beta T&C</a\r\n                                          >\r\n                                        </li>\r\n                                        <li><a routerLink=\"/links/support\" target=\"_blank\">Support</a></li>\r\n                                      </ul>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      @if (customError?.inActive || customError?.isSuspended) {\r\n                        <div class=\"dialog\">\r\n                          <div class=\"dialog-content\">\r\n                            <div class=\"dialog-header clearfix \">\r\n                              <div class=\"col-md-12\">\r\n                                <h4 class=\"popup-title\">{{customError?.title}} </h4>\r\n                              </div>\r\n                            </div>\r\n                            <div class=\"dialog-section\">\r\n                              <p>{{customError?.msg}}</p>\r\n                            </div>\r\n                            <div class=\"dialog-footer clearfix\">\r\n                              @if (!customError.navigateToSupport) {\r\n                                <button class=\"btn sell\" (click)=\"navigateToModificationFlow()\">Proceed</button>\r\n                              }\r\n                              @if (customError.navigateToSupport) {\r\n                                <button class=\"btn sell\" (click)=\"navigateToSupport()\">Contact Support</button>\r\n                              }\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      }\r\n";

/***/ }),

/***/ 69334:
/*!*******************************************************************!*\
  !*** ./src/app/auth-module/login/login.component.html?ngResource ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@if (showVerionMessage && showUpdate) {\r\n  <div class=\"browser-note\"  [ngStyle]=\"{opacity: hidePage?0:1}\">\r\n    <div class=\"container\">\r\n      <div class=\"flex-sec\">\r\n        <svg\r\n          width=\"20\"\r\n          height=\"20\"\r\n          viewBox=\"0 0 20 20\"\r\n          fill=\"none\"\r\n          xmlns=\"http://www.w3.org/2000/svg\"\r\n          >\r\n          <path\r\n            d=\"M10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 -3.91654e-07 10 -8.74228e-07C4.48 -1.3568e-06 1.3568e-06 4.48 8.74228e-07 10C3.91654e-07 15.52 4.48 20 10 20ZM10 5C10.55 5 11 5.45 11 6L11 10C11 10.55 10.55 11 10 11C9.45 11 9 10.55 9 10L9 6C9 5.45 9.45 5 10 5ZM9 13L11 13L11 15L9 15L9 13Z\"\r\n            fill=\"#FAB219\"\r\n            />\r\n          </svg>\r\n          <span class=\"txt\"\r\n            >Use the latest version of the browser for best user experience.</span\r\n            >\r\n            <!-- <a  class=\"note-btn\"  (click)=\"updateChrome()\">Update</a> -->\r\n            <span class=\"note-close-btn\" (click)=\"showVerionMessage = false\">\r\n              <svg\r\n                xmlns=\"http://www.w3.org/2000/svg\"\r\n                width=\"14\"\r\n                height=\"14\"\r\n                viewBox=\"0 0 14 14\"\r\n                (click)=\"showVerionMessage = false\"\r\n                >\r\n                <path\r\n                  id=\"Path_1\"\r\n                  data-name=\"Path 1\"\r\n                  d=\"M19,6.41,17.59,5,12,10.59,6.41,5,5,6.41,10.59,12,5,17.59,6.41,19,12,13.41,17.59,19,19,17.59,13.41,12Z\"\r\n                  transform=\"translate(-5 -5)\"\r\n                  fill=\"rgba(0,0,0,0.7)\"\r\n                  />\r\n                </svg>\r\n              </span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      }\r\n\r\n      <div class=\"login-section\" [ngStyle]=\"{opacity: hidePage?0:1}\">\r\n\r\n\r\n\r\n        <div class=\"sso-new-header\">  <!-- SSO New Header-->\r\n          <div class=\"container\">\r\n            <div class=\"flx-header\">\r\n              <div class=\"logo-n\">\r\n                <div class=\"logo-img\">\r\n                  <a\r\n                    class=\"finx-logo\"\r\n                    title=\"Home\"\r\n\r\n                    >\r\n\r\n                    <img\r\n                      src=\"assets/images/finx-icons/logo-choice.svg\"\r\n                      alt=\"Choice FinX - Online Trading Platform\"\r\n                      class=\"img-logo \" width=\"167\" height=\"40\"\r\n                      />\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"logo-img\">\r\n                    <img\r\n                      src=\"assets/images/finx-icons/finx-login-logo.svg\"\r\n                      alt=\"Choice\"\r\n                      class=\"img-logo logo-blur\" width=\"167\" height=\"40\"\r\n                      />\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"faq-lnk\">\r\n                    <a\r\n                      href=\"https://choicebroking.freshdesk.com/support/home\"\r\n                      target=\"_blank\"\r\n                      >\r\n                      <span\r\n\r\n                        >FAQ <img src=\"assets/images/finx-icons/faq-icon.svg\" alt=\"\" width=\"16\" height=\"16\"\r\n                      /></span>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n            <div class=\"container\">\r\n\r\n              <div class=\"login-body\">\r\n\r\n                <div class=\"left-sec\">\r\n\r\n\r\n\r\n                  <div class=\"login-captions\">\r\n\r\n                    <div class=\"text-slick-slider\">\r\n\r\n                      <div class=\"text-slider-items\">\r\n\r\n                        <div class=\"change\">\r\n\r\n                          <div class=\"slick-items\">\r\n\r\n                            <h3>Trading</h3>\r\n\r\n                            <img\r\n\r\n                              src=\"assets/images/finx-icons/trading.svg\"\r\n\r\n                              alt=\"\"\r\n\r\n                              class=\"img-responsive\" width=\"61\" height=\"48\"\r\n\r\n                              />\r\n\r\n                            </div>\r\n\r\n                          </div>\r\n\r\n                          <div class=\"change\">\r\n\r\n                            <div class=\"slick-items\">\r\n\r\n                              <h3>Mutual Funds</h3>\r\n\r\n                              <img\r\n\r\n                                src=\"assets/images/finx-icons/mutual-funds.svg\"\r\n\r\n                                alt=\"\"\r\n\r\n                                class=\"img-responsive\" width=\"61\" height=\"48\"\r\n\r\n                                />\r\n\r\n                              </div>\r\n\r\n                            </div>\r\n\r\n                            <div class=\"change\">\r\n\r\n                              <div class=\"slick-items\">\r\n\r\n                                <h3>Insurance</h3>\r\n\r\n                                <img\r\n\r\n                                  src=\"assets/images/finx-icons/insurance.svg\"\r\n\r\n                                  alt=\"Insurance\"\r\n\r\n                                  class=\"img-responsive\" width=\"61\" height=\"48\"\r\n\r\n                                  />\r\n\r\n                                </div>\r\n\r\n                              </div>\r\n\r\n                              <div class=\"change\">\r\n\r\n                                <div class=\"slick-items\">\r\n\r\n                                  <h3>Secured Products</h3>\r\n\r\n                                  <img\r\n\r\n                                    src=\"assets/images/finx-icons/secured-products.svg\"\r\n\r\n                                    alt=\"\"\r\n\r\n                                    class=\"img-responsive\" width=\"61\" height=\"48\"\r\n\r\n                                    />\r\n\r\n                                  </div>\r\n\r\n                                </div>\r\n\r\n                              </div>\r\n\r\n                            </div>\r\n\r\n                            <h3 class=\"title-details\">Explore all in one place</h3>\r\n\r\n                          </div>\r\n\r\n                        </div>\r\n\r\n                        <div class=\"right-sec\" style=\"z-index: 9;\">\r\n                          <div  class=\"login-card login-card-sso\" id=\"skeleton-div\">\r\n                            <!--  <div  class=\"login-card skeleton\" id=\"skeleton-div\"> -->\r\n\r\n                            <!-- <div class=\"loader-wrap\" id=\"skeleton-div-loader\">\r\n                            <div class=\"loader-page\"><span class=\"loader-item\"></span><span class=\"loader-item\">\r\n\r\n                            </span><span class=\"loader-item\"></span><span class=\"loader-item\"></span><span class=\"loader-item\"></span><span class=\"loader-item\"></span><span class=\"loader-item\"></span><span class=\"loader-item\"></span><span class=\"loader-item\"></span><span class=\"loader-item\"></span></div>\r\n                          </div> -->\r\n                          <div class=\"loader-wrapper-div\" id=\"login-loader\" >\r\n                            <div class=\"circle\">\r\n                              <div class=\"circle-min\"></div>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-wrap\"  id=\"login-formwrap\"  [ngStyle]=\"{'display':(clientIdSwitch?'inline-block':'none'),'width':'100%'}\" >\r\n                            <!--  <div class=\"row\">\r\n\r\n                            <div class=\"col-md-12\">\r\n\r\n                              <div *ngIf=\"!userInfo\">\r\n\r\n                                <h5>Welcome Back!</h5>\r\n\r\n                                <p>We are so happy to have you back</p>\r\n\r\n                              </div>\r\n\r\n                              <div *ngIf=\"userInfo\">\r\n\r\n                                <div class=\"short-name-bg\" *ngIf=\"userInfo\">\r\n\r\n                                  <span class=\"short-name\">{{ userInfo?.initals }}</span>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"existing-user-content\">\r\n\r\n                                  <h5 class=\"user-name\">\r\n\r\n                                    Hi, {{ userInfo?.userName | titlecase }}\r\n\r\n                                  </h5>\r\n\r\n                                  <p>\r\n\r\n                                    {{ userInfo?.clientId }}\r\n\r\n                                    <a href=\"javascript:void(0)\" (click)=\"navigateToLogin()\"\r\n\r\n                                      >Switch Account</a\r\n\r\n                                      >\r\n\r\n                                    </p>\r\n\r\n                                  </div>\r\n\r\n                                </div>\r\n\r\n                              </div>\r\n\r\n                            </div> -->\r\n                            <div class=\"row\">\r\n                              <div class=\"col-md-12\">\r\n                                <h5 class=\"mb-0\">Welcome to Choice FinX</h5>\r\n                              </div>\r\n                              <div class=\"col-sm-12 text-center login-container d-flex\" >\r\n\r\n                                <a  id=\"link-to-sso\" href=\"\" class=\"btn btn-gradient\"  target=\"_self\" (click)=\"loginWithMobileNumber()\">Login</a>\r\n                                <a   class=\"btn btn-gradient btn-bordered\" (click)=\"registerNow()\">Register Now</a>\r\n                                <!--  <a   class=\"btn btn-gradient btn-bordered col-sm-12\"  (click)=\"clientIdSwitch=false; loginWithClientId()\">Login with Client ID</a> -->\r\n                                <!--    <iframe id=\"finx-sso\" name=\"finx-sso-name\" (load)=\"ifameLoad()\" src=\"assets/sso/sso-iframe.html\" *ngIf=\"shared?.isSSO\">\r\n\r\n\r\n                              </iframe> -->\r\n                            </div>\r\n                            <div class=\"col-sm-12 alt-section text-center\">\r\n\r\n                              <div class=\"dont-have dont-have-n\">\r\n\r\n                                @if (false) {\r\n                                  <p>\r\n                                    <span\r\n                                      class=\"btn-sign-up\"\r\n                                      >\r\n                                      <a (click)=\"clientIdSwitch=false; loginWithClientId()\">\r\n                                        Login With Client ID\r\n                                      </a>\r\n                                      </span\r\n                                      >\r\n                                    </p>\r\n                                  }\r\n\r\n                                  <!-- <button style=\"opacity: 0;\" id=\"invisible-click\"></button> -->\r\n\r\n                                </div>\r\n\r\n                              </div>\r\n                            </div>\r\n\r\n                            <!-- <div class=\"col-sm-12 text-center \" >\r\n                            <div style=\"    text-align: right;\" *ngIf=\"shared?.isSSO\"> </div>\r\n                          </div> -->\r\n                          <!--    <iframe id=\"finx-sso\" name=\"finx-sso-name\" (load)=\"ifameLoad()\" src=\"assets/sso/sso-iframe.html\" *ngIf=\"shared?.isSSO\">\r\n\r\n\r\n                        </iframe> -->\r\n                      </div>\r\n\r\n                      <!--  <div class=\"col-sm-12 alt-section text-center\">\r\n\r\n                      <div class=\"dont-have\">\r\n\r\n                        <p>\r\n\r\n                          Don't have an account?\r\n\r\n                          <span\r\n\r\n                            class=\"btn-sign-up\"\r\n\r\n                            (click)=\"navigateToFreeAccountSignup('sign_up')\"\r\n\r\n                            [attr.disabled]=\"shared.isServiceHit || null\"\r\n\r\n                            >Sign Up</span\r\n\r\n                            >\r\n\r\n                          </p>\r\n\r\n                        </div>\r\n\r\n                      </div> -->\r\n                      <div class=\"form-wrap\"  [ngStyle]=\"{'display':(!clientIdSwitch?'':'none')}\">\r\n\r\n                        <div class=\"row\">\r\n\r\n                          <div class=\"col-md-12\">\r\n\r\n                            @if (!userInfo) {\r\n                              <div>\r\n                                <h5>Welcome Back!</h5>\r\n                                <p>We are so happy to have you back</p>\r\n                              </div>\r\n                            }\r\n\r\n                            @if (userInfo) {\r\n                              <div>\r\n                                @if (userInfo) {\r\n                                  <div class=\"short-name-bg\">\r\n                                    <span class=\"short-name\">{{ userInfo?.initals }}</span>\r\n                                  </div>\r\n                                }\r\n                                <div class=\"existing-user-content\">\r\n                                  <h5 class=\"user-name\">\r\n                                    Hi, {{ userInfo?.userName | titlecase }}\r\n                                  </h5>\r\n                                  <p>\r\n                                    {{ userInfo?.clientId }}\r\n                                    <a href=\"javascript:void(0)\" (click)=\"navigateToLogin()\"\r\n                                      >Switch Account</a\r\n                                      >\r\n                                    </p>\r\n                                  </div>\r\n                                </div>\r\n                              }\r\n\r\n                            </div>\r\n\r\n                          </div>\r\n\r\n                          <form [formGroup]=\"userForm\">\r\n\r\n\r\n                            @if (!userInfo) {\r\n                              <div class=\"form-control2\">\r\n                                <!-- <span class=\"input-group-addon\">\r\n                                <i class=\"icon-name\" aria-hidden=\"true\"></i>\r\n                              </span> -->\r\n                              <input\r\n                                type=\"text\"\r\n                                autofocus\r\n                                class=\"form-input text-uppercase\"\r\n                                autocomplete=\"off\"\r\n                                inputRestrict=\"alphanumeric\"\r\n                                id=\"clientId\"\r\n                                formControlName=\"clientId\"\r\n                                placeholder=\"none\"\r\n                                name=\"clientId\"\r\n                                maxlength=\"20\"\r\n                                />\r\n                                <label for=\"clientId\" class=\"form-label\">Client ID</label>\r\n                                @if (\r\n                                  userForm?.controls?.clientId?.invalid &&\r\n                                  userForm?.controls?.clientId?.dirty\r\n                                  ) {\r\n                                  <p\r\n                                    class=\"animate error\"\r\n                                    >\r\n                                    Client ID is required.\r\n                                  </p>\r\n                                }\r\n                              </div>\r\n                            }\r\n\r\n                            <!-- <label for=\"clientId\">Client ID</label>\r\n\r\n                            <input type=\"text\" autofocus class=\"form-control text-uppercase\" autocomplete=\"off\" #clientId=\"ngModel\" [(ngModel)]=\"user.clientId\" id=\"clientId\" name=\"clientId\" required> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                            <div class=\"form-control2 form_password\">\r\n\r\n                              <!-- <span class=\"input-group-addon\">\r\n\r\n                              <i class=\"icon-lock\" aria-hidden=\"true\"></i>\r\n\r\n                            </span> -->\r\n\r\n                            <input\r\n\r\n                              type=\"{{ visible ? 'text' : 'password' }}\"\r\n\r\n                              formControlName=\"password\"\r\n\r\n                              placeholder=\"none\"\r\n\r\n                              minlength=\"6\"\r\n\r\n                              maxlength=\"12\"\r\n\r\n                              autocomplete=\"off\"\r\n\r\n                              class=\"form-input\"\r\n\r\n                              id=\"password\"\r\n\r\n                              name=\"password\"\r\n\r\n                              pattern=\"^(?=.*?[A-z])(?=.*[0-9])[A-Za-z0-9!@#$%^&*]+$\"\r\n\r\n                              />\r\n\r\n                              <label for=\"password\" class=\"form-label\">Password</label>\r\n\r\n                              <div class=\"p-viewer\">\r\n\r\n                                <button\r\n\r\n                                  type=\"button\"\r\n\r\n                                  class=\"btn eye-btn\"\r\n\r\n                                  (click)=\"visible = !visible\"\r\n\r\n                                  aria-label=\"visible btn\"\r\n\r\n                                  >\r\n\r\n                                  @if (visible) {\r\n                                    <i class=\"fa icon-eye\"></i>\r\n                                  }\r\n\r\n                                  @if (!visible) {\r\n                                    <i class=\"fa icon-eye-slash\"></i>\r\n                                  }\r\n\r\n                                </button>\r\n\r\n                              </div>\r\n\r\n                              @if (\r\n                                userForm?.controls?.password?.invalid &&\r\n                                userForm?.controls?.password?.dirty &&\r\n                                userForm?.controls?.password?.errors.required\r\n                                ) {\r\n                                <p\r\n                                  class=\"animate error\"\r\n                                  >\r\n                                  Password is Required.\r\n                                </p>\r\n                              }\r\n\r\n                              @if (\r\n                                userForm?.controls?.password?.dirty &&\r\n                                userForm?.controls?.password?.invalid &&\r\n                                userForm?.controls?.password?.value &&\r\n                                (userForm?.controls?.password?.errors?.minlength ||\r\n                                userForm?.controls?.password?.errors?.maxlength ||\r\n                                userForm?.controls?.password?.errors?.pattern)\r\n                                ) {\r\n                                <p\r\n                                  class=\"animate error\"\r\n                                  >\r\n                                  Invalid Password\r\n                                </p>\r\n                              }\r\n\r\n                            </div>\r\n\r\n\r\n\r\n                            <!--                     <p class=\"animate error\" *ngIf=\"userForm?.controls?.password?.dirty && userForm?.controls?.password?.invalid && user.password && userForm?.controls?.password?.errors?.pattern \">Invalid Password</p> -->\r\n                   <div style=\"    display: flex;\r\n                   /* font-size: 10px !important; */\r\n                   /* align-content: space-between; */\r\n                   /* flex-wrap: wrap; */\r\n                   justify-content: space-between;\">\r\n                              <!--   <div class=\"text-left\"> <a id=\"link-to-sso2\" class=\"btn btn-clear mb0\" style=\"font-size: 12px;\" (click)=\"clientIdSwitch=true\">Back to Login menu</a></div> -->\r\n                              <div class=\"text-right\">\r\n\r\n                    <span [ngStyle]=\"{'margin-top': (userForm?.controls?.password?.dirty &&\r\n\r\n                      userForm?.controls?.password?.invalid ? '1.5rem' : '0') }\"\r\n\r\n                                  class=\"btn btn-clear mb0\"\r\n                                  style=\"font-size: 12px;\"\r\n                                  (click)=\"navigateToForgotPassword()\"\r\n\r\n                                  [attr.disabled]=\"shared.isServiceHit || null\"\r\n\r\n                                  >Forgot Password?</span\r\n\r\n                                  >\r\n\r\n                                </div>\r\n                              </div>\r\n\r\n                              <div class=\"form-control2 text-center\">\r\n\r\n                                <button\r\n\r\n                                  type=\"submit\"\r\n\r\n                                  (click)=\"checkLogin()\"\r\n\r\n                                  class=\"btn btn-gradient\"\r\n\r\n                                  [disabled]=\"shared.isServiceHit || userForm?.invalid\"\r\n\r\n                                  >\r\n\r\n                                  Continue\r\n\r\n                                </button>\r\n\r\n                              </div>\r\n\r\n                              <div class=\"alt-section text-center\">\r\n\r\n                                <div class=\"dont-have\">\r\n\r\n                                  <p>\r\n\r\n                                    Don't have an account?\r\n\r\n                                    <span\r\n\r\n                                      class=\"btn-sign-up\"\r\n\r\n                                      (click)=\"navigateToFreeAccountSignup('sign_up')\"\r\n\r\n                                      [attr.disabled]=\"shared.isServiceHit || null\"\r\n\r\n                                      >Sign Up</span\r\n\r\n                                      >\r\n\r\n                                    </p>\r\n\r\n                                    <!-- <button style=\"opacity: 0;\" id=\"invisible-click\"></button> -->\r\n\r\n                                  </div>\r\n\r\n                                </div>\r\n\r\n                                <!--  <pre>{{userForm?.controls?.clientId?.errors|json}}</pre>\r\n\r\n                                <pre>{{userForm?.controls?.password?.errors|json}}</pre> -->\r\n\r\n\r\n\r\n                              </form>\r\n\r\n                            </div>\r\n\r\n                          </div>\r\n\r\n\r\n                          <!-- <div class=\"security-sec\">\r\n\r\n                          <button type=\"button\" class=\"btn-security\">\r\n\r\n                            <svg\r\n\r\n                              width=\"9\"\r\n\r\n                              height=\"10\"\r\n\r\n                              viewBox=\"0 0 9 10\"\r\n\r\n                              fill=\"none\"\r\n\r\n                              xmlns=\"http://www.w3.org/2000/svg\"\r\n\r\n                              >\r\n\r\n                              <path\r\n\r\n                                id=\"Vector\"\r\n\r\n                                fill-rule=\"evenodd\"\r\n\r\n                                clip-rule=\"evenodd\"\r\n\r\n                                d=\"M1.55556 4.22222V2.88889C1.55556 2.12271 1.85992 1.38791 2.40169 0.846138C2.94346 0.304364 3.67827 0 4.44444 0C5.21062 0 5.94542 0.304364 6.4872 0.846138C7.02898 1.38791 7.33333 2.12271 7.33333 2.88889V4.22222H7.55556C8.29196 4.22222 8.88889 4.81916 8.88889 5.55556V8.66667C8.88889 9.40307 8.29196 10 7.55556 10H1.33333C0.596956 10 0 9.40307 0 8.66667V5.55556C0 4.81916 0.596956 4.22222 1.33333 4.22222H1.55556ZM3.3445 1.78895C3.63622 1.49722 4.03187 1.33333 4.44444 1.33333C4.85702 1.33333 5.25267 1.49722 5.5444 1.78895C5.83613 2.08067 6 2.47633 6 2.88889V4.22222H2.88889V2.88889C2.88889 2.47633 3.05278 2.08067 3.3445 1.78895Z\"\r\n\r\n                                fill=\"#666666\"\r\n\r\n                                />\r\n\r\n                              </svg>\r\n\r\n                              <span>Security Tip</span>\r\n\r\n                            </button>\r\n\r\n                            <p>\r\n\r\n                              Never share your PIN, OTP, or password with anyone. Choice will\r\n\r\n                              never request such details from you.\r\n\r\n                            </p>\r\n\r\n                          </div>\r\n\r\n                          <div class=\"login-footer\">\r\n\r\n                            <ul>\r\n\r\n                              <li>Term of Use</li>\r\n\r\n                              <li>Privacy Policy</li>\r\n\r\n                              <li>Disclaimer</li>\r\n\r\n                              <li>Beta T&C</li>\r\n\r\n                              <li>Support</li>\r\n\r\n                            </ul>\r\n\r\n                          </div> -->\r\n\r\n                          <div class=\"login-footer-fixed\">\r\n\r\n                            <div class=\"container\">\r\n\r\n                              <div class=\"footer-items\">\r\n\r\n                                <div class=\"security-sec\">\r\n\r\n                                  <button type=\"button\" class=\"btn-security\">\r\n\r\n                                    <svg\r\n\r\n                                      width=\"9\"\r\n\r\n                                      height=\"10\"\r\n\r\n                                      viewBox=\"0 0 9 10\"\r\n\r\n                                      fill=\"none\"\r\n\r\n                                      xmlns=\"http://www.w3.org/2000/svg\"\r\n\r\n                                      >\r\n\r\n                                      <path\r\n\r\n                                        id=\"Vector\"\r\n\r\n                                        fill-rule=\"evenodd\"\r\n\r\n                                        clip-rule=\"evenodd\"\r\n\r\n                                        d=\"M1.55556 4.22222V2.88889C1.55556 2.12271 1.85992 1.38791 2.40169 0.846138C2.94346 0.304364 3.67827 0 4.44444 0C5.21062 0 5.94542 0.304364 6.4872 0.846138C7.02898 1.38791 7.33333 2.12271 7.33333 2.88889V4.22222H7.55556C8.29196 4.22222 8.88889 4.81916 8.88889 5.55556V8.66667C8.88889 9.40307 8.29196 10 7.55556 10H1.33333C0.596956 10 0 9.40307 0 8.66667V5.55556C0 4.81916 0.596956 4.22222 1.33333 4.22222H1.55556ZM3.3445 1.78895C3.63622 1.49722 4.03187 1.33333 4.44444 1.33333C4.85702 1.33333 5.25267 1.49722 5.5444 1.78895C5.83613 2.08067 6 2.47633 6 2.88889V4.22222H2.88889V2.88889C2.88889 2.47633 3.05278 2.08067 3.3445 1.78895Z\"\r\n\r\n                                        fill=\"#666666\"\r\n\r\n                                        />\r\n\r\n                                      </svg>\r\n\r\n                                      <span>Security Tip</span>\r\n\r\n                                    </button>\r\n\r\n                                    <p>\r\n\r\n                                      Never share your PIN, OTP, or password with anyone. Choice\r\n\r\n                                      will never request such details from you.\r\n\r\n                                    </p>\r\n\r\n                                  </div>\r\n\r\n                                  <div class=\"login-footer\">\r\n\r\n                                    <ul>\r\n\r\n                                      <li>\r\n\r\n                                        <a routerLink=\"/links/terms-use\" target=\"_blank\">Term of Use</a>\r\n\r\n                                      </li>\r\n\r\n                                      <li>\r\n\r\n                                        <a routerLink=\"/links/privacy-policy\" target=\"_blank\"\r\n\r\n                                          >Privacy Policy</a\r\n\r\n                                          >\r\n\r\n                                        </li>\r\n\r\n                                        <li>\r\n\r\n                                          <a routerLink=\"/links/disclaimer\" target=\"_blank\">Disclaimer</a>\r\n\r\n                                        </li>\r\n\r\n                                        <li>\r\n\r\n                                          <a routerLink=\"/links/beta-terms-and-conditions\" target=\"_blank\"\r\n\r\n                                            >Beta T&C</a\r\n\r\n                                            >\r\n\r\n                                          </li>\r\n\r\n                                          <li><a routerLink=\"/links/support\" target=\"_blank\">Support</a></li>\r\n\r\n                                        </ul>\r\n\r\n                                      </div>\r\n\r\n                                    </div>\r\n\r\n                                  </div>\r\n\r\n                                </div>\r\n\r\n                              </div>\r\n\r\n                            </div>\r\n\r\n                          </div>\r\n\r\n                        </div>\r\n\r\n                        @if (isBuildDiff) {\r\n                          <div class=\"dialog\">\r\n                            <div class=\"dialog-content\">\r\n                              <div class=\"dialog-header clearfix\">\r\n                                <div class=\"col-md-12\">\r\n                                  <h4 class=\"popup-title\">Please refresh to view the latest features.</h4>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"dialog-footer clearfix\">\r\n                                <button class=\"btn sell\" (click)=\"isBuildDiff = false\">Close</button>\r\n                                <button class=\"btn buy\" [showFocus]=\"isBuildDiff\" (click)=\"refreshPage()\">\r\n                                  Refresh\r\n                                </button>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        }\r\n\r\n\r\n\r\n                        @if (customError?.inActive || customError?.isSuspended) {\r\n                          <div class=\"dialog\">\r\n                            <div class=\"dialog-content\">\r\n                              <div class=\"dialog-header clearfix \">\r\n                                <div class=\"col-md-12\">\r\n                                  <h4 class=\"popup-title\">{{customError?.title}} </h4>\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"dialog-section\">\r\n                                <p>{{customError?.msg}}</p>\r\n                              </div>\r\n                              <div class=\"dialog-footer clearfix\">\r\n                                @if (!customError.navigateToSupport) {\r\n                                  <button class=\"btn sell\" (click)=\"navigateToModificationFlow()\">Proceed</button>\r\n                                }\r\n                                @if (customError.navigateToSupport) {\r\n                                  <button class=\"btn sell\" (click)=\"navigateToSupport()\">Contact Support</button>\r\n                                }\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        }\r\n\r\n";

/***/ }),

/***/ 95956:
/*!*********************************************************************!*\
  !*** ./src/app/auth-module/logout/logout.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div >\r\n  <div class=\"row\" style=\"height: 74vh;\">\r\n\r\n    <div\r\n    class=\"loader-wrapper-min\"\r\n    id=\"loading-wrapper\"\r\n  >\r\n    <div class=\"circle\">\r\n      <div class=\"circle-min\"></div>\r\n    </div>\r\n  </div>\r\n\r\n    </div></div>";

/***/ }),

/***/ 72994:
/*!*************************************************************************!*\
  !*** ./src/app/auth-module/register/register.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"login-section\">\r\n  <div class=\"sso-new-header\">\r\n    <!-- SSO New Header-->\r\n    <div class=\"container\">\r\n      <div class=\"flx-header\">\r\n        <div class=\"logo-n\">\r\n          <div class=\"logo-img\">\r\n            <a\r\n              class=\"finx-logo\"\r\n              title=\"Home\"\r\n              href=\"https://choiceindia.com\"\r\n              >\r\n              <img\r\n                src=\"assets/images/finx-icons/logo-choice.svg\"\r\n\r\n                alt=\"Choice\"\r\n                class=\"img-logo\" width=\"167\" height=\"40\"\r\n                />\r\n              </a>\r\n            </div>\r\n            <div class=\"logo-img\">\r\n              <img\r\n                src=\"assets/images/finx-icons/finx-login-logo.svg\"\r\n\r\n                alt=\"Choice FinX - Online Trading Platform\"\r\n                class=\"img-logo logo-blur\" width=\"167\" height=\"40\"\r\n                />\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"faq-lnk\">\r\n              <a\r\n                href=\"https://choicebroking.freshdesk.com/support/home\"\r\n                target=\"_blank\"\r\n                >\r\n                <span\r\n                  >FAQ <img src=\"../../assets/images/finx-icons/faq-icon.svg\" alt=\"\"\r\n                /></span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"container\">\r\n        <div class=\"login-body\">\r\n          <div class=\"left-sec\">\r\n\r\n            <div class=\"login-captions\">\r\n              <div class=\"text-slick-slider\"> <!-- Left Sliders -->\r\n                <div class=\"text-slider-items\">\r\n                  <div class=\"change\">\r\n                    <div class=\"slick-items\">\r\n                      <h3>Trading</h3>\r\n                      <img\r\n                        src=\"assets/images/finx-icons/trading.svg\"\r\n                        alt=\"\"\r\n                        class=\"img-responsive\"\r\n                        />\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"change\">\r\n                      <div class=\"slick-items\">\r\n                        <h3>Mutual Funds</h3>\r\n                        <img\r\n                          src=\"assets/images/finx-icons/mutual-funds.svg\"\r\n                          alt=\"\"\r\n                          class=\"img-responsive\"\r\n                          />\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"change\">\r\n                        <div class=\"slick-items\">\r\n                          <h3>Insurance</h3>\r\n                          <img\r\n                            src=\"assets/images/finx-icons/insurance.svg\"\r\n                            alt=\"\"\r\n                            class=\"img-responsive\"\r\n                            />\r\n                          </div>\r\n                        </div>\r\n                        <div class=\"change\">\r\n                          <div class=\"slick-items\">\r\n                            <h3>Secured Products</h3>\r\n                            <img\r\n                              src=\"assets/images/finx-icons/secured-products.svg\"\r\n                              alt=\"\"\r\n                              class=\"img-responsive\"\r\n                              />\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                      <h3 class=\"title-details\">Explore all in one place</h3>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"right-sec\">\r\n\r\n                    <!-- register-->\r\n                    @if (!otpSent) {\r\n                      <div class=\"login-card login-card-sso\">\r\n                        <div class=\"form-wrap\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                              <h5>Create Account</h5>\r\n                              <p>\r\n                                You will receive an OTP on your number\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <form  id=\"sign-up\" class=\"form-wrap\" [formGroup]=\"userForm\">\r\n                            <div class=\"form-control2 mobile-number-contr\">\r\n                              <input autocomplete=\"off\" autofocus=\"\"  formControlName=\"mobileNumber\" pattern=\"^([0-9]{10})$\"  inputRestrict=\"unsignedFloat\" type=\"text\" id=\"mobile-number\"  maxlength=\"10\"name=\"username\" placeholder=\"Mobile Number\" class=\"form-input form-input-num\" />\r\n                              <span class=\"country-code\">+91</span>\r\n                              <label class=\"form-label\" for=\"mobile-number\">Mobile Number</label>\r\n                              @if ((userForm?.controls?.mobileNumber?.errors?.required) && !userForm?.controls?.mobileNumber?.pristine) {\r\n                                <p class=\"animate error\">Mobile Number is Required</p>\r\n                              }\r\n                            </div>\r\n                            <div class=\"form-control2\">\r\n                              <input autocomplete=\"off\" autofocus=\"\"  formControlName=\"referralCode\" type=\"text\"  maxlength=\"15\" id=\"referralCode\" name=\"referralcode\" placeholder=\"Mobile Number\" class=\"form-input\" />\r\n                              <label class=\"form-label\" for=\"referralCode\">Referral Code</label>\r\n                              <!-- <p class=\"animate error\" *ngif>Referral Invalid</p> -->\r\n                            </div>\r\n                            <div class=\"form-control2\">\r\n                              <button type=\"button\" [disabled]=\"registeringUser || !userForm?.valid\"  (click)=\"registerUser('send')\" id=\"sign-in-button\" class=\"btn btn-gradient\">Submit</button>\r\n                            </div>\r\n                            <div class=\"gt-update mt-30\">\r\n                              <input type=\"checkbox\" class=\"tick-checked\" formControlName=\"whatsapp_consent\" checked> Get Updates on <span class=\"whats-link\">WhatsApp <img src=\"../../../assets/images/logos_whatsapp-icon.svg\"></span>\r\n                            </div>\r\n                          </form>\r\n                        </div>\r\n                      </div>\r\n                    }\r\n\r\n\r\n                    <!-- Otp-->\r\n                    @if (otpSent && !otpVerified) {\r\n                      <div class=\"login-card login-card-sso\">\r\n                        <div class=\"form-wrap\">\r\n                          <div class=\"row\">\r\n                            <div class=\"col-md-12\">\r\n                              <h5>OTP Verification</h5>\r\n                              <p class=\"edit-mob\">\r\n                                Enter the OTP sent to <a (click)=\"backToMobile()\" class=\"edit-mobl\">+91 {{userForm?.value?.mobileNumber}}</a>\r\n                              </p>\r\n                            </div>\r\n                          </div>\r\n                          <form   id=\"sign-up\" class=\"form-wrap\"  [formGroup]=\"otpForm\" >\r\n                            <div class=\"form-control2\">\r\n                              <input autocomplete=\"off\" formControlName=\"otp\" pattern=\"^([0-9]{4,6})$\" maxlength=\"6\"  autofocus=\"\" type=\"text\" id=\"otp\" name=\"username\" placeholder=\"OTP\" class=\"form-input otp-spc\" />\r\n                              <label class=\"form-label\" for=\"otp\">Enter 6 Digit OTP</label>\r\n                              @if ((otpForm?.controls?.otp?.errors?.required) && !otpForm?.controls?.otp?.pristine) {\r\n                                <p class=\"animate error\">OTP is Required</p>\r\n                              }\r\n                            </div>\r\n                            <div class=\"dont-have-otp\"  >\r\n                              @if (resendOTP) {\r\n                                <button class=\"btn-sign-up\" [disabled]=\"registeringUser\" (click)=\"registeringUser = true;registerUser('otp-on-call')\">\r\n                                  <img\r\n                                    src=\"../../../assets/images/call-icon.svg\"\r\n                                    alt=\"\"\r\n                                    class=\"img-responsive\"\r\n                                    />\r\n                                    Get via Call\r\n                                  </button>\r\n                                }\r\n                                @if (resendOTP) {\r\n                                  <button class=\"btn-sign-up\"  [disabled]=\"registeringUser\"   (click)=\" registeringUser = true;registerUser('resend')\">\r\n                                    <img\r\n                                      src=\"../../../assets/images/sms-icon.svg\"\r\n                                      alt=\"\"\r\n                                      class=\"img-responsive\"\r\n                                      />\r\n                                    Resend</button>\r\n                                  }\r\n                                  @if (!resendOTP) {\r\n                                    <button class=\"btn-sign-up\" style=\"color: gray !important;margin-left: auto;\">\r\n                                      <!-- <img\r\n                                      src=\"../../../assets/images/sms-icon.svg\"\r\n                                      alt=\"\"\r\n                                      class=\"img-responsive\"\r\n                                      />  -->\r\n                                      Resend in <span > {{ '00:'+(timer>9?timer:'0'+timer) }}</span></button>\r\n                                    }\r\n                                  </div>\r\n                                  <div class=\"form-control2\">\r\n                                    <button type=\"button\" id=\"sign-in-button\" [disabled]=\"verifyingOTP\" (click)=\"verifyOtp()\" class=\"btn btn-gradient\">Verify</button>\r\n                                  </div>\r\n                                </form>\r\n                              </div>\r\n                            </div>\r\n                          }\r\n\r\n\r\n\r\n                          @if (otpVerified) {\r\n                            <div class=\"login-card login-card-sso\">\r\n                              <div class=\"form-wrap\">\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-12\">\r\n                                    <h5>Create New Password</h5>\r\n                                    <p class=\"edit-mob\">\r\n                                      Create a password that is both memorable and secure.\r\n                                    </p>\r\n                                  </div>\r\n                                </div>\r\n                                <form\r\n                                  name=\"changePasswordForm\"\r\n                                  (ngSubmit)=\"changePassword(changePasswordForm)\"\r\n                                  #changePasswordForm=\"ngForm\"\r\n                                  >\r\n                                  <div class=\"row\">\r\n                                    <div class=\"col-md-12 mb-48\">\r\n                                      <div class=\"form-control2\">\r\n                                        <input\r\n                                          tabindex=\"2\"\r\n                                          type=\"{{ change.newIsText ? 'text' : 'password' }}\"\r\n                                          class=\"form-input\"\r\n                                          minlength=\"8\"\r\n                                          maxlength=\"12\"\r\n                                          [(ngModel)]=\"change.newPassword\"\r\n                                          placeholder=\"none\"\r\n                                          name=\"newPassword\"\r\n                                          pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&^])[A-Za-z\\d@$!%*#?&^]{8,12}$\"\r\n                                          #newPassword=\"ngModel\"\r\n                                          required\r\n                                          maxlength=\"12\"\r\n                                          inputRestrict=\"password\"\r\n                                          />\r\n                                          <label for=\"newPassword\" class=\"form-label\"\r\n                                            >Create New Password</label\r\n                                            >\r\n                                            <div class=\"p-viewer\">\r\n                                              <button\r\n                                                type=\"button\"\r\n                                                class=\"btn eye-btn\"\r\n                                                (click)=\"change.newIsText = !change.newIsText\"\r\n                                                >\r\n                                                @if (change.newIsText) {\r\n                                                  <i class=\"icon-eye\"></i>\r\n                                                }\r\n                                                @if (!change.newIsText) {\r\n                                                  <i class=\"icon-eye-slash\"></i>\r\n                                                }\r\n                                              </button>\r\n                                            </div>\r\n                                          </div>\r\n                                          <p class=\"val-new-pwd\">\r\n                                            8+ Characters, 1 Number and 1 Special character\r\n                                          </p>\r\n                                          @if (\r\n                                            newPassword.invalid &&\r\n                                            newPassword.dirty &&\r\n                                            newPassword?.errors.required\r\n                                            ) {\r\n                                            <p\r\n                                              class=\"animate error\"\r\n                                              >\r\n                                              New Password is Required.\r\n                                            </p>\r\n                                          }\r\n                                          @if (\r\n                                            newPassword.invalid &&\r\n                                            newPassword.dirty &&\r\n                                            newPassword?.errors?.pattern\r\n                                            ) {\r\n                                            <p\r\n                                              class=\"animate error\"\r\n                                              >\r\n                                              Password must be alphanumeric with atleast one special\r\n                                              symbol from &#64;$!%*#?&^\r\n                                            </p>\r\n                                          }\r\n                                          @if (\r\n                                            change.currentPassword &&\r\n                                            change.currentPassword &&\r\n                                            change.currentPassword === change.newPassword\r\n                                            ) {\r\n                                            <p\r\n                                              class=\"animate error\"\r\n                                              >\r\n                                              New Password cannot be same as Current Password.\r\n                                            </p>\r\n                                          }\r\n                                          @if (\r\n                                            (newPassword.dirty &&\r\n                                            newPassword.invalid &&\r\n                                            change.newPassword &&\r\n                                            newPassword?.errors?.minlength) ||\r\n                                            currentPassword?.errors?.maxlength\r\n                                            ) {\r\n                                            <p\r\n                                              class=\"animate error\"\r\n                                              >\r\n                                              Password should be between 8-12 characters.\r\n                                            </p>\r\n                                          }\r\n                                        </div>\r\n                                        <div class=\"col-md-12\">\r\n                                          <div class=\"form-control2\">\r\n                                            <!-- <span class=\"input-group-addon\">\r\n                                            <i aria-hidden=\"true\" class=\"icon-lock\"></i>\r\n                                          </span> -->\r\n                                          <input\r\n                                            tabindex=\"3\"\r\n                                            type=\"{{ change.confirmNewIsText ? 'text' : 'password' }}\"\r\n                                            class=\"form-input\"\r\n                                            minlength=\"8\"\r\n                                            maxlength=\"12\"\r\n                                            [(ngModel)]=\"change.confirmNewPassword\"\r\n                                            placeholder=\"none\"\r\n                                            name=\"confirmNewPassword\"\r\n                                            #confirmNewPassword=\"ngModel\"\r\n                                            pattern=\"^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&^])[A-Za-z\\d@$!%*#?&^]{8,12}$\"\r\n                                            required\r\n                                            maxlength=\"12\"\r\n                                            inputRestrict=\"password\"\r\n                                            />\r\n                                            <label for=\"confirmNewPassword\" class=\"form-label\"\r\n                                              >Confirm New Password</label\r\n                                              >\r\n                                              <div class=\"p-viewer\">\r\n                                                <button\r\n                                                  type=\"button\"\r\n                                                  class=\"btn eye-btn\"\r\n                      (click)=\"\r\n                        change.confirmNewIsText = !change.confirmNewIsText\r\n                      \"\r\n                                                  >\r\n                                                  @if (change?.confirmNewIsText) {\r\n                                                    <i class=\"icon-eye\"></i>\r\n                                                  }\r\n                                                  @if (!change?.confirmNewIsText) {\r\n                                                    <i\r\n                                                      class=\"icon-eye-slash\"\r\n                                                    ></i>\r\n                                                  }\r\n                                                </button>\r\n                                              </div>\r\n                                            </div>\r\n                                            @if (\r\n                                              confirmNewPassword.invalid &&\r\n                                              confirmNewPassword.dirty &&\r\n                                              confirmNewPassword?.errors.required\r\n                                              ) {\r\n                                              <p\r\n                                                class=\"animate error\"\r\n                                                >\r\n                                                Confirm New Password is Required.\r\n                                              </p>\r\n                                            }\r\n                                            @if (\r\n                                              confirmNewPassword.invalid &&\r\n                                              confirmNewPassword.dirty &&\r\n                                              confirmNewPassword?.errors?.pattern\r\n                                              ) {\r\n                                              <p\r\n                                                class=\"animate error\"\r\n                                                >\r\n                                                Password must be alphanumeric with atleast one special\r\n                                                symbol from &#64;$!%*#?&^\r\n                                              </p>\r\n                                            }\r\n                                            @if (\r\n                                              change.confirmNewPassword !== change.newPassword &&\r\n                                              confirmNewPassword.dirty\r\n                                              ) {\r\n                                              <p\r\n                                                class=\"animate error\"\r\n                                                >\r\n                                                New and Confirm New Password not matching\r\n                                              </p>\r\n                                            }\r\n                                            @if (\r\n                                              (confirmNewPassword.dirty &&\r\n                                              confirmNewPassword.invalid &&\r\n                                              change.confirmNewPassword &&\r\n                                              confirmNewPassword?.errors?.minlength) ||\r\n                                              confirmNewPassword?.errors?.maxlength\r\n                                              ) {\r\n                                              <p\r\n                                                class=\"animate error\"\r\n                                                >\r\n                                                Password should be between 8-12 characters.\r\n                                              </p>\r\n                                            }\r\n                                          </div>\r\n                                          <div class=\"clear\"></div>\r\n                                          <div class=\"col-sm-12 text-center submit-btn-wrapper\">\r\n                                            <button\r\n                                              type=\"submit\"\r\n                                              class=\"btn btn-gradient\"\r\n                  [disabled]=\"\r\n                    !change.newPassword ||\r\n                    change.confirmNewPassword !== change.newPassword\r\n                  \"\r\n                                              >\r\n                                              Submit\r\n                                            </button>\r\n                                          </div>\r\n                                        </div>\r\n                                      </form>\r\n                                      <!-- <form method=\"POST\" id=\"setPasscode\" class=\"form-wrap\">\r\n                                      <div style=\"position: relative;\" class=\"form-control2\">\r\n                                        <input type=\"password\" id=\"passcode\" name=\"passcode\" placeholder=\"Create New Password\" class=\"form-input\" />\r\n                                        <label class=\"form-label\" for=\"passcode\">Create New Password</label>\r\n                                        <div class=\"p-viewer\">\r\n                                          <span class=\"btn eye-btn\">\r\n                                            <i class=\"fa icon-eye-slash\" id=\"passcode-show\"></i>\r\n                                          </span>\r\n                                        </div>\r\n                                        <div id=\"password-policy\" class=\"password-policy\">\r\n                                          <ul>\r\n                                            <li data-policy=\"length\" >Password should be between 8-12 characters.</li>\r\n                                            <li data-policy=\"lowercase\">Lower case letters (a-z)</li>\r\n                                            <li data-policy=\"uppercase\">Upper case letters (A-Z)</li>\r\n                                            <li data-policy=\"numbers\">Numbers (0-9)</li>\r\n                                          </ul>\r\n                                        </div>\r\n                                        <p class=\"animate error\" *ngif>New Password is Required.</p>\r\n                                      </div>\r\n                                      <div style=\"position: relative;\" class=\"form-control2\">\r\n                                        <input type=\"password\" id=\"confirm-passcode\" name=\"confirm-passcode\" placeholder=\"Confirm New Password\" class=\"form-input\" />\r\n                                        <label class=\"form-label\" for=\"confirm-passcode\">Confirm New Password</label>\r\n                                        <div class=\"p-viewer\">\r\n                                          <span class=\"btn eye-btn\">\r\n                                            <i class=\"fa icon-eye-slash\" id=\"confirm-passcode-show\"></i>\r\n                                          </span>\r\n                                        </div>\r\n                                        <p class=\"animate error\" *ngif>New and Confirm New Password not matching</p>\r\n                                      </div>\r\n                                      <div style=\"position: relative;\">\r\n                                        <span id=\"errorMsg\"></span>\r\n                                      </div>\r\n                                      <div class=\"form-control2\">\r\n                                        <button type=\"button\" id=\"sign-in-button\" class=\"btn btn-gradient\" disabled>Submit</button>\r\n                                      </div>\r\n                                    </form> -->\r\n                                  </div>\r\n                                </div>\r\n                              }\r\n\r\n\r\n                              <!-- <div class=\"security-sec\">\r\n                              <button type=\"button\" class=\"btn-security\">\r\n                                <svg\r\n                                  width=\"9\"\r\n                                  height=\"10\"\r\n                                  viewBox=\"0 0 9 10\"\r\n                                  fill=\"none\"\r\n                                  xmlns=\"http://www.w3.org/2000/svg\"\r\n                                  >\r\n                                  <path\r\n                                    id=\"Vector\"\r\n                                    fill-rule=\"evenodd\"\r\n                                    clip-rule=\"evenodd\"\r\n                                    d=\"M1.55556 4.22222V2.88889C1.55556 2.12271 1.85992 1.38791 2.40169 0.846138C2.94346 0.304364 3.67827 0 4.44444 0C5.21062 0 5.94542 0.304364 6.4872 0.846138C7.02898 1.38791 7.33333 2.12271 7.33333 2.88889V4.22222H7.55556C8.29196 4.22222 8.88889 4.81916 8.88889 5.55556V8.66667C8.88889 9.40307 8.29196 10 7.55556 10H1.33333C0.596956 10 0 9.40307 0 8.66667V5.55556C0 4.81916 0.596956 4.22222 1.33333 4.22222H1.55556ZM3.3445 1.78895C3.63622 1.49722 4.03187 1.33333 4.44444 1.33333C4.85702 1.33333 5.25267 1.49722 5.5444 1.78895C5.83613 2.08067 6 2.47633 6 2.88889V4.22222H2.88889V2.88889C2.88889 2.47633 3.05278 2.08067 3.3445 1.78895Z\"\r\n                                    fill=\"#666666\"\r\n                                    />\r\n                                  </svg>\r\n                                  <span>Security Tip</span>\r\n                                </button>\r\n                                <p>\r\n                                  Never share your PIN, OTP, or password with anyone. Choice will\r\n                                  never request such details from you.\r\n                                </p>\r\n                              </div>\r\n                              <div class=\"login-footer\">\r\n                                <ul>\r\n                                  <li>Term of Use</li>\r\n                                  <li>Privacy Policy</li>\r\n                                  <li>Disclaimer</li>\r\n                                  <li>Beta T&C</li>\r\n                                  <li>Support</li>\r\n                                </ul>\r\n                              </div> -->\r\n                              <div class=\"login-footer-fixed\"> <!-- Footer -->\r\n                                <div class=\"container\">\r\n                                  <div class=\"footer-items\">\r\n                                    <div class=\"security-sec\">\r\n                                      <button type=\"button\" class=\"btn-security\">\r\n                                        <svg\r\n                                          width=\"9\"\r\n                                          height=\"10\"\r\n                                          viewBox=\"0 0 9 10\"\r\n                                          fill=\"none\"\r\n                                          xmlns=\"http://www.w3.org/2000/svg\"\r\n                                          >\r\n                                          <path\r\n                                            id=\"Vector\"\r\n                                            fill-rule=\"evenodd\"\r\n                                            clip-rule=\"evenodd\"\r\n                                            d=\"M1.55556 4.22222V2.88889C1.55556 2.12271 1.85992 1.38791 2.40169 0.846138C2.94346 0.304364 3.67827 0 4.44444 0C5.21062 0 5.94542 0.304364 6.4872 0.846138C7.02898 1.38791 7.33333 2.12271 7.33333 2.88889V4.22222H7.55556C8.29196 4.22222 8.88889 4.81916 8.88889 5.55556V8.66667C8.88889 9.40307 8.29196 10 7.55556 10H1.33333C0.596956 10 0 9.40307 0 8.66667V5.55556C0 4.81916 0.596956 4.22222 1.33333 4.22222H1.55556ZM3.3445 1.78895C3.63622 1.49722 4.03187 1.33333 4.44444 1.33333C4.85702 1.33333 5.25267 1.49722 5.5444 1.78895C5.83613 2.08067 6 2.47633 6 2.88889V4.22222H2.88889V2.88889C2.88889 2.47633 3.05278 2.08067 3.3445 1.78895Z\"\r\n                                            fill=\"#666666\"\r\n                                            />\r\n                                          </svg>\r\n                                          <span>Security Tip</span>\r\n                                        </button>\r\n                                        <p>\r\n                                          Never share your PIN, OTP, or password with anyone. Choice\r\n                                          will never request such details from you.\r\n                                        </p>\r\n                                      </div>\r\n                                      <div class=\"login-footer\">\r\n                                        <ul>\r\n                                          <li>\r\n                                            <a routerLink=\"/links/terms-use\" target=\"_blank\">Term of Use</a>\r\n                                          </li>\r\n                                          <li>\r\n                                            <a routerLink=\"/links/privacy-policy\" target=\"_blank\"\r\n                                              >Privacy Policy</a\r\n                                              >\r\n                                            </li>\r\n                                            <li>\r\n                                              <a routerLink=\"/links/disclaimer\" target=\"_blank\">Disclaimer</a>\r\n                                            </li>\r\n                                            <li>\r\n                                              <a routerLink=\"/links/beta-terms-and-conditions\" target=\"_blank\"\r\n                                                >Beta T&C</a\r\n                                                >\r\n                                              </li>\r\n                                              <li><a routerLink=\"/links/support\" target=\"_blank\">Support</a></li>\r\n                                            </ul>\r\n                                          </div>\r\n                                        </div>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                </div>\r\n                              </div>\r\n                              @if (showConsent) {\r\n                                <div\r\n                                  class=\"main-modal custom-model-main model-open\"\r\n                                  [class.model-open]=\"showConsent\"\r\n                                  >\r\n                                  <div class=\"custom-model-inner\">\r\n                                    <div class=\"close-btn\" (click)=\"checkConsent('close')\">&#10006;</div>\r\n                                    <div class=\"custom-model-wrap\">\r\n                                      <h1 class=\"custom-h1\" >Dear Investor</h1>\r\n                                      <p>{{ consentMsg }}</p>\r\n                                      <div class=\"wrap-btn\">\r\n                                        <button (click)=\"checkConsent('close')\" class=\"btn  btn-font\">\r\n                                          No,Cancel Onboarding and Connect RM\r\n                                        </button>\r\n                                        <button (click)=\"checkConsent('proceed')\" class=\"btn btn-gradient btn-font\">\r\n                                          Yes,Continue with Existing Referral Code\r\n                                        </button>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div>\r\n                                  <div class=\"bg-overlay\"></div>\r\n                                </div>\r\n                              }\r\n\r\n                            </div>\r\n\r\n                            <!-- <div class=\"login-module onboarding-module small-width\">\r\n                            <div class=\"left-section\">\r\n                              <div class=\"form-wrap\">\r\n                                <a class=\"login-logo\">\r\n                                  <img\r\n                                    src=\"assets/images/finx-icons/finx-login-logo.svg\"\r\n                                    alt=\"Choice FinX - Online Trading Platform\"\r\n                                    class=\"img-responsive\"\r\n                                    />\r\n                                  </a>\r\n                                  <h3>Forgot Pin</h3>\r\n                                  <form\r\n                                    name=\"changeAnswerForm\"\r\n                                    (ngSubmit)=\"changeAnswer()\"\r\n                                    #changeAnswerForm=\"ngForm\"\r\n                                    >\r\n\r\n                                    <div class=\"form-group\">\r\n                                      <label for=\"question1\">RECEIVED PIN</label>\r\n                                      <div class=\"input-group\">\r\n                                        <span class=\"input-group-addon\">\r\n                                          <i class=\"icon-lock\" aria-hidden=\"true\"></i>\r\n                                        </span>\r\n                                        <input\r\n                                          tabindex=\"1\"\r\n                                          type=\"{{ user.isOldAnswerVisible ? 'text' : 'password' }}\"\r\n                                          autocomplete=\"off\"\r\n                                          maxlength=\"6\"\r\n                                          pattern=\"^([0-9]{4,6})$\"\r\n                                          inputRestrict=\"unsignedInteger\"\r\n                                          autofocus\r\n                                          class=\"form-control\"\r\n                                          #changeAnswer1\r\n                                          [(ngModel)]=\"user.oldAnswer1\"\r\n                                          placeholder=\"eg.123456\"\r\n                                          name=\"oldAnswer1\"\r\n                                          required\r\n                                          #oldAnswer1=\"ngModel\"\r\n                                          />\r\n                                          <div class=\"input-group-addon\">\r\n                                            <button\r\n                                              type=\"button\"\r\n                                              class=\"btn\"\r\n                                              (click)=\"user.isOldAnswerVisible = !user.isOldAnswerVisible\"\r\n                                              >\r\n                                              <i *ngIf=\"user.isOldAnswerVisible\" class=\"fa icon-eye\"></i>\r\n                                              <i\r\n                                                *ngIf=\"!user.isOldAnswerVisible\"\r\n                                                class=\"fa icon-eye-slash\"\r\n                                              ></i>\r\n                                            </button>\r\n                                          </div>\r\n                                        </div>\r\n                                        <p\r\n                                          class=\"animate error\"\r\n                                          *ngIf=\"oldAnswer1.errors?.required && oldAnswer1.dirty\"\r\n                                          >\r\n                                          Received PIN is required.\r\n                                        </p>\r\n\r\n                                        <p\r\n                                          class=\"animate error\"\r\n            *ngIf=\"\r\n              oldAnswer1.errors?.pattern &&\r\n              oldAnswer1.dirty &&\r\n              user.oldAnswer1 &&\r\n              (user.oldAnswer1.trim().length <= 3 ||\r\n                user.oldAnswer1.trim().length > 6)\r\n            \"\r\n                                          >\r\n                                          Received PIN should be between 4-6 Digits\r\n                                        </p>\r\n                                      </div>\r\n                                      <div class=\"form-group\">\r\n                                        <label for=\"question1\">New PIN</label>\r\n                                        <div class=\"input-group\">\r\n                                          <span class=\"input-group-addon\">\r\n                                            <i class=\"icon-lock\" aria-hidden=\"true\"></i>\r\n                                          </span>\r\n                                          <input\r\n                                            tabindex=\"2\"\r\n                                            type=\"{{ user.isNewAnswerVisible ? 'text' : 'password' }}\"\r\n                                            autocomplete=\"off\"\r\n                                            maxlength=\"6\"\r\n                                            pattern=\"^([0-9]{4,6})$\"\r\n                                            inputRestrict=\"unsignedInteger\"\r\n                                            class=\"form-control\"\r\n                                            [(ngModel)]=\"user.newAnswer1\"\r\n                                            placeholder=\"eg.123456\"\r\n                                            name=\"newAnswer1\"\r\n                                            required\r\n                                            #newAnswer1=\"ngModel\"\r\n                                            />\r\n                                            <div class=\"input-group-addon\">\r\n                                              <button\r\n                                                type=\"button\"\r\n                                                class=\"btn\"\r\n                                                (click)=\"user.isNewAnswerVisible = !user.isNewAnswerVisible\"\r\n                                                >\r\n                                                <i *ngIf=\"user.isNewAnswerVisible\" class=\"fa icon-eye\"></i>\r\n                                                <i\r\n                                                  *ngIf=\"!user.isNewAnswerVisible\"\r\n                                                  class=\"fa icon-eye-slash\"\r\n                                                ></i>\r\n                                              </button>\r\n                                            </div>\r\n                                          </div>\r\n                                          <p\r\n                                            class=\"animate error\"\r\n                                            *ngIf=\"newAnswer1.errors?.required && newAnswer1.dirty\"\r\n                                            >\r\n                                            New PIN is required.\r\n                                          </p>\r\n                                          <p\r\n                                            class=\"animate error\"\r\n            *ngIf=\"\r\n              newAnswer1.errors?.pattern &&\r\n              newAnswer1.dirty &&\r\n              user.newAnswer1 &&\r\n              (user.newAnswer1.trim().length <= 3 ||\r\n                user.newAnswer1.trim().length > 6)\r\n            \"\r\n                                            >\r\n                                            New PIN should be between 4-6 Digits.\r\n                                          </p>\r\n                                        </div>\r\n                                        <div\r\n                                          class=\"col-sm-12 padding-0 alt-section text-center\"\r\n                                          *ngIf=\"isResendVisible\"\r\n                                          >\r\n                                          <p class=\"mb-common\">\r\n                                            Still did'nt received your PIN?\r\n                                            <span (click)=\"resetAnswer(true)\" type=\"button\" class=\"btn btn-red\"\r\n                                              >Click Here</span\r\n                                              >\r\n                                            </p>\r\n                                          </div>\r\n                                          <div class=\"col-sm-12 padding-0 text-center submit-btn-wrapper\">\r\n                                            <button\r\n                                              type=\"submit\"\r\n                                              class=\"btn col-sm-12 btn-gradient\"\r\n                                              [disabled]=\"!changeAnswerForm.form.valid\"\r\n                                              >\r\n                                              Change PIN\r\n                                            </button>\r\n                                          </div>\r\n                                        </form>\r\n                                      </div>\r\n                                    </div>\r\n                                  </div> -->\r\n";

/***/ })

}]);