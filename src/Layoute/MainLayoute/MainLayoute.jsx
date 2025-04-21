import React from 'react';
import Navbar from '../../Component/SharedComponent/Navbar';
import Footer from '../../Component/SharedComponent/Footer';
import { Outlet } from 'react-router-dom';

const MainLayoute = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayoute;