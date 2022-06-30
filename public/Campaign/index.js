
'use strict';

const e = React.createElement;

function LikeButton() {
  const [liked, toggleLiked] = React.useState(false);
  function geturl(){
    return `https://cmsapi.choiceindia.com//items/banners?filter[banner_type][_eq]=primary`
  }
  
  function change(){
   
   return axios.get(`https://cmsapi.choiceindia.com//items/banners?filter[banner_type][_eq]=primary`).then((res) => {

    console.log(res.data.data)
    return res.data.data
   


  })


}

setTimeout(

	function(){
    alert("My Pop Up");
    }
  ,10000 
  
);

  

  return(

    React.createElement('button',{ onClick:() =>{ 
      change();
    console.log("kkkk11");
    
    }  }, `Click to ${liked ? "unlike2" : "like2"}`)



    
    )
  


  }


const domContainer = document.querySelector('#like_button_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(LikeButton));



