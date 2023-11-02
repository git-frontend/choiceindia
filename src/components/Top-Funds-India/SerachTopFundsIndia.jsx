import React, { useState, useEffect } from "react";
import rest from "../../Services/rest";
import LazyLoader from '../Common-features/LazyLoader';
import noDataimg from '../../assets/images/no-data.webp';
import { Link } from "react-router-dom";

function SerachTopFunds() {
    const [data, setData] = useState([]);
    const [trigger, setTrigger] = useState();
    const [filteredData, setFilteredData] = useState([]);
    const goToTopFundsDetail = () => {
        rest.getCategoriesList().then(
            res => {
                setData(res.Response);
                setFilteredData(res.Response)
                console.log("res", res.Response)
            }
        )
    }
    useEffect(() => {

        setTrigger(true)
        if (trigger === true) {
            goToTopFundsDetail()
        }

    }, [trigger])
    const fundhandleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredResults = data.filter((res) => res.name.toLowerCase().includes(searchTerm));
        setFilteredData(filteredResults);
    }
    return (
        <>
            <section className='search-funds-sec' id='showForm'>
                <div className='container'>
                    <div className='row justify-content-end'>
                        <div className='col-xl-5 col-md-6 col-sm-12'>
                            <div className='search-bar'>
                                <input type="text" className="input-control search-icon" placeholder="Search" onChange={fundhandleSearch} />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <div >
                                {
                                    filteredData.length ?
                                        <div className='search-items-sec' >
                                            {
                                                filteredData.map((res, i) => {
                                                    return (
                                                        <div key={res.id} className='search-items'>
                                                            {/* <div className='circle'> */}
                                                            <Link to={`/top-funds/${res.CategoryURL}`} className="circle">
                                                                <LazyLoader src={`https://d3vjsh1bzzv98d.cloudfront.net/static/${res.icon_url}`} className={'img-fluid'} height={"130"} width={"130"} alt={res.ImageAltTag} />
                                                                {/* </div> */}

                                                            </Link>
                                                            <h4 className='mf-com-name'>
                                                                <Link to={`/top-funds/${res.CategoryURL}`}>
                                                                    {res.name}
                                                                </Link>
                                                            </h4>
                                                        </div>

                                                    )
                                                })
                                            }
                                        </div> :
                                        <div className="text-center">
                                            <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                        </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SerachTopFunds