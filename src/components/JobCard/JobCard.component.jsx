import React from 'react';

import { Card } from 'react-bootstrap';

export const JobCard = (props) => {
    const job = props.jobs;

    return (
        <div className="col">
            <Card style={{ width: '9rem' }}>
                {/* TODO: add card thumb id to spreadsheet */}
                <Card.Img src="/images/id_09501_thum_atlas.png" style={{ height: '100%' }} />
                    <p>{job.jobName}</p>
            </Card>
        </div>
    );
}