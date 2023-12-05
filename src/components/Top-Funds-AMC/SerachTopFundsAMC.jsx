import React, { useState, useEffect } from "react";
import rest from "../../Services/rest";
import LazyLoader from '../Common-features/LazyLoader';
import noDataimg from '../../assets/images/no-data.webp';
import { Link } from "react-router-dom";
import loaderimg2 from '../../assets/vedio/loader2.mp4';
function SerachTopFunds() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [isloading, setisloading] = useState(true);
    const getAMCList = () => {
        rest.getAMCList().then(
            (res) => {
                setisloading(false);
                const amcArray = [];
                if (res.Response) {
                    for (let item of res.Response) {
                        if (item !== null) {
                            amcArray.push({
                                name: item.AMCNAME,
                                param: item.AMCNAME.toLowerCase().split(" ").join("-"),
                                image: item.AMCimgURL,
                                imgPath: res[1],
                                ImageAltTag: item.ImageAltTag,
                            });
                        }
                    }
                    setData(amcArray)
                    setFilteredData(amcArray);
                }
                else{
                    setisloading(false);
                    setData([]);
                    setFilteredData([])
                }
                
            }
        )
        .catch((error) => {
            // console.log(error, "error");
            setisloading(false);
            setData([]);
            setFilteredData([])
        });
    };
    useEffect(() => {
            getAMCList();
    }, [])
    const fundhandleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredResults = data.filter((res) => res?.name.toLowerCase().includes(searchTerm));
        setFilteredData(filteredResults);
    };
    
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
                        {
                            isloading ?
                                <div className="text-center">
                                    <div>
                                        <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                    </div>
                                </div>
                                :
                                <div className='col-md-12'>
                                    {
                                        filteredData.length > 0 ?
                                            <div className='search-items-sec'>
                                                {
                                                    filteredData.map((res, i) => {
                                                        return (
                                                            <div className='search-items' key={i}>
                                                                <Link to={`/amc/${res.param}`} className="circle">
                                                                    <LazyLoader src={res.image} className={'img-fluid'} height={"93"} width={"144"} alt={res.ImageAltTag} />
                                                                </Link>
                                                                <h4 className='mf-com-name'>
                                                                    <Link to={`/amc/${res.param}`}>
                                                                        {res.name}
                                                                    </Link>
                                                                </h4>
                                                            </div>

                                                        )
                                                    })
                                                }
                                            </div>
                                            :
                                            <div className="text-center">
                                                <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                            </div>
                                    }
                                </div>
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default SerachTopFunds