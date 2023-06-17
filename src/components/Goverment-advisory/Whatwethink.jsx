
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
              Our unique services till last mile and with value addition were always appreciated in the last one decade. It was our service efforts that we grew from one state to 15 States and from 3 employees to 1000 employees in this vertical.
                </p>
                <p className="mainpara" >
                Social development sector is directly connected with under privileged, underserved citizens, where small efforts deliver major changes.
                </p>
                <p className="mainpara" >
                Although lots of NGOs and institutions are working in the area, there is still a need for professional agencies like us that can channelize expertise and design specific solutions with the intention of public service.
                </p>
                <p className="mainpara" >
                Various collector offices in tribal dominated zones specially in Chhattisgarh and Jharkhand have appreciated our idea of inclusive solutions and are ready to award us various orders.
                </p>
                <p className="mainpara" >
                Yes, deployment of required resources at remote areas and credential matching is a challenge for us, but by partnering with noble institutions we will bridge this gap.
                </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Whatwethink;
