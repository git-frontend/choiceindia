const environment = 'UAT';

const config = {
    UATBaseURL: 'https://sso-api.choicetechlab.com/',
    LiveBaseURL: 'https://sso-api.choiceindia.com/'
};

const serverBaseURL = config[environment + 'BaseURL'];
const sendOTPURL = 'sign-up';
const resendOTPURL = 'resend-otp';
const OTPOnCallURL = 'otp-on-call';
const verifyOTPURL = 'verify-otp';
const headers = {
    'Accept': 'application.json',
    'Content-Type': 'application/json'
};

function getSendOTPURL() {
    return serverBaseURL + sendOTPURL;
}

function getResendOTPURL() {
    return serverBaseURL + resendOTPURL;
}

function getOTPOnCallURL() {
    return serverBaseURL + OTPOnCallURL;
}

function getVerifyOTPURL() {
    return serverBaseURL + verifyOTPURL;
}

export function sendOTP(request) {
    let url = getSendOTPURL();
    return fetch(url, {
        method: 'POST', headers: headers, body: JSON.stringify(request)
    });
}

export function resendOTPAgain(request) {
    let url = getResendOTPURL();
    return fetch(url, {
        method: 'POST', headers: headers, body: JSON.stringify(request)
    });
}

export function OTPOnCall(request) {
    let url = getOTPOnCallURL();
    return fetch(url, {
        method: 'POST', headers: headers, body: JSON.stringify(request)
    });
}

export function verifyOTP(request) {
    let url = getVerifyOTPURL();
    return fetch(url, {
        method: 'POST', headers: headers, body: JSON.stringify(request)
    });
}



