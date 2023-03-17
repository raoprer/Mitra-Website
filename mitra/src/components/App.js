import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import HomePage from './HomePage';

function App() {
  return (
    <div>
      <Sidebar/>
      <div className='container-fluid'><HomePage/></div>
    </div>
  );
}

export default App;
