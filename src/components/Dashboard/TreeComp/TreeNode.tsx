import React from 'react'
import { TreeType } from './type'
export const TreeNode = ({ node }: { node: TreeType }) => {
  return (
    <div>
      {node.name}
      {/* Render child nodes if they exist */}
      {node.children && node.children.map(child => (
        <TreeNode key={child.id} node={child} />
      ))}
    </div>
  )
}
