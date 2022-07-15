import { useEffect, useState } from 'react';
import '../src/assets/css/common.scss'
import Body from './components/Body/Body';
import meta_tags from './Data/MetaTags';
// import {
//   useLocation,
// } from 'react-router-dom';

function App() {
    /**To Execute one timeonly */
//     const [trigger, setTrigger] = useState(false)
//   useEffect(() => {
//     setTrigger(true)
//     if (trigger === true) {
//       console.log("app called")
//      setTimeout(()=>{
//       window.scrollTo({ top: 0, behavior: 'smooth' })
//      },500)
//     }

// }, [trigger])

useEffect(()=>{
setTimeout(()=>{
  window.scrollTo({ top: 0, behavior: 'smooth' })
},1000)
})


  // const location = useLocation();
  // const [location , setLocation] = useState(useLocation());

  // useEffect(() => {
  //   setLocation(() => useLocation);
  //   console.log('LLLL',location);
  // },[])

  // const [tag, setTag] = useState(window.location.pathname.replace('/',""));
  
  // useEffect(() => {
  //   setTag(window.location.pathname.replace('/',""));
  //   console.log('TTTT',tag);  
  // },[tag])

  // // console.log('TTTT2222',tag);
  // console.log('TTTTT2',window.location.pathname.replace('/',""))

  // const tag = window.location.pathname.replace('/',"");
  
  //  setTag(() => window.location.pathname.replace('/',"")); 

  // let tag = "services"; 

  // document.getElementsByTagName("META")[2].name= meta_tags[tag]? meta_tags[tag].title : ''  ;
  // document.getElementsByTagName("META")[2].content=meta_tags[tag]? meta_tags[tag].content : '';
  // document.getElementsByTagName("META")[2].name= meta_tags['services'].title;
  // document.getElementsByTagName("META")[2].content='Sample Description';
  return (
    <div className="App">

      <Body>
        
      </Body>
      
    </div>
  );
}

export default App;
