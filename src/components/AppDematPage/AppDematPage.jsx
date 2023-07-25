
import DematAccountForm from "../Common-features/DematAccountForm";
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import './appdematpage.scss';

function AppDematPage(){

    return(
        <>  
        
        <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
                <DematAccountForm />
            </GoogleReCaptchaProvider>
        </>
    )
}

export default AppDematPage;