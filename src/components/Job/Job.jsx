import React, { useEffect, useState } from 'react';
import './Job.css';
import Jobs from '../Jobs/Jobs';
import Banner from '../Banner/Banner';
import JCList from '../JCList/JCList';
import { useLoaderData } from 'react-router-dom';

const Job = () => {
    const jobs = useLoaderData();
    const arranged = jobs.slice(0, 4);
    // console.log(jobs.slice(0, 4));

    // useEffect(() => {
    //     fetch('jobs.json')
    //     .then(res => res.json())
    //     .then(data => console.log(data))
    // }, [])


    const [cart, setCart] = useState([]);
    const [count, setCount] = useState(0);

    const getDetails = (job) => {
        console.log('details coming soon..');
        console.log(job.id);
       
    };

    function showAll() {
        document.getElementById('cloak').style.display = 'none';
        setCount(1);
    }
    
    return (
        
        <div>

            <Banner></Banner>
            <JCList></JCList>


            <div className='job-container'>
            <div className='job-header'>
                    <h2>Featured Jobs</h2>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div id='find' className='jobs'>
                {
                    (count)    ?
                        jobs.map(job => <Jobs key={job.id} job={job} getDetails={getDetails}></Jobs>)
                        :
                        arranged.map(job => <Jobs key={job.id} job={job} getDetails={getDetails}></Jobs>)
                }
            </div>
            <div className='job-header'>
                    <button id='cloak' type='button' onClick={showAll}>Show All Jobs</button>
            </div>
            </div>
        </div>
           
    );
};

export default Job;



