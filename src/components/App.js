import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="ui center aligned container bg1 app-spacing">
      <h1>Alto Prado</h1>
      <h5>Community Facility Booking System</h5>
      <div className="ui two column centered grid">
        <div className='column'>
        <div className="ui card centered-content">
          <div className="image">
            <img src="./meeting.jpeg" alt="meeting room." />
          </div>
          <div className="content">
            <a className="header">Meeting Room</a>
            <div className='meta'>
              <span className='date'>Next available slot 14:00hrs Tomorrow.</span>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default App;
