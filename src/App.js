import React from 'react';
import NavBar from './NavBar';
import Logo from './Logo';
import { Question } from './Question';
import BasicTabs from './BasicTabs';
import Footer from './Footer';
import { useState , useEffect } from "react";

function App ()  {
 return( <div className='content'> 
    <Logo />
    <Question />
    <BasicTabs />
    <Footer/>
  
  </div>
 );
}
export default App; 


