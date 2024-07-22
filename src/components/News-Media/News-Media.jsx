import NewsImage0 from '../../assets/images/news-media/what-choice-represents.webp';
import NewsImage1 from '../../assets/images/news-media/video-play.webp';
import CareerImage2 from '../../assets/images/news-media/assets.webp';
import CareerImage3 from '../../assets/images/news-media/save-water.png';
import CareerImage4 from '../../assets/images/news-media/bit-coin.webp';
import CareerImage5 from '../../assets/images/news-media/newspaper.webp';
import CareerImage6 from '../../assets/images/news-media/laptop.webp';
import bannerimg from '../../assets/images/news-media/banner-img.webp';
import { useState,useEffect } from 'react';
import meta_tags from '../../Data/MetaTags';
import '././media.scss';
import LazyLoader from '../Common-features/LazyLoader';

function NewsMedia() {
  const [rendercount, setRenderCount] = useState(() => false);

  useEffect(() => {
    setRenderCount(true)
    if (rendercount === true) {
      document.title = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].title : '';
      document.getElementById('meta-tags').content = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].content : '';
      document.getElementById('canonical-link').href = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].link : '';
      document.getElementById('language').lang = meta_tags[location.pathname.replace('/', "")] ? meta_tags[location.pathname.replace('/', "")].lang : '';
      if(!(document.getElementById('link1')==null)){
        document.getElementById('link1').remove();
      document.getElementById('link2').remove();
      document.getElementById('link3').remove();
      document.getElementById('link4').remove();
      document.getElementById('link5').remove();
      document.getElementById('link6').remove();
      
      }
    }
  }, [rendercount])

  return (
    <>
      <div>


      
			<div className="container">
			<div className="row">
						<div className="col-md-12">
            <h1 className='text-center mt-5 mb-5 title-first'>Choice Broking Media</h1>
						</div>
					</div>
			</div>
		

        <div className='media-banner'>
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-4 mb3">
                <div className="card">
                  <div className="youtube-play">
                    <LazyLoader src={NewsImage0} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                    do you know what choice represents ?

                  </div>
                </div>
              </div>
              <div className="col-md-4 mb3">
                <div className="card">
                  <div className="youtube-play">
                    <LazyLoader src={CareerImage2} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  Wealth Creation Ideas to Increase Your Assets

                  </div>
                </div>
              </div>
              <div className="col-md-4 mb3">
                <div className="card">
                  <div className="youtube-play">
                    <LazyLoader src={CareerImage3} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  save water save life

                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-7">
              <div className="col-md-4 mb3">
                <div className="card">
                  <div className="youtube-play">
                    <LazyLoader src={CareerImage4} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                    do you know what choice represents ?

                  </div>
                </div>
              </div>
              <div className="col-md-4 mb3">
                <div className="card">
                  <div className="youtube-play">
                    <LazyLoader src={CareerImage5} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  Wealth Creation Ideas to Increase Your Assets

                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="youtube-play">
                    <LazyLoader src={CareerImage6} className={'img-fluid '} width={"400"} height={"400"} alt={""} />

                  </div>
                  <div className="card-footer">
                  save water save life

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