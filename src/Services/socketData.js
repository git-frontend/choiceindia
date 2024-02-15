import { interval, takeWhile } from 'rxjs';
import { API_URLS } from './API-URLS';
var W3CWebSocket = require('websocket').w3cwebsocket;
//const moment = require('moment');
const pako = require('pako');

/** To store message data */
let bufferArray = new Uint8Array(0);

/**Socket */
let socket;
/**Keep Alive Interval */
let keepAliveInterval
/**Reconnect Observable */
let reconnectObservable = null;
/**Reconnect Interval */
let reconnectInterval = 5000;
/**Reconnect Attempts */
let reconnectAttempts = 5;
/**Segment Id */
let segmentId;
/**Is socket connected */
let isConnected = false;
/**Scrip Token */
let token;
/**User Id */
let userId;
/**Session Id */
let sessionId;
/**To store socket data */
let onRealtimeCallbackData
/**To store messages */
let messageQueue = []
/**Last response object from history API */
let lastDataPoint = null;
let api = new API_URLS()

/**
 * Send Stored Queue Messages
 */
let sendQueueMessages = () => {
	let length = messageQueue.length;
	if (messageQueue.length) {
		for (let i = 0; i < length; i++) {
			let message = messageQueue.shift();

			sendMsg(message);
		}
	}
}

/**
 * Check time equality
 * @param {*} newData Socket data
 * @param {*} lastData Last object from chart history
 * @returns if newData & lastData duration is same
 */
// let isTimeEqual = (newData, lastData) => {
// 	let duration = { value: "1", label: "1 min", multiplier: 1, base: "today", startOf: "minute", periodicity: 1, timeUnit: 'minute', index: 0 };
// 	let newTime = new moment(newData).startOf(duration.startOf);
// 	let lastTime = new moment(lastData).startOf(duration.startOf);
// 	return moment.duration(newTime.diff(lastTime)).as(duration.startOf) < Number(duration.periodicity);
// }

/**
 * Send Keep alive request
 */
let keeplive = () => {
	if (navigator.onLine && isConnected && getSessionId()) {
		sendMsg(getKeepAliveRequest());
	}
}

/**
 * Get Keep alive request
 * @returns getKeepAliveRequest
 */
let getKeepAliveRequest = () => {
	let keepAliveRequest = api.getKeepAliveRequestURL()
	return keepAliveRequest.replace('$currentDate', getCurrentDate()).replace('$sessionId', getSessionId() || "")
}

/**
 * Patch socket data to chart
 * @param {*} data Data 
 * @param {*} onRealtimeCallbackF Function to pass socket data 
 */
// let socketDataPatch = (data, onRealtimeCallbackF, isIndex,responseString) => {
// 	if (data[0][1] == segmentId && data[0][7] == token) {
// 		let previousClose = Number(data[0][76]) / Number(data[0][399]);
// 		let ltp = Number(data[0][8] == 0) ? previousClose : Number(data[0][8]) / Number(data[0][399]);
// 		let headsUp = {}
// 		headsUp.Open = (Number(data[0][8]) == 0) ? previousClose : Number(data[0][75]) / Number(data[0][399]);  //if ltp = 0 then show prevclose (24/05/2021)
// 		headsUp.High = (Number(data[0][8]) == 0) ? previousClose : Number(data[0][77]) / Number(data[0][399]); //if ltp = 0 then show prevclose (24/05/2021)
// 		headsUp.Low = (Number(data[0][8]) == 0) ? previousClose : Number(data[0][78]) / Number(data[0][399]); //if ltp = 0 then show prevclose (24/05/2021)
// 		headsUp.Close = previousClose;
// 		headsUp.Volume = Number(data[0][79]);
// 		let socketData = { "DT":data[0][74] /* new moment(data[0][74], 'YYYY-MM-DD HHmmss') */, "Close": ltp, "Open": headsUp.Open, "Low": headsUp.Low, "High": headsUp.High, "Volume": Number(data[0][9]) };
// 		let dataFormated = {}
// 		socketData.Open = socketData.Close;
// 			socketData.High = socketData.Close;
// 			socketData.Low = socketData.Close;
// 			//socketData.Volume = socketData.Volume//lastSocketVolume?socketData.Volume-lastSocketVolume:lastDataPoint.Volume;// socketData.Volume //lastDataPoint.Volume,//

