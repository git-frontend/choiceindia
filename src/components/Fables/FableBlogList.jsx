import React, { useState, useEffect } from "react";
// import Blog1 from '../../assets/images/fable/blog-img1.jpg';
// import Blog2 from '../../assets/images/fable/blog-img2.jpg';
// import Blog3 from '../../assets/images/fable/blog-img3.jpg';
import FablesTrending from "../../Services/fableServices";
import LazyLoader from "../Common-features/LazyLoader";
import { Link } from "react-router-dom";

function FableBlogList() {

    const [data, setData] = useState([]);
    const [post, setPost] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const [count,setCount] = useState(1)

    function loadfablecategory() {
        FablesTrending.fabalcategory().then(
            res => {
                setData(res.data.data);
                console.log("check", res.data.data)
                // loadfaqFolder(res[0].category_linkage);
            }
        )
    };

    function getfableFolder(pros) {
        FablesTrending.fabalFolder(pros).then(
            res => {
                setPost(res.data.posts);
                console.log("check222", res.data.posts)
                // loadfaqFolder(res[0].category_linkage);
            }
        )
    };

    useEffect(() => {
        setTrigger(true)
        if (trigger === true) {
            loadfablecategory();
           

        }

    }, [trigger])


    return (
        <div>

            <section className="fable-blog-List">
                <div className="container">
                    <div className="fable-list-menu">
                        <ul >
                            {
                                data.map((res,i=1) => {

                                    let classNameNm = "link-txt" + ((i === count-1) ? ' link-active' : "")
                                    console.log("precheck",count)
                                    return (
                                        
                                        <li onClick={()=>{getfableFolder(res.fable_linkage)
                                        setCount(res.id)
                                        console.log("index",count)
                                        }}>
                                            <div style={{'cursor':'pointer'}} className={"link-txt" + ((i === count-1) ? ' link-active' : "" )}>{res.fable_category}</div>
                                        </li>
                                        

                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>

                {/** <li>
                                <a href="/" className="link-txt link-active">All</a>
                            </li>
                            <li>
                                <a href="/" className="link-txt">National</a>
                            </li>
                            <li>
                                <a href="/" className="link-txt">International</a>
                            </li>
                            <li>
                                <a href="/" className="link-txt">Economy</a>
                            </li>
                            <li>
                                <a href="/" className="link-txt">Industry</a>
                            </li>
                            <li>
                                <a href="/" className="link-txt">Commodity</a>
                            </li>
                            <li>
                                <a href="/" className="link-txt">IPO</a>
                            </li>
                            <li>
                                <a href="/" className="link-txt">Currency</a>
                            </li>
                            <li>
                                <a href="/" className="link-txt">Policies</a>
                            </li>
                            <li>
                                <a href="/" className="link-txt">M&amp;A</a>
                            </li>
                            <li>
                                <a href="/" className="link-txt">Trades</a>
                    </li> */}




                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tab-blog-list">
                            {
                                post.map((res)=>{
                                    return(
                                          
                                        <Link to={`/fablesdetail/${res.slug}`} className="tab-blog-item">
                                    <div className="blog-item-img">
                                        <LazyLoader src={res.feature_image} className={''} width={'402'} height={'300'} alt={'loading'} />
                                        {/* <img src={res.feature_image} className="" alt="loading" width={"402"} height={"300"} /> */}
                                    </div>
                                    <div className="blog-item-des">
                                        <h4>{res.title}</h4>
                                        <p>{res.meta_description}</p>
                                       {/** <div className="d-flex justify-content-between">
                                            <span className="sm-text">21 Aug 2021</span>
                                            <span className="sm-text">@SachinChadda</span>
                                    </div> */}
                                    </div>
                                
                                </Link>

                                    )
                                })
                            }
                               {/** <a href="/" className="tab-blog-item">
                                    <div className="blog-item-img">
                                        <img src={Blog1} className="" alt="loading" width={"402"} height={"300"} />
                                    </div>
                                    <div className="blog-item-des">
                                        <h4>Shein setting a trend again for fashionistas – It’s a comeback</h4>
                                        <p>It’s happening!! We have a great news for all the fashionistas and shopaholics out there</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="sm-text">21 Aug 2021</span>
                                            <span className="sm-text">@SachinChadda</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="/" className="tab-blog-item">
                                    <div className="blog-item-img">
                                        <img src={Blog2} className="" alt="loading" width={"402"} height={"300"} />
                                    </div>
                                    <div className="blog-item-des">
                                        <h4>How Indian Telcos are gearing up for 5G?</h4>
                                        <p>5G is the game-changer in the world of communication and technology that will transform this entire landscape</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="sm-text">21 Aug 2021</span>
                                            <span className="sm-text">@SachinChadda</span>
                                        </div>
                                    </div>
                                </a>
                                <a href="/" className="tab-blog-item">
                                    <div className="blog-item-img">
                                        <img src={Blog3} className="" alt="loading" width={"402"} height={"300"} />
                                    </div>
                                    <div className="blog-item-des">
                                        <h4>The journey of Idea cellular from idea to VI</h4>
                                        <p>Idea cellular has been in the telecom industry for decades as a major mobile phone service operator in India</p>
                                        <div className="d-flex justify-content-between">
                                            <span className="sm-text">21 Aug 2021</span>
                                            <span className="sm-text">@SachinChadda</span>
                                        </div>
                                    </div>
                        </a> */}
                            </div>
                        </div>
                    </div>
                    <div className="row"><div className="col-md-12 d-flex justify-content-center"><a href="#"><span className="btn-bg">Explore All</span></a></div></div>
                </div>

            </section>


        </div>

    );
}

export default FableBlogList;
