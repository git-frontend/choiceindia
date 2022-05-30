import React, { useEffect, useState } from "react";
import homeServices from '../../Services/homeServices';

// import { LazyLoadImage } from 'react-lazy-load-image-component';
// import 'react-lazy-load-image-component/src/effects/blur.css';

function HomePageBanner() {

    const [primary, setPrimary] = useState([]);
    const [trigger, setTrigger] = useState(false);

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

                                                <h1>{response.title}</h1>
                                                <h1>{response.description}</h1>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <img src={`https://cmsapi.choiceindia.com/assets/${response.images}`} className="banner-img" alt="Loading" />
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
