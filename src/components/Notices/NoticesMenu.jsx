import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../Common-features/Navbar";
import "../CodeConduct/code-conduct.scss";
import "../Corporate-Governance/corporate-governance.scss";
import cmsService from "../../Services/cmsService";
import noDataimg from "../../assets/images/no-data.webp";
import loaderimg2 from "../../assets/vedio/loader2.mp4";

function NoticesMenu() {
  
  const [list, setList] = useState();
  const [trigger, setTrigger] = useState(false);
  const [isloading, setisloading] = useState(true);
  const [datalist,setDatalist ] =useState();
  // let values;
  // let AllFilesValue = {};
  // function loadnewspdf() {
  //   cmsService
  //     .Notices()
  //     .then(
  //       res => {
  //           if (res && res.data && res.data.data) {
  //               setisloading(false)
  //               values = res.data.data;
                
  //               values.forEach(ele => {

  //                   if (!AllFilesValue[ele.type]) {
  //                       AllFilesValue[ele.type] = [];
  //                       AllFilesValue[ele.type].push(ele)
  //                   } else {
  //                       AllFilesValue[ele.type].push(ele)

  //                   }
  //               })
  //               setDatalist(AllFilesValue);
  //           } else {
  //               setisloading(false)
  //               setData([]);

  //           }

  //       })
  //     .catch((error) => {
  //       setisloading(false);
  //       setData([]);
  //     });
  // }

//   function loadnewsRpdf() {
//     cmsService
//       .Notices()
//       .then((res) => {
//         if (res) {
//           setList(res.data.data);
//         } else {
//           setList([]);
//         }
//       })
//       .catch((error) => {
//         setList([]);
//       });
//   }

  useEffect(() => {
    setTrigger(true);

    if (trigger === true) {
      // loadnewspdf();
      cmsService.loadCmsData(cmsService.Notices,setisloading,setDatalist,"type");
    //   loadnewsRpdf();
    }
  }, [trigger]);

  return (
    <div>
      <section className="Investormenu page-height">
        <div className="container">
          <div className="row">
            <div className="col-md-12 menuwrap">
              <h2 className="title">Notices</h2>
              <Navbar />
            </div>
          </div>
          {
          isloading ? (
            <div className="text-center">
              <div>
                {/* <img src={loaderimg2} className="img-fluid d-block mx-auto" alt='loading' height={250} width={250} />  */}
                <video
                  src={loaderimg2}
                  autoPlay
                  loop
                  muted
                  className="img-fluid d-block mx-auto"
                  height={250}
                  width={250}
                />
              </div>
            </div>
          ) : (
            <div>
                {
             datalist ?
               
            <div>
              {
             Object.keys(datalist)?.map((key, i) => {
                return (
                <div className="row code-mainwrapper cgmainwrap">
                  <div className="col-md-12">
                    <h3 className="head">{key}</h3>

                    <div className="subtext">
                      {
                 datalist[key]?.map((res, index) => {

                        return (
                          <div
                            className="border-bottom d-flex justify-content-between pb-3 pt-3"
                            key={i}
                          >
                            <div>{res.Title} </div>

                            <div>
                                {
                                    res.file ?
                                    <FontAwesomeIcon
                                    icon={faEye}
                                    className="cursor-pointer"
                                    onClick={() => {
                                      window.open(
                                        "https://cmsapi.choiceindia.com/assets/" +
                                          res.file
                                      );
                                    }}
                                  />:""

                                }
                             
                            </div>
                          </div>
                        );
                      })}

                     
                    </div>

                    
                  </div>
                </div>
              );
            })}  
           
            </div>:
            (
                <div className="text-center no-data-space">
                  <img
                    src={noDataimg}
                    className="img-fluid"
                    alt="No Data Found"
                    height={250}
                    width={250}
                  />
                </div>
              )

}         
            </div>

          )


}
         
     
        </div>
      </section>
    </div>
  );
}
export default NoticesMenu;
