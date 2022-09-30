const language = {
    
    en: {
        title: 'Open Account Now',
        moblbl: 'Mobile Number',
        invalidmob: 'Invalid Mobile Number',
        reqmob: 'Mobile Number is Required',
        otpbtn: 'Send OTP',
        otpmodalheader: 'OTP Verification',
        otplbl: 'A OTP has been sent to',
        otptextbox: 'Enter OTP',
        otprequired: 'OTP is required',
        otperror: 'Something went wrong, please try again later!',
        otpverifybtn: 'Verify',
        otpresend: 'Get OTP SMS',
        otportext: 'OR',
        otponcall: 'Get OTP on Call',
        otptime: 'Resend OTP in',
        otpsec: 'seconds',
        termsheader: 'Attention',
        terms: "We are capturing this data for communication purpose only and it's stored securely. We protect your privacy like it's ours! By agreeing you are allowing us to send updates via SMS/WhatsApp/Email/Call which will also override & will not be termed as violation of DND.",
        termsbtn: 'Okay',
        otpresendsuccess1: 'You will soon receive an automated call on given Mobile Number',
        otpresendsuccess2: 'OTP has been resent on given Mobile Number'
    },
    hindi: {
        title: 'मुफ़्त ट्रेडिंग खाता खोलें',
        moblbl: 'मोबाइल नंबर',
        invalidmob: 'वैध मोबाइल नंबर दर्ज करें',
        reqmob: 'मोबाइल नंबर आवश्यक है',
        otpbtn: 'OTP भेजें',
        otpmodalheader: 'OTP सत्यापन',
        otplbl: 'ओटीपी भेज दिया गया है',
        otptextbox: 'ओटीपी दर्ज करें',
        otprequired: 'ओटीपी आवश्यक है',
        otperror: 'कुछ गलत हो गया है। कृपया बाद में दोबारा प्रयास करें!',
        otpverifybtn: 'सत्यापित करें',
        otpresend: 'एसएमएस ओटीपी',
        otportext: 'या',
        otponcall: 'कॉल पर ओटीपी प्राप्त करें',
        otptime: 'ओटीपी फिर से भेजें',
        otpsec: 'सेकंड',
        termsheader: 'ध्यान दें',
        terms: 'हम यह डेटा केवल संचार के उद्देश्य से ले रहे हैं और इसे सुरक्षित रूप से संग्रहीत किया जाएगा। हम आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध हैं, इससे सहमत होकर आप हमें एसएमएस/व्हाट्सएप/ईमेल/कॉल के माध्यम से अपडेट भेजने की अनुमति दे रहे हैं और इसे डीएनडी का उल्लंघन नहीं कहा जाएगा।.',
        termsbtn: 'ठीक है',
        otpresendsuccess1: 'आपको दिए गए मोबाइल नंबर पर जल्द ही एक स्वचालित कॉल प्राप्त होगी',
        otpresendsuccess2: 'दिए गए मोबाइल नंबर पर OTP भेजा गया है'
    },
    marathi: {
        title: 'मोफत डिमॅट अकाऊंट',
        moblbl: 'मोबाईल क्रमांक',
        invalidmob: 'वैध मोबाइल नंबर टाका',
        reqmob: 'मोबाईल नंबर आवश्यक आहे',
        otpbtn: 'OTP पाठवा',
        otpmodalheader: 'OTP पडताळणी',
        otplbl: 'OTP पाठवला आहे',
        otptextbox: 'OTP प्रविष्ट करा',
        otprequired: 'OTP आवश्यक आहे',
        otperror: 'काहीतरी चुकीचे घडले आहे, कृपया थोड्यावेळाने प्रयत्न करा!',
        otpverifybtn: 'सत्यापित करा',
        otpresend: 'SMS द्वारे OTP मिळवा',
        otportext: 'किंवा',
        otponcall: 'कॉलवर ओटीपी मिळवा',
        otptime: 'मध्ये OTP पुन्हा पाठवा',
        otpsec: 'सेकंद',
        termsheader: 'लक्ष द्या',
        terms: 'आम्ही आपला सर्व डेटा केवळ माहितीसाठी संकलित करित असून, तुमची माहिती आमच्याकडे पूर्णपणे सुरक्षित आहे. तसेच आम्ही तुमच्या माहितीच्या गोपनीयतेचे संरक्षण करतो. तुमच्या संमतीने आम्ही तुम्हाला SMS/ Whatsapp/ Email/ Call द्वारे अपडेट पाठवत आहोत. ज्यामुळे अधिलिखित (override) किंवा DND चे कुठेही उल्लंघन होणार नाही.',
        termsbtn: 'ठीक आहे',
        otpresendsuccess1: 'तुम्हाला दिलेल्या मोबाईल नंबरवर लवकरच एक स्वयंचलित कॉल प्राप्त होईल',
        otpresendsuccess2: 'दिलेल्या मोबाईल नंबरवर OTP पुन्हा पाठवला गेला आहे'
    }
};

const OpenAccountLanguageContent = {
    getContent: function (lang, field) {
        return language[lang][field];
    }
}

export default OpenAccountLanguageContent;