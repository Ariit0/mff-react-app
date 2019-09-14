import React, { Component } from 'react';
import './App.css';

import { JobCardList } from './components/JobCardList/JobCardList.component';

// using class system (no hooks) for practice
class App extends Component {
  render() {
    return (
      <div className='App'>
        <div className='container'>
          <h1>Mobius Final Fantasy Job Cards</h1>
          <JobCardList/>
        </div>
      </div>
    );
  }
}

export default App;
