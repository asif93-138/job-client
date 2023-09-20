import React from 'react';
import './JobDetail.css';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { addToDb } from '../../assets/utilities/fakedb';
import image1 from '../../assets/Icons/Frame.png';
import image2 from '../../assets/Icons/Frame-1.png';
import image3 from '../../assets/Icons/Frame-2.png';
import image4 from '../../assets/Icons/Frame-3.png';
import image5 from '../../assets/Icons/Frame-4.png';

const JobDetail = () => {
    // console.log(location.href[location.href.length - 1]);
    const [jobs, setJobs] = useState([]);
    const arr = useLoaderData();
    // console.log(arr.id);
    function apply(data) {
        alert('Applied!');
        addToDb(data);
    }
    return (
        <div>
            <div className='job-details'>
                
                <h1>{arr.companyname}</h1>
            </div>
            <div className='job-details-info'> 
                
                <div className='s-1'>
                    <img src={`../${arr.companylogo}`} className='' />
                    <p><strong>Job Description</strong> : {arr.jobdescription}</p>
                    <p></p>
                    <p><strong>Job Responsibilities</strong> : {arr.jobres}</p>
                    <p></p>
                    <p><strong>Educational Requirements</strong> : {arr.educationalreq}</p>
                    <p></p>
                    <p><strong>Experience</strong> : {arr.experience}</p>
                    <p></p>
                </div>
                <div>
                    <div className='job-details-card'>
                        <p className='csp'><strong>Job Details</strong></p>
                        <p><img src={image1} className='pos-fixing' /> <strong>Salary</strong> : {arr.salary}<br /><img src={image2} className='pos-fixing' /> <strong>Job Title</strong> : {arr.jobtitle}</p>
                        <p className='csp'><strong>Contact Information</strong></p>
                        <p><img src={image3} className='pos-fixing' /> <strong>Phone</strong> : {arr.contactinfo[0]}<br /><img src={image4} className='pos-fixing' /> <strong>Email</strong> : {arr.contactinfo[1]}<br /><img src={image5} className='pos-fixing' /> <strong>Address</strong> : {arr.location}</p>
                    </div>
                    <button className='ap-btn' type='button' onClick={() => {apply(arr.id)}}>Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobDetail; 