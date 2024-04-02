import React,{useState} from "react";
import "./sideBar.css"
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [showSidebar,setShowSidebar] = useState<boolean>(true)
    const handleClick=()=>{
      setShowSidebar(prevState=>!prevState)
    }
    return (<>
        {/* <button className="sidebar_burger_button" onClick={handleClick}>burger</button> */}
        {showSidebar && (
                <div className="main_wrapper" aria-label="Sidebar">
                    <ul className="list_container">
                        <li className="list_item"><Link style={{ textDecoration: 'none' }} to="/">Home</Link></li>
                        <li className="list_item"><Link style={{ textDecoration: 'none' }} to="/analytics">Analytics</Link></li>
                        <li className="list_item"><Link style={{ textDecoration: 'none' }} to="/settings">Settings</Link></li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default SideBar;