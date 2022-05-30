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
    }, [])
  
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
            bottom:"10px",
            boxShadow:"0px 3px 3px 0px #DDD7D5",
            backgroundColor:"#FFCE02",
            borderRadius:"10px",
            fontSize:"20px",
            opacity:"100px"

        }}  
        onClick = {scrollTop} >
        
        ^</button>
    )

}
    
    </div>
  )
}
