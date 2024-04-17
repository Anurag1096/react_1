import React,{useState,useEffect} from 'react'
import { CustomTable } from './Table'
import tableData from './tableData.json'
import { TableData } from './types'
export const DataList = () => {
  const [tabData,setTabData]=useState<TableData[]>([])
  useEffect(()=>{
    setTabData(tableData)
  },[])
  return (
    
   <div>
    { tabData &&  <CustomTable tableData={tabData}/>}
   </div>


  )
}