// 			let time = socketData.DT//new moment(socketData.DT).valueOf();
// 			dataFormated = {
// 				time,
// 				low: socketData.Low,
// 				high: socketData.High,
// 				open: socketData.Open,
// 				close: socketData.Close,
// 				volume: socketData.Volume,
// 				responseString:responseString
// 			}
// 		if (isIndex) {
// 			dataFormated.volume = 0;
// 		}
// 		if (onRealtimeCallbackF) {
// 			onRealtimeCallbackF(dataFormated)
// 		} else {
// 		}
// 	}
// }




/**
 * Get Multitouchline request
 * @param {*} symbolInfo Symbol info 
 * @param {*} unsub 1=sub 2=unsub
 * @returns 
 */
let getMultitouchLineRequest = (symbolInfo, unsub) => {
	let data = symbolInfo&&symbolInfo.length?symbolInfo:[{ SegmentId: segmentId, Token: token }]
	let subUnSub = unsub
	let requests = "";
	let userId = getUserId() || "guest";
	if (userId == 'guest') {
		data = data.filter((scrip) => {
			return scrip.SegmentId != 5 && scrip.SegmentId != 6 && scrip.SegmentId != 7;
		});
	}
	let socketMultiTouchlineRequest = api.getMultitouchlineRequestURL()
	data=JSON.parse(JSON.stringify(data))
	data.forEach(element => {
		if (element.SegmentId && element.Token && (requests.indexOf('1=' + element.SegmentId + '$7=' + element.Token + '|') == -1)) {
			requests += (socketMultiTouchlineRequest
				.replace('$segmentId', element.SegmentId)
				.replace('$token', element.Token));
			requests += '|';
		}
	
	});


	let socketHeaderRequest = api.getHeaderRequestURL()
	let socketRequest = socketHeaderRequest.replace('$currentDate', getCurrentDate()).replace('$sessionId', getSessionId() || '').replace('$requests', requests).replace('$subUnSub', subUnSub);
	if (requests.lastIndexOf('|') !== requests.length - 1) alert('pipe not included at last');
	if (socketRequest.indexOf('$currentDate') !== -1) alert('currentDate format error');
	return socketRequest;
}



/**
 * Convert data to object
 * @param {*} data Data 
 * @returns Converted Object
 */
let pipeToObject = (data) => {
	let name;
	let object = {};
	data.substring(1, data.length - 1).split(/\||=/).forEach((item, index) => {
		index % 2 ? (object[name] = item) : (name = item);
	});
	return [object];
};

/**
 * Get User Id
 * @returns User Id
 */
let getUserId = () => {
	return userId ||'guest'
}

/**
 * Get Session Id
 * @returns Session Id
 */
let getSessionId = () => {
	return sessionId
}

/**
 * Set User Id
 * @param {*} userIdData User Id
 */
let setUserId = (userIdData) => {
	userId = userIdData
}

/**
 * Set Session Id
 * @param {*} sessionIdData Session Id
 */
let setSessionId = (sessionIdData) => {
	sessionId = sessionIdData
}

/**
 * Get current date
 * @returns Current Date
 */
let getCurrentDate = () => {
	var d = new Date();
	return formatDate(d,'yyyy-MM-dd HHmmss');
}



/**
 * Format date // PUT IN UTILS FILE
 * @param {*} date 
 * @param {*} format 
 * @param {*} utc 
 * @returns 
 */
