import React, { useState } from "react";
import Bannerimage from "../../assets/images/refer-earn/best-demat-account-refer-and-earn-program.webp";
import LazyLoader from "../Common-features/LazyLoader";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import referService from "../../Services/referService";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

function Banner() {
  const [ischeck, setIscheck] = useState(false);
  const [referid, setReferid] = useState("");
  const [referal, setreferal] = useState();
  const [referal1, setreferal1] = useState();
  const [show, setShow] = useState("Get Link");
  const [list, setList] = useState([]);
  const [linkage, setLinkage] = useState(["facebook", "whatsapp"]);
  const [isloader, setIsloader] = useState(false);
  const [iserror, setIserror] = useState(false);
  const [isshow, setIsShow] = useState(false);

  const schema = yup.object().shape({
    ext_user_id: yup.string().required("CLientId is required"),
  });

  /** Get  cliend id  */
  const clientChange = (e2) => {
    setReferid(e2.target.value);
    if (e2.target.value.length === 0) {
      setShow("Get Link");
      setIsShow(false);
      setIserror(false);
    }
  };

  function referlink() {
    let valueearn = document.getElementById("referalid");
    valueearn.value = referal;

  }

  function loadrefer() {
    let id = referid;
    if (id) {
      id = id.toUpperCase();
    }
    setIsloader(true);
    referService
      .referearn(id)
      .then((res) => {
        setIsloader(false);
        setList(res);
        if (res.Status === "Success") {
          setreferal(res.Response.referral_link);
          setShow("Copy Link");
          let valueearn = document.getElementById("referalid");
          valueearn.value = res.Response.referral_link;
          setIsShow(true);
          setIserror(false);
        } else {
          setreferal1(res.Reason);
          setIserror(true);

        }
      })
      .catch((error) => {
        setreferal1("Something went wrong");
        setIserror(true);
      });
  }

  function shareLink(key) {
    let mapper = {
      facebook: {
        url: `https://www.facebook.com/sharer/sharer.php?u=${referal}`,
        isTextEncode: false,
        isURLEncode: false,
      },
      whatsapp: {
        url: `https://api.whatsapp.com/send?text=${referal}`,
        isTextEncode: false,
        isURLEncode: false,
      },
      linkedin: {
        url: "https://www.linkedin.com/shareArticle?mini=fals&url=$url&summary=$text",
        isTextEncode: true,
        isURLEncode: true,
      },
      twitter: {
        url: "https://twitter.com/intent/tweet?url=$url&text=$text",
        isTextEncode: false,
        isURLEncode: true,
      },
    };
    let linkObject = mapper[key];
    window.open(linkObject.url);
  }

  const { register, formState: reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const copy = async () => {
    setShow("Copied");
    await navigator.clipboard.writeText(referal);
  };

  return (
    <div>
      <section className="ref-sec-banner" onMouseOver={() => setIscheck(true)}>
        <div className="container" id="refer&amp;earn">
          <div className="row align-items-center">
            <div className="col-xl-6 col-md-7">
              <div className="sec-banner-left">
                <h1>Join the Best Refer and Earn Demat Account Program</h1>
                <div className="banner-box">
                  <p>
                  Invite your friends and get <span>₹500*</span> brokerage reversal per referral.
                  </p>

                  <div className="get-link-form generate-refer-link">
                    <div className="refer-form">
                      <Form.Group className="formgrp sub-formgrp">
                        <Form.Control
                          type="text"
                          id="referalid"
                          autoComplete="off"
                          placeholder="Enter Client ID"
                          className={
                            "btn-bg formcontrol " + (isshow ? "smallcase" : "")
                          }
                          {...register("referid", {
                            onChange: (e2) => {
                              clientChange(e2);
                            },
                          })}
                        />

                        {show === "Copy Link" || show === "Copied" ? (
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={copy}
                            className="btn-bg sendbtn"
                          >
                            {show}
                          </Button>
                        ) : (
                          <Button
                            variant="primary"
                            type="submit"
                            onClick={() =>
                              referid.length > 0 && show === "Get Link"
                                ? loadrefer()
                                : ""
                            }
                            className="btn-bg sendbtn"
                          >
                            {isloader === false ? (
                              "Get Link"
                            ) : (
                              <Spinner animation="border" />
                            )}
                          </Button>
                        )}

                        {isshow === true ? (
                          <div>
                            <div className="refer-social">
                              <div
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  shareLink(linkage[0]);
                                }}
                                id="facebook"
                                className="refer-icon"
                              >
                                <FaFacebookF />
                              </div>
                              <div
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                  shareLink(linkage[1]);
                                }}
                                id="whatapp"
                                className="refer-icon"
                              >
                                <FaWhatsapp />
                              </div>
                            </div>{" "}
                          </div>
                        ) : (
                          ""
                        )}

                        {iserror === true ? (
                          <div style={{ color: "red" }}>{referal1}</div>
                        ) : (
                          ""
                        )}
                      </Form.Group>
                    </div>
                  </div>
                </div>
                <h4>
                  Don’t have an Account?{" "}
                  <Link to="/open-free-demat-account">Open Now</Link>
                </h4>
              </div>
            </div>
            <div className="col-xl-6 col-md-5 d-flex justify-content-end">
              <LazyLoader
                src={Bannerimage}
                alt={"Best Demat Account Refer and Earn Program"}
                className={"img-fluid refer-banner"}
                width={"400"}
                height={"432"}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Banner;
