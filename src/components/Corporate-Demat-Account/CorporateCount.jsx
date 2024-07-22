import React, { useState, useEffect } from "react";

function CorporateCount({data}) {
// console.log("data",data)

    return (
        <>
            <section className="count-members">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        {data.map((res, index) => (
                            <div key={index} className="inner-count">
                                {res.count.map((count, i) => (
                                    <div key={i} className="count-itm">
                                        <h3>
                                            <span className="hvr-txt">
                                                <span>{count}</span>
                                            </span>
                                            <small>{res.sign[i]}</small>
                                        </h3>
                                        <h5>{res.title[i]}</h5>
                                    </div>
                                ))}
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default CorporateCount;