
import Image1 from '../../assets/images/sumeet-bagadia/sumeet-bagadia.webp';
import DematAccountForm from '../Common-features/DematAccountForm'
import LazyLoader from '../Common-features/LazyLoader';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function BannerTop() {



  return (
    <div>
      <section className="bannersec">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-xl-8 col-md-6">
              <div className="wrap-banner">
                <div className="page2-banner-caption">
                  <h1>Sumeet <span> Bagadia</span> </h1>
                  <p>Executive Director and Head of <br />Technical Research at Choice.</p>
                </div>
                <div className="page2-banner-img">
                                  <LazyLoader src={Image1} alt={"Sumeet Bagadia"} width={"512"} height={"508"} className={"img-fluid"} />
                  {/* <img src={Image1} alt="Sumeet Bagadia" width="512" height="508" className="img-fluid" /> */}
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-md-6 d-flex justify-content-end">
            <GoogleReCaptchaProvider reCaptchaKey="6Lc9qf4hAAAAABMa3-oFLk9BAkvihcEhVHnnS7Uz">
              <DematAccountForm />
            </GoogleReCaptchaProvider>
            </div>
          </div>

        </div>
      </section>

      

    </div>
  );
}

export default BannerTop;
