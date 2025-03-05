import React, { Component } from 'react'
import "./Header.css"
type Props={
   handleSidebar():void,
}
// Header 

function HeaderNav(props:Props) {
  const{handleSidebar}=props;
  // The handle click function invokes handleSidebar and returns void.
  const handleClick=():void=>{
    handleSidebar();
  }
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <button className='btn_hamburg' onClick={handleClick}>Ham</button>
      </div>
      <nav style={navStyle}>
        <ul style={ulStyle}>
          <li style={liStyle}><a href="#">Home</a></li>
          <li style={liStyle}><a href="#">About</a></li>
          <li style={liStyle}><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Styles
const headerStyle:any = {
  position:'sticky',
  top:"0",
  backgroundColor: '#F0F5F9 ',
  maxWidth:"1500px",
  color: '#fff',
  padding: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
};

const logoStyle:any = {
  fontSize: '1.5rem'
};

const navStyle:any = {
  textAlign: 'right'
};

const ulStyle:any = {
  listStyleType: 'none',
  margin: '0',
  padding: '0'
};

const liStyle:any = {
  display: 'inline-block',
  marginLeft: '10px'
};


export default HeaderNav;