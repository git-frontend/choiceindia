import React, { useEffect, useState } from "react";
import homeServices from '../../Services/homeServices';


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
        if (trigger===true) {
            loadPrimarybanner();
        }

    }, [trigger])


    return (
        <div>
            {
                primary.map((response) => {

                    return (

                        <section key={response.id} className="home-banner">
                            <img src={`https://cmsapi.choiceindia.com/assets/${response.images}`} className="banner-img" alt="Loading" />
                            <div className="banner-desc">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="banner-caption">
                                                <h1>{response.title}</h1>
                                                <h1>{response.description}</h1>
                                            </div>
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
