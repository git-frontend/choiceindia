import React, { useRef, useEffect } from "react";

export default function LazyLoader({ src,className, alt , width, height}) {
  const ref = useRef(null);
  const io = useRef(null);
  const temp = src;
  useEffect(() => {
    let tempObserver = null;
    if (ref.current) {
      io.current = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.intersectionRatio > 0.5) {
              ref.current.src = temp;
              io.current.unobserve(ref.current);
              console.log(ref.current);
            }
          });
        },
        {
          threshold: [0, 0.5, 1]
        }
      );
      io.current.observe(ref.current);
      tempObserver = ref.current;
    }

    return () => {    
      if(tempObserver){
        io.current.unobserve(tempObserver);
      }
    };

  }, [ref,temp]);

  return <img ref={ref} className={className} alt={alt} width={width} height={height} />;
}
