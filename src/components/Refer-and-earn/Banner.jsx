
import React ,{useState,useEffect} from "react";
import Bannerimage from '../../assets/images/refer-earn/banner.webp';
import LazyLoader from '../Common-features/LazyLoader';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import referService from "../../Services/referService";
import { FaWhatsapp } from "react-icons/fa";
import {FaFacebookF}  from 'react-icons/fa';
import { Link } from "react-router-dom";

function Banner() {
    let referid='';
    const[referal,setreferal]=useState();
    const[show,setShow]=useState('Get Link');
    const[list,setList]=useState([]);
    const[link,setLink]=useState([]);
    const[isshow,setIsShow]=useState(false);
    



    const schema = yup.object().shape({
        ext_user_id: yup.string().required("CLientId is required")
      })

       /** Get  cliend id  */
   const clientChange = (e2) => {
    referid = e2.target.value;
};

function loadrefer() {
    let request = {
        ext_user_id :referid,
        is_new:true 
    }
    
    referService.referearn(request).then(
      res => {
        
        setList(res);
        if(res.success == false)
        {
            referService.referallink(referid).then(
                res =>{

                    setLink(res)
                    setShow('Copy Link')
                    setIsShow(true)
                    setreferal(res.message);

                }
            )
        }
    
      }
    )
  };

const { register,formState: reset } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  });

  const copy = async () => {
    await navigator.clipboard.writeText(referal);
    setShow('Copied');
  }


    return (
        <div>


            <section className="ref-sec-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-md-7">
                            <div className="sec-banner-left">
                                <h1>Join the Best Demat Account Refer and Earn Program</h1>
                                <div className="banner-box">
                                    <p>Invite your friends and get up to Rs.1000 incentive per referral and your friend will get up to Rs. 500.</p>

                                    <div class="get-link-form generate-refer-link">
                                    
                                   
                                        <div className="refer-form"> 
                                            <Form.Group className="formgrp sub-formgrp" controlId="formBasicEmail">
                                            {
                                                isshow === false ?
                                                <Form.Control type="text"  placeholder="Enter Client ID" className="btn-bg formcontrol" {...register('ext_user_id',{onChange:(e2) => {clientChange(e2)}})} />
                                                :
                                                <div className="btn-bg formcontrol">{referal}</div>
                                            }
                                               
                                            { show === 'Copy Link' ?
                                                <Button variant="primary"
                                                    type="submit" onClick={copy}  className="btn-bg sendbtn">
                                                    {show}
                                                </Button>
                                                :
                                                <Button variant="primary"
                                                    type="submit" onClick={()=> referid.length > 0 && show === 'Get Link' ? loadrefer():''} className="btn-bg sendbtn">
                                                    {show}
                                                </Button>

                                        }
                                                {
                                                    isshow === true ?
                                                <div className="refer-social">
                                                <a className="refer-icon"><FaFacebookF /></a>
                                                <a className="refer-icon"><FaWhatsapp /></a>
                                                </div>:""
                                                }
                                            </Form.Group>
                                        </div>
                                      
                                    </div>
                                </div>
                                <h4>Don’t have an Account? <Link to="/open-demat-account">Open Now</Link></h4>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-5 d-flex justify-content-end">
                            <LazyLoader src={Bannerimage} alt={"Banner Images"} className={"img-fluid refer-banner"} width={"400"} height={"432"} />
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default Banner;
