
import React from "react";
import LazyLoader from "../Common-features/LazyLoader";
import { useState } from "react";

function Banner() {

    const [skeleton, setSkeleton] = useState(() => true);
    setTimeout(() => {
      setSkeleton(() => false  );
    }, 3000)

    return (
        <div>


          <h1>hello</h1>


        </div>
    );
}

export default Banner;
