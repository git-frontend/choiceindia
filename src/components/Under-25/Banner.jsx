import {useState,useEffect} from 'react';
import DematForm from './DematForm';
import  BannerImg  from '../../assets/images/under-25/banner.png';

function Banner() {

  function chapterScroll(id) {
    var element = document.getElementById(id);
    var headerOffset = 140;
    var elementPosition = element.getBoundingClientRect().top;
    var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
  const [name, setName ] = useState('hideform');
  const getPosition = () => {
    const element = document.getElementById("showForm");
    if(element){
        const rect = element.getBoundingClientRect();
        
        if(rect.top.toFixed() < 259){
            setName('visibleform');
        }else{
            setName('hideform');
        }   
    }
};

  useEffect(() => {
    window.addEventListener('scroll', getPosition);
}, []);
  return (
    <>
        <section className='banner-sec'>
              <div className='container'>
                  <div className='row'>
                    <div className='col-md-12'>
                       <div className='banner-form'>
                          <div className='left-sect'>
                            <div className='banner-caption'>
                              <h1>Under 25 just <br />got an upgrade.</h1>
                              <p>The Finapp built for Gen Z.</p>
                            </div>
                          </div>
                          <div className='right-sect'>
                            <DematForm />
                          </div>
                       </div>
                    </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Banner