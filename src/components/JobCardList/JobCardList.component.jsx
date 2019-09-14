import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import { JobCard } from '../JobCard/JobCard.component';

export const JobCardList = (props) => {
    const res = useFetch("http://localhost:8080/beta/jobs", {});

    if (res.isLoading || !res.response) {
        return <div>Loading...</div>
    }

    const jobList = res.response;

    return (
        <div className='row'> {
            jobList.map(job => (
                <JobCard jobs={job} />
            ))
        } </div>
    );
}