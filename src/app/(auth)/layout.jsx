import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import NewArrivals from '@/components/shared/NewArrivals';
import React from 'react';

const AuthLayout = ({ children }) => {
    return (
        <>
       
        <Navbar/>
        {children}
        
        </>
    );
};

export default AuthLayout;