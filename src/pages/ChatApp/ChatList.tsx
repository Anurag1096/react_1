import React from 'react'
import { ChatData } from './types.ts';
type Props={
   data:Array<object>;
}


export const ChatList: React.FC<{ data: ChatData[] }> = ({ data }) => {

    console.log("data",data)
     const renderChatList=data.map((item)=>{
      return(
         <div key={item.name}>
            chatList
         </div>
      )
     })


    return (
    <div>
      {renderChatList}
    </div>
  )
}
