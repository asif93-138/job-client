const jobLoader = async () => {
    const loadedJobs = await fetch('');
    const jobs = await loadedJobs.json();
    // console.log(jobs);


    

    return jobs;
}
export default jobLoader;