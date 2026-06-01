
import Banner from '@/components/shared/Banner';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import Navbar from '@/components/shared/Navbar';
import NewArrivals from '@/components/shared/NewArrivals';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <>
        <Banner/>
        <Header/>
 <NewArrivals />
            <Navbar />
           

            {children}
            <Footer />
        </>


    );
};

export default MainLayout;