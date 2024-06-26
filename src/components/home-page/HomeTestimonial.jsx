import ImageTesti1 from '../../assets/images/udit-goyal.webp';
import ImageTesti2 from '../../assets/images/monish-chug.webp';
import ImageTesti3 from '../../assets/images/aparajitha-aiyer.webp';
import ImageTesti4 from '../../assets/images/satish-prajapati.webp';
import ImageTesti5 from '../../assets/images/shibani-mitra.webp';
import ImageTesti6 from '../../assets/images/vishesh-singh-thakur.webp';
import ImageTesti7 from '../../assets/images/kamlesh-bhadoria.webp';
import ImagePlay from '../../assets/images/playstore.svg';
import "../../../node_modules/slick-carousel/slick/slick.css"
import "../../../node_modules/slick-carousel/slick/slick-theme.css"
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { useState, useRef } from 'react';
import LazyLoader from '../Common-features/LazyLoader';

function HomeTestimonial() {

    const [valRight, setValRight] = useState(() => 0);


    const [dataObj, setdataObj] = useState(() => [
        {
            "img": ImageTesti1, "name": "Udit Goyal", "tag": "@uditgoyal09", "date": "20 Aug 2021", "likes": "27","alt":"Udit Goyal","letter":"U",
            "des": "They will never share your private data without your consent. They are market leader for right reasons. They are the best brokers in town and provide the best services to their clients."
			
        },

		{
            "img": ImageTesti2, "name": "Monish Chug", "tag": "@MOChug1992", "date": "1 Feb 2021", "likes": "56","alt":"Monish Chug","letter":"M",
            "des": "They are delivering the right experience for investing through their app. the process is quiet simplified and secured with two factor authentication. I highly recommend them."
        },


        {
            "img": ImageTesti3, "name": "Aparajitha Aiyer", "tag": "@Aiyer23", "date": "21 May 2022", "likes": "94","alt":"Aparajitha Aiyer","letter":"A",
            "des": "Had the best experience with the customer support. Their representative patiently listened to all my problems and provided me with immediate help. Kudos to the customer support team."
        },

        {
            "img": ImageTesti4, "name": "Satish Prajapati", "tag": "@SatishPrajapati161", "date": "13 Aug 2021", "likes": "48","alt":"Satish Prajapati","letter":"S",
            "des": "I’m really happy with the research calls here. The quality of research is really impressive. I’ve been able to book some handsome profits because of these reseach calls. Thanks!!! "
        },

		{
            "img": ImageTesti5, "name": "Shibani Mitra", "tag": "@ShibiMitra88", "date": "09 Sept 2021", "likes": "61","alt":"Shibani Mitra","letter":"S",
            "des": "Everyone who invests in stock markets should experience their app. No lags or other problems whatsoever. Everything right from sign in to trade execution is seemless."
        },
		{
            "img": ImageTesti6, "name": "Vishesh Singh Thakur", "tag": "@VisheshST9999", "date": "18 Oct 2021", "likes": "48","alt":"Vishesh Singh Thakur","letter":"V",
            "des": "I’m a beginner in stock market investing and I find this app very helpful. The research section is of great help and the trading window is also good and simple to use."
        },
		{
            "img": ImageTesti7, "name": "Kamlesh Bhadoria", "tag": "@Kamlesh83", "date": "30 Sept 2021", "likes": "71","alt":"Kamlesh Bhadoria","letter":"K",
            "des": "I have tried their stock collections and baskets and I must say they are full of great stock ideas. The baskets are a great way of investing with diversification."
        }
    ])
	const [counterRight, setcounterRight] = useState(() => 1);
	const [disableRight, setdisableRight] = useState(() => false);
	const [disableLeft, setdisableLeft] = useState(() => true);

    const counter = useRef(0);
    function toggleForward() {

		if(counterRight === 0 ){
			setdisableLeft(true);
			setdisableRight(false);
		}else if(counterRight === 6){
			setdisableLeft(false);
			setdisableRight(true);
		}else{
			setdisableLeft(false);
			setdisableRight(false);
		}

		setcounterRight( counterRight + 1);
		
        counter.current = counter.current + 1;

        if (valRight === 6) {
            setValRight(prevCount => prevCount * 0);
        } else {
            setValRight(prevCount => prevCount + 1);
            let temp;
            temp = dataObj.shift();
            dataObj.push(temp);
        }

    }
    function toggleBackward() {

		if(counterRight === 3){
			setdisableLeft(false);
			setdisableRight(true);
		}else if(counterRight > 2){
			setdisableLeft(false);
			setdisableRight(false);
		}else{
			setdisableLeft(true);
			setdisableRight(false);
		}

		setcounterRight(counterRight - 1);
		

        if (valRight === 0) {
            setValRight(prevCount => 3)
        } else {
            setValRight(prevCount => prevCount - 1);
            let temp = dataObj.pop();
            dataObj.unshift(temp);

        }
    }


	return (
		<div>

			<section className="home-testimonial home-testimonial-new">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-8">
							<div className="heading-sec mb-5">
								<h2 className="title-first ">We are Only as Good as our Clients say WE ARE </h2>
							</div>
						</div>
					</div>

					<div className="row d-flex justify-content-center">

						<div className="col-lg-10">
				
						

						<div>
							
						</div>
							<div className="testimonial-slider">
								<div className='imgsub22'>
									<LazyLoader src={dataObj[1].img} threshold={[0, 0.5, 1]} className={'img-fluid'} width={"60"} height={"59"} alt={""}/>									
								</div>

								<div className='imgsub21'>
									<LazyLoader src={dataObj[2].img} threshold={[0, 0.5, 1]} className={'img-fluid'} width={"100"} height={"99"} alt={""}/>									
								</div>

								<div className='imgsub23'>
									<LazyLoader src={dataObj[3].img} threshold={[0, 0.5, 1]} className={'img-fluid'} width={"80"} height={"79"} alt={""}/>								
								</div>
								<div className="slider-item">
									<div className="slider-item-img">
										<LazyLoader src={dataObj[0].img} threshold={[0, 0.5, 1]} className={"img-fluid main-img-slide"} width={"397"} height={"393"} alt={""}/>								
									</div>
									<div className="slider-item-des">
										<div className="item-des-name-value d-flex align-items-start justify-content-between">
											<div className='d-flex flex-wrap w-75 align-items-center'>											
												
												<span className='tag-letter'><LazyLoader src={ImagePlay} className={'img-fluid'} width={"36"} height={"41"} alt={""}/></span>
												<h4>{dataObj[0].name}</h4>											
											</div>
											<h6 className='rght-txt'>{dataObj[0].date}</h6>
										</div>
										<div className="item-des-cont">
											<p>{dataObj[0].des}</p>
										</div>
										
										<div className="likes-view">
											<div className='likes-view-left'>
												<FontAwesomeIcon icon={faHeart} />
												<h5>{dataObj[0].likes}</h5>
											</div>
											
											<div className='right-btn-extr'>
												<button className='btn btn-outline-primary leftt-btn' aria-label="left arrow" disabled={disableLeft} onClick={toggleBackward} >
													<FontAwesomeIcon icon={faArrowLeftLong} />	
												</button>
												<button className='btn btn-outline-primary rightt-btn btn-xl' aria-label="right arrow" disabled={disableRight} onClick={toggleForward} >
													<FontAwesomeIcon icon={faArrowRightLong} />
												</button>
											</div>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


		</div>

	);
}

export default HomeTestimonial;
