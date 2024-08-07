import React,{createContext} from 'react'
import { ChatData } from './types';
import "./ChatList.css"


export const ChatList: React.FC<{ data: ChatData[],chatClick: ()=>void }> = ({ data,chatClick }) => {
     const renderChatList=data.map((item)=>{
     const MyContext=createContext(3)
    const  handleChatListClick=()=>{
      if(window.innerWidth < 768){
         chatClick()
         
      }
    }


      return(
         <MyContext.Provider value={3}>
         
         <div className='chat_wrapper' key={item.name} onClick={handleChatListClick}>
            <div className='chat_img_container'>
               <img className='chat_img' src={item.img} alt="img" width="50px" height="40px"/>
            </div>
            <div className='chat_data'>
               <div><span>{item.name}</span> <span>{item.lastActive}</span></div>
               <div><span>{item.lastChat}</span></div>
            </div>
         </div>
         </MyContext.Provider>

      )
     })


    return (
    <div>
      {renderChatList}
    </div>
  )
}
