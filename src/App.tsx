import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/dashboard';
const App=()=>{
    return(
      // The dashboard is visivle on /
      
      <Dashboard/>
    )
}

export default App;