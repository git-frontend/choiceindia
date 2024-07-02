import CryptoJS from "crypto-js";


const utils ={
/**
 * Format date // PUT IN UTILS FILE
 * @param {*} date 
 * @param {*} format 
 * @param {*} utc 
 * @returns 
 */
 formatDate:(date, format, utc)=> {
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
    function ordinal_suffix_of(i) {
        var j = i % 10,
            k = i % 100;
        if (j == 1 && k != 11) {
            return i + "st";
        }
        if (j == 2 && k != 12) {
            return i + "nd";
        }
        if (j == 3 && k != 13) {
            return i + "rd";
        }
        return i + "th";
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
},

    scrollToId: (id) => {
        var element = document.getElementById(id);
        if (element) {
            var headerOffset = 140;
            var elementPosition = element.getBoundingClientRect().top;
            var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    },

   generateTokens(data, segmentKey, tokenKey) {
        let tokens = "";
       
        segmentKey = segmentKey || "SegmentId";
        tokenKey = tokenKey || "Token";
        for (let i = 0; i < data.length; i++) {
          if (data[i][segmentKey] && data[i][tokenKey]) {
            tokens += data[i][segmentKey] + "@" + data[i][tokenKey] + ",";
            // console.log("segment key",segmentKey)
          }
        }
        return tokens.substring(0, tokens.length - 1);
      },

    /**Function to decrypt encrypted data */
    decryptText(text){
        if (text) {
            let key = CryptoJS.enc.Utf8.parse('2b7e151628aed2a6abf7158809cf4f3c');
            let iv = CryptoJS.enc.Utf8.parse('3ad77bb40d7a3660');
            let config = { keySize: 128, iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 };
            try {
                let encPassword = CryptoJS.AES.decrypt(text, key, config);
                return encPassword.toString(CryptoJS.enc.Utf8);
            } catch (err) {
                try {
                    return JSON.parse(text)
                } catch (err1) {
                    return text || ''
                }
            }
        } else {
            return ''
        }
    },
      

    /**push event using datalayer */
    pushDataLayerEvent (eventData) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(eventData);
    },

    /**Secure mobile number for user events in GA4 */
    generateSHA256Hash(input){
        if(input){
            return CryptoJS.SHA256(input).toString();
        }else{
            return "";
        }
    },
     encryptText(plainText) {
        if (!plainText) return ''
        let key = CryptoJS.enc.Utf8.parse('2b7e151628aed2a6abf7158809cf4f3c');
        let iv = CryptoJS.enc.Utf8.parse('3ad77bb40d7a3660');
        let config = { keySize: 128, iv: iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 };
        let encPassword = CryptoJS.AES.encrypt(plainText, key, config);
        return encPassword.ciphertext.toString(CryptoJS.enc.Base64);
      },
    isMobileDevice() {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    }

}

export default utils;
