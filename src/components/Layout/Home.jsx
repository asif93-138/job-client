import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <div className='root'><Header></Header></div>
            <div className='root'><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Home;