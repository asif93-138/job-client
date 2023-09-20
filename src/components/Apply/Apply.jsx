import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getShoppingCart } from '../../assets/utilities/fakedb';
import Applied from '../Applied/Applied';
import './Apply.css';

const Apply = () => {
    const jobs = useLoaderData();
    // console.log(jobs);
    const storedData = getShoppingCart();
    const convertedArr = Object.getOwnPropertyNames(storedData);
    // console.log(convertedArr);
    const savedJobs = [];
    for (let id of convertedArr) {
        // console.log(typeof id);
        const appliedjob = jobs.find(job => job.id === Number(id));
        if (appliedjob) {
            savedJobs.push(appliedjob);
        }
    }
    // console.log(savedJobs);
    return (
        <div className='horz-al'>
            <div className='bg-img'><h2 className='h-place'>Applied Jobs</h2></div>
            
            <div className='pos-del'><button onClick={() => {localStorage.clear(); location.reload();}} type='button' id='over-write'>Delete Applications</button></div>
            <div>
                {savedJobs.map(job => <Applied key={job.id} job={job} />)}
            </div>
        </div>
    );
};

export default Apply;