import React from 'react';
import './Jobs.css';
import image1 from '../../assets/Icons/Frame-4.png';
import image2 from '../../assets/Icons/Frame.png';
import { Link } from 'react-router-dom';


const Jobs = (props) => {
    const {id, companylogo, jobtitle, companyname, remoteoronsite, location, fullorparttime, salary} = props.job;
    const getDetails = props.getDetails;
    return (
        <div className='job-card'>
            <img src={companylogo} />
            <div className='positioning'>
            <h3>{jobtitle}</h3>
            <p>{companyname}</p>
            <p><span className='border'>{remoteoronsite}</span> <span className='border'>{fullorparttime}</span></p>
            <p> <img className='pos-fixing' src={image1} /> {location} <img className='pos-fixing' src={image2} /> {salary}</p>
            
            <Link id='over-write' to={`/details/${id}`}><button type='button'>View Details</button></Link>
            </div>
        </div>
    );
};

export default Jobs; 