let formatDate=(date, format, utc)=> {
    var MMMM = ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var MMM = ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var dddd = ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var ddd = ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    function ii(i, len) {
        var s = i + "";
        len = len || 2;
        while (s.length < len) s = "0" + s;
        return s;
    }

    var y = utc ? date.getUTCFullYear() : date.getFullYear();
    format = format.replace(/(^|[^\\])yyyy+/g, "$1" + y);
    format = format.replace(/(^|[^\\])yy/g, "$1" + y.toString().substr(2, 2));
    format = format.replace(/(^|[^\\])y/g, "$1" + y);

    var M = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
    format = format.replace(/(^|[^\\])MMMM+/g, "$1" + MMMM[0]);
    format = format.replace(/(^|[^\\])MMM/g, "$1" + MMM[0]);
    format = format.replace(/(^|[^\\])MM/g, "$1" + ii(M));
    format = format.replace(/(^|[^\\])M/g, "$1" + M);

    var d = utc ? date.getUTCDate() : date.getDate();
    format = format.replace(/(^|[^\\])dddd+/g, "$1" + dddd[0]);
    format = format.replace(/(^|[^\\])ddd/g, "$1" + ddd[0]);
    format = format.replace(/(^|[^\\])dd/g, "$1" + ii(d));
    format = format.replace(/(^|[^\\])d/g, "$1" + d);

    var H = utc ? date.getUTCHours() : date.getHours();
    format = format.replace(/(^|[^\\])HH+/g, "$1" + ii(H));
    format = format.replace(/(^|[^\\])H/g, "$1" + H);

    var h = H > 12 ? H - 12 : H == 0 ? 12 : H;
    format = format.replace(/(^|[^\\])hh+/g, "$1" + ii(h));
    format = format.replace(/(^|[^\\])h/g, "$1" + h);

    var m = utc ? date.getUTCMinutes() : date.getMinutes();
    format = format.replace(/(^|[^\\])mm+/g, "$1" + ii(m));
    format = format.replace(/(^|[^\\])m/g, "$1" + m);

    var s = utc ? date.getUTCSeconds() : date.getSeconds();
    format = format.replace(/(^|[^\\])ss+/g, "$1" + ii(s));
    format = format.replace(/(^|[^\\])s/g, "$1" + s);

    var f = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
    format = format.replace(/(^|[^\\])fff+/g, "$1" + ii(f, 3));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])ff/g, "$1" + ii(f));
    f = Math.round(f / 10);
    format = format.replace(/(^|[^\\])f/g, "$1" + f);

    var T = H < 12 ? "AM" : "PM";
    format = format.replace(/(^|[^\\])TT+/g, "$1" + T);
    format = format.replace(/(^|[^\\])T/g, "$1" + T.charAt(0));

    var t = T.toLowerCase();
    format = format.replace(/(^|[^\\])tt+/g, "$1" + t);
    format = format.replace(/(^|[^\\])t/g, "$1" + t.charAt(0));

    var tz = -date.getTimezoneOffset();
    var K = utc || !tz ? "Z" : tz > 0 ? "+" : "-";
    if (!utc) {
        tz = Math.abs(tz);
        var tzHrs = Math.floor(tz / 60);
        var tzMin = tz % 60;
        K += ii(tzHrs) + ":" + ii(tzMin);
    }
    format = format.replace(/(^|[^\\])K/g, "$1" + K);

    var day = (utc ? date.getUTCDay() : date.getDay()) + 1;
    format = format.replace(new RegExp(dddd[0], "g"), dddd[day]);
    format = format.replace(new RegExp(ddd[0], "g"), ddd[day]);

    format = format.replace(new RegExp(MMMM[0], "g"), MMMM[M]);
    format = format.replace(new RegExp(MMM[0], "g"), MMM[M]);

    format = format.replace(/\\(.)/g, "$1");

    return format;
}

/**
 * Socket Logon Request
 * @returns SocketLogonRequest
 */
let getSocketLogonRequest = () => {
	let userId = getUserId() || "guest";
	let socketLogonRequest = api.getLogonRequestURL()
	return socketLogonRequest
		.replace('$currentDate', getCurrentDate())
		.replace('$userId', userId == 'guest' ? getSessionId() : userId);
}

/**
 * Send Socket request
 * @param {*} message Message
 */
let sendMsg = (message) => {
	if (socket && isConnected && socket.readyState) {
		let requestByte = new TextEncoder().encode(message);
		let compressedRequest = pako.deflate(requestByte);
		let requestHeader = Array(5 - String(compressedRequest.length).length + 1).join("" || '0') + compressedRequest.length;
		let headerByte = new TextEncoder().encode(requestHeader);
		let uIntArray = new Uint8Array(headerByte.length + compressedRequest.length + 1);
		uIntArray[0] = 5;
		for (var i = 0; i < headerByte.length; i++)
			uIntArray[i + 1] = headerByte[i];
		for (var j = 0; j < compressedRequest.length; j++)
			uIntArray[j + headerByte.length + 1] = compressedRequest[j];
		socket.send(uIntArray)
	} else {
		messageQueue.push(message);
	}
}

/**
 * Close socket
 */
// let close = () => {
// 	if (socket && isConnected) {
// 		socket.close();
// 		keepAliveInterval = null;
// 		isConnected = false;
// 		messageQueue = [];
// 	}
// }

/**
 * Reconnect socket
 */
let reconnect = () => {

	if (navigator.onLine && !reconnectObservable && getSessionId()) {
		reconnectObservable = interval(reconnectInterval).pipe(takeWhile((value, index) => {
			return index < reconnectAttempts && !isConnected;
		}));
		reconnectObservable.subscribe(() => {
			let userId = getUserId() || "guest";
			if (userId) {
				socket = new W3CWebSocket('wss://brd.choiceindia.co.in:4520')
				socket.binaryType = "arraybuffer"
				let message = getSocketLogonRequest()
				sendMsg(message)
			}
		},
			null,
			() => {
				if (!socket) {
					keepAliveInterval = null;
					isConnected = false;
				}
			})
	}
}

