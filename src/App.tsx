import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/dashboard';

import { Provider } from 'react-redux';
import { store } from './store';
const App = () => {
  return (
    // The dashboard is visivle on /
    true ?

      <Provider store={store}>
        <Dashboard />
      </Provider>

      : "app"
  )
}

export default App;