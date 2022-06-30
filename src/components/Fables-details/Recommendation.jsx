
import React, { useEffect, useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
// import  blogone  from '../../assets/images/fabledetails/blogone.png';
// import  blogtwo  from '../../assets/images/fabledetails/blogtwo.png';
// import  blogthree  from '../../assets/images/fabledetails/blogthree.png';
// import  blogfour  from '../../assets/images/fabledetails/blogfour.png';
function Recommendation(props) {

	// console.log('RECC',props.name);
	// console.log('RECC',props.Id);
	let navigate = useNavigate();
	const [disp, setDisp] = useState(() => false);
	const [data, setData] = useState(() => null);
	// const [ID, setID] = useState(() => null);
	// let data = [];


	// if(props.name){
	// 	data = props.name.filter((e) => {
	// 		return e.id != props.Id
	// 	})
	// }

	// if(data.length > 0){
	// 	setDisp(true);
	// }

	function Demo(id){
		// console.log('Demo called',id);
		// setID(() => id);
		navigate(`/fablesdetail/${id}`, { replace: true });
		// <Link to={`/fablesdetail/${data.name?data.name[1].id : 'NA'}`} >
			
		// </Link>
	}

	useEffect(() => {
		setDisp(true);
		setData(props);
	},[data,props])

  return (
	<>
	{
		disp?
		<div className='recommended'>
        <section className="recommendation">
            <div className="container">
            <div className="row">
						<div className="col-md-12">
							<h2>Recommended for you</h2>
						</div>
						<div className="col-md-12">
							<div className="blog-list">
								<div className="blog-item" onClick={() => Demo(data.name?data.name[0].id : 'NA')}>
									<div className="blog-item-img">
										<img src={data.name?data.name[0].feature_image : 'NA'} className="" alt="loading" />
									</div>
									<div className="item-des">
										<h4>{data.name?data.name[0].title : 'NA'}</h4>
										<p>{data.name?data.name[0].twitter_description : 'NA'}</p>
										{/* <div className="d-flex justify-content-between">
											<span className="sm-text">21 Aug 2021</span>
											<span className="sm-text">@SachinChadda</span>
										</div> */}
									</div>
								</div>
								
								{/* <Link to={`/fablesdetail/${data.name?data.name[0].id : 'NA'}`} >
									<div className="blog-item">
									<div className="blog-item-img">
										<img src={data.name?data.name[1].feature_image : 'NA'} className="" alt="loading" />
									</div>
									<div className="item-des">
										<h4>{data.name?data.name[1].title : 'NA'}</h4>
										<p>{data.name?data.name[1].twitter_description : 'NA'}</p>
										<div className="d-flex justify-content-between">
											<span className="sm-text">21 Aug 2021</span>
											<span className="sm-text">@SachinChadda</span>
										</div>
									</div>
									</div>
								</Link> */}
								<div className="blog-item" onClick={() => Demo(data.name?data.name[1].id : 'NA')}>
									<div className="blog-item-img">
										<img src={data.name?data.name[1].feature_image : 'NA'} className="" alt="loading" />
									</div>
									<div className="item-des">
										<h4>{data.name?data.name[1].title : 'NA'}</h4>
										<p>{data.name?data.name[1].twitter_description : 'NA'}</p>
										{/* <div className="d-flex justify-content-between">
											<span className="sm-text">21 Aug 2021</span>
											<span className="sm-text">@SachinChadda</span>
										</div> */}
									</div>
								</div>
								
								<div  className="blog-item" onClick={() => Demo(data.name?data.name[2].id : 'NA')}>
									<div className="blog-item-img">
										<img src={data.name?data.name[2].feature_image : 'NA'} className="" alt="loading" />
									</div>
									<div className="item-des">
										<h4>{data.name?data.name[2].title : 'NA'}</h4>
										<p>{data.name?data.name[2].twitter_description : 'NA'}</p>
										{/* <div className="d-flex justify-content-between">
											<span className="sm-text">21 Aug 2021</span>
											<span className="sm-text">@SachinChadda</span>
										</div> */}
									</div>
								</div>

                                <div className="blog-item" onClick={() => Demo(data.name?data.name[3].id : 'NA')}>
									<div className="blog-item-img">
										<img src={data.name?data.name[3].feature_image : 'NA'} className="" alt="loading" />
									</div>
									<div className="item-des">
										<h4>{data.name?data.name[3].title : 'NA'}</h4>
										<p>{data.name?data.name[3].twitter_description : 'NA'}</p>
										{/* <div className="d-flex justify-content-between">
											<span className="sm-text">21 Aug 2021</span>
											<span className="sm-text">@SachinChadda</span>
										</div> */}
									</div>
								</div>
							</div>
						</div>
					</div>
            </div>
        </section>
     
      
      
    
    </div>:
		'No Data Found'	
	}
	</>
   
  );
}

export default Recommendation;
