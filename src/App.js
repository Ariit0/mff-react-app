import React, { useState } from 'react';
import './App.css';
import { useFetch } from './hooks/useFetch';

import { SearchBar } from './components/SearchBar/SearchBar.component';
import { JobCardList } from './components/JobCardList/JobCardList.component';

const App = () => {
    const [search, setSearch] = useState("");

    const res = useFetch("http://localhost:8080/beta/jobs", {});

    if (res.isLoading || !res.response) {
        return <div>Loading...</div>
    }

    const jobList = res.response;
    
    return (
        <div className='App'>
            <div className='container'>
                <h1>Mobius Final Fantasy Job Cards</h1>
                <SearchBar 
                    placeholder='search jobs'
                    handleChange={e => setSearch(e.target.value)}
                />

                <JobCardList 
                    jobList={
                        jobList.filter(jobs => jobs.jobName.toLowerCase()
                            .includes(search.toLocaleLowerCase()))
                    }
                />
            </div>
        </div>
    );
}

export default App;
