import React from 'react';
import './Applied.css';
import image1 from '../../assets/Icons/Frame-4.png';
import image2 from '../../assets/Icons/Frame.png';
import { Link } from 'react-router-dom';

const Applied = (props) => {
    // console.log(props.job);
    const {id, companylogo, jobtitle, companyname, remoteoronsite, location, fullorparttime, salary} = props.job;
    return (
        <div className='card-s'>
            <div className='c-txt'>
                <img src={companylogo} className='rez' />
                <div className='w-fix'>
                    <h5 className='red-sp'>{jobtitle}</h5>
                    <p className='red-sp'>{companyname}</p>
                    <p className='red-sp cs-sp'><span className='border'>{remoteoronsite}</span> <span className='border'>{fullorparttime}</span></p>
                    <p className='red-sp'> <img className='pos-fixing' src={image1} /> {location} <img className='pos-fixing' src={image2} /> {salary}</p>
                </div>
            </div>
            <Link id='over-write' to={`/details/${id}`}><button type='button'>View Details</button></Link>
        </div>
    );
};

export default Applied;