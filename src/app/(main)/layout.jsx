
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
       <>
      
        <Navbar/>
        <Footer/>
        {children}
       </>
              
        
    );
};

export default MainLayout;