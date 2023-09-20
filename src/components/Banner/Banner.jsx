import React from 'react';
import './Banner.css';
import image from '../../assets/Images/banner.png';
const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-text'>
                <h1 className='h1-m'>One Step <br />Closer To Your <br /><span>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button type='button' onClick={() => {alert('eto click koros kn!!!')}}>Get Started</button>
            </div>
            <img className='mb-res' src={image} />
        </div>
    );
};

export default Banner;