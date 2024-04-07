import React,{useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import Home from '../../pages/Home';
import Analytics from '../../pages/Analytics';
import Settings from '../../pages/Settings';
import "./dashboard.css"
import HeaderNav from './Header';
import { ChatApp } from '../../pages/ChatApp';
export const Dashboard = () => {
  const [openSidebar,setOpenSidebar]=useState<boolean>(false)
  // The function toggels the side bar for open and close commands
  const handleClick=():void=>{
    setOpenSidebar(prevState=>!prevState)
    // alert("handle click has been executed by child")
  }
  return (
    <Router>
      {openSidebar && <div className='glass_background'></div>}
      <HeaderNav handleSidebar={handleClick}/>
           <div className='dashboard_wrapper'>
           <SideBar openSidebar={openSidebar} setCloseSidebar={setOpenSidebar}/>
           <div className='main_content'>
           <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/chat" element={<ChatApp/>}/>
            {/* Add more routes as needed */}
          </Routes>
          </div>
          </div>
        </Router>
  )
}
