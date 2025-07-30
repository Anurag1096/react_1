import React,{useState,useEffect} from 'react'
import { CustomTable } from './Table'
import tableData from './tableData.json'
import { TableData } from './types'
import { useAppDispatch, useAppSelector } from "../../hooks";
import { increment, decrement } from "../../features/counter/counterSlice";
export const DataList = () => {

  
      const count = useAppSelector((state) => state.counter.value)
      const dispatch = useAppDispatch()
  const [tabData,setTabData]=useState<TableData[]>([])
  useEffect(()=>{
    setTabData(tableData)
  },[])
  return (
    
   <div>
       <h1>
                {count}
            </h1>
            <button onClick={()=> dispatch(increment())}>++</button>
            <button onClick={()=> dispatch(decrement())}>--</button>
    { tabData &&  <CustomTable tableData={tabData}/>}
   </div>


  )
}
