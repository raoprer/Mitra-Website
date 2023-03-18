import React from 'react';
import './App.css';
import Sidebar from './Sidebar';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

function App() {
  return (
    <div>
    {/* <div>
      <Sidebar/>
      <div className='container-fluid'><HomePage/></div>
    </div> */}
    <div>
      <LoginPage />
    </div>
  </div>
  );
}

export default App;
