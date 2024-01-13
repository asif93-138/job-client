import React from 'react';
import './Header.css';
import logo from '../../assets/Images/logo.png';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='header'>
           <h1 className='brand-name'>CareerHub</h1>
           <div>
                <ActiveLink to='/'><span className="linking">Home</span></ActiveLink>
                <ActiveLink className="linking" to='/statistics'><span className="linking">Statistics</span></ActiveLink>
                <ActiveLink className="linking" to='/appliedjobs'><span className="linking">Applied Jobs</span></ActiveLink>
                <ActiveLink className="linking" to='/blogs'><span className="linking">Blogs</span></ActiveLink>
           </div>
           <button type='button' onClick={() => {alert('link does not work!')}}>Start Applying</button>
        </nav>
    );
};

export default Header;