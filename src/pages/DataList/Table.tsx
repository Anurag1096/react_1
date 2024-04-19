import React,{useEffect, useState} from 'react'
import "./table.css"
import { TableData } from './types'
export const CustomTable: React.FC<{ tableData: TableData[] }> = ({ tableData }) => {
   const [data,setData]=useState([])
 const [select,setSelect] =useState<boolean>(false)
 const [selectAll,setSelectAll]=useState<boolean>(false)
  const renderTable = tableData.map((item, index) => {
   const handleOnChange=(e:any,id:number)=>{
    setData((prevState) => {
      if (prevState.includes(id)) {
        // If the ID is already in the selection, remove it
        return prevState.filter((item) => item !== id);
      } else {
        // If the ID is not in the selection, add it
        return [...prevState, id];
      }
    });
   }
  
    return (
      <tr key={item.id}>
        <td><input type='checkbox'  name='tab' checked={data.includes(item.id)} onChange={(e)=>handleOnChange(e,item.id)} /></td>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.city}</td>
        <td>{item.country}</td>
      </tr>
    )
  })
  const handleSelectAll=()=>{
    setSelectAll((prevState) => !prevState); // Toggles selectAll state
  if (!selectAll) {
    // If selectAll is false, we want to select all rows
    setData(tableData.map((item) => item.id)); // Update data with all row IDs
  } else {
    // If selectAll is true, we want to deselect all rows
    setData([]); // Clear the selection
  }
  } 

  useEffect(()=>{
    if(data.length){
      setSelect(true)
    }else{
      setSelect(false)
    }
    console.log(data)
   },[data])
  return (
    <table>
      <thead>
        { select &&
          <button onClick={handleSelectAll}>Select All</button>

        }
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {renderTable}
      
      </tbody>
    </table>

  )
}
