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
    const [check, setCheck] = useState(false);
    const [count,setCount] = useState(0)


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
                // setPostAll(res.data.posts)
                console.log("check222", res.data.posts)
                // loadfaqFolder(res[0].category_linkage);
            }
        )
    };

    useEffect(() => {
        setTrigger(true)
        if (trigger === true) {
            loadfablecategory();
            getfableFolder('stock-market');
           

        }

    }, [trigger])


    return (
        <div>

            <section className="fable-blog-List">
                <div className="container">
                    <div className="fable-list-menu">
                        <ul >
                            {
                                data.map((res,i) => {

                                    let classNameNm = "link-txt" + ((i === count) ? ' link-active' : "")
                                    console.log("precheck",count)
                                    return (
                                        
                                        <li onClick={()=>{getfableFolder(res.fable_linkage)
                                        setCount(i)
                                        }} key={res.id}>
                                            <div style={{'cursor':'pointer'}} className={classNameNm}>{res.fable_category}</div>
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

                        {

                            <div className="tab-blog-list">
                            {
                                post.slice(0, check?post.length:3).map((res,index)=>{
                                    return(
                                          
                                        <Link  to={`/blog/${res.slug}`} className="tab-blog-item" key={res.id}>
                                    <div className="blog-item-img">
                                        {/**<LazyLoader src={res.feature_image} className={''} width={'402'} height={'300'} alt={'loading'} />*/}
                                        <img src={res.feature_image} className="" alt="loading" width={"402"} height={"300"}/>
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
                              
                            </div>



                        }

                            
                        </div>
                    </div>
                    {
                        post.length > 3 ? 
                        <div className="row"><div className="col-md-12 d-flex justify-content-center"><div style={{cursor:"pointer"}}><span className="btn-bg" onClick={()=>{setCheck(true)}}>Explore All</span></div></div></div>
                      :""
                    }
                </div>

            </section>


        </div>

    );
}

export default FableBlogList;
