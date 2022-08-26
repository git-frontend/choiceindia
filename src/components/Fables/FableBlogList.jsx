import React, { useState, useEffect, useRef } from "react";
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
    const demo_ref = useRef(null)
    const demo_ref2 = useRef(null);

    function loadfablecategory() {
        FablesTrending.fabalcategory().then(
            res => {
                setData(res.data.data);
               // console.log("check", res.data.data)
                // loadfaqFolder(res[0].category_linkage);
            }
        )
    };

    function getfableFolder(pros) {
        FablesTrending.fabalFolder(pros).then(
            res => {
                setPost(res.data.posts);
                setCheck(false)
                // setPostAll(res.data.posts)
            //    console.log("check222", res.data.posts)
                // loadfaqFolder(res[0].category_linkage);
            }
        )
    };

    function goToScroll(value){
        // console.log('GGG');
        if(value === true){
            demo_ref2.current.scrollIntoView({behavior: 'smooth'})
        }else{
            demo_ref.current.scrollIntoView({behavior: 'smooth'})
        }
        
        
        setCheck(value);
      }

    useEffect(() => {
        setTrigger(true)
        if (trigger === true) {
            loadfablecategory();
            getfableFolder('stock-market');
           

        }

    }, [trigger])


    return (
        <div>

            <section className="fable-blog-List" ref={demo_ref}>
                <div className="container">
                    <div className="fable-list-menu">
                        <ul >
                            {
                                data.map((res,i) => {

                                    let classNameNm = "link-txt" + ((i === count) ? ' link-active' : "")
                                    //("precheck",count)
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

                            <div className="tab-blog-list" >
                            {
                                (post||[]).slice(0, check?post.length:3).map((res,index)=>{
                                    return(
                                          
                                        <Link  to={`/blog/${res.slug}`} className="tab-blog-item mb-5" key={res.id}>
                                    <div className="blog-item-img">
                                        {/**<LazyLoader src={res.feature_image} className={''} width={'402'} height={'300'} alt={'loading'} />*/}
                                        <img src={res.feature_image} className="" alt="loading" width={"402"} height={"300"}/>
                                    </div>
                                    <div className="blog-item-des" ref={demo_ref2}>
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
                        post&&(post.length > 3) ? 
                        <div className="mt-5 d-flex justify-content-center" >{check?<a className="btn-bg btn-ptr" style={{cursor:"pointer"}} onClick={()=> {goToScroll(false)}}>Load Less</a>:<a className="btn-bg btn-ptr"  style={{cursor:"pointer"}} onClick={()=> {goToScroll(true)}}>Load More</a>}</div>
                      :""
                    }
                </div>

            </section>


        </div>

    );
}

export default FableBlogList;