/**
 * Subscribe Socket
 * @param {*} symbolInfo Symbol detail
 * @param {*} resolution resolution 
 * @param {*} onRealtimeCallback To pass socket data into
 * @param {*} subscribeUID subscribeUID
 * @param {*} onResetCacheNeededCallback onResetCacheNeededCallback
 * @param {*} lastDailyBar Last history response bar 
 * @param {*} userIdData User ID
 * @param {*} sessionIdData Session Id
 * @param {*} socketUrl Socket URL
 */
export function subscribeOnStream(
	segmentId_rec,
	token_rec,
	onRealtimeCallback,
	userIdData,
	sessionIdData,
	isIndex
) {
	let socketUrl='wss://brd.choiceindia.co.in:4520'
	/* let split_symbol = symbolInfo.name.split(/[:/]/); */
	//let symbol = split_symbol[0]
	segmentId = segmentId_rec
	token = token_rec
	setUserId(userIdData)
	setSessionId(sessionIdData)
	//lastDataPoint = lastDailyBar
	onRealtimeCallbackData = onRealtimeCallback;

	if (!socket || socket.url !== socketUrl) {
		socket = new W3CWebSocket(socketUrl)
		socket.binaryType = "arraybuffer"

		socket.onopen = (() => {

			isConnected = true;
			setTimeout(() => {
				if (getSessionId()) {

					sendQueueMessages()
				}
				reconnectObservable = null;
				if (!keepAliveInterval) {
					keepAliveInterval = interval(30000).pipe(takeWhile((value, index) => { return isConnected; }))
					keepAliveInterval.subscribe(() => {
						keeplive();
					}, null, () => {
						keepAliveInterval = null;
					});
				}
			}, 1000);
		});

		socket.onclose = ((reason) => {
			isConnected = false;
			socket = new W3CWebSocket(socketUrl)
			socket.binaryType = "arraybuffer"
		});

		socket.onerror = ((error) => {
			setTimeout(() => reconnect(), reconnectInterval);
		});

		socket.onmessage = (msg => {
			let currentByteArray = new Uint8Array(msg.data);
			let tempArray = new Uint8Array(bufferArray.byteLength + currentByteArray.byteLength);
			tempArray.set(bufferArray, 0);
			tempArray.set(currentByteArray, bufferArray.byteLength);
			let byteArrayLength = tempArray.byteLength;
			let startIndex = 0; let endIndex = 0;
			bufferArray = new Uint8Array(0);
			let isCompressed = true;
			do {
				isCompressed = tempArray.slice(startIndex, startIndex + 1)[0] == 5;
				let header = tempArray.slice(startIndex + 1, startIndex + 6);
				let headerLength = Number(new TextDecoder("utf-8").decode(header));
				endIndex = endIndex + headerLength + 6;
				if (endIndex > tempArray.byteLength) {
					bufferArray = new Uint8Array(tempArray.slice(startIndex));
					break;
				}
				let message = isCompressed ? pako.inflate(tempArray.slice(startIndex + 6, endIndex)) :

					tempArray.slice(startIndex + 6, endIndex);
				let responseString = new TextDecoder("utf-8").decode(message);
				startIndex = endIndex;
				setTimeout((responseString) => {

					if (responseString.indexOf('64=209') > -1) {
						responseString = responseString.replace(/\$/g, "|");
						onRealtimeCallbackData({responseString:responseString})
//						socketDataPatch(pipeToObject(responseString), onRealtimeCallbackData, isIndex,responseString)
					} else if (responseString.indexOf('64=128') > -1) {
						onRealtimeCallbackData({responseString:responseString})
//						socketDataPatch(pipeToObject(responseString), onRealtimeCallbackData, isIndex,responseString)
					} else if (responseString.indexOf('64=155') > -1) {
					}
				}, 10, responseString);

			} while (endIndex < byteArrayLength);

		});

		setTimeout(() => {
			let message = getSocketLogonRequest()
		
			sendMsg(message)
			let mulReq=getMultitouchLineRequest([], 1)
		
			sendMsg(mulReq)
		}, 500);
	}

}




export function unSubscribeMultitouchline(data) {
    if (data && data.length > 0) {
			sendMsg(getMultitouchLineRequest(data, "2"))
     // this.socket.send();
     
    }
  }

