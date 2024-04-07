import React,{useState} from 'react'
import "./Chat.css";
export const ChatApp = () => {
    /*  The chat app design 
        This is divided into two parts 
        Part 1 for the list of chats a person has 
        Part 2 the chat per person
    */
    const [showChat,setShowChat] = useState<boolean>(false) 
        const handleClick=()=>{
            setShowChat(prevState=>!prevState)
        }
    return (
    <section className='main_chat_wrapper'>
        <div className='chat_list_wrapper'>
            <h1>Chat List</h1>
             <button className="btn_show" onClick={handleClick}>Click</button>
            {/* This contain the chat list component */}
        </div>
        <div className={showChat?'specific_chat_section_small':"specific_chat_section"}>
            <h1>Specific Chat Section</h1>
            {showChat && 
             <button onClick={handleClick}>back</button>
            }
            {/* This contain the  */}
        </div>
    </section>
  )
}
