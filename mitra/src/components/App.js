import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import HomePage from './HomePage';

function App() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
      <HomePage/>
    </div>
  );
}

export default App;
