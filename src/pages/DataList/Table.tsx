import React from 'react'
import "./table.css"
import { TableData } from './types'
export const CustomTable: React.FC<{ tableData: TableData[] }> = ({ tableData }) => {
 
  const renderTable = tableData.map((item, index) => {
    return (
      <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.age}</td>
        <td>{item.city}</td>
        <td>{item.country}</td>
      </tr>
    )
  })

  return (
    <table>
      <thead>

        <tr>
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
