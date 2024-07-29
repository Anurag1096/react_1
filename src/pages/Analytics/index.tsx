import React,{useState} from 'react'
import "./style.css"
import AutoComplete from '../../components/AutoComplete'
function Analytics() {
 const [active,setActive]=useState(0)
  const data=[{
    title:"my first ",
    description:"some thing to do with "
  },{
     title:"my first 2 ",
    description:"some thing to do with "
  }]



  const handleClick=(index:any)=>{
    setActive(index)
  }
  return (<>

<div>Analytics
    </div>
    {data.map((item,index)=>{
      return(
        <>
        <div key={item.title}>

        <div  className={active == index?`active`:`passive`} onClick={()=>handleClick(index)}>{item.title}</div>
        <div>{item.description}</div>
        </div>
        <AutoComplete data={["a","b"]}/>
        </>
      )
    })}
  </>
  )
}

export default Analytics