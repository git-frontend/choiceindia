import React, { useState, useEffect, useRef } from "react";
import FablesTrending from "../../Services/fableServices";
import LazyLoader from "../Common-features/LazyLoader";
import { Link } from "react-router-dom";
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';

function FableBlogList() {

    const [data, setData] = useState([]);
    const [post, setPost] = useState([]);
    const [trigger, setTrigger] = useState(false);
    const [check, setCheck] = useState(false);
    const [count,setCount] = useState(0);
    const [isloading,setisloading ] = useState(true);
    const [loadedCount, setLoadedCount] = useState(3);
    const demo_ref = useRef(null)

    function loadfablecategory() {
        FablesTrending.fabalcategory().then(
            res => {
                setisloading(false);
                setData(res.data.data);
               
            }
        )
    };

    function getfableFolder(pros) {
        FablesTrending.fabalFolder(pros).then(
            res => {
                setisloading(false);
                setPost(res.data.posts);
                setLoadedCount(3)
              
            }
        )
    };

    function goToScroll(value) {
        const element = value ? document.getElementById('res-des-scrlls') : demo_ref.current;
        const headerOffset = -20;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
        setCheck(value);
    }

    useEffect(() => {
        setTrigger(true)
        if (trigger === true) {
            loadfablecategory();
            getfableFolder('national');
           

        }

    }, [trigger])

    function loadMorePosts() {
        setLoadedCount(prevCount => prevCount + 15);
        
    }

    function loadLessPosts() {
        setLoadedCount(3);
        setCheck(false);
    }
    return (
        <div ref={demo_ref}>

            <section className="fable-blog-List">
                <div className="container">
                    {
                        isloading?
                        <div className="text-center">
                                    <div>
                                        <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                         </div>
                                </div>:
                                <div className="fable-list-menu">
                        
                                <ul >
                                    {
                                        data.map((res,i) => {
        
                                            let classNameNm = "link-txt" + ((i === count) ? ' link-active' : "")
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
                    }
                    
                </div>

               
{
    isloading?
    <div></div>:
    <div className="container">
                    <div className="row">
                        <div className="col-md-12">

                        {
                           
                            post.length?
                            <div className="tab-blog-list">
                            {
                                post.slice(0, check ? post.length : loadedCount).map((res, index)=>{
                                    return(
                                          
                                        <Link  to={`/blog/${res.slug}`} className="tab-blog-item mb-5" key={res.id}>
                                    <div className="blog-item-img">
                                        <img src={res.feature_image} className="" alt="loading" width={"402"} height={"300"}/>
                                    </div>
                                    <div className="blog-item-des" id="res-des-scrlls">
                                        <h4>{res.title}</h4>
                                        <p>{res.meta_description}</p>
                                    </div>
                                
                                </Link>

                                    )
                                })
                            }
                              
                            </div>:
                            <div className="text-center">
                            <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250}/>
                        </div>


                        }

                            
                        </div>
                    </div>
                    <div className="mt-5 d-flex justify-content-center">
                            {post.length > loadedCount && !check ? (
                                <a className="btn-bg btn-ptr" style={{ cursor: "pointer" }} onClick={loadMorePosts}>Load More</a>
                            ) : (
                                <a className="btn-bg btn-ptr" style={{ cursor: "pointer" }} onClick={loadLessPosts}>Load Less</a>
                            )}
                        </div>
                </div>

}

                

            </section>


        </div>

    );
}

export default FableBlogList;
