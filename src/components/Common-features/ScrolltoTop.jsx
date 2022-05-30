import React,{useState,useEffect} from 'react'

export default function ScrolltoTop() {

    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        
        window.addEventListener('scroll',()=>{
            if(window.scrollY >100){
                setScroll(true);
            }else{
                setScroll(false);

            }
        })
    }, [scroll])
  
    const scrollTop  = () =>{
        window.scrollTo({

            top:'0',
            behaviur:'smooth'
        })

    }

  return (
    <div>
{
    scroll && (
        <button style={{
            position:'fixed',
            right:"50px",
            bottom:"50px",
            height:"50px",
            width:"50px",
            backgroundColor:"#FFCE02",
            fontSize:"50px"

        }}  
        onClick = {scrollTop} >
        
        ^</button>
    )

}
    
    </div>
  )
}
