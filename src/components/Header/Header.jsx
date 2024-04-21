import React from 'react';
import './Header.css';
import logo from '../../assets/Images/logo.png';
import { Link } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav className='header'>
           <Link className='brand-link' to='/'><h1 className='brand-name'>CareerHub</h1></Link>
           <div>
                <ActiveLink to='/'><span className="linking">Home</span></ActiveLink>
                <ActiveLink className="linking" to='/statistics'><span className="linking">Statistics</span></ActiveLink>
                <ActiveLink className="linking" to='/appliedjobs'><span className="linking">Applied Jobs</span></ActiveLink>
               
           </div>
           <a href='/#find'><button type='button'>Start Applying</button></a>
        </nav>
    );
};

export default Header;