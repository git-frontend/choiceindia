import NewsImage0 from '../../assets/images/news-media/what-choice-represents.webp';
import NewsImage1 from '../../assets/images/news-media/video-play.webp';
import CareerImage2 from '../../assets/images/career/job-opportunity.webp';
import CareerImage3 from '../../assets/images/career/work-culture.webp';
import CareerImage4 from '../../assets/images/career/presentation.webp';
import CareerImage5 from '../../assets/images/career/appreciation.webp';
import CareerImage6 from '../../assets/images/career/team-work.webp';

import '././media.scss';
import LazyLoader from '../Common-features/LazyLoader';

function NewsMedia() {
  return (
    <>
      <div>
        <div className='media-banner'>
          {/* <div className="container">
                  <div className="row">
                      <div className="col-md-12">
                        <h1 className='title-first'>Disclaimer</h1>
                      </div>
                  </div>
              </div> */}


          <div className="container">

            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <div className="youtube-play">
                    <LazyLoader src={NewsImage0} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                    do you know what choice represents ?

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsMedia;