import React, { useEffect, useState } from "react";
import homeServices from '../../Services/homeServices';
import LazyLoader from '../Common-features/LazyLoader';
import ImageT from '../../assets/images/home-banner.webp';

function HomePageBanner() {

    const [primary, setPrimary] = useState([]);
    const [trigger, setTrigger] = useState(false);
    // const [skeleton, setSkeleton] = useState(() => true);

    // setTimeout(() => {
    //     setSkeleton(() => false);
    // }, 3000)

    /** load Home Primary Banner  */
    function loadPrimarybanner() {
        homeServices.homePrimaryBanner().then(
            res => {
                setPrimary(res.data.data);

            }
        )
    };

    /**onInIt Home Primary Banner */
    useEffect(() => {
        setTrigger(true)
        if (trigger === true) {
            loadPrimarybanner();
        }

    }, [trigger])


    return (
        <div>
            {
                primary.map((response) => {


                    return (

                        <section className="home-banner" key={response.id}>
                            <div className="banner-desc">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="banner-caption" >

                                                {/* <h1>{response.title} <br/>{response.description}</h1> */}
                                                <h1>Experience <br />The Joy of Earning</h1>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <LazyLoader src={ImageT} className={"banner-img"} width={"654"} height={"904"} alt={"Loading"} />
                                            {/**<img src={`https://cmsapi.choiceindia.com/assets/${response.image}`} className="banner-img" alt="Loading" />*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    )

                })

            }

        </div>

    );
}

export default HomePageBanner;
