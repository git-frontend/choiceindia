import "./blogcms.scss";
import { useState, useEffect } from 'react';
import cmsService from "../../Services/cmsService";
import utils from "../../Services/utils";
import { useNavigate } from 'react-router-dom'
function BlogCms() {

    let navigate = useNavigate();
    /** store insights api data */
    const [apiData, setApiData] = useState();
    /** avoid duplicate rendering */
    const [rendercount, setRenderCount] = useState(false);
    /**page url data store */
    const AllFilesValue = {}


    /** compancms detail */
    function loadinsightsIpo() {

        let urlIdentity = window.location.pathname.split('/insights/')[1]
        let values = {}
        cmsService.insightService().then(
            res => {
                if (res) {

                    values = res.data.data;
                    values.forEach(ele => {
                        if (!AllFilesValue[ele.slug]) {
                            if ((urlIdentity == ele.slug)) {

                                AllFilesValue['Body'] = [];
                                AllFilesValue['Body'].push(ele)
                            }
                        }

                    })
                    if (AllFilesValue.Body) {
                        setApiData(AllFilesValue.Body);

                    } else {
                        navigate(`/404`, { replace: true });
                    }
                    document.title = AllFilesValue.Body[0].meta_title ? AllFilesValue.Body[0].meta_title : '';
                    document.getElementById('meta-tags').content = AllFilesValue.Body[0].meta_content ? AllFilesValue.Body[0].meta_content : '';
                    document.getElementById('canonical-link').href = AllFilesValue.Body[0].canonical_link ? AllFilesValue.Body[0].canonical_link : '';

                    document.getElementById('meta-type').content = AllFilesValue.Body[0].cms_og_type ? AllFilesValue.Body[0].cms_og_type : '';
                    document.getElementById('meta-url').content = AllFilesValue.Body[0].cms_og_url ? AllFilesValue.Body[0].cms_og_url : '';
                    document.getElementById('meta-descr').content = AllFilesValue.Body[0].cms_og_description ? AllFilesValue.Body[0].cms_og_description : '';
                    document.getElementById('meta-title').content = AllFilesValue.Body[0].cms_og_title ? AllFilesValue.Body[0].cms_og_title : '';
                    document.getElementById('meta-image').content = AllFilesValue.Body[0].cms_og_image ? `https://cmsapi.choiceindia.com/assets/${AllFilesValue.Body[0].cms_og_image}` : '';

                    document.getElementById('twitter-meta-url').content = AllFilesValue.Body[0].cms_twitter_url ? AllFilesValue.Body[0].cms_twitter_url : '';
                    document.getElementById('twitter-meta-descr').content = AllFilesValue.Body[0].cms_twitter_desc ? AllFilesValue.Body[0].cms_twitter_desc : '';
                    document.getElementById('twitter-meta-title').content = AllFilesValue.Body[0].cms_twitter_title ? AllFilesValue.Body[0].cms_twitter_title : '';
                    document.getElementById('twitter-meta-image').content = AllFilesValue.Body[0].cms_twitter_image ? `https://cmsapi.choiceindia.com/assets/${AllFilesValue.Body[0].cms_twitter_image}` : '';



                } else {
                    setApiData([]);
                }

            }
        ).catch((error) => {
            setApiData([]);
        });
    }
    /** for avoid multiple rendering */
    useEffect(() => {
        setRenderCount(true)
        if (rendercount === true) {

            loadinsightsIpo();
        }
    }, [rendercount]);

    return (
        <div>

            <section className="blg-cms-banner">
                {
                    apiData?.map((res) => {
                        return (
                            <div className="container">

                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="ban-caption text-center">
                                            <h4>{res.blog_category_value}</h4>
                                            <h1 className="title-secnd">{res.blog_title}</h1>
                                            <ul className="tag-date">
                                                <li className="ttl-name">{res.blog_owner}</li>
                                                <li>{res.blog_date ? utils.formatDate(new Date(res.blog_date), "dd MMMM , yyyy") : 'To be announced'}</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    }
                    )}
            </section>

            <section className="blg-cms-description">
                {
                    apiData?.map((res) => {
                        return (
                            <div className="container">
                                <div className="d-flex justify-content-center">
                                    <div className="sub-description">
                                        <div className="pr-sec">
                                            <div dangerouslySetInnerHTML={{ __html: res.section_1_banner }}>

                                            </div>

                                        </div>
                                        <div className="pr-sec">

                                            <h2><a href={res.section_2_title_link} className="link-sub">{res.section_2_title}</a></h2>
                                            <div dangerouslySetInnerHTML={{ __html: res.second_section_paragraph }}>

                                            </div>

                                        </div>
                                        {
                                            res.market_capitalisation_value ?
                                                <div className="pr-sec pr-sec-data">
                                                    <table class="table table-hover table-striped ">
                                                        <thead>
                                                            <tr>
                                                                <th>Financial <br /> Ratios</th>
                                                                <th>Numbers</th>
                                                                <th>Financial <br /> Ratios</th>
                                                                <th>Numbers</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>Market <br />Capitalisation</td>
                                                                <td>{res.market_capitalisation_value}</td>
                                                                <td>Market <br />Capitalisation</td>
                                                                <td>{res.market_capitalisation_value}</td>
                                                            </tr>
                                                            <tr class="grey-back">
                                                                <td>ROCE</td>
                                                                <td>{res.roce_value}</td>
                                                                <td>ROCE</td>
                                                                <td>{res.roce_value}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Return on Equity <br /> (ROE)</td>
                                                                <td>{res.roe_value}</td>
                                                                <td>Return on Equity <br />(ROE)</td>
                                                                <td>{res.roe_value}</td>
                                                            </tr>
                                                            <tr>
                                                                <td>Net Profit Margin</td>
                                                                <td>{res.net_profit_margin_value}</td>
                                                                <td>Net Profit Margin</td>
                                                                <td>{res.net_profit_margin_value}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                :
                                                ""
                                        }

                                        <div className="pr-sec">
                                            <h2>{res.section_3_title}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: res.section_3_paragraph }}>

                                            </div>
                                        </div>
                                        
                                        <div className="pr-sec">
                                            <h2>{res.opening_time_title}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: res.opening_time_paragraph }}>

                                            </div>
                                            {
                                                res.opening_time_video ?
                                                    <img src={`https://cmsapi.choiceindia.com/assets/${res.opening_time_video}`} className="img-fluid radius-img" /> : ""


                                            }

                                        </div>
                                        <div className="pr-sec">
                                            <h2>{res.closing_time_title}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: res.closing_time_paragraph }}>
                                            </div>

                                        </div>
                                        <div className="pr-sec">
                                            <h2>{res.history_commodity_trading}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: res.history_commodity_trading_paragraph }}>

                                            </div>
                                        </div>
                                        {
                                            res.history_commodity_trading_image ?
                                                <div>
                                                    <img src={`https://cmsapi.choiceindia.com/assets/${res.history_commodity_trading_image}`} alt="" className="img-fluid" />
                                                </div> :
                                                ""
                                        }

                                      
                                        <div className="pr-sec">
                                            <h2><a href={res.commodity_market_link} className="link-sub">{res.commodity_exchange_title}</a></h2>
                                            <div dangerouslySetInnerHTML={{ __html: res.commodity_market_paragraph }}>

                                            </div>

                                        </div>
                                       
                                        <div className="pr-sec">
                                            <h2>{res.type_commodity_market_title}</h2>
                                            <div  >

                                            </div>

                                        </div>
                                        <div className="pr-sec">
                                            <h2>{res.commodity_exchange_title}</h2>
                                            <div dangerouslySetInnerHTML={{ __html: res.commodity_exchange_paragraph }}>

                                            </div>

                                        </div>
                                        {
                                            res.written_image ?
                                                <div className="author-details">
                                                    <div className="auth-left">
                                                        <img src={`https://cmsapi.choiceindia.com/assets/${res.written_image}`} alt="" className="img-fluid" />
                                                    </div>
                                                    <div className="auth-right">
                                                        <p>Written by</p>
                                                        <h4>{res.Written_name}</h4>
                                                        <p>{res.written_description}</p>
                                                    </div>
                                                </div>

                                                :
                                                ""
                                        }

                                    </div>

                                </div>
                            </div>
                        )
                    }
                    )}
            </section>

            <section className="nav-process">
                {
                    apiData?.map((res) => {
                        return (
                            <div className="container">
                                {
                                    (res.prev_article_title && res.next_article_title) ?
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="navigation-cms">
                                                    <div className="nav-sr">
                                                        <div className="cont-l lft-sc">
                                                            <a href={res.prev_article_link} className="btn-nvg">Previous Article</a>
                                                            <p>{res.prev_article_title}</p>
                                                        </div>
                                                        <div className="cont-l rght-sc">
                                                            <a href={res.Next_article_link} className="btn-nvg">Next Article</a>
                                                            <p>{res.next_article_title}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        ""
                                }

                            </div>
                        )
                    }
                    )}
            </section>



        </div>
    );
}

export default BlogCms;