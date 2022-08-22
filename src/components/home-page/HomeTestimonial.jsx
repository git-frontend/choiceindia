// import ImageSub23 from '../../assets/images/homeimg-small3.png';
import ImageTesti1 from '../../assets/images/uditgoyal.webp';
import ImageTesti2 from '../../assets/images/MOChug.webp';
import ImageTesti3 from '../../assets/images/Aiyer.webp';
import ImageTesti4 from '../../assets/images/SatishPrajapati.webp';
import ImageTesti5 from '../../assets/images/ShibiMitra.webp';
import ImageTesti6 from '../../assets/images/VisheshST.webp';
import ImageTesti7 from '../../assets/images/Kamlesh.webp';
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

	// const settings2 = {
	// 	infinite: false,
	// 	speed: 1500,
	// 	fade: true,
	// 	arrows: true,
	// 	slidesToShow: 1,
	// 	autoplay: false,
	// 	dots: false,
	// 	autoplaySpeed: 1000,
	// 	slidesToScroll: 1,
	// };

	 // const breakPoints = [
    //     { width: 1, itemsToShow: 1 },
    //     { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    //     { width: 768, itemsToShow: 3 },
    //     { width: 1200, itemsToShow: 3 }
    // ];

    // const dataObj = [
    //     {
    //         "img": ImageSub25, "name": "Sachin Chadda", "tag": "@SachinChadda", "date": "21 Aug 2021", "likes": "27",
    //         "des": "They will never share your private data without your consent. They are market leader for right reasons." +
    //             "They are the best brokers in town and provide the best services to their clients."
    //     },

    //     {
    //         "img": ImageSub23, "name": "Elon Musk", "tag": "@ElonMusk", "date": "15 Nov 2005", "likes": "100",
    //         "des": "Do more with buttons. Control button states or create groups " +
    //             " of buttons for more components like toolbars."
    //     },

    //     {
    //         "img": ImageSub24, "name": "Leo Messi", "tag": "@LeoMessi", "date": "25 Jun 2015", "likes": "57",
    //         "des": "<a>s don’t support the disabled attribute, so you must add the" +
    //             ".disabled className to make it visually appear disabled."
    //     },


    //     {
    //         "img": ImageSub22, "name": "Kovac", "tag": "@Slokovia", "date": "10 May 2010", "likes": "84",
    //         "des": " If you create a new HTML document and test this example out by pasting all of" +
    //             "the above code and markup into it, you'll see."
    //     }
    // ]

    const [valRight, setValRight] = useState(() => 0);


    const [dataObj, setdataObj] = useState(() => [
        {
            "img": ImageTesti1, "name": "Udit Goyal", "tag": "@uditgoyal09", "date": "20 Aug 2021", "likes": "27",
            "des": "They will never share your private data without your consent. They are market leader for right reasons. They are the best brokers in town and provide the best services to their clients."
        },

		{
            "img": ImageTesti2, "name": "Monish Chug", "tag": "@MOChug1992", "date": "1 Feb 2021", "likes": "56",
            "des": "They are delivering the right experience for investing through their app. the process is quiet simplified and secured with two factor authentication. I highly recommend them."
        },


        {
            "img": ImageTesti3, "name": "Aparajitha Aiyer", "tag": "@Aiyer23", "date": "21 May 2022", "likes": "94",
            "des": "Had the best experience with the customer support. Their representative patiently listened to all my problems and provided me with immediate help. Kudos to the customer support team."
        },

        {
            "img": ImageTesti4, "name": "Satish Prajapati", "tag": "@SatishPrajapati161", "date": "13 Aug 2021", "likes": "48",
            "des": "I’m really happy with the research calls here. The quality of research is really impressive. I’ve been able to book some handsome profits because of these reseach calls. Thanks!!! "
        },

		{
            "img": ImageTesti5, "name": "Shibani Mitra", "tag": "@ShibiMitra88", "date": "09 Sept 2021", "likes": "61",
            "des": "Everyone who invests in stock markets should experience their app. No lags or other problems whatsoever. Everything right from sign in to trade execution is seemless."
        },
		{
            "img": ImageTesti6, "name": "Vishesh Singh Thakur", "tag": "@VisheshST9999", "date": "18 Oct 2021", "likes": "48",
            "des": "I’m a beginner in stock market investing and I find this app very helpful. The research section is of great help and the trading window is also good and simple to use."
        },
		{
            "img": ImageTesti7, "name": "Kamlesh Bhadoria", "tag": "@Kamlesh83", "date": "30 Sept 2021", "likes": "71",
            "des": "I have tried their stock collections and baskets and I must say they are full of great stock ideas. The baskets are a great way of investing with diversification."
        }
    ])
	const [counterRight, setcounterRight] = useState(() => 1);
	const [disableRight, setdisableRight] = useState(() => false);
	const [disableLeft, setdisableLeft] = useState(() => true);

    const counter = useRef(0);
    function toggleForward() {

		// console.log('DDDD',counterRight);
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
            //  temp = setdataObj((oldArray) => [...oldArray,oldArray.shift()])
            temp = dataObj.shift();
            //  setdataObj((oldArray) => [...oldArray,oldArray.push(temp)])
            dataObj.push(temp);
            // setdataObj((oldArray) => [...oldArray, oldArray.pop()])
        }

    }
    // console.log('counter', counter);
    // console.log('data', dataObj);
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
            // console.log('temp', temp)
            // console.log(dataObj);
            dataObj.unshift(temp);
            // console.log('after left', dataObj)
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
									<LazyLoader src={dataObj[1].img} threshold={[0, 0.5, 1]} className={'img-fluid'} width={"60"} height={"59"} alt={"Loading"}/>
									{/* <img src={dataObj[1].img} alt="Loading" /> */}
								</div>

								<div className='imgsub21'>
									<LazyLoader src={dataObj[2].img} threshold={[0, 0.5, 1]} className={'img-fluid'} width={"100"} height={"99"} alt={"Loading"}/>
									{/* <img src={dataObj[2].img} alt="Loading" /> */}
								</div>

								<div className='imgsub23'>
									<LazyLoader src={dataObj[3].img} threshold={[0, 0.5, 1]} className={'img-fluid'} width={"80"} height={"79"} alt={"Loading"}/>
									{/* <img src={dataObj[3].img} alt="Loading" /> */}
								</div>
								<div className="slider-item">
									<div className="slider-item-img">
										<LazyLoader src={dataObj[0].img} threshold={[0, 0.5, 1]} className={"img-fluid main-img-slide"} width={"397"} height={"393"} alt={"Loading"}/>
										{/* <img src={dataObj[0].img} alt="Loading" className="main-img-slide" /> */}
									</div>
									<div className="slider-item-des">
										<div className="item-des-name-value d-flex align-items-start justify-content-between">
											<div className='d-flex flex-wrap w-75'>
												<FontAwesomeIcon icon={faTwitter} />
												<h4>{dataObj[0].name}</h4>
												<h6 className='w-75'>{dataObj[0].tag}</h6>
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
