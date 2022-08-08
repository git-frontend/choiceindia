import React, { useState, useEffect } from "react";
import bannerimg from '../../assets/images/file-download/banner-img.png';

function FileDownloadBanner() {



	return (
		<div>
			<section className="bannersec">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="imgwrap">
							<img src={bannerimg} className={"img-fluid"} alt={"Loading"} width={""} height={""}/>
							</div>
							
						</div>
					</div>
					
				</div>
			</section>
		<section className="bluecolor">
			<div className="container">
			<div className="row ">
						<div className="col-md-12">
							<h1>Downloads</h1>
						</div>
					</div>
			</div>
		</section>

		</div>

	);
}

export default FileDownloadBanner;