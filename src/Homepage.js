import React from 'react';
import Logo from './Logo';
import { Question } from './Question';
import BasicTabs from './BasicTabs';
import Footer from './Footer';


function Homepage() {
    return (
        <div className='content'>
            <Logo />
            <Question />
            <BasicTabs />
            <Footer />
        </div>
    );
}

export default Homepage; 