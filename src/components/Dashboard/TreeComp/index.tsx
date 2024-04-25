import React from 'react'
import {TreeNode} from './TreeNode'
import { TreeType } from './type'


export const Tree = ({ data }: { data: TreeType[] }) => {
    console.log(data)
  return (
   <div>
    {data.map((node:TreeType)=>{
    return <TreeNode key={node.id} node={node}/>
    })}
   </div>
  )
}
