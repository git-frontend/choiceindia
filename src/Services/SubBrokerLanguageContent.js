const language = {
    
    hindi: {
        title: 'सब ब्रोकर बनें',
        namelbl: 'नाम',
        moblbl: 'मोबाइल नंबर',
        emaillbl: 'ईमेल',
        citylbl: 'शहर का चयन करें',
        statelbl: 'राज्य खोजें',
        namelblerror1: 'अमान्य नाम',
        namelblerror2: 'अपना नाम दर्ज करें',
        moblblerror1: 'अमान्य मोबाइल नंबर',
        moblblerror2: '10 अंकों का मोबाइल नंबर दर्ज करें',
        emaillblerror1: 'अपना ईमेल दर्ज करें',
        emaillblerror2: 'अमान्य ईमेल',
        citylblerror1: 'शहर का चयन आवश्यक है',
        statelblerror1: 'राज्य का चयन आवश्यक है',
        sendotpbtn: 'OTP भेजें',
        termstitle: 'ध्यान दें',
        termscontent: 'हम यह डेटा केवल संचार के उद्देश्य से ले रहे हैं और इसे सुरक्षित रूप से संग्रहीत किया जाएगा। हम आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध हैं, इससे सहमत होकर आप हमें एसएमएस/व्हाट्सएप/ईमेल/कॉल के माध्यम से अपडेट भेजने की अनुमति दे रहे हैं और इसे डीएनडी का उल्लंघन नहीं कहा जाएगा।',
        termsbtn: 'ठीक है',
        otppopuptitle: 'कृपया अपना मोबाइल नंबर सत्यापित करने के लिए ओटीपी दर्ज करें',
        otppopupinfo: 'ओटीपी भेज दिया गया है',
        otppopuptimeremaining: 'ओटीपी फिर से भेजें:',
        otppopupbtn: 'सत्यापित करें',
        otppopupresend: 'ओटीपी पुन: भेजें',
        otperror1: 'ओटीपी आवश्यक है',
        otperror2: 'कुछ गलत हो गया है। कृपया बाद में दोबारा प्रयास करें!',
        otptoastermsg: 'दिए गए मोबाइल नंबर पर ओटीपी भेजा गया है',
        formsuccess: 'सफलतापूर्वक!',
        term1:'मैं सहमत हूं कि मैंने',
        term2: 'को पढ़ और स्वीकार कर लिया है',
        termconditionlink:'नियम और शर्तों'
    },

    mutualDistributorhindi: {
        title: 'म्यूचुअल फंड एजेंट बने',
        namelbl: 'नाम',
        moblbl: 'मोबाइल नंबर',
        emaillbl: 'ईमेल',
        citylbl: 'शहर का चयन करें',
        statelbl: 'राज्य खोजें',
        namelblerror1: 'अमान्य नाम',
        namelblerror2: 'अपना नाम दर्ज करें',
        moblblerror1: 'अमान्य मोबाइल नंबर',
        moblblerror2: '10 अंकों का मोबाइल नंबर दर्ज करें',
        emaillblerror1: 'अपना ईमेल दर्ज करें',
        emaillblerror2: 'अमान्य ईमेल',
        citylblerror1: 'शहर का चयन आवश्यक है',
        statelblerror1: 'राज्य का चयन आवश्यक है',
        sendotpbtn: 'OTP भेजें',
        termstitle: 'ध्यान दें',
        termscontent: 'हम यह डेटा केवल संचार के उद्देश्य से ले रहे हैं और इसे सुरक्षित रूप से संग्रहीत किया जाएगा। हम आपकी गोपनीयता की रक्षा के लिए प्रतिबद्ध हैं, इससे सहमत होकर आप हमें एसएमएस/व्हाट्सएप/ईमेल/कॉल के माध्यम से अपडेट भेजने की अनुमति दे रहे हैं और इसे डीएनडी का उल्लंघन नहीं कहा जाएगा।',
        termsbtn: 'ठीक है',
        otppopuptitle: 'कृपया अपना मोबाइल नंबर सत्यापित करने के लिए ओटीपी दर्ज करें',
        otppopupinfo: 'ओटीपी भेज दिया गया है',
        otppopuptimeremaining: 'ओटीपी फिर से भेजें:',
        otppopupbtn: 'सत्यापित करें',
        otppopupresend: 'ओटीपी पुन: भेजें',
        otperror1: 'ओटीपी आवश्यक है',
        otperror2: 'कुछ गलत हो गया है। कृपया बाद में दोबारा प्रयास करें!',
        otptoastermsg: 'दिए गए मोबाइल नंबर पर ओटीपी भेजा गया है',
        formsuccess: 'सफलतापूर्वक!',
        term1:'मैं सहमत हूं कि मैंने',
        term2: 'को पढ़ और स्वीकार कर लिया है',
        termconditionlink:'नियम और शर्तों'
    }
};

const SubBrokerLanguageContent = {
    getContent: function (lang, field, engmsg) {
        return (language[lang] && language[lang][field]) || engmsg;
    }
}

export default SubBrokerLanguageContent;
