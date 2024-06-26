import React, { useEffect, useState } from "react";
import fableServices from '../../Services/fableServices';
import LazyLoader from "../Common-features/LazyLoader";
import { Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner';
import noDataimg from '../../assets/images/no-data.webp';
import loaderimg2 from '../../assets/vedio/loader2.mp4';

function FableBlog() {
    const [rendercount, setRenderCount] = useState(() => false);
    const [data, setData] = useState([]);
    const [loader, setLoader] = useState(true);
    const [isloading,setisloading ] = useState(true);

    function loadFableList() {
        setLoader(true);
        fableServices.fableListingTopFive().then(res => {
            setLoader(false);
            setisloading(false);
            if (res && res.status === 200 && res.data && res.data.posts) {
                setData(res.data.posts);
            } else {
                setisloading(false)
                
                setData([]);
            }
        }).catch((error) => {
            setisloading(false)
            setLoader(false);
            setData([]);
        });
    }

    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {
            loadFableList()
         
        }
      }, [rendercount])

    return (
        <div>

            <section className="blog-middle-cont">
                <div className={`container ${loader ? 'text-center' : ''}`}>
                    
                            <div className="row">
                            
                                          
                                
                                        
                                        {
                                            isloading?
                                            <div>
                                                <div className="heading-sec">
                                            <h3 className="title-secnd">Interested in a Good Read Check Our Latest Blog </h3>
                                        </div>
                                                <video src={loaderimg2} autoPlay loop muted className='img-fluid d-block mx-auto' height={250} width={250} />
                                                </div>
                                                :
                                            
                                                <div className="col-xl-5">
                                                <div className="blog-middle-left">
                                                <div className="heading-sec">
                                            <h3 className="title-secnd">Interested in a Good Read Check Our Latest Blog </h3>
                                        </div>
                                            {
                                                data.length?
                                                    <div className="single-blog-con">
                                                        <div className="single-blog-img">
                                                            <LazyLoader src={data[0]?.feature_image} className={'img-fluid'} width={'532'} height={'533'} alt={'loading'} />
                                                        </div>
                                                        <div className="single-blog-des">
                                                            <h3>{data[0]?.title}</h3>
                                                            <h6 className="tag-act">Published at: {(data[0]?.published_at) ? new Date(data[0].published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hourCycle: 'h12' }) : ''}</h6>
                                                            <p className="des-cont mt-3">{(data[0]?.meta_description) ? data[0].meta_description.substring(0, 100) : ''}... <Link to={`/blog/${data[0]?.slug}`} className="fw-bold">Read More</Link></p>
                                                        </div>
                                                    </div>:
                                                    <div className="text-center">
                                                        <img src={noDataimg} className="img-fluid" alt='No Data Found' height={250} width={250} />
                                                    </div>
                                            }
                                            
                                            </div>
                                            </div>

                                        }
                                       
                                       
                                            

                                   
                                <div className="col-xl-7">
                                    <div className="blog-middle-right">
                                    {
                                            isloading?
                                            <div></div>:
                                        
                                          <div>  
                                        {
                                            data.length?
                                            <div className="all-latest-blog-list">
                                                    {
                                                        data.map((item, index) => {
                                                            if (index !== 0) {
                                                                return (
                                                                    <div className="latest-blog-itm" key={item.id}>
                                                                        <Link to={`/blog/${item.slug}`} className="blog-itm">
                                                                            <div className="blog-itm-des">
                                                                                <p className="itm-des-cont">{item.title}</p>
                                                                                <h6 className="tag-act">Published at: {(item.published_at) ? new Date(item.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', hourCycle: 'h12' }) : ''}</h6>
                                                                            </div>
                                                                            <div className="blog-itm-img">
                                                                                <LazyLoader src={item.feature_image} className={'img-fluid img-blog'} width={'215'} height={'155'} alt={'loading'} />
                                                                            </div>
                                                                        </Link>
                                                                    </div>
                                                                );
                                                            } else {
                                                                return;
                                                            }
                                                        })
                                                    }
                                                </div> :
                                                ''
                                        }
                                        </div>
}
                                    
                                        
                                        
                                        
                                    </div>
                                </div>
                            </div>

                    
                </div>
            </section>


        </div>

    );
}

export default FableBlog;
