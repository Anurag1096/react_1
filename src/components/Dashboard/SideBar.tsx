import React,{useState} from "react";
import "./sideBar.css"
import { Link } from 'react-router-dom';
type Props={
    openSidebar:boolean,
    setCloseSidebar:(a:boolean)=>void,
}
const SideBar = (props:Props) => {
    const{openSidebar,setCloseSidebar}=props;
    
    const handleClick=()=>{
           setCloseSidebar(!openSidebar)
    }
    return (<>
        {/* <button className="sidebar_burger_button" onClick={handleClick}>burger</button> */}
        <div className={openSidebar?`main_wrapper2`:"main_wrapper"} aria-label="Sidebar">
           {openSidebar && <button className="btn_close" onClick={handleClick}>close</button>}
                    <ul className="list_container">
                        <li className="list_item"><Link style={{ textDecoration: 'none' }} to="/">Home</Link></li>
                        <li className="list_item"><Link style={{ textDecoration: 'none' }} to="/analytics">Analytics</Link></li>
                        <li className="list_item"><Link style={{ textDecoration: 'none' }} to="/settings">Settings</Link></li>
                        <li className="list_item"><Link style={{textDecoration:"none"}} to ='/chat'>Chat</Link></li>
                    </ul>
                </div>
        </>
    )
}

export default SideBar;