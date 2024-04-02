import React from "react";

const Home=()=>{
  const arr:number[]=[1,32,4,3,2,43,3,2,3,4,3,2,23,3,2,3,12,21,21,1,1,2,34,23,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,123,23,232]
   const render=arr.map((item:number,index:number)=>{
    return(
        <div key={index}>{item}</div>
    )
   })
   

    return(<div>this is home
        
        {render}
    </div>)
}

export default Home;