
import React from "react";
import { useState } from "react";

function Whatwethink() {

  const [skeleton, setSkeleton] = useState(() => true);
  setTimeout(() => {
    setSkeleton(() => false);
  }, 3000)

  return (
    <div>

      <section className="what-we-thinksection">
        <div className="container">
          <div className="row">
            <div className="col-md-12 ">
              <h1 className="title-first sectitle">What we think</h1>
              <p className="mainpara" >
                Our unique services till last mile and with value addition were always appreciated in last one decade. It was our service efforts that we grew from one state to 15 States and from 3 employee to 1000 employees in this vertical.
                </p>
                <p className="mainpara" >
                Social development sector is directly connected with under privileged, underserved citizen, here small efforts deliver a major changes.
                </p>
                <p className="mainpara" >
                Although lots of NGOs and institutions is working under the area but still there is need of professional agencies like us that can channelize exports, design specific solutions with intention of public services.
                </p>
                <p className="mainpara" >
                Various collector office in tribal dominated zone specially in Chhattisgarh and Jharkhand has appreciated our idea of inclusive solutions and ready to avoid us various orders.
                </p>
                <p className="mainpara" >
                Yes. deployment of required resources at remote area and credential matching is challenge for us, but by partnering with noble institutions we will bridge this gap.
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Whatwethink;
