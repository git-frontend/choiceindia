import './privacypolicy.scss';
import { Link } from 'react-router-dom';

function PrivacyPolicy() {
  return (
      <>
      <div>
          <div className='seo-privacy-policy-div'>
              <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                        <h1 className='title-first'>Privacy Policy</h1>
                      </div>
                  </div>
              </div>
          </div>

          <div className="privacy-policy-content-div">
              <div className="container">
              <div className="privacy-policy-content">
                  <p>
                      This privacy statement is applicable to <Link to="/">www.choiceindia.com</Link>
                  </p>

                  <p>
                  <Link to="/">www.choiceindia.com</Link> does not collect personal information
                      about individuals except when such individuals specifically
                      provide such information on a voluntary basis.
                  </p>

                  <p>
                  <Link to="/">www.choiceindia.com</Link> is and attempts to be to sensitive to your privacy
                      on the Internet. Whenever possible, Choiceindia will attempt to
                      treat the information about you it receives on the Internet with
                      care deemed reasonable under the circumstances. Choiceindia uses
                      information provided by you (if any) to measure the use of our site
                      and to improve the content of our site. The personal information we
                      may collect is used only by us to respond to your inquiry, we
                      may make the e-mail addresses, of those who provide information,
                      available to other Choiceindia companies which have equal or
                      better privacy policy than we do. At times cookies may be used to
                      provide you with certain information. A cookie is a tiny element of
                      data that a web site can send to your browser, which may then be
                      stored on your hard drive so we can recognize you when you return.
                      You may set your browser to notify you when you receive a cookie.
                  </p>
                  <p><strong>Note</strong>
                      : Also that Choiceindia's Website contain links to other
                      sites. While we try to link only to sites that have respect
                      for privacy, we are not responsible for the
                      content or the privacy practices employed by other sites.</p>
              </div>
              </div>
          </div>
        </div>
      </>
  )
}

export default PrivacyPolicy;