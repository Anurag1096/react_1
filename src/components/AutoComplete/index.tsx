import React,{useState,useEffect, ReactEventHandler} from 'react'
import './style.css'
interface Props{
    data:string[],
}

function AutoComplete(props:Props) {
    const [val,setValue]=useState<string>("")   
    const [dropActive,setDropActive]=useState<boolean>(false) 
    const handleClick=(event:any)=>{
         setValue(event.target.value)
    }
    // const handleBlur=()=>{
    //     setDropActive(false)
    // }
    useEffect(()=>{
      let newVal=!!val?.length
      setDropActive(newVal)
    },[val])
    
    const handleItemClick=(item:string)=>{
        setValue(item)
        
        setDropActive(false)
    }
    const renderItems= props.data.map((item,)=>{
        return (
            <div key={item}  onClick={()=>handleItemClick(item)}>{item}</div>
        )
    })



  return (
    <div>
        <input type='text' value={val} onChange={handleClick} 
        //onBlur={handleBlur} 
        />
        <div className={dropActive?'dropdown':'dropdown-hidden'}>{renderItems}
        </div>
    </div>
  )
}

export default AutoComplete