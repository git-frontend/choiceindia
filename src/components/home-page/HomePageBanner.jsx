import React, { useEffect, useState } from "react";
import homeServices from '../../Services/homeServices';
import LazyLoader from '../Common-features/LazyLoader';
import ImageT from '../../assets/images/the-joy-of-earning.webp';
import { Link } from "react-router-dom";

function HomePageBanner() {


    /** scroll id view */

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

    // const [primary, setPrimary] = useState([]);
    // const [trigger, setTrigger] = useState(false);
    // const [skeleton, setSkeleton] = useState(() => true);

    // setTimeout(() => {
    //     setSkeleton(() => false);
    // }, 3000)

    /** load Home Primary Banner  */
    // function loadPrimarybanner() {
    //     homeServices.homePrimaryBanner().then(
    //         res => {
    //             setPrimary(res.data.data);

    //         }
    //     )
    // };

    /**onInIt Home Primary Banner */
    // useEffect(() => {
    //     setTrigger(true)
    //     if (trigger === true) {
    //         loadPrimarybanner();
    //     }

    // }, [trigger])


    return (
        <div>
            {/* {
                primary.map((response) => {


                    return ( */}

                        <section className="home-banner" >
                            <div className="banner-desc">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="banner-caption" >

                                                {/* <h1>{response.title} <br/>{response.description}</h1> */}
                                                <h1>Experience <br />The Joy of Earning</h1>
                                                <p className="pt-5 pb-5">Choice makes it easier for you to handle your own finances. Let's take pleasure in each and every moment of your financial journey with us.</p>
                                                <Link to="/" className="text-md-start text-center cursor-pointer" onClick={()=>{chapterScroll('everydayfin')}} >
                        <span className="btn-bg">Explore Now</span>
                      </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <LazyLoader src={ImageT} className={"banner-img"} width={"654"} height={"904"} alt={"The Joy of Earning"} />
                                            {/**<img src={`https://cmsapi.choiceindia.com/assets/${response.image}`} className="banner-img" alt="Loading" />*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    {/* )

                })

            } */}

        </div>

    );
}

export default HomePageBanner;
