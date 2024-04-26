import React, { useState } from 'react'
import { TreeType } from './type'
export const TreeNode = ({ node }: { node: TreeType }) => {
  const [toggle, setToggle] = useState<boolean>(false)
  const toggleExpanded = () => {
    setToggle(prevState => !prevState)
  }
  return (
    <div>
      <div style={{cursor:"pointer"}} onClick={toggleExpanded}>
        {node.children &&
          <span>{toggle ? "⬆️" : '⬇️'}
          </span>
        }
        {node.name}
      </div>

      {/* Render child nodes if they exist */}
      {toggle && node.children && (
        <div style={{ marginLeft: "20px" }}>
          {node.children.map(child => (
            <TreeNode key={child.id} node={child} />
          ))}
        </div>
      )}
    </div>
  )
}