export function subscribeMultitouchline(tokenList,onRealtimeCallback,sessionIdData){
	//subscribeOnStream(1,8866,onRealtimeCallback,'guest',session,false)

	let socketUrl='wss://brd.choiceindia.co.in:4520'
	/* let split_symbol = symbolInfo.name.split(/[:/]/); */
	//let symbol = split_symbol[0]
	setSessionId(sessionIdData)
	onRealtimeCallbackData = onRealtimeCallback;

	if (!socket || socket.url !== socketUrl) {
		socket = new W3CWebSocket(socketUrl)
		socket.binaryType = "arraybuffer"

		socket.onopen = (() => {
			isConnected = true;
			setTimeout(() => {
				if (getSessionId()) {
					sendQueueMessages()
				}
				reconnectObservable = null;
				if (!keepAliveInterval) {
					keepAliveInterval = interval(30000).pipe(takeWhile((value, index) => { return isConnected; }))
					keepAliveInterval.subscribe(() => {
						keeplive();
					}, null, () => {
						keepAliveInterval = null;
					});
				}
			}, 1000);
		});

		socket.onclose = ((reason) => {
			isConnected = false;
			socket = new W3CWebSocket(socketUrl)
			socket.binaryType = "arraybuffer"
		});

		socket.onerror = ((error) => {
			setTimeout(() => reconnect(), reconnectInterval);
		});

		socket.onmessage = (msg => {
			let currentByteArray = new Uint8Array(msg.data);
			let tempArray = new Uint8Array(bufferArray.byteLength + currentByteArray.byteLength);
			tempArray.set(bufferArray, 0);
			tempArray.set(currentByteArray, bufferArray.byteLength);
			let byteArrayLength = tempArray.byteLength;
			let startIndex = 0; let endIndex = 0;
			bufferArray = new Uint8Array(0);
			let isCompressed = true;
			do {
				isCompressed = tempArray.slice(startIndex, startIndex + 1)[0] == 5;
				let header = tempArray.slice(startIndex + 1, startIndex + 6);
				let headerLength = Number(new TextDecoder("utf-8").decode(header));
				endIndex = endIndex + headerLength + 6;
				if (endIndex > tempArray.byteLength) {
					bufferArray = new Uint8Array(tempArray.slice(startIndex));
					break;
				}
				let message = isCompressed ? pako.inflate(tempArray.slice(startIndex + 6, endIndex)) :

					tempArray.slice(startIndex + 6, endIndex);
				let responseString = new TextDecoder("utf-8").decode(message);
				startIndex = endIndex;
				setTimeout((responseString) => {

					if (responseString.indexOf('64=209') > -1) {
						responseString = responseString.replace(/\$/g, "|");
						onRealtimeCallbackData({responseString:responseString})
//						socketDataPatch(pipeToObject(responseString), onRealtimeCallbackData, isIndex,responseString)
					} else if (responseString.indexOf('64=128') > -1) {
						onRealtimeCallbackData({responseString:responseString})
//						socketDataPatch(pipeToObject(responseString), onRealtimeCallbackData, isIndex,responseString)
					} else if (responseString.indexOf('64=155') > -1) {
					}
				}, 10, responseString);

			} while (endIndex < byteArrayLength);

		});

		setTimeout(() => {
			let message = getSocketLogonRequest()
			sendMsg(message)

			let mulReq=getMultitouchLineRequest(tokenList, 1)
			sendMsg(mulReq)
		}, 500);
	}

}


/**
 * Unsubscribe from socket
 * @param {*} subscriberUID subscriberUID
 */
export function unsubscribeFromStream(subscriberUID) {
	let unSubMul=getMultitouchLineRequest(subscriberUID, 2)
	sendMsg(unSubMul)
}

/**
 * Pause socket request
 * @param {*} isPause 1=pause 2=unpause
 */
export function pauseOrResumeRequest(isPause) {
	let request = getPauseOrResumeRequest(isPause ? '1' : '2');
	setTimeout(() => sendMsg(request), 300);
}

/**
 * Get Pause Resume URL
 * @param {*} subUnSub 
 * @returns Pause Resume URL
 */
let getPauseOrResumeRequest = (subUnSub) => {
	let pauseResumeRequest = api.getPauseResumeRequestURL()
	return pauseResumeRequest.replace('$currentDate', getCurrentDate()).replace('$subUnSub', subUnSub).replace('$sessionId', getSessionId() || ""); // added session id in pauseResume Request (09/03/2021)
}
