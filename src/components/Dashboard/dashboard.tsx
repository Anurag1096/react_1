import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './SideBar';
import Home from '../../pages/Home';
import Analytics from '../../pages/Analytics';
import Settings from '../../pages/Settings';
import "./dashboard.css"
import HeaderNav from './Header';
export const Dashboard = () => {
  return (
    <Router>
      <HeaderNav/>
           <div className='dashboard_wrapper'>
           <SideBar/>
           <div className='main_content'>
           <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/analytics" element={<Analytics/>} />
            <Route path="/settings" element={<Settings/>} />
            {/* Add more routes as needed */}
          </Routes>
          </div>
          </div>
        </Router>
  )
}
