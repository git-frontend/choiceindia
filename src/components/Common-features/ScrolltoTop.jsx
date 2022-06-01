import React,{useState,useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

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
        <button 
        onClick = {scrollTop} className="scroll-top">
        
        <FontAwesomeIcon icon={faAngleUp} /></button>
    )

}
    
    </div>
  )
}
