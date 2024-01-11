import { useState, useEffect } from "react";
import Image1 from '../../assets/images/basket/large-cap-stars.svg';
import Image2 from '../../assets/images/basket/alpha-auto.svg';
import Image3 from '../../assets/images/basket/supermarket.svg';
import Image4 from '../../assets/images/basket/mighty-it.svg';
import LazyLoader from "../Common-features/LazyLoader";

function BasketLand() {

    let values;
    const [value, setValue] = useState({});

    useEffect(() => {
        generateSessionId();
        // loadDeferredIframe();
    }, [])

    /** Generate Session ID */
    function generateSessionId() {
        fetch('https://finx.choiceindia.com/api/settings/GenKey')
            .then(response => {
                return response.json();
            })
            .then(res => {
                let unique = res.Response
                var myHeaders = new Headers();
                myHeaders.append("authorization", `${unique} ${unique}`);
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    redirect: 'follow'
                };
                fetch('https://finx.choiceindia.com/api/jiffy/Basket/List', requestOptions)
                    .then(response => {
                        return response.json();
                    })
                    .then(res => {
                        values = res.Response.baskets;

                        let basketFormatted = {}

                        values.forEach(ele => {
                            basketFormatted[ele.name] = ele

                        })
                        setValue(basketFormatted);

                    });
            })

    }

    /** Load Youtube Video */
    // function loadDeferredIframe() {
    //     setTimeout(() => {
    //         let iframe = document.getElementById("my-deferred-iframe");
    //         iframe.src = 'https://www.youtube.com/embed/WrL6Ihbg8LU';
    //     }, 3000);
    // }
    


    return (
        <>
            <div className="baskets-features-list" id="basketInvest">
                <div className="feature-item" >
                    <LazyLoader className={"img-fluid"} width={'77'} height={'77'} alt={"Loading"} src={Image1} />
                    {/* <img className="img-fluid" alt="Loading" src={Image1} loading="lazy" /> */}
                    <h4>Large Cap Stars</h4>
                    <div><p>The Large Cap Stars basket selects Large Cap stocks on a factor investing framework from the
                        Nifty100 Index. The stocks are carefully selected on a factor-based approach encompassing smart
                        beta factors.</p></div>
                    <h5>Minimum Investment - <span>Rs. {value['Large Cap Stars'] ? value['Large Cap Stars'].minamt : 0}/-</span></h5>

                </div>
                <div className="feature-item">
                    <LazyLoader className={"img-fluid"} width={'77'} height={'77'} alt={"Loading"} src={Image2} />
                    {/* <img className="img-fluid" alt="Loading" src={Image2} loading="lazy" /> */}
                    <h4>Alpha Auto Ancillaries</h4>
                    <div><p>The Auto Ancillaries Alpha (“AAA”) sectoral basket selects automobile parts manufacturing stocks
                        on a factor investing framework. The stocks are carefully selected on a factor-based approach
                        encompassing smart beta factors and liquidity factors. </p></div>
                    <h5>Minimum Investment - <span>Rs. {value['Alpha Auto Ancillaries'] ? value['Alpha Auto Ancillaries'].minamt : 0}/-</span></h5>

                </div>
                <div className="feature-item" id="explore">
                    <LazyLoader className={"img-fluid"} width={'68'} height={'76'} alt={"Loading"} src={Image3} />
                    {/* <img className="img-fluid" alt="Loading" src={Image3} loading="lazy" /> */}
                    <h4>Supermarket</h4>
                    <div><p>The FMCG (“Supermarket”) sectoral basket selects FMCG stocks on a factor investing framework. The
                        stocks are carefully selected on a factor-based approach encompassing smart beta factors and
                        liquidity.</p></div>
                    <div id="basketInvest">
                        <h5>Minimum Investment -<span>Rs. {value['Supermarket'] ? value['Supermarket'].minamt : 0}/-</span></h5>
                    </div>

                </div>
                <div className="feature-item" >
                    <LazyLoader className={"img-fluid"} width={'98'} height={'76'} alt={"Loading"} src={Image4} />
                    {/* <img className="img-fluid" alt="Loading" src={Image4} loading="lazy" /> */}
                    <h4>Mighty IT</h4>
                    <div><p>The (“Mighty IT”) sectoral basket selects IT stocks on a factor investing framework. The stocks
                        are carefully selected on a factor-based approach encompassing smart beta factors and liquidity
                        factors. </p></div>
                    <h5>Minimum Investment - <span>Rs. {value['Mighty IT'] ? value['Mighty IT'].minamt : 0}/-</span></h5>

                </div>
            </div>
        </>
    )
}

export default BasketLand;