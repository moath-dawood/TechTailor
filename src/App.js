import React from 'react';
import NavBar from './NavBar';
import Logo from './Logo';
import { Question } from './Question';
import BasicTabs from './BasicTabs';
import Footer from './Footer';
import { useState , useEffect } from "react";

import DashBoard from './Dashboard';

function App ()  {
 return( <div className='content'> 
    <NavBar>
    <Logo />
    </NavBar>
    <Question />
    <BasicTabs />
    
  
  </div>
 );
}
export default App; 


