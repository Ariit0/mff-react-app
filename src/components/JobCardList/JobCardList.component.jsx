import React from 'react';
import { useFetch } from '../../hooks/useFetch';

import { Card } from 'react-bootstrap';

export const JobCardList = (props) => {
    const res = useFetch("http://localhost:8080/beta/jobs", {});

    if (res.isLoading || !res.response) {
        return <div>Loading...</div>
    }

    const jobs = res.response;

    return (
        <div className='row'> {
            jobs.map(job => (
                <div className="col">
                    <Card style={{ width: '9rem' }}>
                        <Card.Img src="/images/id_09501_thum_atlas.png" style={{ height: '100%' }} />
                            <p style={{ overflow: 'hidden' }}>{job.jobName}</p>
                    </Card>
                </div>
            ))
        } </div>
    );
}