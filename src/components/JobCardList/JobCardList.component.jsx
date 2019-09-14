import React from 'react';
import { JobCard } from '../JobCard/JobCard.component';

export const JobCardList = (props) => {
    const jobList = props.jobList;

    return (
        <div className='row'> {
            jobList.map(job => (
                <JobCard key={job.jobQueryString} jobs={job} />
            ))
        } </div>
    );
}